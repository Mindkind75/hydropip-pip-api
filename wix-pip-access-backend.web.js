import { Permissions, webMethod } from "wix-web-module";
import { orders } from "wix-pricing-plans-backend";
import { members } from "wix-members.v2";
import { getSecret } from "wix-secrets-backend";
import { fetch } from "wix-fetch";

const PIP_PRO_PLAN_NAMES = ["Pip Pro", "HydroPip Pro", "Premium Pip"];
const PIP_PRO_PLAN_IDS = ["6620618f-b4b7-4224-8554-62563c7d8d54"];
const ACTIVE_ORDER_STATUSES = ["ACTIVE", "PENDING_CANCELLATION"];
const PIP_API_URL = "https://hydropip-pip-api.onrender.com";

export const getPipAccess = webMethod(Permissions.SiteMember, async () => {
  let access;
  try {
    const memberOrders = await orders.listCurrentMemberOrders({}, {}, { limit: 50 });
    const activeOrders = (memberOrders || []).filter((order) =>
      ACTIVE_ORDER_STATUSES.includes(String(order.status || "").toUpperCase())
    );
    const pipProOrder = activeOrders.find(isPipProOrder);
    const orderData = /** @type {any} */ (pipProOrder);
    const planName = orderData?.planName || orderData?.plan?.name || null;

    access = {
      active: Boolean(pipProOrder),
      plan: pipProOrder ? "pip_pro" : "free_member",
      planName,
      beta: Boolean(pipProOrder && /beta tester/i.test(String(planName || searchableOrderText(orderData)))),
      orderId: orderData?._id || orderData?.id || null,
      checkedBy: "wix_backend"
    };
  } catch (error) {
    access = {
      active: false,
      plan: "free_member",
      ordersUnavailable: true,
      checkedBy: "wix_backend"
    };
  }

  const sessionToken = await createPipSession(access).catch(() => null);
  return { ...access, sessionToken };
});

async function createPipSession(subscription) {
  const memberResult = await members.getCurrentMember();
  const member = /** @type {any} */ (memberResult?.member || memberResult);
  if (!member?._id) return null;

  const bridgeSecret = await getSecret("PIP_BRIDGE_SECRET");
  const response = await fetch(`${PIP_API_URL}/api/pip/session/exchange`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-pip-bridge-secret": bridgeSecret
    },
    body: JSON.stringify({
      member: {
        id: member._id,
        email: member.loginEmail || null,
        name: member.profile?.nickname || member.contactDetails?.firstName || null
      },
      subscription
    })
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data.token || null;
}

function isPipProOrder(/** @type {any} */ order) {
  const orderPlanId = order.planId || order.plan?._id || order.plan?.id;
  if (orderPlanId && PIP_PRO_PLAN_IDS.includes(orderPlanId)) return true;

  const searchable = searchableOrderText(order).toLowerCase();

  return PIP_PRO_PLAN_NAMES.some((name) => searchable.includes(name.toLowerCase()));
}

function searchableOrderText(/** @type {any} */ order) {
  return [
    order.planName,
    order.plan?.name,
    order.planDescription,
    order.name,
    order.title
  ]
    .filter(Boolean)
    .join(" ");
}
