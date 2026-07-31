import { buildSteps, parts, schedulingRules, setupWizardSchema } from "./pipData.js";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function normalizeProfile(profile = {}) {
  return {
    towerCount: Number(profile.towerCount || 4),
    crop: String(profile.crop || "lettuce").toLowerCase(),
    plantingDate: profile.plantingDate || new Date().toISOString().slice(0, 10),
    reservoirGallons: Number(profile.reservoirGallons || schedulingRules.defaults.reservoirGallons),
    climateMode: String(profile.climateMode || "warm").toLowerCase(),
    feedDurationMinutes: Number(profile.feedDurationMinutes || 5),
    runoffLevel: String(profile.runoffLevel || "unknown").toLowerCase(),
    ph: profile.ph === "" || profile.ph == null ? null : Number(profile.ph),
    ec: profile.ec || null
  };
}

export function getBuildStep({ stepId } = {}) {
  if (!stepId) return { steps: buildSteps };
  return buildSteps.find((step) => step.id === stepId) || { error: `Unknown build step: ${stepId}` };
}

export function recommendParts({ towerCount = 4 } = {}) {
  const count = Math.max(1, Number(towerCount || 4));
  return {
    towerCount: count,
    parts: parts.map((part) => ({
      ...part,
      suggestedQuantity:
        part.name.includes("Four-pot") ? `${count * 2} orders total` :
        part.name.includes("Schedule 40") || part.name.includes("PVC tee") || part.name.includes("cinder") ? `${count} total` :
        part.quantity
    }))
  };
}

export function createGrowPlan(input = {}) {
  const profile = normalizeProfile(input);
  const start = new Date(`${profile.plantingDate}T12:00:00`);
  const tasks = [];

  for (const task of schedulingRules.baseTasks) {
    if (Number.isFinite(task.offsetDays)) {
      tasks.push(toReminder(start, task.offsetDays, task.title, task.note, task.category));
    }
    if (Number.isFinite(task.repeatEveryDays)) {
      for (let offset = task.repeatEveryDays; offset <= 42; offset += task.repeatEveryDays) {
        tasks.push(toReminder(start, offset, task.title, task.note, task.category));
      }
    }
  }

  for (const task of schedulingRules.cropTasks[profile.crop] || []) {
    tasks.push(toReminder(start, task.offsetDays, task.title, task.note, "crop"));
  }

  tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

  return {
    profile,
    recommendations: buildRecommendations(profile),
    reminders: tasks,
    subscriptionGate: {
      free: "Pip can generate this plan for free.",
      paid: "Saving this grow, sending reminders, and tracking future readings require Pip Pro."
    }
  };
}

export function createReminder({ user, reminder, subscription } = {}) {
  if (!subscription?.active) {
    return {
      status: "subscription_required",
      message: "Pip can explain the reminder for free, but saving reminders requires Pip Pro.",
      upgradeReason: "Pip Pro stores grow profiles, sends reminders, and tracks logs over time."
    };
  }

  return {
    status: "queued",
    userId: user?.id || "demo-user",
    reminder: {
      id: `rem_${Date.now()}`,
      ...reminder
    }
  };
}

export function getWizardSchema() {
  return setupWizardSchema;
}

export function fallbackAnswer(question = "", retrieval = { matches: [] }) {
  const q = question.toLowerCase();
  const contextLead = buildContextLead(retrieval);
  if (q.includes("part") || q.includes("buy") || q.includes("amazon")) {
    return `${contextLead}Start with the core HydroPip parts: two stackable planter orders per tower, one 10-foot Schedule 40 pipe per tower, one cinder block per tower, a 275-gallon IBC, two pumps, a two-outlet outdoor smart plug, feed hose, irrigation tubing, perlite, vermiculite, nutrients, and pH/EC testing.`;
  }
  if (q.includes("feed") || q.includes("schedule") || q.includes("runoff")) {
    return `${contextLead}For HydroPip, start with timed feeds and calibrate from runoff. Cool or mild conditions often start around 2 feed windows per day, warm around 3, and hot conditions may need 4-6 shorter feeds. Tell me tower count, crop, feed duration, runoff, pH, and EC/TDS to tune it.`;
  }
  if (q.includes("build") || q.includes("step") || q.includes("setup")) {
    return `${contextLead}Build order: anchor the 10-foot Schedule 40 pipe, level the cinder block, stack the four-pot planters, guide the hose with a PVC tee, add feed tubes and diffusers, install two IBC pumps, then calibrate timed feeds by runoff.`;
  }
  if (q.includes("remind") || q.includes("track") || q.includes("save")) {
    return `${contextLead}I can help create the plan here, but saved tracking and reminders are Pip Pro features. Once subscribed, Pip can remember plant dates, pH/EC readings, tank refills, trims, flushes, and harvest windows.`;
  }
  if (q.includes("ibc") || q.includes("tank")) {
    return `${contextLead}Use a 275-gallon IBC only if prior contents are known food-safe or non-hazardous. One pump circulates the tank, and the other feeds the towers. Circulate 45-60 minutes after nutrients and test before adjusting.`;
  }
  return `${contextLead}I can help with the HydroPip timed-feed tower build, parts, feed timing, IBC mixing, pH/EC checks, nutrients, media reuse, and setup reminders. What step are you on right now?`;
}

function toReminder(start, offsetDays, title, note, category) {
  return {
    date: new Date(start.getTime() + offsetDays * MS_PER_DAY).toISOString().slice(0, 10),
    title,
    note,
    category
  };
}

function buildRecommendations(profile) {
  const feedWindows = schedulingRules.defaults.feedWindowsByClimate[profile.climateMode] || 3;
  const recommendations = [
    `Starter feed rhythm: ${feedWindows} feed windows per day in ${profile.climateMode} conditions, using short cycles until runoff is measured.`,
    `IBC mixing baseline: ${schedulingRules.defaults.ibcCirculation.normal}.`,
    "After adding nutrients, circulate the IBC for 45-60 minutes before trusting pH or EC/TDS readings."
  ];

  if (profile.runoffLevel === "none") {
    recommendations.push("No runoff means the media may be drying too far between feeds. Check moisture and consider another short feed window.");
  } else if (profile.runoffLevel === "steady" || profile.runoffLevel === "too much") {
    recommendations.push("Steady or heavy runoff means the feed window may be too long. Shorten the cycle before adding return plumbing.");
  } else if (profile.runoffLevel === "unknown") {
    recommendations.push("Measure runoff at one representative tower before trusting the schedule.");
  } else {
    recommendations.push("Light runoff is useful for calibration. Once tuned, the goal is minimal excess.");
  }

  if (profile.ph == null || Number.isNaN(profile.ph)) {
    recommendations.push("Add a pH reading before Pip suggests pH adjustment.");
  } else if (profile.ph < 5.6) {
    recommendations.push("pH appears low. Circulate, retest, then adjust upward slowly if the reading holds.");
  } else if (profile.ph > 6.5) {
    recommendations.push("pH appears high for many leafy greens and herbs. Circulate, retest, then adjust downward slowly if needed.");
  } else {
    recommendations.push("pH is in a reasonable starter range for many leafy greens and herbs.");
  }

  if (!profile.ec) recommendations.push("Add EC/TDS so Pip can track nutrient strength over time.");

  return recommendations;
}

function buildContextLead(retrieval) {
  const best = retrieval?.matches?.[0];
  if (!best?.title) return "";
  return `From the HydroPip notes on ${best.title}: `;
}
