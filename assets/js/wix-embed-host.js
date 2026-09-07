(function(){
  'use strict';
  if(window.hydropipEmbedHost)return;
  window.hydropipEmbedHost=true;
  var origin='https://hydropip-pip-api.onrender.com';
  var pending=false;
  var heights=new WeakMap();
  function set(node,key,value){if(node&&node.style.getPropertyValue(key)!==value)node.style.setProperty(key,value,'important')}
  function kind(frame){try{var url=new URL(frame.src);if(url.origin!==origin)return null;if(url.pathname==='/home.html'&&location.pathname==='/')return 'home';if(url.pathname==='/pip.html'&&/^\/pip\/?$/.test(location.pathname))return 'pip'}catch(error){}return null}
  function fit(frame,type){
    var component=frame.closest('[id^="comp-"]');if(!component)return;
    set(component,'width','100%');set(component,'max-width','none');set(component,'min-width','0px');set(component,'margin-left','0px');set(component,'margin-right','0px');set(component,'justify-self','stretch');
    set(frame,'width','100%');set(frame,'display','block');
    var section=component.closest('section');
    if(section){
      set(section,'min-height','0px');set(section,'height','auto');set(section,'grid-template-rows','auto');
      var container=component.parentElement;
      set(container,'min-height','0px');set(container,'height','auto');set(container,'grid-template-rows','auto');
    }
    if(type==='home'){
      var height=heights.get(frame);
      if(height){set(component,'height',height+'px');set(component,'min-height','0px');set(frame,'height',height+'px');set(frame,'min-height','0px')}
    }else{
      var top=Math.max(0,frame.getBoundingClientRect().top);
      var height=Math.max(180,Math.round((window.visualViewport?window.visualViewport.height:innerHeight)-top));
      set(component,'height',height+'px');set(component,'min-height','0px');set(frame,'height',height+'px');set(frame,'min-height','0px');
      // These are the published outer Wix footer containers, never the app's footer.
      ['#comp-msamze6g','#comp-msamze6g_r_comp-kbgakgyt'].forEach(function(selector){var footer=document.querySelector(selector);set(footer,'display','none');set(footer,'height','0px');set(footer,'min-height','0px')});
    }
  }
  function apply(){pending=false;document.querySelectorAll('iframe').forEach(function(frame){var type=kind(frame);if(type)fit(frame,type)})}
  function schedule(){if(!pending){pending=true;requestAnimationFrame(apply)}}
  window.addEventListener('message',function(event){
    if(event.origin!==origin||!event.data||event.data.type!=='HYDROPIP_EMBED_HEIGHT')return;
    var height=Number(event.data.height);if(!Number.isFinite(height)||height<100||height>30000)return;
    document.querySelectorAll('iframe').forEach(function(frame){if(frame.contentWindow===event.source&&kind(frame)==='home'){heights.set(frame,Math.ceil(height));schedule()}});
  });
  window.addEventListener('resize',schedule,{passive:true});
  if(window.visualViewport)window.visualViewport.addEventListener('resize',schedule,{passive:true});
  function observe(){new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});schedule()}
  if(document.documentElement)observe();else document.addEventListener('DOMContentLoaded',observe,{once:true});
  [0,100,500,1500].forEach(function(delay){setTimeout(schedule,delay)});
})();
