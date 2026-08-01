import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { askPip } from "./pipAgent.js";
import { createGrowPlan, createReminder, getBuildStep, getWizardSchema, recommendParts } from "./pipTools.js";
import { retrieveHydroPipContext } from "./ragStore.js";
import {
  createProject,
  createProjectReading,
  createProjectReminder,
  getMemoryHealth,
  getProject,
  getProjectTemplates,
  listProjectMessages,
  listProjectReadings,
  listProjectReminders,
  listProjects,
  updateProject,
  upsertUser
} from "./pipMemory.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const app = express();
const port = Number(process.env.PORT || 8787);
const allowedOrigins = (process.env.PIP_ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const chatWindowMs = Number(process.env.PIP_RATE_LIMIT_WINDOW_MS || 60_000);
const chatMaxRequests = Number(process.env.PIP_RATE_LIMIT_MAX || 20);
const chatHits = new Map();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin) || isWixEmbedOrigin(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error(`Origin not allowed: ${origin}`));
    }
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.static(rootDir));

app.use("/api/pip/chat", (req, res, next) => {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = String(Array.isArray(forwarded) ? forwarded[0] : forwarded || req.ip || "unknown").split(",")[0].trim();
  const now = Date.now();
  const bucket = chatHits.get(ip) || [];
  const recent = bucket.filter((timestamp) => now - timestamp < chatWindowMs);
  recent.push(now);
  chatHits.set(ip, recent);

  if (recent.length > chatMaxRequests) {
    res.status(429).json({
      error: "rate_limited",
      message: "Pip is getting a lot of questions from this connection. Please wait a minute and try again."
    });
    return;
  }

  next();
});

app.get("/api/pip/health", async (_req, res, next) => {
  try {
    const memory = await getMemoryHealth();
    res.json({
      ok: true,
      ai: Boolean(process.env.OPENAI_API_KEY),
      mode: process.env.OPENAI_API_KEY ? "openai" : "rules_fallback",
      memory
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/wizard", (_req, res) => {
  res.json({
    ...getWizardSchema()
  });
});

app.get("/api/pip/project-templates", (_req, res) => {
  res.json(getProjectTemplates());
});

app.post("/api/pip/users", async (req, res, next) => {
  try {
    res.status(201).json({ user: await upsertUser(req.body?.user || req.body || {}) });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/projects", async (req, res, next) => {
  try {
    res.json({ projects: await listProjects({ userId: req.query.userId }) });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/projects", async (req, res, next) => {
  try {
    const result = await createProject(req.body || {});
    res.status(result.status === "created" ? 201 : 402).json(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/projects/:projectId", async (req, res, next) => {
  try {
    const project = await getProject({ userId: req.query.userId, projectId: req.params.projectId });
    if (!project) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    res.json({ project });
  } catch (error) {
    next(error);
  }
});

app.patch("/api/pip/projects/:projectId", async (req, res, next) => {
  try {
    const project = await updateProject({
      userId: req.body?.userId || req.body?.user?.id,
      projectId: req.params.projectId,
      patch: req.body?.patch || req.body || {}
    });
    if (!project) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    res.json({ project });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/projects/:projectId/messages", async (req, res, next) => {
  try {
    const messages = await listProjectMessages({
      userId: req.query.userId,
      projectId: req.params.projectId,
      limit: req.query.limit
    });
    if (!messages) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    res.json({ messages });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/projects/:projectId/reminders", async (req, res, next) => {
  try {
    const reminders = await listProjectReminders({ userId: req.query.userId, projectId: req.params.projectId });
    if (!reminders) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    res.json({ reminders });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/projects/:projectId/reminders", async (req, res, next) => {
  try {
    const result = await createProjectReminder({
      userId: req.body?.userId || req.body?.user?.id,
      projectId: req.params.projectId,
      reminder: req.body?.reminder,
      subscription: req.body?.subscription
    });
    if (!result) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    res.status(result.status === "queued" ? 201 : 402).json(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/projects/:projectId/readings", async (req, res, next) => {
  try {
    const readings = await listProjectReadings({ userId: req.query.userId, projectId: req.params.projectId });
    if (!readings) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    res.json({ readings });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/projects/:projectId/readings", async (req, res, next) => {
  try {
    const result = await createProjectReading({
      userId: req.body?.userId || req.body?.user?.id,
      projectId: req.params.projectId,
      reading: req.body?.reading,
      subscription: req.body?.subscription
    });
    if (!result) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    res.status(result.status === "saved" ? 201 : 402).json(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/build-steps", (req, res) => {
  res.json(getBuildStep({ stepId: req.query.stepId }));
});

app.get("/api/pip/parts", (req, res) => {
  res.json(recommendParts({ towerCount: req.query.towerCount }));
});

app.get("/api/pip/knowledge/search", (req, res) => {
  res.json(retrieveHydroPipContext(req.query.q || "", { limit: req.query.limit || 6 }));
});

app.post("/api/pip/grow-plan", (req, res) => {
  res.json(createGrowPlan(req.body || {}));
});

app.post("/api/pip/reminders", (req, res) => {
  res.status(req.body?.subscription?.active ? 201 : 402).json(createReminder(req.body || {}));
});

app.post("/api/pip/chat", async (req, res, next) => {
  try {
    res.json(await askPip(req.body || {}));
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.statusCode || 500).json({
    error: "pip_error",
    message: error.statusCode ? error.message : "Pip hit a server-side issue. Check the backend logs."
  });
});

app.listen(port, () => {
  console.log(`HydroPip Pip API running on port ${port}`);
});

function isWixEmbedOrigin(origin) {
  return origin === "null" || /^https:\/\/[a-z0-9-]+\.filesusr\.com$/i.test(origin);
}
