import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
export async function runCleanupUi({app,base,token,user,pro,grow,rhythm,out,check}) {
  const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright');
  const browser=await chromium.launch();
  const errors=[];
  app.get('/cleanup-pro',(_,res)=>res.send('<!doctype html><html><head><title>Pip cleanup preview — fictional grow</title></head><body style="margin:0"><iframe id="pip" title="Pip cleanup preview" src="/pip.html?pro=1&projectId='+grow.id+'" style="border:0;width:100%;height:100vh"></iframe><script>const data='+JSON.stringify({type:'HYDROPIP_PIP_SESSION',sessionToken:token,member:user,subscription:pro})+';window.addEventListener("message",e=>{if(e.source===pip.contentWindow&&e.data.type==="HYDROPIP_PIP_READY")pip.contentWindow.postMessage(data,location.origin)});pip.addEventListener("load",()=>pip.contentWindow.postMessage(data,location.origin));</script></body></html>'));
  app.get('/cleanup-chat',(_,res)=>res.send('<!doctype html><html><head><title>Pip cleanup answer preview — fictional grow</title></head><body style="margin:0"><iframe id="pip" title="Pip answer preview" src="/pip.html?projectId='+grow.id+'" style="border:0;width:100%;height:100vh"></iframe><script>const data='+JSON.stringify({type:'HYDROPIP_PIP_SESSION',sessionToken:token,member:user,subscription:pro})+';window.addEventListener("message",e=>{if(e.source===pip.contentWindow&&e.data.type==="HYDROPIP_PIP_READY")pip.contentWindow.postMessage(data,location.origin)});pip.addEventListener("load",()=>pip.contentWindow.postMessage(data,location.origin));</script></body></html>'));
  try {
    for(const [timezone,width,height] of [['America/New_York',1365,960],['America/New_York',390,844],['Pacific/Kiritimati',390,844]]) {
      await check('Real browser keeps the future sowing day in '+timezone+' at '+width+'px',async()=>{
        const context=await browser.newContext({viewport:{width,height},timezoneId:timezone});
        await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());
        // Fix only the overview's clock-dependent fixture. Membership, project
        // loading, rendering, and the rest of the workspace use the real app.
        await context.route('**/workspace?*',async route=>{
          const response=await route.fetch(),body=await response.json();
          body.rhythm={...body.rhythm,...rhythm};
          await route.fulfill({response,json:body});
        });
        const page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
        await page.goto(base+'/cleanup-pro');const frame=page.frameLocator('#pip');
        try { await frame.locator('#proWorkspaceStatus').filter({hasText:'ready.'}).waitFor(); }
        catch(error) { fs.writeFileSync(path.join(out,'browser-failure.txt'),await frame.locator('body').innerText()); throw error; }
        await frame.locator('[data-pro-page="rhythm"]').click();
        assert.match(await frame.locator('#proRhythmNext').innerText(),/Start next: Kale[\s\S]*Sep 11/);
        assert.doesNotMatch(await frame.locator('#proRhythmNext').innerText(),/Sep 9|Start next: Lettuce|Start next: Basil/);
        assert.match(await frame.locator('#proRhythmSow').innerText(),/Lettuce/);
        await frame.locator('#proRhythmNext').evaluate(element=>element.scrollIntoView({block:'center'}));
        const size=await frame.locator('#proRhythmNext').evaluate(element=>({scroll:element.scrollWidth,width:element.clientWidth}));assert.ok(size.scroll<=size.width+1);
        await page.screenshot({path:path.join(out,'coming-up-'+timezone.replaceAll('/','-')+'-'+width+'.png')});
        await context.close();
      });
    }
    await check('The direct saved-task answer works in chat, offers feedback, and survives reload',async()=>{
      const context=await browser.newContext({viewport:{width:390,height:844},timezoneId:'America/New_York'});
      await context.route('**/*',route=>new URL(route.request().url()).origin===base?route.continue():route.abort());
      const page=await context.newPage();page.on('pageerror',error=>errors.push(error.message));
      await page.goto(base+'/cleanup-chat');const frame=page.frameLocator('#pip');
      await frame.getByRole('combobox',{name:'Open conversation',exact:true}).waitFor();
      await frame.getByRole('textbox',{name:'Ask Pip',exact:true}).fill('What is my next saved maintenance check?');
      await frame.getByRole('button',{name:'Ask Pip',exact:true}).click();
      await frame.locator('.conversation-dialog:visible, .answer-rating:visible').first().waitFor();
      const conversationChoice=frame.getByRole('dialog',{name:'Choose the conversation',exact:true});
      if (await conversationChoice.isVisible()) {
        await conversationChoice.locator('select').selectOption({label:'Maintenance & Cleaning'});
        await conversationChoice.getByRole('button',{name:'Continue',exact:true}).click();
      }
      try { await frame.locator('.answer-rating').waitFor(); }
      catch(error) { fs.writeFileSync(path.join(out,'chat-failure.txt'),await frame.locator('body').innerText()); throw error; }
      const answer=frame.locator('.msg.pip .bubble').last();
      assert.match(await answer.innerText(),/Weekly flow check/);assert.doesNotMatch(await answer.innerText(),/dueDate|rhythmStage|lastCompletedAt/);
      await answer.evaluate(element=>element.scrollIntoView({block:'center'}));
      await page.screenshot({path:path.join(out,'saved-maintenance-answer-mobile.png')});
      await page.reload();await frame.getByRole('combobox',{name:'Open conversation',exact:true}).waitFor();
      await frame.locator('.msg.pip .bubble').filter({hasText:'Your next saved maintenance check'}).last().waitFor();
      await context.close();
    });
    assert.deepEqual(errors,[]);
  } finally { await browser.close(); }
}
