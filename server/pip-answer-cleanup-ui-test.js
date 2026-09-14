import assert from 'node:assert/strict';import path from 'node:path';import {createRequire} from 'node:module';
export async function checkAnswerUi({app,issuePipSession,user,subscription,grow,out,check}) {
 const token=issuePipSession({member:user,subscription});
 app.get('/answer-preview',(_,res)=>res.send('<!doctype html><html><body style="margin:0"><iframe id="pip" src="/pip.html?projectId='+grow.id+'" style="width:100%;height:100vh;border:0"></iframe><script>const session='+JSON.stringify({type:'HYDROPIP_PIP_SESSION',sessionToken:token,member:user,subscription})+';window.addEventListener("message",e=>{if(e.source===pip.contentWindow&&e.data.type==="HYDROPIP_PIP_READY")pip.contentWindow.postMessage(session,location.origin)});</script></body></html>'));
 const server=await new Promise(r=>{const s=app.listen(4209,'127.0.0.1',()=>r(s))}),base='http://127.0.0.1:'+server.address().port;
 const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright');const browser=await chromium.launch();
 try {for(const width of [1365,390])await check('Browser '+width+'px shows and reloads the concise record explanation without an action card',async()=>{
  const context=await browser.newContext({viewport:{width,height:920}});await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());const page=await context.newPage(),errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(base+'/answer-preview');const frame=page.frameLocator('#pip');await frame.getByRole('combobox',{name:'Open conversation',exact:true}).waitFor();
  await frame.getByRole('textbox',{name:'Ask Pip',exact:true}).fill('Explain the saved due date and last completion for my next maintenance task.');await frame.getByRole('button',{name:'Ask Pip',exact:true}).click();
  await frame.locator('.conversation-dialog:visible, .answer-rating:visible').first().waitFor();const dialog=frame.getByRole('dialog',{name:'Choose the conversation',exact:true});if(await dialog.isVisible()){await dialog.locator('select').selectOption({label:'Maintenance & Cleaning'});await dialog.getByRole('button',{name:'Continue',exact:true}).click();}
  await frame.locator('.answer-rating').waitFor();const answer=await frame.locator('.msg.pip .bubble').last().innerText();assert.match(answer,/Last marked complete: Aug 9, 2026/);assert.doesNotMatch(answer,/dueAt|completionCount|\d{4}-\d{2}-\d{2}T|want me/i);assert.equal(await frame.getByRole('button',{name:/Apply|Confirm Calendar/}).count(),0);
  await page.screenshot({path:path.join(out,'answer-'+width+'.png')});await page.reload();await frame.locator('.msg.pip .bubble').filter({hasText:'Last marked complete: Aug 9, 2026'}).last().waitFor();assert.equal(await frame.locator('.msg.pip .bubble').last().innerText(),answer);assert.deepEqual(errors,[]);await context.close();
 });} finally {await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
}
