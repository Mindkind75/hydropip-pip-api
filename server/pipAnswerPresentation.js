// Saved records are data, not instructions. Keep one readable copy in the request.
const labels = {
  dueDate: 'due date', dueTime: 'scheduled time', lastCompletedAt: 'last marked complete',
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
function recordTime(value, timeZone) {
  if (!/^\d{4}-\d{2}-\d{2}T/.test(String(value)) || !Number.isFinite(new Date(value).getTime())) return value;
  try {return new Intl.DateTimeFormat('en-US', {dateStyle:'medium',timeStyle:'short',timeZone}).format(new Date(value)) + ' (' + timeZone + ')';}
  catch {return recordTime(value, 'UTC');}
}
export function answerModelOptions(model, {questionIntent, hasPhoto, message = ''} = {}) {
  // Only configure the model we have evaluated. An operator's model override keeps its defaults.
  if (!/^gpt-5-mini(?:-2025-08-07)?$/.test(model)) return {};
  const simpleExplanation = questionIntent === 'hydroponic_guidance' && !hasPhoto
    && /\bdue date\b/i.test(message)
    && /\b(explain|meaning|what does)\b/i.test(message)
    && !/\b(done today|completed today|prove|missed)\b/i.test(message)
    && !/\b(dose|mix|nutrient|pesticide|disease|toxic|electri|pump|flow|root)\w*/i.test(message);
  return {text: {verbosity: 'low'}, ...(simpleExplanation ? {reasoning: {effort: 'low'}} : {})};
}
export function readableAnswer(answer) {
  // A narrow display guard covers known storage labels without rewriting measurements or links.
  return String(answer || '').split(/(https?:\/\/[^\s<>]+|```[\s\S]*?```)/g).map(part => {
    if (/^(?:https?:\/\/|```)/.test(part)) return part;
    let result = part.replace(/\brhythmStage\s*[:=]\s*sown\b/g, 'crop stage: seeds planted')
      .replace(/\bnutrientStage\s*[:=]\s*seeds\b/g, 'nutrient recipe stage: seed starting');
    for (const [key, label] of Object.entries(labels)) result = result.replace(new RegExp('\\b' + key + '\\b', 'g'), label);
    return result;
  }).join('');
}
