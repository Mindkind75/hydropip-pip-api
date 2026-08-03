import wixWindowFrontend from "wix-window-frontend";
import wixLocation from "wix-location";
import { currentMember, authentication } from "wix-members-frontend";

const HYDROPIP_HOME_SRC = "https://hydropip-pip-api.onrender.com/home.html?v=launch-20260803a";
const HOME_EMBED_IDS = ["#homeHtml", "#html1", "#html2", "#iFrame1"];

$w.onReady(() => {
  collapseOuterHeader();
  const embed = getEmbed();
  if (!embed) return;

  embed.onMessage(async (event) => {
    const message = event.data || {};
    if (message.type === "HYDROPIP_EMBED_HEIGHT" && message.page === "home.html") {
      setEmbedHeight(embed, message.height);
      return;
    }
    if (message.type === "HYDROPIP_HOME_READY") {
      await sendHomeSession(embed);
      return;
    }
    if (message.type === "HYDROPIP_HOME_MEMBER_ACTION") {
      await handleMemberAction(message.action);
      await sendHomeSession(embed);
    }
  });

  embed.src = HYDROPIP_HOME_SRC;
  setFallbackHeight(embed);
  setTimeout(() => sendHomeSession(embed), 1000);
});

function collapseOuterHeader() {
  try {
    const header = $w("#section3");
    if (header && typeof header.collapse === "function") header.collapse();
  } catch (error) {
    // The embedded header still works if this page uses a different Wix section ID.
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
