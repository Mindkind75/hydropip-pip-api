(function () {
  'use strict';
  const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  function option(field, value) {
    if (!field || field.tagName !== 'SELECT' || !value) return;
    if (!Array.from(field.options).some(item => item.value === String(value))) field.add(new Option(String(value), String(value)));
  }
  function initialize(form) {
    form.querySelectorAll('select[name="growZone"]').forEach(field => {
      for (let zone=1;zone<=13;zone++) for (const suffix of ['a','b']) option(field, zone+suffix);
    });
    const day = form.querySelector('select[name="preferredTaskDay"]');
    if (day && form.id === 'proProfileForm') {
      const group = document.createElement('fieldset');group.className='choice-group';group.style.gridColumn='1 / -1';
      const legend=document.createElement('legend');legend.textContent='Preferred care days';group.append(legend);
      const grid=document.createElement('div');grid.className='choice-grid';grid.style.gridTemplateColumns='repeat(auto-fit,minmax(130px,1fr))';group.append(grid);
      days.forEach(value=>{const label=document.createElement('label');label.className='choice';const input=document.createElement('input');input.type='checkbox';input.name='preferredTaskDays';input.value=value;label.append(input,document.createTextNode(value[0].toUpperCase()+value.slice(1)));grid.append(label)});
      day.closest('label').replaceWith(group);
      const crops=form.querySelector('[name="crops"]').closest('fieldset');
      const label=document.createElement('label');label.className='field wide';label.textContent='Other crops (one per line)';
      const input=document.createElement('textarea');input.name='customCrops';input.rows=2;input.maxLength=2000;input.placeholder='Arugula\nButtercrunch lettuce';label.append(input);crops.append(label);
    }
  }
  function load(form, profile) {
    form.querySelectorAll('.profile-saved-choice').forEach(element=>element.remove());
    for (const name of ['systemType','areaType','goals']) {
      const inputs=Array.from(form.querySelectorAll('[name="'+name+'"]'));
      const values=Array.isArray(profile[name])?profile[name]:[profile[name]];
      values.filter(value=>value&&!inputs.some(input=>input.value===value)).forEach(value=>{
        const label=document.createElement('label');label.className='choice profile-saved-choice';
        const input=document.createElement('input');input.type=inputs[0].type;input.name=name;input.value=value;label.append(input,document.createTextNode(value+' (saved)'));inputs[0].parentElement.parentElement.append(label);
      });
    }
    const custom=form.elements.customCrops;
    if(custom){const known=Array.from(form.querySelectorAll('[name="crops"]')).map(input=>input.value);custom.value=(profile.crops||[]).filter(crop=>!known.includes(crop)).join('\n')}
    form.querySelectorAll('[name="preferredTaskDays"]').forEach(input=>input.checked=(profile.preferredTaskDays||[]).includes(input.value));
  }
  function crops(form) {const values=new FormData(form);return Array.from(new Set([...values.getAll('crops'),...String(values.get('customCrops')||'').split(/[\n,]/)].map(value=>value.trim()).filter(Boolean)))}
  document.querySelectorAll('#proProfileForm,#pipProOnboardingForm,#pipRhythmSetupForm').forEach(initialize);
  window.HydroPipProfileFields={option,load,crops};
})();
