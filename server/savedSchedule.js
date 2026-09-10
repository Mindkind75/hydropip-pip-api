import { dateInZone, reminderInstant } from '../assets/js/reminder-schedule.js';

function validZone(value) {
  if (!value || typeof value !== 'string') return null;
  try { new Intl.DateTimeFormat('en-US', { timeZone: value }); return value; }
  catch { return null; }
}

export function scheduleContext(reminders = []) {
  const active = reminders.filter(item => item.status === 'active');
  const maintenance = active.filter(item => item.category === 'maintenance');
  const dated = maintenance.map(item => ({ item, date: taskInstant(item) }))
    .filter(item => item.date).sort((a, b) => a.date - b.date || String(a.item.id).localeCompare(String(b.item.id)));
  return {
    nextMaintenanceReminder: dated[0]?.item || null,
    maintenanceReminderCount: maintenance.length,
    scheduleTimeZones: [...new Set(active.map(item => validZone(item.timezone)).filter(Boolean))]
  };
}

function taskInstant(item) {
  if (!item?.dueAt && !item?.dueDate) return null;
  if (!item.dueAt && !calendarDay(item.dueDate)) return null;
  try { return reminderInstant(item.dueAt || item.dueDate, validZone(item.timezone) || 'UTC'); }
  catch { return null; }
}

function calendarDay(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))) return null;
  const date = new Date(value + 'T12:00:00Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value ? value : null;
}

function displayDay(day) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(day + 'T12:00:00Z'));
}

export function answerClock(profile = {}, context = {}, now = new Date()) {
  const profileZone = validZone(profile.timeZone);
  const zones = context.scheduleTimeZones || [...new Set((context.activeReminders || []).map(item => validZone(item.timezone)).filter(Boolean))];
  const timeZone = profileZone || (zones.length === 1 ? zones[0] : null);
  return { currentDate: dateInZone(now, timeZone || 'UTC'), timeZone: timeZone || 'unknown',
    timeZoneSource: profileZone ? 'grow profile' : timeZone ? 'saved task schedule; not a claim about the grower’s current location' : 'not confirmed',
    scheduleTimeZones: zones };
}

export function recallMaintenanceTask(question, context, now = new Date()) {
  if (!context) return null;
  // A narrow saved-record lookup. Requests to change a task or explain how to
  // perform maintenance still use the normal reasoning / reviewed-action path.
  const query = String(question).replace(/\b(?:do not|don't)\s+(?:create|change|save|update)(?:\s+or\s+(?:create|change|save|update))*\s+(?:any\s+)?records\b/gi, '');
  if (!/\b(?:what|which|when|show)\b/i.test(query) || !/\b(?:my|our|saved|this grow)\b/i.test(query)
    || !/\bnext\s+(?:(?:saved|scheduled|weekly|routine)\s+)?(?:maintenance|system[- ]care)\s+(?:check|task|reminder)\b/i.test(query)
    || /\b(?:add|create|change|save|update|delete|remove|reschedule|replace|cancel|also|compare|how|why|explain|steps|procedure|should|would|if|earlier|previously)\b/i.test(query)
    || /\b(?:and|then)\s+(?:what|when|which|show|tell|calculate)\b/i.test(query)) return null;
  const task = context.nextMaintenanceReminder;
  const count = context.maintenanceReminderCount ?? 0;
  const grow = context.project.title;
  if (!task) return count
    ? `Your maintenance tasks in ${grow} have no usable saved due date, so I cannot identify the next one. Open Planner to review their dates.`
    : `No active maintenance task is saved in ${grow}. Open Planner to review your schedule or add a maintenance check.`;
  const zone = validZone(task.timezone);
  const date = taskInstant(task);
  if (!date) return null;
  if (task.dueAt && zone && task.dueDate && task.dueDate !== dateInZone(date, zone)) return null;
  const day = calendarDay(task.dueDate) || dateInZone(date, zone || 'UTC');
  const dateText = displayDay(day);
  const time = task.dueAt && zone ? new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: zone }).format(date) : null;
  const overdue = day < dateInZone(now, zone || 'UTC');
  const repeat = ['daily', 'weekly', 'monthly'].includes(task.repeat?.frequency) ? ` It repeats ${task.repeat.frequency}.` : '';
  let answer = `Your next saved maintenance check for ${grow} is ${task.title}.\n\n${overdue ? 'It was due' : 'It is due'} ${dateText}${time ? ' at ' + time : ''}${zone ? ' (' + zone + ')' : ''}.${repeat}\n\nNext step: Open Planner and review this task. ${overdue ? 'Confirm whether it has already been done before marking it complete.' : task.note ? 'Use its saved instructions when you carry out the check.' : 'Review the task details before carrying out the check.'}`;
  if (/\bsaved\b.*\bmissing\b|\bmissing\b.*\bsaved\b/i.test(query)) {
    answer += '\n\nSaved: the task title, due date' + (time ? ', scheduled time' : '') + (zone ? ', schedule time zone' : '') + (repeat ? ', and repeat schedule.' : '.');
    if (task.lastCompletedAt && Number.isFinite(new Date(task.lastCompletedAt).getTime())) answer += ' Last marked complete: ' + displayDay(dateInZone(task.lastCompletedAt, zone || 'UTC')) + '.';
    const missing = [!task.note && 'task-specific instructions', !zone && 'a schedule time zone', !task.lastCompletedAt && 'a recorded completion'].filter(Boolean);
    if (missing.length) answer += '\nNot recorded for this task: ' + missing.join(', ') + '.';
  }
  return answer;
}
