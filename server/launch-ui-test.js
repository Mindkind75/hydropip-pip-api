// Real frontend + local API, fictional signed accounts, no production requests.
import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE || 'playwright');
const out=process.env.PIP_LAUNCH_QA_OUTPUT || fs.mkdtempSync(path.join(os.tmpdir(),'hydropip-launch-ui-'));
fs.mkdirSync(out,{recursive:true});
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_MEMORY_FILE:path.join(out,'launch-ui.memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'launch-ui.training.md'),PIP_BRIDGE_SECRET:'launch-ui-local-only',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4199',DOTENV_CONFIG_PATH:path.join(out,'nonexistent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();
const {app}=await import('./index.js');const {issuePipSession}=await import('./pipAuth.js');
const server=await new Promise(resolve=>{const s=app.listen(4199,'127.0.0.1',()=>resolve(s))});const base='http://127.0.0.1:'+server.address().port;
for(const file of ['reminder-schedule.js','build-estimate-sync.js']) { const r=await fetch(base+'/assets/js/'+file); console.log('Module '+file+': '+r.status+' '+r.headers.get('content-type')); }
const pro={active:true,plan:'pip_pro'},member={id:'launch-browser-a',name:'Fictional browser tester'},other={id:'launch-browser-b',name:'Other fictional tester'};
const token=issuePipSession({member,subscription:pro}),otherToken=issuePipSession({member:other,subscription:pro});
async function api(url,method='GET',body,auth=token){const r=await fetch(base+url,{method,headers:{Authorization:'Bearer '+auth,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const data=await r.json();assert.ok(r.ok,method+' '+url+': '+JSON.stringify(data));return data}
const profile={towerCount:2,reservoirGallons:37,growZone:'9',crops:['lettuce'],systemType:'hydropip_tower',onboardingComplete:true};
const a=(await api('/api/pip/projects','POST',{type:'hydropip_build',title:'Same name',systemProfile:profile})).project;
const b=(await api('/api/pip/projects','POST',{type:'hydropip_build',title:'Same name',systemProfile:{...profile,crops:['basil']}})).project;
for(const [p,crop,variety] of [[a,'Lettuce','ALPHA ONLY'],[b,'Basil','BETA ONLY']]){
 await api('/api/pip/projects/'+p.id+'/seeds','POST',{seed:{crop,variety,packsOnHand:1,plantingLocation:'seed_vault'}});
 await api('/api/pip/projects/'+p.id+'/readings','POST',{reading:{note:variety}});
}
const delay=ms=>new Promise(r=>setTimeout(r,ms));
async function until(fn){for(let i=0;i<200;i++){if(await fn())return;await delay(25)}throw Error('Timed out waiting for expected state')}
const results=[];async function check(name,run){try{await run();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});console.error('FAIL '+name+'\n'+error.stack);console.error('Browser state: '+JSON.stringify(await page.evaluate(()=>({status:document.querySelector('#proWorkspaceStatus')?.textContent,estimate:document.querySelector('#estimateStatus')?.textContent,options:Array.from(document.querySelectorAll('#proProjectSelect option')).map(e=>e.value)})))+' errors: '+JSON.stringify(errors));throw error}}
const browser=await chromium.launch(),context=await browser.newContext({viewport:{width:1440,height:960}});
await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());
const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
async function startPro(p=a){await page.goto(base+'/pip.html?pro=1&projectId='+p.id);await page.evaluate(data=>window.postMessage(data,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:token,member,subscription:pro});await page.waitForSelector('body.pro-active');await until(async()=>await page.locator('#proProjectSelect option').count()===2);await until(async()=>await page.locator('[data-pro-panel="seeds"]').getAttribute('aria-busy')==='false')}
try{
 await check('Both same-name grows remain selectable after reload',async()=>{
  await startPro();const options=await page.locator('#proProjectSelect option').evaluateAll(es=>es.map(e=>({id:e.value,label:e.textContent})));
  assert.deepEqual(new Set(options.map(x=>x.id)),new Set([a.id,b.id]));assert.notEqual(options[0].label,options[1].label);
  await page.locator('[data-pro-page="seeds"]').click();assert.match(await page.locator('#proSeedList').innerText(),/ALPHA ONLY/);
 });
 await check('Late previous-grow response cannot replace selected grow records',async()=>{
  await page.locator('#proProjectSelect').selectOption(b.id);await until(async()=>(await page.locator('#proSeedList').innerText()).includes('BETA ONLY'));
  let held;await page.route('**/api/pip/projects/'+a.id+'/seeds',route=>{held=route});
  await page.locator('#proProjectSelect').selectOption(a.id);await until(()=>!!held);assert.equal(await page.locator('[data-pro-panel="seeds"]').evaluate(e=>e.inert),true);
  await page.locator('#proProjectSelect').selectOption(b.id);await until(async()=>await page.locator('[data-pro-panel="seeds"]').getAttribute('aria-busy')==='false');
  await held.continue();await page.unroute('**/api/pip/projects/'+a.id+'/seeds');await delay(150);
  assert.equal(await page.locator('#proProjectSelect').inputValue(),b.id);assert.match(await page.locator('#proSeedList').innerText(),/BETA ONLY/);assert.doesNotMatch(await page.locator('#proSeedList').innerText(),/ALPHA ONLY/);
  await page.screenshot({path:path.join(out,'fixed-grow-switch.png')});
 });
 await check('Late previous-grow history cannot replace selected history',async()=>{
  let held;await page.route('**/api/pip/projects/'+a.id+'/messages?limit=8&all=1',route=>{held=route});
  await page.locator('#proProjectSelect').selectOption(a.id);await until(()=>!!held);
  await page.locator('#proProjectSelect').selectOption(b.id);await until(async()=>await page.locator('[data-pro-panel="history"]').getAttribute('aria-busy')==='false');
  await held.continue();await page.unroute('**/api/pip/projects/'+a.id+'/messages?limit=8&all=1');await delay(150);
  assert.match(await page.locator('#proHistory').innerText(),/BETA ONLY/);assert.doesNotMatch(await page.locator('#proHistory').innerText(),/ALPHA ONLY/);
 });
 await check('A failed grow load leaves actions blocked until a successful retry',async()=>{
  await page.route('**/api/pip/projects/'+a.id+'/seeds',route=>route.fulfill({status:503,contentType:'application/json',body:'{"message":"Test outage"}'}));
  await page.locator('#proProjectSelect').selectOption(a.id);await until(async()=>(await page.locator('#proWorkspaceStatus').innerText()).includes('could not load'));
  assert.equal(await page.locator('[data-pro-panel="seeds"]').evaluate(e=>e.inert),true);
  await page.unroute('**/api/pip/projects/'+a.id+'/seeds');await page.locator('#proProjectSelect').selectOption(b.id);await until(async()=>await page.locator('[data-pro-panel="seeds"]').getAttribute('aria-busy')==='false');
 });
 await check('An edit form from the previous grow cannot target the next grow',async()=>{
  await page.locator('#proSeedList [data-seed-action="edit"]').first().click();assert.ok(await page.locator('#proSeedForm input[name=id]').inputValue());
  await page.locator('#proProjectSelect').selectOption(a.id);await until(async()=>await page.locator('[data-pro-panel="seeds"]').getAttribute('aria-busy')==='false');
  assert.equal(await page.locator('#proSeedForm input[name=id]').inputValue(),'');
 });
 await check('All five calendar views render using the shared recurrence module',async()=>{
  await page.locator('[data-pro-page="calendar"]').click();for(const view of ['agenda','day','week','month','year'])await page.locator('[data-calendar-view="'+view+'"]').click();
  const actual=await page.evaluate(async()=>{const s=await import('/assets/js/reminder-schedule.js');return s.nextRecurringDate('2026-01-31T14:00:00Z','monthly','2026-01-31T15:00:00Z','America/New_York')});assert.equal(actual,'2026-02-28T14:00:00.000Z');
 });
 async function startTrack(auth=token){await page.goto(base+'/parts-checklist.html');await page.evaluate(t=>window.postMessage({type:'HYDROPIP_TRACK_SESSION',sessionToken:t},location.origin),auth);await page.waitForSelector('body:not(.track-access-pending):not(.track-access-blocked)');await until(async()=>await page.locator('#partsGrid .check').count()>0);await until(async()=>(await page.locator('#estimateStatus').innerText()).includes('up to date'))}
 await check('Checklist checkmarks autosave, then an immediate reload preserves an uncheck',async()=>{
  await startTrack();const box=page.locator('#partsGrid .check').first(),id=await box.getAttribute('data-id');await box.check();await until(async()=>!!(await api('/api/pip/users/me/preferences')).preferences.buildEstimate?.checked[id]);
  await box.uncheck();await page.reload();await page.evaluate(t=>window.postMessage({type:'HYDROPIP_TRACK_SESSION',sessionToken:t},location.origin),token);
  await until(async()=>(await page.locator('#estimateStatus').innerText()).includes('saved to your account'));
  assert.ok(!(await page.locator('#partsGrid .check[data-id="'+id+'"]').isChecked()));assert.ok(!(await api('/api/pip/users/me/preferences')).preferences.buildEstimate.checked[id]);
 });
 await check('Purchase notes sync while typing without requiring Save estimate',async()=>{
  const card=page.locator('#partsGrid .part').first();await card.locator('summary').click();await card.locator('.paid').fill('31.23');await card.locator('.retailer').fill('Audit hardware store');
  const id=await card.locator('.paid').getAttribute('data-id');await until(async()=>(await api('/api/pip/users/me/preferences')).preferences.buildEstimate?.purchases[id]?.retailer==='Audit hardware store');
  assert.equal((await api('/api/pip/users/me/preferences')).preferences.buildEstimate.purchases[id].paid,31.23);
 });
 await check('Offline browser edits recover and sync on reconnect',async()=>{
  const box=page.locator('#partsGrid .check').first(),id=await box.getAttribute('data-id');await context.setOffline(true);await box.check();await delay(350);assert.equal(await box.isChecked(),true);await context.setOffline(false);await page.evaluate(()=>window.dispatchEvent(new Event('online')));await until(async()=>!!(await api('/api/pip/users/me/preferences')).preferences.buildEstimate.checked[id]);
 });
 await check('Second device sees saved progress and logout clears account display',async()=>{
  const c=await browser.newContext();await c.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());const p=await c.newPage();await p.goto(base+'/parts-checklist.html');await p.evaluate(t=>window.postMessage({type:'HYDROPIP_TRACK_SESSION',sessionToken:t},location.origin),token);await until(async()=>(await p.locator('#estimateStatus').innerText()).includes('up to date'));assert.equal(await p.locator('#partsGrid .check').first().isChecked(),true);await c.close();
  await page.evaluate(()=>window.postMessage({type:'HYDROPIP_TRACK_SESSION',sessionToken:null},location.origin));await until(async()=>await page.locator('body').evaluate(e=>e.classList.contains('track-access-blocked')));assert.ok(!(await page.locator('#partsGrid .check').first().isChecked()));
 });
 await check('Switching accounts does not import another member progress',async()=>{
  await startTrack(otherToken);assert.ok(!(await page.locator('#partsGrid .check').first().isChecked()));assert.equal((await api('/api/pip/users/me/preferences','GET',undefined,otherToken)).preferences.buildEstimate,null);await page.screenshot({path:path.join(out,'fixed-checklist-account-scope.png')});
 });
 await check('No browser JavaScript exceptions in the fixed journeys',()=>assert.deepEqual(errors,[]));
}finally{
 fs.writeFileSync(path.join(out,'launch-ui-results.json'),JSON.stringify(results,null,2));await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));
}
console.log(`${results.filter(x=>x.pass).length}/${results.length} browser regressions passed`);if(results.some(x=>!x.pass))process.exitCode=1;
