(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const kl="179",tp=0,Lu=1,np=2,Qd=1,eh=2,Ci=3,rr=0,vn=1,pn=2,tr=0,is=1,Du=2,Iu=3,Uu=4,ip=5,_r=100,rp=101,sp=102,op=103,ap=104,cp=200,lp=201,up=202,dp=203,Fc=204,Bc=205,hp=206,fp=207,pp=208,mp=209,gp=210,vp=211,xp=212,_p=213,yp=214,zc=0,Hc=1,Vc=2,as=3,Gc=4,Wc=5,$c=6,qc=7,th=0,bp=1,wp=2,nr=0,Mp=1,Sp=2,Ep=3,nh=4,Tp=5,Ap=6,Cp=7,ih=300,cs=301,ls=302,Xc=303,Yc=304,Da=306,pa=1e3,br=1001,jc=1002,Pn=1003,Rp=1004,Ro=1005,ai=1006,Qa=1007,wr=1008,hi=1009,rh=1010,sh=1011,js=1012,Nl=1013,Er=1014,ci=1015,po=1016,Ol=1017,Fl=1018,Js=1020,oh=35902,ah=1021,ch=1022,qn=1023,Ks=1026,Zs=1027,Bl=1028,zl=1029,lh=1030,Hl=1031,Vl=1033,ia=33776,ra=33777,sa=33778,oa=33779,Jc=35840,Kc=35841,Zc=35842,Qc=35843,el=36196,tl=37492,nl=37496,il=37808,rl=37809,sl=37810,ol=37811,al=37812,cl=37813,ll=37814,ul=37815,dl=37816,hl=37817,fl=37818,pl=37819,ml=37820,gl=37821,aa=36492,vl=36494,xl=36495,uh=36283,_l=36284,yl=36285,bl=36286,Pp=3200,Lp=3201,Gl=0,Dp=1,Zi="",Qt="srgb",us="srgb-linear",ma="linear",St="srgb",kr=7680,ku=519,Ip=512,Up=513,kp=514,dh=515,Np=516,Op=517,Fp=518,Bp=519,Nu=35044,Ou="300 es",li=2e3,ga=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const zs=Math.PI/180,Qs=180/Math.PI;function Rr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Wl(n,e){return(n%e+e)%e}function zp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Hp(n,e,t){return n!==e?(t-n)/(e-n):0}function Hs(n,e,t){return(1-t)*n+t*e}function Vp(n,e,t,i){return Hs(n,e,1-Math.exp(-t*i))}function Gp(n,e=1){return e-Math.abs(Wl(n,e*2)-e)}function Wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $p(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Xp(n,e){return n+Math.random()*(e-n)}function Yp(n){return n*(.5-Math.random())}function jp(n){n!==void 0&&(Fu=n);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jp(n){return n*zs}function Kp(n){return n*Qs}function Zp(n){return(n&n-1)===0&&n!==0}function Qp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function em(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tm(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),p=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const It={DEG2RAD:zs,RAD2DEG:Qs,generateUUID:Rr,clamp:dt,euclideanModulo:Wl,mapLinear:zp,inverseLerp:Hp,lerp:Hs,damp:Vp,pingpong:Gp,smoothstep:Wp,smootherstep:$p,randInt:qp,randFloat:Xp,randFloatSpread:Yp,seededRandom:jp,degToRad:Jp,radToDeg:Kp,isPowerOfTwo:Zp,ceilPowerOfTwo:Qp,floorPowerOfTwo:em,setQuaternionFromProperEuler:tm,normalize:hn,denormalize:Zr};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==p||l!==f||u!==g){let v=1-a;const m=c*p+l*f+u*g+d*x,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,m*S);v=Math.sin(v*A)/R,a=Math.sin(a*A)/R}const _=a*S;if(c=c*v+p*_,l=l*v+f*_,u=u*v+g*_,d=d*v+x*_,v===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*p,e[t+1]=c*g+u*p+l*d-a*f,e[t+2]=l*g+u*f+a*p-c*d,e[t+3]=u*g-a*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"YZX":this._x=p*u*d+l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d-p*f*g;break;case"XZY":this._x=p*u*d-l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new U,Bu=new mo;class ot{constructor(e,t,i,r,s,o,a,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],f=i[5],g=i[8],x=r[0],v=r[3],m=r[6],S=r[1],y=r[4],_=r[7],R=r[2],A=r[5],P=r[8];return s[0]=o*x+a*S+c*R,s[3]=o*v+a*y+c*A,s[6]=o*m+a*_+c*P,s[1]=l*x+u*S+d*R,s[4]=l*v+u*y+d*A,s[7]=l*m+u*_+d*P,s[2]=p*x+f*S+g*R,s[5]=p*v+f*y+g*A,s[8]=p*m+f*_+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,p=a*c-u*s,f=l*s-o*c,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=p*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new ot;function hh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nm(){const n=va("canvas");return n.style.display="block",n}const zu={};function rs(n){n in zu||(zu[n]=!0,console.warn(n))}function im(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Hu=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rm(){const n={enabled:!0,workingColorSpace:us,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zi?ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[us]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:Hu,fromXYZ:Vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Hu,fromXYZ:Vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const _t=rm();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Nr;class sm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nr===void 0&&(Nr=va("canvas")),Nr.width=e.width,Nr.height=e.height;const r=Nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Nr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let om=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nc(r[o].image)):s.push(nc(r[o]))}else s=nc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;const ic=new U;class an extends _s{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,i=br,r=br,s=ai,o=wr,a=qn,c=hi,l=an.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Rr(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ic).x}get height(){return this.source.getSize(ic).y}get depth(){return this.source.getSize(ic).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=ih;an.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],f=c[5],g=c[9],x=c[2],v=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+v)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(f+1)/2,R=(m+1)/2,A=(u+p)/4,P=(d+x)/4,D=(g+v)/4;return y>_&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=P/i):_>R?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=D/s),this.set(i,r,s,t),this}let S=Math.sqrt((v-g)*(v-g)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(v-g)/S,this.y=(d-x)/S,this.z=(p-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends _s{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new an(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $l(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends cm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fh extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lm extends an{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Lo.subVectors(this.max,Ls),Or.subVectors(e.a,Ls),Fr.subVectors(e.b,Ls),Br.subVectors(e.c,Ls),$i.subVectors(Fr,Or),qi.subVectors(Br,Fr),dr.subVectors(Or,Br);let t=[0,-$i.z,$i.y,0,-qi.z,qi.y,0,-dr.z,dr.y,$i.z,0,-$i.x,qi.z,0,-qi.x,dr.z,0,-dr.x,-$i.y,$i.x,0,-qi.y,qi.x,0,-dr.y,dr.x,0];return!rc(t,Or,Fr,Br,Lo)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,Or,Fr,Br,Lo))?!1:(Do.crossVectors($i,qi),t=[Do.x,Do.y,Do.z],rc(t,Or,Fr,Br,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,Po=new Hi,Or=new U,Fr=new U,Br=new U,$i=new U,qi=new U,dr=new U,Ls=new U,Lo=new U,Do=new U,hr=new U;function rc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hr.fromArray(n,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),c=e.dot(hr),l=t.dot(hr),u=i.dot(hr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const um=new Hi,Ds=new U,sc=new U;class go{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):um.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(sc)),this.expandByPoint(Ds.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new U,oc=new U,Io=new U,Xi=new U,ac=new U,Uo=new U,cc=new U;class ph{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){oc.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(oc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Io),a=Xi.dot(this.direction),c=-Xi.dot(Io),l=Xi.lengthSq(),u=Math.abs(1-o*o);let d,p,f,g;if(u>0)if(d=o*c-a,p=o*a-c,g=s*u,d>=0)if(p>=-g)if(p<=g){const x=1/u;d*=x,p*=x,f=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(oc).addScaledVector(Io,p),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){ac.subVectors(t,e),Uo.subVectors(i,e),cc.crossVectors(ac,Uo);let o=this.direction.dot(cc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const c=a*this.direction.dot(Uo.crossVectors(Xi,Uo));if(c<0)return null;const l=a*this.direction.dot(ac.cross(Xi));if(l<0||c+l>o)return null;const u=-a*Xi.dot(cc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,o,a,c,l,u,d,p,f,g,x,v){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,x,v)}set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,x,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=p,m[3]=f,m[7]=g,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*u,f=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-x*l,t[9]=-a*c,t[2]=x-p*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,f=c*d,g=l*u,x=l*d;t[0]=p+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,f=c*d,g=l*u,x=l*d;t[0]=p-x*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,f=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-p*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=p-x*d}else if(e.order==="XZY"){const p=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+x,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,hm)}lookAt(e,t,i){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Yi.crossVectors(i,Tn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Yi.crossVectors(i,Tn)),Yi.normalize(),ko.crossVectors(Tn,Yi),r[0]=Yi.x,r[4]=ko.x,r[8]=Tn.x,r[1]=Yi.y,r[5]=ko.y,r[9]=Tn.y,r[2]=Yi.z,r[6]=ko.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],f=i[13],g=i[2],x=i[6],v=i[10],m=i[14],S=i[3],y=i[7],_=i[11],R=i[15],A=r[0],P=r[4],D=r[8],b=r[12],w=r[1],C=r[5],L=r[9],k=r[13],O=r[2],B=r[6],F=r[10],Y=r[14],G=r[3],re=r[7],ae=r[11],Ce=r[15];return s[0]=o*A+a*w+c*O+l*G,s[4]=o*P+a*C+c*B+l*re,s[8]=o*D+a*L+c*F+l*ae,s[12]=o*b+a*k+c*Y+l*Ce,s[1]=u*A+d*w+p*O+f*G,s[5]=u*P+d*C+p*B+f*re,s[9]=u*D+d*L+p*F+f*ae,s[13]=u*b+d*k+p*Y+f*Ce,s[2]=g*A+x*w+v*O+m*G,s[6]=g*P+x*C+v*B+m*re,s[10]=g*D+x*L+v*F+m*ae,s[14]=g*b+x*k+v*Y+m*Ce,s[3]=S*A+y*w+_*O+R*G,s[7]=S*P+y*C+_*B+R*re,s[11]=S*D+y*L+_*F+R*ae,s[15]=S*b+y*k+_*Y+R*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],f=e[14],g=e[3],x=e[7],v=e[11],m=e[15];return g*(+s*c*d-r*l*d-s*a*p+i*l*p+r*a*f-i*c*f)+x*(+t*c*f-t*l*p+s*o*p-r*o*f+r*l*u-s*c*u)+v*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+m*(-r*a*u-t*c*d+t*a*p+r*o*d-i*o*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],f=e[11],g=e[12],x=e[13],v=e[14],m=e[15],S=d*v*l-x*p*l+x*c*f-a*v*f-d*c*m+a*p*m,y=g*p*l-u*v*l-g*c*f+o*v*f+u*c*m-o*p*m,_=u*x*l-g*d*l+g*a*f-o*x*f-u*a*m+o*d*m,R=g*d*c-u*x*c-g*a*p+o*x*p+u*a*v-o*d*v,A=t*S+i*y+r*_+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=S*P,e[1]=(x*p*s-d*v*s-x*r*f+i*v*f+d*r*m-i*p*m)*P,e[2]=(a*v*s-x*c*s+x*r*l-i*v*l-a*r*m+i*c*m)*P,e[3]=(d*c*s-a*p*s-d*r*l+i*p*l+a*r*f-i*c*f)*P,e[4]=y*P,e[5]=(u*v*s-g*p*s+g*r*f-t*v*f-u*r*m+t*p*m)*P,e[6]=(g*c*s-o*v*s-g*r*l+t*v*l+o*r*m-t*c*m)*P,e[7]=(o*p*s-u*c*s+u*r*l-t*p*l-o*r*f+t*c*f)*P,e[8]=_*P,e[9]=(g*d*s-u*x*s-g*i*f+t*x*f+u*i*m-t*d*m)*P,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*m+t*a*m)*P,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*P,e[12]=R*P,e[13]=(u*x*r-g*d*r+g*i*p-t*x*p-u*i*v+t*d*v)*P,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*v-t*a*v)*P,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*p+t*a*p)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,p=s*l,f=s*u,g=s*d,x=o*u,v=o*d,m=a*d,S=c*l,y=c*u,_=c*d,R=i.x,A=i.y,P=i.z;return r[0]=(1-(x+m))*R,r[1]=(f+_)*R,r[2]=(g-y)*R,r[3]=0,r[4]=(f-_)*A,r[5]=(1-(p+m))*A,r[6]=(v+S)*A,r[7]=0,r[8]=(g+y)*P,r[9]=(v-S)*P,r[10]=(1-(p+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),a=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const l=1/s,u=1/o,d=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=li,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===li)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ga)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=li,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===li)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===ga)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new U,Gn=new wt,dm=new U(0,0,0),hm=new U(1,1,1),Yi=new U,ko=new U,Tn=new U,Gu=new wt,Wu=new mo;class fi{constructor(e=0,t=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const $u=new U,Hr=new mo,Ei=new wt,No=new U,Is=new U,pm=new U,mm=new mo,qu=new U(1,0,0),Xu=new U(0,1,0),Yu=new U(0,0,1),ju={type:"added"},gm={type:"removed"},Vr={type:"childadded",child:null},lc={type:"childremoved",child:null};class Nt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new U,t=new fi,i=new mo,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new ot}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?No.copy(e):No.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Is,No,this.up):Ei.lookAt(No,Is,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(Ei),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ju),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ju),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new U,Ti=new U,uc=new U,Ai=new U,Gr=new U,Wr=new U,Ju=new U,dc=new U,hc=new U,fc=new U,pc=new Wt,mc=new Wt,gc=new Wt;class $n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),Ti.subVectors(i,t),uc.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(Ti),c=Wn.dot(uc),l=Ti.dot(Ti),u=Ti.dot(uc),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(l*c-a*u)*p,g=(o*u-a*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,i),gc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pc,s.x),o.addScaledVector(mc,s.y),o.addScaledVector(gc,s.z),o}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),Ti.subVectors(e,t),Wn.cross(Ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Wn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Wr.subVectors(s,i),dc.subVectors(e,i);const c=Gr.dot(dc),l=Wr.dot(dc);if(c<=0&&l<=0)return t.copy(i);hc.subVectors(e,r);const u=Gr.dot(hc),d=Wr.dot(hc);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Gr,o);fc.subVectors(e,s);const f=Gr.dot(fc),g=Wr.dot(fc);if(g>=0&&f<=g)return t.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Wr,a);const v=u*g-f*d;if(v<=0&&d-u>=0&&f-g>=0)return Ju.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Ju,a);const m=1/(v+x+p);return o=x*m,a=p*m,t.copy(i).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function vc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=Wl(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=vc(o,s,e+1/3),this.g=vc(o,s,e),this.b=vc(o,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return _t.workingToColorSpace(on.copy(this),e),Math.round(dt(on.r*255,0,255))*65536+Math.round(dt(on.g*255,0,255))*256+Math.round(dt(on.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(on.copy(this),t);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Qt){_t.workingToColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Oo);const i=Hs(ji.h,Oo.h,t),r=Hs(ji.s,Oo.s,t),s=Hs(ji.l,Oo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new ut;ut.NAMES=mh;let vm=0;class ys extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=is,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Bc,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vt extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new U,Fo=new me;let xm=0;class Bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nu,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nu&&(e.usage=this.usage),e}}class gh extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vh extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _m=0;const Fn=new wt,xc=new Nt,$r=new U,An=new Hi,Us=new Hi,Kt=new U;class en extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hh(e)?vh:gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(An.min,Us.min),An.expandByPoint(Kt),Kt.addVectors(An.max,Us.max),An.expandByPoint(Kt)):(An.expandByPoint(Us.min),An.expandByPoint(Us.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Kt.fromBufferAttribute(a,l),c&&($r.fromBufferAttribute(e,l),Kt.add($r)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new U,c[D]=new U;const l=new U,u=new U,d=new U,p=new me,f=new me,g=new me,x=new U,v=new U;function m(D,b,w){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,w),p.fromBufferAttribute(s,D),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,w),u.sub(l),d.sub(l),f.sub(p),g.sub(p);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),v.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[D].add(x),a[b].add(x),a[w].add(x),c[D].add(v),c[b].add(v),c[w].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,b=S.length;D<b;++D){const w=S[D],C=w.start,L=w.count;for(let k=C,O=C+L;k<O;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new U,_=new U,R=new U,A=new U;function P(D){R.fromBufferAttribute(r,D),A.copy(R);const b=a[D];y.copy(b),y.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(A,b);const C=_.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,C)}for(let D=0,b=S.length;D<b;++D){const w=S[D],C=w.start,L=w.count;for(let k=C,O=C+L;k<O;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),x=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,v=c.length;x<v;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)p[g++]=l[f++]}return new Bn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],f=e(p,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new wt,fr=new ph,Bo=new go,Zu=new U,zo=new U,Ho=new U,Vo=new U,_c=new U,Go=new U,Qu=new U,Wo=new U;class pe extends Nt{constructor(e=new en,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Go.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(_c.fromBufferAttribute(d,e),o?Go.addScaledVector(_c,u):Go.addScaledVector(_c.sub(t),u))}t.add(Go)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Bo.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Bo,Zu)===null||fr.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&(Ku.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Ku),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const v=p[g],m=o[v.materialIndex],S=Math.max(v.start,f.start),y=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let _=S,R=y;_<R;_+=3){const A=a.getX(_),P=a.getX(_+1),D=a.getX(_+2);r=$o(this,m,e,i,l,u,d,A,P,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let v=g,m=x;v<m;v+=3){const S=a.getX(v),y=a.getX(v+1),_=a.getX(v+2);r=$o(this,o,e,i,l,u,d,S,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const v=p[g],m=o[v.materialIndex],S=Math.max(v.start,f.start),y=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let _=S,R=y;_<R;_+=3){const A=_,P=_+1,D=_+2;r=$o(this,m,e,i,l,u,d,A,P,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let v=g,m=x;v<m;v+=3){const S=v,y=v+1,_=v+2;r=$o(this,o,e,i,l,u,d,S,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function ym(n,e,t,i,r,s,o,a){let c;if(e.side===vn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===rr,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Wo);return l<t.near||l>t.far?null:{distance:l,point:Wo.clone(),object:n}}function $o(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,zo),n.getVertexPosition(c,Ho),n.getVertexPosition(l,Vo);const u=ym(n,e,t,i,zo,Ho,Vo,Qu);if(u){const d=new U;$n.getBarycoord(Qu,zo,Ho,Vo,d),r&&(u.uv=$n.getInterpolatedAttribute(r,a,c,l,d,new me)),s&&(u.uv1=$n.getInterpolatedAttribute(s,a,c,l,d,new me)),o&&(u.normal=$n.getInterpolatedAttribute(o,a,c,l,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new U,materialIndex:0};$n.getNormal(zo,Ho,Vo,p.normal),u.face=p,u.barycoord=d}return u}class Ht extends en{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function g(x,v,m,S,y,_,R,A,P,D,b){const w=_/P,C=R/D,L=_/2,k=R/2,O=A/2,B=P+1,F=D+1;let Y=0,G=0;const re=new U;for(let ae=0;ae<F;ae++){const Ce=ae*C-k;for(let he=0;he<B;he++){const Ge=he*w-L;re[x]=Ge*S,re[v]=Ce*y,re[m]=O,l.push(re.x,re.y,re.z),re[x]=0,re[v]=0,re[m]=A>0?1:-1,u.push(re.x,re.y,re.z),d.push(he/P),d.push(1-ae/D),Y+=1}}for(let ae=0;ae<D;ae++)for(let Ce=0;Ce<P;Ce++){const he=p+Ce+B*ae,Ge=p+Ce+B*(ae+1),et=p+(Ce+1)+B*(ae+1),$=p+(Ce+1)+B*ae;c.push(he,Ge,$),c.push(Ge,et,$),G+=6}a.addGroup(f,G,b),f+=G,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=ds(n[t]);for(const r in i)e[r]=i[r]}return e}function bm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const wm={clone:ds,merge:fn};var Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _h extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new U,ed=new me,td=new me;class bn extends _h{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,ed,td),t.subVectors(td,ed)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Xr=1;class Em extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(qr,Xr,e,t);r.layers=this.layers,this.add(r);const s=new bn(qr,Xr,e,t);s.layers=this.layers,this.add(s);const o=new bn(qr,Xr,e,t);o.layers=this.layers,this.add(o);const a=new bn(qr,Xr,e,t);a.layers=this.layers,this.add(a);const c=new bn(qr,Xr,e,t);c.layers=this.layers,this.add(c);const l=new bn(qr,Xr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yh extends an{constructor(e=[],t=cs,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tm extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ht(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:tr});s.uniforms.tEquirect.value=t;const o=new pe(r,s),a=t.minFilter;return t.minFilter===wr&&(t.minFilter=ai),new Em(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ve extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Am={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const v=t.getJointPose(x,i),m=this._getHandJoint(l,x);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ve;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Xl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=i}clone(){return new Xl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yl extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cm extends an{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Pn,u=Pn,d,p){super(null,o,a,c,l,u,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nd extends Bn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yr=new wt,id=new wt,qo=[],rd=new Hi,Rm=new wt,ks=new pe,Ns=new go;class Tr extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Rm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),rd.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(rd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Yr),Ns.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(Ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(i),e.ray.intersectsSphere(Ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Yr),id.multiplyMatrices(i,Yr),ks.matrixWorld=id,ks.raycast(e,qo);for(let o=0,a=qo.length;o<a;o++){const c=qo[o];c.instanceId=s,c.object=this,t.push(c)}qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Cm(new Float32Array(r*this.count),r,this.count,Bl,ci));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const bc=new U,Pm=new U,Lm=new ot;class Ki{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=bc.subVectors(i,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Lm.getNormalMatrix(e),r=this.coplanarPoint(bc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new go,Dm=new me(.5,.5),Xo=new U;class jl{constructor(e=new Ki,t=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],p=s[6],f=s[7],g=s[8],x=s[9],v=s[10],m=s[11],S=s[12],y=s[13],_=s[14],R=s[15];if(r[0].setComponents(l-o,f-u,m-g,R-S).normalize(),r[1].setComponents(l+o,f+u,m+g,R+S).normalize(),r[2].setComponents(l+a,f+d,m+x,R+y).normalize(),r[3].setComponents(l-a,f-d,m-x,R-y).normalize(),i)r[4].setComponents(c,p,v,_).normalize(),r[5].setComponents(l-c,f-p,m-v,R-_).normalize();else if(r[4].setComponents(l-c,f-p,m-v,R-_).normalize(),t===li)r[5].setComponents(l+c,f+p,m+v,R+_).normalize();else if(t===ga)r[5].setComponents(c,p,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const t=Dm.distanceTo(e.center);return pr.radius=.7071067811865476+t,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jl extends an{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bh extends an{constructor(e,t,i=Er,r,s,o,a=Pn,c=Pn,l,u=Ks,d=1){if(u!==Ks&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qr extends en{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,p=t,f=2*d+p,g=i*2+s,x=r+1,v=new U,m=new U;for(let S=0;S<=g;S++){let y=0,_=0,R=0,A=0;if(S<=i){const b=S/i,w=b*Math.PI/2;_=-u-e*Math.cos(w),R=e*Math.sin(w),A=-e*Math.cos(w),y=b*d}else if(S<=i+s){const b=(S-i)/s;_=-u+b*t,R=e,A=0,y=d+b*p}else{const b=(S-i-s)/i,w=b*Math.PI/2;_=u+e*Math.sin(w),R=e*Math.cos(w),A=e*Math.sin(w),y=d+p+b*d}const P=Math.max(0,Math.min(1,y/f));let D=0;S===0?D=.5/r:S===g&&(D=-.5/r);for(let b=0;b<=r;b++){const w=b/r,C=w*Math.PI*2,L=Math.sin(C),k=Math.cos(C);m.x=-R*k,m.y=_,m.z=R*L,a.push(m.x,m.y,m.z),v.set(-R*k,A,R*L),v.normalize(),c.push(v.x,v.y,v.z),l.push(w+D,P)}if(S>0){const b=(S-1)*x;for(let w=0;w<r;w++){const C=b+w,L=b+w+1,k=S*x+w,O=S*x+w+1;o.push(C,L,k),o.push(L,O,k)}}}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Oi extends en{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new U,u=new me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const f=i+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pt extends en{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],p=[],f=[];let g=0;const x=[],v=i/2;let m=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(f,2));function S(){const _=new U,R=new U;let A=0;const P=(t-e)/i;for(let D=0;D<=s;D++){const b=[],w=D/s,C=w*(t-e)+e;for(let L=0;L<=r;L++){const k=L/r,O=k*c+a,B=Math.sin(O),F=Math.cos(O);R.x=C*B,R.y=-w*i+v,R.z=C*F,d.push(R.x,R.y,R.z),_.set(B,P,F).normalize(),p.push(_.x,_.y,_.z),f.push(k,1-w),b.push(g++)}x.push(b)}for(let D=0;D<r;D++)for(let b=0;b<s;b++){const w=x[b][D],C=x[b+1][D],L=x[b+1][D+1],k=x[b][D+1];(e>0||b!==0)&&(u.push(w,C,k),A+=3),(t>0||b!==s-1)&&(u.push(C,L,k),A+=3)}l.addGroup(m,A,0),m+=A}function y(_){const R=g,A=new me,P=new U;let D=0;const b=_===!0?e:t,w=_===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,v*w,0),p.push(0,w,0),f.push(.5,.5),g++;const C=g;for(let L=0;L<=r;L++){const O=L/r*c+a,B=Math.cos(O),F=Math.sin(O);P.x=b*F,P.y=v*w,P.z=b*B,d.push(P.x,P.y,P.z),p.push(0,w,0),A.x=B*.5+.5,A.y=F*.5*w+.5,f.push(A.x,A.y),g++}for(let L=0;L<r;L++){const k=R+L,O=C+L;_===!0?u.push(O,O+1,k):u.push(O+1,O,k),D+=3}l.addGroup(m,D,_===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vi extends pt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Vi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends en{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new U,_=new U,R=new U;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],_),f(t[A+2],R),c(y,_,R,S)}function c(S,y,_,R){const A=R+1,P=[];for(let D=0;D<=A;D++){P[D]=[];const b=S.clone().lerp(_,D/A),w=y.clone().lerp(_,D/A),C=A-D;for(let L=0;L<=C;L++)L===0&&D===A?P[D][L]=b:P[D][L]=b.clone().lerp(w,L/C)}for(let D=0;D<A;D++)for(let b=0;b<2*(A-D)-1;b++){const w=Math.floor(b/2);b%2===0?(p(P[D][w+1]),p(P[D+1][w]),p(P[D][w])):(p(P[D][w+1]),p(P[D+1][w+1]),p(P[D+1][w]))}}function l(S){const y=new U;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(S),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function u(){const S=new U;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const _=v(S)/2/Math.PI+.5,R=m(S)/Math.PI+.5;o.push(_,1-R)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){const y=o[S+0],_=o[S+2],R=o[S+4],A=Math.max(y,_,R),P=Math.min(y,_,R);A>.9&&P<.1&&(y<.2&&(o[S+0]+=1),_<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function p(S){s.push(S.x,S.y,S.z)}function f(S,y){const _=S*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const S=new U,y=new U,_=new U,R=new U,A=new me,P=new me,D=new me;for(let b=0,w=0;b<s.length;b+=9,w+=6){S.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),A.set(o[w+0],o[w+1]),P.set(o[w+2],o[w+3]),D.set(o[w+4],o[w+5]),R.copy(S).add(y).add(_).divideScalar(3);const C=v(R);x(A,w+0,S,C),x(P,w+2,y,C),x(D,w+4,_,C)}}function x(S,y,_,R){R<0&&S.x===1&&(o[y]=S.x-1),_.x===0&&_.z===0&&(o[y]=R/2/Math.PI+.5)}function v(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.vertices,e.indices,e.radius,e.details)}}class Kl extends Ia{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kl(e.radius,e.detail)}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],p=i[r+1]-u,f=(o-u)/p;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new me:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,r=[],s=[],o=[],a=new U,c=new wt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),p<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(dt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(dt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zl extends vi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new me){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*u-f*d+this.aX,l=p*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Im extends Zl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ql(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let p=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;p*=u,f*=u,r(o,a,p,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Yo=new U,wc=new Ql,Mc=new Ql,Sc=new Ql;class eu extends vi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new U){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Yo.subVectors(r[0],r[1]).add(r[0]),l=Yo);const d=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Yo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),wc.initNonuniformCatmullRom(l.x,d.x,p.x,u.x,g,x,v),Mc.initNonuniformCatmullRom(l.y,d.y,p.y,u.y,g,x,v),Sc.initNonuniformCatmullRom(l.z,d.z,p.z,u.z,g,x,v)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(l.x,d.x,p.x,u.x,this.tension),Mc.initCatmullRom(l.y,d.y,p.y,u.y,this.tension),Sc.initCatmullRom(l.z,d.z,p.z,u.z,this.tension));return i.set(wc.calc(c),Mc.calc(c),Sc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sd(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function Um(n,e){const t=1-n;return t*t*e}function km(n,e){return 2*(1-n)*n*e}function Nm(n,e){return n*n*e}function Vs(n,e,t,i){return Um(n,e)+km(n,t)+Nm(n,i)}function Om(n,e){const t=1-n;return t*t*t*e}function Fm(n,e){const t=1-n;return 3*t*t*n*e}function Bm(n,e){return 3*(1-n)*n*n*e}function zm(n,e){return n*n*n*e}function Gs(n,e,t,i,r){return Om(n,e)+Fm(n,t)+Bm(n,i)+zm(n,r)}class wh extends vi{constructor(e=new me,t=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new me){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Gs(e,r.x,s.x,o.x,a.x),Gs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hm extends vi{constructor(e=new U,t=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Gs(e,r.x,s.x,o.x,a.x),Gs(e,r.y,s.y,o.y,a.y),Gs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends vi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vm extends vi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sh extends vi{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Vs(e,r.x,s.x,o.x),Vs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eh extends vi{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Vs(e,r.x,s.x,o.x),Vs(e,r.y,s.y,o.y),Vs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Th extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(sd(a,c.x,l.x,u.x,d.x),sd(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new me().fromArray(r))}return this}}var xa=Object.freeze({__proto__:null,ArcCurve:Im,CatmullRomCurve3:eu,CubicBezierCurve:wh,CubicBezierCurve3:Hm,EllipseCurve:Zl,LineCurve:Mh,LineCurve3:Vm,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:Eh,SplineCurve:Th});class Gm extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new xa[r.type]().fromJSON(r))}return this}}class od extends Gm{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Mh(this.currentPoint.clone(),new me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Sh(this.currentPoint.clone(),new me(e,t),new me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new wh(this.currentPoint.clone(),new me(e,t),new me(i,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Th(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Zl(e,t,i,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hs extends od{constructor(e){super(e),this.uuid=Rr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new od().fromJSON(r))}return this}}function Wm(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Ah(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=jm(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let p=t;p<r;p+=t){const f=n[p],g=n[p+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return eo(s,o,t,a,c,l,0),o}function Ah(n,e,t,i,r){let s;if(r===og(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=ad(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=ad(o/i|0,n[o],n[o+1],s);return s&&fs(s,s.next)&&(no(s),s=s.next),s}function Ar(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(fs(t,t.next)||Ut(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function eo(n,e,t,i,r,s,o){if(!n)return;!o&&s&&eg(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?qm(n,i,r,s):$m(n)){e.push(c.i,n.i,l.i),no(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Xm(Ar(n),e),eo(n,e,t,i,r,s,2)):o===2&&Ym(n,e,t,i,r,s):eo(Ar(n),e,t,i,r,s,1);break}}}function $m(n){const e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),d=Math.min(a,c,l),p=Math.max(r,s,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=f&&Os(r,a,s,c,o,l,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qm(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ut(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,p=o.y,f=Math.min(a,c,l),g=Math.min(u,d,p),x=Math.max(a,c,l),v=Math.max(u,d,p),m=wl(f,g,e,t,i),S=wl(x,v,e,t,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=m&&_&&_.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=v&&y!==r&&y!==o&&Os(a,u,c,d,l,p,y.x,y.y)&&Ut(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=v&&_!==r&&_!==o&&Os(a,u,c,d,l,p,_.x,_.y)&&Ut(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=v&&y!==r&&y!==o&&Os(a,u,c,d,l,p,y.x,y.y)&&Ut(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=v&&_!==r&&_!==o&&Os(a,u,c,d,l,p,_.x,_.y)&&Ut(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xm(n,e){let t=n;do{const i=t.prev,r=t.next.next;!fs(i,r)&&Rh(i,t,t.next,r)&&to(i,r)&&to(r,i)&&(e.push(i.i,t.i,r.i),no(t),no(t.next),t=n=r),t=t.next}while(t!==n);return Ar(t)}function Ym(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ig(o,a)){let c=Ph(o,a);o=Ar(o,o.next),c=Ar(c,c.next),eo(o,e,t,i,r,s,0),eo(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function jm(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Ah(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(ng(l))}r.sort(Jm);for(let s=0;s<r.length;s++)t=Km(r[s],t);return t}function Jm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Km(n,e){const t=Zm(n,e);if(!t)return e;const i=Ph(t,n);return Ar(i,i.next),Ar(t,t.next)}function Zm(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(fs(n,t))return t;do{if(fs(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Ch(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);to(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Qm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Qm(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function eg(n,e,t,i){let r=n;do r.z===0&&(r.z=wl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,tg(r)}function tg(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function wl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ng(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ch(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Os(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Ch(n,e,t,i,r,s,o,a)}function ig(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!rg(n,e)&&(to(n,e)&&to(e,n)&&sg(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||fs(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function fs(n,e){return n.x===e.x&&n.y===e.y}function Rh(n,e,t,i){const r=Jo(Ut(n,e,t)),s=Jo(Ut(n,e,i)),o=Jo(Ut(t,i,n)),a=Jo(Ut(t,i,e));return!!(r!==s&&o!==a||r===0&&jo(n,t,e)||s===0&&jo(n,i,e)||o===0&&jo(t,n,i)||a===0&&jo(t,e,i))}function jo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Jo(n){return n>0?1:n<0?-1:0}function rg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function to(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function sg(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ph(n,e){const t=Ml(n.i,n.x,n.y),i=Ml(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ad(n,e,t,i){const r=Ml(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function no(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ml(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function og(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class ag{static triangulate(e,t,i=2){return Wm(e,t,i)}}class Ri{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ri.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];cd(e),ld(i,e);let o=e.length;t.forEach(cd);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,ld(i,t[c]);const a=ag.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function cd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ld(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class io extends en{constructor(e=new hs([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ft(r,3)),this.setAttribute("uv",new ft(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:cg;let y,_=!1,R,A,P,D;m&&(y=m.getSpacedPoints(u),_=!0,p=!1,R=m.computeFrenetFrames(u,!1),A=new U,P=new U,D=new U),p||(v=0,f=0,g=0,x=0);const b=a.extractPoints(l);let w=b.shape;const C=b.holes;if(!Ri.isClockWise(w)){w=w.reverse();for(let K=0,j=C.length;K<j;K++){const ne=C[K];Ri.isClockWise(ne)&&(C[K]=ne.reverse())}}function k(K){const ne=10000000000000001e-36;let Q=K[0];for(let xe=1;xe<=K.length;xe++){const se=xe%K.length,_e=K[se],it=_e.x-Q.x,tt=_e.y-Q.y,T=it*it+tt*tt,M=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(Q.x),Math.abs(Q.y)),V=ne*M*M;if(T<=V){K.splice(se,1),xe--;continue}Q=_e}}k(w),C.forEach(k);const O=C.length,B=w;for(let K=0;K<O;K++){const j=C[K];w=w.concat(j)}function F(K,j,ne){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(j,ne)}const Y=w.length;function G(K,j,ne){let Q,xe,se;const _e=K.x-j.x,it=K.y-j.y,tt=ne.x-K.x,T=ne.y-K.y,M=_e*_e+it*it,V=_e*T-it*tt;if(Math.abs(V)>Number.EPSILON){const X=Math.sqrt(M),ie=Math.sqrt(tt*tt+T*T),J=j.x-it/X,Fe=j.y+_e/X,ge=ne.x-T/ie,ke=ne.y+tt/ie,Ne=((ge-J)*T-(ke-Fe)*tt)/(_e*T-it*tt);Q=J+_e*Ne-K.x,xe=Fe+it*Ne-K.y;const ce=Q*Q+xe*xe;if(ce<=2)return new me(Q,xe);se=Math.sqrt(ce/2)}else{let X=!1;_e>Number.EPSILON?tt>Number.EPSILON&&(X=!0):_e<-Number.EPSILON?tt<-Number.EPSILON&&(X=!0):Math.sign(it)===Math.sign(T)&&(X=!0),X?(Q=-it,xe=_e,se=Math.sqrt(M)):(Q=_e,xe=it,se=Math.sqrt(M/2))}return new me(Q/se,xe/se)}const re=[];for(let K=0,j=B.length,ne=j-1,Q=K+1;K<j;K++,ne++,Q++)ne===j&&(ne=0),Q===j&&(Q=0),re[K]=G(B[K],B[ne],B[Q]);const ae=[];let Ce,he=re.concat();for(let K=0,j=O;K<j;K++){const ne=C[K];Ce=[];for(let Q=0,xe=ne.length,se=xe-1,_e=Q+1;Q<xe;Q++,se++,_e++)se===xe&&(se=0),_e===xe&&(_e=0),Ce[Q]=G(ne[Q],ne[se],ne[_e]);ae.push(Ce),he=he.concat(Ce)}let Ge;if(v===0)Ge=Ri.triangulateShape(B,C);else{const K=[],j=[];for(let ne=0;ne<v;ne++){const Q=ne/v,xe=f*Math.cos(Q*Math.PI/2),se=g*Math.sin(Q*Math.PI/2)+x;for(let _e=0,it=B.length;_e<it;_e++){const tt=F(B[_e],re[_e],se);Ie(tt.x,tt.y,-xe),Q===0&&K.push(tt)}for(let _e=0,it=O;_e<it;_e++){const tt=C[_e];Ce=ae[_e];const T=[];for(let M=0,V=tt.length;M<V;M++){const X=F(tt[M],Ce[M],se);Ie(X.x,X.y,-xe),Q===0&&T.push(X)}Q===0&&j.push(T)}}Ge=Ri.triangulateShape(K,j)}const et=Ge.length,$=g+x;for(let K=0;K<Y;K++){const j=p?F(w[K],he[K],$):w[K];_?(P.copy(R.normals[0]).multiplyScalar(j.x),A.copy(R.binormals[0]).multiplyScalar(j.y),D.copy(y[0]).add(P).add(A),Ie(D.x,D.y,D.z)):Ie(j.x,j.y,0)}for(let K=1;K<=u;K++)for(let j=0;j<Y;j++){const ne=p?F(w[j],he[j],$):w[j];_?(P.copy(R.normals[K]).multiplyScalar(ne.x),A.copy(R.binormals[K]).multiplyScalar(ne.y),D.copy(y[K]).add(P).add(A),Ie(D.x,D.y,D.z)):Ie(ne.x,ne.y,d/u*K)}for(let K=v-1;K>=0;K--){const j=K/v,ne=f*Math.cos(j*Math.PI/2),Q=g*Math.sin(j*Math.PI/2)+x;for(let xe=0,se=B.length;xe<se;xe++){const _e=F(B[xe],re[xe],Q);Ie(_e.x,_e.y,d+ne)}for(let xe=0,se=C.length;xe<se;xe++){const _e=C[xe];Ce=ae[xe];for(let it=0,tt=_e.length;it<tt;it++){const T=F(_e[it],Ce[it],Q);_?Ie(T.x,T.y+y[u-1].y,y[u-1].x+ne):Ie(T.x,T.y,d+ne)}}}ve(),ue();function ve(){const K=r.length/3;if(p){let j=0,ne=Y*j;for(let Q=0;Q<et;Q++){const xe=Ge[Q];Z(xe[2]+ne,xe[1]+ne,xe[0]+ne)}j=u+v*2,ne=Y*j;for(let Q=0;Q<et;Q++){const xe=Ge[Q];Z(xe[0]+ne,xe[1]+ne,xe[2]+ne)}}else{for(let j=0;j<et;j++){const ne=Ge[j];Z(ne[2],ne[1],ne[0])}for(let j=0;j<et;j++){const ne=Ge[j];Z(ne[0]+Y*u,ne[1]+Y*u,ne[2]+Y*u)}}i.addGroup(K,r.length/3-K,0)}function ue(){const K=r.length/3;let j=0;Be(B,j),j+=B.length;for(let ne=0,Q=C.length;ne<Q;ne++){const xe=C[ne];Be(xe,j),j+=xe.length}i.addGroup(K,r.length/3-K,1)}function Be(K,j){let ne=K.length;for(;--ne>=0;){const Q=ne;let xe=ne-1;xe<0&&(xe=K.length-1);for(let se=0,_e=u+v*2;se<_e;se++){const it=Y*se,tt=Y*(se+1),T=j+Q+it,M=j+xe+it,V=j+xe+tt,X=j+Q+tt;we(T,M,V,X)}}}function Ie(K,j,ne){c.push(K),c.push(j),c.push(ne)}function Z(K,j,ne){Pe(K),Pe(j),Pe(ne);const Q=r.length/3,xe=S.generateTopUV(i,r,Q-3,Q-2,Q-1);I(xe[0]),I(xe[1]),I(xe[2])}function we(K,j,ne,Q){Pe(K),Pe(j),Pe(Q),Pe(j),Pe(ne),Pe(Q);const xe=r.length/3,se=S.generateSideWallUV(i,r,xe-6,xe-3,xe-2,xe-1);I(se[0]),I(se[1]),I(se[3]),I(se[1]),I(se[2]),I(se[3])}function Pe(K){r.push(c[K*3+0]),r.push(c[K*3+1]),r.push(c[K*3+2])}function I(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lg(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new xa[r.type]().fromJSON(r)),new io(i,e.options)}}const cg={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new me(s,o),new me(a,c),new me(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],p=e[r*3],f=e[r*3+1],g=e[r*3+2],x=e[s*3],v=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new me(o,1-c),new me(l,1-d),new me(p,1-g),new me(x,1-m)]:[new me(a,1-c),new me(u,1-d),new me(f,1-g),new me(v,1-m)]}};function lg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class vo extends Ia{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vo(e.radius,e.detail)}}class Ln extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,f=[],g=[],x=[],v=[];for(let m=0;m<u;m++){const S=m*p-o;for(let y=0;y<l;y++){const _=y*d-s;g.push(_,-S,0),x.push(0,0,1),v.push(y/a),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const y=S+l*m,_=S+l*(m+1),R=S+1+l*(m+1),A=S+1+l*m;f.push(y,_,A),f.push(_,R,A)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ua extends en{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=e;const p=(t-e)/r,f=new U,g=new me;for(let x=0;x<=r;x++){for(let v=0;v<=i;v++){const m=s+v/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=p}for(let x=0;x<r;x++){const v=x*(i+1);for(let m=0;m<i;m++){const S=m+v,y=S,_=S+i+1,R=S+i+2,A=S+1;a.push(y,_,A),a.push(_,R,A)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tu extends en{constructor(e=new hs([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(s,3)),this.setAttribute("uv",new ft(o,2));function l(u){const d=r.length/3,p=u.extractPoints(t);let f=p.shape;const g=p.holes;Ri.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,m=g.length;v<m;v++){const S=g[v];Ri.isClockWise(S)===!0&&(g[v]=S.reverse())}const x=Ri.triangulateShape(f,g);for(let v=0,m=g.length;v<m;v++){const S=g[v];f=f.concat(S)}for(let v=0,m=f.length;v<m;v++){const S=f[v];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let v=0,m=x.length;v<m;v++){const S=x[v],y=S[0]+d,_=S[1]+d,R=S[2]+d;i.push(y,_,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ug(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new tu(i,e.curveSegments)}}function ug(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Mn extends en{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new U,p=new U,f=[],g=[],x=[],v=[];for(let m=0;m<=i;m++){const S=[],y=m/i;let _=0;m===0&&o===0?_=.5/t:m===i&&c===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){const A=R/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),v.push(A+_,1-y),S.push(l++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const y=u[m][S+1],_=u[m][S],R=u[m+1][S],A=u[m+1][S+1];(m!==0||o>0)&&f.push(y,_,A),(m!==i-1||c<Math.PI)&&f.push(_,R,A)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jn extends en{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new U,d=new U,p=new U;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const x=g/r*s,v=f/i*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(x),d.y=(e+t*Math.cos(v))*Math.sin(x),d.z=t*Math.sin(v),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(d,u).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const x=(r+1)*f+g-1,v=(r+1)*(f-1)+g-1,m=(r+1)*(f-1)+g,S=(r+1)*f+g;o.push(x,v,S),o.push(v,m,S)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ka extends en{constructor(e=new Eh(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new me;let u=new U;const d=[],p=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(f,2));function x(){for(let y=0;y<t;y++)v(y);v(s===!1?t:0),S(),m()}function v(y){u=e.getPointAt(y/t,u);const _=o.normals[y],R=o.binormals[y];for(let A=0;A<=r;A++){const P=A/r*Math.PI*2,D=Math.sin(P),b=-Math.cos(P);c.x=b*_.x+D*R.x,c.y=b*_.y+D*R.y,c.z=b*_.z+D*R.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let _=1;_<=r;_++){const R=(r+1)*(y-1)+(_-1),A=(r+1)*y+(_-1),P=(r+1)*y+_,D=(r+1)*(y-1)+_;g.push(R,A,D),g.push(A,P,D)}}function S(){for(let y=0;y<=t;y++)for(let _=0;_<=r;_++)l.x=y/t,l.y=_/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ka(new xa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Fi extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class or extends ys{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class dg extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hg extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lh extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class nu extends Lh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ec=new wt,ud=new U,dd=new U;class fg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dh extends _h{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pg extends fg{constructor(){super(new Dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Na extends Lh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new pg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mg extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hd=new wt;class Ih{constructor(e,t,i=0,r=1/0){this.ray=new ph(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(e,t=!0,i=[]){return Sl(e,this,i,t),i.sort(fd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Sl(e[r],this,i,t);return i.sort(fd),i}}function fd(n,e){return n.distance-e.distance}function Sl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Sl(s[o],e,t,!0)}}function pd(n,e,t,i){const r=gg(i);switch(t){case ah:return n*e;case Bl:return n*e/r.components*r.byteLength;case zl:return n*e/r.components*r.byteLength;case lh:return n*e*2/r.components*r.byteLength;case Hl:return n*e*2/r.components*r.byteLength;case ch:return n*e*3/r.components*r.byteLength;case qn:return n*e*4/r.components*r.byteLength;case Vl:return n*e*4/r.components*r.byteLength;case ia:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:case Qc:return Math.max(n,16)*Math.max(e,8)/4;case Jc:case Zc:return Math.max(n,8)*Math.max(e,8)/2;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case aa:case vl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uh:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yl:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gg(n){switch(n){case hi:case rh:return{byteLength:1,components:1};case js:case sh:case po:return{byteLength:2,components:1};case Ol:case Fl:return{byteLength:2,components:4};case Er:case Nl:case ci:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);function Uh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vg(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ev=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:xg,alphahash_pars_fragment:_g,alphamap_fragment:yg,alphamap_pars_fragment:bg,alphatest_fragment:wg,alphatest_pars_fragment:Mg,aomap_fragment:Sg,aomap_pars_fragment:Eg,batching_pars_vertex:Tg,batching_vertex:Ag,begin_vertex:Cg,beginnormal_vertex:Rg,bsdfs:Pg,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Ng,color_fragment:Og,color_pars_fragment:Fg,color_pars_vertex:Bg,color_vertex:zg,common:Hg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Wg,displacementmap_vertex:$g,emissivemap_fragment:qg,emissivemap_pars_fragment:Xg,colorspace_fragment:Yg,colorspace_pars_fragment:jg,envmap_fragment:Jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Zg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:t0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:r0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:o0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:c0,lights_pars_begin:l0,lights_toon_fragment:d0,lights_toon_pars_fragment:h0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:v0,lights_fragment_maps:x0,lights_fragment_end:_0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:M0,map_fragment:S0,map_pars_fragment:E0,map_particle_fragment:T0,map_particle_pars_fragment:A0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:R0,morphinstance_vertex:P0,morphcolor_vertex:L0,morphnormal_vertex:D0,morphtarget_pars_vertex:I0,morphtarget_vertex:U0,normal_fragment_begin:k0,normal_fragment_maps:N0,normal_pars_fragment:O0,normal_pars_vertex:F0,normal_vertex:B0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:W0,opaque_fragment:$0,packing:q0,premultiplied_alpha_fragment:X0,project_vertex:Y0,dithering_fragment:j0,dithering_pars_fragment:J0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:ev,shadowmap_vertex:tv,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:rv,skinning_vertex:sv,skinnormal_vertex:ov,specularmap_fragment:av,specularmap_pars_fragment:cv,tonemapping_fragment:lv,tonemapping_pars_fragment:uv,transmission_fragment:dv,transmission_pars_fragment:hv,uv_pars_fragment:fv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:gv,background_vert:vv,background_frag:xv,backgroundCube_vert:_v,backgroundCube_frag:yv,cube_vert:bv,cube_frag:wv,depth_vert:Mv,depth_frag:Sv,distanceRGBA_vert:Ev,distanceRGBA_frag:Tv,equirect_vert:Av,equirect_frag:Cv,linedashed_vert:Rv,linedashed_frag:Pv,meshbasic_vert:Lv,meshbasic_frag:Dv,meshlambert_vert:Iv,meshlambert_frag:Uv,meshmatcap_vert:kv,meshmatcap_frag:Nv,meshnormal_vert:Ov,meshnormal_frag:Fv,meshphong_vert:Bv,meshphong_frag:zv,meshphysical_vert:Hv,meshphysical_frag:Vv,meshtoon_vert:Gv,meshtoon_frag:Wv,points_vert:$v,points_frag:qv,shadow_vert:Xv,shadow_frag:Yv,sprite_vert:jv,sprite_frag:Jv},be={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},oi={basic:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:fn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:fn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:fn([be.points,be.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:fn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:fn([be.common,be.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:fn([be.sprite,be.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:fn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:fn([be.lights,be.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};oi.physical={uniforms:fn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Ko={r:0,b:0,g:0},mr=new fi,Kv=new wt;function Zv(n,e,t,i,r,s,o){const a=new ut(0);let c=s===!0?0:1,l,u,d=null,p=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1;const R=g(y);R===null?m(a,c):R&&R.isColor&&(m(R,1),_=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,_){const R=g(_);R&&(R.isCubeTexture||R.mapping===Da)?(u===void 0&&(u=new pe(new Ht(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:ds(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mr.copy(_.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(mr)),u.material.toneMapped=_t.getTransfer(R.colorSpace)!==St,(d!==R||p!==R.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,p=R.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new pe(new Ln(2,2),new sr({name:"BackgroundMaterial",uniforms:ds(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=_t.getTransfer(R.colorSpace)!==St,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||p!==R.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,p=R.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,_){y.getRGB(Ko,xh(n)),i.buffers.color.setClear(Ko.r,Ko.g,Ko.b,_,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:x,addToRenderList:v,dispose:S}}function Qv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(w,C,L,k,O){let B=!1;const F=d(k,L,C);s!==F&&(s=F,l(s.object)),B=f(w,k,L,O),B&&g(w,k,L,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(w,C,L,k),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,C,L){const k=L.wireframe===!0;let O=i[w.id];O===void 0&&(O={},i[w.id]=O);let B=O[C.id];B===void 0&&(B={},O[C.id]=B);let F=B[k];return F===void 0&&(F=p(c()),B[k]=F),F}function p(w){const C=[],L=[],k=[];for(let O=0;O<t;O++)C[O]=0,L[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:k,object:w,attributes:{},index:null}}function f(w,C,L,k){const O=s.attributes,B=C.attributes;let F=0;const Y=L.getAttributes();for(const G in Y)if(Y[G].location>=0){const ae=O[G];let Ce=B[G];if(Ce===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Ce=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Ce=w.instanceColor)),ae===void 0||ae.attribute!==Ce||Ce&&ae.data!==Ce.data)return!0;F++}return s.attributesNum!==F||s.index!==k}function g(w,C,L,k){const O={},B=C.attributes;let F=0;const Y=L.getAttributes();for(const G in Y)if(Y[G].location>=0){let ae=B[G];ae===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const Ce={};Ce.attribute=ae,ae&&ae.data&&(Ce.data=ae.data),O[G]=Ce,F++}s.attributes=O,s.attributesNum=F,s.index=k}function x(){const w=s.newAttributes;for(let C=0,L=w.length;C<L;C++)w[C]=0}function v(w){m(w,0)}function m(w,C){const L=s.newAttributes,k=s.enabledAttributes,O=s.attributeDivisors;L[w]=1,k[w]===0&&(n.enableVertexAttribArray(w),k[w]=1),O[w]!==C&&(n.vertexAttribDivisor(w,C),O[w]=C)}function S(){const w=s.newAttributes,C=s.enabledAttributes;for(let L=0,k=C.length;L<k;L++)C[L]!==w[L]&&(n.disableVertexAttribArray(L),C[L]=0)}function y(w,C,L,k,O,B,F){F===!0?n.vertexAttribIPointer(w,C,L,O,B):n.vertexAttribPointer(w,C,L,k,O,B)}function _(w,C,L,k){x();const O=k.attributes,B=L.getAttributes(),F=C.defaultAttributeValues;for(const Y in B){const G=B[Y];if(G.location>=0){let re=O[Y];if(re===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),re!==void 0){const ae=re.normalized,Ce=re.itemSize,he=e.get(re);if(he===void 0)continue;const Ge=he.buffer,et=he.type,$=he.bytesPerElement,ve=et===n.INT||et===n.UNSIGNED_INT||re.gpuType===Nl;if(re.isInterleavedBufferAttribute){const ue=re.data,Be=ue.stride,Ie=re.offset;if(ue.isInstancedInterleavedBuffer){for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z,ue.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Z=0;Z<G.locationSize;Z++)v(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Z=0;Z<G.locationSize;Z++)y(G.location+Z,Ce/G.locationSize,et,ae,Be*$,(Ie+Ce/G.locationSize*Z)*$,ve)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<G.locationSize;ue++)m(G.location+ue,re.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<G.locationSize;ue++)v(G.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ue=0;ue<G.locationSize;ue++)y(G.location+ue,Ce/G.locationSize,et,ae,Ce*$,Ce/G.locationSize*ue*$,ve)}}else if(F!==void 0){const ae=F[Y];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(G.location,ae);break;case 3:n.vertexAttrib3fv(G.location,ae);break;case 4:n.vertexAttrib4fv(G.location,ae);break;default:n.vertexAttrib1fv(G.location,ae)}}}}S()}function R(){D();for(const w in i){const C=i[w];for(const L in C){const k=C[L];for(const O in k)u(k[O].object),delete k[O];delete C[L]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const C=i[w.id];for(const L in C){const k=C[L];for(const O in k)u(k[O].object),delete k[O];delete C[L]}delete i[w.id]}function P(w){for(const C in i){const L=i[C];if(L[w.id]===void 0)continue;const k=L[w.id];for(const O in k)u(k[O].object),delete k[O];delete L[w.id]}}function D(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:v,disableUnusedAttributes:S}}function ex(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*p[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==qn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==hi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ci&&!D)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:R,maxSamples:A}}function nx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ki,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,x=d.clipIntersection,v=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!v)s?u(null):l();else{const S=s?0:i,y=S*4;let _=m.clippingState||null;c.value=_,_=u(g,p,y,f);for(let R=0;R!==y;++R)_[R]=t[R];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,f,g){const x=d!==null?d.length:0;let v=null;if(x!==0){if(v=c.value,g!==!0||v===null){const m=f+x*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(v===null||v.length<m)&&(v=new Float32Array(m));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(v,_),v[_+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function ix(n){let e=new WeakMap;function t(o,a){return a===Xc?o.mapping=cs:a===Yc&&(o.mapping=ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xc||a===Yc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Tm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const es=4,md=[.125,.215,.35,.446,.526,.582],yr=20,Tc=new Dh,gd=new ut;let Ac=null,Cc=0,Rc=0,Pc=!1;const vr=(1+Math.sqrt(5))/2,jr=1/vr,vd=[new U(-vr,jr,0),new U(vr,jr,0),new U(-jr,0,vr),new U(jr,0,vr),new U(0,vr,-jr),new U(0,vr,jr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],rx=new U;class xd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=rx}=s;Ac=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac,Cc,Rc),this._renderer.xr.enabled=Pc,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:po,format:qn,colorSpace:us,depthBuffer:!1},r=_d(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(s)),this._blurMaterial=ox(s,e,t)}return r}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,i,r,s){const c=new bn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(gd),d.toneMapping=nr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new Vt({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),v=new pe(new Ht,x);let m=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,m=!0):(x.color.copy(gd),m=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const R=this._cubeSize;Zo(r,_*R,y>2?R:0,R,R),d.setRenderTarget(r),m&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===cs||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Zo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Tc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vd[(r-s-1)%vd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pe(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yr-1),x=s/g,v=isFinite(s)?1+Math.floor(u*x):yr;v>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${yr}`);const m=[];let S=0;for(let P=0;P<yr;++P){const D=P/x,b=Math.exp(-D*D/2);m.push(b),P===0?S+=b:P<v&&(S+=2*b)}for(let P=0;P<m.length;P++)m[P]=m[P]/S;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const _=this._sizeLods[r],R=3*_*(r>y-es?r-y+es:0),A=4*(this._cubeSize-_);Zo(t,R,A,3*_,2*_),c.setRenderTarget(t),c.render(d,Tc)}}function sx(n){const e=[],t=[],i=[];let r=n;const s=n-es+1+md.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-es?c=md[o-n+es-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,v=2,m=1,S=new Float32Array(x*g*f),y=new Float32Array(v*g*f),_=new Float32Array(m*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,D=A>2?0:-1,b=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];S.set(b,x*g*A),y.set(p,v*g*A);const w=[A,A,A,A,A,A];_.set(w,m*g*A)}const R=new en;R.setAttribute("position",new Bn(S,x)),R.setAttribute("uv",new Bn(y,v)),R.setAttribute("faceIndex",new Bn(_,m)),e.push(R),r>es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _d(n,e,t){const i=new Ni(n,e,t);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ox(n,e,t){const i=new Float32Array(yr),r=new U(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function yd(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function bd(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ax(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xc||c===Yc,u=c===cs||c===ls;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new xd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new xd(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&rs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lx(n,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const f in p)e.update(p[f],n.ARRAY_BUFFER)}function l(d){const p=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let y=0,_=S.length;y<_;y+=3){const R=S[y+0],A=S[y+1],P=S[y+2];p.push(R,A,A,P,P,R)}}else if(g!==void 0){const S=g.array;x=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){const R=y+0,A=y+1,P=y+2;p.push(R,A,A,P,P,R)}}else return;const v=new(hh(p)?vh:gh)(p,1);v.version=x;const m=s.get(d);m&&e.remove(m),s.set(d,v)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function ux(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*o),t.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*o,g),t.update(f,i,g))}function u(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let v=0;for(let m=0;m<g;m++)v+=f[m];t.update(v,i,1)}function d(p,f,g,x){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p.length;m++)l(p[m]/o,f[m],x[m]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,x,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S]*x[S];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hx(n,e,t){const i=new WeakMap,r=new Wt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*R*4*d),P=new fh(A,_,R,d);P.type=ci,P.needsUpdate=!0;const D=y*4;for(let w=0;w<d;w++){const C=v[w],L=m[w],k=S[w],O=_*R*4*w;for(let B=0;B<C.count;B++){const F=B*D;f===!0&&(r.fromBufferAttribute(C,B),A[O+F+0]=r.x,A[O+F+1]=r.y,A[O+F+2]=r.z,A[O+F+3]=0),g===!0&&(r.fromBufferAttribute(L,B),A[O+F+4]=r.x,A[O+F+5]=r.y,A[O+F+6]=r.z,A[O+F+7]=0),x===!0&&(r.fromBufferAttribute(k,B),A[O+F+8]=r.x,A[O+F+9]=r.y,A[O+F+10]=r.z,A[O+F+11]=k.itemSize===4?r.w:1)}}p={count:d,texture:P,size:new me(_,R)},i.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function fx(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const kh=new an,wd=new bh(1,1),Nh=new fh,Oh=new lm,Fh=new yh,Md=[],Sd=[],Ed=new Float32Array(16),Td=new Float32Array(9),Ad=new Float32Array(4);function bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Md[r];if(s===void 0&&(s=new Float32Array(r),Md[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oa(n,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function xx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;Ad.set(i),n.uniformMatrix2fv(this.addr,!1,Ad),Jt(t,i)}}function _x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;Td.set(i),n.uniformMatrix3fv(this.addr,!1,Td),Jt(t,i)}}function yx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,i))return;Ed.set(i),n.uniformMatrix4fv(this.addr,!1,Ed),Jt(t,i)}}function bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function Rx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wd.compareFunction=dh,s=wd):s=kh,t.setTexture2D(e||s,r)}function Px(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Oh,r)}function Lx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fh,r)}function Dx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Nh,r)}function Ix(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return vx;case 35674:return xx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return Tx;case 36295:return Ax;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}function Ux(n,e){n.uniform1fv(this.addr,e)}function kx(n,e){const t=bs(e,this.size,2);n.uniform2fv(this.addr,t)}function Nx(n,e){const t=bs(e,this.size,3);n.uniform3fv(this.addr,t)}function Ox(n,e){const t=bs(e,this.size,4);n.uniform4fv(this.addr,t)}function Fx(n,e){const t=bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bx(n,e){const t=bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zx(n,e){const t=bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hx(n,e){n.uniform1iv(this.addr,e)}function Vx(n,e){n.uniform2iv(this.addr,e)}function Gx(n,e){n.uniform3iv(this.addr,e)}function Wx(n,e){n.uniform4iv(this.addr,e)}function $x(n,e){n.uniform1uiv(this.addr,e)}function qx(n,e){n.uniform2uiv(this.addr,e)}function Xx(n,e){n.uniform3uiv(this.addr,e)}function Yx(n,e){n.uniform4uiv(this.addr,e)}function jx(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||kh,s[o])}function Jx(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Oh,s[o])}function Kx(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fh,s[o])}function Zx(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);jt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nh,s[o])}function Qx(n){switch(n){case 5126:return Ux;case 35664:return kx;case 35665:return Nx;case 35666:return Ox;case 35674:return Fx;case 35675:return Bx;case 35676:return zx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return $x;case 36294:return qx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}class e_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ix(t.type)}}class t_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qx(t.type)}}class n_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function Cd(n,e){n.seq.push(e),n.map[e.id]=e}function i_(n,e,t){const i=n.name,r=i.length;for(Lc.lastIndex=0;;){const s=Lc.exec(i),o=Lc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Cd(t,l===void 0?new e_(a,n,e):new t_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new n_(a),Cd(t,d)),t=d}}}class ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);i_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Rd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const r_=37297;let s_=0;function o_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Pd=new ot;function a_(n){_t._getMatrix(Pd,_t.workingColorSpace,n);const e=`mat3( ${Pd.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case ma:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ld(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+o_(n.getShaderSource(e),a)}else return s}function c_(n,e){const t=a_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function l_(n,e){let t;switch(e){case Mp:t="Linear";break;case Sp:t="Reinhard";break;case Ep:t="Cineon";break;case nh:t="ACESFilmic";break;case Ap:t="AgX";break;case Cp:t="Neutral";break;case Tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qo=new U;function u_(){_t.getLuminanceCoefficients(Qo);const n=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function h_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fs(n){return n!==""}function Dd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Id(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace(p_,g_)}const m_=new Map;function g_(n,e){let t=ct[e];if(t===void 0){const i=m_.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}const v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(n){return n.replace(v_,x_)}function x_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function __(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function y_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cs:case ls:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ls&&(e="ENVMAP_MODE_REFRACTION"),e}function w_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case th:e="ENVMAP_BLENDING_MULTIPLY";break;case bp:e="ENVMAP_BLENDING_MIX";break;case wp:e="ENVMAP_BLENDING_ADD";break}return e}function M_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function S_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=__(t),l=y_(t),u=b_(t),d=w_(t),p=M_(t),f=d_(t),g=h_(s),x=r.createProgram();let v,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(v=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?ct.tonemapping_pars_fragment:"",t.toneMapping!==nr?l_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,c_("linearToOutputTexel",t.outputColorSpace),u_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=El(o),o=Dd(o,t),o=Id(o,t),a=El(a),a=Dd(a,t),a=Id(a,t),o=Ud(o),a=Ud(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+v+o,_=S+m+a,R=Rd(r,r.VERTEX_SHADER,y),A=Rd(r,r.FRAGMENT_SHADER,_);r.attachShader(x,R),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(C){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(x)||"",k=r.getShaderInfoLog(R)||"",O=r.getShaderInfoLog(A)||"",B=L.trim(),F=k.trim(),Y=O.trim();let G=!0,re=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,A);else{const ae=Ld(r,R,"vertex"),Ce=Ld(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+ae+`
`+Ce)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||Y==="")&&(re=!1);re&&(C.diagnostics={runnable:G,programLog:B,vertexShader:{log:F,prefix:v},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(R),r.deleteShader(A),D=new ca(r,x),b=f_(r,x)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(x,r_)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let E_=0;class T_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new A_(e),t.set(e,i)),i}}class A_{constructor(e){this.id=E_++,this.code=e,this.usedTimes=0}}function C_(n,e,t,i,r,s,o){const a=new ql,c=new T_,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function v(b,w,C,L,k){const O=L.fog,B=k.geometry,F=b.isMeshStandardMaterial?L.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||F),G=Y&&Y.mapping===Da?Y.image.height:null,re=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ce=ae!==void 0?ae.length:0;let he=0;B.morphAttributes.position!==void 0&&(he=1),B.morphAttributes.normal!==void 0&&(he=2),B.morphAttributes.color!==void 0&&(he=3);let Ge,et,$,ve;if(re){const yt=oi[re];Ge=yt.vertexShader,et=yt.fragmentShader}else Ge=b.vertexShader,et=b.fragmentShader,c.update(b),$=c.getVertexShaderID(b),ve=c.getFragmentShaderID(b);const ue=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,Z=k.isBatchedMesh===!0,we=!!b.map,Pe=!!b.matcap,I=!!Y,K=!!b.aoMap,j=!!b.lightMap,ne=!!b.bumpMap,Q=!!b.normalMap,xe=!!b.displacementMap,se=!!b.emissiveMap,_e=!!b.metalnessMap,it=!!b.roughnessMap,tt=b.anisotropy>0,T=b.clearcoat>0,M=b.dispersion>0,V=b.iridescence>0,X=b.sheen>0,ie=b.transmission>0,J=tt&&!!b.anisotropyMap,Fe=T&&!!b.clearcoatMap,ge=T&&!!b.clearcoatNormalMap,ke=T&&!!b.clearcoatRoughnessMap,Ne=V&&!!b.iridescenceMap,ce=V&&!!b.iridescenceThicknessMap,Ae=X&&!!b.sheenColorMap,Ke=X&&!!b.sheenRoughnessMap,ze=!!b.specularMap,Me=!!b.specularColorMap,st=!!b.specularIntensityMap,N=ie&&!!b.transmissionMap,fe=ie&&!!b.thicknessMap,ye=!!b.gradientMap,De=!!b.alphaMap,le=b.alphaTest>0,te=!!b.alphaHash,Oe=!!b.extensions;let rt=nr;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(rt=n.toneMapping);const Rt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Ge,fragmentShader:et,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Z,batchingColor:Z&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:us,alphaToCoverage:!!b.alphaToCoverage,map:we,matcap:Pe,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:j,bumpMap:ne,normalMap:Q,displacementMap:p&&xe,emissiveMap:se,normalMapObjectSpace:Q&&b.normalMapType===Dp,normalMapTangentSpace:Q&&b.normalMapType===Gl,metalnessMap:_e,roughnessMap:it,anisotropy:tt,anisotropyMap:J,clearcoat:T,clearcoatMap:Fe,clearcoatNormalMap:ge,clearcoatRoughnessMap:ke,dispersion:M,iridescence:V,iridescenceMap:Ne,iridescenceThicknessMap:ce,sheen:X,sheenColorMap:Ae,sheenRoughnessMap:Ke,specularMap:ze,specularColorMap:Me,specularIntensityMap:st,transmission:ie,transmissionMap:N,thicknessMap:fe,gradientMap:ye,opaque:b.transparent===!1&&b.blending===is&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:le,alphaHash:te,combine:b.combine,mapUv:we&&x(b.map.channel),aoMapUv:K&&x(b.aoMap.channel),lightMapUv:j&&x(b.lightMap.channel),bumpMapUv:ne&&x(b.bumpMap.channel),normalMapUv:Q&&x(b.normalMap.channel),displacementMapUv:xe&&x(b.displacementMap.channel),emissiveMapUv:se&&x(b.emissiveMap.channel),metalnessMapUv:_e&&x(b.metalnessMap.channel),roughnessMapUv:it&&x(b.roughnessMap.channel),anisotropyMapUv:J&&x(b.anisotropyMap.channel),clearcoatMapUv:Fe&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&x(b.sheenRoughnessMap.channel),specularMapUv:ze&&x(b.specularMap.channel),specularColorMapUv:Me&&x(b.specularColorMap.channel),specularIntensityMapUv:st&&x(b.specularIntensityMap.channel),transmissionMapUv:N&&x(b.transmissionMap.channel),thicknessMapUv:fe&&x(b.thicknessMap.channel),alphaMapUv:De&&x(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Q||tt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(we||De),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Be,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&_t.getTransfer(b.map.colorSpace)===St,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&_t.getTransfer(b.emissiveMap.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&b.extensions.multiDraw===!0||Z)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function m(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)w.push(C),w.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(S(w,b),y(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function S(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const w=g[b.type];let C;if(w){const L=oi[w];C=wm.clone(L.uniforms)}else C=b.uniforms;return C}function R(b,w){let C;for(let L=0,k=u.length;L<k;L++){const O=u[L];if(O.cacheKey===w){C=O,++C.usedTimes;break}}return C===void 0&&(C=new S_(n,w,b,s),u.push(C)),C}function A(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function P(b){c.remove(b)}function D(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:D}}function R_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function P_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Od(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,f,g,x,v){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:v},n[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=v),e++,m}function a(d,p,f,g,x,v){const m=o(d,p,f,g,x,v);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(d,p,f,g,x,v){const m=o(d,p,f,g,x,v);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,p){t.length>1&&t.sort(d||P_),i.length>1&&i.sort(p||Nd),r.length>1&&r.sort(p||Nd)}function u(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function L_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Od,n.set(i,[o])):r>=s.length?(o=new Od,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function D_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ut};break;case"SpotLight":t={position:new U,direction:new U,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function I_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let U_=0;function k_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N_(n){const e=new D_,t=I_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new wt,o=new wt;function a(l){let u=0,d=0,p=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,x=0,v=0,m=0,S=0,y=0,_=0,R=0,A=0,P=0;l.sort(k_);for(let b=0,w=l.length;b<w;b++){const C=l[b],L=C.color,k=C.intensity,O=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=L.r*k,d+=L.g*k,p+=L.b*k;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],k);P++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=C.shadow.matrix,S++}i.directional[f]=F,f++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(L).multiplyScalar(k),F.distance=O,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[x]=F;const Y=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,Y.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[x]=Y.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=B,_++}x++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(L).multiplyScalar(k),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=F,v++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=F,g++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(k),F.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[m]=F,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==v||D.hemiLength!==m||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==R||D.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=v,D.hemiLength=m,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=R,D.numLightProbes=P,i.version=U_++)}function c(l,u){let d=0,p=0,f=0,g=0,x=0;const v=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const y=l[m];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),d++}else if(y.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),f++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),o.identity(),s.copy(y.matrixWorld),s.premultiply(v),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(v),x++}}}return{setup:a,setupView:c,state:i}}function Fd(n){const e=new N_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function O_(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fd(n),e.set(r,[a])):s>=o.length?(a=new Fd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z_(n,e,t){let i=new jl;const r=new me,s=new me,o=new Wt,a=new dg({depthPacking:Lp}),c=new hg,l={},u=t.maxTextureSize,d={[rr]:vn,[vn]:rr,[pn]:pn},p=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:F_,fragmentShader:B_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pe(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qd;let m=this.type;this.render=function(A,P,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(tr),L.buffers.depth.getReversed()?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=m!==Ci&&this.type===Ci,O=m===Ci&&this.type!==Ci;for(let B=0,F=A.length;B<F;B++){const Y=A[B],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const re=G.getFrameExtents();if(r.multiply(re),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,G.mapSize.y=s.y)),G.map===null||k===!0||O===!0){const Ce=this.type!==Ci?{minFilter:Pn,magFilter:Pn}:{};G.map!==null&&G.map.dispose(),G.map=new Ni(r.x,r.y,Ce),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ae=G.getViewportCount();for(let Ce=0;Ce<ae;Ce++){const he=G.getViewport(Ce);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),L.viewport(o),G.updateMatrices(Y,Ce),i=G.getFrustum(),_(P,D,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Ci&&S(G,D),G.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(b,w,C)};function S(A,P){const D=e.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ni(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,D,p,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,D,f,x,null)}function y(A,P,D,b){let w=null;const C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)w=C;else if(w=D.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=w.uuid,k=P.uuid;let O=l[L];O===void 0&&(O={},l[L]=O);let B=O[k];B===void 0&&(B=w.clone(),O[k]=B,P.addEventListener("dispose",R)),w=B}if(w.visible=P.visible,w.wireframe=P.wireframe,b===Ci?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:d[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=n.properties.get(w);L.light=D}return w}function _(A,P,D,b,w){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ci)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const k=e.update(A),O=A.material;if(Array.isArray(O)){const B=k.groups;for(let F=0,Y=B.length;F<Y;F++){const G=B[F],re=O[G.materialIndex];if(re&&re.visible){const ae=y(A,re,b,w);A.onBeforeShadow(n,A,P,D,k,ae,G),n.renderBufferDirect(D,null,k,ae,A,G),A.onAfterShadow(n,A,P,D,k,ae,G)}}}else if(O.visible){const B=y(A,O,b,w);A.onBeforeShadow(n,A,P,D,k,B,null),n.renderBufferDirect(D,null,k,B,A,null),A.onAfterShadow(n,A,P,D,k,B,null)}}const L=A.children;for(let k=0,O=L.length;k<O;k++)_(L[k],P,D,b,w)}function R(A){A.target.removeEventListener("dispose",R);for(const D in l){const b=l[D],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const H_={[zc]:Hc,[Vc]:$c,[Gc]:qc,[as]:Wc,[Hc]:zc,[$c]:Vc,[qc]:Gc,[Wc]:as};function V_(n,e){function t(){let N=!1;const fe=new Wt;let ye=null;const De=new Wt(0,0,0,0);return{setMask:function(le){ye!==le&&!N&&(n.colorMask(le,le,le,le),ye=le)},setLocked:function(le){N=le},setClear:function(le,te,Oe,rt,Rt){Rt===!0&&(le*=rt,te*=rt,Oe*=rt),fe.set(le,te,Oe,rt),De.equals(fe)===!1&&(n.clearColor(le,te,Oe,rt),De.copy(fe))},reset:function(){N=!1,ye=null,De.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,ye=null,De=null,le=null;return{setReversed:function(te){if(fe!==te){const Oe=e.get("EXT_clip_control");te?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),fe=te;const rt=le;le=null,this.setClear(rt)}},getReversed:function(){return fe},setTest:function(te){te?ue(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(te){ye!==te&&!N&&(n.depthMask(te),ye=te)},setFunc:function(te){if(fe&&(te=H_[te]),De!==te){switch(te){case zc:n.depthFunc(n.NEVER);break;case Hc:n.depthFunc(n.ALWAYS);break;case Vc:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case Gc:n.depthFunc(n.EQUAL);break;case Wc:n.depthFunc(n.GEQUAL);break;case $c:n.depthFunc(n.GREATER);break;case qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=te}},setLocked:function(te){N=te},setClear:function(te){le!==te&&(fe&&(te=1-te),n.clearDepth(te),le=te)},reset:function(){N=!1,ye=null,De=null,le=null,fe=!1}}}function r(){let N=!1,fe=null,ye=null,De=null,le=null,te=null,Oe=null,rt=null,Rt=null;return{setTest:function(yt){N||(yt?ue(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(yt){fe!==yt&&!N&&(n.stencilMask(yt),fe=yt)},setFunc:function(yt,wi,si){(ye!==yt||De!==wi||le!==si)&&(n.stencilFunc(yt,wi,si),ye=yt,De=wi,le=si)},setOp:function(yt,wi,si){(te!==yt||Oe!==wi||rt!==si)&&(n.stencilOp(yt,wi,si),te=yt,Oe=wi,rt=si)},setLocked:function(yt){N=yt},setClear:function(yt){Rt!==yt&&(n.clearStencil(yt),Rt=yt)},reset:function(){N=!1,fe=null,ye=null,De=null,le=null,te=null,Oe=null,rt=null,Rt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,f=[],g=null,x=!1,v=null,m=null,S=null,y=null,_=null,R=null,A=null,P=new ut(0,0,0),D=0,b=!1,w=null,C=null,L=null,k=null,O=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=Y>=2);let re=null,ae={};const Ce=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Ge=new Wt().fromArray(Ce),et=new Wt().fromArray(he);function $(N,fe,ye,De){const le=new Uint8Array(4),te=n.createTexture();n.bindTexture(N,te),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<ye;Oe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(fe+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return te}const ve={};ve[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(as),ne(!1),Q(Lu),ue(n.CULL_FACE),K(tr);function ue(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Be(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ie(N,fe){return d[N]!==fe?(n.bindFramebuffer(N,fe),d[N]=fe,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Z(N,fe){let ye=f,De=!1;if(N){ye=p.get(fe),ye===void 0&&(ye=[],p.set(fe,ye));const le=N.textures;if(ye.length!==le.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Oe=le.length;te<Oe;te++)ye[te]=n.COLOR_ATTACHMENT0+te;ye.length=le.length,De=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,De=!0);De&&n.drawBuffers(ye)}function we(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const Pe={[_r]:n.FUNC_ADD,[rp]:n.FUNC_SUBTRACT,[sp]:n.FUNC_REVERSE_SUBTRACT};Pe[op]=n.MIN,Pe[ap]=n.MAX;const I={[cp]:n.ZERO,[lp]:n.ONE,[up]:n.SRC_COLOR,[Fc]:n.SRC_ALPHA,[gp]:n.SRC_ALPHA_SATURATE,[pp]:n.DST_COLOR,[hp]:n.DST_ALPHA,[dp]:n.ONE_MINUS_SRC_COLOR,[Bc]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[fp]:n.ONE_MINUS_DST_ALPHA,[vp]:n.CONSTANT_COLOR,[xp]:n.ONE_MINUS_CONSTANT_COLOR,[_p]:n.CONSTANT_ALPHA,[yp]:n.ONE_MINUS_CONSTANT_ALPHA};function K(N,fe,ye,De,le,te,Oe,rt,Rt,yt){if(N===tr){x===!0&&(Be(n.BLEND),x=!1);return}if(x===!1&&(ue(n.BLEND),x=!0),N!==ip){if(N!==v||yt!==b){if((m!==_r||_!==_r)&&(n.blendEquation(n.FUNC_ADD),m=_r,_=_r),yt)switch(N){case is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.ONE,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Iu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,y=null,R=null,A=null,P.set(0,0,0),D=0,v=N,b=yt}return}le=le||fe,te=te||ye,Oe=Oe||De,(fe!==m||le!==_)&&(n.blendEquationSeparate(Pe[fe],Pe[le]),m=fe,_=le),(ye!==S||De!==y||te!==R||Oe!==A)&&(n.blendFuncSeparate(I[ye],I[De],I[te],I[Oe]),S=ye,y=De,R=te,A=Oe),(rt.equals(P)===!1||Rt!==D)&&(n.blendColor(rt.r,rt.g,rt.b,Rt),P.copy(rt),D=Rt),v=N,b=!1}function j(N,fe){N.side===pn?Be(n.CULL_FACE):ue(n.CULL_FACE);let ye=N.side===vn;fe&&(ye=!ye),ne(ye),N.blending===is&&N.transparent===!1?K(tr):K(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const De=N.stencilWrite;a.setTest(De),De&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(N){w!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),w=N)}function Q(N){N!==tp?(ue(n.CULL_FACE),N!==C&&(N===Lu?n.cullFace(n.BACK):N===np?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),C=N}function xe(N){N!==L&&(F&&n.lineWidth(N),L=N)}function se(N,fe,ye){N?(ue(n.POLYGON_OFFSET_FILL),(k!==fe||O!==ye)&&(n.polygonOffset(fe,ye),k=fe,O=ye)):Be(n.POLYGON_OFFSET_FILL)}function _e(N){N?ue(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function it(N){N===void 0&&(N=n.TEXTURE0+B-1),re!==N&&(n.activeTexture(N),re=N)}function tt(N,fe,ye){ye===void 0&&(re===null?ye=n.TEXTURE0+B-1:ye=re);let De=ae[ye];De===void 0&&(De={type:void 0,texture:void 0},ae[ye]=De),(De.type!==N||De.texture!==fe)&&(re!==ye&&(n.activeTexture(ye),re=ye),n.bindTexture(N,fe||ve[N]),De.type=N,De.texture=fe)}function T(){const N=ae[re];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){Ge.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ge.copy(N))}function Ke(N){et.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function ze(N,fe){let ye=l.get(fe);ye===void 0&&(ye=new WeakMap,l.set(fe,ye));let De=ye.get(N);De===void 0&&(De=n.getUniformBlockIndex(fe,N.name),ye.set(N,De))}function Me(N,fe){const De=l.get(fe).get(N);c.get(fe)!==De&&(n.uniformBlockBinding(fe,De,N.__bindingPointIndex),c.set(fe,De))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ae={},d={},p=new WeakMap,f=[],g=null,x=!1,v=null,m=null,S=null,y=null,_=null,R=null,A=null,P=new ut(0,0,0),D=0,b=!1,w=null,C=null,L=null,k=null,O=null,Ge.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Be,bindFramebuffer:Ie,drawBuffers:Z,useProgram:we,setBlending:K,setMaterial:j,setFlipSided:ne,setCullFace:Q,setLineWidth:xe,setPolygonOffset:se,setScissorTest:_e,activeTexture:it,bindTexture:tt,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Ne,texImage3D:ce,updateUBOMapping:ze,uniformBlockBinding:Me,texStorage2D:ge,texStorage3D:ke,texSubImage2D:X,texSubImage3D:ie,compressedTexSubImage2D:J,compressedTexSubImage3D:Fe,scissor:Ae,viewport:Ke,reset:st}}function G_(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):va("canvas")}function x(T,M,V){let X=1;const ie=tt(T);if((ie.width>V||ie.height>V)&&(X=V/Math.max(ie.width,ie.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(X*ie.width),Fe=Math.floor(X*ie.height);d===void 0&&(d=g(J,Fe));const ge=M?g(J,Fe):d;return ge.width=J,ge.height=Fe,ge.getContext("2d").drawImage(T,0,0,J,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Fe+")."),ge}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function v(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,M,V,X,ie=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=M;if(M===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),M===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),M===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){const Fe=ie?ma:_t.getTransfer(X);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Fe===St?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(T,M){let V;return T?M===null||M===Er||M===Js?V=n.DEPTH24_STENCIL8:M===ci?V=n.DEPTH32F_STENCIL8:M===js&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Er||M===Js?V=n.DEPTH_COMPONENT24:M===ci?V=n.DEPTH_COMPONENT32F:M===js&&(V=n.DEPTH_COMPONENT16),V}function R(T,M){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pn&&T.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),D(M),M.isVideoTexture&&u.delete(M)}function P(T){const M=T.target;M.removeEventListener("dispose",P),w(M)}function D(T){const M=i.get(T);if(M.__webglInit===void 0)return;const V=T.source,X=p.get(V);if(X){const ie=X[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(T),Object.keys(X).length===0&&p.delete(V)}i.remove(T)}function b(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const V=T.source,X=p.get(V);delete X[M.__cacheKey],o.memory.textures--}function w(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let ie=0;ie<M.__webglFramebuffer[X].length;ie++)n.deleteFramebuffer(M.__webglFramebuffer[X][ie]);else n.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)n.deleteFramebuffer(M.__webglFramebuffer[X]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=T.textures;for(let X=0,ie=V.length;X<ie;X++){const J=i.get(V[X]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[X])}i.remove(T)}let C=0;function L(){C=0}function k(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function O(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function B(T,M){const V=i.get(T);if(T.isVideoTexture&&_e(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,T,M);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function F(T,M){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){ve(V,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function Y(T,M){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){ve(V,T,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function G(T,M){const V=i.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const re={[pa]:n.REPEAT,[br]:n.CLAMP_TO_EDGE,[jc]:n.MIRRORED_REPEAT},ae={[Pn]:n.NEAREST,[Rp]:n.NEAREST_MIPMAP_NEAREST,[Ro]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[Qa]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},Ce={[Ip]:n.NEVER,[Bp]:n.ALWAYS,[Up]:n.LESS,[dh]:n.LEQUAL,[kp]:n.EQUAL,[Fp]:n.GEQUAL,[Np]:n.GREATER,[Op]:n.NOTEQUAL};function he(T,M){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ai||M.magFilter===Qa||M.magFilter===Ro||M.magFilter===wr||M.minFilter===ai||M.minFilter===Qa||M.minFilter===Ro||M.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,re[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,re[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,re[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ae[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ae[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==Ro&&M.minFilter!==wr||M.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const X=M.source;let ie=p.get(X);ie===void 0&&(ie={},p.set(X,ie));const J=O(M);if(J!==T.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[J].usedTimes++;const Fe=ie[T.__cacheKey];Fe!==void 0&&(ie[T.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(M)),T.__cacheKey=J,T.__webglTexture=ie[J].texture}return V}function et(T,M,V){return Math.floor(Math.floor(T/V)/M)}function $(T,M,V,X){const J=T.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,X,M.data);else{J.sort((ce,Ae)=>ce.start-Ae.start);let Fe=0;for(let ce=1;ce<J.length;ce++){const Ae=J[Fe],Ke=J[ce],ze=Ae.start+Ae.count,Me=et(Ke.start,M.width,4),st=et(Ae.start,M.width,4);Ke.start<=ze+1&&Me===st&&et(Ke.start+Ke.count-1,M.width,4)===Me?Ae.count=Math.max(Ae.count,Ke.start+Ke.count-Ae.start):(++Fe,J[Fe]=Ke)}J.length=Fe+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),ke=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ce=0,Ae=J.length;ce<Ae;ce++){const Ke=J[ce],ze=Math.floor(Ke.start/4),Me=Math.ceil(Ke.count/4),st=ze%M.width,N=Math.floor(ze/M.width),fe=Me,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,st),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,st,N,fe,ye,V,X,M.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function ve(T,M,V){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);const ie=Ge(T,M),J=M.source;t.bindTexture(X,T.__webglTexture,n.TEXTURE0+V);const Fe=i.get(J);if(J.version!==Fe.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);const ge=_t.getPrimaries(_t.workingColorSpace),ke=M.colorSpace===Zi?null:_t.getPrimaries(M.colorSpace),Ne=M.colorSpace===Zi||ge===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ce=x(M.image,!1,r.maxTextureSize);ce=it(M,ce);const Ae=s.convert(M.format,M.colorSpace),Ke=s.convert(M.type);let ze=y(M.internalFormat,Ae,Ke,M.colorSpace,M.isVideoTexture);he(X,M);let Me;const st=M.mipmaps,N=M.isVideoTexture!==!0,fe=Fe.__version===void 0||ie===!0,ye=J.dataReady,De=R(M,ce);if(M.isDepthTexture)ze=_(M.format===Zs,M.type),fe&&(N?t.texStorage2D(n.TEXTURE_2D,1,ze,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ze,ce.width,ce.height,0,Ae,Ke,null));else if(M.isDataTexture)if(st.length>0){N&&fe&&t.texStorage2D(n.TEXTURE_2D,De,ze,st[0].width,st[0].height);for(let le=0,te=st.length;le<te;le++)Me=st[le],N?ye&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me.width,Me.height,Ae,Ke,Me.data):t.texImage2D(n.TEXTURE_2D,le,ze,Me.width,Me.height,0,Ae,Ke,Me.data);M.generateMipmaps=!1}else N?(fe&&t.texStorage2D(n.TEXTURE_2D,De,ze,ce.width,ce.height),ye&&$(M,ce,Ae,Ke)):t.texImage2D(n.TEXTURE_2D,0,ze,ce.width,ce.height,0,Ae,Ke,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ze,st[0].width,st[0].height,ce.depth);for(let le=0,te=st.length;le<te;le++)if(Me=st[le],M.format!==qn)if(Ae!==null)if(N){if(ye)if(M.layerUpdates.size>0){const Oe=pd(Me.width,Me.height,M.format,M.type);for(const rt of M.layerUpdates){const Rt=Me.data.subarray(rt*Oe/Me.data.BYTES_PER_ELEMENT,(rt+1)*Oe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,rt,Me.width,Me.height,1,Ae,Rt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,ce.depth,Ae,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ze,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,ce.depth,Ae,Ke,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ze,Me.width,Me.height,ce.depth,0,Ae,Ke,Me.data)}else{N&&fe&&t.texStorage2D(n.TEXTURE_2D,De,ze,st[0].width,st[0].height);for(let le=0,te=st.length;le<te;le++)Me=st[le],M.format!==qn?Ae!==null?N?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ze,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ye&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me.width,Me.height,Ae,Ke,Me.data):t.texImage2D(n.TEXTURE_2D,le,ze,Me.width,Me.height,0,Ae,Ke,Me.data)}else if(M.isDataArrayTexture)if(N){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ze,ce.width,ce.height,ce.depth),ye)if(M.layerUpdates.size>0){const le=pd(ce.width,ce.height,M.format,M.type);for(const te of M.layerUpdates){const Oe=ce.data.subarray(te*le/ce.data.BYTES_PER_ELEMENT,(te+1)*le/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,Ae,Ke,Oe)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Ke,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ce.width,ce.height,ce.depth,0,Ae,Ke,ce.data);else if(M.isData3DTexture)N?(fe&&t.texStorage3D(n.TEXTURE_3D,De,ze,ce.width,ce.height,ce.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ae,Ke,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ce.width,ce.height,ce.depth,0,Ae,Ke,ce.data);else if(M.isFramebufferTexture){if(fe)if(N)t.texStorage2D(n.TEXTURE_2D,De,ze,ce.width,ce.height);else{let le=ce.width,te=ce.height;for(let Oe=0;Oe<De;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,ze,le,te,0,Ae,Ke,null),le>>=1,te>>=1}}else if(st.length>0){if(N&&fe){const le=tt(st[0]);t.texStorage2D(n.TEXTURE_2D,De,ze,le.width,le.height)}for(let le=0,te=st.length;le<te;le++)Me=st[le],N?ye&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ae,Ke,Me):t.texImage2D(n.TEXTURE_2D,le,ze,Ae,Ke,Me);M.generateMipmaps=!1}else if(N){if(fe){const le=tt(ce);t.texStorage2D(n.TEXTURE_2D,De,ze,le.width,le.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ke,ce)}else t.texImage2D(n.TEXTURE_2D,0,ze,Ae,Ke,ce);v(M)&&m(X),Fe.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ue(T,M,V){if(M.image.length!==6)return;const X=Ge(T,M),ie=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);const J=i.get(ie);if(ie.version!==J.__version||X===!0){t.activeTexture(n.TEXTURE0+V);const Fe=_t.getPrimaries(_t.workingColorSpace),ge=M.colorSpace===Zi?null:_t.getPrimaries(M.colorSpace),ke=M.colorSpace===Zi||Fe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let te=0;te<6;te++)!Ne&&!ce?Ae[te]=x(M.image[te],!0,r.maxCubemapSize):Ae[te]=ce?M.image[te].image:M.image[te],Ae[te]=it(M,Ae[te]);const Ke=Ae[0],ze=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),st=y(M.internalFormat,ze,Me,M.colorSpace),N=M.isVideoTexture!==!0,fe=J.__version===void 0||X===!0,ye=ie.dataReady;let De=R(M,Ke);he(n.TEXTURE_CUBE_MAP,M);let le;if(Ne){N&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,st,Ke.width,Ke.height);for(let te=0;te<6;te++){le=Ae[te].mipmaps;for(let Oe=0;Oe<le.length;Oe++){const rt=le[Oe];M.format!==qn?ze!==null?N?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe,0,0,rt.width,rt.height,ze,rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe,st,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe,0,0,rt.width,rt.height,ze,Me,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe,st,rt.width,rt.height,0,ze,Me,rt.data)}}}else{if(le=M.mipmaps,N&&fe){le.length>0&&De++;const te=tt(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,st,te.width,te.height)}for(let te=0;te<6;te++)if(ce){N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae[te].width,Ae[te].height,ze,Me,Ae[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,st,Ae[te].width,Ae[te].height,0,ze,Me,Ae[te].data);for(let Oe=0;Oe<le.length;Oe++){const Rt=le[Oe].image[te].image;N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe+1,0,0,Rt.width,Rt.height,ze,Me,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe+1,st,Rt.width,Rt.height,0,ze,Me,Rt.data)}}else{N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,Me,Ae[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,st,ze,Me,Ae[te]);for(let Oe=0;Oe<le.length;Oe++){const rt=le[Oe];N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe+1,0,0,ze,Me,rt.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe+1,st,ze,Me,rt.image[te])}}}v(M)&&m(n.TEXTURE_CUBE_MAP),J.__version=ie.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Be(T,M,V,X,ie,J){const Fe=s.convert(V.format,V.colorSpace),ge=s.convert(V.type),ke=y(V.internalFormat,Fe,ge,V.colorSpace),Ne=i.get(M),ce=i.get(V);if(ce.__renderTarget=M,!Ne.__hasExternalTextures){const Ae=Math.max(1,M.width>>J),Ke=Math.max(1,M.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,ke,Ae,Ke,M.depth,0,Fe,ge,null):t.texImage2D(ie,J,ke,Ae,Ke,0,Fe,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ie,ce.__webglTexture,0,xe(M)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ie,ce.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(T,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const X=M.depthTexture,ie=X&&X.isDepthTexture?X.type:null,J=_(M.stencilBuffer,ie),Fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=xe(M);se(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,J,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,T)}else{const X=M.textures;for(let ie=0;ie<X.length;ie++){const J=X[ie],Fe=s.convert(J.format,J.colorSpace),ge=s.convert(J.type),ke=y(J.internalFormat,Fe,ge,J.colorSpace),Ne=xe(M);V&&se(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ke,M.width,M.height):se(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,ke,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ke,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(M.depthTexture);X.__renderTarget=M,(!X.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const ie=X.__webglTexture,J=xe(M);if(M.depthTexture.format===Ks)se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Zs)se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function we(T){const M=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",ie)};X.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=X}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const X=T.texture.mipmaps;X&&X.length>0?Z(M.__webglFramebuffer[0],T):Z(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=n.createRenderbuffer(),Ie(M.__webglDepthbuffer[X],T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ie(M.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(T,M,V){const X=i.get(T);M!==void 0&&Be(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&we(T)}function I(T){const M=T.texture,V=i.get(T),X=i.get(M);T.addEventListener("dispose",P);const ie=T.textures,J=T.isWebGLCubeRenderTarget===!0,Fe=ie.length>1;if(Fe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ge]=[];for(let ke=0;ke<M.mipmaps.length;ke++)V.__webglFramebuffer[ge][ke]=n.createFramebuffer()}else V.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)V.__webglFramebuffer[ge]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let ge=0,ke=ie.length;ge<ke;ge++){const Ne=i.get(ie[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&se(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){const ke=ie[ge];V.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ge]);const Ne=s.convert(ke.format,ke.colorSpace),ce=s.convert(ke.type),Ae=y(ke.internalFormat,Ne,ce,ke.colorSpace,T.isXRRenderTarget===!0),Ke=xe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Ae,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,V.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),he(n.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Be(V.__webglFramebuffer[ge][ke],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke);else Be(V.__webglFramebuffer[ge],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);v(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ge=0,ke=ie.length;ge<ke;ge++){const Ne=ie[ge],ce=i.get(Ne);let Ae=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ce.__webglTexture),he(Ae,Ne),Be(V.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+ge,Ae,0),v(Ne)&&m(Ae)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,X.__webglTexture),he(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Be(V.__webglFramebuffer[ke],T,M,n.COLOR_ATTACHMENT0,ge,ke);else Be(V.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,ge,0);v(M)&&m(ge),t.unbindTexture()}T.depthBuffer&&we(T)}function K(T){const M=T.textures;for(let V=0,X=M.length;V<X;V++){const ie=M[V];if(v(ie)){const J=S(T),Fe=i.get(ie).__webglTexture;t.bindTexture(J,Fe),m(J),t.unbindTexture()}}}const j=[],ne=[];function Q(T){if(T.samples>0){if(se(T)===!1){const M=T.textures,V=T.width,X=T.height;let ie=n.COLOR_BUFFER_BIT;const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(T),ge=M.length>1;if(ge)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const ke=T.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ne]);const ce=i.get(M[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,V,X,0,0,V,X,ie,n.NEAREST),c===!0&&(j.length=0,ne.length=0,j.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(J),ne.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ne]);const ce=i.get(M[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function xe(T){return Math.min(r.maxSamples,T.samples)}function se(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function it(T,M){const V=T.colorSpace,X=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==us&&V!==Zi&&(_t.getTransfer(V)===St?(X!==qn||ie!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Pe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=se}function W_(n,e){function t(i,r=Zi){let s;const o=_t.getTransfer(r);if(i===hi)return n.UNSIGNED_BYTE;if(i===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===oh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rh)return n.BYTE;if(i===sh)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===Nl)return n.INT;if(i===Er)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===po)return n.HALF_FLOAT;if(i===ah)return n.ALPHA;if(i===ch)return n.RGB;if(i===qn)return n.RGBA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===Bl)return n.RED;if(i===zl)return n.RED_INTEGER;if(i===lh)return n.RG;if(i===Hl)return n.RG_INTEGER;if(i===Vl)return n.RGBA_INTEGER;if(i===ia||i===ra||i===sa||i===oa)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jc||i===Kc||i===Zc||i===Qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===el||i===tl)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===il||i===rl||i===sl||i===ol||i===al||i===cl||i===ll||i===ul||i===dl||i===hl||i===fl||i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===il)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ol)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===al)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ul)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ml)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gl)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===vl||i===xl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===aa)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uh||i===_l||i===yl||i===bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Bh extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Bh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sr({vertexShader:$_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends _s{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,f=null,g=null;const x=new X_,v={},m=t.getContextAttributes();let S=null,y=null;const _=[],R=[],A=new me;let P=null;const D=new bn;D.viewport=new Wt;const b=new bn;b.viewport=new Wt;const w=[D,b],C=new mg;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ve=_[$];return ve===void 0&&(ve=new yc,_[$]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function($){let ve=_[$];return ve===void 0&&(ve=new yc,_[$]=ve),ve.getGripSpace()},this.getHand=function($){let ve=_[$];return ve===void 0&&(ve=new yc,_[$]=ve),ve.getHandSpace()};function O($){const ve=R.indexOf($.inputSource);if(ve===-1)return;const ue=_[ve];ue!==void 0&&(ue.update($.inputSource,$.frame,l||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let $=0;$<_.length;$++){const ve=R[$];ve!==null&&(R[$]=null,_[$].disconnect(ve))}L=null,k=null,x.reset();for(const $ in v)delete v[$];e.setRenderTarget(S),f=null,p=null,d=null,r=null,y=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Be=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Zs:Ks,Be=m.stencil?Js:Er);const Z={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};p=d.createProjectionLayer(Z),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Ni(p.textureWidth,p.textureHeight,{format:qn,type:hi,depthTexture:new bh(p.textureWidth,p.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ni(f.framebufferWidth,f.framebufferHeight,{format:qn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F($){for(let ve=0;ve<$.removed.length;ve++){const ue=$.removed[ve],Be=R.indexOf(ue);Be>=0&&(R[Be]=null,_[Be].disconnect(ue))}for(let ve=0;ve<$.added.length;ve++){const ue=$.added[ve];let Be=R.indexOf(ue);if(Be===-1){for(let Z=0;Z<_.length;Z++)if(Z>=R.length){R.push(ue),Be=Z;break}else if(R[Z]===null){R[Z]=ue,Be=Z;break}if(Be===-1)break}const Ie=_[Be];Ie&&Ie.connect(ue)}}const Y=new U,G=new U;function re($,ve,ue){Y.setFromMatrixPosition(ve.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);const Be=Y.distanceTo(G),Ie=ve.projectionMatrix.elements,Z=ue.projectionMatrix.elements,we=Ie[14]/(Ie[10]-1),Pe=Ie[14]/(Ie[10]+1),I=(Ie[9]+1)/Ie[5],K=(Ie[9]-1)/Ie[5],j=(Ie[8]-1)/Ie[0],ne=(Z[8]+1)/Z[0],Q=we*j,xe=we*ne,se=Be/(-j+ne),_e=se*-j;if(ve.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_e),$.translateZ(se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(ve.projectionMatrix),$.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const it=we+se,tt=Pe+se,T=Q-_e,M=xe+(Be-_e),V=I*Pe/tt*it,X=K*Pe/tt*it;$.projectionMatrix.makePerspective(T,M,V,X,it,tt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,ve){ve===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ve.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ve=$.near,ue=$.far;x.texture!==null&&(x.depthNear>0&&(ve=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),C.near=b.near=D.near=ve,C.far=b.far=D.far=ue,(L!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,k=C.far),C.layers.mask=$.layers.mask|6,D.layers.mask=C.layers.mask&3,b.layers.mask=C.layers.mask&5;const Be=$.parent,Ie=C.cameras;ae(C,Be);for(let Z=0;Z<Ie.length;Z++)ae(Ie[Z],Be);Ie.length===2?re(C,D,b):C.projectionMatrix.copy(D.projectionMatrix),Ce($,C,Be)};function Ce($,ve,ue){ue===null?$.matrix.copy(ve.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(ve.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ve.projectionMatrix),$.projectionMatrixInverse.copy(ve.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function($){c=$,p!==null&&(p.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function($){return v[$]};let he=null;function Ge($,ve){if(u=ve.getViewerPose(l||o),g=ve,u!==null){const ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Be=!1;ue.length!==C.cameras.length&&(C.cameras.length=0,Be=!0);for(let Pe=0;Pe<ue.length;Pe++){const I=ue[Pe];let K=null;if(f!==null)K=f.getViewport(I);else{const ne=d.getViewSubImage(p,I);K=ne.viewport,Pe===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let j=w[Pe];j===void 0&&(j=new bn,j.layers.enable(Pe),j.viewport=new Wt,w[Pe]=j),j.matrix.fromArray(I.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(I.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(K.x,K.y,K.width,K.height),Pe===0&&(C.matrix.copy(j.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Be===!0&&C.cameras.push(j)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Pe=d.getDepthInformation(ue[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(Pe,r.renderState)}if(Ie&&Ie.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Pe=0;Pe<ue.length;Pe++){const I=ue[Pe].camera;if(I){let K=v[I];K||(K=new Bh,v[I]=K);const j=d.getCameraImage(I);K.sourceTexture=j}}}for(let ue=0;ue<_.length;ue++){const Be=R[ue],Ie=_[ue];Be!==null&&Ie!==void 0&&Ie.update(Be,ve,l||o)}he&&he($,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),g=null}const et=new Uh;et.setAnimationLoop(Ge),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}}const gr=new fi,j_=new wt;function J_(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,xh(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,S,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),d(v,m)):m.isMeshPhongMaterial?(s(v,m),u(v,m)):m.isMeshStandardMaterial?(s(v,m),p(v,m),m.isMeshPhysicalMaterial&&f(v,m,_)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),x(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?c(v,m,S,y):m.isSpriteMaterial?l(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===vn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===vn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,_=S.envMapRotation;y&&(v.envMap.value=y,gr.copy(_),gr.x*=-1,gr.y*=-1,gr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),v.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(gr)),v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,S,y){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*S,v.scale.value=y*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function p(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function f(v,m,S){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=S.texture,v.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function x(v,m){const S=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(S.matrixWorld),v.nearDistance.value=S.shadow.camera.near,v.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function K_(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const _=y.program;i.uniformBlockBinding(S,_)}function l(S,y){let _=r[S.id];_===void 0&&(g(S),_=u(S),r[S.id]=_,S.addEventListener("dispose",v));const R=y.program;i.updateUBOMapping(S,R);const A=e.render.frame;s[S.id]!==A&&(p(S),s[S.id]=A)}function u(S){const y=d();S.__bindingPointIndex=y;const _=n.createBuffer(),R=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const y=r[S.id],_=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,P=_.length;A<P;A++){const D=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,w=D.length;b<w;b++){const C=D[b];if(f(C,A,b,R)===!0){const L=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let B=0;B<k.length;B++){const F=k[B],Y=x(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,L+O,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,y,_,R){const A=S.value,P=y+"_"+_;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{const D=R[P];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[P]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(S){const y=S.uniforms;let _=0;const R=16;for(let P=0,D=y.length;P<D;P++){const b=Array.isArray(y[P])?y[P]:[y[P]];for(let w=0,C=b.length;w<C;w++){const L=b[w],k=Array.isArray(L.value)?L.value:[L.value];for(let O=0,B=k.length;O<B;O++){const F=k[O],Y=x(F),G=_%R,re=G%Y.boundary,ae=G+re;_+=re,ae!==0&&R-ae<Y.storage&&(_+=R-ae),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=Y.storage}}}const A=_%R;return A>0&&(_+=R-A),S.__size=_,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function v(S){const y=S.target;y.removeEventListener("dispose",v);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class Z_{constructor(e={}){const{canvas:t=nm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let R=!1;this._outputColorSpace=Qt;let A=0,P=0,D=null,b=-1,w=null;const C=new Wt,L=new Wt;let k=null;const O=new ut(0);let B=0,F=t.width,Y=t.height,G=1,re=null,ae=null;const Ce=new Wt(0,0,F,Y),he=new Wt(0,0,F,Y);let Ge=!1;const et=new jl;let $=!1,ve=!1;const ue=new wt,Be=new U,Ie=new Wt,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function Pe(){return D===null?G:1}let I=i;function K(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",le,!1),I===null){const z="webgl2";if(I=K(z,E),I===null)throw K(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let j,ne,Q,xe,se,_e,it,tt,T,M,V,X,ie,J,Fe,ge,ke,Ne,ce,Ae,Ke,ze,Me,st;function N(){j=new cx(I),j.init(),ze=new W_(I,j),ne=new tx(I,j,e,ze),Q=new V_(I,j),ne.reversedDepthBuffer&&p&&Q.buffers.depth.setReversed(!0),xe=new dx(I),se=new R_,_e=new G_(I,j,Q,se,ne,ze,xe),it=new ix(_),tt=new ax(_),T=new vg(I),Me=new Qv(I,T),M=new lx(I,T,xe,Me),V=new fx(I,M,T,xe),ce=new hx(I,ne,_e),ge=new nx(se),X=new C_(_,it,tt,j,ne,Me,ge),ie=new J_(_,se),J=new L_,Fe=new O_(j),Ne=new Zv(_,it,tt,Q,V,f,c),ke=new z_(_,V,ne),st=new K_(I,xe,ne,Q),Ae=new ex(I,j,xe),Ke=new ux(I,j,xe),xe.programs=X.programs,_.capabilities=ne,_.extensions=j,_.properties=se,_.renderLists=J,_.shadowMap=ke,_.state=Q,_.info=xe}N();const fe=new Y_(_,I);this.xr=fe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(F,Y,!1))},this.getSize=function(E){return E.set(F,Y)},this.setSize=function(E,z,W=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,Y=z,t.width=Math.floor(E*G),t.height=Math.floor(z*G),W===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(F*G,Y*G).floor()},this.setDrawingBufferSize=function(E,z,W){F=E,Y=z,G=W,t.width=Math.floor(E*W),t.height=Math.floor(z*W),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Ce)},this.setViewport=function(E,z,W,q){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,z,W,q),Q.viewport(C.copy(Ce).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,z,W,q){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,z,W,q),Q.scissor(L.copy(he).multiplyScalar(G).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){Q.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,W=!0){let q=0;if(E){let H=!1;if(D!==null){const de=D.texture.format;H=de===Vl||de===Hl||de===zl}if(H){const de=D.texture.type,Se=de===hi||de===Er||de===js||de===Js||de===Ol||de===Fl,Ue=Ne.getClearColor(),Le=Ne.getClearAlpha(),Je=Ue.r,Qe=Ue.g,We=Ue.b;Se?(g[0]=Je,g[1]=Qe,g[2]=We,g[3]=Le,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Je,x[1]=Qe,x[2]=We,x[3]=Le,I.clearBufferiv(I.COLOR,0,x))}else q|=I.COLOR_BUFFER_BIT}z&&(q|=I.DEPTH_BUFFER_BIT),W&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ne.dispose(),J.dispose(),Fe.dispose(),se.dispose(),it.dispose(),tt.dispose(),V.dispose(),Me.dispose(),st.dispose(),X.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",si),fe.removeEventListener("sessionend",Eu),lr.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=xe.autoReset,z=ke.enabled,W=ke.autoUpdate,q=ke.needsUpdate,H=ke.type;N(),xe.autoReset=E,ke.enabled=z,ke.autoUpdate=W,ke.needsUpdate=q,ke.type=H}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function te(E){const z=E.target;z.removeEventListener("dispose",te),Oe(z)}function Oe(E){rt(E),se.remove(E)}function rt(E){const z=se.get(E).programs;z!==void 0&&(z.forEach(function(W){X.releaseProgram(W)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,W,q,H,de){z===null&&(z=Z);const Se=H.isMesh&&H.matrixWorld.determinant()<0,Ue=jf(E,z,W,q,H);Q.setMaterial(q,Se);let Le=W.index,Je=1;if(q.wireframe===!0){if(Le=M.getWireframeAttribute(W),Le===void 0)return;Je=2}const Qe=W.drawRange,We=W.attributes.position;let ht=Qe.start*Je,Mt=(Qe.start+Qe.count)*Je;de!==null&&(ht=Math.max(ht,de.start*Je),Mt=Math.min(Mt,(de.start+de.count)*Je)),Le!==null?(ht=Math.max(ht,0),Mt=Math.min(Mt,Le.count)):We!=null&&(ht=Math.max(ht,0),Mt=Math.min(Mt,We.count));const Bt=Mt-ht;if(Bt<0||Bt===1/0)return;Me.setup(H,q,Ue,W,Le);let Pt,Tt=Ae;if(Le!==null&&(Pt=T.get(Le),Tt=Ke,Tt.setIndex(Pt)),H.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*Pe()),Tt.setMode(I.LINES)):Tt.setMode(I.TRIANGLES);else if(H.isLine){let Ye=q.linewidth;Ye===void 0&&(Ye=1),Q.setLineWidth(Ye*Pe()),H.isLineSegments?Tt.setMode(I.LINES):H.isLineLoop?Tt.setMode(I.LINE_LOOP):Tt.setMode(I.LINE_STRIP)}else H.isPoints?Tt.setMode(I.POINTS):H.isSprite&&Tt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ye=H._multiDrawStarts,Lt=H._multiDrawCounts,xt=H._multiDrawCount,Sn=Le?T.get(Le).bytesPerElement:1,Ur=se.get(q).currentProgram.getUniforms();for(let En=0;En<xt;En++)Ur.setValue(I,"_gl_DrawID",En),Tt.render(Ye[En]/Sn,Lt[En])}else if(H.isInstancedMesh)Tt.renderInstances(ht,Bt,H.count);else if(W.isInstancedBufferGeometry){const Ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Lt=Math.min(W.instanceCount,Ye);Tt.renderInstances(ht,Bt,Lt)}else Tt.render(ht,Bt)};function Rt(E,z,W){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,Co(E,z,W),E.side=rr,E.needsUpdate=!0,Co(E,z,W),E.side=pn):Co(E,z,W)}this.compile=function(E,z,W=null){W===null&&(W=E),m=Fe.get(W),m.init(z),y.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const q=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Ue=de[Se];Rt(Ue,W,H),q.add(Ue)}else Rt(de,W,H),q.add(de)}),m=y.pop(),q},this.compileAsync=function(E,z,W=null){const q=this.compile(E,z,W);return new Promise(H=>{function de(){if(q.forEach(function(Se){se.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){H(E);return}setTimeout(de,10)}j.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let yt=null;function wi(E){yt&&yt(E)}function si(){lr.stop()}function Eu(){lr.start()}const lr=new Uh;lr.setAnimationLoop(wi),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(E){yt=E,fe.setAnimationLoop(E),E===null?lr.stop():lr.start()},fe.addEventListener("sessionstart",si),fe.addEventListener("sessionend",Eu),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,z,D),m=Fe.get(E,y.length),m.init(z),y.push(m),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(ue,li,z.reversedDepth),ve=this.localClippingEnabled,$=ge.init(this.clippingPlanes,ve),v=J.get(E,S.length),v.init(),S.push(v),fe.enabled===!0&&fe.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&Ka(de,z,-1/0,_.sortObjects)}Ka(E,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(re,ae),we=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,we&&Ne.addToRenderList(v,E),this.info.render.frame++,$===!0&&ge.beginShadows();const W=m.state.shadowsArray;ke.render(W,E,z),$===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,H=v.transmissive;if(m.setupLights(),z.isArrayCamera){const de=z.cameras;if(H.length>0)for(let Se=0,Ue=de.length;Se<Ue;Se++){const Le=de[Se];Au(q,H,E,Le)}we&&Ne.render(E);for(let Se=0,Ue=de.length;Se<Ue;Se++){const Le=de[Se];Tu(v,E,Le,Le.viewport)}}else H.length>0&&Au(q,H,E,z),we&&Ne.render(E),Tu(v,E,z);D!==null&&P===0&&(_e.updateMultisampleRenderTarget(D),_e.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(_,E,z),Me.resetDefaultState(),b=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],$===!0&&ge.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function Ka(E,z,W,q){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){q&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const Se=V.update(E),Ue=E.material;Ue.visible&&v.push(E,Se,Ue,W,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const Se=V.update(E),Ue=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(Ue)){const Le=Se.groups;for(let Je=0,Qe=Le.length;Je<Qe;Je++){const We=Le[Je],ht=Ue[We.materialIndex];ht&&ht.visible&&v.push(E,Se,ht,W,Ie.z,We)}}else Ue.visible&&v.push(E,Se,Ue,W,Ie.z,null)}}const de=E.children;for(let Se=0,Ue=de.length;Se<Ue;Se++)Ka(de[Se],z,W,q)}function Tu(E,z,W,q){const H=E.opaque,de=E.transmissive,Se=E.transparent;m.setupLightsView(W),$===!0&&ge.setGlobalState(_.clippingPlanes,W),q&&Q.viewport(C.copy(q)),H.length>0&&Ao(H,z,W),de.length>0&&Ao(de,z,W),Se.length>0&&Ao(Se,z,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Au(E,z,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Ni(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?po:hi,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const de=m.state.transmissionRenderTarget[q.id],Se=q.viewport||C;de.setSize(Se.z*_.transmissionResolutionScale,Se.w*_.transmissionResolutionScale);const Ue=_.getRenderTarget(),Le=_.getActiveCubeFace(),Je=_.getActiveMipmapLevel();_.setRenderTarget(de),_.getClearColor(O),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),we&&Ne.render(W);const Qe=_.toneMapping;_.toneMapping=nr;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),$===!0&&ge.setGlobalState(_.clippingPlanes,q),Ao(E,W,q),_e.updateMultisampleRenderTarget(de),_e.updateRenderTargetMipmap(de),j.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Mt=0,Bt=z.length;Mt<Bt;Mt++){const Pt=z[Mt],Tt=Pt.object,Ye=Pt.geometry,Lt=Pt.material,xt=Pt.group;if(Lt.side===pn&&Tt.layers.test(q.layers)){const Sn=Lt.side;Lt.side=vn,Lt.needsUpdate=!0,Cu(Tt,W,q,Ye,Lt,xt),Lt.side=Sn,Lt.needsUpdate=!0,ht=!0}}ht===!0&&(_e.updateMultisampleRenderTarget(de),_e.updateRenderTargetMipmap(de))}_.setRenderTarget(Ue,Le,Je),_.setClearColor(O,B),We!==void 0&&(q.viewport=We),_.toneMapping=Qe}function Ao(E,z,W){const q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,de=E.length;H<de;H++){const Se=E[H],Ue=Se.object,Le=Se.geometry,Je=Se.group;let Qe=Se.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),Ue.layers.test(W.layers)&&Cu(Ue,z,W,Le,Qe,Je)}}function Cu(E,z,W,q,H,de){E.onBeforeRender(_,z,W,q,H,de),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(_,z,W,q,E,de),H.transparent===!0&&H.side===pn&&H.forceSinglePass===!1?(H.side=vn,H.needsUpdate=!0,_.renderBufferDirect(W,z,q,H,E,de),H.side=rr,H.needsUpdate=!0,_.renderBufferDirect(W,z,q,H,E,de),H.side=pn):_.renderBufferDirect(W,z,q,H,E,de),E.onAfterRender(_,z,W,q,H,de)}function Co(E,z,W){z.isScene!==!0&&(z=Z);const q=se.get(E),H=m.state.lights,de=m.state.shadowsArray,Se=H.state.version,Ue=X.getParameters(E,H.state,de,z,W),Le=X.getProgramCacheKey(Ue);let Je=q.programs;q.environment=E.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(E.isMeshStandardMaterial?tt:it).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Je===void 0&&(E.addEventListener("dispose",te),Je=new Map,q.programs=Je);let Qe=Je.get(Le);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Se)return Pu(E,Ue),Qe}else Ue.uniforms=X.getUniforms(E),E.onBeforeCompile(Ue,_),Qe=X.acquireProgram(Ue,Le),Je.set(Le,Qe),q.uniforms=Ue.uniforms;const We=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=ge.uniform),Pu(E,Ue),q.needsLights=Kf(E),q.lightsStateVersion=Se,q.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function Ru(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=ca.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Pu(E,z){const W=se.get(E);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function jf(E,z,W,q,H){z.isScene!==!0&&(z=Z),_e.resetTextureUnits();const de=z.fog,Se=q.isMeshStandardMaterial?z.environment:null,Ue=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:us,Le=(q.isMeshStandardMaterial?tt:it).get(q.envMap||Se),Je=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),We=!!W.morphAttributes.position,ht=!!W.morphAttributes.normal,Mt=!!W.morphAttributes.color;let Bt=nr;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Bt=_.toneMapping);const Pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=Pt!==void 0?Pt.length:0,Ye=se.get(q),Lt=m.state.lights;if($===!0&&(ve===!0||E!==w)){const dn=E===w&&q.id===b;ge.setState(q,E,dn)}let xt=!1;q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Lt.state.version||Ye.outputColorSpace!==Ue||H.isBatchedMesh&&Ye.batching===!1||!H.isBatchedMesh&&Ye.batching===!0||H.isBatchedMesh&&Ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ye.instancing===!1||!H.isInstancedMesh&&Ye.instancing===!0||H.isSkinnedMesh&&Ye.skinning===!1||!H.isSkinnedMesh&&Ye.skinning===!0||H.isInstancedMesh&&Ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ye.instancingMorph===!1&&H.morphTexture!==null||Ye.envMap!==Le||q.fog===!0&&Ye.fog!==de||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ge.numPlanes||Ye.numIntersection!==ge.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==Qe||Ye.morphTargets!==We||Ye.morphNormals!==ht||Ye.morphColors!==Mt||Ye.toneMapping!==Bt||Ye.morphTargetsCount!==Tt)&&(xt=!0):(xt=!0,Ye.__version=q.version);let Sn=Ye.currentProgram;xt===!0&&(Sn=Co(q,z,H));let Ur=!1,En=!1,Ps=!1;const Dt=Sn.getUniforms(),Nn=Ye.uniforms;if(Q.useProgram(Sn.program)&&(Ur=!0,En=!0,Ps=!0),q.id!==b&&(b=q.id,En=!0),Ur||w!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Dt.setValue(I,"projectionMatrix",E.projectionMatrix),Dt.setValue(I,"viewMatrix",E.matrixWorldInverse);const yn=Dt.map.cameraPosition;yn!==void 0&&yn.setValue(I,Be.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&Dt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,En=!0,Ps=!0)}if(H.isSkinnedMesh){Dt.setOptional(I,H,"bindMatrix"),Dt.setOptional(I,H,"bindMatrixInverse");const dn=H.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Dt.setValue(I,"boneTexture",dn.boneTexture,_e))}H.isBatchedMesh&&(Dt.setOptional(I,H,"batchingTexture"),Dt.setValue(I,"batchingTexture",H._matricesTexture,_e),Dt.setOptional(I,H,"batchingIdTexture"),Dt.setValue(I,"batchingIdTexture",H._indirectTexture,_e),Dt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Dt.setValue(I,"batchingColorTexture",H._colorsTexture,_e));const On=W.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&ce.update(H,W,Sn),(En||Ye.receiveShadow!==H.receiveShadow)&&(Ye.receiveShadow=H.receiveShadow,Dt.setValue(I,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Nn.envMap.value=Le,Nn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(Nn.envMapIntensity.value=z.environmentIntensity),En&&(Dt.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&Jf(Nn,Ps),de&&q.fog===!0&&ie.refreshFogUniforms(Nn,de),ie.refreshMaterialUniforms(Nn,q,G,Y,m.state.transmissionRenderTarget[E.id]),ca.upload(I,Ru(Ye),Nn,_e)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ca.upload(I,Ru(Ye),Nn,_e),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(I,"center",H.center),Dt.setValue(I,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(I,"normalMatrix",H.normalMatrix),Dt.setValue(I,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const dn=q.uniformsGroups;for(let yn=0,Za=dn.length;yn<Za;yn++){const ur=dn[yn];st.update(ur,Sn),st.bind(ur,Sn)}}return Sn}function Jf(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Kf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,z,W){const q=se.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),se.get(E.texture).__webglTexture=z,se.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const W=se.get(E);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Zf=I.createFramebuffer();this.setRenderTarget=function(E,z=0,W=0){D=E,A=z,P=W;let q=!0,H=null,de=!1,Se=!1;if(E){const Le=se.get(E);if(Le.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Le.__webglFramebuffer===void 0)_e.setupRenderTarget(E);else if(Le.__hasExternalTextures)_e.rebindTextures(E,se.get(E.texture).__webglTexture,se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const We=E.depthTexture;if(Le.__boundDepthTexture!==We){if(We!==null&&se.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(E)}}const Je=E.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Se=!0);const Qe=se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qe[z])?H=Qe[z][W]:H=Qe[z],de=!0):E.samples>0&&_e.useMultisampledRTT(E)===!1?H=se.get(E).__webglMultisampledFramebuffer:Array.isArray(Qe)?H=Qe[W]:H=Qe,C.copy(E.viewport),L.copy(E.scissor),k=E.scissorTest}else C.copy(Ce).multiplyScalar(G).floor(),L.copy(he).multiplyScalar(G).floor(),k=Ge;if(W!==0&&(H=Zf),Q.bindFramebuffer(I.FRAMEBUFFER,H)&&q&&Q.drawBuffers(E,H),Q.viewport(C),Q.scissor(L),Q.setScissorTest(k),de){const Le=se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,W)}else if(Se){const Le=z;for(let Je=0;Je<E.textures.length;Je++){const Qe=se.get(E.textures[Je]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Je,Qe.__webglTexture,W,Le)}}else if(E!==null&&W!==0){const Le=se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(E,z,W,q,H,de,Se,Ue=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){Q.bindFramebuffer(I.FRAMEBUFFER,Le);try{const Je=E.textures[Ue],Qe=Je.format,We=Je.type;if(!ne.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-q&&W>=0&&W<=E.height-H&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ue),I.readPixels(z,W,q,H,ze.convert(Qe),ze.convert(We),de))}finally{const Je=D!==null?se.get(D).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(E,z,W,q,H,de,Se,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le)if(z>=0&&z<=E.width-q&&W>=0&&W<=E.height-H){Q.bindFramebuffer(I.FRAMEBUFFER,Le);const Je=E.textures[Ue],Qe=Je.format,We=Je.type;if(!ne.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ue),I.readPixels(z,W,q,H,ze.convert(Qe),ze.convert(We),0);const Mt=D!==null?se.get(D).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,Mt);const Bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await im(I,Bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ht),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.deleteBuffer(ht),I.deleteSync(Bt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,W=0){const q=Math.pow(2,-W),H=Math.floor(E.image.width*q),de=Math.floor(E.image.height*q),Se=z!==null?z.x:0,Ue=z!==null?z.y:0;_e.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Se,Ue,H,de),Q.unbindTexture()};const Qf=I.createFramebuffer(),ep=I.createFramebuffer();this.copyTextureToTexture=function(E,z,W=null,q=null,H=0,de=null){de===null&&(H!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=H,H=0):de=0);let Se,Ue,Le,Je,Qe,We,ht,Mt,Bt;const Pt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(W!==null)Se=W.max.x-W.min.x,Ue=W.max.y-W.min.y,Le=W.isBox3?W.max.z-W.min.z:1,Je=W.min.x,Qe=W.min.y,We=W.isBox3?W.min.z:0;else{const On=Math.pow(2,-H);Se=Math.floor(Pt.width*On),Ue=Math.floor(Pt.height*On),E.isDataArrayTexture?Le=Pt.depth:E.isData3DTexture?Le=Math.floor(Pt.depth*On):Le=1,Je=0,Qe=0,We=0}q!==null?(ht=q.x,Mt=q.y,Bt=q.z):(ht=0,Mt=0,Bt=0);const Tt=ze.convert(z.format),Ye=ze.convert(z.type);let Lt;z.isData3DTexture?(_e.setTexture3D(z,0),Lt=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(_e.setTexture2DArray(z,0),Lt=I.TEXTURE_2D_ARRAY):(_e.setTexture2D(z,0),Lt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const xt=I.getParameter(I.UNPACK_ROW_LENGTH),Sn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ur=I.getParameter(I.UNPACK_SKIP_PIXELS),En=I.getParameter(I.UNPACK_SKIP_ROWS),Ps=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Dt=E.isDataArrayTexture||E.isData3DTexture,Nn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const On=se.get(E),dn=se.get(z),yn=se.get(On.__renderTarget),Za=se.get(dn.__renderTarget);Q.bindFramebuffer(I.READ_FRAMEBUFFER,yn.__webglFramebuffer),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,Za.__webglFramebuffer);for(let ur=0;ur<Le;ur++)Dt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,se.get(E).__webglTexture,H,We+ur),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,se.get(z).__webglTexture,de,Bt+ur)),I.blitFramebuffer(Je,Qe,Se,Ue,ht,Mt,Se,Ue,I.DEPTH_BUFFER_BIT,I.NEAREST);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||se.has(E)){const On=se.get(E),dn=se.get(z);Q.bindFramebuffer(I.READ_FRAMEBUFFER,Qf),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,ep);for(let yn=0;yn<Le;yn++)Dt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,On.__webglTexture,H,We+yn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,On.__webglTexture,H),Nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,de,Bt+yn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,de),H!==0?I.blitFramebuffer(Je,Qe,Se,Ue,ht,Mt,Se,Ue,I.COLOR_BUFFER_BIT,I.NEAREST):Nn?I.copyTexSubImage3D(Lt,de,ht,Mt,Bt+yn,Je,Qe,Se,Ue):I.copyTexSubImage2D(Lt,de,ht,Mt,Je,Qe,Se,Ue);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Nn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Lt,de,ht,Mt,Bt,Se,Ue,Le,Tt,Ye,Pt.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Lt,de,ht,Mt,Bt,Se,Ue,Le,Tt,Pt.data):I.texSubImage3D(Lt,de,ht,Mt,Bt,Se,Ue,Le,Tt,Ye,Pt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,de,ht,Mt,Se,Ue,Tt,Ye,Pt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,de,ht,Mt,Pt.width,Pt.height,Tt,Pt.data):I.texSubImage2D(I.TEXTURE_2D,de,ht,Mt,Se,Ue,Tt,Ye,Pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Sn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ur),I.pixelStorei(I.UNPACK_SKIP_ROWS,En),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ps),de===0&&z.generateMipmaps&&I.generateMipmap(Lt),Q.unbindTexture()},this.copyTextureToTexture3D=function(E,z,W=null,q=null,H=0){return rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,W,q,H)},this.initRenderTarget=function(E){se.get(E).__webglFramebuffer===void 0&&_e.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?_e.setTextureCube(E,0):E.isData3DTexture?_e.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?_e.setTexture2DArray(E,0):_e.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){A=0,P=0,D=null,Q.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}function Q_(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new en;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let p=0;p<n.length;++p){const f=n[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[p].attributes.position.count}c.setIndex(d)}for(const u in s){const d=Bd(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<d;++p){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][p]);const g=Bd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Bd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Bn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let p=0,f=u.count;p<f;p++)for(let g=0;g<t;g++){const x=u.getComponent(p,g);a.setComponent(p+d,g,x)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function ru(n,e=0){const t=new Ve,i=Object.fromEntries(Object.entries({skin:n.skin,hair:n.hair,shirt:n.color,pants:e%2?"#384b58":"#405646",boots:"#3f3431",white:"#fff6e6",eye:"#17222a",leather:"#965e48",straw:"#e7cb82"}).map(([f,g])=>[f,new or({color:g})])),r=new Mn(1,16,12),s=new Ht(1,1,1);function o(f,g,x,v,m){const S=new pe(g==="box"?s:r,i[x]);return S.scale.set(...v),S.position.set(...m),S.castShadow=!0,f.add(S),S}const a=new Ve;t.add(a),o(a,"sphere","shirt",[.34,.43,.24],[0,1.03,0]),o(a,"box","pants",[.48,.23,.33],[0,.66,0]),o(a,"sphere","skin",[.115,.17,.115],[0,1.39,0]);const c=new Ve;c.position.y=1.65,a.add(c),o(c,"sphere","skin",[.31,.33,.28],[0,0,0]);for(const f of[-1,1]){o(c,"sphere","skin",[.064,.1,.052],[f*.3,-.01,0]),o(c,"sphere","white",[.079,.092,.035],[f*.115,.035,.253]),o(c,"sphere","eye",[.036,.052,.019],[f*.106,.025,.286]),o(c,"sphere","white",[.014,.018,.008],[f*.106-.01,.044,.305]);const g=o(c,"sphere","hair",[.081,.018,.019],[f*.116,.145,.25]);g.rotation.z=f*-.1;const x=o(a,"box","white",[.13,.07,.08],[f*.095,1.35,.18]);x.rotation.z=f*.35}o(c,"sphere","skin",[.057,.065,.065],[0,-.04,.282]);const l=new eu([new U(-.085,-.13,.25),new U(0,-.162,.264),new U(.085,-.13,.25)]);c.add(new pe(new ka(l,8,.012,5,!1),i.eye)),o(c,"sphere","hair",[.32,.15,.28],[0,.23,-.028]);const u=o(c,"sphere","hair",[.19,.065,.06],[-.11,.18,.235]);if(u.rotation.z=-.2,n.accessory==="bun"&&(o(c,"sphere","hair",[.23,.23,.17],[0,.03,-.2]),o(c,"sphere","hair",[.17,.17,.17],[.18,.3,-.15])),n.accessory==="curls")for(let f=0;f<8;f++){const g=f*Math.PI/4;o(c,"sphere","hair",[.12,.13,.12],[Math.cos(g)*.26,.17+Math.sin(g)*.1,-.06+Math.sin(g)*.15])}if(n.accessory==="glasses"){for(const f of[-1,1]){const g=new pe(new jn(.092,.013,6,16),i.eye);g.position.set(f*.115,.035,.295),c.add(g)}o(c,"box","eye",[.065,.018,.025],[0,.045,.29])}if(["sunhat","cap"].includes(n.accessory)){const f=n.accessory==="sunhat"?i.straw:i.shirt,g=new pe(new pt(.4,.4,.035,24),f);g.position.set(0,.285,.04),c.add(g);const x=new pe(new pt(.235,.27,.18,20),f);x.position.y=.39,c.add(x);const v=new pe(new pt(.264,.272,.05,20),i.leather);v.position.y=.32,c.add(v)}for(let f=0;f<3;f++)o(a,"sphere","white",[.019,.019,.014],[0,1.2-f*.12,.24]);const d=[],p=[];for(const f of[-1,1]){const g=new Ve;g.position.set(f*.32,1.24,0),a.add(g),o(g,"sphere","shirt",[.12,.19,.125],[f*.03,-.1,0]),o(g,"sphere","skin",[.076,.2,.076],[f*.04,-.34,.02]),o(g,"sphere","skin",[.09,.095,.08],[f*.04,-.52,.025]),o(g,"sphere","skin",[.035,.055,.035],[f*-.02,-.5,.075]),g.rotation.z=f*.06,d.push(g);const x=new Ve;x.position.set(f*.15,.64,0),t.add(x),o(x,"sphere","pants",[.12,.25,.12],[0,-.21,0]),o(x,"sphere","boots",[.14,.1,.21],[0,-.52,.07]),o(x,"box","boots",[.25,.035,.34],[0,-.59,.055]),p.push(x)}if(["bun","glasses"].includes(n.accessory)){const f=o(a,"box","leather",[.07,.77,.045],[.03,1.05,.245]);f.rotation.z=-.65,o(a,"box","leather",[.25,.29,.15],[.3,.73,.13]),o(a,"box","straw",[.07,.045,.018],[.3,.76,.215])}return t.userData.rig={body:a,head:c,arms:d,legs:p},Gt(t),t}function Gt(n){const e=new Set;n.traverse(t=>{if(!t.isGroup)return;const i=new Map;t.children.filter(r=>r.isMesh).forEach(r=>{i.has(r.material)||i.set(r.material,[]),i.get(r.material).push(r)});for(const[r,s]of i){const o=s.map(d=>(d.updateMatrix(),d.geometry.clone().applyMatrix4(d.matrix))),a=o.some(d=>!d.index),c=o.map(d=>a&&d.index?d.toNonIndexed():d),l=Q_(c);if(new Set([...o,...c]).forEach(d=>d.dispose()),!l)continue;s.forEach(d=>{t.remove(d),e.add(d.geometry)});const u=new pe(l,r);u.castShadow=!0,u.receiveShadow=!0,t.add(u)}}),e.forEach(t=>t.dispose())}function ey(n,e,t){const i=-n/2,r=-e/2,s=new hs;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s}function zh(n=!1){const e=new Ve;e.name="Pip 3D character";const t=new Ve;e.add(t);const i=Z=>new or({color:Z}),r={green:i(8435256),darkGreen:i(2706464),leaf:i(10082368),seam:i(3430947),shirt:i(8632381),trim:i(11786593),hat:i(14660444),weave:i(12225340),leather:i(11039543),leatherDark:i(7358501),metal:i(12898502),orange:i(15439412),cream:new Vt({color:16774620}),visor:new Vt({color:2702392}),black:new Vt({color:859160}),white:new Vt({color:16776432}),tongue:new Vt({color:15173186})},s=(Z,we,Pe,I=[0,0,0])=>{const K=new pe(we,Pe);return K.position.set(...I),K.castShadow=!0,Z.add(K),K},o=(Z,we,Pe,I)=>{const K=s(Z,new Mn(1,16,12),we,I);return K.scale.set(...Pe),K},a=(Z,we,Pe,I,K=.09,j=.018)=>{const ne=new io(ey(Pe[0],Pe[1],K),{depth:Pe[2],bevelEnabled:!0,bevelSize:j,bevelThickness:j,bevelSegments:j>.02?4:2,steps:1,curveSegments:6});return ne.translate(0,0,-Pe[2]/2),s(Z,ne,we,I)},c=(Z,we,Pe,I,K,j)=>s(Z,new pt(Pe,I,K,20),we,j),l=(Z,we,Pe,I=.01)=>s(Z,new ka(new eu(Pe.map(K=>new U(...K))),8,I,5,!1),we),u=(Z,we,Pe=[0,0,0])=>{const I=new Ve;return I.name=we,I.position.set(...Pe),Z.add(I),I},d=s(e,new Oi(.48,24),new Vt({color:1059099,transparent:!0,opacity:.25,depthWrite:!1}),[0,.025,0]);d.rotation.x=-Math.PI/2,d.castShadow=!1;const p=o(t,r.shirt,[.38,.37,.275],[0,.86,0]),f=c(t,r.darkGreen,.32,.3,.08,[0,.59,0]);f.scale.z=.81,c(t,r.darkGreen,.145,.17,.12,[0,1.16,0]);const g=u(t,"farmer growing suit");a(g,r.green,[.49,.39,.025],[0,.86,.263]);for(const Z of[-1,1])l(g,r.darkGreen,[[Z*.26,1.11,.12],[Z*.29,1.02,.19],[Z*.29,.75,.2]],.021);const x=u(t,"Pip back suit panel");a(x,r.shirt,[.43,.36,.035],[0,.88,-.26]);for(const Z of[-1,1])l(x,r.darkGreen,[[Z*.26,1.08,-.17],[Z*.26,.84,-.215],[Z*.18,.66,-.21]],.014);const v=u(t,"Pro Pip polo collar");for(const Z of[-1,1]){const we=a(v,r.shirt,[.15,.12,.03],[Z*.1,1.11,.21],.02);we.rotation.z=Z*.45,l(v,r.trim,[[Z*.045,1.16,.247],[Z*.115,1.065,.25],[Z*.18,1.12,.24]],.008)}const m=u(t,"HydroPip shirt emblem");for(const Z of[-1,1]){const we=o(m,r.darkGreen,[.038,.088,.013],[Z*.053,.91,.307]);we.rotation.z=Z*-.58}l(m,r.darkGreen,[[0,.9,.31],[0,.78,.31]],.012),o(m,r.darkGreen,[.08,.022,.012],[0,.77,.31]);const S=u(t,"Pro HydroPip chest logo",[.16,.91,.27]),y=document.createElement("canvas");y.width=256,y.height=128;const _=y.getContext("2d");_.fillStyle="#aad94c",_.beginPath(),_.ellipse(107,35,24,12,.7,0,Math.PI*2),_.ellipse(148,35,24,12,-.7,0,Math.PI*2),_.fill(),_.fillRect(124,35,7,33),_.fillStyle="#fff7df",_.font="bold 34px sans-serif",_.textAlign="center",_.fillText("HYDROPIP",128,108);const R=new Jl(y);R.colorSpace=Qt,s(S,new Ln(.29,.145),new Vt({map:R,transparent:!0,depthWrite:!1}));const A=u(t,"Pip head",[0,1.51,0]);A.rotation.x=-.1,a(A,r.darkGreen,[.93,.75,.34],[0,0,-.025],.23,.065),a(A,r.green,[.9,.72,.34],[0,.005,0],.22,.065);const P=a(A,r.cream,[.87,.71,.035],[0,-.015,.275],.23),D=a(A,r.black,[.76,.52,.02],[0,.047,.315],.17);a(A,r.visor,[.71,.475,.016],[0,.05,.345],.155);const b=[];for(const Z of[-1,1]){const we=u(A,`${Z<0?"left":"right"} expressive eye`,[Z*.17,.054,.379]);o(we,r.white,[.083,.112,.012],[0,0,0]),o(we,r.black,[.062,.09,.012],[.004,-.004,.015]),o(we,r.white,[.025,.032,.008],[.027,.046,.029]),b.push(we)}const w=new hs;w.moveTo(-.115,.036),w.quadraticCurveTo(0,.005,.115,.036),w.bezierCurveTo(.135,-.045,.065,-.116,0,-.115),w.bezierCurveTo(-.065,-.116,-.135,-.045,-.115,.036);const C=u(A,"Pip open smile",[0,-.178,.387]);s(C,new tu(w,12),r.black),o(C,r.tongue,[.055,.025,.004],[0,-.077,.005]);const L=[];for(const Z of[-1,1]){const we=u(A,"green ear piece",[Z*.51,-.012,-.005]);we.rotation.z=Math.PI/2,c(we,r.darkGreen,.174,.174,.09,[0,0,0]),c(we,r.leaf,.145,.145,.115,[0,-Z*.025,0]),c(we,r.green,.11,.11,.13,[0,-Z*.035,0]),L.push(we)}const k=u(t,"Pip brimmed hat",[0,1.93,-.005]),O=c(k,r.hat,.63,.61,.06,[0,0,0]);O.scale.z=.83,c(k,r.hat,.32,.405,.26,[0,.145,-.025]),c(k,r.darkGreen,.39,.408,.059,[0,.06,-.025]);const B=u(k,"straw hat weave");for(const Z of[.44,.51,.58]){const we=s(B,new jn(Z,.006,4,32),r.weave,[0,.034,0]);we.rotation.x=Math.PI/2,we.scale.y=.83}for(const Z of[.12,.18,.24]){const we=s(B,new jn(.405-(Z-.015)*.327,.005,4,32),r.weave,[0,Z,-.025]);we.rotation.x=Math.PI/2}const F=[],Y=new hs;Y.moveTo(0,0),Y.bezierCurveTo(.04,.23,.29,.34,.52,.26),Y.bezierCurveTo(.45,.025,.18,-.1,0,0);for(const Z of[-1,1]){const we=u(t,"veined leaf ear",[Z*.31,2.08,-.055]);we.scale.x=Z,s(we,new io(Y,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:6}),r.leaf),l(we,r.darkGreen,[[.015,.008,.05],[.21,.105,.05],[.46,.245,.05]],.012);for(const[Pe,I]of[[.13,.066],[.26,.136]])l(we,r.green,[[Pe,I,.05],[Pe+.012,I+.085,.05]],.006),l(we,r.green,[[Pe,I,.05],[Pe+.105,I-.018,.05]],.006);F.push(we)}const G=[],re=[],ae=[],Ce=[],he=[],Ge=[],et=[];for(const Z of[-1,1]){const we=u(t,"Pip shoulder",[Z*.38,1.045,0]);we.rotation.z=Z*.08,o(we,r.darkGreen,[.132,.13,.13],[0,-.065,0]);const Pe=s(we,new Qr(.117,.1,4,12),r.shirt,[0,-.105,0]);c(we,r.trim,.119,.119,.03,[0,-.18,0]);const I=u(we,"Pip elbow",[0,-.24,0]);o(I,r.darkGreen,[.085,.08,.085],[0,.005,0]),s(I,new Qr(.089,.1,4,10),r.green,[0,-.105,0]),c(I,r.darkGreen,.088,.088,.035,[0,-.18,0]);const K=u(I,"Pip rounded glove",[0,-.235,.025]);o(K,r.green,[.104,.111,.094],[0,0,0]),o(K,r.leaf,[.041,.063,.047],[-Z*.078,.012,.06]);const j=u(t,"Pip hip",[Z*.17,.52,0]);s(j,new Qr(.115,.1,4,10),r.green,[0,-.095,0]);const ne=u(j,"Pip knee",[0,-.22,0]);o(ne,r.darkGreen,[.108,.075,.1],[0,0,0]),s(ne,new Qr(.1,.085,4,10),r.green,[0,-.072,0]);const Q=u(ne,"Pip work boot",[0,-.19,0]);o(Q,r.darkGreen,[.15,.055,.207],[0,-.021,.061]),o(Q,r.green,[.139,.1,.189],[0,.025,.059]),o(Q,r.leaf,[.1,.038,.089],[0,.092,.104]),G.push(we),ae.push(I),he.push(K),et.push(Pe),re.push(j),Ce.push(ne),Ge.push(Q)}const $=u(t,"Pro Pip tool belt"),ve=c($,r.leatherDark,.357,.35,.1,[0,.62,0]);ve.scale.z=.83,a($,r.metal,[.115,.105,.025],[0,.62,.31],.025),a($,r.leather,[.074,.067,.028],[0,.62,.33],.01);for(const Z of[-1,1])a($,r.leatherDark,[.19,.23,.105],[Z*.255,.52,.245],.025),a($,r.leather,[.16,.17,.035],[Z*.255,.49,.307],.025),o($,r.metal,[.016,.016,.012],[Z*.255,.55,.33]);a($,r.metal,[.038,.24,.025],[.28,.73,.255],.01);const ue=s($,new jn(.058,.018,6,16,Math.PI*1.55),r.metal,[.28,.855,.255]);ue.rotation.z=Math.PI*.73,a($,r.orange,[.043,.14,.035],[-.27,.76,.24],.018),a($,r.metal,[.018,.085,.018],[-.27,.66,.24],.007),A.updateMatrixWorld(!0);const Be=A.matrixWorld.clone().invert(),Ie=[];A.traverse(Z=>{Z.isMesh&&Ie.push(Z)});for(const Z of Ie){const we=Be.clone().multiply(Z.matrixWorld);A.add(Z),we.decompose(Z.position,Z.quaternion,Z.scale)}return t.traverse(Z=>{if(!Z.geometry?.index)return;const we=Z.geometry;Z.geometry=we.toNonIndexed(),we.dispose()}),Gt(t),e.userData.parts={body:t,torso:p,head:A,faceShell:P,visor:D,arms:G,legs:re,elbows:ae,knees:Ce,hands:he,boots:Ge,eyes:b,mouth:C,leafEars:F,headsetCups:L,belt:$,hat:k,farmerSuit:g,proCollar:v,proLogo:S,emblem:m,backPanel:x,strawWeave:B,materials:r,sleeves:et,waistBand:f,shadow:d},e.userData.actionId="pip",e.scale.setScalar(1.04),ty(e,n),e}function ty(n,e){const t=n.userData.parts;t.materials.shirt.color.setHex(e?2503212:8632381),t.materials.hat.color.setHex(e?2503212:14660444),t.farmerSuit.visible=!e,t.emblem.visible=!e,t.strawWeave.visible=!e,t.proCollar.visible=e,t.proLogo.visible=e,t.belt.visible=e,n.userData.pro=e}const zd=["post","produce","tractor","pond-birds","duck-crossing"];function ny(n=Math.random){let e=null,t=0,i=8+n()*8,r=null;const s={post:26,produce:19,tractor:27,"pond-birds":22,"duck-crossing":30},o=()=>({active:e,elapsed:t,wait:i,duration:s[e]||0});function a(c){return zd.includes(c)?(e=c,r=c,t=0,!0):!1}return{snapshot:o,start:a,update(c,{marketBuilt:l=!1,reducedMotion:u=!1}={}){if(u)return o();const d=Math.max(0,Math.min(.1,c));if(e)t+=d,t>=s[e]&&(e=null,t=0,i=14+n()*22);else if(i-=d,i<=0){const p=zd.filter(f=>f!==r&&(f!=="produce"||l));a(p[Math.min(p.length-1,Math.floor(n()*p.length))])}return o()}}}function iy(){const n=new Ve;n.name="living neighborhood";const e=new Ve,t=new Ve;n.add(e,t);const r=Object.fromEntries(Object.entries({wood:8808268,dark:3427653,stone:10070429,grass:7443032,leaf:4489565,cream:15919049,white:15463391,water:6469573,red:13921888,gold:15713102,blue:6530482}).map(([L,k])=>[L,new or({color:k})])),s=(L,k,O,B)=>{const F=new pe(new Ht(...O),k);return F.position.set(...B),L.add(F),F},o=(L,k,O,B)=>{const F=new pe(new vo(1,1),k);return F.scale.set(...O),F.position.set(...B),L.add(F),F},a=(L,k,O)=>{const B=new pe(new Oi(1,40),O);return B.rotation.x=-Math.PI/2,B.scale.set(...L),B.position.set(...k),e.add(B),B};a([3.5,2.6,1],[-20,-.02,4.8],r.stone),a([3.15,2.24,1],[-20,.01,4.8],r.water);for(let L=0;L<8;L++){const k=L*2.4,O=-20+Math.cos(k)*2.8,B=4.8+Math.sin(k)*2;L<4&&(a([.26,.21,1],[O,.025,B],r.leaf),o(e,r.cream,[.08,.04,.08],[O,.05,B]));for(let F=0;F<3;F++)s(e,r.grass,[.035,.5+F*.12,.035],[O+F*.12,.25+F*.06,B]),o(e,r.wood,[.065,.13,.065],[O+F*.12,.56+F*.12,B])}for(let L=0;L<5;L++){const k=19+L%2*3,O=-4+Math.floor(L/2)*4;s(e,r.wood,[.19,1.65,.19],[k,.65,O]),o(e,r.leaf,[1.2,1.05,1.15],[k,1.85,O]);for(let B=0;B<5;B++)o(e,r.red,[.14,.14,.14],[k+Math.sin(B*2)*.91,1.9+Math.cos(B)*.42,O+Math.cos(B*2)*.91]);s(e,r.wood,[.7,.3,.55],[k+.75,.15,O+.8])}const c=L=>{const k=Math.sin(L*127.1+48.7)*43758.5453;return k-Math.floor(k)};for(let L=0;L<110;L++){const k=L%3,O=k===0?-25+c(L)*7:k===1?17+c(L)*8:-15+c(L)*22,B=k===2?11+c(L+8)*4:-7+c(L+8)*17;if(((O+20)/3.8)**2+((B-4.8)/3)**2<1)continue;const F=.12+c(L+4)*.2;if(o(e,L%5?r.grass:r.stone,[.22,F,.26],[O,F/2,B]),L%3)for(let Y=0;Y<3;Y++)o(e,L%2?r.gold:r.white,[.055,.05,.055],[O+(Y-1)*.13,F+.08,B+Math.sin(Y)*.1])}for(let L=0;L<14;L++){const k=-25+L*3.8;o(e,r.leaf,[.9,.45,.55],[k,.22,-15.6]),L%3===0&&s(e,r.wood,[.11,.8,.11],[k,.3,-14.4])}s(e,r.stone,[1.1,.04,3],[-19,-.08,-15]),s(e,r.wood,[.14,1.25,.14],[8,.58,-10.1]),s(e,r.blue,[.65,.43,.43],[8,1.2,-10.1]),s(e,r.cream,[.04,.25,.29],[8.34,1.18,-10.1]);const l=new Ve;l.position.set(8,1.2,-9.85),n.add(l),s(l,r.red,[.08,.38,.035],[0,.16,0]),s(l,r.red,[.22,.14,.035],[.07,.32,0]),s(e,r.wood,[1.5,.12,.5],[-17.2,.42,8.2]);for(const L of[-17.7,-16.7])s(e,r.dark,[.12,.42,.4],[L,.17,8.2]);s(e,r.wood,[1.5,.32,.08],[-17.2,.72,8.4]),e.traverse(L=>{L.isMesh&&(L.castShadow=!0,L.receiveShadow=!0)}),Gt(e),Gt(l);function u(L,k=!1){const O=new Ve;t.add(O),s(O,r[L],[k?1.5:2.6,.6,1.1],[0,.61,0]),s(O,r[L],[1.1,.55,1],[-.2,1.13,0]),s(O,r.blue,[.8,.32,1.03],[-.2,1.16,0]),s(O,r.dark,[.025,.37,1.04],[-.19,1.16,0]),s(O,r.cream,[.1,.16,.85],[k?.78:1.33,.62,0]);const B=[];for(const Y of[-.85,.85])for(const G of[-.58,.58]){const re=k&&Y<0?.45:.3,ae=new pe(new pt(re,re,.19,12),r.dark);ae.rotation.x=Math.PI/2,ae.position.set(Y,re-.1,G),O.add(ae);const Ce=new pe(new pt(re*.48,re*.48,.2,8),r.cream);ae.add(Ce),B.push(ae)}const F=new Ve;return O.children.filter(Y=>!B.includes(Y)).forEach(Y=>F.add(Y)),O.add(F),Gt(F),O.visible=!1,{group:O,wheels:B}}const d=u("blue"),p=u("red"),f=u("gold"),g=u("leaf",!0);s(d.group,r.cream,[.75,.32,.03],[-.76,.7,.565]);const x=new Ve;g.group.add(x),s(x,r.wood,[1.65,.2,1.15],[-2.5,.37,0]),s(x,r.dark,[1.3,.1,.1],[-1.5,.32,0]);for(const L of[-.55,.55])o(x,r.dark,[.3,.3,.15],[-2.55,.2,L]);const v=new Ve;g.group.add(v);for(let L=0;L<3;L++)s(v,r.gold,[.7,.45,.83],[-2.9+L%2*.75,.7+(L===2?.46:0),0]),s(v,r.wood,[.07,.46,.85],[-2.9+L%2*.75,.7+(L===2?.46:0),0]);Gt(x),Gt(v);const m=new Ve;p.group.add(m),s(m,r.wood,[.8,.35,.9],[-.9,.95,0]);for(let L=0;L<5;L++)o(m,r.leaf,[.16,.18,.16],[-1.1+L%2*.3,1.17,-.3+Math.floor(L/2)*.28]);Gt(m);function S(L=!1){const k=new Ve;t.add(k),o(k,L?r.cream:r.blue,[.21,.18,.32],[0,.25,0]),o(k,L?r.leaf:r.dark,[.13,.14,.14],[0,.43,.21]),s(k,r.gold,[.12,.045,.18],[0,.4,.36]);for(const B of[-1,1])o(k,r.dark,[.019,.025,.024],[B*.11,.47,.28]),s(k,r.gold,[.08,.04,.17],[B*.1,.04,.02]);Gt(k);const O=[];for(const B of[-1,1]){const F=new Ve;F.position.set(B*.15,.3,0),k.add(F),o(F,L?r.cream:r.blue,[.28,.035,.13],[B*.2,0,0]),O.push(F)}return k.visible=!1,{group:k,wings:O}}const y=Array.from({length:3},()=>S()),_=Array.from({length:4},(L,k)=>{const O=S(!0);return O.group.scale.setScalar(k?.58:1),O});t.traverse(L=>{L.isMesh&&(L.castShadow=!0,L.receiveShadow=!0)});const R=ny(),A={post:d,produce:p,tractor:g,"duck-crossing":f},P=It.lerp,D=It.clamp;let b=R.snapshot(),w=!1;function C(){for(const B of Object.values(A))B.group.visible=!1;if([...y,..._].forEach(B=>{B.group.visible=!1}),l.rotation.z=-.9,w||!b.active)return;const L=b.elapsed,k=b.active,O=A[k];if(O){O.group.visible=!0,O.group.rotation.y=k==="produce"?Math.PI:0;let B;k==="post"?B=L<11?P(-38,8,L/11):L<15?8:P(8,38,(L-15)/11):k==="duck-crossing"?B=L<6?P(-38,-20.5,L/6):L<17?-20.5:P(-20.5,38,(L-17)/13):B=P(k==="produce"?38:-38,k==="produce"?-38:38,L/b.duration),O.group.position.set(B,.08,-12.2);const F=k==="post"&&L>=11&&L<15||k==="duck-crossing"&&L>=6&&L<17;O.wheels.forEach(Y=>{Y.rotation.y=F?0:-B*3}),k==="post"&&L>12&&L<16&&(l.rotation.z=0),v.rotation.x=k==="tractor"?Math.sin(L*2.6)*.04:0}k==="pond-birds"&&y.forEach((B,F)=>{B.group.visible=!0;const Y=D((L-F*.4)/5,0,1),G=D((L-15-F*.4)/5,0,1);B.group.position.set(P(-29,-20+F*.65,Y)+G*-10,P(4.5,.13,Y)+G*5,P(-5,3.2,Y)+G*4),B.group.rotation.set(Y===1&&G===0?Math.max(0,Math.sin(L*2+F))*.38:0,G?-1.5:.7,0),B.wings.forEach((re,ae)=>{re.rotation.z=(ae?1:-1)*(Y<1||G>0?Math.sin(L*13+F)*.7:1.1)})}),k==="duck-crossing"&&_.forEach((B,F)=>{const Y=D((L-4-F*(F===3?1.5:.6))/(F===3?6.5:9),0,1);B.group.visible=L>4+F*(F===3?1.5:.6)&&Y<1,B.group.position.set(-17.8+Math.sin(Y*Math.PI)*.2,.07+Math.abs(Math.sin(L*(F===3?15:9)))*.035,P(-15.5,-8.4,Y)),B.wings.forEach((G,re)=>{G.rotation.z=re?1.2:-1.2})})}return{root:n,update(L,k){w=k.reducedMotion,b=R.update(L,k),C()},snapshot(){return{...b,sceneryMeshes:e.children.length,visibleActors:t.children.filter(L=>L.visible).map(L=>L.position.toArray()),totalActors:t.children.length,reducedMotion:w}},start(L){const k=R.start(L);return b=R.snapshot(),C(),k}}}const xo=["lettuce","basil","tomato","kale","strawberry"],Hh=[6,18,40],Vh=["Grower","Living Soil","Neighborhood"],je=(n,e,t,i=null)=>({kind:n,target:e,label:t,crop:i}),Zt=(n,e,t,i,r,s)=>({id:n,path:e,chapter:t,title:i,focus:r,goals:s,coins:18,xp:15}),ir=[Zt("roots",0,0,"Rooted in the garden","tower-0",[je("transplant",6,"Transplant tower starters"),je("harvest",4,"Harvest soil-finished crops")]),Zt("layer-craft",0,1,"A tower of many colors","tower-0",[je("mixed",1,"Fill one tower with four different crops"),je("variety",4,"Harvest different crop varieties")]),Zt("right-flow",0,1,"One batch, every tower","reservoir",[je("matched",8,"Plant starts after checking shared delivery"),je("harvest",6,"Harvest garden crops")]),Zt("fruit-garden",0,2,"The fruit garden","bed-0",[je("harvest",8,"Harvest tomatoes","tomato"),je("harvest",8,"Harvest strawberries","strawberry")]),Zt("succession",0,2,"Succession without a gap","tower-0",[je("transplant",18,"Start the next garden succession"),je("variety",5,"Harvest all five crops")]),Zt("grower-showcase",0,2,"The HydroPip showcase","bed-0",[je("matched",16,"Plant starts with shared delivery checked"),je("harvest",24,"Finish crops in soil"),je("variety",5,"Include every crop")]),Zt("scraps",1,0,"Nothing goes to waste","workshop",[je("compost",2,"Start compost batches"),je("enrich",1,"Enrich a garden bed")]),Zt("happy-hens",1,1,"Hens at home","workshop",[je("feed",3,"Feed the hens stored vegetables"),je("eggs",3,"Collect egg batches")]),Zt("gentle-water",1,1,"Make every drop count","reservoir",[je("saving",10,"Plant after checking the timed feed"),je("enrich",2,"Enrich garden beds")]),Zt("living-soil",1,1,"Living soil","composter",[je("compost",4,"Start compost batches"),je("enriched",12,"Transplant into enriched soil")]),Zt("closed-loop",1,2,"From harvest to compost","coop",[je("feed",5,"Feed the hens"),je("enrich",4,"Return compost to garden beds"),je("harvest",18,"Harvest fresh crops")]),Zt("soil-showcase",1,2,"Sustainable homestead","composter",[je("saving",18,"Plant starts with the timed feed checked"),je("enriched",20,"Grow in enriched soil"),je("eggs",5,"Collect egg batches")]),Zt("neighbors",2,0,"Your neighborhood regulars","market",[je("order",5,"Complete market orders"),je("variety",2,"Harvest different crops")]),Zt("salad-club",2,1,"The neighborhood salad club","market",[je("order",4,"Serve lettuce orders","lettuce"),je("order",4,"Serve basil orders","basil")]),Zt("request-route",2,1,"Pip's request route","market",[je("request",3,"Complete chosen requests"),je("order",6,"Serve market customers")]),Zt("weekend-market",2,2,"The weekend market","market",[je("order",5,"Serve tomato orders","tomato"),je("order",5,"Serve kale orders","kale"),je("egg-sale",2,"Sell packed eggs at the stand")]),Zt("community-table",2,2,"A table for everyone","market",[je("request",5,"Complete chosen requests"),je("variety",5,"Harvest every crop"),je("order",10,"Serve market orders")]),Zt("harvest-festival",2,2,"The homestead harvest festival","market",[je("order",18,"Welcome market customers"),je("request",5,"Complete community requests"),je("egg-sale",4,"Bring fresh eggs to market")])],Fa=[{id:"greens",title:"Mara's fresh greens",detail:"Harvest 6 lettuce for this growing request.",focus:"bed-0",goals:[je("harvest",6,"Lettuce harvested","lettuce")],crops:["lettuce"]},{id:"herbs",title:"June's herb patch",detail:"Raise 5 basil through the towers and garden.",focus:"bed-0",goals:[je("harvest",5,"Basil harvested","basil")],crops:["basil"]},{id:"mixed",title:"Theo's mixed harvest",detail:"Harvest three different crops from the garden.",focus:"bed-0",goals:[je("variety",3,"Different crops harvested")],crops:["tomato","basil"]},{id:"flow",title:"Pip's water-wise trial",detail:"Check shared tower delivery, then plant 8 starts.",focus:"reservoir",goals:[je("saving",8,"Starts with delivery checked")],chapter:1,crops:[]},{id:"market",title:"Luis's market morning",detail:"Complete 5 customer orders at the stand.",focus:"market",goals:[je("order",5,"Market orders served")],crops:[]},{id:"soil",title:"June's soil trial",detail:"Transplant 6 tower starters into compost-enriched beds.",focus:"composter",goals:[je("enriched",6,"Enriched transplants")],equipment:"composter",crops:[]},{id:"berries",title:"Mara's berry harvest",detail:"Harvest 6 strawberries from finished garden plants.",focus:"bed-0",goals:[je("harvest",6,"Strawberries harvested","strawberry")],crops:["strawberry"]},{id:"hens",title:"Theo's happy hens",detail:"Feed and collect two batches of eggs.",focus:"coop",goals:[je("feed",2,"Hen feedings"),je("eggs",2,"Egg batches collected")],equipment:"coop",crops:[]}],la=(n,e=99999)=>Number.isFinite(Number(n))?Math.max(0,Math.min(e,Math.floor(Number(n)))):0;function Gh(){return{claimed:[],progress:{},mastery:{},request:null,requestSerial:0,requestsCompleted:0,pinned:"roots"}}const Hd=(n,e)=>e.map((t,i)=>t.kind==="variety"?[...new Set((Array.isArray(n?.[i])?n[i]:[]).filter(r=>xo.includes(r)))]:la(n?.[i],t.target));function ry(n){const e=Gh();e.claimed=[...new Set((Array.isArray(n?.claimed)?n.claimed:[]).filter(i=>ir.some(r=>r.id===i)))];for(const i of ir)e.progress[i.id]=Hd(n?.progress?.[i.id],i.goals);for(const i of xo)e.mastery[i]=la(n?.mastery?.[i],3);e.requestSerial=la(n?.requestSerial,999999),e.requestsCompleted=la(n?.requestsCompleted),e.pinned=ir.some(i=>i.id===n?.pinned)?n.pinned:"roots";const t=Fa.find(i=>i.id===n?.request?.id);return t&&(e.request={id:t.id,progress:Hd(n.request.progress,t.goals)}),e}function Jn(n){return Vh.map((e,t)=>ir.find(i=>i.path===t&&!n.homestead.claimed.includes(i.id))).filter(Boolean)}function su(n,e){return n.market.built&&n.chapter>=e.chapter&&Jn(n).includes(e)}function ou(n,e=[]){return n.map((t,i)=>({...t,current:Math.min(t.target,t.kind==="variety"?(e[i]||[]).length:e[i]||0)}))}function _o(n,e){return ou(e.goals,n.homestead.progress[e.id])}function Ba(n,e){return su(n,e)&&_o(n,e).every(t=>t.current>=t.target)}function Vd(n,e,t,i){n.forEach((r,s)=>{r.kind==="variety"&&t==="harvest"&&xo.includes(i)?e[s]=[...new Set([...e[s]||[],i])]:r.kind===t&&(!r.crop||r.crop===i)&&(e[s]=Math.min(r.target,(e[s]||0)+1))})}function Di(n,e,t=null){if(!n.market.built)return;for(const r of Jn(n))if(su(n,r)){const s=n.homestead.progress[r.id]||=[];Vd(r.goals,s,e,t)}const i=Fa.find(r=>r.id===n.homestead.request?.id);i&&Vd(i.goals,n.homestead.request.progress,e,t)}function sy(n,e){const t=ir.find(i=>i.id===e);return!t||!Ba(n,t)?!1:(n.homestead.claimed.push(e),n.coins+=t.coins,n.xp+=t.xp,n.homestead.pinned=Jn(n).find(i=>i.path===t.path)?.id||Jn(n)[0]?.id||null,!0)}function Ot(n){const e=n.homestead?.claimed.length||0;return{basket:e>=3?7:5,seedBatch:e>=6?6:4,water:e>=12?.9:1,festival:e>=18}}function za(n,e){return n.homestead?.mastery?.[e]||0}function oy(n,e){if(!xo.includes(e)||!n.market.built)return!1;const t=za(n,e);return t>=3||n.stats.byCropHarvested[e]<Hh[t]?!1:(n.homestead.mastery[e]=t+1,n.coins+=[8,12,20][t],n.xp+=10,n.seeds[e]=Math.min(999,n.seeds[e]+2),!0)}function Wh(n){const e=Fa.filter(i=>n.market.built&&n.chapter>=(i.chapter||0)&&i.crops.every(r=>n.unlockedCrops.includes(r))&&(!i.equipment||n.farm.owned.includes(i.equipment))),t=n.homestead.requestSerial%(e.length||1);return Array.from({length:Math.min(3,e.length)},(i,r)=>e[(t+r)%e.length])}function $h(n){return Fa.find(e=>e.id===n.homestead.request?.id)||null}function ay(n,e){return n.homestead.request||!Wh(n).some(t=>t.id===e)?!1:(n.homestead.request={id:e,progress:[]},!0)}function cy(n){const e=$h(n);return!e||!ou(e.goals,n.homestead.request.progress).every(t=>t.current>=t.target)?!1:(n.homestead.request=null,n.homestead.requestSerial++,n.homestead.requestsCompleted++,n.coins+=12,n.xp+=8,Di(n,"request"),!0)}function ly(n){return n.homestead.request?!1:(n.homestead.requestSerial++,!0)}function Mr(n){return n.campaignComplete&&n.homestead.claimed.length===18&&xo.every(e=>za(n,e)===3)}const qh=[{label:"Produce table",cost:40,towers:1,detail:"A small roadside table for your first garden harvests."},{label:"Shade canopy",cost:30,towers:2,detail:"Add shade and a second produce crate."},{label:"Neighborhood stand",cost:45,towers:3,detail:"Build a wider counter, shelves, and space for two visitors."},{label:"Farm market",cost:65,towers:4,detail:"Finish the striped awning and family-basket display. Up to three visitors."}],Ha=n=>n.towers.filter(e=>e.built&&e.repaired).length;function ws(n){return n.market.built?n.market.level>=2?4:Math.max(1,Math.min(4,n.market.stage||3)):0}function Gi(n){const e=ws(n),t=qh[e];if(!t)return null;const i=!e&&n.taskIndex<3?"Finish the first garden harvests":Ha(n)<t.towers?`Requires ${t.towers} working towers`:"";return{...t,stage:e+1,reason:i,available:!i&&n.coins>=t.cost}}function Xh(n){const e=Gi(n);return e?.available?(n.coins-=e.cost,n.market.built=!0,n.market.stage=e.stage,n.market.level=e.stage===4?2:1,!0):!1}function Cn(n,e,t=0){const i=e==="bed"?Math.max(2,n.beds[t].capacity):2;return Ha(n)<i?`Requires ${i} working towers`:""}const au=n=>Math.max(1,ws(n)-1),ua=(n,e,t)=>n+Math.floor(t()*(e-n+1));function uy(n,e=Math.random){const t=n.unlockedCrops;let i=(n.market.cropBag||[]).filter(s=>t.includes(s));if(!i.length){i=[...t];for(let s=i.length-1;s>0;s--){const o=ua(0,s,e);[i[s],i[o]]=[i[o],i[s]]}}const r=i.shift();return n.market.cropBag=i,r}function dy(n,e,t,i=Math.random){if(!n.market.built)return!1;const r=au(n),s=n.market;return n.orders.length>=r||n.orders.length&&!s.visitRemaining||(s.nextVisitIn=Math.max(0,(s.nextVisitIn??8)-e),s.nextVisitIn>0)?!1:(s.visitRemaining||(s.visitRemaining=ua(1,r,i)),n.orders.push(t(n.orders.length)),s.visitRemaining--,s.nextVisitIn=s.visitRemaining?ua(5,10,i):ua(12,28,i),!0)}const hy=[{name:"Mara",color:"#df695c",skin:"#d9a47d",hair:"#453027",accessory:"sunhat",line:"Fresh greens for the block."},{name:"Theo",color:"#4398b1",skin:"#8c5d43",hair:"#242c30",accessory:"glasses",line:"A quick stop on the way home."},{name:"June",color:"#e5b84c",skin:"#e6b58b",hair:"#745239",accessory:"bun",line:"Produce for the neighborhood table."},{name:"Nia",color:"#78a967",skin:"#6f4937",hair:"#211e24",accessory:"curls",line:"The garden finish makes the difference."},{name:"Sam",color:"#ba7198",skin:"#c78968",hair:"#b9b7af",accessory:"glasses",line:"Looking for today's best crop."},{name:"Luis",color:"#6a87bf",skin:"#a46e4d",hair:"#39322a",accessory:"cap",line:"A market basket for dinner."}];function Dn(n){return n.orders.find(e=>e.id===n.selectedOrderId&&e.status==="waiting")||null}function xn(n,e,t=Date.now()){const i=n.carry?.kind==="produce"?n.carry.items:[],r=i.filter(d=>d===e.crop).length,s=n.rack[e.crop]||0,o=n.beds.flatMap(d=>d.plants).filter(d=>d.crop===e.crop),a=o.filter(d=>d.readyAt<=t).length,c=o.length-a+n.towers.flatMap(d=>d.queue).filter(d=>d.crop===e.crop).length+(n.carry?.kind==="starter"&&n.carry.crop===e.crop?1:0),l=Math.max(0,e.amount-r),u=n.carry?.kind==="starter"?0:Ot(n).basket-i.length;return{carried:r,stored:s,ready:a,growing:c,needed:l,room:u,load:Math.min(l,s,u),missing:Math.max(0,l-s-a-c)}}function Tl(n,e){const t=xn(n,e);return n.carry?.kind==="starter"?{kind:"starter",label:"Plant starter",stock:t}:t.needed?t.room?t.load?{kind:"collect",label:`Collect ${t.load}`,stock:t}:t.ready?{kind:"harvest",label:"Harvest needed",stock:t}:{kind:"grow",label:t.missing?"Grow needed":"View growing",stock:t}:{kind:"store",label:"Make room",stock:t}:{kind:"deliver",label:"Deliver",stock:t}}function Yt(n,e){if(n._markup===e)return;n._markup=e;const t=document.createElement("template");t.innerHTML=e;const i=s=>s.nodeType===1&&(s.getAttribute("data-key")||s.id||s.getAttribute("data-command"))||"";function r(s,o){const a=[...s.childNodes],c=new Set;[...o.childNodes].forEach((l,u)=>{const d=i(l),p=a.find(g=>!c.has(g)&&g.nodeType===l.nodeType&&g.nodeName===l.nodeName&&(d?i(g)===d:!i(g))),f=p||l.cloneNode(!0);if(c.add(f),s.childNodes[u]!==f&&s.insertBefore(f,s.childNodes[u]||null),!!p){if(f.nodeType===3){f.nodeValue!==l.nodeValue&&(f.nodeValue=l.nodeValue);return}if(f.nodeType===1){for(const g of[...f.attributes])l.hasAttribute(g.name)||f.removeAttribute(g.name);for(const g of[...l.attributes])f.getAttribute(g.name)!==g.value&&f.setAttribute(g.name,g.value);r(f,l)}}});for(const l of a)c.has(l)||l.remove()}r(n,t.content)}function fy(n,e,t){let i="projects";const r=o=>`<ul class="homestead-goals">${o.map(a=>`<li><span>${a.label}</span><strong>${a.current}/${a.target}</strong><progress max="${a.target}" value="${a.current}"></progress></li>`).join("")}</ul>`;function s(o){const a=o.homestead,c=Mr(o),l=a.claimed.length;let u;if(i==="projects")u=`<p class="homestead-summary">${l}/18 projects / ${Object.values(a.mastery).reduce((d,p)=>d+p,0)}/15 crop badges</p><p>${c?"Master Grower homestead complete. Community requests continue.":"A growing homestead, one useful project at a time."}</p>`,u+=Jn(o).map(d=>{const p=su(o,d),f=Ba(o,d);return`<article class="homestead-project ${f?"is-ready":""}"><small>${Vh[d.path]} / ${ir.filter(g=>g.path===d.path).indexOf(d)+1} of 6</small><h3>${d.title}</h3>${r(_o(o,d))}<p>${p?"18 coins + 15 XP":`Opens in Chapter ${d.chapter+1}${o.market.built?"":" after the market opens"}`}</p><div class="homestead-actions"><button data-home-action="project" data-value="${d.id}" ${f?"":"disabled"}>Claim reward</button><button data-home-action="pin" data-value="${d.id}" ${p?"":"disabled"}>${a.pinned===d.id?"Pinned":"Pin goal"}</button><button data-home-action="focus" data-value="${d.focus}" ${p?"":"disabled"}>Visit</button></div></article>`}).join(""),u+=`<h3>Homestead rewards</h3><ul class="homestead-perks">${[[3,"7-slot harvest basket"],[6,"6 seeds per packet at the same price"],[12,"10% less tower water use"],[18,"Harvest festival garden display"]].map(([d,p])=>`<li>${l>=d?"Earned":`${d} projects`}: ${p}</li>`).join("")}</ul><details><summary>All 18 projects</summary>${ir.map(d=>`<p>${a.claimed.includes(d.id)?"Complete: ":""}${d.title}</p>`).join("")}</details>`;else if(i==="mastery")u="<p>Garden harvests earn crop badges. Each badge makes that crop finish in soil 3% sooner. Previous harvests count.</p>",u+=Object.entries(e).map(([d,p])=>{const f=za(o,d),g=Hh[f],x=o.stats.byCropHarvested[d];return`<article class="homestead-project"><h3><span class="crop-swatch" style="background:${p.color}">${p.code}</span> ${p.label}</h3><p>${f}/3 badges / ${f*3}% shorter garden growth</p>${f<3?`${r([{label:"Garden harvests",current:Math.min(g,x),target:g}])}<p>${[8,12,20][f]} coins + 10 XP + 2 seeds</p><button data-home-action="mastery" data-value="${d}" ${x>=g&&o.market.built?"":"disabled"}>Claim ${["Bronze","Silver","Gold"][f]} badge</button>`:"<strong>Gold mastery earned</strong>"}</article>`}).join("");else{const d=$h(o);if(u=`<p>${a.requestsCompleted} requests completed. No deadlines. Requests reward your farm work; they do not take crops out of storage.</p>`,d){const p=ou(d.goals,a.request.progress),f=p.every(g=>g.current>=g.target);u+=`<article class="homestead-project ${f?"is-ready":""}"><h3>${d.title}</h3><p>${d.detail}</p>${r(p)}<p>12 coins + 8 XP</p><div class="homestead-actions"><button data-home-action="request-claim" ${f?"":"disabled"}>Claim reward</button><button data-home-action="focus" data-value="${d.focus}">Visit</button><button data-home-action="request-abandon">Abandon</button></div></article>`}else u+=Wh(o).map(p=>`<article class="homestead-project"><h3>${p.title}</h3><p>${p.detail}</p><p>12 coins + 8 XP</p><button data-home-action="request-accept" data-value="${p.id}">Choose request</button></article>`).join(""),u+='<button data-home-action="request-refresh">Other requests</button>'}Yt(n,`<header><div><small>HydroPip homestead</small><h2>${c?"Master Grower":"Growing Together"}</h2></div><button class="close-button" data-home-action="close" aria-label="Close homestead goals">&#215;</button></header><div class="homestead-tabs" role="tablist" aria-label="Homestead views">${[["projects","Projects"],["mastery","Crop book"],["requests","Requests"]].map(([d,p])=>`<button role="tab" aria-selected="${i===d}" data-home-tab="${d}">${p}</button>`).join("")}</div><div role="tabpanel" class="homestead-content">${u}</div>`)}return n.onclick=o=>{const a=o.target.closest("button");!a||a.disabled||(a.dataset.homeTab?(i=a.dataset.homeTab,t("render")):a.dataset.homeAction&&t(a.dataset.homeAction,a.dataset.value))},{render:s}}const py=4;function Ms(n,e=null,t=-1){const i=new Set(n.queue.map(r=>r.layer));return e?.kind==="starter"&&e.sourceTower===t&&i.add(e.sourceLayer),[0,1,2,3].filter(r=>!i.has(r))}function Bi(n,e,t=null){return n?.queue.find(i=>i.readyAt!==null&&i.readyAt<=e&&(!t||i.crop===t))}function Yh(n){n.towers.forEach((e,t)=>{const i=new Set;for(const s of e.queue)(!Number.isInteger(s.layer)||s.layer<0||s.layer>=py||i.has(s.layer))&&(s.layer=[0,1,2,3].find(o=>!i.has(o))),i.add(s.layer);const r=n.carry;r?.kind==="starter"&&r.sourceTower===t&&((!Number.isInteger(r.sourceLayer)||i.has(r.sourceLayer))&&(r.sourceLayer=[0,1,2,3].find(s=>!i.has(s))),r.job&&(r.job.layer=r.sourceLayer))})}const zi={composter:{label:"Composter",cost:90,chapter:0,towers:1,stages:["Open compost bin","Covered compost station"],detail:"Two scraps make one compost bag. Add a cover at 2 towers to shorten batches from 60 to 40 seconds."},rainTank:{label:"Rainwater storage",cost:120,chapter:1,towers:2,stages:["Rain barrel","Twin-barrel storage"],detail:"Save 10% reservoir water. Add the second barrel at 3 towers to save 20%."},coop:{label:"Chicken coop",cost:180,chapter:1,towers:3,stages:["Starter coop","Expanded chicken run"],detail:"One vegetable feeds one hen for one egg in 2 minutes. At 4 towers, expand the run for two hens and two eggs."}};function Xn(n,e){return n.owned.includes(e)?n.levels?.[e]||2:0}function cu(n,e){if(!Object.hasOwn(zi,e))return null;const t=zi[e],i=Xn(n.farm,e);if(i>=2)return null;const r=t.towers+i,s=n.market.built?n.chapter<t.chapter?"Requires Chapter 2":Ha(n)<r?`Requires ${r} working towers`:"":"Open the produce table first";return{label:t.stages[i],level:i+1,cost:t.cost/2,reason:s}}function my(n,e){const t=cu(n,e);return!t||t.reason||n.coins<t.cost?!1:(n.coins-=t.cost,n.farm.levels||={},n.farm.levels[e]=t.level,n.farm.owned.includes(e)||n.farm.owned.push(e),!0)}function gy(){return{owned:[],levels:{},scraps:0,compost:0,compostReadyAt:null,coopReadyAt:null,eggsReady:0,eggs:0,eggsSold:0}}function vy(n){const e=(t,i=999)=>Math.max(0,Math.min(i,Math.floor(Number(t)||0)));return{owned:[...new Set((Array.isArray(n?.owned)?n.owned:[]).filter(t=>Object.hasOwn(zi,t)))],levels:Object.fromEntries(Object.keys(zi).map(t=>[t,n?.levels?.[t]===1?1:2])),scraps:e(n?.scraps,24),compost:e(n?.compost,12),compostReadyAt:Number.isFinite(n?.compostReadyAt)&&n.compostReadyAt>0?n.compostReadyAt:null,coopReadyAt:Number.isFinite(n?.coopReadyAt)&&n.coopReadyAt>0?n.coopReadyAt:null,eggsReady:e(n?.eggsReady,2),eggs:e(n?.eggs,12),eggsSold:e(n?.eggsSold,99999)}}function xy(n,e){const t=n.farm;t.owned.includes("composter")&&t.compostReadyAt&&t.compostReadyAt<=e&&(t.compost=Math.min(12,t.compost+1),t.compostReadyAt=null),t.owned.includes("coop")&&t.coopReadyAt&&t.coopReadyAt<=e&&(t.eggsReady=Xn(t,"coop"),t.coopReadyAt=null)}function _y(n,e,t=1){const i=n.farm;return!i.owned.includes("composter")||i.compostReadyAt||i.scraps<2||i.compost>=12?!1:(i.scraps-=2,i.compostReadyAt=e+(Xn(i,"composter")===2?4e4:6e4)*t,!0)}function yy(n,e,t,i=1){const r=n.farm;return!r.owned.includes("coop")||r.coopReadyAt||r.eggsReady||!Object.hasOwn(n.rack,e)||!(n.rack[e]>0)?!1:(n.rack[e]-=1,n.stats.byCropFed[e]+=1,r.coopReadyAt=t+12e4*i,!0)}function by(n){const e=n.farm;return!e.owned.includes("coop")||!e.eggsReady||e.eggs+e.eggsReady>12?!1:(e.eggs+=e.eggsReady,e.eggsReady=0,e.scraps=Math.min(24,e.scraps+1),!0)}function wy(n){if(!n.market.built||!n.farm.eggs)return 0;const e=n.farm.eggs;return n.farm.eggs=0,n.farm.eggsSold+=e,n.coins+=e*8,e}function My(n,e){const t=n.beds[e];return!t?.built||t.soilCharges||n.farm.compost<1?!1:(n.farm.compost-=1,t.soilCharges=4,!0)}function Sy(n,e){const t=new Ve;t.name=`farm ${n}`;const i=Xn(e,n);t.userData.constructionLevel=i;const r=Object.fromEntries(Object.entries({wood:10056519,dark:4215880,soil:6573618,cream:15787717,roof:12936278,leaf:8169539,orange:15311682,water:6269879}).map(([a,c])=>[a,new or({color:c})])),s=(a,c,l,u)=>{const d=new pe(new Ht(...l),c);return d.position.set(...u),a.add(d),d},o=(a,c,l,u)=>{const d=new pe(new Mn(1,12,8),c);return d.scale.set(...l),d.position.set(...u),a.add(d),d};if(n==="composter"){s(t,r.soil,[1.55,.42,1.1],[0,.24,0]);for(const a of[-.8,.8])for(const c of[-.6,.6])s(t,r.dark,[.11,1.1,.11],[a,.55,c]);for(const a of[.2,.44,.68,.92]){for(const c of[-.62,.62])s(t,r.wood,[1.7,.17,.08],[0,a,c]);for(const c of[-.82,.82])s(t,r.wood,[.08,.17,1.3],[c,a,0])}o(t,r.soil,[.73,.2+e.scraps*.012,.53],[0,.51,0]);for(let a=0;a<Math.min(6,e.scraps);a++)o(t,r.leaf,[.15,.03,.075],[Math.sin(a*2)*.45,.66+e.scraps*.008,Math.cos(a*2)*.35]);for(let a=0;a<Math.min(3,e.compost);a++)s(t,r.cream,[.3,.38,.24],[1.12,.2,-.36+a*.29]);if(i>1){const a=s(t,r.dark,[1.85,.09,1.36],[0,1.23,-.22]);a.rotation.x=-.3,s(t,r.wood,[.2,.85,.08],[.7,1.2,-.6])}}else if(n==="rainTank"){const a=new pe(new pt(.66,.72,1.45,20),r.water);a.position.y=.75,t.add(a);for(const c of[.15,.72,1.44]){const l=new pe(new jn(.68,.045,6,24),r.dark);l.rotation.x=Math.PI/2,l.position.y=c,t.add(l)}if(s(t,r.cream,[.2,.9,.08],[0,.83,.66]),s(t,r.dark,[.12,.15,.48],[.35,.22,.71]),i>1){const c=new pe(new pt(.54,.58,1.25,20),r.water);c.position.set(1.2,.65,0),t.add(c),s(t,r.dark,[.6,.1,.1],[.65,.3,0]),s(t,r.cream,[1.2,.08,1.2],[1.2,1.3,0])}}else{s(t,r.soil,[4,.06,2],[0,.03,0]),s(t,r.wood,[1.25,.9,1.2],[-1.1,.85,0]),s(t,r.dark,[.33,.47,.035],[-1.04,.64,.62]);for(const l of[-1,1]){const u=s(t,r.roof,[.85,.09,1.5],[-1.1+l*.34,1.49,0]);u.rotation.z=-l*.33}for(const l of[-1.58,-.63])for(const u of[-.48,.48])s(t,r.dark,[.1,.55,.1],[l,.28,u]);const a=s(t,r.wood,[.48,.06,.9],[-1.04,.26,.96]);a.rotation.x=-.4;for(const l of[-2,-1,0,1,2])for(const u of[-1,1])s(t,r.wood,[.055,.56,.055],[l,.3,u]);for(const l of[-1,1])for(const u of[.19,.45])s(t,r.wood,[4.05,.035,.035],[0,u,l]);for(const l of[-2,2])for(const u of[.19,.45])s(t,r.wood,[.035,.035,2],[l,u,0]);o(t,r.cream,[.22,.04,.19],[1.5,.08,-.5]);for(let l=0;l<e.eggsReady;l++)o(t,r.cream,[.09,.12,.08],[-.69+l*.2,.53,.64]);const c=[];for(let l=0;l<i;l++){const u=new Ve;u.position.set(.2+l*.85,0,l?-.4:.35),t.add(u),o(u,r.cream,[.25,.25,.34],[0,.36,0]),o(u,r.wood,[.05,.14,.21],[-.23,.38,-.03]),o(u,r.cream,[.13,.2,.13],[0,.63,.2]);for(let f=0;f<3;f++)o(u,r.roof,[.045,.065,.055],[0,.82,.15+f*.045]);o(u,r.roof,[.04,.08,.04],[0,.53,.31]);for(const f of[-1,1])o(u,r.dark,[.018,.024,.018],[f*.116,.68,.25]),s(u,r.orange,[.028,.19,.03],[f*.1,.1,0]),s(u,r.orange,[.08,.025,.13],[f*.1,.025,.04]);const d=new pe(new Vi(.057,.16,4),r.orange);d.rotation.x=Math.PI/2,d.position.set(0,.63,.35),u.add(d);const p=o(u,r.cream,[.11,.24,.1],[0,.54,-.28]);p.rotation.x=-.65,u.userData.home=u.position.clone(),c.push(u)}if(t.userData.hens=c,i>1){s(t,r.wood,[.85,.45,.6],[-1.1,.6,-.8]),s(t,r.roof,[1,.08,.72],[-1.1,.88,-.8]);for(const l of[.2,1.1])s(t,r.dark,[.07,1.15,.07],[l,.6,-.9]);s(t,r.wood,[1.15,.08,.1],[.65,1.15,-.9])}}return t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),Gt(t),t}function jh(n,e,t,i,r){const s=document.createElement("canvas");s.width=1024,s.height=256;const o=s.getContext("2d");o.fillStyle=i,o.fillRect(0,0,1024,256),o.strokeStyle=r,o.lineWidth=12,o.strokeRect(12,12,1e3,232),o.fillStyle=r,o.font="900 138px system-ui",o.textAlign="center",o.textBaseline="middle",o.fillText(n,512,132,936);const a=new Jl(s);a.colorSpace=Qt;const c=new pe(new Ln(e,t),new Vt({map:a,side:pn}));return c.name=n,c.rotation.x=-.22,c}function Ey(n,e,t){for(const r of[-1.05,1.05])e(n,[.12,1.35,.12],[r,1.83,-.38],t.woodDark);e(n,[2.95,.88,.13],[0,2.6,-.35],t.woodDark);const i=jh("BUY SEEDS",2.8,.74,"#e5f294","#19382b");i.position.set(0,2.6,-.26),n.add(i),e(n,[1.7,.56,.06],[0,.7,.76],t.woodDark);for(let r=0;r<5;r++)e(n,[.23,.34,.05],[-.65+r*.325,.73,.81],r%2?t.coral:t.lime),e(n,[.12,.09,.02],[-.65+r*.325,.78,.85],t.white,!1)}function Ty(n,e,t){const i=new Ve,r=new or({color:4427678});i.name=`farm supply store stage ${n}`;const s=n>=2?2.1:1.5,o=s/2;e(i,[3.1,.16,s+.65],[0,.08,.15],t.shell),e(i,[2.9,1.9,.14],[0,1.03,-s/2],t.white);for(const l of[-1.4,1.4])e(i,[.14,1.9,s],[l,1.03,0],t.white),e(i,[.18,.48,s+.03],[l,.38,0],t.wood);e(i,[.78,1.58,.12],[-.85,.94,o],t.woodDark),e(i,[.6,1.38,.13],[-.85,.92,o+.03],t.dark),e(i,[.46,.62,.05],[-.85,1.14,o+.11],t.metal),e(i,[.07,.1,.08],[-.64,.71,o+.15],t.amber),e(i,[.94,.12,.4],[-.85,.19,o+.22],t.wood),e(i,[1.62,.72,.16],[.47,.5,o],t.wood),e(i,[1.82,.13,.5],[.47,.92,o+.05],t.woodDark);for(const l of[-.42,1.35])e(i,[.12,1.05,.14],[l,1.48,o],t.woodDark);for(const l of[.92,1.47]){e(i,[1.66,.08,.45],[.48,l,o-.38],t.wood);for(let u=0;u<4;u++){const d=-.13+u*.4;e(i,[.25,.32,.22],[d,l+.2,o-.37],u%2?t.lime:t.coral),e(i,[.14,.12,.02],[d,l+.2,o-.245],t.white,!1)}}e(i,[3,.5,.14],[0,2.18,o+.35],t.woodDark);const a=jh("FARM SHOP",2.78,.47,"#18392c","#f4de8a");if(a.position.set(0,2.18,o+.44),i.add(a),n>=3){for(const l of[-1,1]){const u=e(i,[3.35,.14,1.45],[0,2.47,l*.6],t.coral);u.rotation.x=l*.34}e(i,[3.4,.14,.18],[0,2.71,0],t.woodDark)}else e(i,[3.22,.16,s+.3],[0,2.26,0],t.coral);const c=new Ve;c.position.set(.46,1.88,o+.4),c.rotation.x=.18;for(let l=0;l<6;l++)e(c,[.3,.07,.76],[-.75+l*.3,0,0],l%2?t.white:r),e(c,[.3,.16,.06],[-.75+l*.3,-.07,.38],l%2?t.white:r);if(i.add(c),n>=2){e(i,[.48,.48,.62],[1.8,.3,.35],t.woodDark);for(let l=0;l<3;l++)e(i,[.055,1.05,.055],[1.66+l*.14,.85,.34],t.wood),e(i,[.13,.22,.06],[1.66+l*.14,1.36,.34],t.metal)}if(n>=4)for(const l of[-1.7,1.7])e(i,[.4,.35,.55],[l,.24,-.7],t.wood),e(i,[.34,.35,.42],[l,.57,-.7],t.lime);return Gt(i),i}function Ay(n){const e=new Map;n.traverse(i=>{!i.userData.growthTiming||!i.userData.plantingPlacements||i.children.filter(r=>r.isInstancedMesh).forEach((r,s)=>{const o=`${i.userData.crop}:${s}:${r.material.opacity}`;e.has(o)||e.set(o,[]),e.get(o).push(r),r.layers.set(1),r.castShadow=!1})});const t=[];for(const i of e.values()){const r=i.reduce((o,a)=>o+a.count,0),s=new Tr(i[0].geometry.clone(),i[0].material.clone(),r);s.castShadow=!0,s.receiveShadow=!0,s.userData.instanceTargets=i.flatMap(o=>Array(o.count).fill(o.userData.interactiveId)),s.userData.cropBatch=!0,n.add(s),t.push({mesh:s,parts:i})}n.userData.cropBatches=t,Jh(n)}function Jh(n){n.updateMatrixWorld(!0);const e=n.matrixWorld.clone().invert(),t=new wt,i=new wt,r=new wt().makeScale(0,0,0);for(const{mesh:s,parts:o}of n.userData.cropBatches||[]){let a=0;for(const c of o){i.multiplyMatrices(e,c.matrixWorld);for(let l=0;l<c.count;l++)c.getMatrixAt(l,t),t.premultiply(i),c.visible||t.multiply(r),s.setMatrixAt(a++,t)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}const da=.24,ea=1.12;function Cy(n){const e=new Ve;e.name="water reservoir";const t=new Ve;e.add(t);const i=new or({color:14476762}),r=new or({color:4151378}),s=new Fi({color:4636114,roughness:.25,metalness:.05}),o=new Vt({color:6935773});function a(S,y,_,R){const A=new pe(y,_);return A.position.set(...R),S.add(A),A}a(t,new Ht(1.7,.2,1.7),r,[0,.13,0]);for(const S of[.26,.84,1.43])for(const y of[-.78,.78])a(t,new Ht(1.6,.045,.045),i,[0,S,y]),a(t,new Ht(.045,.045,1.6),i,[y,S,0]);for(const S of[-.78,0,.78])for(const y of[-.78,.78])a(t,new Ht(.045,1.2,.045),i,[S,.845,y]);const c=a(e,new Ht(1.5,1.17,1.5),new Fi({color:14152429,transparent:!0,opacity:.14,roughness:.25,depthWrite:!1,side:pn}),[0,.845,0]);c.renderOrder=2;const l=a(e,new Ht(1.37,1,1.37),s,[0,da,0]);l.name="reservoir water volume";const u=new Ve;u.position.set(.42,0,.8),e.add(u),a(u,new Ht(.22,1.1,.06),r,[0,.86,0]);for(let S=0;S<=4;S++)a(u,new Ht(.045,.014,.015),i,[.065,.39+S*.225,.04]);Gt(u);const d=a(u,new Ht(.08,.9,.025),o,[-.025,.39,.048]),p=a(u,new Mn(.065,10,8),o,[0,1.39,.018]);for(const S of[-.35,.35])a(t,new Ht(.24,.2,.3),r,[S,.34,-.2]),a(t,new pt(.045,.045,1.2,8),r,[S,.95,-.2]);const f=a(t,new pt(.045,.045,.42,8),r,[-.35,1.55,.01]);f.rotation.x=Math.PI/2,a(t,new pt(.045,.045,.18,8),r,[-.35,1.48,.22]);const g=a(t,new pt(.045,.045,.66,8),r,[.35,1.55,-.53]);g.rotation.x=Math.PI/2,a(t,new pt(.045,.045,1.3,8),r,[.35,.9,-.86]);const x=new Vt({color:10875647}),v=a(e,new pt(.045,.065,.2,8),x,[-.35,1.3,.22]);v.name="IBC top mixing discharge";const m=new Ve;m.position.set(-.35,0,.22),e.add(m);for(let S=0;S<2;S++){const y=new pe(new jn(.23,.018,6,24),new Vt({color:13105919,transparent:!0,opacity:.8,depthWrite:!1}));y.rotation.x=-Math.PI/2,m.add(y)}return Gt(t),e.userData.reservoir={liquid:l,fill:d,lamp:p,shell:c,mixingStream:v,ripples:m,ratio:null,status:null},Kh(e,n),e}function Kh(n,e){const t=n?.userData.reservoir;if(!t)return;const i=Math.max(0,Math.min(1,Number.isFinite(e)?e/100:0));if(t.ratio===i)return;t.ratio=i,t.status=i===0?"empty":i<=.3?"low":"ready",t.liquid.visible=t.fill.visible=i>0,t.liquid.scale.y=Math.max(1e-4,i*ea),t.liquid.position.y=da+i*ea/2,t.mixingStream.visible=i>0;const r=Math.max(.02,1.4-(da+i*ea));t.mixingStream.scale.y=r/.2,t.mixingStream.position.y=1.4-r/2,t.ripples.position.y=da+i*ea+.025,t.fill.scale.y=Math.max(1e-4,i),t.fill.position.y=.39+i*.9/2,t.lamp.material.color.setHex(i<=.3?16102724:6935773)}function Ry(n,e,t,i){const r=n?.userData.reservoir;r&&(r.mixingStream.visible=r.ripples.visible=t&&r.ratio>0,r.ripples.children.forEach((s,o)=>{const a=i?.35+o*.35:(e*.9+o*.5)%1;s.scale.setScalar(.3+a*1.4),s.material.opacity=i?.65:.9*(1-a)}))}function Py(n){const e=n?.userData.reservoir;return e?{ratio:e.ratio,status:e.status,waterVisible:e.liquid.visible,surfaceHeight:e.liquid.position.y+e.liquid.scale.y/2,bottomHeight:e.liquid.position.y-e.liquid.scale.y/2,gaugeVisible:e.fill.visible,gaugeScale:e.fill.scale.y,mixingVisible:e.mixingStream.visible,rippleScale:e.ripples.children[0].scale.x,modelId:n.uuid}:null}const Ws="2026.09.06-preview.11",Ly="https://hydropip-pip-api.onrender.com/track-start.html",Gd="info@hydropip.com",Dy=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;let Zh=window.HYDROPIP_ANALYTICS_CONSENT===!0;window.addEventListener("hydropip:analytics-consent",n=>{Zh=n.detail?.granted===!0});function Zn(n,e={}){if(!Zh)return;const t={event:`hydropip_game_${n}`,game:"growing_adventure",version:Ws,sessionId:Dy,...e};window.dataLayer=window.dataLayer||[],window.dataLayer.push(t),window.dispatchEvent(new CustomEvent("hydropip:game-event",{detail:t}))}const lu={repair:"Tower online!",seeds:"Seeds in the vault!",plant:"Your first layer is planted!",pickup:"Garden-ready starter!",transplant:"Roots in the garden!",harvest:"Your first harvest!",stage:"Harvest safely stored!",market:"Open for business!",sale:"Your first customer!",expansion:"A second tower!",upgrade:"More room to grow!"};function Qh(n,e=!1){return{enabled:typeof n?.enabled=="boolean"?n.enabled:e,minimized:!!n?.minimized,staged:!!n?.staged,seen:[...new Set((Array.isArray(n?.seen)?n.seen:[]).filter(t=>Object.hasOwn(lu,t)))]}}function Al(n){const e=n.beds.some(i=>i.built&&i.capacity>2)||n.towers.some(i=>i.irrigationUpgraded),t={repair:n.towers[0].repaired,seeds:n.stats.seedsCollected>0,plant:n.stats.planted>0,pickup:n.carry?.kind==="starter"||n.stats.transplanted>0,transplant:n.stats.transplanted>0,harvest:n.stats.harvested>0,stage:n.tutorial.coach?.staged||Object.values(n.rack).some(i=>i>0),market:n.market.built,sale:n.stats.orders>0,expansion:n.towers[1].built&&n.towers[1].repaired,upgrade:e};return Object.keys(lu).filter(i=>t[i])}const Cl={lettuce:4,basil:6,tomato:8,kale:6,strawberry:10},_a=80;function Iy(){return{tutorialClaimed:[],expanded:!1,purchases:0,rescues:0}}function Uy(n){const e=t=>Number.isFinite(t)?Math.max(0,Math.min(99999,Math.floor(t))):0;return{tutorialClaimed:[...new Set((Array.isArray(n?.tutorialClaimed)?n.tutorialClaimed:[]).filter(t=>["lettuce","basil"].includes(t)))],expanded:!!n?.expanded,purchases:e(n?.purchases),rescues:e(n?.rescues)}}function Rl(n){return n.seedShop.expanded?48:24}function Va(n,e){if(!Object.hasOwn(Cl,e)||!n.unlockedCrops.includes(e))return{available:!1,reason:"Crop locked"};const t=!n.market.built&&["lettuce","basil"].includes(e)&&!n.seedShop.tutorialClaimed.includes(e),i=t?4:Ot(n).seedBatch,r=t?0:Cl[e],s=n.market.built?n.coins:Math.max(0,n.coins-40),o=n.seeds[e]+i>Rl(n)?"Vault full":s<r?n.market.built?"Not enough coins":"Keep the market reserve":"";return{available:!o,reason:o,amount:i,price:r,tutorial:t}}function ky(n,e){const t=Va(n,e);return t.available?(n.coins-=t.price,n.seeds[e]+=t.amount,n.stats.seedsCollected+=t.amount,t.tutorial?n.seedShop.tutorialClaimed.push(e):n.seedShop.purchases++,!0):!1}function uu(n){if((n.market.built?n.coins:Math.max(0,n.coins-40))>=Cl.lettuce||Object.values(n.seeds).some(r=>r>0)||n.carry?.kind==="starter")return!1;const t=n.chapter>=2?2:1,i=n.carry?.kind==="produce"?n.carry.items:[];return!(Object.entries(n.rack).some(([r,s])=>s+i.filter(o=>o===r).length>=t)||n.towers.some(r=>r.queue.length)||n.beds.some(r=>r.plants.length)||n.farm.eggs||n.farm.eggsReady||n.farm.coopReadyAt)}function Ny(n){return uu(n)?(n.seeds.lettuce+=2,n.stats.seedsCollected+=2,n.seedShop.rescues++,!0):!1}function Oy(n){return!n.market.built||Cn(n,"vault")||n.seedShop.expanded||n.coins<_a?!1:(n.coins-=_a,n.seedShop.expanded=!0,!0)}const yo="hydropipCampaignSave",Fy="hydropipTowerRunCampaign",du=6,Qn=["lettuce","basil","tomato","kale","strawberry"],Te={lettuce:{code:"L",label:"Lettuce",color:"#79bd53",accent:"#d6f47a",towerSeconds:9,bedSeconds:6,coinValue:9,xp:3,family:"greens"},basil:{code:"B",label:"Basil",color:"#319856",accent:"#8de28f",towerSeconds:11,bedSeconds:7,coinValue:11,xp:4,family:"greens"},tomato:{code:"T",label:"Tomato",color:"#df5e48",accent:"#ffb06b",towerSeconds:15,bedSeconds:10,coinValue:15,xp:5,family:"fruit"},kale:{code:"K",label:"Kale",color:"#47765c",accent:"#a8d276",towerSeconds:13,bedSeconds:9,coinValue:14,xp:5,family:"greens"},strawberry:{code:"S",label:"Strawberry",color:"#d94f68",accent:"#ffd06c",towerSeconds:17,bedSeconds:11,coinValue:19,xp:7,family:"fruit"}},ts=[0,35,85,145,220,310,420,650,950,1350,1850,2450,3150,3950,4850],gt={market:40,tower:[0,70,110,160],bedUpgrade:[45,65,90,120],queueUpgrade:55,cosmetics:{"sunny-planters":30,"blue-path":45,"festival-bunting":60}},ro={"sunny-planters":{label:"Sunny planters",color:"#f4c451"},"blue-path":{label:"Blue garden pots",color:"#66c7d0"},"festival-bunting":{label:"Market bunting",color:"#e86c54"}},ps=[{id:"restore",number:1,name:"Restore the Homestead",shortName:"Homestead",description:"Repair the first tower and reopen Pip's Veg Stand.",completionTask:"first-market-day"},{id:"balance",number:2,name:"Expand the Farm",shortName:"Farm Expansion",description:"Check the shared reservoir and supply a neighborhood rush.",completionTask:"neighborhood-rush"},{id:"pro-yard",number:3,name:"Build the Pro Yard",shortName:"Pro Yard",description:"Complete the five-crop launch showcase with Pro Pip.",completionTask:"launch-showcase"}],Rn=[{id:"repair-first-tower",chapter:0,title:"Bring the tower online",detail:"Repair the first HydroPip tower.",focus:"tower-0",reward:{coins:15,xp:15,unlockCrop:"basil"},story:"Pip: One good tower is enough to bring this garden back."},{id:"first-tower-plan",chapter:0,title:"Plan the first greens",detail:"Collect seeds and plant 2 lettuce layers.",focus:"vault",reward:{coins:10,xp:20},story:"Mara: Lettuce first. The neighborhood has missed fresh greens."},{id:"first-grow-out",chapter:0,title:"Finish crops in soil",detail:"Transplant and harvest 4 garden crops before opening the produce table.",focus:"bed-0",reward:{coins:20,xp:25},story:"Pip: Tower roots are ready. The bed gives them their final finish."},{id:"reopen-market",chapter:0,title:"Open Pip's produce table",detail:"Build a small produce table for 40 coins. More towers unlock a bigger stand.",focus:"market",reward:{coins:20,xp:25},story:"Theo: A few crates today. An awning when the farm grows."},{id:"first-market-day",chapter:0,title:"Serve the first greens",detail:"Sell 2 lettuce and 2 basil across 4 market orders.",goals:{sold:{lettuce:2,basil:2},orders:4},focus:"market",reward:{coins:40,xp:35,chapterComplete:!0},story:"June: The stand is open again. Let's add more towers and grow more crops."},{id:"build-second-tower",chapter:1,title:"Build the second tower",detail:"Build Tower 2 for 70 coins.",focus:"tower-1",reward:{coins:25,xp:35,unlockCrop:"tomato"},story:"Pip: Two towers, one tank. Both receive the same nutrient batch."},{id:"specialize-flow",chapter:1,title:"Check the shared system",detail:"Confirm tank circulation, then check delivery to every tower.",focus:"reservoir",reward:{coins:25,xp:35,unlockCrop:"kale"},story:"Mara: One pump mixes the tank. A second pump feeds every tower from that same batch."},{id:"split-crop-plan",chapter:1,title:"Run a mixed crop plan",detail:"Plant tomato and kale in separate tower layers.",focus:"vault",reward:{coins:40,xp:40},story:"Theo: Different crops can share the towers. Their nutrient supply is still one batch."},{id:"build-third-tower",chapter:1,title:"Build the third tower",detail:"Build Tower 3 for 110 coins.",focus:"tower-2",reward:{coins:55,xp:45},story:"Pip: Three towers. Now the farm can keep several orders moving."},{id:"neighborhood-rush",chapter:1,title:"Serve the neighborhood rush",detail:"Sell 3 tomato and 3 kale, reach 10 total orders, and upgrade tower drippers or a garden bed.",goals:{sold:{tomato:3,kale:3},orders:10,capacityUpgrade:!0},focus:"market",reward:{coins:90,xp:55,chapterComplete:!0},story:"June: Every order made the Pro Yard possible."},{id:"build-pro-yard",chapter:2,title:"Build the fourth tower",detail:"Build Tower 4 for 160 coins.",focus:"tower-3",reward:{coins:45,xp:55,unlockCrop:"strawberry",unlockPro:!0},story:"Pip: Pro Yard online. Time for the black shirt and tool belt."},{id:"launch-showcase",chapter:2,title:"Host the launch showcase",detail:"Upgrade the market, sell 5 of every crop plus 3 extra strawberries, and reach 20 total orders.",goals:{sold:{lettuce:5,basil:5,tomato:5,kale:5,strawberry:8},orders:20,marketLevel:2},focus:"market",reward:{coins:140,xp:75,chapterComplete:!0,campaignComplete:!0},story:"Mara: The homestead is growing, the stand is busy, and Pip is a pro."}];function xr(){return Object.fromEntries(Qn.map(n=>[n,0]))}function Ga(n){const e=Math.max(0,Number(n)||0);let t=1;return ts.forEach((i,r)=>{e>=i&&(t=r+1)}),Math.min(ts.length,t)}function ef(n){const e=Ga(n),t=ts[e-1],i=ts[e]??t;return{level:e,current:Math.max(0,n-t),needed:e>=ts.length?0:i-t,ratio:e>=ts.length?1:(n-t)/(i-t)}}function tf(n){return{id:`tower-${n}`,built:n===0,repaired:!1,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!1,queue:[]}}function nf(n){return{id:`bed-${n}`,built:n===0,capacity:2,soilCharges:0,plants:[]}}function Wa(n=Date.now()){return{version:du,createdAt:n,savedAt:n,chapter:0,taskIndex:0,completedTasks:[],coins:45,xp:0,level:1,challengeUnlocked:!1,campaignComplete:!1,proPip:!1,unlockedCrops:["lettuce"],towers:[0,1,2,3].map(tf),beds:[0,1,2,3].map(nf),market:{built:!1,level:0,stage:0,nextVisitIn:8,visitRemaining:0,cropBag:[]},farm:gy(),homestead:Gh(),seeds:xr(),seedShop:Iy(),rack:xr(),carry:null,orders:[],selectedOrderId:null,orderSequence:0,lastCustomer:"",stats:{seedsCollected:0,planted:0,transplanted:0,harvested:0,sold:0,orders:0,rejectedOrders:0,serviceActions:0,byCropQueued:xr(),byCropHarvested:xr(),byCropSold:xr(),byCropFed:xr()},hydro:{water:100,nutrients:100,ph:6.2,strategy:"balanced",batchMixed:!0,mixChecked:!1,flowChecked:!1,flowCalibrated:!1,systemLessonDone:!1,batchNumber:1,feedPhase:0,lineClogged:!1,lineRunSeconds:0,lineClogAfter:300,servicedAt:n},cosmetics:{owned:[],active:[]},tutorial:{welcomeSeen:!1,taskDrawerSeen:!1,marketSeen:!1,coach:Qh(null,!0)},settings:{soundEnabled:!0,highContrast:!1,reducedMotion:!1,musicVolume:.22,effectsVolume:.68}}}function qe(n,e,t=-1/0,i=1/0){const r=Number(n);return Number.isFinite(r)?Math.min(i,Math.max(t,r)):e}function Jr(n){const e=xr();return Qn.forEach(t=>{e[t]=Math.floor(qe(n?.[t],0,0,999))}),e}function Wd(n){return!n||!Te[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,layer:Number.isInteger(n.layer)&&n.layer>=0&&n.layer<4?n.layer:null,queuedAt:qe(n.queuedAt,Date.now(),0),startedAt:n.startedAt===null?null:qe(n.startedAt,Date.now(),0),readyAt:n.readyAt===null?null:qe(n.readyAt,Date.now(),0),quality:qe(n.quality,1,.5,1.25)}}function By(n){return!n||!Te[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,plantedAt:qe(n.plantedAt,Date.now(),0),readyAt:qe(n.readyAt,Date.now(),0),quality:qe(n.quality,1,.5,1.25)}}function zy(n){return!n||!Te[n.crop]?null:{id:String(n.id||crypto.randomUUID()),customer:String(n.customer||"Mara").slice(0,24),slot:Number.isInteger(n.slot)&&n.slot>=0&&n.slot<3?n.slot:null,crop:n.crop,amount:Math.floor(qe(n.amount,1,1,3)),reward:Math.floor(qe(n.reward,10,1,200)),xp:Math.floor(qe(n.xp,5,1,50)),createdAt:qe(n.createdAt,Date.now(),0),expiresAt:qe(n.expiresAt,Date.now()+12e4,0),status:["waiting","cooldown"].includes(n.status)?n.status:"waiting"}}function Hy(n,e,t){n.towers.forEach(i=>{i.queue.forEach(r=>{if(!r||r.startedAt===null||r.readyAt===null||r.readyAt<=e)return;const s=t?ms(r.crop,"tower",n,i):Te[r.crop].towerSeconds*4,o=e+s*1e3;r.readyAt=Math.min(r.readyAt,o)})}),n.beds.forEach(i=>{i.plants.forEach(r=>{if(r.readyAt<=e)return;const s=e+ms(r.crop,"bed",n)*1e3;r.readyAt=Math.min(r.readyAt,s)})})}function ya(n,e=Date.now()){const t=Wa(e);if(!n||typeof n!="object")return t;const i=n.hydro?.systemLessonDone===void 0&&(qe(n.taskIndex,0)>6||Array.isArray(n.towers)&&n.towers.some(a=>["greens","fruit"].includes(a?.specialization))),r={...t,...n,version:du,createdAt:qe(n.createdAt,e,0),savedAt:qe(n.savedAt,e,0),chapter:Math.floor(qe(n.chapter,0,0,ps.length-1)),taskIndex:Math.floor(qe(n.taskIndex,0,0,Rn.length)),completedTasks:Array.isArray(n.completedTasks)?[...new Set(n.completedTasks.filter(a=>Rn.some(c=>c.id===a)))]:[],coins:Math.floor(qe(n.coins,t.coins,0,99999)),xp:Math.floor(qe(n.xp,0,0,99999)),challengeUnlocked:!!n.challengeUnlocked,campaignComplete:!!n.campaignComplete,proPip:!!n.proPip,unlockedCrops:Array.isArray(n.unlockedCrops)?Qn.filter(a=>n.unlockedCrops.includes(a)):["lettuce"],seeds:Jr(n.seeds),seedShop:Uy(n.seedShop),rack:Jr(n.rack),farm:vy(n.farm),homestead:ry(n.homestead),carry:null,orders:Array.isArray(n.orders)?n.orders.map(zy).filter(Boolean).slice(0,3):[],selectedOrderId:typeof n.selectedOrderId=="string"?n.selectedOrderId.slice(0,80):null,orderSequence:Math.floor(qe(n.orderSequence,0,0,999999)),lastCustomer:String(n.lastCustomer||"").slice(0,24),market:{built:!!n.market?.built,level:Math.floor(qe(n.market?.level,0,0,2)),stage:n.market?.built?Math.floor(qe(n.market?.stage,n.market?.level>=2?4:3,1,4)):0,nextVisitIn:qe(n.market?.nextVisitIn,8,0,35),visitRemaining:Math.floor(qe(n.market?.visitRemaining,0,0,3)),cropBag:[...new Set((Array.isArray(n.market?.cropBag)?n.market.cropBag:[]).filter(a=>Qn.includes(a)))],openingGrant:Math.floor(qe(n.market?.openingGrant,0,0,gt.market))},hydro:{water:qe(n.hydro?.water,100,0,100),nutrients:qe(n.hydro?.nutrients,100,0,100),ph:qe(n.hydro?.ph,6.2,4.5,8),strategy:"balanced",batchMixed:n.hydro?.batchMixed!==!1,mixChecked:n.hydro?.batchMixed===!1?!1:!!n.hydro?.mixChecked,flowChecked:!!n.hydro?.flowChecked,flowCalibrated:!!n.hydro?.flowCalibrated||n.hydro?.strategy==="water-save"||i,systemLessonDone:!!n.hydro?.systemLessonDone||i,batchNumber:Math.floor(qe(n.hydro?.batchNumber,1,1,999999)),feedPhase:qe(n.hydro?.feedPhase,0,0,24)%24,lineClogged:!!n.hydro?.lineClogged&&qe(n.chapter,0)>=1,lineRunSeconds:qe(n.hydro?.lineRunSeconds,0,0,360),lineClogAfter:qe(n.hydro?.lineClogAfter,300,240,360),servicedAt:qe(n.hydro?.servicedAt,e,0)},cosmetics:{owned:Array.isArray(n.cosmetics?.owned)?n.cosmetics.owned.filter(a=>ro[a]):[],active:Array.isArray(n.cosmetics?.active)?n.cosmetics.active.filter(a=>ro[a]):[]},tutorial:{...t.tutorial,...n.tutorial||{},coach:Qh(n.tutorial?.coach,!n.tutorial?.welcomeSeen&&!n.taskIndex&&!n.stats?.planted)},settings:{soundEnabled:n.settings?.soundEnabled!==!1,highContrast:!!n.settings?.highContrast,reducedMotion:!!n.settings?.reducedMotion,musicVolume:qe(n.settings?.musicVolume,t.settings.musicVolume,0,1),effectsVolume:qe(n.settings?.effectsVolume,t.settings.effectsVolume,0,1)},stats:{...t.stats,...n.stats||{},seedsCollected:Math.floor(qe(n.stats?.seedsCollected,0,0)),planted:Math.floor(qe(n.stats?.planted,0,0)),transplanted:Math.floor(qe(n.stats?.transplanted,0,0)),harvested:Math.floor(qe(n.stats?.harvested,0,0)),sold:Math.floor(qe(n.stats?.sold,0,0)),orders:Math.floor(qe(n.stats?.orders,0,0)),rejectedOrders:Math.floor(qe(n.stats?.rejectedOrders,0,0)),serviceActions:Math.floor(qe(n.stats?.serviceActions,0,0)),byCropQueued:Jr(n.stats?.byCropQueued),byCropHarvested:Jr(n.stats?.byCropHarvested),byCropSold:Jr(n.stats?.byCropSold),byCropFed:Jr(n.stats?.byCropFed)}};if(r.level=Ga(r.xp),r.unlockedCrops.includes("lettuce")||r.unlockedCrops.unshift("lettuce"),r.towers=[0,1,2,3].map(a=>{const c=n.towers?.[a]||{};return{...tf(a),...c,id:`tower-${a}`,built:a===0||!!c.built,repaired:!!c.repaired,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!!c.irrigationUpgraded||qe(n.version,0)<6&&c.queueCapacity===3,queue:Array.isArray(c.queue)?c.queue.map(Wd).filter(Boolean).slice(0,4):[]}}),r.beds=[0,1,2,3].map(a=>{const c=n.beds?.[a]||{};return{...nf(a),...c,id:`bed-${a}`,built:a===0||!!c.built,capacity:Math.floor(qe(c.capacity,2,2,4)),soilCharges:Math.floor(qe(c.soilCharges,0,0,4)),plants:Array.isArray(c.plants)?c.plants.map(By).filter(Boolean).slice(0,4):[]}}),n.carry?.kind==="starter"&&Te[n.carry.crop])r.carry={kind:"starter",crop:n.carry.crop,quality:qe(n.carry.quality,1,.5,1.25),sourceTower:Math.floor(qe(n.carry.sourceTower,0,0,3)),sourceLayer:Number.isInteger(n.carry.sourceLayer)&&n.carry.sourceLayer>=0&&n.carry.sourceLayer<4?n.carry.sourceLayer:null,job:Wd(n.carry.job)};else if(n.carry?.kind==="produce"&&Array.isArray(n.carry.items)){const a=n.carry.items.filter(c=>Te[c]).slice(0,Ot(r).basket);a.length&&(r.carry={kind:"produce",items:a})}Yh(r);const s=new Set;r.orders.forEach(a=>{(a.slot===null||s.has(a.slot))&&(a.slot=[0,1,2].find(c=>!s.has(c))),s.add(a.slot)});const o=r.cosmetics.owned.length||r.farm.owned.length||r.towers.some(a=>a.irrigationUpgraded)||r.beds.some(a=>a.capacity>2);if(!r.market.built&&r.taskIndex>=3&&r.coins<gt.market&&!r.market.openingGrant&&o&&(r.market.openingGrant=gt.market-r.coins,r.coins=gt.market),r.hydro.water<=0||!r.hydro.batchMixed){const a=Math.max(0,e-r.savedAt);r.towers.forEach(c=>c.queue.forEach(l=>{l.readyAt>r.savedAt&&(l.readyAt+=a,l.startedAt!==null&&(l.startedAt+=a))})),r.savedAt=e}return Hy(r,e,qe(n.version,0)<4),r}function Vy(n,e){if(!e||typeof e!="object")return n;const t=Array.isArray(e.completed)?e.completed:[],i=Math.floor(qe(e.highestContract,0,0,2));return(t.includes("homestead")||i>=1)&&(n.chapter=1,n.taskIndex=5,n.completedTasks=Rn.slice(0,5).map(r=>r.id),n.coins=150,n.xp=130,n.challengeUnlocked=!0,n.unlockedCrops=["lettuce","basil","tomato"],n.towers[0].repaired=!0,n.market={built:!0,level:1}),(t.includes("split-flow")||i>=2)&&(n.chapter=2,n.taskIndex=10,n.completedTasks=Rn.slice(0,10).map(r=>r.id),n.coins=260,n.xp=330,n.unlockedCrops=["lettuce","basil","tomato","kale","strawberry"],n.towers[1].built=!0,n.towers[1].repaired=!0,n.hydro.systemLessonDone=!0,n.hydro.flowCalibrated=!0,n.towers[2].built=!0,n.towers[2].repaired=!0,n.beds[1].built=!0,n.beds[2].built=!0),t.includes("pro-yard")&&(n.taskIndex=Rn.length,n.completedTasks=Rn.map(r=>r.id),n.coins=420,n.xp=500,n.campaignComplete=!0,n.challengeUnlocked=!0,n.proPip=!0,n.towers.forEach(r=>{r.built=!0,r.repaired=!0}),n.beds.forEach(r=>{r.built=!0}),n.market={built:!0,level:2}),n.level=Ga(n.xp),n}function hu(n=window.localStorage,e=Date.now()){let t=null;try{t=JSON.parse(n.getItem(yo)||"null")}catch{t=null}if(t)return ya(t,e);let i=null;try{i=JSON.parse(n.getItem(Fy)||"null")}catch{i=null}return ya(Vy(Wa(e),i),e)}function Gy(n,e=window.localStorage,t=Date.now(),i=()=>{}){const r=ya({...n,savedAt:t},t);try{e.setItem(yo,JSON.stringify(r)),i(!0)}catch{i(!1)}return r}function Wy(n=window.localStorage,e=Date.now()){const t=Wa(e);try{n.setItem(yo,JSON.stringify(t))}catch{}return t}function ei(n){return Rn[n.taskIndex]||null}function ms(n,e,t,i=null){const r=Te[n];if(e==="bed")return r.bedSeconds*(1-za(t,n)*.03);let s=r.towerSeconds;return i?.irrigationUpgraded&&(s*=.88),Math.max(3,s)}function Pr(n,e=Date.now()){return Yh(n),n.towers.forEach(t=>{t.queue.length&&t.queue.forEach(i=>{(i.startedAt===null||i.readyAt===null)&&(i.startedAt=e,i.readyAt=e+ms(i.crop,"tower",n,t)*1e3)})}),xy(n,e),n.level=Ga(n.xp),n}function $y(n){const e=Object.fromEntries(Qn.map(t=>[t,{queued:0,starter:0,garden:0,basket:0,rack:n.rack[t]||0,sold:n.stats.byCropSold[t]||0,fed:n.stats.byCropFed?.[t]||0,accounted:0}]));return n.towers.forEach(t=>t.queue.forEach(i=>{e[i.crop].queued+=1})),n.carry?.kind==="starter"&&(e[n.carry.crop].starter+=1),n.beds.forEach(t=>t.plants.forEach(i=>{e[i.crop].garden+=1})),n.carry?.kind==="produce"&&n.carry.items.forEach(t=>{e[t].basket+=1}),Object.values(e).forEach(t=>{t.accounted=t.queued+t.starter+t.garden+t.basket+t.rack+t.sold+t.fed}),e}const rf=1024*1024,sf="hydropipFarmBeforeRestore";function Pl(n,e=Date.now()){return JSON.stringify({format:"hydropip-farm",backupVersion:1,gameVersion:Ws,farm:{...n,savedAt:e}},null,2)}function Ll(n,e=Date.now()){if(new TextEncoder().encode(n).length>rf)throw new Error("Backup exceeds the 1 MB limit.");let t;try{t=JSON.parse(n,(r,s)=>{if(["__proto__","prototype","constructor"].includes(r))throw new Error;if(typeof s=="string"&&/[<>"'&`]/.test(s))throw new Error;if(typeof s=="number"&&!Number.isFinite(s))throw new Error;return s})}catch{throw new Error("This is not a valid HydroPip farm backup.")}if(t?.format!==void 0&&(t.format!=="hydropip-farm"||t.backupVersion!==1))throw new Error("Unsupported backup format.");const i=t?.format==="hydropip-farm"?t.farm:t;if(!i||!Number.isInteger(i.version)||i.version<1||i.version>du)throw new Error("Unsupported farm version. Use a backup from this game version or an older one.");if(!Number.isFinite(i.coins)||i.coins<0||!Number.isFinite(i.xp)||i.xp<0||!Number.isInteger(i.taskIndex)||i.taskIndex<0||i.taskIndex>12||!Array.isArray(i.towers)||i.towers.length!==4||!Array.isArray(i.beds)||i.beds.length!==4||!i.seeds||typeof i.seeds!="object"||!i.stats||typeof i.stats!="object")throw new Error("The file is missing required farm data. Your current farm has not changed.");return ya(i,e)}function qy(n,e,t,i=Date.now()){const r=Ll(Pl(e,i),i);return n.setItem(sf,Pl(t,i)),n.setItem(yo,JSON.stringify(r)),r}function Xy(n,e){const t=u=>document.getElementById(u);let i=null,r=0;function s(u,d,p="application/json"){const f=URL.createObjectURL(new Blob([u],{type:p})),g=document.createElement("a");g.href=f,g.download=d,g.click(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}function o(u){t("importStatus").textContent=u}function a(){r++,i=null,t("restoreConfirmation").hidden=!0,t("importFile").value=""}for(const u of document.querySelectorAll("[data-real-build]"))u.href=Ly,u.addEventListener("click",()=>Zn("build_guide_open",{source:u.dataset.realBuild}));t("gameVersion").textContent=Ws,t("exportSave").addEventListener("click",()=>s(Pl(n()),"hydropip-farm-backup.json")),t("importSave").addEventListener("click",()=>{a(),o(""),t("importFile").click()}),t("importFile").addEventListener("change",async u=>{const d=u.target.files[0];if(!d)return;const p=r;try{if(d.size>rf)throw new Error("Backup exceeds the 1 MB limit.");const f=await d.text();if(p!==r)return;const g=Ll(f);i=f,t("restoreSummary").textContent=`Replace this farm with Chapter ${g.chapter+1}, ${g.coins} coins, and ${g.homestead.claimed.length} completed projects? A recovery copy of this farm will be retained.`,t("restoreConfirmation").hidden=!1,t("cancelRestore").focus()}catch(f){a(),o(f.message)}}),t("cancelRestore").addEventListener("click",()=>{a(),o("Restore cancelled. Your farm is unchanged.")}),t("confirmRestore").addEventListener("click",()=>{if(i){try{const u=qy(localStorage,Ll(i),n());e(u)}catch{o("Restore could not be completed. Your pre-restore recovery copy is available below if it was saved. Free browser storage and try again.");return}a(),Zn("farm_restored"),location.reload()}}),t("exportRecovery").addEventListener("click",()=>{try{const u=localStorage.getItem(sf);if(!u)return o("No previous restore recovery copy is available.");s(u,"hydropip-before-restore.json")}catch{o("Browser storage is unavailable.")}});function c(){const u=n();return`HydroPip game report
Version: ${Ws}
Chapter: ${u.chapter+1}; task: ${u.taskIndex}
Viewport: ${innerWidth} x ${innerHeight}
Browser: ${navigator.userAgent}

What happened:
${t("reportNotes").value.trim()||"(Please describe what happened.)"}

No saved-farm contents are attached.`}function l(){const u=c();t("reportPreview").textContent=u,t("emailReport").href=`mailto:${Gd}?subject=${encodeURIComponent(`HydroPip game report ${Ws}`)}&body=${encodeURIComponent(u)}`}return t("reportProblem").addEventListener("click",()=>{t("feedbackForm").hidden=!t("feedbackForm").hidden,l()}),t("reportNotes").addEventListener("input",l),t("downloadReport").addEventListener("click",()=>s(c(),"hydropip-game-report.txt","text/plain")),t("emailReport").hidden=!Gd,{cancelImport:a}}const $d=new URL(""+new URL("pip-pro-celebration-transparent-IQLOdfWW.webp",import.meta.url).href,import.meta.url).href,qd=new URL(""+new URL("rhythm-dance-5VSp4liT.webp",import.meta.url).href,import.meta.url).href;function Yy({balance:n,reducedMotion:e,mobile:t=()=>!1}){const i=document.createElement("div");i.className="reward-effects",i.setAttribute("aria-hidden","true");const r=document.createElement("section");r.className="reward-notice",r.hidden=!0,r.setAttribute("aria-label","Goal celebration");const s=document.createElement("button");s.type="button",s.className="reward-dismiss",s.textContent="×",s.setAttribute("aria-label","Dismiss celebration");const o=document.createElement("img");o.alt="";const a=document.createElement("div");a.className="reward-copy";const c=document.createElement("span"),l=document.createElement("h3"),u=document.createElement("p");a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.append(c,l,u),r.append(s,o,a),document.body.append(i,r);let d;const p=new Set,f=()=>e()||matchMedia("(prefers-reduced-motion: reduce)").matches;function g(P,D,b,w=!1){const C=P.animate(D,b);p.add(C);const L=()=>{p.delete(C),w&&P.remove()};return C.onfinish=L,C.oncancel=L,C}function x(){clearTimeout(d),r.hidden=!0,o.getAnimations().forEach(P=>P.cancel())}s.addEventListener("click",x),document.addEventListener("keydown",P=>{P.key==="Escape"&&x()});function v(){for(const P of p)P.cancel();p.clear(),i.replaceChildren()}document.addEventListener("visibilitychange",()=>{document.hidden&&(v(),x())}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{f()&&v()});function S(P,D){if(!Number.isFinite(P)||P<=0||document.hidden)return;const b=n.getBoundingClientRect(),w={x:b.left+b.width/2,y:b.top+b.height/2},C=Math.max(70,Math.min(innerWidth-70,D?.x??innerWidth/2)),L=Math.max(110,Math.min(innerHeight-100,D?.y??innerHeight/2)),k=document.createElement("strong");if(k.className="reward-coin-label",k.textContent=`+${P.toLocaleString()} coins`,k.style.left=`${C}px`,k.style.top=`${L}px`,i.querySelectorAll(".reward-coin-label").length>=3&&i.querySelector(".reward-coin-label").remove(),i.append(k),f()){setTimeout(()=>k.remove(),1800);return}g(k,[{opacity:1,translate:"0 0"},{opacity:1,offset:.7},{opacity:0,translate:"0 -36px"}],{duration:1700},!0);const O=Math.min(8,Math.max(3,Math.ceil(P/5)),24-i.querySelectorAll(".reward-coin").length);for(let B=0;B<O;B++){const F=document.createElement("i");F.className="reward-coin",F.textContent="P",F.style.left=`${C}px`,F.style.top=`${L}px`,i.append(F);const Y=w.x-C,G=w.y-L;g(F,[{transform:"translate(-50%,-50%) scale(.5)",opacity:0},{transform:`translate(${(B-O/2)*13}px,-40px) scale(1)`,opacity:1,offset:.24},{transform:`translate(${Y}px,${G}px) scale(.65)`,opacity:1,offset:.9},{transform:`translate(${Y}px,${G}px) scale(.2)`,opacity:0}],{duration:1050,delay:B*60,fill:"backwards",easing:"cubic-bezier(.25,.6,.4,1)"},!0)}n.getAnimations().forEach(B=>B.cancel()),g(n,[{color:"#ffe678",scale:"1"},{color:"#ffe678",scale:"1.2",offset:.55},{scale:"1"}],{duration:550,delay:850})}function y(){if(f()||document.hidden)return;i.querySelectorAll(".reward-confetti").forEach(D=>{D.getAnimations().forEach(b=>b.cancel()),D.remove()});const P=t()||innerWidth<620?22:42;for(let D=0;D<P;D++){const b=document.createElement("i");b.className="reward-confetti",b.style.left=`${8+Math.random()*84}%`,b.style.background=["#ffd454","#f4778b","#66d9db","#bde875","#fff6d9"][D%5],i.append(b),g(b,[{transform:"translateY(-30px) rotate(0deg)",opacity:0},{opacity:1,offset:.12},{opacity:1,offset:.7},{transform:`translate(${(Math.random()-.5)*180}px,${innerHeight*.8}px) rotate(${D%2?540:-540}deg)`,opacity:0}],{duration:2200+Math.random()*600,delay:Math.random()*350,fill:"backwards"},!0)}}function _(P){f()||g(P,[{transform:"rotate(-8deg) translateY(0)"},{transform:"rotate(14deg) translateY(-12px)",offset:.25},{transform:"rotate(-12deg) translateY(-4px)",offset:.5},{transform:"rotate(8deg) translateY(-10px)",offset:.75},{transform:"rotate(-8deg) translateY(0)"}],{duration:1250,iterations:3,easing:"ease-in-out"})}function R({title:P,detail:D,major:b=!1,rhythm:w=!1}){t()&&!b||document.hidden||(x(),r.classList.toggle("is-major",b),c.textContent=b?"Homestead milestone!":"Goal complete!",l.textContent=P,u.textContent=D,o.src=w?qd:$d,r.hidden=!1,b&&y(),w?_(o):f()||g(o,[{transform:"scale(.8)"},{transform:"scale(1.06)",offset:.7},{transform:"scale(1)"}],{duration:450}),d=setTimeout(x,t()?3500:b?6500:3600))}function A(P,D){x();const b=P.querySelector(".chapter-reward-art img");b.getAnimations().forEach(w=>w.cancel()),b.src=D?qd:$d,b.alt=D?"Rhythm Pip in his breakdance freeze with a boombox":"Pro Pip cheering with confetti",D&&_(b),y()}return{coins:S,celebrate:R,chapter:A,dismiss:x,clearMotion:v}}const ha=24,so=6,ba=30,jy=.01;function $a(n){return n.towers.filter(e=>e.built&&e.repaired).reduce((e,t)=>e+t.queue.length,0)}function bo(n){const e=n.hydro;return{water:e.water<=ba,mix:e.water>0&&!e.mixChecked,check:Un(n)&&e.mixChecked&&!e.flowChecked&&!e.lineClogged&&n.towers.some(t=>t.built)&&!n.towers.some(t=>t.built&&!t.repaired)}}function of(n){if(!n.hydro.water)return"Stopped: tank empty";if(!Un(n))return"Stopped: circulate batch";if(!$a(n))return"Idle: towers empty";const e=n.hydro.feedPhase||0;return e<so?`${n.hydro.lineClogged?"Restricted feed":"Feeding towers"} / ${Math.ceil(so-e)}s`:`Next feed in ${Math.ceil(ha-e)}s`}function Un(n){return n.hydro.water>0&&n.hydro.batchMixed!==!1}function Xd(n){return Un(n)&&n.hydro.flowCalibrated&&!n.hydro.lineClogged}function Jy(n){return Un(n)&&(n.hydro.feedPhase||0)<so&&$a(n)>0}function Ky(n,e){const t=n.hydro;if(!bo(n)[e])return!1;if(e==="water"){if(t.water>ba)return!1;t.water=100,t.batchMixed=!1,t.mixChecked=!1,t.flowChecked=!1,t.feedPhase=0,t.batchNumber=(t.batchNumber||1)+1}else if(e==="mix"){if(t.water<=0||t.mixChecked)return!1;t.batchMixed=!0,t.mixChecked=!0}else if(e==="check"){if(!Un(n)||!t.mixChecked||t.flowChecked||t.lineClogged||!n.towers.some(i=>i.built)||n.towers.some(i=>i.built&&!i.repaired))return!1;t.flowChecked=!0,t.flowCalibrated=!0,t.systemLessonDone=!0}else return!1;return!0}function Zy(n,e,t=Date.now(),i=1){const r=Math.max(0,Math.min(1,e)),s=n.towers.filter(u=>u.built&&u.repaired).flatMap(u=>u.queue);if(!s.length||!r)return;if(!Un(n)){s.filter(u=>u.readyAt>t-r*1e3).forEach(u=>{u.readyAt+=r*1e3,u.startedAt!==null&&(u.startedAt+=r*1e3)});return}const o=n.hydro,a=o.feedPhase||0,c=u=>Math.floor(u/ha)*so+Math.min(u%ha,so),l=c(a+r)-c(a);o.feedPhase=(a+r)%ha,o.water=Math.max(0,o.water-l*jy*s.length*i*(o.lineClogged?.5:1))}const zt=(n,e,t,i,r="",s={})=>({id:n,title:e,text:t,target:i,selector:r,...s}),Kr=n=>`[data-command="${n}"]`;function Yd(n,e=Date.now()){const t=Al(n);if(["sale","expansion","upgrade"].every(g=>t.includes(g)))return zt("complete","The farm is yours!","You grew, sold, and expanded. More projects are waiting in Goals.",null,"",{complete:!0});if(!n.towers[0].repaired)return zt("repair","Let's bring this farm to life","Repair Tower 1. The first repair is free.","tower-0",Kr("repair-tower-0"));const i=n.beds.findIndex(g=>g.built&&g.plants.length<g.capacity);if(n.carry?.kind==="starter")return i>=0?zt("transplant","Next stop: the garden","Transplant this starter into a bed. It needs to finish growing in soil before we can sell it.",`bed-${i}`,Kr(`transplant-${i}`)):zt("return","No garden space yet","Return this starter to its tower, then harvest a finished bed to make room.",`tower-${n.carry.sourceTower}`,Kr(`return-${n.carry.sourceTower}`));const r=n.carry?.kind==="produce"?n.carry.items:[],s=n.orders.filter(g=>g.status==="waiting"),o=s.find(g=>r.filter(x=>x===g.crop).length>=g.amount);if(r.length){if(t.includes("stage")&&o)return zt("sell","Meet your customer",`Take ${o.amount} ${Te[o.crop].label} to ${o.customer}. This is where your harvest earns coins.`,"market","",{orderId:o.id,action:"Deliver"});if(!t.includes("stage")||!o)return zt("stage","Make room in your basket","Store your harvest on the rack. It stays there until a customer wants it, and your hands are free for starters.","rack",`[data-store-crop="${r[0]}"]`)}if(!Un(n)){const x=bo(n).water?"water":"mix";return zt("service","Our towers need water and feed",x==="water"?"Refill the shared reservoir, then mix its nutrients before planting more.":"Mix nutrients into the shared reservoir. It feeds every tower together.","reservoir",`[data-service="${x}"]`)}if(n.hydro.lineClogged)return zt("filter","Let's restore the flow","Clear the feed filter so water can reach the towers properly.","filter","[data-flush-line]");const a=n.beds.findIndex(g=>g.built&&g.plants.some(x=>x.readyAt<=e));if(a>=0&&r.length<Ot(n).basket){const g=n.beds[a].plants.find(x=>x.readyAt<=e);return zt("harvest","Ready for the basket",`Harvest the finished ${Te[g.crop].label}. Garden produce can be stored or sold.`,`bed-${a}`,`[data-harvest-crop="${g.crop}"]`)}const c=n.towers.findIndex(g=>g.built&&Bi(g,e));if(c>=0){if(i>=0){const x=Bi(n.towers[c],e);return zt("pickup","A starter is ready!","Pick up one starter from the tower. Each planted layer becomes one garden crop.",`tower-${c}`,`[data-pickup-job="${x.id}"]`)}const g=n.beds.findIndex(x=>x.built&&x.plants.length);return zt("beds-full","The garden is full","Leave starters in their towers for now. Harvest a bed when its crops finish, then transplant another starter.",`bed-${Math.max(0,g)}`,"",{waiting:!0})}if(t.includes("expansion")&&!t.includes("upgrade")&&n.coins>=gt.bedUpgrade[0])return zt("upgrade","Invest in a bigger garden",`Buy Bed 1's extra plot for ${gt.bedUpgrade[0]} coins at the Farm Shop. Your second tower unlocked this upgrade.`,"workshop",Kr("upgrade-bed-0"));if(n.taskIndex===3&&!n.market.built&&n.coins>=gt.market)return zt("market","Let's open for business",`Build the produce table for ${gt.market} coins. Customers will start visiting.`,"market",Kr("build-market"));if(n.taskIndex===5&&!n.towers[1].built&&n.coins>=gt.tower[1])return zt("expansion","Your first expansion",`Build Tower 2 for ${gt.tower[1]} coins. It also opens a second garden bed.`,"tower-1",Kr("build-tower-1"));const l=Dn(n)||s.find(g=>xn(n,g,e).load)||s[0];if(l&&xn(n,l,e).load)return zt("load","Someone wants your harvest",`Collect ${Te[l.crop].label} from the rack for ${l.customer}, then deliver it in person.`,"rack","",{orderId:l.id,action:"Collect order"});if(n.market.built&&!l)return zt("customers","The next neighbor is on the way","Customers visit in waves. Your rack keeps the harvest safe between visits.","market","",{waiting:!0});let u=l?.crop||"lettuce",d=l?Math.max(1,l.amount-xn(n,l,e).stored):2;!n.market.built&&n.taskIndex>=2&&(u=n.stats.byCropHarvested.lettuce>=2?"basil":"lettuce",d=Math.max(1,2-n.stats.byCropHarvested[u]));const p=[];if(n.towers.forEach((g,x)=>g.queue.filter(v=>v.crop===u).forEach(v=>p.push({target:`tower-${x}`,...v}))),n.beds.forEach((g,x)=>g.plants.filter(v=>v.crop===u).forEach(v=>p.push({target:`bed-${x}`,...v}))),p.length>=d||p.length&&i<0){const g=p.sort((x,v)=>x.readyAt-v.readyAt)[0];return zt("growing","Let those roots grow",g.target.startsWith("tower")?`${Te[u].label} is growing in the tower. When its layer is ready, we'll move it to soil.`:`${Te[u].label} is finishing in the bed. The harvest button lights up when it's ready.`,g.target,"",{waiting:!0})}const f=n.towers.findIndex((g,x)=>g.built&&g.repaired&&Ms(g,n.carry,x).length);if(f<0)return zt("tower-full","All layers are planted","Wait for a starter, then move it to an open garden bed. No more seeds are needed yet.","tower-0","",{waiting:!0});if(!n.seeds[u]){const g=Va(n,u);return!g.available&&uu(n)?zt("rescue","Bram can lend a hand","Claim the free emergency lettuce packet. Grow and sell it to get back on your feet.","vault","[data-rescue-seeds]"):g.available?zt("seeds","Visit Bram's seed shop",g.tutorial?`Claim your first ${Te[u].label} packet for free under the BUY SEEDS sign. The seeds go into your vault.`:`Buy ${Te[u].label} seeds for ${g.price} coins. Bram puts the packet in your vault.`,"vault",`[data-collect-crop="${u}"]`):zt("seed-budget","Let's use what we have",`${g.reason}. Sell stored or growing produce before buying more packets.`,"market")}return zt("plant","Plant a tower layer",`Choose ${Te[u].label} at Tower ${f+1}. One seed fills one layer with four leafy pots.`,`tower-${f}`,`[data-queue-crop="${u}"]`)}function Qy({host:n,getState:e,save:t,focus:i,pursue:r,visible:s}){const o=document.createElement("aside");o.id="pipCoach",o.className="pip-coach",o.hidden=!0,o.setAttribute("aria-label","Pip's first grow"),o.innerHTML=`<img src="${new URL(""+new URL("pip-mascot-transparent-DujOxSaL.webp",import.meta.url).href,import.meta.url).href}" alt="Pip"><div class="coach-copy" aria-live="polite" aria-atomic="true"><span>PIP'S FIRST GROW</span><strong id="coachTitle"></strong><p id="coachText"></p></div><button id="coachMinimize" class="coach-close" type="button" title="Minimize Pip's help" aria-label="Minimize Pip's help">&#215;</button><div class="coach-actions"><button id="coachGo" type="button">Show me</button><button id="coachSkip" type="button">Skip guide</button></div><div class="coach-confetti" aria-hidden="true">${Array.from({length:8},(y,_)=>`<i style="--piece:${_}"></i>`).join("")}</div>`;const a=document.createElement("button");a.id="coachBubble",a.className="coach-bubble",a.type="button",a.hidden=!0,a.title="Resume Pip's help",a.setAttribute("aria-label","Resume Pip's help"),a.innerHTML=`<img src="${new URL(""+new URL("pip-head-transparent-CKWFf6EM.webp",import.meta.url).href,import.meta.url).href}" alt="">`,n.append(o,a);const c=o.querySelector("#coachTitle"),l=o.querySelector("#coachText"),u=o.querySelector("#coachGo");let d=null,p=null,f=0,g="",x="",v=!1;function m(){e().tutorial.coach.enabled=!1,p=null,t("coach_skip"),S()}o.querySelector("#coachSkip").onclick=m,o.querySelector("#coachMinimize").onclick=()=>{e().tutorial.coach.minimized=!0,t("coach_minimize"),S()},a.onclick=()=>{e().tutorial.coach.minimized=!1,t("coach_resume"),S()},u.onclick=()=>{if(d=Yd(e()),d.complete)return m();v=!0,d.orderId?r(d.orderId):d.target&&i(d.target),S()};function S(){const y=e(),_=y.tutorial.coach,R=_.enabled&&s();if(o.hidden=!R||_.minimized,a.hidden=!R||!_.minimized,n.classList.toggle("has-pip-coach",!o.hidden),document.querySelectorAll(".coach-target").forEach(w=>w.classList.remove("coach-target")),!_.enabled)return;const P=Al(y).filter(w=>!_.seen.includes(w));if(P.length&&(_.seen=[...new Set([..._.seen,...P])],R&&!_.minimized&&(p=lu[P.at(-1)],f=performance.now()+1800),t("coach_milestone")),!R)return;d=Yd(y);const D=p&&performance.now()<f;o.classList.toggle("is-celebrating",!!D),o.classList.toggle("reduce-motion",y.settings.reducedMotion),o.dataset.step=d.id;const b=D?p:d.title;if(b!==g&&(c.textContent=b,g=b),d.text!==x&&(l.textContent=d.text,x=d.text),u.textContent=d.complete?"Keep growing":d.action||(d.waiting?"Take a look":"Show me"),!o.hidden&&d.selector){const w=[...document.querySelectorAll(d.selector)].find(C=>!C.disabled&&C.getClientRects().length&&!C.closest("[hidden]"));w&&(w.classList.add("coach-target"),v&&(w.scrollIntoView({block:"nearest",behavior:"instant"}),v=!1))}}return{update:S,enable(){const y=e();y.tutorial.coach.enabled=!0,y.tutorial.coach.minimized=!1,y.tutorial.coach.seen=[...new Set([...y.tutorial.coach.seen,...Al(y)])],p=null,t("coach_enabled"),S()},disable:m}}function eb({urls:n,settings:e,canPlay:t,onSystemMute:i}){const r=new Map,s=new Set,o=new WeakMap;let a=document.hidden;const c=()=>!a&&!document.hidden&&t()&&e().soundEnabled!==!1;function l(m){m.muted=!0,m.pause(),o.delete(m)}function u(){r.forEach(l),s.forEach(l),s.clear(),navigator.mediaSession&&(navigator.mediaSession.playbackState="paused")}function d(m,S,y=!1){if(!c()||S<=0)return l(m);if(m.volume=S,m.muted=!1,!m.paused||o.has(m))return;const _={};o.set(m,_),Promise.resolve(m.play()).then(()=>{if(!c()||m.muted||(y?e().musicVolume:e().effectsVolume)<=0)return l(m);o.get(m)===_&&(o.delete(m),y&&navigator.mediaSession&&(navigator.mediaSession.playbackState="playing"))}).catch(()=>{o.get(m)===_&&(l(m),s.delete(m))})}function p(){if(!(!c()||e().musicVolume<=0))for(const[m,S]of[["music",1],["ambience",.56]]){if(!r.has(m)){const y=new Audio(n[m]);y.loop=!0,r.set(m,y)}d(r.get(m),e().musicVolume*S,!0)}}function f(m){if(!c()||e().effectsVolume<=0||!n[m])return;if(s.size>=12){const y=s.values().next().value;l(y),s.delete(y)}const S=new Audio(n[m]);s.add(S),S.addEventListener("ended",()=>s.delete(S),{once:!0}),S.addEventListener("error",()=>{l(S),s.delete(S)},{once:!0}),d(S,e().effectsVolume)}function g(){if(!c())return u();r.forEach((m,S)=>{e().musicVolume<=0?l(m):m.volume=e().musicVolume*(S==="music"?1:.56)}),s.forEach(m=>{e().effectsVolume<=0?(l(m),s.delete(m)):m.volume=e().effectsVolume})}function x(){a=!0,u()}function v(){a=document.hidden}window.addEventListener("blur",x),window.addEventListener("pagehide",x),document.addEventListener("freeze",x),window.addEventListener("focus",v),window.addEventListener("pageshow",v),document.addEventListener("visibilitychange",()=>document.hidden?x():v());for(const m of["pause","stop"])try{navigator.mediaSession?.setActionHandler(m,()=>{u(),i()})}catch{}return{start:p,effect:f,update:g,stop:u}}const af=matchMedia("(max-width: 620px), (pointer: coarse) and (max-width: 1200px), (pointer: coarse) and (max-height: 600px)"),vt=()=>af.matches;document.body.classList.toggle("mobile-ui",vt());function tb({canMove:n,onStart:e,onMove:t,onLayout:i,closePanels:r}){const s=document.getElementById("thumbstick"),o=s.querySelector("i");let a=null;function c(){const d=a;a=null,d!==null&&s.hasPointerCapture(d)&&s.releasePointerCapture(d),o.style.transform="translate(0px, 0px)",s.classList.remove("is-active"),t(0,0)}function l(d){if(d.pointerId!==a)return;if(!n())return c();const p=s.getBoundingClientRect(),f=p.width*.3,g=d.clientX-p.left-p.width/2,x=d.clientY-p.top-p.height/2,v=Math.hypot(g,x),m=v>f?f/v:1;o.style.transform=`translate(${g*m}px, ${x*m}px)`;const S=Math.min(1,Math.max(0,(v/f-.12)/.88));t(v?g/v*S:0,v?x/v*S:0)}s.addEventListener("pointerdown",d=>{a!==null||!n()||!vt()||(d.preventDefault(),e(),a=d.pointerId,s.setPointerCapture(a),s.classList.add("is-active"),l(d))}),s.addEventListener("pointermove",l);for(const d of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(d,p=>{p.pointerId===a&&c()});s.addEventListener("contextmenu",d=>d.preventDefault());for(const d of document.querySelectorAll(".task-drawer,.interaction-panel,.order-drawer")){let p=null;d.addEventListener("pointerdown",f=>{!vt()||!f.target.closest("header")||f.target.closest("button")||(p={id:f.pointerId,x:f.clientX,y:f.clientY},d.setPointerCapture(f.pointerId))}),d.addEventListener("pointerup",f=>{if(!p||p.id!==f.pointerId)return;const g=f.clientX-p.x,x=f.clientY-p.y;(innerWidth>620&&innerWidth>innerHeight?g>55&&g>Math.abs(x):x>45&&x>Math.abs(g))&&r(),p=null}),d.addEventListener("pointercancel",()=>{p=null})}function u(){c(),document.body.classList.toggle("mobile-ui",vt()),i()}return af.addEventListener("change",u),window.addEventListener("resize",u),window.visualViewport?.addEventListener("resize",u),{reset:c}}function nb({onOpen:n,onExit:e,onLeave:t,onResize:i}){const r=he=>document.getElementById(he),s=r("displayOverlay"),o=r("fullscreenButton"),a=r("exitFullscreen"),c=r("landscapeNotice"),l=matchMedia("(orientation: landscape)"),u=matchMedia("(display-mode: standalone), (display-mode: fullscreen)"),d=()=>navigator.standalone===!0||u.matches&&!document.fullscreenElement,p=()=>document.fullscreenEnabled===!0&&typeof document.documentElement.requestFullscreen=="function";let f=null,g=null,x=null,v=!1,m=!1,S=!1,y="",_=!1,R=null,A=!1,P=!1,D="",b=null;const w=[...document.querySelectorAll("[data-install-game]")],C=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;let L=!1;try{L=sessionStorage.getItem("hydropipLandscapeHint")==="seen"}catch{}function k(){c.hidden=!0,clearTimeout(x)}function O(){const he=d(),Ge=p(),et=!he&&(_||!Ge);if(r("displayTitle").textContent=he?"App view":"Landscape play",r("displayMessage").textContent=y||(he?"The game is already open without browser bars.":Ge?l.matches?"Landscape is ready for full screen.":"Rotate your phone to landscape for the widest farm view.":"This browser cannot put the whole game into full screen. Landscape still gives you more room."),r("displayInstructions").textContent=he?"Rotate upright to pause and save. Use the app switcher to close this app, or choose Return to HydroPip from Pause.":Ge?"Tap Full screen after rotating. Rotate upright to pause and exit full screen, or use the exit button at any time.":"On iPhone: open this game in Safari, tap Share, then Add to Home Screen. Turn on Open as Web App if offered, and launch the new icon. Rotate upright to pause; use the app switcher to close it.",r("enterFullscreen").hidden=he||!Ge,r("enterFullscreen").disabled=v||vt()&&!l.matches,r("displaySaveNote").hidden=he||Ge,r("displayBackup").hidden=he||Ge,r("installSteps").hidden=!et||P,r("installGame").hidden=!et||!R||P,r("installGame").disabled=A,r("keepWindowed").textContent=b?"Back":"Keep playing here",et){r("displayTitle").textContent="Add HydroPip",r("displayMessage").textContent=D||"Keep Pip on your Home Screen. No App Store needed.",r("displayInstructions").textContent=P?"Open the new HydroPip icon on your Home Screen or in your apps.":C?"On iPhone, use Safari to Add to Home Screen.":R?"Your browser can install HydroPip. Confirm the next browser prompt.":"Use your browser menu to Install app or Add to Home Screen. If neither appears, open this game in Safari on iPhone or Chrome on Android.";const $=C?["Open this game in Safari, then tap Share.","Choose Add to Home Screen. Turn on Open as Web App if offered.","Tap Add, then open the HydroPip icon."]:R?["Tap Install game below, then confirm Install.","Open the HydroPip icon."]:["Open the browser menu.","Choose Install app or Add to Home Screen, then confirm."];r("installSteps").replaceChildren(...$.map(ve=>{const ue=document.createElement("li");return ue.textContent=ve,ue})),r("displaySaveNote").hidden=P,r("displayBackup").hidden=P,r("enterFullscreen").hidden=!0}}function B(){k(),s.hidden&&(g=document.activeElement,f=n()),s.hidden=!1,O(),r("closeDisplay").focus()}function F(he=!0){s.hidden||(s.hidden=!0,b&&(b.hidden=!1,b=null),f?.(),f=null,he&&g?.isConnected&&g.focus())}function Y(){m=!1,F(!1),k(),e()}async function G(){if(!v){if(!p()||d()||vt()&&!l.matches){y="",B();return}v=!0;try{await document.documentElement.requestFullscreen({navigationUI:"hide"}),y="",F(),k(),ae()}catch{y="Full screen was not allowed. You can keep playing here, or try again from your browser.",B()}finally{v=!1,s.hidden||O()}}}async function re(){if(Y(),document.fullscreenElement)try{await document.exitFullscreen()}catch{y="Use your browser full-screen exit control to return.",B()}}function ae(){const he=!!document.fullscreenElement,Ge=d();w.forEach(Be=>{Be.hidden=Ge||P,Be.textContent=R?"Install HydroPip":"Add to Home Screen"}),document.body.classList.toggle("is-app-window",he||Ge),o.hidden=he||Ge,a.hidden=!he&&!Ge,a.setAttribute("aria-label",he?"Exit full screen and pause":"Pause and leave game"),a.title=he?"Exit full screen and pause":"Pause and leave game",o.textContent=he||Ge?"×":"⛶";const et=he?"Exit full screen and pause":Ge?"Pause and leave game":"Full screen options";o.setAttribute("aria-label",et),o.title=et,o.setAttribute("aria-pressed",String(he));const $=document.activeElement?.matches("input,textarea,select");vt()&&!$&&(he||Ge)&&l.matches&&(m=!0);const ve=vt()&&!$&&!l.matches&&m,ue=S&&!he;S=he,ve?re():ue&&Y(),s.hidden||O(),c.hidden||(r("landscapeNoticeText").textContent=l.matches?p()?"Tap for full screen. Rotate upright to pause.":"Landscape play. View full-screen options.":"Rotate for a wider farm."),requestAnimationFrame(i)}w.forEach(he=>he.addEventListener("click",()=>{_=!0,y="",D="",b=he.closest(".modal-overlay"),B(),b&&(b.hidden=!0)})),window.addEventListener("beforeinstallprompt",he=>{he.preventDefault(),R=he,ae()}),window.addEventListener("appinstalled",()=>{P=!0,R=null,D="HydroPip is installed.",ae()}),r("installGame").addEventListener("click",async()=>{if(!R||A)return;const he=R;R=null,A=!0;try{D=(await he.prompt()||await he.userChoice)?.outcome==="accepted"?"Install accepted. Look for the HydroPip icon when your browser finishes.":"Not installed. You can keep playing here and add it later."}catch{D="Installation could not open. Use the browser menu, or keep playing here."}finally{A=!1,ae()}});function Ce(){if(!(L||!vt()||document.hidden||document.querySelector(".modal-overlay:not([hidden])"))){L=!0;try{sessionStorage.setItem("hydropipLandscapeHint","seen")}catch{}d()||(c.hidden=!1,ae(),x=setTimeout(k,7e3))}}o.addEventListener("click",()=>{_=!1,document.fullscreenElement||d()?re():G()}),a.addEventListener("click",()=>{re()}),r("landscapeOptions").addEventListener("click",()=>{_=!1,G()}),r("dismissLandscapeNotice").addEventListener("click",k),r("enterFullscreen").addEventListener("click",()=>{G()}),r("closeDisplay").addEventListener("click",()=>F()),r("keepWindowed").addEventListener("click",()=>F()),r("displayBackup").addEventListener("click",()=>{F(!1),r("settingsOverlay").hidden&&r("settingsButton").click(),r("exportSave").scrollIntoView({block:"center"}),r("exportSave").focus()}),r("leaveGame").addEventListener("click",t),r("beginCampaign").addEventListener("click",Ce),document.addEventListener("fullscreenchange",ae),l.addEventListener("change",ae),u.addEventListener("change",ae),window.addEventListener("resize",ae),document.addEventListener("visibilitychange",()=>{document.hidden&&k()}),document.addEventListener("keydown",he=>{if(!s.hidden&&(he.key==="Escape"&&(he.preventDefault(),he.stopImmediatePropagation(),F()),he.key==="Tab")){const Ge=[...s.querySelectorAll("button:not(:disabled),a[href]")].filter(ve=>ve.getClientRects().length),et=Ge[0],$=Ge.at(-1);he.shiftKey&&document.activeElement===et?(he.preventDefault(),$.focus()):!he.shiftKey&&document.activeElement===$&&(he.preventDefault(),et.focus())}},!0),ae(),requestAnimationFrame(Ce)}function ib(n,e,t=Date.now()){if(n.chapter<1)return!1;const i=n.towers.filter(o=>o.built&&o.repaired).flatMap(o=>o.queue.filter(a=>a.readyAt>t));if(!i.length)return!1;const r=Math.max(0,Math.min(e,1)),s=n.hydro;return s.lineClogged?(i.forEach(o=>{o.readyAt+=r*500}),!1):(s.lineRunSeconds+=r,s.lineRunSeconds<s.lineClogAfter?!1:(s.lineClogged=!0,!0))}function rb(n,e=Math.random){return n.hydro.lineClogged?(n.hydro.lineClogged=!1,n.hydro.lineRunSeconds=0,n.hydro.lineClogAfter=240+Math.floor(e()*121),!0):!1}const cf=["127.0.0.1","localhost"].includes(location.hostname)&&new URLSearchParams(location.search).has("test"),oo=cf&&!new URLSearchParams(location.search).has("realtime")?.012:1,Ss=vt(),wo=/HeadlessChrome/i.test(navigator.userAgent),sb={"seed-pickup":new URL(""+new URL("seed-pickup-CAHmd7zc.wav",import.meta.url).href,import.meta.url).href,plant:new URL(""+new URL("plant-OZHmKUrR.wav",import.meta.url).href,import.meta.url).href,pickup:new URL(""+new URL("pickup-BP6zBWsE.wav",import.meta.url).href,import.meta.url).href,transplant:new URL(""+new URL("transplant-ByuaeTUQ.wav",import.meta.url).href,import.meta.url).href,harvest:new URL(""+new URL("harvest-BPj-n7q9.wav",import.meta.url).href,import.meta.url).href,rack:new URL(""+new URL("rack-BXIXSV4Z.wav",import.meta.url).href,import.meta.url).href,return:new URL(""+new URL("return-B7_saD0o.wav",import.meta.url).href,import.meta.url).href,sale:new URL(""+new URL("sale-DHHLIj-t.wav",import.meta.url).href,import.meta.url).href,repair:new URL(""+new URL("repair-BH8WY1JO.wav",import.meta.url).href,import.meta.url).href,build:new URL(""+new URL("build-DlE-ni3d.wav",import.meta.url).href,import.meta.url).href,"level-up":new URL(""+new URL("level-up-Cr_FX5st.wav",import.meta.url).href,import.meta.url).href,"task-complete":new URL(""+new URL("task-complete-kxblrCmv.wav",import.meta.url).href,import.meta.url).href,"chapter-complete":new URL(""+new URL("chapter-complete-B0bpPvE9.wav",import.meta.url).href,import.meta.url).href,error:new URL(""+new URL("error-BplsGajU.wav",import.meta.url).href,import.meta.url).href,"order-reject":new URL(""+new URL("order-reject-w7AxRbDQ.wav",import.meta.url).href,import.meta.url).href,service:new URL(""+new URL("service-DnymfeYl.wav",import.meta.url).href,import.meta.url).href,music:new URL(""+new URL("garden-loop-_0sf0c8-.wav",import.meta.url).href,import.meta.url).href,ambience:new URL(""+new URL("farm-ambient-BpMfQsJu.wav",import.meta.url).href,import.meta.url).href},ee=n=>document.querySelector(n),nn=ee("#campaignScene"),ob=ee("#farmStage"),qa=ee("#objectiveBar"),ti=ee("#taskDrawer"),kn=ee("#homesteadDrawer"),ni=ee("#interactionPanel"),cn=ee("#interactionContent"),ln=ee("#orderDrawer"),_n=ee("#welcomeOverlay"),ab=ee("#pauseOverlay"),rn=ee("#chapterOverlay"),xi=ee("#settingsOverlay"),Lr=ee("#resetOverlay"),Es=ee("#actionButton"),Sr=ee("#marketChip"),ao=ee("#campaignMessage"),lf=ee("#carryChip"),Re={coins:ee("#coinValue"),level:ee("#levelValue"),xp:ee("#xpValue"),xpFill:ee("#xpFill"),chapter:ee("#chapterValue"),objectiveChapter:ee("#objectiveChapter"),objectiveTitle:ee("#objectiveTitle"),objectiveProgress:ee("#objectiveProgress"),taskChapter:ee("#taskChapter"),taskTitle:ee("#taskTitle"),taskStory:ee("#taskStory"),primaryTaskTitle:ee("#primaryTaskTitle"),primaryTaskDetail:ee("#primaryTaskDetail"),primaryTaskReward:ee("#primaryTaskReward"),chapterTaskList:ee("#chapterTaskList"),interactionKicker:ee("#interactionKicker"),interactionTitle:ee("#interactionTitle"),interactionSummary:ee("#interactionSummary"),orderList:ee("#orderList"),rackSummary:ee("#rackSummary"),carryKind:ee("#carryKind"),carryContents:ee("#carryContents"),chapterResultKicker:ee("#chapterResultKicker"),chapterResultTitle:ee("#chapterResultTitle"),chapterResultSummary:ee("#chapterResultSummary"),chapterCoins:ee("#chapterCoins"),chapterXp:ee("#chapterXp"),chapterUnlock:ee("#chapterUnlock"),musicValue:ee("#musicValue"),effectsValue:ee("#effectsValue"),marketChipCustomer:ee("#marketChipCustomer"),marketChipDemand:ee("#marketChipDemand")},nt={vault:new U(-11,0,-5),reservoir:new U(-11,0,2.6),filter:new U(-9,0,4.5),market:new U(11,0,-4.4),rack:new U(8,0,-5),workshop:new U(11,0,5),composter:new U(-7,0,6.9),coop:new U(2,0,6.9),rainTank:new U(-12,0,6.5),"tower-0":new U(-7,0,2.4),"tower-1":new U(-3,0,2.4),"tower-2":new U(1,0,2.4),"tower-3":new U(5,0,2.4),"bed-0":new U(-7,0,-3.2),"bed-1":new U(-3,0,-3.2),"bed-2":new U(1,0,-3.2),"bed-3":new U(5,0,-3.2)};let h=Pr(hu());const pi=Yy({balance:Re.coins,reducedMotion:()=>h.settings.reducedMotion,mobile:vt});let uf=null;const wa={x:0,z:0};let Ma=!1;const Sa=fy(kn,Te,zf);let Ct=!1,kt=null,ui=null,zn=null,di=null;const $s=[],Dc=new Map,Pi=hy;let jd=performance.now(),Jd=0,df=performance.now(),fa=0,Bs=null;const Ii=eb({urls:sb,settings:()=>h.settings,canPlay:()=>!Ct&&_n.hidden&&xi.hidden&&rn.hidden&&Lr.hidden,onSystemMute:()=>{h.settings.soundEnabled=!1,As(),Xe("system_mute")}});let Kn=1,ta=new U(0,0,0),co=[],Hn=1,wn=1,Dl=null,hf="",Ea=wo?"software-test":Ss?"mobile":"desktop",Ic=performance.now(),Uc=0;const gn={left:!1,right:!1,up:!1,down:!1},qs=[],Ta=Qy({host:ob,getState:()=>h,save:Xe,focus:Xt,pursue:Pf,visible:()=>!Ct&&h.tutorial.welcomeSeen&&_n.hidden&&rn.hidden&&xi.hidden&&Lr.hidden&&ti.hidden&&kn.hidden});let Kd=0;const bt=new Z_({antialias:!Ss&&!wo,powerPreference:"high-performance"});bt.setPixelRatio(Math.min(window.devicePixelRatio||1,wo?1:Ss?1.25:1.55));bt.outputColorSpace=Qt;bt.toneMapping=nh;bt.toneMappingExposure=1.08;bt.shadowMap.enabled=!Ss&&!wo;bt.shadowMap.type=eh;nn.appendChild(bt.domElement);const Aa=document.createElement("div");Aa.className="world-labels";nn.appendChild(Aa);const Ca=document.createElement("canvas").getContext("2d"),mi=new Yl;mi.background=new ut(10475727);mi.fog=new Xl(10475727,28,58);const At=new bn(35,1,.1,80),kc=new Ih,Nc=new me,tn=new Ve,mt=new Ve,Cr=new Ve;mi.add(tn,mt,Cr);const ns=iy();tn.add(ns.root);function qt(n,e={}){return new or({color:n,...e})}const oe={grass:qt(16777215),grassDark:qt(5405027),path:qt(13223602),soil:qt(8014385),wood:qt(10123101),woodDark:qt(5720899),white:qt(15922411),shell:qt(14411490),dark:qt(1055253),lime:qt(13168479),amber:qt(16762954),water:new Fi({color:6542566,roughness:.18,metalness:.02,transparent:!0,opacity:.78}),coral:qt(15823190),metal:qt(11453113),ink:new Vt({color:729368,side:vn})},cb=new nu(15398143,4742736,.95);mi.add(cb);const ii=new Na(16772559,1.45);ii.position.set(-8,16,9);ii.castShadow=bt.shadowMap.enabled;ii.shadow.mapSize.set(1024,1024);ii.shadow.camera.left=-14;ii.shadow.camera.right=14;ii.shadow.camera.top=11;ii.shadow.camera.bottom=-11;ii.shadow.bias=-7e-4;mi.add(ii);const ff=new Na(12049640,.35);ff.position.set(11,8,-8);mi.add(ff);function ri(n,e){return n.userData.interactiveId=e,n.traverse(t=>{t.userData.interactiveId=e}),n}function Ze(n,e,t,i,r=!0){const s=new pe(new Ht(...e),i);return s.position.set(...t),s.castShadow=r,s.receiveShadow=r,n.add(s),s}function Dr(n,e=.045){if(Ss)return n;const t=[];return n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i.userData.inkOutline||!i.geometry||/PlaneGeometry|CircleGeometry/.test(i.geometry.type))return;i.geometry.boundingSphere||i.geometry.computeBoundingSphere();const r=i.geometry.boundingSphere?.radius||0,s=Math.max(i.scale.x,i.scale.y,i.scale.z);if(r*s<.36)return;const o=Array.isArray(i.material)?i.material[0]:i.material;o!==oe.soil&&(o?.transparent&&o.opacity<.85||t.push(i))}),t.forEach(i=>{const r=new pe(i.geometry,oe.ink);r.userData.inkOutline=!0,r.scale.setScalar(1+Math.min(e,.022)),r.castShadow=!1,r.receiveShadow=!1,i.add(r)}),n}function lb(n,e=256){const t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");n(i,e);const r=new Jl(t);return r.colorSpace=Qt,r.wrapS=r.wrapT=pa,r}function ub(){db();const n=lb((c,l)=>{c.fillStyle="#78a875",c.fillRect(0,0,l,l);for(let u=0;u<90;u+=1){c.fillStyle=u%2?"rgba(206,219,147,.08)":"rgba(44,86,69,.06)";const d=u*73%l,p=u*47%l;c.fillRect(d,p,12+u%17,3+u%5)}for(let u=0;u<900;u+=1){const d=u%3?"rgba(31,93,52,.18)":"rgba(211,231,149,.12)";c.fillStyle=d,c.fillRect(Math.random()*l,Math.random()*l,1,3+Math.random()*3)}});n.repeat.set(7,5),oe.grass.map=n;const e=new pe(new Ht(30,.65,19.5),oe.grassDark);e.position.y=-.38,e.receiveShadow=!0,tn.add(e);const t=new pe(new Ln(29.5,19),oe.grass);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,tn.add(t);const i=new pe(new Ln(27.8,1.45),oe.path);i.rotation.x=-Math.PI/2,i.position.set(0,.012,-6.7),i.receiveShadow=!0,tn.add(i);const r=new pe(new Ln(1.25,12),oe.path);r.rotation.x=-Math.PI/2,r.position.set(-9.6,.014,-1),tn.add(r);const s=[];for(let c=-14.5;c<=14.5;c+=1.5)s.push([c,.28,-9.4],[c,.28,9.4]);for(let c=-8.5;c<=8.5;c+=1.5)s.push([-14.6,.28,c],[14.6,.28,c]);const o=new Tr(new Ht(.14,.72,.14),oe.woodDark,s.length),a=new Nt;s.forEach((c,l)=>{a.position.set(...c),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}),o.castShadow=!0,tn.add(o),[-14.6,14.6].forEach(c=>Ze(tn,[.07,.12,19],[c,.37,0],oe.wood)),[-9.4,9.4].forEach(c=>Ze(tn,[29.3,.12,.07],[0,.37,c],oe.wood));for(let c=-13.7;c<=13.7;c+=1.5){const l=new pe(new Kl(.48+Math.random()*.1,1),oe.grassDark);l.position.set(c,.3,8.85+Math.sin(c)*.08),l.castShadow=!0,tn.add(l)}for(let c=0;c<10;c+=1){const l=new pe(new Mn(.07,8,6),c%2?oe.amber:oe.coral);l.position.set(-12.7+c*2.55,.13,8.1+Math.sin(c)*.25),l.castShadow=!0,tn.add(l)}hb()}function db(){const n=new Ln(90,90,40,40);n.rotateX(-Math.PI/2);const e=n.attributes.position;for(let d=0;d<e.count;d+=1){const p=e.getX(d),f=e.getZ(d),g=Math.max(Math.abs(p)-27,Math.abs(f)-18,0),v=It.smoothstep(Math.abs(f+12.2),1.8,5)*Math.min(1,g/14)*(1.3+Math.sin(p*.15)*Math.cos(f*.12)*1.2);e.setY(d,-.16+v)}n.computeVertexNormals();const t=new pe(n,qt(8562557));t.name="surrounding meadow",t.receiveShadow=!0,tn.add(t);const i=new pe(new Ln(80,2.8),oe.path);i.rotation.x=-Math.PI/2,i.position.set(0,-.1,-12.2),i.receiveShadow=!0,tn.add(i);const r=new pe(new Ln(1.5,7),oe.path);r.rotation.x=-Math.PI/2,r.position.set(16.2,-.09,-7.5),tn.add(r);const s=[[-15,-4],[-17,2],[-16,8],[-13,-12],[-8,-14],[-2,-15],[4,-14],[10,-13],[16,-11],[18,-5],[18,2],[17,8],[22,-16],[-22,-18]],o=new Tr(new pt(.12,.19,2.3,7),oe.woodDark,s.length),a=new Tr(new vo(1,1),qt(6590831),s.length*3),c=new Nt;s.forEach(([d,p],f)=>{const g=.85+f%4*.14;d*=1.2,p*=1.2,c.position.set(d,1,p),c.scale.set(1,1,1),c.updateMatrix(),o.setMatrixAt(f,c.matrix);for(let x=0;x<3;x+=1)c.position.set(d+(x-1)*.75,2.6+(x===1?.7:0),p+(x===1?-.3:.2)),c.scale.set(1.15*g,g,1.05*g),c.updateMatrix(),a.setMatrixAt(f*3+x,c.matrix),a.setColorAt(f*3+x,new ut([12702093,10208683,11323019][(f+x)%3]))}),o.castShadow=a.castShadow=!0,tn.add(o,a);const l=new Ve;l.name="neighboring farm shed",l.position.set(-19,-.05,-18),Ze(l,[2.6,1.8,2.3],[0,.9,0],qt(14014670));const u=new pe(new Vi(2.05,1.1,4),qt(11428701));u.rotation.y=Math.PI/4,u.position.y=2.28,l.add(u),Ze(l,[.65,1.23,.06],[-.42,.62,1.18],oe.woodDark),Ze(l,[.62,.58,.07],[.61,1.1,1.18],oe.shell),Ze(l,[.48,.44,.08],[.61,1.1,1.2],qt(6790308)),tn.add(l)}function hb(){const n=new Ve;n.position.set(11,0,12);const e=new Fi({color:12379356,transparent:!0,opacity:.42,roughness:.15,side:pn});Ze(n,[4.6,.12,2.5],[0,.05,0],oe.path),Ze(n,[4.4,2.2,.08],[0,1.1,-1.12],e,!1);for(let r=-2;r<=2;r+=1)Ze(n,[.05,2.4,2.3],[r*1.05,1.15,0],oe.metal);const t=Ze(n,[2.7,.08,2.35],[-1.05,2.35,0],e,!1);t.rotation.z=-.38;const i=Ze(n,[2.7,.08,2.35],[1.05,2.35,0],e,!1);i.rotation.z=.38,tn.add(n)}function _i(n,e="#f4bd4d"){Ca.font="700 15px system-ui";const t=Math.ceil(Ca.measureText(n).width)+24,i=new Nt,r=document.createElement("button");r.type="button",r.className="world-label",r.textContent=n,r.hidden=!0,r.style.width=`${t}px`,r.style.borderColor=e;for(const s of["pointerdown","pointerup"])r.addEventListener(s,o=>o.stopPropagation());return r.addEventListener("click",s=>{s.stopPropagation(),!(Ct||!_n.hidden||!rn.hidden)&&(Ir(),i.userData.interactiveId&&Xt(i.userData.interactiveId,vt()))}),i.labelElement=r,i.userData.worldLabel={text:n,width:t,height:30,fontSize:15},i}function pf(n,e,t){const i=new Ve;for(const s of[-.65,.65])for(const o of[-.5,.5])Ze(i,[.09,.48,.09],[s,.24,o],oe.woodDark),Ze(i,[.12,.07,.12],[s,.45,o],oe.amber);for(const s of[-.5,.5])Ze(i,[1.3,.025,.025],[0,.28,s],oe.straw||oe.wood);for(const s of[-.65,.65])Ze(i,[.025,.025,1],[s,.28,0],oe.wood);Ze(i,[.12,.85,.1],[0,.425,0],oe.woodDark),Ze(i,[.72,.32,.07],[0,.75,0],oe.wood);const r=_i(e,"#f4bd4d");return r.position.y=1.2,i.add(r),i.position.copy(t),Gt(i),Dr(i,.04),ri(i,n)}function fb(n){const e=nt[n];if(!e||kt===n)return null;const t=new Ve;t.userData.guideMarker=!0,t.userData.baseY=e.y;const i=new pe(new Oi(1.08,36),new Vt({color:16039245,transparent:!0,opacity:.16,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.012;const r=new pe(new jn(.92,.045,8,44),new Fi({color:16039245,emissive:5057797,emissiveIntensity:.26,roughness:.38,transparent:!0,opacity:.92,depthWrite:!1}));r.rotation.x=Math.PI/2;const s=new pe(new Vi(.18,.36,3),oe.amber);return s.rotation.z=Math.PI,s.position.y=.34,t.add(i,r,s),t.position.copy(e),t}function pb(n,e){const t=new Ve,i=new pe(new Oi(.98,24),new Vt({color:1194533,transparent:!0,opacity:.27,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.018,t.add(i);const r=new pe(new pt(.75,.85,.22,24),oe.shell);r.position.y=.14,t.add(r);const s=new pe(new pt(.13,.16,2.5,12),oe.metal);s.position.set(0,1.46,-.15),t.add(s);const o=new pe(new pt(.065,.065,2.4,8),oe.water);o.position.set(0,1.42,-.42),t.add(o);const a=[];for(let u=0;u<4;u++){const d=new Ve;d.name=`stacked planter ${u+1}`;const p=u%2?.16:-.16,f=.52+u*.61,g=.29-u*.18;d.position.set(p,f,g);const x=e.repaired?oe.white:oe.metal,v=new pe(new pt(.64,.4,.35,24,1,!0),x);d.add(v);const m=new pe(new pt(.4,.4,.05,20),oe.shell);m.position.y=-.17,d.add(m);const S=new pe(new jn(.64,.055,7,24),oe.shell);S.rotation.x=Math.PI/2,S.position.y=.18,d.add(S);const y=new pe(new Oi(.585,24),oe.soil);y.rotation.x=-Math.PI/2,y.position.y=.15,d.add(y),Gt(d),t.add(d);for(let _=0;_<3;_++){const R=_*Math.PI*2/3+.35;a.push({x:p+Math.cos(R)*.27,y:f+.19,z:g+Math.sin(R)*.27,turn:u*1.4+_})}}for(const u of t.children.filter(d=>d.name.startsWith("stacked planter"))){u.updateMatrix();for(const d of[...u.children]){const p=new pe(d.geometry.clone().applyMatrix4(u.matrix),d.material);t.add(p),u.remove(d),d.geometry.dispose()}}Gt(t);const c=e.queue.filter(u=>u.readyAt!==null&&u.readyAt<=$e()),l=_i(e.repaired?c.length?`${c.length} layer${c.length>1?"s":""} ready`:`Tower ${n+1}`:"REPAIR PLANTER",c.length?"#b9df63":"#69cbd3");l.position.set(0,3.95,0),t.add(l);for(const u of e.queue){const d=u.readyAt?It.clamp(($e()-u.startedAt)/Math.max(1,u.readyAt-u.startedAt),0,1):0,p=mf(u.crop,d,a.slice(u.layer*3,u.layer*3+3),u.crop==="tomato"?.85:1.2);p.userData.growthTiming={startedAt:u.startedAt,readyAt:u.readyAt,size:u.crop==="tomato"?.85:1.2},p.userData.towerIndex=n,p.userData.jobId=u.id,p.userData.layer=u.layer,t.add(p)}return t.position.copy(nt[`tower-${n}`]),Dr(t,.036),ri(t,`tower-${n}`)}function mb(n,e=.28,t=.11,i=!1){const r=new hs;r.moveTo(0,0),i?[[.15,.65],[.28,1],[.43,.7],[.58,.96],[.75,.6],[1,0],[.75,-.6],[.58,-.96],[.43,-.7],[.28,-1],[.15,-.65]].forEach(([a,c])=>r.lineTo(a*e,c*t)):(r.bezierCurveTo(e*.2,t,e*.72,t,e,0),r.bezierCurveTo(e*.72,-t,e*.2,-t,0,0));const s=new io(r,{depth:.018,bevelEnabled:!1,curveSegments:5});s.rotateX(-Math.PI/2);const o=new pe(s,n);return o.castShadow=!0,o}function Ts(n,e=1){const t=Te[n],i=new Ve,r=t.family==="fruit",s=qt(r?4685648:n==="lettuce"?6399295:t.color,{side:pn}),o=qt(r?8894309:t.accent,{side:pn}),a=["lettuce","strawberry"].includes(n),c=n==="tomato"?.8:a?.16:.52,l=new pe(new pt(.025,.05,c,7),oe.grassDark);l.position.y=c/2,i.add(l);const u=n==="lettuce"||n==="kale"?12:10;for(let p=0;p<u;p+=1){const f=p/u*Math.PI*2,g=mb(p%3?s:o,n==="lettuce"?.46:n==="tomato"?.34:.36,n==="lettuce"?.25:n==="basil"?.15:.14,["kale","tomato"].includes(n));g.rotation.set(0,-f,n==="kale"?.7:.18+p%3*.09),g.position.set(0,a?.08+p%3*.045:.16+p%3*.14,0),i.add(g)}if(n==="tomato"){const p=new pe(new pt(.018,.025,1.05,6),oe.wood);p.position.set(-.1,.52,-.05),i.add(p);for(let f=0;f<3;f+=1){const g=new pe(new Mn(.085,12,8),oe.coral);g.position.set(f%2?-.2:.2,.3+f*.16,.15),g.visible=e>=.72,g.userData.ripeningFruit=!0,i.add(g)}}if(n==="strawberry")for(let p=0;p<3;p+=1){const f=new pe(new Vi(.075,.14,10),oe.coral);f.rotation.z=Math.PI,f.position.set(Math.cos(p*2.1)*.21,.18,Math.sin(p*2.1)*.21),f.visible=e>=.72,f.userData.ripeningFruit=!0,i.add(f)}const d=e>=1?1:e>=.66?.78:e>=.33?.52:.28;return i.scale.setScalar(d),i.userData.crop=n,i.userData.campaignCrop=!0,i.userData.swayPhase=Qn.indexOf(n)*.8+Math.random()*.4,i.userData.growthStage=e>=1?3:e>=.66?2:e>=.33?1:0,i}function mf(n,e,t,i){const r=Ts(n,1),s=new Set(r.children.filter(c=>c.geometry?.type==="ExtrudeGeometry").map(c=>c.material)),o=r.children.filter(c=>c.userData.ripeningFruit);if(o.forEach(c=>r.remove(c)),Gt(r),o.length){const c=new Ve;o.forEach(l=>c.add(l)),Gt(c),[...c.children].forEach(l=>{l.userData.ripeningFruit=!0,l.userData.fruitPerInstance=o.length,r.add(l)})}const a=new Ve;return a.userData.crop=n,a.userData.plantingPlacements=t,a.userData.foliageMaterials=[],r.children.forEach(c=>{if(!c.isMesh)return;c.updateMatrix();const l=c.material.clone(),u=new Tr(c.geometry.clone(),l,t.length);u.castShadow=!0,u.receiveShadow=!0,u.userData.plantPartMatrix=c.matrix.clone(),u.userData.ripeningFruit=!!c.userData.ripeningFruit,u.userData.fruitPerInstance=c.userData.fruitPerInstance||1,s.has(c.material)&&a.userData.foliageMaterials.push(l),a.add(u)}),Ui(r),gf(a,e,i),a}function gf(n,e,t){const i=e>=1?3:e>=.66?2:e>=.33?1:0,r=[.28,.52,.78,1][i]*t,s=e>=.72;if(n.userData.growthScale===r&&n.userData.ripe===s)return;n.userData.growthStage=i,n.userData.growthScale=r,n.userData.ripe=s;const o=new Nt;n.children.forEach(a=>{a.isInstancedMesh&&(n.userData.plantingPlacements.forEach((c,l)=>{o.position.set(c.x,c.y,c.z),o.rotation.set(0,c.turn||0,0),o.scale.setScalar(r),o.updateMatrix(),a.setMatrixAt(l,o.matrix.clone().multiply(a.userData.plantPartMatrix))}),a.visible=!a.userData.ripeningFruit||s,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere())})}function gb(){const n=$e();mt.traverse(e=>{const t=e.userData.growthTiming;if(!t)return;if(e.userData.towerIndex!==void 0){const s=h.towers[e.userData.towerIndex].queue.find(o=>o.id===e.userData.jobId);s&&(t.readyAt=s.readyAt,t.startedAt=s.startedAt)}const i=It.clamp((n-t.startedAt)/Math.max(1,t.readyAt-t.startedAt),0,1);if(e.userData.plantingPlacements){gf(e,i,t.size);return}const r=i>=1?3:i>=.66?2:i>=.33?1:0;e.userData.growthStage=r,e.scale.setScalar([.28,.52,.78,1][r]*t.size),e.children.forEach(s=>{s.userData.ripeningFruit&&(s.visible=i>=.72)})}),Jh(mt)}function vb(n,e){const t=new Ve,i=new pe(new Ln(2.7,1.6),new Vt({color:1587492,transparent:!0,opacity:.22,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.015,t.add(i),Ze(t,[2.45,.38,1.35],[0,.2,0],oe.wood),Ze(t,[2.08,.23,1.02],[0,.42,0],oe.soil);for(let o=-1;o<=1;o+=1)Ze(t,[1.85,.035,.045],[0,.56,o*.27],oe.woodDark,!1);if(e.capacity>=3)for(const o of[-1.15,1.15])for(const a of[-.6,.6])Ze(t,[.1,.7,.1],[o,.35,a],oe.woodDark);e.capacity>=4&&Ze(t,[2.4,.12,.12],[0,.7,-.6],oe.wood);const r=e.capacity<=2?[[-.53,0],[.53,0]]:[[-.53,-.26],[.53,-.26],[-.53,.26],[.53,.26]];e.plants.forEach((o,a)=>{const c=It.clamp((Date.now()-o.plantedAt)/Math.max(1,o.readyAt-o.plantedAt),0,1),l=e.capacity<=2?1.08:.94,u=e.capacity<=2?[{x:-.17,y:0,z:-.2},{x:.17,y:0,z:.2,turn:1.1},{x:.15,y:0,z:-.13,turn:2.4}]:[{x:-.18,y:0,z:0},{x:.18,y:0,z:0,turn:1.4}],d=mf(o.crop,c,u,l);d.userData.growthTiming={startedAt:o.plantedAt,readyAt:o.readyAt,size:l},d.position.set(r[a][0],.54,r[a][1]),t.add(d)});const s=_i(`Bed ${n+1}: ${e.plants.length}/${e.capacity}`,"#b9df63");return s.position.set(0,e.plants.length?1.95:1.05,0),s.visible=kt===`bed-${n}`,t.add(s),t.position.copy(nt[`bed-${n}`]),Dr(t,.034),ri(t,`bed-${n}`)}function xb(){const n=new Ve;if(Ze(n,[2.25,1.15,1.45],[0,.58,0],oe.white),Ze(n,[2.38,.18,1.58],[0,1.22,0],oe.lime),h.seedShop.expanded){Ze(n,[.72,1.05,1.3],[-1.52,.53,0],oe.wood);for(const a of[.25,.55,.85])Ze(n,[.62,.23,.06],[-1.52,a,.68],oe.lime),Ze(n,[.16,.04,.06],[-1.52,a,.73],oe.metal)}const e=new pe(new pt(.22,.28,.68,14),oe.metal);e.rotation.z=Math.PI/2,e.position.set(1.35,.78,0),n.add(e);const t=ru({skin:"#c99069",hair:"#e5d8b7",color:"#b9547f",accessory:"glasses"});t.name="Bram the seed merchant",t.updateMatrixWorld(!0);const i=[];t.traverse(a=>{a.isMesh&&i.push(a)}),i.forEach(a=>t.attach(a)),t.userData.rig=null;const r=new pe(new pt(.48,.48,.06,20),oe.lime);r.position.y=2,t.add(r);const s=new pe(new Vi(.27,.48,16),oe.lime);s.position.set(.06,2.22,0),s.rotation.z=-.2,t.add(s),Gt(t),t.position.set(2.2,0,.1),t.rotation.y=.35,n.add(t),Ze(n,[.9,.55,.62],[1.9,.38,.85],oe.wood);for(const a of[1.55,2.25]){const c=new pe(new pt(.19,.19,.08,12),oe.metal);c.rotation.z=Math.PI/2,c.position.set(a,.2,.85),n.add(c)}for(let a=0;a<3;a++)Ze(n,[.2,.28,.1],[1.62+a*.26,.79,.85],a%2?oe.coral:oe.lime);Ey(n,Ze,oe),Gt(n);const o=_i("BRAM'S SEEDS","#b9df63");return o.position.set(0,3.85,0),n.add(o),n.position.copy(nt.vault),Dr(n,.038),ri(n,"vault")}function _b(){const n=Cy(h.hydro.water),e=_i("RESERVOIR","#69cbd3");return e.name="reservoir label",e.position.set(0,1.95,0),n.add(e),n.position.copy(nt.reservoir),ri(n,"reservoir")}function yb(){const n=mt.getObjectByName("water reservoir");if(Kh(n,h.hydro.water),n?.userData.reservoir){const s=n.userData.reservoir;s.mixingStream.visible=s.ripples.visible=Un(h)}const e=n?.getObjectByName("reservoir label");if(!e)return;const t=n.userData.reservoir.status,i=t==="empty"?"WATER EMPTY":t==="low"?"WATER LOW":"RESERVOIR";if(e.userData.worldLabel.text===i)return;Ca.font="700 15px system-ui";const r=Math.ceil(Ca.measureText(i).width)+24;Object.assign(e.userData.worldLabel,{text:i,width:r}),e.labelElement.textContent=i,e.labelElement.style.width=`${r}px`,e.labelElement.style.borderColor=t==="ready"?"#69cbd3":"#f4bd4d"}function bb(){const n=new Ve;n.name="reservoir tower feedline";const e=new Fi({color:4352882,roughness:.7}),t=[],i=Math.max(0,...h.towers.map((u,d)=>u.built?d:0));function r(u,d){const p=new U(...u),f=new U(...d),g=new pe(new pt(.075,.075,p.distanceTo(f),8),e);g.position.copy(p).add(f).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new U(0,1,0),f.clone().sub(p).normalize()),n.add(g),t.push({start:p,end:f});const x=new pe(new Mn(.1,8,6),oe.metal);x.position.copy(f),n.add(x)}r([-10.65,.24,1.74],[-10.3,.24,2.6]),r([-10.3,.24,2.6],[-10.3,.24,4.5]),r([-10.3,.24,4.5],[nt[`tower-${i}`].x,.24,4.5]),h.towers.forEach((u,d)=>{if(!u.built)return;const p=nt[`tower-${d}`];r([p.x,.24,4.5],[p.x,.24,p.z+.85]),r([p.x,.24,p.z+.85],[p.x,2.8,p.z+.85]),r([p.x,2.8,p.z+.85],[p.x,2.8,p.z])}),Gt(n);const s=new Ve;s.position.copy(nt.filter);const o=new pe(new pt(.26,.26,.75,16),oe.white);o.rotation.z=Math.PI/2,o.position.y=.28,s.add(o);const a=new pe(new jn(.22,.045,6,16),h.hydro.lineClogged?oe.coral:oe.water);a.rotation.x=Math.PI/2,a.position.y=.65,s.add(a),Ze(s,[.055,.28,.055],[0,.48,0],oe.metal);const c=_i(h.hydro.lineClogged?"FILTER CLOGGED":"FEED FILTER",h.hydro.lineClogged?"#f4bd4d":"#69cbd3");c.position.y=1.3,s.add(c),n.add(ri(s,"filter"));const l=new Tr(new Mn(.14,6,5),new Vt({color:h.hydro.lineClogged?16039245:10875647}),t.length*3);return l.frustumCulled=!1,l.userData.flowSegments=t,n.add(l),n}function Xa(){const n=[];h.towers.forEach((t,i)=>{t.built&&(!t.repaired||Bi(t,$e()))&&n.push(`tower-${i}`)}),h.beds.forEach((t,i)=>{t.built&&t.plants.some(r=>r.readyAt<=$e())&&n.push(`bed-${i}`)}),h.hydro.lineClogged&&n.push("filter");const e=bo(h);return(e.water||!h.hydro.batchMixed||h.towers.some(t=>t.built&&t.repaired)&&(e.mix||e.check))&&n.push("reservoir"),h.farm.owned.includes("coop")&&h.farm.eggsReady&&n.push("coop"),h.farm.owned.includes("composter")&&h.farm.compost&&n.push("composter"),Gi(h)?.available&&n.push("market"),n}function wb(){const n=Xa();if(!n.length)return new Ve;const e=new Ua(.92,1.02,24);e.rotateX(-Math.PI/2);const t=new Vt({transparent:!0,opacity:.65,depthWrite:!1}),i=new Tr(e,t,n.length);i.userData.attentionMarkers=!0;const r=new Nt;return n.forEach((s,o)=>{r.position.copy(nt[s]),r.position.y=.035,r.scale.setScalar(s==="filter"?.6:1),r.updateMatrix(),i.setMatrixAt(o,r.matrix),i.setColorAt(o,new ut(["filter","reservoir"].includes(s)?16039245:12181347))}),i}function Mb(){if(!h.market.built)return pf("market","PRODUCE TABLE",nt.market);const n=new Ve,e=ws(h);n.name=`market construction stage ${e}`,n.userData.constructionStage=e;const t=e<3?1.8:3.1;Ze(n,[t,.15,1.15],[0,.7,.1],oe.wood);for(const r of[-t/2+.15,t/2-.15])for(const s of[-.35,.55])Ze(n,[.12,.7,.12],[r,.35,s],oe.woodDark);if(e>=2&&(Ze(n,[t+.25,.12,1.4],[0,2.15,-.15],e===4?oe.coral:oe.lime),[-t/2,t/2].forEach(r=>Ze(n,[.11,2.1,.11],[r,1.1,-.55],oe.woodDark))),e>=3&&(Ze(n,[3.1,.5,.12],[0,.35,.65],oe.wood),Ze(n,[3,.65,.12],[0,1.3,-.6],oe.white),Ze(n,[2.8,.09,.4],[0,1.35,-.4],oe.woodDark)),e===4){for(const r of[-1.25,-.42,.42,1.25])Ze(n,[.28,.012,1.41],[r,2.216,-.15],oe.white),Ze(n,[.28,.15,.035],[r,2.1,.57],oe.white);for(const r of[-1.85,1.85]){Ze(n,[.5,.45,.65],[r,.23,.1],oe.woodDark);const s=Ts("tomato",1);s.scale.setScalar(.4),s.position.set(r,.48,.1),n.add(s)}}const i=_i(e===1?"PIP'S PRODUCE TABLE":"PIP'S VEG STAND","#f4bd4d");return i.position.set(0,e===1?1.55:2.58,0),n.add(i),Qn.slice(0,e).forEach((r,s)=>{const o=(s-(e-1)/2)*.6,a=Ze(n,[.48,.28,.56],[o,.87,.2],oe.woodDark);a.rotation.y=.07*s;const c=new pe(new Mn(.11,10,7),new Fi({color:Te[r].color,roughness:.7}));c.position.set(o,1.04,.2),n.add(c)}),n.position.copy(nt.market),Dr(n,.034),ri(n,"market")}function Sb(){const n=new Ve;Ze(n,[1.55,.18,.75],[0,.85,0],oe.wood),[-.62,.62].forEach(i=>Ze(n,[.12,1.4,.12],[i,.7,0],oe.woodDark));const e=Object.values(h.rack).reduce((i,r)=>i+r,0);for(let i=0;i<Math.min(e,6);i+=1){const r=Qn.find(o=>h.rack[o]>i/2)||"lettuce",s=Ts(r,1);s.scale.setScalar(.32),s.position.set(-.5+i%3*.5,1,i>2?.15:-.15),n.add(s)}const t=_i("HARVEST RACK","#b9df63");return t.position.set(0,1.65,0),t.visible=kt==="rack"||e>0,n.add(t),n.position.copy(nt.rack),Dr(n,.034),ri(n,"rack")}function Eb(){const n=Ha(h),e=Ty(n,Ze,oe),t=_i("FARM SHOP","#f4bd4d");return t.position.set(0,3.1,0),e.add(t),e.position.copy(nt.workshop),Dr(e,.034),ri(e,"workshop")}function vf(n,e){const t=Math.max(0,Pi.findIndex(o=>o.name===n.customer)),i=ru(Pi[t],t);i.position.copy(Ra(e,n));const r=new pe(new Oi(.4,20),new Vt({color:1586468,transparent:!0,opacity:.2,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.025,i.add(r);const s=new pe(new Ua(.43,.49,24),new Vt({color:16039245,side:pn}));return s.rotation.x=-Math.PI/2,s.position.y=.035,s.visible=h.selectedOrderId===n.id,i.add(s),i.userData.customerIndex=e,i.userData.customerProfile=t,i.userData.orderId=n.id,i.userData.arrivedAt=n.createdAt,i.userData.destination=i.position.clone(),ri(i,"market")}function Ra(n,e=h.orders[n]){return new U(nt.market.x-1+(e?.slot??n)*1.3,0,nt.market.z+2.8)}function Zd(n){if(Dc.has(n.name))return Dc.get(n.name);const e=new Yl;e.background=new ut(n.color).multiplyScalar(.45),e.add(new nu(16775398,5469804,2.6));const t=new Na(16773847,2);t.position.set(-2,4,4),e.add(t);const i=ru(n,Pi.indexOf(n));e.add(i);const r=new bn(32,1,.1,12);r.position.set(.45,1.9,2.8),r.lookAt(0,1.48,0);const s=128,o=new Ni(s,s);o.texture.colorSpace=Qt;const a=bt.getRenderTarget();bt.setRenderTarget(o),bt.render(e,r);const c=new Uint8Array(s*s*4);bt.readRenderTargetPixels(o,0,0,s,s,c),bt.setRenderTarget(a);const l=document.createElement("canvas");l.width=l.height=s;const u=l.getContext("2d"),d=u.createImageData(s,s);for(let f=0;f<s;f++)d.data.set(c.subarray(f*s*4,(f+1)*s*4),(s-f-1)*s*4);u.putImageData(d,0,0);const p=l.toDataURL("image/png");return Dc.set(n.name,p),o.dispose(),Ui(i),p}function fu(n,e,t=!0){const i=vf(n,e);i.traverse(s=>{delete s.userData.interactiveId}),Cr.add(i);const r=t?Ts(n.crop,1):new Ve;r.scale.setScalar(.32),Cr.add(r),$s.push({customer:i,produce:r,purchased:t,age:t?0:.75,start:new U(Ee.x,1.1,Ee.z),end:i.position.clone().add(new U(0,1,.3))})}function xf(){const n=zh(h.proPip);return n.position.set(-5.35,0,-1.1),n}let Et=xf();const Ee={x:Et.position.x,z:Et.position.z,target:null,speed:h.proPip?6.25:5.25,direction:"south",action:"idle",actionTime:0,pendingFacing:0,gaitPhase:0};mi.add(Et);function Tb(){if(h.cosmetics.active.includes("sunny-planters"))for(let n=0;n<5;n+=1){const e=new pe(new pt(.2,.25,.3,12),oe.coral);e.position.set(-8.6+n*.55,.15,-5.35);const t=new pe(new Mn(.11,10,7),oe.amber);t.position.set(e.position.x,.48,e.position.z),mt.add(e,t)}if(h.cosmetics.active.includes("blue-path"))for(let n=0;n<3;n+=1){const e=new Ve,t=new pe(new pt(.28,.21,.38,12),oe.water);t.position.y=.2;const i=Ts("basil",1);i.scale.setScalar(.35),i.position.y=.4,e.add(t,i),e.position.set(-1.5+n*.8,0,-5.8),mt.add(e)}if(h.cosmetics.active.includes("festival-bunting")&&h.market.built)for(let n=0;n<9;n+=1){const e=new pe(new Vi(.12,.28,3),n%2?oe.amber:oe.coral);e.rotation.z=Math.PI,e.position.set(nt.market.x-1.35+n*.35,2.32+Math.sin(n*.8)*.1,nt.market.z),mt.add(e)}}function Mo(){if(Aa.replaceChildren(),Ui(mt),mt.clear(),mt.add(xb(),_b(),Mb(),Eb()),Ot(h).festival){const e=new Ve;e.name="harvest festival garden display",e.position.set(-5,0,11.2);for(const t of[-1.3,1.3]){Ze(e,[.18,2.7,.18],[t,1.25,0],oe.wood),Ze(e,[.7,.42,.7],[t,.12,0],oe.white);for(let i=0;i<5;i++){const r=new pe(new vo(.22,1),oe.lime);r.position.set(t+Math.sin(i*2)*.25,.4+i*.1,Math.cos(i*2)*.22),e.add(r)}}Ze(e,[3,.2,.3],[0,2.55,0],oe.wood);for(let t=0;t<7;t++){const i=new pe(new Vi(.16,.36,3),t%2?oe.coral:oe.amber);i.rotation.z=Math.PI,i.position.set(-1.1+t*.37,2.25,0),e.add(i)}Gt(e),mt.add(e)}h.farm.owned.forEach(e=>{const t=Sy(e,h.farm);t.position.copy(nt[e]);{const i=_i(e==="rainTank"?"RAIN STORAGE":e==="coop"?h.farm.eggsReady?"EGGS READY":"CHICKEN COOP":h.farm.compost?"COMPOST READY":"COMPOSTER","#b9df63");i.position.y=2,t.add(i),ri(t,e)}mt.add(t)}),mt.add(Sb()),mt.add(bb(),wb()),h.towers.forEach((e,t)=>{const i=e.built?pb(t,e):pf(`tower-${t}`,`BUILD T${t+1}`,nt[`tower-${t}`]);e.built&&Ab(t)&&Cb(i,.38),mt.add(i)}),h.beds.forEach((e,t)=>{e.built&&mt.add(vb(t,e))}),h.market.built&&h.orders.forEach((e,t)=>{e.status==="waiting"&&mt.add(vf(e,t))}),Ay(mt);const n=fb(gi());n&&mt.add(n),Tb(),co=[],mt.traverse(e=>{e.userData.worldLabel&&(co.push(e),Aa.appendChild(e.labelElement))}),Rb(),hf=_f()}function Ab(n){if(!vt())return!1;const e=nt[`tower-${n}`],t=e.x-Ee.x,i=e.z-Ee.z,r=Math.hypot(7.7,14.3),s=(t*7.7+i*14.3)/r,o=Math.abs(t*14.3-i*7.7)/r;return Math.hypot(t,i)<3.4&&s>0&&o<1.1}function Cb(n,e){n.traverse(t=>{if(t.userData.worldLabel)return;const i=r=>{const s=r.clone();return s.transparent=!0,s.opacity=Math.min(r.opacity??1,e),s.depthWrite=!1,s};Array.isArray(t.material)?t.material=t.material.map(i):t.material&&(t.material=i(t.material))})}function Ui(n){const e=new Set(Object.values(oe)),t=new Set,i=new Set,r=new Set;n.traverse(s=>{s.geometry&&!t.has(s.geometry)&&(t.add(s.geometry),s.geometry.dispose()),(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{!a||e.has(a)||r.has(a)||(r.add(a),a.map&&!i.has(a.map)&&(i.add(a.map),a.map.dispose()),a.dispose())})})}function _f(){const n=$e();return JSON.stringify({towers:h.towers.map(e=>[e.built,e.repaired,e.queue.map(t=>[t.id,t.layer,t.crop,t.readyAt<=n])]),beds:h.beds.map(e=>[e.built,e.capacity,e.plants.length,e.plants.filter(t=>t.readyAt<=n).length]),market:[h.market.built,ws(h),h.orders.map(e=>`${e.id}:${e.status}`)],rack:h.rack,lineClogged:h.hydro.lineClogged,farm:h.farm,festival:Ot(h).festival,attention:Xa(),carry:h.carry,cosmetics:h.cosmetics.active,pro:h.proPip,selected:kt,guide:gi()})}function Rb(){const n=Et.getObjectByName("campaign carry");if(n&&(Ui(n),Et.remove(n)),!h.carry)return;const e=new Ve;if(e.name="campaign carry",h.carry.kind==="starter"){const t=new pe(new pt(.13,.17,.22,12),oe.soil),i=Ts(h.carry.crop,.82);i.scale.multiplyScalar(.48),i.position.y=.12,e.add(t,i)}else{const t=new pe(new pt(.28,.22,.2,12),oe.wood);e.add(t),h.carry.items.slice(0,5).forEach((i,r)=>{const s=new pe(new Mn(.095,10,7),new Fi({color:Te[i].color,roughness:.7}));s.position.set(-.15+r%3*.15,.15+Math.floor(r/3)*.1,0),e.add(s)})}e.position.set(0,.72,.58),e.scale.setScalar(.95),Et.add(e)}function $e(){return Date.now()}function Xe(n="autosave"){let e=!1;try{h=Gy(h,window.localStorage,Date.now(),t=>{e=t})}catch{}ee("#saveWarning").hidden=e,ee("#saveStatus").textContent=e?"Progress saved in this browser":"Progress is only in memory. Retry saving or export before closing.",df=performance.now(),n!=="autosave"&&Zn("campaign_save",{reason:n,chapter:h.chapter+1,task:ei(h)?.id||"complete"})}function He(n,e=3500){ao.classList.add("is-active"),vt()&&(e=Math.min(e,3200)),ao.textContent=n,fa=performance.now()+e}function ar(n){Ii.effect(n)}function Ir(){Ii.start()}function As(){Ii.update();const n=h.settings.soundEnabled!==!1,e=ee("#soundButton");e.setAttribute("aria-label",n?"Mute sound":"Enable sound"),e.setAttribute("title",n?"Mute sound":"Enable sound"),e.setAttribute("aria-pressed",String(!n)),e.classList.toggle("is-muted",!n)}function Ft(n,e=n){Ee.action=n,Ee.actionTime=h.settings.reducedMotion?.18:.72,ar(e)}function yf(n){const e=new Ve,t=new pe(new Ht(.34,.46,.08),oe.white),i=new pe(new Oi(.1,16),new Fi({color:Te[n].color,roughness:.65}));i.position.z=.046,e.add(t,i),e.position.copy(nt.vault).add(new U(2.5,1.1,.35)),Cr.add(e),qs.push({kind:"packet",mesh:e,start:e.position.clone(),end:nt.vault.clone().add(new U(1.25,.95,0)),age:0,duration:h.settings.reducedMotion?.18:.72})}function Wi(n,e=16039245){const t=h.settings.reducedMotion?3:10;for(let i=0;i<t;i+=1){const r=new pe(new Mn(.035,6,5),new Vt({color:e}));r.position.copy(n).add(new U(0,.45,0)),Cr.add(r),qs.push({kind:"particle",mesh:r,velocity:new U((Math.random()-.5)*1.5,.7+Math.random(),(Math.random()-.5)*1.5),age:0,duration:.65})}}function Pb(n){for(let e=qs.length-1;e>=0;e-=1){const t=qs[e];t.age+=n;const i=t.age/t.duration;t.kind==="packet"?(t.mesh.position.lerpVectors(t.start,t.end,Math.min(1,i)),t.mesh.position.y+=Math.sin(Math.min(1,i)*Math.PI)*1.4,t.mesh.rotation.y+=n*5):(t.velocity.y-=n*2.2,t.mesh.position.addScaledVector(t.velocity,n),t.mesh.scale.setScalar(Math.max(.05,1-i))),i>=1&&(Cr.remove(t.mesh),Ui(t.mesh),qs.splice(e,1))}for(let e=$s.length-1;e>=0;e-=1){const t=$s[e];t.age+=n;const i=Math.min(1,t.age/.65);t.produce.position.lerpVectors(t.start,t.end,i),h.settings.reducedMotion||(t.produce.position.y+=Math.sin(i*Math.PI)*.6),t.customer.userData.rig.arms[0].rotation.x=t.purchased?-i*.8:0,t.age>.75&&!h.settings.reducedMotion&&(t.customer.position.x+=n*2.2,t.customer.rotation.y=Math.PI/2,t.produce.position.copy(t.customer.position).add(new U(.3,1,0)),t.customer.userData.rig.legs.forEach((r,s)=>{r.rotation.x=Math.sin(t.age*9+s*Math.PI)*.3})),t.age>=(h.settings.reducedMotion?.9:2.3)&&(Cr.remove(t.customer,t.produce),Ui(t.customer),Ui(t.produce),$s.splice(e,1))}}function Lb(n){ns.update(document.hidden?0:n,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});const e=performance.now()/1e3;Ry(mt.getObjectByName("water reservoir"),e,Un(h),h.settings.reducedMotion),oe.water.opacity=.76+Math.sin(e*1.8)*.08,ii.intensity=1.45+Math.sin(e*.09)*.06,mt.traverse(t=>{if(t.userData.attentionMarkers&&(t.material.opacity=h.settings.reducedMotion?.65:.55+Math.sin(e*2)*.15),t.userData.hens&&t.userData.hens.forEach((i,r)=>{const s=e*.7+r*2.5;i.position.copy(i.userData.home),h.settings.reducedMotion||(i.position.x+=Math.sin(s)*.22,i.position.z+=Math.cos(s)*.16,i.rotation.y=Math.cos(s)*.6,i.rotation.x=Math.max(0,Math.sin(s*2.3))*.22)}),t.userData.flowSegments){t.visible=Jy(h);const i=new Nt;t.userData.flowSegments.forEach(({start:r,end:s},o)=>{for(let a=0;a<3;a++){const c=h.settings.reducedMotion?(a+.5)/3:(e*(h.hydro.lineClogged?.08:.3)+a/3+o*.31)%1;i.position.lerpVectors(r,s,c),i.position.y+=.045,i.updateMatrix(),t.setMatrixAt(o*3+a,i.matrix)}}),t.instanceMatrix.needsUpdate=!0}if(t.userData.campaignCrop&&(t.rotation.z=Math.sin(e*1.3+t.userData.swayPhase)*.025),t.userData.customerIndex!==void 0){const i=e*1.7+t.userData.customerIndex,r=h.settings.reducedMotion?1:It.clamp(($e()-t.userData.arrivedAt)/1200,0,1);t.position.copy(t.userData.destination),t.position.x+=(1-r)*1.8,t.rotation.y=r<1?-Math.PI/2:-.18;const s=t.userData.rig;s&&!h.settings.reducedMotion&&(s.head.rotation.y=Math.sin(i*.45)*.07,s.body.scale.y=1+Math.sin(i)*.012,s.legs.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*.3:0}),s.arms.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*-.2:Math.sin(i+a)*.04}))}if(t.userData.guideMarker){const i=1+Math.sin(e*3.1)*.08;t.scale.set(i,1,i),t.position.y=t.userData.baseY+Math.sin(e*2.5)*.035}})}function Il(n={}){const e=[];return n.coins&&e.push(`${n.coins} coins`),n.xp&&e.push(`${n.xp} XP`),n.unlockCrop&&e.push(Te[n.unlockCrop].label),n.unlockPro&&e.push("Pro Pip"),e.join(" + ")}function So(n){const e=n?.goals;return e?[...e.marketLevel?[{label:"Market upgraded",current:h.market.level>=e.marketLevel?1:0,target:1}]:[],...e.capacityUpgrade?[{label:"Queue or bed expanded",current:pu()?1:0,target:1}]:[],...Object.entries(e.sold||{}).map(([t,i])=>({crop:t,label:`${Te[t].label} sold`,current:h.stats.byCropSold[t],target:i})),...e.orders?[{label:"Total orders fulfilled",current:h.stats.orders,target:e.orders}]:[]]:[]}function pu(){return h.towers.some(n=>n.built&&n.irrigationUpgraded)||h.beds.some(n=>n.built&&n.capacity>2)}function bf(){const n=h.towers.findIndex(t=>t.built&&!t.irrigationUpgraded),e=h.beds.findIndex(t=>t.built&&t.capacity<4);return[...n>=0?[{id:`tower-${n}`,label:"Precision drippers / 12% faster starts",cost:gt.queueUpgrade}]:[],...e>=0?[{id:`bed-${e}`,label:"Bed +1 growing space",cost:gt.bedUpgrade[e]}]:[]]}function Db(n){const e=So(n);if(e.length)return e.every(t=>t.current>=t.target);switch(n.id){case"repair-first-tower":return h.towers[0].repaired;case"first-tower-plan":return h.stats.byCropQueued.lettuce>=2;case"first-grow-out":return h.stats.harvested>=4;case"reopen-market":return h.market.built;case"build-second-tower":return h.towers[1].built;case"specialize-flow":return h.hydro.systemLessonDone;case"split-crop-plan":return h.stats.byCropQueued.tomato>=1&&h.stats.byCropQueued.kale>=1;case"build-third-tower":return h.towers[2].built;case"build-pro-yard":return h.towers[3].built;default:return!1}}function Ib(n){const e=h.level;h.coins+=n.reward.coins||0,h.xp+=n.reward.xp||0,n.reward.unlockCrop&&!h.unlockedCrops.includes(n.reward.unlockCrop)&&h.unlockedCrops.push(n.reward.unlockCrop),n.reward.unlockPro&&(h.proPip=!0),n.reward.campaignComplete&&(h.campaignComplete=!0);const t=ef(h.xp);h.level=t.level,h.level>e&&(He(`Level ${h.level} reached. New farm options are ready.`,4500),ar("level-up"))}function Ya(n=new U(Ee.x,1.2,Ee.z)){const e=n.clone().add(new U(0,1,0)).project(At),t=nn.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function yi(){const n=ei(h);if(!n||!Db(n))return!1;h.completedTasks.push(n.id),Ib(n),h.taskIndex+=1,n.reward.chapterComplete&&(n.reward.campaignComplete||(h.chapter=Math.min(ps.length-1,h.chapter+1)),Bs=n),h=Pr(h),Xe("task_complete"),Wi(nt[n.focus]||new U(Ee.x,0,Ee.z),12181347),ar(n.reward.chapterComplete?"chapter-complete":"task-complete"),Zn("campaign_task_complete",{task:n.id,chapter:n.chapter+1,coins:h.coins,xp:h.xp}),n.reward.unlockPro&&Ub(),Bs?Wf(Bs):(He(`Task complete: ${n.title}. ${Il(n.reward)}.`,4800),pi.celebrate({title:n.title,detail:Il(n.reward)})),lt();const e=Re.chapterCoins.getBoundingClientRect();return pi.coins(n.reward.coins,Bs?{x:e.left,y:e.bottom}:Ya(nt[n.focus])),!0}function Ub(){const n=Et.position.clone(),e=Et.rotation.y;mi.remove(Et),Ui(Et),Et=xf(),Et.position.copy(n),Et.rotation.y=e,mi.add(Et),Ee.speed=h.proPip?6.25:5.25}function Qi(){return Math.max(0,h.coins-(h.market.built?0:gt.market))}function mu(){return h.market.built?"":`<div class="status-strip"><span>Veg Stand reserve</span><strong>${gt.market} coins</strong></div>`}function bi(n,e,t=!1){if(t&&Qi()<n&&!h.market.built)return He("Keep 40 coins for the Veg Stand. Optional upgrades can use the remaining coins."),ar("error"),!1;if(h.coins<n)return He(`You need ${n-h.coins} more coins. Complete an order or task first.`),ar("error"),!1;const i=structuredClone(h);try{if(e(),h.coins-=n,h.coins<0)throw new Error("Invalid coin balance");return Xe("purchase"),!0}catch{return h=i,He("That purchase was safely rolled back. Try again."),!1}}function gu(n){const e=h.towers[n];!e?.built||e.repaired||(e.repaired=!0,h.stats.serviceActions+=1,Ft("repair","repair"),Wi(nt[`tower-${n}`],6933459),He(`Tower ${n+1} is online. Its four planting layers are ready.`),Xe("repair"),yi(),lt())}function vu(n){const e=h.towers[n];if(!e||e.built||n===0)return;const t=[0,5,8,10][n];if(h.taskIndex<t){He("Finish the current farm task before opening this lane.");return}const i=gt.tower[n];if(!bi(i,()=>{e.built=!0,e.repaired=!0,h.beds[n].built=!0}))return;Ft("build","build"),Wi(nt[`tower-${n}`],16039245);const r=Gi(h);He(`Tower ${n+1} and Grow Bed ${n+1} are built.${r&&!r.reason?` ${r.label} unlocked at the stand.`:""}`),yi(),lt()}function xu(){if(h.market.built||h.taskIndex<3)return;const n=Gi(h);if(!n?.available){He(n?.reason||`You need ${n.cost-h.coins} more coins.`);return}bi(0,()=>{if(!Xh(h))throw new Error("Construction unavailable")})&&(Ft("build","build"),Wi(nt.market,16039245),He("Pip's produce table is open. The first neighbor will stop by soon. Tower 2 unlocks a canopy."),yi(),lt())}function wf(n){const e=Va(h,n);if(!e.available){He(e.reason);return}bi(0,()=>{if(!ky(h,n))throw new Error("Seed purchase changed")})&&(yf(n),Ft("collect","seed-pickup"),He(`Bram: ${e.amount} ${Te[n].label} seeds in the vault. ${e.tutorial?"First packet is on the house!":"No refunds for talking to your seedlings."}`),Zn("seed_purchase",{crop:n,amount:e.amount,coins:e.price,tutorial:e.tutorial}),lt())}function Mf(){bi(0,()=>{if(!Ny(h))throw new Error("Rescue unavailable")})&&(yf("lettuce"),He("Bram: Two lettuce seeds to get you growing again. Everybody starts somewhere."),Zn("seed_rescue"),lt())}function Sf(){bi(0,()=>{if(!Oy(h))throw new Error("Vault upgrade unavailable")})&&(Ft("build","build"),He("Seed vault expanded: room for 48 seeds of each crop."),lt())}function Ef(n,e,t=null){const i=h.towers[n];if(!i?.built||!i.repaired||!h.unlockedCrops.includes(e))return;const r=Ms(i,h.carry,n),s=t===null?r[0]:t;if(!r.includes(s)){He(`Tower ${n+1} has no available layer. A carried starter's layer stays reserved.`);return}if(!Un(h)){He("The shared tank needs a fresh mixed batch before planting."),Xt("reservoir");return}if(h.seeds[e]<=0){He(`Collect ${Te[e].label} seeds from the Seed Vault first.`);return}h.seeds[e]-=1,$a(h)||(h.hydro.feedPhase=0);const o=$e(),a=ms(e,"tower",h,i)*1e3*oo;i.queue.push({id:crypto.randomUUID(),crop:e,layer:s,queuedAt:o,startedAt:o,readyAt:o+a,quality:1}),h.stats.planted+=1,h.stats.byCropQueued[e]+=1,Xd(h)&&Di(h,"matched",e),Xd(h)&&Di(h,"saving",e),new Set(i.queue.map(c=>c.crop)).size===4&&Di(h,"mixed"),h.xp+=2,Ft("plant","plant"),Wi(nt[`tower-${n}`],Number.parseInt(Te[e].color.slice(1),16)),He(`${Te[e].label} planted in Tower ${n+1}, layer ${s+1}.`),h=Pr(h),Xe("queue_crop"),yi(),lt()}function In(){return h.beds.filter(n=>n.built).reduce((n,e)=>n+Math.max(0,e.capacity-e.plants.length),0)}function Tf(){const n=h.beds.findIndex(e=>e.built&&e.plants.length<e.capacity);return n>=0?`bed-${n}`:null}function kb(){const n=$e(),e=h.towers.findIndex(t=>t.built&&t.repaired&&Bi(t,n));return e>=0?`tower-${e}`:null}function na(n=null){const e=$e(),t=h.beds.findIndex(i=>i.built&&i.plants.some(r=>r.readyAt<=e&&(!n||r.crop===n)));return t>=0?`bed-${t}`:null}function Oc(){const n=h.towers.findIndex((e,t)=>e.built&&e.repaired&&Ms(e,h.carry,t).length);return n>=0?`tower-${n}`:null}function Nb(){const n=Dn(h);if(n)return n.crop;const e=ei(h);if(e?.id==="first-tower-plan")return"lettuce";if(e?.id==="split-crop-plan"){if(h.stats.byCropQueued.tomato<1)return"tomato";if(h.stats.byCropQueued.kale<1)return"kale"}const t=So(e).find(r=>r.crop&&r.current<r.target);if(t)return t.crop;if(!e){const r=Jn(h).find(o=>o.id===h.homestead.pinned),s=r&&_o(h,r).find(o=>o.crop&&o.current<o.target);if(s&&h.unlockedCrops.includes(s.crop))return s.crop}return h.orders.find(r=>r.status==="waiting"&&h.unlockedCrops.includes(r.crop))?.crop||h.unlockedCrops[0]||"lettuce"}function os(){return h.carry?.kind!=="produce"||!h.market.built?!1:h.orders.some(n=>n.status!=="waiting"?!1:h.carry.items.filter(e=>e===n.crop).length>=n.amount)}function gi(){if(h.carry?.kind==="starter")return Tf()||`tower-${h.carry.sourceTower}`;if(!Un(h)&&!os())return"reservoir";if(h.hydro.lineClogged&&!os())return"filter";const n=Dn(h);if(n){const p=xn(h,n);if(!p.needed)return"market";if(!p.room||p.load)return"rack";const f=na(n.crop);if(f)return f;const g=h.towers.findIndex(v=>Bi(v,$e(),n.crop));if(g>=0)return h.carry?.kind==="produce"?"rack":In()?`tower-${g}`:na()||`bed-${Math.max(0,h.beds.findIndex(v=>v.built&&v.plants.length))}`;if(!p.missing){const v=h.beds.findIndex(S=>S.plants.some(y=>y.crop===n.crop));if(v>=0)return`bed-${v}`;const m=h.towers.findIndex(S=>S.queue.some(y=>y.crop===n.crop));if(m>=0)return`tower-${m}`}if(h.carry?.kind==="produce")return"rack";const x=Oc(n.crop);if(x)return h.seeds[n.crop]?x:"vault"}if(h.carry?.kind==="produce"){if(os())return"market";if(h.carry.items.length<Ot(h).basket){const p=na();if(p)return p}return"rack"}const e=na();if(e)return e;const t=kb();if(t&&In()>0)return t;if(t&&In()<=0){const p=h.beds.findIndex(f=>f.built&&f.plants.length);if(p>=0)return`bed-${p}`}if(!Un(h))return"reservoir";const i=ei(h);if(i?.goals?.capacityUpgrade&&!pu()){const p=bf().find(f=>h.coins>=f.cost);if(p)return p.id}if(i?.id==="launch-showcase"&&Gi(h)?.available)return"market";const r={"repair-first-tower":0,"reopen-market":gt.market,"build-second-tower":gt.tower[1],"specialize-flow":0,"build-third-tower":gt.tower[2],"build-pro-yard":gt.tower[3]};if(i?.id in r&&h.coins>=r[i.id])return i.focus;const s=h.orders.filter(p=>p.status==="waiting");if(s.some(p=>h.rack[p.crop]>=p.amount))return"rack";const o=Nb(),a=s.find(p=>p.crop===o),c=["first-tower-plan","split-crop-plan"].includes(i?.id),l=[];h.beds.forEach((p,f)=>p.plants.forEach(g=>{g.crop===o&&l.push({id:`bed-${f}`,readyAt:g.readyAt})})),h.towers.forEach((p,f)=>p.queue.forEach(g=>{g.crop===o&&l.push({id:`tower-${f}`,readyAt:g.readyAt??1/0})}));const u=i?.id==="first-grow-out"?Math.max(1,4-h.stats.harvested):a?.amount||1;if(!c&&l.length+h.rack[o]>=u&&l.length)return l.sort((p,f)=>p.readyAt-f.readyAt),l[0].id;if(h.market.built&&!c&&!a)return"market";const d=h.seeds[o]>0?Oc():null;if(d)return d;if(!Oc()){const p=h.towers.findIndex(f=>f.built&&f.queue.length);if(p>=0)return`tower-${p}`}return h.unlockedCrops.includes(o)?"vault":i?.focus||null}function lo(n,e=null){const t=h.towers[n],i=e?t?.queue.find(r=>r.id===e):Bi(t,$e(),Dn(h)?.crop)||Bi(t,$e());if(!(!i||i.readyAt===null||i.readyAt>$e())){if(h.carry){He("Pip's hands are full.");return}if(In()<=0){He("Every bed is full. Harvest a finished crop before taking another starter."),ar("error");return}t.queue.splice(t.queue.indexOf(i),1),h.carry={kind:"starter",crop:i.crop,quality:i.quality,sourceTower:n,sourceLayer:i.layer,job:i},h=Pr(h),Ft("carry","pickup"),He(`${Te[i.crop].label} starter picked up. Carry it to an open bed.`),Xe("pickup_starter"),lt()}}function er(n){if(h.carry?.kind!=="starter"||h.carry.sourceTower!==n)return;const e=h.towers[n];if(e.queue.length>=4){He("That tower queue is full. Transplant this starter into an open bed.");return}const t=h.carry.job||{id:crypto.randomUUID(),crop:h.carry.crop,queuedAt:$e(),startedAt:$e(),readyAt:$e(),quality:h.carry.quality};t.startedAt=$e(),t.readyAt=$e(),t.layer=h.carry.sourceLayer??Ms(e)[0],e.queue.unshift(t),h.carry=null,Ft("return","return"),He(`${Te[t.crop].label} returned safely to Tower ${n+1}.`),Xe("return_starter"),lt()}function uo(n){const e=h.beds[n];if(h.carry?.kind!=="starter"||!e?.built)return;if(e.plants.length>=e.capacity){He(`Grow Bed ${n+1} is full.`);return}const t=h.carry.crop,i=e.soilCharges>0,r=$e();e.plants.push({id:crypto.randomUUID(),crop:t,plantedAt:r,readyAt:r+ms(t,"bed",h)*(e.soilCharges?.8:1)*1e3*oo,quality:h.carry.quality}),h.carry=null,e.soilCharges=Math.max(0,e.soilCharges-1),h.stats.transplanted+=1,Di(h,"transplant",t),i&&Di(h,"enriched",t),h.xp+=3,Ft("transplant","transplant"),Wi(nt[`bed-${n}`],Number.parseInt(Te[t].color.slice(1),16)),He(`${Te[t].label} transplanted. It will finish in the garden.`),Xe("transplant"),lt()}function ho(n,e=null){const t=h.beds[n];if(!t?.built)return;if(h.carry?.kind==="starter"){He("Transplant or return the tower starter before harvesting.");return}if((h.carry?.kind==="produce"?h.carry.items:[]).length>=Ot(h).basket){He("The harvest basket is full. Visit the market or Harvest Rack.");return}const r=t.plants.findIndex(o=>o.readyAt<=$e()&&(!e||o.crop===e));if(r<0){He("No finished crop is ready in this bed yet.");return}const[s]=t.plants.splice(r,1);h.carry||(h.carry={kind:"produce",items:[]}),h.carry.items.push(s.crop),h.stats.harvested+=1,h.stats.harvested===1&&Zn("first_harvest",{crop:s.crop}),h.stats.byCropHarvested[s.crop]+=1,Di(h,"harvest",s.crop),h.farm.scraps=Math.min(24,h.farm.scraps+1),h.xp+=Te[s.crop].xp,Ft("harvest","harvest"),Wi(nt[`bed-${n}`],Number.parseInt(Te[s.crop].color.slice(1),16)),He(`${Te[s.crop].label} added to the basket: ${h.carry.items.length}/${Ot(h).basket}.`),Xe("harvest"),yi(),lt()}function fo(n=null,e=Ot(h).basket){if(h.carry?.kind!=="produce")return;let t=0;h.carry.items=h.carry.items.filter(i=>(!n||i===n)&&t<e?(h.rack[i]+=1,t+=1,!1):!0),h.carry.items.length||(h.carry=null),Ft("store","rack"),t>0&&(h.tutorial.coach.staged=!0),He(`${t} finished crop${t===1?"":"s"} stored on the Harvest Rack.`),Xe("rack_store"),lt()}function Pa(n,e=1){if(!Te[n]||(e=Math.max(0,Math.min(Ot(h).basket,Math.floor(Number(e)||0))),h.carry?.kind==="starter"))return;const t=h.carry?.kind==="produce"?h.carry.items:[],i=Ot(h).basket-t.length,r=Math.min(i,e,h.rack[n]);if(!(r<=0)){h.carry||(h.carry={kind:"produce",items:[]});for(let s=0;s<r;s+=1)h.rack[n]-=1,h.carry.items.push(n);Ft("carry","pickup"),He(`${r} ${Te[n].label} loaded from the rack.`),Xe("rack_load"),lt()}}function Af(n=0){const e=new Set(h.orders.map((a,c)=>a.slot??c));n=[0,1,2].find(a=>!e.has(a))??n;const t=h.orderSequence,i=uy(h),r=Pi.filter(a=>a.name!==h.lastCustomer&&!h.orders.some(c=>c.status==="waiting"&&c.customer===a.name)),s=r[Math.floor(Math.random()*r.length)];h.lastCustomer=s.name;const o=h.chapter===0?1:h.chapter===1?t%3===0?1:2:h.market.level>1&&t%3===2?3:2;return h.orderSequence+=1,{id:crypto.randomUUID(),slot:n,customer:s.name,crop:i,amount:o,reward:Te[i].coinValue*o+8+h.market.level*2,xp:Te[i].xp*o+4,createdAt:$e(),expiresAt:$e()+(90+Math.random()*60+(o-1)*30)*1e3,status:"waiting"}}function Cf(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId===e.id&&(h.selectedOrderId=null),fu(e,n,!1),e.status="cooldown",e.expiresAt=$e()+2400,h.stats.rejectedOrders+=1,He(`${e.customer} heads home. Your produce stays safe on the rack for another visit.`),ar("order-reject"),Xe("order_reject"),lt())}function Rf(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId=e.id,He(`${e.customer}'s order is reserved while you grow.`),Xe("order_wait"),lt())}function Ob(n){return(h.carry?.kind==="produce"?h.carry.items.filter(t=>t===n).length:0)+h.rack[n]}function gs(){if(!h.market.built)return null;const n=Dn(h);if(n)return n;const e=h.orders.filter(t=>t.status==="waiting");return e.find(t=>Ob(t.crop)>=t.amount)||e.sort((t,i)=>t.expiresAt-i.expiresAt)[0]||null}function _u(n){const e=h.orders[n];if(!e||e.status!=="waiting")return;const t=h.carry?.kind==="produce"?h.carry.items:[];if(t.filter(s=>s===e.crop).length<e.amount){h.rack[e.crop]>0?He(`Load ${Te[e.crop].label} from the Harvest Rack, then return to ${e.customer}.`):He(`${e.customer} needs ${e.amount} ${Te[e.crop].label}. Only finished garden produce can be sold.`),ar("error");return}let r=e.amount;h.carry.items=t.filter(s=>s===e.crop&&r>0?(r-=1,!1):!0),h.carry.items.length||(h.carry=null),h.coins+=e.reward,h.xp+=e.xp,h.stats.sold+=e.amount,h.stats.orders+=1,h.stats.orders===1&&Zn("first_sale"),h.stats.byCropSold[e.crop]+=e.amount,Di(h,"order",e.crop),Ft("sell","sale"),fu(e,n),Wi(Ra(n),Number.parseInt(Te[e.crop].color.slice(1),16)),He(`${e.customer}: "${Pi.find(s=>s.name===e.customer)?.line}" +${e.reward} coins.`),h.selectedOrderId===e.id&&(h.selectedOrderId=null),e.status="cooldown",e.expiresAt=$e()+2400,Xe("order_complete"),pi.coins(e.reward,Ya(Ra(n))),yi(),lt()}function La(n){const e=h.orders[n];if(!e||e.status!=="waiting"||h.carry?.kind!=="produce"||h.carry.items.filter(i=>i===e.crop).length<e.amount)return;h.selectedOrderId=e.id;const t=Ra(n).add(new U(0,0,.8));if(Math.hypot(Ee.x-t.x,Ee.z-t.z)<=.5)return vt()&&un(),_u(n);Xt("market"),Ee.target={x:t.x,z:t.z},zn=e.id,Xe("delivery_start"),He(`Taking ${e.amount} ${Te[e.crop].label} to ${e.customer}.`)}function Pf(n){const e=h.orders.find(i=>i.id===n&&i.status==="waiting");if(!e)return;h.selectedOrderId=e.id,Xe("order_selected");const t=Tl(h,e);if(t.kind==="deliver")return La(h.orders.findIndex(i=>i.id===n));if(t.kind==="collect"){Xt("rack"),di=e.id;return}Xt(gi()||"vault")}function Lf(n){const e=h.towers[n];if(!(!e?.built||e.irrigationUpgraded)){if(Cn(h,"drippers")){He(Cn(h,"drippers"));return}bi(gt.queueUpgrade,()=>{e.irrigationUpgraded=!0},!0)&&(Ft("build","build"),He(`Tower ${n+1} has precision drippers. New starts grow 12% faster.`),yi(),lt())}}function Df(n){const e=h.beds[n];if(!e?.built||e.capacity>=4)return;if(Cn(h,"bed",n)){He(Cn(h,"bed",n));return}const t=gt.bedUpgrade[n];bi(t,()=>{e.capacity+=1},!0)&&(Ft("build","build"),He(`Grow Bed ${n+1} now holds ${e.capacity} crops.`),yi(),lt())}function yu(){if(!h.market.built)return;const n=Gi(h);if(n){if(!n.available){He(n.reason||`You need ${n.cost-h.coins} more coins.`);return}bi(0,()=>{if(!Xh(h))throw new Error("Construction unavailable")})&&(Ft("build","build"),Wi(nt.market,16039245),He(`${n.label} complete. ${n.detail}`),yi(),lt())}}function If(){rb(h)&&(Ft("service","service"),He("Filter cleared. Full flow restored to the towers."),Xe("feedline_cleared"),lt())}function Uf(n){Ky(h,n)&&(h.hydro.servicedAt=$e(),h.stats.serviceActions+=1,Ft("service","service"),He(n==="water"?"Fresh starter batch filled. Circulate the IBC before feeding.":n==="mix"?"One evenly mixed batch supplies every tower.":"Delivery confirmed at every top outlet. The timer handles the short feeds."),Xe("hydro_service"),yi(),lt())}function kf(n){!ro[n]||h.cosmetics.owned.includes(n)||bi(gt.cosmetics[n],()=>{h.cosmetics.owned.push(n),h.cosmetics.active.push(n)},!0)&&(Ft("build","build"),He(`${ro[n].label} added to the homestead.`),lt())}function Fb(n){h.cosmetics.owned.includes(n)&&(h.cosmetics.active.includes(n)?h.cosmetics.active=h.cosmetics.active.filter(e=>e!==n):h.cosmetics.active.push(n),Xe("cosmetic_toggle"),lt())}function Bb(n){if(!n)return"Farm complete";const e=So(n);if(e.length)return`${e.filter(t=>t.current>=t.target).length} / ${e.length}`;switch(n.id){case"repair-first-tower":return h.towers[0].repaired?"1 / 1":"0 / 1";case"first-tower-plan":return`${Math.min(2,h.stats.byCropQueued.lettuce)} / 2`;case"first-grow-out":return`${Math.min(4,h.stats.harvested)} / 4`;case"reopen-market":return h.market.built?"1 / 1":"0 / 1";case"build-second-tower":return h.towers[1].built?"1 / 1":"0 / 1";case"specialize-flow":return h.hydro.systemLessonDone?"1 / 1":"0 / 1";case"split-crop-plan":return`${Math.min(1,h.stats.byCropQueued.tomato)+Math.min(1,h.stats.byCropQueued.kale)} / 2`;case"build-third-tower":return h.towers[2].built?"1 / 1":"0 / 1";case"build-pro-yard":return h.towers[3].built?"1 / 1":"0 / 1";default:return""}}function bu(){const n=ef(h.xp);Re.coins.textContent=h.coins.toLocaleString(),Re.level.textContent=String(n.level),Re.xp.textContent=n.needed?`${n.current} / ${n.needed}`:"MAX",Re.xpFill.style.width=`${Math.round(n.ratio*100)}%`,Re.chapter.previousElementSibling.textContent=h.campaignComplete?"Farm":"Chapter",Re.chapter.textContent=h.campaignComplete?Mr(h)?"Master":`${h.homestead.claimed.length}/18`:`${h.chapter+1} / 3`;const e=ei(h),t=ps[h.chapter];Re.objectiveChapter.textContent=h.campaignComplete?"Homestead":`Chapter ${t.number}`;const i=Jn(h).find(s=>s.id===h.homestead.pinned)||Jn(h)[0];Re.objectiveTitle.textContent=e?.title||i?.title||(Mr(h)?"Community requests continue":"Complete the crop mastery book"),Re.objectiveProgress.textContent=e?Bb(e):i?`${_o(h,i).filter(s=>s.current>=s.target).length}/${i.goals.length}`:`${Object.values(h.homestead.mastery).reduce((s,o)=>s+o,0)}/15 badges`,ee("#homesteadButton").hidden=!h.market.built,ee(".campaign-controls").classList.toggle("has-goals",h.market.built);const r=Jn(h).filter(s=>Ba(h,s)).length;ee("#homesteadButton").textContent=r?`Goals (${r})`:"Goals",kn.hidden||Sa.render(h),document.body.classList.toggle("high-contrast",h.settings.highContrast),Cs()}function Cs(){const n=gs(),e=!kn.hidden||!ti.hidden||!ni.hidden||!ln.hidden||!_n.hidden||!rn.hidden;if(Sr.hidden=!n||e,Sr.classList.toggle("is-ready",!!(n&&xn(h,n).needed===0)),!n)return;const t=xn(h,n);Re.marketChipCustomer.textContent=`${n.customer}${n.id===h.selectedOrderId?" / Reserved":" needs"}`,Re.marketChipDemand.textContent=`${t.carried}/${n.amount} ${Te[n.crop].label} in basket${t.stored?` / ${t.stored} rack`:""}`}function Nf(){const n=ei(h),e=ps[h.chapter];Re.taskChapter.textContent=h.campaignComplete?"Campaign complete":`Chapter ${e.number}`,Re.taskTitle.textContent=e.name,Re.taskStory.textContent=n?.story||"Pip: The homestead is ready for every grow that comes next.",Re.primaryTaskTitle.textContent=n?.title||"Keep the market growing",Re.primaryTaskDetail.textContent=n?.detail||"Choose crops, improve the farm, and serve neighborhood orders.",Re.primaryTaskReward.textContent=n?Il(n.reward):"All chapter rewards earned";const t=Rn.slice(h.taskIndex).find(o=>o.reward.unlockCrop||o.reward.unlockPro),i=ee("#nextFarmUnlock");if(i.hidden=!t||h.campaignComplete,t){const o=t.reward.unlockPro?"Pro Pip and strawberry seeds":`${Te[t.reward.unlockCrop].label} seeds`;i.textContent=`Next unlock: ${o}. Milestone: ${t.title}.`}ee("#taskMilestones").innerHTML=So(n).map(o=>{const a=o.current>=o.target;return`<li class="${a?"is-complete":""}"><span>${a?"&#10003; ":""}${o.label}</span><strong>${Math.min(o.current,o.target)} / ${o.target}</strong></li>`}).join("");const r=ee("#taskUpgradeOptions");r.hidden=!n?.goals?.capacityUpgrade||pu(),r.innerHTML=r.hidden?"":bf().map(o=>`<button class="choice-button" data-upgrade-target="${o.id}"><strong>${o.label}</strong><small>${o.cost} coins</small></button>`).join(""),r.querySelectorAll("[data-upgrade-target]").forEach(o=>o.addEventListener("click",()=>Xt(o.dataset.upgradeTarget)));const s=Rn.filter(o=>o.chapter===h.chapter);Re.chapterTaskList.innerHTML=s.map(o=>{const a=h.completedTasks.includes(o.id),c=o.id===n?.id;return`<div class="task-row ${a?"is-complete":""} ${c?"is-active":""}"><i>${a?"&#10003;":""}</i><span>${o.title}</span></div>`}).join("")}function zb(){const n=Qn.filter(e=>h.rack[e]>0).map(e=>`${Te[e].code} ${h.rack[e]}`);return n.length?n.join(" / "):"Empty"}function Of(){if(!h.carry)return"";if(h.carry.kind==="starter")return Te[h.carry.crop].label;const n=h.carry.items.reduce((e,t)=>(e[t]=(e[t]||0)+1,e),{});return Object.entries(n).map(([e,t])=>`${vt()?Te[e].label:Te[e].code} ${t}`).join(" / ")}function Ff(){if(lf.hidden=!h.carry&&!h.farm.eggs,!h.carry){Re.carryKind.textContent="Egg crate / market",Re.carryContents.textContent=`${h.farm.eggs} eggs`;return}Re.carryKind.textContent=h.carry.kind==="starter"?"Tower starter / one":`Harvest basket / ${h.carry.items.length} of ${Ot(h).basket}`,vt()&&(Re.carryKind.textContent=h.carry.kind==="starter"?"To garden":`Basket ${h.carry.items.length}/${Ot(h).basket}`),Re.carryContents.textContent=Of()+(h.farm.eggs?` / ${h.farm.eggs} eggs`:"")}function vs(n){const e=Math.max(0,Math.ceil((n-$e())/1e3));return e>59?`${Math.floor(e/60)}m ${e%60}s`:`${e}s`}function Eo(){const n=ee("#sellFarmEggs");n.hidden=!h.farm.eggs;const e=Math.hypot(Ee.x-nt.market.x,Ee.z-nt.market.z)<3.6;n.textContent=e?`Sell ${h.farm.eggs} eggs / ${h.farm.eggs*8} coins`:`Take ${h.farm.eggs} eggs to the stand`,Re.rackSummary.textContent=zb();const t=ee("#orderMarketUpgrade"),i=Gi(h);t.hidden=!i,t.disabled=!i?.available,i&&(t.textContent=`${i.label} / ${i.cost} coins${i.reason?` / ${i.reason}`:""}`);const r=Dn(h)||gs(),s=vt(),o=ee("#mobileOrderAction"),a=ee("#mobileOrderDetails"),c=ee("#marketOptions");if(c.dataset.layout!==String(s)&&(c.open=!s,c.dataset.layout=String(s)),o.hidden=!s||!r,a.hidden=!s,s){const l=h.orders.filter(d=>d.status==="waiting"),u=r?Tl(h,r):null;Yt(Re.orderList,l.length?`<div class="customer-picker" aria-label="Customers">${l.map(d=>{const p=Pi.find(f=>f.name===d.customer)||Pi[0];return`<button data-key="${d.id}" data-order-action="select" data-order-id="${d.id}" aria-label="${d.customer}: ${d.amount} ${Te[d.crop].label}" aria-pressed="${d.id===r?.id}" title="${d.customer}"><img class="customer-avatar" src="${Zd(p)}" alt=""><span>${d.customer}</span></button>`}).join("")}</div>${r?`<div class="mobile-order-summary"><strong>${r.amount} ${Te[r.crop].label}</strong><b>${r.reward} coins</b><span>Basket ${u.stock.carried}/${r.amount}</span><span>${r.id===h.selectedOrderId?"Reserved":"Visiting"}</span></div>`:""}`:'<p class="order-status">No customers just now. Your stored crops are safe.</p>'),Yt(o,r?`<button class="primary-command" data-order-action="fulfill" data-order-id="${r.id}">${u.label}</button>`:""),Yt(a,r?`<p>Rack ${u.stock.stored} / Growing ${u.stock.growing+u.stock.ready} / +${r.xp} XP</p><p>${r.id===h.selectedOrderId?"Staying until you deliver or release.":`Leaving in ${vs(r.expiresAt)}`}</p><div class="mobile-order-options"><button data-order-action="wait" data-order-id="${r.id}">${r.id===h.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${r.id}">Release customer</button></div>`:"")}else Yt(Re.orderList,h.orders.map((l,u)=>{const d=Pi.find(x=>x.name===l.customer)||Pi[0];if(l.status==="cooldown")return"";const p=Tl(h,l),f=p.stock,g=r?.id===l.id;return`<article class="order-card ${g?"is-selected":""}" data-order="${u}" data-key="${l.id}">
      <button class="order-select" data-order-action="select" data-order-id="${l.id}" aria-pressed="${l.id===h.selectedOrderId}"><img class="customer-avatar" src="${Zd(d)}" alt=""><span><strong>${l.customer}</strong><span>${l.amount} ${Te[l.crop].label}</span></span><span class="order-reward">${l.reward} coins<small>+${l.xp} XP</small></span></button>
      <div class="order-detail" ${g?"":"hidden"}>
        <p class="stock-breakdown">Basket <b>${f.carried}/${l.amount}</b> <span>Rack <b>${f.stored}</b></span> <span>Growing <b>${f.growing+f.ready}</b></span></p>
        <p class="order-status">${h.carry?.kind==="starter"?"Starter needs its garden finish":f.needed===0?"Packed for delivery":f.room===0?"Make room on the rack; your crops stay safe":f.load?`${f.load} needed from the rack`:f.ready?`${f.ready} ready in the garden`:f.missing?`${f.missing} still to plant`:"Your crop is growing"}</p>
        <p>${l.id===h.selectedOrderId?"Reserved: staying until you deliver or release":`Leaving in ${vs(l.expiresAt)}`}</p>
        <div class="order-actions"><button class="fulfill" data-order-action="fulfill" data-order-id="${l.id}" data-index="${u}">${p.label}</button><button data-order-action="wait" data-order-id="${l.id}">${l.id===h.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${l.id}">Release</button></div>
      </div>
    </article>`}).join("")||'<p class="order-status">The stand is quiet. Another neighbor will stop by soon. Stored produce keeps until then.</p>');ln.onclick=l=>{const u=l.target.closest("[data-order-action]");if(!u)return;const d=h.orders.findIndex(p=>p.id===u.dataset.orderId&&p.status==="waiting");d<0||(u.dataset.orderAction==="fulfill"&&Pf(u.dataset.orderId),["select","wait"].includes(u.dataset.orderAction)&&(Rf(d),Mo()),s&&u.dataset.orderAction==="select"&&(ln.querySelector(".order-scroll").scrollTop=0),u.dataset.orderAction==="reject"&&Cf(d),Eo())},ln.hidden||(Es.textContent=wu("market"))}function Yn(n,e,t,i=!1){return`<button class="economy-command" data-command="${t}" ${i?"disabled":""}><span>${n}</span><strong>${e===0?"Free":`${e} coins`}</strong></button>`}function Hb(n){const e=h.towers[n];if(Re.interactionKicker.textContent="Hydro production",Re.interactionTitle.textContent=`Tower ${n+1}`,!e.built){const c=gt.tower[n];Re.interactionSummary.textContent=`Four independent planting layers and Grow Bed ${n+1}.`,Yt(cn,Yn(`Build Tower ${n+1}`,c,`build-tower-${n}`,h.coins<c));return}if(!e.repaired){Re.interactionSummary.textContent="Repair the pump and flow line before planting.",Yt(cn,Yn("Repair tower",0,`repair-tower-${n}`));return}const t=Ms(e,h.carry,n),i=[0,1,2,3].map(c=>{const l=e.queue.find(d=>d.layer===c);if(!l)return`<label class="queue-slot is-empty"><b>${c+1}</b><span>${t.includes(c)?"Empty layer":"Reserved for carried starter"}</span><input type="radio" name="towerLayer" value="${c}" aria-label="Plant layer ${c+1}" ${c===t[0]?"checked":""} ${t.includes(c)?"":"disabled"}></label>`;const u=l.readyAt!==null&&l.readyAt<=$e();return`<div class="queue-slot" data-key="${l.id}"><b style="background:${Te[l.crop].accent}">${c+1}</b><span>${Te[l.crop].label}<small>${u?"Ready for the garden":vs(l.readyAt)}</small></span>${u?`<button class="storage-button" data-pickup-job="${l.id}" ${h.carry||!In()?"disabled":""}>Pick up</button>`:"<time>Growing</time>"}</div>`}).join(""),r=h.unlockedCrops.map(c=>`<button class="crop-button" data-queue-crop="${c}" ${!t.length||h.seeds[c]<=0?"disabled":""}><i style="background:${Te[c].accent}">${Te[c].code}</i><span>${Te[c].label}<small>${h.seeds[c]} seeds / ${Math.ceil(ms(c,"tower",h,e))}s</small></span></button>`).join(""),s=h.carry?.kind==="starter"&&h.carry.sourceTower===n?Yn("Return starter to its layer",0,`return-${n}`):"",o=Cn(h,"drippers"),a=e.irrigationUpgraded?'<div class="status-strip"><span>Precision drippers</span><strong>Installed</strong></div>':Yn(o||"Precision drippers / 12% faster",gt.queueUpgrade,`upgrade-queue-${n}`,!!o||Qi()<gt.queueUpgrade);Re.interactionSummary.textContent=`${e.queue.length}/4 layers planted. One seed per layer; each crop grows independently.`,Yt(cn,`<div class="queue-list"><span>Layers / bottom to top</span>${i}</div>${s}<div class="crop-actions">${r}</div>${mu()}${a}`)}function Vb(n){const e=h.beds[n],t=e.plants.filter(l=>l.readyAt<=$e());Re.interactionKicker.textContent="Garden grow-out",Re.interactionTitle.textContent=`Grow Bed ${n+1}`,Re.interactionSummary.textContent=`${e.plants.length} of ${e.capacity} plots used. ${t.length} crop${t.length===1?"":"s"} ready to harvest.`;const i=e.plants.length?e.plants.map(l=>`<div class="queue-slot"><b style="background:${Te[l.crop].accent}">${Te[l.crop].code}</b><span>${Te[l.crop].label}<small>${l.readyAt<=$e()?"Garden finished":"Finishing in soil"}</small></span><time>${l.readyAt<=$e()?"Ready":vs(l.readyAt)}</time></div>`).join(""):`<div class="queue-slot is-empty"><b>1</b><span>Open garden plots<small>Tower starters finish here</small></span><time>${e.capacity}</time></div>`,r=h.carry?.kind==="starter"?Yn("Transplant starter",0,`transplant-${n}`,e.plants.length>=e.capacity):"",s=[...new Set(t.map(l=>l.crop))].map(l=>`<button class="economy-command" data-harvest-crop="${l}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ot(h).basket?"disabled":""}><span>Harvest ${Te[l].label}</span><strong>${t.filter(u=>u.crop===l).length} ready</strong></button>`).join(""),o=Cn(h,"bed",n),a=e.capacity<4?Yn(o||"Add garden plot",gt.bedUpgrade[n],`upgrade-bed-${n}`,!!o||Qi()<gt.bedUpgrade[n]):"",c=h.farm.owned.includes("composter")?`<div class="status-strip"><span>Enriched plantings left</span><strong>${e.soilCharges}/4</strong></div><button class="economy-command" data-enrich-bed="${n}" ${e.soilCharges||!h.farm.compost?"disabled":""}><span>Enrich soil / 1 compost</span><strong>${h.farm.compost} bags</strong></button>`:"";Yt(cn,`<div class="queue-list"><span>Garden crops</span>${i}</div>${r}${s}${c}${mu()}${a}`)}function Gb(){Re.interactionKicker.textContent="Seed merchant and vault",Re.interactionTitle.textContent="Bram's Seeds",Re.interactionSummary.textContent=`${h.coins} coins / ${Rl(h)} seeds per crop`;const n=["Quality seeds. Questionable hat.","I talk to my seedlings. They mostly ask for space.","Four layers, four seeds. The hat is extra."],e=h.unlockedCrops.map(t=>{const i=Va(h,t);return`<button class="crop-button" data-key="${t}" data-collect-crop="${t}" ${i.available?"":"disabled"}><i style="background:${Te[t].accent}">${Te[t].code}</i><span>${Te[t].label}<small>${h.seeds[t]}/${Rl(h)} stored / ${i.amount} seeds for ${i.price} coins</small><small>${i.reason||(i.tutorial?"One free starter packet":"Buy packet")}</small></span></button>`}).join("");Yt(cn,`<p class="seed-merchant-quote">Bram: ${n[h.seedShop.purchases%n.length]}</p><div class="seed-stock">${e}</div>
    ${uu(h)?'<button class="secondary-command" data-rescue-seeds>Emergency lettuce packet / free</button>':""}
    ${mu()}
    <button class="economy-command" data-expand-vault ${h.seedShop.expanded||!h.market.built||Cn(h,"vault")||h.coins<_a?"disabled":""}><span>${h.seedShop.expanded?"Expanded vault / 48 per crop":h.market.built?Cn(h,"vault")||"Expand vault / 48 per crop":"Vault expansion / open table first"}</span><strong>${h.seedShop.expanded?"Owned":_a+" coins"}</strong></button>`)}function Wb(){Re.interactionKicker.textContent="Neighborhood market";const n=ws(h),e=Gi(h);Re.interactionTitle.textContent=n?qh[n-1].label:"Pip's produce table";const t=e?`<p>Stage ${e.stage}/4: ${e.detail}</p>${Yn(e.reason||`Build ${e.label}`,e.cost,n?"upgrade-market":"build-market",!e.available)}`:"<p>Farm market complete. Family baskets available.</p>";if(!h.market.built){Re.interactionSummary.textContent=h.market.openingGrant?`${h.market.openingGrant} opening coins restored. Your crops and upgrades are safe.`:"Start small. Each new tower unlocks the next section of the stand.",Yt(cn,t);return}Re.interactionSummary.textContent=`Stage ${n}/4. ${h.stats.orders} orders complete. Up to ${au(h)} visiting at once, with quiet spells between groups.`;const i=Yn("Open order board",0,"open-orders"),r=h.carry?.kind==="produce"?`<div class="status-strip"><span>Basket</span><strong>${Of()}</strong></div>`:"";Yt(cn,`${r}${i}${t}`)}function $b(){Re.interactionKicker.textContent="Produce storage",Re.interactionTitle.textContent="Harvest Rack",Re.interactionSummary.textContent=`${h.carry?.kind==="produce"?h.carry.items.length:0}/${Ot(h).basket} basket slots filled`;const n=h.carry?.kind==="produce"?Yn("Stage basket",0,"stage-produce"):"",e=Dn(h),t=e?xn(h,e).load:0,i=t?`<button class="economy-command" data-load-needed="${e.id}"><span>Load ${t} ${Te[e.crop].label}</span><strong>For ${e.customer}</strong></button>`:"",r=Qn.filter(o=>h.rack[o]>0).map(o=>`<div class="rack-row" data-key="stock-${o}"><span>${Te[o].label}<small>${h.rack[o]} stored</small></span><input id="rack-qty-${o}" type="number" min="1" max="${Math.min(Ot(h).basket,h.rack[o])}" value="1" aria-label="${Te[o].label} quantity"><button class="storage-button" data-load-crop="${o}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ot(h).basket?"disabled":""}>Load</button></div>`).join(""),s=h.carry?.kind==="produce"?[...new Set(h.carry.items)].map(o=>`<button class="storage-button" data-store-crop="${o}">Store ${Te[o].label} (${h.carry.items.filter(a=>a===o).length})</button>`).join(""):"";Yt(cn,`${i}${n}<div class="storage-actions">${s}</div><div class="storage-group"><span>Stored produce</span>${r||"<span>Rack empty</span>"}</div>`)}function qb(){const n=h.hydro;Re.interactionKicker.textContent="Shared HydroPip system",Re.interactionTitle.textContent="IBC reservoir";const e=n.water?n.batchMixed?"Mixed starter batch":"Awaiting circulation":"Empty",t=of(h),i=bo(h);Re.interactionSummary.textContent=`${n.water.toFixed(1)}% / ${t}`;const r=(s,o)=>`<button class="secondary-command ${i[s]?"needs-service":""}" data-service="${s}" ${i[s]?"":"disabled"}>${o}${i[s]?'<span class="service-needed">Needs attention</span>':""}</button>`;Yt(cn,`<div class="storage-actions reservoir-actions">
    ${r("water",n.water>ba?`Refill at ${ba}%`:"Refill fresh batch")}
    ${r("mix",n.mixChecked?"Mixing confirmed":n.batchMixed?"Check circulation":"Circulate batch")}
    ${r("check",n.flowChecked&&!n.lineClogged?"Delivery confirmed":"Check tower delivery")}
    ${n.lineClogged?'<button class="secondary-command needs-service" data-focus-object="filter">Inspect feed filter<span class="service-needed">Needs attention</span></button>':""}
  </div><div class="hydro-readings">
    <label>Tank level <strong>${n.water.toFixed(1)}%</strong><meter min="0" max="100" low="30" high="70" optimum="100" value="${n.water}" aria-label="Reservoir water"></meter></label>
  </div><div class="queue-list">
    <div class="status-strip"><span>Batch ${n.batchNumber}</span><strong>${e}</strong></div>
    <div class="status-strip"><span>Mixing pump</span><strong>${n.mixChecked?"Circulation confirmed":"Check top discharge"}</strong></div>
    <div class="status-strip" data-feed-status><span>Feed pump</span><strong>${t}</strong></div>
    <div class="status-strip"><span>Tower delivery</span><strong>${n.flowChecked&&!n.lineClogged?"All outlets checked":h.towers.some(s=>s.built&&!s.repaired)?"Repair towers first":"Check top outlets"}</strong></div>
  </div><details class="system-notes"><summary>HydroPip field notes</summary>
    <p>Two pumps have different jobs: one circulates within the IBC; the other sends brief feeds to the tops of the towers. Water moves through reusable 50/50 perlite and vermiculite. Excess drains away, not back to the tank.</p>
    <p>Let the tank level fall, then mix a fresh batch. Choose real nutrient strength from plant development at refill, not per tower. Check circulation, delivery and media before assuming more fertilizer is needed. pH and optional EC/TDS readings need crop and water context.</p>
    <p>This farm uses a starter batch for its tower-to-garden succession. Real HydroPip also supports tower harvests and moving suitable mature plants into raised beds. The four-layer towers, timers and refill threshold here are simplified for play, not build dimensions or a feeding prescription.</p>
    <a href="https://hydropip-pip-api.onrender.com/field-guide" target="_blank" rel="noopener noreferrer">Open the real HydroPip Field Guide</a>
  </details>`)}function Xb(){Re.interactionKicker.textContent="Farm improvements",Re.interactionTitle.textContent="Homestead Shop",Re.interactionSummary.textContent=`${Qi()} spendable coins. Production, soil care, and livestock.`;const n=Object.entries(zi).map(([i,r])=>{const s=Xn(h.farm,i),o=cu(h,i);return`<div class="shop-item"><strong>${r.label} / ${s}/2</strong><p>${r.detail}</p><button class="economy-command" data-buy-farm="${i}" ${!o||o.reason||Qi()<o.cost?"disabled":""}><span>${o?o.reason||`Build ${o.label}`:"Complete"}</span><strong>${o?`${o.cost} coins`:"Owned"}</strong></button></div>`}).join(""),e=h.beds.map((i,r)=>i.built&&i.capacity<4?Yn(`Bed ${r+1}: ${Cn(h,"bed",r)||`add plot (${i.capacity}/4)`}`,gt.bedUpgrade[r],`upgrade-bed-${r}`,!!Cn(h,"bed",r)||Qi()<gt.bedUpgrade[r]):"").join("")+h.towers.map((i,r)=>i.built&&!i.irrigationUpgraded?Yn(`Tower ${r+1}: ${Cn(h,"drippers")||"precision drippers"}`,gt.queueUpgrade,`upgrade-queue-${r}`,!!Cn(h,"drippers")||Qi()<gt.queueUpgrade):"").join(""),t=Object.entries(ro).map(([i,r])=>{const s=h.cosmetics.owned.includes(i),o=h.cosmetics.active.includes(i);return`<button class="economy-command" ${s?`data-toggle-cosmetic="${i}"`:`data-buy-cosmetic="${i}"`} ${!s&&Qi()<gt.cosmetics[i]?"disabled":""}><span>${s?`${o?"Hide":"Show"} ${r.label}`:r.label}</span><strong>${s?"Owned":`${gt.cosmetics[i]} coins`}</strong></button>`}).join("");Yt(cn,`<div class="shop-list">${n}</div><div class="queue-list"><span>Production upgrades</span>${e||"<p>All production upgrades installed.</p>"}</div><div class="queue-list"><span>Decorations</span>${t}</div>`)}function Bf(n){const e=cu(h,n);if(e){if(e.reason||h.coins<e.cost){He(e.reason||`You need ${e.cost-h.coins} more coins.`);return}bi(0,()=>{if(!my(h,n))throw new Error("Equipment unavailable")},!0)&&(Ft("build","build"),He(`${e.label} added to the farm.`),Xe("farm_upgrade"),lt())}}function Xs(n,e=null){const t=h.coins;let i=!1;n==="compost"&&(i=_y(h,$e(),oo)),n==="feed"&&Te[e]&&(i=yy(h,e,$e(),oo)),n==="eggs"&&(i=by(h)),n==="sell-eggs"&&Math.hypot(Ee.x-nt.market.x,Ee.z-nt.market.z)<3.6&&(i=wy(h)),n==="enrich"&&(i=My(h,Number(e))),i&&(Di(h,n==="sell-eggs"?"egg-sale":n,e),Ft(n==="sell-eggs"?"sell":"service",n==="sell-eggs"?"sale":"service"),He({compost:"Compost batch started.",feed:`Fed the coop. ${Xn(h.farm,"coop")} egg(s) will be ready soon.`,eggs:"Eggs collected; one coop clean-out added to compost scraps.","sell-eggs":"Fresh eggs sold at the stand.",enrich:"Bed enriched for its next four plantings."}[n]),Xe(`farm_${n}`),lt(),n==="sell-eggs"&&pi.coins(h.coins-t,Ya(nt.market)))}function Yb(n){const e=h.farm;if(Re.interactionKicker.textContent="Farm care",Re.interactionTitle.textContent=zi[n].label,n==="rainTank")Re.interactionSummary.textContent="Collected rainwater supplements the main reservoir.",Yt(cn,`<div class="status-strip"><span>Tower water consumption</span><strong>${Xn(e,n)*10}% lower</strong></div><p>Active while tower layers grow. Refill the main reservoir as usual.</p>`);else if(n==="composter")Re.interactionSummary.textContent=`${e.scraps}/24 scraps / ${e.compost}/12 compost bags`,Yt(cn,`<div class="status-strip"><span>Compost batch</span><strong>${e.compostReadyAt?vs(e.compostReadyAt):"Ready to start"}</strong></div><button class="economy-command" data-farm-action="compost" ${e.compostReadyAt||e.scraps<2||e.compost>=12?"disabled":""}><span>Compost 2 scraps</span><strong>1 bag / ${Xn(e,n)===2?40:60}s</strong></button><p>Harvest trimmings and coop clean-outs supply scraps. Apply finished compost at a garden bed.</p>`);else{Re.interactionSummary.textContent=`${e.eggs}/12 eggs packed / ${e.eggsReady} in the nest`;const t=Qn.filter(i=>h.rack[i]>0);Yt(cn,`<div class="status-strip"><span>${Xn(e,n)} hen(s)</span><strong>${e.coopReadyAt?vs(e.coopReadyAt):e.eggsReady?"Eggs ready":"Ready for feed"}</strong></div><div class="crop-actions">${t.map(i=>`<button class="crop-button" data-feed-hens="${i}" ${e.coopReadyAt||e.eggsReady?"disabled":""}><span>Feed 1 ${Te[i].label}<small>${h.rack[i]} on rack</small></span></button>`).join("")||"<p>No stored vegetables for feed.</p>"}</div><button class="economy-command" data-farm-action="eggs" ${!e.eggsReady||e.eggs+e.eggsReady>12?"disabled":""}><span>Collect ${e.eggsReady||Xn(e,n)} egg(s)</span><strong>Pack for market</strong></button><p>Sell packed eggs at the Veg Stand for 8 coins each. Hens stay safe between feedings.</p>`)}}function jb(){cn.onclick=n=>{const e=n.target.closest("button");if(!e||e.disabled)return;const t=kt,i=JSON.stringify(h.carry),r=Number(t?.split("-")[1]);if(e.dataset.command){const s=e.dataset.command;if(s==="open-orders")return cr();s.startsWith("repair-tower-")&&gu(Number(s.at(-1))),s.startsWith("build-tower-")&&vu(Number(s.at(-1))),s.startsWith("pickup-")&&lo(Number(s.at(-1))),s.startsWith("return-")&&er(Number(s.at(-1))),s.startsWith("transplant-")&&uo(Number(s.at(-1))),s.startsWith("harvest-")&&ho(Number(s.at(-1))),s.startsWith("upgrade-queue-")&&Lf(Number(s.at(-1))),s.startsWith("upgrade-bed-")&&Df(Number(s.at(-1))),s==="build-market"&&xu(),s==="upgrade-market"&&yu(),s==="stage-produce"&&fo()}if(e.dataset.queueCrop){const s=cn.querySelector('[name="towerLayer"]:checked:not(:disabled)');Ef(r,e.dataset.queueCrop,s?Number(s.value):null)}if(e.dataset.pickupJob&&lo(r,e.dataset.pickupJob),e.dataset.buyFarm&&Bf(e.dataset.buyFarm),e.dataset.farmAction&&Xs(e.dataset.farmAction),e.dataset.feedHens&&Xs("feed",e.dataset.feedHens),e.dataset.enrichBed!==void 0&&Xs("enrich",Number(e.dataset.enrichBed)),e.dataset.focusObject){Xt(e.dataset.focusObject);return}if(e.dataset.collectCrop&&wf(e.dataset.collectCrop),e.dataset.rescueSeeds!==void 0&&Mf(),e.dataset.expandVault!==void 0&&Sf(),e.dataset.harvestCrop&&ho(r,e.dataset.harvestCrop),e.dataset.loadCrop&&Pa(e.dataset.loadCrop,ee(`#rack-qty-${e.dataset.loadCrop}`).value),e.dataset.storeCrop&&fo(e.dataset.storeCrop),e.dataset.loadNeeded){const s=Dn(h);s&&Pa(s.crop,xn(h,s).load)}e.dataset.service&&Uf(e.dataset.service),e.dataset.flushLine!==void 0&&If(),e.dataset.buyCosmetic&&kf(e.dataset.buyCosmetic),e.dataset.toggleCosmetic&&Fb(e.dataset.toggleCosmetic),vt()&&/^(tower|bed)-/.test(t)&&i!==JSON.stringify(h.carry)?un():rn.hidden&&To(t)}}function To(n,e=!0){if(kn.hidden=!0,!(!n||!nt[n])&&!(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))){if(n==="market"&&h.market.built){kt="market",cr();return}kt=n,ti.hidden=!0,ln.hidden=!0,ni.hidden=!1,Cs(),n.startsWith("tower-")?Hb(Number(n.split("-")[1])):n.startsWith("bed-")?Vb(Number(n.split("-")[1])):n==="vault"?Gb():n==="market"?Wb():n==="rack"?$b():n==="reservoir"?qb():n==="filter"?(Re.interactionKicker.textContent="Tower water supply",Re.interactionTitle.textContent="Feedline filter",Re.interactionSummary.textContent=h.hydro.lineClogged?"Restricted flow: tower growth at 50%. Garden crops are unaffected.":"Full flow to all connected towers.",Yt(cn,`<button class="economy-command" data-flush-line ${h.hydro.lineClogged?"":"disabled"}><span>${h.hydro.lineClogged?"Clear clog":"Filter clear"}</span><strong>No cost</strong></button>`)):n==="workshop"?Xb():["coop","composter","rainTank"].includes(n)&&Yb(n),jb(),e&&Mo(),Es.textContent=wu(n)}}function un(){kn.hidden=!0,ee("#homesteadButton").setAttribute("aria-expanded","false"),ti.hidden=!0,ni.hidden=!0,ln.hidden=!0,qa.setAttribute("aria-expanded","false"),kt=null,Cs(),Mo()}function ja(){h.market.built&&(un(),ui=null,zn=null,di=null,mn(),kn.hidden=!1,ee("#homesteadButton").setAttribute("aria-expanded","true"),Sa.render(h),Cs())}function zf(n,e){if(n==="close")return un();if(n==="render")return Sa.render(h);if(!h.market.built)return;if(n==="focus"){const o=Object.hasOwn(zi,e)&&!h.farm.owned.includes(e)?"workshop":e;return un(),Xt(o)}const t=h.coins,i=h.xp,r=Mr(h);let s=!1;if(n==="project"&&(s=sy(h,e)),n==="mastery"&&(s=oy(h,e)),n==="request-accept"&&(s=ay(h,e)),n==="request-claim"&&(s=cy(h)),n==="request-refresh"&&(s=ly(h)),n==="request-abandon"&&h.homestead.request&&(h.homestead.request=null,h.homestead.requestSerial++,s=!0),n==="pin"&&Jn(h).some(o=>o.id===e&&o.chapter<=h.chapter)&&(h.homestead.pinned=e,s=!0),!!s){if(["project","mastery","request-claim"].includes(n)){Ft("celebrate","task-complete");const o=n==="project"&&{3:" Your basket now holds 7 crops.",6:" Seed packets now contain 6 seeds at the same price.",12:" Tower water use is now 10% lower.",18:" The harvest festival display is installed."}[h.homestead.claimed.length];He(Mr(h)?"Master Grower! Your homestead and crop book are complete. New community requests await.":`Reward earned.${o||""}`)}if(Xe(`homestead_${n}`),lt(),Sa.render(h),["project","mastery","request-claim"].includes(n)){const o=!r&&Mr(h),a=ir.find(d=>d.id===e),c=h.homestead.claimed.length,l=n==="project"&&{3:"Basket expanded to 7 crops!",6:"Six seeds in every packet!",12:"10% less tower water use!",18:"Harvest festival unlocked!"}[c],u=o?"Master Grower!":n==="project"?a.title:n==="mastery"?`${Te[e].label} mastery ${h.homestead.mastery[e]}/3`:"Community request complete!";pi.celebrate({title:u,detail:`+${h.coins-t} coins / +${h.xp-i} XP${l?`. ${l}`:""}${n==="mastery"?" / +2 seeds":""}`,major:o||n==="project"||n==="mastery"&&h.homestead.mastery[e]===3,rhythm:o||n==="project"&&c%3===0}),pi.coins(h.coins-t,Ya())}}}function Hf(){if(h.campaignComplete)return ja();kn.hidden=!0,ni.hidden=!0,ln.hidden=!0,ti.hidden=!1,qa.setAttribute("aria-expanded","true"),Cs(),Nf()}function cr(){kn.hidden=!0,h.market.built&&(kt="market",ti.hidden=!0,ni.hidden=!0,ln.hidden=!1,Cs(),Eo(),h.tutorial.marketSeen||(h.tutorial.marketSeen=!0,Xe("market_seen")))}function wu(n=kt){if(vt()&&!kt&&h.carry?.kind==="starter")return In()?"Transplant":"Return";if(!kt&&os())return"Deliver";if(!n)return h.carry?.kind==="starter"&&In()<=0?"Return":h.carry?.kind==="produce"&&h.carry.items.length>=Ot(h).basket&&h.market.built?os()?"Deliver":"Stage":gi()?"Guide":"Inspect";const e=gi();if(n==="vault")return"Seeds";if(n==="market"){const t=Dn(h)||gs();return h.market.built&&t&&xn(h,t).needed===0?"Deliver":h.market.built?"Orders":"Build"}if(n==="rack")return h.carry?.kind==="produce"?"Stage":"Inspect";if(n==="reservoir")return"Service";if(n==="filter")return h.hydro.lineClogged?"Clear clog":"Inspect";if(n==="workshop")return"Shop";if(n.startsWith("tower-")){const t=Number(n.split("-")[1]),i=h.towers[t];return i.built?i.repaired?h.carry?.kind==="starter"&&h.carry.sourceTower===t?"Return":Bi(i,$e())&&!h.carry?"Pick up":"Plan":"Repair":"Build"}if(n.startsWith("bed-")){const t=Number(n.split("-")[1]);return h.carry?.kind==="starter"&&h.beds[t].plants.length>=h.beds[t].capacity&&In()<=0?"Return":h.carry?.kind==="starter"?"Transplant":h.beds[t].plants.some(i=>i.readyAt<=$e())?"Harvest":!kt&&e&&e!==n?"Guide":"Inspect"}return"Inspect"}function Vf(){if(Ct||!_n.hidden||!rn.hidden||!xi.hidden||!Lr.hidden)return;Ir();const n=!!kt,e=kt||Gf();if(vt()&&!n&&h.carry?.kind==="starter"){const i=Tf()||`tower-${h.carry.sourceTower}`;return i===e?i.startsWith("bed-")?uo(Number(i.split("-")[1])):er(h.carry.sourceTower):Xt(i,!0)}if(!n&&os()){const i=Dn(h),r=i&&xn(h,i).needed===0?i:h.orders.find(s=>s.status==="waiting"&&xn(h,s).needed===0);return La(h.orders.indexOf(r))}if(!e){if(h.carry?.kind==="starter"&&In()<=0){He("Beds are full, so Pip is returning this starter to its tower."),Xt(`tower-${h.carry.sourceTower}`);return}if(h.carry?.kind==="produce"&&h.carry.items.length>=Ot(h).basket&&h.market.built){He("Basket is full, so Pip is heading to the Harvest Rack."),Xt("rack");return}const i=gi();if(i){Xt(i,vt());return}Hf();return}if(e.startsWith("tower-")){const i=Number(e.split("-")[1]),r=h.towers[i];if(!r.built)return vu(i);if(!r.repaired)return gu(i);if(h.carry?.kind==="starter"&&h.carry.sourceTower===i)return er(i);if(Bi(r,$e())&&!h.carry)return lo(i)}if(e.startsWith("bed-")){const i=Number(e.split("-")[1]);if(h.carry?.kind==="starter"&&h.beds[i].plants.length>=h.beds[i].capacity&&In()<=0)return er(h.carry.sourceTower);if(h.carry?.kind==="starter")return uo(i);if(h.beds[i].plants.some(r=>r.readyAt<=$e())){const r=Dn(h)?.crop;return ho(i,r&&h.beds[i].plants.some(s=>s.crop===r&&s.readyAt<=$e())?r:null)}}if(e==="market"&&h.market.built){const i=Dn(h)||gs();return i&&xn(h,i).needed===0?La(h.orders.indexOf(i)):cr()}if(e==="market"&&!h.market.built)return xu();if(e==="rack"&&h.carry?.kind==="produce")return fo();if(e==="filter"&&h.hydro.lineClogged)return If();if(h.carry?.kind==="starter"&&In()<=0)return er(h.carry.sourceTower);const t=gi();if(!n&&t&&t!==e)return Xt(t,vt());To(e)}function Gf(n=1.8){let e=null,t=n;return Object.entries(nt).forEach(([i,r])=>{if(["coop","composter","rainTank"].includes(i)&&!h.farm.owned.includes(i)||i.startsWith("bed-")&&!h.beds[Number(i.split("-")[1])].built)return;const s=Math.hypot(Ee.x-r.x,Ee.z-r.z);s<t&&(e=i,t=s)}),e}function Xt(n,e=!1){if(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))return;const t=nt[n];t&&(zn=null,di=null,ui=n,Ma=e,Ee.target={x:t.x,z:t.z+(n==="workshop"?1.9:n==="market"?1.3:1.15)},un(),!vt()&&He(`Pip is heading to ${n.startsWith("tower")?`Tower ${Number(n.at(-1))+1}`:n.startsWith("bed")?`Grow Bed ${Number(n.at(-1))+1}`:n==="vault"?"the Seed Vault":n==="market"?"the Veg Stand":n==="rack"?"the Harvest Rack":n==="reservoir"?"the reservoir":n==="filter"?"the feed filter":Object.hasOwn(zi,n)?`the ${zi[n].label}`:"the farm shop"}.`))}function Jb(n){const e=Number(n.split("-")[1]);if(n.startsWith("tower-")){if(h.carry?.kind==="starter"&&h.carry.sourceTower===e)return er(e),!0;const t=h.towers[e].queue.filter(i=>i.readyAt!==null&&i.readyAt<=$e());if(!h.carry&&t.length&&new Set(t.map(i=>i.crop)).size===1)return lo(e),!0}if(n.startsWith("bed-")){if(h.carry?.kind==="starter")return uo(e),!0;const t=h.beds[e].plants.filter(r=>r.readyAt<=$e()),i=Dn(h)?.crop;if(t.length&&(new Set(t.map(r=>r.crop)).size===1||t.some(r=>r.crop===i)))return ho(e,t.some(r=>r.crop===i)?i:t[0].crop),!0}return n==="rack"&&h.carry?.kind==="produce"?(fo(),!0):!1}function Kb(n){if(Ct)return;let e=(gn.right?1:0)-(gn.left?1:0)+wa.x,t=(gn.down?1:0)-(gn.up?1:0)+wa.z;if(Ee.target&&!e&&!t){const o=Ee.target.x-Ee.x,a=Ee.target.z-Ee.z,c=Math.hypot(o,a);if(c<.16){if(Ee.target=null,ui){const l=ui;ui=null;const u=Ma;Ma=!1;const d=zn;zn=null;const p=di;if(di=null,l==="market"&&d){const f=h.orders.findIndex(g=>g.id===d&&g.status==="waiting");f>=0?_u(f):He("That customer has left. Your produce is still in the basket."),rn.hidden&&!vt()&&cr()}else if(l==="rack"&&p){const f=h.orders.find(g=>g.id===p&&g.status==="waiting");f&&Pa(f.crop,xn(h,f).load),cr()}else{const f=l.startsWith("tower-")&&h.carry?.kind==="starter"&&h.carry.sourceTower===Number(l.split("-")[1])&&In()<=0;f&&er(h.carry.sourceTower),vt()&&(f||u&&Jb(l))||To(l)}}}else e=o/c,t=a/c}else(e||t)&&(Ee.target=null,ui=null,zn=null,di=null);const i=!!(e||t);if(i){const o=Math.hypot(e,t);e/=Math.max(1,o),t/=Math.max(1,o),Ee.x=It.clamp(Ee.x+e*Ee.speed*n,-13.8,13.8),Ee.z=It.clamp(Ee.z+t*Ee.speed*n,-8.5,8.5),Ee.pendingFacing=Math.atan2(e,t),Ee.direction=Math.abs(e)>Math.abs(t)?e>0?"east":"west":t>0?"south":"north",Et.rotation.y=It.lerp(Et.rotation.y,Ee.pendingFacing,Math.min(1,n*12))}Et.position.x=Ee.x,Et.position.z=Ee.z;const r=Et.userData.parts;if(r){i&&(Ee.gaitPhase+=Ee.speed*n*1.65);const o=Math.sin(Ee.gaitPhase),a=Math.min(1,n*14);if(r.body.position.y=i?Math.abs(o)*.014:Math.sin(performance.now()*.0018)*.005,r.body.rotation.x=0,r.legs.forEach((c,l)=>{const u=l?-o:o;c.rotation.x=It.lerp(c.rotation.x,i?-u*.4:0,a),r.knees[l].rotation.x=It.lerp(r.knees[l].rotation.x,i?Math.max(0,-u)*.38:0,a),r.boots[l].rotation.x=-c.rotation.x-r.knees[l].rotation.x*.7;const d=r.arms[l];d.rotation.x=It.lerp(d.rotation.x,h.carry?-.75:i?u*.28:0,a),d.rotation.z=(l?1:-1)*(h.carry?-.08:.08),r.elbows[l].rotation.x=It.lerp(r.elbows[l].rotation.x,h.carry?-.65:-.08,a)}),Ee.actionTime>0){Ee.actionTime-=n;const c=Math.sin((1-Ee.actionTime/.72)*Math.PI);["plant","transplant","harvest"].includes(Ee.action)&&(r.body.rotation.x=c*.22),["repair","service","build"].includes(Ee.action)&&(r.arms[0].rotation.x=-1.2*c),Ee.action==="sell"&&(r.arms[1].rotation.x=-1.25*c),Ee.action==="celebrate"&&(r.arms[0].rotation.x=-1.5*c,r.arms[1].rotation.x=-1.5*c,r.body.position.y+=c*.13)}else r.body.rotation.x=0,Ee.action=i?"run":"idle"}const s=Gf();kt||(Es.textContent=wu(s))}function Ja(n,e=!1){const t=vt(),i=new U(Ee.x*(t?.95:.55),.45,Ee.z*(t?.9:.45));t&&!ln.hidden&&i.set(nt.market.x+.3,.45,nt.market.z+2.8),e||h.settings.reducedMotion?ta.copy(i):ta.lerp(i,1-Math.exp(-n*5));const s=t?It.clamp(wn/520,.45,1):1;At.position.copy(ta).add(new U(7.7,13,14.3).multiplyScalar(s)),At.lookAt(ta),At.zoom=e||h.settings.reducedMotion?Kn:It.lerp(At.zoom,Kn,1-Math.exp(-n*12));const o=t&&[ni,ln,ti,kn].find(f=>!f.hidden),a=t&&Hn>620&&innerWidth>innerHeight,c=o&&a?o.getBoundingClientRect().width*.5:0,l=o&&!a?o.getBoundingClientRect().height*.4:0,u=e||h.settings.reducedMotion?1:1-Math.exp(-n*6),d=It.lerp(At.view?.enabled?At.view.offsetX:0,c,u),p=It.lerp(At.view?.enabled?At.view.offsetY:0,l,u);d>.1||p>.1?At.setViewOffset(Hn,wn,d,p,Hn,wn):At.clearViewOffset(),At.updateProjectionMatrix(),At.updateMatrixWorld()}function Rs(n){Kn=It.clamp(n,.7,vt()?1.3:1.55),ee("#zoomOut").disabled=Kn<=.7001,ee("#zoomIn").disabled=Kn>=(vt()?1.3:1.55)-1e-4}function Zb(){mt.updateMatrixWorld(!0);const n=nn.getBoundingClientRect(),e=[qa,ao,lf,Sr,ee(".camera-tools"),ee("#landscapeNotice"),ni,ln,ti,kn,...vt()?[ee("#thumbstick"),Es,ee("#homesteadButton")]:[]].filter(u=>!u.hidden&&u.getClientRects().length&&getComputedStyle(u).visibility!=="hidden").map(u=>{const d=u.getBoundingClientRect();return{left:d.left-n.left,top:d.top-n.top,right:d.right-n.left,bottom:d.bottom-n.top}}),t=gi(),i=new Set(Xa()),r=new U;function s(u,d,p,f,g){const x={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(const v of[-p,p])for(const m of[0,f])for(const S of[-g,g]){r.set(u+v,m,d+S).project(At);const y=(r.x+1)*Hn/2,_=(1-r.y)*wn/2;x.left=Math.min(x.left,y),x.right=Math.max(x.right,y),x.top=Math.min(x.top,_),x.bottom=Math.max(x.bottom,_)}return x}Dl=s(Ee.x,Ee.z,.65,2.15,.45),e.push(Dl);for(const u of mt.children)u.userData.customerIndex!==void 0&&e.push(s(u.position.x,u.position.z,.45,2.2,.3));const o=[];for(const u of co){const d=u.userData.worldLabel;u.getWorldPosition(r);const p=Math.hypot(r.x-Ee.x,r.z-Ee.z),f=-r.clone().applyMatrix4(At.matrixWorldInverse).z;if(r.project(At),u.visible=!1,u.labelElement.hidden=!0,p>(vt()?4.8:5.4)||f<=0||r.z<-1||r.z>1)continue;const g=(r.x+1)*Hn/2,x=(1-r.y)*wn/2,v={left:g-d.width/2,right:g+d.width/2,top:x-d.height/2,bottom:x+d.height/2};if(v.left<6||v.right>Hn-6||v.top<6||v.bottom>wn-6)continue;const m=u.userData.interactiveId;if(u.labelElement.classList.toggle("needs-attention",i.has(m)),!ln.hidden&&m!=="market"&&m!=="rack")continue;const S=(m===kt?200:m===t?100:0)+(/ready/i.test(d.text)?20:0)-p;o.push({label:u,data:d,box:v,depth:f,priority:S})}o.sort((u,d)=>d.priority-u.priority);const a=(u,d)=>u.left<d.right+5&&u.right>d.left-5&&u.top<d.bottom+5&&u.bottom>d.top-5;let c=0;const l=new Set;for(const{label:u,data:d,box:p,depth:f}of o){const g=u.userData.interactiveId;if(c>=(vt()?3:5)||l.has(g))continue;const x=[0,-32,32].find(v=>{const m={...p,top:p.top+v,bottom:p.bottom+v};return m.top>=6&&m.bottom<=wn-6&&!e.some(S=>a(m,S))});x!==void 0&&(p.top+=x,p.bottom+=x,u.visible=!0,u.labelElement.hidden=!1,u.labelElement.style.transform=`translate(${Math.round(p.left)}px, ${Math.round(p.top)}px)`,d.bounds=p,e.push(p),l.add(g),c+=1)}}function Qb(n){const e=Un(h);Zy(h,n,$e(),(1-Xn(h.farm,"rainTank")*.1)*Ot(h).water),e&&ib(h,n,$e())&&(He("Feed filter clogged. Check the delivery line before changing the nutrient batch.",6500),Xe("feedline_clogged"))}function ew(n=.5){if(!h.market.built)return;const e=h.orders.length;h.orders.forEach((r,s)=>{r.status==="waiting"&&r.expiresAt<=$e()&&r.id!==h.selectedOrderId&&r.id!==zn&&fu(r,s,!1)}),h.orders=h.orders.filter(r=>r.id===h.selectedOrderId||r.id===zn||r.expiresAt>$e());const t=dy(h,n/oo,Af);e!==h.orders.length||t?(Xe(),lt()):ln.hidden||Eo()}function Wf(n){const e=ps[n.chapter];Re.chapterResultKicker.textContent=n.reward.campaignComplete?"Homestead foundations complete":`Chapter ${e.number} complete`,Re.chapterResultTitle.textContent=n.reward.campaignComplete?"The Pro Yard is thriving.":n.chapter===0?"The Homestead is growing.":"Your three-tower farm is ready!",Re.chapterResultSummary.textContent=n.reward.campaignComplete?"Your four-tower farm is open. Complete 18 homestead projects and earn 15 crop mastery badges to become a Master Grower.":n.chapter===0?"The first tower and Veg Stand are back in business.":"You expanded to three towers and served the neighborhood with tomato and kale. Next: build the Pro Yard.",Re.chapterCoins.textContent=`+${n.reward.coins||0}`,Re.chapterXp.textContent=`+${n.reward.xp||0}`,Re.chapterUnlock.textContent=n.reward.campaignComplete?"Homestead projects":ps[n.chapter+1].shortName,ee("#continueChapter").textContent=n.reward.campaignComplete?"Grow the homestead":"Continue",rn.hidden=!1,Ct=!0,mn(),Ii.stop(),pi.chapter(rn,!!n.reward.campaignComplete),ee("#continueChapter").focus(),Xe("chapter_complete"),Zn(n.reward.campaignComplete?"campaign_complete":"campaign_chapter_complete",{chapter:n.chapter+1,coins:h.coins,xp:h.xp})}function lt(){bu(),Nf(),Ff(),!ni.hidden&&kt&&To(kt,!1),ln.hidden||Eo(),Mo(),Ta.update()}function xs(){Hn=Math.max(1,nn.clientWidth),wn=Math.max(1,nn.clientHeight);const n=wo?1:Ea==="desktop"?1.55:Ss?1.25:1.15;bt.setPixelRatio(Math.max(1,Math.min(window.devicePixelRatio||1,n))),bt.setSize(Hn,wn,!1),At.aspect=Hn/wn,At.updateProjectionMatrix(),Rs(Kn),Ja(1,!0)}function mn(){uf?.reset(),Object.keys(gn).forEach(n=>{gn[n]=!1}),ee(".campaign-controls").querySelectorAll("[data-move]").forEach(n=>n.classList.remove("is-active"))}function Mu(n){if(Ct=n,document.body.classList.toggle("is-paused",Ct),ab.hidden=!Ct,Ct){mn(),Ii.stop(),Xe("pause");return}Ir()}function $f(n){const e=Math.min(.05,(n-jd)/1e3||0);jd=n,nn.clientWidth>0&&nn.clientHeight>0&&(nn.clientWidth!==Hn||nn.clientHeight!==wn)&&xs(),!Ct&&_n.hidden&&rn.hidden&&(Kb(e),Qb(e),Pb(e),Lb(e),Ja(e),n-Jd>500&&(Jd=n,h=Pr(h),ew(),bu(),Ff(),_f()!==hf&&Mo(),gb(),!ni.hidden&&kt&&To(kt,!1)),n-df>5e3&&Xe(),fa&&n>fa&&(ao.textContent=ei(h)?.detail||"The homestead is ready for its next grow.",fa=0,ao.classList.remove("is-active"))),yb(),n-Kd>250&&(Kd=n,Ta.update()),Zb(),bt.render(mi,At),Uc+=1,n-Ic>=3e3&&(Uc/(n-Ic)*1e3<32&&Ea==="desktop"&&(Ea="adaptive",bt.shadowMap.enabled=!1,ii.castShadow=!1,bt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.15)),xs()),Ic=n,Uc=0),requestAnimationFrame($f)}function tw(n){const e=bt.domElement.getBoundingClientRect();Nc.x=(n.clientX-e.left)/e.width*2-1,Nc.y=-((n.clientY-e.top)/e.height)*2+1,kc.setFromCamera(Nc,At);const i=kc.intersectObjects(mt.children,!0).find(o=>o.object.visible&&(o.object.userData.interactiveId||o.object.userData.instanceTargets?.[o.instanceId]));if(i){let o=i.object;for(;o&&!o.userData.orderId;)o=o.parent;return{id:i.object.userData.interactiveId||i.object.userData.instanceTargets[i.instanceId],orderId:o?.userData.orderId}}const r=new Ki(new U(0,1,0),0),s=new U;return kc.ray.intersectPlane(r,s)?{point:s}:null}function at(){const n=ei(h),e=$y(h);return{version:h.version,chapter:h.chapter,taskIndex:h.taskIndex,taskId:n?.id||null,coins:h.coins,xp:h.xp,level:h.level,challengeUnlocked:h.challengeUnlocked,campaignComplete:h.campaignComplete,proPip:h.proPip,unlockedCrops:[...h.unlockedCrops],towersBuilt:h.towers.filter(t=>t.built).length,bedsBuilt:h.beds.filter(t=>t.built).length,marketBuilt:h.market.built,marketLevel:h.market.level,marketStage:ws(h),marketOffer:Gi(h),visitorCapacity:au(h),milestones:So(n),selectedObject:kt,selectedOrderId:h.selectedOrderId,saleAnimations:$s.length,pendingDeliveryId:zn,pendingRackOrderId:di,pipTarget:Ee.target,queueCapacities:h.towers.map(t=>t.queueCapacity),irrigationUpgrades:h.towers.map(t=>t.irrigationUpgraded),specializations:h.towers.map(t=>t.specialization),queueCount:h.towers.reduce((t,i)=>t+i.queue.length,0),gardenCount:h.beds.reduce((t,i)=>t+i.plants.length,0),seeds:{...h.seeds},rack:{...h.rack},carry:h.carry?JSON.parse(JSON.stringify(h.carry)):null,orders:h.orders.map(t=>({...t})),featuredOrder:gs()?{...gs()}:null,stats:JSON.parse(JSON.stringify(h.stats)),ledger:e,openBedCount:In(),taskDrawerOpen:!ti.hidden,interactionOpen:!ni.hidden,orderDrawerOpen:!ln.hidden,welcomeVisible:!_n.hidden,chapterResultVisible:!rn.hidden,guideTarget:gi(),actionLabel:Es.textContent,marketChipVisible:!Sr.hidden,marketChipText:Sr.hidden?"":Sr.textContent.trim().replace(/\s+/g," "),paused:Ct,pipPosition:{x:Number(Ee.x.toFixed(2)),z:Number(Ee.z.toFixed(2))},pipDirection:Ee.direction,pipHeight:Number(new Hi().setFromObject(Et).getSize(new U).y.toFixed(3)),leafEarCount:Et.userData.parts?.leafEars?.length||0,activeHudCoverage:nw(),coreTextMinimum:iw(),savePresent:!!localStorage.getItem(yo),performanceTier:Ea,renderCalls:bt.info.render.calls,renderTriangles:bt.info.render.triangles}}function nw(){const n=nn.getBoundingClientRect(),t=["#objectiveBar","#campaignMessage","#carryChip","#marketChip"].map(i=>ee(i)).filter(i=>i&&!i.hidden&&i.getClientRects().length).reduce((i,r)=>{const s=r.getBoundingClientRect(),o=Math.max(0,Math.min(s.right,n.right)-Math.max(s.left,n.left)),a=Math.max(0,Math.min(s.bottom,n.bottom)-Math.max(s.top,n.top));return i+o*a},0);return Number((t/Math.max(1,n.width*n.height)).toFixed(3))}function iw(){const n=[...document.querySelectorAll("#objectiveTitle,#campaignMessage,#actionButton,#marketChip strong,#carryContents,#coinValue,#levelValue,#xpValue,#chapterValue,#interactionPanel>p,.crop-button span,.crop-button small,.queue-slot time,.status-strip,.economy-command span,.order-card h3,.order-reward,.order-actions button,.task-row,.primary-task p")].filter(e=>e.getClientRects().length);return Math.min(...n.map(e=>Number.parseFloat(getComputedStyle(e).fontSize)))}function rw(){h.towers.forEach(n=>n.queue.forEach((e,t)=>{e.startedAt=$e()-1e3,e.readyAt=$e()-1})),Xe(),lt()}function sw(){h.beds.forEach(n=>n.plants.forEach(e=>{e.plantedAt=$e()-1e3,e.readyAt=$e()-1})),Xe(),lt()}function ow(n=500){h.coins+=n,Xe(),lt()}ub();lt();xs();_n.hidden=h.tutorial.welcomeSeen;h.tutorial.welcomeSeen?Zn("campaign_resume",{chapter:h.chapter+1,task:ei(h)?.id||"complete"}):Ct=!0;qa.addEventListener("click",()=>h.campaignComplete?ja():ti.hidden?Hf():un());ee("#homesteadButton").addEventListener("click",()=>kn.hidden?ja():un());Sr.addEventListener("click",()=>h.market.built?cr():Xt("market"));ee("#orderMarketUpgrade").addEventListener("click",()=>{yu(),Eo()});ee("#sellFarmEggs").addEventListener("click",()=>{Math.hypot(Ee.x-nt.market.x,Ee.z-nt.market.z)>=3.6?Xt("market"):Xs("sell-eggs")});ee("#closeTasks").addEventListener("click",un);ee("#closeInteraction").addEventListener("click",un);ee("#closeOrders").addEventListener("click",un);ee("#focusTaskButton").addEventListener("click",()=>Xt(gi()));Es.addEventListener("click",Vf);ee("#beginCampaign").addEventListener("click",()=>{h.tutorial.welcomeSeen=!0,_n.hidden=!0,Ct=!1,Ir(),Xe("campaign_start"),Zn("campaign_start",{chapter:h.chapter+1,task:ei(h)?.id}),He("Repair Tower 1 to make the first permanent improvement.")});ee("#pauseButton").addEventListener("click",()=>Mu(!0));ee("#resumeButton").addEventListener("click",()=>Mu(!1));let qf=!1;ee("#settingsButton").addEventListener("click",()=>{qf=Ct,Ct=!0,Ii.stop(),mn(),Xe("settings_open"),xi.hidden=!1,ee("#highContrastSetting").checked=h.settings.highContrast,ee("#pipCoachSetting").checked=h.tutorial.coach.enabled,ee("#reducedMotionSetting").checked=h.settings.reducedMotion,ee("#musicSetting").value=String(Math.round(h.settings.musicVolume*100)),ee("#effectsSetting").value=String(Math.round(h.settings.effectsVolume*100)),Re.musicValue.textContent=`${Math.round(h.settings.musicVolume*100)}%`,Re.effectsValue.textContent=`${Math.round(h.settings.effectsVolume*100)}%`});function Su(){aw.cancelImport(),xi.hidden=!0,Ct=qf,mn(),Xe("settings")}ee("#closeSettings").addEventListener("click",Su);ee("#settingsDone").addEventListener("click",Su);ee("#retrySave").addEventListener("click",()=>Xe("retry"));const aw=Xy(()=>h,n=>{h=n});ee("#saveWarning").addEventListener("click",()=>ee("#settingsButton").click());ee("#highContrastSetting").addEventListener("change",n=>{h.settings.highContrast=n.target.checked,bu()});ee("#pipCoachSetting").addEventListener("change",n=>n.target.checked?Ta.enable():Ta.disable());ee("#reducedMotionSetting").addEventListener("change",n=>{h.settings.reducedMotion=n.target.checked,n.target.checked&&pi.clearMotion()});ee("#musicSetting").addEventListener("input",n=>{h.settings.musicVolume=Number(n.target.value)/100,Re.musicValue.textContent=`${n.target.value}%`,As()});ee("#effectsSetting").addEventListener("input",n=>{h.settings.effectsVolume=Number(n.target.value)/100,Re.effectsValue.textContent=`${n.target.value}%`,As()});ee("#soundButton").addEventListener("click",()=>{h.settings.soundEnabled=h.settings.soundEnabled===!1,As(),Xe("sound_toggle"),h.settings.soundEnabled&&Ir()});As();ee("#resetFarm").addEventListener("click",()=>{xi.hidden=!0,Lr.hidden=!1});ee("#cancelReset").addEventListener("click",()=>{Lr.hidden=!0,xi.hidden=!1});ee("#confirmReset").addEventListener("click",()=>{h=Wy(),location.reload()});ee("#continueChapter").addEventListener("click",()=>{rn.hidden=!0,pi.clearMotion(),Bs=null,Ct=!1,Ft("celebrate","task-complete"),Xe("chapter_continue"),He(ei(h)?.story||"The homestead is ready for its next grow."),h.campaignComplete&&ja()});ee("#zoomOut").addEventListener("click",()=>Rs(Kn/1.15));ee("#zoomIn").addEventListener("click",()=>Rs(Kn*1.15));ee("#recenter").addEventListener("click",()=>{Rs(1),Ja(1,!0)});nn.addEventListener("wheel",n=>{if(Ct||!_n.hidden||!rn.hidden)return;n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?wn:1);Rs(Kn*Math.exp(-It.clamp(e,-160,160)*.0015))},{passive:!1});function Xf(n){if(Ct||!_n.hidden||!rn.hidden)return;Ir();const e=tw(n);if(e)if(e.orderId){const t=h.orders.findIndex(i=>i.id===e.orderId&&i.status==="waiting");t>=0&&(Rf(t),xn(h,h.orders[t]).needed===0?La(t):cr())}else e.id?Xt(e.id,vt()):e.point&&(un(),ui=null,zn=null,di=null,Ee.target={x:It.clamp(e.point.x,-13.8,13.8),z:It.clamp(e.point.z,-8.5,8.5)})}uf=tb({canMove:()=>!Ct&&_n.hidden&&rn.hidden&&xi.hidden&&Lr.hidden,onStart:()=>{(kt||[ni,ln,ti,kn].some(n=>!n.hidden))&&un(),pi.dismiss(),mn(),Ir(),Ee.target=null,ui=null,zn=null,di=null,Ma=!1},onMove:(n,e)=>{wa.x=n*.88+e*.47,wa.z=e*.88-n*.47},onLayout:()=>{mn(),xs()},closePanels:un});nb({onOpen:()=>{const n=Ct;return Ct=!0,mn(),Ii.stop(),Xe("display_options"),()=>{Ct=n,mn()}},onExit:()=>{mn(),Ii.stop(),Xe("display_exit"),_n.hidden&&rn.hidden&&xi.hidden&&Lr.hidden&&(Mu(!0),ee("#pauseReason").textContent="Your farm is saved. Resume when ready, or return to HydroPip.",ee("#resumeButton").focus())},onLeave:()=>{mn(),Ii.stop(),Xe("leave_game")},onResize:()=>{mn(),xs()}});const ki=new Map;let Ys=null,Ul=!1;nn.addEventListener("pointerdown",n=>{if(n.pointerType!=="touch")return Xf(n);if(nn.setPointerCapture(n.pointerId),ki.set(n.pointerId,{x:n.clientX,y:n.clientY,startX:n.clientX,startY:n.clientY}),ki.size===2){const[e,t]=[...ki.values()];Ys={distance:Math.max(1,Math.hypot(e.x-t.x,e.y-t.y)),zoom:Kn},Ul=!0,Ee.target=null,ui=null,zn=null,di=null}});nn.addEventListener("pointermove",n=>{const e=ki.get(n.pointerId);if(e&&(e.x=n.clientX,e.y=n.clientY,ki.size===2&&Ys&&!Ct&&_n.hidden&&rn.hidden)){const[t,i]=[...ki.values()];Rs(Ys.zoom*Math.hypot(t.x-i.x,t.y-i.y)/Ys.distance)}});function Yf(n){const e=ki.get(n.pointerId);e&&!Ul&&n.type==="pointerup"&&Math.hypot(n.clientX-e.startX,n.clientY-e.startY)<10&&Xf(n),ki.delete(n.pointerId),ki.size||(Ul=!1,Ys=null)}nn.addEventListener("pointerup",Yf);nn.addEventListener("pointercancel",Yf);document.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(e==="escape"){if(n.preventDefault(),!xi.hidden){Su();return}un();return}n.target instanceof HTMLElement&&n.target.matches("button,input,a,textarea,select")||(["arrowleft","arrowright","arrowup","arrowdown"," "].includes(e)&&n.preventDefault(),(e==="arrowleft"||e==="a")&&(gn.left=!0),(e==="arrowright"||e==="d")&&(gn.right=!0),(e==="arrowup"||e==="w")&&(gn.up=!0),(e==="arrowdown"||e==="s")&&(gn.down=!0),n.code==="Space"&&!n.repeat&&Vf())});document.addEventListener("keyup",n=>{const e=n.key.toLowerCase();(e==="arrowleft"||e==="a")&&(gn.left=!1),(e==="arrowright"||e==="d")&&(gn.right=!1),(e==="arrowup"||e==="w")&&(gn.up=!1),(e==="arrowdown"||e==="s")&&(gn.down=!1)});document.querySelectorAll("[data-move]").forEach(n=>{const e=n.dataset.move,t=i=>{gn[e]=i,n.classList.toggle("is-active",i)};n.addEventListener("pointerdown",i=>{i.preventDefault(),n.setPointerCapture(i.pointerId),t(!0)}),n.addEventListener("pointerup",()=>t(!1)),n.addEventListener("pointercancel",()=>t(!1)),n.addEventListener("pointerleave",()=>t(!1))});window.addEventListener("blur",mn);window.addEventListener("resize",xs);window.addEventListener("pagehide",()=>{mn(),Xe("pagehide")});document.addEventListener("visibilitychange",()=>{document.hidden?(mn(),Xe("visibility")):(h=Pr(hu()),As(),lt())});cf&&(window.__HYDROPIP_CAMPAIGN_TEST__={homesteadAction:zf,homesteadView(){return{...h.homestead,complete:Mr(h),perks:Ot(h),active:Jn(h).map(n=>({id:n.id,ready:Ba(h,n),goals:_o(h,n)}))}},neighborhoodView(){return ns.snapshot()},neighborhoodEvent(n,e=0){ns.start(n);for(let t=0;t<e;t+=.05)ns.update(.05,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});return ns.snapshot()},farmEquipmentView(){const n=mt.getObjectByName("farm coop");return{owned:h.farm.owned,hens:(n?.userData.hens||[]).map(e=>({position:e.position.toArray(),turn:e.rotation.y}))}},layerScreenPoint(n,e){const t=nt[`tower-${n}`].clone();t.y=.52+e*.61+.4,t.x+=e%2?.16:-.16,t.z+=.29-e*.18,t.project(At);const i=bt.domElement.getBoundingClientRect();return{x:i.left+(t.x+1)*i.width/2,y:i.top+(1-t.y)*i.height/2}},farmLayout(){return{positions:Object.fromEntries(Object.entries(nt).map(([n,e])=>[n,{x:e.x,z:e.z}])),attention:Xa(),labels:co.filter(n=>n.visible).map(n=>({id:n.userData.interactiveId,text:n.userData.worldLabel.text,distance:Math.hypot(n.getWorldPosition(new U).x-Ee.x,n.getWorldPosition(new U).z-Ee.z)})),feedline:!!mt.getObjectByName("reservoir tower feedline"),lineClogged:h.hydro.lineClogged}},snapshot:at,reservoirView(){return Py(mt.getObjectByName("water reservoir"))},hydroView(){let n=null;return mt.traverse(e=>{e.userData.flowSegments&&(n={visible:e.visible,count:e.count,matrices:Array.from(e.instanceMatrix.array.slice(0,48))})}),{flow:n,feed:of(h),available:bo(h),plantedLayers:$a(h)}},setWater(n){return h.hydro.water=It.clamp(n,0,100),Xe("test-water"),at()},viewState(){const n=bt.domElement.getBoundingClientRect(),e=At.projectionMatrix.elements;return{aspect:At.aspect,width:Hn,height:wn,canvasWidth:n.width,canvasHeight:n.height,bufferWidth:bt.domElement.width,bufferHeight:bt.domElement.height,squareRatio:e[0]*n.width/(e[5]*n.height),zoom:At.zoom,targetZoom:Kn,pipBounds:Dl,direction:At.getWorldDirection(new U).toArray(),labels:co.filter(t=>t.visible).map(t=>({...t.userData.worldLabel,opacity:1}))}},customerView(){const n=new Ih;return mt.children.filter(e=>e.userData.customerIndex!==void 0).map(e=>{const t=e.localToWorld(new U(0,1.65,0)).project(At);n.setFromCamera(new me(t.x,t.y),At);let i=n.intersectObjects(mt.children,!0).find(r=>r.object.visible)?.object;for(;i&&i.parent!==mt;)i=i.parent;return{index:e.userData.customerIndex,x:(t.x+1)*Hn/2,y:(1-t.y)*wn/2,unoccluded:i===e}})},focusObject:Xt,characterPortrait(n=.22){const e=new Yl;e.background=new ut(8894381),e.add(new nu(16775142,6585696,1.3));const t=new Na(16773330,1.5);t.position.set(-3,5,5),e.add(t);const i=zh(h.proPip);i.rotation.y=n,e.add(i);const r=new bn(30,.8,.1,20);r.position.set(0,1.8,6),r.lookAt(0,1.23,0);const s=480,o=600,a=new Ni(s,o);a.texture.colorSpace=Qt;const c=bt.getRenderTarget();try{bt.setRenderTarget(a),bt.render(e,r);const l=new Uint8Array(s*o*4);bt.readRenderTargetPixels(a,0,0,s,o,l);const u=document.createElement("canvas");u.width=s,u.height=o;const d=u.getContext("2d"),p=d.createImageData(s,o);for(let f=0;f<o;f++)p.data.set(l.subarray(f*s*4,(f+1)*s*4),(o-f-1)*s*4);return d.putImageData(p,0,0),u.toDataURL("image/png")}finally{bt.setRenderTarget(c),a.dispose(),Ui(i)}},characterRig(){Et.updateMatrixWorld(!0);const n=Et.userData.parts,e=t=>t.getWorldPosition(new U).toArray();return{handsAttached:n.hands.every((t,i)=>t.parent===n.elbows[i]&&n.elbows[i].parent===n.arms[i]),bootsAttached:n.boots.every((t,i)=>t.parent===n.knees[i]&&n.knees[i].parent===n.legs[i]),overalls:!!Et.getObjectByName("farmer overalls"),growingSuit:n.farmerSuit.visible,faceFrame:!!Et.getObjectByName("Pip head"),earPieces:n.headsetCups.length,eyeHighlights:n.eyes.length,emblem:!!Et.getObjectByName("HydroPip shirt emblem"),belt:n.belt.visible,hands:n.hands.map(e),feet:n.boots.map(e),elbows:n.elbows.map(e),shoulders:n.arms.map(t=>t.rotation.toArray().slice(0,3)),bodyLift:n.body.position.y,leaves:n.leafEars.length,height:new Hi().setFromObject(Et).getSize(new U).y}},renderedCrops(){const n=[];return mt.traverse(e=>{if(!e.userData.growthTiming)return;const t=e.children.filter(i=>i.geometry?.type==="ExtrudeGeometry");n.push({crop:e.userData.crop,location:e.userData.interactiveId,stage:e.userData.growthStage,scale:e.userData.growthScale??e.scale.x,visibleFruit:e.children.filter(i=>i.userData.ripeningFruit&&i.visible).reduce((i,r)=>i+(r.isInstancedMesh?r.count*r.userData.fruitPerInstance:1),0),instances:e.userData.plantingPlacements?.length||1,layer:e.userData.layer??null,jobId:e.userData.jobId??null,leaves:(e.userData.foliageMaterials||t.map(i=>i.material)).map(i=>({r:i.color.r,g:i.color.g,b:i.color.b}))})}),n},dismissWelcome(){return h.tutorial.welcomeSeen=!0,_n.hidden=!0,Ct=!1,Xe(),at()},reset(){return h=Wa(),h.tutorial.welcomeSeen=!0,Ct=!1,Xe(),lt(),at()},reloadState(){return h=Pr(hu()),lt(),at()},grantCoins:ow,repairTower(n=0){return gu(n),at()},buildTower(n){return vu(n),at()},buildMarket(){return xu(),at()},collectSeeds(n){return wf(n),at()},rescueSeeds(){return Mf(),at()},expandVault(){return Sf(),at()},queueCrop(n,e,t=null){return Ef(n,e,t),at()},matureTowers(){return rw(),at()},pickupStarter(n,e=null){return lo(n,e),at()},returnStarter(n){return er(n),at()},transplant(n){return uo(n),at()},matureBeds(){return sw(),at()},harvest(n,e=null){return ho(n,e),at()},stageProduce(){return fo(),at()},loadRack(n,e=5){return Pa(n,e),at()},upgradeQueue(n){return Lf(n),at()},upgradeBed(n){return Df(n),at()},upgradeMarket(){return yu(),at()},buyCosmetic(n){return kf(n),at()},buyFarmUpgrade(n){return Bf(n),at()},farmAction(n,e){return Xs(n,e),at()},serviceHydro(n){return Uf(n),at()},forceOrders(n=["lettuce","basil","lettuce"]){return h.orders=n.slice(0,3).map((e,t)=>({...Af(t),slot:t,crop:e,amount:1,reward:Te[e].coinValue+10})),Xe(),lt(),at()},grantProduce(n,e=1){if(!Te[n])return at();h.carry?.kind==="starter"&&(h.carry=null),h.carry||(h.carry={kind:"produce",items:[]});let t=0;for(let i=0;i<e&&h.carry.items.length<Ot(h).basket;i+=1)h.carry.items.push(n),t+=1;return h.stats.planted+=t,h.stats.transplanted+=t,h.stats.harvested+=t,h.stats.byCropQueued[n]+=t,h.stats.byCropHarvested[n]+=t,Xe(),lt(),at()},grantStarter(n="lettuce",e=0){return Te[n]&&(h.carry={kind:"starter",crop:n,quality:1,sourceTower:e,sourceLayer:Ms(h.towers[e])[0],job:{id:crypto.randomUUID(),crop:n,queuedAt:$e(),startedAt:$e(),readyAt:$e(),quality:1}},h.stats.planted+=1,h.stats.byCropQueued[n]+=1,Xe(),lt()),at()},fillBeds(){return h.beds.filter(n=>n.built).forEach(n=>{for(;n.plants.length<n.capacity;)n.plants.push({id:crypto.randomUUID(),crop:"lettuce",plantedAt:$e(),readyAt:$e()+9999999,quality:1}),h.stats.planted+=1,h.stats.transplanted+=1,h.stats.byCropQueued.lettuce+=1}),Xe(),lt(),at()},deliver(n){return _u(n),at()},reject(n){return Cf(n),at()},openOrders(){return cr(),at()},showResult(n=11){return Wf(Rn[Math.max(0,Math.min(Rn.length-1,n))]),at()},showcasePip(n="south"){const e={south:0,east:Math.PI/2,north:Math.PI,west:-Math.PI/2};return n in e&&(Ee.direction=n,Ee.pendingFacing=e[n],Et.rotation.y=e[n],Ee.x=0,Ee.z=-.25,Ee.target=null,ui=null,un(),Ja(1,!0)),at()},setTask(n){return h.taskIndex=Math.max(0,Math.min(Rn.length,n)),h.chapter=Rn[h.taskIndex]?.chapter??2,Xe(),lt(),at()},save(){return Xe("test"),at()},rawState(){return JSON.parse(JSON.stringify(h))}});window.__HYDROPIP_CAMPAIGN_READY__=!0;requestAnimationFrame($f);
