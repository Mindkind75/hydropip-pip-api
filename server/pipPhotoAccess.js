export const PHOTO_UPGRADE_URL = "https://www.hydropip.com/pip?pro=1";

const proPhotoTopics = /\b(?:aphid|bug|caterpillar|crop|diagnos\w*|disease|discolor\w*|ec|feeding|fungus|gnat|harvest|healthy|insect|leaf|leaves|mildew|mold|nutrient\w*|pest|ph|plant|root rot|roots?|seed(?:ling)?s?|sick|spider mite|spots?|symptom\w*|thrip|wilt|yellowing)\b|what(?:'s| is) wrong/i;
const otherSystemTopics = /\b(?:aeroponic|deep water culture|dutch bucket|dwc|ebb and flow|kratky|nft|nutrient film|other (?:hydro|system)|recirculating system)\b/i;

export function classifyPhotoRequest({ message, projectType, subscription = {} } = {}) {
  if (subscription?.active) return { access: "pip_pro" };

  const question = String(message || "").trim();
  if (!question) {
    return {
      access: "question_required",
      message: "Tell Pip which HydroPip build step, part, or proposed installation location this photo shows, then send it again."
    };
  }

  if ((projectType && projectType !== "hydropip_build") || proPhotoTopics.test(question) || otherSystemTopics.test(question)) {
    return {
      access: "pip_pro_required",
      message: `I can help diagnose plant health, pests, roots, nutrients, and other hydro systems from photos with Pip Pro: ${PHOTO_UPGRADE_URL}\n\nYour five complimentary photo checks are reserved for the HydroPip build and proposed HydroPip installation site.`
    };
  }

  return { access: "free_build" };
}

export function photoAnalysisSucceeded(result = {}) {
  return result.mode === "ai_rag" || result.mode === "ai_tools_rag";
}
