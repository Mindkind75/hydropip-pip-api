import {dateInZone} from '../assets/js/reminder-schedule.js';
import {recordTime, readableAnswer} from './pipAnswerPresentation.js';

const explanationWords = new Set(('a about active actual actually again all am an and any are as at been before can check checks complete completed completing completion completions date dates did do does done due earlier evidence explain for from give had has have i if in is it last latest maintenance marked me mean meaning means missed missing most my next no not now of on only or our past planned please previous prove proves record recorded records reminder reminders repeat repeats repeating review reviewing saved say schedule scheduled selected show since system task tasks tell that the their them there these this through time times to today understand us value values was week weekly monthly daily what when whether which why with work would you your').split(' '));
function availableTasks(context = {}) {
  return [...new Map((context.maintenanceReminders || [...(context.activeReminders || []),context.nextMaintenanceReminder])
    .filter(item=>item?.category === 'maintenance').map(item=>[item.id || item.title,item])).values()];
}
export function isSavedTaskExplanation(question, context) {
  let query = String(question).replace(/\b(?:do not|don't)\s+(?:create|change|save|update)(?:\s+or\s+(?:create|change|save|update))*\s+(?:any\s+)?records\b/gi, '');
  for (const task of availableTasks(context)) {
    if (task.title) query = query.replace(new RegExp(task.title.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'),'maintenance task');
  }
  return /\b(?:explain|mean|means|meaning|tell|prove|evidence|whether)\b/i.test(query)
    && /\b(?:my|our|saved|recorded|this|that)\b/i.test(query)
    && /\b(?:maintenance|task|reminder|check)\b/i.test(query)
    && /\b(?:due date|last (?:recorded |marked )?(?:completion|complete)|completion (?:record|date)|recorded completion)\b/i.test(query)
    && !/\b(?:add|create|change|save|update|delete|remove|reschedule|replace|cancel|mark|inspect|inspection|procedure|checklist|steps|dose|mix|nutrient|symptoms?|diagnose|raw|json|code|compare)\b/i.test(query)
    && !/\b(?:how (?:do|should|can|to)|what (?:do|should) i|what would i|also|and then|and (?:how|what|when|why))\b/i.test(query)
    && normalize(query).split(' ').every(word => explanationWords.has(word));
}

function validZone(value) {
  if (!value) return null;
  try {new Intl.DateTimeFormat('en-US',{timeZone:value});return value;} catch {return null;}
}
function day(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value))) return null;
  const date = new Date(value + 'T12:00:00Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0,10) === value ? value : null;
}
function normalize(value) {return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();}
function chooseTask(question, context) {
  let tasks = availableTasks(context);
  const matching = content => tasks.filter(item=>normalize(content).includes(normalize(item.title)));
  const named = matching(question);
  if (named.length) return named.length === 1 ? named[0] : null;
  const frequency = question.match(/\b(daily|weekly|monthly)\b/i)?.[1].toLowerCase();
  if (frequency) tasks = tasks.filter(task=>task.repeat?.frequency === frequency);
  if (/\bnext\b/i.test(question)) {
    tasks = tasks.filter(task => task.status === 'active');
    const next = tasks.find(task => task.id === context.nextMaintenanceReminder?.id);
    // A requested recurrence must not silently resolve to another schedule.
    return next || (frequency && tasks.length === 1 ? tasks[0] : null);
  }
  // A title in the latest exchange can identify a saved task; none of its
  // claimed dates or completion values are used as facts.
  for (const item of (context.recentMessages || []).slice(-2).reverse()) {
    const matches = matching(item.content);
    if (matches.length) return matches.length === 1 ? matches[0] : null;
  }
  return tasks.length === 1 && (context.maintenanceReminders || context.maintenanceReminderCount === 1) ? tasks[0] : null;
}

export function explainSavedTask(question, context, now = new Date()) {
  if (!context || !isSavedTaskExplanation(question, context)) return null;
  const task = chooseTask(question, context);
  const grow = context.project.title;
  if (!task) return availableTasks(context).length === 0 && context.maintenanceReminderCount === 0
    ? `No maintenance task is available in the saved records for ${grow}. A recorded completion would show when someone marked a task done; it would not prove the physical work happened. Open Planner to review your saved tasks.`
    : `A due date is the planned check time; a recorded completion shows when someone marked a task done. Neither proves the physical work happened. Which maintenance task in ${grow} do you mean? You can use its title from Planner.`;
  const zone = validZone(task.timezone);
  const completedDay = day(task.lastCompletedAt);
  const completed = !completedDay && task.lastCompletedAt && Number.isFinite(new Date(task.lastCompletedAt).getTime()) ? new Date(task.lastCompletedAt) : null;
  const dueInstant = task.dueAt && Number.isFinite(new Date(task.dueAt).getTime()) ? new Date(task.dueAt) : null;
  const dueDay = day(task.dueDate);
  const lines = [`For ${task.title} in ${grow}:`];
  if (dueInstant && zone && dueDay && dateInZone(dueInstant,zone) !== dueDay) {
    lines.push('The saved due date and scheduled time disagree. Review them in Planner before relying on the schedule.');
  } else if (dueDay || dueInstant) {
    const dateText = dueInstant ? recordTime(dueInstant.toISOString(),zone || 'UTC') : readableAnswer(dueDay);
    const overdue = dueInstant ? dueInstant < now : dueDay < dateInZone(now,zone || 'UTC');
    lines.push(`The saved due date is ${dateText}. It is the planned check time${overdue ? ' and is in the past' : ''}, not evidence that work was done.`);
  } else lines.push('A usable due date is not recorded for this task.');
  if (completedDay) lines.push(`Last marked complete: ${readableAnswer(completedDay)}${completedDay > dateInZone(now,zone || 'UTC') ? ' (a future date; review it in Planner)' : ''}. This date records a checkmark, not proof that the physical work happened.`);
  else if (completed && completed > now) lines.push(`The saved completion time is ${recordTime(completed.toISOString(),zone || 'UTC')}, which is in the future. Review that record in Planner.`);
  else if (completed) lines.push(`Last marked complete: ${recordTime(completed.toISOString(),zone || 'UTC')}. That records a checkmark, not proof that the physical work happened${dateInZone(completed,zone || 'UTC') < dateInZone(now,zone || 'UTC') ? ' today' : ''}.`);
  else lines.push('No usable completion time is recorded. That does not establish whether you have done the work.');
  if (['daily','weekly','monthly'].includes(task.repeat?.frequency)) lines.push(`It repeats ${task.repeat.frequency}; the schedule alone does not tell us which occurrences you completed or missed.`);
  if (!zone) lines.push('The task has no confirmed time zone; any clock time above is shown in UTC.');
  lines.push('Open Planner to review the record. Confirm what you actually did before repeating work or marking it complete.');
  return lines.join('\n\n');
}
