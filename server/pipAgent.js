import { systemBrain } from "./pipData.js";
import { createGrowPlan, createReminder, fallbackAnswer, getBuildStep, getWizardSchema, recommendParts } from "./pipTools.js";
import { appendProjectMessage, buildProjectContext } from "./pipMemory.js";
import { formatContextForPrompt, retrieveHydroPipContext } from "./ragStore.js";

let clientPromise;

const toolMap = {
  get_build_step: getBuildStep,
  recommend_parts: recommendParts,
  create_grow_plan: createGrowPlan,
  create_reminder: createReminder,
  get_wizard_schema: getWizardSchema
};

const tools = [
  {
    type: "function",
    name: "get_build_step",
    description: "Return HydroPip build steps or one specific build step.",
    parameters: {
      type: "object",
      properties: { stepId: { type: "string", enum: ["anchor", "stack", "plumb", "pumps", "calibrate"] } },
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "recommend_parts",
    description: "Return HydroPip parts and quantities for a tower count.",
    parameters: {
      type: "object",
      properties: { towerCount: { type: "number" } },
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "create_grow_plan",
    description: "Create a HydroPip grow plan and deterministic reminder list.",
    parameters: {
      type: "object",
      properties: {
        towerCount: { type: "number" },
        crop: { type: "string" },
        plantingDate: { type: "string" },
        reservoirGallons: { type: "number" },
        climateMode: { type: "string" },
        feedDurationMinutes: { type: "number" },
        runoffLevel: { type: "string" },
        ph: { type: ["number", "null"] },
        ec: { type: ["string", "null"] }
      },
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "create_reminder",
    description: "Attempt to save a grow reminder. Requires active subscription.",
    parameters: {
      type: "object",
      properties: {
        user: { type: "object", additionalProperties: true },
        reminder: { type: "object", additionalProperties: true },
        subscription: { type: "object", additionalProperties: true }
      },
      additionalProperties: false
    }
  },
  {
    type: "function",
    name: "get_wizard_schema",
    description: "Return the setup wizard questions Pip needs before building a grow profile.",
    parameters: { type: "object", properties: {}, additionalProperties: false }
  }
];

export async function askPip({ message, profile, subscription, history = [], user, projectId }) {
  const trimmed = String(message || "").trim();
  if (!trimmed) return { answer: "Ask me where you are in the HydroPip build and I will guide the next step.", mode: "empty" };
  const retrieval = retrieveHydroPipContext(trimmed, { limit: 7 });
  const retrievedContext = formatContextForPrompt(retrieval);
  const userId = String(user?.id || user?.email || "").trim();
  const projectContext = userId && projectId ? buildProjectContext({ userId, projectId }) : null;
  const projectMemory = projectContext
    ? { active: true, projectId, projectType: projectContext.project.type }
    : { active: false, reason: userId && projectId ? "project_not_found" : "not_requested" };

  rememberProjectMessage(projectContext, {
    userId,
    projectId,
    role: "user",
    content: trimmed
  });

  if (wantsCustomNonHydroPipSupport(trimmed) && !subscription?.active) {
    const answer = [
      "Custom help for DWC, NFT, Kratky, Dutch buckets, ebb and flow, drip, aeroponics, aquaponics, or other non-HydroPip systems is Pip Pro.",
      "For free, I can walk you through the real HydroPip timed-feed tower build, parts list, Amazon links, first fill, and basic operation. Want to start with one tower or the full four-tower setup?"
    ].join("\n\n");
    rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "subscription_gate",
      sources: []
    });
    return {
      answer,
      mode: "subscription_gate",
      sources: [],
      subscriptionRequired: true,
      upgradeReason: "Pip Pro unlocks custom support for non-HydroPip hydro systems, saved plans, reminders, readings, and grow logs.",
      projectMemory
    };
  }

  const client = await getOpenAiClient();
  if (!client) {
    const answer = fallbackAnswer(trimmed, retrieval);
    rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "rules_fallback",
      sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }))
    });
    return {
      answer,
      mode: "rules_fallback",
      sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score })),
      subscriptionRequired: wantsTracking(trimmed) && !subscription?.active,
      projectMemory
    };
  }

  const response = await client.responses.create({
    model: process.env.PIP_MODEL || "gpt-5-mini",
    instructions: [
      systemBrain,
      "Use HydroPip tools whenever the user asks for build steps, parts, grow plans, reminders, or setup questions.",
      "Use the retrieved HydroPip knowledge-base context below before generic hydroponic knowledge.",
      "HydroPip is a real timed-feed runoff tower system, not a recirculating tower kit. Do not recommend return plumbing, drain plumbing, recycling tower runoff, filters for returning runoff, or generic recirculating tower layouts unless the user explicitly asks to compare alternatives.",
      "For the physical build, describe the actual HydroPip parts: driven Schedule 40 support pipe, single-cell cinder block base, stackable four-pot sections, PVC tee hose guide, main feed hose, small feed tubes, diffuser pieces, 275 gallon IBC, one circulation pump, one feed pump, outdoor two-outlet smart plug, and reusable 50/50 perlite/vermiculite media.",
      "Free mode should be genuinely useful for building and operating the HydroPip system. When parts are relevant, naturally point users to the HydroPip parts list and Amazon affiliate links instead of giving unrelated shopping advice.",
      "Custom guidance for non-HydroPip systems, including DWC, NFT, Kratky, Dutch buckets, ebb and flow, drip systems, or custom hydro setups, is Pip Pro. Free users can receive a brief explanation of the boundary and should be invited to use HydroPip Build for free.",
      "If the retrieved context is not enough for an exact recommendation, say what is missing and ask one focused follow-up question.",
      "Free users may receive HydroPip setup/build guidance and one HydroPip grow plan.",
      "Saving reminders, storing grow logs, persistent tracking, personalized calculators, and sensor-based schedule tuning require Pip Pro or future Pro features. Do not present future Pro features as already live unless tool data confirms they are active.",
      "Do not pretend reminders are saved unless create_reminder returns queued.",
      "If projectContext is provided, use it as the user's saved project memory and continue that project instead of treating the question as a fresh visitor chat.",
      "Default to short chat answers: 1 to 3 compact bullets or short paragraphs, usually under 70 words. Avoid long headings like 'Short answer' unless helpful. Offer to continue with the next step instead of giving the whole guide at once. Only give long detailed answers when the user asks for a full walkthrough, printable checklist, or full parts list.",
      `Retrieved HydroPip knowledge-base context:\n${retrievedContext}`
    ].join("\n\n"),
    input: [
      ...history.slice(-8),
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: JSON.stringify({
              message: trimmed,
              currentProfile: profile || null,
              subscription: subscription || { active: false, plan: "free" },
              projectContext: compactProjectContext(projectContext)
            })
          }
        ]
      }
    ],
    tools,
    tool_choice: "auto"
  });

  const toolResults = [];
  for (const item of response.output || []) {
    if (item.type !== "function_call") continue;
    const handler = toolMap[item.name];
    if (!handler) continue;
    const args = item.arguments ? JSON.parse(item.arguments) : {};
    toolResults.push({
      type: "function_call_output",
      call_id: item.call_id,
      output: JSON.stringify(handler(args))
    });
  }

  if (!toolResults.length) {
    const answer = response.output_text || fallbackAnswer(trimmed, retrieval);
    const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
    rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "ai_rag",
      sources
    });
    return {
      answer,
      mode: "ai_rag",
      sources,
      projectMemory
    };
  }

  const final = await client.responses.create({
    model: process.env.PIP_MODEL || "gpt-5-mini",
    instructions: [
      "Answer as Pip using the tool results.",
      "Keep the answer specific to the real HydroPip timed-feed runoff build. Do not add recirculating, return-line, or drain-plumbing steps.",
      "When parts are relevant, point users toward the HydroPip parts list/Amazon affiliate links as the easiest way to match the build.",
      "If the user asks for help with a non-HydroPip hydro system, explain briefly that custom support for other systems is Pip Pro.",
      "Make the free vs Pip Pro boundary clear when relevant, and frame unavailable Pro capabilities as planned or subscription-only instead of already active.",
      "Keep this final answer brief by default: 1 to 3 compact bullets or short paragraphs, usually under 70 words. End with one useful next-step prompt."
    ].join("\n"),
    previous_response_id: response.id,
    input: toolResults
  });

  const answer = final.output_text || fallbackAnswer(trimmed, retrieval);
  const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
  rememberProjectMessage(projectContext, {
    userId,
    projectId,
    role: "assistant",
    content: answer,
    mode: "ai_tools_rag",
    sources
  });

  return {
    answer,
    mode: "ai_tools_rag",
    sources,
    projectMemory
  };
}

function wantsTracking(message) {
  return /\b(remind|reminder|track|save|notify|schedule this|log)\b/i.test(message);
}

function wantsCustomNonHydroPipSupport(message) {
  const normalized = String(message || "").toLowerCase();
  const mentionsOtherSystem = /\b(dwc|deep water culture|nft|kratky|dutch bucket|ebb\s*(and|&)?\s*flow|flood\s*(and|&)?\s*drain|aeroponic|aeroponics|aquaponic|aquaponics|recirculating|rdwc|drip system|coco drip|bucket system)\b/.test(normalized);
  if (!mentionsOtherSystem) return false;

  return /\b(set ?up|setup|build|tune|schedule|plan|troubleshoot|fix|diagnose|optimize|guide|help|walk me through|instructions?)\b/.test(normalized);
}

async function getOpenAiClient() {
  if (!process.env.OPENAI_API_KEY) return null;
  clientPromise ||= import("openai")
    .then(({ default: OpenAI }) => new OpenAI({ apiKey: process.env.OPENAI_API_KEY }))
    .catch((error) => {
      console.warn(`OpenAI client unavailable, using rules fallback: ${error.message}`);
      return null;
    });
  return clientPromise;
}

function compactProjectContext(projectContext) {
  if (!projectContext) return null;
  return {
    project: projectContext.project,
    activeReminders: projectContext.activeReminders,
    recentReadings: projectContext.recentReadings,
    recentMessages: projectContext.recentMessages.map(({ role, content, createdAt }) => ({ role, content, createdAt }))
  };
}

function rememberProjectMessage(projectContext, message) {
  if (!projectContext) return null;
  return appendProjectMessage(message);
}
