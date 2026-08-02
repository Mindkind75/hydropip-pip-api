import wixWindowFrontend from "wix-window-frontend";

const HYDROPIP_TRACK_SRC = "https://hydropip-pip-api.onrender.com/parts-checklist.html?v=launch-20260802b";
const TRACK_EMBED_IDS = ["#trackHtml", "#partsHtml", "#html1", "#html2", "#iFrame1"];

$w.onReady(() => {
  const embed = getEmbed();
  if (!embed) return;

  embed.src = HYDROPIP_TRACK_SRC;
  setFallbackHeight(embed);
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
  if (Number.isFinite(height)) setRenderedHeight(embed, height, Number(message.viewportHeight));
}

function setFallbackHeight(embed) {
  embed.height = wixWindowFrontend.formFactor === "Mobile" ? 10440 : 2600;
  wixWindowFrontend.getBoundingRect().then((size) => {
    if (size?.window?.width) embed.height = heightForWidth(size.window.width);
  }).catch(() => {});
}

function setRenderedHeight(embed, renderedHeight, viewportHeight) {
  const assignedHeight = Number(embed.height);
  const scale = Number.isFinite(viewportHeight) && viewportHeight > 0 && Number.isFinite(assignedHeight) && assignedHeight > 0
    ? viewportHeight / assignedHeight
    : 1;
  embed.height = Math.ceil(renderedHeight / Math.max(scale, 0.5));
}

function heightForWidth(width) {
  if (width <= 750) return 10440;
  if (width <= 1024) return 8880;
  return 4960;
}
