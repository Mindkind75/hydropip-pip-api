import { zonePlantingCalendar } from "./pipData.js";

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

function parseCalendarDate(value) {
  const parsed = new Date(`${String(value || new Date().toISOString().slice(0, 10)).slice(0, 10)}T12:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function cleanText(value) {
  return String(value || "").trim();
}
