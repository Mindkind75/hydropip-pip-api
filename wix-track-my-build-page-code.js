import wixWindowFrontend from "wix-window-frontend";

const HYDROPIP_TRACK_SRC = "https://hydropip-pip-api.onrender.com/parts-checklist.html?v=launch-20260802c";
const TRACK_EMBED_IDS = ["#trackHtml", "#partsHtml", "#html1", "#html2", "#iFrame1"];

$w.onReady(() => {
  const embed = getEmbed();
  if (!embed) return;

  embed.src = HYDROPIP_TRACK_SRC;
  setFallbackHeight(embed);
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

function setFallbackHeight(embed) {
  embed.height = wixWindowFrontend.formFactor === "Mobile" ? 14950 : 25700;
  wixWindowFrontend.getBoundingRect().then((size) => {
    if (size?.window?.width) embed.height = heightForWidth(size.window.width);
  }).catch(() => {});
}

function heightForWidth(width) {
  if (width <= 750) return 14950;
  if (width <= 1024) return 25000;
  return 25700;
}
