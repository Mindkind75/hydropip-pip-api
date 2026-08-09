const DAY_MS = 24 * 60 * 60 * 1000;

export function buildRhythmOverview({ project, reminders = [], seeds = [], readings = [], seedDashboard = null, now = new Date() } = {}) {
  const today = startOfDay(now);
  const endOfToday = new Date(today.getTime() + DAY_MS - 1);
  const profile = project?.systemProfile || {};
  const activeReminders = reminders.filter((item) => item?.status === "active");
  const datedReminders = activeReminders.map((item) => ({ item, date: reminderDate(item) })).filter((entry) => entry.date).sort((a, b) => a.date - b.date);
  const nowCutoff = new Date(today.getTime() + (3 * DAY_MS));
  const nowTasks = datedReminders.filter((entry) => entry.date <= nowCutoff).slice(0, 5).map(({ item, date }) => ({
    id: item.id,
    title: item.title,
    category: item.category || "general",
    dueAt: date.toISOString(),
    overdue: date < today,
    canComplete: date <= endOfToday,
    repeat: item.repeat?.frequency || null
  }));
  if (!nowTasks.length && datedReminders[0]) {
    const { item, date } = datedReminders[0];
    nowTasks.push({ id: item.id, title: item.title, category: item.category || "general", dueAt: date.toISOString(), overdue: false, canComplete: date <= endOfToday, repeat: item.repeat?.frequency || null, nextUp: true });
  }

  const inventory = seeds.map((seed) => ({ ...seed, packsOnHand: ownedPackCount(seed) })).filter((seed) => seed.packsOnHand > 0);
  const activeCrops = seeds.filter(isCurrentGrowSeed);
  const currentCrops = activeCrops.map((seed) => ({
    seedId: seed.id,
    crop: seed.crop,
    variety: seed.variety || null,
    status: seed.status || "scheduled",
    plantingLocation: seed.plantingLocation,
    locationLabel: plantingLocationLabel(seed.plantingLocation),
    sowDate: seed.sowDate || null
  })).sort((a, b) => String(a.locationLabel).localeCompare(String(b.locationLabel)) || String(a.crop).localeCompare(String(b.crop)));
  const sowNow = (seedDashboard?.groups?.plantNow || []).slice(0, 8).map((recommendation) => {
    const owned = findMatchingSeed(inventory, recommendation.crop);
    return {
      crop: recommendation.crop,
      reason: recommendation.reason,
      bestSowDate: recommendation.bestSowDate,
      method: recommendation.method,
      methodLabel: recommendation.methodLabel,
      packsOnHand: Number(owned?.packsOnHand || 0),
      seedId: owned?.id || null
    };
  }).filter((item) => item.packsOnHand > 0).sort((a, b) => b.packsOnHand - a.packsOnHand || a.crop.localeCompare(b.crop));

  const turnoverDue = String(profile.systemStage || "").toLowerCase() === "resetting" || datedReminders.some(({ item, date }) => {
    const title = String(item.title || "").toLowerCase();
    return date <= new Date(today.getTime() + (21 * DAY_MS)) && /(turnover|reset|harvest|flip)/.test(title);
  });
  const transferChecks = activeCrops.map((seed) => transferCheck(seed, { today, turnoverDue })).filter(Boolean).slice(0, 6);

  const comingNext = datedReminders.filter((entry) => entry.date > nowCutoff).slice(0, 4).map(({ item, date }) => ({
    type: "task",
    title: item.title,
    date: date.toISOString(),
    sourceId: item.id
  }));
  for (const seed of activeCrops.filter((item) => item?.succession && item?.sowDate)) {
    const next = nextSuccessionDate(seed, today);
    if (!next) continue;
    comingNext.push({ type: "succession", title: `Succession sow ${seed.crop}`, date: next.toISOString(), sourceId: seed.id });
  }
  for (const item of (seedDashboard?.groups?.startNext || []).slice(0, 6)) {
    const owned = findMatchingSeed(inventory, item.crop);
    if (!owned) continue;
    comingNext.push({ type: "season", title: `Start next: ${item.crop}`, date: dateOrNull(item.bestSowDate)?.toISOString() || null, sourceId: owned.id, detail: item.reason });
  }
  comingNext.sort((a, b) => String(a.date || "9999").localeCompare(String(b.date || "9999")));

  const latestReading = readings.slice().sort((a, b) => readingTime(b) - readingTime(a))[0] || null;
  const batch = {
    nutrientStage: latestReading?.nutrientStage || profile.nutrientStage || null,
    batchStartDate: latestReading?.batchStartDate || profile.batchStartDate || null,
    currentTankLevel: latestReading?.approximateCurrentTankLevel || latestReading?.currentTankLevel || profile.currentTankLevel || null,
    expectedRefillWindow: latestReading?.expectedRefillWindow || profile.expectedRefillWindow || null,
    dominantCropType: latestReading?.dominantCropType || profile.dominantCropType || null,
    source: latestReading ? "grow_log" : "profile"
  };

  return {
    projectId: project?.id || null,
    generatedAt: new Date(now).toISOString(),
    profileReady: Boolean(profile.growZone && profile.systemStage),
    profile: { growZone: profile.growZone || null, systemStage: profile.systemStage || null, location: profile.location || null },
    summary: {
      nowCount: nowTasks.filter((item) => !item.nextUp).length,
      overdueCount: nowTasks.filter((item) => item.overdue).length,
      sowCount: sowNow.filter((item) => item.packsOnHand > 0).length,
      checkCount: transferChecks.length,
      currentCropCount: currentCrops.length
    },
    nowTasks,
    currentCrops,
    sowNow,
    transferChecks,
    comingNext: comingNext.slice(0, 6),
    batch,
    turnover: {
      active: turnoverDue,
      title: turnoverDue ? "Tower turnover is part of this rhythm." : "Plan the next tower turnover before harvest ends.",
      detail: "At turnover, assess healthy mature plants individually. Suitable plants can continue in a raised bed while you recover the HydroPip media and start the next succession. Moving plants is optional, not required."
    }
  };
}

function isCurrentGrowSeed(seed) {
  const location = String(seed?.plantingLocation || "").toLowerCase();
  const status = String(seed?.status || "").toLowerCase();
  if (!["hydropip_tower", "nursery_for_hydropip"].includes(location)) return false;
  return !["on_hand", "harvested", "failed", "needs_reorder", "finished"].includes(status);
}

function plantingLocationLabel(value) {
  return {
    hydropip_tower: "HydroPip towers",
    nursery_for_hydropip: "Started for this grow"
  }[value] || "Current grow";
}

function transferCheck(seed, { today, turnoverDue }) {
  const status = String(seed?.status || "").toLowerCase();
  const crop = String(seed?.crop || "Seedling");
  if (status === "sprouted") {
    return {
      seedId: seed.id,
      crop,
      kind: "seedling",
      title: `Check ${crop} before moving`,
      detail: "Look for several true leaves and roots that hold the media together. Move it into HydroPip or a suitable bed only when the plant and conditions are ready."
    };
  }
  if ((status === "sown" || status === "germinating") && daysSince(seed.sowDate, today) >= 7) {
    return {
      seedId: seed.id,
      crop,
      kind: "germination",
      title: `Check ${crop} establishment`,
      detail: "Confirm emergence and healthy roots first. This is a progress check, not an automatic transplant date."
    };
  }
  if (status === "growing" && turnoverDue) {
    return {
      seedId: seed.id,
      crop,
      kind: "turnover",
      title: `Assess mature ${crop} at turnover`,
      detail: "If it is healthy and suited to current outdoor conditions, it may continue in a raised bed while HydroPip is reset."
    };
  }
  return null;
}

function nextSuccessionDate(seed, today) {
  const base = dateOrNull(seed.sowDate);
  if (!base) return null;
  const interval = Math.max(7, Math.min(90, Number(seed.successionIntervalDays || 21)));
  const next = new Date(base);
  do next.setDate(next.getDate() + interval); while (next < today);
  return next;
}

function findMatchingSeed(seeds, crop) {
  const key = cropKey(crop);
  return seeds.find((seed) => cropKey(seed.crop) === key || cropKey(seed.crop).includes(key) || key.includes(cropKey(seed.crop)));
}

function cropKey(value) {
  const clean = String(value || "").toLowerCase()
    .replace(/\b(seed|seeds|packet|packets|pack|packs)\b/g, " ")
    .replace(/\b(tomatoes)\b/g, "tomato")
    .replace(/\b(beans|greens|peas|peppers|cucumbers|carrots|radishes|onions|herbs)\b/g, (word) => word.slice(0, -1))
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  if (/\bmalabar\s+spinach\b/.test(clean)) return "malabar spinach";
  if (/\bswiss\s+chard\b/.test(clean) || /\bchard\b/.test(clean)) return "swiss chard";
  const families = ["lettuce", "tomato", "pepper", "cucumber", "squash", "strawberry", "bean", "pea", "basil", "cilantro", "parsley", "dill", "kale", "mizuna", "mustard", "arugula", "radish", "carrot", "okra", "oregano", "thyme", "purslane", "amaranth", "spinach"];
  return families.find((family) => new RegExp(`\\b${family}\\b`).test(clean)) || clean;
}

function ownedPackCount(seed) {
  const packs = Number(seed?.packsOnHand);
  if (Number.isFinite(packs) && packs > 0) return packs;
  const packsMissing = seed?.packsOnHand === null || seed?.packsOnHand === undefined || seed?.packsOnHand === "";
  const inVault = seed?.plantingLocation === "seed_vault";
  const needsReorder = String(seed?.status || "").toLowerCase() === "needs_reorder";
  return packsMissing && inVault && !needsReorder ? 1 : 0;
}

function reminderDate(item) {
  return dateOrNull(item?.dueAt || (item?.dueDate ? `${item.dueDate}T09:00:00` : null));
}

function dateOrNull(value) {
  if (!value) return null;
  const date = value instanceof Date ? new Date(value) : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function startOfDay(value) {
  const date = dateOrNull(value) || new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function daysSince(value, today) {
  const date = dateOrNull(value);
  return date ? Math.floor((today - startOfDay(date)) / DAY_MS) : -1;
}

function readingTime(reading) {
  return dateOrNull(reading?.takenAt || reading?.createdAt || reading?.batchStartDate)?.getTime() || 0;
}
