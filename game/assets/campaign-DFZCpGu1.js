(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Jl="179",Mp=0,Yu=1,Sp=2,xh=1,_h=2,Ui=3,ar=0,yn=1,un=2,rr=0,ls=1,ju=2,Ku=3,Ju=4,Ep=5,wr=100,Tp=101,Ap=102,Cp=103,Rp=104,Pp=200,Lp=201,Ip=202,Dp=203,el=204,tl=205,Up=206,kp=207,Np=208,Op=209,Fp=210,Bp=211,zp=212,Hp=213,Vp=214,nl=0,il=1,rl=2,fs=3,sl=4,ol=5,al=6,cl=7,yh=0,Gp=1,Wp=2,sr=0,$p=1,qp=2,Xp=3,bh=4,Yp=5,jp=6,Kp=7,wh=300,ps=301,ms=302,ll=303,ul=304,$a=306,Sa=1e3,Sr=1001,dl=1002,Un=1003,Jp=1004,Oo=1005,hi=1006,pc=1007,Er=1008,vi=1009,Mh=1010,Sh=1011,eo=1012,Zl=1013,Cr=1014,fi=1015,_o=1016,Ql=1017,eu=1018,to=1020,Eh=35902,Th=1021,Ah=1022,Zn=1023,no=1026,io=1027,tu=1028,nu=1029,Ch=1030,iu=1031,ru=1033,fa=33776,pa=33777,ma=33778,ga=33779,hl=35840,fl=35841,pl=35842,ml=35843,gl=36196,vl=37492,xl=37496,_l=37808,yl=37809,bl=37810,wl=37811,Ml=37812,Sl=37813,El=37814,Tl=37815,Al=37816,Cl=37817,Rl=37818,Pl=37819,Ll=37820,Il=37821,va=36492,Dl=36494,Ul=36495,Rh=36283,kl=36284,Nl=36285,Ol=36286,Zp=3200,Qp=3201,su=0,em=1,tr="",nn="srgb",gs="srgb-linear",Ea="linear",Et="srgb",Hr=7680,Zu=519,tm=512,nm=513,im=514,Ph=515,rm=516,sm=517,om=518,am=519,Qu=35044,ed="300 es",pi=2e3,Ta=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let td=1234567;const $s=Math.PI/180,ro=180/Math.PI;function Ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function ou(n,e){return(n%e+e)%e}function cm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lm(n,e,t){return n!==e?(t-n)/(e-n):0}function qs(n,e,t){return(1-t)*n+t*e}function um(n,e,t,i){return qs(n,e,1-Math.exp(-t*i))}function dm(n,e=1){return e-Math.abs(ou(n,e*2)-e)}function hm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mm(n,e){return n+Math.random()*(e-n)}function gm(n){return n*(.5-Math.random())}function vm(n){n!==void 0&&(td=n);let e=td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xm(n){return n*$s}function _m(n){return n*ro}function ym(n){return(n&n-1)===0&&n!==0}function bm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mm(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:$s,RAD2DEG:ro,generateUUID:Ur,clamp:ht,euclideanModulo:ou,mapLinear:cm,inverseLerp:lm,lerp:qs,damp:um,pingpong:dm,smoothstep:hm,smootherstep:fm,randInt:pm,randFloat:mm,randFloatSpread:gm,seededRandom:vm,degToRad:xm,radToDeg:_m,isPowerOfTwo:ym,ceilPowerOfTwo:bm,floorPowerOfTwo:wm,setQuaternionFromProperEuler:Mm,normalize:gn,denormalize:rs};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==h||l!==p||u!==g){let v=1-a;const m=c*h+l*p+u*g+d*x,w=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const A=Math.sqrt(b),C=Math.atan2(A,m*w);v=Math.sin(v*C)/A,a=Math.sin(a*C)/A}const _=a*w;if(c=c*v+h*_,l=l*v+p*_,u=u*v+g*_,d=d*v+x*_,v===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-a*p,e[t+2]=l*g+u*p+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new D,nd=new yo;class ct{constructor(e,t,i,r,s,o,a,c,l){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=r[0],v=r[3],m=r[6],w=r[1],b=r[4],_=r[7],A=r[2],C=r[5],R=r[8];return s[0]=o*x+a*w+c*A,s[3]=o*v+a*b+c*C,s[6]=o*m+a*_+c*R,s[1]=l*x+u*w+d*A,s[4]=l*v+u*b+d*C,s[7]=l*m+u*_+d*R,s[2]=h*x+p*w+g*A,s[5]=h*v+p*b+g*C,s[8]=h*m+p*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gc.makeScale(e,t)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new ct;function Lh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sm(){const n=Aa("canvas");return n.style.display="block",n}const id={};function us(n){n in id||(id[n]=!0,console.warn(n))}function Em(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const rd=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){const n={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Et&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(r.r=ds(r.r),r.g=ds(r.g),r.b=ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?Ea:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gs]:{primaries:e,whitePoint:i,transfer:Ea,toXYZ:rd,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:rd,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const xt=Tm();function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vr;class Am{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vr===void 0&&(Vr=Aa("canvas")),Vr.width=e.width,Vr.height=e.height;const r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cm=0;class au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vc(r[o].image)):s.push(vc(r[o]))}else s=vc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Am.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;const xc=new D;class dn extends Ss{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=Sr,r=Sr,s=hi,o=Er,a=Zn,c=vi,l=dn.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ur(),this.name="",this.source=new au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=wh;dn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],x=c[2],v=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+v)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,_=(p+1)/2,A=(m+1)/2,C=(u+h)/4,R=(d+x)/4,I=(g+v)/4;return b>_&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=C/i,s=R/i):_>A?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=I/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=I/s),this.set(i,r,s,t),this}let w=Math.sqrt((v-g)*(v-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(v-g)/w,this.y=(d-x)/w,this.z=(h-u)/w,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pm extends Ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new dn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new au(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Pm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ih extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lm extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Bo.subVectors(this.max,Us),Gr.subVectors(e.a,Us),Wr.subVectors(e.b,Us),$r.subVectors(e.c,Us),Yi.subVectors(Wr,Gr),ji.subVectors($r,Wr),pr.subVectors(Gr,$r);let t=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-pr.z,pr.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,pr.z,0,-pr.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-pr.y,pr.x,0];return!_c(t,Gr,Wr,$r,Bo)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,Gr,Wr,$r,Bo))?!1:(zo.crossVectors(Yi,ji),t=[zo.x,zo.y,zo.z],_c(t,Gr,Wr,$r,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,Fo=new xi,Gr=new D,Wr=new D,$r=new D,Yi=new D,ji=new D,pr=new D,Us=new D,Bo=new D,zo=new D,mr=new D;function _c(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mr.fromArray(n,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),c=e.dot(mr),l=t.dot(mr),u=i.dot(mr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Im=new xi,ks=new D,yc=new D;class Es{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Im.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(yc)),this.expandByPoint(ks.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pi=new D,bc=new D,Ho=new D,Ki=new D,wc=new D,Vo=new D,Mc=new D;class cu{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bc.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(bc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ho),a=Ki.dot(this.direction),c=-Ki.dot(Ho),l=Ki.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(bc).addScaledVector(Ho,h),p}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,r,s){wc.subVectors(t,e),Vo.subVectors(i,e),Mc.crossVectors(wc,Vo);let o=this.direction.dot(Mc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const c=a*this.direction.dot(Vo.crossVectors(Ki,Vo));if(c<0)return null;const l=a*this.direction.dot(wc.cross(Ki));if(l<0||c+l>o)return null;const u=-a*Ki.dot(Mc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,c,l,u,d,h,p,g,x,v){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,p,g,x,v)}set(e,t,i,r,s,o,a,c,l,u,d,h,p,g,x,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=p,m[7]=g,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-x*l,t[9]=-a*c,t[2]=x-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,x=l*d;t[0]=h+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,x=l*d;t[0]=h-x*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,x=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+x,t[1]=c*d,t[5]=x*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-x*d}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+x,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Um)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ji.crossVectors(i,Pn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ji.crossVectors(i,Pn)),Ji.normalize(),Go.crossVectors(Pn,Ji),r[0]=Ji.x,r[4]=Go.x,r[8]=Pn.x,r[1]=Ji.y,r[5]=Go.y,r[9]=Pn.y,r[2]=Ji.z,r[6]=Go.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],v=i[10],m=i[14],w=i[3],b=i[7],_=i[11],A=i[15],C=r[0],R=r[4],I=r[8],M=r[12],y=r[1],E=r[5],N=r[9],U=r[13],P=r[2],G=r[6],O=r[10],J=r[14],B=r[3],Z=r[7],re=r[11],me=r[15];return s[0]=o*C+a*y+c*P+l*B,s[4]=o*R+a*E+c*G+l*Z,s[8]=o*I+a*N+c*O+l*re,s[12]=o*M+a*U+c*J+l*me,s[1]=u*C+d*y+h*P+p*B,s[5]=u*R+d*E+h*G+p*Z,s[9]=u*I+d*N+h*O+p*re,s[13]=u*M+d*U+h*J+p*me,s[2]=g*C+x*y+v*P+m*B,s[6]=g*R+x*E+v*G+m*Z,s[10]=g*I+x*N+v*O+m*re,s[14]=g*M+x*U+v*J+m*me,s[3]=w*C+b*y+_*P+A*B,s[7]=w*R+b*E+_*G+A*Z,s[11]=w*I+b*N+_*O+A*re,s[15]=w*M+b*U+_*J+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],x=e[7],v=e[11],m=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*p-i*c*p)+x*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+v*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+m*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],x=e[13],v=e[14],m=e[15],w=d*v*l-x*h*l+x*c*p-a*v*p-d*c*m+a*h*m,b=g*h*l-u*v*l-g*c*p+o*v*p+u*c*m-o*h*m,_=u*x*l-g*d*l+g*a*p-o*x*p-u*a*m+o*d*m,A=g*d*c-u*x*c-g*a*h+o*x*h+u*a*v-o*d*v,C=t*w+i*b+r*_+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=w*R,e[1]=(x*h*s-d*v*s-x*r*p+i*v*p+d*r*m-i*h*m)*R,e[2]=(a*v*s-x*c*s+x*r*l-i*v*l-a*r*m+i*c*m)*R,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*p-i*c*p)*R,e[4]=b*R,e[5]=(u*v*s-g*h*s+g*r*p-t*v*p-u*r*m+t*h*m)*R,e[6]=(g*c*s-o*v*s-g*r*l+t*v*l+o*r*m-t*c*m)*R,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*R,e[8]=_*R,e[9]=(g*d*s-u*x*s-g*i*p+t*x*p+u*i*m-t*d*m)*R,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*m+t*a*m)*R,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*R,e[12]=A*R,e[13]=(u*x*r-g*d*r+g*i*h-t*x*h-u*i*v+t*d*v)*R,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*v-t*a*v)*R,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,g=s*d,x=o*u,v=o*d,m=a*d,w=c*l,b=c*u,_=c*d,A=i.x,C=i.y,R=i.z;return r[0]=(1-(x+m))*A,r[1]=(p+_)*A,r[2]=(g-b)*A,r[3]=0,r[4]=(p-_)*C,r[5]=(1-(h+m))*C,r[6]=(v+w)*C,r[7]=0,r[8]=(g+b)*R,r[9]=(v-w)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const l=1/s,u=1/o,d=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=pi,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===pi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ta)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=pi,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===pi)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ta)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qr=new D,jn=new Mt,Dm=new D(0,0,0),Um=new D(1,1,1),Ji=new D,Go=new D,Pn=new D,od=new Mt,ad=new yo;class _i{constructor(e=0,t=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ad.setFromEuler(this),this.setFromQuaternion(ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let km=0;const cd=new D,Xr=new yo,Li=new Mt,Wo=new D,Ns=new D,Nm=new D,Om=new yo,ld=new D(1,0,0),ud=new D(0,1,0),dd=new D(0,0,1),hd={type:"added"},Fm={type:"removed"},Yr={type:"childadded",child:null},Sc={type:"childremoved",child:null};class Ut extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new D,t=new _i,i=new yo,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ct}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(ud,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(ud,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wo.copy(e):Wo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ns,Wo,this.up):Li.lookAt(Wo,Ns,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(Li),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fm),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Om,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new D,Ii=new D,Ec=new D,Di=new D,jr=new D,Kr=new D,fd=new D,Tc=new D,Ac=new D,Cc=new D,Rc=new Wt,Pc=new Wt,Lc=new Wt;class Jn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),Ii.subVectors(i,t),Ec.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(Ii),c=Kn.dot(Ec),l=Ii.dot(Ii),u=Ii.dot(Ec),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Rc.setScalar(0),Pc.setScalar(0),Lc.setScalar(0),Rc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,i),Lc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rc,s.x),o.addScaledVector(Pc,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),Ii.subVectors(e,t),Kn.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Kn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;jr.subVectors(r,i),Kr.subVectors(s,i),Tc.subVectors(e,i);const c=jr.dot(Tc),l=Kr.dot(Tc);if(c<=0&&l<=0)return t.copy(i);Ac.subVectors(e,r);const u=jr.dot(Ac),d=Kr.dot(Ac);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(jr,o);Cc.subVectors(e,s);const p=jr.dot(Cc),g=Kr.dot(Cc);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Kr,a);const v=u*g-p*d;if(v<=0&&d-u>=0&&p-g>=0)return fd.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(fd,a);const m=1/(v+x+h);return o=x*m,a=h*m,t.copy(i).addScaledVector(jr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Ic(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=ou(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ic(o,s,e+1/3),this.g=Ic(o,s,e),this.b=Ic(o,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return xt.workingToColorSpace(ln.copy(this),e),Math.round(ht(ln.r*255,0,255))*65536+Math.round(ht(ln.g*255,0,255))*256+Math.round(ht(ln.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(ln.copy(this),t);const i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=nn){xt.workingToColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,r=ln.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL($o);const i=qs(Zi.h,$o.h,t),r=qs(Zi.s,$o.s,t),s=qs(Zi.l,$o.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ot;ot.NAMES=Dh;let Bm=0;class kr extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=ls,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==el&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ft extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new D,qo=new ge;let zm=0;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qo.fromBufferAttribute(this,t),qo.applyMatrix3(e),this.setXY(t,qo.x,qo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qu&&(e.usage=this.usage),e}}class Uh extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kh extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hm=0;const Vn=new Mt,Dc=new Ut,Jr=new D,Ln=new xi,Os=new xi,en=new D;class jt extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lh(e)?kh:Uh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ct().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Ln.min,Os.min),Ln.expandByPoint(en),en.addVectors(Ln.max,Os.max),Ln.expandByPoint(en)):(Ln.expandByPoint(Os.min),Ln.expandByPoint(Os.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)en.fromBufferAttribute(a,l),c&&(Jr.fromBufferAttribute(e,l),en.add(Jr)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new D,c[I]=new D;const l=new D,u=new D,d=new D,h=new ge,p=new ge,g=new ge,x=new D,v=new D;function m(I,M,y){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,I),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(E),v.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),a[I].add(x),a[M].add(x),a[y].add(x),c[I].add(v),c[M].add(v),c[y].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,M=w.length;I<M;++I){const y=w[I],E=y.start,N=y.count;for(let U=E,P=E+N;U<P;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const b=new D,_=new D,A=new D,C=new D;function R(I){A.fromBufferAttribute(r,I),C.copy(A);const M=a[I];b.copy(M),b.sub(A.multiplyScalar(A.dot(M))).normalize(),_.crossVectors(C,M);const E=_.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,E)}for(let I=0,M=w.length;I<M;++I){const y=w[I],E=y.start,N=y.count;for(let U=E,P=E+N;U<P;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,v=c.length;x<v;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let m=0;m<u;m++)h[g++]=l[p++]}return new kn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pd=new Mt,gr=new cu,Xo=new Es,md=new D,Yo=new D,jo=new D,Ko=new D,Uc=new D,Jo=new D,gd=new D,Zo=new D;class ne extends Ut{constructor(e=new jt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Jo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Uc.fromBufferAttribute(d,e),o?Jo.addScaledVector(Uc,u):Jo.addScaledVector(Uc.sub(t),u))}t.add(Jo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Xo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Xo,md)===null||gr.origin.distanceToSquared(md)>(e.far-e.near)**2))&&(pd.copy(s).invert(),gr.copy(e.ray).applyMatrix4(pd),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const v=h[g],m=o[v.materialIndex],w=Math.max(v.start,p.start),b=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let _=w,A=b;_<A;_+=3){const C=a.getX(_),R=a.getX(_+1),I=a.getX(_+2);r=Qo(this,m,e,i,l,u,d,C,R,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let v=g,m=x;v<m;v+=3){const w=a.getX(v),b=a.getX(v+1),_=a.getX(v+2);r=Qo(this,o,e,i,l,u,d,w,b,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const v=h[g],m=o[v.materialIndex],w=Math.max(v.start,p.start),b=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let _=w,A=b;_<A;_+=3){const C=_,R=_+1,I=_+2;r=Qo(this,m,e,i,l,u,d,C,R,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let v=g,m=x;v<m;v+=3){const w=v,b=v+1,_=v+2;r=Qo(this,o,e,i,l,u,d,w,b,_),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Vm(n,e,t,i,r,s,o,a){let c;if(e.side===yn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ar,a),c===null)return null;Zo.copy(a),Zo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Zo);return l<t.near||l>t.far?null:{distance:l,point:Zo.clone(),object:n}}function Qo(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Yo),n.getVertexPosition(c,jo),n.getVertexPosition(l,Ko);const u=Vm(n,e,t,i,Yo,jo,Ko,gd);if(u){const d=new D;Jn.getBarycoord(gd,Yo,jo,Ko,d),r&&(u.uv=Jn.getInterpolatedAttribute(r,a,c,l,d,new ge)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,a,c,l,d,new ge)),o&&(u.normal=Jn.getInterpolatedAttribute(o,a,c,l,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new D,materialIndex:0};Jn.getNormal(Yo,jo,Ko,h.normal),u.face=h,u.barycoord=d}return u}class Lt extends jt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function g(x,v,m,w,b,_,A,C,R,I,M){const y=_/R,E=A/I,N=_/2,U=A/2,P=C/2,G=R+1,O=I+1;let J=0,B=0;const Z=new D;for(let re=0;re<O;re++){const me=re*E-U;for(let oe=0;oe<G;oe++){const ze=oe*y-N;Z[x]=ze*w,Z[v]=me*b,Z[m]=P,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[v]=0,Z[m]=C>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(oe/R),d.push(1-re/I),J+=1}}for(let re=0;re<I;re++)for(let me=0;me<R;me++){const oe=h+me+G*re,ze=h+me+G*(re+1),je=h+(me+1)+G*(re+1),$=h+(me+1)+G*re;c.push(oe,ze,$),c.push(ze,je,$),B+=6}a.addGroup(p,B,M),p+=B,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=vs(n[t]);for(const r in i)e[r]=i[r]}return e}function Gm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Wm={clone:vs,merge:vn};var $m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$m,this.fragmentShader=qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Oh extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new D,vd=new ge,xd=new ge;class En extends Oh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,vd,xd),t.subVectors(xd,vd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,Qr=1;class Xm extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Zr,Qr,e,t);r.layers=this.layers,this.add(r);const s=new En(Zr,Qr,e,t);s.layers=this.layers,this.add(s);const o=new En(Zr,Qr,e,t);o.layers=this.layers,this.add(o);const a=new En(Zr,Qr,e,t);a.layers=this.layers,this.add(a);const c=new En(Zr,Qr,e,t);c.layers=this.layers,this.add(c);const l=new En(Zr,Qr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fh extends dn{constructor(e=[],t=ps,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ym extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lt(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:rr});s.uniforms.tEquirect.value=t;const o=new ne(r,s),a=t.minFilter;return t.minFilter===Er&&(t.minFilter=hi),new Xm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Re extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const v=t.getJointPose(x,i),m=this._getHandJoint(l,x);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class uu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=i}clone(){return new uu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class du extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Km extends dn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Un,u=Un,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _d extends kn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new Mt,yd=new Mt,ea=[],bd=new xi,Jm=new Mt,Fs=new ne,Bs=new Es;class Rr extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _d(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Jm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,es),bd.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(bd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,es),Bs.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),e.ray.intersectsSphere(Bs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,es),yd.multiplyMatrices(i,es),Fs.matrixWorld=yd,Fs.raycast(e,ea);for(let o=0,a=ea.length;o<a;o++){const c=ea[o];c.instanceId=s,c.object=this,t.push(c)}ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _d(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Km(new Float32Array(r*this.count),r,this.count,tu,fi));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Nc=new D,Zm=new D,Qm=new ct;class er{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Nc.subVectors(i,t).cross(Zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qm.getNormalMatrix(e),r=this.coplanarPoint(Nc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Es,e0=new ge(.5,.5),ta=new D;class hu{constructor(e=new er,t=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],x=s[9],v=s[10],m=s[11],w=s[12],b=s[13],_=s[14],A=s[15];if(r[0].setComponents(l-o,p-u,m-g,A-w).normalize(),r[1].setComponents(l+o,p+u,m+g,A+w).normalize(),r[2].setComponents(l+a,p+d,m+x,A+b).normalize(),r[3].setComponents(l-a,p-d,m-x,A-b).normalize(),i)r[4].setComponents(c,h,v,_).normalize(),r[5].setComponents(l-c,p-h,m-v,A-_).normalize();else if(r[4].setComponents(l-c,p-h,m-v,A-_).normalize(),t===pi)r[5].setComponents(l+c,p+h,m+v,A+_).normalize();else if(t===Ta)r[5].setComponents(c,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const t=e0.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ta.x=r.normal.x>0?e.max.x:e.min.x,ta.y=r.normal.y>0?e.max.y:e.min.y,ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new D,Ra=new D,wd=new Mt,zs=new cu,na=new Es,Oc=new D,Md=new D;class t0 extends Ut{constructor(e=new jt,t=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ca.fromBufferAttribute(t,r-1),Ra.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ca.distanceTo(Ra);e.setAttribute("lineDistance",new ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(r),na.radius+=s,e.ray.intersectsSphere(na)===!1)return;wd.copy(r).invert(),zs.copy(e.ray).applyMatrix4(wd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,v=g-1;x<v;x+=l){const m=u.getX(x),w=u.getX(x+1),b=ia(this,e,zs,c,m,w,x);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(g-1),v=u.getX(p),m=ia(this,e,zs,c,x,v,g-1);m&&t.push(m)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,v=g-1;x<v;x+=l){const m=ia(this,e,zs,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=ia(this,e,zs,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ia(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Ca.fromBufferAttribute(a,r),Ra.fromBufferAttribute(a,s),t.distanceSqToSegment(Ca,Ra,Oc,Md)>i)return;Oc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Oc);if(!(l<e.near||l>e.far))return{distance:l,point:Md.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class fu extends dn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zh extends dn{constructor(e,t,i=Cr,r,s,o,a=Un,c=Un,l,u=no,d=1){if(u!==no&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new au(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ss extends jt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,h=t,p=2*d+h,g=i*2+s,x=r+1,v=new D,m=new D;for(let w=0;w<=g;w++){let b=0,_=0,A=0,C=0;if(w<=i){const M=w/i,y=M*Math.PI/2;_=-u-e*Math.cos(y),A=e*Math.sin(y),C=-e*Math.cos(y),b=M*d}else if(w<=i+s){const M=(w-i)/s;_=-u+M*t,A=e,C=0,b=d+M*h}else{const M=(w-i-s)/i,y=M*Math.PI/2;_=u+e*Math.sin(y),A=e*Math.cos(y),C=e*Math.sin(y),b=d+h+M*d}const R=Math.max(0,Math.min(1,b/p));let I=0;w===0?I=.5/r:w===g&&(I=-.5/r);for(let M=0;M<=r;M++){const y=M/r,E=y*Math.PI*2,N=Math.sin(E),U=Math.cos(E);m.x=-A*U,m.y=_,m.z=A*N,a.push(m.x,m.y,m.z),v.set(-A*U,C,A*N),v.normalize(),c.push(v.x,v.y,v.z),l.push(y+I,R)}if(w>0){const M=(w-1)*x;for(let y=0;y<r;y++){const E=M+y,N=M+y+1,U=w*x+y,P=w*x+y+1;o.push(E,N,U),o.push(N,P,U)}}}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Gi extends jt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new D,u=new ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=i+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class it extends jt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const x=[],v=i/2;let m=0;w(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function w(){const _=new D,A=new D;let C=0;const R=(t-e)/i;for(let I=0;I<=s;I++){const M=[],y=I/s,E=y*(t-e)+e;for(let N=0;N<=r;N++){const U=N/r,P=U*c+a,G=Math.sin(P),O=Math.cos(P);A.x=E*G,A.y=-y*i+v,A.z=E*O,d.push(A.x,A.y,A.z),_.set(G,R,O).normalize(),h.push(_.x,_.y,_.z),p.push(U,1-y),M.push(g++)}x.push(M)}for(let I=0;I<r;I++)for(let M=0;M<s;M++){const y=x[M][I],E=x[M+1][I],N=x[M+1][I+1],U=x[M][I+1];(e>0||M!==0)&&(u.push(y,E,U),C+=3),(t>0||M!==s-1)&&(u.push(E,N,U),C+=3)}l.addGroup(m,C,0),m+=C}function b(_){const A=g,C=new ge,R=new D;let I=0;const M=_===!0?e:t,y=_===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,v*y,0),h.push(0,y,0),p.push(.5,.5),g++;const E=g;for(let N=0;N<=r;N++){const P=N/r*c+a,G=Math.cos(P),O=Math.sin(P);R.x=M*O,R.y=v*y,R.z=M*G,d.push(R.x,R.y,R.z),h.push(0,y,0),C.x=G*.5+.5,C.y=O*.5*y+.5,p.push(C.x,C.y),g++}for(let N=0;N<r;N++){const U=A+N,P=E+N;_===!0?u.push(P,P+1,U):u.push(P+1,P,U),I+=3}l.addGroup(m,I,_===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wi extends it{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new wi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qa extends jt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const b=new D,_=new D,A=new D;for(let C=0;C<t.length;C+=3)p(t[C+0],b),p(t[C+1],_),p(t[C+2],A),c(b,_,A,w)}function c(w,b,_,A){const C=A+1,R=[];for(let I=0;I<=C;I++){R[I]=[];const M=w.clone().lerp(_,I/C),y=b.clone().lerp(_,I/C),E=C-I;for(let N=0;N<=E;N++)N===0&&I===C?R[I][N]=M:R[I][N]=M.clone().lerp(y,N/E)}for(let I=0;I<C;I++)for(let M=0;M<2*(C-I)-1;M++){const y=Math.floor(M/2);M%2===0?(h(R[I][y+1]),h(R[I+1][y]),h(R[I][y])):(h(R[I][y+1]),h(R[I+1][y+1]),h(R[I+1][y]))}}function l(w){const b=new D;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(w),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function u(){const w=new D;for(let b=0;b<s.length;b+=3){w.x=s[b+0],w.y=s[b+1],w.z=s[b+2];const _=v(w)/2/Math.PI+.5,A=m(w)/Math.PI+.5;o.push(_,1-A)}g(),d()}function d(){for(let w=0;w<o.length;w+=6){const b=o[w+0],_=o[w+2],A=o[w+4],C=Math.max(b,_,A),R=Math.min(b,_,A);C>.9&&R<.1&&(b<.2&&(o[w+0]+=1),_<.2&&(o[w+2]+=1),A<.2&&(o[w+4]+=1))}}function h(w){s.push(w.x,w.y,w.z)}function p(w,b){const _=w*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){const w=new D,b=new D,_=new D,A=new D,C=new ge,R=new ge,I=new ge;for(let M=0,y=0;M<s.length;M+=9,y+=6){w.set(s[M+0],s[M+1],s[M+2]),b.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),C.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),A.copy(w).add(b).add(_).divideScalar(3);const E=v(A);x(C,y+0,w,E),x(R,y+2,b,E),x(I,y+4,_,E)}}function x(w,b,_,A){A<0&&w.x===1&&(o[b]=w.x-1),_.x===0&&_.z===0&&(o[b]=A/2/Math.PI+.5)}function v(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.vertices,e.indices,e.radius,e.details)}}class pu extends qa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pu(e.radius,e.detail)}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ge:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new D,r=[],s=[],o=[],a=new D,c=new Mt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mu extends Mi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*d+this.aX,l=h*d+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class n0 extends mu{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function gu(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ra=new D,Fc=new gu,Bc=new gu,zc=new gu;class vu extends Mi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(ra.subVectors(r[0],r[1]).add(r[0]),l=ra);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ra.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),Fc.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,v),Bc.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,v),zc.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,v)}else this.curveType==="catmullrom"&&(Fc.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Bc.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),zc.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Fc.calc(c),Bc.calc(c),zc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sd(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function i0(n,e){const t=1-n;return t*t*e}function r0(n,e){return 2*(1-n)*n*e}function s0(n,e){return n*n*e}function Xs(n,e,t,i){return i0(n,e)+r0(n,t)+s0(n,i)}function o0(n,e){const t=1-n;return t*t*t*e}function a0(n,e){const t=1-n;return 3*t*t*n*e}function c0(n,e){return 3*(1-n)*n*n*e}function l0(n,e){return n*n*n*e}function Ys(n,e,t,i,r){return o0(n,e)+a0(n,t)+c0(n,i)+l0(n,r)}class Hh extends Mi{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ys(e,r.x,s.x,o.x,a.x),Ys(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class u0 extends Mi{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ys(e,r.x,s.x,o.x,a.x),Ys(e,r.y,s.y,o.y,a.y),Ys(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vh extends Mi{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d0 extends Mi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gh extends Mi{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Xs(e,r.x,s.x,o.x),Xs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wh extends Mi{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Xs(e,r.x,s.x,o.x),Xs(e,r.y,s.y,o.y),Xs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $h extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Sd(a,c.x,l.x,u.x,d.x),Sd(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ge().fromArray(r))}return this}}var Pa=Object.freeze({__proto__:null,ArcCurve:n0,CatmullRomCurve3:vu,CubicBezierCurve:Hh,CubicBezierCurve3:u0,EllipseCurve:mu,LineCurve:Vh,LineCurve3:d0,QuadraticBezierCurve:Gh,QuadraticBezierCurve3:Wh,SplineCurve:$h});class h0 extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Pa[r.type]().fromJSON(r))}return this}}class Ed extends h0{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Vh(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Gh(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Hh(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new $h(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new mu(e,t,i,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pr extends Ed{constructor(e){super(e),this.uuid=Ur(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ed().fromJSON(r))}return this}}function f0(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=qh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=x0(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=t;h<r;h+=t){const p=n[h],g=n[h+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return so(s,o,t,a,c,l,0),o}function qh(n,e,t,i,r){let s;if(r===R0(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Td(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Td(o/i|0,n[o],n[o+1],s);return s&&xs(s,s.next)&&(ao(s),s=s.next),s}function Lr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xs(t,t.next)||Bt(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function so(n,e,t,i,r,s,o){if(!n)return;!o&&s&&M0(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?m0(n,i,r,s):p0(n)){e.push(c.i,n.i,l.i),ao(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=g0(Lr(n),e),so(n,e,t,i,r,s,2)):o===2&&v0(n,e,t,i,r,s):so(Lr(n),e,t,i,r,s,1);break}}}function p0(n){const e=n.prev,t=n,i=n.next;if(Bt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),d=Math.min(a,c,l),h=Math.max(r,s,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&Vs(r,a,s,c,o,l,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function m0(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Bt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,h=o.y,p=Math.min(a,c,l),g=Math.min(u,d,h),x=Math.max(a,c,l),v=Math.max(u,d,h),m=Fl(p,g,e,t,i),w=Fl(x,v,e,t,i);let b=n.prevZ,_=n.nextZ;for(;b&&b.z>=m&&_&&_.z<=w;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=v&&b!==r&&b!==o&&Vs(a,u,c,d,l,h,b.x,b.y)&&Bt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=v&&_!==r&&_!==o&&Vs(a,u,c,d,l,h,_.x,_.y)&&Bt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=p&&b.x<=x&&b.y>=g&&b.y<=v&&b!==r&&b!==o&&Vs(a,u,c,d,l,h,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=w;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=v&&_!==r&&_!==o&&Vs(a,u,c,d,l,h,_.x,_.y)&&Bt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function g0(n,e){let t=n;do{const i=t.prev,r=t.next.next;!xs(i,r)&&Yh(i,t,t.next,r)&&oo(i,r)&&oo(r,i)&&(e.push(i.i,t.i,r.i),ao(t),ao(t.next),t=n=r),t=t.next}while(t!==n);return Lr(t)}function v0(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T0(o,a)){let c=jh(o,a);o=Lr(o,o.next),c=Lr(c,c.next),so(o,e,t,i,r,s,0),so(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function x0(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=qh(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(E0(l))}r.sort(_0);for(let s=0;s<r.length;s++)t=y0(r[s],t);return t}function _0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function y0(n,e){const t=b0(n,e);if(!t)return e;const i=jh(t,n);return Lr(i,i.next),Lr(t,t.next)}function b0(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(xs(n,t))return t;do{if(xs(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Xh(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);oo(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&w0(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function w0(n,e){return Bt(n.prev,n,e.prev)<0&&Bt(e.next,n,n.next)<0}function M0(n,e,t,i){let r=n;do r.z===0&&(r.z=Fl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,S0(r)}function S0(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Fl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function E0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xh(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Vs(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Xh(n,e,t,i,r,s,o,a)}function T0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!A0(n,e)&&(oo(n,e)&&oo(e,n)&&C0(n,e)&&(Bt(n.prev,n,e.prev)||Bt(n,e.prev,e))||xs(n,e)&&Bt(n.prev,n,n.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xs(n,e){return n.x===e.x&&n.y===e.y}function Yh(n,e,t,i){const r=oa(Bt(n,e,t)),s=oa(Bt(n,e,i)),o=oa(Bt(t,i,n)),a=oa(Bt(t,i,e));return!!(r!==s&&o!==a||r===0&&sa(n,t,e)||s===0&&sa(n,i,e)||o===0&&sa(t,n,i)||a===0&&sa(t,e,i))}function sa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function oa(n){return n>0?1:n<0?-1:0}function A0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function oo(n,e){return Bt(n.prev,n,n.next)<0?Bt(n,e,n.next)>=0&&Bt(n,n.prev,e)>=0:Bt(n,e,n.prev)<0||Bt(n,n.next,e)<0}function C0(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function jh(n,e){const t=Bl(n.i,n.x,n.y),i=Bl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Td(n,e,t,i){const r=Bl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ao(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R0(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class P0{static triangulate(e,t,i=2){return f0(e,t,i)}}class ki{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ki.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Ad(e),Cd(i,e);let o=e.length;t.forEach(Ad);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Cd(i,t[c]);const a=P0.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Ad(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class co extends jt{constructor(e=new Pr([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ft(r,3)),this.setAttribute("uv",new ft(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:L0;let b,_=!1,A,C,R,I;m&&(b=m.getSpacedPoints(u),_=!0,h=!1,A=m.computeFrenetFrames(u,!1),C=new D,R=new D,I=new D),h||(v=0,p=0,g=0,x=0);const M=a.extractPoints(l);let y=M.shape;const E=M.holes;if(!ki.isClockWise(y)){y=y.reverse();for(let K=0,Y=E.length;K<Y;K++){const se=E[K];ki.isClockWise(se)&&(E[K]=se.reverse())}}function U(K){const se=10000000000000001e-36;let ee=K[0];for(let _e=1;_e<=K.length;_e++){const ce=_e%K.length,ye=K[ce],rt=ye.x-ee.x,nt=ye.y-ee.y,L=rt*rt+nt*nt,S=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(ee.x),Math.abs(ee.y)),V=se*S*S;if(L<=V){K.splice(ce,1),_e--;continue}ee=ye}}U(y),E.forEach(U);const P=E.length,G=y;for(let K=0;K<P;K++){const Y=E[K];y=y.concat(Y)}function O(K,Y,se){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(Y,se)}const J=y.length;function B(K,Y,se){let ee,_e,ce;const ye=K.x-Y.x,rt=K.y-Y.y,nt=se.x-K.x,L=se.y-K.y,S=ye*ye+rt*rt,V=ye*L-rt*nt;if(Math.abs(V)>Number.EPSILON){const X=Math.sqrt(S),ae=Math.sqrt(nt*nt+L*L),j=Y.x-rt/X,Be=Y.y+ye/X,ve=se.x-L/ae,Ne=se.y+nt/ae,Oe=((ve-j)*L-(Ne-Be)*nt)/(ye*L-rt*nt);ee=j+ye*Oe-K.x,_e=Be+rt*Oe-K.y;const ue=ee*ee+_e*_e;if(ue<=2)return new ge(ee,_e);ce=Math.sqrt(ue/2)}else{let X=!1;ye>Number.EPSILON?nt>Number.EPSILON&&(X=!0):ye<-Number.EPSILON?nt<-Number.EPSILON&&(X=!0):Math.sign(rt)===Math.sign(L)&&(X=!0),X?(ee=-rt,_e=ye,ce=Math.sqrt(S)):(ee=ye,_e=rt,ce=Math.sqrt(S/2))}return new ge(ee/ce,_e/ce)}const Z=[];for(let K=0,Y=G.length,se=Y-1,ee=K+1;K<Y;K++,se++,ee++)se===Y&&(se=0),ee===Y&&(ee=0),Z[K]=B(G[K],G[se],G[ee]);const re=[];let me,oe=Z.concat();for(let K=0,Y=P;K<Y;K++){const se=E[K];me=[];for(let ee=0,_e=se.length,ce=_e-1,ye=ee+1;ee<_e;ee++,ce++,ye++)ce===_e&&(ce=0),ye===_e&&(ye=0),me[ee]=B(se[ee],se[ce],se[ye]);re.push(me),oe=oe.concat(me)}let ze;if(v===0)ze=ki.triangulateShape(G,E);else{const K=[],Y=[];for(let se=0;se<v;se++){const ee=se/v,_e=p*Math.cos(ee*Math.PI/2),ce=g*Math.sin(ee*Math.PI/2)+x;for(let ye=0,rt=G.length;ye<rt;ye++){const nt=O(G[ye],Z[ye],ce);Ue(nt.x,nt.y,-_e),ee===0&&K.push(nt)}for(let ye=0,rt=P;ye<rt;ye++){const nt=E[ye];me=re[ye];const L=[];for(let S=0,V=nt.length;S<V;S++){const X=O(nt[S],me[S],ce);Ue(X.x,X.y,-_e),ee===0&&L.push(X)}ee===0&&Y.push(L)}}ze=ki.triangulateShape(K,Y)}const je=ze.length,$=g+x;for(let K=0;K<J;K++){const Y=h?O(y[K],oe[K],$):y[K];_?(R.copy(A.normals[0]).multiplyScalar(Y.x),C.copy(A.binormals[0]).multiplyScalar(Y.y),I.copy(b[0]).add(R).add(C),Ue(I.x,I.y,I.z)):Ue(Y.x,Y.y,0)}for(let K=1;K<=u;K++)for(let Y=0;Y<J;Y++){const se=h?O(y[Y],oe[Y],$):y[Y];_?(R.copy(A.normals[K]).multiplyScalar(se.x),C.copy(A.binormals[K]).multiplyScalar(se.y),I.copy(b[K]).add(R).add(C),Ue(I.x,I.y,I.z)):Ue(se.x,se.y,d/u*K)}for(let K=v-1;K>=0;K--){const Y=K/v,se=p*Math.cos(Y*Math.PI/2),ee=g*Math.sin(Y*Math.PI/2)+x;for(let _e=0,ce=G.length;_e<ce;_e++){const ye=O(G[_e],Z[_e],ee);Ue(ye.x,ye.y,d+se)}for(let _e=0,ce=E.length;_e<ce;_e++){const ye=E[_e];me=re[_e];for(let rt=0,nt=ye.length;rt<nt;rt++){const L=O(ye[rt],me[rt],ee);_?Ue(L.x,L.y+b[u-1].y,b[u-1].x+se):Ue(L.x,L.y,d+se)}}}xe(),he();function xe(){const K=r.length/3;if(h){let Y=0,se=J*Y;for(let ee=0;ee<je;ee++){const _e=ze[ee];Q(_e[2]+se,_e[1]+se,_e[0]+se)}Y=u+v*2,se=J*Y;for(let ee=0;ee<je;ee++){const _e=ze[ee];Q(_e[0]+se,_e[1]+se,_e[2]+se)}}else{for(let Y=0;Y<je;Y++){const se=ze[Y];Q(se[2],se[1],se[0])}for(let Y=0;Y<je;Y++){const se=ze[Y];Q(se[0]+J*u,se[1]+J*u,se[2]+J*u)}}i.addGroup(K,r.length/3-K,0)}function he(){const K=r.length/3;let Y=0;He(G,Y),Y+=G.length;for(let se=0,ee=E.length;se<ee;se++){const _e=E[se];He(_e,Y),Y+=_e.length}i.addGroup(K,r.length/3-K,1)}function He(K,Y){let se=K.length;for(;--se>=0;){const ee=se;let _e=se-1;_e<0&&(_e=K.length-1);for(let ce=0,ye=u+v*2;ce<ye;ce++){const rt=J*ce,nt=J*(ce+1),L=Y+ee+rt,S=Y+_e+rt,V=Y+_e+nt,X=Y+ee+nt;Me(L,S,V,X)}}}function Ue(K,Y,se){c.push(K),c.push(Y),c.push(se)}function Q(K,Y,se){Le(K),Le(Y),Le(se);const ee=r.length/3,_e=w.generateTopUV(i,r,ee-3,ee-2,ee-1);k(_e[0]),k(_e[1]),k(_e[2])}function Me(K,Y,se,ee){Le(K),Le(Y),Le(ee),Le(Y),Le(se),Le(ee);const _e=r.length/3,ce=w.generateSideWallUV(i,r,_e-6,_e-3,_e-2,_e-1);k(ce[0]),k(ce[1]),k(ce[3]),k(ce[1]),k(ce[2]),k(ce[3])}function Le(K){r.push(c[K*3+0]),r.push(c[K*3+1]),r.push(c[K*3+2])}function k(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return I0(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Pa[r.type]().fromJSON(r)),new co(i,e.options)}}const L0={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,c),new ge(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],v=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-d),new ge(h,1-g),new ge(x,1-m)]:[new ge(a,1-c),new ge(u,1-d),new ge(p,1-g),new ge(v,1-m)]}};function I0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bo extends qa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bo(e.radius,e.detail)}}class Nn extends jt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,p=[],g=[],x=[],v=[];for(let m=0;m<u;m++){const w=m*h-o;for(let b=0;b<l;b++){const _=b*d-s;g.push(_,-w,0),x.push(0,0,1),v.push(b/a),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const b=w+l*m,_=w+l*(m+1),A=w+1+l*(m+1),C=w+1+l*m;p.push(b,_,C),p.push(_,A,C)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class wo extends jt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=e;const h=(t-e)/r,p=new D,g=new ge;for(let x=0;x<=r;x++){for(let v=0;v<=i;v++){const m=s+v/i*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<r;x++){const v=x*(i+1);for(let m=0;m<i;m++){const w=m+v,b=w,_=w+i+1,A=w+i+2,C=w+1;a.push(b,_,C),a.push(_,A,C)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xa extends jt{constructor(e=new Pr([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(s,3)),this.setAttribute("uv",new ft(o,2));function l(u){const d=r.length/3,h=u.extractPoints(t);let p=h.shape;const g=h.holes;ki.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,m=g.length;v<m;v++){const w=g[v];ki.isClockWise(w)===!0&&(g[v]=w.reverse())}const x=ki.triangulateShape(p,g);for(let v=0,m=g.length;v<m;v++){const w=g[v];p=p.concat(w)}for(let v=0,m=p.length;v<m;v++){const w=p[v];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let v=0,m=x.length;v<m;v++){const w=x[v],b=w[0]+d,_=w[1]+d,A=w[2]+d;i.push(b,_,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return D0(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Xa(i,e.curveSegments)}}function D0(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class wn extends jt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new D,h=new D,p=[],g=[],x=[],v=[];for(let m=0;m<=i;m++){const w=[],b=m/i;let _=0;m===0&&o===0?_=.5/t:m===i&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const C=A/t;d.x=-e*Math.cos(r+C*s)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),v.push(C+_,1-b),w.push(l++)}u.push(w)}for(let m=0;m<i;m++)for(let w=0;w<t;w++){const b=u[m][w+1],_=u[m][w],A=u[m+1][w],C=u[m+1][w+1];(m!==0||o>0)&&p.push(b,_,C),(m!==i-1||c<Math.PI)&&p.push(_,A,C)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rn extends jt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new D,d=new D,h=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*s,v=p/i*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(x),d.y=(e+t*Math.cos(v))*Math.sin(x),d.z=t*Math.sin(v),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,v=(r+1)*(p-1)+g-1,m=(r+1)*(p-1)+g,w=(r+1)*p+g;o.push(x,v,w),o.push(v,m,w)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ya extends jt{constructor(e=new Wh(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ge;let u=new D;const d=[],h=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function x(){for(let b=0;b<t;b++)v(b);v(s===!1?t:0),w(),m()}function v(b){u=e.getPointAt(b/t,u);const _=o.normals[b],A=o.binormals[b];for(let C=0;C<=r;C++){const R=C/r*Math.PI*2,I=Math.sin(R),M=-Math.cos(R);c.x=M*_.x+I*A.x,c.y=M*_.y+I*A.y,c.z=M*_.z+I*A.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let _=1;_<=r;_++){const A=(r+1)*(b-1)+(_-1),C=(r+1)*b+(_-1),R=(r+1)*b+_,I=(r+1)*(b-1)+_;g.push(A,C,I),g.push(C,R,I)}}function w(){for(let b=0;b<=t;b++)for(let _=0;_<=r;_++)l.x=b/t,l.y=_/r,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ya(new Pa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Wi extends kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends kr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class U0 extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k0 extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kh extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xu extends Kh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Hc=new Mt,Rd=new D,Pd=new D;class N0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hu,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jh extends Oh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class O0 extends N0{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ja extends Kh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new O0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class F0 extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ld=new Mt;class Zh{constructor(e,t,i=0,r=1/0){this.ray=new cu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new lu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ld),this}intersectObject(e,t=!0,i=[]){return zl(e,this,i,t),i.sort(Id),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zl(e[r],this,i,t);return i.sort(Id),i}}function Id(n,e){return n.distance-e.distance}function zl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)zl(s[o],e,t,!0)}}function Dd(n,e,t,i){const r=B0(i);switch(t){case Th:return n*e;case tu:return n*e/r.components*r.byteLength;case nu:return n*e/r.components*r.byteLength;case Ch:return n*e*2/r.components*r.byteLength;case iu:return n*e*2/r.components*r.byteLength;case Ah:return n*e*3/r.components*r.byteLength;case Zn:return n*e*4/r.components*r.byteLength;case ru:return n*e*4/r.components*r.byteLength;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:case ml:return Math.max(n,16)*Math.max(e,8)/4;case hl:case pl:return Math.max(n,8)*Math.max(e,8)/2;case gl:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case va:case Dl:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rh:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B0(n){switch(n){case vi:case Mh:return{byteLength:1,components:1};case eo:case Sh:case _o:return{byteLength:2,components:1};case Ql:case eu:return{byteLength:2,components:4};case Cr:case Zl:case fi:return{byteLength:4,components:1};case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function Qh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function z0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var H0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
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
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
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
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j0=`#ifdef USE_BATCHING
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
#endif`,K0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eg=`#ifdef USE_IRIDESCENCE
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
#endif`,tg=`#ifdef USE_BUMPMAP
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ug=`#define PI 3.141592653589793
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
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hg=`vec3 transformedNormal = objectNormal;
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
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
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
}`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
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
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
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
#endif`,Bg=`struct PhysicalMaterial {
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
}`,zg=`
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kg=`#if defined( USE_POINTS_UV )
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
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nv=`#ifdef USE_MORPHTARGETS
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
#endif`,iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
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
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ev=`float getShadowMask() {
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
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Av=`#ifdef USE_SKINNING
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
#endif`,Cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rv=`#ifdef USE_SKINNING
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
#endif`,Pv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uv=`#ifdef USE_TRANSMISSION
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
#endif`,kv=`#ifdef USE_TRANSMISSION
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`#include <common>
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
}`,Xv=`#if DEPTH_PACKING == 3200
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
}`,Yv=`#define DISTANCE
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
}`,jv=`#define DISTANCE
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`uniform float scale;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#define LAMBERT
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
}`,ix=`#define LAMBERT
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
}`,rx=`#define MATCAP
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
}`,sx=`#define MATCAP
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
}`,ox=`#define NORMAL
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
}`,ax=`#define NORMAL
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
}`,cx=`#define PHONG
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
}`,lx=`#define PHONG
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
}`,ux=`#define STANDARD
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
}`,dx=`#define STANDARD
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
}`,hx=`#define TOON
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
}`,fx=`#define TOON
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
}`,px=`uniform float size;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,vx=`uniform vec3 color;
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
}`,xx=`uniform float rotation;
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
}`,_x=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:H0,alphahash_pars_fragment:V0,alphamap_fragment:G0,alphamap_pars_fragment:W0,alphatest_fragment:$0,alphatest_pars_fragment:q0,aomap_fragment:X0,aomap_pars_fragment:Y0,batching_pars_vertex:j0,batching_vertex:K0,begin_vertex:J0,beginnormal_vertex:Z0,bsdfs:Q0,iridescence_fragment:eg,bumpmap_pars_fragment:tg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:rg,clipping_planes_vertex:sg,color_fragment:og,color_pars_fragment:ag,color_pars_vertex:cg,color_vertex:lg,common:ug,cube_uv_reflection_fragment:dg,defaultnormal_vertex:hg,displacementmap_pars_vertex:fg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:vg,colorspace_pars_fragment:xg,envmap_fragment:_g,envmap_common_pars_fragment:yg,envmap_pars_fragment:bg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Dg,envmap_vertex:Mg,fog_vertex:Sg,fog_pars_vertex:Eg,fog_fragment:Tg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Cg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Ig,lights_toon_fragment:Ug,lights_toon_pars_fragment:kg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Og,lights_physical_fragment:Fg,lights_physical_pars_fragment:Bg,lights_fragment_begin:zg,lights_fragment_maps:Hg,lights_fragment_end:Vg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:qg,map_fragment:Xg,map_pars_fragment:Yg,map_particle_fragment:jg,map_particle_pars_fragment:Kg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Zg,morphinstance_vertex:Qg,morphcolor_vertex:ev,morphnormal_vertex:tv,morphtarget_pars_vertex:nv,morphtarget_vertex:iv,normal_fragment_begin:rv,normal_fragment_maps:sv,normal_pars_fragment:ov,normal_pars_vertex:av,normal_vertex:cv,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:hv,iridescence_pars_fragment:fv,opaque_fragment:pv,packing:mv,premultiplied_alpha_fragment:gv,project_vertex:vv,dithering_fragment:xv,dithering_pars_fragment:_v,roughnessmap_fragment:yv,roughnessmap_pars_fragment:bv,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Mv,shadowmap_vertex:Sv,shadowmask_pars_fragment:Ev,skinbase_vertex:Tv,skinning_pars_vertex:Av,skinning_vertex:Cv,skinnormal_vertex:Rv,specularmap_fragment:Pv,specularmap_pars_fragment:Lv,tonemapping_fragment:Iv,tonemapping_pars_fragment:Dv,transmission_fragment:Uv,transmission_pars_fragment:kv,uv_pars_fragment:Nv,uv_pars_vertex:Ov,uv_vertex:Fv,worldpos_vertex:Bv,background_vert:zv,background_frag:Hv,backgroundCube_vert:Vv,backgroundCube_frag:Gv,cube_vert:Wv,cube_frag:$v,depth_vert:qv,depth_frag:Xv,distanceRGBA_vert:Yv,distanceRGBA_frag:jv,equirect_vert:Kv,equirect_frag:Jv,linedashed_vert:Zv,linedashed_frag:Qv,meshbasic_vert:ex,meshbasic_frag:tx,meshlambert_vert:nx,meshlambert_frag:ix,meshmatcap_vert:rx,meshmatcap_frag:sx,meshnormal_vert:ox,meshnormal_frag:ax,meshphong_vert:cx,meshphong_frag:lx,meshphysical_vert:ux,meshphysical_frag:dx,meshtoon_vert:hx,meshtoon_frag:fx,points_vert:px,points_frag:mx,shadow_vert:gx,shadow_frag:vx,sprite_vert:xx,sprite_frag:_x},we={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},di={basic:{uniforms:vn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:vn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ot(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:vn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:vn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:vn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ot(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:vn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:vn([we.points,we.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:vn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:vn([we.common,we.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:vn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:vn([we.sprite,we.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:vn([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:vn([we.lights,we.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};di.physical={uniforms:vn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const aa={r:0,b:0,g:0},xr=new _i,yx=new Mt;function bx(n,e,t,i,r,s,o){const a=new ot(0);let c=s===!0?0:1,l,u,d=null,h=0,p=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function x(b){let _=!1;const A=g(b);A===null?m(a,c):A&&A.isColor&&(m(A,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===$a)?(u===void 0&&(u=new ne(new Lt(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:vs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xr.copy(_.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(xr)),u.material.toneMapped=xt.getTransfer(A.colorSpace)!==Et,(d!==A||h!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ne(new Nn(2,2),new cr({name:"BackgroundMaterial",uniforms:vs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=xt.getTransfer(A.colorSpace)!==Et,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,h=A.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,_){b.getRGB(aa,Nh(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,_,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:x,addToRenderList:v,dispose:w}}function wx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,E,N,U,P){let G=!1;const O=d(U,N,E);s!==O&&(s=O,l(s.object)),G=p(y,U,N,P),G&&g(y,U,N,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(y,E,N,U),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,E,N){const U=N.wireframe===!0;let P=i[y.id];P===void 0&&(P={},i[y.id]=P);let G=P[E.id];G===void 0&&(G={},P[E.id]=G);let O=G[U];return O===void 0&&(O=h(c()),G[U]=O),O}function h(y){const E=[],N=[],U=[];for(let P=0;P<t;P++)E[P]=0,N[P]=0,U[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:U,object:y,attributes:{},index:null}}function p(y,E,N,U){const P=s.attributes,G=E.attributes;let O=0;const J=N.getAttributes();for(const B in J)if(J[B].location>=0){const re=P[B];let me=G[B];if(me===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function g(y,E,N,U){const P={},G=E.attributes;let O=0;const J=N.getAttributes();for(const B in J)if(J[B].location>=0){let re=G[B];re===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));const me={};me.attribute=re,re&&re.data&&(me.data=re.data),P[B]=me,O++}s.attributes=P,s.attributesNum=O,s.index=U}function x(){const y=s.newAttributes;for(let E=0,N=y.length;E<N;E++)y[E]=0}function v(y){m(y,0)}function m(y,E){const N=s.newAttributes,U=s.enabledAttributes,P=s.attributeDivisors;N[y]=1,U[y]===0&&(n.enableVertexAttribArray(y),U[y]=1),P[y]!==E&&(n.vertexAttribDivisor(y,E),P[y]=E)}function w(){const y=s.newAttributes,E=s.enabledAttributes;for(let N=0,U=E.length;N<U;N++)E[N]!==y[N]&&(n.disableVertexAttribArray(N),E[N]=0)}function b(y,E,N,U,P,G,O){O===!0?n.vertexAttribIPointer(y,E,N,P,G):n.vertexAttribPointer(y,E,N,U,P,G)}function _(y,E,N,U){x();const P=U.attributes,G=N.getAttributes(),O=E.defaultAttributeValues;for(const J in G){const B=G[J];if(B.location>=0){let Z=P[J];if(Z===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const re=Z.normalized,me=Z.itemSize,oe=e.get(Z);if(oe===void 0)continue;const ze=oe.buffer,je=oe.type,$=oe.bytesPerElement,xe=je===n.INT||je===n.UNSIGNED_INT||Z.gpuType===Zl;if(Z.isInterleavedBufferAttribute){const he=Z.data,He=he.stride,Ue=Z.offset;if(he.isInstancedInterleavedBuffer){for(let Q=0;Q<B.locationSize;Q++)m(B.location+Q,he.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Q=0;Q<B.locationSize;Q++)v(B.location+Q);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Q=0;Q<B.locationSize;Q++)b(B.location+Q,me/B.locationSize,je,re,He*$,(Ue+me/B.locationSize*Q)*$,xe)}else{if(Z.isInstancedBufferAttribute){for(let he=0;he<B.locationSize;he++)m(B.location+he,Z.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<B.locationSize;he++)v(B.location+he);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let he=0;he<B.locationSize;he++)b(B.location+he,me/B.locationSize,je,re,me*$,me/B.locationSize*he*$,xe)}}else if(O!==void 0){const re=O[J];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(B.location,re);break;case 3:n.vertexAttrib3fv(B.location,re);break;case 4:n.vertexAttrib4fv(B.location,re);break;default:n.vertexAttrib1fv(B.location,re)}}}}w()}function A(){I();for(const y in i){const E=i[y];for(const N in E){const U=E[N];for(const P in U)u(U[P].object),delete U[P];delete E[N]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const N in E){const U=E[N];for(const P in U)u(U[P].object),delete U[P];delete E[N]}delete i[y.id]}function R(y){for(const E in i){const N=i[E];if(N[y.id]===void 0)continue;const U=N[y.id];for(const P in U)u(U[P].object),delete U[P];delete N[y.id]}}function I(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function Mx(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Zn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===_o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fi&&!I)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:A,maxSamples:C}}function Ex(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new er,a=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,x=d.clipIntersection,v=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!v)s?u(null):l();else{const w=s?0:i,b=w*4;let _=m.clippingState||null;c.value=_,_=u(g,h,b,p);for(let A=0;A!==b;++A)_[A]=t[A];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const x=d!==null?d.length:0;let v=null;if(x!==0){if(v=c.value,g!==!0||v===null){const m=p+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(v===null||v.length<m)&&(v=new Float32Array(m));for(let b=0,_=p;b!==x;++b,_+=4)o.copy(d[b]).applyMatrix4(w,a),o.normal.toArray(v,_),v[_+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function Tx(n){let e=new WeakMap;function t(o,a){return a===ll?o.mapping=ps:a===ul&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ll||a===ul)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ym(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const os=4,Ud=[.125,.215,.35,.446,.526,.582],Mr=20,Vc=new Jh,kd=new ot;let Gc=null,Wc=0,$c=0,qc=!1;const yr=(1+Math.sqrt(5))/2,ts=1/yr,Nd=[new D(-yr,ts,0),new D(yr,ts,0),new D(-ts,0,yr),new D(ts,0,yr),new D(0,yr,-ts),new D(0,yr,ts),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Ax=new D;class Od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Ax}=s;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,$c),this._renderer.xr.enabled=qc,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:_o,format:Zn,colorSpace:gs,depthBuffer:!1},r=Fd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cx(s)),this._blurMaterial=Rx(s,e,t)}return r}_compileMaterial(e){const t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,i,r,s){const c=new En(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(kd),d.toneMapping=sr,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new Ft({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),v=new ne(new Lt,x);let m=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,m=!0):(x.color.copy(kd),m=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;ca(r,_*A,b>2?A:0,A,A),d.setRenderTarget(r),m&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ca(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Vc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nd[(r-s-1)%Nd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ne(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),x=s/g,v=isFinite(s)?1+Math.floor(u*x):Mr;v>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Mr}`);const m=[];let w=0;for(let R=0;R<Mr;++R){const I=R/x,M=Math.exp(-I*I/2);m.push(M),R===0?w+=M:R<v&&(w+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/w;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const _=this._sizeLods[r],A=3*_*(r>b-os?r-b+os:0),C=4*(this._cubeSize-_);ca(t,A,C,3*_,2*_),c.setRenderTarget(t),c.render(d,Vc)}}function Cx(n){const e=[],t=[],i=[];let r=n;const s=n-os+1+Ud.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-os?c=Ud[o-n+os-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,v=2,m=1,w=new Float32Array(x*g*p),b=new Float32Array(v*g*p),_=new Float32Array(m*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,I=C>2?0:-1,M=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];w.set(M,x*g*C),b.set(h,v*g*C);const y=[C,C,C,C,C,C];_.set(y,m*g*C)}const A=new jt;A.setAttribute("position",new kn(w,x)),A.setAttribute("uv",new kn(b,v)),A.setAttribute("faceIndex",new kn(_,m)),e.push(A),r>os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fd(n,e,t){const i=new Vi(n,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ca(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rx(n,e,t){const i=new Float32Array(Mr),r=new D(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_u(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Bd(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function zd(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function Px(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ll||c===ul,u=c===ps||c===ms;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Od(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Od(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Lx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&us("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ix(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let b=0,_=w.length;b<_;b+=3){const A=w[b+0],C=w[b+1],R=w[b+2];h.push(A,C,C,R,R,A)}}else if(g!==void 0){const w=g.array;x=g.version;for(let b=0,_=w.length/3-1;b<_;b+=3){const A=b+0,C=b+1,R=b+2;h.push(A,C,C,R,R,A)}}else return;const v=new(Lh(h)?kh:Uh)(h,1);v.version=x;const m=s.get(d);m&&e.remove(m),s.set(d,v)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Dx(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];t.update(v,i,1)}function d(h,p,g,x){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<h.length;m++)l(h[m]/o,p[m],x[m]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let m=0;for(let w=0;w<g;w++)m+=p[w]*x[w];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Ux(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kx(n,e,t){const i=new WeakMap,r=new Wt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const C=new Float32Array(_*A*4*d),R=new Ih(C,_,A,d);R.type=fi,R.needsUpdate=!0;const I=b*4;for(let y=0;y<d;y++){const E=v[y],N=m[y],U=w[y],P=_*A*4*y;for(let G=0;G<E.count;G++){const O=G*I;p===!0&&(r.fromBufferAttribute(E,G),C[P+O+0]=r.x,C[P+O+1]=r.y,C[P+O+2]=r.z,C[P+O+3]=0),g===!0&&(r.fromBufferAttribute(N,G),C[P+O+4]=r.x,C[P+O+5]=r.y,C[P+O+6]=r.z,C[P+O+7]=0),x===!0&&(r.fromBufferAttribute(U,G),C[P+O+8]=r.x,C[P+O+9]=r.y,C[P+O+10]=r.z,C[P+O+11]=U.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new ge(_,A)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Nx(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ef=new dn,Hd=new zh(1,1),tf=new Ih,nf=new Lm,rf=new Fh,Vd=[],Gd=[],Wd=new Float32Array(16),$d=new Float32Array(9),qd=new Float32Array(4);function Ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vd[r];if(s===void 0&&(s=new Float32Array(r),Vd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=Gd[e];t===void 0&&(t=new Int32Array(e),Gd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ox(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function Bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function Hx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;qd.set(i),n.uniformMatrix2fv(this.addr,!1,qd),Qt(t,i)}}function Vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;$d.set(i),n.uniformMatrix3fv(this.addr,!1,$d),Qt(t,i)}}function Gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Zt(t,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),Qt(t,i)}}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function qx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function Xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function Yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function Kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function Zx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hd.compareFunction=Ph,s=Hd):s=ef,t.setTexture2D(e||s,r)}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||nf,r)}function e_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rf,r)}function t_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tf,r)}function n_(n){switch(n){case 5126:return Ox;case 35664:return Fx;case 35665:return Bx;case 35666:return zx;case 35674:return Hx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return $x;case 35668:case 35672:return qx;case 35669:case 35673:return Xx;case 5125:return Yx;case 36294:return jx;case 36295:return Kx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(n,e){n.uniform1fv(this.addr,e)}function r_(n,e){const t=Ts(e,this.size,2);n.uniform2fv(this.addr,t)}function s_(n,e){const t=Ts(e,this.size,3);n.uniform3fv(this.addr,t)}function o_(n,e){const t=Ts(e,this.size,4);n.uniform4fv(this.addr,t)}function a_(n,e){const t=Ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c_(n,e){const t=Ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function l_(n,e){const t=Ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u_(n,e){n.uniform1iv(this.addr,e)}function d_(n,e){n.uniform2iv(this.addr,e)}function h_(n,e){n.uniform3iv(this.addr,e)}function f_(n,e){n.uniform4iv(this.addr,e)}function p_(n,e){n.uniform1uiv(this.addr,e)}function m_(n,e){n.uniform2uiv(this.addr,e)}function g_(n,e){n.uniform3uiv(this.addr,e)}function v_(n,e){n.uniform4uiv(this.addr,e)}function x_(n,e,t){const i=this.cache,r=e.length,s=Ka(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ef,s[o])}function __(n,e,t){const i=this.cache,r=e.length,s=Ka(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||nf,s[o])}function y_(n,e,t){const i=this.cache,r=e.length,s=Ka(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||rf,s[o])}function b_(n,e,t){const i=this.cache,r=e.length,s=Ka(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Qt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tf,s[o])}function w_(n){switch(n){case 5126:return i_;case 35664:return r_;case 35665:return s_;case 35666:return o_;case 35674:return a_;case 35675:return c_;case 35676:return l_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return h_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return b_}}class M_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=n_(t.type)}}class S_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w_(t.type)}}class E_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function Xd(n,e){n.seq.push(e),n.map[e.id]=e}function T_(n,e,t){const i=n.name,r=i.length;for(Xc.lastIndex=0;;){const s=Xc.exec(i),o=Xc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Xd(t,l===void 0?new M_(a,n,e):new S_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new E_(a),Xd(t,d)),t=d}}}class xa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);T_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const A_=37297;let C_=0;function R_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const jd=new ct;function P_(n){xt._getMatrix(jd,xt.workingColorSpace,n);const e=`mat3( ${jd.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Ea:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Kd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+R_(n.getShaderSource(e),a)}else return s}function L_(n,e){const t=P_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I_(n,e){let t;switch(e){case $p:t="Linear";break;case qp:t="Reinhard";break;case Xp:t="Cineon";break;case bh:t="ACESFilmic";break;case jp:t="AgX";break;case Kp:t="Neutral";break;case Yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const la=new D;function D_(){xt.getLuminanceCoefficients(la);const n=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function k_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gs(n){return n!==""}function Jd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(O_,B_)}const F_=new Map;function B_(n,e){let t=ut[e];if(t===void 0){const i=F_.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hl(t)}const z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(n){return n.replace(z_,H_)}function H_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function V_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function G_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ms&&(e="ENVMAP_MODE_REFRACTION"),e}function $_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case Gp:e="ENVMAP_BLENDING_MIX";break;case Wp:e="ENVMAP_BLENDING_ADD";break}return e}function q_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function X_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=V_(t),l=G_(t),u=W_(t),d=$_(t),h=q_(t),p=U_(t),g=k_(s),x=r.createProgram();let v,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`)):(v=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),m=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?ut.tonemapping_pars_fragment:"",t.toneMapping!==sr?I_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),D_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Hl(o),o=Jd(o,t),o=Zd(o,t),a=Hl(a),a=Jd(a,t),a=Zd(a,t),o=Qd(o),a=Qd(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=w+v+o,_=w+m+a,A=Yd(r,r.VERTEX_SHADER,b),C=Yd(r,r.FRAGMENT_SHADER,_);r.attachShader(x,A),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(E){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(x)||"",U=r.getShaderInfoLog(A)||"",P=r.getShaderInfoLog(C)||"",G=N.trim(),O=U.trim(),J=P.trim();let B=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,A,C);else{const re=Kd(r,A,"vertex"),me=Kd(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+G+`
`+re+`
`+me)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||J==="")&&(Z=!1);Z&&(E.diagnostics={runnable:B,programLog:G,vertexShader:{log:O,prefix:v},fragmentShader:{log:J,prefix:m}})}r.deleteShader(A),r.deleteShader(C),I=new xa(r,x),M=N_(r,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,A_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}let Y_=0;class j_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K_(e),t.set(e,i)),i}}class K_{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}}function J_(n,e,t,i,r,s,o){const a=new lu,c=new j_,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,y,E,N,U){const P=N.fog,G=U.geometry,O=M.isMeshStandardMaterial?N.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),B=J&&J.mapping===$a?J.image.height:null,Z=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=re!==void 0?re.length:0;let oe=0;G.morphAttributes.position!==void 0&&(oe=1),G.morphAttributes.normal!==void 0&&(oe=2),G.morphAttributes.color!==void 0&&(oe=3);let ze,je,$,xe;if(Z){const bt=di[Z];ze=bt.vertexShader,je=bt.fragmentShader}else ze=M.vertexShader,je=M.fragmentShader,c.update(M),$=c.getVertexShaderID(M),xe=c.getFragmentShaderID(M);const he=n.getRenderTarget(),He=n.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Q=U.isBatchedMesh===!0,Me=!!M.map,Le=!!M.matcap,k=!!J,K=!!M.aoMap,Y=!!M.lightMap,se=!!M.bumpMap,ee=!!M.normalMap,_e=!!M.displacementMap,ce=!!M.emissiveMap,ye=!!M.metalnessMap,rt=!!M.roughnessMap,nt=M.anisotropy>0,L=M.clearcoat>0,S=M.dispersion>0,V=M.iridescence>0,X=M.sheen>0,ae=M.transmission>0,j=nt&&!!M.anisotropyMap,Be=L&&!!M.clearcoatMap,ve=L&&!!M.clearcoatNormalMap,Ne=L&&!!M.clearcoatRoughnessMap,Oe=V&&!!M.iridescenceMap,ue=V&&!!M.iridescenceThicknessMap,Ae=X&&!!M.sheenColorMap,Ze=X&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,Se=!!M.specularColorMap,at=!!M.specularIntensityMap,F=ae&&!!M.transmissionMap,pe=ae&&!!M.thicknessMap,be=!!M.gradientMap,De=!!M.alphaMap,de=M.alphaTest>0,ie=!!M.alphaHash,Fe=!!M.extensions;let st=sr;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(st=n.toneMapping);const Pt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ze,fragmentShader:je,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Q,batchingColor:Q&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:gs,alphaToCoverage:!!M.alphaToCoverage,map:Me,matcap:Le,envMap:k,envMapMode:k&&J.mapping,envMapCubeUVHeight:B,aoMap:K,lightMap:Y,bumpMap:se,normalMap:ee,displacementMap:h&&_e,emissiveMap:ce,normalMapObjectSpace:ee&&M.normalMapType===em,normalMapTangentSpace:ee&&M.normalMapType===su,metalnessMap:ye,roughnessMap:rt,anisotropy:nt,anisotropyMap:j,clearcoat:L,clearcoatMap:Be,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ne,dispersion:S,iridescence:V,iridescenceMap:Oe,iridescenceThicknessMap:ue,sheen:X,sheenColorMap:Ae,sheenRoughnessMap:Ze,specularMap:Ve,specularColorMap:Se,specularIntensityMap:at,transmission:ae,transmissionMap:F,thicknessMap:pe,gradientMap:be,opaque:M.transparent===!1&&M.blending===ls&&M.alphaToCoverage===!1,alphaMap:De,alphaTest:de,alphaHash:ie,combine:M.combine,mapUv:Me&&x(M.map.channel),aoMapUv:K&&x(M.aoMap.channel),lightMapUv:Y&&x(M.lightMap.channel),bumpMapUv:se&&x(M.bumpMap.channel),normalMapUv:ee&&x(M.normalMap.channel),displacementMapUv:_e&&x(M.displacementMap.channel),emissiveMapUv:ce&&x(M.emissiveMap.channel),metalnessMapUv:ye&&x(M.metalnessMap.channel),roughnessMapUv:rt&&x(M.roughnessMap.channel),anisotropyMapUv:j&&x(M.anisotropyMap.channel),clearcoatMapUv:Be&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&x(M.sheenRoughnessMap.channel),specularMapUv:Ve&&x(M.specularMap.channel),specularColorMapUv:Se&&x(M.specularColorMap.channel),specularIntensityMapUv:at&&x(M.specularIntensityMap.channel),transmissionMapUv:F&&x(M.transmissionMap.channel),thicknessMapUv:pe&&x(M.thicknessMap.channel),alphaMapUv:De&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ee||nt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Me||De),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:He,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&xt.getTransfer(M.map.colorSpace)===Et,decodeVideoTextureEmissive:ce&&M.emissiveMap.isVideoTexture===!0&&xt.getTransfer(M.emissiveMap.colorSpace)===Et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function m(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const E in M.defines)y.push(E),y.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(w(y,M),b(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const y=g[M.type];let E;if(y){const N=di[y];E=Wm.clone(N.uniforms)}else E=M.uniforms;return E}function A(M,y){let E;for(let N=0,U=u.length;N<U;N++){const P=u[N];if(P.cacheKey===y){E=P,++E.usedTimes;break}}return E===void 0&&(E=new X_(n,y,M,s),u.push(E)),E}function C(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function R(M){c.remove(M)}function I(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:_,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:I}}function Z_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Q_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function th(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,g,x,v){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:v},n[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=v),e++,m}function a(d,h,p,g,x,v){const m=o(d,h,p,g,x,v);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):t.push(m)}function c(d,h,p,g,x,v){const m=o(d,h,p,g,x,v);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,h){t.length>1&&t.sort(d||Q_),i.length>1&&i.sort(h||th),r.length>1&&r.sort(h||th)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ey(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new nh,n.set(i,[o])):r>=s.length?(o=new nh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ty(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ot};break;case"SpotLight":t={position:new D,direction:new D,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function ny(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iy=0;function ry(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sy(n){const e=new ty,t=ny(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new Mt,o=new Mt;function a(l){let u=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,v=0,m=0,w=0,b=0,_=0,A=0,C=0,R=0;l.sort(ry);for(let M=0,y=l.length;M<y;M++){const E=l[M],N=E.color,U=E.intensity,P=E.distance,G=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=N.r*U,d+=N.g*U,h+=N.b*U;else if(E.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(E.sh.coefficients[O],U);R++}else if(E.isDirectionalLight){const O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const J=E.shadow,B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=E.shadow.matrix,w++}i.directional[p]=O,p++}else if(E.isSpotLight){const O=e.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(N).multiplyScalar(U),O.distance=P,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,i.spot[x]=O;const J=E.shadow;if(E.map&&(i.spotLightMap[A]=E.map,A++,J.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=J.matrix,E.castShadow){const B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=G,_++}x++}else if(E.isRectAreaLight){const O=e.get(E);O.color.copy(N).multiplyScalar(U),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),i.rectArea[v]=O,v++}else if(E.isPointLight){const O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){const J=E.shadow,B=t.get(E);B.shadowIntensity=J.intensity,B.shadowBias=J.bias,B.shadowNormalBias=J.normalBias,B.shadowRadius=J.radius,B.shadowMapSize=J.mapSize,B.shadowCameraNear=J.camera.near,B.shadowCameraFar=J.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=E.shadow.matrix,b++}i.point[g]=O,g++}else if(E.isHemisphereLight){const O=e.get(E);O.skyColor.copy(E.color).multiplyScalar(U),O.groundColor.copy(E.groundColor).multiplyScalar(U),i.hemi[m]=O,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==v||I.hemiLength!==m||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==A||I.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=_+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=v,I.hemiLength=m,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=A,I.numLightProbes=R,i.version=iy++)}function c(l,u){let d=0,h=0,p=0,g=0,x=0;const v=u.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const b=l[m];if(b.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),d++}else if(b.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),p++}else if(b.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(v),o.identity(),s.copy(b.matrixWorld),s.premultiply(v),o.extractRotation(s),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(v),h++}else if(b.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(v),x++}}}return{setup:a,setupView:c,state:i}}function ih(n){const e=new sy(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function oy(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ih(n),e.set(r,[a])):s>=o.length?(a=new ih(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
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
}`;function ly(n,e,t){let i=new hu;const r=new ge,s=new ge,o=new Wt,a=new U0({depthPacking:Qp}),c=new k0,l={},u=t.maxTextureSize,d={[ar]:yn,[yn]:ar,[un]:un},h=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:ay,fragmentShader:cy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ne(g,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let m=this.type;this.render=function(C,R,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),N=n.state;N.setBlending(rr),N.buffers.depth.getReversed()?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=m!==Ui&&this.type===Ui,P=m===Ui&&this.type!==Ui;for(let G=0,O=C.length;G<O;G++){const J=C[G],B=J.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Z=B.getFrameExtents();if(r.multiply(Z),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,B.mapSize.y=s.y)),B.map===null||U===!0||P===!0){const me=this.type!==Ui?{minFilter:Un,magFilter:Un}:{};B.map!==null&&B.map.dispose(),B.map=new Vi(r.x,r.y,me),B.map.texture.name=J.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const re=B.getViewportCount();for(let me=0;me<re;me++){const oe=B.getViewport(me);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),N.viewport(o),B.updateMatrices(J,me),i=B.getFrustum(),_(R,I,B.camera,J,this.type)}B.isPointLightShadow!==!0&&this.type===Ui&&w(B,I),B.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(M,y,E)};function w(C,R){const I=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Vi(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,I,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,I,p,x,null)}function b(C,R,I,M){let y=null;const E=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=I.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=y.uuid,U=R.uuid;let P=l[N];P===void 0&&(P={},l[N]=P);let G=P[U];G===void 0&&(G=y.clone(),P[U]=G,R.addEventListener("dispose",A)),y=G}if(y.visible=R.visible,y.wireframe=R.wireframe,M===Ui?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=I}return y}function _(C,R,I,M,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const U=e.update(C),P=C.material;if(Array.isArray(P)){const G=U.groups;for(let O=0,J=G.length;O<J;O++){const B=G[O],Z=P[B.materialIndex];if(Z&&Z.visible){const re=b(C,Z,M,y);C.onBeforeShadow(n,C,R,I,U,re,B),n.renderBufferDirect(I,null,U,re,C,B),C.onAfterShadow(n,C,R,I,U,re,B)}}}else if(P.visible){const G=b(C,P,M,y);C.onBeforeShadow(n,C,R,I,U,G,null),n.renderBufferDirect(I,null,U,G,C,null),C.onAfterShadow(n,C,R,I,U,G,null)}}const N=C.children;for(let U=0,P=N.length;U<P;U++)_(N[U],R,I,M,y)}function A(C){C.target.removeEventListener("dispose",A);for(const I in l){const M=l[I],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const uy={[nl]:il,[rl]:al,[sl]:cl,[fs]:ol,[il]:nl,[al]:rl,[cl]:sl,[ol]:fs};function dy(n,e){function t(){let F=!1;const pe=new Wt;let be=null;const De=new Wt(0,0,0,0);return{setMask:function(de){be!==de&&!F&&(n.colorMask(de,de,de,de),be=de)},setLocked:function(de){F=de},setClear:function(de,ie,Fe,st,Pt){Pt===!0&&(de*=st,ie*=st,Fe*=st),pe.set(de,ie,Fe,st),De.equals(pe)===!1&&(n.clearColor(de,ie,Fe,st),De.copy(pe))},reset:function(){F=!1,be=null,De.set(-1,0,0,0)}}}function i(){let F=!1,pe=!1,be=null,De=null,de=null;return{setReversed:function(ie){if(pe!==ie){const Fe=e.get("EXT_clip_control");ie?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;const st=de;de=null,this.setClear(st)}},getReversed:function(){return pe},setTest:function(ie){ie?he(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(ie){be!==ie&&!F&&(n.depthMask(ie),be=ie)},setFunc:function(ie){if(pe&&(ie=uy[ie]),De!==ie){switch(ie){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case fs:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case ol:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case cl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ie}},setLocked:function(ie){F=ie},setClear:function(ie){de!==ie&&(pe&&(ie=1-ie),n.clearDepth(ie),de=ie)},reset:function(){F=!1,be=null,De=null,de=null,pe=!1}}}function r(){let F=!1,pe=null,be=null,De=null,de=null,ie=null,Fe=null,st=null,Pt=null;return{setTest:function(bt){F||(bt?he(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(bt){pe!==bt&&!F&&(n.stencilMask(bt),pe=bt)},setFunc:function(bt,Ci,ui){(be!==bt||De!==Ci||de!==ui)&&(n.stencilFunc(bt,Ci,ui),be=bt,De=Ci,de=ui)},setOp:function(bt,Ci,ui){(ie!==bt||Fe!==Ci||st!==ui)&&(n.stencilOp(bt,Ci,ui),ie=bt,Fe=Ci,st=ui)},setLocked:function(bt){F=bt},setClear:function(bt){Pt!==bt&&(n.clearStencil(bt),Pt=bt)},reset:function(){F=!1,pe=null,be=null,De=null,de=null,ie=null,Fe=null,st=null,Pt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,x=!1,v=null,m=null,w=null,b=null,_=null,A=null,C=null,R=new ot(0,0,0),I=0,M=!1,y=null,E=null,N=null,U=null,P=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,J=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=J>=1):B.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=J>=2);let Z=null,re={};const me=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),ze=new Wt().fromArray(me),je=new Wt().fromArray(oe);function $(F,pe,be,De){const de=new Uint8Array(4),ie=n.createTexture();n.bindTexture(F,ie),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<be;Fe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(pe+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ie}const xe={};xe[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(fs),se(!1),ee(Yu),he(n.CULL_FACE),K(rr);function he(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function He(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ue(F,pe){return d[F]!==pe?(n.bindFramebuffer(F,pe),d[F]=pe,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=pe),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Q(F,pe){let be=p,De=!1;if(F){be=h.get(pe),be===void 0&&(be=[],h.set(pe,be));const de=F.textures;if(be.length!==de.length||be[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Fe=de.length;ie<Fe;ie++)be[ie]=n.COLOR_ATTACHMENT0+ie;be.length=de.length,De=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,De=!0);De&&n.drawBuffers(be)}function Me(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Le={[wr]:n.FUNC_ADD,[Tp]:n.FUNC_SUBTRACT,[Ap]:n.FUNC_REVERSE_SUBTRACT};Le[Cp]=n.MIN,Le[Rp]=n.MAX;const k={[Pp]:n.ZERO,[Lp]:n.ONE,[Ip]:n.SRC_COLOR,[el]:n.SRC_ALPHA,[Fp]:n.SRC_ALPHA_SATURATE,[Np]:n.DST_COLOR,[Up]:n.DST_ALPHA,[Dp]:n.ONE_MINUS_SRC_COLOR,[tl]:n.ONE_MINUS_SRC_ALPHA,[Op]:n.ONE_MINUS_DST_COLOR,[kp]:n.ONE_MINUS_DST_ALPHA,[Bp]:n.CONSTANT_COLOR,[zp]:n.ONE_MINUS_CONSTANT_COLOR,[Hp]:n.CONSTANT_ALPHA,[Vp]:n.ONE_MINUS_CONSTANT_ALPHA};function K(F,pe,be,De,de,ie,Fe,st,Pt,bt){if(F===rr){x===!0&&(He(n.BLEND),x=!1);return}if(x===!1&&(he(n.BLEND),x=!0),F!==Ep){if(F!==v||bt!==M){if((m!==wr||_!==wr)&&(n.blendEquation(n.FUNC_ADD),m=wr,_=wr),bt)switch(F){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ju:n.blendFunc(n.ONE,n.ONE);break;case Ku:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ju:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ku:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ju:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,b=null,A=null,C=null,R.set(0,0,0),I=0,v=F,M=bt}return}de=de||pe,ie=ie||be,Fe=Fe||De,(pe!==m||de!==_)&&(n.blendEquationSeparate(Le[pe],Le[de]),m=pe,_=de),(be!==w||De!==b||ie!==A||Fe!==C)&&(n.blendFuncSeparate(k[be],k[De],k[ie],k[Fe]),w=be,b=De,A=ie,C=Fe),(st.equals(R)===!1||Pt!==I)&&(n.blendColor(st.r,st.g,st.b,Pt),R.copy(st),I=Pt),v=F,M=!1}function Y(F,pe){F.side===un?He(n.CULL_FACE):he(n.CULL_FACE);let be=F.side===yn;pe&&(be=!be),se(be),F.blending===ls&&F.transparent===!1?K(rr):K(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const De=F.stencilWrite;a.setTest(De),De&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(F){y!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),y=F)}function ee(F){F!==Mp?(he(n.CULL_FACE),F!==E&&(F===Yu?n.cullFace(n.BACK):F===Sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),E=F}function _e(F){F!==N&&(O&&n.lineWidth(F),N=F)}function ce(F,pe,be){F?(he(n.POLYGON_OFFSET_FILL),(U!==pe||P!==be)&&(n.polygonOffset(pe,be),U=pe,P=be)):He(n.POLYGON_OFFSET_FILL)}function ye(F){F?he(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function rt(F){F===void 0&&(F=n.TEXTURE0+G-1),Z!==F&&(n.activeTexture(F),Z=F)}function nt(F,pe,be){be===void 0&&(Z===null?be=n.TEXTURE0+G-1:be=Z);let De=re[be];De===void 0&&(De={type:void 0,texture:void 0},re[be]=De),(De.type!==F||De.texture!==pe)&&(Z!==be&&(n.activeTexture(be),Z=be),n.bindTexture(F,pe||xe[F]),De.type=F,De.texture=pe)}function L(){const F=re[Z];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(F){ze.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ze.copy(F))}function Ze(F){je.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),je.copy(F))}function Ve(F,pe){let be=l.get(pe);be===void 0&&(be=new WeakMap,l.set(pe,be));let De=be.get(F);De===void 0&&(De=n.getUniformBlockIndex(pe,F.name),be.set(F,De))}function Se(F,pe){const De=l.get(pe).get(F);c.get(pe)!==De&&(n.uniformBlockBinding(pe,De,F.__bindingPointIndex),c.set(pe,De))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,re={},d={},h=new WeakMap,p=[],g=null,x=!1,v=null,m=null,w=null,b=null,_=null,A=null,C=null,R=new ot(0,0,0),I=0,M=!1,y=null,E=null,N=null,U=null,P=null,ze.set(0,0,n.canvas.width,n.canvas.height),je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:He,bindFramebuffer:Ue,drawBuffers:Q,useProgram:Me,setBlending:K,setMaterial:Y,setFlipSided:se,setCullFace:ee,setLineWidth:_e,setPolygonOffset:ce,setScissorTest:ye,activeTexture:rt,bindTexture:nt,unbindTexture:L,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:Oe,texImage3D:ue,updateUBOMapping:Ve,uniformBlockBinding:Se,texStorage2D:ve,texStorage3D:Ne,texSubImage2D:X,texSubImage3D:ae,compressedTexSubImage2D:j,compressedTexSubImage3D:Be,scissor:Ae,viewport:Ze,reset:at}}function hy(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return p?new OffscreenCanvas(L,S):Aa("canvas")}function x(L,S,V){let X=1;const ae=nt(L);if((ae.width>V||ae.height>V)&&(X=V/Math.max(ae.width,ae.height)),X<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(X*ae.width),Be=Math.floor(X*ae.height);d===void 0&&(d=g(j,Be));const ve=S?g(j,Be):d;return ve.width=j,ve.height=Be,ve.getContext("2d").drawImage(L,0,0,j,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+j+"x"+Be+")."),ve}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),L;return L}function v(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,S,V,X,ae=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=S;if(S===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),S===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),S===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),S===n.RGBA){const Be=ae?Ea:xt.getTransfer(X);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Be===Et?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(L,S){let V;return L?S===null||S===Cr||S===to?V=n.DEPTH24_STENCIL8:S===fi?V=n.DEPTH32F_STENCIL8:S===eo&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Cr||S===to?V=n.DEPTH_COMPONENT24:S===fi?V=n.DEPTH_COMPONENT32F:S===eo&&(V=n.DEPTH_COMPONENT16),V}function A(L,S){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==Un&&L.minFilter!==hi?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function C(L){const S=L.target;S.removeEventListener("dispose",C),I(S),S.isVideoTexture&&u.delete(S)}function R(L){const S=L.target;S.removeEventListener("dispose",R),y(S)}function I(L){const S=i.get(L);if(S.__webglInit===void 0)return;const V=L.source,X=h.get(V);if(X){const ae=X[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&M(L),Object.keys(X).length===0&&h.delete(V)}i.remove(L)}function M(L){const S=i.get(L);n.deleteTexture(S.__webglTexture);const V=L.source,X=h.get(V);delete X[S.__cacheKey],o.memory.textures--}function y(L){const S=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let ae=0;ae<S.__webglFramebuffer[X].length;ae++)n.deleteFramebuffer(S.__webglFramebuffer[X][ae]);else n.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)n.deleteFramebuffer(S.__webglFramebuffer[X]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=L.textures;for(let X=0,ae=V.length;X<ae;X++){const j=i.get(V[X]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(V[X])}i.remove(L)}let E=0;function N(){E=0}function U(){const L=E;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),E+=1,L}function P(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function G(L,S){const V=i.get(L);if(L.isVideoTexture&&ye(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){const X=L.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,L,S);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+S)}function O(L,S){const V=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){xe(V,L,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+S)}function J(L,S){const V=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){xe(V,L,S);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+S)}function B(L,S){const V=i.get(L);if(L.version>0&&V.__version!==L.version){he(V,L,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+S)}const Z={[Sa]:n.REPEAT,[Sr]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},re={[Un]:n.NEAREST,[Jp]:n.NEAREST_MIPMAP_NEAREST,[Oo]:n.NEAREST_MIPMAP_LINEAR,[hi]:n.LINEAR,[pc]:n.LINEAR_MIPMAP_NEAREST,[Er]:n.LINEAR_MIPMAP_LINEAR},me={[tm]:n.NEVER,[am]:n.ALWAYS,[nm]:n.LESS,[Ph]:n.LEQUAL,[im]:n.EQUAL,[om]:n.GEQUAL,[rm]:n.GREATER,[sm]:n.NOTEQUAL};function oe(L,S){if(S.type===fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===hi||S.magFilter===pc||S.magFilter===Oo||S.magFilter===Er||S.minFilter===hi||S.minFilter===pc||S.minFilter===Oo||S.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Z[S.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Z[S.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Z[S.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,re[S.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Un||S.minFilter!==Oo&&S.minFilter!==Er||S.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ze(L,S){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",C));const X=S.source;let ae=h.get(X);ae===void 0&&(ae={},h.set(X,ae));const j=P(S);if(j!==L.__cacheKey){ae[j]===void 0&&(ae[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ae[j].usedTimes++;const Be=ae[L.__cacheKey];Be!==void 0&&(ae[L.__cacheKey].usedTimes--,Be.usedTimes===0&&M(S)),L.__cacheKey=j,L.__webglTexture=ae[j].texture}return V}function je(L,S,V){return Math.floor(Math.floor(L/V)/S)}function $(L,S,V,X){const j=L.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,V,X,S.data);else{j.sort((ue,Ae)=>ue.start-Ae.start);let Be=0;for(let ue=1;ue<j.length;ue++){const Ae=j[Be],Ze=j[ue],Ve=Ae.start+Ae.count,Se=je(Ze.start,S.width,4),at=je(Ae.start,S.width,4);Ze.start<=Ve+1&&Se===at&&je(Ze.start+Ze.count-1,S.width,4)===Se?Ae.count=Math.max(Ae.count,Ze.start+Ze.count-Ae.start):(++Be,j[Be]=Ze)}j.length=Be+1;const ve=n.getParameter(n.UNPACK_ROW_LENGTH),Ne=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ue=0,Ae=j.length;ue<Ae;ue++){const Ze=j[ue],Ve=Math.floor(Ze.start/4),Se=Math.ceil(Ze.count/4),at=Ve%S.width,F=Math.floor(Ve/S.width),pe=Se,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,at),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,at,F,pe,be,V,X,S.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function xe(L,S,V){let X=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=n.TEXTURE_3D);const ae=ze(L,S),j=S.source;t.bindTexture(X,L.__webglTexture,n.TEXTURE0+V);const Be=i.get(j);if(j.version!==Be.__version||ae===!0){t.activeTexture(n.TEXTURE0+V);const ve=xt.getPrimaries(xt.workingColorSpace),Ne=S.colorSpace===tr?null:xt.getPrimaries(S.colorSpace),Oe=S.colorSpace===tr||ve===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ue=x(S.image,!1,r.maxTextureSize);ue=rt(S,ue);const Ae=s.convert(S.format,S.colorSpace),Ze=s.convert(S.type);let Ve=b(S.internalFormat,Ae,Ze,S.colorSpace,S.isVideoTexture);oe(X,S);let Se;const at=S.mipmaps,F=S.isVideoTexture!==!0,pe=Be.__version===void 0||ae===!0,be=j.dataReady,De=A(S,ue);if(S.isDepthTexture)Ve=_(S.format===io,S.type),pe&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ve,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Ae,Ze,null));else if(S.isDataTexture)if(at.length>0){F&&pe&&t.texStorage2D(n.TEXTURE_2D,De,Ve,at[0].width,at[0].height);for(let de=0,ie=at.length;de<ie;de++)Se=at[de],F?be&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Se.width,Se.height,Ae,Ze,Se.data):t.texImage2D(n.TEXTURE_2D,de,Ve,Se.width,Se.height,0,Ae,Ze,Se.data);S.generateMipmaps=!1}else F?(pe&&t.texStorage2D(n.TEXTURE_2D,De,Ve,ue.width,ue.height),be&&$(S,ue,Ae,Ze)):t.texImage2D(n.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Ae,Ze,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ve,at[0].width,at[0].height,ue.depth);for(let de=0,ie=at.length;de<ie;de++)if(Se=at[de],S.format!==Zn)if(Ae!==null)if(F){if(be)if(S.layerUpdates.size>0){const Fe=Dd(Se.width,Se.height,S.format,S.type);for(const st of S.layerUpdates){const Pt=Se.data.subarray(st*Fe/Se.data.BYTES_PER_ELEMENT,(st+1)*Fe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,st,Se.width,Se.height,1,Ae,Pt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,ue.depth,Ae,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Ve,Se.width,Se.height,ue.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,ue.depth,Ae,Ze,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Ve,Se.width,Se.height,ue.depth,0,Ae,Ze,Se.data)}else{F&&pe&&t.texStorage2D(n.TEXTURE_2D,De,Ve,at[0].width,at[0].height);for(let de=0,ie=at.length;de<ie;de++)Se=at[de],S.format!==Zn?Ae!==null?F?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?be&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Se.width,Se.height,Ae,Ze,Se.data):t.texImage2D(n.TEXTURE_2D,de,Ve,Se.width,Se.height,0,Ae,Ze,Se.data)}else if(S.isDataArrayTexture)if(F){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ve,ue.width,ue.height,ue.depth),be)if(S.layerUpdates.size>0){const de=Dd(ue.width,ue.height,S.format,S.type);for(const ie of S.layerUpdates){const Fe=ue.data.subarray(ie*de/ue.data.BYTES_PER_ELEMENT,(ie+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ue.width,ue.height,1,Ae,Ze,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Ze,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ue.width,ue.height,ue.depth,0,Ae,Ze,ue.data);else if(S.isData3DTexture)F?(pe&&t.texStorage3D(n.TEXTURE_3D,De,Ve,ue.width,ue.height,ue.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Ze,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ue.width,ue.height,ue.depth,0,Ae,Ze,ue.data);else if(S.isFramebufferTexture){if(pe)if(F)t.texStorage2D(n.TEXTURE_2D,De,Ve,ue.width,ue.height);else{let de=ue.width,ie=ue.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Ve,de,ie,0,Ae,Ze,null),de>>=1,ie>>=1}}else if(at.length>0){if(F&&pe){const de=nt(at[0]);t.texStorage2D(n.TEXTURE_2D,De,Ve,de.width,de.height)}for(let de=0,ie=at.length;de<ie;de++)Se=at[de],F?be&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ae,Ze,Se):t.texImage2D(n.TEXTURE_2D,de,Ve,Ae,Ze,Se);S.generateMipmaps=!1}else if(F){if(pe){const de=nt(ue);t.texStorage2D(n.TEXTURE_2D,De,Ve,de.width,de.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ze,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ae,Ze,ue);v(S)&&m(X),Be.__version=j.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function he(L,S,V){if(S.image.length!==6)return;const X=ze(L,S),ae=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+V);const j=i.get(ae);if(ae.version!==j.__version||X===!0){t.activeTexture(n.TEXTURE0+V);const Be=xt.getPrimaries(xt.workingColorSpace),ve=S.colorSpace===tr?null:xt.getPrimaries(S.colorSpace),Ne=S.colorSpace===tr||Be===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,ue=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let ie=0;ie<6;ie++)!Oe&&!ue?Ae[ie]=x(S.image[ie],!0,r.maxCubemapSize):Ae[ie]=ue?S.image[ie].image:S.image[ie],Ae[ie]=rt(S,Ae[ie]);const Ze=Ae[0],Ve=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),at=b(S.internalFormat,Ve,Se,S.colorSpace),F=S.isVideoTexture!==!0,pe=j.__version===void 0||X===!0,be=ae.dataReady;let De=A(S,Ze);oe(n.TEXTURE_CUBE_MAP,S);let de;if(Oe){F&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,at,Ze.width,Ze.height);for(let ie=0;ie<6;ie++){de=Ae[ie].mipmaps;for(let Fe=0;Fe<de.length;Fe++){const st=de[Fe];S.format!==Zn?Ve!==null?F?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,st.width,st.height,Ve,st.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,at,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,st.width,st.height,Ve,Se,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,at,st.width,st.height,0,Ve,Se,st.data)}}}else{if(de=S.mipmaps,F&&pe){de.length>0&&De++;const ie=nt(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,at,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ue){F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae[ie].width,Ae[ie].height,Ve,Se,Ae[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,at,Ae[ie].width,Ae[ie].height,0,Ve,Se,Ae[ie].data);for(let Fe=0;Fe<de.length;Fe++){const Pt=de[Fe].image[ie].image;F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Pt.width,Pt.height,Ve,Se,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,at,Pt.width,Pt.height,0,Ve,Se,Pt.data)}}else{F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ve,Se,Ae[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,at,Ve,Se,Ae[ie]);for(let Fe=0;Fe<de.length;Fe++){const st=de[Fe];F?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,Ve,Se,st.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,at,Ve,Se,st.image[ie])}}}v(S)&&m(n.TEXTURE_CUBE_MAP),j.__version=ae.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function He(L,S,V,X,ae,j){const Be=s.convert(V.format,V.colorSpace),ve=s.convert(V.type),Ne=b(V.internalFormat,Be,ve,V.colorSpace),Oe=i.get(S),ue=i.get(V);if(ue.__renderTarget=S,!Oe.__hasExternalTextures){const Ae=Math.max(1,S.width>>j),Ze=Math.max(1,S.height>>j);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,j,Ne,Ae,Ze,S.depth,0,Be,ve,null):t.texImage2D(ae,j,Ne,Ae,Ze,0,Be,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ce(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ae,ue.__webglTexture,0,_e(S)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ae,ue.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(L,S,V){if(n.bindRenderbuffer(n.RENDERBUFFER,L),S.depthBuffer){const X=S.depthTexture,ae=X&&X.isDepthTexture?X.type:null,j=_(S.stencilBuffer,ae),Be=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=_e(S);ce(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,j,S.width,S.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,L)}else{const X=S.textures;for(let ae=0;ae<X.length;ae++){const j=X[ae],Be=s.convert(j.format,j.colorSpace),ve=s.convert(j.type),Ne=b(j.internalFormat,Be,ve,j.colorSpace),Oe=_e(S);V&&ce(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ne,S.width,S.height):ce(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,Ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ae=X.__webglTexture,j=_e(S);if(S.depthTexture.format===no)ce(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(S.depthTexture.format===io)ce(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Me(L){const S=i.get(L),V=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const X=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",ae)};X.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=X}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const X=L.texture.mipmaps;X&&X.length>0?Q(S.__webglFramebuffer[0],L):Q(S.__webglFramebuffer,L)}else if(V){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=n.createRenderbuffer(),Ue(S.__webglDepthbuffer[X],L,!1);else{const ae=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,j)}}else{const X=L.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ue(S.__webglDepthbuffer,L,!1);else{const ae=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(L,S,V){const X=i.get(L);S!==void 0&&He(X.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Me(L)}function k(L){const S=L.texture,V=i.get(L),X=i.get(S);L.addEventListener("dispose",R);const ae=L.textures,j=L.isWebGLCubeRenderTarget===!0,Be=ae.length>1;if(Be||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=S.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ve]=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)V.__webglFramebuffer[ve][Ne]=n.createFramebuffer()}else V.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)V.__webglFramebuffer[ve]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Be)for(let ve=0,Ne=ae.length;ve<Ne;ve++){const Oe=i.get(ae[ve]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&ce(L)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const Ne=ae[ve];V.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ve]);const Oe=s.convert(Ne.format,Ne.colorSpace),ue=s.convert(Ne.type),Ae=b(Ne.internalFormat,Oe,ue,Ne.colorSpace,L.isXRRenderTarget===!0),Ze=_e(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Ae,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,V.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),oe(n.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)He(V.__webglFramebuffer[ve][Ne],L,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ne);else He(V.__webglFramebuffer[ve],L,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);v(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let ve=0,Ne=ae.length;ve<Ne;ve++){const Oe=ae[ve],ue=i.get(Oe);let Ae=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ue.__webglTexture),oe(Ae,Oe),He(V.__webglFramebuffer,L,Oe,n.COLOR_ATTACHMENT0+ve,Ae,0),v(Oe)&&m(Ae)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,X.__webglTexture),oe(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)He(V.__webglFramebuffer[Ne],L,S,n.COLOR_ATTACHMENT0,ve,Ne);else He(V.__webglFramebuffer,L,S,n.COLOR_ATTACHMENT0,ve,0);v(S)&&m(ve),t.unbindTexture()}L.depthBuffer&&Me(L)}function K(L){const S=L.textures;for(let V=0,X=S.length;V<X;V++){const ae=S[V];if(v(ae)){const j=w(L),Be=i.get(ae).__webglTexture;t.bindTexture(j,Be),m(j),t.unbindTexture()}}}const Y=[],se=[];function ee(L){if(L.samples>0){if(ce(L)===!1){const S=L.textures,V=L.width,X=L.height;let ae=n.COLOR_BUFFER_BIT;const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(L),ve=S.length>1;if(ve)for(let Oe=0;Oe<S.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ne=L.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Oe=0;Oe<S.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Oe]);const ue=i.get(S[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,V,X,0,0,V,X,ae,n.NEAREST),c===!0&&(Y.length=0,se.length=0,Y.push(n.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Y.push(j),se.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Oe=0;Oe<S.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Oe]);const ue=i.get(S[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const S=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function _e(L){return Math.min(r.maxSamples,L.samples)}function ce(L){const S=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(L){const S=o.render.frame;u.get(L)!==S&&(u.set(L,S),L.update())}function rt(L,S){const V=L.colorSpace,X=L.format,ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==gs&&V!==tr&&(xt.getTransfer(V)===Et?(X!==Zn||ae!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=B,this.rebindTextures=Le,this.setupRenderTarget=k,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=He,this.useMultisampledRTT=ce}function fy(n,e){function t(i,r=tr){let s;const o=xt.getTransfer(r);if(i===vi)return n.UNSIGNED_BYTE;if(i===Ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===eo)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===Cr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===_o)return n.HALF_FLOAT;if(i===Th)return n.ALPHA;if(i===Ah)return n.RGB;if(i===Zn)return n.RGBA;if(i===no)return n.DEPTH_COMPONENT;if(i===io)return n.DEPTH_STENCIL;if(i===tu)return n.RED;if(i===nu)return n.RED_INTEGER;if(i===Ch)return n.RG;if(i===iu)return n.RG_INTEGER;if(i===ru)return n.RGBA_INTEGER;if(i===fa||i===pa||i===ma||i===ga)if(o===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===fl||i===pl||i===ml)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===vl||i===xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gl||i===vl)return o===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_l||i===yl||i===bl||i===wl||i===Ml||i===Sl||i===El||i===Tl||i===Al||i===Cl||i===Rl||i===Pl||i===Ll||i===Il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_l)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===El)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return o===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===va||i===Dl||i===Ul)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===va)return o===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rh||i===kl||i===Nl||i===Ol)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===va)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class sf extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,my=`
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

}`;class gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cr({vertexShader:py,fragmentShader:my,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vy extends Ss{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const x=new gy,v={},m=t.getContextAttributes();let w=null,b=null;const _=[],A=[],C=new ge;let R=null;const I=new En;I.viewport=new Wt;const M=new En;M.viewport=new Wt;const y=[I,M],E=new F0;let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let xe=_[$];return xe===void 0&&(xe=new kc,_[$]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function($){let xe=_[$];return xe===void 0&&(xe=new kc,_[$]=xe),xe.getGripSpace()},this.getHand=function($){let xe=_[$];return xe===void 0&&(xe=new kc,_[$]=xe),xe.getHandSpace()};function P($){const xe=A.indexOf($.inputSource);if(xe===-1)return;const he=_[xe];he!==void 0&&(he.update($.inputSource,$.frame,l||o),he.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",O);for(let $=0;$<_.length;$++){const xe=A[$];xe!==null&&(A[$]=null,_[$].disconnect(xe))}N=null,U=null,x.reset();for(const $ in v)delete v[$];e.setRenderTarget(w),p=null,h=null,d=null,r=null,b=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",G),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,He=null,Ue=null;m.depth&&(Ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?io:no,He=m.stencil?to:Cr);const Q={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};h=d.createProjectionLayer(Q),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Vi(h.textureWidth,h.textureHeight,{format:Zn,type:vi,depthTexture:new zh(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Vi(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O($){for(let xe=0;xe<$.removed.length;xe++){const he=$.removed[xe],He=A.indexOf(he);He>=0&&(A[He]=null,_[He].disconnect(he))}for(let xe=0;xe<$.added.length;xe++){const he=$.added[xe];let He=A.indexOf(he);if(He===-1){for(let Q=0;Q<_.length;Q++)if(Q>=A.length){A.push(he),He=Q;break}else if(A[Q]===null){A[Q]=he,He=Q;break}if(He===-1)break}const Ue=_[He];Ue&&Ue.connect(he)}}const J=new D,B=new D;function Z($,xe,he){J.setFromMatrixPosition(xe.matrixWorld),B.setFromMatrixPosition(he.matrixWorld);const He=J.distanceTo(B),Ue=xe.projectionMatrix.elements,Q=he.projectionMatrix.elements,Me=Ue[14]/(Ue[10]-1),Le=Ue[14]/(Ue[10]+1),k=(Ue[9]+1)/Ue[5],K=(Ue[9]-1)/Ue[5],Y=(Ue[8]-1)/Ue[0],se=(Q[8]+1)/Q[0],ee=Me*Y,_e=Me*se,ce=He/(-Y+se),ye=ce*-Y;if(xe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ye),$.translateZ(ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(xe.projectionMatrix),$.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const rt=Me+ce,nt=Le+ce,L=ee-ye,S=_e+(He-ye),V=k*Le/nt*rt,X=K*Le/nt*rt;$.projectionMatrix.makePerspective(L,S,V,X,rt,nt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,xe){xe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(xe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let xe=$.near,he=$.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(he=x.depthFar)),E.near=M.near=I.near=xe,E.far=M.far=I.far=he,(N!==E.near||U!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,U=E.far),E.layers.mask=$.layers.mask|6,I.layers.mask=E.layers.mask&3,M.layers.mask=E.layers.mask&5;const He=$.parent,Ue=E.cameras;re(E,He);for(let Q=0;Q<Ue.length;Q++)re(Ue[Q],He);Ue.length===2?Z(E,I,M):E.projectionMatrix.copy(I.projectionMatrix),me($,E,He)};function me($,xe,he){he===null?$.matrix.copy(xe.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(xe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(xe.projectionMatrix),$.projectionMatrixInverse.copy(xe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ro*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)},this.getCameraTexture=function($){return v[$]};let oe=null;function ze($,xe){if(u=xe.getViewerPose(l||o),g=xe,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let He=!1;he.length!==E.cameras.length&&(E.cameras.length=0,He=!0);for(let Le=0;Le<he.length;Le++){const k=he[Le];let K=null;if(p!==null)K=p.getViewport(k);else{const se=d.getViewSubImage(h,k);K=se.viewport,Le===0&&(e.setRenderTargetTextures(b,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(b))}let Y=y[Le];Y===void 0&&(Y=new En,Y.layers.enable(Le),Y.viewport=new Wt,y[Le]=Y),Y.matrix.fromArray(k.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(k.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(K.x,K.y,K.width,K.height),Le===0&&(E.matrix.copy(Y.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),He===!0&&E.cameras.push(Y)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Le=d.getDepthInformation(he[0]);Le&&Le.isValid&&Le.texture&&x.init(Le,r.renderState)}if(Ue&&Ue.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Le=0;Le<he.length;Le++){const k=he[Le].camera;if(k){let K=v[k];K||(K=new sf,v[k]=K);const Y=d.getCameraImage(k);K.sourceTexture=Y}}}for(let he=0;he<_.length;he++){const He=A[he],Ue=_[he];He!==null&&Ue!==void 0&&Ue.update(He,xe,l||o)}oe&&oe($,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const je=new Qh;je.setAnimationLoop(ze),this.setAnimationLoop=function($){oe=$},this.dispose=function(){}}}const _r=new _i,xy=new Mt;function _y(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,Nh(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,w,b,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),d(v,m)):m.isMeshPhongMaterial?(s(v,m),u(v,m)):m.isMeshStandardMaterial?(s(v,m),h(v,m),m.isMeshPhysicalMaterial&&p(v,m,_)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),x(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?c(v,m,w,b):m.isSpriteMaterial?l(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===yn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===yn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const w=e.get(m),b=w.envMap,_=w.envMapRotation;b&&(v.envMap.value=b,_r.copy(_),_r.x*=-1,_r.y*=-1,_r.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),v.envMapRotation.value.setFromMatrix4(xy.makeRotationFromEuler(_r)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,w,b){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*w,v.scale.value=b*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function h(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,w){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=w.texture,v.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function x(v,m){const w=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(w.matrixWorld),v.nearDistance.value=w.shadow.camera.near,v.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){const _=b.program;i.uniformBlockBinding(w,_)}function l(w,b){let _=r[w.id];_===void 0&&(g(w),_=u(w),r[w.id]=_,w.addEventListener("dispose",v));const A=b.program;i.updateUBOMapping(w,A);const C=e.render.frame;s[w.id]!==C&&(h(w),s[w.id]=C)}function u(w){const b=d();w.__bindingPointIndex=b;const _=n.createBuffer(),A=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,_),_}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const b=r[w.id],_=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,R=_.length;C<R;C++){const I=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,y=I.length;M<y;M++){const E=I[M];if(p(E,C,M,A)===!0){const N=E.__offset,U=Array.isArray(E.value)?E.value:[E.value];let P=0;for(let G=0;G<U.length;G++){const O=U[G],J=x(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,N+P,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,P),P+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,_,A){const C=w.value,R=b+"_"+_;if(A[R]===void 0)return typeof C=="number"||typeof C=="boolean"?A[R]=C:A[R]=C.clone(),!0;{const I=A[R];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return A[R]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(w){const b=w.uniforms;let _=0;const A=16;for(let R=0,I=b.length;R<I;R++){const M=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,E=M.length;y<E;y++){const N=M[y],U=Array.isArray(N.value)?N.value:[N.value];for(let P=0,G=U.length;P<G;P++){const O=U[P],J=x(O),B=_%A,Z=B%J.boundary,re=B+Z;_+=Z,re!==0&&A-re<J.storage&&(_+=A-re),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=J.storage}}}const C=_%A;return C>0&&(_+=A-C),w.__size=_,w.__cache={},this}function x(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function v(w){const b=w.target;b.removeEventListener("dispose",v);const _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class by{constructor(e={}){const{canvas:t=Sm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=nn;let C=0,R=0,I=null,M=-1,y=null;const E=new Wt,N=new Wt;let U=null;const P=new ot(0);let G=0,O=t.width,J=t.height,B=1,Z=null,re=null;const me=new Wt(0,0,O,J),oe=new Wt(0,0,O,J);let ze=!1;const je=new hu;let $=!1,xe=!1;const he=new Mt,He=new D,Ue=new Wt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Le(){return I===null?B:1}let k=i;function K(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",de,!1),k===null){const z="webgl2";if(k=K(z,T),k===null)throw K(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Y,se,ee,_e,ce,ye,rt,nt,L,S,V,X,ae,j,Be,ve,Ne,Oe,ue,Ae,Ze,Ve,Se,at;function F(){Y=new Lx(k),Y.init(),Ve=new fy(k,Y),se=new Sx(k,Y,e,Ve),ee=new dy(k,Y),se.reversedDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),_e=new Ux(k),ce=new Z_,ye=new hy(k,Y,ee,ce,se,Ve,_e),rt=new Tx(_),nt=new Px(_),L=new z0(k),Se=new wx(k,L),S=new Ix(k,L,_e,Se),V=new Nx(k,S,L,_e),ue=new kx(k,se,ye),ve=new Ex(ce),X=new J_(_,rt,nt,Y,se,Se,ve),ae=new _y(_,ce),j=new ey,Be=new oy(Y),Oe=new bx(_,rt,nt,ee,V,p,c),Ne=new ly(_,V,se),at=new yy(k,_e,se,ee),Ae=new Mx(k,Y,_e),Ze=new Dx(k,Y,_e),_e.programs=X.programs,_.capabilities=se,_.extensions=Y,_.properties=ce,_.renderLists=j,_.shadowMap=Ne,_.state=ee,_.info=_e}F();const pe=new vy(_,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=Y.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Y.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(O,J,!1))},this.getSize=function(T){return T.set(O,J)},this.setSize=function(T,z,W=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,J=z,t.width=Math.floor(T*B),t.height=Math.floor(z*B),W===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(O*B,J*B).floor()},this.setDrawingBufferSize=function(T,z,W){O=T,J=z,B=W,t.width=Math.floor(T*W),t.height=Math.floor(z*W),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,z,W,q){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,z,W,q),ee.viewport(E.copy(me).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,z,W,q){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,z,W,q),ee.scissor(N.copy(oe).multiplyScalar(B).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(T){ee.setScissorTest(ze=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,W=!0){let q=0;if(T){let H=!1;if(I!==null){const fe=I.texture.format;H=fe===ru||fe===iu||fe===nu}if(H){const fe=I.texture.type,Te=fe===vi||fe===Cr||fe===eo||fe===to||fe===Ql||fe===eu,ke=Oe.getClearColor(),Ie=Oe.getClearAlpha(),Ke=ke.r,et=ke.g,We=ke.b;Te?(g[0]=Ke,g[1]=et,g[2]=We,g[3]=Ie,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=Ke,x[1]=et,x[2]=We,x[3]=Ie,k.clearBufferiv(k.COLOR,0,x))}else q|=k.COLOR_BUFFER_BIT}z&&(q|=k.DEPTH_BUFFER_BIT),W&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Oe.dispose(),j.dispose(),Be.dispose(),ce.dispose(),rt.dispose(),nt.dispose(),V.dispose(),Se.dispose(),at.dispose(),X.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ui),pe.removeEventListener("sessionend",Vu),hr.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=_e.autoReset,z=Ne.enabled,W=Ne.autoUpdate,q=Ne.needsUpdate,H=Ne.type;F(),_e.autoReset=T,Ne.enabled=z,Ne.autoUpdate=W,Ne.needsUpdate=q,Ne.type=H}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const z=T.target;z.removeEventListener("dispose",ie),Fe(z)}function Fe(T){st(T),ce.remove(T)}function st(T){const z=ce.get(T).programs;z!==void 0&&(z.forEach(function(W){X.releaseProgram(W)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,W,q,H,fe){z===null&&(z=Q);const Te=H.isMesh&&H.matrixWorld.determinant()<0,ke=vp(T,z,W,q,H);ee.setMaterial(q,Te);let Ie=W.index,Ke=1;if(q.wireframe===!0){if(Ie=S.getWireframeAttribute(W),Ie===void 0)return;Ke=2}const et=W.drawRange,We=W.attributes.position;let pt=et.start*Ke,St=(et.start+et.count)*Ke;fe!==null&&(pt=Math.max(pt,fe.start*Ke),St=Math.min(St,(fe.start+fe.count)*Ke)),Ie!==null?(pt=Math.max(pt,0),St=Math.min(St,Ie.count)):We!=null&&(pt=Math.max(pt,0),St=Math.min(St,We.count));const Vt=St-pt;if(Vt<0||Vt===1/0)return;Se.setup(H,q,ke,W,Ie);let It,At=Ae;if(Ie!==null&&(It=L.get(Ie),At=Ze,At.setIndex(It)),H.isMesh)q.wireframe===!0?(ee.setLineWidth(q.wireframeLinewidth*Le()),At.setMode(k.LINES)):At.setMode(k.TRIANGLES);else if(H.isLine){let Xe=q.linewidth;Xe===void 0&&(Xe=1),ee.setLineWidth(Xe*Le()),H.isLineSegments?At.setMode(k.LINES):H.isLineLoop?At.setMode(k.LINE_LOOP):At.setMode(k.LINE_STRIP)}else H.isPoints?At.setMode(k.POINTS):H.isSprite&&At.setMode(k.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))At.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xe=H._multiDrawStarts,Nt=H._multiDrawCounts,vt=H._multiDrawCount,Cn=Ie?L.get(Ie).bytesPerElement:1,zr=ce.get(q).currentProgram.getUniforms();for(let Rn=0;Rn<vt;Rn++)zr.setValue(k,"_gl_DrawID",Rn),At.render(Xe[Rn]/Cn,Nt[Rn])}else if(H.isInstancedMesh)At.renderInstances(pt,Vt,H.count);else if(W.isInstancedBufferGeometry){const Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Nt=Math.min(W.instanceCount,Xe);At.renderInstances(pt,Vt,Nt)}else At.render(pt,Vt)};function Pt(T,z,W){T.transparent===!0&&T.side===un&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,No(T,z,W),T.side=ar,T.needsUpdate=!0,No(T,z,W),T.side=un):No(T,z,W)}this.compile=function(T,z,W=null){W===null&&(W=T),m=Be.get(W),m.init(z),b.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const q=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){const ke=fe[Te];Pt(ke,W,H),q.add(ke)}else Pt(fe,W,H),q.add(fe)}),m=b.pop(),q},this.compileAsync=function(T,z,W=null){const q=this.compile(T,z,W);return new Promise(H=>{function fe(){if(q.forEach(function(Te){ce.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){H(T);return}setTimeout(fe,10)}Y.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let bt=null;function Ci(T){bt&&bt(T)}function ui(){hr.stop()}function Vu(){hr.start()}const hr=new Qh;hr.setAnimationLoop(Ci),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(T){bt=T,pe.setAnimationLoop(T),T===null?hr.stop():hr.start()},pe.addEventListener("sessionstart",ui),pe.addEventListener("sessionend",Vu),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,z,I),m=Be.get(T,b.length),m.init(z),b.push(m),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),je.setFromProjectionMatrix(he,pi,z.reversedDepth),xe=this.localClippingEnabled,$=ve.init(this.clippingPlanes,xe),v=j.get(T,w.length),v.init(),w.push(v),pe.enabled===!0&&pe.isPresenting===!0){const fe=_.xr.getDepthSensingMesh();fe!==null&&hc(fe,z,-1/0,_.sortObjects)}hc(T,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Z,re),Me=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Me&&Oe.addToRenderList(v,T),this.info.render.frame++,$===!0&&ve.beginShadows();const W=m.state.shadowsArray;Ne.render(W,T,z),$===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,H=v.transmissive;if(m.setupLights(),z.isArrayCamera){const fe=z.cameras;if(H.length>0)for(let Te=0,ke=fe.length;Te<ke;Te++){const Ie=fe[Te];Wu(q,H,T,Ie)}Me&&Oe.render(T);for(let Te=0,ke=fe.length;Te<ke;Te++){const Ie=fe[Te];Gu(v,T,Ie,Ie.viewport)}}else H.length>0&&Wu(q,H,T,z),Me&&Oe.render(T),Gu(v,T,z);I!==null&&R===0&&(ye.updateMultisampleRenderTarget(I),ye.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(_,T,z),Se.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(m=b[b.length-1],$===!0&&ve.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function hc(T,z,W,q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||je.intersectsSprite(T)){q&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const Te=V.update(T),ke=T.material;ke.visible&&v.push(T,Te,ke,W,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||je.intersectsObject(T))){const Te=V.update(T),ke=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ue.copy(Te.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(ke)){const Ie=Te.groups;for(let Ke=0,et=Ie.length;Ke<et;Ke++){const We=Ie[Ke],pt=ke[We.materialIndex];pt&&pt.visible&&v.push(T,Te,pt,W,Ue.z,We)}}else ke.visible&&v.push(T,Te,ke,W,Ue.z,null)}}const fe=T.children;for(let Te=0,ke=fe.length;Te<ke;Te++)hc(fe[Te],z,W,q)}function Gu(T,z,W,q){const H=T.opaque,fe=T.transmissive,Te=T.transparent;m.setupLightsView(W),$===!0&&ve.setGlobalState(_.clippingPlanes,W),q&&ee.viewport(E.copy(q)),H.length>0&&ko(H,z,W),fe.length>0&&ko(fe,z,W),Te.length>0&&ko(Te,z,W),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Wu(T,z,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Vi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?_o:vi,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const fe=m.state.transmissionRenderTarget[q.id],Te=q.viewport||E;fe.setSize(Te.z*_.transmissionResolutionScale,Te.w*_.transmissionResolutionScale);const ke=_.getRenderTarget(),Ie=_.getActiveCubeFace(),Ke=_.getActiveMipmapLevel();_.setRenderTarget(fe),_.getClearColor(P),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Me&&Oe.render(W);const et=_.toneMapping;_.toneMapping=sr;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),$===!0&&ve.setGlobalState(_.clippingPlanes,q),ko(T,W,q),ye.updateMultisampleRenderTarget(fe),ye.updateRenderTargetMipmap(fe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let St=0,Vt=z.length;St<Vt;St++){const It=z[St],At=It.object,Xe=It.geometry,Nt=It.material,vt=It.group;if(Nt.side===un&&At.layers.test(q.layers)){const Cn=Nt.side;Nt.side=yn,Nt.needsUpdate=!0,$u(At,W,q,Xe,Nt,vt),Nt.side=Cn,Nt.needsUpdate=!0,pt=!0}}pt===!0&&(ye.updateMultisampleRenderTarget(fe),ye.updateRenderTargetMipmap(fe))}_.setRenderTarget(ke,Ie,Ke),_.setClearColor(P,G),We!==void 0&&(q.viewport=We),_.toneMapping=et}function ko(T,z,W){const q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,fe=T.length;H<fe;H++){const Te=T[H],ke=Te.object,Ie=Te.geometry,Ke=Te.group;let et=Te.material;et.allowOverride===!0&&q!==null&&(et=q),ke.layers.test(W.layers)&&$u(ke,z,W,Ie,et,Ke)}}function $u(T,z,W,q,H,fe){T.onBeforeRender(_,z,W,q,H,fe),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,z,W,q,T,fe),H.transparent===!0&&H.side===un&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,_.renderBufferDirect(W,z,q,H,T,fe),H.side=ar,H.needsUpdate=!0,_.renderBufferDirect(W,z,q,H,T,fe),H.side=un):_.renderBufferDirect(W,z,q,H,T,fe),T.onAfterRender(_,z,W,q,H,fe)}function No(T,z,W){z.isScene!==!0&&(z=Q);const q=ce.get(T),H=m.state.lights,fe=m.state.shadowsArray,Te=H.state.version,ke=X.getParameters(T,H.state,fe,z,W),Ie=X.getProgramCacheKey(ke);let Ke=q.programs;q.environment=T.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(T.isMeshStandardMaterial?nt:rt).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",ie),Ke=new Map,q.programs=Ke);let et=Ke.get(Ie);if(et!==void 0){if(q.currentProgram===et&&q.lightsStateVersion===Te)return Xu(T,ke),et}else ke.uniforms=X.getUniforms(T),T.onBeforeCompile(ke,_),et=X.acquireProgram(ke,Ie),Ke.set(Ie,et),q.uniforms=ke.uniforms;const We=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=ve.uniform),Xu(T,ke),q.needsLights=_p(T),q.lightsStateVersion=Te,q.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=et,q.uniformsList=null,et}function qu(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=xa.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Xu(T,z){const W=ce.get(T);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function vp(T,z,W,q,H){z.isScene!==!0&&(z=Q),ye.resetTextureUnits();const fe=z.fog,Te=q.isMeshStandardMaterial?z.environment:null,ke=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:gs,Ie=(q.isMeshStandardMaterial?nt:rt).get(q.envMap||Te),Ke=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,et=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),We=!!W.morphAttributes.position,pt=!!W.morphAttributes.normal,St=!!W.morphAttributes.color;let Vt=sr;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Vt=_.toneMapping);const It=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,At=It!==void 0?It.length:0,Xe=ce.get(q),Nt=m.state.lights;if($===!0&&(xe===!0||T!==y)){const mn=T===y&&q.id===M;ve.setState(q,T,mn)}let vt=!1;q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Nt.state.version||Xe.outputColorSpace!==ke||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isBatchedMesh&&Xe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Xe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Xe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Xe.instancingMorph===!1&&H.morphTexture!==null||Xe.envMap!==Ie||q.fog===!0&&Xe.fog!==fe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ve.numPlanes||Xe.numIntersection!==ve.numIntersection)||Xe.vertexAlphas!==Ke||Xe.vertexTangents!==et||Xe.morphTargets!==We||Xe.morphNormals!==pt||Xe.morphColors!==St||Xe.toneMapping!==Vt||Xe.morphTargetsCount!==At)&&(vt=!0):(vt=!0,Xe.__version=q.version);let Cn=Xe.currentProgram;vt===!0&&(Cn=No(q,z,H));let zr=!1,Rn=!1,Ds=!1;const Ot=Cn.getUniforms(),zn=Xe.uniforms;if(ee.useProgram(Cn.program)&&(zr=!0,Rn=!0,Ds=!0),q.id!==M&&(M=q.id,Rn=!0),zr||y!==T){ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(k,"projectionMatrix",T.projectionMatrix),Ot.setValue(k,"viewMatrix",T.matrixWorldInverse);const Sn=Ot.map.cameraPosition;Sn!==void 0&&Sn.setValue(k,He.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Rn=!0,Ds=!0)}if(H.isSkinnedMesh){Ot.setOptional(k,H,"bindMatrix"),Ot.setOptional(k,H,"bindMatrixInverse");const mn=H.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ot.setValue(k,"boneTexture",mn.boneTexture,ye))}H.isBatchedMesh&&(Ot.setOptional(k,H,"batchingTexture"),Ot.setValue(k,"batchingTexture",H._matricesTexture,ye),Ot.setOptional(k,H,"batchingIdTexture"),Ot.setValue(k,"batchingIdTexture",H._indirectTexture,ye),Ot.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&Ot.setValue(k,"batchingColorTexture",H._colorsTexture,ye));const Hn=W.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ue.update(H,W,Cn),(Rn||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,Ot.setValue(k,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(zn.envMap.value=Ie,zn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(zn.envMapIntensity.value=z.environmentIntensity),Rn&&(Ot.setValue(k,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&xp(zn,Ds),fe&&q.fog===!0&&ae.refreshFogUniforms(zn,fe),ae.refreshMaterialUniforms(zn,q,B,J,m.state.transmissionRenderTarget[T.id]),xa.upload(k,qu(Xe),zn,ye)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(xa.upload(k,qu(Xe),zn,ye),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ot.setValue(k,"center",H.center),Ot.setValue(k,"modelViewMatrix",H.modelViewMatrix),Ot.setValue(k,"normalMatrix",H.normalMatrix),Ot.setValue(k,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const mn=q.uniformsGroups;for(let Sn=0,fc=mn.length;Sn<fc;Sn++){const fr=mn[Sn];at.update(fr,Cn),at.bind(fr,Cn)}}return Cn}function xp(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function _p(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,z,W){const q=ce.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ce.get(T.texture).__webglTexture=z,ce.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const W=ce.get(T);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const yp=k.createFramebuffer();this.setRenderTarget=function(T,z=0,W=0){I=T,C=z,R=W;let q=!0,H=null,fe=!1,Te=!1;if(T){const Ie=ce.get(T);if(Ie.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Ie.__webglFramebuffer===void 0)ye.setupRenderTarget(T);else if(Ie.__hasExternalTextures)ye.rebindTextures(T,ce.get(T.texture).__webglTexture,ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const We=T.depthTexture;if(Ie.__boundDepthTexture!==We){if(We!==null&&ce.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(T)}}const Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Te=!0);const et=ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(et[z])?H=et[z][W]:H=et[z],fe=!0):T.samples>0&&ye.useMultisampledRTT(T)===!1?H=ce.get(T).__webglMultisampledFramebuffer:Array.isArray(et)?H=et[W]:H=et,E.copy(T.viewport),N.copy(T.scissor),U=T.scissorTest}else E.copy(me).multiplyScalar(B).floor(),N.copy(oe).multiplyScalar(B).floor(),U=ze;if(W!==0&&(H=yp),ee.bindFramebuffer(k.FRAMEBUFFER,H)&&q&&ee.drawBuffers(T,H),ee.viewport(E),ee.scissor(N),ee.setScissorTest(U),fe){const Ie=ce.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,W)}else if(Te){const Ie=z;for(let Ke=0;Ke<T.textures.length;Ke++){const et=ce.get(T.textures[Ke]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ke,et.__webglTexture,W,Ie)}}else if(T!==null&&W!==0){const Ie=ce.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(T,z,W,q,H,fe,Te,ke=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){ee.bindFramebuffer(k.FRAMEBUFFER,Ie);try{const Ke=T.textures[ke],et=Ke.format,We=Ke.type;if(!se.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-q&&W>=0&&W<=T.height-H&&(T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ke),k.readPixels(z,W,q,H,Ve.convert(et),Ve.convert(We),fe))}finally{const Ke=I!==null?ce.get(I).__webglFramebuffer:null;ee.bindFramebuffer(k.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(T,z,W,q,H,fe,Te,ke=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie)if(z>=0&&z<=T.width-q&&W>=0&&W<=T.height-H){ee.bindFramebuffer(k.FRAMEBUFFER,Ie);const Ke=T.textures[ke],et=Ke.format,We=Ke.type;if(!se.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ke),k.readPixels(z,W,q,H,Ve.convert(et),Ve.convert(We),0);const St=I!==null?ce.get(I).__webglFramebuffer:null;ee.bindFramebuffer(k.FRAMEBUFFER,St);const Vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Em(k,Vt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.deleteBuffer(pt),k.deleteSync(Vt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,W=0){const q=Math.pow(2,-W),H=Math.floor(T.image.width*q),fe=Math.floor(T.image.height*q),Te=z!==null?z.x:0,ke=z!==null?z.y:0;ye.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,Te,ke,H,fe),ee.unbindTexture()};const bp=k.createFramebuffer(),wp=k.createFramebuffer();this.copyTextureToTexture=function(T,z,W=null,q=null,H=0,fe=null){fe===null&&(H!==0?(us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=H,H=0):fe=0);let Te,ke,Ie,Ke,et,We,pt,St,Vt;const It=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(W!==null)Te=W.max.x-W.min.x,ke=W.max.y-W.min.y,Ie=W.isBox3?W.max.z-W.min.z:1,Ke=W.min.x,et=W.min.y,We=W.isBox3?W.min.z:0;else{const Hn=Math.pow(2,-H);Te=Math.floor(It.width*Hn),ke=Math.floor(It.height*Hn),T.isDataArrayTexture?Ie=It.depth:T.isData3DTexture?Ie=Math.floor(It.depth*Hn):Ie=1,Ke=0,et=0,We=0}q!==null?(pt=q.x,St=q.y,Vt=q.z):(pt=0,St=0,Vt=0);const At=Ve.convert(z.format),Xe=Ve.convert(z.type);let Nt;z.isData3DTexture?(ye.setTexture3D(z,0),Nt=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ye.setTexture2DArray(z,0),Nt=k.TEXTURE_2D_ARRAY):(ye.setTexture2D(z,0),Nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const vt=k.getParameter(k.UNPACK_ROW_LENGTH),Cn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zr=k.getParameter(k.UNPACK_SKIP_PIXELS),Rn=k.getParameter(k.UNPACK_SKIP_ROWS),Ds=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,It.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,It.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ke),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,We);const Ot=T.isDataArrayTexture||T.isData3DTexture,zn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Hn=ce.get(T),mn=ce.get(z),Sn=ce.get(Hn.__renderTarget),fc=ce.get(mn.__renderTarget);ee.bindFramebuffer(k.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,fc.__webglFramebuffer);for(let fr=0;fr<Ie;fr++)Ot&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ce.get(T).__webglTexture,H,We+fr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ce.get(z).__webglTexture,fe,Vt+fr)),k.blitFramebuffer(Ke,et,Te,ke,pt,St,Te,ke,k.DEPTH_BUFFER_BIT,k.NEAREST);ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||ce.has(T)){const Hn=ce.get(T),mn=ce.get(z);ee.bindFramebuffer(k.READ_FRAMEBUFFER,bp),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,wp);for(let Sn=0;Sn<Ie;Sn++)Ot?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Hn.__webglTexture,H,We+Sn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Hn.__webglTexture,H),zn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,mn.__webglTexture,fe,Vt+Sn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,mn.__webglTexture,fe),H!==0?k.blitFramebuffer(Ke,et,Te,ke,pt,St,Te,ke,k.COLOR_BUFFER_BIT,k.NEAREST):zn?k.copyTexSubImage3D(Nt,fe,pt,St,Vt+Sn,Ke,et,Te,ke):k.copyTexSubImage2D(Nt,fe,pt,St,Ke,et,Te,ke);ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else zn?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Nt,fe,pt,St,Vt,Te,ke,Ie,At,Xe,It.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,fe,pt,St,Vt,Te,ke,Ie,At,It.data):k.texSubImage3D(Nt,fe,pt,St,Vt,Te,ke,Ie,At,Xe,It):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,fe,pt,St,Te,ke,At,Xe,It.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,fe,pt,St,It.width,It.height,At,It.data):k.texSubImage2D(k.TEXTURE_2D,fe,pt,St,Te,ke,At,Xe,It);k.pixelStorei(k.UNPACK_ROW_LENGTH,vt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Cn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zr),k.pixelStorei(k.UNPACK_SKIP_ROWS,Rn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ds),fe===0&&z.generateMipmaps&&k.generateMipmap(Nt),ee.unbindTexture()},this.copyTextureToTexture3D=function(T,z,W=null,q=null,H=0){return us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,W,q,H)},this.initRenderTarget=function(T){ce.get(T).__webglFramebuffer===void 0&&ye.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ye.setTextureCube(T,0):T.isData3DTexture?ye.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ye.setTexture2DArray(T,0):ye.setTexture2D(T,0),ee.unbindTexture()},this.resetState=function(){C=0,R=0,I=null,ee.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}function wy(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new jt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0;const d=[];for(let h=0;h<n.length;++h){const p=n[h].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=n[h].attributes.position.count}c.setIndex(d)}for(const u in s){const d=rh(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][h]);const g=rh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function rh(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new kn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<t;g++){const x=u.getComponent(h,g);a.setComponent(h+d,g,x)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Ja(n,e=0){const t=new Re,i=Object.fromEntries(Object.entries({skin:n.skin,hair:n.hair,shirt:n.color,pants:e%2?"#384b58":"#405646",boots:"#3f3431",white:"#fff6e6",eye:"#17222a",leather:"#965e48",straw:"#e7cb82"}).map(([p,g])=>[p,new Xn({color:g})])),r=new wn(1,16,12),s=new Lt(1,1,1);function o(p,g,x,v,m){const w=new ne(g==="box"?s:r,i[x]);return w.scale.set(...v),w.position.set(...m),w.castShadow=!0,p.add(w),w}const a=new Re;t.add(a),o(a,"sphere","shirt",[.34,.43,.24],[0,1.03,0]),o(a,"box","pants",[.48,.23,.33],[0,.66,0]),o(a,"sphere","skin",[.115,.17,.115],[0,1.39,0]);const c=new Re;c.position.y=1.65,a.add(c),o(c,"sphere","skin",[.31,.33,.28],[0,0,0]);for(const p of[-1,1]){o(c,"sphere","skin",[.064,.1,.052],[p*.3,-.01,0]),o(c,"sphere","white",[.079,.092,.035],[p*.115,.035,.253]),o(c,"sphere","eye",[.036,.052,.019],[p*.106,.025,.286]),o(c,"sphere","white",[.014,.018,.008],[p*.106-.01,.044,.305]);const g=o(c,"sphere","hair",[.081,.018,.019],[p*.116,.145,.25]);g.rotation.z=p*-.1;const x=o(a,"box","white",[.13,.07,.08],[p*.095,1.35,.18]);x.rotation.z=p*.35}o(c,"sphere","skin",[.057,.065,.065],[0,-.04,.282]);const l=new vu([new D(-.085,-.13,.25),new D(0,-.162,.264),new D(.085,-.13,.25)]);c.add(new ne(new Ya(l,8,.012,5,!1),i.eye)),o(c,"sphere","hair",[.32,.15,.28],[0,.23,-.028]);const u=o(c,"sphere","hair",[.19,.065,.06],[-.11,.18,.235]);if(u.rotation.z=-.2,n.accessory==="bun"&&(o(c,"sphere","hair",[.23,.23,.17],[0,.03,-.2]),o(c,"sphere","hair",[.17,.17,.17],[.18,.3,-.15])),n.accessory==="curls")for(let p=0;p<8;p++){const g=p*Math.PI/4;o(c,"sphere","hair",[.12,.13,.12],[Math.cos(g)*.26,.17+Math.sin(g)*.1,-.06+Math.sin(g)*.15])}if(n.accessory==="glasses"){for(const p of[-1,1]){const g=new ne(new rn(.092,.013,6,16),i.eye);g.position.set(p*.115,.035,.295),c.add(g)}o(c,"box","eye",[.065,.018,.025],[0,.045,.29])}if(["sunhat","cap"].includes(n.accessory)){const p=n.accessory==="sunhat"?i.straw:i.shirt,g=new ne(new it(.4,.4,.035,24),p);g.position.set(0,.285,.04),c.add(g);const x=new ne(new it(.235,.27,.18,20),p);x.position.y=.39,c.add(x);const v=new ne(new it(.264,.272,.05,20),i.leather);v.position.y=.32,c.add(v)}for(let p=0;p<3;p++)o(a,"sphere","white",[.019,.019,.014],[0,1.2-p*.12,.24]);const d=[],h=[];for(const p of[-1,1]){const g=new Re;g.position.set(p*.32,1.24,0),a.add(g),o(g,"sphere","shirt",[.12,.19,.125],[p*.03,-.1,0]),o(g,"sphere","skin",[.076,.2,.076],[p*.04,-.34,.02]),o(g,"sphere","skin",[.09,.095,.08],[p*.04,-.52,.025]),o(g,"sphere","skin",[.035,.055,.035],[p*-.02,-.5,.075]),g.rotation.z=p*.06,d.push(g);const x=new Re;x.position.set(p*.15,.64,0),t.add(x),o(x,"sphere","pants",[.12,.25,.12],[0,-.21,0]),o(x,"sphere","boots",[.14,.1,.21],[0,-.52,.07]),o(x,"box","boots",[.25,.035,.34],[0,-.59,.055]),h.push(x)}if(["bun","glasses"].includes(n.accessory)){const p=o(a,"box","leather",[.07,.77,.045],[.03,1.05,.245]);p.rotation.z=-.65,o(a,"box","leather",[.25,.29,.15],[.3,.73,.13]),o(a,"box","straw",[.07,.045,.018],[.3,.76,.215])}return t.userData.rig={body:a,head:c,arms:d,legs:h},Tt(t),t}function Tt(n){const e=new Set;n.traverse(t=>{if(!t.isGroup)return;const i=new Map;t.children.filter(r=>r.isMesh).forEach(r=>{i.has(r.material)||i.set(r.material,[]),i.get(r.material).push(r)});for(const[r,s]of i){const o=s.map(d=>(d.updateMatrix(),d.geometry.clone().applyMatrix4(d.matrix))),a=o.some(d=>!d.index),c=o.map(d=>a&&d.index?d.toNonIndexed():d),l=wy(c);if(new Set([...o,...c]).forEach(d=>d.dispose()),!l)continue;s.forEach(d=>{t.remove(d),e.add(d.geometry)});const u=new ne(l,r);u.castShadow=!0,u.receiveShadow=!0,t.add(u)}}),e.forEach(t=>t.dispose())}function My(n,e,t){const i=-n/2,r=-e/2,s=new Pr;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s}function of(n=!1){const e=new Re;e.name="Pip 3D character";const t=new Re;e.add(t);const i=Q=>new Xn({color:Q}),r={green:i(8435256),darkGreen:i(2706464),leaf:i(10082368),seam:i(3430947),shirt:i(8632381),trim:i(11786593),hat:i(14660444),weave:i(12225340),leather:i(11039543),leatherDark:i(7358501),metal:i(12898502),orange:i(15439412),cream:new Ft({color:16774620}),visor:new Ft({color:2702392}),black:new Ft({color:859160}),white:new Ft({color:16776432}),tongue:new Ft({color:15173186})},s=(Q,Me,Le,k=[0,0,0])=>{const K=new ne(Me,Le);return K.position.set(...k),K.castShadow=!0,Q.add(K),K},o=(Q,Me,Le,k)=>{const K=s(Q,new wn(1,16,12),Me,k);return K.scale.set(...Le),K},a=(Q,Me,Le,k,K=.09,Y=.018)=>{const se=new co(My(Le[0],Le[1],K),{depth:Le[2],bevelEnabled:!0,bevelSize:Y,bevelThickness:Y,bevelSegments:Y>.02?4:2,steps:1,curveSegments:6});return se.translate(0,0,-Le[2]/2),s(Q,se,Me,k)},c=(Q,Me,Le,k,K,Y)=>s(Q,new it(Le,k,K,20),Me,Y),l=(Q,Me,Le,k=.01)=>s(Q,new Ya(new vu(Le.map(K=>new D(...K))),8,k,5,!1),Me),u=(Q,Me,Le=[0,0,0])=>{const k=new Re;return k.name=Me,k.position.set(...Le),Q.add(k),k},d=s(e,new Gi(.48,24),new Ft({color:1059099,transparent:!0,opacity:.25,depthWrite:!1}),[0,.025,0]);d.rotation.x=-Math.PI/2,d.castShadow=!1;const h=o(t,r.shirt,[.38,.37,.275],[0,.86,0]),p=c(t,r.darkGreen,.32,.3,.08,[0,.59,0]);p.scale.z=.81,c(t,r.darkGreen,.145,.17,.12,[0,1.16,0]);const g=u(t,"farmer growing suit");a(g,r.green,[.49,.39,.025],[0,.86,.263]);for(const Q of[-1,1])l(g,r.darkGreen,[[Q*.26,1.11,.12],[Q*.29,1.02,.19],[Q*.29,.75,.2]],.021);const x=u(t,"Pip back suit panel");a(x,r.shirt,[.43,.36,.035],[0,.88,-.26]);for(const Q of[-1,1])l(x,r.darkGreen,[[Q*.26,1.08,-.17],[Q*.26,.84,-.215],[Q*.18,.66,-.21]],.014);const v=u(t,"Pro Pip polo collar");for(const Q of[-1,1]){const Me=a(v,r.shirt,[.15,.12,.03],[Q*.1,1.11,.21],.02);Me.rotation.z=Q*.45,l(v,r.trim,[[Q*.045,1.16,.247],[Q*.115,1.065,.25],[Q*.18,1.12,.24]],.008)}const m=u(t,"HydroPip shirt emblem");for(const Q of[-1,1]){const Me=o(m,r.darkGreen,[.038,.088,.013],[Q*.053,.91,.307]);Me.rotation.z=Q*-.58}l(m,r.darkGreen,[[0,.9,.31],[0,.78,.31]],.012),o(m,r.darkGreen,[.08,.022,.012],[0,.77,.31]);const w=u(t,"Pro HydroPip chest logo",[.16,.91,.27]),b=document.createElement("canvas");b.width=256,b.height=128;const _=b.getContext("2d");_.fillStyle="#aad94c",_.beginPath(),_.ellipse(107,35,24,12,.7,0,Math.PI*2),_.ellipse(148,35,24,12,-.7,0,Math.PI*2),_.fill(),_.fillRect(124,35,7,33),_.fillStyle="#fff7df",_.font="bold 34px sans-serif",_.textAlign="center",_.fillText("HYDROPIP",128,108);const A=new fu(b);A.colorSpace=nn,s(w,new Nn(.29,.145),new Ft({map:A,transparent:!0,depthWrite:!1}));const C=u(t,"Pip head",[0,1.51,0]);C.rotation.x=-.1,a(C,r.darkGreen,[.93,.75,.34],[0,0,-.025],.23,.065),a(C,r.green,[.9,.72,.34],[0,.005,0],.22,.065);const R=a(C,r.cream,[.87,.71,.035],[0,-.015,.275],.23),I=a(C,r.black,[.76,.52,.02],[0,.047,.315],.17);a(C,r.visor,[.71,.475,.016],[0,.05,.345],.155);const M=[];for(const Q of[-1,1]){const Me=u(C,`${Q<0?"left":"right"} expressive eye`,[Q*.17,.054,.379]);o(Me,r.white,[.083,.112,.012],[0,0,0]),o(Me,r.black,[.062,.09,.012],[.004,-.004,.015]),o(Me,r.white,[.025,.032,.008],[.027,.046,.029]),M.push(Me)}const y=new Pr;y.moveTo(-.115,.036),y.quadraticCurveTo(0,.005,.115,.036),y.bezierCurveTo(.135,-.045,.065,-.116,0,-.115),y.bezierCurveTo(-.065,-.116,-.135,-.045,-.115,.036);const E=u(C,"Pip open smile",[0,-.178,.387]);s(E,new Xa(y,12),r.black),o(E,r.tongue,[.055,.025,.004],[0,-.077,.005]);const N=[];for(const Q of[-1,1]){const Me=u(C,"green ear piece",[Q*.51,-.012,-.005]);Me.rotation.z=Math.PI/2,c(Me,r.darkGreen,.174,.174,.09,[0,0,0]),c(Me,r.leaf,.145,.145,.115,[0,-Q*.025,0]),c(Me,r.green,.11,.11,.13,[0,-Q*.035,0]),N.push(Me)}const U=u(t,"Pip brimmed hat",[0,1.93,-.005]),P=c(U,r.hat,.63,.61,.06,[0,0,0]);P.scale.z=.83,c(U,r.hat,.32,.405,.26,[0,.145,-.025]),c(U,r.darkGreen,.39,.408,.059,[0,.06,-.025]);const G=u(U,"straw hat weave");for(const Q of[.44,.51,.58]){const Me=s(G,new rn(Q,.006,4,32),r.weave,[0,.034,0]);Me.rotation.x=Math.PI/2,Me.scale.y=.83}for(const Q of[.12,.18,.24]){const Me=s(G,new rn(.405-(Q-.015)*.327,.005,4,32),r.weave,[0,Q,-.025]);Me.rotation.x=Math.PI/2}const O=[],J=new Pr;J.moveTo(0,0),J.bezierCurveTo(.04,.23,.29,.34,.52,.26),J.bezierCurveTo(.45,.025,.18,-.1,0,0);for(const Q of[-1,1]){const Me=u(t,"veined leaf ear",[Q*.31,2.08,-.055]);Me.scale.x=Q,s(Me,new co(J,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:6}),r.leaf),l(Me,r.darkGreen,[[.015,.008,.05],[.21,.105,.05],[.46,.245,.05]],.012);for(const[Le,k]of[[.13,.066],[.26,.136]])l(Me,r.green,[[Le,k,.05],[Le+.012,k+.085,.05]],.006),l(Me,r.green,[[Le,k,.05],[Le+.105,k-.018,.05]],.006);O.push(Me)}const B=[],Z=[],re=[],me=[],oe=[],ze=[],je=[];for(const Q of[-1,1]){const Me=u(t,"Pip shoulder",[Q*.38,1.045,0]);Me.rotation.z=Q*.08,o(Me,r.darkGreen,[.132,.13,.13],[0,-.065,0]);const Le=s(Me,new ss(.117,.1,4,12),r.shirt,[0,-.105,0]);c(Me,r.trim,.119,.119,.03,[0,-.18,0]);const k=u(Me,"Pip elbow",[0,-.24,0]);o(k,r.darkGreen,[.085,.08,.085],[0,.005,0]),s(k,new ss(.089,.1,4,10),r.green,[0,-.105,0]),c(k,r.darkGreen,.088,.088,.035,[0,-.18,0]);const K=u(k,"Pip rounded glove",[0,-.235,.025]);o(K,r.green,[.104,.111,.094],[0,0,0]),o(K,r.leaf,[.041,.063,.047],[-Q*.078,.012,.06]);const Y=u(t,"Pip hip",[Q*.17,.52,0]);s(Y,new ss(.115,.1,4,10),r.green,[0,-.095,0]);const se=u(Y,"Pip knee",[0,-.22,0]);o(se,r.darkGreen,[.108,.075,.1],[0,0,0]),s(se,new ss(.1,.085,4,10),r.green,[0,-.072,0]);const ee=u(se,"Pip work boot",[0,-.19,0]);o(ee,r.darkGreen,[.15,.055,.207],[0,-.021,.061]),o(ee,r.green,[.139,.1,.189],[0,.025,.059]),o(ee,r.leaf,[.1,.038,.089],[0,.092,.104]),B.push(Me),re.push(k),oe.push(K),je.push(Le),Z.push(Y),me.push(se),ze.push(ee)}const $=u(t,"Pro Pip tool belt"),xe=c($,r.leatherDark,.357,.35,.1,[0,.62,0]);xe.scale.z=.83,a($,r.metal,[.115,.105,.025],[0,.62,.31],.025),a($,r.leather,[.074,.067,.028],[0,.62,.33],.01);for(const Q of[-1,1])a($,r.leatherDark,[.19,.23,.105],[Q*.255,.52,.245],.025),a($,r.leather,[.16,.17,.035],[Q*.255,.49,.307],.025),o($,r.metal,[.016,.016,.012],[Q*.255,.55,.33]);a($,r.metal,[.038,.24,.025],[.28,.73,.255],.01);const he=s($,new rn(.058,.018,6,16,Math.PI*1.55),r.metal,[.28,.855,.255]);he.rotation.z=Math.PI*.73,a($,r.orange,[.043,.14,.035],[-.27,.76,.24],.018),a($,r.metal,[.018,.085,.018],[-.27,.66,.24],.007),C.updateMatrixWorld(!0);const He=C.matrixWorld.clone().invert(),Ue=[];C.traverse(Q=>{Q.isMesh&&Ue.push(Q)});for(const Q of Ue){const Me=He.clone().multiply(Q.matrixWorld);C.add(Q),Me.decompose(Q.position,Q.quaternion,Q.scale)}return t.traverse(Q=>{if(!Q.geometry?.index)return;const Me=Q.geometry;Q.geometry=Me.toNonIndexed(),Me.dispose()}),Tt(t),e.userData.parts={body:t,torso:h,head:C,faceShell:R,visor:I,arms:B,legs:Z,elbows:re,knees:me,hands:oe,boots:ze,eyes:M,mouth:E,leafEars:O,headsetCups:N,belt:$,hat:U,farmerSuit:g,proCollar:v,proLogo:w,emblem:m,backPanel:x,strawWeave:G,materials:r,sleeves:je,waistBand:p,shadow:d},e.userData.actionId="pip",e.scale.setScalar(1.04),Sy(e,n),e}function Sy(n,e){const t=n.userData.parts;t.materials.shirt.color.setHex(e?2503212:8632381),t.materials.hat.color.setHex(e?2503212:14660444),t.farmerSuit.visible=!e,t.emblem.visible=!e,t.strawWeave.visible=!e,t.proCollar.visible=e,t.proLogo.visible=e,t.belt.visible=e,n.userData.pro=e}const sh=["post","produce","tractor","pond-birds","duck-crossing","cyclist","orchard","kite-walk","pond-splash","carrot-surprise","duck-driver","dance-break"];function Ey(n=Math.random){let e=null,t=0,i=8+n()*8,r=null;const s={post:26,produce:19,tractor:27,"pond-birds":22,"duck-crossing":30,cyclist:28,orchard:30,"kite-walk":32,"pond-splash":12,"carrot-surprise":26,"duck-driver":28,"dance-break":22};let o=[];const a=()=>({active:e,elapsed:t,wait:i,duration:s[e]||0});function c(l){return sh.includes(l)?(e=l,r=l,t=0,!0):!1}return{snapshot:a,start:c,update(l,{marketBuilt:u=!1,reducedMotion:d=!1}={}){if(d)return a();const h=Math.max(0,Math.min(.1,l));if(e)t+=h,t>=s[e]&&(e=null,t=0,i=14+n()*22);else if(i-=h,i<=0){o=o.filter(x=>x!=="produce"||u),o.length||(o=sh.filter(x=>x!=="produce"||u));const p=o.filter(x=>x!==r);if(!p.length)return o=[],a();const g=p[Math.min(p.length-1,Math.floor(n()*p.length))];o=o.filter(x=>x!==g),c(g)}return a()}}}function Ty(n,e,t,i){const r={};for(const[N,U,P]of[["cyclist","#eebc57","cap"],["orchard","#6fa5b0","sunhat"],["kite-walk","#d68192","bun"]]){const G=new Re;G.name=`neighbor ${N}`,G.visible=!1,n.add(G);const O=Ja({skin:"#dca87d",hair:"#493e38",color:U,accessory:P});O.name=`neighbor ${N} person`,G.add(O),r[N]={group:G,person:O,rig:O.userData.rig}}const s=r.cyclist;s.person.position.y=.22;const o=[];for(const N of[-.7,.7]){const U=new ne(new rn(.43,.055,6,18),e.dark);U.rotation.y=Math.PI/2,U.position.set(0,.45,N),s.group.add(U);for(let P=0;P<3;P++){const G=t(U,e.cream,[.025,.8,.025],[0,0,0]);G.rotation.z=P*Math.PI/3}o.push(U)}function a(N,U,P,G,O=.04){const J=new D(...U),B=new D(...P),Z=B.clone().sub(J),re=new ne(new it(O,O,Z.length(),6),G);return re.position.copy(J.add(B).multiplyScalar(.5)),re.quaternion.setFromUnitVectors(new D(0,1,0),Z.normalize()),N.add(re),re}const c=new Re;s.group.add(c);for(const[N,U]of[[[0,.45,-.7],[0,.9,-.2]],[[0,.9,-.2],[0,.45,0]],[[0,.45,0],[0,.45,-.7]],[[0,.45,0],[0,1,.62]],[[0,1,.62],[0,.9,-.2]],[[0,1,.62],[0,.45,.7]],[[0,1,.62],[0,1.3,.62]]])a(c,N,U,e.red);t(c,e.dark,[.42,.08,.3],[0,1,-.2]),t(c,e.dark,[.7,.05,.06],[0,1.3,.62]),t(c,e.wood,[.5,.3,.4],[0,1.12,.89]);for(const N of[-.12,.12])i(c,e.leaf,[.16,.17,.17],[N,1.3,.9]);Tt(c);const l=r.orchard,u=i(l.group,e.red,[.15,.16,.15],[0,2.7,.4]),d=new Re;l.group.add(d),t(d,e.wood,[.5,.28,.4],[.55,.32,.1]);for(let N=0;N<3;N++)i(d,e.red,[.11,.11,.11],[.42+N*.12,.49,.1]);Tt(d);const h=new Re;h.name="surprise giant carrot",l.group.add(h);const p=new Xn({color:15237173}),g=new ne(new wi(.31,1.7,12),p);g.rotation.z=Math.PI,g.position.y=-.85,h.add(g);for(let N=0;N<5;N++){const U=i(h,e.leaf,[.1,.42,.1],[Math.sin(N*2)*.17,.25,Math.cos(N*2)*.17]);U.rotation.z=Math.sin(N*2)*.55}for(let N=0;N<3;N++)t(h,e.cream,[.18-N*.04,.025,.02],[0,-.35-N*.35,.26-N*.06]);Tt(h);const x=r["kite-walk"],v=new Re;v.name="neighbor dance radio",x.group.add(v),t(v,e.red,[.75,.42,.24],[0,.21,0]),t(v,e.dark,[.44,.05,.06],[0,.49,0]);for(const N of[-.22,.22])i(v,e.dark,[.15,.15,.025],[N,.22,.13]),i(v,e.cream,[.055,.055,.028],[N,.22,.15]);t(v,e.gold,[.12,.055,.03],[0,.33,.14]),Tt(v);const m=new Re;m.name="neighbor kite",x.group.add(m);const w=new Pr;w.moveTo(0,.85),w.lineTo(.6,0),w.lineTo(0,-.95),w.lineTo(-.6,0),w.closePath();const b=new ne(new Xa(w),new Xn({color:15710278,side:un}));m.add(b),a(m,[0,.85,.015],[0,-.95,.015],e.cream,.018),a(m,[-.6,0,.015],[.6,0,.015],e.cream,.018);for(let N=0;N<4;N++){const U=t(m,e.red,[.28,.1,.03],[Math.sin(N)*.12,-1.12-N*.27,0]);U.rotation.z=N%2?.3:-.3}Tt(m);const _=new jt().setFromPoints([new D,new D]),A=new t0(_,new Bh({color:16116169}));A.frustumCulled=!1,x.group.add(A);const C=new Re;C.visible=!1,C.position.set(-20,.03,4.8),n.add(C);const R=new Re;C.add(R),i(R,e.gold,[.3,.12,.13],[0,0,0]);const I=t(R,e.red,[.13,.2,.03],[-.32,0,0]);I.rotation.z=.7;for(const N of[-.11,.11])i(R,e.dark,[.025,.025,.025],[.17,.045,N]);Tt(R);const M=[];for(let N=0;N<3;N++){const U=new ne(new wo(.94,1,32),new Ft({color:12970463,transparent:!0,opacity:.5,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.y=.015+N*.001,C.add(U),M.push(U)}const y=Dt.lerp,E=Dt.clamp;return function(U,P,G){for(const B of Object.values(r))B.group.visible=!1,B.group.rotation.set(0,0,0),B.person.position.set(0,B===s?.22:0,0),B.person.rotation.set(0,0,0),B.rig.body.position.y=0,B.rig.body.rotation.set(0,0,0),B.rig.head.rotation.set(0,0,0),B.rig.arms.forEach((Z,re)=>Z.rotation.set(0,0,re?.06:-.06)),B.rig.legs.forEach(Z=>Z.rotation.set(0,0,0));if(h.visible=!1,v.visible=!1,d.visible=!0,u.visible=!1,m.visible=U==="kite-walk",A.visible=m.visible,C.visible=!1,U==="pond-splash"){C.visible=!0;const B=E((P-3)/1.4,0,1);R.visible=P>=3&&P<4.4,R.position.set(y(-.7,.7,B),Math.sin(B*Math.PI)*1.2,.1),R.rotation.z=(.5-B)*1.5,M.forEach((Z,re)=>{const me=E((P-4-re*.45)/4,0,1);Z.visible=me>0&&me<1,Z.scale.setScalar(.15+me*1.8),Z.material.opacity=(1-me)*.6});return}const O=r[U==="carrot-surprise"?"orchard":U==="dance-break"?"kite-walk":U];if(!O)return;if(O.group.visible=!0,U==="carrot-surprise"){d.visible=!1,h.visible=!0;const B=E(P/6,0,1),Z=E((P-10)/1.2,0,1),re=E((P-14)/2,0,1);O.group.position.set(16.7,.03,P<6?y(7,-2.7,B):P<19?-2.7:y(-2.7,7,(P-19)/7)),O.group.rotation.y=P<6?Math.PI:P<19?Math.PI/4:0;const me=P>=6&&P<10,oe=P>=10&&P<16;O.rig.arms.forEach(ze=>{ze.rotation.x=P<6?Math.sin(P*4)*.2:-1.45}),O.rig.body.rotation.x=me?.25+Math.sin(P*9)*.05:0,O.person.rotation.x=oe?-.45*Math.sin(Z*Math.PI/2)*(1-re):0,O.person.position.z=oe?-.45*Z*(1-re):0,O.rig.head.rotation.z=P>=16&&P<19?Math.sin(P*5)*.13:0,O.rig.legs.forEach((ze,je)=>{ze.rotation.x=P<6||P>=19?Math.sin(P*4+je*Math.PI)*.3:oe?(je?-.45:.4)*(1-re):0}),h.position.set(0,P<10?.12:y(.12,1.85,Z),.65),h.rotation.set(P>=19?-.45:0,0,oe?Math.sin(Z*Math.PI)*.2:0),h.visible=P>=6;return}if(U==="dance-break"){const B=P>=6&&P<16,Z=Math.sin((P-6)*7);if(O.group.position.set(-16.4,.03,P<6?y(-8,2.8,P/6):P<16?2.8:y(2.8,9,(P-16)/6)),O.group.rotation.y=B?Math.PI/2:0,v.visible=!0,v.position.set(B?.8:.48,B?.02:.65,.25),B){const re=E((P-10)/1.6,0,1);O.person.rotation.y=re*Math.PI*2,O.person.position.x=Math.sin((P-6)*3.5)*.22,O.rig.body.position.y=-.08+Math.abs(Z)*.12,O.rig.arms.forEach((me,oe)=>{me.rotation.z=(oe?1:-1)*(1.05+Z*.35),me.rotation.x=Math.sin(P*3+oe)*.35}),O.rig.legs.forEach((me,oe)=>{me.rotation.x=Math.sin(P*7+oe*Math.PI)*.35,me.rotation.z=(oe?1:-1)*.14}),O.rig.head.rotation.z=Z*.14}else O.rig.legs.forEach((re,me)=>{re.rotation.x=Math.sin(P*4+me*Math.PI)*.3}),O.rig.arms[1].rotation.x=-.35;return}const J=U!=="orchard"||P<8||P>20;if(O.rig.legs.forEach((B,Z)=>{B.rotation.x=Math.sin(P*(U==="cyclist"?7:4)+Z*Math.PI)*(U==="cyclist"?.38:J?.3:0)}),O.rig.arms.forEach((B,Z)=>{B.rotation.x=U==="cyclist"?-1.05:Math.sin(P*4+Z*Math.PI)*(J?.22:0)}),O.rig.head.rotation.z=0,O.rig.body.position.y=J&&U!=="cyclist"?Math.abs(Math.sin(P*4))*.035:0,U==="cyclist")O.group.position.set(y(-34,34,P/G),.03,-10.1),O.group.rotation.y=Math.PI/2,o.forEach(B=>{B.rotation.z=-P*5}),P>12&&P<15?O.rig.arms[0].rotation.z=-1.8+Math.sin(P*7)*.12:O.rig.arms[0].rotation.z=-.06;else if(U==="orchard"){const B=P<8?y(8,-2.7,P/8):P<=20?-2.7:y(-2.7,8,(P-20)/10);O.group.position.set(19,.03,B),O.group.rotation.y=P<20?Math.PI:0,P>=8&&P<=20&&(O.rig.arms[0].rotation.x=-2.1,O.rig.head.rotation.z=P>13&&P<16?Math.sin(P*8)*.12:0),u.visible=P>11&&P<17;const Z=E((P-12)/1.4,0,1);u.position.set(.2,y(2.7,.48,Z)+Math.abs(Math.sin(Z*Math.PI*2))*.22,.4)}else{O.group.position.set(y(-12,7,P/G),.03,12.8),O.group.rotation.y=Math.PI/2,O.rig.arms[1].rotation.x=-1.3;const B=P>22&&P<26?Math.sin((P-22)/4*Math.PI):0;O.person.position.y=B*.55,O.person.rotation.x=-B*.25,B>0&&(O.rig.arms[0].rotation.z=-1.5*B,O.rig.legs.forEach((re,me)=>{re.rotation.x=B*(me?.65:-.65)})),m.position.set(1.1+Math.sin(P*.8)*.28,3.5+Math.sin(P)*.22+B*.8,1.4+B*.5),m.rotation.z=Math.sin(P*.8)*.18+B*.35;const Z=_.attributes.position;Z.setXYZ(0,.37,1.1+O.person.position.y,.5),Z.setXYZ(1,m.position.x,m.position.y,m.position.z),Z.needsUpdate=!0}}}function Ay(n,e,t,i,r){const s=(o,a)=>{for(let c=1;c<o.length;c++){const[l,u]=o[c-1],[d,h]=o[c],p=Math.hypot(d-l,h-u),g=t(n,e.cream,[a,.025,p+.1],[(l+d)/2,-.07,(u+h)/2]);g.rotation.y=Math.atan2(d-l,h-u)}};s([[-17,-9],[-16.6,-3],[-16.7,7.6],[-14,11.5],[-5,12.8],[7,12.8]],1.05),s([[16.6,-9],[17.3,-5],[17.7,1],[19,7]],.85);for(let o=0;o<28;o++){const a=o*Math.PI*2/28,c=1+Math.sin(o*2.7)*.035;i(n,o%3?e.stone:e.cream,[.28+o%3*.09,.12,.23],[-20+Math.cos(a)*3.4*c,.015,4.8+Math.sin(a)*2.55*c])}r([2.55,1.65,1],[-20.3,.014,4.55],e.blue);for(let o=0;o<4;o++){const a=-21.2+o*.66,c=5.2+Math.sin(o*2)*.6;r([.3,.24,1],[a,.034,c],e.leaf);for(let l=0;l<4;l++)i(n,e.white,[.09,.035,.05],[a+Math.cos(l*Math.PI/2)*.07,.08,c+Math.sin(l*Math.PI/2)*.07]);i(n,e.gold,[.035,.045,.035],[a,.09,c])}for(let o=0;o<8;o++)t(n,e.wood,[1.2,.12,.23],[-17.9,.16,4.1+o*.25]);for(const o of[4.05,5.9])for(const a of[-18.4,-17.4])t(n,e.dark,[.1,.65,.1],[a,.14,o]);for(let o=0;o<8;o++){const a=-12+o*3.5;if(t(n,e.wood,[.09,.8,.09],[a,.25,14.9]),o<7)for(const c of[.25,.55])t(n,e.cream,[3.5,.07,.07],[a+1.75,c,14.9]);for(let c=0;c<5;c++){const l=a+c*.32,u=14+Math.sin(c+o)*.22;i(n,e.grass,[.2,.14,.24],[l,.05,u]),i(n,o%2?e.white:e.red,[.1,.09,.1],[l,.22,u])}}for(const[o,a,c]of[[-9,-19,e.blue],[5,-20,e.red],[18,-19,e.gold]]){const l=new Re;l.position.set(o,0,a),n.add(l),t(l,e.stone,[3.9,.25,3.1],[0,.02,0]),t(l,e.cream,[3.5,2.35,2.8],[0,1.25,0]);for(const u of[-1,1]){const d=t(l,c,[2.2,.16,3.25],[u*.87,2.8,0]);d.rotation.z=-u*.48;for(let h=0;h<7;h++){const p=t(l,e.dark,[2.2,.025,.025],[u*.87,2.9,-1.5+h*.5]);p.rotation.z=-u*.48}t(l,e.wood,[.11,2.35,.11],[u*1.65,1.24,1.42]),t(l,e.wood,[.95,.9,.09],[u*.95,1.4,1.45]),t(l,e.blue,[.72,.69,.1],[u*.95,1.4,1.5]),t(l,e.white,[.05,.72,.12],[u*.95,1.4,1.52]),t(l,e.white,[.74,.045,.12],[u*.95,1.4,1.52]);for(const h of[-1,1])t(l,c,[.22,.91,.1],[u*.95+h*.59,1.4,1.46]);t(l,e.wood,[1,.21,.32],[u*.95,.91,1.57]);for(let h=0;h<4;h++)i(l,e.leaf,[.16,.16,.14],[u*.95-.32+h*.21,1.09,1.59]),i(l,e.gold,[.07,.065,.07],[u*.95-.32+h*.21,1.21,1.61])}t(l,e.dark,[.62,1.5,.08],[0,.9,1.44]),t(l,c,[.48,1.36,.1],[0,.88,1.49]),i(l,e.gold,[.035,.035,.035],[.17,.82,1.56]),t(l,e.stone,[1.05,.13,.6],[0,.1,1.7]),t(l,e.stone,[.42,1,.45],[1.05,3.02,-.65]),t(l,e.dark,[.53,.12,.56],[1.05,3.55,-.65]),s([[o,a+1.8],[o,-14.4]],.9)}}const Hs=new D;function Gn(n,e,t,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Hs.copy(e),Hs[i]=0,Hs.normalize();const l=.5*o/(o+a),u=1-Hs.angleTo(n)/c;return Math.sign(Hs[t])===1?u*l:a/(o+a)+l+l*(1-u)}class yu extends Lt{constructor(e=1,t=1,i=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new D,l=new D,u=new D(e,t,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,x=new D,v=.5/o;for(let m=0,w=0;m<d.length;m+=3,w+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),d[m+0]=u.x*Math.sign(c.x)+l.x*s,d[m+1]=u.y*Math.sign(c.y)+l.y*s,d[m+2]=u.z*Math.sign(c.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/g)){case 0:x.set(1,0,0),p[w+0]=Gn(x,l,"z","y",s,i),p[w+1]=1-Gn(x,l,"y","z",s,t);break;case 1:x.set(-1,0,0),p[w+0]=1-Gn(x,l,"z","y",s,i),p[w+1]=1-Gn(x,l,"y","z",s,t);break;case 2:x.set(0,1,0),p[w+0]=1-Gn(x,l,"x","z",s,e),p[w+1]=Gn(x,l,"z","x",s,i);break;case 3:x.set(0,-1,0),p[w+0]=1-Gn(x,l,"x","z",s,e),p[w+1]=1-Gn(x,l,"z","x",s,i);break;case 4:x.set(0,0,1),p[w+0]=1-Gn(x,l,"x","y",s,e),p[w+1]=1-Gn(x,l,"y","x",s,t);break;case 5:x.set(0,0,-1),p[w+0]=Gn(x,l,"x","y",s,e),p[w+1]=1-Gn(x,l,"y","x",s,t);break}}static fromJSON(e){return new yu(e.width,e.height,e.depth,e.segments,e.radius)}}function Cy(n){if(!["post","produce","car","tractor"].includes(n))throw new Error(`Unknown vehicle: ${n}`);const e=new Re;e.name=`neighborhood vehicle ${n}`,e.visible=!1;const t=new Re;t.name=`${n} body`,e.add(t);const r=Object.fromEntries(Object.entries({dark:2506299,rubber:3423290,tread:4870474,cream:15854294,glass:4355711,reflection:10998992,metal:10992051,blue:6465966,red:14251361,gold:15384911,green:7578464,wood:10187601,leaf:7645511,skin:14461053}).map(([m,w])=>[m,new Xn({color:w})])),s=r[{post:"blue",produce:"red",car:"gold",tractor:"green"}[n]];function o(m,w,b,_,A=0){const C=A?new yu(...b,2,Math.min(A,...b.map(I=>I*.45))):new Lt(...b),R=new ne(C,w);return R.position.set(..._),m.add(R),R}function a(m,w,b,_){const A=new ne(new wn(1,12,8),w);return A.scale.set(...b),A.position.set(..._),m.add(A),A}function c(m,w,b,_,A=.025){const C=new D(...b),R=new D(..._),I=R.clone().sub(C),M=new ne(new it(A,A,I.length(),6),w);M.position.copy(C.add(R).multiplyScalar(.5)),M.quaternion.setFromUnitVectors(new D(0,1,0),I.normalize()),m.add(M)}const l=[];function u(m,w,b,_=.23){const A=new Re;A.name="rolling wheel",A.position.set(m,b-.18,w),A.userData.radius=b,e.add(A);const C=new ne(new it(b,b,_,16),r.rubber);C.rotation.x=Math.PI/2,A.add(C);for(const R of[-1,1]){const I=new ne(new rn(b*.77,b*.15,6,16),r.rubber);I.position.z=R*_*.46,A.add(I);const M=new ne(new it(b*.49,b*.49,.035,12),r.cream);M.rotation.x=Math.PI/2,M.position.z=R*(_*.5+.018),A.add(M);const y=new ne(new it(b*.16,b*.16,.045,8),r.metal);y.rotation.x=Math.PI/2,y.position.z=R*(_*.5+.035),A.add(y);for(let E=0;E<4;E++)a(A,r.dark,[.025,.025,.014],[Math.cos(E*Math.PI/2)*b*.3,Math.sin(E*Math.PI/2)*b*.3,R*(_*.5+.04)])}if(n==="tractor")for(let R=0;R<12;R++){const I=R*Math.PI/6,M=o(A,r.tread,[b*.21,.05,_*.94],[Math.cos(I)*b,Math.sin(I)*b,0]);M.rotation.z=I-Math.PI/2}Tt(A),l.push(A)}function d(m,w,b,_,A){o(t,r.dark,[b+.06,_+.06,.045],[m,w,A],.04),o(t,r.glass,[b,_,.025],[m,w,A+Math.sign(A)*.03],.035);const C=o(t,r.reflection,[b*.42,.045,.014],[m-.06,w+_*.2,A+Math.sign(A)*.049]);C.rotation.z=.32}function h(m,w,b=1.48){o(t,s,[w,.69,1.3],[m,b-.34,0],.13);for(const _ of[-1,1])d(m+.025,b-.31,w-.23,.39,_*.655),o(t,r.cream,[.065,.43,.035],[m-.15,b-.31,_*.705]),o(t,r.metal,[.18,.05,.04],[m-.22,.78,_*.715],.015),o(t,r.dark,[.16,.08,.17],[m+w*.45,.97,_*.77],.025),o(t,s,[.2,.17,.09],[m+w*.45,1.03,_*.87],.025),o(t,r.reflection,[.15,.1,.02],[m+w*.45,1.03,_*.924],.012);o(t,r.dark,[.04,.44,1.1],[m+w*.5+.012,b-.3,0],.02),o(t,r.glass,[.025,.38,1.02],[m+w*.5+.037,b-.29,0],.015),o(t,r.reflection,[.014,.045,.6],[m+w*.5+.052,b-.17,-.12]),o(t,r.cream,[w+.12,.12,1.36],[m,b+.015,0],.045)}function p(m,w){o(t,r.dark,[.06,.28,.53],[m,.68,0],.035);for(const b of[.6,.67,.74])o(t,r.metal,[.075,.025,.44],[m+.025,b,0]);for(const b of[-1,1])a(t,r.dark,[.055,.15,.16],[m,.73,b*.47]),a(t,r.cream,[.065,.11,.12],[m+.02,.73,b*.47]),o(t,r.red,[.06,.15,.16],[w,.69,b*.51],.025),o(t,r.gold,[.055,.07,.1],[m+.015,.51,b*.49],.012);o(t,r.metal,[.14,.14,1.37],[m,.4,0],.04),o(t,r.metal,[.13,.12,1.29],[w,.4,0],.035),o(t,r.cream,[.05,.12,.29],[w-.065,.55,0],.015)}let g=0,x=null;if(n!=="tractor"){o(t,r.dark,[2.7,.18,1.12],[0,.35,0],.04),o(t,s,[3,.52,1.42],[0,.63,0],.14);for(const m of[-.94,.96])for(const w of[-1,1])u(m,w*.7,.35),o(t,s,[.85,.11,.16],[m,.64,w*.73],.05);if(p(1.51,-1.51),n==="post"){o(t,s,[1.53,1,1.4],[-.69,1.05,0],.14),o(t,r.cream,[1.65,.14,1.44],[-.69,1.57,0],.06),h(.55,.98,1.5),g=1.64;for(const m of[-1,1]){const w=m*.718;o(t,r.cream,[1.37,.14,.025],[-.69,.65,w]),o(t,r.cream,[.76,.43,.035],[-.7,1.13,w],.045),c(t,r.blue,[-1.03,1.29,w+m*.03],[-.7,1.08,w+m*.03],.014),c(t,r.blue,[-.7,1.08,w+m*.03],[-.37,1.29,w+m*.03],.014),o(t,r.red,[.12,.09,.025],[-.43,1.24,w+m*.035])}o(t,r.cream,[.035,.73,1.18],[-1.47,1.12,0],.035),o(t,r.dark,[.04,.7,.035],[-1.5,1.12,0]);for(const m of[-.13,.13])o(t,r.metal,[.05,.14,.04],[-1.53,1.02,m])}else if(n==="produce"){h(.48,1.07,1.5),g=1.575,o(t,r.dark,[1.32,.1,1.08],[-.79,.94,0]);for(const w of[-1,1]){for(const _ of[1.04,1.26])o(t,r.wood,[1.38,.13,.065],[-.78,_,w*.65]);for(const _ of[-1.39,-.17])o(t,r.cream,[.065,.5,.08],[_,1.12,w*.65]);a(t,r.cream,[.2,.17,.025],[.38,.72,w*.723]);const b=a(t,r.leaf,[.1,.055,.03],[.38,.72,w*.749]);b.rotation.z=.5}const m=new Re;t.add(m);for(const w of[-1.13,-.51]){o(m,r.wood,[.54,.3,.92],[w,1.08,0]);for(const b of[-.47,.47])for(const _ of[1.03,1.16])o(m,r.cream,[.56,.035,.025],[w,_,b]);for(let b=0;b<5;b++)a(m,w<-1?r.leaf:r.red,[.14,.15,.14],[w+(b%2-.5)*.22,1.29+(b===4?.13:0),-.25+Math.floor(b/2)*.22])}}else{h(-.22,1.6,1.46),g=1.535,o(t,r.cream,[.72,.06,1.2],[1.03,.91,0],.025),o(t,r.glass,[.025,.34,.95],[-1.035,1.15,0],.012);for(const m of[-.45,.45])o(t,r.metal,[1.1,.035,.035],[-.25,1.56,m])}}else{o(t,r.dark,[2.1,.18,.73],[.04,.36,0],.05),o(t,s,[1.4,.65,.87],[.49,.81,0],.12),o(t,r.cream,[1.22,.06,.78],[.53,1.15,0],.025),o(t,r.dark,[.075,.45,.66],[1.21,.85,0],.035);for(let _=0;_<6;_++)o(t,r.metal,[.09,.34,.025],[1.235,.85,-.25+_*.1]);for(const _ of[-1,1])u(-.69,_*.69,.55,.3),u(.9,_*.56,.33,.22),o(t,s,[1.06,.13,.46],[-.69,1.02,_*.65],.05),o(t,r.dark,[.43,.08,.32],[-.33,.45,_*.55]),a(t,r.cream,[.085,.11,.11],[1.16,1.08,_*.36]),c(t,r.dark,[-.96,.64,_*.41],[-.96,1.99,_*.41],.035);o(t,s,[1.32,.13,1.2],[-.61,2.02,0],.06),g=2.085,o(t,r.dark,[.13,.86,.13],[.62,1.57,-.28],.025),o(t,r.metal,[.2,.05,.19],[.62,2.02,-.28],.015),o(t,r.wood,[.48,.15,.48],[-.67,.91,0],.05),o(t,r.wood,[.12,.42,.48],[-.9,1.08,0],.05),a(t,r.red,[.18,.23,.22],[-.61,1.19,0]),a(t,r.skin,[.2,.23,.2],[-.58,1.55,0]),a(t,r.skin,[.065,.07,.055],[-.38,1.51,0]);for(const _ of[-1,1])a(t,r.cream,[.025,.047,.045],[-.407,1.6,_*.09]),a(t,r.dark,[.014,.028,.021],[-.384,1.6,_*.09]),c(t,r.red,[-.54,1.28,_*.2],[-.22,1.1,_*.17],.067),a(t,r.skin,[.058,.058,.058],[-.18,1.1,_*.17]),c(t,r.dark,[-.62,.98,_*.13],[-.34,.71,_*.13],.075),o(t,r.dark,[.28,.12,.17],[-.23,.66,_*.13],.04);const m=new ne(new it(.3,.3,.035,16),r.gold);m.position.set(-.58,1.75,0),t.add(m);const w=new ne(new it(.18,.22,.15,12),r.gold);w.position.set(-.58,1.83,0),t.add(w),c(t,r.dark,[-.05,.61,0],[-.15,1.15,0],.035);const b=new ne(new rn(.17,.023,6,16),r.dark);b.rotation.y=Math.PI/2,b.position.set(-.15,1.15,0),t.add(b),c(t,r.dark,[-1,.3,0],[-2.1,.3,0],.055),o(t,r.wood,[1.78,.17,1.25],[-2.63,.4,0]);for(const _ of[-1,1]){u(-2.66,_*.64,.29,.18);for(const A of[-3.43,-1.84])o(t,r.dark,[.065,.59,.065],[A,.66,_*.63]);for(const A of[.59,.82])o(t,r.wood,[1.8,.12,.06],[-2.63,A,_*.64])}x=new Re,x.name="tractor hay load",x.position.set(-2.63,.53,0),e.add(x);for(let _=0;_<3;_++){const A=_===2?0:_?.4:-.4,C=_===2?.68:.22;o(x,r.gold,[.75,.44,.92],[A,C,0],.065);for(const R of[-.2,.2])o(x,r.wood,[.032,.445,.925],[A+R,C,0],.01)}Tt(x)}t.updateMatrixWorld(!0);const v=[];t.traverse(m=>{m.isMesh&&v.push(m)});for(const m of v)t.attach(m);return t.children.filter(m=>m.isGroup).forEach(m=>t.remove(m)),Tt(t),e.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),{group:e,body:t,wheels:l,hay:x,roofHeight:g}}function Ry(n,e,t,i=!1){n.wheels.forEach(r=>{r.rotation.z=-e/r.userData.radius}),n.body.position.y=i?0:Math.sin(t*5)*.009,n.hay&&(n.hay.position.y=.53+(i?0:Math.sin(t*2.6)*.02),n.hay.rotation.x=i?0:Math.sin(t*2.6)*.015)}function Py(){const n=new Re;n.name="living neighborhood";const e=new Re,t=new Re;n.add(e,t);const r=Object.fromEntries(Object.entries({wood:8808268,dark:3427653,stone:10070429,grass:7443032,leaf:4489565,cream:15919049,white:15463391,water:6469573,red:13921888,gold:15713102,blue:6530482}).map(([y,E])=>[y,new Xn({color:E})])),s=(y,E,N,U)=>{const P=new ne(new Lt(...N),E);return P.position.set(...U),y.add(P),P},o=(y,E,N,U)=>{const P=new ne(new bo(1,1),E);return P.scale.set(...N),P.position.set(...U),y.add(P),P},a=(y,E,N)=>{const U=new ne(new Gi(1,40),N);return U.rotation.x=-Math.PI/2,U.scale.set(...y),U.position.set(...E),e.add(U),U};a([3.5,2.6,1],[-20,-.02,4.8],r.stone),a([3.15,2.24,1],[-20,.01,4.8],r.water);for(let y=0;y<8;y++){const E=y*2.4,N=-20+Math.cos(E)*2.8,U=4.8+Math.sin(E)*2;y<4&&(a([.26,.21,1],[N,.025,U],r.leaf),o(e,r.cream,[.08,.04,.08],[N,.05,U]));for(let P=0;P<3;P++)s(e,r.grass,[.035,.5+P*.12,.035],[N+P*.12,.25+P*.06,U]),o(e,r.wood,[.065,.13,.065],[N+P*.12,.56+P*.12,U])}for(let y=0;y<5;y++){const E=19+y%2*3,N=-4+Math.floor(y/2)*4;s(e,r.wood,[.19,1.65,.19],[E,.65,N]),o(e,r.leaf,[1.2,1.05,1.15],[E,1.85,N]);for(let U=0;U<5;U++)o(e,r.red,[.14,.14,.14],[E+Math.sin(U*2)*.91,1.9+Math.cos(U)*.42,N+Math.cos(U*2)*.91]);s(e,r.wood,[.7,.3,.55],[E+.75,.15,N+.8])}const c=y=>{const E=Math.sin(y*127.1+48.7)*43758.5453;return E-Math.floor(E)};for(let y=0;y<110;y++){const E=y%3,N=E===0?-25+c(y)*7:E===1?17+c(y)*8:-15+c(y)*22,U=E===2?11+c(y+8)*4:-7+c(y+8)*17;if(((N+20)/3.8)**2+((U-4.8)/3)**2<1)continue;const P=.12+c(y+4)*.2;if(o(e,y%5?r.grass:r.stone,[.22,P,.26],[N,P/2,U]),y%3)for(let G=0;G<3;G++)o(e,y%2?r.gold:r.white,[.055,.05,.055],[N+(G-1)*.13,P+.08,U+Math.sin(G)*.1])}for(let y=0;y<14;y++){const E=-25+y*3.8;o(e,r.leaf,[.9,.45,.55],[E,.22,-15.6]),y%3===0&&s(e,r.wood,[.11,.8,.11],[E,.3,-14.4])}s(e,r.stone,[1.1,.04,3],[-19,-.08,-15]),s(e,r.wood,[.14,1.25,.14],[8,.58,-10.1]),s(e,r.blue,[.65,.43,.43],[8,1.2,-10.1]),s(e,r.cream,[.04,.25,.29],[8.34,1.18,-10.1]);const l=new Re;l.position.set(8,1.2,-9.85),n.add(l),s(l,r.red,[.08,.38,.035],[0,.16,0]),s(l,r.red,[.22,.14,.035],[.07,.32,0]),s(e,r.wood,[1.5,.12,.5],[-17.2,.42,8.2]);for(const y of[-17.7,-16.7])s(e,r.dark,[.12,.42,.4],[y,.17,8.2]);s(e,r.wood,[1.5,.32,.08],[-17.2,.72,8.4]),Ay(e,r,s,o,a),e.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0)}),Tt(e),Tt(l);const[u,d,h,p]=["post","produce","car","tractor"].map(y=>{const E=Cy(y);return t.add(E.group),E});function g(y=!1){const E=new Re;t.add(E),o(E,y?r.cream:r.blue,[.21,.18,.32],[0,.25,0]),o(E,y?r.leaf:r.dark,[.13,.14,.14],[0,.43,.21]),s(E,r.gold,[.12,.045,.18],[0,.4,.36]);for(const U of[-1,1])o(E,r.dark,[.019,.025,.024],[U*.11,.47,.28]),s(E,r.gold,[.08,.04,.17],[U*.1,.04,.02]);Tt(E);const N=[];for(const U of[-1,1]){const P=new Re;P.position.set(U*.15,.3,0),E.add(P),o(P,y?r.cream:r.blue,[.28,.035,.13],[U*.2,0,0]),N.push(P)}return E.visible=!1,{group:E,wings:N}}const x=Array.from({length:3},()=>g()),v=Array.from({length:4},(y,E)=>{const N=g(!0);return N.group.scale.setScalar(E?.58:1),N}),m=new Re;v[0].group.add(m),s(m,r.blue,[.29,.09,.25],[0,.61,.22]),s(m,r.dark,[.3,.03,.32],[0,.57,.26]),s(m,r.gold,[.08,.04,.025],[0,.62,.355]),Tt(m);const w=Ty(t,r,s,o);t.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0)});const b=Ey(),_={post:u,produce:d,tractor:p,"duck-crossing":h,"duck-driver":h},A=Dt.lerp,C=Dt.clamp;let R=b.snapshot(),I=!1;function M(){for(const U of Object.values(_))U.group.visible=!1;if([...x,...v].forEach(U=>{U.group.visible=!1}),v.forEach((U,P)=>{U.group.scale.setScalar(P?.58:1),U.group.rotation.set(0,0,0)}),m.visible=R.active==="duck-driver"&&!I,l.rotation.z=-.9,w(I?null:R.active,R.elapsed,R.duration),I||!R.active)return;const y=R.elapsed,E=R.active,N=_[E];if(N){N.group.visible=!0,N.group.rotation.y=E==="produce"?Math.PI:0;let U;E==="post"?U=y<11?A(-38,8,y/11):y<15?8:A(8,38,(y-15)/11):E==="duck-crossing"?U=y<6?A(-38,-20.5,y/6):y<17?-20.5:A(-20.5,38,(y-17)/13):U=A(E==="produce"?38:-38,E==="produce"?-38:38,y/R.duration),N.group.position.set(U,.08,-12.2);const P=E==="post"&&y>=11&&y<15||E==="duck-crossing"&&y>=6&&y<17;Ry(N,U*(E==="produce"?-1:1),y,P),E==="post"&&y>12&&y<16&&(l.rotation.z=0)}E==="pond-birds"&&x.forEach((U,P)=>{U.group.visible=!0;const G=C((y-P*.4)/5,0,1),O=C((y-15-P*.4)/5,0,1);U.group.position.set(A(-29,-20+P*.65,G)+O*-10,A(4.5,.13,G)+O*5,A(-5,3.2,G)+O*4),U.group.rotation.set(G===1&&O===0?Math.max(0,Math.sin(y*2+P))*.38:0,O?-1.5:.7,0),U.wings.forEach((J,B)=>{J.rotation.z=(B?1:-1)*(G<1||O>0?Math.sin(y*13+P)*.7:1.1)})}),E==="duck-crossing"&&v.forEach((U,P)=>{const G=C((y-4-P*(P===3?1.5:.6))/(P===3?6.5:9),0,1);U.group.visible=y>4+P*(P===3?1.5:.6)&&G<1,U.group.position.set(-17.8+Math.sin(G*Math.PI)*.2,.07+Math.abs(Math.sin(y*(P===3?15:9)))*.035,A(-15.5,-8.4,G)),U.wings.forEach((O,J)=>{O.rotation.z=J?1.2:-1.2})}),E==="duck-driver"&&v.forEach((U,P)=>{U.group.visible=!0;const G=h.group.position.x;U.group.position.set(P?G-2.2-P*.65:G-.2,P?.07+Math.abs(Math.sin(y*10+P))*.035:h.group.position.y+h.roofHeight+h.body.position.y-.03,-12.2+(P?Math.sin(y*2+P)*.13:0)),U.group.rotation.y=Math.PI/2,P||U.group.scale.setScalar(1.35),U.wings.forEach((O,J)=>{O.rotation.z=(J?1:-1)*(P?1.2:.45+Math.sin(y*6)*.35)})})}return{root:n,update(y,E){I=E.reducedMotion,R=b.update(y,E),M()},snapshot(){return{...R,sceneryMeshes:e.children.length,visibleActors:t.children.filter(y=>y.visible).map(y=>y.position.toArray()),totalActors:t.children.length,reducedMotion:I}},start(y){const E=b.start(y);return R=b.snapshot(),M(),E}}}const af=[{label:"Produce table",cost:40,towers:1,detail:"A small roadside table for your first garden harvests."},{label:"Shade canopy",cost:30,towers:2,detail:"Add shade and a second produce crate."},{label:"Neighborhood stand",cost:45,towers:3,detail:"Build a wider counter, shelves, and space for two visitors."},{label:"Farm market",cost:65,towers:4,detail:"Finish the striped awning and family-basket display. Up to three visitors."}],Za=n=>n.towers.filter(e=>e.built&&e.repaired).length;function As(n){return n.market.built?n.market.level>=2?4:Math.max(1,Math.min(4,n.market.stage||3)):0}function qi(n){const e=As(n),t=af[e];if(!t)return null;const i=!e&&n.taskIndex<3?"Finish the first garden harvests":Za(n)<t.towers?`Requires ${t.towers} working towers`:"";return{...t,stage:e+1,reason:i,available:!i&&n.coins>=t.cost}}function cf(n){const e=qi(n);return e?.available?(n.coins-=e.cost,n.market.built=!0,n.market.stage=e.stage,n.market.level=e.stage===4?2:1,!0):!1}function In(n,e,t=0){const i=e==="bed"?Math.max(2,n.beds[t].capacity):2;return Za(n)<i?`Requires ${i} working towers`:""}const An={composter:{label:"Composter",cost:90,stages:["Open compost bin","Covered compost station","Insulated compost tumbler"],costs:[45,45,80],towers:[1,2,4],chapters:[0,0,2],detail:"Two scraps make one bag. Batches take 60 / 40 / 30 seconds as the station improves."},rainTank:{label:"Rainwater storage",cost:120,stages:["Rain barrel","Twin-barrel storage","Gutter-fed rain bank"],costs:[60,60,100],towers:[2,3,4],chapters:[1,1,2],detail:"Linked barrels reduce reservoir water use by 10% / 20% / 30%."},coop:{label:"Chicken coop",cost:180,stages:["Starter coop","Expanded chicken run","Three-hen garden coop"],costs:[90,90,140],towers:[3,4,4],chapters:[1,1,2],detail:"One stored vegetable feeds the flock. Collect 1 / 2 / 3 eggs after two minutes; sell each for 8 coins."},harvestKit:{label:"Harvest carriers",stages:["Deep harvest basket","Padded harvest panniers","Harvest cart"],costs:[70,110,150],towers:[2,4,4],chapters:[1,2,2],legacyLevel:1,attachment:"rack",detail:"Larger carriers for finished vegetables."},transplantKit:{label:"Transplant carriers",stages:["Transplant basket","Transplant wheelbarrow"],costs:[45,95],towers:[1,2],chapters:[0,1],legacyLevel:1,attachment:"workshop",detail:"Carry 3 / 6 tower starters and plant several garden plots per visit."},harvestTools:{label:"Harvest tools",stages:["Harvest shears","Quick-pick tool set"],costs:[65,110],towers:[2,3],chapters:[1,2],legacyLevel:1,attachment:"bed-0",detail:"Collect 2 / 4 finished crops per action, within your carrier capacity."},soilKit:{label:"Compost tools",stages:["Compost spreader","Precision mulch cart"],costs:[55,85],towers:[2,4],chapters:[1,2],legacyLevel:1,attachment:"bed-0",requires:"composter",detail:"One compost bag enriches 6 / 8 plantings instead of 4. Install a composter first."}};function Yt(n,e){const t=An[e];if(!t||!n?.owned?.includes(e))return 0;const i=Number(n.levels?.[e]);return Number.isFinite(i)&&i>=1?Math.min(t.stages.length,Math.floor(i)):t.legacyLevel||2}const lf=n=>[60,60,40,30][Yt(n,"composter")],bu=n=>4+Yt(n,"soilKit")*2,Mo=n=>[1,3,6][Yt(n,"transplantKit")],Ly=n=>[0,1,2,5][Yt(n,"harvestKit")],uf=n=>[1,2,4][Yt(n,"harvestTools")];function Iy(n,e){return n==="composter"?`Turn 2 scraps into 1 compost bag in ${[60,40,30][e-1]} seconds.`:n==="rainTank"?`Reduce reservoir water use by ${e*10}%. Works automatically with the shared feed.`:n==="coop"?`One stored vegetable feeds ${e} hen${e===1?"":"s"}. Collect ${e} egg${e===1?"":"s"} after two minutes; sell for ${e*8} coins.`:n==="harvestKit"?`Carry ${[0,1,2,5][e]} extra finished vegetables, on top of earned basket perks. Use the rack to switch back to starters.`:n==="transplantKit"?`Carry up to ${[1,3,6][e]} tower starters. Fill open bed plots in one action, or return starters to their reserved tower layers.`:n==="harvestTools"?`Pick up to ${[1,2,4][e]} finished crops per harvest action. Unripe crops and anything beyond your carrier capacity stay planted.`:n==="soilKit"?`One compost bag enriches ${4+e*2} plantings. Enriched plants finish 20% sooner.`:""}function wu(n,e){if(!Object.hasOwn(An,e))return null;const t=An[e],i=Yt(n.farm,e);if(i>=t.stages.length)return null;const r=t.towers[i],s=t.chapters[i],o=n.market.built?n.chapter<s?`Requires Chapter ${s+1}`:Za(n)<r?`Requires ${r} working towers`:t.requires&&!n.farm.owned.includes(t.requires)?`Requires ${An[t.requires].label}`:"":"Open the produce table first";return{label:t.stages[i],level:i+1,cost:t.costs[i],reason:o}}function Dy(n,e){const t=wu(n,e);return!t||t.reason||n.coins<t.cost?!1:(e==="coop"&&n.farm.coopReadyAt&&!n.farm.coopBatchSize&&(n.farm.coopBatchSize=Yt(n.farm,e)),n.coins-=t.cost,n.farm.levels||={},n.farm.levels[e]=t.level,n.farm.owned.includes(e)||n.farm.owned.push(e),!0)}function Uy(){return{owned:[],levels:{},scraps:0,compost:0,compostReadyAt:null,coopReadyAt:null,coopBatchSize:0,eggsReady:0,eggs:0,eggsSold:0}}function ky(n){const e=(t,i=999)=>Math.max(0,Math.min(i,Math.floor(Number(t)||0)));return{owned:[...new Set((Array.isArray(n?.owned)?n.owned:[]).filter(t=>Object.hasOwn(An,t)))],levels:Object.fromEntries(Object.keys(An).map(t=>[t,Yt({owned:[t],levels:n?.levels},t)])),scraps:e(n?.scraps,24),compost:e(n?.compost,12),compostReadyAt:Number.isFinite(n?.compostReadyAt)&&n.compostReadyAt>0?n.compostReadyAt:null,coopReadyAt:Number.isFinite(n?.coopReadyAt)&&n.coopReadyAt>0?n.coopReadyAt:null,coopBatchSize:e(n?.coopBatchSize,3),eggsReady:e(n?.eggsReady,3),eggs:e(n?.eggs,12),eggsSold:e(n?.eggsSold,99999)}}function Ny(n,e){const t=n.farm;t.owned.includes("composter")&&t.compostReadyAt&&t.compostReadyAt<=e&&(t.compost=Math.min(12,t.compost+1),t.compostReadyAt=null),t.owned.includes("coop")&&t.coopReadyAt&&t.coopReadyAt<=e&&(t.eggsReady=t.coopBatchSize||Yt(t,"coop"),t.coopReadyAt=null,t.coopBatchSize=0)}function Qa(n){const e=n.farm,t=e.owned.includes("composter"),i=t&&e.compost>0?n.beds.flatMap((a,c)=>a.built&&!a.soilCharges?[c]:[]):[],r=t&&!e.compostReadyAt&&e.scraps>=2&&e.compost<12,s=e.compostReadyAt?"Composting":e.compost>=12?"Compost storage full":e.scraps<2?`Needs ${2-e.scraps} more scrap${e.scraps===1?"":"s"}`:"Ready to start",o=i.length?"USE COMPOST":r?"START COMPOST":e.compostReadyAt?"COMPOSTING":e.compost?"COMPOST STORED":"COMPOSTER";return{canStart:r,beds:i,batch:s,label:o,attention:r||i.length>0}}function Oy(n,e,t=1){const i=n.farm;return Qa(n).canStart?(i.scraps-=2,i.compostReadyAt=e+lf(i)*1e3*t,!0):!1}function Fy(n,e,t,i=1){const r=n.farm;return!r.owned.includes("coop")||r.coopReadyAt||r.eggsReady||!Object.hasOwn(n.rack,e)||!(n.rack[e]>0)?!1:(n.rack[e]-=1,n.stats.byCropFed[e]+=1,r.coopBatchSize=Yt(r,"coop"),r.coopReadyAt=t+12e4*i,!0)}function By(n){const e=n.farm;return!e.owned.includes("coop")||!e.eggsReady||e.eggs+e.eggsReady>12?!1:(e.eggs+=e.eggsReady,e.eggsReady=0,e.scraps=Math.min(24,e.scraps+1),!0)}function zy(n){if(!n.market.built||!n.farm.eggs)return 0;const e=n.farm.eggs;return n.farm.eggs=0,n.farm.eggsSold+=e,n.coins+=e*8,e}function Hy(n,e){const t=n.beds[e];return!t?.built||t.soilCharges||n.farm.compost<1?!1:(n.farm.compost-=1,t.soilCharges=bu(n.farm),!0)}const So=["lettuce","basil","tomato","kale","strawberry"],df=[6,18,40],hf=["Grower","Living Soil","Neighborhood"],Ye=(n,e,t,i=null)=>({kind:n,target:e,label:t,crop:i}),tn=(n,e,t,i,r,s)=>({id:n,path:e,chapter:t,title:i,focus:r,goals:s,coins:18,xp:15}),or=[tn("roots",0,0,"Rooted in the garden","tower-0",[Ye("transplant",6,"Transplant tower starters"),Ye("harvest",4,"Harvest soil-finished crops")]),tn("layer-craft",0,1,"A tower of many colors","tower-0",[Ye("mixed",1,"Fill one tower with four different crops"),Ye("variety",4,"Harvest different crop varieties")]),tn("right-flow",0,1,"One batch, every tower","reservoir",[Ye("matched",8,"Plant starts after checking shared delivery"),Ye("harvest",6,"Harvest garden crops")]),tn("fruit-garden",0,2,"The fruit garden","bed-0",[Ye("harvest",8,"Harvest tomatoes","tomato"),Ye("harvest",8,"Harvest strawberries","strawberry")]),tn("succession",0,2,"Succession without a gap","tower-0",[Ye("transplant",18,"Start the next garden succession"),Ye("variety",5,"Harvest all five crops")]),tn("grower-showcase",0,2,"The HydroPip showcase","bed-0",[Ye("matched",16,"Plant starts with shared delivery checked"),Ye("harvest",24,"Finish crops in soil"),Ye("variety",5,"Include every crop")]),tn("scraps",1,0,"Nothing goes to waste","workshop",[Ye("compost",2,"Start compost batches"),Ye("enrich",1,"Enrich a garden bed")]),tn("happy-hens",1,1,"Hens at home","workshop",[Ye("feed",3,"Feed the hens stored vegetables"),Ye("eggs",3,"Collect egg batches")]),tn("gentle-water",1,1,"Make every drop count","reservoir",[Ye("saving",10,"Plant after checking the timed feed"),Ye("enrich",2,"Enrich garden beds")]),tn("living-soil",1,1,"Living soil","composter",[Ye("compost",4,"Start compost batches"),Ye("enriched",12,"Transplant into enriched soil")]),tn("closed-loop",1,2,"From harvest to compost","coop",[Ye("feed",5,"Feed the hens"),Ye("enrich",4,"Return compost to garden beds"),Ye("harvest",18,"Harvest fresh crops")]),tn("soil-showcase",1,2,"Sustainable homestead","composter",[Ye("saving",18,"Plant starts with the timed feed checked"),Ye("enriched",20,"Grow in enriched soil"),Ye("eggs",5,"Collect egg batches")]),tn("neighbors",2,0,"Your neighborhood regulars","market",[Ye("order",5,"Complete market orders"),Ye("variety",2,"Harvest different crops")]),tn("salad-club",2,1,"The neighborhood salad club","market",[Ye("order",4,"Serve lettuce orders","lettuce"),Ye("order",4,"Serve basil orders","basil")]),tn("request-route",2,1,"Pip's request route","market",[Ye("request",3,"Complete chosen requests"),Ye("order",6,"Serve market customers")]),tn("weekend-market",2,2,"The weekend market","market",[Ye("order",5,"Serve tomato orders","tomato"),Ye("order",5,"Serve kale orders","kale"),Ye("egg-sale",2,"Sell packed eggs at the stand")]),tn("community-table",2,2,"A table for everyone","market",[Ye("request",5,"Complete chosen requests"),Ye("variety",5,"Harvest every crop"),Ye("order",10,"Serve market orders")]),tn("harvest-festival",2,2,"The homestead harvest festival","market",[Ye("order",18,"Welcome market customers"),Ye("request",5,"Complete community requests"),Ye("egg-sale",4,"Bring fresh eggs to market")])],ec=[{id:"greens",title:"Mara's fresh greens",detail:"Harvest 6 lettuce for this growing request.",focus:"bed-0",goals:[Ye("harvest",6,"Lettuce harvested","lettuce")],crops:["lettuce"]},{id:"herbs",title:"June's herb patch",detail:"Raise 5 basil through the towers and garden.",focus:"bed-0",goals:[Ye("harvest",5,"Basil harvested","basil")],crops:["basil"]},{id:"mixed",title:"Theo's mixed harvest",detail:"Harvest three different crops from the garden.",focus:"bed-0",goals:[Ye("variety",3,"Different crops harvested")],crops:["tomato","basil"]},{id:"flow",title:"Pip's water-wise trial",detail:"Check shared tower delivery, then plant 8 starts.",focus:"reservoir",goals:[Ye("saving",8,"Starts with delivery checked")],chapter:1,crops:[]},{id:"market",title:"Luis's market morning",detail:"Complete 5 customer orders at the stand.",focus:"market",goals:[Ye("order",5,"Market orders served")],crops:[]},{id:"soil",title:"June's soil trial",detail:"Transplant 6 tower starters into compost-enriched beds.",focus:"composter",goals:[Ye("enriched",6,"Enriched transplants")],equipment:"composter",crops:[]},{id:"berries",title:"Mara's berry harvest",detail:"Harvest 6 strawberries from finished garden plants.",focus:"bed-0",goals:[Ye("harvest",6,"Strawberries harvested","strawberry")],crops:["strawberry"]},{id:"hens",title:"Theo's happy hens",detail:"Feed and collect two batches of eggs.",focus:"coop",goals:[Ye("feed",2,"Hen feedings"),Ye("eggs",2,"Egg batches collected")],equipment:"coop",crops:[]}],_a=(n,e=99999)=>Number.isFinite(Number(n))?Math.max(0,Math.min(e,Math.floor(Number(n)))):0;function ff(){return{claimed:[],progress:{},mastery:{},request:null,requestSerial:0,requestsCompleted:0,pinned:"roots"}}const oh=(n,e)=>e.map((t,i)=>t.kind==="variety"?[...new Set((Array.isArray(n?.[i])?n[i]:[]).filter(r=>So.includes(r)))]:_a(n?.[i],t.target));function Vy(n){const e=ff();e.claimed=[...new Set((Array.isArray(n?.claimed)?n.claimed:[]).filter(i=>or.some(r=>r.id===i)))];for(const i of or)e.progress[i.id]=oh(n?.progress?.[i.id],i.goals);for(const i of So)e.mastery[i]=_a(n?.mastery?.[i],3);e.requestSerial=_a(n?.requestSerial,999999),e.requestsCompleted=_a(n?.requestsCompleted),e.pinned=or.some(i=>i.id===n?.pinned)?n.pinned:"roots";const t=ec.find(i=>i.id===n?.request?.id);return t&&(e.request={id:t.id,progress:oh(n.request.progress,t.goals)}),e}function Qn(n){return hf.map((e,t)=>or.find(i=>i.path===t&&!n.homestead.claimed.includes(i.id))).filter(Boolean)}function Mu(n,e){return n.market.built&&n.chapter>=e.chapter&&Qn(n).includes(e)}function Su(n,e=[]){return n.map((t,i)=>({...t,current:Math.min(t.target,t.kind==="variety"?(e[i]||[]).length:e[i]||0)}))}function Eo(n,e){return Su(e.goals,n.homestead.progress[e.id])}function tc(n,e){return Mu(n,e)&&Eo(n,e).every(t=>t.current>=t.target)}function ah(n,e,t,i){n.forEach((r,s)=>{r.kind==="variety"&&t==="harvest"&&So.includes(i)?e[s]=[...new Set([...e[s]||[],i])]:r.kind===t&&(!r.crop||r.crop===i)&&(e[s]=Math.min(r.target,(e[s]||0)+1))})}function Fi(n,e,t=null){if(!n.market.built)return;for(const r of Qn(n))if(Mu(n,r)){const s=n.homestead.progress[r.id]||=[];ah(r.goals,s,e,t)}const i=ec.find(r=>r.id===n.homestead.request?.id);i&&ah(i.goals,n.homestead.request.progress,e,t)}function Gy(n,e){const t=or.find(i=>i.id===e);return!t||!tc(n,t)?!1:(n.homestead.claimed.push(e),n.coins+=t.coins,n.xp+=t.xp,n.homestead.pinned=Qn(n).find(i=>i.path===t.path)?.id||Qn(n)[0]?.id||null,!0)}function kt(n){const e=n.homestead?.claimed.length||0;return{basket:(e>=3?7:5)+Ly(n.farm),seedBatch:e>=6?6:4,water:e>=12?.9:1,festival:e>=18}}function nc(n,e){return n.homestead?.mastery?.[e]||0}function Wy(n,e){if(!So.includes(e)||!n.market.built)return!1;const t=nc(n,e);return t>=3||n.stats.byCropHarvested[e]<df[t]?!1:(n.homestead.mastery[e]=t+1,n.coins+=[8,12,20][t],n.xp+=10,n.seeds[e]=Math.min(999,n.seeds[e]+2),!0)}function pf(n){const e=ec.filter(i=>n.market.built&&n.chapter>=(i.chapter||0)&&i.crops.every(r=>n.unlockedCrops.includes(r))&&(!i.equipment||n.farm.owned.includes(i.equipment))),t=n.homestead.requestSerial%(e.length||1);return Array.from({length:Math.min(3,e.length)},(i,r)=>e[(t+r)%e.length])}function mf(n){return ec.find(e=>e.id===n.homestead.request?.id)||null}function $y(n,e){return n.homestead.request||!pf(n).some(t=>t.id===e)?!1:(n.homestead.request={id:e,progress:[]},!0)}function qy(n){const e=mf(n);return!e||!Su(e.goals,n.homestead.request.progress).every(t=>t.current>=t.target)?!1:(n.homestead.request=null,n.homestead.requestSerial++,n.homestead.requestsCompleted++,n.coins+=12,n.xp+=8,Fi(n,"request"),!0)}function Xy(n){return n.homestead.request?!1:(n.homestead.requestSerial++,!0)}function Tr(n){return n.campaignComplete&&n.homestead.claimed.length===18&&So.every(e=>nc(n,e)===3)}function $t(n){return n?.kind!=="starter"?[]:Array.isArray(n.starters)?n.starters:[n]}function To(n){if(!n.length)return null;const e=n.map(({crop:t,quality:i,sourceTower:r,sourceLayer:s,job:o})=>({crop:t,quality:i,sourceTower:r,sourceLayer:s,job:o}));return{kind:"starter",...e[0],starters:e}}function $i(n){if(n.carry?.kind==="produce")return 0;const e=$t(n.carry).length,t=n.beds.reduce((i,r)=>i+(r.built?Math.max(0,r.capacity-r.plants.length):0),0);return Math.max(0,Math.min(Mo(n.farm)-e,t-e))}function Yy(n,e,t,i=null,r=null){const s=n.towers[e];if(!s?.built||!s.repaired)return[];const o=s.queue.filter(l=>l.readyAt!==null&&l.readyAt<=t&&(!i||l.id===i));!i&&r&&o.sort((l,u)=>+(u.crop===r)-+(l.crop===r));const a=o.slice(0,i?Math.min(1,$i(n)):$i(n));if(!a.length)return[];const c=a.map(l=>({crop:l.crop,quality:l.quality,sourceTower:e,sourceLayer:l.layer,job:l}));return s.queue=s.queue.filter(l=>!a.includes(l)),n.carry=To([...$t(n.carry),...c]),c}function jy(n,e,t,i=()=>crypto.randomUUID()){if(n.carry?.kind!=="starter")return[];const r=n.towers[e];if(!r)return[];const s=$t(n.carry),o=[],a=new Set(r.queue.map(c=>c.layer));for(const c of s.filter(l=>l.sourceTower===e)){const l=!a.has(c.sourceLayer)&&Number.isInteger(c.sourceLayer)&&c.sourceLayer>=0&&c.sourceLayer<4?c.sourceLayer:[0,1,2,3].find(d=>!a.has(d));if(l===void 0||r.queue.length>=4)continue;const u={...c.job||{id:i(),crop:c.crop,queuedAt:t,quality:c.quality},startedAt:t,readyAt:t,layer:l};r.queue.push(u),a.add(l),o.push(c)}return n.carry=To(s.filter(c=>!o.includes(c))),o}function Ky(n,e,t,i,r=()=>crypto.randomUUID()){const s=n.beds[e];if(!s?.built)return[];const o=$t(n.carry),a=[];for(const c of o.slice(0,Math.max(0,s.capacity-s.plants.length))){const l=s.soilCharges>0;s.plants.push({id:r(),crop:c.crop,quality:c.quality,plantedAt:t,readyAt:t+i(c.crop)*(l?.8:1)}),s.soilCharges=Math.max(0,s.soilCharges-1),a.push({...c,enriched:l})}return a.length&&(n.carry=To(o.slice(a.length))),a}function Jy(n,e,t,i,r,s){const o=n.beds[e];if(!o?.built||n.carry?.kind==="starter")return[];const a=n.carry?.items||[],c=o.plants.filter(l=>l.readyAt<=i&&(!t||l.crop===t)).slice(0,Math.max(0,Math.min(s,r-a.length)));return c.length?(o.plants=o.plants.filter(l=>!c.includes(l)),n.carry={kind:"produce",items:[...a,...c.map(l=>l.crop)]},c):[]}const Eu=n=>Math.max(1,As(n)-1),ya=(n,e,t)=>n+Math.floor(t()*(e-n+1));function Zy(n,e=Math.random){const t=n.unlockedCrops;let i=(n.market.cropBag||[]).filter(s=>t.includes(s));if(!i.length){i=[...t];for(let s=i.length-1;s>0;s--){const o=ya(0,s,e);[i[s],i[o]]=[i[o],i[s]]}}const r=i.shift();return n.market.cropBag=i,r}function Qy(n,e,t,i=Math.random){if(!n.market.built)return!1;const r=Eu(n),s=n.market;return n.orders.length>=r||n.orders.length&&!s.visitRemaining||(s.nextVisitIn=Math.max(0,(s.nextVisitIn??8)-e),s.nextVisitIn>0)?!1:(s.visitRemaining||(s.visitRemaining=ya(1,r,i)),n.orders.push(t(n.orders.length)),s.visitRemaining--,s.nextVisitIn=s.visitRemaining?ya(5,10,i):ya(12,28,i),!0)}const e1=[{name:"Mara",color:"#df695c",skin:"#d9a47d",hair:"#453027",accessory:"sunhat",line:"Fresh greens for the block."},{name:"Theo",color:"#4398b1",skin:"#8c5d43",hair:"#242c30",accessory:"glasses",line:"A quick stop on the way home."},{name:"June",color:"#e5b84c",skin:"#e6b58b",hair:"#745239",accessory:"bun",line:"Produce for the neighborhood table."},{name:"Nia",color:"#78a967",skin:"#6f4937",hair:"#211e24",accessory:"curls",line:"The garden finish makes the difference."},{name:"Sam",color:"#ba7198",skin:"#c78968",hair:"#b9b7af",accessory:"glasses",line:"Looking for today's best crop."},{name:"Luis",color:"#6a87bf",skin:"#a46e4d",hair:"#39322a",accessory:"cap",line:"A market basket for dinner."}];function On(n){return n.orders.find(e=>e.id===n.selectedOrderId&&e.status==="waiting")||null}function bn(n,e,t=Date.now()){const i=n.carry?.kind==="produce"?n.carry.items:[],r=i.filter(d=>d===e.crop).length,s=n.rack[e.crop]||0,o=n.beds.flatMap(d=>d.plants).filter(d=>d.crop===e.crop),a=o.filter(d=>d.readyAt<=t).length,c=o.length-a+n.towers.flatMap(d=>d.queue).filter(d=>d.crop===e.crop).length+$t(n.carry).filter(d=>d.crop===e.crop).length,l=Math.max(0,e.amount-r),u=n.carry?.kind==="starter"?0:kt(n).basket-i.length;return{carried:r,stored:s,ready:a,growing:c,needed:l,room:u,load:Math.min(l,s,u),missing:Math.max(0,l-s-a-c)}}function Vl(n,e){const t=bn(n,e);return n.carry?.kind==="starter"?{kind:"starter",label:"Plant starter",stock:t}:t.needed?t.room?t.load?{kind:"collect",label:`Collect ${t.load}`,stock:t}:t.ready?{kind:"harvest",label:"Harvest needed",stock:t}:{kind:"grow",label:t.missing?"Grow needed":"View growing",stock:t}:{kind:"store",label:"Make room",stock:t}:{kind:"deliver",label:"Deliver",stock:t}}function Jt(n,e){if(n._markup===e)return;n._markup=e;const t=document.createElement("template");t.innerHTML=e;const i=s=>s.nodeType===1&&(s.getAttribute("data-key")||s.id||s.getAttribute("data-command"))||"";function r(s,o){const a=[...s.childNodes],c=new Set;[...o.childNodes].forEach((l,u)=>{const d=i(l),h=a.find(g=>!c.has(g)&&g.nodeType===l.nodeType&&g.nodeName===l.nodeName&&(d?i(g)===d:!i(g))),p=h||l.cloneNode(!0);if(c.add(p),s.childNodes[u]!==p&&s.insertBefore(p,s.childNodes[u]||null),!!h){if(p.nodeType===3){p.nodeValue!==l.nodeValue&&(p.nodeValue=l.nodeValue);return}if(p.nodeType===1){for(const g of[...p.attributes])l.hasAttribute(g.name)||p.removeAttribute(g.name);for(const g of[...l.attributes])p.getAttribute(g.name)!==g.value&&p.setAttribute(g.name,g.value);r(p,l)}}});for(const l of a)c.has(l)||l.remove()}r(n,t.content)}function t1(n,e,t){let i="projects";const r=o=>`<ul class="homestead-goals">${o.map(a=>`<li><span>${a.label}</span><strong>${a.current}/${a.target}</strong><progress max="${a.target}" value="${a.current}"></progress></li>`).join("")}</ul>`;function s(o){const a=o.homestead,c=Tr(o),l=a.claimed.length;let u;if(i==="projects")u=`<p class="homestead-summary">${l}/18 projects / ${Object.values(a.mastery).reduce((d,h)=>d+h,0)}/15 crop badges</p><p>${c?"Master Grower homestead complete. Community requests continue.":"A growing homestead, one useful project at a time."}</p>`,u+=Qn(o).map(d=>{const h=Mu(o,d),p=tc(o,d);return`<article class="homestead-project ${p?"is-ready":""}"><small>${hf[d.path]} / ${or.filter(g=>g.path===d.path).indexOf(d)+1} of 6</small><h3>${d.title}</h3>${r(Eo(o,d))}<p>${h?"18 coins + 15 XP":`Opens in Chapter ${d.chapter+1}${o.market.built?"":" after the market opens"}`}</p><div class="homestead-actions"><button data-home-action="project" data-value="${d.id}" ${p?"":"disabled"}>Claim reward</button><button data-home-action="pin" data-value="${d.id}" ${h?"":"disabled"}>${a.pinned===d.id?"Pinned":"Pin goal"}</button><button data-home-action="focus" data-value="${d.focus}" ${h?"":"disabled"}>Visit</button></div></article>`}).join(""),u+=`<h3>Homestead rewards</h3><ul class="homestead-perks">${[[3,"7-slot harvest basket"],[6,"6 seeds per packet at the same price"],[12,"10% less tower water use"],[18,"Harvest festival garden display"]].map(([d,h])=>`<li>${l>=d?"Earned":`${d} projects`}: ${h}</li>`).join("")}</ul><details><summary>All 18 projects</summary>${or.map(d=>`<p>${a.claimed.includes(d.id)?"Complete: ":""}${d.title}</p>`).join("")}</details>`;else if(i==="mastery")u="<p>Garden harvests earn crop badges. Each badge makes that crop finish in soil 3% sooner. Previous harvests count.</p>",u+=Object.entries(e).map(([d,h])=>{const p=nc(o,d),g=df[p],x=o.stats.byCropHarvested[d];return`<article class="homestead-project"><h3><span class="crop-swatch" style="background:${h.color}">${h.code}</span> ${h.label}</h3><p>${p}/3 badges / ${p*3}% shorter garden growth</p>${p<3?`${r([{label:"Garden harvests",current:Math.min(g,x),target:g}])}<p>${[8,12,20][p]} coins + 10 XP + 2 seeds</p><button data-home-action="mastery" data-value="${d}" ${x>=g&&o.market.built?"":"disabled"}>Claim ${["Bronze","Silver","Gold"][p]} badge</button>`:"<strong>Gold mastery earned</strong>"}</article>`}).join("");else{const d=mf(o);if(u=`<p>${a.requestsCompleted} requests completed. No deadlines. Requests reward your farm work; they do not take crops out of storage.</p>`,d){const h=Su(d.goals,a.request.progress),p=h.every(g=>g.current>=g.target);u+=`<article class="homestead-project ${p?"is-ready":""}"><h3>${d.title}</h3><p>${d.detail}</p>${r(h)}<p>12 coins + 8 XP</p><div class="homestead-actions"><button data-home-action="request-claim" ${p?"":"disabled"}>Claim reward</button><button data-home-action="focus" data-value="${d.focus}">Visit</button><button data-home-action="request-abandon">Abandon</button></div></article>`}else u+=pf(o).map(h=>`<article class="homestead-project"><h3>${h.title}</h3><p>${h.detail}</p><p>12 coins + 8 XP</p><button data-home-action="request-accept" data-value="${h.id}">Choose request</button></article>`).join(""),u+='<button data-home-action="request-refresh">Other requests</button>'}Jt(n,`<header><div><small>HydroPip homestead</small><h2>${c?"Master Grower":"Growing Together"}</h2></div><button class="close-button" data-home-action="close" aria-label="Close homestead goals">&#215;</button></header><div class="homestead-tabs" role="tablist" aria-label="Homestead views">${[["projects","Projects"],["mastery","Crop book"],["requests","Requests"]].map(([d,h])=>`<button role="tab" aria-selected="${i===d}" data-home-tab="${d}">${h}</button>`).join("")}</div><div role="tabpanel" class="homestead-content">${u}</div>`)}return n.onclick=o=>{const a=o.target.closest("button");!a||a.disabled||(a.dataset.homeTab?(i=a.dataset.homeTab,t("render")):a.dataset.homeAction&&t(a.dataset.homeAction,a.dataset.value))},{render:s}}const n1=4;function Ao(n,e=null,t=-1){const i=new Set(n.queue.map(r=>r.layer));for(const r of $t(e))r.sourceTower===t&&i.add(r.sourceLayer);return[0,1,2,3].filter(r=>!i.has(r))}function lr(n,e,t=null){return n?.queue.find(i=>i.readyAt!==null&&i.readyAt<=e&&(!t||i.crop===t))}function gf(n){n.towers.forEach((e,t)=>{const i=new Set;for(const r of e.queue)(!Number.isInteger(r.layer)||r.layer<0||r.layer>=n1||i.has(r.layer))&&(r.layer=[0,1,2,3].find(s=>!i.has(s))),i.add(r.layer);for(const r of $t(n.carry).filter(s=>s.sourceTower===t))(!Number.isInteger(r.sourceLayer)||i.has(r.sourceLayer))&&(r.sourceLayer=[0,1,2,3].find(s=>!i.has(s))),r.job&&(r.job.layer=r.sourceLayer),i.add(r.sourceLayer)}),n.carry?.kind==="starter"&&(n.carry=To($t(n.carry)))}function vf(n){const e=new Re;e.name=n;const t=n==="wheelbarrow"||n==="harvest cart",i=Object.fromEntries(Object.entries({wood:12029271,trim:15781238,frame:3958100,tray:7448980,tire:2700591,hub:13884110}).map(([c,l])=>[c,new Xn({color:l})])),r=(c,l,u)=>{const d=new ne(new Lt(...l),c);return d.position.set(...u),e.add(d),d},s=t?.88:.7,o=t?.86:.48,a=t?.46:0;r(t?i.frame:i.wood,[s,.07,o],[0,a,0]);for(const c of[-1,1])r(t?i.tray:i.wood,[.055,.23,o],[c*s/2,a+.14,0]),r(t?i.tray:i.wood,[s,.23,.055],[0,a+.14,c*o/2]),r(i.trim,[s+.07,.045,.065],[0,a+.27,c*o/2]);if(e.userData.loadHeight=a+.12,e.userData.wheels=[],t){for(const l of[-.38,.38])r(i.frame,[.055,.065,1.1],[l,.64,-.3]),r(i.trim,[.085,.085,.25],[l,.64,-.68]);const c=n==="wheelbarrow"?[[0,.2,.54]]:[[-.49,.2,.12],[.49,.2,.12]];if(n==="wheelbarrow"){r(i.frame,[.3,.055,.055],[0,.2,.54]);for(const l of[-.11,.11]){const u=r(i.frame,[.045,.32,.05],[l,.34,.46]);u.rotation.x=-.5}}else{r(i.frame,[1,.065,.065],[0,.2,.12]);for(const l of[-.34,.34])r(i.frame,[.065,.28,.065],[l,.34,.12])}for(const l of c){const u=new Re;u.name="carrier wheel",u.position.set(...l);const d=new ne(new it(.2,.2,.12,16),i.tire);d.rotation.z=Math.PI/2,u.add(d);for(const h of[-.065,.065]){const p=new ne(new it(.105,.105,.018,12),i.hub);p.rotation.z=Math.PI/2,p.position.x=h,u.add(p);const g=new ne(new Lt(.022,.03,.3),i.trim);g.position.x=h*1.2,u.add(g)}e.add(u),e.userData.wheels.push(u)}if(n==="wheelbarrow")for(const l of[-.33,.33])r(i.frame,[.055,.34,.055],[l,.26,-.3])}else{for(const l of[-o/2,o/2])for(const u of[.08,.17])r(i.trim,[s+.025,.025,.016],[0,u,l]);const c=new ne(new rn(.25,.025,6,16,Math.PI),i.wood);c.position.y=.27,e.add(c)}return e.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),e}function La(n,e){const t=new Re;t.name=`farm ${n}`;const i=Yt(e,n);t.userData.constructionLevel=i;const r=Object.fromEntries(Object.entries({wood:10056519,dark:4215880,soil:6573618,cream:15787717,roof:12936278,leaf:8169539,orange:15311682,water:6269879}).map(([a,c])=>[a,new Xn({color:c})])),s=(a,c,l,u)=>{const d=new ne(new Lt(...l),c);return d.position.set(...u),a.add(d),d},o=(a,c,l,u)=>{const d=new ne(new wn(1,12,8),c);return d.scale.set(...l),d.position.set(...u),a.add(d),d};if(n==="transplantKit"||n==="harvestKit"&&i===3){const a=vf(n==="harvestKit"?"harvest cart":i===2?"wheelbarrow":"transplant basket");n==="transplantKit"&&i===1&&(a.position.y=.07),t.add(a)}else if(n==="harvestTools"){for(const a of[-.3,.3])s(t,r.wood,[.065,.85,.065],[a,.425,0]);s(t,r.wood,[.75,.09,.1],[0,.72,0]);for(let a=0;a<i;a++){const c=new Re;c.position.set(-.18+a*.34,.58,.08),t.add(c);for(const l of[-1,1]){const u=s(c,r.cream,[.055,.28,.025],[l*.06,0,0]);u.rotation.z=l*.28;const d=new ne(new rn(.065,.02,6,12),r.roof);d.position.set(l*.08,.19,0),c.add(d)}}}else if(n==="harvestKit")for(let a=0;a<i;a++){const c=.23+a*.4;s(t,r.wood,[.62,.36,.5],[0,c,0]),s(t,r.dark,[.5,.02,.38],[0,c+.19,0]);for(const u of[-.25,.25])for(const d of[-.1,.04])s(t,r.cream,[.64,.035,.018],[0,c+d,u]);const l=new ne(new rn(.21,.035,6,14,Math.PI),r.wood);l.position.set(0,c+.2,0),t.add(l)}else if(n==="soilKit"){s(t,r.dark,[.6,.12,.72],[0,.3,0]),s(t,r.water,[.66,.34,.74],[0,.49,0]),s(t,r.soil,[.55,.08,.62],[0,.69,0]);for(const a of[-.35,.35]){const c=new ne(new it(.2,.2,.09,12),r.dark);c.rotation.z=Math.PI/2,c.position.set(a,.2,.15),t.add(c),s(t,r.wood,[.055,.06,.55],[a,.6,-.62])}if(i>1){s(t,r.cream,[.44,.23,.12],[0,.77,-.22]);for(let a=0;a<5;a++)s(t,r.dark,[.045,.26,.045],[-.24+a*.12,.22,.47])}}else if(n==="composter"){s(t,r.soil,[1.55,.42,1.1],[0,.24,0]);for(const a of[-.8,.8])for(const c of[-.6,.6])s(t,r.dark,[.11,1.1,.11],[a,.55,c]);for(const a of[.2,.44,.68,.92]){for(const c of[-.62,.62])s(t,r.wood,[1.7,.17,.08],[0,a,c]);for(const c of[-.82,.82])s(t,r.wood,[.08,.17,1.3],[c,a,0])}o(t,r.soil,[.73,.2+e.scraps*.012,.53],[0,.51,0]);for(let a=0;a<Math.min(6,e.scraps);a++)o(t,r.leaf,[.15,.03,.075],[Math.sin(a*2)*.45,.66+e.scraps*.008,Math.cos(a*2)*.35]);for(let a=0;a<Math.min(3,e.compost);a++)s(t,r.cream,[.3,.38,.24],[1.12,.2,-.36+a*.29]);if(i===2){const a=s(t,r.dark,[1.85,.09,1.36],[0,1.23,-.22]);a.rotation.x=-.3,s(t,r.wood,[.2,.85,.08],[.7,1.2,-.6])}if(i===3){const a=new ne(new it(.44,.44,1.3,16),r.water);a.rotation.z=Math.PI/2,a.position.y=1.4,t.add(a);for(const c of[-.65,.65]){s(t,r.dark,[.08,.95,.16],[c,1.16,0]);const l=new ne(new rn(.45,.04,6,20),r.dark);l.rotation.y=Math.PI/2,l.position.set(c,1.4,0),t.add(l)}s(t,r.cream,[.35,.08,.32],[0,1.84,0]),s(t,r.wood,[.23,.12,.12],[.86,1.4,0])}}else if(n==="rainTank"){const a=new ne(new it(.66,.72,1.45,20),r.water);a.position.y=.75,t.add(a);for(const c of[.15,.72,1.44]){const l=new ne(new rn(.68,.045,6,24),r.dark);l.rotation.x=Math.PI/2,l.position.y=c,t.add(l)}if(s(t,r.cream,[.2,.9,.08],[0,.83,.66]),s(t,r.dark,[.12,.15,.48],[.35,.22,.71]),i>1){const c=new ne(new it(.54,.58,1.25,20),r.water);c.position.set(1.2,.65,0),t.add(c),s(t,r.dark,[.6,.1,.1],[.65,.3,0]),s(t,r.cream,[1.2,.08,1.2],[1.2,1.3,0])}if(i===3){const c=new ne(new it(.5,.54,1.3,16),r.water);c.position.set(.5,.68,-1.05),t.add(c);for(const u of[-.6,1.7])s(t,r.dark,[.075,2,.075],[u,1,-.8]);const l=s(t,r.roof,[2.5,.09,1.35],[.55,2.02,-.55]);l.rotation.x=.12,s(t,r.cream,[2.5,.1,.12],[.55,1.96,.14]),s(t,r.dark,[.09,1.3,.09],[1.62,1.3,.14])}}else if(n==="coop"){s(t,r.soil,[4,.06,2],[0,.03,0]),s(t,r.wood,[1.25,.9,1.2],[-1.1,.85,0]),s(t,r.dark,[.33,.47,.035],[-1.04,.64,.62]);for(const l of[-1,1]){const u=s(t,r.roof,[.85,.09,1.5],[-1.1+l*.34,1.49,0]);u.rotation.z=-l*.33}for(const l of[-1.58,-.63])for(const u of[-.48,.48])s(t,r.dark,[.1,.55,.1],[l,.28,u]);const a=s(t,r.wood,[.48,.06,.9],[-1.04,.26,.96]);a.rotation.x=-.4;for(const l of[-2,-1,0,1,2])for(const u of[-1,1])s(t,r.wood,[.055,.56,.055],[l,.3,u]);for(const l of[-1,1])for(const u of[.19,.45])s(t,r.wood,[4.05,.035,.035],[0,u,l]);for(const l of[-2,2])for(const u of[.19,.45])s(t,r.wood,[.035,.035,2],[l,u,0]);o(t,r.cream,[.22,.04,.19],[1.5,.08,-.5]);for(let l=0;l<e.eggsReady;l++)o(t,r.cream,[.09,.12,.08],[-.69+l*.2,.53,.64]);const c=[];for(let l=0;l<i;l++){const u=new Re;u.position.set([.1,.9,1.4][l],0,[.35,-.4,.45][l]),t.add(u),o(u,r.cream,[.25,.25,.34],[0,.36,0]),o(u,r.wood,[.05,.14,.21],[-.23,.38,-.03]),o(u,r.cream,[.13,.2,.13],[0,.63,.2]);for(let p=0;p<3;p++)o(u,r.roof,[.045,.065,.055],[0,.82,.15+p*.045]);o(u,r.roof,[.04,.08,.04],[0,.53,.31]);for(const p of[-1,1])o(u,r.dark,[.018,.024,.018],[p*.116,.68,.25]),s(u,r.orange,[.028,.19,.03],[p*.1,.1,0]),s(u,r.orange,[.08,.025,.13],[p*.1,.025,.04]);const d=new ne(new wi(.057,.16,4),r.orange);d.rotation.x=Math.PI/2,d.position.set(0,.63,.35),u.add(d);const h=o(u,r.cream,[.11,.24,.1],[0,.54,-.28]);h.rotation.x=-.65,u.userData.home=u.position.clone(),c.push(u)}if(t.userData.hens=c,i>1){s(t,r.wood,[.85,.45,.6],[-1.1,.6,-.8]),s(t,r.roof,[1,.08,.72],[-1.1,.88,-.8]);for(const l of[.2,1.1])s(t,r.dark,[.07,1.15,.07],[l,.6,-.9]);s(t,r.wood,[1.15,.08,.1],[.65,1.15,-.9])}if(i===3){s(t,r.roof,[2,.08,.85],[.7,1.45,-.65]);for(const l of[-.22,1.62])s(t,r.dark,[.06,1.4,.06],[l,.7,-.95]);s(t,r.cream,[.42,.3,.45],[.6,.2,-.65]),s(t,r.water,[.3,.06,.3],[.6,.38,-.65])}}return t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),Tt(t),t}function xf(n,e,t,i,r){const s=document.createElement("canvas");s.width=1024,s.height=256;const o=s.getContext("2d");o.fillStyle=i,o.fillRect(0,0,1024,256),o.strokeStyle=r,o.lineWidth=12,o.strokeRect(12,12,1e3,232),o.fillStyle=r,o.font="900 138px system-ui",o.textAlign="center",o.textBaseline="middle",o.fillText(n,512,132,936);const a=new fu(s);a.colorSpace=nn;const c=new ne(new Nn(e,t),new Ft({map:a,side:un}));return c.name=n,c.rotation.x=-.22,c}function i1(n,e,t){for(const r of[-1.05,1.05])e(n,[.12,1.35,.12],[r,1.83,-.38],t.woodDark);e(n,[2.95,.88,.13],[0,2.6,-.35],t.woodDark);const i=xf("BUY SEEDS",2.8,.74,"#e5f294","#19382b");i.position.set(0,2.6,-.26),n.add(i),e(n,[1.7,.56,.06],[0,.7,.76],t.woodDark);for(let r=0;r<5;r++)e(n,[.23,.34,.05],[-.65+r*.325,.73,.81],r%2?t.coral:t.lime),e(n,[.12,.09,.02],[-.65+r*.325,.78,.85],t.white,!1)}function r1(n,e,t){const i=new Re,r=new Xn({color:4427678});i.name=`farm supply store stage ${n}`;const s=n>=2?2.1:1.5,o=s/2;e(i,[3.1,.16,s+.65],[0,.08,.15],t.shell),e(i,[2.9,1.9,.14],[0,1.03,-s/2],t.white);for(const l of[-1.4,1.4])e(i,[.14,1.9,s],[l,1.03,0],t.white),e(i,[.18,.48,s+.03],[l,.38,0],t.wood);e(i,[.78,1.58,.12],[-.85,.94,o],t.woodDark),e(i,[.6,1.38,.13],[-.85,.92,o+.03],t.dark),e(i,[.46,.62,.05],[-.85,1.14,o+.11],t.metal),e(i,[.07,.1,.08],[-.64,.71,o+.15],t.amber),e(i,[.94,.12,.4],[-.85,.19,o+.22],t.wood),e(i,[1.62,.72,.16],[.47,.5,o],t.wood),e(i,[1.82,.13,.5],[.47,.92,o+.05],t.woodDark);for(const l of[-.42,1.35])e(i,[.12,1.05,.14],[l,1.48,o],t.woodDark);for(const l of[.92,1.47]){e(i,[1.66,.08,.45],[.48,l,o-.38],t.wood);for(let u=0;u<4;u++){const d=-.13+u*.4;e(i,[.25,.32,.22],[d,l+.2,o-.37],u%2?t.lime:t.coral),e(i,[.14,.12,.02],[d,l+.2,o-.245],t.white,!1)}}e(i,[3,.5,.14],[0,2.18,o+.35],t.woodDark);const a=xf("FARM SHOP",2.78,.47,"#18392c","#f4de8a");if(a.position.set(0,2.18,o+.44),i.add(a),n>=3){for(const l of[-1,1]){const u=e(i,[3.35,.14,1.45],[0,2.47,l*.6],t.coral);u.rotation.x=l*.34}e(i,[3.4,.14,.18],[0,2.71,0],t.woodDark)}else e(i,[3.22,.16,s+.3],[0,2.26,0],t.coral);const c=new Re;c.position.set(.46,1.88,o+.4),c.rotation.x=.18;for(let l=0;l<6;l++)e(c,[.3,.07,.76],[-.75+l*.3,0,0],l%2?t.white:r),e(c,[.3,.16,.06],[-.75+l*.3,-.07,.38],l%2?t.white:r);if(i.add(c),n>=2){e(i,[.48,.48,.62],[1.8,.3,.35],t.woodDark);for(let l=0;l<3;l++)e(i,[.055,1.05,.055],[1.66+l*.14,.85,.34],t.wood),e(i,[.13,.22,.06],[1.66+l*.14,1.36,.34],t.metal)}if(n>=4)for(const l of[-1.7,1.7])e(i,[.4,.35,.55],[l,.24,-.7],t.wood),e(i,[.34,.35,.42],[l,.57,-.7],t.lime);return Tt(i),i}function s1(n){const e=new Map;n.traverse(i=>{!i.userData.growthTiming||!i.userData.plantingPlacements||i.children.filter(r=>r.isInstancedMesh).forEach((r,s)=>{const o=`${i.userData.crop}:${s}:${r.material.opacity}`;e.has(o)||e.set(o,[]),e.get(o).push(r),r.layers.set(1),r.castShadow=!1})});const t=[];for(const i of e.values()){const r=i.reduce((o,a)=>o+a.count,0),s=new Rr(i[0].geometry.clone(),i[0].material.clone(),r);s.castShadow=!0,s.receiveShadow=!0,s.userData.instanceTargets=i.flatMap(o=>Array(o.count).fill(o.userData.interactiveId)),s.userData.cropBatch=!0,n.add(s),t.push({mesh:s,parts:i})}n.userData.cropBatches=t,_f(n)}function _f(n){n.updateMatrixWorld(!0);const e=n.matrixWorld.clone().invert(),t=new Mt,i=new Mt,r=new Mt().makeScale(0,0,0);for(const{mesh:s,parts:o}of n.userData.cropBatches||[]){let a=0;for(const c of o){i.multiplyMatrices(e,c.matrixWorld);for(let l=0;l<c.count;l++)c.getMatrixAt(l,t),t.premultiply(i),c.visible||t.multiply(r),s.setMatrixAt(a++,t)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}const ba=.24,ua=1.12;function o1(n){const e=new Re;e.name="water reservoir";const t=new Re;e.add(t);const i=new Xn({color:14476762}),r=new Xn({color:4151378}),s=new Wi({color:4636114,roughness:.25,metalness:.05}),o=new Ft({color:6935773});function a(w,b,_,A){const C=new ne(b,_);return C.position.set(...A),w.add(C),C}a(t,new Lt(1.7,.2,1.7),r,[0,.13,0]);for(const w of[.26,.84,1.43])for(const b of[-.78,.78])a(t,new Lt(1.6,.045,.045),i,[0,w,b]),a(t,new Lt(.045,.045,1.6),i,[b,w,0]);for(const w of[-.78,0,.78])for(const b of[-.78,.78])a(t,new Lt(.045,1.2,.045),i,[w,.845,b]);const c=a(e,new Lt(1.5,1.17,1.5),new Wi({color:14152429,transparent:!0,opacity:.14,roughness:.25,depthWrite:!1,side:un}),[0,.845,0]);c.renderOrder=2;const l=a(e,new Lt(1.37,1,1.37),s,[0,ba,0]);l.name="reservoir water volume";const u=new Re;u.position.set(.42,0,.8),e.add(u),a(u,new Lt(.22,1.1,.06),r,[0,.86,0]);for(let w=0;w<=4;w++)a(u,new Lt(.045,.014,.015),i,[.065,.39+w*.225,.04]);Tt(u);const d=a(u,new Lt(.08,.9,.025),o,[-.025,.39,.048]),h=a(u,new wn(.065,10,8),o,[0,1.39,.018]);for(const w of[-.35,.35])a(t,new Lt(.24,.2,.3),r,[w,.34,-.2]),a(t,new it(.045,.045,1.2,8),r,[w,.95,-.2]);const p=a(t,new it(.045,.045,.42,8),r,[-.35,1.55,.01]);p.rotation.x=Math.PI/2,a(t,new it(.045,.045,.18,8),r,[-.35,1.48,.22]);const g=a(t,new it(.045,.045,.66,8),r,[.35,1.55,-.53]);g.rotation.x=Math.PI/2,a(t,new it(.045,.045,1.3,8),r,[.35,.9,-.86]);const x=new Ft({color:10875647}),v=a(e,new it(.045,.065,.2,8),x,[-.35,1.3,.22]);v.name="IBC top mixing discharge";const m=new Re;m.position.set(-.35,0,.22),e.add(m);for(let w=0;w<2;w++){const b=new ne(new rn(.23,.018,6,24),new Ft({color:13105919,transparent:!0,opacity:.8,depthWrite:!1}));b.rotation.x=-Math.PI/2,m.add(b)}return Tt(t),e.userData.reservoir={liquid:l,fill:d,lamp:h,shell:c,mixingStream:v,ripples:m,ratio:null,status:null},yf(e,n),e}function yf(n,e){const t=n?.userData.reservoir;if(!t)return;const i=Math.max(0,Math.min(1,Number.isFinite(e)?e/100:0));if(t.ratio===i)return;t.ratio=i,t.status=i===0?"empty":i<=.3?"low":"ready",t.liquid.visible=t.fill.visible=i>0,t.liquid.scale.y=Math.max(1e-4,i*ua),t.liquid.position.y=ba+i*ua/2,t.mixingStream.visible=i>0;const r=Math.max(.02,1.4-(ba+i*ua));t.mixingStream.scale.y=r/.2,t.mixingStream.position.y=1.4-r/2,t.ripples.position.y=ba+i*ua+.025,t.fill.scale.y=Math.max(1e-4,i),t.fill.position.y=.39+i*.9/2,t.lamp.material.color.setHex(i<=.3?16102724:6935773)}function a1(n,e,t,i){const r=n?.userData.reservoir;r&&(r.mixingStream.visible=r.ripples.visible=t&&r.ratio>0,r.ripples.children.forEach((s,o)=>{const a=i?.35+o*.35:(e*.9+o*.5)%1;s.scale.setScalar(.3+a*1.4),s.material.opacity=i?.65:.9*(1-a)}))}function c1(n){const e=n?.userData.reservoir;return e?{ratio:e.ratio,status:e.status,waterVisible:e.liquid.visible,surfaceHeight:e.liquid.position.y+e.liquid.scale.y/2,bottomHeight:e.liquid.position.y-e.liquid.scale.y/2,gaugeVisible:e.fill.visible,gaugeScale:e.fill.scale.y,mixingVisible:e.mixingStream.visible,rippleScale:e.ripples.children[0].scale.x,modelId:n.uuid}:null}const js="2026.09.06-preview.16",l1="https://hydropip-pip-api.onrender.com/track-start.html",ch="info@hydropip.com",u1=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;let bf=window.HYDROPIP_ANALYTICS_CONSENT===!0;window.addEventListener("hydropip:analytics-consent",n=>{bf=n.detail?.granted===!0});function ni(n,e={}){if(!bf)return;const t={event:`hydropip_game_${n}`,game:"growing_adventure",version:js,sessionId:u1,...e};window.dataLayer=window.dataLayer||[],window.dataLayer.push(t),window.dispatchEvent(new CustomEvent("hydropip:game-event",{detail:t}))}const Tu={repair:"Tower online!",seeds:"Seeds in the vault!",plant:"Your first layer is planted!",pickup:"Garden-ready starter!",transplant:"Roots in the garden!",harvest:"Your first harvest!",stage:"Harvest safely stored!",market:"Open for business!",sale:"Your first customer!",expansion:"A second tower!",upgrade:"More room to grow!"};function wf(n,e=!1){return{enabled:typeof n?.enabled=="boolean"?n.enabled:e,minimized:!!n?.minimized,staged:!!n?.staged,seen:[...new Set((Array.isArray(n?.seen)?n.seen:[]).filter(t=>Object.hasOwn(Tu,t)))]}}function Gl(n){const e=n.beds.some(i=>i.built&&i.capacity>2)||n.towers.some(i=>i.irrigationUpgraded),t={repair:n.towers[0].repaired,seeds:n.stats.seedsCollected>0,plant:n.stats.planted>0,pickup:n.carry?.kind==="starter"||n.stats.transplanted>0,transplant:n.stats.transplanted>0,harvest:n.stats.harvested>0,stage:n.tutorial.coach?.staged||Object.values(n.rack).some(i=>i>0),market:n.market.built,sale:n.stats.orders>0,expansion:n.towers[1].built&&n.towers[1].repaired,upgrade:e};return Object.keys(Tu).filter(i=>t[i])}const Wl={lettuce:4,basil:6,tomato:8,kale:6,strawberry:10},Ia=80;function d1(){return{tutorialClaimed:[],expanded:!1,purchases:0,rescues:0}}function h1(n){const e=t=>Number.isFinite(t)?Math.max(0,Math.min(99999,Math.floor(t))):0;return{tutorialClaimed:[...new Set((Array.isArray(n?.tutorialClaimed)?n.tutorialClaimed:[]).filter(t=>["lettuce","basil"].includes(t)))],expanded:!!n?.expanded,purchases:e(n?.purchases),rescues:e(n?.rescues)}}function $l(n){return n.seedShop.expanded?48:24}function ic(n,e){if(!Object.hasOwn(Wl,e)||!n.unlockedCrops.includes(e))return{available:!1,reason:"Crop locked"};const t=!n.market.built&&["lettuce","basil"].includes(e)&&!n.seedShop.tutorialClaimed.includes(e),i=t?4:kt(n).seedBatch,r=t?0:Wl[e],s=n.market.built?n.coins:Math.max(0,n.coins-40),o=n.seeds[e]+i>$l(n)?"Vault full":s<r?n.market.built?"Not enough coins":"Keep the market reserve":"";return{available:!o,reason:o,amount:i,price:r,tutorial:t}}function f1(n,e){const t=ic(n,e);return t.available?(n.coins-=t.price,n.seeds[e]+=t.amount,n.stats.seedsCollected+=t.amount,t.tutorial?n.seedShop.tutorialClaimed.push(e):n.seedShop.purchases++,!0):!1}function Au(n){if((n.market.built?n.coins:Math.max(0,n.coins-40))>=Wl.lettuce||Object.values(n.seeds).some(r=>r>0)||n.carry?.kind==="starter")return!1;const t=n.chapter>=2?2:1,i=n.carry?.kind==="produce"?n.carry.items:[];return!(Object.entries(n.rack).some(([r,s])=>s+i.filter(o=>o===r).length>=t)||n.towers.some(r=>r.queue.length)||n.beds.some(r=>r.plants.length)||n.farm.eggs||n.farm.eggsReady||n.farm.coopReadyAt)}function p1(n){return Au(n)?(n.seeds.lettuce+=2,n.stats.seedsCollected+=2,n.seedShop.rescues++,!0):!1}function m1(n){return!n.market.built||In(n,"vault")||n.seedShop.expanded||n.coins<Ia?!1:(n.coins-=Ia,n.seedShop.expanded=!0,!0)}const Co="hydropipCampaignSave",g1="hydropipTowerRunCampaign",Cu=6,ii=["lettuce","basil","tomato","kale","strawberry"],Pe={lettuce:{code:"L",label:"Lettuce",color:"#79bd53",accent:"#d6f47a",towerSeconds:9,bedSeconds:6,coinValue:9,xp:3,family:"greens"},basil:{code:"B",label:"Basil",color:"#319856",accent:"#8de28f",towerSeconds:11,bedSeconds:7,coinValue:11,xp:4,family:"greens"},tomato:{code:"T",label:"Tomato",color:"#df5e48",accent:"#ffb06b",towerSeconds:15,bedSeconds:10,coinValue:15,xp:5,family:"fruit"},kale:{code:"K",label:"Kale",color:"#47765c",accent:"#a8d276",towerSeconds:13,bedSeconds:9,coinValue:14,xp:5,family:"greens"},strawberry:{code:"S",label:"Strawberry",color:"#d94f68",accent:"#ffd06c",towerSeconds:17,bedSeconds:11,coinValue:19,xp:7,family:"fruit"}},as=[0,35,85,145,220,310,420,650,950,1350,1850,2450,3150,3950,4850],gt={market:40,tower:[0,70,110,160],bedUpgrade:[45,65,90,120],queueUpgrade:55,cosmetics:{"sunny-planters":30,"blue-path":45,"festival-bunting":60}},lo={"sunny-planters":{label:"Sunny planters",color:"#f4c451"},"blue-path":{label:"Blue garden pots",color:"#66c7d0"},"festival-bunting":{label:"Market bunting",color:"#e86c54"}},_s=[{id:"restore",number:1,name:"Restore the Homestead",shortName:"Homestead",description:"Repair the first tower and reopen Pip's Veg Stand.",completionTask:"first-market-day"},{id:"balance",number:2,name:"Expand the Farm",shortName:"Farm Expansion",description:"Check the shared reservoir and supply a neighborhood rush.",completionTask:"neighborhood-rush"},{id:"pro-yard",number:3,name:"Build the Pro Yard",shortName:"Pro Yard",description:"Complete the five-crop launch showcase with Pro Pip.",completionTask:"launch-showcase"}],Dn=[{id:"repair-first-tower",chapter:0,title:"Bring the tower online",detail:"Repair the first HydroPip tower.",focus:"tower-0",reward:{coins:15,xp:15,unlockCrop:"basil"},story:"Pip: One good tower is enough to bring this garden back."},{id:"first-tower-plan",chapter:0,title:"Plan the first greens",detail:"Collect seeds and plant 2 lettuce layers.",focus:"vault",reward:{coins:10,xp:20},story:"Mara: Lettuce first. The neighborhood has missed fresh greens."},{id:"first-grow-out",chapter:0,title:"Finish crops in soil",detail:"Transplant and harvest 4 garden crops before opening the produce table.",focus:"bed-0",reward:{coins:20,xp:25},story:"Pip: Tower roots are ready. The bed gives them their final finish."},{id:"reopen-market",chapter:0,title:"Open Pip's produce table",detail:"Build a small produce table for 40 coins. More towers unlock a bigger stand.",focus:"market",reward:{coins:20,xp:25},story:"Theo: A few crates today. An awning when the farm grows."},{id:"first-market-day",chapter:0,title:"Serve the first greens",detail:"Sell 2 lettuce and 2 basil across 4 market orders.",goals:{sold:{lettuce:2,basil:2},orders:4},focus:"market",reward:{coins:40,xp:35,chapterComplete:!0},story:"June: The stand is open again. Let's add more towers and grow more crops."},{id:"build-second-tower",chapter:1,title:"Build the second tower",detail:"Build Tower 2 for 70 coins.",focus:"tower-1",reward:{coins:25,xp:35,unlockCrop:"tomato"},story:"Pip: Two towers, one tank. Both receive the same nutrient batch."},{id:"specialize-flow",chapter:1,title:"Check the shared system",detail:"Confirm tank circulation, then check delivery to every tower.",focus:"reservoir",reward:{coins:25,xp:35,unlockCrop:"kale"},story:"Mara: One pump mixes the tank. A second pump feeds every tower from that same batch."},{id:"split-crop-plan",chapter:1,title:"Run a mixed crop plan",detail:"Plant tomato and kale in separate tower layers.",focus:"vault",reward:{coins:40,xp:40},story:"Theo: Different crops can share the towers. Their nutrient supply is still one batch."},{id:"build-third-tower",chapter:1,title:"Build the third tower",detail:"Build Tower 3 for 110 coins.",focus:"tower-2",reward:{coins:55,xp:45},story:"Pip: Three towers. Now the farm can keep several orders moving."},{id:"neighborhood-rush",chapter:1,title:"Serve the neighborhood rush",detail:"Sell 3 tomato and 3 kale, reach 10 total orders, and upgrade tower drippers or a garden bed.",goals:{sold:{tomato:3,kale:3},orders:10,capacityUpgrade:!0},focus:"market",reward:{coins:90,xp:55,chapterComplete:!0},story:"June: Every order made the Pro Yard possible."},{id:"build-pro-yard",chapter:2,title:"Build the fourth tower",detail:"Build Tower 4 for 160 coins.",focus:"tower-3",reward:{coins:45,xp:55,unlockCrop:"strawberry",unlockPro:!0},story:"Pip: Pro Yard online. Time for the black shirt and tool belt."},{id:"launch-showcase",chapter:2,title:"Host the launch showcase",detail:"Upgrade the market, sell 5 of every crop plus 3 extra strawberries, and reach 20 total orders.",goals:{sold:{lettuce:5,basil:5,tomato:5,kale:5,strawberry:8},orders:20,marketLevel:2},focus:"market",reward:{coins:140,xp:75,chapterComplete:!0,campaignComplete:!0},story:"Mara: The homestead is growing, the stand is busy, and Pip is a pro."}];function br(){return Object.fromEntries(ii.map(n=>[n,0]))}function rc(n){const e=Math.max(0,Number(n)||0);let t=1;return as.forEach((i,r)=>{e>=i&&(t=r+1)}),Math.min(as.length,t)}function Mf(n){const e=rc(n),t=as[e-1],i=as[e]??t;return{level:e,current:Math.max(0,n-t),needed:e>=as.length?0:i-t,ratio:e>=as.length?1:(n-t)/(i-t)}}function Sf(n){return{id:`tower-${n}`,built:n===0,repaired:!1,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!1,queue:[]}}function Ef(n){return{id:`bed-${n}`,built:n===0,capacity:2,soilCharges:0,plants:[]}}function sc(n=Date.now()){return{version:Cu,createdAt:n,savedAt:n,chapter:0,taskIndex:0,completedTasks:[],coins:45,xp:0,level:1,challengeUnlocked:!1,campaignComplete:!1,proPip:!1,unlockedCrops:["lettuce"],towers:[0,1,2,3].map(Sf),beds:[0,1,2,3].map(Ef),market:{built:!1,level:0,stage:0,nextVisitIn:8,visitRemaining:0,cropBag:[]},farm:Uy(),homestead:ff(),seeds:br(),seedShop:d1(),rack:br(),carry:null,orders:[],selectedOrderId:null,orderSequence:0,lastCustomer:"",stats:{seedsCollected:0,planted:0,transplanted:0,harvested:0,sold:0,orders:0,rejectedOrders:0,serviceActions:0,byCropQueued:br(),byCropHarvested:br(),byCropSold:br(),byCropFed:br()},hydro:{water:100,nutrients:100,ph:6.2,strategy:"balanced",batchMixed:!0,mixChecked:!1,flowChecked:!1,flowCalibrated:!1,systemLessonDone:!1,batchNumber:1,feedPhase:0,lineClogged:!1,lineRunSeconds:0,lineClogAfter:300,servicedAt:n},cosmetics:{owned:[],active:[]},tutorial:{welcomeSeen:!1,taskDrawerSeen:!1,marketSeen:!1,coach:wf(null,!0)},settings:{soundEnabled:!0,highContrast:!1,reducedMotion:!1,musicVolume:.22,effectsVolume:.68}}}function $e(n,e,t=-1/0,i=1/0){const r=Number(n);return Number.isFinite(r)?Math.min(i,Math.max(t,r)):e}function ns(n){const e=br();return ii.forEach(t=>{e[t]=Math.floor($e(n?.[t],0,0,999))}),e}function lh(n){return!n||!Pe[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,layer:Number.isInteger(n.layer)&&n.layer>=0&&n.layer<4?n.layer:null,queuedAt:$e(n.queuedAt,Date.now(),0),startedAt:n.startedAt===null?null:$e(n.startedAt,Date.now(),0),readyAt:n.readyAt===null?null:$e(n.readyAt,Date.now(),0),quality:$e(n.quality,1,.5,1.25)}}function v1(n){return!n||!Pe[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,plantedAt:$e(n.plantedAt,Date.now(),0),readyAt:$e(n.readyAt,Date.now(),0),quality:$e(n.quality,1,.5,1.25)}}function x1(n){return!n||!Pe[n.crop]?null:{id:String(n.id||crypto.randomUUID()),customer:String(n.customer||"Mara").slice(0,24),slot:Number.isInteger(n.slot)&&n.slot>=0&&n.slot<3?n.slot:null,crop:n.crop,amount:Math.floor($e(n.amount,1,1,3)),reward:Math.floor($e(n.reward,10,1,200)),xp:Math.floor($e(n.xp,5,1,50)),createdAt:$e(n.createdAt,Date.now(),0),expiresAt:$e(n.expiresAt,Date.now()+12e4,0),status:["waiting","cooldown"].includes(n.status)?n.status:"waiting"}}function _1(n,e,t){n.towers.forEach(i=>{i.queue.forEach(r=>{if(!r||r.startedAt===null||r.readyAt===null||r.readyAt<=e)return;const s=t?ys(r.crop,"tower",n,i):Pe[r.crop].towerSeconds*4,o=e+s*1e3;r.readyAt=Math.min(r.readyAt,o)})}),n.beds.forEach(i=>{i.plants.forEach(r=>{if(r.readyAt<=e)return;const s=e+ys(r.crop,"bed",n)*1e3;r.readyAt=Math.min(r.readyAt,s)})})}function Da(n,e=Date.now()){const t=sc(e);if(!n||typeof n!="object")return t;const i=n.hydro?.systemLessonDone===void 0&&($e(n.taskIndex,0)>6||Array.isArray(n.towers)&&n.towers.some(a=>["greens","fruit"].includes(a?.specialization))),r={...t,...n,version:Cu,createdAt:$e(n.createdAt,e,0),savedAt:$e(n.savedAt,e,0),chapter:Math.floor($e(n.chapter,0,0,_s.length-1)),taskIndex:Math.floor($e(n.taskIndex,0,0,Dn.length)),completedTasks:Array.isArray(n.completedTasks)?[...new Set(n.completedTasks.filter(a=>Dn.some(c=>c.id===a)))]:[],coins:Math.floor($e(n.coins,t.coins,0,99999)),xp:Math.floor($e(n.xp,0,0,99999)),challengeUnlocked:!!n.challengeUnlocked,campaignComplete:!!n.campaignComplete,proPip:!!n.proPip,unlockedCrops:Array.isArray(n.unlockedCrops)?ii.filter(a=>n.unlockedCrops.includes(a)):["lettuce"],seeds:ns(n.seeds),seedShop:h1(n.seedShop),rack:ns(n.rack),farm:ky(n.farm),homestead:Vy(n.homestead),carry:null,orders:Array.isArray(n.orders)?n.orders.map(x1).filter(Boolean).slice(0,3):[],selectedOrderId:typeof n.selectedOrderId=="string"?n.selectedOrderId.slice(0,80):null,orderSequence:Math.floor($e(n.orderSequence,0,0,999999)),lastCustomer:String(n.lastCustomer||"").slice(0,24),market:{built:!!n.market?.built,level:Math.floor($e(n.market?.level,0,0,2)),stage:n.market?.built?Math.floor($e(n.market?.stage,n.market?.level>=2?4:3,1,4)):0,nextVisitIn:$e(n.market?.nextVisitIn,8,0,35),visitRemaining:Math.floor($e(n.market?.visitRemaining,0,0,3)),cropBag:[...new Set((Array.isArray(n.market?.cropBag)?n.market.cropBag:[]).filter(a=>ii.includes(a)))],openingGrant:Math.floor($e(n.market?.openingGrant,0,0,gt.market))},hydro:{water:$e(n.hydro?.water,100,0,100),nutrients:$e(n.hydro?.nutrients,100,0,100),ph:$e(n.hydro?.ph,6.2,4.5,8),strategy:"balanced",batchMixed:n.hydro?.batchMixed!==!1,mixChecked:n.hydro?.batchMixed===!1?!1:!!n.hydro?.mixChecked,flowChecked:!!n.hydro?.flowChecked,flowCalibrated:!!n.hydro?.flowCalibrated||n.hydro?.strategy==="water-save"||i,systemLessonDone:!!n.hydro?.systemLessonDone||i,batchNumber:Math.floor($e(n.hydro?.batchNumber,1,1,999999)),feedPhase:$e(n.hydro?.feedPhase,0,0,24)%24,lineClogged:!!n.hydro?.lineClogged&&$e(n.chapter,0)>=1,lineRunSeconds:$e(n.hydro?.lineRunSeconds,0,0,360),lineClogAfter:$e(n.hydro?.lineClogAfter,300,240,360),servicedAt:$e(n.hydro?.servicedAt,e,0)},cosmetics:{owned:Array.isArray(n.cosmetics?.owned)?n.cosmetics.owned.filter(a=>lo[a]):[],active:Array.isArray(n.cosmetics?.active)?n.cosmetics.active.filter(a=>lo[a]):[]},tutorial:{...t.tutorial,...n.tutorial||{},coach:wf(n.tutorial?.coach,!n.tutorial?.welcomeSeen&&!n.taskIndex&&!n.stats?.planted)},settings:{soundEnabled:n.settings?.soundEnabled!==!1,highContrast:!!n.settings?.highContrast,reducedMotion:!!n.settings?.reducedMotion,musicVolume:$e(n.settings?.musicVolume,t.settings.musicVolume,0,1),effectsVolume:$e(n.settings?.effectsVolume,t.settings.effectsVolume,0,1)},stats:{...t.stats,...n.stats||{},seedsCollected:Math.floor($e(n.stats?.seedsCollected,0,0)),planted:Math.floor($e(n.stats?.planted,0,0)),transplanted:Math.floor($e(n.stats?.transplanted,0,0)),harvested:Math.floor($e(n.stats?.harvested,0,0)),sold:Math.floor($e(n.stats?.sold,0,0)),orders:Math.floor($e(n.stats?.orders,0,0)),rejectedOrders:Math.floor($e(n.stats?.rejectedOrders,0,0)),serviceActions:Math.floor($e(n.stats?.serviceActions,0,0)),byCropQueued:ns(n.stats?.byCropQueued),byCropHarvested:ns(n.stats?.byCropHarvested),byCropSold:ns(n.stats?.byCropSold),byCropFed:ns(n.stats?.byCropFed)}};if(r.level=rc(r.xp),r.unlockedCrops.includes("lettuce")||r.unlockedCrops.unshift("lettuce"),r.towers=[0,1,2,3].map(a=>{const c=n.towers?.[a]||{};return{...Sf(a),...c,id:`tower-${a}`,built:a===0||!!c.built,repaired:!!c.repaired,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!!c.irrigationUpgraded||$e(n.version,0)<6&&c.queueCapacity===3,queue:Array.isArray(c.queue)?c.queue.map(lh).filter(Boolean).slice(0,4):[]}}),r.beds=[0,1,2,3].map(a=>{const c=n.beds?.[a]||{};return{...Ef(a),...c,id:`bed-${a}`,built:a===0||!!c.built,capacity:Math.floor($e(c.capacity,2,2,4)),soilCharges:Math.floor($e(c.soilCharges,0,0,8)),plants:Array.isArray(c.plants)?c.plants.map(v1).filter(Boolean).slice(0,4):[]}}),n.carry?.kind==="starter"){const a=new Set,c=$t(n.carry).filter(l=>{if(!l||!Object.hasOwn(Pe,l.crop))return!1;const u=l.job?.id;return u&&a.has(u)?!1:(u&&a.add(u),!0)}).slice(0,Mo(r.farm)).map(l=>({crop:l.crop,quality:$e(l.quality,1,.5,1.25),sourceTower:Math.floor($e(l.sourceTower,0,0,3)),sourceLayer:Number.isInteger(l.sourceLayer)&&l.sourceLayer>=0&&l.sourceLayer<4?l.sourceLayer:null,job:lh(l.job)}));r.carry=To(c)}else if(n.carry?.kind==="produce"&&Array.isArray(n.carry.items)){const a=n.carry.items.filter(c=>Pe[c]).slice(0,kt(r).basket);a.length&&(r.carry={kind:"produce",items:a})}gf(r);const s=new Set;r.orders.forEach(a=>{(a.slot===null||s.has(a.slot))&&(a.slot=[0,1,2].find(c=>!s.has(c))),s.add(a.slot)});const o=r.cosmetics.owned.length||r.farm.owned.length||r.towers.some(a=>a.irrigationUpgraded)||r.beds.some(a=>a.capacity>2);if(!r.market.built&&r.taskIndex>=3&&r.coins<gt.market&&!r.market.openingGrant&&o&&(r.market.openingGrant=gt.market-r.coins,r.coins=gt.market),r.hydro.water<=0||!r.hydro.batchMixed){const a=Math.max(0,e-r.savedAt);r.towers.forEach(c=>c.queue.forEach(l=>{l.readyAt>r.savedAt&&(l.readyAt+=a,l.startedAt!==null&&(l.startedAt+=a))})),r.savedAt=e}return _1(r,e,$e(n.version,0)<4),r}function y1(n,e){if(!e||typeof e!="object")return n;const t=Array.isArray(e.completed)?e.completed:[],i=Math.floor($e(e.highestContract,0,0,2));return(t.includes("homestead")||i>=1)&&(n.chapter=1,n.taskIndex=5,n.completedTasks=Dn.slice(0,5).map(r=>r.id),n.coins=150,n.xp=130,n.challengeUnlocked=!0,n.unlockedCrops=["lettuce","basil","tomato"],n.towers[0].repaired=!0,n.market={built:!0,level:1}),(t.includes("split-flow")||i>=2)&&(n.chapter=2,n.taskIndex=10,n.completedTasks=Dn.slice(0,10).map(r=>r.id),n.coins=260,n.xp=330,n.unlockedCrops=["lettuce","basil","tomato","kale","strawberry"],n.towers[1].built=!0,n.towers[1].repaired=!0,n.hydro.systemLessonDone=!0,n.hydro.flowCalibrated=!0,n.towers[2].built=!0,n.towers[2].repaired=!0,n.beds[1].built=!0,n.beds[2].built=!0),t.includes("pro-yard")&&(n.taskIndex=Dn.length,n.completedTasks=Dn.map(r=>r.id),n.coins=420,n.xp=500,n.campaignComplete=!0,n.challengeUnlocked=!0,n.proPip=!0,n.towers.forEach(r=>{r.built=!0,r.repaired=!0}),n.beds.forEach(r=>{r.built=!0}),n.market={built:!0,level:2}),n.level=rc(n.xp),n}function Ru(n=window.localStorage,e=Date.now()){let t=null;try{t=JSON.parse(n.getItem(Co)||"null")}catch{t=null}if(t)return Da(t,e);let i=null;try{i=JSON.parse(n.getItem(g1)||"null")}catch{i=null}return Da(y1(sc(e),i),e)}function b1(n,e=window.localStorage,t=Date.now(),i=()=>{}){const r=Da({...n,savedAt:t},t);try{e.setItem(Co,JSON.stringify(r)),i(!0)}catch{i(!1)}return r}function w1(n=window.localStorage,e=Date.now()){const t=sc(e);try{n.setItem(Co,JSON.stringify(t))}catch{}return t}function si(n){return Dn[n.taskIndex]||null}function ys(n,e,t,i=null){const r=Pe[n];if(e==="bed")return r.bedSeconds*(1-nc(t,n)*.03);let s=r.towerSeconds;return i?.irrigationUpgraded&&(s*=.88),Math.max(3,s)}function Nr(n,e=Date.now()){return gf(n),n.towers.forEach(t=>{t.queue.length&&t.queue.forEach(i=>{(i.startedAt===null||i.readyAt===null)&&(i.startedAt=e,i.readyAt=e+ys(i.crop,"tower",n,t)*1e3)})}),Ny(n,e),n.level=rc(n.xp),n}function M1(n){const e=Object.fromEntries(ii.map(t=>[t,{queued:0,starter:0,garden:0,basket:0,rack:n.rack[t]||0,sold:n.stats.byCropSold[t]||0,fed:n.stats.byCropFed?.[t]||0,accounted:0}]));n.towers.forEach(t=>t.queue.forEach(i=>{e[i.crop].queued+=1}));for(const t of $t(n.carry))e[t.crop].starter+=1;return n.beds.forEach(t=>t.plants.forEach(i=>{e[i.crop].garden+=1})),n.carry?.kind==="produce"&&n.carry.items.forEach(t=>{e[t].basket+=1}),Object.values(e).forEach(t=>{t.accounted=t.queued+t.starter+t.garden+t.basket+t.rack+t.sold+t.fed}),e}const Tf=1024*1024,Af="hydropipFarmBeforeRestore";function ql(n,e=Date.now()){return JSON.stringify({format:"hydropip-farm",backupVersion:1,gameVersion:js,farm:{...n,savedAt:e}},null,2)}function Xl(n,e=Date.now()){if(new TextEncoder().encode(n).length>Tf)throw new Error("Backup exceeds the 1 MB limit.");let t;try{t=JSON.parse(n,(r,s)=>{if(["__proto__","prototype","constructor"].includes(r))throw new Error;if(typeof s=="string"&&/[<>"'&`]/.test(s))throw new Error;if(typeof s=="number"&&!Number.isFinite(s))throw new Error;return s})}catch{throw new Error("This is not a valid HydroPip farm backup.")}if(t?.format!==void 0&&(t.format!=="hydropip-farm"||t.backupVersion!==1))throw new Error("Unsupported backup format.");const i=t?.format==="hydropip-farm"?t.farm:t;if(!i||!Number.isInteger(i.version)||i.version<1||i.version>Cu)throw new Error("Unsupported farm version. Use a backup from this game version or an older one.");if(!Number.isFinite(i.coins)||i.coins<0||!Number.isFinite(i.xp)||i.xp<0||!Number.isInteger(i.taskIndex)||i.taskIndex<0||i.taskIndex>12||!Array.isArray(i.towers)||i.towers.length!==4||!Array.isArray(i.beds)||i.beds.length!==4||!i.seeds||typeof i.seeds!="object"||!i.stats||typeof i.stats!="object")throw new Error("The file is missing required farm data. Your current farm has not changed.");return Da(i,e)}function S1(n,e,t,i=Date.now()){const r=Xl(ql(e,i),i);return n.setItem(Af,ql(t,i)),n.setItem(Co,JSON.stringify(r)),r}function E1(n,e){const t=u=>document.getElementById(u);let i=null,r=0;function s(u,d,h="application/json"){const p=URL.createObjectURL(new Blob([u],{type:h})),g=document.createElement("a");g.href=p,g.download=d,g.click(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}function o(u){t("importStatus").textContent=u}function a(){r++,i=null,t("restoreConfirmation").hidden=!0,t("importFile").value=""}for(const u of document.querySelectorAll("[data-real-build]"))u.href=l1,u.addEventListener("click",()=>ni("build_guide_open",{source:u.dataset.realBuild}));t("gameVersion").textContent=js,t("exportSave").addEventListener("click",()=>s(ql(n()),"hydropip-farm-backup.json")),t("importSave").addEventListener("click",()=>{a(),o(""),t("importFile").click()}),t("importFile").addEventListener("change",async u=>{const d=u.target.files[0];if(!d)return;const h=r;try{if(d.size>Tf)throw new Error("Backup exceeds the 1 MB limit.");const p=await d.text();if(h!==r)return;const g=Xl(p);i=p,t("restoreSummary").textContent=`Replace this farm with Chapter ${g.chapter+1}, ${g.coins} coins, and ${g.homestead.claimed.length} completed projects? A recovery copy of this farm will be retained.`,t("restoreConfirmation").hidden=!1,t("cancelRestore").focus()}catch(p){a(),o(p.message)}}),t("cancelRestore").addEventListener("click",()=>{a(),o("Restore cancelled. Your farm is unchanged.")}),t("confirmRestore").addEventListener("click",()=>{if(i){try{const u=S1(localStorage,Xl(i),n());e(u)}catch{o("Restore could not be completed. Your pre-restore recovery copy is available below if it was saved. Free browser storage and try again.");return}a(),ni("farm_restored"),location.reload()}}),t("exportRecovery").addEventListener("click",()=>{try{const u=localStorage.getItem(Af);if(!u)return o("No previous restore recovery copy is available.");s(u,"hydropip-before-restore.json")}catch{o("Browser storage is unavailable.")}});function c(){const u=n();return`HydroPip game report
Version: ${js}
Chapter: ${u.chapter+1}; task: ${u.taskIndex}
Viewport: ${innerWidth} x ${innerHeight}
Browser: ${navigator.userAgent}

What happened:
${t("reportNotes").value.trim()||"(Please describe what happened.)"}

No saved-farm contents are attached.`}function l(){const u=c();t("reportPreview").textContent=u,t("emailReport").href=`mailto:${ch}?subject=${encodeURIComponent(`HydroPip game report ${js}`)}&body=${encodeURIComponent(u)}`}return t("reportProblem").addEventListener("click",()=>{t("feedbackForm").hidden=!t("feedbackForm").hidden,l()}),t("reportNotes").addEventListener("input",l),t("downloadReport").addEventListener("click",()=>s(c(),"hydropip-game-report.txt","text/plain")),t("emailReport").hidden=!ch,{cancelImport:a}}const uh=new URL(""+new URL("pip-pro-celebration-transparent-IQLOdfWW.webp",import.meta.url).href,import.meta.url).href,dh=new URL(""+new URL("rhythm-dance-5VSp4liT.webp",import.meta.url).href,import.meta.url).href;function T1({balance:n,reducedMotion:e,mobile:t=()=>!1}){const i=document.createElement("div");i.className="reward-effects",i.setAttribute("aria-hidden","true");const r=document.createElement("section");r.className="reward-notice",r.hidden=!0,r.setAttribute("aria-label","Goal celebration");const s=document.createElement("button");s.type="button",s.className="reward-dismiss",s.textContent="×",s.setAttribute("aria-label","Dismiss celebration");const o=document.createElement("img");o.alt="";const a=document.createElement("div");a.className="reward-copy";const c=document.createElement("span"),l=document.createElement("h3"),u=document.createElement("p");a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.append(c,l,u),r.append(s,o,a),document.body.append(i,r);let d;const h=new Set,p=()=>e()||matchMedia("(prefers-reduced-motion: reduce)").matches;function g(R,I,M,y=!1){const E=R.animate(I,M);h.add(E);const N=()=>{h.delete(E),y&&R.remove()};return E.onfinish=N,E.oncancel=N,E}function x(){clearTimeout(d),r.hidden=!0,o.getAnimations().forEach(R=>R.cancel())}s.addEventListener("click",x),document.addEventListener("keydown",R=>{R.key==="Escape"&&x()});function v(){for(const R of h)R.cancel();h.clear(),i.replaceChildren()}document.addEventListener("visibilitychange",()=>{document.hidden&&(v(),x())}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{p()&&v()});function w(R,I){if(!Number.isFinite(R)||R<=0||document.hidden)return;const M=n.getBoundingClientRect(),y={x:M.left+M.width/2,y:M.top+M.height/2},E=Math.max(70,Math.min(innerWidth-70,I?.x??innerWidth/2)),N=Math.max(110,Math.min(innerHeight-100,I?.y??innerHeight/2)),U=document.createElement("strong");if(U.className="reward-coin-label",U.textContent=`+${R.toLocaleString()} coins`,U.style.left=`${E}px`,U.style.top=`${N}px`,i.querySelectorAll(".reward-coin-label").length>=3&&i.querySelector(".reward-coin-label").remove(),i.append(U),p()){setTimeout(()=>U.remove(),1800);return}g(U,[{opacity:1,translate:"0 0"},{opacity:1,offset:.7},{opacity:0,translate:"0 -36px"}],{duration:1700},!0);const P=Math.min(8,Math.max(3,Math.ceil(R/5)),24-i.querySelectorAll(".reward-coin").length);for(let G=0;G<P;G++){const O=document.createElement("i");O.className="reward-coin",O.textContent="P",O.style.left=`${E}px`,O.style.top=`${N}px`,i.append(O);const J=y.x-E,B=y.y-N;g(O,[{transform:"translate(-50%,-50%) scale(.5)",opacity:0},{transform:`translate(${(G-P/2)*13}px,-40px) scale(1)`,opacity:1,offset:.24},{transform:`translate(${J}px,${B}px) scale(.65)`,opacity:1,offset:.9},{transform:`translate(${J}px,${B}px) scale(.2)`,opacity:0}],{duration:1050,delay:G*60,fill:"backwards",easing:"cubic-bezier(.25,.6,.4,1)"},!0)}n.getAnimations().forEach(G=>G.cancel()),g(n,[{color:"#ffe678",scale:"1"},{color:"#ffe678",scale:"1.2",offset:.55},{scale:"1"}],{duration:550,delay:850})}function b(){if(p()||document.hidden)return;i.querySelectorAll(".reward-confetti").forEach(I=>{I.getAnimations().forEach(M=>M.cancel()),I.remove()});const R=t()||innerWidth<620?22:42;for(let I=0;I<R;I++){const M=document.createElement("i");M.className="reward-confetti",M.style.left=`${8+Math.random()*84}%`,M.style.background=["#ffd454","#f4778b","#66d9db","#bde875","#fff6d9"][I%5],i.append(M),g(M,[{transform:"translateY(-30px) rotate(0deg)",opacity:0},{opacity:1,offset:.12},{opacity:1,offset:.7},{transform:`translate(${(Math.random()-.5)*180}px,${innerHeight*.8}px) rotate(${I%2?540:-540}deg)`,opacity:0}],{duration:2200+Math.random()*600,delay:Math.random()*350,fill:"backwards"},!0)}}function _(R){p()||g(R,[{transform:"rotate(-8deg) translateY(0)"},{transform:"rotate(14deg) translateY(-12px)",offset:.25},{transform:"rotate(-12deg) translateY(-4px)",offset:.5},{transform:"rotate(8deg) translateY(-10px)",offset:.75},{transform:"rotate(-8deg) translateY(0)"}],{duration:1250,iterations:3,easing:"ease-in-out"})}function A({title:R,detail:I,major:M=!1,rhythm:y=!1}){t()&&!M||document.hidden||(x(),r.classList.toggle("is-major",M),c.textContent=M?"Homestead milestone!":"Goal complete!",l.textContent=R,u.textContent=I,o.src=y?dh:uh,r.hidden=!1,M&&b(),y?_(o):p()||g(o,[{transform:"scale(.8)"},{transform:"scale(1.06)",offset:.7},{transform:"scale(1)"}],{duration:450}),d=setTimeout(x,t()?3500:M?6500:3600))}function C(R,I){x();const M=R.querySelector(".chapter-reward-art img");M.getAnimations().forEach(y=>y.cancel()),M.src=I?dh:uh,M.alt=I?"Rhythm Pip in his breakdance freeze with a boombox":"Pro Pip cheering with confetti",I&&_(M),b()}return{coins:w,celebrate:A,chapter:C,dismiss:x,clearMotion:v}}const wa=24,uo=6,Ua=30,A1=.01;function oc(n){return n.towers.filter(e=>e.built&&e.repaired).reduce((e,t)=>e+t.queue.length,0)}function Ro(n){const e=n.hydro;return{water:e.water<=Ua,mix:e.water>0&&!e.mixChecked,check:Fn(n)&&e.mixChecked&&!e.flowChecked&&!e.lineClogged&&n.towers.some(t=>t.built)&&!n.towers.some(t=>t.built&&!t.repaired)}}function Cf(n){if(!n.hydro.water)return"Stopped: tank empty";if(!Fn(n))return"Stopped: circulate batch";if(!oc(n))return"Idle: towers empty";const e=n.hydro.feedPhase||0;return e<uo?`${n.hydro.lineClogged?"Restricted feed":"Feeding towers"} / ${Math.ceil(uo-e)}s`:`Next feed in ${Math.ceil(wa-e)}s`}function Fn(n){return n.hydro.water>0&&n.hydro.batchMixed!==!1}function hh(n){return Fn(n)&&n.hydro.flowCalibrated&&!n.hydro.lineClogged}function C1(n){return Fn(n)&&(n.hydro.feedPhase||0)<uo&&oc(n)>0}function R1(n,e){const t=n.hydro;if(!Ro(n)[e])return!1;if(e==="water"){if(t.water>Ua)return!1;t.water=100,t.batchMixed=!1,t.mixChecked=!1,t.flowChecked=!1,t.feedPhase=0,t.batchNumber=(t.batchNumber||1)+1}else if(e==="mix"){if(t.water<=0||t.mixChecked)return!1;t.batchMixed=!0,t.mixChecked=!0}else if(e==="check"){if(!Fn(n)||!t.mixChecked||t.flowChecked||t.lineClogged||!n.towers.some(i=>i.built)||n.towers.some(i=>i.built&&!i.repaired))return!1;t.flowChecked=!0,t.flowCalibrated=!0,t.systemLessonDone=!0}else return!1;return!0}function P1(n,e,t=Date.now(),i=1){const r=Math.max(0,Math.min(1,e)),s=n.towers.filter(u=>u.built&&u.repaired).flatMap(u=>u.queue);if(!s.length||!r)return;if(!Fn(n)){s.filter(u=>u.readyAt>t-r*1e3).forEach(u=>{u.readyAt+=r*1e3,u.startedAt!==null&&(u.startedAt+=r*1e3)});return}const o=n.hydro,a=o.feedPhase||0,c=u=>Math.floor(u/wa)*uo+Math.min(u%wa,uo),l=c(a+r)-c(a);o.feedPhase=(a+r)%wa,o.water=Math.max(0,o.water-l*A1*s.length*i*(o.lineClogged?.5:1))}const Gt=(n,e,t,i,r="",s={})=>({id:n,title:e,text:t,target:i,selector:r,...s}),is=n=>`[data-command="${n}"]`;function fh(n,e=Date.now()){const t=Gl(n);if(["sale","expansion","upgrade"].every(g=>t.includes(g)))return Gt("complete","The farm is yours!","You grew, sold, and expanded. More projects are waiting in Goals.",null,"",{complete:!0});if(!n.towers[0].repaired)return Gt("repair","Let's bring this farm to life","Repair Tower 1. The first repair is free.","tower-0",is("repair-tower-0"));const i=n.beds.findIndex(g=>g.built&&g.plants.length<g.capacity);if(n.carry?.kind==="starter")return i>=0?Gt("transplant","Next stop: the garden","Transplant this starter into a bed. It needs to finish growing in soil before we can sell it.",`bed-${i}`,is(`transplant-${i}`)):Gt("return","No garden space yet","Return this starter to its tower, then harvest a finished bed to make room.",`tower-${n.carry.sourceTower}`,is(`return-${n.carry.sourceTower}`));const r=n.carry?.kind==="produce"?n.carry.items:[],s=n.orders.filter(g=>g.status==="waiting"),o=s.find(g=>r.filter(x=>x===g.crop).length>=g.amount);if(r.length){if(t.includes("stage")&&o)return Gt("sell","Meet your customer",`Take ${o.amount} ${Pe[o.crop].label} to ${o.customer}. This is where your harvest earns coins.`,"market","",{orderId:o.id,action:"Deliver"});if(!t.includes("stage")||!o)return Gt("stage","Make room in your basket","Store your harvest on the rack. It stays there until a customer wants it, and your hands are free for starters.","rack",`[data-store-crop="${r[0]}"]`)}if(!Fn(n)){const x=Ro(n).water?"water":"mix";return Gt("service","Our towers need water and feed",x==="water"?"Refill the shared reservoir, then mix its nutrients before planting more.":"Mix nutrients into the shared reservoir. It feeds every tower together.","reservoir",`[data-service="${x}"]`)}if(n.hydro.lineClogged)return Gt("filter","Let's restore the flow","Clear the feed filter so water can reach the towers properly.","filter","[data-flush-line]");const a=n.beds.findIndex(g=>g.built&&g.plants.some(x=>x.readyAt<=e));if(a>=0&&r.length<kt(n).basket){const g=n.beds[a].plants.find(x=>x.readyAt<=e);return Gt("harvest","Ready for the basket",`Harvest the finished ${Pe[g.crop].label}. Garden produce can be stored or sold.`,`bed-${a}`,`[data-harvest-crop="${g.crop}"]`)}const c=n.towers.findIndex(g=>g.built&&lr(g,e));if(c>=0){if(i>=0){const x=lr(n.towers[c],e);return Gt("pickup","A starter is ready!","Pick up one starter from the tower. Each planted layer becomes one garden crop.",`tower-${c}`,`[data-pickup-job="${x.id}"]`)}const g=n.beds.findIndex(x=>x.built&&x.plants.length);return Gt("beds-full","The garden is full","Leave starters in their towers for now. Harvest a bed when its crops finish, then transplant another starter.",`bed-${Math.max(0,g)}`,"",{waiting:!0})}if(t.includes("expansion")&&!t.includes("upgrade")&&n.coins>=gt.bedUpgrade[0])return Gt("upgrade","Invest in a bigger garden",`Buy Bed 1's extra plot for ${gt.bedUpgrade[0]} coins at the Farm Shop. Your second tower unlocked this upgrade.`,"workshop",is("upgrade-bed-0"));if(n.taskIndex===3&&!n.market.built&&n.coins>=gt.market)return Gt("market","Let's open for business",`Build the produce table for ${gt.market} coins. Customers will start visiting.`,"market",is("build-market"));if(n.taskIndex===5&&!n.towers[1].built&&n.coins>=gt.tower[1])return Gt("expansion","Your first expansion",`Build Tower 2 for ${gt.tower[1]} coins. It also opens a second garden bed.`,"tower-1",is("build-tower-1"));const l=On(n)||s.find(g=>bn(n,g,e).load)||s[0];if(l&&bn(n,l,e).load)return Gt("load","Someone wants your harvest",`Collect ${Pe[l.crop].label} from the rack for ${l.customer}, then deliver it in person.`,"rack","",{orderId:l.id,action:"Collect order"});if(n.market.built&&!l)return Gt("customers","The next neighbor is on the way","Customers visit in waves. Your rack keeps the harvest safe between visits.","market","",{waiting:!0});let u=l?.crop||"lettuce",d=l?Math.max(1,l.amount-bn(n,l,e).stored):2;!n.market.built&&n.taskIndex>=2&&(u=n.stats.byCropHarvested.lettuce>=2?"basil":"lettuce",d=Math.max(1,2-n.stats.byCropHarvested[u]));const h=[];if(n.towers.forEach((g,x)=>g.queue.filter(v=>v.crop===u).forEach(v=>h.push({target:`tower-${x}`,...v}))),n.beds.forEach((g,x)=>g.plants.filter(v=>v.crop===u).forEach(v=>h.push({target:`bed-${x}`,...v}))),h.length>=d||h.length&&i<0){const g=h.sort((x,v)=>x.readyAt-v.readyAt)[0];return Gt("growing","Let those roots grow",g.target.startsWith("tower")?`${Pe[u].label} is growing in the tower. When its layer is ready, we'll move it to soil.`:`${Pe[u].label} is finishing in the bed. The harvest button lights up when it's ready.`,g.target,"",{waiting:!0})}const p=n.towers.findIndex((g,x)=>g.built&&g.repaired&&Ao(g,n.carry,x).length);if(p<0)return Gt("tower-full","All layers are planted","Wait for a starter, then move it to an open garden bed. No more seeds are needed yet.","tower-0","",{waiting:!0});if(!n.seeds[u]){const g=ic(n,u);return!g.available&&Au(n)?Gt("rescue","Bram can lend a hand","Claim the free emergency lettuce packet. Grow and sell it to get back on your feet.","vault","[data-rescue-seeds]"):g.available?Gt("seeds","Visit Bram's seed shop",g.tutorial?`Claim your first ${Pe[u].label} packet for free under the BUY SEEDS sign. The seeds go into your vault.`:`Buy ${Pe[u].label} seeds for ${g.price} coins. Bram puts the packet in your vault.`,"vault",`[data-collect-crop="${u}"]`):Gt("seed-budget","Let's use what we have",`${g.reason}. Sell stored or growing produce before buying more packets.`,"market")}return Gt("plant","Plant a tower layer",`Choose ${Pe[u].label} at Tower ${p+1}. One seed fills one layer with four leafy pots.`,`tower-${p}`,`[data-queue-crop="${u}"]`)}function L1({host:n,getState:e,save:t,focus:i,pursue:r,visible:s}){const o=document.createElement("aside");o.id="pipCoach",o.className="pip-coach",o.hidden=!0,o.setAttribute("aria-label","Pip's first grow"),o.innerHTML=`<img src="${new URL(""+new URL("pip-mascot-transparent-DujOxSaL.webp",import.meta.url).href,import.meta.url).href}" alt="Pip"><div class="coach-copy" aria-live="polite" aria-atomic="true"><span>PIP'S FIRST GROW</span><strong id="coachTitle"></strong><p id="coachText"></p></div><button id="coachMinimize" class="coach-close" type="button" title="Minimize Pip's help" aria-label="Minimize Pip's help">&#215;</button><div class="coach-actions"><button id="coachGo" type="button">Show me</button><button id="coachSkip" type="button">Skip guide</button></div><div class="coach-confetti" aria-hidden="true">${Array.from({length:8},(b,_)=>`<i style="--piece:${_}"></i>`).join("")}</div>`;const a=document.createElement("button");a.id="coachBubble",a.className="coach-bubble",a.type="button",a.hidden=!0,a.title="Resume Pip's help",a.setAttribute("aria-label","Resume Pip's help"),a.innerHTML=`<img src="${new URL(""+new URL("pip-head-transparent-CKWFf6EM.webp",import.meta.url).href,import.meta.url).href}" alt="">`,n.append(o,a);const c=o.querySelector("#coachTitle"),l=o.querySelector("#coachText"),u=o.querySelector("#coachGo");let d=null,h=null,p=0,g="",x="",v=!1;function m(){e().tutorial.coach.enabled=!1,h=null,t("coach_skip"),w()}o.querySelector("#coachSkip").onclick=m,o.querySelector("#coachMinimize").onclick=()=>{e().tutorial.coach.minimized=!0,t("coach_minimize"),w()},a.onclick=()=>{e().tutorial.coach.minimized=!1,t("coach_resume"),w()},u.onclick=()=>{if(d=fh(e()),d.complete)return m();v=!0,d.orderId?r(d.orderId):d.target&&i(d.target),w()};function w(){const b=e(),_=b.tutorial.coach,A=_.enabled&&s();if(o.hidden=!A||_.minimized,a.hidden=!A||!_.minimized,n.classList.toggle("has-pip-coach",!o.hidden),document.querySelectorAll(".coach-target").forEach(y=>y.classList.remove("coach-target")),!_.enabled)return;const R=Gl(b).filter(y=>!_.seen.includes(y));if(R.length&&(_.seen=[...new Set([..._.seen,...R])],A&&!_.minimized&&(h=Tu[R.at(-1)],p=performance.now()+1800),t("coach_milestone")),!A)return;d=fh(b);const I=h&&performance.now()<p;o.classList.toggle("is-celebrating",!!I),o.classList.toggle("reduce-motion",b.settings.reducedMotion),o.dataset.step=d.id;const M=I?h:d.title;if(M!==g&&(c.textContent=M,g=M),d.text!==x&&(l.textContent=d.text,x=d.text),u.textContent=d.complete?"Keep growing":d.action||(d.waiting?"Take a look":"Show me"),!o.hidden&&d.selector){const y=[...document.querySelectorAll(d.selector)].find(E=>!E.disabled&&E.getClientRects().length&&!E.closest("[hidden]"));y&&(y.classList.add("coach-target"),v&&(y.scrollIntoView({block:"nearest",behavior:"instant"}),v=!1))}}return{update:w,enable(){const b=e();b.tutorial.coach.enabled=!0,b.tutorial.coach.minimized=!1,b.tutorial.coach.seen=[...new Set([...b.tutorial.coach.seen,...Gl(b)])],h=null,t("coach_enabled"),w()},disable:m}}function I1({urls:n,settings:e,canPlay:t,onSystemMute:i}){const r=new Map,s=new Set,o=new WeakMap;let a=document.hidden;const c=()=>!a&&!document.hidden&&t()&&e().soundEnabled!==!1;function l(m){m.muted=!0,m.pause(),o.delete(m)}function u(){r.forEach(l),s.forEach(l),s.clear(),navigator.mediaSession&&(navigator.mediaSession.playbackState="paused")}function d(m,w,b=!1){if(!c()||w<=0)return l(m);if(m.volume=w,m.muted=!1,!m.paused||o.has(m))return;const _={};o.set(m,_),Promise.resolve(m.play()).then(()=>{if(!c()||m.muted||(b?e().musicVolume:e().effectsVolume)<=0)return l(m);o.get(m)===_&&(o.delete(m),b&&navigator.mediaSession&&(navigator.mediaSession.playbackState="playing"))}).catch(()=>{o.get(m)===_&&(l(m),s.delete(m))})}function h(){if(!(!c()||e().musicVolume<=0))for(const[m,w]of[["music",1],["ambience",.56]]){if(!r.has(m)){const b=new Audio(n[m]);b.loop=!0,r.set(m,b)}d(r.get(m),e().musicVolume*w,!0)}}function p(m){if(!c()||e().effectsVolume<=0||!n[m])return;if(s.size>=12){const b=s.values().next().value;l(b),s.delete(b)}const w=new Audio(n[m]);s.add(w),w.addEventListener("ended",()=>s.delete(w),{once:!0}),w.addEventListener("error",()=>{l(w),s.delete(w)},{once:!0}),d(w,e().effectsVolume)}function g(){if(!c())return u();r.forEach((m,w)=>{e().musicVolume<=0?l(m):m.volume=e().musicVolume*(w==="music"?1:.56)}),s.forEach(m=>{e().effectsVolume<=0?(l(m),s.delete(m)):m.volume=e().effectsVolume})}function x(){a=!0,u()}function v(){a=document.hidden}window.addEventListener("blur",x),window.addEventListener("pagehide",x),document.addEventListener("freeze",x),window.addEventListener("focus",v),window.addEventListener("pageshow",v),document.addEventListener("visibilitychange",()=>document.hidden?x():v());for(const m of["pause","stop"])try{navigator.mediaSession?.setActionHandler(m,()=>{u(),i()})}catch{}return{start:h,effect:p,update:g,stop:u}}const Rf=matchMedia("(max-width: 620px), (pointer: coarse) and (max-width: 1200px), (pointer: coarse) and (max-height: 600px)"),_t=()=>Rf.matches;document.body.classList.toggle("mobile-ui",_t());function D1({canMove:n,onStart:e,onMove:t,onLayout:i,closePanels:r}){const s=document.getElementById("thumbstick"),o=s.querySelector("i");let a=null;function c(){const d=a;a=null,d!==null&&s.hasPointerCapture(d)&&s.releasePointerCapture(d),o.style.transform="translate(0px, 0px)",s.classList.remove("is-active"),t(0,0)}function l(d){if(d.pointerId!==a)return;if(!n())return c();const h=s.getBoundingClientRect(),p=h.width*.3,g=d.clientX-h.left-h.width/2,x=d.clientY-h.top-h.height/2,v=Math.hypot(g,x),m=v>p?p/v:1;o.style.transform=`translate(${g*m}px, ${x*m}px)`;const w=Math.min(1,Math.max(0,(v/p-.12)/.88));t(v?g/v*w:0,v?x/v*w:0)}s.addEventListener("pointerdown",d=>{a!==null||!n()||!_t()||(d.preventDefault(),e(),a=d.pointerId,s.setPointerCapture(a),s.classList.add("is-active"),l(d))}),s.addEventListener("pointermove",l);for(const d of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(d,h=>{h.pointerId===a&&c()});s.addEventListener("contextmenu",d=>d.preventDefault());for(const d of document.querySelectorAll(".task-drawer,.interaction-panel,.order-drawer")){let h=null;d.addEventListener("pointerdown",p=>{!_t()||!p.target.closest("header")||p.target.closest("button")||(h={id:p.pointerId,x:p.clientX,y:p.clientY},d.setPointerCapture(p.pointerId))}),d.addEventListener("pointerup",p=>{if(!h||h.id!==p.pointerId)return;const g=p.clientX-h.x,x=p.clientY-h.y;(innerWidth>620&&innerWidth>innerHeight?g>55&&g>Math.abs(x):x>45&&x>Math.abs(g))&&r(),h=null}),d.addEventListener("pointercancel",()=>{h=null})}function u(){c(),document.body.classList.toggle("mobile-ui",_t()),i()}return Rf.addEventListener("change",u),window.addEventListener("resize",u),window.visualViewport?.addEventListener("resize",u),{reset:c}}function U1({onOpen:n,onExit:e,onLeave:t,onResize:i}){const r=oe=>document.getElementById(oe),s=r("displayOverlay"),o=r("fullscreenButton"),a=r("exitFullscreen"),c=r("landscapeNotice"),l=matchMedia("(orientation: landscape)"),u=matchMedia("(display-mode: standalone), (display-mode: fullscreen)"),d=()=>navigator.standalone===!0||u.matches&&!document.fullscreenElement,h=()=>document.fullscreenEnabled===!0&&typeof document.documentElement.requestFullscreen=="function";let p=null,g=null,x=null,v=!1,m=!1,w=!1,b="",_=!1,A=null,C=!1,R=!1,I="",M=null;const y=[...document.querySelectorAll("[data-install-game]")],E=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;let N=!1;try{N=sessionStorage.getItem("hydropipLandscapeHint")==="seen"}catch{}function U(){c.hidden=!0,clearTimeout(x)}function P(){const oe=d(),ze=h(),je=!oe&&(_||!ze);if(r("displayTitle").textContent=oe?"App view":"Landscape play",r("displayMessage").textContent=b||(oe?"The game is already open without browser bars.":ze?l.matches?"Landscape is ready for full screen.":"Rotate your phone to landscape for the widest farm view.":"This browser cannot put the whole game into full screen. Landscape still gives you more room."),r("displayInstructions").textContent=oe?"Rotate upright to pause and save. Use the app switcher to close this app, or choose Return to HydroPip from Pause.":ze?"Tap Full screen after rotating. Rotate upright to pause and exit full screen, or use the exit button at any time.":"On iPhone: open this game in Safari, tap Share, then Add to Home Screen. Turn on Open as Web App if offered, and launch the new icon. Rotate upright to pause; use the app switcher to close it.",r("enterFullscreen").hidden=oe||!ze,r("enterFullscreen").disabled=v||_t()&&!l.matches,r("displaySaveNote").hidden=oe||ze,r("displayBackup").hidden=oe||ze,r("installSteps").hidden=!je||R,r("installGame").hidden=!je||!A||R,r("installGame").disabled=C,r("keepWindowed").textContent=M?"Back":"Keep playing here",je){r("displayTitle").textContent="Add HydroPip",r("displayMessage").textContent=I||"Keep Pip on your Home Screen. No App Store needed.",r("displayInstructions").textContent=R?"Open the new HydroPip icon on your Home Screen or in your apps.":E?"On iPhone, use Safari to Add to Home Screen.":A?"Your browser can install HydroPip. Confirm the next browser prompt.":"Use your browser menu to Install app or Add to Home Screen. If neither appears, open this game in Safari on iPhone or Chrome on Android.";const $=E?["Open this game in Safari, then tap Share.","Choose Add to Home Screen. Turn on Open as Web App if offered.","Tap Add, then open the HydroPip icon."]:A?["Tap Install game below, then confirm Install.","Open the HydroPip icon."]:["Open the browser menu.","Choose Install app or Add to Home Screen, then confirm."];r("installSteps").replaceChildren(...$.map(xe=>{const he=document.createElement("li");return he.textContent=xe,he})),r("displaySaveNote").hidden=R,r("displayBackup").hidden=R,r("enterFullscreen").hidden=!0}}function G(){U(),s.hidden&&(g=document.activeElement,p=n()),s.hidden=!1,P(),r("closeDisplay").focus()}function O(oe=!0){s.hidden||(s.hidden=!0,M&&(M.hidden=!1,M=null),p?.(),p=null,oe&&g?.isConnected&&g.focus())}function J(){m=!1,O(!1),U(),e()}async function B(){if(!v){if(!h()||d()||_t()&&!l.matches){b="",G();return}v=!0;try{await document.documentElement.requestFullscreen({navigationUI:"hide"}),b="",O(),U(),re()}catch{b="Full screen was not allowed. You can keep playing here, or try again from your browser.",G()}finally{v=!1,s.hidden||P()}}}async function Z(){if(J(),document.fullscreenElement)try{await document.exitFullscreen()}catch{b="Use your browser full-screen exit control to return.",G()}}function re(){const oe=!!document.fullscreenElement,ze=d();y.forEach(He=>{He.hidden=ze||R,He.textContent=A?"Install HydroPip":"Add to Home Screen"}),document.body.classList.toggle("is-app-window",oe||ze),o.hidden=oe||ze,a.hidden=!oe&&!ze,a.setAttribute("aria-label",oe?"Exit full screen and pause":"Pause and leave game"),a.title=oe?"Exit full screen and pause":"Pause and leave game",o.textContent=oe||ze?"×":"⛶";const je=oe?"Exit full screen and pause":ze?"Pause and leave game":"Full screen options";o.setAttribute("aria-label",je),o.title=je,o.setAttribute("aria-pressed",String(oe));const $=document.activeElement?.matches("input,textarea,select");_t()&&!$&&(oe||ze)&&l.matches&&(m=!0);const xe=_t()&&!$&&!l.matches&&m,he=w&&!oe;w=oe,xe?Z():he&&J(),s.hidden||P(),c.hidden||(r("landscapeNoticeText").textContent=l.matches?h()?"Tap for full screen. Rotate upright to pause.":"Landscape play. View full-screen options.":"Rotate for a wider farm."),requestAnimationFrame(i)}y.forEach(oe=>oe.addEventListener("click",()=>{_=!0,b="",I="",M=oe.closest(".modal-overlay"),G(),M&&(M.hidden=!0)})),window.addEventListener("beforeinstallprompt",oe=>{oe.preventDefault(),A=oe,re()}),window.addEventListener("appinstalled",()=>{R=!0,A=null,I="HydroPip is installed.",re()}),r("installGame").addEventListener("click",async()=>{if(!A||C)return;const oe=A;A=null,C=!0;try{I=(await oe.prompt()||await oe.userChoice)?.outcome==="accepted"?"Install accepted. Look for the HydroPip icon when your browser finishes.":"Not installed. You can keep playing here and add it later."}catch{I="Installation could not open. Use the browser menu, or keep playing here."}finally{C=!1,re()}});function me(){if(!(N||!_t()||document.hidden||document.querySelector(".modal-overlay:not([hidden])"))){N=!0;try{sessionStorage.setItem("hydropipLandscapeHint","seen")}catch{}d()||(c.hidden=!1,re(),x=setTimeout(U,7e3))}}o.addEventListener("click",()=>{_=!1,document.fullscreenElement||d()?Z():B()}),a.addEventListener("click",()=>{Z()}),r("landscapeOptions").addEventListener("click",()=>{_=!1,B()}),r("dismissLandscapeNotice").addEventListener("click",U),r("enterFullscreen").addEventListener("click",()=>{B()}),r("closeDisplay").addEventListener("click",()=>O()),r("keepWindowed").addEventListener("click",()=>O()),r("displayBackup").addEventListener("click",()=>{O(!1),r("settingsOverlay").hidden&&r("settingsButton").click(),r("exportSave").scrollIntoView({block:"center"}),r("exportSave").focus()}),r("leaveGame").addEventListener("click",t),r("beginCampaign").addEventListener("click",me),document.addEventListener("fullscreenchange",re),l.addEventListener("change",re),u.addEventListener("change",re),window.addEventListener("resize",re),document.addEventListener("visibilitychange",()=>{document.hidden&&U()}),document.addEventListener("keydown",oe=>{if(!s.hidden&&(oe.key==="Escape"&&(oe.preventDefault(),oe.stopImmediatePropagation(),O()),oe.key==="Tab")){const ze=[...s.querySelectorAll("button:not(:disabled),a[href]")].filter(xe=>xe.getClientRects().length),je=ze[0],$=ze.at(-1);oe.shiftKey&&document.activeElement===je?(oe.preventDefault(),$.focus()):!oe.shiftKey&&document.activeElement===$&&(oe.preventDefault(),je.focus())}},!0),re(),requestAnimationFrame(me)}function k1(n,e,t=Date.now()){if(n.chapter<1)return!1;const i=n.towers.filter(o=>o.built&&o.repaired).flatMap(o=>o.queue.filter(a=>a.readyAt>t));if(!i.length)return!1;const r=Math.max(0,Math.min(e,1)),s=n.hydro;return s.lineClogged?(i.forEach(o=>{o.readyAt+=r*500}),!1):(s.lineRunSeconds+=r,s.lineRunSeconds<s.lineClogAfter?!1:(s.lineClogged=!0,!0))}function N1(n,e=Math.random){return n.hydro.lineClogged?(n.hydro.lineClogged=!1,n.hydro.lineRunSeconds=0,n.hydro.lineClogAfter=240+Math.floor(e()*121),!0):!1}const Pf=["127.0.0.1","localhost"].includes(location.hostname)&&new URLSearchParams(location.search).has("test"),ho=Pf&&!new URLSearchParams(location.search).has("realtime")?.012:1,Cs=_t(),Po=/HeadlessChrome/i.test(navigator.userAgent),O1={"seed-pickup":new URL(""+new URL("seed-pickup-CAHmd7zc.wav",import.meta.url).href,import.meta.url).href,plant:new URL(""+new URL("plant-OZHmKUrR.wav",import.meta.url).href,import.meta.url).href,pickup:new URL(""+new URL("pickup-BP6zBWsE.wav",import.meta.url).href,import.meta.url).href,transplant:new URL(""+new URL("transplant-ByuaeTUQ.wav",import.meta.url).href,import.meta.url).href,harvest:new URL(""+new URL("harvest-BPj-n7q9.wav",import.meta.url).href,import.meta.url).href,rack:new URL(""+new URL("rack-BXIXSV4Z.wav",import.meta.url).href,import.meta.url).href,return:new URL(""+new URL("return-B7_saD0o.wav",import.meta.url).href,import.meta.url).href,sale:new URL(""+new URL("sale-DHHLIj-t.wav",import.meta.url).href,import.meta.url).href,repair:new URL(""+new URL("repair-BH8WY1JO.wav",import.meta.url).href,import.meta.url).href,build:new URL(""+new URL("build-DlE-ni3d.wav",import.meta.url).href,import.meta.url).href,"level-up":new URL(""+new URL("level-up-Cr_FX5st.wav",import.meta.url).href,import.meta.url).href,"task-complete":new URL(""+new URL("task-complete-kxblrCmv.wav",import.meta.url).href,import.meta.url).href,"chapter-complete":new URL(""+new URL("chapter-complete-B0bpPvE9.wav",import.meta.url).href,import.meta.url).href,error:new URL(""+new URL("error-BplsGajU.wav",import.meta.url).href,import.meta.url).href,"order-reject":new URL(""+new URL("order-reject-w7AxRbDQ.wav",import.meta.url).href,import.meta.url).href,service:new URL(""+new URL("service-DnymfeYl.wav",import.meta.url).href,import.meta.url).href,music:new URL(""+new URL("garden-loop-_0sf0c8-.wav",import.meta.url).href,import.meta.url).href,ambience:new URL(""+new URL("farm-ambient-BpMfQsJu.wav",import.meta.url).href,import.meta.url).href},te=n=>document.querySelector(n),on=te("#campaignScene"),F1=te("#farmStage"),ac=te("#objectiveBar"),oi=te("#taskDrawer"),Bn=te("#homesteadDrawer"),ai=te("#interactionPanel"),hn=te("#interactionContent"),fn=te("#orderDrawer"),Mn=te("#welcomeOverlay"),B1=te("#pauseOverlay"),an=te("#chapterOverlay"),Si=te("#settingsOverlay"),Or=te("#resetOverlay"),Rs=te("#actionButton"),Ar=te("#marketChip"),fo=te("#campaignMessage"),Lf=te("#carryChip"),Ce={coins:te("#coinValue"),level:te("#levelValue"),xp:te("#xpValue"),xpFill:te("#xpFill"),chapter:te("#chapterValue"),objectiveChapter:te("#objectiveChapter"),objectiveTitle:te("#objectiveTitle"),objectiveProgress:te("#objectiveProgress"),taskChapter:te("#taskChapter"),taskTitle:te("#taskTitle"),taskStory:te("#taskStory"),primaryTaskTitle:te("#primaryTaskTitle"),primaryTaskDetail:te("#primaryTaskDetail"),primaryTaskReward:te("#primaryTaskReward"),chapterTaskList:te("#chapterTaskList"),interactionKicker:te("#interactionKicker"),interactionTitle:te("#interactionTitle"),interactionSummary:te("#interactionSummary"),orderList:te("#orderList"),rackSummary:te("#rackSummary"),carryKind:te("#carryKind"),carryContents:te("#carryContents"),chapterResultKicker:te("#chapterResultKicker"),chapterResultTitle:te("#chapterResultTitle"),chapterResultSummary:te("#chapterResultSummary"),chapterCoins:te("#chapterCoins"),chapterXp:te("#chapterXp"),chapterUnlock:te("#chapterUnlock"),musicValue:te("#musicValue"),effectsValue:te("#effectsValue"),marketChipCustomer:te("#marketChipCustomer"),marketChipDemand:te("#marketChipDemand")},tt={vault:new D(-11,0,-5),reservoir:new D(-11,0,2.6),filter:new D(-9,0,4.5),market:new D(11,0,-4.4),rack:new D(8,0,-5),workshop:new D(11,0,5),composter:new D(-7,0,6.9),coop:new D(2,0,6.9),rainTank:new D(-12,0,6.5),"tower-0":new D(-7,0,2.4),"tower-1":new D(-3,0,2.4),"tower-2":new D(1,0,2.4),"tower-3":new D(5,0,2.4),"bed-0":new D(-7,0,-3.2),"bed-1":new D(-3,0,-3.2),"bed-2":new D(1,0,-3.2),"bed-3":new D(5,0,-3.2)};let f=Nr(Ru());const yi=T1({balance:Ce.coins,reducedMotion:()=>f.settings.reducedMotion,mobile:_t});let If=null;const ka={x:0,z:0};let Na=!1;const Oa=t1(Bn,Pe,cp);let Rt=!1,zt=null,mi=null,$n=null,gi=null;const Ks=[],Yc=new Map,Ni=e1;let ph=performance.now(),mh=0,Df=performance.now(),Ma=0,Ws=null;const Bi=I1({urls:O1,settings:()=>f.settings,canPlay:()=>!Rt&&Mn.hidden&&Si.hidden&&an.hidden&&Or.hidden,onSystemMute:()=>{f.settings.soundEnabled=!1,Ps(),qe("system_mute")}});let ei=1,da=new D(0,0,0),po=[],qn=1,Tn=1,Yl=null,Uf="",Fa=Po?"software-test":Cs?"mobile":"desktop",jc=performance.now(),Kc=0;const _n={left:!1,right:!1,up:!1,down:!1},Js=[],Ba=L1({host:F1,getState:()=>f,save:qe,focus:Kt,pursue:Zf,visible:()=>!Rt&&f.tutorial.welcomeSeen&&Mn.hidden&&an.hidden&&Si.hidden&&Or.hidden&&oi.hidden&&Bn.hidden});let gh=0;const wt=new by({antialias:!Cs&&!Po,powerPreference:"high-performance"});wt.setPixelRatio(Math.min(window.devicePixelRatio||1,Po?1:Cs?1.25:1.55));wt.outputColorSpace=nn;wt.toneMapping=bh;wt.toneMappingExposure=1.08;wt.shadowMap.enabled=!Cs&&!Po;wt.shadowMap.type=_h;on.appendChild(wt.domElement);const za=document.createElement("div");za.className="world-labels";on.appendChild(za);const Ha=document.createElement("canvas").getContext("2d"),ri=new du;ri.background=new ot(10475727);ri.fog=new uu(10475727,28,58);const Ct=new En(35,1,.1,80),Jc=new Zh,Zc=new ge,sn=new Re,mt=new Re,Ir=new Re;ri.add(sn,mt,Ir);const cs=Py();sn.add(cs.root);function Xt(n,e={}){return new Xn({color:n,...e})}const le={grass:Xt(16777215),grassDark:Xt(5405027),path:Xt(13223602),soil:Xt(8014385),wood:Xt(10123101),woodDark:Xt(5720899),white:Xt(15922411),shell:Xt(14411490),dark:Xt(1055253),lime:Xt(13168479),amber:Xt(16762954),water:new Wi({color:6542566,roughness:.18,metalness:.02,transparent:!0,opacity:.78}),coral:Xt(15823190),metal:Xt(11453113),ink:new Ft({color:729368,side:yn})},z1=new xu(15398143,4742736,.95);ri.add(z1);const ci=new ja(16772559,1.45);ci.position.set(-8,16,9);ci.castShadow=wt.shadowMap.enabled;ci.shadow.mapSize.set(1024,1024);ci.shadow.camera.left=-14;ci.shadow.camera.right=14;ci.shadow.camera.top=11;ci.shadow.camera.bottom=-11;ci.shadow.bias=-7e-4;ri.add(ci);const kf=new ja(12049640,.35);kf.position.set(11,8,-8);ri.add(kf);function li(n,e){return n.userData.interactiveId=e,n.traverse(t=>{t.userData.interactiveId=e}),n}function Qe(n,e,t,i,r=!0){const s=new ne(new Lt(...e),i);return s.position.set(...t),s.castShadow=r,s.receiveShadow=r,n.add(s),s}function Fr(n,e=.045){if(Cs)return n;const t=[];return n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i.userData.inkOutline||!i.geometry||/PlaneGeometry|CircleGeometry/.test(i.geometry.type))return;i.geometry.boundingSphere||i.geometry.computeBoundingSphere();const r=i.geometry.boundingSphere?.radius||0,s=Math.max(i.scale.x,i.scale.y,i.scale.z);if(r*s<.36)return;const o=Array.isArray(i.material)?i.material[0]:i.material;o!==le.soil&&(o?.transparent&&o.opacity<.85||t.push(i))}),t.forEach(i=>{const r=new ne(i.geometry,le.ink);r.userData.inkOutline=!0,r.scale.setScalar(1+Math.min(e,.022)),r.castShadow=!1,r.receiveShadow=!1,i.add(r)}),n}function H1(n,e=256){const t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");n(i,e);const r=new fu(t);return r.colorSpace=nn,r.wrapS=r.wrapT=Sa,r}function V1(){G1();const n=H1((c,l)=>{c.fillStyle="#78a875",c.fillRect(0,0,l,l);for(let u=0;u<90;u+=1){c.fillStyle=u%2?"rgba(206,219,147,.08)":"rgba(44,86,69,.06)";const d=u*73%l,h=u*47%l;c.fillRect(d,h,12+u%17,3+u%5)}for(let u=0;u<900;u+=1){const d=u%3?"rgba(31,93,52,.18)":"rgba(211,231,149,.12)";c.fillStyle=d,c.fillRect(Math.random()*l,Math.random()*l,1,3+Math.random()*3)}});n.repeat.set(7,5),le.grass.map=n;const e=new ne(new Lt(30,.65,19.5),le.grassDark);e.position.y=-.38,e.receiveShadow=!0,sn.add(e);const t=new ne(new Nn(29.5,19),le.grass);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,sn.add(t);const i=new ne(new Nn(27.8,1.45),le.path);i.rotation.x=-Math.PI/2,i.position.set(0,.012,-6.7),i.receiveShadow=!0,sn.add(i);const r=new ne(new Nn(1.25,12),le.path);r.rotation.x=-Math.PI/2,r.position.set(-9.6,.014,-1),sn.add(r);const s=[];for(let c=-14.5;c<=14.5;c+=1.5)s.push([c,.28,-9.4],[c,.28,9.4]);for(let c=-8.5;c<=8.5;c+=1.5)s.push([-14.6,.28,c],[14.6,.28,c]);const o=new Rr(new Lt(.14,.72,.14),le.woodDark,s.length),a=new Ut;s.forEach((c,l)=>{a.position.set(...c),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}),o.castShadow=!0,sn.add(o),[-14.6,14.6].forEach(c=>Qe(sn,[.07,.12,19],[c,.37,0],le.wood)),[-9.4,9.4].forEach(c=>Qe(sn,[29.3,.12,.07],[0,.37,c],le.wood));for(let c=-13.7;c<=13.7;c+=1.5){const l=new ne(new pu(.48+Math.random()*.1,1),le.grassDark);l.position.set(c,.3,8.85+Math.sin(c)*.08),l.castShadow=!0,sn.add(l)}for(let c=0;c<10;c+=1){const l=new ne(new wn(.07,8,6),c%2?le.amber:le.coral);l.position.set(-12.7+c*2.55,.13,8.1+Math.sin(c)*.25),l.castShadow=!0,sn.add(l)}W1()}function G1(){const n=new Nn(90,90,40,40);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count*3);for(let p=0;p<e.count;p+=1){const g=e.getX(p),x=e.getZ(p),v=Math.max(Math.abs(g)-27,Math.abs(x)-18,0),w=Dt.smoothstep(Math.abs(x+12.2),1.8,5)*Math.min(1,v/14)*(1.3+Math.sin(g*.15)*Math.cos(x*.12)*1.2);e.setY(p,-.16+w);const b=(Math.sin(g*.26+Math.cos(x*.31))+Math.cos(x*.22))*.025;new ot().setHSL(.285+Math.sin(g*.12)*.016,.23+b,.54+b).toArray(t,p*3)}n.setAttribute("color",new kn(t,3)),n.computeVertexNormals();const i=Xt(16777215);i.vertexColors=!0;const r=new ne(n,i);r.name="surrounding meadow",r.receiveShadow=!0,sn.add(r);const s=new ne(new Nn(80,2.8),le.path);s.rotation.x=-Math.PI/2,s.position.set(0,-.1,-12.2),s.receiveShadow=!0,sn.add(s);const o=new ne(new Nn(1.5,7),le.path);o.rotation.x=-Math.PI/2,o.position.set(16.2,-.09,-7.5),sn.add(o);const a=[[-15,-4],[-17,2],[-16,8],[-13,-12],[-8,-14],[-2,-15],[4,-14],[10,-13],[16,-11],[18,-5],[18,2],[17,8],[22,-16],[-22,-18]],c=new Rr(new it(.12,.19,2.3,7),le.woodDark,a.length),l=new Rr(new bo(1,1),Xt(16777215),a.length*5),u=new Ut;a.forEach(([p,g],x)=>{const v=.85+x%4*.14;p*=1.2,g*=1.2,u.position.set(p,1,g),u.scale.set(1,1,1),u.updateMatrix(),c.setMatrixAt(x,u.matrix);for(let m=0;m<5;m+=1){const w=m*2.4+x;u.position.set(p+Math.cos(w)*(m===4?.15:.85),2.4+(m===4?1.1:m%2*.4),g+Math.sin(w)*.7),u.scale.set(1.02*v,.85*v,.95*v),u.updateMatrix(),l.setMatrixAt(x*5+m,u.matrix),l.setColorAt(x*5+m,new ot(m===4?9550183:[5801823,7381611,6396536][(x+m)%3]))}}),c.castShadow=l.castShadow=!0,sn.add(c,l);const d=new Re;d.name="neighboring farm shed",d.position.set(-19,-.05,-18),Qe(d,[2.6,1.8,2.3],[0,.9,0],Xt(14014670));const h=new ne(new wi(2.05,1.1,4),Xt(11428701));h.rotation.y=Math.PI/4,h.position.y=2.28,d.add(h),Qe(d,[.65,1.23,.06],[-.42,.62,1.18],le.woodDark),Qe(d,[.62,.58,.07],[.61,1.1,1.18],le.shell),Qe(d,[.48,.44,.08],[.61,1.1,1.2],Xt(6790308)),sn.add(d)}function W1(){const n=new Re;n.position.set(11,0,12);const e=new Wi({color:12379356,transparent:!0,opacity:.42,roughness:.15,side:un});Qe(n,[4.6,.12,2.5],[0,.05,0],le.path),Qe(n,[4.4,2.2,.08],[0,1.1,-1.12],e,!1);for(let r=-2;r<=2;r+=1)Qe(n,[.05,2.4,2.3],[r*1.05,1.15,0],le.metal);const t=Qe(n,[2.7,.08,2.35],[-1.05,2.35,0],e,!1);t.rotation.z=-.38;const i=Qe(n,[2.7,.08,2.35],[1.05,2.35,0],e,!1);i.rotation.z=.38,sn.add(n)}function Ei(n,e="#f4bd4d"){Ha.font="700 15px system-ui";const t=Math.ceil(Ha.measureText(n).width)+24,i=new Ut,r=document.createElement("button");r.type="button",r.className="world-label",r.textContent=n,r.hidden=!0,r.style.width=`${t}px`,r.style.borderColor=e;for(const s of["pointerdown","pointerup"])r.addEventListener(s,o=>o.stopPropagation());return r.addEventListener("click",s=>{s.stopPropagation(),!(Rt||!Mn.hidden||!an.hidden)&&(Br(),i.userData.interactiveId&&Kt(i.userData.interactiveId,_t()))}),i.labelElement=r,i.userData.worldLabel={text:n,width:t,height:30,fontSize:15},i}function Nf(n,e,t){const i=new Re;for(const s of[-.65,.65])for(const o of[-.5,.5])Qe(i,[.09,.48,.09],[s,.24,o],le.woodDark),Qe(i,[.12,.07,.12],[s,.45,o],le.amber);for(const s of[-.5,.5])Qe(i,[1.3,.025,.025],[0,.28,s],le.straw||le.wood);for(const s of[-.65,.65])Qe(i,[.025,.025,1],[s,.28,0],le.wood);Qe(i,[.12,.85,.1],[0,.425,0],le.woodDark),Qe(i,[.72,.32,.07],[0,.75,0],le.wood);const r=Ei(e,"#f4bd4d");return r.position.y=1.2,i.add(r),i.position.copy(t),Tt(i),Fr(i,.04),li(i,n)}function $1(n){const e=tt[n];if(!e||zt===n)return null;const t=new Re;t.userData.guideMarker=!0,t.userData.baseY=e.y;const i=new ne(new Gi(1.08,36),new Ft({color:16039245,transparent:!0,opacity:.16,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.012;const r=new ne(new rn(.92,.045,8,44),new Wi({color:16039245,emissive:5057797,emissiveIntensity:.26,roughness:.38,transparent:!0,opacity:.92,depthWrite:!1}));r.rotation.x=Math.PI/2;const s=new ne(new wi(.18,.36,3),le.amber);return s.rotation.z=Math.PI,s.position.y=.34,t.add(i,r,s),t.position.copy(e),t}function q1(n,e){const t=new Re,i=new ne(new Gi(.98,24),new Ft({color:1194533,transparent:!0,opacity:.27,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.018,t.add(i);const r=new ne(new it(.75,.85,.22,24),le.shell);r.position.y=.14,t.add(r);const s=new ne(new it(.13,.16,2.5,12),le.metal);s.position.set(0,1.46,-.15),t.add(s);const o=new ne(new it(.065,.065,2.4,8),le.water);o.position.set(0,1.42,-.42),t.add(o);const a=[];for(let u=0;u<4;u++){const d=new Re;d.name=`stacked planter ${u+1}`;const h=u%2?.16:-.16,p=.52+u*.61,g=.29-u*.18;d.position.set(h,p,g);const x=e.repaired?le.white:le.metal,v=new ne(new it(.64,.4,.35,24,1,!0),x);d.add(v);const m=new ne(new it(.4,.4,.05,20),le.shell);m.position.y=-.17,d.add(m);const w=new ne(new rn(.64,.055,7,24),le.shell);w.rotation.x=Math.PI/2,w.position.y=.18,d.add(w);const b=new ne(new Gi(.585,24),le.soil);b.rotation.x=-Math.PI/2,b.position.y=.15,d.add(b),Tt(d),t.add(d);for(let _=0;_<3;_++){const A=_*Math.PI*2/3+.35;a.push({x:h+Math.cos(A)*.27,y:p+.19,z:g+Math.sin(A)*.27,turn:u*1.4+_})}}for(const u of t.children.filter(d=>d.name.startsWith("stacked planter"))){u.updateMatrix();for(const d of[...u.children]){const h=new ne(d.geometry.clone().applyMatrix4(u.matrix),d.material);t.add(h),u.remove(d),d.geometry.dispose()}}Tt(t);const c=e.queue.filter(u=>u.readyAt!==null&&u.readyAt<=Je()),l=Ei(e.repaired?c.length?`${c.length} layer${c.length>1?"s":""} ready`:`Tower ${n+1}`:"REPAIR PLANTER",c.length?"#b9df63":"#69cbd3");l.position.set(0,3.95,0),t.add(l);for(const u of e.queue){const d=u.readyAt?Dt.clamp((Je()-u.startedAt)/Math.max(1,u.readyAt-u.startedAt),0,1):0,h=Of(u.crop,d,a.slice(u.layer*3,u.layer*3+3),u.crop==="tomato"?.85:1.2);h.userData.growthTiming={startedAt:u.startedAt,readyAt:u.readyAt,size:u.crop==="tomato"?.85:1.2},h.userData.towerIndex=n,h.userData.jobId=u.id,h.userData.layer=u.layer,t.add(h)}return t.position.copy(tt[`tower-${n}`]),Fr(t,.036),li(t,`tower-${n}`)}function X1(n,e=.28,t=.11,i=!1){const r=new Pr;r.moveTo(0,0),i?[[.15,.65],[.28,1],[.43,.7],[.58,.96],[.75,.6],[1,0],[.75,-.6],[.58,-.96],[.43,-.7],[.28,-1],[.15,-.65]].forEach(([a,c])=>r.lineTo(a*e,c*t)):(r.bezierCurveTo(e*.2,t,e*.72,t,e,0),r.bezierCurveTo(e*.72,-t,e*.2,-t,0,0));const s=new co(r,{depth:.018,bevelEnabled:!1,curveSegments:5});s.rotateX(-Math.PI/2);const o=new ne(s,n);return o.castShadow=!0,o}function Dr(n,e=1){const t=Pe[n],i=new Re,r=t.family==="fruit",s=Xt(r?4685648:n==="lettuce"?6399295:t.color,{side:un}),o=Xt(r?8894309:t.accent,{side:un}),a=["lettuce","strawberry"].includes(n),c=n==="tomato"?.8:a?.16:.52,l=new ne(new it(.025,.05,c,7),le.grassDark);l.position.y=c/2,i.add(l);const u=n==="lettuce"||n==="kale"?12:10;for(let h=0;h<u;h+=1){const p=h/u*Math.PI*2,g=X1(h%3?s:o,n==="lettuce"?.46:n==="tomato"?.34:.36,n==="lettuce"?.25:n==="basil"?.15:.14,["kale","tomato"].includes(n));g.rotation.set(0,-p,n==="kale"?.7:.18+h%3*.09),g.position.set(0,a?.08+h%3*.045:.16+h%3*.14,0),i.add(g)}if(n==="tomato"){const h=new ne(new it(.018,.025,1.05,6),le.wood);h.position.set(-.1,.52,-.05),i.add(h);for(let p=0;p<3;p+=1){const g=new ne(new wn(.085,12,8),le.coral);g.position.set(p%2?-.2:.2,.3+p*.16,.15),g.visible=e>=.72,g.userData.ripeningFruit=!0,i.add(g)}}if(n==="strawberry")for(let h=0;h<3;h+=1){const p=new ne(new wi(.075,.14,10),le.coral);p.rotation.z=Math.PI,p.position.set(Math.cos(h*2.1)*.21,.18,Math.sin(h*2.1)*.21),p.visible=e>=.72,p.userData.ripeningFruit=!0,i.add(p)}const d=e>=1?1:e>=.66?.78:e>=.33?.52:.28;return i.scale.setScalar(d),i.userData.crop=n,i.userData.campaignCrop=!0,i.userData.swayPhase=ii.indexOf(n)*.8+Math.random()*.4,i.userData.growthStage=e>=1?3:e>=.66?2:e>=.33?1:0,i}function Of(n,e,t,i){const r=Dr(n,1),s=new Set(r.children.filter(c=>c.geometry?.type==="ExtrudeGeometry").map(c=>c.material)),o=r.children.filter(c=>c.userData.ripeningFruit);if(o.forEach(c=>r.remove(c)),Tt(r),o.length){const c=new Re;o.forEach(l=>c.add(l)),Tt(c),[...c.children].forEach(l=>{l.userData.ripeningFruit=!0,l.userData.fruitPerInstance=o.length,r.add(l)})}const a=new Re;return a.userData.crop=n,a.userData.plantingPlacements=t,a.userData.foliageMaterials=[],r.children.forEach(c=>{if(!c.isMesh)return;c.updateMatrix();const l=c.material.clone(),u=new Rr(c.geometry.clone(),l,t.length);u.castShadow=!0,u.receiveShadow=!0,u.userData.plantPartMatrix=c.matrix.clone(),u.userData.ripeningFruit=!!c.userData.ripeningFruit,u.userData.fruitPerInstance=c.userData.fruitPerInstance||1,s.has(c.material)&&a.userData.foliageMaterials.push(l),a.add(u)}),zi(r),Ff(a,e,i),a}function Ff(n,e,t){const i=e>=1?3:e>=.66?2:e>=.33?1:0,r=[.28,.52,.78,1][i]*t,s=e>=.72;if(n.userData.growthScale===r&&n.userData.ripe===s)return;n.userData.growthStage=i,n.userData.growthScale=r,n.userData.ripe=s;const o=new Ut;n.children.forEach(a=>{a.isInstancedMesh&&(n.userData.plantingPlacements.forEach((c,l)=>{o.position.set(c.x,c.y,c.z),o.rotation.set(0,c.turn||0,0),o.scale.setScalar(r),o.updateMatrix(),a.setMatrixAt(l,o.matrix.clone().multiply(a.userData.plantPartMatrix))}),a.visible=!a.userData.ripeningFruit||s,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere())})}function Y1(){const n=Je();mt.traverse(e=>{const t=e.userData.growthTiming;if(!t)return;if(e.userData.towerIndex!==void 0){const s=f.towers[e.userData.towerIndex].queue.find(o=>o.id===e.userData.jobId);s&&(t.readyAt=s.readyAt,t.startedAt=s.startedAt)}const i=Dt.clamp((n-t.startedAt)/Math.max(1,t.readyAt-t.startedAt),0,1);if(e.userData.plantingPlacements){Ff(e,i,t.size);return}const r=i>=1?3:i>=.66?2:i>=.33?1:0;e.userData.growthStage=r,e.scale.setScalar([.28,.52,.78,1][r]*t.size),e.children.forEach(s=>{s.userData.ripeningFruit&&(s.visible=i>=.72)})}),_f(mt)}function j1(n,e){const t=new Re;if(n===0&&Yt(f.farm,"soilKit")){const o=La("soilKit",f.farm);o.position.set(1.65,0,.1),t.add(o)}const i=new ne(new Nn(2.7,1.6),new Ft({color:1587492,transparent:!0,opacity:.22,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.015,t.add(i),Qe(t,[2.45,.38,1.35],[0,.2,0],le.wood),Qe(t,[2.08,.23,1.02],[0,.42,0],le.soil);for(let o=-1;o<=1;o+=1)Qe(t,[1.85,.035,.045],[0,.56,o*.27],le.woodDark,!1);if(e.capacity>=3)for(const o of[-1.15,1.15])for(const a of[-.6,.6])Qe(t,[.1,.7,.1],[o,.35,a],le.woodDark);e.capacity>=4&&Qe(t,[2.4,.12,.12],[0,.7,-.6],le.wood);const r=e.capacity<=2?[[-.53,0],[.53,0]]:[[-.53,-.26],[.53,-.26],[-.53,.26],[.53,.26]];e.plants.forEach((o,a)=>{const c=Dt.clamp((Date.now()-o.plantedAt)/Math.max(1,o.readyAt-o.plantedAt),0,1),l=e.capacity<=2?1.08:.94,u=e.capacity<=2?[{x:-.17,y:0,z:-.2},{x:.17,y:0,z:.2,turn:1.1},{x:.15,y:0,z:-.13,turn:2.4}]:[{x:-.18,y:0,z:0},{x:.18,y:0,z:0,turn:1.4}],d=Of(o.crop,c,u,l);d.userData.growthTiming={startedAt:o.plantedAt,readyAt:o.readyAt,size:l},d.position.set(r[a][0],.54,r[a][1]),t.add(d)});const s=Ei(`Bed ${n+1}: ${e.plants.length}/${e.capacity}`,"#b9df63");return s.position.set(0,e.plants.length?1.95:1.05,0),s.visible=zt===`bed-${n}`,t.add(s),t.position.copy(tt[`bed-${n}`]),Fr(t,.034),li(t,`bed-${n}`)}function K1(){const n=new Re;if(Qe(n,[2.25,1.15,1.45],[0,.58,0],le.white),Qe(n,[2.38,.18,1.58],[0,1.22,0],le.lime),f.seedShop.expanded){Qe(n,[.72,1.05,1.3],[-1.52,.53,0],le.wood);for(const a of[.25,.55,.85])Qe(n,[.62,.23,.06],[-1.52,a,.68],le.lime),Qe(n,[.16,.04,.06],[-1.52,a,.73],le.metal)}const e=new ne(new it(.22,.28,.68,14),le.metal);e.rotation.z=Math.PI/2,e.position.set(1.35,.78,0),n.add(e);const t=Ja({skin:"#c99069",hair:"#e5d8b7",color:"#b9547f",accessory:"glasses"});t.name="Bram the seed merchant",t.updateMatrixWorld(!0);const i=[];t.traverse(a=>{a.isMesh&&i.push(a)}),i.forEach(a=>t.attach(a)),t.userData.rig=null;const r=new ne(new it(.48,.48,.06,20),le.lime);r.position.y=2,t.add(r);const s=new ne(new wi(.27,.48,16),le.lime);s.position.set(.06,2.22,0),s.rotation.z=-.2,t.add(s),Tt(t),t.position.set(2.2,0,.1),t.rotation.y=.35,n.add(t),Qe(n,[.9,.55,.62],[1.9,.38,.85],le.wood);for(const a of[1.55,2.25]){const c=new ne(new it(.19,.19,.08,12),le.metal);c.rotation.z=Math.PI/2,c.position.set(a,.2,.85),n.add(c)}for(let a=0;a<3;a++)Qe(n,[.2,.28,.1],[1.62+a*.26,.79,.85],a%2?le.coral:le.lime);i1(n,Qe,le),Tt(n);const o=Ei("BRAM'S SEEDS","#b9df63");return o.position.set(0,3.85,0),n.add(o),n.position.copy(tt.vault),Fr(n,.038),li(n,"vault")}function J1(){const n=o1(f.hydro.water),e=Ei("RESERVOIR","#69cbd3");return e.name="reservoir label",e.position.set(0,1.95,0),n.add(e),n.position.copy(tt.reservoir),li(n,"reservoir")}function Z1(){const n=mt.getObjectByName("water reservoir");if(yf(n,f.hydro.water),n?.userData.reservoir){const s=n.userData.reservoir;s.mixingStream.visible=s.ripples.visible=Fn(f)}const e=n?.getObjectByName("reservoir label");if(!e)return;const t=n.userData.reservoir.status,i=t==="empty"?"WATER EMPTY":t==="low"?"WATER LOW":"RESERVOIR";if(e.userData.worldLabel.text===i)return;Ha.font="700 15px system-ui";const r=Math.ceil(Ha.measureText(i).width)+24;Object.assign(e.userData.worldLabel,{text:i,width:r}),e.labelElement.textContent=i,e.labelElement.style.width=`${r}px`,e.labelElement.style.borderColor=t==="ready"?"#69cbd3":"#f4bd4d"}function Q1(){const n=new Re;n.name="reservoir tower feedline";const e=new Wi({color:4352882,roughness:.7}),t=[],i=Math.max(0,...f.towers.map((u,d)=>u.built?d:0));function r(u,d){const h=new D(...u),p=new D(...d),g=new ne(new it(.075,.075,h.distanceTo(p),8),e);g.position.copy(h).add(p).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new D(0,1,0),p.clone().sub(h).normalize()),n.add(g),t.push({start:h,end:p});const x=new ne(new wn(.1,8,6),le.metal);x.position.copy(p),n.add(x)}r([-10.65,.24,1.74],[-10.3,.24,2.6]),r([-10.3,.24,2.6],[-10.3,.24,4.5]),r([-10.3,.24,4.5],[tt[`tower-${i}`].x,.24,4.5]),f.towers.forEach((u,d)=>{if(!u.built)return;const h=tt[`tower-${d}`];r([h.x,.24,4.5],[h.x,.24,h.z+.85]),r([h.x,.24,h.z+.85],[h.x,2.8,h.z+.85]),r([h.x,2.8,h.z+.85],[h.x,2.8,h.z])}),Tt(n);const s=new Re;s.position.copy(tt.filter);const o=new ne(new it(.26,.26,.75,16),le.white);o.rotation.z=Math.PI/2,o.position.y=.28,s.add(o);const a=new ne(new rn(.22,.045,6,16),f.hydro.lineClogged?le.coral:le.water);a.rotation.x=Math.PI/2,a.position.y=.65,s.add(a),Qe(s,[.055,.28,.055],[0,.48,0],le.metal);const c=Ei(f.hydro.lineClogged?"FILTER CLOGGED":"FEED FILTER",f.hydro.lineClogged?"#f4bd4d":"#69cbd3");c.position.y=1.3,s.add(c),n.add(li(s,"filter"));const l=new Rr(new wn(.14,6,5),new Ft({color:f.hydro.lineClogged?16039245:10875647}),t.length*3);return l.frustumCulled=!1,l.userData.flowSegments=t,n.add(l),n}function cc(){const n=[];f.towers.forEach((t,i)=>{t.built&&(!t.repaired||lr(t,Je()))&&n.push(`tower-${i}`)}),f.beds.forEach((t,i)=>{t.built&&t.plants.some(r=>r.readyAt<=Je())&&n.push(`bed-${i}`)}),f.hydro.lineClogged&&n.push("filter");const e=Ro(f);return(e.water||!f.hydro.batchMixed||f.towers.some(t=>t.built&&t.repaired)&&(e.mix||e.check))&&n.push("reservoir"),f.farm.owned.includes("coop")&&f.farm.eggsReady&&n.push("coop"),Qa(f).attention&&n.push("composter"),qi(f)?.available&&n.push("market"),n}function eb(){const n=cc();if(!n.length)return new Re;const e=new wo(.92,1.02,24);e.rotateX(-Math.PI/2);const t=new Ft({transparent:!0,opacity:.65,depthWrite:!1}),i=new Rr(e,t,n.length);i.userData.attentionMarkers=!0;const r=new Ut;return n.forEach((s,o)=>{r.position.copy(tt[s]),r.position.y=.035,r.scale.setScalar(s==="filter"?.6:1),r.updateMatrix(),i.setMatrixAt(o,r.matrix),i.setColorAt(o,new ot(["filter","reservoir"].includes(s)?16039245:12181347))}),i}function tb(){if(!f.market.built)return Nf("market","PRODUCE TABLE",tt.market);const n=new Re,e=As(f);n.name=`market construction stage ${e}`,n.userData.constructionStage=e;const t=e<3?1.8:3.1;Qe(n,[t,.15,1.15],[0,.7,.1],le.wood);for(const r of[-t/2+.15,t/2-.15])for(const s of[-.35,.55])Qe(n,[.12,.7,.12],[r,.35,s],le.woodDark);if(e>=2&&(Qe(n,[t+.25,.12,1.4],[0,2.15,-.15],e===4?le.coral:le.lime),[-t/2,t/2].forEach(r=>Qe(n,[.11,2.1,.11],[r,1.1,-.55],le.woodDark))),e>=3&&(Qe(n,[3.1,.5,.12],[0,.35,.65],le.wood),Qe(n,[3,.65,.12],[0,1.3,-.6],le.white),Qe(n,[2.8,.09,.4],[0,1.35,-.4],le.woodDark)),e===4){for(const r of[-1.25,-.42,.42,1.25])Qe(n,[.28,.012,1.41],[r,2.216,-.15],le.white),Qe(n,[.28,.15,.035],[r,2.1,.57],le.white);for(const r of[-1.85,1.85]){Qe(n,[.5,.45,.65],[r,.23,.1],le.woodDark);const s=Dr("tomato",1);s.scale.setScalar(.4),s.position.set(r,.48,.1),n.add(s)}}const i=Ei(e===1?"PIP'S PRODUCE TABLE":"PIP'S VEG STAND","#f4bd4d");return i.position.set(0,e===1?1.55:2.58,0),n.add(i),ii.slice(0,e).forEach((r,s)=>{const o=(s-(e-1)/2)*.6,a=Qe(n,[.48,.28,.56],[o,.87,.2],le.woodDark);a.rotation.y=.07*s;const c=new ne(new wn(.11,10,7),new Wi({color:Pe[r].color,roughness:.7}));c.position.set(o,1.04,.2),n.add(c)}),n.position.copy(tt.market),Fr(n,.034),li(n,"market")}function nb(){const n=new Re;if(Yt(f.farm,"harvestKit")){const i=La("harvestKit",f.farm);i.position.set(-1.15,0,0),n.add(i)}Qe(n,[1.55,.18,.75],[0,.85,0],le.wood),[-.62,.62].forEach(i=>Qe(n,[.12,1.4,.12],[i,.7,0],le.woodDark));const e=Object.values(f.rack).reduce((i,r)=>i+r,0);for(let i=0;i<Math.min(e,6);i+=1){const r=ii.find(o=>f.rack[o]>i/2)||"lettuce",s=Dr(r,1);s.scale.setScalar(.32),s.position.set(-.5+i%3*.5,1,i>2?.15:-.15),n.add(s)}const t=Ei("HARVEST RACK","#b9df63");return t.position.set(0,1.65,0),t.visible=zt==="rack"||e>0,n.add(t),n.position.copy(tt.rack),Fr(n,.034),li(n,"rack")}function ib(){const n=Za(f),e=r1(n,Qe,le),t=Ei("FARM SHOP","#f4bd4d");return t.position.set(0,3.1,0),e.add(t),e.position.copy(tt.workshop),Fr(e,.034),li(e,"workshop")}function Bf(n,e){const t=Math.max(0,Ni.findIndex(o=>o.name===n.customer)),i=Ja(Ni[t],t);i.position.copy(Va(e,n));const r=new ne(new Gi(.4,20),new Ft({color:1586468,transparent:!0,opacity:.2,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.025,i.add(r);const s=new ne(new wo(.43,.49,24),new Ft({color:16039245,side:un}));return s.rotation.x=-Math.PI/2,s.position.y=.035,s.visible=f.selectedOrderId===n.id,i.add(s),i.userData.customerIndex=e,i.userData.customerProfile=t,i.userData.orderId=n.id,i.userData.arrivedAt=n.createdAt,i.userData.destination=i.position.clone(),li(i,"market")}function Va(n,e=f.orders[n]){return new D(tt.market.x-1+(e?.slot??n)*1.3,0,tt.market.z+2.8)}function vh(n){if(Yc.has(n.name))return Yc.get(n.name);const e=new du;e.background=new ot(n.color).multiplyScalar(.45),e.add(new xu(16775398,5469804,2.6));const t=new ja(16773847,2);t.position.set(-2,4,4),e.add(t);const i=Ja(n,Ni.indexOf(n));e.add(i);const r=new En(32,1,.1,12);r.position.set(.45,1.9,2.8),r.lookAt(0,1.48,0);const s=128,o=new Vi(s,s);o.texture.colorSpace=nn;const a=wt.getRenderTarget();wt.setRenderTarget(o),wt.render(e,r);const c=new Uint8Array(s*s*4);wt.readRenderTargetPixels(o,0,0,s,s,c),wt.setRenderTarget(a);const l=document.createElement("canvas");l.width=l.height=s;const u=l.getContext("2d"),d=u.createImageData(s,s);for(let p=0;p<s;p++)d.data.set(c.subarray(p*s*4,(p+1)*s*4),(s-p-1)*s*4);u.putImageData(d,0,0);const h=l.toDataURL("image/png");return Yc.set(n.name,h),o.dispose(),zi(i),h}function Pu(n,e,t=!0){const i=Bf(n,e);i.traverse(s=>{delete s.userData.interactiveId}),Ir.add(i);const r=t?Dr(n.crop,1):new Re;r.scale.setScalar(.32),Ir.add(r),Ks.push({customer:i,produce:r,purchased:t,age:t?0:.75,start:new D(Ee.x,1.1,Ee.z),end:i.position.clone().add(new D(0,1,.3))})}function zf(){const n=of(f.proPip);return n.position.set(-5.35,0,-1.1),n}let yt=zf();const Ee={x:yt.position.x,z:yt.position.z,target:null,speed:f.proPip?6.25:5.25,direction:"south",action:"idle",actionTime:0,pendingFacing:0,gaitPhase:0};ri.add(yt);function rb(){if(f.cosmetics.active.includes("sunny-planters"))for(let n=0;n<5;n+=1){const e=new ne(new it(.2,.25,.3,12),le.coral);e.position.set(-8.6+n*.55,.15,-5.35);const t=new ne(new wn(.11,10,7),le.amber);t.position.set(e.position.x,.48,e.position.z),mt.add(e,t)}if(f.cosmetics.active.includes("blue-path"))for(let n=0;n<3;n+=1){const e=new Re,t=new ne(new it(.28,.21,.38,12),le.water);t.position.y=.2;const i=Dr("basil",1);i.scale.setScalar(.35),i.position.y=.4,e.add(t,i),e.position.set(-1.5+n*.8,0,-5.8),mt.add(e)}if(f.cosmetics.active.includes("festival-bunting")&&f.market.built)for(let n=0;n<9;n+=1){const e=new ne(new wi(.12,.28,3),n%2?le.amber:le.coral);e.rotation.z=Math.PI,e.position.set(tt.market.x-1.35+n*.35,2.32+Math.sin(n*.8)*.1,tt.market.z),mt.add(e)}}function Lo(){if(za.replaceChildren(),zi(mt),mt.clear(),mt.add(K1(),J1(),tb(),ib()),kt(f).festival){const e=new Re;e.name="harvest festival garden display",e.position.set(-5,0,11.2);for(const t of[-1.3,1.3]){Qe(e,[.18,2.7,.18],[t,1.25,0],le.wood),Qe(e,[.7,.42,.7],[t,.12,0],le.white);for(let i=0;i<5;i++){const r=new ne(new bo(.22,1),le.lime);r.position.set(t+Math.sin(i*2)*.25,.4+i*.1,Math.cos(i*2)*.22),e.add(r)}}Qe(e,[3,.2,.3],[0,2.55,0],le.wood);for(let t=0;t<7;t++){const i=new ne(new wi(.16,.36,3),t%2?le.coral:le.amber);i.rotation.z=Math.PI,i.position.set(-1.1+t*.37,2.25,0),e.add(i)}Tt(e),mt.add(e)}f.farm.owned.forEach(e=>{if(["transplantKit","harvestTools"].includes(e)){const i=La(e,f.farm);i.position.copy(tt[An[e].attachment]),i.position.x+=e==="transplantKit"?-2.1:-1.9,i.position.z+=.8,mt.add(i);return}if(An[e].attachment)return;const t=La(e,f.farm);t.position.copy(tt[e]);{const i=Ei(e==="rainTank"?"RAIN STORAGE":e==="coop"?f.farm.eggsReady?"EGGS READY":"CHICKEN COOP":Qa(f).label,"#b9df63");i.position.y=2,t.add(i),li(t,e)}mt.add(t)}),mt.add(nb()),mt.add(Q1(),eb()),f.towers.forEach((e,t)=>{const i=e.built?q1(t,e):Nf(`tower-${t}`,`BUILD T${t+1}`,tt[`tower-${t}`]);e.built&&sb(t)&&ob(i,.38),mt.add(i)}),f.beds.forEach((e,t)=>{e.built&&mt.add(j1(t,e))}),f.market.built&&f.orders.forEach((e,t)=>{e.status==="waiting"&&mt.add(Bf(e,t))}),s1(mt);const n=$1(bi());n&&mt.add(n),rb(),po=[],mt.traverse(e=>{e.userData.worldLabel&&(po.push(e),za.appendChild(e.labelElement))}),ab(),Uf=Hf()}function sb(n){if(!_t())return!1;const e=tt[`tower-${n}`],t=e.x-Ee.x,i=e.z-Ee.z,r=Math.hypot(7.7,14.3),s=(t*7.7+i*14.3)/r,o=Math.abs(t*14.3-i*7.7)/r;return Math.hypot(t,i)<3.4&&s>0&&o<1.1}function ob(n,e){n.traverse(t=>{if(t.userData.worldLabel)return;const i=r=>{const s=r.clone();return s.transparent=!0,s.opacity=Math.min(r.opacity??1,e),s.depthWrite=!1,s};Array.isArray(t.material)?t.material=t.material.map(i):t.material&&(t.material=i(t.material))})}function zi(n){const e=new Set(Object.values(le)),t=new Set,i=new Set,r=new Set;n.traverse(s=>{s.geometry&&!t.has(s.geometry)&&(t.add(s.geometry),s.geometry.dispose()),(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{!a||e.has(a)||r.has(a)||(r.add(a),a.map&&!i.has(a.map)&&(i.add(a.map),a.map.dispose()),a.dispose())})})}function Hf(){const n=Je();return JSON.stringify({towers:f.towers.map(e=>[e.built,e.repaired,e.queue.map(t=>[t.id,t.layer,t.crop,t.readyAt<=n])]),beds:f.beds.map(e=>[e.built,e.capacity,e.plants.length,e.plants.filter(t=>t.readyAt<=n).length]),market:[f.market.built,As(f),f.orders.map(e=>`${e.id}:${e.status}`)],rack:f.rack,lineClogged:f.hydro.lineClogged,farm:f.farm,festival:kt(f).festival,attention:cc(),carry:f.carry,cosmetics:f.cosmetics.active,pro:f.proPip,selected:zt,guide:bi()})}function ab(){const n=yt.getObjectByName("campaign carry");if(n&&(zi(n),yt.remove(n)),!f.carry)return;const e=new Re;e.name="campaign carry";const t=f.carry.kind==="starter",i=Yt(f.farm,t?"transplantKit":"harvestKit"),r=t?i===2:i===3;if(e.userData.groundCarrier=r,t&&i===0){const s=new ne(new it(.13,.17,.22,12),le.soil),o=Dr(f.carry.crop,.82);o.scale.multiplyScalar(.48),o.position.y=.12,e.add(s,o)}else{const s=vf(r?t?"wheelbarrow":"harvest cart":"transplant basket");e.add(s),e.userData.wheels=s.userData.wheels,t?$t(f.carry).forEach((o,a)=>{const c=new Re;c.name=`carried ${o.crop} starter`;const l=new ne(new it(.11,.085,.15,10),le.soil),u=Dr(o.crop,.82);u.scale.multiplyScalar(.28),u.position.y=.08,c.add(l,u),c.position.set((a%3-1)*.23,s.userData.loadHeight+.07,r?-.22+Math.floor(a/3)*.4:0),e.add(c)}):f.carry.items.forEach((o,a)=>{const c=new ne(new wn(.095,10,7),new Wi({color:Pe[o].color,roughness:.7}));c.position.set(-.22+a%3*.22,s.userData.loadHeight+.12+Math.floor(a/6)*.16,-.11+Math.floor(a%6/3)*.22),e.add(c)})}e.position.set(0,r?0:.68,r?.98:.48),yt.add(e)}function Je(){return Date.now()}function qe(n="autosave"){let e=!1;try{f=b1(f,window.localStorage,Date.now(),t=>{e=t})}catch{}te("#saveWarning").hidden=e,te("#saveStatus").textContent=e?"Progress saved in this browser":"Progress is only in memory. Retry saving or export before closing.",Df=performance.now(),n!=="autosave"&&ni("campaign_save",{reason:n,chapter:f.chapter+1,task:si(f)?.id||"complete"})}function Ge(n,e=3500){fo.classList.add("is-active"),_t()&&(e=Math.min(e,3200)),fo.textContent=n,Ma=performance.now()+e}function ur(n){Bi.effect(n)}function Br(){Bi.start()}function Ps(){Bi.update();const n=f.settings.soundEnabled!==!1,e=te("#soundButton");e.setAttribute("aria-label",n?"Mute sound":"Enable sound"),e.setAttribute("title",n?"Mute sound":"Enable sound"),e.setAttribute("aria-pressed",String(!n)),e.classList.toggle("is-muted",!n)}function Ht(n,e=n){Ee.action=n,Ee.actionTime=f.settings.reducedMotion?.18:.72,ur(e)}function Vf(n){const e=new Re,t=new ne(new Lt(.34,.46,.08),le.white),i=new ne(new Gi(.1,16),new Wi({color:Pe[n].color,roughness:.65}));i.position.z=.046,e.add(t,i),e.position.copy(tt.vault).add(new D(2.5,1.1,.35)),Ir.add(e),Js.push({kind:"packet",mesh:e,start:e.position.clone(),end:tt.vault.clone().add(new D(1.25,.95,0)),age:0,duration:f.settings.reducedMotion?.18:.72})}function Xi(n,e=16039245){const t=f.settings.reducedMotion?3:10;for(let i=0;i<t;i+=1){const r=new ne(new wn(.035,6,5),new Ft({color:e}));r.position.copy(n).add(new D(0,.45,0)),Ir.add(r),Js.push({kind:"particle",mesh:r,velocity:new D((Math.random()-.5)*1.5,.7+Math.random(),(Math.random()-.5)*1.5),age:0,duration:.65})}}function cb(n){for(let e=Js.length-1;e>=0;e-=1){const t=Js[e];t.age+=n;const i=t.age/t.duration;t.kind==="packet"?(t.mesh.position.lerpVectors(t.start,t.end,Math.min(1,i)),t.mesh.position.y+=Math.sin(Math.min(1,i)*Math.PI)*1.4,t.mesh.rotation.y+=n*5):(t.velocity.y-=n*2.2,t.mesh.position.addScaledVector(t.velocity,n),t.mesh.scale.setScalar(Math.max(.05,1-i))),i>=1&&(Ir.remove(t.mesh),zi(t.mesh),Js.splice(e,1))}for(let e=Ks.length-1;e>=0;e-=1){const t=Ks[e];t.age+=n;const i=Math.min(1,t.age/.65);t.produce.position.lerpVectors(t.start,t.end,i),f.settings.reducedMotion||(t.produce.position.y+=Math.sin(i*Math.PI)*.6),t.customer.userData.rig.arms[0].rotation.x=t.purchased?-i*.8:0,t.age>.75&&!f.settings.reducedMotion&&(t.customer.position.x+=n*2.2,t.customer.rotation.y=Math.PI/2,t.produce.position.copy(t.customer.position).add(new D(.3,1,0)),t.customer.userData.rig.legs.forEach((r,s)=>{r.rotation.x=Math.sin(t.age*9+s*Math.PI)*.3})),t.age>=(f.settings.reducedMotion?.9:2.3)&&(Ir.remove(t.customer,t.produce),zi(t.customer),zi(t.produce),Ks.splice(e,1))}}function lb(n){cs.update(document.hidden?0:n,{marketBuilt:f.market.built,reducedMotion:f.settings.reducedMotion});const e=performance.now()/1e3;a1(mt.getObjectByName("water reservoir"),e,Fn(f),f.settings.reducedMotion),le.water.opacity=.76+Math.sin(e*1.8)*.08,ci.intensity=1.45+Math.sin(e*.09)*.06,mt.traverse(t=>{if(t.userData.attentionMarkers&&(t.material.opacity=f.settings.reducedMotion?.65:.55+Math.sin(e*2)*.15),t.userData.hens&&t.userData.hens.forEach((i,r)=>{const s=e*.7+r*2.5;i.position.copy(i.userData.home),f.settings.reducedMotion||(i.position.x+=Math.sin(s)*.22,i.position.z+=Math.cos(s)*.16,i.rotation.y=Math.cos(s)*.6,i.rotation.x=Math.max(0,Math.sin(s*2.3))*.22)}),t.userData.flowSegments){t.visible=C1(f);const i=new Ut;t.userData.flowSegments.forEach(({start:r,end:s},o)=>{for(let a=0;a<3;a++){const c=f.settings.reducedMotion?(a+.5)/3:(e*(f.hydro.lineClogged?.08:.3)+a/3+o*.31)%1;i.position.lerpVectors(r,s,c),i.position.y+=.045,i.updateMatrix(),t.setMatrixAt(o*3+a,i.matrix)}}),t.instanceMatrix.needsUpdate=!0}if(t.userData.campaignCrop&&(t.rotation.z=Math.sin(e*1.3+t.userData.swayPhase)*.025),t.userData.customerIndex!==void 0){const i=e*1.7+t.userData.customerIndex,r=f.settings.reducedMotion?1:Dt.clamp((Je()-t.userData.arrivedAt)/1200,0,1);t.position.copy(t.userData.destination),t.position.x+=(1-r)*1.8,t.rotation.y=r<1?-Math.PI/2:-.18;const s=t.userData.rig;s&&!f.settings.reducedMotion&&(s.head.rotation.y=Math.sin(i*.45)*.07,s.body.scale.y=1+Math.sin(i)*.012,s.legs.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*.3:0}),s.arms.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*-.2:Math.sin(i+a)*.04}))}if(t.userData.guideMarker){const i=1+Math.sin(e*3.1)*.08;t.scale.set(i,1,i),t.position.y=t.userData.baseY+Math.sin(e*2.5)*.035}})}function jl(n={}){const e=[];return n.coins&&e.push(`${n.coins} coins`),n.xp&&e.push(`${n.xp} XP`),n.unlockCrop&&e.push(Pe[n.unlockCrop].label),n.unlockPro&&e.push("Pro Pip"),e.join(" + ")}function Io(n){const e=n?.goals;return e?[...e.marketLevel?[{label:"Market upgraded",current:f.market.level>=e.marketLevel?1:0,target:1}]:[],...e.capacityUpgrade?[{label:"Queue or bed expanded",current:Lu()?1:0,target:1}]:[],...Object.entries(e.sold||{}).map(([t,i])=>({crop:t,label:`${Pe[t].label} sold`,current:f.stats.byCropSold[t],target:i})),...e.orders?[{label:"Total orders fulfilled",current:f.stats.orders,target:e.orders}]:[]]:[]}function Lu(){return f.towers.some(n=>n.built&&n.irrigationUpgraded)||f.beds.some(n=>n.built&&n.capacity>2)}function Gf(){const n=f.towers.findIndex(t=>t.built&&!t.irrigationUpgraded),e=f.beds.findIndex(t=>t.built&&t.capacity<4);return[...n>=0?[{id:`tower-${n}`,label:"Precision drippers / 12% faster starts",cost:gt.queueUpgrade}]:[],...e>=0?[{id:`bed-${e}`,label:"Bed +1 growing space",cost:gt.bedUpgrade[e]}]:[]]}function ub(n){const e=Io(n);if(e.length)return e.every(t=>t.current>=t.target);switch(n.id){case"repair-first-tower":return f.towers[0].repaired;case"first-tower-plan":return f.stats.byCropQueued.lettuce>=2;case"first-grow-out":return f.stats.harvested>=4;case"reopen-market":return f.market.built;case"build-second-tower":return f.towers[1].built;case"specialize-flow":return f.hydro.systemLessonDone;case"split-crop-plan":return f.stats.byCropQueued.tomato>=1&&f.stats.byCropQueued.kale>=1;case"build-third-tower":return f.towers[2].built;case"build-pro-yard":return f.towers[3].built;default:return!1}}function db(n){const e=f.level;f.coins+=n.reward.coins||0,f.xp+=n.reward.xp||0,n.reward.unlockCrop&&!f.unlockedCrops.includes(n.reward.unlockCrop)&&f.unlockedCrops.push(n.reward.unlockCrop),n.reward.unlockPro&&(f.proPip=!0),n.reward.campaignComplete&&(f.campaignComplete=!0);const t=Mf(f.xp);f.level=t.level,f.level>e&&(Ge(`Level ${f.level} reached. New farm options are ready.`,4500),ur("level-up"))}function lc(n=new D(Ee.x,1.2,Ee.z)){const e=n.clone().add(new D(0,1,0)).project(Ct),t=on.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function Ti(){const n=si(f);if(!n||!ub(n))return!1;f.completedTasks.push(n.id),db(n),f.taskIndex+=1,n.reward.chapterComplete&&(n.reward.campaignComplete||(f.chapter=Math.min(_s.length-1,f.chapter+1)),Ws=n),f=Nr(f),qe("task_complete"),Xi(tt[n.focus]||new D(Ee.x,0,Ee.z),12181347),ur(n.reward.chapterComplete?"chapter-complete":"task-complete"),ni("campaign_task_complete",{task:n.id,chapter:n.chapter+1,coins:f.coins,xp:f.xp}),n.reward.unlockPro&&hb(),Ws?hp(Ws):(Ge(`Task complete: ${n.title}. ${jl(n.reward)}.`,4800),yi.celebrate({title:n.title,detail:jl(n.reward)})),dt();const e=Ce.chapterCoins.getBoundingClientRect();return yi.coins(n.reward.coins,Ws?{x:e.left,y:e.bottom}:lc(tt[n.focus])),!0}function hb(){const n=yt.position.clone(),e=yt.rotation.y;ri.remove(yt),zi(yt),yt=zf(),yt.position.copy(n),yt.rotation.y=e,ri.add(yt),Ee.speed=f.proPip?6.25:5.25}function nr(){return Math.max(0,f.coins-(f.market.built?0:gt.market))}function Iu(){return f.market.built?"":`<div class="status-strip"><span>Veg Stand reserve</span><strong>${gt.market} coins</strong></div>`}function Ai(n,e,t=!1){if(t&&nr()<n&&!f.market.built)return Ge("Keep 40 coins for the Veg Stand. Optional upgrades can use the remaining coins."),ur("error"),!1;if(f.coins<n)return Ge(`You need ${n-f.coins} more coins. Complete an order or task first.`),ur("error"),!1;const i=structuredClone(f);try{if(e(),f.coins-=n,f.coins<0)throw new Error("Invalid coin balance");return qe("purchase"),!0}catch{return f=i,Ge("That purchase was safely rolled back. Try again."),!1}}function Du(n){const e=f.towers[n];!e?.built||e.repaired||(e.repaired=!0,f.stats.serviceActions+=1,Ht("repair","repair"),Xi(tt[`tower-${n}`],6933459),Ge(`Tower ${n+1} is online. Its four planting layers are ready.`),qe("repair"),Ti(),dt())}function Uu(n){const e=f.towers[n];if(!e||e.built||n===0)return;const t=[0,5,8,10][n];if(f.taskIndex<t){Ge("Finish the current farm task before opening this lane.");return}const i=gt.tower[n];if(!Ai(i,()=>{e.built=!0,e.repaired=!0,f.beds[n].built=!0}))return;Ht("build","build"),Xi(tt[`tower-${n}`],16039245);const r=qi(f);Ge(`Tower ${n+1} and Grow Bed ${n+1} are built.${r&&!r.reason?` ${r.label} unlocked at the stand.`:""}`),Ti(),dt()}function ku(){if(f.market.built||f.taskIndex<3)return;const n=qi(f);if(!n?.available){Ge(n?.reason||`You need ${n.cost-f.coins} more coins.`);return}Ai(0,()=>{if(!cf(f))throw new Error("Construction unavailable")})&&(Ht("build","build"),Xi(tt.market,16039245),Ge("Pip's produce table is open. The first neighbor will stop by soon. Tower 2 unlocks a canopy."),Ti(),dt())}function Wf(n){const e=ic(f,n);if(!e.available){Ge(e.reason);return}Ai(0,()=>{if(!f1(f,n))throw new Error("Seed purchase changed")})&&(Vf(n),Ht("collect","seed-pickup"),Ge(`Bram: ${e.amount} ${Pe[n].label} seeds in the vault. ${e.tutorial?"First packet is on the house!":"No refunds for talking to your seedlings."}`),ni("seed_purchase",{crop:n,amount:e.amount,coins:e.price,tutorial:e.tutorial}),dt())}function $f(){Ai(0,()=>{if(!p1(f))throw new Error("Rescue unavailable")})&&(Vf("lettuce"),Ge("Bram: Two lettuce seeds to get you growing again. Everybody starts somewhere."),ni("seed_rescue"),dt())}function qf(){Ai(0,()=>{if(!m1(f))throw new Error("Vault upgrade unavailable")})&&(Ht("build","build"),Ge("Seed vault expanded: room for 48 seeds of each crop."),dt())}function Xf(n,e,t=null){const i=f.towers[n];if(!i?.built||!i.repaired||!f.unlockedCrops.includes(e))return;const r=Ao(i,f.carry,n),s=t===null?r[0]:t;if(!r.includes(s)){Ge(`Tower ${n+1} has no available layer. A carried starter's layer stays reserved.`);return}if(!Fn(f)){Ge("The shared tank needs a fresh mixed batch before planting."),Kt("reservoir");return}if(f.seeds[e]<=0){Ge(`Collect ${Pe[e].label} seeds from the Seed Vault first.`);return}f.seeds[e]-=1,oc(f)||(f.hydro.feedPhase=0);const o=Je(),a=ys(e,"tower",f,i)*1e3*ho;i.queue.push({id:crypto.randomUUID(),crop:e,layer:s,queuedAt:o,startedAt:o,readyAt:o+a,quality:1}),f.stats.planted+=1,f.stats.byCropQueued[e]+=1,hh(f)&&Fi(f,"matched",e),hh(f)&&Fi(f,"saving",e),new Set(i.queue.map(c=>c.crop)).size===4&&Fi(f,"mixed"),f.xp+=2,Ht("plant","plant"),Xi(tt[`tower-${n}`],Number.parseInt(Pe[e].color.slice(1),16)),Ge(`${Pe[e].label} planted in Tower ${n+1}, layer ${s+1}.`),f=Nr(f),qe("queue_crop"),Ti(),dt()}function ti(){return f.beds.filter(n=>n.built).reduce((n,e)=>n+Math.max(0,e.capacity-e.plants.length),0)}function Yf(){const n=f.beds.findIndex(e=>e.built&&e.plants.length<e.capacity);return n>=0?`bed-${n}`:null}function fb(){const n=Je(),e=f.towers.findIndex(t=>t.built&&t.repaired&&lr(t,n));return e>=0?`tower-${e}`:null}function ha(n=null){const e=Je(),t=f.beds.findIndex(i=>i.built&&i.plants.some(r=>r.readyAt<=e&&(!n||r.crop===n)));return t>=0?`bed-${t}`:null}function Qc(){const n=f.towers.findIndex((e,t)=>e.built&&e.repaired&&Ao(e,f.carry,t).length);return n>=0?`tower-${n}`:null}function pb(){const n=On(f);if(n)return n.crop;const e=si(f);if(e?.id==="first-tower-plan")return"lettuce";if(e?.id==="split-crop-plan"){if(f.stats.byCropQueued.tomato<1)return"tomato";if(f.stats.byCropQueued.kale<1)return"kale"}const t=Io(e).find(r=>r.crop&&r.current<r.target);if(t)return t.crop;if(!e){const r=Qn(f).find(o=>o.id===f.homestead.pinned),s=r&&Eo(f,r).find(o=>o.crop&&o.current<o.target);if(s&&f.unlockedCrops.includes(s.crop))return s.crop}return f.orders.find(r=>r.status==="waiting"&&f.unlockedCrops.includes(r.crop))?.crop||f.unlockedCrops[0]||"lettuce"}function hs(){return f.carry?.kind!=="produce"||!f.market.built?!1:f.orders.some(n=>n.status!=="waiting"?!1:f.carry.items.filter(e=>e===n.crop).length>=n.amount)}function bi(){if(f.carry?.kind==="starter")return Yf()||`tower-${f.carry.sourceTower}`;if(!Fn(f)&&!hs())return"reservoir";if(f.hydro.lineClogged&&!hs())return"filter";const n=On(f);if(n){const h=bn(f,n);if(!h.needed)return"market";if(!h.room||h.load)return"rack";const p=ha(n.crop);if(p)return p;const g=f.towers.findIndex(v=>lr(v,Je(),n.crop));if(g>=0)return f.carry?.kind==="produce"?"rack":ti()?`tower-${g}`:ha()||`bed-${Math.max(0,f.beds.findIndex(v=>v.built&&v.plants.length))}`;if(!h.missing){const v=f.beds.findIndex(w=>w.plants.some(b=>b.crop===n.crop));if(v>=0)return`bed-${v}`;const m=f.towers.findIndex(w=>w.queue.some(b=>b.crop===n.crop));if(m>=0)return`tower-${m}`}if(f.carry?.kind==="produce")return"rack";const x=Qc(n.crop);if(x)return f.seeds[n.crop]?x:"vault"}if(f.carry?.kind==="produce"){if(hs())return"market";if(f.carry.items.length<kt(f).basket){const h=ha();if(h)return h}return"rack"}const e=ha();if(e)return e;const t=fb();if(t&&ti()>0)return t;if(t&&ti()<=0){const h=f.beds.findIndex(p=>p.built&&p.plants.length);if(h>=0)return`bed-${h}`}if(!Fn(f))return"reservoir";const i=si(f);if(i?.goals?.capacityUpgrade&&!Lu()){const h=Gf().find(p=>f.coins>=p.cost);if(h)return h.id}if(i?.id==="launch-showcase"&&qi(f)?.available)return"market";const r={"repair-first-tower":0,"reopen-market":gt.market,"build-second-tower":gt.tower[1],"specialize-flow":0,"build-third-tower":gt.tower[2],"build-pro-yard":gt.tower[3]};if(i?.id in r&&f.coins>=r[i.id])return i.focus;const s=f.orders.filter(h=>h.status==="waiting");if(s.some(h=>f.rack[h.crop]>=h.amount))return"rack";const o=pb(),a=s.find(h=>h.crop===o),c=["first-tower-plan","split-crop-plan"].includes(i?.id),l=[];f.beds.forEach((h,p)=>h.plants.forEach(g=>{g.crop===o&&l.push({id:`bed-${p}`,readyAt:g.readyAt})})),f.towers.forEach((h,p)=>h.queue.forEach(g=>{g.crop===o&&l.push({id:`tower-${p}`,readyAt:g.readyAt??1/0})}));const u=i?.id==="first-grow-out"?Math.max(1,4-f.stats.harvested):a?.amount||1;if(!c&&l.length+f.rack[o]>=u&&l.length)return l.sort((h,p)=>h.readyAt-p.readyAt),l[0].id;if(f.market.built&&!c&&!a)return"market";const d=f.seeds[o]>0?Qc():null;if(d)return d;if(!Qc()){const h=f.towers.findIndex(p=>p.built&&p.queue.length);if(h>=0)return`tower-${h}`}return f.unlockedCrops.includes(o)?"vault":i?.focus||null}function mo(n,e=null){if($i(f)<=0){Ge(f.carry?.kind==="produce"?"Stage your harvest on the rack before loading starters.":$t(f.carry).length?"Plant or return your loaded starters before collecting more.":"Every bed is full. Harvest a finished crop before taking another starter."),ur("error");return}const t=Yy(f,n,Je(),e,On(f)?.crop);t.length&&(f=Nr(f),Ht("carry","pickup"),Ge(`${t.length===1?Pe[t[0].crop].label+" starter":t.length+" starters"} loaded. ${$t(f.carry).length}/${Mo(f.farm)} carried to the garden.`),qe("pickup_starter"),dt())}function ir(n){const e=jy(f,n,Je());e.length&&(Ht("return","return"),Ge(`${e.length} starter${e.length===1?"":"s"} returned safely to Tower ${n+1}.`),qe("return_starter"),dt())}function go(n){const e=f.beds[n];if(f.carry?.kind!=="starter"||!e?.built)return;if(e.plants.length>=e.capacity){Ge(`Grow Bed ${n+1} is full.`);return}const t=Ky(f,n,Je(),i=>ys(i,"bed",f)*1e3*ho);if(t.length){for(const i of t)f.stats.transplanted+=1,Fi(f,"transplant",i.crop),i.enriched&&Fi(f,"enriched",i.crop),f.xp+=3;Ht("transplant","transplant"),Xi(tt[`bed-${n}`],Number.parseInt(Pe[t[0].crop].color.slice(1),16)),Ge(`${t.length} starter${t.length===1?"":"s"} planted in Bed ${n+1}.${f.carry?` ${$t(f.carry).length} still carried.`:" They will finish growing in soil."}`),qe("transplant"),dt()}}function vo(n,e=null){if(!f.beds[n]?.built)return;if(f.carry?.kind==="starter"){Ge("Transplant or return the tower starter before harvesting.");return}if((f.carry?.kind==="produce"?f.carry.items:[]).length>=kt(f).basket){Ge("The harvest basket is full. Visit the market or Harvest Rack.");return}const r=Jy(f,n,e,Je(),kt(f).basket,uf(f.farm));if(!r.length){Ge("No finished crop is ready in this bed yet.");return}for(const s of r)f.stats.harvested+=1,f.stats.harvested===1&&ni("first_harvest",{crop:s.crop}),f.stats.byCropHarvested[s.crop]+=1,Fi(f,"harvest",s.crop),f.farm.scraps=Math.min(24,f.farm.scraps+1),f.xp+=Pe[s.crop].xp;Ht("harvest","harvest"),Xi(tt[`bed-${n}`],Number.parseInt(Pe[r[0].crop].color.slice(1),16)),Ge(`${r.length} finished crop${r.length===1?"":"s"} collected: ${f.carry.items.length}/${kt(f).basket}.`),qe("harvest"),Ti(),dt()}function xo(n=null,e=kt(f).basket){if(f.carry?.kind!=="produce")return;let t=0;f.carry.items=f.carry.items.filter(i=>(!n||i===n)&&t<e?(f.rack[i]+=1,t+=1,!1):!0),f.carry.items.length||(f.carry=null),Ht("store","rack"),t>0&&(f.tutorial.coach.staged=!0),Ge(`${t} finished crop${t===1?"":"s"} stored on the Harvest Rack.`),qe("rack_store"),dt()}function Ga(n,e=1){if(!Pe[n]||(e=Math.max(0,Math.min(kt(f).basket,Math.floor(Number(e)||0))),f.carry?.kind==="starter"))return;const t=f.carry?.kind==="produce"?f.carry.items:[],i=kt(f).basket-t.length,r=Math.min(i,e,f.rack[n]);if(!(r<=0)){f.carry||(f.carry={kind:"produce",items:[]});for(let s=0;s<r;s+=1)f.rack[n]-=1,f.carry.items.push(n);Ht("carry","pickup"),Ge(`${r} ${Pe[n].label} loaded from the rack.`),qe("rack_load"),dt()}}function jf(n=0){const e=new Set(f.orders.map((a,c)=>a.slot??c));n=[0,1,2].find(a=>!e.has(a))??n;const t=f.orderSequence,i=Zy(f),r=Ni.filter(a=>a.name!==f.lastCustomer&&!f.orders.some(c=>c.status==="waiting"&&c.customer===a.name)),s=r[Math.floor(Math.random()*r.length)];f.lastCustomer=s.name;const o=f.chapter===0?1:f.chapter===1?t%3===0?1:2:f.market.level>1&&t%3===2?3:2;return f.orderSequence+=1,{id:crypto.randomUUID(),slot:n,customer:s.name,crop:i,amount:o,reward:Pe[i].coinValue*o+8+f.market.level*2,xp:Pe[i].xp*o+4,createdAt:Je(),expiresAt:Je()+(90+Math.random()*60+(o-1)*30)*1e3,status:"waiting"}}function Kf(n){const e=f.orders[n];!e||e.status!=="waiting"||(f.selectedOrderId===e.id&&(f.selectedOrderId=null),Pu(e,n,!1),e.status="cooldown",e.expiresAt=Je()+2400,f.stats.rejectedOrders+=1,Ge(`${e.customer} heads home. Your produce stays safe on the rack for another visit.`),ur("order-reject"),qe("order_reject"),dt())}function Jf(n){const e=f.orders[n];!e||e.status!=="waiting"||(f.selectedOrderId=e.id,Ge(`${e.customer}'s order is reserved while you grow.`),qe("order_wait"),dt())}function mb(n){return(f.carry?.kind==="produce"?f.carry.items.filter(t=>t===n).length:0)+f.rack[n]}function bs(){if(!f.market.built)return null;const n=On(f);if(n)return n;const e=f.orders.filter(t=>t.status==="waiting");return e.find(t=>mb(t.crop)>=t.amount)||e.sort((t,i)=>t.expiresAt-i.expiresAt)[0]||null}function Nu(n){const e=f.orders[n];if(!e||e.status!=="waiting")return;const t=f.carry?.kind==="produce"?f.carry.items:[];if(t.filter(s=>s===e.crop).length<e.amount){f.rack[e.crop]>0?Ge(`Load ${Pe[e.crop].label} from the Harvest Rack, then return to ${e.customer}.`):Ge(`${e.customer} needs ${e.amount} ${Pe[e.crop].label}. Only finished garden produce can be sold.`),ur("error");return}let r=e.amount;f.carry.items=t.filter(s=>s===e.crop&&r>0?(r-=1,!1):!0),f.carry.items.length||(f.carry=null),f.coins+=e.reward,f.xp+=e.xp,f.stats.sold+=e.amount,f.stats.orders+=1,f.stats.orders===1&&ni("first_sale"),f.stats.byCropSold[e.crop]+=e.amount,Fi(f,"order",e.crop),Ht("sell","sale"),Pu(e,n),Xi(Va(n),Number.parseInt(Pe[e.crop].color.slice(1),16)),Ge(`${e.customer}: "${Ni.find(s=>s.name===e.customer)?.line}" +${e.reward} coins.`),f.selectedOrderId===e.id&&(f.selectedOrderId=null),e.status="cooldown",e.expiresAt=Je()+2400,qe("order_complete"),yi.coins(e.reward,lc(Va(n))),Ti(),dt()}function Wa(n){const e=f.orders[n];if(!e||e.status!=="waiting"||f.carry?.kind!=="produce"||f.carry.items.filter(i=>i===e.crop).length<e.amount)return;f.selectedOrderId=e.id;const t=Va(n).add(new D(0,0,.8));if(Math.hypot(Ee.x-t.x,Ee.z-t.z)<=.5)return _t()&&pn(),Nu(n);Kt("market"),Ee.target={x:t.x,z:t.z},$n=e.id,qe("delivery_start"),Ge(`Taking ${e.amount} ${Pe[e.crop].label} to ${e.customer}.`)}function Zf(n){const e=f.orders.find(i=>i.id===n&&i.status==="waiting");if(!e)return;f.selectedOrderId=e.id,qe("order_selected");const t=Vl(f,e);if(t.kind==="deliver")return Wa(f.orders.findIndex(i=>i.id===n));if(t.kind==="collect"){Kt("rack"),gi=e.id;return}Kt(bi()||"vault")}function Qf(n){const e=f.towers[n];if(!(!e?.built||e.irrigationUpgraded)){if(In(f,"drippers")){Ge(In(f,"drippers"));return}Ai(gt.queueUpgrade,()=>{e.irrigationUpgraded=!0},!0)&&(Ht("build","build"),Ge(`Tower ${n+1} has precision drippers. New starts grow 12% faster.`),Ti(),dt())}}function ep(n){const e=f.beds[n];if(!e?.built||e.capacity>=4)return;if(In(f,"bed",n)){Ge(In(f,"bed",n));return}const t=gt.bedUpgrade[n];Ai(t,()=>{e.capacity+=1},!0)&&(Ht("build","build"),Ge(`Grow Bed ${n+1} now holds ${e.capacity} crops.`),Ti(),dt())}function Ou(){if(!f.market.built)return;const n=qi(f);if(n){if(!n.available){Ge(n.reason||`You need ${n.cost-f.coins} more coins.`);return}Ai(0,()=>{if(!cf(f))throw new Error("Construction unavailable")})&&(Ht("build","build"),Xi(tt.market,16039245),Ge(`${n.label} complete. ${n.detail}`),Ti(),dt())}}function tp(){N1(f)&&(Ht("service","service"),Ge("Filter cleared. Full flow restored to the towers."),qe("feedline_cleared"),dt())}function np(n){R1(f,n)&&(f.hydro.servicedAt=Je(),f.stats.serviceActions+=1,Ht("service","service"),Ge(n==="water"?"Fresh starter batch filled. Circulate the IBC before feeding.":n==="mix"?"One evenly mixed batch supplies every tower.":"Delivery confirmed at every top outlet. The timer handles the short feeds."),qe("hydro_service"),Ti(),dt())}function ip(n){!lo[n]||f.cosmetics.owned.includes(n)||Ai(gt.cosmetics[n],()=>{f.cosmetics.owned.push(n),f.cosmetics.active.push(n)},!0)&&(Ht("build","build"),Ge(`${lo[n].label} added to the homestead.`),dt())}function gb(n){f.cosmetics.owned.includes(n)&&(f.cosmetics.active.includes(n)?f.cosmetics.active=f.cosmetics.active.filter(e=>e!==n):f.cosmetics.active.push(n),qe("cosmetic_toggle"),dt())}function vb(n){if(!n)return"Farm complete";const e=Io(n);if(e.length)return`${e.filter(t=>t.current>=t.target).length} / ${e.length}`;switch(n.id){case"repair-first-tower":return f.towers[0].repaired?"1 / 1":"0 / 1";case"first-tower-plan":return`${Math.min(2,f.stats.byCropQueued.lettuce)} / 2`;case"first-grow-out":return`${Math.min(4,f.stats.harvested)} / 4`;case"reopen-market":return f.market.built?"1 / 1":"0 / 1";case"build-second-tower":return f.towers[1].built?"1 / 1":"0 / 1";case"specialize-flow":return f.hydro.systemLessonDone?"1 / 1":"0 / 1";case"split-crop-plan":return`${Math.min(1,f.stats.byCropQueued.tomato)+Math.min(1,f.stats.byCropQueued.kale)} / 2`;case"build-third-tower":return f.towers[2].built?"1 / 1":"0 / 1";case"build-pro-yard":return f.towers[3].built?"1 / 1":"0 / 1";default:return""}}function Fu(){const n=Mf(f.xp);Ce.coins.textContent=f.coins.toLocaleString(),Ce.level.textContent=String(n.level),Ce.xp.textContent=n.needed?`${n.current} / ${n.needed}`:"MAX",Ce.xpFill.style.width=`${Math.round(n.ratio*100)}%`,Ce.chapter.previousElementSibling.textContent=f.campaignComplete?"Farm":"Chapter",Ce.chapter.textContent=f.campaignComplete?Tr(f)?"Master":`${f.homestead.claimed.length}/18`:`${f.chapter+1} / 3`;const e=si(f),t=_s[f.chapter];Ce.objectiveChapter.textContent=f.campaignComplete?"Homestead":`Chapter ${t.number}`;const i=Qn(f).find(s=>s.id===f.homestead.pinned)||Qn(f)[0];Ce.objectiveTitle.textContent=e?.title||i?.title||(Tr(f)?"Community requests continue":"Complete the crop mastery book"),Ce.objectiveProgress.textContent=e?vb(e):i?`${Eo(f,i).filter(s=>s.current>=s.target).length}/${i.goals.length}`:`${Object.values(f.homestead.mastery).reduce((s,o)=>s+o,0)}/15 badges`,te("#homesteadButton").hidden=!f.market.built,te(".campaign-controls").classList.toggle("has-goals",f.market.built);const r=Qn(f).filter(s=>tc(f,s)).length;te("#homesteadButton").textContent=r?`Goals (${r})`:"Goals",Bn.hidden||Oa.render(f),document.body.classList.toggle("high-contrast",f.settings.highContrast),Ls()}function Ls(){const n=bs(),e=!Bn.hidden||!oi.hidden||!ai.hidden||!fn.hidden||!Mn.hidden||!an.hidden;if(Ar.hidden=!n||e,Ar.classList.toggle("is-ready",!!(n&&bn(f,n).needed===0)),!n)return;const t=bn(f,n);Ce.marketChipCustomer.textContent=`${n.customer}${n.id===f.selectedOrderId?" / Reserved":" needs"}`,Ce.marketChipDemand.textContent=`${t.carried}/${n.amount} ${Pe[n.crop].label} in basket${t.stored?` / ${t.stored} rack`:""}`}function rp(){const n=si(f),e=_s[f.chapter];Ce.taskChapter.textContent=f.campaignComplete?"Campaign complete":`Chapter ${e.number}`,Ce.taskTitle.textContent=e.name,Ce.taskStory.textContent=n?.story||"Pip: The homestead is ready for every grow that comes next.",Ce.primaryTaskTitle.textContent=n?.title||"Keep the market growing",Ce.primaryTaskDetail.textContent=n?.detail||"Choose crops, improve the farm, and serve neighborhood orders.",Ce.primaryTaskReward.textContent=n?jl(n.reward):"All chapter rewards earned";const t=Dn.slice(f.taskIndex).find(o=>o.reward.unlockCrop||o.reward.unlockPro),i=te("#nextFarmUnlock");if(i.hidden=!t||f.campaignComplete,t){const o=t.reward.unlockPro?"Pro Pip and strawberry seeds":`${Pe[t.reward.unlockCrop].label} seeds`;i.textContent=`Next unlock: ${o}. Milestone: ${t.title}.`}te("#taskMilestones").innerHTML=Io(n).map(o=>{const a=o.current>=o.target;return`<li class="${a?"is-complete":""}"><span>${a?"&#10003; ":""}${o.label}</span><strong>${Math.min(o.current,o.target)} / ${o.target}</strong></li>`}).join("");const r=te("#taskUpgradeOptions");r.hidden=!n?.goals?.capacityUpgrade||Lu(),r.innerHTML=r.hidden?"":Gf().map(o=>`<button class="choice-button" data-upgrade-target="${o.id}"><strong>${o.label}</strong><small>${o.cost} coins</small></button>`).join(""),r.querySelectorAll("[data-upgrade-target]").forEach(o=>o.addEventListener("click",()=>Kt(o.dataset.upgradeTarget)));const s=Dn.filter(o=>o.chapter===f.chapter);Ce.chapterTaskList.innerHTML=s.map(o=>{const a=f.completedTasks.includes(o.id),c=o.id===n?.id;return`<div class="task-row ${a?"is-complete":""} ${c?"is-active":""}"><i>${a?"&#10003;":""}</i><span>${o.title}</span></div>`}).join("")}function xb(){const n=ii.filter(e=>f.rack[e]>0).map(e=>`${Pe[e].code} ${f.rack[e]}`);return n.length?n.join(" / "):"Empty"}function sp(){if(!f.carry)return"";const e=(f.carry.kind==="starter"?$t(f.carry).map(t=>t.crop):f.carry.items).reduce((t,i)=>(t[i]=(t[i]||0)+1,t),{});return Object.entries(e).map(([t,i])=>`${_t()?Pe[t].label:Pe[t].code} ${i}`).join(" / ")}function op(){if(Lf.hidden=!f.carry&&!f.farm.eggs,!f.carry){Ce.carryKind.textContent="Egg crate / market",Ce.carryContents.textContent=`${f.farm.eggs} eggs`;return}Ce.carryKind.textContent=f.carry.kind==="starter"?`Starters ${$t(f.carry).length}/${Mo(f.farm)}`:`Harvest ${f.carry.items.length}/${kt(f).basket}`,Ce.carryContents.textContent=sp()+(f.farm.eggs?` / ${f.farm.eggs} eggs`:"")}function ws(n){const e=Math.max(0,Math.ceil((n-Je())/1e3));return e>59?`${Math.floor(e/60)}m ${e%60}s`:`${e}s`}function Do(){const n=te("#sellFarmEggs");n.hidden=!f.farm.eggs;const e=Math.hypot(Ee.x-tt.market.x,Ee.z-tt.market.z)<3.6;n.textContent=e?`Sell ${f.farm.eggs} eggs / ${f.farm.eggs*8} coins`:`Take ${f.farm.eggs} eggs to the stand`,Ce.rackSummary.textContent=xb();const t=te("#orderMarketUpgrade"),i=qi(f);t.hidden=!i,t.disabled=!i?.available,i&&(t.textContent=`${i.label} / ${i.cost} coins${i.reason?` / ${i.reason}`:""}`);const r=On(f)||bs(),s=_t(),o=te("#mobileOrderAction"),a=te("#mobileOrderDetails"),c=te("#marketOptions");if(c.dataset.layout!==String(s)&&(c.open=!s,c.dataset.layout=String(s)),o.hidden=!s||!r,a.hidden=!s,s){const l=f.orders.filter(d=>d.status==="waiting"),u=r?Vl(f,r):null;Jt(Ce.orderList,l.length?`<div class="customer-picker" aria-label="Customers">${l.map(d=>{const h=Ni.find(p=>p.name===d.customer)||Ni[0];return`<button data-key="${d.id}" data-order-action="select" data-order-id="${d.id}" aria-label="${d.customer}: ${d.amount} ${Pe[d.crop].label}" aria-pressed="${d.id===r?.id}" title="${d.customer}"><img class="customer-avatar" src="${vh(h)}" alt=""><span>${d.customer}</span></button>`}).join("")}</div>${r?`<div class="mobile-order-summary"><strong>${r.amount} ${Pe[r.crop].label}</strong><b>${r.reward} coins</b><span>Basket ${u.stock.carried}/${r.amount}</span><span>${r.id===f.selectedOrderId?"Reserved":"Visiting"}</span></div>`:""}`:'<p class="order-status">No customers just now. Your stored crops are safe.</p>'),Jt(o,r?`<button class="primary-command" data-order-action="fulfill" data-order-id="${r.id}">${u.label}</button>`:""),Jt(a,r?`<p>Rack ${u.stock.stored} / Growing ${u.stock.growing+u.stock.ready} / +${r.xp} XP</p><p>${r.id===f.selectedOrderId?"Staying until you deliver or release.":`Leaving in ${ws(r.expiresAt)}`}</p><div class="mobile-order-options"><button data-order-action="wait" data-order-id="${r.id}">${r.id===f.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${r.id}">Release customer</button></div>`:"")}else Jt(Ce.orderList,f.orders.map((l,u)=>{const d=Ni.find(x=>x.name===l.customer)||Ni[0];if(l.status==="cooldown")return"";const h=Vl(f,l),p=h.stock,g=r?.id===l.id;return`<article class="order-card ${g?"is-selected":""}" data-order="${u}" data-key="${l.id}">
      <button class="order-select" data-order-action="select" data-order-id="${l.id}" aria-pressed="${l.id===f.selectedOrderId}"><img class="customer-avatar" src="${vh(d)}" alt=""><span><strong>${l.customer}</strong><span>${l.amount} ${Pe[l.crop].label}</span></span><span class="order-reward">${l.reward} coins<small>+${l.xp} XP</small></span></button>
      <div class="order-detail" ${g?"":"hidden"}>
        <p class="stock-breakdown">Basket <b>${p.carried}/${l.amount}</b> <span>Rack <b>${p.stored}</b></span> <span>Growing <b>${p.growing+p.ready}</b></span></p>
        <p class="order-status">${f.carry?.kind==="starter"?"Starter needs its garden finish":p.needed===0?"Packed for delivery":p.room===0?"Make room on the rack; your crops stay safe":p.load?`${p.load} needed from the rack`:p.ready?`${p.ready} ready in the garden`:p.missing?`${p.missing} still to plant`:"Your crop is growing"}</p>
        <p>${l.id===f.selectedOrderId?"Reserved: staying until you deliver or release":`Leaving in ${ws(l.expiresAt)}`}</p>
        <div class="order-actions"><button class="fulfill" data-order-action="fulfill" data-order-id="${l.id}" data-index="${u}">${h.label}</button><button data-order-action="wait" data-order-id="${l.id}">${l.id===f.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${l.id}">Release</button></div>
      </div>
    </article>`}).join("")||'<p class="order-status">The stand is quiet. Another neighbor will stop by soon. Stored produce keeps until then.</p>');fn.onclick=l=>{const u=l.target.closest("[data-order-action]");if(!u)return;const d=f.orders.findIndex(h=>h.id===u.dataset.orderId&&h.status==="waiting");d<0||(u.dataset.orderAction==="fulfill"&&Zf(u.dataset.orderId),["select","wait"].includes(u.dataset.orderAction)&&(Jf(d),Lo()),s&&u.dataset.orderAction==="select"&&(fn.querySelector(".order-scroll").scrollTop=0),u.dataset.orderAction==="reject"&&Kf(d),Do())},fn.hidden||(Rs.textContent=Bu("market"))}function Wn(n,e,t,i=!1){return`<button class="economy-command" data-command="${t}" ${i?"disabled":""}><span>${n}</span><strong>${e===0?"Free":`${e} coins`}</strong></button>`}function _b(n){const e=f.towers[n];if(Ce.interactionKicker.textContent="Hydro production",Ce.interactionTitle.textContent=`Tower ${n+1}`,!e.built){const d=gt.tower[n];Ce.interactionSummary.textContent=`Four independent planting layers and Grow Bed ${n+1}.`,Jt(hn,Wn(`Build Tower ${n+1}`,d,`build-tower-${n}`,f.coins<d));return}if(!e.repaired){Ce.interactionSummary.textContent="Repair the pump and flow line before planting.",Jt(hn,Wn("Repair tower",0,`repair-tower-${n}`));return}const t=Ao(e,f.carry,n),i=[0,1,2,3].map(d=>{const h=e.queue.find(g=>g.layer===d);if(!h)return`<label class="queue-slot is-empty"><b>${d+1}</b><span>${t.includes(d)?"Empty layer":"Reserved for carried starter"}</span><input type="radio" name="towerLayer" value="${d}" aria-label="Plant layer ${d+1}" ${d===t[0]?"checked":""} ${t.includes(d)?"":"disabled"}></label>`;const p=h.readyAt!==null&&h.readyAt<=Je();return`<div class="queue-slot" data-key="${h.id}"><b style="background:${Pe[h.crop].accent}">${d+1}</b><span>${Pe[h.crop].label}<small>${p?"Ready for the garden":ws(h.readyAt)}</small></span>${p?`<button class="storage-button" data-pickup-job="${h.id}" ${$i(f)<=0?"disabled":""}>Pick up</button>`:"<time>Growing</time>"}</div>`}).join(""),r=f.unlockedCrops.map(d=>`<button class="crop-button" data-queue-crop="${d}" ${!t.length||f.seeds[d]<=0?"disabled":""}><i style="background:${Pe[d].accent}">${Pe[d].code}</i><span>${Pe[d].label}<small>${f.seeds[d]} seeds / ${Math.ceil(ys(d,"tower",f,e))}s</small></span></button>`).join(""),s=$t(f.carry).filter(d=>d.sourceTower===n).length,o=s?Wn(`Return ${s} starter${s===1?"":"s"}`,0,`return-${n}`):"",a=Math.min($i(f),e.queue.filter(d=>d.readyAt!==null&&d.readyAt<=Je()).length),c=a>1?Wn(`Load ${a} ready starters`,0,`pickup-${n}`):"",l=In(f,"drippers"),u=e.irrigationUpgraded?'<div class="status-strip"><span>Precision drippers</span><strong>Installed</strong></div>':Wn(l||"Precision drippers / 12% faster",gt.queueUpgrade,`upgrade-queue-${n}`,!!l||nr()<gt.queueUpgrade);Ce.interactionSummary.textContent=`${e.queue.length}/4 layers planted. One seed per layer; each crop grows independently.`,Jt(hn,`${c}<div class="queue-list"><span>Layers / bottom to top</span>${i}</div>${o}<div class="crop-actions">${r}</div>${Iu()}${u}`)}function yb(n){const e=f.beds[n],t=e.plants.filter(u=>u.readyAt<=Je());Ce.interactionKicker.textContent="Garden grow-out",Ce.interactionTitle.textContent=`Grow Bed ${n+1}`,Ce.interactionSummary.textContent=`${e.plants.length} of ${e.capacity} plots used. ${t.length} crop${t.length===1?"":"s"} ready to harvest.`;const i=e.plants.length?e.plants.map(u=>`<div class="queue-slot"><b style="background:${Pe[u.crop].accent}">${Pe[u.crop].code}</b><span>${Pe[u.crop].label}<small>${u.readyAt<=Je()?"Garden finished":"Finishing in soil"}</small></span><time>${u.readyAt<=Je()?"Ready":ws(u.readyAt)}</time></div>`).join(""):`<div class="queue-slot is-empty"><b>1</b><span>Open garden plots<small>Tower starters finish here</small></span><time>${e.capacity}</time></div>`,r=Math.min($t(f.carry).length,Math.max(0,e.capacity-e.plants.length)),s=f.carry?.kind==="starter"?Wn(`Plant ${r} starter${r===1?"":"s"}`,0,`transplant-${n}`,!r):"",o=[...new Set(t.map(u=>u.crop))].map(u=>{const d=Math.min(uf(f.farm),t.filter(h=>h.crop===u).length,kt(f).basket-(f.carry?.items?.length||0));return`<button class="economy-command" data-harvest-crop="${u}" ${f.carry?.kind==="starter"||!d?"disabled":""}><span>Harvest ${d} ${Pe[u].label}</span><strong>${t.filter(h=>h.crop===u).length} ready</strong></button>`}).join(""),a=In(f,"bed",n),c=e.capacity<4?Wn(a||"Add garden plot",gt.bedUpgrade[n],`upgrade-bed-${n}`,!!a||nr()<gt.bedUpgrade[n]):"",l=f.farm.owned.includes("composter")?`<div class="status-strip"><span>Enriched plantings left</span><strong>${e.soilCharges}</strong></div><button class="economy-command" data-enrich-bed="${n}" ${e.soilCharges||!f.farm.compost?"disabled":""}><span>Enrich ${bu(f.farm)} plantings / 1 compost</span><strong>${f.farm.compost} bags</strong></button>`:"";Jt(hn,`<div class="queue-list"><span>Garden crops</span>${i}</div>${s}${o}${l}${Iu()}${c}`)}function bb(){Ce.interactionKicker.textContent="Seed merchant and vault",Ce.interactionTitle.textContent="Bram's Seeds",Ce.interactionSummary.textContent=`${f.coins} coins / ${$l(f)} seeds per crop`;const n=["Quality seeds. Questionable hat.","I talk to my seedlings. They mostly ask for space.","Four layers, four seeds. The hat is extra."],e=f.unlockedCrops.map(t=>{const i=ic(f,t);return`<button class="crop-button" data-key="${t}" data-collect-crop="${t}" ${i.available?"":"disabled"}><i style="background:${Pe[t].accent}">${Pe[t].code}</i><span>${Pe[t].label}<small>${f.seeds[t]}/${$l(f)} stored / ${i.amount} seeds for ${i.price} coins</small><small>${i.reason||(i.tutorial?"One free starter packet":"Buy packet")}</small></span></button>`}).join("");Jt(hn,`<p class="seed-merchant-quote">Bram: ${n[f.seedShop.purchases%n.length]}</p><div class="seed-stock">${e}</div>
    ${Au(f)?'<button class="secondary-command" data-rescue-seeds>Emergency lettuce packet / free</button>':""}
    ${Iu()}
    <button class="economy-command" data-expand-vault ${f.seedShop.expanded||!f.market.built||In(f,"vault")||f.coins<Ia?"disabled":""}><span>${f.seedShop.expanded?"Expanded vault / 48 per crop":f.market.built?In(f,"vault")||"Expand vault / 48 per crop":"Vault expansion / open table first"}</span><strong>${f.seedShop.expanded?"Owned":Ia+" coins"}</strong></button>`)}function wb(){Ce.interactionKicker.textContent="Neighborhood market";const n=As(f),e=qi(f);Ce.interactionTitle.textContent=n?af[n-1].label:"Pip's produce table";const t=e?`<p>Stage ${e.stage}/4: ${e.detail}</p>${Wn(e.reason||`Build ${e.label}`,e.cost,n?"upgrade-market":"build-market",!e.available)}`:"<p>Farm market complete. Family baskets available.</p>";if(!f.market.built){Ce.interactionSummary.textContent=f.market.openingGrant?`${f.market.openingGrant} opening coins restored. Your crops and upgrades are safe.`:"Start small. Each new tower unlocks the next section of the stand.",Jt(hn,t);return}Ce.interactionSummary.textContent=`Stage ${n}/4. ${f.stats.orders} orders complete. Up to ${Eu(f)} visiting at once, with quiet spells between groups.`;const i=Wn("Open order board",0,"open-orders"),r=f.carry?.kind==="produce"?`<div class="status-strip"><span>Basket</span><strong>${sp()}</strong></div>`:"";Jt(hn,`${r}${i}${t}`)}function Mb(){Ce.interactionKicker.textContent="Produce storage",Ce.interactionTitle.textContent="Harvest Rack",Ce.interactionSummary.textContent=`${f.carry?.kind==="produce"?f.carry.items.length:0}/${kt(f).basket} basket slots filled`;const n=f.carry?.kind==="produce"?Wn("Stage basket",0,"stage-produce"):"",e=On(f),t=e?bn(f,e).load:0,i=t?`<button class="economy-command" data-load-needed="${e.id}"><span>Load ${t} ${Pe[e.crop].label}</span><strong>For ${e.customer}</strong></button>`:"",r=ii.filter(o=>f.rack[o]>0).map(o=>`<div class="rack-row" data-key="stock-${o}"><span>${Pe[o].label}<small>${f.rack[o]} stored</small></span><input id="rack-qty-${o}" type="number" min="1" max="${Math.min(kt(f).basket,f.rack[o])}" value="1" aria-label="${Pe[o].label} quantity"><button class="storage-button" data-load-crop="${o}" ${f.carry?.kind==="starter"||f.carry?.items?.length>=kt(f).basket?"disabled":""}>Load</button></div>`).join(""),s=f.carry?.kind==="produce"?[...new Set(f.carry.items)].map(o=>`<button class="storage-button" data-store-crop="${o}">Store ${Pe[o].label} (${f.carry.items.filter(a=>a===o).length})</button>`).join(""):"";Jt(hn,`${i}${n}<div class="storage-actions">${s}</div><div class="storage-group"><span>Stored produce</span>${r||"<span>Rack empty</span>"}</div>`)}function Sb(){const n=f.hydro;Ce.interactionKicker.textContent="Shared HydroPip system",Ce.interactionTitle.textContent="IBC reservoir";const e=n.water?n.batchMixed?"Mixed starter batch":"Awaiting circulation":"Empty",t=Cf(f),i=Ro(f);Ce.interactionSummary.textContent=`${n.water.toFixed(1)}% / ${t}`;const r=(s,o)=>`<button class="secondary-command ${i[s]?"needs-service":""}" data-service="${s}" ${i[s]?"":"disabled"}>${o}${i[s]?'<span class="service-needed">Needs attention</span>':""}</button>`;Jt(hn,`<div class="storage-actions reservoir-actions">
    ${r("water",n.water>Ua?`Refill at ${Ua}%`:"Refill fresh batch")}
    ${r("mix",n.mixChecked?"Mixing confirmed":n.batchMixed?"Check circulation":"Circulate batch")}
    ${r("check",n.flowChecked&&!n.lineClogged?"Delivery confirmed":"Check tower delivery")}
    ${n.lineClogged?'<button class="secondary-command needs-service" data-focus-object="filter">Inspect feed filter<span class="service-needed">Needs attention</span></button>':""}
  </div><div class="hydro-readings">
    <label>Tank level <strong>${n.water.toFixed(1)}%</strong><meter min="0" max="100" low="30" high="70" optimum="100" value="${n.water}" aria-label="Reservoir water"></meter></label>
  </div><div class="queue-list">
    <div class="status-strip"><span>Batch ${n.batchNumber}</span><strong>${e}</strong></div>
    <div class="status-strip"><span>Mixing pump</span><strong>${n.mixChecked?"Circulation confirmed":"Check top discharge"}</strong></div>
    <div class="status-strip" data-feed-status><span>Feed pump</span><strong>${t}</strong></div>
    <div class="status-strip"><span>Tower delivery</span><strong>${n.flowChecked&&!n.lineClogged?"All outlets checked":f.towers.some(s=>s.built&&!s.repaired)?"Repair towers first":"Check top outlets"}</strong></div>
  </div><details class="system-notes"><summary>HydroPip field notes</summary>
    <p>Two pumps have different jobs: one circulates within the IBC; the other sends brief feeds to the tops of the towers. Water moves through reusable 50/50 perlite and vermiculite. Excess drains away, not back to the tank.</p>
    <p>Let the tank level fall, then mix a fresh batch. Choose real nutrient strength from plant development at refill, not per tower. Check circulation, delivery and media before assuming more fertilizer is needed. pH and optional EC/TDS readings need crop and water context.</p>
    <p>This farm uses a starter batch for its tower-to-garden succession. Real HydroPip also supports tower harvests and moving suitable mature plants into raised beds. The four-layer towers, timers and refill threshold here are simplified for play, not build dimensions or a feeding prescription.</p>
    <a href="https://hydropip-pip-api.onrender.com/field-guide" target="_blank" rel="noopener noreferrer">Open the real HydroPip Field Guide</a>
  </details>`)}function Eb(){Ce.interactionKicker.textContent="Farm improvements",Ce.interactionTitle.textContent="Homestead Shop",Ce.interactionSummary.textContent=`${nr()} spendable coins. Production, soil care, and livestock.`;const n=Object.entries(An).map(([i,r])=>{const s=Yt(f.farm,i),o=wu(f,i);return`<div class="shop-item"><strong>${r.label} / ${s}/${r.stages.length}</strong><p>${Iy(i,o?.level||s)}</p><button class="economy-command" data-buy-farm="${i}" ${!o||o.reason||nr()<o.cost?"disabled":""}><span>${o?o.reason||`Buy ${o.label}`:"Complete"}</span><strong>${o?`${o.cost} coins`:"Owned"}</strong></button></div>`}).join(""),e=f.beds.map((i,r)=>i.built&&i.capacity<4?Wn(`Bed ${r+1}: ${In(f,"bed",r)||`add plot (${i.capacity}/4)`}`,gt.bedUpgrade[r],`upgrade-bed-${r}`,!!In(f,"bed",r)||nr()<gt.bedUpgrade[r]):"").join("")+f.towers.map((i,r)=>i.built&&!i.irrigationUpgraded?Wn(`Tower ${r+1}: ${In(f,"drippers")||"precision drippers"}`,gt.queueUpgrade,`upgrade-queue-${r}`,!!In(f,"drippers")||nr()<gt.queueUpgrade):"").join(""),t=Object.entries(lo).map(([i,r])=>{const s=f.cosmetics.owned.includes(i),o=f.cosmetics.active.includes(i);return`<button class="economy-command" ${s?`data-toggle-cosmetic="${i}"`:`data-buy-cosmetic="${i}"`} ${!s&&nr()<gt.cosmetics[i]?"disabled":""}><span>${s?`${o?"Hide":"Show"} ${r.label}`:r.label}</span><strong>${s?"Owned":`${gt.cosmetics[i]} coins`}</strong></button>`}).join("");Jt(hn,`<div class="shop-list">${n}</div><div class="queue-list"><span>Production upgrades</span>${e||"<p>All production upgrades installed.</p>"}</div><div class="queue-list"><span>Decorations</span>${t}</div>`)}function ap(n){const e=wu(f,n);if(e){if(e.reason||f.coins<e.cost){Ge(e.reason||`You need ${e.cost-f.coins} more coins.`);return}Ai(0,()=>{if(!Dy(f,n))throw new Error("Equipment unavailable")},!0)&&(Ht("build","build"),Ge(`${e.label} added to the farm.`),qe("farm_upgrade"),dt())}}function Zs(n,e=null){const t=f.coins;let i=!1;n==="compost"&&(i=Oy(f,Je(),ho)),n==="feed"&&Pe[e]&&(i=Fy(f,e,Je(),ho)),n==="eggs"&&(i=By(f)),n==="sell-eggs"&&Math.hypot(Ee.x-tt.market.x,Ee.z-tt.market.z)<3.6&&(i=zy(f)),n==="enrich"&&(i=Hy(f,Number(e))),i&&(Fi(f,n==="sell-eggs"?"egg-sale":n,e),Ht(n==="sell-eggs"?"sell":"service",n==="sell-eggs"?"sale":"service"),Ge({compost:"Compost batch started.",feed:`Fed the coop. ${Yt(f.farm,"coop")} egg(s) will be ready soon.`,eggs:"Eggs collected; one coop clean-out added to compost scraps.","sell-eggs":"Fresh eggs sold at the stand.",enrich:`Bed enriched for its next ${bu(f.farm)} plantings.`}[n]),qe(`farm_${n}`),dt(),n==="sell-eggs"&&yi.coins(f.coins-t,lc(tt.market)))}function Tb(n){const e=f.farm;if(Ce.interactionKicker.textContent="Farm care",Ce.interactionTitle.textContent=An[n].label,n==="rainTank")Ce.interactionSummary.textContent="Collected rainwater supplements the main reservoir.",Jt(hn,`<div class="status-strip"><span>Tower water consumption</span><strong>${Yt(e,n)*10}% lower</strong></div><p>Active while tower layers grow. Refill the main reservoir as usual.</p>`);else if(n==="composter"){const t=Qa(f);Ce.interactionSummary.textContent=`${e.scraps}/24 scraps / ${e.compost}/12 compost bags`;const i=t.beds.map(s=>`<button class="economy-command" data-focus-object="bed-${s}"><span>Use compost at Bed ${s+1}</span><strong>1 bag</strong></button>`).join(""),r=e.compost?`<div class="status-strip"><span>Stored compost</span><strong>${e.compost} bag${e.compost===1?"":"s"}</strong></div>${i||"<p>Every built bed is already enriched. Stored bags will keep.</p>"}`:"";Jt(hn,`${r}<div class="status-strip"><span>Compost batch</span><strong>${t.batch}${e.compostReadyAt?` / ${ws(e.compostReadyAt)}`:""}</strong></div><button class="economy-command" data-farm-action="compost" ${t.canStart?"":"disabled"}><span>Compost 2 scraps</span><strong>1 bag / ${lf(e)}s</strong></button>`)}else{Ce.interactionSummary.textContent=`${e.eggs}/12 eggs packed / ${e.eggsReady} in the nest`;const t=ii.filter(i=>f.rack[i]>0);Jt(hn,`<div class="status-strip"><span>${Yt(e,n)} hen(s)</span><strong>${e.coopReadyAt?ws(e.coopReadyAt):e.eggsReady?"Eggs ready":"Ready for feed"}</strong></div><div class="crop-actions">${t.map(i=>`<button class="crop-button" data-feed-hens="${i}" ${e.coopReadyAt||e.eggsReady?"disabled":""}><span>Feed 1 ${Pe[i].label}<small>${f.rack[i]} on rack</small></span></button>`).join("")||"<p>No stored vegetables for feed.</p>"}</div><button class="economy-command" data-farm-action="eggs" ${!e.eggsReady||e.eggs+e.eggsReady>12?"disabled":""}><span>Collect ${e.eggsReady||Yt(e,n)} egg(s)</span><strong>Pack for market</strong></button><p>Sell packed eggs at the Veg Stand for 8 coins each. Hens stay safe between feedings.</p>`)}}function Ab(){hn.onclick=n=>{const e=n.target.closest("button");if(!e||e.disabled)return;const t=zt,i=JSON.stringify(f.carry),r=Number(t?.split("-")[1]);if(e.dataset.command){const o=e.dataset.command;if(o==="open-orders")return dr();o.startsWith("repair-tower-")&&Du(Number(o.at(-1))),o.startsWith("build-tower-")&&Uu(Number(o.at(-1))),o.startsWith("pickup-")&&mo(Number(o.at(-1))),o.startsWith("return-")&&ir(Number(o.at(-1))),o.startsWith("transplant-")&&go(Number(o.at(-1))),o.startsWith("harvest-")&&vo(Number(o.at(-1))),o.startsWith("upgrade-queue-")&&Qf(Number(o.at(-1))),o.startsWith("upgrade-bed-")&&ep(Number(o.at(-1))),o==="build-market"&&ku(),o==="upgrade-market"&&Ou(),o==="stage-produce"&&xo()}if(e.dataset.queueCrop){const o=hn.querySelector('[name="towerLayer"]:checked:not(:disabled)');Xf(r,e.dataset.queueCrop,o?Number(o.value):null)}if(e.dataset.pickupJob&&mo(r,e.dataset.pickupJob),e.dataset.buyFarm&&ap(e.dataset.buyFarm),e.dataset.farmAction&&Zs(e.dataset.farmAction),e.dataset.feedHens&&Zs("feed",e.dataset.feedHens),e.dataset.enrichBed!==void 0&&Zs("enrich",Number(e.dataset.enrichBed)),e.dataset.focusObject){Kt(e.dataset.focusObject);return}if(e.dataset.collectCrop&&Wf(e.dataset.collectCrop),e.dataset.rescueSeeds!==void 0&&$f(),e.dataset.expandVault!==void 0&&qf(),e.dataset.harvestCrop&&vo(r,e.dataset.harvestCrop),e.dataset.loadCrop&&Ga(e.dataset.loadCrop,te(`#rack-qty-${e.dataset.loadCrop}`).value),e.dataset.storeCrop&&xo(e.dataset.storeCrop),e.dataset.loadNeeded){const o=On(f);o&&Ga(o.crop,bn(f,o).load)}e.dataset.service&&np(e.dataset.service),e.dataset.flushLine!==void 0&&tp(),e.dataset.buyCosmetic&&ip(e.dataset.buyCosmetic),e.dataset.toggleCosmetic&&gb(e.dataset.toggleCosmetic);const s=e.dataset.pickupJob&&$i(f)>0&&lr(f.towers[r],Je());_t()&&/^(tower|bed)-/.test(t)&&i!==JSON.stringify(f.carry)&&!s?pn():an.hidden&&Uo(t)}}function Uo(n,e=!0){if(Bn.hidden=!0,!(!n||!tt[n])&&!(["coop","composter","rainTank"].includes(n)&&!f.farm.owned.includes(n))){if(n==="market"&&f.market.built){zt="market",dr();return}zt=n,oi.hidden=!0,fn.hidden=!0,ai.hidden=!1,Ls(),n.startsWith("tower-")?_b(Number(n.split("-")[1])):n.startsWith("bed-")?yb(Number(n.split("-")[1])):n==="vault"?bb():n==="market"?wb():n==="rack"?Mb():n==="reservoir"?Sb():n==="filter"?(Ce.interactionKicker.textContent="Tower water supply",Ce.interactionTitle.textContent="Feedline filter",Ce.interactionSummary.textContent=f.hydro.lineClogged?"Restricted flow: tower growth at 50%. Garden crops are unaffected.":"Full flow to all connected towers.",Jt(hn,`<button class="economy-command" data-flush-line ${f.hydro.lineClogged?"":"disabled"}><span>${f.hydro.lineClogged?"Clear clog":"Filter clear"}</span><strong>No cost</strong></button>`)):n==="workshop"?Eb():["coop","composter","rainTank"].includes(n)&&Tb(n),Ab(),e&&Lo(),Rs.textContent=Bu(n)}}function pn(){Bn.hidden=!0,te("#homesteadButton").setAttribute("aria-expanded","false"),oi.hidden=!0,ai.hidden=!0,fn.hidden=!0,ac.setAttribute("aria-expanded","false"),zt=null,Ls(),Lo()}function uc(){f.market.built&&(pn(),mi=null,$n=null,gi=null,xn(),Bn.hidden=!1,te("#homesteadButton").setAttribute("aria-expanded","true"),Oa.render(f),Ls())}function cp(n,e){if(n==="close")return pn();if(n==="render")return Oa.render(f);if(!f.market.built)return;if(n==="focus"){const o=Object.hasOwn(An,e)?f.farm.owned.includes(e)?An[e].attachment||e:"workshop":e;return pn(),Kt(o)}const t=f.coins,i=f.xp,r=Tr(f);let s=!1;if(n==="project"&&(s=Gy(f,e)),n==="mastery"&&(s=Wy(f,e)),n==="request-accept"&&(s=$y(f,e)),n==="request-claim"&&(s=qy(f)),n==="request-refresh"&&(s=Xy(f)),n==="request-abandon"&&f.homestead.request&&(f.homestead.request=null,f.homestead.requestSerial++,s=!0),n==="pin"&&Qn(f).some(o=>o.id===e&&o.chapter<=f.chapter)&&(f.homestead.pinned=e,s=!0),!!s){if(["project","mastery","request-claim"].includes(n)){Ht("celebrate","task-complete");const o=n==="project"&&{3:` Your basket now holds ${kt(f).basket} crops.`,6:" Seed packets now contain 6 seeds at the same price.",12:" Tower water use is now 10% lower.",18:" The harvest festival display is installed."}[f.homestead.claimed.length];Ge(Tr(f)?"Master Grower! Your homestead and crop book are complete. New community requests await.":`Reward earned.${o||""}`)}if(qe(`homestead_${n}`),dt(),Oa.render(f),["project","mastery","request-claim"].includes(n)){const o=!r&&Tr(f),a=or.find(d=>d.id===e),c=f.homestead.claimed.length,l=n==="project"&&{3:"Basket expanded to 7 crops!",6:"Six seeds in every packet!",12:"10% less tower water use!",18:"Harvest festival unlocked!"}[c],u=o?"Master Grower!":n==="project"?a.title:n==="mastery"?`${Pe[e].label} mastery ${f.homestead.mastery[e]}/3`:"Community request complete!";yi.celebrate({title:u,detail:`+${f.coins-t} coins / +${f.xp-i} XP${l?`. ${l}`:""}${n==="mastery"?" / +2 seeds":""}`,major:o||n==="project"||n==="mastery"&&f.homestead.mastery[e]===3,rhythm:o||n==="project"&&c%3===0}),yi.coins(f.coins-t,lc())}}}function lp(){if(f.campaignComplete)return uc();Bn.hidden=!0,ai.hidden=!0,fn.hidden=!0,oi.hidden=!1,ac.setAttribute("aria-expanded","true"),Ls(),rp()}function dr(){Bn.hidden=!0,f.market.built&&(zt="market",oi.hidden=!0,ai.hidden=!0,fn.hidden=!1,Ls(),Do(),f.tutorial.marketSeen||(f.tutorial.marketSeen=!0,qe("market_seen")))}function Bu(n=zt){if(_t()&&!zt&&f.carry?.kind==="starter")return ti()?"Transplant":"Return";if(!zt&&hs())return"Deliver";if(!n)return f.carry?.kind==="starter"&&ti()<=0?"Return":f.carry?.kind==="produce"&&f.carry.items.length>=kt(f).basket&&f.market.built?hs()?"Deliver":"Stage":bi()?"Guide":"Inspect";const e=bi();if(n==="vault")return"Seeds";if(n==="market"){const t=On(f)||bs();return f.market.built&&t&&bn(f,t).needed===0?"Deliver":f.market.built?"Orders":"Build"}if(n==="rack")return f.carry?.kind==="produce"?"Stage":"Inspect";if(n==="reservoir")return"Service";if(n==="filter")return f.hydro.lineClogged?"Clear clog":"Inspect";if(n==="workshop")return"Shop";if(n.startsWith("tower-")){const t=Number(n.split("-")[1]),i=f.towers[t];return i.built?i.repaired?lr(i,Je())&&$i(f)>0?Mo(f.farm)>1?"Load":"Pick up":$t(f.carry).some(r=>r.sourceTower===t)?"Return":"Plan":"Repair":"Build"}if(n.startsWith("bed-")){const t=Number(n.split("-")[1]);return f.carry?.kind==="starter"&&f.beds[t].plants.length>=f.beds[t].capacity&&ti()<=0?"Return":f.carry?.kind==="starter"?"Transplant":f.beds[t].plants.some(i=>i.readyAt<=Je())?"Harvest":!zt&&e&&e!==n?"Guide":"Inspect"}return"Inspect"}function up(){if(Rt||!Mn.hidden||!an.hidden||!Si.hidden||!Or.hidden)return;Br();const n=!!zt,e=zt||dp();if(_t()&&!n&&f.carry?.kind==="starter"){const i=Yf()||`tower-${f.carry.sourceTower}`;return i===e?i.startsWith("bed-")?go(Number(i.split("-")[1])):ir(f.carry.sourceTower):Kt(i,!0)}if(!n&&hs()){const i=On(f),r=i&&bn(f,i).needed===0?i:f.orders.find(s=>s.status==="waiting"&&bn(f,s).needed===0);return Wa(f.orders.indexOf(r))}if(!e){if(f.carry?.kind==="starter"&&ti()<=0){Ge("Beds are full, so Pip is returning this starter to its tower."),Kt(`tower-${f.carry.sourceTower}`);return}if(f.carry?.kind==="produce"&&f.carry.items.length>=kt(f).basket&&f.market.built){Ge("Basket is full, so Pip is heading to the Harvest Rack."),Kt("rack");return}const i=bi();if(i){Kt(i,_t());return}lp();return}if(e.startsWith("tower-")){const i=Number(e.split("-")[1]),r=f.towers[i];if(!r.built)return Uu(i);if(!r.repaired)return Du(i);if(lr(r,Je())&&$i(f)>0)return mo(i);if($t(f.carry).some(s=>s.sourceTower===i))return ir(i)}if(e.startsWith("bed-")){const i=Number(e.split("-")[1]);if(f.carry?.kind==="starter"&&f.beds[i].plants.length>=f.beds[i].capacity&&ti()<=0)return ir(f.carry.sourceTower);if(f.carry?.kind==="starter")return go(i);if(f.beds[i].plants.some(r=>r.readyAt<=Je())){const r=On(f)?.crop;return vo(i,r&&f.beds[i].plants.some(s=>s.crop===r&&s.readyAt<=Je())?r:null)}}if(e==="market"&&f.market.built){const i=On(f)||bs();return i&&bn(f,i).needed===0?Wa(f.orders.indexOf(i)):dr()}if(e==="market"&&!f.market.built)return ku();if(e==="rack"&&f.carry?.kind==="produce")return xo();if(e==="filter"&&f.hydro.lineClogged)return tp();if(f.carry?.kind==="starter"&&ti()<=0)return ir(f.carry.sourceTower);const t=bi();if(!n&&t&&t!==e)return Kt(t,_t());Uo(e)}function dp(n=1.8){let e=null,t=n;return Object.entries(tt).forEach(([i,r])=>{if(["coop","composter","rainTank"].includes(i)&&!f.farm.owned.includes(i)||i.startsWith("bed-")&&!f.beds[Number(i.split("-")[1])].built)return;const s=Math.hypot(Ee.x-r.x,Ee.z-r.z);s<t&&(e=i,t=s)}),e}function Kt(n,e=!1){if(["coop","composter","rainTank"].includes(n)&&!f.farm.owned.includes(n))return;const t=tt[n];t&&($n=null,gi=null,mi=n,Na=e,Ee.target={x:t.x,z:t.z+(n==="workshop"?1.9:n==="market"?1.3:1.15)},pn(),!_t()&&Ge(`Pip is heading to ${n.startsWith("tower")?`Tower ${Number(n.at(-1))+1}`:n.startsWith("bed")?`Grow Bed ${Number(n.at(-1))+1}`:n==="vault"?"the Seed Vault":n==="market"?"the Veg Stand":n==="rack"?"the Harvest Rack":n==="reservoir"?"the reservoir":n==="filter"?"the feed filter":Object.hasOwn(An,n)?`the ${An[n].label}`:"the farm shop"}.`))}function Cb(n){const e=Number(n.split("-")[1]);if(n.startsWith("tower-")){const t=f.towers[e].queue.filter(i=>i.readyAt!==null&&i.readyAt<=Je());if($i(f)>0&&t.length)return new Set(t.map(i=>i.crop)).size===1?(mo(e),!0):!1;if($t(f.carry).some(i=>i.sourceTower===e))return ir(e),!0}if(n.startsWith("bed-")){if(f.carry?.kind==="starter")return go(e),!0;const t=f.beds[e].plants.filter(r=>r.readyAt<=Je()),i=On(f)?.crop;if(t.length&&(new Set(t.map(r=>r.crop)).size===1||t.some(r=>r.crop===i)))return vo(e,t.some(r=>r.crop===i)?i:t[0].crop),!0}return n==="rack"&&f.carry?.kind==="produce"?(xo(),!0):!1}function Rb(n){if(Rt)return;let e=(_n.right?1:0)-(_n.left?1:0)+ka.x,t=(_n.down?1:0)-(_n.up?1:0)+ka.z;if(Ee.target&&!e&&!t){const c=Ee.target.x-Ee.x,l=Ee.target.z-Ee.z,u=Math.hypot(c,l);if(u<.16){if(Ee.target=null,mi){const d=mi;mi=null;const h=Na;Na=!1;const p=$n;$n=null;const g=gi;if(gi=null,d==="market"&&p){const x=f.orders.findIndex(v=>v.id===p&&v.status==="waiting");x>=0?Nu(x):Ge("That customer has left. Your produce is still in the basket."),an.hidden&&!_t()&&dr()}else if(d==="rack"&&g){const x=f.orders.find(v=>v.id===g&&v.status==="waiting");x&&Ga(x.crop,bn(f,x).load),dr()}else{const x=d.startsWith("tower-")&&f.carry?.kind==="starter"&&f.carry.sourceTower===Number(d.split("-")[1])&&ti()<=0;x&&ir(f.carry.sourceTower),_t()&&(x||h&&Cb(d))||Uo(d)}}}else e=c/u,t=l/u}else(e||t)&&(Ee.target=null,mi=null,$n=null,gi=null);const i=!!(e||t);if(i){const c=Math.hypot(e,t);e/=Math.max(1,c),t/=Math.max(1,c),Ee.x=Dt.clamp(Ee.x+e*Ee.speed*n,-13.8,13.8),Ee.z=Dt.clamp(Ee.z+t*Ee.speed*n,-8.5,8.5),Ee.pendingFacing=Math.atan2(e,t),Ee.direction=Math.abs(e)>Math.abs(t)?e>0?"east":"west":t>0?"south":"north",yt.rotation.y=Dt.lerp(yt.rotation.y,Ee.pendingFacing,Math.min(1,n*12))}yt.position.x=Ee.x,yt.position.z=Ee.z;const r=yt.userData.parts,s=yt.getObjectByName("campaign carry"),o=!!s?.userData.groundCarrier;if(i&&s?.userData.wheels?.forEach(c=>{c.rotation.x+=Ee.speed*n/.208}),r){i&&(Ee.gaitPhase+=Ee.speed*n*1.65);const c=Math.sin(Ee.gaitPhase),l=Math.min(1,n*14);if(r.body.position.y=i?Math.abs(c)*.014:Math.sin(performance.now()*.0018)*.005,r.body.rotation.x=0,r.legs.forEach((u,d)=>{const h=d?-c:c;u.rotation.x=Dt.lerp(u.rotation.x,i?-h*.4:0,l),r.knees[d].rotation.x=Dt.lerp(r.knees[d].rotation.x,i?Math.max(0,-h)*.38:0,l),r.boots[d].rotation.x=-u.rotation.x-r.knees[d].rotation.x*.7;const p=r.arms[d];p.rotation.x=Dt.lerp(p.rotation.x,o?-.5:f.carry?-.75:i?h*.28:0,l),p.rotation.z=(d?1:-1)*(f.carry?-.08:.08),r.elbows[d].rotation.x=Dt.lerp(r.elbows[d].rotation.x,o?-.3:f.carry?-.65:-.08,l)}),Ee.actionTime>0){Ee.actionTime-=n;const u=Math.sin((1-Ee.actionTime/.72)*Math.PI);["plant","transplant","harvest"].includes(Ee.action)&&(r.body.rotation.x=u*.22),["repair","service","build"].includes(Ee.action)&&(r.arms[0].rotation.x=-1.2*u),Ee.action==="sell"&&(r.arms[1].rotation.x=-1.25*u),Ee.action==="celebrate"&&(r.arms[0].rotation.x=-1.5*u,r.arms[1].rotation.x=-1.5*u,r.body.position.y+=u*.13)}else r.body.rotation.x=0,Ee.action=i?"run":"idle"}const a=dp();zt||(Rs.textContent=Bu(a))}function dc(n,e=!1){const t=_t(),i=new D(Ee.x*(t?.95:.55),.45,Ee.z*(t?.9:.45));t&&!fn.hidden&&i.set(tt.market.x+.3,.45,tt.market.z+2.8),e||f.settings.reducedMotion?da.copy(i):da.lerp(i,1-Math.exp(-n*5));const s=t?Dt.clamp(Tn/520,.45,1):1;Ct.position.copy(da).add(new D(7.7,13,14.3).multiplyScalar(s)),Ct.lookAt(da),Ct.zoom=e||f.settings.reducedMotion?ei:Dt.lerp(Ct.zoom,ei,1-Math.exp(-n*12));const o=t&&[ai,fn,oi,Bn].find(p=>!p.hidden),a=t&&qn>620&&innerWidth>innerHeight,c=o&&a?o.getBoundingClientRect().width*.5:0,l=o&&!a?o.getBoundingClientRect().height*.4:0,u=e||f.settings.reducedMotion?1:1-Math.exp(-n*6),d=Dt.lerp(Ct.view?.enabled?Ct.view.offsetX:0,c,u),h=Dt.lerp(Ct.view?.enabled?Ct.view.offsetY:0,l,u);d>.1||h>.1?Ct.setViewOffset(qn,Tn,d,h,qn,Tn):Ct.clearViewOffset(),Ct.updateProjectionMatrix(),Ct.updateMatrixWorld()}function Is(n){ei=Dt.clamp(n,.7,_t()?1.3:1.55),te("#zoomOut").disabled=ei<=.7001,te("#zoomIn").disabled=ei>=(_t()?1.3:1.55)-1e-4}function Pb(){mt.updateMatrixWorld(!0);const n=on.getBoundingClientRect(),e=[ac,fo,Lf,Ar,te(".camera-tools"),te("#landscapeNotice"),ai,fn,oi,Bn,..._t()?[te("#thumbstick"),Rs,te("#homesteadButton")]:[]].filter(u=>!u.hidden&&u.getClientRects().length&&getComputedStyle(u).visibility!=="hidden").map(u=>{const d=u.getBoundingClientRect();return{left:d.left-n.left,top:d.top-n.top,right:d.right-n.left,bottom:d.bottom-n.top}}),t=bi(),i=new Set(cc()),r=new D;function s(u,d,h,p,g){const x={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(const v of[-h,h])for(const m of[0,p])for(const w of[-g,g]){r.set(u+v,m,d+w).project(Ct);const b=(r.x+1)*qn/2,_=(1-r.y)*Tn/2;x.left=Math.min(x.left,b),x.right=Math.max(x.right,b),x.top=Math.min(x.top,_),x.bottom=Math.max(x.bottom,_)}return x}Yl=s(Ee.x,Ee.z,.65,2.15,.45),e.push(Yl);for(const u of mt.children)u.userData.customerIndex!==void 0&&e.push(s(u.position.x,u.position.z,.45,2.2,.3));const o=[];for(const u of po){const d=u.userData.worldLabel;u.getWorldPosition(r);const h=Math.hypot(r.x-Ee.x,r.z-Ee.z),p=-r.clone().applyMatrix4(Ct.matrixWorldInverse).z;if(r.project(Ct),u.visible=!1,u.labelElement.hidden=!0,h>(_t()?4.8:5.4)||p<=0||r.z<-1||r.z>1)continue;const g=(r.x+1)*qn/2,x=(1-r.y)*Tn/2,v={left:g-d.width/2,right:g+d.width/2,top:x-d.height/2,bottom:x+d.height/2};if(v.left<6||v.right>qn-6||v.top<6||v.bottom>Tn-6)continue;const m=u.userData.interactiveId;if(u.labelElement.classList.toggle("needs-attention",i.has(m)),!fn.hidden&&m!=="market"&&m!=="rack")continue;const w=(m===zt?200:m===t?100:0)+(/ready/i.test(d.text)?20:0)-h;o.push({label:u,data:d,box:v,depth:p,priority:w})}o.sort((u,d)=>d.priority-u.priority);const a=(u,d)=>u.left<d.right+5&&u.right>d.left-5&&u.top<d.bottom+5&&u.bottom>d.top-5;let c=0;const l=new Set;for(const{label:u,data:d,box:h,depth:p}of o){const g=u.userData.interactiveId;if(c>=(_t()?3:5)||l.has(g))continue;const x=[0,-32,32].find(v=>{const m={...h,top:h.top+v,bottom:h.bottom+v};return m.top>=6&&m.bottom<=Tn-6&&!e.some(w=>a(m,w))});x!==void 0&&(h.top+=x,h.bottom+=x,u.visible=!0,u.labelElement.hidden=!1,u.labelElement.style.transform=`translate(${Math.round(h.left)}px, ${Math.round(h.top)}px)`,d.bounds=h,e.push(h),l.add(g),c+=1)}}function Lb(n){const e=Fn(f);P1(f,n,Je(),(1-Yt(f.farm,"rainTank")*.1)*kt(f).water),e&&k1(f,n,Je())&&(Ge("Feed filter clogged. Check the delivery line before changing the nutrient batch.",6500),qe("feedline_clogged"))}function Ib(n=.5){if(!f.market.built)return;const e=f.orders.length;f.orders.forEach((r,s)=>{r.status==="waiting"&&r.expiresAt<=Je()&&r.id!==f.selectedOrderId&&r.id!==$n&&Pu(r,s,!1)}),f.orders=f.orders.filter(r=>r.id===f.selectedOrderId||r.id===$n||r.expiresAt>Je());const t=Qy(f,n/ho,jf);e!==f.orders.length||t?(qe(),dt()):fn.hidden||Do()}function hp(n){const e=_s[n.chapter];Ce.chapterResultKicker.textContent=n.reward.campaignComplete?"Homestead foundations complete":`Chapter ${e.number} complete`,Ce.chapterResultTitle.textContent=n.reward.campaignComplete?"The Pro Yard is thriving.":n.chapter===0?"The Homestead is growing.":"Your three-tower farm is ready!",Ce.chapterResultSummary.textContent=n.reward.campaignComplete?"Your four-tower farm is open. Complete 18 homestead projects and earn 15 crop mastery badges to become a Master Grower.":n.chapter===0?"The first tower and Veg Stand are back in business.":"You expanded to three towers and served the neighborhood with tomato and kale. Next: build the Pro Yard.",Ce.chapterCoins.textContent=`+${n.reward.coins||0}`,Ce.chapterXp.textContent=`+${n.reward.xp||0}`,Ce.chapterUnlock.textContent=n.reward.campaignComplete?"Homestead projects":_s[n.chapter+1].shortName,te("#continueChapter").textContent=n.reward.campaignComplete?"Grow the homestead":"Continue",an.hidden=!1,Rt=!0,xn(),Bi.stop(),yi.chapter(an,!!n.reward.campaignComplete),te("#continueChapter").focus(),qe("chapter_complete"),ni(n.reward.campaignComplete?"campaign_complete":"campaign_chapter_complete",{chapter:n.chapter+1,coins:f.coins,xp:f.xp})}function dt(){Fu(),rp(),op(),!ai.hidden&&zt&&Uo(zt,!1),fn.hidden||Do(),Lo(),Ba.update()}function Ms(){qn=Math.max(1,on.clientWidth),Tn=Math.max(1,on.clientHeight);const n=Po?1:Fa==="desktop"?1.55:Cs?1.25:1.15;wt.setPixelRatio(Math.max(1,Math.min(window.devicePixelRatio||1,n))),wt.setSize(qn,Tn,!1),Ct.aspect=qn/Tn,Ct.updateProjectionMatrix(),Is(ei),dc(1,!0)}function xn(){If?.reset(),Object.keys(_n).forEach(n=>{_n[n]=!1}),te(".campaign-controls").querySelectorAll("[data-move]").forEach(n=>n.classList.remove("is-active"))}function zu(n){if(Rt=n,document.body.classList.toggle("is-paused",Rt),B1.hidden=!Rt,Rt){xn(),Bi.stop(),qe("pause");return}Br()}function fp(n){const e=Math.min(.05,(n-ph)/1e3||0);ph=n,on.clientWidth>0&&on.clientHeight>0&&(on.clientWidth!==qn||on.clientHeight!==Tn)&&Ms(),!Rt&&Mn.hidden&&an.hidden&&(Rb(e),Lb(e),cb(e),lb(e),dc(e),n-mh>500&&(mh=n,f=Nr(f),Ib(),Fu(),op(),Hf()!==Uf&&Lo(),Y1(),!ai.hidden&&zt&&Uo(zt,!1)),n-Df>5e3&&qe(),Ma&&n>Ma&&(fo.textContent=si(f)?.detail||"The homestead is ready for its next grow.",Ma=0,fo.classList.remove("is-active"))),Z1(),n-gh>250&&(gh=n,Ba.update()),Pb(),wt.render(ri,Ct),Kc+=1,n-jc>=3e3&&(Kc/(n-jc)*1e3<32&&Fa==="desktop"&&(Fa="adaptive",wt.shadowMap.enabled=!1,ci.castShadow=!1,wt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.15)),Ms()),jc=n,Kc=0),requestAnimationFrame(fp)}function Db(n){const e=wt.domElement.getBoundingClientRect();Zc.x=(n.clientX-e.left)/e.width*2-1,Zc.y=-((n.clientY-e.top)/e.height)*2+1,Jc.setFromCamera(Zc,Ct);const i=Jc.intersectObjects(mt.children,!0).find(o=>o.object.visible&&(o.object.userData.interactiveId||o.object.userData.instanceTargets?.[o.instanceId]));if(i){let o=i.object;for(;o&&!o.userData.orderId;)o=o.parent;return{id:i.object.userData.interactiveId||i.object.userData.instanceTargets[i.instanceId],orderId:o?.userData.orderId}}const r=new er(new D(0,1,0),0),s=new D;return Jc.ray.intersectPlane(r,s)?{point:s}:null}function lt(){const n=si(f),e=M1(f);return{version:f.version,chapter:f.chapter,taskIndex:f.taskIndex,taskId:n?.id||null,coins:f.coins,xp:f.xp,level:f.level,challengeUnlocked:f.challengeUnlocked,campaignComplete:f.campaignComplete,proPip:f.proPip,unlockedCrops:[...f.unlockedCrops],towersBuilt:f.towers.filter(t=>t.built).length,bedsBuilt:f.beds.filter(t=>t.built).length,marketBuilt:f.market.built,marketLevel:f.market.level,marketStage:As(f),marketOffer:qi(f),visitorCapacity:Eu(f),milestones:Io(n),selectedObject:zt,selectedOrderId:f.selectedOrderId,saleAnimations:Ks.length,pendingDeliveryId:$n,pendingRackOrderId:gi,pipTarget:Ee.target,queueCapacities:f.towers.map(t=>t.queueCapacity),irrigationUpgrades:f.towers.map(t=>t.irrigationUpgraded),specializations:f.towers.map(t=>t.specialization),queueCount:f.towers.reduce((t,i)=>t+i.queue.length,0),gardenCount:f.beds.reduce((t,i)=>t+i.plants.length,0),seeds:{...f.seeds},rack:{...f.rack},carry:f.carry?JSON.parse(JSON.stringify(f.carry)):null,orders:f.orders.map(t=>({...t})),featuredOrder:bs()?{...bs()}:null,stats:JSON.parse(JSON.stringify(f.stats)),ledger:e,openBedCount:ti(),taskDrawerOpen:!oi.hidden,interactionOpen:!ai.hidden,orderDrawerOpen:!fn.hidden,welcomeVisible:!Mn.hidden,chapterResultVisible:!an.hidden,guideTarget:bi(),actionLabel:Rs.textContent,marketChipVisible:!Ar.hidden,marketChipText:Ar.hidden?"":Ar.textContent.trim().replace(/\s+/g," "),paused:Rt,pipPosition:{x:Number(Ee.x.toFixed(2)),z:Number(Ee.z.toFixed(2))},pipDirection:Ee.direction,pipHeight:Number(new xi().setFromObject(yt).getSize(new D).y.toFixed(3)),leafEarCount:yt.userData.parts?.leafEars?.length||0,activeHudCoverage:Ub(),coreTextMinimum:kb(),savePresent:!!localStorage.getItem(Co),performanceTier:Fa,renderCalls:wt.info.render.calls,renderTriangles:wt.info.render.triangles}}function Ub(){const n=on.getBoundingClientRect(),t=["#objectiveBar","#campaignMessage","#carryChip","#marketChip"].map(i=>te(i)).filter(i=>i&&!i.hidden&&i.getClientRects().length).reduce((i,r)=>{const s=r.getBoundingClientRect(),o=Math.max(0,Math.min(s.right,n.right)-Math.max(s.left,n.left)),a=Math.max(0,Math.min(s.bottom,n.bottom)-Math.max(s.top,n.top));return i+o*a},0);return Number((t/Math.max(1,n.width*n.height)).toFixed(3))}function kb(){const n=[...document.querySelectorAll("#objectiveTitle,#campaignMessage,#actionButton,#marketChip strong,#carryContents,#coinValue,#levelValue,#xpValue,#chapterValue,#interactionPanel>p,.crop-button span,.crop-button small,.queue-slot time,.status-strip,.economy-command span,.order-card h3,.order-reward,.order-actions button,.task-row,.primary-task p")].filter(e=>e.getClientRects().length);return Math.min(...n.map(e=>Number.parseFloat(getComputedStyle(e).fontSize)))}function Nb(){f.towers.forEach(n=>n.queue.forEach((e,t)=>{e.startedAt=Je()-1e3,e.readyAt=Je()-1})),qe(),dt()}function Ob(){f.beds.forEach(n=>n.plants.forEach(e=>{e.plantedAt=Je()-1e3,e.readyAt=Je()-1})),qe(),dt()}function Fb(n=500){f.coins+=n,qe(),dt()}V1();dt();Ms();Mn.hidden=f.tutorial.welcomeSeen;f.tutorial.welcomeSeen?ni("campaign_resume",{chapter:f.chapter+1,task:si(f)?.id||"complete"}):Rt=!0;ac.addEventListener("click",()=>f.campaignComplete?uc():oi.hidden?lp():pn());te("#homesteadButton").addEventListener("click",()=>Bn.hidden?uc():pn());Ar.addEventListener("click",()=>f.market.built?dr():Kt("market"));te("#orderMarketUpgrade").addEventListener("click",()=>{Ou(),Do()});te("#sellFarmEggs").addEventListener("click",()=>{Math.hypot(Ee.x-tt.market.x,Ee.z-tt.market.z)>=3.6?Kt("market"):Zs("sell-eggs")});te("#closeTasks").addEventListener("click",pn);te("#closeInteraction").addEventListener("click",pn);te("#closeOrders").addEventListener("click",pn);te("#focusTaskButton").addEventListener("click",()=>Kt(bi()));Rs.addEventListener("click",up);te("#beginCampaign").addEventListener("click",()=>{f.tutorial.welcomeSeen=!0,Mn.hidden=!0,Rt=!1,Br(),qe("campaign_start"),ni("campaign_start",{chapter:f.chapter+1,task:si(f)?.id}),Ge("Repair Tower 1 to make the first permanent improvement.")});te("#pauseButton").addEventListener("click",()=>zu(!0));te("#resumeButton").addEventListener("click",()=>zu(!1));let pp=!1;te("#settingsButton").addEventListener("click",()=>{pp=Rt,Rt=!0,Bi.stop(),xn(),qe("settings_open"),Si.hidden=!1,te("#highContrastSetting").checked=f.settings.highContrast,te("#pipCoachSetting").checked=f.tutorial.coach.enabled,te("#reducedMotionSetting").checked=f.settings.reducedMotion,te("#musicSetting").value=String(Math.round(f.settings.musicVolume*100)),te("#effectsSetting").value=String(Math.round(f.settings.effectsVolume*100)),Ce.musicValue.textContent=`${Math.round(f.settings.musicVolume*100)}%`,Ce.effectsValue.textContent=`${Math.round(f.settings.effectsVolume*100)}%`});function Hu(){Bb.cancelImport(),Si.hidden=!0,Rt=pp,xn(),qe("settings")}te("#closeSettings").addEventListener("click",Hu);te("#settingsDone").addEventListener("click",Hu);te("#retrySave").addEventListener("click",()=>qe("retry"));const Bb=E1(()=>f,n=>{f=n});te("#saveWarning").addEventListener("click",()=>te("#settingsButton").click());te("#highContrastSetting").addEventListener("change",n=>{f.settings.highContrast=n.target.checked,Fu()});te("#pipCoachSetting").addEventListener("change",n=>n.target.checked?Ba.enable():Ba.disable());te("#reducedMotionSetting").addEventListener("change",n=>{f.settings.reducedMotion=n.target.checked,n.target.checked&&yi.clearMotion()});te("#musicSetting").addEventListener("input",n=>{f.settings.musicVolume=Number(n.target.value)/100,Ce.musicValue.textContent=`${n.target.value}%`,Ps()});te("#effectsSetting").addEventListener("input",n=>{f.settings.effectsVolume=Number(n.target.value)/100,Ce.effectsValue.textContent=`${n.target.value}%`,Ps()});te("#soundButton").addEventListener("click",()=>{f.settings.soundEnabled=f.settings.soundEnabled===!1,Ps(),qe("sound_toggle"),f.settings.soundEnabled&&Br()});Ps();te("#resetFarm").addEventListener("click",()=>{Si.hidden=!0,Or.hidden=!1});te("#cancelReset").addEventListener("click",()=>{Or.hidden=!0,Si.hidden=!1});te("#confirmReset").addEventListener("click",()=>{f=w1(),location.reload()});te("#continueChapter").addEventListener("click",()=>{an.hidden=!0,yi.clearMotion(),Ws=null,Rt=!1,Ht("celebrate","task-complete"),qe("chapter_continue"),Ge(si(f)?.story||"The homestead is ready for its next grow."),f.campaignComplete&&uc()});te("#zoomOut").addEventListener("click",()=>Is(ei/1.15));te("#zoomIn").addEventListener("click",()=>Is(ei*1.15));te("#recenter").addEventListener("click",()=>{Is(1),dc(1,!0)});on.addEventListener("wheel",n=>{if(Rt||!Mn.hidden||!an.hidden)return;n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?Tn:1);Is(ei*Math.exp(-Dt.clamp(e,-160,160)*.0015))},{passive:!1});function mp(n){if(Rt||!Mn.hidden||!an.hidden)return;Br();const e=Db(n);if(e)if(e.orderId){const t=f.orders.findIndex(i=>i.id===e.orderId&&i.status==="waiting");t>=0&&(Jf(t),bn(f,f.orders[t]).needed===0?Wa(t):dr())}else e.id?Kt(e.id,_t()):e.point&&(pn(),mi=null,$n=null,gi=null,Ee.target={x:Dt.clamp(e.point.x,-13.8,13.8),z:Dt.clamp(e.point.z,-8.5,8.5)})}If=D1({canMove:()=>!Rt&&Mn.hidden&&an.hidden&&Si.hidden&&Or.hidden,onStart:()=>{(zt||[ai,fn,oi,Bn].some(n=>!n.hidden))&&pn(),yi.dismiss(),xn(),Br(),Ee.target=null,mi=null,$n=null,gi=null,Na=!1},onMove:(n,e)=>{ka.x=n*.88+e*.47,ka.z=e*.88-n*.47},onLayout:()=>{xn(),Ms()},closePanels:pn});U1({onOpen:()=>{const n=Rt;return Rt=!0,xn(),Bi.stop(),qe("display_options"),()=>{Rt=n,xn()}},onExit:()=>{xn(),Bi.stop(),qe("display_exit"),Mn.hidden&&an.hidden&&Si.hidden&&Or.hidden&&(zu(!0),te("#pauseReason").textContent="Your farm is saved. Resume when ready, or return to HydroPip.",te("#resumeButton").focus())},onLeave:()=>{xn(),Bi.stop(),qe("leave_game")},onResize:()=>{xn(),Ms()}});const Hi=new Map;let Qs=null,Kl=!1;on.addEventListener("pointerdown",n=>{if(n.pointerType!=="touch")return mp(n);if(on.setPointerCapture(n.pointerId),Hi.set(n.pointerId,{x:n.clientX,y:n.clientY,startX:n.clientX,startY:n.clientY}),Hi.size===2){const[e,t]=[...Hi.values()];Qs={distance:Math.max(1,Math.hypot(e.x-t.x,e.y-t.y)),zoom:ei},Kl=!0,Ee.target=null,mi=null,$n=null,gi=null}});on.addEventListener("pointermove",n=>{const e=Hi.get(n.pointerId);if(e&&(e.x=n.clientX,e.y=n.clientY,Hi.size===2&&Qs&&!Rt&&Mn.hidden&&an.hidden)){const[t,i]=[...Hi.values()];Is(Qs.zoom*Math.hypot(t.x-i.x,t.y-i.y)/Qs.distance)}});function gp(n){const e=Hi.get(n.pointerId);e&&!Kl&&n.type==="pointerup"&&Math.hypot(n.clientX-e.startX,n.clientY-e.startY)<10&&mp(n),Hi.delete(n.pointerId),Hi.size||(Kl=!1,Qs=null)}on.addEventListener("pointerup",gp);on.addEventListener("pointercancel",gp);document.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(e==="escape"){if(n.preventDefault(),!Si.hidden){Hu();return}pn();return}n.target instanceof HTMLElement&&n.target.matches("button,input,a,textarea,select")||(["arrowleft","arrowright","arrowup","arrowdown"," "].includes(e)&&n.preventDefault(),(e==="arrowleft"||e==="a")&&(_n.left=!0),(e==="arrowright"||e==="d")&&(_n.right=!0),(e==="arrowup"||e==="w")&&(_n.up=!0),(e==="arrowdown"||e==="s")&&(_n.down=!0),n.code==="Space"&&!n.repeat&&up())});document.addEventListener("keyup",n=>{const e=n.key.toLowerCase();(e==="arrowleft"||e==="a")&&(_n.left=!1),(e==="arrowright"||e==="d")&&(_n.right=!1),(e==="arrowup"||e==="w")&&(_n.up=!1),(e==="arrowdown"||e==="s")&&(_n.down=!1)});document.querySelectorAll("[data-move]").forEach(n=>{const e=n.dataset.move,t=i=>{_n[e]=i,n.classList.toggle("is-active",i)};n.addEventListener("pointerdown",i=>{i.preventDefault(),n.setPointerCapture(i.pointerId),t(!0)}),n.addEventListener("pointerup",()=>t(!1)),n.addEventListener("pointercancel",()=>t(!1)),n.addEventListener("pointerleave",()=>t(!1))});window.addEventListener("blur",xn);window.addEventListener("resize",Ms);window.addEventListener("pagehide",()=>{xn(),qe("pagehide")});document.addEventListener("visibilitychange",()=>{document.hidden?(xn(),qe("visibility")):(f=Nr(Ru()),Ps(),dt())});Pf&&(window.__HYDROPIP_CAMPAIGN_TEST__={homesteadAction:cp,homesteadView(){return{...f.homestead,complete:Tr(f),perks:kt(f),active:Qn(f).map(n=>({id:n.id,ready:tc(f,n),goals:Eo(f,n)}))}},neighborhoodView(){return cs.snapshot()},neighborhoodEvent(n,e=0){cs.start(n);for(let t=0;t<e;t+=.05)cs.update(.05,{marketBuilt:f.market.built,reducedMotion:f.settings.reducedMotion});return cs.snapshot()},farmEquipmentView(){const n=mt.getObjectByName("farm coop");return{owned:f.farm.owned,hens:(n?.userData.hens||[]).map(e=>({position:e.position.toArray(),turn:e.rotation.y}))}},layerScreenPoint(n,e){const t=tt[`tower-${n}`].clone();t.y=.52+e*.61+.4,t.x+=e%2?.16:-.16,t.z+=.29-e*.18,t.project(Ct);const i=wt.domElement.getBoundingClientRect();return{x:i.left+(t.x+1)*i.width/2,y:i.top+(1-t.y)*i.height/2}},farmLayout(){return{positions:Object.fromEntries(Object.entries(tt).map(([n,e])=>[n,{x:e.x,z:e.z}])),attention:cc(),labels:po.filter(n=>n.visible).map(n=>({id:n.userData.interactiveId,text:n.userData.worldLabel.text,distance:Math.hypot(n.getWorldPosition(new D).x-Ee.x,n.getWorldPosition(new D).z-Ee.z)})),feedline:!!mt.getObjectByName("reservoir tower feedline"),lineClogged:f.hydro.lineClogged}},snapshot:lt,reservoirView(){return c1(mt.getObjectByName("water reservoir"))},hydroView(){let n=null;return mt.traverse(e=>{e.userData.flowSegments&&(n={visible:e.visible,count:e.count,matrices:Array.from(e.instanceMatrix.array.slice(0,48))})}),{flow:n,feed:Cf(f),available:Ro(f),plantedLayers:oc(f)}},setWater(n){return f.hydro.water=Dt.clamp(n,0,100),qe("test-water"),lt()},viewState(){const n=wt.domElement.getBoundingClientRect(),e=Ct.projectionMatrix.elements;return{aspect:Ct.aspect,width:qn,height:Tn,canvasWidth:n.width,canvasHeight:n.height,bufferWidth:wt.domElement.width,bufferHeight:wt.domElement.height,squareRatio:e[0]*n.width/(e[5]*n.height),zoom:Ct.zoom,targetZoom:ei,pipBounds:Yl,direction:Ct.getWorldDirection(new D).toArray(),labels:po.filter(t=>t.visible).map(t=>({...t.userData.worldLabel,opacity:1}))}},customerView(){const n=new Zh;return mt.children.filter(e=>e.userData.customerIndex!==void 0).map(e=>{const t=e.localToWorld(new D(0,1.65,0)).project(Ct);n.setFromCamera(new ge(t.x,t.y),Ct);let i=n.intersectObjects(mt.children,!0).find(r=>r.object.visible)?.object;for(;i&&i.parent!==mt;)i=i.parent;return{index:e.userData.customerIndex,x:(t.x+1)*qn/2,y:(1-t.y)*Tn/2,unoccluded:i===e}})},focusObject:Kt,characterPortrait(n=.22){const e=new du;e.background=new ot(8894381),e.add(new xu(16775142,6585696,1.3));const t=new ja(16773330,1.5);t.position.set(-3,5,5),e.add(t);const i=of(f.proPip);i.rotation.y=n,e.add(i);const r=new En(30,.8,.1,20);r.position.set(0,1.8,6),r.lookAt(0,1.23,0);const s=480,o=600,a=new Vi(s,o);a.texture.colorSpace=nn;const c=wt.getRenderTarget();try{wt.setRenderTarget(a),wt.render(e,r);const l=new Uint8Array(s*o*4);wt.readRenderTargetPixels(a,0,0,s,o,l);const u=document.createElement("canvas");u.width=s,u.height=o;const d=u.getContext("2d"),h=d.createImageData(s,o);for(let p=0;p<o;p++)h.data.set(l.subarray(p*s*4,(p+1)*s*4),(o-p-1)*s*4);return d.putImageData(h,0,0),u.toDataURL("image/png")}finally{wt.setRenderTarget(c),a.dispose(),zi(i)}},characterRig(){yt.updateMatrixWorld(!0);const n=yt.userData.parts,e=t=>t.getWorldPosition(new D).toArray();return{handsAttached:n.hands.every((t,i)=>t.parent===n.elbows[i]&&n.elbows[i].parent===n.arms[i]),bootsAttached:n.boots.every((t,i)=>t.parent===n.knees[i]&&n.knees[i].parent===n.legs[i]),overalls:!!yt.getObjectByName("farmer overalls"),growingSuit:n.farmerSuit.visible,faceFrame:!!yt.getObjectByName("Pip head"),earPieces:n.headsetCups.length,eyeHighlights:n.eyes.length,emblem:!!yt.getObjectByName("HydroPip shirt emblem"),belt:n.belt.visible,hands:n.hands.map(e),feet:n.boots.map(e),elbows:n.elbows.map(e),shoulders:n.arms.map(t=>t.rotation.toArray().slice(0,3)),bodyLift:n.body.position.y,leaves:n.leafEars.length,height:new xi().setFromObject(yt).getSize(new D).y}},renderedCrops(){const n=[];return mt.traverse(e=>{if(!e.userData.growthTiming)return;const t=e.children.filter(i=>i.geometry?.type==="ExtrudeGeometry");n.push({crop:e.userData.crop,location:e.userData.interactiveId,stage:e.userData.growthStage,scale:e.userData.growthScale??e.scale.x,visibleFruit:e.children.filter(i=>i.userData.ripeningFruit&&i.visible).reduce((i,r)=>i+(r.isInstancedMesh?r.count*r.userData.fruitPerInstance:1),0),instances:e.userData.plantingPlacements?.length||1,layer:e.userData.layer??null,jobId:e.userData.jobId??null,leaves:(e.userData.foliageMaterials||t.map(i=>i.material)).map(i=>({r:i.color.r,g:i.color.g,b:i.color.b}))})}),n},carrierView(){const n=yt.getObjectByName("campaign carry");if(!n)return null;ri.updateMatrixWorld(!0);const e=new xi().setFromObject(n);return{ground:n.userData.groundCarrier,minY:e.min.y,wheels:(n.userData.wheels||[]).map(t=>t.rotation.x),starters:n.children.filter(t=>t.name.startsWith("carried ")).length,position:yt.position.toArray(),bounds:{min:e.min.toArray(),max:e.max.toArray()}}},dismissWelcome(){return f.tutorial.welcomeSeen=!0,Mn.hidden=!0,Rt=!1,qe(),lt()},reset(){return f=sc(),f.tutorial.welcomeSeen=!0,Rt=!1,qe(),dt(),lt()},reloadState(){return f=Nr(Ru()),dt(),lt()},grantCoins:Fb,repairTower(n=0){return Du(n),lt()},buildTower(n){return Uu(n),lt()},buildMarket(){return ku(),lt()},collectSeeds(n){return Wf(n),lt()},rescueSeeds(){return $f(),lt()},expandVault(){return qf(),lt()},queueCrop(n,e,t=null){return Xf(n,e,t),lt()},matureTowers(){return Nb(),lt()},pickupStarter(n,e=null){return mo(n,e),lt()},returnStarter(n){return ir(n),lt()},transplant(n){return go(n),lt()},matureBeds(){return Ob(),lt()},harvest(n,e=null){return vo(n,e),lt()},stageProduce(){return xo(),lt()},loadRack(n,e=5){return Ga(n,e),lt()},upgradeQueue(n){return Qf(n),lt()},upgradeBed(n){return ep(n),lt()},upgradeMarket(){return Ou(),lt()},buyCosmetic(n){return ip(n),lt()},buyFarmUpgrade(n){return ap(n),lt()},farmAction(n,e){return Zs(n,e),lt()},serviceHydro(n){return np(n),lt()},forceOrders(n=["lettuce","basil","lettuce"]){return f.orders=n.slice(0,3).map((e,t)=>({...jf(t),slot:t,crop:e,amount:1,reward:Pe[e].coinValue+10})),qe(),dt(),lt()},grantProduce(n,e=1){if(!Pe[n])return lt();f.carry?.kind==="starter"&&(f.carry=null),f.carry||(f.carry={kind:"produce",items:[]});let t=0;for(let i=0;i<e&&f.carry.items.length<kt(f).basket;i+=1)f.carry.items.push(n),t+=1;return f.stats.planted+=t,f.stats.transplanted+=t,f.stats.harvested+=t,f.stats.byCropQueued[n]+=t,f.stats.byCropHarvested[n]+=t,qe(),dt(),lt()},grantStarter(n="lettuce",e=0){return Pe[n]&&(f.carry={kind:"starter",crop:n,quality:1,sourceTower:e,sourceLayer:Ao(f.towers[e])[0],job:{id:crypto.randomUUID(),crop:n,queuedAt:Je(),startedAt:Je(),readyAt:Je(),quality:1}},f.stats.planted+=1,f.stats.byCropQueued[n]+=1,qe(),dt()),lt()},fillBeds(){return f.beds.filter(n=>n.built).forEach(n=>{for(;n.plants.length<n.capacity;)n.plants.push({id:crypto.randomUUID(),crop:"lettuce",plantedAt:Je(),readyAt:Je()+9999999,quality:1}),f.stats.planted+=1,f.stats.transplanted+=1,f.stats.byCropQueued.lettuce+=1}),qe(),dt(),lt()},deliver(n){return Nu(n),lt()},reject(n){return Kf(n),lt()},openOrders(){return dr(),lt()},showResult(n=11){return hp(Dn[Math.max(0,Math.min(Dn.length-1,n))]),lt()},showcasePip(n="south"){const e={south:0,east:Math.PI/2,north:Math.PI,west:-Math.PI/2};return n in e&&(Ee.direction=n,Ee.pendingFacing=e[n],yt.rotation.y=e[n],Ee.x=0,Ee.z=-.25,Ee.target=null,mi=null,pn(),dc(1,!0)),lt()},setTask(n){return f.taskIndex=Math.max(0,Math.min(Dn.length,n)),f.chapter=Dn[f.taskIndex]?.chapter??2,qe(),dt(),lt()},save(){return qe("test"),lt()},rawState(){return JSON.parse(JSON.stringify(f))}});window.__HYDROPIP_CAMPAIGN_READY__=!0;requestAnimationFrame(fp);
