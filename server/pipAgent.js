import OpenAI from "openai";
import { systemBrain } from "./pipData.js";
import { createGrowPlan, createReminder, fallbackAnswer, getBuildStep, getWizardSchema, recommendParts } from "./pipTools.js";
import { formatContextForPrompt, retrieveHydroPipContext } from "./ragStore.js";

const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

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

export async function askPip({ message, profile, subscription, history = [] }) {
  const trimmed = String(message || "").trim();
  if (!trimmed) return { answer: "Ask me where you are in the HydroPip build and I will guide the next step.", mode: "empty" };
  const retrieval = retrieveHydroPipContext(trimmed, { limit: 7 });
  const retrievedContext = formatContextForPrompt(retrieval);

  if (!client) {
    return {
      answer: fallbackAnswer(trimmed, retrieval),
      mode: "rules_fallback",
      sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score })),
      subscriptionRequired: wantsTracking(trimmed) && !subscription?.active
    };
  }

  const response = await client.responses.create({
    model: process.env.PIP_MODEL || "gpt-5-mini",
    instructions: [
      systemBrain,
      "Use HydroPip tools whenever the user asks for build steps, parts, grow plans, reminders, or setup questions.",
      "Use the retrieved HydroPip knowledge-base context below before generic hydroponic knowledge.",
      "If the retrieved context is not enough for an exact recommendation, say what is missing and ask one focused follow-up question.",
      "Free users may receive setup/build guidance and one generated grow plan.",
      "Saving reminders, storing grow logs, and persistent tracking require Pip Pro. Do not pretend reminders are saved unless create_reminder returns queued.",
      "Keep answers practical, warm, and concise.",
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
              subscription: subscription || { active: false, plan: "free" }
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
    return {
      answer: response.output_text || fallbackAnswer(trimmed, retrieval),
      mode: "ai_rag",
      sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }))
    };
  }

  const final = await client.responses.create({
    model: process.env.PIP_MODEL || "gpt-5-mini",
    instructions: "Answer as Pip using the tool results. Make the free vs Pip Pro boundary clear when relevant.",
    previous_response_id: response.id,
    input: toolResults
  });

  return {
    answer: final.output_text || fallbackAnswer(trimmed, retrieval),
    mode: "ai_tools_rag",
    sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }))
  };
}

function wantsTracking(message) {
  return /\b(remind|reminder|track|save|notify|schedule this|log)\b/i.test(message);
}
