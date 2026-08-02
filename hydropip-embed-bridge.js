(function(){
  var lastHeight=0;
  function pageName(){
    return location.pathname.split("/").pop()||"index";
  }
  function height(){
    return Math.max(
      document.body ? document.body.scrollHeight : 0,
      document.documentElement ? document.documentElement.scrollHeight : 0
    );
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
