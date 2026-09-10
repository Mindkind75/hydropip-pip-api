import assert from 'node:assert/strict';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {randomUUID} from 'node:crypto';
const postgres=process.argv.includes('--postgres'),preview=process.argv.includes('--preview');
const ui=process.argv.includes('--ui');
const out=process.env.PIP_BATCH_QA_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'hydropip-grow-resources-'));fs.mkdirSync(out,{recursive:true});
process.env.PIP_ALLOWED_ORIGINS='http://127.0.0.1:4203,http://127.0.0.1:4204';
Object.assign(process.env,{NODE_ENV:'test',DATABASE_URL:postgres?(process.env.PIP_TEST_DATABASE_URL||'postgres://piptest@127.0.0.1:55439/pip_batch3_candidate'):'',PIP_DATABASE_SSL:'false',PIP_MEMORY_FILE:path.join(out,'memory.json'),PIP_APPROVED_TRAINING_FILE:path.join(out,'training.md'),OPENAI_API_KEY:'',PIP_AI_DISABLED:'true',PIP_BRIDGE_SECRET:'batch-three-fictional-test-only',PIP_RATE_LIMIT_MAX:'200',DOTENV_CONFIG_PATH:path.join(out,'absent.env')});
const m=await import('./pipMemory.js');if(!postgres)m.resetMemoryForTests();const {app}=await import('./index.js');const {issuePipSession}=await import('./pipAuth.js');const {askPip}=await import('./pipAgent.js');const {calculateRecipe}=await import('../assets/js/nutrient-recipe.js');const {nutrientProgramsForSubscription}=await import('./nutrientPrograms.js');
const server=await new Promise(resolve=>{const s=app.listen(preview?4203:ui?4204:0,'127.0.0.1',()=>resolve(s));}),base='http://127.0.0.1:'+server.address().port;
const pro={active:true,plan:'pip_pro'},user={id:'batch3-'+randomUUID(),name:'Fictional Batch Three Tester'},other={id:'other-'+randomUUID()},token=issuePipSession({member:user,subscription:pro}),otherToken=issuePipSession({member:other,subscription:pro}),freeToken=issuePipSession({member:user,subscription:{active:false}});
let grow,second,foreign;const results=[];
async function api(url,method='GET',body,auth=token){const response=await fetch(base+'/api/pip'+url,{method,headers:{Authorization:'Bearer '+auth,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});return {status:response.status,data:await response.json()};}
async function ok(url,method,body){const r=await api(url,method,body);assert.ok(r.status<300,JSON.stringify(r));return r.data;}
async function check(name,fn){try{await fn();results.push({name,pass:true});console.log('PASS '+name);}catch(error){results.push({name,pass:false,error:error.stack});throw error;}}
try{
 await check('Existing storage starts and additive migration is repeatable',async()=>{assert.equal((await m.getMemoryHealth()).mode,postgres?'postgres':'file');if(postgres){const storage=await m.conversationStorage(),migration=fs.readFileSync(new URL('./migrations/002-grow-resources.sql',import.meta.url),'utf8');await storage.pool.query(migration);await storage.pool.query(migration);}});
 await check('Create independent grows and preserve the account build',async()=>{
  grow=(await ok('/projects','POST',{type:'hydropip_build',title:'Batch Three · 37 gallon grow',systemProfile:{reservoirGallons:37,towerCount:2,crops:['arugula'],growZone:'9b',nutrientBrand:'masterblend_abc',nutrientStage:'vegetative',onboardingComplete:true}})).project;
  second=(await ok('/projects','POST',{type:'hydropip_build',title:'Batch Three · Other grow',systemProfile:{reservoirGallons:80,onboardingComplete:true}})).project;
  foreign=(await m.createProject({user:other,subscription:pro,type:'hydropip_build',title:'Other owner'})).project;
  await ok('/users/me/preferences','PATCH',{patch:{buildEstimate:{options:{towers:3,tiers:10,reservoir:'used',support:'galvanized'},checked:{'feed-pump':true},purchases:{'feed-pump':{owned:true,paid:25}}},buildEstimateBaseRevision:0}});
  assert.equal((await ok('/projects/'+grow.id+'/resources')).resources.build,undefined);
 });
 await check('Copy is explicit, immutable at account level, and scoped to one grow',async()=>{
  const r=await ok('/projects/'+grow.id+'/build','PATCH',{importAccount:true,baseRevision:0});assert.equal(r.resources.build.options.towers,3);
  assert.equal((await ok('/projects/'+second.id+'/resources')).resources.build,undefined);
  const original=(await ok('/users/me/preferences')).preferences.buildEstimate;
  const edited={...r.resources.build,checked:{...r.resources.build.checked,'planter-order':true}};
  await ok('/projects/'+grow.id+'/build','PATCH',{build:edited,baseRevision:1});
  assert.deepEqual((await ok('/users/me/preferences')).preferences.buildEstimate,original);
  assert.equal((await api('/projects/'+grow.id+'/build','PATCH',{importAccount:true,baseRevision:2})).status,409);
 });
 await check('Older build writes conflict; simultaneous build and draft changes both survive',async()=>{
  const build=(await ok('/projects/'+grow.id+'/resources')).resources.build;
  const replies=await Promise.all([api('/projects/'+grow.id+'/build','PATCH',{build,baseRevision:2}),api('/projects/'+grow.id+'/build','PATCH',{build,baseRevision:2})]);assert.deepEqual(replies.map(r=>r.status).sort(),[200,409]);
  await Promise.all([ok('/projects/'+grow.id+'/build','PATCH',{build,baseRevision:3}),ok('/projects/'+grow.id+'/nutrient-draft','PATCH',{fields:{volume:'10',volumeUnit:'gallons',system:'hydropip',crop:'mixed',program:'hydropip_masterblend',stage:'vegetative',waterSource:'unknown_tap',fresh:true},baseRevision:0})]);
  const resources=(await ok('/projects/'+grow.id+'/resources')).resources;assert.equal(resources.build.revision,4);assert.equal(resources.draft.fields.volume,'10');
 });
 await check('Cross-owner reads/writes and expired or free writes are rejected',async()=>{
  for(const [suffix,method,body] of [['resources','GET'],['understanding','GET'],['build','PATCH',{build:{},baseRevision:0}],['nutrient-draft','PATCH',{fields:{},baseRevision:0}],['nutrient-preview','POST',{input:{}}]])assert.equal((await api('/projects/'+foreign.id+'/'+suffix,method,body)).status,404);
  assert.equal((await api('/projects/'+grow.id+'/resources','GET',null,otherToken)).status,404);
  assert.equal((await api('/projects/'+grow.id+'/build','PATCH',{build:{},baseRevision:0},freeToken)).status,402);
  assert.equal((await api('/projects/'+grow.id+'/resources','GET',null,'invalid')).status,401);
 });
 const input={volume:10,volumeUnit:'gallons',system:'hydropip',crop:'mixed',program:'hydropip_masterblend',stage:'vegetative',waterSource:'unknown_tap',fresh:true};let recipe,id='batch_'+randomUUID();
 await check('Browser and server share authoritative math for gallons, liters and custom label units',async()=>{
  recipe=(await ok('/projects/'+grow.id+'/nutrient-preview','POST',{input})).recipe;
  assert.deepEqual(recipe,calculateRecipe(nutrientProgramsForSubscription(pro),input));
  const liters=(await ok('/projects/'+grow.id+'/nutrient-preview','POST',{input:{...input,volume:37.8541,volumeUnit:'liters'}})).recipe;assert.deepEqual(liters.components,recipe.components);
  const custom=(await ok('/projects/'+grow.id+'/nutrient-preview','POST',{input:{...input,volume:10,volumeUnit:'liters',program:'custom_label',custom:[{name:'Test label',rate:2,unit:'ml/L'}]}})).recipe;assert.equal(custom.components[0].amount,20);
  for(const bad of [{...input,volume:0},{...input,volume:Infinity},{...input,volumeUnit:'cups'},{...input,fresh:false},{...input,stage:'invented'}])assert.equal((await api('/projects/'+grow.id+'/nutrient-preview','POST',{input:bad})).status,400);
 });
 await check('Reviewed batch saves once on concurrent retries without changing reservoir capacity',async()=>{
  const body={input,reviewedRecipe:recipe,confirm:true,batchDate:'2026-09-10',baseRevision:0};
  await Promise.all([ok('/projects/'+grow.id+'/nutrient-batches/'+id,'PUT',body),ok('/projects/'+grow.id+'/nutrient-batches/'+id,'PUT',body)]);
  assert.equal((await ok('/projects/'+grow.id+'/resources')).resources.batches.length,1);
  assert.equal((await ok('/projects/'+grow.id)).project.systemProfile.reservoirGallons,37);
  assert.equal((await ok('/projects/'+second.id+'/resources')).resources.batches.length,0);
  const tampered=structuredClone(recipe);tampered.components[0].amount=9999;
  assert.equal((await api('/projects/'+grow.id+'/nutrient-batches/'+id,'PUT',{...body,reviewedRecipe:tampered})).status,409);
  assert.equal((await api('/projects/'+grow.id+'/nutrient-batches/'+id,'PUT',{...body,batchDate:'2026-02-31'})).status,400);
 });
 await check('Pip and Rhythm retrieve selected-grow build and saved batch; drafts never enter model context',async()=>{
  const context=await m.buildProjectContext({userId:user.id,projectId:grow.id,question:'What was my last saved nutrient batch?'});assert.equal(context.nutrientBatches[0].recipe.input.volume,10);assert.ok(context.growBuild.items.some(item=>item.id==='planter-order'&&item.collected));assert.equal(context.project.growResources,undefined);
  const answer=await askPip({message:'What was my last saved nutrient batch?',user,projectId:grow.id,subscription:pro});assert.match(answer.answer,/10 gallons/);assert.equal(answer.mode,'saved_grow_recall');
  const answer2=await askPip({message:'What parts do I still need?',user,projectId:grow.id,subscription:pro});assert.equal(answer2.mode,'saved_grow_recall');assert.match(answer2.answer,/Remaining parts/);assert.ok(context.growBuild.items.find(item=>item.id==='feed-pump').owned);assert.ok(!context.growBuild.remaining.some(item=>item.id==='feed-pump'));
  assert.equal((await ok('/projects/'+grow.id+'/rhythm')).rhythm.latestSavedBatch.id,id);
  const otherAnswer=await askPip({message:'What was my last saved batch?',user,projectId:second.id,subscription:pro});assert.match(otherAnswer.answer,/no saved nutrient batch/i);
 });
 await check('Corrected batch replaces the recipe, stale writes fail, and deletion cannot be undone by retries',async()=>{
  const revised={...input,volume:12},reviewedRecipe=(await ok('/projects/'+grow.id+'/nutrient-preview','POST',{input:revised})).recipe;
  const body={input:revised,reviewedRecipe,confirm:true,batchDate:'2026-09-10',baseRevision:1};await ok('/projects/'+grow.id+'/nutrient-batches/'+id,'PUT',body);
  assert.equal((await ok('/projects/'+grow.id+'/understanding')).understanding.latestBatch.recipe.input.volume,12);
  assert.equal((await api('/projects/'+grow.id+'/nutrient-batches/'+id,'PUT',{...body,input,reviewedRecipe:recipe})).status,409);
  await ok('/projects/'+grow.id+'/nutrient-batches/'+id,'DELETE',{confirm:true,baseRevision:2});assert.equal((await ok('/projects/'+grow.id+'/rhythm')).rhythm.latestSavedBatch,null);
  assert.equal((await api('/projects/'+grow.id+'/nutrient-batches/'+id,'PUT',body)).status,409);
 });
 await check('Reviewed profile changes merge unrelated fields and reject stale same-field changes',async()=>{
  await Promise.all([ok('/projects/'+grow.id,'PATCH',{patch:{systemProfile:{reservoirGallons:42}},expectedProfile:{reservoirGallons:37}}),ok('/projects/'+grow.id,'PATCH',{patch:{systemProfile:{notes:'Separate device note'}}})]);
  const profile=(await ok('/projects/'+grow.id)).project.systemProfile;assert.equal(profile.reservoirGallons,42);assert.equal(profile.notes,'Separate device note');
  assert.equal((await api('/projects/'+grow.id,'PATCH',{patch:{systemProfile:{reservoirGallons:50}},expectedProfile:{reservoirGallons:37}})).status,409);
  await ok('/projects/'+grow.id,'PATCH',{patch:{systemProfile:{reservoirGallons:37}},expectedProfile:{reservoirGallons:42}});
 });
 await check('Newer drafts are protected and another grow starts independently',async()=>{assert.equal((await api('/projects/'+grow.id+'/nutrient-draft','PATCH',{fields:{volume:'100'},baseRevision:0})).status,409);assert.equal((await ok('/projects/'+second.id+'/resources')).resources.draft,undefined);});
 await check('Hypothetical examples do not become ongoing personal facts; saved contradictions have explicit sources',async()=>{
  const {conversationGrowFacts}=await import('./growFacts.js');assert.deepEqual(conversationGrowFacts([{role:'user',content:'What if I have 12 towers?'},{role:'assistant',content:'You have 12 towers.'}]),{});
  const understanding=(await ok('/projects/'+grow.id+'/understanding')).understanding;assert.ok(understanding.conflicts.some(text=>text.includes('3 towers')&&text.includes('records 2')));
  const context=await m.buildProjectContext({userId:user.id,projectId:grow.id});assert.deepEqual(context.savedRecordConflicts,understanding.conflicts);
 });
 await check('Reserved batch IDs are rejected and invalid profile review never changes saved values',async()=>{
  assert.equal((await api('/projects/'+grow.id+'/nutrient-batches/__proto__','PUT',{input,reviewedRecipe:recipe,confirm:true,batchDate:'2026-09-10',baseRevision:0})).status,400);
  assert.equal((await ok('/projects/'+grow.id)).project.systemProfile.reservoirGallons,37);
 });
 await check('A durable setup statement offers a reviewed profile update; a hypothetical or prepared batch does not',async()=>{
  const reply=await askPip({user,subscription:pro,projectId:grow.id,message:'My reservoir is now 42 gallons. How should I plan my next mix?'});
  assert.equal(reply.actions.find(action=>action.type==='profile_change').patch.reservoirGallons,42);assert.equal((await ok('/projects/'+grow.id)).project.systemProfile.reservoirGallons,37);
  const {durableProfileSuggestion,statedGrowFacts}=await import('./growFacts.js');assert.deepEqual(durableProfileSuggestion('What if my reservoir is now 42 gallons?',{}),{});assert.deepEqual(durableProfileSuggestion('I am preparing a 10 gallon batch.',{}),{});assert.equal(statedGrowFacts('My reservoir is now 42 gallons.').reservoirGallons,42);
 });
 if(process.env.PIP_EXPECT_LEGACY==='1')await check('Additive PostgreSQL upgrade preserves the pre-upgrade grow, history and account estimate without auto-attaching',async()=>{
  const legacy={userId:'batch3-legacy-owner',projectId:process.env.PIP_LEGACY_PROJECT};
  const p=await m.getProject(legacy);assert.equal(p.systemProfile.reservoirGallons,37);assert.equal(p.systemProfile.notes,'Legacy grow before Batch 3');
  const prefs=await m.getUserPreferences({userId:legacy.userId});assert.equal(prefs.buildEstimate.options.towers,5);
  assert.ok((await m.listProjectMessages(legacy)).some(item=>item.content==='Legacy saved message before Batch 3'));
  assert.equal((await (await import('./growResources.js')).getGrowResources(legacy)).build,undefined);
 });
 if(preview||ui){
  const html='<!doctype html><html><head><title>Batch Three local review</title></head><body><h1>Fictional grow review</h1><p>Local test data only.</p><nav><a href="/parts-checklist.html?projectId='+grow.id+'#session='+token+'">Build tools</a> · <a href="/nutrient-calculator?projectId='+grow.id+'#session='+token+'">Nutrient calculator</a> · <a href="/batch-three-pro">Pip Pro preview</a> · <a href="/batch-three-chat">Pip chat preview</a></nav></body></html>';
  app.get('/batch-three-review',(_,res)=>res.send(html));
  for(const [route,mode] of [['/batch-three-pro','pro=1&'],['/batch-three-chat','']])app.get(route,(_,res)=>res.send('<!doctype html><html><head><title>Local Pip '+mode+'</title></head><body style="margin:0"><iframe id="pip" title="Pip test" src="/pip.html?'+mode+'projectId='+grow.id+'" style="border:0;width:100%;height:100vh"></iframe><script>const data='+JSON.stringify({type:'HYDROPIP_PIP_SESSION',sessionToken:token,member:user,subscription:pro})+';window.addEventListener("message",e=>{if(e.source===pip.contentWindow&&e.data.type==="HYDROPIP_PIP_READY")pip.contentWindow.postMessage(data,location.origin)});pip.addEventListener("load",()=>pip.contentWindow.postMessage(data,location.origin));</script></body></html>'));
  if(preview)console.log('LOCAL_PREVIEW '+base+'/batch-three-review');
  if(ui)await (await import('./grow-resources-ui-test.js')).runGrowUiChecks({base,user,pro,token,grow,second,ok,check,out});
 }
 if(!preview){await server.close();await m.closeMemoryForTests();}
}catch(error){console.error(error.stack);if(results.at(-1)?.pass!==false)results.push({name:'Test runner completion',pass:false,error:error.stack});process.exitCode=1;await server.close();await m.closeMemoryForTests();}
fs.writeFileSync(path.join(out,'results.json'),JSON.stringify({postgres,results},null,2));
