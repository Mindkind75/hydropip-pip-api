const HYDROPIP_TRACK_SRC = "https://hydropip-pip-api.onrender.com/parts-checklist.html?v=launch-20260802";
const TRACK_EMBED_IDS = ["#trackHtml", "#partsHtml", "#html1", "#html2", "#iFrame1"];

$w.onReady(() => {
  const embed = getEmbed();
  if (!embed) return;

  embed.src = HYDROPIP_TRACK_SRC;
  embed.onMessage((event) => resizeEmbed(embed, event.data));
});

function getEmbed() {
  for (const selector of TRACK_EMBED_IDS) {
    try {
      const element = $w(/** @type {any} */ (selector));
      if (element && typeof element.onMessage === "function") return element;
    } catch (error) {
      // Try the next known HTML component ID.
    }
  }
  return null;
}

function resizeEmbed(embed, message = {}) {
  if (message.type !== "HYDROPIP_EMBED_HEIGHT") return;
  const height = Math.max(640, Math.min(18000, Math.ceil(Number(message.height) + 24)));
  if (Number.isFinite(height)) embed.height = height;
}
