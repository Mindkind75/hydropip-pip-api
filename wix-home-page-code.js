import wixWindowFrontend from "wix-window-frontend";
import wixLocation from "wix-location";
import { currentMember, authentication } from "wix-members-frontend";

const HYDROPIP_HOME_SRC = "https://hydropip-pip-api.onrender.com/home.html?v=amazon-appeal-20260826&embed=1";
const HOME_EMBED_IDS = ["#homeHtml", "#html1", "#html2", "#iFrame1"];
let hasMeasuredHomeHeight = false;
let pendingWheelDelta = 0;
let wheelScrollInFlight = false;

$w.onReady(() => {
  collapseOuterHeader();
  removeRecentAmazonOverlay();
  const embed = getEmbed();
  if (!embed) return;

  embed.onMessage(async (event) => {
    const message = event.data || {};
    if (message.type === "HYDROPIP_EMBED_HEIGHT" && message.page === "home.html") {
      hasMeasuredHomeHeight = true;
      setEmbedHeight(embed, message.height);
      return;
    }
    if (message.type === "HYDROPIP_HOME_READY") {
      await sendHomeSession(embed);
      return;
    }
    if (message.type === "HYDROPIP_EMBED_WHEEL") {
      queueHomeWheel(message.deltaY);
      return;
    }
    if (message.type === "HYDROPIP_HOME_MEMBER_ACTION") {
      await handleMemberAction(message.action);
      await sendHomeSession(embed);
    }
  });

  setFallbackHeight(embed);
  embed.src = HYDROPIP_HOME_SRC;
  setTimeout(() => sendHomeSession(embed), 1000);
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

function removeRecentAmazonOverlay() {
  for (const selector of ["#button1", "#text1", "#box1"]) {
    try {
      const element = $w(/** @type {any} */ (selector));
      if (element && typeof element.collapse === "function") element.collapse();
    } catch (error) {
      // The recent native Wix overlay may already have been deleted.
    }
  }
}

async function sendHomeSession(embed) {
  const member = await getLoggedInMember();
  embed.postMessage({
    type: "HYDROPIP_HOME_SESSION",
    member: member
      ? {
          id: member._id,
          name: member.profile?.nickname || member.contactDetails?.firstName || "My account",
          photo: memberPhoto(member)
        }
      : null
  });
}

function memberPhoto(member) {
  const value = member?.profile?.photo?.url || member?.profile?.photo || member?.profilePhoto?.url || member?.profilePhoto || null;
  const source = typeof value === "string" ? value : value?.url;
  if (!source) return null;
  if (source.startsWith("//")) return `https:${source}`;
  if (source.startsWith("wix:image://v1/")) {
    return `https://static.wixstatic.com/media/${source.slice(15).split("/")[0]}`;
  }
  return source;
}

async function getLoggedInMember() {
  try {
    return await currentMember.getMember({ fieldsets: ["FULL"] });
  } catch (error) {
    return null;
  }
}

async function handleMemberAction(action) {
  if (action === "logout") {
    await authentication.logout();
    wixLocation.to("/");
    return;
  }
  await authentication.promptLogin({ mode: "login", modal: true }).catch(() => null);
}

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
  if (hasMeasuredHomeHeight) return;
  setEmbedHeight(embed, wixWindowFrontend.formFactor === "Mobile" ? 1500 : 1200);
  wixWindowFrontend.getBoundingRect().then((size) => {
    if (!hasMeasuredHomeHeight && size?.window?.width) {
      setEmbedHeight(embed, heightForWidth(size.window.width));
    }
  }).catch(() => {});
}

function heightForWidth(width) {
  if (width <= 560) return 1500;
  if (width <= 900) return 1400;
  return 1200;
}

function setEmbedHeight(embed, requestedHeight) {
  const height = Math.ceil(Number(requestedHeight));
  if (!Number.isFinite(height) || height < 600 || height > 16000) return;
  embed.height = height + 4;
}

function queueHomeWheel(requestedDelta) {
  const delta = Number(requestedDelta);
  if (!Number.isFinite(delta) || Math.abs(delta) < 1) return;
  pendingWheelDelta += Math.max(-900, Math.min(900, delta));
  if (wheelScrollInFlight) return;
  wheelScrollInFlight = true;
  setTimeout(flushHomeWheel, 0);
}

async function flushHomeWheel() {
  const delta = pendingWheelDelta;
  pendingWheelDelta = 0;
  try {
    await wixWindowFrontend.scrollBy(0, delta);
  } catch (error) {
    // Touch scrolling and keyboard navigation remain available if Wix declines a wheel update.
  } finally {
    wheelScrollInFlight = false;
    if (Math.abs(pendingWheelDelta) >= 1) {
      wheelScrollInFlight = true;
      setTimeout(flushHomeWheel, 0);
    }
  }
}
