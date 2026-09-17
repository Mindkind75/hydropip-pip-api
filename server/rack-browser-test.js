// Actual local API and frontend in a cross-origin host. Only fictional accounts.
import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import http from 'node:http';import {createRequire} from 'node:module';
const out=process.env.PIP_BATCH_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'pip-navigation-'));
fs.mkdirSync(out,{recursive:true});
const memoryFile=path.join(fs.mkdtempSync(path.join(os.tmpdir(),'pip-nav-store-')),'memory.json');
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',PIP_AI_DISABLED:'true',OPENAI_API_KEY:'',PIP_MEMORY_FILE:memoryFile,PIP_BRIDGE_SECRET:'fictional-navigation-test-only',PIP_ALLOWED_ORIGINS:'http://127.0.0.1:4217,http://127.0.0.1:4218',PIP_RATE_LIMIT_MAX:'10000',DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();
const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js');
const member={id:'navigation-owner',name:'Fictional grower'},other={id:'navigation-other',name:'Other grower'},subscription={active:true,plan:'pip_pro'};
const profile={systemStage:'growing',systemType:'hydropip_tower',onboardingComplete:true,growZone:'9b',experienceMode:'detailed',towerCount:2,reservoirGallons:35,crops:['lettuce']};
const grow=async(user,title,extra={})=>(await m.createProject({user,subscription,type:'hydropip_build',title,systemProfile:{...profile,...extra}})).project;
const a=await grow(member,'Porch greens'),b=await grow(member,'Kitchen herbs',{crops:['basil']}),foreign=await grow(other,'Private grow');
const token=issuePipSession({member,subscription}),otherToken=issuePipSession({member:other,subscription});
const base='http://127.0.0.1:4217',host='http://127.0.0.1:4218';
const server=await new Promise(r=>{const s=app.listen(4217,'127.0.0.1',()=>r(s))});
let session={type:'HYDROPIP_PIP_SESSION',member,subscription,sessionToken:token};
const hostServer=http.createServer((req,res)=>{
 const query=new URL(req.url,host).search;
 res.setHeader('Content-Type','text/html');
 res.end('<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>html,body{margin:0;height:100%;overflow:hidden}iframe{width:100%;height:100dvh;border:0;display:block}</style></head><body><iframe id="pip" src="'+base+'/pip.html'+query.replaceAll('&','&amp;')+'"></iframe><script>const session='+JSON.stringify(session)+';addEventListener("message",e=>{if(e.source===pip.contentWindow&&e.origin==='+JSON.stringify(base)+'&&e.data.type==="HYDROPIP_PIP_READY")pip.contentWindow.postMessage(session,'+JSON.stringify(base)+')});</script></body></html>');
});await new Promise(r=>hostServer.listen(4218,'127.0.0.1',r));
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright'),browser=await chromium.launch();
const results=[];let page;
async function check(name,work){try{await work();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});if(page)await page.screenshot({path:path.join(out,'failure.png')});throw error}}
const prefs=()=>m.getUserPreferences({userId:member.id});
async function localRoute(route){
 const url=new URL(route.request().url());
 if(![base,host].includes(url.origin))return route.abort();
 if(url.origin===base&&url.pathname==='/pip.html'){
  // Allow this loopback host as a frame ancestor in the test response only.
  const response=await route.fetch(),headers=response.headers();
  if(headers['content-security-policy'])headers['content-security-policy']=headers['content-security-policy'].replace("frame-ancestors 'self'", "frame-ancestors 'self' "+host);
  return route.fulfill({response,headers});
 }
 return route.continue();
}
async function until(fn){for(let i=0;i<160;i++){if(await fn())return;await new Promise(r=>setTimeout(r,50))}throw Error('Expected state did not arrive')}
async function open(query,selected){await page.goto(host+'/?'+query);const f=page.frameLocator('#pip');await f.locator('body.pro-active').waitFor();if(selected){await until(async()=>await f.locator('#proProjectSelect').inputValue()===selected&&await f.locator('[data-pro-panel="seeds"]').getAttribute('aria-busy')==='false')}return f}
try{
 for(let i=0;i<8;i++)await m.createProjectSeed({userId:member.id,projectId:a.id,subscription,seed:{crop:'Lettuce',variety:'Packet '+i,packsOnHand:1}});
 const context=await browser.newContext({viewport:{width:390,height:844}});await context.route('**/*',localRoute);page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 let f=await open('pro=1&projectId='+a.id,a.id);
 async function tab(name){await f.getByRole('tab',{name,exact:true}).click();await page.waitForTimeout(450)}
 await check('Colored tabs have distinct colors and scroll away on a phone',async()=>{
  const colors=await f.locator('button.workspace-tab[data-pro-page]:not([hidden])').evaluateAll(nodes=>nodes.map(e=>getComputedStyle(e).backgroundColor));assert.equal(new Set(colors).size,colors.length);
  await page.screenshot({path:path.join(out,'tabs-phone.png')});
  await tab('Rhythm');assert.equal(await f.locator('.workspace-navigation').evaluate(e=>getComputedStyle(e).position),'static');
  assert.ok((await f.locator('.workspace-navigation').boundingBox()).y<0);
  await page.screenshot({path:path.join(out,'rhythm-phone.png')});
 });
 await check('Profile sections preserve draft fields, reopen on invalid input, and save through the API',async()=>{
  await tab('Profile');const group=f.locator('[data-rack-key="profile-2"]');
  await group.locator('summary').click();await f.locator('[name=reservoirGallons]').fill('42');
  await group.locator('summary').click();assert.equal(await f.locator('[name=reservoirGallons]').inputValue(),'42');
  await tab('Rhythm');await tab('Profile');assert.equal(await group.getAttribute('open'),null);
  await group.locator('summary').click();assert.equal(await f.locator('[name=reservoirGallons]').inputValue(),'42');
  await f.locator('[name=reservoirGallons]').fill('0');await group.locator('summary').click();await f.locator('#proSaveProfile').click();assert.notEqual(await group.getAttribute('open'),null);
  await f.locator('[name=reservoirGallons]').fill('42');await f.locator('#proSaveProfile').click();
  await until(async()=>(await m.getProject({userId:member.id,projectId:a.id})).systemProfile.reservoirGallons===42);
  await until(async()=>await f.locator('[data-pro-panel=seeds]').getAttribute('aria-busy')==='false');
 });
 await check('Seed inventory shows six first, search finds hidden records, and editing opens its form',async()=>{
  await tab('Seed Vault');await until(async()=>await f.locator('#proSeedList .record:not([hidden])').count()===6);
  await page.screenshot({path:path.join(out,'seeds-phone.png')});
  await f.locator('[data-pro-panel=seeds] .rack-more').click();assert.equal(await f.locator('#proSeedList .record:not([hidden])').count(),8);
  await f.locator('#proSeedSearch').fill('Packet 7');await until(async()=>await f.locator('#proSeedList .record').count()===1);
  await f.locator('#proSeedList [data-seed-action=edit]').click();await f.locator('#proSeedForm [name=packsOnHand]').fill('3');
  await f.locator('#proSeedForm button[type=submit]').click();await until(async()=>(await m.listProjectSeeds({userId:member.id,projectId:a.id})).some(s=>s.variety==='Packet 7'&&s.packsOnHand===3));
 });
 await check('Planner add control expands the form and saves its task',async()=>{
  await tab('Planner');await f.locator('.planner-add-task>summary').click();await f.locator('#proReminderForm [name=title]').fill('Rack test task');await f.locator('#proReminderForm button[type=submit]').click();
  await until(async()=>(await m.listProjectReminders({userId:member.id,projectId:a.id})).some(r=>r.title==='Rack test task'));
 });
 await check('Grow Notes add control expands and saves a plant observation',async()=>{
  await tab('Grow Notes');await f.locator('[data-open-form=proReadingForm]').click();await f.locator('#proReadingForm [name=plantResponse]').fill('Fictional healthy leaves');await f.locator('#proReadingForm button[type=submit]').click();
  await until(async()=>(await m.listProjectReadings({userId:member.id,projectId:a.id})).some(r=>r.plantResponse==='Fictional healthy leaves'));
 });
 await check('Section preferences survive reload and remain separate across grows',async()=>{
  await tab('Rhythm');const section=f.locator('[data-rack-key=proRhythmBatch]');await section.locator('summary').click();await page.waitForTimeout(100);
  f=await open('pro=1&projectId='+a.id,a.id);await tab('Rhythm');assert.notEqual(await f.locator('[data-rack-key=proRhythmBatch]').getAttribute('open'),null);
  await f.locator('#proProjectSelect').selectOption(b.id);await until(async()=>await f.locator('[data-pro-panel=seeds]').getAttribute('aria-busy')==='false');await until(async()=>await f.locator('[data-rack-key=proRhythmBatch]').getAttribute('open')===null);
 });
 await check('All notebook pages fit at phone and desktop widths without script errors',async()=>{
  for(const width of [320,390,1440]){
   await page.setViewportSize({width,height:844});
   for(const name of ['Rhythm','Profile','Planner','My Crops','Seed Vault','Grow Notes','History','Track Build','Account']){
    await tab(name);assert.ok(await f.locator('body').evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    await page.screenshot({path:path.join(out,name.replaceAll(' ','-').toLowerCase()+'-'+width+'.png')});
   }
  }
  assert.deepEqual(errors,[]);
 });
 await context.close();page=null;
}catch(error){console.error(error.stack);process.exitCode=1}finally{await browser.close();server.closeAllConnections();hostServer.closeAllConnections();await Promise.all([new Promise(r=>server.close(r)),new Promise(r=>hostServer.close(r))]);await m.closeMemoryForTests();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({results,physicalPhoneTest:false,realModelTest:false},null,2));console.log('Artifacts: '+out)}
