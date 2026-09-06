(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Al="179",Gf=0,Mu=1,Wf=2,Vd=1,Gd=2,Ai=3,nr=0,mn=1,_n=2,Qi=0,es=1,wu=2,Su=3,Eu=4,$f=5,gr=100,qf=101,Xf=102,Yf=103,jf=104,Jf=200,Kf=201,Zf=202,Qf=203,Rc=204,Pc=205,ep=206,tp=207,np=208,ip=209,rp=210,sp=211,op=212,ap=213,cp=214,Lc=0,Dc=1,Ic=2,rs=3,Uc=4,kc=5,Nc=6,Oc=7,Wd=0,lp=1,up=2,er=0,dp=1,hp=2,fp=3,$d=4,pp=5,mp=6,gp=7,qd=300,ss=301,os=302,Fc=303,Bc=304,wa=306,aa=1e3,_r=1001,zc=1002,Cn=1003,vp=1004,Eo=1005,ri=1006,Va=1007,xr=1008,ui=1009,Xd=1010,Yd=1011,qs=1012,Cl=1013,Mr=1014,si=1015,lo=1016,Rl=1017,Pl=1018,Xs=1020,jd=35902,Jd=1021,Kd=1022,Wn=1023,Ys=1026,js=1027,Ll=1028,Dl=1029,Zd=1030,Il=1031,Ul=1033,Zo=33776,Qo=33777,ea=33778,ta=33779,Hc=35840,Vc=35841,Gc=35842,Wc=35843,$c=36196,qc=37492,Xc=37496,Yc=37808,jc=37809,Jc=37810,Kc=37811,Zc=37812,Qc=37813,el=37814,tl=37815,nl=37816,il=37817,rl=37818,sl=37819,ol=37820,al=37821,na=36492,cl=36494,ll=36495,Qd=36283,ul=36284,dl=36285,hl=36286,_p=3200,xp=3201,kl=0,yp=1,Ji="",en="srgb",as="srgb-linear",ca="linear",wt="srgb",Ir=7680,Tu=519,bp=512,Mp=513,wp=514,eh=515,Sp=516,Ep=517,Tp=518,Ap=519,Au=35044,Cu="300 es",oi=2e3,la=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ru=1234567;const Os=Math.PI/180,Js=180/Math.PI;function Cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Nl(n,e){return(n%e+e)%e}function Cp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Rp(n,e,t){return n!==e?(t-n)/(e-n):0}function Fs(n,e,t){return(1-t)*n+t*e}function Pp(n,e,t,i){return Fs(n,e,1-Math.exp(-t*i))}function Lp(n,e=1){return e-Math.abs(Nl(n,e*2)-e)}function Dp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ip(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Up(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kp(n,e){return n+Math.random()*(e-n)}function Np(n){return n*(.5-Math.random())}function Op(n){n!==void 0&&(Ru=n);let e=Ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fp(n){return n*Os}function Bp(n){return n*Js}function zp(n){return(n&n-1)===0&&n!==0}function Hp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gp(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),p=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const It={DEG2RAD:Os,RAD2DEG:Js,generateUUID:Cr,clamp:dt,euclideanModulo:Nl,mapLinear:Cp,inverseLerp:Rp,lerp:Fs,damp:Pp,pingpong:Lp,smoothstep:Dp,smootherstep:Ip,randInt:Up,randFloat:kp,randFloatSpread:Np,seededRandom:Op,degToRad:Fp,radToDeg:Bp,isPowerOfTwo:zp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Gp,normalize:dn,denormalize:jr};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class uo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==p||l!==f||u!==g){let v=1-a;const m=c*p+l*f+u*g+d*_,S=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const L=Math.sqrt(b),A=Math.atan2(L,m*S);v=Math.sin(v*A)/L,a=Math.sin(a*A)/L}const x=a*S;if(c=c*v+p*x,l=l*v+f*x,u=u*v+g*x,d=d*v+_*x,v===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*p,e[t+1]=c*g+u*p+l*d-a*f,e[t+2]=l*g+u*f+a*p-c*d,e[t+3]=u*g-a*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"YZX":this._x=p*u*d+l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d-p*f*g;break;case"XZY":this._x=p*u*d-l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new U,Pu=new uo;class ot{constructor(e,t,i,r,s,o,a,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],f=i[5],g=i[8],_=r[0],v=r[3],m=r[6],S=r[1],b=r[4],x=r[7],L=r[2],A=r[5],P=r[8];return s[0]=o*_+a*S+c*L,s[3]=o*v+a*b+c*A,s[6]=o*m+a*x+c*P,s[1]=l*_+u*S+d*L,s[4]=l*v+u*b+d*A,s[7]=l*m+u*x+d*P,s[2]=p*_+f*S+g*L,s[5]=p*v+f*b+g*A,s[8]=p*m+f*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,p=a*c-u*s,f=l*s-o*c,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=p*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new ot;function th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wp(){const n=ua("canvas");return n.style.display="block",n}const Lu={};function ts(n){n in Lu||(Lu[n]=!0,console.warn(n))}function $p(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Du=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){const n={enabled:!0,workingColorSpace:as,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=ns(r.r),r.g=ns(r.g),r.b=ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?ca:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[as]:{primaries:e,whitePoint:i,transfer:ca,toXYZ:Du,fromXYZ:Iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:Du,fromXYZ:Iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const vt=qp();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ur;class Xp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=ua("canvas")),Ur.width=e.width,Ur.height=e.height;const r=Ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yp=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($a(r[o].image)):s.push($a(r[o]))}else s=$a(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jp=0;const qa=new U;class sn extends gs{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=_r,r=_r,s=ri,o=xr,a=Wn,c=ui,l=sn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Cr(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=qd;sn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],f=c[5],g=c[9],_=c[2],v=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+v)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,x=(f+1)/2,L=(m+1)/2,A=(u+p)/4,P=(d+_)/4,I=(g+v)/4;return b>x&&b>L?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=P/i):x>L?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=I/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=I/s),this.set(i,r,s,t),this}let S=Math.sqrt((v-g)*(v-g)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(v-g)/S,this.y=(d-_)/S,this.z=(p-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jp extends gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new sn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ol(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Jp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nh extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Ao.subVectors(this.max,Cs),kr.subVectors(e.a,Cs),Nr.subVectors(e.b,Cs),Or.subVectors(e.c,Cs),Gi.subVectors(Nr,kr),Wi.subVectors(Or,Nr),cr.subVectors(kr,Or);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-cr.z,cr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,cr.z,0,-cr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-cr.y,cr.x,0];return!Xa(t,kr,Nr,Or,Ao)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,kr,Nr,Or,Ao))?!1:(Co.crossVectors(Gi,Wi),t=[Co.x,Co.y,Co.z],Xa(t,kr,Nr,Or,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new U,new U,new U,new U,new U,new U,new U,new U],zn=new U,To=new Bi,kr=new U,Nr=new U,Or=new U,Gi=new U,Wi=new U,cr=new U,Cs=new U,Ao=new U,Co=new U,lr=new U;function Xa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){lr.fromArray(n,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),c=e.dot(lr),l=t.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Zp=new Bi,Rs=new U,Ya=new U;class ho{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Ya)),this.expandByPoint(Rs.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new U,ja=new U,Ro=new U,$i=new U,Ja=new U,Po=new U,Ka=new U;class ih{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=$i.dot(this.direction),c=-$i.dot(Ro),l=$i.lengthSq(),u=Math.abs(1-o*o);let d,p,f,g;if(u>0)if(d=o*c-a,p=o*a-c,g=s*u,d>=0)if(p>=-g)if(p<=g){const _=1/u;d*=_,p*=_,f=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ja).addScaledVector(Ro,p),f}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,s){Ja.subVectors(t,e),Po.subVectors(i,e),Ka.crossVectors(Ja,Po);let o=this.direction.dot(Ka),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const c=a*this.direction.dot(Po.crossVectors($i,Po));if(c<0)return null;const l=a*this.direction.dot(Ja.cross($i));if(l<0||c+l>o)return null;const u=-a*$i.dot(Ka);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,v){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,v)}set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=p,m[3]=f,m[7]=g,m[11]=_,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,f=c*d,g=l*u,_=l*d;t[0]=p+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,f=c*d,g=l*u,_=l*d;t[0]=p-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=p*l+_,t[1]=c*d,t[5]=_*l+p,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-p*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=p-_*d}else if(e.order==="XZY"){const p=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qp,e,em)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),qi.crossVectors(i,Sn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),qi.crossVectors(i,Sn)),qi.normalize(),Lo.crossVectors(Sn,qi),r[0]=qi.x,r[4]=Lo.x,r[8]=Sn.x,r[1]=qi.y,r[5]=Lo.y,r[9]=Sn.y,r[2]=qi.z,r[6]=Lo.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],f=i[13],g=i[2],_=i[6],v=i[10],m=i[14],S=i[3],b=i[7],x=i[11],L=i[15],A=r[0],P=r[4],I=r[8],y=r[12],w=r[1],C=r[5],R=r[9],k=r[13],O=r[2],B=r[6],F=r[10],Y=r[14],G=r[3],se=r[7],ae=r[11],Ae=r[15];return s[0]=o*A+a*w+c*O+l*G,s[4]=o*P+a*C+c*B+l*se,s[8]=o*I+a*R+c*F+l*ae,s[12]=o*y+a*k+c*Y+l*Ae,s[1]=u*A+d*w+p*O+f*G,s[5]=u*P+d*C+p*B+f*se,s[9]=u*I+d*R+p*F+f*ae,s[13]=u*y+d*k+p*Y+f*Ae,s[2]=g*A+_*w+v*O+m*G,s[6]=g*P+_*C+v*B+m*se,s[10]=g*I+_*R+v*F+m*ae,s[14]=g*y+_*k+v*Y+m*Ae,s[3]=S*A+b*w+x*O+L*G,s[7]=S*P+b*C+x*B+L*se,s[11]=S*I+b*R+x*F+L*ae,s[15]=S*y+b*k+x*Y+L*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],f=e[14],g=e[3],_=e[7],v=e[11],m=e[15];return g*(+s*c*d-r*l*d-s*a*p+i*l*p+r*a*f-i*c*f)+_*(+t*c*f-t*l*p+s*o*p-r*o*f+r*l*u-s*c*u)+v*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+m*(-r*a*u-t*c*d+t*a*p+r*o*d-i*o*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],f=e[11],g=e[12],_=e[13],v=e[14],m=e[15],S=d*v*l-_*p*l+_*c*f-a*v*f-d*c*m+a*p*m,b=g*p*l-u*v*l-g*c*f+o*v*f+u*c*m-o*p*m,x=u*_*l-g*d*l+g*a*f-o*_*f-u*a*m+o*d*m,L=g*d*c-u*_*c-g*a*p+o*_*p+u*a*v-o*d*v,A=t*S+i*b+r*x+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=S*P,e[1]=(_*p*s-d*v*s-_*r*f+i*v*f+d*r*m-i*p*m)*P,e[2]=(a*v*s-_*c*s+_*r*l-i*v*l-a*r*m+i*c*m)*P,e[3]=(d*c*s-a*p*s-d*r*l+i*p*l+a*r*f-i*c*f)*P,e[4]=b*P,e[5]=(u*v*s-g*p*s+g*r*f-t*v*f-u*r*m+t*p*m)*P,e[6]=(g*c*s-o*v*s-g*r*l+t*v*l+o*r*m-t*c*m)*P,e[7]=(o*p*s-u*c*s+u*r*l-t*p*l-o*r*f+t*c*f)*P,e[8]=x*P,e[9]=(g*d*s-u*_*s-g*i*f+t*_*f+u*i*m-t*d*m)*P,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*m+t*a*m)*P,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*P,e[12]=L*P,e[13]=(u*_*r-g*d*r+g*i*p-t*_*p-u*i*v+t*d*v)*P,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*v-t*a*v)*P,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*p+t*a*p)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,p=s*l,f=s*u,g=s*d,_=o*u,v=o*d,m=a*d,S=c*l,b=c*u,x=c*d,L=i.x,A=i.y,P=i.z;return r[0]=(1-(_+m))*L,r[1]=(f+x)*L,r[2]=(g-b)*L,r[3]=0,r[4]=(f-x)*A,r[5]=(1-(p+m))*A,r[6]=(v+S)*A,r[7]=0,r[8]=(g+b)*P,r[9]=(v-S)*P,r[10]=(1-(p+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const l=1/s,u=1/o,d=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,t.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===oi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===la)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===oi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===la)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fr=new U,Hn=new bt,Qp=new U(0,0,0),em=new U(1,1,1),qi=new U,Lo=new U,Sn=new U,Uu=new bt,ku=new uo;class di{constructor(e=0,t=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tm=0;const Nu=new U,Br=new uo,Si=new bt,Do=new U,Ps=new U,nm=new U,im=new uo,Ou=new U(1,0,0),Fu=new U(0,1,0),Bu=new U(0,0,1),zu={type:"added"},rm={type:"removed"},zr={type:"childadded",child:null},Za={type:"childremoved",child:null};class Nt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new U,t=new di,i=new uo,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new ot}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Do.copy(e):Do.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ps,Do,this.up):Si.lookAt(Do,Ps,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Si),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zu),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rm),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zu),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new U,Ei=new U,Qa=new U,Ti=new U,Hr=new U,Vr=new U,Hu=new U,ec=new U,tc=new U,nc=new U,ic=new zt,rc=new zt,sc=new zt;class Gn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),Ei.subVectors(i,t),Qa.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(Ei),c=Vn.dot(Qa),l=Ei.dot(Ei),u=Ei.dot(Qa),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(l*c-a*u)*p,g=(o*u-a*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return ic.setScalar(0),rc.setScalar(0),sc.setScalar(0),ic.fromBufferAttribute(e,t),rc.fromBufferAttribute(e,i),sc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ic,s.x),o.addScaledVector(rc,s.y),o.addScaledVector(sc,s.z),o}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),Ei.subVectors(e,t),Vn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Vn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hr.subVectors(r,i),Vr.subVectors(s,i),ec.subVectors(e,i);const c=Hr.dot(ec),l=Vr.dot(ec);if(c<=0&&l<=0)return t.copy(i);tc.subVectors(e,r);const u=Hr.dot(tc),d=Vr.dot(tc);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Hr,o);nc.subVectors(e,s);const f=Hr.dot(nc),g=Vr.dot(nc);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Vr,a);const v=u*g-f*d;if(v<=0&&d-u>=0&&f-g>=0)return Hu.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Hu,a);const m=1/(v+_+p);return o=_*m,a=p*m,t.copy(i).addScaledVector(Hr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function oc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=Nl(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=oc(o,s,e+1/3),this.g=oc(o,s,e),this.b=oc(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return vt.workingToColorSpace(rn.copy(this),e),Math.round(dt(rn.r*255,0,255))*65536+Math.round(dt(rn.g*255,0,255))*256+Math.round(dt(rn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(rn.copy(this),t);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=en){vt.workingToColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,r=rn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Io);const i=Fs(Xi.h,Io.h,t),r=Fs(Xi.s,Io.s,t),s=Fs(Xi.l,Io.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ut;ut.NAMES=rh;let sm=0;class vs extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=es,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Pc,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rc&&(i.blendSrc=this.blendSrc),this.blendDst!==Pc&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $t extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new U,Uo=new pe;let om=0;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Au,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Au&&(e.usage=this.usage),e}}class sh extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oh extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let am=0;const Dn=new bt,ac=new Nt,Gr=new U,En=new Bi,Ls=new Bi,jt=new U;class Zt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(th(e)?oh:sh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(En.min,Ls.min),En.expandByPoint(jt),jt.addVectors(En.max,Ls.max),En.expandByPoint(jt)):(En.expandByPoint(Ls.min),En.expandByPoint(Ls.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(Gr.fromBufferAttribute(e,l),jt.add(Gr)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new U,c[I]=new U;const l=new U,u=new U,d=new U,p=new pe,f=new pe,g=new pe,_=new U,v=new U;function m(I,y,w){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,w),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,w),u.sub(l),d.sub(l),f.sub(p),g.sub(p);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),v.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[I].add(_),a[y].add(_),a[w].add(_),c[I].add(v),c[y].add(v),c[w].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,y=S.length;I<y;++I){const w=S[I],C=w.start,R=w.count;for(let k=C,O=C+R;k<O;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new U,x=new U,L=new U,A=new U;function P(I){L.fromBufferAttribute(r,I),A.copy(L);const y=a[I];b.copy(y),b.sub(L.multiplyScalar(L.dot(y))).normalize(),x.crossVectors(A,y);const C=x.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,C)}for(let I=0,y=S.length;I<y;++I){const w=S[I],C=w.start,R=w.count;for(let k=C,O=C+R;k<O;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),_=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,v=c.length;_<v;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)p[g++]=l[f++]}return new In(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],f=e(p,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new bt,ur=new ih,ko=new ho,Gu=new U,No=new U,Oo=new U,Fo=new U,cc=new U,Bo=new U,Wu=new U,zo=new U;class me extends Nt{constructor(e=new Zt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Bo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(cc.fromBufferAttribute(d,e),o?Bo.addScaledVector(cc,u):Bo.addScaledVector(cc.sub(t),u))}t.add(Bo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(ko.containsPoint(ur.origin)===!1&&(ur.intersectSphere(ko,Gu)===null||ur.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(Vu.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const v=p[g],m=o[v.materialIndex],S=Math.max(v.start,f.start),b=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let x=S,L=b;x<L;x+=3){const A=a.getX(x),P=a.getX(x+1),I=a.getX(x+2);r=Ho(this,m,e,i,l,u,d,A,P,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let v=g,m=_;v<m;v+=3){const S=a.getX(v),b=a.getX(v+1),x=a.getX(v+2);r=Ho(this,o,e,i,l,u,d,S,b,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const v=p[g],m=o[v.materialIndex],S=Math.max(v.start,f.start),b=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let x=S,L=b;x<L;x+=3){const A=x,P=x+1,I=x+2;r=Ho(this,m,e,i,l,u,d,A,P,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let v=g,m=_;v<m;v+=3){const S=v,b=v+1,x=v+2;r=Ho(this,o,e,i,l,u,d,S,b,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function cm(n,e,t,i,r,s,o,a){let c;if(e.side===mn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===nr,a),c===null)return null;zo.copy(a),zo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(zo);return l<t.near||l>t.far?null:{distance:l,point:zo.clone(),object:n}}function Ho(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,No),n.getVertexPosition(c,Oo),n.getVertexPosition(l,Fo);const u=cm(n,e,t,i,No,Oo,Fo,Wu);if(u){const d=new U;Gn.getBarycoord(Wu,No,Oo,Fo,d),r&&(u.uv=Gn.getInterpolatedAttribute(r,a,c,l,d,new pe)),s&&(u.uv1=Gn.getInterpolatedAttribute(s,a,c,l,d,new pe)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,c,l,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new U,materialIndex:0};Gn.getNormal(No,Oo,Fo,p.normal),u.face=p,u.barycoord=d}return u}class Bt extends Zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function g(_,v,m,S,b,x,L,A,P,I,y){const w=x/P,C=L/I,R=x/2,k=L/2,O=A/2,B=P+1,F=I+1;let Y=0,G=0;const se=new U;for(let ae=0;ae<F;ae++){const Ae=ae*C-k;for(let he=0;he<B;he++){const Ge=he*w-R;se[_]=Ge*S,se[v]=Ae*b,se[m]=O,l.push(se.x,se.y,se.z),se[_]=0,se[v]=0,se[m]=A>0?1:-1,u.push(se.x,se.y,se.z),d.push(he/P),d.push(1-ae/I),Y+=1}}for(let ae=0;ae<I;ae++)for(let Ae=0;Ae<P;Ae++){const he=p+Ae+B*ae,Ge=p+Ae+B*(ae+1),et=p+(Ae+1)+B*(ae+1),$=p+(Ae+1)+B*ae;c.push(he,Ge,$),c.push(Ge,et,$),G+=6}a.addGroup(f,G,y),f+=G,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=cs(n[t]);for(const r in i)e[r]=i[r]}return e}function lm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ah(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const um={clone:cs,merge:hn};var dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ch extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new U,$u=new pe,qu=new pe;class vn extends ch{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,$u,qu),t.subVectors(qu,$u)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,$r=1;class fm extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(Wr,$r,e,t);r.layers=this.layers,this.add(r);const s=new vn(Wr,$r,e,t);s.layers=this.layers,this.add(s);const o=new vn(Wr,$r,e,t);o.layers=this.layers,this.add(o);const a=new vn(Wr,$r,e,t);a.layers=this.layers,this.add(a);const c=new vn(Wr,$r,e,t);c.layers=this.layers,this.add(c);const l=new vn(Wr,$r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lh extends sn{constructor(e=[],t=ss,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pm extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bt(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Qi});s.uniforms.tEquirect.value=t;const o=new me(r,s),a=t.minFilter;return t.minFilter===xr&&(t.minFilter=ri),new fm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class $e extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,i),m=this._getHandJoint(l,_);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $e;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Bl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=i}clone(){return new Bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zl extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gm extends sn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Cn,u=Cn,d,p){super(null,o,a,c,l,u,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xu extends In{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new bt,Yu=new bt,Vo=[],ju=new Bi,vm=new bt,Ds=new me,Is=new ho;class wr extends me{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,vm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),ju.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(ju)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ho),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),Is.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(i),e.ray.intersectsSphere(Is)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qr),Yu.multiplyMatrices(i,qr),Ds.matrixWorld=Yu,Ds.raycast(e,Vo);for(let o=0,a=Vo.length;o<a;o++){const c=Vo[o];c.instanceId=s,c.object=this,t.push(c)}Vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new gm(new Float32Array(r*this.count),r,this.count,Ll,si));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const uc=new U,_m=new U,xm=new ot;class ji{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=uc.subVectors(i,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xm.getNormalMatrix(e),r=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new ho,ym=new pe(.5,.5),Go=new U;class Hl{constructor(e=new ji,t=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],p=s[6],f=s[7],g=s[8],_=s[9],v=s[10],m=s[11],S=s[12],b=s[13],x=s[14],L=s[15];if(r[0].setComponents(l-o,f-u,m-g,L-S).normalize(),r[1].setComponents(l+o,f+u,m+g,L+S).normalize(),r[2].setComponents(l+a,f+d,m+_,L+b).normalize(),r[3].setComponents(l-a,f-d,m-_,L-b).normalize(),i)r[4].setComponents(c,p,v,x).normalize(),r[5].setComponents(l-c,f-p,m-v,L-x).normalize();else if(r[4].setComponents(l-c,f-p,m-v,L-x).normalize(),t===oi)r[5].setComponents(l+c,f+p,m+v,L+x).normalize();else if(t===la)r[5].setComponents(c,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const t=ym.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uh extends sn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dh extends sn{constructor(e,t,i=Mr,r,s,o,a=Cn,c=Cn,l,u=Ys,d=1){if(u!==Ys&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jr extends Zt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,p=t,f=2*d+p,g=i*2+s,_=r+1,v=new U,m=new U;for(let S=0;S<=g;S++){let b=0,x=0,L=0,A=0;if(S<=i){const y=S/i,w=y*Math.PI/2;x=-u-e*Math.cos(w),L=e*Math.sin(w),A=-e*Math.cos(w),b=y*d}else if(S<=i+s){const y=(S-i)/s;x=-u+y*t,L=e,A=0,b=d+y*p}else{const y=(S-i-s)/i,w=y*Math.PI/2;x=u+e*Math.sin(w),L=e*Math.cos(w),A=e*Math.sin(w),b=d+p+y*d}const P=Math.max(0,Math.min(1,b/f));let I=0;S===0?I=.5/r:S===g&&(I=-.5/r);for(let y=0;y<=r;y++){const w=y/r,C=w*Math.PI*2,R=Math.sin(C),k=Math.cos(C);m.x=-L*k,m.y=x,m.z=L*R,a.push(m.x,m.y,m.z),v.set(-L*k,A,L*R),v.normalize(),c.push(v.x,v.y,v.z),l.push(w+I,P)}if(S>0){const y=(S-1)*_;for(let w=0;w<r;w++){const C=y+w,R=y+w+1,k=S*_+w,O=S*_+w+1;o.push(C,R,k),o.push(R,O,k)}}}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ni extends Zt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new U,u=new pe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const f=i+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pt extends Zt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],p=[],f=[];let g=0;const _=[],v=i/2;let m=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(f,2));function S(){const x=new U,L=new U;let A=0;const P=(t-e)/i;for(let I=0;I<=s;I++){const y=[],w=I/s,C=w*(t-e)+e;for(let R=0;R<=r;R++){const k=R/r,O=k*c+a,B=Math.sin(O),F=Math.cos(O);L.x=C*B,L.y=-w*i+v,L.z=C*F,d.push(L.x,L.y,L.z),x.set(B,P,F).normalize(),p.push(x.x,x.y,x.z),f.push(k,1-w),y.push(g++)}_.push(y)}for(let I=0;I<r;I++)for(let y=0;y<s;y++){const w=_[y][I],C=_[y+1][I],R=_[y+1][I+1],k=_[y][I+1];(e>0||y!==0)&&(u.push(w,C,k),A+=3),(t>0||y!==s-1)&&(u.push(C,R,k),A+=3)}l.addGroup(m,A,0),m+=A}function b(x){const L=g,A=new pe,P=new U;let I=0;const y=x===!0?e:t,w=x===!0?1:-1;for(let R=1;R<=r;R++)d.push(0,v*w,0),p.push(0,w,0),f.push(.5,.5),g++;const C=g;for(let R=0;R<=r;R++){const O=R/r*c+a,B=Math.cos(O),F=Math.sin(O);P.x=y*F,P.y=v*w,P.z=y*B,d.push(P.x,P.y,P.z),p.push(0,w,0),A.x=B*.5+.5,A.y=F*.5*w+.5,f.push(A.x,A.y),g++}for(let R=0;R<r;R++){const k=L+R,O=C+R;x===!0?u.push(O,O+1,k):u.push(O+1,O,k),I+=3}l.addGroup(m,I,x===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mi extends pt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new mi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sa extends Zt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const b=new U,x=new U,L=new U;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],x),f(t[A+2],L),c(b,x,L,S)}function c(S,b,x,L){const A=L+1,P=[];for(let I=0;I<=A;I++){P[I]=[];const y=S.clone().lerp(x,I/A),w=b.clone().lerp(x,I/A),C=A-I;for(let R=0;R<=C;R++)R===0&&I===A?P[I][R]=y:P[I][R]=y.clone().lerp(w,R/C)}for(let I=0;I<A;I++)for(let y=0;y<2*(A-I)-1;y++){const w=Math.floor(y/2);y%2===0?(p(P[I][w+1]),p(P[I+1][w]),p(P[I][w])):(p(P[I][w+1]),p(P[I+1][w+1]),p(P[I+1][w]))}}function l(S){const b=new U;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(S),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function u(){const S=new U;for(let b=0;b<s.length;b+=3){S.x=s[b+0],S.y=s[b+1],S.z=s[b+2];const x=v(S)/2/Math.PI+.5,L=m(S)/Math.PI+.5;o.push(x,1-L)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){const b=o[S+0],x=o[S+2],L=o[S+4],A=Math.max(b,x,L),P=Math.min(b,x,L);A>.9&&P<.1&&(b<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),L<.2&&(o[S+4]+=1))}}function p(S){s.push(S.x,S.y,S.z)}function f(S,b){const x=S*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const S=new U,b=new U,x=new U,L=new U,A=new pe,P=new pe,I=new pe;for(let y=0,w=0;y<s.length;y+=9,w+=6){S.set(s[y+0],s[y+1],s[y+2]),b.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),A.set(o[w+0],o[w+1]),P.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),L.copy(S).add(b).add(x).divideScalar(3);const C=v(L);_(A,w+0,S,C),_(P,w+2,b,C),_(I,w+4,x,C)}}function _(S,b,x,L){L<0&&S.x===1&&(o[b]=S.x-1),x.x===0&&x.z===0&&(o[b]=L/2/Math.PI+.5)}function v(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.vertices,e.indices,e.radius,e.details)}}class Vl extends Sa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vl(e.radius,e.detail)}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],p=i[r+1]-u,f=(o-u)/p;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new pe:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,r=[],s=[],o=[],a=new U,c=new bt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),p<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(dt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(dt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gl extends gi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*u-f*d+this.aX,l=p*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bm extends Gl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let p=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;p*=u,f*=u,r(o,a,p,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Wo=new U,dc=new Wl,hc=new Wl,fc=new Wl;class $l extends gi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new U){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Wo.subVectors(r[0],r[1]).add(r[0]),l=Wo);const d=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Wo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),v<1e-4&&(v=_),dc.initNonuniformCatmullRom(l.x,d.x,p.x,u.x,g,_,v),hc.initNonuniformCatmullRom(l.y,d.y,p.y,u.y,g,_,v),fc.initNonuniformCatmullRom(l.z,d.z,p.z,u.z,g,_,v)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(l.x,d.x,p.x,u.x,this.tension),hc.initCatmullRom(l.y,d.y,p.y,u.y,this.tension),fc.initCatmullRom(l.z,d.z,p.z,u.z,this.tension));return i.set(dc.calc(c),hc.calc(c),fc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ju(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function Mm(n,e){const t=1-n;return t*t*e}function wm(n,e){return 2*(1-n)*n*e}function Sm(n,e){return n*n*e}function Bs(n,e,t,i){return Mm(n,e)+wm(n,t)+Sm(n,i)}function Em(n,e){const t=1-n;return t*t*t*e}function Tm(n,e){const t=1-n;return 3*t*t*n*e}function Am(n,e){return 3*(1-n)*n*n*e}function Cm(n,e){return n*n*n*e}function zs(n,e,t,i,r){return Em(n,e)+Tm(n,t)+Am(n,i)+Cm(n,r)}class hh extends gi{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zs(e,r.x,s.x,o.x,a.x),zs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rm extends gi{constructor(e=new U,t=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zs(e,r.x,s.x,o.x,a.x),zs(e,r.y,s.y,o.y,a.y),zs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fh extends gi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pm extends gi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends gi{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Bs(e,r.x,s.x,o.x),Bs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends gi{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Bs(e,r.x,s.x,o.x),Bs(e,r.y,s.y,o.y),Bs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Ju(a,c.x,l.x,u.x,d.x),Ju(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var da=Object.freeze({__proto__:null,ArcCurve:bm,CatmullRomCurve3:$l,CubicBezierCurve:hh,CubicBezierCurve3:Rm,EllipseCurve:Gl,LineCurve:fh,LineCurve3:Pm,QuadraticBezierCurve:ph,QuadraticBezierCurve3:mh,SplineCurve:gh});class Lm extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new da[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new da[r.type]().fromJSON(r))}return this}}class Ku extends Lm{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new fh(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new ph(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new hh(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new gh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Gl(e,t,i,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ls extends Ku{constructor(e){super(e),this.uuid=Cr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ku().fromJSON(r))}return this}}function Dm(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=vh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=Om(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let p=t;p<r;p+=t){const f=n[p],g=n[p+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Ks(s,o,t,a,c,l,0),o}function vh(n,e,t,i,r){let s;if(r===Ym(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Zu(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Zu(o/i|0,n[o],n[o+1],s);return s&&us(s,s.next)&&(Qs(s),s=s.next),s}function Sr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(us(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Qs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ks(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Vm(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Um(n,i,r,s):Im(n)){e.push(c.i,n.i,l.i),Qs(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=km(Sr(n),e),Ks(n,e,t,i,r,s,2)):o===2&&Nm(n,e,t,i,r,s):Ks(Sr(n),e,t,i,r,s,1);break}}}function Im(n){const e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),d=Math.min(a,c,l),p=Math.max(r,s,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=f&&Us(r,a,s,c,o,l,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Um(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ut(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,p=o.y,f=Math.min(a,c,l),g=Math.min(u,d,p),_=Math.max(a,c,l),v=Math.max(u,d,p),m=fl(f,g,e,t,i),S=fl(_,v,e,t,i);let b=n.prevZ,x=n.nextZ;for(;b&&b.z>=m&&x&&x.z<=S;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=v&&b!==r&&b!==o&&Us(a,u,c,d,l,p,b.x,b.y)&&Ut(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=v&&x!==r&&x!==o&&Us(a,u,c,d,l,p,x.x,x.y)&&Ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=v&&b!==r&&b!==o&&Us(a,u,c,d,l,p,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=v&&x!==r&&x!==o&&Us(a,u,c,d,l,p,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function km(n,e){let t=n;do{const i=t.prev,r=t.next.next;!us(i,r)&&xh(i,t,t.next,r)&&Zs(i,r)&&Zs(r,i)&&(e.push(i.i,t.i,r.i),Qs(t),Qs(t.next),t=n=r),t=t.next}while(t!==n);return Sr(t)}function Nm(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$m(o,a)){let c=yh(o,a);o=Sr(o,o.next),c=Sr(c,c.next),Ks(o,e,t,i,r,s,0),Ks(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Om(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=vh(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Wm(l))}r.sort(Fm);for(let s=0;s<r.length;s++)t=Bm(r[s],t);return t}function Fm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Bm(n,e){const t=zm(n,e);if(!t)return e;const i=yh(t,n);return Sr(i,i.next),Sr(t,t.next)}function zm(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(us(n,t))return t;do{if(us(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&_h(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);Zs(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Hm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Hm(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function Vm(n,e,t,i){let r=n;do r.z===0&&(r.z=fl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Gm(r)}function Gm(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function fl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _h(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Us(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&_h(n,e,t,i,r,s,o,a)}function $m(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qm(n,e)&&(Zs(n,e)&&Zs(e,n)&&Xm(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||us(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function us(n,e){return n.x===e.x&&n.y===e.y}function xh(n,e,t,i){const r=qo(Ut(n,e,t)),s=qo(Ut(n,e,i)),o=qo(Ut(t,i,n)),a=qo(Ut(t,i,e));return!!(r!==s&&o!==a||r===0&&$o(n,t,e)||s===0&&$o(n,i,e)||o===0&&$o(t,n,i)||a===0&&$o(t,e,i))}function $o(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qo(n){return n>0?1:n<0?-1:0}function qm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&xh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zs(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function Xm(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function yh(n,e){const t=pl(n.i,n.x,n.y),i=pl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Zu(n,e,t,i){const r=pl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Qs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ym(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class jm{static triangulate(e,t,i=2){return Dm(e,t,i)}}class Ci{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ci.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Qu(e),ed(i,e);let o=e.length;t.forEach(Qu);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,ed(i,t[c]);const a=jm.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Qu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ed(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class eo extends Zt{constructor(e=new ls([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ft(r,3)),this.setAttribute("uv",new ft(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Jm;let b,x=!1,L,A,P,I;m&&(b=m.getSpacedPoints(u),x=!0,p=!1,L=m.computeFrenetFrames(u,!1),A=new U,P=new U,I=new U),p||(v=0,f=0,g=0,_=0);const y=a.extractPoints(l);let w=y.shape;const C=y.holes;if(!Ci.isClockWise(w)){w=w.reverse();for(let K=0,j=C.length;K<j;K++){const ne=C[K];Ci.isClockWise(ne)&&(C[K]=ne.reverse())}}function k(K){const ne=10000000000000001e-36;let Q=K[0];for(let _e=1;_e<=K.length;_e++){const oe=_e%K.length,xe=K[oe],it=xe.x-Q.x,tt=xe.y-Q.y,T=it*it+tt*tt,M=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(Q.x),Math.abs(Q.y)),V=ne*M*M;if(T<=V){K.splice(oe,1),_e--;continue}Q=xe}}k(w),C.forEach(k);const O=C.length,B=w;for(let K=0;K<O;K++){const j=C[K];w=w.concat(j)}function F(K,j,ne){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(j,ne)}const Y=w.length;function G(K,j,ne){let Q,_e,oe;const xe=K.x-j.x,it=K.y-j.y,tt=ne.x-K.x,T=ne.y-K.y,M=xe*xe+it*it,V=xe*T-it*tt;if(Math.abs(V)>Number.EPSILON){const X=Math.sqrt(M),re=Math.sqrt(tt*tt+T*T),J=j.x-it/X,Fe=j.y+xe/X,ge=ne.x-T/re,ke=ne.y+tt/re,Ne=((ge-J)*T-(ke-Fe)*tt)/(xe*T-it*tt);Q=J+xe*Ne-K.x,_e=Fe+it*Ne-K.y;const ce=Q*Q+_e*_e;if(ce<=2)return new pe(Q,_e);oe=Math.sqrt(ce/2)}else{let X=!1;xe>Number.EPSILON?tt>Number.EPSILON&&(X=!0):xe<-Number.EPSILON?tt<-Number.EPSILON&&(X=!0):Math.sign(it)===Math.sign(T)&&(X=!0),X?(Q=-it,_e=xe,oe=Math.sqrt(M)):(Q=xe,_e=it,oe=Math.sqrt(M/2))}return new pe(Q/oe,_e/oe)}const se=[];for(let K=0,j=B.length,ne=j-1,Q=K+1;K<j;K++,ne++,Q++)ne===j&&(ne=0),Q===j&&(Q=0),se[K]=G(B[K],B[ne],B[Q]);const ae=[];let Ae,he=se.concat();for(let K=0,j=O;K<j;K++){const ne=C[K];Ae=[];for(let Q=0,_e=ne.length,oe=_e-1,xe=Q+1;Q<_e;Q++,oe++,xe++)oe===_e&&(oe=0),xe===_e&&(xe=0),Ae[Q]=G(ne[Q],ne[oe],ne[xe]);ae.push(Ae),he=he.concat(Ae)}let Ge;if(v===0)Ge=Ci.triangulateShape(B,C);else{const K=[],j=[];for(let ne=0;ne<v;ne++){const Q=ne/v,_e=f*Math.cos(Q*Math.PI/2),oe=g*Math.sin(Q*Math.PI/2)+_;for(let xe=0,it=B.length;xe<it;xe++){const tt=F(B[xe],se[xe],oe);Ie(tt.x,tt.y,-_e),Q===0&&K.push(tt)}for(let xe=0,it=O;xe<it;xe++){const tt=C[xe];Ae=ae[xe];const T=[];for(let M=0,V=tt.length;M<V;M++){const X=F(tt[M],Ae[M],oe);Ie(X.x,X.y,-_e),Q===0&&T.push(X)}Q===0&&j.push(T)}}Ge=Ci.triangulateShape(K,j)}const et=Ge.length,$=g+_;for(let K=0;K<Y;K++){const j=p?F(w[K],he[K],$):w[K];x?(P.copy(L.normals[0]).multiplyScalar(j.x),A.copy(L.binormals[0]).multiplyScalar(j.y),I.copy(b[0]).add(P).add(A),Ie(I.x,I.y,I.z)):Ie(j.x,j.y,0)}for(let K=1;K<=u;K++)for(let j=0;j<Y;j++){const ne=p?F(w[j],he[j],$):w[j];x?(P.copy(L.normals[K]).multiplyScalar(ne.x),A.copy(L.binormals[K]).multiplyScalar(ne.y),I.copy(b[K]).add(P).add(A),Ie(I.x,I.y,I.z)):Ie(ne.x,ne.y,d/u*K)}for(let K=v-1;K>=0;K--){const j=K/v,ne=f*Math.cos(j*Math.PI/2),Q=g*Math.sin(j*Math.PI/2)+_;for(let _e=0,oe=B.length;_e<oe;_e++){const xe=F(B[_e],se[_e],Q);Ie(xe.x,xe.y,d+ne)}for(let _e=0,oe=C.length;_e<oe;_e++){const xe=C[_e];Ae=ae[_e];for(let it=0,tt=xe.length;it<tt;it++){const T=F(xe[it],Ae[it],Q);x?Ie(T.x,T.y+b[u-1].y,b[u-1].x+ne):Ie(T.x,T.y,d+ne)}}}ve(),ue();function ve(){const K=r.length/3;if(p){let j=0,ne=Y*j;for(let Q=0;Q<et;Q++){const _e=Ge[Q];Z(_e[2]+ne,_e[1]+ne,_e[0]+ne)}j=u+v*2,ne=Y*j;for(let Q=0;Q<et;Q++){const _e=Ge[Q];Z(_e[0]+ne,_e[1]+ne,_e[2]+ne)}}else{for(let j=0;j<et;j++){const ne=Ge[j];Z(ne[2],ne[1],ne[0])}for(let j=0;j<et;j++){const ne=Ge[j];Z(ne[0]+Y*u,ne[1]+Y*u,ne[2]+Y*u)}}i.addGroup(K,r.length/3-K,0)}function ue(){const K=r.length/3;let j=0;Be(B,j),j+=B.length;for(let ne=0,Q=C.length;ne<Q;ne++){const _e=C[ne];Be(_e,j),j+=_e.length}i.addGroup(K,r.length/3-K,1)}function Be(K,j){let ne=K.length;for(;--ne>=0;){const Q=ne;let _e=ne-1;_e<0&&(_e=K.length-1);for(let oe=0,xe=u+v*2;oe<xe;oe++){const it=Y*oe,tt=Y*(oe+1),T=j+Q+it,M=j+_e+it,V=j+_e+tt,X=j+Q+tt;Me(T,M,V,X)}}}function Ie(K,j,ne){c.push(K),c.push(j),c.push(ne)}function Z(K,j,ne){Re(K),Re(j),Re(ne);const Q=r.length/3,_e=S.generateTopUV(i,r,Q-3,Q-2,Q-1);D(_e[0]),D(_e[1]),D(_e[2])}function Me(K,j,ne,Q){Re(K),Re(j),Re(Q),Re(j),Re(ne),Re(Q);const _e=r.length/3,oe=S.generateSideWallUV(i,r,_e-6,_e-3,_e-2,_e-1);D(oe[0]),D(oe[1]),D(oe[3]),D(oe[1]),D(oe[2]),D(oe[3])}function Re(K){r.push(c[K*3+0]),r.push(c[K*3+1]),r.push(c[K*3+2])}function D(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Km(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new da[r.type]().fromJSON(r)),new eo(i,e.options)}}const Jm={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new pe(s,o),new pe(a,c),new pe(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],p=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],v=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new pe(o,1-c),new pe(l,1-d),new pe(p,1-g),new pe(_,1-m)]:[new pe(a,1-c),new pe(u,1-d),new pe(f,1-g),new pe(v,1-m)]}};function Km(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fo extends Sa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fo(e.radius,e.detail)}}class Un extends Zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,f=[],g=[],_=[],v=[];for(let m=0;m<u;m++){const S=m*p-o;for(let b=0;b<l;b++){const x=b*d-s;g.push(x,-S,0),_.push(0,0,1),v.push(b/a),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const b=S+l*m,x=S+l*(m+1),L=S+1+l*(m+1),A=S+1+l*m;f.push(b,x,A),f.push(x,L,A)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ea extends Zt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=e;const p=(t-e)/r,f=new U,g=new pe;for(let _=0;_<=r;_++){for(let v=0;v<=i;v++){const m=s+v/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=p}for(let _=0;_<r;_++){const v=_*(i+1);for(let m=0;m<i;m++){const S=m+v,b=S,x=S+i+1,L=S+i+2,A=S+1;a.push(b,x,A),a.push(x,L,A)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ql extends Zt{constructor(e=new ls([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(s,3)),this.setAttribute("uv",new ft(o,2));function l(u){const d=r.length/3,p=u.extractPoints(t);let f=p.shape;const g=p.holes;Ci.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,m=g.length;v<m;v++){const S=g[v];Ci.isClockWise(S)===!0&&(g[v]=S.reverse())}const _=Ci.triangulateShape(f,g);for(let v=0,m=g.length;v<m;v++){const S=g[v];f=f.concat(S)}for(let v=0,m=f.length;v<m;v++){const S=f[v];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let v=0,m=_.length;v<m;v++){const S=_[v],b=S[0]+d,x=S[1]+d,L=S[2]+d;i.push(b,x,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Zm(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new ql(i,e.curveSegments)}}function Zm(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class yn extends Zt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new U,p=new U,f=[],g=[],_=[],v=[];for(let m=0;m<=i;m++){const S=[],b=m/i;let x=0;m===0&&o===0?x=.5/t:m===i&&c===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const A=L/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),v.push(A+x,1-b),S.push(l++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const b=u[m][S+1],x=u[m][S],L=u[m+1][S],A=u[m+1][S+1];(m!==0||o>0)&&f.push(b,x,A),(m!==i-1||c<Math.PI)&&f.push(x,L,A)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ci extends Zt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new U,d=new U,p=new U;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const _=g/r*s,v=f/i*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(_),d.y=(e+t*Math.cos(v))*Math.sin(_),d.z=t*Math.sin(v),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(d,u).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,v=(r+1)*(f-1)+g-1,m=(r+1)*(f-1)+g,S=(r+1)*f+g;o.push(_,v,S),o.push(v,m,S)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ta extends Zt{constructor(e=new mh(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new pe;let u=new U;const d=[],p=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(p,3)),this.setAttribute("uv",new ft(f,2));function _(){for(let b=0;b<t;b++)v(b);v(s===!1?t:0),S(),m()}function v(b){u=e.getPointAt(b/t,u);const x=o.normals[b],L=o.binormals[b];for(let A=0;A<=r;A++){const P=A/r*Math.PI*2,I=Math.sin(P),y=-Math.cos(P);c.x=y*x.x+I*L.x,c.y=y*x.y+I*L.y,c.z=y*x.z+I*L.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let x=1;x<=r;x++){const L=(r+1)*(b-1)+(x-1),A=(r+1)*b+(x-1),P=(r+1)*b+x,I=(r+1)*(b-1)+x;g.push(L,A,I),g.push(A,P,I)}}function S(){for(let b=0;b<=t;b++)for(let x=0;x<=r;x++)l.x=b/t,l.y=x/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ta(new da[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Oi extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Er extends vs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Qm extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eg extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bh extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Xl extends bh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pc=new bt,td=new U,nd=new U;class tg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mh extends ch{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ng extends tg{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Aa extends bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new ng}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ig extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const id=new bt;class wh{constructor(e,t,i=0,r=1/0){this.ray=new ih(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(e,t=!0,i=[]){return ml(e,this,i,t),i.sort(rd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ml(e[r],this,i,t);return i.sort(rd),i}}function rd(n,e){return n.distance-e.distance}function ml(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ml(s[o],e,t,!0)}}function sd(n,e,t,i){const r=rg(i);switch(t){case Jd:return n*e;case Ll:return n*e/r.components*r.byteLength;case Dl:return n*e/r.components*r.byteLength;case Zd:return n*e*2/r.components*r.byteLength;case Il:return n*e*2/r.components*r.byteLength;case Kd:return n*e*3/r.components*r.byteLength;case Wn:return n*e*4/r.components*r.byteLength;case Ul:return n*e*4/r.components*r.byteLength;case Zo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(n,16)*Math.max(e,8)/4;case Hc:case Gc:return Math.max(n,8)*Math.max(e,8)/2;case $c:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case na:case cl:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qd:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rg(n){switch(n){case ui:case Xd:return{byteLength:1,components:1};case qs:case Yd:case lo:return{byteLength:2,components:1};case Rl:case Pl:return{byteLength:2,components:4};case Mr:case Cl:case si:return{byteLength:4,components:1};case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);function Sh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sg(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
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
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xg=`#ifdef USE_IRIDESCENCE
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
#endif`,yg=`#ifdef USE_BUMPMAP
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rg=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,r0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
}`,fv=`#define DISTANCE
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
}`,pv=`#define DISTANCE
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
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
}`,_v=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,yv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,Mv=`#define LAMBERT
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
}`,wv=`#define MATCAP
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
}`,Sv=`#define MATCAP
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
}`,Ev=`#define NORMAL
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
}`,Tv=`#define NORMAL
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
}`,Av=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Rv=`#define STANDARD
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
}`,Pv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Iv=`uniform float size;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,kv=`#include <common>
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
}`,Nv=`uniform vec3 color;
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
}`,Ov=`uniform float rotation;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:og,alphahash_pars_fragment:ag,alphamap_fragment:cg,alphamap_pars_fragment:lg,alphatest_fragment:ug,alphatest_pars_fragment:dg,aomap_fragment:hg,aomap_pars_fragment:fg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:vg,bsdfs:_g,iridescence_fragment:xg,bumpmap_pars_fragment:yg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Sg,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:Ag,color_vertex:Cg,common:Rg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ig,emissivemap_fragment:Ug,emissivemap_pars_fragment:kg,colorspace_fragment:Ng,colorspace_pars_fragment:Og,envmap_fragment:Fg,envmap_common_pars_fragment:Bg,envmap_pars_fragment:zg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Zg,envmap_vertex:Vg,fog_vertex:Gg,fog_pars_vertex:Wg,fog_fragment:$g,fog_pars_fragment:qg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:Yg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Kg,lights_toon_fragment:Qg,lights_toon_pars_fragment:e0,lights_phong_fragment:t0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:r0,lights_fragment_begin:s0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:d0,map_fragment:h0,map_pars_fragment:f0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:v0,morphinstance_vertex:_0,morphcolor_vertex:x0,morphnormal_vertex:y0,morphtarget_pars_vertex:b0,morphtarget_vertex:M0,normal_fragment_begin:w0,normal_fragment_maps:S0,normal_pars_fragment:E0,normal_pars_vertex:T0,normal_vertex:A0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:D0,opaque_fragment:I0,packing:U0,premultiplied_alpha_fragment:k0,project_vertex:N0,dithering_fragment:O0,dithering_pars_fragment:F0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:V0,shadowmap_vertex:G0,shadowmask_pars_fragment:W0,skinbase_vertex:$0,skinning_pars_vertex:q0,skinning_vertex:X0,skinnormal_vertex:Y0,specularmap_fragment:j0,specularmap_pars_fragment:J0,tonemapping_fragment:K0,tonemapping_pars_fragment:Z0,transmission_fragment:Q0,transmission_pars_fragment:ev,uv_pars_fragment:tv,uv_pars_vertex:nv,uv_vertex:iv,worldpos_vertex:rv,background_vert:sv,background_frag:ov,backgroundCube_vert:av,backgroundCube_frag:cv,cube_vert:lv,cube_frag:uv,depth_vert:dv,depth_frag:hv,distanceRGBA_vert:fv,distanceRGBA_frag:pv,equirect_vert:mv,equirect_frag:gv,linedashed_vert:vv,linedashed_frag:_v,meshbasic_vert:xv,meshbasic_frag:yv,meshlambert_vert:bv,meshlambert_frag:Mv,meshmatcap_vert:wv,meshmatcap_frag:Sv,meshnormal_vert:Ev,meshnormal_frag:Tv,meshphong_vert:Av,meshphong_frag:Cv,meshphysical_vert:Rv,meshphysical_frag:Pv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Iv,points_frag:Uv,shadow_vert:kv,shadow_frag:Nv,sprite_vert:Ov,sprite_frag:Fv},be={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ii={basic:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:hn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:hn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:hn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ut(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:hn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:hn([be.points,be.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:hn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:hn([be.common,be.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:hn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:hn([be.sprite,be.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:hn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:hn([be.lights,be.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ii.physical={uniforms:hn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Xo={r:0,b:0,g:0},hr=new di,Bv=new bt;function zv(n,e,t,i,r,s,o){const a=new ut(0);let c=s===!0?0:1,l,u,d=null,p=0,f=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const L=g(b);L===null?m(a,c):L&&L.isColor&&(m(L,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,x){const L=g(x);L&&(L.isCubeTexture||L.mapping===wa)?(u===void 0&&(u=new me(new Bt(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:cs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hr.copy(x.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(hr)),u.material.toneMapped=vt.getTransfer(L.colorSpace)!==wt,(d!==L||p!==L.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=L,p=L.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new me(new Un(2,2),new ir({name:"BackgroundMaterial",uniforms:cs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=vt.getTransfer(L.colorSpace)!==wt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||p!==L.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=L,p=L.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,x){b.getRGB(Xo,ah(n)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:_,addToRenderList:v,dispose:S}}function Hv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(w,C,R,k,O){let B=!1;const F=d(k,R,C);s!==F&&(s=F,l(s.object)),B=f(w,k,R,O),B&&g(w,k,R,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(w,C,R,k),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,C,R){const k=R.wireframe===!0;let O=i[w.id];O===void 0&&(O={},i[w.id]=O);let B=O[C.id];B===void 0&&(B={},O[C.id]=B);let F=B[k];return F===void 0&&(F=p(c()),B[k]=F),F}function p(w){const C=[],R=[],k=[];for(let O=0;O<t;O++)C[O]=0,R[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:R,attributeDivisors:k,object:w,attributes:{},index:null}}function f(w,C,R,k){const O=s.attributes,B=C.attributes;let F=0;const Y=R.getAttributes();for(const G in Y)if(Y[G].location>=0){const ae=O[G];let Ae=B[G];if(Ae===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Ae=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Ae=w.instanceColor)),ae===void 0||ae.attribute!==Ae||Ae&&ae.data!==Ae.data)return!0;F++}return s.attributesNum!==F||s.index!==k}function g(w,C,R,k){const O={},B=C.attributes;let F=0;const Y=R.getAttributes();for(const G in Y)if(Y[G].location>=0){let ae=B[G];ae===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const Ae={};Ae.attribute=ae,ae&&ae.data&&(Ae.data=ae.data),O[G]=Ae,F++}s.attributes=O,s.attributesNum=F,s.index=k}function _(){const w=s.newAttributes;for(let C=0,R=w.length;C<R;C++)w[C]=0}function v(w){m(w,0)}function m(w,C){const R=s.newAttributes,k=s.enabledAttributes,O=s.attributeDivisors;R[w]=1,k[w]===0&&(n.enableVertexAttribArray(w),k[w]=1),O[w]!==C&&(n.vertexAttribDivisor(w,C),O[w]=C)}function S(){const w=s.newAttributes,C=s.enabledAttributes;for(let R=0,k=C.length;R<k;R++)C[R]!==w[R]&&(n.disableVertexAttribArray(R),C[R]=0)}function b(w,C,R,k,O,B,F){F===!0?n.vertexAttribIPointer(w,C,R,O,B):n.vertexAttribPointer(w,C,R,k,O,B)}function x(w,C,R,k){_();const O=k.attributes,B=R.getAttributes(),F=C.defaultAttributeValues;for(const Y in B){const G=B[Y];if(G.location>=0){let se=O[Y];if(se===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),se!==void 0){const ae=se.normalized,Ae=se.itemSize,he=e.get(se);if(he===void 0)continue;const Ge=he.buffer,et=he.type,$=he.bytesPerElement,ve=et===n.INT||et===n.UNSIGNED_INT||se.gpuType===Cl;if(se.isInterleavedBufferAttribute){const ue=se.data,Be=ue.stride,Ie=se.offset;if(ue.isInstancedInterleavedBuffer){for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z,ue.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Z=0;Z<G.locationSize;Z++)v(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Z=0;Z<G.locationSize;Z++)b(G.location+Z,Ae/G.locationSize,et,ae,Be*$,(Ie+Ae/G.locationSize*Z)*$,ve)}else{if(se.isInstancedBufferAttribute){for(let ue=0;ue<G.locationSize;ue++)m(G.location+ue,se.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ue=0;ue<G.locationSize;ue++)v(G.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ue=0;ue<G.locationSize;ue++)b(G.location+ue,Ae/G.locationSize,et,ae,Ae*$,Ae/G.locationSize*ue*$,ve)}}else if(F!==void 0){const ae=F[Y];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(G.location,ae);break;case 3:n.vertexAttrib3fv(G.location,ae);break;case 4:n.vertexAttrib4fv(G.location,ae);break;default:n.vertexAttrib1fv(G.location,ae)}}}}S()}function L(){I();for(const w in i){const C=i[w];for(const R in C){const k=C[R];for(const O in k)u(k[O].object),delete k[O];delete C[R]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const C=i[w.id];for(const R in C){const k=C[R];for(const O in k)u(k[O].object),delete k[O];delete C[R]}delete i[w.id]}function P(w){for(const C in i){const R=i[C];if(R[w.id]===void 0)continue;const k=R[w.id];for(const O in k)u(k[O].object),delete k[O];delete R[w.id]}}function I(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:v,disableUnusedAttributes:S}}function Vv(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*p[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Gv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ui&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==si&&!I)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function Wv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ji,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,_=d.clipIntersection,v=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!v)s?u(null):l();else{const S=s?0:i,b=S*4;let x=m.clippingState||null;c.value=x,x=u(g,p,b,f);for(let L=0;L!==b;++L)x[L]=t[L];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,f,g){const _=d!==null?d.length:0;let v=null;if(_!==0){if(v=c.value,g!==!0||v===null){const m=f+_*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(v===null||v.length<m)&&(v=new Float32Array(m));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(v,x),v[x+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function $v(n){let e=new WeakMap;function t(o,a){return a===Fc?o.mapping=ss:a===Bc&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fc||a===Bc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new pm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Kr=4,od=[.125,.215,.35,.446,.526,.582],vr=20,mc=new Mh,ad=new ut;let gc=null,vc=0,_c=0,xc=!1;const pr=(1+Math.sqrt(5))/2,Xr=1/pr,cd=[new U(-pr,Xr,0),new U(pr,Xr,0),new U(-Xr,0,pr),new U(Xr,0,pr),new U(0,pr,-Xr),new U(0,pr,Xr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],qv=new U;class ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=qv}=s;gc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,vc,_c),this._renderer.xr.enabled=xc,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:lo,format:Wn,colorSpace:as,depthBuffer:!1},r=ud(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xv(s)),this._blurMaterial=Yv(s,e,t)}return r}_compileMaterial(e){const t=new me(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,i,r,s){const c=new vn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(ad),d.toneMapping=er,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new $t({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),v=new me(new Bt,_);let m=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,m=!0):(_.color.copy(ad),m=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):x===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const L=this._cubeSize;Yo(r,x*L,b>2?L:0,L,L),d.setRenderTarget(r),m&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Yo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cd[(r-s-1)%cd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new me(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*vr-1),_=s/g,v=isFinite(s)?1+Math.floor(u*_):vr;v>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${vr}`);const m=[];let S=0;for(let P=0;P<vr;++P){const I=P/_,y=Math.exp(-I*I/2);m.push(y),P===0?S+=y:P<v&&(S+=2*y)}for(let P=0;P<m.length;P++)m[P]=m[P]/S;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-i;const x=this._sizeLods[r],L=3*x*(r>b-Kr?r-b+Kr:0),A=4*(this._cubeSize-x);Yo(t,L,A,3*x,2*x),c.setRenderTarget(t),c.render(d,mc)}}function Xv(n){const e=[],t=[],i=[];let r=n;const s=n-Kr+1+od.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Kr?c=od[o-n+Kr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,v=2,m=1,S=new Float32Array(_*g*f),b=new Float32Array(v*g*f),x=new Float32Array(m*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,I=A>2?0:-1,y=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];S.set(y,_*g*A),b.set(p,v*g*A);const w=[A,A,A,A,A,A];x.set(w,m*g*A)}const L=new Zt;L.setAttribute("position",new In(S,_)),L.setAttribute("uv",new In(b,v)),L.setAttribute("faceIndex",new In(x,m)),e.push(L),r>Kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ud(n,e,t){const i=new ki(n,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Yv(n,e,t){const i=new Float32Array(vr),r=new U(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function dd(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function hd(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function jv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fc||c===Bc,u=c===ss||c===os;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new ld(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new ld(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Jv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ts("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Kv(n,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const f in p)e.update(p[f],n.ARRAY_BUFFER)}function l(d){const p=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let b=0,x=S.length;b<x;b+=3){const L=S[b+0],A=S[b+1],P=S[b+2];p.push(L,A,A,P,P,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,x=S.length/3-1;b<x;b+=3){const L=b+0,A=b+1,P=b+2;p.push(L,A,A,P,P,L)}}else return;const v=new(th(p)?oh:sh)(p,1);v.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,v)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Zv(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*o),t.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*o,g),t.update(f,i,g))}function u(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let v=0;for(let m=0;m<g;m++)v+=f[m];t.update(v,i,1)}function d(p,f,g,_){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p.length;m++)l(p[m]/o,f[m],_[m]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S]*_[S];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Qv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e_(n,e,t){const i=new WeakMap,r=new zt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,L=1;x>e.maxTextureSize&&(L=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*L*4*d),P=new nh(A,x,L,d);P.type=si,P.needsUpdate=!0;const I=b*4;for(let w=0;w<d;w++){const C=v[w],R=m[w],k=S[w],O=x*L*4*w;for(let B=0;B<C.count;B++){const F=B*I;f===!0&&(r.fromBufferAttribute(C,B),A[O+F+0]=r.x,A[O+F+1]=r.y,A[O+F+2]=r.z,A[O+F+3]=0),g===!0&&(r.fromBufferAttribute(R,B),A[O+F+4]=r.x,A[O+F+5]=r.y,A[O+F+6]=r.z,A[O+F+7]=0),_===!0&&(r.fromBufferAttribute(k,B),A[O+F+8]=r.x,A[O+F+9]=r.y,A[O+F+10]=r.z,A[O+F+11]=k.itemSize===4?r.w:1)}}p={count:d,texture:P,size:new pe(x,L)},i.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function t_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Eh=new sn,fd=new dh(1,1),Th=new nh,Ah=new Kp,Ch=new lh,pd=[],md=[],gd=new Float32Array(16),vd=new Float32Array(9),_d=new Float32Array(4);function _s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=pd[r];if(s===void 0&&(s=new Float32Array(r),pd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ca(n,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function o_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;_d.set(i),n.uniformMatrix2fv(this.addr,!1,_d),Yt(t,i)}}function a_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;vd.set(i),n.uniformMatrix3fv(this.addr,!1,vd),Yt(t,i)}}function c_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,i))return;gd.set(i),n.uniformMatrix4fv(this.addr,!1,gd),Yt(t,i)}}function l_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function f_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function v_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(fd.compareFunction=eh,s=fd):s=Eh,t.setTexture2D(e||s,r)}function __(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ah,r)}function x_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ch,r)}function y_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Th,r)}function b_(n){switch(n){case 5126:return n_;case 35664:return i_;case 35665:return r_;case 35666:return s_;case 35674:return o_;case 35675:return a_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return h_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return y_}}function M_(n,e){n.uniform1fv(this.addr,e)}function w_(n,e){const t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function S_(n,e){const t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function E_(n,e){const t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function T_(n,e){const t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A_(n,e){const t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function C_(n,e){const t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function R_(n,e){n.uniform1iv(this.addr,e)}function P_(n,e){n.uniform2iv(this.addr,e)}function L_(n,e){n.uniform3iv(this.addr,e)}function D_(n,e){n.uniform4iv(this.addr,e)}function I_(n,e){n.uniform1uiv(this.addr,e)}function U_(n,e){n.uniform2uiv(this.addr,e)}function k_(n,e){n.uniform3uiv(this.addr,e)}function N_(n,e){n.uniform4uiv(this.addr,e)}function O_(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Eh,s[o])}function F_(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ah,s[o])}function B_(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ch,s[o])}function z_(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Th,s[o])}function H_(n){switch(n){case 5126:return M_;case 35664:return w_;case 35665:return S_;case 35666:return E_;case 35674:return T_;case 35675:return A_;case 35676:return C_;case 5124:case 35670:return R_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return I_;case 36294:return U_;case 36295:return k_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}class V_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=b_(t.type)}}class G_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}}class W_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function xd(n,e){n.seq.push(e),n.map[e.id]=e}function $_(n,e,t){const i=n.name,r=i.length;for(yc.lastIndex=0;;){const s=yc.exec(i),o=yc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){xd(t,l===void 0?new V_(a,n,e):new G_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new W_(a),xd(t,d)),t=d}}}class ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);$_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function yd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q_=37297;let X_=0;function Y_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const bd=new ot;function j_(n){vt._getMatrix(bd,vt.workingColorSpace,n);const e=`mat3( ${bd.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case ca:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Y_(n.getShaderSource(e),a)}else return s}function J_(n,e){const t=j_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function K_(n,e){let t;switch(e){case dp:t="Linear";break;case hp:t="Reinhard";break;case fp:t="Cineon";break;case $d:t="ACESFilmic";break;case mp:t="AgX";break;case gp:t="Neutral";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jo=new U;function Z_(){vt.getLuminanceCoefficients(jo);const n=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function ex(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ks(n){return n!==""}function wd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(nx,rx)}const ix=new Map;function rx(n,e){let t=ct[e];if(t===void 0){const i=ix.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(n){return n.replace(sx,ox)}function ox(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Td(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ax(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function cx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===os&&(e="ENVMAP_MODE_REFRACTION"),e}function ux(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wd:e="ENVMAP_BLENDING_MULTIPLY";break;case lp:e="ENVMAP_BLENDING_MIX";break;case up:e="ENVMAP_BLENDING_ADD";break}return e}function dx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ax(t),l=cx(t),u=lx(t),d=ux(t),p=dx(t),f=Q_(t),g=ex(s),_=r.createProgram();let v,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`)):(v=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),m=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?ct.tonemapping_pars_fragment:"",t.toneMapping!==er?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,J_("linearToOutputTexel",t.outputColorSpace),Z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=gl(o),o=wd(o,t),o=Sd(o,t),a=gl(a),a=wd(a,t),a=Sd(a,t),o=Ed(o),a=Ed(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=S+v+o,x=S+m+a,L=yd(r,r.VERTEX_SHADER,b),A=yd(r,r.FRAGMENT_SHADER,x);r.attachShader(_,L),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(C){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(L)||"",O=r.getShaderInfoLog(A)||"",B=R.trim(),F=k.trim(),Y=O.trim();let G=!0,se=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,A);else{const ae=Md(r,L,"vertex"),Ae=Md(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+ae+`
`+Ae)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||Y==="")&&(se=!1);se&&(C.diagnostics={runnable:G,programLog:B,vertexShader:{log:F,prefix:v},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(L),r.deleteShader(A),I=new ia(r,_),y=tx(r,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,q_)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let fx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mx(e),t.set(e,i)),i}}class mx{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}}function gx(n,e,t,i,r,s,o){const a=new Fl,c=new px,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,w,C,R,k){const O=R.fog,B=k.geometry,F=y.isMeshStandardMaterial?R.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),G=Y&&Y.mapping===wa?Y.image.height:null,se=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ae=ae!==void 0?ae.length:0;let he=0;B.morphAttributes.position!==void 0&&(he=1),B.morphAttributes.normal!==void 0&&(he=2),B.morphAttributes.color!==void 0&&(he=3);let Ge,et,$,ve;if(se){const xt=ii[se];Ge=xt.vertexShader,et=xt.fragmentShader}else Ge=y.vertexShader,et=y.fragmentShader,c.update(y),$=c.getVertexShaderID(y),ve=c.getFragmentShaderID(y);const ue=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,Z=k.isBatchedMesh===!0,Me=!!y.map,Re=!!y.matcap,D=!!Y,K=!!y.aoMap,j=!!y.lightMap,ne=!!y.bumpMap,Q=!!y.normalMap,_e=!!y.displacementMap,oe=!!y.emissiveMap,xe=!!y.metalnessMap,it=!!y.roughnessMap,tt=y.anisotropy>0,T=y.clearcoat>0,M=y.dispersion>0,V=y.iridescence>0,X=y.sheen>0,re=y.transmission>0,J=tt&&!!y.anisotropyMap,Fe=T&&!!y.clearcoatMap,ge=T&&!!y.clearcoatNormalMap,ke=T&&!!y.clearcoatRoughnessMap,Ne=V&&!!y.iridescenceMap,ce=V&&!!y.iridescenceThicknessMap,Te=X&&!!y.sheenColorMap,Ze=X&&!!y.sheenRoughnessMap,ze=!!y.specularMap,we=!!y.specularColorMap,st=!!y.specularIntensityMap,N=re&&!!y.transmissionMap,fe=re&&!!y.thicknessMap,ye=!!y.gradientMap,De=!!y.alphaMap,le=y.alphaTest>0,te=!!y.alphaHash,Oe=!!y.extensions;let rt=er;y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(rt=n.toneMapping);const Ct={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:Ge,fragmentShader:et,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Z,batchingColor:Z&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:as,alphaToCoverage:!!y.alphaToCoverage,map:Me,matcap:Re,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:j,bumpMap:ne,normalMap:Q,displacementMap:p&&_e,emissiveMap:oe,normalMapObjectSpace:Q&&y.normalMapType===yp,normalMapTangentSpace:Q&&y.normalMapType===kl,metalnessMap:xe,roughnessMap:it,anisotropy:tt,anisotropyMap:J,clearcoat:T,clearcoatMap:Fe,clearcoatNormalMap:ge,clearcoatRoughnessMap:ke,dispersion:M,iridescence:V,iridescenceMap:Ne,iridescenceThicknessMap:ce,sheen:X,sheenColorMap:Te,sheenRoughnessMap:Ze,specularMap:ze,specularColorMap:we,specularIntensityMap:st,transmission:re,transmissionMap:N,thicknessMap:fe,gradientMap:ye,opaque:y.transparent===!1&&y.blending===es&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:le,alphaHash:te,combine:y.combine,mapUv:Me&&_(y.map.channel),aoMapUv:K&&_(y.aoMap.channel),lightMapUv:j&&_(y.lightMap.channel),bumpMapUv:ne&&_(y.bumpMap.channel),normalMapUv:Q&&_(y.normalMap.channel),displacementMapUv:_e&&_(y.displacementMap.channel),emissiveMapUv:oe&&_(y.emissiveMap.channel),metalnessMapUv:xe&&_(y.metalnessMap.channel),roughnessMapUv:it&&_(y.roughnessMap.channel),anisotropyMapUv:J&&_(y.anisotropyMap.channel),clearcoatMapUv:Fe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(y.sheenRoughnessMap.channel),specularMapUv:ze&&_(y.specularMap.channel),specularColorMapUv:we&&_(y.specularColorMap.channel),specularIntensityMapUv:st&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:fe&&_(y.thicknessMap.channel),alphaMapUv:De&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Q||tt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Me||De),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Be,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&vt.getTransfer(y.map.colorSpace)===wt,decodeVideoTextureEmissive:oe&&y.emissiveMap.isVideoTexture===!0&&vt.getTransfer(y.emissiveMap.colorSpace)===wt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||Z)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)w.push(C),w.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(S(w,y),b(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function S(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const w=g[y.type];let C;if(w){const R=ii[w];C=um.clone(R.uniforms)}else C=y.uniforms;return C}function L(y,w){let C;for(let R=0,k=u.length;R<k;R++){const O=u[R];if(O.cacheKey===w){C=O,++C.usedTimes;break}}return C===void 0&&(C=new hx(n,w,y,s),u.push(C)),C}function A(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function P(y){c.remove(y)}function I(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:I}}function vx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function _x(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,f,g,_,v){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:v},n[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=v),e++,m}function a(d,p,f,g,_,v){const m=o(d,p,f,g,_,v);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(d,p,f,g,_,v){const m=o(d,p,f,g,_,v);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,p){t.length>1&&t.sort(d||_x),i.length>1&&i.sort(p||Ad),r.length>1&&r.sort(p||Ad)}function u(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function xx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cd,n.set(i,[o])):r>=s.length?(o=new Cd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ut};break;case"SpotLight":t={position:new U,direction:new U,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function bx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Mx=0;function wx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sx(n){const e=new yx,t=bx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new bt,o=new bt;function a(l){let u=0,d=0,p=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,v=0,m=0,S=0,b=0,x=0,L=0,A=0,P=0;l.sort(wx);for(let y=0,w=l.length;y<w;y++){const C=l[y],R=C.color,k=C.intensity,O=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=R.r*k,d+=R.g*k,p+=R.b*k;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],k);P++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=C.shadow.matrix,S++}i.directional[f]=F,f++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(R).multiplyScalar(k),F.distance=O,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[_]=F;const Y=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,Y.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=Y.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=B,x++}_++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(R).multiplyScalar(k),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=F,v++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=F,g++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(k),F.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[m]=F,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==m||I.numDirectionalShadows!==S||I.numPointShadows!==b||I.numSpotShadows!==x||I.numSpotMaps!==L||I.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=m,I.numDirectionalShadows=S,I.numPointShadows=b,I.numSpotShadows=x,I.numSpotMaps=L,I.numLightProbes=P,i.version=Mx++)}function c(l,u){let d=0,p=0,f=0,g=0,_=0;const v=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const b=l[m];if(b.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),d++}else if(b.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),f++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(b.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(v),p++}else if(b.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:a,setupView:c,state:i}}function Rd(n){const e=new Sx(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ex(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rd(n),e.set(r,[a])):s>=o.length?(a=new Rd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`;function Cx(n,e,t){let i=new Hl;const r=new pe,s=new pe,o=new zt,a=new Qm({depthPacking:xp}),c=new eg,l={},u=t.maxTextureSize,d={[nr]:mn,[mn]:nr,[_n]:_n},p=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vd;let m=this.type;this.render=function(A,P,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const y=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Qi),R.buffers.depth.getReversed()?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const k=m!==Ai&&this.type===Ai,O=m===Ai&&this.type!==Ai;for(let B=0,F=A.length;B<F;B++){const Y=A[B],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const se=G.getFrameExtents();if(r.multiply(se),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||k===!0||O===!0){const Ae=this.type!==Ai?{minFilter:Cn,magFilter:Cn}:{};G.map!==null&&G.map.dispose(),G.map=new ki(r.x,r.y,Ae),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ae=G.getViewportCount();for(let Ae=0;Ae<ae;Ae++){const he=G.getViewport(Ae);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),R.viewport(o),G.updateMatrices(Y,Ae),i=G.getFrustum(),x(P,I,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Ai&&S(G,I),G.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(y,w,C)};function S(A,P){const I=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ki(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,I,p,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,I,f,_,null)}function b(A,P,I,y){let w=null;const C=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)w=C;else if(w=I.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const R=w.uuid,k=P.uuid;let O=l[R];O===void 0&&(O={},l[R]=O);let B=O[k];B===void 0&&(B=w.clone(),O[k]=B,P.addEventListener("dispose",L)),w=B}if(w.visible=P.visible,w.wireframe=P.wireframe,y===Ai?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:d[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=n.properties.get(w);R.light=I}return w}function x(A,P,I,y,w){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const k=e.update(A),O=A.material;if(Array.isArray(O)){const B=k.groups;for(let F=0,Y=B.length;F<Y;F++){const G=B[F],se=O[G.materialIndex];if(se&&se.visible){const ae=b(A,se,y,w);A.onBeforeShadow(n,A,P,I,k,ae,G),n.renderBufferDirect(I,null,k,ae,A,G),A.onAfterShadow(n,A,P,I,k,ae,G)}}}else if(O.visible){const B=b(A,O,y,w);A.onBeforeShadow(n,A,P,I,k,B,null),n.renderBufferDirect(I,null,k,B,A,null),A.onAfterShadow(n,A,P,I,k,B,null)}}const R=A.children;for(let k=0,O=R.length;k<O;k++)x(R[k],P,I,y,w)}function L(A){A.target.removeEventListener("dispose",L);for(const I in l){const y=l[I],w=A.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}const Rx={[Lc]:Dc,[Ic]:Nc,[Uc]:Oc,[rs]:kc,[Dc]:Lc,[Nc]:Ic,[Oc]:Uc,[kc]:rs};function Px(n,e){function t(){let N=!1;const fe=new zt;let ye=null;const De=new zt(0,0,0,0);return{setMask:function(le){ye!==le&&!N&&(n.colorMask(le,le,le,le),ye=le)},setLocked:function(le){N=le},setClear:function(le,te,Oe,rt,Ct){Ct===!0&&(le*=rt,te*=rt,Oe*=rt),fe.set(le,te,Oe,rt),De.equals(fe)===!1&&(n.clearColor(le,te,Oe,rt),De.copy(fe))},reset:function(){N=!1,ye=null,De.set(-1,0,0,0)}}}function i(){let N=!1,fe=!1,ye=null,De=null,le=null;return{setReversed:function(te){if(fe!==te){const Oe=e.get("EXT_clip_control");te?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),fe=te;const rt=le;le=null,this.setClear(rt)}},getReversed:function(){return fe},setTest:function(te){te?ue(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(te){ye!==te&&!N&&(n.depthMask(te),ye=te)},setFunc:function(te){if(fe&&(te=Rx[te]),De!==te){switch(te){case Lc:n.depthFunc(n.NEVER);break;case Dc:n.depthFunc(n.ALWAYS);break;case Ic:n.depthFunc(n.LESS);break;case rs:n.depthFunc(n.LEQUAL);break;case Uc:n.depthFunc(n.EQUAL);break;case kc:n.depthFunc(n.GEQUAL);break;case Nc:n.depthFunc(n.GREATER);break;case Oc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=te}},setLocked:function(te){N=te},setClear:function(te){le!==te&&(fe&&(te=1-te),n.clearDepth(te),le=te)},reset:function(){N=!1,ye=null,De=null,le=null,fe=!1}}}function r(){let N=!1,fe=null,ye=null,De=null,le=null,te=null,Oe=null,rt=null,Ct=null;return{setTest:function(xt){N||(xt?ue(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(xt){fe!==xt&&!N&&(n.stencilMask(xt),fe=xt)},setFunc:function(xt,bi,ni){(ye!==xt||De!==bi||le!==ni)&&(n.stencilFunc(xt,bi,ni),ye=xt,De=bi,le=ni)},setOp:function(xt,bi,ni){(te!==xt||Oe!==bi||rt!==ni)&&(n.stencilOp(xt,bi,ni),te=xt,Oe=bi,rt=ni)},setLocked:function(xt){N=xt},setClear:function(xt){Ct!==xt&&(n.clearStencil(xt),Ct=xt)},reset:function(){N=!1,fe=null,ye=null,De=null,le=null,te=null,Oe=null,rt=null,Ct=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,f=[],g=null,_=!1,v=null,m=null,S=null,b=null,x=null,L=null,A=null,P=new ut(0,0,0),I=0,y=!1,w=null,C=null,R=null,k=null,O=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=Y>=2);let se=null,ae={};const Ae=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Ge=new zt().fromArray(Ae),et=new zt().fromArray(he);function $(N,fe,ye,De){const le=new Uint8Array(4),te=n.createTexture();n.bindTexture(N,te),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<ye;Oe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(fe+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return te}const ve={};ve[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(rs),ne(!1),Q(Mu),ue(n.CULL_FACE),K(Qi);function ue(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Be(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ie(N,fe){return d[N]!==fe?(n.bindFramebuffer(N,fe),d[N]=fe,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Z(N,fe){let ye=f,De=!1;if(N){ye=p.get(fe),ye===void 0&&(ye=[],p.set(fe,ye));const le=N.textures;if(ye.length!==le.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Oe=le.length;te<Oe;te++)ye[te]=n.COLOR_ATTACHMENT0+te;ye.length=le.length,De=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,De=!0);De&&n.drawBuffers(ye)}function Me(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const Re={[gr]:n.FUNC_ADD,[qf]:n.FUNC_SUBTRACT,[Xf]:n.FUNC_REVERSE_SUBTRACT};Re[Yf]=n.MIN,Re[jf]=n.MAX;const D={[Jf]:n.ZERO,[Kf]:n.ONE,[Zf]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[rp]:n.SRC_ALPHA_SATURATE,[np]:n.DST_COLOR,[ep]:n.DST_ALPHA,[Qf]:n.ONE_MINUS_SRC_COLOR,[Pc]:n.ONE_MINUS_SRC_ALPHA,[ip]:n.ONE_MINUS_DST_COLOR,[tp]:n.ONE_MINUS_DST_ALPHA,[sp]:n.CONSTANT_COLOR,[op]:n.ONE_MINUS_CONSTANT_COLOR,[ap]:n.CONSTANT_ALPHA,[cp]:n.ONE_MINUS_CONSTANT_ALPHA};function K(N,fe,ye,De,le,te,Oe,rt,Ct,xt){if(N===Qi){_===!0&&(Be(n.BLEND),_=!1);return}if(_===!1&&(ue(n.BLEND),_=!0),N!==$f){if(N!==v||xt!==y){if((m!==gr||x!==gr)&&(n.blendEquation(n.FUNC_ADD),m=gr,x=gr),xt)switch(N){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.ONE,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Su:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,b=null,L=null,A=null,P.set(0,0,0),I=0,v=N,y=xt}return}le=le||fe,te=te||ye,Oe=Oe||De,(fe!==m||le!==x)&&(n.blendEquationSeparate(Re[fe],Re[le]),m=fe,x=le),(ye!==S||De!==b||te!==L||Oe!==A)&&(n.blendFuncSeparate(D[ye],D[De],D[te],D[Oe]),S=ye,b=De,L=te,A=Oe),(rt.equals(P)===!1||Ct!==I)&&(n.blendColor(rt.r,rt.g,rt.b,Ct),P.copy(rt),I=Ct),v=N,y=!1}function j(N,fe){N.side===_n?Be(n.CULL_FACE):ue(n.CULL_FACE);let ye=N.side===mn;fe&&(ye=!ye),ne(ye),N.blending===es&&N.transparent===!1?K(Qi):K(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const De=N.stencilWrite;a.setTest(De),De&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(N){w!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),w=N)}function Q(N){N!==Gf?(ue(n.CULL_FACE),N!==C&&(N===Mu?n.cullFace(n.BACK):N===Wf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),C=N}function _e(N){N!==R&&(F&&n.lineWidth(N),R=N)}function oe(N,fe,ye){N?(ue(n.POLYGON_OFFSET_FILL),(k!==fe||O!==ye)&&(n.polygonOffset(fe,ye),k=fe,O=ye)):Be(n.POLYGON_OFFSET_FILL)}function xe(N){N?ue(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function it(N){N===void 0&&(N=n.TEXTURE0+B-1),se!==N&&(n.activeTexture(N),se=N)}function tt(N,fe,ye){ye===void 0&&(se===null?ye=n.TEXTURE0+B-1:ye=se);let De=ae[ye];De===void 0&&(De={type:void 0,texture:void 0},ae[ye]=De),(De.type!==N||De.texture!==fe)&&(se!==ye&&(n.activeTexture(ye),se=ye),n.bindTexture(N,fe||ve[N]),De.type=N,De.texture=fe)}function T(){const N=ae[se];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(N){Ge.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ge.copy(N))}function Ze(N){et.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),et.copy(N))}function ze(N,fe){let ye=l.get(fe);ye===void 0&&(ye=new WeakMap,l.set(fe,ye));let De=ye.get(N);De===void 0&&(De=n.getUniformBlockIndex(fe,N.name),ye.set(N,De))}function we(N,fe){const De=l.get(fe).get(N);c.get(fe)!==De&&(n.uniformBlockBinding(fe,De,N.__bindingPointIndex),c.set(fe,De))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,ae={},d={},p=new WeakMap,f=[],g=null,_=!1,v=null,m=null,S=null,b=null,x=null,L=null,A=null,P=new ut(0,0,0),I=0,y=!1,w=null,C=null,R=null,k=null,O=null,Ge.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Be,bindFramebuffer:Ie,drawBuffers:Z,useProgram:Me,setBlending:K,setMaterial:j,setFlipSided:ne,setCullFace:Q,setLineWidth:_e,setPolygonOffset:oe,setScissorTest:xe,activeTexture:it,bindTexture:tt,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Ne,texImage3D:ce,updateUBOMapping:ze,uniformBlockBinding:we,texStorage2D:ge,texStorage3D:ke,texSubImage2D:X,texSubImage3D:re,compressedTexSubImage2D:J,compressedTexSubImage3D:Fe,scissor:Te,viewport:Ze,reset:st}}function Lx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):ua("canvas")}function _(T,M,V){let X=1;const re=tt(T);if((re.width>V||re.height>V)&&(X=V/Math.max(re.width,re.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(X*re.width),Fe=Math.floor(X*re.height);d===void 0&&(d=g(J,Fe));const ge=M?g(J,Fe):d;return ge.width=J,ge.height=Fe,ge.getContext("2d").drawImage(T,0,0,J,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Fe+")."),ge}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}function v(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,M,V,X,re=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=M;if(M===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),M===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),M===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){const Fe=re?ca:vt.getTransfer(X);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Fe===wt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(T,M){let V;return T?M===null||M===Mr||M===Xs?V=n.DEPTH24_STENCIL8:M===si?V=n.DEPTH32F_STENCIL8:M===qs&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mr||M===Xs?V=n.DEPTH_COMPONENT24:M===si?V=n.DEPTH_COMPONENT32F:M===qs&&(V=n.DEPTH_COMPONENT16),V}function L(T,M){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==Cn&&T.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&u.delete(M)}function P(T){const M=T.target;M.removeEventListener("dispose",P),w(M)}function I(T){const M=i.get(T);if(M.__webglInit===void 0)return;const V=T.source,X=p.get(V);if(X){const re=X[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&y(T),Object.keys(X).length===0&&p.delete(V)}i.remove(T)}function y(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const V=T.source,X=p.get(V);delete X[M.__cacheKey],o.memory.textures--}function w(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let re=0;re<M.__webglFramebuffer[X].length;re++)n.deleteFramebuffer(M.__webglFramebuffer[X][re]);else n.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)n.deleteFramebuffer(M.__webglFramebuffer[X]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=T.textures;for(let X=0,re=V.length;X<re;X++){const J=i.get(V[X]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[X])}i.remove(T)}let C=0;function R(){C=0}function k(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function O(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function B(T,M){const V=i.get(T);if(T.isVideoTexture&&xe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,T,M);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function F(T,M){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){ve(V,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function Y(T,M){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){ve(V,T,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function G(T,M){const V=i.get(T);if(T.version>0&&V.__version!==T.version){ue(V,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const se={[aa]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},ae={[Cn]:n.NEAREST,[vp]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[xr]:n.LINEAR_MIPMAP_LINEAR},Ae={[bp]:n.NEVER,[Ap]:n.ALWAYS,[Mp]:n.LESS,[eh]:n.LEQUAL,[wp]:n.EQUAL,[Tp]:n.GEQUAL,[Sp]:n.GREATER,[Ep]:n.NOTEQUAL};function he(T,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===Va||M.magFilter===Eo||M.magFilter===xr||M.minFilter===ri||M.minFilter===Va||M.minFilter===Eo||M.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,se[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,se[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,se[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ae[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ae[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==Eo&&M.minFilter!==xr||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const X=M.source;let re=p.get(X);re===void 0&&(re={},p.set(X,re));const J=O(M);if(J!==T.__cacheKey){re[J]===void 0&&(re[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[J].usedTimes++;const Fe=re[T.__cacheKey];Fe!==void 0&&(re[T.__cacheKey].usedTimes--,Fe.usedTimes===0&&y(M)),T.__cacheKey=J,T.__webglTexture=re[J].texture}return V}function et(T,M,V){return Math.floor(Math.floor(T/V)/M)}function $(T,M,V,X){const J=T.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,X,M.data);else{J.sort((ce,Te)=>ce.start-Te.start);let Fe=0;for(let ce=1;ce<J.length;ce++){const Te=J[Fe],Ze=J[ce],ze=Te.start+Te.count,we=et(Ze.start,M.width,4),st=et(Te.start,M.width,4);Ze.start<=ze+1&&we===st&&et(Ze.start+Ze.count-1,M.width,4)===we?Te.count=Math.max(Te.count,Ze.start+Ze.count-Te.start):(++Fe,J[Fe]=Ze)}J.length=Fe+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),ke=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ce=0,Te=J.length;ce<Te;ce++){const Ze=J[ce],ze=Math.floor(Ze.start/4),we=Math.ceil(Ze.count/4),st=ze%M.width,N=Math.floor(ze/M.width),fe=we,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,st),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,st,N,fe,ye,V,X,M.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function ve(T,M,V){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);const re=Ge(T,M),J=M.source;t.bindTexture(X,T.__webglTexture,n.TEXTURE0+V);const Fe=i.get(J);if(J.version!==Fe.__version||re===!0){t.activeTexture(n.TEXTURE0+V);const ge=vt.getPrimaries(vt.workingColorSpace),ke=M.colorSpace===Ji?null:vt.getPrimaries(M.colorSpace),Ne=M.colorSpace===Ji||ge===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ce=_(M.image,!1,r.maxTextureSize);ce=it(M,ce);const Te=s.convert(M.format,M.colorSpace),Ze=s.convert(M.type);let ze=b(M.internalFormat,Te,Ze,M.colorSpace,M.isVideoTexture);he(X,M);let we;const st=M.mipmaps,N=M.isVideoTexture!==!0,fe=Fe.__version===void 0||re===!0,ye=J.dataReady,De=L(M,ce);if(M.isDepthTexture)ze=x(M.format===js,M.type),fe&&(N?t.texStorage2D(n.TEXTURE_2D,1,ze,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ze,ce.width,ce.height,0,Te,Ze,null));else if(M.isDataTexture)if(st.length>0){N&&fe&&t.texStorage2D(n.TEXTURE_2D,De,ze,st[0].width,st[0].height);for(let le=0,te=st.length;le<te;le++)we=st[le],N?ye&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,we.width,we.height,Te,Ze,we.data):t.texImage2D(n.TEXTURE_2D,le,ze,we.width,we.height,0,Te,Ze,we.data);M.generateMipmaps=!1}else N?(fe&&t.texStorage2D(n.TEXTURE_2D,De,ze,ce.width,ce.height),ye&&$(M,ce,Te,Ze)):t.texImage2D(n.TEXTURE_2D,0,ze,ce.width,ce.height,0,Te,Ze,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ze,st[0].width,st[0].height,ce.depth);for(let le=0,te=st.length;le<te;le++)if(we=st[le],M.format!==Wn)if(Te!==null)if(N){if(ye)if(M.layerUpdates.size>0){const Oe=sd(we.width,we.height,M.format,M.type);for(const rt of M.layerUpdates){const Ct=we.data.subarray(rt*Oe/we.data.BYTES_PER_ELEMENT,(rt+1)*Oe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,rt,we.width,we.height,1,Te,Ct)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,we.width,we.height,ce.depth,Te,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,ze,we.width,we.height,ce.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,we.width,we.height,ce.depth,Te,Ze,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,ze,we.width,we.height,ce.depth,0,Te,Ze,we.data)}else{N&&fe&&t.texStorage2D(n.TEXTURE_2D,De,ze,st[0].width,st[0].height);for(let le=0,te=st.length;le<te;le++)we=st[le],M.format!==Wn?Te!==null?N?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(n.TEXTURE_2D,le,ze,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ye&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,we.width,we.height,Te,Ze,we.data):t.texImage2D(n.TEXTURE_2D,le,ze,we.width,we.height,0,Te,Ze,we.data)}else if(M.isDataArrayTexture)if(N){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ze,ce.width,ce.height,ce.depth),ye)if(M.layerUpdates.size>0){const le=sd(ce.width,ce.height,M.format,M.type);for(const te of M.layerUpdates){const Oe=ce.data.subarray(te*le/ce.data.BYTES_PER_ELEMENT,(te+1)*le/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ce.width,ce.height,1,Te,Ze,Oe)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,Ze,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ce.width,ce.height,ce.depth,0,Te,Ze,ce.data);else if(M.isData3DTexture)N?(fe&&t.texStorage3D(n.TEXTURE_3D,De,ze,ce.width,ce.height,ce.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,Ze,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ce.width,ce.height,ce.depth,0,Te,Ze,ce.data);else if(M.isFramebufferTexture){if(fe)if(N)t.texStorage2D(n.TEXTURE_2D,De,ze,ce.width,ce.height);else{let le=ce.width,te=ce.height;for(let Oe=0;Oe<De;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,ze,le,te,0,Te,Ze,null),le>>=1,te>>=1}}else if(st.length>0){if(N&&fe){const le=tt(st[0]);t.texStorage2D(n.TEXTURE_2D,De,ze,le.width,le.height)}for(let le=0,te=st.length;le<te;le++)we=st[le],N?ye&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Te,Ze,we):t.texImage2D(n.TEXTURE_2D,le,ze,Te,Ze,we);M.generateMipmaps=!1}else if(N){if(fe){const le=tt(ce);t.texStorage2D(n.TEXTURE_2D,De,ze,le.width,le.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ze,ce)}else t.texImage2D(n.TEXTURE_2D,0,ze,Te,Ze,ce);v(M)&&m(X),Fe.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ue(T,M,V){if(M.image.length!==6)return;const X=Ge(T,M),re=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);const J=i.get(re);if(re.version!==J.__version||X===!0){t.activeTexture(n.TEXTURE0+V);const Fe=vt.getPrimaries(vt.workingColorSpace),ge=M.colorSpace===Ji?null:vt.getPrimaries(M.colorSpace),ke=M.colorSpace===Ji||Fe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let te=0;te<6;te++)!Ne&&!ce?Te[te]=_(M.image[te],!0,r.maxCubemapSize):Te[te]=ce?M.image[te].image:M.image[te],Te[te]=it(M,Te[te]);const Ze=Te[0],ze=s.convert(M.format,M.colorSpace),we=s.convert(M.type),st=b(M.internalFormat,ze,we,M.colorSpace),N=M.isVideoTexture!==!0,fe=J.__version===void 0||X===!0,ye=re.dataReady;let De=L(M,Ze);he(n.TEXTURE_CUBE_MAP,M);let le;if(Ne){N&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,st,Ze.width,Ze.height);for(let te=0;te<6;te++){le=Te[te].mipmaps;for(let Oe=0;Oe<le.length;Oe++){const rt=le[Oe];M.format!==Wn?ze!==null?N?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe,0,0,rt.width,rt.height,ze,rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe,st,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe,0,0,rt.width,rt.height,ze,we,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe,st,rt.width,rt.height,0,ze,we,rt.data)}}}else{if(le=M.mipmaps,N&&fe){le.length>0&&De++;const te=tt(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,st,te.width,te.height)}for(let te=0;te<6;te++)if(ce){N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te[te].width,Te[te].height,ze,we,Te[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,st,Te[te].width,Te[te].height,0,ze,we,Te[te].data);for(let Oe=0;Oe<le.length;Oe++){const Ct=le[Oe].image[te].image;N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe+1,0,0,Ct.width,Ct.height,ze,we,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe+1,st,Ct.width,Ct.height,0,ze,we,Ct.data)}}else{N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,we,Te[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,st,ze,we,Te[te]);for(let Oe=0;Oe<le.length;Oe++){const rt=le[Oe];N?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe+1,0,0,ze,we,rt.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Oe+1,st,ze,we,rt.image[te])}}}v(M)&&m(n.TEXTURE_CUBE_MAP),J.__version=re.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Be(T,M,V,X,re,J){const Fe=s.convert(V.format,V.colorSpace),ge=s.convert(V.type),ke=b(V.internalFormat,Fe,ge,V.colorSpace),Ne=i.get(M),ce=i.get(V);if(ce.__renderTarget=M,!Ne.__hasExternalTextures){const Te=Math.max(1,M.width>>J),Ze=Math.max(1,M.height>>J);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,J,ke,Te,Ze,M.depth,0,Fe,ge,null):t.texImage2D(re,J,ke,Te,Ze,0,Fe,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),oe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,re,ce.__webglTexture,0,_e(M)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,re,ce.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(T,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const X=M.depthTexture,re=X&&X.isDepthTexture?X.type:null,J=x(M.stencilBuffer,re),Fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=_e(M);oe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,J,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,T)}else{const X=M.textures;for(let re=0;re<X.length;re++){const J=X[re],Fe=s.convert(J.format,J.colorSpace),ge=s.convert(J.type),ke=b(J.internalFormat,Fe,ge,J.colorSpace),Ne=_e(M);V&&oe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ke,M.width,M.height):oe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,ke,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ke,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(M.depthTexture);X.__renderTarget=M,(!X.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const re=X.__webglTexture,J=_e(M);if(M.depthTexture.format===Ys)oe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(M.depthTexture.format===js)oe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Me(T){const M=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",re)};X.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=X}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const X=T.texture.mipmaps;X&&X.length>0?Z(M.__webglFramebuffer[0],T):Z(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=n.createRenderbuffer(),Ie(M.__webglDepthbuffer[X],T,!1);else{const re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,J)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ie(M.__webglDepthbuffer,T,!1);else{const re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(T,M,V){const X=i.get(T);M!==void 0&&Be(X.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Me(T)}function D(T){const M=T.texture,V=i.get(T),X=i.get(M);T.addEventListener("dispose",P);const re=T.textures,J=T.isWebGLCubeRenderTarget===!0,Fe=re.length>1;if(Fe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ge]=[];for(let ke=0;ke<M.mipmaps.length;ke++)V.__webglFramebuffer[ge][ke]=n.createFramebuffer()}else V.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)V.__webglFramebuffer[ge]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let ge=0,ke=re.length;ge<ke;ge++){const Ne=i.get(re[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&oe(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){const ke=re[ge];V.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ge]);const Ne=s.convert(ke.format,ke.colorSpace),ce=s.convert(ke.type),Te=b(ke.internalFormat,Ne,ce,ke.colorSpace,T.isXRRenderTarget===!0),Ze=_e(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Te,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,V.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),he(n.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Be(V.__webglFramebuffer[ge][ke],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ke);else Be(V.__webglFramebuffer[ge],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);v(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ge=0,ke=re.length;ge<ke;ge++){const Ne=re[ge],ce=i.get(Ne);let Te=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Te=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,ce.__webglTexture),he(Te,Ne),Be(V.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+ge,Te,0),v(Ne)&&m(Te)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,X.__webglTexture),he(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Be(V.__webglFramebuffer[ke],T,M,n.COLOR_ATTACHMENT0,ge,ke);else Be(V.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,ge,0);v(M)&&m(ge),t.unbindTexture()}T.depthBuffer&&Me(T)}function K(T){const M=T.textures;for(let V=0,X=M.length;V<X;V++){const re=M[V];if(v(re)){const J=S(T),Fe=i.get(re).__webglTexture;t.bindTexture(J,Fe),m(J),t.unbindTexture()}}}const j=[],ne=[];function Q(T){if(T.samples>0){if(oe(T)===!1){const M=T.textures,V=T.width,X=T.height;let re=n.COLOR_BUFFER_BIT;const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(T),ge=M.length>1;if(ge)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const ke=T.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ne]);const ce=i.get(M[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,V,X,0,0,V,X,re,n.NEAREST),c===!0&&(j.length=0,ne.length=0,j.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(J),ne.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ne]);const ce=i.get(M[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function _e(T){return Math.min(r.maxSamples,T.samples)}function oe(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xe(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function it(T,M){const V=T.colorSpace,X=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==as&&V!==Ji&&(vt.getTransfer(V)===wt?(X!==Wn||re!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Re,this.setupRenderTarget=D,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=oe}function Dx(n,e){function t(i,r=Ji){let s;const o=vt.getTransfer(r);if(i===ui)return n.UNSIGNED_BYTE;if(i===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xd)return n.BYTE;if(i===Yd)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===Mr)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===lo)return n.HALF_FLOAT;if(i===Jd)return n.ALPHA;if(i===Kd)return n.RGB;if(i===Wn)return n.RGBA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===js)return n.DEPTH_STENCIL;if(i===Ll)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===Zd)return n.RG;if(i===Il)return n.RG_INTEGER;if(i===Ul)return n.RGBA_INTEGER;if(i===Zo||i===Qo||i===ea||i===ta)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hc||i===Vc||i===Gc||i===Wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$c||i===qc||i===Xc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$c||i===qc)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yc||i===jc||i===Jc||i===Kc||i===Zc||i===Qc||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===cl||i===ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===na)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qd||i===ul||i===dl||i===hl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===na)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Rh extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Rh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ir({vertexShader:Ix,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nx extends gs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,f=null,g=null;const _=new kx,v={},m=t.getContextAttributes();let S=null,b=null;const x=[],L=[],A=new pe;let P=null;const I=new vn;I.viewport=new zt;const y=new vn;y.viewport=new zt;const w=[I,y],C=new ig;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ve=x[$];return ve===void 0&&(ve=new lc,x[$]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function($){let ve=x[$];return ve===void 0&&(ve=new lc,x[$]=ve),ve.getGripSpace()},this.getHand=function($){let ve=x[$];return ve===void 0&&(ve=new lc,x[$]=ve),ve.getHandSpace()};function O($){const ve=L.indexOf($.inputSource);if(ve===-1)return;const ue=x[ve];ue!==void 0&&(ue.update($.inputSource,$.frame,l||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let $=0;$<x.length;$++){const ve=L[$];ve!==null&&(L[$]=null,x[$].disconnect(ve))}R=null,k=null,_.reset();for(const $ in v)delete v[$];e.setRenderTarget(S),f=null,p=null,d=null,r=null,b=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Be=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?js:Ys,Be=m.stencil?Xs:Mr);const Z={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};p=d.createProjectionLayer(Z),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new ki(p.textureWidth,p.textureHeight,{format:Wn,type:ui,depthTexture:new dh(p.textureWidth,p.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ki(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F($){for(let ve=0;ve<$.removed.length;ve++){const ue=$.removed[ve],Be=L.indexOf(ue);Be>=0&&(L[Be]=null,x[Be].disconnect(ue))}for(let ve=0;ve<$.added.length;ve++){const ue=$.added[ve];let Be=L.indexOf(ue);if(Be===-1){for(let Z=0;Z<x.length;Z++)if(Z>=L.length){L.push(ue),Be=Z;break}else if(L[Z]===null){L[Z]=ue,Be=Z;break}if(Be===-1)break}const Ie=x[Be];Ie&&Ie.connect(ue)}}const Y=new U,G=new U;function se($,ve,ue){Y.setFromMatrixPosition(ve.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);const Be=Y.distanceTo(G),Ie=ve.projectionMatrix.elements,Z=ue.projectionMatrix.elements,Me=Ie[14]/(Ie[10]-1),Re=Ie[14]/(Ie[10]+1),D=(Ie[9]+1)/Ie[5],K=(Ie[9]-1)/Ie[5],j=(Ie[8]-1)/Ie[0],ne=(Z[8]+1)/Z[0],Q=Me*j,_e=Me*ne,oe=Be/(-j+ne),xe=oe*-j;if(ve.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xe),$.translateZ(oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(ve.projectionMatrix),$.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const it=Me+oe,tt=Re+oe,T=Q-xe,M=_e+(Be-xe),V=D*Re/tt*it,X=K*Re/tt*it;$.projectionMatrix.makePerspective(T,M,V,X,it,tt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,ve){ve===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ve.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ve=$.near,ue=$.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),C.near=y.near=I.near=ve,C.far=y.far=I.far=ue,(R!==C.near||k!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,k=C.far),C.layers.mask=$.layers.mask|6,I.layers.mask=C.layers.mask&3,y.layers.mask=C.layers.mask&5;const Be=$.parent,Ie=C.cameras;ae(C,Be);for(let Z=0;Z<Ie.length;Z++)ae(Ie[Z],Be);Ie.length===2?se(C,I,y):C.projectionMatrix.copy(I.projectionMatrix),Ae($,C,Be)};function Ae($,ve,ue){ue===null?$.matrix.copy(ve.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(ve.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ve.projectionMatrix),$.projectionMatrixInverse.copy(ve.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Js*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function($){c=$,p!==null&&(p.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function($){return v[$]};let he=null;function Ge($,ve){if(u=ve.getViewerPose(l||o),g=ve,u!==null){const ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Be=!1;ue.length!==C.cameras.length&&(C.cameras.length=0,Be=!0);for(let Re=0;Re<ue.length;Re++){const D=ue[Re];let K=null;if(f!==null)K=f.getViewport(D);else{const ne=d.getViewSubImage(p,D);K=ne.viewport,Re===0&&(e.setRenderTargetTextures(b,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(b))}let j=w[Re];j===void 0&&(j=new vn,j.layers.enable(Re),j.viewport=new zt,w[Re]=j),j.matrix.fromArray(D.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(D.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(K.x,K.y,K.width,K.height),Re===0&&(C.matrix.copy(j.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Be===!0&&C.cameras.push(j)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Re=d.getDepthInformation(ue[0]);Re&&Re.isValid&&Re.texture&&_.init(Re,r.renderState)}if(Ie&&Ie.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Re=0;Re<ue.length;Re++){const D=ue[Re].camera;if(D){let K=v[D];K||(K=new Rh,v[D]=K);const j=d.getCameraImage(D);K.sourceTexture=j}}}for(let ue=0;ue<x.length;ue++){const Be=L[ue],Ie=x[ue];Be!==null&&Ie!==void 0&&Ie.update(Be,ve,l||o)}he&&he($,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),g=null}const et=new Sh;et.setAnimationLoop(Ge),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}}const fr=new di,Ox=new bt;function Fx(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,ah(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,S,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),d(v,m)):m.isMeshPhongMaterial?(s(v,m),u(v,m)):m.isMeshStandardMaterial?(s(v,m),p(v,m),m.isMeshPhysicalMaterial&&f(v,m,x)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),_(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?c(v,m,S,b):m.isSpriteMaterial?l(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===mn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===mn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const S=e.get(m),b=S.envMap,x=S.envMapRotation;b&&(v.envMap.value=b,fr.copy(x),fr.x*=-1,fr.y*=-1,fr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),v.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(fr)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,S,b){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*S,v.scale.value=b*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function p(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function f(v,m,S){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=S.texture,v.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function _(v,m){const S=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(S.matrixWorld),v.nearDistance.value=S.shadow.camera.near,v.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Bx(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){const x=b.program;i.uniformBlockBinding(S,x)}function l(S,b){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",v));const L=b.program;i.updateUBOMapping(S,L);const A=e.render.frame;s[S.id]!==A&&(p(S),s[S.id]=A)}function u(S){const b=d();S.__bindingPointIndex=b;const x=n.createBuffer(),L=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const b=r[S.id],x=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,P=x.length;A<P;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,w=I.length;y<w;y++){const C=I[y];if(f(C,A,y,L)===!0){const R=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let B=0;B<k.length;B++){const F=k[B],Y=_(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,R+O,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,b,x,L){const A=S.value,P=b+"_"+x;if(L[P]===void 0)return typeof A=="number"||typeof A=="boolean"?L[P]=A:L[P]=A.clone(),!0;{const I=L[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return L[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(S){const b=S.uniforms;let x=0;const L=16;for(let P=0,I=b.length;P<I;P++){const y=Array.isArray(b[P])?b[P]:[b[P]];for(let w=0,C=y.length;w<C;w++){const R=y[w],k=Array.isArray(R.value)?R.value:[R.value];for(let O=0,B=k.length;O<B;O++){const F=k[O],Y=_(F),G=x%L,se=G%Y.boundary,ae=G+se;x+=se,ae!==0&&L-ae<Y.storage&&(x+=L-ae),R.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,x+=Y.storage}}}const A=x%L;return A>0&&(x+=L-A),S.__size=x,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function v(S){const b=S.target;b.removeEventListener("dispose",v);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class zx{constructor(e={}){const{canvas:t=Wp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=en;let A=0,P=0,I=null,y=-1,w=null;const C=new zt,R=new zt;let k=null;const O=new ut(0);let B=0,F=t.width,Y=t.height,G=1,se=null,ae=null;const Ae=new zt(0,0,F,Y),he=new zt(0,0,F,Y);let Ge=!1;const et=new Hl;let $=!1,ve=!1;const ue=new bt,Be=new U,Ie=new zt,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Re(){return I===null?G:1}let D=i;function K(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Al}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const z="webgl2";if(D=K(z,E),D===null)throw K(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let j,ne,Q,_e,oe,xe,it,tt,T,M,V,X,re,J,Fe,ge,ke,Ne,ce,Te,Ze,ze,we,st;function N(){j=new Jv(D),j.init(),ze=new Dx(D,j),ne=new Gv(D,j,e,ze),Q=new Px(D,j),ne.reversedDepthBuffer&&p&&Q.buffers.depth.setReversed(!0),_e=new Qv(D),oe=new vx,xe=new Lx(D,j,Q,oe,ne,ze,_e),it=new $v(x),tt=new jv(x),T=new sg(D),we=new Hv(D,T),M=new Kv(D,T,_e,we),V=new t_(D,M,T,_e),ce=new e_(D,ne,xe),ge=new Wv(oe),X=new gx(x,it,tt,j,ne,we,ge),re=new Fx(x,oe),J=new xx,Fe=new Ex(j),Ne=new zv(x,it,tt,Q,V,f,c),ke=new Cx(x,V,ne),st=new Bx(D,_e,ne,Q),Te=new Vv(D,j,_e),Ze=new Zv(D,j,_e),_e.programs=X.programs,x.capabilities=ne,x.extensions=j,x.properties=oe,x.renderLists=J,x.shadowMap=ke,x.state=Q,x.info=_e}N();const fe=new Nx(x,D);this.xr=fe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(F,Y,!1))},this.getSize=function(E){return E.set(F,Y)},this.setSize=function(E,z,W=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,Y=z,t.width=Math.floor(E*G),t.height=Math.floor(z*G),W===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(F*G,Y*G).floor()},this.setDrawingBufferSize=function(E,z,W){F=E,Y=z,G=W,t.width=Math.floor(E*W),t.height=Math.floor(z*W),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Ae)},this.setViewport=function(E,z,W,q){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,z,W,q),Q.viewport(C.copy(Ae).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,z,W,q){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,z,W,q),Q.scissor(R.copy(he).multiplyScalar(G).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){Q.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,W=!0){let q=0;if(E){let H=!1;if(I!==null){const de=I.texture.format;H=de===Ul||de===Il||de===Dl}if(H){const de=I.texture.type,Se=de===ui||de===Mr||de===qs||de===Xs||de===Rl||de===Pl,Ue=Ne.getClearColor(),Pe=Ne.getClearAlpha(),Ke=Ue.r,Qe=Ue.g,We=Ue.b;Se?(g[0]=Ke,g[1]=Qe,g[2]=We,g[3]=Pe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ke,_[1]=Qe,_[2]=We,_[3]=Pe,D.clearBufferiv(D.COLOR,0,_))}else q|=D.COLOR_BUFFER_BIT}z&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ne.dispose(),J.dispose(),Fe.dispose(),oe.dispose(),it.dispose(),tt.dispose(),V.dispose(),we.dispose(),st.dispose(),X.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ni),fe.removeEventListener("sessionend",gu),or.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=_e.autoReset,z=ke.enabled,W=ke.autoUpdate,q=ke.needsUpdate,H=ke.type;N(),_e.autoReset=E,ke.enabled=z,ke.autoUpdate=W,ke.needsUpdate=q,ke.type=H}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function te(E){const z=E.target;z.removeEventListener("dispose",te),Oe(z)}function Oe(E){rt(E),oe.remove(E)}function rt(E){const z=oe.get(E).programs;z!==void 0&&(z.forEach(function(W){X.releaseProgram(W)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,W,q,H,de){z===null&&(z=Z);const Se=H.isMesh&&H.matrixWorld.determinant()<0,Ue=Of(E,z,W,q,H);Q.setMaterial(q,Se);let Pe=W.index,Ke=1;if(q.wireframe===!0){if(Pe=M.getWireframeAttribute(W),Pe===void 0)return;Ke=2}const Qe=W.drawRange,We=W.attributes.position;let ht=Qe.start*Ke,Mt=(Qe.start+Qe.count)*Ke;de!==null&&(ht=Math.max(ht,de.start*Ke),Mt=Math.min(Mt,(de.start+de.count)*Ke)),Pe!==null?(ht=Math.max(ht,0),Mt=Math.min(Mt,Pe.count)):We!=null&&(ht=Math.max(ht,0),Mt=Math.min(Mt,We.count));const Ft=Mt-ht;if(Ft<0||Ft===1/0)return;we.setup(H,q,Ue,W,Pe);let Pt,Et=Te;if(Pe!==null&&(Pt=T.get(Pe),Et=Ze,Et.setIndex(Pt)),H.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*Re()),Et.setMode(D.LINES)):Et.setMode(D.TRIANGLES);else if(H.isLine){let Ye=q.linewidth;Ye===void 0&&(Ye=1),Q.setLineWidth(Ye*Re()),H.isLineSegments?Et.setMode(D.LINES):H.isLineLoop?Et.setMode(D.LINE_LOOP):Et.setMode(D.LINE_STRIP)}else H.isPoints?Et.setMode(D.POINTS):H.isSprite&&Et.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ye=H._multiDrawStarts,Lt=H._multiDrawCounts,gt=H._multiDrawCount,Mn=Pe?T.get(Pe).bytesPerElement:1,Dr=oe.get(q).currentProgram.getUniforms();for(let wn=0;wn<gt;wn++)Dr.setValue(D,"_gl_DrawID",wn),Et.render(Ye[wn]/Mn,Lt[wn])}else if(H.isInstancedMesh)Et.renderInstances(ht,Ft,H.count);else if(W.isInstancedBufferGeometry){const Ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Lt=Math.min(W.instanceCount,Ye);Et.renderInstances(ht,Ft,Lt)}else Et.render(ht,Ft)};function Ct(E,z,W){E.transparent===!0&&E.side===_n&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,So(E,z,W),E.side=nr,E.needsUpdate=!0,So(E,z,W),E.side=_n):So(E,z,W)}this.compile=function(E,z,W=null){W===null&&(W=E),m=Fe.get(W),m.init(z),b.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const q=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Ue=de[Se];Ct(Ue,W,H),q.add(Ue)}else Ct(de,W,H),q.add(de)}),m=b.pop(),q},this.compileAsync=function(E,z,W=null){const q=this.compile(E,z,W);return new Promise(H=>{function de(){if(q.forEach(function(Se){oe.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){H(E);return}setTimeout(de,10)}j.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let xt=null;function bi(E){xt&&xt(E)}function ni(){or.stop()}function gu(){or.start()}const or=new Sh;or.setAnimationLoop(bi),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(E){xt=E,fe.setAnimationLoop(E),E===null?or.stop():or.start()},fe.addEventListener("sessionstart",ni),fe.addEventListener("sessionend",gu),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(z),z=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,z,I),m=Fe.get(E,b.length),m.init(z),b.push(m),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(ue,oi,z.reversedDepth),ve=this.localClippingEnabled,$=ge.init(this.clippingPlanes,ve),v=J.get(E,S.length),v.init(),S.push(v),fe.enabled===!0&&fe.isPresenting===!0){const de=x.xr.getDepthSensingMesh();de!==null&&za(de,z,-1/0,x.sortObjects)}za(E,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(se,ae),Me=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Me&&Ne.addToRenderList(v,E),this.info.render.frame++,$===!0&&ge.beginShadows();const W=m.state.shadowsArray;ke.render(W,E,z),$===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,H=v.transmissive;if(m.setupLights(),z.isArrayCamera){const de=z.cameras;if(H.length>0)for(let Se=0,Ue=de.length;Se<Ue;Se++){const Pe=de[Se];_u(q,H,E,Pe)}Me&&Ne.render(E);for(let Se=0,Ue=de.length;Se<Ue;Se++){const Pe=de[Se];vu(v,E,Pe,Pe.viewport)}}else H.length>0&&_u(q,H,E,z),Me&&Ne.render(E),vu(v,E,z);I!==null&&P===0&&(xe.updateMultisampleRenderTarget(I),xe.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,z),we.resetDefaultState(),y=-1,w=null,b.pop(),b.length>0?(m=b[b.length-1],$===!0&&ge.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function za(E,z,W,q){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){q&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const Se=V.update(E),Ue=E.material;Ue.visible&&v.push(E,Se,Ue,W,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const Se=V.update(E),Ue=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(Ue)){const Pe=Se.groups;for(let Ke=0,Qe=Pe.length;Ke<Qe;Ke++){const We=Pe[Ke],ht=Ue[We.materialIndex];ht&&ht.visible&&v.push(E,Se,ht,W,Ie.z,We)}}else Ue.visible&&v.push(E,Se,Ue,W,Ie.z,null)}}const de=E.children;for(let Se=0,Ue=de.length;Se<Ue;Se++)za(de[Se],z,W,q)}function vu(E,z,W,q){const H=E.opaque,de=E.transmissive,Se=E.transparent;m.setupLightsView(W),$===!0&&ge.setGlobalState(x.clippingPlanes,W),q&&Q.viewport(C.copy(q)),H.length>0&&wo(H,z,W),de.length>0&&wo(de,z,W),Se.length>0&&wo(Se,z,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function _u(E,z,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ki(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?lo:ui,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const de=m.state.transmissionRenderTarget[q.id],Se=q.viewport||C;de.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);const Ue=x.getRenderTarget(),Pe=x.getActiveCubeFace(),Ke=x.getActiveMipmapLevel();x.setRenderTarget(de),x.getClearColor(O),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Me&&Ne.render(W);const Qe=x.toneMapping;x.toneMapping=er;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),$===!0&&ge.setGlobalState(x.clippingPlanes,q),wo(E,W,q),xe.updateMultisampleRenderTarget(de),xe.updateRenderTargetMipmap(de),j.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Mt=0,Ft=z.length;Mt<Ft;Mt++){const Pt=z[Mt],Et=Pt.object,Ye=Pt.geometry,Lt=Pt.material,gt=Pt.group;if(Lt.side===_n&&Et.layers.test(q.layers)){const Mn=Lt.side;Lt.side=mn,Lt.needsUpdate=!0,xu(Et,W,q,Ye,Lt,gt),Lt.side=Mn,Lt.needsUpdate=!0,ht=!0}}ht===!0&&(xe.updateMultisampleRenderTarget(de),xe.updateRenderTargetMipmap(de))}x.setRenderTarget(Ue,Pe,Ke),x.setClearColor(O,B),We!==void 0&&(q.viewport=We),x.toneMapping=Qe}function wo(E,z,W){const q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,de=E.length;H<de;H++){const Se=E[H],Ue=Se.object,Pe=Se.geometry,Ke=Se.group;let Qe=Se.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),Ue.layers.test(W.layers)&&xu(Ue,z,W,Pe,Qe,Ke)}}function xu(E,z,W,q,H,de){E.onBeforeRender(x,z,W,q,H,de),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,z,W,q,E,de),H.transparent===!0&&H.side===_n&&H.forceSinglePass===!1?(H.side=mn,H.needsUpdate=!0,x.renderBufferDirect(W,z,q,H,E,de),H.side=nr,H.needsUpdate=!0,x.renderBufferDirect(W,z,q,H,E,de),H.side=_n):x.renderBufferDirect(W,z,q,H,E,de),E.onAfterRender(x,z,W,q,H,de)}function So(E,z,W){z.isScene!==!0&&(z=Z);const q=oe.get(E),H=m.state.lights,de=m.state.shadowsArray,Se=H.state.version,Ue=X.getParameters(E,H.state,de,z,W),Pe=X.getProgramCacheKey(Ue);let Ke=q.programs;q.environment=E.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(E.isMeshStandardMaterial?tt:it).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Ke===void 0&&(E.addEventListener("dispose",te),Ke=new Map,q.programs=Ke);let Qe=Ke.get(Pe);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Se)return bu(E,Ue),Qe}else Ue.uniforms=X.getUniforms(E),E.onBeforeCompile(Ue,x),Qe=X.acquireProgram(Ue,Pe),Ke.set(Pe,Qe),q.uniforms=Ue.uniforms;const We=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=ge.uniform),bu(E,Ue),q.needsLights=Bf(E),q.lightsStateVersion=Se,q.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function yu(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=ia.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function bu(E,z){const W=oe.get(E);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Of(E,z,W,q,H){z.isScene!==!0&&(z=Z),xe.resetTextureUnits();const de=z.fog,Se=q.isMeshStandardMaterial?z.environment:null,Ue=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:as,Pe=(q.isMeshStandardMaterial?tt:it).get(q.envMap||Se),Ke=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qe=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),We=!!W.morphAttributes.position,ht=!!W.morphAttributes.normal,Mt=!!W.morphAttributes.color;let Ft=er;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const Pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=Pt!==void 0?Pt.length:0,Ye=oe.get(q),Lt=m.state.lights;if($===!0&&(ve===!0||E!==w)){const un=E===w&&q.id===y;ge.setState(q,E,un)}let gt=!1;q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Lt.state.version||Ye.outputColorSpace!==Ue||H.isBatchedMesh&&Ye.batching===!1||!H.isBatchedMesh&&Ye.batching===!0||H.isBatchedMesh&&Ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ye.instancing===!1||!H.isInstancedMesh&&Ye.instancing===!0||H.isSkinnedMesh&&Ye.skinning===!1||!H.isSkinnedMesh&&Ye.skinning===!0||H.isInstancedMesh&&Ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ye.instancingMorph===!1&&H.morphTexture!==null||Ye.envMap!==Pe||q.fog===!0&&Ye.fog!==de||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ge.numPlanes||Ye.numIntersection!==ge.numIntersection)||Ye.vertexAlphas!==Ke||Ye.vertexTangents!==Qe||Ye.morphTargets!==We||Ye.morphNormals!==ht||Ye.morphColors!==Mt||Ye.toneMapping!==Ft||Ye.morphTargetsCount!==Et)&&(gt=!0):(gt=!0,Ye.__version=q.version);let Mn=Ye.currentProgram;gt===!0&&(Mn=So(q,z,H));let Dr=!1,wn=!1,As=!1;const Dt=Mn.getUniforms(),Pn=Ye.uniforms;if(Q.useProgram(Mn.program)&&(Dr=!0,wn=!0,As=!0),q.id!==y&&(y=q.id,wn=!0),Dr||w!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Dt.setValue(D,"projectionMatrix",E.projectionMatrix),Dt.setValue(D,"viewMatrix",E.matrixWorldInverse);const gn=Dt.map.cameraPosition;gn!==void 0&&gn.setValue(D,Be.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&Dt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,wn=!0,As=!0)}if(H.isSkinnedMesh){Dt.setOptional(D,H,"bindMatrix"),Dt.setOptional(D,H,"bindMatrixInverse");const un=H.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Dt.setValue(D,"boneTexture",un.boneTexture,xe))}H.isBatchedMesh&&(Dt.setOptional(D,H,"batchingTexture"),Dt.setValue(D,"batchingTexture",H._matricesTexture,xe),Dt.setOptional(D,H,"batchingIdTexture"),Dt.setValue(D,"batchingIdTexture",H._indirectTexture,xe),Dt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Dt.setValue(D,"batchingColorTexture",H._colorsTexture,xe));const Ln=W.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ce.update(H,W,Mn),(wn||Ye.receiveShadow!==H.receiveShadow)&&(Ye.receiveShadow=H.receiveShadow,Dt.setValue(D,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Pn.envMap.value=Pe,Pn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(Pn.envMapIntensity.value=z.environmentIntensity),wn&&(Dt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Ff(Pn,As),de&&q.fog===!0&&re.refreshFogUniforms(Pn,de),re.refreshMaterialUniforms(Pn,q,G,Y,m.state.transmissionRenderTarget[E.id]),ia.upload(D,yu(Ye),Pn,xe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ia.upload(D,yu(Ye),Pn,xe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(D,"center",H.center),Dt.setValue(D,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(D,"normalMatrix",H.normalMatrix),Dt.setValue(D,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let gn=0,Ha=un.length;gn<Ha;gn++){const ar=un[gn];st.update(ar,Mn),st.bind(ar,Mn)}}return Mn}function Ff(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Bf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,z,W){const q=oe.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),oe.get(E.texture).__webglTexture=z,oe.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const W=oe.get(E);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const zf=D.createFramebuffer();this.setRenderTarget=function(E,z=0,W=0){I=E,A=z,P=W;let q=!0,H=null,de=!1,Se=!1;if(E){const Pe=oe.get(E);if(Pe.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Pe.__webglFramebuffer===void 0)xe.setupRenderTarget(E);else if(Pe.__hasExternalTextures)xe.rebindTextures(E,oe.get(E.texture).__webglTexture,oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const We=E.depthTexture;if(Pe.__boundDepthTexture!==We){if(We!==null&&oe.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(E)}}const Ke=E.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Se=!0);const Qe=oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qe[z])?H=Qe[z][W]:H=Qe[z],de=!0):E.samples>0&&xe.useMultisampledRTT(E)===!1?H=oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Qe)?H=Qe[W]:H=Qe,C.copy(E.viewport),R.copy(E.scissor),k=E.scissorTest}else C.copy(Ae).multiplyScalar(G).floor(),R.copy(he).multiplyScalar(G).floor(),k=Ge;if(W!==0&&(H=zf),Q.bindFramebuffer(D.FRAMEBUFFER,H)&&q&&Q.drawBuffers(E,H),Q.viewport(C),Q.scissor(R),Q.setScissorTest(k),de){const Pe=oe.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,W)}else if(Se){const Pe=z;for(let Ke=0;Ke<E.textures.length;Ke++){const Qe=oe.get(E.textures[Ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ke,Qe.__webglTexture,W,Pe)}}else if(E!==null&&W!==0){const Pe=oe.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pe.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(E,z,W,q,H,de,Se,Ue=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){Q.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const Ke=E.textures[Ue],Qe=Ke.format,We=Ke.type;if(!ne.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-q&&W>=0&&W<=E.height-H&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue),D.readPixels(z,W,q,H,ze.convert(Qe),ze.convert(We),de))}finally{const Ke=I!==null?oe.get(I).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(E,z,W,q,H,de,Se,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe)if(z>=0&&z<=E.width-q&&W>=0&&W<=E.height-H){Q.bindFramebuffer(D.FRAMEBUFFER,Pe);const Ke=E.textures[Ue],Qe=Ke.format,We=Ke.type;if(!ne.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ht),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue),D.readPixels(z,W,q,H,ze.convert(Qe),ze.convert(We),0);const Mt=I!==null?oe.get(I).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,Mt);const Ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $p(D,Ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ht),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(ht),D.deleteSync(Ft),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,W=0){const q=Math.pow(2,-W),H=Math.floor(E.image.width*q),de=Math.floor(E.image.height*q),Se=z!==null?z.x:0,Ue=z!==null?z.y:0;xe.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Se,Ue,H,de),Q.unbindTexture()};const Hf=D.createFramebuffer(),Vf=D.createFramebuffer();this.copyTextureToTexture=function(E,z,W=null,q=null,H=0,de=null){de===null&&(H!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=H,H=0):de=0);let Se,Ue,Pe,Ke,Qe,We,ht,Mt,Ft;const Pt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(W!==null)Se=W.max.x-W.min.x,Ue=W.max.y-W.min.y,Pe=W.isBox3?W.max.z-W.min.z:1,Ke=W.min.x,Qe=W.min.y,We=W.isBox3?W.min.z:0;else{const Ln=Math.pow(2,-H);Se=Math.floor(Pt.width*Ln),Ue=Math.floor(Pt.height*Ln),E.isDataArrayTexture?Pe=Pt.depth:E.isData3DTexture?Pe=Math.floor(Pt.depth*Ln):Pe=1,Ke=0,Qe=0,We=0}q!==null?(ht=q.x,Mt=q.y,Ft=q.z):(ht=0,Mt=0,Ft=0);const Et=ze.convert(z.format),Ye=ze.convert(z.type);let Lt;z.isData3DTexture?(xe.setTexture3D(z,0),Lt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(xe.setTexture2DArray(z,0),Lt=D.TEXTURE_2D_ARRAY):(xe.setTexture2D(z,0),Lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=D.getParameter(D.UNPACK_ROW_LENGTH),Mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Dr=D.getParameter(D.UNPACK_SKIP_PIXELS),wn=D.getParameter(D.UNPACK_SKIP_ROWS),As=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,We);const Dt=E.isDataArrayTexture||E.isData3DTexture,Pn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Ln=oe.get(E),un=oe.get(z),gn=oe.get(Ln.__renderTarget),Ha=oe.get(un.__renderTarget);Q.bindFramebuffer(D.READ_FRAMEBUFFER,gn.__webglFramebuffer),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let ar=0;ar<Pe;ar++)Dt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(E).__webglTexture,H,We+ar),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oe.get(z).__webglTexture,de,Ft+ar)),D.blitFramebuffer(Ke,Qe,Se,Ue,ht,Mt,Se,Ue,D.DEPTH_BUFFER_BIT,D.NEAREST);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||oe.has(E)){const Ln=oe.get(E),un=oe.get(z);Q.bindFramebuffer(D.READ_FRAMEBUFFER,Hf),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vf);for(let gn=0;gn<Pe;gn++)Dt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ln.__webglTexture,H,We+gn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ln.__webglTexture,H),Pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,un.__webglTexture,de,Ft+gn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,un.__webglTexture,de),H!==0?D.blitFramebuffer(Ke,Qe,Se,Ue,ht,Mt,Se,Ue,D.COLOR_BUFFER_BIT,D.NEAREST):Pn?D.copyTexSubImage3D(Lt,de,ht,Mt,Ft+gn,Ke,Qe,Se,Ue):D.copyTexSubImage2D(Lt,de,ht,Mt,Ke,Qe,Se,Ue);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Lt,de,ht,Mt,Ft,Se,Ue,Pe,Et,Ye,Pt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,de,ht,Mt,Ft,Se,Ue,Pe,Et,Pt.data):D.texSubImage3D(Lt,de,ht,Mt,Ft,Se,Ue,Pe,Et,Ye,Pt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,ht,Mt,Se,Ue,Et,Ye,Pt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,ht,Mt,Pt.width,Pt.height,Et,Pt.data):D.texSubImage2D(D.TEXTURE_2D,de,ht,Mt,Se,Ue,Et,Ye,Pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dr),D.pixelStorei(D.UNPACK_SKIP_ROWS,wn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,As),de===0&&z.generateMipmaps&&D.generateMipmap(Lt),Q.unbindTexture()},this.copyTextureToTexture3D=function(E,z,W=null,q=null,H=0){return ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,W,q,H)},this.initRenderTarget=function(E){oe.get(E).__webglFramebuffer===void 0&&xe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?xe.setTextureCube(E,0):E.isData3DTexture?xe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?xe.setTexture2DArray(E,0):xe.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,Q.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}function Hx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Zt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let p=0;p<n.length;++p){const f=n[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[p].attributes.position.count}c.setIndex(d)}for(const u in s){const d=Pd(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<d;++p){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][p]);const g=Pd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Pd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new In(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let p=0,f=u.count;p<f;p++)for(let g=0;g<t;g++){const _=u.getComponent(p,g);a.setComponent(p+d,g,_)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function jl(n,e=0){const t=new $e,i=Object.fromEntries(Object.entries({skin:n.skin,hair:n.hair,shirt:n.color,pants:e%2?"#384b58":"#405646",boots:"#3f3431",white:"#fff6e6",eye:"#17222a",leather:"#965e48",straw:"#e7cb82"}).map(([f,g])=>[f,new Er({color:g})])),r=new yn(1,16,12),s=new Bt(1,1,1);function o(f,g,_,v,m){const S=new me(g==="box"?s:r,i[_]);return S.scale.set(...v),S.position.set(...m),S.castShadow=!0,f.add(S),S}const a=new $e;t.add(a),o(a,"sphere","shirt",[.34,.43,.24],[0,1.03,0]),o(a,"box","pants",[.48,.23,.33],[0,.66,0]),o(a,"sphere","skin",[.115,.17,.115],[0,1.39,0]);const c=new $e;c.position.y=1.65,a.add(c),o(c,"sphere","skin",[.31,.33,.28],[0,0,0]);for(const f of[-1,1]){o(c,"sphere","skin",[.064,.1,.052],[f*.3,-.01,0]),o(c,"sphere","white",[.079,.092,.035],[f*.115,.035,.253]),o(c,"sphere","eye",[.036,.052,.019],[f*.106,.025,.286]),o(c,"sphere","white",[.014,.018,.008],[f*.106-.01,.044,.305]);const g=o(c,"sphere","hair",[.081,.018,.019],[f*.116,.145,.25]);g.rotation.z=f*-.1;const _=o(a,"box","white",[.13,.07,.08],[f*.095,1.35,.18]);_.rotation.z=f*.35}o(c,"sphere","skin",[.057,.065,.065],[0,-.04,.282]);const l=new $l([new U(-.085,-.13,.25),new U(0,-.162,.264),new U(.085,-.13,.25)]);c.add(new me(new Ta(l,8,.012,5,!1),i.eye)),o(c,"sphere","hair",[.32,.15,.28],[0,.23,-.028]);const u=o(c,"sphere","hair",[.19,.065,.06],[-.11,.18,.235]);if(u.rotation.z=-.2,n.accessory==="bun"&&(o(c,"sphere","hair",[.23,.23,.17],[0,.03,-.2]),o(c,"sphere","hair",[.17,.17,.17],[.18,.3,-.15])),n.accessory==="curls")for(let f=0;f<8;f++){const g=f*Math.PI/4;o(c,"sphere","hair",[.12,.13,.12],[Math.cos(g)*.26,.17+Math.sin(g)*.1,-.06+Math.sin(g)*.15])}if(n.accessory==="glasses"){for(const f of[-1,1]){const g=new me(new ci(.092,.013,6,16),i.eye);g.position.set(f*.115,.035,.295),c.add(g)}o(c,"box","eye",[.065,.018,.025],[0,.045,.29])}if(["sunhat","cap"].includes(n.accessory)){const f=n.accessory==="sunhat"?i.straw:i.shirt,g=new me(new pt(.4,.4,.035,24),f);g.position.set(0,.285,.04),c.add(g);const _=new me(new pt(.235,.27,.18,20),f);_.position.y=.39,c.add(_);const v=new me(new pt(.264,.272,.05,20),i.leather);v.position.y=.32,c.add(v)}for(let f=0;f<3;f++)o(a,"sphere","white",[.019,.019,.014],[0,1.2-f*.12,.24]);const d=[],p=[];for(const f of[-1,1]){const g=new $e;g.position.set(f*.32,1.24,0),a.add(g),o(g,"sphere","shirt",[.12,.19,.125],[f*.03,-.1,0]),o(g,"sphere","skin",[.076,.2,.076],[f*.04,-.34,.02]),o(g,"sphere","skin",[.09,.095,.08],[f*.04,-.52,.025]),o(g,"sphere","skin",[.035,.055,.035],[f*-.02,-.5,.075]),g.rotation.z=f*.06,d.push(g);const _=new $e;_.position.set(f*.15,.64,0),t.add(_),o(_,"sphere","pants",[.12,.25,.12],[0,-.21,0]),o(_,"sphere","boots",[.14,.1,.21],[0,-.52,.07]),o(_,"box","boots",[.25,.035,.34],[0,-.59,.055]),p.push(_)}if(["bun","glasses"].includes(n.accessory)){const f=o(a,"box","leather",[.07,.77,.045],[.03,1.05,.245]);f.rotation.z=-.65,o(a,"box","leather",[.25,.29,.15],[.3,.73,.13]),o(a,"box","straw",[.07,.045,.018],[.3,.76,.215])}return t.userData.rig={body:a,head:c,arms:d,legs:p},Wt(t),t}function Wt(n){const e=new Set;n.traverse(t=>{if(!t.isGroup)return;const i=new Map;t.children.filter(r=>r.isMesh).forEach(r=>{i.has(r.material)||i.set(r.material,[]),i.get(r.material).push(r)});for(const[r,s]of i){const o=s.map(d=>(d.updateMatrix(),d.geometry.clone().applyMatrix4(d.matrix))),a=o.some(d=>!d.index),c=o.map(d=>a&&d.index?d.toNonIndexed():d),l=Hx(c);if(new Set([...o,...c]).forEach(d=>d.dispose()),!l)continue;s.forEach(d=>{t.remove(d),e.add(d.geometry)});const u=new me(l,r);u.castShadow=!0,u.receiveShadow=!0,t.add(u)}}),e.forEach(t=>t.dispose())}function Vx(n,e,t){const i=-n/2,r=-e/2,s=new ls;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s}function Ph(n=!1){const e=new $e;e.name="Pip 3D character";const t=new $e;e.add(t);const i=Z=>new Er({color:Z}),r={green:i(8435256),darkGreen:i(2706464),leaf:i(10082368),seam:i(3430947),shirt:i(8632381),trim:i(11786593),hat:i(14660444),weave:i(12225340),leather:i(11039543),leatherDark:i(7358501),metal:i(12898502),orange:i(15439412),cream:new $t({color:16774620}),visor:new $t({color:2702392}),black:new $t({color:859160}),white:new $t({color:16776432}),tongue:new $t({color:15173186})},s=(Z,Me,Re,D=[0,0,0])=>{const K=new me(Me,Re);return K.position.set(...D),K.castShadow=!0,Z.add(K),K},o=(Z,Me,Re,D)=>{const K=s(Z,new yn(1,16,12),Me,D);return K.scale.set(...Re),K},a=(Z,Me,Re,D,K=.09,j=.018)=>{const ne=new eo(Vx(Re[0],Re[1],K),{depth:Re[2],bevelEnabled:!0,bevelSize:j,bevelThickness:j,bevelSegments:j>.02?4:2,steps:1,curveSegments:6});return ne.translate(0,0,-Re[2]/2),s(Z,ne,Me,D)},c=(Z,Me,Re,D,K,j)=>s(Z,new pt(Re,D,K,20),Me,j),l=(Z,Me,Re,D=.01)=>s(Z,new Ta(new $l(Re.map(K=>new U(...K))),8,D,5,!1),Me),u=(Z,Me,Re=[0,0,0])=>{const D=new $e;return D.name=Me,D.position.set(...Re),Z.add(D),D},d=s(e,new Ni(.48,24),new $t({color:1059099,transparent:!0,opacity:.25,depthWrite:!1}),[0,.025,0]);d.rotation.x=-Math.PI/2,d.castShadow=!1;const p=o(t,r.shirt,[.38,.37,.275],[0,.86,0]),f=c(t,r.darkGreen,.32,.3,.08,[0,.59,0]);f.scale.z=.81,c(t,r.darkGreen,.145,.17,.12,[0,1.16,0]);const g=u(t,"farmer growing suit");a(g,r.green,[.49,.39,.025],[0,.86,.263]);for(const Z of[-1,1])l(g,r.darkGreen,[[Z*.26,1.11,.12],[Z*.29,1.02,.19],[Z*.29,.75,.2]],.021);const _=u(t,"Pip back suit panel");a(_,r.shirt,[.43,.36,.035],[0,.88,-.26]);for(const Z of[-1,1])l(_,r.darkGreen,[[Z*.26,1.08,-.17],[Z*.26,.84,-.215],[Z*.18,.66,-.21]],.014);const v=u(t,"Pro Pip polo collar");for(const Z of[-1,1]){const Me=a(v,r.shirt,[.15,.12,.03],[Z*.1,1.11,.21],.02);Me.rotation.z=Z*.45,l(v,r.trim,[[Z*.045,1.16,.247],[Z*.115,1.065,.25],[Z*.18,1.12,.24]],.008)}const m=u(t,"HydroPip shirt emblem");for(const Z of[-1,1]){const Me=o(m,r.darkGreen,[.038,.088,.013],[Z*.053,.91,.307]);Me.rotation.z=Z*-.58}l(m,r.darkGreen,[[0,.9,.31],[0,.78,.31]],.012),o(m,r.darkGreen,[.08,.022,.012],[0,.77,.31]);const S=u(t,"Pro HydroPip chest logo",[.16,.91,.27]),b=document.createElement("canvas");b.width=256,b.height=128;const x=b.getContext("2d");x.fillStyle="#aad94c",x.beginPath(),x.ellipse(107,35,24,12,.7,0,Math.PI*2),x.ellipse(148,35,24,12,-.7,0,Math.PI*2),x.fill(),x.fillRect(124,35,7,33),x.fillStyle="#fff7df",x.font="bold 34px sans-serif",x.textAlign="center",x.fillText("HYDROPIP",128,108);const L=new uh(b);L.colorSpace=en,s(S,new Un(.29,.145),new $t({map:L,transparent:!0,depthWrite:!1}));const A=u(t,"Pip head",[0,1.51,0]);A.rotation.x=-.1,a(A,r.darkGreen,[.93,.75,.34],[0,0,-.025],.23,.065),a(A,r.green,[.9,.72,.34],[0,.005,0],.22,.065);const P=a(A,r.cream,[.87,.71,.035],[0,-.015,.275],.23),I=a(A,r.black,[.76,.52,.02],[0,.047,.315],.17);a(A,r.visor,[.71,.475,.016],[0,.05,.345],.155);const y=[];for(const Z of[-1,1]){const Me=u(A,`${Z<0?"left":"right"} expressive eye`,[Z*.17,.054,.379]);o(Me,r.white,[.083,.112,.012],[0,0,0]),o(Me,r.black,[.062,.09,.012],[.004,-.004,.015]),o(Me,r.white,[.025,.032,.008],[.027,.046,.029]),y.push(Me)}const w=new ls;w.moveTo(-.115,.036),w.quadraticCurveTo(0,.005,.115,.036),w.bezierCurveTo(.135,-.045,.065,-.116,0,-.115),w.bezierCurveTo(-.065,-.116,-.135,-.045,-.115,.036);const C=u(A,"Pip open smile",[0,-.178,.387]);s(C,new ql(w,12),r.black),o(C,r.tongue,[.055,.025,.004],[0,-.077,.005]);const R=[];for(const Z of[-1,1]){const Me=u(A,"green ear piece",[Z*.51,-.012,-.005]);Me.rotation.z=Math.PI/2,c(Me,r.darkGreen,.174,.174,.09,[0,0,0]),c(Me,r.leaf,.145,.145,.115,[0,-Z*.025,0]),c(Me,r.green,.11,.11,.13,[0,-Z*.035,0]),R.push(Me)}const k=u(t,"Pip brimmed hat",[0,1.93,-.005]),O=c(k,r.hat,.63,.61,.06,[0,0,0]);O.scale.z=.83,c(k,r.hat,.32,.405,.26,[0,.145,-.025]),c(k,r.darkGreen,.39,.408,.059,[0,.06,-.025]);const B=u(k,"straw hat weave");for(const Z of[.44,.51,.58]){const Me=s(B,new ci(Z,.006,4,32),r.weave,[0,.034,0]);Me.rotation.x=Math.PI/2,Me.scale.y=.83}for(const Z of[.12,.18,.24]){const Me=s(B,new ci(.405-(Z-.015)*.327,.005,4,32),r.weave,[0,Z,-.025]);Me.rotation.x=Math.PI/2}const F=[],Y=new ls;Y.moveTo(0,0),Y.bezierCurveTo(.04,.23,.29,.34,.52,.26),Y.bezierCurveTo(.45,.025,.18,-.1,0,0);for(const Z of[-1,1]){const Me=u(t,"veined leaf ear",[Z*.31,2.08,-.055]);Me.scale.x=Z,s(Me,new eo(Y,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:6}),r.leaf),l(Me,r.darkGreen,[[.015,.008,.05],[.21,.105,.05],[.46,.245,.05]],.012);for(const[Re,D]of[[.13,.066],[.26,.136]])l(Me,r.green,[[Re,D,.05],[Re+.012,D+.085,.05]],.006),l(Me,r.green,[[Re,D,.05],[Re+.105,D-.018,.05]],.006);F.push(Me)}const G=[],se=[],ae=[],Ae=[],he=[],Ge=[],et=[];for(const Z of[-1,1]){const Me=u(t,"Pip shoulder",[Z*.38,1.045,0]);Me.rotation.z=Z*.08,o(Me,r.darkGreen,[.132,.13,.13],[0,-.065,0]);const Re=s(Me,new Jr(.117,.1,4,12),r.shirt,[0,-.105,0]);c(Me,r.trim,.119,.119,.03,[0,-.18,0]);const D=u(Me,"Pip elbow",[0,-.24,0]);o(D,r.darkGreen,[.085,.08,.085],[0,.005,0]),s(D,new Jr(.089,.1,4,10),r.green,[0,-.105,0]),c(D,r.darkGreen,.088,.088,.035,[0,-.18,0]);const K=u(D,"Pip rounded glove",[0,-.235,.025]);o(K,r.green,[.104,.111,.094],[0,0,0]),o(K,r.leaf,[.041,.063,.047],[-Z*.078,.012,.06]);const j=u(t,"Pip hip",[Z*.17,.52,0]);s(j,new Jr(.115,.1,4,10),r.green,[0,-.095,0]);const ne=u(j,"Pip knee",[0,-.22,0]);o(ne,r.darkGreen,[.108,.075,.1],[0,0,0]),s(ne,new Jr(.1,.085,4,10),r.green,[0,-.072,0]);const Q=u(ne,"Pip work boot",[0,-.19,0]);o(Q,r.darkGreen,[.15,.055,.207],[0,-.021,.061]),o(Q,r.green,[.139,.1,.189],[0,.025,.059]),o(Q,r.leaf,[.1,.038,.089],[0,.092,.104]),G.push(Me),ae.push(D),he.push(K),et.push(Re),se.push(j),Ae.push(ne),Ge.push(Q)}const $=u(t,"Pro Pip tool belt"),ve=c($,r.leatherDark,.357,.35,.1,[0,.62,0]);ve.scale.z=.83,a($,r.metal,[.115,.105,.025],[0,.62,.31],.025),a($,r.leather,[.074,.067,.028],[0,.62,.33],.01);for(const Z of[-1,1])a($,r.leatherDark,[.19,.23,.105],[Z*.255,.52,.245],.025),a($,r.leather,[.16,.17,.035],[Z*.255,.49,.307],.025),o($,r.metal,[.016,.016,.012],[Z*.255,.55,.33]);a($,r.metal,[.038,.24,.025],[.28,.73,.255],.01);const ue=s($,new ci(.058,.018,6,16,Math.PI*1.55),r.metal,[.28,.855,.255]);ue.rotation.z=Math.PI*.73,a($,r.orange,[.043,.14,.035],[-.27,.76,.24],.018),a($,r.metal,[.018,.085,.018],[-.27,.66,.24],.007),A.updateMatrixWorld(!0);const Be=A.matrixWorld.clone().invert(),Ie=[];A.traverse(Z=>{Z.isMesh&&Ie.push(Z)});for(const Z of Ie){const Me=Be.clone().multiply(Z.matrixWorld);A.add(Z),Me.decompose(Z.position,Z.quaternion,Z.scale)}return t.traverse(Z=>{if(!Z.geometry?.index)return;const Me=Z.geometry;Z.geometry=Me.toNonIndexed(),Me.dispose()}),Wt(t),e.userData.parts={body:t,torso:p,head:A,faceShell:P,visor:I,arms:G,legs:se,elbows:ae,knees:Ae,hands:he,boots:Ge,eyes:y,mouth:C,leafEars:F,headsetCups:R,belt:$,hat:k,farmerSuit:g,proCollar:v,proLogo:S,emblem:m,backPanel:_,strawWeave:B,materials:r,sleeves:et,waistBand:f,shadow:d},e.userData.actionId="pip",e.scale.setScalar(1.04),Gx(e,n),e}function Gx(n,e){const t=n.userData.parts;t.materials.shirt.color.setHex(e?2503212:8632381),t.materials.hat.color.setHex(e?2503212:14660444),t.farmerSuit.visible=!e,t.emblem.visible=!e,t.strawWeave.visible=!e,t.proCollar.visible=e,t.proLogo.visible=e,t.belt.visible=e,n.userData.pro=e}const Ld=["post","produce","tractor","pond-birds","duck-crossing"];function Wx(n=Math.random){let e=null,t=0,i=8+n()*8,r=null;const s={post:26,produce:19,tractor:27,"pond-birds":22,"duck-crossing":30},o=()=>({active:e,elapsed:t,wait:i,duration:s[e]||0});function a(c){return Ld.includes(c)?(e=c,r=c,t=0,!0):!1}return{snapshot:o,start:a,update(c,{marketBuilt:l=!1,reducedMotion:u=!1}={}){if(u)return o();const d=Math.max(0,Math.min(.1,c));if(e)t+=d,t>=s[e]&&(e=null,t=0,i=14+n()*22);else if(i-=d,i<=0){const p=Ld.filter(f=>f!==r&&(f!=="produce"||l));a(p[Math.min(p.length-1,Math.floor(n()*p.length))])}return o()}}}function $x(){const n=new $e;n.name="living neighborhood";const e=new $e,t=new $e;n.add(e,t);const r=Object.fromEntries(Object.entries({wood:8808268,dark:3427653,stone:10070429,grass:7443032,leaf:4489565,cream:15919049,white:15463391,water:6469573,red:13921888,gold:15713102,blue:6530482}).map(([R,k])=>[R,new Er({color:k})])),s=(R,k,O,B)=>{const F=new me(new Bt(...O),k);return F.position.set(...B),R.add(F),F},o=(R,k,O,B)=>{const F=new me(new fo(1,1),k);return F.scale.set(...O),F.position.set(...B),R.add(F),F},a=(R,k,O)=>{const B=new me(new Ni(1,40),O);return B.rotation.x=-Math.PI/2,B.scale.set(...R),B.position.set(...k),e.add(B),B};a([3.5,2.6,1],[-20,-.02,4.8],r.stone),a([3.15,2.24,1],[-20,.01,4.8],r.water);for(let R=0;R<8;R++){const k=R*2.4,O=-20+Math.cos(k)*2.8,B=4.8+Math.sin(k)*2;R<4&&(a([.26,.21,1],[O,.025,B],r.leaf),o(e,r.cream,[.08,.04,.08],[O,.05,B]));for(let F=0;F<3;F++)s(e,r.grass,[.035,.5+F*.12,.035],[O+F*.12,.25+F*.06,B]),o(e,r.wood,[.065,.13,.065],[O+F*.12,.56+F*.12,B])}for(let R=0;R<5;R++){const k=19+R%2*3,O=-4+Math.floor(R/2)*4;s(e,r.wood,[.19,1.65,.19],[k,.65,O]),o(e,r.leaf,[1.2,1.05,1.15],[k,1.85,O]);for(let B=0;B<5;B++)o(e,r.red,[.14,.14,.14],[k+Math.sin(B*2)*.91,1.9+Math.cos(B)*.42,O+Math.cos(B*2)*.91]);s(e,r.wood,[.7,.3,.55],[k+.75,.15,O+.8])}const c=R=>{const k=Math.sin(R*127.1+48.7)*43758.5453;return k-Math.floor(k)};for(let R=0;R<110;R++){const k=R%3,O=k===0?-25+c(R)*7:k===1?17+c(R)*8:-15+c(R)*22,B=k===2?11+c(R+8)*4:-7+c(R+8)*17;if(((O+20)/3.8)**2+((B-4.8)/3)**2<1)continue;const F=.12+c(R+4)*.2;if(o(e,R%5?r.grass:r.stone,[.22,F,.26],[O,F/2,B]),R%3)for(let Y=0;Y<3;Y++)o(e,R%2?r.gold:r.white,[.055,.05,.055],[O+(Y-1)*.13,F+.08,B+Math.sin(Y)*.1])}for(let R=0;R<14;R++){const k=-25+R*3.8;o(e,r.leaf,[.9,.45,.55],[k,.22,-15.6]),R%3===0&&s(e,r.wood,[.11,.8,.11],[k,.3,-14.4])}s(e,r.stone,[1.1,.04,3],[-19,-.08,-15]),s(e,r.wood,[.14,1.25,.14],[8,.58,-10.1]),s(e,r.blue,[.65,.43,.43],[8,1.2,-10.1]),s(e,r.cream,[.04,.25,.29],[8.34,1.18,-10.1]);const l=new $e;l.position.set(8,1.2,-9.85),n.add(l),s(l,r.red,[.08,.38,.035],[0,.16,0]),s(l,r.red,[.22,.14,.035],[.07,.32,0]),s(e,r.wood,[1.5,.12,.5],[-17.2,.42,8.2]);for(const R of[-17.7,-16.7])s(e,r.dark,[.12,.42,.4],[R,.17,8.2]);s(e,r.wood,[1.5,.32,.08],[-17.2,.72,8.4]),e.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0)}),Wt(e),Wt(l);function u(R,k=!1){const O=new $e;t.add(O),s(O,r[R],[k?1.5:2.6,.6,1.1],[0,.61,0]),s(O,r[R],[1.1,.55,1],[-.2,1.13,0]),s(O,r.blue,[.8,.32,1.03],[-.2,1.16,0]),s(O,r.dark,[.025,.37,1.04],[-.19,1.16,0]),s(O,r.cream,[.1,.16,.85],[k?.78:1.33,.62,0]);const B=[];for(const Y of[-.85,.85])for(const G of[-.58,.58]){const se=k&&Y<0?.45:.3,ae=new me(new pt(se,se,.19,12),r.dark);ae.rotation.x=Math.PI/2,ae.position.set(Y,se-.1,G),O.add(ae);const Ae=new me(new pt(se*.48,se*.48,.2,8),r.cream);ae.add(Ae),B.push(ae)}const F=new $e;return O.children.filter(Y=>!B.includes(Y)).forEach(Y=>F.add(Y)),O.add(F),Wt(F),O.visible=!1,{group:O,wheels:B}}const d=u("blue"),p=u("red"),f=u("gold"),g=u("leaf",!0);s(d.group,r.cream,[.75,.32,.03],[-.76,.7,.565]);const _=new $e;g.group.add(_),s(_,r.wood,[1.65,.2,1.15],[-2.5,.37,0]),s(_,r.dark,[1.3,.1,.1],[-1.5,.32,0]);for(const R of[-.55,.55])o(_,r.dark,[.3,.3,.15],[-2.55,.2,R]);const v=new $e;g.group.add(v);for(let R=0;R<3;R++)s(v,r.gold,[.7,.45,.83],[-2.9+R%2*.75,.7+(R===2?.46:0),0]),s(v,r.wood,[.07,.46,.85],[-2.9+R%2*.75,.7+(R===2?.46:0),0]);Wt(_),Wt(v);const m=new $e;p.group.add(m),s(m,r.wood,[.8,.35,.9],[-.9,.95,0]);for(let R=0;R<5;R++)o(m,r.leaf,[.16,.18,.16],[-1.1+R%2*.3,1.17,-.3+Math.floor(R/2)*.28]);Wt(m);function S(R=!1){const k=new $e;t.add(k),o(k,R?r.cream:r.blue,[.21,.18,.32],[0,.25,0]),o(k,R?r.leaf:r.dark,[.13,.14,.14],[0,.43,.21]),s(k,r.gold,[.12,.045,.18],[0,.4,.36]);for(const B of[-1,1])o(k,r.dark,[.019,.025,.024],[B*.11,.47,.28]),s(k,r.gold,[.08,.04,.17],[B*.1,.04,.02]);Wt(k);const O=[];for(const B of[-1,1]){const F=new $e;F.position.set(B*.15,.3,0),k.add(F),o(F,R?r.cream:r.blue,[.28,.035,.13],[B*.2,0,0]),O.push(F)}return k.visible=!1,{group:k,wings:O}}const b=Array.from({length:3},()=>S()),x=Array.from({length:4},(R,k)=>{const O=S(!0);return O.group.scale.setScalar(k?.58:1),O});t.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0)});const L=Wx(),A={post:d,produce:p,tractor:g,"duck-crossing":f},P=It.lerp,I=It.clamp;let y=L.snapshot(),w=!1;function C(){for(const B of Object.values(A))B.group.visible=!1;if([...b,...x].forEach(B=>{B.group.visible=!1}),l.rotation.z=-.9,w||!y.active)return;const R=y.elapsed,k=y.active,O=A[k];if(O){O.group.visible=!0,O.group.rotation.y=k==="produce"?Math.PI:0;let B;k==="post"?B=R<11?P(-38,8,R/11):R<15?8:P(8,38,(R-15)/11):k==="duck-crossing"?B=R<6?P(-38,-20.5,R/6):R<17?-20.5:P(-20.5,38,(R-17)/13):B=P(k==="produce"?38:-38,k==="produce"?-38:38,R/y.duration),O.group.position.set(B,.08,-12.2);const F=k==="post"&&R>=11&&R<15||k==="duck-crossing"&&R>=6&&R<17;O.wheels.forEach(Y=>{Y.rotation.y=F?0:-B*3}),k==="post"&&R>12&&R<16&&(l.rotation.z=0),v.rotation.x=k==="tractor"?Math.sin(R*2.6)*.04:0}k==="pond-birds"&&b.forEach((B,F)=>{B.group.visible=!0;const Y=I((R-F*.4)/5,0,1),G=I((R-15-F*.4)/5,0,1);B.group.position.set(P(-29,-20+F*.65,Y)+G*-10,P(4.5,.13,Y)+G*5,P(-5,3.2,Y)+G*4),B.group.rotation.set(Y===1&&G===0?Math.max(0,Math.sin(R*2+F))*.38:0,G?-1.5:.7,0),B.wings.forEach((se,ae)=>{se.rotation.z=(ae?1:-1)*(Y<1||G>0?Math.sin(R*13+F)*.7:1.1)})}),k==="duck-crossing"&&x.forEach((B,F)=>{const Y=I((R-4-F*(F===3?1.5:.6))/(F===3?6.5:9),0,1);B.group.visible=R>4+F*(F===3?1.5:.6)&&Y<1,B.group.position.set(-17.8+Math.sin(Y*Math.PI)*.2,.07+Math.abs(Math.sin(R*(F===3?15:9)))*.035,P(-15.5,-8.4,Y)),B.wings.forEach((G,se)=>{G.rotation.z=se?1.2:-1.2})})}return{root:n,update(R,k){w=k.reducedMotion,y=L.update(R,k),C()},snapshot(){return{...y,sceneryMeshes:e.children.length,visibleActors:t.children.filter(R=>R.visible).map(R=>R.position.toArray()),totalActors:t.children.length,reducedMotion:w}},start(R){const k=L.start(R);return y=L.snapshot(),C(),k}}}const po=["lettuce","basil","tomato","kale","strawberry"],Lh=[6,18,40],Dh=["Grower","Living Soil","Neighborhood"],je=(n,e,t,i=null)=>({kind:n,target:e,label:t,crop:i}),Jt=(n,e,t,i,r,s)=>({id:n,path:e,chapter:t,title:i,focus:r,goals:s,coins:18,xp:15}),tr=[Jt("roots",0,0,"Rooted in the garden","tower-0",[je("transplant",6,"Transplant tower starters"),je("harvest",4,"Harvest soil-finished crops")]),Jt("layer-craft",0,1,"A tower of many colors","tower-0",[je("mixed",1,"Fill one tower with four different crops"),je("variety",4,"Harvest different crop varieties")]),Jt("right-flow",0,1,"One batch, every tower","reservoir",[je("matched",8,"Plant starts after checking shared delivery"),je("harvest",6,"Harvest garden crops")]),Jt("fruit-garden",0,2,"The fruit garden","bed-0",[je("harvest",8,"Harvest tomatoes","tomato"),je("harvest",8,"Harvest strawberries","strawberry")]),Jt("succession",0,2,"Succession without a gap","tower-0",[je("transplant",18,"Start the next garden succession"),je("variety",5,"Harvest all five crops")]),Jt("grower-showcase",0,2,"The HydroPip showcase","bed-0",[je("matched",16,"Plant starts with shared delivery checked"),je("harvest",24,"Finish crops in soil"),je("variety",5,"Include every crop")]),Jt("scraps",1,0,"Nothing goes to waste","workshop",[je("compost",2,"Start compost batches"),je("enrich",1,"Enrich a garden bed")]),Jt("happy-hens",1,1,"Hens at home","workshop",[je("feed",3,"Feed the hens stored vegetables"),je("eggs",3,"Collect egg batches")]),Jt("gentle-water",1,1,"Make every drop count","reservoir",[je("saving",10,"Plant after checking the timed feed"),je("enrich",2,"Enrich garden beds")]),Jt("living-soil",1,1,"Living soil","composter",[je("compost",4,"Start compost batches"),je("enriched",12,"Transplant into enriched soil")]),Jt("closed-loop",1,2,"From harvest to compost","coop",[je("feed",5,"Feed the hens"),je("enrich",4,"Return compost to garden beds"),je("harvest",18,"Harvest fresh crops")]),Jt("soil-showcase",1,2,"Sustainable homestead","composter",[je("saving",18,"Plant starts with the timed feed checked"),je("enriched",20,"Grow in enriched soil"),je("eggs",5,"Collect egg batches")]),Jt("neighbors",2,0,"Your neighborhood regulars","market",[je("order",5,"Complete market orders"),je("variety",2,"Harvest different crops")]),Jt("salad-club",2,1,"The neighborhood salad club","market",[je("order",4,"Serve lettuce orders","lettuce"),je("order",4,"Serve basil orders","basil")]),Jt("request-route",2,1,"Pip's request route","market",[je("request",3,"Complete chosen requests"),je("order",6,"Serve market customers")]),Jt("weekend-market",2,2,"The weekend market","market",[je("order",5,"Serve tomato orders","tomato"),je("order",5,"Serve kale orders","kale"),je("egg-sale",2,"Sell packed eggs at the stand")]),Jt("community-table",2,2,"A table for everyone","market",[je("request",5,"Complete chosen requests"),je("variety",5,"Harvest every crop"),je("order",10,"Serve market orders")]),Jt("harvest-festival",2,2,"The homestead harvest festival","market",[je("order",18,"Welcome market customers"),je("request",5,"Complete community requests"),je("egg-sale",4,"Bring fresh eggs to market")])],Ra=[{id:"greens",title:"Mara's fresh greens",detail:"Harvest 6 lettuce for this growing request.",focus:"bed-0",goals:[je("harvest",6,"Lettuce harvested","lettuce")],crops:["lettuce"]},{id:"herbs",title:"June's herb patch",detail:"Raise 5 basil through the towers and garden.",focus:"bed-0",goals:[je("harvest",5,"Basil harvested","basil")],crops:["basil"]},{id:"mixed",title:"Theo's mixed harvest",detail:"Harvest three different crops from the garden.",focus:"bed-0",goals:[je("variety",3,"Different crops harvested")],crops:["tomato","basil"]},{id:"flow",title:"Pip's water-wise trial",detail:"Check shared tower delivery, then plant 8 starts.",focus:"reservoir",goals:[je("saving",8,"Starts with delivery checked")],chapter:1,crops:[]},{id:"market",title:"Luis's market morning",detail:"Complete 5 customer orders at the stand.",focus:"market",goals:[je("order",5,"Market orders served")],crops:[]},{id:"soil",title:"June's soil trial",detail:"Transplant 6 tower starters into compost-enriched beds.",focus:"composter",goals:[je("enriched",6,"Enriched transplants")],equipment:"composter",crops:[]},{id:"berries",title:"Mara's berry harvest",detail:"Harvest 6 strawberries from finished garden plants.",focus:"bed-0",goals:[je("harvest",6,"Strawberries harvested","strawberry")],crops:["strawberry"]},{id:"hens",title:"Theo's happy hens",detail:"Feed and collect two batches of eggs.",focus:"coop",goals:[je("feed",2,"Hen feedings"),je("eggs",2,"Egg batches collected")],equipment:"coop",crops:[]}],ra=(n,e=99999)=>Number.isFinite(Number(n))?Math.max(0,Math.min(e,Math.floor(Number(n)))):0;function Ih(){return{claimed:[],progress:{},mastery:{},request:null,requestSerial:0,requestsCompleted:0,pinned:"roots"}}const Dd=(n,e)=>e.map((t,i)=>t.kind==="variety"?[...new Set((Array.isArray(n?.[i])?n[i]:[]).filter(r=>po.includes(r)))]:ra(n?.[i],t.target));function qx(n){const e=Ih();e.claimed=[...new Set((Array.isArray(n?.claimed)?n.claimed:[]).filter(i=>tr.some(r=>r.id===i)))];for(const i of tr)e.progress[i.id]=Dd(n?.progress?.[i.id],i.goals);for(const i of po)e.mastery[i]=ra(n?.mastery?.[i],3);e.requestSerial=ra(n?.requestSerial,999999),e.requestsCompleted=ra(n?.requestsCompleted),e.pinned=tr.some(i=>i.id===n?.pinned)?n.pinned:"roots";const t=Ra.find(i=>i.id===n?.request?.id);return t&&(e.request={id:t.id,progress:Dd(n.request.progress,t.goals)}),e}function Xn(n){return Dh.map((e,t)=>tr.find(i=>i.path===t&&!n.homestead.claimed.includes(i.id))).filter(Boolean)}function Jl(n,e){return n.market.built&&n.chapter>=e.chapter&&Xn(n).includes(e)}function Kl(n,e=[]){return n.map((t,i)=>({...t,current:Math.min(t.target,t.kind==="variety"?(e[i]||[]).length:e[i]||0)}))}function mo(n,e){return Kl(e.goals,n.homestead.progress[e.id])}function Pa(n,e){return Jl(n,e)&&mo(n,e).every(t=>t.current>=t.target)}function Id(n,e,t,i){n.forEach((r,s)=>{r.kind==="variety"&&t==="harvest"&&po.includes(i)?e[s]=[...new Set([...e[s]||[],i])]:r.kind===t&&(!r.crop||r.crop===i)&&(e[s]=Math.min(r.target,(e[s]||0)+1))})}function Li(n,e,t=null){if(!n.market.built)return;for(const r of Xn(n))if(Jl(n,r)){const s=n.homestead.progress[r.id]||=[];Id(r.goals,s,e,t)}const i=Ra.find(r=>r.id===n.homestead.request?.id);i&&Id(i.goals,n.homestead.request.progress,e,t)}function Xx(n,e){const t=tr.find(i=>i.id===e);return!t||!Pa(n,t)?!1:(n.homestead.claimed.push(e),n.coins+=t.coins,n.xp+=t.xp,n.homestead.pinned=Xn(n).find(i=>i.path===t.path)?.id||Xn(n)[0]?.id||null,!0)}function Ht(n){const e=n.homestead?.claimed.length||0;return{basket:e>=3?7:5,seedBatch:e>=6?6:4,water:e>=12?.9:1,festival:e>=18}}function La(n,e){return n.homestead?.mastery?.[e]||0}function Yx(n,e){if(!po.includes(e)||!n.market.built)return!1;const t=La(n,e);return t>=3||n.stats.byCropHarvested[e]<Lh[t]?!1:(n.homestead.mastery[e]=t+1,n.coins+=[8,12,20][t],n.xp+=10,n.seeds[e]=Math.min(999,n.seeds[e]+2),!0)}function Uh(n){const e=Ra.filter(i=>n.market.built&&n.chapter>=(i.chapter||0)&&i.crops.every(r=>n.unlockedCrops.includes(r))&&(!i.equipment||n.farm.owned.includes(i.equipment))),t=n.homestead.requestSerial%(e.length||1);return Array.from({length:Math.min(3,e.length)},(i,r)=>e[(t+r)%e.length])}function kh(n){return Ra.find(e=>e.id===n.homestead.request?.id)||null}function jx(n,e){return n.homestead.request||!Uh(n).some(t=>t.id===e)?!1:(n.homestead.request={id:e,progress:[]},!0)}function Jx(n){const e=kh(n);return!e||!Kl(e.goals,n.homestead.request.progress).every(t=>t.current>=t.target)?!1:(n.homestead.request=null,n.homestead.requestSerial++,n.homestead.requestsCompleted++,n.coins+=12,n.xp+=8,Li(n,"request"),!0)}function Kx(n){return n.homestead.request?!1:(n.homestead.requestSerial++,!0)}function yr(n){return n.campaignComplete&&n.homestead.claimed.length===18&&po.every(e=>La(n,e)===3)}const Nh=[{label:"Produce table",cost:40,towers:1,detail:"A small roadside table for your first garden harvests."},{label:"Shade canopy",cost:30,towers:2,detail:"Add shade and a second produce crate."},{label:"Neighborhood stand",cost:45,towers:3,detail:"Build a wider counter, shelves, and space for two visitors."},{label:"Farm market",cost:65,towers:4,detail:"Finish the striped awning and family-basket display. Up to three visitors."}],Da=n=>n.towers.filter(e=>e.built&&e.repaired).length;function xs(n){return n.market.built?n.market.level>=2?4:Math.max(1,Math.min(4,n.market.stage||3)):0}function zi(n){const e=xs(n),t=Nh[e];if(!t)return null;const i=!e&&n.taskIndex<3?"Finish the first garden harvests":Da(n)<t.towers?`Requires ${t.towers} working towers`:"";return{...t,stage:e+1,reason:i,available:!i&&n.coins>=t.cost}}function Oh(n){const e=zi(n);return e?.available?(n.coins-=e.cost,n.market.built=!0,n.market.stage=e.stage,n.market.level=e.stage===4?2:1,!0):!1}function Tn(n,e,t=0){const i=e==="bed"?Math.max(2,n.beds[t].capacity):2;return Da(n)<i?`Requires ${i} working towers`:""}const Zl=n=>Math.max(1,xs(n)-1),sa=(n,e,t)=>n+Math.floor(t()*(e-n+1));function Zx(n,e=Math.random){const t=n.unlockedCrops;let i=(n.market.cropBag||[]).filter(s=>t.includes(s));if(!i.length){i=[...t];for(let s=i.length-1;s>0;s--){const o=sa(0,s,e);[i[s],i[o]]=[i[o],i[s]]}}const r=i.shift();return n.market.cropBag=i,r}function Qx(n,e,t,i=Math.random){if(!n.market.built)return!1;const r=Zl(n),s=n.market;return n.orders.length>=r||n.orders.length&&!s.visitRemaining||(s.nextVisitIn=Math.max(0,(s.nextVisitIn??8)-e),s.nextVisitIn>0)?!1:(s.visitRemaining||(s.visitRemaining=sa(1,r,i)),n.orders.push(t(n.orders.length)),s.visitRemaining--,s.nextVisitIn=s.visitRemaining?sa(5,10,i):sa(12,28,i),!0)}const ey=[{name:"Mara",color:"#df695c",skin:"#d9a47d",hair:"#453027",accessory:"sunhat",line:"Fresh greens for the block."},{name:"Theo",color:"#4398b1",skin:"#8c5d43",hair:"#242c30",accessory:"glasses",line:"A quick stop on the way home."},{name:"June",color:"#e5b84c",skin:"#e6b58b",hair:"#745239",accessory:"bun",line:"Produce for the neighborhood table."},{name:"Nia",color:"#78a967",skin:"#6f4937",hair:"#211e24",accessory:"curls",line:"The garden finish makes the difference."},{name:"Sam",color:"#ba7198",skin:"#c78968",hair:"#b9b7af",accessory:"glasses",line:"Looking for today's best crop."},{name:"Luis",color:"#6a87bf",skin:"#a46e4d",hair:"#39322a",accessory:"cap",line:"A market basket for dinner."}];function kn(n){return n.orders.find(e=>e.id===n.selectedOrderId&&e.status==="waiting")||null}function Nn(n,e,t=Date.now()){const i=n.carry?.kind==="produce"?n.carry.items:[],r=i.filter(d=>d===e.crop).length,s=n.rack[e.crop]||0,o=n.beds.flatMap(d=>d.plants).filter(d=>d.crop===e.crop),a=o.filter(d=>d.readyAt<=t).length,c=o.length-a+n.towers.flatMap(d=>d.queue).filter(d=>d.crop===e.crop).length+(n.carry?.kind==="starter"&&n.carry.crop===e.crop?1:0),l=Math.max(0,e.amount-r),u=n.carry?.kind==="starter"?0:Ht(n).basket-i.length;return{carried:r,stored:s,ready:a,growing:c,needed:l,room:u,load:Math.min(l,s,u),missing:Math.max(0,l-s-a-c)}}function vl(n,e){const t=Nn(n,e);return n.carry?.kind==="starter"?{kind:"starter",label:"Plant starter",stock:t}:t.needed?t.room?t.load?{kind:"collect",label:`Collect ${t.load}`,stock:t}:t.ready?{kind:"harvest",label:"Harvest needed",stock:t}:{kind:"grow",label:t.missing?"Grow needed":"View growing",stock:t}:{kind:"store",label:"Make room",stock:t}:{kind:"deliver",label:"Deliver",stock:t}}function qt(n,e){if(n._markup===e)return;n._markup=e;const t=document.createElement("template");t.innerHTML=e;const i=s=>s.nodeType===1&&(s.getAttribute("data-key")||s.id||s.getAttribute("data-command"))||"";function r(s,o){const a=[...s.childNodes],c=new Set;[...o.childNodes].forEach((l,u)=>{const d=i(l),p=a.find(g=>!c.has(g)&&g.nodeType===l.nodeType&&g.nodeName===l.nodeName&&(d?i(g)===d:!i(g))),f=p||l.cloneNode(!0);if(c.add(f),s.childNodes[u]!==f&&s.insertBefore(f,s.childNodes[u]||null),!!p){if(f.nodeType===3){f.nodeValue!==l.nodeValue&&(f.nodeValue=l.nodeValue);return}if(f.nodeType===1){for(const g of[...f.attributes])l.hasAttribute(g.name)||f.removeAttribute(g.name);for(const g of[...l.attributes])f.getAttribute(g.name)!==g.value&&f.setAttribute(g.name,g.value);r(f,l)}}});for(const l of a)c.has(l)||l.remove()}r(n,t.content)}function ty(n,e,t){let i="projects";const r=o=>`<ul class="homestead-goals">${o.map(a=>`<li><span>${a.label}</span><strong>${a.current}/${a.target}</strong><progress max="${a.target}" value="${a.current}"></progress></li>`).join("")}</ul>`;function s(o){const a=o.homestead,c=yr(o),l=a.claimed.length;let u;if(i==="projects")u=`<p class="homestead-summary">${l}/18 projects / ${Object.values(a.mastery).reduce((d,p)=>d+p,0)}/15 crop badges</p><p>${c?"Master Grower homestead complete. Community requests continue.":"A growing homestead, one useful project at a time."}</p>`,u+=Xn(o).map(d=>{const p=Jl(o,d),f=Pa(o,d);return`<article class="homestead-project ${f?"is-ready":""}"><small>${Dh[d.path]} / ${tr.filter(g=>g.path===d.path).indexOf(d)+1} of 6</small><h3>${d.title}</h3>${r(mo(o,d))}<p>${p?"18 coins + 15 XP":`Opens in Chapter ${d.chapter+1}${o.market.built?"":" after the market opens"}`}</p><div class="homestead-actions"><button data-home-action="project" data-value="${d.id}" ${f?"":"disabled"}>Claim reward</button><button data-home-action="pin" data-value="${d.id}" ${p?"":"disabled"}>${a.pinned===d.id?"Pinned":"Pin goal"}</button><button data-home-action="focus" data-value="${d.focus}" ${p?"":"disabled"}>Visit</button></div></article>`}).join(""),u+=`<h3>Homestead rewards</h3><ul class="homestead-perks">${[[3,"7-slot harvest basket"],[6,"6 seeds per packet at the same price"],[12,"10% less tower water use"],[18,"Harvest festival garden display"]].map(([d,p])=>`<li>${l>=d?"Earned":`${d} projects`}: ${p}</li>`).join("")}</ul><details><summary>All 18 projects</summary>${tr.map(d=>`<p>${a.claimed.includes(d.id)?"Complete: ":""}${d.title}</p>`).join("")}</details>`;else if(i==="mastery")u="<p>Garden harvests earn crop badges. Each badge makes that crop finish in soil 3% sooner. Previous harvests count.</p>",u+=Object.entries(e).map(([d,p])=>{const f=La(o,d),g=Lh[f],_=o.stats.byCropHarvested[d];return`<article class="homestead-project"><h3><span class="crop-swatch" style="background:${p.color}">${p.code}</span> ${p.label}</h3><p>${f}/3 badges / ${f*3}% shorter garden growth</p>${f<3?`${r([{label:"Garden harvests",current:Math.min(g,_),target:g}])}<p>${[8,12,20][f]} coins + 10 XP + 2 seeds</p><button data-home-action="mastery" data-value="${d}" ${_>=g&&o.market.built?"":"disabled"}>Claim ${["Bronze","Silver","Gold"][f]} badge</button>`:"<strong>Gold mastery earned</strong>"}</article>`}).join("");else{const d=kh(o);if(u=`<p>${a.requestsCompleted} requests completed. No deadlines. Requests reward your farm work; they do not take crops out of storage.</p>`,d){const p=Kl(d.goals,a.request.progress),f=p.every(g=>g.current>=g.target);u+=`<article class="homestead-project ${f?"is-ready":""}"><h3>${d.title}</h3><p>${d.detail}</p>${r(p)}<p>12 coins + 8 XP</p><div class="homestead-actions"><button data-home-action="request-claim" ${f?"":"disabled"}>Claim reward</button><button data-home-action="focus" data-value="${d.focus}">Visit</button><button data-home-action="request-abandon">Abandon</button></div></article>`}else u+=Uh(o).map(p=>`<article class="homestead-project"><h3>${p.title}</h3><p>${p.detail}</p><p>12 coins + 8 XP</p><button data-home-action="request-accept" data-value="${p.id}">Choose request</button></article>`).join(""),u+='<button data-home-action="request-refresh">Other requests</button>'}qt(n,`<header><div><small>HydroPip homestead</small><h2>${c?"Master Grower":"Growing Together"}</h2></div><button class="close-button" data-home-action="close" aria-label="Close homestead goals">&#215;</button></header><div class="homestead-tabs" role="tablist" aria-label="Homestead views">${[["projects","Projects"],["mastery","Crop book"],["requests","Requests"]].map(([d,p])=>`<button role="tab" aria-selected="${i===d}" data-home-tab="${d}">${p}</button>`).join("")}</div><div role="tabpanel" class="homestead-content">${u}</div>`)}return n.onclick=o=>{const a=o.target.closest("button");!a||a.disabled||(a.dataset.homeTab?(i=a.dataset.homeTab,t("render")):a.dataset.homeAction&&t(a.dataset.homeAction,a.dataset.value))},{render:s}}const ny=4;function go(n,e=null,t=-1){const i=new Set(n.queue.map(r=>r.layer));return e?.kind==="starter"&&e.sourceTower===t&&i.add(e.sourceLayer),[0,1,2,3].filter(r=>!i.has(r))}function Tr(n,e,t=null){return n?.queue.find(i=>i.readyAt!==null&&i.readyAt<=e&&(!t||i.crop===t))}function Fh(n){n.towers.forEach((e,t)=>{const i=new Set;for(const s of e.queue)(!Number.isInteger(s.layer)||s.layer<0||s.layer>=ny||i.has(s.layer))&&(s.layer=[0,1,2,3].find(o=>!i.has(o))),i.add(s.layer);const r=n.carry;r?.kind==="starter"&&r.sourceTower===t&&((!Number.isInteger(r.sourceLayer)||i.has(r.sourceLayer))&&(r.sourceLayer=[0,1,2,3].find(s=>!i.has(s))),r.job&&(r.job.layer=r.sourceLayer))})}const Fi={composter:{label:"Composter",cost:90,chapter:0,towers:1,stages:["Open compost bin","Covered compost station"],detail:"Two scraps make one compost bag. Add a cover at 2 towers to shorten batches from 60 to 40 seconds."},rainTank:{label:"Rainwater storage",cost:120,chapter:1,towers:2,stages:["Rain barrel","Twin-barrel storage"],detail:"Save 10% reservoir water. Add the second barrel at 3 towers to save 20%."},coop:{label:"Chicken coop",cost:180,chapter:1,towers:3,stages:["Starter coop","Expanded chicken run"],detail:"One vegetable feeds one hen for one egg in 2 minutes. At 4 towers, expand the run for two hens and two eggs."}};function $n(n,e){return n.owned.includes(e)?n.levels?.[e]||2:0}function Ql(n,e){if(!Object.hasOwn(Fi,e))return null;const t=Fi[e],i=$n(n.farm,e);if(i>=2)return null;const r=t.towers+i,s=n.market.built?n.chapter<t.chapter?"Requires Chapter 2":Da(n)<r?`Requires ${r} working towers`:"":"Open the produce table first";return{label:t.stages[i],level:i+1,cost:t.cost/2,reason:s}}function iy(n,e){const t=Ql(n,e);return!t||t.reason||n.coins<t.cost?!1:(n.coins-=t.cost,n.farm.levels||={},n.farm.levels[e]=t.level,n.farm.owned.includes(e)||n.farm.owned.push(e),!0)}function ry(){return{owned:[],levels:{},scraps:0,compost:0,compostReadyAt:null,coopReadyAt:null,eggsReady:0,eggs:0,eggsSold:0}}function sy(n){const e=(t,i=999)=>Math.max(0,Math.min(i,Math.floor(Number(t)||0)));return{owned:[...new Set((Array.isArray(n?.owned)?n.owned:[]).filter(t=>Object.hasOwn(Fi,t)))],levels:Object.fromEntries(Object.keys(Fi).map(t=>[t,n?.levels?.[t]===1?1:2])),scraps:e(n?.scraps,24),compost:e(n?.compost,12),compostReadyAt:Number.isFinite(n?.compostReadyAt)&&n.compostReadyAt>0?n.compostReadyAt:null,coopReadyAt:Number.isFinite(n?.coopReadyAt)&&n.coopReadyAt>0?n.coopReadyAt:null,eggsReady:e(n?.eggsReady,2),eggs:e(n?.eggs,12),eggsSold:e(n?.eggsSold,99999)}}function oy(n,e){const t=n.farm;t.owned.includes("composter")&&t.compostReadyAt&&t.compostReadyAt<=e&&(t.compost=Math.min(12,t.compost+1),t.compostReadyAt=null),t.owned.includes("coop")&&t.coopReadyAt&&t.coopReadyAt<=e&&(t.eggsReady=$n(t,"coop"),t.coopReadyAt=null)}function ay(n,e,t=1){const i=n.farm;return!i.owned.includes("composter")||i.compostReadyAt||i.scraps<2||i.compost>=12?!1:(i.scraps-=2,i.compostReadyAt=e+($n(i,"composter")===2?4e4:6e4)*t,!0)}function cy(n,e,t,i=1){const r=n.farm;return!r.owned.includes("coop")||r.coopReadyAt||r.eggsReady||!Object.hasOwn(n.rack,e)||!(n.rack[e]>0)?!1:(n.rack[e]-=1,n.stats.byCropFed[e]+=1,r.coopReadyAt=t+12e4*i,!0)}function ly(n){const e=n.farm;return!e.owned.includes("coop")||!e.eggsReady||e.eggs+e.eggsReady>12?!1:(e.eggs+=e.eggsReady,e.eggsReady=0,e.scraps=Math.min(24,e.scraps+1),!0)}function uy(n){if(!n.market.built||!n.farm.eggs)return 0;const e=n.farm.eggs;return n.farm.eggs=0,n.farm.eggsSold+=e,n.coins+=e*8,e}function dy(n,e){const t=n.beds[e];return!t?.built||t.soilCharges||n.farm.compost<1?!1:(n.farm.compost-=1,t.soilCharges=4,!0)}function hy(n,e){const t=new $e;t.name=`farm ${n}`;const i=$n(e,n);t.userData.constructionLevel=i;const r=Object.fromEntries(Object.entries({wood:10056519,dark:4215880,soil:6573618,cream:15787717,roof:12936278,leaf:8169539,orange:15311682,water:6269879}).map(([a,c])=>[a,new Er({color:c})])),s=(a,c,l,u)=>{const d=new me(new Bt(...l),c);return d.position.set(...u),a.add(d),d},o=(a,c,l,u)=>{const d=new me(new yn(1,12,8),c);return d.scale.set(...l),d.position.set(...u),a.add(d),d};if(n==="composter"){s(t,r.soil,[1.55,.42,1.1],[0,.24,0]);for(const a of[-.8,.8])for(const c of[-.6,.6])s(t,r.dark,[.11,1.1,.11],[a,.55,c]);for(const a of[.2,.44,.68,.92]){for(const c of[-.62,.62])s(t,r.wood,[1.7,.17,.08],[0,a,c]);for(const c of[-.82,.82])s(t,r.wood,[.08,.17,1.3],[c,a,0])}o(t,r.soil,[.73,.2+e.scraps*.012,.53],[0,.51,0]);for(let a=0;a<Math.min(6,e.scraps);a++)o(t,r.leaf,[.15,.03,.075],[Math.sin(a*2)*.45,.66+e.scraps*.008,Math.cos(a*2)*.35]);for(let a=0;a<Math.min(3,e.compost);a++)s(t,r.cream,[.3,.38,.24],[1.12,.2,-.36+a*.29]);if(i>1){const a=s(t,r.dark,[1.85,.09,1.36],[0,1.23,-.22]);a.rotation.x=-.3,s(t,r.wood,[.2,.85,.08],[.7,1.2,-.6])}}else if(n==="rainTank"){const a=new me(new pt(.66,.72,1.45,20),r.water);a.position.y=.75,t.add(a);for(const c of[.15,.72,1.44]){const l=new me(new ci(.68,.045,6,24),r.dark);l.rotation.x=Math.PI/2,l.position.y=c,t.add(l)}if(s(t,r.cream,[.2,.9,.08],[0,.83,.66]),s(t,r.dark,[.12,.15,.48],[.35,.22,.71]),i>1){const c=new me(new pt(.54,.58,1.25,20),r.water);c.position.set(1.2,.65,0),t.add(c),s(t,r.dark,[.6,.1,.1],[.65,.3,0]),s(t,r.cream,[1.2,.08,1.2],[1.2,1.3,0])}}else{s(t,r.soil,[4,.06,2],[0,.03,0]),s(t,r.wood,[1.25,.9,1.2],[-1.1,.85,0]),s(t,r.dark,[.33,.47,.035],[-1.04,.64,.62]);for(const l of[-1,1]){const u=s(t,r.roof,[.85,.09,1.5],[-1.1+l*.34,1.49,0]);u.rotation.z=-l*.33}for(const l of[-1.58,-.63])for(const u of[-.48,.48])s(t,r.dark,[.1,.55,.1],[l,.28,u]);const a=s(t,r.wood,[.48,.06,.9],[-1.04,.26,.96]);a.rotation.x=-.4;for(const l of[-2,-1,0,1,2])for(const u of[-1,1])s(t,r.wood,[.055,.56,.055],[l,.3,u]);for(const l of[-1,1])for(const u of[.19,.45])s(t,r.wood,[4.05,.035,.035],[0,u,l]);for(const l of[-2,2])for(const u of[.19,.45])s(t,r.wood,[.035,.035,2],[l,u,0]);o(t,r.cream,[.22,.04,.19],[1.5,.08,-.5]);for(let l=0;l<e.eggsReady;l++)o(t,r.cream,[.09,.12,.08],[-.69+l*.2,.53,.64]);const c=[];for(let l=0;l<i;l++){const u=new $e;u.position.set(.2+l*.85,0,l?-.4:.35),t.add(u),o(u,r.cream,[.25,.25,.34],[0,.36,0]),o(u,r.wood,[.05,.14,.21],[-.23,.38,-.03]),o(u,r.cream,[.13,.2,.13],[0,.63,.2]);for(let f=0;f<3;f++)o(u,r.roof,[.045,.065,.055],[0,.82,.15+f*.045]);o(u,r.roof,[.04,.08,.04],[0,.53,.31]);for(const f of[-1,1])o(u,r.dark,[.018,.024,.018],[f*.116,.68,.25]),s(u,r.orange,[.028,.19,.03],[f*.1,.1,0]),s(u,r.orange,[.08,.025,.13],[f*.1,.025,.04]);const d=new me(new mi(.057,.16,4),r.orange);d.rotation.x=Math.PI/2,d.position.set(0,.63,.35),u.add(d);const p=o(u,r.cream,[.11,.24,.1],[0,.54,-.28]);p.rotation.x=-.65,u.userData.home=u.position.clone(),c.push(u)}if(t.userData.hens=c,i>1){s(t,r.wood,[.85,.45,.6],[-1.1,.6,-.8]),s(t,r.roof,[1,.08,.72],[-1.1,.88,-.8]);for(const l of[.2,1.1])s(t,r.dark,[.07,1.15,.07],[l,.6,-.9]);s(t,r.wood,[1.15,.08,.1],[.65,1.15,-.9])}}return t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),Wt(t),t}function fy(n){const e=new Map;n.traverse(i=>{!i.userData.growthTiming||!i.userData.plantingPlacements||i.children.filter(r=>r.isInstancedMesh).forEach((r,s)=>{const o=`${i.userData.crop}:${s}:${r.material.opacity}`;e.has(o)||e.set(o,[]),e.get(o).push(r),r.layers.set(1),r.castShadow=!1})});const t=[];for(const i of e.values()){const r=i.reduce((o,a)=>o+a.count,0),s=new wr(i[0].geometry.clone(),i[0].material.clone(),r);s.castShadow=!0,s.receiveShadow=!0,s.userData.instanceTargets=i.flatMap(o=>Array(o.count).fill(o.userData.interactiveId)),s.userData.cropBatch=!0,n.add(s),t.push({mesh:s,parts:i})}n.userData.cropBatches=t,Bh(n)}function Bh(n){n.updateMatrixWorld(!0);const e=n.matrixWorld.clone().invert(),t=new bt,i=new bt,r=new bt().makeScale(0,0,0);for(const{mesh:s,parts:o}of n.userData.cropBatches||[]){let a=0;for(const c of o){i.multiplyMatrices(e,c.matrixWorld);for(let l=0;l<c.count;l++)c.getMatrixAt(l,t),t.premultiply(i),c.visible||t.multiply(r),s.setMatrixAt(a++,t)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}const _l=.24,bc=1.12;function py(n){const e=new $e;e.name="water reservoir";const t=new $e;e.add(t);const i=new Er({color:14476762}),r=new Er({color:4151378}),s=new Oi({color:4636114,roughness:.25,metalness:.05}),o=new $t({color:6935773});function a(v,m,S,b){const x=new me(m,S);return x.position.set(...b),v.add(x),x}a(t,new Bt(1.7,.2,1.7),r,[0,.13,0]);for(const v of[.26,.84,1.43])for(const m of[-.78,.78])a(t,new Bt(1.6,.045,.045),i,[0,v,m]),a(t,new Bt(.045,.045,1.6),i,[m,v,0]);for(const v of[-.78,0,.78])for(const m of[-.78,.78])a(t,new Bt(.045,1.2,.045),i,[v,.845,m]);const c=a(e,new Bt(1.5,1.17,1.5),new Oi({color:14152429,transparent:!0,opacity:.14,roughness:.25,depthWrite:!1,side:_n}),[0,.845,0]);c.renderOrder=2;const l=a(e,new Bt(1.37,1,1.37),s,[0,_l,0]);l.name="reservoir water volume";const u=new $e;u.position.set(.42,0,.8),e.add(u),a(u,new Bt(.22,1.1,.06),r,[0,.86,0]);for(let v=0;v<=4;v++)a(u,new Bt(.045,.014,.015),i,[.065,.39+v*.225,.04]);Wt(u);const d=a(u,new Bt(.08,.9,.025),o,[-.025,.39,.048]),p=a(u,new yn(.065,10,8),o,[0,1.39,.018]);for(const v of[-.35,.35])a(t,new Bt(.24,.2,.3),r,[v,.34,-.2]),a(t,new pt(.045,.045,1.2,8),r,[v,.95,-.2]);const f=a(t,new pt(.045,.045,.42,8),r,[-.35,1.55,.01]);f.rotation.x=Math.PI/2,a(t,new pt(.045,.045,.18,8),r,[-.35,1.48,.22]);const g=a(t,new pt(.045,.045,.66,8),r,[.35,1.55,-.53]);g.rotation.x=Math.PI/2,a(t,new pt(.045,.045,1.3,8),r,[.35,.9,-.86]);const _=a(e,new pt(.027,.037,.2,8),s,[-.35,1.3,.22]);return _.name="IBC top mixing discharge",Wt(t),e.userData.reservoir={liquid:l,fill:d,lamp:p,shell:c,mixingStream:_,ratio:null,status:null},zh(e,n),e}function zh(n,e){const t=n?.userData.reservoir;if(!t)return;const i=Math.max(0,Math.min(1,Number.isFinite(e)?e/100:0));if(t.ratio===i)return;t.ratio=i,t.status=i===0?"empty":i<.3?"low":"ready",t.liquid.visible=t.fill.visible=i>0,t.liquid.scale.y=Math.max(1e-4,i*bc),t.liquid.position.y=_l+i*bc/2,t.mixingStream.visible=i>0;const r=Math.max(.02,1.4-(_l+i*bc));t.mixingStream.scale.y=r/.2,t.mixingStream.position.y=1.4-r/2,t.fill.scale.y=Math.max(1e-4,i),t.fill.position.y=.39+i*.9/2,t.lamp.material.color.setHex(i<.3?16102724:6935773)}function my(n){const e=n?.userData.reservoir;return e?{ratio:e.ratio,status:e.status,waterVisible:e.liquid.visible,surfaceHeight:e.liquid.position.y+e.liquid.scale.y/2,bottomHeight:e.liquid.position.y-e.liquid.scale.y/2,gaugeVisible:e.fill.visible,gaugeScale:e.fill.scale.y,modelId:n.uuid}:null}const Hs="2026.09.06-preview.8",gy="https://hydropip-pip-api.onrender.com/track-start.html",Ud="info@hydropip.com",vy=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;let Hh=window.HYDROPIP_ANALYTICS_CONSENT===!0;window.addEventListener("hydropip:analytics-consent",n=>{Hh=n.detail?.granted===!0});function jn(n,e={}){if(!Hh)return;const t={event:`hydropip_game_${n}`,game:"growing_adventure",version:Hs,sessionId:vy,...e};window.dataLayer=window.dataLayer||[],window.dataLayer.push(t),window.dispatchEvent(new CustomEvent("hydropip:game-event",{detail:t}))}const xl={lettuce:4,basil:6,tomato:8,kale:6,strawberry:10},ha=80;function _y(){return{tutorialClaimed:[],expanded:!1,purchases:0,rescues:0}}function xy(n){const e=t=>Number.isFinite(t)?Math.max(0,Math.min(99999,Math.floor(t))):0;return{tutorialClaimed:[...new Set((Array.isArray(n?.tutorialClaimed)?n.tutorialClaimed:[]).filter(t=>["lettuce","basil"].includes(t)))],expanded:!!n?.expanded,purchases:e(n?.purchases),rescues:e(n?.rescues)}}function yl(n){return n.seedShop.expanded?48:24}function eu(n,e){if(!Object.hasOwn(xl,e)||!n.unlockedCrops.includes(e))return{available:!1,reason:"Crop locked"};const t=!n.market.built&&["lettuce","basil"].includes(e)&&!n.seedShop.tutorialClaimed.includes(e),i=t?4:Ht(n).seedBatch,r=t?0:xl[e],s=n.market.built?n.coins:Math.max(0,n.coins-40),o=n.seeds[e]+i>yl(n)?"Vault full":s<r?n.market.built?"Not enough coins":"Keep the market reserve":"";return{available:!o,reason:o,amount:i,price:r,tutorial:t}}function yy(n,e){const t=eu(n,e);return t.available?(n.coins-=t.price,n.seeds[e]+=t.amount,n.stats.seedsCollected+=t.amount,t.tutorial?n.seedShop.tutorialClaimed.push(e):n.seedShop.purchases++,!0):!1}function Vh(n){if((n.market.built?n.coins:Math.max(0,n.coins-40))>=xl.lettuce||Object.values(n.seeds).some(r=>r>0)||n.carry?.kind==="starter")return!1;const t=n.chapter>=2?2:1,i=n.carry?.kind==="produce"?n.carry.items:[];return!(Object.entries(n.rack).some(([r,s])=>s+i.filter(o=>o===r).length>=t)||n.towers.some(r=>r.queue.length)||n.beds.some(r=>r.plants.length)||n.farm.eggs||n.farm.eggsReady||n.farm.coopReadyAt)}function by(n){return Vh(n)?(n.seeds.lettuce+=2,n.stats.seedsCollected+=2,n.seedShop.rescues++,!0):!1}function My(n){return!n.market.built||Tn(n,"vault")||n.seedShop.expanded||n.coins<ha?!1:(n.coins-=ha,n.seedShop.expanded=!0,!0)}const vo="hydropipCampaignSave",wy="hydropipTowerRunCampaign",tu=6,Jn=["lettuce","basil","tomato","kale","strawberry"],Le={lettuce:{code:"L",label:"Lettuce",color:"#79bd53",accent:"#d6f47a",towerSeconds:9,bedSeconds:6,coinValue:9,xp:3,family:"greens"},basil:{code:"B",label:"Basil",color:"#319856",accent:"#8de28f",towerSeconds:11,bedSeconds:7,coinValue:11,xp:4,family:"greens"},tomato:{code:"T",label:"Tomato",color:"#df5e48",accent:"#ffb06b",towerSeconds:15,bedSeconds:10,coinValue:15,xp:5,family:"fruit"},kale:{code:"K",label:"Kale",color:"#47765c",accent:"#a8d276",towerSeconds:13,bedSeconds:9,coinValue:14,xp:5,family:"greens"},strawberry:{code:"S",label:"Strawberry",color:"#d94f68",accent:"#ffd06c",towerSeconds:17,bedSeconds:11,coinValue:19,xp:7,family:"fruit"}},Zr=[0,35,85,145,220,310,420,650,950,1350,1850,2450,3150,3950,4850],At={market:40,tower:[0,70,110,160],bedUpgrade:[45,65,90,120],queueUpgrade:55,cosmetics:{"sunny-planters":30,"blue-path":45,"festival-bunting":60}},to={"sunny-planters":{label:"Sunny planters",color:"#f4c451"},"blue-path":{label:"Blue garden pots",color:"#66c7d0"},"festival-bunting":{label:"Market bunting",color:"#e86c54"}},ds=[{id:"restore",number:1,name:"Restore the Homestead",shortName:"Homestead",description:"Repair the first tower and reopen Pip's Veg Stand.",completionTask:"first-market-day"},{id:"balance",number:2,name:"Expand the Farm",shortName:"Farm Expansion",description:"Check the shared reservoir and supply a neighborhood rush.",completionTask:"neighborhood-rush"},{id:"pro-yard",number:3,name:"Build the Pro Yard",shortName:"Pro Yard",description:"Complete the five-crop launch showcase with Pro Pip.",completionTask:"launch-showcase"}],An=[{id:"repair-first-tower",chapter:0,title:"Bring the tower online",detail:"Repair the first HydroPip tower.",focus:"tower-0",reward:{coins:15,xp:15,unlockCrop:"basil"},story:"Pip: One good tower is enough to bring this garden back."},{id:"first-tower-plan",chapter:0,title:"Plan the first greens",detail:"Collect seeds and plant 2 lettuce layers.",focus:"vault",reward:{coins:10,xp:20},story:"Mara: Lettuce first. The neighborhood has missed fresh greens."},{id:"first-grow-out",chapter:0,title:"Finish crops in soil",detail:"Transplant and harvest 4 garden crops before opening the produce table.",focus:"bed-0",reward:{coins:20,xp:25},story:"Pip: Tower roots are ready. The bed gives them their final finish."},{id:"reopen-market",chapter:0,title:"Open Pip's produce table",detail:"Build a small produce table for 40 coins. More towers unlock a bigger stand.",focus:"market",reward:{coins:20,xp:25},story:"Theo: A few crates today. An awning when the farm grows."},{id:"first-market-day",chapter:0,title:"Serve the first greens",detail:"Sell 2 lettuce and 2 basil across 4 market orders.",goals:{sold:{lettuce:2,basil:2},orders:4},focus:"market",reward:{coins:40,xp:35,chapterComplete:!0},story:"June: The stand is open again. Let's add more towers and grow more crops."},{id:"build-second-tower",chapter:1,title:"Build the second tower",detail:"Build Tower 2 for 70 coins.",focus:"tower-1",reward:{coins:25,xp:35,unlockCrop:"tomato"},story:"Pip: Two towers, one tank. Both receive the same nutrient batch."},{id:"specialize-flow",chapter:1,title:"Check the shared system",detail:"Confirm tank circulation, then check delivery to every tower.",focus:"reservoir",reward:{coins:25,xp:35,unlockCrop:"kale"},story:"Mara: One pump mixes the tank. A second pump feeds every tower from that same batch."},{id:"split-crop-plan",chapter:1,title:"Run a mixed crop plan",detail:"Plant tomato and kale in separate tower layers.",focus:"vault",reward:{coins:40,xp:40},story:"Theo: Different crops can share the towers. Their nutrient supply is still one batch."},{id:"build-third-tower",chapter:1,title:"Build the third tower",detail:"Build Tower 3 for 110 coins.",focus:"tower-2",reward:{coins:55,xp:45},story:"Pip: Three towers. Now the farm can keep several orders moving."},{id:"neighborhood-rush",chapter:1,title:"Serve the neighborhood rush",detail:"Sell 3 tomato and 3 kale, reach 10 total orders, and upgrade tower drippers or a garden bed.",goals:{sold:{tomato:3,kale:3},orders:10,capacityUpgrade:!0},focus:"market",reward:{coins:90,xp:55,chapterComplete:!0},story:"June: Every order made the Pro Yard possible."},{id:"build-pro-yard",chapter:2,title:"Build the fourth tower",detail:"Build Tower 4 for 160 coins.",focus:"tower-3",reward:{coins:45,xp:55,unlockCrop:"strawberry",unlockPro:!0},story:"Pip: Pro Yard online. Time for the black shirt and tool belt."},{id:"launch-showcase",chapter:2,title:"Host the launch showcase",detail:"Upgrade the market, sell 5 of every crop plus 3 extra strawberries, and reach 20 total orders.",goals:{sold:{lettuce:5,basil:5,tomato:5,kale:5,strawberry:8},orders:20,marketLevel:2},focus:"market",reward:{coins:140,xp:75,chapterComplete:!0,campaignComplete:!0},story:"Mara: The homestead is growing, the stand is busy, and Pip is a pro."}];function mr(){return Object.fromEntries(Jn.map(n=>[n,0]))}function Ia(n){const e=Math.max(0,Number(n)||0);let t=1;return Zr.forEach((i,r)=>{e>=i&&(t=r+1)}),Math.min(Zr.length,t)}function Gh(n){const e=Ia(n),t=Zr[e-1],i=Zr[e]??t;return{level:e,current:Math.max(0,n-t),needed:e>=Zr.length?0:i-t,ratio:e>=Zr.length?1:(n-t)/(i-t)}}function Wh(n){return{id:`tower-${n}`,built:n===0,repaired:!1,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!1,queue:[]}}function $h(n){return{id:`bed-${n}`,built:n===0,capacity:2,soilCharges:0,plants:[]}}function Ua(n=Date.now()){return{version:tu,createdAt:n,savedAt:n,chapter:0,taskIndex:0,completedTasks:[],coins:45,xp:0,level:1,challengeUnlocked:!1,campaignComplete:!1,proPip:!1,unlockedCrops:["lettuce"],towers:[0,1,2,3].map(Wh),beds:[0,1,2,3].map($h),market:{built:!1,level:0,stage:0,nextVisitIn:8,visitRemaining:0,cropBag:[]},farm:ry(),homestead:Ih(),seeds:mr(),seedShop:_y(),rack:mr(),carry:null,orders:[],selectedOrderId:null,orderSequence:0,lastCustomer:"",stats:{seedsCollected:0,planted:0,transplanted:0,harvested:0,sold:0,orders:0,rejectedOrders:0,serviceActions:0,byCropQueued:mr(),byCropHarvested:mr(),byCropSold:mr(),byCropFed:mr()},hydro:{water:100,nutrients:100,ph:6.2,strategy:"balanced",batchMixed:!0,mixChecked:!1,flowChecked:!1,flowCalibrated:!1,systemLessonDone:!1,batchNumber:1,feedPhase:0,lineClogged:!1,lineRunSeconds:0,lineClogAfter:300,servicedAt:n},cosmetics:{owned:[],active:[]},tutorial:{welcomeSeen:!1,taskDrawerSeen:!1,marketSeen:!1},settings:{soundEnabled:!0,highContrast:!1,reducedMotion:!1,musicVolume:.22,effectsVolume:.68}}}function Xe(n,e,t=-1/0,i=1/0){const r=Number(n);return Number.isFinite(r)?Math.min(i,Math.max(t,r)):e}function Yr(n){const e=mr();return Jn.forEach(t=>{e[t]=Math.floor(Xe(n?.[t],0,0,999))}),e}function kd(n){return!n||!Le[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,layer:Number.isInteger(n.layer)&&n.layer>=0&&n.layer<4?n.layer:null,queuedAt:Xe(n.queuedAt,Date.now(),0),startedAt:n.startedAt===null?null:Xe(n.startedAt,Date.now(),0),readyAt:n.readyAt===null?null:Xe(n.readyAt,Date.now(),0),quality:Xe(n.quality,1,.5,1.25)}}function Sy(n){return!n||!Le[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,plantedAt:Xe(n.plantedAt,Date.now(),0),readyAt:Xe(n.readyAt,Date.now(),0),quality:Xe(n.quality,1,.5,1.25)}}function Ey(n){return!n||!Le[n.crop]?null:{id:String(n.id||crypto.randomUUID()),customer:String(n.customer||"Mara").slice(0,24),slot:Number.isInteger(n.slot)&&n.slot>=0&&n.slot<3?n.slot:null,crop:n.crop,amount:Math.floor(Xe(n.amount,1,1,3)),reward:Math.floor(Xe(n.reward,10,1,200)),xp:Math.floor(Xe(n.xp,5,1,50)),createdAt:Xe(n.createdAt,Date.now(),0),expiresAt:Xe(n.expiresAt,Date.now()+12e4,0),status:["waiting","cooldown"].includes(n.status)?n.status:"waiting"}}function Ty(n,e,t){n.towers.forEach(i=>{i.queue.forEach(r=>{if(!r||r.startedAt===null||r.readyAt===null||r.readyAt<=e)return;const s=t?hs(r.crop,"tower",n,i):Le[r.crop].towerSeconds*4,o=e+s*1e3;r.readyAt=Math.min(r.readyAt,o)})}),n.beds.forEach(i=>{i.plants.forEach(r=>{if(r.readyAt<=e)return;const s=e+hs(r.crop,"bed",n)*1e3;r.readyAt=Math.min(r.readyAt,s)})})}function fa(n,e=Date.now()){const t=Ua(e);if(!n||typeof n!="object")return t;const i=n.hydro?.systemLessonDone===void 0&&(Xe(n.taskIndex,0)>6||Array.isArray(n.towers)&&n.towers.some(a=>["greens","fruit"].includes(a?.specialization))),r={...t,...n,version:tu,createdAt:Xe(n.createdAt,e,0),savedAt:Xe(n.savedAt,e,0),chapter:Math.floor(Xe(n.chapter,0,0,ds.length-1)),taskIndex:Math.floor(Xe(n.taskIndex,0,0,An.length)),completedTasks:Array.isArray(n.completedTasks)?[...new Set(n.completedTasks.filter(a=>An.some(c=>c.id===a)))]:[],coins:Math.floor(Xe(n.coins,t.coins,0,99999)),xp:Math.floor(Xe(n.xp,0,0,99999)),challengeUnlocked:!!n.challengeUnlocked,campaignComplete:!!n.campaignComplete,proPip:!!n.proPip,unlockedCrops:Array.isArray(n.unlockedCrops)?Jn.filter(a=>n.unlockedCrops.includes(a)):["lettuce"],seeds:Yr(n.seeds),seedShop:xy(n.seedShop),rack:Yr(n.rack),farm:sy(n.farm),homestead:qx(n.homestead),carry:null,orders:Array.isArray(n.orders)?n.orders.map(Ey).filter(Boolean).slice(0,3):[],selectedOrderId:typeof n.selectedOrderId=="string"?n.selectedOrderId.slice(0,80):null,orderSequence:Math.floor(Xe(n.orderSequence,0,0,999999)),lastCustomer:String(n.lastCustomer||"").slice(0,24),market:{built:!!n.market?.built,level:Math.floor(Xe(n.market?.level,0,0,2)),stage:n.market?.built?Math.floor(Xe(n.market?.stage,n.market?.level>=2?4:3,1,4)):0,nextVisitIn:Xe(n.market?.nextVisitIn,8,0,35),visitRemaining:Math.floor(Xe(n.market?.visitRemaining,0,0,3)),cropBag:[...new Set((Array.isArray(n.market?.cropBag)?n.market.cropBag:[]).filter(a=>Jn.includes(a)))],openingGrant:Math.floor(Xe(n.market?.openingGrant,0,0,At.market))},hydro:{water:Xe(n.hydro?.water,100,0,100),nutrients:Xe(n.hydro?.nutrients,100,0,100),ph:Xe(n.hydro?.ph,6.2,4.5,8),strategy:"balanced",batchMixed:n.hydro?.batchMixed!==!1,mixChecked:n.hydro?.batchMixed===!1?!1:!!n.hydro?.mixChecked,flowChecked:!!n.hydro?.flowChecked,flowCalibrated:!!n.hydro?.flowCalibrated||n.hydro?.strategy==="water-save"||i,systemLessonDone:!!n.hydro?.systemLessonDone||i,batchNumber:Math.floor(Xe(n.hydro?.batchNumber,1,1,999999)),feedPhase:Xe(n.hydro?.feedPhase,0,0,24)%24,lineClogged:!!n.hydro?.lineClogged&&Xe(n.chapter,0)>=1,lineRunSeconds:Xe(n.hydro?.lineRunSeconds,0,0,360),lineClogAfter:Xe(n.hydro?.lineClogAfter,300,240,360),servicedAt:Xe(n.hydro?.servicedAt,e,0)},cosmetics:{owned:Array.isArray(n.cosmetics?.owned)?n.cosmetics.owned.filter(a=>to[a]):[],active:Array.isArray(n.cosmetics?.active)?n.cosmetics.active.filter(a=>to[a]):[]},tutorial:{...t.tutorial,...n.tutorial||{}},settings:{soundEnabled:n.settings?.soundEnabled!==!1,highContrast:!!n.settings?.highContrast,reducedMotion:!!n.settings?.reducedMotion,musicVolume:Xe(n.settings?.musicVolume,t.settings.musicVolume,0,1),effectsVolume:Xe(n.settings?.effectsVolume,t.settings.effectsVolume,0,1)},stats:{...t.stats,...n.stats||{},seedsCollected:Math.floor(Xe(n.stats?.seedsCollected,0,0)),planted:Math.floor(Xe(n.stats?.planted,0,0)),transplanted:Math.floor(Xe(n.stats?.transplanted,0,0)),harvested:Math.floor(Xe(n.stats?.harvested,0,0)),sold:Math.floor(Xe(n.stats?.sold,0,0)),orders:Math.floor(Xe(n.stats?.orders,0,0)),rejectedOrders:Math.floor(Xe(n.stats?.rejectedOrders,0,0)),serviceActions:Math.floor(Xe(n.stats?.serviceActions,0,0)),byCropQueued:Yr(n.stats?.byCropQueued),byCropHarvested:Yr(n.stats?.byCropHarvested),byCropSold:Yr(n.stats?.byCropSold),byCropFed:Yr(n.stats?.byCropFed)}};if(r.level=Ia(r.xp),r.unlockedCrops.includes("lettuce")||r.unlockedCrops.unshift("lettuce"),r.towers=[0,1,2,3].map(a=>{const c=n.towers?.[a]||{};return{...Wh(a),...c,id:`tower-${a}`,built:a===0||!!c.built,repaired:!!c.repaired,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!!c.irrigationUpgraded||Xe(n.version,0)<6&&c.queueCapacity===3,queue:Array.isArray(c.queue)?c.queue.map(kd).filter(Boolean).slice(0,4):[]}}),r.beds=[0,1,2,3].map(a=>{const c=n.beds?.[a]||{};return{...$h(a),...c,id:`bed-${a}`,built:a===0||!!c.built,capacity:Math.floor(Xe(c.capacity,2,2,4)),soilCharges:Math.floor(Xe(c.soilCharges,0,0,4)),plants:Array.isArray(c.plants)?c.plants.map(Sy).filter(Boolean).slice(0,4):[]}}),n.carry?.kind==="starter"&&Le[n.carry.crop])r.carry={kind:"starter",crop:n.carry.crop,quality:Xe(n.carry.quality,1,.5,1.25),sourceTower:Math.floor(Xe(n.carry.sourceTower,0,0,3)),sourceLayer:Number.isInteger(n.carry.sourceLayer)&&n.carry.sourceLayer>=0&&n.carry.sourceLayer<4?n.carry.sourceLayer:null,job:kd(n.carry.job)};else if(n.carry?.kind==="produce"&&Array.isArray(n.carry.items)){const a=n.carry.items.filter(c=>Le[c]).slice(0,Ht(r).basket);a.length&&(r.carry={kind:"produce",items:a})}Fh(r);const s=new Set;r.orders.forEach(a=>{(a.slot===null||s.has(a.slot))&&(a.slot=[0,1,2].find(c=>!s.has(c))),s.add(a.slot)});const o=r.cosmetics.owned.length||r.farm.owned.length||r.towers.some(a=>a.irrigationUpgraded)||r.beds.some(a=>a.capacity>2);if(!r.market.built&&r.taskIndex>=3&&r.coins<At.market&&!r.market.openingGrant&&o&&(r.market.openingGrant=At.market-r.coins,r.coins=At.market),r.hydro.water<=0||!r.hydro.batchMixed){const a=Math.max(0,e-r.savedAt);r.towers.forEach(c=>c.queue.forEach(l=>{l.readyAt>r.savedAt&&(l.readyAt+=a,l.startedAt!==null&&(l.startedAt+=a))})),r.savedAt=e}return Ty(r,e,Xe(n.version,0)<4),r}function Ay(n,e){if(!e||typeof e!="object")return n;const t=Array.isArray(e.completed)?e.completed:[],i=Math.floor(Xe(e.highestContract,0,0,2));return(t.includes("homestead")||i>=1)&&(n.chapter=1,n.taskIndex=5,n.completedTasks=An.slice(0,5).map(r=>r.id),n.coins=150,n.xp=130,n.challengeUnlocked=!0,n.unlockedCrops=["lettuce","basil","tomato"],n.towers[0].repaired=!0,n.market={built:!0,level:1}),(t.includes("split-flow")||i>=2)&&(n.chapter=2,n.taskIndex=10,n.completedTasks=An.slice(0,10).map(r=>r.id),n.coins=260,n.xp=330,n.unlockedCrops=["lettuce","basil","tomato","kale","strawberry"],n.towers[1].built=!0,n.towers[1].repaired=!0,n.hydro.systemLessonDone=!0,n.hydro.flowCalibrated=!0,n.towers[2].built=!0,n.towers[2].repaired=!0,n.beds[1].built=!0,n.beds[2].built=!0),t.includes("pro-yard")&&(n.taskIndex=An.length,n.completedTasks=An.map(r=>r.id),n.coins=420,n.xp=500,n.campaignComplete=!0,n.challengeUnlocked=!0,n.proPip=!0,n.towers.forEach(r=>{r.built=!0,r.repaired=!0}),n.beds.forEach(r=>{r.built=!0}),n.market={built:!0,level:2}),n.level=Ia(n.xp),n}function nu(n=window.localStorage,e=Date.now()){let t=null;try{t=JSON.parse(n.getItem(vo)||"null")}catch{t=null}if(t)return fa(t,e);let i=null;try{i=JSON.parse(n.getItem(wy)||"null")}catch{i=null}return fa(Ay(Ua(e),i),e)}function Cy(n,e=window.localStorage,t=Date.now(),i=()=>{}){const r=fa({...n,savedAt:t},t);try{e.setItem(vo,JSON.stringify(r)),i(!0)}catch{i(!1)}return r}function Ry(n=window.localStorage,e=Date.now()){const t=Ua(e);try{n.setItem(vo,JSON.stringify(t))}catch{}return t}function Zn(n){return An[n.taskIndex]||null}function hs(n,e,t,i=null){const r=Le[n];if(e==="bed")return r.bedSeconds*(1-La(t,n)*.03);let s=r.towerSeconds;return i?.irrigationUpgraded&&(s*=.88),Math.max(3,s)}function Rr(n,e=Date.now()){return Fh(n),n.towers.forEach(t=>{t.queue.length&&t.queue.forEach(i=>{(i.startedAt===null||i.readyAt===null)&&(i.startedAt=e,i.readyAt=e+hs(i.crop,"tower",n,t)*1e3)})}),oy(n,e),n.level=Ia(n.xp),n}function Py(n){const e=Object.fromEntries(Jn.map(t=>[t,{queued:0,starter:0,garden:0,basket:0,rack:n.rack[t]||0,sold:n.stats.byCropSold[t]||0,fed:n.stats.byCropFed?.[t]||0,accounted:0}]));return n.towers.forEach(t=>t.queue.forEach(i=>{e[i.crop].queued+=1})),n.carry?.kind==="starter"&&(e[n.carry.crop].starter+=1),n.beds.forEach(t=>t.plants.forEach(i=>{e[i.crop].garden+=1})),n.carry?.kind==="produce"&&n.carry.items.forEach(t=>{e[t].basket+=1}),Object.values(e).forEach(t=>{t.accounted=t.queued+t.starter+t.garden+t.basket+t.rack+t.sold+t.fed}),e}const qh=1024*1024,Xh="hydropipFarmBeforeRestore";function bl(n,e=Date.now()){return JSON.stringify({format:"hydropip-farm",backupVersion:1,gameVersion:Hs,farm:{...n,savedAt:e}},null,2)}function Ml(n,e=Date.now()){if(new TextEncoder().encode(n).length>qh)throw new Error("Backup exceeds the 1 MB limit.");let t;try{t=JSON.parse(n,(r,s)=>{if(["__proto__","prototype","constructor"].includes(r))throw new Error;if(typeof s=="string"&&/[<>"'&`]/.test(s))throw new Error;if(typeof s=="number"&&!Number.isFinite(s))throw new Error;return s})}catch{throw new Error("This is not a valid HydroPip farm backup.")}if(t?.format!==void 0&&(t.format!=="hydropip-farm"||t.backupVersion!==1))throw new Error("Unsupported backup format.");const i=t?.format==="hydropip-farm"?t.farm:t;if(!i||!Number.isInteger(i.version)||i.version<1||i.version>tu)throw new Error("Unsupported farm version. Use a backup from this game version or an older one.");if(!Number.isFinite(i.coins)||i.coins<0||!Number.isFinite(i.xp)||i.xp<0||!Number.isInteger(i.taskIndex)||i.taskIndex<0||i.taskIndex>12||!Array.isArray(i.towers)||i.towers.length!==4||!Array.isArray(i.beds)||i.beds.length!==4||!i.seeds||typeof i.seeds!="object"||!i.stats||typeof i.stats!="object")throw new Error("The file is missing required farm data. Your current farm has not changed.");return fa(i,e)}function Ly(n,e,t,i=Date.now()){const r=Ml(bl(e,i),i);return n.setItem(Xh,bl(t,i)),n.setItem(vo,JSON.stringify(r)),r}function Dy(n,e){const t=u=>document.getElementById(u);let i=null,r=0;function s(u,d,p="application/json"){const f=URL.createObjectURL(new Blob([u],{type:p})),g=document.createElement("a");g.href=f,g.download=d,g.click(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}function o(u){t("importStatus").textContent=u}function a(){r++,i=null,t("restoreConfirmation").hidden=!0,t("importFile").value=""}for(const u of document.querySelectorAll("[data-real-build]"))u.href=gy,u.addEventListener("click",()=>jn("build_guide_open",{source:u.dataset.realBuild}));t("gameVersion").textContent=Hs,t("exportSave").addEventListener("click",()=>s(bl(n()),"hydropip-farm-backup.json")),t("importSave").addEventListener("click",()=>{a(),o(""),t("importFile").click()}),t("importFile").addEventListener("change",async u=>{const d=u.target.files[0];if(!d)return;const p=r;try{if(d.size>qh)throw new Error("Backup exceeds the 1 MB limit.");const f=await d.text();if(p!==r)return;const g=Ml(f);i=f,t("restoreSummary").textContent=`Replace this farm with Chapter ${g.chapter+1}, ${g.coins} coins, and ${g.homestead.claimed.length} completed projects? A recovery copy of this farm will be retained.`,t("restoreConfirmation").hidden=!1,t("cancelRestore").focus()}catch(f){a(),o(f.message)}}),t("cancelRestore").addEventListener("click",()=>{a(),o("Restore cancelled. Your farm is unchanged.")}),t("confirmRestore").addEventListener("click",()=>{if(i){try{const u=Ly(localStorage,Ml(i),n());e(u)}catch{o("Restore could not be completed. Your pre-restore recovery copy is available below if it was saved. Free browser storage and try again.");return}a(),jn("farm_restored"),location.reload()}}),t("exportRecovery").addEventListener("click",()=>{try{const u=localStorage.getItem(Xh);if(!u)return o("No previous restore recovery copy is available.");s(u,"hydropip-before-restore.json")}catch{o("Browser storage is unavailable.")}});function c(){const u=n();return`HydroPip game report
Version: ${Hs}
Chapter: ${u.chapter+1}; task: ${u.taskIndex}
Viewport: ${innerWidth} x ${innerHeight}
Browser: ${navigator.userAgent}

What happened:
${t("reportNotes").value.trim()||"(Please describe what happened.)"}

No saved-farm contents are attached.`}function l(){const u=c();t("reportPreview").textContent=u,t("emailReport").href=`mailto:${Ud}?subject=${encodeURIComponent(`HydroPip game report ${Hs}`)}&body=${encodeURIComponent(u)}`}return t("reportProblem").addEventListener("click",()=>{t("feedbackForm").hidden=!t("feedbackForm").hidden,l()}),t("reportNotes").addEventListener("input",l),t("downloadReport").addEventListener("click",()=>s(c(),"hydropip-game-report.txt","text/plain")),t("emailReport").hidden=!Ud,{cancelImport:a}}const Nd=new URL(""+new URL("pip-pro-celebration-transparent-IQLOdfWW.webp",import.meta.url).href,import.meta.url).href,Od=new URL(""+new URL("rhythm-dance-5VSp4liT.webp",import.meta.url).href,import.meta.url).href;function Iy({balance:n,reducedMotion:e,mobile:t=()=>!1}){const i=document.createElement("div");i.className="reward-effects",i.setAttribute("aria-hidden","true");const r=document.createElement("section");r.className="reward-notice",r.hidden=!0,r.setAttribute("aria-label","Goal celebration");const s=document.createElement("button");s.type="button",s.className="reward-dismiss",s.textContent="×",s.setAttribute("aria-label","Dismiss celebration");const o=document.createElement("img");o.alt="";const a=document.createElement("div");a.className="reward-copy";const c=document.createElement("span"),l=document.createElement("h3"),u=document.createElement("p");a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.append(c,l,u),r.append(s,o,a),document.body.append(i,r);let d;const p=new Set,f=()=>e()||matchMedia("(prefers-reduced-motion: reduce)").matches;function g(P,I,y,w=!1){const C=P.animate(I,y);p.add(C);const R=()=>{p.delete(C),w&&P.remove()};return C.onfinish=R,C.oncancel=R,C}function _(){clearTimeout(d),r.hidden=!0,o.getAnimations().forEach(P=>P.cancel())}s.addEventListener("click",_),document.addEventListener("keydown",P=>{P.key==="Escape"&&_()});function v(){for(const P of p)P.cancel();p.clear(),i.replaceChildren()}document.addEventListener("visibilitychange",()=>{document.hidden&&(v(),_())}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{f()&&v()});function S(P,I){if(!Number.isFinite(P)||P<=0||document.hidden)return;const y=n.getBoundingClientRect(),w={x:y.left+y.width/2,y:y.top+y.height/2},C=Math.max(70,Math.min(innerWidth-70,I?.x??innerWidth/2)),R=Math.max(110,Math.min(innerHeight-100,I?.y??innerHeight/2)),k=document.createElement("strong");if(k.className="reward-coin-label",k.textContent=`+${P.toLocaleString()} coins`,k.style.left=`${C}px`,k.style.top=`${R}px`,i.querySelectorAll(".reward-coin-label").length>=3&&i.querySelector(".reward-coin-label").remove(),i.append(k),f()){setTimeout(()=>k.remove(),1800);return}g(k,[{opacity:1,translate:"0 0"},{opacity:1,offset:.7},{opacity:0,translate:"0 -36px"}],{duration:1700},!0);const O=Math.min(8,Math.max(3,Math.ceil(P/5)),24-i.querySelectorAll(".reward-coin").length);for(let B=0;B<O;B++){const F=document.createElement("i");F.className="reward-coin",F.textContent="P",F.style.left=`${C}px`,F.style.top=`${R}px`,i.append(F);const Y=w.x-C,G=w.y-R;g(F,[{transform:"translate(-50%,-50%) scale(.5)",opacity:0},{transform:`translate(${(B-O/2)*13}px,-40px) scale(1)`,opacity:1,offset:.24},{transform:`translate(${Y}px,${G}px) scale(.65)`,opacity:1,offset:.9},{transform:`translate(${Y}px,${G}px) scale(.2)`,opacity:0}],{duration:1050,delay:B*60,fill:"backwards",easing:"cubic-bezier(.25,.6,.4,1)"},!0)}n.getAnimations().forEach(B=>B.cancel()),g(n,[{color:"#ffe678",scale:"1"},{color:"#ffe678",scale:"1.2",offset:.55},{scale:"1"}],{duration:550,delay:850})}function b(){if(f()||document.hidden)return;i.querySelectorAll(".reward-confetti").forEach(I=>{I.getAnimations().forEach(y=>y.cancel()),I.remove()});const P=t()||innerWidth<620?22:42;for(let I=0;I<P;I++){const y=document.createElement("i");y.className="reward-confetti",y.style.left=`${8+Math.random()*84}%`,y.style.background=["#ffd454","#f4778b","#66d9db","#bde875","#fff6d9"][I%5],i.append(y),g(y,[{transform:"translateY(-30px) rotate(0deg)",opacity:0},{opacity:1,offset:.12},{opacity:1,offset:.7},{transform:`translate(${(Math.random()-.5)*180}px,${innerHeight*.8}px) rotate(${I%2?540:-540}deg)`,opacity:0}],{duration:2200+Math.random()*600,delay:Math.random()*350,fill:"backwards"},!0)}}function x(P){f()||g(P,[{transform:"rotate(-8deg) translateY(0)"},{transform:"rotate(14deg) translateY(-12px)",offset:.25},{transform:"rotate(-12deg) translateY(-4px)",offset:.5},{transform:"rotate(8deg) translateY(-10px)",offset:.75},{transform:"rotate(-8deg) translateY(0)"}],{duration:1250,iterations:3,easing:"ease-in-out"})}function L({title:P,detail:I,major:y=!1,rhythm:w=!1}){t()&&!y||document.hidden||(_(),r.classList.toggle("is-major",y),c.textContent=y?"Homestead milestone!":"Goal complete!",l.textContent=P,u.textContent=I,o.src=w?Od:Nd,r.hidden=!1,y&&b(),w?x(o):f()||g(o,[{transform:"scale(.8)"},{transform:"scale(1.06)",offset:.7},{transform:"scale(1)"}],{duration:450}),d=setTimeout(_,t()?3500:y?6500:3600))}function A(P,I){_();const y=P.querySelector(".chapter-reward-art img");y.getAnimations().forEach(w=>w.cancel()),y.src=I?Od:Nd,y.alt=I?"Rhythm Pip in his breakdance freeze with a boombox":"Pro Pip cheering with confetti",I&&x(y),b()}return{coins:S,celebrate:L,chapter:A,dismiss:_,clearMotion:v}}function Uy({urls:n,settings:e,canPlay:t,onSystemMute:i}){const r=new Map,s=new Set,o=new WeakMap;let a=document.hidden;const c=()=>!a&&!document.hidden&&t()&&e().soundEnabled!==!1;function l(m){m.muted=!0,m.pause(),o.delete(m)}function u(){r.forEach(l),s.forEach(l),s.clear(),navigator.mediaSession&&(navigator.mediaSession.playbackState="paused")}function d(m,S,b=!1){if(!c()||S<=0)return l(m);if(m.volume=S,m.muted=!1,!m.paused||o.has(m))return;const x={};o.set(m,x),Promise.resolve(m.play()).then(()=>{if(!c()||m.muted||(b?e().musicVolume:e().effectsVolume)<=0)return l(m);o.get(m)===x&&(o.delete(m),b&&navigator.mediaSession&&(navigator.mediaSession.playbackState="playing"))}).catch(()=>{o.get(m)===x&&(l(m),s.delete(m))})}function p(){if(!(!c()||e().musicVolume<=0))for(const[m,S]of[["music",1],["ambience",.56]]){if(!r.has(m)){const b=new Audio(n[m]);b.loop=!0,r.set(m,b)}d(r.get(m),e().musicVolume*S,!0)}}function f(m){if(!c()||e().effectsVolume<=0||!n[m])return;if(s.size>=12){const b=s.values().next().value;l(b),s.delete(b)}const S=new Audio(n[m]);s.add(S),S.addEventListener("ended",()=>s.delete(S),{once:!0}),S.addEventListener("error",()=>{l(S),s.delete(S)},{once:!0}),d(S,e().effectsVolume)}function g(){if(!c())return u();r.forEach((m,S)=>{e().musicVolume<=0?l(m):m.volume=e().musicVolume*(S==="music"?1:.56)}),s.forEach(m=>{e().effectsVolume<=0?(l(m),s.delete(m)):m.volume=e().effectsVolume})}function _(){a=!0,u()}function v(){a=document.hidden}window.addEventListener("blur",_),window.addEventListener("pagehide",_),document.addEventListener("freeze",_),window.addEventListener("focus",v),window.addEventListener("pageshow",v),document.addEventListener("visibilitychange",()=>document.hidden?_():v());for(const m of["pause","stop"])try{navigator.mediaSession?.setActionHandler(m,()=>{u(),i()})}catch{}return{start:p,effect:f,update:g,stop:u}}const Yh=matchMedia("(max-width: 620px), (pointer: coarse) and (max-width: 1200px), (pointer: coarse) and (max-height: 600px)"),mt=()=>Yh.matches;document.body.classList.toggle("mobile-ui",mt());function ky({canMove:n,onStart:e,onMove:t,onLayout:i,closePanels:r}){const s=document.getElementById("thumbstick"),o=s.querySelector("i");let a=null;function c(){const d=a;a=null,d!==null&&s.hasPointerCapture(d)&&s.releasePointerCapture(d),o.style.transform="translate(0px, 0px)",s.classList.remove("is-active"),t(0,0)}function l(d){if(d.pointerId!==a)return;if(!n())return c();const p=s.getBoundingClientRect(),f=p.width*.3,g=d.clientX-p.left-p.width/2,_=d.clientY-p.top-p.height/2,v=Math.hypot(g,_),m=v>f?f/v:1;o.style.transform=`translate(${g*m}px, ${_*m}px)`;const S=Math.min(1,Math.max(0,(v/f-.12)/.88));t(v?g/v*S:0,v?_/v*S:0)}s.addEventListener("pointerdown",d=>{a!==null||!n()||!mt()||(d.preventDefault(),e(),a=d.pointerId,s.setPointerCapture(a),s.classList.add("is-active"),l(d))}),s.addEventListener("pointermove",l);for(const d of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(d,p=>{p.pointerId===a&&c()});s.addEventListener("contextmenu",d=>d.preventDefault());for(const d of document.querySelectorAll(".task-drawer,.interaction-panel,.order-drawer")){let p=null;d.addEventListener("pointerdown",f=>{!mt()||!f.target.closest("header")||f.target.closest("button")||(p={id:f.pointerId,x:f.clientX,y:f.clientY},d.setPointerCapture(f.pointerId))}),d.addEventListener("pointerup",f=>{if(!p||p.id!==f.pointerId)return;const g=f.clientX-p.x,_=f.clientY-p.y;(innerWidth>620&&innerWidth>innerHeight?g>55&&g>Math.abs(_):_>45&&_>Math.abs(g))&&r(),p=null}),d.addEventListener("pointercancel",()=>{p=null})}function u(){c(),document.body.classList.toggle("mobile-ui",mt()),i()}return Yh.addEventListener("change",u),window.addEventListener("resize",u),window.visualViewport?.addEventListener("resize",u),{reset:c}}function Ny({onOpen:n,onExit:e,onLeave:t,onResize:i}){const r=he=>document.getElementById(he),s=r("displayOverlay"),o=r("fullscreenButton"),a=r("exitFullscreen"),c=r("landscapeNotice"),l=matchMedia("(orientation: landscape)"),u=matchMedia("(display-mode: standalone), (display-mode: fullscreen)"),d=()=>navigator.standalone===!0||u.matches&&!document.fullscreenElement,p=()=>document.fullscreenEnabled===!0&&typeof document.documentElement.requestFullscreen=="function";let f=null,g=null,_=null,v=!1,m=!1,S=!1,b="",x=!1,L=null,A=!1,P=!1,I="",y=null;const w=[...document.querySelectorAll("[data-install-game]")],C=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;let R=!1;try{R=sessionStorage.getItem("hydropipLandscapeHint")==="seen"}catch{}function k(){c.hidden=!0,clearTimeout(_)}function O(){const he=d(),Ge=p(),et=!he&&(x||!Ge);if(r("displayTitle").textContent=he?"App view":"Landscape play",r("displayMessage").textContent=b||(he?"The game is already open without browser bars.":Ge?l.matches?"Landscape is ready for full screen.":"Rotate your phone to landscape for the widest farm view.":"This browser cannot put the whole game into full screen. Landscape still gives you more room."),r("displayInstructions").textContent=he?"Rotate upright to pause and save. Use the app switcher to close this app, or choose Return to HydroPip from Pause.":Ge?"Tap Full screen after rotating. Rotate upright to pause and exit full screen, or use the exit button at any time.":"On iPhone: open this game in Safari, tap Share, then Add to Home Screen. Turn on Open as Web App if offered, and launch the new icon. Rotate upright to pause; use the app switcher to close it.",r("enterFullscreen").hidden=he||!Ge,r("enterFullscreen").disabled=v||mt()&&!l.matches,r("displaySaveNote").hidden=he||Ge,r("displayBackup").hidden=he||Ge,r("installSteps").hidden=!et||P,r("installGame").hidden=!et||!L||P,r("installGame").disabled=A,r("keepWindowed").textContent=y?"Back":"Keep playing here",et){r("displayTitle").textContent="Add HydroPip",r("displayMessage").textContent=I||"Keep Pip on your Home Screen. No App Store needed.",r("displayInstructions").textContent=P?"Open the new HydroPip icon on your Home Screen or in your apps.":C?"On iPhone, use Safari to Add to Home Screen.":L?"Your browser can install HydroPip. Confirm the next browser prompt.":"Use your browser menu to Install app or Add to Home Screen. If neither appears, open this game in Safari on iPhone or Chrome on Android.";const $=C?["Open this game in Safari, then tap Share.","Choose Add to Home Screen. Turn on Open as Web App if offered.","Tap Add, then open the HydroPip icon."]:L?["Tap Install game below, then confirm Install.","Open the HydroPip icon."]:["Open the browser menu.","Choose Install app or Add to Home Screen, then confirm."];r("installSteps").replaceChildren(...$.map(ve=>{const ue=document.createElement("li");return ue.textContent=ve,ue})),r("displaySaveNote").hidden=P,r("displayBackup").hidden=P,r("enterFullscreen").hidden=!0}}function B(){k(),s.hidden&&(g=document.activeElement,f=n()),s.hidden=!1,O(),r("closeDisplay").focus()}function F(he=!0){s.hidden||(s.hidden=!0,y&&(y.hidden=!1,y=null),f?.(),f=null,he&&g?.isConnected&&g.focus())}function Y(){m=!1,F(!1),k(),e()}async function G(){if(!v){if(!p()||d()||mt()&&!l.matches){b="",B();return}v=!0;try{await document.documentElement.requestFullscreen({navigationUI:"hide"}),b="",F(),k(),ae()}catch{b="Full screen was not allowed. You can keep playing here, or try again from your browser.",B()}finally{v=!1,s.hidden||O()}}}async function se(){if(Y(),document.fullscreenElement)try{await document.exitFullscreen()}catch{b="Use your browser full-screen exit control to return.",B()}}function ae(){const he=!!document.fullscreenElement,Ge=d();w.forEach(Be=>{Be.hidden=Ge||P,Be.textContent=L?"Install HydroPip":"Add to Home Screen"}),document.body.classList.toggle("is-app-window",he||Ge),o.hidden=he||Ge,a.hidden=!he&&!Ge,a.setAttribute("aria-label",he?"Exit full screen and pause":"Pause and leave game"),a.title=he?"Exit full screen and pause":"Pause and leave game",o.textContent=he||Ge?"×":"⛶";const et=he?"Exit full screen and pause":Ge?"Pause and leave game":"Full screen options";o.setAttribute("aria-label",et),o.title=et,o.setAttribute("aria-pressed",String(he));const $=document.activeElement?.matches("input,textarea,select");mt()&&!$&&(he||Ge)&&l.matches&&(m=!0);const ve=mt()&&!$&&!l.matches&&m,ue=S&&!he;S=he,ve?se():ue&&Y(),s.hidden||O(),c.hidden||(r("landscapeNoticeText").textContent=l.matches?p()?"Tap for full screen. Rotate upright to pause.":"Landscape play. View full-screen options.":"Rotate for a wider farm."),requestAnimationFrame(i)}w.forEach(he=>he.addEventListener("click",()=>{x=!0,b="",I="",y=he.closest(".modal-overlay"),B(),y&&(y.hidden=!0)})),window.addEventListener("beforeinstallprompt",he=>{he.preventDefault(),L=he,ae()}),window.addEventListener("appinstalled",()=>{P=!0,L=null,I="HydroPip is installed.",ae()}),r("installGame").addEventListener("click",async()=>{if(!L||A)return;const he=L;L=null,A=!0;try{I=(await he.prompt()||await he.userChoice)?.outcome==="accepted"?"Install accepted. Look for the HydroPip icon when your browser finishes.":"Not installed. You can keep playing here and add it later."}catch{I="Installation could not open. Use the browser menu, or keep playing here."}finally{A=!1,ae()}});function Ae(){if(!(R||!mt()||document.hidden||document.querySelector(".modal-overlay:not([hidden])"))){R=!0;try{sessionStorage.setItem("hydropipLandscapeHint","seen")}catch{}d()||(c.hidden=!1,ae(),_=setTimeout(k,7e3))}}o.addEventListener("click",()=>{x=!1,document.fullscreenElement||d()?se():G()}),a.addEventListener("click",()=>{se()}),r("landscapeOptions").addEventListener("click",()=>{x=!1,G()}),r("dismissLandscapeNotice").addEventListener("click",k),r("enterFullscreen").addEventListener("click",()=>{G()}),r("closeDisplay").addEventListener("click",()=>F()),r("keepWindowed").addEventListener("click",()=>F()),r("displayBackup").addEventListener("click",()=>{F(!1),r("settingsOverlay").hidden&&r("settingsButton").click(),r("exportSave").scrollIntoView({block:"center"}),r("exportSave").focus()}),r("leaveGame").addEventListener("click",t),r("beginCampaign").addEventListener("click",Ae),document.addEventListener("fullscreenchange",ae),l.addEventListener("change",ae),u.addEventListener("change",ae),window.addEventListener("resize",ae),document.addEventListener("visibilitychange",()=>{document.hidden&&k()}),document.addEventListener("keydown",he=>{if(!s.hidden&&(he.key==="Escape"&&(he.preventDefault(),he.stopImmediatePropagation(),F()),he.key==="Tab")){const Ge=[...s.querySelectorAll("button:not(:disabled),a[href]")].filter(ve=>ve.getClientRects().length),et=Ge[0],$=Ge.at(-1);he.shiftKey&&document.activeElement===et?(he.preventDefault(),$.focus()):!he.shiftKey&&document.activeElement===$&&(he.preventDefault(),et.focus())}},!0),ae(),requestAnimationFrame(Ae)}function Oy(n,e,t=Date.now()){if(n.chapter<1)return!1;const i=n.towers.filter(o=>o.built&&o.repaired).flatMap(o=>o.queue.filter(a=>a.readyAt>t));if(!i.length)return!1;const r=Math.max(0,Math.min(e,1)),s=n.hydro;return s.lineClogged?(i.forEach(o=>{o.readyAt+=r*500}),!1):(s.lineRunSeconds+=r,s.lineRunSeconds<s.lineClogAfter?!1:(s.lineClogged=!0,!0))}function Fy(n,e=Math.random){return n.hydro.lineClogged?(n.hydro.lineClogged=!1,n.hydro.lineRunSeconds=0,n.hydro.lineClogAfter=240+Math.floor(e()*121),!0):!1}const Mc=24,wl=6,iu=30;function Kn(n){return n.hydro.water>0&&n.hydro.batchMixed!==!1}function Fd(n){return Kn(n)&&n.hydro.flowCalibrated&&!n.hydro.lineClogged}function jh(n,e=Date.now()){return Kn(n)&&(n.hydro.feedPhase||0)<wl&&n.towers.some(t=>t.built&&t.repaired&&t.queue.some(i=>i.readyAt>e))}function By(n,e){const t=n.hydro;if(e==="water"){if(t.water>iu)return!1;t.water=100,t.batchMixed=!1,t.mixChecked=!1,t.flowChecked=!1,t.feedPhase=0,t.batchNumber=(t.batchNumber||1)+1}else if(e==="mix"){if(t.water<=0||t.mixChecked)return!1;t.batchMixed=!0,t.mixChecked=!0}else if(e==="check"){if(!Kn(n)||!t.mixChecked||t.flowChecked||t.lineClogged||!n.towers.some(i=>i.built)||n.towers.some(i=>i.built&&!i.repaired))return!1;t.flowChecked=!0,t.flowCalibrated=!0,t.systemLessonDone=!0}else return!1;return!0}function zy(n,e,t=Date.now(),i=1){const r=Math.max(0,Math.min(1,e)),s=n.towers.filter(u=>u.built&&u.repaired).flatMap(u=>u.queue.filter(d=>d.readyAt>t-r*1e3));if(!s.length||!r)return;if(!Kn(n)){s.forEach(u=>{u.readyAt+=r*1e3,u.startedAt!==null&&(u.startedAt+=r*1e3)});return}const o=n.hydro,a=o.feedPhase||0,c=u=>Math.floor(u/Mc)*wl+Math.min(u%Mc,wl),l=c(a+r)-c(a);o.feedPhase=(a+r)%Mc,o.water=Math.max(0,o.water-l*.3*s.length/4*i)}const Jh=["127.0.0.1","localhost"].includes(location.hostname)&&new URLSearchParams(location.search).has("test"),no=Jh&&!new URLSearchParams(location.search).has("realtime")?.012:1,ys=mt(),_o=/HeadlessChrome/i.test(navigator.userAgent),Hy={"seed-pickup":new URL(""+new URL("seed-pickup-CAHmd7zc.wav",import.meta.url).href,import.meta.url).href,plant:new URL(""+new URL("plant-OZHmKUrR.wav",import.meta.url).href,import.meta.url).href,pickup:new URL(""+new URL("pickup-BP6zBWsE.wav",import.meta.url).href,import.meta.url).href,transplant:new URL(""+new URL("transplant-ByuaeTUQ.wav",import.meta.url).href,import.meta.url).href,harvest:new URL(""+new URL("harvest-BPj-n7q9.wav",import.meta.url).href,import.meta.url).href,rack:new URL(""+new URL("rack-BXIXSV4Z.wav",import.meta.url).href,import.meta.url).href,return:new URL(""+new URL("return-B7_saD0o.wav",import.meta.url).href,import.meta.url).href,sale:new URL(""+new URL("sale-DHHLIj-t.wav",import.meta.url).href,import.meta.url).href,repair:new URL(""+new URL("repair-BH8WY1JO.wav",import.meta.url).href,import.meta.url).href,build:new URL(""+new URL("build-DlE-ni3d.wav",import.meta.url).href,import.meta.url).href,"level-up":new URL(""+new URL("level-up-Cr_FX5st.wav",import.meta.url).href,import.meta.url).href,"task-complete":new URL(""+new URL("task-complete-kxblrCmv.wav",import.meta.url).href,import.meta.url).href,"chapter-complete":new URL(""+new URL("chapter-complete-B0bpPvE9.wav",import.meta.url).href,import.meta.url).href,error:new URL(""+new URL("error-BplsGajU.wav",import.meta.url).href,import.meta.url).href,"order-reject":new URL(""+new URL("order-reject-w7AxRbDQ.wav",import.meta.url).href,import.meta.url).href,service:new URL(""+new URL("service-DnymfeYl.wav",import.meta.url).href,import.meta.url).href,music:new URL(""+new URL("garden-loop-_0sf0c8-.wav",import.meta.url).href,import.meta.url).href,ambience:new URL(""+new URL("farm-ambient-BpMfQsJu.wav",import.meta.url).href,import.meta.url).href},ee=n=>document.querySelector(n),tn=ee("#campaignScene");ee("#farmStage");const ka=ee("#objectiveBar"),vi=ee("#taskDrawer"),Bn=ee("#homesteadDrawer"),Qn=ee("#interactionPanel"),on=ee("#interactionContent"),an=ee("#orderDrawer"),bn=ee("#welcomeOverlay"),Vy=ee("#pauseOverlay"),cn=ee("#chapterOverlay"),Hi=ee("#settingsOverlay"),bs=ee("#resetOverlay"),Ms=ee("#actionButton"),br=ee("#marketChip"),io=ee("#campaignMessage"),Kh=ee("#carryChip"),Ce={coins:ee("#coinValue"),level:ee("#levelValue"),xp:ee("#xpValue"),xpFill:ee("#xpFill"),chapter:ee("#chapterValue"),objectiveChapter:ee("#objectiveChapter"),objectiveTitle:ee("#objectiveTitle"),objectiveProgress:ee("#objectiveProgress"),taskChapter:ee("#taskChapter"),taskTitle:ee("#taskTitle"),taskStory:ee("#taskStory"),primaryTaskTitle:ee("#primaryTaskTitle"),primaryTaskDetail:ee("#primaryTaskDetail"),primaryTaskReward:ee("#primaryTaskReward"),chapterTaskList:ee("#chapterTaskList"),interactionKicker:ee("#interactionKicker"),interactionTitle:ee("#interactionTitle"),interactionSummary:ee("#interactionSummary"),orderList:ee("#orderList"),rackSummary:ee("#rackSummary"),carryKind:ee("#carryKind"),carryContents:ee("#carryContents"),chapterResultKicker:ee("#chapterResultKicker"),chapterResultTitle:ee("#chapterResultTitle"),chapterResultSummary:ee("#chapterResultSummary"),chapterCoins:ee("#chapterCoins"),chapterXp:ee("#chapterXp"),chapterUnlock:ee("#chapterUnlock"),musicValue:ee("#musicValue"),effectsValue:ee("#effectsValue"),marketChipCustomer:ee("#marketChipCustomer"),marketChipDemand:ee("#marketChipDemand")},nt={vault:new U(-11,0,-5),reservoir:new U(-11,0,2.6),filter:new U(-9,0,4.5),market:new U(11,0,-4.4),rack:new U(8,0,-5),workshop:new U(11,0,5),composter:new U(-7,0,6.9),coop:new U(2,0,6.9),rainTank:new U(-12,0,6.5),"tower-0":new U(-7,0,2.4),"tower-1":new U(-3,0,2.4),"tower-2":new U(1,0,2.4),"tower-3":new U(5,0,2.4),"bed-0":new U(-7,0,-3.2),"bed-1":new U(-3,0,-3.2),"bed-2":new U(1,0,-3.2),"bed-3":new U(5,0,-3.2)};let h=Rr(nu());const hi=Iy({balance:Ce.coins,reducedMotion:()=>h.settings.reducedMotion,mobile:mt});let Zh=null;const pa={x:0,z:0};let ma=!1;const ga=ty(Bn,Le,Cf);let Rt=!1,kt=null,ai=null,On=null,li=null;const Vs=[],wc=new Map,Ri=ey;let Bd=performance.now(),zd=0,Qh=performance.now(),oa=0,Ns=null;const Di=Uy({urls:Hy,settings:()=>h.settings,canPlay:()=>!Rt&&bn.hidden&&Hi.hidden&&cn.hidden&&bs.hidden,onSystemMute:()=>{h.settings.soundEnabled=!1,Ss(),Je("system_mute")}});let Yn=1,Jo=new U(0,0,0),ro=[],Fn=1,xn=1,Sl=null,ef="",va=_o?"software-test":ys?"mobile":"desktop",Sc=performance.now(),Ec=0;const pn={left:!1,right:!1,up:!1,down:!1},Gs=[],yt=new zx({antialias:!ys&&!_o,powerPreference:"high-performance"});yt.setPixelRatio(Math.min(window.devicePixelRatio||1,_o?1:ys?1.25:1.55));yt.outputColorSpace=en;yt.toneMapping=$d;yt.toneMappingExposure=1.08;yt.shadowMap.enabled=!ys&&!_o;yt.shadowMap.type=Gd;tn.appendChild(yt.domElement);const _a=document.createElement("div");_a.className="world-labels";tn.appendChild(_a);const xa=document.createElement("canvas").getContext("2d"),fi=new zl;fi.background=new ut(10475727);fi.fog=new Bl(10475727,28,58);const Tt=new vn(35,1,.1,80),Tc=new wh,Ac=new pe,Qt=new $e,_t=new $e,Ar=new $e;fi.add(Qt,_t,Ar);const Qr=$x();Qt.add(Qr.root);function Gt(n,e={}){return new Er({color:n,...e})}const ie={grass:Gt(16777215),grassDark:Gt(5405027),path:Gt(13223602),soil:Gt(8014385),wood:Gt(10123101),woodDark:Gt(5720899),white:Gt(15922411),shell:Gt(14411490),dark:Gt(1055253),lime:Gt(13168479),amber:Gt(16762954),water:new Oi({color:6542566,roughness:.18,metalness:.02,transparent:!0,opacity:.78}),coral:Gt(15823190),metal:Gt(11453113),ink:new $t({color:729368,side:mn})},Gy=new Xl(15398143,4742736,.95);fi.add(Gy);const ei=new Aa(16772559,1.45);ei.position.set(-8,16,9);ei.castShadow=yt.shadowMap.enabled;ei.shadow.mapSize.set(1024,1024);ei.shadow.camera.left=-14;ei.shadow.camera.right=14;ei.shadow.camera.top=11;ei.shadow.camera.bottom=-11;ei.shadow.bias=-7e-4;fi.add(ei);const tf=new Aa(12049640,.35);tf.position.set(11,8,-8);fi.add(tf);function ti(n,e){return n.userData.interactiveId=e,n.traverse(t=>{t.userData.interactiveId=e}),n}function qe(n,e,t,i,r=!0){const s=new me(new Bt(...e),i);return s.position.set(...t),s.castShadow=r,s.receiveShadow=r,n.add(s),s}function Pr(n,e=.045){if(ys)return n;const t=[];return n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i.userData.inkOutline||!i.geometry||/PlaneGeometry|CircleGeometry/.test(i.geometry.type))return;i.geometry.boundingSphere||i.geometry.computeBoundingSphere();const r=i.geometry.boundingSphere?.radius||0,s=Math.max(i.scale.x,i.scale.y,i.scale.z);if(r*s<.36)return;const o=Array.isArray(i.material)?i.material[0]:i.material;o!==ie.soil&&(o?.transparent&&o.opacity<.85||t.push(i))}),t.forEach(i=>{const r=new me(i.geometry,ie.ink);r.userData.inkOutline=!0,r.scale.setScalar(1+Math.min(e,.022)),r.castShadow=!1,r.receiveShadow=!1,i.add(r)}),n}function Wy(n,e=256){const t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");n(i,e);const r=new uh(t);return r.colorSpace=en,r.wrapS=r.wrapT=aa,r}function $y(){qy();const n=Wy((c,l)=>{c.fillStyle="#78a875",c.fillRect(0,0,l,l);for(let u=0;u<90;u+=1){c.fillStyle=u%2?"rgba(206,219,147,.08)":"rgba(44,86,69,.06)";const d=u*73%l,p=u*47%l;c.fillRect(d,p,12+u%17,3+u%5)}for(let u=0;u<900;u+=1){const d=u%3?"rgba(31,93,52,.18)":"rgba(211,231,149,.12)";c.fillStyle=d,c.fillRect(Math.random()*l,Math.random()*l,1,3+Math.random()*3)}});n.repeat.set(7,5),ie.grass.map=n;const e=new me(new Bt(30,.65,19.5),ie.grassDark);e.position.y=-.38,e.receiveShadow=!0,Qt.add(e);const t=new me(new Un(29.5,19),ie.grass);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,Qt.add(t);const i=new me(new Un(27.8,1.45),ie.path);i.rotation.x=-Math.PI/2,i.position.set(0,.012,-6.7),i.receiveShadow=!0,Qt.add(i);const r=new me(new Un(1.25,12),ie.path);r.rotation.x=-Math.PI/2,r.position.set(-9.6,.014,-1),Qt.add(r);const s=[];for(let c=-14.5;c<=14.5;c+=1.5)s.push([c,.28,-9.4],[c,.28,9.4]);for(let c=-8.5;c<=8.5;c+=1.5)s.push([-14.6,.28,c],[14.6,.28,c]);const o=new wr(new Bt(.14,.72,.14),ie.woodDark,s.length),a=new Nt;s.forEach((c,l)=>{a.position.set(...c),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}),o.castShadow=!0,Qt.add(o),[-14.6,14.6].forEach(c=>qe(Qt,[.07,.12,19],[c,.37,0],ie.wood)),[-9.4,9.4].forEach(c=>qe(Qt,[29.3,.12,.07],[0,.37,c],ie.wood));for(let c=-13.7;c<=13.7;c+=1.5){const l=new me(new Vl(.48+Math.random()*.1,1),ie.grassDark);l.position.set(c,.3,8.85+Math.sin(c)*.08),l.castShadow=!0,Qt.add(l)}for(let c=0;c<10;c+=1){const l=new me(new yn(.07,8,6),c%2?ie.amber:ie.coral);l.position.set(-12.7+c*2.55,.13,8.1+Math.sin(c)*.25),l.castShadow=!0,Qt.add(l)}Xy()}function qy(){const n=new Un(90,90,40,40);n.rotateX(-Math.PI/2);const e=n.attributes.position;for(let d=0;d<e.count;d+=1){const p=e.getX(d),f=e.getZ(d),g=Math.max(Math.abs(p)-27,Math.abs(f)-18,0),v=It.smoothstep(Math.abs(f+12.2),1.8,5)*Math.min(1,g/14)*(1.3+Math.sin(p*.15)*Math.cos(f*.12)*1.2);e.setY(d,-.16+v)}n.computeVertexNormals();const t=new me(n,Gt(8562557));t.name="surrounding meadow",t.receiveShadow=!0,Qt.add(t);const i=new me(new Un(80,2.8),ie.path);i.rotation.x=-Math.PI/2,i.position.set(0,-.1,-12.2),i.receiveShadow=!0,Qt.add(i);const r=new me(new Un(1.5,7),ie.path);r.rotation.x=-Math.PI/2,r.position.set(16.2,-.09,-7.5),Qt.add(r);const s=[[-15,-4],[-17,2],[-16,8],[-13,-12],[-8,-14],[-2,-15],[4,-14],[10,-13],[16,-11],[18,-5],[18,2],[17,8],[22,-16],[-22,-18]],o=new wr(new pt(.12,.19,2.3,7),ie.woodDark,s.length),a=new wr(new fo(1,1),Gt(6590831),s.length*3),c=new Nt;s.forEach(([d,p],f)=>{const g=.85+f%4*.14;d*=1.2,p*=1.2,c.position.set(d,1,p),c.scale.set(1,1,1),c.updateMatrix(),o.setMatrixAt(f,c.matrix);for(let _=0;_<3;_+=1)c.position.set(d+(_-1)*.75,2.6+(_===1?.7:0),p+(_===1?-.3:.2)),c.scale.set(1.15*g,g,1.05*g),c.updateMatrix(),a.setMatrixAt(f*3+_,c.matrix),a.setColorAt(f*3+_,new ut([12702093,10208683,11323019][(f+_)%3]))}),o.castShadow=a.castShadow=!0,Qt.add(o,a);const l=new $e;l.name="neighboring farm shed",l.position.set(-19,-.05,-18),qe(l,[2.6,1.8,2.3],[0,.9,0],Gt(14014670));const u=new me(new mi(2.05,1.1,4),Gt(11428701));u.rotation.y=Math.PI/4,u.position.y=2.28,l.add(u),qe(l,[.65,1.23,.06],[-.42,.62,1.18],ie.woodDark),qe(l,[.62,.58,.07],[.61,1.1,1.18],ie.shell),qe(l,[.48,.44,.08],[.61,1.1,1.2],Gt(6790308)),Qt.add(l)}function Xy(){const n=new $e;n.position.set(11,0,12);const e=new Oi({color:12379356,transparent:!0,opacity:.42,roughness:.15,side:_n});qe(n,[4.6,.12,2.5],[0,.05,0],ie.path),qe(n,[4.4,2.2,.08],[0,1.1,-1.12],e,!1);for(let r=-2;r<=2;r+=1)qe(n,[.05,2.4,2.3],[r*1.05,1.15,0],ie.metal);const t=qe(n,[2.7,.08,2.35],[-1.05,2.35,0],e,!1);t.rotation.z=-.38;const i=qe(n,[2.7,.08,2.35],[1.05,2.35,0],e,!1);i.rotation.z=.38,Qt.add(n)}function _i(n,e="#f4bd4d"){xa.font="700 15px system-ui";const t=Math.ceil(xa.measureText(n).width)+24,i=new Nt,r=document.createElement("button");r.type="button",r.className="world-label",r.textContent=n,r.hidden=!0,r.style.width=`${t}px`,r.style.borderColor=e;for(const s of["pointerdown","pointerup"])r.addEventListener(s,o=>o.stopPropagation());return r.addEventListener("click",s=>{s.stopPropagation(),!(Rt||!bn.hidden||!cn.hidden)&&(Lr(),i.userData.interactiveId&&Kt(i.userData.interactiveId,mt()))}),i.labelElement=r,i.userData.worldLabel={text:n,width:t,height:30,fontSize:15},i}function nf(n,e,t){const i=new $e;for(const s of[-.65,.65])for(const o of[-.5,.5])qe(i,[.09,.48,.09],[s,.24,o],ie.woodDark),qe(i,[.12,.07,.12],[s,.45,o],ie.amber);for(const s of[-.5,.5])qe(i,[1.3,.025,.025],[0,.28,s],ie.straw||ie.wood);for(const s of[-.65,.65])qe(i,[.025,.025,1],[s,.28,0],ie.wood);qe(i,[.12,.85,.1],[0,.425,0],ie.woodDark),qe(i,[.72,.32,.07],[0,.75,0],ie.wood);const r=_i(e,"#f4bd4d");return r.position.y=1.2,i.add(r),i.position.copy(t),Wt(i),Pr(i,.04),ti(i,n)}function Yy(n){const e=nt[n];if(!e||kt===n)return null;const t=new $e;t.userData.guideMarker=!0,t.userData.baseY=e.y;const i=new me(new Ni(1.08,36),new $t({color:16039245,transparent:!0,opacity:.16,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.012;const r=new me(new ci(.92,.045,8,44),new Oi({color:16039245,emissive:5057797,emissiveIntensity:.26,roughness:.38,transparent:!0,opacity:.92,depthWrite:!1}));r.rotation.x=Math.PI/2;const s=new me(new mi(.18,.36,3),ie.amber);return s.rotation.z=Math.PI,s.position.y=.34,t.add(i,r,s),t.position.copy(e),t}function jy(n,e){const t=new $e,i=new me(new Ni(.98,24),new $t({color:1194533,transparent:!0,opacity:.27,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.018,t.add(i);const r=new me(new pt(.75,.85,.22,24),ie.shell);r.position.y=.14,t.add(r);const s=new me(new pt(.13,.16,2.5,12),ie.metal);s.position.set(0,1.46,-.15),t.add(s);const o=new me(new pt(.065,.065,2.4,8),ie.water);o.position.set(0,1.42,-.42),t.add(o);const a=[];for(let u=0;u<4;u++){const d=new $e;d.name=`stacked planter ${u+1}`;const p=u%2?.16:-.16,f=.52+u*.61,g=.29-u*.18;d.position.set(p,f,g);const _=e.repaired?ie.white:ie.metal,v=new me(new pt(.64,.4,.35,24,1,!0),_);d.add(v);const m=new me(new pt(.4,.4,.05,20),ie.shell);m.position.y=-.17,d.add(m);const S=new me(new ci(.64,.055,7,24),ie.shell);S.rotation.x=Math.PI/2,S.position.y=.18,d.add(S);const b=new me(new Ni(.585,24),ie.soil);b.rotation.x=-Math.PI/2,b.position.y=.15,d.add(b),Wt(d),t.add(d);for(let x=0;x<3;x++){const L=x*Math.PI*2/3+.35;a.push({x:p+Math.cos(L)*.27,y:f+.19,z:g+Math.sin(L)*.27,turn:u*1.4+x})}}for(const u of t.children.filter(d=>d.name.startsWith("stacked planter"))){u.updateMatrix();for(const d of[...u.children]){const p=new me(d.geometry.clone().applyMatrix4(u.matrix),d.material);t.add(p),u.remove(d),d.geometry.dispose()}}Wt(t);const c=e.queue.filter(u=>u.readyAt!==null&&u.readyAt<=Ve()),l=_i(e.repaired?c.length?`${c.length} layer${c.length>1?"s":""} ready`:`Tower ${n+1}`:"REPAIR PLANTER",c.length?"#b9df63":"#69cbd3");l.position.set(0,3.95,0),t.add(l);for(const u of e.queue){const d=u.readyAt?It.clamp((Ve()-u.startedAt)/Math.max(1,u.readyAt-u.startedAt),0,1):0,p=rf(u.crop,d,a.slice(u.layer*3,u.layer*3+3),u.crop==="tomato"?.85:1.2);p.userData.growthTiming={startedAt:u.startedAt,readyAt:u.readyAt,size:u.crop==="tomato"?.85:1.2},p.userData.towerIndex=n,p.userData.jobId=u.id,p.userData.layer=u.layer,t.add(p)}return t.position.copy(nt[`tower-${n}`]),Pr(t,.036),ti(t,`tower-${n}`)}function Jy(n,e=.28,t=.11,i=!1){const r=new ls;r.moveTo(0,0),i?[[.15,.65],[.28,1],[.43,.7],[.58,.96],[.75,.6],[1,0],[.75,-.6],[.58,-.96],[.43,-.7],[.28,-1],[.15,-.65]].forEach(([a,c])=>r.lineTo(a*e,c*t)):(r.bezierCurveTo(e*.2,t,e*.72,t,e,0),r.bezierCurveTo(e*.72,-t,e*.2,-t,0,0));const s=new eo(r,{depth:.018,bevelEnabled:!1,curveSegments:5});s.rotateX(-Math.PI/2);const o=new me(s,n);return o.castShadow=!0,o}function ws(n,e=1){const t=Le[n],i=new $e,r=t.family==="fruit",s=Gt(r?4685648:n==="lettuce"?6399295:t.color,{side:_n}),o=Gt(r?8894309:t.accent,{side:_n}),a=["lettuce","strawberry"].includes(n),c=n==="tomato"?.8:a?.16:.52,l=new me(new pt(.025,.05,c,7),ie.grassDark);l.position.y=c/2,i.add(l);const u=n==="lettuce"||n==="kale"?12:10;for(let p=0;p<u;p+=1){const f=p/u*Math.PI*2,g=Jy(p%3?s:o,n==="lettuce"?.46:n==="tomato"?.34:.36,n==="lettuce"?.25:n==="basil"?.15:.14,["kale","tomato"].includes(n));g.rotation.set(0,-f,n==="kale"?.7:.18+p%3*.09),g.position.set(0,a?.08+p%3*.045:.16+p%3*.14,0),i.add(g)}if(n==="tomato"){const p=new me(new pt(.018,.025,1.05,6),ie.wood);p.position.set(-.1,.52,-.05),i.add(p);for(let f=0;f<3;f+=1){const g=new me(new yn(.085,12,8),ie.coral);g.position.set(f%2?-.2:.2,.3+f*.16,.15),g.visible=e>=.72,g.userData.ripeningFruit=!0,i.add(g)}}if(n==="strawberry")for(let p=0;p<3;p+=1){const f=new me(new mi(.075,.14,10),ie.coral);f.rotation.z=Math.PI,f.position.set(Math.cos(p*2.1)*.21,.18,Math.sin(p*2.1)*.21),f.visible=e>=.72,f.userData.ripeningFruit=!0,i.add(f)}const d=e>=1?1:e>=.66?.78:e>=.33?.52:.28;return i.scale.setScalar(d),i.userData.crop=n,i.userData.campaignCrop=!0,i.userData.swayPhase=Jn.indexOf(n)*.8+Math.random()*.4,i.userData.growthStage=e>=1?3:e>=.66?2:e>=.33?1:0,i}function rf(n,e,t,i){const r=ws(n,1),s=new Set(r.children.filter(c=>c.geometry?.type==="ExtrudeGeometry").map(c=>c.material)),o=r.children.filter(c=>c.userData.ripeningFruit);if(o.forEach(c=>r.remove(c)),Wt(r),o.length){const c=new $e;o.forEach(l=>c.add(l)),Wt(c),[...c.children].forEach(l=>{l.userData.ripeningFruit=!0,l.userData.fruitPerInstance=o.length,r.add(l)})}const a=new $e;return a.userData.crop=n,a.userData.plantingPlacements=t,a.userData.foliageMaterials=[],r.children.forEach(c=>{if(!c.isMesh)return;c.updateMatrix();const l=c.material.clone(),u=new wr(c.geometry.clone(),l,t.length);u.castShadow=!0,u.receiveShadow=!0,u.userData.plantPartMatrix=c.matrix.clone(),u.userData.ripeningFruit=!!c.userData.ripeningFruit,u.userData.fruitPerInstance=c.userData.fruitPerInstance||1,s.has(c.material)&&a.userData.foliageMaterials.push(l),a.add(u)}),Ii(r),sf(a,e,i),a}function sf(n,e,t){const i=e>=1?3:e>=.66?2:e>=.33?1:0,r=[.28,.52,.78,1][i]*t,s=e>=.72;if(n.userData.growthScale===r&&n.userData.ripe===s)return;n.userData.growthStage=i,n.userData.growthScale=r,n.userData.ripe=s;const o=new Nt;n.children.forEach(a=>{a.isInstancedMesh&&(n.userData.plantingPlacements.forEach((c,l)=>{o.position.set(c.x,c.y,c.z),o.rotation.set(0,c.turn||0,0),o.scale.setScalar(r),o.updateMatrix(),a.setMatrixAt(l,o.matrix.clone().multiply(a.userData.plantPartMatrix))}),a.visible=!a.userData.ripeningFruit||s,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere())})}function Ky(){const n=Ve();_t.traverse(e=>{const t=e.userData.growthTiming;if(!t)return;if(e.userData.towerIndex!==void 0){const s=h.towers[e.userData.towerIndex].queue.find(o=>o.id===e.userData.jobId);s&&(t.readyAt=s.readyAt,t.startedAt=s.startedAt)}const i=It.clamp((n-t.startedAt)/Math.max(1,t.readyAt-t.startedAt),0,1);if(e.userData.plantingPlacements){sf(e,i,t.size);return}const r=i>=1?3:i>=.66?2:i>=.33?1:0;e.userData.growthStage=r,e.scale.setScalar([.28,.52,.78,1][r]*t.size),e.children.forEach(s=>{s.userData.ripeningFruit&&(s.visible=i>=.72)})}),Bh(_t)}function Zy(n,e){const t=new $e,i=new me(new Un(2.7,1.6),new $t({color:1587492,transparent:!0,opacity:.22,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.015,t.add(i),qe(t,[2.45,.38,1.35],[0,.2,0],ie.wood),qe(t,[2.08,.23,1.02],[0,.42,0],ie.soil);for(let o=-1;o<=1;o+=1)qe(t,[1.85,.035,.045],[0,.56,o*.27],ie.woodDark,!1);if(e.capacity>=3)for(const o of[-1.15,1.15])for(const a of[-.6,.6])qe(t,[.1,.7,.1],[o,.35,a],ie.woodDark);e.capacity>=4&&qe(t,[2.4,.12,.12],[0,.7,-.6],ie.wood);const r=e.capacity<=2?[[-.53,0],[.53,0]]:[[-.53,-.26],[.53,-.26],[-.53,.26],[.53,.26]];e.plants.forEach((o,a)=>{const c=It.clamp((Date.now()-o.plantedAt)/Math.max(1,o.readyAt-o.plantedAt),0,1),l=e.capacity<=2?1.08:.94,u=e.capacity<=2?[{x:-.17,y:0,z:-.2},{x:.17,y:0,z:.2,turn:1.1},{x:.15,y:0,z:-.13,turn:2.4}]:[{x:-.18,y:0,z:0},{x:.18,y:0,z:0,turn:1.4}],d=rf(o.crop,c,u,l);d.userData.growthTiming={startedAt:o.plantedAt,readyAt:o.readyAt,size:l},d.position.set(r[a][0],.54,r[a][1]),t.add(d)});const s=_i(`Bed ${n+1}: ${e.plants.length}/${e.capacity}`,"#b9df63");return s.position.set(0,e.plants.length?1.95:1.05,0),s.visible=kt===`bed-${n}`,t.add(s),t.position.copy(nt[`bed-${n}`]),Pr(t,.034),ti(t,`bed-${n}`)}function Qy(){const n=new $e;if(qe(n,[2.25,1.15,1.45],[0,.58,0],ie.white),qe(n,[2.38,.18,1.58],[0,1.22,0],ie.lime),h.seedShop.expanded){qe(n,[.72,1.05,1.3],[-1.52,.53,0],ie.wood);for(const a of[.25,.55,.85])qe(n,[.62,.23,.06],[-1.52,a,.68],ie.lime),qe(n,[.16,.04,.06],[-1.52,a,.73],ie.metal)}const e=new me(new pt(.22,.28,.68,14),ie.metal);e.rotation.z=Math.PI/2,e.position.set(1.35,.78,0),n.add(e);const t=jl({skin:"#c99069",hair:"#e5d8b7",color:"#b9547f",accessory:"glasses"});t.name="Bram the seed merchant",t.updateMatrixWorld(!0);const i=[];t.traverse(a=>{a.isMesh&&i.push(a)}),i.forEach(a=>t.attach(a)),t.userData.rig=null;const r=new me(new pt(.48,.48,.06,20),ie.lime);r.position.y=2,t.add(r);const s=new me(new mi(.27,.48,16),ie.lime);s.position.set(.06,2.22,0),s.rotation.z=-.2,t.add(s),Wt(t),t.position.set(2.2,0,.1),t.rotation.y=.35,n.add(t),qe(n,[.9,.55,.62],[1.9,.38,.85],ie.wood);for(const a of[1.55,2.25]){const c=new me(new pt(.19,.19,.08,12),ie.metal);c.rotation.z=Math.PI/2,c.position.set(a,.2,.85),n.add(c)}for(let a=0;a<3;a++)qe(n,[.2,.28,.1],[1.62+a*.26,.79,.85],a%2?ie.coral:ie.lime);const o=_i("SEED VAULT","#b9df63");return o.position.set(0,1.72,0),n.add(o),n.position.copy(nt.vault),Pr(n,.038),ti(n,"vault")}function eb(){const n=py(h.hydro.water),e=_i("RESERVOIR","#69cbd3");return e.name="reservoir label",e.position.set(0,1.95,0),n.add(e),n.position.copy(nt.reservoir),ti(n,"reservoir")}function tb(){const n=_t.getObjectByName("water reservoir");zh(n,h.hydro.water),n?.userData.reservoir&&(n.userData.reservoir.mixingStream.visible=Kn(h));const e=n?.getObjectByName("reservoir label");if(!e)return;const t=n.userData.reservoir.status,i=t==="empty"?"WATER EMPTY":t==="low"?"WATER LOW":"RESERVOIR";if(e.userData.worldLabel.text===i)return;xa.font="700 15px system-ui";const r=Math.ceil(xa.measureText(i).width)+24;Object.assign(e.userData.worldLabel,{text:i,width:r}),e.labelElement.textContent=i,e.labelElement.style.width=`${r}px`,e.labelElement.style.borderColor=t==="ready"?"#69cbd3":"#f4bd4d"}function nb(){const n=new $e;n.name="reservoir tower feedline";const e=new Oi({color:4352882,roughness:.7}),t=[],i=Math.max(0,...h.towers.map((u,d)=>u.built?d:0));function r(u,d){const p=new U(...u),f=new U(...d),g=new me(new pt(.075,.075,p.distanceTo(f),8),e);g.position.copy(p).add(f).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new U(0,1,0),f.clone().sub(p).normalize()),n.add(g),t.push({start:p,end:f});const _=new me(new yn(.1,8,6),ie.metal);_.position.copy(f),n.add(_)}r([-10.65,.24,1.74],[-10.3,.24,2.6]),r([-10.3,.24,2.6],[-10.3,.24,4.5]),r([-10.3,.24,4.5],[nt[`tower-${i}`].x,.24,4.5]),h.towers.forEach((u,d)=>{if(!u.built)return;const p=nt[`tower-${d}`];r([p.x,.24,4.5],[p.x,.24,p.z+.85]),r([p.x,.24,p.z+.85],[p.x,2.8,p.z+.85]),r([p.x,2.8,p.z+.85],[p.x,2.8,p.z])}),Wt(n);const s=new $e;s.position.copy(nt.filter);const o=new me(new pt(.26,.26,.75,16),ie.white);o.rotation.z=Math.PI/2,o.position.y=.28,s.add(o);const a=new me(new ci(.22,.045,6,16),h.hydro.lineClogged?ie.coral:ie.water);a.rotation.x=Math.PI/2,a.position.y=.65,s.add(a),qe(s,[.055,.28,.055],[0,.48,0],ie.metal);const c=_i(h.hydro.lineClogged?"FILTER CLOGGED":"FEED FILTER",h.hydro.lineClogged?"#f4bd4d":"#69cbd3");c.position.y=1.3,s.add(c),n.add(ti(s,"filter"));const l=new wr(new yn(.085,6,5),new $t({color:h.hydro.lineClogged?16039245:10347999}),t.length);return l.userData.flowSegments=t,n.add(l),n}function Na(){const n=[];return h.towers.forEach((e,t)=>{e.built&&(!e.repaired||Tr(e,Ve()))&&n.push(`tower-${t}`)}),h.beds.forEach((e,t)=>{e.built&&e.plants.some(i=>i.readyAt<=Ve())&&n.push(`bed-${t}`)}),h.hydro.lineClogged&&n.push("filter"),(h.hydro.water<=iu||!h.hydro.batchMixed)&&n.push("reservoir"),h.farm.owned.includes("coop")&&h.farm.eggsReady&&n.push("coop"),h.farm.owned.includes("composter")&&h.farm.compost&&n.push("composter"),zi(h)?.available&&n.push("market"),n}function ib(){const n=Na();if(!n.length)return new $e;const e=new Ea(.92,1.02,24);e.rotateX(-Math.PI/2);const t=new $t({transparent:!0,opacity:.65,depthWrite:!1}),i=new wr(e,t,n.length);i.userData.attentionMarkers=!0;const r=new Nt;return n.forEach((s,o)=>{r.position.copy(nt[s]),r.position.y=.035,r.scale.setScalar(s==="filter"?.6:1),r.updateMatrix(),i.setMatrixAt(o,r.matrix),i.setColorAt(o,new ut(["filter","reservoir"].includes(s)?16039245:12181347))}),i}function rb(){if(!h.market.built)return nf("market","PRODUCE TABLE",nt.market);const n=new $e,e=xs(h);n.name=`market construction stage ${e}`,n.userData.constructionStage=e;const t=e<3?1.8:3.1;qe(n,[t,.15,1.15],[0,.7,.1],ie.wood);for(const r of[-t/2+.15,t/2-.15])for(const s of[-.35,.55])qe(n,[.12,.7,.12],[r,.35,s],ie.woodDark);if(e>=2&&(qe(n,[t+.25,.12,1.4],[0,2.15,-.15],e===4?ie.coral:ie.lime),[-t/2,t/2].forEach(r=>qe(n,[.11,2.1,.11],[r,1.1,-.55],ie.woodDark))),e>=3&&(qe(n,[3.1,.5,.12],[0,.35,.65],ie.wood),qe(n,[3,.65,.12],[0,1.3,-.6],ie.white),qe(n,[2.8,.09,.4],[0,1.35,-.4],ie.woodDark)),e===4){for(const r of[-1.25,-.42,.42,1.25])qe(n,[.28,.012,1.41],[r,2.216,-.15],ie.white),qe(n,[.28,.15,.035],[r,2.1,.57],ie.white);for(const r of[-1.85,1.85]){qe(n,[.5,.45,.65],[r,.23,.1],ie.woodDark);const s=ws("tomato",1);s.scale.setScalar(.4),s.position.set(r,.48,.1),n.add(s)}}const i=_i(e===1?"PIP'S PRODUCE TABLE":"PIP'S VEG STAND","#f4bd4d");return i.position.set(0,e===1?1.55:2.58,0),n.add(i),Jn.slice(0,e).forEach((r,s)=>{const o=(s-(e-1)/2)*.6,a=qe(n,[.48,.28,.56],[o,.87,.2],ie.woodDark);a.rotation.y=.07*s;const c=new me(new yn(.11,10,7),new Oi({color:Le[r].color,roughness:.7}));c.position.set(o,1.04,.2),n.add(c)}),n.position.copy(nt.market),Pr(n,.034),ti(n,"market")}function sb(){const n=new $e;qe(n,[1.55,.18,.75],[0,.85,0],ie.wood),[-.62,.62].forEach(i=>qe(n,[.12,1.4,.12],[i,.7,0],ie.woodDark));const e=Object.values(h.rack).reduce((i,r)=>i+r,0);for(let i=0;i<Math.min(e,6);i+=1){const r=Jn.find(o=>h.rack[o]>i/2)||"lettuce",s=ws(r,1);s.scale.setScalar(.32),s.position.set(-.5+i%3*.5,1,i>2?.15:-.15),n.add(s)}const t=_i("HARVEST RACK","#b9df63");return t.position.set(0,1.65,0),t.visible=kt==="rack"||e>0,n.add(t),n.position.copy(nt.rack),Pr(n,.034),ti(n,"rack")}function ob(){const n=new $e,e=Da(h);qe(n,[2.5,.18,1.4],[0,.8,0],ie.wood);for(const i of[-1,1])for(const r of[-.5,.5])qe(n,[.15,.8,.15],[i,.4,r],ie.woodDark);if(e>=2){qe(n,[2.5,1.7,.13],[0,.86,-.8],ie.wood);for(const i of[-1.2,1.2])qe(n,[.14,2.1,.14],[i,1.05,.65],ie.woodDark)}if(e>=3){for(const r of[-1.2,1.2])qe(n,[.13,1.7,1.9],[r,.86,0],ie.wood);const i=new me(new mi(1.8,.75,4),ie.amber);i.rotation.y=Math.PI/4,i.position.y=2.08,i.castShadow=!0,n.add(i)}else e>=2&&qe(n,[2.7,.14,2],[0,2.1,0],ie.amber);qe(n,[.72,.35,.5],[0,1.06,0],ie.water);const t=_i("FARM SHOP","#f4bd4d");return t.position.set(0,e<2?1.65:2.72,0),n.add(t),n.position.copy(nt.workshop),Pr(n,.034),ti(n,"workshop")}function of(n,e){const t=Math.max(0,Ri.findIndex(o=>o.name===n.customer)),i=jl(Ri[t],t);i.position.copy(ya(e,n));const r=new me(new Ni(.4,20),new $t({color:1586468,transparent:!0,opacity:.2,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.025,i.add(r);const s=new me(new Ea(.43,.49,24),new $t({color:16039245,side:_n}));return s.rotation.x=-Math.PI/2,s.position.y=.035,s.visible=h.selectedOrderId===n.id,i.add(s),i.userData.customerIndex=e,i.userData.customerProfile=t,i.userData.orderId=n.id,i.userData.arrivedAt=n.createdAt,i.userData.destination=i.position.clone(),ti(i,"market")}function ya(n,e=h.orders[n]){return new U(nt.market.x-1+(e?.slot??n)*1.3,0,nt.market.z+2.8)}function Hd(n){if(wc.has(n.name))return wc.get(n.name);const e=new zl;e.background=new ut(n.color).multiplyScalar(.45),e.add(new Xl(16775398,5469804,2.6));const t=new Aa(16773847,2);t.position.set(-2,4,4),e.add(t);const i=jl(n,Ri.indexOf(n));e.add(i);const r=new vn(32,1,.1,12);r.position.set(.45,1.9,2.8),r.lookAt(0,1.48,0);const s=128,o=new ki(s,s);o.texture.colorSpace=en;const a=yt.getRenderTarget();yt.setRenderTarget(o),yt.render(e,r);const c=new Uint8Array(s*s*4);yt.readRenderTargetPixels(o,0,0,s,s,c),yt.setRenderTarget(a);const l=document.createElement("canvas");l.width=l.height=s;const u=l.getContext("2d"),d=u.createImageData(s,s);for(let f=0;f<s;f++)d.data.set(c.subarray(f*s*4,(f+1)*s*4),(s-f-1)*s*4);u.putImageData(d,0,0);const p=l.toDataURL("image/png");return wc.set(n.name,p),o.dispose(),Ii(i),p}function ru(n,e,t=!0){const i=of(n,e);i.traverse(s=>{delete s.userData.interactiveId}),Ar.add(i);const r=t?ws(n.crop,1):new $e;r.scale.setScalar(.32),Ar.add(r),Vs.push({customer:i,produce:r,purchased:t,age:t?0:.75,start:new U(Ee.x,1.1,Ee.z),end:i.position.clone().add(new U(0,1,.3))})}function af(){const n=Ph(h.proPip);return n.position.set(-5.35,0,-1.1),n}let St=af();const Ee={x:St.position.x,z:St.position.z,target:null,speed:h.proPip?6.25:5.25,direction:"south",action:"idle",actionTime:0,pendingFacing:0,gaitPhase:0};fi.add(St);function ab(){if(h.cosmetics.active.includes("sunny-planters"))for(let n=0;n<5;n+=1){const e=new me(new pt(.2,.25,.3,12),ie.coral);e.position.set(-8.6+n*.55,.15,-5.35);const t=new me(new yn(.11,10,7),ie.amber);t.position.set(e.position.x,.48,e.position.z),_t.add(e,t)}if(h.cosmetics.active.includes("blue-path"))for(let n=0;n<3;n+=1){const e=new $e,t=new me(new pt(.28,.21,.38,12),ie.water);t.position.y=.2;const i=ws("basil",1);i.scale.setScalar(.35),i.position.y=.4,e.add(t,i),e.position.set(-1.5+n*.8,0,-5.8),_t.add(e)}if(h.cosmetics.active.includes("festival-bunting")&&h.market.built)for(let n=0;n<9;n+=1){const e=new me(new mi(.12,.28,3),n%2?ie.amber:ie.coral);e.rotation.z=Math.PI,e.position.set(nt.market.x-1.35+n*.35,2.32+Math.sin(n*.8)*.1,nt.market.z),_t.add(e)}}function xo(){if(_a.replaceChildren(),Ii(_t),_t.clear(),_t.add(Qy(),eb(),rb(),ob()),Ht(h).festival){const e=new $e;e.name="harvest festival garden display",e.position.set(-5,0,11.2);for(const t of[-1.3,1.3]){qe(e,[.18,2.7,.18],[t,1.25,0],ie.wood),qe(e,[.7,.42,.7],[t,.12,0],ie.white);for(let i=0;i<5;i++){const r=new me(new fo(.22,1),ie.lime);r.position.set(t+Math.sin(i*2)*.25,.4+i*.1,Math.cos(i*2)*.22),e.add(r)}}qe(e,[3,.2,.3],[0,2.55,0],ie.wood);for(let t=0;t<7;t++){const i=new me(new mi(.16,.36,3),t%2?ie.coral:ie.amber);i.rotation.z=Math.PI,i.position.set(-1.1+t*.37,2.25,0),e.add(i)}Wt(e),_t.add(e)}h.farm.owned.forEach(e=>{const t=hy(e,h.farm);t.position.copy(nt[e]);{const i=_i(e==="rainTank"?"RAIN STORAGE":e==="coop"?h.farm.eggsReady?"EGGS READY":"CHICKEN COOP":h.farm.compost?"COMPOST READY":"COMPOSTER","#b9df63");i.position.y=2,t.add(i),ti(t,e)}_t.add(t)}),_t.add(sb()),_t.add(nb(),ib()),h.towers.forEach((e,t)=>{const i=e.built?jy(t,e):nf(`tower-${t}`,`BUILD T${t+1}`,nt[`tower-${t}`]);e.built&&cb(t)&&lb(i,.38),_t.add(i)}),h.beds.forEach((e,t)=>{e.built&&_t.add(Zy(t,e))}),h.market.built&&h.orders.forEach((e,t)=>{e.status==="waiting"&&_t.add(of(e,t))}),fy(_t);const n=Yy(pi());n&&_t.add(n),ab(),ro=[],_t.traverse(e=>{e.userData.worldLabel&&(ro.push(e),_a.appendChild(e.labelElement))}),ub(),ef=cf()}function cb(n){if(!mt())return!1;const e=nt[`tower-${n}`],t=e.x-Ee.x,i=e.z-Ee.z,r=Math.hypot(7.7,14.3),s=(t*7.7+i*14.3)/r,o=Math.abs(t*14.3-i*7.7)/r;return Math.hypot(t,i)<3.4&&s>0&&o<1.1}function lb(n,e){n.traverse(t=>{if(t.userData.worldLabel)return;const i=r=>{const s=r.clone();return s.transparent=!0,s.opacity=Math.min(r.opacity??1,e),s.depthWrite=!1,s};Array.isArray(t.material)?t.material=t.material.map(i):t.material&&(t.material=i(t.material))})}function Ii(n){const e=new Set(Object.values(ie)),t=new Set,i=new Set,r=new Set;n.traverse(s=>{s.geometry&&!t.has(s.geometry)&&(t.add(s.geometry),s.geometry.dispose()),(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{!a||e.has(a)||r.has(a)||(r.add(a),a.map&&!i.has(a.map)&&(i.add(a.map),a.map.dispose()),a.dispose())})})}function cf(){const n=Ve();return JSON.stringify({towers:h.towers.map(e=>[e.built,e.repaired,e.queue.map(t=>[t.id,t.layer,t.crop,t.readyAt<=n])]),beds:h.beds.map(e=>[e.built,e.capacity,e.plants.length,e.plants.filter(t=>t.readyAt<=n).length]),market:[h.market.built,xs(h),h.orders.map(e=>`${e.id}:${e.status}`)],rack:h.rack,lineClogged:h.hydro.lineClogged,farm:h.farm,festival:Ht(h).festival,attention:Na(),carry:h.carry,cosmetics:h.cosmetics.active,pro:h.proPip,selected:kt,guide:pi()})}function ub(){const n=St.getObjectByName("campaign carry");if(n&&(Ii(n),St.remove(n)),!h.carry)return;const e=new $e;if(e.name="campaign carry",h.carry.kind==="starter"){const t=new me(new pt(.13,.17,.22,12),ie.soil),i=ws(h.carry.crop,.82);i.scale.multiplyScalar(.48),i.position.y=.12,e.add(t,i)}else{const t=new me(new pt(.28,.22,.2,12),ie.wood);e.add(t),h.carry.items.slice(0,5).forEach((i,r)=>{const s=new me(new yn(.095,10,7),new Oi({color:Le[i].color,roughness:.7}));s.position.set(-.15+r%3*.15,.15+Math.floor(r/3)*.1,0),e.add(s)})}e.position.set(0,.72,.58),e.scale.setScalar(.95),St.add(e)}function Ve(){return Date.now()}function Je(n="autosave"){let e=!1;try{h=Cy(h,window.localStorage,Date.now(),t=>{e=t})}catch{}ee("#saveWarning").hidden=e,ee("#saveStatus").textContent=e?"Progress saved in this browser":"Progress is only in memory. Retry saving or export before closing.",Qh=performance.now(),n!=="autosave"&&jn("campaign_save",{reason:n,chapter:h.chapter+1,task:Zn(h)?.id||"complete"})}function He(n,e=3500){io.classList.add("is-active"),mt()&&(e=Math.min(e,3200)),io.textContent=n,oa=performance.now()+e}function rr(n){Di.effect(n)}function Lr(){Di.start()}function Ss(){Di.update();const n=h.settings.soundEnabled!==!1,e=ee("#soundButton");e.setAttribute("aria-label",n?"Mute sound":"Enable sound"),e.setAttribute("title",n?"Mute sound":"Enable sound"),e.setAttribute("aria-pressed",String(!n)),e.classList.toggle("is-muted",!n)}function Ot(n,e=n){Ee.action=n,Ee.actionTime=h.settings.reducedMotion?.18:.72,rr(e)}function lf(n){const e=new $e,t=new me(new Bt(.34,.46,.08),ie.white),i=new me(new Ni(.1,16),new Oi({color:Le[n].color,roughness:.65}));i.position.z=.046,e.add(t,i),e.position.copy(nt.vault).add(new U(2.5,1.1,.35)),Ar.add(e),Gs.push({kind:"packet",mesh:e,start:e.position.clone(),end:nt.vault.clone().add(new U(1.25,.95,0)),age:0,duration:h.settings.reducedMotion?.18:.72})}function Vi(n,e=16039245){const t=h.settings.reducedMotion?3:10;for(let i=0;i<t;i+=1){const r=new me(new yn(.035,6,5),new $t({color:e}));r.position.copy(n).add(new U(0,.45,0)),Ar.add(r),Gs.push({kind:"particle",mesh:r,velocity:new U((Math.random()-.5)*1.5,.7+Math.random(),(Math.random()-.5)*1.5),age:0,duration:.65})}}function db(n){for(let e=Gs.length-1;e>=0;e-=1){const t=Gs[e];t.age+=n;const i=t.age/t.duration;t.kind==="packet"?(t.mesh.position.lerpVectors(t.start,t.end,Math.min(1,i)),t.mesh.position.y+=Math.sin(Math.min(1,i)*Math.PI)*1.4,t.mesh.rotation.y+=n*5):(t.velocity.y-=n*2.2,t.mesh.position.addScaledVector(t.velocity,n),t.mesh.scale.setScalar(Math.max(.05,1-i))),i>=1&&(Ar.remove(t.mesh),Ii(t.mesh),Gs.splice(e,1))}for(let e=Vs.length-1;e>=0;e-=1){const t=Vs[e];t.age+=n;const i=Math.min(1,t.age/.65);t.produce.position.lerpVectors(t.start,t.end,i),h.settings.reducedMotion||(t.produce.position.y+=Math.sin(i*Math.PI)*.6),t.customer.userData.rig.arms[0].rotation.x=t.purchased?-i*.8:0,t.age>.75&&!h.settings.reducedMotion&&(t.customer.position.x+=n*2.2,t.customer.rotation.y=Math.PI/2,t.produce.position.copy(t.customer.position).add(new U(.3,1,0)),t.customer.userData.rig.legs.forEach((r,s)=>{r.rotation.x=Math.sin(t.age*9+s*Math.PI)*.3})),t.age>=(h.settings.reducedMotion?.9:2.3)&&(Ar.remove(t.customer,t.produce),Ii(t.customer),Ii(t.produce),Vs.splice(e,1))}}function hb(n){Qr.update(document.hidden?0:n,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});const e=performance.now()/1e3;ie.water.opacity=.76+Math.sin(e*1.8)*.08,ei.intensity=1.45+Math.sin(e*.09)*.06,_t.traverse(t=>{if(t.userData.attentionMarkers&&(t.material.opacity=h.settings.reducedMotion?.65:.55+Math.sin(e*2)*.15),t.userData.hens&&t.userData.hens.forEach((i,r)=>{const s=e*.7+r*2.5;i.position.copy(i.userData.home),h.settings.reducedMotion||(i.position.x+=Math.sin(s)*.22,i.position.z+=Math.cos(s)*.16,i.rotation.y=Math.cos(s)*.6,i.rotation.x=Math.max(0,Math.sin(s*2.3))*.22)}),t.userData.flowSegments){t.visible=jh(h,Ve());const i=new Nt;t.userData.flowSegments.forEach(({start:r,end:s},o)=>{const a=h.hydro.lineClogged||h.settings.reducedMotion?.5:(e*.22+o*.31)%1;i.position.lerpVectors(r,s,a),i.updateMatrix(),t.setMatrixAt(o,i.matrix)}),t.instanceMatrix.needsUpdate=!0}if(t.userData.campaignCrop&&(t.rotation.z=Math.sin(e*1.3+t.userData.swayPhase)*.025),t.userData.customerIndex!==void 0){const i=e*1.7+t.userData.customerIndex,r=h.settings.reducedMotion?1:It.clamp((Ve()-t.userData.arrivedAt)/1200,0,1);t.position.copy(t.userData.destination),t.position.x+=(1-r)*1.8,t.rotation.y=r<1?-Math.PI/2:-.18;const s=t.userData.rig;s&&!h.settings.reducedMotion&&(s.head.rotation.y=Math.sin(i*.45)*.07,s.body.scale.y=1+Math.sin(i)*.012,s.legs.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*.3:0}),s.arms.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*-.2:Math.sin(i+a)*.04}))}if(t.userData.guideMarker){const i=1+Math.sin(e*3.1)*.08;t.scale.set(i,1,i),t.position.y=t.userData.baseY+Math.sin(e*2.5)*.035}})}function El(n={}){const e=[];return n.coins&&e.push(`${n.coins} coins`),n.xp&&e.push(`${n.xp} XP`),n.unlockCrop&&e.push(Le[n.unlockCrop].label),n.unlockPro&&e.push("Pro Pip"),e.join(" + ")}function yo(n){const e=n?.goals;return e?[...e.marketLevel?[{label:"Market upgraded",current:h.market.level>=e.marketLevel?1:0,target:1}]:[],...e.capacityUpgrade?[{label:"Queue or bed expanded",current:su()?1:0,target:1}]:[],...Object.entries(e.sold||{}).map(([t,i])=>({crop:t,label:`${Le[t].label} sold`,current:h.stats.byCropSold[t],target:i})),...e.orders?[{label:"Total orders fulfilled",current:h.stats.orders,target:e.orders}]:[]]:[]}function su(){return h.towers.some(n=>n.built&&n.irrigationUpgraded)||h.beds.some(n=>n.built&&n.capacity>2)}function uf(){const n=h.towers.findIndex(t=>t.built&&!t.irrigationUpgraded),e=h.beds.findIndex(t=>t.built&&t.capacity<4);return[...n>=0?[{id:`tower-${n}`,label:"Precision drippers / 12% faster starts",cost:At.queueUpgrade}]:[],...e>=0?[{id:`bed-${e}`,label:"Bed +1 growing space",cost:At.bedUpgrade[e]}]:[]]}function fb(n){const e=yo(n);if(e.length)return e.every(t=>t.current>=t.target);switch(n.id){case"repair-first-tower":return h.towers[0].repaired;case"first-tower-plan":return h.stats.byCropQueued.lettuce>=2;case"first-grow-out":return h.stats.harvested>=4;case"reopen-market":return h.market.built;case"build-second-tower":return h.towers[1].built;case"specialize-flow":return h.hydro.systemLessonDone;case"split-crop-plan":return h.stats.byCropQueued.tomato>=1&&h.stats.byCropQueued.kale>=1;case"build-third-tower":return h.towers[2].built;case"build-pro-yard":return h.towers[3].built;default:return!1}}function pb(n){const e=h.level;h.coins+=n.reward.coins||0,h.xp+=n.reward.xp||0,n.reward.unlockCrop&&!h.unlockedCrops.includes(n.reward.unlockCrop)&&h.unlockedCrops.push(n.reward.unlockCrop),n.reward.unlockPro&&(h.proPip=!0),n.reward.campaignComplete&&(h.campaignComplete=!0);const t=Gh(h.xp);h.level=t.level,h.level>e&&(He(`Level ${h.level} reached. New farm options are ready.`,4500),rr("level-up"))}function Oa(n=new U(Ee.x,1.2,Ee.z)){const e=n.clone().add(new U(0,1,0)).project(Tt),t=tn.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function xi(){const n=Zn(h);if(!n||!fb(n))return!1;h.completedTasks.push(n.id),pb(n),h.taskIndex+=1,n.reward.chapterComplete&&(n.reward.campaignComplete||(h.chapter=Math.min(ds.length-1,h.chapter+1)),Ns=n),h=Rr(h),Je("task_complete"),Vi(nt[n.focus]||new U(Ee.x,0,Ee.z),12181347),rr(n.reward.chapterComplete?"chapter-complete":"task-complete"),jn("campaign_task_complete",{task:n.id,chapter:n.chapter+1,coins:h.coins,xp:h.xp}),n.reward.unlockPro&&mb(),Ns?Df(Ns):(He(`Task complete: ${n.title}. ${El(n.reward)}.`,4800),hi.celebrate({title:n.title,detail:El(n.reward)})),lt();const e=Ce.chapterCoins.getBoundingClientRect();return hi.coins(n.reward.coins,Ns?{x:e.left,y:e.bottom}:Oa(nt[n.focus])),!0}function mb(){const n=St.position.clone(),e=St.rotation.y;fi.remove(St),Ii(St),St=af(),St.position.copy(n),St.rotation.y=e,fi.add(St),Ee.speed=h.proPip?6.25:5.25}function Ki(){return Math.max(0,h.coins-(h.market.built?0:At.market))}function ou(){return h.market.built?"":`<div class="status-strip"><span>Veg Stand reserve</span><strong>${At.market} coins</strong></div>`}function yi(n,e,t=!1){if(t&&Ki()<n&&!h.market.built)return He("Keep 40 coins for the Veg Stand. Optional upgrades can use the remaining coins."),rr("error"),!1;if(h.coins<n)return He(`You need ${n-h.coins} more coins. Complete an order or task first.`),rr("error"),!1;const i=structuredClone(h);try{if(e(),h.coins-=n,h.coins<0)throw new Error("Invalid coin balance");return Je("purchase"),!0}catch{return h=i,He("That purchase was safely rolled back. Try again."),!1}}function au(n){const e=h.towers[n];!e?.built||e.repaired||(e.repaired=!0,h.stats.serviceActions+=1,Ot("repair","repair"),Vi(nt[`tower-${n}`],6933459),He(`Tower ${n+1} is online. Its four planting layers are ready.`),Je("repair"),xi(),lt())}function cu(n){const e=h.towers[n];if(!e||e.built||n===0)return;const t=[0,5,8,10][n];if(h.taskIndex<t){He("Finish the current farm task before opening this lane.");return}const i=At.tower[n];if(!yi(i,()=>{e.built=!0,e.repaired=!0,h.beds[n].built=!0}))return;Ot("build","build"),Vi(nt[`tower-${n}`],16039245);const r=zi(h);He(`Tower ${n+1} and Grow Bed ${n+1} are built.${r&&!r.reason?` ${r.label} unlocked at the stand.`:""}`),xi(),lt()}function lu(){if(h.market.built||h.taskIndex<3)return;const n=zi(h);if(!n?.available){He(n?.reason||`You need ${n.cost-h.coins} more coins.`);return}yi(0,()=>{if(!Oh(h))throw new Error("Construction unavailable")})&&(Ot("build","build"),Vi(nt.market,16039245),He("Pip's produce table is open. The first neighbor will stop by soon. Tower 2 unlocks a canopy."),xi(),lt())}function df(n){const e=eu(h,n);if(!e.available){He(e.reason);return}yi(0,()=>{if(!yy(h,n))throw new Error("Seed purchase changed")})&&(lf(n),Ot("collect","seed-pickup"),He(`Bram: ${e.amount} ${Le[n].label} seeds in the vault. ${e.tutorial?"First packet is on the house!":"No refunds for talking to your seedlings."}`),jn("seed_purchase",{crop:n,amount:e.amount,coins:e.price,tutorial:e.tutorial}),lt())}function hf(){yi(0,()=>{if(!by(h))throw new Error("Rescue unavailable")})&&(lf("lettuce"),He("Bram: Two lettuce seeds to get you growing again. Everybody starts somewhere."),jn("seed_rescue"),lt())}function ff(){yi(0,()=>{if(!My(h))throw new Error("Vault upgrade unavailable")})&&(Ot("build","build"),He("Seed vault expanded: room for 48 seeds of each crop."),lt())}function pf(n,e,t=null){const i=h.towers[n];if(!i?.built||!i.repaired||!h.unlockedCrops.includes(e))return;const r=go(i,h.carry,n),s=t===null?r[0]:t;if(!r.includes(s)){He(`Tower ${n+1} has no available layer. A carried starter's layer stays reserved.`);return}if(!Kn(h)){He("The shared tank needs a fresh mixed batch before planting."),Kt("reservoir");return}if(h.seeds[e]<=0){He(`Collect ${Le[e].label} seeds from the Seed Vault first.`);return}h.seeds[e]-=1;const o=Ve(),a=hs(e,"tower",h,i)*1e3*no;i.queue.push({id:crypto.randomUUID(),crop:e,layer:s,queuedAt:o,startedAt:o,readyAt:o+a,quality:1}),h.stats.planted+=1,h.stats.byCropQueued[e]+=1,Fd(h)&&Li(h,"matched",e),Fd(h)&&Li(h,"saving",e),new Set(i.queue.map(c=>c.crop)).size===4&&Li(h,"mixed"),h.xp+=2,Ot("plant","plant"),Vi(nt[`tower-${n}`],Number.parseInt(Le[e].color.slice(1),16)),He(`${Le[e].label} planted in Tower ${n+1}, layer ${s+1}.`),h=Rr(h),Je("queue_crop"),xi(),lt()}function Rn(){return h.beds.filter(n=>n.built).reduce((n,e)=>n+Math.max(0,e.capacity-e.plants.length),0)}function mf(){const n=h.beds.findIndex(e=>e.built&&e.plants.length<e.capacity);return n>=0?`bed-${n}`:null}function gb(){const n=Ve(),e=h.towers.findIndex(t=>t.built&&t.repaired&&Tr(t,n));return e>=0?`tower-${e}`:null}function Ko(n=null){const e=Ve(),t=h.beds.findIndex(i=>i.built&&i.plants.some(r=>r.readyAt<=e&&(!n||r.crop===n)));return t>=0?`bed-${t}`:null}function Cc(){const n=h.towers.findIndex((e,t)=>e.built&&e.repaired&&go(e,h.carry,t).length);return n>=0?`tower-${n}`:null}function vb(){const n=kn(h);if(n)return n.crop;const e=Zn(h);if(e?.id==="first-tower-plan")return"lettuce";if(e?.id==="split-crop-plan"){if(h.stats.byCropQueued.tomato<1)return"tomato";if(h.stats.byCropQueued.kale<1)return"kale"}const t=yo(e).find(r=>r.crop&&r.current<r.target);if(t)return t.crop;if(!e){const r=Xn(h).find(o=>o.id===h.homestead.pinned),s=r&&mo(h,r).find(o=>o.crop&&o.current<o.target);if(s&&h.unlockedCrops.includes(s.crop))return s.crop}return h.orders.find(r=>r.status==="waiting"&&h.unlockedCrops.includes(r.crop))?.crop||h.unlockedCrops[0]||"lettuce"}function is(){return h.carry?.kind!=="produce"||!h.market.built?!1:h.orders.some(n=>n.status!=="waiting"?!1:h.carry.items.filter(e=>e===n.crop).length>=n.amount)}function pi(){if(h.carry?.kind==="starter")return mf()||`tower-${h.carry.sourceTower}`;if(!Kn(h)&&!is())return"reservoir";if(h.hydro.lineClogged&&!is())return"filter";const n=kn(h);if(n){const p=Nn(h,n);if(!p.needed)return"market";if(!p.room||p.load)return"rack";const f=Ko(n.crop);if(f)return f;const g=h.towers.findIndex(v=>Tr(v,Ve(),n.crop));if(g>=0)return h.carry?.kind==="produce"?"rack":Rn()?`tower-${g}`:Ko()||`bed-${Math.max(0,h.beds.findIndex(v=>v.built&&v.plants.length))}`;if(!p.missing){const v=h.beds.findIndex(S=>S.plants.some(b=>b.crop===n.crop));if(v>=0)return`bed-${v}`;const m=h.towers.findIndex(S=>S.queue.some(b=>b.crop===n.crop));if(m>=0)return`tower-${m}`}if(h.carry?.kind==="produce")return"rack";const _=Cc(n.crop);if(_)return h.seeds[n.crop]?_:"vault"}if(h.carry?.kind==="produce"){if(is())return"market";if(h.carry.items.length<Ht(h).basket){const p=Ko();if(p)return p}return"rack"}const e=Ko();if(e)return e;const t=gb();if(t&&Rn()>0)return t;if(t&&Rn()<=0){const p=h.beds.findIndex(f=>f.built&&f.plants.length);if(p>=0)return`bed-${p}`}if(!Kn(h))return"reservoir";const i=Zn(h);if(i?.goals?.capacityUpgrade&&!su()){const p=uf().find(f=>h.coins>=f.cost);if(p)return p.id}if(i?.id==="launch-showcase"&&zi(h)?.available)return"market";const r={"repair-first-tower":0,"reopen-market":At.market,"build-second-tower":At.tower[1],"specialize-flow":0,"build-third-tower":At.tower[2],"build-pro-yard":At.tower[3]};if(i?.id in r&&h.coins>=r[i.id])return i.focus;const s=h.orders.filter(p=>p.status==="waiting");if(s.some(p=>h.rack[p.crop]>=p.amount))return"rack";const o=vb(),a=s.find(p=>p.crop===o),c=["first-tower-plan","split-crop-plan"].includes(i?.id),l=[];h.beds.forEach((p,f)=>p.plants.forEach(g=>{g.crop===o&&l.push({id:`bed-${f}`,readyAt:g.readyAt})})),h.towers.forEach((p,f)=>p.queue.forEach(g=>{g.crop===o&&l.push({id:`tower-${f}`,readyAt:g.readyAt??1/0})}));const u=i?.id==="first-grow-out"?Math.max(1,4-h.stats.harvested):a?.amount||1;if(!c&&l.length+h.rack[o]>=u&&l.length)return l.sort((p,f)=>p.readyAt-f.readyAt),l[0].id;if(h.market.built&&!c&&!a)return"market";const d=h.seeds[o]>0?Cc():null;if(d)return d;if(!Cc()){const p=h.towers.findIndex(f=>f.built&&f.queue.length);if(p>=0)return`tower-${p}`}return h.unlockedCrops.includes(o)?"vault":i?.focus||null}function so(n,e=null){const t=h.towers[n],i=e?t?.queue.find(r=>r.id===e):Tr(t,Ve(),kn(h)?.crop)||Tr(t,Ve());if(!(!i||i.readyAt===null||i.readyAt>Ve())){if(h.carry){He("Pip's hands are full.");return}if(Rn()<=0){He("Every bed is full. Harvest a finished crop before taking another starter."),rr("error");return}t.queue.splice(t.queue.indexOf(i),1),h.carry={kind:"starter",crop:i.crop,quality:i.quality,sourceTower:n,sourceLayer:i.layer,job:i},h=Rr(h),Ot("carry","pickup"),He(`${Le[i.crop].label} starter picked up. Carry it to an open bed.`),Je("pickup_starter"),lt()}}function Zi(n){if(h.carry?.kind!=="starter"||h.carry.sourceTower!==n)return;const e=h.towers[n];if(e.queue.length>=4){He("That tower queue is full. Transplant this starter into an open bed.");return}const t=h.carry.job||{id:crypto.randomUUID(),crop:h.carry.crop,queuedAt:Ve(),startedAt:Ve(),readyAt:Ve(),quality:h.carry.quality};t.startedAt=Ve(),t.readyAt=Ve(),t.layer=h.carry.sourceLayer??go(e)[0],e.queue.unshift(t),h.carry=null,Ot("return","return"),He(`${Le[t.crop].label} returned safely to Tower ${n+1}.`),Je("return_starter"),lt()}function oo(n){const e=h.beds[n];if(h.carry?.kind!=="starter"||!e?.built)return;if(e.plants.length>=e.capacity){He(`Grow Bed ${n+1} is full.`);return}const t=h.carry.crop,i=e.soilCharges>0,r=Ve();e.plants.push({id:crypto.randomUUID(),crop:t,plantedAt:r,readyAt:r+hs(t,"bed",h)*(e.soilCharges?.8:1)*1e3*no,quality:h.carry.quality}),h.carry=null,e.soilCharges=Math.max(0,e.soilCharges-1),h.stats.transplanted+=1,Li(h,"transplant",t),i&&Li(h,"enriched",t),h.xp+=3,Ot("transplant","transplant"),Vi(nt[`bed-${n}`],Number.parseInt(Le[t].color.slice(1),16)),He(`${Le[t].label} transplanted. It will finish in the garden.`),Je("transplant"),lt()}function ao(n,e=null){const t=h.beds[n];if(!t?.built)return;if(h.carry?.kind==="starter"){He("Transplant or return the tower starter before harvesting.");return}if((h.carry?.kind==="produce"?h.carry.items:[]).length>=Ht(h).basket){He("The harvest basket is full. Visit the market or Harvest Rack.");return}const r=t.plants.findIndex(o=>o.readyAt<=Ve()&&(!e||o.crop===e));if(r<0){He("No finished crop is ready in this bed yet.");return}const[s]=t.plants.splice(r,1);h.carry||(h.carry={kind:"produce",items:[]}),h.carry.items.push(s.crop),h.stats.harvested+=1,h.stats.harvested===1&&jn("first_harvest",{crop:s.crop}),h.stats.byCropHarvested[s.crop]+=1,Li(h,"harvest",s.crop),h.farm.scraps=Math.min(24,h.farm.scraps+1),h.xp+=Le[s.crop].xp,Ot("harvest","harvest"),Vi(nt[`bed-${n}`],Number.parseInt(Le[s.crop].color.slice(1),16)),He(`${Le[s.crop].label} added to the basket: ${h.carry.items.length}/${Ht(h).basket}.`),Je("harvest"),xi(),lt()}function co(n=null,e=Ht(h).basket){if(h.carry?.kind!=="produce")return;let t=0;h.carry.items=h.carry.items.filter(i=>(!n||i===n)&&t<e?(h.rack[i]+=1,t+=1,!1):!0),h.carry.items.length||(h.carry=null),Ot("store","rack"),He(`${t} finished crop${t===1?"":"s"} stored on the Harvest Rack.`),Je("rack_store"),lt()}function ba(n,e=1){if(!Le[n]||(e=Math.max(0,Math.min(Ht(h).basket,Math.floor(Number(e)||0))),h.carry?.kind==="starter"))return;const t=h.carry?.kind==="produce"?h.carry.items:[],i=Ht(h).basket-t.length,r=Math.min(i,e,h.rack[n]);if(!(r<=0)){h.carry||(h.carry={kind:"produce",items:[]});for(let s=0;s<r;s+=1)h.rack[n]-=1,h.carry.items.push(n);Ot("carry","pickup"),He(`${r} ${Le[n].label} loaded from the rack.`),Je("rack_load"),lt()}}function gf(n=0){const e=new Set(h.orders.map((a,c)=>a.slot??c));n=[0,1,2].find(a=>!e.has(a))??n;const t=h.orderSequence,i=Zx(h),r=Ri.filter(a=>a.name!==h.lastCustomer&&!h.orders.some(c=>c.status==="waiting"&&c.customer===a.name)),s=r[Math.floor(Math.random()*r.length)];h.lastCustomer=s.name;const o=h.chapter===0?1:h.chapter===1?t%3===0?1:2:h.market.level>1&&t%3===2?3:2;return h.orderSequence+=1,{id:crypto.randomUUID(),slot:n,customer:s.name,crop:i,amount:o,reward:Le[i].coinValue*o+8+h.market.level*2,xp:Le[i].xp*o+4,createdAt:Ve(),expiresAt:Ve()+(90+Math.random()*60+(o-1)*30)*1e3,status:"waiting"}}function vf(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId===e.id&&(h.selectedOrderId=null),ru(e,n,!1),e.status="cooldown",e.expiresAt=Ve()+2400,h.stats.rejectedOrders+=1,He(`${e.customer} heads home. Your produce stays safe on the rack for another visit.`),rr("order-reject"),Je("order_reject"),lt())}function _f(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId=e.id,He(`${e.customer}'s order is reserved while you grow.`),Je("order_wait"),lt())}function _b(n){return(h.carry?.kind==="produce"?h.carry.items.filter(t=>t===n).length:0)+h.rack[n]}function fs(){if(!h.market.built)return null;const n=kn(h);if(n)return n;const e=h.orders.filter(t=>t.status==="waiting");return e.find(t=>_b(t.crop)>=t.amount)||e.sort((t,i)=>t.expiresAt-i.expiresAt)[0]||null}function uu(n){const e=h.orders[n];if(!e||e.status!=="waiting")return;const t=h.carry?.kind==="produce"?h.carry.items:[];if(t.filter(s=>s===e.crop).length<e.amount){h.rack[e.crop]>0?He(`Load ${Le[e.crop].label} from the Harvest Rack, then return to ${e.customer}.`):He(`${e.customer} needs ${e.amount} ${Le[e.crop].label}. Only finished garden produce can be sold.`),rr("error");return}let r=e.amount;h.carry.items=t.filter(s=>s===e.crop&&r>0?(r-=1,!1):!0),h.carry.items.length||(h.carry=null),h.coins+=e.reward,h.xp+=e.xp,h.stats.sold+=e.amount,h.stats.orders+=1,h.stats.orders===1&&jn("first_sale"),h.stats.byCropSold[e.crop]+=e.amount,Li(h,"order",e.crop),Ot("sell","sale"),ru(e,n),Vi(ya(n),Number.parseInt(Le[e.crop].color.slice(1),16)),He(`${e.customer}: "${Ri.find(s=>s.name===e.customer)?.line}" +${e.reward} coins.`),h.selectedOrderId===e.id&&(h.selectedOrderId=null),e.status="cooldown",e.expiresAt=Ve()+2400,Je("order_complete"),hi.coins(e.reward,Oa(ya(n))),xi(),lt()}function Ma(n){const e=h.orders[n];if(!e||e.status!=="waiting"||h.carry?.kind!=="produce"||h.carry.items.filter(i=>i===e.crop).length<e.amount)return;h.selectedOrderId=e.id;const t=ya(n).add(new U(0,0,.8));if(Math.hypot(Ee.x-t.x,Ee.z-t.z)<=.5)return mt()&&ln(),uu(n);Kt("market"),Ee.target={x:t.x,z:t.z},On=e.id,Je("delivery_start"),He(`Taking ${e.amount} ${Le[e.crop].label} to ${e.customer}.`)}function xb(n){const e=h.orders.find(i=>i.id===n&&i.status==="waiting");if(!e)return;h.selectedOrderId=e.id,Je("order_selected");const t=vl(h,e);if(t.kind==="deliver")return Ma(h.orders.findIndex(i=>i.id===n));if(t.kind==="collect"){Kt("rack"),li=e.id;return}Kt(pi()||"vault")}function xf(n){const e=h.towers[n];if(!(!e?.built||e.irrigationUpgraded)){if(Tn(h,"drippers")){He(Tn(h,"drippers"));return}yi(At.queueUpgrade,()=>{e.irrigationUpgraded=!0},!0)&&(Ot("build","build"),He(`Tower ${n+1} has precision drippers. New starts grow 12% faster.`),xi(),lt())}}function yf(n){const e=h.beds[n];if(!e?.built||e.capacity>=4)return;if(Tn(h,"bed",n)){He(Tn(h,"bed",n));return}const t=At.bedUpgrade[n];yi(t,()=>{e.capacity+=1},!0)&&(Ot("build","build"),He(`Grow Bed ${n+1} now holds ${e.capacity} crops.`),xi(),lt())}function du(){if(!h.market.built)return;const n=zi(h);if(n){if(!n.available){He(n.reason||`You need ${n.cost-h.coins} more coins.`);return}yi(0,()=>{if(!Oh(h))throw new Error("Construction unavailable")})&&(Ot("build","build"),Vi(nt.market,16039245),He(`${n.label} complete. ${n.detail}`),xi(),lt())}}function bf(){Fy(h)&&(Ot("service","service"),He("Filter cleared. Full flow restored to the towers."),Je("feedline_cleared"),lt())}function Mf(n){By(h,n)&&(h.hydro.servicedAt=Ve(),h.stats.serviceActions+=1,Ot("service","service"),He(n==="water"?"Fresh starter batch filled. Circulate the IBC before feeding.":n==="mix"?"One evenly mixed batch supplies every tower.":"Delivery confirmed at every top outlet. The timer handles the short feeds."),Je("hydro_service"),xi(),lt())}function wf(n){!to[n]||h.cosmetics.owned.includes(n)||yi(At.cosmetics[n],()=>{h.cosmetics.owned.push(n),h.cosmetics.active.push(n)},!0)&&(Ot("build","build"),He(`${to[n].label} added to the homestead.`),lt())}function yb(n){h.cosmetics.owned.includes(n)&&(h.cosmetics.active.includes(n)?h.cosmetics.active=h.cosmetics.active.filter(e=>e!==n):h.cosmetics.active.push(n),Je("cosmetic_toggle"),lt())}function bb(n){if(!n)return"Farm complete";const e=yo(n);if(e.length)return`${e.filter(t=>t.current>=t.target).length} / ${e.length}`;switch(n.id){case"repair-first-tower":return h.towers[0].repaired?"1 / 1":"0 / 1";case"first-tower-plan":return`${Math.min(2,h.stats.byCropQueued.lettuce)} / 2`;case"first-grow-out":return`${Math.min(4,h.stats.harvested)} / 4`;case"reopen-market":return h.market.built?"1 / 1":"0 / 1";case"build-second-tower":return h.towers[1].built?"1 / 1":"0 / 1";case"specialize-flow":return h.hydro.systemLessonDone?"1 / 1":"0 / 1";case"split-crop-plan":return`${Math.min(1,h.stats.byCropQueued.tomato)+Math.min(1,h.stats.byCropQueued.kale)} / 2`;case"build-third-tower":return h.towers[2].built?"1 / 1":"0 / 1";case"build-pro-yard":return h.towers[3].built?"1 / 1":"0 / 1";default:return""}}function hu(){const n=Gh(h.xp);Ce.coins.textContent=h.coins.toLocaleString(),Ce.level.textContent=String(n.level),Ce.xp.textContent=n.needed?`${n.current} / ${n.needed}`:"MAX",Ce.xpFill.style.width=`${Math.round(n.ratio*100)}%`,Ce.chapter.previousElementSibling.textContent=h.campaignComplete?"Farm":"Chapter",Ce.chapter.textContent=h.campaignComplete?yr(h)?"Master":`${h.homestead.claimed.length}/18`:`${h.chapter+1} / 3`;const e=Zn(h),t=ds[h.chapter];Ce.objectiveChapter.textContent=h.campaignComplete?"Homestead":`Chapter ${t.number}`;const i=Xn(h).find(s=>s.id===h.homestead.pinned)||Xn(h)[0];Ce.objectiveTitle.textContent=e?.title||i?.title||(yr(h)?"Community requests continue":"Complete the crop mastery book"),Ce.objectiveProgress.textContent=e?bb(e):i?`${mo(h,i).filter(s=>s.current>=s.target).length}/${i.goals.length}`:`${Object.values(h.homestead.mastery).reduce((s,o)=>s+o,0)}/15 badges`,ee("#homesteadButton").hidden=!h.market.built,ee(".campaign-controls").classList.toggle("has-goals",h.market.built);const r=Xn(h).filter(s=>Pa(h,s)).length;ee("#homesteadButton").textContent=r?`Goals (${r})`:"Goals",Bn.hidden||ga.render(h),document.body.classList.toggle("high-contrast",h.settings.highContrast),Es()}function Es(){const n=fs(),e=!Bn.hidden||!vi.hidden||!Qn.hidden||!an.hidden||!bn.hidden||!cn.hidden;if(br.hidden=!n||e,br.classList.toggle("is-ready",!!(n&&Nn(h,n).needed===0)),!n)return;const t=Nn(h,n);Ce.marketChipCustomer.textContent=`${n.customer}${n.id===h.selectedOrderId?" / Reserved":" needs"}`,Ce.marketChipDemand.textContent=`${t.carried}/${n.amount} ${Le[n.crop].label} in basket${t.stored?` / ${t.stored} rack`:""}`}function Sf(){const n=Zn(h),e=ds[h.chapter];Ce.taskChapter.textContent=h.campaignComplete?"Campaign complete":`Chapter ${e.number}`,Ce.taskTitle.textContent=e.name,Ce.taskStory.textContent=n?.story||"Pip: The homestead is ready for every grow that comes next.",Ce.primaryTaskTitle.textContent=n?.title||"Keep the market growing",Ce.primaryTaskDetail.textContent=n?.detail||"Choose crops, improve the farm, and serve neighborhood orders.",Ce.primaryTaskReward.textContent=n?El(n.reward):"All chapter rewards earned";const t=An.slice(h.taskIndex).find(o=>o.reward.unlockCrop||o.reward.unlockPro),i=ee("#nextFarmUnlock");if(i.hidden=!t||h.campaignComplete,t){const o=t.reward.unlockPro?"Pro Pip and strawberry seeds":`${Le[t.reward.unlockCrop].label} seeds`;i.textContent=`Next unlock: ${o}. Milestone: ${t.title}.`}ee("#taskMilestones").innerHTML=yo(n).map(o=>{const a=o.current>=o.target;return`<li class="${a?"is-complete":""}"><span>${a?"&#10003; ":""}${o.label}</span><strong>${Math.min(o.current,o.target)} / ${o.target}</strong></li>`}).join("");const r=ee("#taskUpgradeOptions");r.hidden=!n?.goals?.capacityUpgrade||su(),r.innerHTML=r.hidden?"":uf().map(o=>`<button class="choice-button" data-upgrade-target="${o.id}"><strong>${o.label}</strong><small>${o.cost} coins</small></button>`).join(""),r.querySelectorAll("[data-upgrade-target]").forEach(o=>o.addEventListener("click",()=>Kt(o.dataset.upgradeTarget)));const s=An.filter(o=>o.chapter===h.chapter);Ce.chapterTaskList.innerHTML=s.map(o=>{const a=h.completedTasks.includes(o.id),c=o.id===n?.id;return`<div class="task-row ${a?"is-complete":""} ${c?"is-active":""}"><i>${a?"&#10003;":""}</i><span>${o.title}</span></div>`}).join("")}function Mb(){const n=Jn.filter(e=>h.rack[e]>0).map(e=>`${Le[e].code} ${h.rack[e]}`);return n.length?n.join(" / "):"Empty"}function Ef(){if(!h.carry)return"";if(h.carry.kind==="starter")return Le[h.carry.crop].label;const n=h.carry.items.reduce((e,t)=>(e[t]=(e[t]||0)+1,e),{});return Object.entries(n).map(([e,t])=>`${mt()?Le[e].label:Le[e].code} ${t}`).join(" / ")}function Tf(){if(Kh.hidden=!h.carry&&!h.farm.eggs,!h.carry){Ce.carryKind.textContent="Egg crate / market",Ce.carryContents.textContent=`${h.farm.eggs} eggs`;return}Ce.carryKind.textContent=h.carry.kind==="starter"?"Tower starter / one":`Harvest basket / ${h.carry.items.length} of ${Ht(h).basket}`,mt()&&(Ce.carryKind.textContent=h.carry.kind==="starter"?"To garden":`Basket ${h.carry.items.length}/${Ht(h).basket}`),Ce.carryContents.textContent=Ef()+(h.farm.eggs?` / ${h.farm.eggs} eggs`:"")}function ps(n){const e=Math.max(0,Math.ceil((n-Ve())/1e3));return e>59?`${Math.floor(e/60)}m ${e%60}s`:`${e}s`}function bo(){const n=ee("#sellFarmEggs");n.hidden=!h.farm.eggs;const e=Math.hypot(Ee.x-nt.market.x,Ee.z-nt.market.z)<3.6;n.textContent=e?`Sell ${h.farm.eggs} eggs / ${h.farm.eggs*8} coins`:`Take ${h.farm.eggs} eggs to the stand`,Ce.rackSummary.textContent=Mb();const t=ee("#orderMarketUpgrade"),i=zi(h);t.hidden=!i,t.disabled=!i?.available,i&&(t.textContent=`${i.label} / ${i.cost} coins${i.reason?` / ${i.reason}`:""}`);const r=kn(h)||fs(),s=mt(),o=ee("#mobileOrderAction"),a=ee("#mobileOrderDetails"),c=ee("#marketOptions");if(c.dataset.layout!==String(s)&&(c.open=!s,c.dataset.layout=String(s)),o.hidden=!s||!r,a.hidden=!s,s){const l=h.orders.filter(d=>d.status==="waiting"),u=r?vl(h,r):null;qt(Ce.orderList,l.length?`<div class="customer-picker" aria-label="Customers">${l.map(d=>{const p=Ri.find(f=>f.name===d.customer)||Ri[0];return`<button data-key="${d.id}" data-order-action="select" data-order-id="${d.id}" aria-label="${d.customer}: ${d.amount} ${Le[d.crop].label}" aria-pressed="${d.id===r?.id}" title="${d.customer}"><img class="customer-avatar" src="${Hd(p)}" alt=""><span>${d.customer}</span></button>`}).join("")}</div>${r?`<div class="mobile-order-summary"><strong>${r.amount} ${Le[r.crop].label}</strong><b>${r.reward} coins</b><span>Basket ${u.stock.carried}/${r.amount}</span><span>${r.id===h.selectedOrderId?"Reserved":"Visiting"}</span></div>`:""}`:'<p class="order-status">No customers just now. Your stored crops are safe.</p>'),qt(o,r?`<button class="primary-command" data-order-action="fulfill" data-order-id="${r.id}">${u.label}</button>`:""),qt(a,r?`<p>Rack ${u.stock.stored} / Growing ${u.stock.growing+u.stock.ready} / +${r.xp} XP</p><p>${r.id===h.selectedOrderId?"Staying until you deliver or release.":`Leaving in ${ps(r.expiresAt)}`}</p><div class="mobile-order-options"><button data-order-action="wait" data-order-id="${r.id}">${r.id===h.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${r.id}">Release customer</button></div>`:"")}else qt(Ce.orderList,h.orders.map((l,u)=>{const d=Ri.find(_=>_.name===l.customer)||Ri[0];if(l.status==="cooldown")return"";const p=vl(h,l),f=p.stock,g=r?.id===l.id;return`<article class="order-card ${g?"is-selected":""}" data-order="${u}" data-key="${l.id}">
      <button class="order-select" data-order-action="select" data-order-id="${l.id}" aria-pressed="${l.id===h.selectedOrderId}"><img class="customer-avatar" src="${Hd(d)}" alt=""><span><strong>${l.customer}</strong><span>${l.amount} ${Le[l.crop].label}</span></span><span class="order-reward">${l.reward} coins<small>+${l.xp} XP</small></span></button>
      <div class="order-detail" ${g?"":"hidden"}>
        <p class="stock-breakdown">Basket <b>${f.carried}/${l.amount}</b> <span>Rack <b>${f.stored}</b></span> <span>Growing <b>${f.growing+f.ready}</b></span></p>
        <p class="order-status">${h.carry?.kind==="starter"?"Starter needs its garden finish":f.needed===0?"Packed for delivery":f.room===0?"Make room on the rack; your crops stay safe":f.load?`${f.load} needed from the rack`:f.ready?`${f.ready} ready in the garden`:f.missing?`${f.missing} still to plant`:"Your crop is growing"}</p>
        <p>${l.id===h.selectedOrderId?"Reserved: staying until you deliver or release":`Leaving in ${ps(l.expiresAt)}`}</p>
        <div class="order-actions"><button class="fulfill" data-order-action="fulfill" data-order-id="${l.id}" data-index="${u}">${p.label}</button><button data-order-action="wait" data-order-id="${l.id}">${l.id===h.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${l.id}">Release</button></div>
      </div>
    </article>`}).join("")||'<p class="order-status">The stand is quiet. Another neighbor will stop by soon. Stored produce keeps until then.</p>');an.onclick=l=>{const u=l.target.closest("[data-order-action]");if(!u)return;const d=h.orders.findIndex(p=>p.id===u.dataset.orderId&&p.status==="waiting");d<0||(u.dataset.orderAction==="fulfill"&&xb(u.dataset.orderId),["select","wait"].includes(u.dataset.orderAction)&&(_f(d),xo()),s&&u.dataset.orderAction==="select"&&(an.querySelector(".order-scroll").scrollTop=0),u.dataset.orderAction==="reject"&&vf(d),bo())},an.hidden||(Ms.textContent=fu("market"))}function qn(n,e,t,i=!1){return`<button class="economy-command" data-command="${t}" ${i?"disabled":""}><span>${n}</span><strong>${e===0?"Free":`${e} coins`}</strong></button>`}function wb(n){const e=h.towers[n];if(Ce.interactionKicker.textContent="Hydro production",Ce.interactionTitle.textContent=`Tower ${n+1}`,!e.built){const c=At.tower[n];Ce.interactionSummary.textContent=`Four independent planting layers and Grow Bed ${n+1}.`,qt(on,qn(`Build Tower ${n+1}`,c,`build-tower-${n}`,h.coins<c));return}if(!e.repaired){Ce.interactionSummary.textContent="Repair the pump and flow line before planting.",qt(on,qn("Repair tower",0,`repair-tower-${n}`));return}const t=go(e,h.carry,n),i=[0,1,2,3].map(c=>{const l=e.queue.find(d=>d.layer===c);if(!l)return`<label class="queue-slot is-empty"><b>${c+1}</b><span>${t.includes(c)?"Empty layer":"Reserved for carried starter"}</span><input type="radio" name="towerLayer" value="${c}" aria-label="Plant layer ${c+1}" ${c===t[0]?"checked":""} ${t.includes(c)?"":"disabled"}></label>`;const u=l.readyAt!==null&&l.readyAt<=Ve();return`<div class="queue-slot" data-key="${l.id}"><b style="background:${Le[l.crop].accent}">${c+1}</b><span>${Le[l.crop].label}<small>${u?"Ready for the garden":ps(l.readyAt)}</small></span>${u?`<button class="storage-button" data-pickup-job="${l.id}" ${h.carry||!Rn()?"disabled":""}>Pick up</button>`:"<time>Growing</time>"}</div>`}).join(""),r=h.unlockedCrops.map(c=>`<button class="crop-button" data-queue-crop="${c}" ${!t.length||h.seeds[c]<=0?"disabled":""}><i style="background:${Le[c].accent}">${Le[c].code}</i><span>${Le[c].label}<small>${h.seeds[c]} seeds / ${Math.ceil(hs(c,"tower",h,e))}s</small></span></button>`).join(""),s=h.carry?.kind==="starter"&&h.carry.sourceTower===n?qn("Return starter to its layer",0,`return-${n}`):"",o=Tn(h,"drippers"),a=e.irrigationUpgraded?'<div class="status-strip"><span>Precision drippers</span><strong>Installed</strong></div>':qn(o||"Precision drippers / 12% faster",At.queueUpgrade,`upgrade-queue-${n}`,!!o||Ki()<At.queueUpgrade);Ce.interactionSummary.textContent=`${e.queue.length}/4 layers planted. One seed per layer; each crop grows independently.`,qt(on,`<div class="queue-list"><span>Layers / bottom to top</span>${i}</div>${s}<div class="crop-actions">${r}</div>${ou()}${a}`)}function Sb(n){const e=h.beds[n],t=e.plants.filter(l=>l.readyAt<=Ve());Ce.interactionKicker.textContent="Garden grow-out",Ce.interactionTitle.textContent=`Grow Bed ${n+1}`,Ce.interactionSummary.textContent=`${e.plants.length} of ${e.capacity} plots used. ${t.length} crop${t.length===1?"":"s"} ready to harvest.`;const i=e.plants.length?e.plants.map(l=>`<div class="queue-slot"><b style="background:${Le[l.crop].accent}">${Le[l.crop].code}</b><span>${Le[l.crop].label}<small>${l.readyAt<=Ve()?"Garden finished":"Finishing in soil"}</small></span><time>${l.readyAt<=Ve()?"Ready":ps(l.readyAt)}</time></div>`).join(""):`<div class="queue-slot is-empty"><b>1</b><span>Open garden plots<small>Tower starters finish here</small></span><time>${e.capacity}</time></div>`,r=h.carry?.kind==="starter"?qn("Transplant starter",0,`transplant-${n}`,e.plants.length>=e.capacity):"",s=[...new Set(t.map(l=>l.crop))].map(l=>`<button class="economy-command" data-harvest-crop="${l}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ht(h).basket?"disabled":""}><span>Harvest ${Le[l].label}</span><strong>${t.filter(u=>u.crop===l).length} ready</strong></button>`).join(""),o=Tn(h,"bed",n),a=e.capacity<4?qn(o||"Add garden plot",At.bedUpgrade[n],`upgrade-bed-${n}`,!!o||Ki()<At.bedUpgrade[n]):"",c=h.farm.owned.includes("composter")?`<div class="status-strip"><span>Enriched plantings left</span><strong>${e.soilCharges}/4</strong></div><button class="economy-command" data-enrich-bed="${n}" ${e.soilCharges||!h.farm.compost?"disabled":""}><span>Enrich soil / 1 compost</span><strong>${h.farm.compost} bags</strong></button>`:"";qt(on,`<div class="queue-list"><span>Garden crops</span>${i}</div>${r}${s}${c}${ou()}${a}`)}function Eb(){Ce.interactionKicker.textContent="Seed merchant and vault",Ce.interactionTitle.textContent="Bram's Seeds",Ce.interactionSummary.textContent=`${h.coins} coins / ${yl(h)} seeds per crop`;const n=["Quality seeds. Questionable hat.","I talk to my seedlings. They mostly ask for space.","Four layers, four seeds. The hat is extra."],e=h.unlockedCrops.map(t=>{const i=eu(h,t);return`<button class="crop-button" data-key="${t}" data-collect-crop="${t}" ${i.available?"":"disabled"}><i style="background:${Le[t].accent}">${Le[t].code}</i><span>${Le[t].label}<small>${h.seeds[t]}/${yl(h)} stored / ${i.amount} seeds for ${i.price} coins</small><small>${i.reason||(i.tutorial?"One free starter packet":"Buy packet")}</small></span></button>`}).join("");qt(on,`<p class="seed-merchant-quote">Bram: ${n[h.seedShop.purchases%n.length]}</p><div class="seed-stock">${e}</div>
    ${Vh(h)?'<button class="secondary-command" data-rescue-seeds>Emergency lettuce packet / free</button>':""}
    ${ou()}
    <button class="economy-command" data-expand-vault ${h.seedShop.expanded||!h.market.built||Tn(h,"vault")||h.coins<ha?"disabled":""}><span>${h.seedShop.expanded?"Expanded vault / 48 per crop":h.market.built?Tn(h,"vault")||"Expand vault / 48 per crop":"Vault expansion / open table first"}</span><strong>${h.seedShop.expanded?"Owned":ha+" coins"}</strong></button>`)}function Tb(){Ce.interactionKicker.textContent="Neighborhood market";const n=xs(h),e=zi(h);Ce.interactionTitle.textContent=n?Nh[n-1].label:"Pip's produce table";const t=e?`<p>Stage ${e.stage}/4: ${e.detail}</p>${qn(e.reason||`Build ${e.label}`,e.cost,n?"upgrade-market":"build-market",!e.available)}`:"<p>Farm market complete. Family baskets available.</p>";if(!h.market.built){Ce.interactionSummary.textContent=h.market.openingGrant?`${h.market.openingGrant} opening coins restored. Your crops and upgrades are safe.`:"Start small. Each new tower unlocks the next section of the stand.",qt(on,t);return}Ce.interactionSummary.textContent=`Stage ${n}/4. ${h.stats.orders} orders complete. Up to ${Zl(h)} visiting at once, with quiet spells between groups.`;const i=qn("Open order board",0,"open-orders"),r=h.carry?.kind==="produce"?`<div class="status-strip"><span>Basket</span><strong>${Ef()}</strong></div>`:"";qt(on,`${r}${i}${t}`)}function Ab(){Ce.interactionKicker.textContent="Produce storage",Ce.interactionTitle.textContent="Harvest Rack",Ce.interactionSummary.textContent=`${h.carry?.kind==="produce"?h.carry.items.length:0}/${Ht(h).basket} basket slots filled`;const n=h.carry?.kind==="produce"?qn("Stage basket",0,"stage-produce"):"",e=kn(h),t=e?Nn(h,e).load:0,i=t?`<button class="economy-command" data-load-needed="${e.id}"><span>Load ${t} ${Le[e.crop].label}</span><strong>For ${e.customer}</strong></button>`:"",r=Jn.filter(o=>h.rack[o]>0).map(o=>`<div class="rack-row" data-key="stock-${o}"><span>${Le[o].label}<small>${h.rack[o]} stored</small></span><input id="rack-qty-${o}" type="number" min="1" max="${Math.min(Ht(h).basket,h.rack[o])}" value="1" aria-label="${Le[o].label} quantity"><button class="storage-button" data-load-crop="${o}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ht(h).basket?"disabled":""}>Load</button></div>`).join(""),s=h.carry?.kind==="produce"?[...new Set(h.carry.items)].map(o=>`<button class="storage-button" data-store-crop="${o}">Store ${Le[o].label} (${h.carry.items.filter(a=>a===o).length})</button>`).join(""):"";qt(on,`${i}${n}<div class="storage-actions">${s}</div><div class="storage-group"><span>Stored produce</span>${r||"<span>Rack empty</span>"}</div>`)}function Cb(){const n=h.hydro;Ce.interactionKicker.textContent="Shared HydroPip system",Ce.interactionTitle.textContent="IBC reservoir",Ce.interactionSummary.textContent="One tank. One nutrient batch. No tower return line.";const e=n.water?n.batchMixed?"Mixed starter batch":"Awaiting circulation":"Empty",t=Kn(h)?n.lineClogged?"Check delivery line":jh(h,Ve())?"Short feed running":"Between timed feeds":"Waiting for mixed batch";qt(on,`<div class="hydro-readings">
    <label>Tank level <strong>${Math.round(n.water)}%</strong><meter min="0" max="100" low="30" high="70" optimum="100" value="${n.water}" aria-label="Reservoir water"></meter></label>
  </div><div class="queue-list">
    <div class="status-strip"><span>Batch ${n.batchNumber}</span><strong>${e}</strong></div>
    <div class="status-strip"><span>Mixing pump</span><strong>${n.mixChecked?"Circulation confirmed":"Check top discharge"}</strong></div>
    <div class="status-strip"><span>Feed pump</span><strong>${t}</strong></div>
    <div class="status-strip"><span>Tower delivery</span><strong>${n.flowChecked&&!n.lineClogged?"All outlets checked":"Check top outlets"}</strong></div>
  </div><div class="storage-actions">
    <button class="secondary-command" data-service="water" ${n.water>iu?"disabled":""}>Refill fresh batch</button>
    <button class="secondary-command" data-service="mix" ${n.water<=0||n.mixChecked?"disabled":""}>${n.mixChecked?"Mixing confirmed":n.batchMixed?"Check circulation":"Circulate batch"}</button>
    <button class="secondary-command" data-service="check" ${!Kn(h)||!n.mixChecked||n.flowChecked||n.lineClogged?"disabled":""}>Check tower delivery</button>
    ${n.lineClogged?'<button class="secondary-command" data-focus-object="filter">Inspect feed filter</button>':""}
  </div><details class="system-notes"><summary>HydroPip field notes</summary>
    <p>Two pumps have different jobs: one circulates within the IBC; the other sends brief feeds to the tops of the towers. Water moves through reusable 50/50 perlite and vermiculite. Excess drains away, not back to the tank.</p>
    <p>Let the tank level fall, then mix a fresh batch. Choose real nutrient strength from plant development at refill, not per tower. Check circulation, delivery and media before assuming more fertilizer is needed. pH and optional EC/TDS readings need crop and water context.</p>
    <p>This farm uses a starter batch for its tower-to-garden succession. Real HydroPip also supports tower harvests and moving suitable mature plants into raised beds. The four-layer towers, timers and refill threshold here are simplified for play, not build dimensions or a feeding prescription.</p>
    <a href="https://hydropip-pip-api.onrender.com/field-guide" target="_blank" rel="noopener noreferrer">Open the real HydroPip Field Guide</a>
  </details>`)}function Rb(){Ce.interactionKicker.textContent="Farm improvements",Ce.interactionTitle.textContent="Homestead Shop",Ce.interactionSummary.textContent=`${Ki()} spendable coins. Production, soil care, and livestock.`;const n=Object.entries(Fi).map(([i,r])=>{const s=$n(h.farm,i),o=Ql(h,i);return`<div class="shop-item"><strong>${r.label} / ${s}/2</strong><p>${r.detail}</p><button class="economy-command" data-buy-farm="${i}" ${!o||o.reason||Ki()<o.cost?"disabled":""}><span>${o?o.reason||`Build ${o.label}`:"Complete"}</span><strong>${o?`${o.cost} coins`:"Owned"}</strong></button></div>`}).join(""),e=h.beds.map((i,r)=>i.built&&i.capacity<4?qn(`Bed ${r+1}: ${Tn(h,"bed",r)||`add plot (${i.capacity}/4)`}`,At.bedUpgrade[r],`upgrade-bed-${r}`,!!Tn(h,"bed",r)||Ki()<At.bedUpgrade[r]):"").join("")+h.towers.map((i,r)=>i.built&&!i.irrigationUpgraded?qn(`Tower ${r+1}: ${Tn(h,"drippers")||"precision drippers"}`,At.queueUpgrade,`upgrade-queue-${r}`,!!Tn(h,"drippers")||Ki()<At.queueUpgrade):"").join(""),t=Object.entries(to).map(([i,r])=>{const s=h.cosmetics.owned.includes(i),o=h.cosmetics.active.includes(i);return`<button class="economy-command" ${s?`data-toggle-cosmetic="${i}"`:`data-buy-cosmetic="${i}"`} ${!s&&Ki()<At.cosmetics[i]?"disabled":""}><span>${s?`${o?"Hide":"Show"} ${r.label}`:r.label}</span><strong>${s?"Owned":`${At.cosmetics[i]} coins`}</strong></button>`}).join("");qt(on,`<div class="shop-list">${n}</div><div class="queue-list"><span>Production upgrades</span>${e||"<p>All production upgrades installed.</p>"}</div><div class="queue-list"><span>Decorations</span>${t}</div>`)}function Af(n){const e=Ql(h,n);if(e){if(e.reason||h.coins<e.cost){He(e.reason||`You need ${e.cost-h.coins} more coins.`);return}yi(0,()=>{if(!iy(h,n))throw new Error("Equipment unavailable")},!0)&&(Ot("build","build"),He(`${e.label} added to the farm.`),Je("farm_upgrade"),lt())}}function Ws(n,e=null){const t=h.coins;let i=!1;n==="compost"&&(i=ay(h,Ve(),no)),n==="feed"&&Le[e]&&(i=cy(h,e,Ve(),no)),n==="eggs"&&(i=ly(h)),n==="sell-eggs"&&Math.hypot(Ee.x-nt.market.x,Ee.z-nt.market.z)<3.6&&(i=uy(h)),n==="enrich"&&(i=dy(h,Number(e))),i&&(Li(h,n==="sell-eggs"?"egg-sale":n,e),Ot(n==="sell-eggs"?"sell":"service",n==="sell-eggs"?"sale":"service"),He({compost:"Compost batch started.",feed:`Fed the coop. ${$n(h.farm,"coop")} egg(s) will be ready soon.`,eggs:"Eggs collected; one coop clean-out added to compost scraps.","sell-eggs":"Fresh eggs sold at the stand.",enrich:"Bed enriched for its next four plantings."}[n]),Je(`farm_${n}`),lt(),n==="sell-eggs"&&hi.coins(h.coins-t,Oa(nt.market)))}function Pb(n){const e=h.farm;if(Ce.interactionKicker.textContent="Farm care",Ce.interactionTitle.textContent=Fi[n].label,n==="rainTank")Ce.interactionSummary.textContent="Collected rainwater supplements the main reservoir.",qt(on,`<div class="status-strip"><span>Tower water consumption</span><strong>${$n(e,n)*10}% lower</strong></div><p>Active while tower layers grow. Refill the main reservoir as usual.</p>`);else if(n==="composter")Ce.interactionSummary.textContent=`${e.scraps}/24 scraps / ${e.compost}/12 compost bags`,qt(on,`<div class="status-strip"><span>Compost batch</span><strong>${e.compostReadyAt?ps(e.compostReadyAt):"Ready to start"}</strong></div><button class="economy-command" data-farm-action="compost" ${e.compostReadyAt||e.scraps<2||e.compost>=12?"disabled":""}><span>Compost 2 scraps</span><strong>1 bag / ${$n(e,n)===2?40:60}s</strong></button><p>Harvest trimmings and coop clean-outs supply scraps. Apply finished compost at a garden bed.</p>`);else{Ce.interactionSummary.textContent=`${e.eggs}/12 eggs packed / ${e.eggsReady} in the nest`;const t=Jn.filter(i=>h.rack[i]>0);qt(on,`<div class="status-strip"><span>${$n(e,n)} hen(s)</span><strong>${e.coopReadyAt?ps(e.coopReadyAt):e.eggsReady?"Eggs ready":"Ready for feed"}</strong></div><div class="crop-actions">${t.map(i=>`<button class="crop-button" data-feed-hens="${i}" ${e.coopReadyAt||e.eggsReady?"disabled":""}><span>Feed 1 ${Le[i].label}<small>${h.rack[i]} on rack</small></span></button>`).join("")||"<p>No stored vegetables for feed.</p>"}</div><button class="economy-command" data-farm-action="eggs" ${!e.eggsReady||e.eggs+e.eggsReady>12?"disabled":""}><span>Collect ${e.eggsReady||$n(e,n)} egg(s)</span><strong>Pack for market</strong></button><p>Sell packed eggs at the Veg Stand for 8 coins each. Hens stay safe between feedings.</p>`)}}function Lb(){on.onclick=n=>{const e=n.target.closest("button");if(!e||e.disabled)return;const t=kt,i=JSON.stringify(h.carry),r=Number(t?.split("-")[1]);if(e.dataset.command){const s=e.dataset.command;if(s==="open-orders")return sr();s.startsWith("repair-tower-")&&au(Number(s.at(-1))),s.startsWith("build-tower-")&&cu(Number(s.at(-1))),s.startsWith("pickup-")&&so(Number(s.at(-1))),s.startsWith("return-")&&Zi(Number(s.at(-1))),s.startsWith("transplant-")&&oo(Number(s.at(-1))),s.startsWith("harvest-")&&ao(Number(s.at(-1))),s.startsWith("upgrade-queue-")&&xf(Number(s.at(-1))),s.startsWith("upgrade-bed-")&&yf(Number(s.at(-1))),s==="build-market"&&lu(),s==="upgrade-market"&&du(),s==="stage-produce"&&co()}if(e.dataset.queueCrop){const s=on.querySelector('[name="towerLayer"]:checked:not(:disabled)');pf(r,e.dataset.queueCrop,s?Number(s.value):null)}if(e.dataset.pickupJob&&so(r,e.dataset.pickupJob),e.dataset.buyFarm&&Af(e.dataset.buyFarm),e.dataset.farmAction&&Ws(e.dataset.farmAction),e.dataset.feedHens&&Ws("feed",e.dataset.feedHens),e.dataset.enrichBed!==void 0&&Ws("enrich",Number(e.dataset.enrichBed)),e.dataset.focusObject){Kt(e.dataset.focusObject);return}if(e.dataset.collectCrop&&df(e.dataset.collectCrop),e.dataset.rescueSeeds!==void 0&&hf(),e.dataset.expandVault!==void 0&&ff(),e.dataset.harvestCrop&&ao(r,e.dataset.harvestCrop),e.dataset.loadCrop&&ba(e.dataset.loadCrop,ee(`#rack-qty-${e.dataset.loadCrop}`).value),e.dataset.storeCrop&&co(e.dataset.storeCrop),e.dataset.loadNeeded){const s=kn(h);s&&ba(s.crop,Nn(h,s).load)}e.dataset.service&&Mf(e.dataset.service),e.dataset.flushLine!==void 0&&bf(),e.dataset.buyCosmetic&&wf(e.dataset.buyCosmetic),e.dataset.toggleCosmetic&&yb(e.dataset.toggleCosmetic),mt()&&/^(tower|bed)-/.test(t)&&i!==JSON.stringify(h.carry)?ln():cn.hidden&&Mo(t)}}function Mo(n,e=!0){if(Bn.hidden=!0,!(!n||!nt[n])&&!(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))){if(n==="market"&&h.market.built){kt="market",sr();return}kt=n,vi.hidden=!0,an.hidden=!0,Qn.hidden=!1,Es(),n.startsWith("tower-")?wb(Number(n.split("-")[1])):n.startsWith("bed-")?Sb(Number(n.split("-")[1])):n==="vault"?Eb():n==="market"?Tb():n==="rack"?Ab():n==="reservoir"?Cb():n==="filter"?(Ce.interactionKicker.textContent="Tower water supply",Ce.interactionTitle.textContent="Feedline filter",Ce.interactionSummary.textContent=h.hydro.lineClogged?"Restricted flow: tower growth at 50%. Garden crops are unaffected.":"Full flow to all connected towers.",qt(on,`<button class="economy-command" data-flush-line ${h.hydro.lineClogged?"":"disabled"}><span>${h.hydro.lineClogged?"Clear clog":"Filter clear"}</span><strong>No cost</strong></button>`)):n==="workshop"?Rb():["coop","composter","rainTank"].includes(n)&&Pb(n),Lb(),e&&xo(),Ms.textContent=fu(n)}}function ln(){Bn.hidden=!0,ee("#homesteadButton").setAttribute("aria-expanded","false"),vi.hidden=!0,Qn.hidden=!0,an.hidden=!0,ka.setAttribute("aria-expanded","false"),kt=null,Es(),xo()}function Fa(){h.market.built&&(ln(),ai=null,On=null,li=null,fn(),Bn.hidden=!1,ee("#homesteadButton").setAttribute("aria-expanded","true"),ga.render(h),Es())}function Cf(n,e){if(n==="close")return ln();if(n==="render")return ga.render(h);if(!h.market.built)return;if(n==="focus"){const o=Object.hasOwn(Fi,e)&&!h.farm.owned.includes(e)?"workshop":e;return ln(),Kt(o)}const t=h.coins,i=h.xp,r=yr(h);let s=!1;if(n==="project"&&(s=Xx(h,e)),n==="mastery"&&(s=Yx(h,e)),n==="request-accept"&&(s=jx(h,e)),n==="request-claim"&&(s=Jx(h)),n==="request-refresh"&&(s=Kx(h)),n==="request-abandon"&&h.homestead.request&&(h.homestead.request=null,h.homestead.requestSerial++,s=!0),n==="pin"&&Xn(h).some(o=>o.id===e&&o.chapter<=h.chapter)&&(h.homestead.pinned=e,s=!0),!!s){if(["project","mastery","request-claim"].includes(n)){Ot("celebrate","task-complete");const o=n==="project"&&{3:" Your basket now holds 7 crops.",6:" Seed packets now contain 6 seeds at the same price.",12:" Tower water use is now 10% lower.",18:" The harvest festival display is installed."}[h.homestead.claimed.length];He(yr(h)?"Master Grower! Your homestead and crop book are complete. New community requests await.":`Reward earned.${o||""}`)}if(Je(`homestead_${n}`),lt(),ga.render(h),["project","mastery","request-claim"].includes(n)){const o=!r&&yr(h),a=tr.find(d=>d.id===e),c=h.homestead.claimed.length,l=n==="project"&&{3:"Basket expanded to 7 crops!",6:"Six seeds in every packet!",12:"10% less tower water use!",18:"Harvest festival unlocked!"}[c],u=o?"Master Grower!":n==="project"?a.title:n==="mastery"?`${Le[e].label} mastery ${h.homestead.mastery[e]}/3`:"Community request complete!";hi.celebrate({title:u,detail:`+${h.coins-t} coins / +${h.xp-i} XP${l?`. ${l}`:""}${n==="mastery"?" / +2 seeds":""}`,major:o||n==="project"||n==="mastery"&&h.homestead.mastery[e]===3,rhythm:o||n==="project"&&c%3===0}),hi.coins(h.coins-t,Oa())}}}function Rf(){if(h.campaignComplete)return Fa();Bn.hidden=!0,Qn.hidden=!0,an.hidden=!0,vi.hidden=!1,ka.setAttribute("aria-expanded","true"),Es(),Sf()}function sr(){Bn.hidden=!0,h.market.built&&(kt="market",vi.hidden=!0,Qn.hidden=!0,an.hidden=!1,Es(),bo(),h.tutorial.marketSeen||(h.tutorial.marketSeen=!0,Je("market_seen")))}function fu(n=kt){if(mt()&&!kt&&h.carry?.kind==="starter")return Rn()?"Transplant":"Return";if(!kt&&is())return"Deliver";if(!n)return h.carry?.kind==="starter"&&Rn()<=0?"Return":h.carry?.kind==="produce"&&h.carry.items.length>=Ht(h).basket&&h.market.built?is()?"Deliver":"Stage":pi()?"Guide":"Inspect";const e=pi();if(n==="vault")return"Seeds";if(n==="market"){const t=kn(h)||fs();return h.market.built&&t&&Nn(h,t).needed===0?"Deliver":h.market.built?"Orders":"Build"}if(n==="rack")return h.carry?.kind==="produce"?"Stage":"Inspect";if(n==="reservoir")return"Service";if(n==="filter")return h.hydro.lineClogged?"Clear clog":"Inspect";if(n==="workshop")return"Shop";if(n.startsWith("tower-")){const t=Number(n.split("-")[1]),i=h.towers[t];return i.built?i.repaired?h.carry?.kind==="starter"&&h.carry.sourceTower===t?"Return":Tr(i,Ve())&&!h.carry?"Pick up":"Plan":"Repair":"Build"}if(n.startsWith("bed-")){const t=Number(n.split("-")[1]);return h.carry?.kind==="starter"&&h.beds[t].plants.length>=h.beds[t].capacity&&Rn()<=0?"Return":h.carry?.kind==="starter"?"Transplant":h.beds[t].plants.some(i=>i.readyAt<=Ve())?"Harvest":!kt&&e&&e!==n?"Guide":"Inspect"}return"Inspect"}function Pf(){if(Rt||!bn.hidden||!cn.hidden||!Hi.hidden||!bs.hidden)return;Lr();const n=!!kt,e=kt||Lf();if(mt()&&!n&&h.carry?.kind==="starter"){const i=mf()||`tower-${h.carry.sourceTower}`;return i===e?i.startsWith("bed-")?oo(Number(i.split("-")[1])):Zi(h.carry.sourceTower):Kt(i,!0)}if(!n&&is()){const i=kn(h),r=i&&Nn(h,i).needed===0?i:h.orders.find(s=>s.status==="waiting"&&Nn(h,s).needed===0);return Ma(h.orders.indexOf(r))}if(!e){if(h.carry?.kind==="starter"&&Rn()<=0){He("Beds are full, so Pip is returning this starter to its tower."),Kt(`tower-${h.carry.sourceTower}`);return}if(h.carry?.kind==="produce"&&h.carry.items.length>=Ht(h).basket&&h.market.built){He("Basket is full, so Pip is heading to the Harvest Rack."),Kt("rack");return}const i=pi();if(i){Kt(i,mt());return}Rf();return}if(e.startsWith("tower-")){const i=Number(e.split("-")[1]),r=h.towers[i];if(!r.built)return cu(i);if(!r.repaired)return au(i);if(h.carry?.kind==="starter"&&h.carry.sourceTower===i)return Zi(i);if(Tr(r,Ve())&&!h.carry)return so(i)}if(e.startsWith("bed-")){const i=Number(e.split("-")[1]);if(h.carry?.kind==="starter"&&h.beds[i].plants.length>=h.beds[i].capacity&&Rn()<=0)return Zi(h.carry.sourceTower);if(h.carry?.kind==="starter")return oo(i);if(h.beds[i].plants.some(r=>r.readyAt<=Ve())){const r=kn(h)?.crop;return ao(i,r&&h.beds[i].plants.some(s=>s.crop===r&&s.readyAt<=Ve())?r:null)}}if(e==="market"&&h.market.built){const i=kn(h)||fs();return i&&Nn(h,i).needed===0?Ma(h.orders.indexOf(i)):sr()}if(e==="market"&&!h.market.built)return lu();if(e==="rack"&&h.carry?.kind==="produce")return co();if(e==="filter"&&h.hydro.lineClogged)return bf();if(h.carry?.kind==="starter"&&Rn()<=0)return Zi(h.carry.sourceTower);const t=pi();if(!n&&t&&t!==e)return Kt(t,mt());Mo(e)}function Lf(n=1.8){let e=null,t=n;return Object.entries(nt).forEach(([i,r])=>{if(["coop","composter","rainTank"].includes(i)&&!h.farm.owned.includes(i)||i.startsWith("bed-")&&!h.beds[Number(i.split("-")[1])].built)return;const s=Math.hypot(Ee.x-r.x,Ee.z-r.z);s<t&&(e=i,t=s)}),e}function Kt(n,e=!1){if(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))return;const t=nt[n];t&&(On=null,li=null,ai=n,ma=e,Ee.target={x:t.x,z:t.z+(n==="market"?1.3:1.15)},ln(),!mt()&&He(`Pip is heading to ${n.startsWith("tower")?`Tower ${Number(n.at(-1))+1}`:n.startsWith("bed")?`Grow Bed ${Number(n.at(-1))+1}`:n==="vault"?"the Seed Vault":n==="market"?"the Veg Stand":n==="rack"?"the Harvest Rack":n==="reservoir"?"the reservoir":n==="filter"?"the feed filter":Object.hasOwn(Fi,n)?`the ${Fi[n].label}`:"the farm shop"}.`))}function Db(n){const e=Number(n.split("-")[1]);if(n.startsWith("tower-")){if(h.carry?.kind==="starter"&&h.carry.sourceTower===e)return Zi(e),!0;const t=h.towers[e].queue.filter(i=>i.readyAt!==null&&i.readyAt<=Ve());if(!h.carry&&t.length&&new Set(t.map(i=>i.crop)).size===1)return so(e),!0}if(n.startsWith("bed-")){if(h.carry?.kind==="starter")return oo(e),!0;const t=h.beds[e].plants.filter(r=>r.readyAt<=Ve()),i=kn(h)?.crop;if(t.length&&(new Set(t.map(r=>r.crop)).size===1||t.some(r=>r.crop===i)))return ao(e,t.some(r=>r.crop===i)?i:t[0].crop),!0}return n==="rack"&&h.carry?.kind==="produce"?(co(),!0):!1}function Ib(n){if(Rt)return;let e=(pn.right?1:0)-(pn.left?1:0)+pa.x,t=(pn.down?1:0)-(pn.up?1:0)+pa.z;if(Ee.target&&!e&&!t){const o=Ee.target.x-Ee.x,a=Ee.target.z-Ee.z,c=Math.hypot(o,a);if(c<.16){if(Ee.target=null,ai){const l=ai;ai=null;const u=ma;ma=!1;const d=On;On=null;const p=li;if(li=null,l==="market"&&d){const f=h.orders.findIndex(g=>g.id===d&&g.status==="waiting");f>=0?uu(f):He("That customer has left. Your produce is still in the basket."),cn.hidden&&!mt()&&sr()}else if(l==="rack"&&p){const f=h.orders.find(g=>g.id===p&&g.status==="waiting");f&&ba(f.crop,Nn(h,f).load),sr()}else{const f=l.startsWith("tower-")&&h.carry?.kind==="starter"&&h.carry.sourceTower===Number(l.split("-")[1])&&Rn()<=0;f&&Zi(h.carry.sourceTower),mt()&&(f||u&&Db(l))||Mo(l)}}}else e=o/c,t=a/c}else(e||t)&&(Ee.target=null,ai=null,On=null,li=null);const i=!!(e||t);if(i){const o=Math.hypot(e,t);e/=Math.max(1,o),t/=Math.max(1,o),Ee.x=It.clamp(Ee.x+e*Ee.speed*n,-13.8,13.8),Ee.z=It.clamp(Ee.z+t*Ee.speed*n,-8.5,8.5),Ee.pendingFacing=Math.atan2(e,t),Ee.direction=Math.abs(e)>Math.abs(t)?e>0?"east":"west":t>0?"south":"north",St.rotation.y=It.lerp(St.rotation.y,Ee.pendingFacing,Math.min(1,n*12))}St.position.x=Ee.x,St.position.z=Ee.z;const r=St.userData.parts;if(r){i&&(Ee.gaitPhase+=Ee.speed*n*1.65);const o=Math.sin(Ee.gaitPhase),a=Math.min(1,n*14);if(r.body.position.y=i?Math.abs(o)*.014:Math.sin(performance.now()*.0018)*.005,r.body.rotation.x=0,r.legs.forEach((c,l)=>{const u=l?-o:o;c.rotation.x=It.lerp(c.rotation.x,i?-u*.4:0,a),r.knees[l].rotation.x=It.lerp(r.knees[l].rotation.x,i?Math.max(0,-u)*.38:0,a),r.boots[l].rotation.x=-c.rotation.x-r.knees[l].rotation.x*.7;const d=r.arms[l];d.rotation.x=It.lerp(d.rotation.x,h.carry?-.75:i?u*.28:0,a),d.rotation.z=(l?1:-1)*(h.carry?-.08:.08),r.elbows[l].rotation.x=It.lerp(r.elbows[l].rotation.x,h.carry?-.65:-.08,a)}),Ee.actionTime>0){Ee.actionTime-=n;const c=Math.sin((1-Ee.actionTime/.72)*Math.PI);["plant","transplant","harvest"].includes(Ee.action)&&(r.body.rotation.x=c*.22),["repair","service","build"].includes(Ee.action)&&(r.arms[0].rotation.x=-1.2*c),Ee.action==="sell"&&(r.arms[1].rotation.x=-1.25*c),Ee.action==="celebrate"&&(r.arms[0].rotation.x=-1.5*c,r.arms[1].rotation.x=-1.5*c,r.body.position.y+=c*.13)}else r.body.rotation.x=0,Ee.action=i?"run":"idle"}const s=Lf();kt||(Ms.textContent=fu(s))}function Ba(n,e=!1){const t=mt(),i=new U(Ee.x*(t?.95:.55),.45,Ee.z*(t?.9:.45));t&&!an.hidden&&i.set(nt.market.x+.3,.45,nt.market.z+2.8),e||h.settings.reducedMotion?Jo.copy(i):Jo.lerp(i,1-Math.exp(-n*5));const s=t?It.clamp(xn/520,.45,1):1;Tt.position.copy(Jo).add(new U(7.7,13,14.3).multiplyScalar(s)),Tt.lookAt(Jo),Tt.zoom=e||h.settings.reducedMotion?Yn:It.lerp(Tt.zoom,Yn,1-Math.exp(-n*12));const o=t&&[Qn,an,vi,Bn].find(f=>!f.hidden),a=t&&Fn>620&&innerWidth>innerHeight,c=o&&a?o.getBoundingClientRect().width*.5:0,l=o&&!a?o.getBoundingClientRect().height*.4:0,u=e||h.settings.reducedMotion?1:1-Math.exp(-n*6),d=It.lerp(Tt.view?.enabled?Tt.view.offsetX:0,c,u),p=It.lerp(Tt.view?.enabled?Tt.view.offsetY:0,l,u);d>.1||p>.1?Tt.setViewOffset(Fn,xn,d,p,Fn,xn):Tt.clearViewOffset(),Tt.updateProjectionMatrix(),Tt.updateMatrixWorld()}function Ts(n){Yn=It.clamp(n,.7,mt()?1.3:1.55),ee("#zoomOut").disabled=Yn<=.7001,ee("#zoomIn").disabled=Yn>=(mt()?1.3:1.55)-1e-4}function Ub(){_t.updateMatrixWorld(!0);const n=tn.getBoundingClientRect(),e=[ka,io,Kh,br,ee(".camera-tools"),ee("#landscapeNotice"),Qn,an,vi,Bn,...mt()?[ee("#thumbstick"),Ms,ee("#homesteadButton")]:[]].filter(u=>!u.hidden&&u.getClientRects().length&&getComputedStyle(u).visibility!=="hidden").map(u=>{const d=u.getBoundingClientRect();return{left:d.left-n.left,top:d.top-n.top,right:d.right-n.left,bottom:d.bottom-n.top}}),t=pi(),i=new Set(Na()),r=new U;function s(u,d,p,f,g){const _={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(const v of[-p,p])for(const m of[0,f])for(const S of[-g,g]){r.set(u+v,m,d+S).project(Tt);const b=(r.x+1)*Fn/2,x=(1-r.y)*xn/2;_.left=Math.min(_.left,b),_.right=Math.max(_.right,b),_.top=Math.min(_.top,x),_.bottom=Math.max(_.bottom,x)}return _}Sl=s(Ee.x,Ee.z,.65,2.15,.45),e.push(Sl);for(const u of _t.children)u.userData.customerIndex!==void 0&&e.push(s(u.position.x,u.position.z,.45,2.2,.3));const o=[];for(const u of ro){const d=u.userData.worldLabel;u.getWorldPosition(r);const p=Math.hypot(r.x-Ee.x,r.z-Ee.z),f=-r.clone().applyMatrix4(Tt.matrixWorldInverse).z;if(r.project(Tt),u.visible=!1,u.labelElement.hidden=!0,p>(mt()?4.8:5.4)||f<=0||r.z<-1||r.z>1)continue;const g=(r.x+1)*Fn/2,_=(1-r.y)*xn/2,v={left:g-d.width/2,right:g+d.width/2,top:_-d.height/2,bottom:_+d.height/2};if(v.left<6||v.right>Fn-6||v.top<6||v.bottom>xn-6)continue;const m=u.userData.interactiveId;if(u.labelElement.classList.toggle("needs-attention",i.has(m)),!an.hidden&&m!=="market"&&m!=="rack")continue;const S=(m===kt?200:m===t?100:0)+(/ready/i.test(d.text)?20:0)-p;o.push({label:u,data:d,box:v,depth:f,priority:S})}o.sort((u,d)=>d.priority-u.priority);const a=(u,d)=>u.left<d.right+5&&u.right>d.left-5&&u.top<d.bottom+5&&u.bottom>d.top-5;let c=0;const l=new Set;for(const{label:u,data:d,box:p,depth:f}of o){const g=u.userData.interactiveId;if(c>=(mt()?3:5)||l.has(g))continue;const _=[0,-32,32].find(v=>{const m={...p,top:p.top+v,bottom:p.bottom+v};return m.top>=6&&m.bottom<=xn-6&&!e.some(S=>a(m,S))});_!==void 0&&(p.top+=_,p.bottom+=_,u.visible=!0,u.labelElement.hidden=!1,u.labelElement.style.transform=`translate(${Math.round(p.left)}px, ${Math.round(p.top)}px)`,d.bounds=p,e.push(p),l.add(g),c+=1)}}function kb(n){const e=Kn(h);zy(h,n,Ve(),(1-$n(h.farm,"rainTank")*.1)*Ht(h).water),e&&Oy(h,n,Ve())&&(He("Feed filter clogged. Check the delivery line before changing the nutrient batch.",6500),Je("feedline_clogged"))}function Nb(n=.5){if(!h.market.built)return;const e=h.orders.length;h.orders.forEach((r,s)=>{r.status==="waiting"&&r.expiresAt<=Ve()&&r.id!==h.selectedOrderId&&r.id!==On&&ru(r,s,!1)}),h.orders=h.orders.filter(r=>r.id===h.selectedOrderId||r.id===On||r.expiresAt>Ve());const t=Qx(h,n/no,gf);e!==h.orders.length||t?(Je(),lt()):an.hidden||bo()}function Df(n){const e=ds[n.chapter];Ce.chapterResultKicker.textContent=n.reward.campaignComplete?"Homestead foundations complete":`Chapter ${e.number} complete`,Ce.chapterResultTitle.textContent=n.reward.campaignComplete?"The Pro Yard is thriving.":n.chapter===0?"The Homestead is growing.":"Your three-tower farm is ready!",Ce.chapterResultSummary.textContent=n.reward.campaignComplete?"Your four-tower farm is open. Complete 18 homestead projects and earn 15 crop mastery badges to become a Master Grower.":n.chapter===0?"The first tower and Veg Stand are back in business.":"You expanded to three towers and served the neighborhood with tomato and kale. Next: build the Pro Yard.",Ce.chapterCoins.textContent=`+${n.reward.coins||0}`,Ce.chapterXp.textContent=`+${n.reward.xp||0}`,Ce.chapterUnlock.textContent=n.reward.campaignComplete?"Homestead projects":ds[n.chapter+1].shortName,ee("#continueChapter").textContent=n.reward.campaignComplete?"Grow the homestead":"Continue",cn.hidden=!1,Rt=!0,fn(),Di.stop(),hi.chapter(cn,!!n.reward.campaignComplete),ee("#continueChapter").focus(),Je("chapter_complete"),jn(n.reward.campaignComplete?"campaign_complete":"campaign_chapter_complete",{chapter:n.chapter+1,coins:h.coins,xp:h.xp})}function lt(){hu(),Sf(),Tf(),!Qn.hidden&&kt&&Mo(kt,!1),an.hidden||bo(),xo()}function ms(){Fn=Math.max(1,tn.clientWidth),xn=Math.max(1,tn.clientHeight);const n=_o?1:va==="desktop"?1.55:ys?1.25:1.15;yt.setPixelRatio(Math.max(1,Math.min(window.devicePixelRatio||1,n))),yt.setSize(Fn,xn,!1),Tt.aspect=Fn/xn,Tt.updateProjectionMatrix(),Ts(Yn),Ba(1,!0)}function fn(){Zh?.reset(),Object.keys(pn).forEach(n=>{pn[n]=!1}),ee(".campaign-controls").querySelectorAll("[data-move]").forEach(n=>n.classList.remove("is-active"))}function pu(n){if(Rt=n,document.body.classList.toggle("is-paused",Rt),Vy.hidden=!Rt,Rt){fn(),Di.stop(),Je("pause");return}Lr()}function If(n){const e=Math.min(.05,(n-Bd)/1e3||0);Bd=n,tn.clientWidth>0&&tn.clientHeight>0&&(tn.clientWidth!==Fn||tn.clientHeight!==xn)&&ms(),!Rt&&bn.hidden&&cn.hidden&&(Ib(e),kb(e),db(e),hb(e),Ba(e),n-zd>500&&(zd=n,h=Rr(h),Nb(),hu(),Tf(),cf()!==ef&&xo(),Ky(),!Qn.hidden&&kt&&Mo(kt,!1)),n-Qh>5e3&&Je(),oa&&n>oa&&(io.textContent=Zn(h)?.detail||"The homestead is ready for its next grow.",oa=0,io.classList.remove("is-active"))),tb(),Ub(),yt.render(fi,Tt),Ec+=1,n-Sc>=3e3&&(Ec/(n-Sc)*1e3<32&&va==="desktop"&&(va="adaptive",yt.shadowMap.enabled=!1,ei.castShadow=!1,yt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.15)),ms()),Sc=n,Ec=0),requestAnimationFrame(If)}function Ob(n){const e=yt.domElement.getBoundingClientRect();Ac.x=(n.clientX-e.left)/e.width*2-1,Ac.y=-((n.clientY-e.top)/e.height)*2+1,Tc.setFromCamera(Ac,Tt);const i=Tc.intersectObjects(_t.children,!0).find(o=>o.object.visible&&(o.object.userData.interactiveId||o.object.userData.instanceTargets?.[o.instanceId]));if(i){let o=i.object;for(;o&&!o.userData.orderId;)o=o.parent;return{id:i.object.userData.interactiveId||i.object.userData.instanceTargets[i.instanceId],orderId:o?.userData.orderId}}const r=new ji(new U(0,1,0),0),s=new U;return Tc.ray.intersectPlane(r,s)?{point:s}:null}function at(){const n=Zn(h),e=Py(h);return{version:h.version,chapter:h.chapter,taskIndex:h.taskIndex,taskId:n?.id||null,coins:h.coins,xp:h.xp,level:h.level,challengeUnlocked:h.challengeUnlocked,campaignComplete:h.campaignComplete,proPip:h.proPip,unlockedCrops:[...h.unlockedCrops],towersBuilt:h.towers.filter(t=>t.built).length,bedsBuilt:h.beds.filter(t=>t.built).length,marketBuilt:h.market.built,marketLevel:h.market.level,marketStage:xs(h),marketOffer:zi(h),visitorCapacity:Zl(h),milestones:yo(n),selectedObject:kt,selectedOrderId:h.selectedOrderId,saleAnimations:Vs.length,pendingDeliveryId:On,pendingRackOrderId:li,pipTarget:Ee.target,queueCapacities:h.towers.map(t=>t.queueCapacity),irrigationUpgrades:h.towers.map(t=>t.irrigationUpgraded),specializations:h.towers.map(t=>t.specialization),queueCount:h.towers.reduce((t,i)=>t+i.queue.length,0),gardenCount:h.beds.reduce((t,i)=>t+i.plants.length,0),seeds:{...h.seeds},rack:{...h.rack},carry:h.carry?JSON.parse(JSON.stringify(h.carry)):null,orders:h.orders.map(t=>({...t})),featuredOrder:fs()?{...fs()}:null,stats:JSON.parse(JSON.stringify(h.stats)),ledger:e,openBedCount:Rn(),taskDrawerOpen:!vi.hidden,interactionOpen:!Qn.hidden,orderDrawerOpen:!an.hidden,welcomeVisible:!bn.hidden,chapterResultVisible:!cn.hidden,guideTarget:pi(),actionLabel:Ms.textContent,marketChipVisible:!br.hidden,marketChipText:br.hidden?"":br.textContent.trim().replace(/\s+/g," "),paused:Rt,pipPosition:{x:Number(Ee.x.toFixed(2)),z:Number(Ee.z.toFixed(2))},pipDirection:Ee.direction,pipHeight:Number(new Bi().setFromObject(St).getSize(new U).y.toFixed(3)),leafEarCount:St.userData.parts?.leafEars?.length||0,activeHudCoverage:Fb(),coreTextMinimum:Bb(),savePresent:!!localStorage.getItem(vo),performanceTier:va,renderCalls:yt.info.render.calls,renderTriangles:yt.info.render.triangles}}function Fb(){const n=tn.getBoundingClientRect(),t=["#objectiveBar","#campaignMessage","#carryChip","#marketChip"].map(i=>ee(i)).filter(i=>i&&!i.hidden&&i.getClientRects().length).reduce((i,r)=>{const s=r.getBoundingClientRect(),o=Math.max(0,Math.min(s.right,n.right)-Math.max(s.left,n.left)),a=Math.max(0,Math.min(s.bottom,n.bottom)-Math.max(s.top,n.top));return i+o*a},0);return Number((t/Math.max(1,n.width*n.height)).toFixed(3))}function Bb(){const n=[...document.querySelectorAll("#objectiveTitle,#campaignMessage,#actionButton,#marketChip strong,#carryContents,#coinValue,#levelValue,#xpValue,#chapterValue,#interactionPanel>p,.crop-button span,.crop-button small,.queue-slot time,.status-strip,.economy-command span,.order-card h3,.order-reward,.order-actions button,.task-row,.primary-task p")].filter(e=>e.getClientRects().length);return Math.min(...n.map(e=>Number.parseFloat(getComputedStyle(e).fontSize)))}function zb(){h.towers.forEach(n=>n.queue.forEach((e,t)=>{e.startedAt=Ve()-1e3,e.readyAt=Ve()-1})),Je(),lt()}function Hb(){h.beds.forEach(n=>n.plants.forEach(e=>{e.plantedAt=Ve()-1e3,e.readyAt=Ve()-1})),Je(),lt()}function Vb(n=500){h.coins+=n,Je(),lt()}$y();lt();ms();bn.hidden=h.tutorial.welcomeSeen;h.tutorial.welcomeSeen?jn("campaign_resume",{chapter:h.chapter+1,task:Zn(h)?.id||"complete"}):Rt=!0;ka.addEventListener("click",()=>h.campaignComplete?Fa():vi.hidden?Rf():ln());ee("#homesteadButton").addEventListener("click",()=>Bn.hidden?Fa():ln());br.addEventListener("click",()=>h.market.built?sr():Kt("market"));ee("#orderMarketUpgrade").addEventListener("click",()=>{du(),bo()});ee("#sellFarmEggs").addEventListener("click",()=>{Math.hypot(Ee.x-nt.market.x,Ee.z-nt.market.z)>=3.6?Kt("market"):Ws("sell-eggs")});ee("#closeTasks").addEventListener("click",ln);ee("#closeInteraction").addEventListener("click",ln);ee("#closeOrders").addEventListener("click",ln);ee("#focusTaskButton").addEventListener("click",()=>Kt(pi()));Ms.addEventListener("click",Pf);ee("#beginCampaign").addEventListener("click",()=>{h.tutorial.welcomeSeen=!0,bn.hidden=!0,Rt=!1,Lr(),Je("campaign_start"),jn("campaign_start",{chapter:h.chapter+1,task:Zn(h)?.id}),He("Repair Tower 1 to make the first permanent improvement.")});ee("#pauseButton").addEventListener("click",()=>pu(!0));ee("#resumeButton").addEventListener("click",()=>pu(!1));let Uf=!1;ee("#settingsButton").addEventListener("click",()=>{Uf=Rt,Rt=!0,Di.stop(),fn(),Je("settings_open"),Hi.hidden=!1,ee("#highContrastSetting").checked=h.settings.highContrast,ee("#reducedMotionSetting").checked=h.settings.reducedMotion,ee("#musicSetting").value=String(Math.round(h.settings.musicVolume*100)),ee("#effectsSetting").value=String(Math.round(h.settings.effectsVolume*100)),Ce.musicValue.textContent=`${Math.round(h.settings.musicVolume*100)}%`,Ce.effectsValue.textContent=`${Math.round(h.settings.effectsVolume*100)}%`});function mu(){Gb.cancelImport(),Hi.hidden=!0,Rt=Uf,fn(),Je("settings")}ee("#closeSettings").addEventListener("click",mu);ee("#settingsDone").addEventListener("click",mu);ee("#retrySave").addEventListener("click",()=>Je("retry"));const Gb=Dy(()=>h,n=>{h=n});ee("#saveWarning").addEventListener("click",()=>ee("#settingsButton").click());ee("#highContrastSetting").addEventListener("change",n=>{h.settings.highContrast=n.target.checked,hu()});ee("#reducedMotionSetting").addEventListener("change",n=>{h.settings.reducedMotion=n.target.checked,n.target.checked&&hi.clearMotion()});ee("#musicSetting").addEventListener("input",n=>{h.settings.musicVolume=Number(n.target.value)/100,Ce.musicValue.textContent=`${n.target.value}%`,Ss()});ee("#effectsSetting").addEventListener("input",n=>{h.settings.effectsVolume=Number(n.target.value)/100,Ce.effectsValue.textContent=`${n.target.value}%`,Ss()});ee("#soundButton").addEventListener("click",()=>{h.settings.soundEnabled=h.settings.soundEnabled===!1,Ss(),Je("sound_toggle"),h.settings.soundEnabled&&Lr()});Ss();ee("#resetFarm").addEventListener("click",()=>{Hi.hidden=!0,bs.hidden=!1});ee("#cancelReset").addEventListener("click",()=>{bs.hidden=!0,Hi.hidden=!1});ee("#confirmReset").addEventListener("click",()=>{h=Ry(),location.reload()});ee("#continueChapter").addEventListener("click",()=>{cn.hidden=!0,hi.clearMotion(),Ns=null,Rt=!1,Ot("celebrate","task-complete"),Je("chapter_continue"),He(Zn(h)?.story||"The homestead is ready for its next grow."),h.campaignComplete&&Fa()});ee("#zoomOut").addEventListener("click",()=>Ts(Yn/1.15));ee("#zoomIn").addEventListener("click",()=>Ts(Yn*1.15));ee("#recenter").addEventListener("click",()=>{Ts(1),Ba(1,!0)});tn.addEventListener("wheel",n=>{if(Rt||!bn.hidden||!cn.hidden)return;n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?xn:1);Ts(Yn*Math.exp(-It.clamp(e,-160,160)*.0015))},{passive:!1});function kf(n){if(Rt||!bn.hidden||!cn.hidden)return;Lr();const e=Ob(n);if(e)if(e.orderId){const t=h.orders.findIndex(i=>i.id===e.orderId&&i.status==="waiting");t>=0&&(_f(t),Nn(h,h.orders[t]).needed===0?Ma(t):sr())}else e.id?Kt(e.id,mt()):e.point&&(ln(),ai=null,On=null,li=null,Ee.target={x:It.clamp(e.point.x,-13.8,13.8),z:It.clamp(e.point.z,-8.5,8.5)})}Zh=ky({canMove:()=>!Rt&&bn.hidden&&cn.hidden&&Hi.hidden&&bs.hidden,onStart:()=>{(kt||[Qn,an,vi,Bn].some(n=>!n.hidden))&&ln(),hi.dismiss(),fn(),Lr(),Ee.target=null,ai=null,On=null,li=null,ma=!1},onMove:(n,e)=>{pa.x=n*.88+e*.47,pa.z=e*.88-n*.47},onLayout:()=>{fn(),ms()},closePanels:ln});Ny({onOpen:()=>{const n=Rt;return Rt=!0,fn(),Di.stop(),Je("display_options"),()=>{Rt=n,fn()}},onExit:()=>{fn(),Di.stop(),Je("display_exit"),bn.hidden&&cn.hidden&&Hi.hidden&&bs.hidden&&(pu(!0),ee("#pauseReason").textContent="Your farm is saved. Resume when ready, or return to HydroPip.",ee("#resumeButton").focus())},onLeave:()=>{fn(),Di.stop(),Je("leave_game")},onResize:()=>{fn(),ms()}});const Ui=new Map;let $s=null,Tl=!1;tn.addEventListener("pointerdown",n=>{if(n.pointerType!=="touch")return kf(n);if(tn.setPointerCapture(n.pointerId),Ui.set(n.pointerId,{x:n.clientX,y:n.clientY,startX:n.clientX,startY:n.clientY}),Ui.size===2){const[e,t]=[...Ui.values()];$s={distance:Math.max(1,Math.hypot(e.x-t.x,e.y-t.y)),zoom:Yn},Tl=!0,Ee.target=null,ai=null,On=null,li=null}});tn.addEventListener("pointermove",n=>{const e=Ui.get(n.pointerId);if(e&&(e.x=n.clientX,e.y=n.clientY,Ui.size===2&&$s&&!Rt&&bn.hidden&&cn.hidden)){const[t,i]=[...Ui.values()];Ts($s.zoom*Math.hypot(t.x-i.x,t.y-i.y)/$s.distance)}});function Nf(n){const e=Ui.get(n.pointerId);e&&!Tl&&n.type==="pointerup"&&Math.hypot(n.clientX-e.startX,n.clientY-e.startY)<10&&kf(n),Ui.delete(n.pointerId),Ui.size||(Tl=!1,$s=null)}tn.addEventListener("pointerup",Nf);tn.addEventListener("pointercancel",Nf);document.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(e==="escape"){if(n.preventDefault(),!Hi.hidden){mu();return}ln();return}n.target instanceof HTMLElement&&n.target.matches("button,input,a,textarea,select")||(["arrowleft","arrowright","arrowup","arrowdown"," "].includes(e)&&n.preventDefault(),(e==="arrowleft"||e==="a")&&(pn.left=!0),(e==="arrowright"||e==="d")&&(pn.right=!0),(e==="arrowup"||e==="w")&&(pn.up=!0),(e==="arrowdown"||e==="s")&&(pn.down=!0),n.code==="Space"&&!n.repeat&&Pf())});document.addEventListener("keyup",n=>{const e=n.key.toLowerCase();(e==="arrowleft"||e==="a")&&(pn.left=!1),(e==="arrowright"||e==="d")&&(pn.right=!1),(e==="arrowup"||e==="w")&&(pn.up=!1),(e==="arrowdown"||e==="s")&&(pn.down=!1)});document.querySelectorAll("[data-move]").forEach(n=>{const e=n.dataset.move,t=i=>{pn[e]=i,n.classList.toggle("is-active",i)};n.addEventListener("pointerdown",i=>{i.preventDefault(),n.setPointerCapture(i.pointerId),t(!0)}),n.addEventListener("pointerup",()=>t(!1)),n.addEventListener("pointercancel",()=>t(!1)),n.addEventListener("pointerleave",()=>t(!1))});window.addEventListener("blur",fn);window.addEventListener("resize",ms);window.addEventListener("pagehide",()=>{fn(),Je("pagehide")});document.addEventListener("visibilitychange",()=>{document.hidden?(fn(),Je("visibility")):(h=Rr(nu()),Ss(),lt())});Jh&&(window.__HYDROPIP_CAMPAIGN_TEST__={homesteadAction:Cf,homesteadView(){return{...h.homestead,complete:yr(h),perks:Ht(h),active:Xn(h).map(n=>({id:n.id,ready:Pa(h,n),goals:mo(h,n)}))}},neighborhoodView(){return Qr.snapshot()},neighborhoodEvent(n,e=0){Qr.start(n);for(let t=0;t<e;t+=.05)Qr.update(.05,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});return Qr.snapshot()},farmEquipmentView(){const n=_t.getObjectByName("farm coop");return{owned:h.farm.owned,hens:(n?.userData.hens||[]).map(e=>({position:e.position.toArray(),turn:e.rotation.y}))}},layerScreenPoint(n,e){const t=nt[`tower-${n}`].clone();t.y=.52+e*.61+.4,t.x+=e%2?.16:-.16,t.z+=.29-e*.18,t.project(Tt);const i=yt.domElement.getBoundingClientRect();return{x:i.left+(t.x+1)*i.width/2,y:i.top+(1-t.y)*i.height/2}},farmLayout(){return{positions:Object.fromEntries(Object.entries(nt).map(([n,e])=>[n,{x:e.x,z:e.z}])),attention:Na(),labels:ro.filter(n=>n.visible).map(n=>({id:n.userData.interactiveId,text:n.userData.worldLabel.text,distance:Math.hypot(n.getWorldPosition(new U).x-Ee.x,n.getWorldPosition(new U).z-Ee.z)})),feedline:!!_t.getObjectByName("reservoir tower feedline"),lineClogged:h.hydro.lineClogged}},snapshot:at,reservoirView(){return my(_t.getObjectByName("water reservoir"))},setWater(n){return h.hydro.water=It.clamp(n,0,100),Je("test-water"),at()},viewState(){const n=yt.domElement.getBoundingClientRect(),e=Tt.projectionMatrix.elements;return{aspect:Tt.aspect,width:Fn,height:xn,canvasWidth:n.width,canvasHeight:n.height,bufferWidth:yt.domElement.width,bufferHeight:yt.domElement.height,squareRatio:e[0]*n.width/(e[5]*n.height),zoom:Tt.zoom,targetZoom:Yn,pipBounds:Sl,direction:Tt.getWorldDirection(new U).toArray(),labels:ro.filter(t=>t.visible).map(t=>({...t.userData.worldLabel,opacity:1}))}},customerView(){const n=new wh;return _t.children.filter(e=>e.userData.customerIndex!==void 0).map(e=>{const t=e.localToWorld(new U(0,1.65,0)).project(Tt);n.setFromCamera(new pe(t.x,t.y),Tt);let i=n.intersectObjects(_t.children,!0).find(r=>r.object.visible)?.object;for(;i&&i.parent!==_t;)i=i.parent;return{index:e.userData.customerIndex,x:(t.x+1)*Fn/2,y:(1-t.y)*xn/2,unoccluded:i===e}})},focusObject:Kt,characterPortrait(n=.22){const e=new zl;e.background=new ut(8894381),e.add(new Xl(16775142,6585696,1.3));const t=new Aa(16773330,1.5);t.position.set(-3,5,5),e.add(t);const i=Ph(h.proPip);i.rotation.y=n,e.add(i);const r=new vn(30,.8,.1,20);r.position.set(0,1.8,6),r.lookAt(0,1.23,0);const s=480,o=600,a=new ki(s,o);a.texture.colorSpace=en;const c=yt.getRenderTarget();try{yt.setRenderTarget(a),yt.render(e,r);const l=new Uint8Array(s*o*4);yt.readRenderTargetPixels(a,0,0,s,o,l);const u=document.createElement("canvas");u.width=s,u.height=o;const d=u.getContext("2d"),p=d.createImageData(s,o);for(let f=0;f<o;f++)p.data.set(l.subarray(f*s*4,(f+1)*s*4),(o-f-1)*s*4);return d.putImageData(p,0,0),u.toDataURL("image/png")}finally{yt.setRenderTarget(c),a.dispose(),Ii(i)}},characterRig(){St.updateMatrixWorld(!0);const n=St.userData.parts,e=t=>t.getWorldPosition(new U).toArray();return{handsAttached:n.hands.every((t,i)=>t.parent===n.elbows[i]&&n.elbows[i].parent===n.arms[i]),bootsAttached:n.boots.every((t,i)=>t.parent===n.knees[i]&&n.knees[i].parent===n.legs[i]),overalls:!!St.getObjectByName("farmer overalls"),growingSuit:n.farmerSuit.visible,faceFrame:!!St.getObjectByName("Pip head"),earPieces:n.headsetCups.length,eyeHighlights:n.eyes.length,emblem:!!St.getObjectByName("HydroPip shirt emblem"),belt:n.belt.visible,hands:n.hands.map(e),feet:n.boots.map(e),elbows:n.elbows.map(e),shoulders:n.arms.map(t=>t.rotation.toArray().slice(0,3)),bodyLift:n.body.position.y,leaves:n.leafEars.length,height:new Bi().setFromObject(St).getSize(new U).y}},renderedCrops(){const n=[];return _t.traverse(e=>{if(!e.userData.growthTiming)return;const t=e.children.filter(i=>i.geometry?.type==="ExtrudeGeometry");n.push({crop:e.userData.crop,location:e.userData.interactiveId,stage:e.userData.growthStage,scale:e.userData.growthScale??e.scale.x,visibleFruit:e.children.filter(i=>i.userData.ripeningFruit&&i.visible).reduce((i,r)=>i+(r.isInstancedMesh?r.count*r.userData.fruitPerInstance:1),0),instances:e.userData.plantingPlacements?.length||1,layer:e.userData.layer??null,jobId:e.userData.jobId??null,leaves:(e.userData.foliageMaterials||t.map(i=>i.material)).map(i=>({r:i.color.r,g:i.color.g,b:i.color.b}))})}),n},dismissWelcome(){return h.tutorial.welcomeSeen=!0,bn.hidden=!0,Rt=!1,Je(),at()},reset(){return h=Ua(),h.tutorial.welcomeSeen=!0,Rt=!1,Je(),lt(),at()},reloadState(){return h=Rr(nu()),lt(),at()},grantCoins:Vb,repairTower(n=0){return au(n),at()},buildTower(n){return cu(n),at()},buildMarket(){return lu(),at()},collectSeeds(n){return df(n),at()},rescueSeeds(){return hf(),at()},expandVault(){return ff(),at()},queueCrop(n,e,t=null){return pf(n,e,t),at()},matureTowers(){return zb(),at()},pickupStarter(n,e=null){return so(n,e),at()},returnStarter(n){return Zi(n),at()},transplant(n){return oo(n),at()},matureBeds(){return Hb(),at()},harvest(n,e=null){return ao(n,e),at()},stageProduce(){return co(),at()},loadRack(n,e=5){return ba(n,e),at()},upgradeQueue(n){return xf(n),at()},upgradeBed(n){return yf(n),at()},upgradeMarket(){return du(),at()},buyCosmetic(n){return wf(n),at()},buyFarmUpgrade(n){return Af(n),at()},farmAction(n,e){return Ws(n,e),at()},serviceHydro(n){return Mf(n),at()},forceOrders(n=["lettuce","basil","lettuce"]){return h.orders=n.slice(0,3).map((e,t)=>({...gf(t),slot:t,crop:e,amount:1,reward:Le[e].coinValue+10})),Je(),lt(),at()},grantProduce(n,e=1){if(!Le[n])return at();h.carry?.kind==="starter"&&(h.carry=null),h.carry||(h.carry={kind:"produce",items:[]});let t=0;for(let i=0;i<e&&h.carry.items.length<Ht(h).basket;i+=1)h.carry.items.push(n),t+=1;return h.stats.planted+=t,h.stats.transplanted+=t,h.stats.harvested+=t,h.stats.byCropQueued[n]+=t,h.stats.byCropHarvested[n]+=t,Je(),lt(),at()},grantStarter(n="lettuce",e=0){return Le[n]&&(h.carry={kind:"starter",crop:n,quality:1,sourceTower:e,sourceLayer:go(h.towers[e])[0],job:{id:crypto.randomUUID(),crop:n,queuedAt:Ve(),startedAt:Ve(),readyAt:Ve(),quality:1}},h.stats.planted+=1,h.stats.byCropQueued[n]+=1,Je(),lt()),at()},fillBeds(){return h.beds.filter(n=>n.built).forEach(n=>{for(;n.plants.length<n.capacity;)n.plants.push({id:crypto.randomUUID(),crop:"lettuce",plantedAt:Ve(),readyAt:Ve()+9999999,quality:1}),h.stats.planted+=1,h.stats.transplanted+=1,h.stats.byCropQueued.lettuce+=1}),Je(),lt(),at()},deliver(n){return uu(n),at()},reject(n){return vf(n),at()},openOrders(){return sr(),at()},showResult(n=11){return Df(An[Math.max(0,Math.min(An.length-1,n))]),at()},showcasePip(n="south"){const e={south:0,east:Math.PI/2,north:Math.PI,west:-Math.PI/2};return n in e&&(Ee.direction=n,Ee.pendingFacing=e[n],St.rotation.y=e[n],Ee.x=0,Ee.z=-.25,Ee.target=null,ai=null,ln(),Ba(1,!0)),at()},setTask(n){return h.taskIndex=Math.max(0,Math.min(An.length,n)),h.chapter=An[h.taskIndex]?.chapter??2,Je(),lt(),at()},save(){return Je("test"),at()},rawState(){return JSON.parse(JSON.stringify(h))}});window.__HYDROPIP_CAMPAIGN_READY__=!0;requestAnimationFrame(If);
