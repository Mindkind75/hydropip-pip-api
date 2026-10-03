// Aggregate existing telemetry only; payments and Wix registrations remain separate sources.
export function monthWindow(month) {
  if (!/^20\d{2}-(0[1-9]|1[0-2])$/.test(month || '')) throw Object.assign(new Error('Use month YYYY-MM'), {statusCode:400});
  const [year, number] = month.split('-').map(Number);
  function midnight(y, m) {
    const utc = new Date(Date.UTC(y, m, 1, 12));
    const offset = new Intl.DateTimeFormat('en-US', {timeZone:'America/New_York', timeZoneName:'longOffset'}).formatToParts(utc).find(p=>p.type==='timeZoneName').value;
    return new Date(`${utc.toISOString().slice(0,10)}T00:00:00${offset.replace('GMT','')}`).toISOString();
  }
  return {month, timezone:'America/New_York', start:midnight(year, number-1), end:midnight(year, number)};
}

export function trafficSource(event) {
  if (event.utmSource) return event.utmSource.toLowerCase();
  const host = (event.referrerHost || '').toLowerCase();
  if (/^(www\.)?hydropip\.com$/.test(host) || host === 'hydropip-pip-api.onrender.com' || !host) return 'direct_or_unattributed';
  if (/(^|\.)facebook\.com$/.test(host) || host === 'fb.com') return 'facebook';
  return host;
}

export function summarizeGrowth(events, {excludedUserIds=[], excludedVisitorIds=[], truncated=false, window={}} = {}) {
  // Link anonymous and authenticated activity only when one account owns the visitor ID.
  const accounts = new Map();
  for (const e of events) if(e.visitorId && e.userId) {
    if(!accounts.has(e.visitorId)) accounts.set(e.visitorId,new Set());
    accounts.get(e.visitorId).add(e.userId);
  }
  const excludedUsers = new Set(excludedUserIds), excludedVisitors = new Set(excludedVisitorIds);
  const linkedUser = e => accounts.get(e.visitorId)?.size===1 ? [...accounts.get(e.visitorId)][0] : null;
  const identity = e => e.userId || linkedUser(e) || e.visitorId;
  const valid = events.filter(e => !excludedUsers.has(e.userId) && !excludedUsers.has(linkedUser(e)) && !excludedVisitors.has(e.visitorId) && !/^(qa_|test(?:_|$))/i.test(e.utmSource||''));
  const groups = new Map();
  for (const e of valid) {
    const key = JSON.stringify([trafficSource(e),e.utmMedium||'',e.utmCampaign||'',e.utmContent||'']);
    if(!groups.has(key)) groups.set(key,{source:trafficSource(e),medium:e.utmMedium||null,campaign:e.utmCampaign||null,content:e.utmContent||null,counts:{},people:new Set(),unique:{}});
    const g=groups.get(key), person=identity(e);
    g.counts[e.eventName]=(g.counts[e.eventName]||0)+1;
    if(person){g.people.add(person);(g.unique[e.eventName] ||= new Set()).add(person);}
  }
  const counts={};for(const e of valid)counts[e.eventName]=(counts[e.eventName]||0)+1;
  return {...window, generatedAt:new Date().toISOString(), totalEvents:valid.length, excludedEvents:events.length-valid.length,
    uniqueVisitors:new Set(valid.map(identity).filter(Boolean)).size, counts,
    campaigns:[...groups.values()].map(({people,unique,...g})=>({...g,uniqueVisitors:people.size,uniqueByEvent:Object.fromEntries(Object.entries(unique).map(([k,v])=>[k,v.size]))})).sort((a,b)=>b.uniqueVisitors-a.uniqueVisitors),
    coverage:{truncated,ownerExclusionsConfigured:excludedUserIds.length>0||excludedVisitorIds.length>0,identity:'Observed visitor-to-account links within this report; shared browsers and unlinked devices remain separate.',
      attribution:'Recorded campaign tags and external referrer; no inferred attribution across missing events.',
      limitations:['Event counts are not site sessions.','Campaign unique visitor counts may overlap.','Member sessions are not new registrations; checkout starts are not paid subscriptions.','Obtain registrations, paid subscriptions, renewals, cancellations and revenue from Wix; affiliate orders and commissions from Amazon.','Historical missing events cannot be recovered.']},
    registrations:null, paidSubscriptions:null, affiliateOrders:null, affiliateCommissions:null};
}
