import {createHash,randomUUID} from 'node:crypto';
import {conversationStorage,getProject,listProjects,listProjectConversations,listProjectMessages} from './pipMemory.js';
import {chooseConversationRoute,conversationTopics,summarizeThread,relevantMessages,topicSignals} from './conversationRouting.js';

const error=(message,statusCode=400,code='conversation_error')=>Object.assign(new Error(message),{statusCode,code});
const iso=value=>value instanceof Date?value.toISOString():String(value||'');
const thread=row=>({id:row.id,userId:row.userId||row.user_id,projectId:row.projectId||row.project_id,title:row.title,status:row.status,summary:row.summary||'',topicKey:row.topicKey||row.topic_key||null,topicSummary:row.topicSummary||row.topic_summary||{},autoCreated:row.autoCreated??row.auto_created??false,createdAt:iso(row.createdAt||row.created_at),updatedAt:iso(row.updatedAt||row.updated_at)});
const message=row=>({id:row.id,role:row.role,content:row.content,mode:row.mode,sources:row.sources||[],conversationId:row.conversationId||row.conversation_id,exchangeId:row.exchangeId||row.exchange_id||null,createdAt:iso(row.createdAt||row.created_at)});
const exchange=row=>row&&({id:row.id,userId:row.userId||row.user_id,projectId:row.projectId||row.project_id,conversationId:row.conversationId||row.conversation_id,originConversationId:row.originConversationId||row.origin_conversation_id,lastMoveFrom:row.lastMoveFrom||row.last_move_from,lastMutationId:row.lastMutationId||row.last_mutation_id,requestHash:row.requestHash||row.request_hash,status:row.status,reply:row.reply,revision:Number(row.revision||0),createdAt:iso(row.createdAt||row.created_at),updatedAt:iso(row.updatedAt||row.updated_at)});
const stateKey=(userId,id)=>JSON.stringify([userId,id]);
const safeId=id=>{if(!/^[a-zA-Z0-9_-]{8,120}$/.test(String(id||'')))throw error('A valid exchange identifier is required.');return id};
async function owned(userId,projectId){const project=await getProject({userId,projectId});if(!project)throw error('Grow not found.',404);return project}
function pro(subscription){if(!subscription?.active)throw error('Conversation organization requires Pip Pro.',402)}

let fileTransactionTail=Promise.resolve();
async function transaction(userId,projectId,run){
 const storage=await conversationStorage();
 if(!storage.pool){const previous=fileTransactionTail;let release;fileTransactionTail=new Promise(resolve=>{release=resolve});await previous;try{const state=storage.read();if(state.projects[projectId]?.userId!==userId)throw error('Grow not found.',404);state.chatExchanges||={};const result=await run({state});storage.write(state);return result}finally{release()}}
 const client=await storage.pool.connect();try{await client.query('begin');const project=await client.query('select id from pip_projects where id=$1 and user_id=$2 for update',[projectId,userId]);if(!project.rowCount)throw error('Grow not found.',404);const result=await run({client});await client.query('commit');return result}catch(e){await client.query('rollback');throw e}finally{client.release()}
}
async function threadsAt(store,userId,projectId){return store.client?(await store.client.query('select * from pip_conversations where user_id=$1 and project_id=$2 order by updated_at desc,id',[userId,projectId])).rows.map(thread):Object.values(store.state.chatThreads).filter(x=>x.userId===userId&&x.projectId===projectId).map(thread)}
async function messagesAt(store,userId,projectId,conversationId,limit=0){if(limit){if(store.client)return (await store.client.query("select * from pip_messages where user_id=$1 and project_id=$2 and conversation_id=$3 order by created_at desc,id desc limit $4",[userId,projectId,conversationId,limit])).rows.map(message).reverse();return (store.state.conversations[conversationId]||[]).slice(-limit).map(x=>({...x,conversationId}))}return store.client?(await store.client.query('select * from pip_messages where user_id=$1 and project_id=$2 and conversation_id=$3 order by created_at,id',[userId,projectId,conversationId])).rows.map(message):(store.state.conversations[conversationId]||[]).map(x=>({...x,conversationId})).sort((a,b)=>a.createdAt.localeCompare(b.createdAt)||a.id.localeCompare(b.id))}
async function exchangeAt(store,userId,id){return store.client?exchange((await store.client.query('select * from pip_chat_exchanges where user_id=$1 and id=$2',[userId,id])).rows[0]):store.state.chatExchanges[stateKey(userId,id)]||null}
async function putExchange(store,value){
 if(!store.client){store.state.chatExchanges[stateKey(value.userId,value.id)]=value;return}
 await store.client.query(`insert into pip_chat_exchanges(id,user_id,project_id,conversation_id,origin_conversation_id,last_move_from,last_mutation_id,request_hash,status,reply,revision,created_at,updated_at)
 values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13)
 on conflict(user_id,id) do update set conversation_id=excluded.conversation_id,last_move_from=excluded.last_move_from,last_mutation_id=excluded.last_mutation_id,status=excluded.status,reply=excluded.reply,revision=excluded.revision,updated_at=excluded.updated_at`,[value.id,value.userId,value.projectId,value.conversationId,value.originConversationId,value.lastMoveFrom||null,value.lastMutationId||null,value.requestHash,value.status,JSON.stringify(value.reply||null),value.revision,value.createdAt,value.updatedAt]);
}
async function refreshSummary(store,userId,projectId,id){const messages=await messagesAt(store,userId,projectId,id,12),summary=summarizeThread(messages);if(store.client)await store.client.query('update pip_conversations set topic_summary=$1::jsonb,updated_at=now() where id=$2 and user_id=$3 and project_id=$4',[JSON.stringify(summary),id,userId,projectId]);else if(store.state.chatThreads[id]){store.state.chatThreads[id].topicSummary=summary;store.state.chatThreads[id].updatedAt=new Date().toISOString()}}
async function setStatus(store,userId,id,status){if(store.client)await store.client.query('update pip_conversations set status=$1,topic_summary=\'{}\'::jsonb where user_id=$2 and id=$3',[status,userId,id]);else Object.assign(store.state.chatThreads[id],{status,topicSummary:{}})}

async function keptTopicAt(store,userId,recent){
  const previous=recent.filter(x=>x.role==='user').at(-1);if(!previous?.exchangeId)return null;
  const value=await exchangeAt(store,userId,previous.exchangeId);
  if(!value||(!['user_choice','kept_topic_followup'].includes(value.reply?.routing?.reason)&&!value.revision))return null;
  const scores=topicSignals(previous.content);return scores[0]?.score>=5&&(!scores[1]||scores[1].score<5)?scores[0].id:value.reply?.routing?.topicKey||null;
}

export async function routeConversation({userId,projectId,conversationId,message:content,hasImage,imageIntent,subscription}={}){
 pro(subscription);await owned(userId,projectId);
 const storage=await conversationStorage(),store=storage.pool?{client:storage.pool}:{state:storage.read()};
 const conversations=await threadsAt(store,userId,projectId);if(!conversations.some(x=>x.id===conversationId&&x.status==='active'))throw error('Conversation not found.',404);
 // Older custom topics acquire a current extractive summary without changing titles.
 for(const item of conversations)if(!item.topicSummary?.text){const recent=storage.pool?(await storage.pool.query('select * from pip_messages where user_id=$1 and project_id=$2 and conversation_id=$3 order by created_at desc,id desc limit 12',[userId,projectId,item.id])).rows.map(message).reverse():(storage.read().conversations[item.id]||[]).slice(-12);item.topicSummary=summarizeThread(recent)}
 const recent=await listProjectMessages({userId,projectId,conversationId,limit:3});
 return chooseConversationRoute({message:content,hasImage,imageIntent,conversations,currentConversationId:conversationId,projectId,projects:await listProjects({userId}),hasRecentExchange:recent.some(x=>x.role==='user'),keptTopicKey:await keptTopicAt(store,userId,recent)});
}

export async function claimChatExchange({userId,projectId,conversationId,exchangeId,content,image,choice,subscription}={}){
 pro(subscription);safeId(exchangeId);await owned(userId,projectId);const projects=await listProjects({userId});
 const requestHash=createHash('sha256').update(JSON.stringify({projectId,conversationId,content,image:image?.dataUrl||''})).digest('hex');
 return transaction(userId,projectId,async store=>{
  const old=await exchangeAt(store,userId,exchangeId);if(old){if(old.projectId!==projectId||old.requestHash!==requestHash)throw error('This exchange identifier was already used for another question.',409);return {existing:true,exchange:old}}
  let threads=await threadsAt(store,userId,projectId),origin=threads.find(x=>x.id===conversationId&&x.status==='active');if(!origin)throw error('Conversation not found.',404);
  let destination,route;
  if(choice?.conversationId){destination=threads.find(x=>x.id===choice.conversationId);if(!destination)throw error('Destination conversation not found.',404);if(destination.status!=='active'){if(!choice.reopen)throw error('Confirm reopening the archived conversation.',409);await setStatus(store,userId,destination.id,'active')}route={decision:destination.id===origin.id?'keep':'route',reason:'user_choice'}}
  else {
   const recent=await messagesAt(store,userId,projectId,conversationId,3);
   for(const item of threads)if(!item.topicSummary?.text)item.topicSummary=summarizeThread(await messagesAt(store,userId,projectId,item.id,12));
   route=chooseConversationRoute({message:content,hasImage:Boolean(image),imageIntent:image?.intent,conversations:threads,currentConversationId:conversationId,projectId,projects,hasRecentExchange:recent.some(x=>x.role==='user'),keptTopicKey:await keptTopicAt(store,userId,recent)});
   if(route.decision.startsWith('ask'))return {needsChoice:true,route};
   if(route.decision==='create'){
    const now=new Date().toISOString();destination={id:'chat_'+randomUUID(),userId,projectId,title:route.title,status:'active',summary:'',topicKey:route.topicKey,topicSummary:{},autoCreated:true,createdAt:now,updatedAt:now};
    if(store.client)await store.client.query('insert into pip_conversations(id,user_id,project_id,title,status,summary,topic_key,auto_created,created_at,updated_at) values($1,$2,$3,$4,\'active\',\'\',$5,true,$6,$6)',[destination.id,userId,projectId,destination.title,destination.topicKey,now]);else{store.state.chatThreads[destination.id]=destination;store.state.conversations[destination.id]=[]}
   }else destination=threads.find(x=>x.id===route.conversationId);
  }
  const now=new Date().toISOString(),value={id:exchangeId,userId,projectId,conversationId:destination.id,originConversationId:origin.id,lastMoveFrom:destination.id!==origin.id?origin.id:null,requestHash,status:'running',reply:null,revision:0,createdAt:now,updatedAt:now};await putExchange(store,value);return{existing:false,exchange:value,destination,route};
 });
}

export async function finishChatExchange({userId,projectId,exchangeId,reply,status='completed'}={}){
 return transaction(userId,projectId,async store=>{const value=await exchangeAt(store,userId,exchangeId);if(!value||value.projectId!==projectId)throw error('Exchange not found.',404);value.status=status;value.updatedAt=new Date().toISOString();value.reply=reply;value.reply.exchange=publicExchange(value);await putExchange(store,value);await refreshSummary(store,userId,projectId,value.conversationId);return value.reply});
}
export function publicExchange(value){return{id:value.id,conversationId:value.conversationId,originConversationId:value.originConversationId,revision:value.revision,canUndo:Boolean(value.lastMoveFrom),status:value.status}}
export async function getChatExchange({userId,projectId,exchangeId}={}){await owned(userId,projectId);const s=await conversationStorage(),value=await exchangeAt(s.pool?{client:s.pool}:{state:s.read()},userId,safeId(exchangeId));if(!value||value.projectId!==projectId)throw error('Exchange not found.',404);return {exchange:publicExchange(value),reply:value.reply}}

export async function messagePage({userId,projectId,conversationId,query='',before,limit=30,includeArchived=false}={}){
 await owned(userId,projectId);const storage=await conversationStorage(),store=storage.pool?{client:storage.pool}:{state:storage.read()},threads=await threadsAt(store,userId,projectId);
 if(conversationId&&!threads.some(x=>x.id===conversationId&&(includeArchived||x.status==='active')))throw error('Conversation not found.',404);
 const size=Math.max(1,Math.min(100,Number(limit)||30));let cursor;
 if(before){try{cursor=JSON.parse(Buffer.from(before,'base64url').toString());if(!cursor.id||!Number.isFinite(Date.parse(cursor.date)))throw Error()}catch{throw error('Invalid history cursor.')}}
 let rows;
 if(storage.pool){const params=[userId,projectId],conditions=['m.user_id=$1','m.project_id=$2'];if(conversationId){params.push(conversationId);conditions.push('m.conversation_id=$'+params.length)}if(!includeArchived)conditions.push("c.status='active'");if(query){params.push('%'+String(query).slice(0,200).replace(/[\\%_]/g,'\\$&')+'%');conditions.push('m.content ilike $'+params.length)}if(cursor){params.push(cursor.date,cursor.id);conditions.push('(m.created_at,m.id)<($'+(params.length-1)+',$'+params.length+')')}params.push(size+1);rows=(await storage.pool.query('select m.* from pip_messages m join pip_conversations c on c.id=m.conversation_id where '+conditions.join(' and ')+' order by m.created_at desc,m.id desc limit $'+params.length,params)).rows.map(message)}
 else{const allowed=threads.filter(x=>(!conversationId||x.id===conversationId)&&(includeArchived||x.status==='active'));rows=allowed.flatMap(x=>(storage.read().conversations[x.id]||[]).map(item=>({...item,conversationId:x.id}))).filter(x=>(!query||x.content.toLowerCase().includes(String(query).toLowerCase()))&&(!cursor||x.createdAt<cursor.date||x.createdAt===cursor.date&&x.id<cursor.id)).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)||b.id.localeCompare(a.id)).slice(0,size+1)}
 const hasMore=rows.length>size;rows=rows.slice(0,size);const last=rows.at(-1);return{messages:rows.reverse().map(row=>({...row,exchangeId:row.exchangeId||(row.role==='user'?'legacy_'+row.id:null),conversationTitle:threads.find(x=>x.id===row.conversationId)?.title||'Conversation'})),nextCursor:hasMore?Buffer.from(JSON.stringify({date:last.createdAt,id:last.id})).toString('base64url'):null};
}

export async function retrieveConversationMemory({userId,projectId,conversationId,question}={}){
 await owned(userId,projectId);const storage=await conversationStorage();let messages;
 if(storage.pool){const terms=[...new Set(String(question||'').toLowerCase().match(/[a-z0-9]{3,}/g)||[])].filter(x=>!['the','and','what','did','say','about','with','have','you','how'].includes(x)).slice(0,12);if(!terms.length)return[];messages=(await storage.pool.query("select m.* from pip_messages m join pip_conversations c on c.id=m.conversation_id where m.user_id=$1 and m.project_id=$2 and c.status='active' and m.role='user' and ("+terms.map((_,i)=>'m.content ilike $'+(i+3)).join(' or ')+') order by m.created_at desc,m.id desc limit 80',[userId,projectId,...terms.map(x=>'%'+x+'%')])).rows.map(message)}
 else{const state=storage.read();messages=Object.values(state.chatThreads).filter(x=>x.userId===userId&&x.projectId===projectId&&x.status==='active').flatMap(x=>(state.conversations[x.id]||[]).map(item=>({...item,conversationId:x.id})))}
 const ranked=relevantMessages(question,messages);return ranked.sort((a,b)=>Number(b.conversationId===conversationId)-Number(a.conversationId===conversationId));
}

export async function moveExchange({userId,projectId,exchangeId,destinationId,topicKey,revision,mutationId,undo=false,reopen=false,subscription}={}){
 pro(subscription);safeId(exchangeId);safeId(mutationId);
 return transaction(userId,projectId,async store=>{
  let legacyRows=null;let value=await exchangeAt(store,userId,exchangeId);const threads=await threadsAt(store,userId,projectId);
  if(!value&&exchangeId.startsWith('legacy_')){
   const anchorId=exchangeId.slice(7);let source,rows;
   for(const candidate of threads){const items=await messagesAt(store,userId,projectId,candidate.id),start=items.findIndex(x=>x.id===anchorId&&x.role==='user');if(start>=0){source=candidate;const next=items.findIndex((x,i)=>i>start&&x.role==='user');rows=items.slice(start,next<0?undefined:next);break}}
   if(!source)throw error('Exchange not found.',404);const now=new Date().toISOString();value={id:exchangeId,userId,projectId,conversationId:source.id,originConversationId:source.id,requestHash:'legacy',status:'completed',reply:null,revision:0,createdAt:rows[0].createdAt,updatedAt:now};
   legacyRows=rows;
  }
  if(!value||value.projectId!==projectId)throw error('Exchange not found.',404);if(value.status==='running')throw error('Wait until Pip finishes this exchange before moving it.',409);
  if(value.lastMutationId===mutationId)return{exchange:publicExchange(value)};
  if(Number(revision)!==value.revision)throw error('This exchange was changed elsewhere. Refresh it before moving.',409);
  let destination=threads.find(x=>x.id===(undo?value.lastMoveFrom:destinationId));
  if(!destination&&!undo&&!destinationId&&topicKey){
   const topic=conversationTopics.find(x=>x.id===topicKey);if(!topic)throw error('Unknown conversation subject.');
   const matching=threads.filter(x=>x.topicKey===topicKey||x.summary==='starter:'+topicKey||x.title===topic.title),active=matching.filter(x=>x.status==='active');
   if(active.length>1)throw error('More than one thread now matches. Refresh the organization preview.',409);
   destination=active[0];if(!destination&&matching.length)throw error('A matching thread is archived. Reopen it explicitly before moving.',409);
   if(!destination){const now=new Date().toISOString();destination={id:'chat_'+randomUUID(),userId,projectId,title:topic.title,status:'active',summary:'',topicKey,autoCreated:true,topicSummary:{},createdAt:now,updatedAt:now};if(store.client)await store.client.query('insert into pip_conversations(id,user_id,project_id,title,status,summary,topic_key,auto_created,created_at,updated_at) values($1,$2,$3,$4,\'active\',\'\',$5,true,$6,$6)',[destination.id,userId,projectId,destination.title,topicKey,now]);else{store.state.chatThreads[destination.id]=destination;store.state.conversations[destination.id]=[]}}
  }
  if(!destination)throw error('Destination conversation not found.',404);
  const from=value.conversationId;
  if(destination.status!=='active'&&!reopen&&!undo)throw error('Confirm reopening this conversation.',409);
  if(!store.client&&destination.id!==from){const moved=legacyRows||(store.state.conversations[from]||[]).filter(x=>x.exchangeId===exchangeId),kept=[...(store.state.conversations[destination.id]||[]),...moved].sort((a,b)=>a.createdAt.localeCompare(b.createdAt)||a.id.localeCompare(b.id)).slice(-200);if(moved.some(x=>!kept.some(y=>y.id===x.id)))throw error('This local conversation is at its history limit. Choose a newer or empty destination to preserve this exchange.',409);}
  if(legacyRows){if(store.client)await store.client.query('update pip_messages set exchange_id=$1 where user_id=$2 and project_id=$3 and id=any($4::text[])',[exchangeId,userId,projectId,legacyRows.map(x=>x.id)]);else legacyRows.forEach(row=>{store.state.conversations[from].find(x=>x.id===row.id).exchangeId=exchangeId});await putExchange(store,value);}
  if(destination.status!=='active')await setStatus(store,userId,destination.id,'active');
  if(destination.id===from)return{exchange:publicExchange(value)};
  if(store.client)await store.client.query('update pip_messages set conversation_id=$1 where user_id=$2 and project_id=$3 and exchange_id=$4',[destination.id,userId,projectId,exchangeId]);else{const moved=(store.state.conversations[from]||[]).filter(x=>x.exchangeId===exchangeId);store.state.conversations[from]=(store.state.conversations[from]||[]).filter(x=>x.exchangeId!==exchangeId);store.state.conversations[destination.id]=[...(store.state.conversations[destination.id]||[]),...moved].sort((a,b)=>a.createdAt.localeCompare(b.createdAt)||a.id.localeCompare(b.id)).slice(-200)}
  value.conversationId=destination.id;value.lastMoveFrom=from;value.lastMutationId=mutationId;value.revision++;value.updatedAt=new Date().toISOString();
  if(value.reply){value.reply.exchange=publicExchange(value);if(value.reply.projectMemory){value.reply.projectMemory.conversationId=destination.id;value.reply.projectMemory.conversationTitle=destination.title}}
  await putExchange(store,value);await refreshSummary(store,userId,projectId,from);await refreshSummary(store,userId,projectId,destination.id);
  if(threads.find(x=>x.id===from)?.autoCreated&&!(await messagesAt(store,userId,projectId,from,1)).length)await setStatus(store,userId,from,'archived');
  return{exchange:publicExchange(value),destination};
 });
}

export async function previewConversationOrganization({userId,projectId,conversationId,subscription}={}){
 pro(subscription);await owned(userId,projectId);const storage=await conversationStorage(),store=storage.pool?{client:storage.pool}:{state:storage.read()},threads=await threadsAt(store,userId,projectId),source=threads.find(x=>x.id===conversationId);if(!source)throw error('Conversation not found.',404);
 const messages=await messagesAt(store,userId,projectId,conversationId),groups=[];let previousRoute;
 for(const item of messages.filter(x=>x.role==='user')){
  const route=chooseConversationRoute({message:item.content,conversations:threads,currentConversationId:conversationId,hasRecentExchange:true});
  const effective=route.reason==='followup'&&previousRoute?previousRoute:route;previousRoute=effective;
  if(effective.decision==='route'||effective.decision==='create'){
   const id=item.exchangeId||'legacy_'+item.id,stored=await exchangeAt(store,userId,id);groups.push({exchangeId:id,revision:stored?.revision||0,question:item.content,createdAt:item.createdAt,destinationId:effective.conversationId||null,topicKey:effective.topicKey,title:effective.title||threads.find(x=>x.id===effective.conversationId)?.title});
  }
 }
 return{conversationId,groups};
}
