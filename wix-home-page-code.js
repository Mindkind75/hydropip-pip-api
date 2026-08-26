import wixWindowFrontend from "wix-window-frontend";
import wixLocation from "wix-location";
import { currentMember, authentication } from "wix-members-frontend";

const HYDROPIP_HOME_SRC = "https://hydropip-pip-api.onrender.com/home.html?v=launch-20260809-wheel2&embed=1";
const HOME_EMBED_IDS = ["#homeHtml", "#html1", "#html2", "#iFrame1"];
let hasMeasuredHomeHeight = false;
let pendingWheelDelta = 0;
let wheelScrollInFlight = false;

$w.onReady(() => {
  collapseOuterHeader();
  configureCrawlerSupportBand();
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
  if (!Number.isFinite(height) || height < 600 || height > 40000) return;
  embed.height = height + 4;
}

function configureCrawlerSupportBand() {
  try {
    const supportBand = $w("#box1");
    supportBand.style.backgroundColor = "rgba(246, 243, 234, 1)";
    supportBand.style.backgroundOpacity = 1;
    supportBand.style.borderColor = "rgba(213, 223, 216, 1)";
    supportBand.style.borderOpacity = 1;
    supportBand.style.borderWidth = "1px";
    supportBand.style.borderRadius = "4px";
  } catch (error) {
    // The crawler support band is optional while this code is reused in preview.
  }

  try {
    const affiliateCopy = $w("#text1");
    affiliateCopy.html = '<h3 style="font-size:20px;line-height:1.2;color:#10221b;margin:0 0 8px"><strong>Buy the core parts directly. Keep the build guidance free.</strong></h3><p style="font-size:14px;line-height:1.4;color:#4d6258;margin:0 0 7px">HydroPip does not sell or mark up the hardware. Start with the core components below, or open Track My Build for the complete quantities and local-pickup list.</p><p style="font-size:14px;line-height:1.45;margin:0 0 7px"><a href="https://www.amazon.com/dp/B007TFTXAC?tag=hydrpip2002-20" target="_blank">Planter stacks</a> &nbsp;|&nbsp; <a href="https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20" target="_blank">Two IBC pumps</a> &nbsp;|&nbsp; <a href="https://www.amazon.com/s?k=garden+hose+1%2F2+inch+50+ft&tag=hydrpip2002-20" target="_blank">Main hose</a> &nbsp;|&nbsp; <a href="https://www.amazon.com/dp/B0GQQP8M83?tag=hydrpip2002-20" target="_blank">Rigid tower tubing</a></p><p style="font-size:12px;line-height:1.35;color:#4d6258;margin:0">As an Amazon Associate I earn from qualifying purchases.</p>';
  } catch (error) {
    // Keep the editor-authored copy if this element is not present.
  }

  try {
    const checklistButton = $w("#button1");
    checklistButton.label = "Open the full parts checklist";
    checklistButton.link = "https://www.hydropip.com/track-my-build";
    checklistButton.target = "_self";
    checklistButton.style.backgroundColor = "#218454";
    checklistButton.style.color = "#FFFFFF";
    checklistButton.style.borderColor = "#218454";
    checklistButton.style.borderRadius = "4px";
  } catch (error) {
    // Keep the editor-authored action if this element is not present.
  }
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
