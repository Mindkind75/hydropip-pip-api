import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {randomUUID} from 'node:crypto';
import {scheduleContext, answerClock, recallMaintenanceTask} from './savedSchedule.js';
import {buildRhythmOverview} from './rhythm.js';

const out=process.env.PIP_BATCH_QA_OUTPUT || fs.mkdtempSync(path.join(os.tmpdir(),'pip-cleanup-'));
fs.mkdirSync(out,{recursive:true});
const postgres=process.argv.includes('--postgres'),ui=process.argv.includes('--ui');
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:postgres?process.env.PIP_TEST_DATABASE_URL:'',PIP_DATABASE_SSL:'false',OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_MEMORY_FILE:path.join(out,'memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),DOTENV_CONFIG_PATH:path.join(out,'absent.env'),PIP_BRIDGE_SECRET:'cleanup-fictional-tests-only',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4207',PIP_RATE_LIMIT_MAX:'5000'});
if(postgres&&!process.env.DATABASE_URL)throw Error('A dedicated test database URL is required.');
const m=await import('./pipMemory.js');if(!postgres)m.resetMemoryForTests();
const {askPip}=await import('./pipAgent.js'),{growWorkspace}=await import('./growWorkspace.js');
const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js');
const server=await new Promise(resolve=>{const s=app.listen(ui?4207:0,'127.0.0.1',()=>resolve(s))}),base='http://127.0.0.1:'+server.address().port;
const user={id:'cleanup-'+randomUUID(),name:'Fictional Cleanup Tester'},pro={active:true,plan:'pip_pro'},token=issuePipSession({member:user,subscription:pro});
const results=[],logs=[],originalInfo=console.info;console.info=(...args)=>{logs.push(args.join(' '));originalInfo(...args)};
let grow,otherGrow,task;
async function check(name,work){try{await work();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});throw error}}
async function api(route,method='GET',body){const r=await fetch(base+'/api/pip'+route,{method,headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});return{status:r.status,data:await r.json()}}
const fixtureNow=new Date('2026-09-10T16:00:00Z');
try{
 await check('Saved task clock uses its schedule, including local day, without pretending to know current location',()=>{
  const clock=answerClock({},scheduleContext([{status:'active',timezone:'America/New_York'}]),new Date('2026-09-11T01:00:00Z'));
  assert.equal(clock.currentDate,'2026-09-10');assert.equal(clock.timeZone,'America/New_York');assert.match(clock.timeZoneSource,/not a claim/);
  assert.equal(answerClock({timeZone:'Pacific/Auckland'}, {scheduleTimeZones:['America/New_York']},fixtureNow).timeZone,'Pacific/Auckland');
  assert.equal(answerClock({},scheduleContext([{status:'active',timezone:'America/New_York'},{status:'active',timezone:'Europe/London'}]),fixtureNow).timeZone,'unknown');
  assert.equal(answerClock({timeZone:'invalid-zone'}, {},fixtureNow).timeZone,'unknown');
 });
 await check('Direct lookup chooses the earliest active maintenance task and never completes or rewrites it',async()=>{
  grow=(await m.createProject({user,subscription:pro,type:'hydropip_build',title:'Cleanup greens',systemProfile:{growZone:'9b',onboardingComplete:true}})).project;
  otherGrow=(await m.createProject({user,subscription:pro,type:'hydropip_build',title:'Other cleanup grow',systemProfile:{onboardingComplete:true}})).project;
  task=(await m.createProjectReminder({userId:user.id,projectId:grow.id,subscription:pro,reminder:{title:'Weekly flow check',category:'maintenance',dueDate:'2026-08-15',dueAt:'2026-08-15T13:00:00Z',timezone:'America/New_York',repeat:{frequency:'weekly'}}})).reminder;
  for(let i=0;i<12;i++)await m.createProjectReminder({userId:user.id,projectId:grow.id,subscription:pro,reminder:{title:'Later task '+i,category:'maintenance',dueDate:'2026-10-'+String(i+10)}});
  const before=await m.listProjectReminders({userId:user.id,projectId:grow.id});
  const a=await askPip({user,subscription:pro,projectId:grow.id,message:'Using only the saved records, what is my next maintenance check? Say what is saved versus missing, and do not create or change any records.'});
  assert.equal(a.mode,'saved_schedule_recall');assert.match(a.answer,/Weekly flow check/);assert.match(a.answer,/Aug 15, 2026/);assert.match(a.answer,/9:00 AM/);assert.match(a.answer,/America\/New_York/);assert.match(a.answer,/Not recorded for this task/);assert.doesNotMatch(a.answer,/dueDate|rhythmStage|lastCompletedAt|what.{0,30}time ?zone/i);
  assert.equal(a.performance.providerCalls.length,0);assert.ok(Number.isFinite(a.performance.memoryMs));assert.deepEqual(await m.listProjectReminders({userId:user.id,projectId:grow.id}),before);assert.ok(!a.actions?.length);
  fs.writeFileSync(path.join(out,'saved-maintenance-answer.json'),JSON.stringify(a,null,2));
 });
 await check('Lookup handles missing dates and schedules and rejects advice, mixed requests, and changes',()=>{
  const project={title:'Synthetic grow'};
  assert.match(recallMaintenanceTask('What is my next maintenance check?',{project,...scheduleContext([])}),/No active maintenance/);
  assert.match(recallMaintenanceTask('What is my next maintenance check?',{project,...scheduleContext([{status:'active',category:'maintenance',title:'Undated'}])}),/no usable saved due date/);
  assert.equal(scheduleContext([{status:'completed',category:'maintenance',dueDate:'2020-01-01'},{status:'active',category:'grow',dueDate:'2021-01-01'}]).nextMaintenanceReminder,null);
  for(const query of ['Change my next maintenance task to Friday.','What should my next maintenance check include?','What is my next maintenance check and how do I clean the pump?','What is my next maintenance check? Also compare pumps.','What is my next maintenance check and when should I sow basil?','What is the next maintenance check for a new system?'])assert.equal(recallMaintenanceTask(query,{project,...scheduleContext([])}),null,query);
  assert.equal(scheduleContext([{status:'active',category:'maintenance',dueDate:'2026-02-31'}]).nextMaintenanceReminder,null);
  const conflicting={status:'active',category:'maintenance',dueDate:'2026-09-10',dueAt:'2026-09-12T13:00:00Z',timezone:'America/New_York'};
  assert.equal(recallMaintenanceTask('What is my next maintenance check?',{project,...scheduleContext([conflicting])}),null);
 });
 await check('Saved-memory lookup stays within the selected grow and owner, and the answer persists',async()=>{
  const result=await askPip({user,subscription:pro,projectId:otherGrow.id,message:'What is my next maintenance check?'});assert.doesNotMatch(result.answer,/Weekly flow check/);assert.match(result.answer,/No active maintenance/);
  const foreign=await m.buildProjectContext({userId:'unrelated-owner',projectId:grow.id,question:'next maintenance check'});assert.equal(foreign,null);
  const messages=await m.listProjectMessages({userId:user.id,projectId:grow.id});assert.ok(messages.some(message=>message.role==='assistant'&&message.content.includes('Weekly flow check')));
 });
 await check('Authenticated chat returns phase timings; the structured log contains no customer content',async()=>{
  const query='What is my next maintenance check?';
  const r=await api('/chat','POST',{message:query,projectId:grow.id});assert.equal(r.status,200);assert.equal(r.data.mode,'saved_schedule_recall');assert.equal(r.data.performance.providerCalls.length,0);
  await new Promise(resolve=>setImmediate(resolve));
  const log=logs.filter(item=>item.startsWith('[pip-performance] ')).at(-1);assert.ok(log);const parsed=JSON.parse(log.slice('[pip-performance] '.length));assert.equal(parsed.status,200);assert.ok(parsed.serverMs>=parsed.answerMs);assert.ok(parsed.preAnswerMs>=0);assert.ok(parsed.postAnswerMs>=0);
  for(const value of [user.id,token,grow.id,grow.title,query,task.title])assert.ok(!log.includes(value));
  fs.writeFileSync(path.join(out,'request-timing.json'),JSON.stringify(parsed,null,2));
 });
 const seeds=[{id:'lettuce',crop:'Lettuce',packsOnHand:2,plantingLocation:'seed_vault'}, {id:'basil',crop:'Basil',packsOnHand:1,plantingLocation:'seed_vault'}, {id:'kale',crop:'Kale',packsOnHand:1,plantingLocation:'seed_vault'}];
 const dashboard={groups:{plantNow:[{crop:'Lettuce',bestSowDate:'2026-09-10'}],startNext:[{crop:'Lettuce',bestSowDate:'2026-09-10'},{crop:'Basil',bestSowDate:'2026-09-09'},{crop:'Kale',bestSowDate:'2026-09-11'}]}};
 let rhythm;
 await check('Coming Up keeps future calendar days; today moves to ready seeds; old or invalid suggestions are omitted',()=>{
  rhythm=buildRhythmOverview({project:grow,seeds,seedDashboard:dashboard,now:fixtureNow,timezone:'America/New_York'});
  assert.equal(rhythm.comingNext.length,1);assert.equal(rhythm.comingNext[0].date,'2026-09-11');assert.equal(rhythm.comingNext[0].sourceId,'kale');assert.equal(rhythm.sowNow.filter(item=>item.seedId==='lettuce').length,1);assert.deepEqual(seeds.map(item=>item.packsOnHand),[2,1,1]);
  const current=buildRhythmOverview({project:grow,seeds,seedDashboard:{groups:{startNext:[{crop:'Basil',bestSowDate:'2026-09-10'},{crop:'Kale',bestSowDate:'2026-02-31'}]}},now:fixtureNow,timezone:'America/New_York'});assert.equal(current.comingNext.length,0);assert.equal(current.sowNow[0].seedId,'basil');
 });
 await check('Calendar dates survive negative and positive offsets, DST, and year boundaries',()=>{
  for(const [timezone,now,today,next] of [['America/New_York','2026-09-11T01:00:00Z','2026-09-10','2026-09-11'],['Pacific/Kiritimati','2026-09-10T11:00:00Z','2026-09-11','2026-09-12'],['America/New_York','2026-11-01T06:30:00Z','2026-11-01','2026-11-02'],['Pacific/Auckland','2026-12-31T12:00:00Z','2027-01-01','2027-01-02']]){
   const r=buildRhythmOverview({project:grow,seeds,seedDashboard:{groups:{startNext:[{crop:'Lettuce',bestSowDate:today},{crop:'Kale',bestSowDate:next}]}},now:new Date(now),timezone});assert.equal(r.sowNow[0].seedId,'lettuce');assert.equal(r.comingNext[0].date,next);
  }
  const r=buildRhythmOverview({project:grow,now:fixtureNow,timezone:'America/New_York',seeds:[{id:'sown',crop:'Lettuce',status:'growing',plantingLocation:'hydropip_tower',sowDate:'2026-08-20',nextSuccessionDate:'2026-09-10',succession:true,successionIntervalDays:21}]});assert.equal(r.comingNext[0].date,'2026-09-10');
 });
 await check('Combined workspace computes seasonal recommendations for the selected local day',async()=>{
  const workspace=await growWorkspace({userId:user.id,projectId:grow.id,now:new Date('2026-09-11T01:00:00Z'),timezone:'America/New_York'});assert.equal(workspace.dashboard.groups.plantNow[0].bestSowDate,'2026-09-10');
  fs.writeFileSync(path.join(out,'rhythm.json'),JSON.stringify(rhythm,null,2));
 });
 if(ui)await (await import('./pip-cleanup-ui-test.js')).runCleanupUi({app,base,token,user,pro,grow,rhythm,out,check});
}catch(error){console.error(error.stack);process.exitCode=1}
finally{console.info=originalInfo;server.closeAllConnections();await new Promise(resolve=>server.close(resolve));await m.closeMemoryForTests();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({postgres,results},null,2))}
