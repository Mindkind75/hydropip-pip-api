(function(){
'use strict';
window.HydroPipGrowingGuide={init:function(adapter){
 const libraries=[...document.querySelectorAll('[data-guide-library]')];let scope=adapter.context();
 for(const library of libraries){
  const search=library.querySelector('[data-guide-search]'),status=library.querySelector('[data-guide-status]'),groups=[...library.querySelectorAll('[data-guide-group]')];
  function filter(){const terms=search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);let count=0;
   for(const group of groups){let found=0;for(const article of group.querySelectorAll('[data-guide-article]')){const match=terms.every(t=>article.textContent.toLowerCase().includes(t));article.hidden=!match;if(match){found++;count++}else article.open=false}group.hidden=!found;if(terms.length)group.open=!!found;else group.open=false}
   status.textContent=terms.length?(count?count+' matching topics. Open one for the steps.':'No matching topics. Try another word or ask Pip.'):'Choose a topic below.';
  }
  search.addEventListener('input',filter);
  library.addEventListener('click',event=>{const button=event.target.closest('[data-guide-action]');if(!button)return;const node=button.closest('[data-guide-article]');const article={title:node.querySelector('summary strong').textContent,summary:node.querySelector('.unit-body>p').textContent,task:node.dataset.guideTask,category:node.dataset.guideCategory};const action=button.dataset.guideAction;if(action==='ask')adapter.ask(article);else if(action==='calculator')adapter.calculator();else adapter.draft(action,article)});
  library.resetGuide=()=>{search.value='';filter();library.querySelectorAll('[data-guide-article]').forEach(n=>n.open=false)};
 }
 document.querySelector('#proProjectSelect').addEventListener('change',()=>{if(scope!==adapter.context()){scope=adapter.context();libraries.forEach(l=>l.resetGuide())}});
}};
})();
