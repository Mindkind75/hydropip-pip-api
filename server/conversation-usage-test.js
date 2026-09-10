import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import {randomUUID} from 'node:crypto';

// Synthetic provider on loopback: exercise real SDK and accounting without paid calls.
const out=process.env.PIP_BATCH_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'conversation-usage-'));
fs.mkdirSync(out,{recursive:true});
let calls=0,fail=false;
const provider=http.createServer(async(req,res)=>{
  for await(const _ of req){}calls++;await new Promise(resolve=>setTimeout(resolve,120));
  res.setHeader('Content-Type','application/json');
  if(fail){res.statusCode=400;res.end(JSON.stringify({error:{message:'Synthetic unavailable analysis',type:'invalid_request_error'}}));return}
  res.end(JSON.stringify({id:'resp_synthetic_'+calls,object:'response',created_at:Math.floor(Date.now()/1000),status:'completed',model:'gpt-5-mini',output:[{type:'message',id:'msg_synthetic',role:'assistant',status:'completed',content:[{type:'output_text',text:'Unplug the pump before cleaning it. Remove visible debris from the intake, rinse the housing, and check the impeller before restarting.',annotations:[]}]}],usage:{input_tokens:120,output_tokens:40,total_tokens:160}}));
});
await new Promise(r=>provider.listen(0,'127.0.0.1',r));
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',PIP_BRIDGE_SECRET:'usage-local-only',PIP_MEMORY_FILE:path.join(out,'usage.memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'usage-training.md'),DOTENV_CONFIG_PATH:path.join(out,'no.env'),OPENAI_API_KEY:'synthetic-loopback-only',OPENAI_BASE_URL:'http://127.0.0.1:'+provider.address().port+'/v1',PIP_AI_DISABLED:'false'});
const m=await import('./pipMemory.js');m.resetMemoryForTests();
const {app}=await import('./index.js'),{issuePipSession}=await import('./pipAuth.js');
const server=await new Promise(r=>{const s=app.listen(0,'127.0.0.1',()=>r(s))});
const user={id:'usage-'+randomUUID()},subscription={active:true,plan:'pip_pro'},token=issuePipSession({member:user,subscription});
const base='http://127.0.0.1:'+server.address().port;
const results=[];async function check(name,run){await run();results.push({name,pass:true});console.log('PASS '+name)}
const api=async(url,body)=>{const r=await fetch(base+url,{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(body)});return{status:r.status,data:await r.json()}};
const usage=()=>m.getDailyAiUsageSummary({userId:user.id,tier:'pip_pro'});
try{
 const project=(await m.createProject({user,subscription,type:'hydropip_build',title:'Usage test'})).project;
 await m.seedProjectConversationDefaults({userId:user.id,projectId:project.id,subscription});
 const threads=await m.listProjectConversations({userId:user.id,projectId:project.id}),source=threads.find(x=>x.summary==='starter:seeds_germination');
 const payload={projectId:project.id,conversationId:source.id,exchangeId:'x_'+randomUUID(),message:'How should I clean this pump?',image:{mimeType:'image/png',dataUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6B3sAAAAASUVORK5CYII='}};
 let reply,charged;
 await check('Choosing a photo destination makes no provider request or usage charge',async()=>{
  const r=await api('/api/pip/chat',{...payload,message:'Explain nutrients and harvesting in this photo'});assert.equal(r.status,409);assert.equal(calls,0);assert.equal((await usage()).usedToday,0);
 });
 await check('Concurrent photo submissions produce one answer and one accounting event',async()=>{
  const responses=await Promise.all([api('/api/pip/chat',payload),api('/api/pip/chat',payload)]);reply=responses.find(x=>x.status===200)?.data;assert.ok(reply,JSON.stringify(responses));assert.equal(responses.filter(x=>x.status===202).length,1);assert.equal(calls,1);charged=await usage();assert.ok(charged.usedToday>0);assert.equal(charged.eventCountToday,1);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:reply.exchange.conversationId})).length,2);
 });
 await check('Photo retry and routing Undo do not call the model or charge again',async()=>{
  await api('/api/pip/projects/'+project.id+'/exchanges/'+payload.exchangeId+'/move',{undo:true,revision:0,mutationId:'x_'+randomUUID()});const retried=await api('/api/pip/chat',payload);assert.equal(retried.status,200);assert.equal(retried.data.exchange.conversationId,source.id);assert.equal(calls,1);assert.equal((await usage()).usedToday,charged.usedToday);assert.equal((await usage()).eventCountToday,1);
 });
 await check('Provider failure refunds its reservation and retry recovers the same fallback',async()=>{
  fail=true;const failedPayload={...payload,exchangeId:'x_'+randomUUID()};const first=await api('/api/pip/chat',failedPayload);assert.equal(first.status,200);assert.equal(first.data.mode,'ai_error_fallback');const second=await api('/api/pip/chat',failedPayload);assert.deepEqual(second.data,first.data);assert.equal(calls,2);assert.equal((await usage()).usedToday,charged.usedToday);
 });
}finally{fs.writeFileSync(path.join(out,'conversation-usage-results.json'),JSON.stringify(results,null,2));server.closeAllConnections();provider.closeAllConnections();await Promise.all([new Promise(r=>server.close(r)),new Promise(r=>provider.close(r))])}
