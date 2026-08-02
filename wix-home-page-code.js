import wixWindowFrontend from "wix-window-frontend";

const HYDROPIP_HOME_SRC = "https://hydropip-pip-api.onrender.com/home.html?v=launch-20260802e";
const HOME_EMBED_IDS = ["#homeHtml", "#html1", "#html2", "#iFrame1"];

$w.onReady(() => {
  const embed = getEmbed();
  if (!embed) return;

  embed.onMessage((event) => {
    const message = event.data || {};
    if (message.type !== "HYDROPIP_EMBED_HEIGHT" || message.page !== "home.html") return;
    setEmbedHeight(embed, message.height);
  });

  embed.src = HYDROPIP_HOME_SRC;
  setFallbackHeight(embed);
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

function setFallbackHeight(embed) {
  setEmbedHeight(embed, wixWindowFrontend.formFactor === "Mobile" ? 14000 : 8500);
  wixWindowFrontend.getBoundingRect().then((size) => {
    if (size?.window?.width) setEmbedHeight(embed, heightForWidth(size.window.width));
  }).catch(() => {});
}

function heightForWidth(width) {
  if (width <= 560) return 14000;
  if (width <= 900) return 12600;
  if (width <= 1100) return 7700;
  return 8300;
}

function setEmbedHeight(embed, requestedHeight) {
  const height = Math.ceil(Number(requestedHeight));
  if (!Number.isFinite(height) || height < 900 || height > 20000) return;
  embed.height = height + 24;
}
