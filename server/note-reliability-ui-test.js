import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';
const out=path.resolve('../probes');fs.mkdirSync(out,{recursive:true});Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_MEMORY_FILE:path.join(out,'memory.json'),PIP_BRIDGE_SECRET:'fictional-audit',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4244',PIP_RATE_LIMIT_MAX:'10000',DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js');const server=await new Promise(r=>{const s=app.listen(4244,'127.0.0.1',()=>r(s))}),base='http://127.0.0.1:4244';const member={id:'audit-fictional',name:'Audit grower'},subscription={active:true,plan:'pip_pro'},token=issuePipSession({member,subscription});
async function api(url,method='GET',body){const r=await fetch(base+'/api/pip'+url,{method,headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});if(!r.ok)throw Error(await r.text());return r.json()}
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE);const browser=await chromium.launch();const context=await browser.newContext({viewport:{width:390,height:844},timezoneId:'America/New_York'});await context.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort());const page=await context.newPage(),results=[];
try{
const grow=(await api('/projects','POST',{type:'hydropip_build',title:'Audit grow',systemProfile:{onboardingComplete:true}})).project;
const second=(await api('/projects','POST',{type:'hydropip_build',title:'Second grow',systemProfile:{onboardingComplete:true}})).project;
const p='/projects/'+grow.id;
const task=(await api(p+'/reminders','POST',{reminder:{title:'Late-night inspection',dueDate:'2026-09-17',dueAt:'2026-09-18T02:30:00.000Z',timezone:'America/New_York'}})).reminder;
await page.goto(base+'/pip.html?pro=1&projectId='+grow.id+'&focus=planner');await page.evaluate(d=>window.postMessage(d,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:token,member,subscription});await page.waitForFunction(()=>document.querySelector('[data-pro-panel=planner]').getAttribute('aria-busy')==='false');
await page.locator('#proPlannerTasks>summary').click();await page.locator('[data-reminder-id="'+task.id+'"] [data-reminder-action=edit]').click();const displayed={date:await page.locator('#proReminderForm [name=dueDate]').inputValue(),time:await page.locator('#proReminderForm [name=dueTime]').inputValue()};await page.locator('#proReminderForm button[type=submit]').click();await page.waitForFunction(()=>!document.querySelector('#proReminderForm').classList.contains('open'));const saved=(await api(p+'/reminders')).reminders.find(x=>x.id===task.id);results.push({case:'Late-night task unchanged edit',original:task.dueAt,expectedEditor:{date:'2026-09-17',time:'22:30'},actualEditor:displayed,saved:saved.dueAt,shiftHours:(Date.parse(saved.dueAt)-Date.parse(task.dueAt))/3600000});
await page.locator('[data-pro-page=log]').click();await page.locator('[data-rack-key=proReadingForm]>summary').click();await page.locator('#proReadingForm [name=plantResponse]').fill('Double-click audit observation');let release;const pending=new Promise(r=>release=r);let writes=0;await context.route('**/readings',async r=>{if(r.request().method()==='POST'){writes++;await pending}await r.continue()});const before=(await api(p+'/readings')).readings.length;await page.locator('#proReadingForm button[type=submit]').evaluate(el=>{el.click();el.click()});await page.waitForTimeout(200);const whilePending=await page.locator('#proReadingForm button[type=submit]').isEnabled();release();await page.waitForTimeout(500);const after=(await api(p+'/readings')).readings;results.push({case:'Double-click note save with delayed response',writes,buttonEnabledWhilePending:whilePending,newRecords:after.length-before});await context.unroute('**/readings');
await page.locator('[data-rack-key=proReadingForm]>summary').click();await page.locator('#proReadingForm [name=note]').fill('Unsaved observation audit');await page.locator('#proProjectSelect').selectOption(second.id);await page.waitForFunction(()=>document.querySelector('[data-pro-panel=log]').getAttribute('aria-busy')==='false');await page.locator('#proProjectSelect').selectOption(grow.id);await page.waitForFunction(()=>document.querySelector('[data-pro-panel=log]').getAttribute('aria-busy')==='false');results.push({case:'Unsaved observation after grow switch and back',value:await page.locator('#proReadingForm [name=note]').inputValue()});
assert.equal(results[0].shiftHours,0);assert.equal(results[1].writes,1);assert.equal(results[1].newRecords,1);assert.equal(results[1].buttonEnabledWhilePending,false);assert.equal(results[2].value,'Unsaved observation audit');


await page.locator('[data-pro-page=planner]').click();
for(const dueAt of ['2026-11-01T06:30:00.000Z','2026-03-08T07:30:00.000Z','2026-09-18T04:05:00.000Z']){
  const boundary=(await api(p+'/reminders','POST',{reminder:{title:'Boundary task',dueAt,timezone:'America/New_York'}})).reminder;
  await page.locator('#proProjectSelect').selectOption(second.id);await page.waitForFunction(()=>document.querySelector('[data-pro-panel=planner]').getAttribute('aria-busy')==='false');
  await page.locator('#proProjectSelect').selectOption(grow.id);await page.waitForFunction(()=>document.querySelector('[data-pro-panel=planner]').getAttribute('aria-busy')==='false');
  await page.locator('#proPlannerTasks').evaluate(el=>el.open=true);
  await page.locator('[data-reminder-id="'+boundary.id+'"] [data-reminder-action=edit]').click();
  await page.locator('#proReminderForm button[type=submit]').click();await page.waitForFunction(()=>!document.querySelector('#proReminderForm').classList.contains('open'));
  assert.equal((await api(p+'/reminders')).reminders.find(x=>x.id===boundary.id).dueAt,dueAt);
}
results.push({case:'Midnight and spring/fall DST unchanged edits retain the exact instant',passed:true});
const retryBody={reading:{note:'Retry-safe observation'},idempotencyKey:'same-network-operation'};
const duplicates=await Promise.all(Array.from({length:4},()=>api(p+'/readings','POST',retryBody)));
assert.equal(new Set(duplicates.map(x=>x.reading.id)).size,1);
assert.equal((await api(p+'/readings')).readings.filter(x=>x.note==='Retry-safe observation').length,1);
const otherGrow=await api('/projects/'+second.id+'/readings','POST',retryBody);assert.notEqual(otherGrow.reading.id,duplicates[0].reading.id);
results.push({case:'Concurrent API retries deduplicate within grow; distinct grows stay separate',passed:true});
await page.reload();await page.evaluate(d=>window.postMessage(d,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:token,member,subscription});
await page.waitForFunction(()=>document.querySelector('[data-pro-panel=log]').getAttribute('aria-busy')==='false');
assert.equal(await page.locator('#proReadingForm [name=note]').inputValue(),'Unsaved observation audit');
results.push({case:'Draft survives reload',passed:true});
const otherMember={id:'other-audit-member',name:'Other tester'},otherToken=issuePipSession({member:otherMember,subscription});
await page.evaluate(d=>window.postMessage(d,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:otherToken,member:otherMember,subscription});
await page.waitForFunction(()=>document.querySelector('#proReadingForm [name=note]').value==='');
await page.evaluate(d=>window.postMessage(d,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:token,member,subscription});
await page.waitForFunction(()=>document.querySelector('#proReadingForm [name=note]').value==='Unsaved observation audit');
results.push({case:'Account switch hides and restores only the matching account draft',passed:true});

await page.locator('[data-pro-page=log]').click();
await page.locator('[data-rack-key=proReadingForm]').evaluate(el=>el.open=true);
let releaseSave;const pendingSave=new Promise(resolve=>releaseSave=resolve);
await context.route('**/readings',async route=>{if(route.request().method()==='POST')await pendingSave;await route.continue()});
await page.locator('#proReadingForm button[type=submit]').click();
await page.locator('#proProjectSelect').selectOption(second.id);await page.waitForFunction(()=>document.querySelector('[data-pro-panel=log]').getAttribute('aria-busy')==='false');
await page.locator('[data-rack-key=proReadingForm]').evaluate(el=>el.open=true);
await page.locator('#proReadingForm [name=note]').fill('Second grow draft stays here');
const savedResponse=page.waitForResponse(r=>r.url().endsWith('/readings')&&r.request().method()==='POST');releaseSave();await savedResponse;await page.waitForTimeout(100);
assert.equal(await page.locator('#proReadingForm [name=note]').inputValue(),'Second grow draft stays here');
await context.unroute('**/readings');
await page.locator('#proProjectSelect').selectOption(grow.id);await page.waitForFunction(()=>document.querySelector('[data-pro-panel=log]').getAttribute('aria-busy')==='false');
assert.equal(await page.locator('#proReadingForm [name=note]').inputValue(),'');
await page.locator('#proProjectSelect').selectOption(second.id);await page.waitForFunction(()=>document.querySelector('[data-pro-panel=log]').getAttribute('aria-busy')==='false');
assert.equal(await page.locator('#proReadingForm [name=note]').inputValue(),'Second grow draft stays here');
results.push({case:'A pending save clears only its original draft, preserving the other grow draft',passed:true});
fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
}finally{await browser.close();await new Promise(r=>server.close(r))}


