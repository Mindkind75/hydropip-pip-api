// Topic decisions never authorize a grow/account switch or a data mutation.
export const conversationTopics = [
  {id:'crop_rotation',title:'Crop Planning & Rotation',patterns:[[/\b(crop rotation|succession|planting calendar|planting window|what (?:can|should) i (?:plant|grow)|when (?:can|should) i (?:plant|sow)|seasonal|crop plan|companion plant)/,5],[/\b(zone|season|rotate|rotation|planting dates?)\b/,2]]},
  {id:'seeds_germination',title:'Seeds & Germination',patterns:[[/\b(seed packets?|seed packs?|seed vault|germinat\w*|sprout\w*|seed starting|sow\w*|seedling trays?)\b/,5],[/\b(seeds?|seedlings?)\b/,2]]},
  {id:'feeding_nutrients',title:'Feeding & Nutrients',patterns:[[/\b(nutrients?|masterblend|fertili[sz]\w*|calcium nitrate|epsom|nutrient batch|feeding|feed schedule|mixing ratio|mix a batch)\b/,5],[/\b(ph|ec|tds|ppm|feed|dosage|grams|dilut\w*)\b/,2]]},
  {id:'plant_health',title:'Bugs & Plant Health',patterns:[[/\b(aphids?|mites?|whitefl\w*|pests?|bugs?|yellow\w* leaves|leaves (?:are |turning )?yellow|wilti?\w*|root rot|disease|mildew|leaf spots?|brown (?:leaves|roots)|holes in (?:the )?leaves|plant health)\b/,5],[/\b(leaves|leaf|roots|spots|curling|drooping)\b/,2]]},
  {id:'maintenance',title:'Maintenance & Cleaning',patterns:[[/\b(clean\w*|saniti[sz]\w*|disinfect\w*|maintenance|flush\w*|algae|winteri[sz]\w*)\b/,5]]},
  {id:'troubleshooting',title:'Troubleshooting',patterns:[[/\b(not (?:working|running|pumping|flowing)|won.t (?:start|run)|no (?:flow|water)|leak\w*|clog\w*|blocked|blockage|troubleshoot\w*|pump (?:stopped|failed)|timer|smart plug)\b/,5]]},
  {id:'harvest_reset',title:'Harvest & Reset',patterns:[[/\b(harvest\w*|reset\w*|end of (?:the )?(?:crop|season)|pick (?:my |the )?(?:lettuce|tomatoes|basil)|cut (?:my |the )?(?:lettuce|basil))\b/,5]]},
  {id:'build_parts',title:'Build & Parts',patterns:[[/\b(parts? list|checklist|buy|purchase|shopping|assemble|assembly|build cost|cost to build|pvc|fittings?|bill of materials|support frame)\b/,5],[/\b(build|parts?|towers?|tank size)\b/,2]]},
  {id:'grow_setup',title:'Grow Setup',patterns:[[/\b(footprint|where (?:should|can) i (?:put|place)|how much (?:space|room)|site layout|sunlight|shade hours|outdoor space|reservoir capacity)\b/,5]]}
];
const normalize=value=>String(value||'').normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/germinat(?:on|oin)/g,'germination').replace(/nutri(?:ant|ent)s?/g,'nutrients').replace(/fertalizer/g,'fertilizer').replace(/maint(?:ainance|enence)/g,'maintenance').replace(/\s+/g,' ').trim();
export function topicSignals(message,{imageIntent,hasImage=false}={}) {
  const text=normalize(message);
  if(imageIntent==='seed_inventory'||imageIntent==='seed_inventory_photo')return [{id:'seeds_germination',score:10}];
  if(imageIntent==='plant_health')return [{id:'plant_health',score:10}];
  const scores=conversationTopics.map(topic=>({id:topic.id,score:topic.patterns.reduce((sum,[pattern,weight])=>sum+(pattern.test(text)?weight:0),0)})).filter(item=>item.score>0).sort((a,b)=>b.score-a.score);
  // A generic image request has no subject evidence. Never inspect pixels twice
  // or infer a diagnosis just to decide where a conversation belongs.
  return hasImage&&!text?[]:scores;
}
export function isFollowup(message,allowSubject=false) {
  const text=normalize(message);
  return /^(?:thanks?|thank you|ok(?:ay)?|yes|no|go on|continue|tell me more)[.!?\s]*$/.test(text)||
    /^(?:and |also )?(?:how (?:much|many|often|long)|why|what (?:about|if|size|dimensions)|which one|is (?:that|it)|can (?:i|you)|should i|does (?:that|it)|do (?:i|you))\b/.test(text)&&
    (text.split(' ').length<=7||/\b(that|those|it|them|the (?:first|second|other) one|same)\b/.test(text))&&(allowSubject||topicSignals(text).every(item=>item.score<5))||
    /^(?:what|how) about the (?:first|second|other|last)(?: one)?[?.!]*$/.test(text);
}
function conversationTopic(item) {
  if(conversationTopics.some(topic=>topic.id===item.topicKey))return item.topicKey;
  const starter=String(item.summary||'').match(/^starter:(\w+)$/)?.[1];if(starter)return starter;
  const title=normalize(item.title);
  const exact=conversationTopics.find(topic=>normalize(topic.title)===title);if(exact)return exact.id;
  const signals=topicSignals(item.title+' '+(item.topicSummary?.text||''));
  return signals[0]&&signals[0].score>=5&&(!signals[1]||signals[0].score>signals[1].score)?signals[0].id:null;
}
export function chooseConversationRoute({message,hasImage=false,imageIntent,conversations=[],currentConversationId,projects=[],projectId,hasRecentExchange=false,keptTopicKey=null}={}) {
  const current=conversations.find(item=>item.id===currentConversationId&&item.status==='active');
  const text=normalize(message),active=conversations.filter(item=>item.status==='active');
  const other=projects.filter(item=>item.id!==projectId&&item.status!=='archived'&&normalize(item.title).length>=3&&text.includes(normalize(item.title)));
  const generalOther=/\b(?:my|the|a) (?:other|second|different) (?:grow|notebook|system)\b/.test(text);
  if(other.length||generalOther)return {decision:'ask_grow',reason:'another_grow',message:'Which grow should Pip use for this question?',projects:other.length?other:projects,choices:active};
  if(current&&isFollowup(text)&&hasRecentExchange)return {decision:'keep',conversationId:current.id,reason:keptTopicKey?'kept_topic_followup':'followup',...(keptTopicKey?{topicKey:keptTopicKey}:{})};
  const scores=topicSignals(text,{hasImage,imageIntent});
  if(current&&keptTopicKey&&scores[0]?.id===keptTopicKey&&(!scores[1]||scores[1].score<5)&&isFollowup(text,true))return {decision:'keep',conversationId:current.id,reason:'kept_topic_followup',topicKey:keptTopicKey};
  if(!scores.length||scores[0].score<5)return {decision:'ask',reason:'unclear_subject',message:'Which conversation should Pip use?',choices:active};
  if(scores[1]&&scores[1].score>=5)return {decision:'ask',reason:'multiple_subjects',message:'This touches more than one subject. Where would you like to keep the exchange?',choices:active};
  const topic=scores[0].id,matches=conversations.filter(item=>conversationTopic(item)===topic),live=matches.filter(item=>item.status==='active');
  if(current&&live.some(item=>item.id===current.id))return {decision:'keep',conversationId:current.id,topicKey:topic,reason:'same_subject'};
  if(live.length===1)return {decision:'route',conversationId:live[0].id,topicKey:topic,reason:'clear_subject'};
  if(live.length>1)return {decision:'ask',topicKey:topic,reason:'multiple_threads',message:'More than one conversation matches. Which would you like?',choices:current&&!live.some(x=>x.id===current.id)?[...live,current]:live};
  if(matches.length)return {decision:'ask',topicKey:topic,reason:'archived_match',message:'A matching conversation is archived. Reopen it or choose an active conversation.',choices:[...matches,...active]};
  const title=conversationTopics.find(item=>item.id===topic).title;
  return {decision:'create',topicKey:topic,title,reason:'new_subject'};
}
export function summarizeThread(messages) {
  const userMessages=messages.filter(item=>item.role==='user');
  const selected=userMessages.slice(-6);
  return {text:selected.map(item=>String(item.content).replace(/\s+/g,' ').slice(0,170)).join(' • ').slice(0,1100),messageIds:selected.map(item=>item.id),updatedAt:new Date().toISOString()};
}
export function relevantMessages(message,messages,{limit=6}={}) {
  const stop=new Set('the and for are was were that this with from have what when where which how much many my did say told remember about please your you'.split(' '));
  const terms=[...new Set(normalize(message).match(/[a-z0-9]{3,}/g)||[])].filter(term=>!stop.has(term));
  return messages.filter(item=>item.role==='user').map(item=>{const text=normalize(item.content);return {item,score:terms.reduce((sum,term)=>sum+(text.includes(term)?1:0),0)}}).filter(item=>item.score>0).sort((a,b)=>b.score-a.score||String(b.item.createdAt).localeCompare(String(a.item.createdAt))).slice(0,limit).map(({item})=>({id:item.id,role:item.role,content:item.content,createdAt:item.createdAt,conversationId:item.conversationId}));
}
