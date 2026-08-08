(function () {
  "use strict";

  var visitorKey = "hydropipConversionVisitorV1";
  var attributionKey = "hydropipAttributionV1";
  var sessionToken = null;

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
    return fetch("/api/pip/conversions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ event: payload }),
      keepalive: true,
      credentials: "same-origin"
    }).catch(function () {});
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
  }, true);

  document.addEventListener("DOMContentLoaded", function () {
    track("page_view", { surface: document.body && document.body.dataset.trackingSurface || location.pathname });
    var params = new URLSearchParams(location.search);
    if (/\/pip\/?$/.test(location.pathname)) {
      if (params.get("pro") === "1") track("pip_pro_viewed", { surface: "pip_pro_page" });
      else if (!["signup", "login"].includes(params.get("pro"))) track("pip_opened", { surface: "pip_chat" });
    }
    if (/track-start|track-my-build|parts-checklist/.test(location.pathname)) track("track_build_opened", { surface: location.pathname });
    if (/field-guide/.test(location.pathname)) track("field_guide_opened", { surface: location.pathname });
  });

  window.HydroPipTracking = { track: track, identify: identify };
})();
