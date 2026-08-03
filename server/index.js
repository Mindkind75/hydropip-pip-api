import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { askPip } from "./pipAgent.js";
import { createGrowPlan, createReminder, getBuildStep, getWizardSchema, recommendParts } from "./pipTools.js";
import { retrieveHydroPipContext } from "./ragStore.js";
import {
  adminRequestAllowed,
  bridgeRequestAllowed,
  issuePipSession,
  sessionFromRequest,
  signedSessionsConfigured,
  signedSessionsRequired
} from "./pipAuth.js";
import {
  createBetaApplication,
  createProject,
  createProjectConversation,
  createProjectReading,
  createProjectReminder,
  createProjectSeed,
  createBetaFeedback,
  cancelAiUsageReservation,
  claimBuildPhotoCheck,
  completeAiUsage,
  deleteUserData,
  deleteProjectReminder,
  deleteProjectSeed,
  getMemoryHealth,
  getBuildPhotoAllowance,
  getBetaExperience,
  getProject,
  getProjectTemplates,
  getDailyAiUsageSummary,
  getCalendarByToken,
  getOrCreateCalendarSubscription,
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
  refundBuildPhotoCheck,
  reserveAiUsage,
  revokeCalendarSubscription,
  seedProjectConversationDefaults,
  seedProjectDefaults,
  updateProject,
  updateProjectConversation,
  updateProjectReminder,
  updateProjectSeed,
  updateBetaExperience,
  updateBetaApplicationReview,
  updateBetaFeedbackReview,
  upsertUser
} from "./pipMemory.js";
import { classifyPhotoRequest, photoAnalysisSucceeded } from "./pipPhotoAccess.js";
import { buildPipCalendar } from "./pipCalendar.js";
import {
  aiUsageEventType,
  clientIpHash,
  estimateAiCreditCost,
  estimateModelCost,
  makeDailyLimitPayload,
  pipAiDisabled,
  resolvePipUsageTier
} from "./pipUsage.js";

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
const betaApplicationHits = new Map();

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

app.get("/beta-test", (_req, res) => res.sendFile(path.join(rootDir, "beta-test.html")));
app.get("/beta-admin", (_req, res) => res.sendFile(path.join(rootDir, "beta-admin.html")));

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

app.get("/api/pip/calendar/:token.ics", async (req, res, next) => {
  try {
    const calendar = await getCalendarByToken({ token: req.params.token });
    if (!calendar) return res.status(404).type("text/plain").send("HydroPip calendar not found.");
    res.set({
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="hydropip-planner.ics"',
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow"
    });
    res.send(buildPipCalendar(calendar));
  } catch (error) {
    next(error);
  }
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

app.post("/api/pip/admin/credits/grant", async (req, res, next) => {
  if (!bridgeRequestAllowed(req)) {
    res.status(401).json({ error: "invalid_bridge_credentials" });
    return;
  }
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
    const [applications, feedback, testers] = await Promise.all([
      listBetaApplications({ status: req.query.status, limit: req.query.limit }),
      listBetaFeedback({
        status: req.query.feedbackStatus,
        category: req.query.category,
        rating: req.query.rating,
        limit: req.query.limit
      }),
      listBetaTesterProgress({ limit: req.query.limit })
    ]);
    res.json({
      applications,
      feedback,
      testers,
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

app.use("/api/pip/users", requirePipMember);
app.use("/api/pip/projects", requirePipMember);
app.use("/api/pip/feedback", requirePipBeta);

app.post("/api/pip/users", async (req, res, next) => {
  try {
    res.status(201).json({ user: await upsertUser(req.pipUser) });
  } catch (error) {
    next(error);
  }
});

app.get("/api/pip/users/me/calendar", async (req, res, next) => {
  try {
    await upsertUser(req.pipUser);
    const result = await getOrCreateCalendarSubscription({
      userId: req.pipUser.id,
      subscription: req.pipSubscription
    });
    res.status(result.status === "subscription_required" ? 402 : 200).json(result);
  } catch (error) {
    next(error);
  }
});

app.delete("/api/pip/users/me/calendar", async (req, res, next) => {
  try {
    const result = await revokeCalendarSubscription({
      userId: req.pipUser.id,
      subscription: req.pipSubscription
    });
    res.status(result.status === "subscription_required" ? 402 : 200).json(result);
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
    const feedback = await createBetaFeedback({ userId: req.pipUser.id, feedback: req.body?.feedback });
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
  let claimedPhotoCheck = false;
  let aiReservation = null;
  let access;
  try {
    access = optionalPipSession(req);
    let photoAllowance = null;
    const hasPhoto = Boolean(req.body?.image?.dataUrl);

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
          photoAllowance
        });
        return;
      }

      photoAllowance = await claimBuildPhotoCheck({ userId: access.user.id, subscription: access.subscription });
      if (!photoAllowance.allowed) {
        res.status(402).json({
          error: "photo_limit_reached",
          message: "You have used your five complimentary HydroPip Build Checks. Text build help stays available, or unlock ongoing photo guidance with Pip Pro: https://www.hydropip.com/pip?pro=1",
          subscriptionRequired: true,
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
        const tier = resolvePipUsageTier({ user: access.user, subscription: access.subscription });
        const creditsRequired = estimateAiCreditCost({ message: req.body?.message, hasPhoto });
        aiReservation = await reserveAiUsage({
          userId: access.user?.id || null,
          ipHash: clientIpHash(req),
          tier,
          creditsRequired,
          eventType: aiUsageEventType({ message: req.body?.message, hasPhoto }),
          metadata: {
            projectId: req.body?.projectId || null,
            conversationId: req.body?.conversationId || null,
            hasPhoto
          }
        });
        if (!aiReservation.allowed) {
          const error = new Error("Pip daily AI limit reached");
          error.statusCode = 402;
          error.code = "pip_daily_limit_reached";
          error.payload = makeDailyLimitPayload(aiReservation);
          throw error;
        }
      }
    });

    if (aiReservation?.allowed) {
      if (result.aiUsage) {
        const estimatedCostUsd = estimateModelCost(result.aiUsage);
        await completeAiUsage({
          reservationId: aiReservation.reservationId,
          model: result.aiUsage.model,
          inputTokens: result.aiUsage.inputTokens,
          outputTokens: result.aiUsage.outputTokens,
          estimatedCostUsd,
          metadata: { mode: result.mode }
        });
        result.usage = {
          creditsUsed: aiReservation.creditsRequired,
          funding: aiReservation.funding,
          dailyLimit: aiReservation.dailyLimit,
          usedToday: aiReservation.usedToday + (aiReservation.funding === "included" ? aiReservation.creditsRequired : 0),
          topUpBalance: aiReservation.topUpBalance,
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
    if (error.code === "pip_daily_limit_reached") {
      res.status(error.statusCode || 402).json(error.payload || makeDailyLimitPayload({}));
      return;
    }
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
      subscription: {
        active: Boolean(signed.pro),
        plan: signed.plan || "free_member",
        planName: signed.planName || null,
        beta: Boolean(signed.beta),
        verified: true
      }
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

function requirePipBeta(req, res, next) {
  requirePipMember(req, res, () => {
    if (!req.pipSubscription?.beta) {
      res.status(403).json({ error: "beta_access_required" });
      return;
    }
    next();
  });
}

function requirePipAdmin(req, res, next) {
  if (!adminRequestAllowed(req)) {
    res.status(401).json({ error: "admin_key_required", message: "Enter the HydroPip beta admin key." });
    return;
  }
  res.set("Cache-Control", "no-store");
  next();
}

function betaApplicationRateLimit(req, res, next) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = String(Array.isArray(forwarded) ? forwarded[0] : forwarded || req.ip || "unknown").split(",")[0].trim();
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
