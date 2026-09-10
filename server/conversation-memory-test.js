import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {randomUUID} from 'node:crypto';
const postgres=process.argv.includes('--postgres'),out=process.env.PIP_BATCH_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'conversation-memory-'));fs.mkdirSync(out,{recursive:true});
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:postgres?'postgres://piptest@127.0.0.1:55439/pip_batch_candidate':'',PIP_DATABASE_SSL:'false',PIP_MEMORY_FILE:path.join(out,'conversation.memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_BRIDGE_SECRET:'conversation-tests-only',DOTENV_CONFIG_PATH:path.join(out,'missing.env')});
const m=await import('./pipMemory.js');if(!postgres)m.resetMemoryForTests();const c=await import('./conversationMemory.js');const {app}=await import('./index.js');const {issuePipSession}=await import('./pipAuth.js');
const server=await new Promise(resolve=>{const s=app.listen(0,'127.0.0.1',()=>resolve(s))}),base='http://127.0.0.1:'+server.address().port;
const user={id:'routing-test-'+randomUUID()},other={id:'other-'+randomUUID()},pro={active:true,plan:'pip_pro'},token=issuePipSession({member:user,subscription:pro});
const results=[];async function check(name,fn){try{await fn();results.push({name,pass:true});console.log('PASS '+name)}catch(error){results.push({name,pass:false,error:error.stack});console.error('FAIL '+name+' '+error.stack);throw error}}
async function api(url,method='GET',body){const response=await fetch(base+url,{method,headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});return{status:response.status,data:await response.json()}}
const id=()=> 'x_'+randomUUID();let project,otherGrow,threads,seed,maintenance,exchangeId,payload;
try{
 await check('Storage migration preserves restored legacy records',async()=>{
  const health=await m.getMemoryHealth();assert.equal(health.mode,postgres?'postgres':'file');if(postgres){const s=await m.conversationStorage();const rows=await s.pool.query("select p.system_profile,m.content from pip_projects p join pip_messages m on m.project_id=p.id where p.user_id='restored-fixture-owner'");assert.equal(rows.rows[0].system_profile.growZone,'9b');assert.match(rows.rows[0].content,/arugula/);assert.equal((await s.pool.query("select count(*)::int n from pip_schema_migrations where version='001-conversation-routing'")).rows[0].n,1)}
 });
 await check('Create current grow, other grow and owned topic threads',async()=>{
  project=(await m.createProject({user,subscription:pro,type:'hydropip_build',title:'Routing Alpha',systemProfile:{growZone:'9b',crops:['lettuce'],onboardingComplete:true}})).project;
  otherGrow=(await m.createProject({user,subscription:pro,type:'hydropip_build',title:'Greenhouse Beta',systemProfile:{crops:['tomatoes']}})).project;
  await m.seedProjectConversationDefaults({userId:user.id,projectId:project.id,subscription:pro});threads=await m.listProjectConversations({userId:user.id,projectId:project.id});seed=threads.find(x=>x.summary==='starter:seeds_germination');maintenance=threads.find(x=>x.summary==='starter:maintenance');
 });
 await check('Routing API returns matching current-grow destination without writing messages',async()=>{
  const before=await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:seed.id});const reply=await api('/api/pip/projects/'+project.id+'/conversations/route','POST',{conversationId:seed.id,message:'How should I clean my pump?'});assert.equal(reply.status,200);assert.equal(reply.data.conversationId,maintenance.id);assert.deepEqual(await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:seed.id}),before);
 });
 await check('Question and answer route together; identical retry returns same saved answer',async()=>{
  exchangeId=id();payload={projectId:project.id,conversationId:seed.id,exchangeId,message:'How should I clean my pump?'};const first=await api('/api/pip/chat','POST',payload);assert.equal(first.status,200,JSON.stringify(first));assert.equal(first.data.exchange.conversationId,maintenance.id);const second=await api('/api/pip/chat','POST',payload);assert.equal(second.status,200);assert.deepEqual(second.data,first.data);
  const messages=await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:maintenance.id});assert.equal(messages.filter(x=>x.exchangeId===exchangeId).length,2);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:seed.id})).length,0);
 });
 await check('Reusing an exchange ID for another question is rejected',async()=>assert.equal((await api('/api/pip/chat','POST',{...payload,message:'A changed question'})).status,409));
 await check('Undo moves the pair once; cached retry follows the corrected filing',async()=>{
  const args={userId:user.id,projectId:project.id,exchangeId,revision:0,mutationId:id(),undo:true,subscription:pro};const moved=await c.moveExchange(args);assert.equal(moved.exchange.conversationId,seed.id);assert.deepEqual((await c.moveExchange(args)).exchange,moved.exchange);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:seed.id})).length,2);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:maintenance.id})).length,0);
  const cached=await api('/api/pip/chat','POST',payload);assert.equal(cached.data.exchange.conversationId,seed.id);assert.equal(cached.data.projectMemory.conversationId,seed.id);
 });
 await check('Another member or grow cannot receive or read an exchange',async()=>{
  const foreign=(await m.createProject({user:other,subscription:pro,type:'hydropip_build',title:'Other owner'})).project;const foreignThread=(await m.listProjectConversations({userId:other.id,projectId:foreign.id}))[0];
  await assert.rejects(c.moveExchange({userId:user.id,projectId:project.id,exchangeId,destinationId:foreignThread.id,revision:1,mutationId:id(),subscription:pro}),/not found/);
  await assert.rejects(c.getChatExchange({userId:other.id,projectId:project.id,exchangeId}),/not found/);await assert.rejects(c.getChatExchange({userId:user.id,projectId:otherGrow.id,exchangeId}),/not found/);
 });
 await check('Ambiguity and another named grow ask before persistence or usage',async()=>{
  for(const question of ['Explain nutrients and harvesting','How should I clean my pump in Greenhouse Beta?']){const r=await api('/api/pip/chat','POST',{...payload,exchangeId:id(),message:question});assert.equal(r.status,409);assert.ok(r.data.route.decision.startsWith('ask'))}
  assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:seed.id})).length,2);
 });
 await check('Explicit keep-here choice is honored and does not split a follow-up',async()=>{
  const r=await api('/api/pip/chat','POST',{...payload,exchangeId:id(),routeChoice:{conversationId:seed.id}});assert.equal(r.status,200);assert.equal(r.data.exchange.conversationId,seed.id);
  const follow=await c.routeConversation({userId:user.id,projectId:project.id,conversationId:seed.id,message:'How much?',subscription:pro});assert.equal(follow.decision,'keep');assert.equal(follow.conversationId,seed.id);const namedFollow=await c.routeConversation({userId:user.id,projectId:project.id,conversationId:seed.id,message:'How often should I clean it?',subscription:pro});assert.equal(namedFollow.decision,'keep');assert.equal(namedFollow.conversationId,seed.id);
 });
 await check('Simultaneous first submissions reuse one new topic thread',async()=>{
  const claims=await Promise.all([1,2].map(()=>c.claimChatExchange({userId:user.id,projectId:project.id,conversationId:seed.id,exchangeId:id(),content:'How much space do I need?',subscription:pro})));assert.equal(claims[0].exchange.conversationId,claims[1].exchange.conversationId);assert.equal(claims.filter(x=>x.route.decision==='create').length,1);
  for(const claim of claims)await c.finishChatExchange({userId:user.id,projectId:project.id,exchangeId:claim.exchange.id,reply:{answer:'Synthetic fixture'}});
 });
 await check('Concurrent duplicate submissions get one processing claim',async()=>{
  const args={userId:user.id,projectId:project.id,conversationId:seed.id,exchangeId:id(),content:'How should I clean my pump?',subscription:pro},claims=await Promise.all([c.claimChatExchange(args),c.claimChatExchange(args)]);assert.equal(claims.filter(x=>!x.existing).length,1);
  const r=await api('/api/pip/chat','POST',{projectId:project.id,conversationId:seed.id,exchangeId:args.exchangeId,message:args.content});assert.equal(r.status,202);assert.equal(r.data.pending,true);
  await c.finishChatExchange({userId:user.id,projectId:project.id,exchangeId:args.exchangeId,status:'failed',reply:{error:'fixture_failure',message:'Synthetic failure',errorStatus:503}});const retry=await api('/api/pip/chat','POST',{projectId:project.id,conversationId:seed.id,exchangeId:args.exchangeId,message:args.content});assert.equal(retry.status,503);assert.equal(retry.data.error,'fixture_failure');
 });
 await check('Older pages, search, archived history and restored topic remain accessible',async()=>{
  for(let i=0;i<65;i++)await m.appendProjectMessage({userId:user.id,projectId:project.id,conversationId:seed.id,role:i%2?'assistant':'user',content:i===0?'I planted unique Marconi peppers in the old test.':'History item '+i});
  const pages=[];let before;do{const page=await c.messagePage({userId:user.id,projectId:project.id,conversationId:seed.id,limit:20,before});pages.push(...page.messages);before=page.nextCursor}while(before);assert.equal(new Set(pages.map(x=>x.id)).size,pages.length);assert.ok(pages.some(x=>x.content.includes('Marconi')));
  assert.equal((await c.messagePage({userId:user.id,projectId:project.id,query:'Marconi'})).messages.length,1);
  await m.updateProjectConversation({userId:user.id,projectId:project.id,conversationId:seed.id,patch:{status:'archived'},subscription:pro});assert.equal((await c.messagePage({userId:user.id,projectId:project.id,query:'Marconi'})).messages.length,0);assert.equal((await c.messagePage({userId:user.id,projectId:project.id,query:'Marconi',includeArchived:true})).messages.length,1);
  await m.updateProjectConversation({userId:user.id,projectId:project.id,conversationId:seed.id,patch:{status:'active'},subscription:pro});assert.equal((await c.messagePage({userId:user.id,projectId:project.id,query:'Marconi'})).messages.length,1);
 });
 await check('Relevant older user facts enter selected-grow context with source identifiers',async()=>{
  const context=await m.buildProjectContext({userId:user.id,projectId:project.id,conversationId:seed.id,question:'Which Marconi peppers did I plant?'});assert.ok(context.retrievedMessages.some(x=>x.content.includes('Marconi')&&x.id&&x.createdAt));assert.ok(!context.recentMessages.some(x=>x.content.includes('Marconi')));
  const otherContext=await m.buildProjectContext({userId:user.id,projectId:otherGrow.id,question:'Which Marconi peppers did I plant?'});assert.equal(otherContext.retrievedMessages.length,0);
 });
 await check('Legacy mixed history preview makes no changes; selected exchange moves with reply and supports Undo',async()=>{
  const legacy=(await m.createProjectConversation({userId:user.id,projectId:project.id,title:'Mixed old topic',subscription:pro})).conversation;
  const old=await m.appendProjectMessage({userId:user.id,projectId:project.id,conversationId:legacy.id,role:'user',content:'How should I clean my pump?'});await m.appendProjectMessage({userId:user.id,projectId:project.id,conversationId:legacy.id,role:'assistant',content:'Old maintenance answer.'});
  await m.appendProjectMessage({userId:user.id,projectId:project.id,conversationId:legacy.id,role:'user',content:'How much MasterBlend do I need?'});await m.appendProjectMessage({userId:user.id,projectId:project.id,conversationId:legacy.id,role:'assistant',content:'Old feeding answer.'});
  const preview=await c.previewConversationOrganization({userId:user.id,projectId:project.id,conversationId:legacy.id,subscription:pro});assert.equal(preview.groups.length,2);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:legacy.id})).length,4);
  const moved=await c.moveExchange({userId:user.id,projectId:project.id,exchangeId:'legacy_'+old.id,destinationId:maintenance.id,revision:0,mutationId:id(),subscription:pro});assert.equal(moved.exchange.conversationId,maintenance.id);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:legacy.id})).length,2);
  await c.moveExchange({userId:user.id,projectId:project.id,exchangeId:moved.exchange.id,revision:1,undo:true,mutationId:id(),subscription:pro});assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:legacy.id})).length,4);
 });

 await check('Concurrent profile patches preserve custom values and record one first grow save',async()=>{
  await Promise.all([m.updateProject({userId:user.id,projectId:project.id,patch:{systemProfile:{notes:'New private note'}}}),m.updateProject({userId:user.id,projectId:project.id,patch:{systemProfile:{preferredTaskDays:['monday','friday'],crops:['arugula']}}})]);
  const saved=await m.getProject({userId:user.id,projectId:project.id});assert.equal(saved.systemProfile.growZone,'9b');assert.equal(saved.systemProfile.notes,'New private note');assert.deepEqual(saved.systemProfile.preferredTaskDays,['monday','friday']);
  const storage=await m.conversationStorage();const events=postgres?(await storage.pool.query("select * from pip_conversion_events where user_id=$1 and event_name='grow_first_saved'",[user.id])).rows:Object.values(storage.read().conversionEvents).filter(x=>x.userId===user.id&&x.eventName==='grow_first_saved');assert.equal(events.length,1);assert.ok(!JSON.stringify(events[0].metadata).includes('private note'));
 });
 await check('An answer recalls an older dated user statement outside the recent window',async()=>{
  const reply=await api('/api/pip/chat','POST',{projectId:project.id,conversationId:seed.id,exchangeId:id(),routeChoice:{conversationId:seed.id},message:'What did I say about my Marconi peppers earlier?'});assert.equal(reply.status,200);assert.match(reply.data.answer,/planted unique Marconi peppers/);assert.match(reply.data.answer,/\d{4}-\d{2}-\d{2}/);assert.ok(reply.data.sources.some(x=>x.messageId));
 });
 await check('New topic Undo archives its empty automatic thread and preserves review references',async()=>{
  const claim=await c.claimChatExchange({userId:user.id,projectId:otherGrow.id,conversationId:(await m.listProjectConversations({userId:user.id,projectId:otherGrow.id}))[0].id,exchangeId:id(),content:'How should I clean my pump?',subscription:pro});
  const actions=[{type:'calendar',items:[{title:'Review only'}]}];for(const role of ['user','assistant'])await m.appendProjectMessage({userId:user.id,projectId:otherGrow.id,conversationId:claim.exchange.conversationId,exchangeId:claim.exchange.id,role,content:role==='user'?'How should I clean my pump?':'Review the proposed task.'});
  await c.finishChatExchange({userId:user.id,projectId:otherGrow.id,exchangeId:claim.exchange.id,reply:{answer:'Review the proposed task.',actions}});const before=await m.listProjectReminders({userId:user.id,projectId:otherGrow.id}),automaticId=claim.exchange.conversationId;
  await c.moveExchange({userId:user.id,projectId:otherGrow.id,exchangeId:claim.exchange.id,revision:0,mutationId:id(),undo:true,subscription:pro});
  const all=await m.listProjectConversations({userId:user.id,projectId:otherGrow.id,includeArchived:true});assert.equal(all.find(x=>x.id===automaticId).status,'archived');assert.deepEqual((await c.getChatExchange({userId:user.id,projectId:otherGrow.id,exchangeId:claim.exchange.id})).reply.actions,actions);assert.deepEqual(await m.listProjectReminders({userId:user.id,projectId:otherGrow.id}),before);
 });
 await check('Invalid legacy move has no side effects; local capacity does not discard the moved exchange',async()=>{
  const source=(await m.createProjectConversation({userId:user.id,projectId:project.id,title:'Old capacity source',subscription:pro})).conversation,target=(await m.createProjectConversation({userId:user.id,projectId:project.id,title:'Capacity destination',subscription:pro})).conversation;
  const old=await m.appendProjectMessage({userId:user.id,projectId:project.id,conversationId:source.id,role:'user',content:'Old preserved exchange'});await m.appendProjectMessage({userId:user.id,projectId:project.id,conversationId:source.id,role:'assistant',content:'Old preserved reply'});
  const args={userId:user.id,projectId:project.id,exchangeId:'legacy_'+old.id,destinationId:'missing-thread',revision:0,mutationId:id(),subscription:pro};await assert.rejects(c.moveExchange(args),/not found/);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:source.id}))[0].exchangeId,null);
  if(!postgres){for(let i=0;i<200;i++)await m.appendProjectMessage({userId:user.id,projectId:project.id,conversationId:target.id,role:'assistant',content:'Filler '+i});await assert.rejects(c.moveExchange({...args,destinationId:target.id}),/history limit/);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:source.id})).length,2);assert.equal((await m.listProjectMessages({userId:user.id,projectId:project.id,conversationId:target.id,limit:200})).length,200)}
 });
 await check('Expired sessions cannot read, route or move saved exchanges',async()=>{
  const realNow=Date.now;let expired;try{Date.now=()=>realNow()-86400000;expired=issuePipSession({member:user,subscription:pro})}finally{Date.now=realNow}
  for(const [url,method,body] of [['/history','GET'],['/conversations/route','POST',{conversationId:seed.id,message:'Clean my pump'}],['/exchanges/'+exchangeId+'/move','POST',{undo:true,revision:1,mutationId:id()}]]){const r=await fetch(base+'/api/pip/projects/'+project.id+url,{method,headers:{Authorization:'Bearer '+expired,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});assert.equal(r.status,401)}
 });
 await check('Free member organization is rejected',async()=>await assert.rejects(c.routeConversation({userId:user.id,projectId:project.id,conversationId:seed.id,message:'Clean pump',subscription:{active:false}}),/Pip Pro/));
}finally{fs.writeFileSync(path.join(out,postgres?'postgres-conversation-results.json':'file-conversation-results.json'),JSON.stringify(results,null,2));server.closeAllConnections();await new Promise(r=>server.close(r));if(postgres)await m.closeMemoryForTests()}
console.log(results.length+' '+(postgres?'PostgreSQL':'file')+' conversation acceptance checks passed.');
