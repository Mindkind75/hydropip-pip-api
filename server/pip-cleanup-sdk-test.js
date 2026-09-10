import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import http from 'node:http';
const out=process.env.PIP_BATCH_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'pip-cleanup-sdk-'));fs.mkdirSync(out,{recursive:true});
let scenario='normal';const requests=[];
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const textOutput=text=>[{type:'message',id:'msg_synthetic',role:'assistant',status:'completed',content:[{type:'output_text',text,annotations:[]}]}];
const provider=http.createServer(async(req,res)=>{
 let raw='';for await(const chunk of req)raw+=chunk;const body=JSON.parse(raw);requests.push(body);
 const followup=body.input.some(item=>item.type==='function_call_output'),repair=body.instructions.includes('RELEVANCE FAILURE');
 const input=JSON.stringify(body.input),parallel=input.includes('parallel slow')?'slow':input.includes('parallel fast')?'fast':null;
 await pause(parallel==='slow'?100:parallel==='fast'?25:followup?80:repair?70:60);
 res.setHeader('Content-Type','application/json');
 if(scenario==='failure'){res.statusCode=400;res.end(JSON.stringify({error:{message:'Synthetic provider failure',type:'invalid_request_error'}}));return}
 let output=textOutput('The visible roots need a closer check. Compare root color and smell, and inspect water flow before changing the nutrient mix.');
 if(scenario==='tools'&&!followup)output=[{type:'function_call',id:'fc_synthetic',call_id:'call_synthetic',name:'get_build_step',arguments:'{"stepId":"calibrate"}'}];
 if(scenario==='repair')output=textOutput(repair?'Compare how the dill leans with the position of the lamp. Turn the pot and watch for new growth before changing the feed.':'Tell me the step or part you are stuck on.');
 res.end(JSON.stringify({id:'resp_'+requests.length,object:'response',created_at:Math.floor(Date.now()/1000),status:'completed',model:'gpt-5-mini',output,usage:{input_tokens:100,output_tokens:40,input_tokens_details:{cached_tokens:60},output_tokens_details:{reasoning_tokens:12}}}));
});
await new Promise(resolve=>provider.listen(0,'127.0.0.1',resolve));
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'synthetic-loopback-only',OPENAI_BASE_URL:'http://127.0.0.1:'+provider.address().port+'/v1',PIP_AI_DISABLED:'false',PIP_MEMORY_FILE:path.join(out,'memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();const {askPip}=await import('./pipAgent.js');
const user={id:'cleanup-sdk-fictional'},subscription={active:true,plan:'pip_pro'},grow=(await m.createProject({user,subscription,type:'hydropip_build',title:'Synthetic prompt grow',systemProfile:{growZone:'9b',experienceMode:'guided'}})).project;
await m.createProjectReminder({userId:user.id,projectId:grow.id,subscription,reminder:{title:'Synthetic flow check',category:'maintenance',timezone:'America/New_York',dueDate:'2026-09-10'}});
const image={mimeType:'image/png',dataUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6B3sAAAAASUVORK5CYII='};
const payload={user,subscription,projectId:grow.id,message:'What can you see in this plant photo?',image};
const results=[];
async function check(name,work){requests.length=0;try{await work();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});throw error}}
try{
 await check('A saved maintenance lookup skips the provider even when AI is enabled',async()=>{
  const r=await askPip({...payload,image:undefined,message:'What is my next saved maintenance check?'});assert.equal(r.mode,'saved_schedule_recall');assert.equal(requests.length,0);assert.deepEqual(r.performance.providerCalls,[]);assert.match(r.answer,/Synthetic flow check/);assert.doesNotMatch(r.answer,/\*\*|dueDate|lastCompletedAt/);
 });
 await check('Real SDK records provider wait and token counters separately from quota and memory',async()=>{
  const r=await askPip({...payload,beforeAiCall:()=>pause(30)});assert.equal(requests.length,1);assert.ok(r.performance.modelMs>=55);assert.ok(r.performance.quotaMs>=25);assert.equal(r.performance.followupMs,0);assert.equal(r.performance.repairMs,0);assert.equal(r.performance.providerCalls.length,1);assert.equal(r.performance.providerCalls[0].cachedInputTokens,60);assert.equal(r.performance.providerCalls[0].reasoningTokens,12);assert.equal(r.aiUsage.inputTokens,100);assert.equal(r.aiUsage.outputTokens,40);
  const sent=requests[0];assert.match(sent.instructions,/Translate internal field names/);assert.match(sent.instructions,/Do not ask for a time zone already provided/);assert.match(sent.instructions,/not proof of the grower/);assert.match(sent.instructions,/grower prefers guidance/);assert.match(sent.instructions,/Schedule time zone: America\/New_York/);assert.match(sent.instructions,/PHOTO EVIDENCE/);
  assert.equal(sent.model,'gpt-5-mini');assert.equal(sent.store,false);fs.writeFileSync(path.join(out,'normal-timing.json'),JSON.stringify(r.performance,null,2));
 });
 await check('Tool follow-up retains readable saved-fact guidance and is measured as its own provider call',async()=>{
  scenario='tools';const r=await askPip(payload);assert.equal(requests.length,2);assert.ok(r.performance.followupMs>=75);assert.equal(r.performance.providerCalls.length,2);assert.deepEqual(r.performance.providerCalls.map(call=>call.phase),['model','followup']);assert.match(requests[1].instructions,/Translate internal field names/);assert.match(requests[1].instructions,/Do not ask for a time zone already provided/);assert.equal(r.aiUsage.inputTokens,200);
  fs.writeFileSync(path.join(out,'tool-timing.json'),JSON.stringify(r.performance,null,2));
 });
 await check('A genuinely irrelevant answer still gets a repair, with its extra wait and usage visible',async()=>{
  scenario='repair';const r=await askPip({...payload,image:undefined,message:'My hydroponic dill leans toward one lamp even though its roots look clean. What observations should I compare?'});assert.equal(requests.length,2);assert.ok(r.performance.repairMs>=65);assert.deepEqual(r.performance.providerCalls.map(call=>call.phase),['model','repair']);assert.match(requests[1].instructions,/Translate internal field names/);assert.match(r.answer,/dill|lamp/);assert.equal(r.aiUsage.inputTokens,200);
  fs.writeFileSync(path.join(out,'repair-timing.json'),JSON.stringify(r.performance,null,2));
 });
 await check('Provider failure keeps the existing fallback and records a failed request without its error body',async()=>{
  scenario='failure';const r=await askPip(payload);assert.equal(r.mode,'ai_error_fallback');assert.equal(r.performance.providerCalls.length,1);assert.equal(r.performance.providerCalls[0].status,'failed');assert.ok(r.performance.modelMs>=55);assert.doesNotMatch(JSON.stringify(r.performance),/Synthetic provider failure|synthetic-loopback|plant photo/);
 });
 await check('Concurrent answers keep separate timing and provider records',async()=>{
  scenario='normal';const [slow,fast]=await Promise.all([askPip({...payload,message:'Inspect this plant photo, parallel slow.'}),askPip({...payload,message:'Inspect this plant photo, parallel fast.'})]);assert.equal(slow.performance.providerCalls.length,1);assert.equal(fast.performance.providerCalls.length,1);assert.ok(slow.performance.modelMs>fast.performance.modelMs);assert.ok(slow.performance.modelMs>=95);assert.ok(fast.performance.modelMs>=20);
 });
}catch(error){console.error(error.stack);process.exitCode=1}
finally{provider.closeAllConnections();await new Promise(resolve=>provider.close(resolve));await m.closeMemoryForTests();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({realModelEvaluation:false,provider:'controlled loopback using the real OpenAI SDK',results},null,2))}
