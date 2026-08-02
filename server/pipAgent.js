import { systemBrain } from "./pipData.js";
import { createGrowPlan, createReminder, fallbackAnswer, getBuildStep, getWizardSchema, highConfidenceAnswer, recommendParts } from "./pipTools.js";
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

const configuredProSignupUrl = process.env.PIP_PRO_SIGNUP_URL || "";
const proSignupUrl = configuredProSignupUrl.includes("pricing-plans") ? "https://www.hydropip.com/pip?pro=1" : configuredProSignupUrl || "https://www.hydropip.com/pip?pro=1";

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
  const recentHistory = normalizeHistory(history);
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

  const directAnswer = highConfidenceAnswer(withRecentContext(trimmed, recentHistory), retrieval);
  if (directAnswer) {
    const answer = compactAnswer(directAnswer, trimmed, retrieval);
    await rememberProjectMessage(projectContext, {
      userId,
      projectId,
      role: "assistant",
      content: answer,
      mode: "rules_direct",
      sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }))
    });
    return {
      answer,
      mode: "rules_direct",
      sources: retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score })),
      projectMemory
    };
  }

  const client = await getOpenAiClient();
  if (!client) {
    return fallbackResult({ trimmed, recentHistory, retrieval, subscription, projectContext, userId, projectId, projectMemory });
  }

  let response;
  try {
    response = await client.responses.create({
    model: process.env.PIP_MODEL || "gpt-5-mini",
    instructions: [
      systemBrain,
      "Use HydroPip tools whenever the user asks for build steps, parts, grow plans, reminders, or setup questions.",
      "Use the retrieved HydroPip knowledge-base context below before generic hydroponic knowledge.",
      "HydroPip is a real timed-feed runoff tower system, not a recirculating tower kit. Do not recommend return plumbing, drain plumbing, recycling tower runoff, filters for returning runoff, or generic recirculating tower layouts unless the user explicitly asks to compare alternatives.",
      "For the physical build, describe the actual HydroPip parts: driven Schedule 40 support pipe, single-cell cinder block base, stackable four-pot sections, PVC tee hose guide, main feed hose, small feed tubes, diffuser pieces, 275 gallon IBC, one circulation pump, one feed pump, outdoor two-outlet smart plug, and reusable 50/50 perlite/vermiculite media.",
      "Behave like a capable ChatGPT-style hydroponic grow buddy, not a menu bot. Answer the user's actual question with practical hydroponic reasoning whenever it is about growing food, HydroPip, gardening, seedlings, pests, nutrients, pH/EC, pumps, water, weather, layout, harvesting, or parts.",
      "Never answer a clear hydroponic or HydroPip question with a generic menu such as 'tell me the step or part you are stuck on.' If the question is vague, make the best likely inference, give the next useful action, then ask one focused follow-up.",
      "Free mode should be genuinely useful for building and operating the HydroPip system. Keep trust first, then commerce: when parts, supplies, testing tools, seeds, nutrients, media, pumps, hoses, timers, covers, or replacements are relevant, naturally include the matching HydroPip Amazon affiliate link.",
      "For any shopping or 'what do I need' question, infer the most likely HydroPip part from the user's wording and conversation context. If there are two likely meanings, give the best guess first and name the alternate briefly with its link.",
      "HydroPip scale, space, and variation questions are allowed in free mode when they are still based on the HydroPip timed-feed tower design. Answer practical questions such as shorter towers, fewer towers, tower spacing, footprint, partial builds, height limits, expansion, and whether a layout will fit. Do not punt these to a generic follow-up unless a key measurement is missing.",
      "For shorter towers: explain that the system can be scaled down, but shorter towers reduce pocket count and may change stability, support height, pump head pressure, feed timing, and runoff behavior. Keep the center support pipe driven securely, keep the top hose guide removable, and recalibrate feed duration by runoff. If the user says five-pot-high, clarify that HydroPip uses four-pot stackable sections; five stack sections equals 20 planting pockets per tower. Two five-section towers are a reasonable small test if they are stable and easy to service.",
      "When a user asks for a part link, include the matching HydroPip Amazon affiliate URL directly. Use these known links when relevant: stackable planters https://www.amazon.com/dp/B007TFTW3U?tag=hydrpip2002-20; pumps https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20; smart plug https://www.amazon.com/dp/B091FXH2FR?tag=hydrpip2002-20; nutrients https://www.amazon.com/dp/B0727VTWH5?tag=hydrpip2002-20; vermiculite https://www.amazon.com/dp/B08WF8C5CL?tag=hydrpip2002-20; perlite https://www.amazon.com/dp/B0FYTT7D6F?tag=hydrpip2002-20; pH meter https://www.amazon.com/dp/B08HLXBBK4?tag=hydrpip2002-20; pH calibration solution https://www.amazon.com/s?k=pH+calibration+solution+4.01+7.00+hydroponics&tag=hydrpip2002-20; EC/TDS meter https://www.amazon.com/s?k=EC+TDS+meter+hydroponics&tag=hydrpip2002-20; EC/TDS calibration solution https://www.amazon.com/s?k=EC+TDS+calibration+solution+hydroponics&tag=hydrpip2002-20; pH Up/Down https://www.amazon.com/s?k=pH+up+pH+down+hydroponics+kit&tag=hydrpip2002-20; seeds https://www.amazon.com/s?k=hydroponic+lettuce+herb+seeds&tag=hydrpip2002-20; yellow sticky traps https://www.amazon.com/s?k=yellow+sticky+traps+for+plants&tag=hydrpip2002-20; food-safe pest controls https://www.amazon.com/s?k=food+safe+garden+pest+control+vegetables&tag=hydrpip2002-20; IBC cover https://www.amazon.com/dp/B0C1YZ93N6?tag=hydrpip2002-20; IBC tote reference https://www.amazon.com/dp/B0876C67GR?tag=hydrpip2002-20; end-of-hose shutoff/flush valve https://www.amazon.com/dp/B013646334?tag=hydrpip2002-20; hose connector adapters for extensions https://www.amazon.com/dp/B09B16KTNM?tag=hydrpip2002-20. Mention that HydroPip may earn from qualifying Amazon purchases when sharing direct Amazon links.",
      "For recurring supply or nutrient subscription questions, recommend the light HydroPip reorder rhythm: nutrient refill kit, pH calibration solution, pH Up/Down, EC/TDS calibration or meter check, seeds, and media top-off. Explain that Track My Build can estimate the next supply check now, while Pip Pro will save refill dates to the account and send reminders later.",
      `Custom guidance for non-HydroPip systems, including DWC, NFT, Kratky, Dutch buckets, ebb and flow, drip systems, or custom hydro setups, is Pip Pro. Use this wording style: "I can definitely help with that, but that is a Pip Pro subscription feature." Include this signup link when a subscription is required: ${proSignupUrl}`,
      "General hydroponics education is allowed in free mode when it helps the user understand HydroPip or decide to build. Custom plans, optimization, troubleshooting, schedules, logs, reminders, or saved memory for a different non-HydroPip system are Pip Pro.",
      "If the retrieved context is not enough for an exact recommendation, say what is missing and ask one focused follow-up question.",
      "Free users may receive HydroPip setup/build guidance and one HydroPip grow plan.",
      "Saving reminders, storing grow logs, persistent tracking, personalized calculators, and sensor-based schedule tuning require Pip Pro or future Pro features. Do not present future Pro features as already live unless tool data confirms they are active.",
      "Do not pretend reminders are saved unless create_reminder returns queued.",
      "If projectContext is provided, use it as the user's saved project memory and continue that project instead of treating the question as a fresh visitor chat.",
      "When the saved project profile includes growZone, location, areaType, exposure, plantingDate, crops, or systemStage, use those details to tailor crop timing, heat/frost cautions, sun guidance, and the next practical action. A grow zone describes seasonal hardiness, not today's weather; ask for current conditions when a weather-sensitive answer needs them.",
      "Default to concise chat answers with a hard cap of 90 words: 1 direct sentence plus 2-3 compact bullets. Do not add a TL;DR or summary label. No essays, no broad tutorials, no long preambles. Only give long detailed answers when the user asks for more detail, a full walkthrough, printable checklist, or full parts list. If a longer answer would help, offer to continue instead of dumping everything.",
      `Retrieved HydroPip knowledge-base context:\n${retrievedContext}`
    ].join("\n\n"),
    input: [
      ...recentHistory,
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
  } catch (error) {
    console.warn(`OpenAI response failed, using HydroPip fallback: ${error.message}`);
    return fallbackResult({ trimmed, recentHistory, retrieval, subscription, projectContext, userId, projectId, projectMemory, mode: "ai_error_fallback" });
  }

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

  let final;
  try {
    final = await client.responses.create({
    model: process.env.PIP_MODEL || "gpt-5-mini",
    instructions: [
      "Answer as Pip using the tool results.",
      "Keep the answer specific to the real HydroPip timed-feed runoff build. Do not add recirculating, return-line, or drain-plumbing steps.",
      "When parts are relevant, point users toward the HydroPip parts list/Amazon affiliate links as the easiest way to match the build.",
      "If the user asks for a shopping link, include the matching HydroPip Amazon affiliate URL directly when it appears in the tool result or known link list.",
      `If the user asks for help with a non-HydroPip hydro system, explain briefly: "I can definitely help with that, but that is a Pip Pro subscription feature." Include ${proSignupUrl}.`,
      "Make the free vs Pip Pro boundary clear when relevant, and frame unavailable Pro capabilities as planned or subscription-only instead of already active.",
      "Keep this final answer concise by default with a hard cap of 90 words: 1 direct sentence plus 2-3 compact bullets. Do not add a TL;DR or summary label. End with one useful next-step prompt. Only go long if the user explicitly asked for detailed instructions."
    ].join("\n"),
    previous_response_id: response.id,
    input: toolResults
    });
  } catch (error) {
    console.warn(`OpenAI tool follow-up failed, using HydroPip fallback: ${error.message}`);
    return fallbackResult({ trimmed, recentHistory, retrieval, subscription, projectContext, userId, projectId, projectMemory, mode: "ai_tool_error_fallback" });
  }

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

async function fallbackResult({ trimmed, recentHistory, retrieval, subscription, projectContext, userId, projectId, projectMemory, mode = "rules_fallback" }) {
  const answer = compactAnswer(fallbackAnswer(withRecentContext(trimmed, recentHistory), retrieval), trimmed, retrieval);
  const sources = retrieval.matches.map((match) => ({ source: match.source, title: match.title, score: match.score }));
  await rememberProjectMessage(projectContext, {
    userId,
    projectId,
    role: "assistant",
    content: answer,
    mode,
    sources
  });
  return {
    answer,
    mode,
    sources,
    subscriptionRequired: wantsTracking(trimmed) && !subscription?.active,
    projectMemory
  };
}

function wantsTracking(message) {
  return /\b(remind|reminder|track|save|notify|schedule this|log|readings over|over the next month|every friday|every week)\b/i.test(message);
}

function wantsDetailedInfo(message) {
  return /\b(detailed|full|complete|entire|walkthrough|step[- ]by[- ]step|printable|long answer|deep dive|explain everything|all instructions)\b/i.test(message);
}

export function compactAnswer(answer, message, retrieval) {
  const disclosed = ensureAffiliateDisclosure(stripSummaryLabel(answer));
  if (wantsDetailedInfo(message)) return disclosed;
  const words = String(disclosed || "").trim().split(/\s+/).filter(Boolean);
  if (words.length <= 100) return disclosed;
  if (hasAmazonLink(disclosed)) return trimLinkedAnswer(disclosed, 90);
  return trimToWordBudget(disclosed, 90);
}

export function stripSummaryLabel(answer) {
  return String(answer || "").replace(/^\s*(?:TL\s*;?\s*DR|TLDR|SUMMARY)\s*:?\s*/i, "").trim();
}

function normalizeHistory(history = []) {
  if (!Array.isArray(history)) return [];
  return history
    .slice(-8)
    .map((item) => ({
      role: item?.role === "assistant" || item?.role === "pip" ? "assistant" : "user",
      content: String(item?.content || "").slice(0, 1200)
    }))
    .filter((item) => item.content.trim());
}

function withRecentContext(message, history = []) {
  if (!history.length || !isVagueFollowUp(message)) return message;
  const recent = history
    .slice(-4)
    .map((item) => `${item.role}: ${item.content}`)
    .join("\n");
  return `${recent}\ncurrent user: ${message}`;
}

function isVagueFollowUp(message) {
  const normalized = String(message || "").trim().toLowerCase();
  if (!normalized || normalized.length > 140) return false;
  return /\b(it|that|this|they|them|those|one|same|also|instead|what about|what size|which one|how many|will it|does it|is it|can it|where does|how does)\b/.test(normalized);
}

function trimToWordBudget(answer, maxWords) {
  const text = String(answer || "").trim();
  const sentences = text.match(/[^.!?\n]+[.!?]?|\n+/g) || [text];
  let chosen = "";
  for (const sentence of sentences) {
    const next = `${chosen}${sentence}`.trim();
    if (next.split(/\s+/).filter(Boolean).length > maxWords) break;
    chosen = `${chosen}${sentence}`;
  }
  const compact = chosen.trim() || text.split(/\s+/).slice(0, maxWords).join(" ");
  return compact.endsWith(".") || compact.endsWith("!") || compact.endsWith("?") ? compact : `${compact}.`;
}

function trimLinkedAnswer(answer, maxWords) {
  const disclosure = "HydroPip may earn from qualifying Amazon purchases.";
  const urls = [...new Set(String(answer || "").match(/https?:\/\/(?:www\.)?amazon\.com\/[^\s)]+/gi) || [])].slice(0, 3);
  const reservedWords = 8 + urls.length * 4;
  const textOnly = String(answer || "")
    .replace(/https?:\/\/(?:www\.)?amazon\.com\/[^\s)]+/gi, "")
    .replace(/HydroPip may earn from qualifying Amazon purchases\.?/gi, "")
    .replace(/\(\s*[^()]{0,60}:\s*\)/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const summary = trimToWordBudget(textOnly, Math.max(45, maxWords - reservedWords));
  const links = urls.map((url) => `- ${affiliateLabel(url)}: ${url}`).join("\n");
  return `${summary}\n\n${links}\n\n${disclosure}`;
}

function affiliateLabel(url) {
  const labels = [
    ["B013646334", "Shutoff/flush valve"],
    ["B09B16KTNM", "Extension adapters"],
    ["B07L54HB83", "Pump"],
    ["B0BNG66HGP", "Drip tubing kit"],
    ["B007TFTW3U", "Stackable planters"],
    ["B091FXH2FR", "Outdoor smart plug"],
    ["B0727VTWH5", "Nutrients"],
    ["B0C1YZ93N6", "IBC cover"]
  ];
  return labels.find(([id]) => url.includes(id))?.[1] || "Recommended product";
}

function ensureAffiliateDisclosure(answer) {
  const text = String(answer || "").trim();
  if (!hasAmazonLink(text) || /HydroPip may earn from qualifying Amazon purchases/i.test(text)) return text;
  return `${text}\n\nHydroPip may earn from qualifying Amazon purchases.`;
}

function hasAmazonLink(answer) {
  return /https?:\/\/(?:www\.)?amazon\.com/i.test(String(answer || ""));
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
  return /\b(politics|president|stock market|crypto|bitcoin|football|baseball|nba|betting|gambling|wager|wagers|betting picks|sports picks|movie|recipe|dating|homework|essay|code|javascript|python|weather|news|celebrity|song|lyrics)\b/.test(normalized);
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
