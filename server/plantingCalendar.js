import { seedPlanningCatalog, zonePlantingCalendar } from "./pipData.js";

const DAY_MS = 24 * 60 * 60 * 1000;

export function getZonePlantingGuidance({ growZone, location, areaType, date } = {}) {
  const zoneText = String(growZone || "").trim();
  const numericZone = Number.parseInt(zoneText, 10);
  const parsedDate = parseCalendarDate(date);
  const month = parsedDate.getUTCMonth() + 1;
  const band = zonePlantingCalendar.zoneBands.find((item) => item.zones.includes(numericZone));
  if (!band) return null;

  const phaseId = band.months[month - 1];
  const phase = zonePlantingCalendar.phases[phaseId];
  if (!phase) return null;

  return {
    zone: zoneText,
    month,
    monthName: parsedDate.toLocaleString("en-US", { month: "long", timeZone: "UTC" }),
    location: cleanText(location),
    areaType: cleanText(areaType).replace(/_/g, " "),
    band: band.label,
    phaseId,
    phaseLabel: phase.label,
    summary: phase.summary,
    plantNow: [...phase.plantNow],
    startNext: [...phase.startNext],
    avoidNow: [...phase.avoidNow],
    systemNotes: [...phase.systemNotes]
  };
}

export function formatZonePlantingGuidance(guidance) {
  if (!guidance) return "No saved USDA zone calendar is available.";
  return [
    `Seasonal calendar: Zone ${guidance.zone}, ${guidance.monthName}, ${guidance.band}`,
    `Seasonal phase: ${guidance.phaseLabel}`,
    `Plant now: ${guidance.plantNow.join(", ")}`,
    `Start next: ${guidance.startNext.join(", ")}`,
    `Avoid now: ${guidance.avoidNow.join(", ")}`,
    `HydroPip notes: ${guidance.systemNotes.join(" ")}`
  ].join("\n");
}

export function getSeedPlanningDashboard({ growZone, location, areaType, date } = {}) {
  const guidance = getZonePlantingGuidance({ growZone, location, areaType, date });
  if (!guidance) return null;
  const now = parseCalendarDate(date);
  const plantNow = cropRecommendationsForNames(guidance.plantNow, { growZone, location, areaType, date: now }).slice(0, 8);
  const startNext = cropRecommendationsForNames(guidance.startNext, { growZone, location, areaType, date: now }).slice(0, 6);
  const featuredIds = new Set([...plantNow, ...startNext].map((item) => item.cropId));
  const hold = seedPlanningCatalog.crops.map((crop) => getSeedSowRecommendation({ growZone, location, areaType, date: now, crop: crop.label }))
    .filter((item) => item?.status === "recommended" && item.decision === "wait" && !featuredIds.has(item.cropId))
    .slice(0, 8);
  return {
    ...guidance,
    plantNow,
    startNext,
    zoneLabel: `Zone ${guidance.zone}`,
    monthLabel: guidance.monthName,
    groups: { plantNow, startNext, hold },
    crops: seedPlanningCatalog.crops.map(({ label }) => label),
    avoidNow: guidance.avoidNow,
    disclaimer: seedPlanningCatalog.disclaimer,
    cropOptions: seedPlanningCatalog.crops.map(({ id, label }) => ({ id, label }))
  };
}

export function getSeedSowRecommendation({ crop, growZone, location, areaType, date, preferredWeekday } = {}) {
  const guidance = getZonePlantingGuidance({ growZone, location, areaType, date });
  if (!guidance) return null;
  const cropConfig = findCrop(crop);
  if (!cropConfig) {
    return {
      status: "crop_not_supported",
      crop: cleanText(crop),
      guidance,
      message: "Pip does not have a crop-specific sowing window for that variety yet. Ask Pip for a tailored recommendation or choose a listed crop.",
      disclaimer: seedPlanningCatalog.disclaimer
    };
  }

  const today = parseCalendarDate(date);
  const currentPhase = guidance.phaseId;
  const directNow = cropConfig.phases.includes(currentPhase);
  const protectedNow = cropConfig.protectedPhases.includes(currentPhase);
  const suitableMonths = upcomingSuitableMonths({ cropConfig, growZone, date: today });
  const first = suitableMonths[0] || { date: today, protected: true };
  const window = contiguousWindow(suitableMonths, first);
  let bestDate = directNow || protectedNow ? today : first.date;
  bestDate = adjustToWeekday(bestDate, preferredWeekday);
  if (bestDate > window.end) bestDate = new Date(window.start);
  const method = protectedNow && !directNow ? "protected_start" : cropConfig.method;
  const decision = directNow ? "plant_now" : protectedNow ? "start_protected" : monthsApart(today, first.date) <= 1 ? "start_next" : "wait";
  const expectedGerminationStart = addDays(bestDate, cropConfig.germinationDays[0]);
  const expectedGerminationEnd = addDays(bestDate, cropConfig.germinationDays[1]);
  const expectedHarvestStart = addDays(bestDate, cropConfig.harvestDays[0]);
  const expectedHarvestEnd = addDays(bestDate, cropConfig.harvestDays[1]);
  const locationLabel = cleanText(location) || `USDA Zone ${guidance.zone}`;
  const result = {
    status: "recommended",
    cropId: cropConfig.id,
    crop: cropConfig.label,
    requestedCrop: cleanText(crop),
    decision,
    decisionLabel: decision === "plant_now" ? "Plant now" : decision === "start_protected" ? "Start under protection" : decision === "start_next" ? "Start next" : "Wait for the next window",
    method,
    methodLabel: method === "protected_start" ? "Start in a protected nursery area, then move it into HydroPip when conditions fit." : "Direct sow in the same damp perlite and vermiculite used in the HydroPip pots.",
    zone: guidance.zone,
    location: cleanText(location),
    areaType: cleanText(areaType).replace(/_/g, " "),
    seasonalPhase: guidance.phaseLabel,
    windowStart: isoDate(window.start),
    windowEnd: isoDate(window.end),
    bestSowDate: isoDate(bestDate),
    germinationWindowStart: isoDate(expectedGerminationStart),
    germinationWindowEnd: isoDate(expectedGerminationEnd),
    expectedHarvestStart: isoDate(expectedHarvestStart),
    expectedHarvestEnd: isoDate(expectedHarvestEnd),
    expectedHarvestDate: isoDate(expectedHarvestStart),
    successionDays: cropConfig.successionDays,
    reason: recommendationReason({ decision, method, crop: cropConfig.label, locationLabel, phase: guidance.phaseLabel }),
    note: cropConfig.note,
    disclaimer: seedPlanningCatalog.disclaimer
  };
  result.reminders = seedPlanReminders(result);
  return result;
}

export function getCropRhythmEstimate({ crop, stage, sowDate, date } = {}) {
  const cropConfig = findCrop(crop);
  if (!cropConfig) return null;
  const today = parseCalendarDate(date);
  const normalizedStage = normalizeRhythmStage(stage);
  const actualSowDate = parseOptionalCalendarDate(sowDate);
  const elapsedDays = actualSowDate ? daysBetween(actualSowDate, today) : estimatedElapsedDays(cropConfig, normalizedStage);
  const timingAnchor = actualSowDate || addDays(today, -elapsedDays);
  const harvestStart = addDays(timingAnchor, cropConfig.harvestDays[0]);
  const harvestEnd = addDays(timingAnchor, cropConfig.harvestDays[1]);
  const germinationEnd = addDays(timingAnchor, cropConfig.germinationDays[1]);
  const successionDate = nextRhythmSuccessionDate(timingAnchor, cropConfig.successionDays, today);
  return {
    cropId: cropConfig.id,
    crop: cropConfig.label,
    requestedCrop: cleanText(crop),
    stage: normalizedStage,
    actualSowDate: actualSowDate ? isoDate(actualSowDate) : null,
    estimatedSowDate: isoDate(timingAnchor),
    sowDateEstimated: !actualSowDate,
    estimateAsOf: isoDate(today),
    estimateBasis: actualSowDate ? "saved_sow_date" : "crop_stage_estimate",
    germinationWindowEnd: isoDate(germinationEnd),
    expectedHarvestStart: isoDate(harvestStart < today ? today : harvestStart),
    expectedHarvestEnd: isoDate(harvestEnd < today ? today : harvestEnd),
    successionDate: isoDate(successionDate),
    successionDays: cropConfig.successionDays,
    note: cropConfig.note,
    disclaimer: "Harvest and succession dates are planning estimates based on the crop category and selected development stage. Adjust them for the seed packet, variety, weather, plant health, and actual growth."
  };
}

export function seedPlanReminders(recommendation, { includeSuccession = false, successionIntervalDays } = {}) {
  if (!recommendation || recommendation.status !== "recommended") return [];
  const interval = Math.max(7, Math.min(90, Number(successionIntervalDays || recommendation.successionDays || 21)));
  const crop = recommendation.crop;
  const method = recommendation.method === "protected_start" ? "protected start" : "direct sow";
  const reminders = [
    { title: `Sow ${crop}`, note: `${method}; zone-based window ${recommendation.windowStart} to ${recommendation.windowEnd}.`, category: "grow", dueDate: recommendation.bestSowDate },
    { title: `Check ${crop} germination`, note: `Expected germination window ${recommendation.germinationWindowStart} to ${recommendation.germinationWindowEnd}. Record seeds sown and sprouts.`, category: "grow", dueDate: recommendation.germinationWindowEnd },
    { title: `Review ${crop} harvest window`, note: `Expected first harvest window begins around ${recommendation.expectedHarvestStart}. Adjust from actual plant development.`, category: "harvest", dueDate: recommendation.expectedHarvestStart }
  ];
  if (includeSuccession) reminders.push({ title: `Succession sow ${crop}`, note: `Repeat approximately every ${interval} days while conditions remain suitable. Add another date after reviewing germination and available pockets.`, category: "grow", dueDate: isoDate(addDays(parseCalendarDate(recommendation.bestSowDate), interval)) });
  return reminders;
}

function cropRecommendationsForNames(names, context) {
  const seen = new Set();
  return names.map((name) => {
    const config = findCrop(name);
    if (!config || seen.has(config.id)) return null;
    seen.add(config.id);
    return getSeedSowRecommendation({ ...context, crop: config.label });
  }).filter((item) => item?.status === "recommended");
}

function findCrop(value) {
  const normalized = cleanText(value).toLowerCase();
  if (!normalized) return null;
  return seedPlanningCatalog.crops.find((item) => item.id === normalized || item.label.toLowerCase() === normalized || item.aliases.some((alias) => normalized.includes(alias) || alias.includes(normalized))) || null;
}

function upcomingSuitableMonths({ cropConfig, growZone, date }) {
  const zone = Number.parseInt(String(growZone || ""), 10);
  const band = zonePlantingCalendar.zoneBands.find((item) => item.zones.includes(zone));
  if (!band) return [];
  const output = [];
  for (let offset = 0; offset < 18; offset += 1) {
    const candidate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + offset, 1, 12));
    const phaseId = band.months[candidate.getUTCMonth()];
    const direct = cropConfig.phases.includes(phaseId);
    const protectedStart = cropConfig.protectedPhases.includes(phaseId);
    if (direct || protectedStart) output.push({ date: candidate, direct, protected: protectedStart });
  }
  return output;
}

function contiguousWindow(months, first) {
  const start = new Date(first.date);
  const matches = months.filter((item) => monthsApart(first.date, item.date) >= 0 && monthsApart(first.date, item.date) <= 2);
  let endMonth = first.date;
  for (const item of matches) {
    if (monthsApart(endMonth, item.date) <= 1) endMonth = item.date;
  }
  const end = new Date(Date.UTC(endMonth.getUTCFullYear(), endMonth.getUTCMonth() + 1, 0, 12));
  return { start, end };
}

function recommendationReason({ decision, method, crop, locationLabel, phase }) {
  if (decision === "plant_now") return `${crop} fits the current ${phase} for ${locationLabel}.`;
  if (decision === "start_protected") return `${crop} can be started under protection now, then moved when outdoor conditions improve in ${locationLabel}.`;
  if (decision === "start_next") return `${crop}'s next favorable HydroPip window is approaching in ${locationLabel}.`;
  return `${crop} is better held for the next favorable seasonal window in ${locationLabel}.`;
}

function adjustToWeekday(date, value) {
  const weekday = Number(value);
  const next = new Date(date);
  if (!Number.isInteger(weekday) || weekday < 0 || weekday > 6) return next;
  next.setUTCDate(next.getUTCDate() + ((weekday - next.getUTCDay() + 7) % 7));
  return next;
}

function addDays(date, days) {
  return new Date(date.getTime() + Number(days || 0) * DAY_MS);
}

function parseOptionalCalendarDate(value) {
  const text = String(value || "").slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return null;
  const parsed = new Date(`${text}T12:00:00Z`);
  return Number.isNaN(parsed.getTime()) || isoDate(parsed) !== text ? null : parsed;
}

function normalizeRhythmStage(value) {
  const stage = String(value || "sown").toLowerCase();
  return ["sown", "germinating", "sprouted", "growing", "harvest_ready", "harvesting"].includes(stage) ? stage : "sown";
}

function estimatedElapsedDays(cropConfig, stage) {
  const germinationMid = Math.round((cropConfig.germinationDays[0] + cropConfig.germinationDays[1]) / 2);
  if (stage === "germinating") return Math.max(1, Math.round(germinationMid / 2));
  if (stage === "sprouted") return cropConfig.germinationDays[1];
  if (stage === "growing") return Math.round((cropConfig.germinationDays[1] + cropConfig.harvestDays[0]) / 2);
  if (stage === "harvest_ready" || stage === "harvesting") return cropConfig.harvestDays[0];
  return 0;
}

function nextRhythmSuccessionDate(anchor, intervalDays, today) {
  const interval = Math.max(7, Math.min(90, Number(intervalDays || 21)));
  const next = addDays(anchor, interval);
  while (next < today) next.setUTCDate(next.getUTCDate() + interval);
  return next;
}

function daysBetween(left, right) {
  return Math.max(0, Math.floor((right.getTime() - left.getTime()) / DAY_MS));
}

function monthsApart(left, right) {
  return (right.getUTCFullYear() - left.getUTCFullYear()) * 12 + right.getUTCMonth() - left.getUTCMonth();
}

function isoDate(value) {
  return value.toISOString().slice(0, 10);
}

function parseCalendarDate(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return new Date(value);
  const parsed = new Date(`${String(value || new Date().toISOString().slice(0, 10)).slice(0, 10)}T12:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function cleanText(value) {
  return String(value || "").trim();
}
