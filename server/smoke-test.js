import assert from "node:assert/strict";
import { askPip } from "./pipAgent.js";
import {
  createProject,
  createProjectReading,
  createProjectReminder,
  getProjectTemplates,
  listProjectMessages,
  resetMemoryForTests
} from "./pipMemory.js";
import { createGrowPlan, createReminder, getBuildStep, recommendParts } from "./pipTools.js";
import { retrieveHydroPipContext } from "./ragStore.js";

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
const templates = getProjectTemplates();
assert.equal(templates.templates.some((template) => template.id === "existing_system_setup"), true);

const freeProject = createProject({
  user: { id: "test-user", email: "test@example.com" },
  type: "hydropip_build",
  title: "Backyard HydroPip",
  systemProfile: { systemType: "hydropip_tower", reservoirGallons: 275, crops: ["lettuce"] },
  subscription: { active: false }
});
assert.equal(freeProject.status, "created");

const existingSystemBlocked = createProject({
  user: { id: "test-user" },
  type: "existing_system_setup",
  systemProfile: { systemType: "dwc", reservoirGallons: 27, crops: ["lettuce"] },
  subscription: { active: false }
});
assert.equal(existingSystemBlocked.status, "subscription_required");

const existingSystemPaid = createProject({
  user: { id: "test-user" },
  type: "existing_system_setup",
  systemProfile: { systemType: "dwc", reservoirGallons: 27, crops: ["lettuce"] },
  subscription: { active: true, plan: "pip_pro" }
});
assert.equal(existingSystemPaid.status, "created");

const paidBlocked = createProject({
  user: { id: "test-user" },
  type: "crop_schedule",
  subscription: { active: false }
});
assert.equal(paidBlocked.status, "subscription_required");

const paidProject = createProject({
  user: { id: "test-user" },
  type: "crop_schedule",
  subscription: { active: true, plan: "pip_pro" }
});
assert.equal(paidProject.status, "created");

const savedReminder = createProjectReminder({
  userId: "test-user",
  projectId: paidProject.project.id,
  reminder: { title: "Check pH", dueDate: "2026-08-02" },
  subscription: { active: true }
});
assert.equal(savedReminder.status, "queued");

const blockedReading = createProjectReading({
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
assert.equal((listProjectMessages({ userId: "test-user", projectId: freeProject.project.id }) || []).length >= 2, true);

console.log("Pip smoke tests passed");
