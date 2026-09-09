import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright');
const out=process.env.PIP_BATCH_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'hydropip-batch1-'));fs.mkdirSync(out,{recursive:true});
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_MEMORY_FILE:path.join(out,'batch1.memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),PIP_BRIDGE_SECRET:'batch1-local-test',PIP_ADMIN_KEY:'batch1-local-admin',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4199',DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();const {app}=await import('./index.js');const {issuePipSession}=await import('./pipAuth.js');
const server=await new Promise(resolve=>{const s=app.listen(4199,'127.0.0.1',()=>resolve(s))}),base='http://127.0.0.1:4199';
const member={id:'batch-one-owner',name:'Fictional grower'},subscription={active:true,plan:'pip_pro'},token=issuePipSession({member,subscription});
const other={id:'batch-one-other',name:'Another fictional grower'},otherToken=issuePipSession({member:other,subscription});
async function api(url,method='GET',body,auth=token){const r=await fetch(base+url,{method,headers:{Authorization:'Bearer '+auth,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const data=await r.json();assert.ok(r.ok,method+' '+url+' '+JSON.stringify(data));return data}
const browser=await chromium.launch(),context=await browser.newContext({viewport:{width:1440,height:1050}}),page=await context.newPage(),errors=[],results=[];
await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());page.on('pageerror',e=>errors.push(e.message));
const check=async(name,fn)=>{try{await fn();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});throw error}};
const until=async fn=>{for(let i=0;i<200;i++){if(await fn())return;await new Promise(r=>setTimeout(r,40))}throw Error('Timed out')};
let project;
async function start(auth=token,who=member){await page.goto(base+'/pip.html?pro=1&projectId='+(who===member?project.id:''));await page.evaluate(data=>window.postMessage(data,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:auth,member:who,subscription});await page.waitForSelector('body.pro-active');if(who===member){await until(async()=>await page.locator('[data-pro-panel="profile"]').getAttribute('aria-busy')==='false');await page.locator('[data-pro-page="profile"]').click()}}
try{
 await check('API partial update retains subzone, custom crops and all seven care days',async()=>{
  project=(await api('/api/pip/projects','POST',{type:'hydropip_build',title:'Batch one grow',systemProfile:{growZone:'9B',crops:['arugula'],preferredTaskDays:['monday','thursday','tuesday','wednesday','friday','saturday','sunday'],onboardingComplete:true,reservoirGallons:37,pumpSchedule:'8 AM for 90 seconds'}})).project;
  const p=(await api('/api/pip/projects/'+project.id,'PATCH',{patch:{systemProfile:{notes:'One changed field'}}})).project;
  assert.equal(p.systemProfile.growZone,'9b');assert.deepEqual(p.systemProfile.crops,['arugula']);assert.equal(p.systemProfile.preferredTaskDays.length,7);assert.equal(p.systemProfile.reservoirGallons,37);
 });
 await check('Actual profile form preserves saved values and sends only edited fields',async()=>{
  await start();assert.equal(await page.locator('#proProfileForm [name=growZone]').inputValue(),'9b');assert.equal(await page.locator('[name=customCrops]').inputValue(),'arugula');assert.equal(await page.locator('#proProfileForm [name=preferredTaskDays]:checked').count(),7);
  await api('/api/pip/projects/'+project.id,'PATCH',{patch:{systemProfile:{pumpSchedule:'10 AM for 2 minutes'}}});
  await page.locator('#proProfileForm [name=notes]').fill('Edited on the real form');await page.locator('#proSaveProfile').click();await until(async()=>(await api('/api/pip/projects/'+project.id)).project.systemProfile.notes==='Edited on the real form');
  const p=(await api('/api/pip/projects/'+project.id)).project.systemProfile;assert.equal(p.pumpSchedule,'10 AM for 2 minutes');assert.equal(p.growZone,'9b');assert.deepEqual(p.crops,['arugula']);assert.equal(p.preferredTaskDays.length,7);
  await until(async()=>(await page.locator('#proWorkspaceStatus').innerText()).includes('Grow profile saved.'));
 });
 await check('Custom crops and multiple care days can be changed intentionally',async()=>{
  await page.locator('[name=customCrops]').fill('arugula\nButtercrunch lettuce');await page.locator('#proProfileForm [name=preferredTaskDays][value=sunday]').uncheck();await page.locator('#proSaveProfile').click();await until(async()=>(await api('/api/pip/projects/'+project.id)).project.systemProfile.crops.length===2);const p=(await api('/api/pip/projects/'+project.id)).project.systemProfile;assert.equal(p.preferredTaskDays.length,6);assert.ok(!p.preferredTaskDays.includes('sunday'));
  await until(async()=>(await page.locator('#proWorkspaceStatus').innerText()).includes('Grow profile saved.'));await page.screenshot({path:path.join(out,'profile-custom-values.png')});
 });
 await check('Failed profile save retains draft through reload and another account cannot see it',async()=>{
  await page.route('**/api/pip/projects/'+project.id,route=>route.request().method()==='PATCH'?route.fulfill({status:503,contentType:'application/json',body:'{"message":"Local test outage"}'}):route.continue());
  await page.locator('#proProfileForm [name=notes]').fill('Draft survives a failed save');await page.locator('#proSaveProfile').click();await until(async()=>(await page.locator('#proWorkspaceStatus').innerText()).includes('Local test outage'));
  await page.unroute('**/api/pip/projects/'+project.id);await start();assert.equal(await page.locator('#proProfileForm [name=notes]').inputValue(),'Draft survives a failed save');
  await start(otherToken,other);assert.doesNotMatch(await page.locator('body').innerText(),/Draft survives a failed save/);await start();assert.equal(await page.locator('#proProfileForm [name=notes]').inputValue(),'Draft survives a failed save');
  await page.locator('#proCancelProfile').click();assert.equal(await page.locator('#proProfileForm [name=notes]').inputValue(),'Edited on the real form');
 });
 await check('Every declared browser event reaches API once under retry; private metadata is discarded',async()=>{
  const contract=await (await fetch(base+'/assets/js/event-contract.json')).json();
  for(const name of contract.events){const event={eventName:name,clientEventId:'test_'+name,visitorId:'hpv_batchone',metadata:{durationMs:123,rawPrompt:'private text',projectId:project.id}};await api('/api/pip/conversions','POST',{event});await api('/api/pip/conversions','POST',{event})}
  const overview=await api('/api/pip/admin/beta/overview','GET',undefined,'batch1-local-admin');for(const name of contract.events)assert.ok(overview.conversions.counts[name]>=1,name);
  assert.equal(overview.conversions.counts.primary_build_cta_clicked,1);assert.ok(overview.conversions.performance.pip_answer_completed.samples>=1);
  const state=JSON.parse(fs.readFileSync(path.join(out,'batch1.memory.json'),'utf8'));assert.ok(Object.values(state.conversionEvents).every(event=>!event.metadata.rawPrompt));
 });
 await check('Browser tracking retries with the same event identity and actual admin report renders results',async()=>{
  let calls=0,ids=[];await page.route('**/api/pip/conversions',async route=>{const payload=route.request().postDataJSON();if(payload.event.eventName!=='primary_build_cta_clicked')return route.continue();calls++;ids.push(payload.event.clientEventId);if(calls===1)return route.fulfill({status:503,body:'{}'});return route.continue()});
  await page.evaluate(()=>window.HydroPipTracking.track('primary_build_cta_clicked',{surface:'test'}));assert.equal(calls,2);assert.equal(ids[0],ids[1]);await page.unroute('**/api/pip/conversions');
  const admin=await context.newPage();admin.on('pageerror',e=>errors.push(e.message));await admin.goto(base+'/beta-admin.html');await admin.locator('input[type=password]').fill('batch1-local-admin');await admin.locator('#unlock').click();await admin.locator('[data-tab=conversions]').click();await until(async()=>(await admin.locator('#conversionFunnel').innerText()).includes('Primary build clicked'));assert.match(await admin.locator('#conversionPerformance').innerText(),/95th percentile/);await admin.screenshot({path:path.join(out,'analytics-report.png')});await admin.close();
 });
 await check('No browser exceptions in Batch 1 journeys',()=>assert.deepEqual(errors,[]));
}finally{fs.writeFileSync(path.join(out,'batch-one-results.json'),JSON.stringify(results,null,2));await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r))}
console.log(results.length+' Batch 1 acceptance checks passed.');
