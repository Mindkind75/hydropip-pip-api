import { Permissions, webMethod } from "wix-web-module";
import { orders } from "wix-pricing-plans-backend";

const PIP_PRO_PLAN_NAMES = ["Pip Pro", "HydroPip Pro", "Premium Pip"];
const PIP_PRO_PLAN_IDS = ["6620618f-b4b7-4224-8554-62563c7d8d54"];
const ACTIVE_ORDER_STATUSES = ["ACTIVE", "PENDING_CANCELLATION"];

export const getPipAccess = webMethod(Permissions.SiteMember, async () => {
  try {
    const memberOrders = await orders.listCurrentMemberOrders({}, {}, { limit: 50 });
    const activeOrders = (memberOrders || []).filter((order) =>
      ACTIVE_ORDER_STATUSES.includes(String(order.status || "").toUpperCase())
    );
    const pipProOrder = activeOrders.find(isPipProOrder);

    return {
      active: Boolean(pipProOrder),
      plan: pipProOrder ? "pip_pro" : "free_member",
      planName: pipProOrder?.planName || pipProOrder?.plan?.name || null,
      orderId: pipProOrder?._id || pipProOrder?.id || null,
      checkedBy: "wix_backend"
    };
  } catch (error) {
    return {
      active: false,
      plan: "free_member",
      ordersUnavailable: true,
      checkedBy: "wix_backend"
    };
  }
});

function isPipProOrder(order) {
  const orderPlanId = order.planId || order.plan?._id || order.plan?.id;
  if (orderPlanId && PIP_PRO_PLAN_IDS.includes(orderPlanId)) return true;

  const searchable = [
    order.planName,
    order.plan?.name,
    order.planDescription,
    order.name,
    order.title
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return PIP_PRO_PLAN_NAMES.some((name) => searchable.includes(name.toLowerCase()));
}
