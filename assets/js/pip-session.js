(function(root){
  'use strict';
  function create(config){
    var pending=null;
    function failure(message){return Object.assign(new Error(message||'Your sign-in could not be renewed. Sign in again, then retry.'),{status:401,sessionRecovery:true})}
    function settle(ok){if(!pending)return;var current=pending;pending=null;clearTimeout(current.timer);ok?current.resolve():current.reject(failure())}
    function refresh(){
      if(pending)return pending.promise;
      var resolve,reject,promise=new Promise(function(yes,no){resolve=yes;reject=no});
      pending={promise:promise,resolve:resolve,reject:reject,timer:setTimeout(function(){settle(false)},config.timeoutMs||15000)};
      try{config.requestSession()}catch(error){settle(false)}
      return promise;
    }
    async function request(url,options){
      var owner=config.owner(),view=config.view(),token=config.token();
      function unchanged(){return owner===config.owner()&&view===config.view()}
      function send(){var headers=new Headers(options&&options.headers||{});if(config.token())headers.set('Authorization','Bearer '+config.token());else headers.delete('Authorization');return config.fetch(url,Object.assign({},options,{headers:headers}))}
      var response=await send();
      if(response.status!==401||!token||!owner)return response;
      var body=await response.clone().json().catch(function(){return{}});
      // Only this authentication rejection is known to occur before a write.
      if(body.error!=='member_session_required')return response;
      if(!unchanged())throw failure('The grow or account changed. Retry from the current grow.');
      if(token===config.token())await refresh();
      if(!unchanged())throw failure('The grow or account changed. Retry from the current grow.');
      if(!config.token()||token===config.token())throw failure();
      response=await send();
      if(response.status===401)throw failure();
      return response;
    }
    return {request:request,sessionReceived:function(valid){settle(valid)},isRefreshing:function(){return Boolean(pending)}};
  }
  root.HydroPipSession={create:create};
})(typeof window==='undefined'?globalThis:window);
