// Browser integration regression checks. All pages and API responses are local fixtures.
// Requires Playwright with Chromium installed, or PLAYWRIGHT_MODULE pointing to an existing installation.
const {chromium,devices}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const resultsDir=process.env.PIP_CHAT_QA_OUTPUT||require('node:os').tmpdir();
const origin='http://127.0.0.1:4175';
const answer='Your grow plan stays here. Start with your available space and the crops you want to harvest.\n\n'+('Keep the first grow manageable and record what works. '.repeat(12));
const session={type:'HYDROPIP_PIP_SESSION',sessionToken:'local-fixture-token',member:{id:'fixture-member',name:'Test grower'},subscription:{active:false,plan:'free_member'}};
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
(async()=>{
 const browser=await chromium.launch({headless:true});
 const results=[];
 async function fixture(options={}){
  const context=await browser.newContext({...devices['iPhone 13']});
  await context.addInitScript(()=>{window.fixtureNavigations=[];window.open=(url,target)=>{window.fixtureNavigations.push({url,target});return null}});
  const state={holdHistory:options.holdHistory,historyRoutes:[],chatRequests:[],holdChat:options.holdChat,chatRoutes:[],errors:[],projectLookups:0,projectCreates:0};
  async function json(route,data){await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(data)})}
  await context.route('**/*',async route=>{
   const url=new URL(route.request().url());
   if(url.origin!==origin){await route.abort();return}
   if(url.pathname.startsWith('/api/')){
    if(url.pathname.endsWith('/health'))return json(route,{ai:true});
    if(url.pathname.endsWith('/preferences'))return json(route,{preferences:{}});
    if(url.pathname.endsWith('/photo-allowance'))return json(route,{photoAllowance:{remaining:5}});
    if(url.pathname==='/api/pip/projects'){
     const project={id:'p1',type:'hydropip_build',title:'My HydroPip Build',profile:{}};
     if(route.request().method()==='POST'){state.projectCreates++;return json(route,{project})}
     state.projectLookups++;
     if(options.newProject){await delay(120);return json(route,{projects:[]})}
     return json(route,{projects:[project]});
    }
    if(url.pathname.endsWith('/conversations'))return json(route,{conversations:[{id:'c1',title:'HydroPip Build'},{id:'c2',title:'Crop Planning & Rotation'}]});
    if(url.pathname.endsWith('/messages')){
     if(state.holdHistory&&url.searchParams.get('conversationId')==='c1'){state.historyRoutes.push(route);return}
     return json(route,{messages:url.searchParams.get('conversationId')==='c2'?[{role:'assistant',content:'Saved crop conversation in the other tab.'}]:(options.savedMessages||[])});
    }
    if(url.pathname==='/api/pip/chat'){
     state.chatRequests.push(route.request().postDataJSON());
     if(state.holdChat){state.chatRoutes.push(route);return}
     return json(route,{answer});
    }
    return json(route,{});
   }
   const filename=path.resolve(root,'.'+decodeURIComponent(url.pathname));
   if(!filename.startsWith(root+path.sep)||!fs.existsSync(filename)){await route.fulfill({status:404,body:''});return}
   const ext=path.extname(filename);
   await route.fulfill({status:200,contentType:ext==='.html'?'text/html':ext==='.js'?'application/javascript':ext==='.png'?'image/png':ext==='.webp'?'image/webp':'application/octet-stream',body:fs.readFileSync(filename)});
  });
  async function open(){const page=await context.newPage();page.on('pageerror',e=>state.errors.push(e.message));await page.goto(origin+(options.path||'/pip.html?start=grow'));return page}
  const page=await open();
  async function start(target=page){await target.evaluate(data=>window.postMessage(data,location.origin),options.session||session)}
  async function releaseHistory(messages=[]){state.holdHistory=false;for(const route of state.historyRoutes.splice(0))await json(route,{messages});await delay(100)}
  async function releaseChat(){state.holdChat=false;for(const route of state.chatRoutes.splice(0))await json(route,{answer});await delay(100)}
  async function waitFor(predicate){for(let i=0;i<100&&!predicate();i++)await delay(20);if(!predicate())throw Error('Fixture request did not arrive')}
  async function send(){await page.locator('#pipInput').fill('Help me choose the first crops for my outdoor grow.');await page.locator('#pipForm').evaluate(form=>form.requestSubmit());await waitFor(()=>state.chatRequests.length>0)}
  return {context,page,state,start,open,releaseHistory,releaseChat,waitFor,send};
 }
 try{
  {
   const f=await fixture();
   const before=await f.page.locator('#pipLog .msg .bubble').first().innerText();
   await f.start();await delay(200);
   const after=await f.page.locator('#pipLog .msg .bubble').first().innerText();
   results.push({name:'Plan My Grow has a stable, relevant opening',pass:before.includes('What would you like to harvest?')&&after===before&&await f.page.locator('.pip-starters button').count()===3,before:before.slice(0,150),after:after.slice(0,150)});
   await f.context.close();
  }
  for(const holdChat of [false,true]){
   const f=await fixture({holdHistory:true,holdChat});
   await f.start();await f.waitFor(()=>f.state.historyRoutes.length>0);
   await f.send();if(!holdChat)await f.page.getByText(answer,{exact:true}).waitFor();
   await f.releaseHistory();if(holdChat)await f.releaseChat();
   const text=await f.page.locator('#pipLog').innerText();
   results.push({name:holdChat?'Pending reply survives delayed history':'Completed reply survives delayed history',pass:text.includes(answer)&&text.includes('Help me choose'),errors:f.state.errors});
   await f.context.close();
  }
  {
   const f=await fixture();await f.start();await delay(200);
   await f.send();await f.page.getByText(answer,{exact:true}).waitFor();
   const other=await f.open();await f.start(other);await delay(200);
   await other.locator('#pipConversationSelect').selectOption('c2');await delay(100);
   await f.start();await delay(200);
   results.push({name:'Another tab cannot switch this conversation during session refresh',pass:await f.page.locator('#pipConversationSelect').inputValue()==='c1'&&(await f.page.locator('#pipLog').innerText()).includes(answer)});
   await f.context.close();
  }
  {
   const f=await fixture({holdHistory:true});await f.start();await f.waitFor(()=>f.state.historyRoutes.length>0);
   await f.page.locator('#pipConversationSelect').selectOption('c2');await delay(100);
   await f.releaseHistory([{role:'assistant',content:'Stale first conversation.'}]);
   const text=await f.page.locator('#pipLog').innerText();
   results.push({name:'Late history cannot overwrite an explicitly selected conversation',pass:text.includes('Saved crop conversation')&&!text.includes('Stale first conversation')});
   await f.context.close();
  }
  {
   const f=await fixture({newProject:true});await f.start();await f.waitFor(()=>f.state.projectLookups>0);
   await f.send();await f.page.getByText(answer,{exact:true}).waitFor();
   results.push({name:'First question and account initialization create one build project',pass:f.state.projectCreates===1&&f.state.projectLookups===1&&f.state.chatRequests[0].projectId==='p1',projectCreates:f.state.projectCreates});
   await f.context.close();
  }
  {
   const f=await fixture();await f.send();await f.page.getByText(answer,{exact:true}).waitFor();
   await f.start();await delay(200);
   results.push({name:'A visitor reply survives late account initialization',pass:(await f.page.locator('#pipLog').innerText()).includes(answer)});
   await f.context.close();
  }
  {
   const f=await fixture({savedMessages:[{role:'user',content:'Previously saved question.'},{role:'assistant',content:'Previously saved answer.'}]});
   await f.start();await delay(200);
   const text=await f.page.locator('#pipLog').innerText();
   results.push({name:'Existing saved conversations still restore',pass:text.includes('Previously saved question.')&&text.includes('Previously saved answer.')});
   await f.context.close();
  }
  for(const [name,query,pro,expected] of [
   ['Calculator signup returns to the calculator','pro=signup&tool=nutrients',false,'/nutrient-calculator.html#session='],
   ['Calculator login returns to the calculator','pro=login&tool=nutrients',false,'/nutrient-calculator.html#session='],
   ['Pro calculator login preserves the requested tool','pro=login&tool=nutrients',true,'/nutrient-calculator.html#session='],
   ['Checklist login returns to the checklist','pro=login&return=track',false,'https://www.hydropip.com/track-my-build'],
   ['Checklist signup returns to the checklist','pro=signup&return=track',false,'https://www.hydropip.com/track-my-build'],
   ['Returning Pro members open their workspace','pro=login',true,'https://www.hydropip.com/pip?pro=1'],
   ['Returning free members receive free next steps','pro=login',false,null]
  ]){
   const f=await fixture({path:'/pip.html?'+query,session:{...session,subscription:{active:pro,plan:pro?'pro':'free_member'}}});
   await f.start();await delay(250);
   const nav=await f.page.evaluate(()=>window.fixtureNavigations);
   results.push({name,pass:expected?nav.some(n=>n.url.startsWith(expected)):nav.length===0&&await f.page.locator('#pipAuthTitle').isVisible()});
   await f.context.close();
  }
  console.log(JSON.stringify(results,null,2));
  fs.writeFileSync(path.join(resultsDir,'pip-chat-regression-results.json'),JSON.stringify(results,null,2));
  if(results.some(r=>!r.pass))process.exitCode=1;
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
