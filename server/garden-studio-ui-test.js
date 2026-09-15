// Actual styled frontend and local API. Fictional data; external requests blocked.
import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {createRequire} from 'node:module';
const out=process.env.PIP_GARDEN_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'pip-garden-ui-'));
fs.mkdirSync(out,{recursive:true});
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_MEMORY_FILE:path.join(fs.mkdtempSync(path.join(os.tmpdir(),'pip-garden-store-')),'memory.json'),PIP_BRIDGE_SECRET:'fictional-garden-test-only',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4234',PIP_RATE_LIMIT_MAX:'10000',DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();
const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js');
const base='http://127.0.0.1:4234',member={id:'garden-design-test',name:'Fictional grower'},subscription={active:true,plan:'pip_pro'};
const token=issuePipSession({member,subscription});
const server=await new Promise(r=>{const s=app.listen(4234,'127.0.0.1',()=>r(s))});
async function api(url,method='GET',body){const response=await fetch(base+url,{method,headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});const data=await response.json();assert.ok(response.ok,url+': '+JSON.stringify(data));return data}
const profile={towerCount:2,reservoirGallons:35,growZone:'9b',location:'Ocala, FL',crops:['lettuce','basil'],systemStage:'growing',systemType:'hydropip_tower',onboardingComplete:true,experienceMode:'standard'};
const grow=(await api('/api/pip/projects','POST',{type:'hydropip_build',title:'Porch greens',systemProfile:profile})).project;
await api('/api/pip/projects/'+grow.id+'/seeds','POST',{seed:{crop:'Lettuce',variety:'Buttercrunch',packsOnHand:1,plantingLocation:'seed_vault'}});
await api('/api/pip/projects/'+grow.id+'/seeds','POST',{seed:{crop:'Basil',variety:'Genovese',packsOnHand:1,plantingLocation:'seed_vault'}});
await api('/api/pip/projects/'+grow.id+'/readings','POST',{reading:{note:'Flow looked lighter at the far tower. Compare each feed outlet next time.',cropsGrowing:'Lettuce and basil',plantCondition:'Good'}});
await api('/api/pip/projects/'+grow.id+'/reminders','POST',{reminder:{title:'Check flow and plant condition',category:'maintenance',dueDate:new Date().toISOString().slice(0,10),timezone:'America/New_York',notify:false}});
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright'),browser=await chromium.launch();
let page;const results=[],errors=[];
const sizes=[{width:1440,height:1000},{width:1024,height:900},{width:736,height:900},{width:390,height:844},{width:320,height:664},{width:844,height:390}];
async function check(name,work){try{await work();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});if(page)await page.screenshot({path:path.join(out,'garden-failure.png')});throw error}}
async function until(fn){for(let i=0;i<160;i++){if(await fn())return;await new Promise(r=>setTimeout(r,40))}throw Error('Expected state did not arrive')}
async function localContext(size){const context=await browser.newContext({viewport:size,reducedMotion:'reduce'});await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));return context}
async function openPro(){await page.goto(base+'/pip.html?pro=1&projectId='+grow.id);await page.evaluate(session=>window.postMessage(session,location.origin),{type:'HYDROPIP_PIP_SESSION',member,subscription,sessionToken:token});await page.locator('body.pro-active').waitFor();await until(async()=>await page.locator('[data-pro-panel=seeds]').getAttribute('aria-busy')==='false')}
async function capture(name){await page.screenshot({path:path.join(out,name+'.png')})}
try{
 for(const size of sizes){
  const context=await localContext(size);
  await check('Software homepage, real images, trademark and navigation at '+size.width+'x'+size.height,async()=>{
   await page.goto(base+'/home.html');await page.locator('.garden-home-companion img').waitFor();await page.locator('.garden-home-companion img').evaluate(img=>img.decode());
   assert.match(await page.locator('.brand').innerText(),/HydroPip™/);
   assert.match(await page.locator('h1').innerText(),/Your grow,\s+all in one place/);
   assert.match(await page.locator('.garden-mini-heading').innerText(),/Example notebook/);
   const dimensions=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,towers:document.querySelector('.garden-towers').getBoundingClientRect().top,hero:document.querySelector('.hero').getBoundingClientRect().bottom}));
   assert.ok(dimensions.scroll<=dimensions.width+1);assert.ok(dimensions.towers>=dimensions.hero-1);
   assert.equal(await page.locator('.garden-mini-tabs a').count(),3);
   if(size.width<=760){await page.locator('#menuBtn').click();await page.locator('#nav.open .navPro').waitFor({state:'visible'});await page.locator('#menuBtn').click()}
   await capture('home-'+size.width);
   // Scrolling must reveal the real lazy-loaded harvest image as a visitor reaches it.
   await page.locator('.harvestProof img').scrollIntoViewIfNeeded();await page.locator('.harvestProof img').evaluate(img=>img.decode());
   await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:path.join(out,'home-full-'+size.width+'.png'),fullPage:true});
  });
  await check('Every notebook tab stays visible and opens its real page at '+size.width+'x'+size.height,async()=>{
   await openPro();await page.evaluate(()=>document.querySelector('#pipProView').scrollTop=0);await capture('workspace-entry-'+size.width);
   const tabs=page.locator('#proWorkspace .workspace-tabs button[role=tab]:not([hidden])');assert.equal(await tabs.count(),9);
   const names=await tabs.evaluateAll(elements=>elements.map(el=>el.dataset.proPage));
   assert.deepEqual(new Set(names),new Set(['rhythm','profile','planner','calendar','seeds','log','history','build','account']));
   const controls=await page.locator('#proWorkspace .workspace-tabs .workspace-tab:not([hidden])').evaluateAll(elements=>elements.map(el=>({name:el.textContent.trim(),x:el.getBoundingClientRect().x,w:el.getBoundingClientRect().width,h:el.getBoundingClientRect().height,scroll:el.scrollWidth,client:el.clientWidth})));
   assert.equal(controls.length,12);assert.ok(controls.every(c=>c.w>=44&&c.h>=44&&c.x>=0&&c.x+c.w<=size.width+1&&c.scroll<=c.client+1),JSON.stringify(controls));
   for(const name of names){
    await page.locator('#proWorkspace button[data-pro-page='+name+']').click();
    const panel=page.locator('.notebook-page.active');assert.equal(await panel.getAttribute('data-pro-panel'),name);await panel.waitFor({state:'visible'});
    const state=await page.evaluate(()=>{const panel=document.querySelector('.notebook-page.active'),nav=document.querySelector('.workspace-navigation');return{panel:panel.getBoundingClientRect().toJSON(),nav:nav.getBoundingClientRect().toJSON(),body:document.documentElement.scrollWidth,width:innerWidth,images:[...panel.querySelectorAll('img')].filter(i=>i.offsetWidth>0).every(i=>i.complete&&i.naturalWidth>0)}});
    assert.ok(state.body<=state.width+1);assert.ok(state.panel.width<=size.width+1);assert.ok(state.images,'Visible page images must load on '+name);
    // A tab change must put the page below the sticky navigation, not underneath it.
    await until(async()=>await panel.evaluate(el=>el.getBoundingClientRect().top>=document.querySelector('.workspace-navigation').getBoundingClientRect().bottom-1));
    if([1440,390].includes(size.width)&&['rhythm','profile','log','calendar','seeds'].includes(name))await capture(name+'-'+size.width);
   }
   assert.equal(await page.locator('#proChatLink').getAttribute('href'), 'https://www.hydropip.com/pip?projectId='+grow.id);
  });
  await context.close();page=null;
 }
 let context=await localContext({width:390,height:844});
 await check('Rearranging tabs saves to the account and survives a new browser',async()=>{
  await openPro();await page.locator('#proArrangeTabs').click();await page.locator('[data-tab-order-key=rhythm] [data-tab-move=down]').click();await page.locator('#proTabOrderForm').getByRole('button',{name:'Save order',exact:true}).click();await page.locator('#proTabOrderDialog').waitFor({state:'hidden'});
  assert.equal(await page.locator('#proWorkspace .workspace-tabs button[role=tab]').first().getAttribute('data-pro-page'),'profile');
  await context.close();context=await localContext({width:1024,height:900});await openPro();assert.equal(await page.locator('#proWorkspace .workspace-tabs button[role=tab]').first().getAttribute('data-pro-page'),'profile');
 });
 await check('Grow notes and Profile remain editable and saved records survive reload',async()=>{
  await page.locator('#proWorkspace button[data-pro-page=profile]').click();await page.locator('#proProfileForm [name=location]').fill('Fictional garden, Ocala');
  const saved=page.waitForResponse(r=>r.url().includes('/api/pip/projects/'+grow.id)&&r.request().method()==='PATCH');await page.locator('#proProfileForm button[type=submit]').click();await saved;
  await openPro();await page.locator('#proWorkspace button[data-pro-page=profile]').click();await until(async()=>await page.locator('#proProfileForm [name=location]').inputValue()==='Fictional garden, Ocala');
  await page.locator('#proWorkspace button[data-pro-page=log]').click();assert.match(await page.locator('.notebook-page.active').innerText(),/Flow looked lighter/);
 });
 await check('Direct Account entry and the public Pro preview keep their controls',async()=>{
  await page.goto(base+'/pip.html?pro=account');await page.evaluate(session=>window.postMessage(session,location.origin),{type:'HYDROPIP_PIP_SESSION',member,subscription,sessionToken:token});await page.locator('body.account-mode.pro-active').waitFor();await page.locator('[data-pro-panel=account]').waitFor({state:'visible'});await capture('account-direct-1024');
  await context.close();context=await localContext({width:390,height:844});await page.goto(base+'/pip.html?pro=1');await page.locator('#proJoinButton').waitFor({state:'visible'});await capture('pro-entry-390');
  for(const pageName of ['profile','planner','calendar','seeds','log','history','build','account','rhythm']){await page.locator('[data-preview-page='+pageName+']').click();assert.ok((await page.locator('#proPreviewPanel').innerText()).trim().length>30)}
  await page.locator('a[href="#proCompare"]').click();await page.locator('#proCompare').waitFor({state:'visible'});await capture('pro-compare-390');
  await page.locator('#proPlanButton').scrollIntoViewIfNeeded();
  const priceContrast=await page.locator('.pro-plan .price').evaluate(el=>{
   const light=color=>{const channels=color.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>v/255).map(v=>v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4));return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722};
   const foreground=light(getComputedStyle(el).color),background=light(getComputedStyle(el.closest('.pro-plan')).backgroundColor);return (Math.max(foreground,background)+.05)/(Math.min(foreground,background)+.05);
  });assert.ok(priceContrast>=4.5,'The price must remain readable on the new Pro plan surface');await capture('pro-plan-390');
 });
 assert.deepEqual(errors,[]);await context.close();page=null;
}catch(error){console.error(error.stack);process.exitCode=1}finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));await m.closeMemoryForTests();fs.writeFileSync(path.join(out,'garden-results.json'),JSON.stringify({results,productionRequests:false,physicalPhoneTest:false},null,2))}
