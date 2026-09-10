import { dateInZone } from '../assets/js/reminder-schedule.js';
import {getProject,listProjectReminders,listProjectSeeds,listProjectReadings,listProjectMessages} from './pipMemory.js';
import {getGrowResources,resourceConflicts} from './growResources.js';
import {getSeedPlanningDashboard} from './plantingCalendar.js';
import {buildRhythmOverview} from './rhythm.js';

export async function growWorkspace({userId,projectId,now=new Date(),timezone='UTC'}){
  try{new Intl.DateTimeFormat('en',{timeZone:timezone}).format()}catch{throw Object.assign(Error('Invalid time zone.'),{statusCode:400})}
  const project=await getProject({userId,projectId});
  if(!project)return null;
  const args={userId,projectId};
  const [reminders,seeds,readings,resources,messages]=await Promise.all([
    listProjectReminders(args),listProjectSeeds(args),listProjectReadings(args),getGrowResources(args),
    listProjectMessages({...args,allConversations:true,limit:12})
  ]);
  const p=project.systemProfile;
  const dashboard=p.growZone?getSeedPlanningDashboard({growZone:p.growZone,location:p.location,areaType:p.areaType,date:dateInZone(now,timezone)}):null;
  const rhythm=buildRhythmOverview({project,reminders,seeds,readings,seedDashboard:dashboard,now,timezone});
  const conflicts=resourceConflicts(p,resources);
  rhythm.latestSavedBatch=resources.batches[0]||null;rhythm.batchConflicts=conflicts;
  const changes=[
    ...reminders.filter(r=>r.lastCompletedAt).map(r=>({label:'Completed task',title:r.title,date:r.lastCompletedAt,source:'planner',sourceId:r.id})),
    ...reminders.filter(r=>!r.lastCompletedAt).map(r=>({label:'Saved task',title:r.title,date:r.updatedAt||r.createdAt,source:'planner',sourceId:r.id})),
    ...seeds.map(s=>({label:s.plantingLocation==='seed_vault'?'Seed inventory':'Planting record',title:s.crop+(s.variety?' · '+s.variety:''),date:s.updatedAt||s.createdAt,source:'seeds',sourceId:s.id})),
    ...readings.map(r=>({label:'Plant note',title:r.note||r.plantResponse||r.plantCondition||'Saved plant check',date:r.createdAt||r.takenAt,source:'log',sourceId:r.id})),
    ...resources.batches.map(b=>({label:'Reviewed nutrient batch',title:b.recipe.input.volume+' '+b.recipe.input.volumeUnit+' · '+b.recipe.title,date:b.savedAt,source:'nutrients',sourceId:b.id}))
  ].filter(r=>r.date).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6);
  const overdue=reminders.filter(r=>r.status==='active'&&dateKey(r,timezone)<dateKey({dueAt:now.toISOString()},timezone));
  const due=reminders.filter(r=>r.status==='active'&&dateKey(r,timezone)===dateKey({dueAt:now.toISOString()},timezone));
  rhythm.summary.overdueCount=overdue.length;rhythm.summary.dueTodayCount=due.length;
  overdue.sort((a,b)=>dateKey(a,timezone).localeCompare(dateKey(b,timezone)));due.sort((a,b)=>String(a.dueAt||a.dueDate).localeCompare(String(b.dueAt||b.dueDate)));
  const first=overdue[0]||due[0],check=rhythm.transferChecks[0];
  rhythm.nextStep=conflicts.length?{title:'Review conflicting saved records',detail:conflicts[0],source:'memory'}:
    first?{title:first.title,detail:overdue.includes(first)?'This saved task is overdue. Open it and confirm what has been done.':'This task is due today.',source:'planner',sourceId:first.id}:
    check?{title:check.title,detail:check.detail,source:'seeds',sourceId:check.seedId}:
    {title:'Record a quick plant check',detail:'Save what you see today so Pip can use a recent observation.',source:'log'};
  rhythm.recentChanges=changes;
  return {projectId,reminders,seeds,readings,messages,dashboard,seedPlanError:dashboard?null:'Add the USDA grow zone on Profile to estimate sowing windows.',rhythm};
}
function dateKey(item,timeZone='UTC'){
  if(!item.dueAt)return item.dueDate||'9999-12-31';
  try{return new Intl.DateTimeFormat('en-CA',{timeZone:timeZone||'UTC',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(item.dueAt));}
  catch{return String(item.dueAt).slice(0,10);}
}
