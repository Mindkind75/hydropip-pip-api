(function(){
  'use strict';
  const hiddenByScope=new Map();
  const el=(tag,text,className)=>{const node=document.createElement(tag);if(text)node.textContent=text;if(className)node.className=className;return node};
  function link(label,url,sponsored=false){
    const a=el('a',label,'btn');a.href=url;a.target='_blank';a.rel=sponsored?'sponsored noopener noreferrer':'noopener noreferrer';return a;
  }
  window.HydroPipPestWatch={render(root,data,{memberId,projectId,onRecord}={}){
    const wasOpen=Boolean(root.querySelector('.pest-watch-rack')?.open);
    root.replaceChildren();
    if(!data)return;
    const scope=JSON.stringify([memberId,projectId,data.asOf]);
    let hidden=hiddenByScope.get(scope);
    if(!hidden){try{hidden=new Set(JSON.parse(sessionStorage.getItem('pipPestWatch:'+scope)||'[]'))}catch{hidden=new Set()}hiddenByScope.set(scope,hidden)}
    const intro=el('div',null,'pest-watch-intro');
    intro.append(el('p',data.notice));root.append(intro);
    const visible=data.items.filter(item=>!hidden.has(item.id));
    root.append(el('p',visible.length?data.message:hidden.size&&data.items.length?'Reminders hidden for this visit.':data.message,'pest-watch-context'));
    const remember=()=>{try{sessionStorage.setItem('pipPestWatch:'+scope,JSON.stringify([...hidden]))}catch{}};
    for(const item of visible){
      const card=el('details',null,'pest-watch-card'),summary=el('summary');
      summary.append(el('span',item.label,'pest-watch-label'),el('strong',item.title),el('span',item.crops.join(', '),'pest-watch-crops'),el('span','What to check & next steps','pest-watch-expand'));card.append(summary);
      const body=el('div',null,'pest-watch-body');
      body.append(el('p',item.reason,'pest-watch-context'),el('h4','What to check'),el('p',item.check),el('h4','If you find it'),el('p',item.action));
      const actions=el('div',null,'pest-watch-actions');
      const ask=new URL('https://www.hydropip.com/pip');ask.searchParams.set('projectId',projectId);
      ask.searchParams.set('prompt',`Help me check for ${item.title.replace(/^(Watch for|Check for|Check tender growth for) /,'')} on ${item.crops.join(', ')} in this grow. I opened a crop/seasonal reminder, not a confirmed infestation. Ask what I see or help me inspect a photo before recommending treatment.`);
      const askLink=link('Ask Pip / check a photo',ask.href);askLink.target='_top';actions.append(askLink);
      const record=el('button','Record a possible sighting','btn');record.type='button';record.addEventListener('click',()=>onRecord(item));actions.append(record);body.append(actions);
      const treatment=el('details',null,'pest-watch-treatment');treatment.append(el('summary','Treatment options, if needed'),el('p',item.treatment),el('p','Choose a product labeled for your crop, pest, and growing setting. Follow its directions, harvest interval, and precautions. Amazon results are shopping options, not verified product labels.'),link(item.product,item.productUrl,true),el('small','As an Amazon Associate I earn from qualifying purchases.'));
      body.append(treatment);
      const refs=el('div',null,'pest-watch-sources');refs.append(el('span','Learn to identify it: '));item.sources.forEach(source=>{const a=link(source.title,source.url);a.className='';refs.append(a)});refs.append(el('small','Guidance reviewed '+item.reviewedOn));body.append(refs);
      const hide=el('button','Hide for this visit','btn');hide.type='button';hide.addEventListener('click',()=>{hidden.add(item.id);remember();window.HydroPipPestWatch.render(root,data,{memberId,projectId,onRecord});root.querySelector('summary,button')?.focus()});body.append(hide);card.append(body);root.append(card);
    }
    if(hidden.size&&data.items.some(i=>hidden.has(i.id))){const undo=el('button','Show hidden reminders','btn');undo.type='button';undo.addEventListener('click',()=>{hidden.clear();remember();window.HydroPipPestWatch.render(root,data,{memberId,projectId,onRecord});root.querySelector('summary')?.focus()});root.append(undo)}
    const coverage=el('details',null,'pest-watch-coverage');coverage.append(el('summary','About these reminders'),el('p',data.coverage),el('p',`Saved location: ${data.location||'not set'} · USDA zone: ${data.zone||'not set'} · Matched for ${data.asOf}. No live weather or outbreak lookup is included.`),el('p','Hiding applies to this grow in this browser tab for today. Saved sightings belong in Grow Notes and can be reused by Pip.'));
    const profile=el('button','Review grow location','btn');profile.type='button';profile.addEventListener('click',()=>document.querySelector('[data-pro-page="profile"]')?.click());coverage.append(profile);
    const crops=el('button','Update current crops','btn');crops.type='button';crops.addEventListener('click',()=>document.querySelector('[data-pro-page="crops"]')?.click());coverage.append(crops);root.append(coverage);
    const rack=el('details',null,'pest-watch-rack'),summary=el('summary');rack.open=wasOpen;
    summary.append(el('span','Pip Pro · Plant care','rhythm-kicker'),el('strong','Watch for this'),el('span',visible.length?visible.map(i=>i.title.replace(/^(Watch for|Check for|Check tender growth for) /,'')).join(' · '):'Your crop scouting reminders','pest-watch-preview'));
    rack.append(summary,...root.childNodes);root.replaceChildren(rack);
  }};
})();
