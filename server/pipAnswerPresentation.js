// Saved records are data, not instructions. Keep one readable copy in the request.
const labels = {
  dueDate: 'due date', dueAt: 'scheduled date and time', dueTime: 'scheduled time', lastCompletedAt: 'last marked complete',
  completionCount: 'recorded completions', lastMaintenanceDate: 'last recorded maintenance date',
  preferredTaskTime: 'preferred task time', localTime: 'local scheduled time',
  createdAt: 'record created', updatedAt: 'last updated', completedAt: 'marked complete',
  rhythmStage: 'crop stage', nutrientStage: 'nutrient recipe stage', batchStartDate: 'batch start date',
  currentTankLevel: 'last recorded tank level', preferredTaskDays: 'preferred task days',
  growZone: 'USDA zone', reservoirGallons: 'reservoir capacity in gallons',
  timezone: 'schedule time zone', timeZone: 'time zone', systemProfile: 'saved grow profile'
};
export function readableLabel(key) {
  return labels[key] || key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ').toLowerCase();
}
function readableValue(key, value) {
  if (key === 'rhythmStage' && value === 'sown') return 'seeds planted';
  if (key === 'nutrientStage' && value === 'seeds') return 'seed starting';
  return value;
}
export function readableRecords(value, {keepIds = false, timeZone = 'UTC'} = {}) {
  if (Array.isArray(value)) return value.map(item => readableRecords(item, {keepIds, timeZone}));
  if (!value || typeof value !== 'object') return value;
  const zone = value.timezone || value.timeZone || timeZone;
  return Object.fromEntries(Object.entries(value)
    .filter(([key]) => keepIds || !/^(?:id|userId|projectId|conversationId|exchangeId|wixMemberId)$/.test(key))
    .map(([key, item]) => [readableLabel(key), !keepIds && /^(?:dueAt|lastCompletedAt|completedAt|createdAt|updatedAt)$/.test(key) && item
      ? recordTime(item, zone) : readableRecords(readableValue(key, item), {keepIds, timeZone: zone})]));
}
export function recordTime(value, timeZone) {
  if (!/^\d{4}-\d{2}-\d{2}T/.test(String(value)) || !Number.isFinite(new Date(value).getTime())) return value;
  try {return new Intl.DateTimeFormat('en-US', {dateStyle:'medium',timeStyle:'short',timeZone}).format(new Date(value)) + ' (' + timeZone + ')';}
  catch {return recordTime(value, 'UTC');}
}
export function answerModelOptions(model) {
  // Only configure the model we have evaluated. An operator's model override keeps its defaults.
  if (!/^gpt-5-mini(?:-2025-08-07)?$/.test(model)) return {};
  // Simple record explanations now use saved facts directly. All remaining
  // generated answers keep normal reasoning, including mixed requests.
  return {text: {verbosity: 'low'}};
}
export function savedTimeZones(context) {
  const zones = new Map();
  function visit(value, inherited = 'UTC') {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) return value.forEach(item => visit(item, inherited));
    const zone = value.timezone || value.timeZone || inherited;
    for (const [key, item] of Object.entries(value)) {
      if (/^(?:dueAt|lastCompletedAt|completedAt|createdAt|updatedAt)$/.test(key) && /^\d{4}-\d{2}-\d{2}T/.test(String(item)) && Number.isFinite(new Date(item).getTime())) {
        const instant = new Date(item).toISOString();
        if (!zones.has(instant)) zones.set(instant, new Set());
        zones.get(instant).add(zone);
      } else if (typeof item === 'object') visit(item, zone);
    }
  }
  visit(context);
  return Object.fromEntries([...zones].map(([instant, values]) => [instant, values.size === 1 ? [...values][0] : 'UTC']));
}
export function readableHistory(history, presentation = {}) {
  // Keep user wording and all original history used for facts/actions intact.
  return history.map(item => item.role === 'assistant' ? {...item, content: readableAnswer(item.content, presentation)} : item);
}
export function readableAnswer(answer, {timeZone = 'UTC', savedTimeZones: zones = {}} = {}) {
  // A narrow display guard covers known storage labels without rewriting measurements or links.
  return String(answer || '').split(/(https?:\/\/[^\s<>]+|```[\s\S]*?```)/g).map(part => {
    if (/^(?:https?:\/\/|```)/.test(part)) return part;
    let result = part.replace(/\brhythmStage\s*[:=]\s*sown\b/g, 'crop stage: seeds planted')
      .replace(/\bnutrientStage\s*[:=]\s*seeds\b/g, 'nutrient recipe stage: seed starting');
    for (const [key, label] of Object.entries(labels)) result = result.replace(new RegExp('\\b' + key + '\\b', 'g'), label);
    return result.replace(/\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})\b/g, value => {
      if (!Number.isFinite(new Date(value).getTime())) return value;
      return recordTime(value, zones[new Date(value).toISOString()] || timeZone);
    }).replace(/\b(\d{4}-\d{2}-\d{2})\b/g, value => {
      const date = new Date(value + 'T12:00:00Z');
      return Number.isFinite(date.getTime()) && date.toISOString().slice(0,10) === value
        ? new Intl.DateTimeFormat('en-US',{dateStyle:'medium',timeZone:'UTC'}).format(date) : value;
    });
  }).join('');
}
