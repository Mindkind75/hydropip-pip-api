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

export function getProjectTemplates() {
  return { templates: projectTemplates };
}

export function upsertUser(user = {}) {
  const normalized = normalizeUser(user);
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

export function listProjects({ userId } = {}) {
  const ownerId = requireUserId(userId);
  const state = readState();
  return Object.values(state.projects)
    .filter((project) => project.userId === ownerId)
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
}

export function createProject({ user, type, title, systemProfile = {}, subscription = {} } = {}) {
  const savedUser = upsertUser(user);
  const template = getTemplate(type);
  const gate = checkProjectAccess(template, subscription);
  if (!gate.allowed) return gate;

  const state = readState();
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

  state.projects[id] = project;
  state.conversations[id] = [];
  state.reminders[id] = [];
  state.readings[id] = [];
  writeState(state);
  return { status: "created", project };
}

export function getProject({ userId, projectId } = {}) {
  const state = readState();
  const project = state.projects[projectId];
  if (!project || project.userId !== userId) return null;
  return project;
}

export function updateProject({ userId, projectId, patch = {} } = {}) {
  const state = readState();
  const project = state.projects[projectId];
  if (!project || project.userId !== userId) return null;

  const allowed = ["title", "status", "systemProfile"];
  for (const key of allowed) {
    if (patch[key] !== undefined) {
      project[key] = key === "systemProfile" ? normalizeSystemProfile(patch[key], project.type) : patch[key];
    }
  }
  project.updatedAt = nowIso();
  state.projects[projectId] = project;
  writeState(state);
  return project;
}

export function listProjectMessages({ userId, projectId, limit = 50 } = {}) {
  const project = getProject({ userId, projectId });
  if (!project) return null;
  const state = readState();
  return (state.conversations[projectId] || []).slice(-Math.max(1, Number(limit || 50)));
}

export function appendProjectMessage({ userId, projectId, role, content, mode, sources = [] } = {}) {
  const project = getProject({ userId, projectId });
  if (!project) return null;

  const state = readState();
  const message = {
    id: makeId("msg"),
    role: role === "assistant" ? "assistant" : "user",
    content: String(content || "").slice(0, 8000),
    mode: mode || null,
    sources,
    createdAt: nowIso()
  };
  state.conversations[projectId] = [...(state.conversations[projectId] || []), message].slice(-200);
  state.projects[projectId].updatedAt = message.createdAt;
  writeState(state);
  return message;
}

export function listProjectReminders({ userId, projectId } = {}) {
  const project = getProject({ userId, projectId });
  if (!project) return null;
  const state = readState();
  return state.reminders[projectId] || [];
}

export function createProjectReminder({ userId, projectId, reminder = {}, subscription = {} } = {}) {
  const project = getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) {
    return {
      status: "subscription_required",
      message: "Saving reminders requires Pip Pro.",
      upgradeReason: "Pip Pro stores project reminders, grow history, and recurring schedule tasks."
    };
  }

  const state = readState();
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
  state.reminders[projectId] = [...(state.reminders[projectId] || []), saved];
  state.projects[projectId].updatedAt = saved.createdAt;
  writeState(state);
  return { status: "queued", reminder: saved };
}

export function listProjectReadings({ userId, projectId } = {}) {
  const project = getProject({ userId, projectId });
  if (!project) return null;
  const state = readState();
  return state.readings[projectId] || [];
}

export function createProjectReading({ userId, projectId, reading = {}, subscription = {} } = {}) {
  const project = getProject({ userId, projectId });
  if (!project) return null;
  if (!subscription?.active) {
    return {
      status: "subscription_required",
      message: "Saving readings and grow logs requires Pip Pro.",
      upgradeReason: "Pip Pro remembers pH, EC/TDS, water level, crop notes, and prior troubleshooting."
    };
  }

  const state = readState();
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
  state.readings[projectId] = [...(state.readings[projectId] || []), saved];
  state.projects[projectId].updatedAt = saved.createdAt;
  writeState(state);
  return { status: "saved", reading: saved };
}

export function buildProjectContext({ userId, projectId } = {}) {
  if (!userId || !projectId) return null;
  const project = getProject({ userId, projectId });
  if (!project) return null;
  const messages = listProjectMessages({ userId, projectId, limit: 8 }) || [];
  const reminders = listProjectReminders({ userId, projectId }) || [];
  const readings = listProjectReadings({ userId, projectId }) || [];
  return {
    project,
    recentMessages: messages,
    activeReminders: reminders.filter((item) => item.status === "active").slice(-10),
    recentReadings: readings.slice(-10)
  };
}

export function resetMemoryForTests() {
  stateCache = cloneDefaultState();
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
    reservoirGallons: normalizeOptionalNumber(profile.reservoirGallons),
    plantSites: normalizeOptionalNumber(profile.plantSites),
    towerCount: normalizeOptionalNumber(profile.towerCount),
    crops: Array.isArray(profile.crops) ? profile.crops.map(String).slice(0, 20) : [],
    medium: profile.medium || null,
    nutrientBrand: profile.nutrientBrand || null,
    indoorOutdoor: profile.indoorOutdoor || null,
    pumpSchedule: profile.pumpSchedule || null,
    notes: profile.notes ? String(profile.notes).slice(0, 2000) : ""
  };
}

function normalizeOptionalNumber(value) {
  if (value === "" || value == null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function makeId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function nowIso() {
  return new Date().toISOString();
}

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}
