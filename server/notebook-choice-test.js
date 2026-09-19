import assert from 'node:assert/strict';
import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {createRequire} from 'node:module';
const out=fs.mkdtempSync(path.join(os.tmpdir(),'pip-choice-')),postgres=process.argv.includes('--postgres');
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:postgres?process.env.PIP_TEST_DATABASE_URL:'',PIP_DATABASE_SSL:'false',PIP_MEMORY_FILE:path.join(out,'memory.json'),OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_BRIDGE_SECRET:'choice-fictional-only',PIP_RATE_LIMIT_MAX:'10000',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4253',DOTENV_CONFIG_PATH:path.join(out,'no.env')});
const m=await import('./pipMemory.js');if(!postgres)m.resetMemoryForTests();const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js');const server=await new Promise(r=>{const s=app.listen(4253,'127.0.0.1',()=>r(s))}),base='http://127.0.0.1:4253';
const member={id:'choice-'+Date.now(),name:'Notebook tester'},subscription={active:true,plan:'pip_pro'},token=issuePipSession({member,subscription});let browser;
async function req(url,method='GET',body){const r=await fetch(base+'/api/pip'+url,{method,headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});return {status:r.status,data:await r.json()}}
async function ok(url,method,body){const r=await req(url,method,body);assert.ok(r.status<300,JSON.stringify(r));return r.data;}
try {
const p=(await ok('/projects','POST',{type:'existing_system_setup',title:'Calendar only',systemProfile:{}})).project,root='/projects/'+p.id;
for(const key of ['towerCount','plantSites','reservoirGallons','medium','nutrientBrand'])assert.equal(p.systemProfile[key],null,key);
await ok(root+'/reminders/defaults','POST');assert.equal((await ok(root+'/reminders')).reminders.length,0);
const task=(await ok(root+'/reminders','POST',{reminder:{title:'My only task',dueDate:'2026-10-01'}})).reminder;
await ok(root+'/reminders/'+task.id,'DELETE');await ok(root+'/reminders/defaults','POST');assert.equal((await ok(root+'/workspace')).reminders.length,0);
const hp=(await ok('/projects','POST',{type:'hydropip_build',title:'Chosen care tasks',systemProfile:{systemType:'hydropip_tower'}})).project;
const suggestions=(await ok('/projects/'+hp.id+'/reminders/defaults','POST')).suggestions;assert.equal(suggestions.length,2);assert.equal((await ok('/projects/'+hp.id+'/reminders')).reminders.length,0);
let review=(await ok('/projects/'+hp.id+'/action-reviews','POST',{action:{type:'create_reminders',reminders:suggestions},timezone:'America/New_York'})).review;
await ok('/projects/'+hp.id+'/action-reviews/'+review.id+'/apply','POST',{confirm:true,reviewRevision:review.revision});
for(const r of (await ok('/projects/'+hp.id+'/reminders')).reminders)await ok('/projects/'+hp.id+'/reminders/'+r.id,'DELETE');
await ok('/projects/'+hp.id+'/reminders/defaults','POST');assert.equal((await ok('/projects/'+hp.id+'/reminders')).reminders.length,0);
console.log('PASS Defaults are read-only; only reviewed tasks save; deleted tasks stay deleted');
const seed=(await ok(root+'/seeds','POST',{seed:{crop:'Lettuce',variety:'Original',packsOnHand:1}})).seed;
const updated=(await ok(root+'/seeds/'+seed.id,'PATCH',{patch:{variety:'New variety'},expectedUpdatedAt:seed.updatedAt})).seed;
assert.equal((await req(root+'/seeds/'+seed.id,'PATCH',{patch:{variety:'Original',packsOnHand:3},expectedUpdatedAt:seed.updatedAt})).status,409);
const concurrent=await Promise.all([req(root+'/seeds/'+seed.id,'PATCH',{patch:{notes:'device A'},expectedUpdatedAt:updated.updatedAt}),req(root+'/seeds/'+seed.id,'PATCH',{patch:{notes:'device B'},expectedUpdatedAt:updated.updatedAt})]);assert.deepEqual(concurrent.map(r=>r.status).sort(),[200,409]);
review=(await ok(root+'/action-reviews','POST',{action:{type:'planting',planting:{seedId:seed.id,sowDate:'2026-09-01',seedsSown:4,plantingLocation:'hydropip_tower'}},timezone:'UTC'})).review;
await ok(root+'/action-reviews/'+review.id+'/apply','POST',{confirm:true,reviewRevision:review.revision});
const planted=(await ok(root+'/seeds')).seeds.find(s=>s.plantingLocation==='hydropip_tower');assert.equal(planted.sourceSeedId,seed.id);
const transplant=(await ok(root+'/seeds','POST',{seed:{crop:'Basil',plantingLocation:'hydropip_tower',method:'transplant',status:'growing',plantsPlanted:3,plantedAt:'2026-09-02',sourceSeedId:seed.id}})).seed;
const facts=(await ok(root+'/workspace')).rhythm.currentCrops.find(c=>c.seedId===transplant.id);assert.equal(facts.plantsPlanted,3);assert.equal(facts.plantedAt,'2026-09-02');assert.equal(facts.sowDate,null);
await ok('/users/me/preferences','PATCH',{patch:{workspaceTools:['planner','seeds'],workspaceStartTab:'planner',lastGrowId:p.id}});const prefs=(await ok('/users/me/preferences')).preferences;assert.deepEqual(prefs.workspaceTools,['planner','seeds']);assert.equal(prefs.workspaceStartTab,'planner');
console.log('PASS Stale and concurrent seed saves rejected; planting source preserved; Rhythm includes actual planting facts; account preferences persist');
if(process.argv.includes('--ui')){
 const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright');browser=await chromium.launch();
 const errors=[];
 async function device(width,auth=token,who=member){const context=await browser.newContext({viewport:{width,height:900}});await context.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'/pip.html?pro=1');await page.evaluate(d=>window.postMessage(d,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:auth,member:who,subscription});return page;}
 const page=await device(390);await page.locator('[data-pro-panel=planner].active').waitFor();await page.waitForFunction(()=>document.querySelector('#proWorkspaceStatus').textContent.includes('memory ready'));
 assert.equal(await page.locator('[data-pro-page=crops]').isVisible(),false);await page.locator('#notebookAllTools').click();assert.equal(await page.locator('[data-pro-page=crops]').isVisible(),true);
 await page.locator('#proArrangeTabs').click();await page.getByText('Favorite tools & opening tab',{exact:true}).click();await page.locator('#notebookStartTab').selectOption('seeds');await page.locator('#proTabOrderForm button[type=submit]').click();await page.locator('#proTabOrderDialog').waitFor({state:'hidden'});
 const second=await device(1280);await second.locator('[data-pro-panel=seeds].active').waitFor();await second.waitForFunction(()=>document.querySelector('#proWorkspaceStatus').textContent.includes('memory ready'));
 assert.equal(await second.locator('[data-pro-page=crops]').isVisible(),false);
 await second.locator('[data-seed-id="'+seed.id+'"] [data-seed-action=edit]').click();await second.locator('#proSeedForm [name=variety]').fill('My pending edit');
 const latest=(await ok(root+'/seeds')).seeds.find(s=>s.id===seed.id);await ok(root+'/seeds/'+seed.id,'PATCH',{patch:{variety:'Other device'},expectedUpdatedAt:latest.updatedAt});
 await second.locator('#proSeedForm button[type=submit]').click();await second.getByText(/This seed changed on another device/).first().waitFor();assert.equal(await second.locator('#proSeedForm [name=variety]').inputValue(),'My pending edit');
 assert.equal((await ok(root+'/seeds')).seeds.find(s=>s.id===seed.id).variety,'Other device');
 const fresh={id:'new-choice-'+Date.now(),name:'New grower'},freshToken=issuePipSession({member:fresh,subscription}),newPage=await device(390,freshToken,fresh);
 await newPage.locator('#pipProOnboardingDialog').waitFor({state:'visible'});await newPage.locator('#notebookStartTools').click();await newPage.locator('#proTabOrderDialog').waitFor({state:'visible'});await newPage.locator('#proTabOrderCancel').click();
 const freshProjects=await m.listProjects({userId:fresh.id});const freshProject=freshProjects[0];assert.ok(freshProject);for(const key of ['towerCount','plantSites','reservoirGallons','medium','nutrientBrand'])assert.equal(freshProject.systemProfile[key],null,key);assert.equal((await m.listProjectReminders({userId:fresh.id,projectId:freshProject.id})).length,0);
 assert.equal(await newPage.locator('[data-pro-panel=planner]').getAttribute('aria-busy'),'false');
 const guided={id:'guided-choice-'+Date.now(),name:'Guided grower'},guidedPage=await device(390,issuePipSession({member:guided,subscription}),guided);
 await guidedPage.locator('#pipProOnboardingDialog').waitFor({state:'visible'});for(let step=0;step<4;step++)await guidedPage.locator('#pipProOnboardingNext').click();await guidedPage.locator('#pipProOnboardingFinish').click();await guidedPage.locator('#pipProOnboardingDialog').waitFor({state:'hidden'});
 const guidedProject=(await m.listProjects({userId:guided.id}))[0];for(const key of ['towerCount','plantSites','reservoirGallons','medium','nutrientBrand'])assert.equal(guidedProject.systemProfile[key],null,key);assert.equal((await m.listProjectReminders({userId:guided.id,projectId:guidedProject.id})).length,0);
 assert.deepEqual(errors,[]);await page.screenshot({path:path.join(out,'choice-mobile.png'),fullPage:true});console.log('PASS Phone favorites, second-device opening tab, retained stale-edit draft, equipment-free new notebook; '+out);
}
}finally{await browser?.close();await new Promise(r=>server.close(r));await m.closeMemoryForTests();}
