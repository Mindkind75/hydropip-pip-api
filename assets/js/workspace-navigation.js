(function () {
  'use strict';
  window.HydroPipNavigation = {
    completeSignIn: function (url, label) {
      // Cross-origin frames cannot always redirect the top page until clicked.
      // Keep the exact destination available even when Chrome blocks that hop.
      document.documentElement.classList.add('pip-auth-entry', 'pip-auth-ready', 'pip-auth-return');
      document.querySelector('#pipAuthTitle').textContent = "You're signed in.";
      document.querySelector('#pipAuthText').textContent = 'Continue to your saved work.';
      document.querySelector('#pipAuthReadyNote').textContent = 'Your grow selection stays with you.';
      var link = document.createElement('a');
      link.className = 'btn primary'; link.href = url; link.target = '_top'; link.textContent = label;
      document.querySelector('.auth-next').replaceChildren(link);
      if (window.parent === window || (navigator.userActivation && navigator.userActivation.hasBeenActive)) {
        try { window.open(url, '_top'); } catch (error) { /* The visible link still works. */ }
      }
    },
    authReturnUrl: function (query) {
      var url = new URL('https://www.hydropip.com/pip');
      url.searchParams.set('pro', '1');
      ['projectId', 'project', 'focus', 'start', 'prompt'].forEach(function (key) {
        if (query.get(key)) url.searchParams.set(key, query.get(key));
      });
      return url.href;
    },
    revealTab: function (nav, page) {
      var active = nav.querySelector('button[data-pro-page="' + page + '"]');
      nav.querySelectorAll('button[role="tab"]').forEach(function (tab) { tab.tabIndex = tab === active ? 0 : -1; });
      if (!active) return;
      // Scroll only the tab strip. scrollIntoView also moves the outer Wix page.
      var left = active.offsetLeft - nav.offsetLeft;
      if (left < nav.scrollLeft) nav.scrollLeft = left;
      else if (left + active.offsetWidth > nav.scrollLeft + nav.clientWidth) nav.scrollLeft = left + active.offsetWidth - nav.clientWidth;
    }
  };
  var workspace = document.querySelector('#proWorkspace');
  var nav = document.createElement('div');
  nav.className = 'workspace-navigation';
  var switcher = workspace.querySelector('.project-switcher');
  var notebook = workspace.querySelector('.workspace-notebook');
  var paper = notebook.querySelector('.notebook-paper');
  notebook.prepend(nav);
  nav.append(switcher, workspace.querySelector('.workspace-tools-label'), workspace.querySelector('.workspace-tabs'));
  // These are the existing controls and live status, kept on the notebook's paper.
  paper.prepend(workspace.querySelector('.workspace-meta'), workspace.querySelector('.pro-focus'));
  nav.querySelectorAll('button[role="tab"]').forEach(function (tab) {
    var page = tab.dataset.proPage;
    var panel = workspace.querySelector('[data-pro-panel="' + page + '"]');
    if (!panel) return;
    if (!tab.id) tab.id = 'notebook-tab-' + page;
    if (!panel.id) panel.id = 'notebook-panel-' + page;
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
  });
  // Keep the sticky controls and panels aligned when a form opens or gains focus.
  new ResizeObserver(function () {
    document.documentElement.style.setProperty('--workspace-nav-height', (getComputedStyle(nav).position === 'sticky' ? nav.offsetHeight : 0) + 'px');
  }).observe(nav);
  document.addEventListener('DOMContentLoaded', function () {
    var tools = document.querySelector('.conversation-tools');
    var memory = document.querySelector('.chat-memory-bar');
    if (tools && memory) { tools.prepend(memory.querySelector('button')); memory.remove(); }
  });
})();
