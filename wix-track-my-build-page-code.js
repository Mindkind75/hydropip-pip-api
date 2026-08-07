import wixWindowFrontend from "wix-window-frontend";
import { currentMember } from "wix-members-frontend";
import { getPipAccess } from "backend/pipAccess.web";

const HYDROPIP_TRACK_SRC = "https://hydropip-pip-api.onrender.com/parts-checklist.html?v=launch-20260807a&embed=1";
const TRACK_EMBED_IDS = ["#trackHtml", "#partsHtml", "#html1", "#html2", "#iFrame1"];
let lastEmbedHeight = 0;
let lastSessionSignature = "";

$w.onReady(() => {
  collapseOuterHeader();
  const embed = getEmbed();
  if (!embed) return;

  setFallbackHeight(embed);
  embed.onMessage(async (event) => {
    const message = event.data || {};
    if (message.type === "HYDROPIP_EMBED_HEIGHT") syncEmbedHeight(embed, message);
    if (message.type === "HYDROPIP_TRACK_SCROLL_SECTION") await scrollTrackSection(message);
    if (message.type === "HYDROPIP_TRACK_READY") await sendTrackSession(embed, true);
  });
  embed.src = HYDROPIP_TRACK_SRC;
  setTimeout(() => sendTrackSession(embed), 1200);
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

async function scrollTrackSection(message) {
  const requestedTop = Math.floor(Number(message?.top));
  if (!Number.isFinite(requestedTop)) return;
  try {
    await wixWindowFrontend.scrollTo(0, Math.max(0, requestedTop));
  } catch (error) {
    // The embedded control still scrolls its own document when Wix cannot move the outer page.
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

async function sendTrackSession(embed, force = false) {
  let member = null;
  try {
    member = await currentMember.getMember({ fieldsets: ["FULL"] });
  } catch (error) {
    // Track My Build still keeps a device copy when no member is signed in.
  }
  let access = { active: false, plan: member ? "free_member" : "visitor", sessionToken: null };
  if (member) {
    try {
      access = await getPipAccess();
    } catch (error) {
      // The device copy remains available if account sync is temporarily unavailable.
    }
  }
  const signature = `${member?._id || "visitor"}:${access.plan}:${access.active}:${Boolean(access.sessionToken)}`;
  if (!force && signature === lastSessionSignature) return;
  lastSessionSignature = signature;
  embed.postMessage({
    type: "HYDROPIP_TRACK_SESSION",
    member: member ? { id: member._id } : null,
    subscription: { active: Boolean(access.active), plan: access.plan || (member ? "free_member" : "visitor") },
    sessionToken: access.sessionToken || null
  });
}
