import { currentMember, authentication } from "wix-members-frontend";
import wixLocation from "wix-location";
import { checkout } from "wix-pricing-plans-frontend";
import { getPipAccess } from "backend/pipAccess.web";
import wixWindowFrontend from "wix-window-frontend";

const PIP_HTML_COMPONENT_IDS = ["#pipHtml", "#html1", "#html2", "#iFrame1"];
const PIP_PRO_PLAN_ID = "6620618f-b4b7-4224-8554-62563c7d8d54";
const PIP_PRO_FALLBACK_PAGE = "/pip?pro=1";
let lastSessionSignature = "";

$w.onReady(() => {
  const pip = getPipComponent();
  if (!pip) {
    console.warn("Pip iframe bridge could not find the HTML component. Rename the iframe element to pipHtml or add its ID to PIP_HTML_COMPONENT_IDS.");
    return;
  }

  setPipHeight(pip);

  pip.onMessage(async (event) => {
    const message = event.data || {};

    if (message.type === "HYDROPIP_EMBED_HEIGHT") {
      const targetHeight = Number(message.width) > 0 && Number(message.width) <= 750 ? 760 : 820;
      setRenderedHeight(pip, targetHeight, Number(message.width));
      return;
    }

    if (message.type === "HYDROPIP_PIP_READY") {
      await sendPipSession(pip, true);
      return;
    }

    if (message.type === "HYDROPIP_PIP_LOGIN_REQUEST") {
      await handlePipLoginRequest(message.mode);
      await sendPipSession(pip);
    }
  });

  setTimeout(() => sendPipSession(pip), 1200);

  if (wixLocation.query?.pro === "1") {
    setTimeout(() => handlePipLoginRequest("pro"), 900);
  }
});

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
  if (mode === "account") {
    wixLocation.to("/account-settings");
    return;
  }

  let member = await getLoggedInMember();

  if (!member) {
    await authentication.promptLogin({ mode: "login", modal: true }).catch(() => null);
    member = await getLoggedInMember();
  }

  if (mode === "pro") {
    if (!member) return;
    await checkout.startOnlinePurchase(PIP_PRO_PLAN_ID).catch((error) => {
      console.warn("Pip Pro checkout could not start", error);
      wixLocation.to(PIP_PRO_FALLBACK_PAGE);
    });
  }
}

async function sendPipSession(pip, force = false) {
  const member = await getLoggedInMember();
  const subscription = member
    ? await getPipSubscription()
    : { active: false, plan: "visitor", orders: [] };
  const signature = `${member?._id || "visitor"}:${subscription.plan}:${subscription.active}`;
  if (!force && signature === lastSessionSignature) return;
  lastSessionSignature = signature;

  const { sessionToken, ...publicSubscription } = subscription;
  pip.postMessage({
    type: "HYDROPIP_PIP_SESSION",
    member: member
      ? {
          id: member._id,
          email: member.loginEmail || member.contactDetails?.emails?.[0] || null,
          name: member.profile?.nickname || member.contactDetails?.firstName || null
        }
      : null,
    subscription: publicSubscription,
    sessionToken: sessionToken || null
  });
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

function setPipHeight(pip) {
  pip.height = wixWindowFrontend.formFactor === "Mobile" ? 760 : 820;
  wixWindowFrontend.getBoundingRect().then((size) => {
    if (!size?.window?.width) return;
    const targetHeight = size.window.width <= 750 ? 760 : 820;
    setRenderedHeight(pip, targetHeight, size.window.width);
  }).catch(() => {});
}

function setRenderedHeight(embed, renderedHeight, renderedWidth) {
  const componentWidth = Number(embed.width);
  const scale = Number.isFinite(renderedWidth) && renderedWidth > 0 && Number.isFinite(componentWidth) && componentWidth > 0
    ? renderedWidth / componentWidth
    : 1;
  embed.height = Math.ceil(renderedHeight / Math.max(scale, 0.5));
}
