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

const proSignupUrl = process.env.PIP_PRO_SIGNUP_URL || "https://www.hydropip.com/pricing-plans";

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
  const projectContext = userId && projectId ? await buildProjectContext({ userId, projectId }) : null;
  const projectMemory = projectContext
    ? { active: true, projectId, projectType: projectContext.project.type }
    : { active: false, reason: userId && projectId ? "project_not_found" : "not_requested" };

  await rememberProjectMessage(projectContext, {
    userId,
    projectId,
    role: "user",
    content: trimmed
  });

  if (isClearlyOffTopic(trimmed)) {
    const answer = [
      "I am built for HydroPip and home hydroponics, so I will keep us there.",
      "Ask me about parts, tower sizing, pH/EC, nutrient mix, feed timing, crop timing, pests, or troubleshooting."
    ].join("\n\n");
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "off_topic",
      sources: []
    });
    return { answer, mode: "off_topic", sources: [], projectMemory };
  }

  if (wantsCustomNonHydroPipSupport(trimmed) && !subscription?.active) {
    const answer = [
      `I can definitely help with that, but custom support for non-HydroPip systems is a Pip Pro subscription feature: ${proSignupUrl}`,
      "Free Pip can still walk you through the HydroPip timed-feed tower build, parts list, first fill, and basic operation."
    ].join("\n\n");
    await rememberProjectMessage(projectContext, {
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
      upgradeUrl: proSignupUrl,
      projectMemory
    };
  }

  if (wantsTracking(trimmed) && !subscription?.active) {
    const answer = [
      `I can definitely help with that, but saving reminders, readings, logs, and ongoing tracking is Pip Pro subscription behavior: ${proSignupUrl}`,
      "Free Pip can still tell you the next HydroPip build or grow step right now."
    ].join("\n\n");
    await rememberProjectMessage(projectContext, {
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
      upgradeReason: "Pip Pro saves reminders, readings, grow logs, crop schedules, and project history.",
      upgradeUrl: proSignupUrl,
      projectMemory
    };
  }

  const client = await getOpenAiClient();
  if (!client) {
    const answer = fallbackAnswer(trimmed, retrieval);
    await rememberProjectMessage(projectContext, {
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
      "HydroPip scale, space, and variation questions are allowed in free mode when they are still based on the HydroPip timed-feed tower design. Answer practical questions such as shorter towers, fewer towers, tower spacing, footprint, partial builds, height limits, expansion, and whether a layout will fit. Do not punt these to a generic follow-up unless a key measurement is missing.",
      "For shorter towers: explain that the system can be scaled down, but shorter towers reduce pocket count and may change stability, support height, pump head pressure, feed timing, and runoff behavior. Keep the center support pipe driven securely, keep the top hose guide removable, and recalibrate feed duration by runoff. If the user says five-pot-high, clarify that HydroPip uses four-pot stackable sections; five stack sections equals 20 planting pockets per tower. Two five-section towers are a reasonable small test if they are stable and easy to service.",
      "When a user asks for a part link, include the matching HydroPip Amazon affiliate URL directly. Use these known links when relevant: stackable planters https://www.amazon.com/dp/B007TFTW3U?tag=hydrpip2002-20; pumps https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20; smart plug https://www.amazon.com/dp/B091FXH2FR?tag=hydrpip2002-20; nutrients https://www.amazon.com/dp/B0727VTWH5?tag=hydrpip2002-20; vermiculite https://www.amazon.com/dp/B08WF8C5CL?tag=hydrpip2002-20; perlite https://www.amazon.com/dp/B0FYTT7D6F?tag=hydrpip2002-20; pH meter https://www.amazon.com/dp/B08HLXBBK4?tag=hydrpip2002-20; pH calibration solution https://www.amazon.com/s?k=pH+calibration+solution+4.01+7.00+hydroponics&tag=hydrpip2002-20; EC/TDS meter https://www.amazon.com/s?k=EC+TDS+meter+hydroponics&tag=hydrpip2002-20; EC/TDS calibration solution https://www.amazon.com/s?k=EC+TDS+calibration+solution+hydroponics&tag=hydrpip2002-20; pH Up/Down https://www.amazon.com/s?k=pH+up+pH+down+hydroponics+kit&tag=hydrpip2002-20; seeds https://www.amazon.com/s?k=hydroponic+lettuce+herb+seeds&tag=hydrpip2002-20; IBC cover https://www.amazon.com/dp/B0C1YZ93N6?tag=hydrpip2002-20; IBC tote reference https://www.amazon.com/dp/B0876C67GR?tag=hydrpip2002-20; end-of-hose shutoff/flush valve https://www.amazon.com/dp/B013646334?tag=hydrpip2002-20; hose connector adapters for extensions https://www.amazon.com/dp/B09B16KTNM?tag=hydrpip2002-20. Mention that HydroPip may earn from qualifying Amazon purchases when sharing direct Amazon links.",
      "For recurring supply or nutrient subscription questions, recommend the light HydroPip reorder rhythm: nutrient refill kit, pH calibration solution, pH Up/Down, EC/TDS calibration or meter check, seeds, and media top-off. Explain that Track My Build can estimate the next supply check now, while Pip Pro will save refill dates to the account and send reminders later.",
      `Custom guidance for non-HydroPip systems, including DWC, NFT, Kratky, Dutch buckets, ebb and flow, drip systems, or custom hydro setups, is Pip Pro. Use this wording style: "I can definitely help with that, but that is a Pip Pro subscription feature." Include this signup link when a subscription is required: ${proSignupUrl}`,
      "If the retrieved context is not enough for an exact recommendation, say what is missing and ask one focused follow-up question.",
      "Free users may receive HydroPip setup/build guidance and one HydroPip grow plan.",
      "Saving reminders, storing grow logs, persistent tracking, personalized calculators, and sensor-based schedule tuning require Pip Pro or future Pro features. Do not present future Pro features as already live unless tool data confirms they are active.",
      "Do not pretend reminders are saved unless create_reminder returns queued.",
      "If projectContext is provided, use it as the user's saved project memory and continue that project instead of treating the question as a fresh visitor chat.",
      "Default to TLDR chat answers with a hard cap of 90 words: 1 direct sentence plus 2-3 compact bullets. No essays, no broad tutorials, no long preambles. Only give long detailed answers when the user asks for more detail, a full walkthrough, printable checklist, or full parts list. If a longer answer would help, offer to continue instead of dumping everything.",
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
    const answer = compactAnswer(response.output_text || fallbackAnswer(trimmed, retrieval), trimmed, retrieval);
    const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
    await rememberProjectMessage(projectContext, {
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
      "If the user asks for a shopping link, include the matching HydroPip Amazon affiliate URL directly when it appears in the tool result or known link list.",
      `If the user asks for help with a non-HydroPip hydro system, explain briefly: "I can definitely help with that, but that is a Pip Pro subscription feature." Include ${proSignupUrl}.`,
      "Make the free vs Pip Pro boundary clear when relevant, and frame unavailable Pro capabilities as planned or subscription-only instead of already active.",
      "Keep this final answer TLDR by default with a hard cap of 90 words: 1 direct sentence plus 2-3 compact bullets. End with one useful next-step prompt. Only go long if the user explicitly asked for detailed instructions."
    ].join("\n"),
    previous_response_id: response.id,
    input: toolResults
  });

  const answer = compactAnswer(final.output_text || fallbackAnswer(trimmed, retrieval), trimmed, retrieval);
  const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
  await rememberProjectMessage(projectContext, {
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
  return /\b(remind|reminder|track|save|notify|schedule this|log|readings over|over the next month|every friday|every week)\b/i.test(message);
}

function wantsDetailedInfo(message) {
  return /\b(detailed|full|complete|entire|walkthrough|step[- ]by[- ]step|printable|long answer|deep dive|explain everything|all instructions)\b/i.test(message);
}

function compactAnswer(answer, message, retrieval) {
  if (wantsDetailedInfo(message)) return answer;
  const words = String(answer || "").trim().split(/\s+/).filter(Boolean);
  if (words.length <= 115) return answer;
  return fallbackAnswer(message, retrieval);
}

function wantsCustomNonHydroPipSupport(message) {
  const normalized = String(message || "").toLowerCase();
  const mentionsOtherSystem = /\b(dwc|deep water culture|nft|kratky|dutch bucket|ebb\s*(and|&)?\s*flow|flood\s*(and|&)?\s*drain|aeroponic|aeroponics|aquaponic|aquaponics|recirculating|rdwc|drip system|coco drip|bucket system)\b/.test(normalized);
  if (!mentionsOtherSystem) return false;

  return /\b(set ?up|setup|build|tune|schedule|plan|troubleshoot|fix|diagnose|optimize|guide|help|walk me through|instructions?)\b/.test(normalized);
}

function isClearlyOffTopic(message) {
  const normalized = String(message || "").toLowerCase();
  if (/\b(hydropip|hydroponic|hydroponics|plant|plants|grow|garden|tower|towers|ibc|pump|nutrient|nutrients|ph|ec|tds|seed|seeds|leaf|leaves|root|roots|algae|pest|bug|water|runoff|media|perlite|vermiculite|lettuce|basil|tomato|crop|harvest|prune|trim)\b/.test(normalized)) {
    return false;
  }
  return /\b(politics|president|stock market|crypto|bitcoin|football|baseball|nba|movie|recipe|dating|homework|essay|code|javascript|python|weather|news|celebrity|song|lyrics)\b/.test(normalized);
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

async function rememberProjectMessage(projectContext, message) {
  if (!projectContext) return null;
  return appendProjectMessage(message);
}
