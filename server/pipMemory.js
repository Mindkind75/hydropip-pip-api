import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultDataFile = path.join(__dirname, ".data", "pip-memory.json");
const dataFile = process.env.PIP_MEMORY_FILE || defaultDataFile;

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
  version: 1,
  users: {},
  projects: {},
  chatThreads: {},
  conversations: {},
  reminders: {},
  readings: {},
  seeds: {},
  pushSubscriptions: {}
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
      `select id, title, note, category, due_date, due_at, repeat_rule, notify, timezone, status, created_at, updated_at
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
    createdAt: nowIso()
  };

  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(
      `insert into pip_reminders
       (id, project_id, user_id, title, note, category, due_date, due_at, repeat_rule, notify, timezone, status, created_at, updated_at)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10, $11, $12, $13, $13)`,
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
  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(
      `update pip_reminders set title=$1, note=$2, category=$3, due_date=$4, due_at=$5,
       repeat_rule=$6::jsonb, notify=$7, timezone=$8, status=$9, updated_at=$10
       where id=$11 and project_id=$12 and user_id=$13`,
      [saved.title, saved.note, saved.category, saved.dueDate, saved.dueAt, JSON.stringify(saved.repeat), saved.notify, saved.timezone, saved.status, saved.updatedAt, reminderId, projectId, userId]
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
  const current = await listProjectReminders({ userId, projectId });
  if (!current) return null;
  if (!subscription?.active) return subscriptionRequired("Saved maintenance schedules require Pip Pro.");
  const defaults = standardReminderDefaults();
  const activeDefaults = current.filter((item) => item.note === "hydropip_default" && item.status === "active");
  const activeTitles = new Set(activeDefaults.map((item) => String(item.title || "").trim().toLowerCase()));
  const missingCount = Math.max(0, defaults.length - activeDefaults.length);
  const missing = defaults
    .filter((item) => !activeTitles.has(item.title.trim().toLowerCase()))
    .slice(0, missingCount);
  if (!missing.length) return { status: "already_ready", reminders: current, addedCount: 0 };
  const saved = [];
  for (const reminder of missing) {
    const result = await createProjectReminder({ userId, projectId, reminder, subscription });
    if (result?.reminder) saved.push(result.reminder);
  }
  return { status: "created", reminders: saved, addedCount: saved.length };
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
  const conversation = await resolveConversation({ userId, projectId, conversationId });
  if (!conversation) return null;
  const messages = (await listProjectMessages({ userId, projectId, conversationId: conversation.id, limit: 8 })) || [];
  const reminders = (await listProjectReminders({ userId, projectId })) || [];
  const readings = (await listProjectReadings({ userId, projectId })) || [];
  return {
    project,
    conversation,
    recentMessages: messages,
    activeReminders: reminders.filter((item) => item.status === "active").slice(-10),
    recentReadings: readings.slice(-10)
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
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );

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
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
    alter table pip_reminders add column if not exists due_at timestamptz;
    alter table pip_reminders add column if not exists notify boolean not null default false;
    alter table pip_reminders add column if not exists timezone text;
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
     returning id, email, name, wix_member_id, created_at, updated_at`,
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
  stateCache.projects ||= {};
  stateCache.chatThreads ||= {};
  stateCache.conversations ||= {};
  stateCache.reminders ||= {};
  stateCache.readings ||= {};
  stateCache.seeds ||= {};
  stateCache.pushSubscriptions ||= {};
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
    createdAt: toIso(row.created_at),
    updatedAt: toIso(row.updated_at)
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

function standardReminderDefaults() {
  const dueAt = (days, hour = 9) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    date.setHours(hour, 0, 0, 0);
    return date.toISOString();
  };
  return [
    { title: "Check IBC level and leaks", note: "hydropip_default", category: "maintenance", dueAt: dueAt(1), repeat: { frequency: "weekly" }, notify: true },
    { title: "Check pH and EC/TDS after circulation", note: "hydropip_default", category: "nutrients", dueAt: dueAt(2), repeat: { frequency: "weekly" }, notify: true },
    { title: "Inspect flow at every tower", note: "hydropip_default", category: "maintenance", dueAt: dueAt(3), repeat: { frequency: "weekly" }, notify: true },
    { title: "Flush the main feed line", note: "hydropip_default", category: "maintenance", dueAt: dueAt(14), repeat: { frequency: "monthly" }, notify: true },
    { title: "Clean pump intakes and inspect hoses", note: "hydropip_default", category: "maintenance", dueAt: dueAt(21), repeat: { frequency: "monthly" }, notify: true },
    { title: "Calibrate pH and EC/TDS meters", note: "hydropip_default", category: "nutrients", dueAt: dueAt(28), repeat: { frequency: "monthly" }, notify: true }
  ];
}

function toIso(value) {
  if (!value) return null;
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}
