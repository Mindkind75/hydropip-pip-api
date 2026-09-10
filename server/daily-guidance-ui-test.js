import assert from 'node:assert/strict';import path from 'node:path';import {createRequire} from 'node:module';
export async function runDailyUiChecks({base,user,other,pro,token,grow,second,inventory,ok,api,check,out}){
 const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright');
 const browser=await chromium.launch(),context=await browser.newContext({viewport:{width:1365,height:960},timezoneId:'America/New_York'}),page=await context.newPage(),errors=[];
 await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());page.on('pageerror',e=>errors.push(e.message));
 const until=async fn=>{for(let i=0;i<180;i++){if(await fn())return;await new Promise(r=>setTimeout(r,50))}throw Error('Timed out waiting for expected UI state')};
 let frame;const ready=async()=>{await page.locator('#pip').waitFor();frame=page.frames().find(f=>f.url().includes('/pip.html'));await until(async()=>frame&&(await frame.locator('#proWorkspaceStatus').innerText()).includes('ready.'))};
 const savedSeeds=async()=> (await ok('/projects/'+grow.id+'/seeds')).seeds;
 const modal=()=>frame.locator('.grow-action-dialog');
 try{
  await check('Pro workspace loads with one combined read and opens the source of its next step',async()=>{
   const reads=[];page.on('request',r=>{if(r.method()==='GET'&&/\/projects\/[^/]+\/(workspace|reminders|readings|seeds|rhythm|seed-plan)(\?|$)/.test(r.url()))reads.push(r.url())});
   await page.goto(base+'/batch-four-pro');await ready();assert.equal(reads.length,1);assert.ok(reads[0].includes('/workspace?timezone=America%2FNew_York'));
   assert.match(await frame.locator('#proRhythmSummary').innerText(),/overdue/);assert.match(await frame.locator('#proRhythmCrops').innerText(),/12 seeds planted/);
   await frame.locator('#proRhythmSuggestion [data-rhythm-source]').click();await frame.locator('#proReminderList .rhythm-source-focus').waitFor();assert.equal(await frame.locator('[data-pro-panel="planner"]').getAttribute('class').then(c=>c.includes('active')),true);
  });
  await check('Focused planting form reviews grow, date and quantity; cancel leaves inventory and plantings untouched',async()=>{
   await frame.locator('button[data-pro-page="seeds"]').click();await frame.locator('[data-seed-id="'+inventory.id+'"] [data-seed-action="use"]').click();
   await modal().waitFor({state:'visible'});assert.equal(await modal().locator('[name=crop]').inputValue(),'Lettuce');
   assert.match(await modal().innerText(),/Owned seed packs stay/);await modal().locator('[name=seedsSown]').fill('8');await modal().locator('[name=notes]').fill('Window tray');
   await modal().getByRole('button',{name:'Review planting',exact:true}).click();await modal().locator('[data-action-confirm]').waitFor();assert.match(await modal().innerText(),/8 seeds planted/);assert.match(await modal().innerText(),new RegExp(grow.title));
   await modal().getByRole('button',{name:'Cancel',exact:true}).click();assert.equal((await savedSeeds()).filter(s=>s.plantingLocation!=='seed_vault').length,1);
  });
  await check('A dropped save response retries the same planting once; reload keeps the result in Rhythm',async()=>{
   await frame.locator('[data-seed-id="'+inventory.id+'"] [data-seed-action="use"]').click();await modal().locator('[name=seedsSown]').fill('8');await modal().locator('[name=notes]').fill('Window tray');await modal().getByRole('button',{name:'Review planting',exact:true}).click();await modal().locator('[data-action-confirm]').waitFor();
   let first=true;const calls=[];await page.route('**/action-reviews/*/apply',async route=>{calls.push(route.request().url());if(first){first=false;await route.fetch();return route.abort()}return route.continue()});
   await modal().locator('[data-action-confirm]').click();await until(async()=>!await modal().locator('[data-action-confirm]').isDisabled());assert.match(await modal().locator('[data-action-status]').innerText(),/fetch|network|failed/i);
   await modal().locator('[data-action-confirm]').click();await modal().locator('[data-open-rhythm]').waitFor();assert.equal(calls.length,2);assert.equal(calls[0],calls[1]);await page.unroute('**/action-reviews/*/apply');
   assert.equal((await savedSeeds()).filter(s=>s.plantingLocation!=='seed_vault').length,2);assert.equal((await savedSeeds()).find(s=>s.id===inventory.id).packsOnHand,6);
   await modal().locator('[data-open-rhythm]').click();await until(async()=>(await frame.locator('#proRhythmCrops').innerText()).includes('8 seeds planted'));
   await page.reload();await ready();assert.match(await frame.locator('#proRhythmCrops').innerText(),/8 seeds planted/);
  });
  await check('Recent planting links open the current crop source and grow switching clears an open review',async()=>{
   await frame.locator('#proRhythmRecent [data-rhythm-source="seeds"]').first().click();await modal().waitFor({state:'visible'});assert.equal(await modal().locator('[name=seedsSown]').inputValue(),'8');
   await modal().locator('[name=seedsSown]').fill('9');await modal().locator('[name=status]').selectOption('sprouted');await modal().getByRole('button',{name:'Review planting',exact:true}).click();await modal().locator('[data-action-confirm]').waitFor();assert.match(await modal().innerText(),/9 seeds planted/);
   await modal().locator('[data-action-confirm]').click();await modal().locator('[data-open-rhythm]').waitFor();await modal().locator('[data-action-close]').click();assert.equal((await savedSeeds()).filter(s=>s.plantingLocation!=='seed_vault').length,2);assert.equal((await savedSeeds()).find(s=>s.seedsSown===9).status,'sprouted');
   await frame.locator('button[data-pro-page="seeds"]').click();await frame.locator('[data-seed-id="'+inventory.id+'"] [data-seed-action="use"]').click();
   await frame.locator('#proProjectSelect').evaluate((select,id)=>{select.value=id;select.dispatchEvent(new Event('change',{bubbles:true}))},second.id);
   await modal().waitFor({state:'hidden'});await ready();assert.equal(await frame.locator('#proProjectSelect').inputValue(),second.id);
   assert.equal((await ok('/projects/'+second.id+'/seeds')).seeds.length,0);
  });
  await check('Mobile planting review fits the viewport and exposes every reviewed field',async()=>{
   await frame.locator('#proProjectSelect').selectOption(grow.id);await ready();await page.setViewportSize({width:390,height:844});await frame.locator('button[data-pro-page="seeds"]').click();await frame.locator('[data-seed-id="'+inventory.id+'"] [data-seed-action="use"]').click();
   await modal().locator('[name=seedsSown]').fill('4');await modal().getByRole('button',{name:'Review planting',exact:true}).click();await modal().locator('[data-action-confirm]').waitFor();
   const box=await modal().boundingBox();assert.ok(box.x>=0&&box.x+box.width<=390);assert.equal(await modal().evaluate(d=>d.scrollWidth<=d.clientWidth+1),true);
   await page.screenshot({path:path.join(out,'mobile-planting-review.png')});await modal().getByRole('button',{name:'Cancel',exact:true}).click();
   await frame.locator('button[data-pro-page="rhythm"]').click();await frame.locator('#proRhythmSuggestion').evaluate(el=>el.scrollIntoView({block:'start'}));await page.screenshot({path:path.join(out,'mobile-rhythm.png')});await page.setViewportSize({width:1365,height:960});
  });
  await check('Chat task suggestions use the review dialog; photo packets remain editable before the canonical review',async()=>{
   await page.goto(base+'/batch-four-chat');await until(async()=>{frame=page.frames().find(f=>f.url().includes('/pip.html'));return frame&&await frame.locator('#pipInput').isEnabled()&&await frame.locator('#pipConversationSelect option').count()>0});
   let action={type:'calendar_change',operation:'add',proposalId:'browser_task_'+Date.now(),reminders:[{title:'Browser reviewed task',dueDate:'2026-09-12'}]};
   await page.route('**/api/pip/chat',async route=>{const response=await route.fetch(),json=await response.json();await route.fulfill({response,json:{...json,answer:'Review this suggested change for your selected grow.',actions:[action]}})});
   const ask=async text=>{await frame.locator('#pipInput').fill(text);await frame.locator('#pipForm button[type=submit]').click()};
   await ask('How should I clean my pump?');await frame.getByRole('button',{name:'Review tasks',exact:true}).waitFor();
   await frame.getByRole('button',{name:'Review tasks',exact:true}).click();await modal().locator('[data-action-confirm]').waitFor();assert.match(await modal().innerText(),/Browser reviewed task/);
   await modal().locator('[data-action-confirm]').click();await modal().locator('[data-open-rhythm]').waitFor();await modal().locator('[data-action-close]').click();
   const tasks=(await ok('/projects/'+grow.id+'/reminders')).reminders;assert.equal(tasks.filter(t=>t.title==='Browser reviewed task').length,1);
   action={type:'seed_pack_inventory',fromPhoto:true,proposalId:'browser_photo_'+Date.now(),items:[{crop:'Basil',variety:'Genovese',packsOnHand:1,confidence:.65}]};
   await ask('What should I check on my pump next?');await until(async()=>await frame.locator('.conversation-dialog[open]').count()>0||await frame.locator('.seed-review-row').count()>0);
   if(await frame.locator('.conversation-dialog[open]').count()){await frame.locator('.conversation-dialog[open] select').selectOption({label:'Maintenance & Cleaning'});await frame.locator('.conversation-dialog[open]').getByRole('button',{name:'Continue',exact:true}).click()}
   await frame.locator('.seed-review-row').waitFor();await frame.locator('.seed-review-row [name=crop]').fill('Dill');
   await frame.getByRole('button',{name:'Review seed pack changes',exact:true}).click();await modal().locator('[data-action-confirm]').waitFor();assert.match(await modal().innerText(),/Dill/);assert.match(await modal().innerText(),/0 packs owned/);
   await ok('/projects/'+grow.id+'/seeds','POST',{seed:{crop:'Dill',variety:'Genovese',packsOnHand:3,plantingLocation:'seed_vault'}});
   await modal().locator('[data-action-confirm]').click();await modal().getByRole('button',{name:'Review current records',exact:true}).waitFor();assert.equal((await savedSeeds()).find(s=>s.crop==='Dill').packsOnHand,3);
   await modal().getByRole('button',{name:'Review current records',exact:true}).click();await modal().getByRole('button',{name:'Save reviewed changes',exact:true}).waitFor();assert.match(await modal().innerText(),/4 packs owned/);
   await modal().locator('[data-action-confirm]').click();await modal().locator('[data-open-rhythm]').waitFor();await modal().locator('[data-action-close]').click();
   await frame.getByRole('button',{name:'Review seed pack changes',exact:true}).click();await modal().locator('[data-open-rhythm]').waitFor();assert.equal((await savedSeeds()).find(s=>s.crop==='Dill').packsOnHand,4);await modal().locator('[data-action-close]').click();
  });
  await check('Non-beta answer feedback survives a request failure and can be retried',async()=>{
   const rating=frame.locator('.answer-rating').last();await rating.waitFor();let first=true;
   await page.route('**/api/pip/feedback',route=>{if(first){first=false;return route.abort()}return route.continue()});
   await rating.locator('[data-rating="helpful"]').click();await until(async()=>(await rating.innerText()).includes('Try again'));
   assert.equal(await rating.locator('[data-rating="helpful"]').isEnabled(),true);await rating.locator('[data-rating="helpful"]').click();await until(async()=>(await rating.innerText()).includes('Thanks'));await page.unroute('**/api/pip/feedback');
  });
  await check('A changed account closes the original account review without saving',async()=>{
   await frame.locator('.seed-review-row [name=packsOnHand]').fill('2');await frame.getByRole('button',{name:'Review seed pack changes',exact:true}).click();await modal().locator('[data-action-confirm]').waitFor();
   const {issuePipSession}=await import('./pipAuth.js');const session={type:'HYDROPIP_PIP_SESSION',sessionToken:issuePipSession({member:other,subscription:pro}),member:other,subscription:pro};
   await page.evaluate(data=>document.querySelector('#pip').contentWindow.postMessage(data,location.origin),session);await modal().waitFor({state:'hidden'});
  });
  assert.deepEqual(errors,[]);await check('Browser flows produced no uncaught JavaScript errors',async()=>assert.deepEqual(errors,[]));
 }catch(error){await page.screenshot({path:path.join(out,'failure.png')});throw error}finally{await browser.close()}
}
