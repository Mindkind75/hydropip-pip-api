import { randomUUID, createHash } from 'node:crypto';
import { conversationStorage, normalizeSeed, rowToReminder } from './pipMemory.js';
import { prepareRepeat, dateInZone } from '../assets/js/reminder-schedule.js';
import { getCropRhythmEstimate } from './plantingCalendar.js';

const fail=(message,statusCode=400)=>{throw Object.assign(Error(message),{statusCode});};
const text=(v,max=200)=>String(v??'').trim().slice(0,max);
const day=v=>{const s=text(v,10),d=new Date(s+'T00:00:00Z');if(!/^\d{4}-\d{2}-\d{2}$/.test(s)||!Number.isFinite(d.getTime())||d.toISOString().slice(0,10)!==s)fail('Enter a valid date.');return s;};
const zone=v=>{const z=text(v||'UTC',80);try{new Intl.DateTimeFormat('en',{timeZone:z}).format();}catch{fail('Choose a valid time zone.');}return z;};
const id=prefix=>prefix+'_'+randomUUID();
const snapshot=r=>JSON.stringify(r);
const view=review=>({id:review.id,revision:review.revision,projectId:review.projectId,grow:review.grow,title:review.title,rows:review.rows,notice:review.notice,appliedAt:review.appliedAt||null,result:review.result||null});

// Lock the grow and affected records, then persist the receipt and changes together.
// An applied receipt remains valid for retries, including after a later edit/deletion.
async function transaction(args,run){
  if(!args.subscription?.active)fail('Reviewing and saving grow actions requires Pip Pro.',402);
  const storage=await conversationStorage();
  if(storage.pool){
    const client=await storage.pool.connect();
    try{
      await client.query('begin');
      const row=(await client.query('select id,title,system_profile from pip_projects where id=$1 and user_id=$2 for update',[args.projectId,args.userId])).rows[0];
      if(!row)fail('Grow not found.',404);
      const reminders=(await client.query('select * from pip_reminders where project_id=$1 and user_id=$2 order by created_at,id for update',[args.projectId,args.userId])).rows.map(rowToReminder);
      const seeds=(await client.query('select * from pip_seeds where project_id=$1 and user_id=$2 order by created_at,id for update',[args.projectId,args.userId])).rows.map(r=>({...r.seed,id:r.id,createdAt:r.created_at.toISOString(),updatedAt:r.updated_at.toISOString()}));
      const oldReview=args.reviewId?(await client.query('select review from pip_action_reviews where id=$1 and project_id=$2 and user_id=$3 for update',[args.reviewId,args.projectId,args.userId])).rows[0]?.review:null;
      const state={project:{id:row.id,title:row.title,systemProfile:row.system_profile},reminders,seeds,review:oldReview};
      const changes=run(state);
      for(const r of changes.reminders||[]){
        await client.query('insert into pip_reminders(id,project_id,user_id,title,note,category,due_date,due_at,repeat_rule,notify,timezone,status,last_completed_at,completion_count,created_at,updated_at) values($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10,$11,$12,$13,$14,$15,$16) on conflict(id) do update set title=excluded.title,note=excluded.note,category=excluded.category,due_date=excluded.due_date,due_at=excluded.due_at,repeat_rule=excluded.repeat_rule,notify=excluded.notify,timezone=excluded.timezone,status=excluded.status,last_completed_at=excluded.last_completed_at,completion_count=excluded.completion_count,updated_at=excluded.updated_at',
          [r.id,args.projectId,args.userId,r.title,r.note,r.category,r.dueDate,r.dueAt,JSON.stringify(r.repeat),r.notify,r.timezone,r.status,r.lastCompletedAt||null,r.completionCount||0,r.createdAt,r.updatedAt]);
      }
      for(const r of changes.seeds||[])await client.query('insert into pip_seeds(id,project_id,user_id,seed,created_at,updated_at) values($1,$2,$3,$4::jsonb,$5,$6) on conflict(id) do update set seed=excluded.seed,updated_at=excluded.updated_at',[r.id,args.projectId,args.userId,JSON.stringify(r),r.createdAt,r.updatedAt]);
      if(changes.deleteIds?.length)await client.query('delete from pip_reminders where project_id=$1 and user_id=$2 and id=any($3::text[])',[args.projectId,args.userId,changes.deleteIds]);
      await client.query('insert into pip_action_reviews(id,project_id,user_id,review) values($1,$2,$3,$4::jsonb) on conflict(id) do update set review=excluded.review',[changes.review.id,args.projectId,args.userId,JSON.stringify(changes.review)]);
      await client.query('commit');
      return view(changes.review);
    }catch(error){await client.query('rollback');throw error;}finally{client.release();}
  }
  const state=structuredClone(storage.read()),project=state.projects[args.projectId];
  if(!project||project.userId!==args.userId)fail('Grow not found.',404);
  state.actionReviews||={};
  const stored=state.actionReviews[args.reviewId];
  const changes=run({project,reminders:state.reminders[args.projectId]||[],seeds:state.seeds?.[args.projectId]||[],review:stored?.userId===args.userId&&stored?.projectId===args.projectId?stored:null});
  function merge(current,updates){const map=new Map(current.map(r=>[r.id,r]));for(const r of updates||[])map.set(r.id,r);return [...map.values()];}
  state.reminders[args.projectId]=merge(state.reminders[args.projectId]||[],changes.reminders).filter(r=>!(changes.deleteIds||[]).includes(r.id));
  state.seeds||={};state.seeds[args.projectId]=merge(state.seeds[args.projectId]||[],changes.seeds);
  state.actionReviews[changes.review.id]=changes.review;storage.write(state);return view(changes.review);
}

function reminder(input,timezone,existing){
  const title=text(input.title,180);if(!title)fail('Every task needs a title.');
  const dueDate=input.dueDate||input.date?day(input.dueDate||input.date):null;
  let dueAt=input.dueAt?new Date(input.dueAt):null;if(dueAt&&!Number.isFinite(dueAt.getTime()))fail('Enter a valid task time.');
  if(dueAt&&dueDate&&dateInZone(dueAt,timezone)!==dueDate)fail('The task date and time disagree. Review them in the selected time zone.');
  if(input.dueTime&&!dueAt)fail('Review a valid local date and time before saving.');
  if(!dueDate&&!dueAt)fail('Set a date for each task before reviewing it.');
  const frequency=input.repeat?.frequency;
  if(frequency&&!['daily','weekly','monthly'].includes(frequency))fail('Choose a daily, weekly or monthly repeat schedule.');
  if(input.repeat?.localTime&&!/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(input.repeat.localTime))fail('Enter a valid repeat time.');
  const now=new Date().toISOString();
  return {id:existing?.id||id('rem'),title,note:text(input.note,2000),category:text(input.category||'grow',40),dueDate,dueAt:dueAt?.toISOString()||null,
    repeat:prepareRepeat(input.repeat,dueAt?.toISOString()||dueDate,timezone),notify:input.notify===true,timezone,status:existing?.status||'active',lastCompletedAt:existing?.lastCompletedAt||null,completionCount:existing?.completionCount||0,createdAt:existing?.createdAt||now,updatedAt:now};
}
function taskDetail(r){
  const when=r.dueAt?new Intl.DateTimeFormat('en-US',{dateStyle:'medium',timeStyle:'short',timeZone:r.timezone||'UTC'}).format(new Date(r.dueAt))+' ('+(r.timezone||'UTC')+')':r.dueDate;
  const repeat=r.repeat?.frequency?' · repeats '+r.repeat.frequency+(r.repeat.frequency==='monthly'?' on day '+r.repeat.anchorDay:'')+' at '+r.repeat.localTime+' ('+r.timezone+')':'';
  return r.title+' · '+when+repeat+' · '+r.category+' · notifications '+(r.notify?'on':'off')+(r.note?' · '+r.note:'');
}
function seedKey(r){return [r.crop,r.variety,r.source].map(v=>text(v).toLowerCase()).join('|');}

export async function previewAction(args){
  const proposal=args.action?.proposalId;
  if(proposal){
    if(!/^[a-zA-Z0-9_-]{8,150}$/.test(proposal))fail('Invalid action identifier.');
    args={...args,reviewId:'review_'+createHash('sha256').update(JSON.stringify([args.userId,args.projectId,args.action,args.timezone||'UTC'])).digest('hex')};
  }
  return transaction(args,state=>{
    if(state.review&&(state.review.appliedAt||args.refresh!==true))return {review:state.review};
    const action=args.action||{},now=new Date().toISOString();
    const review={id:args.reviewId||id('review'),revision:randomUUID(),userId:args.userId,projectId:args.projectId,grow:state.project.title,createdAt:now,rows:[],expected:[],reminders:[],seeds:[],deleteIds:[]};
    if(action.type==='calendar_change'||action.type==='create_reminders'){
      const op=action.operation||'add';if(!['add','update','delete','delete_all','replace_all'].includes(op))fail('Choose a valid task action.');
      if(action.reminderIds&&!Array.isArray(action.reminderIds))fail('Choose the tasks to change.');
      const ids=[...new Set((action.reminderIds||[]).map(String))];
      const selected=['delete_all','replace_all'].includes(op)?state.reminders:state.reminders.filter(r=>ids.includes(r.id));
      if(['update','delete'].includes(op)&&(!ids.length||selected.length!==ids.length))fail('A selected task is no longer available. Review the current Planner.',409);
      if(selected.length>200)fail('Review a smaller group of tasks.');
      review.title=op==='add'?'Review tasks':op==='update'?'Review task changes':'Review task removal';
      review.notice='Only these reviewed tasks will change. New tasks added later are kept.';
      const timezone=zone(args.timezone);
      if(op==='update'||op==='delete'||op==='delete_all'||op==='replace_all'){
        for(const r of selected)review.expected.push({kind:'reminder',id:r.id,value:snapshot(r)});
        if(op==='update'){
          const allowed=['title','note','category','dueDate','dueAt','repeat','notify','timezone'];
          const patch=Object.fromEntries(Object.entries(action.patch||{}).filter(([key])=>allowed.includes(key)));
          if(Object.hasOwn(patch,'dueDate')&&!Object.hasOwn(patch,'dueAt')){patch.dueAt=null;}
          if(patch.dueAt&&!Object.hasOwn(patch,'dueDate')){const date=new Date(patch.dueAt);if(!Number.isFinite(date.getTime()))fail('Enter a valid task time.');patch.dueDate=dateInZone(date,zone(patch.timezone||selected[0]?.timezone||timezone));}
          for(const r of selected){const next=reminder({...r,...patch,...(Object.hasOwn(patch,'dueDate')&&!Object.hasOwn(patch,'repeat')?{repeat:r.repeat?{frequency:r.repeat.frequency}:null}:{})},zone(patch.timezone||r.timezone||timezone),r);review.reminders.push(next);review.rows.push({label:'Update task',before:taskDetail(r),after:taskDetail(next)});}
        }else{review.deleteIds=selected.map(r=>r.id);for(const r of selected)review.rows.push({label:'Remove task',before:taskDetail(r),after:'Removed from Planner and Calendar'});}
      }
      if(op==='add'||op==='replace_all'){
        if(!Array.isArray(action.reminders)||!action.reminders.length||action.reminders.length>40)fail('Review between one and forty tasks.');
        for(const input of action.reminders){const next=reminder(input,zone(input.timezone||timezone));review.reminders.push(next);review.rows.push({label:'Add task',before:'Not saved',after:taskDetail(next)});}
      }
      if(!review.rows.length)fail('There are no matching tasks to change.');
    }else if(action.type==='seed_pack_inventory'){
      review.title='Review seed packets';review.notice='Packs are inventory. Saving them does not record planted crops.';
      if(!Array.isArray(action.items)||!action.items.length||action.items.length>30)fail('Review between one and thirty seed entries.');
      const groups=new Map();
      for(const raw of action.items){
        const crop=text(raw.crop,80),count=Number(raw.packsOnHand);if(!crop||!Number.isInteger(count)||count<1||count>30)fail('Each seed entry needs a crop and 1–30 packs.');
        const item={crop,variety:text(raw.variety,120)||null,source:text(raw.source,160)||null,packsOnHand:count},key=seedKey(item);
        if(groups.has(key))groups.get(key).packsOnHand+=count;else groups.set(key,item);
      }
      for(const [key,item] of groups){
        const existing=state.seeds.find(r=>(r.plantingLocation||'seed_vault')==='seed_vault'&&seedKey(r)===key);
        const count=(Number(existing?.packsOnHand)||0)+item.packsOnHand;if(count>999)fail('The resulting pack count is too large.');
        const next=normalizeSeed({...existing,...item,id:existing?.id||id('seed'),packsOnHand:count,plantingLocation:'seed_vault',status:'on_hand',createdAt:existing?.createdAt||now,updatedAt:now});
        review.expected.push({kind:'inventory',key,id:existing?.id||null,value:existing?snapshot(existing):null});
        review.seeds.push(next);review.rows.push({label:item.crop+(item.variety?' · '+item.variety:''),before:(existing?.packsOnHand||0)+' packs owned',after:count+' packs owned'+(item.source?' · '+item.source:'')});
      }
    }else if(action.type==='planting'){
      const input=action.planting||{},source=state.seeds.find(r=>r.id===input.seedId),editing=action.operation==='update';
      if(editing&&(!source||!['hydropip_tower','nursery_for_hydropip'].includes(source.plantingLocation)))fail('This planting is no longer available in the current grow.',409);
      if(!editing&&input.seedId&&(!source||(source.plantingLocation||'seed_vault')!=='seed_vault'))fail('Choose a seed packet from this grow’s Seed Vault.',409);
      const crop=text(source?.crop||input.crop,80),sowDate=day(input.sowDate),count=Number(input.seedsSown);
      if(!crop||!Number.isInteger(count)||count<1||count>10000)fail('Enter a crop and a whole-number quantity from 1 to 10,000.');
      if(!['hydropip_tower','nursery_for_hydropip'].includes(input.plantingLocation))fail('Choose where these seeds were planted.');
      const stage=editing?(input.status||source.status):'sown';
      if(!['sown','germinating','sprouted','growing','harvest_ready','harvesting','harvested','failed','finished'].includes(stage))fail('Choose a supported planting stage.');
      const today=new Intl.DateTimeFormat('en-CA',{timeZone:zone(args.timezone),year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
      if(sowDate>today)fail('Use Planner for future tasks. Enter the date these seeds were actually planted.');
      if(source)review.expected.push({kind:'seed',id:source.id,value:snapshot(source)});
      const estimate=getCropRhythmEstimate({crop,stage,sowDate,date:today})||{};
      const next=normalizeSeed({...(editing?source:{}),crop,variety:source?.variety||text(input.variety,120),source:source?.source,id:editing?source.id:id('seed'),sowDate,seedsSown:count,status:stage,plantingLocation:input.plantingLocation,method:input.plantingLocation==='hydropip_tower'?'direct_sow':'protected_start',packsOnHand:0,
        expectedHarvestDate:estimate.expectedHarvestStart,expectedHarvestEnd:estimate.expectedHarvestEnd,timingEstimateBasis:estimate.expectedHarvestStart?'crop_stage_estimate':null,notes:text(input.notes,1000),createdAt:editing?source.createdAt:now,updatedAt:now});
      const detail=s=>(s.seedsSown||'Unknown quantity')+' seeds planted on '+(s.sowDate||'unknown date')+' · '+(s.plantingLocation==='hydropip_tower'?'HydroPip towers':'Started for this grow')+' · '+s.status.replaceAll('_',' ');
      review.title=editing?'Review planting changes':'Review planting';review.notice=editing?'Only this planting record changes. Owned pack counts stay unchanged.':'A separate planting record will appear in Rhythm. Owned pack counts stay unchanged.';
      review.seeds.push(next);review.rows.push({label:crop+(next.variety?' · '+next.variety:''),before:editing?detail(source):'Not recorded as this planting',after:detail(next)});
      if(next.notes||editing&&source.notes)review.rows.push({label:'Planting note',before:editing?source.notes||'Not recorded':'Not recorded',after:next.notes||'Cleared'});
    }else fail('This action cannot be reviewed here.');
    return {review};
  });
}

export async function applyReviewedAction(args){
  if(args.confirm!==true)fail('Review the changes before saving.');
  return transaction(args,state=>{
    const r=state.review;if(!r)fail('Review not found.',404);
    if(r.appliedAt)return {review:r};
    if(args.reviewRevision!==r.revision)fail('This review was refreshed. Review the latest changes before saving.',409);
    if(state.project.title!==r.grow)fail('This grow was renamed. Reopen the review to confirm its current name.',409);
    if(Date.now()-new Date(r.createdAt).getTime()>24*60*60*1000)fail('This review has expired. Reopen it to check the current records.',409);
    for(const expected of r.expected){
      const current=expected.kind==='reminder'?state.reminders.find(x=>x.id===expected.id):expected.kind==='inventory'?state.seeds.find(x=>(x.plantingLocation||'seed_vault')==='seed_vault'&&seedKey(x)===expected.key):state.seeds.find(x=>x.id===expected.id);
      if((current?snapshot(current):null)!==expected.value)fail('A reviewed record changed. Reopen the review to see the latest values.',409);
    }
    r.appliedAt=new Date().toISOString();
    for(const [updates,current] of [[r.reminders,state.reminders],[r.seeds,state.seeds]])for(const item of updates){item.updatedAt=r.appliedAt;if(!current.some(saved=>saved.id===item.id))item.createdAt=r.appliedAt;}
    r.result={reminderCount:r.reminders.length,plantingCount:r.seeds.filter(s=>s.plantingLocation!=='seed_vault').length,inventoryCount:r.seeds.filter(s=>s.plantingLocation==='seed_vault').length,deletedCount:r.deleteIds.length,
      recordIds:[...r.reminders,...r.seeds].map(x=>x.id)};
    return {review:r,reminders:r.reminders,seeds:r.seeds,deleteIds:r.deleteIds};
  });
}
