import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dailyLimitForTier, dailyResetAt, getPipUsageConfig, monthlyLimitForTier, monthlyResetAt } from "./pipUsage.js";
import { resetKnowledgeIndex } from "./ragStore.js";
import { buildRhythmSetupPlan, isCurrentGrowSeed, localDueAt, rhythmCropKey, rhythmSetupStatus } from "./rhythmSetup.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultDataFile = path.join(__dirname, ".data", "pip-memory.json");
const dataFile = process.env.PIP_MEMORY_FILE || defaultDataFile;
const rootDir = path.resolve(__dirname, "..");
export const FREE_BUILD_PHOTO_LIMIT = 5;

if (process.env.NODE_ENV === "production" && !process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required in production; local JSON memory is disabled.");
}

export const DEFAULT_WORKSPACE_TAB_ORDER = [
  "rhythm",
  "profile",
  "planner",
  "calendar",
  "seeds",
  "log",
  "history",
  "build",
  "account",
  "beta",
  "guide",
  "chat"
];

export const projectTemplates = [
  {
    id: "hydropip_build",
    title: "Build My HydroPip System",
    access: "free_member",
    description: "Guided setup for the HydroPip timed-feed tower build, parts, plumbing, first run, and calibration."
  },
  {
    id: "existing_system_setup",
    title: "Map My Existing Hydro System",
    access: "pip_pro",
    description: "Paid project for capturing another hydro system type, reservoir, plants, media, nutrients, readings, and current pain points."
  },
  {
    id: "crop_schedule",
    title: "Crop Schedule",
    access: "pip_pro",
    description: "Paid project for planting dates, pruning, pH/EC checks, harvest windows, and succession planting."
  },
  {
    id: "maintenance_plan",
    title: "Maintenance Plan",
    access: "pip_pro",
    description: "Paid project for tank checks, pump checks, line flushing, refill rhythm, cleaning, and reset tasks."
  },
  {
    id: "grow_log",
    title: "Grow Log",
    access: "pip_pro",
    description: "Paid project for saving readings, observations, photos, issues, and Pip's prior guidance."
  },
  {
    id: "sensor_schedule",
    title: "Sensor-Tuned Schedule",
    access: "pip_pro_future",
    description: "Future project for pH, EC/TDS, tank level, temperature, humidity, and runoff-driven schedule tuning."
  }
];

export const proConversationStarters = [
  { id: "crop_rotation", title: "Crop Planning & Rotation" },
  { id: "seeds_germination", title: "Seeds & Germination" },
  { id: "feeding_nutrients", title: "Feeding & Nutrients" },
  { id: "plant_health", title: "Bugs & Plant Health" },
  { id: "maintenance", title: "Maintenance & Cleaning" },
  { id: "troubleshooting", title: "Troubleshooting" },
  { id: "harvest_reset", title: "Harvest & Reset" }
];

const defaultState = {
  version: 2,
  users: {},
  feedback: {},
  betaApplications: {},
  projects: {},
  chatThreads: {},
  conversations: {},
  reminders: {},
  readings: {},
  seeds: {},
  reviewItems: {},
  pushSubscriptions: {},
  conversionEvents: {},
  usageEvents: {},
  creditLedger: {},
  adminPasskeys: {}
};

let stateCache;
let poolPromise;
let schemaPromise;
let forceFileMemory = false;

export function getProjectTemplates() {
  return { templates: projectTemplates };
}

export async function getMemoryHealth() {
  if (!usesPostgres()) return { mode: "file", persistent: false };
  const pool = await getPool();
  await ensureSchema(pool);
  await pool.query("select 1");
  return { mode: "postgres", persistent: true };
}

export async function listAdminPasskeys() {
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select credential_id, public_key, counter, transports, device_type, backed_up, created_at, last_used_at
       from pip_admin_passkeys order by created_at asc`
    );
    return result.rows.map(rowToAdminPasskey);
  }
  return Object.values(readState().adminPasskeys).sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
}

export async function getAdminPasskey({ credentialId } = {}) {
  const id = String(credentialId || "").trim();
  if (!id) return null;
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select credential_id, public_key, counter, transports, device_type, backed_up, created_at, last_used_at
       from pip_admin_passkeys where credential_id = $1`,
      [id]
    );
    return result.rows[0] ? rowToAdminPasskey(result.rows[0]) : null;
  }
  return readState().adminPasskeys[id] || null;
}

export async function saveAdminPasskey(passkey = {}) {
  const normalized = normalizeAdminPasskey(passkey);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `insert into pip_admin_passkeys
         (credential_id, public_key, counter, transports, device_type, backed_up, created_at, last_used_at)
       values ($1,$2,$3,$4::jsonb,$5,$6,$7,$7)
       on conflict (credential_id) do update set
         public_key=excluded.public_key,
         counter=excluded.counter,
         transports=excluded.transports,
         device_type=excluded.device_type,
         backed_up=excluded.backed_up,
         last_used_at=excluded.last_used_at
       returning credential_id, public_key, counter, transports, device_type, backed_up, created_at, last_used_at`,
      [
        normalized.credentialId,
        normalized.publicKey,
        normalized.counter,
        JSON.stringify(normalized.transports),
        normalized.deviceType,
        normalized.backedUp,
        normalized.createdAt
      ]
    );
    return rowToAdminPasskey(result.rows[0]);
  }
  const state = readState();
  state.adminPasskeys[normalized.credentialId] = normalized;
  writeState(state);
  return normalized;
}

export async function updateAdminPasskeyCounter({ credentialId, counter, backedUp, deviceType } = {}) {
  const id = String(credentialId || "").trim();
  if (!id) return null;
  const nextCounter = Math.max(0, Number(counter) || 0);
  const lastUsedAt = new Date().toISOString();
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_admin_passkeys
       set counter=$1, backed_up=$2, device_type=$3, last_used_at=$4
       where credential_id=$5
       returning credential_id, public_key, counter, transports, device_type, backed_up, created_at, last_used_at`,
      [nextCounter, Boolean(backedUp), cleanOptionalText(deviceType, 60) || "unknown", lastUsedAt, id]
    );
    return result.rows[0] ? rowToAdminPasskey(result.rows[0]) : null;
  }
  const state = readState();
  const current = state.adminPasskeys[id];
  if (!current) return null;
  const updated = { ...current, counter: nextCounter, backedUp: Boolean(backedUp), deviceType: cleanOptionalText(deviceType, 60) || "unknown", lastUsedAt };
  state.adminPasskeys[id] = updated;
  writeState(state);
  return updated;
}

export async function recordConversionEvent(event = {}) {
  const normalized = normalizeConversionEvent(event);

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `insert into pip_conversion_events
        (id, client_event_id, event_name, visitor_id, user_id, session_tier, page, referrer_host,
         utm_source, utm_medium, utm_campaign, utm_content, utm_term, metadata, created_at)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14::jsonb, $15)
       on conflict (client_event_id) do nothing
       returning *`,
      [
        normalized.id,
        normalized.clientEventId,
        normalized.eventName,
        normalized.visitorId,
        normalized.userId,
        normalized.sessionTier,
        normalized.page,
        normalized.referrerHost,
        normalized.utmSource,
        normalized.utmMedium,
        normalized.utmCampaign,
        normalized.utmContent,
        normalized.utmTerm,
        JSON.stringify(normalized.metadata),
        normalized.createdAt
      ]
    );
    return result.rows[0] ? rowToConversionEvent(result.rows[0]) : null;
  }

  const state = readState();
  if (normalized.clientEventId && Object.values(state.conversionEvents).some((item) => item.clientEventId === normalized.clientEventId)) {
    return null;
  }
  state.conversionEvents[normalized.id] = normalized;
  writeState(state);
  return normalized;
}

export async function getConversionSummary({ days = 30 } = {}) {
  const safeDays = [7, 30, 90, 365].includes(Number(days)) ? Number(days) : 30;
  const start = new Date(Date.now() - safeDays * 24 * 60 * 60 * 1000).toISOString();
  let events;

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select * from pip_conversion_events
       where created_at >= $1
       order by created_at desc
       limit 100000`,
      [start]
    );
    events = result.rows.map(rowToConversionEvent);
  } else {
    events = Object.values(readState().conversionEvents)
      .filter((item) => String(item.createdAt) >= start)
      .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
      .slice(0, 100000);
  }

  const counts = {};
  const visitorsByEvent = {};
  const sources = {};
  const daily = {};
  for (const event of events) {
    counts[event.eventName] = (counts[event.eventName] || 0) + 1;
    const identity = event.userId || event.visitorId;
    if (identity) {
      visitorsByEvent[event.eventName] ||= new Set();
      visitorsByEvent[event.eventName].add(identity);
    }
    const source = event.utmSource || (event.referrerHost && !/^(?:www\.)?hydropip\.com$/i.test(event.referrerHost) ? event.referrerHost : "direct");
    sources[source] = (sources[source] || 0) + 1;
    const day = String(event.createdAt).slice(0, 10);
    daily[day] ||= {};
    daily[day][event.eventName] = (daily[day][event.eventName] || 0) + 1;
  }

  return {
    days: safeDays,
    start,
    totalEvents: events.length,
    uniqueVisitors: new Set(events.map((event) => event.userId || event.visitorId).filter(Boolean)).size,
    counts,
    uniqueByEvent: Object.fromEntries(Object.entries(visitorsByEvent).map(([name, visitors]) => [name, visitors.size])),
    sources: Object.entries(sources).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([name, count]) => ({ name, count })),
    daily: Object.entries(daily).sort((a, b) => a[0].localeCompare(b[0])).map(([date, values]) => ({ date, ...values })),
    latestAt: events[0]?.createdAt || null
  };
}

export async function getAdminCommandCenter({ days = 30 } = {}) {
  const safeDays = [7, 30, 90, 365].includes(Number(days)) ? Number(days) : 30;
  const start = new Date(Date.now() - safeDays * 24 * 60 * 60 * 1000).toISOString();
  if (usesPostgres()) {
    const pool = await readyPool();
    const [usersResult, projectsResult, reviewsResult, conversionsResult, usageResult, betaApplicationsResult, betaFeedbackResult] = await Promise.all([
      pool.query("select id, email, name, wix_member_id, subscription_snapshot, created_at, updated_at from pip_users"),
      pool.query("select id, user_id, type, title, status, access, system_profile, created_at, updated_at from pip_projects"),
      pool.query("select id, user_id, project_id, question, answer, reason, context, status, priority, resolution, created_at, updated_at from pip_review_items"),
      pool.query("select * from pip_conversion_events where created_at >= $1 order by created_at desc limit 100000", [start]),
      pool.query("select * from pip_usage_events where created_at >= $1 order by created_at desc limit 100000", [start]),
      pool.query("select id, status, created_at, updated_at from pip_beta_applications"),
      pool.query("select id, review_status, priority, rating, category, created_at, updated_at from pip_feedback")
    ]);
    return summarizeCommandCenter({
      users: usersResult.rows.map(rowToUser),
      projects: projectsResult.rows.map(rowToProject),
      reviews: reviewsResult.rows.map(rowToReviewItem),
      conversions: conversionsResult.rows.map(rowToConversionEvent),
      usage: usageResult.rows.map(rowToUsageEvent),
      betaApplications: betaApplicationsResult.rows.map((row) => ({ status: row.status, createdAt: toIso(row.created_at), updatedAt: toIso(row.updated_at) })),
      betaFeedback: betaFeedbackResult.rows.map((row) => ({ reviewStatus: row.review_status, priority: row.priority, rating: row.rating, category: row.category, createdAt: toIso(row.created_at), updatedAt: toIso(row.updated_at) })),
      storageMode: "postgres",
      days: safeDays
    });
  }

  const state = readState();
  return summarizeCommandCenter({
    users: Object.values(state.users || {}),
    projects: Object.values(state.projects || {}),
    reviews: Object.values(state.reviewItems || {}),
    conversions: Object.values(state.conversionEvents || {}).filter((item) => String(item.createdAt) >= start),
    usage: Object.values(state.usageEvents || {}).filter((item) => String(item.createdAt) >= start),
    betaApplications: Object.values(state.betaApplications || {}),
    betaFeedback: Object.values(state.feedback || {}),
    storageMode: "file",
    days: safeDays
  });
}

export async function searchAdminMembers({ q = "", limit = 25 } = {}) {
  const query = String(q || "").trim().toLowerCase();
  const safeLimit = Math.max(1, Math.min(100, Number(limit || 25)));
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select
         u.id, u.email, u.name, u.wix_member_id, u.created_at, u.updated_at,
         count(distinct p.id)::int as project_count,
         count(distinct ue.id)::int as usage_count,
         max(greatest(coalesce(ue.created_at, u.updated_at), coalesce(ce.created_at, u.updated_at), u.updated_at)) as last_seen_at,
         bool_or(ue.session_tier = 'pip_pro' or ce.session_tier = 'pip_pro') as has_observed_pro_access,
         u.subscription_snapshot
       from pip_users u
       left join pip_projects p on p.user_id = u.id
       left join pip_usage_events ue on ue.user_id = u.id
       left join pip_conversion_events ce on ce.user_id = u.id
       where $1::text = ''
          or lower(coalesce(u.email, '')) like '%' || $1 || '%'
          or lower(coalesce(u.name, '')) like '%' || $1 || '%'
          or lower(u.id) like '%' || $1 || '%'
       group by u.id, u.email, u.name, u.wix_member_id, u.subscription_snapshot, u.created_at, u.updated_at
       order by coalesce(max(greatest(coalesce(ue.created_at, u.updated_at), coalesce(ce.created_at, u.updated_at), u.updated_at)), u.updated_at) desc
       limit $2`,
      [query, safeLimit]
    );
    return result.rows.map((row) => ({
      id: row.id,
      email: redactAdminEmail(row.email),
      name: row.name,
      wixMemberId: row.wix_member_id ? `${String(row.wix_member_id).slice(0, 8)}...` : null,
      createdAt: toIso(row.created_at),
      updatedAt: toIso(row.updated_at),
      lastSeenAt: toIso(row.last_seen_at || row.updated_at),
      projectCount: Number(row.project_count || 0),
      usageCount: Number(row.usage_count || 0),
      subscription: adminSubscriptionStatus(row.subscription_snapshot, Boolean(row.has_observed_pro_access))
    }));
  }

  const state = readState();
  const projects = Object.values(state.projects || {});
  const usage = Object.values(state.usageEvents || {});
  const conversions = Object.values(state.conversionEvents || {});
  return Object.values(state.users || {})
    .filter((user) => {
      const haystack = [user.id, user.email, user.name, user.wixMemberId].join(" ").toLowerCase();
      return !query || haystack.includes(query);
    })
    .map((user) => {
      const userUsage = usage.filter((event) => event.userId === user.id);
      const userConversions = conversions.filter((event) => event.userId === user.id);
      const pro = [...userUsage, ...userConversions].some((event) => event.sessionTier === "pip_pro");
      return {
        id: user.id,
        email: redactAdminEmail(user.email),
        name: user.name || null,
        wixMemberId: user.wixMemberId ? `${String(user.wixMemberId).slice(0, 8)}...` : null,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        lastSeenAt: latestAdminDate([user.updatedAt, ...userUsage.map((event) => event.createdAt), ...userConversions.map((event) => event.createdAt)]),
        projectCount: projects.filter((project) => project.userId === user.id).length,
        usageCount: userUsage.length,
        subscription: adminSubscriptionStatus(user.subscriptionSnapshot, pro)
      };
    })
    .sort((a, b) => String(b.lastSeenAt || "").localeCompare(String(a.lastSeenAt || "")))
    .slice(0, safeLimit);
}

export function summarizeCommandCenter({ users, projects, reviews, conversions, usage, betaApplications, betaFeedback, storageMode, days }) {
  const usageConfig = getPipUsageConfig();
  const pageViews = conversions.filter((event) => event.eventName === "page_view");
  const observedProIds = new Set([
    ...usage.filter((event) => event.sessionTier === "pip_pro").map((event) => event.userId),
    ...conversions.filter((event) => event.sessionTier === "pip_pro").map((event) => event.userId)
  ].filter(Boolean));
  const verifiedPaidIds = new Set(users
    .filter((user) => user.subscriptionSnapshot?.active && !user.subscriptionSnapshot?.beta)
    .map((user) => user.id));
  const verifiedBetaIds = new Set(users
    .filter((user) => user.subscriptionSnapshot?.active && user.subscriptionSnapshot?.beta)
    .map((user) => user.id));
  const unclassifiedProIds = new Set([...observedProIds]
    .filter((id) => !verifiedPaidIds.has(id) && !verifiedBetaIds.has(id)));
  const freeMemberIds = new Set([
    ...users.map((user) => user.id),
    ...usage.filter((event) => event.userId && event.sessionTier !== "pip_pro").map((event) => event.userId),
    ...conversions.filter((event) => event.userId && event.sessionTier !== "pip_pro").map((event) => event.userId)
  ].filter((id) => !observedProIds.has(id) && !verifiedPaidIds.has(id) && !verifiedBetaIds.has(id)));
  const visitorIds = new Set(conversions.map((event) => event.userId || event.visitorId).filter(Boolean));
  const questions = usage.map((event) => event.metadata?.mode || event.eventType || "").filter(Boolean);
  const estimatedCost = usage.reduce((sum, event) => sum + Number(event.estimatedCostUsd || 0), 0);
  const usedCredits = usage.reduce((sum, event) => sum + Number(event.creditsUsed || 0), 0);
  const openReviews = reviews.filter((item) => ["new", "reviewing"].includes(item.status));
  const openFeedback = betaFeedback.filter((item) => ["new", "reviewing", "planned"].includes(item.reviewStatus));
  const newApplications = betaApplications.filter((item) => item.status === "new");

  return {
    generatedAt: nowIso(),
    days,
    storageMode,
    overview: {
      totalUsers: users.length,
      freeMembers: freeMemberIds.size,
      activeSubscribers: verifiedPaidIds.size,
      verifiedPaidSubscribers: verifiedPaidIds.size,
      betaAccessUsers: verifiedBetaIds.size,
      observedProUsers: observedProIds.size,
      unclassifiedProUsers: unclassifiedProIds.size,
      knownVisitors: visitorIds.size,
      projects: projects.length,
      activeProjects: projects.filter((project) => project.status === "active").length,
      openReviews: openReviews.length,
      openFeedback: openFeedback.length,
      newApplications: newApplications.length
    },
    traffic: {
      pageViews: pageViews.length,
      uniqueVisitors: new Set(pageViews.map((event) => event.userId || event.visitorId).filter(Boolean)).size,
      topPages: adminTopCounts(pageViews.map((event) => event.page || "/"), 8),
      sources: adminTopCounts(conversions.map((event) => event.utmSource || event.referrerHost || "direct"), 8)
    },
    funnel: {
      pageViews: pageViews.length,
      pipOpens: eventCount(conversions, "pip_opened"),
      chatStarts: eventCount(conversions, "pip_question_asked"),
      signupClicks: eventCount(conversions, "signup_started"),
      proViews: eventCount(conversions, "pip_pro_viewed"),
      proCheckoutStarts: eventCount(conversions, "pro_checkout_started"),
      affiliateClicks: eventCount(conversions, "affiliate_link_clicked")
    },
    pipUsage: {
      events: usage.length,
      creditsUsed: usedCredits,
      globalMonthlyLimit: usageConfig.globalMonthlyCredits,
      globalMonthlyPercent: usageConfig.globalMonthlyCredits > 0 ? Number(((usedCredits / usageConfig.globalMonthlyCredits) * 100).toFixed(2)) : null,
      estimatedCostUsd: Number(estimatedCost.toFixed(4)),
      subscriberEvents: usage.filter((event) => event.sessionTier === "pip_pro").length,
      freeMemberEvents: usage.filter((event) => event.userId && event.sessionTier !== "pip_pro").length,
      visitorEvents: usage.filter((event) => !event.userId).length,
      byTier: adminTopCounts(usage.map((event) => event.sessionTier), 8),
      byType: adminTopCounts(usage.map((event) => event.eventType), 8),
      topics: adminTopCounts(questions, 8)
    },
    revenue: {
      activeSubscribers: verifiedPaidIds.size,
      verifiedPaidSubscribers: verifiedPaidIds.size,
      betaAccessUsers: verifiedBetaIds.size,
      observedProUsers: observedProIds.size,
      unclassifiedProUsers: unclassifiedProIds.size,
      billingSource: "wix_pricing_plans",
      coverage: "members_who_connected_to_pip",
      affiliateClicks: eventCount(conversions, "affiliate_link_clicked"),
      proCheckoutStarts: eventCount(conversions, "pro_checkout_started")
    },
    actionCenter: buildAdminActions({
      openReviews,
      openFeedback,
      newApplications,
      usage,
      conversions,
      storageMode,
      estimatedCost,
      subscriberIds: observedProIds
    }),
    operations: {
      storageMode,
      aiConfigured: Boolean(process.env.OPENAI_API_KEY),
      signedSessionsRequired: true,
      estimatedCostUsd: Number(estimatedCost.toFixed(4)),
      usageEvents: usage.length,
      conversionEvents: conversions.length,
      lastUsageAt: latestAdminDate(usage.map((event) => event.createdAt)),
      lastConversionAt: latestAdminDate(conversions.map((event) => event.createdAt))
    },
    review: {
      byStatus: adminTopCounts(reviews.map((item) => item.status || "new"), 8),
      byReason: adminTopCounts(reviews.map((item) => item.reason || "needs_review"), 8),
      highPriorityOpen: openReviews.filter((item) => item.priority === "high").length,
      newest: reviews
        .slice()
        .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
        .slice(0, 6)
        .map((item) => ({
          id: item.id,
          status: item.status,
          priority: item.priority,
          reason: item.reason,
          question: item.question,
          createdAt: item.createdAt
        }))
    },
    members: users
      .slice()
      .sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")))
      .slice(0, 8)
      .map((user) => ({
        ...redactAdminUser(user, observedProIds.has(user.id)),
        projectCount: projects.filter((project) => project.userId === user.id).length,
        usageCount: usage.filter((event) => event.userId === user.id).length
      })),
    projects: {
      byType: adminTopCounts(projects.map((project) => project.type), 8),
      byAccess: adminTopCounts(projects.map((project) => project.access), 8)
    }
  };
}

function eventCount(events, name) {
  return events.filter((event) => event.eventName === name).length;
}

function buildAdminActions({ openReviews, openFeedback, newApplications, usage, conversions, storageMode, estimatedCost, subscriberIds }) {
  const actions = [];
  if (openReviews.length) actions.push({
    id: "review_queue",
    priority: openReviews.some((item) => item.priority === "high") ? "high" : "normal",
    title: "Review Pip training queue",
    detail: `${openReviews.length} answer${openReviews.length === 1 ? "" : "s"} need a decision.`,
    href: "/pip-review-admin.html"
  });
  if (newApplications.length) actions.push({
    id: "beta_applications",
    priority: "normal",
    title: "Review beta applicants",
    detail: `${newApplications.length} new applicant${newApplications.length === 1 ? "" : "s"} waiting.`,
    href: "/beta-admin.html"
  });
  if (openFeedback.length) actions.push({
    id: "member_feedback",
    priority: openFeedback.some((item) => ["urgent", "high"].includes(item.priority)) ? "high" : "normal",
    title: "Triage member feedback",
    detail: `${openFeedback.length} feedback item${openFeedback.length === 1 ? "" : "s"} still open.`,
    href: "/beta-admin.html"
  });
  if (estimatedCost >= Number(process.env.PIP_ADMIN_COST_ALERT_USD || 5)) actions.push({
    id: "usage_cost",
    priority: "high",
    title: "Check AI usage cost",
    detail: `$${Number(estimatedCost).toFixed(2)} estimated in the selected window.`,
    href: "https://platform.openai.com/usage"
  });
  const checkoutStarts = eventCount(conversions, "pro_checkout_started");
  if (checkoutStarts && subscriberIds.size === 0) actions.push({
    id: "checkout_followup",
    priority: "normal",
    title: "Inspect Pro checkout starts",
    detail: `${checkoutStarts} checkout start${checkoutStarts === 1 ? "" : "s"} with no observed Pro subscriber yet.`,
    href: "https://manage.wix.com/"
  });
  if (storageMode !== "postgres") actions.push({
    id: "database",
    priority: "high",
    title: "Database is not persistent",
    detail: "Production should report Postgres before public launch.",
    href: "https://dashboard.render.com/"
  });
  if (!usage.length && conversions.some((event) => event.eventName === "pip_question_asked")) actions.push({
    id: "usage_gap",
    priority: "normal",
    title: "Confirm Pip usage logging",
    detail: "Questions are tracked but AI usage events are empty.",
    href: "/admin-control-center"
  });
  return actions
    .sort((a, b) => Number(b.priority === "high") - Number(a.priority === "high") || a.title.localeCompare(b.title))
    .slice(0, 8);
}

function adminTopCounts(values, limit = 10) {
  const counts = new Map();
  for (const raw of values) {
    const value = String(raw || "").trim();
    if (!value) continue;
    counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([label, count]) => ({ label, count }));
}

function redactAdminUser(user = {}, observedPro = false) {
  return {
    id: user.id,
    email: redactAdminEmail(user.email),
    name: user.name || null,
    wixMemberId: user.wixMemberId ? `${String(user.wixMemberId).slice(0, 8)}...` : null,
    subscription: adminSubscriptionStatus(user.subscriptionSnapshot, observedPro),
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}

function redactAdminEmail(email) {
  const value = String(email || "");
  const [name, domain] = value.split("@");
  if (!name || !domain) return value || null;
  return `${name.slice(0, 2)}***@${domain}`;
}

function latestAdminDate(values) {
  return values.filter(Boolean).sort().at(-1) || null;
}

export async function getDailyAiUsageSummary({ userId, ipHash, tier } = {}) {
  const identity = normalizeUsageIdentity({ userId, ipHash });
  const normalizedTier = normalizeUsageTier(tier);
  const dailyLimit = dailyLimitForTier(normalizedTier);
  const monthlyLimit = monthlyLimitForTier(normalizedTier);
  const resetAt = dailyResetAt();

  if (usesPostgres()) {
    const pool = await readyPool();
    const usedResult = await pool.query(
      `select coalesce(sum(credits_used) filter (
                where created_at >= date_trunc('day', now() at time zone 'UTC') at time zone 'UTC'
                  and coalesce(metadata->>'funding', 'included') = 'included'
              ), 0)::integer as used,
              count(*) filter (where created_at >= date_trunc('day', now() at time zone 'UTC') at time zone 'UTC')::integer as event_count,
              coalesce(sum(credits_used) filter (
                where created_at >= date_trunc('month', now() at time zone 'UTC') at time zone 'UTC'
              ), 0)::integer as used_month
       from pip_usage_events
       where ${identity.userId ? "user_id = $1" : "user_id is null and ip_hash = $1"}
         and created_at >= date_trunc('month', now() at time zone 'UTC') at time zone 'UTC'`,
      [identity.userId || identity.ipHash]
    );
    return {
      tier: normalizedTier,
      dailyLimit,
      monthlyLimit,
      usedToday: Number(usedResult.rows[0]?.used || 0),
      usedThisMonth: Number(usedResult.rows[0]?.used_month || 0),
      eventCountToday: Number(usedResult.rows[0]?.event_count || 0),
      topUpBalance: identity.userId ? await getPipCreditBalance({ userId: identity.userId }) : 0,
      resetAt
    };
  }

  const state = readState();
  const start = utcDayStart();
  const monthStart = utcMonthStart();
  const monthlyEvents = Object.values(state.usageEvents).filter((event) => usageEventMatches(event, identity, monthStart));
  const events = monthlyEvents.filter((event) => String(event.createdAt) >= start);
  return {
    tier: normalizedTier,
    dailyLimit,
    monthlyLimit,
    usedToday: events.filter((event) => event.metadata?.funding !== "top_up").reduce((sum, event) => sum + Number(event.creditsUsed || 0), 0),
    usedThisMonth: monthlyEvents.reduce((sum, event) => sum + Number(event.creditsUsed || 0), 0),
    eventCountToday: events.length,
    topUpBalance: identity.userId ? creditBalanceFromState(state, identity.userId) : 0,
    resetAt
  };
}

export async function reserveAiUsage({ userId, ipHash, tier, creditsRequired, eventType, metadata = {} } = {}) {
  const identity = normalizeUsageIdentity({ userId, ipHash });
  const normalizedTier = normalizeUsageTier(tier);
  const required = normalizeCreditAmount(creditsRequired, "creditsRequired");
  const dailyLimit = dailyLimitForTier(normalizedTier);
  const monthlyLimit = monthlyLimitForTier(normalizedTier);
  const usageConfig = getPipUsageConfig();
  const globalMonthlyLimit = usageConfig.globalMonthlyCredits;
  const reservationId = makeId("usage");
  const safeMetadata = normalizeUsageMetadata(metadata);

  if (usesPostgres()) {
    const pool = await readyPool();
    const client = await pool.connect();
    try {
      await client.query("begin");
      await client.query("select pg_advisory_xact_lock(hashtext('pip_usage_global_monthly'))");
      await client.query("select pg_advisory_xact_lock(hashtext($1))", [usageLockKey(identity)]);
      const usedResult = await client.query(
        `select coalesce(sum(credits_used), 0)::integer as used
         from pip_usage_events
         where ${identity.userId ? "user_id = $1" : "user_id is null and ip_hash = $1"}
           and created_at >= date_trunc('day', now() at time zone 'UTC') at time zone 'UTC'
           and coalesce(metadata->>'funding', 'included') = 'included'`,
        [identity.userId || identity.ipHash]
      );
      const usedToday = Number(usedResult.rows[0]?.used || 0);
      const monthlyResult = await client.query(
        `select coalesce(sum(credits_used), 0)::integer as used
         from pip_usage_events
         where ${identity.userId ? "user_id = $1" : "user_id is null and ip_hash = $1"}
           and created_at >= date_trunc('month', now() at time zone 'UTC') at time zone 'UTC'`,
        [identity.userId || identity.ipHash]
      );
      const usedThisMonth = Number(monthlyResult.rows[0]?.used || 0);
      if (monthlyLimit > 0 && usedThisMonth + required > monthlyLimit) {
        await client.query("rollback");
        return { allowed: false, limitKind: "monthly", monthlyLimit, usedThisMonth, creditsRequired: required, resetAt: monthlyResetAt() };
      }
      if (globalMonthlyLimit > 0) {
        const globalResult = await client.query(
          `select coalesce(sum(credits_used), 0)::integer as used
           from pip_usage_events
           where created_at >= date_trunc('month', now() at time zone 'UTC') at time zone 'UTC'`
        );
        const globalUsedThisMonth = Number(globalResult.rows[0]?.used || 0);
        if (globalUsedThisMonth + required > globalMonthlyLimit) {
          await client.query("rollback");
          return { allowed: false, limitKind: "global_monthly", monthlyLimit: globalMonthlyLimit, usedThisMonth: globalUsedThisMonth, creditsRequired: required, resetAt: monthlyResetAt() };
        }
      }
      let funding = "included";
      let topUpBalance = 0;

      if (usedToday + required > dailyLimit) {
        funding = "top_up";
        if (identity.userId) {
          const balanceResult = await client.query(
            "select coalesce(sum(amount), 0)::integer as balance from pip_credit_ledger where user_id = $1",
            [identity.userId]
          );
          topUpBalance = Number(balanceResult.rows[0]?.balance || 0);
        }
        if (!identity.userId || topUpBalance < required) {
          await client.query("rollback");
          return { allowed: false, dailyLimit, usedToday, creditsRequired: required, topUpBalance, resetAt: dailyResetAt() };
        }
      }

      const eventMetadata = { ...safeMetadata, status: "pending", funding };
      await client.query(
        `insert into pip_usage_events
           (id, user_id, ip_hash, session_tier, event_type, credits_used, metadata, created_at)
         values ($1, $2, $3, $4, $5, $6, $7::jsonb, now())`,
        [reservationId, identity.userId, identity.ipHash, normalizedTier, cleanUsageText(eventType, 80) || "text_answer", required, JSON.stringify(eventMetadata)]
      );
      if (funding === "top_up") {
        await client.query(
          `insert into pip_credit_ledger (id, user_id, amount, reason, source, usage_event_id, metadata, created_at)
           values ($1, $2, $3, $4, $5, $6, $7::jsonb, now())`,
          [makeId("credit"), identity.userId, -required, "Pip AI usage", "usage_spend", reservationId, JSON.stringify({ eventType: cleanUsageText(eventType, 80) })]
        );
      }
      await client.query("commit");
      return { allowed: true, reservationId, funding, dailyLimit, monthlyLimit, usedToday, usedThisMonth, creditsRequired: required, topUpBalance: funding === "top_up" ? topUpBalance - required : topUpBalance, resetAt: dailyResetAt() };
    } catch (error) {
      await client.query("rollback");
      throw error;
    } finally {
      client.release();
    }
  }

  const state = readState();
  const start = utcDayStart();
  const monthStart = utcMonthStart();
  const events = Object.values(state.usageEvents).filter((event) => usageEventMatches(event, identity, start));
  const usedToday = events.filter((event) => event.metadata?.funding !== "top_up").reduce((sum, event) => sum + Number(event.creditsUsed || 0), 0);
  const monthlyEvents = Object.values(state.usageEvents).filter((event) => usageEventMatches(event, identity, monthStart));
  const usedThisMonth = monthlyEvents.reduce((sum, event) => sum + Number(event.creditsUsed || 0), 0);
  if (monthlyLimit > 0 && usedThisMonth + required > monthlyLimit) {
    return { allowed: false, limitKind: "monthly", monthlyLimit, usedThisMonth, creditsRequired: required, resetAt: monthlyResetAt() };
  }
  const globalUsedThisMonth = Object.values(state.usageEvents)
    .filter((event) => String(event.createdAt) >= monthStart)
    .reduce((sum, event) => sum + Number(event.creditsUsed || 0), 0);
  if (globalMonthlyLimit > 0 && globalUsedThisMonth + required > globalMonthlyLimit) {
    return { allowed: false, limitKind: "global_monthly", monthlyLimit: globalMonthlyLimit, usedThisMonth: globalUsedThisMonth, creditsRequired: required, resetAt: monthlyResetAt() };
  }
  let funding = "included";
  let topUpBalance = identity.userId ? creditBalanceFromState(state, identity.userId) : 0;
  if (usedToday + required > dailyLimit) {
    funding = "top_up";
    if (!identity.userId || topUpBalance < required) {
      return { allowed: false, dailyLimit, usedToday, creditsRequired: required, topUpBalance, resetAt: dailyResetAt() };
    }
  }
  const createdAt = nowIso();
  state.usageEvents[reservationId] = {
    id: reservationId,
    userId: identity.userId,
    ipHash: identity.ipHash,
    sessionTier: normalizedTier,
    eventType: cleanUsageText(eventType, 80) || "text_answer",
    creditsUsed: required,
    model: null,
    inputTokens: null,
    outputTokens: null,
    estimatedCostUsd: null,
    metadata: { ...safeMetadata, status: "pending", funding },
    createdAt
  };
  if (funding === "top_up") {
    const ledgerId = makeId("credit");
    state.creditLedger[ledgerId] = {
      id: ledgerId,
      userId: identity.userId,
      amount: -required,
      reason: "Pip AI usage",
      source: "usage_spend",
      usageEventId: reservationId,
      metadata: { eventType: cleanUsageText(eventType, 80) },
      createdAt
    };
    topUpBalance -= required;
  }
  writeState(state);
  return { allowed: true, reservationId, funding, dailyLimit, monthlyLimit, usedToday, usedThisMonth, creditsRequired: required, topUpBalance, resetAt: dailyResetAt() };
}

export async function completeAiUsage({ reservationId, model, inputTokens, outputTokens, estimatedCostUsd, metadata = {} } = {}) {
  const id = requireUsageId(reservationId);
  const usagePatch = {
    ...normalizeUsageMetadata(metadata),
    status: "completed"
  };
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_usage_events set
         model = $2,
         input_tokens = $3,
         output_tokens = $4,
         estimated_cost_usd = $5,
         metadata = coalesce(metadata, '{}'::jsonb) || $6::jsonb
       where id = $1
       returning *`,
      [id, cleanUsageText(model, 120), optionalNonnegativeInteger(inputTokens), optionalNonnegativeInteger(outputTokens), optionalNonnegativeNumber(estimatedCostUsd), JSON.stringify(usagePatch)]
    );
    return result.rows[0] ? rowToUsageEvent(result.rows[0]) : null;
  }
  const state = readState();
  const event = state.usageEvents[id];
  if (!event) return null;
  Object.assign(event, {
    model: cleanUsageText(model, 120),
    inputTokens: optionalNonnegativeInteger(inputTokens),
    outputTokens: optionalNonnegativeInteger(outputTokens),
    estimatedCostUsd: optionalNonnegativeNumber(estimatedCostUsd),
    metadata: { ...(event.metadata || {}), ...usagePatch }
  });
  writeState(state);
  return event;
}

export async function cancelAiUsageReservation({ reservationId, reason = "OpenAI call failed" } = {}) {
  const id = requireUsageId(reservationId);
  if (usesPostgres()) {
    const pool = await readyPool();
    const client = await pool.connect();
    try {
      await client.query("begin");
      const result = await client.query("select * from pip_usage_events where id = $1 for update", [id]);
      const event = result.rows[0];
      if (!event) {
        await client.query("rollback");
        return { canceled: false, refunded: 0 };
      }
      await client.query("delete from pip_usage_events where id = $1", [id]);
      const refunded = event.metadata?.funding === "top_up" ? Number(event.credits_used || 0) : 0;
      if (refunded > 0 && event.user_id) {
        await client.query(
          `insert into pip_credit_ledger (id, user_id, amount, reason, source, usage_event_id, metadata, created_at)
           values ($1, $2, $3, $4, 'usage_refund', $5, '{}'::jsonb, now())`,
          [makeId("credit"), event.user_id, refunded, cleanUsageText(reason, 240) || "AI usage refund", id]
        );
      }
      await client.query("commit");
      return { canceled: true, refunded };
    } catch (error) {
      await client.query("rollback");
      throw error;
    } finally {
      client.release();
    }
  }
  const state = readState();
  const event = state.usageEvents[id];
  if (!event) return { canceled: false, refunded: 0 };
  delete state.usageEvents[id];
  const refunded = event.metadata?.funding === "top_up" ? Number(event.creditsUsed || 0) : 0;
  if (refunded > 0 && event.userId) {
    const ledgerId = makeId("credit");
    state.creditLedger[ledgerId] = {
      id: ledgerId,
      userId: event.userId,
      amount: refunded,
      reason: cleanUsageText(reason, 240) || "AI usage refund",
      source: "usage_refund",
      usageEventId: id,
      metadata: {},
      createdAt: nowIso()
    };
  }
  writeState(state);
  return { canceled: true, refunded };
}

export async function grantPipCredits({ userId, amount, reason = "Manual Pip Credit grant", source = "manual", metadata = {} } = {}) {
  const ownerId = requireUserId(userId);
  const normalizedAmount = normalizeCreditAmount(amount, "amount");
  const entry = {
    id: makeId("credit"),
    userId: ownerId,
    amount: normalizedAmount,
    reason: cleanUsageText(reason, 240) || "Manual Pip Credit grant",
    source: cleanUsageText(source, 80) || "manual",
    usageEventId: null,
    metadata: normalizeUsageMetadata(metadata),
    createdAt: nowIso()
  };
  if (usesPostgres()) {
    const pool = await readyPool();
    const userResult = await pool.query("select 1 from pip_users where id = $1", [ownerId]);
    if (!userResult.rows[0]) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
    const result = await pool.query(
      `insert into pip_credit_ledger (id, user_id, amount, reason, source, usage_event_id, metadata, created_at)
       values ($1, $2, $3, $4, $5, null, $6::jsonb, $7)
       returning *`,
      [entry.id, entry.userId, entry.amount, entry.reason, entry.source, JSON.stringify(entry.metadata), entry.createdAt]
    );
    return rowToCreditEntry(result.rows[0]);
  }
  const state = readState();
  if (!state.users[ownerId]) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
  state.creditLedger[entry.id] = entry;
  writeState(state);
  return entry;
}

export async function getPipCreditBalance({ userId } = {}) {
  const ownerId = requireUserId(userId);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query("select coalesce(sum(amount), 0)::integer as balance from pip_credit_ledger where user_id = $1", [ownerId]);
    return Number(result.rows[0]?.balance || 0);
  }
  return creditBalanceFromState(readState(), ownerId);
}

export async function upsertUser(user = {}) {
  const normalized = normalizeUser(user);
  if (usesPostgres()) return upsertUserPg(normalized);

  const state = readState();
  const existing = state.users[normalized.id] || {};
  const now = nowIso();
  state.users[normalized.id] = {
    ...existing,
    ...normalized,
    email: normalized.email || existing.email || null,
    name: normalized.name || existing.name || null,
    wixMemberId: normalized.wixMemberId || existing.wixMemberId || null,
    subscriptionSnapshot: normalized.subscriptionSnapshot || existing.subscriptionSnapshot || null,
    createdAt: existing.createdAt || now,
    updatedAt: now
  };
  writeState(state);
  return state.users[normalized.id];
}

export async function getUserPreferences({ userId } = {}) {
  const ownerId = requireUserId(userId);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query("select preferences from pip_users where id = $1", [ownerId]);
    if (!result.rows[0]) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
    return normalizeUserPreferences(result.rows[0].preferences);
  }

  const user = readState().users[ownerId];
  if (!user) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
  return normalizeUserPreferences(user.preferences);
}

export async function updateUserPreferences({ userId, patch = {} } = {}) {
  const ownerId = requireUserId(userId);
  const current = await getUserPreferences({ userId: ownerId });
  const next = { ...current };
  if (Object.prototype.hasOwnProperty.call(patch || {}, "workspaceTabOrder")) {
    next.workspaceTabOrder = normalizeWorkspaceTabOrder(patch.workspaceTabOrder);
  }
  if (Object.prototype.hasOwnProperty.call(patch || {}, "accountAvatar")) {
    next.accountAvatar = normalizeAccountAvatar(patch.accountAvatar);
  }
  if (Object.prototype.hasOwnProperty.call(patch || {}, "buildEstimate")) {
    next.buildEstimate = normalizeBuildEstimate(patch.buildEstimate);
  }
  if (Object.prototype.hasOwnProperty.call(patch || {}, "experienceMode")) {
    next.experienceMode = normalizeExperienceMode(patch.experienceMode);
  }
  if (Object.prototype.hasOwnProperty.call(patch || {}, "celebratedMilestones")) {
    next.celebratedMilestones = normalizeCelebratedMilestones(patch.celebratedMilestones);
  }

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      "update pip_users set preferences = $1::jsonb, updated_at = now() where id = $2 returning preferences",
      [JSON.stringify(next), ownerId]
    );
    return normalizeUserPreferences(result.rows[0]?.preferences);
  }

  const state = readState();
  state.users[ownerId].preferences = next;
  state.users[ownerId].updatedAt = nowIso();
  writeState(state);
  return normalizeUserPreferences(next);
}

export async function getBetaExperience({ userId } = {}) {
  const ownerId = requireUserId(userId);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select beta_welcome_seen_at, beta_activity from pip_users where id = $1`,
      [ownerId]
    );
    if (!result.rows[0]) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
    return betaExperienceFromValues(result.rows[0].beta_welcome_seen_at, result.rows[0].beta_activity);
  }

  const user = readState().users[ownerId];
  if (!user) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
  return betaExperienceFromValues(user.betaWelcomeSeenAt, user.betaActivity);
}

export async function updateBetaExperience({ userId, welcomeSeen, activity } = {}) {
  const ownerId = requireUserId(userId);
  const activityPatch = normalizeBetaActivity(activity);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_users
       set beta_welcome_seen_at = case when $2::boolean then coalesce(beta_welcome_seen_at, now()) else beta_welcome_seen_at end,
           beta_activity = coalesce(beta_activity, '{}'::jsonb) || $3::jsonb,
           updated_at = now()
       where id = $1
       returning beta_welcome_seen_at, beta_activity`,
      [ownerId, Boolean(welcomeSeen), JSON.stringify(activityPatch)]
    );
    if (!result.rows[0]) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
    return betaExperienceFromValues(result.rows[0].beta_welcome_seen_at, result.rows[0].beta_activity);
  }

  const state = readState();
  const user = state.users[ownerId];
  if (!user) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
  if (welcomeSeen && !user.betaWelcomeSeenAt) user.betaWelcomeSeenAt = nowIso();
  user.betaActivity = { ...normalizeBetaActivity(user.betaActivity), ...activityPatch };
  user.updatedAt = nowIso();
  writeState(state);
  return betaExperienceFromValues(user.betaWelcomeSeenAt, user.betaActivity);
}

export async function createBetaFeedback({ userId, feedback = {}, analysis = null } = {}) {
  const ownerId = requireUserId(userId);
  const normalized = normalizeBetaFeedback(feedback);
  const safeAnalysis = normalizeFeedbackAnalysis(analysis);
  const clusterKey = cleanOptionalText(safeAnalysis?.clusterKey, 80);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `insert into pip_feedback
       (id, user_id, project_id, conversation_id, rating, category, message, page, include_context, prompt, response,
        device, impact, contact_ok, analysis, cluster_key, created_at)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15::jsonb,$16,now())
       returning *`,
      [makeId("feedback"), ownerId, normalized.projectId, normalized.conversationId, normalized.rating,
        normalized.category, normalized.message, normalized.page, normalized.includeContext,
        normalized.prompt, normalized.response, normalized.device, normalized.impact, normalized.contactOkay,
        JSON.stringify(safeAnalysis || {}), clusterKey]
    );
    await updateBetaExperience({ userId: ownerId, activity: { feedback: true } });
    return rowToBetaFeedback(result.rows[0]);
  }

  const state = readState();
  if (!state.users[ownerId]) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
  const record = { id: makeId("feedback"), userId: ownerId, ...normalized, analysis: safeAnalysis || {}, clusterKey, createdAt: nowIso() };
  state.feedback[record.id] = record;
  state.users[ownerId].betaActivity = { ...normalizeBetaActivity(state.users[ownerId].betaActivity), feedback: true };
  state.users[ownerId].updatedAt = nowIso();
  writeState(state);
  return record;
}

export async function createBetaApplication({ application = {} } = {}) {
  const normalized = normalizeBetaApplication(application);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `insert into pip_beta_applications
       (id, name, email, experience, build_timeline, system_interest, grow_zone, region, grow_area,
        devices, testing_commitment, motivation, consent, status, created_at, updated_at)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'new',now(),now())
       on conflict (lower(email)) do update set
         name = excluded.name,
         experience = excluded.experience,
         build_timeline = excluded.build_timeline,
         system_interest = excluded.system_interest,
         grow_zone = excluded.grow_zone,
         region = excluded.region,
         grow_area = excluded.grow_area,
         devices = excluded.devices,
         testing_commitment = excluded.testing_commitment,
         motivation = excluded.motivation,
         consent = excluded.consent,
         updated_at = now()
       returning *`,
      [makeId("beta"), normalized.name, normalized.email, normalized.experience, normalized.buildTimeline,
        normalized.systemInterest, normalized.growZone, normalized.region, normalized.growArea,
        JSON.stringify(normalized.devices), normalized.testingCommitment, normalized.motivation, normalized.consent]
    );
    return rowToBetaApplication(result.rows[0]);
  }

  const state = readState();
  const existing = Object.values(state.betaApplications).find((item) => item.email === normalized.email);
  const now = nowIso();
  const record = {
    id: existing?.id || makeId("beta"),
    ...normalized,
    status: existing?.status || "new",
    adminNotes: existing?.adminNotes || "",
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };
  state.betaApplications[record.id] = record;
  writeState(state);
  return record;
}

export async function listBetaApplications({ status, limit = 200 } = {}) {
  const normalizedStatus = normalizeApplicationStatus(status, true);
  const safeLimit = Math.min(500, Math.max(1, Number(limit) || 200));
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select * from pip_beta_applications
       where ($1::text is null or status = $1)
       order by created_at desc
       limit $2`,
      [normalizedStatus, safeLimit]
    );
    return result.rows.map(rowToBetaApplication);
  }
  return Object.values(readState().betaApplications)
    .filter((item) => !normalizedStatus || item.status === normalizedStatus)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, safeLimit);
}

export async function updateBetaApplicationReview({ id, status, adminNotes } = {}) {
  const applicationId = requireRecordId(id, "applicationId");
  const normalizedStatus = normalizeApplicationStatus(status);
  const notes = String(adminNotes || "").trim().slice(0, 3000);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_beta_applications set status = $2, admin_notes = $3, updated_at = now()
       where id = $1 returning *`,
      [applicationId, normalizedStatus, notes]
    );
    if (!result.rows[0]) throw Object.assign(new Error("Beta application not found"), { statusCode: 404 });
    return rowToBetaApplication(result.rows[0]);
  }
  const state = readState();
  const record = state.betaApplications[applicationId];
  if (!record) throw Object.assign(new Error("Beta application not found"), { statusCode: 404 });
  record.status = normalizedStatus;
  record.adminNotes = notes;
  record.updatedAt = nowIso();
  writeState(state);
  return record;
}

export async function betaApplicationGrantsAccess({ email } = {}) {
  const normalizedEmail = String(email || "").trim().toLowerCase().slice(0, 240);
  if (!normalizedEmail || !/^\S+@\S+\.\S+$/.test(normalizedEmail)) return false;
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select 1 from pip_beta_applications
       where lower(email) = $1 and status = 'active'
       limit 1`,
      [normalizedEmail]
    );
    return Boolean(result.rows[0]);
  }
  return Object.values(readState().betaApplications || {}).some((item) => (
    String(item.email || "").trim().toLowerCase() === normalizedEmail
    && item.status === "active"
  ));
}

export async function listBetaFeedback({ status, category, rating, limit = 300 } = {}) {
  const normalizedStatus = normalizeReviewStatus(status, true);
  const normalizedCategory = normalizeFeedbackCategory(category, true);
  const normalizedRating = normalizeFeedbackRating(rating, true);
  const safeLimit = Math.min(1000, Math.max(1, Number(limit) || 300));
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select f.*, u.name as user_name, u.email as user_email,
              (select count(*) from pip_feedback grouped where grouped.cluster_key = f.cluster_key and f.cluster_key is not null)::integer as duplicate_count
       from pip_feedback f
       left join pip_users u on u.id = f.user_id
       where ($1::text is null or f.review_status = $1)
         and ($2::text is null or f.category = $2)
         and ($3::text is null or f.rating = $3)
       order by case f.priority when 'urgent' then 0 when 'high' then 1 when 'normal' then 2 else 3 end,
                f.created_at desc
       limit $4`,
      [normalizedStatus, normalizedCategory, normalizedRating, safeLimit]
    );
    return result.rows.map(rowToBetaFeedback);
  }
  const state = readState();
  return Object.values(state.feedback)
    .filter((item) => (!normalizedStatus || (item.reviewStatus || "new") === normalizedStatus)
      && (!normalizedCategory || item.category === normalizedCategory)
      && (!normalizedRating || item.rating === normalizedRating))
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, safeLimit)
    .map((item, _index, all) => rowToBetaFeedback({
      ...item,
      userName: state.users[item.userId]?.name || null,
      userEmail: state.users[item.userId]?.email || null,
      duplicateCount: item.clusterKey ? all.filter((candidate) => candidate.clusterKey === item.clusterKey).length : 1
    }));
}

export async function updateBetaFeedbackReview({ id, status, priority, adminNotes } = {}) {
  const feedbackId = requireRecordId(id, "feedbackId");
  const normalizedStatus = normalizeReviewStatus(status);
  const normalizedPriority = normalizeFeedbackPriority(priority);
  const notes = String(adminNotes || "").trim().slice(0, 3000);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_feedback
       set review_status = $2, priority = $3, admin_notes = $4, updated_at = now()
       where id = $1
       returning *`,
      [feedbackId, normalizedStatus, normalizedPriority, notes]
    );
    if (!result.rows[0]) throw Object.assign(new Error("Feedback not found"), { statusCode: 404 });
    return rowToBetaFeedback(result.rows[0]);
  }
  const state = readState();
  const record = state.feedback[feedbackId];
  if (!record) throw Object.assign(new Error("Feedback not found"), { statusCode: 404 });
  record.reviewStatus = normalizedStatus;
  record.priority = normalizedPriority;
  record.adminNotes = notes;
  record.updatedAt = nowIso();
  writeState(state);
  return record;
}

export async function createReviewItem({ userId, projectId, question, answer = "", reason = "needs_review", context = {}, status = "new" } = {}) {
  const now = nowIso();
  const item = {
    id: makeId("review"),
    userId: cleanOptionalText(userId, 180),
    projectId: cleanOptionalText(projectId, 180),
    question: cleanOptionalText(question, 4000) || "(No question saved)",
    answer: cleanOptionalText(answer, 5000) || "",
    reason: cleanOptionalText(reason, 120) || "needs_review",
    context: context || {},
    status: cleanOptionalText(status, 40) || "new",
    priority: cleanOptionalText(context?.priority, 40) || "normal",
    resolution: null,
    createdAt: now,
    updatedAt: now
  };
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `insert into pip_review_items
       (id, user_id, project_id, question, answer, reason, context, status, priority, resolution, created_at, updated_at)
       values ($1,$2,$3,$4,$5,$6,$7::jsonb,$8,$9,null,now(),now())
       returning *`,
      [item.id, item.userId, item.projectId, item.question, item.answer, item.reason,
        JSON.stringify(item.context), item.status, item.priority]
    );
    await notifyReviewWebhook(item);
    return { status: "queued", reviewItem: rowToReviewItem(result.rows[0]) };
  }
  const state = readState();
  state.reviewItems ||= {};
  state.reviewItems[item.id] = item;
  writeState(state);
  await notifyReviewWebhook(item);
  return { status: "queued", reviewItem: item };
}

export async function listReviewItems({ status, limit = 100 } = {}) {
  const normalizedStatus = cleanOptionalText(status, 40);
  const safeLimit = Math.min(500, Math.max(1, Number(limit) || 100));
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select * from pip_review_items
       where ($1::text is null or status = $1)
       order by case priority when 'urgent' then 0 when 'high' then 1 when 'normal' then 2 else 3 end,
                created_at desc
       limit $2`,
      [normalizedStatus, safeLimit]
    );
    return result.rows.map(rowToReviewItem);
  }
  return Object.values(readState().reviewItems || {})
    .filter((item) => !normalizedStatus || item.status === normalizedStatus)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, safeLimit);
}

export async function updateReviewItem({ id, patch = {} } = {}) {
  const itemId = requireRecordId(id, "reviewItemId");
  const status = cleanOptionalText(patch.status, 40);
  const priority = cleanOptionalText(patch.priority, 40);
  const resolution = cleanOptionalText(patch.resolution, 4000);
  let savedReviewItem;
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_review_items
       set status = coalesce($2, status),
           priority = coalesce($3, priority),
           resolution = coalesce($4, resolution),
           updated_at = now()
       where id = $1
       returning *`,
      [itemId, status, priority, resolution]
    );
    if (!result.rows[0]) throw Object.assign(new Error("Review item not found"), { statusCode: 404 });
    savedReviewItem = rowToReviewItem(result.rows[0]);
    const applied = await maybeApplyApprovedTraining(savedReviewItem);
    return { status: "updated", reviewItem: savedReviewItem, appliedTraining: applied };
  }
  const state = readState();
  const record = state.reviewItems?.[itemId];
  if (!record) throw Object.assign(new Error("Review item not found"), { statusCode: 404 });
  record.status = status || record.status;
  record.priority = priority || record.priority;
  record.resolution = resolution || record.resolution;
  record.updatedAt = nowIso();
  writeState(state);
  savedReviewItem = record;
  const applied = await maybeApplyApprovedTraining(savedReviewItem);
  return { status: "updated", reviewItem: savedReviewItem, appliedTraining: applied };
}

export async function listBetaTesterProgress({ limit = 300 } = {}) {
  const safeLimit = Math.min(1000, Math.max(1, Number(limit) || 300));
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, name, email, beta_welcome_seen_at, beta_activity, updated_at
       from pip_users
       where beta_welcome_seen_at is not null or beta_activity <> '{}'::jsonb
       order by updated_at desc limit $1`,
      [safeLimit]
    );
    return result.rows.map((row) => betaTesterFromValues(row));
  }
  return Object.values(readState().users)
    .filter((user) => user.betaWelcomeSeenAt || Object.values(normalizeBetaActivity(user.betaActivity)).some(Boolean))
    .map(betaTesterFromValues)
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
    .slice(0, safeLimit);
}

export async function getBuildPhotoAllowance({ userId, subscription = {} } = {}) {
  const ownerId = requireUserId(userId);
  const used = await getBuildPhotoChecksUsed(ownerId);
  return photoAllowance(used, subscription);
}

export async function claimBuildPhotoCheck({ userId, subscription = {} } = {}) {
  const ownerId = requireUserId(userId);
  if (subscription?.active) return getBuildPhotoAllowance({ userId: ownerId, subscription });

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_users
       set build_photo_checks_used = build_photo_checks_used + 1, updated_at = now()
       where id = $1 and build_photo_checks_used < $2
       returning build_photo_checks_used`,
      [ownerId, FREE_BUILD_PHOTO_LIMIT]
    );
    if (!result.rows[0]) return { ...(await getBuildPhotoAllowance({ userId: ownerId, subscription })), allowed: false };
    return { ...photoAllowance(Number(result.rows[0].build_photo_checks_used || 0), subscription), allowed: true };
  }

  const state = readState();
  const user = state.users[ownerId];
  if (!user) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
  const used = Number(user.buildPhotoChecksUsed || 0);
  if (used >= FREE_BUILD_PHOTO_LIMIT) return { ...photoAllowance(used, subscription), allowed: false };
  user.buildPhotoChecksUsed = used + 1;
  user.updatedAt = nowIso();
  writeState(state);
  return { ...photoAllowance(user.buildPhotoChecksUsed, subscription), allowed: true };
}

export async function refundBuildPhotoCheck({ userId, subscription = {} } = {}) {
  const ownerId = requireUserId(userId);
  if (subscription?.active) return getBuildPhotoAllowance({ userId: ownerId, subscription });

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_users
       set build_photo_checks_used = greatest(build_photo_checks_used - 1, 0), updated_at = now()
       where id = $1
       returning build_photo_checks_used`,
      [ownerId]
    );
    return photoAllowance(Number(result.rows[0]?.build_photo_checks_used || 0), subscription);
  }

  const state = readState();
  const user = state.users[ownerId];
  if (user) {
    user.buildPhotoChecksUsed = Math.max(0, Number(user.buildPhotoChecksUsed || 0) - 1);
    user.updatedAt = nowIso();
    writeState(state);
  }
  return photoAllowance(Number(user?.buildPhotoChecksUsed || 0), subscription);
}

export async function deleteUserData({ userId } = {}) {
  const ownerId = requireUserId(userId);
  if (usesPostgres()) {
    const pool = await readyPool();
    const client = await pool.connect();
    try {
      await client.query("begin");
      const countsResult = await client.query(
        `select
           (select count(*) from pip_projects where user_id = $1)::integer as projects,
           (select count(*) from pip_conversations where user_id = $1)::integer as conversations,
           (select count(*) from pip_messages where user_id = $1)::integer as messages,
           (select count(*) from pip_reminders where user_id = $1)::integer as reminders,
           (select count(*) from pip_readings where user_id = $1)::integer as readings,
           (select count(*) from pip_seeds where user_id = $1)::integer as seeds,
           (select count(*) from pip_feedback where user_id = $1)::integer as feedback,
           (select count(*) from pip_usage_events where user_id = $1)::integer as usage_events,
           (select count(*) from pip_credit_ledger where user_id = $1)::integer as credit_ledger,
           (select count(*) from pip_review_items where user_id = $1)::integer as review_items`,
        [ownerId]
      );
      const summary = normalizeDeletionSummary(countsResult.rows[0]);
      await client.query("delete from pip_review_items where user_id = $1", [ownerId]);
      const conversions = await client.query(
        `update pip_conversion_events
         set user_id = null, metadata = coalesce(metadata, '{}'::jsonb) || '{"accountDeleted":true}'::jsonb
         where user_id = $1`,
        [ownerId]
      );
      const result = await client.query("delete from pip_users where id = $1", [ownerId]);
      await client.query("commit");
      return { deleted: result.rowCount > 0, summary: { ...summary, conversionEventsAnonymized: conversions.rowCount } };
    } catch (error) {
      await client.query("rollback");
      throw error;
    } finally {
      client.release();
    }
  }

  const state = readState();
  const projectIds = Object.values(state.projects)
    .filter((project) => project.userId === ownerId)
    .map((project) => project.id);
  const conversationIds = Object.values(state.chatThreads)
    .filter((conversation) => conversation.userId === ownerId)
    .map((conversation) => conversation.id);
  const summary = {
    projects: projectIds.length,
    conversations: conversationIds.length,
    messages: conversationIds.reduce((sum, id) => sum + (state.conversations[id]?.length || 0), 0),
    reminders: projectIds.reduce((sum, id) => sum + (state.reminders[id]?.length || 0), 0),
    readings: projectIds.reduce((sum, id) => sum + (state.readings[id]?.length || 0), 0),
    seeds: projectIds.reduce((sum, id) => sum + (state.seeds[id]?.length || 0), 0),
    feedback: Object.values(state.feedback).filter((item) => item.userId === ownerId).length,
    usageEvents: Object.values(state.usageEvents).filter((item) => item.userId === ownerId).length,
    creditLedger: Object.values(state.creditLedger).filter((item) => item.userId === ownerId).length,
    reviewItems: Object.values(state.reviewItems || {}).filter((item) => item.userId === ownerId).length,
    pushSubscriptions: Object.values(state.pushSubscriptions || {}).filter((item) => item.userId === ownerId).length,
    conversionEventsAnonymized: Object.values(state.conversionEvents || {}).filter((item) => item.userId === ownerId).length
  };
  projectIds.forEach((projectId) => {
    delete state.projects[projectId];
    delete state.reminders[projectId];
    delete state.readings[projectId];
    delete state.seeds[projectId];
  });
  conversationIds.forEach((conversationId) => {
    delete state.chatThreads[conversationId];
    delete state.conversations[conversationId];
  });
  Object.values(state.feedback).filter((item) => item.userId === ownerId).forEach((item) => delete state.feedback[item.id]);
  Object.values(state.usageEvents).filter((item) => item.userId === ownerId).forEach((item) => delete state.usageEvents[item.id]);
  Object.values(state.creditLedger).filter((item) => item.userId === ownerId).forEach((item) => delete state.creditLedger[item.id]);
  Object.values(state.reviewItems || {}).filter((item) => item.userId === ownerId).forEach((item) => delete state.reviewItems[item.id]);
  Object.entries(state.pushSubscriptions || {}).filter(([, item]) => item.userId === ownerId).forEach(([id]) => delete state.pushSubscriptions[id]);
  Object.values(state.conversionEvents || {}).filter((item) => item.userId === ownerId).forEach((item) => {
    item.userId = null;
    item.metadata = { ...(item.metadata || {}), accountDeleted: true };
  });
  const deleted = Boolean(state.users[ownerId]);
  delete state.users[ownerId];
  writeState(state);
  return { deleted, summary };
}

export async function listProjects({ userId } = {}) {
  const ownerId = requireUserId(userId);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, user_id, type, title, status, access, system_profile, created_at, updated_at
       from pip_projects
       where user_id = $1
       order by updated_at desc`,
      [ownerId]
    );
    return result.rows.map(rowToProject);
  }

  const state = readState();
  return Object.values(state.projects)
    .filter((project) => project.userId === ownerId)
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
}

export async function createProject({ user, type, title, systemProfile = {}, subscription = {} } = {}) {
  const savedUser = await upsertUser(user);
  const template = getTemplate(type);
  const gate = checkProjectAccess(template, subscription);
  if (!gate.allowed) return gate;

  const id = makeId("proj");
  const now = nowIso();
  const project = {
    id,
    userId: savedUser.id,
    type: template.id,
    title: title || template.title,
    status: "active",
    access: template.access,
    systemProfile: normalizeSystemProfile(systemProfile, template.id),
    createdAt: now,
    updatedAt: now
  };

  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(
      `insert into pip_projects
       (id, user_id, type, title, status, access, system_profile, created_at, updated_at)
       values ($1, $2, $3, $4, $5, $6, $7::jsonb, $8, $9)`,
      [
        project.id,
        project.userId,
        project.type,
        project.title,
        project.status,
        project.access,
        JSON.stringify(project.systemProfile),
        project.createdAt,
        project.updatedAt
      ]
    );
    return { status: "created", project };
  }

  const state = readState();
  state.projects[id] = project;
  state.reminders[id] = [];
  state.readings[id] = [];
  writeState(state);
  return { status: "created", project };
}

export async function getProject({ userId, projectId } = {}) {
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, user_id, type, title, status, access, system_profile, created_at, updated_at
       from pip_projects
       where id = $1 and user_id = $2`,
      [projectId, userId]
    );
    return result.rows[0] ? rowToProject(result.rows[0]) : null;
  }

  const state = readState();
  const project = state.projects[projectId];
  if (!project || project.userId !== userId) return null;
  return project;
}

export async function updateProject({ userId, projectId, patch = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;

  const allowed = ["title", "status", "systemProfile"];
  for (const key of allowed) {
    if (patch[key] !== undefined) {
      project[key] = key === "systemProfile" ? normalizeSystemProfile(patch[key], project.type) : patch[key];
    }
  }
  project.updatedAt = nowIso();

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_projects
       set title = $1, status = $2, system_profile = $3::jsonb, updated_at = $4
       where id = $5 and user_id = $6
       returning id, user_id, type, title, status, access, system_profile, created_at, updated_at`,
      [project.title, project.status, JSON.stringify(project.systemProfile), project.updatedAt, projectId, userId]
    );
    return result.rows[0] ? rowToProject(result.rows[0]) : null;
  }

  const state = readState();
  state.projects[projectId] = project;
  writeState(state);
  return project;
}

export async function listProjectConversations({ userId, projectId, includeArchived = false } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  await ensureDefaultConversation({ userId, projectId });
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, project_id, user_id, title, status, summary, created_at, updated_at
       from pip_conversations
       where project_id = $1 and user_id = $2 ${includeArchived ? "" : "and status = 'active'"}
       order by updated_at desc`,
      [projectId, userId]
    );
    return result.rows.map(rowToConversation);
  }
  return Object.values(readState().chatThreads)
    .filter((item) => item.projectId === projectId && item.userId === userId && (includeArchived || item.status === "active"))
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
}

export async function createProjectConversation({ userId, projectId, title, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  const existing = await listProjectConversations({ userId, projectId, includeArchived: true });
  if (!subscription?.active && existing.some((item) => item.status === "active")) {
    return subscriptionRequired("Multiple saved conversations require Pip Pro.");
  }
  const now = nowIso();
  const conversation = {
    id: makeId("chat"),
    projectId,
    userId,
    title: cleanOptionalText(title, 80) || "New conversation",
    status: "active",
    summary: "",
    createdAt: now,
    updatedAt: now
  };
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `insert into pip_conversations (id, project_id, user_id, title, status, summary, created_at, updated_at)
       values ($1, $2, $3, $4, $5, $6, $7, $7)
       returning id, project_id, user_id, title, status, summary, created_at, updated_at`,
      [conversation.id, projectId, userId, conversation.title, conversation.status, conversation.summary, now]
    );
    return { status: "created", conversation: rowToConversation(result.rows[0]) };
  }
  const state = readState();
  state.chatThreads[conversation.id] = conversation;
  state.conversations[conversation.id] = [];
  writeState(state);
  return { status: "created", conversation };
}

export async function seedProjectConversationDefaults({ userId, projectId, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) return subscriptionRequired("Starter topic conversations require Pip Pro.");

  await ensureDefaultConversation({ userId, projectId });
  const existing = await listProjectConversations({ userId, projectId, includeArchived: true });
  const existingTitles = new Set(existing.map((item) => String(item.title || "").trim().toLowerCase()));
  const existingMarkers = new Set(existing.map((item) => String(item.summary || "").trim()));
  const missing = proConversationStarters.filter((starter) => {
    return !existingTitles.has(starter.title.toLowerCase()) && !existingMarkers.has(`starter:${starter.id}`);
  });

  if (!missing.length) return { status: "ready", created: 0 };
  const now = nowIso();

  if (usesPostgres()) {
    const pool = await readyPool();
    for (const starter of missing) {
      await pool.query(
        `insert into pip_conversations (id, project_id, user_id, title, status, summary, created_at, updated_at)
         values ($1, $2, $3, $4, 'active', $5, $6, $6)`,
        [makeId("chat"), projectId, userId, starter.title, `starter:${starter.id}`, now]
      );
    }
  } else {
    const state = readState();
    for (const starter of missing) {
      const id = makeId("chat");
      state.chatThreads[id] = {
        id,
        projectId,
        userId,
        title: starter.title,
        status: "active",
        summary: `starter:${starter.id}`,
        createdAt: now,
        updatedAt: now
      };
      state.conversations[id] = [];
    }
    writeState(state);
  }

  return { status: "seeded", created: missing.length };
}

export async function updateProjectConversation({ userId, projectId, conversationId, patch = {}, subscription = {} } = {}) {
  const conversation = await getProjectConversation({ userId, projectId, conversationId });
  if (!conversation) return null;
  if (!subscription?.active) return subscriptionRequired("Managing multiple saved conversations requires Pip Pro.");
  const nextStatus = patch.status === undefined ? conversation.status : String(patch.status || "active");
  if (nextStatus === "archived" && conversation.status !== "archived") {
    const active = await listProjectConversations({ userId, projectId });
    if (active.length <= 1) return { status: "last_conversation", message: "Keep at least one active conversation in this grow." };
  }
  const saved = {
    ...conversation,
    title: patch.title === undefined ? conversation.title : cleanOptionalText(patch.title, 80) || conversation.title,
    status: nextStatus,
    updatedAt: nowIso()
  };
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `update pip_conversations set title=$1, status=$2, updated_at=$3
       where id=$4 and project_id=$5 and user_id=$6
       returning id, project_id, user_id, title, status, summary, created_at, updated_at`,
      [saved.title, saved.status, saved.updatedAt, conversationId, projectId, userId]
    );
    return result.rows[0] ? { status: "updated", conversation: rowToConversation(result.rows[0]) } : null;
  }
  const state = readState();
  state.chatThreads[conversationId] = saved;
  writeState(state);
  return { status: "updated", conversation: saved };
}

export async function listProjectMessages({ userId, projectId, conversationId, limit = 50, allConversations = false } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  const conversation = allConversations ? null : await resolveConversation({ userId, projectId, conversationId });
  if (!allConversations && !conversation) return null;
  const safeLimit = Math.max(1, Math.min(200, Number(limit || 50)));

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, role, content, mode, sources, created_at
       from pip_messages
       where project_id = $1 and user_id = $2 ${allConversations ? "" : "and conversation_id = $3"}
       order by created_at desc
       limit $${allConversations ? 3 : 4}`,
      allConversations ? [projectId, userId, safeLimit] : [projectId, userId, conversation.id, safeLimit]
    );
    return result.rows.reverse().map(rowToMessage);
  }

  const state = readState();
  if (allConversations) {
    const threadIds = Object.values(state.chatThreads).filter((item) => item.projectId === projectId).map((item) => item.id);
    return threadIds.flatMap((id) => state.conversations[id] || []).sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt))).slice(-safeLimit);
  }
  return (state.conversations[conversation.id] || []).slice(-safeLimit);
}

export async function appendProjectMessage({ userId, projectId, conversationId, role, content, mode, sources = [] } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  const conversation = await resolveConversation({ userId, projectId, conversationId });
  if (!conversation) return null;

  const message = {
    id: makeId("msg"),
    role: role === "assistant" ? "assistant" : "user",
    content: String(content || "").slice(0, 8000),
    mode: mode || null,
    sources,
    createdAt: nowIso()
  };

  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(
      `insert into pip_messages (id, project_id, user_id, conversation_id, role, content, mode, sources, created_at)
       values ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9)`,
      [message.id, projectId, userId, conversation.id, message.role, message.content, message.mode, JSON.stringify(sources || []), message.createdAt]
    );
    await pool.query("update pip_conversations set updated_at = $1 where id = $2", [message.createdAt, conversation.id]);
    await pool.query("update pip_projects set updated_at = $1 where id = $2", [message.createdAt, projectId]);
    return message;
  }

  const state = readState();
  state.conversations[conversation.id] = [...(state.conversations[conversation.id] || []), message].slice(-200);
  state.chatThreads[conversation.id].updatedAt = message.createdAt;
  state.projects[projectId].updatedAt = message.createdAt;
  writeState(state);
  return message;
}

export async function listProjectReminders({ userId, projectId } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, title, note, category, due_date, due_at, repeat_rule, notify, timezone, status,
              last_completed_at, completion_count, created_at, updated_at
       from pip_reminders
       where project_id = $1 and user_id = $2
       order by created_at asc`,
      [projectId, userId]
    );
    return result.rows.map(rowToReminder);
  }

  const state = readState();
  return state.reminders[projectId] || [];
}

export async function createProjectReminder({ userId, projectId, reminder = {}, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) {
    return {
      status: "subscription_required",
      message: "Saving reminders requires Pip Pro.",
      upgradeReason: "Pip Pro stores project reminders, grow history, and recurring schedule tasks."
    };
  }

  const saved = {
    id: makeId("rem"),
    title: String(reminder.title || "HydroPip reminder"),
    note: String(reminder.note || ""),
    category: String(reminder.category || "general"),
    dueDate: reminder.dueDate || reminder.date || null,
    dueAt: normalizeOptionalDate(reminder.dueAt),
    repeat: reminder.repeat || null,
    notify: Boolean(reminder.notify),
    timezone: cleanOptionalText(reminder.timezone, 80),
    status: "active",
    lastCompletedAt: null,
    completionCount: 0,
    createdAt: nowIso()
  };

  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(
      `insert into pip_reminders
       (id, project_id, user_id, title, note, category, due_date, due_at, repeat_rule, notify, timezone, status,
        last_completed_at, completion_count, created_at, updated_at)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10, $11, $12, null, 0, $13, $13)`,
      [
        saved.id,
        projectId,
        userId,
        saved.title,
        saved.note,
        saved.category,
        saved.dueDate,
        saved.dueAt,
        JSON.stringify(saved.repeat),
        saved.notify,
        saved.timezone,
        saved.status,
        saved.createdAt
      ]
    );
    await pool.query("update pip_projects set updated_at = $1 where id = $2", [saved.createdAt, projectId]);
    return { status: "queued", reminder: saved };
  }

  const state = readState();
  state.reminders[projectId] = [...(state.reminders[projectId] || []), saved];
  state.projects[projectId].updatedAt = saved.createdAt;
  writeState(state);
  return { status: "queued", reminder: saved };
}

export async function updateProjectReminder({ userId, projectId, reminderId, patch = {}, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) return subscriptionRequired("Editing reminders requires Pip Pro.");
  const reminders = await listProjectReminders({ userId, projectId });
  const existing = reminders.find((item) => item.id === reminderId);
  if (!existing) return { status: "not_found" };
  if (patch.status === "completed" && existing.status === "completed") {
    return { status: "already_completed", message: "This task is already complete.", reminder: existing };
  }
  if (patch.status === "completed" && !reminderIsDue(existing)) {
    return {
      status: "not_due",
      message: "This task is scheduled for a future date. Open Planner to reschedule it instead of marking future work complete.",
      reminder: existing
    };
  }
  const saved = {
    ...existing,
    title: patch.title === undefined ? existing.title : String(patch.title || "HydroPip reminder"),
    note: patch.note === undefined ? existing.note : String(patch.note || ""),
    category: patch.category === undefined ? existing.category : String(patch.category || "general"),
    dueDate: patch.dueDate === undefined ? existing.dueDate : patch.dueDate || null,
    dueAt: patch.dueAt === undefined ? existing.dueAt : normalizeOptionalDate(patch.dueAt),
    repeat: patch.repeat === undefined ? existing.repeat : patch.repeat || null,
    notify: patch.notify === undefined ? existing.notify : Boolean(patch.notify),
    timezone: patch.timezone === undefined ? existing.timezone : cleanOptionalText(patch.timezone, 80),
    status: patch.status === undefined ? existing.status : String(patch.status || "active"),
    updatedAt: nowIso()
  };
  if (patch.status === "completed") {
    saved.lastCompletedAt = saved.updatedAt;
    saved.completionCount = Number(existing.completionCount || 0) + 1;
    if (saved.repeat?.frequency) {
      saved.dueAt = nextRecurringDate(existing.dueAt || existing.dueDate, saved.repeat.frequency, saved.updatedAt);
      saved.dueDate = saved.dueAt ? saved.dueAt.slice(0, 10) : existing.dueDate;
      saved.status = "active";
    }
  }
  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(
      `update pip_reminders set title=$1, note=$2, category=$3, due_date=$4, due_at=$5,
       repeat_rule=$6::jsonb, notify=$7, timezone=$8, status=$9, last_completed_at=$10,
       completion_count=$11, updated_at=$12
       where id=$13 and project_id=$14 and user_id=$15`,
      [saved.title, saved.note, saved.category, saved.dueDate, saved.dueAt, JSON.stringify(saved.repeat), saved.notify,
        saved.timezone, saved.status, saved.lastCompletedAt, saved.completionCount, saved.updatedAt, reminderId, projectId, userId]
    );
    return { status: "updated", reminder: saved };
  }
  const state = readState();
  state.reminders[projectId] = (state.reminders[projectId] || []).map((item) => item.id === reminderId ? saved : item);
  writeState(state);
  return { status: "updated", reminder: saved };
}

export async function deleteProjectReminder({ userId, projectId, reminderId, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) return subscriptionRequired("Deleting reminders requires Pip Pro.");
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query("delete from pip_reminders where id=$1 and project_id=$2 and user_id=$3", [reminderId, projectId, userId]);
    return { status: result.rowCount ? "deleted" : "not_found" };
  }
  const state = readState();
  const before = (state.reminders[projectId] || []).length;
  state.reminders[projectId] = (state.reminders[projectId] || []).filter((item) => item.id !== reminderId);
  writeState(state);
  return { status: state.reminders[projectId].length < before ? "deleted" : "not_found" };
}

export async function applyProjectReminderAction({
  userId,
  projectId,
  operation,
  reminderIds = [],
  reminders = [],
  patch = {},
  subscription = {}
} = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) return subscriptionRequired("Managing the Pip Calendar requires Pip Pro.");

  const current = await listProjectReminders({ userId, projectId });
  const currentIds = new Set((current || []).map((item) => item.id));
  const requestedIds = [...new Set((reminderIds || []).map(String))].filter((id) => currentIds.has(id));
  const allIds = (current || []).map((item) => item.id);

  if (operation === "delete" || operation === "delete_all" || operation === "replace_all") {
    const idsToDelete = operation === "delete" ? requestedIds : allIds;
    let deletedCount = 0;
    for (const reminderId of idsToDelete) {
      const result = await deleteProjectReminder({ userId, projectId, reminderId, subscription });
      if (result?.status === "deleted") deletedCount += 1;
    }

    if (operation !== "replace_all") {
      return { status: "deleted", operation, deletedCount };
    }

    const added = [];
    for (const reminder of (reminders || []).slice(0, 40)) {
      const result = await createProjectReminder({ userId, projectId, reminder, subscription });
      if (result?.reminder) added.push(result.reminder);
    }
    return {
      status: "replaced",
      operation,
      deletedCount,
      added,
      addedCount: added.length
    };
  }

  if (operation === "update") {
    const idsToUpdate = requestedIds.slice(0, 40);
    const updated = [];
    for (const reminderId of idsToUpdate) {
      const result = await updateProjectReminder({ userId, projectId, reminderId, patch, subscription });
      if (result?.reminder) updated.push(result.reminder);
    }
    return { status: "updated", operation, updated, updatedCount: updated.length };
  }

  if (operation === "add") {
    const added = [];
    for (const reminder of (reminders || []).slice(0, 40)) {
      const result = await createProjectReminder({ userId, projectId, reminder, subscription });
      if (result?.reminder) added.push(result.reminder);
    }
    return { status: "saved", operation, added, addedCount: added.length };
  }

  return { status: "invalid_operation" };
}

export async function seedProjectDefaults({ userId, projectId, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  const current = await listProjectReminders({ userId, projectId });
  if (!subscription?.active) return subscriptionRequired("Saved maintenance schedules require Pip Pro.");
  const legacy = current.filter((item) => item.note === "hydropip_default");
  for (const item of legacy) {
    await deleteProjectReminder({ userId, projectId, reminderId: item.id, subscription });
  }
  const retained = current.filter((item) => item.note !== "hydropip_default");
  const defaults = standardReminderDefaults(project.systemProfile);
  const existingTitles = new Set(retained.map((item) => String(item.title || "").trim().toLowerCase()));
  const existingStarterMarkers = new Set(retained.map((item) => item.note).filter((note) => /^hydropip_(weekly|monthly)_v2$/.test(note || "")));
  const missing = defaults.filter((item) => !existingTitles.has(item.title.trim().toLowerCase()) && !existingStarterMarkers.has(item.note));
  if (!missing.length) return { status: "already_ready", reminders: retained, addedCount: 0, removedCount: legacy.length };
  const saved = [];
  for (const reminder of missing) {
    const result = await createProjectReminder({ userId, projectId, reminder, subscription });
    if (result?.reminder) saved.push(result.reminder);
  }
  return { status: "created", reminders: saved, addedCount: saved.length, removedCount: legacy.length };
}

export async function listProjectSeeds({ userId, projectId } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(`select id, seed, created_at, updated_at from pip_seeds where project_id=$1 and user_id=$2 order by created_at desc`, [projectId, userId]);
    return result.rows.map((row) => ({ ...(row.seed || {}), id: row.id, createdAt: toIso(row.created_at), updatedAt: toIso(row.updated_at) }));
  }
  return readState().seeds?.[projectId] || [];
}

export async function createProjectSeed({ userId, projectId, seed = {}, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) return subscriptionRequired("Seed tracking requires Pip Pro.");
  const now = nowIso();
  const saved = normalizeSeed({ ...seed, id: makeId("seed"), createdAt: now, updatedAt: now });
  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(`insert into pip_seeds (id, project_id, user_id, seed, created_at, updated_at) values ($1,$2,$3,$4::jsonb,$5,$5)`, [saved.id, projectId, userId, JSON.stringify(saved), now]);
  } else {
    const state = readState();
    state.seeds ||= {};
    state.seeds[projectId] = [saved, ...(state.seeds[projectId] || [])];
    writeState(state);
  }
  return { status: "saved", seed: saved };
}

export async function addProjectSeedPacks({ userId, projectId, items = [], subscription = {} } = {}) {
  const existingSeeds = await listProjectSeeds({ userId, projectId });
  if (!existingSeeds) return null;
  if (!subscription?.active) return subscriptionRequired("Saving seed-pack inventory requires Pip Pro.");
  const grouped = new Map();
  for (const item of Array.isArray(items) ? items.slice(0, 30) : []) {
    const crop = cleanOptionalText(item?.crop, 80);
    const variety = cleanOptionalText(item?.variety, 120);
    const source = cleanOptionalText(item?.source, 160);
    const packsOnHand = normalizePackCount(item?.packsOnHand);
    if (!crop || !packsOnHand) continue;
    const key = `${crop.toLowerCase()}|${String(variety || "").toLowerCase()}|${String(source || "").toLowerCase()}`;
    const current = grouped.get(key);
    if (current) current.packsOnHand += packsOnHand;
    else grouped.set(key, { crop, variety, source, packsOnHand });
  }
  const saved = [];
  let addedCount = 0;
  let updatedCount = 0;
  for (const item of grouped.values()) {
    const existing = existingSeeds.find((seed) => String(seed.crop || "").trim().toLowerCase() === item.crop.toLowerCase()
      && String(seed.variety || "").trim().toLowerCase() === String(item.variety || "").toLowerCase()
      && String(seed.source || "").trim().toLowerCase() === String(item.source || "").toLowerCase());
    if (existing) {
      const result = await updateProjectSeed({
        userId,
        projectId,
        seedId: existing.id,
        patch: { packsOnHand: (normalizePackCount(existing.packsOnHand) || 0) + item.packsOnHand },
        subscription
      });
      if (result?.seed) {
        saved.push(result.seed);
        updatedCount += 1;
      }
    } else {
      const result = await createProjectSeed({
        userId,
        projectId,
        seed: { ...item, status: "on_hand", method: "direct_sow" },
        subscription
      });
      if (result?.seed) {
        saved.push(result.seed);
        addedCount += 1;
      }
    }
  }
  return { status: "saved", seeds: saved, addedCount, updatedCount };
}

export async function updateProjectSeed({ userId, projectId, seedId, patch = {}, subscription = {} } = {}) {
  const seeds = await listProjectSeeds({ userId, projectId });
  if (!seeds) return null;
  if (!subscription?.active) return subscriptionRequired("Editing seed records requires Pip Pro.");
  const existing = seeds.find((item) => item.id === seedId);
  if (!existing) return { status: "not_found" };
  const saved = normalizeSeed({ ...existing, ...patch, id: seedId, createdAt: existing.createdAt, updatedAt: nowIso() });
  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(`update pip_seeds set seed=$1::jsonb, updated_at=$2 where id=$3 and project_id=$4 and user_id=$5`, [JSON.stringify(saved), saved.updatedAt, seedId, projectId, userId]);
  } else {
    const state = readState();
    state.seeds ||= {};
    state.seeds[projectId] = (state.seeds[projectId] || []).map((item) => item.id === seedId ? saved : item);
    writeState(state);
  }
  return { status: "updated", seed: saved };
}

export async function saveProjectRhythmSetup({ userId, projectId, input = {}, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) return subscriptionRequired("Pip-led Rhythm setup requires Pip Pro.");

  const plan = buildRhythmSetupPlan({ profile: project.systemProfile || {}, input });
  const updatedProject = await updateProject({
    userId,
    projectId,
    patch: { systemProfile: { ...(project.systemProfile || {}), ...plan.profilePatch } }
  });

  const existingSeeds = await listProjectSeeds({ userId, projectId });
  const existingCurrent = (existingSeeds || []).filter(isCurrentGrowSeed);
  const desiredKeys = new Set(plan.currentCrops.map(rhythmCropKey));
  const retainedSeedIds = new Set();
  const savedSeeds = [];
  let cropsAdded = 0;
  let cropsUpdated = 0;
  let cropsFinished = 0;

  for (const crop of plan.currentCrops) {
    const exact = existingCurrent.find((seed) => rhythmCropKey(seed) === rhythmCropKey(crop));
    const sameCrop = existingCurrent.filter((seed) => String(seed.crop || "").trim().toLowerCase() === String(crop.crop || "").trim().toLowerCase());
    const existing = exact || (sameCrop.length === 1 ? sameCrop[0] : null);
    if (existing) {
      const result = await updateProjectSeed({ userId, projectId, seedId: existing.id, patch: crop, subscription });
      if (result?.seed) {
        retainedSeedIds.add(existing.id);
        savedSeeds.push(result.seed);
        cropsUpdated += 1;
      }
    } else {
      const result = await createProjectSeed({ userId, projectId, seed: crop, subscription });
      if (result?.seed) {
        savedSeeds.push(result.seed);
        cropsAdded += 1;
      }
    }
  }

  if (plan.replaceCurrentCrops) {
    for (const seed of existingCurrent) {
      if (retainedSeedIds.has(seed.id)) continue;
      if (desiredKeys.has(rhythmCropKey(seed))) continue;
      const result = await updateProjectSeed({
        userId,
        projectId,
        seedId: seed.id,
        patch: { plantingLocation: "finished", status: "finished" },
        subscription
      });
      if (result?.seed) cropsFinished += 1;
    }
  }

  const existingReminders = await listProjectReminders({ userId, projectId });
  const reminderMarkers = new Map((existingReminders || []).filter((item) => item.note).map((item) => [item.note, item]));
  const savedReminders = [];
  let remindersAdded = 0;
  let remindersUpdated = 0;
  let remindersRemoved = 0;
  for (const reminder of plan.reminders) {
    const normalized = {
      ...reminder,
      dueAt: localDueAt(reminder.dueDate, reminder.dueTime, input.timezoneOffsetMinutes),
      timezone: cleanOptionalText(input.timezone, 80)
    };
    delete normalized.dueTime;
    const existing = reminderMarkers.get(reminder.note);
    if (existing) {
      const result = await updateProjectReminder({
        userId,
        projectId,
        reminderId: existing.id,
        patch: { ...normalized, status: "active" },
        subscription
      });
      if (result?.reminder) {
        savedReminders.push(result.reminder);
        remindersUpdated += 1;
      }
    } else {
      const result = await createProjectReminder({ userId, projectId, reminder: normalized, subscription });
      if (result?.reminder) {
        savedReminders.push(result.reminder);
        remindersAdded += 1;
      }
    }
  }
  const desiredReminderNotes = new Set(plan.reminders.map((item) => item.note).filter(Boolean));
  for (const reminder of existingReminders || []) {
    if (!String(reminder.note || "").startsWith("hydropip_rhythm_crop:")) continue;
    if (desiredReminderNotes.has(reminder.note)) continue;
    const result = await deleteProjectReminder({ userId, projectId, reminderId: reminder.id, subscription });
    if (result?.status === "deleted") remindersRemoved += 1;
  }

  const finalSeeds = await listProjectSeeds({ userId, projectId });
  return {
    status: "saved",
    project: updatedProject,
    seeds: savedSeeds,
    reminders: savedReminders,
    setup: rhythmSetupStatus({ profile: updatedProject?.systemProfile || {}, seeds: finalSeeds || [] }),
    missing: plan.missing,
    cropsAdded,
    cropsUpdated,
    cropsFinished,
    remindersAdded,
    remindersUpdated,
    remindersRemoved
  };
}

export async function deleteProjectSeed({ userId, projectId, seedId, subscription = {} } = {}) {
  const seeds = await listProjectSeeds({ userId, projectId });
  if (!seeds) return null;
  if (!subscription?.active) return subscriptionRequired("Deleting seed records requires Pip Pro.");
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(`delete from pip_seeds where id=$1 and project_id=$2 and user_id=$3`, [seedId, projectId, userId]);
    return { status: result.rowCount ? "deleted" : "not_found" };
  }
  const state = readState();
  state.seeds ||= {};
  state.seeds[projectId] = seeds.filter((item) => item.id !== seedId);
  writeState(state);
  return { status: state.seeds[projectId].length < seeds.length ? "deleted" : "not_found" };
}

export async function listProjectReadings({ userId, projectId } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, reading, taken_at, created_at
       from pip_readings
       where project_id = $1 and user_id = $2
       order by taken_at asc, created_at asc`,
      [projectId, userId]
    );
    return result.rows.map(rowToReading);
  }

  const state = readState();
  return state.readings[projectId] || [];
}

export async function createProjectReading({ userId, projectId, reading = {}, subscription = {} } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) {
    return {
      status: "subscription_required",
      message: "Saving readings and grow logs requires Pip Pro.",
      upgradeReason: "Pip Pro remembers pH, EC/TDS, water level, crop notes, and prior troubleshooting."
    };
  }

  const saved = {
    id: makeId("read"),
    batchStartDate: cleanOptionalText(reading.batchStartDate, 20),
    startingReservoirVolume: normalizeOptionalNumber(reading.startingReservoirVolume),
    nutrientStage: cleanOptionalText(reading.nutrientStage, 30),
    masterblendGrams: normalizeOptionalNumber(reading.masterblendGrams),
    calciumNitrateGrams: normalizeOptionalNumber(reading.calciumNitrateGrams),
    magnesiumSulfateGrams: normalizeOptionalNumber(reading.magnesiumSulfateGrams),
    cropsGrowing: cleanOptionalText(reading.cropsGrowing, 300),
    dominantCropType: cleanOptionalText(reading.dominantCropType, 30),
    plantDevelopmentStage: cleanOptionalText(reading.plantDevelopmentStage, 120),
    plantCondition: cleanOptionalText(reading.plantCondition, 80),
    leafColor: cleanOptionalText(reading.leafColor, 80),
    issuePressure: cleanOptionalText(reading.issuePressure, 120),
    currentTankLevel: cleanOptionalText(reading.currentTankLevel || reading.waterLevel, 80),
    expectedRefillWindow: cleanOptionalText(reading.expectedRefillWindow, 80),
    actualRefillDate: cleanOptionalText(reading.actualRefillDate, 20),
    plantResponse: cleanOptionalText(reading.plantResponse, 1000),
    ph: normalizeOptionalNumber(reading.ph),
    ec: reading.ec ?? reading.tds ?? null,
    waterLevel: reading.waterLevel ?? null,
    runoffLevel: reading.runoffLevel ?? null,
    temperature: normalizeOptionalNumber(reading.temperature),
    note: String(reading.note || ""),
    takenAt: reading.takenAt ? normalizeObservationDate(reading.takenAt) : nowIso(),
    createdAt: nowIso()
  };

  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(
      `insert into pip_readings (id, project_id, user_id, reading, taken_at, created_at)
       values ($1, $2, $3, $4::jsonb, $5, $6)`,
      [saved.id, projectId, userId, JSON.stringify(saved), saved.takenAt, saved.createdAt]
    );
    await pool.query("update pip_projects set updated_at = $1 where id = $2", [saved.createdAt, projectId]);
    return { status: "saved", reading: saved };
  }

  const state = readState();
  state.readings[projectId] = [...(state.readings[projectId] || []), saved];
  state.projects[projectId].updatedAt = saved.createdAt;
  writeState(state);
  return { status: "saved", reading: saved };
}

export async function buildProjectContext({ userId, projectId, conversationId } = {}) {
  if (!userId || !projectId) return null;
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  const [conversation, reminders, readings, seeds] = await Promise.all([
    resolveConversation({ userId, projectId, conversationId }),
    listProjectReminders({ userId, projectId }),
    listProjectReadings({ userId, projectId }),
    listProjectSeeds({ userId, projectId })
  ]);
  if (!conversation) return null;
  const messages = (await listProjectMessages({ userId, projectId, conversationId: conversation.id, limit: 8 })) || [];
  return {
    project,
    conversation,
    recentMessages: messages,
    activeReminders: (reminders || []).filter((item) => item.status === "active").slice(-10),
    reminderCount: (reminders || []).length,
    recentReadings: (readings || []).slice(-10),
    seedPacks: (seeds || []).map((item) => ({
      crop: item.crop,
      variety: item.variety,
      packsOnHand: item.packsOnHand,
      status: item.status,
      plantingLocation: item.plantingLocation,
      sowDate: item.sowDate
    })).slice(0, 40)
  };
}

export function resetMemoryForTests() {
  forceFileMemory = true;
  stateCache = cloneDefaultState();
}

function usesPostgres() {
  return Boolean(process.env.DATABASE_URL && !forceFileMemory);
}

async function readyPool() {
  const pool = await getPool();
  await ensureSchema(pool);
  return pool;
}

async function getPool() {
  if (!process.env.DATABASE_URL) throw Object.assign(new Error("DATABASE_URL is required"), { statusCode: 500 });
  poolPromise ||= import("pg").then(({ Pool }) => {
    const ssl =
      process.env.PIP_DATABASE_SSL === "false"
        ? false
        : {
            rejectUnauthorized: false
          };
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl
    });
  });
  return poolPromise;
}

async function ensureSchema(pool) {
  schemaPromise ||= pool.query(`
    create table if not exists pip_users (
      id text primary key,
      email text,
      name text,
      wix_member_id text,
      build_photo_checks_used integer not null default 0,
      preferences jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    alter table pip_users add column if not exists build_photo_checks_used integer not null default 0;
    alter table pip_users add column if not exists beta_welcome_seen_at timestamptz;
    alter table pip_users add column if not exists beta_activity jsonb not null default '{}'::jsonb;
    alter table pip_users add column if not exists preferences jsonb not null default '{}'::jsonb;
    alter table pip_users add column if not exists subscription_snapshot jsonb not null default '{}'::jsonb;

    create table if not exists pip_projects (
      id text primary key,
      user_id text not null references pip_users(id) on delete cascade,
      type text not null,
      title text not null,
      status text not null default 'active',
      access text not null,
      system_profile jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    create index if not exists pip_projects_user_updated_idx on pip_projects(user_id, updated_at desc);

    create table if not exists pip_conversations (
      id text primary key,
      project_id text not null references pip_projects(id) on delete cascade,
      user_id text not null references pip_users(id) on delete cascade,
      title text not null,
      status text not null default 'active',
      summary text not null default '',
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    create index if not exists pip_conversations_project_updated_idx on pip_conversations(project_id, updated_at desc);

    create table if not exists pip_messages (
      id text primary key,
      project_id text not null references pip_projects(id) on delete cascade,
      user_id text not null references pip_users(id) on delete cascade,
      role text not null,
      content text not null,
      mode text,
      sources jsonb not null default '[]'::jsonb,
      created_at timestamptz not null default now()
    );
    alter table pip_messages add column if not exists conversation_id text references pip_conversations(id) on delete set null;
    create index if not exists pip_messages_project_created_idx on pip_messages(project_id, created_at desc);
    create index if not exists pip_messages_conversation_created_idx on pip_messages(conversation_id, created_at desc);

    create table if not exists pip_reminders (
      id text primary key,
      project_id text not null references pip_projects(id) on delete cascade,
      user_id text not null references pip_users(id) on delete cascade,
      title text not null,
      note text not null default '',
      category text not null default 'general',
      due_date text,
      due_at timestamptz,
      repeat_rule jsonb,
      notify boolean not null default false,
      timezone text,
      status text not null default 'active',
      last_completed_at timestamptz,
      completion_count integer not null default 0,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    alter table pip_reminders add column if not exists due_at timestamptz;
    alter table pip_reminders add column if not exists notify boolean not null default false;
    alter table pip_reminders add column if not exists timezone text;
    alter table pip_reminders add column if not exists last_completed_at timestamptz;
    alter table pip_reminders add column if not exists completion_count integer not null default 0;
    alter table pip_reminders add column if not exists updated_at timestamptz not null default now();
    create index if not exists pip_reminders_project_created_idx on pip_reminders(project_id, created_at asc);

    create table if not exists pip_readings (
      id text primary key,
      project_id text not null references pip_projects(id) on delete cascade,
      user_id text not null references pip_users(id) on delete cascade,
      reading jsonb not null default '{}'::jsonb,
      taken_at timestamptz not null default now(),
      created_at timestamptz not null default now()
    );
    create index if not exists pip_readings_project_taken_idx on pip_readings(project_id, taken_at asc);

    create table if not exists pip_seeds (
      id text primary key,
      project_id text not null references pip_projects(id) on delete cascade,
      user_id text not null references pip_users(id) on delete cascade,
      seed jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    create index if not exists pip_seeds_project_created_idx on pip_seeds(project_id, created_at desc);

    create table if not exists pip_feedback (
      id text primary key,
      user_id text not null references pip_users(id) on delete cascade,
      project_id text references pip_projects(id) on delete set null,
      conversation_id text references pip_conversations(id) on delete set null,
      rating text not null,
      category text not null default 'general',
      message text not null default '',
      page text,
      include_context boolean not null default false,
      prompt text,
      response text,
      device jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    );
    alter table pip_feedback add column if not exists impact text not null default 'nice_to_have';
    alter table pip_feedback add column if not exists contact_ok boolean not null default false;
    alter table pip_feedback add column if not exists analysis jsonb not null default '{}'::jsonb;
    alter table pip_feedback add column if not exists cluster_key text;
    alter table pip_feedback add column if not exists review_status text not null default 'new';
    alter table pip_feedback add column if not exists priority text not null default 'normal';
    alter table pip_feedback add column if not exists admin_notes text not null default '';
    alter table pip_feedback add column if not exists updated_at timestamptz not null default now();
    create index if not exists pip_feedback_user_created_idx on pip_feedback(user_id, created_at desc);
    create index if not exists pip_feedback_rating_created_idx on pip_feedback(rating, created_at desc);
    create index if not exists pip_feedback_cluster_created_idx on pip_feedback(cluster_key, created_at desc);

    create table if not exists pip_review_items (
      id text primary key,
      user_id text,
      project_id text,
      question text not null,
      answer text not null default '',
      reason text not null default 'needs_review',
      context jsonb not null default '{}'::jsonb,
      status text not null default 'new',
      priority text not null default 'normal',
      resolution text,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    create index if not exists pip_review_items_status_created_idx on pip_review_items(status, created_at desc);

    create table if not exists pip_beta_applications (
      id text primary key,
      name text not null,
      email text not null,
      experience text not null,
      build_timeline text not null,
      system_interest text not null,
      grow_zone text,
      region text,
      grow_area text not null,
      devices jsonb not null default '[]'::jsonb,
      testing_commitment boolean not null default false,
      motivation text not null default '',
      consent boolean not null default false,
      status text not null default 'new',
      admin_notes text not null default '',
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    create unique index if not exists pip_beta_applications_email_idx on pip_beta_applications (lower(email));
    create index if not exists pip_beta_applications_status_created_idx on pip_beta_applications(status, created_at desc);

    create table if not exists pip_conversion_events (
      id text primary key,
      client_event_id text unique,
      event_name text not null,
      visitor_id text,
      user_id text,
      session_tier text not null default 'visitor',
      page text,
      referrer_host text,
      utm_source text,
      utm_medium text,
      utm_campaign text,
      utm_content text,
      utm_term text,
      metadata jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    );
    create index if not exists pip_conversion_events_name_created_idx on pip_conversion_events(event_name, created_at desc);
    create index if not exists pip_conversion_events_visitor_created_idx on pip_conversion_events(visitor_id, created_at desc);
    create index if not exists pip_conversion_events_user_created_idx on pip_conversion_events(user_id, created_at desc);

    create table if not exists pip_usage_events (
      id text primary key,
      user_id text references pip_users(id) on delete cascade,
      ip_hash text,
      session_tier text not null,
      event_type text not null,
      credits_used integer not null,
      model text,
      input_tokens integer,
      output_tokens integer,
      estimated_cost_usd numeric(12,8),
      metadata jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now(),
      check (user_id is not null or ip_hash is not null),
      check (credits_used >= 0)
    );
    create index if not exists pip_usage_events_user_created_idx on pip_usage_events(user_id, created_at desc);
    create index if not exists pip_usage_events_ip_created_idx on pip_usage_events(ip_hash, created_at desc);

    create table if not exists pip_credit_ledger (
      id text primary key,
      user_id text not null references pip_users(id) on delete cascade,
      amount integer not null,
      reason text not null,
      source text not null,
      usage_event_id text,
      metadata jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    );
    create index if not exists pip_credit_ledger_user_created_idx on pip_credit_ledger(user_id, created_at desc);

    create table if not exists pip_admin_passkeys (
      credential_id text primary key,
      public_key text not null,
      counter bigint not null default 0,
      transports jsonb not null default '[]'::jsonb,
      device_type text not null default 'unknown',
      backed_up boolean not null default false,
      created_at timestamptz not null default now(),
      last_used_at timestamptz not null default now()
    );
    create index if not exists pip_admin_passkeys_last_used_idx on pip_admin_passkeys(last_used_at desc);
  `);
  return schemaPromise;
}

async function upsertUserPg(normalized) {
  const pool = await readyPool();
  const result = await pool.query(
    `insert into pip_users (id, email, name, wix_member_id, subscription_snapshot, created_at, updated_at)
     values ($1, $2, $3, $4, $5::jsonb, now(), now())
     on conflict (id) do update set
       email = coalesce(excluded.email, pip_users.email),
       name = coalesce(excluded.name, pip_users.name),
       wix_member_id = coalesce(excluded.wix_member_id, pip_users.wix_member_id),
       subscription_snapshot = case
         when excluded.subscription_snapshot = '{}'::jsonb then pip_users.subscription_snapshot
         else excluded.subscription_snapshot
       end,
       updated_at = now()
     returning id, email, name, wix_member_id, subscription_snapshot, build_photo_checks_used, beta_welcome_seen_at, beta_activity, preferences, created_at, updated_at`,
    [normalized.id, normalized.email, normalized.name, normalized.wixMemberId, JSON.stringify(normalized.subscriptionSnapshot || {})]
  );
  return rowToUser(result.rows[0]);
}

function readState() {
  if (stateCache) return stateCache;
  try {
    stateCache = JSON.parse(fs.readFileSync(dataFile, "utf8"));
  } catch (_error) {
    stateCache = cloneDefaultState();
  }
  stateCache.users ||= {};
  stateCache.feedback ||= {};
  stateCache.betaApplications ||= {};
  stateCache.projects ||= {};
  stateCache.chatThreads ||= {};
  stateCache.conversations ||= {};
  stateCache.reminders ||= {};
  stateCache.readings ||= {};
  stateCache.seeds ||= {};
  stateCache.pushSubscriptions ||= {};
  stateCache.conversionEvents ||= {};
  stateCache.usageEvents ||= {};
  stateCache.creditLedger ||= {};
  stateCache.adminPasskeys ||= {};
  return stateCache;
}

function writeState(nextState) {
  stateCache = nextState;
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  const tempFile = `${dataFile}.${process.pid}.tmp`;
  fs.writeFileSync(tempFile, `${JSON.stringify(nextState, redactLocalSecret, 2)}\n`);
  fs.renameSync(tempFile, dataFile);
}

function redactLocalSecret(key, value) {
  return /(?:api[_-]?key|secret|password|authorization|cookie|session[_-]?token|access[_-]?token|refresh[_-]?token)/i.test(key)
    ? undefined
    : value;
}

function normalizeConversionEvent(event = {}) {
  const allowedEvents = new Set([
    "page_view",
    "signup_started",
    "member_session_connected",
    "pip_opened",
    "pip_question_asked",
    "track_build_opened",
    "field_guide_opened",
    "affiliate_link_clicked",
    "pip_pro_viewed",
    "pro_checkout_started"
  ]);
  const eventName = String(event.eventName || "").trim();
  if (!allowedEvents.has(eventName)) {
    throw Object.assign(new Error("Unsupported conversion event"), { statusCode: 400 });
  }
  const visitorId = cleanConversionValue(event.visitorId, 100, /^[a-z0-9_-]+$/i);
  const userId = cleanConversionValue(event.userId, 240);
  if (!visitorId && !userId) {
    throw Object.assign(new Error("A visitor identifier is required"), { statusCode: 400 });
  }
  const metadata = {};
  const allowedMetadata = new Set(["surface", "linkLabel", "productId", "destinationHost", "mode", "memberState"]);
  if (event.metadata && typeof event.metadata === "object" && !Array.isArray(event.metadata)) {
    for (const [key, value] of Object.entries(event.metadata)) {
      if (!allowedMetadata.has(key)) continue;
      const cleaned = cleanConversionValue(value, key === "linkLabel" ? 160 : 100);
      if (cleaned) metadata[key] = cleaned;
    }
  }
  return {
    id: makeId("conversion"),
    clientEventId: cleanConversionValue(event.clientEventId, 100, /^[a-z0-9_-]+$/i),
    eventName,
    visitorId,
    userId,
    sessionTier: ["visitor", "free_member", "pip_pro"].includes(event.sessionTier) ? event.sessionTier : "visitor",
    page: cleanConversionValue(event.page, 240),
    referrerHost: cleanConversionValue(event.referrerHost, 240),
    utmSource: cleanConversionValue(event.utmSource, 160),
    utmMedium: cleanConversionValue(event.utmMedium, 160),
    utmCampaign: cleanConversionValue(event.utmCampaign, 160),
    utmContent: cleanConversionValue(event.utmContent, 160),
    utmTerm: cleanConversionValue(event.utmTerm, 160),
    metadata,
    createdAt: nowIso()
  };
}

function cleanConversionValue(value, maxLength, pattern) {
  const cleaned = String(value == null ? "" : value).trim().slice(0, maxLength);
  if (!cleaned || (pattern && !pattern.test(cleaned))) return null;
  return cleaned;
}

function normalizeUser(user = {}) {
  const id = String(user.id || user.email || "").trim();
  if (!id) throw Object.assign(new Error("user.id or user.email is required"), { statusCode: 400 });
  return {
    id,
    email: user.email ? String(user.email).trim().toLowerCase() : null,
    name: user.name ? String(user.name).trim() : null,
    wixMemberId: user.wixMemberId ? String(user.wixMemberId).trim() : null,
    subscriptionSnapshot: normalizeSubscriptionSnapshot(user.subscription)
  };
}

function normalizeSubscriptionSnapshot(subscription) {
  if (!subscription || typeof subscription !== "object" || Array.isArray(subscription)) return null;
  return {
    active: Boolean(subscription.active),
    beta: Boolean(subscription.active && subscription.beta),
    plan: cleanOptionalText(subscription.plan, 80) || (subscription.active ? "pip_pro" : "free_member"),
    planName: cleanOptionalText(subscription.planName, 160),
    orderId: cleanOptionalText(subscription.orderId, 180),
    checkedBy: cleanOptionalText(subscription.checkedBy, 80),
    checkedAt: nowIso()
  };
}

function adminSubscriptionStatus(snapshot, observedPro = false) {
  const current = snapshot && typeof snapshot === "object" ? snapshot : {};
  if (current.active && current.beta) {
    return { active: true, beta: true, observed: true, plan: "beta_access", checkedAt: current.checkedAt || null };
  }
  if (current.active) {
    return { active: true, beta: false, observed: true, plan: "paid_pro_seen", checkedAt: current.checkedAt || null };
  }
  if (observedPro) {
    return { active: null, beta: null, observed: true, plan: "pro_seen_unclassified", checkedAt: current.checkedAt || null };
  }
  return { active: false, beta: false, observed: false, plan: "free_member", checkedAt: current.checkedAt || null };
}

function normalizeWorkspaceTabOrder(value) {
  const requested = Array.isArray(value) ? value : [];
  const seen = new Set();
  const order = [];
  for (const item of requested) {
    const key = String(item || "").trim();
    if (!DEFAULT_WORKSPACE_TAB_ORDER.includes(key) || seen.has(key)) continue;
    seen.add(key);
    order.push(key);
  }
  for (const key of DEFAULT_WORKSPACE_TAB_ORDER) {
    if (!seen.has(key)) order.push(key);
  }
  return order;
}

function normalizeUserPreferences(value) {
  const preferences = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  return {
    workspaceTabOrder: normalizeWorkspaceTabOrder(preferences.workspaceTabOrder),
    accountAvatar: normalizeAccountAvatar(preferences.accountAvatar),
    buildEstimate: normalizeBuildEstimate(preferences.buildEstimate),
    experienceMode: normalizeExperienceMode(preferences.experienceMode),
    celebratedMilestones: normalizeCelebratedMilestones(preferences.celebratedMilestones)
  };
}

function normalizeExperienceMode(value) {
  return ["guided", "standard", "detailed"].includes(String(value || "")) ? String(value) : "guided";
}

function normalizeCelebratedMilestones(value) {
  const allowed = new Set(["workspace_ready", "build_ready", "start_ready", "grow_running", "harvest_ready", "next_grow", "improve_ready"]);
  return Array.isArray(value)
    ? [...new Set(value.map((item) => String(item || "").trim()).filter((item) => allowed.has(item)))].slice(0, 20)
    : [];
}

function normalizeBuildEstimate(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const sourceOptions = value.options && typeof value.options === "object" ? value.options : {};
  const clampInteger = (input, min, max, fallback) => {
    const number = Math.round(Number(input));
    return Number.isFinite(number) ? Math.max(min, Math.min(max, number)) : fallback;
  };
  const cleanChoice = (input, allowed, fallback) => allowed.includes(String(input || "")) ? String(input) : fallback;
  const checked = {};
  for (const [rawId, state] of Object.entries(value.checked || {}).slice(0, 100)) {
    const id = String(rawId || "").trim();
    if (/^[a-z0-9-]{1,80}$/i.test(id) && state) checked[id] = true;
  }
  const purchases = {};
  for (const [rawId, rawRecord] of Object.entries(value.purchases || {}).slice(0, 100)) {
    const id = String(rawId || "").trim();
    if (!/^[a-z0-9-]{1,80}$/i.test(id) || !rawRecord || typeof rawRecord !== "object") continue;
    const paid = Number(rawRecord.paid);
    purchases[id] = {
      owned: Boolean(rawRecord.owned),
      paid: Number.isFinite(paid) && paid >= 0 && paid <= 100000 ? Number(paid.toFixed(2)) : null,
      date: /^\d{4}-\d{2}-\d{2}$/.test(String(rawRecord.date || "")) ? String(rawRecord.date) : null,
      retailer: cleanOptionalText(rawRecord.retailer, 500)
    };
  }
  const optional = Array.isArray(sourceOptions.optional)
    ? sourceOptions.optional.map((item) => String(item || "").trim()).filter((item) => /^[a-z0-9-]{1,80}$/i.test(item)).slice(0, 50)
    : [];
  const summary = value.summary && typeof value.summary === "object" ? value.summary : {};
  return {
    version: 2,
    options: {
      towers: clampInteger(sourceOptions.towers, 1, 40, 4),
      tiers: clampInteger(sourceOptions.tiers, 1, 30, 10),
      planterChoice: cleanChoice(sourceOptions.planterChoice, ["include", "some", "all"], "include"),
      ownedPlanterTiers: clampInteger(sourceOptions.ownedPlanterTiers, 0, 1200, 0),
      reservoir: cleanChoice(sourceOptions.reservoir, ["used", "new", "owned", "custom"], "used"),
      customReservoirPrice: Math.max(0, Math.min(10000, Number(sourceOptions.customReservoirPrice) || 0)),
      support: cleanChoice(sourceOptions.support, ["galvanized", "pvc", "owned"], "galvanized"),
      optional
    },
    checked,
    purchases,
    summary: {
      low: Math.max(0, Number(summary.low) || 0),
      typical: Math.max(0, Number(summary.typical) || 0),
      high: Math.max(0, Number(summary.high) || 0),
      positions: Math.max(0, Number(summary.positions) || 0),
      savings: Math.max(0, Number(summary.savings) || 0)
    },
    savedAt: /^\d{4}-\d{2}-\d{2}T/.test(String(value.savedAt || "")) ? String(value.savedAt) : nowIso()
  };
}

function normalizeAccountAvatar(value) {
  const avatar = String(value || "").trim();
  if (!avatar) return null;
  const builtIn = new Set([
    "/assets/branding/pip-head-transparent.png",
    "/assets/marketing/pro-tabs/profile.png",
    "/assets/marketing/pro-tabs/planner.png",
    "/assets/marketing/pro-tabs/seeds.png"
  ]);
  if (builtIn.has(avatar)) return avatar;
  if (avatar.length <= 250000 && /^data:image\/(?:jpeg|png|webp);base64,[a-z0-9+/=]+$/i.test(avatar)) return avatar;
  return null;
}

function requireUserId(userId) {
  const id = String(userId || "").trim();
  if (!id) throw Object.assign(new Error("userId is required"), { statusCode: 400 });
  return id;
}

function getTemplate(type) {
  const template = projectTemplates.find((item) => item.id === type);
  if (!template) throw Object.assign(new Error(`Unknown project type: ${type}`), { statusCode: 400 });
  return template;
}

function checkProjectAccess(template, subscription = {}) {
  if (template.access === "free_member" || subscription?.active) return { allowed: true };
  return {
    allowed: false,
    status: "subscription_required",
    template,
    message: `${template.title} requires Pip Pro.`,
    upgradeReason: "Pip Pro unlocks saved crop schedules, maintenance plans, grow logs, and future sensor tuning."
  };
}

function normalizeSystemProfile(profile = {}, type) {
  return {
    systemType: profile.systemType || (type === "hydropip_build" ? "hydropip_tower" : "unknown"),
    title: profile.title || null,
    growZone: cleanOptionalText(profile.growZone, 12),
    location: cleanOptionalText(profile.location, 160),
    areaType: cleanOptionalText(profile.areaType, 40),
    exposure: cleanOptionalText(profile.exposure, 40),
    siteWidthFeet: normalizeOptionalNumber(profile.siteWidthFeet),
    siteDepthFeet: normalizeOptionalNumber(profile.siteDepthFeet),
    directSunHours: normalizeOptionalNumber(profile.directSunHours),
    windExposure: cleanOptionalText(profile.windExposure, 40),
    drainage: cleanOptionalText(profile.drainage, 40),
    waterAccess: cleanOptionalText(profile.waterAccess, 40),
    powerAccess: cleanOptionalText(profile.powerAccess, 40),
    serviceAccess: cleanOptionalText(profile.serviceAccess, 80),
    systemStage: cleanOptionalText(profile.systemStage, 40),
    rhythmStage: cleanOptionalText(profile.rhythmStage, 40),
    plantingDate: cleanOptionalText(profile.plantingDate, 20),
    reservoirGallons: normalizeOptionalNumber(profile.reservoirGallons),
    plantSites: normalizeOptionalNumber(profile.plantSites),
    towerCount: normalizeOptionalNumber(profile.towerCount),
    crops: Array.isArray(profile.crops) ? profile.crops.map(String).slice(0, 20) : [],
    goals: Array.isArray(profile.goals) ? profile.goals.map(String).slice(0, 12) : [],
    medium: profile.medium || null,
    nutrientBrand: profile.nutrientBrand || null,
    nutrientStage: cleanOptionalText(profile.nutrientStage, 30),
    dominantCropType: cleanOptionalText(profile.dominantCropType, 30),
    batchStartDate: cleanOptionalText(profile.batchStartDate, 20),
    currentTankLevel: cleanOptionalText(profile.currentTankLevel, 80),
    expectedRefillWindow: cleanOptionalText(profile.expectedRefillWindow, 80),
    indoorOutdoor: profile.indoorOutdoor || null,
    pumpSchedule: profile.pumpSchedule || null,
    preferredTaskDays: Array.isArray(profile.preferredTaskDays)
      ? profile.preferredTaskDays.map(String).filter((day) => ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].includes(day)).slice(0, 3)
      : [],
    preferredTaskTime: /^([01]\d|2[0-3]):[0-5]\d$/.test(String(profile.preferredTaskTime || "")) ? String(profile.preferredTaskTime) : "09:00",
    experienceMode: normalizeExperienceMode(profile.experienceMode),
    onboardingComplete: Boolean(profile.onboardingComplete),
    onboardingCompletedAt: cleanOptionalText(profile.onboardingCompletedAt, 30),
    lastMaintenanceDate: cleanOptionalText(profile.lastMaintenanceDate, 20),
    rhythmConfiguredAt: cleanOptionalText(profile.rhythmConfiguredAt, 30),
    notes: profile.notes ? String(profile.notes).slice(0, 2000) : ""
  };
}

function cleanOptionalText(value, maxLength) {
  const cleaned = String(value || "").trim();
  return cleaned ? cleaned.slice(0, maxLength) : null;
}

function normalizeOptionalNumber(value) {
  if (value === "" || value == null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function rowToUser(row) {
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    wixMemberId: row.wix_member_id,
    subscriptionSnapshot: normalizeSubscriptionSnapshotForRead(row.subscription_snapshot),
    buildPhotoChecksUsed: Number(row.build_photo_checks_used || 0),
    betaWelcomeSeenAt: toIso(row.beta_welcome_seen_at),
    betaActivity: normalizeBetaActivity(row.beta_activity),
    preferences: normalizeUserPreferences(row.preferences),
    createdAt: toIso(row.created_at),
    updatedAt: toIso(row.updated_at)
  };
}

function normalizeSubscriptionSnapshotForRead(value) {
  if (!value || typeof value !== "object" || Array.isArray(value) || !Object.keys(value).length) return null;
  return {
    active: Boolean(value.active),
    beta: Boolean(value.active && value.beta),
    plan: cleanOptionalText(value.plan, 80),
    planName: cleanOptionalText(value.planName, 160),
    orderId: cleanOptionalText(value.orderId, 180),
    checkedBy: cleanOptionalText(value.checkedBy, 80),
    checkedAt: toIso(value.checkedAt)
  };
}

function betaExperienceFromValues(welcomeSeenAt, activity) {
  return {
    welcomeSeenAt: welcomeSeenAt ? toIso(welcomeSeenAt) : null,
    activity: normalizeBetaActivity(activity)
  };
}

function normalizeBetaActivity(activity = {}) {
  const source = activity && typeof activity === "object" && !Array.isArray(activity) ? activity : {};
  return {
    profile: Boolean(source.profile),
    conversation: Boolean(source.conversation),
    reminder: Boolean(source.reminder),
    growLog: Boolean(source.growLog),
    photo: Boolean(source.photo),
    feedback: Boolean(source.feedback)
  };
}

function normalizeBetaFeedback(feedback = {}) {
  const includeContext = Boolean(feedback.includeContext);
  const rating = ["helpful", "not_helpful", "general"].includes(feedback.rating) ? feedback.rating : "general";
  const category = ["pip_answer", "broken", "confusing", "mobile", "idea", "general"].includes(feedback.category)
    ? feedback.category
    : rating === "not_helpful" ? "pip_answer" : "general";
  return {
    projectId: cleanOptionalText(feedback.projectId, 120),
    conversationId: cleanOptionalText(feedback.conversationId, 120),
    rating,
    category,
    message: String(feedback.message || "").trim().slice(0, 3000),
    page: cleanOptionalText(feedback.page, 120),
    includeContext,
    prompt: includeContext ? cleanOptionalText(feedback.prompt, 3000) : null,
    response: includeContext ? cleanOptionalText(feedback.response, 5000) : null,
    device: normalizeFeedbackDevice(feedback.device),
    impact: ["blocked", "frustrating", "nice_to_have"].includes(feedback.impact) ? feedback.impact : "nice_to_have",
    contactOkay: Boolean(feedback.contactOkay)
  };
}

function normalizeFeedbackAnalysis(analysis) {
  if (!analysis || typeof analysis !== "object" || Array.isArray(analysis)) return null;
  const score = Math.max(1, Math.min(100, Math.round(Number(analysis.priorityScore) || 1)));
  return {
    category: cleanOptionalText(analysis.category, 40) || "other",
    summary: cleanOptionalText(analysis.summary, 180) || "Product improvement request.",
    recommendation: cleanOptionalText(analysis.recommendation, 220) || "Review with similar feedback.",
    rationale: cleanOptionalText(analysis.rationale, 320) || "More evidence will improve the decision.",
    userImpact: normalizeFeedbackScore(analysis.userImpact),
    severity: normalizeFeedbackScore(analysis.severity),
    businessImpact: normalizeFeedbackScore(analysis.businessImpact),
    confidence: normalizeFeedbackScore(analysis.confidence),
    effort: normalizeFeedbackScore(analysis.effort),
    risk: normalizeFeedbackScore(analysis.risk),
    priorityScore: score,
    bucket: cleanOptionalText(analysis.bucket, 60) || "research_first",
    clusterKey: cleanOptionalText(analysis.clusterKey, 80),
    suggestedMetric: cleanOptionalText(analysis.suggestedMetric, 180),
    analyzedBy: analysis.analyzedBy === "ai" ? "ai" : "rules",
    model: cleanOptionalText(analysis.model, 120),
    analyzedAt: cleanOptionalText(analysis.analyzedAt, 80) || nowIso()
  };
}

function normalizeFeedbackScore(value) {
  return Math.max(1, Math.min(5, Math.round(Number(value) || 1)));
}

function normalizeBetaApplication(application = {}) {
  const name = String(application.name || "").trim().slice(0, 120);
  const email = String(application.email || "").trim().toLowerCase().slice(0, 240);
  const experience = ["new", "beginner", "experienced"].includes(application.experience) ? application.experience : "";
  const buildTimeline = ["building_now", "within_30_days", "researching", "existing_system"].includes(application.buildTimeline) ? application.buildTimeline : "";
  const systemInterest = ["hydropip", "both", "existing_system"].includes(application.systemInterest) ? application.systemInterest : "";
  const growArea = ["outdoor", "greenhouse", "indoor", "mixed", "not_sure"].includes(application.growArea) ? application.growArea : "";
  const devices = Array.isArray(application.devices)
    ? [...new Set(application.devices.filter((item) => ["iphone", "android", "tablet", "desktop"].includes(item)))].slice(0, 4)
    : [];
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !experience || !buildTimeline || !systemInterest || !growArea || !devices.length) {
    throw Object.assign(new Error("Complete all required beta application fields"), { statusCode: 400 });
  }
  if (!application.testingCommitment || !application.consent) {
    throw Object.assign(new Error("Testing commitment and contact consent are required"), { statusCode: 400 });
  }
  return {
    name,
    email,
    experience,
    buildTimeline,
    systemInterest,
    growZone: cleanOptionalText(application.growZone, 20),
    region: cleanOptionalText(application.region, 120),
    growArea,
    devices,
    testingCommitment: true,
    motivation: String(application.motivation || "").trim().slice(0, 1500),
    consent: true
  };
}

function normalizeFeedbackDevice(device = {}) {
  if (!device || typeof device !== "object" || Array.isArray(device)) return {};
  return {
    width: normalizeOptionalNumber(device.width),
    height: normalizeOptionalNumber(device.height),
    userAgent: cleanOptionalText(device.userAgent, 500)
  };
}

function rowToBetaFeedback(row) {
  return {
    id: row.id,
    userId: row.user_id || row.userId,
    projectId: row.project_id || row.projectId,
    conversationId: row.conversation_id || row.conversationId,
    rating: row.rating,
    category: row.category,
    message: row.message,
    page: row.page,
    includeContext: Boolean(row.include_context ?? row.includeContext),
    prompt: row.prompt,
    response: row.response,
    device: row.device || {},
    impact: row.impact || "nice_to_have",
    contactOkay: Boolean(row.contact_ok ?? row.contactOkay),
    analysis: row.analysis || {},
    clusterKey: row.cluster_key || row.clusterKey || null,
    duplicateCount: Math.max(1, Number(row.duplicate_count || row.duplicateCount || 1)),
    reviewStatus: row.review_status || row.reviewStatus || "new",
    priority: row.priority || "normal",
    adminNotes: row.admin_notes || row.adminNotes || "",
    userName: row.user_name || row.userName || null,
    userEmail: row.user_email || row.userEmail || null,
    createdAt: toIso(row.created_at || row.createdAt),
    updatedAt: toIso(row.updated_at || row.updatedAt || row.created_at || row.createdAt)
  };
}

function rowToReviewItem(row) {
  return {
    id: row.id,
    userId: row.user_id || row.userId || null,
    projectId: row.project_id || row.projectId || null,
    question: row.question,
    answer: row.answer,
    reason: row.reason,
    context: row.context || {},
    status: row.status,
    priority: row.priority,
    resolution: row.resolution,
    createdAt: toIso(row.created_at || row.createdAt),
    updatedAt: toIso(row.updated_at || row.updatedAt)
  };
}

function rowToBetaApplication(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    experience: row.experience,
    buildTimeline: row.build_timeline || row.buildTimeline,
    systemInterest: row.system_interest || row.systemInterest,
    growZone: row.grow_zone || row.growZone,
    region: row.region,
    growArea: row.grow_area || row.growArea,
    devices: row.devices || [],
    testingCommitment: Boolean(row.testing_commitment ?? row.testingCommitment),
    motivation: row.motivation || "",
    consent: Boolean(row.consent),
    status: row.status || "new",
    adminNotes: row.admin_notes || row.adminNotes || "",
    createdAt: toIso(row.created_at || row.createdAt),
    updatedAt: toIso(row.updated_at || row.updatedAt)
  };
}

function betaTesterFromValues(row) {
  const activity = normalizeBetaActivity(row.beta_activity || row.betaActivity);
  return {
    id: row.id,
    name: row.name || null,
    email: row.email || null,
    welcomeSeenAt: toIso(row.beta_welcome_seen_at || row.betaWelcomeSeenAt),
    activity,
    completed: Object.values(activity).filter(Boolean).length,
    total: Object.keys(activity).length,
    updatedAt: toIso(row.updated_at || row.updatedAt)
  };
}

function normalizeApplicationStatus(value, allowBlank = false) {
  const cleaned = String(value || "").trim();
  if (allowBlank && !cleaned) return null;
  if (!["new", "shortlisted", "invited", "active", "declined"].includes(cleaned)) {
    throw Object.assign(new Error("Invalid beta application status"), { statusCode: 400 });
  }
  return cleaned;
}

function normalizeReviewStatus(value, allowBlank = false) {
  const cleaned = String(value || "").trim();
  if (allowBlank && !cleaned) return null;
  if (!["new", "reviewing", "planned", "resolved", "closed"].includes(cleaned)) {
    throw Object.assign(new Error("Invalid feedback status"), { statusCode: 400 });
  }
  return cleaned;
}

function normalizeFeedbackPriority(value) {
  const cleaned = String(value || "").trim();
  if (!["urgent", "high", "normal", "low"].includes(cleaned)) {
    throw Object.assign(new Error("Invalid feedback priority"), { statusCode: 400 });
  }
  return cleaned;
}

function normalizeFeedbackCategory(value, allowBlank = false) {
  const cleaned = String(value || "").trim();
  if (allowBlank && !cleaned) return null;
  if (!["pip_answer", "broken", "confusing", "mobile", "idea", "general"].includes(cleaned)) {
    throw Object.assign(new Error("Invalid feedback category"), { statusCode: 400 });
  }
  return cleaned;
}

function normalizeFeedbackRating(value, allowBlank = false) {
  const cleaned = String(value || "").trim();
  if (allowBlank && !cleaned) return null;
  if (!["helpful", "not_helpful", "general"].includes(cleaned)) {
    throw Object.assign(new Error("Invalid feedback rating"), { statusCode: 400 });
  }
  return cleaned;
}

function requireRecordId(value, name) {
  const id = String(value || "").trim();
  if (!id) throw Object.assign(new Error(`${name} is required`), { statusCode: 400 });
  return id;
}

async function getBuildPhotoChecksUsed(userId) {
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query("select build_photo_checks_used from pip_users where id = $1", [userId]);
    return Number(result.rows[0]?.build_photo_checks_used || 0);
  }
  return Number(readState().users[userId]?.buildPhotoChecksUsed || 0);
}

function photoAllowance(used, subscription = {}) {
  const normalizedUsed = Math.max(0, Number(used || 0));
  if (subscription?.active) {
    return { tier: "pip_pro", allowed: true, used: normalizedUsed, limit: null, remaining: null };
  }
  return {
    tier: "free_build",
    allowed: normalizedUsed < FREE_BUILD_PHOTO_LIMIT,
    used: normalizedUsed,
    limit: FREE_BUILD_PHOTO_LIMIT,
    remaining: Math.max(0, FREE_BUILD_PHOTO_LIMIT - normalizedUsed)
  };
}

function rowToProject(row) {
  return {
    id: row.id,
    userId: row.user_id,
    type: row.type,
    title: row.title,
    status: row.status,
    access: row.access,
    systemProfile: row.system_profile || {},
    createdAt: toIso(row.created_at),
    updatedAt: toIso(row.updated_at)
  };
}

function rowToConversation(row) {
  return {
    id: row.id,
    projectId: row.project_id,
    userId: row.user_id,
    title: row.title,
    status: row.status,
    summary: row.summary || "",
    createdAt: toIso(row.created_at),
    updatedAt: toIso(row.updated_at)
  };
}

async function ensureDefaultConversation({ userId, projectId }) {
  if (usesPostgres()) {
    const pool = await readyPool();
    const existing = await pool.query(
      `select id, project_id, user_id, title, status, summary, created_at, updated_at
       from pip_conversations
       where project_id = $1 and user_id = $2 and status = 'active'
       order by updated_at desc
       limit 1`,
      [projectId, userId]
    );
    if (existing.rows[0]) return rowToConversation(existing.rows[0]);

    const now = nowIso();
    const id = makeId("chat");
    const created = await pool.query(
      `insert into pip_conversations (id, project_id, user_id, title, status, summary, created_at, updated_at)
       values ($1, $2, $3, $4, 'active', '', $5, $5)
       returning id, project_id, user_id, title, status, summary, created_at, updated_at`,
      [id, projectId, userId, "HydroPip Build", now]
    );
    await pool.query(
      "update pip_messages set conversation_id = $1 where project_id = $2 and user_id = $3 and conversation_id is null",
      [id, projectId, userId]
    );
    return rowToConversation(created.rows[0]);
  }

  const state = readState();
  const existing = Object.values(state.chatThreads)
    .filter((item) => item.projectId === projectId && item.userId === userId && item.status === "active")
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))[0];
  if (existing) return existing;

  const now = nowIso();
  const conversation = {
    id: makeId("chat"),
    projectId,
    userId,
    title: "HydroPip Build",
    status: "active",
    summary: "",
    createdAt: now,
    updatedAt: now
  };
  state.chatThreads[conversation.id] = conversation;
  state.conversations[conversation.id] = state.conversations[projectId] || [];
  delete state.conversations[projectId];
  writeState(state);
  return conversation;
}

async function getProjectConversation({ userId, projectId, conversationId }) {
  if (!conversationId) return null;
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, project_id, user_id, title, status, summary, created_at, updated_at
       from pip_conversations where id = $1 and project_id = $2 and user_id = $3`,
      [conversationId, projectId, userId]
    );
    return result.rows[0] ? rowToConversation(result.rows[0]) : null;
  }
  const conversation = readState().chatThreads[conversationId];
  return conversation && conversation.projectId === projectId && conversation.userId === userId ? conversation : null;
}

async function resolveConversation({ userId, projectId, conversationId }) {
  const conversation = conversationId
    ? await getProjectConversation({ userId, projectId, conversationId })
    : await ensureDefaultConversation({ userId, projectId });
  return conversation?.status === "active" ? conversation : null;
}

function rowToMessage(row) {
  return {
    id: row.id,
    role: row.role,
    content: row.content,
    mode: row.mode,
    sources: row.sources || [],
    createdAt: toIso(row.created_at)
  };
}

function rowToReminder(row) {
  return {
    id: row.id,
    title: row.title,
    note: row.note,
    category: row.category,
    dueDate: row.due_date,
    dueAt: toIso(row.due_at),
    repeat: row.repeat_rule,
    notify: Boolean(row.notify),
    timezone: row.timezone || null,
    status: row.status,
    lastCompletedAt: toIso(row.last_completed_at),
    completionCount: Number(row.completion_count || 0),
    createdAt: toIso(row.created_at),
    updatedAt: toIso(row.updated_at)
  };
}

function rowToReading(row) {
  return {
    ...(row.reading || {}),
    id: row.id,
    takenAt: toIso(row.taken_at),
    createdAt: toIso(row.created_at)
  };
}

function makeId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function nowIso() {
  return new Date().toISOString();
}

function normalizeOptionalDate(value) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function nextRecurringDate(value, frequency, completedAt) {
  const completed = new Date(completedAt || Date.now());
  let date = value ? new Date(value) : new Date(completed);
  if (Number.isNaN(date.getTime())) date = new Date(completed);
  date.setSeconds(0, 0);
  const step = () => {
    if (frequency === "daily") date.setDate(date.getDate() + 1);
    else if (frequency === "weekly") date.setDate(date.getDate() + 7);
    else if (frequency === "monthly") date.setMonth(date.getMonth() + 1);
  };
  do step(); while (date <= completed);
  return date.toISOString();
}

function reminderIsDue(reminder, now = new Date()) {
  const dueDate = String(reminder?.dueDate || "").slice(0, 10);
  if (dueDate) return dueDate <= dateKeyForTimezone(now, reminder?.timezone);
  if (!reminder?.dueAt) return true;
  const due = new Date(reminder.dueAt);
  return Number.isNaN(due.getTime()) || due <= now;
}

function dateKeyForTimezone(value, timezone) {
  const date = value instanceof Date ? value : new Date(value);
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone || "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(date);
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return `${values.year}-${values.month}-${values.day}`;
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

function subscriptionRequired(message) {
  return { status: "subscription_required", message, upgradeReason: "Pip Pro saves grow plans, reminders, logs, seeds, and project history." };
}

function normalizeSeed(seed = {}) {
  const seedsSown = normalizeOptionalNumber(seed.seedsSown);
  const seedsSprouted = normalizeOptionalNumber(seed.seedsSprouted);
  const status = cleanOptionalText(seed.status, 40) || "on_hand";
  const requestedLocation = cleanOptionalText(seed.plantingLocation, 40);
  const plantingLocation = ["seed_vault", "hydropip_tower", "nursery_for_hydropip", "raised_bed", "finished"].includes(requestedLocation)
    ? requestedLocation
    : (["sown", "germinating", "sprouted", "growing"].includes(status) ? "hydropip_tower" : "seed_vault");
  return {
    id: seed.id,
    crop: cleanOptionalText(seed.crop, 80) || "Seed batch",
    variety: cleanOptionalText(seed.variety, 120),
    source: cleanOptionalText(seed.source, 160),
    packsOnHand: normalizePackCount(seed.packsOnHand),
    sowDate: cleanOptionalText(seed.sowDate, 20),
    status,
    plantingLocation,
    method: cleanOptionalText(seed.method, 40) || "direct_sow",
    seedsSown,
    seedsSprouted,
    germinationRate: seedsSown > 0 && seedsSprouted !== null ? Math.min(100, Number(((seedsSprouted / seedsSown) * 100).toFixed(1))) : null,
    succession: Boolean(seed.succession),
    successionIntervalDays: normalizeOptionalNumber(seed.successionIntervalDays),
    recommendedWindowStart: cleanOptionalText(seed.recommendedWindowStart, 20),
    recommendedWindowEnd: cleanOptionalText(seed.recommendedWindowEnd, 20),
    expectedHarvestDate: cleanOptionalText(seed.expectedHarvestDate, 20),
    expectedHarvestEnd: cleanOptionalText(seed.expectedHarvestEnd, 20),
    nextSuccessionDate: cleanOptionalText(seed.nextSuccessionDate, 20),
    timingSource: cleanOptionalText(seed.timingSource, 80),
    timingEstimateAsOf: cleanOptionalText(seed.timingEstimateAsOf, 20),
    timingEstimateBasis: cleanOptionalText(seed.timingEstimateBasis, 80),
    notes: String(seed.notes || "").slice(0, 1000),
    createdAt: seed.createdAt || nowIso(),
    updatedAt: seed.updatedAt || nowIso()
  };
}

function normalizePackCount(value) {
  const numeric = normalizeOptionalNumber(value);
  return numeric === null ? null : Math.max(0, Math.min(999, Math.round(numeric)));
}

function standardReminderDefaults(profile = {}) {
  const [preferredHour, preferredMinute] = String(profile.preferredTaskTime || "09:00").split(":").map(Number);
  const taskHour = Number.isInteger(preferredHour) ? preferredHour : 9;
  const taskMinute = Number.isInteger(preferredMinute) ? preferredMinute : 0;
  const weekdayIndex = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 };
  const preferredDay = Array.isArray(profile.preferredTaskDays) ? weekdayIndex[profile.preferredTaskDays[0]] : undefined;
  const dueAt = (days, hour = taskHour, anchor = null, minute = taskMinute, alignPreferred = false) => {
    const date = anchor ? new Date(`${anchor}T09:00:00`) : new Date();
    if (Number.isNaN(date.getTime())) return dueAt(days, hour);
    date.setDate(date.getDate() + days);
    if (alignPreferred && preferredDay !== undefined) {
      date.setDate(date.getDate() + ((preferredDay - date.getDay() + 7) % 7));
    }
    date.setHours(hour, minute, 0, 0);
    return date.toISOString();
  };
  const systemCare = [
    { title: "Weekly tank, mixing circulation, and flow check", note: "hydropip_weekly_v2", category: "maintenance", dueAt: dueAt(1, taskHour, null, taskMinute, true), repeat: { frequency: "weekly" }, notify: true },
    { title: "Review plant stage, refill window, pumps, and hoses", note: "hydropip_monthly_v2", category: "nutrients", dueAt: dueAt(22, taskHour, null, taskMinute, true), repeat: { frequency: "monthly" }, notify: true }
  ];
  if (!profile.plantingDate) return systemCare;
  const crops = cropSummary(profile.crops);
  const cropTasks = [
    { title: `Plant or transplant ${crops}`, note: "hydropip_grow_default", category: "grow", dueAt: dueAt(0, 9, profile.plantingDate), repeat: null, notify: true },
    { title: "Check establishment and replace weak starts", note: "hydropip_grow_default", category: "grow", dueAt: dueAt(7, 9, profile.plantingDate), repeat: null, notify: true },
    { title: "Review pruning, support, or first harvest timing with Pip", note: "hydropip_grow_default", category: "grow", dueAt: dueAt(21, 9, profile.plantingDate), repeat: null, notify: true },
    { title: "Plan harvest, transplant, or tower reset", note: "hydropip_grow_default", category: "harvest", dueAt: dueAt(35, 9, profile.plantingDate), repeat: null, notify: true }
  ];
  return [...systemCare, ...cropTasks];
}

function cropSummary(crops) {
  const labels = {
    leafy_greens: "leafy greens",
    herbs: "herbs",
    strawberries: "strawberries",
    tomatoes: "tomatoes",
    peppers: "peppers",
    other: "this crop"
  };
  const selected = Array.isArray(crops) ? crops.map((crop) => labels[crop]).filter(Boolean) : [];
  if (!selected.length) return "this grow";
  if (selected.length === 1) return selected[0];
  return `${selected.slice(0, -1).join(", ")} and ${selected.at(-1)}`;
}

function toIso(value) {
  if (!value) return null;
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function normalizeObservationDate(value) {
  const text = String(value || "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return new Date(`${text}T12:00:00`).toISOString();
  return toIso(value);
}

function normalizeUsageIdentity({ userId, ipHash } = {}) {
  const normalizedUserId = String(userId || "").trim() || null;
  const normalizedIpHash = String(ipHash || "").trim().slice(0, 128) || null;
  if (!normalizedUserId && !normalizedIpHash) {
    throw Object.assign(new Error("Usage tracking requires a userId or ipHash"), { statusCode: 400 });
  }
  return { userId: normalizedUserId, ipHash: normalizedIpHash };
}

function normalizeUsageTier(tier) {
  return ["visitor", "free_member", "pip_pro"].includes(tier) ? tier : "visitor";
}

function normalizeCreditAmount(value, name) {
  const amount = Number(value);
  if (!Number.isInteger(amount) || amount <= 0) {
    throw Object.assign(new Error(`${name} must be a positive integer`), { statusCode: 400 });
  }
  return amount;
}

function normalizeUsageMetadata(metadata) {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return {};
  const safe = { ...metadata };
  delete safe.prompt;
  delete safe.message;
  delete safe.response;
  delete safe.image;
  for (const key of Object.keys(safe)) {
    if (/(?:api[_-]?key|secret|password|authorization|cookie|token)/i.test(key)) delete safe[key];
  }
  return JSON.parse(JSON.stringify(safe));
}

function cleanUsageText(value, maxLength) {
  const cleaned = String(value || "").trim();
  return cleaned ? cleaned.slice(0, maxLength) : null;
}

function optionalNonnegativeInteger(value) {
  if (value == null) return null;
  const number = Number(value);
  return Number.isInteger(number) && number >= 0 ? number : null;
}

function optionalNonnegativeNumber(value) {
  if (value == null) return null;
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : null;
}

function requireUsageId(value) {
  const id = String(value || "").trim();
  if (!id) throw Object.assign(new Error("reservationId is required"), { statusCode: 400 });
  return id;
}

function usageLockKey(identity) {
  return identity.userId ? `user:${identity.userId}` : `ip:${identity.ipHash}`;
}

function utcDayStart() {
  const start = new Date();
  start.setUTCHours(0, 0, 0, 0);
  return start.toISOString();
}

function utcMonthStart() {
  const start = new Date();
  start.setUTCDate(1);
  start.setUTCHours(0, 0, 0, 0);
  return start.toISOString();
}

function usageEventMatches(event, identity, start) {
  const identityMatches = identity.userId
    ? event.userId === identity.userId
    : !event.userId && event.ipHash === identity.ipHash;
  return identityMatches && String(event.createdAt) >= start;
}

function creditBalanceFromState(state, userId) {
  return Object.values(state.creditLedger)
    .filter((entry) => entry.userId === userId)
    .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
}

function normalizeDeletionSummary(row = {}) {
  return {
    projects: Number(row.projects || 0),
    conversations: Number(row.conversations || 0),
    messages: Number(row.messages || 0),
    reminders: Number(row.reminders || 0),
    readings: Number(row.readings || 0),
    seeds: Number(row.seeds || 0),
    feedback: Number(row.feedback || 0),
    usageEvents: Number(row.usage_events || 0),
    creditLedger: Number(row.credit_ledger || 0),
    reviewItems: Number(row.review_items || 0)
  };
}

function rowToConversionEvent(row) {
  return {
    id: row.id,
    clientEventId: row.client_event_id || row.clientEventId || null,
    eventName: row.event_name || row.eventName,
    visitorId: row.visitor_id || row.visitorId || null,
    userId: row.user_id || row.userId || null,
    sessionTier: row.session_tier || row.sessionTier || "visitor",
    page: row.page || null,
    referrerHost: row.referrer_host || row.referrerHost || null,
    utmSource: row.utm_source || row.utmSource || null,
    utmMedium: row.utm_medium || row.utmMedium || null,
    utmCampaign: row.utm_campaign || row.utmCampaign || null,
    utmContent: row.utm_content || row.utmContent || null,
    utmTerm: row.utm_term || row.utmTerm || null,
    metadata: row.metadata || {},
    createdAt: toIso(row.created_at || row.createdAt)
  };
}

function rowToUsageEvent(row) {
  return {
    id: row.id,
    userId: row.user_id,
    ipHash: row.ip_hash,
    sessionTier: row.session_tier,
    eventType: row.event_type,
    creditsUsed: Number(row.credits_used || 0),
    model: row.model,
    inputTokens: row.input_tokens == null ? null : Number(row.input_tokens),
    outputTokens: row.output_tokens == null ? null : Number(row.output_tokens),
    estimatedCostUsd: row.estimated_cost_usd == null ? null : Number(row.estimated_cost_usd),
    metadata: row.metadata || {},
    createdAt: toIso(row.created_at)
  };
}

function rowToCreditEntry(row) {
  return {
    id: row.id,
    userId: row.user_id,
    amount: Number(row.amount || 0),
    reason: row.reason,
    source: row.source,
    usageEventId: row.usage_event_id,
    metadata: row.metadata || {},
    createdAt: toIso(row.created_at)
  };
}

function normalizeAdminPasskey(passkey = {}) {
  const credentialId = String(passkey.credentialId || "").trim();
  const publicKey = String(passkey.publicKey || "").trim();
  if (!credentialId || !/^[A-Za-z0-9_-]{16,1024}$/.test(credentialId)) throw new Error("Valid passkey credential ID is required");
  if (!publicKey || !/^[A-Za-z0-9_-]{16,8192}$/.test(publicKey)) throw new Error("Valid passkey public key is required");
  const createdAt = passkey.createdAt || new Date().toISOString();
  return {
    credentialId,
    publicKey,
    counter: Math.max(0, Number(passkey.counter) || 0),
    transports: Array.isArray(passkey.transports) ? passkey.transports.map(String).slice(0, 12) : [],
    deviceType: cleanOptionalText(passkey.deviceType, 60) || "unknown",
    backedUp: Boolean(passkey.backedUp),
    createdAt,
    lastUsedAt: passkey.lastUsedAt || createdAt
  };
}

function rowToAdminPasskey(row) {
  return {
    credentialId: row.credential_id,
    publicKey: row.public_key,
    counter: Number(row.counter || 0),
    transports: Array.isArray(row.transports) ? row.transports : [],
    deviceType: row.device_type || "unknown",
    backedUp: Boolean(row.backed_up),
    createdAt: toIso(row.created_at),
    lastUsedAt: toIso(row.last_used_at)
  };
}

async function notifyReviewWebhook(item) {
  const url = process.env.PIP_REVIEW_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "pip_review_item", reviewItem: item })
    });
  } catch (error) {
    console.warn(`Pip review webhook failed: ${error.message}`);
  }
}

async function maybeApplyApprovedTraining(item) {
  if (!["reviewed", "resolved", "approved"].includes(String(item.status || ""))) {
    return { status: "not_applied", reason: "status_not_approved" };
  }
  const training = parseTrainingResolution(item.resolution);
  if (!training) return { status: "not_applied", reason: "no_structured_training_note" };
  const safeTypes = new Set(["knowledge_base", "affiliate_fix", "product_link"]);
  if (!safeTypes.has(training.trainingUpdate)) {
    return { status: "manual_required", reason: "tool_or_code_change_required", trainingUpdate: training.trainingUpdate };
  }
  if (!training.idealAnswer || training.idealAnswer.length < 20) {
    return { status: "not_applied", reason: "ideal_answer_required" };
  }
  const approvedTrainingFile = getApprovedTrainingFile();
  const existing = fs.existsSync(approvedTrainingFile) ? fs.readFileSync(approvedTrainingFile, "utf8") : "";
  const marker = `review:${item.id}`;
  if (existing.includes(marker)) return { status: "already_applied", file: approvedTrainingFile };
  const entry = [
    "",
    `## Approved Training - ${item.id}`,
    `<!-- ${marker} -->`,
    `- Applied: ${nowIso()}`,
    `- Issue type: ${training.issueType || item.reason || "needs_review"}`,
    `- Training update: ${training.trainingUpdate}`,
    `- Original question: ${sanitizeTrainingText(item.question)}`,
    "",
    "### Approved Answer",
    sanitizeTrainingText(training.idealAnswer),
    "",
    training.internalNote ? `### Internal Note\n${sanitizeTrainingText(training.internalNote)}\n` : ""
  ].join("\n");
  fs.mkdirSync(path.dirname(approvedTrainingFile), { recursive: true });
  fs.appendFileSync(approvedTrainingFile, `${entry}\n`);
  resetKnowledgeIndex();
  return { status: "applied", file: approvedTrainingFile };
}

function parseTrainingResolution(value) {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object") return null;
    return {
      issueType: cleanOptionalText(parsed.issueType, 80),
      idealAnswer: cleanOptionalText(parsed.idealAnswer, 3000),
      trainingUpdate: cleanOptionalText(parsed.trainingUpdate, 80),
      internalNote: cleanOptionalText(parsed.internalNote, 1200)
    };
  } catch (_error) {
    return null;
  }
}

function sanitizeTrainingText(value) {
  return String(value || "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\r/g, "")
    .trim()
    .slice(0, 3000);
}

function getApprovedTrainingFile() {
  return process.env.PIP_APPROVED_TRAINING_FILE ||
    path.join(rootDir, "HydroPip_AIknowledge_base", "approved_training.md");
}

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}
