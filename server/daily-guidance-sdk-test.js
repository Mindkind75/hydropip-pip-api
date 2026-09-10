import assert from 'node:assert/strict';import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import http from 'node:http';import {randomUUID} from 'node:crypto';
const out=process.env.PIP_BATCH_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'pip-guidance-sdk-'));fs.mkdirSync(out,{recursive:true});
const requests=[];let useTool=false;
const finalText=Array(28).fill('Check the visible roots.').join(' ')+' Measure pH before choosing a corrective dose.';
const provider=http.createServer(async(req,res)=>{let raw='';for await(const chunk of req)raw+=chunk;const body=JSON.parse(raw);requests.push(body);
 const output=useTool&&!body.input.some(i=>i.type==='function_call_output')?[{type:'function_call',id:'fc_synthetic',call_id:'call_synthetic',name:'get_build_step',arguments:'{"stepId":"calibrate"}'}]:[{type:'message',id:'msg_synthetic',role:'assistant',status:'completed',content:[{type:'output_text',text:finalText,annotations:[]}]}];
 res.setHeader('Content-Type','application/json');res.end(JSON.stringify({id:'resp_'+requests.length,object:'response',created_at:Math.floor(Date.now()/1000),status:'completed',model:'gpt-5-mini',output,usage:{input_tokens:100,output_tokens:120,total_tokens:220}}));
});
await new Promise(r=>provider.listen(0,'127.0.0.1',r));
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:'',OPENAI_API_KEY:'synthetic-loopback-only',OPENAI_BASE_URL:'http://127.0.0.1:'+provider.address().port+'/v1',PIP_AI_DISABLED:'false',PIP_MEMORY_FILE:path.join(out,'memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');m.resetMemoryForTests();const {askPip}=await import('./pipAgent.js');
const user={id:'prompt-'+randomUUID()},subscription={active:true,plan:'pip_pro'},project=(await m.createProject({user,subscription,type:'hydropip_build',title:'Prompt test',systemProfile:{reservoirGallons:37,experienceMode:'detailed',growZone:'9b'}})).project;
await m.createProjectSeed({userId:user.id,projectId:project.id,subscription,seed:{crop:'Lettuce',seedsSown:12,plantingLocation:'hydropip_tower',sowDate:'2026-09-10',notes:'Synthetic planting note'}});
const payload={user,subscription,projectId:project.id,message:'What can you see in this plant photo?',image:{mimeType:'image/png',dataUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6B3sAAAAASUVORK5CYII='}};
const results=[];try{
 let answer=await askPip(payload);assert.equal(requests.length,1);assert.ok(answer.answer.endsWith('Measure pH before choosing a corrective dose.'));
 assert.match(requests[0].instructions,/PHOTO EVIDENCE/);assert.match(requests[0].instructions,/prefers detailed/);assert.match(requests[0].instructions,/at most one missing question/);assert.doesNotMatch(requests[0].instructions,/hard cap of 90/);assert.ok(JSON.stringify(requests[0].input).includes('Synthetic planting note'));assert.ok(JSON.stringify(requests[0].input).includes('seedsSown'));
 results.push({name:'Real SDK sends photo evidence, detail preference and saved planting context; complete response survives processing',pass:true});
 useTool=true;requests.length=0;answer=await askPip(payload);assert.equal(requests.length,2);assert.ok(requests[1].input.some(i=>i.type==='function_call_output'));assert.match(requests[1].instructions,/PHOTO EVIDENCE/);assert.match(requests[1].instructions,/prefers detailed/);assert.ok(answer.answer.endsWith('Measure pH before choosing a corrective dose.'));
 results.push({name:'Tool-result follow-up keeps the same guidance and preserves the final instruction',pass:true});
 console.log(results.map(r=>'PASS '+r.name).join('\n'));
}catch(error){console.error(error.stack);process.exitCode=1;results.push({name:'SDK guidance checks',pass:false,error:error.stack})}finally{provider.closeAllConnections();await new Promise(r=>provider.close(r));await m.closeMemoryForTests();fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({realModelEvaluation:false,provider:'synthetic loopback via real OpenAI SDK',results},null,2))}

