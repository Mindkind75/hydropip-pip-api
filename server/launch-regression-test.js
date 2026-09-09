import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'hydropip-launch-'));
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_MEMORY_FILE:path.join(temp,'memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(temp,'training.md')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();
const {askPip}=await import('./pipAgent.js');
const {fallbackAnswer}=await import('./pipTools.js');
const {nextRecurringDate,prepareRepeat,nextOccurrence,dateInZone}=await import('../assets/js/reminder-schedule.js');
const {BuildEstimateSync}=await import('../assets/js/build-estimate-sync.js');
const results=[];
async function check(name,run){try{await run();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});console.error('FAIL '+name+'\n'+error.stack)}}
const pro={active:true,plan:'pip_pro'},user={id:'launch-test-a',name:'Fictional launch tester'};
await m.upsertUser(user);
const {project:a}=await m.createProject({user,title:'Same name',type:'hydropip_build',systemProfile:{towerCount:2,crops:['lettuce','basil'],pumpSchedule:'Feed at 8:00 AM and 2:00 PM, 90 seconds each'},subscription:pro});
const {project:b}=await m.createProject({user,title:'Same name',type:'hydropip_build',systemProfile:{towerCount:6,crops:['kale'],pumpSchedule:'Feed at 9:00 AM, 2 minutes each'},subscription:pro});
await check('Exact two-tower question and factual follow-up',async()=>{
 const first='I have room for two HydroPip towers outdoors in USDA Zone 9. I want lettuce and basil. What should I do first?';
 const reply=await askPip({message:first,profile:{},history:[]});
 assert.match(reply.answer,/2 HydroPip towers/);assert.match(reply.answer,/lettuce/);assert.match(reply.answer,/basil/);assert.doesNotMatch(reply.answer,/4 HydroPip towers/);
 const next=await askPip({message:'How many towers did I say I have room for, and which crops do I want?',history:[{role:'user',content:first},{role:'assistant',content:reply.answer}]});
 assert.match(next.answer,/2 HydroPip towers/);assert.match(next.answer,/lettuce and basil/);
});
await check('Assistant defaults do not become recalled user facts',async()=>{
 const reply=await askPip({message:'How many towers did I say I have room for?',history:[{role:'assistant',content:'You can use 4 HydroPip towers.'}]});
 assert.match(reply.answer,/do not have a tower count/);assert.doesNotMatch(reply.answer,/4 HydroPip towers/);
});
await check('Saved schedule survives normal and fallback answer paths',async()=>{
 const reply=await askPip({message:'How should I program the smart plug to follow my saved schedule?',user,projectId:a.id,subscription:pro});
 for(const answer of [reply.answer,fallbackAnswer('How should I program my smart plug schedule?',{matches:[]},a.systemProfile)]){
  assert.match(answer,/8:00 AM/);assert.match(answer,/2:00 PM/);assert.match(answer,/90 seconds/);assert.match(answer,/7:45 AM/);assert.match(answer,/1:45 PM/);assert.doesNotMatch(answer,/FEED 5 min/);
 }
});
await check('Selected grow changes schedule and current question overrides saved count',async()=>{
 const reply=await askPip({message:'How should I program the smart plug schedule?',user,projectId:b.id,subscription:pro,profile:a.systemProfile});
 assert.match(reply.answer,/9:00 AM/);assert.match(reply.answer,/2 min/);assert.doesNotMatch(reply.answer,/90 seconds/);
 const current=await askPip({message:'I have room for three HydroPip towers. How much space do I need?',user,projectId:b.id,subscription:pro});assert.match(current.answer,/3 HydroPip towers/);
 assert.equal((await m.getProject({userId:user.id,projectId:b.id})).systemProfile.towerCount,6);
});
await check('An explicit new feed time overrides the answer without rewriting the saved schedule',async()=>{
 const reply=await askPip({message:'How should I program my smart plug to feed at 10 AM for 60 seconds instead?',user,projectId:a.id,subscription:pro});
 assert.match(reply.answer,/10:00 AM/);assert.match(reply.answer,/9:45 AM/);assert.doesNotMatch(reply.answer,/8:00 AM/);
 assert.equal((await m.getProject({userId:user.id,projectId:a.id})).systemProfile.pumpSchedule,a.systemProfile.pumpSchedule);
});
await check('Month-end anchor survives February and leap years',()=>{
 let rule=prepareRepeat({frequency:'monthly'},'2026-01-31T14:00:00Z','America/New_York');
 let next=nextOccurrence('2026-01-31T14:00:00Z',rule,'America/New_York');assert.equal(next.toISOString(),'2026-02-28T14:00:00.000Z');
 next=nextOccurrence(next,rule,'America/New_York');assert.equal(next.toISOString(),'2026-03-31T13:00:00.000Z');
 assert.equal(nextRecurringDate('2024-01-31T14:00:00Z','monthly','2024-01-31T15:00:00Z','America/New_York'),'2024-02-29T14:00:00.000Z');
});
await check('Both DST transitions preserve the reminder clock in New York',()=>{
 assert.equal(nextRecurringDate('2026-10-31T13:00:00Z','weekly','2026-10-31T14:00:00Z','America/New_York'),'2026-11-07T14:00:00.000Z');
 assert.equal(nextRecurringDate('2026-03-01T14:00:00Z','weekly','2026-03-01T15:00:00Z','America/New_York'),'2026-03-08T13:00:00.000Z');
});
await check('Missing/repeated DST hours and non-hour timezone offsets are defined',()=>{
 assert.equal(nextRecurringDate('2026-03-07T07:30:00Z','daily','2026-03-07T08:00:00Z','America/New_York'),'2026-03-08T07:30:00.000Z');
 assert.equal(nextRecurringDate('2026-10-31T05:30:00Z','daily','2026-10-31T06:00:00Z','America/New_York'),'2026-11-01T05:30:00.000Z');
 assert.equal(nextRecurringDate('2026-09-01T03:15:00Z','weekly','2026-09-01T04:00:00Z','Asia/Kathmandu'),'2026-09-08T03:15:00.000Z');
});
await check('Overdue completion skips elapsed occurrences and stores the local date',async()=>{
 assert.equal(nextRecurringDate('2026-01-31T14:00:00Z','monthly','2026-03-15T14:00:00Z','America/New_York'),'2026-03-31T13:00:00.000Z');
 const saved=await m.createProjectReminder({userId:user.id,projectId:a.id,subscription:pro,reminder:{title:'Old monthly task',dueAt:'2025-01-31T14:00:00Z',timezone:'America/New_York',repeat:{frequency:'monthly'}}});
 const updated=await m.updateProjectReminder({userId:user.id,projectId:a.id,reminderId:saved.reminder.id,subscription:pro,patch:{status:'completed'}});
 assert.equal(updated.reminder.repeat.anchorDay,31);assert.equal(updated.reminder.dueDate,dateInZone(updated.reminder.dueAt,'America/New_York'));assert.ok(new Date(updated.reminder.dueAt)>new Date());
 assert.throws(()=>nextRecurringDate('2026-01-01','invalid','2026-01-02'),/Unsupported/);
});
const storage=()=>{const map=new Map();return{getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v)}};
const clients=[];
function client(owner,store,hooks={}){
 const c=new BuildEstimateSync({memberId:owner,storage:store,retryMs:60000,onChange:value=>{c.view=value},onStatus:()=>{},request:async(method,body)=>{
  if(hooks.offline)throw Error('offline');if(hooks.expired)throw Object.assign(Error('expired'),{status:401});
  try {const result=method==='GET'?{preferences:await m.getUserPreferences({userId:owner})}:{preferences:await m.updateUserPreferences({userId:owner,patch:body.patch})};if(hooks.afterRequest)await hooks.afterRequest(method,result);return result}catch(error){error.status=error.statusCode;throw error}
 }});clients.push(c);return c;
}
await check('Pending uncheck survives immediate reload and replaces old saved checkmark',async()=>{
 await m.updateUserPreferences({userId:user.id,patch:{buildEstimate:{checked:{pump:true}}}});
 const store=storage(),one=client(user.id,store);await one.load();let draft=one.value();draft.checked.pump=false;one.stage(draft);one.dispose();
 const two=client(user.id,store);await two.load();assert.ok(!(await m.getUserPreferences({userId:user.id})).buildEstimate.checked.pump);two.dispose();
});
await check('Offline and expired-session edits survive reload and retry',async()=>{
 const store=storage(),hooks={},one=client(user.id,store,hooks);await one.load();hooks.offline=true;let draft=one.value();draft.checked.tower=true;draft.purchases.tower={paid:'31.23',date:'2026-09-09',retailer:'Audit store',owned:true};one.stage(draft);await one.flush();one.dispose();
 const two=client(user.id,store,hooks);await two.load();assert.equal(two.value().checked.tower,true);hooks.offline=false;hooks.expired=true;await two.flush();assert.ok(Object.keys(two.state.pending).length);hooks.expired=false;await two.flush();const saved=(await m.getUserPreferences({userId:user.id})).buildEstimate;assert.equal(saved.checked.tower,true);assert.equal(saved.purchases.tower.paid,31.23);assert.equal(saved.purchases.tower.retailer,'Audit store');two.dispose();
});
await check('Revision conflict merges another device edit instead of replacing it',async()=>{
 const hooks={},one=client(user.id,storage(),hooks);await one.load();let draft=one.value();draft.checked.local=true;one.stage(draft);
 hooks.afterRequest=async method=>{if(method!=='GET')return;hooks.afterRequest=null;const latest=(await m.getUserPreferences({userId:user.id})).buildEstimate;latest.checked.remote=true;await m.updateUserPreferences({userId:user.id,patch:{buildEstimate:latest,buildEstimateBaseRevision:latest.revision}})};
 await one.flush();const saved=(await m.getUserPreferences({userId:user.id})).buildEstimate;assert.equal(saved.checked.local,true);assert.equal(saved.checked.remote,true);one.dispose();
});
await check('Edits made while a save is in flight are not acknowledged away',async()=>{
 let release,arrived;const ready=new Promise(r=>arrived=r),hold=new Promise(r=>release=r);const hooks={},one=client(user.id,storage(),hooks);await one.load();let draft=one.value();draft.checked.pump=true;one.stage(draft);
 hooks.afterRequest=async method=>{if(method==='PATCH'){hooks.afterRequest=null;arrived();await hold}};
 const running=one.flush();await ready;draft=one.value();draft.checked.pump=false;one.stage(draft);release();await running;assert.ok(!(await m.getUserPreferences({userId:user.id})).buildEstimate.checked.pump);one.dispose();
});
await check('One browser storage keeps two accounts separate',async()=>{
 const other='launch-test-b';await m.upsertUser({id:other});const store=storage(),one=client(user.id,store);await one.load();let draft=one.value();draft.checked.private=true;one.stage(draft);one.dispose();const two=client(other,store);await two.load();assert.ok(!two.value().checked.private);assert.equal((await m.getUserPreferences({userId:other})).buildEstimate,null);two.dispose();
});
await check('Storage failure keeps pending edits in memory and reports that they are not saved',async()=>{
 const notices=[],hooks={offline:true};const broken={getItem:()=>null,setItem:()=>{throw Error('quota')}};
 const one=client(user.id,broken,hooks);one.onStatus=text=>notices.push(text);await one.load();const draft=one.value();draft.checked.quota=true;one.stage(draft);await one.flush();
 assert.match(notices.at(-1),/not saved yet/);assert.equal(one.value().checked.quota,true);hooks.offline=false;await one.flush();assert.equal((await m.getUserPreferences({userId:user.id})).buildEstimate.checked.quota,true);one.dispose();
});
for(const c of clients)c.dispose();
if(process.env.PIP_LAUNCH_QA_OUTPUT){fs.mkdirSync(process.env.PIP_LAUNCH_QA_OUTPUT,{recursive:true});fs.writeFileSync(path.join(process.env.PIP_LAUNCH_QA_OUTPUT,'launch-regression-results.json'),JSON.stringify(results,null,2))}
console.log(`${results.filter(x=>x.pass).length}/${results.length} launch regressions passed`);
if(results.some(x=>!x.pass))process.exitCode=1;
