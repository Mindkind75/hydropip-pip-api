import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { askPip } from "./pipAgent.js";
import { createGrowPlan, createReminder, getBuildStep, getWizardSchema, recommendParts } from "./pipTools.js";
import { retrieveHydroPipContext } from "./ragStore.js";
import {
  bridgeRequestAllowed,
  issuePipSession,
  sessionFromRequest,
  signedSessionsConfigured,
  signedSessionsRequired
} from "./pipAuth.js";
import {
  createProject,
  createProjectConversation,
  createProjectReading,
  createProjectReminder,
  createProjectSeed,
  deleteUserData,
  deleteProjectReminder,
  deleteProjectSeed,
  getMemoryHealth,
  getProject,
  getProjectTemplates,
  listProjectMessages,
  listProjectConversations,
  listProjectReadings,
  listProjectReminders,
  listProjectSeeds,
  listProjects,
  seedProjectConversationDefaults,
  seedProjectDefaults,
  updateProject,
  updateProjectConversation,
  updateProjectReminder,
  updateProjectSeed,
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
const serviceOrigins = new Set([
  ...allowedOrigins,
  process.env.RENDER_EXTERNAL_URL,
  "https://hydropip-pip-api.onrender.com",
  "https://hydropip.com",
  "https://www.hydropip.com"
].filter(Boolean));
const chatWindowMs = Number(process.env.PIP_RATE_LIMIT_WINDOW_MS || 60_000);
const chatMaxRequests = Number(process.env.PIP_RATE_LIMIT_MAX || 20);
const chatHits = new Map();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || serviceOrigins.size === 0 || serviceOrigins.has(origin) || isWixEmbedOrigin(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error(`Origin not allowed: ${origin}`));
    }
  })
);
app.use(express.json({ limit: "4mb" }));
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
      sessions: {
        configured: signedSessionsConfigured(),
        required: signedSessionsRequired()
      },
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

app.post("/api/pip/session/exchange", (req, res) => {
  if (!bridgeRequestAllowed(req)) {
    res.status(401).json({ error: "invalid_bridge_credentials" });
    return;
  }
  const token = issuePipSession(req.body || {});
  if (!token) {
    res.status(400).json({ error: "invalid_member_session" });
    return;
  }
  res.json({ token, expiresIn: 6 * 60 * 60 });
});

app.use("/api/pip/users", requirePipMember);
app.use("/api/pip/projects", requirePipMember);

app.post("/api/pip/users", async (req, res, next) => {
  try {
    res.status(201).json({ user: await upsertUser(req.pipUser) });
  } catch (error) {
    next(error);
  }
});

app.delete("/api/pip/users/me", async (req, res, next) => {
  if (req.body?.confirm !== "DELETE") {
    res.status(400).json({ error: "deletion_confirmation_required" });
    return;
  }
  try {
    res.json(await deleteUserData({ userId: req.pipUser.id }));
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/projects", async (req, res, next) => {
  try {
    res.json({ projects: await listProjects({ userId: req.pipUser.id }) });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/projects", async (req, res, next) => {
  try {
    const result = await createProject({
      ...(req.body || {}),
      user: req.pipUser,
      subscription: req.pipSubscription
    });
    res.status(result.status === "created" ? 201 : 402).json(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/projects/:projectId", async (req, res, next) => {
  try {
    const project = await getProject({ userId: req.pipUser.id, projectId: req.params.projectId });
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
      userId: req.pipUser.id,
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

app.get("/api/pip/projects/:projectId/conversations", async (req, res, next) => {
  try {
    if (req.pipSubscription?.active) {
      await seedProjectConversationDefaults({
        userId: req.pipUser.id,
        projectId: req.params.projectId,
        subscription: req.pipSubscription
      });
    }
    const conversations = await listProjectConversations({
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      includeArchived: req.query.archived === "1"
    });
    if (!conversations) return res.status(404).json({ error: "project_not_found" });
    res.json({ conversations });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/projects/:projectId/conversations", async (req, res, next) => {
  try {
    const result = await createProjectConversation({
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      title: req.body?.title,
      subscription: req.pipSubscription
    });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "created" ? 201 : 402).json(result);
  } catch (error) {
    next(error);
  }
});

app.patch("/api/pip/projects/:projectId/conversations/:conversationId", async (req, res, next) => {
  try {
    const result = await updateProjectConversation({
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      conversationId: req.params.conversationId,
      patch: req.body?.patch || req.body || {},
      subscription: req.pipSubscription
    });
    if (!result) return res.status(404).json({ error: "conversation_not_found" });
    const statusCode = result.status === "subscription_required" ? 402 : result.status === "last_conversation" ? 409 : 200;
    res.status(statusCode).json(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/projects/:projectId/messages", async (req, res, next) => {
  try {
    const messages = await listProjectMessages({
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      conversationId: req.query.conversationId,
      allConversations: req.query.all === "1",
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
    const reminders = await listProjectReminders({ userId: req.pipUser.id, projectId: req.params.projectId });
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
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      reminder: req.body?.reminder,
      subscription: req.pipSubscription
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

app.post("/api/pip/projects/:projectId/reminders/defaults", async (req, res, next) => {
  try {
    const result = await seedProjectDefaults({ userId: req.pipUser.id, projectId: req.params.projectId, subscription: req.pipSubscription });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "subscription_required" ? 402 : 200).json(result);
  } catch (error) { next(error); }
});

app.patch("/api/pip/projects/:projectId/reminders/:reminderId", async (req, res, next) => {
  try {
    const result = await updateProjectReminder({ userId: req.pipUser.id, projectId: req.params.projectId, reminderId: req.params.reminderId, patch: req.body?.patch || req.body || {}, subscription: req.pipSubscription });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "subscription_required" ? 402 : result.status === "not_found" ? 404 : 200).json(result);
  } catch (error) { next(error); }
});

app.delete("/api/pip/projects/:projectId/reminders/:reminderId", async (req, res, next) => {
  try {
    const result = await deleteProjectReminder({ userId: req.pipUser.id, projectId: req.params.projectId, reminderId: req.params.reminderId, subscription: req.pipSubscription });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "subscription_required" ? 402 : result.status === "not_found" ? 404 : 200).json(result);
  } catch (error) { next(error); }
});

app.get("/api/pip/projects/:projectId/readings", async (req, res, next) => {
  try {
    const readings = await listProjectReadings({ userId: req.pipUser.id, projectId: req.params.projectId });
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
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      reading: req.body?.reading,
      subscription: req.pipSubscription
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

app.get("/api/pip/projects/:projectId/seeds", async (req, res, next) => {
  try {
    const seeds = await listProjectSeeds({ userId: req.pipUser.id, projectId: req.params.projectId });
    if (!seeds) return res.status(404).json({ error: "project_not_found" });
    res.json({ seeds });
  } catch (error) { next(error); }
});

app.post("/api/pip/projects/:projectId/seeds", async (req, res, next) => {
  try {
    const result = await createProjectSeed({ userId: req.pipUser.id, projectId: req.params.projectId, seed: req.body?.seed || req.body || {}, subscription: req.pipSubscription });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "saved" ? 201 : 402).json(result);
  } catch (error) { next(error); }
});

app.patch("/api/pip/projects/:projectId/seeds/:seedId", async (req, res, next) => {
  try {
    const result = await updateProjectSeed({ userId: req.pipUser.id, projectId: req.params.projectId, seedId: req.params.seedId, patch: req.body?.patch || req.body || {}, subscription: req.pipSubscription });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "not_found" ? 404 : result.status === "subscription_required" ? 402 : 200).json(result);
  } catch (error) { next(error); }
});

app.delete("/api/pip/projects/:projectId/seeds/:seedId", async (req, res, next) => {
  try {
    const result = await deleteProjectSeed({ userId: req.pipUser.id, projectId: req.params.projectId, seedId: req.params.seedId, subscription: req.pipSubscription });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "not_found" ? 404 : result.status === "subscription_required" ? 402 : 200).json(result);
  } catch (error) { next(error); }
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

app.post("/api/pip/reminders", requirePipMember, (req, res) => {
  const result = createReminder({
    ...(req.body || {}),
    user: req.pipUser,
    subscription: req.pipSubscription
  });
  res.status(req.pipSubscription?.active ? 201 : 402).json(result);
});

app.post("/api/pip/chat", async (req, res, next) => {
  try {
    const access = optionalPipSession(req);
    res.json(await askPip({
      ...(req.body || {}),
      user: access.user,
      subscription: access.subscription
    }));
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

function requirePipMember(req, res, next) {
  const access = optionalPipSession(req);
  if (!access.user?.id) {
    res.status(401).json({ error: "member_session_required" });
    return;
  }
  req.pipUser = access.user;
  req.pipSubscription = access.subscription;
  next();
}

function optionalPipSession(req) {
  const signed = sessionFromRequest(req);
  if (signed) {
    return {
      user: {
        id: signed.sub,
        email: signed.email || null,
        name: signed.name || null,
        wixMemberId: signed.sub
      },
      subscription: { active: Boolean(signed.pro), plan: signed.plan || "free_member", verified: true }
    };
  }

  if (signedSessionsRequired()) {
    return { user: null, subscription: { active: false, plan: "visitor", verified: false } };
  }

  const legacyUser = req.body?.user || (req.query?.userId ? { id: req.query.userId } : null);
  return {
    user: legacyUser,
    subscription: req.body?.subscription || { active: false, plan: legacyUser ? "free_member" : "visitor" }
  };
}
