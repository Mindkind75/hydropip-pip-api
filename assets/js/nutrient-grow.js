const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fields = ['volume','volumeUnit','system','crop','stage','waterSource','program','fresh','customName1','customRate1','customUnit1','customName2','customRate2','customUnit2','customName3','customRate3','customUnit3'];
const sameFields=(a,b)=>Boolean(a&&b)&&fields.every(key=>JSON.stringify(a[key]??'')===JSON.stringify(b[key]??''));
export function calculatorInput(form) {
  const value = Object.fromEntries(fields.map(id=>[id,id==='fresh'?form.querySelector('#'+id).checked:form.querySelector('#'+id).value]));
  return {...value,custom:[1,2,3].map(i=>({name:value['customName'+i].trim(),rate:value['customRate'+i],unit:value['customUnit'+i]})).filter(item=>item.rate!=='' || (item.name && item.name!=='Base nutrient'))};
}
export async function initGrowCalculator({form,config,token,updateProgramUi,clearResult}) {
  const $ = id => document.getElementById(id), select=$('nutrientGrow'),status=$('nutrientDraftStatus'),save=$('reviewNutrientBatch'),dialog=$('nutrientBatchDialog'),review=$('nutrientBatchReview'),confirm=$('confirmNutrientBatch'),batchStatus=$('nutrientBatchStatus');
  let epoch=0,scope='',project=null,resources={},draftRevision=0,timer,running,editId=null,editRevision=0,calculated=null,reviewed=null,dirty=false,draftConflict=false;
  const api=async(path,method='GET',body)=>{const response=await fetch('/api/pip/'+path,{method,headers:{'Content-Type':'application/json',Authorization:'Bearer '+token},body:body?JSON.stringify(body):undefined});const data=await response.json();if(!response.ok)throw Object.assign(Error(data.message||data.error||'Save failed'),{status:response.status});return data;};
  // The signed subject is used only for the local cache namespace. Every API
  // request still verifies the signature and authorizes the grow on the server.
  const pieces=token.split('.'),payload=JSON.parse(atob(pieces[pieces.length===2?0:1].replaceAll('-','+').replaceAll('_','/'))),memberId=payload.sub;
  const key=id=>'hydropipNutrientDraftV1:'+encodeURIComponent(memberId)+':'+encodeURIComponent(id);
  const values=()=>Object.fromEntries(fields.map(id=>[id,id==='fresh'?$(id).checked:$(id).value]));
  const defaults=values();
  function apply(value){for(const id of ['system','program'])if(value[id]!=null)$(id).value=value[id];updateProgramUi();for(const id of fields){if(value[id]==null)continue;if(id==='fresh')$(id).checked=value[id]===true;else $(id).value=value[id];}}
  function remember(){if(!scope)return;try{localStorage.setItem(key(scope),JSON.stringify({fields:values(),baseRevision:draftRevision,dirty:true}));}catch{status.textContent='Device storage is unavailable. Keep this page open until the grow save finishes.';}}
  function invalidate(){calculated=null;reviewed=null;save.disabled=true;clearResult();}
  function changed(){invalidate();if(!scope||!config.access.pro)return;dirty=true;remember();status.textContent='Saving this grow’s calculator draft…';clearTimeout(timer);timer=setTimeout(flush,600);}
  async function flush(){
    if(!scope||!dirty||draftConflict)return;
    if(running){await running;if(dirty&&!draftConflict)return flush();return;}
    const captured=epoch,id=scope,snapshot=values(),baseRevision=draftRevision;
    running=(async()=>{try{
      const data=await api('projects/'+encodeURIComponent(id)+'/nutrient-draft','PATCH',{fields:snapshot,baseRevision});
      if(captured!==epoch)return;
      draftRevision=data.resources.draft.revision;dirty=!sameFields(snapshot,values());
      if(dirty){remember();timer=setTimeout(flush,0);}else{try{localStorage.removeItem(key(id));}catch{}status.textContent='Calculator draft saved to '+project.title+'. This is not a saved batch.';}
    }catch(error){if(captured!==epoch)return;draftConflict=error.status===409;status.textContent=draftConflict?'A newer draft exists on another device. Your inputs are kept here. Reload the saved draft or review replacing it.':error.message+' Your inputs are kept on this device. Use Retry draft save when connected.';$('nutrientDraftResolve').hidden=false;}
    finally{running=null;}})();return running;
  }
  function batchMarkup(batch){return '<strong>'+esc(batch.batchDate+' · '+batch.recipe.title)+'</strong><p>'+esc(batch.recipe.input.volume+' '+batch.recipe.input.volumeUnit+' prepared · '+batch.recipe.stageLabel)+'</p><ul>'+batch.recipe.components.map(item=>'<li>'+esc(item.name+': '+item.amount+' '+item.unit)+'</li>').join('')+'</ul><p class="hint">Saved '+esc(new Date(batch.savedAt).toLocaleString())+' · Recipe '+esc(batch.recipe.catalogVersion)+'</p>';}
  function renderBatches(){const list=resources.batches||[];$('savedNutrientBatches').innerHTML=list.length?list.map(batch=>'<article class="group">'+batchMarkup(batch)+'<button class="btn secondary" type="button" data-correct-batch="'+esc(batch.id)+'">Correct this batch</button> <button class="btn secondary" type="button" data-delete-batch="'+esc(batch.id)+'">Delete this batch</button></article>').join(''):'<p>No reviewed batches saved for this grow yet.</p>';}
  async function load(id){
    const captured=++epoch;clearTimeout(timer);scope=id;project=null;dirty=false;draftConflict=false;editId=null;editRevision=0;invalidate();dialog.close();$('nutrientDraftResolve').hidden=true;form.inert=true;select.disabled=true;resources={};renderBatches();apply(defaults);$('nutrientCapacity').textContent='';$('useGrowSettings').disabled=true;status.textContent=id?'Loading this grow…':'Choose a grow to save drafts and batches. Calculations without a grow are temporary.';
    const url=new URL(location.href);if(id)url.searchParams.set('projectId',id);else url.searchParams.delete('projectId');history.replaceState(null,'',url);
    document.querySelectorAll('a[href*="hydropip.com/pip"]').forEach(link=>{const target=new URL(link.href);if(id)target.searchParams.set('projectId',id);else target.searchParams.delete('projectId');link.href=target.href;});
    try{
      if(!id)return;
      const data=await Promise.all([api('projects/'+encodeURIComponent(id)),api('projects/'+encodeURIComponent(id)+'/resources')]);
      if(captured!==epoch)return;
      project=data[0].project;resources=data[1].resources;draftRevision=resources.draft?.revision||0;
      $('nutrientCapacity').textContent='Saved reservoir capacity: '+(project.systemProfile.reservoirGallons?project.systemProfile.reservoirGallons+' gallons':'not recorded')+'. Preparing a batch does not change this capacity.';
      $('useGrowSettings').disabled=!config.access.pro;
      if(resources.draft)apply(resources.draft.fields);
      let pending;try{pending=JSON.parse(localStorage.getItem(key(id)));}catch{}
      if(pending?.dirty&&sameFields(pending.fields,resources.draft?.fields)){pending=null;try{localStorage.removeItem(key(id));}catch{}}
      if(pending?.dirty){apply(pending.fields);dirty=true;draftConflict=pending.baseRevision!==draftRevision;status.textContent=draftConflict?'Your unsynced draft and the account draft differ. Review which to keep.':'Recovered your unsynced inputs. Retrying the draft save…';$('nutrientDraftResolve').hidden=!draftConflict;if(!draftConflict)timer=setTimeout(flush,0);}
      else status.textContent=resources.draft?'Restored this grow’s saved calculator draft. Calculate again to review a batch.':'No calculator draft saved for this grow. Use grow settings or enter the batch details.';
      renderBatches();
    }catch(error){if(captured===epoch){status.textContent=error.message+' Choose a grow again to retry.';}}
    finally{if(captured===epoch){form.inert=Boolean(id&&!project);select.disabled=false;}}
  }
  const listing=await api('projects');
  select.innerHTML='<option value="">Temporary calculation — no grow selected</option>'+listing.projects.filter(p=>p.status!=='archived'&&['hydropip_build','existing_system_setup'].includes(p.type)).map(p=>'<option value="'+esc(p.id)+'">'+esc(p.title)+'</option>').join('');
  select.addEventListener('change',()=>load(select.value));
  form.addEventListener('input',changed);form.addEventListener('change',changed);
  window.addEventListener('online',flush);
  $('retryNutrientDraft').addEventListener('click',async()=>{if(!scope)return;if(draftConflict){const id=scope,data=await api('projects/'+encodeURIComponent(id)+'/resources');if(id!==scope)return;const current=data.resources.draft;const fields=current?.fields||{};if(!window.confirm('The saved draft uses '+(fields.volume||'?')+' '+(fields.volumeUnit||'units')+' and '+(fields.program||'no program')+'. Replace it with the inputs currently displayed?'))return;draftRevision=current?.revision||0;draftConflict=false;}$('nutrientDraftResolve').hidden=true;flush();});
  $('reloadNutrientDraft').addEventListener('click',()=>{if(!window.confirm('Discard the unsynced inputs shown here and reload this grow’s saved draft?'))return;try{localStorage.removeItem(key(scope));}catch{}load(scope);});
  $('useGrowSettings').addEventListener('click',()=>{
    if(!project)return;const p=project.systemProfile,mapping={hydropip_tower:'hydropip',dutch_bucket:'recirculating_drip',dutch_buckets:'recirculating_drip',ebb_and_flow:'ebb_flow',aeroponics:'aeroponic',other_hydroponic:'other'};
    const settings={};const system=mapping[p.systemType]||p.systemType;if(config.systems[system])settings.system=system;
    if(p.reservoirGallons>0){settings.volume=String(p.reservoirGallons);settings.volumeUnit='gallons';}
    if(config.crops[p.dominantCropType])settings.crop=p.dominantCropType;
    if(p.nutrientBrand==='masterblend_abc')settings.program=system==='hydropip'?'hydropip_masterblend':'masterblend_label';
    else if(config.programs[p.nutrientBrand])settings.program=p.nutrientBrand;
    apply({...values(),...settings});if(p.nutrientStage&&Array.from($('stage').options).some(option=>option.value===p.nutrientStage))$('stage').value=p.nutrientStage;
    changed();status.textContent='Applied available saved grow settings. Review the program and stage, then enter the amount you will actually mix. Saving draft…';
  });
  save.addEventListener('click',async()=>{
    if(!calculated||!project)return;const captured=epoch,snapshot=calculated;save.disabled=true;
    try{const data=await api('projects/'+encodeURIComponent(scope)+'/nutrient-preview','POST',{input:snapshot.input});if(captured!==epoch||calculated!==snapshot)return;reviewed=data.recipe;
      review.innerHTML='<h3>'+esc(project.title)+'</h3><p>'+esc(reviewed.input.volume+' '+reviewed.input.volumeUnit+' prepared · '+reviewed.title+' · '+reviewed.stageLabel)+'</p><ul>'+reviewed.components.map(item=>'<li>'+esc(item.name+': '+item.amount+' '+item.unit)+'</li>').join('')+'</ul><p>Reservoir capacity stays '+esc(project.systemProfile.reservoirGallons?project.systemProfile.reservoirGallons+' gallons':'unchanged')+'.</p>';
      $('nutrientBatchDate').value=editId?(resources.batches.find(b=>b.id===editId)?.batchDate||localDate()):localDate();
      confirm.textContent=editRevision?'Save corrected batch':'Save batch to this grow';batchStatus.textContent='Review the grow, date, batch volume, and amounts before saving.';confirm.disabled=false;dialog.showModal();
    }catch(error){status.textContent=error.message;}finally{if(captured===epoch)save.disabled=!calculated;}
  });
  function localDate(){const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');}
  confirm.addEventListener('click',async()=>{
    if(!reviewed||!project)return;const captured=epoch,id=scope;confirm.disabled=true;editId ||= crypto.randomUUID();
    try{await api('projects/'+encodeURIComponent(id)+'/nutrient-batches/'+encodeURIComponent(editId),'PUT',{confirm:true,baseRevision:editRevision,batchDate:$('nutrientBatchDate').value,input:reviewed.input,reviewedRecipe:reviewed});
      if(captured!==epoch)return;resources=(await api('projects/'+encodeURIComponent(id)+'/resources')).resources;if(captured!==epoch)return;renderBatches();dialog.close();invalidate();editId=null;editRevision=0;status.textContent='Batch saved to '+project.title+'. Pip and Rhythm can now use it. Calculate again when preparing another batch.';
    }catch(error){if(captured===epoch){batchStatus.textContent=error.message;confirm.disabled=false;}}
  });
  $('closeNutrientBatch').addEventListener('click',()=>dialog.close());
  $('savedNutrientBatches').addEventListener('click',async event=>{
    const button=event.target.closest('[data-correct-batch],[data-delete-batch]');if(!button)return;
    const id=button.dataset.correctBatch||button.dataset.deleteBatch,batch=resources.batches.find(b=>b.id===id);if(!batch)return;
    if(button.dataset.correctBatch){const value={...batch.recipe.input};for(let i=1;i<=3;i++){const item=value.custom[i-1]||{};value['customName'+i]=item.name||'';value['customRate'+i]=item.rate??'';value['customUnit'+i]=item.unit||'ml/gal';}apply(value);changed();editId=id;editRevision=batch.revision;status.textContent='Correcting the saved batch dated '+batch.batchDate+'. Adjust inputs, calculate, then review the corrected batch.';form.scrollIntoView({behavior:'smooth'});return;}
    if(!window.confirm('Delete the saved batch dated '+batch.batchDate+' from '+project.title+'? Pip and Rhythm will stop using this recipe.'))return;
    const captured=epoch,grow=scope;button.disabled=true;
    try{await api('projects/'+encodeURIComponent(grow)+'/nutrient-batches/'+encodeURIComponent(id),'DELETE',{confirm:true,baseRevision:batch.revision});if(captured!==epoch)return;resources=(await api('projects/'+encodeURIComponent(grow)+'/resources')).resources;if(captured!==epoch)return;renderBatches();if(editId===id){editId=null;editRevision=0;invalidate();}status.textContent='Batch deleted. Pip and Rhythm will use the remaining saved records.';}catch(error){if(captured===epoch){status.textContent=error.message;button.disabled=false;}}
  });
  const requested=new URLSearchParams(location.search).get('projectId')||'';select.value=requested;await load(requested);
  return {calculated(recipe){calculated=recipe;save.disabled=!scope||!project||!config.access.pro;},askLink(){return 'https://www.hydropip.com/pip'+(scope?'?projectId='+encodeURIComponent(scope):'');}};
}
