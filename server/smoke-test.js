import assert from "node:assert/strict";
import { askPip, compactAnswer, normalizeImageInput, stripSummaryLabel } from "./pipAgent.js";
import {
  appendProjectMessage,
  claimBuildPhotoCheck,
  createProject,
  createProjectConversation,
  createProjectReading,
  createProjectReminder,
  createProjectSeed,
  createBetaApplication,
  createBetaFeedback,
  cancelAiUsageReservation,
  completeAiUsage,
  deleteUserData,
  deleteProjectSeed,
  getMemoryHealth,
  getBetaExperience,
  getBuildPhotoAllowance,
  getDailyAiUsageSummary,
  getCalendarByToken,
  getOrCreateCalendarSubscription,
  getPipCreditBalance,
  getProjectTemplates,
  listProjectMessages,
  listProjectConversations,
  listProjectReminders,
  listProjectSeeds,
  listProjects,
  listBetaApplications,
  listBetaFeedback,
  listBetaTesterProgress,
  resetMemoryForTests,
  refundBuildPhotoCheck,
  reserveAiUsage,
  revokeCalendarSubscription,
  grantPipCredits,
  seedProjectConversationDefaults,
  seedProjectDefaults,
  updateProjectConversation,
  updateProjectReminder,
  updateBetaExperience,
  updateBetaApplicationReview,
  updateBetaFeedbackReview,
  updateProject,
  upsertUser
} from "./pipMemory.js";
import { createGrowPlan, createReminder, getBuildStep, recommendParts } from "./pipTools.js";
import { retrieveHydroPipContext } from "./ragStore.js";
import { issuePipSession, verifyPipSession } from "./pipAuth.js";
import { classifyPhotoRequest, photoAnalysisSucceeded } from "./pipPhotoAccess.js";
import { buildPipCalendar } from "./pipCalendar.js";
import { combineOpenAiUsage, estimateAiCreditCost, estimateModelCost, makeDailyLimitPayload, resolvePipUsageTier } from "./pipUsage.js";

process.env.PIP_BRIDGE_SECRET ||= "hydropip-smoke-test-secret";

assert.equal(normalizeImageInput({ dataUrl: "data:image/jpeg;base64,/9j/2Q==" }).mimeType, "image/jpeg");
assert.throws(() => normalizeImageInput({ dataUrl: "data:image/svg+xml;base64,PHN2Zz4=" }), /JPEG, PNG, or WebP/);

const signedSession = issuePipSession({
  member: { id: "test-user", email: "test@hydropip.com" },
  subscription: { active: true, beta: true, planName: "Pip Pro Beta Tester" }
});
assert.equal(verifyPipSession(signedSession).sub, "test-user");
assert.equal(verifyPipSession(signedSession).beta, true);
assert.equal(verifyPipSession(signedSession).planName, "Pip Pro Beta Tester");
assert.equal(verifyPipSession(`${signedSession}tampered`), null);
assert.equal(stripSummaryLabel("TL;DR: Use shorter feed cycles."), "Use shorter feed cycles.");
assert.equal(stripSummaryLabel("Summary: Check pH first."), "Check pH first.");
const linkedCompact = compactAnswer(
  `${"Check the vertical lift and pump head before changing the layout. ".repeat(14)}Pump: https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20`,
  "Will this layout work?",
  {}
);
assert.equal(linkedCompact.includes("https://www.amazon.com/dp/B07L54HB83?tag=hydrpip2002-20"), true);
assert.equal(linkedCompact.includes("As an Amazon Associate I earn from qualifying purchases."), true);
assert.equal(linkedCompact.split(/\s+/).filter(Boolean).length <= 100, true);

const steps = getBuildStep();
assert.equal(steps.steps.length >= 5, true);

const parts = recommendParts({ towerCount: 4 });
assert.equal(parts.parts.find((part) => part.name.includes("Four-pot")).suggestedQuantity, "8 orders total");

const plan = createGrowPlan({
  towerCount: 4,
  crop: "lettuce",
  plantingDate: "2026-08-01",
  climateMode: "warm",
  runoffLevel: "unknown"
});
assert.equal(plan.profile.reservoirGallons, 275);
assert.equal(plan.reminders.some((item) => item.title.includes("pH")), true);

const reminder = createReminder({ reminder: { title: "Check pH" }, subscription: { active: false } });
assert.equal(reminder.status, "subscription_required");

const retrieved = retrieveHydroPipContext("How do I fix no runoff from one tower?");
assert.equal(retrieved.matches.length > 0, true);
assert.equal(retrieved.matches.some((match) => /troubleshooting|feed/i.test(`${match.source} ${match.title}`)), true);

const answer = await askPip({ message: "How do I build the system?", subscription: { active: false } });
assert.equal(typeof answer.answer, "string");
assert.equal(answer.answer.length > 20, true);
assert.equal(Array.isArray(answer.sources), true);

resetMemoryForTests();
const memoryHealth = await getMemoryHealth();
assert.equal(memoryHealth.mode, "file");

const originalUsageEnv = {
  visitor: process.env.PIP_VISITOR_DAILY_AI_CREDITS,
  member: process.env.PIP_FREE_MEMBER_DAILY_AI_CREDITS,
  pro: process.env.PIP_PRO_DAILY_AI_CREDITS
};
process.env.PIP_VISITOR_DAILY_AI_CREDITS = "2";
process.env.PIP_FREE_MEMBER_DAILY_AI_CREDITS = "3";
process.env.PIP_PRO_DAILY_AI_CREDITS = "4";

async function consumeUsage({ userId, ipHash, tier, credits = 1, eventType = "text_answer" }) {
  const reservation = await reserveAiUsage({ userId, ipHash, tier, creditsRequired: credits, eventType });
  if (reservation.allowed) {
    await completeAiUsage({ reservationId: reservation.reservationId, model: "gpt-5-mini", inputTokens: 100, outputTokens: 50, estimatedCostUsd: estimateModelCost({ inputTokens: 100, outputTokens: 50 }) });
  }
  return reservation;
}

assert.equal((await consumeUsage({ ipHash: "visitor-ip", tier: "visitor" })).allowed, true);
assert.equal((await consumeUsage({ ipHash: "visitor-ip", tier: "visitor" })).allowed, true);
const visitorBlocked = await consumeUsage({ ipHash: "visitor-ip", tier: "visitor" });
assert.equal(visitorBlocked.allowed, false);
assert.equal(visitorBlocked.dailyLimit, 2);
assert.equal(visitorBlocked.usedToday, 2);

await upsertUser({ id: "usage-free" });
for (let index = 0; index < 3; index += 1) assert.equal((await consumeUsage({ userId: "usage-free", ipHash: "free-ip", tier: "free_member" })).allowed, true);
assert.equal((await consumeUsage({ userId: "usage-free", ipHash: "free-ip", tier: "free_member" })).allowed, false);

await upsertUser({ id: "usage-pro" });
for (let index = 0; index < 4; index += 1) assert.equal((await consumeUsage({ userId: "usage-pro", ipHash: "pro-ip", tier: "pip_pro" })).allowed, true);
assert.equal((await consumeUsage({ userId: "usage-pro", ipHash: "pro-ip", tier: "pip_pro" })).allowed, false);

await upsertUser({ id: "usage-topup" });
for (let index = 0; index < 3; index += 1) await consumeUsage({ userId: "usage-topup", ipHash: "topup-ip", tier: "free_member" });
await grantPipCredits({ userId: "usage-topup", amount: 5, reason: "Smoke test grant" });
const topUpSpend = await consumeUsage({ userId: "usage-topup", ipHash: "topup-ip", tier: "free_member", credits: 3, eventType: "detailed_answer" });
assert.equal(topUpSpend.allowed, true);
assert.equal(topUpSpend.funding, "top_up");
assert.equal(await getPipCreditBalance({ userId: "usage-topup" }), 2);

process.env.PIP_FREE_MEMBER_DAILY_AI_CREDITS = "0";
await upsertUser({ id: "usage-refund" });
await grantPipCredits({ userId: "usage-refund", amount: 2, reason: "Refund test grant" });
const failedReservation = await reserveAiUsage({ userId: "usage-refund", ipHash: "refund-ip", tier: "free_member", creditsRequired: 1, eventType: "text_answer" });
assert.equal(await getPipCreditBalance({ userId: "usage-refund" }), 1);
assert.equal((await cancelAiUsageReservation({ reservationId: failedReservation.reservationId })).refunded, 1);
assert.equal(await getPipCreditBalance({ userId: "usage-refund" }), 2);
assert.equal((await getDailyAiUsageSummary({ userId: "usage-refund", ipHash: "refund-ip", tier: "free_member" })).eventCountToday, 0);

assert.equal(estimateAiCreditCost({ message: "Quick question", hasPhoto: true }), 10);
assert.equal(estimateAiCreditCost({ message: "Give me a detailed walkthrough" }), 3);
assert.equal(estimateAiCreditCost({ message: "Quick question" }), 1);
assert.equal(estimateModelCost({ inputTokens: 100, outputTokens: 50 }), 0.000125);
assert.deepEqual(combineOpenAiUsage({ usage: { input_tokens: 100, output_tokens: 50 } }), { inputTokens: 100, outputTokens: 50 });
assert.deepEqual(combineOpenAiUsage({}), { inputTokens: null, outputTokens: null });
assert.equal(makeDailyLimitPayload({ dailyLimit: 5, usedToday: 5, creditsRequired: 1 }).error, "pip_daily_limit_reached");
const privacyReservation = await reserveAiUsage({ ipHash: "privacy-ip", tier: "visitor", creditsRequired: 1, eventType: "text_answer", metadata: { prompt: "do not store", safeFlag: true } });
const privacyEvent = await completeAiUsage({ reservationId: privacyReservation.reservationId, model: "gpt-5-mini", inputTokens: 10, outputTokens: 5, estimatedCostUsd: 0.0000125 });
assert.equal(Object.hasOwn(privacyEvent.metadata, "prompt"), false);
assert.equal(privacyEvent.metadata.safeFlag, true);
assert.equal(resolvePipUsageTier({ user: { id: "member" }, subscription: { active: true, verified: false } }), "free_member");
assert.equal(resolvePipUsageTier({ user: { id: "member" }, subscription: { active: true, verified: true } }), "pip_pro");
const priorOpenAiKey = process.env.OPENAI_API_KEY;
process.env.OPENAI_API_KEY = "unused-smoke-key";
let deterministicGateCalls = 0;
const deterministicAnswer = await askPip({
  message: "What piece goes on the end of the main hose?",
  subscription: { active: false },
  beforeAiCall: async () => { deterministicGateCalls += 1; }
});
assert.equal(deterministicAnswer.mode, "rules_direct");
assert.equal(deterministicGateCalls, 0);
assert.equal((await getDailyAiUsageSummary({ ipHash: "rules-only-ip", tier: "visitor" })).usedToday, 0);
const priorAiDisabled = process.env.PIP_AI_DISABLED;
process.env.PIP_AI_DISABLED = "true";
let disabledGateCalls = 0;
const disabledAnswer = await askPip({
  message: "How does nutrient chelation affect uptake in warm water?",
  subscription: { active: false },
  beforeAiCall: async () => { disabledGateCalls += 1; }
});
assert.equal(disabledAnswer.mode, "rules_fallback");
assert.equal(disabledGateCalls, 0);
if (priorAiDisabled === undefined) delete process.env.PIP_AI_DISABLED;
else process.env.PIP_AI_DISABLED = priorAiDisabled;
if (priorOpenAiKey === undefined) delete process.env.OPENAI_API_KEY;
else process.env.OPENAI_API_KEY = priorOpenAiKey;

for (const [key, value] of Object.entries(originalUsageEnv)) {
  const name = key === "visitor" ? "PIP_VISITOR_DAILY_AI_CREDITS" : key === "member" ? "PIP_FREE_MEMBER_DAILY_AI_CREDITS" : "PIP_PRO_DAILY_AI_CREDITS";
  if (value === undefined) delete process.env[name];
  else process.env[name] = value;
}
resetMemoryForTests();

const templates = getProjectTemplates();
assert.equal(templates.templates.some((template) => template.id === "existing_system_setup"), true);

const freeProject = await createProject({
  user: { id: "test-user", email: "test@example.com" },
  type: "hydropip_build",
  title: "Backyard HydroPip",
  systemProfile: {
    systemType: "hydropip_tower",
    growZone: "9",
    location: "Ocala, FL",
    areaType: "outdoor_open",
    exposure: "full_sun",
    reservoirGallons: 275,
    crops: ["lettuce"],
    goals: ["steady_harvests"]
  },
  subscription: { active: false }
});
assert.equal(freeProject.status, "created");
assert.equal(freeProject.project.systemProfile.growZone, "9");
assert.equal(freeProject.project.systemProfile.areaType, "outdoor_open");
assert.deepEqual(freeProject.project.systemProfile.goals, ["steady_harvests"]);

const betaStart = await getBetaExperience({ userId: "test-user" });
assert.equal(betaStart.welcomeSeenAt, null);
assert.equal(betaStart.activity.feedback, false);
const betaUpdated = await updateBetaExperience({
  userId: "test-user",
  welcomeSeen: true,
  activity: { profile: true, reminder: true }
});
assert.equal(Boolean(betaUpdated.welcomeSeenAt), true);
assert.equal(betaUpdated.activity.profile, true);
assert.equal(betaUpdated.activity.reminder, true);
const privateFeedback = await createBetaFeedback({
  userId: "test-user",
  feedback: {
    rating: "not_helpful",
    category: "pip_answer",
    message: "The answer missed the fitting.",
    includeContext: false,
    prompt: "private prompt",
    response: "private response"
  }
});
assert.equal(privateFeedback.prompt, null);
assert.equal(privateFeedback.response, null);
assert.equal((await getBetaExperience({ userId: "test-user" })).activity.feedback, true);
const betaApplication = await createBetaApplication({
  application: {
    name: "Garden Tester",
    email: "tester@example.com",
    experience: "beginner",
    buildTimeline: "within_30_days",
    systemInterest: "both",
    growZone: "9a",
    region: "Central Florida",
    growArea: "outdoor",
    devices: ["iphone", "desktop"],
    testingCommitment: true,
    motivation: "I want to test a real build.",
    consent: true
  }
});
assert.equal(betaApplication.status, "new");
assert.equal((await listBetaApplications({})).length, 1);
const updatedApplication = await updateBetaApplicationReview({ id: betaApplication.id, status: "shortlisted", adminNotes: "Good device mix" });
assert.equal(updatedApplication.status, "shortlisted");
assert.equal(updatedApplication.adminNotes, "Good device mix");
const feedbackList = await listBetaFeedback({ rating: "not_helpful" });
assert.equal(feedbackList.length, 1);
const reviewedFeedback = await updateBetaFeedbackReview({ id: privateFeedback.id, status: "reviewing", priority: "high", adminNotes: "Reproduce fitting question" });
assert.equal(reviewedFeedback.reviewStatus, "reviewing");
assert.equal(reviewedFeedback.priority, "high");
const testerProgress = await listBetaTesterProgress({});
assert.equal(testerProgress.some((tester) => tester.id === "test-user" && tester.completed >= 3), true);

assert.equal(classifyPhotoRequest({ message: "Is this tower section seated correctly?", projectType: "hydropip_build" }).access, "free_build");
assert.equal(classifyPhotoRequest({ message: "What bug is eating these leaves?", projectType: "hydropip_build" }).access, "pip_pro_required");
assert.equal(classifyPhotoRequest({ message: "", projectType: "hydropip_build" }).access, "question_required");
assert.equal(classifyPhotoRequest({ message: "Diagnose this root photo", subscription: { active: true } }).access, "pip_pro");
assert.equal(photoAnalysisSucceeded({ mode: "ai_rag" }), true);
assert.equal(photoAnalysisSucceeded({ mode: "ai_error_fallback" }), false);
assert.equal((await getBuildPhotoAllowance({ userId: "test-user" })).remaining, 5);
for (let index = 0; index < 5; index += 1) {
  const claimed = await claimBuildPhotoCheck({ userId: "test-user" });
  assert.equal(claimed.allowed, true);
  assert.equal(claimed.remaining, 4 - index);
}
assert.equal((await claimBuildPhotoCheck({ userId: "test-user" })).allowed, false);
assert.equal((await refundBuildPhotoCheck({ userId: "test-user" })).remaining, 1);
assert.equal((await claimBuildPhotoCheck({ userId: "test-user" })).remaining, 0);
assert.equal((await getBuildPhotoAllowance({ userId: "test-user", subscription: { active: true } })).tier, "pip_pro");

const defaultConversations = await listProjectConversations({ userId: "test-user", projectId: freeProject.project.id });
assert.equal(defaultConversations.length, 1);
assert.equal(defaultConversations[0].title, "HydroPip Build");

const freeConversationBlocked = await createProjectConversation({
  userId: "test-user",
  projectId: freeProject.project.id,
  title: "Bugs and pests",
  subscription: { active: false }
});
assert.equal(freeConversationBlocked.status, "subscription_required");

const pestConversation = await createProjectConversation({
  userId: "test-user",
  projectId: freeProject.project.id,
  title: "Bugs and pests",
  subscription: { active: true }
});
assert.equal(pestConversation.status, "created");
await appendProjectMessage({ userId: "test-user", projectId: freeProject.project.id, conversationId: defaultConversations[0].id, role: "user", content: "I am stacking the first tower." });
await appendProjectMessage({ userId: "test-user", projectId: freeProject.project.id, conversationId: pestConversation.conversation.id, role: "user", content: "I found aphids." });
const buildMessages = await listProjectMessages({ userId: "test-user", projectId: freeProject.project.id, conversationId: defaultConversations[0].id });
const pestMessages = await listProjectMessages({ userId: "test-user", projectId: freeProject.project.id, conversationId: pestConversation.conversation.id });
assert.deepEqual(buildMessages.map((item) => item.content), ["I am stacking the first tower."]);
assert.deepEqual(pestMessages.map((item) => item.content), ["I found aphids."]);
assert.equal((await listProjectMessages({ userId: "test-user", projectId: freeProject.project.id, allConversations: true })).length, 2);
const renamedConversation = await updateProjectConversation({ userId: "test-user", projectId: freeProject.project.id, conversationId: pestConversation.conversation.id, patch: { title: "Pests" }, subscription: { active: true } });
assert.equal(renamedConversation.conversation.title, "Pests");
const archivedConversation = await updateProjectConversation({ userId: "test-user", projectId: freeProject.project.id, conversationId: pestConversation.conversation.id, patch: { status: "archived" }, subscription: { active: true } });
assert.equal(archivedConversation.conversation.status, "archived");
const lastConversationBlocked = await updateProjectConversation({ userId: "test-user", projectId: freeProject.project.id, conversationId: defaultConversations[0].id, patch: { status: "archived" }, subscription: { active: true } });
assert.equal(lastConversationBlocked.status, "last_conversation");

const starterSeedBlocked = await seedProjectConversationDefaults({
  userId: "test-user",
  projectId: freeProject.project.id,
  subscription: { active: false }
});
assert.equal(starterSeedBlocked.status, "subscription_required");

const starterSeeded = await seedProjectConversationDefaults({
  userId: "test-user",
  projectId: freeProject.project.id,
  subscription: { active: true }
});
assert.equal(starterSeeded.created, 7);
const starterConversations = await listProjectConversations({ userId: "test-user", projectId: freeProject.project.id });
assert.equal(starterConversations.length, 8);
assert.equal(starterConversations.some((item) => item.title === "Crop Planning & Rotation"), true);
assert.equal(starterConversations.some((item) => item.title === "Bugs & Plant Health"), true);
assert.equal((await seedProjectConversationDefaults({ userId: "test-user", projectId: freeProject.project.id, subscription: { active: true } })).created, 0);

const updatedGrow = await updateProject({
  userId: "test-user",
  projectId: freeProject.project.id,
  patch: {
    title: "Backyard greens",
    systemProfile: {
      ...freeProject.project.systemProfile,
      systemStage: "growing",
      plantingDate: "2026-08-02"
    }
  }
});
assert.equal(updatedGrow.title, "Backyard greens");
assert.equal(updatedGrow.systemProfile.systemStage, "growing");
assert.equal(updatedGrow.systemProfile.plantingDate, "2026-08-02");

const existingSystemBlocked = await createProject({
  user: { id: "test-user" },
  type: "existing_system_setup",
  systemProfile: { systemType: "dwc", reservoirGallons: 27, crops: ["lettuce"] },
  subscription: { active: false }
});
assert.equal(existingSystemBlocked.status, "subscription_required");

const existingSystemPaid = await createProject({
  user: { id: "test-user" },
  type: "existing_system_setup",
  systemProfile: { systemType: "dwc", reservoirGallons: 27, crops: ["lettuce"] },
  subscription: { active: true, plan: "pip_pro" }
});
assert.equal(existingSystemPaid.status, "created");

const paidBlocked = await createProject({
  user: { id: "test-user" },
  type: "crop_schedule",
  subscription: { active: false }
});
assert.equal(paidBlocked.status, "subscription_required");

const paidProject = await createProject({
  user: { id: "test-user" },
  type: "crop_schedule",
  systemProfile: { plantingDate: "2026-08-10", crops: ["leafy_greens"] },
  subscription: { active: true, plan: "pip_pro" }
});
assert.equal(paidProject.status, "created");

const savedReminder = await createProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminder: { title: "Check pH", dueDate: "2026-08-02" },
  subscription: { active: true }
});
assert.equal(savedReminder.status, "queued");
await createProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminder: { title: "Old daily-looking starter task", note: "hydropip_default", dueDate: "2026-08-03", repeat: { frequency: "weekly" } },
  subscription: { active: true }
});

const defaultSchedule = await seedProjectDefaults({
  userId: "test-user",
  projectId: paidProject.project.id,
  subscription: { active: true }
});
assert.equal(defaultSchedule.reminders.length, 6);
assert.equal(defaultSchedule.removedCount, 1);
assert.equal(defaultSchedule.reminders.some((item) => item.title.includes("Plant or transplant leafy greens")), true);
assert.equal(defaultSchedule.reminders.some((item) => item.title === "Weekly HydroPip check-in"), true);
assert.equal(defaultSchedule.reminders.some((item) => item.title === "Monthly HydroPip service"), true);
const savedSchedule = await listProjectReminders({ userId: "test-user", projectId: paidProject.project.id });
assert.equal(savedSchedule.some((item) => item.note === "hydropip_default"), false);
const readySchedule = await seedProjectDefaults({
  userId: "test-user",
  projectId: paidProject.project.id,
  subscription: { active: true }
});
assert.equal(readySchedule.status, "already_ready");
assert.equal(readySchedule.addedCount, 0);
const completedStarter = savedSchedule.find((item) => item.note === "hydropip_weekly_v2");
const completedRecurring = await updateProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminderId: completedStarter.id,
  patch: { status: "completed" },
  subscription: { active: true }
});
assert.equal(completedRecurring.reminder.status, "active");
assert.equal(completedRecurring.reminder.completionCount, 1);
assert.equal(new Date(completedRecurring.reminder.dueAt) > new Date(completedRecurring.reminder.lastCompletedAt), true);
await updateProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminderId: completedStarter.id,
  patch: { title: "My weekly garden check" },
  subscription: { active: true }
});
const restoredSchedule = await seedProjectDefaults({
  userId: "test-user",
  projectId: paidProject.project.id,
  subscription: { active: true }
});
assert.equal(restoredSchedule.status, "already_ready");
assert.equal(restoredSchedule.addedCount, 0);
const updatedReminder = await updateProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminderId: savedSchedule[0].id,
  patch: { title: "Updated HydroPip task", notify: true },
  subscription: { active: true }
});
assert.equal(updatedReminder.reminder.title, "Updated HydroPip task");
assert.equal(updatedReminder.reminder.notify, true);

const calendarSubscription = await getOrCreateCalendarSubscription({ userId: "test-user", subscription: { active: true } });
assert.equal(calendarSubscription.status, "ready");
assert.match(calendarSubscription.webcalUrl, /^webcal:/);
const calendarToken = calendarSubscription.url.match(/\/calendar\/([^/.]+)\.ics$/)?.[1];
const calendarData = await getCalendarByToken({ token: calendarToken });
const calendarText = buildPipCalendar(calendarData);
assert.match(calendarText, /BEGIN:VCALENDAR/);
assert.match(calendarText, /X-WR-CALNAME:HydroPip Planner/);
assert.match(calendarText, /RRULE:FREQ=WEEKLY/);
const duplicateCalendarText = buildPipCalendar({ reminders: [savedSchedule[0], savedSchedule[0]] });
assert.equal((duplicateCalendarText.match(/BEGIN:VEVENT/g) || []).length, 1);
const activeStarter = savedSchedule.find((item) => item.note === "hydropip_weekly_v2");
const completedDuplicateText = buildPipCalendar({ reminders: [{ ...activeStarter, status: "completed" }, activeStarter] });
assert.equal((completedDuplicateText.match(/BEGIN:VEVENT/g) || []).length, 1);
const legacyCalendarText = buildPipCalendar({ reminders: [{ ...savedSchedule[0], id: "legacy", note: "hydropip_default" }] });
assert.equal((legacyCalendarText.match(/BEGIN:VEVENT/g) || []).length, 0);
const timedLegacyDate = buildPipCalendar({ reminders: [{ ...savedSchedule[0], id: "date-only", dueAt: null, dueDate: "2026-08-15", note: "" }] });
assert.match(timedLegacyDate, /DTSTART:20260815T090000/);
assert.doesNotMatch(timedLegacyDate, /VALUE=DATE/);
await revokeCalendarSubscription({ userId: "test-user", subscription: { active: true } });
assert.equal(await getCalendarByToken({ token: calendarToken }), null);

const savedSeed = await createProjectSeed({
  userId: "test-user",
  projectId: paidProject.project.id,
  seed: { crop: "Lettuce", variety: "Buttercrunch", quantity: 100 },
  subscription: { active: true }
});
assert.equal(savedSeed.status, "saved");
assert.equal((await listProjectSeeds({ userId: "test-user", projectId: paidProject.project.id })).length, 1);
await deleteProjectSeed({
  userId: "test-user",
  projectId: paidProject.project.id,
  seedId: savedSeed.seed.id,
  subscription: { active: true }
});
assert.equal((await listProjectSeeds({ userId: "test-user", projectId: paidProject.project.id })).length, 0);

const blockedReading = await createProjectReading({
  userId: "test-user",
  projectId: freeProject.project.id,
  reading: { ph: 6.1 },
  subscription: { active: false }
});
assert.equal(blockedReading.status, "subscription_required");

const memoryAnswer = await askPip({
  message: "Remember this is my four tower HydroPip lettuce build.",
  user: { id: "test-user" },
  projectId: freeProject.project.id,
  subscription: { active: false }
});
assert.equal(typeof memoryAnswer.answer, "string");
assert.equal(memoryAnswer.projectMemory.active, true);
assert.equal(((await listProjectMessages({ userId: "test-user", projectId: freeProject.project.id })) || []).length >= 2, true);

const customSystemGate = await askPip({
  message: "Can you help me set up my DWC bucket?",
  subscription: { active: false }
});
assert.equal(customSystemGate.subscriptionRequired, true);
assert.equal(customSystemGate.mode, "subscription_gate");
assert.equal(customSystemGate.answer.includes("Pip Pro"), true);

const contextualPartAnswer = await askPip({
  message: "What size should it be?",
  history: [
    { role: "user", content: "I need the fitting for the end of the main hose so I can add towers later." },
    { role: "pip", content: "Use a shutoff valve and extension adapters at the end of the main feed hose." }
  ],
  subscription: { active: false }
});
assert.equal(contextualPartAnswer.answer.includes("3/4-inch"), true);
assert.equal(contextualPartAnswer.answer.includes("B013646334"), true);

const deletedData = await deleteUserData({ userId: "test-user" });
assert.equal(deletedData.deleted, true);
assert.equal((await listProjects({ userId: "test-user" })).length, 0);

console.log("Pip smoke tests passed");
