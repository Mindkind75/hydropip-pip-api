const plannerUrl = "https://www.hydropip.com/pip?pro=1";

export function buildPipCalendar({ reminders = [], calendarName = "HydroPip Planner" } = {}) {
  const events = dedupeReminders(reminders.filter((item) => item.status === "active" && (item.dueAt || item.dueDate)))
    .map(calendarEvent)
    .filter(Boolean);

  return foldCalendarLines([
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//HydroPip Systems//Pip Planner//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escapeCalendarText(calendarName)}`,
    "X-WR-CALDESC:Your private HydroPip grow tasks",
    "REFRESH-INTERVAL;VALUE=DURATION:PT1H",
    "X-PUBLISHED-TTL:PT1H",
    ...events.flat(),
    "END:VCALENDAR"
  ]);
}

function calendarEvent(item) {
  const start = eventStart(item);
  if (!start) return null;
  const category = categoryLabel(item.category);
  const lines = [
    "BEGIN:VEVENT",
    `UID:${escapeCalendarText(item.id)}@hydropip.com`,
    `DTSTAMP:${formatUtc(item.updatedAt || item.createdAt || new Date())}`,
    `SUMMARY:${escapeCalendarText(item.title || "HydroPip task")}`,
    `DESCRIPTION:${escapeCalendarText(calendarDescription(item, category))}`,
    `CATEGORIES:${escapeCalendarText(category)}`,
    `URL:${plannerUrl}`,
    "STATUS:CONFIRMED",
    ...start
  ];
  const frequency = String(item.repeat?.frequency || "").toUpperCase();
  if (["DAILY", "WEEKLY", "MONTHLY"].includes(frequency)) lines.push(`RRULE:FREQ=${frequency}`);
  if (item.notify) {
    lines.push("BEGIN:VALARM", "ACTION:DISPLAY", "TRIGGER:-PT30M", `DESCRIPTION:${escapeCalendarText(item.title || "HydroPip task")}`, "END:VALARM");
  }
  lines.push("END:VEVENT");
  return lines;
}

function eventStart(item) {
  if (item.dueAt) {
    const date = new Date(item.dueAt);
    if (Number.isNaN(date.getTime())) return null;
    const end = new Date(date.getTime() + 30 * 60 * 1000);
    return [`DTSTART:${formatUtc(date)}`, `DTEND:${formatUtc(end)}`];
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(item.dueDate || ""))) return null;
  const day = String(item.dueDate).replace(/-/g, "");
  return [`DTSTART:${day}T090000`, `DTEND:${day}T093000`];
}

function dedupeReminders(reminders) {
  const seen = new Set();
  return reminders.filter((item) => {
    if (item.note === "hydropip_default") return false;
    const marker = /^hydropip_(weekly|monthly)_v2$/.test(item.note || "") ? item.note : "";
    const when = item.dueAt || item.dueDate || "";
    const repeat = item.repeat?.frequency || "";
    const key = marker || `${String(item.title || "").trim().toLowerCase()}|${when}|${repeat}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function calendarDescription(item, category) {
  const starterDetails = {
    hydropip_weekly_v2: "Check the IBC level and leaks, pH and EC/TDS after circulation, flow at every tower, and plants for pests or stress.",
    hydropip_monthly_v2: "Flush the main feed line, clean pump intakes, inspect hoses, calibrate meters, and check nutrient supply."
  }[item.note];
  const note = starterDetails || (/^hydropip_/.test(item.note || "") ? "" : String(item.note || "").trim());
  return `${category}.${note ? ` ${note}` : ""}\n\nOpen this task in Pip Pro: ${plannerUrl}`;
}

function categoryLabel(value) {
  return {
    grow: "Planting",
    maintenance: "System Care",
    nutrients: "Water & Nutrients",
    harvest: "Harvest"
  }[value] || "HydroPip";
}

function formatUtc(value) {
  const date = value instanceof Date ? value : new Date(value);
  return `${formatDate(date)}T${String(date.getUTCHours()).padStart(2, "0")}${String(date.getUTCMinutes()).padStart(2, "0")}${String(date.getUTCSeconds()).padStart(2, "0")}Z`;
}

function formatDate(date) {
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`;
}

function escapeCalendarText(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function foldCalendarLines(lines) {
  const folded = lines.flatMap((line) => foldLine(String(line)));
  return `${folded.join("\r\n")}\r\n`;
}

function foldLine(line) {
  const chunks = [];
  let remaining = line;
  while (Buffer.byteLength(remaining, "utf8") > 73) {
    let index = Math.min(73, remaining.length);
    while (index > 1 && Buffer.byteLength(remaining.slice(0, index), "utf8") > 73) index -= 1;
    chunks.push(remaining.slice(0, index));
    remaining = ` ${remaining.slice(index)}`;
  }
  chunks.push(remaining);
  return chunks;
}
