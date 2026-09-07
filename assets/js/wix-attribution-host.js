(function(){
  'use strict';
  if(window.hydropipAttributionHost)return;
  window.hydropipAttributionHost=true;
  var origin='https://hydropip-pip-api.onrender.com';
  var fields=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  var storageKey='hydropipCampaignSessionV1';
  function attribution(){
    var data={},incoming={},params=new URLSearchParams(location.search);
    fields.forEach(function(key){var value=params.get(key);if(value)incoming[key]=value.trim().slice(0,160)});
    try{data=JSON.parse(sessionStorage.getItem(storageKey)||'{}')}catch(error){}
    if(Object.keys(incoming).length){data=incoming;try{sessionStorage.setItem(storageKey,JSON.stringify(data))}catch(error){}}
    var clean={};fields.forEach(function(key){if(typeof data[key]==='string')clean[key]=data[key].slice(0,160)});return clean;
  }
  function frameFor(source){return Array.from(document.querySelectorAll('iframe')).find(function(frame){try{return new URL(frame.src).origin===origin&&(!source||frame.contentWindow===source)}catch(error){return false}})}
  window.addEventListener('message',function(event){if(event.origin!==origin||!event.data||event.data.type!=='HYDROPIP_ATTRIBUTION_REQUEST')return;var frame=frameFor(event.source);if(frame)frame.contentWindow.postMessage({type:'HYDROPIP_ATTRIBUTION',fields:attribution()},origin)});
  // Capture entry tags even when the Wix iframe has not mounted yet.
  attribution();
  document.querySelectorAll('iframe').forEach(function(frame){if(frameFor(frame.contentWindow))frame.contentWindow.postMessage({type:'HYDROPIP_ATTRIBUTION',fields:attribution()},origin)});
})();
