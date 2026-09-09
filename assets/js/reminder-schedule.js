// Shared by the browser calendar and the API. A recurrence follows the
// reminder's wall clock, not the machine's timezone. Month-end is anchored.
const formatters = new Map();
export function safeTimeZone(value) {
  try { new Intl.DateTimeFormat('en-US', { timeZone: value || 'UTC' }).format(); return value || 'UTC'; }
  catch { return 'UTC'; }
}
export function zonedParts(value, timeZone = 'UTC') {
  timeZone = safeTimeZone(timeZone);
  let formatter = formatters.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat('en-CA', { timeZone, year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23' });
    formatters.set(timeZone, formatter);
  }
  const parts = Object.fromEntries(formatter.formatToParts(new Date(value)).filter(p => p.type !== 'literal').map(p => [p.type, Number(p.value)]));
  return parts;
}
function stamp(p) { return Date.UTC(p.year, p.month - 1, p.day, p.hour || 0, p.minute || 0, p.second || 0); }
export function zonedDate(parts, timeZone = 'UTC') {
  const desired = stamp(parts);
  // Sample offsets on both sides of a transition. In a repeated hour choose
  // the earlier instant; in a missing hour move forward by the DST gap.
  const offsets = new Set([-36, -12, 0, 12, 36].map(hours => {
    const instant = desired + hours * 3600000;
    return stamp(zonedParts(instant, timeZone)) - instant;
  }));
  const candidates = [...offsets].map(offset => desired - offset).sort((a,b) => a-b);
  const exact = candidates.find(instant => stamp(zonedParts(instant, timeZone)) === desired);
  if (exact !== undefined) return new Date(exact);
  const forward = candidates.filter(instant => stamp(zonedParts(instant, timeZone)) > desired);
  forward.sort((a,b) => stamp(zonedParts(a,timeZone)) - stamp(zonedParts(b,timeZone)));
  if (!forward.length) throw new RangeError('Unable to resolve reminder local time');
  return new Date(forward[0]);
}
export function reminderInstant(value, timeZone = 'UTC') {
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(value))) {
    const [year,month,day] = value.split('-').map(Number);
    return zonedDate({year,month,day}, timeZone);
  }
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) throw new RangeError('Invalid reminder date');
  return date;
}
export function dateInZone(value, timeZone = 'UTC') {
  const p = zonedParts(value, timeZone);
  return `${p.year}-${String(p.month).padStart(2,'0')}-${String(p.day).padStart(2,'0')}`;
}
export function prepareRepeat(repeat, value, timeZone = 'UTC') {
  if (!repeat?.frequency) return null;
  if (!['daily','weekly','monthly'].includes(repeat.frequency)) throw new RangeError('Unsupported repeat frequency');
  const p = zonedParts(reminderInstant(value, timeZone), timeZone);
  const time = repeat.localTime;
  return {
    frequency: repeat.frequency,
    anchorDay: Number.isInteger(repeat.anchorDay) && repeat.anchorDay >= 1 && repeat.anchorDay <= 31 ? repeat.anchorDay : p.day,
    localTime: /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(time || '') ? time : [p.hour,p.minute,p.second].map(n => String(n).padStart(2,'0')).join(':')
  };
}
export function nextOccurrence(value, repeat, timeZone = 'UTC') {
  const date = reminderInstant(value, timeZone);
  const rule = prepareRepeat(repeat, date, timeZone);
  if (!rule) return null;
  const p = zonedParts(date, timeZone);
  let next;
  if (rule.frequency === 'monthly') {
    next = new Date(Date.UTC(p.year, p.month, 1));
    const lastDay = new Date(Date.UTC(next.getUTCFullYear(), next.getUTCMonth()+1, 0)).getUTCDate();
    next.setUTCDate(Math.min(rule.anchorDay, lastDay));
  } else next = new Date(Date.UTC(p.year, p.month - 1, p.day + (rule.frequency === 'weekly' ? 7 : 1)));
  const [hour,minute,second] = rule.localTime.split(':').map(Number);
  return zonedDate({year:next.getUTCFullYear(),month:next.getUTCMonth()+1,day:next.getUTCDate(),hour,minute,second}, timeZone);
}
export function nextRecurringDate(value, frequency, completedAt, timeZone = 'UTC', repeat = {}) {
  const completed = reminderInstant(completedAt || new Date(), timeZone);
  let next = reminderInstant(value || completed, timeZone);
  const rule = prepareRepeat({...repeat,frequency}, next, timeZone);
  if (!rule) return null;
  // Advance from the original schedule, skipping occurrences already elapsed.
  // The bound supports over a century of daily overdue reminders and prevents
  // malformed input from making a request loop indefinitely.
  for (let i=0;i<50000;i++) {
    next = nextOccurrence(next, rule, timeZone);
    if (next > completed) return next.toISOString();
  }
  throw new RangeError('Reminder schedule is too far in the past');
}
