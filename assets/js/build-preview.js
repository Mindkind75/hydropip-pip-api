(function(){
  'use strict';
  var priceLabels=document.querySelectorAll('[data-build-price]');
  var select=document.querySelector('#previewTowers');
  var status=document.querySelector('#previewStatus');
  var rows=document.querySelector('#previewRows');
  var catalog;
  function estimate(towers){
    var items=catalog.items.filter(function(item){return item.active&&item.required&&item.id!=='ibc-new'&&item.id!=='support-pvc'}).map(function(item){
      var quantity=item.quantityRule==='perTower'?towers:item.quantityRule==='twoPerTower'?towers*2:item.quantityRule==='perTwoTowers'?Math.max(1,Math.ceil(towers/2)):Number(item.baseQuantity||1);
      return Object.assign({},item,{quantity:quantity});
    });
    function total(key){return Math.round(items.reduce(function(sum,item){return sum+item.quantity*item[key]},0))}
    return {items:items,low:total('lowPrice'),typical:total('typicalPrice'),high:total('highPrice')};
  }
  function money(value){return new Intl.NumberFormat('en-US',{style:'currency',currency:catalog.currency,maximumFractionDigits:0}).format(value)}
  function render(){
    var towers=select?Number(select.value):4;
    var result=estimate(towers);
    priceLabels.forEach(function(label){label.textContent='Full parts-list estimate: '+money(result.typical)});
    if(!select)return;
    document.querySelector('#previewRange').textContent=money(result.low)+'–'+money(result.high)+' catalog range';
    document.querySelector('#previewCapacity').textContent=towers+' tower'+(towers===1?'':'s')+' · '+(towers*40)+' planting pockets';
    document.querySelector('#previewItemsLabel').textContent='See all '+result.items.length+' required parts and quantities';
    rows.replaceChildren();
    result.items.forEach(function(item){
      var row=document.createElement('tr');
      var name=document.createElement('th');name.scope='row';
      if(item.url){var link=document.createElement('a');link.textContent=item.name;link.href=item.url;link.target='_top';link.rel='noopener sponsored';name.appendChild(link)}else name.textContent=item.name+' (source locally)';
      var qty=document.createElement('td');qty.textContent=item.quantity+' '+item.unit+(item.quantity>1?'s':'');
      var cost=document.createElement('td');cost.textContent=money(item.quantity*item.typicalPrice);
      row.append(name,qty,cost);rows.appendChild(row);
    });
    status.textContent='Assumes buying every listed part, including a used, verified food-grade IBC and galvanized supports; no optional upgrades. Catalog prices last reviewed '+catalog.lastPriceReviewDate+'. Shipping and tax are additional. Parts you already own and local deals can reduce what you spend.';
  }
  if(!priceLabels.length&&!select)return;
  fetch('/data/build-items.json').then(function(response){if(!response.ok)throw new Error('catalog');return response.json()}).then(function(data){catalog=data;render();if(select)select.addEventListener('change',render)}).catch(function(){if(status)status.textContent='The price list could not load. Refresh to retry, or email info@hydropip.com for help.';priceLabels.forEach(function(label){label.textContent='Parts estimate temporarily unavailable'})});
})();
