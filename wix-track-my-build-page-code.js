import wixWindowFrontend from "wix-window-frontend";

const HYDROPIP_TRACK_SRC = "https://hydropip-pip-api.onrender.com/parts-checklist.html?v=launch-20260804c&embed=1";
const TRACK_EMBED_IDS = ["#trackHtml", "#partsHtml", "#html1", "#html2", "#iFrame1"];
let lastEmbedHeight = 0;

$w.onReady(() => {
  collapseOuterHeader();
  const embed = getEmbed();
  if (!embed) return;

  setFallbackHeight(embed);
  embed.onMessage((event) => syncEmbedHeight(embed, event.data));
  embed.src = HYDROPIP_TRACK_SRC;
});

function collapseOuterHeader() {
  const outerChromeIds = ["#section3", "#membersLoginBar1", "#header1", "#siteHeader"];

  for (const selector of outerChromeIds) {
    try {
      const element = $w(/** @type {any} */ (selector));
      if (element && typeof element.collapse === "function") element.collapse();
    } catch (error) {
      // Try the next known global header element ID.
    }
  }
}

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

function setFallbackHeight(embed) {
  lastEmbedHeight = wixWindowFrontend.formFactor === "Mobile" ? 1800 : 1400;
  embed.height = lastEmbedHeight;
}

function syncEmbedHeight(embed, message) {
  if (!message || message.type !== "HYDROPIP_EMBED_HEIGHT") return;

  const measuredHeight = Math.ceil(Number(message.height));
  if (!Number.isFinite(measuredHeight) || measuredHeight < 1) return;

  const minimum = wixWindowFrontend.formFactor === "Mobile" ? 900 : 1000;
  const maximum = wixWindowFrontend.formFactor === "Mobile" ? 24000 : 36000;
  const nextHeight = Math.max(minimum, Math.min(maximum, measuredHeight + 12));
  if (Math.abs(nextHeight - lastEmbedHeight) < 8) return;

  lastEmbedHeight = nextHeight;
  embed.height = nextHeight;
}
