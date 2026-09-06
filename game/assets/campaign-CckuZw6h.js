(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Gl="179",fp=0,zu=1,pp=2,uh=1,dh=2,Li=3,sr=0,xn=1,cn=2,nr=0,ss=1,Hu=2,Vu=3,Gu=4,mp=5,_r=100,gp=101,vp=102,xp=103,_p=104,yp=200,bp=201,wp=202,Mp=203,qc=204,Xc=205,Sp=206,Ep=207,Tp=208,Ap=209,Cp=210,Rp=211,Pp=212,Lp=213,Ip=214,Yc=0,jc=1,Kc=2,ls=3,Jc=4,Zc=5,Qc=6,el=7,hh=0,Dp=1,Up=2,ir=0,kp=1,Np=2,Op=3,fh=4,Fp=5,Bp=6,zp=7,ph=300,us=301,ds=302,tl=303,nl=304,Fa=306,xa=1e3,br=1001,il=1002,In=1003,Hp=1004,Lo=1005,ci=1006,oc=1007,wr=1008,fi=1009,mh=1010,gh=1011,Js=1012,Wl=1013,Er=1014,li=1015,go=1016,$l=1017,ql=1018,Zs=1020,vh=35902,xh=1021,_h=1022,jn=1023,Qs=1026,eo=1027,Xl=1028,Yl=1029,yh=1030,jl=1031,Kl=1033,aa=33776,ca=33777,la=33778,ua=33779,rl=35840,sl=35841,ol=35842,al=35843,cl=36196,ll=37492,ul=37496,dl=37808,hl=37809,fl=37810,pl=37811,ml=37812,gl=37813,vl=37814,xl=37815,_l=37816,yl=37817,bl=37818,wl=37819,Ml=37820,Sl=37821,da=36492,El=36494,Tl=36495,bh=36283,Al=36284,Cl=36285,Rl=36286,Vp=3200,Gp=3201,Jl=0,Wp=1,Qi="",en="srgb",hs="srgb-linear",_a="linear",Et="srgb",Or=7680,Wu=519,$p=512,qp=513,Xp=514,wh=515,Yp=516,jp=517,Kp=518,Jp=519,$u=35044,qu="300 es",ui=2e3,ya=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xu=1234567;const Vs=Math.PI/180,to=180/Math.PI;function Pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Zl(n,e){return(n%e+e)%e}function Zp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Qp(n,e,t){return n!==e?(t-n)/(e-n):0}function Gs(n,e,t){return(1-t)*n+t*e}function em(n,e,t,i){return Gs(n,e,1-Math.exp(-t*i))}function tm(n,e=1){return e-Math.abs(Zl(n,e*2)-e)}function nm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function im(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sm(n,e){return n+Math.random()*(e-n)}function om(n){return n*(.5-Math.random())}function am(n){n!==void 0&&(Xu=n);let e=Xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cm(n){return n*Vs}function lm(n){return n*to}function um(n){return(n&n-1)===0&&n!==0}function dm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fm(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),p=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const It={DEG2RAD:Vs,RAD2DEG:to,generateUUID:Pr,clamp:dt,euclideanModulo:Zl,mapLinear:Zp,inverseLerp:Qp,lerp:Gs,damp:em,pingpong:tm,smoothstep:nm,smootherstep:im,randInt:rm,randFloat:sm,randFloatSpread:om,seededRandom:am,degToRad:cm,radToDeg:lm,isPowerOfTwo:um,ceilPowerOfTwo:dm,floorPowerOfTwo:hm,setQuaternionFromProperEuler:fm,normalize:pn,denormalize:es};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],f=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==p||l!==f||u!==g){let v=1-a;const m=c*p+l*f+u*g+d*x,M=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),C=Math.atan2(P,m*M);v=Math.sin(v*C)/P,a=Math.sin(a*C)/P}const _=a*M;if(c=c*v+p*_,l=l*v+f*_,u=u*v+g*_,d=d*v+x*_,v===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*p,e[t+1]=c*g+u*p+l*d-a*f,e[t+2]=l*g+u*f+a*p-c*d,e[t+3]=u*g-a*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"YZX":this._x=p*u*d+l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d-p*f*g;break;case"XZY":this._x=p*u*d-l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ac=new I,Yu=new vo;class at{constructor(e,t,i,r,s,o,a,c,l){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],f=i[5],g=i[8],x=r[0],v=r[3],m=r[6],M=r[1],y=r[4],_=r[7],P=r[2],C=r[5],L=r[8];return s[0]=o*x+a*M+c*P,s[3]=o*v+a*y+c*C,s[6]=o*m+a*_+c*L,s[1]=l*x+u*M+d*P,s[4]=l*v+u*y+d*C,s[7]=l*m+u*_+d*L,s[2]=p*x+f*M+g*P,s[5]=p*v+f*y+g*C,s[8]=p*m+f*_+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,p=a*c-u*s,f=l*s-o*c,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=p*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cc.makeScale(e,t)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new at;function Mh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pm(){const n=ba("canvas");return n.style.display="block",n}const ju={};function os(n){n in ju||(ju[n]=!0,console.warn(n))}function mm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ku=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gm(){const n={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=as(r.r),r.g=as(r.g),r.b=as(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?_a:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hs]:{primaries:e,whitePoint:i,transfer:_a,toXYZ:Ku,fromXYZ:Ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Ku,fromXYZ:Ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const _t=gm();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function as(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fr;class vm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=ba("canvas")),Fr.width=e.width,Fr.height=e.height;const r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xm=0;class Ql{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lc(r[o].image)):s.push(lc(r[o]))}else s=lc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function lc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0;const uc=new I;class ln extends ys{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=br,r=br,s=ci,o=wr,a=jn,c=fi,l=ln.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Pr(),this.name="",this.source=new Ql(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ph;ln.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],f=c[5],g=c[9],x=c[2],v=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+v)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(f+1)/2,P=(m+1)/2,C=(u+p)/4,L=(d+x)/4,D=(g+v)/4;return y>_&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=L/i):_>P?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=L/s,r=D/s),this.set(i,r,s,t),this}let M=Math.sqrt((v-g)*(v-g)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(v-g)/M,this.y=(d-x)/M,this.z=(p-u)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ym extends ys{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new ln(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ql(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends ym{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sh extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bm extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Do.subVectors(this.max,Is),Br.subVectors(e.a,Is),zr.subVectors(e.b,Is),Hr.subVectors(e.c,Is),qi.subVectors(zr,Br),Xi.subVectors(Hr,zr),dr.subVectors(Br,Hr);let t=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-dr.z,dr.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,dr.z,0,-dr.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-dr.y,dr.x,0];return!dc(t,Br,zr,Hr,Do)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,Br,zr,Hr,Do))?!1:(Uo.crossVectors(qi,Xi),t=[Uo.x,Uo.y,Uo.z],dc(t,Br,zr,Hr,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,Io=new Gi,Br=new I,zr=new I,Hr=new I,qi=new I,Xi=new I,dr=new I,Is=new I,Do=new I,Uo=new I,hr=new I;function dc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hr.fromArray(n,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),c=e.dot(hr),l=t.dot(hr),u=i.dot(hr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const wm=new Gi,Ds=new I,hc=new I;class bs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(hc)),this.expandByPoint(Ds.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ai=new I,fc=new I,ko=new I,Yi=new I,pc=new I,No=new I,mc=new I;class eu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fc.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(fc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ko),a=Yi.dot(this.direction),c=-Yi.dot(ko),l=Yi.lengthSq(),u=Math.abs(1-o*o);let d,p,f,g;if(u>0)if(d=o*c-a,p=o*a-c,g=s*u,d>=0)if(p>=-g)if(p<=g){const x=1/u;d*=x,p*=x,f=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fc).addScaledVector(ko,p),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,r,s){pc.subVectors(t,e),No.subVectors(i,e),mc.crossVectors(pc,No);let o=this.direction.dot(mc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const c=a*this.direction.dot(No.crossVectors(Yi,No));if(c<0)return null;const l=a*this.direction.dot(pc.cross(Yi));if(l<0||c+l>o)return null;const u=-a*Yi.dot(mc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,o,a,c,l,u,d,p,f,g,x,v){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,x,v)}set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,x,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=p,m[3]=f,m[7]=g,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*u,f=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-x*l,t[9]=-a*c,t[2]=x-p*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,f=c*d,g=l*u,x=l*d;t[0]=p+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,f=c*d,g=l*u,x=l*d;t[0]=p-x*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,f=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=p*l+x,t[1]=c*d,t[5]=x*l+p,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-p*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=p-x*d}else if(e.order==="XZY"){const p=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+x,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mm,e,Sm)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ji.crossVectors(i,Cn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ji.crossVectors(i,Cn)),ji.normalize(),Oo.crossVectors(Cn,ji),r[0]=ji.x,r[4]=Oo.x,r[8]=Cn.x,r[1]=ji.y,r[5]=Oo.y,r[9]=Cn.y,r[2]=ji.z,r[6]=Oo.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],f=i[13],g=i[2],x=i[6],v=i[10],m=i[14],M=i[3],y=i[7],_=i[11],P=i[15],C=r[0],L=r[4],D=r[8],w=r[12],b=r[1],A=r[5],O=r[9],B=r[13],E=r[2],F=r[6],k=r[10],H=r[14],N=r[3],$=r[7],Q=r[11],ae=r[15];return s[0]=o*C+a*b+c*E+l*N,s[4]=o*L+a*A+c*F+l*$,s[8]=o*D+a*O+c*k+l*Q,s[12]=o*w+a*B+c*H+l*ae,s[1]=u*C+d*b+p*E+f*N,s[5]=u*L+d*A+p*F+f*$,s[9]=u*D+d*O+p*k+f*Q,s[13]=u*w+d*B+p*H+f*ae,s[2]=g*C+x*b+v*E+m*N,s[6]=g*L+x*A+v*F+m*$,s[10]=g*D+x*O+v*k+m*Q,s[14]=g*w+x*B+v*H+m*ae,s[3]=M*C+y*b+_*E+P*N,s[7]=M*L+y*A+_*F+P*$,s[11]=M*D+y*O+_*k+P*Q,s[15]=M*w+y*B+_*H+P*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],f=e[14],g=e[3],x=e[7],v=e[11],m=e[15];return g*(+s*c*d-r*l*d-s*a*p+i*l*p+r*a*f-i*c*f)+x*(+t*c*f-t*l*p+s*o*p-r*o*f+r*l*u-s*c*u)+v*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+m*(-r*a*u-t*c*d+t*a*p+r*o*d-i*o*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],f=e[11],g=e[12],x=e[13],v=e[14],m=e[15],M=d*v*l-x*p*l+x*c*f-a*v*f-d*c*m+a*p*m,y=g*p*l-u*v*l-g*c*f+o*v*f+u*c*m-o*p*m,_=u*x*l-g*d*l+g*a*f-o*x*f-u*a*m+o*d*m,P=g*d*c-u*x*c-g*a*p+o*x*p+u*a*v-o*d*v,C=t*M+i*y+r*_+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=M*L,e[1]=(x*p*s-d*v*s-x*r*f+i*v*f+d*r*m-i*p*m)*L,e[2]=(a*v*s-x*c*s+x*r*l-i*v*l-a*r*m+i*c*m)*L,e[3]=(d*c*s-a*p*s-d*r*l+i*p*l+a*r*f-i*c*f)*L,e[4]=y*L,e[5]=(u*v*s-g*p*s+g*r*f-t*v*f-u*r*m+t*p*m)*L,e[6]=(g*c*s-o*v*s-g*r*l+t*v*l+o*r*m-t*c*m)*L,e[7]=(o*p*s-u*c*s+u*r*l-t*p*l-o*r*f+t*c*f)*L,e[8]=_*L,e[9]=(g*d*s-u*x*s-g*i*f+t*x*f+u*i*m-t*d*m)*L,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*m+t*a*m)*L,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*L,e[12]=P*L,e[13]=(u*x*r-g*d*r+g*i*p-t*x*p-u*i*v+t*d*v)*L,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*v-t*a*v)*L,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*p+t*a*p)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,p=s*l,f=s*u,g=s*d,x=o*u,v=o*d,m=a*d,M=c*l,y=c*u,_=c*d,P=i.x,C=i.y,L=i.z;return r[0]=(1-(x+m))*P,r[1]=(f+_)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(f-_)*C,r[5]=(1-(p+m))*C,r[6]=(v+M)*C,r[7]=0,r[8]=(g+y)*L,r[9]=(v-M)*L,r[10]=(1-(p+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),a=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const l=1/s,u=1/o,d=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ui,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===ui)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ya)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ui,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===ui)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===ya)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vr=new I,qn=new wt,Mm=new I(0,0,0),Sm=new I(1,1,1),ji=new I,Oo=new I,Cn=new I,Zu=new wt,Qu=new vo;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Em=0;const ed=new I,Gr=new vo,Ci=new wt,Fo=new I,Us=new I,Tm=new I,Am=new vo,td=new I(1,0,0),nd=new I(0,1,0),id=new I(0,0,1),rd={type:"added"},Cm={type:"removed"},Wr={type:"childadded",child:null},gc={type:"childremoved",child:null};class Dt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new I,t=new pi,i=new vo,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new at}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fo.copy(e):Fo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Us,Fo,this.up):Ci.lookAt(Fo,Us,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(Ci),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new I,Ri=new I,vc=new I,Pi=new I,$r=new I,qr=new I,sd=new I,xc=new I,_c=new I,yc=new I,bc=new Wt,wc=new Wt,Mc=new Wt;class Yn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),Ri.subVectors(i,t),vc.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(Ri),c=Xn.dot(vc),l=Ri.dot(Ri),u=Ri.dot(vc),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(l*c-a*u)*p,g=(o*u-a*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return bc.setScalar(0),wc.setScalar(0),Mc.setScalar(0),bc.fromBufferAttribute(e,t),wc.fromBufferAttribute(e,i),Mc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bc,s.x),o.addScaledVector(wc,s.y),o.addScaledVector(Mc,s.z),o}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),Ri.subVectors(e,t),Xn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Xn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),qr.subVectors(s,i),xc.subVectors(e,i);const c=$r.dot(xc),l=qr.dot(xc);if(c<=0&&l<=0)return t.copy(i);_c.subVectors(e,r);const u=$r.dot(_c),d=qr.dot(_c);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector($r,o);yc.subVectors(e,s);const f=$r.dot(yc),g=qr.dot(yc);if(g>=0&&f<=g)return t.copy(s);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(qr,a);const v=u*g-f*d;if(v<=0&&d-u>=0&&f-g>=0)return sd.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(sd,a);const m=1/(v+x+p);return o=x*m,a=p*m,t.copy(i).addScaledVector($r,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Sc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=Zl(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Sc(o,s,e+1/3),this.g=Sc(o,s,e),this.b=Sc(o,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=Eh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return _t.workingToColorSpace(an.copy(this),e),Math.round(dt(an.r*255,0,255))*65536+Math.round(dt(an.g*255,0,255))*256+Math.round(dt(an.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(an.copy(this),t);const i=an.r,r=an.g,s=an.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=en){_t.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,r=an.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Bo);const i=Gs(Ki.h,Bo.h,t),r=Gs(Ki.s,Bo.s,t),s=Gs(Ki.l,Bo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new st;st.NAMES=Eh;let Rm=0;class Lr extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=ss,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Xc,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Xc&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ot extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new I,zo=new ge;let Pm=0;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$u,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$u&&(e.usage=this.usage),e}}class Th extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ah extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lm=0;const Vn=new wt,Ec=new Dt,Xr=new I,Rn=new Gi,ks=new Gi,Zt=new I;class Xt extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Ah:Th)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Rn.min,ks.min),Rn.expandByPoint(Zt),Zt.addVectors(Rn.max,ks.max),Rn.expandByPoint(Zt)):(Rn.expandByPoint(ks.min),Rn.expandByPoint(ks.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Zt.fromBufferAttribute(a,l),c&&(Xr.fromBufferAttribute(e,l),Zt.add(Xr)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new I,c[D]=new I;const l=new I,u=new I,d=new I,p=new ge,f=new ge,g=new ge,x=new I,v=new I;function m(D,w,b){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),p.fromBufferAttribute(s,D),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),u.sub(l),d.sub(l),f.sub(p),g.sub(p);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),v.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[D].add(x),a[w].add(x),a[b].add(x),c[D].add(v),c[w].add(v),c[b].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,w=M.length;D<w;++D){const b=M[D],A=b.start,O=b.count;for(let B=A,E=A+O;B<E;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new I,_=new I,P=new I,C=new I;function L(D){P.fromBufferAttribute(r,D),C.copy(P);const w=a[D];y.copy(w),y.sub(P.multiplyScalar(P.dot(w))).normalize(),_.crossVectors(C,w);const A=_.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,A)}for(let D=0,w=M.length;D<w;++D){const b=M[D],A=b.start,O=b.count;for(let B=A,E=A+O;B<E;B+=3)L(e.getX(B+0)),L(e.getX(B+1)),L(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),x=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,v=c.length;x<v;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)p[g++]=l[f++]}return new Dn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],f=e(p,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const od=new wt,fr=new eu,Ho=new bs,ad=new I,Vo=new I,Go=new I,Wo=new I,Tc=new I,$o=new I,cd=new I,qo=new I;class ce extends Dt{constructor(e=new Xt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$o.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Tc.fromBufferAttribute(d,e),o?$o.addScaledVector(Tc,u):$o.addScaledVector(Tc.sub(t),u))}t.add($o)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Ho.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Ho,ad)===null||fr.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(od.copy(s).invert(),fr.copy(e.ray).applyMatrix4(od),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const v=p[g],m=o[v.materialIndex],M=Math.max(v.start,f.start),y=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let _=M,P=y;_<P;_+=3){const C=a.getX(_),L=a.getX(_+1),D=a.getX(_+2);r=Xo(this,m,e,i,l,u,d,C,L,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let v=g,m=x;v<m;v+=3){const M=a.getX(v),y=a.getX(v+1),_=a.getX(v+2);r=Xo(this,o,e,i,l,u,d,M,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const v=p[g],m=o[v.materialIndex],M=Math.max(v.start,f.start),y=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let _=M,P=y;_<P;_+=3){const C=_,L=_+1,D=_+2;r=Xo(this,m,e,i,l,u,d,C,L,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let v=g,m=x;v<m;v+=3){const M=v,y=v+1,_=v+2;r=Xo(this,o,e,i,l,u,d,M,y,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Im(n,e,t,i,r,s,o,a){let c;if(e.side===xn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===sr,a),c===null)return null;qo.copy(a),qo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(qo);return l<t.near||l>t.far?null:{distance:l,point:qo.clone(),object:n}}function Xo(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Vo),n.getVertexPosition(c,Go),n.getVertexPosition(l,Wo);const u=Im(n,e,t,i,Vo,Go,Wo,cd);if(u){const d=new I;Yn.getBarycoord(cd,Vo,Go,Wo,d),r&&(u.uv=Yn.getInterpolatedAttribute(r,a,c,l,d,new ge)),s&&(u.uv1=Yn.getInterpolatedAttribute(s,a,c,l,d,new ge)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,c,l,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new I,materialIndex:0};Yn.getNormal(Vo,Go,Wo,p.normal),u.face=p,u.barycoord=d}return u}class Gt extends Xt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function g(x,v,m,M,y,_,P,C,L,D,w){const b=_/L,A=P/D,O=_/2,B=P/2,E=C/2,F=L+1,k=D+1;let H=0,N=0;const $=new I;for(let Q=0;Q<k;Q++){const ae=Q*A-B;for(let ie=0;ie<F;ie++){const Ne=ie*b-O;$[x]=Ne*M,$[v]=ae*y,$[m]=E,l.push($.x,$.y,$.z),$[x]=0,$[v]=0,$[m]=C>0?1:-1,u.push($.x,$.y,$.z),d.push(ie/L),d.push(1-Q/D),H+=1}}for(let Q=0;Q<D;Q++)for(let ae=0;ae<L;ae++){const ie=p+ae+F*Q,Ne=p+ae+F*(Q+1),Ke=p+(ae+1)+F*(Q+1),X=p+(ae+1)+F*Q;c.push(ie,Ne,X),c.push(Ne,Ke,X),N+=6}a.addGroup(f,N,w),f+=N,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mn(n){const e={};for(let t=0;t<n.length;t++){const i=fs(n[t]);for(const r in i)e[r]=i[r]}return e}function Dm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ch(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Um={clone:fs,merge:mn};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rh extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new I,ld=new ge,ud=new ge;class wn extends Rh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,ld,ud),t.subVectors(ud,ld)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yr=-90,jr=1;class Om extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Yr,jr,e,t);r.layers=this.layers,this.add(r);const s=new wn(Yr,jr,e,t);s.layers=this.layers,this.add(s);const o=new wn(Yr,jr,e,t);o.layers=this.layers,this.add(o);const a=new wn(Yr,jr,e,t);a.layers=this.layers,this.add(a);const c=new wn(Yr,jr,e,t);c.layers=this.layers,this.add(c);const l=new wn(Yr,jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ph extends ln{constructor(e=[],t=us,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fm extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ph(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gt(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:nr});s.uniforms.tEquirect.value=t;const o=new ce(r,s),a=t.minFilter;return t.minFilter===wr&&(t.minFilter=ci),new Om(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ie extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bm={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const v=t.getJointPose(x,i),m=this._getHandJoint(l,x);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ie;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class nu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=i}clone(){return new nu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iu extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zm extends ln{constructor(e=null,t=1,i=1,r,s,o,a,c,l=In,u=In,d,p){super(null,o,a,c,l,u,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dd extends Dn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Kr=new wt,hd=new wt,Yo=[],fd=new Gi,Hm=new wt,Ns=new ce,Os=new bs;class Tr extends ce{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Hm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),fd.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(fd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),Os.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(i),e.ray.intersectsSphere(Os)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Kr),hd.multiplyMatrices(i,Kr),Ns.matrixWorld=hd,Ns.raycast(e,Yo);for(let o=0,a=Yo.length;o<a;o++){const c=Yo[o];c.instanceId=s,c.object=this,t.push(c)}Yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new zm(new Float32Array(r*this.count),r,this.count,Xl,li));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cc=new I,Vm=new I,Gm=new at;class Zi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cc.subVectors(i,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gm.getNormalMatrix(e),r=this.coplanarPoint(Cc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new bs,Wm=new ge(.5,.5),jo=new I;class ru{constructor(e=new Zi,t=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],p=s[6],f=s[7],g=s[8],x=s[9],v=s[10],m=s[11],M=s[12],y=s[13],_=s[14],P=s[15];if(r[0].setComponents(l-o,f-u,m-g,P-M).normalize(),r[1].setComponents(l+o,f+u,m+g,P+M).normalize(),r[2].setComponents(l+a,f+d,m+x,P+y).normalize(),r[3].setComponents(l-a,f-d,m-x,P-y).normalize(),i)r[4].setComponents(c,p,v,_).normalize(),r[5].setComponents(l-c,f-p,m-v,P-_).normalize();else if(r[4].setComponents(l-c,f-p,m-v,P-_).normalize(),t===ui)r[5].setComponents(l+c,f+p,m+v,P+_).normalize();else if(t===ya)r[5].setComponents(c,p,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const t=Wm.distanceTo(e.center);return pr.radius=.7071067811865476+t,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jo.x=r.normal.x>0?e.max.x:e.min.x,jo.y=r.normal.y>0?e.max.y:e.min.y,jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lh extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wa=new I,Ma=new I,pd=new wt,Fs=new eu,Ko=new bs,Rc=new I,md=new I;class $m extends Dt{constructor(e=new Xt,t=new Lh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)wa.fromBufferAttribute(t,r-1),Ma.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=wa.distanceTo(Ma);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;pd.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(pd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,v=g-1;x<v;x+=l){const m=u.getX(x),M=u.getX(x+1),y=Jo(this,e,Fs,c,m,M,x);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),v=u.getX(f),m=Jo(this,e,Fs,c,x,v,g-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=f,v=g-1;x<v;x+=l){const m=Jo(this,e,Fs,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=Jo(this,e,Fs,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jo(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(wa.fromBufferAttribute(a,r),Ma.fromBufferAttribute(a,s),t.distanceSqToSegment(wa,Ma,Rc,md)>i)return;Rc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Rc);if(!(l<e.near||l>e.far))return{distance:l,point:md.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class su extends ln{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ih extends ln{constructor(e,t,i=Er,r,s,o,a=In,c=In,l,u=Qs,d=1){if(u!==Qs&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ql(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ts extends Xt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,p=t,f=2*d+p,g=i*2+s,x=r+1,v=new I,m=new I;for(let M=0;M<=g;M++){let y=0,_=0,P=0,C=0;if(M<=i){const w=M/i,b=w*Math.PI/2;_=-u-e*Math.cos(b),P=e*Math.sin(b),C=-e*Math.cos(b),y=w*d}else if(M<=i+s){const w=(M-i)/s;_=-u+w*t,P=e,C=0,y=d+w*p}else{const w=(M-i-s)/i,b=w*Math.PI/2;_=u+e*Math.sin(b),P=e*Math.cos(b),C=e*Math.sin(b),y=d+p+w*d}const L=Math.max(0,Math.min(1,y/f));let D=0;M===0?D=.5/r:M===g&&(D=-.5/r);for(let w=0;w<=r;w++){const b=w/r,A=b*Math.PI*2,O=Math.sin(A),B=Math.cos(A);m.x=-P*B,m.y=_,m.z=P*O,a.push(m.x,m.y,m.z),v.set(-P*B,C,P*O),v.normalize(),c.push(v.x,v.y,v.z),l.push(b+D,L)}if(M>0){const w=(M-1)*x;for(let b=0;b<r;b++){const A=w+b,O=w+b+1,B=M*x+b,E=M*x+b+1;o.push(A,O,B),o.push(O,E,B)}}}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class zi extends Xt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new I,u=new ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const f=i+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ht extends Xt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],p=[],f=[];let g=0;const x=[],v=i/2;let m=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(f,2));function M(){const _=new I,P=new I;let C=0;const L=(t-e)/i;for(let D=0;D<=s;D++){const w=[],b=D/s,A=b*(t-e)+e;for(let O=0;O<=r;O++){const B=O/r,E=B*c+a,F=Math.sin(E),k=Math.cos(E);P.x=A*F,P.y=-b*i+v,P.z=A*k,d.push(P.x,P.y,P.z),_.set(F,L,k).normalize(),p.push(_.x,_.y,_.z),f.push(B,1-b),w.push(g++)}x.push(w)}for(let D=0;D<r;D++)for(let w=0;w<s;w++){const b=x[w][D],A=x[w+1][D],O=x[w+1][D+1],B=x[w][D+1];(e>0||w!==0)&&(u.push(b,A,B),C+=3),(t>0||w!==s-1)&&(u.push(A,O,B),C+=3)}l.addGroup(m,C,0),m+=C}function y(_){const P=g,C=new ge,L=new I;let D=0;const w=_===!0?e:t,b=_===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,v*b,0),p.push(0,b,0),f.push(.5,.5),g++;const A=g;for(let O=0;O<=r;O++){const E=O/r*c+a,F=Math.cos(E),k=Math.sin(E);L.x=w*k,L.y=v*b,L.z=w*F,d.push(L.x,L.y,L.z),p.push(0,b,0),C.x=F*.5+.5,C.y=k*.5*b+.5,f.push(C.x,C.y),g++}for(let O=0;O<r;O++){const B=P+O,E=A+O;_===!0?u.push(E,E+1,B):u.push(E+1,E,B),D+=3}l.addGroup(m,D,_===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _i extends ht{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new _i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ba extends Xt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new I,_=new I,P=new I;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],_),f(t[C+2],P),c(y,_,P,M)}function c(M,y,_,P){const C=P+1,L=[];for(let D=0;D<=C;D++){L[D]=[];const w=M.clone().lerp(_,D/C),b=y.clone().lerp(_,D/C),A=C-D;for(let O=0;O<=A;O++)O===0&&D===C?L[D][O]=w:L[D][O]=w.clone().lerp(b,O/A)}for(let D=0;D<C;D++)for(let w=0;w<2*(C-D)-1;w++){const b=Math.floor(w/2);w%2===0?(p(L[D][b+1]),p(L[D+1][b]),p(L[D][b])):(p(L[D][b+1]),p(L[D+1][b+1]),p(L[D+1][b]))}}function l(M){const y=new I;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(M),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function u(){const M=new I;for(let y=0;y<s.length;y+=3){M.x=s[y+0],M.y=s[y+1],M.z=s[y+2];const _=v(M)/2/Math.PI+.5,P=m(M)/Math.PI+.5;o.push(_,1-P)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const y=o[M+0],_=o[M+2],P=o[M+4],C=Math.max(y,_,P),L=Math.min(y,_,P);C>.9&&L<.1&&(y<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function p(M){s.push(M.x,M.y,M.z)}function f(M,y){const _=M*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const M=new I,y=new I,_=new I,P=new I,C=new ge,L=new ge,D=new ge;for(let w=0,b=0;w<s.length;w+=9,b+=6){M.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),C.set(o[b+0],o[b+1]),L.set(o[b+2],o[b+3]),D.set(o[b+4],o[b+5]),P.copy(M).add(y).add(_).divideScalar(3);const A=v(P);x(C,b+0,M,A),x(L,b+2,y,A),x(D,b+4,_,A)}}function x(M,y,_,P){P<0&&M.x===1&&(o[y]=M.x-1),_.x===0&&_.z===0&&(o[y]=P/2/Math.PI+.5)}function v(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.vertices,e.indices,e.radius,e.details)}}class ou extends Ba{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ou(e.radius,e.detail)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],p=i[r+1]-u,f=(o-u)/p;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ge:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,r=[],s=[],o=[],a=new I,c=new wt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),p<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(dt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(dt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class au extends yi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*u-f*d+this.aX,l=p*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qm extends au{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let p=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;p*=u,f*=u,r(o,a,p,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Zo=new I,Pc=new cu,Lc=new cu,Ic=new cu;class lu extends yi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Zo.subVectors(r[0],r[1]).add(r[0]),l=Zo);const d=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Zo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),Pc.initNonuniformCatmullRom(l.x,d.x,p.x,u.x,g,x,v),Lc.initNonuniformCatmullRom(l.y,d.y,p.y,u.y,g,x,v),Ic.initNonuniformCatmullRom(l.z,d.z,p.z,u.z,g,x,v)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(l.x,d.x,p.x,u.x,this.tension),Lc.initCatmullRom(l.y,d.y,p.y,u.y,this.tension),Ic.initCatmullRom(l.z,d.z,p.z,u.z,this.tension));return i.set(Pc.calc(c),Lc.calc(c),Ic.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gd(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function Xm(n,e){const t=1-n;return t*t*e}function Ym(n,e){return 2*(1-n)*n*e}function jm(n,e){return n*n*e}function Ws(n,e,t,i){return Xm(n,e)+Ym(n,t)+jm(n,i)}function Km(n,e){const t=1-n;return t*t*t*e}function Jm(n,e){const t=1-n;return 3*t*t*n*e}function Zm(n,e){return 3*(1-n)*n*n*e}function Qm(n,e){return n*n*n*e}function $s(n,e,t,i,r){return Km(n,e)+Jm(n,t)+Zm(n,i)+Qm(n,r)}class Dh extends yi{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($s(e,r.x,s.x,o.x,a.x),$s(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class eg extends yi{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($s(e,r.x,s.x,o.x,a.x),$s(e,r.y,s.y,o.y,a.y),$s(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uh extends yi{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tg extends yi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kh extends yi{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ws(e,r.x,s.x,o.x),Ws(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nh extends yi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ws(e,r.x,s.x,o.x),Ws(e,r.y,s.y,o.y),Ws(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(gd(a,c.x,l.x,u.x,d.x),gd(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var Sa=Object.freeze({__proto__:null,ArcCurve:qm,CatmullRomCurve3:lu,CubicBezierCurve:Dh,CubicBezierCurve3:eg,EllipseCurve:au,LineCurve:Uh,LineCurve3:tg,QuadraticBezierCurve:kh,QuadraticBezierCurve3:Nh,SplineCurve:Oh});class ng extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Sa[r.type]().fromJSON(r))}return this}}class vd extends ng{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Uh(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new kh(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Dh(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Oh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new au(e,t,i,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ar extends vd{constructor(e){super(e),this.uuid=Pr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new vd().fromJSON(r))}return this}}function ig(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Fh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=cg(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let p=t;p<r;p+=t){const f=n[p],g=n[p+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return no(s,o,t,a,c,l,0),o}function Fh(n,e,t,i,r){let s;if(r===_g(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=xd(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=xd(o/i|0,n[o],n[o+1],s);return s&&ps(s,s.next)&&(ro(s),s=s.next),s}function Cr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ps(t,t.next)||Ft(t.prev,t,t.next)===0)){if(ro(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function no(n,e,t,i,r,s,o){if(!n)return;!o&&s&&fg(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?sg(n,i,r,s):rg(n)){e.push(c.i,n.i,l.i),ro(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=og(Cr(n),e),no(n,e,t,i,r,s,2)):o===2&&ag(n,e,t,i,r,s):no(Cr(n),e,t,i,r,s,1);break}}}function rg(n){const e=n.prev,t=n,i=n.next;if(Ft(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),d=Math.min(a,c,l),p=Math.max(r,s,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=f&&Bs(r,a,s,c,o,l,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sg(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ft(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,p=o.y,f=Math.min(a,c,l),g=Math.min(u,d,p),x=Math.max(a,c,l),v=Math.max(u,d,p),m=Pl(f,g,e,t,i),M=Pl(x,v,e,t,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=m&&_&&_.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=v&&y!==r&&y!==o&&Bs(a,u,c,d,l,p,y.x,y.y)&&Ft(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=v&&_!==r&&_!==o&&Bs(a,u,c,d,l,p,_.x,_.y)&&Ft(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=v&&y!==r&&y!==o&&Bs(a,u,c,d,l,p,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=v&&_!==r&&_!==o&&Bs(a,u,c,d,l,p,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function og(n,e){let t=n;do{const i=t.prev,r=t.next.next;!ps(i,r)&&zh(i,t,t.next,r)&&io(i,r)&&io(r,i)&&(e.push(i.i,t.i,r.i),ro(t),ro(t.next),t=n=r),t=t.next}while(t!==n);return Cr(t)}function ag(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gg(o,a)){let c=Hh(o,a);o=Cr(o,o.next),c=Cr(c,c.next),no(o,e,t,i,r,s,0),no(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function cg(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Fh(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(mg(l))}r.sort(lg);for(let s=0;s<r.length;s++)t=ug(r[s],t);return t}function lg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function ug(n,e){const t=dg(n,e);if(!t)return e;const i=Hh(t,n);return Cr(i,i.next),Cr(t,t.next)}function dg(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(ps(n,t))return t;do{if(ps(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Bh(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);io(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&hg(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function hg(n,e){return Ft(n.prev,n,e.prev)<0&&Ft(e.next,n,n.next)<0}function fg(n,e,t,i){let r=n;do r.z===0&&(r.z=Pl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,pg(r)}function pg(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Pl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function mg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bh(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Bs(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Bh(n,e,t,i,r,s,o,a)}function gg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!vg(n,e)&&(io(n,e)&&io(e,n)&&xg(n,e)&&(Ft(n.prev,n,e.prev)||Ft(n,e.prev,e))||ps(n,e)&&Ft(n.prev,n,n.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ps(n,e){return n.x===e.x&&n.y===e.y}function zh(n,e,t,i){const r=ea(Ft(n,e,t)),s=ea(Ft(n,e,i)),o=ea(Ft(t,i,n)),a=ea(Ft(t,i,e));return!!(r!==s&&o!==a||r===0&&Qo(n,t,e)||s===0&&Qo(n,i,e)||o===0&&Qo(t,n,i)||a===0&&Qo(t,e,i))}function Qo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ea(n){return n>0?1:n<0?-1:0}function vg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function io(n,e){return Ft(n.prev,n,n.next)<0?Ft(n,e,n.next)>=0&&Ft(n,n.prev,e)>=0:Ft(n,e,n.prev)<0||Ft(n,n.next,e)<0}function xg(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Hh(n,e){const t=Ll(n.i,n.x,n.y),i=Ll(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function xd(n,e,t,i){const r=Ll(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ro(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ll(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _g(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class yg{static triangulate(e,t,i=2){return ig(e,t,i)}}class Ii{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ii.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];_d(e),yd(i,e);let o=e.length;t.forEach(_d);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,yd(i,t[c]);const a=yg.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function _d(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class so extends Xt{constructor(e=new Ar([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ft(r,3)),this.setAttribute("uv",new ft(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:bg;let y,_=!1,P,C,L,D;m&&(y=m.getSpacedPoints(u),_=!0,p=!1,P=m.computeFrenetFrames(u,!1),C=new I,L=new I,D=new I),p||(v=0,f=0,g=0,x=0);const w=a.extractPoints(l);let b=w.shape;const A=w.holes;if(!Ii.isClockWise(b)){b=b.reverse();for(let Z=0,K=A.length;Z<K;Z++){const se=A[Z];Ii.isClockWise(se)&&(A[Z]=se.reverse())}}function B(Z){const se=10000000000000001e-36;let te=Z[0];for(let _e=1;_e<=Z.length;_e++){const le=_e%Z.length,ye=Z[le],it=ye.x-te.x,tt=ye.y-te.y,R=it*it+tt*tt,S=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(te.x),Math.abs(te.y)),W=se*S*S;if(R<=W){Z.splice(le,1),_e--;continue}te=ye}}B(b),A.forEach(B);const E=A.length,F=b;for(let Z=0;Z<E;Z++){const K=A[Z];b=b.concat(K)}function k(Z,K,se){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(K,se)}const H=b.length;function N(Z,K,se){let te,_e,le;const ye=Z.x-K.x,it=Z.y-K.y,tt=se.x-Z.x,R=se.y-Z.y,S=ye*ye+it*it,W=ye*R-it*tt;if(Math.abs(W)>Number.EPSILON){const j=Math.sqrt(S),oe=Math.sqrt(tt*tt+R*R),J=K.x-it/j,ze=K.y+ye/j,ve=se.x-R/oe,Oe=se.y+tt/oe,Fe=((ve-J)*R-(Oe-ze)*tt)/(ye*R-it*tt);te=J+ye*Fe-Z.x,_e=ze+it*Fe-Z.y;const de=te*te+_e*_e;if(de<=2)return new ge(te,_e);le=Math.sqrt(de/2)}else{let j=!1;ye>Number.EPSILON?tt>Number.EPSILON&&(j=!0):ye<-Number.EPSILON?tt<-Number.EPSILON&&(j=!0):Math.sign(it)===Math.sign(R)&&(j=!0),j?(te=-it,_e=ye,le=Math.sqrt(S)):(te=ye,_e=it,le=Math.sqrt(S/2))}return new ge(te/le,_e/le)}const $=[];for(let Z=0,K=F.length,se=K-1,te=Z+1;Z<K;Z++,se++,te++)se===K&&(se=0),te===K&&(te=0),$[Z]=N(F[Z],F[se],F[te]);const Q=[];let ae,ie=$.concat();for(let Z=0,K=E;Z<K;Z++){const se=A[Z];ae=[];for(let te=0,_e=se.length,le=_e-1,ye=te+1;te<_e;te++,le++,ye++)le===_e&&(le=0),ye===_e&&(ye=0),ae[te]=N(se[te],se[le],se[ye]);Q.push(ae),ie=ie.concat(ae)}let Ne;if(v===0)Ne=Ii.triangulateShape(F,A);else{const Z=[],K=[];for(let se=0;se<v;se++){const te=se/v,_e=f*Math.cos(te*Math.PI/2),le=g*Math.sin(te*Math.PI/2)+x;for(let ye=0,it=F.length;ye<it;ye++){const tt=k(F[ye],$[ye],le);Ue(tt.x,tt.y,-_e),te===0&&Z.push(tt)}for(let ye=0,it=E;ye<it;ye++){const tt=A[ye];ae=Q[ye];const R=[];for(let S=0,W=tt.length;S<W;S++){const j=k(tt[S],ae[S],le);Ue(j.x,j.y,-_e),te===0&&R.push(j)}te===0&&K.push(R)}}Ne=Ii.triangulateShape(Z,K)}const Ke=Ne.length,X=g+x;for(let Z=0;Z<H;Z++){const K=p?k(b[Z],ie[Z],X):b[Z];_?(L.copy(P.normals[0]).multiplyScalar(K.x),C.copy(P.binormals[0]).multiplyScalar(K.y),D.copy(y[0]).add(L).add(C),Ue(D.x,D.y,D.z)):Ue(K.x,K.y,0)}for(let Z=1;Z<=u;Z++)for(let K=0;K<H;K++){const se=p?k(b[K],ie[K],X):b[K];_?(L.copy(P.normals[Z]).multiplyScalar(se.x),C.copy(P.binormals[Z]).multiplyScalar(se.y),D.copy(y[Z]).add(L).add(C),Ue(D.x,D.y,D.z)):Ue(se.x,se.y,d/u*Z)}for(let Z=v-1;Z>=0;Z--){const K=Z/v,se=f*Math.cos(K*Math.PI/2),te=g*Math.sin(K*Math.PI/2)+x;for(let _e=0,le=F.length;_e<le;_e++){const ye=k(F[_e],$[_e],te);Ue(ye.x,ye.y,d+se)}for(let _e=0,le=A.length;_e<le;_e++){const ye=A[_e];ae=Q[_e];for(let it=0,tt=ye.length;it<tt;it++){const R=k(ye[it],ae[it],te);_?Ue(R.x,R.y+y[u-1].y,y[u-1].x+se):Ue(R.x,R.y,d+se)}}}xe(),fe();function xe(){const Z=r.length/3;if(p){let K=0,se=H*K;for(let te=0;te<Ke;te++){const _e=Ne[te];ee(_e[2]+se,_e[1]+se,_e[0]+se)}K=u+v*2,se=H*K;for(let te=0;te<Ke;te++){const _e=Ne[te];ee(_e[0]+se,_e[1]+se,_e[2]+se)}}else{for(let K=0;K<Ke;K++){const se=Ne[K];ee(se[2],se[1],se[0])}for(let K=0;K<Ke;K++){const se=Ne[K];ee(se[0]+H*u,se[1]+H*u,se[2]+H*u)}}i.addGroup(Z,r.length/3-Z,0)}function fe(){const Z=r.length/3;let K=0;He(F,K),K+=F.length;for(let se=0,te=A.length;se<te;se++){const _e=A[se];He(_e,K),K+=_e.length}i.addGroup(Z,r.length/3-Z,1)}function He(Z,K){let se=Z.length;for(;--se>=0;){const te=se;let _e=se-1;_e<0&&(_e=Z.length-1);for(let le=0,ye=u+v*2;le<ye;le++){const it=H*le,tt=H*(le+1),R=K+te+it,S=K+_e+it,W=K+_e+tt,j=K+te+tt;Me(R,S,W,j)}}}function Ue(Z,K,se){c.push(Z),c.push(K),c.push(se)}function ee(Z,K,se){Pe(Z),Pe(K),Pe(se);const te=r.length/3,_e=M.generateTopUV(i,r,te-3,te-2,te-1);U(_e[0]),U(_e[1]),U(_e[2])}function Me(Z,K,se,te){Pe(Z),Pe(K),Pe(te),Pe(K),Pe(se),Pe(te);const _e=r.length/3,le=M.generateSideWallUV(i,r,_e-6,_e-3,_e-2,_e-1);U(le[0]),U(le[1]),U(le[3]),U(le[1]),U(le[2]),U(le[3])}function Pe(Z){r.push(c[Z*3+0]),r.push(c[Z*3+1]),r.push(c[Z*3+2])}function U(Z){s.push(Z.x),s.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return wg(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Sa[r.type]().fromJSON(r)),new so(i,e.options)}}const bg={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,c),new ge(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],p=e[r*3],f=e[r*3+1],g=e[r*3+2],x=e[s*3],v=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-d),new ge(p,1-g),new ge(x,1-m)]:[new ge(a,1-c),new ge(u,1-d),new ge(f,1-g),new ge(v,1-m)]}};function wg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xo extends Ba{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xo(e.radius,e.detail)}}class Un extends Xt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,f=[],g=[],x=[],v=[];for(let m=0;m<u;m++){const M=m*p-o;for(let y=0;y<l;y++){const _=y*d-s;g.push(_,-M,0),x.push(0,0,1),v.push(y/a),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const y=M+l*m,_=M+l*(m+1),P=M+1+l*(m+1),C=M+1+l*m;f.push(y,_,C),f.push(_,P,C)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class _o extends Xt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=e;const p=(t-e)/r,f=new I,g=new ge;for(let x=0;x<=r;x++){for(let v=0;v<=i;v++){const m=s+v/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=p}for(let x=0;x<r;x++){const v=x*(i+1);for(let m=0;m<i;m++){const M=m+v,y=M,_=M+i+1,P=M+i+2,C=M+1;a.push(y,_,C),a.push(_,P,C)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class za extends Xt{constructor(e=new Ar([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(s,3)),this.setAttribute("uv",new ft(o,2));function l(u){const d=r.length/3,p=u.extractPoints(t);let f=p.shape;const g=p.holes;Ii.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,m=g.length;v<m;v++){const M=g[v];Ii.isClockWise(M)===!0&&(g[v]=M.reverse())}const x=Ii.triangulateShape(f,g);for(let v=0,m=g.length;v<m;v++){const M=g[v];f=f.concat(M)}for(let v=0,m=f.length;v<m;v++){const M=f[v];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let v=0,m=x.length;v<m;v++){const M=x[v],y=M[0]+d,_=M[1]+d,P=M[2]+d;i.push(y,_,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Mg(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new za(i,e.curveSegments)}}function Mg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class En extends Xt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new I,p=new I,f=[],g=[],x=[],v=[];for(let m=0;m<=i;m++){const M=[],y=m/i;let _=0;m===0&&o===0?_=.5/t:m===i&&c===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){const C=P/t;d.x=-e*Math.cos(r+C*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),v.push(C+_,1-y),M.push(l++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const y=u[m][M+1],_=u[m][M],P=u[m+1][M],C=u[m+1][M+1];(m!==0||o>0)&&f.push(y,_,C),(m!==i-1||c<Math.PI)&&f.push(_,P,C)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sn extends Xt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new I,d=new I,p=new I;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const x=g/r*s,v=f/i*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(x),d.y=(e+t*Math.cos(v))*Math.sin(x),d.z=t*Math.sin(v),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(d,u).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const x=(r+1)*f+g-1,v=(r+1)*(f-1)+g-1,m=(r+1)*(f-1)+g,M=(r+1)*f+g;o.push(x,v,M),o.push(v,m,M)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ha extends Xt{constructor(e=new Nh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new ge;let u=new I;const d=[],p=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(f,2));function x(){for(let y=0;y<t;y++)v(y);v(s===!1?t:0),M(),m()}function v(y){u=e.getPointAt(y/t,u);const _=o.normals[y],P=o.binormals[y];for(let C=0;C<=r;C++){const L=C/r*Math.PI*2,D=Math.sin(L),w=-Math.cos(L);c.x=w*_.x+D*P.x,c.y=w*_.y+D*P.y,c.z=w*_.z+D*P.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let _=1;_<=r;_++){const P=(r+1)*(y-1)+(_-1),C=(r+1)*y+(_-1),L=(r+1)*y+_,D=(r+1)*(y-1)+_;g.push(P,C,D),g.push(C,L,D)}}function M(){for(let y=0;y<=t;y++)for(let _=0;_<=r;_++)l.x=y/t,l.y=_/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ha(new Sa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Hi extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends Lr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new st(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Sg extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eg extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vh extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class uu extends Vh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Dc=new wt,bd=new I,wd=new I;class Tg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ru,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wd),t.updateMatrixWorld(),Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gh extends Rh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ag extends Tg{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Va extends Vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cg extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Md=new wt;class Wh{constructor(e,t,i=0,r=1/0){this.ray=new eu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Md),this}intersectObject(e,t=!0,i=[]){return Il(e,this,i,t),i.sort(Sd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Il(e[r],this,i,t);return i.sort(Sd),i}}function Sd(n,e){return n.distance-e.distance}function Il(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Il(s[o],e,t,!0)}}function Ed(n,e,t,i){const r=Rg(i);switch(t){case xh:return n*e;case Xl:return n*e/r.components*r.byteLength;case Yl:return n*e/r.components*r.byteLength;case yh:return n*e*2/r.components*r.byteLength;case jl:return n*e*2/r.components*r.byteLength;case _h:return n*e*3/r.components*r.byteLength;case jn:return n*e*4/r.components*r.byteLength;case Kl:return n*e*4/r.components*r.byteLength;case aa:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case la:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:case al:return Math.max(n,16)*Math.max(e,8)/4;case rl:case ol:return Math.max(n,8)*Math.max(e,8)/2;case cl:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case da:case El:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bh:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cl:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rg(n){switch(n){case fi:case mh:return{byteLength:1,components:1};case Js:case gh:case go:return{byteLength:2,components:1};case $l:case ql:return{byteLength:2,components:4};case Er:case Wl:case li:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);function $h(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pg(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wg=`#ifdef USE_IRIDESCENCE
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
#endif`,$g=`#ifdef USE_BUMPMAP
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
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e0=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x0=`#ifdef USE_GRADIENTMAP
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
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
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
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
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
#endif`,R0=`struct PhysicalMaterial {
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
}`,P0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
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
#endif`,ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mv=`float getShadowMask() {
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
}`,gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_v=`#ifdef USE_SKINNING
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
#endif`,yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lv=`uniform sampler2D t2D;
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`#include <common>
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
}`,Ov=`#if DEPTH_PACKING == 3200
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
}`,Fv=`#define DISTANCE
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
}`,Bv=`#define DISTANCE
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`uniform float scale;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,$v=`uniform vec3 diffuse;
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
}`,qv=`#define LAMBERT
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
}`,Xv=`#define LAMBERT
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
}`,Yv=`#define MATCAP
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
}`,jv=`#define MATCAP
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
}`,Kv=`#define NORMAL
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
}`,Jv=`#define NORMAL
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
}`,Zv=`#define PHONG
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
}`,Qv=`#define PHONG
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
}`,ex=`#define STANDARD
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
}`,tx=`#define STANDARD
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
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
}`,rx=`uniform float size;
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
}`,sx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,ax=`uniform vec3 color;
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
}`,cx=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Lg,alphahash_pars_fragment:Ig,alphamap_fragment:Dg,alphamap_pars_fragment:Ug,alphatest_fragment:kg,alphatest_pars_fragment:Ng,aomap_fragment:Og,aomap_pars_fragment:Fg,batching_pars_vertex:Bg,batching_vertex:zg,begin_vertex:Hg,beginnormal_vertex:Vg,bsdfs:Gg,iridescence_fragment:Wg,bumpmap_pars_fragment:$g,clipping_planes_fragment:qg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:jg,color_fragment:Kg,color_pars_fragment:Jg,color_pars_vertex:Zg,color_vertex:Qg,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:r0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:c0,envmap_fragment:l0,envmap_common_pars_fragment:u0,envmap_pars_fragment:d0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:M0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:v0,gradientmap_pars_fragment:x0,lightmap_pars_fragment:_0,lights_lambert_fragment:y0,lights_lambert_pars_fragment:b0,lights_pars_begin:w0,lights_toon_fragment:S0,lights_toon_pars_fragment:E0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:C0,lights_physical_pars_fragment:R0,lights_fragment_begin:P0,lights_fragment_maps:L0,lights_fragment_end:I0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:N0,map_fragment:O0,map_pars_fragment:F0,map_particle_fragment:B0,map_particle_pars_fragment:z0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:$0,morphtarget_pars_vertex:q0,morphtarget_vertex:X0,normal_fragment_begin:Y0,normal_fragment_maps:j0,normal_pars_fragment:K0,normal_pars_vertex:J0,normal_vertex:Z0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:ev,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:nv,iridescence_pars_fragment:iv,opaque_fragment:rv,packing:sv,premultiplied_alpha_fragment:ov,project_vertex:av,dithering_fragment:cv,dithering_pars_fragment:lv,roughnessmap_fragment:uv,roughnessmap_pars_fragment:dv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:fv,shadowmap_vertex:pv,shadowmask_pars_fragment:mv,skinbase_vertex:gv,skinning_pars_vertex:vv,skinning_vertex:xv,skinnormal_vertex:_v,specularmap_fragment:yv,specularmap_pars_fragment:bv,tonemapping_fragment:wv,tonemapping_pars_fragment:Mv,transmission_fragment:Sv,transmission_pars_fragment:Ev,uv_pars_fragment:Tv,uv_pars_vertex:Av,uv_vertex:Cv,worldpos_vertex:Rv,background_vert:Pv,background_frag:Lv,backgroundCube_vert:Iv,backgroundCube_frag:Dv,cube_vert:Uv,cube_frag:kv,depth_vert:Nv,depth_frag:Ov,distanceRGBA_vert:Fv,distanceRGBA_frag:Bv,equirect_vert:zv,equirect_frag:Hv,linedashed_vert:Vv,linedashed_frag:Gv,meshbasic_vert:Wv,meshbasic_frag:$v,meshlambert_vert:qv,meshlambert_frag:Xv,meshmatcap_vert:Yv,meshmatcap_frag:jv,meshnormal_vert:Kv,meshnormal_frag:Jv,meshphong_vert:Zv,meshphong_frag:Qv,meshphysical_vert:ex,meshphysical_frag:tx,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:rx,points_frag:sx,shadow_vert:ox,shadow_frag:ax,sprite_vert:cx,sprite_frag:lx},we={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ai={basic:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:mn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:mn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new st(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:mn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:mn([we.points,we.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:mn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:mn([we.common,we.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:mn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:mn([we.sprite,we.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:mn([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:mn([we.lights,we.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};ai.physical={uniforms:mn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const ta={r:0,b:0,g:0},mr=new pi,ux=new wt;function dx(n,e,t,i,r,s,o){const a=new st(0);let c=s===!0?0:1,l,u,d=null,p=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1;const P=g(y);P===null?m(a,c):P&&P.isColor&&(m(P,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,_){const P=g(_);P&&(P.isCubeTexture||P.mapping===Fa)?(u===void 0&&(u=new ce(new Gt(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:fs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mr.copy(_.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(mr)),u.material.toneMapped=_t.getTransfer(P.colorSpace)!==Et,(d!==P||p!==P.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,p=P.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new ce(new Un(2,2),new or({name:"BackgroundMaterial",uniforms:fs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=_t.getTransfer(P.colorSpace)!==Et,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||p!==P.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,p=P.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,_){y.getRGB(ta,Ch(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,_,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:x,addToRenderList:v,dispose:M}}function hx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(b,A,O,B,E){let F=!1;const k=d(B,O,A);s!==k&&(s=k,l(s.object)),F=f(b,B,O,E),F&&g(b,B,O,E),E!==null&&e.update(E,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(b,A,O,B),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,A,O){const B=O.wireframe===!0;let E=i[b.id];E===void 0&&(E={},i[b.id]=E);let F=E[A.id];F===void 0&&(F={},E[A.id]=F);let k=F[B];return k===void 0&&(k=p(c()),F[B]=k),k}function p(b){const A=[],O=[],B=[];for(let E=0;E<t;E++)A[E]=0,O[E]=0,B[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,A,O,B){const E=s.attributes,F=A.attributes;let k=0;const H=O.getAttributes();for(const N in H)if(H[N].location>=0){const Q=E[N];let ae=F[N];if(ae===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function g(b,A,O,B){const E={},F=A.attributes;let k=0;const H=O.getAttributes();for(const N in H)if(H[N].location>=0){let Q=F[N];Q===void 0&&(N==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),N==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),E[N]=ae,k++}s.attributes=E,s.attributesNum=k,s.index=B}function x(){const b=s.newAttributes;for(let A=0,O=b.length;A<O;A++)b[A]=0}function v(b){m(b,0)}function m(b,A){const O=s.newAttributes,B=s.enabledAttributes,E=s.attributeDivisors;O[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),E[b]!==A&&(n.vertexAttribDivisor(b,A),E[b]=A)}function M(){const b=s.newAttributes,A=s.enabledAttributes;for(let O=0,B=A.length;O<B;O++)A[O]!==b[O]&&(n.disableVertexAttribArray(O),A[O]=0)}function y(b,A,O,B,E,F,k){k===!0?n.vertexAttribIPointer(b,A,O,E,F):n.vertexAttribPointer(b,A,O,B,E,F)}function _(b,A,O,B){x();const E=B.attributes,F=O.getAttributes(),k=A.defaultAttributeValues;for(const H in F){const N=F[H];if(N.location>=0){let $=E[H];if($===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){const Q=$.normalized,ae=$.itemSize,ie=e.get($);if(ie===void 0)continue;const Ne=ie.buffer,Ke=ie.type,X=ie.bytesPerElement,xe=Ke===n.INT||Ke===n.UNSIGNED_INT||$.gpuType===Wl;if($.isInterleavedBufferAttribute){const fe=$.data,He=fe.stride,Ue=$.offset;if(fe.isInstancedInterleavedBuffer){for(let ee=0;ee<N.locationSize;ee++)m(N.location+ee,fe.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ee=0;ee<N.locationSize;ee++)v(N.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ee=0;ee<N.locationSize;ee++)y(N.location+ee,ae/N.locationSize,Ke,Q,He*X,(Ue+ae/N.locationSize*ee)*X,xe)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe,$.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<N.locationSize;fe++)v(N.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let fe=0;fe<N.locationSize;fe++)y(N.location+fe,ae/N.locationSize,Ke,Q,ae*X,ae/N.locationSize*fe*X,xe)}}else if(k!==void 0){const Q=k[H];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(N.location,Q);break;case 3:n.vertexAttrib3fv(N.location,Q);break;case 4:n.vertexAttrib4fv(N.location,Q);break;default:n.vertexAttrib1fv(N.location,Q)}}}}M()}function P(){D();for(const b in i){const A=i[b];for(const O in A){const B=A[O];for(const E in B)u(B[E].object),delete B[E];delete A[O]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const A=i[b.id];for(const O in A){const B=A[O];for(const E in B)u(B[E].object),delete B[E];delete A[O]}delete i[b.id]}function L(b){for(const A in i){const O=i[A];if(O[b.id]===void 0)continue;const B=O[b.id];for(const E in B)u(B[E].object),delete B[E];delete O[b.id]}}function D(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:v,disableUnusedAttributes:M}}function fx(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*p[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function px(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==jn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==fi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==li&&!D)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:C}}function mx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Zi,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,x=d.clipIntersection,v=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!v)s?u(null):l();else{const M=s?0:i,y=M*4;let _=m.clippingState||null;c.value=_,_=u(g,p,y,f);for(let P=0;P!==y;++P)_[P]=t[P];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,f,g){const x=d!==null?d.length:0;let v=null;if(x!==0){if(v=c.value,g!==!0||v===null){const m=f+x*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(v===null||v.length<m)&&(v=new Float32Array(m));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(v,_),v[_+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function gx(n){let e=new WeakMap;function t(o,a){return a===tl?o.mapping=us:a===nl&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===tl||a===nl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ns=4,Td=[.125,.215,.35,.446,.526,.582],yr=20,Uc=new Gh,Ad=new st;let kc=null,Nc=0,Oc=0,Fc=!1;const vr=(1+Math.sqrt(5))/2,Jr=1/vr,Cd=[new I(-vr,Jr,0),new I(vr,Jr,0),new I(-Jr,0,vr),new I(Jr,0,vr),new I(0,vr,-Jr),new I(0,vr,Jr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],vx=new I;class Rd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=vx}=s;kc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,Nc,Oc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:go,format:jn,colorSpace:hs,depthBuffer:!1},r=Pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xx(s)),this._blurMaterial=_x(s,e,t)}return r}_compileMaterial(e){const t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,i,r,s){const c=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Ad),d.toneMapping=ir,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new Ot({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),v=new ce(new Gt,x);let m=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,m=!0):(x.color.copy(Ad),m=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const P=this._cubeSize;na(r,_*P,y>2?P:0,P,P),d.setRenderTarget(r),m&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===us||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;na(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Uc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cd[(r-s-1)%Cd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ce(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yr-1),x=s/g,v=isFinite(s)?1+Math.floor(u*x):yr;v>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${yr}`);const m=[];let M=0;for(let L=0;L<yr;++L){const D=L/x,w=Math.exp(-D*D/2);m.push(w),L===0?M+=w:L<v&&(M+=2*w)}for(let L=0;L<m.length;L++)m[L]=m[L]/M;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const _=this._sizeLods[r],P=3*_*(r>y-ns?r-y+ns:0),C=4*(this._cubeSize-_);na(t,P,C,3*_,2*_),c.setRenderTarget(t),c.render(d,Uc)}}function xx(n){const e=[],t=[],i=[];let r=n;const s=n-ns+1+Td.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-ns?c=Td[o-n+ns-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,v=2,m=1,M=new Float32Array(x*g*f),y=new Float32Array(v*g*f),_=new Float32Array(m*g*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,D=C>2?0:-1,w=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];M.set(w,x*g*C),y.set(p,v*g*C);const b=[C,C,C,C,C,C];_.set(b,m*g*C)}const P=new Xt;P.setAttribute("position",new Dn(M,x)),P.setAttribute("uv",new Dn(y,v)),P.setAttribute("faceIndex",new Dn(_,m)),e.push(P),r>ns&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pd(n,e,t){const i=new Bi(n,e,t);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _x(n,e,t){const i=new Float32Array(yr),r=new I(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:du(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Ld(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Id(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function yx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===tl||c===nl,u=c===us||c===ds;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new Rd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Rd(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&os("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wx(n,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const f in p)e.update(p[f],n.ARRAY_BUFFER)}function l(d){const p=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let y=0,_=M.length;y<_;y+=3){const P=M[y+0],C=M[y+1],L=M[y+2];p.push(P,C,C,L,L,P)}}else if(g!==void 0){const M=g.array;x=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const P=y+0,C=y+1,L=y+2;p.push(P,C,C,L,L,P)}}else return;const v=new(Mh(p)?Ah:Th)(p,1);v.version=x;const m=s.get(d);m&&e.remove(m),s.set(d,v)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Mx(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*o),t.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*o,g),t.update(f,i,g))}function u(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let v=0;for(let m=0;m<g;m++)v+=f[m];t.update(v,i,1)}function d(p,f,g,x){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p.length;m++)l(p[m]/o,f[m],x[m]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,x,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M]*x[M];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Sx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ex(n,e,t){const i=new WeakMap,r=new Wt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const C=new Float32Array(_*P*4*d),L=new Sh(C,_,P,d);L.type=li,L.needsUpdate=!0;const D=y*4;for(let b=0;b<d;b++){const A=v[b],O=m[b],B=M[b],E=_*P*4*b;for(let F=0;F<A.count;F++){const k=F*D;f===!0&&(r.fromBufferAttribute(A,F),C[E+k+0]=r.x,C[E+k+1]=r.y,C[E+k+2]=r.z,C[E+k+3]=0),g===!0&&(r.fromBufferAttribute(O,F),C[E+k+4]=r.x,C[E+k+5]=r.y,C[E+k+6]=r.z,C[E+k+7]=0),x===!0&&(r.fromBufferAttribute(B,F),C[E+k+8]=r.x,C[E+k+9]=r.y,C[E+k+10]=r.z,C[E+k+11]=B.itemSize===4?r.w:1)}}p={count:d,texture:L,size:new ge(_,P)},i.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function Tx(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const qh=new ln,Dd=new Ih(1,1),Xh=new Sh,Yh=new bm,jh=new Ph,Ud=[],kd=[],Nd=new Float32Array(16),Od=new Float32Array(9),Fd=new Float32Array(4);function ws(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ud[r];if(s===void 0&&(s=new Float32Array(r),Ud[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ax(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;Fd.set(i),n.uniformMatrix2fv(this.addr,!1,Fd),Jt(t,i)}}function Ix(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;Od.set(i),n.uniformMatrix3fv(this.addr,!1,Od),Jt(t,i)}}function Dx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,i))return;Nd.set(i),n.uniformMatrix4fv(this.addr,!1,Nd),Jt(t,i)}}function Ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function Vx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Dd.compareFunction=wh,s=Dd):s=qh,t.setTexture2D(e||s,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yh,r)}function Wx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||jh,r)}function $x(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xh,r)}function qx(n){switch(n){case 5126:return Ax;case 35664:return Cx;case 35665:return Rx;case 35666:return Px;case 35674:return Lx;case 35675:return Ix;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return kx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ox;case 5125:return Fx;case 36294:return Bx;case 36295:return zx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return $x}}function Xx(n,e){n.uniform1fv(this.addr,e)}function Yx(n,e){const t=ws(e,this.size,2);n.uniform2fv(this.addr,t)}function jx(n,e){const t=ws(e,this.size,3);n.uniform3fv(this.addr,t)}function Kx(n,e){const t=ws(e,this.size,4);n.uniform4fv(this.addr,t)}function Jx(n,e){const t=ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zx(n,e){const t=ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qx(n,e){const t=ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e_(n,e){n.uniform1iv(this.addr,e)}function t_(n,e){n.uniform2iv(this.addr,e)}function n_(n,e){n.uniform3iv(this.addr,e)}function i_(n,e){n.uniform4iv(this.addr,e)}function r_(n,e){n.uniform1uiv(this.addr,e)}function s_(n,e){n.uniform2uiv(this.addr,e)}function o_(n,e){n.uniform3uiv(this.addr,e)}function a_(n,e){n.uniform4uiv(this.addr,e)}function c_(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qh,s[o])}function l_(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Yh,s[o])}function u_(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||jh,s[o])}function d_(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Xh,s[o])}function h_(n){switch(n){case 5126:return Xx;case 35664:return Yx;case 35665:return jx;case 35666:return Kx;case 35674:return Jx;case 35675:return Zx;case 35676:return Qx;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return r_;case 36294:return s_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}class f_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qx(t.type)}}class p_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h_(t.type)}}class m_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function Bd(n,e){n.seq.push(e),n.map[e.id]=e}function g_(n,e,t){const i=n.name,r=i.length;for(Bc.lastIndex=0;;){const s=Bc.exec(i),o=Bc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Bd(t,l===void 0?new f_(a,n,e):new p_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new m_(a),Bd(t,d)),t=d}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);g_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function zd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const v_=37297;let x_=0;function __(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Hd=new at;function y_(n){_t._getMatrix(Hd,_t.workingColorSpace,n);const e=`mat3( ${Hd.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case _a:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+__(n.getShaderSource(e),a)}else return s}function b_(n,e){const t=y_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w_(n,e){let t;switch(e){case kp:t="Linear";break;case Np:t="Reinhard";break;case Op:t="Cineon";break;case fh:t="ACESFilmic";break;case Bp:t="AgX";break;case zp:t="Neutral";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new I;function M_(){_t.getLuminanceCoefficients(ia);const n=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function E_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zs(n){return n!==""}function Gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(A_,R_)}const C_=new Map;function R_(n,e){let t=lt[e];if(t===void 0){const i=C_.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $d(n){return n.replace(P_,L_)}function L_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function I_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function D_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ds&&(e="ENVMAP_MODE_REFRACTION"),e}function k_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Dp:e="ENVMAP_BLENDING_MIX";break;case Up:e="ENVMAP_BLENDING_ADD";break}return e}function N_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function O_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=I_(t),l=D_(t),u=U_(t),d=k_(t),p=N_(t),f=S_(t),g=E_(s),x=r.createProgram();let v,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`)):(v=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),m=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?lt.tonemapping_pars_fragment:"",t.toneMapping!==ir?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,b_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=Dl(o),o=Gd(o,t),o=Wd(o,t),a=Dl(a),a=Gd(a,t),a=Wd(a,t),o=$d(o),a=$d(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=M+v+o,_=M+m+a,P=zd(r,r.VERTEX_SHADER,y),C=zd(r,r.FRAGMENT_SHADER,_);r.attachShader(x,P),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(A){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",B=r.getShaderInfoLog(P)||"",E=r.getShaderInfoLog(C)||"",F=O.trim(),k=B.trim(),H=E.trim();let N=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,P,C);else{const Q=Vd(r,P,"vertex"),ae=Vd(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+Q+`
`+ae)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||H==="")&&($=!1);$&&(A.diagnostics={runnable:N,programLog:F,vertexShader:{log:k,prefix:v},fragmentShader:{log:H,prefix:m}})}r.deleteShader(P),r.deleteShader(C),D=new ha(r,x),w=T_(r,x)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,v_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let F_=0;class B_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new z_(e),t.set(e,i)),i}}class z_{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}}function H_(n,e,t,i,r,s,o){const a=new tu,c=new B_,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function v(w,b,A,O,B){const E=O.fog,F=B.geometry,k=w.isMeshStandardMaterial?O.environment:null,H=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),N=H&&H.mapping===Fa?H.image.height:null,$=g[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ae=Q!==void 0?Q.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let Ne,Ke,X,xe;if($){const yt=ai[$];Ne=yt.vertexShader,Ke=yt.fragmentShader}else Ne=w.vertexShader,Ke=w.fragmentShader,c.update(w),X=c.getVertexShaderID(w),xe=c.getFragmentShaderID(w);const fe=n.getRenderTarget(),He=n.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,ee=B.isBatchedMesh===!0,Me=!!w.map,Pe=!!w.matcap,U=!!H,Z=!!w.aoMap,K=!!w.lightMap,se=!!w.bumpMap,te=!!w.normalMap,_e=!!w.displacementMap,le=!!w.emissiveMap,ye=!!w.metalnessMap,it=!!w.roughnessMap,tt=w.anisotropy>0,R=w.clearcoat>0,S=w.dispersion>0,W=w.iridescence>0,j=w.sheen>0,oe=w.transmission>0,J=tt&&!!w.anisotropyMap,ze=R&&!!w.clearcoatMap,ve=R&&!!w.clearcoatNormalMap,Oe=R&&!!w.clearcoatRoughnessMap,Fe=W&&!!w.iridescenceMap,de=W&&!!w.iridescenceThicknessMap,Ce=j&&!!w.sheenColorMap,Ze=j&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Se=!!w.specularColorMap,ot=!!w.specularIntensityMap,z=oe&&!!w.transmissionMap,me=oe&&!!w.thicknessMap,be=!!w.gradientMap,De=!!w.alphaMap,he=w.alphaTest>0,re=!!w.alphaHash,Be=!!w.extensions;let rt=ir;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=n.toneMapping);const Pt={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:Ne,fragmentShader:Ke,defines:w.defines,customVertexShaderID:X,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ee,batchingColor:ee&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:hs,alphaToCoverage:!!w.alphaToCoverage,map:Me,matcap:Pe,envMap:U,envMapMode:U&&H.mapping,envMapCubeUVHeight:N,aoMap:Z,lightMap:K,bumpMap:se,normalMap:te,displacementMap:p&&_e,emissiveMap:le,normalMapObjectSpace:te&&w.normalMapType===Wp,normalMapTangentSpace:te&&w.normalMapType===Jl,metalnessMap:ye,roughnessMap:it,anisotropy:tt,anisotropyMap:J,clearcoat:R,clearcoatMap:ze,clearcoatNormalMap:ve,clearcoatRoughnessMap:Oe,dispersion:S,iridescence:W,iridescenceMap:Fe,iridescenceThicknessMap:de,sheen:j,sheenColorMap:Ce,sheenRoughnessMap:Ze,specularMap:Ve,specularColorMap:Se,specularIntensityMap:ot,transmission:oe,transmissionMap:z,thicknessMap:me,gradientMap:be,opaque:w.transparent===!1&&w.blending===ss&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:he,alphaHash:re,combine:w.combine,mapUv:Me&&x(w.map.channel),aoMapUv:Z&&x(w.aoMap.channel),lightMapUv:K&&x(w.lightMap.channel),bumpMapUv:se&&x(w.bumpMap.channel),normalMapUv:te&&x(w.normalMap.channel),displacementMapUv:_e&&x(w.displacementMap.channel),emissiveMapUv:le&&x(w.emissiveMap.channel),metalnessMapUv:ye&&x(w.metalnessMap.channel),roughnessMapUv:it&&x(w.roughnessMap.channel),anisotropyMapUv:J&&x(w.anisotropyMap.channel),clearcoatMapUv:ze&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&x(w.sheenRoughnessMap.channel),specularMapUv:Ve&&x(w.specularMap.channel),specularColorMapUv:Se&&x(w.specularColorMap.channel),specularIntensityMapUv:ot&&x(w.specularIntensityMap.channel),transmissionMapUv:z&&x(w.transmissionMap.channel),thicknessMapUv:me&&x(w.thicknessMap.channel),alphaMapUv:De&&x(w.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(te||tt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Me||De),fog:!!E,useFog:w.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:He,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:Me&&w.map.isVideoTexture===!0&&_t.getTransfer(w.map.colorSpace)===Et,decodeVideoTextureEmissive:le&&w.emissiveMap.isVideoTexture===!0&&_t.getTransfer(w.emissiveMap.colorSpace)===Et,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===cn,flipSided:w.side===xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function m(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const A in w.defines)b.push(A),b.push(w.defines[A]);return w.isRawShaderMaterial===!1&&(M(b,w),y(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function M(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const b=g[w.type];let A;if(b){const O=ai[b];A=Um.clone(O.uniforms)}else A=w.uniforms;return A}function P(w,b){let A;for(let O=0,B=u.length;O<B;O++){const E=u[O];if(E.cacheKey===b){A=E,++A.usedTimes;break}}return A===void 0&&(A=new O_(n,b,w,s),u.push(A)),A}function C(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function L(w){c.remove(w)}function D(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:P,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:D}}function V_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function G_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,f,g,x,v){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:v},n[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=v),e++,m}function a(d,p,f,g,x,v){const m=o(d,p,f,g,x,v);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(d,p,f,g,x,v){const m=o(d,p,f,g,x,v);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,p){t.length>1&&t.sort(d||G_),i.length>1&&i.sort(p||Xd),r.length>1&&r.sort(p||Xd)}function u(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function W_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yd,n.set(i,[o])):r>=s.length?(o=new Yd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new st};break;case"SpotLight":t={position:new I,direction:new I,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function q_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let X_=0;function Y_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j_(n){const e=new $_,t=q_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const r=new I,s=new wt,o=new wt;function a(l){let u=0,d=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,x=0,v=0,m=0,M=0,y=0,_=0,P=0,C=0,L=0;l.sort(Y_);for(let w=0,b=l.length;w<b;w++){const A=l[w],O=A.color,B=A.intensity,E=A.distance,F=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=O.r*B,d+=O.g*B,p+=O.b*B;else if(A.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(A.sh.coefficients[k],B);L++}else if(A.isDirectionalLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const H=A.shadow,N=t.get(A);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,i.directionalShadow[f]=N,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=A.shadow.matrix,M++}i.directional[f]=k,f++}else if(A.isSpotLight){const k=e.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(O).multiplyScalar(B),k.distance=E,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,i.spot[x]=k;const H=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,H.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[x]=H.matrix,A.castShadow){const N=t.get(A);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=F,_++}x++}else if(A.isRectAreaLight){const k=e.get(A);k.color.copy(O).multiplyScalar(B),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),i.rectArea[v]=k,v++}else if(A.isPointLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){const H=A.shadow,N=t.get(A);N.shadowIntensity=H.intensity,N.shadowBias=H.bias,N.shadowNormalBias=H.normalBias,N.shadowRadius=H.radius,N.shadowMapSize=H.mapSize,N.shadowCameraNear=H.camera.near,N.shadowCameraFar=H.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=A.shadow.matrix,y++}i.point[g]=k,g++}else if(A.isHemisphereLight){const k=e.get(A);k.skyColor.copy(A.color).multiplyScalar(B),k.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[m]=k,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==v||D.hemiLength!==m||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==P||D.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=v,D.hemiLength=m,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=P,D.numLightProbes=L,i.version=X_++)}function c(l,u){let d=0,p=0,f=0,g=0,x=0;const v=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const y=l[m];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),d++}else if(y.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),f++}else if(y.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),o.identity(),s.copy(y.matrixWorld),s.premultiply(v),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(v),x++}}}return{setup:a,setupView:c,state:i}}function jd(n){const e=new j_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function K_(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jd(n),e.set(r,[a])):s>=o.length?(a=new jd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`;function Q_(n,e,t){let i=new ru;const r=new ge,s=new ge,o=new Wt,a=new Sg({depthPacking:Gp}),c=new Eg,l={},u=t.maxTextureSize,d={[sr]:xn,[xn]:sr,[cn]:cn},p=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:J_,fragmentShader:Z_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ce(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let m=this.type;this.render=function(C,L,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||C.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(nr),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=m!==Li&&this.type===Li,E=m===Li&&this.type!==Li;for(let F=0,k=C.length;F<k;F++){const H=C[F],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const $=N.getFrameExtents();if(r.multiply($),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,N.mapSize.y=s.y)),N.map===null||B===!0||E===!0){const ae=this.type!==Li?{minFilter:In,magFilter:In}:{};N.map!==null&&N.map.dispose(),N.map=new Bi(r.x,r.y,ae),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const Q=N.getViewportCount();for(let ae=0;ae<Q;ae++){const ie=N.getViewport(ae);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),O.viewport(o),N.updateMatrices(H,ae),i=N.getFrustum(),_(L,D,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===Li&&M(N,D),N.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(w,b,A)};function M(C,L){const D=e.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bi(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,D,p,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,D,f,x,null)}function y(C,L,D,w){let b=null;const A=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)b=A;else if(b=D.isPointLight===!0?c:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const O=b.uuid,B=L.uuid;let E=l[O];E===void 0&&(E={},l[O]=E);let F=E[B];F===void 0&&(F=b.clone(),E[B]=F,L.addEventListener("dispose",P)),b=F}if(b.visible=L.visible,b.wireframe=L.wireframe,w===Li?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=D}return b}function _(C,L,D,w,b){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const B=e.update(C),E=C.material;if(Array.isArray(E)){const F=B.groups;for(let k=0,H=F.length;k<H;k++){const N=F[k],$=E[N.materialIndex];if($&&$.visible){const Q=y(C,$,w,b);C.onBeforeShadow(n,C,L,D,B,Q,N),n.renderBufferDirect(D,null,B,Q,C,N),C.onAfterShadow(n,C,L,D,B,Q,N)}}}else if(E.visible){const F=y(C,E,w,b);C.onBeforeShadow(n,C,L,D,B,F,null),n.renderBufferDirect(D,null,B,F,C,null),C.onAfterShadow(n,C,L,D,B,F,null)}}const O=C.children;for(let B=0,E=O.length;B<E;B++)_(O[B],L,D,w,b)}function P(C){C.target.removeEventListener("dispose",P);for(const D in l){const w=l[D],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const ey={[Yc]:jc,[Kc]:Qc,[Jc]:el,[ls]:Zc,[jc]:Yc,[Qc]:Kc,[el]:Jc,[Zc]:ls};function ty(n,e){function t(){let z=!1;const me=new Wt;let be=null;const De=new Wt(0,0,0,0);return{setMask:function(he){be!==he&&!z&&(n.colorMask(he,he,he,he),be=he)},setLocked:function(he){z=he},setClear:function(he,re,Be,rt,Pt){Pt===!0&&(he*=rt,re*=rt,Be*=rt),me.set(he,re,Be,rt),De.equals(me)===!1&&(n.clearColor(he,re,Be,rt),De.copy(me))},reset:function(){z=!1,be=null,De.set(-1,0,0,0)}}}function i(){let z=!1,me=!1,be=null,De=null,he=null;return{setReversed:function(re){if(me!==re){const Be=e.get("EXT_clip_control");re?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),me=re;const rt=he;he=null,this.setClear(rt)}},getReversed:function(){return me},setTest:function(re){re?fe(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(re){be!==re&&!z&&(n.depthMask(re),be=re)},setFunc:function(re){if(me&&(re=ey[re]),De!==re){switch(re){case Yc:n.depthFunc(n.NEVER);break;case jc:n.depthFunc(n.ALWAYS);break;case Kc:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case Jc:n.depthFunc(n.EQUAL);break;case Zc:n.depthFunc(n.GEQUAL);break;case Qc:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=re}},setLocked:function(re){z=re},setClear:function(re){he!==re&&(me&&(re=1-re),n.clearDepth(re),he=re)},reset:function(){z=!1,be=null,De=null,he=null,me=!1}}}function r(){let z=!1,me=null,be=null,De=null,he=null,re=null,Be=null,rt=null,Pt=null;return{setTest:function(yt){z||(yt?fe(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(yt){me!==yt&&!z&&(n.stencilMask(yt),me=yt)},setFunc:function(yt,Ei,oi){(be!==yt||De!==Ei||he!==oi)&&(n.stencilFunc(yt,Ei,oi),be=yt,De=Ei,he=oi)},setOp:function(yt,Ei,oi){(re!==yt||Be!==Ei||rt!==oi)&&(n.stencilOp(yt,Ei,oi),re=yt,Be=Ei,rt=oi)},setLocked:function(yt){z=yt},setClear:function(yt){Pt!==yt&&(n.clearStencil(yt),Pt=yt)},reset:function(){z=!1,me=null,be=null,De=null,he=null,re=null,Be=null,rt=null,Pt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,f=[],g=null,x=!1,v=null,m=null,M=null,y=null,_=null,P=null,C=null,L=new st(0,0,0),D=0,w=!1,b=null,A=null,O=null,B=null,E=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,H=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(N)[1]),k=H>=1):N.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),k=H>=2);let $=null,Q={};const ae=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ne=new Wt().fromArray(ae),Ke=new Wt().fromArray(ie);function X(z,me,be,De){const he=new Uint8Array(4),re=n.createTexture();n.bindTexture(z,re),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<be;Be++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(me+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return re}const xe={};xe[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(ls),se(!1),te(zu),fe(n.CULL_FACE),Z(nr);function fe(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function He(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Ue(z,me){return d[z]!==me?(n.bindFramebuffer(z,me),d[z]=me,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=me),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=me),!0):!1}function ee(z,me){let be=f,De=!1;if(z){be=p.get(me),be===void 0&&(be=[],p.set(me,be));const he=z.textures;if(be.length!==he.length||be[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Be=he.length;re<Be;re++)be[re]=n.COLOR_ATTACHMENT0+re;be.length=he.length,De=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,De=!0);De&&n.drawBuffers(be)}function Me(z){return g!==z?(n.useProgram(z),g=z,!0):!1}const Pe={[_r]:n.FUNC_ADD,[gp]:n.FUNC_SUBTRACT,[vp]:n.FUNC_REVERSE_SUBTRACT};Pe[xp]=n.MIN,Pe[_p]=n.MAX;const U={[yp]:n.ZERO,[bp]:n.ONE,[wp]:n.SRC_COLOR,[qc]:n.SRC_ALPHA,[Cp]:n.SRC_ALPHA_SATURATE,[Tp]:n.DST_COLOR,[Sp]:n.DST_ALPHA,[Mp]:n.ONE_MINUS_SRC_COLOR,[Xc]:n.ONE_MINUS_SRC_ALPHA,[Ap]:n.ONE_MINUS_DST_COLOR,[Ep]:n.ONE_MINUS_DST_ALPHA,[Rp]:n.CONSTANT_COLOR,[Pp]:n.ONE_MINUS_CONSTANT_COLOR,[Lp]:n.CONSTANT_ALPHA,[Ip]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(z,me,be,De,he,re,Be,rt,Pt,yt){if(z===nr){x===!0&&(He(n.BLEND),x=!1);return}if(x===!1&&(fe(n.BLEND),x=!0),z!==mp){if(z!==v||yt!==w){if((m!==_r||_!==_r)&&(n.blendEquation(n.FUNC_ADD),m=_r,_=_r),yt)switch(z){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hu:n.blendFunc(n.ONE,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Vu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,y=null,P=null,C=null,L.set(0,0,0),D=0,v=z,w=yt}return}he=he||me,re=re||be,Be=Be||De,(me!==m||he!==_)&&(n.blendEquationSeparate(Pe[me],Pe[he]),m=me,_=he),(be!==M||De!==y||re!==P||Be!==C)&&(n.blendFuncSeparate(U[be],U[De],U[re],U[Be]),M=be,y=De,P=re,C=Be),(rt.equals(L)===!1||Pt!==D)&&(n.blendColor(rt.r,rt.g,rt.b,Pt),L.copy(rt),D=Pt),v=z,w=!1}function K(z,me){z.side===cn?He(n.CULL_FACE):fe(n.CULL_FACE);let be=z.side===xn;me&&(be=!be),se(be),z.blending===ss&&z.transparent===!1?Z(nr):Z(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const De=z.stencilWrite;a.setTest(De),De&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(z){b!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),b=z)}function te(z){z!==fp?(fe(n.CULL_FACE),z!==A&&(z===zu?n.cullFace(n.BACK):z===pp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),A=z}function _e(z){z!==O&&(k&&n.lineWidth(z),O=z)}function le(z,me,be){z?(fe(n.POLYGON_OFFSET_FILL),(B!==me||E!==be)&&(n.polygonOffset(me,be),B=me,E=be)):He(n.POLYGON_OFFSET_FILL)}function ye(z){z?fe(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function it(z){z===void 0&&(z=n.TEXTURE0+F-1),$!==z&&(n.activeTexture(z),$=z)}function tt(z,me,be){be===void 0&&($===null?be=n.TEXTURE0+F-1:be=$);let De=Q[be];De===void 0&&(De={type:void 0,texture:void 0},Q[be]=De),(De.type!==z||De.texture!==me)&&($!==be&&(n.activeTexture(be),$=be),n.bindTexture(z,me||xe[z]),De.type=z,De.texture=me)}function R(){const z=Q[$];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){Ne.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ne.copy(z))}function Ze(z){Ke.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Ke.copy(z))}function Ve(z,me){let be=l.get(me);be===void 0&&(be=new WeakMap,l.set(me,be));let De=be.get(z);De===void 0&&(De=n.getUniformBlockIndex(me,z.name),be.set(z,De))}function Se(z,me){const De=l.get(me).get(z);c.get(me)!==De&&(n.uniformBlockBinding(me,De,z.__bindingPointIndex),c.set(me,De))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},$=null,Q={},d={},p=new WeakMap,f=[],g=null,x=!1,v=null,m=null,M=null,y=null,_=null,P=null,C=null,L=new st(0,0,0),D=0,w=!1,b=null,A=null,O=null,B=null,E=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:He,bindFramebuffer:Ue,drawBuffers:ee,useProgram:Me,setBlending:Z,setMaterial:K,setFlipSided:se,setCullFace:te,setLineWidth:_e,setPolygonOffset:le,setScissorTest:ye,activeTexture:it,bindTexture:tt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:W,texImage2D:Fe,texImage3D:de,updateUBOMapping:Ve,uniformBlockBinding:Se,texStorage2D:ve,texStorage3D:Oe,texSubImage2D:j,texSubImage3D:oe,compressedTexSubImage2D:J,compressedTexSubImage3D:ze,scissor:Ce,viewport:Ze,reset:ot}}function ny(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):ba("canvas")}function x(R,S,W){let j=1;const oe=tt(R);if((oe.width>W||oe.height>W)&&(j=W/Math.max(oe.width,oe.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(j*oe.width),ze=Math.floor(j*oe.height);d===void 0&&(d=g(J,ze));const ve=S?g(J,ze):d;return ve.width=J,ve.height=ze,ve.getContext("2d").drawImage(R,0,0,J,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+J+"x"+ze+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function v(R){return R.generateMipmaps}function m(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,S,W,j,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=S;if(S===n.RED&&(W===n.FLOAT&&(J=n.R32F),W===n.HALF_FLOAT&&(J=n.R16F),W===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.R8UI),W===n.UNSIGNED_SHORT&&(J=n.R16UI),W===n.UNSIGNED_INT&&(J=n.R32UI),W===n.BYTE&&(J=n.R8I),W===n.SHORT&&(J=n.R16I),W===n.INT&&(J=n.R32I)),S===n.RG&&(W===n.FLOAT&&(J=n.RG32F),W===n.HALF_FLOAT&&(J=n.RG16F),W===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RG8UI),W===n.UNSIGNED_SHORT&&(J=n.RG16UI),W===n.UNSIGNED_INT&&(J=n.RG32UI),W===n.BYTE&&(J=n.RG8I),W===n.SHORT&&(J=n.RG16I),W===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RGB8UI),W===n.UNSIGNED_SHORT&&(J=n.RGB16UI),W===n.UNSIGNED_INT&&(J=n.RGB32UI),W===n.BYTE&&(J=n.RGB8I),W===n.SHORT&&(J=n.RGB16I),W===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),W===n.UNSIGNED_INT&&(J=n.RGBA32UI),W===n.BYTE&&(J=n.RGBA8I),W===n.SHORT&&(J=n.RGBA16I),W===n.INT&&(J=n.RGBA32I)),S===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),S===n.RGBA){const ze=oe?_a:_t.getTransfer(j);W===n.FLOAT&&(J=n.RGBA32F),W===n.HALF_FLOAT&&(J=n.RGBA16F),W===n.UNSIGNED_BYTE&&(J=ze===Et?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(R,S){let W;return R?S===null||S===Er||S===Zs?W=n.DEPTH24_STENCIL8:S===li?W=n.DEPTH32F_STENCIL8:S===Js&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Er||S===Zs?W=n.DEPTH_COMPONENT24:S===li?W=n.DEPTH_COMPONENT32F:S===Js&&(W=n.DEPTH_COMPONENT16),W}function P(R,S){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==In&&R.minFilter!==ci?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),D(S),S.isVideoTexture&&u.delete(S)}function L(R){const S=R.target;S.removeEventListener("dispose",L),b(S)}function D(R){const S=i.get(R);if(S.__webglInit===void 0)return;const W=R.source,j=p.get(W);if(j){const oe=j[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&w(R),Object.keys(j).length===0&&p.delete(W)}i.remove(R)}function w(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const W=R.source,j=p.get(W);delete j[S.__cacheKey],o.memory.textures--}function b(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let oe=0;oe<S.__webglFramebuffer[j].length;oe++)n.deleteFramebuffer(S.__webglFramebuffer[j][oe]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=R.textures;for(let j=0,oe=W.length;j<oe;j++){const J=i.get(W[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(W[j])}i.remove(R)}let A=0;function O(){A=0}function B(){const R=A;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),A+=1,R}function E(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function F(R,S){const W=i.get(R);if(R.isVideoTexture&&ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(W,R,S);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+S)}function k(R,S){const W=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){xe(W,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+S)}function H(R,S){const W=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){xe(W,R,S);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+S)}function N(R,S){const W=i.get(R);if(R.version>0&&W.__version!==R.version){fe(W,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+S)}const $={[xa]:n.REPEAT,[br]:n.CLAMP_TO_EDGE,[il]:n.MIRRORED_REPEAT},Q={[In]:n.NEAREST,[Hp]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[oc]:n.LINEAR_MIPMAP_NEAREST,[wr]:n.LINEAR_MIPMAP_LINEAR},ae={[$p]:n.NEVER,[Jp]:n.ALWAYS,[qp]:n.LESS,[wh]:n.LEQUAL,[Xp]:n.EQUAL,[Kp]:n.GEQUAL,[Yp]:n.GREATER,[jp]:n.NOTEQUAL};function ie(R,S){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ci||S.magFilter===oc||S.magFilter===Lo||S.magFilter===wr||S.minFilter===ci||S.minFilter===oc||S.minFilter===Lo||S.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,$[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,$[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,$[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Q[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===In||S.minFilter!==Lo&&S.minFilter!==wr||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ne(R,S){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const j=S.source;let oe=p.get(j);oe===void 0&&(oe={},p.set(j,oe));const J=E(S);if(J!==R.__cacheKey){oe[J]===void 0&&(oe[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),oe[J].usedTimes++;const ze=oe[R.__cacheKey];ze!==void 0&&(oe[R.__cacheKey].usedTimes--,ze.usedTimes===0&&w(S)),R.__cacheKey=J,R.__webglTexture=oe[J].texture}return W}function Ke(R,S,W){return Math.floor(Math.floor(R/W)/S)}function X(R,S,W,j){const J=R.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,W,j,S.data);else{J.sort((de,Ce)=>de.start-Ce.start);let ze=0;for(let de=1;de<J.length;de++){const Ce=J[ze],Ze=J[de],Ve=Ce.start+Ce.count,Se=Ke(Ze.start,S.width,4),ot=Ke(Ce.start,S.width,4);Ze.start<=Ve+1&&Se===ot&&Ke(Ze.start+Ze.count-1,S.width,4)===Se?Ce.count=Math.max(Ce.count,Ze.start+Ze.count-Ce.start):(++ze,J[ze]=Ze)}J.length=ze+1;const ve=n.getParameter(n.UNPACK_ROW_LENGTH),Oe=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let de=0,Ce=J.length;de<Ce;de++){const Ze=J[de],Ve=Math.floor(Ze.start/4),Se=Math.ceil(Ze.count/4),ot=Ve%S.width,z=Math.floor(Ve/S.width),me=Se,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,ot,z,me,be,W,j,S.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function xe(R,S,W){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);const oe=Ne(R,S),J=S.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+W);const ze=i.get(J);if(J.version!==ze.__version||oe===!0){t.activeTexture(n.TEXTURE0+W);const ve=_t.getPrimaries(_t.workingColorSpace),Oe=S.colorSpace===Qi?null:_t.getPrimaries(S.colorSpace),Fe=S.colorSpace===Qi||ve===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let de=x(S.image,!1,r.maxTextureSize);de=it(S,de);const Ce=s.convert(S.format,S.colorSpace),Ze=s.convert(S.type);let Ve=y(S.internalFormat,Ce,Ze,S.colorSpace,S.isVideoTexture);ie(j,S);let Se;const ot=S.mipmaps,z=S.isVideoTexture!==!0,me=ze.__version===void 0||oe===!0,be=J.dataReady,De=P(S,de);if(S.isDepthTexture)Ve=_(S.format===eo,S.type),me&&(z?t.texStorage2D(n.TEXTURE_2D,1,Ve,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ve,de.width,de.height,0,Ce,Ze,null));else if(S.isDataTexture)if(ot.length>0){z&&me&&t.texStorage2D(n.TEXTURE_2D,De,Ve,ot[0].width,ot[0].height);for(let he=0,re=ot.length;he<re;he++)Se=ot[he],z?be&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,Ce,Ze,Se.data):t.texImage2D(n.TEXTURE_2D,he,Ve,Se.width,Se.height,0,Ce,Ze,Se.data);S.generateMipmaps=!1}else z?(me&&t.texStorage2D(n.TEXTURE_2D,De,Ve,de.width,de.height),be&&X(S,de,Ce,Ze)):t.texImage2D(n.TEXTURE_2D,0,Ve,de.width,de.height,0,Ce,Ze,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ve,ot[0].width,ot[0].height,de.depth);for(let he=0,re=ot.length;he<re;he++)if(Se=ot[he],S.format!==jn)if(Ce!==null)if(z){if(be)if(S.layerUpdates.size>0){const Be=Ed(Se.width,Se.height,S.format,S.type);for(const rt of S.layerUpdates){const Pt=Se.data.subarray(rt*Be/Se.data.BYTES_PER_ELEMENT,(rt+1)*Be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,rt,Se.width,Se.height,1,Ce,Pt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,de.depth,Ce,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Ve,Se.width,Se.height,de.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,de.depth,Ce,Ze,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Ve,Se.width,Se.height,de.depth,0,Ce,Ze,Se.data)}else{z&&me&&t.texStorage2D(n.TEXTURE_2D,De,Ve,ot[0].width,ot[0].height);for(let he=0,re=ot.length;he<re;he++)Se=ot[he],S.format!==jn?Ce!==null?z?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?be&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Se.width,Se.height,Ce,Ze,Se.data):t.texImage2D(n.TEXTURE_2D,he,Ve,Se.width,Se.height,0,Ce,Ze,Se.data)}else if(S.isDataArrayTexture)if(z){if(me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ve,de.width,de.height,de.depth),be)if(S.layerUpdates.size>0){const he=Ed(de.width,de.height,S.format,S.type);for(const re of S.layerUpdates){const Be=de.data.subarray(re*he/de.data.BYTES_PER_ELEMENT,(re+1)*he/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,de.width,de.height,1,Ce,Ze,Be)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,Ze,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,de.width,de.height,de.depth,0,Ce,Ze,de.data);else if(S.isData3DTexture)z?(me&&t.texStorage3D(n.TEXTURE_3D,De,Ve,de.width,de.height,de.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,Ze,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,de.width,de.height,de.depth,0,Ce,Ze,de.data);else if(S.isFramebufferTexture){if(me)if(z)t.texStorage2D(n.TEXTURE_2D,De,Ve,de.width,de.height);else{let he=de.width,re=de.height;for(let Be=0;Be<De;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ve,he,re,0,Ce,Ze,null),he>>=1,re>>=1}}else if(ot.length>0){if(z&&me){const he=tt(ot[0]);t.texStorage2D(n.TEXTURE_2D,De,Ve,he.width,he.height)}for(let he=0,re=ot.length;he<re;he++)Se=ot[he],z?be&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ce,Ze,Se):t.texImage2D(n.TEXTURE_2D,he,Ve,Ce,Ze,Se);S.generateMipmaps=!1}else if(z){if(me){const he=tt(de);t.texStorage2D(n.TEXTURE_2D,De,Ve,he.width,he.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Ze,de)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ce,Ze,de);v(S)&&m(j),ze.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function fe(R,S,W){if(S.image.length!==6)return;const j=Ne(R,S),oe=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+W);const J=i.get(oe);if(oe.version!==J.__version||j===!0){t.activeTexture(n.TEXTURE0+W);const ze=_t.getPrimaries(_t.workingColorSpace),ve=S.colorSpace===Qi?null:_t.getPrimaries(S.colorSpace),Oe=S.colorSpace===Qi||ze===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let re=0;re<6;re++)!Fe&&!de?Ce[re]=x(S.image[re],!0,r.maxCubemapSize):Ce[re]=de?S.image[re].image:S.image[re],Ce[re]=it(S,Ce[re]);const Ze=Ce[0],Ve=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),ot=y(S.internalFormat,Ve,Se,S.colorSpace),z=S.isVideoTexture!==!0,me=J.__version===void 0||j===!0,be=oe.dataReady;let De=P(S,Ze);ie(n.TEXTURE_CUBE_MAP,S);let he;if(Fe){z&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ot,Ze.width,Ze.height);for(let re=0;re<6;re++){he=Ce[re].mipmaps;for(let Be=0;Be<he.length;Be++){const rt=he[Be];S.format!==jn?Ve!==null?z?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,rt.width,rt.height,Ve,rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,ot,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,rt.width,rt.height,Ve,Se,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,ot,rt.width,rt.height,0,Ve,Se,rt.data)}}}else{if(he=S.mipmaps,z&&me){he.length>0&&De++;const re=tt(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ot,re.width,re.height)}for(let re=0;re<6;re++)if(de){z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce[re].width,Ce[re].height,Ve,Se,Ce[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ot,Ce[re].width,Ce[re].height,0,Ve,Se,Ce[re].data);for(let Be=0;Be<he.length;Be++){const Pt=he[Be].image[re].image;z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,Pt.width,Pt.height,Ve,Se,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,ot,Pt.width,Pt.height,0,Ve,Se,Pt.data)}}else{z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ve,Se,Ce[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ot,Ve,Se,Ce[re]);for(let Be=0;Be<he.length;Be++){const rt=he[Be];z?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,Ve,Se,rt.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,ot,Ve,Se,rt.image[re])}}}v(S)&&m(n.TEXTURE_CUBE_MAP),J.__version=oe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function He(R,S,W,j,oe,J){const ze=s.convert(W.format,W.colorSpace),ve=s.convert(W.type),Oe=y(W.internalFormat,ze,ve,W.colorSpace),Fe=i.get(S),de=i.get(W);if(de.__renderTarget=S,!Fe.__hasExternalTextures){const Ce=Math.max(1,S.width>>J),Ze=Math.max(1,S.height>>J);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,J,Oe,Ce,Ze,S.depth,0,ze,ve,null):t.texImage2D(oe,J,Oe,Ce,Ze,0,ze,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),le(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,oe,de.__webglTexture,0,_e(S)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,oe,de.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(R,S,W){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const j=S.depthTexture,oe=j&&j.isDepthTexture?j.type:null,J=_(S.stencilBuffer,oe),ze=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=_e(S);le(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,J,S.width,S.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ze,n.RENDERBUFFER,R)}else{const j=S.textures;for(let oe=0;oe<j.length;oe++){const J=j[oe],ze=s.convert(J.format,J.colorSpace),ve=s.convert(J.type),Oe=y(J.internalFormat,ze,ve,J.colorSpace),Fe=_e(S);W&&le(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Oe,S.width,S.height):le(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,Oe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ee(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const oe=j.__webglTexture,J=_e(S);if(S.depthTexture.format===Qs)le(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(S.depthTexture.format===eo)le(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Me(R){const S=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",oe)};j.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const j=R.texture.mipmaps;j&&j.length>0?ee(S.__webglFramebuffer[0],R):ee(S.__webglFramebuffer,R)}else if(W){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=n.createRenderbuffer(),Ue(S.__webglDepthbuffer[j],R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ue(S.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,S,W){const j=i.get(R);S!==void 0&&He(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Me(R)}function U(R){const S=R.texture,W=i.get(R),j=i.get(S);R.addEventListener("dispose",L);const oe=R.textures,J=R.isWebGLCubeRenderTarget===!0,ze=oe.length>1;if(ze||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,o.memory.textures++),J){W.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ve]=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)W.__webglFramebuffer[ve][Oe]=n.createFramebuffer()}else W.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)W.__webglFramebuffer[ve]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ze)for(let ve=0,Oe=oe.length;ve<Oe;ve++){const Fe=i.get(oe[ve]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&le(R)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ve=0;ve<oe.length;ve++){const Oe=oe[ve];W.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ve]);const Fe=s.convert(Oe.format,Oe.colorSpace),de=s.convert(Oe.type),Ce=y(Oe.internalFormat,Fe,de,Oe.colorSpace,R.isXRRenderTarget===!0),Ze=_e(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Ce,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,W.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ie(n.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)He(W.__webglFramebuffer[ve][Oe],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe);else He(W.__webglFramebuffer[ve],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);v(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let ve=0,Oe=oe.length;ve<Oe;ve++){const Fe=oe[ve],de=i.get(Fe);let Ce=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,de.__webglTexture),ie(Ce,Fe),He(W.__webglFramebuffer,R,Fe,n.COLOR_ATTACHMENT0+ve,Ce,0),v(Fe)&&m(Ce)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,j.__webglTexture),ie(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)He(W.__webglFramebuffer[Oe],R,S,n.COLOR_ATTACHMENT0,ve,Oe);else He(W.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,ve,0);v(S)&&m(ve),t.unbindTexture()}R.depthBuffer&&Me(R)}function Z(R){const S=R.textures;for(let W=0,j=S.length;W<j;W++){const oe=S[W];if(v(oe)){const J=M(R),ze=i.get(oe).__webglTexture;t.bindTexture(J,ze),m(J),t.unbindTexture()}}}const K=[],se=[];function te(R){if(R.samples>0){if(le(R)===!1){const S=R.textures,W=R.width,j=R.height;let oe=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=i.get(R),ve=S.length>1;if(ve)for(let Fe=0;Fe<S.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Oe=R.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Fe=0;Fe<S.length;Fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Fe]);const de=i.get(S[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,W,j,0,0,W,j,oe,n.NEAREST),c===!0&&(K.length=0,se.length=0,K.push(n.COLOR_ATTACHMENT0+Fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(K.push(J),se.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Fe=0;Fe<S.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Fe]);const de=i.get(S[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function _e(R){return Math.min(r.maxSamples,R.samples)}function le(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function it(R,S){const W=R.colorSpace,j=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==hs&&W!==Qi&&(_t.getTransfer(W)===Et?(j!==jn||oe!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=H,this.setTextureCube=N,this.rebindTextures=Pe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=He,this.useMultisampledRTT=le}function iy(n,e){function t(i,r=Qi){let s;const o=_t.getTransfer(r);if(i===fi)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Wl)return n.INT;if(i===Er)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===go)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===_h)return n.RGB;if(i===jn)return n.RGBA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===eo)return n.DEPTH_STENCIL;if(i===Xl)return n.RED;if(i===Yl)return n.RED_INTEGER;if(i===yh)return n.RG;if(i===jl)return n.RG_INTEGER;if(i===Kl)return n.RGBA_INTEGER;if(i===aa||i===ca||i===la||i===ua)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===sl||i===ol||i===al)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===ll||i===ul)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cl||i===ll)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ul)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===hl||i===fl||i===pl||i===ml||i===gl||i===vl||i===xl||i===_l||i===yl||i===bl||i===wl||i===Ml||i===Sl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_l)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===El||i===Tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===da)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bh||i===Al||i===Cl||i===Rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===da)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Kh extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
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

}`;class oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Kh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new or({vertexShader:ry,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ay extends ys{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,f=null,g=null;const x=new oy,v={},m=t.getContextAttributes();let M=null,y=null;const _=[],P=[],C=new ge;let L=null;const D=new wn;D.viewport=new Wt;const w=new wn;w.viewport=new Wt;const b=[D,w],A=new Cg;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let xe=_[X];return xe===void 0&&(xe=new Ac,_[X]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(X){let xe=_[X];return xe===void 0&&(xe=new Ac,_[X]=xe),xe.getGripSpace()},this.getHand=function(X){let xe=_[X];return xe===void 0&&(xe=new Ac,_[X]=xe),xe.getHandSpace()};function E(X){const xe=P.indexOf(X.inputSource);if(xe===-1)return;const fe=_[xe];fe!==void 0&&(fe.update(X.inputSource,X.frame,l||o),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",k);for(let X=0;X<_.length;X++){const xe=P[X];xe!==null&&(P[X]=null,_[X].disconnect(xe))}O=null,B=null,x.reset();for(const X in v)delete v[X];e.setRenderTarget(M),f=null,p=null,d=null,r=null,y=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",F),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,He=null,Ue=null;m.depth&&(Ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?eo:Qs,He=m.stencil?Zs:Er);const ee={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};p=d.createProjectionLayer(ee),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Bi(p.textureWidth,p.textureHeight,{format:jn,type:fi,depthTexture:new Ih(p.textureWidth,p.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bi(f.framebufferWidth,f.framebufferHeight,{format:jn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(X){for(let xe=0;xe<X.removed.length;xe++){const fe=X.removed[xe],He=P.indexOf(fe);He>=0&&(P[He]=null,_[He].disconnect(fe))}for(let xe=0;xe<X.added.length;xe++){const fe=X.added[xe];let He=P.indexOf(fe);if(He===-1){for(let ee=0;ee<_.length;ee++)if(ee>=P.length){P.push(fe),He=ee;break}else if(P[ee]===null){P[ee]=fe,He=ee;break}if(He===-1)break}const Ue=_[He];Ue&&Ue.connect(fe)}}const H=new I,N=new I;function $(X,xe,fe){H.setFromMatrixPosition(xe.matrixWorld),N.setFromMatrixPosition(fe.matrixWorld);const He=H.distanceTo(N),Ue=xe.projectionMatrix.elements,ee=fe.projectionMatrix.elements,Me=Ue[14]/(Ue[10]-1),Pe=Ue[14]/(Ue[10]+1),U=(Ue[9]+1)/Ue[5],Z=(Ue[9]-1)/Ue[5],K=(Ue[8]-1)/Ue[0],se=(ee[8]+1)/ee[0],te=Me*K,_e=Me*se,le=He/(-K+se),ye=le*-K;if(xe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ye),X.translateZ(le),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ue[10]===-1)X.projectionMatrix.copy(xe.projectionMatrix),X.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const it=Me+le,tt=Pe+le,R=te-ye,S=_e+(He-ye),W=U*Pe/tt*it,j=Z*Pe/tt*it;X.projectionMatrix.makePerspective(R,S,W,j,it,tt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,xe){xe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(xe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let xe=X.near,fe=X.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),A.near=w.near=D.near=xe,A.far=w.far=D.far=fe,(O!==A.near||B!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,B=A.far),A.layers.mask=X.layers.mask|6,D.layers.mask=A.layers.mask&3,w.layers.mask=A.layers.mask&5;const He=X.parent,Ue=A.cameras;Q(A,He);for(let ee=0;ee<Ue.length;ee++)Q(Ue[ee],He);Ue.length===2?$(A,D,w):A.projectionMatrix.copy(D.projectionMatrix),ae(X,A,He)};function ae(X,xe,fe){fe===null?X.matrix.copy(xe.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(xe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(xe.projectionMatrix),X.projectionMatrixInverse.copy(xe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=to*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(A)},this.getCameraTexture=function(X){return v[X]};let ie=null;function Ne(X,xe){if(u=xe.getViewerPose(l||o),g=xe,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let He=!1;fe.length!==A.cameras.length&&(A.cameras.length=0,He=!0);for(let Pe=0;Pe<fe.length;Pe++){const U=fe[Pe];let Z=null;if(f!==null)Z=f.getViewport(U);else{const se=d.getViewSubImage(p,U);Z=se.viewport,Pe===0&&(e.setRenderTargetTextures(y,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(y))}let K=b[Pe];K===void 0&&(K=new wn,K.layers.enable(Pe),K.viewport=new Wt,b[Pe]=K),K.matrix.fromArray(U.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(U.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Z.x,Z.y,Z.width,Z.height),Pe===0&&(A.matrix.copy(K.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),He===!0&&A.cameras.push(K)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Pe=d.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(Pe,r.renderState)}if(Ue&&Ue.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Pe=0;Pe<fe.length;Pe++){const U=fe[Pe].camera;if(U){let Z=v[U];Z||(Z=new Kh,v[U]=Z);const K=d.getCameraImage(U);Z.sourceTexture=K}}}for(let fe=0;fe<_.length;fe++){const He=P[fe],Ue=_[fe];He!==null&&Ue!==void 0&&Ue.update(He,xe,l||o)}ie&&ie(X,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const Ke=new $h;Ke.setAnimationLoop(Ne),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const gr=new pi,cy=new wt;function ly(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,Ch(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,M,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),d(v,m)):m.isMeshPhongMaterial?(s(v,m),u(v,m)):m.isMeshStandardMaterial?(s(v,m),p(v,m),m.isMeshPhysicalMaterial&&f(v,m,_)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),x(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?c(v,m,M,y):m.isSpriteMaterial?l(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===xn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===xn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const M=e.get(m),y=M.envMap,_=M.envMapRotation;y&&(v.envMap.value=y,gr.copy(_),gr.x*=-1,gr.y*=-1,gr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),v.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(gr)),v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,M,y){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*M,v.scale.value=y*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function p(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function f(v,m,M){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=M.texture,v.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function x(v,m){const M=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(M.matrixWorld),v.nearDistance.value=M.shadow.camera.near,v.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const _=y.program;i.uniformBlockBinding(M,_)}function l(M,y){let _=r[M.id];_===void 0&&(g(M),_=u(M),r[M.id]=_,M.addEventListener("dispose",v));const P=y.program;i.updateUBOMapping(M,P);const C=e.render.frame;s[M.id]!==C&&(p(M),s[M.id]=C)}function u(M){const y=d();M.__bindingPointIndex=y;const _=n.createBuffer(),P=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const y=r[M.id],_=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,L=_.length;C<L;C++){const D=Array.isArray(_[C])?_[C]:[_[C]];for(let w=0,b=D.length;w<b;w++){const A=D[w];if(f(A,C,w,P)===!0){const O=A.__offset,B=Array.isArray(A.value)?A.value:[A.value];let E=0;for(let F=0;F<B.length;F++){const k=B[F],H=x(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,O+E,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,E),E+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,y,_,P){const C=M.value,L=y+"_"+_;if(P[L]===void 0)return typeof C=="number"||typeof C=="boolean"?P[L]=C:P[L]=C.clone(),!0;{const D=P[L];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return P[L]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(M){const y=M.uniforms;let _=0;const P=16;for(let L=0,D=y.length;L<D;L++){const w=Array.isArray(y[L])?y[L]:[y[L]];for(let b=0,A=w.length;b<A;b++){const O=w[b],B=Array.isArray(O.value)?O.value:[O.value];for(let E=0,F=B.length;E<F;E++){const k=B[E],H=x(k),N=_%P,$=N%H.boundary,Q=N+$;_+=$,Q!==0&&P-Q<H.storage&&(_+=P-Q),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=H.storage}}}const C=_%P;return C>0&&(_+=P-C),M.__size=_,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function v(M){const y=M.target;y.removeEventListener("dispose",v);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class dy{constructor(e={}){const{canvas:t=pm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let P=!1;this._outputColorSpace=en;let C=0,L=0,D=null,w=-1,b=null;const A=new Wt,O=new Wt;let B=null;const E=new st(0);let F=0,k=t.width,H=t.height,N=1,$=null,Q=null;const ae=new Wt(0,0,k,H),ie=new Wt(0,0,k,H);let Ne=!1;const Ke=new ru;let X=!1,xe=!1;const fe=new wt,He=new I,Ue=new Wt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Pe(){return D===null?N:1}let U=i;function Z(T,V){return t.getContext(T,V)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gl}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){const V="webgl2";if(U=Z(V,T),U===null)throw Z(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,se,te,_e,le,ye,it,tt,R,S,W,j,oe,J,ze,ve,Oe,Fe,de,Ce,Ze,Ve,Se,ot;function z(){K=new bx(U),K.init(),Ve=new iy(U,K),se=new px(U,K,e,Ve),te=new ty(U,K),se.reversedDepthBuffer&&p&&te.buffers.depth.setReversed(!0),_e=new Sx(U),le=new V_,ye=new ny(U,K,te,le,se,Ve,_e),it=new gx(_),tt=new yx(_),R=new Pg(U),Se=new hx(U,R),S=new wx(U,R,_e,Se),W=new Tx(U,S,R,_e),de=new Ex(U,se,ye),ve=new mx(le),j=new H_(_,it,tt,K,se,Se,ve),oe=new ly(_,le),J=new W_,ze=new K_(K),Fe=new dx(_,it,tt,te,W,f,c),Oe=new Q_(_,W,se),ot=new uy(U,_e,se,te),Ce=new fx(U,K,_e),Ze=new Mx(U,K,_e),_e.programs=j.programs,_.capabilities=se,_.extensions=K,_.properties=le,_.renderLists=J,_.shadowMap=Oe,_.state=te,_.info=_e}z();const me=new ay(_,U);this.xr=me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(k,H,!1))},this.getSize=function(T){return T.set(k,H)},this.setSize=function(T,V,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,H=V,t.width=Math.floor(T*N),t.height=Math.floor(V*N),q===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(k*N,H*N).floor()},this.setDrawingBufferSize=function(T,V,q){k=T,H=V,N=q,t.width=Math.floor(T*q),t.height=Math.floor(V*q),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,V,q,Y){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,V,q,Y),te.viewport(A.copy(ae).multiplyScalar(N).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,V,q,Y){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,V,q,Y),te.scissor(O.copy(ie).multiplyScalar(N).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(T){te.setScissorTest(Ne=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,q=!0){let Y=0;if(T){let G=!1;if(D!==null){const pe=D.texture.format;G=pe===Kl||pe===jl||pe===Yl}if(G){const pe=D.texture.type,Ee=pe===fi||pe===Er||pe===Js||pe===Zs||pe===$l||pe===ql,ke=Fe.getClearColor(),Le=Fe.getClearAlpha(),Je=ke.r,et=ke.g,We=ke.b;Ee?(g[0]=Je,g[1]=et,g[2]=We,g[3]=Le,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Je,x[1]=et,x[2]=We,x[3]=Le,U.clearBufferiv(U.COLOR,0,x))}else Y|=U.COLOR_BUFFER_BIT}V&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Fe.dispose(),J.dispose(),ze.dispose(),le.dispose(),it.dispose(),tt.dispose(),W.dispose(),Se.dispose(),ot.dispose(),j.dispose(),me.dispose(),me.removeEventListener("sessionstart",oi),me.removeEventListener("sessionend",Uu),lr.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=_e.autoReset,V=Oe.enabled,q=Oe.autoUpdate,Y=Oe.needsUpdate,G=Oe.type;z(),_e.autoReset=T,Oe.enabled=V,Oe.autoUpdate=q,Oe.needsUpdate=Y,Oe.type=G}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const V=T.target;V.removeEventListener("dispose",re),Be(V)}function Be(T){rt(T),le.remove(T)}function rt(T){const V=le.get(T).programs;V!==void 0&&(V.forEach(function(q){j.releaseProgram(q)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,q,Y,G,pe){V===null&&(V=ee);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,ke=ap(T,V,q,Y,G);te.setMaterial(Y,Ee);let Le=q.index,Je=1;if(Y.wireframe===!0){if(Le=S.getWireframeAttribute(q),Le===void 0)return;Je=2}const et=q.drawRange,We=q.attributes.position;let pt=et.start*Je,St=(et.start+et.count)*Je;pe!==null&&(pt=Math.max(pt,pe.start*Je),St=Math.min(St,(pe.start+pe.count)*Je)),Le!==null?(pt=Math.max(pt,0),St=Math.min(St,Le.count)):We!=null&&(pt=Math.max(pt,0),St=Math.min(St,We.count));const Ht=St-pt;if(Ht<0||Ht===1/0)return;Se.setup(G,Y,ke,q,Le);let Lt,At=Ce;if(Le!==null&&(Lt=R.get(Le),At=Ze,At.setIndex(Lt)),G.isMesh)Y.wireframe===!0?(te.setLineWidth(Y.wireframeLinewidth*Pe()),At.setMode(U.LINES)):At.setMode(U.TRIANGLES);else if(G.isLine){let Ye=Y.linewidth;Ye===void 0&&(Ye=1),te.setLineWidth(Ye*Pe()),G.isLineSegments?At.setMode(U.LINES):G.isLineLoop?At.setMode(U.LINE_LOOP):At.setMode(U.LINE_STRIP)}else G.isPoints?At.setMode(U.POINTS):G.isSprite&&At.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))At.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,kt=G._multiDrawCounts,xt=G._multiDrawCount,Tn=Le?R.get(Le).bytesPerElement:1,Nr=le.get(Y).currentProgram.getUniforms();for(let An=0;An<xt;An++)Nr.setValue(U,"_gl_DrawID",An),At.render(Ye[An]/Tn,kt[An])}else if(G.isInstancedMesh)At.renderInstances(pt,Ht,G.count);else if(q.isInstancedBufferGeometry){const Ye=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,kt=Math.min(q.instanceCount,Ye);At.renderInstances(pt,Ht,kt)}else At.render(pt,Ht)};function Pt(T,V,q){T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=xn,T.needsUpdate=!0,Po(T,V,q),T.side=sr,T.needsUpdate=!0,Po(T,V,q),T.side=cn):Po(T,V,q)}this.compile=function(T,V,q=null){q===null&&(q=T),m=ze.get(q),m.init(V),y.push(m),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==q&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Y=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){const ke=pe[Ee];Pt(ke,q,G),Y.add(ke)}else Pt(pe,q,G),Y.add(pe)}),m=y.pop(),Y},this.compileAsync=function(T,V,q=null){const Y=this.compile(T,V,q);return new Promise(G=>{function pe(){if(Y.forEach(function(Ee){le.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){G(T);return}setTimeout(pe,10)}K.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let yt=null;function Ei(T){yt&&yt(T)}function oi(){lr.stop()}function Uu(){lr.start()}const lr=new $h;lr.setAnimationLoop(Ei),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(T){yt=T,me.setAnimationLoop(T),T===null?lr.stop():lr.start()},me.addEventListener("sessionstart",oi),me.addEventListener("sessionend",Uu),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(V),V=me.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,V,D),m=ze.get(T,y.length),m.init(V),y.push(m),fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ke.setFromProjectionMatrix(fe,ui,V.reversedDepth),xe=this.localClippingEnabled,X=ve.init(this.clippingPlanes,xe),v=J.get(T,M.length),v.init(),M.push(v),me.enabled===!0&&me.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&rc(pe,V,-1/0,_.sortObjects)}rc(T,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort($,Q),Me=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Me&&Fe.addToRenderList(v,T),this.info.render.frame++,X===!0&&ve.beginShadows();const q=m.state.shadowsArray;Oe.render(q,T,V),X===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,G=v.transmissive;if(m.setupLights(),V.isArrayCamera){const pe=V.cameras;if(G.length>0)for(let Ee=0,ke=pe.length;Ee<ke;Ee++){const Le=pe[Ee];Nu(Y,G,T,Le)}Me&&Fe.render(T);for(let Ee=0,ke=pe.length;Ee<ke;Ee++){const Le=pe[Ee];ku(v,T,Le,Le.viewport)}}else G.length>0&&Nu(Y,G,T,V),Me&&Fe.render(T),ku(v,T,V);D!==null&&L===0&&(ye.updateMultisampleRenderTarget(D),ye.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,V),Se.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&ve.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?v=M[M.length-1]:v=null};function rc(T,V,q,Y){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ke.intersectsSprite(T)){Y&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Ee=W.update(T),ke=T.material;ke.visible&&v.push(T,Ee,ke,q,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ke.intersectsObject(T))){const Ee=W.update(T),ke=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ue.copy(Ee.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(ke)){const Le=Ee.groups;for(let Je=0,et=Le.length;Je<et;Je++){const We=Le[Je],pt=ke[We.materialIndex];pt&&pt.visible&&v.push(T,Ee,pt,q,Ue.z,We)}}else ke.visible&&v.push(T,Ee,ke,q,Ue.z,null)}}const pe=T.children;for(let Ee=0,ke=pe.length;Ee<ke;Ee++)rc(pe[Ee],V,q,Y)}function ku(T,V,q,Y){const G=T.opaque,pe=T.transmissive,Ee=T.transparent;m.setupLightsView(q),X===!0&&ve.setGlobalState(_.clippingPlanes,q),Y&&te.viewport(A.copy(Y)),G.length>0&&Ro(G,V,q),pe.length>0&&Ro(pe,V,q),Ee.length>0&&Ro(Ee,V,q),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Nu(T,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Bi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?go:fi,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const pe=m.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||A;pe.setSize(Ee.z*_.transmissionResolutionScale,Ee.w*_.transmissionResolutionScale);const ke=_.getRenderTarget(),Le=_.getActiveCubeFace(),Je=_.getActiveMipmapLevel();_.setRenderTarget(pe),_.getClearColor(E),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),Me&&Fe.render(q);const et=_.toneMapping;_.toneMapping=ir;const We=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),X===!0&&ve.setGlobalState(_.clippingPlanes,Y),Ro(T,q,Y),ye.updateMultisampleRenderTarget(pe),ye.updateRenderTargetMipmap(pe),K.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let St=0,Ht=V.length;St<Ht;St++){const Lt=V[St],At=Lt.object,Ye=Lt.geometry,kt=Lt.material,xt=Lt.group;if(kt.side===cn&&At.layers.test(Y.layers)){const Tn=kt.side;kt.side=xn,kt.needsUpdate=!0,Ou(At,q,Y,Ye,kt,xt),kt.side=Tn,kt.needsUpdate=!0,pt=!0}}pt===!0&&(ye.updateMultisampleRenderTarget(pe),ye.updateRenderTargetMipmap(pe))}_.setRenderTarget(ke,Le,Je),_.setClearColor(E,F),We!==void 0&&(Y.viewport=We),_.toneMapping=et}function Ro(T,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,pe=T.length;G<pe;G++){const Ee=T[G],ke=Ee.object,Le=Ee.geometry,Je=Ee.group;let et=Ee.material;et.allowOverride===!0&&Y!==null&&(et=Y),ke.layers.test(q.layers)&&Ou(ke,V,q,Le,et,Je)}}function Ou(T,V,q,Y,G,pe){T.onBeforeRender(_,V,q,Y,G,pe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(_,V,q,Y,T,pe),G.transparent===!0&&G.side===cn&&G.forceSinglePass===!1?(G.side=xn,G.needsUpdate=!0,_.renderBufferDirect(q,V,Y,G,T,pe),G.side=sr,G.needsUpdate=!0,_.renderBufferDirect(q,V,Y,G,T,pe),G.side=cn):_.renderBufferDirect(q,V,Y,G,T,pe),T.onAfterRender(_,V,q,Y,G,pe)}function Po(T,V,q){V.isScene!==!0&&(V=ee);const Y=le.get(T),G=m.state.lights,pe=m.state.shadowsArray,Ee=G.state.version,ke=j.getParameters(T,G.state,pe,V,q),Le=j.getProgramCacheKey(ke);let Je=Y.programs;Y.environment=T.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(T.isMeshStandardMaterial?tt:it).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Je===void 0&&(T.addEventListener("dispose",re),Je=new Map,Y.programs=Je);let et=Je.get(Le);if(et!==void 0){if(Y.currentProgram===et&&Y.lightsStateVersion===Ee)return Bu(T,ke),et}else ke.uniforms=j.getUniforms(T),T.onBeforeCompile(ke,_),et=j.acquireProgram(ke,Le),Je.set(Le,et),Y.uniforms=ke.uniforms;const We=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=ve.uniform),Bu(T,ke),Y.needsLights=lp(T),Y.lightsStateVersion=Ee,Y.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=et,Y.uniformsList=null,et}function Fu(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=ha.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Bu(T,V){const q=le.get(T);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function ap(T,V,q,Y,G){V.isScene!==!0&&(V=ee),ye.resetTextureUnits();const pe=V.fog,Ee=Y.isMeshStandardMaterial?V.environment:null,ke=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:hs,Le=(Y.isMeshStandardMaterial?tt:it).get(Y.envMap||Ee),Je=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,et=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),We=!!q.morphAttributes.position,pt=!!q.morphAttributes.normal,St=!!q.morphAttributes.color;let Ht=ir;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ht=_.toneMapping);const Lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=Lt!==void 0?Lt.length:0,Ye=le.get(Y),kt=m.state.lights;if(X===!0&&(xe===!0||T!==b)){const fn=T===b&&Y.id===w;ve.setState(Y,T,fn)}let xt=!1;Y.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==kt.state.version||Ye.outputColorSpace!==ke||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==Le||Y.fog===!0&&Ye.fog!==pe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ve.numPlanes||Ye.numIntersection!==ve.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==et||Ye.morphTargets!==We||Ye.morphNormals!==pt||Ye.morphColors!==St||Ye.toneMapping!==Ht||Ye.morphTargetsCount!==At)&&(xt=!0):(xt=!0,Ye.__version=Y.version);let Tn=Ye.currentProgram;xt===!0&&(Tn=Po(Y,V,G));let Nr=!1,An=!1,Ls=!1;const Nt=Tn.getUniforms(),zn=Ye.uniforms;if(te.useProgram(Tn.program)&&(Nr=!0,An=!0,Ls=!0),Y.id!==w&&(w=Y.id,An=!0),Nr||b!==T){te.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Nt.setValue(U,"projectionMatrix",T.projectionMatrix),Nt.setValue(U,"viewMatrix",T.matrixWorldInverse);const bn=Nt.map.cameraPosition;bn!==void 0&&bn.setValue(U,He.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&Nt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Nt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,An=!0,Ls=!0)}if(G.isSkinnedMesh){Nt.setOptional(U,G,"bindMatrix"),Nt.setOptional(U,G,"bindMatrixInverse");const fn=G.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Nt.setValue(U,"boneTexture",fn.boneTexture,ye))}G.isBatchedMesh&&(Nt.setOptional(U,G,"batchingTexture"),Nt.setValue(U,"batchingTexture",G._matricesTexture,ye),Nt.setOptional(U,G,"batchingIdTexture"),Nt.setValue(U,"batchingIdTexture",G._indirectTexture,ye),Nt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(U,"batchingColorTexture",G._colorsTexture,ye));const Hn=q.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&de.update(G,q,Tn),(An||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Nt.setValue(U,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zn.envMap.value=Le,zn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(zn.envMapIntensity.value=V.environmentIntensity),An&&(Nt.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&cp(zn,Ls),pe&&Y.fog===!0&&oe.refreshFogUniforms(zn,pe),oe.refreshMaterialUniforms(zn,Y,N,H,m.state.transmissionRenderTarget[T.id]),ha.upload(U,Fu(Ye),zn,ye)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ha.upload(U,Fu(Ye),zn,ye),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Nt.setValue(U,"center",G.center),Nt.setValue(U,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(U,"normalMatrix",G.normalMatrix),Nt.setValue(U,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const fn=Y.uniformsGroups;for(let bn=0,sc=fn.length;bn<sc;bn++){const ur=fn[bn];ot.update(ur,Tn),ot.bind(ur,Tn)}}return Tn}function cp(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function lp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,V,q){const Y=le.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),le.get(T.texture).__webglTexture=V,le.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const q=le.get(T);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const up=U.createFramebuffer();this.setRenderTarget=function(T,V=0,q=0){D=T,C=V,L=q;let Y=!0,G=null,pe=!1,Ee=!1;if(T){const Le=le.get(T);if(Le.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Le.__webglFramebuffer===void 0)ye.setupRenderTarget(T);else if(Le.__hasExternalTextures)ye.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const We=T.depthTexture;if(Le.__boundDepthTexture!==We){if(We!==null&&le.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(T)}}const Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ee=!0);const et=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(et[V])?G=et[V][q]:G=et[V],pe=!0):T.samples>0&&ye.useMultisampledRTT(T)===!1?G=le.get(T).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[q]:G=et,A.copy(T.viewport),O.copy(T.scissor),B=T.scissorTest}else A.copy(ae).multiplyScalar(N).floor(),O.copy(ie).multiplyScalar(N).floor(),B=Ne;if(q!==0&&(G=up),te.bindFramebuffer(U.FRAMEBUFFER,G)&&Y&&te.drawBuffers(T,G),te.viewport(A),te.scissor(O),te.setScissorTest(B),pe){const Le=le.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,q)}else if(Ee){const Le=V;for(let Je=0;Je<T.textures.length;Je++){const et=le.get(T.textures[Je]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Je,et.__webglTexture,q,Le)}}else if(T!==null&&q!==0){const Le=le.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Le.__webglTexture,q)}w=-1},this.readRenderTargetPixels=function(T,V,q,Y,G,pe,Ee,ke=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){te.bindFramebuffer(U.FRAMEBUFFER,Le);try{const Je=T.textures[ke],et=Je.format,We=Je.type;if(!se.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Y&&q>=0&&q<=T.height-G&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ke),U.readPixels(V,q,Y,G,Ve.convert(et),Ve.convert(We),pe))}finally{const Je=D!==null?le.get(D).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(T,V,q,Y,G,pe,Ee,ke=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le)if(V>=0&&V<=T.width-Y&&q>=0&&q<=T.height-G){te.bindFramebuffer(U.FRAMEBUFFER,Le);const Je=T.textures[ke],et=Je.format,We=Je.type;if(!se.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ke),U.readPixels(V,q,Y,G,Ve.convert(et),Ve.convert(We),0);const St=D!==null?le.get(D).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,St);const Ht=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mm(U,Ht,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.deleteBuffer(pt),U.deleteSync(Ht),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,q=0){const Y=Math.pow(2,-q),G=Math.floor(T.image.width*Y),pe=Math.floor(T.image.height*Y),Ee=V!==null?V.x:0,ke=V!==null?V.y:0;ye.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ee,ke,G,pe),te.unbindTexture()};const dp=U.createFramebuffer(),hp=U.createFramebuffer();this.copyTextureToTexture=function(T,V,q=null,Y=null,G=0,pe=null){pe===null&&(G!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=G,G=0):pe=0);let Ee,ke,Le,Je,et,We,pt,St,Ht;const Lt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(q!==null)Ee=q.max.x-q.min.x,ke=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,Je=q.min.x,et=q.min.y,We=q.isBox3?q.min.z:0;else{const Hn=Math.pow(2,-G);Ee=Math.floor(Lt.width*Hn),ke=Math.floor(Lt.height*Hn),T.isDataArrayTexture?Le=Lt.depth:T.isData3DTexture?Le=Math.floor(Lt.depth*Hn):Le=1,Je=0,et=0,We=0}Y!==null?(pt=Y.x,St=Y.y,Ht=Y.z):(pt=0,St=0,Ht=0);const At=Ve.convert(V.format),Ye=Ve.convert(V.type);let kt;V.isData3DTexture?(ye.setTexture3D(V,0),kt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ye.setTexture2DArray(V,0),kt=U.TEXTURE_2D_ARRAY):(ye.setTexture2D(V,0),kt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const xt=U.getParameter(U.UNPACK_ROW_LENGTH),Tn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Nr=U.getParameter(U.UNPACK_SKIP_PIXELS),An=U.getParameter(U.UNPACK_SKIP_ROWS),Ls=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),U.pixelStorei(U.UNPACK_SKIP_ROWS,et),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const Nt=T.isDataArrayTexture||T.isData3DTexture,zn=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const Hn=le.get(T),fn=le.get(V),bn=le.get(Hn.__renderTarget),sc=le.get(fn.__renderTarget);te.bindFramebuffer(U.READ_FRAMEBUFFER,bn.__webglFramebuffer),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,sc.__webglFramebuffer);for(let ur=0;ur<Le;ur++)Nt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,le.get(T).__webglTexture,G,We+ur),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,le.get(V).__webglTexture,pe,Ht+ur)),U.blitFramebuffer(Je,et,Ee,ke,pt,St,Ee,ke,U.DEPTH_BUFFER_BIT,U.NEAREST);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||le.has(T)){const Hn=le.get(T),fn=le.get(V);te.bindFramebuffer(U.READ_FRAMEBUFFER,dp),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,hp);for(let bn=0;bn<Le;bn++)Nt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Hn.__webglTexture,G,We+bn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Hn.__webglTexture,G),zn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,fn.__webglTexture,pe,Ht+bn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fn.__webglTexture,pe),G!==0?U.blitFramebuffer(Je,et,Ee,ke,pt,St,Ee,ke,U.COLOR_BUFFER_BIT,U.NEAREST):zn?U.copyTexSubImage3D(kt,pe,pt,St,Ht+bn,Je,et,Ee,ke):U.copyTexSubImage2D(kt,pe,pt,St,Je,et,Ee,ke);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else zn?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(kt,pe,pt,St,Ht,Ee,ke,Le,At,Ye,Lt.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(kt,pe,pt,St,Ht,Ee,ke,Le,At,Lt.data):U.texSubImage3D(kt,pe,pt,St,Ht,Ee,ke,Le,At,Ye,Lt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pe,pt,St,Ee,ke,At,Ye,Lt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pe,pt,St,Lt.width,Lt.height,At,Lt.data):U.texSubImage2D(U.TEXTURE_2D,pe,pt,St,Ee,ke,At,Ye,Lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nr),U.pixelStorei(U.UNPACK_SKIP_ROWS,An),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ls),pe===0&&V.generateMipmaps&&U.generateMipmap(kt),te.unbindTexture()},this.copyTextureToTexture3D=function(T,V,q=null,Y=null,G=0){return os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,q,Y,G)},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&ye.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ye.setTextureCube(T,0):T.isData3DTexture?ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ye.setTexture2DArray(T,0):ye.setTexture2D(T,0),te.unbindTexture()},this.resetState=function(){C=0,L=0,D=null,te.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}function hy(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Xt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let p=0;p<n.length;++p){const f=n[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[p].attributes.position.count}c.setIndex(d)}for(const u in s){const d=Kd(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<d;++p){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][p]);const g=Kd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Kd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Dn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let p=0,f=u.count;p<f;p++)for(let g=0;g<t;g++){const x=u.getComponent(p,g);a.setComponent(p+d,g,x)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Wa(n,e=0){const t=new Ie,i=Object.fromEntries(Object.entries({skin:n.skin,hair:n.hair,shirt:n.color,pants:e%2?"#384b58":"#405646",boots:"#3f3431",white:"#fff6e6",eye:"#17222a",leather:"#965e48",straw:"#e7cb82"}).map(([f,g])=>[f,new mi({color:g})])),r=new En(1,16,12),s=new Gt(1,1,1);function o(f,g,x,v,m){const M=new ce(g==="box"?s:r,i[x]);return M.scale.set(...v),M.position.set(...m),M.castShadow=!0,f.add(M),M}const a=new Ie;t.add(a),o(a,"sphere","shirt",[.34,.43,.24],[0,1.03,0]),o(a,"box","pants",[.48,.23,.33],[0,.66,0]),o(a,"sphere","skin",[.115,.17,.115],[0,1.39,0]);const c=new Ie;c.position.y=1.65,a.add(c),o(c,"sphere","skin",[.31,.33,.28],[0,0,0]);for(const f of[-1,1]){o(c,"sphere","skin",[.064,.1,.052],[f*.3,-.01,0]),o(c,"sphere","white",[.079,.092,.035],[f*.115,.035,.253]),o(c,"sphere","eye",[.036,.052,.019],[f*.106,.025,.286]),o(c,"sphere","white",[.014,.018,.008],[f*.106-.01,.044,.305]);const g=o(c,"sphere","hair",[.081,.018,.019],[f*.116,.145,.25]);g.rotation.z=f*-.1;const x=o(a,"box","white",[.13,.07,.08],[f*.095,1.35,.18]);x.rotation.z=f*.35}o(c,"sphere","skin",[.057,.065,.065],[0,-.04,.282]);const l=new lu([new I(-.085,-.13,.25),new I(0,-.162,.264),new I(.085,-.13,.25)]);c.add(new ce(new Ha(l,8,.012,5,!1),i.eye)),o(c,"sphere","hair",[.32,.15,.28],[0,.23,-.028]);const u=o(c,"sphere","hair",[.19,.065,.06],[-.11,.18,.235]);if(u.rotation.z=-.2,n.accessory==="bun"&&(o(c,"sphere","hair",[.23,.23,.17],[0,.03,-.2]),o(c,"sphere","hair",[.17,.17,.17],[.18,.3,-.15])),n.accessory==="curls")for(let f=0;f<8;f++){const g=f*Math.PI/4;o(c,"sphere","hair",[.12,.13,.12],[Math.cos(g)*.26,.17+Math.sin(g)*.1,-.06+Math.sin(g)*.15])}if(n.accessory==="glasses"){for(const f of[-1,1]){const g=new ce(new Sn(.092,.013,6,16),i.eye);g.position.set(f*.115,.035,.295),c.add(g)}o(c,"box","eye",[.065,.018,.025],[0,.045,.29])}if(["sunhat","cap"].includes(n.accessory)){const f=n.accessory==="sunhat"?i.straw:i.shirt,g=new ce(new ht(.4,.4,.035,24),f);g.position.set(0,.285,.04),c.add(g);const x=new ce(new ht(.235,.27,.18,20),f);x.position.y=.39,c.add(x);const v=new ce(new ht(.264,.272,.05,20),i.leather);v.position.y=.32,c.add(v)}for(let f=0;f<3;f++)o(a,"sphere","white",[.019,.019,.014],[0,1.2-f*.12,.24]);const d=[],p=[];for(const f of[-1,1]){const g=new Ie;g.position.set(f*.32,1.24,0),a.add(g),o(g,"sphere","shirt",[.12,.19,.125],[f*.03,-.1,0]),o(g,"sphere","skin",[.076,.2,.076],[f*.04,-.34,.02]),o(g,"sphere","skin",[.09,.095,.08],[f*.04,-.52,.025]),o(g,"sphere","skin",[.035,.055,.035],[f*-.02,-.5,.075]),g.rotation.z=f*.06,d.push(g);const x=new Ie;x.position.set(f*.15,.64,0),t.add(x),o(x,"sphere","pants",[.12,.25,.12],[0,-.21,0]),o(x,"sphere","boots",[.14,.1,.21],[0,-.52,.07]),o(x,"box","boots",[.25,.035,.34],[0,-.59,.055]),p.push(x)}if(["bun","glasses"].includes(n.accessory)){const f=o(a,"box","leather",[.07,.77,.045],[.03,1.05,.245]);f.rotation.z=-.65,o(a,"box","leather",[.25,.29,.15],[.3,.73,.13]),o(a,"box","straw",[.07,.045,.018],[.3,.76,.215])}return t.userData.rig={body:a,head:c,arms:d,legs:p},Mt(t),t}function Mt(n){const e=new Set;n.traverse(t=>{if(!t.isGroup)return;const i=new Map;t.children.filter(r=>r.isMesh).forEach(r=>{i.has(r.material)||i.set(r.material,[]),i.get(r.material).push(r)});for(const[r,s]of i){const o=s.map(d=>(d.updateMatrix(),d.geometry.clone().applyMatrix4(d.matrix))),a=o.some(d=>!d.index),c=o.map(d=>a&&d.index?d.toNonIndexed():d),l=hy(c);if(new Set([...o,...c]).forEach(d=>d.dispose()),!l)continue;s.forEach(d=>{t.remove(d),e.add(d.geometry)});const u=new ce(l,r);u.castShadow=!0,u.receiveShadow=!0,t.add(u)}}),e.forEach(t=>t.dispose())}function fy(n,e,t){const i=-n/2,r=-e/2,s=new Ar;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s}function Jh(n=!1){const e=new Ie;e.name="Pip 3D character";const t=new Ie;e.add(t);const i=ee=>new mi({color:ee}),r={green:i(8435256),darkGreen:i(2706464),leaf:i(10082368),seam:i(3430947),shirt:i(8632381),trim:i(11786593),hat:i(14660444),weave:i(12225340),leather:i(11039543),leatherDark:i(7358501),metal:i(12898502),orange:i(15439412),cream:new Ot({color:16774620}),visor:new Ot({color:2702392}),black:new Ot({color:859160}),white:new Ot({color:16776432}),tongue:new Ot({color:15173186})},s=(ee,Me,Pe,U=[0,0,0])=>{const Z=new ce(Me,Pe);return Z.position.set(...U),Z.castShadow=!0,ee.add(Z),Z},o=(ee,Me,Pe,U)=>{const Z=s(ee,new En(1,16,12),Me,U);return Z.scale.set(...Pe),Z},a=(ee,Me,Pe,U,Z=.09,K=.018)=>{const se=new so(fy(Pe[0],Pe[1],Z),{depth:Pe[2],bevelEnabled:!0,bevelSize:K,bevelThickness:K,bevelSegments:K>.02?4:2,steps:1,curveSegments:6});return se.translate(0,0,-Pe[2]/2),s(ee,se,Me,U)},c=(ee,Me,Pe,U,Z,K)=>s(ee,new ht(Pe,U,Z,20),Me,K),l=(ee,Me,Pe,U=.01)=>s(ee,new Ha(new lu(Pe.map(Z=>new I(...Z))),8,U,5,!1),Me),u=(ee,Me,Pe=[0,0,0])=>{const U=new Ie;return U.name=Me,U.position.set(...Pe),ee.add(U),U},d=s(e,new zi(.48,24),new Ot({color:1059099,transparent:!0,opacity:.25,depthWrite:!1}),[0,.025,0]);d.rotation.x=-Math.PI/2,d.castShadow=!1;const p=o(t,r.shirt,[.38,.37,.275],[0,.86,0]),f=c(t,r.darkGreen,.32,.3,.08,[0,.59,0]);f.scale.z=.81,c(t,r.darkGreen,.145,.17,.12,[0,1.16,0]);const g=u(t,"farmer growing suit");a(g,r.green,[.49,.39,.025],[0,.86,.263]);for(const ee of[-1,1])l(g,r.darkGreen,[[ee*.26,1.11,.12],[ee*.29,1.02,.19],[ee*.29,.75,.2]],.021);const x=u(t,"Pip back suit panel");a(x,r.shirt,[.43,.36,.035],[0,.88,-.26]);for(const ee of[-1,1])l(x,r.darkGreen,[[ee*.26,1.08,-.17],[ee*.26,.84,-.215],[ee*.18,.66,-.21]],.014);const v=u(t,"Pro Pip polo collar");for(const ee of[-1,1]){const Me=a(v,r.shirt,[.15,.12,.03],[ee*.1,1.11,.21],.02);Me.rotation.z=ee*.45,l(v,r.trim,[[ee*.045,1.16,.247],[ee*.115,1.065,.25],[ee*.18,1.12,.24]],.008)}const m=u(t,"HydroPip shirt emblem");for(const ee of[-1,1]){const Me=o(m,r.darkGreen,[.038,.088,.013],[ee*.053,.91,.307]);Me.rotation.z=ee*-.58}l(m,r.darkGreen,[[0,.9,.31],[0,.78,.31]],.012),o(m,r.darkGreen,[.08,.022,.012],[0,.77,.31]);const M=u(t,"Pro HydroPip chest logo",[.16,.91,.27]),y=document.createElement("canvas");y.width=256,y.height=128;const _=y.getContext("2d");_.fillStyle="#aad94c",_.beginPath(),_.ellipse(107,35,24,12,.7,0,Math.PI*2),_.ellipse(148,35,24,12,-.7,0,Math.PI*2),_.fill(),_.fillRect(124,35,7,33),_.fillStyle="#fff7df",_.font="bold 34px sans-serif",_.textAlign="center",_.fillText("HYDROPIP",128,108);const P=new su(y);P.colorSpace=en,s(M,new Un(.29,.145),new Ot({map:P,transparent:!0,depthWrite:!1}));const C=u(t,"Pip head",[0,1.51,0]);C.rotation.x=-.1,a(C,r.darkGreen,[.93,.75,.34],[0,0,-.025],.23,.065),a(C,r.green,[.9,.72,.34],[0,.005,0],.22,.065);const L=a(C,r.cream,[.87,.71,.035],[0,-.015,.275],.23),D=a(C,r.black,[.76,.52,.02],[0,.047,.315],.17);a(C,r.visor,[.71,.475,.016],[0,.05,.345],.155);const w=[];for(const ee of[-1,1]){const Me=u(C,`${ee<0?"left":"right"} expressive eye`,[ee*.17,.054,.379]);o(Me,r.white,[.083,.112,.012],[0,0,0]),o(Me,r.black,[.062,.09,.012],[.004,-.004,.015]),o(Me,r.white,[.025,.032,.008],[.027,.046,.029]),w.push(Me)}const b=new Ar;b.moveTo(-.115,.036),b.quadraticCurveTo(0,.005,.115,.036),b.bezierCurveTo(.135,-.045,.065,-.116,0,-.115),b.bezierCurveTo(-.065,-.116,-.135,-.045,-.115,.036);const A=u(C,"Pip open smile",[0,-.178,.387]);s(A,new za(b,12),r.black),o(A,r.tongue,[.055,.025,.004],[0,-.077,.005]);const O=[];for(const ee of[-1,1]){const Me=u(C,"green ear piece",[ee*.51,-.012,-.005]);Me.rotation.z=Math.PI/2,c(Me,r.darkGreen,.174,.174,.09,[0,0,0]),c(Me,r.leaf,.145,.145,.115,[0,-ee*.025,0]),c(Me,r.green,.11,.11,.13,[0,-ee*.035,0]),O.push(Me)}const B=u(t,"Pip brimmed hat",[0,1.93,-.005]),E=c(B,r.hat,.63,.61,.06,[0,0,0]);E.scale.z=.83,c(B,r.hat,.32,.405,.26,[0,.145,-.025]),c(B,r.darkGreen,.39,.408,.059,[0,.06,-.025]);const F=u(B,"straw hat weave");for(const ee of[.44,.51,.58]){const Me=s(F,new Sn(ee,.006,4,32),r.weave,[0,.034,0]);Me.rotation.x=Math.PI/2,Me.scale.y=.83}for(const ee of[.12,.18,.24]){const Me=s(F,new Sn(.405-(ee-.015)*.327,.005,4,32),r.weave,[0,ee,-.025]);Me.rotation.x=Math.PI/2}const k=[],H=new Ar;H.moveTo(0,0),H.bezierCurveTo(.04,.23,.29,.34,.52,.26),H.bezierCurveTo(.45,.025,.18,-.1,0,0);for(const ee of[-1,1]){const Me=u(t,"veined leaf ear",[ee*.31,2.08,-.055]);Me.scale.x=ee,s(Me,new so(H,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:6}),r.leaf),l(Me,r.darkGreen,[[.015,.008,.05],[.21,.105,.05],[.46,.245,.05]],.012);for(const[Pe,U]of[[.13,.066],[.26,.136]])l(Me,r.green,[[Pe,U,.05],[Pe+.012,U+.085,.05]],.006),l(Me,r.green,[[Pe,U,.05],[Pe+.105,U-.018,.05]],.006);k.push(Me)}const N=[],$=[],Q=[],ae=[],ie=[],Ne=[],Ke=[];for(const ee of[-1,1]){const Me=u(t,"Pip shoulder",[ee*.38,1.045,0]);Me.rotation.z=ee*.08,o(Me,r.darkGreen,[.132,.13,.13],[0,-.065,0]);const Pe=s(Me,new ts(.117,.1,4,12),r.shirt,[0,-.105,0]);c(Me,r.trim,.119,.119,.03,[0,-.18,0]);const U=u(Me,"Pip elbow",[0,-.24,0]);o(U,r.darkGreen,[.085,.08,.085],[0,.005,0]),s(U,new ts(.089,.1,4,10),r.green,[0,-.105,0]),c(U,r.darkGreen,.088,.088,.035,[0,-.18,0]);const Z=u(U,"Pip rounded glove",[0,-.235,.025]);o(Z,r.green,[.104,.111,.094],[0,0,0]),o(Z,r.leaf,[.041,.063,.047],[-ee*.078,.012,.06]);const K=u(t,"Pip hip",[ee*.17,.52,0]);s(K,new ts(.115,.1,4,10),r.green,[0,-.095,0]);const se=u(K,"Pip knee",[0,-.22,0]);o(se,r.darkGreen,[.108,.075,.1],[0,0,0]),s(se,new ts(.1,.085,4,10),r.green,[0,-.072,0]);const te=u(se,"Pip work boot",[0,-.19,0]);o(te,r.darkGreen,[.15,.055,.207],[0,-.021,.061]),o(te,r.green,[.139,.1,.189],[0,.025,.059]),o(te,r.leaf,[.1,.038,.089],[0,.092,.104]),N.push(Me),Q.push(U),ie.push(Z),Ke.push(Pe),$.push(K),ae.push(se),Ne.push(te)}const X=u(t,"Pro Pip tool belt"),xe=c(X,r.leatherDark,.357,.35,.1,[0,.62,0]);xe.scale.z=.83,a(X,r.metal,[.115,.105,.025],[0,.62,.31],.025),a(X,r.leather,[.074,.067,.028],[0,.62,.33],.01);for(const ee of[-1,1])a(X,r.leatherDark,[.19,.23,.105],[ee*.255,.52,.245],.025),a(X,r.leather,[.16,.17,.035],[ee*.255,.49,.307],.025),o(X,r.metal,[.016,.016,.012],[ee*.255,.55,.33]);a(X,r.metal,[.038,.24,.025],[.28,.73,.255],.01);const fe=s(X,new Sn(.058,.018,6,16,Math.PI*1.55),r.metal,[.28,.855,.255]);fe.rotation.z=Math.PI*.73,a(X,r.orange,[.043,.14,.035],[-.27,.76,.24],.018),a(X,r.metal,[.018,.085,.018],[-.27,.66,.24],.007),C.updateMatrixWorld(!0);const He=C.matrixWorld.clone().invert(),Ue=[];C.traverse(ee=>{ee.isMesh&&Ue.push(ee)});for(const ee of Ue){const Me=He.clone().multiply(ee.matrixWorld);C.add(ee),Me.decompose(ee.position,ee.quaternion,ee.scale)}return t.traverse(ee=>{if(!ee.geometry?.index)return;const Me=ee.geometry;ee.geometry=Me.toNonIndexed(),Me.dispose()}),Mt(t),e.userData.parts={body:t,torso:p,head:C,faceShell:L,visor:D,arms:N,legs:$,elbows:Q,knees:ae,hands:ie,boots:Ne,eyes:w,mouth:A,leafEars:k,headsetCups:O,belt:X,hat:B,farmerSuit:g,proCollar:v,proLogo:M,emblem:m,backPanel:x,strawWeave:F,materials:r,sleeves:Ke,waistBand:f,shadow:d},e.userData.actionId="pip",e.scale.setScalar(1.04),py(e,n),e}function py(n,e){const t=n.userData.parts;t.materials.shirt.color.setHex(e?2503212:8632381),t.materials.hat.color.setHex(e?2503212:14660444),t.farmerSuit.visible=!e,t.emblem.visible=!e,t.strawWeave.visible=!e,t.proCollar.visible=e,t.proLogo.visible=e,t.belt.visible=e,n.userData.pro=e}const Jd=["post","produce","tractor","pond-birds","duck-crossing","cyclist","orchard","kite-walk","pond-splash","carrot-surprise","duck-driver","dance-break"];function my(n=Math.random){let e=null,t=0,i=8+n()*8,r=null;const s={post:26,produce:19,tractor:27,"pond-birds":22,"duck-crossing":30,cyclist:28,orchard:30,"kite-walk":32,"pond-splash":12,"carrot-surprise":26,"duck-driver":28,"dance-break":22};let o=[];const a=()=>({active:e,elapsed:t,wait:i,duration:s[e]||0});function c(l){return Jd.includes(l)?(e=l,r=l,t=0,!0):!1}return{snapshot:a,start:c,update(l,{marketBuilt:u=!1,reducedMotion:d=!1}={}){if(d)return a();const p=Math.max(0,Math.min(.1,l));if(e)t+=p,t>=s[e]&&(e=null,t=0,i=14+n()*22);else if(i-=p,i<=0){o=o.filter(x=>x!=="produce"||u),o.length||(o=Jd.filter(x=>x!=="produce"||u));const f=o.filter(x=>x!==r);if(!f.length)return o=[],a();const g=f[Math.min(f.length-1,Math.floor(n()*f.length))];o=o.filter(x=>x!==g),c(g)}return a()}}}function gy(n,e,t,i){const r={};for(const[O,B,E]of[["cyclist","#eebc57","cap"],["orchard","#6fa5b0","sunhat"],["kite-walk","#d68192","bun"]]){const F=new Ie;F.name=`neighbor ${O}`,F.visible=!1,n.add(F);const k=Wa({skin:"#dca87d",hair:"#493e38",color:B,accessory:E});k.name=`neighbor ${O} person`,F.add(k),r[O]={group:F,person:k,rig:k.userData.rig}}const s=r.cyclist;s.person.position.y=.22;const o=[];for(const O of[-.7,.7]){const B=new ce(new Sn(.43,.055,6,18),e.dark);B.rotation.y=Math.PI/2,B.position.set(0,.45,O),s.group.add(B);for(let E=0;E<3;E++){const F=t(B,e.cream,[.025,.8,.025],[0,0,0]);F.rotation.z=E*Math.PI/3}o.push(B)}function a(O,B,E,F,k=.04){const H=new I(...B),N=new I(...E),$=N.clone().sub(H),Q=new ce(new ht(k,k,$.length(),6),F);return Q.position.copy(H.add(N).multiplyScalar(.5)),Q.quaternion.setFromUnitVectors(new I(0,1,0),$.normalize()),O.add(Q),Q}const c=new Ie;s.group.add(c);for(const[O,B]of[[[0,.45,-.7],[0,.9,-.2]],[[0,.9,-.2],[0,.45,0]],[[0,.45,0],[0,.45,-.7]],[[0,.45,0],[0,1,.62]],[[0,1,.62],[0,.9,-.2]],[[0,1,.62],[0,.45,.7]],[[0,1,.62],[0,1.3,.62]]])a(c,O,B,e.red);t(c,e.dark,[.42,.08,.3],[0,1,-.2]),t(c,e.dark,[.7,.05,.06],[0,1.3,.62]),t(c,e.wood,[.5,.3,.4],[0,1.12,.89]);for(const O of[-.12,.12])i(c,e.leaf,[.16,.17,.17],[O,1.3,.9]);Mt(c);const l=r.orchard,u=i(l.group,e.red,[.15,.16,.15],[0,2.7,.4]),d=new Ie;l.group.add(d),t(d,e.wood,[.5,.28,.4],[.55,.32,.1]);for(let O=0;O<3;O++)i(d,e.red,[.11,.11,.11],[.42+O*.12,.49,.1]);Mt(d);const p=new Ie;p.name="surprise giant carrot",l.group.add(p);const f=new mi({color:15237173}),g=new ce(new _i(.31,1.7,12),f);g.rotation.z=Math.PI,g.position.y=-.85,p.add(g);for(let O=0;O<5;O++){const B=i(p,e.leaf,[.1,.42,.1],[Math.sin(O*2)*.17,.25,Math.cos(O*2)*.17]);B.rotation.z=Math.sin(O*2)*.55}for(let O=0;O<3;O++)t(p,e.cream,[.18-O*.04,.025,.02],[0,-.35-O*.35,.26-O*.06]);Mt(p);const x=r["kite-walk"],v=new Ie;v.name="neighbor dance radio",x.group.add(v),t(v,e.red,[.75,.42,.24],[0,.21,0]),t(v,e.dark,[.44,.05,.06],[0,.49,0]);for(const O of[-.22,.22])i(v,e.dark,[.15,.15,.025],[O,.22,.13]),i(v,e.cream,[.055,.055,.028],[O,.22,.15]);t(v,e.gold,[.12,.055,.03],[0,.33,.14]),Mt(v);const m=new Ie;m.name="neighbor kite",x.group.add(m);const M=new Ar;M.moveTo(0,.85),M.lineTo(.6,0),M.lineTo(0,-.95),M.lineTo(-.6,0),M.closePath();const y=new ce(new za(M),new mi({color:15710278,side:cn}));m.add(y),a(m,[0,.85,.015],[0,-.95,.015],e.cream,.018),a(m,[-.6,0,.015],[.6,0,.015],e.cream,.018);for(let O=0;O<4;O++){const B=t(m,e.red,[.28,.1,.03],[Math.sin(O)*.12,-1.12-O*.27,0]);B.rotation.z=O%2?.3:-.3}Mt(m);const _=new Xt().setFromPoints([new I,new I]),P=new $m(_,new Lh({color:16116169}));P.frustumCulled=!1,x.group.add(P);const C=new Ie;C.visible=!1,C.position.set(-20,.03,4.8),n.add(C);const L=new Ie;C.add(L),i(L,e.gold,[.3,.12,.13],[0,0,0]);const D=t(L,e.red,[.13,.2,.03],[-.32,0,0]);D.rotation.z=.7;for(const O of[-.11,.11])i(L,e.dark,[.025,.025,.025],[.17,.045,O]);Mt(L);const w=[];for(let O=0;O<3;O++){const B=new ce(new _o(.94,1,32),new Ot({color:12970463,transparent:!0,opacity:.5,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=.015+O*.001,C.add(B),w.push(B)}const b=It.lerp,A=It.clamp;return function(B,E,F){for(const N of Object.values(r))N.group.visible=!1,N.group.rotation.set(0,0,0),N.person.position.set(0,N===s?.22:0,0),N.person.rotation.set(0,0,0),N.rig.body.position.y=0,N.rig.body.rotation.set(0,0,0),N.rig.head.rotation.set(0,0,0),N.rig.arms.forEach(($,Q)=>$.rotation.set(0,0,Q?.06:-.06)),N.rig.legs.forEach($=>$.rotation.set(0,0,0));if(p.visible=!1,v.visible=!1,d.visible=!0,u.visible=!1,m.visible=B==="kite-walk",P.visible=m.visible,C.visible=!1,B==="pond-splash"){C.visible=!0;const N=A((E-3)/1.4,0,1);L.visible=E>=3&&E<4.4,L.position.set(b(-.7,.7,N),Math.sin(N*Math.PI)*1.2,.1),L.rotation.z=(.5-N)*1.5,w.forEach(($,Q)=>{const ae=A((E-4-Q*.45)/4,0,1);$.visible=ae>0&&ae<1,$.scale.setScalar(.15+ae*1.8),$.material.opacity=(1-ae)*.6});return}const k=r[B==="carrot-surprise"?"orchard":B==="dance-break"?"kite-walk":B];if(!k)return;if(k.group.visible=!0,B==="carrot-surprise"){d.visible=!1,p.visible=!0;const N=A(E/6,0,1),$=A((E-10)/1.2,0,1),Q=A((E-14)/2,0,1);k.group.position.set(16.7,.03,E<6?b(7,-2.7,N):E<19?-2.7:b(-2.7,7,(E-19)/7)),k.group.rotation.y=E<6?Math.PI:E<19?Math.PI/4:0;const ae=E>=6&&E<10,ie=E>=10&&E<16;k.rig.arms.forEach(Ne=>{Ne.rotation.x=E<6?Math.sin(E*4)*.2:-1.45}),k.rig.body.rotation.x=ae?.25+Math.sin(E*9)*.05:0,k.person.rotation.x=ie?-.45*Math.sin($*Math.PI/2)*(1-Q):0,k.person.position.z=ie?-.45*$*(1-Q):0,k.rig.head.rotation.z=E>=16&&E<19?Math.sin(E*5)*.13:0,k.rig.legs.forEach((Ne,Ke)=>{Ne.rotation.x=E<6||E>=19?Math.sin(E*4+Ke*Math.PI)*.3:ie?(Ke?-.45:.4)*(1-Q):0}),p.position.set(0,E<10?.12:b(.12,1.85,$),.65),p.rotation.set(E>=19?-.45:0,0,ie?Math.sin($*Math.PI)*.2:0),p.visible=E>=6;return}if(B==="dance-break"){const N=E>=6&&E<16,$=Math.sin((E-6)*7);if(k.group.position.set(-16.4,.03,E<6?b(-8,2.8,E/6):E<16?2.8:b(2.8,9,(E-16)/6)),k.group.rotation.y=N?Math.PI/2:0,v.visible=!0,v.position.set(N?.8:.48,N?.02:.65,.25),N){const Q=A((E-10)/1.6,0,1);k.person.rotation.y=Q*Math.PI*2,k.person.position.x=Math.sin((E-6)*3.5)*.22,k.rig.body.position.y=-.08+Math.abs($)*.12,k.rig.arms.forEach((ae,ie)=>{ae.rotation.z=(ie?1:-1)*(1.05+$*.35),ae.rotation.x=Math.sin(E*3+ie)*.35}),k.rig.legs.forEach((ae,ie)=>{ae.rotation.x=Math.sin(E*7+ie*Math.PI)*.35,ae.rotation.z=(ie?1:-1)*.14}),k.rig.head.rotation.z=$*.14}else k.rig.legs.forEach((Q,ae)=>{Q.rotation.x=Math.sin(E*4+ae*Math.PI)*.3}),k.rig.arms[1].rotation.x=-.35;return}const H=B!=="orchard"||E<8||E>20;if(k.rig.legs.forEach((N,$)=>{N.rotation.x=Math.sin(E*(B==="cyclist"?7:4)+$*Math.PI)*(B==="cyclist"?.38:H?.3:0)}),k.rig.arms.forEach((N,$)=>{N.rotation.x=B==="cyclist"?-1.05:Math.sin(E*4+$*Math.PI)*(H?.22:0)}),k.rig.head.rotation.z=0,k.rig.body.position.y=H&&B!=="cyclist"?Math.abs(Math.sin(E*4))*.035:0,B==="cyclist")k.group.position.set(b(-34,34,E/F),.03,-10.1),k.group.rotation.y=Math.PI/2,o.forEach(N=>{N.rotation.z=-E*5}),E>12&&E<15?k.rig.arms[0].rotation.z=-1.8+Math.sin(E*7)*.12:k.rig.arms[0].rotation.z=-.06;else if(B==="orchard"){const N=E<8?b(8,-2.7,E/8):E<=20?-2.7:b(-2.7,8,(E-20)/10);k.group.position.set(19,.03,N),k.group.rotation.y=E<20?Math.PI:0,E>=8&&E<=20&&(k.rig.arms[0].rotation.x=-2.1,k.rig.head.rotation.z=E>13&&E<16?Math.sin(E*8)*.12:0),u.visible=E>11&&E<17;const $=A((E-12)/1.4,0,1);u.position.set(.2,b(2.7,.48,$)+Math.abs(Math.sin($*Math.PI*2))*.22,.4)}else{k.group.position.set(b(-12,7,E/F),.03,12.8),k.group.rotation.y=Math.PI/2,k.rig.arms[1].rotation.x=-1.3;const N=E>22&&E<26?Math.sin((E-22)/4*Math.PI):0;k.person.position.y=N*.55,k.person.rotation.x=-N*.25,N>0&&(k.rig.arms[0].rotation.z=-1.5*N,k.rig.legs.forEach((Q,ae)=>{Q.rotation.x=N*(ae?.65:-.65)})),m.position.set(1.1+Math.sin(E*.8)*.28,3.5+Math.sin(E)*.22+N*.8,1.4+N*.5),m.rotation.z=Math.sin(E*.8)*.18+N*.35;const $=_.attributes.position;$.setXYZ(0,.37,1.1+k.person.position.y,.5),$.setXYZ(1,m.position.x,m.position.y,m.position.z),$.needsUpdate=!0}}}function vy(n,e,t,i,r){const s=(o,a)=>{for(let c=1;c<o.length;c++){const[l,u]=o[c-1],[d,p]=o[c],f=Math.hypot(d-l,p-u),g=t(n,e.cream,[a,.025,f+.1],[(l+d)/2,-.07,(u+p)/2]);g.rotation.y=Math.atan2(d-l,p-u)}};s([[-17,-9],[-16.6,-3],[-16.7,7.6],[-14,11.5],[-5,12.8],[7,12.8]],1.05),s([[16.6,-9],[17.3,-5],[17.7,1],[19,7]],.85);for(let o=0;o<28;o++){const a=o*Math.PI*2/28,c=1+Math.sin(o*2.7)*.035;i(n,o%3?e.stone:e.cream,[.28+o%3*.09,.12,.23],[-20+Math.cos(a)*3.4*c,.015,4.8+Math.sin(a)*2.55*c])}r([2.55,1.65,1],[-20.3,.014,4.55],e.blue);for(let o=0;o<4;o++){const a=-21.2+o*.66,c=5.2+Math.sin(o*2)*.6;r([.3,.24,1],[a,.034,c],e.leaf);for(let l=0;l<4;l++)i(n,e.white,[.09,.035,.05],[a+Math.cos(l*Math.PI/2)*.07,.08,c+Math.sin(l*Math.PI/2)*.07]);i(n,e.gold,[.035,.045,.035],[a,.09,c])}for(let o=0;o<8;o++)t(n,e.wood,[1.2,.12,.23],[-17.9,.16,4.1+o*.25]);for(const o of[4.05,5.9])for(const a of[-18.4,-17.4])t(n,e.dark,[.1,.65,.1],[a,.14,o]);for(let o=0;o<8;o++){const a=-12+o*3.5;if(t(n,e.wood,[.09,.8,.09],[a,.25,14.9]),o<7)for(const c of[.25,.55])t(n,e.cream,[3.5,.07,.07],[a+1.75,c,14.9]);for(let c=0;c<5;c++){const l=a+c*.32,u=14+Math.sin(c+o)*.22;i(n,e.grass,[.2,.14,.24],[l,.05,u]),i(n,o%2?e.white:e.red,[.1,.09,.1],[l,.22,u])}}for(const[o,a,c]of[[-9,-19,e.blue],[5,-20,e.red],[18,-19,e.gold]]){const l=new Ie;l.position.set(o,0,a),n.add(l),t(l,e.stone,[3.9,.25,3.1],[0,.02,0]),t(l,e.cream,[3.5,2.35,2.8],[0,1.25,0]);for(const u of[-1,1]){const d=t(l,c,[2.2,.16,3.25],[u*.87,2.8,0]);d.rotation.z=-u*.48;for(let p=0;p<7;p++){const f=t(l,e.dark,[2.2,.025,.025],[u*.87,2.9,-1.5+p*.5]);f.rotation.z=-u*.48}t(l,e.wood,[.11,2.35,.11],[u*1.65,1.24,1.42]),t(l,e.wood,[.95,.9,.09],[u*.95,1.4,1.45]),t(l,e.blue,[.72,.69,.1],[u*.95,1.4,1.5]),t(l,e.white,[.05,.72,.12],[u*.95,1.4,1.52]),t(l,e.white,[.74,.045,.12],[u*.95,1.4,1.52]);for(const p of[-1,1])t(l,c,[.22,.91,.1],[u*.95+p*.59,1.4,1.46]);t(l,e.wood,[1,.21,.32],[u*.95,.91,1.57]);for(let p=0;p<4;p++)i(l,e.leaf,[.16,.16,.14],[u*.95-.32+p*.21,1.09,1.59]),i(l,e.gold,[.07,.065,.07],[u*.95-.32+p*.21,1.21,1.61])}t(l,e.dark,[.62,1.5,.08],[0,.9,1.44]),t(l,c,[.48,1.36,.1],[0,.88,1.49]),i(l,e.gold,[.035,.035,.035],[.17,.82,1.56]),t(l,e.stone,[1.05,.13,.6],[0,.1,1.7]),t(l,e.stone,[.42,1,.45],[1.05,3.02,-.65]),t(l,e.dark,[.53,.12,.56],[1.05,3.55,-.65]),s([[o,a+1.8],[o,-14.4]],.9)}}function xy(){const n=new Ie;n.name="living neighborhood";const e=new Ie,t=new Ie;n.add(e,t);const r=Object.fromEntries(Object.entries({wood:8808268,dark:3427653,stone:10070429,grass:7443032,leaf:4489565,cream:15919049,white:15463391,water:6469573,red:13921888,gold:15713102,blue:6530482}).map(([E,F])=>[E,new mi({color:F})])),s=(E,F,k,H)=>{const N=new ce(new Gt(...k),F);return N.position.set(...H),E.add(N),N},o=(E,F,k,H)=>{const N=new ce(new xo(1,1),F);return N.scale.set(...k),N.position.set(...H),E.add(N),N},a=(E,F,k)=>{const H=new ce(new zi(1,40),k);return H.rotation.x=-Math.PI/2,H.scale.set(...E),H.position.set(...F),e.add(H),H};a([3.5,2.6,1],[-20,-.02,4.8],r.stone),a([3.15,2.24,1],[-20,.01,4.8],r.water);for(let E=0;E<8;E++){const F=E*2.4,k=-20+Math.cos(F)*2.8,H=4.8+Math.sin(F)*2;E<4&&(a([.26,.21,1],[k,.025,H],r.leaf),o(e,r.cream,[.08,.04,.08],[k,.05,H]));for(let N=0;N<3;N++)s(e,r.grass,[.035,.5+N*.12,.035],[k+N*.12,.25+N*.06,H]),o(e,r.wood,[.065,.13,.065],[k+N*.12,.56+N*.12,H])}for(let E=0;E<5;E++){const F=19+E%2*3,k=-4+Math.floor(E/2)*4;s(e,r.wood,[.19,1.65,.19],[F,.65,k]),o(e,r.leaf,[1.2,1.05,1.15],[F,1.85,k]);for(let H=0;H<5;H++)o(e,r.red,[.14,.14,.14],[F+Math.sin(H*2)*.91,1.9+Math.cos(H)*.42,k+Math.cos(H*2)*.91]);s(e,r.wood,[.7,.3,.55],[F+.75,.15,k+.8])}const c=E=>{const F=Math.sin(E*127.1+48.7)*43758.5453;return F-Math.floor(F)};for(let E=0;E<110;E++){const F=E%3,k=F===0?-25+c(E)*7:F===1?17+c(E)*8:-15+c(E)*22,H=F===2?11+c(E+8)*4:-7+c(E+8)*17;if(((k+20)/3.8)**2+((H-4.8)/3)**2<1)continue;const N=.12+c(E+4)*.2;if(o(e,E%5?r.grass:r.stone,[.22,N,.26],[k,N/2,H]),E%3)for(let $=0;$<3;$++)o(e,E%2?r.gold:r.white,[.055,.05,.055],[k+($-1)*.13,N+.08,H+Math.sin($)*.1])}for(let E=0;E<14;E++){const F=-25+E*3.8;o(e,r.leaf,[.9,.45,.55],[F,.22,-15.6]),E%3===0&&s(e,r.wood,[.11,.8,.11],[F,.3,-14.4])}s(e,r.stone,[1.1,.04,3],[-19,-.08,-15]),s(e,r.wood,[.14,1.25,.14],[8,.58,-10.1]),s(e,r.blue,[.65,.43,.43],[8,1.2,-10.1]),s(e,r.cream,[.04,.25,.29],[8.34,1.18,-10.1]);const l=new Ie;l.position.set(8,1.2,-9.85),n.add(l),s(l,r.red,[.08,.38,.035],[0,.16,0]),s(l,r.red,[.22,.14,.035],[.07,.32,0]),s(e,r.wood,[1.5,.12,.5],[-17.2,.42,8.2]);for(const E of[-17.7,-16.7])s(e,r.dark,[.12,.42,.4],[E,.17,8.2]);s(e,r.wood,[1.5,.32,.08],[-17.2,.72,8.4]),vy(e,r,s,o,a),e.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),Mt(e),Mt(l);function u(E,F=!1){const k=new Ie;t.add(k),s(k,r[E],[F?1.5:2.6,.6,1.1],[0,.61,0]),s(k,r[E],[1.1,.55,1],[-.2,1.13,0]),s(k,r.blue,[.8,.32,1.03],[-.2,1.16,0]),s(k,r.dark,[.025,.37,1.04],[-.19,1.16,0]),s(k,r.cream,[.1,.16,.85],[F?.78:1.33,.62,0]);const H=[];for(const $ of[-.85,.85])for(const Q of[-.58,.58]){const ae=F&&$<0?.45:.3,ie=new ce(new ht(ae,ae,.19,12),r.dark);ie.rotation.x=Math.PI/2,ie.position.set($,ae-.1,Q),k.add(ie);const Ne=new ce(new ht(ae*.48,ae*.48,.2,8),r.cream);ie.add(Ne),H.push(ie)}const N=new Ie;return k.children.filter($=>!H.includes($)).forEach($=>N.add($)),k.add(N),Mt(N),k.visible=!1,{group:k,wheels:H}}const d=u("blue"),p=u("red"),f=u("gold"),g=u("leaf",!0);s(d.group,r.cream,[.75,.32,.03],[-.76,.7,.565]);const x=new Ie;g.group.add(x),s(x,r.wood,[1.65,.2,1.15],[-2.5,.37,0]),s(x,r.dark,[1.3,.1,.1],[-1.5,.32,0]);for(const E of[-.55,.55])o(x,r.dark,[.3,.3,.15],[-2.55,.2,E]);const v=new Ie;g.group.add(v);for(let E=0;E<3;E++)s(v,r.gold,[.7,.45,.83],[-2.9+E%2*.75,.7+(E===2?.46:0),0]),s(v,r.wood,[.07,.46,.85],[-2.9+E%2*.75,.7+(E===2?.46:0),0]);Mt(x),Mt(v);const m=new Ie;p.group.add(m),s(m,r.wood,[.8,.35,.9],[-.9,.95,0]);for(let E=0;E<5;E++)o(m,r.leaf,[.16,.18,.16],[-1.1+E%2*.3,1.17,-.3+Math.floor(E/2)*.28]);Mt(m);function M(E=!1){const F=new Ie;t.add(F),o(F,E?r.cream:r.blue,[.21,.18,.32],[0,.25,0]),o(F,E?r.leaf:r.dark,[.13,.14,.14],[0,.43,.21]),s(F,r.gold,[.12,.045,.18],[0,.4,.36]);for(const H of[-1,1])o(F,r.dark,[.019,.025,.024],[H*.11,.47,.28]),s(F,r.gold,[.08,.04,.17],[H*.1,.04,.02]);Mt(F);const k=[];for(const H of[-1,1]){const N=new Ie;N.position.set(H*.15,.3,0),F.add(N),o(N,E?r.cream:r.blue,[.28,.035,.13],[H*.2,0,0]),k.push(N)}return F.visible=!1,{group:F,wings:k}}const y=Array.from({length:3},()=>M()),_=Array.from({length:4},(E,F)=>{const k=M(!0);return k.group.scale.setScalar(F?.58:1),k}),P=new Ie;_[0].group.add(P),s(P,r.blue,[.29,.09,.25],[0,.61,.22]),s(P,r.dark,[.3,.03,.32],[0,.57,.26]),s(P,r.gold,[.08,.04,.025],[0,.62,.355]),Mt(P);const C=gy(t,r,s,o);t.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)});const L=my(),D={post:d,produce:p,tractor:g,"duck-crossing":f,"duck-driver":f},w=It.lerp,b=It.clamp;let A=L.snapshot(),O=!1;function B(){for(const H of Object.values(D))H.group.visible=!1;if([...y,..._].forEach(H=>{H.group.visible=!1}),_.forEach((H,N)=>{H.group.scale.setScalar(N?.58:1),H.group.rotation.set(0,0,0)}),P.visible=A.active==="duck-driver"&&!O,l.rotation.z=-.9,C(O?null:A.active,A.elapsed,A.duration),O||!A.active)return;const E=A.elapsed,F=A.active,k=D[F];if(k){k.group.visible=!0,k.group.rotation.y=F==="produce"?Math.PI:0;let H;F==="post"?H=E<11?w(-38,8,E/11):E<15?8:w(8,38,(E-15)/11):F==="duck-crossing"?H=E<6?w(-38,-20.5,E/6):E<17?-20.5:w(-20.5,38,(E-17)/13):H=w(F==="produce"?38:-38,F==="produce"?-38:38,E/A.duration),k.group.position.set(H,.08,-12.2);const N=F==="post"&&E>=11&&E<15||F==="duck-crossing"&&E>=6&&E<17;k.wheels.forEach($=>{$.rotation.y=N?0:-H*3}),F==="post"&&E>12&&E<16&&(l.rotation.z=0),v.rotation.x=F==="tractor"?Math.sin(E*2.6)*.04:0}F==="pond-birds"&&y.forEach((H,N)=>{H.group.visible=!0;const $=b((E-N*.4)/5,0,1),Q=b((E-15-N*.4)/5,0,1);H.group.position.set(w(-29,-20+N*.65,$)+Q*-10,w(4.5,.13,$)+Q*5,w(-5,3.2,$)+Q*4),H.group.rotation.set($===1&&Q===0?Math.max(0,Math.sin(E*2+N))*.38:0,Q?-1.5:.7,0),H.wings.forEach((ae,ie)=>{ae.rotation.z=(ie?1:-1)*($<1||Q>0?Math.sin(E*13+N)*.7:1.1)})}),F==="duck-crossing"&&_.forEach((H,N)=>{const $=b((E-4-N*(N===3?1.5:.6))/(N===3?6.5:9),0,1);H.group.visible=E>4+N*(N===3?1.5:.6)&&$<1,H.group.position.set(-17.8+Math.sin($*Math.PI)*.2,.07+Math.abs(Math.sin(E*(N===3?15:9)))*.035,w(-15.5,-8.4,$)),H.wings.forEach((Q,ae)=>{Q.rotation.z=ae?1.2:-1.2})}),F==="duck-driver"&&_.forEach((H,N)=>{H.group.visible=!0;const $=f.group.position.x;H.group.position.set(N?$-2.2-N*.65:$-.2,N?.07+Math.abs(Math.sin(E*10+N))*.035:1.45,-12.2+(N?Math.sin(E*2+N)*.13:0)),H.group.rotation.y=Math.PI/2,N||H.group.scale.setScalar(1.35),H.wings.forEach((Q,ae)=>{Q.rotation.z=(ae?1:-1)*(N?1.2:.45+Math.sin(E*6)*.35)})})}return{root:n,update(E,F){O=F.reducedMotion,A=L.update(E,F),B()},snapshot(){return{...A,sceneryMeshes:e.children.length,visibleActors:t.children.filter(E=>E.visible).map(E=>E.position.toArray()),totalActors:t.children.length,reducedMotion:O}},start(E){const F=L.start(E);return A=L.snapshot(),B(),F}}}const Zh=[{label:"Produce table",cost:40,towers:1,detail:"A small roadside table for your first garden harvests."},{label:"Shade canopy",cost:30,towers:2,detail:"Add shade and a second produce crate."},{label:"Neighborhood stand",cost:45,towers:3,detail:"Build a wider counter, shelves, and space for two visitors."},{label:"Farm market",cost:65,towers:4,detail:"Finish the striped awning and family-basket display. Up to three visitors."}],$a=n=>n.towers.filter(e=>e.built&&e.repaired).length;function Ms(n){return n.market.built?n.market.level>=2?4:Math.max(1,Math.min(4,n.market.stage||3)):0}function Wi(n){const e=Ms(n),t=Zh[e];if(!t)return null;const i=!e&&n.taskIndex<3?"Finish the first garden harvests":$a(n)<t.towers?`Requires ${t.towers} working towers`:"";return{...t,stage:e+1,reason:i,available:!i&&n.coins>=t.cost}}function Qh(n){const e=Wi(n);return e?.available?(n.coins-=e.cost,n.market.built=!0,n.market.stage=e.stage,n.market.level=e.stage===4?2:1,!0):!1}function Pn(n,e,t=0){const i=e==="bed"?Math.max(2,n.beds[t].capacity):2;return $a(n)<i?`Requires ${i} working towers`:""}const kn={composter:{label:"Composter",cost:90,stages:["Open compost bin","Covered compost station","Insulated compost tumbler"],costs:[45,45,80],towers:[1,2,4],chapters:[0,0,2],detail:"Two scraps make one bag. Batches take 60 / 40 / 30 seconds as the station improves."},rainTank:{label:"Rainwater storage",cost:120,stages:["Rain barrel","Twin-barrel storage","Gutter-fed rain bank"],costs:[60,60,100],towers:[2,3,4],chapters:[1,1,2],detail:"Linked barrels reduce reservoir water use by 10% / 20% / 30%."},coop:{label:"Chicken coop",cost:180,stages:["Starter coop","Expanded chicken run","Three-hen garden coop"],costs:[90,90,140],towers:[3,4,4],chapters:[1,1,2],detail:"One stored vegetable feeds the flock. Collect 1 / 2 / 3 eggs after two minutes; sell each for 8 coins."},harvestKit:{label:"Harvest baskets",stages:["Deep harvest basket","Padded harvest panniers"],costs:[70,110],towers:[2,4],chapters:[1,2],legacyLevel:1,attachment:"rack",detail:"Carry 1 / 2 extra finished vegetables. Adds to your earned basket perks; starters still travel one at a time."},soilKit:{label:"Compost tools",stages:["Compost spreader","Precision mulch cart"],costs:[55,85],towers:[2,4],chapters:[1,2],legacyLevel:1,attachment:"bed-0",requires:"composter",detail:"One compost bag enriches 6 / 8 plantings instead of 4. Install a composter first."}};function rn(n,e){const t=kn[e];if(!t||!n?.owned?.includes(e))return 0;const i=Number(n.levels?.[e]);return Number.isFinite(i)&&i>=1?Math.min(t.stages.length,Math.floor(i)):t.legacyLevel||2}const ef=n=>[60,60,40,30][rn(n,"composter")],hu=n=>4+rn(n,"soilKit")*2;function _y(n,e){return n==="composter"?`Turn 2 scraps into 1 compost bag in ${[60,40,30][e-1]} seconds.`:n==="rainTank"?`Reduce reservoir water use by ${e*10}%. Works automatically with the shared feed.`:n==="coop"?`One stored vegetable feeds ${e} hen${e===1?"":"s"}. Collect ${e} egg${e===1?"":"s"} after two minutes; sell for ${e*8} coins.`:n==="harvestKit"?`Carry ${e} extra finished vegetable${e===1?"":"s"}, on top of earned basket perks. Tower starters still travel one at a time.`:n==="soilKit"?`One compost bag enriches ${4+e*2} plantings. Enriched plants finish 20% sooner.`:""}function fu(n,e){if(!Object.hasOwn(kn,e))return null;const t=kn[e],i=rn(n.farm,e);if(i>=t.stages.length)return null;const r=t.towers[i],s=t.chapters[i],o=n.market.built?n.chapter<s?`Requires Chapter ${s+1}`:$a(n)<r?`Requires ${r} working towers`:t.requires&&!n.farm.owned.includes(t.requires)?`Requires ${kn[t.requires].label}`:"":"Open the produce table first";return{label:t.stages[i],level:i+1,cost:t.costs[i],reason:o}}function yy(n,e){const t=fu(n,e);return!t||t.reason||n.coins<t.cost?!1:(e==="coop"&&n.farm.coopReadyAt&&!n.farm.coopBatchSize&&(n.farm.coopBatchSize=rn(n.farm,e)),n.coins-=t.cost,n.farm.levels||={},n.farm.levels[e]=t.level,n.farm.owned.includes(e)||n.farm.owned.push(e),!0)}function by(){return{owned:[],levels:{},scraps:0,compost:0,compostReadyAt:null,coopReadyAt:null,coopBatchSize:0,eggsReady:0,eggs:0,eggsSold:0}}function wy(n){const e=(t,i=999)=>Math.max(0,Math.min(i,Math.floor(Number(t)||0)));return{owned:[...new Set((Array.isArray(n?.owned)?n.owned:[]).filter(t=>Object.hasOwn(kn,t)))],levels:Object.fromEntries(Object.keys(kn).map(t=>[t,rn({owned:[t],levels:n?.levels},t)])),scraps:e(n?.scraps,24),compost:e(n?.compost,12),compostReadyAt:Number.isFinite(n?.compostReadyAt)&&n.compostReadyAt>0?n.compostReadyAt:null,coopReadyAt:Number.isFinite(n?.coopReadyAt)&&n.coopReadyAt>0?n.coopReadyAt:null,coopBatchSize:e(n?.coopBatchSize,3),eggsReady:e(n?.eggsReady,3),eggs:e(n?.eggs,12),eggsSold:e(n?.eggsSold,99999)}}function My(n,e){const t=n.farm;t.owned.includes("composter")&&t.compostReadyAt&&t.compostReadyAt<=e&&(t.compost=Math.min(12,t.compost+1),t.compostReadyAt=null),t.owned.includes("coop")&&t.coopReadyAt&&t.coopReadyAt<=e&&(t.eggsReady=t.coopBatchSize||rn(t,"coop"),t.coopReadyAt=null,t.coopBatchSize=0)}function Sy(n,e,t=1){const i=n.farm;return!i.owned.includes("composter")||i.compostReadyAt||i.scraps<2||i.compost>=12?!1:(i.scraps-=2,i.compostReadyAt=e+ef(i)*1e3*t,!0)}function Ey(n,e,t,i=1){const r=n.farm;return!r.owned.includes("coop")||r.coopReadyAt||r.eggsReady||!Object.hasOwn(n.rack,e)||!(n.rack[e]>0)?!1:(n.rack[e]-=1,n.stats.byCropFed[e]+=1,r.coopBatchSize=rn(r,"coop"),r.coopReadyAt=t+12e4*i,!0)}function Ty(n){const e=n.farm;return!e.owned.includes("coop")||!e.eggsReady||e.eggs+e.eggsReady>12?!1:(e.eggs+=e.eggsReady,e.eggsReady=0,e.scraps=Math.min(24,e.scraps+1),!0)}function Ay(n){if(!n.market.built||!n.farm.eggs)return 0;const e=n.farm.eggs;return n.farm.eggs=0,n.farm.eggsSold+=e,n.coins+=e*8,e}function Cy(n,e){const t=n.beds[e];return!t?.built||t.soilCharges||n.farm.compost<1?!1:(n.farm.compost-=1,t.soilCharges=hu(n.farm),!0)}const yo=["lettuce","basil","tomato","kale","strawberry"],tf=[6,18,40],nf=["Grower","Living Soil","Neighborhood"],je=(n,e,t,i=null)=>({kind:n,target:e,label:t,crop:i}),Qt=(n,e,t,i,r,s)=>({id:n,path:e,chapter:t,title:i,focus:r,goals:s,coins:18,xp:15}),rr=[Qt("roots",0,0,"Rooted in the garden","tower-0",[je("transplant",6,"Transplant tower starters"),je("harvest",4,"Harvest soil-finished crops")]),Qt("layer-craft",0,1,"A tower of many colors","tower-0",[je("mixed",1,"Fill one tower with four different crops"),je("variety",4,"Harvest different crop varieties")]),Qt("right-flow",0,1,"One batch, every tower","reservoir",[je("matched",8,"Plant starts after checking shared delivery"),je("harvest",6,"Harvest garden crops")]),Qt("fruit-garden",0,2,"The fruit garden","bed-0",[je("harvest",8,"Harvest tomatoes","tomato"),je("harvest",8,"Harvest strawberries","strawberry")]),Qt("succession",0,2,"Succession without a gap","tower-0",[je("transplant",18,"Start the next garden succession"),je("variety",5,"Harvest all five crops")]),Qt("grower-showcase",0,2,"The HydroPip showcase","bed-0",[je("matched",16,"Plant starts with shared delivery checked"),je("harvest",24,"Finish crops in soil"),je("variety",5,"Include every crop")]),Qt("scraps",1,0,"Nothing goes to waste","workshop",[je("compost",2,"Start compost batches"),je("enrich",1,"Enrich a garden bed")]),Qt("happy-hens",1,1,"Hens at home","workshop",[je("feed",3,"Feed the hens stored vegetables"),je("eggs",3,"Collect egg batches")]),Qt("gentle-water",1,1,"Make every drop count","reservoir",[je("saving",10,"Plant after checking the timed feed"),je("enrich",2,"Enrich garden beds")]),Qt("living-soil",1,1,"Living soil","composter",[je("compost",4,"Start compost batches"),je("enriched",12,"Transplant into enriched soil")]),Qt("closed-loop",1,2,"From harvest to compost","coop",[je("feed",5,"Feed the hens"),je("enrich",4,"Return compost to garden beds"),je("harvest",18,"Harvest fresh crops")]),Qt("soil-showcase",1,2,"Sustainable homestead","composter",[je("saving",18,"Plant starts with the timed feed checked"),je("enriched",20,"Grow in enriched soil"),je("eggs",5,"Collect egg batches")]),Qt("neighbors",2,0,"Your neighborhood regulars","market",[je("order",5,"Complete market orders"),je("variety",2,"Harvest different crops")]),Qt("salad-club",2,1,"The neighborhood salad club","market",[je("order",4,"Serve lettuce orders","lettuce"),je("order",4,"Serve basil orders","basil")]),Qt("request-route",2,1,"Pip's request route","market",[je("request",3,"Complete chosen requests"),je("order",6,"Serve market customers")]),Qt("weekend-market",2,2,"The weekend market","market",[je("order",5,"Serve tomato orders","tomato"),je("order",5,"Serve kale orders","kale"),je("egg-sale",2,"Sell packed eggs at the stand")]),Qt("community-table",2,2,"A table for everyone","market",[je("request",5,"Complete chosen requests"),je("variety",5,"Harvest every crop"),je("order",10,"Serve market orders")]),Qt("harvest-festival",2,2,"The homestead harvest festival","market",[je("order",18,"Welcome market customers"),je("request",5,"Complete community requests"),je("egg-sale",4,"Bring fresh eggs to market")])],qa=[{id:"greens",title:"Mara's fresh greens",detail:"Harvest 6 lettuce for this growing request.",focus:"bed-0",goals:[je("harvest",6,"Lettuce harvested","lettuce")],crops:["lettuce"]},{id:"herbs",title:"June's herb patch",detail:"Raise 5 basil through the towers and garden.",focus:"bed-0",goals:[je("harvest",5,"Basil harvested","basil")],crops:["basil"]},{id:"mixed",title:"Theo's mixed harvest",detail:"Harvest three different crops from the garden.",focus:"bed-0",goals:[je("variety",3,"Different crops harvested")],crops:["tomato","basil"]},{id:"flow",title:"Pip's water-wise trial",detail:"Check shared tower delivery, then plant 8 starts.",focus:"reservoir",goals:[je("saving",8,"Starts with delivery checked")],chapter:1,crops:[]},{id:"market",title:"Luis's market morning",detail:"Complete 5 customer orders at the stand.",focus:"market",goals:[je("order",5,"Market orders served")],crops:[]},{id:"soil",title:"June's soil trial",detail:"Transplant 6 tower starters into compost-enriched beds.",focus:"composter",goals:[je("enriched",6,"Enriched transplants")],equipment:"composter",crops:[]},{id:"berries",title:"Mara's berry harvest",detail:"Harvest 6 strawberries from finished garden plants.",focus:"bed-0",goals:[je("harvest",6,"Strawberries harvested","strawberry")],crops:["strawberry"]},{id:"hens",title:"Theo's happy hens",detail:"Feed and collect two batches of eggs.",focus:"coop",goals:[je("feed",2,"Hen feedings"),je("eggs",2,"Egg batches collected")],equipment:"coop",crops:[]}],fa=(n,e=99999)=>Number.isFinite(Number(n))?Math.max(0,Math.min(e,Math.floor(Number(n)))):0;function rf(){return{claimed:[],progress:{},mastery:{},request:null,requestSerial:0,requestsCompleted:0,pinned:"roots"}}const Zd=(n,e)=>e.map((t,i)=>t.kind==="variety"?[...new Set((Array.isArray(n?.[i])?n[i]:[]).filter(r=>yo.includes(r)))]:fa(n?.[i],t.target));function Ry(n){const e=rf();e.claimed=[...new Set((Array.isArray(n?.claimed)?n.claimed:[]).filter(i=>rr.some(r=>r.id===i)))];for(const i of rr)e.progress[i.id]=Zd(n?.progress?.[i.id],i.goals);for(const i of yo)e.mastery[i]=fa(n?.mastery?.[i],3);e.requestSerial=fa(n?.requestSerial,999999),e.requestsCompleted=fa(n?.requestsCompleted),e.pinned=rr.some(i=>i.id===n?.pinned)?n.pinned:"roots";const t=qa.find(i=>i.id===n?.request?.id);return t&&(e.request={id:t.id,progress:Zd(n.request.progress,t.goals)}),e}function Jn(n){return nf.map((e,t)=>rr.find(i=>i.path===t&&!n.homestead.claimed.includes(i.id))).filter(Boolean)}function pu(n,e){return n.market.built&&n.chapter>=e.chapter&&Jn(n).includes(e)}function mu(n,e=[]){return n.map((t,i)=>({...t,current:Math.min(t.target,t.kind==="variety"?(e[i]||[]).length:e[i]||0)}))}function bo(n,e){return mu(e.goals,n.homestead.progress[e.id])}function Xa(n,e){return pu(n,e)&&bo(n,e).every(t=>t.current>=t.target)}function Qd(n,e,t,i){n.forEach((r,s)=>{r.kind==="variety"&&t==="harvest"&&yo.includes(i)?e[s]=[...new Set([...e[s]||[],i])]:r.kind===t&&(!r.crop||r.crop===i)&&(e[s]=Math.min(r.target,(e[s]||0)+1))})}function ki(n,e,t=null){if(!n.market.built)return;for(const r of Jn(n))if(pu(n,r)){const s=n.homestead.progress[r.id]||=[];Qd(r.goals,s,e,t)}const i=qa.find(r=>r.id===n.homestead.request?.id);i&&Qd(i.goals,n.homestead.request.progress,e,t)}function Py(n,e){const t=rr.find(i=>i.id===e);return!t||!Xa(n,t)?!1:(n.homestead.claimed.push(e),n.coins+=t.coins,n.xp+=t.xp,n.homestead.pinned=Jn(n).find(i=>i.path===t.path)?.id||Jn(n)[0]?.id||null,!0)}function Ut(n){const e=n.homestead?.claimed.length||0;return{basket:(e>=3?7:5)+rn(n.farm,"harvestKit"),seedBatch:e>=6?6:4,water:e>=12?.9:1,festival:e>=18}}function Ya(n,e){return n.homestead?.mastery?.[e]||0}function Ly(n,e){if(!yo.includes(e)||!n.market.built)return!1;const t=Ya(n,e);return t>=3||n.stats.byCropHarvested[e]<tf[t]?!1:(n.homestead.mastery[e]=t+1,n.coins+=[8,12,20][t],n.xp+=10,n.seeds[e]=Math.min(999,n.seeds[e]+2),!0)}function sf(n){const e=qa.filter(i=>n.market.built&&n.chapter>=(i.chapter||0)&&i.crops.every(r=>n.unlockedCrops.includes(r))&&(!i.equipment||n.farm.owned.includes(i.equipment))),t=n.homestead.requestSerial%(e.length||1);return Array.from({length:Math.min(3,e.length)},(i,r)=>e[(t+r)%e.length])}function of(n){return qa.find(e=>e.id===n.homestead.request?.id)||null}function Iy(n,e){return n.homestead.request||!sf(n).some(t=>t.id===e)?!1:(n.homestead.request={id:e,progress:[]},!0)}function Dy(n){const e=of(n);return!e||!mu(e.goals,n.homestead.request.progress).every(t=>t.current>=t.target)?!1:(n.homestead.request=null,n.homestead.requestSerial++,n.homestead.requestsCompleted++,n.coins+=12,n.xp+=8,ki(n,"request"),!0)}function Uy(n){return n.homestead.request?!1:(n.homestead.requestSerial++,!0)}function Mr(n){return n.campaignComplete&&n.homestead.claimed.length===18&&yo.every(e=>Ya(n,e)===3)}const gu=n=>Math.max(1,Ms(n)-1),pa=(n,e,t)=>n+Math.floor(t()*(e-n+1));function ky(n,e=Math.random){const t=n.unlockedCrops;let i=(n.market.cropBag||[]).filter(s=>t.includes(s));if(!i.length){i=[...t];for(let s=i.length-1;s>0;s--){const o=pa(0,s,e);[i[s],i[o]]=[i[o],i[s]]}}const r=i.shift();return n.market.cropBag=i,r}function Ny(n,e,t,i=Math.random){if(!n.market.built)return!1;const r=gu(n),s=n.market;return n.orders.length>=r||n.orders.length&&!s.visitRemaining||(s.nextVisitIn=Math.max(0,(s.nextVisitIn??8)-e),s.nextVisitIn>0)?!1:(s.visitRemaining||(s.visitRemaining=pa(1,r,i)),n.orders.push(t(n.orders.length)),s.visitRemaining--,s.nextVisitIn=s.visitRemaining?pa(5,10,i):pa(12,28,i),!0)}const Oy=[{name:"Mara",color:"#df695c",skin:"#d9a47d",hair:"#453027",accessory:"sunhat",line:"Fresh greens for the block."},{name:"Theo",color:"#4398b1",skin:"#8c5d43",hair:"#242c30",accessory:"glasses",line:"A quick stop on the way home."},{name:"June",color:"#e5b84c",skin:"#e6b58b",hair:"#745239",accessory:"bun",line:"Produce for the neighborhood table."},{name:"Nia",color:"#78a967",skin:"#6f4937",hair:"#211e24",accessory:"curls",line:"The garden finish makes the difference."},{name:"Sam",color:"#ba7198",skin:"#c78968",hair:"#b9b7af",accessory:"glasses",line:"Looking for today's best crop."},{name:"Luis",color:"#6a87bf",skin:"#a46e4d",hair:"#39322a",accessory:"cap",line:"A market basket for dinner."}];function Nn(n){return n.orders.find(e=>e.id===n.selectedOrderId&&e.status==="waiting")||null}function _n(n,e,t=Date.now()){const i=n.carry?.kind==="produce"?n.carry.items:[],r=i.filter(d=>d===e.crop).length,s=n.rack[e.crop]||0,o=n.beds.flatMap(d=>d.plants).filter(d=>d.crop===e.crop),a=o.filter(d=>d.readyAt<=t).length,c=o.length-a+n.towers.flatMap(d=>d.queue).filter(d=>d.crop===e.crop).length+(n.carry?.kind==="starter"&&n.carry.crop===e.crop?1:0),l=Math.max(0,e.amount-r),u=n.carry?.kind==="starter"?0:Ut(n).basket-i.length;return{carried:r,stored:s,ready:a,growing:c,needed:l,room:u,load:Math.min(l,s,u),missing:Math.max(0,l-s-a-c)}}function Ul(n,e){const t=_n(n,e);return n.carry?.kind==="starter"?{kind:"starter",label:"Plant starter",stock:t}:t.needed?t.room?t.load?{kind:"collect",label:`Collect ${t.load}`,stock:t}:t.ready?{kind:"harvest",label:"Harvest needed",stock:t}:{kind:"grow",label:t.missing?"Grow needed":"View growing",stock:t}:{kind:"store",label:"Make room",stock:t}:{kind:"deliver",label:"Deliver",stock:t}}function jt(n,e){if(n._markup===e)return;n._markup=e;const t=document.createElement("template");t.innerHTML=e;const i=s=>s.nodeType===1&&(s.getAttribute("data-key")||s.id||s.getAttribute("data-command"))||"";function r(s,o){const a=[...s.childNodes],c=new Set;[...o.childNodes].forEach((l,u)=>{const d=i(l),p=a.find(g=>!c.has(g)&&g.nodeType===l.nodeType&&g.nodeName===l.nodeName&&(d?i(g)===d:!i(g))),f=p||l.cloneNode(!0);if(c.add(f),s.childNodes[u]!==f&&s.insertBefore(f,s.childNodes[u]||null),!!p){if(f.nodeType===3){f.nodeValue!==l.nodeValue&&(f.nodeValue=l.nodeValue);return}if(f.nodeType===1){for(const g of[...f.attributes])l.hasAttribute(g.name)||f.removeAttribute(g.name);for(const g of[...l.attributes])f.getAttribute(g.name)!==g.value&&f.setAttribute(g.name,g.value);r(f,l)}}});for(const l of a)c.has(l)||l.remove()}r(n,t.content)}function Fy(n,e,t){let i="projects";const r=o=>`<ul class="homestead-goals">${o.map(a=>`<li><span>${a.label}</span><strong>${a.current}/${a.target}</strong><progress max="${a.target}" value="${a.current}"></progress></li>`).join("")}</ul>`;function s(o){const a=o.homestead,c=Mr(o),l=a.claimed.length;let u;if(i==="projects")u=`<p class="homestead-summary">${l}/18 projects / ${Object.values(a.mastery).reduce((d,p)=>d+p,0)}/15 crop badges</p><p>${c?"Master Grower homestead complete. Community requests continue.":"A growing homestead, one useful project at a time."}</p>`,u+=Jn(o).map(d=>{const p=pu(o,d),f=Xa(o,d);return`<article class="homestead-project ${f?"is-ready":""}"><small>${nf[d.path]} / ${rr.filter(g=>g.path===d.path).indexOf(d)+1} of 6</small><h3>${d.title}</h3>${r(bo(o,d))}<p>${p?"18 coins + 15 XP":`Opens in Chapter ${d.chapter+1}${o.market.built?"":" after the market opens"}`}</p><div class="homestead-actions"><button data-home-action="project" data-value="${d.id}" ${f?"":"disabled"}>Claim reward</button><button data-home-action="pin" data-value="${d.id}" ${p?"":"disabled"}>${a.pinned===d.id?"Pinned":"Pin goal"}</button><button data-home-action="focus" data-value="${d.focus}" ${p?"":"disabled"}>Visit</button></div></article>`}).join(""),u+=`<h3>Homestead rewards</h3><ul class="homestead-perks">${[[3,"7-slot harvest basket"],[6,"6 seeds per packet at the same price"],[12,"10% less tower water use"],[18,"Harvest festival garden display"]].map(([d,p])=>`<li>${l>=d?"Earned":`${d} projects`}: ${p}</li>`).join("")}</ul><details><summary>All 18 projects</summary>${rr.map(d=>`<p>${a.claimed.includes(d.id)?"Complete: ":""}${d.title}</p>`).join("")}</details>`;else if(i==="mastery")u="<p>Garden harvests earn crop badges. Each badge makes that crop finish in soil 3% sooner. Previous harvests count.</p>",u+=Object.entries(e).map(([d,p])=>{const f=Ya(o,d),g=tf[f],x=o.stats.byCropHarvested[d];return`<article class="homestead-project"><h3><span class="crop-swatch" style="background:${p.color}">${p.code}</span> ${p.label}</h3><p>${f}/3 badges / ${f*3}% shorter garden growth</p>${f<3?`${r([{label:"Garden harvests",current:Math.min(g,x),target:g}])}<p>${[8,12,20][f]} coins + 10 XP + 2 seeds</p><button data-home-action="mastery" data-value="${d}" ${x>=g&&o.market.built?"":"disabled"}>Claim ${["Bronze","Silver","Gold"][f]} badge</button>`:"<strong>Gold mastery earned</strong>"}</article>`}).join("");else{const d=of(o);if(u=`<p>${a.requestsCompleted} requests completed. No deadlines. Requests reward your farm work; they do not take crops out of storage.</p>`,d){const p=mu(d.goals,a.request.progress),f=p.every(g=>g.current>=g.target);u+=`<article class="homestead-project ${f?"is-ready":""}"><h3>${d.title}</h3><p>${d.detail}</p>${r(p)}<p>12 coins + 8 XP</p><div class="homestead-actions"><button data-home-action="request-claim" ${f?"":"disabled"}>Claim reward</button><button data-home-action="focus" data-value="${d.focus}">Visit</button><button data-home-action="request-abandon">Abandon</button></div></article>`}else u+=sf(o).map(p=>`<article class="homestead-project"><h3>${p.title}</h3><p>${p.detail}</p><p>12 coins + 8 XP</p><button data-home-action="request-accept" data-value="${p.id}">Choose request</button></article>`).join(""),u+='<button data-home-action="request-refresh">Other requests</button>'}jt(n,`<header><div><small>HydroPip homestead</small><h2>${c?"Master Grower":"Growing Together"}</h2></div><button class="close-button" data-home-action="close" aria-label="Close homestead goals">&#215;</button></header><div class="homestead-tabs" role="tablist" aria-label="Homestead views">${[["projects","Projects"],["mastery","Crop book"],["requests","Requests"]].map(([d,p])=>`<button role="tab" aria-selected="${i===d}" data-home-tab="${d}">${p}</button>`).join("")}</div><div role="tabpanel" class="homestead-content">${u}</div>`)}return n.onclick=o=>{const a=o.target.closest("button");!a||a.disabled||(a.dataset.homeTab?(i=a.dataset.homeTab,t("render")):a.dataset.homeAction&&t(a.dataset.homeAction,a.dataset.value))},{render:s}}const By=4;function Ss(n,e=null,t=-1){const i=new Set(n.queue.map(r=>r.layer));return e?.kind==="starter"&&e.sourceTower===t&&i.add(e.sourceLayer),[0,1,2,3].filter(r=>!i.has(r))}function Vi(n,e,t=null){return n?.queue.find(i=>i.readyAt!==null&&i.readyAt<=e&&(!t||i.crop===t))}function af(n){n.towers.forEach((e,t)=>{const i=new Set;for(const s of e.queue)(!Number.isInteger(s.layer)||s.layer<0||s.layer>=By||i.has(s.layer))&&(s.layer=[0,1,2,3].find(o=>!i.has(o))),i.add(s.layer);const r=n.carry;r?.kind==="starter"&&r.sourceTower===t&&((!Number.isInteger(r.sourceLayer)||i.has(r.sourceLayer))&&(r.sourceLayer=[0,1,2,3].find(s=>!i.has(s))),r.job&&(r.job.layer=r.sourceLayer))})}function vu(n,e){const t=new Ie;t.name=`farm ${n}`;const i=rn(e,n);t.userData.constructionLevel=i;const r=Object.fromEntries(Object.entries({wood:10056519,dark:4215880,soil:6573618,cream:15787717,roof:12936278,leaf:8169539,orange:15311682,water:6269879}).map(([a,c])=>[a,new mi({color:c})])),s=(a,c,l,u)=>{const d=new ce(new Gt(...l),c);return d.position.set(...u),a.add(d),d},o=(a,c,l,u)=>{const d=new ce(new En(1,12,8),c);return d.scale.set(...l),d.position.set(...u),a.add(d),d};if(n==="harvestKit")for(let a=0;a<i;a++){const c=.23+a*.4;s(t,r.wood,[.62,.36,.5],[0,c,0]),s(t,r.dark,[.5,.02,.38],[0,c+.19,0]);for(const u of[-.25,.25])for(const d of[-.1,.04])s(t,r.cream,[.64,.035,.018],[0,c+d,u]);const l=new ce(new Sn(.21,.035,6,14,Math.PI),r.wood);l.position.set(0,c+.2,0),t.add(l)}else if(n==="soilKit"){s(t,r.dark,[.6,.12,.72],[0,.3,0]),s(t,r.water,[.66,.34,.74],[0,.49,0]),s(t,r.soil,[.55,.08,.62],[0,.69,0]);for(const a of[-.35,.35]){const c=new ce(new ht(.2,.2,.09,12),r.dark);c.rotation.z=Math.PI/2,c.position.set(a,.2,.15),t.add(c),s(t,r.wood,[.055,.06,.55],[a,.6,-.62])}if(i>1){s(t,r.cream,[.44,.23,.12],[0,.77,-.22]);for(let a=0;a<5;a++)s(t,r.dark,[.045,.26,.045],[-.24+a*.12,.22,.47])}}else if(n==="composter"){s(t,r.soil,[1.55,.42,1.1],[0,.24,0]);for(const a of[-.8,.8])for(const c of[-.6,.6])s(t,r.dark,[.11,1.1,.11],[a,.55,c]);for(const a of[.2,.44,.68,.92]){for(const c of[-.62,.62])s(t,r.wood,[1.7,.17,.08],[0,a,c]);for(const c of[-.82,.82])s(t,r.wood,[.08,.17,1.3],[c,a,0])}o(t,r.soil,[.73,.2+e.scraps*.012,.53],[0,.51,0]);for(let a=0;a<Math.min(6,e.scraps);a++)o(t,r.leaf,[.15,.03,.075],[Math.sin(a*2)*.45,.66+e.scraps*.008,Math.cos(a*2)*.35]);for(let a=0;a<Math.min(3,e.compost);a++)s(t,r.cream,[.3,.38,.24],[1.12,.2,-.36+a*.29]);if(i===2){const a=s(t,r.dark,[1.85,.09,1.36],[0,1.23,-.22]);a.rotation.x=-.3,s(t,r.wood,[.2,.85,.08],[.7,1.2,-.6])}if(i===3){const a=new ce(new ht(.44,.44,1.3,16),r.water);a.rotation.z=Math.PI/2,a.position.y=1.4,t.add(a);for(const c of[-.65,.65]){s(t,r.dark,[.08,.95,.16],[c,1.16,0]);const l=new ce(new Sn(.45,.04,6,20),r.dark);l.rotation.y=Math.PI/2,l.position.set(c,1.4,0),t.add(l)}s(t,r.cream,[.35,.08,.32],[0,1.84,0]),s(t,r.wood,[.23,.12,.12],[.86,1.4,0])}}else if(n==="rainTank"){const a=new ce(new ht(.66,.72,1.45,20),r.water);a.position.y=.75,t.add(a);for(const c of[.15,.72,1.44]){const l=new ce(new Sn(.68,.045,6,24),r.dark);l.rotation.x=Math.PI/2,l.position.y=c,t.add(l)}if(s(t,r.cream,[.2,.9,.08],[0,.83,.66]),s(t,r.dark,[.12,.15,.48],[.35,.22,.71]),i>1){const c=new ce(new ht(.54,.58,1.25,20),r.water);c.position.set(1.2,.65,0),t.add(c),s(t,r.dark,[.6,.1,.1],[.65,.3,0]),s(t,r.cream,[1.2,.08,1.2],[1.2,1.3,0])}if(i===3){const c=new ce(new ht(.5,.54,1.3,16),r.water);c.position.set(.5,.68,-1.05),t.add(c);for(const u of[-.6,1.7])s(t,r.dark,[.075,2,.075],[u,1,-.8]);const l=s(t,r.roof,[2.5,.09,1.35],[.55,2.02,-.55]);l.rotation.x=.12,s(t,r.cream,[2.5,.1,.12],[.55,1.96,.14]),s(t,r.dark,[.09,1.3,.09],[1.62,1.3,.14])}}else if(n==="coop"){s(t,r.soil,[4,.06,2],[0,.03,0]),s(t,r.wood,[1.25,.9,1.2],[-1.1,.85,0]),s(t,r.dark,[.33,.47,.035],[-1.04,.64,.62]);for(const l of[-1,1]){const u=s(t,r.roof,[.85,.09,1.5],[-1.1+l*.34,1.49,0]);u.rotation.z=-l*.33}for(const l of[-1.58,-.63])for(const u of[-.48,.48])s(t,r.dark,[.1,.55,.1],[l,.28,u]);const a=s(t,r.wood,[.48,.06,.9],[-1.04,.26,.96]);a.rotation.x=-.4;for(const l of[-2,-1,0,1,2])for(const u of[-1,1])s(t,r.wood,[.055,.56,.055],[l,.3,u]);for(const l of[-1,1])for(const u of[.19,.45])s(t,r.wood,[4.05,.035,.035],[0,u,l]);for(const l of[-2,2])for(const u of[.19,.45])s(t,r.wood,[.035,.035,2],[l,u,0]);o(t,r.cream,[.22,.04,.19],[1.5,.08,-.5]);for(let l=0;l<e.eggsReady;l++)o(t,r.cream,[.09,.12,.08],[-.69+l*.2,.53,.64]);const c=[];for(let l=0;l<i;l++){const u=new Ie;u.position.set([.1,.9,1.4][l],0,[.35,-.4,.45][l]),t.add(u),o(u,r.cream,[.25,.25,.34],[0,.36,0]),o(u,r.wood,[.05,.14,.21],[-.23,.38,-.03]),o(u,r.cream,[.13,.2,.13],[0,.63,.2]);for(let f=0;f<3;f++)o(u,r.roof,[.045,.065,.055],[0,.82,.15+f*.045]);o(u,r.roof,[.04,.08,.04],[0,.53,.31]);for(const f of[-1,1])o(u,r.dark,[.018,.024,.018],[f*.116,.68,.25]),s(u,r.orange,[.028,.19,.03],[f*.1,.1,0]),s(u,r.orange,[.08,.025,.13],[f*.1,.025,.04]);const d=new ce(new _i(.057,.16,4),r.orange);d.rotation.x=Math.PI/2,d.position.set(0,.63,.35),u.add(d);const p=o(u,r.cream,[.11,.24,.1],[0,.54,-.28]);p.rotation.x=-.65,u.userData.home=u.position.clone(),c.push(u)}if(t.userData.hens=c,i>1){s(t,r.wood,[.85,.45,.6],[-1.1,.6,-.8]),s(t,r.roof,[1,.08,.72],[-1.1,.88,-.8]);for(const l of[.2,1.1])s(t,r.dark,[.07,1.15,.07],[l,.6,-.9]);s(t,r.wood,[1.15,.08,.1],[.65,1.15,-.9])}if(i===3){s(t,r.roof,[2,.08,.85],[.7,1.45,-.65]);for(const l of[-.22,1.62])s(t,r.dark,[.06,1.4,.06],[l,.7,-.95]);s(t,r.cream,[.42,.3,.45],[.6,.2,-.65]),s(t,r.water,[.3,.06,.3],[.6,.38,-.65])}}return t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),Mt(t),t}function cf(n,e,t,i,r){const s=document.createElement("canvas");s.width=1024,s.height=256;const o=s.getContext("2d");o.fillStyle=i,o.fillRect(0,0,1024,256),o.strokeStyle=r,o.lineWidth=12,o.strokeRect(12,12,1e3,232),o.fillStyle=r,o.font="900 138px system-ui",o.textAlign="center",o.textBaseline="middle",o.fillText(n,512,132,936);const a=new su(s);a.colorSpace=en;const c=new ce(new Un(e,t),new Ot({map:a,side:cn}));return c.name=n,c.rotation.x=-.22,c}function zy(n,e,t){for(const r of[-1.05,1.05])e(n,[.12,1.35,.12],[r,1.83,-.38],t.woodDark);e(n,[2.95,.88,.13],[0,2.6,-.35],t.woodDark);const i=cf("BUY SEEDS",2.8,.74,"#e5f294","#19382b");i.position.set(0,2.6,-.26),n.add(i),e(n,[1.7,.56,.06],[0,.7,.76],t.woodDark);for(let r=0;r<5;r++)e(n,[.23,.34,.05],[-.65+r*.325,.73,.81],r%2?t.coral:t.lime),e(n,[.12,.09,.02],[-.65+r*.325,.78,.85],t.white,!1)}function Hy(n,e,t){const i=new Ie,r=new mi({color:4427678});i.name=`farm supply store stage ${n}`;const s=n>=2?2.1:1.5,o=s/2;e(i,[3.1,.16,s+.65],[0,.08,.15],t.shell),e(i,[2.9,1.9,.14],[0,1.03,-s/2],t.white);for(const l of[-1.4,1.4])e(i,[.14,1.9,s],[l,1.03,0],t.white),e(i,[.18,.48,s+.03],[l,.38,0],t.wood);e(i,[.78,1.58,.12],[-.85,.94,o],t.woodDark),e(i,[.6,1.38,.13],[-.85,.92,o+.03],t.dark),e(i,[.46,.62,.05],[-.85,1.14,o+.11],t.metal),e(i,[.07,.1,.08],[-.64,.71,o+.15],t.amber),e(i,[.94,.12,.4],[-.85,.19,o+.22],t.wood),e(i,[1.62,.72,.16],[.47,.5,o],t.wood),e(i,[1.82,.13,.5],[.47,.92,o+.05],t.woodDark);for(const l of[-.42,1.35])e(i,[.12,1.05,.14],[l,1.48,o],t.woodDark);for(const l of[.92,1.47]){e(i,[1.66,.08,.45],[.48,l,o-.38],t.wood);for(let u=0;u<4;u++){const d=-.13+u*.4;e(i,[.25,.32,.22],[d,l+.2,o-.37],u%2?t.lime:t.coral),e(i,[.14,.12,.02],[d,l+.2,o-.245],t.white,!1)}}e(i,[3,.5,.14],[0,2.18,o+.35],t.woodDark);const a=cf("FARM SHOP",2.78,.47,"#18392c","#f4de8a");if(a.position.set(0,2.18,o+.44),i.add(a),n>=3){for(const l of[-1,1]){const u=e(i,[3.35,.14,1.45],[0,2.47,l*.6],t.coral);u.rotation.x=l*.34}e(i,[3.4,.14,.18],[0,2.71,0],t.woodDark)}else e(i,[3.22,.16,s+.3],[0,2.26,0],t.coral);const c=new Ie;c.position.set(.46,1.88,o+.4),c.rotation.x=.18;for(let l=0;l<6;l++)e(c,[.3,.07,.76],[-.75+l*.3,0,0],l%2?t.white:r),e(c,[.3,.16,.06],[-.75+l*.3,-.07,.38],l%2?t.white:r);if(i.add(c),n>=2){e(i,[.48,.48,.62],[1.8,.3,.35],t.woodDark);for(let l=0;l<3;l++)e(i,[.055,1.05,.055],[1.66+l*.14,.85,.34],t.wood),e(i,[.13,.22,.06],[1.66+l*.14,1.36,.34],t.metal)}if(n>=4)for(const l of[-1.7,1.7])e(i,[.4,.35,.55],[l,.24,-.7],t.wood),e(i,[.34,.35,.42],[l,.57,-.7],t.lime);return Mt(i),i}function Vy(n){const e=new Map;n.traverse(i=>{!i.userData.growthTiming||!i.userData.plantingPlacements||i.children.filter(r=>r.isInstancedMesh).forEach((r,s)=>{const o=`${i.userData.crop}:${s}:${r.material.opacity}`;e.has(o)||e.set(o,[]),e.get(o).push(r),r.layers.set(1),r.castShadow=!1})});const t=[];for(const i of e.values()){const r=i.reduce((o,a)=>o+a.count,0),s=new Tr(i[0].geometry.clone(),i[0].material.clone(),r);s.castShadow=!0,s.receiveShadow=!0,s.userData.instanceTargets=i.flatMap(o=>Array(o.count).fill(o.userData.interactiveId)),s.userData.cropBatch=!0,n.add(s),t.push({mesh:s,parts:i})}n.userData.cropBatches=t,lf(n)}function lf(n){n.updateMatrixWorld(!0);const e=n.matrixWorld.clone().invert(),t=new wt,i=new wt,r=new wt().makeScale(0,0,0);for(const{mesh:s,parts:o}of n.userData.cropBatches||[]){let a=0;for(const c of o){i.multiplyMatrices(e,c.matrixWorld);for(let l=0;l<c.count;l++)c.getMatrixAt(l,t),t.premultiply(i),c.visible||t.multiply(r),s.setMatrixAt(a++,t)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}const ma=.24,ra=1.12;function Gy(n){const e=new Ie;e.name="water reservoir";const t=new Ie;e.add(t);const i=new mi({color:14476762}),r=new mi({color:4151378}),s=new Hi({color:4636114,roughness:.25,metalness:.05}),o=new Ot({color:6935773});function a(M,y,_,P){const C=new ce(y,_);return C.position.set(...P),M.add(C),C}a(t,new Gt(1.7,.2,1.7),r,[0,.13,0]);for(const M of[.26,.84,1.43])for(const y of[-.78,.78])a(t,new Gt(1.6,.045,.045),i,[0,M,y]),a(t,new Gt(.045,.045,1.6),i,[y,M,0]);for(const M of[-.78,0,.78])for(const y of[-.78,.78])a(t,new Gt(.045,1.2,.045),i,[M,.845,y]);const c=a(e,new Gt(1.5,1.17,1.5),new Hi({color:14152429,transparent:!0,opacity:.14,roughness:.25,depthWrite:!1,side:cn}),[0,.845,0]);c.renderOrder=2;const l=a(e,new Gt(1.37,1,1.37),s,[0,ma,0]);l.name="reservoir water volume";const u=new Ie;u.position.set(.42,0,.8),e.add(u),a(u,new Gt(.22,1.1,.06),r,[0,.86,0]);for(let M=0;M<=4;M++)a(u,new Gt(.045,.014,.015),i,[.065,.39+M*.225,.04]);Mt(u);const d=a(u,new Gt(.08,.9,.025),o,[-.025,.39,.048]),p=a(u,new En(.065,10,8),o,[0,1.39,.018]);for(const M of[-.35,.35])a(t,new Gt(.24,.2,.3),r,[M,.34,-.2]),a(t,new ht(.045,.045,1.2,8),r,[M,.95,-.2]);const f=a(t,new ht(.045,.045,.42,8),r,[-.35,1.55,.01]);f.rotation.x=Math.PI/2,a(t,new ht(.045,.045,.18,8),r,[-.35,1.48,.22]);const g=a(t,new ht(.045,.045,.66,8),r,[.35,1.55,-.53]);g.rotation.x=Math.PI/2,a(t,new ht(.045,.045,1.3,8),r,[.35,.9,-.86]);const x=new Ot({color:10875647}),v=a(e,new ht(.045,.065,.2,8),x,[-.35,1.3,.22]);v.name="IBC top mixing discharge";const m=new Ie;m.position.set(-.35,0,.22),e.add(m);for(let M=0;M<2;M++){const y=new ce(new Sn(.23,.018,6,24),new Ot({color:13105919,transparent:!0,opacity:.8,depthWrite:!1}));y.rotation.x=-Math.PI/2,m.add(y)}return Mt(t),e.userData.reservoir={liquid:l,fill:d,lamp:p,shell:c,mixingStream:v,ripples:m,ratio:null,status:null},uf(e,n),e}function uf(n,e){const t=n?.userData.reservoir;if(!t)return;const i=Math.max(0,Math.min(1,Number.isFinite(e)?e/100:0));if(t.ratio===i)return;t.ratio=i,t.status=i===0?"empty":i<=.3?"low":"ready",t.liquid.visible=t.fill.visible=i>0,t.liquid.scale.y=Math.max(1e-4,i*ra),t.liquid.position.y=ma+i*ra/2,t.mixingStream.visible=i>0;const r=Math.max(.02,1.4-(ma+i*ra));t.mixingStream.scale.y=r/.2,t.mixingStream.position.y=1.4-r/2,t.ripples.position.y=ma+i*ra+.025,t.fill.scale.y=Math.max(1e-4,i),t.fill.position.y=.39+i*.9/2,t.lamp.material.color.setHex(i<=.3?16102724:6935773)}function Wy(n,e,t,i){const r=n?.userData.reservoir;r&&(r.mixingStream.visible=r.ripples.visible=t&&r.ratio>0,r.ripples.children.forEach((s,o)=>{const a=i?.35+o*.35:(e*.9+o*.5)%1;s.scale.setScalar(.3+a*1.4),s.material.opacity=i?.65:.9*(1-a)}))}function $y(n){const e=n?.userData.reservoir;return e?{ratio:e.ratio,status:e.status,waterVisible:e.liquid.visible,surfaceHeight:e.liquid.position.y+e.liquid.scale.y/2,bottomHeight:e.liquid.position.y-e.liquid.scale.y/2,gaugeVisible:e.fill.visible,gaugeScale:e.fill.scale.y,mixingVisible:e.mixingStream.visible,rippleScale:e.ripples.children[0].scale.x,modelId:n.uuid}:null}const qs="2026.09.06-preview.13",qy="https://hydropip-pip-api.onrender.com/track-start.html",eh="info@hydropip.com",Xy=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;let df=window.HYDROPIP_ANALYTICS_CONSENT===!0;window.addEventListener("hydropip:analytics-consent",n=>{df=n.detail?.granted===!0});function Qn(n,e={}){if(!df)return;const t={event:`hydropip_game_${n}`,game:"growing_adventure",version:qs,sessionId:Xy,...e};window.dataLayer=window.dataLayer||[],window.dataLayer.push(t),window.dispatchEvent(new CustomEvent("hydropip:game-event",{detail:t}))}const xu={repair:"Tower online!",seeds:"Seeds in the vault!",plant:"Your first layer is planted!",pickup:"Garden-ready starter!",transplant:"Roots in the garden!",harvest:"Your first harvest!",stage:"Harvest safely stored!",market:"Open for business!",sale:"Your first customer!",expansion:"A second tower!",upgrade:"More room to grow!"};function hf(n,e=!1){return{enabled:typeof n?.enabled=="boolean"?n.enabled:e,minimized:!!n?.minimized,staged:!!n?.staged,seen:[...new Set((Array.isArray(n?.seen)?n.seen:[]).filter(t=>Object.hasOwn(xu,t)))]}}function kl(n){const e=n.beds.some(i=>i.built&&i.capacity>2)||n.towers.some(i=>i.irrigationUpgraded),t={repair:n.towers[0].repaired,seeds:n.stats.seedsCollected>0,plant:n.stats.planted>0,pickup:n.carry?.kind==="starter"||n.stats.transplanted>0,transplant:n.stats.transplanted>0,harvest:n.stats.harvested>0,stage:n.tutorial.coach?.staged||Object.values(n.rack).some(i=>i>0),market:n.market.built,sale:n.stats.orders>0,expansion:n.towers[1].built&&n.towers[1].repaired,upgrade:e};return Object.keys(xu).filter(i=>t[i])}const Nl={lettuce:4,basil:6,tomato:8,kale:6,strawberry:10},Ea=80;function Yy(){return{tutorialClaimed:[],expanded:!1,purchases:0,rescues:0}}function jy(n){const e=t=>Number.isFinite(t)?Math.max(0,Math.min(99999,Math.floor(t))):0;return{tutorialClaimed:[...new Set((Array.isArray(n?.tutorialClaimed)?n.tutorialClaimed:[]).filter(t=>["lettuce","basil"].includes(t)))],expanded:!!n?.expanded,purchases:e(n?.purchases),rescues:e(n?.rescues)}}function Ol(n){return n.seedShop.expanded?48:24}function ja(n,e){if(!Object.hasOwn(Nl,e)||!n.unlockedCrops.includes(e))return{available:!1,reason:"Crop locked"};const t=!n.market.built&&["lettuce","basil"].includes(e)&&!n.seedShop.tutorialClaimed.includes(e),i=t?4:Ut(n).seedBatch,r=t?0:Nl[e],s=n.market.built?n.coins:Math.max(0,n.coins-40),o=n.seeds[e]+i>Ol(n)?"Vault full":s<r?n.market.built?"Not enough coins":"Keep the market reserve":"";return{available:!o,reason:o,amount:i,price:r,tutorial:t}}function Ky(n,e){const t=ja(n,e);return t.available?(n.coins-=t.price,n.seeds[e]+=t.amount,n.stats.seedsCollected+=t.amount,t.tutorial?n.seedShop.tutorialClaimed.push(e):n.seedShop.purchases++,!0):!1}function _u(n){if((n.market.built?n.coins:Math.max(0,n.coins-40))>=Nl.lettuce||Object.values(n.seeds).some(r=>r>0)||n.carry?.kind==="starter")return!1;const t=n.chapter>=2?2:1,i=n.carry?.kind==="produce"?n.carry.items:[];return!(Object.entries(n.rack).some(([r,s])=>s+i.filter(o=>o===r).length>=t)||n.towers.some(r=>r.queue.length)||n.beds.some(r=>r.plants.length)||n.farm.eggs||n.farm.eggsReady||n.farm.coopReadyAt)}function Jy(n){return _u(n)?(n.seeds.lettuce+=2,n.stats.seedsCollected+=2,n.seedShop.rescues++,!0):!1}function Zy(n){return!n.market.built||Pn(n,"vault")||n.seedShop.expanded||n.coins<Ea?!1:(n.coins-=Ea,n.seedShop.expanded=!0,!0)}const wo="hydropipCampaignSave",Qy="hydropipTowerRunCampaign",yu=6,ei=["lettuce","basil","tomato","kale","strawberry"],Ae={lettuce:{code:"L",label:"Lettuce",color:"#79bd53",accent:"#d6f47a",towerSeconds:9,bedSeconds:6,coinValue:9,xp:3,family:"greens"},basil:{code:"B",label:"Basil",color:"#319856",accent:"#8de28f",towerSeconds:11,bedSeconds:7,coinValue:11,xp:4,family:"greens"},tomato:{code:"T",label:"Tomato",color:"#df5e48",accent:"#ffb06b",towerSeconds:15,bedSeconds:10,coinValue:15,xp:5,family:"fruit"},kale:{code:"K",label:"Kale",color:"#47765c",accent:"#a8d276",towerSeconds:13,bedSeconds:9,coinValue:14,xp:5,family:"greens"},strawberry:{code:"S",label:"Strawberry",color:"#d94f68",accent:"#ffd06c",towerSeconds:17,bedSeconds:11,coinValue:19,xp:7,family:"fruit"}},is=[0,35,85,145,220,310,420,650,950,1350,1850,2450,3150,3950,4850],gt={market:40,tower:[0,70,110,160],bedUpgrade:[45,65,90,120],queueUpgrade:55,cosmetics:{"sunny-planters":30,"blue-path":45,"festival-bunting":60}},oo={"sunny-planters":{label:"Sunny planters",color:"#f4c451"},"blue-path":{label:"Blue garden pots",color:"#66c7d0"},"festival-bunting":{label:"Market bunting",color:"#e86c54"}},ms=[{id:"restore",number:1,name:"Restore the Homestead",shortName:"Homestead",description:"Repair the first tower and reopen Pip's Veg Stand.",completionTask:"first-market-day"},{id:"balance",number:2,name:"Expand the Farm",shortName:"Farm Expansion",description:"Check the shared reservoir and supply a neighborhood rush.",completionTask:"neighborhood-rush"},{id:"pro-yard",number:3,name:"Build the Pro Yard",shortName:"Pro Yard",description:"Complete the five-crop launch showcase with Pro Pip.",completionTask:"launch-showcase"}],Ln=[{id:"repair-first-tower",chapter:0,title:"Bring the tower online",detail:"Repair the first HydroPip tower.",focus:"tower-0",reward:{coins:15,xp:15,unlockCrop:"basil"},story:"Pip: One good tower is enough to bring this garden back."},{id:"first-tower-plan",chapter:0,title:"Plan the first greens",detail:"Collect seeds and plant 2 lettuce layers.",focus:"vault",reward:{coins:10,xp:20},story:"Mara: Lettuce first. The neighborhood has missed fresh greens."},{id:"first-grow-out",chapter:0,title:"Finish crops in soil",detail:"Transplant and harvest 4 garden crops before opening the produce table.",focus:"bed-0",reward:{coins:20,xp:25},story:"Pip: Tower roots are ready. The bed gives them their final finish."},{id:"reopen-market",chapter:0,title:"Open Pip's produce table",detail:"Build a small produce table for 40 coins. More towers unlock a bigger stand.",focus:"market",reward:{coins:20,xp:25},story:"Theo: A few crates today. An awning when the farm grows."},{id:"first-market-day",chapter:0,title:"Serve the first greens",detail:"Sell 2 lettuce and 2 basil across 4 market orders.",goals:{sold:{lettuce:2,basil:2},orders:4},focus:"market",reward:{coins:40,xp:35,chapterComplete:!0},story:"June: The stand is open again. Let's add more towers and grow more crops."},{id:"build-second-tower",chapter:1,title:"Build the second tower",detail:"Build Tower 2 for 70 coins.",focus:"tower-1",reward:{coins:25,xp:35,unlockCrop:"tomato"},story:"Pip: Two towers, one tank. Both receive the same nutrient batch."},{id:"specialize-flow",chapter:1,title:"Check the shared system",detail:"Confirm tank circulation, then check delivery to every tower.",focus:"reservoir",reward:{coins:25,xp:35,unlockCrop:"kale"},story:"Mara: One pump mixes the tank. A second pump feeds every tower from that same batch."},{id:"split-crop-plan",chapter:1,title:"Run a mixed crop plan",detail:"Plant tomato and kale in separate tower layers.",focus:"vault",reward:{coins:40,xp:40},story:"Theo: Different crops can share the towers. Their nutrient supply is still one batch."},{id:"build-third-tower",chapter:1,title:"Build the third tower",detail:"Build Tower 3 for 110 coins.",focus:"tower-2",reward:{coins:55,xp:45},story:"Pip: Three towers. Now the farm can keep several orders moving."},{id:"neighborhood-rush",chapter:1,title:"Serve the neighborhood rush",detail:"Sell 3 tomato and 3 kale, reach 10 total orders, and upgrade tower drippers or a garden bed.",goals:{sold:{tomato:3,kale:3},orders:10,capacityUpgrade:!0},focus:"market",reward:{coins:90,xp:55,chapterComplete:!0},story:"June: Every order made the Pro Yard possible."},{id:"build-pro-yard",chapter:2,title:"Build the fourth tower",detail:"Build Tower 4 for 160 coins.",focus:"tower-3",reward:{coins:45,xp:55,unlockCrop:"strawberry",unlockPro:!0},story:"Pip: Pro Yard online. Time for the black shirt and tool belt."},{id:"launch-showcase",chapter:2,title:"Host the launch showcase",detail:"Upgrade the market, sell 5 of every crop plus 3 extra strawberries, and reach 20 total orders.",goals:{sold:{lettuce:5,basil:5,tomato:5,kale:5,strawberry:8},orders:20,marketLevel:2},focus:"market",reward:{coins:140,xp:75,chapterComplete:!0,campaignComplete:!0},story:"Mara: The homestead is growing, the stand is busy, and Pip is a pro."}];function xr(){return Object.fromEntries(ei.map(n=>[n,0]))}function Ka(n){const e=Math.max(0,Number(n)||0);let t=1;return is.forEach((i,r)=>{e>=i&&(t=r+1)}),Math.min(is.length,t)}function ff(n){const e=Ka(n),t=is[e-1],i=is[e]??t;return{level:e,current:Math.max(0,n-t),needed:e>=is.length?0:i-t,ratio:e>=is.length?1:(n-t)/(i-t)}}function pf(n){return{id:`tower-${n}`,built:n===0,repaired:!1,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!1,queue:[]}}function mf(n){return{id:`bed-${n}`,built:n===0,capacity:2,soilCharges:0,plants:[]}}function Ja(n=Date.now()){return{version:yu,createdAt:n,savedAt:n,chapter:0,taskIndex:0,completedTasks:[],coins:45,xp:0,level:1,challengeUnlocked:!1,campaignComplete:!1,proPip:!1,unlockedCrops:["lettuce"],towers:[0,1,2,3].map(pf),beds:[0,1,2,3].map(mf),market:{built:!1,level:0,stage:0,nextVisitIn:8,visitRemaining:0,cropBag:[]},farm:by(),homestead:rf(),seeds:xr(),seedShop:Yy(),rack:xr(),carry:null,orders:[],selectedOrderId:null,orderSequence:0,lastCustomer:"",stats:{seedsCollected:0,planted:0,transplanted:0,harvested:0,sold:0,orders:0,rejectedOrders:0,serviceActions:0,byCropQueued:xr(),byCropHarvested:xr(),byCropSold:xr(),byCropFed:xr()},hydro:{water:100,nutrients:100,ph:6.2,strategy:"balanced",batchMixed:!0,mixChecked:!1,flowChecked:!1,flowCalibrated:!1,systemLessonDone:!1,batchNumber:1,feedPhase:0,lineClogged:!1,lineRunSeconds:0,lineClogAfter:300,servicedAt:n},cosmetics:{owned:[],active:[]},tutorial:{welcomeSeen:!1,taskDrawerSeen:!1,marketSeen:!1,coach:hf(null,!0)},settings:{soundEnabled:!0,highContrast:!1,reducedMotion:!1,musicVolume:.22,effectsVolume:.68}}}function qe(n,e,t=-1/0,i=1/0){const r=Number(n);return Number.isFinite(r)?Math.min(i,Math.max(t,r)):e}function Zr(n){const e=xr();return ei.forEach(t=>{e[t]=Math.floor(qe(n?.[t],0,0,999))}),e}function th(n){return!n||!Ae[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,layer:Number.isInteger(n.layer)&&n.layer>=0&&n.layer<4?n.layer:null,queuedAt:qe(n.queuedAt,Date.now(),0),startedAt:n.startedAt===null?null:qe(n.startedAt,Date.now(),0),readyAt:n.readyAt===null?null:qe(n.readyAt,Date.now(),0),quality:qe(n.quality,1,.5,1.25)}}function e1(n){return!n||!Ae[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,plantedAt:qe(n.plantedAt,Date.now(),0),readyAt:qe(n.readyAt,Date.now(),0),quality:qe(n.quality,1,.5,1.25)}}function t1(n){return!n||!Ae[n.crop]?null:{id:String(n.id||crypto.randomUUID()),customer:String(n.customer||"Mara").slice(0,24),slot:Number.isInteger(n.slot)&&n.slot>=0&&n.slot<3?n.slot:null,crop:n.crop,amount:Math.floor(qe(n.amount,1,1,3)),reward:Math.floor(qe(n.reward,10,1,200)),xp:Math.floor(qe(n.xp,5,1,50)),createdAt:qe(n.createdAt,Date.now(),0),expiresAt:qe(n.expiresAt,Date.now()+12e4,0),status:["waiting","cooldown"].includes(n.status)?n.status:"waiting"}}function n1(n,e,t){n.towers.forEach(i=>{i.queue.forEach(r=>{if(!r||r.startedAt===null||r.readyAt===null||r.readyAt<=e)return;const s=t?gs(r.crop,"tower",n,i):Ae[r.crop].towerSeconds*4,o=e+s*1e3;r.readyAt=Math.min(r.readyAt,o)})}),n.beds.forEach(i=>{i.plants.forEach(r=>{if(r.readyAt<=e)return;const s=e+gs(r.crop,"bed",n)*1e3;r.readyAt=Math.min(r.readyAt,s)})})}function Ta(n,e=Date.now()){const t=Ja(e);if(!n||typeof n!="object")return t;const i=n.hydro?.systemLessonDone===void 0&&(qe(n.taskIndex,0)>6||Array.isArray(n.towers)&&n.towers.some(a=>["greens","fruit"].includes(a?.specialization))),r={...t,...n,version:yu,createdAt:qe(n.createdAt,e,0),savedAt:qe(n.savedAt,e,0),chapter:Math.floor(qe(n.chapter,0,0,ms.length-1)),taskIndex:Math.floor(qe(n.taskIndex,0,0,Ln.length)),completedTasks:Array.isArray(n.completedTasks)?[...new Set(n.completedTasks.filter(a=>Ln.some(c=>c.id===a)))]:[],coins:Math.floor(qe(n.coins,t.coins,0,99999)),xp:Math.floor(qe(n.xp,0,0,99999)),challengeUnlocked:!!n.challengeUnlocked,campaignComplete:!!n.campaignComplete,proPip:!!n.proPip,unlockedCrops:Array.isArray(n.unlockedCrops)?ei.filter(a=>n.unlockedCrops.includes(a)):["lettuce"],seeds:Zr(n.seeds),seedShop:jy(n.seedShop),rack:Zr(n.rack),farm:wy(n.farm),homestead:Ry(n.homestead),carry:null,orders:Array.isArray(n.orders)?n.orders.map(t1).filter(Boolean).slice(0,3):[],selectedOrderId:typeof n.selectedOrderId=="string"?n.selectedOrderId.slice(0,80):null,orderSequence:Math.floor(qe(n.orderSequence,0,0,999999)),lastCustomer:String(n.lastCustomer||"").slice(0,24),market:{built:!!n.market?.built,level:Math.floor(qe(n.market?.level,0,0,2)),stage:n.market?.built?Math.floor(qe(n.market?.stage,n.market?.level>=2?4:3,1,4)):0,nextVisitIn:qe(n.market?.nextVisitIn,8,0,35),visitRemaining:Math.floor(qe(n.market?.visitRemaining,0,0,3)),cropBag:[...new Set((Array.isArray(n.market?.cropBag)?n.market.cropBag:[]).filter(a=>ei.includes(a)))],openingGrant:Math.floor(qe(n.market?.openingGrant,0,0,gt.market))},hydro:{water:qe(n.hydro?.water,100,0,100),nutrients:qe(n.hydro?.nutrients,100,0,100),ph:qe(n.hydro?.ph,6.2,4.5,8),strategy:"balanced",batchMixed:n.hydro?.batchMixed!==!1,mixChecked:n.hydro?.batchMixed===!1?!1:!!n.hydro?.mixChecked,flowChecked:!!n.hydro?.flowChecked,flowCalibrated:!!n.hydro?.flowCalibrated||n.hydro?.strategy==="water-save"||i,systemLessonDone:!!n.hydro?.systemLessonDone||i,batchNumber:Math.floor(qe(n.hydro?.batchNumber,1,1,999999)),feedPhase:qe(n.hydro?.feedPhase,0,0,24)%24,lineClogged:!!n.hydro?.lineClogged&&qe(n.chapter,0)>=1,lineRunSeconds:qe(n.hydro?.lineRunSeconds,0,0,360),lineClogAfter:qe(n.hydro?.lineClogAfter,300,240,360),servicedAt:qe(n.hydro?.servicedAt,e,0)},cosmetics:{owned:Array.isArray(n.cosmetics?.owned)?n.cosmetics.owned.filter(a=>oo[a]):[],active:Array.isArray(n.cosmetics?.active)?n.cosmetics.active.filter(a=>oo[a]):[]},tutorial:{...t.tutorial,...n.tutorial||{},coach:hf(n.tutorial?.coach,!n.tutorial?.welcomeSeen&&!n.taskIndex&&!n.stats?.planted)},settings:{soundEnabled:n.settings?.soundEnabled!==!1,highContrast:!!n.settings?.highContrast,reducedMotion:!!n.settings?.reducedMotion,musicVolume:qe(n.settings?.musicVolume,t.settings.musicVolume,0,1),effectsVolume:qe(n.settings?.effectsVolume,t.settings.effectsVolume,0,1)},stats:{...t.stats,...n.stats||{},seedsCollected:Math.floor(qe(n.stats?.seedsCollected,0,0)),planted:Math.floor(qe(n.stats?.planted,0,0)),transplanted:Math.floor(qe(n.stats?.transplanted,0,0)),harvested:Math.floor(qe(n.stats?.harvested,0,0)),sold:Math.floor(qe(n.stats?.sold,0,0)),orders:Math.floor(qe(n.stats?.orders,0,0)),rejectedOrders:Math.floor(qe(n.stats?.rejectedOrders,0,0)),serviceActions:Math.floor(qe(n.stats?.serviceActions,0,0)),byCropQueued:Zr(n.stats?.byCropQueued),byCropHarvested:Zr(n.stats?.byCropHarvested),byCropSold:Zr(n.stats?.byCropSold),byCropFed:Zr(n.stats?.byCropFed)}};if(r.level=Ka(r.xp),r.unlockedCrops.includes("lettuce")||r.unlockedCrops.unshift("lettuce"),r.towers=[0,1,2,3].map(a=>{const c=n.towers?.[a]||{};return{...pf(a),...c,id:`tower-${a}`,built:a===0||!!c.built,repaired:!!c.repaired,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!!c.irrigationUpgraded||qe(n.version,0)<6&&c.queueCapacity===3,queue:Array.isArray(c.queue)?c.queue.map(th).filter(Boolean).slice(0,4):[]}}),r.beds=[0,1,2,3].map(a=>{const c=n.beds?.[a]||{};return{...mf(a),...c,id:`bed-${a}`,built:a===0||!!c.built,capacity:Math.floor(qe(c.capacity,2,2,4)),soilCharges:Math.floor(qe(c.soilCharges,0,0,8)),plants:Array.isArray(c.plants)?c.plants.map(e1).filter(Boolean).slice(0,4):[]}}),n.carry?.kind==="starter"&&Ae[n.carry.crop])r.carry={kind:"starter",crop:n.carry.crop,quality:qe(n.carry.quality,1,.5,1.25),sourceTower:Math.floor(qe(n.carry.sourceTower,0,0,3)),sourceLayer:Number.isInteger(n.carry.sourceLayer)&&n.carry.sourceLayer>=0&&n.carry.sourceLayer<4?n.carry.sourceLayer:null,job:th(n.carry.job)};else if(n.carry?.kind==="produce"&&Array.isArray(n.carry.items)){const a=n.carry.items.filter(c=>Ae[c]).slice(0,Ut(r).basket);a.length&&(r.carry={kind:"produce",items:a})}af(r);const s=new Set;r.orders.forEach(a=>{(a.slot===null||s.has(a.slot))&&(a.slot=[0,1,2].find(c=>!s.has(c))),s.add(a.slot)});const o=r.cosmetics.owned.length||r.farm.owned.length||r.towers.some(a=>a.irrigationUpgraded)||r.beds.some(a=>a.capacity>2);if(!r.market.built&&r.taskIndex>=3&&r.coins<gt.market&&!r.market.openingGrant&&o&&(r.market.openingGrant=gt.market-r.coins,r.coins=gt.market),r.hydro.water<=0||!r.hydro.batchMixed){const a=Math.max(0,e-r.savedAt);r.towers.forEach(c=>c.queue.forEach(l=>{l.readyAt>r.savedAt&&(l.readyAt+=a,l.startedAt!==null&&(l.startedAt+=a))})),r.savedAt=e}return n1(r,e,qe(n.version,0)<4),r}function i1(n,e){if(!e||typeof e!="object")return n;const t=Array.isArray(e.completed)?e.completed:[],i=Math.floor(qe(e.highestContract,0,0,2));return(t.includes("homestead")||i>=1)&&(n.chapter=1,n.taskIndex=5,n.completedTasks=Ln.slice(0,5).map(r=>r.id),n.coins=150,n.xp=130,n.challengeUnlocked=!0,n.unlockedCrops=["lettuce","basil","tomato"],n.towers[0].repaired=!0,n.market={built:!0,level:1}),(t.includes("split-flow")||i>=2)&&(n.chapter=2,n.taskIndex=10,n.completedTasks=Ln.slice(0,10).map(r=>r.id),n.coins=260,n.xp=330,n.unlockedCrops=["lettuce","basil","tomato","kale","strawberry"],n.towers[1].built=!0,n.towers[1].repaired=!0,n.hydro.systemLessonDone=!0,n.hydro.flowCalibrated=!0,n.towers[2].built=!0,n.towers[2].repaired=!0,n.beds[1].built=!0,n.beds[2].built=!0),t.includes("pro-yard")&&(n.taskIndex=Ln.length,n.completedTasks=Ln.map(r=>r.id),n.coins=420,n.xp=500,n.campaignComplete=!0,n.challengeUnlocked=!0,n.proPip=!0,n.towers.forEach(r=>{r.built=!0,r.repaired=!0}),n.beds.forEach(r=>{r.built=!0}),n.market={built:!0,level:2}),n.level=Ka(n.xp),n}function bu(n=window.localStorage,e=Date.now()){let t=null;try{t=JSON.parse(n.getItem(wo)||"null")}catch{t=null}if(t)return Ta(t,e);let i=null;try{i=JSON.parse(n.getItem(Qy)||"null")}catch{i=null}return Ta(i1(Ja(e),i),e)}function r1(n,e=window.localStorage,t=Date.now(),i=()=>{}){const r=Ta({...n,savedAt:t},t);try{e.setItem(wo,JSON.stringify(r)),i(!0)}catch{i(!1)}return r}function s1(n=window.localStorage,e=Date.now()){const t=Ja(e);try{n.setItem(wo,JSON.stringify(t))}catch{}return t}function ti(n){return Ln[n.taskIndex]||null}function gs(n,e,t,i=null){const r=Ae[n];if(e==="bed")return r.bedSeconds*(1-Ya(t,n)*.03);let s=r.towerSeconds;return i?.irrigationUpgraded&&(s*=.88),Math.max(3,s)}function Ir(n,e=Date.now()){return af(n),n.towers.forEach(t=>{t.queue.length&&t.queue.forEach(i=>{(i.startedAt===null||i.readyAt===null)&&(i.startedAt=e,i.readyAt=e+gs(i.crop,"tower",n,t)*1e3)})}),My(n,e),n.level=Ka(n.xp),n}function o1(n){const e=Object.fromEntries(ei.map(t=>[t,{queued:0,starter:0,garden:0,basket:0,rack:n.rack[t]||0,sold:n.stats.byCropSold[t]||0,fed:n.stats.byCropFed?.[t]||0,accounted:0}]));return n.towers.forEach(t=>t.queue.forEach(i=>{e[i.crop].queued+=1})),n.carry?.kind==="starter"&&(e[n.carry.crop].starter+=1),n.beds.forEach(t=>t.plants.forEach(i=>{e[i.crop].garden+=1})),n.carry?.kind==="produce"&&n.carry.items.forEach(t=>{e[t].basket+=1}),Object.values(e).forEach(t=>{t.accounted=t.queued+t.starter+t.garden+t.basket+t.rack+t.sold+t.fed}),e}const gf=1024*1024,vf="hydropipFarmBeforeRestore";function Fl(n,e=Date.now()){return JSON.stringify({format:"hydropip-farm",backupVersion:1,gameVersion:qs,farm:{...n,savedAt:e}},null,2)}function Bl(n,e=Date.now()){if(new TextEncoder().encode(n).length>gf)throw new Error("Backup exceeds the 1 MB limit.");let t;try{t=JSON.parse(n,(r,s)=>{if(["__proto__","prototype","constructor"].includes(r))throw new Error;if(typeof s=="string"&&/[<>"'&`]/.test(s))throw new Error;if(typeof s=="number"&&!Number.isFinite(s))throw new Error;return s})}catch{throw new Error("This is not a valid HydroPip farm backup.")}if(t?.format!==void 0&&(t.format!=="hydropip-farm"||t.backupVersion!==1))throw new Error("Unsupported backup format.");const i=t?.format==="hydropip-farm"?t.farm:t;if(!i||!Number.isInteger(i.version)||i.version<1||i.version>yu)throw new Error("Unsupported farm version. Use a backup from this game version or an older one.");if(!Number.isFinite(i.coins)||i.coins<0||!Number.isFinite(i.xp)||i.xp<0||!Number.isInteger(i.taskIndex)||i.taskIndex<0||i.taskIndex>12||!Array.isArray(i.towers)||i.towers.length!==4||!Array.isArray(i.beds)||i.beds.length!==4||!i.seeds||typeof i.seeds!="object"||!i.stats||typeof i.stats!="object")throw new Error("The file is missing required farm data. Your current farm has not changed.");return Ta(i,e)}function a1(n,e,t,i=Date.now()){const r=Bl(Fl(e,i),i);return n.setItem(vf,Fl(t,i)),n.setItem(wo,JSON.stringify(r)),r}function c1(n,e){const t=u=>document.getElementById(u);let i=null,r=0;function s(u,d,p="application/json"){const f=URL.createObjectURL(new Blob([u],{type:p})),g=document.createElement("a");g.href=f,g.download=d,g.click(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}function o(u){t("importStatus").textContent=u}function a(){r++,i=null,t("restoreConfirmation").hidden=!0,t("importFile").value=""}for(const u of document.querySelectorAll("[data-real-build]"))u.href=qy,u.addEventListener("click",()=>Qn("build_guide_open",{source:u.dataset.realBuild}));t("gameVersion").textContent=qs,t("exportSave").addEventListener("click",()=>s(Fl(n()),"hydropip-farm-backup.json")),t("importSave").addEventListener("click",()=>{a(),o(""),t("importFile").click()}),t("importFile").addEventListener("change",async u=>{const d=u.target.files[0];if(!d)return;const p=r;try{if(d.size>gf)throw new Error("Backup exceeds the 1 MB limit.");const f=await d.text();if(p!==r)return;const g=Bl(f);i=f,t("restoreSummary").textContent=`Replace this farm with Chapter ${g.chapter+1}, ${g.coins} coins, and ${g.homestead.claimed.length} completed projects? A recovery copy of this farm will be retained.`,t("restoreConfirmation").hidden=!1,t("cancelRestore").focus()}catch(f){a(),o(f.message)}}),t("cancelRestore").addEventListener("click",()=>{a(),o("Restore cancelled. Your farm is unchanged.")}),t("confirmRestore").addEventListener("click",()=>{if(i){try{const u=a1(localStorage,Bl(i),n());e(u)}catch{o("Restore could not be completed. Your pre-restore recovery copy is available below if it was saved. Free browser storage and try again.");return}a(),Qn("farm_restored"),location.reload()}}),t("exportRecovery").addEventListener("click",()=>{try{const u=localStorage.getItem(vf);if(!u)return o("No previous restore recovery copy is available.");s(u,"hydropip-before-restore.json")}catch{o("Browser storage is unavailable.")}});function c(){const u=n();return`HydroPip game report
Version: ${qs}
Chapter: ${u.chapter+1}; task: ${u.taskIndex}
Viewport: ${innerWidth} x ${innerHeight}
Browser: ${navigator.userAgent}

What happened:
${t("reportNotes").value.trim()||"(Please describe what happened.)"}

No saved-farm contents are attached.`}function l(){const u=c();t("reportPreview").textContent=u,t("emailReport").href=`mailto:${eh}?subject=${encodeURIComponent(`HydroPip game report ${qs}`)}&body=${encodeURIComponent(u)}`}return t("reportProblem").addEventListener("click",()=>{t("feedbackForm").hidden=!t("feedbackForm").hidden,l()}),t("reportNotes").addEventListener("input",l),t("downloadReport").addEventListener("click",()=>s(c(),"hydropip-game-report.txt","text/plain")),t("emailReport").hidden=!eh,{cancelImport:a}}const nh=new URL(""+new URL("pip-pro-celebration-transparent-IQLOdfWW.webp",import.meta.url).href,import.meta.url).href,ih=new URL(""+new URL("rhythm-dance-5VSp4liT.webp",import.meta.url).href,import.meta.url).href;function l1({balance:n,reducedMotion:e,mobile:t=()=>!1}){const i=document.createElement("div");i.className="reward-effects",i.setAttribute("aria-hidden","true");const r=document.createElement("section");r.className="reward-notice",r.hidden=!0,r.setAttribute("aria-label","Goal celebration");const s=document.createElement("button");s.type="button",s.className="reward-dismiss",s.textContent="×",s.setAttribute("aria-label","Dismiss celebration");const o=document.createElement("img");o.alt="";const a=document.createElement("div");a.className="reward-copy";const c=document.createElement("span"),l=document.createElement("h3"),u=document.createElement("p");a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.append(c,l,u),r.append(s,o,a),document.body.append(i,r);let d;const p=new Set,f=()=>e()||matchMedia("(prefers-reduced-motion: reduce)").matches;function g(L,D,w,b=!1){const A=L.animate(D,w);p.add(A);const O=()=>{p.delete(A),b&&L.remove()};return A.onfinish=O,A.oncancel=O,A}function x(){clearTimeout(d),r.hidden=!0,o.getAnimations().forEach(L=>L.cancel())}s.addEventListener("click",x),document.addEventListener("keydown",L=>{L.key==="Escape"&&x()});function v(){for(const L of p)L.cancel();p.clear(),i.replaceChildren()}document.addEventListener("visibilitychange",()=>{document.hidden&&(v(),x())}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{f()&&v()});function M(L,D){if(!Number.isFinite(L)||L<=0||document.hidden)return;const w=n.getBoundingClientRect(),b={x:w.left+w.width/2,y:w.top+w.height/2},A=Math.max(70,Math.min(innerWidth-70,D?.x??innerWidth/2)),O=Math.max(110,Math.min(innerHeight-100,D?.y??innerHeight/2)),B=document.createElement("strong");if(B.className="reward-coin-label",B.textContent=`+${L.toLocaleString()} coins`,B.style.left=`${A}px`,B.style.top=`${O}px`,i.querySelectorAll(".reward-coin-label").length>=3&&i.querySelector(".reward-coin-label").remove(),i.append(B),f()){setTimeout(()=>B.remove(),1800);return}g(B,[{opacity:1,translate:"0 0"},{opacity:1,offset:.7},{opacity:0,translate:"0 -36px"}],{duration:1700},!0);const E=Math.min(8,Math.max(3,Math.ceil(L/5)),24-i.querySelectorAll(".reward-coin").length);for(let F=0;F<E;F++){const k=document.createElement("i");k.className="reward-coin",k.textContent="P",k.style.left=`${A}px`,k.style.top=`${O}px`,i.append(k);const H=b.x-A,N=b.y-O;g(k,[{transform:"translate(-50%,-50%) scale(.5)",opacity:0},{transform:`translate(${(F-E/2)*13}px,-40px) scale(1)`,opacity:1,offset:.24},{transform:`translate(${H}px,${N}px) scale(.65)`,opacity:1,offset:.9},{transform:`translate(${H}px,${N}px) scale(.2)`,opacity:0}],{duration:1050,delay:F*60,fill:"backwards",easing:"cubic-bezier(.25,.6,.4,1)"},!0)}n.getAnimations().forEach(F=>F.cancel()),g(n,[{color:"#ffe678",scale:"1"},{color:"#ffe678",scale:"1.2",offset:.55},{scale:"1"}],{duration:550,delay:850})}function y(){if(f()||document.hidden)return;i.querySelectorAll(".reward-confetti").forEach(D=>{D.getAnimations().forEach(w=>w.cancel()),D.remove()});const L=t()||innerWidth<620?22:42;for(let D=0;D<L;D++){const w=document.createElement("i");w.className="reward-confetti",w.style.left=`${8+Math.random()*84}%`,w.style.background=["#ffd454","#f4778b","#66d9db","#bde875","#fff6d9"][D%5],i.append(w),g(w,[{transform:"translateY(-30px) rotate(0deg)",opacity:0},{opacity:1,offset:.12},{opacity:1,offset:.7},{transform:`translate(${(Math.random()-.5)*180}px,${innerHeight*.8}px) rotate(${D%2?540:-540}deg)`,opacity:0}],{duration:2200+Math.random()*600,delay:Math.random()*350,fill:"backwards"},!0)}}function _(L){f()||g(L,[{transform:"rotate(-8deg) translateY(0)"},{transform:"rotate(14deg) translateY(-12px)",offset:.25},{transform:"rotate(-12deg) translateY(-4px)",offset:.5},{transform:"rotate(8deg) translateY(-10px)",offset:.75},{transform:"rotate(-8deg) translateY(0)"}],{duration:1250,iterations:3,easing:"ease-in-out"})}function P({title:L,detail:D,major:w=!1,rhythm:b=!1}){t()&&!w||document.hidden||(x(),r.classList.toggle("is-major",w),c.textContent=w?"Homestead milestone!":"Goal complete!",l.textContent=L,u.textContent=D,o.src=b?ih:nh,r.hidden=!1,w&&y(),b?_(o):f()||g(o,[{transform:"scale(.8)"},{transform:"scale(1.06)",offset:.7},{transform:"scale(1)"}],{duration:450}),d=setTimeout(x,t()?3500:w?6500:3600))}function C(L,D){x();const w=L.querySelector(".chapter-reward-art img");w.getAnimations().forEach(b=>b.cancel()),w.src=D?ih:nh,w.alt=D?"Rhythm Pip in his breakdance freeze with a boombox":"Pro Pip cheering with confetti",D&&_(w),y()}return{coins:M,celebrate:P,chapter:C,dismiss:x,clearMotion:v}}const ga=24,ao=6,Aa=30,u1=.01;function Za(n){return n.towers.filter(e=>e.built&&e.repaired).reduce((e,t)=>e+t.queue.length,0)}function Mo(n){const e=n.hydro;return{water:e.water<=Aa,mix:e.water>0&&!e.mixChecked,check:Fn(n)&&e.mixChecked&&!e.flowChecked&&!e.lineClogged&&n.towers.some(t=>t.built)&&!n.towers.some(t=>t.built&&!t.repaired)}}function xf(n){if(!n.hydro.water)return"Stopped: tank empty";if(!Fn(n))return"Stopped: circulate batch";if(!Za(n))return"Idle: towers empty";const e=n.hydro.feedPhase||0;return e<ao?`${n.hydro.lineClogged?"Restricted feed":"Feeding towers"} / ${Math.ceil(ao-e)}s`:`Next feed in ${Math.ceil(ga-e)}s`}function Fn(n){return n.hydro.water>0&&n.hydro.batchMixed!==!1}function rh(n){return Fn(n)&&n.hydro.flowCalibrated&&!n.hydro.lineClogged}function d1(n){return Fn(n)&&(n.hydro.feedPhase||0)<ao&&Za(n)>0}function h1(n,e){const t=n.hydro;if(!Mo(n)[e])return!1;if(e==="water"){if(t.water>Aa)return!1;t.water=100,t.batchMixed=!1,t.mixChecked=!1,t.flowChecked=!1,t.feedPhase=0,t.batchNumber=(t.batchNumber||1)+1}else if(e==="mix"){if(t.water<=0||t.mixChecked)return!1;t.batchMixed=!0,t.mixChecked=!0}else if(e==="check"){if(!Fn(n)||!t.mixChecked||t.flowChecked||t.lineClogged||!n.towers.some(i=>i.built)||n.towers.some(i=>i.built&&!i.repaired))return!1;t.flowChecked=!0,t.flowCalibrated=!0,t.systemLessonDone=!0}else return!1;return!0}function f1(n,e,t=Date.now(),i=1){const r=Math.max(0,Math.min(1,e)),s=n.towers.filter(u=>u.built&&u.repaired).flatMap(u=>u.queue);if(!s.length||!r)return;if(!Fn(n)){s.filter(u=>u.readyAt>t-r*1e3).forEach(u=>{u.readyAt+=r*1e3,u.startedAt!==null&&(u.startedAt+=r*1e3)});return}const o=n.hydro,a=o.feedPhase||0,c=u=>Math.floor(u/ga)*ao+Math.min(u%ga,ao),l=c(a+r)-c(a);o.feedPhase=(a+r)%ga,o.water=Math.max(0,o.water-l*u1*s.length*i*(o.lineClogged?.5:1))}const Vt=(n,e,t,i,r="",s={})=>({id:n,title:e,text:t,target:i,selector:r,...s}),Qr=n=>`[data-command="${n}"]`;function sh(n,e=Date.now()){const t=kl(n);if(["sale","expansion","upgrade"].every(g=>t.includes(g)))return Vt("complete","The farm is yours!","You grew, sold, and expanded. More projects are waiting in Goals.",null,"",{complete:!0});if(!n.towers[0].repaired)return Vt("repair","Let's bring this farm to life","Repair Tower 1. The first repair is free.","tower-0",Qr("repair-tower-0"));const i=n.beds.findIndex(g=>g.built&&g.plants.length<g.capacity);if(n.carry?.kind==="starter")return i>=0?Vt("transplant","Next stop: the garden","Transplant this starter into a bed. It needs to finish growing in soil before we can sell it.",`bed-${i}`,Qr(`transplant-${i}`)):Vt("return","No garden space yet","Return this starter to its tower, then harvest a finished bed to make room.",`tower-${n.carry.sourceTower}`,Qr(`return-${n.carry.sourceTower}`));const r=n.carry?.kind==="produce"?n.carry.items:[],s=n.orders.filter(g=>g.status==="waiting"),o=s.find(g=>r.filter(x=>x===g.crop).length>=g.amount);if(r.length){if(t.includes("stage")&&o)return Vt("sell","Meet your customer",`Take ${o.amount} ${Ae[o.crop].label} to ${o.customer}. This is where your harvest earns coins.`,"market","",{orderId:o.id,action:"Deliver"});if(!t.includes("stage")||!o)return Vt("stage","Make room in your basket","Store your harvest on the rack. It stays there until a customer wants it, and your hands are free for starters.","rack",`[data-store-crop="${r[0]}"]`)}if(!Fn(n)){const x=Mo(n).water?"water":"mix";return Vt("service","Our towers need water and feed",x==="water"?"Refill the shared reservoir, then mix its nutrients before planting more.":"Mix nutrients into the shared reservoir. It feeds every tower together.","reservoir",`[data-service="${x}"]`)}if(n.hydro.lineClogged)return Vt("filter","Let's restore the flow","Clear the feed filter so water can reach the towers properly.","filter","[data-flush-line]");const a=n.beds.findIndex(g=>g.built&&g.plants.some(x=>x.readyAt<=e));if(a>=0&&r.length<Ut(n).basket){const g=n.beds[a].plants.find(x=>x.readyAt<=e);return Vt("harvest","Ready for the basket",`Harvest the finished ${Ae[g.crop].label}. Garden produce can be stored or sold.`,`bed-${a}`,`[data-harvest-crop="${g.crop}"]`)}const c=n.towers.findIndex(g=>g.built&&Vi(g,e));if(c>=0){if(i>=0){const x=Vi(n.towers[c],e);return Vt("pickup","A starter is ready!","Pick up one starter from the tower. Each planted layer becomes one garden crop.",`tower-${c}`,`[data-pickup-job="${x.id}"]`)}const g=n.beds.findIndex(x=>x.built&&x.plants.length);return Vt("beds-full","The garden is full","Leave starters in their towers for now. Harvest a bed when its crops finish, then transplant another starter.",`bed-${Math.max(0,g)}`,"",{waiting:!0})}if(t.includes("expansion")&&!t.includes("upgrade")&&n.coins>=gt.bedUpgrade[0])return Vt("upgrade","Invest in a bigger garden",`Buy Bed 1's extra plot for ${gt.bedUpgrade[0]} coins at the Farm Shop. Your second tower unlocked this upgrade.`,"workshop",Qr("upgrade-bed-0"));if(n.taskIndex===3&&!n.market.built&&n.coins>=gt.market)return Vt("market","Let's open for business",`Build the produce table for ${gt.market} coins. Customers will start visiting.`,"market",Qr("build-market"));if(n.taskIndex===5&&!n.towers[1].built&&n.coins>=gt.tower[1])return Vt("expansion","Your first expansion",`Build Tower 2 for ${gt.tower[1]} coins. It also opens a second garden bed.`,"tower-1",Qr("build-tower-1"));const l=Nn(n)||s.find(g=>_n(n,g,e).load)||s[0];if(l&&_n(n,l,e).load)return Vt("load","Someone wants your harvest",`Collect ${Ae[l.crop].label} from the rack for ${l.customer}, then deliver it in person.`,"rack","",{orderId:l.id,action:"Collect order"});if(n.market.built&&!l)return Vt("customers","The next neighbor is on the way","Customers visit in waves. Your rack keeps the harvest safe between visits.","market","",{waiting:!0});let u=l?.crop||"lettuce",d=l?Math.max(1,l.amount-_n(n,l,e).stored):2;!n.market.built&&n.taskIndex>=2&&(u=n.stats.byCropHarvested.lettuce>=2?"basil":"lettuce",d=Math.max(1,2-n.stats.byCropHarvested[u]));const p=[];if(n.towers.forEach((g,x)=>g.queue.filter(v=>v.crop===u).forEach(v=>p.push({target:`tower-${x}`,...v}))),n.beds.forEach((g,x)=>g.plants.filter(v=>v.crop===u).forEach(v=>p.push({target:`bed-${x}`,...v}))),p.length>=d||p.length&&i<0){const g=p.sort((x,v)=>x.readyAt-v.readyAt)[0];return Vt("growing","Let those roots grow",g.target.startsWith("tower")?`${Ae[u].label} is growing in the tower. When its layer is ready, we'll move it to soil.`:`${Ae[u].label} is finishing in the bed. The harvest button lights up when it's ready.`,g.target,"",{waiting:!0})}const f=n.towers.findIndex((g,x)=>g.built&&g.repaired&&Ss(g,n.carry,x).length);if(f<0)return Vt("tower-full","All layers are planted","Wait for a starter, then move it to an open garden bed. No more seeds are needed yet.","tower-0","",{waiting:!0});if(!n.seeds[u]){const g=ja(n,u);return!g.available&&_u(n)?Vt("rescue","Bram can lend a hand","Claim the free emergency lettuce packet. Grow and sell it to get back on your feet.","vault","[data-rescue-seeds]"):g.available?Vt("seeds","Visit Bram's seed shop",g.tutorial?`Claim your first ${Ae[u].label} packet for free under the BUY SEEDS sign. The seeds go into your vault.`:`Buy ${Ae[u].label} seeds for ${g.price} coins. Bram puts the packet in your vault.`,"vault",`[data-collect-crop="${u}"]`):Vt("seed-budget","Let's use what we have",`${g.reason}. Sell stored or growing produce before buying more packets.`,"market")}return Vt("plant","Plant a tower layer",`Choose ${Ae[u].label} at Tower ${f+1}. One seed fills one layer with four leafy pots.`,`tower-${f}`,`[data-queue-crop="${u}"]`)}function p1({host:n,getState:e,save:t,focus:i,pursue:r,visible:s}){const o=document.createElement("aside");o.id="pipCoach",o.className="pip-coach",o.hidden=!0,o.setAttribute("aria-label","Pip's first grow"),o.innerHTML=`<img src="${new URL(""+new URL("pip-mascot-transparent-DujOxSaL.webp",import.meta.url).href,import.meta.url).href}" alt="Pip"><div class="coach-copy" aria-live="polite" aria-atomic="true"><span>PIP'S FIRST GROW</span><strong id="coachTitle"></strong><p id="coachText"></p></div><button id="coachMinimize" class="coach-close" type="button" title="Minimize Pip's help" aria-label="Minimize Pip's help">&#215;</button><div class="coach-actions"><button id="coachGo" type="button">Show me</button><button id="coachSkip" type="button">Skip guide</button></div><div class="coach-confetti" aria-hidden="true">${Array.from({length:8},(y,_)=>`<i style="--piece:${_}"></i>`).join("")}</div>`;const a=document.createElement("button");a.id="coachBubble",a.className="coach-bubble",a.type="button",a.hidden=!0,a.title="Resume Pip's help",a.setAttribute("aria-label","Resume Pip's help"),a.innerHTML=`<img src="${new URL(""+new URL("pip-head-transparent-CKWFf6EM.webp",import.meta.url).href,import.meta.url).href}" alt="">`,n.append(o,a);const c=o.querySelector("#coachTitle"),l=o.querySelector("#coachText"),u=o.querySelector("#coachGo");let d=null,p=null,f=0,g="",x="",v=!1;function m(){e().tutorial.coach.enabled=!1,p=null,t("coach_skip"),M()}o.querySelector("#coachSkip").onclick=m,o.querySelector("#coachMinimize").onclick=()=>{e().tutorial.coach.minimized=!0,t("coach_minimize"),M()},a.onclick=()=>{e().tutorial.coach.minimized=!1,t("coach_resume"),M()},u.onclick=()=>{if(d=sh(e()),d.complete)return m();v=!0,d.orderId?r(d.orderId):d.target&&i(d.target),M()};function M(){const y=e(),_=y.tutorial.coach,P=_.enabled&&s();if(o.hidden=!P||_.minimized,a.hidden=!P||!_.minimized,n.classList.toggle("has-pip-coach",!o.hidden),document.querySelectorAll(".coach-target").forEach(b=>b.classList.remove("coach-target")),!_.enabled)return;const L=kl(y).filter(b=>!_.seen.includes(b));if(L.length&&(_.seen=[...new Set([..._.seen,...L])],P&&!_.minimized&&(p=xu[L.at(-1)],f=performance.now()+1800),t("coach_milestone")),!P)return;d=sh(y);const D=p&&performance.now()<f;o.classList.toggle("is-celebrating",!!D),o.classList.toggle("reduce-motion",y.settings.reducedMotion),o.dataset.step=d.id;const w=D?p:d.title;if(w!==g&&(c.textContent=w,g=w),d.text!==x&&(l.textContent=d.text,x=d.text),u.textContent=d.complete?"Keep growing":d.action||(d.waiting?"Take a look":"Show me"),!o.hidden&&d.selector){const b=[...document.querySelectorAll(d.selector)].find(A=>!A.disabled&&A.getClientRects().length&&!A.closest("[hidden]"));b&&(b.classList.add("coach-target"),v&&(b.scrollIntoView({block:"nearest",behavior:"instant"}),v=!1))}}return{update:M,enable(){const y=e();y.tutorial.coach.enabled=!0,y.tutorial.coach.minimized=!1,y.tutorial.coach.seen=[...new Set([...y.tutorial.coach.seen,...kl(y)])],p=null,t("coach_enabled"),M()},disable:m}}function m1({urls:n,settings:e,canPlay:t,onSystemMute:i}){const r=new Map,s=new Set,o=new WeakMap;let a=document.hidden;const c=()=>!a&&!document.hidden&&t()&&e().soundEnabled!==!1;function l(m){m.muted=!0,m.pause(),o.delete(m)}function u(){r.forEach(l),s.forEach(l),s.clear(),navigator.mediaSession&&(navigator.mediaSession.playbackState="paused")}function d(m,M,y=!1){if(!c()||M<=0)return l(m);if(m.volume=M,m.muted=!1,!m.paused||o.has(m))return;const _={};o.set(m,_),Promise.resolve(m.play()).then(()=>{if(!c()||m.muted||(y?e().musicVolume:e().effectsVolume)<=0)return l(m);o.get(m)===_&&(o.delete(m),y&&navigator.mediaSession&&(navigator.mediaSession.playbackState="playing"))}).catch(()=>{o.get(m)===_&&(l(m),s.delete(m))})}function p(){if(!(!c()||e().musicVolume<=0))for(const[m,M]of[["music",1],["ambience",.56]]){if(!r.has(m)){const y=new Audio(n[m]);y.loop=!0,r.set(m,y)}d(r.get(m),e().musicVolume*M,!0)}}function f(m){if(!c()||e().effectsVolume<=0||!n[m])return;if(s.size>=12){const y=s.values().next().value;l(y),s.delete(y)}const M=new Audio(n[m]);s.add(M),M.addEventListener("ended",()=>s.delete(M),{once:!0}),M.addEventListener("error",()=>{l(M),s.delete(M)},{once:!0}),d(M,e().effectsVolume)}function g(){if(!c())return u();r.forEach((m,M)=>{e().musicVolume<=0?l(m):m.volume=e().musicVolume*(M==="music"?1:.56)}),s.forEach(m=>{e().effectsVolume<=0?(l(m),s.delete(m)):m.volume=e().effectsVolume})}function x(){a=!0,u()}function v(){a=document.hidden}window.addEventListener("blur",x),window.addEventListener("pagehide",x),document.addEventListener("freeze",x),window.addEventListener("focus",v),window.addEventListener("pageshow",v),document.addEventListener("visibilitychange",()=>document.hidden?x():v());for(const m of["pause","stop"])try{navigator.mediaSession?.setActionHandler(m,()=>{u(),i()})}catch{}return{start:p,effect:f,update:g,stop:u}}const _f=matchMedia("(max-width: 620px), (pointer: coarse) and (max-width: 1200px), (pointer: coarse) and (max-height: 600px)"),vt=()=>_f.matches;document.body.classList.toggle("mobile-ui",vt());function g1({canMove:n,onStart:e,onMove:t,onLayout:i,closePanels:r}){const s=document.getElementById("thumbstick"),o=s.querySelector("i");let a=null;function c(){const d=a;a=null,d!==null&&s.hasPointerCapture(d)&&s.releasePointerCapture(d),o.style.transform="translate(0px, 0px)",s.classList.remove("is-active"),t(0,0)}function l(d){if(d.pointerId!==a)return;if(!n())return c();const p=s.getBoundingClientRect(),f=p.width*.3,g=d.clientX-p.left-p.width/2,x=d.clientY-p.top-p.height/2,v=Math.hypot(g,x),m=v>f?f/v:1;o.style.transform=`translate(${g*m}px, ${x*m}px)`;const M=Math.min(1,Math.max(0,(v/f-.12)/.88));t(v?g/v*M:0,v?x/v*M:0)}s.addEventListener("pointerdown",d=>{a!==null||!n()||!vt()||(d.preventDefault(),e(),a=d.pointerId,s.setPointerCapture(a),s.classList.add("is-active"),l(d))}),s.addEventListener("pointermove",l);for(const d of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(d,p=>{p.pointerId===a&&c()});s.addEventListener("contextmenu",d=>d.preventDefault());for(const d of document.querySelectorAll(".task-drawer,.interaction-panel,.order-drawer")){let p=null;d.addEventListener("pointerdown",f=>{!vt()||!f.target.closest("header")||f.target.closest("button")||(p={id:f.pointerId,x:f.clientX,y:f.clientY},d.setPointerCapture(f.pointerId))}),d.addEventListener("pointerup",f=>{if(!p||p.id!==f.pointerId)return;const g=f.clientX-p.x,x=f.clientY-p.y;(innerWidth>620&&innerWidth>innerHeight?g>55&&g>Math.abs(x):x>45&&x>Math.abs(g))&&r(),p=null}),d.addEventListener("pointercancel",()=>{p=null})}function u(){c(),document.body.classList.toggle("mobile-ui",vt()),i()}return _f.addEventListener("change",u),window.addEventListener("resize",u),window.visualViewport?.addEventListener("resize",u),{reset:c}}function v1({onOpen:n,onExit:e,onLeave:t,onResize:i}){const r=ie=>document.getElementById(ie),s=r("displayOverlay"),o=r("fullscreenButton"),a=r("exitFullscreen"),c=r("landscapeNotice"),l=matchMedia("(orientation: landscape)"),u=matchMedia("(display-mode: standalone), (display-mode: fullscreen)"),d=()=>navigator.standalone===!0||u.matches&&!document.fullscreenElement,p=()=>document.fullscreenEnabled===!0&&typeof document.documentElement.requestFullscreen=="function";let f=null,g=null,x=null,v=!1,m=!1,M=!1,y="",_=!1,P=null,C=!1,L=!1,D="",w=null;const b=[...document.querySelectorAll("[data-install-game]")],A=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;let O=!1;try{O=sessionStorage.getItem("hydropipLandscapeHint")==="seen"}catch{}function B(){c.hidden=!0,clearTimeout(x)}function E(){const ie=d(),Ne=p(),Ke=!ie&&(_||!Ne);if(r("displayTitle").textContent=ie?"App view":"Landscape play",r("displayMessage").textContent=y||(ie?"The game is already open without browser bars.":Ne?l.matches?"Landscape is ready for full screen.":"Rotate your phone to landscape for the widest farm view.":"This browser cannot put the whole game into full screen. Landscape still gives you more room."),r("displayInstructions").textContent=ie?"Rotate upright to pause and save. Use the app switcher to close this app, or choose Return to HydroPip from Pause.":Ne?"Tap Full screen after rotating. Rotate upright to pause and exit full screen, or use the exit button at any time.":"On iPhone: open this game in Safari, tap Share, then Add to Home Screen. Turn on Open as Web App if offered, and launch the new icon. Rotate upright to pause; use the app switcher to close it.",r("enterFullscreen").hidden=ie||!Ne,r("enterFullscreen").disabled=v||vt()&&!l.matches,r("displaySaveNote").hidden=ie||Ne,r("displayBackup").hidden=ie||Ne,r("installSteps").hidden=!Ke||L,r("installGame").hidden=!Ke||!P||L,r("installGame").disabled=C,r("keepWindowed").textContent=w?"Back":"Keep playing here",Ke){r("displayTitle").textContent="Add HydroPip",r("displayMessage").textContent=D||"Keep Pip on your Home Screen. No App Store needed.",r("displayInstructions").textContent=L?"Open the new HydroPip icon on your Home Screen or in your apps.":A?"On iPhone, use Safari to Add to Home Screen.":P?"Your browser can install HydroPip. Confirm the next browser prompt.":"Use your browser menu to Install app or Add to Home Screen. If neither appears, open this game in Safari on iPhone or Chrome on Android.";const X=A?["Open this game in Safari, then tap Share.","Choose Add to Home Screen. Turn on Open as Web App if offered.","Tap Add, then open the HydroPip icon."]:P?["Tap Install game below, then confirm Install.","Open the HydroPip icon."]:["Open the browser menu.","Choose Install app or Add to Home Screen, then confirm."];r("installSteps").replaceChildren(...X.map(xe=>{const fe=document.createElement("li");return fe.textContent=xe,fe})),r("displaySaveNote").hidden=L,r("displayBackup").hidden=L,r("enterFullscreen").hidden=!0}}function F(){B(),s.hidden&&(g=document.activeElement,f=n()),s.hidden=!1,E(),r("closeDisplay").focus()}function k(ie=!0){s.hidden||(s.hidden=!0,w&&(w.hidden=!1,w=null),f?.(),f=null,ie&&g?.isConnected&&g.focus())}function H(){m=!1,k(!1),B(),e()}async function N(){if(!v){if(!p()||d()||vt()&&!l.matches){y="",F();return}v=!0;try{await document.documentElement.requestFullscreen({navigationUI:"hide"}),y="",k(),B(),Q()}catch{y="Full screen was not allowed. You can keep playing here, or try again from your browser.",F()}finally{v=!1,s.hidden||E()}}}async function $(){if(H(),document.fullscreenElement)try{await document.exitFullscreen()}catch{y="Use your browser full-screen exit control to return.",F()}}function Q(){const ie=!!document.fullscreenElement,Ne=d();b.forEach(He=>{He.hidden=Ne||L,He.textContent=P?"Install HydroPip":"Add to Home Screen"}),document.body.classList.toggle("is-app-window",ie||Ne),o.hidden=ie||Ne,a.hidden=!ie&&!Ne,a.setAttribute("aria-label",ie?"Exit full screen and pause":"Pause and leave game"),a.title=ie?"Exit full screen and pause":"Pause and leave game",o.textContent=ie||Ne?"×":"⛶";const Ke=ie?"Exit full screen and pause":Ne?"Pause and leave game":"Full screen options";o.setAttribute("aria-label",Ke),o.title=Ke,o.setAttribute("aria-pressed",String(ie));const X=document.activeElement?.matches("input,textarea,select");vt()&&!X&&(ie||Ne)&&l.matches&&(m=!0);const xe=vt()&&!X&&!l.matches&&m,fe=M&&!ie;M=ie,xe?$():fe&&H(),s.hidden||E(),c.hidden||(r("landscapeNoticeText").textContent=l.matches?p()?"Tap for full screen. Rotate upright to pause.":"Landscape play. View full-screen options.":"Rotate for a wider farm."),requestAnimationFrame(i)}b.forEach(ie=>ie.addEventListener("click",()=>{_=!0,y="",D="",w=ie.closest(".modal-overlay"),F(),w&&(w.hidden=!0)})),window.addEventListener("beforeinstallprompt",ie=>{ie.preventDefault(),P=ie,Q()}),window.addEventListener("appinstalled",()=>{L=!0,P=null,D="HydroPip is installed.",Q()}),r("installGame").addEventListener("click",async()=>{if(!P||C)return;const ie=P;P=null,C=!0;try{D=(await ie.prompt()||await ie.userChoice)?.outcome==="accepted"?"Install accepted. Look for the HydroPip icon when your browser finishes.":"Not installed. You can keep playing here and add it later."}catch{D="Installation could not open. Use the browser menu, or keep playing here."}finally{C=!1,Q()}});function ae(){if(!(O||!vt()||document.hidden||document.querySelector(".modal-overlay:not([hidden])"))){O=!0;try{sessionStorage.setItem("hydropipLandscapeHint","seen")}catch{}d()||(c.hidden=!1,Q(),x=setTimeout(B,7e3))}}o.addEventListener("click",()=>{_=!1,document.fullscreenElement||d()?$():N()}),a.addEventListener("click",()=>{$()}),r("landscapeOptions").addEventListener("click",()=>{_=!1,N()}),r("dismissLandscapeNotice").addEventListener("click",B),r("enterFullscreen").addEventListener("click",()=>{N()}),r("closeDisplay").addEventListener("click",()=>k()),r("keepWindowed").addEventListener("click",()=>k()),r("displayBackup").addEventListener("click",()=>{k(!1),r("settingsOverlay").hidden&&r("settingsButton").click(),r("exportSave").scrollIntoView({block:"center"}),r("exportSave").focus()}),r("leaveGame").addEventListener("click",t),r("beginCampaign").addEventListener("click",ae),document.addEventListener("fullscreenchange",Q),l.addEventListener("change",Q),u.addEventListener("change",Q),window.addEventListener("resize",Q),document.addEventListener("visibilitychange",()=>{document.hidden&&B()}),document.addEventListener("keydown",ie=>{if(!s.hidden&&(ie.key==="Escape"&&(ie.preventDefault(),ie.stopImmediatePropagation(),k()),ie.key==="Tab")){const Ne=[...s.querySelectorAll("button:not(:disabled),a[href]")].filter(xe=>xe.getClientRects().length),Ke=Ne[0],X=Ne.at(-1);ie.shiftKey&&document.activeElement===Ke?(ie.preventDefault(),X.focus()):!ie.shiftKey&&document.activeElement===X&&(ie.preventDefault(),Ke.focus())}},!0),Q(),requestAnimationFrame(ae)}function x1(n,e,t=Date.now()){if(n.chapter<1)return!1;const i=n.towers.filter(o=>o.built&&o.repaired).flatMap(o=>o.queue.filter(a=>a.readyAt>t));if(!i.length)return!1;const r=Math.max(0,Math.min(e,1)),s=n.hydro;return s.lineClogged?(i.forEach(o=>{o.readyAt+=r*500}),!1):(s.lineRunSeconds+=r,s.lineRunSeconds<s.lineClogAfter?!1:(s.lineClogged=!0,!0))}function _1(n,e=Math.random){return n.hydro.lineClogged?(n.hydro.lineClogged=!1,n.hydro.lineRunSeconds=0,n.hydro.lineClogAfter=240+Math.floor(e()*121),!0):!1}const yf=["127.0.0.1","localhost"].includes(location.hostname)&&new URLSearchParams(location.search).has("test"),co=yf&&!new URLSearchParams(location.search).has("realtime")?.012:1,Es=vt(),So=/HeadlessChrome/i.test(navigator.userAgent),y1={"seed-pickup":new URL(""+new URL("seed-pickup-CAHmd7zc.wav",import.meta.url).href,import.meta.url).href,plant:new URL(""+new URL("plant-OZHmKUrR.wav",import.meta.url).href,import.meta.url).href,pickup:new URL(""+new URL("pickup-BP6zBWsE.wav",import.meta.url).href,import.meta.url).href,transplant:new URL(""+new URL("transplant-ByuaeTUQ.wav",import.meta.url).href,import.meta.url).href,harvest:new URL(""+new URL("harvest-BPj-n7q9.wav",import.meta.url).href,import.meta.url).href,rack:new URL(""+new URL("rack-BXIXSV4Z.wav",import.meta.url).href,import.meta.url).href,return:new URL(""+new URL("return-B7_saD0o.wav",import.meta.url).href,import.meta.url).href,sale:new URL(""+new URL("sale-DHHLIj-t.wav",import.meta.url).href,import.meta.url).href,repair:new URL(""+new URL("repair-BH8WY1JO.wav",import.meta.url).href,import.meta.url).href,build:new URL(""+new URL("build-DlE-ni3d.wav",import.meta.url).href,import.meta.url).href,"level-up":new URL(""+new URL("level-up-Cr_FX5st.wav",import.meta.url).href,import.meta.url).href,"task-complete":new URL(""+new URL("task-complete-kxblrCmv.wav",import.meta.url).href,import.meta.url).href,"chapter-complete":new URL(""+new URL("chapter-complete-B0bpPvE9.wav",import.meta.url).href,import.meta.url).href,error:new URL(""+new URL("error-BplsGajU.wav",import.meta.url).href,import.meta.url).href,"order-reject":new URL(""+new URL("order-reject-w7AxRbDQ.wav",import.meta.url).href,import.meta.url).href,service:new URL(""+new URL("service-DnymfeYl.wav",import.meta.url).href,import.meta.url).href,music:new URL(""+new URL("garden-loop-_0sf0c8-.wav",import.meta.url).href,import.meta.url).href,ambience:new URL(""+new URL("farm-ambient-BpMfQsJu.wav",import.meta.url).href,import.meta.url).href},ne=n=>document.querySelector(n),nn=ne("#campaignScene"),b1=ne("#farmStage"),Qa=ne("#objectiveBar"),ni=ne("#taskDrawer"),Bn=ne("#homesteadDrawer"),ii=ne("#interactionPanel"),un=ne("#interactionContent"),dn=ne("#orderDrawer"),yn=ne("#welcomeOverlay"),w1=ne("#pauseOverlay"),sn=ne("#chapterOverlay"),bi=ne("#settingsOverlay"),Dr=ne("#resetOverlay"),Ts=ne("#actionButton"),Sr=ne("#marketChip"),lo=ne("#campaignMessage"),bf=ne("#carryChip"),Re={coins:ne("#coinValue"),level:ne("#levelValue"),xp:ne("#xpValue"),xpFill:ne("#xpFill"),chapter:ne("#chapterValue"),objectiveChapter:ne("#objectiveChapter"),objectiveTitle:ne("#objectiveTitle"),objectiveProgress:ne("#objectiveProgress"),taskChapter:ne("#taskChapter"),taskTitle:ne("#taskTitle"),taskStory:ne("#taskStory"),primaryTaskTitle:ne("#primaryTaskTitle"),primaryTaskDetail:ne("#primaryTaskDetail"),primaryTaskReward:ne("#primaryTaskReward"),chapterTaskList:ne("#chapterTaskList"),interactionKicker:ne("#interactionKicker"),interactionTitle:ne("#interactionTitle"),interactionSummary:ne("#interactionSummary"),orderList:ne("#orderList"),rackSummary:ne("#rackSummary"),carryKind:ne("#carryKind"),carryContents:ne("#carryContents"),chapterResultKicker:ne("#chapterResultKicker"),chapterResultTitle:ne("#chapterResultTitle"),chapterResultSummary:ne("#chapterResultSummary"),chapterCoins:ne("#chapterCoins"),chapterXp:ne("#chapterXp"),chapterUnlock:ne("#chapterUnlock"),musicValue:ne("#musicValue"),effectsValue:ne("#effectsValue"),marketChipCustomer:ne("#marketChipCustomer"),marketChipDemand:ne("#marketChipDemand")},nt={vault:new I(-11,0,-5),reservoir:new I(-11,0,2.6),filter:new I(-9,0,4.5),market:new I(11,0,-4.4),rack:new I(8,0,-5),workshop:new I(11,0,5),composter:new I(-7,0,6.9),coop:new I(2,0,6.9),rainTank:new I(-12,0,6.5),"tower-0":new I(-7,0,2.4),"tower-1":new I(-3,0,2.4),"tower-2":new I(1,0,2.4),"tower-3":new I(5,0,2.4),"bed-0":new I(-7,0,-3.2),"bed-1":new I(-3,0,-3.2),"bed-2":new I(1,0,-3.2),"bed-3":new I(5,0,-3.2)};let h=Ir(bu());const gi=l1({balance:Re.coins,reducedMotion:()=>h.settings.reducedMotion,mobile:vt});let wf=null;const Ca={x:0,z:0};let Ra=!1;const Pa=Fy(Bn,Ae,Zf);let Rt=!1,Bt=null,di=null,Gn=null,hi=null;const Xs=[],zc=new Map,Di=Oy;let oh=performance.now(),ah=0,Mf=performance.now(),va=0,Hs=null;const Ni=m1({urls:y1,settings:()=>h.settings,canPlay:()=>!Rt&&yn.hidden&&bi.hidden&&sn.hidden&&Dr.hidden,onSystemMute:()=>{h.settings.soundEnabled=!1,Cs(),Xe("system_mute")}});let Zn=1,sa=new I(0,0,0),uo=[],Wn=1,Mn=1,zl=null,Sf="",La=So?"software-test":Es?"mobile":"desktop",Hc=performance.now(),Vc=0;const vn={left:!1,right:!1,up:!1,down:!1},Ys=[],Ia=p1({host:b1,getState:()=>h,save:Xe,focus:Yt,pursue:Vf,visible:()=>!Rt&&h.tutorial.welcomeSeen&&yn.hidden&&sn.hidden&&bi.hidden&&Dr.hidden&&ni.hidden&&Bn.hidden});let ch=0;const bt=new dy({antialias:!Es&&!So,powerPreference:"high-performance"});bt.setPixelRatio(Math.min(window.devicePixelRatio||1,So?1:Es?1.25:1.55));bt.outputColorSpace=en;bt.toneMapping=fh;bt.toneMappingExposure=1.08;bt.shadowMap.enabled=!Es&&!So;bt.shadowMap.type=dh;nn.appendChild(bt.domElement);const Da=document.createElement("div");Da.className="world-labels";nn.appendChild(Da);const Ua=document.createElement("canvas").getContext("2d"),vi=new iu;vi.background=new st(10475727);vi.fog=new nu(10475727,28,58);const Ct=new wn(35,1,.1,80),Gc=new Wh,Wc=new ge,tn=new Ie,mt=new Ie,Rr=new Ie;vi.add(tn,mt,Rr);const rs=xy();tn.add(rs.root);function qt(n,e={}){return new mi({color:n,...e})}const ue={grass:qt(16777215),grassDark:qt(5405027),path:qt(13223602),soil:qt(8014385),wood:qt(10123101),woodDark:qt(5720899),white:qt(15922411),shell:qt(14411490),dark:qt(1055253),lime:qt(13168479),amber:qt(16762954),water:new Hi({color:6542566,roughness:.18,metalness:.02,transparent:!0,opacity:.78}),coral:qt(15823190),metal:qt(11453113),ink:new Ot({color:729368,side:xn})},M1=new uu(15398143,4742736,.95);vi.add(M1);const ri=new Va(16772559,1.45);ri.position.set(-8,16,9);ri.castShadow=bt.shadowMap.enabled;ri.shadow.mapSize.set(1024,1024);ri.shadow.camera.left=-14;ri.shadow.camera.right=14;ri.shadow.camera.top=11;ri.shadow.camera.bottom=-11;ri.shadow.bias=-7e-4;vi.add(ri);const Ef=new Va(12049640,.35);Ef.position.set(11,8,-8);vi.add(Ef);function si(n,e){return n.userData.interactiveId=e,n.traverse(t=>{t.userData.interactiveId=e}),n}function Qe(n,e,t,i,r=!0){const s=new ce(new Gt(...e),i);return s.position.set(...t),s.castShadow=r,s.receiveShadow=r,n.add(s),s}function Ur(n,e=.045){if(Es)return n;const t=[];return n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i.userData.inkOutline||!i.geometry||/PlaneGeometry|CircleGeometry/.test(i.geometry.type))return;i.geometry.boundingSphere||i.geometry.computeBoundingSphere();const r=i.geometry.boundingSphere?.radius||0,s=Math.max(i.scale.x,i.scale.y,i.scale.z);if(r*s<.36)return;const o=Array.isArray(i.material)?i.material[0]:i.material;o!==ue.soil&&(o?.transparent&&o.opacity<.85||t.push(i))}),t.forEach(i=>{const r=new ce(i.geometry,ue.ink);r.userData.inkOutline=!0,r.scale.setScalar(1+Math.min(e,.022)),r.castShadow=!1,r.receiveShadow=!1,i.add(r)}),n}function S1(n,e=256){const t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");n(i,e);const r=new su(t);return r.colorSpace=en,r.wrapS=r.wrapT=xa,r}function E1(){T1();const n=S1((c,l)=>{c.fillStyle="#78a875",c.fillRect(0,0,l,l);for(let u=0;u<90;u+=1){c.fillStyle=u%2?"rgba(206,219,147,.08)":"rgba(44,86,69,.06)";const d=u*73%l,p=u*47%l;c.fillRect(d,p,12+u%17,3+u%5)}for(let u=0;u<900;u+=1){const d=u%3?"rgba(31,93,52,.18)":"rgba(211,231,149,.12)";c.fillStyle=d,c.fillRect(Math.random()*l,Math.random()*l,1,3+Math.random()*3)}});n.repeat.set(7,5),ue.grass.map=n;const e=new ce(new Gt(30,.65,19.5),ue.grassDark);e.position.y=-.38,e.receiveShadow=!0,tn.add(e);const t=new ce(new Un(29.5,19),ue.grass);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,tn.add(t);const i=new ce(new Un(27.8,1.45),ue.path);i.rotation.x=-Math.PI/2,i.position.set(0,.012,-6.7),i.receiveShadow=!0,tn.add(i);const r=new ce(new Un(1.25,12),ue.path);r.rotation.x=-Math.PI/2,r.position.set(-9.6,.014,-1),tn.add(r);const s=[];for(let c=-14.5;c<=14.5;c+=1.5)s.push([c,.28,-9.4],[c,.28,9.4]);for(let c=-8.5;c<=8.5;c+=1.5)s.push([-14.6,.28,c],[14.6,.28,c]);const o=new Tr(new Gt(.14,.72,.14),ue.woodDark,s.length),a=new Dt;s.forEach((c,l)=>{a.position.set(...c),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}),o.castShadow=!0,tn.add(o),[-14.6,14.6].forEach(c=>Qe(tn,[.07,.12,19],[c,.37,0],ue.wood)),[-9.4,9.4].forEach(c=>Qe(tn,[29.3,.12,.07],[0,.37,c],ue.wood));for(let c=-13.7;c<=13.7;c+=1.5){const l=new ce(new ou(.48+Math.random()*.1,1),ue.grassDark);l.position.set(c,.3,8.85+Math.sin(c)*.08),l.castShadow=!0,tn.add(l)}for(let c=0;c<10;c+=1){const l=new ce(new En(.07,8,6),c%2?ue.amber:ue.coral);l.position.set(-12.7+c*2.55,.13,8.1+Math.sin(c)*.25),l.castShadow=!0,tn.add(l)}A1()}function T1(){const n=new Un(90,90,40,40);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count*3);for(let f=0;f<e.count;f+=1){const g=e.getX(f),x=e.getZ(f),v=Math.max(Math.abs(g)-27,Math.abs(x)-18,0),M=It.smoothstep(Math.abs(x+12.2),1.8,5)*Math.min(1,v/14)*(1.3+Math.sin(g*.15)*Math.cos(x*.12)*1.2);e.setY(f,-.16+M);const y=(Math.sin(g*.26+Math.cos(x*.31))+Math.cos(x*.22))*.025;new st().setHSL(.285+Math.sin(g*.12)*.016,.23+y,.54+y).toArray(t,f*3)}n.setAttribute("color",new Dn(t,3)),n.computeVertexNormals();const i=qt(16777215);i.vertexColors=!0;const r=new ce(n,i);r.name="surrounding meadow",r.receiveShadow=!0,tn.add(r);const s=new ce(new Un(80,2.8),ue.path);s.rotation.x=-Math.PI/2,s.position.set(0,-.1,-12.2),s.receiveShadow=!0,tn.add(s);const o=new ce(new Un(1.5,7),ue.path);o.rotation.x=-Math.PI/2,o.position.set(16.2,-.09,-7.5),tn.add(o);const a=[[-15,-4],[-17,2],[-16,8],[-13,-12],[-8,-14],[-2,-15],[4,-14],[10,-13],[16,-11],[18,-5],[18,2],[17,8],[22,-16],[-22,-18]],c=new Tr(new ht(.12,.19,2.3,7),ue.woodDark,a.length),l=new Tr(new xo(1,1),qt(16777215),a.length*5),u=new Dt;a.forEach(([f,g],x)=>{const v=.85+x%4*.14;f*=1.2,g*=1.2,u.position.set(f,1,g),u.scale.set(1,1,1),u.updateMatrix(),c.setMatrixAt(x,u.matrix);for(let m=0;m<5;m+=1){const M=m*2.4+x;u.position.set(f+Math.cos(M)*(m===4?.15:.85),2.4+(m===4?1.1:m%2*.4),g+Math.sin(M)*.7),u.scale.set(1.02*v,.85*v,.95*v),u.updateMatrix(),l.setMatrixAt(x*5+m,u.matrix),l.setColorAt(x*5+m,new st(m===4?9550183:[5801823,7381611,6396536][(x+m)%3]))}}),c.castShadow=l.castShadow=!0,tn.add(c,l);const d=new Ie;d.name="neighboring farm shed",d.position.set(-19,-.05,-18),Qe(d,[2.6,1.8,2.3],[0,.9,0],qt(14014670));const p=new ce(new _i(2.05,1.1,4),qt(11428701));p.rotation.y=Math.PI/4,p.position.y=2.28,d.add(p),Qe(d,[.65,1.23,.06],[-.42,.62,1.18],ue.woodDark),Qe(d,[.62,.58,.07],[.61,1.1,1.18],ue.shell),Qe(d,[.48,.44,.08],[.61,1.1,1.2],qt(6790308)),tn.add(d)}function A1(){const n=new Ie;n.position.set(11,0,12);const e=new Hi({color:12379356,transparent:!0,opacity:.42,roughness:.15,side:cn});Qe(n,[4.6,.12,2.5],[0,.05,0],ue.path),Qe(n,[4.4,2.2,.08],[0,1.1,-1.12],e,!1);for(let r=-2;r<=2;r+=1)Qe(n,[.05,2.4,2.3],[r*1.05,1.15,0],ue.metal);const t=Qe(n,[2.7,.08,2.35],[-1.05,2.35,0],e,!1);t.rotation.z=-.38;const i=Qe(n,[2.7,.08,2.35],[1.05,2.35,0],e,!1);i.rotation.z=.38,tn.add(n)}function wi(n,e="#f4bd4d"){Ua.font="700 15px system-ui";const t=Math.ceil(Ua.measureText(n).width)+24,i=new Dt,r=document.createElement("button");r.type="button",r.className="world-label",r.textContent=n,r.hidden=!0,r.style.width=`${t}px`,r.style.borderColor=e;for(const s of["pointerdown","pointerup"])r.addEventListener(s,o=>o.stopPropagation());return r.addEventListener("click",s=>{s.stopPropagation(),!(Rt||!yn.hidden||!sn.hidden)&&(kr(),i.userData.interactiveId&&Yt(i.userData.interactiveId,vt()))}),i.labelElement=r,i.userData.worldLabel={text:n,width:t,height:30,fontSize:15},i}function Tf(n,e,t){const i=new Ie;for(const s of[-.65,.65])for(const o of[-.5,.5])Qe(i,[.09,.48,.09],[s,.24,o],ue.woodDark),Qe(i,[.12,.07,.12],[s,.45,o],ue.amber);for(const s of[-.5,.5])Qe(i,[1.3,.025,.025],[0,.28,s],ue.straw||ue.wood);for(const s of[-.65,.65])Qe(i,[.025,.025,1],[s,.28,0],ue.wood);Qe(i,[.12,.85,.1],[0,.425,0],ue.woodDark),Qe(i,[.72,.32,.07],[0,.75,0],ue.wood);const r=wi(e,"#f4bd4d");return r.position.y=1.2,i.add(r),i.position.copy(t),Mt(i),Ur(i,.04),si(i,n)}function C1(n){const e=nt[n];if(!e||Bt===n)return null;const t=new Ie;t.userData.guideMarker=!0,t.userData.baseY=e.y;const i=new ce(new zi(1.08,36),new Ot({color:16039245,transparent:!0,opacity:.16,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.012;const r=new ce(new Sn(.92,.045,8,44),new Hi({color:16039245,emissive:5057797,emissiveIntensity:.26,roughness:.38,transparent:!0,opacity:.92,depthWrite:!1}));r.rotation.x=Math.PI/2;const s=new ce(new _i(.18,.36,3),ue.amber);return s.rotation.z=Math.PI,s.position.y=.34,t.add(i,r,s),t.position.copy(e),t}function R1(n,e){const t=new Ie,i=new ce(new zi(.98,24),new Ot({color:1194533,transparent:!0,opacity:.27,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.018,t.add(i);const r=new ce(new ht(.75,.85,.22,24),ue.shell);r.position.y=.14,t.add(r);const s=new ce(new ht(.13,.16,2.5,12),ue.metal);s.position.set(0,1.46,-.15),t.add(s);const o=new ce(new ht(.065,.065,2.4,8),ue.water);o.position.set(0,1.42,-.42),t.add(o);const a=[];for(let u=0;u<4;u++){const d=new Ie;d.name=`stacked planter ${u+1}`;const p=u%2?.16:-.16,f=.52+u*.61,g=.29-u*.18;d.position.set(p,f,g);const x=e.repaired?ue.white:ue.metal,v=new ce(new ht(.64,.4,.35,24,1,!0),x);d.add(v);const m=new ce(new ht(.4,.4,.05,20),ue.shell);m.position.y=-.17,d.add(m);const M=new ce(new Sn(.64,.055,7,24),ue.shell);M.rotation.x=Math.PI/2,M.position.y=.18,d.add(M);const y=new ce(new zi(.585,24),ue.soil);y.rotation.x=-Math.PI/2,y.position.y=.15,d.add(y),Mt(d),t.add(d);for(let _=0;_<3;_++){const P=_*Math.PI*2/3+.35;a.push({x:p+Math.cos(P)*.27,y:f+.19,z:g+Math.sin(P)*.27,turn:u*1.4+_})}}for(const u of t.children.filter(d=>d.name.startsWith("stacked planter"))){u.updateMatrix();for(const d of[...u.children]){const p=new ce(d.geometry.clone().applyMatrix4(u.matrix),d.material);t.add(p),u.remove(d),d.geometry.dispose()}}Mt(t);const c=e.queue.filter(u=>u.readyAt!==null&&u.readyAt<=$e()),l=wi(e.repaired?c.length?`${c.length} layer${c.length>1?"s":""} ready`:`Tower ${n+1}`:"REPAIR PLANTER",c.length?"#b9df63":"#69cbd3");l.position.set(0,3.95,0),t.add(l);for(const u of e.queue){const d=u.readyAt?It.clamp(($e()-u.startedAt)/Math.max(1,u.readyAt-u.startedAt),0,1):0,p=Af(u.crop,d,a.slice(u.layer*3,u.layer*3+3),u.crop==="tomato"?.85:1.2);p.userData.growthTiming={startedAt:u.startedAt,readyAt:u.readyAt,size:u.crop==="tomato"?.85:1.2},p.userData.towerIndex=n,p.userData.jobId=u.id,p.userData.layer=u.layer,t.add(p)}return t.position.copy(nt[`tower-${n}`]),Ur(t,.036),si(t,`tower-${n}`)}function P1(n,e=.28,t=.11,i=!1){const r=new Ar;r.moveTo(0,0),i?[[.15,.65],[.28,1],[.43,.7],[.58,.96],[.75,.6],[1,0],[.75,-.6],[.58,-.96],[.43,-.7],[.28,-1],[.15,-.65]].forEach(([a,c])=>r.lineTo(a*e,c*t)):(r.bezierCurveTo(e*.2,t,e*.72,t,e,0),r.bezierCurveTo(e*.72,-t,e*.2,-t,0,0));const s=new so(r,{depth:.018,bevelEnabled:!1,curveSegments:5});s.rotateX(-Math.PI/2);const o=new ce(s,n);return o.castShadow=!0,o}function As(n,e=1){const t=Ae[n],i=new Ie,r=t.family==="fruit",s=qt(r?4685648:n==="lettuce"?6399295:t.color,{side:cn}),o=qt(r?8894309:t.accent,{side:cn}),a=["lettuce","strawberry"].includes(n),c=n==="tomato"?.8:a?.16:.52,l=new ce(new ht(.025,.05,c,7),ue.grassDark);l.position.y=c/2,i.add(l);const u=n==="lettuce"||n==="kale"?12:10;for(let p=0;p<u;p+=1){const f=p/u*Math.PI*2,g=P1(p%3?s:o,n==="lettuce"?.46:n==="tomato"?.34:.36,n==="lettuce"?.25:n==="basil"?.15:.14,["kale","tomato"].includes(n));g.rotation.set(0,-f,n==="kale"?.7:.18+p%3*.09),g.position.set(0,a?.08+p%3*.045:.16+p%3*.14,0),i.add(g)}if(n==="tomato"){const p=new ce(new ht(.018,.025,1.05,6),ue.wood);p.position.set(-.1,.52,-.05),i.add(p);for(let f=0;f<3;f+=1){const g=new ce(new En(.085,12,8),ue.coral);g.position.set(f%2?-.2:.2,.3+f*.16,.15),g.visible=e>=.72,g.userData.ripeningFruit=!0,i.add(g)}}if(n==="strawberry")for(let p=0;p<3;p+=1){const f=new ce(new _i(.075,.14,10),ue.coral);f.rotation.z=Math.PI,f.position.set(Math.cos(p*2.1)*.21,.18,Math.sin(p*2.1)*.21),f.visible=e>=.72,f.userData.ripeningFruit=!0,i.add(f)}const d=e>=1?1:e>=.66?.78:e>=.33?.52:.28;return i.scale.setScalar(d),i.userData.crop=n,i.userData.campaignCrop=!0,i.userData.swayPhase=ei.indexOf(n)*.8+Math.random()*.4,i.userData.growthStage=e>=1?3:e>=.66?2:e>=.33?1:0,i}function Af(n,e,t,i){const r=As(n,1),s=new Set(r.children.filter(c=>c.geometry?.type==="ExtrudeGeometry").map(c=>c.material)),o=r.children.filter(c=>c.userData.ripeningFruit);if(o.forEach(c=>r.remove(c)),Mt(r),o.length){const c=new Ie;o.forEach(l=>c.add(l)),Mt(c),[...c.children].forEach(l=>{l.userData.ripeningFruit=!0,l.userData.fruitPerInstance=o.length,r.add(l)})}const a=new Ie;return a.userData.crop=n,a.userData.plantingPlacements=t,a.userData.foliageMaterials=[],r.children.forEach(c=>{if(!c.isMesh)return;c.updateMatrix();const l=c.material.clone(),u=new Tr(c.geometry.clone(),l,t.length);u.castShadow=!0,u.receiveShadow=!0,u.userData.plantPartMatrix=c.matrix.clone(),u.userData.ripeningFruit=!!c.userData.ripeningFruit,u.userData.fruitPerInstance=c.userData.fruitPerInstance||1,s.has(c.material)&&a.userData.foliageMaterials.push(l),a.add(u)}),Oi(r),Cf(a,e,i),a}function Cf(n,e,t){const i=e>=1?3:e>=.66?2:e>=.33?1:0,r=[.28,.52,.78,1][i]*t,s=e>=.72;if(n.userData.growthScale===r&&n.userData.ripe===s)return;n.userData.growthStage=i,n.userData.growthScale=r,n.userData.ripe=s;const o=new Dt;n.children.forEach(a=>{a.isInstancedMesh&&(n.userData.plantingPlacements.forEach((c,l)=>{o.position.set(c.x,c.y,c.z),o.rotation.set(0,c.turn||0,0),o.scale.setScalar(r),o.updateMatrix(),a.setMatrixAt(l,o.matrix.clone().multiply(a.userData.plantPartMatrix))}),a.visible=!a.userData.ripeningFruit||s,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere())})}function L1(){const n=$e();mt.traverse(e=>{const t=e.userData.growthTiming;if(!t)return;if(e.userData.towerIndex!==void 0){const s=h.towers[e.userData.towerIndex].queue.find(o=>o.id===e.userData.jobId);s&&(t.readyAt=s.readyAt,t.startedAt=s.startedAt)}const i=It.clamp((n-t.startedAt)/Math.max(1,t.readyAt-t.startedAt),0,1);if(e.userData.plantingPlacements){Cf(e,i,t.size);return}const r=i>=1?3:i>=.66?2:i>=.33?1:0;e.userData.growthStage=r,e.scale.setScalar([.28,.52,.78,1][r]*t.size),e.children.forEach(s=>{s.userData.ripeningFruit&&(s.visible=i>=.72)})}),lf(mt)}function I1(n,e){const t=new Ie;if(n===0&&rn(h.farm,"soilKit")){const o=vu("soilKit",h.farm);o.position.set(1.65,0,.1),t.add(o)}const i=new ce(new Un(2.7,1.6),new Ot({color:1587492,transparent:!0,opacity:.22,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.015,t.add(i),Qe(t,[2.45,.38,1.35],[0,.2,0],ue.wood),Qe(t,[2.08,.23,1.02],[0,.42,0],ue.soil);for(let o=-1;o<=1;o+=1)Qe(t,[1.85,.035,.045],[0,.56,o*.27],ue.woodDark,!1);if(e.capacity>=3)for(const o of[-1.15,1.15])for(const a of[-.6,.6])Qe(t,[.1,.7,.1],[o,.35,a],ue.woodDark);e.capacity>=4&&Qe(t,[2.4,.12,.12],[0,.7,-.6],ue.wood);const r=e.capacity<=2?[[-.53,0],[.53,0]]:[[-.53,-.26],[.53,-.26],[-.53,.26],[.53,.26]];e.plants.forEach((o,a)=>{const c=It.clamp((Date.now()-o.plantedAt)/Math.max(1,o.readyAt-o.plantedAt),0,1),l=e.capacity<=2?1.08:.94,u=e.capacity<=2?[{x:-.17,y:0,z:-.2},{x:.17,y:0,z:.2,turn:1.1},{x:.15,y:0,z:-.13,turn:2.4}]:[{x:-.18,y:0,z:0},{x:.18,y:0,z:0,turn:1.4}],d=Af(o.crop,c,u,l);d.userData.growthTiming={startedAt:o.plantedAt,readyAt:o.readyAt,size:l},d.position.set(r[a][0],.54,r[a][1]),t.add(d)});const s=wi(`Bed ${n+1}: ${e.plants.length}/${e.capacity}`,"#b9df63");return s.position.set(0,e.plants.length?1.95:1.05,0),s.visible=Bt===`bed-${n}`,t.add(s),t.position.copy(nt[`bed-${n}`]),Ur(t,.034),si(t,`bed-${n}`)}function D1(){const n=new Ie;if(Qe(n,[2.25,1.15,1.45],[0,.58,0],ue.white),Qe(n,[2.38,.18,1.58],[0,1.22,0],ue.lime),h.seedShop.expanded){Qe(n,[.72,1.05,1.3],[-1.52,.53,0],ue.wood);for(const a of[.25,.55,.85])Qe(n,[.62,.23,.06],[-1.52,a,.68],ue.lime),Qe(n,[.16,.04,.06],[-1.52,a,.73],ue.metal)}const e=new ce(new ht(.22,.28,.68,14),ue.metal);e.rotation.z=Math.PI/2,e.position.set(1.35,.78,0),n.add(e);const t=Wa({skin:"#c99069",hair:"#e5d8b7",color:"#b9547f",accessory:"glasses"});t.name="Bram the seed merchant",t.updateMatrixWorld(!0);const i=[];t.traverse(a=>{a.isMesh&&i.push(a)}),i.forEach(a=>t.attach(a)),t.userData.rig=null;const r=new ce(new ht(.48,.48,.06,20),ue.lime);r.position.y=2,t.add(r);const s=new ce(new _i(.27,.48,16),ue.lime);s.position.set(.06,2.22,0),s.rotation.z=-.2,t.add(s),Mt(t),t.position.set(2.2,0,.1),t.rotation.y=.35,n.add(t),Qe(n,[.9,.55,.62],[1.9,.38,.85],ue.wood);for(const a of[1.55,2.25]){const c=new ce(new ht(.19,.19,.08,12),ue.metal);c.rotation.z=Math.PI/2,c.position.set(a,.2,.85),n.add(c)}for(let a=0;a<3;a++)Qe(n,[.2,.28,.1],[1.62+a*.26,.79,.85],a%2?ue.coral:ue.lime);zy(n,Qe,ue),Mt(n);const o=wi("BRAM'S SEEDS","#b9df63");return o.position.set(0,3.85,0),n.add(o),n.position.copy(nt.vault),Ur(n,.038),si(n,"vault")}function U1(){const n=Gy(h.hydro.water),e=wi("RESERVOIR","#69cbd3");return e.name="reservoir label",e.position.set(0,1.95,0),n.add(e),n.position.copy(nt.reservoir),si(n,"reservoir")}function k1(){const n=mt.getObjectByName("water reservoir");if(uf(n,h.hydro.water),n?.userData.reservoir){const s=n.userData.reservoir;s.mixingStream.visible=s.ripples.visible=Fn(h)}const e=n?.getObjectByName("reservoir label");if(!e)return;const t=n.userData.reservoir.status,i=t==="empty"?"WATER EMPTY":t==="low"?"WATER LOW":"RESERVOIR";if(e.userData.worldLabel.text===i)return;Ua.font="700 15px system-ui";const r=Math.ceil(Ua.measureText(i).width)+24;Object.assign(e.userData.worldLabel,{text:i,width:r}),e.labelElement.textContent=i,e.labelElement.style.width=`${r}px`,e.labelElement.style.borderColor=t==="ready"?"#69cbd3":"#f4bd4d"}function N1(){const n=new Ie;n.name="reservoir tower feedline";const e=new Hi({color:4352882,roughness:.7}),t=[],i=Math.max(0,...h.towers.map((u,d)=>u.built?d:0));function r(u,d){const p=new I(...u),f=new I(...d),g=new ce(new ht(.075,.075,p.distanceTo(f),8),e);g.position.copy(p).add(f).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new I(0,1,0),f.clone().sub(p).normalize()),n.add(g),t.push({start:p,end:f});const x=new ce(new En(.1,8,6),ue.metal);x.position.copy(f),n.add(x)}r([-10.65,.24,1.74],[-10.3,.24,2.6]),r([-10.3,.24,2.6],[-10.3,.24,4.5]),r([-10.3,.24,4.5],[nt[`tower-${i}`].x,.24,4.5]),h.towers.forEach((u,d)=>{if(!u.built)return;const p=nt[`tower-${d}`];r([p.x,.24,4.5],[p.x,.24,p.z+.85]),r([p.x,.24,p.z+.85],[p.x,2.8,p.z+.85]),r([p.x,2.8,p.z+.85],[p.x,2.8,p.z])}),Mt(n);const s=new Ie;s.position.copy(nt.filter);const o=new ce(new ht(.26,.26,.75,16),ue.white);o.rotation.z=Math.PI/2,o.position.y=.28,s.add(o);const a=new ce(new Sn(.22,.045,6,16),h.hydro.lineClogged?ue.coral:ue.water);a.rotation.x=Math.PI/2,a.position.y=.65,s.add(a),Qe(s,[.055,.28,.055],[0,.48,0],ue.metal);const c=wi(h.hydro.lineClogged?"FILTER CLOGGED":"FEED FILTER",h.hydro.lineClogged?"#f4bd4d":"#69cbd3");c.position.y=1.3,s.add(c),n.add(si(s,"filter"));const l=new Tr(new En(.14,6,5),new Ot({color:h.hydro.lineClogged?16039245:10875647}),t.length*3);return l.frustumCulled=!1,l.userData.flowSegments=t,n.add(l),n}function ec(){const n=[];h.towers.forEach((t,i)=>{t.built&&(!t.repaired||Vi(t,$e()))&&n.push(`tower-${i}`)}),h.beds.forEach((t,i)=>{t.built&&t.plants.some(r=>r.readyAt<=$e())&&n.push(`bed-${i}`)}),h.hydro.lineClogged&&n.push("filter");const e=Mo(h);return(e.water||!h.hydro.batchMixed||h.towers.some(t=>t.built&&t.repaired)&&(e.mix||e.check))&&n.push("reservoir"),h.farm.owned.includes("coop")&&h.farm.eggsReady&&n.push("coop"),h.farm.owned.includes("composter")&&h.farm.compost&&n.push("composter"),Wi(h)?.available&&n.push("market"),n}function O1(){const n=ec();if(!n.length)return new Ie;const e=new _o(.92,1.02,24);e.rotateX(-Math.PI/2);const t=new Ot({transparent:!0,opacity:.65,depthWrite:!1}),i=new Tr(e,t,n.length);i.userData.attentionMarkers=!0;const r=new Dt;return n.forEach((s,o)=>{r.position.copy(nt[s]),r.position.y=.035,r.scale.setScalar(s==="filter"?.6:1),r.updateMatrix(),i.setMatrixAt(o,r.matrix),i.setColorAt(o,new st(["filter","reservoir"].includes(s)?16039245:12181347))}),i}function F1(){if(!h.market.built)return Tf("market","PRODUCE TABLE",nt.market);const n=new Ie,e=Ms(h);n.name=`market construction stage ${e}`,n.userData.constructionStage=e;const t=e<3?1.8:3.1;Qe(n,[t,.15,1.15],[0,.7,.1],ue.wood);for(const r of[-t/2+.15,t/2-.15])for(const s of[-.35,.55])Qe(n,[.12,.7,.12],[r,.35,s],ue.woodDark);if(e>=2&&(Qe(n,[t+.25,.12,1.4],[0,2.15,-.15],e===4?ue.coral:ue.lime),[-t/2,t/2].forEach(r=>Qe(n,[.11,2.1,.11],[r,1.1,-.55],ue.woodDark))),e>=3&&(Qe(n,[3.1,.5,.12],[0,.35,.65],ue.wood),Qe(n,[3,.65,.12],[0,1.3,-.6],ue.white),Qe(n,[2.8,.09,.4],[0,1.35,-.4],ue.woodDark)),e===4){for(const r of[-1.25,-.42,.42,1.25])Qe(n,[.28,.012,1.41],[r,2.216,-.15],ue.white),Qe(n,[.28,.15,.035],[r,2.1,.57],ue.white);for(const r of[-1.85,1.85]){Qe(n,[.5,.45,.65],[r,.23,.1],ue.woodDark);const s=As("tomato",1);s.scale.setScalar(.4),s.position.set(r,.48,.1),n.add(s)}}const i=wi(e===1?"PIP'S PRODUCE TABLE":"PIP'S VEG STAND","#f4bd4d");return i.position.set(0,e===1?1.55:2.58,0),n.add(i),ei.slice(0,e).forEach((r,s)=>{const o=(s-(e-1)/2)*.6,a=Qe(n,[.48,.28,.56],[o,.87,.2],ue.woodDark);a.rotation.y=.07*s;const c=new ce(new En(.11,10,7),new Hi({color:Ae[r].color,roughness:.7}));c.position.set(o,1.04,.2),n.add(c)}),n.position.copy(nt.market),Ur(n,.034),si(n,"market")}function B1(){const n=new Ie;if(rn(h.farm,"harvestKit")){const i=vu("harvestKit",h.farm);i.position.set(-1.15,0,0),n.add(i)}Qe(n,[1.55,.18,.75],[0,.85,0],ue.wood),[-.62,.62].forEach(i=>Qe(n,[.12,1.4,.12],[i,.7,0],ue.woodDark));const e=Object.values(h.rack).reduce((i,r)=>i+r,0);for(let i=0;i<Math.min(e,6);i+=1){const r=ei.find(o=>h.rack[o]>i/2)||"lettuce",s=As(r,1);s.scale.setScalar(.32),s.position.set(-.5+i%3*.5,1,i>2?.15:-.15),n.add(s)}const t=wi("HARVEST RACK","#b9df63");return t.position.set(0,1.65,0),t.visible=Bt==="rack"||e>0,n.add(t),n.position.copy(nt.rack),Ur(n,.034),si(n,"rack")}function z1(){const n=$a(h),e=Hy(n,Qe,ue),t=wi("FARM SHOP","#f4bd4d");return t.position.set(0,3.1,0),e.add(t),e.position.copy(nt.workshop),Ur(e,.034),si(e,"workshop")}function Rf(n,e){const t=Math.max(0,Di.findIndex(o=>o.name===n.customer)),i=Wa(Di[t],t);i.position.copy(ka(e,n));const r=new ce(new zi(.4,20),new Ot({color:1586468,transparent:!0,opacity:.2,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.025,i.add(r);const s=new ce(new _o(.43,.49,24),new Ot({color:16039245,side:cn}));return s.rotation.x=-Math.PI/2,s.position.y=.035,s.visible=h.selectedOrderId===n.id,i.add(s),i.userData.customerIndex=e,i.userData.customerProfile=t,i.userData.orderId=n.id,i.userData.arrivedAt=n.createdAt,i.userData.destination=i.position.clone(),si(i,"market")}function ka(n,e=h.orders[n]){return new I(nt.market.x-1+(e?.slot??n)*1.3,0,nt.market.z+2.8)}function lh(n){if(zc.has(n.name))return zc.get(n.name);const e=new iu;e.background=new st(n.color).multiplyScalar(.45),e.add(new uu(16775398,5469804,2.6));const t=new Va(16773847,2);t.position.set(-2,4,4),e.add(t);const i=Wa(n,Di.indexOf(n));e.add(i);const r=new wn(32,1,.1,12);r.position.set(.45,1.9,2.8),r.lookAt(0,1.48,0);const s=128,o=new Bi(s,s);o.texture.colorSpace=en;const a=bt.getRenderTarget();bt.setRenderTarget(o),bt.render(e,r);const c=new Uint8Array(s*s*4);bt.readRenderTargetPixels(o,0,0,s,s,c),bt.setRenderTarget(a);const l=document.createElement("canvas");l.width=l.height=s;const u=l.getContext("2d"),d=u.createImageData(s,s);for(let f=0;f<s;f++)d.data.set(c.subarray(f*s*4,(f+1)*s*4),(s-f-1)*s*4);u.putImageData(d,0,0);const p=l.toDataURL("image/png");return zc.set(n.name,p),o.dispose(),Oi(i),p}function wu(n,e,t=!0){const i=Rf(n,e);i.traverse(s=>{delete s.userData.interactiveId}),Rr.add(i);const r=t?As(n.crop,1):new Ie;r.scale.setScalar(.32),Rr.add(r),Xs.push({customer:i,produce:r,purchased:t,age:t?0:.75,start:new I(Te.x,1.1,Te.z),end:i.position.clone().add(new I(0,1,.3))})}function Pf(){const n=Jh(h.proPip);return n.position.set(-5.35,0,-1.1),n}let Tt=Pf();const Te={x:Tt.position.x,z:Tt.position.z,target:null,speed:h.proPip?6.25:5.25,direction:"south",action:"idle",actionTime:0,pendingFacing:0,gaitPhase:0};vi.add(Tt);function H1(){if(h.cosmetics.active.includes("sunny-planters"))for(let n=0;n<5;n+=1){const e=new ce(new ht(.2,.25,.3,12),ue.coral);e.position.set(-8.6+n*.55,.15,-5.35);const t=new ce(new En(.11,10,7),ue.amber);t.position.set(e.position.x,.48,e.position.z),mt.add(e,t)}if(h.cosmetics.active.includes("blue-path"))for(let n=0;n<3;n+=1){const e=new Ie,t=new ce(new ht(.28,.21,.38,12),ue.water);t.position.y=.2;const i=As("basil",1);i.scale.setScalar(.35),i.position.y=.4,e.add(t,i),e.position.set(-1.5+n*.8,0,-5.8),mt.add(e)}if(h.cosmetics.active.includes("festival-bunting")&&h.market.built)for(let n=0;n<9;n+=1){const e=new ce(new _i(.12,.28,3),n%2?ue.amber:ue.coral);e.rotation.z=Math.PI,e.position.set(nt.market.x-1.35+n*.35,2.32+Math.sin(n*.8)*.1,nt.market.z),mt.add(e)}}function Eo(){if(Da.replaceChildren(),Oi(mt),mt.clear(),mt.add(D1(),U1(),F1(),z1()),Ut(h).festival){const e=new Ie;e.name="harvest festival garden display",e.position.set(-5,0,11.2);for(const t of[-1.3,1.3]){Qe(e,[.18,2.7,.18],[t,1.25,0],ue.wood),Qe(e,[.7,.42,.7],[t,.12,0],ue.white);for(let i=0;i<5;i++){const r=new ce(new xo(.22,1),ue.lime);r.position.set(t+Math.sin(i*2)*.25,.4+i*.1,Math.cos(i*2)*.22),e.add(r)}}Qe(e,[3,.2,.3],[0,2.55,0],ue.wood);for(let t=0;t<7;t++){const i=new ce(new _i(.16,.36,3),t%2?ue.coral:ue.amber);i.rotation.z=Math.PI,i.position.set(-1.1+t*.37,2.25,0),e.add(i)}Mt(e),mt.add(e)}h.farm.owned.forEach(e=>{if(kn[e].attachment)return;const t=vu(e,h.farm);t.position.copy(nt[e]);{const i=wi(e==="rainTank"?"RAIN STORAGE":e==="coop"?h.farm.eggsReady?"EGGS READY":"CHICKEN COOP":h.farm.compost?"COMPOST READY":"COMPOSTER","#b9df63");i.position.y=2,t.add(i),si(t,e)}mt.add(t)}),mt.add(B1()),mt.add(N1(),O1()),h.towers.forEach((e,t)=>{const i=e.built?R1(t,e):Tf(`tower-${t}`,`BUILD T${t+1}`,nt[`tower-${t}`]);e.built&&V1(t)&&G1(i,.38),mt.add(i)}),h.beds.forEach((e,t)=>{e.built&&mt.add(I1(t,e))}),h.market.built&&h.orders.forEach((e,t)=>{e.status==="waiting"&&mt.add(Rf(e,t))}),Vy(mt);const n=C1(xi());n&&mt.add(n),H1(),uo=[],mt.traverse(e=>{e.userData.worldLabel&&(uo.push(e),Da.appendChild(e.labelElement))}),W1(),Sf=Lf()}function V1(n){if(!vt())return!1;const e=nt[`tower-${n}`],t=e.x-Te.x,i=e.z-Te.z,r=Math.hypot(7.7,14.3),s=(t*7.7+i*14.3)/r,o=Math.abs(t*14.3-i*7.7)/r;return Math.hypot(t,i)<3.4&&s>0&&o<1.1}function G1(n,e){n.traverse(t=>{if(t.userData.worldLabel)return;const i=r=>{const s=r.clone();return s.transparent=!0,s.opacity=Math.min(r.opacity??1,e),s.depthWrite=!1,s};Array.isArray(t.material)?t.material=t.material.map(i):t.material&&(t.material=i(t.material))})}function Oi(n){const e=new Set(Object.values(ue)),t=new Set,i=new Set,r=new Set;n.traverse(s=>{s.geometry&&!t.has(s.geometry)&&(t.add(s.geometry),s.geometry.dispose()),(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{!a||e.has(a)||r.has(a)||(r.add(a),a.map&&!i.has(a.map)&&(i.add(a.map),a.map.dispose()),a.dispose())})})}function Lf(){const n=$e();return JSON.stringify({towers:h.towers.map(e=>[e.built,e.repaired,e.queue.map(t=>[t.id,t.layer,t.crop,t.readyAt<=n])]),beds:h.beds.map(e=>[e.built,e.capacity,e.plants.length,e.plants.filter(t=>t.readyAt<=n).length]),market:[h.market.built,Ms(h),h.orders.map(e=>`${e.id}:${e.status}`)],rack:h.rack,lineClogged:h.hydro.lineClogged,farm:h.farm,festival:Ut(h).festival,attention:ec(),carry:h.carry,cosmetics:h.cosmetics.active,pro:h.proPip,selected:Bt,guide:xi()})}function W1(){const n=Tt.getObjectByName("campaign carry");if(n&&(Oi(n),Tt.remove(n)),!h.carry)return;const e=new Ie;if(e.name="campaign carry",h.carry.kind==="starter"){const t=new ce(new ht(.13,.17,.22,12),ue.soil),i=As(h.carry.crop,.82);i.scale.multiplyScalar(.48),i.position.y=.12,e.add(t,i)}else{const t=new ce(new ht(.28,.22,.2,12),ue.wood);e.add(t),h.carry.items.slice(0,5).forEach((i,r)=>{const s=new ce(new En(.095,10,7),new Hi({color:Ae[i].color,roughness:.7}));s.position.set(-.15+r%3*.15,.15+Math.floor(r/3)*.1,0),e.add(s)})}e.position.set(0,.72,.58),e.scale.setScalar(.95),Tt.add(e)}function $e(){return Date.now()}function Xe(n="autosave"){let e=!1;try{h=r1(h,window.localStorage,Date.now(),t=>{e=t})}catch{}ne("#saveWarning").hidden=e,ne("#saveStatus").textContent=e?"Progress saved in this browser":"Progress is only in memory. Retry saving or export before closing.",Mf=performance.now(),n!=="autosave"&&Qn("campaign_save",{reason:n,chapter:h.chapter+1,task:ti(h)?.id||"complete"})}function Ge(n,e=3500){lo.classList.add("is-active"),vt()&&(e=Math.min(e,3200)),lo.textContent=n,va=performance.now()+e}function ar(n){Ni.effect(n)}function kr(){Ni.start()}function Cs(){Ni.update();const n=h.settings.soundEnabled!==!1,e=ne("#soundButton");e.setAttribute("aria-label",n?"Mute sound":"Enable sound"),e.setAttribute("title",n?"Mute sound":"Enable sound"),e.setAttribute("aria-pressed",String(!n)),e.classList.toggle("is-muted",!n)}function zt(n,e=n){Te.action=n,Te.actionTime=h.settings.reducedMotion?.18:.72,ar(e)}function If(n){const e=new Ie,t=new ce(new Gt(.34,.46,.08),ue.white),i=new ce(new zi(.1,16),new Hi({color:Ae[n].color,roughness:.65}));i.position.z=.046,e.add(t,i),e.position.copy(nt.vault).add(new I(2.5,1.1,.35)),Rr.add(e),Ys.push({kind:"packet",mesh:e,start:e.position.clone(),end:nt.vault.clone().add(new I(1.25,.95,0)),age:0,duration:h.settings.reducedMotion?.18:.72})}function $i(n,e=16039245){const t=h.settings.reducedMotion?3:10;for(let i=0;i<t;i+=1){const r=new ce(new En(.035,6,5),new Ot({color:e}));r.position.copy(n).add(new I(0,.45,0)),Rr.add(r),Ys.push({kind:"particle",mesh:r,velocity:new I((Math.random()-.5)*1.5,.7+Math.random(),(Math.random()-.5)*1.5),age:0,duration:.65})}}function $1(n){for(let e=Ys.length-1;e>=0;e-=1){const t=Ys[e];t.age+=n;const i=t.age/t.duration;t.kind==="packet"?(t.mesh.position.lerpVectors(t.start,t.end,Math.min(1,i)),t.mesh.position.y+=Math.sin(Math.min(1,i)*Math.PI)*1.4,t.mesh.rotation.y+=n*5):(t.velocity.y-=n*2.2,t.mesh.position.addScaledVector(t.velocity,n),t.mesh.scale.setScalar(Math.max(.05,1-i))),i>=1&&(Rr.remove(t.mesh),Oi(t.mesh),Ys.splice(e,1))}for(let e=Xs.length-1;e>=0;e-=1){const t=Xs[e];t.age+=n;const i=Math.min(1,t.age/.65);t.produce.position.lerpVectors(t.start,t.end,i),h.settings.reducedMotion||(t.produce.position.y+=Math.sin(i*Math.PI)*.6),t.customer.userData.rig.arms[0].rotation.x=t.purchased?-i*.8:0,t.age>.75&&!h.settings.reducedMotion&&(t.customer.position.x+=n*2.2,t.customer.rotation.y=Math.PI/2,t.produce.position.copy(t.customer.position).add(new I(.3,1,0)),t.customer.userData.rig.legs.forEach((r,s)=>{r.rotation.x=Math.sin(t.age*9+s*Math.PI)*.3})),t.age>=(h.settings.reducedMotion?.9:2.3)&&(Rr.remove(t.customer,t.produce),Oi(t.customer),Oi(t.produce),Xs.splice(e,1))}}function q1(n){rs.update(document.hidden?0:n,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});const e=performance.now()/1e3;Wy(mt.getObjectByName("water reservoir"),e,Fn(h),h.settings.reducedMotion),ue.water.opacity=.76+Math.sin(e*1.8)*.08,ri.intensity=1.45+Math.sin(e*.09)*.06,mt.traverse(t=>{if(t.userData.attentionMarkers&&(t.material.opacity=h.settings.reducedMotion?.65:.55+Math.sin(e*2)*.15),t.userData.hens&&t.userData.hens.forEach((i,r)=>{const s=e*.7+r*2.5;i.position.copy(i.userData.home),h.settings.reducedMotion||(i.position.x+=Math.sin(s)*.22,i.position.z+=Math.cos(s)*.16,i.rotation.y=Math.cos(s)*.6,i.rotation.x=Math.max(0,Math.sin(s*2.3))*.22)}),t.userData.flowSegments){t.visible=d1(h);const i=new Dt;t.userData.flowSegments.forEach(({start:r,end:s},o)=>{for(let a=0;a<3;a++){const c=h.settings.reducedMotion?(a+.5)/3:(e*(h.hydro.lineClogged?.08:.3)+a/3+o*.31)%1;i.position.lerpVectors(r,s,c),i.position.y+=.045,i.updateMatrix(),t.setMatrixAt(o*3+a,i.matrix)}}),t.instanceMatrix.needsUpdate=!0}if(t.userData.campaignCrop&&(t.rotation.z=Math.sin(e*1.3+t.userData.swayPhase)*.025),t.userData.customerIndex!==void 0){const i=e*1.7+t.userData.customerIndex,r=h.settings.reducedMotion?1:It.clamp(($e()-t.userData.arrivedAt)/1200,0,1);t.position.copy(t.userData.destination),t.position.x+=(1-r)*1.8,t.rotation.y=r<1?-Math.PI/2:-.18;const s=t.userData.rig;s&&!h.settings.reducedMotion&&(s.head.rotation.y=Math.sin(i*.45)*.07,s.body.scale.y=1+Math.sin(i)*.012,s.legs.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*.3:0}),s.arms.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*-.2:Math.sin(i+a)*.04}))}if(t.userData.guideMarker){const i=1+Math.sin(e*3.1)*.08;t.scale.set(i,1,i),t.position.y=t.userData.baseY+Math.sin(e*2.5)*.035}})}function Hl(n={}){const e=[];return n.coins&&e.push(`${n.coins} coins`),n.xp&&e.push(`${n.xp} XP`),n.unlockCrop&&e.push(Ae[n.unlockCrop].label),n.unlockPro&&e.push("Pro Pip"),e.join(" + ")}function To(n){const e=n?.goals;return e?[...e.marketLevel?[{label:"Market upgraded",current:h.market.level>=e.marketLevel?1:0,target:1}]:[],...e.capacityUpgrade?[{label:"Queue or bed expanded",current:Mu()?1:0,target:1}]:[],...Object.entries(e.sold||{}).map(([t,i])=>({crop:t,label:`${Ae[t].label} sold`,current:h.stats.byCropSold[t],target:i})),...e.orders?[{label:"Total orders fulfilled",current:h.stats.orders,target:e.orders}]:[]]:[]}function Mu(){return h.towers.some(n=>n.built&&n.irrigationUpgraded)||h.beds.some(n=>n.built&&n.capacity>2)}function Df(){const n=h.towers.findIndex(t=>t.built&&!t.irrigationUpgraded),e=h.beds.findIndex(t=>t.built&&t.capacity<4);return[...n>=0?[{id:`tower-${n}`,label:"Precision drippers / 12% faster starts",cost:gt.queueUpgrade}]:[],...e>=0?[{id:`bed-${e}`,label:"Bed +1 growing space",cost:gt.bedUpgrade[e]}]:[]]}function X1(n){const e=To(n);if(e.length)return e.every(t=>t.current>=t.target);switch(n.id){case"repair-first-tower":return h.towers[0].repaired;case"first-tower-plan":return h.stats.byCropQueued.lettuce>=2;case"first-grow-out":return h.stats.harvested>=4;case"reopen-market":return h.market.built;case"build-second-tower":return h.towers[1].built;case"specialize-flow":return h.hydro.systemLessonDone;case"split-crop-plan":return h.stats.byCropQueued.tomato>=1&&h.stats.byCropQueued.kale>=1;case"build-third-tower":return h.towers[2].built;case"build-pro-yard":return h.towers[3].built;default:return!1}}function Y1(n){const e=h.level;h.coins+=n.reward.coins||0,h.xp+=n.reward.xp||0,n.reward.unlockCrop&&!h.unlockedCrops.includes(n.reward.unlockCrop)&&h.unlockedCrops.push(n.reward.unlockCrop),n.reward.unlockPro&&(h.proPip=!0),n.reward.campaignComplete&&(h.campaignComplete=!0);const t=ff(h.xp);h.level=t.level,h.level>e&&(Ge(`Level ${h.level} reached. New farm options are ready.`,4500),ar("level-up"))}function tc(n=new I(Te.x,1.2,Te.z)){const e=n.clone().add(new I(0,1,0)).project(Ct),t=nn.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function Mi(){const n=ti(h);if(!n||!X1(n))return!1;h.completedTasks.push(n.id),Y1(n),h.taskIndex+=1,n.reward.chapterComplete&&(n.reward.campaignComplete||(h.chapter=Math.min(ms.length-1,h.chapter+1)),Hs=n),h=Ir(h),Xe("task_complete"),$i(nt[n.focus]||new I(Te.x,0,Te.z),12181347),ar(n.reward.chapterComplete?"chapter-complete":"task-complete"),Qn("campaign_task_complete",{task:n.id,chapter:n.chapter+1,coins:h.coins,xp:h.xp}),n.reward.unlockPro&&j1(),Hs?np(Hs):(Ge(`Task complete: ${n.title}. ${Hl(n.reward)}.`,4800),gi.celebrate({title:n.title,detail:Hl(n.reward)})),ut();const e=Re.chapterCoins.getBoundingClientRect();return gi.coins(n.reward.coins,Hs?{x:e.left,y:e.bottom}:tc(nt[n.focus])),!0}function j1(){const n=Tt.position.clone(),e=Tt.rotation.y;vi.remove(Tt),Oi(Tt),Tt=Pf(),Tt.position.copy(n),Tt.rotation.y=e,vi.add(Tt),Te.speed=h.proPip?6.25:5.25}function er(){return Math.max(0,h.coins-(h.market.built?0:gt.market))}function Su(){return h.market.built?"":`<div class="status-strip"><span>Veg Stand reserve</span><strong>${gt.market} coins</strong></div>`}function Si(n,e,t=!1){if(t&&er()<n&&!h.market.built)return Ge("Keep 40 coins for the Veg Stand. Optional upgrades can use the remaining coins."),ar("error"),!1;if(h.coins<n)return Ge(`You need ${n-h.coins} more coins. Complete an order or task first.`),ar("error"),!1;const i=structuredClone(h);try{if(e(),h.coins-=n,h.coins<0)throw new Error("Invalid coin balance");return Xe("purchase"),!0}catch{return h=i,Ge("That purchase was safely rolled back. Try again."),!1}}function Eu(n){const e=h.towers[n];!e?.built||e.repaired||(e.repaired=!0,h.stats.serviceActions+=1,zt("repair","repair"),$i(nt[`tower-${n}`],6933459),Ge(`Tower ${n+1} is online. Its four planting layers are ready.`),Xe("repair"),Mi(),ut())}function Tu(n){const e=h.towers[n];if(!e||e.built||n===0)return;const t=[0,5,8,10][n];if(h.taskIndex<t){Ge("Finish the current farm task before opening this lane.");return}const i=gt.tower[n];if(!Si(i,()=>{e.built=!0,e.repaired=!0,h.beds[n].built=!0}))return;zt("build","build"),$i(nt[`tower-${n}`],16039245);const r=Wi(h);Ge(`Tower ${n+1} and Grow Bed ${n+1} are built.${r&&!r.reason?` ${r.label} unlocked at the stand.`:""}`),Mi(),ut()}function Au(){if(h.market.built||h.taskIndex<3)return;const n=Wi(h);if(!n?.available){Ge(n?.reason||`You need ${n.cost-h.coins} more coins.`);return}Si(0,()=>{if(!Qh(h))throw new Error("Construction unavailable")})&&(zt("build","build"),$i(nt.market,16039245),Ge("Pip's produce table is open. The first neighbor will stop by soon. Tower 2 unlocks a canopy."),Mi(),ut())}function Uf(n){const e=ja(h,n);if(!e.available){Ge(e.reason);return}Si(0,()=>{if(!Ky(h,n))throw new Error("Seed purchase changed")})&&(If(n),zt("collect","seed-pickup"),Ge(`Bram: ${e.amount} ${Ae[n].label} seeds in the vault. ${e.tutorial?"First packet is on the house!":"No refunds for talking to your seedlings."}`),Qn("seed_purchase",{crop:n,amount:e.amount,coins:e.price,tutorial:e.tutorial}),ut())}function kf(){Si(0,()=>{if(!Jy(h))throw new Error("Rescue unavailable")})&&(If("lettuce"),Ge("Bram: Two lettuce seeds to get you growing again. Everybody starts somewhere."),Qn("seed_rescue"),ut())}function Nf(){Si(0,()=>{if(!Zy(h))throw new Error("Vault upgrade unavailable")})&&(zt("build","build"),Ge("Seed vault expanded: room for 48 seeds of each crop."),ut())}function Of(n,e,t=null){const i=h.towers[n];if(!i?.built||!i.repaired||!h.unlockedCrops.includes(e))return;const r=Ss(i,h.carry,n),s=t===null?r[0]:t;if(!r.includes(s)){Ge(`Tower ${n+1} has no available layer. A carried starter's layer stays reserved.`);return}if(!Fn(h)){Ge("The shared tank needs a fresh mixed batch before planting."),Yt("reservoir");return}if(h.seeds[e]<=0){Ge(`Collect ${Ae[e].label} seeds from the Seed Vault first.`);return}h.seeds[e]-=1,Za(h)||(h.hydro.feedPhase=0);const o=$e(),a=gs(e,"tower",h,i)*1e3*co;i.queue.push({id:crypto.randomUUID(),crop:e,layer:s,queuedAt:o,startedAt:o,readyAt:o+a,quality:1}),h.stats.planted+=1,h.stats.byCropQueued[e]+=1,rh(h)&&ki(h,"matched",e),rh(h)&&ki(h,"saving",e),new Set(i.queue.map(c=>c.crop)).size===4&&ki(h,"mixed"),h.xp+=2,zt("plant","plant"),$i(nt[`tower-${n}`],Number.parseInt(Ae[e].color.slice(1),16)),Ge(`${Ae[e].label} planted in Tower ${n+1}, layer ${s+1}.`),h=Ir(h),Xe("queue_crop"),Mi(),ut()}function On(){return h.beds.filter(n=>n.built).reduce((n,e)=>n+Math.max(0,e.capacity-e.plants.length),0)}function Ff(){const n=h.beds.findIndex(e=>e.built&&e.plants.length<e.capacity);return n>=0?`bed-${n}`:null}function K1(){const n=$e(),e=h.towers.findIndex(t=>t.built&&t.repaired&&Vi(t,n));return e>=0?`tower-${e}`:null}function oa(n=null){const e=$e(),t=h.beds.findIndex(i=>i.built&&i.plants.some(r=>r.readyAt<=e&&(!n||r.crop===n)));return t>=0?`bed-${t}`:null}function $c(){const n=h.towers.findIndex((e,t)=>e.built&&e.repaired&&Ss(e,h.carry,t).length);return n>=0?`tower-${n}`:null}function J1(){const n=Nn(h);if(n)return n.crop;const e=ti(h);if(e?.id==="first-tower-plan")return"lettuce";if(e?.id==="split-crop-plan"){if(h.stats.byCropQueued.tomato<1)return"tomato";if(h.stats.byCropQueued.kale<1)return"kale"}const t=To(e).find(r=>r.crop&&r.current<r.target);if(t)return t.crop;if(!e){const r=Jn(h).find(o=>o.id===h.homestead.pinned),s=r&&bo(h,r).find(o=>o.crop&&o.current<o.target);if(s&&h.unlockedCrops.includes(s.crop))return s.crop}return h.orders.find(r=>r.status==="waiting"&&h.unlockedCrops.includes(r.crop))?.crop||h.unlockedCrops[0]||"lettuce"}function cs(){return h.carry?.kind!=="produce"||!h.market.built?!1:h.orders.some(n=>n.status!=="waiting"?!1:h.carry.items.filter(e=>e===n.crop).length>=n.amount)}function xi(){if(h.carry?.kind==="starter")return Ff()||`tower-${h.carry.sourceTower}`;if(!Fn(h)&&!cs())return"reservoir";if(h.hydro.lineClogged&&!cs())return"filter";const n=Nn(h);if(n){const p=_n(h,n);if(!p.needed)return"market";if(!p.room||p.load)return"rack";const f=oa(n.crop);if(f)return f;const g=h.towers.findIndex(v=>Vi(v,$e(),n.crop));if(g>=0)return h.carry?.kind==="produce"?"rack":On()?`tower-${g}`:oa()||`bed-${Math.max(0,h.beds.findIndex(v=>v.built&&v.plants.length))}`;if(!p.missing){const v=h.beds.findIndex(M=>M.plants.some(y=>y.crop===n.crop));if(v>=0)return`bed-${v}`;const m=h.towers.findIndex(M=>M.queue.some(y=>y.crop===n.crop));if(m>=0)return`tower-${m}`}if(h.carry?.kind==="produce")return"rack";const x=$c(n.crop);if(x)return h.seeds[n.crop]?x:"vault"}if(h.carry?.kind==="produce"){if(cs())return"market";if(h.carry.items.length<Ut(h).basket){const p=oa();if(p)return p}return"rack"}const e=oa();if(e)return e;const t=K1();if(t&&On()>0)return t;if(t&&On()<=0){const p=h.beds.findIndex(f=>f.built&&f.plants.length);if(p>=0)return`bed-${p}`}if(!Fn(h))return"reservoir";const i=ti(h);if(i?.goals?.capacityUpgrade&&!Mu()){const p=Df().find(f=>h.coins>=f.cost);if(p)return p.id}if(i?.id==="launch-showcase"&&Wi(h)?.available)return"market";const r={"repair-first-tower":0,"reopen-market":gt.market,"build-second-tower":gt.tower[1],"specialize-flow":0,"build-third-tower":gt.tower[2],"build-pro-yard":gt.tower[3]};if(i?.id in r&&h.coins>=r[i.id])return i.focus;const s=h.orders.filter(p=>p.status==="waiting");if(s.some(p=>h.rack[p.crop]>=p.amount))return"rack";const o=J1(),a=s.find(p=>p.crop===o),c=["first-tower-plan","split-crop-plan"].includes(i?.id),l=[];h.beds.forEach((p,f)=>p.plants.forEach(g=>{g.crop===o&&l.push({id:`bed-${f}`,readyAt:g.readyAt})})),h.towers.forEach((p,f)=>p.queue.forEach(g=>{g.crop===o&&l.push({id:`tower-${f}`,readyAt:g.readyAt??1/0})}));const u=i?.id==="first-grow-out"?Math.max(1,4-h.stats.harvested):a?.amount||1;if(!c&&l.length+h.rack[o]>=u&&l.length)return l.sort((p,f)=>p.readyAt-f.readyAt),l[0].id;if(h.market.built&&!c&&!a)return"market";const d=h.seeds[o]>0?$c():null;if(d)return d;if(!$c()){const p=h.towers.findIndex(f=>f.built&&f.queue.length);if(p>=0)return`tower-${p}`}return h.unlockedCrops.includes(o)?"vault":i?.focus||null}function ho(n,e=null){const t=h.towers[n],i=e?t?.queue.find(r=>r.id===e):Vi(t,$e(),Nn(h)?.crop)||Vi(t,$e());if(!(!i||i.readyAt===null||i.readyAt>$e())){if(h.carry){Ge("Pip's hands are full.");return}if(On()<=0){Ge("Every bed is full. Harvest a finished crop before taking another starter."),ar("error");return}t.queue.splice(t.queue.indexOf(i),1),h.carry={kind:"starter",crop:i.crop,quality:i.quality,sourceTower:n,sourceLayer:i.layer,job:i},h=Ir(h),zt("carry","pickup"),Ge(`${Ae[i.crop].label} starter picked up. Carry it to an open bed.`),Xe("pickup_starter"),ut()}}function tr(n){if(h.carry?.kind!=="starter"||h.carry.sourceTower!==n)return;const e=h.towers[n];if(e.queue.length>=4){Ge("That tower queue is full. Transplant this starter into an open bed.");return}const t=h.carry.job||{id:crypto.randomUUID(),crop:h.carry.crop,queuedAt:$e(),startedAt:$e(),readyAt:$e(),quality:h.carry.quality};t.startedAt=$e(),t.readyAt=$e(),t.layer=h.carry.sourceLayer??Ss(e)[0],e.queue.unshift(t),h.carry=null,zt("return","return"),Ge(`${Ae[t.crop].label} returned safely to Tower ${n+1}.`),Xe("return_starter"),ut()}function fo(n){const e=h.beds[n];if(h.carry?.kind!=="starter"||!e?.built)return;if(e.plants.length>=e.capacity){Ge(`Grow Bed ${n+1} is full.`);return}const t=h.carry.crop,i=e.soilCharges>0,r=$e();e.plants.push({id:crypto.randomUUID(),crop:t,plantedAt:r,readyAt:r+gs(t,"bed",h)*(e.soilCharges?.8:1)*1e3*co,quality:h.carry.quality}),h.carry=null,e.soilCharges=Math.max(0,e.soilCharges-1),h.stats.transplanted+=1,ki(h,"transplant",t),i&&ki(h,"enriched",t),h.xp+=3,zt("transplant","transplant"),$i(nt[`bed-${n}`],Number.parseInt(Ae[t].color.slice(1),16)),Ge(`${Ae[t].label} transplanted. It will finish in the garden.`),Xe("transplant"),ut()}function po(n,e=null){const t=h.beds[n];if(!t?.built)return;if(h.carry?.kind==="starter"){Ge("Transplant or return the tower starter before harvesting.");return}if((h.carry?.kind==="produce"?h.carry.items:[]).length>=Ut(h).basket){Ge("The harvest basket is full. Visit the market or Harvest Rack.");return}const r=t.plants.findIndex(o=>o.readyAt<=$e()&&(!e||o.crop===e));if(r<0){Ge("No finished crop is ready in this bed yet.");return}const[s]=t.plants.splice(r,1);h.carry||(h.carry={kind:"produce",items:[]}),h.carry.items.push(s.crop),h.stats.harvested+=1,h.stats.harvested===1&&Qn("first_harvest",{crop:s.crop}),h.stats.byCropHarvested[s.crop]+=1,ki(h,"harvest",s.crop),h.farm.scraps=Math.min(24,h.farm.scraps+1),h.xp+=Ae[s.crop].xp,zt("harvest","harvest"),$i(nt[`bed-${n}`],Number.parseInt(Ae[s.crop].color.slice(1),16)),Ge(`${Ae[s.crop].label} added to the basket: ${h.carry.items.length}/${Ut(h).basket}.`),Xe("harvest"),Mi(),ut()}function mo(n=null,e=Ut(h).basket){if(h.carry?.kind!=="produce")return;let t=0;h.carry.items=h.carry.items.filter(i=>(!n||i===n)&&t<e?(h.rack[i]+=1,t+=1,!1):!0),h.carry.items.length||(h.carry=null),zt("store","rack"),t>0&&(h.tutorial.coach.staged=!0),Ge(`${t} finished crop${t===1?"":"s"} stored on the Harvest Rack.`),Xe("rack_store"),ut()}function Na(n,e=1){if(!Ae[n]||(e=Math.max(0,Math.min(Ut(h).basket,Math.floor(Number(e)||0))),h.carry?.kind==="starter"))return;const t=h.carry?.kind==="produce"?h.carry.items:[],i=Ut(h).basket-t.length,r=Math.min(i,e,h.rack[n]);if(!(r<=0)){h.carry||(h.carry={kind:"produce",items:[]});for(let s=0;s<r;s+=1)h.rack[n]-=1,h.carry.items.push(n);zt("carry","pickup"),Ge(`${r} ${Ae[n].label} loaded from the rack.`),Xe("rack_load"),ut()}}function Bf(n=0){const e=new Set(h.orders.map((a,c)=>a.slot??c));n=[0,1,2].find(a=>!e.has(a))??n;const t=h.orderSequence,i=ky(h),r=Di.filter(a=>a.name!==h.lastCustomer&&!h.orders.some(c=>c.status==="waiting"&&c.customer===a.name)),s=r[Math.floor(Math.random()*r.length)];h.lastCustomer=s.name;const o=h.chapter===0?1:h.chapter===1?t%3===0?1:2:h.market.level>1&&t%3===2?3:2;return h.orderSequence+=1,{id:crypto.randomUUID(),slot:n,customer:s.name,crop:i,amount:o,reward:Ae[i].coinValue*o+8+h.market.level*2,xp:Ae[i].xp*o+4,createdAt:$e(),expiresAt:$e()+(90+Math.random()*60+(o-1)*30)*1e3,status:"waiting"}}function zf(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId===e.id&&(h.selectedOrderId=null),wu(e,n,!1),e.status="cooldown",e.expiresAt=$e()+2400,h.stats.rejectedOrders+=1,Ge(`${e.customer} heads home. Your produce stays safe on the rack for another visit.`),ar("order-reject"),Xe("order_reject"),ut())}function Hf(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId=e.id,Ge(`${e.customer}'s order is reserved while you grow.`),Xe("order_wait"),ut())}function Z1(n){return(h.carry?.kind==="produce"?h.carry.items.filter(t=>t===n).length:0)+h.rack[n]}function vs(){if(!h.market.built)return null;const n=Nn(h);if(n)return n;const e=h.orders.filter(t=>t.status==="waiting");return e.find(t=>Z1(t.crop)>=t.amount)||e.sort((t,i)=>t.expiresAt-i.expiresAt)[0]||null}function Cu(n){const e=h.orders[n];if(!e||e.status!=="waiting")return;const t=h.carry?.kind==="produce"?h.carry.items:[];if(t.filter(s=>s===e.crop).length<e.amount){h.rack[e.crop]>0?Ge(`Load ${Ae[e.crop].label} from the Harvest Rack, then return to ${e.customer}.`):Ge(`${e.customer} needs ${e.amount} ${Ae[e.crop].label}. Only finished garden produce can be sold.`),ar("error");return}let r=e.amount;h.carry.items=t.filter(s=>s===e.crop&&r>0?(r-=1,!1):!0),h.carry.items.length||(h.carry=null),h.coins+=e.reward,h.xp+=e.xp,h.stats.sold+=e.amount,h.stats.orders+=1,h.stats.orders===1&&Qn("first_sale"),h.stats.byCropSold[e.crop]+=e.amount,ki(h,"order",e.crop),zt("sell","sale"),wu(e,n),$i(ka(n),Number.parseInt(Ae[e.crop].color.slice(1),16)),Ge(`${e.customer}: "${Di.find(s=>s.name===e.customer)?.line}" +${e.reward} coins.`),h.selectedOrderId===e.id&&(h.selectedOrderId=null),e.status="cooldown",e.expiresAt=$e()+2400,Xe("order_complete"),gi.coins(e.reward,tc(ka(n))),Mi(),ut()}function Oa(n){const e=h.orders[n];if(!e||e.status!=="waiting"||h.carry?.kind!=="produce"||h.carry.items.filter(i=>i===e.crop).length<e.amount)return;h.selectedOrderId=e.id;const t=ka(n).add(new I(0,0,.8));if(Math.hypot(Te.x-t.x,Te.z-t.z)<=.5)return vt()&&hn(),Cu(n);Yt("market"),Te.target={x:t.x,z:t.z},Gn=e.id,Xe("delivery_start"),Ge(`Taking ${e.amount} ${Ae[e.crop].label} to ${e.customer}.`)}function Vf(n){const e=h.orders.find(i=>i.id===n&&i.status==="waiting");if(!e)return;h.selectedOrderId=e.id,Xe("order_selected");const t=Ul(h,e);if(t.kind==="deliver")return Oa(h.orders.findIndex(i=>i.id===n));if(t.kind==="collect"){Yt("rack"),hi=e.id;return}Yt(xi()||"vault")}function Gf(n){const e=h.towers[n];if(!(!e?.built||e.irrigationUpgraded)){if(Pn(h,"drippers")){Ge(Pn(h,"drippers"));return}Si(gt.queueUpgrade,()=>{e.irrigationUpgraded=!0},!0)&&(zt("build","build"),Ge(`Tower ${n+1} has precision drippers. New starts grow 12% faster.`),Mi(),ut())}}function Wf(n){const e=h.beds[n];if(!e?.built||e.capacity>=4)return;if(Pn(h,"bed",n)){Ge(Pn(h,"bed",n));return}const t=gt.bedUpgrade[n];Si(t,()=>{e.capacity+=1},!0)&&(zt("build","build"),Ge(`Grow Bed ${n+1} now holds ${e.capacity} crops.`),Mi(),ut())}function Ru(){if(!h.market.built)return;const n=Wi(h);if(n){if(!n.available){Ge(n.reason||`You need ${n.cost-h.coins} more coins.`);return}Si(0,()=>{if(!Qh(h))throw new Error("Construction unavailable")})&&(zt("build","build"),$i(nt.market,16039245),Ge(`${n.label} complete. ${n.detail}`),Mi(),ut())}}function $f(){_1(h)&&(zt("service","service"),Ge("Filter cleared. Full flow restored to the towers."),Xe("feedline_cleared"),ut())}function qf(n){h1(h,n)&&(h.hydro.servicedAt=$e(),h.stats.serviceActions+=1,zt("service","service"),Ge(n==="water"?"Fresh starter batch filled. Circulate the IBC before feeding.":n==="mix"?"One evenly mixed batch supplies every tower.":"Delivery confirmed at every top outlet. The timer handles the short feeds."),Xe("hydro_service"),Mi(),ut())}function Xf(n){!oo[n]||h.cosmetics.owned.includes(n)||Si(gt.cosmetics[n],()=>{h.cosmetics.owned.push(n),h.cosmetics.active.push(n)},!0)&&(zt("build","build"),Ge(`${oo[n].label} added to the homestead.`),ut())}function Q1(n){h.cosmetics.owned.includes(n)&&(h.cosmetics.active.includes(n)?h.cosmetics.active=h.cosmetics.active.filter(e=>e!==n):h.cosmetics.active.push(n),Xe("cosmetic_toggle"),ut())}function eb(n){if(!n)return"Farm complete";const e=To(n);if(e.length)return`${e.filter(t=>t.current>=t.target).length} / ${e.length}`;switch(n.id){case"repair-first-tower":return h.towers[0].repaired?"1 / 1":"0 / 1";case"first-tower-plan":return`${Math.min(2,h.stats.byCropQueued.lettuce)} / 2`;case"first-grow-out":return`${Math.min(4,h.stats.harvested)} / 4`;case"reopen-market":return h.market.built?"1 / 1":"0 / 1";case"build-second-tower":return h.towers[1].built?"1 / 1":"0 / 1";case"specialize-flow":return h.hydro.systemLessonDone?"1 / 1":"0 / 1";case"split-crop-plan":return`${Math.min(1,h.stats.byCropQueued.tomato)+Math.min(1,h.stats.byCropQueued.kale)} / 2`;case"build-third-tower":return h.towers[2].built?"1 / 1":"0 / 1";case"build-pro-yard":return h.towers[3].built?"1 / 1":"0 / 1";default:return""}}function Pu(){const n=ff(h.xp);Re.coins.textContent=h.coins.toLocaleString(),Re.level.textContent=String(n.level),Re.xp.textContent=n.needed?`${n.current} / ${n.needed}`:"MAX",Re.xpFill.style.width=`${Math.round(n.ratio*100)}%`,Re.chapter.previousElementSibling.textContent=h.campaignComplete?"Farm":"Chapter",Re.chapter.textContent=h.campaignComplete?Mr(h)?"Master":`${h.homestead.claimed.length}/18`:`${h.chapter+1} / 3`;const e=ti(h),t=ms[h.chapter];Re.objectiveChapter.textContent=h.campaignComplete?"Homestead":`Chapter ${t.number}`;const i=Jn(h).find(s=>s.id===h.homestead.pinned)||Jn(h)[0];Re.objectiveTitle.textContent=e?.title||i?.title||(Mr(h)?"Community requests continue":"Complete the crop mastery book"),Re.objectiveProgress.textContent=e?eb(e):i?`${bo(h,i).filter(s=>s.current>=s.target).length}/${i.goals.length}`:`${Object.values(h.homestead.mastery).reduce((s,o)=>s+o,0)}/15 badges`,ne("#homesteadButton").hidden=!h.market.built,ne(".campaign-controls").classList.toggle("has-goals",h.market.built);const r=Jn(h).filter(s=>Xa(h,s)).length;ne("#homesteadButton").textContent=r?`Goals (${r})`:"Goals",Bn.hidden||Pa.render(h),document.body.classList.toggle("high-contrast",h.settings.highContrast),Rs()}function Rs(){const n=vs(),e=!Bn.hidden||!ni.hidden||!ii.hidden||!dn.hidden||!yn.hidden||!sn.hidden;if(Sr.hidden=!n||e,Sr.classList.toggle("is-ready",!!(n&&_n(h,n).needed===0)),!n)return;const t=_n(h,n);Re.marketChipCustomer.textContent=`${n.customer}${n.id===h.selectedOrderId?" / Reserved":" needs"}`,Re.marketChipDemand.textContent=`${t.carried}/${n.amount} ${Ae[n.crop].label} in basket${t.stored?` / ${t.stored} rack`:""}`}function Yf(){const n=ti(h),e=ms[h.chapter];Re.taskChapter.textContent=h.campaignComplete?"Campaign complete":`Chapter ${e.number}`,Re.taskTitle.textContent=e.name,Re.taskStory.textContent=n?.story||"Pip: The homestead is ready for every grow that comes next.",Re.primaryTaskTitle.textContent=n?.title||"Keep the market growing",Re.primaryTaskDetail.textContent=n?.detail||"Choose crops, improve the farm, and serve neighborhood orders.",Re.primaryTaskReward.textContent=n?Hl(n.reward):"All chapter rewards earned";const t=Ln.slice(h.taskIndex).find(o=>o.reward.unlockCrop||o.reward.unlockPro),i=ne("#nextFarmUnlock");if(i.hidden=!t||h.campaignComplete,t){const o=t.reward.unlockPro?"Pro Pip and strawberry seeds":`${Ae[t.reward.unlockCrop].label} seeds`;i.textContent=`Next unlock: ${o}. Milestone: ${t.title}.`}ne("#taskMilestones").innerHTML=To(n).map(o=>{const a=o.current>=o.target;return`<li class="${a?"is-complete":""}"><span>${a?"&#10003; ":""}${o.label}</span><strong>${Math.min(o.current,o.target)} / ${o.target}</strong></li>`}).join("");const r=ne("#taskUpgradeOptions");r.hidden=!n?.goals?.capacityUpgrade||Mu(),r.innerHTML=r.hidden?"":Df().map(o=>`<button class="choice-button" data-upgrade-target="${o.id}"><strong>${o.label}</strong><small>${o.cost} coins</small></button>`).join(""),r.querySelectorAll("[data-upgrade-target]").forEach(o=>o.addEventListener("click",()=>Yt(o.dataset.upgradeTarget)));const s=Ln.filter(o=>o.chapter===h.chapter);Re.chapterTaskList.innerHTML=s.map(o=>{const a=h.completedTasks.includes(o.id),c=o.id===n?.id;return`<div class="task-row ${a?"is-complete":""} ${c?"is-active":""}"><i>${a?"&#10003;":""}</i><span>${o.title}</span></div>`}).join("")}function tb(){const n=ei.filter(e=>h.rack[e]>0).map(e=>`${Ae[e].code} ${h.rack[e]}`);return n.length?n.join(" / "):"Empty"}function jf(){if(!h.carry)return"";if(h.carry.kind==="starter")return Ae[h.carry.crop].label;const n=h.carry.items.reduce((e,t)=>(e[t]=(e[t]||0)+1,e),{});return Object.entries(n).map(([e,t])=>`${vt()?Ae[e].label:Ae[e].code} ${t}`).join(" / ")}function Kf(){if(bf.hidden=!h.carry&&!h.farm.eggs,!h.carry){Re.carryKind.textContent="Egg crate / market",Re.carryContents.textContent=`${h.farm.eggs} eggs`;return}Re.carryKind.textContent=h.carry.kind==="starter"?"Tower starter / one":`Harvest basket / ${h.carry.items.length} of ${Ut(h).basket}`,vt()&&(Re.carryKind.textContent=h.carry.kind==="starter"?"To garden":`Basket ${h.carry.items.length}/${Ut(h).basket}`),Re.carryContents.textContent=jf()+(h.farm.eggs?` / ${h.farm.eggs} eggs`:"")}function xs(n){const e=Math.max(0,Math.ceil((n-$e())/1e3));return e>59?`${Math.floor(e/60)}m ${e%60}s`:`${e}s`}function Ao(){const n=ne("#sellFarmEggs");n.hidden=!h.farm.eggs;const e=Math.hypot(Te.x-nt.market.x,Te.z-nt.market.z)<3.6;n.textContent=e?`Sell ${h.farm.eggs} eggs / ${h.farm.eggs*8} coins`:`Take ${h.farm.eggs} eggs to the stand`,Re.rackSummary.textContent=tb();const t=ne("#orderMarketUpgrade"),i=Wi(h);t.hidden=!i,t.disabled=!i?.available,i&&(t.textContent=`${i.label} / ${i.cost} coins${i.reason?` / ${i.reason}`:""}`);const r=Nn(h)||vs(),s=vt(),o=ne("#mobileOrderAction"),a=ne("#mobileOrderDetails"),c=ne("#marketOptions");if(c.dataset.layout!==String(s)&&(c.open=!s,c.dataset.layout=String(s)),o.hidden=!s||!r,a.hidden=!s,s){const l=h.orders.filter(d=>d.status==="waiting"),u=r?Ul(h,r):null;jt(Re.orderList,l.length?`<div class="customer-picker" aria-label="Customers">${l.map(d=>{const p=Di.find(f=>f.name===d.customer)||Di[0];return`<button data-key="${d.id}" data-order-action="select" data-order-id="${d.id}" aria-label="${d.customer}: ${d.amount} ${Ae[d.crop].label}" aria-pressed="${d.id===r?.id}" title="${d.customer}"><img class="customer-avatar" src="${lh(p)}" alt=""><span>${d.customer}</span></button>`}).join("")}</div>${r?`<div class="mobile-order-summary"><strong>${r.amount} ${Ae[r.crop].label}</strong><b>${r.reward} coins</b><span>Basket ${u.stock.carried}/${r.amount}</span><span>${r.id===h.selectedOrderId?"Reserved":"Visiting"}</span></div>`:""}`:'<p class="order-status">No customers just now. Your stored crops are safe.</p>'),jt(o,r?`<button class="primary-command" data-order-action="fulfill" data-order-id="${r.id}">${u.label}</button>`:""),jt(a,r?`<p>Rack ${u.stock.stored} / Growing ${u.stock.growing+u.stock.ready} / +${r.xp} XP</p><p>${r.id===h.selectedOrderId?"Staying until you deliver or release.":`Leaving in ${xs(r.expiresAt)}`}</p><div class="mobile-order-options"><button data-order-action="wait" data-order-id="${r.id}">${r.id===h.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${r.id}">Release customer</button></div>`:"")}else jt(Re.orderList,h.orders.map((l,u)=>{const d=Di.find(x=>x.name===l.customer)||Di[0];if(l.status==="cooldown")return"";const p=Ul(h,l),f=p.stock,g=r?.id===l.id;return`<article class="order-card ${g?"is-selected":""}" data-order="${u}" data-key="${l.id}">
      <button class="order-select" data-order-action="select" data-order-id="${l.id}" aria-pressed="${l.id===h.selectedOrderId}"><img class="customer-avatar" src="${lh(d)}" alt=""><span><strong>${l.customer}</strong><span>${l.amount} ${Ae[l.crop].label}</span></span><span class="order-reward">${l.reward} coins<small>+${l.xp} XP</small></span></button>
      <div class="order-detail" ${g?"":"hidden"}>
        <p class="stock-breakdown">Basket <b>${f.carried}/${l.amount}</b> <span>Rack <b>${f.stored}</b></span> <span>Growing <b>${f.growing+f.ready}</b></span></p>
        <p class="order-status">${h.carry?.kind==="starter"?"Starter needs its garden finish":f.needed===0?"Packed for delivery":f.room===0?"Make room on the rack; your crops stay safe":f.load?`${f.load} needed from the rack`:f.ready?`${f.ready} ready in the garden`:f.missing?`${f.missing} still to plant`:"Your crop is growing"}</p>
        <p>${l.id===h.selectedOrderId?"Reserved: staying until you deliver or release":`Leaving in ${xs(l.expiresAt)}`}</p>
        <div class="order-actions"><button class="fulfill" data-order-action="fulfill" data-order-id="${l.id}" data-index="${u}">${p.label}</button><button data-order-action="wait" data-order-id="${l.id}">${l.id===h.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${l.id}">Release</button></div>
      </div>
    </article>`}).join("")||'<p class="order-status">The stand is quiet. Another neighbor will stop by soon. Stored produce keeps until then.</p>');dn.onclick=l=>{const u=l.target.closest("[data-order-action]");if(!u)return;const d=h.orders.findIndex(p=>p.id===u.dataset.orderId&&p.status==="waiting");d<0||(u.dataset.orderAction==="fulfill"&&Vf(u.dataset.orderId),["select","wait"].includes(u.dataset.orderAction)&&(Hf(d),Eo()),s&&u.dataset.orderAction==="select"&&(dn.querySelector(".order-scroll").scrollTop=0),u.dataset.orderAction==="reject"&&zf(d),Ao())},dn.hidden||(Ts.textContent=Lu("market"))}function Kn(n,e,t,i=!1){return`<button class="economy-command" data-command="${t}" ${i?"disabled":""}><span>${n}</span><strong>${e===0?"Free":`${e} coins`}</strong></button>`}function nb(n){const e=h.towers[n];if(Re.interactionKicker.textContent="Hydro production",Re.interactionTitle.textContent=`Tower ${n+1}`,!e.built){const c=gt.tower[n];Re.interactionSummary.textContent=`Four independent planting layers and Grow Bed ${n+1}.`,jt(un,Kn(`Build Tower ${n+1}`,c,`build-tower-${n}`,h.coins<c));return}if(!e.repaired){Re.interactionSummary.textContent="Repair the pump and flow line before planting.",jt(un,Kn("Repair tower",0,`repair-tower-${n}`));return}const t=Ss(e,h.carry,n),i=[0,1,2,3].map(c=>{const l=e.queue.find(d=>d.layer===c);if(!l)return`<label class="queue-slot is-empty"><b>${c+1}</b><span>${t.includes(c)?"Empty layer":"Reserved for carried starter"}</span><input type="radio" name="towerLayer" value="${c}" aria-label="Plant layer ${c+1}" ${c===t[0]?"checked":""} ${t.includes(c)?"":"disabled"}></label>`;const u=l.readyAt!==null&&l.readyAt<=$e();return`<div class="queue-slot" data-key="${l.id}"><b style="background:${Ae[l.crop].accent}">${c+1}</b><span>${Ae[l.crop].label}<small>${u?"Ready for the garden":xs(l.readyAt)}</small></span>${u?`<button class="storage-button" data-pickup-job="${l.id}" ${h.carry||!On()?"disabled":""}>Pick up</button>`:"<time>Growing</time>"}</div>`}).join(""),r=h.unlockedCrops.map(c=>`<button class="crop-button" data-queue-crop="${c}" ${!t.length||h.seeds[c]<=0?"disabled":""}><i style="background:${Ae[c].accent}">${Ae[c].code}</i><span>${Ae[c].label}<small>${h.seeds[c]} seeds / ${Math.ceil(gs(c,"tower",h,e))}s</small></span></button>`).join(""),s=h.carry?.kind==="starter"&&h.carry.sourceTower===n?Kn("Return starter to its layer",0,`return-${n}`):"",o=Pn(h,"drippers"),a=e.irrigationUpgraded?'<div class="status-strip"><span>Precision drippers</span><strong>Installed</strong></div>':Kn(o||"Precision drippers / 12% faster",gt.queueUpgrade,`upgrade-queue-${n}`,!!o||er()<gt.queueUpgrade);Re.interactionSummary.textContent=`${e.queue.length}/4 layers planted. One seed per layer; each crop grows independently.`,jt(un,`<div class="queue-list"><span>Layers / bottom to top</span>${i}</div>${s}<div class="crop-actions">${r}</div>${Su()}${a}`)}function ib(n){const e=h.beds[n],t=e.plants.filter(l=>l.readyAt<=$e());Re.interactionKicker.textContent="Garden grow-out",Re.interactionTitle.textContent=`Grow Bed ${n+1}`,Re.interactionSummary.textContent=`${e.plants.length} of ${e.capacity} plots used. ${t.length} crop${t.length===1?"":"s"} ready to harvest.`;const i=e.plants.length?e.plants.map(l=>`<div class="queue-slot"><b style="background:${Ae[l.crop].accent}">${Ae[l.crop].code}</b><span>${Ae[l.crop].label}<small>${l.readyAt<=$e()?"Garden finished":"Finishing in soil"}</small></span><time>${l.readyAt<=$e()?"Ready":xs(l.readyAt)}</time></div>`).join(""):`<div class="queue-slot is-empty"><b>1</b><span>Open garden plots<small>Tower starters finish here</small></span><time>${e.capacity}</time></div>`,r=h.carry?.kind==="starter"?Kn("Transplant starter",0,`transplant-${n}`,e.plants.length>=e.capacity):"",s=[...new Set(t.map(l=>l.crop))].map(l=>`<button class="economy-command" data-harvest-crop="${l}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ut(h).basket?"disabled":""}><span>Harvest ${Ae[l].label}</span><strong>${t.filter(u=>u.crop===l).length} ready</strong></button>`).join(""),o=Pn(h,"bed",n),a=e.capacity<4?Kn(o||"Add garden plot",gt.bedUpgrade[n],`upgrade-bed-${n}`,!!o||er()<gt.bedUpgrade[n]):"",c=h.farm.owned.includes("composter")?`<div class="status-strip"><span>Enriched plantings left</span><strong>${e.soilCharges}</strong></div><button class="economy-command" data-enrich-bed="${n}" ${e.soilCharges||!h.farm.compost?"disabled":""}><span>Enrich ${hu(h.farm)} plantings / 1 compost</span><strong>${h.farm.compost} bags</strong></button>`:"";jt(un,`<div class="queue-list"><span>Garden crops</span>${i}</div>${r}${s}${c}${Su()}${a}`)}function rb(){Re.interactionKicker.textContent="Seed merchant and vault",Re.interactionTitle.textContent="Bram's Seeds",Re.interactionSummary.textContent=`${h.coins} coins / ${Ol(h)} seeds per crop`;const n=["Quality seeds. Questionable hat.","I talk to my seedlings. They mostly ask for space.","Four layers, four seeds. The hat is extra."],e=h.unlockedCrops.map(t=>{const i=ja(h,t);return`<button class="crop-button" data-key="${t}" data-collect-crop="${t}" ${i.available?"":"disabled"}><i style="background:${Ae[t].accent}">${Ae[t].code}</i><span>${Ae[t].label}<small>${h.seeds[t]}/${Ol(h)} stored / ${i.amount} seeds for ${i.price} coins</small><small>${i.reason||(i.tutorial?"One free starter packet":"Buy packet")}</small></span></button>`}).join("");jt(un,`<p class="seed-merchant-quote">Bram: ${n[h.seedShop.purchases%n.length]}</p><div class="seed-stock">${e}</div>
    ${_u(h)?'<button class="secondary-command" data-rescue-seeds>Emergency lettuce packet / free</button>':""}
    ${Su()}
    <button class="economy-command" data-expand-vault ${h.seedShop.expanded||!h.market.built||Pn(h,"vault")||h.coins<Ea?"disabled":""}><span>${h.seedShop.expanded?"Expanded vault / 48 per crop":h.market.built?Pn(h,"vault")||"Expand vault / 48 per crop":"Vault expansion / open table first"}</span><strong>${h.seedShop.expanded?"Owned":Ea+" coins"}</strong></button>`)}function sb(){Re.interactionKicker.textContent="Neighborhood market";const n=Ms(h),e=Wi(h);Re.interactionTitle.textContent=n?Zh[n-1].label:"Pip's produce table";const t=e?`<p>Stage ${e.stage}/4: ${e.detail}</p>${Kn(e.reason||`Build ${e.label}`,e.cost,n?"upgrade-market":"build-market",!e.available)}`:"<p>Farm market complete. Family baskets available.</p>";if(!h.market.built){Re.interactionSummary.textContent=h.market.openingGrant?`${h.market.openingGrant} opening coins restored. Your crops and upgrades are safe.`:"Start small. Each new tower unlocks the next section of the stand.",jt(un,t);return}Re.interactionSummary.textContent=`Stage ${n}/4. ${h.stats.orders} orders complete. Up to ${gu(h)} visiting at once, with quiet spells between groups.`;const i=Kn("Open order board",0,"open-orders"),r=h.carry?.kind==="produce"?`<div class="status-strip"><span>Basket</span><strong>${jf()}</strong></div>`:"";jt(un,`${r}${i}${t}`)}function ob(){Re.interactionKicker.textContent="Produce storage",Re.interactionTitle.textContent="Harvest Rack",Re.interactionSummary.textContent=`${h.carry?.kind==="produce"?h.carry.items.length:0}/${Ut(h).basket} basket slots filled`;const n=h.carry?.kind==="produce"?Kn("Stage basket",0,"stage-produce"):"",e=Nn(h),t=e?_n(h,e).load:0,i=t?`<button class="economy-command" data-load-needed="${e.id}"><span>Load ${t} ${Ae[e.crop].label}</span><strong>For ${e.customer}</strong></button>`:"",r=ei.filter(o=>h.rack[o]>0).map(o=>`<div class="rack-row" data-key="stock-${o}"><span>${Ae[o].label}<small>${h.rack[o]} stored</small></span><input id="rack-qty-${o}" type="number" min="1" max="${Math.min(Ut(h).basket,h.rack[o])}" value="1" aria-label="${Ae[o].label} quantity"><button class="storage-button" data-load-crop="${o}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ut(h).basket?"disabled":""}>Load</button></div>`).join(""),s=h.carry?.kind==="produce"?[...new Set(h.carry.items)].map(o=>`<button class="storage-button" data-store-crop="${o}">Store ${Ae[o].label} (${h.carry.items.filter(a=>a===o).length})</button>`).join(""):"";jt(un,`${i}${n}<div class="storage-actions">${s}</div><div class="storage-group"><span>Stored produce</span>${r||"<span>Rack empty</span>"}</div>`)}function ab(){const n=h.hydro;Re.interactionKicker.textContent="Shared HydroPip system",Re.interactionTitle.textContent="IBC reservoir";const e=n.water?n.batchMixed?"Mixed starter batch":"Awaiting circulation":"Empty",t=xf(h),i=Mo(h);Re.interactionSummary.textContent=`${n.water.toFixed(1)}% / ${t}`;const r=(s,o)=>`<button class="secondary-command ${i[s]?"needs-service":""}" data-service="${s}" ${i[s]?"":"disabled"}>${o}${i[s]?'<span class="service-needed">Needs attention</span>':""}</button>`;jt(un,`<div class="storage-actions reservoir-actions">
    ${r("water",n.water>Aa?`Refill at ${Aa}%`:"Refill fresh batch")}
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
  </details>`)}function cb(){Re.interactionKicker.textContent="Farm improvements",Re.interactionTitle.textContent="Homestead Shop",Re.interactionSummary.textContent=`${er()} spendable coins. Production, soil care, and livestock.`;const n=Object.entries(kn).map(([i,r])=>{const s=rn(h.farm,i),o=fu(h,i);return`<div class="shop-item"><strong>${r.label} / ${s}/${r.stages.length}</strong><p>${_y(i,o?.level||s)}</p><button class="economy-command" data-buy-farm="${i}" ${!o||o.reason||er()<o.cost?"disabled":""}><span>${o?o.reason||`Buy ${o.label}`:"Complete"}</span><strong>${o?`${o.cost} coins`:"Owned"}</strong></button></div>`}).join(""),e=h.beds.map((i,r)=>i.built&&i.capacity<4?Kn(`Bed ${r+1}: ${Pn(h,"bed",r)||`add plot (${i.capacity}/4)`}`,gt.bedUpgrade[r],`upgrade-bed-${r}`,!!Pn(h,"bed",r)||er()<gt.bedUpgrade[r]):"").join("")+h.towers.map((i,r)=>i.built&&!i.irrigationUpgraded?Kn(`Tower ${r+1}: ${Pn(h,"drippers")||"precision drippers"}`,gt.queueUpgrade,`upgrade-queue-${r}`,!!Pn(h,"drippers")||er()<gt.queueUpgrade):"").join(""),t=Object.entries(oo).map(([i,r])=>{const s=h.cosmetics.owned.includes(i),o=h.cosmetics.active.includes(i);return`<button class="economy-command" ${s?`data-toggle-cosmetic="${i}"`:`data-buy-cosmetic="${i}"`} ${!s&&er()<gt.cosmetics[i]?"disabled":""}><span>${s?`${o?"Hide":"Show"} ${r.label}`:r.label}</span><strong>${s?"Owned":`${gt.cosmetics[i]} coins`}</strong></button>`}).join("");jt(un,`<div class="shop-list">${n}</div><div class="queue-list"><span>Production upgrades</span>${e||"<p>All production upgrades installed.</p>"}</div><div class="queue-list"><span>Decorations</span>${t}</div>`)}function Jf(n){const e=fu(h,n);if(e){if(e.reason||h.coins<e.cost){Ge(e.reason||`You need ${e.cost-h.coins} more coins.`);return}Si(0,()=>{if(!yy(h,n))throw new Error("Equipment unavailable")},!0)&&(zt("build","build"),Ge(`${e.label} added to the farm.`),Xe("farm_upgrade"),ut())}}function js(n,e=null){const t=h.coins;let i=!1;n==="compost"&&(i=Sy(h,$e(),co)),n==="feed"&&Ae[e]&&(i=Ey(h,e,$e(),co)),n==="eggs"&&(i=Ty(h)),n==="sell-eggs"&&Math.hypot(Te.x-nt.market.x,Te.z-nt.market.z)<3.6&&(i=Ay(h)),n==="enrich"&&(i=Cy(h,Number(e))),i&&(ki(h,n==="sell-eggs"?"egg-sale":n,e),zt(n==="sell-eggs"?"sell":"service",n==="sell-eggs"?"sale":"service"),Ge({compost:"Compost batch started.",feed:`Fed the coop. ${rn(h.farm,"coop")} egg(s) will be ready soon.`,eggs:"Eggs collected; one coop clean-out added to compost scraps.","sell-eggs":"Fresh eggs sold at the stand.",enrich:`Bed enriched for its next ${hu(h.farm)} plantings.`}[n]),Xe(`farm_${n}`),ut(),n==="sell-eggs"&&gi.coins(h.coins-t,tc(nt.market)))}function lb(n){const e=h.farm;if(Re.interactionKicker.textContent="Farm care",Re.interactionTitle.textContent=kn[n].label,n==="rainTank")Re.interactionSummary.textContent="Collected rainwater supplements the main reservoir.",jt(un,`<div class="status-strip"><span>Tower water consumption</span><strong>${rn(e,n)*10}% lower</strong></div><p>Active while tower layers grow. Refill the main reservoir as usual.</p>`);else if(n==="composter")Re.interactionSummary.textContent=`${e.scraps}/24 scraps / ${e.compost}/12 compost bags`,jt(un,`<div class="status-strip"><span>Compost batch</span><strong>${e.compostReadyAt?xs(e.compostReadyAt):"Ready to start"}</strong></div><button class="economy-command" data-farm-action="compost" ${e.compostReadyAt||e.scraps<2||e.compost>=12?"disabled":""}><span>Compost 2 scraps</span><strong>1 bag / ${ef(e)}s</strong></button><p>Harvest trimmings and coop clean-outs supply scraps. Apply finished compost at a garden bed.</p>`);else{Re.interactionSummary.textContent=`${e.eggs}/12 eggs packed / ${e.eggsReady} in the nest`;const t=ei.filter(i=>h.rack[i]>0);jt(un,`<div class="status-strip"><span>${rn(e,n)} hen(s)</span><strong>${e.coopReadyAt?xs(e.coopReadyAt):e.eggsReady?"Eggs ready":"Ready for feed"}</strong></div><div class="crop-actions">${t.map(i=>`<button class="crop-button" data-feed-hens="${i}" ${e.coopReadyAt||e.eggsReady?"disabled":""}><span>Feed 1 ${Ae[i].label}<small>${h.rack[i]} on rack</small></span></button>`).join("")||"<p>No stored vegetables for feed.</p>"}</div><button class="economy-command" data-farm-action="eggs" ${!e.eggsReady||e.eggs+e.eggsReady>12?"disabled":""}><span>Collect ${e.eggsReady||rn(e,n)} egg(s)</span><strong>Pack for market</strong></button><p>Sell packed eggs at the Veg Stand for 8 coins each. Hens stay safe between feedings.</p>`)}}function ub(){un.onclick=n=>{const e=n.target.closest("button");if(!e||e.disabled)return;const t=Bt,i=JSON.stringify(h.carry),r=Number(t?.split("-")[1]);if(e.dataset.command){const s=e.dataset.command;if(s==="open-orders")return cr();s.startsWith("repair-tower-")&&Eu(Number(s.at(-1))),s.startsWith("build-tower-")&&Tu(Number(s.at(-1))),s.startsWith("pickup-")&&ho(Number(s.at(-1))),s.startsWith("return-")&&tr(Number(s.at(-1))),s.startsWith("transplant-")&&fo(Number(s.at(-1))),s.startsWith("harvest-")&&po(Number(s.at(-1))),s.startsWith("upgrade-queue-")&&Gf(Number(s.at(-1))),s.startsWith("upgrade-bed-")&&Wf(Number(s.at(-1))),s==="build-market"&&Au(),s==="upgrade-market"&&Ru(),s==="stage-produce"&&mo()}if(e.dataset.queueCrop){const s=un.querySelector('[name="towerLayer"]:checked:not(:disabled)');Of(r,e.dataset.queueCrop,s?Number(s.value):null)}if(e.dataset.pickupJob&&ho(r,e.dataset.pickupJob),e.dataset.buyFarm&&Jf(e.dataset.buyFarm),e.dataset.farmAction&&js(e.dataset.farmAction),e.dataset.feedHens&&js("feed",e.dataset.feedHens),e.dataset.enrichBed!==void 0&&js("enrich",Number(e.dataset.enrichBed)),e.dataset.focusObject){Yt(e.dataset.focusObject);return}if(e.dataset.collectCrop&&Uf(e.dataset.collectCrop),e.dataset.rescueSeeds!==void 0&&kf(),e.dataset.expandVault!==void 0&&Nf(),e.dataset.harvestCrop&&po(r,e.dataset.harvestCrop),e.dataset.loadCrop&&Na(e.dataset.loadCrop,ne(`#rack-qty-${e.dataset.loadCrop}`).value),e.dataset.storeCrop&&mo(e.dataset.storeCrop),e.dataset.loadNeeded){const s=Nn(h);s&&Na(s.crop,_n(h,s).load)}e.dataset.service&&qf(e.dataset.service),e.dataset.flushLine!==void 0&&$f(),e.dataset.buyCosmetic&&Xf(e.dataset.buyCosmetic),e.dataset.toggleCosmetic&&Q1(e.dataset.toggleCosmetic),vt()&&/^(tower|bed)-/.test(t)&&i!==JSON.stringify(h.carry)?hn():sn.hidden&&Co(t)}}function Co(n,e=!0){if(Bn.hidden=!0,!(!n||!nt[n])&&!(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))){if(n==="market"&&h.market.built){Bt="market",cr();return}Bt=n,ni.hidden=!0,dn.hidden=!0,ii.hidden=!1,Rs(),n.startsWith("tower-")?nb(Number(n.split("-")[1])):n.startsWith("bed-")?ib(Number(n.split("-")[1])):n==="vault"?rb():n==="market"?sb():n==="rack"?ob():n==="reservoir"?ab():n==="filter"?(Re.interactionKicker.textContent="Tower water supply",Re.interactionTitle.textContent="Feedline filter",Re.interactionSummary.textContent=h.hydro.lineClogged?"Restricted flow: tower growth at 50%. Garden crops are unaffected.":"Full flow to all connected towers.",jt(un,`<button class="economy-command" data-flush-line ${h.hydro.lineClogged?"":"disabled"}><span>${h.hydro.lineClogged?"Clear clog":"Filter clear"}</span><strong>No cost</strong></button>`)):n==="workshop"?cb():["coop","composter","rainTank"].includes(n)&&lb(n),ub(),e&&Eo(),Ts.textContent=Lu(n)}}function hn(){Bn.hidden=!0,ne("#homesteadButton").setAttribute("aria-expanded","false"),ni.hidden=!0,ii.hidden=!0,dn.hidden=!0,Qa.setAttribute("aria-expanded","false"),Bt=null,Rs(),Eo()}function nc(){h.market.built&&(hn(),di=null,Gn=null,hi=null,gn(),Bn.hidden=!1,ne("#homesteadButton").setAttribute("aria-expanded","true"),Pa.render(h),Rs())}function Zf(n,e){if(n==="close")return hn();if(n==="render")return Pa.render(h);if(!h.market.built)return;if(n==="focus"){const o=Object.hasOwn(kn,e)?h.farm.owned.includes(e)?kn[e].attachment||e:"workshop":e;return hn(),Yt(o)}const t=h.coins,i=h.xp,r=Mr(h);let s=!1;if(n==="project"&&(s=Py(h,e)),n==="mastery"&&(s=Ly(h,e)),n==="request-accept"&&(s=Iy(h,e)),n==="request-claim"&&(s=Dy(h)),n==="request-refresh"&&(s=Uy(h)),n==="request-abandon"&&h.homestead.request&&(h.homestead.request=null,h.homestead.requestSerial++,s=!0),n==="pin"&&Jn(h).some(o=>o.id===e&&o.chapter<=h.chapter)&&(h.homestead.pinned=e,s=!0),!!s){if(["project","mastery","request-claim"].includes(n)){zt("celebrate","task-complete");const o=n==="project"&&{3:` Your basket now holds ${Ut(h).basket} crops.`,6:" Seed packets now contain 6 seeds at the same price.",12:" Tower water use is now 10% lower.",18:" The harvest festival display is installed."}[h.homestead.claimed.length];Ge(Mr(h)?"Master Grower! Your homestead and crop book are complete. New community requests await.":`Reward earned.${o||""}`)}if(Xe(`homestead_${n}`),ut(),Pa.render(h),["project","mastery","request-claim"].includes(n)){const o=!r&&Mr(h),a=rr.find(d=>d.id===e),c=h.homestead.claimed.length,l=n==="project"&&{3:"Basket expanded to 7 crops!",6:"Six seeds in every packet!",12:"10% less tower water use!",18:"Harvest festival unlocked!"}[c],u=o?"Master Grower!":n==="project"?a.title:n==="mastery"?`${Ae[e].label} mastery ${h.homestead.mastery[e]}/3`:"Community request complete!";gi.celebrate({title:u,detail:`+${h.coins-t} coins / +${h.xp-i} XP${l?`. ${l}`:""}${n==="mastery"?" / +2 seeds":""}`,major:o||n==="project"||n==="mastery"&&h.homestead.mastery[e]===3,rhythm:o||n==="project"&&c%3===0}),gi.coins(h.coins-t,tc())}}}function Qf(){if(h.campaignComplete)return nc();Bn.hidden=!0,ii.hidden=!0,dn.hidden=!0,ni.hidden=!1,Qa.setAttribute("aria-expanded","true"),Rs(),Yf()}function cr(){Bn.hidden=!0,h.market.built&&(Bt="market",ni.hidden=!0,ii.hidden=!0,dn.hidden=!1,Rs(),Ao(),h.tutorial.marketSeen||(h.tutorial.marketSeen=!0,Xe("market_seen")))}function Lu(n=Bt){if(vt()&&!Bt&&h.carry?.kind==="starter")return On()?"Transplant":"Return";if(!Bt&&cs())return"Deliver";if(!n)return h.carry?.kind==="starter"&&On()<=0?"Return":h.carry?.kind==="produce"&&h.carry.items.length>=Ut(h).basket&&h.market.built?cs()?"Deliver":"Stage":xi()?"Guide":"Inspect";const e=xi();if(n==="vault")return"Seeds";if(n==="market"){const t=Nn(h)||vs();return h.market.built&&t&&_n(h,t).needed===0?"Deliver":h.market.built?"Orders":"Build"}if(n==="rack")return h.carry?.kind==="produce"?"Stage":"Inspect";if(n==="reservoir")return"Service";if(n==="filter")return h.hydro.lineClogged?"Clear clog":"Inspect";if(n==="workshop")return"Shop";if(n.startsWith("tower-")){const t=Number(n.split("-")[1]),i=h.towers[t];return i.built?i.repaired?h.carry?.kind==="starter"&&h.carry.sourceTower===t?"Return":Vi(i,$e())&&!h.carry?"Pick up":"Plan":"Repair":"Build"}if(n.startsWith("bed-")){const t=Number(n.split("-")[1]);return h.carry?.kind==="starter"&&h.beds[t].plants.length>=h.beds[t].capacity&&On()<=0?"Return":h.carry?.kind==="starter"?"Transplant":h.beds[t].plants.some(i=>i.readyAt<=$e())?"Harvest":!Bt&&e&&e!==n?"Guide":"Inspect"}return"Inspect"}function ep(){if(Rt||!yn.hidden||!sn.hidden||!bi.hidden||!Dr.hidden)return;kr();const n=!!Bt,e=Bt||tp();if(vt()&&!n&&h.carry?.kind==="starter"){const i=Ff()||`tower-${h.carry.sourceTower}`;return i===e?i.startsWith("bed-")?fo(Number(i.split("-")[1])):tr(h.carry.sourceTower):Yt(i,!0)}if(!n&&cs()){const i=Nn(h),r=i&&_n(h,i).needed===0?i:h.orders.find(s=>s.status==="waiting"&&_n(h,s).needed===0);return Oa(h.orders.indexOf(r))}if(!e){if(h.carry?.kind==="starter"&&On()<=0){Ge("Beds are full, so Pip is returning this starter to its tower."),Yt(`tower-${h.carry.sourceTower}`);return}if(h.carry?.kind==="produce"&&h.carry.items.length>=Ut(h).basket&&h.market.built){Ge("Basket is full, so Pip is heading to the Harvest Rack."),Yt("rack");return}const i=xi();if(i){Yt(i,vt());return}Qf();return}if(e.startsWith("tower-")){const i=Number(e.split("-")[1]),r=h.towers[i];if(!r.built)return Tu(i);if(!r.repaired)return Eu(i);if(h.carry?.kind==="starter"&&h.carry.sourceTower===i)return tr(i);if(Vi(r,$e())&&!h.carry)return ho(i)}if(e.startsWith("bed-")){const i=Number(e.split("-")[1]);if(h.carry?.kind==="starter"&&h.beds[i].plants.length>=h.beds[i].capacity&&On()<=0)return tr(h.carry.sourceTower);if(h.carry?.kind==="starter")return fo(i);if(h.beds[i].plants.some(r=>r.readyAt<=$e())){const r=Nn(h)?.crop;return po(i,r&&h.beds[i].plants.some(s=>s.crop===r&&s.readyAt<=$e())?r:null)}}if(e==="market"&&h.market.built){const i=Nn(h)||vs();return i&&_n(h,i).needed===0?Oa(h.orders.indexOf(i)):cr()}if(e==="market"&&!h.market.built)return Au();if(e==="rack"&&h.carry?.kind==="produce")return mo();if(e==="filter"&&h.hydro.lineClogged)return $f();if(h.carry?.kind==="starter"&&On()<=0)return tr(h.carry.sourceTower);const t=xi();if(!n&&t&&t!==e)return Yt(t,vt());Co(e)}function tp(n=1.8){let e=null,t=n;return Object.entries(nt).forEach(([i,r])=>{if(["coop","composter","rainTank"].includes(i)&&!h.farm.owned.includes(i)||i.startsWith("bed-")&&!h.beds[Number(i.split("-")[1])].built)return;const s=Math.hypot(Te.x-r.x,Te.z-r.z);s<t&&(e=i,t=s)}),e}function Yt(n,e=!1){if(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))return;const t=nt[n];t&&(Gn=null,hi=null,di=n,Ra=e,Te.target={x:t.x,z:t.z+(n==="workshop"?1.9:n==="market"?1.3:1.15)},hn(),!vt()&&Ge(`Pip is heading to ${n.startsWith("tower")?`Tower ${Number(n.at(-1))+1}`:n.startsWith("bed")?`Grow Bed ${Number(n.at(-1))+1}`:n==="vault"?"the Seed Vault":n==="market"?"the Veg Stand":n==="rack"?"the Harvest Rack":n==="reservoir"?"the reservoir":n==="filter"?"the feed filter":Object.hasOwn(kn,n)?`the ${kn[n].label}`:"the farm shop"}.`))}function db(n){const e=Number(n.split("-")[1]);if(n.startsWith("tower-")){if(h.carry?.kind==="starter"&&h.carry.sourceTower===e)return tr(e),!0;const t=h.towers[e].queue.filter(i=>i.readyAt!==null&&i.readyAt<=$e());if(!h.carry&&t.length&&new Set(t.map(i=>i.crop)).size===1)return ho(e),!0}if(n.startsWith("bed-")){if(h.carry?.kind==="starter")return fo(e),!0;const t=h.beds[e].plants.filter(r=>r.readyAt<=$e()),i=Nn(h)?.crop;if(t.length&&(new Set(t.map(r=>r.crop)).size===1||t.some(r=>r.crop===i)))return po(e,t.some(r=>r.crop===i)?i:t[0].crop),!0}return n==="rack"&&h.carry?.kind==="produce"?(mo(),!0):!1}function hb(n){if(Rt)return;let e=(vn.right?1:0)-(vn.left?1:0)+Ca.x,t=(vn.down?1:0)-(vn.up?1:0)+Ca.z;if(Te.target&&!e&&!t){const o=Te.target.x-Te.x,a=Te.target.z-Te.z,c=Math.hypot(o,a);if(c<.16){if(Te.target=null,di){const l=di;di=null;const u=Ra;Ra=!1;const d=Gn;Gn=null;const p=hi;if(hi=null,l==="market"&&d){const f=h.orders.findIndex(g=>g.id===d&&g.status==="waiting");f>=0?Cu(f):Ge("That customer has left. Your produce is still in the basket."),sn.hidden&&!vt()&&cr()}else if(l==="rack"&&p){const f=h.orders.find(g=>g.id===p&&g.status==="waiting");f&&Na(f.crop,_n(h,f).load),cr()}else{const f=l.startsWith("tower-")&&h.carry?.kind==="starter"&&h.carry.sourceTower===Number(l.split("-")[1])&&On()<=0;f&&tr(h.carry.sourceTower),vt()&&(f||u&&db(l))||Co(l)}}}else e=o/c,t=a/c}else(e||t)&&(Te.target=null,di=null,Gn=null,hi=null);const i=!!(e||t);if(i){const o=Math.hypot(e,t);e/=Math.max(1,o),t/=Math.max(1,o),Te.x=It.clamp(Te.x+e*Te.speed*n,-13.8,13.8),Te.z=It.clamp(Te.z+t*Te.speed*n,-8.5,8.5),Te.pendingFacing=Math.atan2(e,t),Te.direction=Math.abs(e)>Math.abs(t)?e>0?"east":"west":t>0?"south":"north",Tt.rotation.y=It.lerp(Tt.rotation.y,Te.pendingFacing,Math.min(1,n*12))}Tt.position.x=Te.x,Tt.position.z=Te.z;const r=Tt.userData.parts;if(r){i&&(Te.gaitPhase+=Te.speed*n*1.65);const o=Math.sin(Te.gaitPhase),a=Math.min(1,n*14);if(r.body.position.y=i?Math.abs(o)*.014:Math.sin(performance.now()*.0018)*.005,r.body.rotation.x=0,r.legs.forEach((c,l)=>{const u=l?-o:o;c.rotation.x=It.lerp(c.rotation.x,i?-u*.4:0,a),r.knees[l].rotation.x=It.lerp(r.knees[l].rotation.x,i?Math.max(0,-u)*.38:0,a),r.boots[l].rotation.x=-c.rotation.x-r.knees[l].rotation.x*.7;const d=r.arms[l];d.rotation.x=It.lerp(d.rotation.x,h.carry?-.75:i?u*.28:0,a),d.rotation.z=(l?1:-1)*(h.carry?-.08:.08),r.elbows[l].rotation.x=It.lerp(r.elbows[l].rotation.x,h.carry?-.65:-.08,a)}),Te.actionTime>0){Te.actionTime-=n;const c=Math.sin((1-Te.actionTime/.72)*Math.PI);["plant","transplant","harvest"].includes(Te.action)&&(r.body.rotation.x=c*.22),["repair","service","build"].includes(Te.action)&&(r.arms[0].rotation.x=-1.2*c),Te.action==="sell"&&(r.arms[1].rotation.x=-1.25*c),Te.action==="celebrate"&&(r.arms[0].rotation.x=-1.5*c,r.arms[1].rotation.x=-1.5*c,r.body.position.y+=c*.13)}else r.body.rotation.x=0,Te.action=i?"run":"idle"}const s=tp();Bt||(Ts.textContent=Lu(s))}function ic(n,e=!1){const t=vt(),i=new I(Te.x*(t?.95:.55),.45,Te.z*(t?.9:.45));t&&!dn.hidden&&i.set(nt.market.x+.3,.45,nt.market.z+2.8),e||h.settings.reducedMotion?sa.copy(i):sa.lerp(i,1-Math.exp(-n*5));const s=t?It.clamp(Mn/520,.45,1):1;Ct.position.copy(sa).add(new I(7.7,13,14.3).multiplyScalar(s)),Ct.lookAt(sa),Ct.zoom=e||h.settings.reducedMotion?Zn:It.lerp(Ct.zoom,Zn,1-Math.exp(-n*12));const o=t&&[ii,dn,ni,Bn].find(f=>!f.hidden),a=t&&Wn>620&&innerWidth>innerHeight,c=o&&a?o.getBoundingClientRect().width*.5:0,l=o&&!a?o.getBoundingClientRect().height*.4:0,u=e||h.settings.reducedMotion?1:1-Math.exp(-n*6),d=It.lerp(Ct.view?.enabled?Ct.view.offsetX:0,c,u),p=It.lerp(Ct.view?.enabled?Ct.view.offsetY:0,l,u);d>.1||p>.1?Ct.setViewOffset(Wn,Mn,d,p,Wn,Mn):Ct.clearViewOffset(),Ct.updateProjectionMatrix(),Ct.updateMatrixWorld()}function Ps(n){Zn=It.clamp(n,.7,vt()?1.3:1.55),ne("#zoomOut").disabled=Zn<=.7001,ne("#zoomIn").disabled=Zn>=(vt()?1.3:1.55)-1e-4}function fb(){mt.updateMatrixWorld(!0);const n=nn.getBoundingClientRect(),e=[Qa,lo,bf,Sr,ne(".camera-tools"),ne("#landscapeNotice"),ii,dn,ni,Bn,...vt()?[ne("#thumbstick"),Ts,ne("#homesteadButton")]:[]].filter(u=>!u.hidden&&u.getClientRects().length&&getComputedStyle(u).visibility!=="hidden").map(u=>{const d=u.getBoundingClientRect();return{left:d.left-n.left,top:d.top-n.top,right:d.right-n.left,bottom:d.bottom-n.top}}),t=xi(),i=new Set(ec()),r=new I;function s(u,d,p,f,g){const x={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(const v of[-p,p])for(const m of[0,f])for(const M of[-g,g]){r.set(u+v,m,d+M).project(Ct);const y=(r.x+1)*Wn/2,_=(1-r.y)*Mn/2;x.left=Math.min(x.left,y),x.right=Math.max(x.right,y),x.top=Math.min(x.top,_),x.bottom=Math.max(x.bottom,_)}return x}zl=s(Te.x,Te.z,.65,2.15,.45),e.push(zl);for(const u of mt.children)u.userData.customerIndex!==void 0&&e.push(s(u.position.x,u.position.z,.45,2.2,.3));const o=[];for(const u of uo){const d=u.userData.worldLabel;u.getWorldPosition(r);const p=Math.hypot(r.x-Te.x,r.z-Te.z),f=-r.clone().applyMatrix4(Ct.matrixWorldInverse).z;if(r.project(Ct),u.visible=!1,u.labelElement.hidden=!0,p>(vt()?4.8:5.4)||f<=0||r.z<-1||r.z>1)continue;const g=(r.x+1)*Wn/2,x=(1-r.y)*Mn/2,v={left:g-d.width/2,right:g+d.width/2,top:x-d.height/2,bottom:x+d.height/2};if(v.left<6||v.right>Wn-6||v.top<6||v.bottom>Mn-6)continue;const m=u.userData.interactiveId;if(u.labelElement.classList.toggle("needs-attention",i.has(m)),!dn.hidden&&m!=="market"&&m!=="rack")continue;const M=(m===Bt?200:m===t?100:0)+(/ready/i.test(d.text)?20:0)-p;o.push({label:u,data:d,box:v,depth:f,priority:M})}o.sort((u,d)=>d.priority-u.priority);const a=(u,d)=>u.left<d.right+5&&u.right>d.left-5&&u.top<d.bottom+5&&u.bottom>d.top-5;let c=0;const l=new Set;for(const{label:u,data:d,box:p,depth:f}of o){const g=u.userData.interactiveId;if(c>=(vt()?3:5)||l.has(g))continue;const x=[0,-32,32].find(v=>{const m={...p,top:p.top+v,bottom:p.bottom+v};return m.top>=6&&m.bottom<=Mn-6&&!e.some(M=>a(m,M))});x!==void 0&&(p.top+=x,p.bottom+=x,u.visible=!0,u.labelElement.hidden=!1,u.labelElement.style.transform=`translate(${Math.round(p.left)}px, ${Math.round(p.top)}px)`,d.bounds=p,e.push(p),l.add(g),c+=1)}}function pb(n){const e=Fn(h);f1(h,n,$e(),(1-rn(h.farm,"rainTank")*.1)*Ut(h).water),e&&x1(h,n,$e())&&(Ge("Feed filter clogged. Check the delivery line before changing the nutrient batch.",6500),Xe("feedline_clogged"))}function mb(n=.5){if(!h.market.built)return;const e=h.orders.length;h.orders.forEach((r,s)=>{r.status==="waiting"&&r.expiresAt<=$e()&&r.id!==h.selectedOrderId&&r.id!==Gn&&wu(r,s,!1)}),h.orders=h.orders.filter(r=>r.id===h.selectedOrderId||r.id===Gn||r.expiresAt>$e());const t=Ny(h,n/co,Bf);e!==h.orders.length||t?(Xe(),ut()):dn.hidden||Ao()}function np(n){const e=ms[n.chapter];Re.chapterResultKicker.textContent=n.reward.campaignComplete?"Homestead foundations complete":`Chapter ${e.number} complete`,Re.chapterResultTitle.textContent=n.reward.campaignComplete?"The Pro Yard is thriving.":n.chapter===0?"The Homestead is growing.":"Your three-tower farm is ready!",Re.chapterResultSummary.textContent=n.reward.campaignComplete?"Your four-tower farm is open. Complete 18 homestead projects and earn 15 crop mastery badges to become a Master Grower.":n.chapter===0?"The first tower and Veg Stand are back in business.":"You expanded to three towers and served the neighborhood with tomato and kale. Next: build the Pro Yard.",Re.chapterCoins.textContent=`+${n.reward.coins||0}`,Re.chapterXp.textContent=`+${n.reward.xp||0}`,Re.chapterUnlock.textContent=n.reward.campaignComplete?"Homestead projects":ms[n.chapter+1].shortName,ne("#continueChapter").textContent=n.reward.campaignComplete?"Grow the homestead":"Continue",sn.hidden=!1,Rt=!0,gn(),Ni.stop(),gi.chapter(sn,!!n.reward.campaignComplete),ne("#continueChapter").focus(),Xe("chapter_complete"),Qn(n.reward.campaignComplete?"campaign_complete":"campaign_chapter_complete",{chapter:n.chapter+1,coins:h.coins,xp:h.xp})}function ut(){Pu(),Yf(),Kf(),!ii.hidden&&Bt&&Co(Bt,!1),dn.hidden||Ao(),Eo(),Ia.update()}function _s(){Wn=Math.max(1,nn.clientWidth),Mn=Math.max(1,nn.clientHeight);const n=So?1:La==="desktop"?1.55:Es?1.25:1.15;bt.setPixelRatio(Math.max(1,Math.min(window.devicePixelRatio||1,n))),bt.setSize(Wn,Mn,!1),Ct.aspect=Wn/Mn,Ct.updateProjectionMatrix(),Ps(Zn),ic(1,!0)}function gn(){wf?.reset(),Object.keys(vn).forEach(n=>{vn[n]=!1}),ne(".campaign-controls").querySelectorAll("[data-move]").forEach(n=>n.classList.remove("is-active"))}function Iu(n){if(Rt=n,document.body.classList.toggle("is-paused",Rt),w1.hidden=!Rt,Rt){gn(),Ni.stop(),Xe("pause");return}kr()}function ip(n){const e=Math.min(.05,(n-oh)/1e3||0);oh=n,nn.clientWidth>0&&nn.clientHeight>0&&(nn.clientWidth!==Wn||nn.clientHeight!==Mn)&&_s(),!Rt&&yn.hidden&&sn.hidden&&(hb(e),pb(e),$1(e),q1(e),ic(e),n-ah>500&&(ah=n,h=Ir(h),mb(),Pu(),Kf(),Lf()!==Sf&&Eo(),L1(),!ii.hidden&&Bt&&Co(Bt,!1)),n-Mf>5e3&&Xe(),va&&n>va&&(lo.textContent=ti(h)?.detail||"The homestead is ready for its next grow.",va=0,lo.classList.remove("is-active"))),k1(),n-ch>250&&(ch=n,Ia.update()),fb(),bt.render(vi,Ct),Vc+=1,n-Hc>=3e3&&(Vc/(n-Hc)*1e3<32&&La==="desktop"&&(La="adaptive",bt.shadowMap.enabled=!1,ri.castShadow=!1,bt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.15)),_s()),Hc=n,Vc=0),requestAnimationFrame(ip)}function gb(n){const e=bt.domElement.getBoundingClientRect();Wc.x=(n.clientX-e.left)/e.width*2-1,Wc.y=-((n.clientY-e.top)/e.height)*2+1,Gc.setFromCamera(Wc,Ct);const i=Gc.intersectObjects(mt.children,!0).find(o=>o.object.visible&&(o.object.userData.interactiveId||o.object.userData.instanceTargets?.[o.instanceId]));if(i){let o=i.object;for(;o&&!o.userData.orderId;)o=o.parent;return{id:i.object.userData.interactiveId||i.object.userData.instanceTargets[i.instanceId],orderId:o?.userData.orderId}}const r=new Zi(new I(0,1,0),0),s=new I;return Gc.ray.intersectPlane(r,s)?{point:s}:null}function ct(){const n=ti(h),e=o1(h);return{version:h.version,chapter:h.chapter,taskIndex:h.taskIndex,taskId:n?.id||null,coins:h.coins,xp:h.xp,level:h.level,challengeUnlocked:h.challengeUnlocked,campaignComplete:h.campaignComplete,proPip:h.proPip,unlockedCrops:[...h.unlockedCrops],towersBuilt:h.towers.filter(t=>t.built).length,bedsBuilt:h.beds.filter(t=>t.built).length,marketBuilt:h.market.built,marketLevel:h.market.level,marketStage:Ms(h),marketOffer:Wi(h),visitorCapacity:gu(h),milestones:To(n),selectedObject:Bt,selectedOrderId:h.selectedOrderId,saleAnimations:Xs.length,pendingDeliveryId:Gn,pendingRackOrderId:hi,pipTarget:Te.target,queueCapacities:h.towers.map(t=>t.queueCapacity),irrigationUpgrades:h.towers.map(t=>t.irrigationUpgraded),specializations:h.towers.map(t=>t.specialization),queueCount:h.towers.reduce((t,i)=>t+i.queue.length,0),gardenCount:h.beds.reduce((t,i)=>t+i.plants.length,0),seeds:{...h.seeds},rack:{...h.rack},carry:h.carry?JSON.parse(JSON.stringify(h.carry)):null,orders:h.orders.map(t=>({...t})),featuredOrder:vs()?{...vs()}:null,stats:JSON.parse(JSON.stringify(h.stats)),ledger:e,openBedCount:On(),taskDrawerOpen:!ni.hidden,interactionOpen:!ii.hidden,orderDrawerOpen:!dn.hidden,welcomeVisible:!yn.hidden,chapterResultVisible:!sn.hidden,guideTarget:xi(),actionLabel:Ts.textContent,marketChipVisible:!Sr.hidden,marketChipText:Sr.hidden?"":Sr.textContent.trim().replace(/\s+/g," "),paused:Rt,pipPosition:{x:Number(Te.x.toFixed(2)),z:Number(Te.z.toFixed(2))},pipDirection:Te.direction,pipHeight:Number(new Gi().setFromObject(Tt).getSize(new I).y.toFixed(3)),leafEarCount:Tt.userData.parts?.leafEars?.length||0,activeHudCoverage:vb(),coreTextMinimum:xb(),savePresent:!!localStorage.getItem(wo),performanceTier:La,renderCalls:bt.info.render.calls,renderTriangles:bt.info.render.triangles}}function vb(){const n=nn.getBoundingClientRect(),t=["#objectiveBar","#campaignMessage","#carryChip","#marketChip"].map(i=>ne(i)).filter(i=>i&&!i.hidden&&i.getClientRects().length).reduce((i,r)=>{const s=r.getBoundingClientRect(),o=Math.max(0,Math.min(s.right,n.right)-Math.max(s.left,n.left)),a=Math.max(0,Math.min(s.bottom,n.bottom)-Math.max(s.top,n.top));return i+o*a},0);return Number((t/Math.max(1,n.width*n.height)).toFixed(3))}function xb(){const n=[...document.querySelectorAll("#objectiveTitle,#campaignMessage,#actionButton,#marketChip strong,#carryContents,#coinValue,#levelValue,#xpValue,#chapterValue,#interactionPanel>p,.crop-button span,.crop-button small,.queue-slot time,.status-strip,.economy-command span,.order-card h3,.order-reward,.order-actions button,.task-row,.primary-task p")].filter(e=>e.getClientRects().length);return Math.min(...n.map(e=>Number.parseFloat(getComputedStyle(e).fontSize)))}function _b(){h.towers.forEach(n=>n.queue.forEach((e,t)=>{e.startedAt=$e()-1e3,e.readyAt=$e()-1})),Xe(),ut()}function yb(){h.beds.forEach(n=>n.plants.forEach(e=>{e.plantedAt=$e()-1e3,e.readyAt=$e()-1})),Xe(),ut()}function bb(n=500){h.coins+=n,Xe(),ut()}E1();ut();_s();yn.hidden=h.tutorial.welcomeSeen;h.tutorial.welcomeSeen?Qn("campaign_resume",{chapter:h.chapter+1,task:ti(h)?.id||"complete"}):Rt=!0;Qa.addEventListener("click",()=>h.campaignComplete?nc():ni.hidden?Qf():hn());ne("#homesteadButton").addEventListener("click",()=>Bn.hidden?nc():hn());Sr.addEventListener("click",()=>h.market.built?cr():Yt("market"));ne("#orderMarketUpgrade").addEventListener("click",()=>{Ru(),Ao()});ne("#sellFarmEggs").addEventListener("click",()=>{Math.hypot(Te.x-nt.market.x,Te.z-nt.market.z)>=3.6?Yt("market"):js("sell-eggs")});ne("#closeTasks").addEventListener("click",hn);ne("#closeInteraction").addEventListener("click",hn);ne("#closeOrders").addEventListener("click",hn);ne("#focusTaskButton").addEventListener("click",()=>Yt(xi()));Ts.addEventListener("click",ep);ne("#beginCampaign").addEventListener("click",()=>{h.tutorial.welcomeSeen=!0,yn.hidden=!0,Rt=!1,kr(),Xe("campaign_start"),Qn("campaign_start",{chapter:h.chapter+1,task:ti(h)?.id}),Ge("Repair Tower 1 to make the first permanent improvement.")});ne("#pauseButton").addEventListener("click",()=>Iu(!0));ne("#resumeButton").addEventListener("click",()=>Iu(!1));let rp=!1;ne("#settingsButton").addEventListener("click",()=>{rp=Rt,Rt=!0,Ni.stop(),gn(),Xe("settings_open"),bi.hidden=!1,ne("#highContrastSetting").checked=h.settings.highContrast,ne("#pipCoachSetting").checked=h.tutorial.coach.enabled,ne("#reducedMotionSetting").checked=h.settings.reducedMotion,ne("#musicSetting").value=String(Math.round(h.settings.musicVolume*100)),ne("#effectsSetting").value=String(Math.round(h.settings.effectsVolume*100)),Re.musicValue.textContent=`${Math.round(h.settings.musicVolume*100)}%`,Re.effectsValue.textContent=`${Math.round(h.settings.effectsVolume*100)}%`});function Du(){wb.cancelImport(),bi.hidden=!0,Rt=rp,gn(),Xe("settings")}ne("#closeSettings").addEventListener("click",Du);ne("#settingsDone").addEventListener("click",Du);ne("#retrySave").addEventListener("click",()=>Xe("retry"));const wb=c1(()=>h,n=>{h=n});ne("#saveWarning").addEventListener("click",()=>ne("#settingsButton").click());ne("#highContrastSetting").addEventListener("change",n=>{h.settings.highContrast=n.target.checked,Pu()});ne("#pipCoachSetting").addEventListener("change",n=>n.target.checked?Ia.enable():Ia.disable());ne("#reducedMotionSetting").addEventListener("change",n=>{h.settings.reducedMotion=n.target.checked,n.target.checked&&gi.clearMotion()});ne("#musicSetting").addEventListener("input",n=>{h.settings.musicVolume=Number(n.target.value)/100,Re.musicValue.textContent=`${n.target.value}%`,Cs()});ne("#effectsSetting").addEventListener("input",n=>{h.settings.effectsVolume=Number(n.target.value)/100,Re.effectsValue.textContent=`${n.target.value}%`,Cs()});ne("#soundButton").addEventListener("click",()=>{h.settings.soundEnabled=h.settings.soundEnabled===!1,Cs(),Xe("sound_toggle"),h.settings.soundEnabled&&kr()});Cs();ne("#resetFarm").addEventListener("click",()=>{bi.hidden=!0,Dr.hidden=!1});ne("#cancelReset").addEventListener("click",()=>{Dr.hidden=!0,bi.hidden=!1});ne("#confirmReset").addEventListener("click",()=>{h=s1(),location.reload()});ne("#continueChapter").addEventListener("click",()=>{sn.hidden=!0,gi.clearMotion(),Hs=null,Rt=!1,zt("celebrate","task-complete"),Xe("chapter_continue"),Ge(ti(h)?.story||"The homestead is ready for its next grow."),h.campaignComplete&&nc()});ne("#zoomOut").addEventListener("click",()=>Ps(Zn/1.15));ne("#zoomIn").addEventListener("click",()=>Ps(Zn*1.15));ne("#recenter").addEventListener("click",()=>{Ps(1),ic(1,!0)});nn.addEventListener("wheel",n=>{if(Rt||!yn.hidden||!sn.hidden)return;n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?Mn:1);Ps(Zn*Math.exp(-It.clamp(e,-160,160)*.0015))},{passive:!1});function sp(n){if(Rt||!yn.hidden||!sn.hidden)return;kr();const e=gb(n);if(e)if(e.orderId){const t=h.orders.findIndex(i=>i.id===e.orderId&&i.status==="waiting");t>=0&&(Hf(t),_n(h,h.orders[t]).needed===0?Oa(t):cr())}else e.id?Yt(e.id,vt()):e.point&&(hn(),di=null,Gn=null,hi=null,Te.target={x:It.clamp(e.point.x,-13.8,13.8),z:It.clamp(e.point.z,-8.5,8.5)})}wf=g1({canMove:()=>!Rt&&yn.hidden&&sn.hidden&&bi.hidden&&Dr.hidden,onStart:()=>{(Bt||[ii,dn,ni,Bn].some(n=>!n.hidden))&&hn(),gi.dismiss(),gn(),kr(),Te.target=null,di=null,Gn=null,hi=null,Ra=!1},onMove:(n,e)=>{Ca.x=n*.88+e*.47,Ca.z=e*.88-n*.47},onLayout:()=>{gn(),_s()},closePanels:hn});v1({onOpen:()=>{const n=Rt;return Rt=!0,gn(),Ni.stop(),Xe("display_options"),()=>{Rt=n,gn()}},onExit:()=>{gn(),Ni.stop(),Xe("display_exit"),yn.hidden&&sn.hidden&&bi.hidden&&Dr.hidden&&(Iu(!0),ne("#pauseReason").textContent="Your farm is saved. Resume when ready, or return to HydroPip.",ne("#resumeButton").focus())},onLeave:()=>{gn(),Ni.stop(),Xe("leave_game")},onResize:()=>{gn(),_s()}});const Fi=new Map;let Ks=null,Vl=!1;nn.addEventListener("pointerdown",n=>{if(n.pointerType!=="touch")return sp(n);if(nn.setPointerCapture(n.pointerId),Fi.set(n.pointerId,{x:n.clientX,y:n.clientY,startX:n.clientX,startY:n.clientY}),Fi.size===2){const[e,t]=[...Fi.values()];Ks={distance:Math.max(1,Math.hypot(e.x-t.x,e.y-t.y)),zoom:Zn},Vl=!0,Te.target=null,di=null,Gn=null,hi=null}});nn.addEventListener("pointermove",n=>{const e=Fi.get(n.pointerId);if(e&&(e.x=n.clientX,e.y=n.clientY,Fi.size===2&&Ks&&!Rt&&yn.hidden&&sn.hidden)){const[t,i]=[...Fi.values()];Ps(Ks.zoom*Math.hypot(t.x-i.x,t.y-i.y)/Ks.distance)}});function op(n){const e=Fi.get(n.pointerId);e&&!Vl&&n.type==="pointerup"&&Math.hypot(n.clientX-e.startX,n.clientY-e.startY)<10&&sp(n),Fi.delete(n.pointerId),Fi.size||(Vl=!1,Ks=null)}nn.addEventListener("pointerup",op);nn.addEventListener("pointercancel",op);document.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(e==="escape"){if(n.preventDefault(),!bi.hidden){Du();return}hn();return}n.target instanceof HTMLElement&&n.target.matches("button,input,a,textarea,select")||(["arrowleft","arrowright","arrowup","arrowdown"," "].includes(e)&&n.preventDefault(),(e==="arrowleft"||e==="a")&&(vn.left=!0),(e==="arrowright"||e==="d")&&(vn.right=!0),(e==="arrowup"||e==="w")&&(vn.up=!0),(e==="arrowdown"||e==="s")&&(vn.down=!0),n.code==="Space"&&!n.repeat&&ep())});document.addEventListener("keyup",n=>{const e=n.key.toLowerCase();(e==="arrowleft"||e==="a")&&(vn.left=!1),(e==="arrowright"||e==="d")&&(vn.right=!1),(e==="arrowup"||e==="w")&&(vn.up=!1),(e==="arrowdown"||e==="s")&&(vn.down=!1)});document.querySelectorAll("[data-move]").forEach(n=>{const e=n.dataset.move,t=i=>{vn[e]=i,n.classList.toggle("is-active",i)};n.addEventListener("pointerdown",i=>{i.preventDefault(),n.setPointerCapture(i.pointerId),t(!0)}),n.addEventListener("pointerup",()=>t(!1)),n.addEventListener("pointercancel",()=>t(!1)),n.addEventListener("pointerleave",()=>t(!1))});window.addEventListener("blur",gn);window.addEventListener("resize",_s);window.addEventListener("pagehide",()=>{gn(),Xe("pagehide")});document.addEventListener("visibilitychange",()=>{document.hidden?(gn(),Xe("visibility")):(h=Ir(bu()),Cs(),ut())});yf&&(window.__HYDROPIP_CAMPAIGN_TEST__={homesteadAction:Zf,homesteadView(){return{...h.homestead,complete:Mr(h),perks:Ut(h),active:Jn(h).map(n=>({id:n.id,ready:Xa(h,n),goals:bo(h,n)}))}},neighborhoodView(){return rs.snapshot()},neighborhoodEvent(n,e=0){rs.start(n);for(let t=0;t<e;t+=.05)rs.update(.05,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});return rs.snapshot()},farmEquipmentView(){const n=mt.getObjectByName("farm coop");return{owned:h.farm.owned,hens:(n?.userData.hens||[]).map(e=>({position:e.position.toArray(),turn:e.rotation.y}))}},layerScreenPoint(n,e){const t=nt[`tower-${n}`].clone();t.y=.52+e*.61+.4,t.x+=e%2?.16:-.16,t.z+=.29-e*.18,t.project(Ct);const i=bt.domElement.getBoundingClientRect();return{x:i.left+(t.x+1)*i.width/2,y:i.top+(1-t.y)*i.height/2}},farmLayout(){return{positions:Object.fromEntries(Object.entries(nt).map(([n,e])=>[n,{x:e.x,z:e.z}])),attention:ec(),labels:uo.filter(n=>n.visible).map(n=>({id:n.userData.interactiveId,text:n.userData.worldLabel.text,distance:Math.hypot(n.getWorldPosition(new I).x-Te.x,n.getWorldPosition(new I).z-Te.z)})),feedline:!!mt.getObjectByName("reservoir tower feedline"),lineClogged:h.hydro.lineClogged}},snapshot:ct,reservoirView(){return $y(mt.getObjectByName("water reservoir"))},hydroView(){let n=null;return mt.traverse(e=>{e.userData.flowSegments&&(n={visible:e.visible,count:e.count,matrices:Array.from(e.instanceMatrix.array.slice(0,48))})}),{flow:n,feed:xf(h),available:Mo(h),plantedLayers:Za(h)}},setWater(n){return h.hydro.water=It.clamp(n,0,100),Xe("test-water"),ct()},viewState(){const n=bt.domElement.getBoundingClientRect(),e=Ct.projectionMatrix.elements;return{aspect:Ct.aspect,width:Wn,height:Mn,canvasWidth:n.width,canvasHeight:n.height,bufferWidth:bt.domElement.width,bufferHeight:bt.domElement.height,squareRatio:e[0]*n.width/(e[5]*n.height),zoom:Ct.zoom,targetZoom:Zn,pipBounds:zl,direction:Ct.getWorldDirection(new I).toArray(),labels:uo.filter(t=>t.visible).map(t=>({...t.userData.worldLabel,opacity:1}))}},customerView(){const n=new Wh;return mt.children.filter(e=>e.userData.customerIndex!==void 0).map(e=>{const t=e.localToWorld(new I(0,1.65,0)).project(Ct);n.setFromCamera(new ge(t.x,t.y),Ct);let i=n.intersectObjects(mt.children,!0).find(r=>r.object.visible)?.object;for(;i&&i.parent!==mt;)i=i.parent;return{index:e.userData.customerIndex,x:(t.x+1)*Wn/2,y:(1-t.y)*Mn/2,unoccluded:i===e}})},focusObject:Yt,characterPortrait(n=.22){const e=new iu;e.background=new st(8894381),e.add(new uu(16775142,6585696,1.3));const t=new Va(16773330,1.5);t.position.set(-3,5,5),e.add(t);const i=Jh(h.proPip);i.rotation.y=n,e.add(i);const r=new wn(30,.8,.1,20);r.position.set(0,1.8,6),r.lookAt(0,1.23,0);const s=480,o=600,a=new Bi(s,o);a.texture.colorSpace=en;const c=bt.getRenderTarget();try{bt.setRenderTarget(a),bt.render(e,r);const l=new Uint8Array(s*o*4);bt.readRenderTargetPixels(a,0,0,s,o,l);const u=document.createElement("canvas");u.width=s,u.height=o;const d=u.getContext("2d"),p=d.createImageData(s,o);for(let f=0;f<o;f++)p.data.set(l.subarray(f*s*4,(f+1)*s*4),(o-f-1)*s*4);return d.putImageData(p,0,0),u.toDataURL("image/png")}finally{bt.setRenderTarget(c),a.dispose(),Oi(i)}},characterRig(){Tt.updateMatrixWorld(!0);const n=Tt.userData.parts,e=t=>t.getWorldPosition(new I).toArray();return{handsAttached:n.hands.every((t,i)=>t.parent===n.elbows[i]&&n.elbows[i].parent===n.arms[i]),bootsAttached:n.boots.every((t,i)=>t.parent===n.knees[i]&&n.knees[i].parent===n.legs[i]),overalls:!!Tt.getObjectByName("farmer overalls"),growingSuit:n.farmerSuit.visible,faceFrame:!!Tt.getObjectByName("Pip head"),earPieces:n.headsetCups.length,eyeHighlights:n.eyes.length,emblem:!!Tt.getObjectByName("HydroPip shirt emblem"),belt:n.belt.visible,hands:n.hands.map(e),feet:n.boots.map(e),elbows:n.elbows.map(e),shoulders:n.arms.map(t=>t.rotation.toArray().slice(0,3)),bodyLift:n.body.position.y,leaves:n.leafEars.length,height:new Gi().setFromObject(Tt).getSize(new I).y}},renderedCrops(){const n=[];return mt.traverse(e=>{if(!e.userData.growthTiming)return;const t=e.children.filter(i=>i.geometry?.type==="ExtrudeGeometry");n.push({crop:e.userData.crop,location:e.userData.interactiveId,stage:e.userData.growthStage,scale:e.userData.growthScale??e.scale.x,visibleFruit:e.children.filter(i=>i.userData.ripeningFruit&&i.visible).reduce((i,r)=>i+(r.isInstancedMesh?r.count*r.userData.fruitPerInstance:1),0),instances:e.userData.plantingPlacements?.length||1,layer:e.userData.layer??null,jobId:e.userData.jobId??null,leaves:(e.userData.foliageMaterials||t.map(i=>i.material)).map(i=>({r:i.color.r,g:i.color.g,b:i.color.b}))})}),n},dismissWelcome(){return h.tutorial.welcomeSeen=!0,yn.hidden=!0,Rt=!1,Xe(),ct()},reset(){return h=Ja(),h.tutorial.welcomeSeen=!0,Rt=!1,Xe(),ut(),ct()},reloadState(){return h=Ir(bu()),ut(),ct()},grantCoins:bb,repairTower(n=0){return Eu(n),ct()},buildTower(n){return Tu(n),ct()},buildMarket(){return Au(),ct()},collectSeeds(n){return Uf(n),ct()},rescueSeeds(){return kf(),ct()},expandVault(){return Nf(),ct()},queueCrop(n,e,t=null){return Of(n,e,t),ct()},matureTowers(){return _b(),ct()},pickupStarter(n,e=null){return ho(n,e),ct()},returnStarter(n){return tr(n),ct()},transplant(n){return fo(n),ct()},matureBeds(){return yb(),ct()},harvest(n,e=null){return po(n,e),ct()},stageProduce(){return mo(),ct()},loadRack(n,e=5){return Na(n,e),ct()},upgradeQueue(n){return Gf(n),ct()},upgradeBed(n){return Wf(n),ct()},upgradeMarket(){return Ru(),ct()},buyCosmetic(n){return Xf(n),ct()},buyFarmUpgrade(n){return Jf(n),ct()},farmAction(n,e){return js(n,e),ct()},serviceHydro(n){return qf(n),ct()},forceOrders(n=["lettuce","basil","lettuce"]){return h.orders=n.slice(0,3).map((e,t)=>({...Bf(t),slot:t,crop:e,amount:1,reward:Ae[e].coinValue+10})),Xe(),ut(),ct()},grantProduce(n,e=1){if(!Ae[n])return ct();h.carry?.kind==="starter"&&(h.carry=null),h.carry||(h.carry={kind:"produce",items:[]});let t=0;for(let i=0;i<e&&h.carry.items.length<Ut(h).basket;i+=1)h.carry.items.push(n),t+=1;return h.stats.planted+=t,h.stats.transplanted+=t,h.stats.harvested+=t,h.stats.byCropQueued[n]+=t,h.stats.byCropHarvested[n]+=t,Xe(),ut(),ct()},grantStarter(n="lettuce",e=0){return Ae[n]&&(h.carry={kind:"starter",crop:n,quality:1,sourceTower:e,sourceLayer:Ss(h.towers[e])[0],job:{id:crypto.randomUUID(),crop:n,queuedAt:$e(),startedAt:$e(),readyAt:$e(),quality:1}},h.stats.planted+=1,h.stats.byCropQueued[n]+=1,Xe(),ut()),ct()},fillBeds(){return h.beds.filter(n=>n.built).forEach(n=>{for(;n.plants.length<n.capacity;)n.plants.push({id:crypto.randomUUID(),crop:"lettuce",plantedAt:$e(),readyAt:$e()+9999999,quality:1}),h.stats.planted+=1,h.stats.transplanted+=1,h.stats.byCropQueued.lettuce+=1}),Xe(),ut(),ct()},deliver(n){return Cu(n),ct()},reject(n){return zf(n),ct()},openOrders(){return cr(),ct()},showResult(n=11){return np(Ln[Math.max(0,Math.min(Ln.length-1,n))]),ct()},showcasePip(n="south"){const e={south:0,east:Math.PI/2,north:Math.PI,west:-Math.PI/2};return n in e&&(Te.direction=n,Te.pendingFacing=e[n],Tt.rotation.y=e[n],Te.x=0,Te.z=-.25,Te.target=null,di=null,hn(),ic(1,!0)),ct()},setTask(n){return h.taskIndex=Math.max(0,Math.min(Ln.length,n)),h.chapter=Ln[h.taskIndex]?.chapter??2,Xe(),ut(),ct()},save(){return Xe("test"),ct()},rawState(){return JSON.parse(JSON.stringify(h))}});window.__HYDROPIP_CAMPAIGN_READY__=!0;requestAnimationFrame(ip);
