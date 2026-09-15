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
 await check('Return point rejects another account, missing IDs and archived grows; unrelated preferences survive',async()=>{
  await m.updateUserPreferences({userId:member.id,patch:{experienceMode:'detailed',lastGrowId:a.id}});
  for(const lastGrowId of [foreign.id,'missing',17])await assert.rejects(m.updateUserPreferences({userId:member.id,patch:{lastGrowId}}),/Choose an available grow/);
  const archived=await grow(member,'Archived');await m.updateProject({userId:member.id,projectId:archived.id,patch:{status:'archived'}});
  await assert.rejects(m.updateUserPreferences({userId:member.id,patch:{lastGrowId:archived.id}}));
  assert.equal((await prefs()).lastGrowId,a.id);assert.equal((await prefs()).experienceMode,'detailed');
 });
 for(const size of [{width:1440,height:960},{width:390,height:844},{width:320,height:664},{width:844,height:390},{width:720,height:480}]){
  const context=await browser.newContext({viewport:size}),errors=[];await context.route('**/*',localRoute);
  page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await check('Notebook scroll, reachable grow selector, tab keys and dialogs at '+size.width+'×'+size.height,async()=>{
   const f=await open('pro=1&projectId='+a.id,a.id);
   await f.getByRole('tab',{name:'Profile',exact:true}).click();await until(async()=>await f.locator('[data-pro-panel=profile]').evaluate(e=>e.getBoundingClientRect().top<(innerWidth<=900?24:document.querySelector('.workspace-navigation').getBoundingClientRect().bottom+24)));
   await page.screenshot({path:path.join(out,'notebook-'+size.width+'.png')});
   const child=page.frames().find(f=>f.url().startsWith(base));
   const measurements=await child.evaluate(()=>{const view=document.querySelector('#pipProView');view.scrollTop=view.scrollHeight;return{body:document.body.scrollHeight,root:document.documentElement.scrollHeight,height:innerHeight,width:document.documentElement.scrollWidth,view:view.getBoundingClientRect().toJSON(),scroll:view.scrollTop}});
   assert.ok(measurements.body<=size.height+1);assert.ok(measurements.root<=size.height+1);assert.ok(measurements.width<=size.width+1);assert.ok(measurements.scroll>0);
   if(size.width<=900){
    const nav=await f.locator('.workspace-navigation').boundingBox();assert.ok(nav.y+nav.height<=0,'Phone tabs scroll away with the content');
    await f.locator('#pipReturnTop').click();await until(async()=>await f.locator('#proProjectSelect').evaluate(e=>e.getBoundingClientRect().top>=0));
   }
   const selectBox=await f.locator('#proProjectSelect').boundingBox();assert.ok(selectBox.y>=0&&selectBox.y+selectBox.height<size.height);assert.ok(selectBox.height>=44);
   await f.getByRole('tab',{name:'Profile',exact:true}).press('End');await f.getByRole('tab',{name:'Account',exact:true}).waitFor();
   assert.equal(await f.getByRole('tab',{name:'Account',exact:true}).getAttribute('aria-selected'),'true');
   const tabBox=await f.getByRole('tab',{name:'Account',exact:true}).boundingBox();assert.ok(tabBox.x>=0&&tabBox.x+tabBox.width<=size.width+1);
   await f.getByRole('tab',{name:'Account',exact:true}).press('Home');assert.equal(await f.getByRole('tab',{name:'Rhythm',exact:true}).getAttribute('aria-selected'),'true');
   await f.locator('#proProjectSelect').selectOption(b.id);await until(async()=>(await prefs()).lastGrowId===b.id);
   assert.match(await f.locator('#proChatLink').getAttribute('href'),new RegExp(b.id));
   await f.locator('#proArrangeTabs').click();const dialog=f.locator('#proTabOrderDialog');await dialog.waitFor();const box=await dialog.boundingBox();assert.ok(box.y>=0&&box.y+box.height<=size.height+1);await dialog.press('Escape');
   assert.deepEqual(errors,[]);
  });
  await check('Signed-in composer stays reachable after keyboard-sized shrink at '+size.width+'px',async()=>{
   await page.goto(host+'/?projectId='+a.id);const f=page.frameLocator('#pip');await until(async()=>!(await f.locator('#pipConversationSelect').inputValue()===''));
   await page.setViewportSize({width:size.width,height:380});await f.locator('#pipInput').fill('My next grow question');await page.waitForTimeout(150);
   const send=await f.locator('#pipForm button[type=submit]').boundingBox(),input=await f.locator('#pipInput').boundingBox(),log=await f.locator('#pipLog').boundingBox();
   assert.ok(input.y>=0&&input.y+input.height<=381);assert.ok(send.y>=0&&send.y+send.height<=381);assert.ok(log.height>=48);
   await page.screenshot({path:path.join(out,'keyboard-'+size.width+'.png')});
   await f.locator('#pipPhoto').setInputFiles(path.resolve('assets/branding/pip-head-transparent.png'));
   await until(async()=>!(await f.locator('#pipPhotoName').innerText()).startsWith('Preparing'));
   const photoSend=await f.locator('#pipForm button[type=submit]').boundingBox();assert.ok(photoSend.y+photoSend.height<=381,'Send with a photo must fit the shortened viewport');
   const photoForm=await f.locator('#pipForm').boundingBox();assert.ok(photoForm.y+photoForm.height<=381,'The photo preview, removal and allowance must also fit');
   await page.screenshot({path:path.join(out,'keyboard-photo-'+size.width+'.png')});assert.deepEqual(errors,[]);
  });await context.close();page=null;
 }
 const context=await browser.newContext({viewport:{width:1000,height:800}});await context.route('**/*',localRoute);page=await context.newPage();
 await check('Fresh browser reopens the account return point; explicit grow links win',async()=>{
  await m.updateUserPreferences({userId:member.id,patch:{lastGrowId:b.id}});await open('pro=1',b.id);await open('pro=1&projectId='+a.id,a.id);await until(async()=>(await prefs()).lastGrowId===a.id);
 });
 await check('Rapid grow changes serialize return-point saves and leave the last selected grow remembered',async()=>{
  const f=await open('pro=1&projectId='+b.id,b.id);await until(async()=>(await prefs()).lastGrowId===b.id);
  let held;await page.route('**/api/pip/users/me/preferences',async route=>{if(route.request().method()==='PATCH'&&route.request().postDataJSON()?.patch?.lastGrowId===a.id){held=route;return}await route.continue()});
  await f.locator('#proProjectSelect').selectOption(a.id);await until(()=>!!held);
  await f.locator('#proProjectSelect').selectOption(b.id);await until(async()=>await f.locator('[data-pro-panel=seeds]').getAttribute('aria-busy')==='false');await held.continue();
  await page.unroute('**/api/pip/users/me/preferences');await until(async()=>(await prefs()).lastGrowId===b.id);
 });
 await check('Unavailable grow link asks the member to choose and cannot silently create or select another grow',async()=>{
  const before=await m.listProjects({userId:member.id});const f=await open('pro=1&projectId='+foreign.id);
  await f.locator('#proWorkspaceStatus').filter({hasText:'not available in this account'}).waitFor();assert.equal(await f.locator('#proProjectSelect').inputValue(),'');assert.equal(await f.locator('[data-pro-panel="seeds"]').evaluate(e=>e.inert),true);
  assert.equal((await m.listProjects({userId:member.id})).length,before.length);
  await f.locator('#proProjectSelect').selectOption(b.id);await until(async()=>(await prefs()).lastGrowId===b.id);
  let chats=0;page.on('request',req=>{if(new URL(req.url()).pathname==='/api/pip/chat')chats++});await page.goto(host+'/?projectId='+foreign.id);
  const chat=page.frameLocator('#pip');await chat.locator('#pipLog').filter({hasText:'no longer available in this account'}).waitFor();await chat.locator('#pipInput').fill('What are my crops?');await chat.locator('#pipForm button[type=submit]').click();await page.waitForTimeout(250);assert.equal(chats,0);assert.equal((await m.listProjects({userId:member.id})).length,before.length);
 });
 await check('Sign-in return keeps intended grow and notebook page without forwarding arbitrary redirects',async()=>{
  const f=await open('pro=1',b.id),child=page.frames().find(f=>f.url().startsWith(base));
  const url=await child.evaluate(()=>window.HydroPipNavigation.authReturnUrl(new URLSearchParams('pro=login&projectId=chosen&focus=seeds&return=https://unrelated.example&session=secret')));
  assert.equal(url,'https://www.hydropip.com/pip?pro=1&projectId=chosen&focus=seeds');
 });
 await check('Changing accounts clears the previous selection and restores only the new owner’s grow',async()=>{
  const child=page.frames().find(f=>f.url().startsWith(base));await page.evaluate(({base,session})=>document.querySelector('#pip').contentWindow.postMessage(session,base),{base,session:{type:'HYDROPIP_PIP_SESSION',member:other,subscription,sessionToken:otherToken}});
  const f=page.frameLocator('#pip');await until(async()=>await f.locator('#proProjectSelect').inputValue()===foreign.id);assert.equal(await f.locator('#proProjectSelect option').count(),1);assert.match(await f.locator('#proProjectSelect').innerText(),/^Private grow/);
 });
 await check('Verified sign-in navigates to the intended Pro page or build without losing its grow',async()=>{
  const returned=[];await page.route('https://www.hydropip.com/**',route=>{returned.push(route.request().url());return route.fulfill({contentType:'text/html',body:'<p>Verified local navigation destination</p>'})});
  await page.goto(host+'/?pro=login&projectId='+a.id+'&focus=seeds');await page.frameLocator('#pip').getByRole('link',{name:'Open your grow',exact:true}).click();await page.waitForURL('https://www.hydropip.com/pip?pro=1**');
  assert.equal(new URL(page.url()).searchParams.get('projectId'),a.id);assert.equal(new URL(page.url()).searchParams.get('focus'),'seeds');
  await page.goto(host+'/?pro=login&return=track');await page.frameLocator('#pip').getByRole('link',{name:'Continue your build',exact:true}).click();await page.waitForURL('https://www.hydropip.com/track-my-build');
  // A project-specific build uses the existing signed tool handoff on the app origin.
  await page.goto(host+'/?pro=login&return=track&projectId='+a.id);await page.frameLocator('#pip').getByRole('link',{name:'Continue your build',exact:true}).click();await page.waitForURL(base+'/parts-checklist.html?projectId='+a.id+'#**');
  assert.equal(new URL(page.url()).searchParams.get('projectId'),a.id);assert.equal(new URL(page.url()).hash,'','The checklist removes the session handoff from the address bar');
 });
  await context.close();page=null;
}catch(error){console.error(error.stack);process.exitCode=1}finally{await browser.close();server.closeAllConnections();hostServer.closeAllConnections();await Promise.all([new Promise(r=>server.close(r)),new Promise(r=>hostServer.close(r))]);await m.closeMemoryForTests();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({results,physicalPhoneTest:false,realModelTest:false},null,2));console.log('Artifacts: '+out)}
