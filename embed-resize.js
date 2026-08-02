(function(){
  var lastHeight=0;
  function pageName(){
    return location.pathname.split("/").pop()||"index";
  }
  function height(){
    if(!document.body)return 0;
    var bottom=0;
    Array.prototype.forEach.call(document.body.children,function(element){
      if(element.tagName==="SCRIPT"||getComputedStyle(element).position==="fixed")return;
      var rect=element.getBoundingClientRect();
      var marginBottom=parseFloat(getComputedStyle(element).marginBottom)||0;
      bottom=Math.max(bottom,rect.bottom+window.scrollY+marginBottom);
    });
    return Math.ceil(bottom);
  }
  function postHeight(){
    var nextHeight=height();
    if(Math.abs(nextHeight-lastHeight)<8)return;
    lastHeight=nextHeight;
    try{
      window.parent.postMessage({
        type:"HYDROPIP_EMBED_HEIGHT",
        page:pageName(),
        height:nextHeight
      },"*");
    }catch(error){}
  }
  window.addEventListener("load",postHeight);
  window.addEventListener("resize",postHeight);
  if("ResizeObserver" in window){
    new ResizeObserver(postHeight).observe(document.documentElement);
  }
  setTimeout(postHeight,250);
  setTimeout(postHeight,1000);
  setTimeout(postHeight,2500);
})();
