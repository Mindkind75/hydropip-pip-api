/* Progressive disclosure keeps the original controls and their event handlers intact. */
window.HydroPipRack = {
  init: function (context) {
    const root = document.querySelector('#proWorkspace');
    if (!root) return;
    root.classList.add('simple-notebook');
    const units = [];
    let currentScope = '';
    function reveal(node) {
      for (let parent = node; parent && parent !== root; parent = parent.parentElement) {
        if (parent.tagName === 'DETAILS') parent.open = true;
      }
    }
    function unit(nodes, title, hint, key, open = false) {
      nodes = nodes.filter(Boolean);
      if (!nodes.length) return;
      const box = document.createElement('details');
      box.className = 'notebook-unit'; box.dataset.rackKey = key; box.open = open;
      const summary = document.createElement('summary');
      const label = document.createElement('strong'); label.textContent = title;
      const preview = document.createElement('span'); preview.className = 'unit-preview';
      const body = document.createElement('div'); body.className = 'unit-body';
      summary.append(label, preview); box.append(summary, body);
      nodes[0].before(box); nodes.forEach(node => body.append(node));
      const entry = {box, preview, hint, defaultOpen: open}; units.push(entry);
      box.addEventListener('toggle', () => {
        if (currentScope !== context()) return;
        try { sessionStorage.setItem('pipRack:' + currentScope + ':' + key, String(box.open)); } catch (_) {}
      });
      return box;
    }
    const one = selector => root.querySelector(selector);
    const all = selector => [...root.querySelectorAll(selector)];
    unit([one('#proFocusPanel')], 'Notebook guidance', 'Suggested tools and how Pip guides you', 'notebook-guidance').classList.add('unit-help','notebook-guidance');

    // Keep today's tasks and their completion controls visible. Other sections retain a live preview.
    const rhythmHints = {
      proRhythmCrops: 'Current crops and their progress', proRhythmSow: 'Owned seed packs ready to plant',
      proRhythmMove: 'Plant checks before moving a crop', proRhythmRecent: 'Recent saved changes',
      proRhythmNext: 'Upcoming dates and succession', proRhythmBatch: 'Tank details and saved recipe'
    };
    Object.entries(rhythmHints).forEach(([id, fallback]) => {
      const list = one('#' + id), card = list.closest('.rhythm-card');
      const heading = card.querySelector('h3');
      const title = {proRhythmCrops:'Growing now', proRhythmSow:'Ready to sow', proRhythmMove:'Plant checks', proRhythmRecent:'Recent changes', proRhythmNext:'Coming up', proRhythmBatch:'Reservoir'}[id];
      const hint = () => {
        const warning = list.querySelector('.memory-conflict');
        if (warning) return 'Needs attention: ' + warning.textContent;
        const items = list.querySelectorAll('.rhythm-item');
        const first = list.querySelector('strong');
        return first ? (items.length > 1 ? items.length + ' items · ' : '') + first.textContent : fallback;
      };
      unit([card], title, hint, id);
      if (heading) heading.classList.add('unit-inner-heading');
    });
    unit([one('#proRhythmTurnover')], 'Plan the next reset', 'Optional crop turnover and help from Pip', 'turnover');
    unit([one('#proRhythmSummary')], 'Grow at a glance', 'Crop, seed and timing totals', 'rhythm-summary');
    const nowCard = one('.rhythm-now'), setupActions = one('.rhythm-hero-actions');
    nowCard.after(setupActions);
    setupActions.after(one('[data-rack-key=rhythm-summary]'));

    // The required name stays in view. Group the longer profile into familiar subjects.
    const form = one('#proProfileForm');
    const grids = [...form.querySelectorAll(':scope > .profile-grid')];
    const fields = grids[1] ? [...grids[1].children] : [];
    const groups = [
      ['Space and light', ['exposure','siteWidthFeet','siteDepthFeet','directSunHours','windExposure','drainage','waterAccess','powerAccess','serviceAccess']],
      ['System and crops', ['systemStage','plantingDate','towerCount','plantSites','medium','dominantCropType']],
      ['Reservoir and nutrients', ['reservoirGallons','nutrientBrand','nutrientStage','batchStartDate','currentTankLevel','expectedRefillWindow','pumpSchedule']],
      ['Care preferences', ['preferredTaskDay','preferredTaskTime','experienceMode']]
    ];
    groups.forEach(([title, names], index) => {
      const grid = document.createElement('div'); grid.className = 'profile-grid';
      grids[1].before(grid);
      fields.filter(field => names.includes(field.querySelector('[name]')?.name)).forEach(field => grid.append(field));
      unit([grid], title, () => [...grid.querySelectorAll('input,select')].filter(input => input.value).slice(0,3).map(input => input.tagName === 'SELECT' ? input.selectedOptions[0]?.textContent : input.parentElement.firstChild.textContent.trim() + ': ' + input.value).join(' · ') || 'Add these grow details', 'profile-' + index);
    });
    grids[1]?.remove();
    [...form.querySelectorAll(':scope > fieldset')].forEach((field, i) => unit([field], field.querySelector('legend').textContent, () => [...field.querySelectorAll('input:checked')].map(input => input.parentElement.textContent.trim()).join(' · ') || 'Choose your preferences', 'profile-choice-' + i));
    unit([form.querySelector(':scope > label')], 'Notes for Pip', 'Extra context you want Pip to remember', 'profile-notes');

    // Lists first, forms on demand on both desktop and mobile.
    ['proReminderForm','proSeedForm','proReadingForm'].forEach(id => {
      const form = one('#' + id);
      const box = unit([form], form.querySelector('h3').textContent, 'Open to add or edit', id);
      const pane = box.parentElement.querySelector(':scope > .important-pane');
      if (pane) pane.after(box);
      new MutationObserver(() => { if (form.classList.contains('open')) reveal(form); }).observe(form, {attributes:true, attributeFilter:['class']});
    });
    unit([one('.planner-side')], 'Planning tools and supplies', 'Calendar, nutrient calculator and system-care supplies', 'planner-tools');
    const seasonal = unit([one('#proSeedDashboard')], 'Seasonal planting guide', () => one('#proSeedSeasonSummary').textContent, 'seasonal');
    one('[data-pro-panel=seeds] > .workspace-grid').after(seasonal);
    const seedTips = unit([...all('[data-pro-panel=seeds] .seed-shop-note'),one('#proSeedManageGrow')], 'Seed inventory and photo tips', 'How packets, planted crops and scanning work', 'seed-tips');
    seasonal.after(seedTips);
    const seedFilters = unit([one('#proSeedSort').parentElement,one('.seed-filter-bar')], 'Filter and sort seeds', () => one('#proSeedSort').selectedOptions[0].textContent + ' · ' + (one('.seed-filter.active')?.textContent || 'All'), 'seed-filters');
    one('.seed-vault-control-row').after(seedFilters);
    unit([one('.calendar-view-switch'),one('.calendar-legend')], 'Calendar views and key', 'Choose agenda, day, week, month or year', 'calendar-views');
    const calendarDetails = unit([one('#proCalendarDetails')], 'Selected day', 'Open a date to see its tasks and controls', 'calendar-day');
    root.addEventListener('click', event => {
      const open = event.target.closest('[data-open-form]');
      if (open) reveal(document.getElementById(open.dataset.openForm));
      if (event.target.closest('[data-calendar-date]')) calendarDetails.open = true;
    }, true);
    root.addEventListener('invalid', event => reveal(event.target), true);
    root.addEventListener('focusin', event => { if (!event.target.closest('summary')) reveal(event.target); });
    all('[data-pro-panel=account] .account-card').forEach((card, i) => {
      const title = card.querySelector('h3').textContent;
      unit([card], title, card.querySelector('p')?.textContent || '', 'account-' + i, title === 'Subscription');
    });
    all('[data-pro-panel=build] .account-card').slice(1).forEach((card, i) => unit([card], 'Help with parts', 'Ask Pip what fits your build', 'build-help-' + i));
    all('.page-intro').forEach((intro, i) => {
      const text = intro.querySelector(':scope > div > p');
      const guide = intro.querySelector('.notebook-guide');
      if (text || guide) unit([text, guide], 'About this page', 'Guidance when you need it', 'page-help-' + i).classList.add('unit-help');
    });
    const lists = ['proGrowLogList','proHistory','proSeedList'].map(id => {
      const list = one('#' + id), button = document.createElement('button');
      button.type = 'button'; button.className = 'btn rack-more'; list.after(button);
      const entry = {list, button, expanded:false, limit:id === 'proSeedList' ? 6 : 3};
      button.addEventListener('click', () => { entry.expanded = !entry.expanded; sync(); });
      return entry;
    });
    function sync() {
      const scope = context();
      if (scope !== currentScope) {
        currentScope = scope;
        lists.forEach(entry => { entry.expanded = false; });
        units.forEach(({box, defaultOpen}) => {
          let saved; try { saved = sessionStorage.getItem('pipRack:' + scope + ':' + box.dataset.rackKey); } catch (_) {}
          box.open = saved === null || saved === undefined ? defaultOpen : saved === 'true';
        });
      }
      units.forEach(({preview, hint}) => {
        const text = typeof hint === 'function' ? hint() : hint;
        if (preview.textContent !== text) preview.textContent = text;
      });
      lists.forEach(({list,button,expanded,limit}) => {
        const records = [...list.children].filter(node => node.matches('.record,.history-item'));
        records.forEach((record,index) => { record.hidden = !expanded && index >= limit; });
        button.hidden = records.length <= limit;
        const label = expanded ? 'Show fewer' : 'Show all ' + records.length;
        if(button.textContent !== label) button.textContent = label;
        button.setAttribute('aria-expanded', String(expanded));
      });
    }
    root.addEventListener('input', sync); root.addEventListener('change', sync);
    sync();
    let pending = false;
    new MutationObserver(() => {
      if (pending) return; pending = true;
      queueMicrotask(() => { pending = false; sync(); });
    }).observe(root, {childList:true, subtree:true, characterData:true});
    return {sync, reveal};
  }
};
