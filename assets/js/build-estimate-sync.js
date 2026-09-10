// Member-scoped pending edits survive reloads. Server revision checks prevent
// an older device snapshot from overwriting a newer account save.
const clone = value => JSON.parse(JSON.stringify(value));
const empty = () => ({revision:0, options:{}, checked:{}, purchases:{}});
const at = (value, keys) => keys.reduce((item,key) => item?.[key], value);
function put(value, keys, item) {
  let parent = value;
  for (const key of keys.slice(0,-1)) parent = parent[key] ||= {};
  parent[keys.at(-1)] = item;
}
function canonical(keys, value) {
  if (keys[0] === 'checked' || keys.at(-1) === 'owned') return Boolean(value);
  if (keys.at(-1) === 'paid') return value === '' || value == null ? null : Number(value);
  if (['date','retailer'].includes(keys.at(-1))) return value || null;
  if (keys.at(-1) === 'optional') return [...(value || [])].sort();
  return value ?? null;
}

export class BuildEstimateSync {
  constructor({memberId, projectId = '', storage = localStorage, request, onChange, onStatus, onEvent = () => {}, retryMs = 5000}) {
    this.key = 'hydropipBuildSyncV3:' + encodeURIComponent(memberId) + (projectId ? ':grow:' + encodeURIComponent(projectId) : '');
    this.storage=storage; this.request=request; this.onChange=onChange; this.onStatus=onStatus; this.onEvent=onEvent;
    this.retryMs=retryMs; this.disposed=false; this.timer=null; this.running=null;
    this.state=this.read();
  }
  read() {
    try {
      const value=JSON.parse(this.storage.getItem(this.key));
      if (value?.base && value.pending && typeof value.pending==='object') return value;
    } catch {}
    return this.state || {base:empty(),pending:{}};
  }
  persist() {
    try { this.storage.setItem(this.key,JSON.stringify(this.state)); this.cacheAvailable=true; }
    catch { this.cacheAvailable=false; this.status('Device storage is unavailable. Keep this page open until the account save finishes.'); }
  }
  value() {
    const value=clone(this.state.base);
    for (const edit of Object.values(this.state.pending)) put(value,edit.path,edit.value);
    return value;
  }
  notify() { if (!this.disposed) { this.displayed=this.value(); this.onChange(clone(this.displayed)); } }
  status(text) { if (!this.disposed) this.onStatus(text); }
  schedule(delay=250) {
    clearTimeout(this.timer);
    if (!this.disposed) this.timer=setTimeout(()=>this.flush(),delay);
  }
  stage(draft) {
    if (this.disposed) return;
    this.state=this.read();
    const previous=this.displayed || this.value(), paths=[];
    for (const key of Object.keys(draft.options || {})) paths.push(['options',key]);
    for (const key of Object.keys(draft.summary || {})) paths.push(['summary',key]);
    for (const id of new Set([...Object.keys(previous.checked || {}),...Object.keys(draft.checked || {})])) paths.push(['checked',id]);
    for (const id of new Set([...Object.keys(previous.purchases || {}),...Object.keys(draft.purchases || {})])) {
      for (const field of ['owned','paid','date','retailer']) paths.push(['purchases',id,field]);
    }
    for (const keys of paths) {
      if (keys.some(key => ['__proto__','constructor','prototype'].includes(key))) continue;
      const value=canonical(keys,at(draft,keys));
      if (JSON.stringify(value)!==JSON.stringify(canonical(keys,at(previous,keys)))) {
        this.state.pending[JSON.stringify(keys)]={path:keys,value,id:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)};
      }
    }
    this.displayed=clone(draft);
    this.persist();
    if (Object.keys(this.state.pending).length) { this.status(this.cacheAvailable ? 'Changes saved on this device. Saving to your account...' : 'Device storage is unavailable. Keep this page open until the account save finishes.'); this.schedule(); }
  }
  async load() {
    this.state=this.read(); this.notify();
    return this.flush();
  }
  refreshFromStorage() { this.state=this.read(); this.notify(); if (Object.keys(this.state.pending).length) this.schedule(); }
  flush() {
    if (this.disposed) return Promise.resolve();
    if (this.running) return this.running;
    clearTimeout(this.timer);
    this.running=this.sync().finally(()=>{this.running=null;});
    return this.running;
  }
  async sync() {
    const started=performance.now();
    try {
      for(let attempt=0;attempt<4;attempt++) {
        const latest=await this.request('GET');
        if (this.disposed) return;
        this.state=this.read();
        this.state.base=latest.preferences?.buildEstimate || empty();
        this.persist();
        const edits=clone(this.state.pending);
        if (!Object.keys(edits).length) { this.notify(); this.status('Your account estimate and progress are up to date.'); return; }
        const payload=this.value(); payload.savedAt=new Date().toISOString();
        try {
          const result=await this.request('PATCH',{patch:{buildEstimate:payload,buildEstimateBaseRevision:Number(this.state.base.revision || 0)}});
          if (this.disposed) return;
          // Read again: edits made during the request (including another tab)
          // must survive acknowledgment of this earlier save.
          this.state=this.read();
          this.state.base=result.preferences.buildEstimate;
          for (const [key,edit] of Object.entries(edits)) if (this.state.pending[key]?.id===edit.id) delete this.state.pending[key];
          this.persist();
          this.onEvent('build_estimate_saved',{operation:'checklist',durationMs:Math.round(performance.now()-started)});
          this.onEvent('save_succeeded',{operation:'checklist',durationMs:Math.round(performance.now()-started)});
          if (!Object.keys(this.state.pending).length) { this.status('Estimate, checkmarks, and purchase notes saved to your account.'); return; }
        } catch(error) { if (error.status!==409) throw error; }
      }
      this.status('Newer account edits found. Your pending changes are kept; retrying shortly.');
      this.schedule(this.retryMs);
    } catch(error) {
      if(Object.keys(this.state.pending).length)this.onEvent('save_failed',{operation:'checklist',status:error.status||'network',durationMs:Math.round(performance.now()-started)});
      this.status(!this.cacheAvailable ? 'Changes are not saved yet. Keep this page open and reconnect to save your progress.' : error.status===401 ? 'Sign in again to sync. Your pending edits are kept on this device.' : 'Saved on this device. Account sync will retry when the connection returns.');
      if(error.status!==401) this.schedule(this.retryMs);
    }
  }
  dispose() { this.disposed=true; clearTimeout(this.timer); }
}
