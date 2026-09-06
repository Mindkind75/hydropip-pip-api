(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const yl="179",If=0,hu=1,Uf=2,Dd=1,Id=2,Si=3,Yi=0,dn=1,mn=2,Wi=0,Jr=1,fu=2,pu=3,mu=4,Nf=5,dr=100,kf=101,Of=102,Ff=103,Bf=104,zf=200,Hf=201,Vf=202,Gf=203,wc=204,Sc=205,Wf=206,$f=207,Xf=208,qf=209,Yf=210,jf=211,Jf=212,Kf=213,Zf=214,Ec=0,Tc=1,Ac=2,es=3,Cc=4,Rc=5,Pc=6,Lc=7,Ud=0,Qf=1,ep=2,$i=0,tp=1,np=2,ip=3,Nd=4,rp=5,sp=6,op=7,kd=300,ts=301,ns=302,Dc=303,Ic=304,va=306,ta=1e3,fr=1001,Uc=1002,wn=1003,ap=1004,yo=1005,Zn=1006,ka=1007,pr=1008,si=1009,Od=1010,Fd=1011,Fs=1012,Ml=1013,vr=1014,Qn=1015,to=1016,bl=1017,wl=1018,Bs=1020,Bd=35902,zd=1021,Hd=1022,zn=1023,zs=1026,Hs=1027,Sl=1028,El=1029,Vd=1030,Tl=1031,Al=1033,qo=33776,Yo=33777,jo=33778,Jo=33779,Nc=35840,kc=35841,Oc=35842,Fc=35843,Bc=36196,zc=37492,Hc=37496,Vc=37808,Gc=37809,Wc=37810,$c=37811,Xc=37812,qc=37813,Yc=37814,jc=37815,Jc=37816,Kc=37817,Zc=37818,Qc=37819,el=37820,tl=37821,Ko=36492,nl=36494,il=36495,Gd=36283,rl=36284,sl=36285,ol=36286,cp=3200,lp=3201,Cl=0,up=1,Hi="",Qt="srgb",is="srgb-linear",na="linear",bt="srgb",Rr=7680,gu=519,dp=512,hp=513,fp=514,Wd=515,pp=516,mp=517,gp=518,vp=519,vu=35044,_u="300 es",ei=2e3,ia=2001;class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xu=1234567;const Rs=Math.PI/180,Vs=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Rl(n,e){return(n%e+e)%e}function _p(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ps(n,e,t){return(1-t)*n+t*e}function yp(n,e,t,i){return Ps(n,e,1-Math.exp(-t*i))}function Mp(n,e=1){return e-Math.abs(Rl(n,e*2)-e)}function bp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Sp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ep(n,e){return n+Math.random()*(e-n)}function Tp(n){return n*(.5-Math.random())}function Ap(n){n!==void 0&&(xu=n);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cp(n){return n*Rs}function Rp(n){return n*Vs}function Pp(n){return(n&n-1)===0&&n!==0}function Lp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ip(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $r(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:Rs,RAD2DEG:Vs,generateUUID:Sr,clamp:lt,euclideanModulo:Rl,mapLinear:_p,inverseLerp:xp,lerp:Ps,damp:yp,pingpong:Mp,smoothstep:bp,smootherstep:wp,randInt:Sp,randFloat:Ep,randFloatSpread:Tp,seededRandom:Ap,degToRad:Cp,radToDeg:Rp,isPowerOfTwo:Pp,ceilPowerOfTwo:Lp,floorPowerOfTwo:Dp,setQuaternionFromProperEuler:Ip,normalize:cn,denormalize:$r};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class no{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==f||l!==p||u!==g){let v=1-a;const m=c*f+l*p+u*g+d*_,S=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const L=Math.sqrt(b),A=Math.atan2(L,m*S);v=Math.sin(v*A)/L,a=Math.sin(a*A)/L}const x=a*S;if(c=c*v+f*x,l=l*v+p*x,u=u*v+g*x,d=d*v+_*x,v===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new I,yu=new no;class it{constructor(e,t,i,r,s,o,a,c,l){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],v=r[3],m=r[6],S=r[1],b=r[4],x=r[7],L=r[2],A=r[5],P=r[8];return s[0]=o*_+a*S+c*L,s[3]=o*v+a*b+c*A,s[6]=o*m+a*x+c*P,s[1]=l*_+u*S+d*L,s[4]=l*v+u*b+d*A,s[7]=l*m+u*x+d*P,s[2]=f*_+p*S+g*L,s[5]=f*v+p*b+g*A,s[8]=f*m+p*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new it;function $d(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Up(){const n=ra("canvas");return n.style.display="block",n}const Mu={};function Kr(n){n in Mu||(Mu[n]=!0,console.warn(n))}function Np(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const bu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kp(){const n={enabled:!0,workingColorSpace:is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===bt&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?na:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[is]:{primaries:e,whitePoint:i,transfer:na,toXYZ:bu,fromXYZ:wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:bu,fromXYZ:wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const vt=kp();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pr;class Op{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=ra("canvas")),Pr.width=e.width,Pr.height=e.height;const r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fp=0;class Pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ba(r[o].image)):s.push(Ba(r[o]))}else s=Ba(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Op.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bp=0;const za=new I;class nn extends us{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=fr,r=fr,s=Zn,o=pr,a=zn,c=si,l=nn.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Sr(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=kd;nn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],v=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+v)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,x=(p+1)/2,L=(m+1)/2,A=(u+f)/4,P=(d+_)/4,U=(g+v)/4;return b>x&&b>L?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=P/i):x>L?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=U/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=U/s),this.set(i,r,s,t),this}let S=Math.sqrt((v-g)*(v-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(v-g)/S,this.y=(d-_)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zp extends us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new nn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends zp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xd extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hp extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),bo.subVectors(this.max,ys),Lr.subVectors(e.a,ys),Dr.subVectors(e.b,ys),Ir.subVectors(e.c,ys),Ui.subVectors(Dr,Lr),Ni.subVectors(Ir,Dr),ir.subVectors(Lr,Ir);let t=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-ir.z,ir.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,ir.z,0,-ir.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-ir.y,ir.x,0];return!Ha(t,Lr,Dr,Ir,bo)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,Lr,Dr,Ir,bo))?!1:(wo.crossVectors(Ui,Ni),t=[wo.x,wo.y,wo.z],Ha(t,Lr,Dr,Ir,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,Mo=new Ii,Lr=new I,Dr=new I,Ir=new I,Ui=new I,Ni=new I,ir=new I,ys=new I,bo=new I,wo=new I,rr=new I;function Ha(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){rr.fromArray(n,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),c=e.dot(rr),l=t.dot(rr),u=i.dot(rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Vp=new Ii,Ms=new I,Va=new I;class io{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Va)),this.expandByPoint(Ms.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const yi=new I,Ga=new I,So=new I,ki=new I,Wa=new I,Eo=new I,$a=new I;class qd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ga.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Ga);const s=e.distanceTo(t)*.5,o=-this.direction.dot(So),a=ki.dot(this.direction),c=-ki.dot(So),l=ki.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ga).addScaledVector(So,f),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){Wa.subVectors(t,e),Eo.subVectors(i,e),$a.crossVectors(Wa,Eo);let o=this.direction.dot($a),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const c=a*this.direction.dot(Eo.crossVectors(ki,Eo));if(c<0)return null;const l=a*this.direction.dot(Wa.cross(ki));if(l<0||c+l>o)return null;const u=-a*ki.dot($a);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,v){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,v)}set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,_,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*d,g=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*d,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,Wp)}lookAt(e,t,i){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(i,yn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(i,yn)),Oi.normalize(),To.crossVectors(yn,Oi),r[0]=Oi.x,r[4]=To.x,r[8]=yn.x,r[1]=Oi.y,r[5]=To.y,r[9]=yn.y,r[2]=Oi.z,r[6]=To.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],v=i[10],m=i[14],S=i[3],b=i[7],x=i[11],L=i[15],A=r[0],P=r[4],U=r[8],M=r[12],w=r[1],C=r[5],R=r[9],N=r[13],O=r[2],B=r[6],F=r[10],j=r[14],G=r[3],se=r[7],me=r[11],Ae=r[15];return s[0]=o*A+a*w+c*O+l*G,s[4]=o*P+a*C+c*B+l*se,s[8]=o*U+a*R+c*F+l*me,s[12]=o*M+a*N+c*j+l*Ae,s[1]=u*A+d*w+f*O+p*G,s[5]=u*P+d*C+f*B+p*se,s[9]=u*U+d*R+f*F+p*me,s[13]=u*M+d*N+f*j+p*Ae,s[2]=g*A+_*w+v*O+m*G,s[6]=g*P+_*C+v*B+m*se,s[10]=g*U+_*R+v*F+m*me,s[14]=g*M+_*N+v*j+m*Ae,s[3]=S*A+b*w+x*O+L*G,s[7]=S*P+b*C+x*B+L*se,s[11]=S*U+b*R+x*F+L*me,s[15]=S*M+b*N+x*j+L*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],v=e[11],m=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*p-i*c*p)+_*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+v*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+m*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],v=e[14],m=e[15],S=d*v*l-_*f*l+_*c*p-a*v*p-d*c*m+a*f*m,b=g*f*l-u*v*l-g*c*p+o*v*p+u*c*m-o*f*m,x=u*_*l-g*d*l+g*a*p-o*_*p-u*a*m+o*d*m,L=g*d*c-u*_*c-g*a*f+o*_*f+u*a*v-o*d*v,A=t*S+i*b+r*x+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=S*P,e[1]=(_*f*s-d*v*s-_*r*p+i*v*p+d*r*m-i*f*m)*P,e[2]=(a*v*s-_*c*s+_*r*l-i*v*l-a*r*m+i*c*m)*P,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*p-i*c*p)*P,e[4]=b*P,e[5]=(u*v*s-g*f*s+g*r*p-t*v*p-u*r*m+t*f*m)*P,e[6]=(g*c*s-o*v*s-g*r*l+t*v*l+o*r*m-t*c*m)*P,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*P,e[8]=x*P,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*m-t*d*m)*P,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*m+t*a*m)*P,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*P,e[12]=L*P,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*v+t*d*v)*P,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*v-t*a*v)*P,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,g=s*d,_=o*u,v=o*d,m=a*d,S=c*l,b=c*u,x=c*d,L=i.x,A=i.y,P=i.z;return r[0]=(1-(_+m))*L,r[1]=(p+x)*L,r[2]=(g-b)*L,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(f+m))*A,r[6]=(v+S)*A,r[7]=0,r[8]=(g+b)*P,r[9]=(v-S)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const l=1/s,u=1/o,d=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ei,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===ei)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ia)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ei,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===ei)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ia)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ur=new I,On=new yt,Gp=new I(0,0,0),Wp=new I(1,1,1),Oi=new I,To=new I,yn=new I,Su=new yt,Eu=new no;class oi{constructor(e=0,t=0,i=0,r=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $p=0;const Tu=new I,Nr=new no,Mi=new yt,Ao=new I,bs=new I,Xp=new I,qp=new no,Au=new I(1,0,0),Cu=new I(0,1,0),Ru=new I(0,0,1),Pu={type:"added"},Yp={type:"removed"},kr={type:"childadded",child:null},Xa={type:"childremoved",child:null};class kt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new I,t=new oi,i=new no,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new it}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ao.copy(e):Ao.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(bs,Ao,this.up):Mi.lookAt(Ao,bs,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new I(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new I,bi=new I,qa=new I,wi=new I,Or=new I,Fr=new I,Lu=new I,Ya=new I,ja=new I,Ja=new I,Ka=new zt,Za=new zt,Qa=new zt;class Bn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Fn.subVectors(e,t),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Fn.subVectors(r,t),bi.subVectors(i,t),qa.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(bi),c=Fn.dot(qa),l=bi.dot(bi),u=bi.dot(qa),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(o,wi.y),c.addScaledVector(a,wi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ka.setScalar(0),Za.setScalar(0),Qa.setScalar(0),Ka.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,i),Qa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ka,s.x),o.addScaledVector(Za,s.y),o.addScaledVector(Qa,s.z),o}static isFrontFacing(e,t,i,r){return Fn.subVectors(i,t),bi.subVectors(e,t),Fn.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Fn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Fr.subVectors(s,i),Ya.subVectors(e,i);const c=Or.dot(Ya),l=Fr.dot(Ya);if(c<=0&&l<=0)return t.copy(i);ja.subVectors(e,r);const u=Or.dot(ja),d=Fr.dot(ja);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Or,o);Ja.subVectors(e,s);const p=Or.dot(Ja),g=Fr.dot(Ja);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Fr,a);const v=u*g-p*d;if(v<=0&&d-u>=0&&p-g>=0)return Lu.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Lu,a);const m=1/(v+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(Or,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function ec(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=Rl(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ec(o,s,e+1/3),this.g=ec(o,s,e),this.b=ec(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Yd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return vt.workingToColorSpace(tn.copy(this),e),Math.round(lt(tn.r*255,0,255))*65536+Math.round(lt(tn.g*255,0,255))*256+Math.round(lt(tn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(tn.copy(this),t);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Qt){vt.workingToColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,r=tn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Co);const i=Ps(Fi.h,Co.h,t),r=Ps(Fi.s,Co.s,t),s=Ps(Fi.l,Co.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new at;at.NAMES=Yd;let jp=0;class ds extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Jr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Sc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wc&&(i.blendSrc=this.blendSrc),this.blendDst!==Sc&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $t extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new I,Ro=new de;let Jp=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$r(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$r(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$r(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$r(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vu&&(e.usage=this.usage),e}}class jd extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jd extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kp=0;const Cn=new yt,tc=new kt,Br=new I,Mn=new Ii,ws=new Ii,Yt=new I;class Kt extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($d(e)?Jd:jd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Mn.min,ws.min),Mn.expandByPoint(Yt),Yt.addVectors(Mn.max,ws.max),Mn.expandByPoint(Yt)):(Mn.expandByPoint(ws.min),Mn.expandByPoint(ws.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Yt.fromBufferAttribute(a,l),c&&(Br.fromBufferAttribute(e,l),Yt.add(Br)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new I,c[U]=new I;const l=new I,u=new I,d=new I,f=new de,p=new de,g=new de,_=new I,v=new I;function m(U,M,w){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,w),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,w),u.sub(l),d.sub(l),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),v.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[U].add(_),a[M].add(_),a[w].add(_),c[U].add(v),c[M].add(v),c[w].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,M=S.length;U<M;++U){const w=S[U],C=w.start,R=w.count;for(let N=C,O=C+R;N<O;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const b=new I,x=new I,L=new I,A=new I;function P(U){L.fromBufferAttribute(r,U),A.copy(L);const M=a[U];b.copy(M),b.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(A,M);const C=x.dot(c[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,C)}for(let U=0,M=S.length;U<M;++U){const w=S[U],C=w.start,R=w.count;for(let N=C,O=C+R;N<O;N+=3)P(e.getX(N+0)),P(e.getX(N+1)),P(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,v=c.length;_<v;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let m=0;m<u;m++)f[g++]=l[p++]}return new Pn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new yt,sr=new qd,Po=new io,Iu=new I,Lo=new I,Do=new I,Io=new I,nc=new I,Uo=new I,Uu=new I,No=new I;class pe extends kt{constructor(e=new Kt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Uo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(nc.fromBufferAttribute(d,e),o?Uo.addScaledVector(nc,u):Uo.addScaledVector(nc.sub(t),u))}t.add(Uo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Po.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Po,Iu)===null||sr.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Du.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Du),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const v=f[g],m=o[v.materialIndex],S=Math.max(v.start,p.start),b=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let x=S,L=b;x<L;x+=3){const A=a.getX(x),P=a.getX(x+1),U=a.getX(x+2);r=ko(this,m,e,i,l,u,d,A,P,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let v=g,m=_;v<m;v+=3){const S=a.getX(v),b=a.getX(v+1),x=a.getX(v+2);r=ko(this,o,e,i,l,u,d,S,b,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const v=f[g],m=o[v.materialIndex],S=Math.max(v.start,p.start),b=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let x=S,L=b;x<L;x+=3){const A=x,P=x+1,U=x+2;r=ko(this,m,e,i,l,u,d,A,P,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let v=g,m=_;v<m;v+=3){const S=v,b=v+1,x=v+2;r=ko(this,o,e,i,l,u,d,S,b,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Zp(n,e,t,i,r,s,o,a){let c;if(e.side===dn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Yi,a),c===null)return null;No.copy(a),No.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(No);return l<t.near||l>t.far?null:{distance:l,point:No.clone(),object:n}}function ko(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Lo),n.getVertexPosition(c,Do),n.getVertexPosition(l,Io);const u=Zp(n,e,t,i,Lo,Do,Io,Uu);if(u){const d=new I;Bn.getBarycoord(Uu,Lo,Do,Io,d),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,c,l,d,new de)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,c,l,d,new de)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,c,l,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};Bn.getNormal(Lo,Do,Io,f.normal),u.face=f,u.barycoord=d}return u}class Bt extends Kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function g(_,v,m,S,b,x,L,A,P,U,M){const w=x/P,C=L/U,R=x/2,N=L/2,O=A/2,B=P+1,F=U+1;let j=0,G=0;const se=new I;for(let me=0;me<F;me++){const Ae=me*C-N;for(let Je=0;Je<B;Je++){const ht=Je*w-R;se[_]=ht*S,se[v]=Ae*b,se[m]=O,l.push(se.x,se.y,se.z),se[_]=0,se[v]=0,se[m]=A>0?1:-1,u.push(se.x,se.y,se.z),d.push(Je/P),d.push(1-me/U),j+=1}}for(let me=0;me<U;me++)for(let Ae=0;Ae<P;Ae++){const Je=f+Ae+B*me,ht=f+Ae+B*(me+1),ft=f+(Ae+1)+B*(me+1),X=f+(Ae+1)+B*me;c.push(Je,ht,X),c.push(ht,ft,X),G+=6}a.addGroup(p,G,M),p+=G,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=rs(n[t]);for(const r in i)e[r]=i[r]}return e}function Qp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const em={clone:rs,merge:ln};var tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Qp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new I,Nu=new de,ku=new de;class pn extends Zd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,ku),t.subVectors(ku,Nu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Hr=1;class im extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(zr,Hr,e,t);r.layers=this.layers,this.add(r);const s=new pn(zr,Hr,e,t);s.layers=this.layers,this.add(s);const o=new pn(zr,Hr,e,t);o.layers=this.layers,this.add(o);const a=new pn(zr,Hr,e,t);a.layers=this.layers,this.add(a);const c=new pn(zr,Hr,e,t);c.layers=this.layers,this.add(c);const l=new pn(zr,Hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qd extends nn{constructor(e=[],t=ts,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rm extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bt(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Wi});s.uniforms.tEquirect.value=t;const o=new pe(r,s),a=t.minFilter;return t.minFilter===pr&&(t.minFilter=Zn),new im(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ve extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sm={type:"move"};class ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,i),m=this._getHandJoint(l,_);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ve;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Dl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new at(e),this.near=t,this.far=i}clone(){return new Dl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Il extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class om extends nn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=wn,u=wn,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ou extends Pn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vr=new yt,Fu=new yt,Oo=[],Bu=new Ii,am=new yt,Ss=new pe,Es=new io;class _r extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ou(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,am)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),Bu.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new io),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),Es.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(i),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vr),Fu.multiplyMatrices(i,Vr),Ss.matrixWorld=Fu,Ss.raycast(e,Oo);for(let o=0,a=Oo.length;o<a;o++){const c=Oo[o];c.instanceId=s,c.object=this,t.push(c)}Oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new om(new Float32Array(r*this.count),r,this.count,Sl,Qn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rc=new I,cm=new I,lm=new it;class zi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=rc.subVectors(i,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lm.getNormalMatrix(e),r=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new io,um=new de(.5,.5),Fo=new I;class Ul{constructor(e=new zi,t=new zi,i=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],_=s[9],v=s[10],m=s[11],S=s[12],b=s[13],x=s[14],L=s[15];if(r[0].setComponents(l-o,p-u,m-g,L-S).normalize(),r[1].setComponents(l+o,p+u,m+g,L+S).normalize(),r[2].setComponents(l+a,p+d,m+_,L+b).normalize(),r[3].setComponents(l-a,p-d,m-_,L-b).normalize(),i)r[4].setComponents(c,f,v,x).normalize(),r[5].setComponents(l-c,p-f,m-v,L-x).normalize();else if(r[4].setComponents(l-c,p-f,m-v,L-x).normalize(),t===ei)r[5].setComponents(l+c,p+f,m+v,L+x).normalize();else if(t===ia)r[5].setComponents(c,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const t=um.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eh extends nn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class th extends nn{constructor(e,t,i=vr,r,s,o,a=wn,c=wn,l,u=zs,d=1){if(u!==zs&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xr extends Kt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,f=t,p=2*d+f,g=i*2+s,_=r+1,v=new I,m=new I;for(let S=0;S<=g;S++){let b=0,x=0,L=0,A=0;if(S<=i){const M=S/i,w=M*Math.PI/2;x=-u-e*Math.cos(w),L=e*Math.sin(w),A=-e*Math.cos(w),b=M*d}else if(S<=i+s){const M=(S-i)/s;x=-u+M*t,L=e,A=0,b=d+M*f}else{const M=(S-i-s)/i,w=M*Math.PI/2;x=u+e*Math.sin(w),L=e*Math.cos(w),A=e*Math.sin(w),b=d+f+M*d}const P=Math.max(0,Math.min(1,b/p));let U=0;S===0?U=.5/r:S===g&&(U=-.5/r);for(let M=0;M<=r;M++){const w=M/r,C=w*Math.PI*2,R=Math.sin(C),N=Math.cos(C);m.x=-L*N,m.y=x,m.z=L*R,a.push(m.x,m.y,m.z),v.set(-L*N,A,L*R),v.normalize(),c.push(v.x,v.y,v.z),l.push(w+U,P)}if(S>0){const M=(S-1)*_;for(let w=0;w<r;w++){const C=M+w,R=M+w+1,N=S*_+w,O=S*_+w+1;o.push(C,R,N),o.push(R,O,N)}}}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Li extends Kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new I,u=new de;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=i+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mt extends Kt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let g=0;const _=[],v=i/2;let m=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function S(){const x=new I,L=new I;let A=0;const P=(t-e)/i;for(let U=0;U<=s;U++){const M=[],w=U/s,C=w*(t-e)+e;for(let R=0;R<=r;R++){const N=R/r,O=N*c+a,B=Math.sin(O),F=Math.cos(O);L.x=C*B,L.y=-w*i+v,L.z=C*F,d.push(L.x,L.y,L.z),x.set(B,P,F).normalize(),f.push(x.x,x.y,x.z),p.push(N,1-w),M.push(g++)}_.push(M)}for(let U=0;U<r;U++)for(let M=0;M<s;M++){const w=_[M][U],C=_[M+1][U],R=_[M+1][U+1],N=_[M][U+1];(e>0||M!==0)&&(u.push(w,C,N),A+=3),(t>0||M!==s-1)&&(u.push(C,R,N),A+=3)}l.addGroup(m,A,0),m+=A}function b(x){const L=g,A=new de,P=new I;let U=0;const M=x===!0?e:t,w=x===!0?1:-1;for(let R=1;R<=r;R++)d.push(0,v*w,0),f.push(0,w,0),p.push(.5,.5),g++;const C=g;for(let R=0;R<=r;R++){const O=R/r*c+a,B=Math.cos(O),F=Math.sin(O);P.x=M*F,P.y=v*w,P.z=M*B,d.push(P.x,P.y,P.z),f.push(0,w,0),A.x=B*.5+.5,A.y=F*.5*w+.5,p.push(A.x,A.y),g++}for(let R=0;R<r;R++){const N=L+R,O=C+R;x===!0?u.push(O,O+1,N):u.push(O+1,O,N),U+=3}l.addGroup(m,U,x===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class di extends mt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new di(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _a extends Kt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new I,x=new I,L=new I;for(let A=0;A<t.length;A+=3)p(t[A+0],b),p(t[A+1],x),p(t[A+2],L),c(b,x,L,S)}function c(S,b,x,L){const A=L+1,P=[];for(let U=0;U<=A;U++){P[U]=[];const M=S.clone().lerp(x,U/A),w=b.clone().lerp(x,U/A),C=A-U;for(let R=0;R<=C;R++)R===0&&U===A?P[U][R]=M:P[U][R]=M.clone().lerp(w,R/C)}for(let U=0;U<A;U++)for(let M=0;M<2*(A-U)-1;M++){const w=Math.floor(M/2);M%2===0?(f(P[U][w+1]),f(P[U+1][w]),f(P[U][w])):(f(P[U][w+1]),f(P[U+1][w+1]),f(P[U+1][w]))}}function l(S){const b=new I;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(S),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function u(){const S=new I;for(let b=0;b<s.length;b+=3){S.x=s[b+0],S.y=s[b+1],S.z=s[b+2];const x=v(S)/2/Math.PI+.5,L=m(S)/Math.PI+.5;o.push(x,1-L)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){const b=o[S+0],x=o[S+2],L=o[S+4],A=Math.max(b,x,L),P=Math.min(b,x,L);A>.9&&P<.1&&(b<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function p(S,b){const x=S*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const S=new I,b=new I,x=new I,L=new I,A=new de,P=new de,U=new de;for(let M=0,w=0;M<s.length;M+=9,w+=6){S.set(s[M+0],s[M+1],s[M+2]),b.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),A.set(o[w+0],o[w+1]),P.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),L.copy(S).add(b).add(x).divideScalar(3);const C=v(L);_(A,w+0,S,C),_(P,w+2,b,C),_(U,w+4,x,C)}}function _(S,b,x,L){L<0&&S.x===1&&(o[b]=S.x-1),x.x===0&&x.z===0&&(o[b]=L/2/Math.PI+.5)}function v(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.vertices,e.indices,e.radius,e.details)}}class Nl extends _a{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nl(e.radius,e.detail)}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new de:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,r=[],s=[],o=[],a=new I,c=new yt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(lt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(lt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kl extends hi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new de){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*d+this.aX,l=f*d+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dm extends kl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ol(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Bo=new I,sc=new Ol,oc=new Ol,ac=new Ol;class Fl extends hi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Bo.subVectors(r[0],r[1]).add(r[0]),l=Bo);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Bo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),v<1e-4&&(v=_),sc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,_,v),oc.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,_,v),ac.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,_,v)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),oc.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),ac.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(sc.calc(c),oc.calc(c),ac.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zu(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function hm(n,e){const t=1-n;return t*t*e}function fm(n,e){return 2*(1-n)*n*e}function pm(n,e){return n*n*e}function Ls(n,e,t,i){return hm(n,e)+fm(n,t)+pm(n,i)}function mm(n,e){const t=1-n;return t*t*t*e}function gm(n,e){const t=1-n;return 3*t*t*n*e}function vm(n,e){return 3*(1-n)*n*n*e}function _m(n,e){return n*n*n*e}function Ds(n,e,t,i,r){return mm(n,e)+gm(n,t)+vm(n,i)+_m(n,r)}class nh extends hi{constructor(e=new de,t=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ds(e,r.x,s.x,o.x,a.x),Ds(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xm extends hi{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ds(e,r.x,s.x,o.x,a.x),Ds(e,r.y,s.y,o.y,a.y),Ds(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ih extends hi{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ym extends hi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rh extends hi{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ls(e,r.x,s.x,o.x),Ls(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sh extends hi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ls(e,r.x,s.x,o.x),Ls(e,r.y,s.y,o.y),Ls(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oh extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(zu(a,c.x,l.x,u.x,d.x),zu(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var sa=Object.freeze({__proto__:null,ArcCurve:dm,CatmullRomCurve3:Fl,CubicBezierCurve:nh,CubicBezierCurve3:xm,EllipseCurve:kl,LineCurve:ih,LineCurve3:ym,QuadraticBezierCurve:rh,QuadraticBezierCurve3:sh,SplineCurve:oh});class Mm extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new sa[r.type]().fromJSON(r))}return this}}class Hu extends Mm{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ih(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new rh(this.currentPoint.clone(),new de(e,t),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new nh(this.currentPoint.clone(),new de(e,t),new de(i,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new oh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new kl(e,t,i,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ss extends Hu{constructor(e){super(e),this.uuid=Sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Hu().fromJSON(r))}return this}}function bm(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=ah(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=Am(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let f=t;f<r;f+=t){const p=n[f],g=n[f+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Gs(s,o,t,a,c,l,0),o}function ah(n,e,t,i,r){let s;if(r===Fm(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Vu(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Vu(o/i|0,n[o],n[o+1],s);return s&&os(s,s.next)&&($s(s),s=s.next),s}function xr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(os(t,t.next)||It(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Gs(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Dm(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Sm(n,i,r,s):wm(n)){e.push(c.i,n.i,l.i),$s(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Em(xr(n),e),Gs(n,e,t,i,r,s,2)):o===2&&Tm(n,e,t,i,r,s):Gs(xr(n),e,t,i,r,s,1);break}}}function wm(n){const e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),d=Math.min(a,c,l),f=Math.max(r,s,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=p&&Ts(r,a,s,c,o,l,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sm(n,e,t,i){const r=n.prev,s=n,o=n.next;if(It(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,f=o.y,p=Math.min(a,c,l),g=Math.min(u,d,f),_=Math.max(a,c,l),v=Math.max(u,d,f),m=al(p,g,e,t,i),S=al(_,v,e,t,i);let b=n.prevZ,x=n.nextZ;for(;b&&b.z>=m&&x&&x.z<=S;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=v&&b!==r&&b!==o&&Ts(a,u,c,d,l,f,b.x,b.y)&&It(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=v&&x!==r&&x!==o&&Ts(a,u,c,d,l,f,x.x,x.y)&&It(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=m;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=v&&b!==r&&b!==o&&Ts(a,u,c,d,l,f,b.x,b.y)&&It(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=S;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=v&&x!==r&&x!==o&&Ts(a,u,c,d,l,f,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Em(n,e){let t=n;do{const i=t.prev,r=t.next.next;!os(i,r)&&lh(i,t,t.next,r)&&Ws(i,r)&&Ws(r,i)&&(e.push(i.i,t.i,r.i),$s(t),$s(t.next),t=n=r),t=t.next}while(t!==n);return xr(t)}function Tm(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nm(o,a)){let c=uh(o,a);o=xr(o,o.next),c=xr(c,c.next),Gs(o,e,t,i,r,s,0),Gs(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Am(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=ah(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Um(l))}r.sort(Cm);for(let s=0;s<r.length;s++)t=Rm(r[s],t);return t}function Cm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Rm(n,e){const t=Pm(n,e);if(!t)return e;const i=uh(t,n);return xr(i,i.next),xr(t,t.next)}function Pm(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(os(n,t))return t;do{if(os(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&ch(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);Ws(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Lm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Lm(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function Dm(n,e,t,i){let r=n;do r.z===0&&(r.z=al(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Im(r)}function Im(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function al(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Um(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ch(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Ts(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&ch(n,e,t,i,r,s,o,a)}function Nm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!km(n,e)&&(Ws(n,e)&&Ws(e,n)&&Om(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||os(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function os(n,e){return n.x===e.x&&n.y===e.y}function lh(n,e,t,i){const r=Ho(It(n,e,t)),s=Ho(It(n,e,i)),o=Ho(It(t,i,n)),a=Ho(It(t,i,e));return!!(r!==s&&o!==a||r===0&&zo(n,t,e)||s===0&&zo(n,i,e)||o===0&&zo(t,n,i)||a===0&&zo(t,e,i))}function zo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ho(n){return n>0?1:n<0?-1:0}function km(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&lh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ws(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function Om(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function uh(n,e){const t=cl(n.i,n.x,n.y),i=cl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Vu(n,e,t,i){const r=cl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function $s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function cl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fm(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Bm{static triangulate(e,t,i=2){return bm(e,t,i)}}class Ei{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ei.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Gu(e),Wu(i,e);let o=e.length;t.forEach(Gu);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Wu(i,t[c]);const a=Bm.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Gu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Wu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Xs extends Kt{constructor(e=new ss([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:zm;let b,x=!1,L,A,P,U;m&&(b=m.getSpacedPoints(u),x=!0,f=!1,L=m.computeFrenetFrames(u,!1),A=new I,P=new I,U=new I),f||(v=0,p=0,g=0,_=0);const M=a.extractPoints(l);let w=M.shape;const C=M.holes;if(!Ei.isClockWise(w)){w=w.reverse();for(let K=0,Y=C.length;K<Y;K++){const te=C[K];Ei.isClockWise(te)&&(C[K]=te.reverse())}}function N(K){const te=10000000000000001e-36;let Q=K[0];for(let ge=1;ge<=K.length;ge++){const re=ge%K.length,ve=K[re],et=ve.x-Q.x,Ze=ve.y-Q.y,T=et*et+Ze*Ze,y=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(Q.x),Math.abs(Q.y)),V=te*y*y;if(T<=V){K.splice(re,1),ge--;continue}Q=ve}}N(w),C.forEach(N);const O=C.length,B=w;for(let K=0;K<O;K++){const Y=C[K];w=w.concat(Y)}function F(K,Y,te){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(Y,te)}const j=w.length;function G(K,Y,te){let Q,ge,re;const ve=K.x-Y.x,et=K.y-Y.y,Ze=te.x-K.x,T=te.y-K.y,y=ve*ve+et*et,V=ve*T-et*Ze;if(Math.abs(V)>Number.EPSILON){const q=Math.sqrt(y),ie=Math.sqrt(Ze*Ze+T*T),J=Y.x-et/q,Oe=Y.y+ve/q,fe=te.x-T/ie,Ue=te.y+Ze/ie,Ne=((fe-J)*T-(Ue-Oe)*Ze)/(ve*T-et*Ze);Q=J+ve*Ne-K.x,ge=Oe+et*Ne-K.y;const oe=Q*Q+ge*ge;if(oe<=2)return new de(Q,ge);re=Math.sqrt(oe/2)}else{let q=!1;ve>Number.EPSILON?Ze>Number.EPSILON&&(q=!0):ve<-Number.EPSILON?Ze<-Number.EPSILON&&(q=!0):Math.sign(et)===Math.sign(T)&&(q=!0),q?(Q=-et,ge=ve,re=Math.sqrt(y)):(Q=ve,ge=et,re=Math.sqrt(y/2))}return new de(Q/re,ge/re)}const se=[];for(let K=0,Y=B.length,te=Y-1,Q=K+1;K<Y;K++,te++,Q++)te===Y&&(te=0),Q===Y&&(Q=0),se[K]=G(B[K],B[te],B[Q]);const me=[];let Ae,Je=se.concat();for(let K=0,Y=O;K<Y;K++){const te=C[K];Ae=[];for(let Q=0,ge=te.length,re=ge-1,ve=Q+1;Q<ge;Q++,re++,ve++)re===ge&&(re=0),ve===ge&&(ve=0),Ae[Q]=G(te[Q],te[re],te[ve]);me.push(Ae),Je=Je.concat(Ae)}let ht;if(v===0)ht=Ei.triangulateShape(B,C);else{const K=[],Y=[];for(let te=0;te<v;te++){const Q=te/v,ge=p*Math.cos(Q*Math.PI/2),re=g*Math.sin(Q*Math.PI/2)+_;for(let ve=0,et=B.length;ve<et;ve++){const Ze=F(B[ve],se[ve],re);De(Ze.x,Ze.y,-ge),Q===0&&K.push(Ze)}for(let ve=0,et=O;ve<et;ve++){const Ze=C[ve];Ae=me[ve];const T=[];for(let y=0,V=Ze.length;y<V;y++){const q=F(Ze[y],Ae[y],re);De(q.x,q.y,-ge),Q===0&&T.push(q)}Q===0&&Y.push(T)}}ht=Ei.triangulateShape(K,Y)}const ft=ht.length,X=g+_;for(let K=0;K<j;K++){const Y=f?F(w[K],Je[K],X):w[K];x?(P.copy(L.normals[0]).multiplyScalar(Y.x),A.copy(L.binormals[0]).multiplyScalar(Y.y),U.copy(b[0]).add(P).add(A),De(U.x,U.y,U.z)):De(Y.x,Y.y,0)}for(let K=1;K<=u;K++)for(let Y=0;Y<j;Y++){const te=f?F(w[Y],Je[Y],X):w[Y];x?(P.copy(L.normals[K]).multiplyScalar(te.x),A.copy(L.binormals[K]).multiplyScalar(te.y),U.copy(b[K]).add(P).add(A),De(U.x,U.y,U.z)):De(te.x,te.y,d/u*K)}for(let K=v-1;K>=0;K--){const Y=K/v,te=p*Math.cos(Y*Math.PI/2),Q=g*Math.sin(Y*Math.PI/2)+_;for(let ge=0,re=B.length;ge<re;ge++){const ve=F(B[ge],se[ge],Q);De(ve.x,ve.y,d+te)}for(let ge=0,re=C.length;ge<re;ge++){const ve=C[ge];Ae=me[ge];for(let et=0,Ze=ve.length;et<Ze;et++){const T=F(ve[et],Ae[et],Q);x?De(T.x,T.y+b[u-1].y,b[u-1].x+te):De(T.x,T.y,d+te)}}}xe(),ue();function xe(){const K=r.length/3;if(f){let Y=0,te=j*Y;for(let Q=0;Q<ft;Q++){const ge=ht[Q];Z(ge[2]+te,ge[1]+te,ge[0]+te)}Y=u+v*2,te=j*Y;for(let Q=0;Q<ft;Q++){const ge=ht[Q];Z(ge[0]+te,ge[1]+te,ge[2]+te)}}else{for(let Y=0;Y<ft;Y++){const te=ht[Y];Z(te[2],te[1],te[0])}for(let Y=0;Y<ft;Y++){const te=ht[Y];Z(te[0]+j*u,te[1]+j*u,te[2]+j*u)}}i.addGroup(K,r.length/3-K,0)}function ue(){const K=r.length/3;let Y=0;ze(B,Y),Y+=B.length;for(let te=0,Q=C.length;te<Q;te++){const ge=C[te];ze(ge,Y),Y+=ge.length}i.addGroup(K,r.length/3-K,1)}function ze(K,Y){let te=K.length;for(;--te>=0;){const Q=te;let ge=te-1;ge<0&&(ge=K.length-1);for(let re=0,ve=u+v*2;re<ve;re++){const et=j*re,Ze=j*(re+1),T=Y+Q+et,y=Y+ge+et,V=Y+ge+Ze,q=Y+Q+Ze;Me(T,y,V,q)}}}function De(K,Y,te){c.push(K),c.push(Y),c.push(te)}function Z(K,Y,te){Ce(K),Ce(Y),Ce(te);const Q=r.length/3,ge=S.generateTopUV(i,r,Q-3,Q-2,Q-1);D(ge[0]),D(ge[1]),D(ge[2])}function Me(K,Y,te,Q){Ce(K),Ce(Y),Ce(Q),Ce(Y),Ce(te),Ce(Q);const ge=r.length/3,re=S.generateSideWallUV(i,r,ge-6,ge-3,ge-2,ge-1);D(re[0]),D(re[1]),D(re[3]),D(re[1]),D(re[2]),D(re[3])}function Ce(K){r.push(c[K*3+0]),r.push(c[K*3+1]),r.push(c[K*3+2])}function D(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Hm(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new sa[r.type]().fromJSON(r)),new Xs(i,e.options)}}const zm={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new de(s,o),new de(a,c),new de(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],_=e[s*3],v=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new de(o,1-c),new de(l,1-d),new de(f,1-g),new de(_,1-m)]:[new de(a,1-c),new de(u,1-d),new de(p,1-g),new de(v,1-m)]}};function Hm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ro extends _a{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ro(e.radius,e.detail)}}class Ln extends Kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],_=[],v=[];for(let m=0;m<u;m++){const S=m*f-o;for(let b=0;b<l;b++){const x=b*d-s;g.push(x,-S,0),_.push(0,0,1),v.push(b/a),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const b=S+l*m,x=S+l*(m+1),L=S+1+l*(m+1),A=S+1+l*m;p.push(b,x,A),p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class xa extends Kt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=e;const f=(t-e)/r,p=new I,g=new de;for(let _=0;_<=r;_++){for(let v=0;v<=i;v++){const m=s+v/i*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let _=0;_<r;_++){const v=_*(i+1);for(let m=0;m<i;m++){const S=m+v,b=S,x=S+i+1,L=S+i+2,A=S+1;a.push(b,x,A),a.push(x,L,A)}}this.setIndex(a),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bl extends Kt{constructor(e=new ss([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(s,3)),this.setAttribute("uv",new dt(o,2));function l(u){const d=r.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;Ei.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,m=g.length;v<m;v++){const S=g[v];Ei.isClockWise(S)===!0&&(g[v]=S.reverse())}const _=Ei.triangulateShape(p,g);for(let v=0,m=g.length;v<m;v++){const S=g[v];p=p.concat(S)}for(let v=0,m=p.length;v<m;v++){const S=p[v];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let v=0,m=_.length;v<m;v++){const S=_[v],b=S[0]+d,x=S[1]+d,L=S[2]+d;i.push(b,x,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Vm(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Bl(i,e.curveSegments)}}function Vm(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class gn extends Kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new I,f=new I,p=[],g=[],_=[],v=[];for(let m=0;m<=i;m++){const S=[],b=m/i;let x=0;m===0&&o===0?x=.5/t:m===i&&c===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const A=L/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),v.push(A+x,1-b),S.push(l++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const b=u[m][S+1],x=u[m][S],L=u[m+1][S],A=u[m+1][S+1];(m!==0||o>0)&&p.push(b,x,A),(m!==i-1||c<Math.PI)&&p.push(x,L,A)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ii extends Kt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new I,d=new I,f=new I;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,v=p/i*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(_),d.y=(e+t*Math.cos(v))*Math.sin(_),d.z=t*Math.sin(v),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,v=(r+1)*(p-1)+g-1,m=(r+1)*(p-1)+g,S=(r+1)*p+g;o.push(_,v,S),o.push(v,m,S)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ya extends Kt{constructor(e=new sh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new de;let u=new I;const d=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function _(){for(let b=0;b<t;b++)v(b);v(s===!1?t:0),S(),m()}function v(b){u=e.getPointAt(b/t,u);const x=o.normals[b],L=o.binormals[b];for(let A=0;A<=r;A++){const P=A/r*Math.PI*2,U=Math.sin(P),M=-Math.cos(P);c.x=M*x.x+U*L.x,c.y=M*x.y+U*L.y,c.z=M*x.z+U*L.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let x=1;x<=r;x++){const L=(r+1)*(b-1)+(x-1),A=(r+1)*b+(x-1),P=(r+1)*b+x,U=(r+1)*(b-1)+x;g.push(L,A,U),g.push(A,P,U)}}function S(){for(let b=0;b<=t;b++)for(let x=0;x<=r;x++)l.x=b/t,l.y=x/r,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ya(new sa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Di extends ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yr extends ds{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new at(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Gm extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wm extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dh extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zl extends dh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const cc=new yt,$u=new I,Xu=new I;class $m{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hh extends Zd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xm extends $m{constructor(){super(new hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ma extends dh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Xm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qm extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qu=new yt;class fh{constructor(e,t,i=0,r=1/0){this.ray=new qd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qu),this}intersectObject(e,t=!0,i=[]){return ll(e,this,i,t),i.sort(Yu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ll(e[r],this,i,t);return i.sort(Yu),i}}function Yu(n,e){return n.distance-e.distance}function ll(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ll(s[o],e,t,!0)}}function ju(n,e,t,i){const r=Ym(i);switch(t){case zd:return n*e;case Sl:return n*e/r.components*r.byteLength;case El:return n*e/r.components*r.byteLength;case Vd:return n*e*2/r.components*r.byteLength;case Tl:return n*e*2/r.components*r.byteLength;case Hd:return n*e*3/r.components*r.byteLength;case zn:return n*e*4/r.components*r.byteLength;case Al:return n*e*4/r.components*r.byteLength;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jo:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:case Fc:return Math.max(n,16)*Math.max(e,8)/4;case Nc:case Oc:return Math.max(n,8)*Math.max(e,8)/2;case Bc:case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ko:case nl:case il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gd:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sl:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(n){switch(n){case si:case Od:return{byteLength:1,components:1};case Fs:case Fd:case to:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case vr:case Ml:case Qn:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);function ph(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jm(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
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
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xg=`#define PI 3.141592653589793
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
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
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
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
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
#endif`,Yg=`struct PhysicalMaterial {
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
}`,jg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U0=`float getShadowMask() {
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
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
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
}`,nv=`#if DEPTH_PACKING == 3200
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
}`,iv=`#define DISTANCE
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
}`,rv=`#define DISTANCE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`uniform float scale;
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
}`,cv=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,uv=`uniform vec3 diffuse;
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
}`,dv=`#define LAMBERT
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
}`,hv=`#define LAMBERT
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
}`,fv=`#define MATCAP
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
}`,pv=`#define MATCAP
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
}`,mv=`#define NORMAL
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
}`,gv=`#define NORMAL
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
}`,vv=`#define PHONG
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
}`,_v=`#define PHONG
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
}`,xv=`#define STANDARD
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
}`,yv=`#define STANDARD
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
}`,Mv=`#define TOON
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
}`,bv=`#define TOON
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
}`,wv=`uniform float size;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,Ev=`#include <common>
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
}`,Tv=`uniform vec3 color;
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
}`,Av=`uniform float rotation;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Jm,alphahash_pars_fragment:Km,alphamap_fragment:Zm,alphamap_pars_fragment:Qm,alphatest_fragment:eg,alphatest_pars_fragment:tg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:rg,batching_vertex:sg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:cg,iridescence_fragment:lg,bumpmap_pars_fragment:ug,clipping_planes_fragment:dg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:vg,color_vertex:_g,common:xg,cube_uv_reflection_fragment:yg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:bg,displacementmap_vertex:wg,emissivemap_fragment:Sg,emissivemap_pars_fragment:Eg,colorspace_fragment:Tg,colorspace_pars_fragment:Ag,envmap_fragment:Cg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Pg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Vg,envmap_vertex:Dg,fog_vertex:Ig,fog_pars_vertex:Ug,fog_fragment:Ng,fog_pars_fragment:kg,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Fg,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:zg,lights_pars_begin:Hg,lights_toon_fragment:Gg,lights_toon_pars_fragment:Wg,lights_phong_fragment:$g,lights_phong_pars_fragment:Xg,lights_physical_fragment:qg,lights_physical_pars_fragment:Yg,lights_fragment_begin:jg,lights_fragment_maps:Jg,lights_fragment_end:Kg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:t0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:r0,map_particle_pars_fragment:s0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphinstance_vertex:c0,morphcolor_vertex:l0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:h0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:v0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:b0,opaque_fragment:w0,packing:S0,premultiplied_alpha_fragment:E0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:C0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:I0,shadowmask_pars_fragment:U0,skinbase_vertex:N0,skinning_pars_vertex:k0,skinning_vertex:O0,skinnormal_vertex:F0,specularmap_fragment:B0,specularmap_pars_fragment:z0,tonemapping_fragment:H0,tonemapping_pars_fragment:V0,transmission_fragment:G0,transmission_pars_fragment:W0,uv_pars_fragment:$0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:j0,background_frag:J0,backgroundCube_vert:K0,backgroundCube_frag:Z0,cube_vert:Q0,cube_frag:ev,depth_vert:tv,depth_frag:nv,distanceRGBA_vert:iv,distanceRGBA_frag:rv,equirect_vert:sv,equirect_frag:ov,linedashed_vert:av,linedashed_frag:cv,meshbasic_vert:lv,meshbasic_frag:uv,meshlambert_vert:dv,meshlambert_frag:hv,meshmatcap_vert:fv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:gv,meshphong_vert:vv,meshphong_frag:_v,meshphysical_vert:xv,meshphysical_frag:yv,meshtoon_vert:Mv,meshtoon_frag:bv,points_vert:wv,points_frag:Sv,shadow_vert:Ev,shadow_frag:Tv,sprite_vert:Av,sprite_frag:Cv},ye={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Kn={basic:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new at(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:ln([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:ln([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new at(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:ln([ye.points,ye.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:ln([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:ln([ye.common,ye.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:ln([ye.sprite,ye.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:ln([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:ln([ye.lights,ye.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Kn.physical={uniforms:ln([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Vo={r:0,b:0,g:0},ar=new oi,Rv=new yt;function Pv(n,e,t,i,r,s,o){const a=new at(0);let c=s===!0?0:1,l,u,d=null,f=0,p=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const L=g(b);L===null?m(a,c):L&&L.isColor&&(m(L,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,x){const L=g(x);L&&(L.isCubeTexture||L.mapping===va)?(u===void 0&&(u=new pe(new Bt(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:rs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ar.copy(x.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(ar)),u.material.toneMapped=vt.getTransfer(L.colorSpace)!==bt,(d!==L||f!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new pe(new Ln(2,2),new ji({name:"BackgroundMaterial",uniforms:rs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=vt.getTransfer(L.colorSpace)!==bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=L,f=L.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,x){b.getRGB(Vo,Kd(n)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:_,addToRenderList:v,dispose:S}}function Lv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(w,C,R,N,O){let B=!1;const F=d(N,R,C);s!==F&&(s=F,l(s.object)),B=p(w,N,R,O),B&&g(w,N,R,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(w,C,R,N),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,C,R){const N=R.wireframe===!0;let O=i[w.id];O===void 0&&(O={},i[w.id]=O);let B=O[C.id];B===void 0&&(B={},O[C.id]=B);let F=B[N];return F===void 0&&(F=f(c()),B[N]=F),F}function f(w){const C=[],R=[],N=[];for(let O=0;O<t;O++)C[O]=0,R[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:N,object:w,attributes:{},index:null}}function p(w,C,R,N){const O=s.attributes,B=C.attributes;let F=0;const j=R.getAttributes();for(const G in j)if(j[G].location>=0){const me=O[G];let Ae=B[G];if(Ae===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Ae=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Ae=w.instanceColor)),me===void 0||me.attribute!==Ae||Ae&&me.data!==Ae.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function g(w,C,R,N){const O={},B=C.attributes;let F=0;const j=R.getAttributes();for(const G in j)if(j[G].location>=0){let me=B[G];me===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const Ae={};Ae.attribute=me,me&&me.data&&(Ae.data=me.data),O[G]=Ae,F++}s.attributes=O,s.attributesNum=F,s.index=N}function _(){const w=s.newAttributes;for(let C=0,R=w.length;C<R;C++)w[C]=0}function v(w){m(w,0)}function m(w,C){const R=s.newAttributes,N=s.enabledAttributes,O=s.attributeDivisors;R[w]=1,N[w]===0&&(n.enableVertexAttribArray(w),N[w]=1),O[w]!==C&&(n.vertexAttribDivisor(w,C),O[w]=C)}function S(){const w=s.newAttributes,C=s.enabledAttributes;for(let R=0,N=C.length;R<N;R++)C[R]!==w[R]&&(n.disableVertexAttribArray(R),C[R]=0)}function b(w,C,R,N,O,B,F){F===!0?n.vertexAttribIPointer(w,C,R,O,B):n.vertexAttribPointer(w,C,R,N,O,B)}function x(w,C,R,N){_();const O=N.attributes,B=R.getAttributes(),F=C.defaultAttributeValues;for(const j in B){const G=B[j];if(G.location>=0){let se=O[j];if(se===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),se!==void 0){const me=se.normalized,Ae=se.itemSize,Je=e.get(se);if(Je===void 0)continue;const ht=Je.buffer,ft=Je.type,X=Je.bytesPerElement,xe=ft===n.INT||ft===n.UNSIGNED_INT||se.gpuType===Ml;if(se.isInterleavedBufferAttribute){const ue=se.data,ze=ue.stride,De=se.offset;if(ue.isInstancedInterleavedBuffer){for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z,ue.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Z=0;Z<G.locationSize;Z++)v(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Z=0;Z<G.locationSize;Z++)b(G.location+Z,Ae/G.locationSize,ft,me,ze*X,(De+Ae/G.locationSize*Z)*X,xe)}else{if(se.isInstancedBufferAttribute){for(let ue=0;ue<G.locationSize;ue++)m(G.location+ue,se.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ue=0;ue<G.locationSize;ue++)v(G.location+ue);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let ue=0;ue<G.locationSize;ue++)b(G.location+ue,Ae/G.locationSize,ft,me,Ae*X,Ae/G.locationSize*ue*X,xe)}}else if(F!==void 0){const me=F[j];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(G.location,me);break;case 3:n.vertexAttrib3fv(G.location,me);break;case 4:n.vertexAttrib4fv(G.location,me);break;default:n.vertexAttrib1fv(G.location,me)}}}}S()}function L(){U();for(const w in i){const C=i[w];for(const R in C){const N=C[R];for(const O in N)u(N[O].object),delete N[O];delete C[R]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const C=i[w.id];for(const R in C){const N=C[R];for(const O in N)u(N[O].object),delete N[O];delete C[R]}delete i[w.id]}function P(w){for(const C in i){const R=i[C];if(R[w.id]===void 0)continue;const N=R[w.id];for(const O in N)u(N[O].object),delete N[O];delete R[w.id]}}function U(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:v,disableUnusedAttributes:S}}function Dv(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function c(l,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Iv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==zn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===to&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==si&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Qn&&!U)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function Uv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zi,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,v=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!v)s?u(null):l();else{const S=s?0:i,b=S*4;let x=m.clippingState||null;c.value=x,x=u(g,f,b,p);for(let L=0;L!==b;++L)x[L]=t[L];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let v=null;if(_!==0){if(v=c.value,g!==!0||v===null){const m=p+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(v===null||v.length<m)&&(v=new Float32Array(m));for(let b=0,x=p;b!==_;++b,x+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(v,x),v[x+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function Nv(n){let e=new WeakMap;function t(o,a){return a===Dc?o.mapping=ts:a===Ic&&(o.mapping=ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dc||a===Ic)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const qr=4,Ju=[.125,.215,.35,.446,.526,.582],hr=20,lc=new hh,Ku=new at;let uc=null,dc=0,hc=0,fc=!1;const lr=(1+Math.sqrt(5))/2,Gr=1/lr,Zu=[new I(-lr,Gr,0),new I(lr,Gr,0),new I(-Gr,0,lr),new I(Gr,0,lr),new I(0,lr,-Gr),new I(0,lr,Gr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],kv=new I;class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=kv}=s;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,dc,hc),this._renderer.xr.enabled=fc,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:to,format:zn,colorSpace:is,depthBuffer:!1},r=ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ov(s)),this._blurMaterial=Fv(s,e,t)}return r}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,i,r,s){const c=new pn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ku),d.toneMapping=$i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new $t({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),v=new pe(new Bt,_);let m=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,m=!0):(_.color.copy(Ku),m=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):x===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const L=this._cubeSize;Go(r,x*L,b>2?L:0,L,L),d.setRenderTarget(r),m&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ts||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Go(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,lc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zu[(r-s-1)%Zu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pe(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hr-1),_=s/g,v=isFinite(s)?1+Math.floor(u*_):hr;v>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${hr}`);const m=[];let S=0;for(let P=0;P<hr;++P){const U=P/_,M=Math.exp(-U*U/2);m.push(M),P===0?S+=M:P<v&&(S+=2*M)}for(let P=0;P<m.length;P++)m[P]=m[P]/S;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const x=this._sizeLods[r],L=3*x*(r>b-qr?r-b+qr:0),A=4*(this._cubeSize-x);Go(t,L,A,3*x,2*x),c.setRenderTarget(t),c.render(d,lc)}}function Ov(n){const e=[],t=[],i=[];let r=n;const s=n-qr+1+Ju.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-qr?c=Ju[o-n+qr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,v=2,m=1,S=new Float32Array(_*g*p),b=new Float32Array(v*g*p),x=new Float32Array(m*g*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,U=A>2?0:-1,M=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];S.set(M,_*g*A),b.set(f,v*g*A);const w=[A,A,A,A,A,A];x.set(w,m*g*A)}const L=new Kt;L.setAttribute("position",new Pn(S,_)),L.setAttribute("uv",new Pn(b,v)),L.setAttribute("faceIndex",new Pn(x,m)),e.push(L),r>qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ed(n,e,t){const i=new Pi(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fv(n,e,t){const i=new Float32Array(hr),r=new I(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function td(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function nd(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function Bv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Dc||c===Ic,u=c===ts||c===ns;if(l||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Qu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Hv(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let b=0,x=S.length;b<x;b+=3){const L=S[b+0],A=S[b+1],P=S[b+2];f.push(L,A,A,P,P,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,x=S.length/3-1;b<x;b+=3){const L=b+0,A=b+1,P=b+2;f.push(L,A,A,P,P,L)}}else return;const v=new($d(f)?Jd:jd)(f,1);v.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,v)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Vv(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];t.update(v,i,1)}function d(f,p,g,_){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<f.length;m++)l(f[m]/o,p[m],_[m]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=p[S]*_[S];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Gv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Wv(n,e,t){const i=new WeakMap,r=new zt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,L=1;x>e.maxTextureSize&&(L=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*L*4*d),P=new Xd(A,x,L,d);P.type=Qn,P.needsUpdate=!0;const U=b*4;for(let w=0;w<d;w++){const C=v[w],R=m[w],N=S[w],O=x*L*4*w;for(let B=0;B<C.count;B++){const F=B*U;p===!0&&(r.fromBufferAttribute(C,B),A[O+F+0]=r.x,A[O+F+1]=r.y,A[O+F+2]=r.z,A[O+F+3]=0),g===!0&&(r.fromBufferAttribute(R,B),A[O+F+4]=r.x,A[O+F+5]=r.y,A[O+F+6]=r.z,A[O+F+7]=0),_===!0&&(r.fromBufferAttribute(N,B),A[O+F+8]=r.x,A[O+F+9]=r.y,A[O+F+10]=r.z,A[O+F+11]=N.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new de(x,L)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function $v(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const mh=new nn,id=new th(1,1),gh=new Xd,vh=new Hp,_h=new Qd,rd=[],sd=[],od=new Float32Array(16),ad=new Float32Array(9),cd=new Float32Array(4);function hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=rd[r];if(s===void 0&&(s=new Float32Array(r),rd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ba(n,e){let t=sd[e];t===void 0&&(t=new Int32Array(e),sd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;cd.set(i),n.uniformMatrix2fv(this.addr,!1,cd),qt(t,i)}}function Kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;ad.set(i),n.uniformMatrix3fv(this.addr,!1,ad),qt(t,i)}}function Zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;od.set(i),n.uniformMatrix4fv(this.addr,!1,od),qt(t,i)}}function Qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function i_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function a_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(id.compareFunction=Wd,s=id):s=mh,t.setTexture2D(e||s,r)}function c_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vh,r)}function l_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_h,r)}function u_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gh,r)}function d_(n){switch(n){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return jv;case 35674:return Jv;case 35675:return Kv;case 35676:return Zv;case 5124:case 35670:return Qv;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return r_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return u_}}function h_(n,e){n.uniform1fv(this.addr,e)}function f_(n,e){const t=hs(e,this.size,2);n.uniform2fv(this.addr,t)}function p_(n,e){const t=hs(e,this.size,3);n.uniform3fv(this.addr,t)}function m_(n,e){const t=hs(e,this.size,4);n.uniform4fv(this.addr,t)}function g_(n,e){const t=hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v_(n,e){const t=hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function __(n,e){const t=hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x_(n,e){n.uniform1iv(this.addr,e)}function y_(n,e){n.uniform2iv(this.addr,e)}function M_(n,e){n.uniform3iv(this.addr,e)}function b_(n,e){n.uniform4iv(this.addr,e)}function w_(n,e){n.uniform1uiv(this.addr,e)}function S_(n,e){n.uniform2uiv(this.addr,e)}function E_(n,e){n.uniform3uiv(this.addr,e)}function T_(n,e){n.uniform4uiv(this.addr,e)}function A_(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||mh,s[o])}function C_(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vh,s[o])}function R_(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_h,s[o])}function P_(n,e,t){const i=this.cache,r=e.length,s=ba(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gh,s[o])}function L_(n){switch(n){case 5126:return h_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return v_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return w_;case 36294:return S_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return P_}}class D_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d_(t.type)}}class I_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L_(t.type)}}class U_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function ld(n,e){n.seq.push(e),n.map[e.id]=e}function N_(n,e,t){const i=n.name,r=i.length;for(pc.lastIndex=0;;){const s=pc.exec(i),o=pc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ld(t,l===void 0?new D_(a,n,e):new I_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new U_(a),ld(t,d)),t=d}}}class Zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);N_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const k_=37297;let O_=0;function F_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const dd=new it;function B_(n){vt._getMatrix(dd,vt.workingColorSpace,n);const e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case na:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+F_(n.getShaderSource(e),a)}else return s}function z_(n,e){const t=B_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function H_(n,e){let t;switch(e){case tp:t="Linear";break;case np:t="Reinhard";break;case ip:t="Cineon";break;case Nd:t="ACESFilmic";break;case sp:t="AgX";break;case op:t="Neutral";break;case rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wo=new I;function V_(){vt.getLuminanceCoefficients(Wo);const n=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function W_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function As(n){return n!==""}function fd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(n){return n.replace(X_,Y_)}const q_=new Map;function Y_(n,e){let t=st[e];if(t===void 0){const i=q_.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(j_,J_)}function J_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function K_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function Z_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ns&&(e="ENVMAP_MODE_REFRACTION"),e}function ex(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ud:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case ep:e="ENVMAP_BLENDING_ADD";break}return e}function tx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=K_(t),l=Z_(t),u=Q_(t),d=ex(t),f=tx(t),p=G_(t),g=W_(s),_=r.createProgram();let v,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`)):(v=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),m=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?st.tonemapping_pars_fragment:"",t.toneMapping!==$i?H_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,z_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=ul(o),o=fd(o,t),o=pd(o,t),a=ul(a),a=fd(a,t),a=pd(a,t),o=md(o),a=md(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=S+v+o,x=S+m+a,L=ud(r,r.VERTEX_SHADER,b),A=ud(r,r.FRAGMENT_SHADER,x);r.attachShader(_,L),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(C){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(_)||"",N=r.getShaderInfoLog(L)||"",O=r.getShaderInfoLog(A)||"",B=R.trim(),F=N.trim(),j=O.trim();let G=!0,se=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,A);else{const me=hd(r,L,"vertex"),Ae=hd(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+me+`
`+Ae)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||j==="")&&(se=!1);se&&(C.diagnostics={runnable:G,programLog:B,vertexShader:{log:F,prefix:v},fragmentShader:{log:j,prefix:m}})}r.deleteShader(L),r.deleteShader(A),U=new Zo(r,_),M=$_(r,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,k_)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let ix=0;class rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sx(e),t.set(e,i)),i}}class sx{constructor(e){this.id=ix++,this.code=e,this.usedTimes=0}}function ox(n,e,t,i,r,s,o){const a=new Ll,c=new rx,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,w,C,R,N){const O=R.fog,B=N.geometry,F=M.isMeshStandardMaterial?R.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),G=j&&j.mapping===va?j.image.height:null,se=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ae=me!==void 0?me.length:0;let Je=0;B.morphAttributes.position!==void 0&&(Je=1),B.morphAttributes.normal!==void 0&&(Je=2),B.morphAttributes.color!==void 0&&(Je=3);let ht,ft,X,xe;if(se){const xt=Kn[se];ht=xt.vertexShader,ft=xt.fragmentShader}else ht=M.vertexShader,ft=M.fragmentShader,c.update(M),X=c.getVertexShaderID(M),xe=c.getFragmentShaderID(M);const ue=n.getRenderTarget(),ze=n.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Z=N.isBatchedMesh===!0,Me=!!M.map,Ce=!!M.matcap,D=!!j,K=!!M.aoMap,Y=!!M.lightMap,te=!!M.bumpMap,Q=!!M.normalMap,ge=!!M.displacementMap,re=!!M.emissiveMap,ve=!!M.metalnessMap,et=!!M.roughnessMap,Ze=M.anisotropy>0,T=M.clearcoat>0,y=M.dispersion>0,V=M.iridescence>0,q=M.sheen>0,ie=M.transmission>0,J=Ze&&!!M.anisotropyMap,Oe=T&&!!M.clearcoatMap,fe=T&&!!M.clearcoatNormalMap,Ue=T&&!!M.clearcoatRoughnessMap,Ne=V&&!!M.iridescenceMap,oe=V&&!!M.iridescenceThicknessMap,Ee=q&&!!M.sheenColorMap,Ye=q&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,be=!!M.specularColorMap,nt=!!M.specularIntensityMap,k=ie&&!!M.transmissionMap,le=ie&&!!M.thicknessMap,_e=!!M.gradientMap,Pe=!!M.alphaMap,ae=M.alphaTest>0,ee=!!M.alphaHash,ke=!!M.extensions;let tt=$i;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(tt=n.toneMapping);const At={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:ht,fragmentShader:ft,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Z,batchingColor:Z&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:is,alphaToCoverage:!!M.alphaToCoverage,map:Me,matcap:Ce,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:Y,bumpMap:te,normalMap:Q,displacementMap:f&&ge,emissiveMap:re,normalMapObjectSpace:Q&&M.normalMapType===up,normalMapTangentSpace:Q&&M.normalMapType===Cl,metalnessMap:ve,roughnessMap:et,anisotropy:Ze,anisotropyMap:J,clearcoat:T,clearcoatMap:Oe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ue,dispersion:y,iridescence:V,iridescenceMap:Ne,iridescenceThicknessMap:oe,sheen:q,sheenColorMap:Ee,sheenRoughnessMap:Ye,specularMap:Fe,specularColorMap:be,specularIntensityMap:nt,transmission:ie,transmissionMap:k,thicknessMap:le,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Jr&&M.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ae,alphaHash:ee,combine:M.combine,mapUv:Me&&_(M.map.channel),aoMapUv:K&&_(M.aoMap.channel),lightMapUv:Y&&_(M.lightMap.channel),bumpMapUv:te&&_(M.bumpMap.channel),normalMapUv:Q&&_(M.normalMap.channel),displacementMapUv:ge&&_(M.displacementMap.channel),emissiveMapUv:re&&_(M.emissiveMap.channel),metalnessMapUv:ve&&_(M.metalnessMap.channel),roughnessMapUv:et&&_(M.roughnessMap.channel),anisotropyMapUv:J&&_(M.anisotropyMap.channel),clearcoatMapUv:Oe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(M.sheenRoughnessMap.channel),specularMapUv:Fe&&_(M.specularMap.channel),specularColorMapUv:be&&_(M.specularColorMap.channel),specularIntensityMapUv:nt&&_(M.specularIntensityMap.channel),transmissionMapUv:k&&_(M.transmissionMap.channel),thicknessMapUv:le&&_(M.thicknessMap.channel),alphaMapUv:Pe&&_(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Q||Ze),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Me||Pe),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ze,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Je,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===bt,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Z)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function m(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)w.push(C),w.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(S(w,M),b(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function b(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const w=g[M.type];let C;if(w){const R=Kn[w];C=em.clone(R.uniforms)}else C=M.uniforms;return C}function L(M,w){let C;for(let R=0,N=u.length;R<N;R++){const O=u[R];if(O.cacheKey===w){C=O,++C.usedTimes;break}}return C===void 0&&(C=new nx(n,w,M,s),u.push(C)),C}function A(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function P(M){c.remove(M)}function U(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:U}}function ax(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function cx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _d(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,v){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:v},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=v),e++,m}function a(d,f,p,g,_,v){const m=o(d,f,p,g,_,v);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):t.push(m)}function c(d,f,p,g,_,v){const m=o(d,f,p,g,_,v);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,f){t.length>1&&t.sort(d||cx),i.length>1&&i.sort(f||vd),r.length>1&&r.sort(f||vd)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function lx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new _d,n.set(i,[o])):r>=s.length?(o=new _d,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ux(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new at};break;case"SpotLight":t={position:new I,direction:new I,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function dx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hx=0;function fx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function px(n){const e=new ux,t=dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const r=new I,s=new yt,o=new yt;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,v=0,m=0,S=0,b=0,x=0,L=0,A=0,P=0;l.sort(fx);for(let M=0,w=l.length;M<w;M++){const C=l[M],R=C.color,N=C.intensity,O=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=R.r*N,d+=R.g*N,f+=R.b*N;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],N);P++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,S++}i.directional[p]=F,p++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(R).multiplyScalar(N),F.distance=O,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[_]=F;const j=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,j.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=j.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=B,x++}_++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(R).multiplyScalar(N),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=F,v++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=F,g++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(N),F.groundColor.copy(C.groundColor).multiplyScalar(N),i.hemi[m]=F,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==v||U.hemiLength!==m||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==x||U.numSpotMaps!==L||U.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=v,U.hemiLength=m,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=x,U.numSpotMaps=L,U.numLightProbes=P,i.version=hx++)}function c(l,u){let d=0,f=0,p=0,g=0,_=0;const v=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const b=l[m];if(b.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),d++}else if(b.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),p++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(b.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(v),f++}else if(b.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:a,setupView:c,state:i}}function xd(n){const e=new px(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function mx(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new xd(n),e.set(r,[a])):s>=o.length?(a=new xd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`;function _x(n,e,t){let i=new Ul;const r=new de,s=new de,o=new zt,a=new Gm({depthPacking:lp}),c=new Wm,l={},u=t.maxTextureSize,d={[Yi]:dn,[dn]:Yi,[mn]:mn},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:gx,fragmentShader:vx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pe(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let m=this.type;this.render=function(A,P,U){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Wi),R.buffers.depth.getReversed()?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const N=m!==Si&&this.type===Si,O=m===Si&&this.type!==Si;for(let B=0,F=A.length;B<F;B++){const j=A[B],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const se=G.getFrameExtents();if(r.multiply(se),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||N===!0||O===!0){const Ae=this.type!==Si?{minFilter:wn,magFilter:wn}:{};G.map!==null&&G.map.dispose(),G.map=new Pi(r.x,r.y,Ae),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const me=G.getViewportCount();for(let Ae=0;Ae<me;Ae++){const Je=G.getViewport(Ae);o.set(s.x*Je.x,s.y*Je.y,s.x*Je.z,s.y*Je.w),R.viewport(o),G.updateMatrices(j,Ae),i=G.getFrustum(),x(P,U,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Si&&S(G,U),G.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(M,w,C)};function S(A,P){const U=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,U,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,U,p,_,null)}function b(A,P,U,M){let w=null;const C=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)w=C;else if(w=U.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const R=w.uuid,N=P.uuid;let O=l[R];O===void 0&&(O={},l[R]=O);let B=O[N];B===void 0&&(B=w.clone(),O[N]=B,P.addEventListener("dispose",L)),w=B}if(w.visible=P.visible,w.wireframe=P.wireframe,M===Si?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:d[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=n.properties.get(w);R.light=U}return w}function x(A,P,U,M,w){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const N=e.update(A),O=A.material;if(Array.isArray(O)){const B=N.groups;for(let F=0,j=B.length;F<j;F++){const G=B[F],se=O[G.materialIndex];if(se&&se.visible){const me=b(A,se,M,w);A.onBeforeShadow(n,A,P,U,N,me,G),n.renderBufferDirect(U,null,N,me,A,G),A.onAfterShadow(n,A,P,U,N,me,G)}}}else if(O.visible){const B=b(A,O,M,w);A.onBeforeShadow(n,A,P,U,N,B,null),n.renderBufferDirect(U,null,N,B,A,null),A.onAfterShadow(n,A,P,U,N,B,null)}}const R=A.children;for(let N=0,O=R.length;N<O;N++)x(R[N],P,U,M,w)}function L(A){A.target.removeEventListener("dispose",L);for(const U in l){const M=l[U],w=A.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const xx={[Ec]:Tc,[Ac]:Pc,[Cc]:Lc,[es]:Rc,[Tc]:Ec,[Pc]:Ac,[Lc]:Cc,[Rc]:es};function yx(n,e){function t(){let k=!1;const le=new zt;let _e=null;const Pe=new zt(0,0,0,0);return{setMask:function(ae){_e!==ae&&!k&&(n.colorMask(ae,ae,ae,ae),_e=ae)},setLocked:function(ae){k=ae},setClear:function(ae,ee,ke,tt,At){At===!0&&(ae*=tt,ee*=tt,ke*=tt),le.set(ae,ee,ke,tt),Pe.equals(le)===!1&&(n.clearColor(ae,ee,ke,tt),Pe.copy(le))},reset:function(){k=!1,_e=null,Pe.set(-1,0,0,0)}}}function i(){let k=!1,le=!1,_e=null,Pe=null,ae=null;return{setReversed:function(ee){if(le!==ee){const ke=e.get("EXT_clip_control");ee?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const tt=ae;ae=null,this.setClear(tt)}},getReversed:function(){return le},setTest:function(ee){ee?ue(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(ee){_e!==ee&&!k&&(n.depthMask(ee),_e=ee)},setFunc:function(ee){if(le&&(ee=xx[ee]),Pe!==ee){switch(ee){case Ec:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ac:n.depthFunc(n.LESS);break;case es:n.depthFunc(n.LEQUAL);break;case Cc:n.depthFunc(n.EQUAL);break;case Rc:n.depthFunc(n.GEQUAL);break;case Pc:n.depthFunc(n.GREATER);break;case Lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ee}},setLocked:function(ee){k=ee},setClear:function(ee){ae!==ee&&(le&&(ee=1-ee),n.clearDepth(ee),ae=ee)},reset:function(){k=!1,_e=null,Pe=null,ae=null,le=!1}}}function r(){let k=!1,le=null,_e=null,Pe=null,ae=null,ee=null,ke=null,tt=null,At=null;return{setTest:function(xt){k||(xt?ue(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(xt){le!==xt&&!k&&(n.stencilMask(xt),le=xt)},setFunc:function(xt,_i,Jn){(_e!==xt||Pe!==_i||ae!==Jn)&&(n.stencilFunc(xt,_i,Jn),_e=xt,Pe=_i,ae=Jn)},setOp:function(xt,_i,Jn){(ee!==xt||ke!==_i||tt!==Jn)&&(n.stencilOp(xt,_i,Jn),ee=xt,ke=_i,tt=Jn)},setLocked:function(xt){k=xt},setClear:function(xt){At!==xt&&(n.clearStencil(xt),At=xt)},reset:function(){k=!1,le=null,_e=null,Pe=null,ae=null,ee=null,ke=null,tt=null,At=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,_=!1,v=null,m=null,S=null,b=null,x=null,L=null,A=null,P=new at(0,0,0),U=0,M=!1,w=null,C=null,R=null,N=null,O=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=j>=2);let se=null,me={};const Ae=n.getParameter(n.SCISSOR_BOX),Je=n.getParameter(n.VIEWPORT),ht=new zt().fromArray(Ae),ft=new zt().fromArray(Je);function X(k,le,_e,Pe){const ae=new Uint8Array(4),ee=n.createTexture();n.bindTexture(k,ee),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<_e;ke++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(le+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ee}const xe={};xe[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(es),te(!1),Q(hu),ue(n.CULL_FACE),K(Wi);function ue(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function ze(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function De(k,le){return d[k]!==le?(n.bindFramebuffer(k,le),d[k]=le,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Z(k,le){let _e=p,Pe=!1;if(k){_e=f.get(le),_e===void 0&&(_e=[],f.set(le,_e));const ae=k.textures;if(_e.length!==ae.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ke=ae.length;ee<ke;ee++)_e[ee]=n.COLOR_ATTACHMENT0+ee;_e.length=ae.length,Pe=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(_e)}function Me(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const Ce={[dr]:n.FUNC_ADD,[kf]:n.FUNC_SUBTRACT,[Of]:n.FUNC_REVERSE_SUBTRACT};Ce[Ff]=n.MIN,Ce[Bf]=n.MAX;const D={[zf]:n.ZERO,[Hf]:n.ONE,[Vf]:n.SRC_COLOR,[wc]:n.SRC_ALPHA,[Yf]:n.SRC_ALPHA_SATURATE,[Xf]:n.DST_COLOR,[Wf]:n.DST_ALPHA,[Gf]:n.ONE_MINUS_SRC_COLOR,[Sc]:n.ONE_MINUS_SRC_ALPHA,[qf]:n.ONE_MINUS_DST_COLOR,[$f]:n.ONE_MINUS_DST_ALPHA,[jf]:n.CONSTANT_COLOR,[Jf]:n.ONE_MINUS_CONSTANT_COLOR,[Kf]:n.CONSTANT_ALPHA,[Zf]:n.ONE_MINUS_CONSTANT_ALPHA};function K(k,le,_e,Pe,ae,ee,ke,tt,At,xt){if(k===Wi){_===!0&&(ze(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),k!==Nf){if(k!==v||xt!==M){if((m!==dr||x!==dr)&&(n.blendEquation(n.FUNC_ADD),m=dr,x=dr),xt)switch(k){case Jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fu:n.blendFunc(n.ONE,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,b=null,L=null,A=null,P.set(0,0,0),U=0,v=k,M=xt}return}ae=ae||le,ee=ee||_e,ke=ke||Pe,(le!==m||ae!==x)&&(n.blendEquationSeparate(Ce[le],Ce[ae]),m=le,x=ae),(_e!==S||Pe!==b||ee!==L||ke!==A)&&(n.blendFuncSeparate(D[_e],D[Pe],D[ee],D[ke]),S=_e,b=Pe,L=ee,A=ke),(tt.equals(P)===!1||At!==U)&&(n.blendColor(tt.r,tt.g,tt.b,At),P.copy(tt),U=At),v=k,M=!1}function Y(k,le){k.side===mn?ze(n.CULL_FACE):ue(n.CULL_FACE);let _e=k.side===dn;le&&(_e=!_e),te(_e),k.blending===Jr&&k.transparent===!1?K(Wi):K(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const Pe=k.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),re(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){w!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),w=k)}function Q(k){k!==If?(ue(n.CULL_FACE),k!==C&&(k===hu?n.cullFace(n.BACK):k===Uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),C=k}function ge(k){k!==R&&(F&&n.lineWidth(k),R=k)}function re(k,le,_e){k?(ue(n.POLYGON_OFFSET_FILL),(N!==le||O!==_e)&&(n.polygonOffset(le,_e),N=le,O=_e)):ze(n.POLYGON_OFFSET_FILL)}function ve(k){k?ue(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function et(k){k===void 0&&(k=n.TEXTURE0+B-1),se!==k&&(n.activeTexture(k),se=k)}function Ze(k,le,_e){_e===void 0&&(se===null?_e=n.TEXTURE0+B-1:_e=se);let Pe=me[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},me[_e]=Pe),(Pe.type!==k||Pe.texture!==le)&&(se!==_e&&(n.activeTexture(_e),se=_e),n.bindTexture(k,le||xe[k]),Pe.type=k,Pe.texture=le)}function T(){const k=me[se];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(k){ht.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ht.copy(k))}function Ye(k){ft.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ft.copy(k))}function Fe(k,le){let _e=l.get(le);_e===void 0&&(_e=new WeakMap,l.set(le,_e));let Pe=_e.get(k);Pe===void 0&&(Pe=n.getUniformBlockIndex(le,k.name),_e.set(k,Pe))}function be(k,le){const Pe=l.get(le).get(k);c.get(le)!==Pe&&(n.uniformBlockBinding(le,Pe,k.__bindingPointIndex),c.set(le,Pe))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,me={},d={},f=new WeakMap,p=[],g=null,_=!1,v=null,m=null,S=null,b=null,x=null,L=null,A=null,P=new at(0,0,0),U=0,M=!1,w=null,C=null,R=null,N=null,O=null,ht.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:ze,bindFramebuffer:De,drawBuffers:Z,useProgram:Me,setBlending:K,setMaterial:Y,setFlipSided:te,setCullFace:Q,setLineWidth:ge,setPolygonOffset:re,setScissorTest:ve,activeTexture:et,bindTexture:Ze,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:Ne,texImage3D:oe,updateUBOMapping:Fe,uniformBlockBinding:be,texStorage2D:fe,texStorage3D:Ue,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:J,compressedTexSubImage3D:Oe,scissor:Ee,viewport:Ye,reset:nt}}function Mx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):ra("canvas")}function _(T,y,V){let q=1;const ie=Ze(T);if((ie.width>V||ie.height>V)&&(q=V/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(q*ie.width),Oe=Math.floor(q*ie.height);d===void 0&&(d=g(J,Oe));const fe=y?g(J,Oe):d;return fe.width=J,fe.height=Oe,fe.getContext("2d").drawImage(T,0,0,J,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Oe+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function v(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,y,V,q,ie=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=y;if(y===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),y===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),y===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),y===n.RGBA){const Oe=ie?na:vt.getTransfer(q);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Oe===bt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(T,y){let V;return T?y===null||y===vr||y===Bs?V=n.DEPTH24_STENCIL8:y===Qn?V=n.DEPTH32F_STENCIL8:y===Fs&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vr||y===Bs?V=n.DEPTH_COMPONENT24:y===Qn?V=n.DEPTH_COMPONENT32F:y===Fs&&(V=n.DEPTH_COMPONENT16),V}function L(T,y){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==wn&&T.minFilter!==Zn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),U(y),y.isVideoTexture&&u.delete(y)}function P(T){const y=T.target;y.removeEventListener("dispose",P),w(y)}function U(T){const y=i.get(T);if(y.__webglInit===void 0)return;const V=T.source,q=f.get(V);if(q){const ie=q[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(T),Object.keys(q).length===0&&f.delete(V)}i.remove(T)}function M(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const V=T.source,q=f.get(V);delete q[y.__cacheKey],o.memory.textures--}function w(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let ie=0;ie<y.__webglFramebuffer[q].length;ie++)n.deleteFramebuffer(y.__webglFramebuffer[q][ie]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=T.textures;for(let q=0,ie=V.length;q<ie;q++){const J=i.get(V[q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[q])}i.remove(T)}let C=0;function R(){C=0}function N(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function O(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function B(T,y){const V=i.get(T);if(T.isVideoTexture&&ve(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,T,y);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function F(T,y){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){xe(V,T,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function j(T,y){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){xe(V,T,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function G(T,y){const V=i.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const se={[ta]:n.REPEAT,[fr]:n.CLAMP_TO_EDGE,[Uc]:n.MIRRORED_REPEAT},me={[wn]:n.NEAREST,[ap]:n.NEAREST_MIPMAP_NEAREST,[yo]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},Ae={[dp]:n.NEVER,[vp]:n.ALWAYS,[hp]:n.LESS,[Wd]:n.LEQUAL,[fp]:n.EQUAL,[gp]:n.GEQUAL,[pp]:n.GREATER,[mp]:n.NOTEQUAL};function Je(T,y){if(y.type===Qn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zn||y.magFilter===ka||y.magFilter===yo||y.magFilter===pr||y.minFilter===Zn||y.minFilter===ka||y.minFilter===yo||y.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,se[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,se[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,se[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wn||y.minFilter!==yo&&y.minFilter!==pr||y.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ht(T,y){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const q=y.source;let ie=f.get(q);ie===void 0&&(ie={},f.set(q,ie));const J=O(y);if(J!==T.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[J].usedTimes++;const Oe=ie[T.__cacheKey];Oe!==void 0&&(ie[T.__cacheKey].usedTimes--,Oe.usedTimes===0&&M(y)),T.__cacheKey=J,T.__webglTexture=ie[J].texture}return V}function ft(T,y,V){return Math.floor(Math.floor(T/V)/y)}function X(T,y,V,q){const J=T.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,q,y.data);else{J.sort((oe,Ee)=>oe.start-Ee.start);let Oe=0;for(let oe=1;oe<J.length;oe++){const Ee=J[Oe],Ye=J[oe],Fe=Ee.start+Ee.count,be=ft(Ye.start,y.width,4),nt=ft(Ee.start,y.width,4);Ye.start<=Fe+1&&be===nt&&ft(Ye.start+Ye.count-1,y.width,4)===be?Ee.count=Math.max(Ee.count,Ye.start+Ye.count-Ee.start):(++Oe,J[Oe]=Ye)}J.length=Oe+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let oe=0,Ee=J.length;oe<Ee;oe++){const Ye=J[oe],Fe=Math.floor(Ye.start/4),be=Math.ceil(Ye.count/4),nt=Fe%y.width,k=Math.floor(Fe/y.width),le=be,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,nt,k,le,_e,V,q,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function xe(T,y,V){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const ie=ht(T,y),J=y.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+V);const Oe=i.get(J);if(J.version!==Oe.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);const fe=vt.getPrimaries(vt.workingColorSpace),Ue=y.colorSpace===Hi?null:vt.getPrimaries(y.colorSpace),Ne=y.colorSpace===Hi||fe===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let oe=_(y.image,!1,r.maxTextureSize);oe=et(y,oe);const Ee=s.convert(y.format,y.colorSpace),Ye=s.convert(y.type);let Fe=b(y.internalFormat,Ee,Ye,y.colorSpace,y.isVideoTexture);Je(q,y);let be;const nt=y.mipmaps,k=y.isVideoTexture!==!0,le=Oe.__version===void 0||ie===!0,_e=J.dataReady,Pe=L(y,oe);if(y.isDepthTexture)Fe=x(y.format===Hs,y.type),le&&(k?t.texStorage2D(n.TEXTURE_2D,1,Fe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Fe,oe.width,oe.height,0,Ee,Ye,null));else if(y.isDataTexture)if(nt.length>0){k&&le&&t.texStorage2D(n.TEXTURE_2D,Pe,Fe,nt[0].width,nt[0].height);for(let ae=0,ee=nt.length;ae<ee;ae++)be=nt[ae],k?_e&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,be.width,be.height,Ee,Ye,be.data):t.texImage2D(n.TEXTURE_2D,ae,Fe,be.width,be.height,0,Ee,Ye,be.data);y.generateMipmaps=!1}else k?(le&&t.texStorage2D(n.TEXTURE_2D,Pe,Fe,oe.width,oe.height),_e&&X(y,oe,Ee,Ye)):t.texImage2D(n.TEXTURE_2D,0,Fe,oe.width,oe.height,0,Ee,Ye,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Fe,nt[0].width,nt[0].height,oe.depth);for(let ae=0,ee=nt.length;ae<ee;ae++)if(be=nt[ae],y.format!==zn)if(Ee!==null)if(k){if(_e)if(y.layerUpdates.size>0){const ke=ju(be.width,be.height,y.format,y.type);for(const tt of y.layerUpdates){const At=be.data.subarray(tt*ke/be.data.BYTES_PER_ELEMENT,(tt+1)*ke/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,tt,be.width,be.height,1,Ee,At)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,oe.depth,Ee,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Fe,be.width,be.height,oe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,be.width,be.height,oe.depth,Ee,Ye,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Fe,be.width,be.height,oe.depth,0,Ee,Ye,be.data)}else{k&&le&&t.texStorage2D(n.TEXTURE_2D,Pe,Fe,nt[0].width,nt[0].height);for(let ae=0,ee=nt.length;ae<ee;ae++)be=nt[ae],y.format!==zn?Ee!==null?k?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_e&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,be.width,be.height,Ee,Ye,be.data):t.texImage2D(n.TEXTURE_2D,ae,Fe,be.width,be.height,0,Ee,Ye,be.data)}else if(y.isDataArrayTexture)if(k){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Fe,oe.width,oe.height,oe.depth),_e)if(y.layerUpdates.size>0){const ae=ju(oe.width,oe.height,y.format,y.type);for(const ee of y.layerUpdates){const ke=oe.data.subarray(ee*ae/oe.data.BYTES_PER_ELEMENT,(ee+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,Ee,Ye,ke)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Ye,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,Ee,Ye,oe.data);else if(y.isData3DTexture)k?(le&&t.texStorage3D(n.TEXTURE_3D,Pe,Fe,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,Ye,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,Ee,Ye,oe.data);else if(y.isFramebufferTexture){if(le)if(k)t.texStorage2D(n.TEXTURE_2D,Pe,Fe,oe.width,oe.height);else{let ae=oe.width,ee=oe.height;for(let ke=0;ke<Pe;ke++)t.texImage2D(n.TEXTURE_2D,ke,Fe,ae,ee,0,Ee,Ye,null),ae>>=1,ee>>=1}}else if(nt.length>0){if(k&&le){const ae=Ze(nt[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Fe,ae.width,ae.height)}for(let ae=0,ee=nt.length;ae<ee;ae++)be=nt[ae],k?_e&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ee,Ye,be):t.texImage2D(n.TEXTURE_2D,ae,Fe,Ee,Ye,be);y.generateMipmaps=!1}else if(k){if(le){const ae=Ze(oe);t.texStorage2D(n.TEXTURE_2D,Pe,Fe,ae.width,ae.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ye,oe)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Ee,Ye,oe);v(y)&&m(q),Oe.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ue(T,y,V){if(y.image.length!==6)return;const q=ht(T,y),ie=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);const J=i.get(ie);if(ie.version!==J.__version||q===!0){t.activeTexture(n.TEXTURE0+V);const Oe=vt.getPrimaries(vt.workingColorSpace),fe=y.colorSpace===Hi?null:vt.getPrimaries(y.colorSpace),Ue=y.colorSpace===Hi||Oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Ne=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let ee=0;ee<6;ee++)!Ne&&!oe?Ee[ee]=_(y.image[ee],!0,r.maxCubemapSize):Ee[ee]=oe?y.image[ee].image:y.image[ee],Ee[ee]=et(y,Ee[ee]);const Ye=Ee[0],Fe=s.convert(y.format,y.colorSpace),be=s.convert(y.type),nt=b(y.internalFormat,Fe,be,y.colorSpace),k=y.isVideoTexture!==!0,le=J.__version===void 0||q===!0,_e=ie.dataReady;let Pe=L(y,Ye);Je(n.TEXTURE_CUBE_MAP,y);let ae;if(Ne){k&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,nt,Ye.width,Ye.height);for(let ee=0;ee<6;ee++){ae=Ee[ee].mipmaps;for(let ke=0;ke<ae.length;ke++){const tt=ae[ke];y.format!==zn?Fe!==null?k?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,0,0,tt.width,tt.height,Fe,tt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,nt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,0,0,tt.width,tt.height,Fe,be,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,nt,tt.width,tt.height,0,Fe,be,tt.data)}}}else{if(ae=y.mipmaps,k&&le){ae.length>0&&Pe++;const ee=Ze(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,nt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){k?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee[ee].width,Ee[ee].height,Fe,be,Ee[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,nt,Ee[ee].width,Ee[ee].height,0,Fe,be,Ee[ee].data);for(let ke=0;ke<ae.length;ke++){const At=ae[ke].image[ee].image;k?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,0,0,At.width,At.height,Fe,be,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,nt,At.width,At.height,0,Fe,be,At.data)}}else{k?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,be,Ee[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,nt,Fe,be,Ee[ee]);for(let ke=0;ke<ae.length;ke++){const tt=ae[ke];k?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,0,0,Fe,be,tt.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,nt,Fe,be,tt.image[ee])}}}v(y)&&m(n.TEXTURE_CUBE_MAP),J.__version=ie.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ze(T,y,V,q,ie,J){const Oe=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),Ue=b(V.internalFormat,Oe,fe,V.colorSpace),Ne=i.get(y),oe=i.get(V);if(oe.__renderTarget=y,!Ne.__hasExternalTextures){const Ee=Math.max(1,y.width>>J),Ye=Math.max(1,y.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Ue,Ee,Ye,y.depth,0,Oe,fe,null):t.texImage2D(ie,J,Ue,Ee,Ye,0,Oe,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),re(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ie,oe.__webglTexture,0,ge(y)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ie,oe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(T,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const q=y.depthTexture,ie=q&&q.isDepthTexture?q.type:null,J=x(y.stencilBuffer,ie),Oe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ge(y);re(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,J,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,J,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,T)}else{const q=y.textures;for(let ie=0;ie<q.length;ie++){const J=q[ie],Oe=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),Ue=b(J.internalFormat,Oe,fe,J.colorSpace),Ne=ge(y);V&&re(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ue,y.width,y.height):re(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Ue,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);const ie=q.__webglTexture,J=ge(y);if(y.depthTexture.format===zs)re(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(y.depthTexture.format===Hs)re(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Me(T){const y=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Z(y.__webglFramebuffer[0],T):Z(y.__webglFramebuffer,T)}else if(V){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),De(y.__webglDepthbuffer[q],T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),De(y.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(T,y,V){const q=i.get(T);y!==void 0&&ze(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Me(T)}function D(T){const y=T.texture,V=i.get(T),q=i.get(y);T.addEventListener("dispose",P);const ie=T.textures,J=T.isWebGLCubeRenderTarget===!0,Oe=ie.length>1;if(Oe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let Ue=0;Ue<y.mipmaps.length;Ue++)V.__webglFramebuffer[fe][Ue]=n.createFramebuffer()}else V.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)V.__webglFramebuffer[fe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let fe=0,Ue=ie.length;fe<Ue;fe++){const Ne=i.get(ie[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&re(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Ue=ie[fe];V.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const Ne=s.convert(Ue.format,Ue.colorSpace),oe=s.convert(Ue.type),Ee=b(Ue.internalFormat,Ne,oe,Ue.colorSpace,T.isXRRenderTarget===!0),Ye=ge(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Ee,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),De(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Je(n.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ue=0;Ue<y.mipmaps.length;Ue++)ze(V.__webglFramebuffer[fe][Ue],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ue);else ze(V.__webglFramebuffer[fe],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let fe=0,Ue=ie.length;fe<Ue;fe++){const Ne=ie[fe],oe=i.get(Ne);let Ee=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,oe.__webglTexture),Je(Ee,Ne),ze(V.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+fe,Ee,0),v(Ne)&&m(Ee)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,q.__webglTexture),Je(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ue=0;Ue<y.mipmaps.length;Ue++)ze(V.__webglFramebuffer[Ue],T,y,n.COLOR_ATTACHMENT0,fe,Ue);else ze(V.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,fe,0);v(y)&&m(fe),t.unbindTexture()}T.depthBuffer&&Me(T)}function K(T){const y=T.textures;for(let V=0,q=y.length;V<q;V++){const ie=y[V];if(v(ie)){const J=S(T),Oe=i.get(ie).__webglTexture;t.bindTexture(J,Oe),m(J),t.unbindTexture()}}}const Y=[],te=[];function Q(T){if(T.samples>0){if(re(T)===!1){const y=T.textures,V=T.width,q=T.height;let ie=n.COLOR_BUFFER_BIT;const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(T),fe=y.length>1;if(fe)for(let Ne=0;Ne<y.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ue=T.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ne=0;Ne<y.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const oe=i.get(y[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,V,q,0,0,V,q,ie,n.NEAREST),c===!0&&(Y.length=0,te.length=0,Y.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Y.push(J),te.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ne=0;Ne<y.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const oe=i.get(y[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ge(T){return Math.min(r.maxSamples,T.samples)}function re(T){const y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ve(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function et(T,y){const V=T.colorSpace,q=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==is&&V!==Hi&&(vt.getTransfer(V)===bt?(q!==zn||ie!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=D,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=re}function bx(n,e){function t(i,r=Hi){let s;const o=vt.getTransfer(r);if(i===si)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Od)return n.BYTE;if(i===Fd)return n.SHORT;if(i===Fs)return n.UNSIGNED_SHORT;if(i===Ml)return n.INT;if(i===vr)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===to)return n.HALF_FLOAT;if(i===zd)return n.ALPHA;if(i===Hd)return n.RGB;if(i===zn)return n.RGBA;if(i===zs)return n.DEPTH_COMPONENT;if(i===Hs)return n.DEPTH_STENCIL;if(i===Sl)return n.RED;if(i===El)return n.RED_INTEGER;if(i===Vd)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===Al)return n.RGBA_INTEGER;if(i===qo||i===Yo||i===jo||i===Jo)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===kc||i===Oc||i===Fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bc||i===zc||i===Hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bc||i===zc)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vc||i===Gc||i===Wc||i===$c||i===Xc||i===qc||i===Yc||i===jc||i===Jc||i===Kc||i===Zc||i===Qc||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$c)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qc)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===nl||i===il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ko)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gd||i===rl||i===sl||i===ol)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ko)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class xh extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`;class Ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ji({vertexShader:wx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pe(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tx extends us{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null;const _=new Ex,v={},m=t.getContextAttributes();let S=null,b=null;const x=[],L=[],A=new de;let P=null;const U=new pn;U.viewport=new zt;const M=new pn;M.viewport=new zt;const w=[U,M],C=new qm;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let xe=x[X];return xe===void 0&&(xe=new ic,x[X]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(X){let xe=x[X];return xe===void 0&&(xe=new ic,x[X]=xe),xe.getGripSpace()},this.getHand=function(X){let xe=x[X];return xe===void 0&&(xe=new ic,x[X]=xe),xe.getHandSpace()};function O(X){const xe=L.indexOf(X.inputSource);if(xe===-1)return;const ue=x[xe];ue!==void 0&&(ue.update(X.inputSource,X.frame,l||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let X=0;X<x.length;X++){const xe=L[X];xe!==null&&(L[X]=null,x[X].disconnect(xe))}R=null,N=null,_.reset();for(const X in v)delete v[X];e.setRenderTarget(S),p=null,f=null,d=null,r=null,b=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ze=null,De=null;m.depth&&(De=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Hs:zs,ze=m.stencil?Bs:vr);const Z={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=d.createProjectionLayer(Z),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Pi(f.textureWidth,f.textureHeight,{format:zn,type:si,depthTexture:new th(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Pi(p.framebufferWidth,p.framebufferHeight,{format:zn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ft.setContext(r),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(X){for(let xe=0;xe<X.removed.length;xe++){const ue=X.removed[xe],ze=L.indexOf(ue);ze>=0&&(L[ze]=null,x[ze].disconnect(ue))}for(let xe=0;xe<X.added.length;xe++){const ue=X.added[xe];let ze=L.indexOf(ue);if(ze===-1){for(let Z=0;Z<x.length;Z++)if(Z>=L.length){L.push(ue),ze=Z;break}else if(L[Z]===null){L[Z]=ue,ze=Z;break}if(ze===-1)break}const De=x[ze];De&&De.connect(ue)}}const j=new I,G=new I;function se(X,xe,ue){j.setFromMatrixPosition(xe.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);const ze=j.distanceTo(G),De=xe.projectionMatrix.elements,Z=ue.projectionMatrix.elements,Me=De[14]/(De[10]-1),Ce=De[14]/(De[10]+1),D=(De[9]+1)/De[5],K=(De[9]-1)/De[5],Y=(De[8]-1)/De[0],te=(Z[8]+1)/Z[0],Q=Me*Y,ge=Me*te,re=ze/(-Y+te),ve=re*-Y;if(xe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ve),X.translateZ(re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),De[10]===-1)X.projectionMatrix.copy(xe.projectionMatrix),X.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const et=Me+re,Ze=Ce+re,T=Q-ve,y=ge+(ze-ve),V=D*Ce/Ze*et,q=K*Ce/Ze*et;X.projectionMatrix.makePerspective(T,y,V,q,et,Ze),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function me(X,xe){xe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(xe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let xe=X.near,ue=X.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),C.near=M.near=U.near=xe,C.far=M.far=U.far=ue,(R!==C.near||N!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,N=C.far),C.layers.mask=X.layers.mask|6,U.layers.mask=C.layers.mask&3,M.layers.mask=C.layers.mask&5;const ze=X.parent,De=C.cameras;me(C,ze);for(let Z=0;Z<De.length;Z++)me(De[Z],ze);De.length===2?se(C,U,M):C.projectionMatrix.copy(U.projectionMatrix),Ae(X,C,ze)};function Ae(X,xe,ue){ue===null?X.matrix.copy(xe.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(xe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(xe.projectionMatrix),X.projectionMatrixInverse.copy(xe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(X){return v[X]};let Je=null;function ht(X,xe){if(u=xe.getViewerPose(l||o),g=xe,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ze=!1;ue.length!==C.cameras.length&&(C.cameras.length=0,ze=!0);for(let Ce=0;Ce<ue.length;Ce++){const D=ue[Ce];let K=null;if(p!==null)K=p.getViewport(D);else{const te=d.getViewSubImage(f,D);K=te.viewport,Ce===0&&(e.setRenderTargetTextures(b,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(b))}let Y=w[Ce];Y===void 0&&(Y=new pn,Y.layers.enable(Ce),Y.viewport=new zt,w[Ce]=Y),Y.matrix.fromArray(D.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(D.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(K.x,K.y,K.width,K.height),Ce===0&&(C.matrix.copy(Y.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ze===!0&&C.cameras.push(Y)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ce=d.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(Ce,r.renderState)}if(De&&De.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Ce=0;Ce<ue.length;Ce++){const D=ue[Ce].camera;if(D){let K=v[D];K||(K=new xh,v[D]=K);const Y=d.getCameraImage(D);K.sourceTexture=Y}}}for(let ue=0;ue<x.length;ue++){const ze=L[ue],De=x[ue];ze!==null&&De!==void 0&&De.update(ze,xe,l||o)}Je&&Je(X,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const ft=new ph;ft.setAnimationLoop(ht),this.setAnimationLoop=function(X){Je=X},this.dispose=function(){}}}const cr=new oi,Ax=new yt;function Cx(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,Kd(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,S,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),d(v,m)):m.isMeshPhongMaterial?(s(v,m),u(v,m)):m.isMeshStandardMaterial?(s(v,m),f(v,m),m.isMeshPhysicalMaterial&&p(v,m,x)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),_(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?c(v,m,S,b):m.isSpriteMaterial?l(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===dn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===dn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const S=e.get(m),b=S.envMap,x=S.envMapRotation;b&&(v.envMap.value=b,cr.copy(x),cr.x*=-1,cr.y*=-1,cr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),v.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(cr)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,S,b){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*S,v.scale.value=b*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function f(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function p(v,m,S){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=S.texture,v.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function _(v,m){const S=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(S.matrixWorld),v.nearDistance.value=S.shadow.camera.near,v.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rx(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const x=b.program;i.uniformBlockBinding(S,x)}function l(S,b){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",v));const L=b.program;i.updateUBOMapping(S,L);const A=e.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function u(S){const b=d();S.__bindingPointIndex=b;const x=n.createBuffer(),L=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=r[S.id],x=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,P=x.length;A<P;A++){const U=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,w=U.length;M<w;M++){const C=U[M];if(p(C,A,M,L)===!0){const R=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let B=0;B<N.length;B++){const F=N[B],j=_(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,R+O,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,b,x,L){const A=S.value,P=b+"_"+x;if(L[P]===void 0)return typeof A=="number"||typeof A=="boolean"?L[P]=A:L[P]=A.clone(),!0;{const U=L[P];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return L[P]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(S){const b=S.uniforms;let x=0;const L=16;for(let P=0,U=b.length;P<U;P++){const M=Array.isArray(b[P])?b[P]:[b[P]];for(let w=0,C=M.length;w<C;w++){const R=M[w],N=Array.isArray(R.value)?R.value:[R.value];for(let O=0,B=N.length;O<B;O++){const F=N[O],j=_(F),G=x%L,se=G%j.boundary,me=G+se;x+=se,me!==0&&L-me<j.storage&&(x+=L-me),R.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,x+=j.storage}}}const A=x%L;return A>0&&(x+=L-A),S.__size=x,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function v(S){const b=S.target;b.removeEventListener("dispose",v);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class Px{constructor(e={}){const{canvas:t=Up(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=Qt;let A=0,P=0,U=null,M=-1,w=null;const C=new zt,R=new zt;let N=null;const O=new at(0);let B=0,F=t.width,j=t.height,G=1,se=null,me=null;const Ae=new zt(0,0,F,j),Je=new zt(0,0,F,j);let ht=!1;const ft=new Ul;let X=!1,xe=!1;const ue=new yt,ze=new I,De=new zt,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Ce(){return U===null?G:1}let D=i;function K(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const z="webgl2";if(D=K(z,E),D===null)throw K(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Y,te,Q,ge,re,ve,et,Ze,T,y,V,q,ie,J,Oe,fe,Ue,Ne,oe,Ee,Ye,Fe,be,nt;function k(){Y=new zv(D),Y.init(),Fe=new bx(D,Y),te=new Iv(D,Y,e,Fe),Q=new yx(D,Y),te.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),ge=new Gv(D),re=new ax,ve=new Mx(D,Y,Q,re,te,Fe,ge),et=new Nv(x),Ze=new Bv(x),T=new jm(D),be=new Lv(D,T),y=new Hv(D,T,ge,be),V=new $v(D,y,T,ge),oe=new Wv(D,te,ve),fe=new Uv(re),q=new ox(x,et,Ze,Y,te,be,fe),ie=new Cx(x,re),J=new lx,Oe=new mx(Y),Ne=new Pv(x,et,Ze,Q,V,p,c),Ue=new _x(x,V,te),nt=new Rx(D,ge,te,Q),Ee=new Dv(D,Y,ge),Ye=new Vv(D,Y,ge),ge.programs=q.programs,x.capabilities=te,x.extensions=Y,x.properties=re,x.renderLists=J,x.shadowMap=Ue,x.state=Q,x.info=ge}k();const le=new Tx(x,D);this.xr=le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(F,j,!1))},this.getSize=function(E){return E.set(F,j)},this.setSize=function(E,z,W=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,j=z,t.width=Math.floor(E*G),t.height=Math.floor(z*G),W===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(F*G,j*G).floor()},this.setDrawingBufferSize=function(E,z,W){F=E,j=z,G=W,t.width=Math.floor(E*W),t.height=Math.floor(z*W),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Ae)},this.setViewport=function(E,z,W,$){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,z,W,$),Q.viewport(C.copy(Ae).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Je)},this.setScissor=function(E,z,W,$){E.isVector4?Je.set(E.x,E.y,E.z,E.w):Je.set(E,z,W,$),Q.scissor(R.copy(Je).multiplyScalar(G).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){Q.setScissorTest(ht=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,W=!0){let $=0;if(E){let H=!1;if(U!==null){const ce=U.texture.format;H=ce===Al||ce===Tl||ce===El}if(H){const ce=U.texture.type,we=ce===si||ce===vr||ce===Fs||ce===Bs||ce===bl||ce===wl,Ie=Ne.getClearColor(),Re=Ne.getClearAlpha(),Xe=Ie.r,Ke=Ie.g,He=Ie.b;we?(g[0]=Xe,g[1]=Ke,g[2]=He,g[3]=Re,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Xe,_[1]=Ke,_[2]=He,_[3]=Re,D.clearBufferiv(D.COLOR,0,_))}else $|=D.COLOR_BUFFER_BIT}z&&($|=D.DEPTH_BUFFER_BIT),W&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ne.dispose(),J.dispose(),Oe.dispose(),re.dispose(),et.dispose(),Ze.dispose(),V.dispose(),be.dispose(),nt.dispose(),q.dispose(),le.dispose(),le.removeEventListener("sessionstart",Jn),le.removeEventListener("sessionend",ou),tr.stop()};function _e(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=ge.autoReset,z=Ue.enabled,W=Ue.autoUpdate,$=Ue.needsUpdate,H=Ue.type;k(),ge.autoReset=E,Ue.enabled=z,Ue.autoUpdate=W,Ue.needsUpdate=$,Ue.type=H}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const z=E.target;z.removeEventListener("dispose",ee),ke(z)}function ke(E){tt(E),re.remove(E)}function tt(E){const z=re.get(E).programs;z!==void 0&&(z.forEach(function(W){q.releaseProgram(W)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,W,$,H,ce){z===null&&(z=Z);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ie=Af(E,z,W,$,H);Q.setMaterial($,we);let Re=W.index,Xe=1;if($.wireframe===!0){if(Re=y.getWireframeAttribute(W),Re===void 0)return;Xe=2}const Ke=W.drawRange,He=W.attributes.position;let ut=Ke.start*Xe,Mt=(Ke.start+Ke.count)*Xe;ce!==null&&(ut=Math.max(ut,ce.start*Xe),Mt=Math.min(Mt,(ce.start+ce.count)*Xe)),Re!==null?(ut=Math.max(ut,0),Mt=Math.min(Mt,Re.count)):He!=null&&(ut=Math.max(ut,0),Mt=Math.min(Mt,He.count));const Ft=Mt-ut;if(Ft<0||Ft===1/0)return;be.setup(H,$,Ie,W,Re);let Ct,St=Ee;if(Re!==null&&(Ct=T.get(Re),St=Ye,St.setIndex(Ct)),H.isMesh)$.wireframe===!0?(Q.setLineWidth($.wireframeLinewidth*Ce()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(H.isLine){let We=$.linewidth;We===void 0&&(We=1),Q.setLineWidth(We*Ce()),H.isLineSegments?St.setMode(D.LINES):H.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else H.isPoints?St.setMode(D.POINTS):H.isSprite&&St.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))St.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const We=H._multiDrawStarts,Pt=H._multiDrawCounts,gt=H._multiDrawCount,_n=Re?T.get(Re).bytesPerElement:1,Cr=re.get($).currentProgram.getUniforms();for(let xn=0;xn<gt;xn++)Cr.setValue(D,"_gl_DrawID",xn),St.render(We[xn]/_n,Pt[xn])}else if(H.isInstancedMesh)St.renderInstances(ut,Ft,H.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,We);St.renderInstances(ut,Ft,Pt)}else St.render(ut,Ft)};function At(E,z,W){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,xo(E,z,W),E.side=Yi,E.needsUpdate=!0,xo(E,z,W),E.side=mn):xo(E,z,W)}this.compile=function(E,z,W=null){W===null&&(W=E),m=Oe.get(W),m.init(z),b.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const $=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ce=H.material;if(ce)if(Array.isArray(ce))for(let we=0;we<ce.length;we++){const Ie=ce[we];At(Ie,W,H),$.add(Ie)}else At(ce,W,H),$.add(ce)}),m=b.pop(),$},this.compileAsync=function(E,z,W=null){const $=this.compile(E,z,W);return new Promise(H=>{function ce(){if($.forEach(function(we){re.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){H(E);return}setTimeout(ce,10)}Y.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let xt=null;function _i(E){xt&&xt(E)}function Jn(){tr.stop()}function ou(){tr.start()}const tr=new ph;tr.setAnimationLoop(_i),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(E){xt=E,le.setAnimationLoop(E),E===null?tr.stop():tr.start()},le.addEventListener("sessionstart",Jn),le.addEventListener("sessionend",ou),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(z),z=le.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,z,U),m=Oe.get(E,b.length),m.init(z),b.push(m),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ft.setFromProjectionMatrix(ue,ei,z.reversedDepth),xe=this.localClippingEnabled,X=fe.init(this.clippingPlanes,xe),v=J.get(E,S.length),v.init(),S.push(v),le.enabled===!0&&le.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Ua(ce,z,-1/0,x.sortObjects)}Ua(E,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(se,me),Me=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Me&&Ne.addToRenderList(v,E),this.info.render.frame++,X===!0&&fe.beginShadows();const W=m.state.shadowsArray;Ue.render(W,E,z),X===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,H=v.transmissive;if(m.setupLights(),z.isArrayCamera){const ce=z.cameras;if(H.length>0)for(let we=0,Ie=ce.length;we<Ie;we++){const Re=ce[we];cu($,H,E,Re)}Me&&Ne.render(E);for(let we=0,Ie=ce.length;we<Ie;we++){const Re=ce[we];au(v,E,Re,Re.viewport)}}else H.length>0&&cu($,H,E,z),Me&&Ne.render(E),au(v,E,z);U!==null&&P===0&&(ve.updateMultisampleRenderTarget(U),ve.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(x,E,z),be.resetDefaultState(),M=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],X===!0&&fe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function Ua(E,z,W,$){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ft.intersectsSprite(E)){$&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const we=V.update(E),Ie=E.material;Ie.visible&&v.push(E,we,Ie,W,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ft.intersectsObject(E))){const we=V.update(E),Ie=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),De.copy(we.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(Ie)){const Re=we.groups;for(let Xe=0,Ke=Re.length;Xe<Ke;Xe++){const He=Re[Xe],ut=Ie[He.materialIndex];ut&&ut.visible&&v.push(E,we,ut,W,De.z,He)}}else Ie.visible&&v.push(E,we,Ie,W,De.z,null)}}const ce=E.children;for(let we=0,Ie=ce.length;we<Ie;we++)Ua(ce[we],z,W,$)}function au(E,z,W,$){const H=E.opaque,ce=E.transmissive,we=E.transparent;m.setupLightsView(W),X===!0&&fe.setGlobalState(x.clippingPlanes,W),$&&Q.viewport(C.copy($)),H.length>0&&_o(H,z,W),ce.length>0&&_o(ce,z,W),we.length>0&&_o(we,z,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function cu(E,z,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Pi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?to:si,minFilter:pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ce=m.state.transmissionRenderTarget[$.id],we=$.viewport||C;ce.setSize(we.z*x.transmissionResolutionScale,we.w*x.transmissionResolutionScale);const Ie=x.getRenderTarget(),Re=x.getActiveCubeFace(),Xe=x.getActiveMipmapLevel();x.setRenderTarget(ce),x.getClearColor(O),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Me&&Ne.render(W);const Ke=x.toneMapping;x.toneMapping=$i;const He=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),X===!0&&fe.setGlobalState(x.clippingPlanes,$),_o(E,W,$),ve.updateMultisampleRenderTarget(ce),ve.updateRenderTargetMipmap(ce),Y.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Mt=0,Ft=z.length;Mt<Ft;Mt++){const Ct=z[Mt],St=Ct.object,We=Ct.geometry,Pt=Ct.material,gt=Ct.group;if(Pt.side===mn&&St.layers.test($.layers)){const _n=Pt.side;Pt.side=dn,Pt.needsUpdate=!0,lu(St,W,$,We,Pt,gt),Pt.side=_n,Pt.needsUpdate=!0,ut=!0}}ut===!0&&(ve.updateMultisampleRenderTarget(ce),ve.updateRenderTargetMipmap(ce))}x.setRenderTarget(Ie,Re,Xe),x.setClearColor(O,B),He!==void 0&&($.viewport=He),x.toneMapping=Ke}function _o(E,z,W){const $=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ce=E.length;H<ce;H++){const we=E[H],Ie=we.object,Re=we.geometry,Xe=we.group;let Ke=we.material;Ke.allowOverride===!0&&$!==null&&(Ke=$),Ie.layers.test(W.layers)&&lu(Ie,z,W,Re,Ke,Xe)}}function lu(E,z,W,$,H,ce){E.onBeforeRender(x,z,W,$,H,ce),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,z,W,$,E,ce),H.transparent===!0&&H.side===mn&&H.forceSinglePass===!1?(H.side=dn,H.needsUpdate=!0,x.renderBufferDirect(W,z,$,H,E,ce),H.side=Yi,H.needsUpdate=!0,x.renderBufferDirect(W,z,$,H,E,ce),H.side=mn):x.renderBufferDirect(W,z,$,H,E,ce),E.onAfterRender(x,z,W,$,H,ce)}function xo(E,z,W){z.isScene!==!0&&(z=Z);const $=re.get(E),H=m.state.lights,ce=m.state.shadowsArray,we=H.state.version,Ie=q.getParameters(E,H.state,ce,z,W),Re=q.getProgramCacheKey(Ie);let Xe=$.programs;$.environment=E.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(E.isMeshStandardMaterial?Ze:et).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",ee),Xe=new Map,$.programs=Xe);let Ke=Xe.get(Re);if(Ke!==void 0){if($.currentProgram===Ke&&$.lightsStateVersion===we)return du(E,Ie),Ke}else Ie.uniforms=q.getUniforms(E),E.onBeforeCompile(Ie,x),Ke=q.acquireProgram(Ie,Re),Xe.set(Re,Ke),$.uniforms=Ie.uniforms;const He=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=fe.uniform),du(E,Ie),$.needsLights=Rf(E),$.lightsStateVersion=we,$.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ke,$.uniformsList=null,Ke}function uu(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Zo.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function du(E,z){const W=re.get(E);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Af(E,z,W,$,H){z.isScene!==!0&&(z=Z),ve.resetTextureUnits();const ce=z.fog,we=$.isMeshStandardMaterial?z.environment:null,Ie=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:is,Re=($.isMeshStandardMaterial?Ze:et).get($.envMap||we),Xe=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,Mt=!!W.morphAttributes.color;let Ft=$i;$.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const Ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=Ct!==void 0?Ct.length:0,We=re.get($),Pt=m.state.lights;if(X===!0&&(xe===!0||E!==w)){const an=E===w&&$.id===M;fe.setState($,E,an)}let gt=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Pt.state.version||We.outputColorSpace!==Ie||H.isBatchedMesh&&We.batching===!1||!H.isBatchedMesh&&We.batching===!0||H.isBatchedMesh&&We.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&We.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&We.instancing===!1||!H.isInstancedMesh&&We.instancing===!0||H.isSkinnedMesh&&We.skinning===!1||!H.isSkinnedMesh&&We.skinning===!0||H.isInstancedMesh&&We.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&We.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&We.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&We.instancingMorph===!1&&H.morphTexture!==null||We.envMap!==Re||$.fog===!0&&We.fog!==ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==fe.numPlanes||We.numIntersection!==fe.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==Ke||We.morphTargets!==He||We.morphNormals!==ut||We.morphColors!==Mt||We.toneMapping!==Ft||We.morphTargetsCount!==St)&&(gt=!0):(gt=!0,We.__version=$.version);let _n=We.currentProgram;gt===!0&&(_n=xo($,z,H));let Cr=!1,xn=!1,xs=!1;const Lt=_n.getUniforms(),Tn=We.uniforms;if(Q.useProgram(_n.program)&&(Cr=!0,xn=!0,xs=!0),$.id!==M&&(M=$.id,xn=!0),Cr||w!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Lt.setValue(D,"projectionMatrix",E.projectionMatrix),Lt.setValue(D,"viewMatrix",E.matrixWorldInverse);const fn=Lt.map.cameraPosition;fn!==void 0&&fn.setValue(D,ze.setFromMatrixPosition(E.matrixWorld)),te.logarithmicDepthBuffer&&Lt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Lt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,xn=!0,xs=!0)}if(H.isSkinnedMesh){Lt.setOptional(D,H,"bindMatrix"),Lt.setOptional(D,H,"bindMatrixInverse");const an=H.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Lt.setValue(D,"boneTexture",an.boneTexture,ve))}H.isBatchedMesh&&(Lt.setOptional(D,H,"batchingTexture"),Lt.setValue(D,"batchingTexture",H._matricesTexture,ve),Lt.setOptional(D,H,"batchingIdTexture"),Lt.setValue(D,"batchingIdTexture",H._indirectTexture,ve),Lt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Lt.setValue(D,"batchingColorTexture",H._colorsTexture,ve));const An=W.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&oe.update(H,W,_n),(xn||We.receiveShadow!==H.receiveShadow)&&(We.receiveShadow=H.receiveShadow,Lt.setValue(D,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Tn.envMap.value=Re,Tn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Tn.envMapIntensity.value=z.environmentIntensity),xn&&(Lt.setValue(D,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Cf(Tn,xs),ce&&$.fog===!0&&ie.refreshFogUniforms(Tn,ce),ie.refreshMaterialUniforms(Tn,$,G,j,m.state.transmissionRenderTarget[E.id]),Zo.upload(D,uu(We),Tn,ve)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Zo.upload(D,uu(We),Tn,ve),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Lt.setValue(D,"center",H.center),Lt.setValue(D,"modelViewMatrix",H.modelViewMatrix),Lt.setValue(D,"normalMatrix",H.normalMatrix),Lt.setValue(D,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const an=$.uniformsGroups;for(let fn=0,Na=an.length;fn<Na;fn++){const nr=an[fn];nt.update(nr,_n),nt.bind(nr,_n)}}return _n}function Cf(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Rf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,z,W){const $=re.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),re.get(E.texture).__webglTexture=z,re.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const W=re.get(E);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Pf=D.createFramebuffer();this.setRenderTarget=function(E,z=0,W=0){U=E,A=z,P=W;let $=!0,H=null,ce=!1,we=!1;if(E){const Re=re.get(E);if(Re.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)ve.setupRenderTarget(E);else if(Re.__hasExternalTextures)ve.rebindTextures(E,re.get(E.texture).__webglTexture,re.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(Re.__boundDepthTexture!==He){if(He!==null&&re.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(E)}}const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const Ke=re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[z])?H=Ke[z][W]:H=Ke[z],ce=!0):E.samples>0&&ve.useMultisampledRTT(E)===!1?H=re.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?H=Ke[W]:H=Ke,C.copy(E.viewport),R.copy(E.scissor),N=E.scissorTest}else C.copy(Ae).multiplyScalar(G).floor(),R.copy(Je).multiplyScalar(G).floor(),N=ht;if(W!==0&&(H=Pf),Q.bindFramebuffer(D.FRAMEBUFFER,H)&&$&&Q.drawBuffers(E,H),Q.viewport(C),Q.scissor(R),Q.setScissorTest(N),ce){const Re=re.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,W)}else if(we){const Re=z;for(let Xe=0;Xe<E.textures.length;Xe++){const Ke=re.get(E.textures[Xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,W,Re)}}else if(E!==null&&W!==0){const Re=re.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(E,z,W,$,H,ce,we,Ie=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){Q.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Xe=E.textures[Ie],Ke=Xe.format,He=Xe.type;if(!te.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-$&&W>=0&&W<=E.height-H&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(z,W,$,H,Fe.convert(Ke),Fe.convert(He),ce))}finally{const Xe=U!==null?re.get(U).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(E,z,W,$,H,ce,we,Ie=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(z>=0&&z<=E.width-$&&W>=0&&W<=E.height-H){Q.bindFramebuffer(D.FRAMEBUFFER,Re);const Xe=E.textures[Ie],Ke=Xe.format,He=Xe.type;if(!te.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(z,W,$,H,Fe.convert(Ke),Fe.convert(He),0);const Mt=U!==null?re.get(U).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,Mt);const Ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Np(D,Ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(ut),D.deleteSync(Ft),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,W=0){const $=Math.pow(2,-W),H=Math.floor(E.image.width*$),ce=Math.floor(E.image.height*$),we=z!==null?z.x:0,Ie=z!==null?z.y:0;ve.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,we,Ie,H,ce),Q.unbindTexture()};const Lf=D.createFramebuffer(),Df=D.createFramebuffer();this.copyTextureToTexture=function(E,z,W=null,$=null,H=0,ce=null){ce===null&&(H!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=H,H=0):ce=0);let we,Ie,Re,Xe,Ke,He,ut,Mt,Ft;const Ct=E.isCompressedTexture?E.mipmaps[ce]:E.image;if(W!==null)we=W.max.x-W.min.x,Ie=W.max.y-W.min.y,Re=W.isBox3?W.max.z-W.min.z:1,Xe=W.min.x,Ke=W.min.y,He=W.isBox3?W.min.z:0;else{const An=Math.pow(2,-H);we=Math.floor(Ct.width*An),Ie=Math.floor(Ct.height*An),E.isDataArrayTexture?Re=Ct.depth:E.isData3DTexture?Re=Math.floor(Ct.depth*An):Re=1,Xe=0,Ke=0,He=0}$!==null?(ut=$.x,Mt=$.y,Ft=$.z):(ut=0,Mt=0,Ft=0);const St=Fe.convert(z.format),We=Fe.convert(z.type);let Pt;z.isData3DTexture?(ve.setTexture3D(z,0),Pt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ve.setTexture2DArray(z,0),Pt=D.TEXTURE_2D_ARRAY):(ve.setTexture2D(z,0),Pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=D.getParameter(D.UNPACK_ROW_LENGTH),_n=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Cr=D.getParameter(D.UNPACK_SKIP_PIXELS),xn=D.getParameter(D.UNPACK_SKIP_ROWS),xs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ct.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ct.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const Lt=E.isDataArrayTexture||E.isData3DTexture,Tn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const An=re.get(E),an=re.get(z),fn=re.get(An.__renderTarget),Na=re.get(an.__renderTarget);Q.bindFramebuffer(D.READ_FRAMEBUFFER,fn.__webglFramebuffer),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let nr=0;nr<Re;nr++)Lt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(E).__webglTexture,H,He+nr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(z).__webglTexture,ce,Ft+nr)),D.blitFramebuffer(Xe,Ke,we,Ie,ut,Mt,we,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||re.has(E)){const An=re.get(E),an=re.get(z);Q.bindFramebuffer(D.READ_FRAMEBUFFER,Lf),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Df);for(let fn=0;fn<Re;fn++)Lt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,An.__webglTexture,H,He+fn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,An.__webglTexture,H),Tn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,ce,Ft+fn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,ce),H!==0?D.blitFramebuffer(Xe,Ke,we,Ie,ut,Mt,we,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):Tn?D.copyTexSubImage3D(Pt,ce,ut,Mt,Ft+fn,Xe,Ke,we,Ie):D.copyTexSubImage2D(Pt,ce,ut,Mt,Xe,Ke,we,Ie);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Tn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Pt,ce,ut,Mt,Ft,we,Ie,Re,St,We,Ct.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,ce,ut,Mt,Ft,we,Ie,Re,St,Ct.data):D.texSubImage3D(Pt,ce,ut,Mt,Ft,we,Ie,Re,St,We,Ct):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,ut,Mt,we,Ie,St,We,Ct.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,ut,Mt,Ct.width,Ct.height,St,Ct.data):D.texSubImage2D(D.TEXTURE_2D,ce,ut,Mt,we,Ie,St,We,Ct);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_n),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Cr),D.pixelStorei(D.UNPACK_SKIP_ROWS,xn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xs),ce===0&&z.generateMipmaps&&D.generateMipmap(Pt),Q.unbindTexture()},this.copyTextureToTexture3D=function(E,z,W=null,$=null,H=0){return Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,W,$,H)},this.initRenderTarget=function(E){re.get(E).__webglFramebuffer===void 0&&ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){A=0,P=0,U=null,Q.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}function Lx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Kt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0;const d=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=n[f].attributes.position.count}c.setIndex(d)}for(const u in s){const d=yd(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<d;++f){const p=[];for(let _=0;_<o[u].length;++_)p.push(o[u][_][f]);const g=yd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function yd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Pn(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<t;g++){const _=u.getComponent(f,g);a.setComponent(f+d,g,_)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Vl(n,e=0){const t=new Ve,i=Object.fromEntries(Object.entries({skin:n.skin,hair:n.hair,shirt:n.color,pants:e%2?"#384b58":"#405646",boots:"#3f3431",white:"#fff6e6",eye:"#17222a",leather:"#965e48",straw:"#e7cb82"}).map(([p,g])=>[p,new yr({color:g})])),r=new gn(1,16,12),s=new Bt(1,1,1);function o(p,g,_,v,m){const S=new pe(g==="box"?s:r,i[_]);return S.scale.set(...v),S.position.set(...m),S.castShadow=!0,p.add(S),S}const a=new Ve;t.add(a),o(a,"sphere","shirt",[.34,.43,.24],[0,1.03,0]),o(a,"box","pants",[.48,.23,.33],[0,.66,0]),o(a,"sphere","skin",[.115,.17,.115],[0,1.39,0]);const c=new Ve;c.position.y=1.65,a.add(c),o(c,"sphere","skin",[.31,.33,.28],[0,0,0]);for(const p of[-1,1]){o(c,"sphere","skin",[.064,.1,.052],[p*.3,-.01,0]),o(c,"sphere","white",[.079,.092,.035],[p*.115,.035,.253]),o(c,"sphere","eye",[.036,.052,.019],[p*.106,.025,.286]),o(c,"sphere","white",[.014,.018,.008],[p*.106-.01,.044,.305]);const g=o(c,"sphere","hair",[.081,.018,.019],[p*.116,.145,.25]);g.rotation.z=p*-.1;const _=o(a,"box","white",[.13,.07,.08],[p*.095,1.35,.18]);_.rotation.z=p*.35}o(c,"sphere","skin",[.057,.065,.065],[0,-.04,.282]);const l=new Fl([new I(-.085,-.13,.25),new I(0,-.162,.264),new I(.085,-.13,.25)]);c.add(new pe(new ya(l,8,.012,5,!1),i.eye)),o(c,"sphere","hair",[.32,.15,.28],[0,.23,-.028]);const u=o(c,"sphere","hair",[.19,.065,.06],[-.11,.18,.235]);if(u.rotation.z=-.2,n.accessory==="bun"&&(o(c,"sphere","hair",[.23,.23,.17],[0,.03,-.2]),o(c,"sphere","hair",[.17,.17,.17],[.18,.3,-.15])),n.accessory==="curls")for(let p=0;p<8;p++){const g=p*Math.PI/4;o(c,"sphere","hair",[.12,.13,.12],[Math.cos(g)*.26,.17+Math.sin(g)*.1,-.06+Math.sin(g)*.15])}if(n.accessory==="glasses"){for(const p of[-1,1]){const g=new pe(new ii(.092,.013,6,16),i.eye);g.position.set(p*.115,.035,.295),c.add(g)}o(c,"box","eye",[.065,.018,.025],[0,.045,.29])}if(["sunhat","cap"].includes(n.accessory)){const p=n.accessory==="sunhat"?i.straw:i.shirt,g=new pe(new mt(.4,.4,.035,24),p);g.position.set(0,.285,.04),c.add(g);const _=new pe(new mt(.235,.27,.18,20),p);_.position.y=.39,c.add(_);const v=new pe(new mt(.264,.272,.05,20),i.leather);v.position.y=.32,c.add(v)}for(let p=0;p<3;p++)o(a,"sphere","white",[.019,.019,.014],[0,1.2-p*.12,.24]);const d=[],f=[];for(const p of[-1,1]){const g=new Ve;g.position.set(p*.32,1.24,0),a.add(g),o(g,"sphere","shirt",[.12,.19,.125],[p*.03,-.1,0]),o(g,"sphere","skin",[.076,.2,.076],[p*.04,-.34,.02]),o(g,"sphere","skin",[.09,.095,.08],[p*.04,-.52,.025]),o(g,"sphere","skin",[.035,.055,.035],[p*-.02,-.5,.075]),g.rotation.z=p*.06,d.push(g);const _=new Ve;_.position.set(p*.15,.64,0),t.add(_),o(_,"sphere","pants",[.12,.25,.12],[0,-.21,0]),o(_,"sphere","boots",[.14,.1,.21],[0,-.52,.07]),o(_,"box","boots",[.25,.035,.34],[0,-.59,.055]),f.push(_)}if(["bun","glasses"].includes(n.accessory)){const p=o(a,"box","leather",[.07,.77,.045],[.03,1.05,.245]);p.rotation.z=-.65,o(a,"box","leather",[.25,.29,.15],[.3,.73,.13]),o(a,"box","straw",[.07,.045,.018],[.3,.76,.215])}return t.userData.rig={body:a,head:c,arms:d,legs:f},Wt(t),t}function Wt(n){const e=new Set;n.traverse(t=>{if(!t.isGroup)return;const i=new Map;t.children.filter(r=>r.isMesh).forEach(r=>{i.has(r.material)||i.set(r.material,[]),i.get(r.material).push(r)});for(const[r,s]of i){const o=s.map(d=>(d.updateMatrix(),d.geometry.clone().applyMatrix4(d.matrix))),a=o.some(d=>!d.index),c=o.map(d=>a&&d.index?d.toNonIndexed():d),l=Lx(c);if(new Set([...o,...c]).forEach(d=>d.dispose()),!l)continue;s.forEach(d=>{t.remove(d),e.add(d.geometry)});const u=new pe(l,r);u.castShadow=!0,u.receiveShadow=!0,t.add(u)}}),e.forEach(t=>t.dispose())}function Dx(n,e,t){const i=-n/2,r=-e/2,s=new ss;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s}function yh(n=!1){const e=new Ve;e.name="Pip 3D character";const t=new Ve;e.add(t);const i=Z=>new yr({color:Z}),r={green:i(8435256),darkGreen:i(2706464),leaf:i(10082368),seam:i(3430947),shirt:i(8632381),trim:i(11786593),hat:i(14660444),weave:i(12225340),leather:i(11039543),leatherDark:i(7358501),metal:i(12898502),orange:i(15439412),cream:new $t({color:16774620}),visor:new $t({color:2702392}),black:new $t({color:859160}),white:new $t({color:16776432}),tongue:new $t({color:15173186})},s=(Z,Me,Ce,D=[0,0,0])=>{const K=new pe(Me,Ce);return K.position.set(...D),K.castShadow=!0,Z.add(K),K},o=(Z,Me,Ce,D)=>{const K=s(Z,new gn(1,16,12),Me,D);return K.scale.set(...Ce),K},a=(Z,Me,Ce,D,K=.09,Y=.018)=>{const te=new Xs(Dx(Ce[0],Ce[1],K),{depth:Ce[2],bevelEnabled:!0,bevelSize:Y,bevelThickness:Y,bevelSegments:Y>.02?4:2,steps:1,curveSegments:6});return te.translate(0,0,-Ce[2]/2),s(Z,te,Me,D)},c=(Z,Me,Ce,D,K,Y)=>s(Z,new mt(Ce,D,K,20),Me,Y),l=(Z,Me,Ce,D=.01)=>s(Z,new ya(new Fl(Ce.map(K=>new I(...K))),8,D,5,!1),Me),u=(Z,Me,Ce=[0,0,0])=>{const D=new Ve;return D.name=Me,D.position.set(...Ce),Z.add(D),D},d=s(e,new Li(.48,24),new $t({color:1059099,transparent:!0,opacity:.25,depthWrite:!1}),[0,.025,0]);d.rotation.x=-Math.PI/2,d.castShadow=!1;const f=o(t,r.shirt,[.38,.37,.275],[0,.86,0]),p=c(t,r.darkGreen,.32,.3,.08,[0,.59,0]);p.scale.z=.81,c(t,r.darkGreen,.145,.17,.12,[0,1.16,0]);const g=u(t,"farmer growing suit");a(g,r.green,[.49,.39,.025],[0,.86,.263]);for(const Z of[-1,1])l(g,r.darkGreen,[[Z*.26,1.11,.12],[Z*.29,1.02,.19],[Z*.29,.75,.2]],.021);const _=u(t,"Pip back suit panel");a(_,r.shirt,[.43,.36,.035],[0,.88,-.26]);for(const Z of[-1,1])l(_,r.darkGreen,[[Z*.26,1.08,-.17],[Z*.26,.84,-.215],[Z*.18,.66,-.21]],.014);const v=u(t,"Pro Pip polo collar");for(const Z of[-1,1]){const Me=a(v,r.shirt,[.15,.12,.03],[Z*.1,1.11,.21],.02);Me.rotation.z=Z*.45,l(v,r.trim,[[Z*.045,1.16,.247],[Z*.115,1.065,.25],[Z*.18,1.12,.24]],.008)}const m=u(t,"HydroPip shirt emblem");for(const Z of[-1,1]){const Me=o(m,r.darkGreen,[.038,.088,.013],[Z*.053,.91,.307]);Me.rotation.z=Z*-.58}l(m,r.darkGreen,[[0,.9,.31],[0,.78,.31]],.012),o(m,r.darkGreen,[.08,.022,.012],[0,.77,.31]);const S=u(t,"Pro HydroPip chest logo",[.16,.91,.27]),b=document.createElement("canvas");b.width=256,b.height=128;const x=b.getContext("2d");x.fillStyle="#aad94c",x.beginPath(),x.ellipse(107,35,24,12,.7,0,Math.PI*2),x.ellipse(148,35,24,12,-.7,0,Math.PI*2),x.fill(),x.fillRect(124,35,7,33),x.fillStyle="#fff7df",x.font="bold 34px sans-serif",x.textAlign="center",x.fillText("HYDROPIP",128,108);const L=new eh(b);L.colorSpace=Qt,s(S,new Ln(.29,.145),new $t({map:L,transparent:!0,depthWrite:!1}));const A=u(t,"Pip head",[0,1.51,0]);A.rotation.x=-.1,a(A,r.darkGreen,[.93,.75,.34],[0,0,-.025],.23,.065),a(A,r.green,[.9,.72,.34],[0,.005,0],.22,.065);const P=a(A,r.cream,[.87,.71,.035],[0,-.015,.275],.23),U=a(A,r.black,[.76,.52,.02],[0,.047,.315],.17);a(A,r.visor,[.71,.475,.016],[0,.05,.345],.155);const M=[];for(const Z of[-1,1]){const Me=u(A,`${Z<0?"left":"right"} expressive eye`,[Z*.17,.054,.379]);o(Me,r.white,[.083,.112,.012],[0,0,0]),o(Me,r.black,[.062,.09,.012],[.004,-.004,.015]),o(Me,r.white,[.025,.032,.008],[.027,.046,.029]),M.push(Me)}const w=new ss;w.moveTo(-.115,.036),w.quadraticCurveTo(0,.005,.115,.036),w.bezierCurveTo(.135,-.045,.065,-.116,0,-.115),w.bezierCurveTo(-.065,-.116,-.135,-.045,-.115,.036);const C=u(A,"Pip open smile",[0,-.178,.387]);s(C,new Bl(w,12),r.black),o(C,r.tongue,[.055,.025,.004],[0,-.077,.005]);const R=[];for(const Z of[-1,1]){const Me=u(A,"green ear piece",[Z*.51,-.012,-.005]);Me.rotation.z=Math.PI/2,c(Me,r.darkGreen,.174,.174,.09,[0,0,0]),c(Me,r.leaf,.145,.145,.115,[0,-Z*.025,0]),c(Me,r.green,.11,.11,.13,[0,-Z*.035,0]),R.push(Me)}const N=u(t,"Pip brimmed hat",[0,1.93,-.005]),O=c(N,r.hat,.63,.61,.06,[0,0,0]);O.scale.z=.83,c(N,r.hat,.32,.405,.26,[0,.145,-.025]),c(N,r.darkGreen,.39,.408,.059,[0,.06,-.025]);const B=u(N,"straw hat weave");for(const Z of[.44,.51,.58]){const Me=s(B,new ii(Z,.006,4,32),r.weave,[0,.034,0]);Me.rotation.x=Math.PI/2,Me.scale.y=.83}for(const Z of[.12,.18,.24]){const Me=s(B,new ii(.405-(Z-.015)*.327,.005,4,32),r.weave,[0,Z,-.025]);Me.rotation.x=Math.PI/2}const F=[],j=new ss;j.moveTo(0,0),j.bezierCurveTo(.04,.23,.29,.34,.52,.26),j.bezierCurveTo(.45,.025,.18,-.1,0,0);for(const Z of[-1,1]){const Me=u(t,"veined leaf ear",[Z*.31,2.08,-.055]);Me.scale.x=Z,s(Me,new Xs(j,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:6}),r.leaf),l(Me,r.darkGreen,[[.015,.008,.05],[.21,.105,.05],[.46,.245,.05]],.012);for(const[Ce,D]of[[.13,.066],[.26,.136]])l(Me,r.green,[[Ce,D,.05],[Ce+.012,D+.085,.05]],.006),l(Me,r.green,[[Ce,D,.05],[Ce+.105,D-.018,.05]],.006);F.push(Me)}const G=[],se=[],me=[],Ae=[],Je=[],ht=[],ft=[];for(const Z of[-1,1]){const Me=u(t,"Pip shoulder",[Z*.38,1.045,0]);Me.rotation.z=Z*.08,o(Me,r.darkGreen,[.132,.13,.13],[0,-.065,0]);const Ce=s(Me,new Xr(.117,.1,4,12),r.shirt,[0,-.105,0]);c(Me,r.trim,.119,.119,.03,[0,-.18,0]);const D=u(Me,"Pip elbow",[0,-.24,0]);o(D,r.darkGreen,[.085,.08,.085],[0,.005,0]),s(D,new Xr(.089,.1,4,10),r.green,[0,-.105,0]),c(D,r.darkGreen,.088,.088,.035,[0,-.18,0]);const K=u(D,"Pip rounded glove",[0,-.235,.025]);o(K,r.green,[.104,.111,.094],[0,0,0]),o(K,r.leaf,[.041,.063,.047],[-Z*.078,.012,.06]);const Y=u(t,"Pip hip",[Z*.17,.52,0]);s(Y,new Xr(.115,.1,4,10),r.green,[0,-.095,0]);const te=u(Y,"Pip knee",[0,-.22,0]);o(te,r.darkGreen,[.108,.075,.1],[0,0,0]),s(te,new Xr(.1,.085,4,10),r.green,[0,-.072,0]);const Q=u(te,"Pip work boot",[0,-.19,0]);o(Q,r.darkGreen,[.15,.055,.207],[0,-.021,.061]),o(Q,r.green,[.139,.1,.189],[0,.025,.059]),o(Q,r.leaf,[.1,.038,.089],[0,.092,.104]),G.push(Me),me.push(D),Je.push(K),ft.push(Ce),se.push(Y),Ae.push(te),ht.push(Q)}const X=u(t,"Pro Pip tool belt"),xe=c(X,r.leatherDark,.357,.35,.1,[0,.62,0]);xe.scale.z=.83,a(X,r.metal,[.115,.105,.025],[0,.62,.31],.025),a(X,r.leather,[.074,.067,.028],[0,.62,.33],.01);for(const Z of[-1,1])a(X,r.leatherDark,[.19,.23,.105],[Z*.255,.52,.245],.025),a(X,r.leather,[.16,.17,.035],[Z*.255,.49,.307],.025),o(X,r.metal,[.016,.016,.012],[Z*.255,.55,.33]);a(X,r.metal,[.038,.24,.025],[.28,.73,.255],.01);const ue=s(X,new ii(.058,.018,6,16,Math.PI*1.55),r.metal,[.28,.855,.255]);ue.rotation.z=Math.PI*.73,a(X,r.orange,[.043,.14,.035],[-.27,.76,.24],.018),a(X,r.metal,[.018,.085,.018],[-.27,.66,.24],.007),A.updateMatrixWorld(!0);const ze=A.matrixWorld.clone().invert(),De=[];A.traverse(Z=>{Z.isMesh&&De.push(Z)});for(const Z of De){const Me=ze.clone().multiply(Z.matrixWorld);A.add(Z),Me.decompose(Z.position,Z.quaternion,Z.scale)}return t.traverse(Z=>{if(!Z.geometry?.index)return;const Me=Z.geometry;Z.geometry=Me.toNonIndexed(),Me.dispose()}),Wt(t),e.userData.parts={body:t,torso:f,head:A,faceShell:P,visor:U,arms:G,legs:se,elbows:me,knees:Ae,hands:Je,boots:ht,eyes:M,mouth:C,leafEars:F,headsetCups:R,belt:X,hat:N,farmerSuit:g,proCollar:v,proLogo:S,emblem:m,backPanel:_,strawWeave:B,materials:r,sleeves:ft,waistBand:p,shadow:d},e.userData.actionId="pip",e.scale.setScalar(1.04),Ix(e,n),e}function Ix(n,e){const t=n.userData.parts;t.materials.shirt.color.setHex(e?2503212:8632381),t.materials.hat.color.setHex(e?2503212:14660444),t.farmerSuit.visible=!e,t.emblem.visible=!e,t.strawWeave.visible=!e,t.proCollar.visible=e,t.proLogo.visible=e,t.belt.visible=e,n.userData.pro=e}const Md=["post","produce","tractor","pond-birds","duck-crossing"];function Ux(n=Math.random){let e=null,t=0,i=8+n()*8,r=null;const s={post:26,produce:19,tractor:27,"pond-birds":22,"duck-crossing":30},o=()=>({active:e,elapsed:t,wait:i,duration:s[e]||0});function a(c){return Md.includes(c)?(e=c,r=c,t=0,!0):!1}return{snapshot:o,start:a,update(c,{marketBuilt:l=!1,reducedMotion:u=!1}={}){if(u)return o();const d=Math.max(0,Math.min(.1,c));if(e)t+=d,t>=s[e]&&(e=null,t=0,i=14+n()*22);else if(i-=d,i<=0){const f=Md.filter(p=>p!==r&&(p!=="produce"||l));a(f[Math.min(f.length-1,Math.floor(n()*f.length))])}return o()}}}function Nx(){const n=new Ve;n.name="living neighborhood";const e=new Ve,t=new Ve;n.add(e,t);const r=Object.fromEntries(Object.entries({wood:8808268,dark:3427653,stone:10070429,grass:7443032,leaf:4489565,cream:15919049,white:15463391,water:6469573,red:13921888,gold:15713102,blue:6530482}).map(([R,N])=>[R,new yr({color:N})])),s=(R,N,O,B)=>{const F=new pe(new Bt(...O),N);return F.position.set(...B),R.add(F),F},o=(R,N,O,B)=>{const F=new pe(new ro(1,1),N);return F.scale.set(...O),F.position.set(...B),R.add(F),F},a=(R,N,O)=>{const B=new pe(new Li(1,40),O);return B.rotation.x=-Math.PI/2,B.scale.set(...R),B.position.set(...N),e.add(B),B};a([3.5,2.6,1],[-20,-.02,4.8],r.stone),a([3.15,2.24,1],[-20,.01,4.8],r.water);for(let R=0;R<8;R++){const N=R*2.4,O=-20+Math.cos(N)*2.8,B=4.8+Math.sin(N)*2;R<4&&(a([.26,.21,1],[O,.025,B],r.leaf),o(e,r.cream,[.08,.04,.08],[O,.05,B]));for(let F=0;F<3;F++)s(e,r.grass,[.035,.5+F*.12,.035],[O+F*.12,.25+F*.06,B]),o(e,r.wood,[.065,.13,.065],[O+F*.12,.56+F*.12,B])}for(let R=0;R<5;R++){const N=19+R%2*3,O=-4+Math.floor(R/2)*4;s(e,r.wood,[.19,1.65,.19],[N,.65,O]),o(e,r.leaf,[1.2,1.05,1.15],[N,1.85,O]);for(let B=0;B<5;B++)o(e,r.red,[.14,.14,.14],[N+Math.sin(B*2)*.91,1.9+Math.cos(B)*.42,O+Math.cos(B*2)*.91]);s(e,r.wood,[.7,.3,.55],[N+.75,.15,O+.8])}const c=R=>{const N=Math.sin(R*127.1+48.7)*43758.5453;return N-Math.floor(N)};for(let R=0;R<110;R++){const N=R%3,O=N===0?-25+c(R)*7:N===1?17+c(R)*8:-15+c(R)*22,B=N===2?11+c(R+8)*4:-7+c(R+8)*17;if(((O+20)/3.8)**2+((B-4.8)/3)**2<1)continue;const F=.12+c(R+4)*.2;if(o(e,R%5?r.grass:r.stone,[.22,F,.26],[O,F/2,B]),R%3)for(let j=0;j<3;j++)o(e,R%2?r.gold:r.white,[.055,.05,.055],[O+(j-1)*.13,F+.08,B+Math.sin(j)*.1])}for(let R=0;R<14;R++){const N=-25+R*3.8;o(e,r.leaf,[.9,.45,.55],[N,.22,-15.6]),R%3===0&&s(e,r.wood,[.11,.8,.11],[N,.3,-14.4])}s(e,r.stone,[1.1,.04,3],[-19,-.08,-15]),s(e,r.wood,[.14,1.25,.14],[8,.58,-10.1]),s(e,r.blue,[.65,.43,.43],[8,1.2,-10.1]),s(e,r.cream,[.04,.25,.29],[8.34,1.18,-10.1]);const l=new Ve;l.position.set(8,1.2,-9.85),n.add(l),s(l,r.red,[.08,.38,.035],[0,.16,0]),s(l,r.red,[.22,.14,.035],[.07,.32,0]),s(e,r.wood,[1.5,.12,.5],[-17.2,.42,8.2]);for(const R of[-17.7,-16.7])s(e,r.dark,[.12,.42,.4],[R,.17,8.2]);s(e,r.wood,[1.5,.32,.08],[-17.2,.72,8.4]),e.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0)}),Wt(e),Wt(l);function u(R,N=!1){const O=new Ve;t.add(O),s(O,r[R],[N?1.5:2.6,.6,1.1],[0,.61,0]),s(O,r[R],[1.1,.55,1],[-.2,1.13,0]),s(O,r.blue,[.8,.32,1.03],[-.2,1.16,0]),s(O,r.dark,[.025,.37,1.04],[-.19,1.16,0]),s(O,r.cream,[.1,.16,.85],[N?.78:1.33,.62,0]);const B=[];for(const j of[-.85,.85])for(const G of[-.58,.58]){const se=N&&j<0?.45:.3,me=new pe(new mt(se,se,.19,12),r.dark);me.rotation.x=Math.PI/2,me.position.set(j,se-.1,G),O.add(me);const Ae=new pe(new mt(se*.48,se*.48,.2,8),r.cream);me.add(Ae),B.push(me)}const F=new Ve;return O.children.filter(j=>!B.includes(j)).forEach(j=>F.add(j)),O.add(F),Wt(F),O.visible=!1,{group:O,wheels:B}}const d=u("blue"),f=u("red"),p=u("gold"),g=u("leaf",!0);s(d.group,r.cream,[.75,.32,.03],[-.76,.7,.565]);const _=new Ve;g.group.add(_),s(_,r.wood,[1.65,.2,1.15],[-2.5,.37,0]),s(_,r.dark,[1.3,.1,.1],[-1.5,.32,0]);for(const R of[-.55,.55])o(_,r.dark,[.3,.3,.15],[-2.55,.2,R]);const v=new Ve;g.group.add(v);for(let R=0;R<3;R++)s(v,r.gold,[.7,.45,.83],[-2.9+R%2*.75,.7+(R===2?.46:0),0]),s(v,r.wood,[.07,.46,.85],[-2.9+R%2*.75,.7+(R===2?.46:0),0]);Wt(_),Wt(v);const m=new Ve;f.group.add(m),s(m,r.wood,[.8,.35,.9],[-.9,.95,0]);for(let R=0;R<5;R++)o(m,r.leaf,[.16,.18,.16],[-1.1+R%2*.3,1.17,-.3+Math.floor(R/2)*.28]);Wt(m);function S(R=!1){const N=new Ve;t.add(N),o(N,R?r.cream:r.blue,[.21,.18,.32],[0,.25,0]),o(N,R?r.leaf:r.dark,[.13,.14,.14],[0,.43,.21]),s(N,r.gold,[.12,.045,.18],[0,.4,.36]);for(const B of[-1,1])o(N,r.dark,[.019,.025,.024],[B*.11,.47,.28]),s(N,r.gold,[.08,.04,.17],[B*.1,.04,.02]);Wt(N);const O=[];for(const B of[-1,1]){const F=new Ve;F.position.set(B*.15,.3,0),N.add(F),o(F,R?r.cream:r.blue,[.28,.035,.13],[B*.2,0,0]),O.push(F)}return N.visible=!1,{group:N,wings:O}}const b=Array.from({length:3},()=>S()),x=Array.from({length:4},(R,N)=>{const O=S(!0);return O.group.scale.setScalar(N?.58:1),O});t.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0)});const L=Ux(),A={post:d,produce:f,tractor:g,"duck-crossing":p},P=Dt.lerp,U=Dt.clamp;let M=L.snapshot(),w=!1;function C(){for(const B of Object.values(A))B.group.visible=!1;if([...b,...x].forEach(B=>{B.group.visible=!1}),l.rotation.z=-.9,w||!M.active)return;const R=M.elapsed,N=M.active,O=A[N];if(O){O.group.visible=!0,O.group.rotation.y=N==="produce"?Math.PI:0;let B;N==="post"?B=R<11?P(-38,8,R/11):R<15?8:P(8,38,(R-15)/11):N==="duck-crossing"?B=R<6?P(-38,-20.5,R/6):R<17?-20.5:P(-20.5,38,(R-17)/13):B=P(N==="produce"?38:-38,N==="produce"?-38:38,R/M.duration),O.group.position.set(B,.08,-12.2);const F=N==="post"&&R>=11&&R<15||N==="duck-crossing"&&R>=6&&R<17;O.wheels.forEach(j=>{j.rotation.y=F?0:-B*3}),N==="post"&&R>12&&R<16&&(l.rotation.z=0),v.rotation.x=N==="tractor"?Math.sin(R*2.6)*.04:0}N==="pond-birds"&&b.forEach((B,F)=>{B.group.visible=!0;const j=U((R-F*.4)/5,0,1),G=U((R-15-F*.4)/5,0,1);B.group.position.set(P(-29,-20+F*.65,j)+G*-10,P(4.5,.13,j)+G*5,P(-5,3.2,j)+G*4),B.group.rotation.set(j===1&&G===0?Math.max(0,Math.sin(R*2+F))*.38:0,G?-1.5:.7,0),B.wings.forEach((se,me)=>{se.rotation.z=(me?1:-1)*(j<1||G>0?Math.sin(R*13+F)*.7:1.1)})}),N==="duck-crossing"&&x.forEach((B,F)=>{const j=U((R-4-F*(F===3?1.5:.6))/(F===3?6.5:9),0,1);B.group.visible=R>4+F*(F===3?1.5:.6)&&j<1,B.group.position.set(-17.8+Math.sin(j*Math.PI)*.2,.07+Math.abs(Math.sin(R*(F===3?15:9)))*.035,P(-15.5,-8.4,j)),B.wings.forEach((G,se)=>{G.rotation.z=se?1.2:-1.2})})}return{root:n,update(R,N){w=N.reducedMotion,M=L.update(R,N),C()},snapshot(){return{...M,sceneryMeshes:e.children.length,visibleActors:t.children.filter(R=>R.visible).map(R=>R.position.toArray()),totalActors:t.children.length,reducedMotion:w}},start(R){const N=L.start(R);return M=L.snapshot(),C(),N}}}const so=["lettuce","basil","tomato","kale","strawberry"],Mh=[6,18,40],bh=["Grower","Living Soil","Neighborhood"],$e=(n,e,t,i=null)=>({kind:n,target:e,label:t,crop:i}),jt=(n,e,t,i,r,s)=>({id:n,path:e,chapter:t,title:i,focus:r,goals:s,coins:18,xp:15}),Xi=[jt("roots",0,0,"Rooted in the garden","tower-0",[$e("transplant",6,"Transplant tower starters"),$e("harvest",4,"Harvest soil-finished crops")]),jt("layer-craft",0,1,"A tower of many colors","tower-0",[$e("mixed",1,"Fill one tower with four different crops"),$e("variety",4,"Harvest different crop varieties")]),jt("right-flow",0,1,"One batch, every tower","reservoir",[$e("matched",8,"Plant starts after checking shared delivery"),$e("harvest",6,"Harvest garden crops")]),jt("fruit-garden",0,2,"The fruit garden","bed-0",[$e("harvest",8,"Harvest tomatoes","tomato"),$e("harvest",8,"Harvest strawberries","strawberry")]),jt("succession",0,2,"Succession without a gap","tower-0",[$e("transplant",18,"Start the next garden succession"),$e("variety",5,"Harvest all five crops")]),jt("grower-showcase",0,2,"The HydroPip showcase","bed-0",[$e("matched",16,"Plant starts with shared delivery checked"),$e("harvest",24,"Finish crops in soil"),$e("variety",5,"Include every crop")]),jt("scraps",1,0,"Nothing goes to waste","workshop",[$e("compost",2,"Start compost batches"),$e("enrich",1,"Enrich a garden bed")]),jt("happy-hens",1,1,"Hens at home","workshop",[$e("feed",3,"Feed the hens stored vegetables"),$e("eggs",3,"Collect egg batches")]),jt("gentle-water",1,1,"Make every drop count","reservoir",[$e("saving",10,"Plant after checking the timed feed"),$e("enrich",2,"Enrich garden beds")]),jt("living-soil",1,1,"Living soil","composter",[$e("compost",4,"Start compost batches"),$e("enriched",12,"Transplant into enriched soil")]),jt("closed-loop",1,2,"From harvest to compost","coop",[$e("feed",5,"Feed the hens"),$e("enrich",4,"Return compost to garden beds"),$e("harvest",18,"Harvest fresh crops")]),jt("soil-showcase",1,2,"Sustainable homestead","composter",[$e("saving",18,"Plant starts with the timed feed checked"),$e("enriched",20,"Grow in enriched soil"),$e("eggs",5,"Collect egg batches")]),jt("neighbors",2,0,"Your neighborhood regulars","market",[$e("order",5,"Complete market orders"),$e("variety",2,"Harvest different crops")]),jt("salad-club",2,1,"The neighborhood salad club","market",[$e("order",4,"Serve lettuce orders","lettuce"),$e("order",4,"Serve basil orders","basil")]),jt("request-route",2,1,"Pip's request route","market",[$e("request",3,"Complete chosen requests"),$e("order",6,"Serve market customers")]),jt("weekend-market",2,2,"The weekend market","market",[$e("order",5,"Serve tomato orders","tomato"),$e("order",5,"Serve kale orders","kale"),$e("egg-sale",2,"Sell packed eggs at the stand")]),jt("community-table",2,2,"A table for everyone","market",[$e("request",5,"Complete chosen requests"),$e("variety",5,"Harvest every crop"),$e("order",10,"Serve market orders")]),jt("harvest-festival",2,2,"The homestead harvest festival","market",[$e("order",18,"Welcome market customers"),$e("request",5,"Complete community requests"),$e("egg-sale",4,"Bring fresh eggs to market")])],wa=[{id:"greens",title:"Mara's fresh greens",detail:"Harvest 6 lettuce for this growing request.",focus:"bed-0",goals:[$e("harvest",6,"Lettuce harvested","lettuce")],crops:["lettuce"]},{id:"herbs",title:"June's herb patch",detail:"Raise 5 basil through the towers and garden.",focus:"bed-0",goals:[$e("harvest",5,"Basil harvested","basil")],crops:["basil"]},{id:"mixed",title:"Theo's mixed harvest",detail:"Harvest three different crops from the garden.",focus:"bed-0",goals:[$e("variety",3,"Different crops harvested")],crops:["tomato","basil"]},{id:"flow",title:"Pip's water-wise trial",detail:"Check shared tower delivery, then plant 8 starts.",focus:"reservoir",goals:[$e("saving",8,"Starts with delivery checked")],chapter:1,crops:[]},{id:"market",title:"Luis's market morning",detail:"Complete 5 customer orders at the stand.",focus:"market",goals:[$e("order",5,"Market orders served")],crops:[]},{id:"soil",title:"June's soil trial",detail:"Transplant 6 tower starters into compost-enriched beds.",focus:"composter",goals:[$e("enriched",6,"Enriched transplants")],equipment:"composter",crops:[]},{id:"berries",title:"Mara's berry harvest",detail:"Harvest 6 strawberries from finished garden plants.",focus:"bed-0",goals:[$e("harvest",6,"Strawberries harvested","strawberry")],crops:["strawberry"]},{id:"hens",title:"Theo's happy hens",detail:"Feed and collect two batches of eggs.",focus:"coop",goals:[$e("feed",2,"Hen feedings"),$e("eggs",2,"Egg batches collected")],equipment:"coop",crops:[]}],Qo=(n,e=99999)=>Number.isFinite(Number(n))?Math.max(0,Math.min(e,Math.floor(Number(n)))):0;function wh(){return{claimed:[],progress:{},mastery:{},request:null,requestSerial:0,requestsCompleted:0,pinned:"roots"}}const bd=(n,e)=>e.map((t,i)=>t.kind==="variety"?[...new Set((Array.isArray(n?.[i])?n[i]:[]).filter(r=>so.includes(r)))]:Qo(n?.[i],t.target));function kx(n){const e=wh();e.claimed=[...new Set((Array.isArray(n?.claimed)?n.claimed:[]).filter(i=>Xi.some(r=>r.id===i)))];for(const i of Xi)e.progress[i.id]=bd(n?.progress?.[i.id],i.goals);for(const i of so)e.mastery[i]=Qo(n?.mastery?.[i],3);e.requestSerial=Qo(n?.requestSerial,999999),e.requestsCompleted=Qo(n?.requestsCompleted),e.pinned=Xi.some(i=>i.id===n?.pinned)?n.pinned:"roots";const t=wa.find(i=>i.id===n?.request?.id);return t&&(e.request={id:t.id,progress:bd(n.request.progress,t.goals)}),e}function Hn(n){return bh.map((e,t)=>Xi.find(i=>i.path===t&&!n.homestead.claimed.includes(i.id))).filter(Boolean)}function Gl(n,e){return n.market.built&&n.chapter>=e.chapter&&Hn(n).includes(e)}function Wl(n,e=[]){return n.map((t,i)=>({...t,current:Math.min(t.target,t.kind==="variety"?(e[i]||[]).length:e[i]||0)}))}function oo(n,e){return Wl(e.goals,n.homestead.progress[e.id])}function Sa(n,e){return Gl(n,e)&&oo(n,e).every(t=>t.current>=t.target)}function wd(n,e,t,i){n.forEach((r,s)=>{r.kind==="variety"&&t==="harvest"&&so.includes(i)?e[s]=[...new Set([...e[s]||[],i])]:r.kind===t&&(!r.crop||r.crop===i)&&(e[s]=Math.min(r.target,(e[s]||0)+1))})}function Ai(n,e,t=null){if(!n.market.built)return;for(const r of Hn(n))if(Gl(n,r)){const s=n.homestead.progress[r.id]||=[];wd(r.goals,s,e,t)}const i=wa.find(r=>r.id===n.homestead.request?.id);i&&wd(i.goals,n.homestead.request.progress,e,t)}function Ox(n,e){const t=Xi.find(i=>i.id===e);return!t||!Sa(n,t)?!1:(n.homestead.claimed.push(e),n.coins+=t.coins,n.xp+=t.xp,n.homestead.pinned=Hn(n).find(i=>i.path===t.path)?.id||Hn(n)[0]?.id||null,!0)}function Ht(n){const e=n.homestead?.claimed.length||0;return{basket:e>=3?7:5,seedBatch:e>=6?6:4,water:e>=12?.9:1,festival:e>=18}}function Ea(n,e){return n.homestead?.mastery?.[e]||0}function Fx(n,e){if(!so.includes(e)||!n.market.built)return!1;const t=Ea(n,e);return t>=3||n.stats.byCropHarvested[e]<Mh[t]?!1:(n.homestead.mastery[e]=t+1,n.coins+=[8,12,20][t],n.xp+=10,n.seeds[e]=Math.min(999,n.seeds[e]+2),!0)}function Sh(n){const e=wa.filter(i=>n.market.built&&n.chapter>=(i.chapter||0)&&i.crops.every(r=>n.unlockedCrops.includes(r))&&(!i.equipment||n.farm.owned.includes(i.equipment))),t=n.homestead.requestSerial%(e.length||1);return Array.from({length:Math.min(3,e.length)},(i,r)=>e[(t+r)%e.length])}function Eh(n){return wa.find(e=>e.id===n.homestead.request?.id)||null}function Bx(n,e){return n.homestead.request||!Sh(n).some(t=>t.id===e)?!1:(n.homestead.request={id:e,progress:[]},!0)}function zx(n){const e=Eh(n);return!e||!Wl(e.goals,n.homestead.request.progress).every(t=>t.current>=t.target)?!1:(n.homestead.request=null,n.homestead.requestSerial++,n.homestead.requestsCompleted++,n.coins+=12,n.xp+=8,Ai(n,"request"),!0)}function Hx(n){return n.homestead.request?!1:(n.homestead.requestSerial++,!0)}function mr(n){return n.campaignComplete&&n.homestead.claimed.length===18&&so.every(e=>Ea(n,e)===3)}const Vx=[{name:"Mara",color:"#df695c",skin:"#d9a47d",hair:"#453027",accessory:"sunhat",line:"Fresh greens for the block."},{name:"Theo",color:"#4398b1",skin:"#8c5d43",hair:"#242c30",accessory:"glasses",line:"A quick stop on the way home."},{name:"June",color:"#e5b84c",skin:"#e6b58b",hair:"#745239",accessory:"bun",line:"Produce for the neighborhood table."},{name:"Nia",color:"#78a967",skin:"#6f4937",hair:"#211e24",accessory:"curls",line:"The garden finish makes the difference."},{name:"Sam",color:"#ba7198",skin:"#c78968",hair:"#b9b7af",accessory:"glasses",line:"Looking for today's best crop."},{name:"Luis",color:"#6a87bf",skin:"#a46e4d",hair:"#39322a",accessory:"cap",line:"A market basket for dinner."}];function Dn(n){return n.orders.find(e=>e.id===n.selectedOrderId&&e.status==="waiting")||null}function In(n,e,t=Date.now()){const i=n.carry?.kind==="produce"?n.carry.items:[],r=i.filter(d=>d===e.crop).length,s=n.rack[e.crop]||0,o=n.beds.flatMap(d=>d.plants).filter(d=>d.crop===e.crop),a=o.filter(d=>d.readyAt<=t).length,c=o.length-a+n.towers.flatMap(d=>d.queue).filter(d=>d.crop===e.crop).length+(n.carry?.kind==="starter"&&n.carry.crop===e.crop?1:0),l=Math.max(0,e.amount-r),u=n.carry?.kind==="starter"?0:Ht(n).basket-i.length;return{carried:r,stored:s,ready:a,growing:c,needed:l,room:u,load:Math.min(l,s,u),missing:Math.max(0,l-s-a-c)}}function Th(n,e){const t=In(n,e);return n.carry?.kind==="starter"?{kind:"starter",label:"Plant starter",stock:t}:t.needed?t.room?t.load?{kind:"collect",label:`Collect ${t.load}`,stock:t}:t.ready?{kind:"harvest",label:"Harvest needed",stock:t}:{kind:"grow",label:t.missing?"Grow needed":"View growing",stock:t}:{kind:"store",label:"Make room",stock:t}:{kind:"deliver",label:"Deliver",stock:t}}function rn(n,e){if(n._markup===e)return;n._markup=e;const t=document.createElement("template");t.innerHTML=e;const i=s=>s.nodeType===1&&(s.getAttribute("data-key")||s.id||s.getAttribute("data-command"))||"";function r(s,o){const a=[...s.childNodes],c=new Set;[...o.childNodes].forEach((l,u)=>{const d=i(l),f=a.find(g=>!c.has(g)&&g.nodeType===l.nodeType&&g.nodeName===l.nodeName&&(d?i(g)===d:!i(g))),p=f||l.cloneNode(!0);if(c.add(p),s.childNodes[u]!==p&&s.insertBefore(p,s.childNodes[u]||null),!!f){if(p.nodeType===3){p.nodeValue!==l.nodeValue&&(p.nodeValue=l.nodeValue);return}if(p.nodeType===1){for(const g of[...p.attributes])l.hasAttribute(g.name)||p.removeAttribute(g.name);for(const g of[...l.attributes])p.getAttribute(g.name)!==g.value&&p.setAttribute(g.name,g.value);r(p,l)}}});for(const l of a)c.has(l)||l.remove()}r(n,t.content)}function Gx(n,e,t){let i="projects";const r=o=>`<ul class="homestead-goals">${o.map(a=>`<li><span>${a.label}</span><strong>${a.current}/${a.target}</strong><progress max="${a.target}" value="${a.current}"></progress></li>`).join("")}</ul>`;function s(o){const a=o.homestead,c=mr(o),l=a.claimed.length;let u;if(i==="projects")u=`<p class="homestead-summary">${l}/18 projects / ${Object.values(a.mastery).reduce((d,f)=>d+f,0)}/15 crop badges</p><p>${c?"Master Grower homestead complete. Community requests continue.":"A growing homestead, one useful project at a time."}</p>`,u+=Hn(o).map(d=>{const f=Gl(o,d),p=Sa(o,d);return`<article class="homestead-project ${p?"is-ready":""}"><small>${bh[d.path]} / ${Xi.filter(g=>g.path===d.path).indexOf(d)+1} of 6</small><h3>${d.title}</h3>${r(oo(o,d))}<p>${f?"18 coins + 15 XP":`Opens in Chapter ${d.chapter+1}${o.market.built?"":" after the market opens"}`}</p><div class="homestead-actions"><button data-home-action="project" data-value="${d.id}" ${p?"":"disabled"}>Claim reward</button><button data-home-action="pin" data-value="${d.id}" ${f?"":"disabled"}>${a.pinned===d.id?"Pinned":"Pin goal"}</button><button data-home-action="focus" data-value="${d.focus}" ${f?"":"disabled"}>Visit</button></div></article>`}).join(""),u+=`<h3>Homestead rewards</h3><ul class="homestead-perks">${[[3,"7-slot harvest basket"],[6,"6 seeds per packet at the same price"],[12,"10% less tower water use"],[18,"Harvest festival garden display"]].map(([d,f])=>`<li>${l>=d?"Earned":`${d} projects`}: ${f}</li>`).join("")}</ul><details><summary>All 18 projects</summary>${Xi.map(d=>`<p>${a.claimed.includes(d.id)?"Complete: ":""}${d.title}</p>`).join("")}</details>`;else if(i==="mastery")u="<p>Garden harvests earn crop badges. Each badge makes that crop finish in soil 3% sooner. Previous harvests count.</p>",u+=Object.entries(e).map(([d,f])=>{const p=Ea(o,d),g=Mh[p],_=o.stats.byCropHarvested[d];return`<article class="homestead-project"><h3><span class="crop-swatch" style="background:${f.color}">${f.code}</span> ${f.label}</h3><p>${p}/3 badges / ${p*3}% shorter garden growth</p>${p<3?`${r([{label:"Garden harvests",current:Math.min(g,_),target:g}])}<p>${[8,12,20][p]} coins + 10 XP + 2 seeds</p><button data-home-action="mastery" data-value="${d}" ${_>=g&&o.market.built?"":"disabled"}>Claim ${["Bronze","Silver","Gold"][p]} badge</button>`:"<strong>Gold mastery earned</strong>"}</article>`}).join("");else{const d=Eh(o);if(u=`<p>${a.requestsCompleted} requests completed. No deadlines. Requests reward your farm work; they do not take crops out of storage.</p>`,d){const f=Wl(d.goals,a.request.progress),p=f.every(g=>g.current>=g.target);u+=`<article class="homestead-project ${p?"is-ready":""}"><h3>${d.title}</h3><p>${d.detail}</p>${r(f)}<p>12 coins + 8 XP</p><div class="homestead-actions"><button data-home-action="request-claim" ${p?"":"disabled"}>Claim reward</button><button data-home-action="focus" data-value="${d.focus}">Visit</button><button data-home-action="request-abandon">Abandon</button></div></article>`}else u+=Sh(o).map(f=>`<article class="homestead-project"><h3>${f.title}</h3><p>${f.detail}</p><p>12 coins + 8 XP</p><button data-home-action="request-accept" data-value="${f.id}">Choose request</button></article>`).join(""),u+='<button data-home-action="request-refresh">Other requests</button>'}rn(n,`<header><div><small>HydroPip homestead</small><h2>${c?"Master Grower":"Growing Together"}</h2></div><button class="close-button" data-home-action="close" aria-label="Close homestead goals">&#215;</button></header><div class="homestead-tabs" role="tablist" aria-label="Homestead views">${[["projects","Projects"],["mastery","Crop book"],["requests","Requests"]].map(([d,f])=>`<button role="tab" aria-selected="${i===d}" data-home-tab="${d}">${f}</button>`).join("")}</div><div role="tabpanel" class="homestead-content">${u}</div>`)}return n.onclick=o=>{const a=o.target.closest("button");!a||a.disabled||(a.dataset.homeTab?(i=a.dataset.homeTab,t("render")):a.dataset.homeAction&&t(a.dataset.homeAction,a.dataset.value))},{render:s}}const Wx=4;function ao(n,e=null,t=-1){const i=new Set(n.queue.map(r=>r.layer));return e?.kind==="starter"&&e.sourceTower===t&&i.add(e.sourceLayer),[0,1,2,3].filter(r=>!i.has(r))}function Mr(n,e,t=null){return n?.queue.find(i=>i.readyAt!==null&&i.readyAt<=e&&(!t||i.crop===t))}function Ah(n){n.towers.forEach((e,t)=>{const i=new Set;for(const s of e.queue)(!Number.isInteger(s.layer)||s.layer<0||s.layer>=Wx||i.has(s.layer))&&(s.layer=[0,1,2,3].find(o=>!i.has(o))),i.add(s.layer);const r=n.carry;r?.kind==="starter"&&r.sourceTower===t&&((!Number.isInteger(r.sourceLayer)||i.has(r.sourceLayer))&&(r.sourceLayer=[0,1,2,3].find(s=>!i.has(s))),r.job&&(r.job.layer=r.sourceLayer))})}const Ji={composter:{label:"Composter",cost:90,chapter:0,detail:"Turn 2 harvest scraps into compost. Enrich four bed plantings for 20% shorter grow-out."},rainTank:{label:"Rainwater storage",cost:120,chapter:1,detail:"Use 20% less reservoir water while growing tower starts."},coop:{label:"Chicken coop",cost:180,chapter:1,detail:"Feed one stored vegetable to two hens. Collect 2 eggs after 2 minutes; sell them for 16 coins."}};function $x(){return{owned:[],scraps:0,compost:0,compostReadyAt:null,coopReadyAt:null,eggsReady:0,eggs:0,eggsSold:0}}function Xx(n){const e=(t,i=999)=>Math.max(0,Math.min(i,Math.floor(Number(t)||0)));return{owned:[...new Set((Array.isArray(n?.owned)?n.owned:[]).filter(t=>Object.hasOwn(Ji,t)))],scraps:e(n?.scraps,24),compost:e(n?.compost,12),compostReadyAt:Number.isFinite(n?.compostReadyAt)&&n.compostReadyAt>0?n.compostReadyAt:null,coopReadyAt:Number.isFinite(n?.coopReadyAt)&&n.coopReadyAt>0?n.coopReadyAt:null,eggsReady:e(n?.eggsReady,2),eggs:e(n?.eggs,12),eggsSold:e(n?.eggsSold,99999)}}function qx(n,e){const t=n.farm;t.owned.includes("composter")&&t.compostReadyAt&&t.compostReadyAt<=e&&(t.compost=Math.min(12,t.compost+1),t.compostReadyAt=null),t.owned.includes("coop")&&t.coopReadyAt&&t.coopReadyAt<=e&&(t.eggsReady=2,t.coopReadyAt=null)}function Yx(n,e,t=1){const i=n.farm;return!i.owned.includes("composter")||i.compostReadyAt||i.scraps<2||i.compost>=12?!1:(i.scraps-=2,i.compostReadyAt=e+6e4*t,!0)}function jx(n,e,t,i=1){const r=n.farm;return!r.owned.includes("coop")||r.coopReadyAt||r.eggsReady||!Object.hasOwn(n.rack,e)||!(n.rack[e]>0)?!1:(n.rack[e]-=1,n.stats.byCropFed[e]+=1,r.coopReadyAt=t+12e4*i,!0)}function Jx(n){const e=n.farm;return!e.owned.includes("coop")||!e.eggsReady||e.eggs+e.eggsReady>12?!1:(e.eggs+=e.eggsReady,e.eggsReady=0,e.scraps=Math.min(24,e.scraps+1),!0)}function Kx(n){if(!n.market.built||!n.farm.eggs)return 0;const e=n.farm.eggs;return n.farm.eggs=0,n.farm.eggsSold+=e,n.coins+=e*8,e}function Zx(n,e){const t=n.beds[e];return!t?.built||t.soilCharges||n.farm.compost<1?!1:(n.farm.compost-=1,t.soilCharges=4,!0)}function Qx(n,e){const t=new Ve;t.name=`farm ${n}`;const i=Object.fromEntries(Object.entries({wood:10056519,dark:4215880,soil:6573618,cream:15787717,roof:12936278,leaf:8169539,orange:15311682,water:6269879}).map(([o,a])=>[o,new yr({color:a})])),r=(o,a,c,l)=>{const u=new pe(new Bt(...c),a);return u.position.set(...l),o.add(u),u},s=(o,a,c,l)=>{const u=new pe(new gn(1,12,8),a);return u.scale.set(...c),u.position.set(...l),o.add(u),u};if(n==="composter"){r(t,i.soil,[1.55,.42,1.1],[0,.24,0]);for(const o of[-.8,.8])for(const a of[-.6,.6])r(t,i.dark,[.11,1.1,.11],[o,.55,a]);for(const o of[.2,.44,.68,.92]){for(const a of[-.62,.62])r(t,i.wood,[1.7,.17,.08],[0,o,a]);for(const a of[-.82,.82])r(t,i.wood,[.08,.17,1.3],[a,o,0])}s(t,i.soil,[.73,.2+e.scraps*.012,.53],[0,.51,0]);for(let o=0;o<Math.min(6,e.scraps);o++)s(t,i.leaf,[.15,.03,.075],[Math.sin(o*2)*.45,.66+e.scraps*.008,Math.cos(o*2)*.35]);for(let o=0;o<Math.min(3,e.compost);o++)r(t,i.cream,[.3,.38,.24],[1.12,.2,-.36+o*.29])}else if(n==="rainTank"){const o=new pe(new mt(.66,.72,1.45,20),i.water);o.position.y=.75,t.add(o);for(const a of[.15,.72,1.44]){const c=new pe(new ii(.68,.045,6,24),i.dark);c.rotation.x=Math.PI/2,c.position.y=a,t.add(c)}r(t,i.cream,[.2,.9,.08],[0,.83,.66]),r(t,i.dark,[.12,.15,.48],[.35,.22,.71])}else{r(t,i.soil,[4,.06,2],[0,.03,0]),r(t,i.wood,[1.25,.9,1.2],[-1.1,.85,0]),r(t,i.dark,[.33,.47,.035],[-1.04,.64,.62]);for(const c of[-1,1]){const l=r(t,i.roof,[.85,.09,1.5],[-1.1+c*.34,1.49,0]);l.rotation.z=-c*.33}for(const c of[-1.58,-.63])for(const l of[-.48,.48])r(t,i.dark,[.1,.55,.1],[c,.28,l]);const o=r(t,i.wood,[.48,.06,.9],[-1.04,.26,.96]);o.rotation.x=-.4;for(const c of[-2,-1,0,1,2])for(const l of[-1,1])r(t,i.wood,[.055,.56,.055],[c,.3,l]);for(const c of[-1,1])for(const l of[.19,.45])r(t,i.wood,[4.05,.035,.035],[0,l,c]);for(const c of[-2,2])for(const l of[.19,.45])r(t,i.wood,[.035,.035,2],[c,l,0]);s(t,i.cream,[.22,.04,.19],[1.5,.08,-.5]);for(let c=0;c<e.eggsReady;c++)s(t,i.cream,[.09,.12,.08],[-.69+c*.2,.53,.64]);const a=[];for(let c=0;c<2;c++){const l=new Ve;l.position.set(.2+c*.85,0,c?-.4:.35),t.add(l),s(l,i.cream,[.25,.25,.34],[0,.36,0]),s(l,i.wood,[.05,.14,.21],[-.23,.38,-.03]),s(l,i.cream,[.13,.2,.13],[0,.63,.2]);for(let f=0;f<3;f++)s(l,i.roof,[.045,.065,.055],[0,.82,.15+f*.045]);s(l,i.roof,[.04,.08,.04],[0,.53,.31]);for(const f of[-1,1])s(l,i.dark,[.018,.024,.018],[f*.116,.68,.25]),r(l,i.orange,[.028,.19,.03],[f*.1,.1,0]),r(l,i.orange,[.08,.025,.13],[f*.1,.025,.04]);const u=new pe(new di(.057,.16,4),i.orange);u.rotation.x=Math.PI/2,u.position.set(0,.63,.35),l.add(u);const d=s(l,i.cream,[.11,.24,.1],[0,.54,-.28]);d.rotation.x=-.65,l.userData.home=l.position.clone(),a.push(l)}t.userData.hens=a}return t.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),Wt(t),t}function ey(n){const e=new Map;n.traverse(i=>{!i.userData.growthTiming||!i.userData.plantingPlacements||i.children.filter(r=>r.isInstancedMesh).forEach((r,s)=>{const o=`${i.userData.crop}:${s}:${r.material.opacity}`;e.has(o)||e.set(o,[]),e.get(o).push(r),r.layers.set(1),r.castShadow=!1})});const t=[];for(const i of e.values()){const r=i.reduce((o,a)=>o+a.count,0),s=new _r(i[0].geometry.clone(),i[0].material.clone(),r);s.castShadow=!0,s.receiveShadow=!0,s.userData.instanceTargets=i.flatMap(o=>Array(o.count).fill(o.userData.interactiveId)),s.userData.cropBatch=!0,n.add(s),t.push({mesh:s,parts:i})}n.userData.cropBatches=t,Ch(n)}function Ch(n){n.updateMatrixWorld(!0);const e=n.matrixWorld.clone().invert(),t=new yt,i=new yt,r=new yt().makeScale(0,0,0);for(const{mesh:s,parts:o}of n.userData.cropBatches||[]){let a=0;for(const c of o){i.multiplyMatrices(e,c.matrixWorld);for(let l=0;l<c.count;l++)c.getMatrixAt(l,t),t.premultiply(i),c.visible||t.multiply(r),s.setMatrixAt(a++,t)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}const dl=.24,mc=1.12;function ty(n){const e=new Ve;e.name="water reservoir";const t=new Ve;e.add(t);const i=new yr({color:14476762}),r=new yr({color:4151378}),s=new Di({color:4636114,roughness:.25,metalness:.05}),o=new $t({color:6935773});function a(v,m,S,b){const x=new pe(m,S);return x.position.set(...b),v.add(x),x}a(t,new Bt(1.7,.2,1.7),r,[0,.13,0]);for(const v of[.26,.84,1.43])for(const m of[-.78,.78])a(t,new Bt(1.6,.045,.045),i,[0,v,m]),a(t,new Bt(.045,.045,1.6),i,[m,v,0]);for(const v of[-.78,0,.78])for(const m of[-.78,.78])a(t,new Bt(.045,1.2,.045),i,[v,.845,m]);const c=a(e,new Bt(1.5,1.17,1.5),new Di({color:14152429,transparent:!0,opacity:.14,roughness:.25,depthWrite:!1,side:mn}),[0,.845,0]);c.renderOrder=2;const l=a(e,new Bt(1.37,1,1.37),s,[0,dl,0]);l.name="reservoir water volume";const u=new Ve;u.position.set(.42,0,.8),e.add(u),a(u,new Bt(.22,1.1,.06),r,[0,.86,0]);for(let v=0;v<=4;v++)a(u,new Bt(.045,.014,.015),i,[.065,.39+v*.225,.04]);Wt(u);const d=a(u,new Bt(.08,.9,.025),o,[-.025,.39,.048]),f=a(u,new gn(.065,10,8),o,[0,1.39,.018]);for(const v of[-.35,.35])a(t,new Bt(.24,.2,.3),r,[v,.34,-.2]),a(t,new mt(.045,.045,1.2,8),r,[v,.95,-.2]);const p=a(t,new mt(.045,.045,.42,8),r,[-.35,1.55,.01]);p.rotation.x=Math.PI/2,a(t,new mt(.045,.045,.18,8),r,[-.35,1.48,.22]);const g=a(t,new mt(.045,.045,.66,8),r,[.35,1.55,-.53]);g.rotation.x=Math.PI/2,a(t,new mt(.045,.045,1.3,8),r,[.35,.9,-.86]);const _=a(e,new mt(.027,.037,.2,8),s,[-.35,1.3,.22]);return _.name="IBC top mixing discharge",Wt(t),e.userData.reservoir={liquid:l,fill:d,lamp:f,shell:c,mixingStream:_,ratio:null,status:null},Rh(e,n),e}function Rh(n,e){const t=n?.userData.reservoir;if(!t)return;const i=Math.max(0,Math.min(1,Number.isFinite(e)?e/100:0));if(t.ratio===i)return;t.ratio=i,t.status=i===0?"empty":i<.3?"low":"ready",t.liquid.visible=t.fill.visible=i>0,t.liquid.scale.y=Math.max(1e-4,i*mc),t.liquid.position.y=dl+i*mc/2,t.mixingStream.visible=i>0;const r=Math.max(.02,1.4-(dl+i*mc));t.mixingStream.scale.y=r/.2,t.mixingStream.position.y=1.4-r/2,t.fill.scale.y=Math.max(1e-4,i),t.fill.position.y=.39+i*.9/2,t.lamp.material.color.setHex(i<.3?16102724:6935773)}function ny(n){const e=n?.userData.reservoir;return e?{ratio:e.ratio,status:e.status,waterVisible:e.liquid.visible,surfaceHeight:e.liquid.position.y+e.liquid.scale.y/2,bottomHeight:e.liquid.position.y-e.liquid.scale.y/2,gaugeVisible:e.fill.visible,gaugeScale:e.fill.scale.y,modelId:n.uuid}:null}const Is="2026.09.06-preview.3",iy="https://hydropip-pip-api.onrender.com/track-start.html",Sd="info@hydropip.com",ry=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;let Ph=window.HYDROPIP_ANALYTICS_CONSENT===!0;window.addEventListener("hydropip:analytics-consent",n=>{Ph=n.detail?.granted===!0});function Wn(n,e={}){if(!Ph)return;const t={event:`hydropip_game_${n}`,game:"growing_adventure",version:Is,sessionId:ry,...e};window.dataLayer=window.dataLayer||[],window.dataLayer.push(t),window.dispatchEvent(new CustomEvent("hydropip:game-event",{detail:t}))}const hl={lettuce:4,basil:6,tomato:8,kale:6,strawberry:10},oa=80;function sy(){return{tutorialClaimed:[],expanded:!1,purchases:0,rescues:0}}function oy(n){const e=t=>Number.isFinite(t)?Math.max(0,Math.min(99999,Math.floor(t))):0;return{tutorialClaimed:[...new Set((Array.isArray(n?.tutorialClaimed)?n.tutorialClaimed:[]).filter(t=>["lettuce","basil"].includes(t)))],expanded:!!n?.expanded,purchases:e(n?.purchases),rescues:e(n?.rescues)}}function fl(n){return n.seedShop.expanded?48:24}function $l(n,e){if(!Object.hasOwn(hl,e)||!n.unlockedCrops.includes(e))return{available:!1,reason:"Crop locked"};const t=!n.market.built&&["lettuce","basil"].includes(e)&&!n.seedShop.tutorialClaimed.includes(e),i=t?4:Ht(n).seedBatch,r=t?0:hl[e],s=n.market.built?n.coins:Math.max(0,n.coins-40),o=n.seeds[e]+i>fl(n)?"Vault full":s<r?n.market.built?"Not enough coins":"Keep the market reserve":"";return{available:!o,reason:o,amount:i,price:r,tutorial:t}}function ay(n,e){const t=$l(n,e);return t.available?(n.coins-=t.price,n.seeds[e]+=t.amount,n.stats.seedsCollected+=t.amount,t.tutorial?n.seedShop.tutorialClaimed.push(e):n.seedShop.purchases++,!0):!1}function Lh(n){if((n.market.built?n.coins:Math.max(0,n.coins-40))>=hl.lettuce||Object.values(n.seeds).some(r=>r>0)||n.carry?.kind==="starter")return!1;const t=n.chapter>=2?2:1,i=n.carry?.kind==="produce"?n.carry.items:[];return!(Object.entries(n.rack).some(([r,s])=>s+i.filter(o=>o===r).length>=t)||n.towers.some(r=>r.queue.length)||n.beds.some(r=>r.plants.length)||n.farm.eggs||n.farm.eggsReady||n.farm.coopReadyAt)}function cy(n){return Lh(n)?(n.seeds.lettuce+=2,n.stats.seedsCollected+=2,n.seedShop.rescues++,!0):!1}function ly(n){return!n.market.built||n.seedShop.expanded||n.coins<oa?!1:(n.coins-=oa,n.seedShop.expanded=!0,!0)}const co="hydropipCampaignSave",uy="hydropipTowerRunCampaign",Xl=6,fi=["lettuce","basil","tomato","kale","strawberry"],Le={lettuce:{code:"L",label:"Lettuce",color:"#79bd53",accent:"#d6f47a",towerSeconds:9,bedSeconds:6,coinValue:9,xp:3,family:"greens"},basil:{code:"B",label:"Basil",color:"#319856",accent:"#8de28f",towerSeconds:11,bedSeconds:7,coinValue:11,xp:4,family:"greens"},tomato:{code:"T",label:"Tomato",color:"#df5e48",accent:"#ffb06b",towerSeconds:15,bedSeconds:10,coinValue:15,xp:5,family:"fruit"},kale:{code:"K",label:"Kale",color:"#47765c",accent:"#a8d276",towerSeconds:13,bedSeconds:9,coinValue:14,xp:5,family:"greens"},strawberry:{code:"S",label:"Strawberry",color:"#d94f68",accent:"#ffd06c",towerSeconds:17,bedSeconds:11,coinValue:19,xp:7,family:"fruit"}},Yr=[0,35,85,145,220,310,420,650,950,1350,1850,2450,3150,3950,4850],pt={market:40,tower:[0,70,110,160],bedUpgrade:[45,65,90,120],queueUpgrade:55,marketUpgrade:95,cosmetics:{"sunny-planters":30,"blue-path":45,"festival-bunting":60}},qs={"sunny-planters":{label:"Sunny planters",color:"#f4c451"},"blue-path":{label:"Blue garden pots",color:"#66c7d0"},"festival-bunting":{label:"Market bunting",color:"#e86c54"}},lo=[{id:"restore",number:1,name:"Restore the Homestead",shortName:"Homestead",description:"Repair the first tower and reopen Pip's Veg Stand.",completionTask:"first-market-day"},{id:"balance",number:2,name:"Balance Split Flow",shortName:"Split Flow",description:"Check the shared reservoir and supply a neighborhood rush.",completionTask:"neighborhood-rush"},{id:"pro-yard",number:3,name:"Build the Pro Yard",shortName:"Pro Yard",description:"Complete the five-crop launch showcase with Pro Pip.",completionTask:"launch-showcase"}],bn=[{id:"repair-first-tower",chapter:0,title:"Bring the tower online",detail:"Repair the first HydroPip tower.",focus:"tower-0",reward:{coins:15,xp:15,unlockCrop:"basil"},story:"Pip: One good tower is enough to bring this garden back."},{id:"first-tower-plan",chapter:0,title:"Plan the first greens",detail:"Collect seeds and plant 2 lettuce layers.",focus:"vault",reward:{coins:10,xp:20},story:"Mara: Lettuce first. The neighborhood has missed fresh greens."},{id:"first-grow-out",chapter:0,title:"Finish crops in soil",detail:"Transplant and harvest 2 garden crops.",focus:"bed-0",reward:{coins:20,xp:25},story:"Pip: Tower roots are ready. The bed gives them their final finish."},{id:"reopen-market",chapter:0,title:"Reopen Pip's Veg Stand",detail:"Build the market for 40 coins.",focus:"market",reward:{coins:20,xp:25},story:"Theo: Raise that awning and customers will find us."},{id:"first-market-day",chapter:0,title:"Serve the first greens",detail:"Sell 2 lettuce and 2 basil across 4 market orders.",goals:{sold:{lettuce:2,basil:2},orders:4},focus:"market",reward:{coins:40,xp:35,chapterComplete:!0},story:"June: The stand is open again. Split Flow is ready when you are."},{id:"build-second-tower",chapter:1,title:"Open the second lane",detail:"Build Tower 2 for 70 coins.",focus:"tower-1",reward:{coins:25,xp:35,unlockCrop:"tomato"},story:"Pip: Two towers, one tank. Both receive the same nutrient batch."},{id:"specialize-flow",chapter:1,title:"Check the shared system",detail:"Confirm tank circulation, then check delivery to every tower.",focus:"reservoir",reward:{coins:25,xp:35,unlockCrop:"kale"},story:"Mara: One pump mixes the tank. A second pump feeds every tower from that same batch."},{id:"split-crop-plan",chapter:1,title:"Run a mixed crop plan",detail:"Plant tomato and kale in separate tower layers.",focus:"vault",reward:{coins:40,xp:40},story:"Theo: Different crops can share the towers. Their nutrient supply is still one batch."},{id:"build-third-tower",chapter:1,title:"Complete Split Flow",detail:"Build Tower 3 for 110 coins.",focus:"tower-2",reward:{coins:55,xp:45},story:"Pip: Three towers. Now the farm can keep several orders moving."},{id:"neighborhood-rush",chapter:1,title:"Serve the neighborhood rush",detail:"Sell 3 tomato and 3 kale, reach 10 total orders, and upgrade tower drippers or a garden bed.",goals:{sold:{tomato:3,kale:3},orders:10,capacityUpgrade:!0},focus:"market",reward:{coins:90,xp:55,chapterComplete:!0},story:"June: Every order made the Pro Yard possible."},{id:"build-pro-yard",chapter:2,title:"Build the fourth tower",detail:"Build Tower 4 for 160 coins.",focus:"tower-3",reward:{coins:45,xp:55,unlockCrop:"strawberry",unlockPro:!0},story:"Pip: Pro Yard online. Time for the black shirt and tool belt."},{id:"launch-showcase",chapter:2,title:"Host the launch showcase",detail:"Upgrade the market, sell 5 of every crop plus 3 extra strawberries, and reach 20 total orders.",goals:{sold:{lettuce:5,basil:5,tomato:5,kale:5,strawberry:8},orders:20,marketLevel:2},focus:"market",reward:{coins:140,xp:75,chapterComplete:!0,campaignComplete:!0},story:"Mara: The homestead is growing, the stand is busy, and Pip is a pro."}];function ur(){return Object.fromEntries(fi.map(n=>[n,0]))}function Ta(n){const e=Math.max(0,Number(n)||0);let t=1;return Yr.forEach((i,r)=>{e>=i&&(t=r+1)}),Math.min(Yr.length,t)}function Dh(n){const e=Ta(n),t=Yr[e-1],i=Yr[e]??t;return{level:e,current:Math.max(0,n-t),needed:e>=Yr.length?0:i-t,ratio:e>=Yr.length?1:(n-t)/(i-t)}}function Ih(n){return{id:`tower-${n}`,built:n===0,repaired:!1,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!1,queue:[]}}function Uh(n){return{id:`bed-${n}`,built:n===0,capacity:2,soilCharges:0,plants:[]}}function Aa(n=Date.now()){return{version:Xl,createdAt:n,savedAt:n,chapter:0,taskIndex:0,completedTasks:[],coins:45,xp:0,level:1,challengeUnlocked:!1,campaignComplete:!1,proPip:!1,unlockedCrops:["lettuce"],towers:[0,1,2,3].map(Ih),beds:[0,1,2,3].map(Uh),market:{built:!1,level:0},farm:$x(),homestead:wh(),seeds:ur(),seedShop:sy(),rack:ur(),carry:null,orders:[],selectedOrderId:null,orderSequence:0,lastCustomer:"",stats:{seedsCollected:0,planted:0,transplanted:0,harvested:0,sold:0,orders:0,rejectedOrders:0,serviceActions:0,byCropQueued:ur(),byCropHarvested:ur(),byCropSold:ur(),byCropFed:ur()},hydro:{water:100,nutrients:100,ph:6.2,strategy:"balanced",batchMixed:!0,mixChecked:!1,flowChecked:!1,flowCalibrated:!1,systemLessonDone:!1,batchNumber:1,feedPhase:0,lineClogged:!1,lineRunSeconds:0,lineClogAfter:300,servicedAt:n},cosmetics:{owned:[],active:[]},tutorial:{welcomeSeen:!1,taskDrawerSeen:!1,marketSeen:!1},settings:{soundEnabled:!0,highContrast:!1,reducedMotion:!1,musicVolume:.22,effectsVolume:.68}}}function qe(n,e,t=-1/0,i=1/0){const r=Number(n);return Number.isFinite(r)?Math.min(i,Math.max(t,r)):e}function Wr(n){const e=ur();return fi.forEach(t=>{e[t]=Math.floor(qe(n?.[t],0,0,999))}),e}function Ed(n){return!n||!Le[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,layer:Number.isInteger(n.layer)&&n.layer>=0&&n.layer<4?n.layer:null,queuedAt:qe(n.queuedAt,Date.now(),0),startedAt:n.startedAt===null?null:qe(n.startedAt,Date.now(),0),readyAt:n.readyAt===null?null:qe(n.readyAt,Date.now(),0),quality:qe(n.quality,1,.5,1.25)}}function dy(n){return!n||!Le[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,plantedAt:qe(n.plantedAt,Date.now(),0),readyAt:qe(n.readyAt,Date.now(),0),quality:qe(n.quality,1,.5,1.25)}}function hy(n){return!n||!Le[n.crop]?null:{id:String(n.id||crypto.randomUUID()),customer:String(n.customer||"Mara").slice(0,24),crop:n.crop,amount:Math.floor(qe(n.amount,1,1,3)),reward:Math.floor(qe(n.reward,10,1,200)),xp:Math.floor(qe(n.xp,5,1,50)),createdAt:qe(n.createdAt,Date.now(),0),expiresAt:qe(n.expiresAt,Date.now()+12e4,0),status:["waiting","cooldown"].includes(n.status)?n.status:"waiting"}}function fy(n,e,t){n.towers.forEach(i=>{i.queue.forEach(r=>{if(!r||r.startedAt===null||r.readyAt===null||r.readyAt<=e)return;const s=t?as(r.crop,"tower",n,i):Le[r.crop].towerSeconds*4,o=e+s*1e3;r.readyAt=Math.min(r.readyAt,o)})}),n.beds.forEach(i=>{i.plants.forEach(r=>{if(r.readyAt<=e)return;const s=e+as(r.crop,"bed",n)*1e3;r.readyAt=Math.min(r.readyAt,s)})})}function aa(n,e=Date.now()){const t=Aa(e);if(!n||typeof n!="object")return t;const i=n.hydro?.systemLessonDone===void 0&&(qe(n.taskIndex,0)>6||Array.isArray(n.towers)&&n.towers.some(o=>["greens","fruit"].includes(o?.specialization))),r={...t,...n,version:Xl,createdAt:qe(n.createdAt,e,0),savedAt:qe(n.savedAt,e,0),chapter:Math.floor(qe(n.chapter,0,0,lo.length-1)),taskIndex:Math.floor(qe(n.taskIndex,0,0,bn.length)),completedTasks:Array.isArray(n.completedTasks)?[...new Set(n.completedTasks.filter(o=>bn.some(a=>a.id===o)))]:[],coins:Math.floor(qe(n.coins,t.coins,0,99999)),xp:Math.floor(qe(n.xp,0,0,99999)),challengeUnlocked:!!n.challengeUnlocked,campaignComplete:!!n.campaignComplete,proPip:!!n.proPip,unlockedCrops:Array.isArray(n.unlockedCrops)?fi.filter(o=>n.unlockedCrops.includes(o)):["lettuce"],seeds:Wr(n.seeds),seedShop:oy(n.seedShop),rack:Wr(n.rack),farm:Xx(n.farm),homestead:kx(n.homestead),carry:null,orders:Array.isArray(n.orders)?n.orders.map(hy).filter(Boolean).slice(0,3):[],selectedOrderId:typeof n.selectedOrderId=="string"?n.selectedOrderId.slice(0,80):null,orderSequence:Math.floor(qe(n.orderSequence,0,0,999999)),lastCustomer:String(n.lastCustomer||"").slice(0,24),market:{built:!!n.market?.built,level:Math.floor(qe(n.market?.level,0,0,2)),openingGrant:Math.floor(qe(n.market?.openingGrant,0,0,pt.market))},hydro:{water:qe(n.hydro?.water,100,0,100),nutrients:qe(n.hydro?.nutrients,100,0,100),ph:qe(n.hydro?.ph,6.2,4.5,8),strategy:"balanced",batchMixed:n.hydro?.batchMixed!==!1,mixChecked:n.hydro?.batchMixed===!1?!1:!!n.hydro?.mixChecked,flowChecked:!!n.hydro?.flowChecked,flowCalibrated:!!n.hydro?.flowCalibrated||n.hydro?.strategy==="water-save"||i,systemLessonDone:!!n.hydro?.systemLessonDone||i,batchNumber:Math.floor(qe(n.hydro?.batchNumber,1,1,999999)),feedPhase:qe(n.hydro?.feedPhase,0,0,24)%24,lineClogged:!!n.hydro?.lineClogged&&qe(n.chapter,0)>=1,lineRunSeconds:qe(n.hydro?.lineRunSeconds,0,0,360),lineClogAfter:qe(n.hydro?.lineClogAfter,300,240,360),servicedAt:qe(n.hydro?.servicedAt,e,0)},cosmetics:{owned:Array.isArray(n.cosmetics?.owned)?n.cosmetics.owned.filter(o=>qs[o]):[],active:Array.isArray(n.cosmetics?.active)?n.cosmetics.active.filter(o=>qs[o]):[]},tutorial:{...t.tutorial,...n.tutorial||{}},settings:{soundEnabled:n.settings?.soundEnabled!==!1,highContrast:!!n.settings?.highContrast,reducedMotion:!!n.settings?.reducedMotion,musicVolume:qe(n.settings?.musicVolume,t.settings.musicVolume,0,1),effectsVolume:qe(n.settings?.effectsVolume,t.settings.effectsVolume,0,1)},stats:{...t.stats,...n.stats||{},seedsCollected:Math.floor(qe(n.stats?.seedsCollected,0,0)),planted:Math.floor(qe(n.stats?.planted,0,0)),transplanted:Math.floor(qe(n.stats?.transplanted,0,0)),harvested:Math.floor(qe(n.stats?.harvested,0,0)),sold:Math.floor(qe(n.stats?.sold,0,0)),orders:Math.floor(qe(n.stats?.orders,0,0)),rejectedOrders:Math.floor(qe(n.stats?.rejectedOrders,0,0)),serviceActions:Math.floor(qe(n.stats?.serviceActions,0,0)),byCropQueued:Wr(n.stats?.byCropQueued),byCropHarvested:Wr(n.stats?.byCropHarvested),byCropSold:Wr(n.stats?.byCropSold),byCropFed:Wr(n.stats?.byCropFed)}};if(r.level=Ta(r.xp),r.unlockedCrops.includes("lettuce")||r.unlockedCrops.unshift("lettuce"),r.towers=[0,1,2,3].map(o=>{const a=n.towers?.[o]||{};return{...Ih(o),...a,id:`tower-${o}`,built:o===0||!!a.built,repaired:!!a.repaired,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!!a.irrigationUpgraded||qe(n.version,0)<6&&a.queueCapacity===3,queue:Array.isArray(a.queue)?a.queue.map(Ed).filter(Boolean).slice(0,4):[]}}),r.beds=[0,1,2,3].map(o=>{const a=n.beds?.[o]||{};return{...Uh(o),...a,id:`bed-${o}`,built:o===0||!!a.built,capacity:Math.floor(qe(a.capacity,2,2,4)),soilCharges:Math.floor(qe(a.soilCharges,0,0,4)),plants:Array.isArray(a.plants)?a.plants.map(dy).filter(Boolean).slice(0,4):[]}}),n.carry?.kind==="starter"&&Le[n.carry.crop])r.carry={kind:"starter",crop:n.carry.crop,quality:qe(n.carry.quality,1,.5,1.25),sourceTower:Math.floor(qe(n.carry.sourceTower,0,0,3)),sourceLayer:Number.isInteger(n.carry.sourceLayer)&&n.carry.sourceLayer>=0&&n.carry.sourceLayer<4?n.carry.sourceLayer:null,job:Ed(n.carry.job)};else if(n.carry?.kind==="produce"&&Array.isArray(n.carry.items)){const o=n.carry.items.filter(a=>Le[a]).slice(0,Ht(r).basket);o.length&&(r.carry={kind:"produce",items:o})}Ah(r);const s=r.cosmetics.owned.length||r.farm.owned.length||r.towers.some(o=>o.irrigationUpgraded)||r.beds.some(o=>o.capacity>2);if(!r.market.built&&r.taskIndex>=3&&r.coins<pt.market&&!r.market.openingGrant&&s&&(r.market.openingGrant=pt.market-r.coins,r.coins=pt.market),r.hydro.water<=0||!r.hydro.batchMixed){const o=Math.max(0,e-r.savedAt);r.towers.forEach(a=>a.queue.forEach(c=>{c.readyAt>r.savedAt&&(c.readyAt+=o,c.startedAt!==null&&(c.startedAt+=o))})),r.savedAt=e}return fy(r,e,qe(n.version,0)<4),r}function py(n,e){if(!e||typeof e!="object")return n;const t=Array.isArray(e.completed)?e.completed:[],i=Math.floor(qe(e.highestContract,0,0,2));return(t.includes("homestead")||i>=1)&&(n.chapter=1,n.taskIndex=5,n.completedTasks=bn.slice(0,5).map(r=>r.id),n.coins=150,n.xp=130,n.challengeUnlocked=!0,n.unlockedCrops=["lettuce","basil","tomato"],n.towers[0].repaired=!0,n.market={built:!0,level:1}),(t.includes("split-flow")||i>=2)&&(n.chapter=2,n.taskIndex=10,n.completedTasks=bn.slice(0,10).map(r=>r.id),n.coins=260,n.xp=330,n.unlockedCrops=["lettuce","basil","tomato","kale","strawberry"],n.towers[1].built=!0,n.towers[1].repaired=!0,n.hydro.systemLessonDone=!0,n.hydro.flowCalibrated=!0,n.towers[2].built=!0,n.towers[2].repaired=!0,n.beds[1].built=!0,n.beds[2].built=!0),t.includes("pro-yard")&&(n.taskIndex=bn.length,n.completedTasks=bn.map(r=>r.id),n.coins=420,n.xp=500,n.campaignComplete=!0,n.challengeUnlocked=!0,n.proPip=!0,n.towers.forEach(r=>{r.built=!0,r.repaired=!0}),n.beds.forEach(r=>{r.built=!0}),n.market={built:!0,level:2}),n.level=Ta(n.xp),n}function ql(n=window.localStorage,e=Date.now()){let t=null;try{t=JSON.parse(n.getItem(co)||"null")}catch{t=null}if(t)return aa(t,e);let i=null;try{i=JSON.parse(n.getItem(uy)||"null")}catch{i=null}return aa(py(Aa(e),i),e)}function my(n,e=window.localStorage,t=Date.now(),i=()=>{}){const r=aa({...n,savedAt:t},t);try{e.setItem(co,JSON.stringify(r)),i(!0)}catch{i(!1)}return r}function gy(n=window.localStorage,e=Date.now()){const t=Aa(e);try{n.setItem(co,JSON.stringify(t))}catch{}return t}function Xn(n){return bn[n.taskIndex]||null}function as(n,e,t,i=null){const r=Le[n];if(e==="bed")return r.bedSeconds*(1-Ea(t,n)*.03);let s=r.towerSeconds;return i?.irrigationUpgraded&&(s*=.88),Math.max(3,s)}function Er(n,e=Date.now()){return Ah(n),n.towers.forEach(t=>{t.queue.length&&t.queue.forEach(i=>{(i.startedAt===null||i.readyAt===null)&&(i.startedAt=e,i.readyAt=e+as(i.crop,"tower",n,t)*1e3)})}),qx(n,e),n.level=Ta(n.xp),n}function vy(n){const e=Object.fromEntries(fi.map(t=>[t,{queued:0,starter:0,garden:0,basket:0,rack:n.rack[t]||0,sold:n.stats.byCropSold[t]||0,fed:n.stats.byCropFed?.[t]||0,accounted:0}]));return n.towers.forEach(t=>t.queue.forEach(i=>{e[i.crop].queued+=1})),n.carry?.kind==="starter"&&(e[n.carry.crop].starter+=1),n.beds.forEach(t=>t.plants.forEach(i=>{e[i.crop].garden+=1})),n.carry?.kind==="produce"&&n.carry.items.forEach(t=>{e[t].basket+=1}),Object.values(e).forEach(t=>{t.accounted=t.queued+t.starter+t.garden+t.basket+t.rack+t.sold+t.fed}),e}const Nh=1024*1024,kh="hydropipFarmBeforeRestore";function pl(n,e=Date.now()){return JSON.stringify({format:"hydropip-farm",backupVersion:1,gameVersion:Is,farm:{...n,savedAt:e}},null,2)}function ml(n,e=Date.now()){if(new TextEncoder().encode(n).length>Nh)throw new Error("Backup exceeds the 1 MB limit.");let t;try{t=JSON.parse(n,(r,s)=>{if(["__proto__","prototype","constructor"].includes(r))throw new Error;if(typeof s=="string"&&/[<>"'&`]/.test(s))throw new Error;if(typeof s=="number"&&!Number.isFinite(s))throw new Error;return s})}catch{throw new Error("This is not a valid HydroPip farm backup.")}if(t?.format!==void 0&&(t.format!=="hydropip-farm"||t.backupVersion!==1))throw new Error("Unsupported backup format.");const i=t?.format==="hydropip-farm"?t.farm:t;if(!i||!Number.isInteger(i.version)||i.version<1||i.version>Xl)throw new Error("Unsupported farm version. Use a backup from this game version or an older one.");if(!Number.isFinite(i.coins)||i.coins<0||!Number.isFinite(i.xp)||i.xp<0||!Number.isInteger(i.taskIndex)||i.taskIndex<0||i.taskIndex>12||!Array.isArray(i.towers)||i.towers.length!==4||!Array.isArray(i.beds)||i.beds.length!==4||!i.seeds||typeof i.seeds!="object"||!i.stats||typeof i.stats!="object")throw new Error("The file is missing required farm data. Your current farm has not changed.");return aa(i,e)}function _y(n,e,t,i=Date.now()){const r=ml(pl(e,i),i);return n.setItem(kh,pl(t,i)),n.setItem(co,JSON.stringify(r)),r}function xy(n,e){const t=u=>document.getElementById(u);let i=null,r=0;function s(u,d,f="application/json"){const p=URL.createObjectURL(new Blob([u],{type:f})),g=document.createElement("a");g.href=p,g.download=d,g.click(),setTimeout(()=>URL.revokeObjectURL(p),1e3)}function o(u){t("importStatus").textContent=u}function a(){r++,i=null,t("restoreConfirmation").hidden=!0,t("importFile").value=""}for(const u of document.querySelectorAll("[data-real-build]"))u.href=iy,u.addEventListener("click",()=>Wn("build_guide_open",{source:u.dataset.realBuild}));t("gameVersion").textContent=Is,t("exportSave").addEventListener("click",()=>s(pl(n()),"hydropip-farm-backup.json")),t("importSave").addEventListener("click",()=>{a(),o(""),t("importFile").click()}),t("importFile").addEventListener("change",async u=>{const d=u.target.files[0];if(!d)return;const f=r;try{if(d.size>Nh)throw new Error("Backup exceeds the 1 MB limit.");const p=await d.text();if(f!==r)return;const g=ml(p);i=p,t("restoreSummary").textContent=`Replace this farm with Chapter ${g.chapter+1}, ${g.coins} coins, and ${g.homestead.claimed.length} completed projects? A recovery copy of this farm will be retained.`,t("restoreConfirmation").hidden=!1,t("cancelRestore").focus()}catch(p){a(),o(p.message)}}),t("cancelRestore").addEventListener("click",()=>{a(),o("Restore cancelled. Your farm is unchanged.")}),t("confirmRestore").addEventListener("click",()=>{if(i){try{const u=_y(localStorage,ml(i),n());e(u)}catch{o("Restore could not be completed. Your pre-restore recovery copy is available below if it was saved. Free browser storage and try again.");return}a(),Wn("farm_restored"),location.reload()}}),t("exportRecovery").addEventListener("click",()=>{try{const u=localStorage.getItem(kh);if(!u)return o("No previous restore recovery copy is available.");s(u,"hydropip-before-restore.json")}catch{o("Browser storage is unavailable.")}});function c(){const u=n();return`HydroPip game report
Version: ${Is}
Chapter: ${u.chapter+1}; task: ${u.taskIndex}
Viewport: ${innerWidth} x ${innerHeight}
Browser: ${navigator.userAgent}

What happened:
${t("reportNotes").value.trim()||"(Please describe what happened.)"}

No saved-farm contents are attached.`}function l(){const u=c();t("reportPreview").textContent=u,t("emailReport").href=`mailto:${Sd}?subject=${encodeURIComponent(`HydroPip game report ${Is}`)}&body=${encodeURIComponent(u)}`}return t("reportProblem").addEventListener("click",()=>{t("feedbackForm").hidden=!t("feedbackForm").hidden,l()}),t("reportNotes").addEventListener("input",l),t("downloadReport").addEventListener("click",()=>s(c(),"hydropip-game-report.txt","text/plain")),t("emailReport").hidden=!Sd,{cancelImport:a}}const Td=new URL(""+new URL("pip-pro-celebration-transparent-IQLOdfWW.webp",import.meta.url).href,import.meta.url).href,Ad=new URL(""+new URL("rhythm-dance-5VSp4liT.webp",import.meta.url).href,import.meta.url).href;function yy({balance:n,reducedMotion:e,mobile:t=()=>!1}){const i=document.createElement("div");i.className="reward-effects",i.setAttribute("aria-hidden","true");const r=document.createElement("section");r.className="reward-notice",r.hidden=!0,r.setAttribute("aria-label","Goal celebration");const s=document.createElement("button");s.type="button",s.className="reward-dismiss",s.textContent="×",s.setAttribute("aria-label","Dismiss celebration");const o=document.createElement("img");o.alt="";const a=document.createElement("div");a.className="reward-copy";const c=document.createElement("span"),l=document.createElement("h3"),u=document.createElement("p");a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.append(c,l,u),r.append(s,o,a),document.body.append(i,r);let d;const f=new Set,p=()=>e()||matchMedia("(prefers-reduced-motion: reduce)").matches;function g(P,U,M,w=!1){const C=P.animate(U,M);f.add(C);const R=()=>{f.delete(C),w&&P.remove()};return C.onfinish=R,C.oncancel=R,C}function _(){clearTimeout(d),r.hidden=!0,o.getAnimations().forEach(P=>P.cancel())}s.addEventListener("click",_),document.addEventListener("keydown",P=>{P.key==="Escape"&&_()});function v(){for(const P of f)P.cancel();f.clear(),i.replaceChildren()}document.addEventListener("visibilitychange",()=>{document.hidden&&(v(),_())}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{p()&&v()});function S(P,U){if(!Number.isFinite(P)||P<=0||document.hidden)return;const M=n.getBoundingClientRect(),w={x:M.left+M.width/2,y:M.top+M.height/2},C=Math.max(70,Math.min(innerWidth-70,U?.x??innerWidth/2)),R=Math.max(110,Math.min(innerHeight-100,U?.y??innerHeight/2)),N=document.createElement("strong");if(N.className="reward-coin-label",N.textContent=`+${P.toLocaleString()} coins`,N.style.left=`${C}px`,N.style.top=`${R}px`,i.querySelectorAll(".reward-coin-label").length>=3&&i.querySelector(".reward-coin-label").remove(),i.append(N),p()){setTimeout(()=>N.remove(),1800);return}g(N,[{opacity:1,translate:"0 0"},{opacity:1,offset:.7},{opacity:0,translate:"0 -36px"}],{duration:1700},!0);const O=Math.min(8,Math.max(3,Math.ceil(P/5)),24-i.querySelectorAll(".reward-coin").length);for(let B=0;B<O;B++){const F=document.createElement("i");F.className="reward-coin",F.textContent="P",F.style.left=`${C}px`,F.style.top=`${R}px`,i.append(F);const j=w.x-C,G=w.y-R;g(F,[{transform:"translate(-50%,-50%) scale(.5)",opacity:0},{transform:`translate(${(B-O/2)*13}px,-40px) scale(1)`,opacity:1,offset:.24},{transform:`translate(${j}px,${G}px) scale(.65)`,opacity:1,offset:.9},{transform:`translate(${j}px,${G}px) scale(.2)`,opacity:0}],{duration:1050,delay:B*60,fill:"backwards",easing:"cubic-bezier(.25,.6,.4,1)"},!0)}n.getAnimations().forEach(B=>B.cancel()),g(n,[{color:"#ffe678",scale:"1"},{color:"#ffe678",scale:"1.2",offset:.55},{scale:"1"}],{duration:550,delay:850})}function b(){if(p()||document.hidden)return;i.querySelectorAll(".reward-confetti").forEach(U=>{U.getAnimations().forEach(M=>M.cancel()),U.remove()});const P=t()||innerWidth<620?22:42;for(let U=0;U<P;U++){const M=document.createElement("i");M.className="reward-confetti",M.style.left=`${8+Math.random()*84}%`,M.style.background=["#ffd454","#f4778b","#66d9db","#bde875","#fff6d9"][U%5],i.append(M),g(M,[{transform:"translateY(-30px) rotate(0deg)",opacity:0},{opacity:1,offset:.12},{opacity:1,offset:.7},{transform:`translate(${(Math.random()-.5)*180}px,${innerHeight*.8}px) rotate(${U%2?540:-540}deg)`,opacity:0}],{duration:2200+Math.random()*600,delay:Math.random()*350,fill:"backwards"},!0)}}function x(P){p()||g(P,[{transform:"rotate(-8deg) translateY(0)"},{transform:"rotate(14deg) translateY(-12px)",offset:.25},{transform:"rotate(-12deg) translateY(-4px)",offset:.5},{transform:"rotate(8deg) translateY(-10px)",offset:.75},{transform:"rotate(-8deg) translateY(0)"}],{duration:1250,iterations:3,easing:"ease-in-out"})}function L({title:P,detail:U,major:M=!1,rhythm:w=!1}){t()&&!M||document.hidden||(_(),r.classList.toggle("is-major",M),c.textContent=M?"Homestead milestone!":"Goal complete!",l.textContent=P,u.textContent=U,o.src=w?Ad:Td,r.hidden=!1,M&&b(),w?x(o):p()||g(o,[{transform:"scale(.8)"},{transform:"scale(1.06)",offset:.7},{transform:"scale(1)"}],{duration:450}),d=setTimeout(_,t()?3500:M?6500:3600))}function A(P,U){_();const M=P.querySelector(".chapter-reward-art img");M.getAnimations().forEach(w=>w.cancel()),M.src=U?Ad:Td,M.alt=U?"Rhythm Pip in his breakdance freeze with a boombox":"Pro Pip cheering with confetti",U&&x(M),b()}return{coins:S,celebrate:L,chapter:A,dismiss:_,clearMotion:v}}function My({urls:n,settings:e,canPlay:t,onSystemMute:i}){const r=new Map,s=new Set,o=new WeakMap;let a=document.hidden;const c=()=>!a&&!document.hidden&&t()&&e().soundEnabled!==!1;function l(m){m.muted=!0,m.pause(),o.delete(m)}function u(){r.forEach(l),s.forEach(l),s.clear(),navigator.mediaSession&&(navigator.mediaSession.playbackState="paused")}function d(m,S,b=!1){if(!c()||S<=0)return l(m);if(m.volume=S,m.muted=!1,!m.paused||o.has(m))return;const x={};o.set(m,x),Promise.resolve(m.play()).then(()=>{if(!c()||m.muted||(b?e().musicVolume:e().effectsVolume)<=0)return l(m);o.get(m)===x&&(o.delete(m),b&&navigator.mediaSession&&(navigator.mediaSession.playbackState="playing"))}).catch(()=>{o.get(m)===x&&(l(m),s.delete(m))})}function f(){if(!(!c()||e().musicVolume<=0))for(const[m,S]of[["music",1],["ambience",.56]]){if(!r.has(m)){const b=new Audio(n[m]);b.loop=!0,r.set(m,b)}d(r.get(m),e().musicVolume*S,!0)}}function p(m){if(!c()||e().effectsVolume<=0||!n[m])return;if(s.size>=12){const b=s.values().next().value;l(b),s.delete(b)}const S=new Audio(n[m]);s.add(S),S.addEventListener("ended",()=>s.delete(S),{once:!0}),S.addEventListener("error",()=>{l(S),s.delete(S)},{once:!0}),d(S,e().effectsVolume)}function g(){if(!c())return u();r.forEach((m,S)=>{e().musicVolume<=0?l(m):m.volume=e().musicVolume*(S==="music"?1:.56)}),s.forEach(m=>{e().effectsVolume<=0?(l(m),s.delete(m)):m.volume=e().effectsVolume})}function _(){a=!0,u()}function v(){a=document.hidden}window.addEventListener("blur",_),window.addEventListener("pagehide",_),document.addEventListener("freeze",_),window.addEventListener("focus",v),window.addEventListener("pageshow",v),document.addEventListener("visibilitychange",()=>document.hidden?_():v());for(const m of["pause","stop"])try{navigator.mediaSession?.setActionHandler(m,()=>{u(),i()})}catch{}return{start:f,effect:p,update:g,stop:u}}const Oh=matchMedia("(max-width: 620px), (pointer: coarse) and (max-width: 1200px), (pointer: coarse) and (max-height: 600px)"),Tt=()=>Oh.matches;document.body.classList.toggle("mobile-ui",Tt());function by({canMove:n,onStart:e,onMove:t,onLayout:i,closePanels:r}){const s=document.getElementById("thumbstick"),o=s.querySelector("i");let a=null;function c(){const d=a;a=null,d!==null&&s.hasPointerCapture(d)&&s.releasePointerCapture(d),o.style.transform="translate(0px, 0px)",s.classList.remove("is-active"),t(0,0)}function l(d){if(d.pointerId!==a)return;if(!n())return c();const f=s.getBoundingClientRect(),p=f.width*.3,g=d.clientX-f.left-f.width/2,_=d.clientY-f.top-f.height/2,v=Math.hypot(g,_),m=v>p?p/v:1;o.style.transform=`translate(${g*m}px, ${_*m}px)`;const S=Math.min(1,Math.max(0,(v/p-.12)/.88));t(v?g/v*S:0,v?_/v*S:0)}s.addEventListener("pointerdown",d=>{a!==null||!n()||!Tt()||(d.preventDefault(),e(),a=d.pointerId,s.setPointerCapture(a),s.classList.add("is-active"),l(d))}),s.addEventListener("pointermove",l);for(const d of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(d,f=>{f.pointerId===a&&c()});s.addEventListener("contextmenu",d=>d.preventDefault());for(const d of document.querySelectorAll(".task-drawer,.interaction-panel,.order-drawer")){let f=null;d.addEventListener("pointerdown",p=>{!Tt()||!p.target.closest("header")||p.target.closest("button")||(f={id:p.pointerId,x:p.clientX,y:p.clientY},d.setPointerCapture(p.pointerId))}),d.addEventListener("pointerup",p=>{if(!f||f.id!==p.pointerId)return;const g=p.clientX-f.x,_=p.clientY-f.y;(innerWidth>620&&innerWidth>innerHeight?g>55&&g>Math.abs(_):_>45&&_>Math.abs(g))&&r(),f=null}),d.addEventListener("pointercancel",()=>{f=null})}function u(){c(),document.body.classList.toggle("mobile-ui",Tt()),i()}return Oh.addEventListener("change",u),window.addEventListener("resize",u),window.visualViewport?.addEventListener("resize",u),{reset:c}}function wy(n,e,t=Date.now()){if(n.chapter<1)return!1;const i=n.towers.filter(o=>o.built&&o.repaired).flatMap(o=>o.queue.filter(a=>a.readyAt>t));if(!i.length)return!1;const r=Math.max(0,Math.min(e,1)),s=n.hydro;return s.lineClogged?(i.forEach(o=>{o.readyAt+=r*500}),!1):(s.lineRunSeconds+=r,s.lineRunSeconds<s.lineClogAfter?!1:(s.lineClogged=!0,!0))}function Sy(n,e=Math.random){return n.hydro.lineClogged?(n.hydro.lineClogged=!1,n.hydro.lineRunSeconds=0,n.hydro.lineClogAfter=240+Math.floor(e()*121),!0):!1}const gc=24,gl=6,Yl=30;function $n(n){return n.hydro.water>0&&n.hydro.batchMixed!==!1}function Cd(n){return $n(n)&&n.hydro.flowCalibrated&&!n.hydro.lineClogged}function Fh(n,e=Date.now()){return $n(n)&&(n.hydro.feedPhase||0)<gl&&n.towers.some(t=>t.built&&t.repaired&&t.queue.some(i=>i.readyAt>e))}function Ey(n,e){const t=n.hydro;if(e==="water"){if(t.water>Yl)return!1;t.water=100,t.batchMixed=!1,t.mixChecked=!1,t.flowChecked=!1,t.feedPhase=0,t.batchNumber=(t.batchNumber||1)+1}else if(e==="mix"){if(t.water<=0||t.mixChecked)return!1;t.batchMixed=!0,t.mixChecked=!0}else if(e==="check"){if(!$n(n)||!t.mixChecked||t.flowChecked||t.lineClogged||!n.towers.some(i=>i.built)||n.towers.some(i=>i.built&&!i.repaired))return!1;t.flowChecked=!0,t.flowCalibrated=!0,t.systemLessonDone=!0}else return!1;return!0}function Ty(n,e,t=Date.now(),i=1){const r=Math.max(0,Math.min(1,e)),s=n.towers.filter(u=>u.built&&u.repaired).flatMap(u=>u.queue.filter(d=>d.readyAt>t-r*1e3));if(!s.length||!r)return;if(!$n(n)){s.forEach(u=>{u.readyAt+=r*1e3,u.startedAt!==null&&(u.startedAt+=r*1e3)});return}const o=n.hydro,a=o.feedPhase||0,c=u=>Math.floor(u/gc)*gl+Math.min(u%gc,gl),l=c(a+r)-c(a);o.feedPhase=(a+r)%gc,o.water=Math.max(0,o.water-l*.3*s.length/4*i)}const Bh=["127.0.0.1","localhost"].includes(location.hostname)&&new URLSearchParams(location.search).has("test"),cs=Bh&&!new URLSearchParams(location.search).has("realtime")?.012:1,fs=Tt(),uo=/HeadlessChrome/i.test(navigator.userAgent),Ay={"seed-pickup":new URL(""+new URL("seed-pickup-CAHmd7zc.wav",import.meta.url).href,import.meta.url).href,plant:new URL(""+new URL("plant-OZHmKUrR.wav",import.meta.url).href,import.meta.url).href,pickup:new URL(""+new URL("pickup-BP6zBWsE.wav",import.meta.url).href,import.meta.url).href,transplant:new URL(""+new URL("transplant-ByuaeTUQ.wav",import.meta.url).href,import.meta.url).href,harvest:new URL(""+new URL("harvest-BPj-n7q9.wav",import.meta.url).href,import.meta.url).href,rack:new URL(""+new URL("rack-BXIXSV4Z.wav",import.meta.url).href,import.meta.url).href,return:new URL(""+new URL("return-B7_saD0o.wav",import.meta.url).href,import.meta.url).href,sale:new URL(""+new URL("sale-DHHLIj-t.wav",import.meta.url).href,import.meta.url).href,repair:new URL(""+new URL("repair-BH8WY1JO.wav",import.meta.url).href,import.meta.url).href,build:new URL(""+new URL("build-DlE-ni3d.wav",import.meta.url).href,import.meta.url).href,"level-up":new URL(""+new URL("level-up-Cr_FX5st.wav",import.meta.url).href,import.meta.url).href,"task-complete":new URL(""+new URL("task-complete-kxblrCmv.wav",import.meta.url).href,import.meta.url).href,"chapter-complete":new URL(""+new URL("chapter-complete-B0bpPvE9.wav",import.meta.url).href,import.meta.url).href,error:new URL(""+new URL("error-BplsGajU.wav",import.meta.url).href,import.meta.url).href,"order-reject":new URL(""+new URL("order-reject-w7AxRbDQ.wav",import.meta.url).href,import.meta.url).href,service:new URL(""+new URL("service-DnymfeYl.wav",import.meta.url).href,import.meta.url).href,music:new URL(""+new URL("garden-loop-_0sf0c8-.wav",import.meta.url).href,import.meta.url).href,ambience:new URL(""+new URL("farm-ambient-BpMfQsJu.wav",import.meta.url).href,import.meta.url).href},ne=n=>document.querySelector(n),Un=ne("#campaignScene");ne("#farmStage");const Ca=ne("#objectiveBar"),pi=ne("#taskDrawer"),Nn=ne("#homesteadDrawer"),qn=ne("#interactionPanel"),sn=ne("#interactionContent"),vn=ne("#orderDrawer"),En=ne("#welcomeOverlay"),Cy=ne("#pauseOverlay"),hn=ne("#chapterOverlay"),Qi=ne("#settingsOverlay"),ho=ne("#resetOverlay"),ps=ne("#actionButton"),gr=ne("#marketChip"),Ys=ne("#campaignMessage"),zh=ne("#carryChip"),Te={coins:ne("#coinValue"),level:ne("#levelValue"),xp:ne("#xpValue"),xpFill:ne("#xpFill"),chapter:ne("#chapterValue"),objectiveChapter:ne("#objectiveChapter"),objectiveTitle:ne("#objectiveTitle"),objectiveProgress:ne("#objectiveProgress"),taskChapter:ne("#taskChapter"),taskTitle:ne("#taskTitle"),taskStory:ne("#taskStory"),primaryTaskTitle:ne("#primaryTaskTitle"),primaryTaskDetail:ne("#primaryTaskDetail"),primaryTaskReward:ne("#primaryTaskReward"),chapterTaskList:ne("#chapterTaskList"),interactionKicker:ne("#interactionKicker"),interactionTitle:ne("#interactionTitle"),interactionSummary:ne("#interactionSummary"),orderList:ne("#orderList"),rackSummary:ne("#rackSummary"),carryKind:ne("#carryKind"),carryContents:ne("#carryContents"),chapterResultKicker:ne("#chapterResultKicker"),chapterResultTitle:ne("#chapterResultTitle"),chapterResultSummary:ne("#chapterResultSummary"),chapterCoins:ne("#chapterCoins"),chapterXp:ne("#chapterXp"),chapterUnlock:ne("#chapterUnlock"),musicValue:ne("#musicValue"),effectsValue:ne("#effectsValue"),marketChipCustomer:ne("#marketChipCustomer"),marketChipDemand:ne("#marketChipDemand")},Qe={vault:new I(-11,0,-5),reservoir:new I(-11,0,2.6),filter:new I(-9,0,4.5),market:new I(11,0,-4.4),rack:new I(8,0,-5),workshop:new I(11,0,5),composter:new I(-7,0,6.9),coop:new I(2,0,6.9),rainTank:new I(-12,0,6.5),"tower-0":new I(-7,0,2.4),"tower-1":new I(-3,0,2.4),"tower-2":new I(1,0,2.4),"tower-3":new I(5,0,2.4),"bed-0":new I(-7,0,-3.2),"bed-1":new I(-3,0,-3.2),"bed-2":new I(1,0,-3.2),"bed-3":new I(5,0,-3.2)};let h=Er(ql());const ai=yy({balance:Te.coins,reducedMotion:()=>h.settings.reducedMotion,mobile:Tt});let Hh=null;const ca={x:0,z:0};let la=!1;const ua=Gx(Nn,Le,vf);let Ut=!1,Nt=null,ti=null,Vn=null,ri=null;const Us=[],vc=new Map,br=Vx;let Rd=performance.now(),Pd=0,Vh=performance.now(),ea=0,Cs=null;const ms=My({urls:Ay,settings:()=>h.settings,canPlay:()=>!Ut&&En.hidden&&Qi.hidden&&hn.hidden&&ho.hidden,onSystemMute:()=>{h.settings.soundEnabled=!1,gs(),je("system_mute")}});let Gn=1,$o=new I(0,0,0),js=[],qi=1,ni=1,vl=null,Gh="",da=uo?"software-test":fs?"mobile":"desktop",_c=performance.now(),xc=0;const un={left:!1,right:!1,up:!1,down:!1},Ns=[],Et=new Px({antialias:!fs&&!uo,powerPreference:"high-performance"});Et.setPixelRatio(Math.min(window.devicePixelRatio||1,uo?1:fs?1.25:1.55));Et.outputColorSpace=Qt;Et.toneMapping=Nd;Et.toneMappingExposure=1.08;Et.shadowMap.enabled=!fs&&!uo;Et.shadowMap.type=Id;Un.appendChild(Et.domElement);const ha=document.createElement("div");ha.className="world-labels";Un.appendChild(ha);const fa=document.createElement("canvas").getContext("2d"),ci=new Il;ci.background=new at(10475727);ci.fog=new Dl(10475727,28,58);const Rt=new pn(35,1,.1,80),yc=new fh,Mc=new de,Zt=new Ve,_t=new Ve,wr=new Ve;ci.add(Zt,_t,wr);const jr=Nx();Zt.add(jr.root);function Gt(n,e={}){return new yr({color:n,...e})}const he={grass:Gt(16777215),grassDark:Gt(5405027),path:Gt(13223602),soil:Gt(8014385),wood:Gt(10123101),woodDark:Gt(5720899),white:Gt(15922411),shell:Gt(14411490),dark:Gt(1055253),lime:Gt(13168479),amber:Gt(16762954),water:new Di({color:6542566,roughness:.18,metalness:.02,transparent:!0,opacity:.78}),coral:Gt(15823190),metal:Gt(11453113),ink:new $t({color:729368,side:dn})},Ry=new zl(15398143,4742736,.95);ci.add(Ry);const Yn=new Ma(16772559,1.45);Yn.position.set(-8,16,9);Yn.castShadow=Et.shadowMap.enabled;Yn.shadow.mapSize.set(1024,1024);Yn.shadow.camera.left=-14;Yn.shadow.camera.right=14;Yn.shadow.camera.top=11;Yn.shadow.camera.bottom=-11;Yn.shadow.bias=-7e-4;ci.add(Yn);const Wh=new Ma(12049640,.35);Wh.position.set(11,8,-8);ci.add(Wh);function jn(n,e){return n.userData.interactiveId=e,n.traverse(t=>{t.userData.interactiveId=e}),n}function ct(n,e,t,i,r=!0){const s=new pe(new Bt(...e),i);return s.position.set(...t),s.castShadow=r,s.receiveShadow=r,n.add(s),s}function Tr(n,e=.045){if(fs)return n;const t=[];return n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i.userData.inkOutline||!i.geometry||/PlaneGeometry|CircleGeometry/.test(i.geometry.type))return;i.geometry.boundingSphere||i.geometry.computeBoundingSphere();const r=i.geometry.boundingSphere?.radius||0,s=Math.max(i.scale.x,i.scale.y,i.scale.z);if(r*s<.36)return;const o=Array.isArray(i.material)?i.material[0]:i.material;o!==he.soil&&(o?.transparent&&o.opacity<.85||t.push(i))}),t.forEach(i=>{const r=new pe(i.geometry,he.ink);r.userData.inkOutline=!0,r.scale.setScalar(1+Math.min(e,.022)),r.castShadow=!1,r.receiveShadow=!1,i.add(r)}),n}function Py(n,e=256){const t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");n(i,e);const r=new eh(t);return r.colorSpace=Qt,r.wrapS=r.wrapT=ta,r}function Ly(){Dy();const n=Py((c,l)=>{c.fillStyle="#78a875",c.fillRect(0,0,l,l);for(let u=0;u<90;u+=1){c.fillStyle=u%2?"rgba(206,219,147,.08)":"rgba(44,86,69,.06)";const d=u*73%l,f=u*47%l;c.fillRect(d,f,12+u%17,3+u%5)}for(let u=0;u<900;u+=1){const d=u%3?"rgba(31,93,52,.18)":"rgba(211,231,149,.12)";c.fillStyle=d,c.fillRect(Math.random()*l,Math.random()*l,1,3+Math.random()*3)}});n.repeat.set(7,5),he.grass.map=n;const e=new pe(new Bt(30,.65,19.5),he.grassDark);e.position.y=-.38,e.receiveShadow=!0,Zt.add(e);const t=new pe(new Ln(29.5,19),he.grass);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,Zt.add(t);const i=new pe(new Ln(27.8,1.45),he.path);i.rotation.x=-Math.PI/2,i.position.set(0,.012,-6.7),i.receiveShadow=!0,Zt.add(i);const r=new pe(new Ln(1.25,12),he.path);r.rotation.x=-Math.PI/2,r.position.set(-9.6,.014,-1),Zt.add(r);const s=[];for(let c=-14.5;c<=14.5;c+=1.5)s.push([c,.28,-9.4],[c,.28,9.4]);for(let c=-8.5;c<=8.5;c+=1.5)s.push([-14.6,.28,c],[14.6,.28,c]);const o=new _r(new Bt(.14,.72,.14),he.woodDark,s.length),a=new kt;s.forEach((c,l)=>{a.position.set(...c),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}),o.castShadow=!0,Zt.add(o),[-14.6,14.6].forEach(c=>ct(Zt,[.07,.12,19],[c,.37,0],he.wood)),[-9.4,9.4].forEach(c=>ct(Zt,[29.3,.12,.07],[0,.37,c],he.wood));for(let c=-13.7;c<=13.7;c+=1.5){const l=new pe(new Nl(.48+Math.random()*.1,1),he.grassDark);l.position.set(c,.3,8.85+Math.sin(c)*.08),l.castShadow=!0,Zt.add(l)}for(let c=0;c<10;c+=1){const l=new pe(new gn(.07,8,6),c%2?he.amber:he.coral);l.position.set(-12.7+c*2.55,.13,8.1+Math.sin(c)*.25),l.castShadow=!0,Zt.add(l)}Iy()}function Dy(){const n=new Ln(90,90,40,40);n.rotateX(-Math.PI/2);const e=n.attributes.position;for(let d=0;d<e.count;d+=1){const f=e.getX(d),p=e.getZ(d),g=Math.max(Math.abs(f)-27,Math.abs(p)-18,0),v=Dt.smoothstep(Math.abs(p+12.2),1.8,5)*Math.min(1,g/14)*(1.3+Math.sin(f*.15)*Math.cos(p*.12)*1.2);e.setY(d,-.16+v)}n.computeVertexNormals();const t=new pe(n,Gt(8562557));t.name="surrounding meadow",t.receiveShadow=!0,Zt.add(t);const i=new pe(new Ln(80,2.8),he.path);i.rotation.x=-Math.PI/2,i.position.set(0,-.1,-12.2),i.receiveShadow=!0,Zt.add(i);const r=new pe(new Ln(1.5,7),he.path);r.rotation.x=-Math.PI/2,r.position.set(16.2,-.09,-7.5),Zt.add(r);const s=[[-15,-4],[-17,2],[-16,8],[-13,-12],[-8,-14],[-2,-15],[4,-14],[10,-13],[16,-11],[18,-5],[18,2],[17,8],[22,-16],[-22,-18]],o=new _r(new mt(.12,.19,2.3,7),he.woodDark,s.length),a=new _r(new ro(1,1),Gt(6590831),s.length*3),c=new kt;s.forEach(([d,f],p)=>{const g=.85+p%4*.14;d*=1.2,f*=1.2,c.position.set(d,1,f),c.scale.set(1,1,1),c.updateMatrix(),o.setMatrixAt(p,c.matrix);for(let _=0;_<3;_+=1)c.position.set(d+(_-1)*.75,2.6+(_===1?.7:0),f+(_===1?-.3:.2)),c.scale.set(1.15*g,g,1.05*g),c.updateMatrix(),a.setMatrixAt(p*3+_,c.matrix),a.setColorAt(p*3+_,new at([12702093,10208683,11323019][(p+_)%3]))}),o.castShadow=a.castShadow=!0,Zt.add(o,a);const l=new Ve;l.name="neighboring farm shed",l.position.set(-19,-.05,-18),ct(l,[2.6,1.8,2.3],[0,.9,0],Gt(14014670));const u=new pe(new di(2.05,1.1,4),Gt(11428701));u.rotation.y=Math.PI/4,u.position.y=2.28,l.add(u),ct(l,[.65,1.23,.06],[-.42,.62,1.18],he.woodDark),ct(l,[.62,.58,.07],[.61,1.1,1.18],he.shell),ct(l,[.48,.44,.08],[.61,1.1,1.2],Gt(6790308)),Zt.add(l)}function Iy(){const n=new Ve;n.position.set(11,0,12);const e=new Di({color:12379356,transparent:!0,opacity:.42,roughness:.15,side:mn});ct(n,[4.6,.12,2.5],[0,.05,0],he.path),ct(n,[4.4,2.2,.08],[0,1.1,-1.12],e,!1);for(let r=-2;r<=2;r+=1)ct(n,[.05,2.4,2.3],[r*1.05,1.15,0],he.metal);const t=ct(n,[2.7,.08,2.35],[-1.05,2.35,0],e,!1);t.rotation.z=-.38;const i=ct(n,[2.7,.08,2.35],[1.05,2.35,0],e,!1);i.rotation.z=.38,Zt.add(n)}function mi(n,e="#f4bd4d"){fa.font="700 15px system-ui";const t=Math.ceil(fa.measureText(n).width)+24,i=new kt,r=document.createElement("button");r.type="button",r.className="world-label",r.textContent=n,r.hidden=!0,r.style.width=`${t}px`,r.style.borderColor=e;for(const s of["pointerdown","pointerup"])r.addEventListener(s,o=>o.stopPropagation());return r.addEventListener("click",s=>{s.stopPropagation(),!(Ut||!En.hidden||!hn.hidden)&&(Ar(),i.userData.interactiveId&&Jt(i.userData.interactiveId,Tt()))}),i.labelElement=r,i.userData.worldLabel={text:n,width:t,height:30,fontSize:15},i}function $h(n,e,t){const i=new Ve;for(const s of[-.65,.65])for(const o of[-.5,.5])ct(i,[.09,.48,.09],[s,.24,o],he.woodDark),ct(i,[.12,.07,.12],[s,.45,o],he.amber);for(const s of[-.5,.5])ct(i,[1.3,.025,.025],[0,.28,s],he.straw||he.wood);for(const s of[-.65,.65])ct(i,[.025,.025,1],[s,.28,0],he.wood);ct(i,[.12,.85,.1],[0,.425,0],he.woodDark),ct(i,[.72,.32,.07],[0,.75,0],he.wood);const r=mi(e,"#f4bd4d");return r.position.y=1.2,i.add(r),i.position.copy(t),Wt(i),Tr(i,.04),jn(i,n)}function Uy(n){const e=Qe[n];if(!e||Nt===n)return null;const t=new Ve;t.userData.guideMarker=!0,t.userData.baseY=e.y;const i=new pe(new Li(1.08,36),new $t({color:16039245,transparent:!0,opacity:.16,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.012;const r=new pe(new ii(.92,.045,8,44),new Di({color:16039245,emissive:5057797,emissiveIntensity:.26,roughness:.38,transparent:!0,opacity:.92,depthWrite:!1}));r.rotation.x=Math.PI/2;const s=new pe(new di(.18,.36,3),he.amber);return s.rotation.z=Math.PI,s.position.y=.34,t.add(i,r,s),t.position.copy(e),t}function Ny(n,e){const t=new Ve,i=new pe(new Li(.98,24),new $t({color:1194533,transparent:!0,opacity:.27,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.018,t.add(i);const r=new pe(new mt(.75,.85,.22,24),he.shell);r.position.y=.14,t.add(r);const s=new pe(new mt(.13,.16,2.5,12),he.metal);s.position.set(0,1.46,-.15),t.add(s);const o=new pe(new mt(.065,.065,2.4,8),he.water);o.position.set(0,1.42,-.42),t.add(o);const a=[];for(let u=0;u<4;u++){const d=new Ve;d.name=`stacked planter ${u+1}`;const f=u%2?.16:-.16,p=.52+u*.61,g=.29-u*.18;d.position.set(f,p,g);const _=e.repaired?he.white:he.metal,v=new pe(new mt(.64,.4,.35,24,1,!0),_);d.add(v);const m=new pe(new mt(.4,.4,.05,20),he.shell);m.position.y=-.17,d.add(m);const S=new pe(new ii(.64,.055,7,24),he.shell);S.rotation.x=Math.PI/2,S.position.y=.18,d.add(S);const b=new pe(new Li(.585,24),he.soil);b.rotation.x=-Math.PI/2,b.position.y=.15,d.add(b),Wt(d),t.add(d);for(let x=0;x<3;x++){const L=x*Math.PI*2/3+.35;a.push({x:f+Math.cos(L)*.27,y:p+.19,z:g+Math.sin(L)*.27,turn:u*1.4+x})}}for(const u of t.children.filter(d=>d.name.startsWith("stacked planter"))){u.updateMatrix();for(const d of[...u.children]){const f=new pe(d.geometry.clone().applyMatrix4(u.matrix),d.material);t.add(f),u.remove(d),d.geometry.dispose()}}Wt(t);const c=e.queue.filter(u=>u.readyAt!==null&&u.readyAt<=Be()),l=mi(e.repaired?c.length?`${c.length} layer${c.length>1?"s":""} ready`:`Tower ${n+1}`:"REPAIR PLANTER",c.length?"#b9df63":"#69cbd3");l.position.set(0,3.95,0),t.add(l);for(const u of e.queue){const d=u.readyAt?Dt.clamp((Be()-u.startedAt)/Math.max(1,u.readyAt-u.startedAt),0,1):0,f=Xh(u.crop,d,a.slice(u.layer*3,u.layer*3+3),u.crop==="tomato"?.85:1.2);f.userData.growthTiming={startedAt:u.startedAt,readyAt:u.readyAt,size:u.crop==="tomato"?.85:1.2},f.userData.towerIndex=n,f.userData.jobId=u.id,f.userData.layer=u.layer,t.add(f)}return t.position.copy(Qe[`tower-${n}`]),Tr(t,.036),jn(t,`tower-${n}`)}function ky(n,e=.28,t=.11,i=!1){const r=new ss;r.moveTo(0,0),i?[[.15,.65],[.28,1],[.43,.7],[.58,.96],[.75,.6],[1,0],[.75,-.6],[.58,-.96],[.43,-.7],[.28,-1],[.15,-.65]].forEach(([a,c])=>r.lineTo(a*e,c*t)):(r.bezierCurveTo(e*.2,t,e*.72,t,e,0),r.bezierCurveTo(e*.72,-t,e*.2,-t,0,0));const s=new Xs(r,{depth:.018,bevelEnabled:!1,curveSegments:5});s.rotateX(-Math.PI/2);const o=new pe(s,n);return o.castShadow=!0,o}function fo(n,e=1){const t=Le[n],i=new Ve,r=t.family==="fruit",s=Gt(r?4685648:n==="lettuce"?6399295:t.color,{side:mn}),o=Gt(r?8894309:t.accent,{side:mn}),a=["lettuce","strawberry"].includes(n),c=n==="tomato"?.8:a?.16:.52,l=new pe(new mt(.025,.05,c,7),he.grassDark);l.position.y=c/2,i.add(l);const u=n==="lettuce"||n==="kale"?12:10;for(let f=0;f<u;f+=1){const p=f/u*Math.PI*2,g=ky(f%3?s:o,n==="lettuce"?.46:n==="tomato"?.34:.36,n==="lettuce"?.25:n==="basil"?.15:.14,["kale","tomato"].includes(n));g.rotation.set(0,-p,n==="kale"?.7:.18+f%3*.09),g.position.set(0,a?.08+f%3*.045:.16+f%3*.14,0),i.add(g)}if(n==="tomato"){const f=new pe(new mt(.018,.025,1.05,6),he.wood);f.position.set(-.1,.52,-.05),i.add(f);for(let p=0;p<3;p+=1){const g=new pe(new gn(.085,12,8),he.coral);g.position.set(p%2?-.2:.2,.3+p*.16,.15),g.visible=e>=.72,g.userData.ripeningFruit=!0,i.add(g)}}if(n==="strawberry")for(let f=0;f<3;f+=1){const p=new pe(new di(.075,.14,10),he.coral);p.rotation.z=Math.PI,p.position.set(Math.cos(f*2.1)*.21,.18,Math.sin(f*2.1)*.21),p.visible=e>=.72,p.userData.ripeningFruit=!0,i.add(p)}const d=e>=1?1:e>=.66?.78:e>=.33?.52:.28;return i.scale.setScalar(d),i.userData.crop=n,i.userData.campaignCrop=!0,i.userData.swayPhase=fi.indexOf(n)*.8+Math.random()*.4,i.userData.growthStage=e>=1?3:e>=.66?2:e>=.33?1:0,i}function Xh(n,e,t,i){const r=fo(n,1),s=new Set(r.children.filter(c=>c.geometry?.type==="ExtrudeGeometry").map(c=>c.material)),o=r.children.filter(c=>c.userData.ripeningFruit);if(o.forEach(c=>r.remove(c)),Wt(r),o.length){const c=new Ve;o.forEach(l=>c.add(l)),Wt(c),[...c.children].forEach(l=>{l.userData.ripeningFruit=!0,l.userData.fruitPerInstance=o.length,r.add(l)})}const a=new Ve;return a.userData.crop=n,a.userData.plantingPlacements=t,a.userData.foliageMaterials=[],r.children.forEach(c=>{if(!c.isMesh)return;c.updateMatrix();const l=c.material.clone(),u=new _r(c.geometry.clone(),l,t.length);u.castShadow=!0,u.receiveShadow=!0,u.userData.plantPartMatrix=c.matrix.clone(),u.userData.ripeningFruit=!!c.userData.ripeningFruit,u.userData.fruitPerInstance=c.userData.fruitPerInstance||1,s.has(c.material)&&a.userData.foliageMaterials.push(l),a.add(u)}),Ci(r),qh(a,e,i),a}function qh(n,e,t){const i=e>=1?3:e>=.66?2:e>=.33?1:0,r=[.28,.52,.78,1][i]*t,s=e>=.72;if(n.userData.growthScale===r&&n.userData.ripe===s)return;n.userData.growthStage=i,n.userData.growthScale=r,n.userData.ripe=s;const o=new kt;n.children.forEach(a=>{a.isInstancedMesh&&(n.userData.plantingPlacements.forEach((c,l)=>{o.position.set(c.x,c.y,c.z),o.rotation.set(0,c.turn||0,0),o.scale.setScalar(r),o.updateMatrix(),a.setMatrixAt(l,o.matrix.clone().multiply(a.userData.plantPartMatrix))}),a.visible=!a.userData.ripeningFruit||s,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere())})}function Oy(){const n=Be();_t.traverse(e=>{const t=e.userData.growthTiming;if(!t)return;if(e.userData.towerIndex!==void 0){const s=h.towers[e.userData.towerIndex].queue.find(o=>o.id===e.userData.jobId);s&&(t.readyAt=s.readyAt,t.startedAt=s.startedAt)}const i=Dt.clamp((n-t.startedAt)/Math.max(1,t.readyAt-t.startedAt),0,1);if(e.userData.plantingPlacements){qh(e,i,t.size);return}const r=i>=1?3:i>=.66?2:i>=.33?1:0;e.userData.growthStage=r,e.scale.setScalar([.28,.52,.78,1][r]*t.size),e.children.forEach(s=>{s.userData.ripeningFruit&&(s.visible=i>=.72)})}),Ch(_t)}function Fy(n,e){const t=new Ve,i=new pe(new Ln(2.7,1.6),new $t({color:1587492,transparent:!0,opacity:.22,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.015,t.add(i),ct(t,[2.45,.38,1.35],[0,.2,0],he.wood),ct(t,[2.08,.23,1.02],[0,.42,0],he.soil);for(let o=-1;o<=1;o+=1)ct(t,[1.85,.035,.045],[0,.56,o*.27],he.woodDark,!1);const r=e.capacity<=2?[[-.53,0],[.53,0]]:[[-.53,-.26],[.53,-.26],[-.53,.26],[.53,.26]];e.plants.forEach((o,a)=>{const c=Dt.clamp((Date.now()-o.plantedAt)/Math.max(1,o.readyAt-o.plantedAt),0,1),l=e.capacity<=2?1.08:.94,u=e.capacity<=2?[{x:-.17,y:0,z:-.2},{x:.17,y:0,z:.2,turn:1.1},{x:.15,y:0,z:-.13,turn:2.4}]:[{x:-.18,y:0,z:0},{x:.18,y:0,z:0,turn:1.4}],d=Xh(o.crop,c,u,l);d.userData.growthTiming={startedAt:o.plantedAt,readyAt:o.readyAt,size:l},d.position.set(r[a][0],.54,r[a][1]),t.add(d)});const s=mi(`Bed ${n+1}: ${e.plants.length}/${e.capacity}`,"#b9df63");return s.position.set(0,e.plants.length?1.95:1.05,0),s.visible=Nt===`bed-${n}`,t.add(s),t.position.copy(Qe[`bed-${n}`]),Tr(t,.034),jn(t,`bed-${n}`)}function By(){const n=new Ve;ct(n,[2.25,1.15,1.45],[0,.58,0],he.white),ct(n,[2.38,.18,1.58],[0,1.22,0],he.lime);const e=new pe(new mt(.22,.28,.68,14),he.metal);e.rotation.z=Math.PI/2,e.position.set(1.35,.78,0),n.add(e);const t=Vl({skin:"#c99069",hair:"#e5d8b7",color:"#b9547f",accessory:"glasses"});t.name="Bram the seed merchant",t.updateMatrixWorld(!0);const i=[];t.traverse(a=>{a.isMesh&&i.push(a)}),i.forEach(a=>t.attach(a)),t.userData.rig=null;const r=new pe(new mt(.48,.48,.06,20),he.lime);r.position.y=2,t.add(r);const s=new pe(new di(.27,.48,16),he.lime);s.position.set(.06,2.22,0),s.rotation.z=-.2,t.add(s),Wt(t),t.position.set(2.2,0,.1),t.rotation.y=.35,n.add(t),ct(n,[.9,.55,.62],[1.9,.38,.85],he.wood);for(const a of[1.55,2.25]){const c=new pe(new mt(.19,.19,.08,12),he.metal);c.rotation.z=Math.PI/2,c.position.set(a,.2,.85),n.add(c)}for(let a=0;a<3;a++)ct(n,[.2,.28,.1],[1.62+a*.26,.79,.85],a%2?he.coral:he.lime);const o=mi("SEED VAULT","#b9df63");return o.position.set(0,1.72,0),n.add(o),n.position.copy(Qe.vault),Tr(n,.038),jn(n,"vault")}function zy(){const n=ty(h.hydro.water),e=mi("RESERVOIR","#69cbd3");return e.name="reservoir label",e.position.set(0,1.95,0),n.add(e),n.position.copy(Qe.reservoir),jn(n,"reservoir")}function Hy(){const n=_t.getObjectByName("water reservoir");Rh(n,h.hydro.water),n?.userData.reservoir&&(n.userData.reservoir.mixingStream.visible=$n(h));const e=n?.getObjectByName("reservoir label");if(!e)return;const t=n.userData.reservoir.status,i=t==="empty"?"WATER EMPTY":t==="low"?"WATER LOW":"RESERVOIR";if(e.userData.worldLabel.text===i)return;fa.font="700 15px system-ui";const r=Math.ceil(fa.measureText(i).width)+24;Object.assign(e.userData.worldLabel,{text:i,width:r}),e.labelElement.textContent=i,e.labelElement.style.width=`${r}px`,e.labelElement.style.borderColor=t==="ready"?"#69cbd3":"#f4bd4d"}function Vy(){const n=new Ve;n.name="reservoir tower feedline";const e=new Di({color:4352882,roughness:.7}),t=[],i=Math.max(0,...h.towers.map((u,d)=>u.built?d:0));function r(u,d){const f=new I(...u),p=new I(...d),g=new pe(new mt(.075,.075,f.distanceTo(p),8),e);g.position.copy(f).add(p).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new I(0,1,0),p.clone().sub(f).normalize()),n.add(g),t.push({start:f,end:p});const _=new pe(new gn(.1,8,6),he.metal);_.position.copy(p),n.add(_)}r([-10.65,.24,1.74],[-10.3,.24,2.6]),r([-10.3,.24,2.6],[-10.3,.24,4.5]),r([-10.3,.24,4.5],[Qe[`tower-${i}`].x,.24,4.5]),h.towers.forEach((u,d)=>{if(!u.built)return;const f=Qe[`tower-${d}`];r([f.x,.24,4.5],[f.x,.24,f.z+.85]),r([f.x,.24,f.z+.85],[f.x,2.8,f.z+.85]),r([f.x,2.8,f.z+.85],[f.x,2.8,f.z])}),Wt(n);const s=new Ve;s.position.copy(Qe.filter);const o=new pe(new mt(.26,.26,.75,16),he.white);o.rotation.z=Math.PI/2,o.position.y=.28,s.add(o);const a=new pe(new ii(.22,.045,6,16),h.hydro.lineClogged?he.coral:he.water);a.rotation.x=Math.PI/2,a.position.y=.65,s.add(a),ct(s,[.055,.28,.055],[0,.48,0],he.metal);const c=mi(h.hydro.lineClogged?"FILTER CLOGGED":"FEED FILTER",h.hydro.lineClogged?"#f4bd4d":"#69cbd3");c.position.y=1.3,s.add(c),n.add(jn(s,"filter"));const l=new _r(new gn(.085,6,5),new $t({color:h.hydro.lineClogged?16039245:10347999}),t.length);return l.userData.flowSegments=t,n.add(l),n}function Ra(){const n=[];return h.towers.forEach((e,t)=>{e.built&&(!e.repaired||Mr(e,Be()))&&n.push(`tower-${t}`)}),h.beds.forEach((e,t)=>{e.built&&e.plants.some(i=>i.readyAt<=Be())&&n.push(`bed-${t}`)}),h.hydro.lineClogged&&n.push("filter"),(h.hydro.water<=Yl||!h.hydro.batchMixed)&&n.push("reservoir"),h.farm.owned.includes("coop")&&h.farm.eggsReady&&n.push("coop"),h.farm.owned.includes("composter")&&h.farm.compost&&n.push("composter"),n}function Gy(){const n=Ra();if(!n.length)return new Ve;const e=new xa(.92,1.02,24);e.rotateX(-Math.PI/2);const t=new $t({transparent:!0,opacity:.65,depthWrite:!1}),i=new _r(e,t,n.length);i.userData.attentionMarkers=!0;const r=new kt;return n.forEach((s,o)=>{r.position.copy(Qe[s]),r.position.y=.035,r.scale.setScalar(s==="filter"?.6:1),r.updateMatrix(),i.setMatrixAt(o,r.matrix),i.setColorAt(o,new at(["filter","reservoir"].includes(s)?16039245:12181347))}),i}function Wy(){if(!h.market.built)return $h("market","BUILD MARKET",Qe.market);const n=new Ve;ct(n,[3.1,.55,1.75],[0,.3,0],he.wood),ct(n,[3.35,.2,1.4],[0,2.15,-.35],he.coral);for(const i of[-1.25,-.42,.42,1.25])ct(n,[.28,.012,1.41],[i,2.256,-.35],he.white),ct(n,[.28,.15,.035],[i,2.1,.37],he.white);[-1.35,1.35].forEach(i=>ct(n,[.11,2.1,.11],[i,1.1,0],he.woodDark));const e=ct(n,[3,1.25,.16],[0,1.25,-.78],he.white);e.receiveShadow=!0;const t=mi("PIP'S VEG STAND","#f4bd4d");return t.position.set(0,2.58,0),n.add(t),fi.slice(0,3+h.market.level).forEach((i,r)=>{const s=ct(n,[.48,.28,.56],[-1+r*.5,.72,.48],he.woodDark);s.rotation.y=.07*r;const o=new pe(new gn(.11,10,7),new Di({color:Le[i].color,roughness:.7}));o.position.set(-1+r*.5,.94,.48),n.add(o)}),n.position.copy(Qe.market),Tr(n,.034),jn(n,"market")}function $y(){const n=new Ve;ct(n,[1.55,.18,.75],[0,.85,0],he.wood),[-.62,.62].forEach(i=>ct(n,[.12,1.4,.12],[i,.7,0],he.woodDark));const e=Object.values(h.rack).reduce((i,r)=>i+r,0);for(let i=0;i<Math.min(e,6);i+=1){const r=fi.find(o=>h.rack[o]>i/2)||"lettuce",s=fo(r,1);s.scale.setScalar(.32),s.position.set(-.5+i%3*.5,1,i>2?.15:-.15),n.add(s)}const t=mi("HARVEST RACK","#b9df63");return t.position.set(0,1.65,0),t.visible=Nt==="rack"||e>0,n.add(t),n.position.copy(Qe.rack),Tr(n,.034),jn(n,"rack")}function Xy(){const n=new Ve;ct(n,[2.5,1.7,1.9],[0,.86,0],he.wood);const e=new pe(new di(1.8,.75,4),he.amber);e.rotation.y=Math.PI/4,e.position.y=2.08,e.castShadow=!0,n.add(e),ct(n,[.72,1.1,.12],[0,.56,-.99],he.water);const t=mi("FARM SHOP","#f4bd4d");return t.position.set(0,2.72,0),n.add(t),n.position.copy(Qe.workshop),Tr(n,.034),jn(n,"workshop")}function Yh(n,e){const t=Math.max(0,br.findIndex(o=>o.name===n.customer)),i=Vl(br[t],t);i.position.copy(pa(e));const r=new pe(new Li(.4,20),new $t({color:1586468,transparent:!0,opacity:.2,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.025,i.add(r);const s=new pe(new xa(.43,.49,24),new $t({color:16039245,side:mn}));return s.rotation.x=-Math.PI/2,s.position.y=.035,s.visible=h.selectedOrderId===n.id,i.add(s),i.userData.customerIndex=e,i.userData.customerProfile=t,i.userData.orderId=n.id,i.userData.arrivedAt=n.createdAt,i.userData.destination=i.position.clone(),jn(i,"market")}function pa(n){return new I(Qe.market.x-1+n*1.3,0,Qe.market.z+2.8)}function Ld(n){if(vc.has(n.name))return vc.get(n.name);const e=new Il;e.background=new at(n.color).multiplyScalar(.45),e.add(new zl(16775398,5469804,2.6));const t=new Ma(16773847,2);t.position.set(-2,4,4),e.add(t);const i=Vl(n,br.indexOf(n));e.add(i);const r=new pn(32,1,.1,12);r.position.set(.45,1.9,2.8),r.lookAt(0,1.48,0);const s=128,o=new Pi(s,s);o.texture.colorSpace=Qt;const a=Et.getRenderTarget();Et.setRenderTarget(o),Et.render(e,r);const c=new Uint8Array(s*s*4);Et.readRenderTargetPixels(o,0,0,s,s,c),Et.setRenderTarget(a);const l=document.createElement("canvas");l.width=l.height=s;const u=l.getContext("2d"),d=u.createImageData(s,s);for(let p=0;p<s;p++)d.data.set(c.subarray(p*s*4,(p+1)*s*4),(s-p-1)*s*4);u.putImageData(d,0,0);const f=l.toDataURL("image/png");return vc.set(n.name,f),o.dispose(),Ci(i),f}function qy(n,e){const t=Yh(n,e);t.traverse(r=>{delete r.userData.interactiveId}),wr.add(t);const i=fo(n.crop,1);i.scale.setScalar(.32),wr.add(i),Us.push({customer:t,produce:i,age:0,start:new I(Se.x,1.1,Se.z),end:t.position.clone().add(new I(0,1,.3))})}function jh(){const n=yh(h.proPip);return n.position.set(-5.35,0,-1.1),n}let wt=jh();const Se={x:wt.position.x,z:wt.position.z,target:null,speed:h.proPip?6.25:5.25,direction:"south",action:"idle",actionTime:0,pendingFacing:0,gaitPhase:0};ci.add(wt);function Yy(){if(h.cosmetics.active.includes("sunny-planters"))for(let n=0;n<5;n+=1){const e=new pe(new mt(.2,.25,.3,12),he.coral);e.position.set(-8.6+n*.55,.15,-5.35);const t=new pe(new gn(.11,10,7),he.amber);t.position.set(e.position.x,.48,e.position.z),_t.add(e,t)}if(h.cosmetics.active.includes("blue-path"))for(let n=0;n<3;n+=1){const e=new Ve,t=new pe(new mt(.28,.21,.38,12),he.water);t.position.y=.2;const i=fo("basil",1);i.scale.setScalar(.35),i.position.y=.4,e.add(t,i),e.position.set(-1.5+n*.8,0,-5.8),_t.add(e)}if(h.cosmetics.active.includes("festival-bunting")&&h.market.built)for(let n=0;n<9;n+=1){const e=new pe(new di(.12,.28,3),n%2?he.amber:he.coral);e.rotation.z=Math.PI,e.position.set(Qe.market.x-1.35+n*.35,2.32+Math.sin(n*.8)*.1,Qe.market.z),_t.add(e)}}function po(){if(ha.replaceChildren(),Ci(_t),_t.clear(),_t.add(By(),zy(),Wy(),Xy()),Ht(h).festival){const e=new Ve;e.name="harvest festival garden display",e.position.set(-5,0,11.2);for(const t of[-1.3,1.3]){ct(e,[.18,2.7,.18],[t,1.25,0],he.wood),ct(e,[.7,.42,.7],[t,.12,0],he.white);for(let i=0;i<5;i++){const r=new pe(new ro(.22,1),he.lime);r.position.set(t+Math.sin(i*2)*.25,.4+i*.1,Math.cos(i*2)*.22),e.add(r)}}ct(e,[3,.2,.3],[0,2.55,0],he.wood);for(let t=0;t<7;t++){const i=new pe(new di(.16,.36,3),t%2?he.coral:he.amber);i.rotation.z=Math.PI,i.position.set(-1.1+t*.37,2.25,0),e.add(i)}Wt(e),_t.add(e)}h.farm.owned.forEach(e=>{const t=Qx(e,h.farm);t.position.copy(Qe[e]);{const i=mi(e==="rainTank"?"RAIN STORAGE":e==="coop"?h.farm.eggsReady?"EGGS READY":"CHICKEN COOP":h.farm.compost?"COMPOST READY":"COMPOSTER","#b9df63");i.position.y=2,t.add(i),jn(t,e)}_t.add(t)}),_t.add($y()),_t.add(Vy(),Gy()),h.towers.forEach((e,t)=>{const i=e.built?Ny(t,e):$h(`tower-${t}`,`BUILD T${t+1}`,Qe[`tower-${t}`]);e.built&&jy(t)&&Jy(i,.38),_t.add(i)}),h.beds.forEach((e,t)=>{e.built&&_t.add(Fy(t,e))}),h.market.built&&h.orders.forEach((e,t)=>{e.status==="waiting"&&_t.add(Yh(e,t))}),ey(_t);const n=Uy(li());n&&_t.add(n),Yy(),js=[],_t.traverse(e=>{e.userData.worldLabel&&(js.push(e),ha.appendChild(e.labelElement))}),Ky(),Gh=Jh()}function jy(n){if(!Tt())return!1;const e=Qe[`tower-${n}`],t=e.x-Se.x,i=e.z-Se.z,r=Math.hypot(7.7,14.3),s=(t*7.7+i*14.3)/r,o=Math.abs(t*14.3-i*7.7)/r;return Math.hypot(t,i)<3.4&&s>0&&o<1.1}function Jy(n,e){n.traverse(t=>{if(t.userData.worldLabel)return;const i=r=>{const s=r.clone();return s.transparent=!0,s.opacity=Math.min(r.opacity??1,e),s.depthWrite=!1,s};Array.isArray(t.material)?t.material=t.material.map(i):t.material&&(t.material=i(t.material))})}function Ci(n){const e=new Set(Object.values(he)),t=new Set,i=new Set,r=new Set;n.traverse(s=>{s.geometry&&!t.has(s.geometry)&&(t.add(s.geometry),s.geometry.dispose()),(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{!a||e.has(a)||r.has(a)||(r.add(a),a.map&&!i.has(a.map)&&(i.add(a.map),a.map.dispose()),a.dispose())})})}function Jh(){const n=Be();return JSON.stringify({towers:h.towers.map(e=>[e.built,e.repaired,e.queue.map(t=>[t.id,t.layer,t.crop,t.readyAt<=n])]),beds:h.beds.map(e=>[e.built,e.capacity,e.plants.length,e.plants.filter(t=>t.readyAt<=n).length]),market:[h.market.built,h.market.level,h.orders.map(e=>`${e.id}:${e.status}`)],rack:h.rack,lineClogged:h.hydro.lineClogged,farm:h.farm,festival:Ht(h).festival,attention:Ra(),carry:h.carry,cosmetics:h.cosmetics.active,pro:h.proPip,selected:Nt,guide:li()})}function Ky(){const n=wt.getObjectByName("campaign carry");if(n&&(Ci(n),wt.remove(n)),!h.carry)return;const e=new Ve;if(e.name="campaign carry",h.carry.kind==="starter"){const t=new pe(new mt(.13,.17,.22,12),he.soil),i=fo(h.carry.crop,.82);i.scale.multiplyScalar(.48),i.position.y=.12,e.add(t,i)}else{const t=new pe(new mt(.28,.22,.2,12),he.wood);e.add(t),h.carry.items.slice(0,5).forEach((i,r)=>{const s=new pe(new gn(.095,10,7),new Di({color:Le[i].color,roughness:.7}));s.position.set(-.15+r%3*.15,.15+Math.floor(r/3)*.1,0),e.add(s)})}e.position.set(0,.72,.58),e.scale.setScalar(.95),wt.add(e)}function Be(){return Date.now()}function je(n="autosave"){let e=!1;try{h=my(h,window.localStorage,Date.now(),t=>{e=t})}catch{}ne("#saveWarning").hidden=e,ne("#saveStatus").textContent=e?"Progress saved in this browser":"Progress is only in memory. Retry saving or export before closing.",Vh=performance.now(),n!=="autosave"&&Wn("campaign_save",{reason:n,chapter:h.chapter+1,task:Xn(h)?.id||"complete"})}function Ge(n,e=3500){Ys.classList.add("is-active"),Tt()&&(e=Math.min(e,3200)),Ys.textContent=n,ea=performance.now()+e}function Ki(n){ms.effect(n)}function Ar(){ms.start()}function gs(){ms.update();const n=h.settings.soundEnabled!==!1,e=ne("#soundButton");e.setAttribute("aria-label",n?"Mute sound":"Enable sound"),e.setAttribute("title",n?"Mute sound":"Enable sound"),e.setAttribute("aria-pressed",String(!n)),e.classList.toggle("is-muted",!n)}function Ot(n,e=n){Se.action=n,Se.actionTime=h.settings.reducedMotion?.18:.72,Ki(e)}function Kh(n){const e=new Ve,t=new pe(new Bt(.34,.46,.08),he.white),i=new pe(new Li(.1,16),new Di({color:Le[n].color,roughness:.65}));i.position.z=.046,e.add(t,i),e.position.copy(Qe.vault).add(new I(2.5,1.1,.35)),wr.add(e),Ns.push({kind:"packet",mesh:e,start:e.position.clone(),end:Qe.vault.clone().add(new I(1.25,.95,0)),age:0,duration:h.settings.reducedMotion?.18:.72})}function er(n,e=16039245){const t=h.settings.reducedMotion?3:10;for(let i=0;i<t;i+=1){const r=new pe(new gn(.035,6,5),new $t({color:e}));r.position.copy(n).add(new I(0,.45,0)),wr.add(r),Ns.push({kind:"particle",mesh:r,velocity:new I((Math.random()-.5)*1.5,.7+Math.random(),(Math.random()-.5)*1.5),age:0,duration:.65})}}function Zy(n){for(let e=Ns.length-1;e>=0;e-=1){const t=Ns[e];t.age+=n;const i=t.age/t.duration;t.kind==="packet"?(t.mesh.position.lerpVectors(t.start,t.end,Math.min(1,i)),t.mesh.position.y+=Math.sin(Math.min(1,i)*Math.PI)*1.4,t.mesh.rotation.y+=n*5):(t.velocity.y-=n*2.2,t.mesh.position.addScaledVector(t.velocity,n),t.mesh.scale.setScalar(Math.max(.05,1-i))),i>=1&&(wr.remove(t.mesh),Ci(t.mesh),Ns.splice(e,1))}for(let e=Us.length-1;e>=0;e-=1){const t=Us[e];t.age+=n;const i=Math.min(1,t.age/.65);t.produce.position.lerpVectors(t.start,t.end,i),h.settings.reducedMotion||(t.produce.position.y+=Math.sin(i*Math.PI)*.6),t.customer.userData.rig.arms[0].rotation.x=-i*.8,t.age>.75&&!h.settings.reducedMotion&&(t.customer.position.x+=n*2.2,t.customer.rotation.y=Math.PI/2,t.produce.position.copy(t.customer.position).add(new I(.3,1,0)),t.customer.userData.rig.legs.forEach((r,s)=>{r.rotation.x=Math.sin(t.age*9+s*Math.PI)*.3})),t.age>=(h.settings.reducedMotion?.9:2.3)&&(wr.remove(t.customer,t.produce),Ci(t.customer),Ci(t.produce),Us.splice(e,1))}}function Qy(n){jr.update(document.hidden?0:n,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});const e=performance.now()/1e3;he.water.opacity=.76+Math.sin(e*1.8)*.08,Yn.intensity=1.45+Math.sin(e*.09)*.06,_t.traverse(t=>{if(t.userData.attentionMarkers&&(t.material.opacity=h.settings.reducedMotion?.65:.55+Math.sin(e*2)*.15),t.userData.hens&&t.userData.hens.forEach((i,r)=>{const s=e*.7+r*2.5;i.position.copy(i.userData.home),h.settings.reducedMotion||(i.position.x+=Math.sin(s)*.22,i.position.z+=Math.cos(s)*.16,i.rotation.y=Math.cos(s)*.6,i.rotation.x=Math.max(0,Math.sin(s*2.3))*.22)}),t.userData.flowSegments){t.visible=Fh(h,Be());const i=new kt;t.userData.flowSegments.forEach(({start:r,end:s},o)=>{const a=h.hydro.lineClogged||h.settings.reducedMotion?.5:(e*.22+o*.31)%1;i.position.lerpVectors(r,s,a),i.updateMatrix(),t.setMatrixAt(o,i.matrix)}),t.instanceMatrix.needsUpdate=!0}if(t.userData.campaignCrop&&(t.rotation.z=Math.sin(e*1.3+t.userData.swayPhase)*.025),t.userData.customerIndex!==void 0){const i=e*1.7+t.userData.customerIndex,r=h.settings.reducedMotion?1:Dt.clamp((Be()-t.userData.arrivedAt)/1200,0,1);t.position.copy(t.userData.destination),t.position.x+=(1-r)*1.8,t.rotation.y=r<1?-Math.PI/2:-.18;const s=t.userData.rig;s&&!h.settings.reducedMotion&&(s.head.rotation.y=Math.sin(i*.45)*.07,s.body.scale.y=1+Math.sin(i)*.012,s.legs.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*.3:0}),s.arms.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*-.2:Math.sin(i+a)*.04}))}if(t.userData.guideMarker){const i=1+Math.sin(e*3.1)*.08;t.scale.set(i,1,i),t.position.y=t.userData.baseY+Math.sin(e*2.5)*.035}})}function _l(n={}){const e=[];return n.coins&&e.push(`${n.coins} coins`),n.xp&&e.push(`${n.xp} XP`),n.unlockCrop&&e.push(Le[n.unlockCrop].label),n.unlockPro&&e.push("Pro Pip"),e.join(" + ")}function mo(n){const e=n?.goals;return e?[...e.marketLevel?[{label:"Market upgraded",current:h.market.level>=e.marketLevel?1:0,target:1}]:[],...e.capacityUpgrade?[{label:"Queue or bed expanded",current:jl()?1:0,target:1}]:[],...Object.entries(e.sold||{}).map(([t,i])=>({crop:t,label:`${Le[t].label} sold`,current:h.stats.byCropSold[t],target:i})),...e.orders?[{label:"Total orders fulfilled",current:h.stats.orders,target:e.orders}]:[]]:[]}function jl(){return h.towers.some(n=>n.built&&n.irrigationUpgraded)||h.beds.some(n=>n.built&&n.capacity>2)}function Zh(){const n=h.towers.findIndex(t=>t.built&&!t.irrigationUpgraded),e=h.beds.findIndex(t=>t.built&&t.capacity<4);return[...n>=0?[{id:`tower-${n}`,label:"Precision drippers / 12% faster starts",cost:pt.queueUpgrade}]:[],...e>=0?[{id:`bed-${e}`,label:"Bed +1 growing space",cost:pt.bedUpgrade[e]}]:[]]}function eM(n){const e=mo(n);if(e.length)return e.every(t=>t.current>=t.target);switch(n.id){case"repair-first-tower":return h.towers[0].repaired;case"first-tower-plan":return h.stats.byCropQueued.lettuce>=2;case"first-grow-out":return h.stats.harvested>=2;case"reopen-market":return h.market.built;case"build-second-tower":return h.towers[1].built;case"specialize-flow":return h.hydro.systemLessonDone;case"split-crop-plan":return h.stats.byCropQueued.tomato>=1&&h.stats.byCropQueued.kale>=1;case"build-third-tower":return h.towers[2].built;case"build-pro-yard":return h.towers[3].built;default:return!1}}function tM(n){const e=h.level;h.coins+=n.reward.coins||0,h.xp+=n.reward.xp||0,n.reward.unlockCrop&&!h.unlockedCrops.includes(n.reward.unlockCrop)&&h.unlockedCrops.push(n.reward.unlockCrop),n.reward.unlockPro&&(h.proPip=!0),n.reward.campaignComplete&&(h.campaignComplete=!0);const t=Dh(h.xp);h.level=t.level,h.level>e&&(Ge(`Level ${h.level} reached. New farm options are ready.`,4500),Ki("level-up"))}function Pa(n=new I(Se.x,1.2,Se.z)){const e=n.clone().add(new I(0,1,0)).project(Rt),t=Un.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function gi(){const n=Xn(h);if(!n||!eM(n))return!1;h.completedTasks.push(n.id),tM(n),h.taskIndex+=1,n.reward.chapterComplete&&(n.reward.campaignComplete||(h.chapter=Math.min(lo.length-1,h.chapter+1)),Cs=n),h=Er(h),je("task_complete"),er(Qe[n.focus]||new I(Se.x,0,Se.z),12181347),Ki(n.reward.chapterComplete?"chapter-complete":"task-complete"),Wn("campaign_task_complete",{task:n.id,chapter:n.chapter+1,coins:h.coins,xp:h.xp}),n.reward.unlockPro&&nM(),Cs?Mf(Cs):(Ge(`Task complete: ${n.title}. ${_l(n.reward)}.`,4800),ai.celebrate({title:n.title,detail:_l(n.reward)})),ot();const e=Te.chapterCoins.getBoundingClientRect();return ai.coins(n.reward.coins,Cs?{x:e.left,y:e.bottom}:Pa(Qe[n.focus])),!0}function nM(){const n=wt.position.clone(),e=wt.rotation.y;ci.remove(wt),Ci(wt),wt=jh(),wt.position.copy(n),wt.rotation.y=e,ci.add(wt),Se.speed=h.proPip?6.25:5.25}function Vi(){return Math.max(0,h.coins-(h.market.built?0:pt.market))}function Jl(){return h.market.built?"":`<div class="status-strip"><span>Veg Stand reserve</span><strong>${pt.market} coins</strong></div>`}function vi(n,e,t=!1){if(t&&Vi()<n&&!h.market.built)return Ge("Keep 40 coins for the Veg Stand. Optional upgrades can use the remaining coins."),Ki("error"),!1;if(h.coins<n)return Ge(`You need ${n-h.coins} more coins. Complete an order or task first.`),Ki("error"),!1;const i=structuredClone(h);try{if(e(),h.coins-=n,h.coins<0)throw new Error("Invalid coin balance");return je("purchase"),!0}catch{return h=i,Ge("That purchase was safely rolled back. Try again."),!1}}function Kl(n){const e=h.towers[n];!e?.built||e.repaired||(e.repaired=!0,h.stats.serviceActions+=1,Ot("repair","repair"),er(Qe[`tower-${n}`],6933459),Ge(`Tower ${n+1} is online. Its four planting layers are ready.`),je("repair"),gi(),ot())}function Zl(n){const e=h.towers[n];if(!e||e.built||n===0)return;const t=[0,5,8,10][n];if(h.taskIndex<t){Ge("Finish the current farm task before opening this lane.");return}const i=pt.tower[n];vi(i,()=>{e.built=!0,e.repaired=!0,h.beds[n].built=!0})&&(Ot("build","build"),er(Qe[`tower-${n}`],16039245),Ge(`Tower ${n+1} and Grow Bed ${n+1} are built.`),gi(),ot())}function Ql(){h.market.built||h.taskIndex<3||vi(pt.market,()=>{h.market.built=!0,h.market.level=1,sf()})&&(Ot("build","build"),er(Qe.market,16039245),Ge("Pip's Veg Stand is open. Three neighbors are ready to order."),gi(),ot())}function Qh(n){const e=$l(h,n);if(!e.available){Ge(e.reason);return}vi(0,()=>{if(!ay(h,n))throw new Error("Seed purchase changed")})&&(Kh(n),Ot("collect","seed-pickup"),Ge(`Bram: ${e.amount} ${Le[n].label} seeds in the vault. ${e.tutorial?"First packet is on the house!":"No refunds for talking to your seedlings."}`),Wn("seed_purchase",{crop:n,amount:e.amount,coins:e.price,tutorial:e.tutorial}),ot())}function ef(){vi(0,()=>{if(!cy(h))throw new Error("Rescue unavailable")})&&(Kh("lettuce"),Ge("Bram: Two lettuce seeds to get you growing again. Everybody starts somewhere."),Wn("seed_rescue"),ot())}function tf(){vi(0,()=>{if(!ly(h))throw new Error("Vault upgrade unavailable")})&&(Ot("build","build"),Ge("Seed vault expanded: room for 48 seeds of each crop."),ot())}function nf(n,e,t=null){const i=h.towers[n];if(!i?.built||!i.repaired||!h.unlockedCrops.includes(e))return;const r=ao(i,h.carry,n),s=t===null?r[0]:t;if(!r.includes(s)){Ge(`Tower ${n+1} has no available layer. A carried starter's layer stays reserved.`);return}if(!$n(h)){Ge("The shared tank needs a fresh mixed batch before planting."),Jt("reservoir");return}if(h.seeds[e]<=0){Ge(`Collect ${Le[e].label} seeds from the Seed Vault first.`);return}h.seeds[e]-=1;const o=Be(),a=as(e,"tower",h,i)*1e3*cs;i.queue.push({id:crypto.randomUUID(),crop:e,layer:s,queuedAt:o,startedAt:o,readyAt:o+a,quality:1}),h.stats.planted+=1,h.stats.byCropQueued[e]+=1,Cd(h)&&Ai(h,"matched",e),Cd(h)&&Ai(h,"saving",e),new Set(i.queue.map(c=>c.crop)).size===4&&Ai(h,"mixed"),h.xp+=2,Ot("plant","plant"),er(Qe[`tower-${n}`],Number.parseInt(Le[e].color.slice(1),16)),Ge(`${Le[e].label} planted in Tower ${n+1}, layer ${s+1}.`),h=Er(h),je("queue_crop"),gi(),ot()}function Sn(){return h.beds.filter(n=>n.built).reduce((n,e)=>n+Math.max(0,e.capacity-e.plants.length),0)}function rf(){const n=h.beds.findIndex(e=>e.built&&e.plants.length<e.capacity);return n>=0?`bed-${n}`:null}function iM(){const n=Be(),e=h.towers.findIndex(t=>t.built&&t.repaired&&Mr(t,n));return e>=0?`tower-${e}`:null}function Xo(n=null){const e=Be(),t=h.beds.findIndex(i=>i.built&&i.plants.some(r=>r.readyAt<=e&&(!n||r.crop===n)));return t>=0?`bed-${t}`:null}function bc(){const n=h.towers.findIndex((e,t)=>e.built&&e.repaired&&ao(e,h.carry,t).length);return n>=0?`tower-${n}`:null}function rM(){const n=Dn(h);if(n)return n.crop;const e=Xn(h);if(e?.id==="first-tower-plan")return"lettuce";if(e?.id==="split-crop-plan"){if(h.stats.byCropQueued.tomato<1)return"tomato";if(h.stats.byCropQueued.kale<1)return"kale"}const t=mo(e).find(r=>r.crop&&r.current<r.target);if(t)return t.crop;if(!e){const r=Hn(h).find(o=>o.id===h.homestead.pinned),s=r&&oo(h,r).find(o=>o.crop&&o.current<o.target);if(s&&h.unlockedCrops.includes(s.crop))return s.crop}return h.orders.find(r=>r.status==="waiting"&&h.unlockedCrops.includes(r.crop))?.crop||h.unlockedCrops[0]||"lettuce"}function Qr(){return h.carry?.kind!=="produce"||!h.market.built?!1:h.orders.some(n=>n.status!=="waiting"?!1:h.carry.items.filter(e=>e===n.crop).length>=n.amount)}function li(){if(h.carry?.kind==="starter")return rf()||`tower-${h.carry.sourceTower}`;if(!$n(h)&&!Qr())return"reservoir";if(h.hydro.lineClogged&&!Qr())return"filter";const n=Dn(h);if(n){const f=In(h,n);if(!f.needed)return"market";if(!f.room||f.load)return"rack";const p=Xo(n.crop);if(p)return p;const g=h.towers.findIndex(v=>Mr(v,Be(),n.crop));if(g>=0)return h.carry?.kind==="produce"?"rack":Sn()?`tower-${g}`:Xo()||`bed-${Math.max(0,h.beds.findIndex(v=>v.built&&v.plants.length))}`;if(!f.missing){const v=h.beds.findIndex(S=>S.plants.some(b=>b.crop===n.crop));if(v>=0)return`bed-${v}`;const m=h.towers.findIndex(S=>S.queue.some(b=>b.crop===n.crop));if(m>=0)return`tower-${m}`}if(h.carry?.kind==="produce")return"rack";const _=bc(n.crop);if(_)return h.seeds[n.crop]?_:"vault"}if(h.carry?.kind==="produce"){if(Qr())return"market";if(h.carry.items.length<Ht(h).basket){const f=Xo();if(f)return f}return"rack"}const e=Xo();if(e)return e;const t=iM();if(t&&Sn()>0)return t;if(t&&Sn()<=0){const f=h.beds.findIndex(p=>p.built&&p.plants.length);if(f>=0)return`bed-${f}`}if(!$n(h))return"reservoir";const i=Xn(h);if(i?.goals?.capacityUpgrade&&!jl()){const f=Zh().find(p=>h.coins>=p.cost);if(f)return f.id}if(i?.id==="launch-showcase"&&h.market.level<2&&h.coins>=pt.marketUpgrade)return"market";const r={"repair-first-tower":0,"reopen-market":pt.market,"build-second-tower":pt.tower[1],"specialize-flow":0,"build-third-tower":pt.tower[2],"build-pro-yard":pt.tower[3]};if(i?.id in r&&h.coins>=r[i.id])return i.focus;const s=h.orders.filter(f=>f.status==="waiting");if(s.some(f=>h.rack[f.crop]>=f.amount))return"rack";const o=rM(),a=s.find(f=>f.crop===o),c=["first-tower-plan","split-crop-plan"].includes(i?.id),l=[];h.beds.forEach((f,p)=>f.plants.forEach(g=>{g.crop===o&&l.push({id:`bed-${p}`,readyAt:g.readyAt})})),h.towers.forEach((f,p)=>f.queue.forEach(g=>{g.crop===o&&l.push({id:`tower-${p}`,readyAt:g.readyAt??1/0})}));const u=i?.id==="first-grow-out"?Math.max(1,2-h.stats.harvested):a?.amount||1;if(!c&&l.length+h.rack[o]>=u&&l.length)return l.sort((f,p)=>f.readyAt-p.readyAt),l[0].id;if(h.market.built&&!c&&!a)return"market";const d=h.seeds[o]>0?bc():null;if(d)return d;if(!bc()){const f=h.towers.findIndex(p=>p.built&&p.queue.length);if(f>=0)return`tower-${f}`}return h.unlockedCrops.includes(o)?"vault":i?.focus||null}function Js(n,e=null){const t=h.towers[n],i=e?t?.queue.find(r=>r.id===e):Mr(t,Be(),Dn(h)?.crop)||Mr(t,Be());if(!(!i||i.readyAt===null||i.readyAt>Be())){if(h.carry){Ge("Pip's hands are full.");return}if(Sn()<=0){Ge("Every bed is full. Harvest a finished crop before taking another starter."),Ki("error");return}t.queue.splice(t.queue.indexOf(i),1),h.carry={kind:"starter",crop:i.crop,quality:i.quality,sourceTower:n,sourceLayer:i.layer,job:i},h=Er(h),Ot("carry","pickup"),Ge(`${Le[i.crop].label} starter picked up. Carry it to an open bed.`),je("pickup_starter"),ot()}}function Gi(n){if(h.carry?.kind!=="starter"||h.carry.sourceTower!==n)return;const e=h.towers[n];if(e.queue.length>=4){Ge("That tower queue is full. Transplant this starter into an open bed.");return}const t=h.carry.job||{id:crypto.randomUUID(),crop:h.carry.crop,queuedAt:Be(),startedAt:Be(),readyAt:Be(),quality:h.carry.quality};t.startedAt=Be(),t.readyAt=Be(),t.layer=h.carry.sourceLayer??ao(e)[0],e.queue.unshift(t),h.carry=null,Ot("return","return"),Ge(`${Le[t.crop].label} returned safely to Tower ${n+1}.`),je("return_starter"),ot()}function Ks(n){const e=h.beds[n];if(h.carry?.kind!=="starter"||!e?.built)return;if(e.plants.length>=e.capacity){Ge(`Grow Bed ${n+1} is full.`);return}const t=h.carry.crop,i=e.soilCharges>0,r=Be();e.plants.push({id:crypto.randomUUID(),crop:t,plantedAt:r,readyAt:r+as(t,"bed",h)*(e.soilCharges?.8:1)*1e3*cs,quality:h.carry.quality}),h.carry=null,e.soilCharges=Math.max(0,e.soilCharges-1),h.stats.transplanted+=1,Ai(h,"transplant",t),i&&Ai(h,"enriched",t),h.xp+=3,Ot("transplant","transplant"),er(Qe[`bed-${n}`],Number.parseInt(Le[t].color.slice(1),16)),Ge(`${Le[t].label} transplanted. It will finish in the garden.`),je("transplant"),ot()}function Zs(n,e=null){const t=h.beds[n];if(!t?.built)return;if(h.carry?.kind==="starter"){Ge("Transplant or return the tower starter before harvesting.");return}if((h.carry?.kind==="produce"?h.carry.items:[]).length>=Ht(h).basket){Ge("The harvest basket is full. Visit the market or Harvest Rack.");return}const r=t.plants.findIndex(o=>o.readyAt<=Be()&&(!e||o.crop===e));if(r<0){Ge("No finished crop is ready in this bed yet.");return}const[s]=t.plants.splice(r,1);h.carry||(h.carry={kind:"produce",items:[]}),h.carry.items.push(s.crop),h.stats.harvested+=1,h.stats.harvested===1&&Wn("first_harvest",{crop:s.crop}),h.stats.byCropHarvested[s.crop]+=1,Ai(h,"harvest",s.crop),h.farm.scraps=Math.min(24,h.farm.scraps+1),h.xp+=Le[s.crop].xp,Ot("harvest","harvest"),er(Qe[`bed-${n}`],Number.parseInt(Le[s.crop].color.slice(1),16)),Ge(`${Le[s.crop].label} added to the basket: ${h.carry.items.length}/${Ht(h).basket}.`),je("harvest"),gi(),ot()}function Qs(n=null,e=Ht(h).basket){if(h.carry?.kind!=="produce")return;let t=0;h.carry.items=h.carry.items.filter(i=>(!n||i===n)&&t<e?(h.rack[i]+=1,t+=1,!1):!0),h.carry.items.length||(h.carry=null),Ot("store","rack"),Ge(`${t} finished crop${t===1?"":"s"} stored on the Harvest Rack.`),je("rack_store"),ot()}function ma(n,e=1){if(!Le[n]||(e=Math.max(0,Math.min(Ht(h).basket,Math.floor(Number(e)||0))),h.carry?.kind==="starter"))return;const t=h.carry?.kind==="produce"?h.carry.items:[],i=Ht(h).basket-t.length,r=Math.min(i,e,h.rack[n]);if(!(r<=0)){h.carry||(h.carry={kind:"produce",items:[]});for(let s=0;s<r;s+=1)h.rack[n]-=1,h.carry.items.push(n);Ot("carry","pickup"),Ge(`${r} ${Le[n].label} loaded from the rack.`),je("rack_load"),ot()}}function eu(n=0){const e=h.unlockedCrops.filter(a=>Le[a]),t=h.orderSequence,i=e[t%e.length],r=br.filter(a=>a.name!==h.lastCustomer),s=r[t%r.length];h.lastCustomer=s.name;const o=h.chapter===0?1:h.chapter===1?t%3===0?1:2:h.market.level>1&&t%3===2?3:2;return h.orderSequence+=1,{id:crypto.randomUUID(),customer:s.name,crop:i,amount:o,reward:Le[i].coinValue*o+8+h.market.level*2,xp:Le[i].xp*o+4,createdAt:Be(),expiresAt:Be()+(90+n*12+(o-1)*30)*1e3,status:"waiting"}}function sf(){if(h.market.built)for(;h.orders.length<3;)h.orders.push(eu(h.orders.length))}function sM(n){h.orders[n]=eu(n)}function of(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId===e.id&&(h.selectedOrderId=null),e.status="cooldown",e.expiresAt=Be()+15e3*cs,h.stats.rejectedOrders+=1,Ge(`${e.customer}'s order was released. A new neighbor arrives shortly.`),Ki("order-reject"),je("order_reject"),ot())}function af(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId=e.id,Ge(`${e.customer}'s order is reserved while you grow.`),je("order_wait"),ot())}function oM(n){return(h.carry?.kind==="produce"?h.carry.items.filter(t=>t===n).length:0)+h.rack[n]}function ls(){if(!h.market.built)return null;const n=Dn(h);if(n)return n;const e=h.orders.filter(t=>t.status==="waiting");return e.find(t=>oM(t.crop)>=t.amount)||e.sort((t,i)=>t.expiresAt-i.expiresAt)[0]||null}function tu(n){const e=h.orders[n];if(!e||e.status!=="waiting")return;const t=h.carry?.kind==="produce"?h.carry.items:[];if(t.filter(s=>s===e.crop).length<e.amount){h.rack[e.crop]>0?Ge(`Load ${Le[e.crop].label} from the Harvest Rack, then return to ${e.customer}.`):Ge(`${e.customer} needs ${e.amount} ${Le[e.crop].label}. Only finished garden produce can be sold.`),Ki("error");return}let r=e.amount;h.carry.items=t.filter(s=>s===e.crop&&r>0?(r-=1,!1):!0),h.carry.items.length||(h.carry=null),h.coins+=e.reward,h.xp+=e.xp,h.stats.sold+=e.amount,h.stats.orders+=1,h.stats.orders===1&&Wn("first_sale"),h.stats.byCropSold[e.crop]+=e.amount,Ai(h,"order",e.crop),Ot("sell","sale"),qy(e,n),er(pa(n),Number.parseInt(Le[e.crop].color.slice(1),16)),Ge(`${e.customer}: "${br.find(s=>s.name===e.customer)?.line}" +${e.reward} coins.`),h.selectedOrderId===e.id&&(h.selectedOrderId=null),e.status="cooldown",e.expiresAt=Be()+2400,je("order_complete"),ai.coins(e.reward,Pa(pa(n))),gi(),ot()}function ga(n){const e=h.orders[n];if(!e||e.status!=="waiting"||h.carry?.kind!=="produce"||h.carry.items.filter(i=>i===e.crop).length<e.amount)return;h.selectedOrderId=e.id;const t=pa(n).add(new I(0,0,.8));if(Math.hypot(Se.x-t.x,Se.z-t.z)<=.5)return Tt()&&on(),tu(n);Jt("market"),Se.target={x:t.x,z:t.z},Vn=e.id,je("delivery_start"),Ge(`Taking ${e.amount} ${Le[e.crop].label} to ${e.customer}.`)}function aM(n){const e=h.orders.find(i=>i.id===n&&i.status==="waiting");if(!e)return;h.selectedOrderId=e.id,je("order_selected");const t=Th(h,e);if(t.kind==="deliver")return ga(h.orders.findIndex(i=>i.id===n));if(t.kind==="collect"){Jt("rack"),ri=e.id;return}Jt(li()||"vault")}function cf(n){const e=h.towers[n];!e?.built||e.irrigationUpgraded||vi(pt.queueUpgrade,()=>{e.irrigationUpgraded=!0},!0)&&(Ot("build","build"),Ge(`Tower ${n+1} has precision drippers. New starts grow 12% faster.`),gi(),ot())}function lf(n){const e=h.beds[n];if(!e?.built||e.capacity>=4)return;const t=pt.bedUpgrade[n];vi(t,()=>{e.capacity+=1},!0)&&(Ot("build","build"),Ge(`Grow Bed ${n+1} now holds ${e.capacity} crops.`),gi(),ot())}function nu(){!h.market.built||h.market.level>=2||vi(pt.marketUpgrade,()=>{h.market.level=2})&&(Ot("build","build"),Ge("Veg Stand upgraded. Family basket orders now pay more."),gi(),ot())}function uf(){Sy(h)&&(Ot("service","service"),Ge("Filter cleared. Full flow restored to the towers."),je("feedline_cleared"),ot())}function df(n){Ey(h,n)&&(h.hydro.servicedAt=Be(),h.stats.serviceActions+=1,Ot("service","service"),Ge(n==="water"?"Fresh starter batch filled. Circulate the IBC before feeding.":n==="mix"?"One evenly mixed batch supplies every tower.":"Delivery confirmed at every top outlet. The timer handles the short feeds."),je("hydro_service"),gi(),ot())}function hf(n){!qs[n]||h.cosmetics.owned.includes(n)||vi(pt.cosmetics[n],()=>{h.cosmetics.owned.push(n),h.cosmetics.active.push(n)},!0)&&(Ot("build","build"),Ge(`${qs[n].label} added to the homestead.`),ot())}function cM(n){h.cosmetics.owned.includes(n)&&(h.cosmetics.active.includes(n)?h.cosmetics.active=h.cosmetics.active.filter(e=>e!==n):h.cosmetics.active.push(n),je("cosmetic_toggle"),ot())}function lM(n){if(!n)return"Farm complete";const e=mo(n);if(e.length)return`${e.filter(t=>t.current>=t.target).length} / ${e.length}`;switch(n.id){case"repair-first-tower":return h.towers[0].repaired?"1 / 1":"0 / 1";case"first-tower-plan":return`${Math.min(2,h.stats.byCropQueued.lettuce)} / 2`;case"first-grow-out":return`${Math.min(2,h.stats.harvested)} / 2`;case"reopen-market":return h.market.built?"1 / 1":"0 / 1";case"build-second-tower":return h.towers[1].built?"1 / 1":"0 / 1";case"specialize-flow":return h.hydro.systemLessonDone?"1 / 1":"0 / 1";case"split-crop-plan":return`${Math.min(1,h.stats.byCropQueued.tomato)+Math.min(1,h.stats.byCropQueued.kale)} / 2`;case"build-third-tower":return h.towers[2].built?"1 / 1":"0 / 1";case"build-pro-yard":return h.towers[3].built?"1 / 1":"0 / 1";default:return""}}function iu(){const n=Dh(h.xp);Te.coins.textContent=h.coins.toLocaleString(),Te.level.textContent=String(n.level),Te.xp.textContent=n.needed?`${n.current} / ${n.needed}`:"MAX",Te.xpFill.style.width=`${Math.round(n.ratio*100)}%`,Te.chapter.previousElementSibling.textContent=h.campaignComplete?"Farm":"Chapter",Te.chapter.textContent=h.campaignComplete?mr(h)?"Master":`${h.homestead.claimed.length}/18`:`${h.chapter+1} / 3`;const e=Xn(h),t=lo[h.chapter];Te.objectiveChapter.textContent=h.campaignComplete?"Homestead":`Chapter ${t.number}`;const i=Hn(h).find(s=>s.id===h.homestead.pinned)||Hn(h)[0];Te.objectiveTitle.textContent=e?.title||i?.title||(mr(h)?"Community requests continue":"Complete the crop mastery book"),Te.objectiveProgress.textContent=e?lM(e):i?`${oo(h,i).filter(s=>s.current>=s.target).length}/${i.goals.length}`:`${Object.values(h.homestead.mastery).reduce((s,o)=>s+o,0)}/15 badges`,ne("#homesteadButton").hidden=!h.market.built,ne(".campaign-controls").classList.toggle("has-goals",h.market.built);const r=Hn(h).filter(s=>Sa(h,s)).length;ne("#homesteadButton").textContent=r?`Goals (${r})`:"Goals",Nn.hidden||ua.render(h),document.body.classList.toggle("high-contrast",h.settings.highContrast),vs()}function vs(){const n=ls(),e=!Nn.hidden||!pi.hidden||!qn.hidden||!vn.hidden||!En.hidden||!hn.hidden;if(gr.hidden=!n||e,gr.classList.toggle("is-ready",!!(n&&In(h,n).needed===0)),!n)return;const t=In(h,n);Te.marketChipCustomer.textContent=`${n.customer}${n.id===h.selectedOrderId?" / Reserved":" needs"}`,Te.marketChipDemand.textContent=`${t.carried}/${n.amount} ${Le[n.crop].label} in basket${t.stored?` / ${t.stored} rack`:""}`}function ff(){const n=Xn(h),e=lo[h.chapter];Te.taskChapter.textContent=h.campaignComplete?"Campaign complete":`Chapter ${e.number}`,Te.taskTitle.textContent=e.name,Te.taskStory.textContent=n?.story||"Pip: The homestead is ready for every grow that comes next.",Te.primaryTaskTitle.textContent=n?.title||"Keep the market growing",Te.primaryTaskDetail.textContent=n?.detail||"Choose crops, improve the farm, and serve neighborhood orders.",Te.primaryTaskReward.textContent=n?_l(n.reward):"All chapter rewards earned";const t=bn.slice(h.taskIndex).find(o=>o.reward.unlockCrop||o.reward.unlockPro),i=ne("#nextFarmUnlock");if(i.hidden=!t||h.campaignComplete,t){const o=t.reward.unlockPro?"Pro Pip and strawberry seeds":`${Le[t.reward.unlockCrop].label} seeds`;i.textContent=`Next unlock: ${o}. Milestone: ${t.title}.`}ne("#taskMilestones").innerHTML=mo(n).map(o=>{const a=o.current>=o.target;return`<li class="${a?"is-complete":""}"><span>${a?"&#10003; ":""}${o.label}</span><strong>${Math.min(o.current,o.target)} / ${o.target}</strong></li>`}).join("");const r=ne("#taskUpgradeOptions");r.hidden=!n?.goals?.capacityUpgrade||jl(),r.innerHTML=r.hidden?"":Zh().map(o=>`<button class="choice-button" data-upgrade-target="${o.id}"><strong>${o.label}</strong><small>${o.cost} coins</small></button>`).join(""),r.querySelectorAll("[data-upgrade-target]").forEach(o=>o.addEventListener("click",()=>Jt(o.dataset.upgradeTarget)));const s=bn.filter(o=>o.chapter===h.chapter);Te.chapterTaskList.innerHTML=s.map(o=>{const a=h.completedTasks.includes(o.id),c=o.id===n?.id;return`<div class="task-row ${a?"is-complete":""} ${c?"is-active":""}"><i>${a?"&#10003;":""}</i><span>${o.title}</span></div>`}).join("")}function uM(){const n=fi.filter(e=>h.rack[e]>0).map(e=>`${Le[e].code} ${h.rack[e]}`);return n.length?n.join(" / "):"Empty"}function pf(){if(!h.carry)return"";if(h.carry.kind==="starter")return Le[h.carry.crop].label;const n=h.carry.items.reduce((e,t)=>(e[t]=(e[t]||0)+1,e),{});return Object.entries(n).map(([e,t])=>`${Tt()?Le[e].label:Le[e].code} ${t}`).join(" / ")}function mf(){if(zh.hidden=!h.carry&&!h.farm.eggs,!h.carry){Te.carryKind.textContent="Egg crate / market",Te.carryContents.textContent=`${h.farm.eggs} eggs`;return}Te.carryKind.textContent=h.carry.kind==="starter"?"Tower starter / one":`Harvest basket / ${h.carry.items.length} of ${Ht(h).basket}`,Tt()&&(Te.carryKind.textContent=h.carry.kind==="starter"?"To garden":`Basket ${h.carry.items.length}/${Ht(h).basket}`),Te.carryContents.textContent=pf()+(h.farm.eggs?` / ${h.farm.eggs} eggs`:"")}function eo(n){const e=Math.max(0,Math.ceil((n-Be())/1e3));return e>59?`${Math.floor(e/60)}m ${e%60}s`:`${e}s`}function go(){sf();const n=ne("#sellFarmEggs");n.hidden=!h.farm.eggs;const e=Math.hypot(Se.x-Qe.market.x,Se.z-Qe.market.z)<3.6;n.textContent=e?`Sell ${h.farm.eggs} eggs / ${h.farm.eggs*8} coins`:`Take ${h.farm.eggs} eggs to the stand`,Te.rackSummary.textContent=uM();const t=ne("#orderMarketUpgrade");t.hidden=h.market.level>=2,t.disabled=h.coins<pt.marketUpgrade;const i=Dn(h)||ls();rn(Te.orderList,h.orders.map((r,s)=>{const o=br.find(u=>u.name===r.customer)||br[0];if(r.status==="cooldown")return`<article class="order-card order-waiting" data-key="${r.id}"><img class="customer-avatar" src="${Ld(o)}" alt=""><div><h3>${r.customer}</h3><p>Next neighbor in ${eo(r.expiresAt)}</p></div></article>`;const a=Th(h,r),c=a.stock,l=i?.id===r.id;return`<article class="order-card ${l?"is-selected":""}" data-order="${s}" data-key="${r.id}">
      <button class="order-select" data-order-action="select" data-order-id="${r.id}" aria-pressed="${r.id===h.selectedOrderId}"><img class="customer-avatar" src="${Ld(o)}" alt=""><span><strong>${r.customer}</strong><span>${r.amount} ${Le[r.crop].label}</span></span><span class="order-reward">${r.reward} coins<small>+${r.xp} XP</small></span></button>
      <div class="order-detail" ${l?"":"hidden"}>
        <p class="stock-breakdown">Basket <b>${c.carried}/${r.amount}</b> <span>Rack <b>${c.stored}</b></span> <span>Growing <b>${c.growing+c.ready}</b></span></p>
        <p class="order-status">${h.carry?.kind==="starter"?"Starter needs its garden finish":c.needed===0?"Packed for delivery":c.room===0?"Make room on the rack; your crops stay safe":c.load?`${c.load} needed from the rack`:c.ready?`${c.ready} ready in the garden`:c.missing?`${c.missing} still to plant`:"Your crop is growing"}</p>
        <div class="order-actions"><button class="fulfill" data-order-action="fulfill" data-order-id="${r.id}" data-index="${s}">${a.label}</button><button data-order-action="wait" data-order-id="${r.id}">${r.id===h.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${r.id}">Release</button></div>
      </div>
    </article>`}).join("")),Te.orderList.onclick=r=>{const s=r.target.closest("[data-order-action]");if(!s)return;const o=h.orders.findIndex(a=>a.id===s.dataset.orderId&&a.status==="waiting");o<0||(s.dataset.orderAction==="fulfill"&&aM(s.dataset.orderId),["select","wait"].includes(s.dataset.orderAction)&&(af(o),po()),s.dataset.orderAction==="reject"&&of(o),go())},vn.hidden||(ps.textContent=ru("market"))}function Rn(n,e,t,i=!1){return`<button class="economy-command" data-command="${t}" ${i?"disabled":""}><span>${n}</span><strong>${e===0?"Free":`${e} coins`}</strong></button>`}function dM(n){const e=h.towers[n];if(Te.interactionKicker.textContent="Hydro production",Te.interactionTitle.textContent=`Tower ${n+1}`,!e.built){const a=pt.tower[n];Te.interactionSummary.textContent=`Four independent planting layers and Grow Bed ${n+1}.`,rn(sn,Rn(`Build Tower ${n+1}`,a,`build-tower-${n}`,h.coins<a));return}if(!e.repaired){Te.interactionSummary.textContent="Repair the pump and flow line before planting.",rn(sn,Rn("Repair tower",0,`repair-tower-${n}`));return}const t=ao(e,h.carry,n),i=[0,1,2,3].map(a=>{const c=e.queue.find(u=>u.layer===a);if(!c)return`<label class="queue-slot is-empty"><b>${a+1}</b><span>${t.includes(a)?"Empty layer":"Reserved for carried starter"}</span><input type="radio" name="towerLayer" value="${a}" aria-label="Plant layer ${a+1}" ${a===t[0]?"checked":""} ${t.includes(a)?"":"disabled"}></label>`;const l=c.readyAt!==null&&c.readyAt<=Be();return`<div class="queue-slot" data-key="${c.id}"><b style="background:${Le[c.crop].accent}">${a+1}</b><span>${Le[c.crop].label}<small>${l?"Ready for the garden":eo(c.readyAt)}</small></span>${l?`<button class="storage-button" data-pickup-job="${c.id}" ${h.carry||!Sn()?"disabled":""}>Pick up</button>`:"<time>Growing</time>"}</div>`}).join(""),r=h.unlockedCrops.map(a=>`<button class="crop-button" data-queue-crop="${a}" ${!t.length||h.seeds[a]<=0?"disabled":""}><i style="background:${Le[a].accent}">${Le[a].code}</i><span>${Le[a].label}<small>${h.seeds[a]} seeds / ${Math.ceil(as(a,"tower",h,e))}s</small></span></button>`).join(""),s=h.carry?.kind==="starter"&&h.carry.sourceTower===n?Rn("Return starter to its layer",0,`return-${n}`):"",o=e.irrigationUpgraded?'<div class="status-strip"><span>Precision drippers</span><strong>Installed</strong></div>':Rn("Precision drippers / 12% faster",pt.queueUpgrade,`upgrade-queue-${n}`,Vi()<pt.queueUpgrade);Te.interactionSummary.textContent=`${e.queue.length}/4 layers planted. One seed per layer; each crop grows independently.`,rn(sn,`<div class="queue-list"><span>Layers / bottom to top</span>${i}</div>${s}<div class="crop-actions">${r}</div>${Jl()}${o}`)}function hM(n){const e=h.beds[n],t=e.plants.filter(c=>c.readyAt<=Be());Te.interactionKicker.textContent="Garden grow-out",Te.interactionTitle.textContent=`Grow Bed ${n+1}`,Te.interactionSummary.textContent=`${e.plants.length} of ${e.capacity} plots used. ${t.length} crop${t.length===1?"":"s"} ready to harvest.`;const i=e.plants.length?e.plants.map(c=>`<div class="queue-slot"><b style="background:${Le[c.crop].accent}">${Le[c.crop].code}</b><span>${Le[c.crop].label}<small>${c.readyAt<=Be()?"Garden finished":"Finishing in soil"}</small></span><time>${c.readyAt<=Be()?"Ready":eo(c.readyAt)}</time></div>`).join(""):`<div class="queue-slot is-empty"><b>1</b><span>Open garden plots<small>Tower starters finish here</small></span><time>${e.capacity}</time></div>`,r=h.carry?.kind==="starter"?Rn("Transplant starter",0,`transplant-${n}`,e.plants.length>=e.capacity):"",s=[...new Set(t.map(c=>c.crop))].map(c=>`<button class="economy-command" data-harvest-crop="${c}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ht(h).basket?"disabled":""}><span>Harvest ${Le[c].label}</span><strong>${t.filter(l=>l.crop===c).length} ready</strong></button>`).join(""),o=e.capacity<4?Rn("Add garden plot",pt.bedUpgrade[n],`upgrade-bed-${n}`,Vi()<pt.bedUpgrade[n]):"",a=h.farm.owned.includes("composter")?`<div class="status-strip"><span>Enriched plantings left</span><strong>${e.soilCharges}/4</strong></div><button class="economy-command" data-enrich-bed="${n}" ${e.soilCharges||!h.farm.compost?"disabled":""}><span>Enrich soil / 1 compost</span><strong>${h.farm.compost} bags</strong></button>`:"";rn(sn,`<div class="queue-list"><span>Garden crops</span>${i}</div>${r}${s}${a}${Jl()}${o}`)}function fM(){Te.interactionKicker.textContent="Seed merchant and vault",Te.interactionTitle.textContent="Bram's Seeds",Te.interactionSummary.textContent=`${h.coins} coins / ${fl(h)} seeds per crop`;const n=["Quality seeds. Questionable hat.","I talk to my seedlings. They mostly ask for space.","Four layers, four seeds. The hat is extra."],e=h.unlockedCrops.map(t=>{const i=$l(h,t);return`<button class="crop-button" data-key="${t}" data-collect-crop="${t}" ${i.available?"":"disabled"}><i style="background:${Le[t].accent}">${Le[t].code}</i><span>${Le[t].label}<small>${h.seeds[t]}/${fl(h)} stored / ${i.amount} seeds for ${i.price} coins</small><small>${i.reason||(i.tutorial?"One free starter packet":"Buy packet")}</small></span></button>`}).join("");rn(sn,`<p class="seed-merchant-quote">Bram: ${n[h.seedShop.purchases%n.length]}</p><div class="seed-stock">${e}</div>
    ${Lh(h)?'<button class="secondary-command" data-rescue-seeds>Emergency lettuce packet / free</button>':""}
    ${Jl()}
    <button class="economy-command" data-expand-vault ${h.seedShop.expanded||!h.market.built||h.coins<oa?"disabled":""}><span>${h.seedShop.expanded?"Expanded vault / 48 per crop":h.market.built?"Expand vault / 48 per crop":"Vault expansion / open market first"}</span><strong>${h.seedShop.expanded?"Owned":oa+" coins"}</strong></button>`)}function pM(){if(Te.interactionKicker.textContent="Neighborhood market",Te.interactionTitle.textContent="Pip's Veg Stand",!h.market.built){Te.interactionSummary.textContent=h.market.openingGrant?`${h.market.openingGrant} opening coins restored. Your crops and upgrades are safe.`:"Reopen the stand to choose from three customer orders.",rn(sn,Rn("Build Veg Stand",pt.market,"build-market",h.coins<pt.market||h.taskIndex<3));return}Te.interactionSummary.textContent=`${h.stats.orders} orders complete. Three neighbors can wait, buy, or be replaced.`;const n=Rn("Open order board",0,"open-orders"),e=h.carry?.kind==="produce"?`<div class="status-strip"><span>Basket</span><strong>${pf()}</strong></div>`:"",t=h.market.level<2?Rn("Upgrade market",pt.marketUpgrade,"upgrade-market",h.coins<pt.marketUpgrade):'<div class="status-strip"><span>Market upgrade</span><strong>Family baskets active</strong></div>';rn(sn,`${e}${n}${t}`)}function mM(){Te.interactionKicker.textContent="Produce storage",Te.interactionTitle.textContent="Harvest Rack",Te.interactionSummary.textContent=`${h.carry?.kind==="produce"?h.carry.items.length:0}/${Ht(h).basket} basket slots filled`;const n=h.carry?.kind==="produce"?Rn("Stage basket",0,"stage-produce"):"",e=Dn(h),t=e?In(h,e).load:0,i=t?`<button class="economy-command" data-load-needed="${e.id}"><span>Load ${t} ${Le[e.crop].label}</span><strong>For ${e.customer}</strong></button>`:"",r=fi.filter(o=>h.rack[o]>0).map(o=>`<div class="rack-row" data-key="stock-${o}"><span>${Le[o].label}<small>${h.rack[o]} stored</small></span><input id="rack-qty-${o}" type="number" min="1" max="${Math.min(Ht(h).basket,h.rack[o])}" value="1" aria-label="${Le[o].label} quantity"><button class="storage-button" data-load-crop="${o}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ht(h).basket?"disabled":""}>Load</button></div>`).join(""),s=h.carry?.kind==="produce"?[...new Set(h.carry.items)].map(o=>`<button class="storage-button" data-store-crop="${o}">Store ${Le[o].label} (${h.carry.items.filter(a=>a===o).length})</button>`).join(""):"";rn(sn,`${i}${n}<div class="storage-actions">${s}</div><div class="storage-group"><span>Stored produce</span>${r||"<span>Rack empty</span>"}</div>`)}function gM(){const n=h.hydro;Te.interactionKicker.textContent="Shared HydroPip system",Te.interactionTitle.textContent="IBC reservoir",Te.interactionSummary.textContent="One tank. One nutrient batch. No tower return line.";const e=n.water?n.batchMixed?"Mixed starter batch":"Awaiting circulation":"Empty",t=$n(h)?n.lineClogged?"Check delivery line":Fh(h,Be())?"Short feed running":"Between timed feeds":"Waiting for mixed batch";rn(sn,`<div class="hydro-readings">
    <label>Tank level <strong>${Math.round(n.water)}%</strong><meter min="0" max="100" low="30" high="70" optimum="100" value="${n.water}" aria-label="Reservoir water"></meter></label>
  </div><div class="queue-list">
    <div class="status-strip"><span>Batch ${n.batchNumber}</span><strong>${e}</strong></div>
    <div class="status-strip"><span>Mixing pump</span><strong>${n.mixChecked?"Circulation confirmed":"Check top discharge"}</strong></div>
    <div class="status-strip"><span>Feed pump</span><strong>${t}</strong></div>
    <div class="status-strip"><span>Tower delivery</span><strong>${n.flowChecked&&!n.lineClogged?"All outlets checked":"Check top outlets"}</strong></div>
  </div><div class="storage-actions">
    <button class="secondary-command" data-service="water" ${n.water>Yl?"disabled":""}>Refill fresh batch</button>
    <button class="secondary-command" data-service="mix" ${n.water<=0||n.mixChecked?"disabled":""}>${n.mixChecked?"Mixing confirmed":n.batchMixed?"Check circulation":"Circulate batch"}</button>
    <button class="secondary-command" data-service="check" ${!$n(h)||!n.mixChecked||n.flowChecked||n.lineClogged?"disabled":""}>Check tower delivery</button>
    ${n.lineClogged?'<button class="secondary-command" data-focus-object="filter">Inspect feed filter</button>':""}
  </div><details class="system-notes"><summary>HydroPip field notes</summary>
    <p>Two pumps have different jobs: one circulates within the IBC; the other sends brief feeds to the tops of the towers. Water moves through reusable 50/50 perlite and vermiculite. Excess drains away, not back to the tank.</p>
    <p>Let the tank level fall, then mix a fresh batch. Choose real nutrient strength from plant development at refill, not per tower. Check circulation, delivery and media before assuming more fertilizer is needed. pH and optional EC/TDS readings need crop and water context.</p>
    <p>This farm uses a starter batch for its tower-to-garden succession. Real HydroPip also supports tower harvests and moving suitable mature plants into raised beds. The four-layer towers, timers and refill threshold here are simplified for play, not build dimensions or a feeding prescription.</p>
    <a href="https://hydropip-pip-api.onrender.com/field-guide" target="_blank" rel="noopener noreferrer">Open the real HydroPip Field Guide</a>
  </details>`)}function vM(){Te.interactionKicker.textContent="Farm improvements",Te.interactionTitle.textContent="Homestead Shop",Te.interactionSummary.textContent=`${Vi()} spendable coins. Production, soil care, and livestock.`;const n=Object.entries(Ji).map(([i,r])=>{const s=h.farm.owned.includes(i),o=!h.market.built||h.chapter<r.chapter;return`<div class="shop-item"><strong>${r.label}</strong><p>${r.detail}</p><button class="economy-command" data-buy-farm="${i}" ${s||o||Vi()<r.cost?"disabled":""}><span>${s?"Installed":o?`Requires ${r.chapter?"Chapter 2":"an open market"}`:"Build"}</span><strong>${s?"Owned":`${r.cost} coins`}</strong></button></div>`}).join(""),e=h.beds.map((i,r)=>i.built&&i.capacity<4?Rn(`Bed ${r+1}: add plot (${i.capacity}/4)`,pt.bedUpgrade[r],`upgrade-bed-${r}`,Vi()<pt.bedUpgrade[r]):"").join("")+h.towers.map((i,r)=>i.built&&!i.irrigationUpgraded?Rn(`Tower ${r+1}: precision drippers`,pt.queueUpgrade,`upgrade-queue-${r}`,Vi()<pt.queueUpgrade):"").join(""),t=Object.entries(qs).map(([i,r])=>{const s=h.cosmetics.owned.includes(i),o=h.cosmetics.active.includes(i);return`<button class="economy-command" ${s?`data-toggle-cosmetic="${i}"`:`data-buy-cosmetic="${i}"`} ${!s&&Vi()<pt.cosmetics[i]?"disabled":""}><span>${s?`${o?"Hide":"Show"} ${r.label}`:r.label}</span><strong>${s?"Owned":`${pt.cosmetics[i]} coins`}</strong></button>`}).join("");rn(sn,`<div class="shop-list">${n}</div><div class="queue-list"><span>Production upgrades</span>${e||"<p>All production upgrades installed.</p>"}</div><div class="queue-list"><span>Decorations</span>${t}</div>`)}function gf(n){if(!Object.hasOwn(Ji,n))return;const e=Ji[n];!e||!h.market.built||h.chapter<e.chapter||h.farm.owned.includes(n)||vi(e.cost,()=>h.farm.owned.push(n),!0)&&(Ot("build","build"),Ge(`${e.label} added to the farm.`),je("farm_upgrade"),ot())}function ks(n,e=null){const t=h.coins;let i=!1;n==="compost"&&(i=Yx(h,Be(),cs)),n==="feed"&&Le[e]&&(i=jx(h,e,Be(),cs)),n==="eggs"&&(i=Jx(h)),n==="sell-eggs"&&Math.hypot(Se.x-Qe.market.x,Se.z-Qe.market.z)<3.6&&(i=Kx(h)),n==="enrich"&&(i=Zx(h,Number(e))),i&&(Ai(h,n==="sell-eggs"?"egg-sale":n,e),Ot(n==="sell-eggs"?"sell":"service",n==="sell-eggs"?"sale":"service"),Ge({compost:"Compost batch started.",feed:"The hens are fed. Two eggs will be ready soon.",eggs:"Eggs collected; one coop clean-out added to compost scraps.","sell-eggs":"Fresh eggs sold at the stand.",enrich:"Bed enriched for its next four plantings."}[n]),je(`farm_${n}`),ot(),n==="sell-eggs"&&ai.coins(h.coins-t,Pa(Qe.market)))}function _M(n){const e=h.farm;if(Te.interactionKicker.textContent="Farm care",Te.interactionTitle.textContent=Ji[n].label,n==="rainTank")Te.interactionSummary.textContent="Collected rainwater supplements the main reservoir.",rn(sn,'<div class="status-strip"><span>Tower water consumption</span><strong>20% lower</strong></div><p>Active while tower layers grow. Refill the main reservoir as usual.</p>');else if(n==="composter")Te.interactionSummary.textContent=`${e.scraps}/24 scraps / ${e.compost}/12 compost bags`,rn(sn,`<div class="status-strip"><span>Compost batch</span><strong>${e.compostReadyAt?eo(e.compostReadyAt):"Ready to start"}</strong></div><button class="economy-command" data-farm-action="compost" ${e.compostReadyAt||e.scraps<2||e.compost>=12?"disabled":""}><span>Compost 2 scraps</span><strong>1 bag / 60s</strong></button><p>Harvest trimmings and coop clean-outs supply scraps. Apply finished compost at a garden bed.</p>`);else{Te.interactionSummary.textContent=`${e.eggs}/12 eggs packed / ${e.eggsReady} in the nest`;const t=fi.filter(i=>h.rack[i]>0);rn(sn,`<div class="status-strip"><span>Hens</span><strong>${e.coopReadyAt?eo(e.coopReadyAt):e.eggsReady?"Eggs ready":"Ready for feed"}</strong></div><div class="crop-actions">${t.map(i=>`<button class="crop-button" data-feed-hens="${i}" ${e.coopReadyAt||e.eggsReady?"disabled":""}><span>Feed 1 ${Le[i].label}<small>${h.rack[i]} on rack</small></span></button>`).join("")||"<p>No stored vegetables for feed.</p>"}</div><button class="economy-command" data-farm-action="eggs" ${!e.eggsReady||e.eggs+e.eggsReady>12?"disabled":""}><span>Collect 2 eggs</span><strong>Pack for market</strong></button><p>Sell packed eggs at the Veg Stand for 8 coins each. Hens stay safe between feedings.</p>`)}}function xM(){sn.onclick=n=>{const e=n.target.closest("button");if(!e||e.disabled)return;const t=Nt,i=JSON.stringify(h.carry),r=Number(t?.split("-")[1]);if(e.dataset.command){const s=e.dataset.command;if(s==="open-orders")return Zi();s.startsWith("repair-tower-")&&Kl(Number(s.at(-1))),s.startsWith("build-tower-")&&Zl(Number(s.at(-1))),s.startsWith("pickup-")&&Js(Number(s.at(-1))),s.startsWith("return-")&&Gi(Number(s.at(-1))),s.startsWith("transplant-")&&Ks(Number(s.at(-1))),s.startsWith("harvest-")&&Zs(Number(s.at(-1))),s.startsWith("upgrade-queue-")&&cf(Number(s.at(-1))),s.startsWith("upgrade-bed-")&&lf(Number(s.at(-1))),s==="build-market"&&Ql(),s==="upgrade-market"&&nu(),s==="stage-produce"&&Qs()}if(e.dataset.queueCrop){const s=sn.querySelector('[name="towerLayer"]:checked:not(:disabled)');nf(r,e.dataset.queueCrop,s?Number(s.value):null)}if(e.dataset.pickupJob&&Js(r,e.dataset.pickupJob),e.dataset.buyFarm&&gf(e.dataset.buyFarm),e.dataset.farmAction&&ks(e.dataset.farmAction),e.dataset.feedHens&&ks("feed",e.dataset.feedHens),e.dataset.enrichBed!==void 0&&ks("enrich",Number(e.dataset.enrichBed)),e.dataset.focusObject){Jt(e.dataset.focusObject);return}if(e.dataset.collectCrop&&Qh(e.dataset.collectCrop),e.dataset.rescueSeeds!==void 0&&ef(),e.dataset.expandVault!==void 0&&tf(),e.dataset.harvestCrop&&Zs(r,e.dataset.harvestCrop),e.dataset.loadCrop&&ma(e.dataset.loadCrop,ne(`#rack-qty-${e.dataset.loadCrop}`).value),e.dataset.storeCrop&&Qs(e.dataset.storeCrop),e.dataset.loadNeeded){const s=Dn(h);s&&ma(s.crop,In(h,s).load)}e.dataset.service&&df(e.dataset.service),e.dataset.flushLine!==void 0&&uf(),e.dataset.buyCosmetic&&hf(e.dataset.buyCosmetic),e.dataset.toggleCosmetic&&cM(e.dataset.toggleCosmetic),Tt()&&/^(tower|bed)-/.test(t)&&i!==JSON.stringify(h.carry)?on():hn.hidden&&vo(t)}}function vo(n,e=!0){if(Nn.hidden=!0,!(!n||!Qe[n])&&!(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))){if(n==="market"&&h.market.built){Nt="market",Zi();return}Nt=n,pi.hidden=!0,vn.hidden=!0,qn.hidden=!1,vs(),n.startsWith("tower-")?dM(Number(n.split("-")[1])):n.startsWith("bed-")?hM(Number(n.split("-")[1])):n==="vault"?fM():n==="market"?pM():n==="rack"?mM():n==="reservoir"?gM():n==="filter"?(Te.interactionKicker.textContent="Tower water supply",Te.interactionTitle.textContent="Feedline filter",Te.interactionSummary.textContent=h.hydro.lineClogged?"Restricted flow: tower growth at 50%. Garden crops are unaffected.":"Full flow to all connected towers.",rn(sn,`<button class="economy-command" data-flush-line ${h.hydro.lineClogged?"":"disabled"}><span>${h.hydro.lineClogged?"Clear clog":"Filter clear"}</span><strong>No cost</strong></button>`)):n==="workshop"?vM():["coop","composter","rainTank"].includes(n)&&_M(n),xM(),e&&po(),ps.textContent=ru(n)}}function on(){Nn.hidden=!0,ne("#homesteadButton").setAttribute("aria-expanded","false"),pi.hidden=!0,qn.hidden=!0,vn.hidden=!0,Ca.setAttribute("aria-expanded","false"),Nt=null,vs(),po()}function La(){h.market.built&&(on(),ti=null,Vn=null,ri=null,ui(),Nn.hidden=!1,ne("#homesteadButton").setAttribute("aria-expanded","true"),ua.render(h),vs())}function vf(n,e){if(n==="close")return on();if(n==="render")return ua.render(h);if(!h.market.built)return;if(n==="focus"){const o=Object.hasOwn(Ji,e)&&!h.farm.owned.includes(e)?"workshop":e;return on(),Jt(o)}const t=h.coins,i=h.xp,r=mr(h);let s=!1;if(n==="project"&&(s=Ox(h,e)),n==="mastery"&&(s=Fx(h,e)),n==="request-accept"&&(s=Bx(h,e)),n==="request-claim"&&(s=zx(h)),n==="request-refresh"&&(s=Hx(h)),n==="request-abandon"&&h.homestead.request&&(h.homestead.request=null,h.homestead.requestSerial++,s=!0),n==="pin"&&Hn(h).some(o=>o.id===e&&o.chapter<=h.chapter)&&(h.homestead.pinned=e,s=!0),!!s){if(["project","mastery","request-claim"].includes(n)){Ot("celebrate","task-complete");const o=n==="project"&&{3:" Your basket now holds 7 crops.",6:" Seed packets now contain 6 seeds at the same price.",12:" Tower water use is now 10% lower.",18:" The harvest festival display is installed."}[h.homestead.claimed.length];Ge(mr(h)?"Master Grower! Your homestead and crop book are complete. New community requests await.":`Reward earned.${o||""}`)}if(je(`homestead_${n}`),ot(),ua.render(h),["project","mastery","request-claim"].includes(n)){const o=!r&&mr(h),a=Xi.find(d=>d.id===e),c=h.homestead.claimed.length,l=n==="project"&&{3:"Basket expanded to 7 crops!",6:"Six seeds in every packet!",12:"10% less tower water use!",18:"Harvest festival unlocked!"}[c],u=o?"Master Grower!":n==="project"?a.title:n==="mastery"?`${Le[e].label} mastery ${h.homestead.mastery[e]}/3`:"Community request complete!";ai.celebrate({title:u,detail:`+${h.coins-t} coins / +${h.xp-i} XP${l?`. ${l}`:""}${n==="mastery"?" / +2 seeds":""}`,major:o||n==="project"||n==="mastery"&&h.homestead.mastery[e]===3,rhythm:o||n==="project"&&c%3===0}),ai.coins(h.coins-t,Pa())}}}function _f(){if(h.campaignComplete)return La();Nn.hidden=!0,qn.hidden=!0,vn.hidden=!0,pi.hidden=!1,Ca.setAttribute("aria-expanded","true"),vs(),ff()}function Zi(){Nn.hidden=!0,h.market.built&&(Nt="market",pi.hidden=!0,qn.hidden=!0,vn.hidden=!1,vs(),go(),h.tutorial.marketSeen||(h.tutorial.marketSeen=!0,je("market_seen")))}function ru(n=Nt){if(Tt()&&!Nt&&h.carry?.kind==="starter")return Sn()?"Transplant":"Return";if(!Nt&&Qr())return"Deliver";if(!n)return h.carry?.kind==="starter"&&Sn()<=0?"Return":h.carry?.kind==="produce"&&h.carry.items.length>=Ht(h).basket&&h.market.built?Qr()?"Deliver":"Stage":li()?"Guide":"Inspect";const e=li();if(n==="vault")return"Seeds";if(n==="market"){const t=Dn(h)||ls();return h.market.built&&t&&In(h,t).needed===0?"Deliver":h.market.built?"Orders":"Build"}if(n==="rack")return h.carry?.kind==="produce"?"Stage":"Inspect";if(n==="reservoir")return"Service";if(n==="filter")return h.hydro.lineClogged?"Clear clog":"Inspect";if(n==="workshop")return"Shop";if(n.startsWith("tower-")){const t=Number(n.split("-")[1]),i=h.towers[t];return i.built?i.repaired?h.carry?.kind==="starter"&&h.carry.sourceTower===t?"Return":Mr(i,Be())&&!h.carry?"Pick up":"Plan":"Repair":"Build"}if(n.startsWith("bed-")){const t=Number(n.split("-")[1]);return h.carry?.kind==="starter"&&h.beds[t].plants.length>=h.beds[t].capacity&&Sn()<=0?"Return":h.carry?.kind==="starter"?"Transplant":h.beds[t].plants.some(i=>i.readyAt<=Be())?"Harvest":!Nt&&e&&e!==n?"Guide":"Inspect"}return"Inspect"}function xf(){if(Ut||!En.hidden||!hn.hidden||!Qi.hidden||!ho.hidden)return;Ar();const n=!!Nt,e=Nt||yf();if(Tt()&&!n&&h.carry?.kind==="starter"){const i=rf()||`tower-${h.carry.sourceTower}`;return i===e?i.startsWith("bed-")?Ks(Number(i.split("-")[1])):Gi(h.carry.sourceTower):Jt(i,!0)}if(!n&&Qr()){const i=Dn(h),r=i&&In(h,i).needed===0?i:h.orders.find(s=>s.status==="waiting"&&In(h,s).needed===0);return ga(h.orders.indexOf(r))}if(!e){if(h.carry?.kind==="starter"&&Sn()<=0){Ge("Beds are full, so Pip is returning this starter to its tower."),Jt(`tower-${h.carry.sourceTower}`);return}if(h.carry?.kind==="produce"&&h.carry.items.length>=Ht(h).basket&&h.market.built){Ge("Basket is full, so Pip is heading to the Harvest Rack."),Jt("rack");return}const i=li();if(i){Jt(i,Tt());return}_f();return}if(e.startsWith("tower-")){const i=Number(e.split("-")[1]),r=h.towers[i];if(!r.built)return Zl(i);if(!r.repaired)return Kl(i);if(h.carry?.kind==="starter"&&h.carry.sourceTower===i)return Gi(i);if(Mr(r,Be())&&!h.carry)return Js(i)}if(e.startsWith("bed-")){const i=Number(e.split("-")[1]);if(h.carry?.kind==="starter"&&h.beds[i].plants.length>=h.beds[i].capacity&&Sn()<=0)return Gi(h.carry.sourceTower);if(h.carry?.kind==="starter")return Ks(i);if(h.beds[i].plants.some(r=>r.readyAt<=Be())){const r=Dn(h)?.crop;return Zs(i,r&&h.beds[i].plants.some(s=>s.crop===r&&s.readyAt<=Be())?r:null)}}if(e==="market"&&h.market.built){const i=Dn(h)||ls();return i&&In(h,i).needed===0?ga(h.orders.indexOf(i)):Zi()}if(e==="market"&&!h.market.built)return Ql();if(e==="rack"&&h.carry?.kind==="produce")return Qs();if(e==="filter"&&h.hydro.lineClogged)return uf();if(h.carry?.kind==="starter"&&Sn()<=0)return Gi(h.carry.sourceTower);const t=li();if(!n&&t&&t!==e)return Jt(t,Tt());vo(e)}function yf(n=1.8){let e=null,t=n;return Object.entries(Qe).forEach(([i,r])=>{if(["coop","composter","rainTank"].includes(i)&&!h.farm.owned.includes(i)||i.startsWith("bed-")&&!h.beds[Number(i.split("-")[1])].built)return;const s=Math.hypot(Se.x-r.x,Se.z-r.z);s<t&&(e=i,t=s)}),e}function Jt(n,e=!1){if(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))return;const t=Qe[n];t&&(Vn=null,ri=null,ti=n,la=e,Se.target={x:t.x,z:t.z+(n==="market"?1.3:1.15)},on(),!Tt()&&Ge(`Pip is heading to ${n.startsWith("tower")?`Tower ${Number(n.at(-1))+1}`:n.startsWith("bed")?`Grow Bed ${Number(n.at(-1))+1}`:n==="vault"?"the Seed Vault":n==="market"?"the Veg Stand":n==="rack"?"the Harvest Rack":n==="reservoir"?"the reservoir":n==="filter"?"the feed filter":Object.hasOwn(Ji,n)?`the ${Ji[n].label}`:"the farm shop"}.`))}function yM(n){const e=Number(n.split("-")[1]);if(n.startsWith("tower-")){if(h.carry?.kind==="starter"&&h.carry.sourceTower===e)return Gi(e),!0;const t=h.towers[e].queue.filter(i=>i.readyAt!==null&&i.readyAt<=Be());if(!h.carry&&t.length&&new Set(t.map(i=>i.crop)).size===1)return Js(e),!0}if(n.startsWith("bed-")){if(h.carry?.kind==="starter")return Ks(e),!0;const t=h.beds[e].plants.filter(r=>r.readyAt<=Be()),i=Dn(h)?.crop;if(t.length&&(new Set(t.map(r=>r.crop)).size===1||t.some(r=>r.crop===i)))return Zs(e,t.some(r=>r.crop===i)?i:t[0].crop),!0}return n==="rack"&&h.carry?.kind==="produce"?(Qs(),!0):!1}function MM(n){if(Ut)return;let e=(un.right?1:0)-(un.left?1:0)+ca.x,t=(un.down?1:0)-(un.up?1:0)+ca.z;if(Se.target&&!e&&!t){const o=Se.target.x-Se.x,a=Se.target.z-Se.z,c=Math.hypot(o,a);if(c<.16){if(Se.target=null,ti){const l=ti;ti=null;const u=la;la=!1;const d=Vn;Vn=null;const f=ri;if(ri=null,l==="market"&&d){const p=h.orders.findIndex(g=>g.id===d&&g.status==="waiting");p>=0?tu(p):Ge("That customer has left. Your produce is still in the basket."),hn.hidden&&!Tt()&&Zi()}else if(l==="rack"&&f){const p=h.orders.find(g=>g.id===f&&g.status==="waiting");p&&ma(p.crop,In(h,p).load),Zi()}else{const p=l.startsWith("tower-")&&h.carry?.kind==="starter"&&h.carry.sourceTower===Number(l.split("-")[1])&&Sn()<=0;p&&Gi(h.carry.sourceTower),Tt()&&(p||u&&yM(l))||vo(l)}}}else e=o/c,t=a/c}else(e||t)&&(Se.target=null,ti=null,Vn=null,ri=null);const i=!!(e||t);if(i){const o=Math.hypot(e,t);e/=Math.max(1,o),t/=Math.max(1,o),Se.x=Dt.clamp(Se.x+e*Se.speed*n,-13.8,13.8),Se.z=Dt.clamp(Se.z+t*Se.speed*n,-8.5,8.5),Se.pendingFacing=Math.atan2(e,t),Se.direction=Math.abs(e)>Math.abs(t)?e>0?"east":"west":t>0?"south":"north",wt.rotation.y=Dt.lerp(wt.rotation.y,Se.pendingFacing,Math.min(1,n*12))}wt.position.x=Se.x,wt.position.z=Se.z;const r=wt.userData.parts;if(r){i&&(Se.gaitPhase+=Se.speed*n*1.65);const o=Math.sin(Se.gaitPhase),a=Math.min(1,n*14);if(r.body.position.y=i?Math.abs(o)*.014:Math.sin(performance.now()*.0018)*.005,r.body.rotation.x=0,r.legs.forEach((c,l)=>{const u=l?-o:o;c.rotation.x=Dt.lerp(c.rotation.x,i?-u*.4:0,a),r.knees[l].rotation.x=Dt.lerp(r.knees[l].rotation.x,i?Math.max(0,-u)*.38:0,a),r.boots[l].rotation.x=-c.rotation.x-r.knees[l].rotation.x*.7;const d=r.arms[l];d.rotation.x=Dt.lerp(d.rotation.x,h.carry?-.75:i?u*.28:0,a),d.rotation.z=(l?1:-1)*(h.carry?-.08:.08),r.elbows[l].rotation.x=Dt.lerp(r.elbows[l].rotation.x,h.carry?-.65:-.08,a)}),Se.actionTime>0){Se.actionTime-=n;const c=Math.sin((1-Se.actionTime/.72)*Math.PI);["plant","transplant","harvest"].includes(Se.action)&&(r.body.rotation.x=c*.22),["repair","service","build"].includes(Se.action)&&(r.arms[0].rotation.x=-1.2*c),Se.action==="sell"&&(r.arms[1].rotation.x=-1.25*c),Se.action==="celebrate"&&(r.arms[0].rotation.x=-1.5*c,r.arms[1].rotation.x=-1.5*c,r.body.position.y+=c*.13)}else r.body.rotation.x=0,Se.action=i?"run":"idle"}const s=yf();Nt||(ps.textContent=ru(s))}function Da(n,e=!1){const t=Tt(),i=new I(Se.x*(t?.95:.55),.45,Se.z*(t?.9:.45));t&&!vn.hidden&&i.set(Qe.market.x+.3,.45,Qe.market.z+2.8),e||h.settings.reducedMotion?$o.copy(i):$o.lerp(i,1-Math.exp(-n*5));const s=t?Dt.clamp(ni/520,.45,1):1;Rt.position.copy($o).add(new I(7.7,13,14.3).multiplyScalar(s)),Rt.lookAt($o),Rt.zoom=e||h.settings.reducedMotion?Gn:Dt.lerp(Rt.zoom,Gn,1-Math.exp(-n*12));const o=t&&[qn,vn,pi,Nn].find(p=>!p.hidden),a=t&&qi>620&&innerWidth>innerHeight,c=o&&a?o.getBoundingClientRect().width*.5:0,l=o&&!a?o.getBoundingClientRect().height*.4:0,u=e||h.settings.reducedMotion?1:1-Math.exp(-n*6),d=Dt.lerp(Rt.view?.enabled?Rt.view.offsetX:0,c,u),f=Dt.lerp(Rt.view?.enabled?Rt.view.offsetY:0,l,u);d>.1||f>.1?Rt.setViewOffset(qi,ni,d,f,qi,ni):Rt.clearViewOffset(),Rt.updateProjectionMatrix(),Rt.updateMatrixWorld()}function _s(n){Gn=Dt.clamp(n,.7,Tt()?1.3:1.55),ne("#zoomOut").disabled=Gn<=.7001,ne("#zoomIn").disabled=Gn>=(Tt()?1.3:1.55)-1e-4}function bM(){_t.updateMatrixWorld(!0);const n=Un.getBoundingClientRect(),e=[Ca,Ys,zh,gr,ne(".camera-tools"),qn,vn,pi,Nn,...Tt()?[ne("#thumbstick"),ps,ne("#homesteadButton")]:[]].filter(u=>!u.hidden&&u.getClientRects().length&&getComputedStyle(u).visibility!=="hidden").map(u=>{const d=u.getBoundingClientRect();return{left:d.left-n.left,top:d.top-n.top,right:d.right-n.left,bottom:d.bottom-n.top}}),t=li(),i=new Set(Ra()),r=new I;function s(u,d,f,p,g){const _={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(const v of[-f,f])for(const m of[0,p])for(const S of[-g,g]){r.set(u+v,m,d+S).project(Rt);const b=(r.x+1)*qi/2,x=(1-r.y)*ni/2;_.left=Math.min(_.left,b),_.right=Math.max(_.right,b),_.top=Math.min(_.top,x),_.bottom=Math.max(_.bottom,x)}return _}vl=s(Se.x,Se.z,.65,2.15,.45),e.push(vl);for(const u of _t.children)u.userData.customerIndex!==void 0&&e.push(s(u.position.x,u.position.z,.45,2.2,.3));const o=[];for(const u of js){const d=u.userData.worldLabel;u.getWorldPosition(r);const f=Math.hypot(r.x-Se.x,r.z-Se.z),p=-r.clone().applyMatrix4(Rt.matrixWorldInverse).z;if(r.project(Rt),u.visible=!1,u.labelElement.hidden=!0,f>(Tt()?4.8:5.4)||p<=0||r.z<-1||r.z>1)continue;const g=(r.x+1)*qi/2,_=(1-r.y)*ni/2,v={left:g-d.width/2,right:g+d.width/2,top:_-d.height/2,bottom:_+d.height/2};if(v.left<6||v.right>qi-6||v.top<6||v.bottom>ni-6)continue;const m=u.userData.interactiveId;if(u.labelElement.classList.toggle("needs-attention",i.has(m)),!vn.hidden&&m!=="market"&&m!=="rack")continue;const S=(m===Nt?200:m===t?100:0)+(/ready/i.test(d.text)?20:0)-f;o.push({label:u,data:d,box:v,depth:p,priority:S})}o.sort((u,d)=>d.priority-u.priority);const a=(u,d)=>u.left<d.right+5&&u.right>d.left-5&&u.top<d.bottom+5&&u.bottom>d.top-5;let c=0;const l=new Set;for(const{label:u,data:d,box:f,depth:p}of o){const g=u.userData.interactiveId;if(c>=(Tt()?3:5)||l.has(g))continue;const _=[0,-32,32].find(v=>{const m={...f,top:f.top+v,bottom:f.bottom+v};return m.top>=6&&m.bottom<=ni-6&&!e.some(S=>a(m,S))});_!==void 0&&(f.top+=_,f.bottom+=_,u.visible=!0,u.labelElement.hidden=!1,u.labelElement.style.transform=`translate(${Math.round(f.left)}px, ${Math.round(f.top)}px)`,d.bounds=f,e.push(f),l.add(g),c+=1)}}function wM(n){const e=$n(h);Ty(h,n,Be(),(h.farm.owned.includes("rainTank")?.8:1)*Ht(h).water),e&&wy(h,n,Be())&&(Ge("Feed filter clogged. Check the delivery line before changing the nutrient batch.",6500),je("feedline_clogged"))}function SM(){if(!h.market.built)return;let n=!1;h.orders.forEach((e,t)=>{e.id===h.selectedOrderId||e.id===Vn||e.expiresAt>Be()||(e.status==="waiting"?(e.status="cooldown",e.expiresAt=Be()+12e3*cs,n=!0):(sM(t),n=!0))}),n?(je(),ot()):vn.hidden||go()}function Mf(n){const e=lo[n.chapter];Te.chapterResultKicker.textContent=n.reward.campaignComplete?"Homestead foundations complete":`Chapter ${e.number} complete`,Te.chapterResultTitle.textContent=n.reward.campaignComplete?"The Pro Yard is thriving.":n.chapter===0?"The Homestead is growing.":"Split Flow is balanced.",Te.chapterResultSummary.textContent=n.reward.campaignComplete?"Your four-tower farm is open. Complete 18 homestead projects and earn 15 crop mastery badges to become a Master Grower.":n.chapter===0?"The first tower and Veg Stand are back in business.":"Three production lanes are ready for the Pro Yard build.",Te.chapterCoins.textContent=`+${n.reward.coins||0}`,Te.chapterXp.textContent=`+${n.reward.xp||0}`,Te.chapterUnlock.textContent=n.reward.campaignComplete?"Homestead projects":n.chapter===0?"Split Flow":"Pro Yard",ne("#continueChapter").textContent=n.reward.campaignComplete?"Grow the homestead":"Continue",hn.hidden=!1,Ut=!0,ui(),ms.stop(),ai.chapter(hn,!!n.reward.campaignComplete),ne("#continueChapter").focus(),je("chapter_complete"),Wn(n.reward.campaignComplete?"campaign_complete":"campaign_chapter_complete",{chapter:n.chapter+1,coins:h.coins,xp:h.xp})}function ot(){iu(),ff(),mf(),!qn.hidden&&Nt&&vo(Nt,!1),vn.hidden||go(),po()}function Ia(){const n=Un.getBoundingClientRect();qi=Math.max(1,n.width),ni=Math.max(1,n.height);const e=uo?1:da==="desktop"?1.55:fs?1.25:1.15;Et.setPixelRatio(Math.max(1,Math.min(window.devicePixelRatio||1,e))),Et.setSize(Math.max(1,n.width),Math.max(1,n.height),!1),Rt.aspect=Math.max(.2,n.width/Math.max(1,n.height)),Rt.updateProjectionMatrix(),_s(Gn),Da(1,!0)}function ui(){Hh?.reset(),Object.keys(un).forEach(n=>{un[n]=!1}),ne(".campaign-controls").querySelectorAll("[data-move]").forEach(n=>n.classList.remove("is-active"))}function bf(n){if(Ut=n,document.body.classList.toggle("is-paused",Ut),Cy.hidden=!Ut,Ut){ui(),ms.stop(),je("pause");return}Ar()}function wf(n){const e=Math.min(.05,(n-Rd)/1e3||0);Rd=n,!Ut&&En.hidden&&hn.hidden&&(MM(e),wM(e),Zy(e),Qy(e),Da(e),n-Pd>500&&(Pd=n,h=Er(h),SM(),iu(),mf(),Jh()!==Gh&&po(),Oy(),!qn.hidden&&Nt&&vo(Nt,!1)),n-Vh>5e3&&je(),ea&&n>ea&&(Ys.textContent=Xn(h)?.detail||"The homestead is ready for its next grow.",ea=0,Ys.classList.remove("is-active"))),Hy(),bM(),Et.render(ci,Rt),xc+=1,n-_c>=3e3&&(xc/(n-_c)*1e3<32&&da==="desktop"&&(da="adaptive",Et.shadowMap.enabled=!1,Yn.castShadow=!1,Et.setPixelRatio(Math.min(window.devicePixelRatio||1,1.15)),Ia()),_c=n,xc=0),requestAnimationFrame(wf)}function EM(n){const e=Et.domElement.getBoundingClientRect();Mc.x=(n.clientX-e.left)/e.width*2-1,Mc.y=-((n.clientY-e.top)/e.height)*2+1,yc.setFromCamera(Mc,Rt);const i=yc.intersectObjects(_t.children,!0).find(o=>o.object.visible&&(o.object.userData.interactiveId||o.object.userData.instanceTargets?.[o.instanceId]));if(i){let o=i.object;for(;o&&!o.userData.orderId;)o=o.parent;return{id:i.object.userData.interactiveId||i.object.userData.instanceTargets[i.instanceId],orderId:o?.userData.orderId}}const r=new zi(new I(0,1,0),0),s=new I;return yc.ray.intersectPlane(r,s)?{point:s}:null}function rt(){const n=Xn(h),e=vy(h);return{version:h.version,chapter:h.chapter,taskIndex:h.taskIndex,taskId:n?.id||null,coins:h.coins,xp:h.xp,level:h.level,challengeUnlocked:h.challengeUnlocked,campaignComplete:h.campaignComplete,proPip:h.proPip,unlockedCrops:[...h.unlockedCrops],towersBuilt:h.towers.filter(t=>t.built).length,bedsBuilt:h.beds.filter(t=>t.built).length,marketBuilt:h.market.built,marketLevel:h.market.level,milestones:mo(n),selectedObject:Nt,selectedOrderId:h.selectedOrderId,saleAnimations:Us.length,pendingDeliveryId:Vn,pendingRackOrderId:ri,pipTarget:Se.target,queueCapacities:h.towers.map(t=>t.queueCapacity),irrigationUpgrades:h.towers.map(t=>t.irrigationUpgraded),specializations:h.towers.map(t=>t.specialization),queueCount:h.towers.reduce((t,i)=>t+i.queue.length,0),gardenCount:h.beds.reduce((t,i)=>t+i.plants.length,0),seeds:{...h.seeds},rack:{...h.rack},carry:h.carry?JSON.parse(JSON.stringify(h.carry)):null,orders:h.orders.map(t=>({...t})),featuredOrder:ls()?{...ls()}:null,stats:JSON.parse(JSON.stringify(h.stats)),ledger:e,openBedCount:Sn(),taskDrawerOpen:!pi.hidden,interactionOpen:!qn.hidden,orderDrawerOpen:!vn.hidden,welcomeVisible:!En.hidden,chapterResultVisible:!hn.hidden,guideTarget:li(),actionLabel:ps.textContent,marketChipVisible:!gr.hidden,marketChipText:gr.hidden?"":gr.textContent.trim().replace(/\s+/g," "),paused:Ut,pipPosition:{x:Number(Se.x.toFixed(2)),z:Number(Se.z.toFixed(2))},pipDirection:Se.direction,pipHeight:Number(new Ii().setFromObject(wt).getSize(new I).y.toFixed(3)),leafEarCount:wt.userData.parts?.leafEars?.length||0,activeHudCoverage:TM(),coreTextMinimum:AM(),savePresent:!!localStorage.getItem(co),performanceTier:da,renderCalls:Et.info.render.calls,renderTriangles:Et.info.render.triangles}}function TM(){const n=Un.getBoundingClientRect(),t=["#objectiveBar","#campaignMessage","#carryChip","#marketChip"].map(i=>ne(i)).filter(i=>i&&!i.hidden&&i.getClientRects().length).reduce((i,r)=>{const s=r.getBoundingClientRect(),o=Math.max(0,Math.min(s.right,n.right)-Math.max(s.left,n.left)),a=Math.max(0,Math.min(s.bottom,n.bottom)-Math.max(s.top,n.top));return i+o*a},0);return Number((t/Math.max(1,n.width*n.height)).toFixed(3))}function AM(){const n=[...document.querySelectorAll("#objectiveTitle,#campaignMessage,#actionButton,#marketChip strong,#carryContents,#coinValue,#levelValue,#xpValue,#chapterValue,#interactionPanel>p,.crop-button span,.crop-button small,.queue-slot time,.status-strip,.economy-command span,.order-card h3,.order-reward,.order-actions button,.task-row,.primary-task p")].filter(e=>e.getClientRects().length);return Math.min(...n.map(e=>Number.parseFloat(getComputedStyle(e).fontSize)))}function CM(){h.towers.forEach(n=>n.queue.forEach((e,t)=>{e.startedAt=Be()-1e3,e.readyAt=Be()-1})),je(),ot()}function RM(){h.beds.forEach(n=>n.plants.forEach(e=>{e.plantedAt=Be()-1e3,e.readyAt=Be()-1})),je(),ot()}function PM(n=500){h.coins+=n,je(),ot()}Ly();ot();Ia();En.hidden=h.tutorial.welcomeSeen;h.tutorial.welcomeSeen?Wn("campaign_resume",{chapter:h.chapter+1,task:Xn(h)?.id||"complete"}):Ut=!0;Ca.addEventListener("click",()=>h.campaignComplete?La():pi.hidden?_f():on());ne("#homesteadButton").addEventListener("click",()=>Nn.hidden?La():on());gr.addEventListener("click",()=>h.market.built?Zi():Jt("market"));ne("#orderMarketUpgrade").addEventListener("click",()=>{nu(),go()});ne("#sellFarmEggs").addEventListener("click",()=>{Math.hypot(Se.x-Qe.market.x,Se.z-Qe.market.z)>=3.6?Jt("market"):ks("sell-eggs")});ne("#closeTasks").addEventListener("click",on);ne("#closeInteraction").addEventListener("click",on);ne("#closeOrders").addEventListener("click",on);ne("#focusTaskButton").addEventListener("click",()=>Jt(li()));ps.addEventListener("click",xf);ne("#beginCampaign").addEventListener("click",()=>{h.tutorial.welcomeSeen=!0,En.hidden=!0,Ut=!1,Ar(),je("campaign_start"),Wn("campaign_start",{chapter:h.chapter+1,task:Xn(h)?.id}),Ge("Repair Tower 1 to make the first permanent improvement.")});ne("#pauseButton").addEventListener("click",()=>bf(!0));ne("#resumeButton").addEventListener("click",()=>bf(!1));let Sf=!1;ne("#settingsButton").addEventListener("click",()=>{Sf=Ut,Ut=!0,ms.stop(),ui(),je("settings_open"),Qi.hidden=!1,ne("#highContrastSetting").checked=h.settings.highContrast,ne("#reducedMotionSetting").checked=h.settings.reducedMotion,ne("#musicSetting").value=String(Math.round(h.settings.musicVolume*100)),ne("#effectsSetting").value=String(Math.round(h.settings.effectsVolume*100)),Te.musicValue.textContent=`${Math.round(h.settings.musicVolume*100)}%`,Te.effectsValue.textContent=`${Math.round(h.settings.effectsVolume*100)}%`});function su(){LM.cancelImport(),Qi.hidden=!0,Ut=Sf,ui(),je("settings")}ne("#closeSettings").addEventListener("click",su);ne("#settingsDone").addEventListener("click",su);ne("#retrySave").addEventListener("click",()=>je("retry"));const LM=xy(()=>h,n=>{h=n});ne("#saveWarning").addEventListener("click",()=>ne("#settingsButton").click());ne("#highContrastSetting").addEventListener("change",n=>{h.settings.highContrast=n.target.checked,iu()});ne("#reducedMotionSetting").addEventListener("change",n=>{h.settings.reducedMotion=n.target.checked,n.target.checked&&ai.clearMotion()});ne("#musicSetting").addEventListener("input",n=>{h.settings.musicVolume=Number(n.target.value)/100,Te.musicValue.textContent=`${n.target.value}%`,gs()});ne("#effectsSetting").addEventListener("input",n=>{h.settings.effectsVolume=Number(n.target.value)/100,Te.effectsValue.textContent=`${n.target.value}%`,gs()});ne("#soundButton").addEventListener("click",()=>{h.settings.soundEnabled=h.settings.soundEnabled===!1,gs(),je("sound_toggle"),h.settings.soundEnabled&&Ar()});gs();ne("#resetFarm").addEventListener("click",()=>{Qi.hidden=!0,ho.hidden=!1});ne("#cancelReset").addEventListener("click",()=>{ho.hidden=!0,Qi.hidden=!1});ne("#confirmReset").addEventListener("click",()=>{h=gy(),location.reload()});ne("#continueChapter").addEventListener("click",()=>{hn.hidden=!0,ai.clearMotion(),Cs=null,Ut=!1,Ot("celebrate","task-complete"),je("chapter_continue"),Ge(Xn(h)?.story||"The homestead is ready for its next grow."),h.campaignComplete&&La()});ne("#zoomOut").addEventListener("click",()=>_s(Gn/1.15));ne("#zoomIn").addEventListener("click",()=>_s(Gn*1.15));ne("#recenter").addEventListener("click",()=>{_s(1),Da(1,!0)});Un.addEventListener("wheel",n=>{if(Ut||!En.hidden||!hn.hidden)return;n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?ni:1);_s(Gn*Math.exp(-Dt.clamp(e,-160,160)*.0015))},{passive:!1});function Ef(n){if(Ut||!En.hidden||!hn.hidden)return;Ar();const e=EM(n);if(e)if(e.orderId){const t=h.orders.findIndex(i=>i.id===e.orderId&&i.status==="waiting");t>=0&&(af(t),In(h,h.orders[t]).needed===0?ga(t):Zi())}else e.id?Jt(e.id,Tt()):e.point&&(on(),ti=null,Vn=null,ri=null,Se.target={x:Dt.clamp(e.point.x,-13.8,13.8),z:Dt.clamp(e.point.z,-8.5,8.5)})}Hh=by({canMove:()=>!Ut&&En.hidden&&hn.hidden&&Qi.hidden&&ho.hidden,onStart:()=>{(Nt||[qn,vn,pi,Nn].some(n=>!n.hidden))&&on(),ai.dismiss(),ui(),Ar(),Se.target=null,ti=null,Vn=null,ri=null,la=!1},onMove:(n,e)=>{ca.x=n*.88+e*.47,ca.z=e*.88-n*.47},onLayout:()=>{ui(),Ia()},closePanels:on});const Ri=new Map;let Os=null,xl=!1;Un.addEventListener("pointerdown",n=>{if(n.pointerType!=="touch")return Ef(n);if(Un.setPointerCapture(n.pointerId),Ri.set(n.pointerId,{x:n.clientX,y:n.clientY,startX:n.clientX,startY:n.clientY}),Ri.size===2){const[e,t]=[...Ri.values()];Os={distance:Math.max(1,Math.hypot(e.x-t.x,e.y-t.y)),zoom:Gn},xl=!0,Se.target=null,ti=null,Vn=null,ri=null}});Un.addEventListener("pointermove",n=>{const e=Ri.get(n.pointerId);if(e&&(e.x=n.clientX,e.y=n.clientY,Ri.size===2&&Os&&!Ut&&En.hidden&&hn.hidden)){const[t,i]=[...Ri.values()];_s(Os.zoom*Math.hypot(t.x-i.x,t.y-i.y)/Os.distance)}});function Tf(n){const e=Ri.get(n.pointerId);e&&!xl&&n.type==="pointerup"&&Math.hypot(n.clientX-e.startX,n.clientY-e.startY)<10&&Ef(n),Ri.delete(n.pointerId),Ri.size||(xl=!1,Os=null)}Un.addEventListener("pointerup",Tf);Un.addEventListener("pointercancel",Tf);document.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(e==="escape"){if(n.preventDefault(),!Qi.hidden){su();return}on();return}n.target instanceof HTMLElement&&n.target.matches("button,input,a,textarea,select")||(["arrowleft","arrowright","arrowup","arrowdown"," "].includes(e)&&n.preventDefault(),(e==="arrowleft"||e==="a")&&(un.left=!0),(e==="arrowright"||e==="d")&&(un.right=!0),(e==="arrowup"||e==="w")&&(un.up=!0),(e==="arrowdown"||e==="s")&&(un.down=!0),n.code==="Space"&&!n.repeat&&xf())});document.addEventListener("keyup",n=>{const e=n.key.toLowerCase();(e==="arrowleft"||e==="a")&&(un.left=!1),(e==="arrowright"||e==="d")&&(un.right=!1),(e==="arrowup"||e==="w")&&(un.up=!1),(e==="arrowdown"||e==="s")&&(un.down=!1)});document.querySelectorAll("[data-move]").forEach(n=>{const e=n.dataset.move,t=i=>{un[e]=i,n.classList.toggle("is-active",i)};n.addEventListener("pointerdown",i=>{i.preventDefault(),n.setPointerCapture(i.pointerId),t(!0)}),n.addEventListener("pointerup",()=>t(!1)),n.addEventListener("pointercancel",()=>t(!1)),n.addEventListener("pointerleave",()=>t(!1))});window.addEventListener("blur",ui);window.addEventListener("resize",Ia);window.addEventListener("pagehide",()=>{ui(),je("pagehide")});document.addEventListener("visibilitychange",()=>{document.hidden?(ui(),je("visibility")):(h=Er(ql()),gs(),ot())});Bh&&(window.__HYDROPIP_CAMPAIGN_TEST__={homesteadAction:vf,homesteadView(){return{...h.homestead,complete:mr(h),perks:Ht(h),active:Hn(h).map(n=>({id:n.id,ready:Sa(h,n),goals:oo(h,n)}))}},neighborhoodView(){return jr.snapshot()},neighborhoodEvent(n,e=0){jr.start(n);for(let t=0;t<e;t+=.05)jr.update(.05,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});return jr.snapshot()},farmEquipmentView(){const n=_t.getObjectByName("farm coop");return{owned:h.farm.owned,hens:(n?.userData.hens||[]).map(e=>({position:e.position.toArray(),turn:e.rotation.y}))}},layerScreenPoint(n,e){const t=Qe[`tower-${n}`].clone();t.y=.52+e*.61+.4,t.x+=e%2?.16:-.16,t.z+=.29-e*.18,t.project(Rt);const i=Et.domElement.getBoundingClientRect();return{x:i.left+(t.x+1)*i.width/2,y:i.top+(1-t.y)*i.height/2}},farmLayout(){return{positions:Object.fromEntries(Object.entries(Qe).map(([n,e])=>[n,{x:e.x,z:e.z}])),attention:Ra(),labels:js.filter(n=>n.visible).map(n=>({id:n.userData.interactiveId,text:n.userData.worldLabel.text,distance:Math.hypot(n.getWorldPosition(new I).x-Se.x,n.getWorldPosition(new I).z-Se.z)})),feedline:!!_t.getObjectByName("reservoir tower feedline"),lineClogged:h.hydro.lineClogged}},snapshot:rt,reservoirView(){return ny(_t.getObjectByName("water reservoir"))},setWater(n){return h.hydro.water=Dt.clamp(n,0,100),je("test-water"),rt()},viewState(){return{zoom:Rt.zoom,targetZoom:Gn,pipBounds:vl,direction:Rt.getWorldDirection(new I).toArray(),labels:js.filter(n=>n.visible).map(n=>({...n.userData.worldLabel,opacity:1}))}},customerView(){const n=new fh;return _t.children.filter(e=>e.userData.customerIndex!==void 0).map(e=>{const t=e.localToWorld(new I(0,1.65,0)).project(Rt);n.setFromCamera(new de(t.x,t.y),Rt);let i=n.intersectObjects(_t.children,!0).find(r=>r.object.visible)?.object;for(;i&&i.parent!==_t;)i=i.parent;return{index:e.userData.customerIndex,x:(t.x+1)*qi/2,y:(1-t.y)*ni/2,unoccluded:i===e}})},focusObject:Jt,characterPortrait(n=.22){const e=new Il;e.background=new at(8894381),e.add(new zl(16775142,6585696,1.3));const t=new Ma(16773330,1.5);t.position.set(-3,5,5),e.add(t);const i=yh(h.proPip);i.rotation.y=n,e.add(i);const r=new pn(30,.8,.1,20);r.position.set(0,1.8,6),r.lookAt(0,1.23,0);const s=480,o=600,a=new Pi(s,o);a.texture.colorSpace=Qt;const c=Et.getRenderTarget();try{Et.setRenderTarget(a),Et.render(e,r);const l=new Uint8Array(s*o*4);Et.readRenderTargetPixels(a,0,0,s,o,l);const u=document.createElement("canvas");u.width=s,u.height=o;const d=u.getContext("2d"),f=d.createImageData(s,o);for(let p=0;p<o;p++)f.data.set(l.subarray(p*s*4,(p+1)*s*4),(o-p-1)*s*4);return d.putImageData(f,0,0),u.toDataURL("image/png")}finally{Et.setRenderTarget(c),a.dispose(),Ci(i)}},characterRig(){wt.updateMatrixWorld(!0);const n=wt.userData.parts,e=t=>t.getWorldPosition(new I).toArray();return{handsAttached:n.hands.every((t,i)=>t.parent===n.elbows[i]&&n.elbows[i].parent===n.arms[i]),bootsAttached:n.boots.every((t,i)=>t.parent===n.knees[i]&&n.knees[i].parent===n.legs[i]),overalls:!!wt.getObjectByName("farmer overalls"),growingSuit:n.farmerSuit.visible,faceFrame:!!wt.getObjectByName("Pip head"),earPieces:n.headsetCups.length,eyeHighlights:n.eyes.length,emblem:!!wt.getObjectByName("HydroPip shirt emblem"),belt:n.belt.visible,hands:n.hands.map(e),feet:n.boots.map(e),elbows:n.elbows.map(e),shoulders:n.arms.map(t=>t.rotation.toArray().slice(0,3)),bodyLift:n.body.position.y,leaves:n.leafEars.length,height:new Ii().setFromObject(wt).getSize(new I).y}},renderedCrops(){const n=[];return _t.traverse(e=>{if(!e.userData.growthTiming)return;const t=e.children.filter(i=>i.geometry?.type==="ExtrudeGeometry");n.push({crop:e.userData.crop,location:e.userData.interactiveId,stage:e.userData.growthStage,scale:e.userData.growthScale??e.scale.x,visibleFruit:e.children.filter(i=>i.userData.ripeningFruit&&i.visible).reduce((i,r)=>i+(r.isInstancedMesh?r.count*r.userData.fruitPerInstance:1),0),instances:e.userData.plantingPlacements?.length||1,layer:e.userData.layer??null,jobId:e.userData.jobId??null,leaves:(e.userData.foliageMaterials||t.map(i=>i.material)).map(i=>({r:i.color.r,g:i.color.g,b:i.color.b}))})}),n},dismissWelcome(){return h.tutorial.welcomeSeen=!0,En.hidden=!0,Ut=!1,je(),rt()},reset(){return h=Aa(),h.tutorial.welcomeSeen=!0,Ut=!1,je(),ot(),rt()},reloadState(){return h=Er(ql()),ot(),rt()},grantCoins:PM,repairTower(n=0){return Kl(n),rt()},buildTower(n){return Zl(n),rt()},buildMarket(){return Ql(),rt()},collectSeeds(n){return Qh(n),rt()},rescueSeeds(){return ef(),rt()},expandVault(){return tf(),rt()},queueCrop(n,e,t=null){return nf(n,e,t),rt()},matureTowers(){return CM(),rt()},pickupStarter(n,e=null){return Js(n,e),rt()},returnStarter(n){return Gi(n),rt()},transplant(n){return Ks(n),rt()},matureBeds(){return RM(),rt()},harvest(n,e=null){return Zs(n,e),rt()},stageProduce(){return Qs(),rt()},loadRack(n,e=5){return ma(n,e),rt()},upgradeQueue(n){return cf(n),rt()},upgradeBed(n){return lf(n),rt()},upgradeMarket(){return nu(),rt()},buyCosmetic(n){return hf(n),rt()},buyFarmUpgrade(n){return gf(n),rt()},farmAction(n,e){return ks(n,e),rt()},serviceHydro(n){return df(n),rt()},forceOrders(n=["lettuce","basil","lettuce"]){return h.orders=n.slice(0,3).map((e,t)=>({...eu(t),crop:e,amount:1,reward:Le[e].coinValue+10})),je(),ot(),rt()},grantProduce(n,e=1){if(!Le[n])return rt();h.carry?.kind==="starter"&&(h.carry=null),h.carry||(h.carry={kind:"produce",items:[]});let t=0;for(let i=0;i<e&&h.carry.items.length<Ht(h).basket;i+=1)h.carry.items.push(n),t+=1;return h.stats.planted+=t,h.stats.transplanted+=t,h.stats.harvested+=t,h.stats.byCropQueued[n]+=t,h.stats.byCropHarvested[n]+=t,je(),ot(),rt()},grantStarter(n="lettuce",e=0){return Le[n]&&(h.carry={kind:"starter",crop:n,quality:1,sourceTower:e,sourceLayer:ao(h.towers[e])[0],job:{id:crypto.randomUUID(),crop:n,queuedAt:Be(),startedAt:Be(),readyAt:Be(),quality:1}},h.stats.planted+=1,h.stats.byCropQueued[n]+=1,je(),ot()),rt()},fillBeds(){return h.beds.filter(n=>n.built).forEach(n=>{for(;n.plants.length<n.capacity;)n.plants.push({id:crypto.randomUUID(),crop:"lettuce",plantedAt:Be(),readyAt:Be()+9999999,quality:1}),h.stats.planted+=1,h.stats.transplanted+=1,h.stats.byCropQueued.lettuce+=1}),je(),ot(),rt()},deliver(n){return tu(n),rt()},reject(n){return of(n),rt()},openOrders(){return Zi(),rt()},showResult(n=11){return Mf(bn[Math.max(0,Math.min(bn.length-1,n))]),rt()},showcasePip(n="south"){const e={south:0,east:Math.PI/2,north:Math.PI,west:-Math.PI/2};return n in e&&(Se.direction=n,Se.pendingFacing=e[n],wt.rotation.y=e[n],Se.x=0,Se.z=-.25,Se.target=null,ti=null,on(),Da(1,!0)),rt()},setTask(n){return h.taskIndex=Math.max(0,Math.min(bn.length,n)),h.chapter=bn[h.taskIndex]?.chapter??2,je(),ot(),rt()},save(){return je("test"),rt()},rawState(){return JSON.parse(JSON.stringify(h))}});window.__HYDROPIP_CAMPAIGN_READY__=!0;requestAnimationFrame(wf);
