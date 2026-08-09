import { getCropRhythmEstimate } from "./plantingCalendar.js";

const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const ACTIVE_GROW_LOCATIONS = new Set(["hydropip_tower", "nursery_for_hydropip"]);
const INACTIVE_SEED_STATUSES = new Set(["on_hand", "harvested", "failed", "needs_reorder", "finished"]);

export function buildRhythmSetupPlan({ profile = {}, input = {}, now = new Date() } = {}) {
  const preferredTaskDay = cleanWeekday(input.preferredTaskDay || profile.preferredTaskDays?.[0]) || "saturday";
  const preferredTaskTime = cleanTime(input.preferredTaskTime || profile.preferredTaskTime) || "09:00";
  const batchStartDate = cleanDate(input.batchStartDate ?? profile.batchStartDate);
  const lastMaintenanceDate = cleanDate(input.lastMaintenanceDate ?? profile.lastMaintenanceDate);
  const rhythmStage = cleanRhythmStage(input.rhythmStage ?? profile.rhythmStage);
  const crops = normalizeCurrentCrops(input.currentCrops, { rhythmStage, now });
  const profilePatch = {
    growZone: cleanText(input.growZone ?? profile.growZone, 12),
    rhythmStage,
    nutrientStage: cleanNutrientStage(input.nutrientStage ?? profile.nutrientStage),
    batchStartDate,
    currentTankLevel: cleanText(input.currentTankLevel ?? profile.currentTankLevel, 80),
    expectedRefillWindow: cleanText(input.expectedRefillWindow ?? profile.expectedRefillWindow, 80),
    preferredTaskDays: [preferredTaskDay],
    preferredTaskTime,
    lastMaintenanceDate,
    rhythmConfiguredAt: new Date(now).toISOString()
  };
  const reminders = [];
  if (lastMaintenanceDate) {
    reminders.push({
      title: "Weekly tank, mixing circulation, and flow check",
      note: "hydropip_weekly_v2",
      category: "maintenance",
      dueDate: alignedDate(lastMaintenanceDate, 7, preferredTaskDay),
      dueTime: preferredTaskTime,
      repeat: { frequency: "weekly" },
      notify: true
    });
    reminders.push({
      title: "Review plant stage, refill window, pumps, and hoses",
      note: "hydropip_monthly_v2",
      category: "nutrients",
      dueDate: alignedDate(lastMaintenanceDate, 30, preferredTaskDay),
      dueTime: preferredTaskTime,
      repeat: { frequency: "monthly" },
      notify: true
    });
  }
  if (batchStartDate) {
    reminders.push({
      title: "Review tank level and next nutrient batch",
      note: "hydropip_refill_review_v1",
      category: "nutrients",
      dueDate: alignedDate(batchStartDate, 28, preferredTaskDay),
      dueTime: preferredTaskTime,
      repeat: null,
      notify: true
    });
  }
  for (const crop of crops) {
    const marker = rhythmReminderMarker(crop);
    if (crop.expectedHarvestDate) {
      reminders.push({
        title: `Review ${crop.crop} harvest window`,
        note: `${marker}:harvest`,
        category: "harvest",
        dueDate: crop.expectedHarvestDate,
        dueTime: preferredTaskTime,
        repeat: null,
        notify: true
      });
    }
    if (crop.succession && crop.nextSuccessionDate) {
      reminders.push({
        title: `Succession sow ${crop.crop}`,
        note: `${marker}:succession`,
        category: "grow",
        dueDate: crop.nextSuccessionDate,
        dueTime: preferredTaskTime,
        repeat: null,
        notify: true
      });
    }
  }
  const missing = [];
  if (!profilePatch.growZone) missing.push("grow zone");
  if (!profilePatch.rhythmStage) missing.push("crop stage");
  if (!crops.length) missing.push("currently planted crops");
  if (!batchStartDate) missing.push("last tank fill or batch start date");
  if (!profilePatch.nutrientStage) missing.push("nutrient stage");
  if (!profilePatch.currentTankLevel) missing.push("current tank level");
  if (!lastMaintenanceDate) missing.push("last maintenance date");
  return {
    profilePatch,
    currentCrops: crops,
    reminders,
    replaceCurrentCrops: input.replaceCurrentCrops !== false,
    missing,
    ready: missing.length === 0
  };
}

export function rhythmSetupStatus({ profile = {}, seeds = [] } = {}) {
  const currentCrops = seeds.filter(isCurrentGrowSeed);
  const missing = [];
  if (!profile.growZone) missing.push("grow zone");
  if (!profile.rhythmStage && !currentCrops.some((seed) => cleanRhythmStage(seed.status))) missing.push("crop stage");
  if (!currentCrops.length) missing.push("currently planted crops");
  if (!profile.batchStartDate) missing.push("last tank fill or batch start date");
  if (!profile.nutrientStage) missing.push("nutrient stage");
  if (!profile.currentTankLevel) missing.push("current tank level");
  if (!profile.lastMaintenanceDate) missing.push("last maintenance date");
  return {
    configured: Boolean(profile.rhythmConfiguredAt),
    ready: missing.length === 0,
    missing,
    currentCropCount: currentCrops.length,
    label: profile.rhythmConfiguredAt ? "Refresh my Rhythm" : "Set up my Rhythm with Pip"
  };
}

export function rhythmCropKey(crop = {}) {
  return [cropNameKey(crop.crop), cleanText(crop.variety, 120)?.toLowerCase() || ""].join("|");
}

export function isCurrentGrowSeed(seed = {}) {
  return ACTIVE_GROW_LOCATIONS.has(String(seed.plantingLocation || "").toLowerCase())
    && !INACTIVE_SEED_STATUSES.has(String(seed.status || "").toLowerCase());
}

function normalizeCurrentCrops(value, { rhythmStage, now } = {}) {
  const items = Array.isArray(value) ? value : [];
  const output = [];
  const seen = new Set();
  for (const item of items.slice(0, 30)) {
    const crop = cleanText(item?.crop, 80);
    if (!crop) continue;
    const normalized = {
      crop,
      variety: cleanText(item?.variety, 120),
      sowDate: cleanDate(item?.sowDate),
      status: cleanCropStatus(item?.status || rhythmStage),
      plantingLocation: cleanGrowLocation(item?.plantingLocation),
      succession: item?.succession !== false
    };
    const estimate = getCropRhythmEstimate({ crop, stage: normalized.status, sowDate: normalized.sowDate, date: now });
    if (estimate) {
      normalized.successionIntervalDays = estimate.successionDays;
      normalized.expectedHarvestDate = estimate.expectedHarvestStart;
      normalized.expectedHarvestEnd = estimate.expectedHarvestEnd;
      normalized.nextSuccessionDate = normalized.succession ? estimate.successionDate : null;
      normalized.timingSource = estimate.estimateBasis === "saved_sow_date" ? "hydropip_crop_sow_date" : "hydropip_crop_stage_estimate";
      normalized.timingEstimateAsOf = estimate.estimateAsOf;
      normalized.timingEstimateBasis = estimate.estimateBasis;
    }
    const key = rhythmCropKey(normalized);
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(normalized);
  }
  return output;
}

function cleanCropStatus(value) {
  const status = String(value || "growing").toLowerCase();
  return ["sown", "germinating", "sprouted", "growing", "harvest_ready", "harvesting"].includes(status) ? status : "growing";
}

function cleanGrowLocation(value) {
  return value === "nursery_for_hydropip" ? value : "hydropip_tower";
}

function cleanRhythmStage(value) {
  const stage = String(value || "").toLowerCase();
  return ["sown", "germinating", "sprouted", "growing", "harvest_ready", "harvesting"].includes(stage) ? stage : null;
}

function cleanNutrientStage(value) {
  const stage = String(value || "").toLowerCase();
  return ["seeds", "growing", "fruiting"].includes(stage) ? stage : null;
}

function cleanWeekday(value) {
  const day = String(value || "").toLowerCase();
  return WEEKDAYS.includes(day) ? day : null;
}

function cleanTime(value) {
  const time = String(value || "");
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(time) ? time : null;
}

function cleanDate(value) {
  const date = String(value || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const parsed = new Date(`${date}T12:00:00Z`);
  return Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date ? null : date;
}

function cleanText(value, maxLength) {
  const text = String(value || "").trim();
  return text ? text.slice(0, maxLength) : null;
}

function cropNameKey(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function alignedDate(anchor, addDays, preferredDay) {
  const date = new Date(`${anchor}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + addDays);
  const target = WEEKDAYS.indexOf(preferredDay);
  if (target >= 0) {
    const delta = (target - date.getUTCDay() + 7) % 7;
    date.setUTCDate(date.getUTCDate() + delta);
  }
  return date.toISOString().slice(0, 10);
}

export function localDueAt(dueDate, dueTime, timezoneOffsetMinutes = 0) {
  if (!dueDate || !dueTime) return null;
  const local = new Date(`${dueDate}T${dueTime}:00Z`);
  if (Number.isNaN(local.getTime())) return null;
  local.setTime(local.getTime() + (Number(timezoneOffsetMinutes || 0) * 60 * 1000));
  return local.toISOString();
}

export function rhythmReminderMarker(crop = {}) {
  return `hydropip_rhythm_crop:${rhythmCropKey(crop).replace(/[^a-z0-9|]+/g, "_")}`;
}
