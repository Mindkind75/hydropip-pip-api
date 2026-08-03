import assert from "node:assert/strict";
import { askPip, compactAnswer, stripSummaryLabel } from "./pipAgent.js";
import {
  appendProjectMessage,
  createProject,
  createProjectConversation,
  createProjectReading,
  createProjectReminder,
  createProjectSeed,
  deleteUserData,
  deleteProjectSeed,
  getMemoryHealth,
  getProjectTemplates,
  listProjectMessages,
  listProjectConversations,
  listProjectReminders,
  listProjectSeeds,
  listProjects,
  resetMemoryForTests,
  seedProjectDefaults,
  updateProjectConversation,
  updateProjectReminder,
  updateProject
} from "./pipMemory.js";
import { createGrowPlan, createReminder, getBuildStep, recommendParts } from "./pipTools.js";
import { retrieveHydroPipContext } from "./ragStore.js";
import { issuePipSession, verifyPipSession } from "./pipAuth.js";

process.env.PIP_BRIDGE_SECRET ||= "hydropip-smoke-test-secret";

const signedSession = issuePipSession({
  member: { id: "test-user", email: "test@hydropip.com" },
  subscription: { active: true }
});
assert.equal(verifyPipSession(signedSession).sub, "test-user");
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

const defaultSchedule = await seedProjectDefaults({
  userId: "test-user",
  projectId: paidProject.project.id,
  subscription: { active: true }
});
assert.equal(defaultSchedule.reminders.length, 6);
const savedSchedule = await listProjectReminders({ userId: "test-user", projectId: paidProject.project.id });
const readySchedule = await seedProjectDefaults({
  userId: "test-user",
  projectId: paidProject.project.id,
  subscription: { active: true }
});
assert.equal(readySchedule.status, "already_ready");
assert.equal(readySchedule.addedCount, 0);
const completedStarter = savedSchedule.find((item) => item.note === "hydropip_default");
await updateProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminderId: completedStarter.id,
  patch: { status: "completed" },
  subscription: { active: true }
});
const restoredSchedule = await seedProjectDefaults({
  userId: "test-user",
  projectId: paidProject.project.id,
  subscription: { active: true }
});
assert.equal(restoredSchedule.status, "created");
assert.equal(restoredSchedule.addedCount, 1);
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
