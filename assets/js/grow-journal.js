(function(){
'use strict';
const el=(tag,text,attrs={})=>{const n=document.createElement(tag);if(text)n.textContent=text;for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);return n};
let a,scope='',generation=0,searchGeneration=0,readings=[],cursor=null;
let noteSearch,noteList,noteCount,recent,results,search,status,more,all,dialog;
const context=()=>JSON.stringify(a.context());
const path=()=>'/api/pip/projects/'+encodeURIComponent(a.context().project)+'/history';
const date=value=>value?new Date(/^\d{4}-\d{2}-\d{2}$/.test(value)?value+'T12:00:00':value).toLocaleDateString():'';
function button(text,run){const b=el('button',text,{type:'button',class:'btn'});b.addEventListener('click',()=>Promise.resolve(run()).catch(e=>{status.textContent=e.message}));return b}
function unit(title,id){const box=el('details',null,{class:'notebook-unit',id});box.append(el('summary',title),el('div',null,{class:'unit-body'}));return box}
function drawNotes(){
 const q=noteSearch.value.trim().toLowerCase();const filtered=readings.filter(x=>Object.values(x).some(v=>typeof v==='string'&&v.toLowerCase().includes(q)));
 noteCount.textContent='Grow Notes · '+readings.length+' saved';noteList.replaceChildren();
 for(const item of filtered){const card=el('details',null,{class:'record journal-note','data-reading-id':item.id});const summary=el('summary');summary.append(el('strong',(item.plantResponse||item.note||item.cropsGrowing||'Plant note').slice(0,120)),el('small',date(item.takenAt||item.createdAt)+(item.cropsGrowing?' · '+item.cropsGrowing:'')));card.append(summary);const body=el('div',null,{class:'unit-body'});
 for(const [key,label] of Object.entries({cropsGrowing:'Plants',plantDevelopmentStage:'Stage',plantCondition:'Condition',leafColor:'Leaf color / growth',issuePressure:'Pests, damage, or stress',plantResponse:'Observation',note:'Next check'})){if(item[key]){body.append(el('strong',label),el('p',item[key]))}}card.append(body);noteList.append(card)}
 if(!filtered.length)noteList.append(el('p',readings.length?'No notes match your search.':'No notes yet. Add your first observation above.'));
}
function messageCard(item){const row=el('article',null,{class:'history-item'});row.append(el('strong',item.conversationTitle||'Pip conversation'),el('small',(item.role==='assistant'?'Pip':'You')+' · '+date(item.createdAt)),el('p',item.content.slice(0,220)+(item.content.length>220?'…':'')));if(item.id)row.append(button('Open in conversation',()=>openMessage(item.id)));return row}
async function openMessage(id){
 const snapshot=context();const data=await a.request(path()+'?around='+encodeURIComponent(id)+'&archived=1');if(snapshot!==context())return;
 dialog.replaceChildren(el('h2',data.conversation.title,{id:'journalConversationTitle'}),el('p',data.conversation.status==='archived'?'Archived conversation · saved context':'Saved conversation · surrounding messages'));
 dialog.append(button('Close',()=>dialog.close()));const list=el('div',null,{class:'journal-conversation'});let target;
 for(const item of data.messages){const row=el('article',null,{class:'history-item',tabindex:'-1'});row.append(el('strong',item.role==='assistant'?'Pip':'You'),el('small',date(item.createdAt)),el('p',item.content));if(item.id===data.anchorId){row.classList.add('journal-highlight');row.setAttribute('aria-label','Selected message');target=row}list.append(row)}dialog.append(list);
 if(data.conversation.status==='active'){const link=el('a','Continue in Ask Pip',{class:'btn',href:a.chatUrl(data.conversation.id),target:'_top'});link.addEventListener('click',()=>a.onContinue(data.conversation.id));dialog.append(link)}
 dialog.showModal();requestAnimationFrame(()=>{target?.scrollIntoView({block:'center'});target?.focus({preventScroll:true})});
}
async function findHistory(append=false){
 const snapshot=context(),run=++searchGeneration;status.textContent='Searching saved conversations…';more.disabled=true;
 try{const data=await a.request(path()+'?archived=1&limit=20&q='+encodeURIComponent(search.value.trim())+(append&&cursor?'&before='+encodeURIComponent(cursor):''));if(run!==searchGeneration||snapshot!==context())return;if(!append)results.replaceChildren();for(const item of [...data.messages].reverse())results.append(messageCard(item));cursor=data.nextCursor;more.hidden=!cursor;status.textContent=results.children.length?'Showing '+results.children.length+' matching entries.':'No saved messages match your search.'}catch(e){if(run===searchGeneration&&snapshot===context()){status.textContent='Could not load history. '+e.message;more.hidden=true}}finally{if(run===searchGeneration)more.disabled=false}
}
window.HydroPipJournal={
 init(adapter){a=adapter;const panel=document.querySelector('[data-pro-panel="log"]'),grid=panel.querySelector('.workspace-grid'),form=panel.querySelector('[data-rack-key="proReadingForm"]');form.querySelector('summary strong').textContent='+ Add a note';panel.querySelector('.page-intro').after(form);
 const notes=unit('Grow Notes','journalNotes');noteCount=notes.firstChild;noteSearch=el('input',null,{type:'search','aria-label':'Search grow notes',placeholder:'Search notes, crops, pests, or dates'});noteList=document.querySelector('#proGrowLogList');notes.lastChild.append(noteSearch,noteList);form.after(notes);grid.remove();
 const history=el('section',null,{class:'journal-history'});history.append(el('h3','Pip History'),el('p','Recent saved messages from this grow. Open an entry to see it in context. Photo checks keep Pip\'s response, not the original image.'));recent=el('div',null,{id:'proHistory'});history.append(recent);all=unit('View all history & search','journalHistory');search=el('input',null,{type:'search','aria-label':'Search Pip history',placeholder:'Search all saved messages, including archives'});const searchForm=el('form',null,{class:'journal-search'});const submit=el('button','Search',{type:'submit',class:'btn'});searchForm.append(search,submit);status=el('p',null,{role:'status'});results=el('div',null,{id:'journalHistoryResults'});more=button('Older entries',()=>findHistory(true));more.hidden=true;all.lastChild.append(searchForm,status,results,more);history.append(all);panel.append(history);
 dialog=el('dialog',null,{class:'conversation-dialog journal-dialog','aria-labelledby':'journalConversationTitle'});document.body.append(dialog);
 noteSearch.addEventListener('input',drawNotes);searchForm.addEventListener('submit',e=>{e.preventDefault();findHistory()});all.addEventListener('toggle',()=>{if(all.open&&!results.children.length)findHistory()});
 const noteForm=form.querySelector('form');new MutationObserver(()=>{if(!noteForm.classList.contains('open'))form.open=false}).observe(noteForm,{attributes:true,attributeFilter:['class']});
 },
 revealNote(id){noteSearch.value="";drawNotes();const target=[...noteList.children].find(n=>n.dataset.readingId===id);if(target){document.querySelector("#journalNotes").open=true;target.open=true;target.scrollIntoView({block:"center"});target.querySelector("summary").focus()}},
 notes(items){readings=items.slice().sort((x,y)=>String(y.takenAt||y.createdAt).localeCompare(String(x.takenAt||x.createdAt)));drawNotes()},
 async refresh(){const snapshot=context(),run=++generation;if(scope!==snapshot){scope=snapshot;++searchGeneration;noteSearch.value='';search.value='';results.replaceChildren();recent.replaceChildren();status.textContent='';cursor=null;more.hidden=true;all.open=false;document.querySelector('#journalNotes').open=false;dialog.close();drawNotes()}if(!a.context().project)return;
 try{const data=await a.request(path()+'?limit=3&archived=1');if(run!==generation||snapshot!==context())return;recent.replaceChildren();for(const item of [...data.messages].reverse())recent.append(messageCard(item));if(!data.messages.length)recent.append(el('p','No saved Pip conversations yet.'));if(all.open)findHistory()}catch(e){if(run===generation&&snapshot===context())recent.replaceChildren(el('p','History could not load. Open View all history to try again.'))}
 }
};
})();
