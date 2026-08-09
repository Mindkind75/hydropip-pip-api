import assert from "node:assert/strict";
import path from "node:path";
import { askPip, assessAnswerRelevance, buildDirectCalendarConfirmation, buildDirectRhythmSetupAction, classifyQuestionIntent, compactAnswer, normalizeImageInput, stripSummaryLabel } from "./pipAgent.js";
import { fallbackAnswer } from "./pipTools.js";
import {
  addProjectSeedPacks,
  applyProjectReminderAction,
  appendProjectMessage,
  claimBuildPhotoCheck,
  createProject,
  createProjectConversation,
  createProjectReading,
  createProjectReminder,
  createProjectSeed,
  createBetaApplication,
  createBetaFeedback,
  createReviewItem,
  cancelAiUsageReservation,
  completeAiUsage,
  deleteUserData,
  deleteProjectSeed,
  getMemoryHealth,
  getBetaExperience,
  getBuildPhotoAllowance,
  getDailyAiUsageSummary,
  getPipCreditBalance,
  getProjectTemplates,
  getUserPreferences,
  listProjectMessages,
  listProjectConversations,
  listProjectReminders,
  listProjectSeeds,
  listProjects,
  listBetaApplications,
  listBetaFeedback,
  listBetaTesterProgress,
  listReviewItems,
  resetMemoryForTests,
  refundBuildPhotoCheck,
  reserveAiUsage,
  saveProjectRhythmSetup,
  grantPipCredits,
  seedProjectConversationDefaults,
  seedProjectDefaults,
  updateProjectConversation,
  updateProjectReminder,
  updateBetaExperience,
  updateBetaApplicationReview,
  updateBetaFeedbackReview,
  updateReviewItem,
  updateProject,
  updateUserPreferences,
  upsertUser
} from "./pipMemory.js";
import { calculateNutrients, createGrowPlan, createReminder, estimateBuild, getBuildStep, recommendParts } from "./pipTools.js";
import { retrieveHydroPipContext } from "./ragStore.js";
import { issuePipSession, verifyPipSession } from "./pipAuth.js";
import { classifyPhotoRequest, photoAnalysisSucceeded } from "./pipPhotoAccess.js";
import { combineOpenAiUsage, estimateAiCreditCost, estimateModelCost, makeDailyLimitPayload, resolvePipUsageTier } from "./pipUsage.js";
import { getSeedPlanningDashboard, getSeedSowRecommendation, getZonePlantingGuidance, seedPlanReminders } from "./plantingCalendar.js";
import { nutrientProgramsForSubscription } from "./nutrientPrograms.js";
import { feedbackPortfolioInsights, heuristicFeedbackAnalysis } from "./feedbackTriage.js";
import { parseSeedPackInventory } from "./seedInventory.js";
import { buildRhythmOverview } from "./rhythm.js";
import { buildRhythmSetupPlan } from "./rhythmSetup.js";

process.env.PIP_BRIDGE_SECRET ||= "hydropip-smoke-test-secret";
process.env.PIP_APPROVED_TRAINING_FILE ||= path.join(process.cwd(), "server", ".data", "approved-training-test.md");

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

assert.deepEqual(parseSeedPackInventory("Green beans, two packs, tomatoes, two packs"), {
  items: [
    { crop: "Green Beans", packsOnHand: 2 },
    { crop: "Tomatoes", packsOnHand: 2 }
  ]
});
assert.deepEqual(parseSeedPackInventory("Add 3 packs of lettuce and one pack of basil"), {
  items: [
    { crop: "Lettuce", packsOnHand: 3 },
    { crop: "Basil", packsOnHand: 1 }
  ]
});
assert.equal(parseSeedPackInventory("How many seed packs should I buy?"), null);
assert.equal(parseSeedPackInventory("I bought two packs of zip ties"), null);
const rhythmFixture = buildRhythmOverview({
  now: new Date("2026-08-09T12:00:00Z"),
  project: { id: "project-rhythm", systemProfile: { growZone: "9", systemStage: "resetting", nutrientStage: "growing", expectedRefillWindow: "late August" } },
  reminders: [
    { id: "due", title: "Weekly system check", category: "maintenance", dueAt: "2026-08-08T13:00:00Z", status: "active" },
    { id: "tomorrow", title: "Tomorrow system check", category: "maintenance", dueAt: "2026-08-10T13:00:00Z", status: "active" },
    { id: "later", title: "Succession review", category: "grow", dueAt: "2026-08-20T13:00:00Z", status: "active" }
  ],
  seeds: [
    { id: "beans", crop: "Green beans", packsOnHand: 2, status: "on_hand" },
    { id: "lettuce", crop: "Lettuce", packsOnHand: 0, status: "sprouted", plantingLocation: "nursery_for_hydropip", sowDate: "2026-08-01" },
    { id: "basil-vault", crop: "Basil", packsOnHand: 1, status: "on_hand", plantingLocation: "seed_vault" },
    { id: "lettuce-vault", crop: "Buttercrunch Lettuce Seeds", packsOnHand: null, status: "on_hand", plantingLocation: "seed_vault" },
    { id: "kale-bed", crop: "Kale", packsOnHand: 0, status: "growing", plantingLocation: "raised_bed" }
  ],
  readings: [],
  seedDashboard: { groups: { plantNow: [{ crop: "Green Bean", reason: "Fits Zone 9 now.", bestSowDate: "2026-08-09", method: "direct_sow" }], startNext: [{ crop: "Leaf lettuce", reason: "Start the next succession.", bestSowDate: "2026-08-16", method: "protected_start" }], hold: [] } }
});
assert.equal(rhythmFixture.summary.overdueCount, 1);
assert.equal(rhythmFixture.nowTasks.find((item) => item.id === "due").canComplete, true);
assert.equal(rhythmFixture.nowTasks.find((item) => item.id === "tomorrow").canComplete, false);
assert.equal(rhythmFixture.sowNow[0].packsOnHand, 2);
assert.equal(rhythmFixture.comingNext.some((item) => item.sourceId === "lettuce-vault"), true);
assert.equal(rhythmFixture.transferChecks.some((item) => item.seedId === "lettuce"), true);
assert.equal(rhythmFixture.currentCrops.some((item) => item.seedId === "lettuce"), true);
assert.equal(rhythmFixture.currentCrops.some((item) => item.seedId === "basil-vault"), false);
assert.equal(rhythmFixture.currentCrops.some((item) => item.seedId === "kale-bed"), false);
assert.equal(rhythmFixture.turnover.active, true);
assert.equal(rhythmFixture.comingNext.some((item) => item.sourceId === "later"), true);
const freeNutrientCatalog = nutrientProgramsForSubscription({ active: false });
assert.deepEqual(Object.keys(freeNutrientCatalog.systems), ["hydropip"]);
assert.deepEqual(Object.keys(freeNutrientCatalog.programs), ["hydropip_masterblend"]);
assert.equal(freeNutrientCatalog.access.scope, "hydropip_only");
const proNutrientCatalog = nutrientProgramsForSubscription({ active: true });
assert.equal(Object.keys(proNutrientCatalog.systems).includes("dwc"), true);
assert.equal(Object.keys(proNutrientCatalog.programs).includes("jacks_321"), true);
assert.equal(proNutrientCatalog.access.scope, "all_systems");
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
const btLinkedAnswer = compactAnswer("Use Bt kurstaki for the confirmed cabbage caterpillars and follow the edible-crop label.", "What should I use?", {});
assert.match(btLinkedAnswer, /Bacillus\+thuringiensis\+kurstaki\+caterpillar\+control\+vegetables/);
assert.match(btLinkedAnswer, /tag=hydrpip2002-20/);
assert.doesNotMatch(btLinkedAnswer, /food\+safe\+garden\+pest\+control/);
assert.match(fallbackAnswer("I am not sure what to ask", { matches: [] }), /^Immediate:/);
assert.equal(classifyQuestionIntent("Got the towers set. What should I plant this time of year?"), "crop_selection");
assert.equal(classifyQuestionIntent("Where can I buy the small tower tubing?"), "parts_shopping");
assert.equal(classifyQuestionIntent("Delete all", { history: [{ role: "assistant", content: "I found four calendar reminders." }] }), "reminder_action");
const calendarClearConfirmation = buildDirectCalendarConfirmation({
  message: "Delete all",
  history: [{ role: "assistant", content: "Your Pip Calendar has four reminders." }],
  projectContext: { reminderCount: 4, activeReminders: [{ title: "Weekly check" }], project: { systemProfile: {} } }
});
assert.equal(calendarClearConfirmation.actions[0].operation, "delete_all");
assert.match(calendarClearConfirmation.actions[0].label, /Delete all 4 reminders/);
const calendarAvailabilityPrompt = buildDirectCalendarConfirmation({
  message: "I finished my build. Can you load my calendar?",
  projectContext: { reminderCount: 0, activeReminders: [], project: { systemProfile: { towerCount: 4, reservoirGallons: 275 } } }
});
assert.match(calendarAvailabilityPrompt.answer, /What one or two days/);
assert.equal(calendarAvailabilityPrompt.actions.length, 0);
const calendarStarterConfirmation = buildDirectCalendarConfirmation({
  message: "Sunday at 9 AM and Tuesday at 3 PM",
  history: [{ role: "assistant", content: "What one or two days are easiest for garden checks, and what time works on each day?" }],
  projectContext: { reminderCount: 0, activeReminders: [], project: { systemProfile: { towerCount: 4, reservoirGallons: 275, timeZone: "America/New_York" } } }
});
assert.equal(calendarStarterConfirmation.actions[0].operation, "add");
assert.equal(calendarStarterConfirmation.actions[0].label, "Load my calendar");
assert.equal(calendarStarterConfirmation.actions[0].reminders.length, 3);
assert.equal(calendarStarterConfirmation.actions[0].reminders[1].dueTime, "15:00");
const rhythmSetupAction = buildDirectRhythmSetupAction({
  message: "Can you populate my Rhythm?",
  projectContext: { project: { id: "project-rhythm", systemProfile: { growZone: "9" } } }
});
assert.equal(rhythmSetupAction.actions[0].type, "open_rhythm_setup");
assert.equal(rhythmSetupAction.actions[0].projectId, "project-rhythm");
const freeRhythmGate = await askPip({
  message: "Can you set up my Rhythm?",
  subscription: { active: false }
});
assert.equal(freeRhythmGate.subscriptionRequired, true);
assert.equal(freeRhythmGate.upgradeCta.label, "See Pip Pro");
const undatedRhythmPlan = buildRhythmSetupPlan({
  profile: { growZone: "9", systemStage: "growing" },
  input: { currentCrops: [{ crop: "Lettuce" }], nutrientStage: "growing", currentTankLevel: "half full" },
  now: new Date("2026-08-09T12:00:00Z")
});
assert.equal(undatedRhythmPlan.reminders.length, 0);
assert.equal(undatedRhythmPlan.missing.includes("last tank fill or batch start date"), true);
assert.equal(undatedRhythmPlan.missing.includes("last maintenance date"), true);
const datedRhythmPlan = buildRhythmSetupPlan({
  input: {
    growZone: "9",
    systemStage: "growing",
    currentCrops: [{ crop: "Lettuce", sowDate: "2026-08-01" }, { crop: "Lettuce", sowDate: "2026-08-01" }],
    batchStartDate: "2026-08-02",
    nutrientStage: "growing",
    currentTankLevel: "three quarters full",
    lastMaintenanceDate: "2026-08-08",
    preferredTaskDay: "sunday",
    preferredTaskTime: "09:00"
  },
  now: new Date("2026-08-09T12:00:00Z")
});
assert.equal(datedRhythmPlan.currentCrops.length, 1);
assert.equal(datedRhythmPlan.reminders.length, 3);
assert.equal(datedRhythmPlan.ready, true);
assert.equal(
  assessAnswerRelevance(
    "Got the towers set. What should I plant this time of year?",
    "Use two pumps in the IBC.",
    { profile: { growZone: "9" } }
  ).ok,
  false
);
assert.equal(
  assessAnswerRelevance(
    "What should I plant this time of year?",
    "For Zone 9, plant basil and chard. What is your current daytime high?",
    { profile: { growZone: "9" } }
  ).ok,
  false
);
const zone9August = getZonePlantingGuidance({ growZone: "9a", location: "Ocala, FL", areaType: "outdoor_open", date: "2026-08-04" });
assert.equal(zone9August.phaseId, "summer_heat");
assert.equal(zone9August.plantNow.includes("basil"), true);
const zone5August = getZonePlantingGuidance({ growZone: "5b", date: "2026-08-04" });
assert.equal(zone5August.phaseId, "fall_transition");
const zone9January = getZonePlantingGuidance({ growZone: "9", date: "2026-01-15" });
assert.equal(zone9January.phaseId, "cool_prime");
const seedDashboard = getSeedPlanningDashboard({ growZone: "9b", location: "Lakeland, FL", areaType: "outdoor_open", date: "2026-08-09" });
assert.equal(seedDashboard.groups.plantNow.some((item) => item.crop === "Basil"), true);
assert.equal(seedDashboard.crops.includes("Leaf lettuce"), true);
const lettuceTiming = getSeedSowRecommendation({ crop: "lettuce", growZone: "9b", location: "Lakeland, FL", areaType: "outdoor_open", date: "2026-08-09" });
assert.equal(lettuceTiming.status, "recommended");
assert.equal(["start_protected", "start_next", "wait"].includes(lettuceTiming.decision), true);
assert.match(lettuceTiming.methodLabel, /HydroPip|protected/i);
const basilTiming = getSeedSowRecommendation({ crop: "basil", growZone: "9b", location: "Lakeland, FL", areaType: "outdoor_open", date: "2026-08-09" });
assert.equal(basilTiming.decision, "plant_now");
const successionTasks = seedPlanReminders(basilTiming, { includeSuccession: true, successionIntervalDays: 14 });
assert.equal(successionTasks.length, 4);
assert.equal(successionTasks.every((item) => /^\d{4}-\d{2}-\d{2}$/.test(item.dueDate)), true);
assert.equal(getSeedPlanningDashboard({ growZone: "", date: "2026-08-09" }), null);

const steps = getBuildStep();
assert.equal(steps.steps.length >= 5, true);

const parts = recommendParts({ towerCount: 4 });
assert.equal(parts.parts.find((part) => part.id === "planter-order").suggestedQuantity, 8);
assert.notEqual(parts.parts.find((part) => part.id === "mix-return-hose").id, parts.parts.find((part) => part.id === "main-feed-hose").id);
assert.equal(parts.parts.some((part) => part.id === "mix-hose-strap"), true);

const seedBatch = calculateNutrients({ reservoirGallons: 275, stage: "seeds", startingNewBatch: true });
assert.deepEqual([seedBatch.masterblendGrams, seedBatch.calciumNitrateGrams, seedBatch.magnesiumSulfateGrams], [300, 300, 150]);
const growingBatch = calculateNutrients({ reservoirGallons: 275, stage: "growing", startingNewBatch: true });
assert.deepEqual([growingBatch.masterblendGrams, growingBatch.calciumNitrateGrams, growingBatch.magnesiumSulfateGrams], [400, 400, 200]);
const fruitingBatch = calculateNutrients({ reservoirGallons: 275, stage: "fruiting", startingNewBatch: true });
assert.deepEqual([fruitingBatch.masterblendGrams, fruitingBatch.calciumNitrateGrams, fruitingBatch.magnesiumSulfateGrams], [600, 600, 300]);
const halfBatch = calculateNutrients({ reservoirGallons: 137.5, stage: "growing", startingNewBatch: true });
assert.deepEqual([halfBatch.masterblendGrams, halfBatch.calciumNitrateGrams, halfBatch.magnesiumSulfateGrams], [200, 200, 100]);
assert.equal(calculateNutrients({ reservoirGallons: 275, stage: "growing", startingNewBatch: false }).status, "fresh_batch_required");
assert.equal(calculateNutrients({ reservoirGallons: 0, stage: "growing", startingNewBatch: true }).error, "invalid_reservoir_volume");

const fourTowerEstimate = estimateBuild({ towerCount: 4, tiersPerTower: 10, reservoir: "used", support: "galvanized" });
assert.equal(fourTowerEstimate.plantingPositions, 160);
assert.equal(fourTowerEstimate.items.find((item) => item.id === "planter-order").quantity, 8);
const ownedIbcEstimate = estimateBuild({ towerCount: 4, tiersPerTower: 10, reservoir: "used", support: "galvanized", ownedItemIds: ["ibc-used"] });
assert.equal(ownedIbcEstimate.total.typical < fourTowerEstimate.total.typical, true);
assert.equal(ownedIbcEstimate.savingsFromOwnedItems, fourTowerEstimate.items.find((item) => item.id === "ibc-used").typicalTotal);
const selectedOwnedIbcEstimate = estimateBuild({ towerCount: 4, tiersPerTower: 10, reservoir: "owned", support: "galvanized" });
assert.equal(selectedOwnedIbcEstimate.total.typical < fourTowerEstimate.total.typical, true);
assert.equal(selectedOwnedIbcEstimate.savingsFromOwnedItems, 90);

const plan = createGrowPlan({
  towerCount: 4,
  crop: "lettuce",
  plantingDate: "2026-08-01",
  climateMode: "warm",
  runoffLevel: "unknown"
});
assert.equal(plan.profile.reservoirGallons, 275);
assert.equal(plan.reminders.some((item) => item.title.includes("tank")), true);
assert.equal(plan.reminders.length <= 8, true);
assert.equal(plan.reminders.some((item) => item.repeat?.frequency === "weekly"), true);
assert.equal(plan.reminders.some((item) => item.repeat?.frequency === "monthly"), true);

const reminder = createReminder({ reminder: { title: "Check pH" }, subscription: { active: false } });
assert.equal(reminder.status, "subscription_required");

const retrieved = retrieveHydroPipContext("How do I fix no runoff from one tower?");
assert.equal(retrieved.matches.length > 0, true);
assert.equal(retrieved.matches.some((match) => /troubleshooting|feed/i.test(`${match.source} ${match.title}`)), true);
const seasonalRetrieved = retrieveHydroPipContext("Zone 9 August seasonal planting calendar crops");
assert.equal(seasonalRetrieved.matches.some((match) => match.source === "zone_planting_calendar.json"), true);

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
const profileAwareFallback = await askPip({
  message: "Got the towers set. What should I plant this time of year?",
  profile: { growZone: "9", location: "Ocala, FL", areaType: "outdoor_open", towerCount: 4 },
  subscription: { active: true }
});
assert.equal(profileAwareFallback.answer.includes("Zone 9"), true);
assert.equal(/basil|chard/i.test(profileAwareFallback.answer), true);
assert.equal(/Use two pumps in the IBC/i.test(profileAwareFallback.answer), false);

const seasonalWithPumpHistory = await askPip({
  message: "Got the towers set. What should I plant this time of year?",
  profile: { growZone: "9", location: "Ocala, FL", areaType: "outdoor open" },
  history: [
    { role: "user", content: "Where can I get a spare pump?" },
    { role: "assistant", content: "Use two pumps in the IBC: one for circulation and one for feeding the towers." }
  ]
});
assert.equal(/Use two pumps in the IBC/i.test(seasonalWithPumpHistory.answer), false);
assert.match(seasonalWithPumpHistory.answer, /Zone 9/i);
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

await upsertUser({ id: "test-user", email: "test@example.com" });
const defaultPreferences = await getUserPreferences({ userId: "test-user" });
assert.equal(defaultPreferences.workspaceTabOrder[0], "rhythm");
assert.equal(defaultPreferences.workspaceTabOrder.includes("chat"), true);
assert.equal(defaultPreferences.experienceMode, "guided");
assert.deepEqual(defaultPreferences.celebratedMilestones, []);
const savedPreferences = await updateUserPreferences({
  userId: "test-user",
  patch: { workspaceTabOrder: ["chat", "planner", "planner", "invalid", "profile"], accountAvatar: "/assets/branding/pip-head-transparent.png", experienceMode: "detailed", celebratedMilestones: ["workspace_ready", "grow_running", "workspace_ready", "not_real"] }
});
assert.deepEqual(savedPreferences.workspaceTabOrder.slice(0, 3), ["chat", "planner", "profile"]);
assert.equal(savedPreferences.workspaceTabOrder.includes("calendar"), true);
assert.equal(savedPreferences.accountAvatar, "/assets/branding/pip-head-transparent.png");
assert.equal(savedPreferences.experienceMode, "detailed");
assert.deepEqual(savedPreferences.celebratedMilestones, ["workspace_ready", "grow_running"]);
const rejectedAvatarPreferences = await updateUserPreferences({ userId: "test-user", patch: { accountAvatar: "javascript:alert(1)" } });
assert.equal(rejectedAvatarPreferences.accountAvatar, null);
const savedBuildPreferences = await updateUserPreferences({
  userId: "test-user",
  patch: {
    buildEstimate: {
      options: { towers: 2, tiers: 8, planterChoice: "some", ownedPlanterTiers: 4, reservoir: "owned", support: "galvanized", optional: ["ibc-cover"] },
      checked: { "feed-pump": true },
      purchases: { "feed-pump": { owned: false, paid: 19.99, date: "2026-08-05", retailer: "Local store" } },
      summary: { low: 300, typical: 450, high: 700, positions: 64, savings: 90 },
      savedAt: "2026-08-05T12:00:00.000Z"
    }
  }
});
assert.equal(savedBuildPreferences.buildEstimate.options.towers, 2);
assert.equal(savedBuildPreferences.buildEstimate.checked["feed-pump"], true);
assert.equal(savedBuildPreferences.buildEstimate.purchases["feed-pump"].paid, 19.99);
assert.equal(savedBuildPreferences.buildEstimate.summary.positions, 64);

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

const savedProfileAiDisabled = process.env.PIP_AI_DISABLED;
process.env.PIP_AI_DISABLED = "true";
const savedProjectCropAnswer = await askPip({
  message: "Using my saved profile, what crops should I plant this time of year?",
  user: { id: "test-user", email: "test@example.com" },
  projectId: freeProject.project.id,
  subscription: { active: true },
  history: [
    { role: "user", content: "Where can I get a spare pump?" },
    { role: "assistant", content: "Use two pumps in the IBC: one for circulation and one for feeding the towers." }
  ]
});
assert.match(savedProjectCropAnswer.answer, /Zone 9/i);
assert.match(savedProjectCropAnswer.answer, /basil|chard/i);
assert.equal(/Use two pumps in the IBC/i.test(savedProjectCropAnswer.answer), false);
if (savedProfileAiDisabled === undefined) delete process.env.PIP_AI_DISABLED;
else process.env.PIP_AI_DISABLED = savedProfileAiDisabled;

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
const feedbackAnalysis = heuristicFeedbackAnalysis({
  category: "mobile",
  impact: "blocked",
  page: "track_my_build",
  message: "The phone page gets stuck and I cannot finish the build calculator."
});
assert.equal(feedbackAnalysis.category, "mobile");
assert.equal(feedbackAnalysis.bucket, "fix_now");
assert.equal(feedbackAnalysis.priorityScore >= 50, true);
const privateFeedback = await createBetaFeedback({
  userId: "test-user",
  feedback: {
    rating: "not_helpful",
    category: "pip_answer",
    message: "The answer missed the fitting.",
    impact: "frustrating",
    contactOkay: true,
    includeContext: false,
    prompt: "private prompt",
    response: "private response"
  },
  analysis: feedbackAnalysis
});
assert.equal(privateFeedback.prompt, null);
assert.equal(privateFeedback.response, null);
assert.equal(privateFeedback.impact, "frustrating");
assert.equal(privateFeedback.contactOkay, true);
assert.equal(privateFeedback.analysis.priorityScore, feedbackAnalysis.priorityScore);
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
const feedbackInsights = feedbackPortfolioInsights(feedbackList);
assert.equal(feedbackInsights.analyzed, 1);
assert.equal(feedbackInsights.ranked[0].id, privateFeedback.id);
const reviewedFeedback = await updateBetaFeedbackReview({ id: privateFeedback.id, status: "reviewing", priority: "high", adminNotes: "Reproduce fitting question" });
assert.equal(reviewedFeedback.reviewStatus, "reviewing");
assert.equal(reviewedFeedback.priority, "high");
const reviewItem = await createReviewItem({
  userId: "test-user",
  projectId: freeProject.project.id,
  question: "What gasket fits the hose-end shutoff valve?",
  answer: "Pip was unsure.",
  reason: "missing_knowledge",
  context: { priority: "normal" }
});
assert.equal(reviewItem.status, "queued");
assert.equal((await listReviewItems({ status: "new" })).some((item) => item.id === reviewItem.reviewItem.id), true);
const appliedReview = await updateReviewItem({
  id: reviewItem.reviewItem.id,
  patch: {
    status: "reviewed",
    resolution: JSON.stringify({
      issueType: "bad_affiliate",
      idealAnswer: "Use standard 3/4-inch garden hose washers for the HydroPip hose-end shutoff valve.",
      trainingUpdate: "knowledge_base",
      internalNote: "Safe product knowledge auto-apply test."
    })
  }
});
assert.equal(appliedReview.appliedTraining.status, "applied");
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
assert.equal(buildMessages.at(-1)?.content, "I am stacking the first tower.");
assert.deepEqual(pestMessages.map((item) => item.content), ["I found aphids."]);
assert.equal((await listProjectMessages({ userId: "test-user", projectId: freeProject.project.id, allConversations: true })).length, buildMessages.length + pestMessages.length);
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

const calendarActionProject = await createProject({
  user: { id: "test-user" },
  type: "crop_schedule",
  systemProfile: { towerCount: 4, reservoirGallons: 275 },
  subscription: { active: true, plan: "pip_pro" }
});
await createProjectReminder({
  userId: "test-user",
  projectId: calendarActionProject.project.id,
  reminder: { title: "Old weekly check", dueDate: "2026-08-09", repeat: { frequency: "weekly" } },
  subscription: { active: true }
});
await createProjectReminder({
  userId: "test-user",
  projectId: calendarActionProject.project.id,
  reminder: { title: "Old monthly service", dueDate: "2026-08-10", repeat: { frequency: "monthly" } },
  subscription: { active: true }
});
const clearedCalendar = await applyProjectReminderAction({
  userId: "test-user",
  projectId: calendarActionProject.project.id,
  operation: "delete_all",
  subscription: { active: true }
});
assert.equal(clearedCalendar.deletedCount, 2);
assert.equal((await listProjectReminders({ userId: "test-user", projectId: calendarActionProject.project.id })).length, 0);
const loadedCalendar = await applyProjectReminderAction({
  userId: "test-user",
  projectId: calendarActionProject.project.id,
  operation: "replace_all",
  reminders: [
    { title: "Sunday full check", dueDate: "2026-08-09", dueAt: "2026-08-09T13:00:00.000Z", repeat: { frequency: "weekly" } },
    { title: "Tuesday quick check", dueDate: "2026-08-11", dueAt: "2026-08-11T19:00:00.000Z", repeat: { frequency: "weekly" } }
  ],
  subscription: { active: true }
});
assert.equal(loadedCalendar.addedCount, 2);
const loadedCalendarItems = await listProjectReminders({ userId: "test-user", projectId: calendarActionProject.project.id });
assert.equal(loadedCalendarItems.length, 2);
const updatedCalendar = await applyProjectReminderAction({
  userId: "test-user",
  projectId: calendarActionProject.project.id,
  operation: "update",
  reminderIds: [loadedCalendarItems[1].id],
  patch: { dueAt: "2026-08-11T20:00:00.000Z" },
  subscription: { active: true }
});
assert.equal(updatedCalendar.updatedCount, 1);
assert.equal(updatedCalendar.updated[0].dueAt, "2026-08-11T20:00:00.000Z");

const rhythmSetupProject = await createProject({
  user: { id: "test-user" },
  type: "crop_schedule",
  title: "Rhythm setup test",
  systemProfile: { towerCount: 4, reservoirGallons: 275 },
  subscription: { active: true, plan: "pip_pro" }
});
const rhythmSetupInput = {
  growZone: "9",
  systemStage: "growing",
  currentCrops: [{ crop: "Lettuce", variety: "Buttercrunch", sowDate: "2026-08-01" }],
  batchStartDate: "2026-08-02",
  nutrientStage: "growing",
  currentTankLevel: "three quarters full",
  expectedRefillWindow: "late August",
  lastMaintenanceDate: "2026-08-08",
  preferredTaskDay: "sunday",
  preferredTaskTime: "09:00",
  timezone: "America/New_York",
  timezoneOffsetMinutes: 240
};
const firstRhythmSave = await saveProjectRhythmSetup({
  userId: "test-user",
  projectId: rhythmSetupProject.project.id,
  input: rhythmSetupInput,
  subscription: { active: true }
});
assert.equal(firstRhythmSave.status, "saved");
assert.equal(firstRhythmSave.cropsAdded, 1);
assert.equal(firstRhythmSave.remindersAdded, 3);
assert.equal(firstRhythmSave.setup.ready, true);
const secondRhythmSave = await saveProjectRhythmSetup({
  userId: "test-user",
  projectId: rhythmSetupProject.project.id,
  input: rhythmSetupInput,
  subscription: { active: true }
});
assert.equal(secondRhythmSave.cropsAdded, 0);
assert.equal(secondRhythmSave.cropsUpdated, 1);
assert.equal(secondRhythmSave.remindersAdded, 0);
assert.equal(secondRhythmSave.remindersUpdated, 3);
const varietyRefresh = await saveProjectRhythmSetup({
  userId: "test-user",
  projectId: rhythmSetupProject.project.id,
  input: {
    ...rhythmSetupInput,
    currentCrops: [{ crop: "Lettuce", variety: "Red Sails", sowDate: "2026-08-01" }]
  },
  subscription: { active: true }
});
assert.equal(varietyRefresh.cropsAdded, 0);
assert.equal(varietyRefresh.cropsUpdated, 1);
assert.equal(varietyRefresh.cropsFinished, 0);
assert.equal((await listProjectSeeds({ userId: "test-user", projectId: rhythmSetupProject.project.id })).filter((item) => item.plantingLocation === "hydropip_tower").length, 1);
assert.equal((await listProjectReminders({ userId: "test-user", projectId: rhythmSetupProject.project.id })).length, 3);

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
assert.equal(defaultSchedule.reminders.some((item) => item.title === "Weekly tank, mixing circulation, and flow check"), true);
assert.equal(defaultSchedule.reminders.some((item) => item.title === "Review plant stage, refill window, pumps, and hoses"), true);
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
await updateProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminderId: completedStarter.id,
  patch: { dueDate: new Date().toISOString().slice(0, 10), dueAt: new Date().toISOString(), timezone: "UTC" },
  subscription: { active: true }
});
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
const blockedFutureCompletion = await updateProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminderId: completedStarter.id,
  patch: { status: "completed" },
  subscription: { active: true }
});
assert.equal(blockedFutureCompletion.status, "not_due");
assert.equal(blockedFutureCompletion.reminder.completionCount, 1);
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

const savedSeed = await createProjectSeed({
  userId: "test-user",
  projectId: paidProject.project.id,
  seed: { crop: "Lettuce", variety: "Buttercrunch", packsOnHand: 2, method: "direct_sow", seedsSown: 20, seedsSprouted: 16, succession: true, successionIntervalDays: 21, recommendedWindowStart: "2026-09-01", expectedHarvestDate: "2026-10-12", timingSource: "hydropip_zone_calendar" },
  subscription: { active: true }
});
assert.equal(savedSeed.status, "saved");
assert.equal(savedSeed.seed.germinationRate, 80);
assert.equal(savedSeed.seed.packsOnHand, 2);
assert.equal(savedSeed.seed.succession, true);
assert.equal(savedSeed.seed.expectedHarvestDate, "2026-10-12");
assert.equal((await listProjectSeeds({ userId: "test-user", projectId: paidProject.project.id })).length, 1);
const importedSeedPacks = await addProjectSeedPacks({
  userId: "test-user",
  projectId: paidProject.project.id,
  items: [{ crop: "Green Beans", packsOnHand: 2 }, { crop: "Tomatoes", packsOnHand: 2 }],
  subscription: { active: true }
});
assert.equal(importedSeedPacks.addedCount, 2);
const mergedSeedPacks = await addProjectSeedPacks({
  userId: "test-user",
  projectId: paidProject.project.id,
  items: [{ crop: "Green Beans", packsOnHand: 1 }],
  subscription: { active: true }
});
assert.equal(mergedSeedPacks.updatedCount, 1);
assert.equal(mergedSeedPacks.seeds[0].packsOnHand, 3);
const seedPackChat = await askPip({
  message: "I have green beans, two packs, tomatoes, two packs",
  user: { id: "test-user" },
  projectId: paidProject.project.id,
  subscription: { active: true },
  history: []
});
assert.equal(seedPackChat.mode, "seed_inventory_confirmation");
assert.equal(seedPackChat.actions[0].type, "seed_pack_inventory");
assert.equal(seedPackChat.actions[0].items.length, 2);
for (const seed of await listProjectSeeds({ userId: "test-user", projectId: paidProject.project.id })) {
  if (seed.id === savedSeed.seed.id) continue;
  await deleteProjectSeed({ userId: "test-user", projectId: paidProject.project.id, seedId: seed.id, subscription: { active: true } });
}
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
assert.deepEqual(customSystemGate.upgradeCta, {
  label: "See Pip Pro",
  url: "https://www.hydropip.com/pip?pro=1"
});

const savedReminderGate = await askPip({
  message: "Save a reminder to check my pH every Friday.",
  subscription: { active: false }
});
assert.equal(savedReminderGate.subscriptionRequired, true);
assert.equal(savedReminderGate.mode, "subscription_gate");
assert.equal(savedReminderGate.upgradeCta.label, "See Pip Pro");
assert.equal(savedReminderGate.answer.includes("Free Pip can still guide the HydroPip build"), true);

const growHistoryGate = await askPip({
  message: "Keep my grow history and readings for this crop.",
  subscription: { active: false }
});
assert.equal(growHistoryGate.subscriptionRequired, true);
assert.equal(growHistoryGate.upgradeCta.url, "https://www.hydropip.com/pip?pro=1");

const freeBuildTracking = await askPip({
  message: "Where do I open Track My Build for my HydroPip parts?",
  subscription: { active: false }
});
assert.notEqual(freeBuildTracking.subscriptionRequired, true);

const proReminderAnswer = await askPip({
  message: "Save a reminder to check my pH every Friday.",
  subscription: { active: true, verified: true }
});
assert.notEqual(proReminderAnswer.subscriptionRequired, true);

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
