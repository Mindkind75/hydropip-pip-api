import assert from "node:assert/strict";
import { askPip } from "./pipAgent.js";
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

console.log("Pip smoke tests passed");
