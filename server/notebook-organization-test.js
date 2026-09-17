import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {createRequire} from 'node:module';
const out=process.env.PIP_NOTEBOOK_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'pip-notebook-'));fs.mkdirSync(out,{recursive:true});
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_MEMORY_FILE:path.join(out,'memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),PIP_BRIDGE_SECRET:'notebook-local-fictional',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4221',PIP_RATE_LIMIT_MAX:'5000',DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js');
const server=await new Promise(resolve=>{const s=app.listen(process.argv.includes('--ui')?4221:0,'127.0.0.1',()=>resolve(s))}),base='http://127.0.0.1:'+server.address().port;
const member={id:'notebook-ui-test',name:'Fictional notebook tester'},subscription={active:true,plan:'pip_pro'},token=issuePipSession({member,subscription});
async function api(url,method='GET',body){const r=await fetch(base+'/api/pip'+url,{method,headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const data=await r.json();assert.ok(r.ok,JSON.stringify(data));return data}
const results=[];async function check(name,fn){await fn();results.push(name);console.log('PASS '+name)}
let browser;
try{
 const a=(await api('/projects','POST',{type:'hydropip_build',title:'Tomato grow',systemProfile:{growZone:'9',location:'Lakeland, FL',areaType:'outdoor_open',onboardingComplete:true}})).project;
 const b=(await api('/projects','POST',{type:'hydropip_build',title:'Other grow',systemProfile:{growZone:'9',onboardingComplete:true}})).project;
 const route=id=>'/projects/'+(id||a.id);
 const packet=(await api(route()+'/seeds','POST',{seed:{crop:'Tomato',variety:'Test cherry',packsOnHand:3,plantingLocation:'seed_vault',status:'on_hand'}})).seed;
 const plant=(await api(route()+'/seeds','POST',{seed:{crop:'Tomato',variety:'Current plant',plantingLocation:'hydropip_tower',status:'growing',sowDate:'2026-08-01',seedsSown:4}})).seed;
 await api(route()+'/seeds','POST',{seed:{crop:'Lettuce',variety:'Finished plant',plantingLocation:'hydropip_tower',status:'finished',sowDate:'2026-07-01',seedsSown:2}});
 await api(route(b.id)+'/seeds','POST',{seed:{crop:'Basil',variety:'Other grow only',plantingLocation:'nursery_for_hydropip',status:'sprouted',sowDate:'2026-09-01',seedsSown:3}});
 const today=new Date().toISOString().slice(0,10);
 const due=(await api(route()+'/reminders','POST',{reminder:{title:'Inspect leaves today',category:'grow',dueDate:today,timezone:'UTC'}})).reminder;
 await api(route()+'/reminders','POST',{reminder:{title:'Old root check',category:'grow',dueDate:'2026-01-01',timezone:'UTC'}});
 await check('Legacy tab order maps Calendar to Planner once and retains My Crops after reload',async()=>{
  const p=(await api('/users/me/preferences','PATCH',{patch:{workspaceTabOrder:['calendar','seeds','planner','profile']}})).preferences;
  assert.equal(p.workspaceTabOrder.filter(x=>x==='planner').length,1);assert.ok(!p.workspaceTabOrder.includes('calendar'));assert.ok(p.workspaceTabOrder.includes('crops'));
  const saved=(await api('/users/me/preferences')).preferences;assert.deepEqual(saved.workspaceTabOrder,p.workspaceTabOrder);
 });
 if(process.argv.includes('--ui')){
  const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright');browser=await chromium.launch();const context=await browser.newContext({viewport:{width:390,height:844},timezoneId:'UTC'});
  await context.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  async function open(focus='rhythm'){await page.goto(base+'/pip.html?pro=1&projectId='+a.id+'&focus='+focus);await page.evaluate(data=>window.postMessage(data,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:token,member,subscription});await page.waitForSelector('body.pro-active');await page.waitForFunction(()=>document.querySelector('[data-pro-panel="crops"]').getAttribute('aria-busy')==='false');}
  const tab=key=>page.locator('.workspace-tabs [data-pro-page="'+key+'"]');
  await open('calendar');
  await check('Old Calendar deep link opens combined Planner with one tab and usable calendar',async()=>{
   assert.ok(await tab('planner').evaluate(e=>e.classList.contains('active')));assert.equal(await tab('calendar').count(),0);assert.equal(await page.locator('.workspace-tabs button[role="tab"]:not([hidden])').count(),8);
   assert.ok(await page.locator('#proCalendarBoard').isVisible());assert.ok(await page.locator('#proCalendarSection').evaluate(e=>!!e.closest('[data-pro-panel="planner"]')));
   assert.ok(await page.locator('#proPlannerTasks').evaluate(e=>!e.open));assert.match(await page.locator('#proPlannerTasks>summary').innerText(),/1 overdue · 1 today/);
   assert.ok(await page.locator('[data-rack-key="proReminderForm"]').evaluate(e=>e.compareDocumentPosition(document.querySelector('#proPlannerTasks'))&Node.DOCUMENT_POSITION_FOLLOWING));
  });
  await check('Seed Vault and My Crops show separate records and preserve past plants',async()=>{
   await tab('seeds').click();assert.match(await page.locator('#proSeedList').innerText(),/Test cherry/);assert.doesNotMatch(await page.locator('#proSeedList').innerText(),/Current plant|Finished plant/);
   await tab('crops').click();assert.match(await page.locator('#proCropList').innerText(),/Current plant/);assert.doesNotMatch(await page.locator('#proCropList').innerText(),/Test cherry|Finished plant/);
   await page.locator('#proCropFilter').selectOption('past');assert.match(await page.locator('#proCropList').innerText(),/Finished plant/);await page.locator('#proCropFilter').selectOption('current');
  });
  await check('Planting from a packet creates a crop through review without changing pack counts',async()=>{
   await tab('seeds').click();await page.locator('[data-seed-id="'+packet.id+'"] [data-seed-action="use"]').click();
   await page.locator('[data-planting-form] [name="seedsSown"]').fill('6');await page.locator('[data-planting-form] button[type="submit"]').click();await page.locator('[data-action-confirm]').click();await page.locator('[data-action-status]').filter({hasText:'Saved successfully'}).waitFor();await page.locator('[data-action-close]').click();
   await page.waitForFunction(()=>document.querySelector('[data-pro-panel="crops"]').getAttribute('aria-busy')==='false');await tab('crops').click();await page.locator('#proCropList summary').filter({hasText:'Test cherry'}).waitFor();
   const seeds=(await api(route()+'/seeds')).seeds;assert.equal(seeds.find(s=>s.id===packet.id).packsOnHand,3);assert.equal(seeds.filter(s=>s.variety==='Test cherry'&&s.plantingLocation==='hydropip_tower').length,1);
  });
  await check('Crop stage updates stay on the planted record, and seed packet lookup works',async()=>{
   const card=page.locator('[data-crop-id="'+plant.id+'"]');await card.locator('summary').click();await card.getByRole('button',{name:'Update crop',exact:true}).click();
   await page.locator('[data-planting-form] [name="status"]').selectOption('harvest_ready');await page.locator('[data-planting-form] button[type="submit"]').click();await page.locator('[data-action-confirm]').click();await page.locator('[data-action-status]').filter({hasText:'Saved successfully'}).waitFor();await page.locator('[data-action-close]').click();
   await page.locator('#proCropList summary').filter({hasText:'Ready to harvest'}).waitFor();await card.locator('summary').click();await card.getByRole('button',{name:'Find seed packets'}).click();assert.ok(await tab('seeds').evaluate(e=>e.classList.contains('active')));assert.equal(await page.locator('#proSeedSearch').inputValue(),'Tomato');
   const seeds=(await api(route()+'/seeds')).seeds;assert.equal(seeds.find(s=>s.id===plant.id).status,'harvest_ready');assert.equal(seeds.find(s=>s.id===packet.id).status,'on_hand');
  });
  await check('Adding and editing a task update the same list and calendar',async()=>{
   await tab('planner').click();await page.locator('.planner-add-task>summary').click();const form=page.locator('#proReminderForm');await form.locator('[name="title"]').fill('New notebook task');await form.locator('[name="dueDate"]').fill(today);await form.locator('button[type="submit"]').click();
   await page.waitForFunction(()=>document.querySelector('#proReminderList').textContent.includes('New notebook task'));
   assert.match(await page.locator('#proPlannerTasks>summary').innerText(),/2 today/);await page.locator('#proPlannerTasks>summary').click();
   const record=page.locator('#proReminderList .record').filter({hasText:'New notebook task'});await record.locator('[data-reminder-action="edit"]').click();await form.locator('[name="title"]').fill('Edited notebook task');await form.locator('button[type="submit"]').click();await page.waitForFunction(()=>document.querySelector('#proReminderList').textContent.includes('Edited notebook task'));
   assert.match(await page.locator('#proCalendarBoard').textContent(),/Edited notebook task/);
  });
  await check('Completing a task from the calendar removes it from active tasks',async()=>{
   await page.locator('#proCalendarBoard [data-calendar-date="'+today+'"]').first().click();const details=page.locator('#proCalendarDetails');await details.locator('[data-calendar-reminder-action="complete"][data-reminder-id="'+due.id+'"]').click();
   await page.waitForFunction(()=>!document.querySelector('#proReminderList').textContent.includes('Inspect leaves today'));
   assert.equal((await api(route()+'/reminders')).reminders.find(r=>r.id===due.id).status,'completed');
  });
  await check('Switching grows clears crop search and keeps records isolated',async()=>{
   await tab('crops').click();await page.locator('#proCropSearch').fill('Tomato');await page.locator('#proProjectSelect').selectOption(b.id);await page.waitForFunction(()=>document.querySelector('#proCropList').textContent.includes('Other grow only'));
   assert.equal(await page.locator('#proCropSearch').inputValue(),'');assert.doesNotMatch(await page.locator('#proCropList').innerText(),/Current plant|Test cherry/);
   await page.locator('#proProjectSelect').selectOption(a.id);await page.waitForFunction(()=>document.querySelector('#proCropList').textContent.includes('Current plant'));
  });
  await check('Colored tabs, scrolling mobile navigation, keyboard access and layouts remain usable',async()=>{
   await open('planner');
   for(const width of [320,390,1440]){await page.setViewportSize({width,height:960});for(const key of ['seeds','crops','planner']){await tab(key).click();await page.locator('[data-pro-panel="'+key+'"]').evaluate(e=>e.scrollIntoView({block:'start'}));assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:path.join(out,key+'-'+width+'.png')})}}
   const colors=await page.locator('.workspace-tabs button[data-pro-page="seeds"],.workspace-tabs button[data-pro-page="crops"],.workspace-tabs button[data-pro-page="planner"]').evaluateAll(es=>es.map(e=>getComputedStyle(e).backgroundColor));assert.equal(new Set(colors).size,3);
   await page.setViewportSize({width:390,height:844});assert.notEqual(await page.locator('.workspace-navigation').evaluate(e=>getComputedStyle(e).position),'sticky');await tab('crops').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('.workspace-tabs button[aria-selected="true"]').count(),1);
   assert.deepEqual(errors,[]);
  });
  await check('Reload restores the new tab order and persisted crop and task edits',async()=>{await open('crops');assert.match(await page.locator('#proCropList').innerText(),/Ready to harvest/);await tab('planner').click();assert.match(await page.locator('#proReminderList').textContent(),/Edited notebook task/);assert.equal(await tab('calendar').count(),0)});
 }
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({passed:results.length,checks:results},null,2));
}finally{await browser?.close();await new Promise(resolve=>server.close(resolve))}
