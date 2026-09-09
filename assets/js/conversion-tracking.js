(function () {
  "use strict";

  var contract = fetch('/assets/js/event-contract.json').then(function(response){if(!response.ok)throw Error('Event contract unavailable');return response.json()}).catch(function(){return null});
  var visitorKey = "hydropipConversionVisitorV1";
  var attributionKey = "hydropipAttributionV1";
  var sessionToken = null;
  var campaignFields = {utm_source:'utmSource',utm_medium:'utmMedium',utm_campaign:'utmCampaign',utm_content:'utmContent',utm_term:'utmTerm'};
  var parentReady = window.parent === window;
  var pendingAttribution = [];
  function releaseAttribution(){parentReady=true;pendingAttribution.splice(0).forEach(function(resolve){resolve()})}
  window.addEventListener('message',function(event){
    if(event.source!==window.parent||!['https://www.hydropip.com','https://hydropip.com'].includes(event.origin)||!event.data||event.data.type!=='HYDROPIP_ATTRIBUTION')return;
    var incoming={},fields=event.data.fields||{};
    Object.keys(campaignFields).forEach(function(key){if(typeof fields[key]==='string'&&fields[key].trim())incoming[campaignFields[key]]=fields[key].trim().slice(0,160)});
    if(Object.keys(incoming).length)safeStorageSet(attributionKey,JSON.stringify(incoming));
    releaseAttribution();
  });
  if(!parentReady){
    function requestAttribution(){var host="https://www.hydropip.com";try{var ref=new URL(document.referrer).origin;if(ref==="https://hydropip.com")host=ref}catch(error){}window.parent.postMessage({type:"HYDROPIP_ATTRIBUTION_REQUEST"},host)}
    requestAttribution();[100,350,800].forEach(function(delay){setTimeout(function(){if(!parentReady)requestAttribution()},delay)});setTimeout(releaseAttribution,1500);
  }

  function safeStorageGet(key) {
    try { return localStorage.getItem(key); } catch (_error) { return null; }
  }

  function safeStorageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (_error) {}
  }

  function randomId(prefix) {
    var cryptoObject = window.crypto || window.msCrypto;
    if (cryptoObject && cryptoObject.getRandomValues) {
      var bytes = new Uint32Array(4);
      cryptoObject.getRandomValues(bytes);
      return prefix + "_" + Array.from(bytes).map(function (value) { return value.toString(36); }).join("");
    }
    return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 12);
  }

  function visitorId() {
    var existing = safeStorageGet(visitorKey);
    if (/^hpv_[a-z0-9_-]{8,}$/i.test(existing || "")) return existing;
    var created = randomId("hpv");
    safeStorageSet(visitorKey, created);
    return created;
  }

  function readAttribution() {
    var stored = {};
    try { stored = JSON.parse(safeStorageGet(attributionKey) || "{}") || {}; } catch (_error) {}
    var params = new URLSearchParams(location.search);
    var incoming = {
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
      utmContent: params.get("utm_content"),
      utmTerm: params.get("utm_term")
    };
    if (incoming.utmSource || incoming.utmMedium || incoming.utmCampaign) {
      stored = incoming;
      safeStorageSet(attributionKey, JSON.stringify(stored));
    }
    return stored;
  }

  function referrerHost() {
    try { return document.referrer ? new URL(document.referrer).hostname : null; } catch (_error) { return null; }
  }

  function cleanPage() {
    var params = new URLSearchParams(location.search);
    var mode = params.get("pro");
    return location.pathname + (mode && ["1", "signup", "login", "account"].indexOf(mode) !== -1 ? "?pro=" + mode : "");
  }

  function track(eventName, metadata) {
    return contract.then(function(schema){if(!schema||schema.events.indexOf(eventName)===-1)return null;var cleaned={};schema.metadata.forEach(function(key){if(metadata&&metadata[key]!==undefined)cleaned[key]=metadata[key]});return send(eventName,cleaned)});
  }

  function send(eventName, metadata) {
    if(!parentReady)return new Promise(function(resolve){pendingAttribution.push(resolve)}).then(function(){return track(eventName,metadata)});
    var attribution = readAttribution();
    var payload = {
      clientEventId: randomId("hpe"),
      eventName: eventName,
      visitorId: visitorId(),
      page: cleanPage(),
      referrerHost: referrerHost(),
      utmSource: attribution.utmSource || null,
      utmMedium: attribution.utmMedium || null,
      utmCampaign: attribution.utmCampaign || null,
      utmContent: attribution.utmContent || null,
      utmTerm: attribution.utmTerm || null,
      metadata: metadata || {}
    };
    var headers = { "Content-Type": "application/json" };
    if (sessionToken) headers.Authorization = "Bearer " + sessionToken;
    function attempt(remaining){return fetch("/api/pip/conversions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ event: payload }),
      keepalive: true,
      credentials: "same-origin"
    }).then(function(response){if(response.status>=500&&remaining)return attempt(remaining-1);return response}).catch(function(){return remaining?attempt(remaining-1):null})}return attempt(1);
  }

  function identify(token, member, subscription) {
    sessionToken = token || null;
    if (!member || !member.id) return;
    var today = new Date().toISOString().slice(0, 10);
    var seenKey = "hydropipMemberSessionSeen_" + String(member.id).slice(0, 80) + "_" + today;
    if (safeStorageGet(seenKey)) return;
    safeStorageSet(seenKey, "1");
    track("member_session_connected", {
      memberState: subscription && subscription.active ? "pip_pro" : "free_member"
    });
  }

  function amazonProductId(url) {
    var match = url.pathname.match(/\/dp\/([A-Z0-9]{10})/i);
    if (match) return match[1].toUpperCase();
    return url.searchParams.get("k") || "amazon_search";
  }

  function classifyLink(link) {
    var url;
    try { url = new URL(link.href, location.href); } catch (_error) { return null; }
    var host = url.hostname.replace(/^www\./, "");
    var label = String(link.textContent || link.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").slice(0, 160);
    var declaredEvent = String(link.getAttribute("data-hp-event") || "").trim();
    if (/^[a-z][a-z0-9_]{2,63}$/.test(declaredEvent)) {
      return { name: declaredEvent, metadata: { destinationHost: host, linkLabel: label, surface: location.pathname } };
    }
    if (host === "amazon.com" || host.endsWith(".amazon.com") || host === "a.co") {
      return { name: "affiliate_link_clicked", metadata: { destinationHost: host, productId: amazonProductId(url), linkLabel: label } };
    }
    if (/pro=signup/.test(url.search)) return { name: "signup_started", metadata: { linkLabel: label, surface: location.pathname } };
    return null;
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link) return;
    var conversion = classifyLink(link);
    if (conversion) track(conversion.name, conversion.metadata);
    try {
      var url=new URL(link.href,location.href);
      // An in-page jump must not gain a query string and reload the app.
      if(url.hash&&url.origin===location.origin&&url.pathname===location.pathname&&url.search===location.search)return;
      if(['https://www.hydropip.com','https://hydropip.com','https://hydropip-pip-api.onrender.com'].includes(url.origin)){
        var attribution=readAttribution();
        Object.keys(campaignFields).forEach(function(key){var value=attribution[campaignFields[key]];if(value&&!url.searchParams.has(key))url.searchParams.set(key,value)});
        link.href=url.href;
      }
    } catch(error) {}
  }, true);

  document.addEventListener("DOMContentLoaded", function () {
    track("page_view", { surface: document.body && document.body.dataset.trackingSurface || location.pathname });
    var params = new URLSearchParams(location.search);
    if (/\/pip(?:\.html)?\/?$/.test(location.pathname)) {
      if (params.get("pro") === "1") track("pip_pro_viewed", { surface: "pip_pro_page" });
      else if (!["signup", "login"].includes(params.get("pro"))) track("pip_opened", { surface: "pip_chat" });
    }
    if (/track-start|track-my-build|parts-checklist/.test(location.pathname)) track("track_build_opened", { surface: location.pathname });
    if (/field-guide/.test(location.pathname)) track("field_guide_opened", { surface: location.pathname });
  });

  window.addEventListener('load',function(){setTimeout(function(){var entry=performance.getEntriesByType('navigation')[0];if(entry)track('page_loaded',{durationMs:Math.round(entry.loadEventEnd||performance.now()),surface:cleanPage()})},0)});
  window.HydroPipTracking = { track: track, identify: identify };
})();
