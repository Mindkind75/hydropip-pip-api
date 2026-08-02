const HYDROPIP_EMBED_IDS = ["#homeHtml", "#pipHtml", "#trackHtml", "#partsHtml", "#html1", "#html2", "#iFrame1"];
const MIN_EMBED_HEIGHT = 640;
const MAX_EMBED_HEIGHT = 18000;

$w.onReady(() => {
  const embed = getHydroPipEmbed();
  if (!embed) {
    console.warn("HydroPip resize bridge could not find an HTML/iFrame component. Rename it to homeHtml, pipHtml, trackHtml, or partsHtml.");
    return;
  }

  embed.onMessage((event) => {
    const message = event.data || {};
    if (message.type !== "HYDROPIP_EMBED_HEIGHT") return;

    const nextHeight = clampHeight(Number(message.height));
    if (!nextHeight) return;

    try {
      embed.height = nextHeight;
    } catch (error) {
      console.warn("HydroPip resize bridge could not set iframe height", error);
    }
  });
});

function getHydroPipEmbed() {
  for (const selector of HYDROPIP_EMBED_IDS) {
    try {
      const element = $w(selector);
      if (element && typeof element.onMessage === "function") return element;
    } catch (error) {
      // Try the next common Wix component ID.
    }
  }
  return null;
}

function clampHeight(value) {
  if (!Number.isFinite(value) || value <= 0) return null;
  return Math.max(MIN_EMBED_HEIGHT, Math.min(MAX_EMBED_HEIGHT, Math.ceil(value + 24)));
}
