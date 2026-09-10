import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {randomUUID} from 'node:crypto';
const postgres=process.argv.includes('--postgres'),ui=process.argv.includes('--ui'),preview=process.argv.includes('--preview');
const out=process.env.PIP_BATCH_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'pip-daily-guidance-'));fs.mkdirSync(out,{recursive:true});
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:postgres?(process.env.PIP_TEST_DATABASE_URL||'postgres://piptest@127.0.0.1:55439/pip_batch4_candidate'):'',PIP_DATABASE_SSL:'false',PIP_MEMORY_FILE:path.join(out,'memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_BRIDGE_SECRET:'batch-four-fictional-test-only',PIP_RATE_LIMIT_MAX:'5000',DOTENV_CONFIG_PATH:path.join(out,'absent.env'),PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4205,http://127.0.0.1:4206'});
const m=await import('./pipMemory.js');if(!postgres)m.resetMemoryForTests();
const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js'),{askPip,compactAnswer}=await import('./pipAgent.js');
const {dailyGuidance}=await import('./pipGuidance.js'),{growWorkspace}=await import('./growWorkspace.js');
const server=await new Promise(resolve=>{const s=app.listen(preview?4205:ui?4206:0,'127.0.0.1',()=>resolve(s))}),base='http://127.0.0.1:'+server.address().port;
const pro={active:true,plan:'pip_pro'},user={id:'batch4-'+randomUUID(),name:'Fictional Batch Four Tester'},other={id:'other-'+randomUUID()};
const token=issuePipSession({member:user,subscription:pro}),otherToken=issuePipSession({member:other,subscription:pro}),freeToken=issuePipSession({member:user,subscription:{active:false}});
const results=[];let grow,second,foreign,inventory,plantReview,taskReview,seedReview;
async function api(url,method='GET',body,auth=token){const r=await fetch(base+'/api/pip'+url,{method,headers:{Authorization:'Bearer '+auth,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});return{status:r.status,data:await r.json(),headers:Object.fromEntries(r.headers)}}
async function ok(url,method,body){const r=await api(url,method,body);assert.ok(r.status<300,JSON.stringify(r));return r.data}
async function check(name,fn){try{await fn();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});throw error}}
const pathFor=(id=grow.id)=>'/projects/'+id;
const review=async(action,id=grow.id)=>(await ok(pathFor(id)+'/action-reviews','POST',{action:{proposalId:randomUUID(),...action},timezone:'America/New_York'})).review;
const apply=async(r,id=grow.id)=>(await ok(pathFor(id)+'/action-reviews/'+r.id+'/apply','POST',{confirm:true,reviewRevision:r.revision})).review;
const seeds=async()=> (await ok(pathFor()+'/seeds')).seeds;
const tasks=async()=> (await ok(pathFor()+'/reminders')).reminders;
const today='2026-09-10',plantedOn=new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
try{
 await check('File or PostgreSQL storage starts; additive review migration is repeatable',async()=>{
  assert.equal((await m.getMemoryHealth()).mode,postgres?'postgres':'file');
  if(postgres){const {pool}=await m.conversationStorage(),sql=fs.readFileSync(new URL('./migrations/003-action-reviews.sql',import.meta.url),'utf8');await pool.query(sql);await pool.query(sql)}
 });
 await check('Create separate synthetic grows and seed inventory',async()=>{
  grow=(await ok('/projects','POST',{type:'hydropip_build',title:'Batch Four - Daily greens',systemProfile:{growZone:'9b',reservoirGallons:37,towerCount:2,crops:['lettuce'],experienceMode:'guided',onboardingComplete:true}})).project;
  second=(await ok('/projects','POST',{type:'hydropip_build',title:'Batch Four - Other grow',systemProfile:{onboardingComplete:true}})).project;
  foreign=(await m.createProject({user:other,subscription:pro,type:'hydropip_build',title:'Other owner'})).project;
  inventory=(await ok(pathFor()+'/seeds','POST',{seed:{crop:'Lettuce',variety:'Buttercrunch',source:'Fictional seed company',packsOnHand:2,plantingLocation:'seed_vault'}})).seed;
 });
 await check('Calendar preview saves nothing; concurrent retries apply exactly once with a durable receipt',async()=>{
  const before=(await tasks()).length;
  taskReview=await review({type:'calendar_change',operation:'add',reminders:[{title:'Check roots',dueDate:today,note:'Look before moving',repeat:{frequency:'weekly'}},{title:'Check flow',dueDate:today}]});
  assert.equal((await tasks()).length,before);assert.equal(taskReview.rows.length,2);assert.equal(taskReview.grow,grow.title);
  const [a,b]=await Promise.all([apply(taskReview),apply(taskReview)]);assert.deepEqual(a,b);assert.equal((await tasks()).length,before+2);
  assert.equal(a.result.reminderCount,2);
  assert.equal((await api(pathFor()+'/action-reviews/'+taskReview.id+'/apply','POST',{confirm:false})).status,400);
 });
 await check('Seed photo review groups duplicates; replaying preview and apply never adds extra packs',async()=>{
  const action={proposalId:'photo_'+randomUUID(),type:'seed_pack_inventory',items:[{crop:inventory.crop,variety:inventory.variety,source:inventory.source,packsOnHand:1},{crop:inventory.crop,variety:inventory.variety,source:inventory.source,packsOnHand:2}]};
  seedReview=await review(action);assert.match(seedReview.rows[0].before,/2 packs/);assert.match(seedReview.rows[0].after,/5 packs/);assert.equal((await seeds()).find(s=>s.id===inventory.id).packsOnHand,2);
  await apply(seedReview);const replay=await review(action);assert.equal(replay.id,seedReview.id);assert.ok(replay.appliedAt);await apply(replay);assert.equal((await seeds()).find(s=>s.id===inventory.id).packsOnHand,5);
 });
 await check('A stale inventory review requires another review and makes no partial change',async()=>{
  const r=await review({type:'seed_pack_inventory',items:[{crop:inventory.crop,variety:inventory.variety,source:inventory.source,packsOnHand:1},{crop:'Basil',packsOnHand:1}]});
  await ok(pathFor()+'/seeds/'+inventory.id,'PATCH',{patch:{packsOnHand:6}});
  assert.equal((await api(pathFor()+'/action-reviews/'+r.id+'/apply','POST',{confirm:true,reviewRevision:r.revision})).status,409);
  assert.ok(!(await seeds()).some(s=>s.crop==='Basil'));assert.equal((await seeds()).find(s=>s.id===inventory.id).packsOnHand,6);
 });
 await check('Planting review validates date and quantity, keeps owned packs, and creates one separate plant record',async()=>{
  const planting={seedId:inventory.id,sowDate:plantedOn,seedsSown:12,plantingLocation:'nursery_for_hydropip',notes:'Started in a clean tray'};
  for(const patch of [{seedsSown:0},{seedsSown:2.5},{sowDate:'2026-02-31'},{sowDate:'2099-01-01'},{seedId:'missing'},{plantingLocation:'unknown'}])assert.ok((await api(pathFor()+'/action-reviews','POST',{action:{type:'planting',planting:{...planting,...patch}}})).status>=400);
  plantReview=await review({type:'planting',planting});assert.match(plantReview.notice,/pack counts stay unchanged/);
  assert.equal((await seeds()).filter(s=>s.plantingLocation!=='seed_vault').length,0);
  await Promise.all([apply(plantReview),apply(plantReview)]);const saved=(await seeds()).filter(s=>s.plantingLocation!=='seed_vault');
  assert.equal(saved.length,1);assert.equal(saved[0].seedsSown,12);assert.equal(saved[0].sowDate,plantedOn);assert.equal(saved[0].packsOnHand,0);assert.equal((await seeds()).find(s=>s.id===inventory.id).packsOnHand,6);
  const context=await m.buildProjectContext({userId:user.id,projectId:grow.id});assert.ok(JSON.stringify(context).includes('Started in a clean tray'));
 });
 await check('Cross-owner, cross-grow, unauthenticated and free action writes are rejected',async()=>{
  const body={action:{type:'seed_pack_inventory',items:[{crop:'Basil',packsOnHand:1}]}};
  assert.equal((await api(pathFor(foreign.id)+'/action-reviews','POST',body)).status,404);
  assert.equal((await api(pathFor()+'/action-reviews','POST',body,otherToken)).status,404);
  assert.equal((await api(pathFor()+'/action-reviews','POST',body,freeToken)).status,402);
  assert.equal((await api(pathFor()+'/action-reviews','POST',body,'invalid')).status,401);
  assert.equal((await api(pathFor(second.id)+'/action-reviews/'+plantReview.id+'/apply','POST',{confirm:true})).status,404);
  assert.equal((await api(pathFor()+'/workspace','GET',null,freeToken)).status,402);
  assert.equal((await api(pathFor(foreign.id)+'/workspace')).status,404);
 });
 await check('Invalid tasks fail before saving any item; date edits display and save the reviewed date',async()=>{
  const before=(await tasks()).length;
  for(const bad of [{title:'Invalid',dueDate:'2026-02-31'},{title:'Invalid',dueDate:today,repeat:{frequency:'yearly'}},{title:'Invalid',dueAt:'bad'}])assert.equal((await api(pathFor()+'/action-reviews','POST',{action:{type:'calendar_change',reminders:[{title:'Valid first',dueDate:today},bad]}})).status,400);
  assert.equal((await tasks()).length,before);
  const r=await review({type:'calendar_change',reminders:[{title:'Timed check',dueAt:today+'T13:00:00Z',dueDate:today,repeat:{frequency:'weekly'}}]});const saved=await apply(r),id=saved.result.recordIds[0];
  const change=await review({type:'calendar_change',operation:'update',reminderIds:[id],patch:{dueDate:'2026-09-15'}});
  assert.match(change.rows[0].after,/2026-09-15/);await apply(change);const task=(await tasks()).find(t=>t.id===id);assert.equal(task.dueAt,null);assert.equal(task.dueDate,'2026-09-15');assert.equal(task.repeat.frequency,'weekly');
  const stale=await review({type:'calendar_change',operation:'update',reminderIds:[id],patch:{title:'Reviewed title'}});
  await ok(pathFor()+'/reminders/'+id,'PATCH',{patch:{title:'Edited on another device'}});
  assert.equal((await api(pathFor()+'/action-reviews/'+stale.id+'/apply','POST',{confirm:true,reviewRevision:stale.revision})).status,409);
 });
 await check('A reviewed replacement removes only the tasks shown; later additions and deleted receipts stay safe',async()=>{
  const replacement=await review({type:'calendar_change',operation:'replace_all',reminders:[{title:'Replacement schedule',dueDate:today}]});
  const later=(await ok(pathFor()+'/reminders','POST',{reminder:{title:'Added after review',dueDate:today}})).reminder;
  await apply(replacement);assert.deepEqual((await tasks()).map(r=>r.title).sort(),['Added after review','Replacement schedule']);
  const saved=await apply(replacement);const id=saved.result.recordIds[0];await ok(pathFor()+'/reminders/'+id,'DELETE');await apply(replacement);
  assert.deepEqual((await tasks()).map(r=>r.id),[later.id]);
 });
 await check('Rhythm counts every overdue task, respects local dates, and links recent changes and planted quantities',async()=>{
  for(let i=0;i<7;i++)await ok(pathFor()+'/reminders','POST',{reminder:{title:'Overdue check '+i,dueDate:'2026-09-01'}});
  const w=await growWorkspace({userId:user.id,projectId:grow.id,now:new Date('2026-09-10T03:30:00Z'),timezone:'America/New_York'});
  assert.equal(w.rhythm.summary.overdueCount,7);assert.equal(w.rhythm.currentCrops[0].seedsSown,12);assert.ok(w.rhythm.nextStep.sourceId);assert.equal(w.rhythm.nextStep.source,'planner');assert.ok(w.rhythm.recentChanges.every(c=>c.source&&c.sourceId));
  const localTask=await review({type:'calendar_change',reminders:[{title:'Local date check',dueDate:'2026-09-09'}]});await apply(localTask);
  const local=await growWorkspace({userId:user.id,projectId:grow.id,now:new Date('2026-09-10T03:30:00Z'),timezone:'America/New_York'});
  assert.equal(local.rhythm.summary.overdueCount,7);assert.equal(local.rhythm.summary.dueTodayCount,1);
  assert.equal((await api(pathFor()+'/workspace?timezone=bad')).status,400);
  const read=await api(pathFor()+'/workspace');assert.match(read.headers['cache-control'],/no-store/);
 });
 await check('Signed-in non-beta feedback is accepted without making the correction a global fact',async()=>{
  const r=await api('/feedback','POST',{feedback:{rating:'not_helpful',category:'pip_answer',message:'The answer missed my saved grow quantity.',includeContext:false,projectId:grow.id}},freeToken);
  assert.ok(r.status<300,JSON.stringify(r));assert.equal((await ok(pathFor())).project.systemProfile.reservoirGallons,37);
 });
 await check('Guidance preserves the end of an answer, distinguishes photo evidence, and respects detail preference',async()=>{
  const answer=Array(110).fill('context').join(' ')+'. Measure the reservoir before choosing a dose.';
  assert.ok(compactAnswer(answer).endsWith('Measure the reservoir before choosing a dose.'));
  assert.match(dailyGuidance({hasPhoto:true,profile:{experienceMode:'guided'}}),/PHOTO EVIDENCE/);
  assert.match(dailyGuidance({profile:{experienceMode:'detailed'}}),/prefers detailed/);
  const r=await askPip({message:'My reservoir is now 42 gallons. How should I plan my next mix?',user,projectId:grow.id,subscription:pro,exchangeId:'test_exchange_123'});
  assert.ok(r.actions.find(a=>a.type==='profile_change').proposalId);assert.ok(r.performance.answerMs>=0);
  assert.equal((await ok(pathFor())).project.systemProfile.reservoirGallons,37);
 });
 await check('Workspace combines eight prior reads into one response with equivalent saved records',async()=>{
  const legacy=['reminders','seeds','readings','seed-plan','rhythm','reminders','readings','messages?limit=8&all=1'];
  const samples=[];for(let i=0;i<8;i++){
   let start=performance.now();let bytes=0;const old=await Promise.all(legacy.map(s=>api(pathFor()+'/'+s)));for(const r of old)bytes+=JSON.stringify(r.data).length;const oldMs=performance.now()-start;
   start=performance.now();const current=await api(pathFor()+'/workspace');const newMs=performance.now()-start;
   assert.deepEqual(current.data.seeds,old[1].data.seeds);assert.deepEqual(current.data.reminders,old[0].data.reminders);
   samples.push({oldMs,newMs,oldBytes:bytes,newBytes:JSON.stringify(current.data).length});
  }
  fs.writeFileSync(path.join(out,'workspace-benchmark.json'),JSON.stringify({environment:postgres?'local PostgreSQL':'local file',iterations:8,previousReads:8,currentReads:1,samples},null,2));
 });
 await check('Refreshing a review keeps its identity, requires its newest revision, and never resurrects a removed record',async()=>{
  const action={proposalId:'revision_'+randomUUID(),type:'seed_pack_inventory',items:[{crop:'Review revision radish',packsOnHand:1}]};
  const first=await review(action),latest=(await ok(pathFor()+'/action-reviews','POST',{action,timezone:'America/New_York',refresh:true})).review;
  assert.equal(first.id,latest.id);assert.notEqual(first.revision,latest.revision);
  assert.equal((await api(pathFor()+'/action-reviews/'+first.id+'/apply','POST',{confirm:true,reviewRevision:first.revision})).status,409);
  const saved=await apply(latest);await ok(pathFor()+'/seeds/'+saved.result.recordIds[0],'DELETE');
  assert.ok((await review(action)).appliedAt);await apply(first);assert.ok(!(await seeds()).some(s=>s.crop==='Review revision radish'));
 });
 if(postgres)await check('A database failure after the first write rolls back every record and the save receipt',async()=>{
  const r=await review({type:'seed_pack_inventory',items:[{crop:'Rollback first',packsOnHand:1},{crop:'Rollback failure',packsOnHand:1}]});
  const {pool}=await m.conversationStorage();
  await pool.query("create or replace function batch4_synthetic_failure() returns trigger language plpgsql as $$ begin if NEW.seed->>'crop'='Rollback failure' then raise exception 'Synthetic transaction failure'; end if; return NEW; end; $$");
  await pool.query('create trigger batch4_synthetic_failure before insert or update on pip_seeds for each row execute function batch4_synthetic_failure()');
  try{assert.equal((await api(pathFor()+'/action-reviews/'+r.id+'/apply','POST',{confirm:true,reviewRevision:r.revision})).status,500);assert.ok(!(await seeds()).some(s=>s.crop==='Rollback first'));const stored=(await pool.query('select review from pip_action_reviews where id=$1',[r.id])).rows[0].review;assert.ok(!stored.appliedAt)}
  finally{await pool.query('drop trigger batch4_synthetic_failure on pip_seeds');await pool.query('drop function batch4_synthetic_failure()')}
 });
 await check('Account data deletion also removes saved action reviews',async()=>{
  const deleting={id:'delete-'+randomUUID()},project=(await m.createProject({user:deleting,subscription:pro,type:'hydropip_build',title:'Deletion fixture'})).project;
  const {previewAction}=await import('./actionReviews.js');await previewAction({userId:deleting.id,projectId:project.id,subscription:pro,action:{type:'seed_pack_inventory',items:[{crop:'Deletion fixture seed',packsOnHand:1}]}});
  await m.deleteUserData({userId:deleting.id});const storage=await m.conversationStorage();
  if(postgres)assert.equal(Number((await storage.pool.query('select count(*) from pip_action_reviews where user_id=$1',[deleting.id])).rows[0].count),0);else assert.ok(!Object.values(storage.read().actionReviews||{}).some(r=>r.userId===deleting.id));
  assert.ok(await m.getProject({userId:user.id,projectId:grow.id}));
 });


 if(ui||preview){
  for(const [route,mode] of [['/batch-four-pro','pro=1&'],['/batch-four-chat','']])app.get(route,(_,res)=>res.send('<!doctype html><html><head><title>Local Batch Four review</title></head><body style="margin:0"><iframe id="pip" title="Pip local test" src="/pip.html?'+mode+'projectId='+grow.id+'" style="border:0;width:100%;height:100vh"></iframe><script>const data='+JSON.stringify({type:'HYDROPIP_PIP_SESSION',sessionToken:token,member:user,subscription:pro})+';window.addEventListener("message",e=>{if(e.source===pip.contentWindow&&e.data.type==="HYDROPIP_PIP_READY")pip.contentWindow.postMessage(data,location.origin)});pip.addEventListener("load",()=>pip.contentWindow.postMessage(data,location.origin));</script></body></html>'));
  if(ui)await (await import('./daily-guidance-ui-test.js')).runDailyUiChecks({base,user,other,pro,token,grow,second,inventory,ok,api,check,out});
  if(preview)console.log('LOCAL_PREVIEW '+base+'/batch-four-pro');
 }
}catch(error){console.error(error.stack);process.exitCode=1}
fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({postgres,results},null,2));
if(!preview||process.exitCode){server.closeAllConnections();await new Promise(r=>server.close(r));await m.closeMemoryForTests()}

