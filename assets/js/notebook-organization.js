(function(){
  'use strict';
  const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n};
  const locationLabel={hydropip_tower:'HydroPip towers',nursery_for_hydropip:'Seedlings for this grow',raised_bed:'Raised bed',finished:'Finished'};
  const stageLabel={sown:'Sown',germinating:'Germinating',sprouted:'Seedling',growing:'Growing',harvest_ready:'Ready to harvest',harvesting:'Harvesting',harvested:'Harvested',failed:'Failed',finished:'Finished',scheduled:'Scheduled'};
  const isPast=s=>s.plantingLocation==='finished'||['harvested','failed','finished'].includes(s.status);
  let records=[],scope,callbacks={},initialized=false;
  function draw(){
    if(!initialized)return;
    const list=document.querySelector('#proCropList'),query=document.querySelector('#proCropSearch').value.trim().toLowerCase(),filter=document.querySelector('#proCropFilter').value;
    const visible=records.filter(s=>(filter==='all'||(filter==='past'?isPast(s):!isPast(s)))&&(!query||[s.crop,s.variety,s.notes].join(' ').toLowerCase().includes(query)));
    document.querySelector('#proCropSummary').textContent=records.filter(s=>!isPast(s)).length+' current · '+records.filter(isPast).length+' past · '+visible.length+' shown';
    list.replaceChildren();
    if(!visible.length){list.append(el('p',records.length?'No crops match this view. Try All planted crops or clear the search.':'No planted crops recorded yet. Plant from Seed Vault or record a planting you already started.','crop-empty'));return}
    visible.sort((a,b)=>String(a.crop).localeCompare(String(b.crop))||String(b.sowDate||'').localeCompare(String(a.sowDate||'')));
    for(const item of visible){
      const box=el('details',null,'notebook-unit crop-card');box.dataset.cropId=item.id;
      const summary=el('summary');summary.append(el('strong',item.crop+(item.variety?' · '+item.variety:'')),el('span',(item.plantsPlanted?item.plantsPlanted+' plants · ':'')+(stageLabel[item.status]||item.status||'Stage not recorded')+' · '+(locationLabel[item.plantingLocation]||item.plantingLocation),'unit-preview'));box.append(summary);
      const body=el('div',null,'unit-body'),facts=el('dl',null,'crop-facts');
      for(const [label,value] of [['Planted',item.plantedAt||item.sowDate||'Date not recorded'],[item.plantsPlanted?'Plants / occupied positions':'Seeds planted',item.plantsPlanted||item.seedsSown||'Quantity not recorded'],['Harvest window',item.expectedHarvestDate?item.expectedHarvestDate+(item.expectedHarvestEnd?' to '+item.expectedHarvestEnd:'')+' (estimate)':'Not estimated'],['Next succession',item.nextSuccessionDate||'Not scheduled']]){facts.append(el('dt',label),el('dd',String(value)))}
      body.append(facts);if(item.towerPositions?.length)body.append(el('p','Mapped in Plan my towers. Use that plan to record turnover.'));if(item.notes)body.append(el('p',item.notes));
      const actions=el('div',null,'crop-actions');
      if(!item.towerPositions?.length&&['hydropip_tower','nursery_for_hydropip'].includes(item.plantingLocation)){const edit=el('button','Update crop','btn');edit.type='button';edit.addEventListener('click',()=>callbacks.onEdit(item));actions.append(edit)}
      if(item.plantingLocation==='hydropip_tower'&&!isPast(item)){const locate=el('button','Choose tower & level','btn');locate.type='button';locate.onclick=()=>window.HydroPipTowerPlanner.locate(item.id);actions.append(locate);}
      const inventory=el('button','Find seed packets','btn');inventory.type='button';inventory.addEventListener('click',()=>callbacks.onVault(item.crop));actions.append(inventory);body.append(actions);box.append(body);list.append(box);
    }
  }
  window.HydroPipNotebookOrganization={
    init(options){
      callbacks=options;initialized=true;
      document.querySelector('#proCropAdd').addEventListener('click',()=>callbacks.onAdd());
      document.querySelector('#proCropSearch').addEventListener('input',draw);document.querySelector('#proCropFilter').addEventListener('change',draw);
      const planner=document.querySelector('[data-pro-panel="planner"]'),intro=planner.querySelector('.page-intro'),form=planner.querySelector('[data-rack-key="proReminderForm"]');
      form.classList.add('planner-add-task');form.querySelector('summary strong').textContent='+ Add a task';form.querySelector('.unit-preview').textContent='Title, date, and repeat';intro.after(form);
      const taskForm=form.querySelector('form');
      new MutationObserver(()=>{
        form.querySelector('summary strong').textContent=taskForm.elements.id.value?'Edit task':'+ Add a task';
        if(!taskForm.classList.contains('open'))form.open=false;
      }).observe(taskForm,{attributes:true,attributeFilter:['class']});
      const tasks=el('details',null,'notebook-unit planner-task-list');tasks.id='proPlannerTasks';const summary=el('summary');summary.append(el('strong','Tasks'),el('span','Your saved tasks','unit-preview'));tasks.append(summary);
      const body=el('div',null,'unit-body');body.append(planner.querySelector('.planner-filters'),planner.querySelector('.planner-grid .important-pane'));tasks.append(body);form.after(tasks);
      const tools=planner.querySelector('[data-rack-key="planner-tools"]');planner.append(tools);
      const oldGrid=planner.querySelector('.planner-grid');if(!oldGrid.textContent.trim())oldGrid.remove();
      // The page already has a single add-task row. Keep this older list shortcut
      // available to integrations but remove it from the visual/keyboard flow.
      const add=tasks.querySelector('[data-open-form="proReminderForm"]');if(add)add.hidden=true;
      const otherButton=tools.querySelector('[data-open-pro-page="calendar"]');if(otherButton)otherButton.closest('.notice-box').hidden=true;
      draw();
    },
    renderCrops(items,projectId){
      if(scope!==projectId){scope=projectId;if(initialized){document.querySelector('#proCropSearch').value='';document.querySelector('#proCropFilter').value='current'}}
      records=items.filter(s=>(s.plantingLocation||'seed_vault')!=='seed_vault');draw();
    },
    revealCrop(id){const item=records.find(s=>s.id===id);if(!item)return;document.querySelector('#proCropFilter').value=isPast(item)?'past':'all';document.querySelector('#proCropSearch').value='';draw();const box=[...document.querySelectorAll('[data-crop-id]')].find(n=>n.dataset.cropId===id);if(box){box.open=true;box.scrollIntoView({block:'center'});box.querySelector('summary').focus()}},
    updateTasks(items,key,today){const active=items.filter(i=>i.status==='active');const overdue=active.filter(i=>key(i)&&key(i)<today).length,due=active.filter(i=>key(i)===today).length;const summary=document.querySelector('#proPlannerTasks .unit-preview');if(summary)summary.textContent=active.length+' active · '+overdue+' overdue · '+due+' today'}
  };
})();
