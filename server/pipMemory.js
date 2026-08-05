import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dailyLimitForTier, dailyResetAt } from "./pipUsage.js";
import { resetKnowledgeIndex } from "./ragStore.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultDataFile = path.join(__dirname, ".data", "pip-memory.json");
const dataFile = process.env.PIP_MEMORY_FILE || defaultDataFile;
const rootDir = path.resolve(__dirname, "..");
export const FREE_BUILD_PHOTO_LIMIT = 5;

export const DEFAULT_WORKSPACE_TAB_ORDER = [
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
  usageEvents: {},
  creditLedger: {}
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

export async function getDailyAiUsageSummary({ userId, ipHash, tier } = {}) {
  const identity = normalizeUsageIdentity({ userId, ipHash });
  const normalizedTier = normalizeUsageTier(tier);
  const dailyLimit = dailyLimitForTier(normalizedTier);
  const resetAt = dailyResetAt();

  if (usesPostgres()) {
    const pool = await readyPool();
    const usedResult = await pool.query(
      `select coalesce(sum(credits_used), 0)::integer as used,
              count(*)::integer as event_count
       from pip_usage_events
       where ${identity.userId ? "user_id = $1" : "user_id is null and ip_hash = $1"}
         and created_at >= date_trunc('day', now() at time zone 'UTC') at time zone 'UTC'
         and coalesce(metadata->>'funding', 'included') = 'included'`,
      [identity.userId || identity.ipHash]
    );
    return {
      tier: normalizedTier,
      dailyLimit,
      usedToday: Number(usedResult.rows[0]?.used || 0),
      eventCountToday: Number(usedResult.rows[0]?.event_count || 0),
      topUpBalance: identity.userId ? await getPipCreditBalance({ userId: identity.userId }) : 0,
      resetAt
    };
  }

  const state = readState();
  const start = utcDayStart();
  const events = Object.values(state.usageEvents).filter((event) => usageEventMatches(event, identity, start));
  return {
    tier: normalizedTier,
    dailyLimit,
    usedToday: events.filter((event) => event.metadata?.funding !== "top_up").reduce((sum, event) => sum + Number(event.creditsUsed || 0), 0),
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
  const reservationId = makeId("usage");
  const safeMetadata = normalizeUsageMetadata(metadata);

  if (usesPostgres()) {
    const pool = await readyPool();
    const client = await pool.connect();
    try {
      await client.query("begin");
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
      return { allowed: true, reservationId, funding, dailyLimit, usedToday, creditsRequired: required, topUpBalance: funding === "top_up" ? topUpBalance - required : topUpBalance, resetAt: dailyResetAt() };
    } catch (error) {
      await client.query("rollback");
      throw error;
    } finally {
      client.release();
    }
  }

  const state = readState();
  const start = utcDayStart();
  const events = Object.values(state.usageEvents).filter((event) => usageEventMatches(event, identity, start));
  const usedToday = events.filter((event) => event.metadata?.funding !== "top_up").reduce((sum, event) => sum + Number(event.creditsUsed || 0), 0);
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
  return { allowed: true, reservationId, funding, dailyLimit, usedToday, creditsRequired: required, topUpBalance, resetAt: dailyResetAt() };
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

export async function createBetaFeedback({ userId, feedback = {} } = {}) {
  const ownerId = requireUserId(userId);
  const normalized = normalizeBetaFeedback(feedback);
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `insert into pip_feedback
       (id, user_id, project_id, conversation_id, rating, category, message, page, include_context, prompt, response, device, created_at)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,now())
       returning *`,
      [makeId("feedback"), ownerId, normalized.projectId, normalized.conversationId, normalized.rating,
        normalized.category, normalized.message, normalized.page, normalized.includeContext,
        normalized.prompt, normalized.response, normalized.device]
    );
    await updateBetaExperience({ userId: ownerId, activity: { feedback: true } });
    return rowToBetaFeedback(result.rows[0]);
  }

  const state = readState();
  if (!state.users[ownerId]) throw Object.assign(new Error("Pip member record not found"), { statusCode: 404 });
  const record = { id: makeId("feedback"), userId: ownerId, ...normalized, createdAt: nowIso() };
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

export async function listBetaFeedback({ status, category, rating, limit = 300 } = {}) {
  const normalizedStatus = normalizeReviewStatus(status, true);
  const normalizedCategory = normalizeFeedbackCategory(category, true);
  const normalizedRating = normalizeFeedbackRating(rating, true);
  const safeLimit = Math.min(1000, Math.max(1, Number(limit) || 300));
  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select f.*, u.name as user_name, u.email as user_email
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
    .map((item) => rowToBetaFeedback({
      ...item,
      userName: state.users[item.userId]?.name || null,
      userEmail: state.users[item.userId]?.email || null
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
    const result = await pool.query("delete from pip_users where id = $1", [ownerId]);
    return { deleted: result.rowCount > 0 };
  }

  const state = readState();
  const projectIds = Object.values(state.projects)
    .filter((project) => project.userId === ownerId)
    .map((project) => project.id);
  const conversationIds = Object.values(state.chatThreads)
    .filter((conversation) => conversation.userId === ownerId)
    .map((conversation) => conversation.id);
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
  const deleted = Boolean(state.users[ownerId]);
  delete state.users[ownerId];
  writeState(state);
  return { deleted };
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
    ph: normalizeOptionalNumber(reading.ph),
    ec: reading.ec ?? reading.tds ?? null,
    waterLevel: reading.waterLevel ?? null,
    runoffLevel: reading.runoffLevel ?? null,
    temperature: normalizeOptionalNumber(reading.temperature),
    note: String(reading.note || ""),
    takenAt: reading.takenAt || nowIso(),
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
  const [conversation, reminders, readings] = await Promise.all([
    resolveConversation({ userId, projectId, conversationId }),
    listProjectReminders({ userId, projectId }),
    listProjectReadings({ userId, projectId })
  ]);
  if (!conversation) return null;
  const messages = (await listProjectMessages({ userId, projectId, conversationId: conversation.id, limit: 8 })) || [];
  return {
    project,
    conversation,
    recentMessages: messages,
    activeReminders: (reminders || []).filter((item) => item.status === "active").slice(-10),
    recentReadings: (readings || []).slice(-10)
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
    alter table pip_feedback add column if not exists review_status text not null default 'new';
    alter table pip_feedback add column if not exists priority text not null default 'normal';
    alter table pip_feedback add column if not exists admin_notes text not null default '';
    alter table pip_feedback add column if not exists updated_at timestamptz not null default now();
    create index if not exists pip_feedback_user_created_idx on pip_feedback(user_id, created_at desc);
    create index if not exists pip_feedback_rating_created_idx on pip_feedback(rating, created_at desc);

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
  `);
  return schemaPromise;
}

async function upsertUserPg(normalized) {
  const pool = await readyPool();
  const result = await pool.query(
    `insert into pip_users (id, email, name, wix_member_id, created_at, updated_at)
     values ($1, $2, $3, $4, now(), now())
     on conflict (id) do update set
       email = excluded.email,
       name = excluded.name,
       wix_member_id = excluded.wix_member_id,
       updated_at = now()
     returning id, email, name, wix_member_id, build_photo_checks_used, beta_welcome_seen_at, beta_activity, preferences, created_at, updated_at`,
    [normalized.id, normalized.email, normalized.name, normalized.wixMemberId]
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
  stateCache.usageEvents ||= {};
  stateCache.creditLedger ||= {};
  return stateCache;
}

function writeState(nextState) {
  stateCache = nextState;
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  const tempFile = `${dataFile}.${process.pid}.tmp`;
  fs.writeFileSync(tempFile, `${JSON.stringify(nextState, null, 2)}\n`);
  fs.renameSync(tempFile, dataFile);
}

function normalizeUser(user = {}) {
  const id = String(user.id || user.email || "").trim();
  if (!id) throw Object.assign(new Error("user.id or user.email is required"), { statusCode: 400 });
  return {
    id,
    email: user.email ? String(user.email).trim().toLowerCase() : null,
    name: user.name ? String(user.name).trim() : null,
    wixMemberId: user.wixMemberId ? String(user.wixMemberId).trim() : null
  };
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
  return { workspaceTabOrder: normalizeWorkspaceTabOrder(preferences.workspaceTabOrder) };
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
    systemStage: cleanOptionalText(profile.systemStage, 40),
    plantingDate: cleanOptionalText(profile.plantingDate, 20),
    reservoirGallons: normalizeOptionalNumber(profile.reservoirGallons),
    plantSites: normalizeOptionalNumber(profile.plantSites),
    towerCount: normalizeOptionalNumber(profile.towerCount),
    crops: Array.isArray(profile.crops) ? profile.crops.map(String).slice(0, 20) : [],
    goals: Array.isArray(profile.goals) ? profile.goals.map(String).slice(0, 12) : [],
    medium: profile.medium || null,
    nutrientBrand: profile.nutrientBrand || null,
    indoorOutdoor: profile.indoorOutdoor || null,
    pumpSchedule: profile.pumpSchedule || null,
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
    buildPhotoChecksUsed: Number(row.build_photo_checks_used || 0),
    betaWelcomeSeenAt: toIso(row.beta_welcome_seen_at),
    betaActivity: normalizeBetaActivity(row.beta_activity),
    preferences: normalizeUserPreferences(row.preferences),
    createdAt: toIso(row.created_at),
    updatedAt: toIso(row.updated_at)
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
    device: normalizeFeedbackDevice(feedback.device)
  };
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

function subscriptionRequired(message) {
  return { status: "subscription_required", message, upgradeReason: "Pip Pro saves grow plans, reminders, logs, seeds, and project history." };
}

function normalizeSeed(seed = {}) {
  return {
    id: seed.id,
    crop: cleanOptionalText(seed.crop, 80) || "Seed batch",
    variety: cleanOptionalText(seed.variety, 120),
    source: cleanOptionalText(seed.source, 160),
    quantity: normalizeOptionalNumber(seed.quantity),
    sowDate: cleanOptionalText(seed.sowDate, 20),
    status: cleanOptionalText(seed.status, 40) || "on_hand",
    notes: String(seed.notes || "").slice(0, 1000),
    createdAt: seed.createdAt || nowIso(),
    updatedAt: seed.updatedAt || nowIso()
  };
}

function standardReminderDefaults(profile = {}) {
  const dueAt = (days, hour = 9, anchor = null, minute = 0) => {
    const date = anchor ? new Date(`${anchor}T09:00:00`) : new Date();
    if (Number.isNaN(date.getTime())) return dueAt(days, hour);
    date.setDate(date.getDate() + days);
    date.setHours(hour, minute, 0, 0);
    return date.toISOString();
  };
  const systemCare = [
    { title: "Weekly HydroPip check-in", note: "hydropip_weekly_v2", category: "maintenance", dueAt: dueAt(2), repeat: { frequency: "weekly" }, notify: true },
    { title: "Monthly HydroPip service", note: "hydropip_monthly_v2", category: "maintenance", dueAt: dueAt(2, 9, null, 30), repeat: { frequency: "monthly" }, notify: true }
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
