import wixWindowFrontend from "wix-window-frontend";

const HYDROPIP_HOME_SRC = "https://hydropip-pip-api.onrender.com/home.html?v=launch-20260802c";
const HOME_EMBED_IDS = ["#homeHtml", "#html1", "#html2", "#iFrame1"];

$w.onReady(() => {
  const embed = getEmbed();
  if (!embed) return;

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
  embed.height = wixWindowFrontend.formFactor === "Mobile" ? 10300 : 3900;
  wixWindowFrontend.getBoundingRect().then((size) => {
    if (size?.window?.width) embed.height = heightForWidth(size.window.width);
  }).catch(() => {});
}

function heightForWidth(width) {
  if (width <= 750) return 10300;
  if (width <= 1024) return 17800;
  return 3900;
}
