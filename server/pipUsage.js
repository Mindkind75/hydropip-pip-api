import crypto from "node:crypto";

const DEFAULTS = Object.freeze({
  visitorDailyCredits: 5,
  freeMemberDailyCredits: 20,
  proDailyCredits: 150,
  visitorMonthlyCredits: 100,
  freeMemberMonthlyCredits: 400,
  proMonthlyCredits: 3000,
  globalMonthlyCredits: 100000,
  textCreditCost: 1,
  detailedCreditCost: 3,
  photoCreditCost: 10,
  inputCostPerMillion: 0.25,
  outputCostPerMillion: 2,
  maxPromptChars: 6000,
  maxHistoryMessages: 24,
  maxHistoryChars: 24000,
  freeMemberImageBytes: 2 * 1024 * 1024,
  proImageBytes: 5 * 1024 * 1024
});

export function getPipUsageConfig() {
  return {
    visitorDailyCredits: envNumber("PIP_VISITOR_DAILY_AI_CREDITS", DEFAULTS.visitorDailyCredits),
    freeMemberDailyCredits: envNumber("PIP_FREE_MEMBER_DAILY_AI_CREDITS", DEFAULTS.freeMemberDailyCredits),
    proDailyCredits: envNumber("PIP_PRO_DAILY_AI_CREDITS", DEFAULTS.proDailyCredits),
    visitorMonthlyCredits: envNumber("PIP_VISITOR_MONTHLY_AI_CREDITS", DEFAULTS.visitorMonthlyCredits),
    freeMemberMonthlyCredits: envNumber("PIP_FREE_MEMBER_MONTHLY_AI_CREDITS", DEFAULTS.freeMemberMonthlyCredits),
    proMonthlyCredits: envNumber("PIP_PRO_MONTHLY_AI_CREDITS", DEFAULTS.proMonthlyCredits),
    globalMonthlyCredits: envNumber("PIP_GLOBAL_MONTHLY_AI_CREDITS", DEFAULTS.globalMonthlyCredits),
    textCreditCost: envNumber("PIP_TEXT_CREDIT_COST", DEFAULTS.textCreditCost),
    detailedCreditCost: envNumber("PIP_DETAILED_CREDIT_COST", DEFAULTS.detailedCreditCost),
    photoCreditCost: envNumber("PIP_PHOTO_CREDIT_COST", DEFAULTS.photoCreditCost),
    inputCostPerMillion: envNumber("PIP_MODEL_INPUT_COST_PER_MILLION", DEFAULTS.inputCostPerMillion),
    outputCostPerMillion: envNumber("PIP_MODEL_OUTPUT_COST_PER_MILLION", DEFAULTS.outputCostPerMillion),
    maxPromptChars: envNumber("PIP_MAX_PROMPT_CHARS", DEFAULTS.maxPromptChars),
    maxHistoryMessages: envNumber("PIP_MAX_HISTORY_MESSAGES", DEFAULTS.maxHistoryMessages),
    maxHistoryChars: envNumber("PIP_MAX_HISTORY_CHARS", DEFAULTS.maxHistoryChars),
    freeMemberImageBytes: envNumber("PIP_FREE_MEMBER_MAX_IMAGE_BYTES", DEFAULTS.freeMemberImageBytes),
    proImageBytes: envNumber("PIP_PRO_MAX_IMAGE_BYTES", DEFAULTS.proImageBytes)
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

export function monthlyLimitForTier(tier, config = getPipUsageConfig()) {
  if (tier === "pip_pro") return config.proMonthlyCredits;
  if (tier === "free_member") return config.freeMemberMonthlyCredits;
  return config.visitorMonthlyCredits;
}

export function validateChatPayload({ message, history, image, tier = "visitor" } = {}, config = getPipUsageConfig()) {
  const prompt = String(message || "");
  if (prompt.length > config.maxPromptChars) {
    return { ok: false, statusCode: 413, error: "pip_prompt_too_long", message: `Keep the question under ${config.maxPromptChars.toLocaleString()} characters.` };
  }
  const entries = Array.isArray(history) ? history : [];
  if (entries.length > config.maxHistoryMessages) {
    return { ok: false, statusCode: 413, error: "pip_history_too_long", message: `This request includes more than ${config.maxHistoryMessages} history messages.` };
  }
  const historyChars = entries.reduce((total, entry) => total + String(entry?.content || "").length, 0);
  if (historyChars > config.maxHistoryChars) {
    return { ok: false, statusCode: 413, error: "pip_history_too_long", message: "This conversation history is too large for one request. Start a new Pip conversation or shorten the history." };
  }
  if (image?.dataUrl) {
    const maxBytes = tier === "pip_pro" ? config.proImageBytes : config.freeMemberImageBytes;
    const imageBytes = base64DataBytes(image.dataUrl);
    if (!Number.isFinite(imageBytes) || imageBytes <= 0) {
      return { ok: false, statusCode: 400, error: "pip_invalid_image", message: "Attach a valid JPEG, PNG, or WebP image." };
    }
    if (imageBytes > maxBytes) {
      return { ok: false, statusCode: 413, error: "pip_image_too_large", message: `This ${tier === "pip_pro" ? "Pip Pro" : "member"} image exceeds the ${formatMegabytes(maxBytes)} MB upload limit.` };
    }
  }
  return { ok: true };
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

export function monthlyResetAt(now = new Date()) {
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1)).toISOString();
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

export function makeMonthlyLimitPayload({ monthlyLimit, usedThisMonth, creditsRequired, global = false, resetAt } = {}) {
  return {
    error: global ? "pip_global_monthly_limit_reached" : "pip_monthly_limit_reached",
    message: global
      ? "Pip AI is temporarily paused because HydroPip reached its monthly safety limit. Local build guidance remains available."
      : "You have used this month's Pip AI allowance. Pip Credits cannot bypass this safety cap; your allowance resets next month.",
    monthlyLimit,
    usedThisMonth,
    creditsRequired,
    canTopUp: false,
    resetAt: resetAt || monthlyResetAt()
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

function base64DataBytes(dataUrl) {
  const match = /^data:image\/(?:jpeg|png|webp);base64,([a-z0-9+/=]+)$/i.exec(String(dataUrl || ""));
  if (!match) return NaN;
  const encoded = match[1];
  const padding = encoded.endsWith("==") ? 2 : encoded.endsWith("=") ? 1 : 0;
  return Math.floor((encoded.length * 3) / 4) - padding;
}

function formatMegabytes(bytes) {
  return Math.round((bytes / (1024 * 1024)) * 10) / 10;
}
