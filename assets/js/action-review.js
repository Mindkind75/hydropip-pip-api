const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');};
export function initActionReview({request,context,onSaved,openSource}){
  const dialog=document.createElement('dialog');dialog.className='grow-action-dialog';dialog.setAttribute('aria-labelledby','growActionTitle');
  dialog.innerHTML='<div class="grow-memory-head"><h2 id="growActionTitle">Review grow action</h2><button class="btn" type="button" data-action-close>Close</button></div><div data-action-body></div><p role="status" data-action-status></p>';
  document.body.append(dialog);
  const body=dialog.querySelector('[data-action-body]'),status=dialog.querySelector('[data-action-status]');
  let owner,projectId,version=0,review,action;
  const matches=()=>owner===context().memberId&&projectId===context().projectId;
  const failScope=()=>{if(!matches()){reset();throw Error('The selected account or grow changed. Reopen this action in its original grow.');}};
  const path=()=>'/api/pip/projects/'+encodeURIComponent(projectId)+'/action-reviews';
  function reset(){version++;review=null;action=null;dialog.close();body.textContent='';}
  dialog.querySelector('[data-action-close]').addEventListener('click',()=>{if(!dialog.querySelector('[data-saving]'))reset();});
  dialog.addEventListener('cancel',event=>{if(dialog.querySelector('[data-saving]'))event.preventDefault();else reset();});
  function begin(){reset();const ctx=context();if(!ctx.memberId||!ctx.projectId)throw Error('Select a grow first.');owner=ctx.memberId;projectId=ctx.projectId;status.textContent='';dialog.showModal();return version;}
  function success(){
    body.innerHTML='<h3>Saved to '+esc(review.grow)+'</h3><p>Your reviewed changes are saved. Pip and Rhythm can use the updated records.</p><button class="btn primary" type="button" data-open-rhythm>Open Rhythm</button>';
    status.textContent='Saved successfully.';
    body.querySelector('[data-open-rhythm]').addEventListener('click',()=>{if(!matches())return reset();dialog.close();openSource('rhythm',projectId);});
  }
  function render(){
    if(review.appliedAt){success();return;}
    body.innerHTML='<p class="action-grow">Grow: <strong>'+esc(review.grow)+'</strong></p><h3>'+esc(review.title)+'</h3><p>'+esc(review.notice)+'</p><div class="action-diff">'+review.rows.map(r=>'<article><strong>'+esc(r.label)+'</strong><p><span>Before</span> '+esc(r.before)+'</p><p><span>After</span> '+esc(r.after)+'</p></article>').join('')+'</div><div class="action-buttons"><button class="btn primary" type="button" data-action-confirm>Save reviewed changes</button><button class="btn" type="button" data-action-cancel>Cancel</button></div>';
    body.querySelector('[data-action-cancel]').addEventListener('click',reset);
    body.querySelector('[data-action-confirm]').addEventListener('click',save);
    status.textContent='Review the grow and every change before saving.';
  }
  async function prepare(value,started=version,refresh=false){
    action={...value,proposalId:value.proposalId||crypto.randomUUID()};
    body.innerHTML='<p>Loading the current records for review…</p>';status.textContent='';
    try{
      failScope();const data=await request(path(),{method:'POST',body:JSON.stringify({action,refresh,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})});
      if(started!==version)return;failScope();review=data.review;render();
    }catch(error){if(started!==version)return;status.textContent=error.message;body.innerHTML='<button class="btn" type="button" data-review-retry>Retry review</button>';body.querySelector('button').addEventListener('click',()=>prepare(action,version,refresh));}
  }
  async function save(event){
    const started=version,button=event.currentTarget;
    try{
      failScope();button.disabled=true;button.dataset.saving='true';body.querySelector('[data-action-cancel]').disabled=true;status.textContent='Saving reviewed changes…';
      const data=await request(path()+'/'+encodeURIComponent(review.id)+'/apply',{method:'POST',body:JSON.stringify({confirm:true,reviewRevision:review.revision})});
      if(started!==version)return;failScope();review=data.review;success();
      // A successful write remains successful even if the follow-up refresh fails.
      try{await onSaved(projectId);}catch{if(started===version)status.textContent='Saved. Reopen Rhythm to refresh its display.';}
    }catch(error){
      if(started!==version)return;delete button.dataset.saving;status.textContent=error.message;
      body.querySelector('[data-action-cancel]').disabled=false;button.disabled=false;
      if(error.status===409){button.textContent='Review current records';button.replaceWith(button.cloneNode(true));body.querySelector('[data-action-confirm]').addEventListener('click',()=>prepare(action,version,true));}
    }
  }
  async function open(value){const started=begin();await prepare(value,started);}
  function planting(seed){
    begin();const editing=Boolean(seed?.id&&seed.plantingLocation&&seed.plantingLocation!=='seed_vault');
    body.innerHTML='<p class="action-grow">Grow: <strong>'+esc(context().title)+'</strong></p><form data-planting-form><h3>Plant in this grow</h3><p>Record seeds already planted. For a future planting date, add a Planner task.</p><label>Crop<input name="crop" required maxlength="80" value="'+esc(seed?.crop||'')+'" '+(seed?.id?'readonly':'')+'></label><label>Variety<input name="variety" maxlength="120" value="'+esc(seed?.variety||'')+'" '+(seed?.id?'readonly':'')+'></label><label>Date planted<input name="sowDate" type="date" required max="'+today()+'" value="'+today()+'"></label><label>Seeds planted<input name="seedsSown" type="number" required min="1" max="10000" step="1" placeholder="Number of seeds"></label><label>Planted in<select name="plantingLocation"><option value="hydropip_tower">HydroPip towers</option><option value="nursery_for_hydropip">Started for this grow</option></select></label><label>Planting note (optional)<textarea name="notes" maxlength="1000"></textarea></label><p>Owned seed packs stay in the Seed Vault. This creates a separate planting record.</p><button class="btn primary" type="submit">Review planting</button></form>';
    const form=body.querySelector('form');
    if(editing){
      form.querySelector('h3').textContent='Update this planting';
      form.elements.sowDate.value=seed.sowDate||today();form.elements.seedsSown.value=seed.seedsSown||'';form.elements.plantingLocation.value=seed.plantingLocation;form.elements.notes.value=seed.notes||'';
      const label=document.createElement('label');label.textContent='Current stage';const select=document.createElement('select');select.name='status';
      for(const stage of ['sown','germinating','sprouted','growing','harvest_ready','harvesting','harvested','failed','finished']){const option=new Option(stage.replaceAll('_',' '),stage);select.add(option)}
      select.value=seed.status||'sown';label.append(select);form.elements.notes.closest('label').before(label);
      form.querySelector('p:last-of-type').textContent='This updates the existing planting. Owned seed packs stay unchanged.';
    }
    form.addEventListener('submit',event=>{event.preventDefault();const input=Object.fromEntries(new FormData(event.currentTarget));if(seed?.id)input.seedId=seed.id;prepare({type:'planting',operation:editing?'update':'add',planting:input});});
  }
  return {open,planting,reset};
}
