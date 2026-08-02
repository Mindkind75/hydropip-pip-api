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

const defaultState = {
  version: 1,
  users: {},
  projects: {},
  conversations: {},
  reminders: {},
  readings: {}
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
  state.conversations[id] = [];
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

export async function listProjectMessages({ userId, projectId, limit = 50 } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  const safeLimit = Math.max(1, Math.min(200, Number(limit || 50)));

  if (usesPostgres()) {
    const pool = await readyPool();
    const result = await pool.query(
      `select id, role, content, mode, sources, created_at
       from pip_messages
       where project_id = $1 and user_id = $2
       order by created_at desc
       limit $3`,
      [projectId, userId, safeLimit]
    );
    return result.rows.reverse().map(rowToMessage);
  }

  const state = readState();
  return (state.conversations[projectId] || []).slice(-safeLimit);
}

export async function appendProjectMessage({ userId, projectId, role, content, mode, sources = [] } = {}) {
  const project = await getProject({ userId, projectId });
  if (!project) return null;

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
      `insert into pip_messages (id, project_id, user_id, role, content, mode, sources, created_at)
       values ($1, $2, $3, $4, $5, $6, $7::jsonb, $8)`,
      [message.id, projectId, userId, message.role, message.content, message.mode, JSON.stringify(sources || []), message.createdAt]
    );
    await pool.query("update pip_projects set updated_at = $1 where id = $2", [message.createdAt, projectId]);
    return message;
  }

  const state = readState();
  state.conversations[projectId] = [...(state.conversations[projectId] || []), message].slice(-200);
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
      `select id, title, note, category, due_date, repeat_rule, status, created_at
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
    repeat: reminder.repeat || null,
    status: "active",
    createdAt: nowIso()
  };

  if (usesPostgres()) {
    const pool = await readyPool();
    await pool.query(
      `insert into pip_reminders
       (id, project_id, user_id, title, note, category, due_date, repeat_rule, status, created_at)
       values ($1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9, $10)`,
      [
        saved.id,
        projectId,
        userId,
        saved.title,
        saved.note,
        saved.category,
        saved.dueDate,
        JSON.stringify(saved.repeat),
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

export async function buildProjectContext({ userId, projectId } = {}) {
  if (!userId || !projectId) return null;
  const project = await getProject({ userId, projectId });
  if (!project) return null;
  const messages = (await listProjectMessages({ userId, projectId, limit: 8 })) || [];
  const reminders = (await listProjectReminders({ userId, projectId })) || [];
  const readings = (await listProjectReadings({ userId, projectId })) || [];
  return {
    project,
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
    create index if not exists pip_messages_project_created_idx on pip_messages(project_id, created_at desc);

    create table if not exists pip_reminders (
      id text primary key,
      project_id text not null references pip_projects(id) on delete cascade,
      user_id text not null references pip_users(id) on delete cascade,
      title text not null,
      note text not null default '',
      category text not null default 'general',
      due_date text,
      repeat_rule jsonb,
      status text not null default 'active',
      created_at timestamptz not null default now()
    );
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
    repeat: row.repeat_rule,
    status: row.status,
    createdAt: toIso(row.created_at)
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

function toIso(value) {
  if (!value) return null;
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}
