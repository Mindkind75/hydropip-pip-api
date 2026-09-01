import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import net from "node:net";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { askPip } from "./pipAgent.js";
import { createGrowPlan, createReminder, getBuildStep, getWizardSchema, recommendParts } from "./pipTools.js";
import { retrieveHydroPipContext } from "./ragStore.js";
import {
  ADMIN_SESSION_COOKIE,
  adminKeyRequestAllowed,
  adminRequestAllowed,
  bridgeRequestAllowed,
  issueAdminSession,
  issuePipSession,
  sessionFromRequest,
  signedSessionsConfigured,
  signedSessionsRequired
} from "./pipAuth.js";
import {
  addProjectSeedPacks,
  betaApplicationGrantsAccess,
  createBetaApplication,
  createProject,
  createProjectConversation,
  createProjectReading,
  createProjectReminder,
  createProjectSeed,
  createBetaFeedback,
  createReviewItem,
  applyProjectReminderAction,
  cancelAiUsageReservation,
  claimBuildPhotoCheck,
  completeAiUsage,
  deleteUserData,
  deleteProjectReminder,
  deleteProjectSeed,
  getMemoryHealth,
  getBuildPhotoAllowance,
  getBetaExperience,
  getAdminCommandCenter,
  getConversionSummary,
  getProject,
  getProjectTemplates,
  getUserPreferences,
  getDailyAiUsageSummary,
  grantPipCredits,
  listProjectMessages,
  listProjectConversations,
  listProjectReadings,
  listProjectReminders,
  listProjectSeeds,
  listProjects,
  listBetaApplications,
  listBetaFeedback,
  listBetaTesterProgress,
  listReviewItems,
  refundBuildPhotoCheck,
  recordConversionEvent,
  reserveAiUsage,
  saveProjectRhythmSetup,
  searchAdminMembers,
  seedProjectConversationDefaults,
  seedProjectDefaults,
  updateProject,
  updateProjectConversation,
  updateProjectReminder,
  updateProjectSeed,
  updateUserPreferences,
  updateBetaExperience,
  updateBetaApplicationReview,
  updateBetaFeedbackReview,
  updateReviewItem,
  upsertUser
} from "./pipMemory.js";
import { classifyPhotoRequest, photoAnalysisSucceeded } from "./pipPhotoAccess.js";
import {
  aiUsageEventType,
  clientIpHash,
  estimateAiCreditCost,
  estimateModelCost,
  makeDailyLimitPayload,
  makeMonthlyLimitPayload,
  pipAiDisabled,
  resolvePipUsageTier,
  validateChatPayload
} from "./pipUsage.js";
import { nutrientProgramsForSubscription } from "./nutrientPrograms.js";
import { getSeedPlanningDashboard, getSeedSowRecommendation, seedPlanReminders } from "./plantingCalendar.js";
import { analyzeFeedbackSuggestion, feedbackPortfolioInsights } from "./feedbackTriage.js";
import { buildRhythmOverview } from "./rhythm.js";
import {
  adminPasskeyStatus,
  beginAdminPasskeyAuthentication,
  beginAdminPasskeyRegistration,
  finishAdminPasskeyAuthentication,
  finishAdminPasskeyRegistration
} from "./adminPasskeys.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1);
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
  "https://www.hydropip.com",
  ...(process.env.NODE_ENV === "production" ? [] : [
    `http://127.0.0.1:${port}`,
    `http://localhost:${port}`
  ])
].filter(Boolean));
const chatWindowMs = Number(process.env.PIP_RATE_LIMIT_WINDOW_MS || 60_000);
const chatMaxRequests = Number(process.env.PIP_RATE_LIMIT_MAX || 20);
const chatHits = new Map();
const betaApplicationHits = new Map();
const feedbackHits = new Map();
const conversionHits = new Map();
const sessionExchangeHits = new Map();
const exchangeNonces = new Map();
const adminPasskeyHits = new Map();
const slowRequestMs = Math.max(250, Number(process.env.PIP_SLOW_REQUEST_MS || 2000));

app.use((req, res, next) => {
  const requestId = String(req.headers["x-request-id"] || randomUUID()).slice(0, 128);
  const startedAt = Date.now();
  req.requestId = requestId;
  res.set("X-Request-Id", requestId);
  res.set("X-Content-Type-Options", "nosniff");
  res.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.set("Permissions-Policy", "camera=(self), microphone=(), geolocation=()");
  res.set("Cross-Origin-Resource-Policy", "cross-origin");
  res.set("Content-Security-Policy", contentSecurityPolicy());
  if (process.env.NODE_ENV === "production") {
    res.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  res.on("finish", () => {
    const durationMs = Date.now() - startedAt;
    if (durationMs >= slowRequestMs || res.statusCode >= 500) {
      console.warn(JSON.stringify({
        event: res.statusCode >= 500 ? "http_server_error" : "http_slow_request",
        requestId,
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        durationMs
      }));
    }
  });
  next();
});

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || serviceOrigins.has(origin)) {
        callback(null, true);
        return;
      }
      const error = new Error("Origin not allowed");
      error.code = "pip_cors_origin_denied";
      error.statusCode = 403;
      callback(error);
    }
  })
);
app.use(express.json({ limit: process.env.PIP_JSON_BODY_LIMIT || "8mb" }));
app.get("/data/nutrient-programs.json", (_req, res) => res.status(404).json({ error: "not_found" }));

app.use((req, res, next) => {
  if (req.path.startsWith("/api/") || req.path === "/beta-admin" || req.path === "/pip-review-admin.html") {
    res.set("X-Robots-Tag", "noindex, nofollow");
  }
  next();
});

app.use((req, res, next) => {
  let requestPath;
  try {
    requestPath = decodeURIComponent(req.path).toLowerCase();
  } catch {
    res.status(400).json({ error: "invalid_path" });
    return;
  }
  const blocked = requestPath.startsWith("/hydropip_aiknowledge_base/")
    || requestPath === "/hydropip_aiknowledge_base"
    || requestPath.startsWith("/server/")
    || requestPath === "/server"
    || requestPath.startsWith("/node_modules/")
    || requestPath.startsWith("/wix-")
    || /(?:^|\/)\.[^/]+/.test(requestPath)
    || /\.(?:zip|env|log|sql|bak|tmp|md|ya?ml)$/i.test(requestPath)
    || /^\/(?:package(?:-lock)?\.json|pnpm-lock\.yaml)$/i.test(requestPath);
  if (blocked) {
    res.set("Cache-Control", "no-store");
    res.status(404).json({ error: "not_found" });
    return;
  }
  next();
});

app.get(["/beta-admin", "/beta-admin.html"], serveAdminPage("beta-admin.html"));
app.get("/pip-review-admin.html", serveAdminPage("pip-review-admin.html"));
app.get(["/admin-control-center", "/admin-control-center.html"], serveAdminPage("admin-control-center.html"));

const publicPageRoutes = new Map([
  ["/join", "join.html"],
  ["/beta-test", "beta-test.html"],
  ["/field-guide", "field-guide.html"],
  ["/how-it-works", "how-it-works.html"],
  ["/hydroponic-tower-placement", "hydroponic-tower-placement.html"],
  ["/nutrient-calculator", "nutrient-calculator.html"],
  ["/track-start", "track-start.html"]
]);

for (const [route, file] of publicPageRoutes) {
  app.get(route, (_req, res) => res.sendFile(path.join(rootDir, file)));
  app.get(`/${file}`, (_req, res) => res.redirect(301, route));
}

app.get(["/signup", "/signup.html"], (_req, res) => res.redirect(302, "/join"));

app.use(express.static(rootDir, {
  setHeaders(res, filePath) {
    const extension = path.extname(filePath).toLowerCase();
    if (extension === ".html") {
      res.set("Cache-Control", "no-cache, max-age=0, must-revalidate");
      return;
    }
    if ([".css", ".js", ".json", ".png", ".jpg", ".jpeg", ".webp", ".avif", ".svg", ".ico"].includes(extension)) {
      res.set("Cache-Control", "public, max-age=604800, stale-while-revalidate=86400");
    }
  }
}));

app.post("/api/pip/conversions", conversionRateLimit, async (req, res, next) => {
  try {
    const signed = sessionFromRequest(req);
    const event = await recordConversionEvent({
      ...(req.body?.event || req.body || {}),
      userId: signed?.sub || null,
      sessionTier: signed ? (signed.pro ? "pip_pro" : "free_member") : "visitor"
    });
    res.status(event ? 201 : 202).json({ recorded: true });
  } catch (error) {
    next(error);
  }
});

app.use("/api/pip/chat", (req, res, next) => {
  const ip = requestIp(req);
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
      ai: Boolean(process.env.OPENAI_API_KEY) && !pipAiDisabled(),
      mode: process.env.OPENAI_API_KEY && !pipAiDisabled() ? "openai" : "rules_fallback",
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

app.get("/api/pip/nutrient-programs", requirePipMember, (req, res) => {
  res.set("Cache-Control", "private, no-store");
  res.json(nutrientProgramsForSubscription(req.pipSubscription));
});

app.post("/api/pip/session/exchange", async (req, res, next) => {
  res.set("Cache-Control", "no-store");
  if (!bridgeRequestAllowed(req)) {
    res.status(401).json({ error: "invalid_bridge_credentials" });
    return;
  }
  const exchangeCheck = consumeSessionExchange(req);
  if (!exchangeCheck.allowed) {
    res.status(exchangeCheck.statusCode).json({ error: exchangeCheck.error });
    return;
  }
  try {
    const sessionPayload = req.body || {};
    const subscription = { ...(sessionPayload.subscription || {}) };
    if (await betaApplicationGrantsAccess({ email: sessionPayload.member?.email })) {
      subscription.active = true;
      subscription.beta = true;
      subscription.planName ||= "HydroPip Beta Tester";
    }
    const token = issuePipSession({ ...sessionPayload, subscription });
    if (!token) {
      res.status(400).json({ error: "invalid_member_session" });
      return;
    }
    await upsertUser({
      id: sessionPayload.member.id,
      email: sessionPayload.member.email,
      name: sessionPayload.member.name,
      wixMemberId: sessionPayload.member.id,
      subscription
    });
    res.json({ token, expiresIn: Math.max(300, Math.min(6 * 60 * 60, Number(process.env.PIP_SESSION_TTL_SECONDS) || 60 * 60)) });
  } catch (error) {
    next(error);
  }
});

app.use("/api/pip/admin", (req, res, next) => {
  res.set("Cache-Control", "private, no-store, max-age=0");
  res.set("Pragma", "no-cache");
  next();
});

app.get("/api/pip/admin/passkeys/status", async (_req, res, next) => {
  try {
    res.json(await adminPasskeyStatus());
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/admin/session/key", adminPasskeyRateLimit, requireAdminRecoveryKey, async (_req, res, next) => {
  try {
    setAdminSessionCookie(res);
    res.json({ authenticated: true, ...(await adminPasskeyStatus()) });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/admin/session/logout", (_req, res) => {
  clearAdminSessionCookie(res);
  res.json({ locked: true });
});

app.post("/api/pip/admin/passkeys/register/options", adminPasskeyRateLimit, requireAdminRecoveryKey, async (_req, res, next) => {
  try {
    res.json(await beginAdminPasskeyRegistration());
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/admin/passkeys/register/verify", adminPasskeyRateLimit, requireAdminRecoveryKey, async (req, res, next) => {
  try {
    const result = await finishAdminPasskeyRegistration(req.body || {});
    setAdminSessionCookie(res);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/admin/passkeys/authenticate/options", adminPasskeyRateLimit, requireAdminNetwork, async (_req, res, next) => {
  try {
    res.json(await beginAdminPasskeyAuthentication());
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/admin/passkeys/authenticate/verify", adminPasskeyRateLimit, requireAdminNetwork, async (req, res, next) => {
  try {
    const result = await finishAdminPasskeyAuthentication(req.body || {});
    setAdminSessionCookie(res);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/admin/ip-status", requirePipAdmin, (req, res) => {
  const status = adminIpStatus(req);
  res.json({
    mode: status.mode,
    observedIp: status.ip,
    allowlistConfigured: status.configured,
    matched: status.matched,
    ruleCount: status.ruleCount
  });
});

app.post("/api/pip/admin/credits/grant", requirePipAdmin, async (req, res, next) => {
  try {
    const userId = String(req.body?.userId || "").trim();
    const entry = await grantPipCredits({
      userId,
      amount: req.body?.amount,
      reason: req.body?.reason,
      source: req.body?.source || "manual_admin",
      metadata: req.body?.metadata
    });
    res.status(201).json({ entry, balance: (await getDailyAiUsageSummary({ userId, tier: "free_member" })).topUpBalance });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/beta/apply", betaApplicationRateLimit, async (req, res, next) => {
  if (String(req.body?.website || "").trim()) {
    res.status(202).json({ received: true });
    return;
  }
  try {
    const application = await createBetaApplication({ application: req.body?.application });
    res.status(201).json({
      received: true,
      application: { id: application.id, status: application.status, updatedAt: application.updatedAt }
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/admin/beta/overview", requirePipAdmin, async (req, res, next) => {
  try {
    const [applications, feedback, testers, conversions] = await Promise.all([
      listBetaApplications({ status: req.query.status, limit: req.query.limit }),
      listBetaFeedback({
        status: req.query.feedbackStatus,
        category: req.query.category,
        rating: req.query.rating,
        limit: req.query.limit
      }),
      listBetaTesterProgress({ limit: req.query.limit }),
      getConversionSummary({ days: req.query.conversionDays })
    ]);
    res.json({
      applications,
      feedback,
      feedbackInsights: feedbackPortfolioInsights(feedback),
      testers,
      conversions,
      summary: betaAdminSummary({ applications, feedback, testers }),
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
});

app.patch("/api/pip/admin/beta/applications/:id", requirePipAdmin, async (req, res, next) => {
  try {
    res.json({
      application: await updateBetaApplicationReview({
        id: req.params.id,
        status: req.body?.status,
        adminNotes: req.body?.adminNotes
      })
    });
  } catch (error) {
    next(error);
  }
});

app.patch("/api/pip/admin/beta/feedback/:id", requirePipAdmin, async (req, res, next) => {
  try {
    res.json({
      feedback: await updateBetaFeedbackReview({
        id: req.params.id,
        status: req.body?.status,
        priority: req.body?.priority,
        adminNotes: req.body?.adminNotes
      })
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/admin/review-items", requirePipAdmin, async (req, res, next) => {
  try {
    res.json({
      reviewItems: await listReviewItems({
        status: req.query.status,
        limit: req.query.limit
      }),
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/admin/command-center", requirePipAdmin, async (req, res, next) => {
  try {
    res.json(await getAdminCommandCenter({ days: req.query.days }));
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/admin/members", requirePipAdmin, async (req, res, next) => {
  try {
    res.json({
      members: await searchAdminMembers({
        q: req.query.q || "",
        limit: req.query.limit
      }),
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
});

app.patch("/api/pip/admin/review-items/:id", requirePipAdmin, async (req, res, next) => {
  try {
    res.json(await updateReviewItem({
      id: req.params.id,
      patch: req.body?.patch || req.body || {}
    }));
  } catch (error) {
    next(error);
  }
});

app.use("/api/pip/users", requirePipMember);
app.use("/api/pip/projects", requirePipMember);
app.use("/api/pip/feedback", requirePipMember, feedbackRateLimit);

app.post("/api/pip/users", async (req, res, next) => {
  try {
    res.status(201).json({ user: await upsertUser(req.pipUser) });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/users/me/preferences", async (req, res, next) => {
  try {
    await upsertUser(req.pipUser);
    res.json({ preferences: await getUserPreferences({ userId: req.pipUser.id }) });
  } catch (error) {
    next(error);
  }
});

app.patch("/api/pip/users/me/preferences", async (req, res, next) => {
  try {
    await upsertUser(req.pipUser);
    res.json({
      preferences: await updateUserPreferences({
        userId: req.pipUser.id,
        patch: req.body?.patch || req.body || {}
      })
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/users/me/photo-allowance", async (req, res, next) => {
  try {
    await upsertUser(req.pipUser);
    res.json({
      photoAllowance: await getBuildPhotoAllowance({
        userId: req.pipUser.id,
        subscription: req.pipSubscription
      })
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/users/me/usage", async (req, res, next) => {
  try {
    await upsertUser(req.pipUser);
    res.json({
      usage: await getDailyAiUsageSummary({
        userId: req.pipUser.id,
        ipHash: clientIpHash(req),
        tier: resolvePipUsageTier({ user: req.pipUser, subscription: req.pipSubscription })
      })
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/users/me/beta", requirePipBeta, async (req, res, next) => {
  try {
    await upsertUser(req.pipUser);
    res.json({ beta: await getBetaExperience({ userId: req.pipUser.id }) });
  } catch (error) {
    next(error);
  }
});

app.patch("/api/pip/users/me/beta", requirePipBeta, async (req, res, next) => {
  try {
    await upsertUser(req.pipUser);
    res.json({
      beta: await updateBetaExperience({
        userId: req.pipUser.id,
        welcomeSeen: req.body?.welcomeSeen,
        activity: req.body?.activity
      })
    });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/feedback", async (req, res, next) => {
  try {
    await upsertUser(req.pipUser);
    const submission = req.body?.feedback || {};
    const analysis = submission.message ? await analyzeFeedbackSuggestion(submission) : null;
    const feedback = await createBetaFeedback({ userId: req.pipUser.id, feedback: submission, analysis });
    res.status(201).json({ feedback });
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

app.post("/api/pip/review-items", requirePipMember, async (req, res, next) => {
  try {
    res.status(201).json(await createReviewItem({
      userId: req.pipUser.id,
      projectId: req.body?.projectId,
      question: req.body?.question,
      answer: req.body?.answer,
      reason: req.body?.reason || "manual_feedback",
      context: req.body?.context || {},
      status: "new"
    }));
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

app.post("/api/pip/projects/:projectId/reminders/batch", async (req, res, next) => {
  try {
    if (!req.pipSubscription?.active) {
      res.status(402).json({ error: "subscription_required", message: "Saving a Pip Calendar schedule requires Pip Pro." });
      return;
    }
    const requested = Array.isArray(req.body?.reminders) ? req.body.reminders.slice(0, 40) : [];
    if (!requested.length) {
      res.status(400).json({ error: "reminders_required", message: "No calendar tasks were provided." });
      return;
    }
    const existing = await listProjectReminders({ userId: req.pipUser.id, projectId: req.params.projectId });
    if (!existing) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    const signature = (reminder = {}) => [
      String(reminder.title || "").trim().toLowerCase(),
      String(reminder.dueAt || reminder.dueDate || reminder.date || "").slice(0, 16),
      String(reminder.repeat?.frequency || "")
    ].join("|");
    const known = new Set(existing.map(signature));
    const added = [];
    let skipped = 0;
    for (const reminder of requested) {
      const categoryMap = { planting: "grow", crop: "grow", flow: "nutrients", testing: "nutrients" };
      const normalized = {
        title: String(reminder?.title || "HydroPip task").slice(0, 180),
        note: String(reminder?.note || "").slice(0, 1200),
        category: ["grow", "maintenance", "nutrients", "harvest"].includes(reminder?.category) ? reminder.category : categoryMap[reminder?.category] || "grow",
        dueDate: reminder?.dueDate || reminder?.date || null,
        dueAt: reminder?.dueAt || null,
        repeat: reminder?.repeat?.frequency ? { frequency: reminder.repeat.frequency } : null,
        notify: false,
        timezone: String(reminder?.timezone || req.body?.timezone || "").slice(0, 80) || null
      };
      const key = signature(normalized);
      if (known.has(key)) {
        skipped += 1;
        continue;
      }
      const result = await createProjectReminder({
        userId: req.pipUser.id,
        projectId: req.params.projectId,
        reminder: normalized,
        subscription: req.pipSubscription
      });
      if (result?.reminder) {
        added.push(result.reminder);
        known.add(key);
      }
    }
    res.status(201).json({ status: "saved", added, addedCount: added.length, skippedCount: skipped });
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/projects/:projectId/reminders/actions", async (req, res, next) => {
  try {
    const operation = String(req.body?.operation || "");
    if (!['add', 'update', 'delete', 'delete_all', 'replace_all'].includes(operation)) {
      res.status(400).json({ error: "invalid_reminder_action", message: "Choose a valid Pip Calendar action." });
      return;
    }
    const result = await applyProjectReminderAction({
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      operation,
      reminderIds: req.body?.reminderIds,
      reminders: req.body?.reminders,
      patch: req.body?.patch,
      subscription: req.pipSubscription
    });
    if (!result) {
      res.status(404).json({ error: "project_not_found" });
      return;
    }
    res.status(result.status === "subscription_required" ? 402 : result.status === "invalid_operation" ? 400 : 200).json(result);
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
    res.status(result.status === "subscription_required" ? 402 : result.status === "not_found" ? 404 : ["not_due", "already_completed"].includes(result.status) ? 409 : 200).json(result);
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

app.get("/api/pip/projects/:projectId/seed-plan", async (req, res, next) => {
  try {
    if (!req.pipSubscription?.active) {
      res.status(402).json({ error: "subscription_required", message: "Personalized sowing windows and saved seed plans require Pip Pro." });
      return;
    }
    const project = await getProject({ userId: req.pipUser.id, projectId: req.params.projectId });
    if (!project) return res.status(404).json({ error: "project_not_found" });
    const profile = project.systemProfile || {};
    if (!profile.growZone) {
      res.status(422).json({ error: "grow_zone_required", message: "Add the USDA grow zone on the Profile tab so Pip can estimate sowing windows." });
      return;
    }
    const context = {
      growZone: profile.growZone,
      location: profile.location,
      areaType: profile.areaType,
      date: req.query.date,
      preferredWeekday: req.query.preferredWeekday
    };
    const dashboard = getSeedPlanningDashboard(context);
    const recommendation = req.query.crop ? getSeedSowRecommendation({ ...context, crop: req.query.crop }) : null;
    if (recommendation?.status === "recommended") {
      recommendation.reminders = seedPlanReminders(recommendation, {
        includeSuccession: req.query.succession === "1",
        successionIntervalDays: req.query.successionIntervalDays
      });
    }
    res.json({ projectId: project.id, dashboard, recommendation });
  } catch (error) { next(error); }
});

app.get("/api/pip/projects/:projectId/rhythm", async (req, res, next) => {
  try {
    if (!req.pipSubscription?.active) {
      res.status(402).json({ error: "subscription_required", message: "The personalized growing rhythm is available in Pip Pro." });
      return;
    }
    const project = await getProject({ userId: req.pipUser.id, projectId: req.params.projectId });
    if (!project) return res.status(404).json({ error: "project_not_found" });
    const [reminders, seeds, readings] = await Promise.all([
      listProjectReminders({ userId: req.pipUser.id, projectId: project.id }),
      listProjectSeeds({ userId: req.pipUser.id, projectId: project.id }),
      listProjectReadings({ userId: req.pipUser.id, projectId: project.id })
    ]);
    const profile = project.systemProfile || {};
    const seedDashboard = profile.growZone ? getSeedPlanningDashboard({
      growZone: profile.growZone,
      location: profile.location,
      areaType: profile.areaType
    }) : null;
    res.json({ rhythm: buildRhythmOverview({ project, reminders, seeds, readings, seedDashboard }) });
  } catch (error) { next(error); }
});

app.post("/api/pip/projects/:projectId/rhythm/setup", async (req, res, next) => {
  try {
    if (!req.pipSubscription?.active) {
      res.status(402).json({ error: "subscription_required", message: "Pip-led Rhythm setup is available in Pip Pro." });
      return;
    }
    const result = await saveProjectRhythmSetup({
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      input: req.body?.setup || req.body || {},
      subscription: req.pipSubscription
    });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.post("/api/pip/projects/:projectId/seeds", async (req, res, next) => {
  try {
    const result = await createProjectSeed({ userId: req.pipUser.id, projectId: req.params.projectId, seed: req.body?.seed || req.body || {}, subscription: req.pipSubscription });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "saved" ? 201 : 402).json(result);
  } catch (error) { next(error); }
});

app.post("/api/pip/projects/:projectId/seeds/batch", async (req, res, next) => {
  try {
    const result = await addProjectSeedPacks({
      userId: req.pipUser.id,
      projectId: req.params.projectId,
      items: req.body?.items,
      subscription: req.pipSubscription
    });
    if (!result) return res.status(404).json({ error: "project_not_found" });
    res.status(result.status === "subscription_required" ? 402 : 200).json(result);
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

app.get("/api/pip/knowledge/search", requirePipAdmin, (req, res) => {
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
  let claimedPhotoCheck = false;
  let aiReservation = null;
  let access;
  try {
    access = optionalPipSession(req);
    let photoAllowance = null;
    const hasPhoto = Boolean(req.body?.image?.dataUrl);
    const tier = resolvePipUsageTier({ user: access.user, subscription: access.subscription });
    const payloadCheck = validateChatPayload({
      message: req.body?.message,
      history: req.body?.history,
      image: req.body?.image,
      tier
    });
    if (!payloadCheck.ok) {
      res.status(payloadCheck.statusCode).json({ error: payloadCheck.error, message: payloadCheck.message });
      return;
    }

    if (hasPhoto) {
      if (!access.user?.id || !access.subscription?.verified) {
        res.status(401).json({
          error: "photo_account_required",
          message: "Create a free HydroPip account to get five complimentary Build Checks. Pip will save the advice with your build conversation."
        });
        return;
      }

      await upsertUser(access.user);
      const project = req.body?.projectId
        ? await getProject({ userId: access.user.id, projectId: req.body.projectId })
        : null;
      const classification = classifyPhotoRequest({
        message: req.body?.message,
        projectType: project?.type,
        subscription: access.subscription
      });

      if (classification.access === "question_required") {
        res.status(400).json({ error: "photo_question_required", message: classification.message });
        return;
      }
      if (classification.access === "pip_pro_required") {
        photoAllowance = await getBuildPhotoAllowance({ userId: access.user.id, subscription: access.subscription });
        res.status(402).json({
          error: "photo_pro_required",
          message: classification.message,
          subscriptionRequired: true,
          upgradeCta: { label: "See Pip Pro", url: "https://www.hydropip.com/pip?pro=1" },
          photoAllowance
        });
        return;
      }

      photoAllowance = await claimBuildPhotoCheck({ userId: access.user.id, subscription: access.subscription });
      if (!photoAllowance.allowed) {
        res.status(402).json({
          error: "photo_limit_reached",
          message: "You have used your five complimentary HydroPip Build Checks. Text-based HydroPip build help stays available, and ongoing photo guidance is included with Pip Pro.",
          subscriptionRequired: true,
          upgradeCta: { label: "See Pip Pro", url: "https://www.hydropip.com/pip?pro=1" },
          photoAllowance
        });
        return;
      }
      claimedPhotoCheck = !access.subscription?.active;
    }

    const result = await askPip({
      ...(req.body || {}),
      user: access.user,
      subscription: access.subscription,
      beforeAiCall: async () => {
        if (access.user?.id) await upsertUser(access.user);
        const usageRequest = {
          message: req.body?.message,
          history: req.body?.history,
          hasPhoto,
          photoIntent: req.body?.image?.intent
        };
        const creditsRequired = estimateAiCreditCost(usageRequest);
        aiReservation = await reserveAiUsage({
          userId: access.user?.id || null,
          ipHash: clientIpHash(req),
          tier,
          creditsRequired,
          eventType: aiUsageEventType(usageRequest),
          metadata: {
            projectId: req.body?.projectId || null,
            conversationId: req.body?.conversationId || null,
            hasPhoto,
            photoIntent: aiUsageEventType(usageRequest) === "seed_inventory_photo" ? "seed_inventory" : null
          }
        });
        if (!aiReservation.allowed) {
          const monthly = aiReservation.limitKind === "monthly" || aiReservation.limitKind === "global_monthly";
          const error = new Error(monthly ? "Pip monthly AI limit reached" : "Pip daily AI limit reached");
          error.statusCode = 402;
          error.code = monthly ? "pip_monthly_limit_reached" : "pip_daily_limit_reached";
          error.payload = monthly
            ? makeMonthlyLimitPayload({ ...aiReservation, global: aiReservation.limitKind === "global_monthly" })
            : makeDailyLimitPayload(aiReservation);
          throw error;
        }
      }
    });

    if (aiReservation?.allowed) {
      if (result.aiUsage) {
        const estimatedCostUsd = estimateModelCost(result.aiUsage);
        const completedCredits = result.mode === "seed_inventory_confirmation"
          ? estimateAiCreditCost({ hasPhoto: true, photoIntent: "seed_inventory" })
          : aiReservation.creditsRequired;
        const completedUsage = await completeAiUsage({
          reservationId: aiReservation.reservationId,
          model: result.aiUsage.model,
          inputTokens: result.aiUsage.inputTokens,
          outputTokens: result.aiUsage.outputTokens,
          estimatedCostUsd,
          creditsUsed: completedCredits,
          metadata: { mode: result.mode }
        });
        const creditsUsed = completedUsage?.creditsUsed ?? completedCredits;
        const creditRefund = Math.max(0, aiReservation.creditsRequired - creditsUsed);
        result.usage = {
          creditsUsed,
          funding: aiReservation.funding,
          dailyLimit: aiReservation.dailyLimit,
          monthlyLimit: aiReservation.monthlyLimit,
          usedToday: aiReservation.usedToday + (aiReservation.funding === "included" ? creditsUsed : 0),
          usedThisMonth: aiReservation.usedThisMonth + creditsUsed,
          topUpBalance: aiReservation.topUpBalance + (aiReservation.funding === "top_up" ? creditRefund : 0),
          resetAt: aiReservation.resetAt
        };
        aiReservation = null;
      } else {
        await cancelAiUsageReservation({ reservationId: aiReservation.reservationId, reason: "Pip used a local fallback" });
        aiReservation = null;
      }
    }

    if (hasPhoto && claimedPhotoCheck && !photoAnalysisSucceeded(result)) {
      photoAllowance = await refundBuildPhotoCheck({ userId: access.user.id, subscription: access.subscription });
      claimedPhotoCheck = false;
    }
    if (hasPhoto) {
      result.photoAllowance = photoAllowance || await getBuildPhotoAllowance({ userId: access.user.id, subscription: access.subscription });
    }
    res.json(result);
  } catch (error) {
    if (aiReservation?.allowed) {
      try {
        await cancelAiUsageReservation({ reservationId: aiReservation.reservationId, reason: "OpenAI call failed" });
      } catch (refundError) {
        console.warn(`Could not refund failed Pip AI usage: ${refundError.message}`);
      }
      aiReservation = null;
    }
    if (claimedPhotoCheck && access?.user?.id) {
      try {
        await refundBuildPhotoCheck({ userId: access.user.id, subscription: access.subscription });
      } catch (refundError) {
        console.warn(`Could not refund failed Build Check: ${refundError.message}`);
      }
    }
    if (error.code === "pip_daily_limit_reached" || error.code === "pip_monthly_limit_reached") {
      res.status(error.statusCode || 402).json(error.payload || makeDailyLimitPayload({}));
      return;
    }
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  if (error.code !== "pip_cors_origin_denied") console.error(error);
  res.status(error.statusCode || 500).json({
    error: error.code === "pip_cors_origin_denied" ? "cors_origin_denied" : error.statusCode && error.code ? error.code : "pip_error",
    message: error.statusCode ? error.message : "Pip hit a server-side issue. Check the backend logs."
  });
});

function contentSecurityPolicy() {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data: https:",
    "connect-src 'self' https://www.hydropip.com https://hydropip.com https://*.wix.com https://*.wixsite.com https://*.wixstatic.com",
    "frame-src 'self' https:",
    "frame-ancestors 'self' https://www.hydropip.com https://hydropip.com https://*.wixsite.com https://*.wixstudio.com",
    "form-action 'self' https://www.hydropip.com https://hydropip.com"
  ];
  if (process.env.NODE_ENV === "production") directives.push("upgrade-insecure-requests");
  return directives.join("; ");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  app.listen(port, () => {
    console.log(`HydroPip Pip API running on port ${port}`);
  });
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

export function optionalPipSession(req) {
  const signed = sessionFromRequest(req);
  if (signed) {
    return {
      user: {
        id: signed.sub,
        email: signed.email || null,
        name: signed.name || null,
        wixMemberId: signed.sub
      },
      subscription: {
        active: Boolean(signed.pro),
        plan: signed.plan || "free_member",
        planName: signed.planName || null,
        beta: Boolean(signed.beta),
        verified: true
      }
    };
  }

  const allowUnsignedDev = process.env.NODE_ENV !== "production"
    && String(process.env.PIP_ALLOW_UNSIGNED_DEV_SESSIONS || "false").toLowerCase() === "true";
  if (!allowUnsignedDev || signedSessionsRequired()) {
    return { user: null, subscription: { active: false, plan: "visitor", verified: false } };
  }

  const legacyUser = req.body?.user || null;
  return {
    user: legacyUser,
    subscription: {
      ...(req.body?.subscription || { active: false, plan: legacyUser ? "free_member" : "visitor" }),
      verified: false
    }
  };
}

function requirePipBeta(req, res, next) {
  requirePipMember(req, res, async () => {
    try {
      const approvedApplicant = await betaApplicationGrantsAccess({ email: req.pipUser?.email });
      if (!req.pipSubscription?.beta && !approvedApplicant) {
        res.status(403).json({ error: "beta_access_required" });
        return;
      }
      if (approvedApplicant) {
        req.pipSubscription = { ...req.pipSubscription, active: true, beta: true, plan: "pip_pro", planName: req.pipSubscription?.planName || "HydroPip Beta Tester" };
      }
      next();
    } catch (error) {
      next(error);
    }
  });
}

function requirePipAdmin(req, res, next) {
  if (!adminRequestAllowed(req)) {
    res.status(401).json({ error: "admin_key_required", message: "Enter the HydroPip beta admin key." });
    return;
  }
  const ipStatus = adminIpStatus(req);
  setAdminIpHeaders(res, ipStatus);
  if (ipStatus.mode === "enforce" && ipStatus.configured && !ipStatus.matched) {
    res.status(403).json({
      error: "admin_ip_not_allowed",
      message: "This network is not on the HydroPip admin allowlist.",
      observedIp: ipStatus.ip
    });
    return;
  }
  res.set("Cache-Control", "no-store");
  next();
}

function requireAdminRecoveryKey(req, res, next) {
  if (!adminKeyRequestAllowed(req)) {
    res.status(401).json({ error: "admin_key_required", message: "Enter the Render PIP_ADMIN_KEY to recover or enroll this device." });
    return;
  }
  requireAdminNetwork(req, res, next);
}

function requireAdminNetwork(req, res, next) {
  const ipStatus = adminIpStatus(req);
  setAdminIpHeaders(res, ipStatus);
  if (ipStatus.mode === "enforce" && ipStatus.configured && !ipStatus.matched) {
    res.status(403).json({
      error: "admin_ip_not_allowed",
      message: "This network is not on the HydroPip admin allowlist.",
      observedIp: ipStatus.ip
    });
    return;
  }
  next();
}

function setAdminSessionCookie(res) {
  const token = issueAdminSession();
  if (!token) throw Object.assign(new Error("PIP_ADMIN_KEY is not configured"), { statusCode: 503, code: "admin_session_unavailable" });
  const configured = Number(process.env.PIP_ADMIN_SESSION_TTL_SECONDS);
  const ttlSeconds = Number.isFinite(configured)
    ? Math.max(300, Math.min(7 * 24 * 60 * 60, Math.floor(configured)))
    : 8 * 60 * 60;
  res.cookie(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: ttlSeconds * 1000
  });
}

function clearAdminSessionCookie(res) {
  res.clearCookie(ADMIN_SESSION_COOKIE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/"
  });
}

function adminPasskeyRateLimit(req, res, next) {
  const ip = requestIp(req);
  const now = Date.now();
  const recent = (adminPasskeyHits.get(ip) || []).filter((timestamp) => now - timestamp < 60_000);
  if (recent.length >= 20) {
    res.status(429).json({ error: "admin_auth_rate_limited", message: "Too many admin unlock attempts. Wait a minute and try again." });
    return;
  }
  recent.push(now);
  adminPasskeyHits.set(ip, recent);
  next();
}

function serveAdminPage(file) {
  return (req, res) => {
    res.set("Cache-Control", "private, no-store, max-age=0");
    res.set("Pragma", "no-cache");
    if (process.env.NODE_ENV === "production" && String(process.env.PIP_ENABLE_ADMIN_UI || "false").toLowerCase() !== "true") {
      res.status(404).json({ error: "not_found" });
      return;
    }
    const ipStatus = adminIpStatus(req);
    setAdminIpHeaders(res, ipStatus);
    if (ipStatus.mode === "enforce" && ipStatus.configured && !ipStatus.matched) {
      res.status(403).json({
        error: "admin_ip_not_allowed",
        message: "This network is not on the HydroPip admin allowlist. Change PIP_ADMIN_IP_MODE to observe in Render to recover access."
      });
      return;
    }
    res.sendFile(path.join(rootDir, file));
  };
}

function adminIpRules() {
  return String(process.env.PIP_ADMIN_ALLOWED_IPS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function adminIpMode() {
  return String(process.env.PIP_ADMIN_IP_MODE || "observe").trim().toLowerCase() === "enforce"
    ? "enforce"
    : "observe";
}

function normalizeIp(value) {
  let ip = String(value || "").trim().replace(/^\[|\]$/g, "");
  const zoneIndex = ip.indexOf("%");
  if (zoneIndex >= 0) ip = ip.slice(0, zoneIndex);
  if (ip.toLowerCase().startsWith("::ffff:") && net.isIP(ip.slice(7)) === 4) ip = ip.slice(7);
  return ip;
}

function ipMatchesRule(address, rawRule) {
  const ip = normalizeIp(address);
  const rule = String(rawRule || "").trim();
  const slash = rule.lastIndexOf("/");
  if (slash < 0) return normalizeIp(rule) === ip;
  const network = normalizeIp(rule.slice(0, slash));
  const family = net.isIP(network);
  if (!family || net.isIP(ip) !== family) return false;
  const prefix = Number(rule.slice(slash + 1));
  const maximum = family === 4 ? 32 : 128;
  if (!Number.isInteger(prefix) || prefix < 0 || prefix > maximum) return false;
  const blockList = new net.BlockList();
  blockList.addSubnet(network, prefix, family === 4 ? "ipv4" : "ipv6");
  return blockList.check(ip, family === 4 ? "ipv4" : "ipv6");
}

function adminIpStatus(req) {
  const ip = normalizeIp(requestIp(req));
  const rules = adminIpRules();
  return {
    mode: adminIpMode(),
    ip,
    configured: rules.length > 0,
    matched: rules.length === 0 || rules.some((rule) => ipMatchesRule(ip, rule)),
    ruleCount: rules.length
  };
}

function setAdminIpHeaders(res, status) {
  res.set("X-Pip-Admin-Ip-Mode", status.mode);
  res.set("X-Pip-Admin-Ip-Match", String(status.matched));
  res.set("X-Pip-Admin-Observed-Ip", status.ip);
}

function consumeSessionExchange(req) {
  const now = Date.now();
  for (const [key, expiresAt] of exchangeNonces) {
    if (expiresAt <= now) exchangeNonces.delete(key);
  }
  const memberId = String(req.body?.member?.id || req.body?.member?._id || "").trim();
  const rateKey = memberId || requestIp(req);
  const recent = (sessionExchangeHits.get(rateKey) || []).filter((timestamp) => now - timestamp < 60_000);
  if (recent.length >= 20) return { allowed: false, statusCode: 429, error: "session_exchange_rate_limited" };
  recent.push(now);
  sessionExchangeHits.set(rateKey, recent);

  const nonce = String(req.headers["x-pip-exchange-nonce"] || req.body?.exchangeNonce || "").trim();
  const nonceRequired = String(process.env.PIP_REQUIRE_EXCHANGE_NONCE || "false").toLowerCase() === "true";
  if (!nonce) return nonceRequired
    ? { allowed: false, statusCode: 400, error: "exchange_nonce_required" }
    : { allowed: true };
  if (!/^[a-z0-9._:-]{16,200}$/i.test(nonce)) return { allowed: false, statusCode: 400, error: "invalid_exchange_nonce" };
  if (exchangeNonces.has(nonce)) return { allowed: false, statusCode: 409, error: "exchange_nonce_replayed" };
  exchangeNonces.set(nonce, now + 10 * 60_000);
  return { allowed: true };
}

function requestIp(req) {
  return String(req.ip || req.socket?.remoteAddress || "unknown").trim();
}

export { adminIpStatus, app, ipMatchesRule, normalizeIp };

function betaApplicationRateLimit(req, res, next) {
  const ip = requestIp(req);
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const recent = (betaApplicationHits.get(ip) || []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= 5) {
    res.status(429).json({ error: "application_rate_limited", message: "We already received several applications from this connection. Please try again later." });
    return;
  }
  recent.push(now);
  betaApplicationHits.set(ip, recent);
  next();
}

function feedbackRateLimit(req, res, next) {
  const key = req.pipUser?.id || requestIp(req);
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const recent = (feedbackHits.get(key) || []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= 12) {
    res.status(429).json({ error: "feedback_rate_limited", message: "Thanks for helping HydroPip. Please wait a little before sending another suggestion." });
    return;
  }
  recent.push(now);
  feedbackHits.set(key, recent);
  next();
}

function conversionRateLimit(req, res, next) {
  const ip = requestIp(req);
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const recent = (conversionHits.get(ip) || []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= 180) {
    res.status(429).json({ error: "conversion_rate_limited" });
    return;
  }
  recent.push(now);
  conversionHits.set(ip, recent);
  next();
}

function betaAdminSummary({ applications, feedback, testers }) {
  const completed = testers.filter((tester) => tester.completed === tester.total).length;
  return {
    applicants: applications.length,
    newApplicants: applications.filter((item) => item.status === "new").length,
    invited: applications.filter((item) => ["invited", "active"].includes(item.status)).length,
    feedback: feedback.length,
    unresolvedFeedback: feedback.filter((item) => !["resolved", "closed"].includes(item.reviewStatus)).length,
    negativeAnswers: feedback.filter((item) => item.rating === "not_helpful").length,
    activeTesters: testers.length,
    completedTesters: completed
  };
}
