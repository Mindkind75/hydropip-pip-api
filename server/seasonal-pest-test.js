import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {createRequire} from 'node:module';
import {buildPestWatch,pestRegion} from './seasonalPests.js';
const crop=(name,status='growing')=>({crop:name,status});
const watch=(profile={},currentCrops=[crop('Tomatoes')],date='2026-08-01T12:00:00Z')=>buildPestWatch({profile:{location:'Baltimore, MD',areaType:'outdoor_open',...profile},currentCrops,now:new Date(date),timezone:'America/New_York'});
const checks=[];
async function check(name,fn){await fn();checks.push(name);console.log('PASS '+name)}
await check('Regional windows, winter suppression and crop-specific matching',()=>{
 assert.equal(watch().items.find(i=>i.id==='hornworms').kind,'seasonal');
 assert.ok(!watch({},[crop('Tomatoes')],'2026-01-01T12:00:00Z').items.some(i=>i.id==='hornworms'));
 assert.ok(!watch({},[crop('Lettuce')]).items.some(i=>i.id==='hornworms'));
 assert.ok(watch({},[crop('Kale')]).items.some(i=>i.id==='cabbage-caterpillars'));
 assert.ok(!watch({},[crop('Sweet potatoes')]).items.some(i=>i.id==='hornworms'));
});
await check('Protected grows, missing areas, unknown locations and zones do not invent seasons',()=>{
 assert.deepEqual(watch({areaType:'indoor'}).items.map(i=>i.id),['aphids']);
 for(const p of [{location:'33811',growZone:'9b'},{location:'Sydney, Australia'},{location:''},{location:'Lakeland, FL'},{areaType:''}]) assert.ok(watch(p).items.every(i=>i.kind==='crop_watch'));
 assert.equal(pestRegion('Toronto, Canada'),null);assert.equal(pestRegion('California, Australia'),null);
 assert.equal(pestRegion('Lakeland, FL 33811').code,'FL');assert.equal(pestRegion('Baltimore, MD, USA').code,'MD');
});
await check('Only emerged current crops trigger reminders; local date controls month boundary',()=>{
 assert.equal(watch({},[crop('Tomatoes','sown'),crop('Kale','planned')]).items.length,0);
 const a=buildPestWatch({profile:{location:'Minneapolis, MN',areaType:'outdoor_open'},currentCrops:[crop('Tomato')],now:new Date('2026-10-01T01:00:00Z'),timezone:'America/Chicago'});
 assert.ok(a.items.some(i=>i.id==='hornworms'));assert.equal(a.asOf,'2026-09-30');
});
await check('All shopping URLs use the existing affiliate tag and every card has a source',()=>{
 for(const item of watch({},[crop('Tomato'),crop('Kale')]).items){assert.equal(new URL(item.productUrl).searchParams.get('tag'),process.env.AMAZON_ASSOCIATE_TAG||'hydrpip200202-20');assert.ok(item.sources.length);assert.ok(item.sources.every(s=>s.url.startsWith('https://')))}
});

const out=process.env.PIP_PEST_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'pip-pest-'));fs.mkdirSync(out,{recursive:true});
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_MEMORY_FILE:path.join(out,'memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),PIP_BRIDGE_SECRET:'pest-fictional-local-test',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4217',PIP_RATE_LIMIT_MAX:'5000',DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();
const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js');
const server=await new Promise(resolve=>{const s=app.listen(4217,'127.0.0.1',()=>resolve(s))}),base='http://127.0.0.1:'+server.address().port;
const member={id:'pest-test-member',name:'Fictional pest tester'},pro={active:true,plan:'pip_pro'},token=issuePipSession({member,subscription:pro}),free=issuePipSession({member,subscription:{active:false}}),foreign=issuePipSession({member:{id:'foreign-pest-test'},subscription:pro});
async function api(url,method='GET',body,auth=token){const r=await fetch(base+'/api/pip'+url,{method,headers:{Authorization:'Bearer '+auth,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});return {status:r.status,data:await r.json()}}
async function ok(url,method,body){const r=await api(url,method,body);assert.ok(r.status<300,JSON.stringify(r));return r.data}
let browser;
try{
 const a=(await ok('/projects','POST',{type:'hydropip_build',title:'Tomato notebook',systemProfile:{growZone:'9',location:'Lakeland, FL',areaType:'outdoor_open',crops:['tomato'],onboardingComplete:true}})).project;
 const b=(await ok('/projects','POST',{type:'hydropip_build',title:'Greens notebook',systemProfile:{growZone:'9',location:'Lakeland, FL',areaType:'outdoor_open',onboardingComplete:true}})).project;
 await ok('/projects/'+a.id+'/seeds','POST',{seed:{crop:'Tomato',status:'growing',plantingLocation:'hydropip_tower'}});
 await ok('/projects/'+a.id+'/seeds','POST',{seed:{crop:'Kale',status:'on_hand',plantingLocation:'seed_vault'}});
 await ok('/projects/'+b.id+'/seeds','POST',{seed:{crop:'Lettuce',status:'growing',plantingLocation:'hydropip_tower'}});
 const resource=id=>'/projects/'+id;
 await check('Pro API enforces subscription and ownership on both entry points',async()=>{
  for(const route of ['/rhythm','/workspace']){assert.equal((await api(resource(a.id)+route,'GET',null,free)).status,402);assert.equal((await api(resource(a.id)+route,'GET',null,foreign)).status,404)}
 });
 await check('Workspace integrates planted crops only and isolates other grows',async()=>{
  const aw=(await ok(resource(a.id)+'/workspace')).rhythm.pestWatch,bw=(await ok(resource(b.id)+'/workspace')).rhythm.pestWatch;
  assert.ok(aw.items.some(i=>i.id==='hornworms'));assert.ok(!aw.items.some(i=>i.id==='cabbage-caterpillars'));assert.ok(!bw.items.some(i=>i.id==='hornworms'));
 });
 if(process.argv.includes('--ui')){
  const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright');browser=await chromium.launch();const context=await browser.newContext({viewport:{width:390,height:844}});
  await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'/pip.html?pro=1&projectId='+a.id);await page.evaluate(data=>window.postMessage(data,location.origin),{type:'HYDROPIP_PIP_SESSION',sessionToken:token,member,subscription:pro});
  await page.waitForSelector('body.pro-active');await page.locator('[data-pro-page="rhythm"]').click();
  try{await page.locator('#proPestWatch .pest-watch-rack>summary').waitFor();await page.locator('#proPestWatch .pest-watch-rack>summary').click();await page.locator('#proPestWatch .pest-watch-card').first().waitFor()}catch(error){console.log('UI diagnostic',errors,await page.locator('#proWorkspaceStatus').textContent(),await page.locator('#proPestWatch').textContent());throw error}
  await check('Mobile cards start collapsed, expand with keyboard, and show disclosed tagged shopping links',async()=>{
   assert.equal(await page.locator('#proPestWatch .pest-watch-card[open]').count(),0);
   const summary=page.locator('#proPestWatch .pest-watch-card>summary').first();await summary.focus();await page.keyboard.press('Enter');
   await page.locator('#proPestWatch .pest-watch-treatment summary').first().click();
   const product=page.locator('#proPestWatch a[rel~="sponsored"]').first();assert.match(await product.getAttribute('href'),/tag=hydrpip200202-20/);assert.ok(await product.isVisible());
   assert.match(await page.locator('#proPestWatch').innerText(),/As an Amazon Associate/);
   const ask=new URL(await page.locator('#proPestWatch a[target="_top"]').first().getAttribute('href'));assert.equal(ask.searchParams.get('projectId'),a.id);assert.match(ask.searchParams.get('prompt'),/not a confirmed infestation/);
  });
  await check('Hide and undo work without dismissing a different grow',async()=>{
   await page.getByRole('button',{name:'Hide for this visit',exact:true}).first().click();assert.equal(await page.locator('#proPestWatch .pest-watch-card').count(),1);
   await page.locator('#proProjectSelect').selectOption(b.id);await page.waitForFunction(()=>document.querySelector('#proWorkspaceStatus').textContent==='Grow profile and account memory ready.');
   await page.waitForFunction(()=>document.querySelector('#proPestWatch').textContent.includes('Lettuce'));assert.equal(await page.locator('#proPestWatch .pest-watch-card').count(),1);
   await page.locator('#proProjectSelect').selectOption(a.id);await page.getByRole('button',{name:'Show hidden reminders'}).waitFor();await page.getByRole('button',{name:'Show hidden reminders'}).click();assert.equal(await page.locator('#proPestWatch .pest-watch-card').count(),2);
  });
  await check('Sighting opens an editable note, preserves a draft, and saves only on submission',async()=>{
   const before=(await ok(resource(a.id)+'/readings')).readings.length;
   await page.locator('#proReadingForm [name="note"]').evaluate(e=>e.value='Existing grow observation.');
   await page.locator('#proPestWatch .pest-watch-card>summary').first().click();await page.getByRole('button',{name:'Record a possible sighting'}).first().click();
   const note=page.locator('#proReadingForm [name="note"]');assert.ok(await note.isVisible());assert.match(await note.inputValue(),/Existing grow observation/);assert.match(await note.inputValue(),/Identification not confirmed/);
   assert.equal((await ok(resource(a.id)+'/readings')).readings.length,before);
   await note.fill((await note.inputValue())+'Fresh leaf damage; no insect identified.');
   const saveResponse=page.waitForResponse(r=>r.url().includes('/projects/'+a.id+'/readings')&&r.request().method()==='POST');
   await page.locator('#proReadingForm button[type="submit"]').click();
   const response=await saveResponse;assert.ok(response.ok(),await response.text());
   await page.waitForFunction(()=>document.querySelector('#proReadingForm [name="note"]').value==='');
   await page.waitForFunction(()=>document.querySelector('#proGrowLogList .record')!==null);
   const saved=(await ok(resource(a.id)+'/readings')).readings;assert.equal(saved.length,before+1);assert.match(saved[0].note,/Fresh leaf damage/);
   assert.equal((await ok(resource(b.id)+'/readings')).readings.length,0);
   const memory=await m.buildProjectContext({userId:member.id,projectId:a.id,question:'What pest damage did I observe?'});
   assert.ok(memory.recentReadings.some(r=>r.note.includes('Fresh leaf damage')));
  });
  await check('Phone and desktop layouts fit, with no JavaScript errors',async()=>{
   await page.locator('[data-pro-page="rhythm"]').click();
   for(const width of [320,390,1440]){await page.setViewportSize({width,height:960});await page.locator('#proPestWatch .pest-watch-rack').evaluate(e=>e.open=false);await page.locator('#proPestWatch').scrollIntoViewIfNeeded();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:path.join(out,'pest-watch-'+width+'.png')})}
   await page.setViewportSize({width:390,height:960});await page.locator('#proPestWatch .pest-watch-rack>summary').click();await page.locator('#proPestWatch .pest-watch-card>summary').first().click();await page.locator('#proPestWatch').evaluate(e=>e.scrollIntoView({block:'start'}));await page.screenshot({path:path.join(out,'pest-watch-expanded-390.png')});
   assert.deepEqual(errors,[]);
  });
 }
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({checks,passed:checks.length},null,2));
}finally{await browser?.close();await new Promise(resolve=>server.close(resolve))}
