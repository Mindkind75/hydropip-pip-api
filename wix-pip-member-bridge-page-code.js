import { currentMember, authentication } from "wix-members-frontend";
import wixLocation from "wix-location";
import wixWindowFrontend from "wix-window-frontend";
import { checkout } from "wix-pricing-plans-frontend";
import { getPipAccess } from "backend/pipAccess.web";

const PIP_HTML_COMPONENT_IDS = ["#pipHtml", "#html1", "#html2", "#iFrame1"];
const PIP_HTML_SRC = "https://hydropip-pip-api.onrender.com/pip.html?v=beta-20260803b";
const PIP_PRO_PLAN_ID = "6620618f-b4b7-4224-8554-62563c7d8d54";
const PIP_PRO_FALLBACK_PAGE = "/pip?pro=1";
let lastSessionSignature = "";

$w.onReady(() => {
  collapseOuterHeader();
  const pip = getPipComponent();
  if (!pip) {
    console.warn("Pip iframe bridge could not find the HTML component. Rename the iframe element to pipHtml or add its ID to PIP_HTML_COMPONENT_IDS.");
    return;
  }

  pip.onMessage(async (event) => {
    const message = event.data || {};

    if (message.type === "HYDROPIP_EMBED_HEIGHT") {
      const requested = Math.floor(Number(message.height));
      if (Number.isFinite(requested)) {
        const minimum = wixWindowFrontend.formFactor === "Desktop" ? 860 : 800;
        pip.height = Math.max(minimum, Math.min(1800, requested));
      }
      return;
    }

    if (message.type === "HYDROPIP_PIP_READY") {
      await sendPipSession(pip, true);
      return;
    }

    if (message.type === "HYDROPIP_PIP_LOGIN_REQUEST") {
      await handlePipLoginRequest(message.mode);
      await sendPipSession(pip);
      return;
    }

    if (message.type === "HYDROPIP_INVITE_COPY_REQUEST") {
      const requestId = String(message.requestId || "");
      const text = String(message.text || "");
      let ok = false;
      try {
        await wixWindowFrontend.copyToClipboard(text);
        ok = true;
      } catch (error) {
        console.warn("HydroPip invite link could not be copied", error);
      }
      pip.postMessage({
        type: "HYDROPIP_INVITE_COPY_RESULT",
        requestId,
        ok
      });
      return;
    }

  });

  pip.src = buildPipSource();
  sizePipToViewport(pip);

  setTimeout(() => sendPipSession(pip), 1200);

});

function collapseOuterHeader() {
  try {
    const header = $w("#section3");
    if (header && typeof header.collapse === "function") header.collapse();
  } catch (error) {
    // The embedded header still works if this page uses a different Wix section ID.
  }
}

function buildPipSource() {
  const forwarded = ["pro", "project", "projectId"]
    .map((key) => {
      const value = wixLocation.query?.[key];
      return value ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}` : null;
    })
    .filter(Boolean);
  return forwarded.length ? `${PIP_HTML_SRC}&${forwarded.join("&")}` : PIP_HTML_SRC;
}

function sizePipToViewport(pip) {
  wixWindowFrontend.getBoundingRect().then((size) => {
    const windowHeight = Math.floor(Number(size?.window?.height));
    if (!Number.isFinite(windowHeight)) return;
    const minimum = wixWindowFrontend.formFactor === "Desktop" ? 860 : 800;
    pip.height = Math.max(minimum, windowHeight - 32);
  }).catch(() => {});
}

function getPipComponent() {
  for (const selector of PIP_HTML_COMPONENT_IDS) {
    try {
      const element = $w(/** @type {any} */ (selector));
      if (element && typeof element.postMessage === "function" && typeof element.onMessage === "function") {
        return element;
      }
    } catch (error) {
      // Try the next likely Wix element ID.
    }
  }
  return null;
}

async function handlePipLoginRequest(mode) {
  if (mode === "logout") {
    await authentication.logout();
    wixLocation.to("/");
    return;
  }

  if (mode === "account") {
    wixLocation.to("/account-settings");
    return;
  }

  if (mode === "subscriptions") {
    wixLocation.to("/account/my-subscriptions");
    return;
  }

  if (mode === "wallet") {
    wixLocation.to("/account/my-wallet");
    return;
  }

  if (mode === "pro") {
    await checkout.startOnlinePurchase(PIP_PRO_PLAN_ID).catch((error) => {
      console.warn("Pip Pro checkout could not start", error);
      wixLocation.to(PIP_PRO_FALLBACK_PAGE);
    });
    return;
  }

  await authentication.promptLogin({ mode: "signup", modal: true }).catch(() => null);
}

async function sendPipSession(pip, force = false) {
  const member = await getLoggedInMember();
  const subscription = member
    ? await getPipSubscription()
    : { active: false, plan: "visitor", orders: [] };
  const signature = `${member?._id || "visitor"}:${subscription.plan}:${subscription.active}:${subscription.beta || false}`;
  if (!force && signature === lastSessionSignature) return;
  lastSessionSignature = signature;

  const { sessionToken, ...publicSubscription } = subscription;
  pip.postMessage({
    type: "HYDROPIP_PIP_SESSION",
    member: member
      ? {
          id: member._id,
          email: member.loginEmail || member.contactDetails?.emails?.[0] || null,
          name: member.profile?.nickname || member.contactDetails?.firstName || null,
          photo: memberPhoto(member)
        }
      : null,
    subscription: publicSubscription,
    sessionToken: sessionToken || null
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
    console.warn("Pip could not read the current Wix member", error);
    return null;
  }
}

async function getPipSubscription() {
  try {
    return await getPipAccess();
  } catch (error) {
    return { active: false, plan: "free_member", ordersUnavailable: true };
  }
}
