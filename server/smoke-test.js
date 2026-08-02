import assert from "node:assert/strict";
import { askPip, compactAnswer, stripSummaryLabel } from "./pipAgent.js";
import {
  createProject,
  createProjectReading,
  createProjectReminder,
  getMemoryHealth,
  getProjectTemplates,
  listProjectMessages,
  resetMemoryForTests
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
assert.equal(linkedCompact.includes("HydroPip may earn from qualifying Amazon purchases."), true);
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
  systemProfile: { systemType: "hydropip_tower", reservoirGallons: 275, crops: ["lettuce"] },
  subscription: { active: false }
});
assert.equal(freeProject.status, "created");

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

console.log("Pip smoke tests passed");
