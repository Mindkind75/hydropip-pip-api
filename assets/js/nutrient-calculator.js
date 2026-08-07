(function () {
  "use strict";

  var form = document.querySelector("#nutrientForm");
  var result = document.querySelector("#result");
  var error = document.querySelector("#error");
  var changed = document.querySelector("#changed");
  var customFields = document.querySelector("#customFields");
  var programHint = document.querySelector("#programHint");
  var accessTitle = document.querySelector("#accessTitle");
  var accessText = document.querySelector("#accessText");
  var accessActions = document.querySelector("#accessActions");
  var memberOnlyNote = document.querySelector("#memberOnlyNote");
  var proUpsell = document.querySelector("#proUpsell");
  var nutrientSafetyDisclaimer = "HydroPip nutrient calculations are educational estimates for a fresh reservoir batch, not professional agronomic, food-safety, medical, or chemical-handling advice. Verify all amounts against the nutrient product label, your crop, your water source, and local agricultural guidance before mixing. Do not add a full new dose to a partly used reservoir unless the product label and your own measurements support it. Over-fertilization can injure plants, contaminate runoff, and make edible crops unsafe or poor quality. Store nutrients and pH adjusters away from children and pets, wear appropriate protection, mix only in the recommended order, and never premix concentrated MasterBlend and calcium nitrate together.";
  var config = null;
  var hasCalculated = false;
  var stageLabels = {
    seedling: "Seeds / seedlings",
    early_vegetative: "Early vegetative growth",
    vegetative: "Established vegetative growth",
    flowering: "Flowering / transition",
    fruiting: "Active fruit production",
    ripening: "Ripening / finish"
  };

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>\"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  }

  function option(value, label) {
    return '<option value="' + escapeHtml(value) + '">' + escapeHtml(label) + "</option>";
  }

  function roundAmount(value) {
    if (value >= 100) return Math.round(value);
    if (value >= 10) return Math.round(value * 10) / 10;
    return Math.round(value * 100) / 100;
  }

  function gallonsFromForm() {
    var volume = Number(form.volume.value);
    return form.volumeUnit.value === "liters" ? volume / 3.78541 : volume;
  }

  function displayVolume() {
    var volume = Number(form.volume.value);
    return roundAmount(volume) + " " + (form.volumeUnit.value === "liters" ? "liters" : "gallons");
  }

  function populateSelect(select, entries) {
    select.innerHTML = Object.keys(entries).map(function (key) {
      return option(key, entries[key].label);
    }).join("");
  }

  function selectedProgram() {
    return form.program.value === "custom_label" ? null : config.programs[form.program.value];
  }

  function updateStages() {
    var program = selectedProgram();
    var stages = program ? Object.keys(program.stages) : Object.keys(stageLabels);
    var current = form.stage.value;
    form.stage.innerHTML = stages.map(function (key) {
      return option(key, program ? program.stages[key].label : stageLabels[key]);
    }).join("");
    if (stages.indexOf(current) >= 0) form.stage.value = current;
  }

  function updateProgramUi() {
    var program = selectedProgram();
    customFields.hidden = Boolean(program);
    programHint.textContent = program ? program.bestFor : "For any complete hydroponic nutrient with a trustworthy label rate.";
    updateStages();
  }

  function markDirty() {
    if (!hasCalculated) return;
    changed.hidden = false;
  }

  function componentsForProgram(program, gallons) {
    var stage = program.stages[form.stage.value];
    var scale = program.kind === "scaledPreset" ? gallons / program.standardGallons : gallons;
    return {
      stage: stage,
      components: stage.components.map(function (component) {
        var unit = component.unit;
        var totalUnit = unit.indexOf("ml") === 0 ? "ml" : "g";
        return { name: component.name, amount: roundAmount(component.amount * scale), unit: totalUnit };
      })
    };
  }

  function customComponents(gallons) {
    var liters = gallons * 3.78541;
    var components = [];
    for (var index = 1; index <= 3; index += 1) {
      var name = document.querySelector("#customName" + index).value.trim();
      var rateValue = document.querySelector("#customRate" + index).value;
      var rate = Number(rateValue);
      var unit = document.querySelector("#customUnit" + index).value;
      if (!name && !rateValue) continue;
      if (!name || !Number.isFinite(rate) || rate <= 0) throw new Error("Give every custom product a name and a rate greater than zero.");
      var perLiter = unit.slice(-2) === "/L";
      components.push({
        name: name,
        amount: roundAmount(rate * (perLiter ? liters : gallons)),
        unit: unit.indexOf("ml") === 0 ? "ml" : "g"
      });
    }
    if (!components.length) throw new Error("Enter at least one product and its label rate.");
    return components;
  }

  function amountCards(components) {
    return components.map(function (component) {
      return '<div class="amount"><strong>' + escapeHtml(component.amount + " " + component.unit) + '</strong><span>' + escapeHtml(component.name) + "</span></div>";
    }).join("");
  }

  function calculate(event) {
    event.preventDefault();
    error.hidden = true;
    changed.hidden = true;
    var volume = Number(form.volume.value);
    if (!Number.isFinite(volume) || volume <= 0 || volume > 10000) {
      error.textContent = "Enter a reservoir volume between 1 and 10,000 gallons or liters.";
      error.hidden = false;
      form.volume.focus();
      return;
    }

    var gallons = gallonsFromForm();
    var program = selectedProgram();
    var crop = config.crops[form.crop.value];
    var system = config.systems[form.system.value];
    var water = config.waterSources[form.waterSource.value];
    if (!form.fresh.checked) {
      var partialGuidance = form.system.value === "hydropip"
        ? "HydroPip treats the reservoir as one batch. If the pump is at risk, add only enough plain water to protect it. Calculate a new recipe when you are preparing fresh water."
        : "A full recipe assumes the entire selected volume is fresh water. Measure the solution already present and follow your nutrient maker's EC and top-off instructions before adding anything.";
      result.innerHTML = '<div class="warning"><strong>Do not add a complete recipe to a partially depleted reservoir.</strong><br>' + escapeHtml(partialGuidance) + '</div>';
      hasCalculated = true;
      return;
    }

    try {
      var stageData = null;
      var components = null;
      var source = "Your product label";
      var sourceUrl = "";
      var title = "Custom label rate";
      var reason = "The calculator scaled the exact rate you entered without changing the manufacturer's formula.";
      var mixingOrder = ["Add products one at a time to fresh water.", "Mix thoroughly between products.", "Follow the product label for any required order or incompatibilities.", "Check EC, then adjust pH after the complete solution is mixed."];

      if (program) {
        var calculated = componentsForProgram(program, gallons);
        stageData = calculated.stage;
        components = calculated.components;
        source = program.sourceLabel;
        sourceUrl = program.sourceUrl;
        title = program.label;
        reason = stageData.reason;
        mixingOrder = program.mixingOrder;
      } else {
        components = customComponents(gallons);
      }

      var sourceMarkup = sourceUrl ? '<a class="source-link" href="' + escapeHtml(sourceUrl) + '" target="_blank" rel="noopener">' + escapeHtml(source) + "</a>" : escapeHtml(source);
      result.innerHTML = '<div class="result-head"><div><p class="eyebrow">Calculated for ' + escapeHtml(displayVolume()) + '</p><h2>' + escapeHtml(title) + '</h2></div><span class="btn">' + escapeHtml(system.label) + '</span></div>' +
        '<div class="recipe">' + amountCards(components) + '</div>' +
        '<p class="reason"><strong>Why this result:</strong> ' + escapeHtml(reason) + (stageData && stageData.targetEc ? '<br><strong>Program EC target:</strong> ' + escapeHtml(stageData.targetEc) : '') + '</p>' +
        '<div class="targets"><div class="target">Crop pH starting range<strong>' + escapeHtml(crop.ph) + '</strong></div><div class="target">Crop EC starting range<strong>' + escapeHtml(crop.ec) + ' mS/cm</strong></div></div>' +
        '<p class="fine">' + escapeHtml(crop.note) + ' ' + escapeHtml(water.note) + '</p>' +
        '<h3>Mix in this order</h3><ol class="steps">' + mixingOrder.map(function (step) { return "<li>" + escapeHtml(step) + "</li>"; }).join("") + "</ol>" +
        '<h3>Operate this system</h3><p class="reason">' + escapeHtml(system.operation) + '</p>' +
        '<p class="fine"><strong>Recipe source:</strong> ' + sourceMarkup + '. ' + escapeHtml(config.disclaimer) + '</p>' +
        '<div class="warning"><strong>Important nutrient safety:</strong><br>' + escapeHtml(nutrientSafetyDisclaimer) + '</div>' +
        '<div class="result-actions"><button class="btn secondary" type="button" id="printResult">Print this mix</button><a class="btn primary" href="https://www.hydropip.com/pip" target="_top">Ask Pip about this grow</a></div>';
      document.querySelector("#printResult").addEventListener("click", function () { window.print(); });
      hasCalculated = true;
    } catch (caught) {
      error.textContent = caught.message;
      error.hidden = false;
    }
  }

  function renderProgramCards() {
    var cards = Object.keys(config.programs).map(function (key) {
      var program = config.programs[key];
      return '<article class="program-card"><h3>' + escapeHtml(program.shortLabel) + '</h3><p>' + escapeHtml(program.bestFor) + '</p></article>';
    });
    if (config.access.pro) cards.push('<article class="program-card"><h3>Any labeled nutrient</h3><p>Enter the label rate for up to three products and scale it to your actual reservoir without guessing.</p></article>');
    document.querySelector("#programCards").innerHTML = cards.join("");
  }

  function sessionToken() {
    var match = String(window.location.hash || "").match(/(?:^#|&)session=([^&]+)/);
    if (match) {
      var token = decodeURIComponent(match[1]);
      try { window.sessionStorage.setItem("hydropipToolSession", token); } catch (error) {}
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      return token;
    }
    try { return window.sessionStorage.getItem("hydropipToolSession") || ""; } catch (error) { return ""; }
  }

  function showMemberGate(message) {
    document.body.classList.remove("access-pending");
    document.body.classList.add("access-blocked");
    accessTitle.textContent = "Sign in to calculate your mix.";
    accessText.textContent = message || "A free HydroPip account unlocks the calculator for the HydroPip system. Pip Pro adds other hydroponic systems, nutrient programs, saved grow history, and personalized planning.";
    accessActions.hidden = false;
  }

  function configureAccess() {
    document.body.classList.remove("access-pending", "access-blocked");
    if (config.access.pro) {
      document.querySelector("#heroEyebrow").textContent = "Pip Pro nutrient calculator";
      document.querySelector("#heroTitle").textContent = "Mix for the grow you actually have.";
      document.querySelector("#heroText").textContent = "Choose your system, reservoir, crop, stage, water, and nutrient program. Pip Pro scales the supported recipe or your product-label rate and keeps it connected to the grow.";
      document.querySelector("#heroCardTitle").textContent = "One calculator. More ways to grow.";
      document.querySelector("#heroCardText").textContent = "HydroPip, DWC, NFT, Kratky, drip, Dutch buckets, ebb and flow, aeroponics, and custom programs stay in one workspace.";
      return;
    }
    form.system.disabled = true;
    form.program.disabled = true;
    memberOnlyNote.hidden = false;
    proUpsell.hidden = false;
    document.querySelector("#programHeading").textContent = "The tested HydroPip batch method.";
  }

  var token = sessionToken();
  if (!token) {
    showMemberGate();
    return;
  }

  fetch("/api/pip/nutrient-programs", { headers: { Authorization: "Bearer " + token } }).then(function (response) {
    if (response.status === 401) {
      try { window.sessionStorage.removeItem("hydropipToolSession"); } catch (error) {}
      throw new Error("member_session_required");
    }
    if (!response.ok) throw new Error("Unable to load nutrient programs.");
    return response.json();
  }).then(function (data) {
    config = data;
    populateSelect(form.system, config.systems);
    populateSelect(form.crop, config.crops);
    populateSelect(form.waterSource, config.waterSources);
    form.program.innerHTML = Object.keys(config.programs).map(function (key) { return option(key, config.programs[key].label); }).join("") + (config.access.pro ? option("custom_label", "Another brand - use my label rate") : "");
    form.system.value = "hydropip";
    form.crop.value = "mixed";
    form.waterSource.value = "unknown_tap";
    form.program.value = "hydropip_masterblend";
    updateProgramUi();
    form.stage.value = "vegetative";
    configureAccess();
    renderProgramCards();
    form.addEventListener("submit", calculate);
    form.program.addEventListener("change", function () { updateProgramUi(); markDirty(); });
    form.system.addEventListener("change", function () {
      var recommended = config.systems[form.system.value].recommendedProgram;
      if (recommended && form.program.value !== "custom_label") {
        form.program.value = recommended;
        updateProgramUi();
      }
      markDirty();
    });
    form.addEventListener("input", markDirty);
  }).catch(function (caught) {
    if (caught.message === "member_session_required") {
      showMemberGate("Your member session has expired. Sign in again to use the HydroPip calculator. Pip Pro unlocks other systems and nutrient programs.");
      return;
    }
    document.body.classList.remove("access-pending");
    error.textContent = caught.message;
    error.hidden = false;
  });
})();
