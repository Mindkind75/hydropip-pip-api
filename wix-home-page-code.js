import wixWindowFrontend from "wix-window-frontend";

const HYDROPIP_HOME_SRC = "https://hydropip-pip-api.onrender.com/home.html?v=launch-20260802b";
const HOME_EMBED_IDS = ["#homeHtml", "#html1", "#html2", "#iFrame1"];
let assignedHeight = 0;

$w.onReady(() => {
  const embed = getEmbed();
  if (!embed) return;

  embed.src = HYDROPIP_HOME_SRC;
  setFallbackHeight(embed);
  embed.onMessage((event) => resizeEmbed(embed, event.data));
});

function getEmbed() {
  for (const selector of HOME_EMBED_IDS) {
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
  assignHeight(embed, wixWindowFrontend.formFactor === "Mobile" ? 13420 : 4400);
  wixWindowFrontend.getBoundingRect().then((size) => {
    if (size?.window?.width) assignHeight(embed, heightForWidth(size.window.width));
  }).catch(() => {});
}

function setRenderedHeight(embed, renderedHeight, viewportHeight) {
  const scale = Number.isFinite(viewportHeight) && viewportHeight > 0 && Number.isFinite(assignedHeight) && assignedHeight > 0
    ? viewportHeight / assignedHeight
    : 1;
  assignHeight(embed, renderedHeight / Math.max(scale, 0.5));
}

function assignHeight(embed, height) {
  assignedHeight = Math.ceil(height);
  embed.height = assignedHeight;
}

function heightForWidth(width) {
  if (width <= 750) return 13420;
  if (width <= 1024) return 12330;
  return 8320;
}
