import crypto from "node:crypto";

const DEFAULTS = Object.freeze({
  visitorDailyCredits: 5,
  freeMemberDailyCredits: 20,
  proDailyCredits: 150,
  textCreditCost: 1,
  detailedCreditCost: 3,
  photoCreditCost: 10,
  inputCostPerMillion: 0.25,
  outputCostPerMillion: 2
});

export function getPipUsageConfig() {
  return {
    visitorDailyCredits: envNumber("PIP_VISITOR_DAILY_AI_CREDITS", DEFAULTS.visitorDailyCredits),
    freeMemberDailyCredits: envNumber("PIP_FREE_MEMBER_DAILY_AI_CREDITS", DEFAULTS.freeMemberDailyCredits),
    proDailyCredits: envNumber("PIP_PRO_DAILY_AI_CREDITS", DEFAULTS.proDailyCredits),
    textCreditCost: envNumber("PIP_TEXT_CREDIT_COST", DEFAULTS.textCreditCost),
    detailedCreditCost: envNumber("PIP_DETAILED_CREDIT_COST", DEFAULTS.detailedCreditCost),
    photoCreditCost: envNumber("PIP_PHOTO_CREDIT_COST", DEFAULTS.photoCreditCost),
    inputCostPerMillion: envNumber("PIP_MODEL_INPUT_COST_PER_MILLION", DEFAULTS.inputCostPerMillion),
    outputCostPerMillion: envNumber("PIP_MODEL_OUTPUT_COST_PER_MILLION", DEFAULTS.outputCostPerMillion)
  };
}

export function pipAiDisabled() {
  return String(process.env.PIP_AI_DISABLED || "false").toLowerCase() === "true";
}

export function resolvePipUsageTier({ user, subscription } = {}) {
  if (subscription?.active && subscription?.verified) return "pip_pro";
  if (user?.id) return "free_member";
  return "visitor";
}

export function dailyLimitForTier(tier, config = getPipUsageConfig()) {
  if (tier === "pip_pro") return config.proDailyCredits;
  if (tier === "free_member") return config.freeMemberDailyCredits;
  return config.visitorDailyCredits;
}

export function estimateAiCreditCost({ message, hasPhoto } = {}, config = getPipUsageConfig()) {
  if (hasPhoto) return config.photoCreditCost;
  return wantsDetailedAnswer(message) ? config.detailedCreditCost : config.textCreditCost;
}

export function aiUsageEventType({ message, hasPhoto } = {}) {
  if (hasPhoto) return "photo_answer";
  return wantsDetailedAnswer(message) ? "detailed_answer" : "text_answer";
}

export function clientIpHash(req) {
  const forwarded = req?.headers?.["x-forwarded-for"];
  const ip = String(Array.isArray(forwarded) ? forwarded[0] : forwarded || req?.ip || "unknown")
    .split(",")[0]
    .trim();
  const salt = String(process.env.PIP_USAGE_HASH_SECRET || process.env.PIP_BRIDGE_SECRET || "hydropip-usage");
  return crypto.createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

export function combineOpenAiUsage(...responses) {
  let inputTokens = 0;
  let outputTokens = 0;
  let complete = true;
  const presentResponses = responses.filter(Boolean);
  for (const response of presentResponses) {
    const usage = response?.usage;
    const input = optionalTokenCount(usage?.input_tokens ?? usage?.prompt_tokens);
    const output = optionalTokenCount(usage?.output_tokens ?? usage?.completion_tokens);
    if (input === null || output === null) complete = false;
    else {
      inputTokens += input;
      outputTokens += output;
    }
  }
  return complete && presentResponses.length
    ? { inputTokens, outputTokens }
    : { inputTokens: null, outputTokens: null };
}

export function estimateModelCost({ inputTokens, outputTokens } = {}, config = getPipUsageConfig()) {
  if (!Number.isFinite(inputTokens) || !Number.isFinite(outputTokens)) return null;
  const cost = (inputTokens / 1_000_000) * config.inputCostPerMillion
    + (outputTokens / 1_000_000) * config.outputCostPerMillion;
  return Number(cost.toFixed(8));
}

export function dailyResetAt(now = new Date()) {
  const reset = new Date(now);
  reset.setUTCHours(24, 0, 0, 0);
  return reset.toISOString();
}

export function makeDailyLimitPayload({ dailyLimit, usedToday, creditsRequired, resetAt } = {}) {
  return {
    error: "pip_daily_limit_reached",
    message: "You have used today's included Pip AI time. You can continue tomorrow, or add Pip Credits to keep going today.",
    dailyLimit,
    usedToday,
    creditsRequired,
    canTopUp: true,
    resetAt: resetAt || dailyResetAt()
  };
}

function wantsDetailedAnswer(message) {
  return /\b(detailed|full|complete|entire|walkthrough|step[- ]by[- ]step|printable|long answer|deep dive|explain everything|all instructions)\b/i.test(String(message || ""));
}

function envNumber(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function optionalTokenCount(value) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : null;
}
