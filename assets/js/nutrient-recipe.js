// Shared by the browser preview and server save. Saved batches retain this
// calculation's input, catalog version, source, and amounts after catalog updates.
export function roundAmount(value) {
  return value >= 100 ? Math.round(value) : value >= 10 ? Math.round(value * 10) / 10 : Math.round(value * 100) / 100;
}
export function calculateRecipe(config, input) {
  const volume = Number(input.volume), volumeUnit = input.volumeUnit;
  if (!Number.isFinite(volume) || volume < 1 || volume > 10000 || !['gallons','liters'].includes(volumeUnit)) throw Error('Enter a batch volume between 1 and 10,000 gallons or liters.');
  if (input.fresh !== true) throw Error('A complete recipe requires fresh water. Do not add a full dose to a partly used solution.');
  const system = config.systems[input.system], crop = config.crops[input.crop], water = config.waterSources[input.waterSource];
  if (!system || !crop || !water) throw Error('Choose a supported system, crop, and water source.');
  const gallons = volumeUnit === 'liters' ? volume / 3.78541 : volume;
  const program = config.programs[input.program];
  let components, stage, rates = [];
  if (program) {
    stage = program.stages[input.stage];
    if (!stage) throw Error('Choose a supported growth stage.');
    components = stage.components.map(component => ({name:component.name, amount:roundAmount(component.amount * (program.kind === 'scaledPreset' ? gallons / program.standardGallons : gallons)), unit:component.unit.startsWith('ml') ? 'ml' : 'g'}));
  } else {
    if (input.program !== 'custom_label' || !config.access?.pro) throw Error('This nutrient program is not available for your account.');
    if (!['seedling','early_vegetative','vegetative','flowering','fruiting','ripening'].includes(input.stage)) throw Error('Choose a supported growth stage.');
    rates = (input.custom || []).filter(item => item.name || item.rate !== '');
    if (!rates.length || rates.length > 3) throw Error('Enter one to three products and their label rates.');
    rates = rates.map(item => {
      const name = String(item.name || '').trim().slice(0,120), rate = Number(item.rate), unit = item.unit;
      if (!name || !Number.isFinite(rate) || rate <= 0 || rate > 10000 || !['ml/gal','g/gal','ml/L','g/L'].includes(unit)) throw Error('Give every custom product a name and a valid label rate greater than zero.');
      return {name,rate,unit};
    });
    components = rates.map(item => ({name:item.name,amount:roundAmount(item.rate * (item.unit.endsWith('/L') ? gallons * 3.78541 : gallons)),unit:item.unit.startsWith('ml') ? 'ml' : 'g'}));
  }
  return {
    catalogVersion:config.version, catalogReviewed:config.lastReviewed,
    input:{volume,volumeUnit,fresh:true,system:input.system,crop:input.crop,waterSource:input.waterSource,program:input.program,stage:input.stage,custom:rates},
    gallons, title:program?.label || 'Custom label rate', stageLabel:stage?.label || input.stage.replaceAll('_',' '),
    source:program?.sourceLabel || 'Your product label', sourceUrl:program?.sourceUrl || '',
    components, mixingOrder:program?.mixingOrder || ['Add products one at a time to fresh water.','Mix thoroughly between products.','Follow the product label for order and incompatibilities.','Check EC, then adjust pH after mixing.'],
    reason:stage?.reason || 'Scaled from the product label rates you entered.', targetEc:stage?.targetEc || null,
    crop, water, system
  };
}
