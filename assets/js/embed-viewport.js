// Measure the part of a Wix iframe that actually fits inside the browser window.
// The iframe's own viewport can be wider or taller than the visible phone screen.
(function () {
  if (window.parent === window || !("IntersectionObserver" in window)) return;
  var root = document.documentElement;
  var observer = new IntersectionObserver(function (entries) {
    var entry = entries[0];
    if (!entry || !entry.isIntersecting) return;
    var visible = entry.intersectionRect;
    if (visible.width > 0) root.style.setProperty("--embed-visible-width", Math.floor(visible.width) + "px");
    if (visible.bottom > 0) root.style.setProperty("--embed-visible-bottom", Math.floor(visible.bottom) + "px");
  }, { threshold: Array.from({ length: 201 }, function (_, index) { return index / 200; }) });
  observer.observe(root);
})();
