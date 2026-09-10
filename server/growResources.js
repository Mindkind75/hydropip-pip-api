import { conversationStorage, getProject, getUserPreferences, normalizeBuildEstimate, listProjectReadings, listProjectMessages } from './pipMemory.js';
import { statedGrowFacts } from './growFacts.js';
import { buildCatalog } from './pipData.js';
import { nutrientProgramsForSubscription } from './nutrientPrograms.js';
import { calculateRecipe } from '../assets/js/nutrient-recipe.js';

const fail = (message, statusCode = 400) => { throw Object.assign(Error(message), {statusCode}); };
const clone = value => structuredClone(value);
const revision = (base, current) => { if (!Number.isSafeInteger(base) || base !== (current || 0)) fail('A newer save exists. Reload it before applying your change.',409); };
const batchId = value => /^[a-zA-Z0-9_-]{8,100}$/.test(value || '') && !['__proto__','constructor','prototype'].includes(value) ? value : fail('Invalid batch identifier.');
const date = value => {const parsed=new Date(value+'T00:00:00Z');return /^\d{4}-\d{2}-\d{2}$/.test(value || '') && Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0,10) === value ? value : fail('Enter a valid batch date.');};

// Every operation checks the owner inside the same transaction as the write.
// One project row lock serializes independent build, draft, and batch changes.
async function access({userId,projectId}, mutate) {
  const storage = await conversationStorage();
  if (storage.pool) {
    const client = await storage.pool.connect();
    try {
      await client.query('begin');
      const result = await client.query('select grow_resources from pip_projects where id=$1 and user_id=$2'+(mutate?' for update':''),[projectId,userId]);
      if (!result.rows[0]) fail('Grow not found.',404);
      const resources = result.rows[0].grow_resources || {};
      if (mutate) { mutate(resources); await client.query('update pip_projects set grow_resources=$1::jsonb where id=$2 and user_id=$3',[JSON.stringify(resources),projectId,userId]); }
      await client.query('commit');
      return clone(resources);
    } catch(error) { await client.query('rollback'); throw error; } finally {client.release();}
  }
  const state = storage.read(), project = state.projects[projectId];
  if (!project || project.userId !== userId) fail('Grow not found.',404);
  const resources = clone(project.growResources || {});
  if (mutate) { mutate(resources); project.growResources = resources; storage.write(state); }
  return clone(resources);
}

export function summarizeBuild(build) {
  if (!build) return null;
  const opts = build.options, ownedTiers = opts.planterChoice === 'all' ? opts.towers*opts.tiers : opts.planterChoice === 'some' ? Math.min(opts.towers*opts.tiers,opts.ownedPlanterTiers) : 0;
  const excluded = new Set([opts.reservoir === 'new' ? 'ibc-used':'ibc-new',opts.support === 'pvc' ? 'support-galvanized':'support-pvc']);
  if (['owned','custom'].includes(opts.reservoir)) {excluded.add('ibc-used');excluded.add('ibc-new');}
  if (opts.support === 'owned') {excluded.add('support-galvanized');excluded.add('support-pvc');}
  const items = buildCatalog.items.filter(item => item.active && !excluded.has(item.id) && (item.required || opts.optional.includes(item.id))).map(item => {
    const quantity = item.id === 'planter-order' ? Math.max(0,Math.ceil((opts.towers*opts.tiers-ownedTiers)/5)) : item.quantityRule === 'perTower' ? opts.towers : item.quantityRule === 'twoPerTower' ? Math.ceil(opts.tiers/5*opts.towers) : item.quantityRule === 'perTwoTowers' ? Math.max(1,Math.ceil(opts.towers/2)) : Number(item.baseQuantity || 1);
    return {id:item.id,name:item.name,quantity,unit:item.unit,collected:Boolean(build.checked[item.id]),owned:Boolean(build.purchases[item.id]?.owned) || quantity===0,typicalPrice:item.typicalPrice};
  });
  if (opts.reservoir === 'custom') items.push({id:'custom-reservoir',name:'Custom reservoir',quantity:1,unit:'reservoir',collected:Boolean(build.checked['custom-reservoir']),owned:opts.customReservoirPrice === 0,typicalPrice:opts.customReservoirPrice});
  const remaining = items.filter(item => !item.collected && !item.owned);
  return {savedAt:build.savedAt,source:'Grow build checklist',towers:opts.towers,tiers:opts.tiers,ownedSelections:{planterTiers:ownedTiers,reservoir:opts.reservoir==='owned',support:opts.support==='owned'},items,remaining,estimatedRemainingCost:Math.round(remaining.reduce((sum,item)=>sum+item.quantity*item.typicalPrice,0)),assemblyStatus:'Assembly is not tracked by the parts checklist.'};
}

export async function getGrowResources(args) {
  const resources = await access(args);
  return {...resources,buildSummary:summarizeBuild(resources.build),batches:Object.values(resources.batches || {}).filter(item=>!item.deletedAt).sort((a,b)=>b.batchDate.localeCompare(a.batchDate)||b.savedAt.localeCompare(a.savedAt))};
}

export async function saveGrowBuild(args) {
  const imported = args.importAccount ? (await getUserPreferences({userId:args.userId})).buildEstimate : null;
  if (args.importAccount && !imported) fail('No account build is saved yet. Start a new build for this grow.');
  return access(args, resources => {
    revision(args.baseRevision,resources.build?.revision);
    if (args.importAccount && resources.build) fail('This grow already has a build. Its progress was kept.',409);
    const build = normalizeBuildEstimate(imported || args.build);
    if (!build) fail('Provide a build estimate.');
    resources.build = {...build,revision:(resources.build?.revision || 0)+1,savedAt:new Date().toISOString(),source:resources.build?.source || (args.importAccount ? 'Copied from account build':'Created for this grow')};
  });
}

export async function saveNutrientDraft(args) {
  const allowed = ['volume','volumeUnit','system','crop','stage','waterSource','program','fresh','customName1','customRate1','customUnit1','customName2','customRate2','customUnit2','customName3','customRate3','customUnit3'];
  const fields = Object.fromEntries(Object.entries(args.fields || {}).filter(([key])=>allowed.includes(key)).map(([key,value])=>[key,key==='fresh'?value===true:String(value ?? '').slice(0,160)]));
  return access(args, resources => {revision(args.baseRevision,resources.draft?.revision); resources.draft={fields,revision:(resources.draft?.revision||0)+1,savedAt:new Date().toISOString()};});
}

export function previewNutrientBatch({input,subscription}) {
  try { return calculateRecipe(nutrientProgramsForSubscription(subscription),input || {}); }
  catch(error) { fail(error.message); }
}

export async function saveNutrientBatch(args) {
  const id = batchId(args.id), batchDate = date(args.batchDate);
  if (args.confirm !== true) fail('Review the batch before saving it.');
  const recipe = previewNutrientBatch(args);
  if (JSON.stringify(args.reviewedRecipe) !== JSON.stringify(recipe)) fail('The recipe has changed. Calculate and review the current amounts before saving.',409);
  const signature = JSON.stringify({batchDate,recipe});
  return access(args, resources => {
    const batches = resources.batches ||= {}, previous = batches[id];
    // A retry with the same ID and content acknowledges the original write.
    if (previous && !previous.deletedAt && previous.signature === signature) return;
    revision(args.baseRevision,previous?.revision);
    if (previous?.deletedAt) fail('This batch was deleted. Start a new batch instead.',409);
    if (!previous && Object.keys(batches).length >= 2000) fail('This grow has reached its saved batch limit.');
    batches[id]={id,batchDate,recipe,signature,revision:(previous?.revision || 0)+1,createdAt:previous?.createdAt || new Date().toISOString(),savedAt:new Date().toISOString()};
  });
}

export async function deleteNutrientBatch(args) {
  const id = batchId(args.id);
  if (args.confirm !== true) fail('Confirm batch deletion.');
  return access(args, resources => {
    const previous = resources.batches?.[id];
    if (!previous) fail('Batch not found.',404);
    if (previous.deletedAt) return;
    revision(args.baseRevision,previous.revision);
    // Keep only a tombstone so late retries cannot resurrect a deleted recipe.
    resources.batches[id]={id,revision:previous.revision+1,deletedAt:new Date().toISOString()};
  });
}

export async function growUnderstanding(args) {
  const project = await getProject(args);
  if (!project) fail('Grow not found.',404);
  const [resources,readings,messages] = await Promise.all([getGrowResources(args),listProjectReadings(args),args.conversationId?listProjectMessages({...args,limit:8}):Promise.resolve([])]);
  const profile = project.systemProfile, latestBatch = resources.batches[0] || null, conflicts=resourceConflicts(profile,resources);
  const conversationFacts=(messages||[]).filter(item=>item.role==='user'&&!isHypotheticalFact(item.content)).map(item=>({messageId:item.id,createdAt:item.createdAt,facts:statedGrowFacts(item.content)})).filter(item=>Object.keys(item.facts).length);
  return {project:{id:project.id,title:project.title,systemProfile:profile,updatedAt:project.updatedAt},build:resources.buildSummary,latestBatch,batchCount:resources.batches.length,latestReading:readings?.at(-1)||null,conflicts,conversationFacts,
    contextRules:'Saved profile facts apply to this grow. Explicit details in your current question apply to that answer only. Conversation details may fill missing facts; they do not change your profile. Calculator drafts and unsaved examples are not saved batches.'};
}
export function isHypotheticalFact(text){return /\b(?:what if|suppose|hypothetic\w*|imagine|if i|if we|for example)\b/i.test(text);}
export function resourceConflicts(profile,resources){
  const latestBatch=resources.batches?.[0],conflicts=[];
  if (latestBatch && profile.batchStartDate && profile.batchStartDate !== latestBatch.batchDate) conflicts.push('The profile batch start ('+profile.batchStartDate+') differs from the latest saved recipe date ('+latestBatch.batchDate+'). These are separate records; confirm which batch is in the tank.');
  if (latestBatch && profile.reservoirGallons && latestBatch.recipe.gallons > profile.reservoirGallons) conflicts.push('The saved prepared batch is larger than the profile reservoir capacity. Confirm whether it was mixed across multiple containers.');
  if(resources.buildSummary&&profile.towerCount&&resources.buildSummary.towers!==profile.towerCount)conflicts.push('The build checklist plans '+resources.buildSummary.towers+' towers, while the grow profile records '+profile.towerCount+'. Confirm which describes the installed system.');
  return conflicts;
}

export function recallGrowResources(question, context) {
  if (!context) return null;
  const batchQuery = /\b(?:what|which|when|show|recall)\b.*\b(?:saved|last|latest|previous)\b.*\b(?:batch|mix|recipe)\b|\b(?:batch|mix|recipe)\b.*\b(?:did i save|saved last)\b/i.test(question);
  const buildQuery = /\b(?:what|which|show|how much)\b/i.test(question) && /\b(?:purchased|collected|owned|remaining|left to (?:buy|build)|still need|my (?:saved )?(?:parts|build))\b/i.test(question);
  if (batchQuery) {
    const batch = context.nutrientBatches?.[0];
    if (!batch) return 'There is no saved nutrient batch in this grow yet. Use the Nutrient Calculator, then review and save the batch. A calculator draft or chat example is not a saved batch.';
    return 'Latest saved batch for '+context.project.title+' — '+batch.batchDate+':\n'+batch.recipe.input.volume+' '+batch.recipe.input.volumeUnit+' prepared; '+batch.recipe.title+' ('+batch.recipe.stageLabel+').\n'+batch.recipe.components.map(item=>'- '+item.name+': '+item.amount+' '+item.unit).join('\n')+'\nRecipe version '+batch.recipe.catalogVersion+'. This records the prepared mix, not the current tank level or reservoir capacity. Review or correct it in the Nutrient Calculator.';
  }
  if (buildQuery) {
    const build = context.growBuild;
    if (!build) return 'No build is attached to '+context.project.title+' yet. Open this grow’s Build page to start one or explicitly copy your account build.';
    const ready=build.items.filter(item=>item.collected||item.owned);
    return 'Saved build for '+context.project.title+' ('+build.savedAt.slice(0,10)+'):\n'+build.towers+' towers, '+build.tiers+' tiers each.\nAlready owned or collected: '+(ready.map(item=>item.name).join(', ')||'none recorded')+'.\nRemaining parts:\n'+(build.remaining.map(item=>'- '+item.quantity+' × '+item.name).join('\n')||'All selected parts are ready.')+'\nEstimated remaining parts cost: $'+build.estimatedRemainingCost+'. '+build.assemblyStatus;
  }
  return null;
}
