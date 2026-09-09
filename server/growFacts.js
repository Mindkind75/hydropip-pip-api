// Only user statements and the selected grow may supply personal facts. Never
// promote an assistant's example/default into the grower's setup.
const cropNames = ['lettuce', 'basil', 'arugula', 'kale', 'bok choy', 'cilantro', 'dill', 'parsley', 'spinach', 'chard', 'tomato', 'pepper', 'cucumber', 'strawberry'];

export function parseTowerCount(value) {
  const match = String(value || '').toLowerCase().match(/\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten)(?:[-\s]+hydropip)?[-\s]+towers?\b/);
  if (!match) return null;
  const count = Number(match[1]) || ['one','two','three','four','five','six','seven','eight','nine','ten'].indexOf(match[1]) + 1;
  return count >= 1 && count <= 40 ? count : null;
}

export function statedGrowFacts(text) {
  const value = String(text || '').toLowerCase();
  const facts = {};
  // Do not extract preferences from a question asking what to choose/remember.
  if (!/\b(i|we|my|our)\b/.test(value)) return facts;
  const towerStatement = value.match(/\b(?:i|we)\s+(?:(?:only|now|currently)\s+)?(?:have(?:\s+room\s+for)?|want|own|use|am using|are using|can fit|plan to (?:use|build))\s+([^.!?]+)/);
  const towers = towerStatement && parseTowerCount(towerStatement[1]);
  if (towers) facts.towerCount = towers;
  const cropStatement = value.match(/\b(?:(?:i|we)\s+(?:want|grow|plant|am growing|are growing|plan to grow)|(?:my|our)\s+crops\s+are)\s+([^.!?]+)/);
  if (cropStatement && !/\b(?:not|don't|except|without)\b/.test(cropStatement[1])) {
    const crops = cropNames.filter(crop => new RegExp('\\b' + crop + '(?:s|es)?\\b').test(cropStatement[1]));
    if (crops.length) facts.crops = crops;
  }
  const zone = value.match(/\b(?:usda\s+)?zone\s+(\d{1,2}[ab]?)\b/);
  if (zone && Number.parseInt(zone[1], 10) <= 13) facts.growZone = zone[1];
  return facts;
}

export function conversationGrowFacts(history = []) {
  return history.filter(item => item.role === 'user').reduce((facts, item) => ({ ...facts, ...statedGrowFacts(item.content) }), {});
}

export function recallGrowFacts(question, profile, history = []) {
  if (!/\b(?:did i (?:say|mention|tell)|do you remember|what (?:have i|did we) (?:told|tell|say|mention)|what(?:'s| is| are) my saved (?:setup|profile|schedule)|remember my)\b/i.test(question)) return null;
  const said = /\b(?:say|mention|tell|told)\b/i.test(question);
  const facts = said ? conversationGrowFacts(history) : profile;
  const lines = [];
  if (/\btowers?\b/i.test(question)) lines.push(facts.towerCount ? `You ${said ? 'said you have room for' : 'have'} ${facts.towerCount} HydroPip tower${Number(facts.towerCount) === 1 ? '' : 's'}.` : 'I do not have a tower count in this conversation yet.');
  if (/\b(?:crops?|plant|grow)\b/i.test(question)) lines.push(facts.crops?.length ? `Your crops are ${facts.crops.join(' and ')}.` : 'I do not have your crop choices in this conversation yet.');
  if (/\bzone\b/i.test(question)) lines.push(facts.growZone ? `Your USDA zone is ${facts.growZone}.` : 'Your USDA zone is not recorded here yet.');
  if (/\b(?:pump|feed|schedule)\b/i.test(question) && facts.pumpSchedule) lines.push(`Your saved pump schedule: ${facts.pumpSchedule}`);
  return lines.length ? lines.join('\n') : null;
}

function clock(seconds) {
  const day = ((seconds % 86400) + 86400) % 86400;
  const hour = Math.floor(day / 3600), minute = Math.floor(day % 3600 / 60), second = day % 60;
  return `${hour % 12 || 12}:${String(minute).padStart(2, '0')}${second ? ':' + String(second).padStart(2, '0') : ''} ${hour >= 12 ? 'PM' : 'AM'}`;
}

export function savedPumpAnswer(profile = {}, question = '') {
  if (/\b(?:feed|schedule|smart plug|outlet)\b/i.test(question) && /\b(?:1[0-2]|0?[1-9])(?::\d\d)?\s*(?:am|pm)\b/i.test(question) && /\b\d+(?:\.\d+)?\s*(?:seconds?|secs?|minutes?|mins?)\b/i.test(question)) {
    const answer = savedPumpAnswer({pumpSchedule:question});
    return answer.replace('Using your saved pump schedule:', 'Using the schedule in your question:').replace('Your saved pump schedule is:', 'The schedule in your question is:').replace('every saved feed window','every requested feed window');
  }
  const schedule = String(profile.pumpSchedule || '').trim();
  if (!schedule) return null;
  const matches = [...schedule.matchAll(/\b(1[0-2]|0?[1-9])(?::([0-5]\d))?\s*(am|pm)\b/gi)];
  const durations = [...schedule.matchAll(/\b(\d+(?:\.\d+)?)\s*(seconds?|secs?|minutes?|mins?)\b/gi)];
  // Free text with separate mixing timings or multiple durations is ambiguous.
  // Preserve it verbatim and ask, instead of inventing a replacement schedule.
  if (!matches.length || durations.length !== 1 || /\bmix(?:ing)?\b/i.test(schedule)) {
    return `Your saved pump schedule is: ${schedule}\n\nKeep those settings. Which times are tower-feed starts, and how long is each feed? I need those details to calculate the 15-minute pre-mix without replacing your saved schedule.`;
  }
  const seconds = Math.round(Number(durations[0][1]) * (/^(sec)/i.test(durations[0][2]) ? 1 : 60));
  if (!(seconds > 0 && seconds <= 86400)) return `Your saved pump schedule is: ${schedule}\nConfirm the feed duration before programming the outlets.`;
  const cycles = matches.map(match => {
    const start = ((Number(match[1]) % 12) + (/pm/i.test(match[3]) ? 12 : 0)) * 3600 + Number(match[2] || 0) * 60;
    return `- Mix ${clock(start - 900)}–${clock(start)}; feed ${clock(start)}–${clock(start + seconds)}.`;
  });
  return `Using your saved pump schedule: ${schedule}\n${cycles.join('\n')}\n\nSet it like this: MIX 15 min -> FEED ${seconds % 60 ? seconds + ' seconds' : seconds / 60 + ' min'}, before every saved feed window. Keep the feed duration calibrated to your media and runoff.`;
}
