// Tower addresses are stored as flat indices; resizing must preserve their physical coordinates.
export function remapTowerLayout(before,after,seeds,plan){
 const shape=p=>({towers:Number(p.towerCount),levels:Number(p.levelsPerTower),pots:Number(p.potsPerLevel)||4});
 const old=shape(before),next=shape(after),valid=s=>Number.isInteger(s.towers)&&s.towers>=1&&s.towers<=40&&Number.isInteger(s.levels)&&s.levels>=1&&s.levels<=20&&Number.isInteger(s.pots)&&s.pots>=1&&s.pots<=8&&s.towers*s.levels*s.pots<=1600;
 const changed=['towers','levels','pots'].some(k=>old[k]!==next[k]);if(!changed)return null;
 const active=s=>s.plantingLocation==='hydropip_tower'&&!['finished','failed','harvested'].includes(s.status);
 const mapped=seeds.filter(s=>active(s)&&s.towerPositions?.length);
 if(!valid(next)){if(mapped.length||plan?.slots?.some(s=>s.crop))throw Object.assign(Error('Keep a valid tower count and height while crops are mapped.'),{statusCode:409});return null;}
 if(!valid(old)&&mapped.length)throw Object.assign(Error('Existing crop addresses need review before changing the layout.'),{statusCode:409});
 const mapIndex=i=>{const tower=Math.floor(i/(old.levels*old.pots)),level=Math.floor(i/old.pots)%old.levels,pot=i%old.pots;if(tower>=next.towers||level>=next.levels||pot>=next.pots)return null;return tower*next.levels*next.pots+level*next.pots+pot;};
 const updates=mapped.map(s=>{const positions=s.towerPositions.map(mapIndex);if(positions.some(i=>i===null))throw Object.assign(Error('This would remove a level with plants. Move or mark those plants removed in My Crops first.'),{statusCode:409});return{...s,towerPositions:positions,updatedAt:new Date().toISOString()};});
 let resized=null;if(plan){const prior=new Map();for(const slot of plan.slots||[]){const index=mapIndex(slot.index);if(index===null){if(slot.crop&&slot.status!=='available'&&slot.status!=='keep_clear')throw Object.assign(Error('Clear planned crops on the removed levels in My Crops before reducing this layout.'),{statusCode:409});continue;}prior.set(index,slot);}
 resized={...plan,revision:plan.revision+1,shape:{...next,capacity:next.towers*next.levels*next.pots},slots:Array.from({length:next.towers*next.levels*next.pots},(_,index)=>({...prior.get(index),index,tower:Math.floor(index/(next.levels*next.pots))+1,level:Math.floor(index/next.pots)%next.levels+1,face:String.fromCharCode(65+index%next.pots),status:prior.get(index)?.status||'available'}))};delete resized.undo;
 }
 return{seeds:updates,plan:resized};
}
