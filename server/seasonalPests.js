import {dateInZone} from '../assets/js/reminder-schedule.js';
import {pestProductLinks} from './pipProductLinks.js';

// Reviewed guidance, not a live outbreak feed. Month windows below are coarse
// editorial interpretations of the linked regional references, not predictions.
const reviewedOn = '2026-09-15';
const sources = {
  hornworm: {title:'UMN Extension: hornworms',url:'https://extension.umn.edu/garden-and-home/yard-and-garden/yard-and-garden-insects/tomato-hornworms'},
  maryland: {title:'Maryland Extension: hornworms',url:'https://www.extension.umd.edu/resource/tobacco-and-tomato-hornworm-vegetables'},
  california: {title:'UC IPM: hornworms',url:'https://ipm.ucanr.edu/home-and-landscape/hornworms/'},
  florida: {title:'UF/IFAS: tobacco hornworm',url:'https://ask.ifas.ufl.edu/publication/IN1187'},
  cabbage: {title:'UMN Extension: cabbage caterpillars',url:'https://blog-fruit-vegetable-ipm.extension.umn.edu/2024/06/cole-crop-caterpillars-make-holey-mess.html'},
  looper: {title:'Maryland Extension: cabbage loopers',url:'https://extension.umd.edu/resource/cabbage-looper-vegetables'},
  aphids: {title:'UC IPM: aphids',url:'https://ipm.ucanr.edu/home-and-landscape/aphids/'}
};
const library = [
  {id:'hornworms',title:'Watch for hornworms',hosts:/\b(tomato(?:es)?|peppers?|eggplants?|potato(?:es)?)\b/i,
    check:'Check the upper leaves for fresh chewing and dark droppings. Look closely for a green caterpillar with a horn at its tail.',
    action:'Hand-pick confirmed hornworms when practical. Leave caterpillars bearing white wasp cocoons so these beneficial wasps can emerge.',
    treatment:'If removal is not enough, Bt kurstaki can target young caterpillars. Confirm the pest first; a seasonal reminder alone is not a reason to spray.',
    product:'Bt kurstaki options on Amazon',productKey:'btKurstaki',sources:[sources.hornworm,sources.florida],
    windows:{MN:{months:[6,7,8,9],source:sources.hornworm},MD:{months:[5,6,7,8,9],source:sources.maryland},CA:{months:[6,7,8,9],source:sources.california}}},
  {id:'cabbage-caterpillars',title:'Check for cabbage caterpillars',hosts:/\b(cabbage|broccoli|cauliflower|kale|collards?|brussels sprouts?|bok choy|pak choi|turnips?)\b/i,
    check:'Look beneath leaves and into developing heads for small caterpillars, fresh holes, and droppings.',
    action:'Remove caterpillars you can identify and reach. Check again as new leaves develop; different caterpillar species can feed on the same crop.',
    treatment:'Bt kurstaki is an option for susceptible young caterpillars if control is needed. Identify the caterpillar before choosing a treatment.',
    product:'Bt kurstaki options on Amazon',productKey:'btKurstaki',sources:[sources.cabbage,sources.looper],
    windows:{MN:{months:[5,6,7,8,9,10],source:sources.cabbage},MD:{months:[5,6,7,8,9,10],source:sources.looper}}},
  {id:'aphids',title:'Check tender growth for aphids',hosts:/\b(tomato(?:es)?|peppers?|eggplants?|lettuce|spinach|kale|cabbage|broccoli|cauliflower|beans?|peas?|cucumbers?|squash|melons?|beets?|basil|parsley|cilantro|collards?)\b/i,
    check:'Inspect soft new growth and leaf undersides for clusters of small insects, sticky residue, or curling leaves.',
    action:'For a small colony, try dislodging aphids with water without damaging the plant. Watch for lady beetles and other natural enemies before treating.',
    treatment:'If aphids persist and control is needed, consider a labeled insecticidal soap. It must contact the insects; household dish detergent is not a substitute.',
    product:'Insecticidal soap options on Amazon',productKey:'insecticidalSoap',sources:[sources.aphids],windows:{}}
];

// Only interpret explicit state names / delimited postal abbreviations. A ZIP,
// city alone, or a USDA zone cannot establish a regional pest calendar.
export function pestRegion(location) {
  const text=String(location||'').trim();
  if (/\b(canada|australia|united kingdom|new zealand|mexico)\b/i.test(text)) return null;
  const names={MN:'Minnesota',MD:'Maryland',CA:'California',FL:'Florida'};
  const matches=Object.entries(names).filter(([code,name])=>new RegExp('\\b'+name+'\\b','i').test(text)||new RegExp('(?:^|,\\s*)'+code+'(?:$|\\s+\\d{5}(?:-\\d{4})?$|,\\s*(?:US|USA|United States)$)','i').test(text));
  return matches.length===1?{code:matches[0][0],name:matches[0][1]}:null;
}

export function buildPestWatch({profile={},currentCrops=[],now=new Date(),timezone='UTC'}={}) {
  const day=dateInZone(now,timezone),month=Number(day.slice(5,7)),region=pestRegion(profile.location);
  const area=String(profile.areaType||'');
  const protectedGrow=['indoor','greenhouse'].includes(area);
  const outdoor=['outdoor_open','outdoor_covered'].includes(area);
  const crops=[...new Set(currentCrops.filter(c=>['sprouted','growing','harvest_ready','harvesting'].includes(c.status)).map(c=>String(c.crop||'').trim()).filter(Boolean))];
  const items=library.flatMap(pest=>{
    const hosts=crops.filter(c=>pest.hosts.test(c)&&!(pest.id==='hornworms'&&/\bsweet potatoes?\b/i.test(c)));
    if(!hosts.length || (protectedGrow && pest.id!=='aphids'))return [];
    const window=outdoor&&region?pest.windows[region.code]:null;
    if(window&&!window.months.includes(month))return [];
    const seasonal=Boolean(window);
    return [{id:pest.id,title:pest.title,crops:hosts,kind:seasonal?'seasonal':'crop_watch',
      label:seasonal?'Seasonal reminder':'Crop scouting reminder',
      reason:seasonal?`${region.name}: an approximate seasonal scouting window for ${hosts.join(', ')}. Actual timing varies with local conditions.`:
        `Current crops: ${hosts.join(', ')}. ${protectedGrow?'Indoor and greenhouse checks follow the plants, not the outdoor calendar.':'This is a crop-based check; local seasonal timing has not been established.'}`,
      check:pest.check,action:pest.action,treatment:pest.treatment,product:pest.product,productUrl:pestProductLinks[pest.productKey],
      sources:[...new Map([...(window?[window.source]:[]),...pest.sources].map(s=>[s.url,s])).values()],reviewedOn}];
  });
  return {asOf:day,reviewedOn,location:profile.location||null,zone:profile.growZone||null,region:region?.name||null,items,
    notice:'Seasonal and crop guidance, not a report of an infestation nearby.',
    message:!crops.length?'Add crops that are sprouted or growing in this grow to see relevant pest checks. Seed packets and planned crops do not trigger reminders.':
      !items.length?'No matching reminder in this starter library today. Keep checking your plants; this does not mean pests are absent.':
      protectedGrow?'Matched to your protected growing area and current crops.':
      !region?'Showing crop checks. Regional timing needs a supported state in Profile; a ZIP or zone alone is not enough.':
      'Matched to current crops. Where a regional calendar is available, reminders also follow the season.',
    coverage:'Starter regional calendars: hornworms in Minnesota, Maryland, and California; cabbage caterpillars in Minnesota and Maryland. Other locations receive crop scouting guidance. Zone is shown for context, not used to predict pests.'};
}
