// Measure the part of a Wix iframe that actually fits inside the browser window.
// The iframe's own viewport can be wider or taller than the visible phone screen.
(function () {
  var root = document.documentElement;
  function height(value) {
    root.style.setProperty('--embed-visible-bottom', Math.floor(value) + 'px');
    root.classList.toggle('short-viewport', value < 520);
  }
  // Standalone pages also need to follow the software keyboard viewport.
  if (window.parent === window) {
    function fit() { height(window.visualViewport ? window.visualViewport.height : innerHeight); }
    fit();
    window.addEventListener('resize', fit, {passive:true});
    if (window.visualViewport) window.visualViewport.addEventListener('resize', fit, {passive:true});
    return;
  }
  if (!("IntersectionObserver" in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    var entry = entries[0];
    if (!entry || !entry.isIntersecting) return;
    var visible = entry.intersectionRect;
    if (visible.width > 0) root.style.setProperty("--embed-visible-width", Math.floor(visible.width) + "px");
    if (visible.bottom > 0) height(visible.bottom);
  }, { threshold: Array.from({ length: 201 }, function (_, index) { return index / 200; }) });
  observer.observe(root);
  // A resized iframe can stay fully intersecting, so its ratio never crosses
  // a threshold. Reset the bounds and request a new observation on resize.
  window.addEventListener('resize', function () {
    root.style.setProperty('--embed-visible-width', window.innerWidth + 'px');
    height(window.innerHeight);
    observer.unobserve(root);
    observer.observe(root);
  });
})();
