(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Tl="179",Vf=0,Mu=1,Gf=2,zd=1,Hd=2,Ai=3,tr=0,pn=1,vn=2,Zi=0,es=1,bu=2,wu=3,Su=4,Wf=5,mr=100,$f=101,qf=102,Xf=103,Yf=104,jf=200,Jf=201,Kf=202,Zf=203,Rc=204,Pc=205,Qf=206,ep=207,tp=208,np=209,ip=210,rp=211,sp=212,op=213,ap=214,Lc=0,Dc=1,Ic=2,rs=3,Uc=4,Nc=5,kc=6,Oc=7,Vd=0,cp=1,lp=2,Qi=0,up=1,dp=2,hp=3,Gd=4,fp=5,pp=6,mp=7,Wd=300,ss=301,os=302,Fc=303,Bc=304,wa=306,aa=1e3,vr=1001,zc=1002,Cn=1003,gp=1004,Eo=1005,ri=1006,Va=1007,_r=1008,ui=1009,$d=1010,qd=1011,Ws=1012,Al=1013,Mr=1014,si=1015,co=1016,Cl=1017,Rl=1018,$s=1020,Xd=35902,Yd=1021,jd=1022,Wn=1023,qs=1026,Xs=1027,Pl=1028,Ll=1029,Jd=1030,Dl=1031,Il=1033,Zo=33776,Qo=33777,ea=33778,ta=33779,Hc=35840,Vc=35841,Gc=35842,Wc=35843,$c=36196,qc=37492,Xc=37496,Yc=37808,jc=37809,Jc=37810,Kc=37811,Zc=37812,Qc=37813,el=37814,tl=37815,nl=37816,il=37817,rl=37818,sl=37819,ol=37820,al=37821,na=36492,cl=36494,ll=36495,Kd=36283,ul=36284,dl=36285,hl=36286,vp=3200,_p=3201,Ul=0,xp=1,ji="",Qt="srgb",as="srgb-linear",ca="linear",wt="srgb",Ir=7680,Eu=519,yp=512,Mp=513,bp=514,Zd=515,wp=516,Sp=517,Ep=518,Tp=519,Tu=35044,Au="300 es",oi=2e3,la=2001;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cu=1234567;const Ns=Math.PI/180,Ys=180/Math.PI;function Cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Nl(n,e){return(n%e+e)%e}function Ap(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Cp(n,e,t){return n!==e?(t-n)/(e-n):0}function ks(n,e,t){return(1-t)*n+t*e}function Rp(n,e,t,i){return ks(n,e,1-Math.exp(-t*i))}function Pp(n,e=1){return e-Math.abs(Nl(n,e*2)-e)}function Lp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Dp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ip(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Up(n,e){return n+Math.random()*(e-n)}function Np(n){return n*(.5-Math.random())}function kp(n){n!==void 0&&(Cu=n);let e=Cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Op(n){return n*Ns}function Fp(n){return n*Ys}function Bp(n){return(n&n-1)===0&&n!==0}function zp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vp(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),p=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*p,a*l);break;case"YZY":n.set(c*p,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*p,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const It={DEG2RAD:Ns,RAD2DEG:Ys,generateUUID:Cr,clamp:lt,euclideanModulo:Nl,mapLinear:Ap,inverseLerp:Cp,lerp:ks,damp:Rp,pingpong:Pp,smoothstep:Lp,smootherstep:Dp,randInt:Ip,randFloat:Up,randFloatSpread:Np,seededRandom:kp,degToRad:Op,radToDeg:Fp,isPowerOfTwo:Bp,ceilPowerOfTwo:zp,floorPowerOfTwo:Hp,setQuaternionFromProperEuler:Vp,normalize:un,denormalize:jr};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const p=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==p||l!==f||u!==g){let v=1-a;const m=c*p+l*f+u*g+d*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),A=Math.atan2(P,m*S);v=Math.sin(v*A)/P,a=Math.sin(a*A)/P}const x=a*S;if(c=c*v+p*x,l=l*v+f*x,u=u*v+g*x,d=d*v+_*x,v===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*f-l*p,e[t+1]=c*g+u*p+l*d-a*f,e[t+2]=l*g+u*f+a*p-c*d,e[t+3]=u*g-a*d-c*p-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"YXZ":this._x=p*u*d+l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"ZXY":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d-p*f*g;break;case"ZYX":this._x=p*u*d-l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d+p*f*g;break;case"YZX":this._x=p*u*d+l*f*g,this._y=l*f*d+p*u*g,this._z=l*u*g-p*f*d,this._w=l*u*d-p*f*g;break;case"XZY":this._x=p*u*d-l*f*g,this._y=l*f*d-p*u*g,this._z=l*u*g+p*f*d,this._w=l*u*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],p=i+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new U,Ru=new lo;class rt{constructor(e,t,i,r,s,o,a,c,l){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],p=i[2],f=i[5],g=i[8],_=r[0],v=r[3],m=r[6],S=r[1],y=r[4],x=r[7],P=r[2],A=r[5],L=r[8];return s[0]=o*_+a*S+c*P,s[3]=o*v+a*y+c*A,s[6]=o*m+a*x+c*L,s[1]=l*_+u*S+d*P,s[4]=l*v+u*y+d*A,s[7]=l*m+u*x+d*L,s[2]=p*_+f*S+g*P,s[5]=p*v+f*y+g*A,s[8]=p*m+f*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,p=a*c-u*s,f=l*s-o*c,g=t*d+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=p*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new rt;function Qd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gp(){const n=ua("canvas");return n.style.display="block",n}const Pu={};function ts(n){n in Pu||(Pu[n]=!0,console.warn(n))}function Wp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Lu=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){const n={enabled:!0,workingColorSpace:as,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=ns(r.r),r.g=ns(r.g),r.b=ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ji?ca:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[as]:{primaries:e,whitePoint:i,transfer:ca,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:Lu,fromXYZ:Du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const gt=$p();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ur;class qp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=ua("canvas")),Ur.width=e.width,Ur.height=e.height;const r=Ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xp=0;class kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($a(r[o].image)):s.push($a(r[o]))}else s=$a(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;const qa=new U;class rn extends ps{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=vr,r=vr,s=ri,o=_r,a=Wn,c=ui,l=rn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Cr(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Wd;rn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],p=c[1],f=c[5],g=c[9],_=c[2],v=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+v)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,P=(m+1)/2,A=(u+p)/4,L=(d+_)/4,I=(g+v)/4;return y>x&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=L/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=I/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=L/s,r=I/s),this.set(i,r,s,t),this}let S=Math.sqrt((v-g)*(v-g)+(d-_)*(d-_)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(v-g)/S,this.y=(d-_)/S,this.z=(p-u)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jp extends ps{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new rn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new kl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends jp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class eh extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jp extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Ao.subVectors(this.max,Ts),Nr.subVectors(e.a,Ts),kr.subVectors(e.b,Ts),Or.subVectors(e.c,Ts),Vi.subVectors(kr,Nr),Gi.subVectors(Or,kr),ar.subVectors(Nr,Or);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-ar.z,ar.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,ar.z,0,-ar.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-ar.y,ar.x,0];return!Xa(t,Nr,kr,Or,Ao)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Nr,kr,Or,Ao))?!1:(Co.crossVectors(Vi,Gi),t=[Co.x,Co.y,Co.z],Xa(t,Nr,kr,Or,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new U,new U,new U,new U,new U,new U,new U,new U],zn=new U,To=new Fi,Nr=new U,kr=new U,Or=new U,Vi=new U,Gi=new U,ar=new U,Ts=new U,Ao=new U,Co=new U,cr=new U;function Xa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){cr.fromArray(n,s);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),c=e.dot(cr),l=t.dot(cr),u=i.dot(cr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Kp=new Fi,As=new U,Ya=new U;class uo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(As,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Ya)),this.expandByPoint(As.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new U,ja=new U,Ro=new U,Wi=new U,Ja=new U,Po=new U,Ka=new U;class th{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=Wi.dot(this.direction),c=-Wi.dot(Ro),l=Wi.lengthSq(),u=Math.abs(1-o*o);let d,p,f,g;if(u>0)if(d=o*c-a,p=o*a-c,g=s*u,d>=0)if(p>=-g)if(p<=g){const _=1/u;d*=_,p*=_,f=d*(d+o*p+2*a)+p*(o*d+p+2*c)+l}else p=s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+p*(p+2*c)+l);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ja).addScaledVector(Ro,p),f}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,s){Ja.subVectors(t,e),Po.subVectors(i,e),Ka.crossVectors(Ja,Po);let o=this.direction.dot(Ka),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const c=a*this.direction.dot(Po.crossVectors(Wi,Po));if(c<0)return null;const l=a*this.direction.dot(Ja.cross(Wi));if(l<0||c+l>o)return null;const u=-a*Wi.dot(Ka);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,v){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,v)}set(e,t,i,r,s,o,a,c,l,u,d,p,f,g,_,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=p,m[3]=f,m[7]=g,m[11]=_,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,f=c*d,g=l*u,_=l*d;t[0]=p+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,f=c*d,g=l*u,_=l*d;t[0]=p-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,f=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-f,t[8]=p*l+_,t[1]=c*d,t[5]=_*l+p,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-p*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+g,t[10]=p-_*d}else if(e.order==="XZY"){const p=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=p*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zp,e,Qp)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),$i.crossVectors(i,Sn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),$i.crossVectors(i,Sn)),$i.normalize(),Lo.crossVectors(Sn,$i),r[0]=$i.x,r[4]=Lo.x,r[8]=Sn.x,r[1]=$i.y,r[5]=Lo.y,r[9]=Sn.y,r[2]=$i.z,r[6]=Lo.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],p=i[9],f=i[13],g=i[2],_=i[6],v=i[10],m=i[14],S=i[3],y=i[7],x=i[11],P=i[15],A=r[0],L=r[4],I=r[8],b=r[12],w=r[1],R=r[5],C=r[9],k=r[13],N=r[2],O=r[6],B=r[10],q=r[14],G=r[3],oe=r[7],me=r[11],Ae=r[15];return s[0]=o*A+a*w+c*N+l*G,s[4]=o*L+a*R+c*O+l*oe,s[8]=o*I+a*C+c*B+l*me,s[12]=o*b+a*k+c*q+l*Ae,s[1]=u*A+d*w+p*N+f*G,s[5]=u*L+d*R+p*O+f*oe,s[9]=u*I+d*C+p*B+f*me,s[13]=u*b+d*k+p*q+f*Ae,s[2]=g*A+_*w+v*N+m*G,s[6]=g*L+_*R+v*O+m*oe,s[10]=g*I+_*C+v*B+m*me,s[14]=g*b+_*k+v*q+m*Ae,s[3]=S*A+y*w+x*N+P*G,s[7]=S*L+y*R+x*O+P*oe,s[11]=S*I+y*C+x*B+P*me,s[15]=S*b+y*k+x*q+P*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],p=e[10],f=e[14],g=e[3],_=e[7],v=e[11],m=e[15];return g*(+s*c*d-r*l*d-s*a*p+i*l*p+r*a*f-i*c*f)+_*(+t*c*f-t*l*p+s*o*p-r*o*f+r*l*u-s*c*u)+v*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+m*(-r*a*u-t*c*d+t*a*p+r*o*d-i*o*p+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],p=e[10],f=e[11],g=e[12],_=e[13],v=e[14],m=e[15],S=d*v*l-_*p*l+_*c*f-a*v*f-d*c*m+a*p*m,y=g*p*l-u*v*l-g*c*f+o*v*f+u*c*m-o*p*m,x=u*_*l-g*d*l+g*a*f-o*_*f-u*a*m+o*d*m,P=g*d*c-u*_*c-g*a*p+o*_*p+u*a*v-o*d*v,A=t*S+i*y+r*x+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=S*L,e[1]=(_*p*s-d*v*s-_*r*f+i*v*f+d*r*m-i*p*m)*L,e[2]=(a*v*s-_*c*s+_*r*l-i*v*l-a*r*m+i*c*m)*L,e[3]=(d*c*s-a*p*s-d*r*l+i*p*l+a*r*f-i*c*f)*L,e[4]=y*L,e[5]=(u*v*s-g*p*s+g*r*f-t*v*f-u*r*m+t*p*m)*L,e[6]=(g*c*s-o*v*s-g*r*l+t*v*l+o*r*m-t*c*m)*L,e[7]=(o*p*s-u*c*s+u*r*l-t*p*l-o*r*f+t*c*f)*L,e[8]=x*L,e[9]=(g*d*s-u*_*s-g*i*f+t*_*f+u*i*m-t*d*m)*L,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*m+t*a*m)*L,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*L,e[12]=P*L,e[13]=(u*_*r-g*d*r+g*i*p-t*_*p-u*i*v+t*d*v)*L,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*v-t*a*v)*L,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*p+t*a*p)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,p=s*l,f=s*u,g=s*d,_=o*u,v=o*d,m=a*d,S=c*l,y=c*u,x=c*d,P=i.x,A=i.y,L=i.z;return r[0]=(1-(_+m))*P,r[1]=(f+x)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(f-x)*A,r[5]=(1-(p+m))*A,r[6]=(v+S)*A,r[7]=0,r[8]=(g+y)*L,r[9]=(v-S)*L,r[10]=(1-(p+_))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const l=1/s,u=1/o,d=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,t.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===oi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===la)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),p=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===oi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===la)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fr=new U,Hn=new Mt,Zp=new U(0,0,0),Qp=new U(1,1,1),$i=new U,Lo=new U,Sn=new U,Iu=new Mt,Uu=new lo;class di{constructor(e=0,t=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],p=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let em=0;const Nu=new U,Br=new lo,Si=new Mt,Do=new U,Cs=new U,tm=new U,nm=new lo,ku=new U(1,0,0),Ou=new U(0,1,0),Fu=new U(0,0,1),Bu={type:"added"},im={type:"removed"},zr={type:"childadded",child:null},Za={type:"childremoved",child:null};class kt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new U,t=new di,i=new lo,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new rt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Do.copy(e):Do.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Cs,Do,this.up):Si.lookAt(Do,Cs,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Si),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bu),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(im),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bu),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new U(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new U,Ei=new U,Qa=new U,Ti=new U,Hr=new U,Vr=new U,zu=new U,ec=new U,tc=new U,nc=new U,ic=new zt,rc=new zt,sc=new zt;class Gn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),Ei.subVectors(i,t),Qa.subVectors(e,t);const o=Vn.dot(Vn),a=Vn.dot(Ei),c=Vn.dot(Qa),l=Ei.dot(Ei),u=Ei.dot(Qa),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const p=1/d,f=(l*c-a*u)*p,g=(o*u-a*c)*p;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return ic.setScalar(0),rc.setScalar(0),sc.setScalar(0),ic.fromBufferAttribute(e,t),rc.fromBufferAttribute(e,i),sc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ic,s.x),o.addScaledVector(rc,s.y),o.addScaledVector(sc,s.z),o}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),Ei.subVectors(e,t),Vn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Vn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Hr.subVectors(r,i),Vr.subVectors(s,i),ec.subVectors(e,i);const c=Hr.dot(ec),l=Vr.dot(ec);if(c<=0&&l<=0)return t.copy(i);tc.subVectors(e,r);const u=Hr.dot(tc),d=Vr.dot(tc);if(u>=0&&d<=u)return t.copy(r);const p=c*d-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Hr,o);nc.subVectors(e,s);const f=Hr.dot(nc),g=Vr.dot(nc);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Vr,a);const v=u*g-f*d;if(v<=0&&d-u>=0&&f-g>=0)return zu.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(zu,a);const m=1/(v+_+p);return o=_*m,a=p*m,t.copy(i).addScaledVector(Hr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function oc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=Nl(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=oc(o,s,e+1/3),this.g=oc(o,s,e),this.b=oc(o,s,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return gt.workingToColorSpace(nn.copy(this),e),Math.round(lt(nn.r*255,0,255))*65536+Math.round(lt(nn.g*255,0,255))*256+Math.round(lt(nn.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Qt){gt.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Io);const i=ks(qi.h,Io.h,t),r=ks(qi.s,Io.s,t),s=ks(qi.l,Io.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ct;ct.NAMES=nh;let rm=0;class ms extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=es,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Pc,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rc&&(i.blendSrc=this.blendSrc),this.blendDst!==Pc&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $t extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new U,Uo=new he;let sm=0;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tu,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tu&&(e.usage=this.usage),e}}class ih extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rh extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let om=0;const Dn=new Mt,ac=new kt,Gr=new U,En=new Fi,Rs=new Fi,Yt=new U;class Kt extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qd(e)?rh:ih)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(En.min,Rs.min),En.expandByPoint(Yt),Yt.addVectors(En.max,Rs.max),En.expandByPoint(Yt)):(En.expandByPoint(Rs.min),En.expandByPoint(Rs.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Yt.fromBufferAttribute(a,l),c&&(Gr.fromBufferAttribute(e,l),Yt.add(Gr)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new U,c[I]=new U;const l=new U,u=new U,d=new U,p=new he,f=new he,g=new he,_=new U,v=new U;function m(I,b,w){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,w),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,w),u.sub(l),d.sub(l),f.sub(p),g.sub(p);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),v.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[I].add(_),a[b].add(_),a[w].add(_),c[I].add(v),c[b].add(v),c[w].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,b=S.length;I<b;++I){const w=S[I],R=w.start,C=w.count;for(let k=R,N=R+C;k<N;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new U,x=new U,P=new U,A=new U;function L(I){P.fromBufferAttribute(r,I),A.copy(P);const b=a[I];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(A,b);const R=x.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,R)}for(let I=0,b=S.length;I<b;++I){const w=S[I],R=w.start,C=w.count;for(let k=R,N=R+C;k<N;k+=3)L(e.getX(k+0)),L(e.getX(k+1)),L(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),_=e.getX(p+1),v=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let p=0,f=t.count;p<f;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,p=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,v=c.length;_<v;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)p[g++]=l[f++]}return new In(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const p=l[u],f=e(p,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let p=0,f=d.length;p<f;p++)u.push(d[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new Mt,lr=new th,No=new uo,Vu=new U,ko=new U,Oo=new U,Fo=new U,cc=new U,Bo=new U,Gu=new U,zo=new U;class fe extends kt{constructor(e=new Kt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Bo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(cc.fromBufferAttribute(d,e),o?Bo.addScaledVector(cc,u):Bo.addScaledVector(cc.sub(t),u))}t.add(Bo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(No.containsPoint(lr.origin)===!1&&(lr.intersectSphere(No,Vu)===null||lr.origin.distanceToSquared(Vu)>(e.far-e.near)**2))&&(Hu.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Hu),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const v=p[g],m=o[v.materialIndex],S=Math.max(v.start,f.start),y=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let x=S,P=y;x<P;x+=3){const A=a.getX(x),L=a.getX(x+1),I=a.getX(x+2);r=Ho(this,m,e,i,l,u,d,A,L,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let v=g,m=_;v<m;v+=3){const S=a.getX(v),y=a.getX(v+1),x=a.getX(v+2);r=Ho(this,o,e,i,l,u,d,S,y,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const v=p[g],m=o[v.materialIndex],S=Math.max(v.start,f.start),y=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let x=S,P=y;x<P;x+=3){const A=x,L=x+1,I=x+2;r=Ho(this,m,e,i,l,u,d,A,L,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let v=g,m=_;v<m;v+=3){const S=v,y=v+1,x=v+2;r=Ho(this,o,e,i,l,u,d,S,y,x),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function am(n,e,t,i,r,s,o,a){let c;if(e.side===pn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===tr,a),c===null)return null;zo.copy(a),zo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(zo);return l<t.near||l>t.far?null:{distance:l,point:zo.clone(),object:n}}function Ho(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ko),n.getVertexPosition(c,Oo),n.getVertexPosition(l,Fo);const u=am(n,e,t,i,ko,Oo,Fo,Gu);if(u){const d=new U;Gn.getBarycoord(Gu,ko,Oo,Fo,d),r&&(u.uv=Gn.getInterpolatedAttribute(r,a,c,l,d,new he)),s&&(u.uv1=Gn.getInterpolatedAttribute(s,a,c,l,d,new he)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,c,l,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new U,materialIndex:0};Gn.getNormal(ko,Oo,Fo,p.normal),u.face=p,u.barycoord=d}return u}class Bt extends Kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function g(_,v,m,S,y,x,P,A,L,I,b){const w=x/L,R=P/I,C=x/2,k=P/2,N=A/2,O=L+1,B=I+1;let q=0,G=0;const oe=new U;for(let me=0;me<B;me++){const Ae=me*R-k;for(let Ke=0;Ke<O;Ke++){const ht=Ke*w-C;oe[_]=ht*S,oe[v]=Ae*y,oe[m]=N,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[v]=0,oe[m]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(Ke/L),d.push(1-me/I),q+=1}}for(let me=0;me<I;me++)for(let Ae=0;Ae<L;Ae++){const Ke=p+Ae+O*me,ht=p+Ae+O*(me+1),ft=p+(Ae+1)+O*(me+1),X=p+(Ae+1)+O*me;c.push(Ke,ht,X),c.push(ht,ft,X),G+=6}a.addGroup(f,G,b),f+=G,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=cs(n[t]);for(const r in i)e[r]=i[r]}return e}function cm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const lm={clone:cs,merge:dn};var um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=um,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class oh extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new U,Wu=new he,$u=new he;class gn extends oh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,$u),t.subVectors($u,Wu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,$r=1;class hm extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Wr,$r,e,t);r.layers=this.layers,this.add(r);const s=new gn(Wr,$r,e,t);s.layers=this.layers,this.add(s);const o=new gn(Wr,$r,e,t);o.layers=this.layers,this.add(o);const a=new gn(Wr,$r,e,t);a.layers=this.layers,this.add(a);const c=new gn(Wr,$r,e,t);c.layers=this.layers,this.add(c);const l=new gn(Wr,$r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ah extends rn{constructor(e=[],t=ss,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fm extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ah(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bt(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Zi});s.uniforms.tEquirect.value=t;const o=new fe(r,s),a=t.minFilter;return t.minFilter===_r&&(t.minFilter=ri),new hm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ge extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pm={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,i),m=this._getHandJoint(l,_);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ct(e),this.near=t,this.far=i}clone(){return new Fl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bl extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mm extends rn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Cn,u=Cn,d,p){super(null,o,a,c,l,u,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qu extends In{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new Mt,Xu=new Mt,Vo=[],Yu=new Fi,gm=new Mt,Ps=new fe,Ls=new uo;class br extends fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,gm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),Yu.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(Yu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new uo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),Ls.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(i),e.ray.intersectsSphere(Ls)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qr),Xu.multiplyMatrices(i,qr),Ps.matrixWorld=Xu,Ps.raycast(e,Vo);for(let o=0,a=Vo.length;o<a;o++){const c=Vo[o];c.instanceId=s,c.object=this,t.push(c)}Vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new mm(new Float32Array(r*this.count),r,this.count,Pl,si));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const uc=new U,vm=new U,_m=new rt;class Yi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=uc.subVectors(i,t).cross(vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_m.getNormalMatrix(e),r=this.coplanarPoint(uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new uo,xm=new he(.5,.5),Go=new U;class zl{constructor(e=new Yi,t=new Yi,i=new Yi,r=new Yi,s=new Yi,o=new Yi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],p=s[6],f=s[7],g=s[8],_=s[9],v=s[10],m=s[11],S=s[12],y=s[13],x=s[14],P=s[15];if(r[0].setComponents(l-o,f-u,m-g,P-S).normalize(),r[1].setComponents(l+o,f+u,m+g,P+S).normalize(),r[2].setComponents(l+a,f+d,m+_,P+y).normalize(),r[3].setComponents(l-a,f-d,m-_,P-y).normalize(),i)r[4].setComponents(c,p,v,x).normalize(),r[5].setComponents(l-c,f-p,m-v,P-x).normalize();else if(r[4].setComponents(l-c,f-p,m-v,P-x).normalize(),t===oi)r[5].setComponents(l+c,f+p,m+v,P+x).normalize();else if(t===la)r[5].setComponents(c,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);const t=xm.distanceTo(e.center);return ur.radius=.7071067811865476+t,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Go.x=r.normal.x>0?e.max.x:e.min.x,Go.y=r.normal.y>0?e.max.y:e.min.y,Go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends rn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lh extends rn{constructor(e,t,i=Mr,r,s,o,a=Cn,c=Cn,l,u=qs,d=1){if(u!==qs&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jr extends Kt{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,p=t,f=2*d+p,g=i*2+s,_=r+1,v=new U,m=new U;for(let S=0;S<=g;S++){let y=0,x=0,P=0,A=0;if(S<=i){const b=S/i,w=b*Math.PI/2;x=-u-e*Math.cos(w),P=e*Math.sin(w),A=-e*Math.cos(w),y=b*d}else if(S<=i+s){const b=(S-i)/s;x=-u+b*t,P=e,A=0,y=d+b*p}else{const b=(S-i-s)/i,w=b*Math.PI/2;x=u+e*Math.sin(w),P=e*Math.cos(w),A=e*Math.sin(w),y=d+p+b*d}const L=Math.max(0,Math.min(1,y/f));let I=0;S===0?I=.5/r:S===g&&(I=-.5/r);for(let b=0;b<=r;b++){const w=b/r,R=w*Math.PI*2,C=Math.sin(R),k=Math.cos(R);m.x=-P*k,m.y=x,m.z=P*C,a.push(m.x,m.y,m.z),v.set(-P*k,A,P*C),v.normalize(),c.push(v.x,v.y,v.z),l.push(w+I,L)}if(S>0){const b=(S-1)*_;for(let w=0;w<r;w++){const R=b+w,C=b+w+1,k=S*_+w,N=S*_+w+1;o.push(R,C,k),o.push(C,N,k)}}}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ni extends Kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new U,u=new he;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const f=i+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pt extends Kt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],p=[],f=[];let g=0;const _=[],v=i/2;let m=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(f,2));function S(){const x=new U,P=new U;let A=0;const L=(t-e)/i;for(let I=0;I<=s;I++){const b=[],w=I/s,R=w*(t-e)+e;for(let C=0;C<=r;C++){const k=C/r,N=k*c+a,O=Math.sin(N),B=Math.cos(N);P.x=R*O,P.y=-w*i+v,P.z=R*B,d.push(P.x,P.y,P.z),x.set(O,L,B).normalize(),p.push(x.x,x.y,x.z),f.push(k,1-w),b.push(g++)}_.push(b)}for(let I=0;I<r;I++)for(let b=0;b<s;b++){const w=_[b][I],R=_[b+1][I],C=_[b+1][I+1],k=_[b][I+1];(e>0||b!==0)&&(u.push(w,R,k),A+=3),(t>0||b!==s-1)&&(u.push(R,C,k),A+=3)}l.addGroup(m,A,0),m+=A}function y(x){const P=g,A=new he,L=new U;let I=0;const b=x===!0?e:t,w=x===!0?1:-1;for(let C=1;C<=r;C++)d.push(0,v*w,0),p.push(0,w,0),f.push(.5,.5),g++;const R=g;for(let C=0;C<=r;C++){const N=C/r*c+a,O=Math.cos(N),B=Math.sin(N);L.x=b*B,L.y=v*w,L.z=b*O,d.push(L.x,L.y,L.z),p.push(0,w,0),A.x=O*.5+.5,A.y=B*.5*w+.5,f.push(A.x,A.y),g++}for(let C=0;C<r;C++){const k=P+C,N=R+C;x===!0?u.push(N,N+1,k):u.push(N+1,N,k),I+=3}l.addGroup(m,I,x===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mi extends pt{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new mi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sa extends Kt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new U,x=new U,P=new U;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],x),f(t[A+2],P),c(y,x,P,S)}function c(S,y,x,P){const A=P+1,L=[];for(let I=0;I<=A;I++){L[I]=[];const b=S.clone().lerp(x,I/A),w=y.clone().lerp(x,I/A),R=A-I;for(let C=0;C<=R;C++)C===0&&I===A?L[I][C]=b:L[I][C]=b.clone().lerp(w,C/R)}for(let I=0;I<A;I++)for(let b=0;b<2*(A-I)-1;b++){const w=Math.floor(b/2);b%2===0?(p(L[I][w+1]),p(L[I+1][w]),p(L[I][w])):(p(L[I][w+1]),p(L[I+1][w+1]),p(L[I+1][w]))}}function l(S){const y=new U;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(S),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const S=new U;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const x=v(S)/2/Math.PI+.5,P=m(S)/Math.PI+.5;o.push(x,1-P)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){const y=o[S+0],x=o[S+2],P=o[S+4],A=Math.max(y,x,P),L=Math.min(y,x,P);A>.9&&L<.1&&(y<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function p(S){s.push(S.x,S.y,S.z)}function f(S,y){const x=S*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const S=new U,y=new U,x=new U,P=new U,A=new he,L=new he,I=new he;for(let b=0,w=0;b<s.length;b+=9,w+=6){S.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),A.set(o[w+0],o[w+1]),L.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),P.copy(S).add(y).add(x).divideScalar(3);const R=v(P);_(A,w+0,S,R),_(L,w+2,y,R),_(I,w+4,x,R)}}function _(S,y,x,P){P<0&&S.x===1&&(o[y]=S.x-1),x.x===0&&x.z===0&&(o[y]=P/2/Math.PI+.5)}function v(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.vertices,e.indices,e.radius,e.details)}}class Hl extends Sa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hl(e.radius,e.detail)}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],p=i[r+1]-u,f=(o-u)/p;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new he:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,r=[],s=[],o=[],a=new U,c=new Mt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),p<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(lt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(lt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vl extends gi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new he){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*u-f*d+this.aX,l=p*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ym extends Vl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let p=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;p*=u,f*=u,r(o,a,p,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Wo=new U,dc=new Gl,hc=new Gl,fc=new Gl;class Wl extends gi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new U){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Wo.subVectors(r[0],r[1]).add(r[0]),l=Wo);const d=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Wo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),v<1e-4&&(v=_),dc.initNonuniformCatmullRom(l.x,d.x,p.x,u.x,g,_,v),hc.initNonuniformCatmullRom(l.y,d.y,p.y,u.y,g,_,v),fc.initNonuniformCatmullRom(l.z,d.z,p.z,u.z,g,_,v)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(l.x,d.x,p.x,u.x,this.tension),hc.initCatmullRom(l.y,d.y,p.y,u.y,this.tension),fc.initCatmullRom(l.z,d.z,p.z,u.z,this.tension));return i.set(dc.calc(c),hc.calc(c),fc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ju(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function Mm(n,e){const t=1-n;return t*t*e}function bm(n,e){return 2*(1-n)*n*e}function wm(n,e){return n*n*e}function Os(n,e,t,i){return Mm(n,e)+bm(n,t)+wm(n,i)}function Sm(n,e){const t=1-n;return t*t*t*e}function Em(n,e){const t=1-n;return 3*t*t*n*e}function Tm(n,e){return 3*(1-n)*n*n*e}function Am(n,e){return n*n*n*e}function Fs(n,e,t,i,r){return Sm(n,e)+Em(n,t)+Tm(n,i)+Am(n,r)}class uh extends gi{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fs(e,r.x,s.x,o.x,a.x),Fs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cm extends gi{constructor(e=new U,t=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Fs(e,r.x,s.x,o.x,a.x),Fs(e,r.y,s.y,o.y,a.y),Fs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dh extends gi{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rm extends gi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends gi{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Os(e,r.x,s.x,o.x),Os(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends gi{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Os(e,r.x,s.x,o.x),Os(e,r.y,s.y,o.y),Os(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(ju(a,c.x,l.x,u.x,d.x),ju(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}var da=Object.freeze({__proto__:null,ArcCurve:ym,CatmullRomCurve3:Wl,CubicBezierCurve:uh,CubicBezierCurve3:Cm,EllipseCurve:Vl,LineCurve:dh,LineCurve3:Rm,QuadraticBezierCurve:hh,QuadraticBezierCurve3:fh,SplineCurve:ph});class Pm extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new da[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new da[r.type]().fromJSON(r))}return this}}class Ju extends Pm{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new dh(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new hh(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new uh(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ph(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Vl(e,t,i,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ls extends Ju{constructor(e){super(e),this.uuid=Cr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ju().fromJSON(r))}return this}}function Lm(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=mh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=km(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let p=t;p<r;p+=t){const f=n[p],g=n[p+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return js(s,o,t,a,c,l,0),o}function mh(n,e,t,i,r){let s;if(r===Xm(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Ku(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Ku(o/i|0,n[o],n[o+1],s);return s&&us(s,s.next)&&(Ks(s),s=s.next),s}function wr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(us(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Ks(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function js(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Hm(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Im(n,i,r,s):Dm(n)){e.push(c.i,n.i,l.i),Ks(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Um(wr(n),e),js(n,e,t,i,r,s,2)):o===2&&Nm(n,e,t,i,r,s):js(wr(n),e,t,i,r,s,1);break}}}function Dm(n){const e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),d=Math.min(a,c,l),p=Math.max(r,s,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=f&&Ds(r,a,s,c,o,l,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Im(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ut(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,p=o.y,f=Math.min(a,c,l),g=Math.min(u,d,p),_=Math.max(a,c,l),v=Math.max(u,d,p),m=fl(f,g,e,t,i),S=fl(_,v,e,t,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=m&&x&&x.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=v&&y!==r&&y!==o&&Ds(a,u,c,d,l,p,y.x,y.y)&&Ut(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=v&&x!==r&&x!==o&&Ds(a,u,c,d,l,p,x.x,x.y)&&Ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=v&&y!==r&&y!==o&&Ds(a,u,c,d,l,p,y.x,y.y)&&Ut(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=v&&x!==r&&x!==o&&Ds(a,u,c,d,l,p,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Um(n,e){let t=n;do{const i=t.prev,r=t.next.next;!us(i,r)&&vh(i,t,t.next,r)&&Js(i,r)&&Js(r,i)&&(e.push(i.i,t.i,r.i),Ks(t),Ks(t.next),t=n=r),t=t.next}while(t!==n);return wr(t)}function Nm(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wm(o,a)){let c=_h(o,a);o=wr(o,o.next),c=wr(c,c.next),js(o,e,t,i,r,s,0),js(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function km(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=mh(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Gm(l))}r.sort(Om);for(let s=0;s<r.length;s++)t=Fm(r[s],t);return t}function Om(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Fm(n,e){const t=Bm(n,e);if(!t)return e;const i=_h(t,n);return wr(i,i.next),wr(t,t.next)}function Bm(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(us(n,t))return t;do{if(us(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&gh(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);Js(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&zm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function zm(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function Hm(n,e,t,i){let r=n;do r.z===0&&(r.z=fl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Vm(r)}function Vm(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function fl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Gm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function gh(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Ds(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&gh(n,e,t,i,r,s,o,a)}function Wm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!$m(n,e)&&(Js(n,e)&&Js(e,n)&&qm(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||us(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function us(n,e){return n.x===e.x&&n.y===e.y}function vh(n,e,t,i){const r=qo(Ut(n,e,t)),s=qo(Ut(n,e,i)),o=qo(Ut(t,i,n)),a=qo(Ut(t,i,e));return!!(r!==s&&o!==a||r===0&&$o(n,t,e)||s===0&&$o(n,i,e)||o===0&&$o(t,n,i)||a===0&&$o(t,e,i))}function $o(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qo(n){return n>0?1:n<0?-1:0}function $m(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Js(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function qm(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _h(n,e){const t=pl(n.i,n.x,n.y),i=pl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ku(n,e,t,i){const r=pl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ks(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xm(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ym{static triangulate(e,t,i=2){return Lm(e,t,i)}}class Ci{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ci.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Zu(e),Qu(i,e);let o=e.length;t.forEach(Zu);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Qu(i,t[c]);const a=Ym.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Zu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Qu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Zs extends Kt{constructor(e=new ls([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:jm;let y,x=!1,P,A,L,I;m&&(y=m.getSpacedPoints(u),x=!0,p=!1,P=m.computeFrenetFrames(u,!1),A=new U,L=new U,I=new U),p||(v=0,f=0,g=0,_=0);const b=a.extractPoints(l);let w=b.shape;const R=b.holes;if(!Ci.isClockWise(w)){w=w.reverse();for(let K=0,j=R.length;K<j;K++){const ne=R[K];Ci.isClockWise(ne)&&(R[K]=ne.reverse())}}function k(K){const ne=10000000000000001e-36;let Q=K[0];for(let ge=1;ge<=K.length;ge++){const se=ge%K.length,ve=K[se],tt=ve.x-Q.x,Qe=ve.y-Q.y,T=tt*tt+Qe*Qe,M=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(Q.x),Math.abs(Q.y)),V=ne*M*M;if(T<=V){K.splice(se,1),ge--;continue}Q=ve}}k(w),R.forEach(k);const N=R.length,O=w;for(let K=0;K<N;K++){const j=R[K];w=w.concat(j)}function B(K,j,ne){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(j,ne)}const q=w.length;function G(K,j,ne){let Q,ge,se;const ve=K.x-j.x,tt=K.y-j.y,Qe=ne.x-K.x,T=ne.y-K.y,M=ve*ve+tt*tt,V=ve*T-tt*Qe;if(Math.abs(V)>Number.EPSILON){const Y=Math.sqrt(M),re=Math.sqrt(Qe*Qe+T*T),J=j.x-tt/Y,Oe=j.y+ve/Y,pe=ne.x-T/re,Ue=ne.y+Qe/re,Ne=((pe-J)*T-(Ue-Oe)*Qe)/(ve*T-tt*Qe);Q=J+ve*Ne-K.x,ge=Oe+tt*Ne-K.y;const ae=Q*Q+ge*ge;if(ae<=2)return new he(Q,ge);se=Math.sqrt(ae/2)}else{let Y=!1;ve>Number.EPSILON?Qe>Number.EPSILON&&(Y=!0):ve<-Number.EPSILON?Qe<-Number.EPSILON&&(Y=!0):Math.sign(tt)===Math.sign(T)&&(Y=!0),Y?(Q=-tt,ge=ve,se=Math.sqrt(M)):(Q=ve,ge=tt,se=Math.sqrt(M/2))}return new he(Q/se,ge/se)}const oe=[];for(let K=0,j=O.length,ne=j-1,Q=K+1;K<j;K++,ne++,Q++)ne===j&&(ne=0),Q===j&&(Q=0),oe[K]=G(O[K],O[ne],O[Q]);const me=[];let Ae,Ke=oe.concat();for(let K=0,j=N;K<j;K++){const ne=R[K];Ae=[];for(let Q=0,ge=ne.length,se=ge-1,ve=Q+1;Q<ge;Q++,se++,ve++)se===ge&&(se=0),ve===ge&&(ve=0),Ae[Q]=G(ne[Q],ne[se],ne[ve]);me.push(Ae),Ke=Ke.concat(Ae)}let ht;if(v===0)ht=Ci.triangulateShape(O,R);else{const K=[],j=[];for(let ne=0;ne<v;ne++){const Q=ne/v,ge=f*Math.cos(Q*Math.PI/2),se=g*Math.sin(Q*Math.PI/2)+_;for(let ve=0,tt=O.length;ve<tt;ve++){const Qe=B(O[ve],oe[ve],se);Le(Qe.x,Qe.y,-ge),Q===0&&K.push(Qe)}for(let ve=0,tt=N;ve<tt;ve++){const Qe=R[ve];Ae=me[ve];const T=[];for(let M=0,V=Qe.length;M<V;M++){const Y=B(Qe[M],Ae[M],se);Le(Y.x,Y.y,-ge),Q===0&&T.push(Y)}Q===0&&j.push(T)}}ht=Ci.triangulateShape(K,j)}const ft=ht.length,X=g+_;for(let K=0;K<q;K++){const j=p?B(w[K],Ke[K],X):w[K];x?(L.copy(P.normals[0]).multiplyScalar(j.x),A.copy(P.binormals[0]).multiplyScalar(j.y),I.copy(y[0]).add(L).add(A),Le(I.x,I.y,I.z)):Le(j.x,j.y,0)}for(let K=1;K<=u;K++)for(let j=0;j<q;j++){const ne=p?B(w[j],Ke[j],X):w[j];x?(L.copy(P.normals[K]).multiplyScalar(ne.x),A.copy(P.binormals[K]).multiplyScalar(ne.y),I.copy(y[K]).add(L).add(A),Le(I.x,I.y,I.z)):Le(ne.x,ne.y,d/u*K)}for(let K=v-1;K>=0;K--){const j=K/v,ne=f*Math.cos(j*Math.PI/2),Q=g*Math.sin(j*Math.PI/2)+_;for(let ge=0,se=O.length;ge<se;ge++){const ve=B(O[ge],oe[ge],Q);Le(ve.x,ve.y,d+ne)}for(let ge=0,se=R.length;ge<se;ge++){const ve=R[ge];Ae=me[ge];for(let tt=0,Qe=ve.length;tt<Qe;tt++){const T=B(ve[tt],Ae[tt],Q);x?Le(T.x,T.y+y[u-1].y,y[u-1].x+ne):Le(T.x,T.y,d+ne)}}}xe(),de();function xe(){const K=r.length/3;if(p){let j=0,ne=q*j;for(let Q=0;Q<ft;Q++){const ge=ht[Q];Z(ge[2]+ne,ge[1]+ne,ge[0]+ne)}j=u+v*2,ne=q*j;for(let Q=0;Q<ft;Q++){const ge=ht[Q];Z(ge[0]+ne,ge[1]+ne,ge[2]+ne)}}else{for(let j=0;j<ft;j++){const ne=ht[j];Z(ne[2],ne[1],ne[0])}for(let j=0;j<ft;j++){const ne=ht[j];Z(ne[0]+q*u,ne[1]+q*u,ne[2]+q*u)}}i.addGroup(K,r.length/3-K,0)}function de(){const K=r.length/3;let j=0;He(O,j),j+=O.length;for(let ne=0,Q=R.length;ne<Q;ne++){const ge=R[ne];He(ge,j),j+=ge.length}i.addGroup(K,r.length/3-K,1)}function He(K,j){let ne=K.length;for(;--ne>=0;){const Q=ne;let ge=ne-1;ge<0&&(ge=K.length-1);for(let se=0,ve=u+v*2;se<ve;se++){const tt=q*se,Qe=q*(se+1),T=j+Q+tt,M=j+ge+tt,V=j+ge+Qe,Y=j+Q+Qe;Me(T,M,V,Y)}}}function Le(K,j,ne){c.push(K),c.push(j),c.push(ne)}function Z(K,j,ne){Ce(K),Ce(j),Ce(ne);const Q=r.length/3,ge=S.generateTopUV(i,r,Q-3,Q-2,Q-1);D(ge[0]),D(ge[1]),D(ge[2])}function Me(K,j,ne,Q){Ce(K),Ce(j),Ce(Q),Ce(j),Ce(ne),Ce(Q);const ge=r.length/3,se=S.generateSideWallUV(i,r,ge-6,ge-3,ge-2,ge-1);D(se[0]),D(se[1]),D(se[3]),D(se[1]),D(se[2]),D(se[3])}function Ce(K){r.push(c[K*3+0]),r.push(c[K*3+1]),r.push(c[K*3+2])}function D(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Jm(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new da[r.type]().fromJSON(r)),new Zs(i,e.options)}}const jm={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new he(s,o),new he(a,c),new he(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],p=e[r*3],f=e[r*3+1],g=e[r*3+2],_=e[s*3],v=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new he(o,1-c),new he(l,1-d),new he(p,1-g),new he(_,1-m)]:[new he(a,1-c),new he(u,1-d),new he(f,1-g),new he(v,1-m)]}};function Jm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ho extends Sa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ho(e.radius,e.detail)}}class Un extends Kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,p=t/c,f=[],g=[],_=[],v=[];for(let m=0;m<u;m++){const S=m*p-o;for(let y=0;y<l;y++){const x=y*d-s;g.push(x,-S,0),_.push(0,0,1),v.push(y/a),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const y=S+l*m,x=S+l*(m+1),P=S+1+l*(m+1),A=S+1+l*m;f.push(y,x,A),f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ea extends Kt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=e;const p=(t-e)/r,f=new U,g=new he;for(let _=0;_<=r;_++){for(let v=0;v<=i;v++){const m=s+v/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=p}for(let _=0;_<r;_++){const v=_*(i+1);for(let m=0;m<i;m++){const S=m+v,y=S,x=S+i+1,P=S+i+2,A=S+1;a.push(y,x,A),a.push(x,P,A)}}this.setIndex(a),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $l extends Kt{constructor(e=new ls([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(s,3)),this.setAttribute("uv",new dt(o,2));function l(u){const d=r.length/3,p=u.extractPoints(t);let f=p.shape;const g=p.holes;Ci.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,m=g.length;v<m;v++){const S=g[v];Ci.isClockWise(S)===!0&&(g[v]=S.reverse())}const _=Ci.triangulateShape(f,g);for(let v=0,m=g.length;v<m;v++){const S=g[v];f=f.concat(S)}for(let v=0,m=f.length;v<m;v++){const S=f[v];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let v=0,m=_.length;v<m;v++){const S=_[v],y=S[0]+d,x=S[1]+d,P=S[2]+d;i.push(y,x,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Km(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new $l(i,e.curveSegments)}}function Km(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class xn extends Kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new U,p=new U,f=[],g=[],_=[],v=[];for(let m=0;m<=i;m++){const S=[],y=m/i;let x=0;m===0&&o===0?x=.5/t:m===i&&c===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const A=P/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),v.push(A+x,1-y),S.push(l++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const y=u[m][S+1],x=u[m][S],P=u[m+1][S],A=u[m+1][S+1];(m!==0||o>0)&&f.push(y,x,A),(m!==i-1||c<Math.PI)&&f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ci extends Kt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new U,d=new U,p=new U;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const _=g/r*s,v=f/i*Math.PI*2;d.x=(e+t*Math.cos(v))*Math.cos(_),d.y=(e+t*Math.cos(v))*Math.sin(_),d.z=t*Math.sin(v),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(d,u).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,v=(r+1)*(f-1)+g-1,m=(r+1)*(f-1)+g,S=(r+1)*f+g;o.push(_,v,S),o.push(v,m,S)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ta extends Kt{constructor(e=new fh(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new he;let u=new U;const d=[],p=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(f,2));function _(){for(let y=0;y<t;y++)v(y);v(s===!1?t:0),S(),m()}function v(y){u=e.getPointAt(y/t,u);const x=o.normals[y],P=o.binormals[y];for(let A=0;A<=r;A++){const L=A/r*Math.PI*2,I=Math.sin(L),b=-Math.cos(L);c.x=b*x.x+I*P.x,c.y=b*x.y+I*P.y,c.z=b*x.z+I*P.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let x=1;x<=r;x++){const P=(r+1)*(y-1)+(x-1),A=(r+1)*y+(x-1),L=(r+1)*y+x,I=(r+1)*(y-1)+x;g.push(P,A,I),g.push(A,L,I)}}function S(){for(let y=0;y<=t;y++)for(let x=0;x<=r;x++)l.x=y/t,l.y=x/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ta(new da[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ki extends ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sr extends ms{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Zm extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qm extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xh extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ql extends xh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const pc=new Mt,ed=new U,td=new U;class eg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yh extends oh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tg extends eg{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Aa extends xh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ng extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nd=new Mt;class Mh{constructor(e,t,i=0,r=1/0){this.ray=new th(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(e,t=!0,i=[]){return ml(e,this,i,t),i.sort(id),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ml(e[r],this,i,t);return i.sort(id),i}}function id(n,e){return n.distance-e.distance}function ml(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ml(s[o],e,t,!0)}}function rd(n,e,t,i){const r=ig(i);switch(t){case Yd:return n*e;case Pl:return n*e/r.components*r.byteLength;case Ll:return n*e/r.components*r.byteLength;case Jd:return n*e*2/r.components*r.byteLength;case Dl:return n*e*2/r.components*r.byteLength;case jd:return n*e*3/r.components*r.byteLength;case Wn:return n*e*4/r.components*r.byteLength;case Il:return n*e*4/r.components*r.byteLength;case Zo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(n,16)*Math.max(e,8)/4;case Hc:case Gc:return Math.max(n,8)*Math.max(e,8)/2;case $c:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case na:case cl:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kd:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ig(n){switch(n){case ui:case $d:return{byteLength:1,components:1};case Ws:case qd:case co:return{byteLength:2,components:1};case Cl:case Rl:return{byteLength:2,components:4};case Mr:case Al:case si:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);function bh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function rg(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
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
#endif`,ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
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
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fg=`#ifdef USE_BATCHING
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
#endif`,pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_g=`#ifdef USE_IRIDESCENCE
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
#endif`,xg=`#ifdef USE_BUMPMAP
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pg=`vec3 transformedNormal = objectNormal;
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
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`struct PhysicalMaterial {
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
}`,r0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sv=`uniform sampler2D t2D;
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`#include <common>
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
}`,dv=`#if DEPTH_PACKING == 3200
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
}`,hv=`#define DISTANCE
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
}`,fv=`#define DISTANCE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,xv=`uniform vec3 diffuse;
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
}`,yv=`#define LAMBERT
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
}`,bv=`#define MATCAP
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
}`,wv=`#define MATCAP
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
}`,Sv=`#define NORMAL
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
}`,Ev=`#define NORMAL
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
}`,Tv=`#define PHONG
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
}`,Av=`#define PHONG
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
}`,Cv=`#define STANDARD
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
}`,Rv=`#define STANDARD
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
}`,Pv=`#define TOON
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
}`,Lv=`#define TOON
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
}`,Dv=`uniform float size;
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Uv=`#include <common>
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
}`,kv=`uniform float rotation;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:sg,alphahash_pars_fragment:og,alphamap_fragment:ag,alphamap_pars_fragment:cg,alphatest_fragment:lg,alphatest_pars_fragment:ug,aomap_fragment:dg,aomap_pars_fragment:hg,batching_pars_vertex:fg,batching_vertex:pg,begin_vertex:mg,beginnormal_vertex:gg,bsdfs:vg,iridescence_fragment:_g,bumpmap_pars_fragment:xg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:wg,color_fragment:Sg,color_pars_fragment:Eg,color_pars_vertex:Tg,color_vertex:Ag,common:Cg,cube_uv_reflection_fragment:Rg,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Lg,displacementmap_vertex:Dg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Ug,colorspace_fragment:Ng,colorspace_pars_fragment:kg,envmap_fragment:Og,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Bg,envmap_pars_vertex:zg,envmap_physical_pars_fragment:Kg,envmap_vertex:Hg,fog_vertex:Vg,fog_pars_vertex:Gg,fog_fragment:Wg,fog_pars_fragment:$g,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Xg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:jg,lights_pars_begin:Jg,lights_toon_fragment:Zg,lights_toon_pars_fragment:Qg,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:r0,lights_fragment_maps:s0,lights_fragment_end:o0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:u0,map_fragment:d0,map_pars_fragment:h0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:v0,morphcolor_vertex:_0,morphnormal_vertex:x0,morphtarget_pars_vertex:y0,morphtarget_vertex:M0,normal_fragment_begin:b0,normal_fragment_maps:w0,normal_pars_fragment:S0,normal_pars_vertex:E0,normal_vertex:T0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:L0,opaque_fragment:D0,packing:I0,premultiplied_alpha_fragment:U0,project_vertex:N0,dithering_fragment:k0,dithering_pars_fragment:O0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:H0,shadowmap_vertex:V0,shadowmask_pars_fragment:G0,skinbase_vertex:W0,skinning_pars_vertex:$0,skinning_vertex:q0,skinnormal_vertex:X0,specularmap_fragment:Y0,specularmap_pars_fragment:j0,tonemapping_fragment:J0,tonemapping_pars_fragment:K0,transmission_fragment:Z0,transmission_pars_fragment:Q0,uv_pars_fragment:ev,uv_pars_vertex:tv,uv_vertex:nv,worldpos_vertex:iv,background_vert:rv,background_frag:sv,backgroundCube_vert:ov,backgroundCube_frag:av,cube_vert:cv,cube_frag:lv,depth_vert:uv,depth_frag:dv,distanceRGBA_vert:hv,distanceRGBA_frag:fv,equirect_vert:pv,equirect_frag:mv,linedashed_vert:gv,linedashed_frag:vv,meshbasic_vert:_v,meshbasic_frag:xv,meshlambert_vert:yv,meshlambert_frag:Mv,meshmatcap_vert:bv,meshmatcap_frag:wv,meshnormal_vert:Sv,meshnormal_frag:Ev,meshphong_vert:Tv,meshphong_frag:Av,meshphysical_vert:Cv,meshphysical_frag:Rv,meshtoon_vert:Pv,meshtoon_frag:Lv,points_vert:Dv,points_frag:Iv,shadow_vert:Uv,shadow_frag:Nv,sprite_vert:kv,sprite_frag:Ov},ye={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ii={basic:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ct(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:dn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:dn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ct(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:dn([ye.points,ye.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:dn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:dn([ye.common,ye.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:dn([ye.sprite,ye.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:dn([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:dn([ye.lights,ye.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ii.physical={uniforms:dn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Xo={r:0,b:0,g:0},dr=new di,Fv=new Mt;function Bv(n,e,t,i,r,s,o){const a=new ct(0);let c=s===!0?0:1,l,u,d=null,p=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const P=g(y);P===null?m(a,c):P&&P.isColor&&(m(P,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===wa)?(u===void 0&&(u=new fe(new Bt(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:cs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),dr.copy(x.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(dr)),u.material.toneMapped=gt.getTransfer(P.colorSpace)!==wt,(d!==P||p!==P.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,p=P.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new fe(new Un(2,2),new nr({name:"BackgroundMaterial",uniforms:cs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=gt.getTransfer(P.colorSpace)!==wt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||p!==P.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,p=P.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,x){y.getRGB(Xo,sh(n)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:_,addToRenderList:v,dispose:S}}function zv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(w,R,C,k,N){let O=!1;const B=d(k,C,R);s!==B&&(s=B,l(s.object)),O=f(w,k,C,N),O&&g(w,k,C,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(w,R,C,k),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,R,C){const k=C.wireframe===!0;let N=i[w.id];N===void 0&&(N={},i[w.id]=N);let O=N[R.id];O===void 0&&(O={},N[R.id]=O);let B=O[k];return B===void 0&&(B=p(c()),O[k]=B),B}function p(w){const R=[],C=[],k=[];for(let N=0;N<t;N++)R[N]=0,C[N]=0,k[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:k,object:w,attributes:{},index:null}}function f(w,R,C,k){const N=s.attributes,O=R.attributes;let B=0;const q=C.getAttributes();for(const G in q)if(q[G].location>=0){const me=N[G];let Ae=O[G];if(Ae===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Ae=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Ae=w.instanceColor)),me===void 0||me.attribute!==Ae||Ae&&me.data!==Ae.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(w,R,C,k){const N={},O=R.attributes;let B=0;const q=C.getAttributes();for(const G in q)if(q[G].location>=0){let me=O[G];me===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const Ae={};Ae.attribute=me,me&&me.data&&(Ae.data=me.data),N[G]=Ae,B++}s.attributes=N,s.attributesNum=B,s.index=k}function _(){const w=s.newAttributes;for(let R=0,C=w.length;R<C;R++)w[R]=0}function v(w){m(w,0)}function m(w,R){const C=s.newAttributes,k=s.enabledAttributes,N=s.attributeDivisors;C[w]=1,k[w]===0&&(n.enableVertexAttribArray(w),k[w]=1),N[w]!==R&&(n.vertexAttribDivisor(w,R),N[w]=R)}function S(){const w=s.newAttributes,R=s.enabledAttributes;for(let C=0,k=R.length;C<k;C++)R[C]!==w[C]&&(n.disableVertexAttribArray(C),R[C]=0)}function y(w,R,C,k,N,O,B){B===!0?n.vertexAttribIPointer(w,R,C,N,O):n.vertexAttribPointer(w,R,C,k,N,O)}function x(w,R,C,k){_();const N=k.attributes,O=C.getAttributes(),B=R.defaultAttributeValues;for(const q in O){const G=O[q];if(G.location>=0){let oe=N[q];if(oe===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor)),oe!==void 0){const me=oe.normalized,Ae=oe.itemSize,Ke=e.get(oe);if(Ke===void 0)continue;const ht=Ke.buffer,ft=Ke.type,X=Ke.bytesPerElement,xe=ft===n.INT||ft===n.UNSIGNED_INT||oe.gpuType===Al;if(oe.isInterleavedBufferAttribute){const de=oe.data,He=de.stride,Le=oe.offset;if(de.isInstancedInterleavedBuffer){for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z,de.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Z=0;Z<G.locationSize;Z++)v(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Z=0;Z<G.locationSize;Z++)y(G.location+Z,Ae/G.locationSize,ft,me,He*X,(Le+Ae/G.locationSize*Z)*X,xe)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)m(G.location+de,oe.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<G.locationSize;de++)v(G.location+de);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let de=0;de<G.locationSize;de++)y(G.location+de,Ae/G.locationSize,ft,me,Ae*X,Ae/G.locationSize*de*X,xe)}}else if(B!==void 0){const me=B[q];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(G.location,me);break;case 3:n.vertexAttrib3fv(G.location,me);break;case 4:n.vertexAttrib4fv(G.location,me);break;default:n.vertexAttrib1fv(G.location,me)}}}}S()}function P(){I();for(const w in i){const R=i[w];for(const C in R){const k=R[C];for(const N in k)u(k[N].object),delete k[N];delete R[C]}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const R=i[w.id];for(const C in R){const k=R[C];for(const N in k)u(k[N].object),delete k[N];delete R[C]}delete i[w.id]}function L(w){for(const R in i){const C=i[R];if(C[w.id]===void 0)continue;const k=C[w.id];for(const N in k)u(k[N].object),delete k[N];delete C[w.id]}}function I(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:v,disableUnusedAttributes:S}}function Hv(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function c(l,u,d,p){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*p[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Vv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Wn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const I=L===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ui&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==si&&!I)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function Gv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yi,a=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||i!==0||r;return r=p,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,_=d.clipIntersection,v=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!v)s?u(null):l();else{const S=s?0:i,y=S*4;let x=m.clippingState||null;c.value=x,x=u(g,p,y,f);for(let P=0;P!==y;++P)x[P]=t[P];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,f,g){const _=d!==null?d.length:0;let v=null;if(_!==0){if(v=c.value,g!==!0||v===null){const m=f+_*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(v===null||v.length<m)&&(v=new Float32Array(m));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(v,x),v[x+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function Wv(n){let e=new WeakMap;function t(o,a){return a===Fc?o.mapping=ss:a===Bc&&(o.mapping=os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fc||a===Bc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Kr=4,sd=[.125,.215,.35,.446,.526,.582],gr=20,mc=new yh,od=new ct;let gc=null,vc=0,_c=0,xc=!1;const fr=(1+Math.sqrt(5))/2,Xr=1/fr,ad=[new U(-fr,Xr,0),new U(fr,Xr,0),new U(-Xr,0,fr),new U(Xr,0,fr),new U(0,fr,-Xr),new U(0,fr,Xr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],$v=new U;class cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=$v}=s;gc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,vc,_c),this._renderer.xr.enabled=xc,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:co,format:Wn,colorSpace:as,depthBuffer:!1},r=ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qv(s)),this._blurMaterial=Xv(s,e,t)}return r}_compileMaterial(e){const t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,i,r,s){const c=new gn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(od),d.toneMapping=Qi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new $t({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),v=new fe(new Bt,_);let m=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,m=!0):(_.color.copy(od),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const P=this._cubeSize;Yo(r,x*P,y>2?P:0,P,P),d.setRenderTarget(r),m&&d.render(v,c),d.render(e,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Yo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ad[(r-s-1)%ad.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new fe(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*gr-1),_=s/g,v=isFinite(s)?1+Math.floor(u*_):gr;v>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gr}`);const m=[];let S=0;for(let L=0;L<gr;++L){const I=L/_,b=Math.exp(-I*I/2);m.push(b),L===0?S+=b:L<v&&(S+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/S;p.envMap.value=e.texture,p.samples.value=v,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const x=this._sizeLods[r],P=3*x*(r>y-Kr?r-y+Kr:0),A=4*(this._cubeSize-x);Yo(t,P,A,3*x,2*x),c.setRenderTarget(t),c.render(d,mc)}}function qv(n){const e=[],t=[],i=[];let r=n;const s=n-Kr+1+sd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Kr?c=sd[o-n+Kr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,p=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,v=2,m=1,S=new Float32Array(_*g*f),y=new Float32Array(v*g*f),x=new Float32Array(m*g*f);for(let A=0;A<f;A++){const L=A%3*2/3-1,I=A>2?0:-1,b=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];S.set(b,_*g*A),y.set(p,v*g*A);const w=[A,A,A,A,A,A];x.set(w,m*g*A)}const P=new Kt;P.setAttribute("position",new In(S,_)),P.setAttribute("uv",new In(y,v)),P.setAttribute("faceIndex",new In(x,m)),e.push(P),r>Kr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ld(n,e,t){const i=new Ui(n,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Xv(n,e,t){const i=new Float32Array(gr),r=new U(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ud(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function dd(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function Yv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fc||c===Bc,u=c===ss||c===os;if(l||u){let d=e.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new cd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new cd(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ts("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jv(n,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const f in p)e.update(p[f],n.ARRAY_BUFFER)}function l(d){const p=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,x=S.length;y<x;y+=3){const P=S[y+0],A=S[y+1],L=S[y+2];p.push(P,A,A,L,L,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const P=y+0,A=y+1,L=y+2;p.push(P,A,A,L,L,P)}}else return;const v=new(Qd(p)?rh:ih)(p,1);v.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,v)}function u(d){const p=s.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Kv(n,e,t){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*o),t.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*o,g),t.update(f,i,g))}function u(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let v=0;for(let m=0;m<g;m++)v+=f[m];t.update(v,i,1)}function d(p,f,g,_){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p.length;m++)l(p[m]/o,f[m],_[m]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=f[S]*_[S];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Zv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Qv(n,e,t){const i=new WeakMap,r=new zt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==d){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*P*4*d),L=new eh(A,x,P,d);L.type=si,L.needsUpdate=!0;const I=y*4;for(let w=0;w<d;w++){const R=v[w],C=m[w],k=S[w],N=x*P*4*w;for(let O=0;O<R.count;O++){const B=O*I;f===!0&&(r.fromBufferAttribute(R,O),A[N+B+0]=r.x,A[N+B+1]=r.y,A[N+B+2]=r.z,A[N+B+3]=0),g===!0&&(r.fromBufferAttribute(C,O),A[N+B+4]=r.x,A[N+B+5]=r.y,A[N+B+6]=r.z,A[N+B+7]=0),_===!0&&(r.fromBufferAttribute(k,O),A[N+B+8]=r.x,A[N+B+9]=r.y,A[N+B+10]=r.z,A[N+B+11]=k.itemSize===4?r.w:1)}}p={count:d,texture:L,size:new he(x,P)},i.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function e_(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const wh=new rn,hd=new lh(1,1),Sh=new eh,Eh=new Jp,Th=new ah,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),vd=new Float32Array(4);function gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=fd[r];if(s===void 0&&(s=new Float32Array(r),fd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ca(n,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function t_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function s_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;vd.set(i),n.uniformMatrix2fv(this.addr,!1,vd),Xt(t,i)}}function o_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),Xt(t,i)}}function a_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),Xt(t,i)}}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function h_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function g_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hd.compareFunction=Zd,s=hd):s=wh,t.setTexture2D(e||s,r)}function v_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Eh,r)}function __(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Th,r)}function x_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sh,r)}function y_(n){switch(n){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return r_;case 35674:return s_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return c_;case 35667:case 35671:return l_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return h_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return x_}}function M_(n,e){n.uniform1fv(this.addr,e)}function b_(n,e){const t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function w_(n,e){const t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function S_(n,e){const t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function E_(n,e){const t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T_(n,e){const t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A_(n,e){const t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C_(n,e){n.uniform1iv(this.addr,e)}function R_(n,e){n.uniform2iv(this.addr,e)}function P_(n,e){n.uniform3iv(this.addr,e)}function L_(n,e){n.uniform4iv(this.addr,e)}function D_(n,e){n.uniform1uiv(this.addr,e)}function I_(n,e){n.uniform2uiv(this.addr,e)}function U_(n,e){n.uniform3uiv(this.addr,e)}function N_(n,e){n.uniform4uiv(this.addr,e)}function k_(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||wh,s[o])}function O_(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Eh,s[o])}function F_(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Th,s[o])}function B_(n,e,t){const i=this.cache,r=e.length,s=Ca(t,r);qt(i,s)||(n.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sh,s[o])}function z_(n){switch(n){case 5126:return M_;case 35664:return b_;case 35665:return w_;case 35666:return S_;case 35674:return E_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return I_;case 36295:return U_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return B_}}class H_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}}class V_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z_(t.type)}}class G_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function _d(n,e){n.seq.push(e),n.map[e.id]=e}function W_(n,e,t){const i=n.name,r=i.length;for(yc.lastIndex=0;;){const s=yc.exec(i),o=yc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){_d(t,l===void 0?new H_(a,n,e):new V_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new G_(a),_d(t,d)),t=d}}}class ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);W_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function xd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $_=37297;let q_=0;function X_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yd=new rt;function Y_(n){gt._getMatrix(yd,gt.workingColorSpace,n);const e=`mat3( ${yd.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case ca:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+X_(n.getShaderSource(e),a)}else return s}function j_(n,e){const t=Y_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J_(n,e){let t;switch(e){case up:t="Linear";break;case dp:t="Reinhard";break;case hp:t="Cineon";break;case Gd:t="ACESFilmic";break;case pp:t="AgX";break;case mp:t="Neutral";break;case fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jo=new U;function K_(){gt.getLuminanceCoefficients(jo);const n=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function Q_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ex(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Is(n){return n!==""}function bd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(tx,ix)}const nx=new Map;function ix(n,e){let t=ot[e];if(t===void 0){const i=nx.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(n){return n.replace(rx,sx)}function sx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ed(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ox(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===os&&(e="ENVMAP_MODE_REFRACTION"),e}function lx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vd:e="ENVMAP_BLENDING_MULTIPLY";break;case cp:e="ENVMAP_BLENDING_MIX";break;case lp:e="ENVMAP_BLENDING_ADD";break}return e}function ux(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function dx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ox(t),l=ax(t),u=cx(t),d=lx(t),p=ux(t),f=Z_(t),g=Q_(s),_=r.createProgram();let v,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(v=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?ot.tonemapping_pars_fragment:"",t.toneMapping!==Qi?J_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,j_("linearToOutputTexel",t.outputColorSpace),K_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),o=gl(o),o=bd(o,t),o=wd(o,t),a=gl(a),a=bd(a,t),a=wd(a,t),o=Sd(o),a=Sd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+v+o,x=S+m+a,P=xd(r,r.VERTEX_SHADER,y),A=xd(r,r.FRAGMENT_SHADER,x);r.attachShader(_,P),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function L(R){if(n.debug.checkShaderErrors){const C=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(P)||"",N=r.getShaderInfoLog(A)||"",O=C.trim(),B=k.trim(),q=N.trim();let G=!0,oe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,A);else{const me=Md(r,P,"vertex"),Ae=Md(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+me+`
`+Ae)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||q==="")&&(oe=!1);oe&&(R.diagnostics={runnable:G,programLog:O,vertexShader:{log:B,prefix:v},fragmentShader:{log:q,prefix:m}})}r.deleteShader(P),r.deleteShader(A),I=new ia(r,_),b=ex(r,_)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,$_)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let hx=0;class fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new px(e),t.set(e,i)),i}}class px{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}}function mx(n,e,t,i,r,s,o){const a=new Ol,c=new fx,l=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function v(b,w,R,C,k){const N=C.fog,O=k.geometry,B=b.isMeshStandardMaterial?C.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),G=q&&q.mapping===wa?q.image.height:null,oe=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const me=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ae=me!==void 0?me.length:0;let Ke=0;O.morphAttributes.position!==void 0&&(Ke=1),O.morphAttributes.normal!==void 0&&(Ke=2),O.morphAttributes.color!==void 0&&(Ke=3);let ht,ft,X,xe;if(oe){const xt=ii[oe];ht=xt.vertexShader,ft=xt.fragmentShader}else ht=b.vertexShader,ft=b.fragmentShader,c.update(b),X=c.getVertexShaderID(b),xe=c.getFragmentShaderID(b);const de=n.getRenderTarget(),He=n.state.buffers.depth.getReversed(),Le=k.isInstancedMesh===!0,Z=k.isBatchedMesh===!0,Me=!!b.map,Ce=!!b.matcap,D=!!q,K=!!b.aoMap,j=!!b.lightMap,ne=!!b.bumpMap,Q=!!b.normalMap,ge=!!b.displacementMap,se=!!b.emissiveMap,ve=!!b.metalnessMap,tt=!!b.roughnessMap,Qe=b.anisotropy>0,T=b.clearcoat>0,M=b.dispersion>0,V=b.iridescence>0,Y=b.sheen>0,re=b.transmission>0,J=Qe&&!!b.anisotropyMap,Oe=T&&!!b.clearcoatMap,pe=T&&!!b.clearcoatNormalMap,Ue=T&&!!b.clearcoatRoughnessMap,Ne=V&&!!b.iridescenceMap,ae=V&&!!b.iridescenceThicknessMap,Ee=Y&&!!b.sheenColorMap,Je=Y&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,be=!!b.specularColorMap,it=!!b.specularIntensityMap,F=re&&!!b.transmissionMap,ue=re&&!!b.thicknessMap,_e=!!b.gradientMap,Pe=!!b.alphaMap,ce=b.alphaTest>0,ee=!!b.alphaHash,ke=!!b.extensions;let nt=Qi;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(nt=n.toneMapping);const Ct={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:ft,defines:b.defines,customVertexShaderID:X,customFragmentShaderID:xe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Z,batchingColor:Z&&k._colorsTexture!==null,instancing:Le,instancingColor:Le&&k.instanceColor!==null,instancingMorph:Le&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:as,alphaToCoverage:!!b.alphaToCoverage,map:Me,matcap:Ce,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:G,aoMap:K,lightMap:j,bumpMap:ne,normalMap:Q,displacementMap:p&&ge,emissiveMap:se,normalMapObjectSpace:Q&&b.normalMapType===xp,normalMapTangentSpace:Q&&b.normalMapType===Ul,metalnessMap:ve,roughnessMap:tt,anisotropy:Qe,anisotropyMap:J,clearcoat:T,clearcoatMap:Oe,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ue,dispersion:M,iridescence:V,iridescenceMap:Ne,iridescenceThicknessMap:ae,sheen:Y,sheenColorMap:Ee,sheenRoughnessMap:Je,specularMap:Fe,specularColorMap:be,specularIntensityMap:it,transmission:re,transmissionMap:F,thicknessMap:ue,gradientMap:_e,opaque:b.transparent===!1&&b.blending===es&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ce,alphaHash:ee,combine:b.combine,mapUv:Me&&_(b.map.channel),aoMapUv:K&&_(b.aoMap.channel),lightMapUv:j&&_(b.lightMap.channel),bumpMapUv:ne&&_(b.bumpMap.channel),normalMapUv:Q&&_(b.normalMap.channel),displacementMapUv:ge&&_(b.displacementMap.channel),emissiveMapUv:se&&_(b.emissiveMap.channel),metalnessMapUv:ve&&_(b.metalnessMap.channel),roughnessMapUv:tt&&_(b.roughnessMap.channel),anisotropyMapUv:J&&_(b.anisotropyMap.channel),clearcoatMapUv:Oe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Je&&_(b.sheenRoughnessMap.channel),specularMapUv:Fe&&_(b.specularMap.channel),specularColorMapUv:be&&_(b.specularColorMap.channel),specularIntensityMapUv:it&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:ue&&_(b.thicknessMap.channel),alphaMapUv:Pe&&_(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Q||Qe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Me||Pe),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:He,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ke,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:Me&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===wt,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&gt.getTransfer(b.emissiveMap.colorSpace)===wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Z)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function m(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)w.push(R),w.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(S(w,b),y(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function S(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const w=g[b.type];let R;if(w){const C=ii[w];R=lm.clone(C.uniforms)}else R=b.uniforms;return R}function P(b,w){let R;for(let C=0,k=u.length;C<k;C++){const N=u[C];if(N.cacheKey===w){R=N,++R.usedTimes;break}}return R===void 0&&(R=new dx(n,w,b,s),u.push(R)),R}function A(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function L(b){c.remove(b)}function I(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:I}}function gx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Td(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ad(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,f,g,_,v){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:v},n[e]=m):(m.id=d.id,m.object=d,m.geometry=p,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=v),e++,m}function a(d,p,f,g,_,v){const m=o(d,p,f,g,_,v);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function c(d,p,f,g,_,v){const m=o(d,p,f,g,_,v);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function l(d,p){t.length>1&&t.sort(d||vx),i.length>1&&i.sort(p||Td),r.length>1&&r.sort(p||Td)}function u(){for(let d=e,p=n.length;d<p;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function _x(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ad,n.set(i,[o])):r>=s.length?(o=new Ad,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ct};break;case"SpotLight":t={position:new U,direction:new U,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function yx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Mx=0;function bx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wx(n){const e=new xx,t=yx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new Mt,o=new Mt;function a(l){let u=0,d=0,p=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,v=0,m=0,S=0,y=0,x=0,P=0,A=0,L=0;l.sort(bx);for(let b=0,w=l.length;b<w;b++){const R=l[b],C=R.color,k=R.intensity,N=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=C.r*k,d+=C.g*k,p+=C.b*k;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],k);L++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const q=R.shadow,G=t.get(R);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=R.shadow.matrix,S++}i.directional[f]=B,f++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(C).multiplyScalar(k),B.distance=N,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[_]=B;const q=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,q.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=q.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=O,x++}_++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(C).multiplyScalar(k),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=B,v++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const q=R.shadow,G=t.get(R);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=R.shadow.matrix,y++}i.point[g]=B,g++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(k),B.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[m]=B,m++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==m||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==P||I.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=m,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=P,I.numLightProbes=L,i.version=Mx++)}function c(l,u){let d=0,p=0,f=0,g=0,_=0;const v=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const y=l[m];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),d++}else if(y.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),f++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(y.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(v),p++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:a,setupView:c,state:i}}function Cd(n){const e=new wx(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Sx(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cd(n),e.set(r,[a])):s>=o.length?(a=new Cd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
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
}`;function Ax(n,e,t){let i=new zl;const r=new he,s=new he,o=new zt,a=new Zm({depthPacking:_p}),c=new Qm,l={},u=t.maxTextureSize,d={[tr]:pn,[pn]:tr,[vn]:vn},p=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Ex,fragmentShader:Tx}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let m=this.type;this.render=function(A,L,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),w=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),C=n.state;C.setBlending(Zi),C.buffers.depth.getReversed()?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const k=m!==Ai&&this.type===Ai,N=m===Ai&&this.type!==Ai;for(let O=0,B=A.length;O<B;O++){const q=A[O],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const oe=G.getFrameExtents();if(r.multiply(oe),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||k===!0||N===!0){const Ae=this.type!==Ai?{minFilter:Cn,magFilter:Cn}:{};G.map!==null&&G.map.dispose(),G.map=new Ui(r.x,r.y,Ae),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const me=G.getViewportCount();for(let Ae=0;Ae<me;Ae++){const Ke=G.getViewport(Ae);o.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),C.viewport(o),G.updateMatrices(q,Ae),i=G.getFrustum(),x(L,I,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Ai&&S(G,I),G.needsUpdate=!1}m=this.type,v.needsUpdate=!1,n.setRenderTarget(b,w,R)};function S(A,L){const I=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ui(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,I,p,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,I,f,_,null)}function y(A,L,I,b){let w=null;const R=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)w=R;else if(w=I.isPointLight===!0?c:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const C=w.uuid,k=L.uuid;let N=l[C];N===void 0&&(N={},l[C]=N);let O=N[k];O===void 0&&(O=w.clone(),N[k]=O,L.addEventListener("dispose",P)),w=O}if(w.visible=L.visible,w.wireframe=L.wireframe,b===Ai?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:d[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=n.properties.get(w);C.light=I}return w}function x(A,L,I,b,w){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const k=e.update(A),N=A.material;if(Array.isArray(N)){const O=k.groups;for(let B=0,q=O.length;B<q;B++){const G=O[B],oe=N[G.materialIndex];if(oe&&oe.visible){const me=y(A,oe,b,w);A.onBeforeShadow(n,A,L,I,k,me,G),n.renderBufferDirect(I,null,k,me,A,G),A.onAfterShadow(n,A,L,I,k,me,G)}}}else if(N.visible){const O=y(A,N,b,w);A.onBeforeShadow(n,A,L,I,k,O,null),n.renderBufferDirect(I,null,k,O,A,null),A.onAfterShadow(n,A,L,I,k,O,null)}}const C=A.children;for(let k=0,N=C.length;k<N;k++)x(C[k],L,I,b,w)}function P(A){A.target.removeEventListener("dispose",P);for(const I in l){const b=l[I],w=A.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const Cx={[Lc]:Dc,[Ic]:kc,[Uc]:Oc,[rs]:Nc,[Dc]:Lc,[kc]:Ic,[Oc]:Uc,[Nc]:rs};function Rx(n,e){function t(){let F=!1;const ue=new zt;let _e=null;const Pe=new zt(0,0,0,0);return{setMask:function(ce){_e!==ce&&!F&&(n.colorMask(ce,ce,ce,ce),_e=ce)},setLocked:function(ce){F=ce},setClear:function(ce,ee,ke,nt,Ct){Ct===!0&&(ce*=nt,ee*=nt,ke*=nt),ue.set(ce,ee,ke,nt),Pe.equals(ue)===!1&&(n.clearColor(ce,ee,ke,nt),Pe.copy(ue))},reset:function(){F=!1,_e=null,Pe.set(-1,0,0,0)}}}function i(){let F=!1,ue=!1,_e=null,Pe=null,ce=null;return{setReversed:function(ee){if(ue!==ee){const ke=e.get("EXT_clip_control");ee?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;const nt=ce;ce=null,this.setClear(nt)}},getReversed:function(){return ue},setTest:function(ee){ee?de(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(ee){_e!==ee&&!F&&(n.depthMask(ee),_e=ee)},setFunc:function(ee){if(ue&&(ee=Cx[ee]),Pe!==ee){switch(ee){case Lc:n.depthFunc(n.NEVER);break;case Dc:n.depthFunc(n.ALWAYS);break;case Ic:n.depthFunc(n.LESS);break;case rs:n.depthFunc(n.LEQUAL);break;case Uc:n.depthFunc(n.EQUAL);break;case Nc:n.depthFunc(n.GEQUAL);break;case kc:n.depthFunc(n.GREATER);break;case Oc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ee}},setLocked:function(ee){F=ee},setClear:function(ee){ce!==ee&&(ue&&(ee=1-ee),n.clearDepth(ee),ce=ee)},reset:function(){F=!1,_e=null,Pe=null,ce=null,ue=!1}}}function r(){let F=!1,ue=null,_e=null,Pe=null,ce=null,ee=null,ke=null,nt=null,Ct=null;return{setTest:function(xt){F||(xt?de(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(xt){ue!==xt&&!F&&(n.stencilMask(xt),ue=xt)},setFunc:function(xt,Mi,ni){(_e!==xt||Pe!==Mi||ce!==ni)&&(n.stencilFunc(xt,Mi,ni),_e=xt,Pe=Mi,ce=ni)},setOp:function(xt,Mi,ni){(ee!==xt||ke!==Mi||nt!==ni)&&(n.stencilOp(xt,Mi,ni),ee=xt,ke=Mi,nt=ni)},setLocked:function(xt){F=xt},setClear:function(xt){Ct!==xt&&(n.clearStencil(xt),Ct=xt)},reset:function(){F=!1,ue=null,_e=null,Pe=null,ce=null,ee=null,ke=null,nt=null,Ct=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},p=new WeakMap,f=[],g=null,_=!1,v=null,m=null,S=null,y=null,x=null,P=null,A=null,L=new ct(0,0,0),I=0,b=!1,w=null,R=null,C=null,k=null,N=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=q>=2);let oe=null,me={};const Ae=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),ht=new zt().fromArray(Ae),ft=new zt().fromArray(Ke);function X(F,ue,_e,Pe){const ce=new Uint8Array(4),ee=n.createTexture();n.bindTexture(F,ee),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<_e;ke++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ue+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return ee}const xe={};xe[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(rs),ne(!1),Q(Mu),de(n.CULL_FACE),K(Zi);function de(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function He(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Le(F,ue){return d[F]!==ue?(n.bindFramebuffer(F,ue),d[F]=ue,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Z(F,ue){let _e=f,Pe=!1;if(F){_e=p.get(ue),_e===void 0&&(_e=[],p.set(ue,_e));const ce=F.textures;if(_e.length!==ce.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,ke=ce.length;ee<ke;ee++)_e[ee]=n.COLOR_ATTACHMENT0+ee;_e.length=ce.length,Pe=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(_e)}function Me(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Ce={[mr]:n.FUNC_ADD,[$f]:n.FUNC_SUBTRACT,[qf]:n.FUNC_REVERSE_SUBTRACT};Ce[Xf]=n.MIN,Ce[Yf]=n.MAX;const D={[jf]:n.ZERO,[Jf]:n.ONE,[Kf]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[ip]:n.SRC_ALPHA_SATURATE,[tp]:n.DST_COLOR,[Qf]:n.DST_ALPHA,[Zf]:n.ONE_MINUS_SRC_COLOR,[Pc]:n.ONE_MINUS_SRC_ALPHA,[np]:n.ONE_MINUS_DST_COLOR,[ep]:n.ONE_MINUS_DST_ALPHA,[rp]:n.CONSTANT_COLOR,[sp]:n.ONE_MINUS_CONSTANT_COLOR,[op]:n.CONSTANT_ALPHA,[ap]:n.ONE_MINUS_CONSTANT_ALPHA};function K(F,ue,_e,Pe,ce,ee,ke,nt,Ct,xt){if(F===Zi){_===!0&&(He(n.BLEND),_=!1);return}if(_===!1&&(de(n.BLEND),_=!0),F!==Wf){if(F!==v||xt!==b){if((m!==mr||x!==mr)&&(n.blendEquation(n.FUNC_ADD),m=mr,x=mr),xt)switch(F){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.ONE,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,y=null,P=null,A=null,L.set(0,0,0),I=0,v=F,b=xt}return}ce=ce||ue,ee=ee||_e,ke=ke||Pe,(ue!==m||ce!==x)&&(n.blendEquationSeparate(Ce[ue],Ce[ce]),m=ue,x=ce),(_e!==S||Pe!==y||ee!==P||ke!==A)&&(n.blendFuncSeparate(D[_e],D[Pe],D[ee],D[ke]),S=_e,y=Pe,P=ee,A=ke),(nt.equals(L)===!1||Ct!==I)&&(n.blendColor(nt.r,nt.g,nt.b,Ct),L.copy(nt),I=Ct),v=F,b=!1}function j(F,ue){F.side===vn?He(n.CULL_FACE):de(n.CULL_FACE);let _e=F.side===pn;ue&&(_e=!_e),ne(_e),F.blending===es&&F.transparent===!1?K(Zi):K(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Pe=F.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){w!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),w=F)}function Q(F){F!==Vf?(de(n.CULL_FACE),F!==R&&(F===Mu?n.cullFace(n.BACK):F===Gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),R=F}function ge(F){F!==C&&(B&&n.lineWidth(F),C=F)}function se(F,ue,_e){F?(de(n.POLYGON_OFFSET_FILL),(k!==ue||N!==_e)&&(n.polygonOffset(ue,_e),k=ue,N=_e)):He(n.POLYGON_OFFSET_FILL)}function ve(F){F?de(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function tt(F){F===void 0&&(F=n.TEXTURE0+O-1),oe!==F&&(n.activeTexture(F),oe=F)}function Qe(F,ue,_e){_e===void 0&&(oe===null?_e=n.TEXTURE0+O-1:_e=oe);let Pe=me[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},me[_e]=Pe),(Pe.type!==F||Pe.texture!==ue)&&(oe!==_e&&(n.activeTexture(_e),oe=_e),n.bindTexture(F,ue||xe[F]),Pe.type=F,Pe.texture=ue)}function T(){const F=me[oe];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){ht.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ht.copy(F))}function Je(F){ft.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ft.copy(F))}function Fe(F,ue){let _e=l.get(ue);_e===void 0&&(_e=new WeakMap,l.set(ue,_e));let Pe=_e.get(F);Pe===void 0&&(Pe=n.getUniformBlockIndex(ue,F.name),_e.set(F,Pe))}function be(F,ue){const Pe=l.get(ue).get(F);c.get(ue)!==Pe&&(n.uniformBlockBinding(ue,Pe,F.__bindingPointIndex),c.set(ue,Pe))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,me={},d={},p=new WeakMap,f=[],g=null,_=!1,v=null,m=null,S=null,y=null,x=null,P=null,A=null,L=new ct(0,0,0),I=0,b=!1,w=null,R=null,C=null,k=null,N=null,ht.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:He,bindFramebuffer:Le,drawBuffers:Z,useProgram:Me,setBlending:K,setMaterial:j,setFlipSided:ne,setCullFace:Q,setLineWidth:ge,setPolygonOffset:se,setScissorTest:ve,activeTexture:tt,bindTexture:Qe,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Ne,texImage3D:ae,updateUBOMapping:Fe,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:Ue,texSubImage2D:Y,texSubImage3D:re,compressedTexSubImage2D:J,compressedTexSubImage3D:Oe,scissor:Ee,viewport:Je,reset:it}}function Px(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,u=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):ua("canvas")}function _(T,M,V){let Y=1;const re=Qe(T);if((re.width>V||re.height>V)&&(Y=V/Math.max(re.width,re.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(Y*re.width),Oe=Math.floor(Y*re.height);d===void 0&&(d=g(J,Oe));const pe=M?g(J,Oe):d;return pe.width=J,pe.height=Oe,pe.getContext("2d").drawImage(T,0,0,J,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Oe+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),T;return T}function v(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,M,V,Y,re=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=M;if(M===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),M===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),M===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){const Oe=re?ca:gt.getTransfer(Y);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Oe===wt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(T,M){let V;return T?M===null||M===Mr||M===$s?V=n.DEPTH24_STENCIL8:M===si?V=n.DEPTH32F_STENCIL8:M===Ws&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mr||M===$s?V=n.DEPTH_COMPONENT24:M===si?V=n.DEPTH_COMPONENT32F:M===Ws&&(V=n.DEPTH_COMPONENT16),V}function P(T,M){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==Cn&&T.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){const M=T.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&u.delete(M)}function L(T){const M=T.target;M.removeEventListener("dispose",L),w(M)}function I(T){const M=i.get(T);if(M.__webglInit===void 0)return;const V=T.source,Y=p.get(V);if(Y){const re=Y[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(T),Object.keys(Y).length===0&&p.delete(V)}i.remove(T)}function b(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const V=T.source,Y=p.get(V);delete Y[M.__cacheKey],o.memory.textures--}function w(T){const M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let re=0;re<M.__webglFramebuffer[Y].length;re++)n.deleteFramebuffer(M.__webglFramebuffer[Y][re]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=T.textures;for(let Y=0,re=V.length;Y<re;Y++){const J=i.get(V[Y]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[Y])}i.remove(T)}let R=0;function C(){R=0}function k(){const T=R;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function N(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function O(T,M){const V=i.get(T);if(T.isVideoTexture&&ve(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,T,M);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function B(T,M){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){xe(V,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function q(T,M){const V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){xe(V,T,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function G(T,M){const V=i.get(T);if(T.version>0&&V.__version!==T.version){de(V,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const oe={[aa]:n.REPEAT,[vr]:n.CLAMP_TO_EDGE,[zc]:n.MIRRORED_REPEAT},me={[Cn]:n.NEAREST,[gp]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[_r]:n.LINEAR_MIPMAP_LINEAR},Ae={[yp]:n.NEVER,[Tp]:n.ALWAYS,[Mp]:n.LESS,[Zd]:n.LEQUAL,[bp]:n.EQUAL,[Ep]:n.GEQUAL,[wp]:n.GREATER,[Sp]:n.NOTEQUAL};function Ke(T,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===Va||M.magFilter===Eo||M.magFilter===_r||M.minFilter===ri||M.minFilter===Va||M.minFilter===Eo||M.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,oe[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,oe[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,oe[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==Eo&&M.minFilter!==_r||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ht(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let re=p.get(Y);re===void 0&&(re={},p.set(Y,re));const J=N(M);if(J!==T.__cacheKey){re[J]===void 0&&(re[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[J].usedTimes++;const Oe=re[T.__cacheKey];Oe!==void 0&&(re[T.__cacheKey].usedTimes--,Oe.usedTimes===0&&b(M)),T.__cacheKey=J,T.__webglTexture=re[J].texture}return V}function ft(T,M,V){return Math.floor(Math.floor(T/V)/M)}function X(T,M,V,Y){const J=T.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,Y,M.data);else{J.sort((ae,Ee)=>ae.start-Ee.start);let Oe=0;for(let ae=1;ae<J.length;ae++){const Ee=J[Oe],Je=J[ae],Fe=Ee.start+Ee.count,be=ft(Je.start,M.width,4),it=ft(Ee.start,M.width,4);Je.start<=Fe+1&&be===it&&ft(Je.start+Je.count-1,M.width,4)===be?Ee.count=Math.max(Ee.count,Je.start+Je.count-Ee.start):(++Oe,J[Oe]=Je)}J.length=Oe+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ue=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let ae=0,Ee=J.length;ae<Ee;ae++){const Je=J[ae],Fe=Math.floor(Je.start/4),be=Math.ceil(Je.count/4),it=Fe%M.width,F=Math.floor(Fe/M.width),ue=be,_e=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,it),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,it,F,ue,_e,V,Y,M.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function xe(T,M,V){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const re=ht(T,M),J=M.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+V);const Oe=i.get(J);if(J.version!==Oe.__version||re===!0){t.activeTexture(n.TEXTURE0+V);const pe=gt.getPrimaries(gt.workingColorSpace),Ue=M.colorSpace===ji?null:gt.getPrimaries(M.colorSpace),Ne=M.colorSpace===ji||pe===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ae=_(M.image,!1,r.maxTextureSize);ae=tt(M,ae);const Ee=s.convert(M.format,M.colorSpace),Je=s.convert(M.type);let Fe=y(M.internalFormat,Ee,Je,M.colorSpace,M.isVideoTexture);Ke(Y,M);let be;const it=M.mipmaps,F=M.isVideoTexture!==!0,ue=Oe.__version===void 0||re===!0,_e=J.dataReady,Pe=P(M,ae);if(M.isDepthTexture)Fe=x(M.format===Xs,M.type),ue&&(F?t.texStorage2D(n.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Ee,Je,null));else if(M.isDataTexture)if(it.length>0){F&&ue&&t.texStorage2D(n.TEXTURE_2D,Pe,Fe,it[0].width,it[0].height);for(let ce=0,ee=it.length;ce<ee;ce++)be=it[ce],F?_e&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,be.width,be.height,Ee,Je,be.data):t.texImage2D(n.TEXTURE_2D,ce,Fe,be.width,be.height,0,Ee,Je,be.data);M.generateMipmaps=!1}else F?(ue&&t.texStorage2D(n.TEXTURE_2D,Pe,Fe,ae.width,ae.height),_e&&X(M,ae,Ee,Je)):t.texImage2D(n.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Ee,Je,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Fe,it[0].width,it[0].height,ae.depth);for(let ce=0,ee=it.length;ce<ee;ce++)if(be=it[ce],M.format!==Wn)if(Ee!==null)if(F){if(_e)if(M.layerUpdates.size>0){const ke=rd(be.width,be.height,M.format,M.type);for(const nt of M.layerUpdates){const Ct=be.data.subarray(nt*ke/be.data.BYTES_PER_ELEMENT,(nt+1)*ke/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,nt,be.width,be.height,1,Ee,Ct)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ae.depth,Ee,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Fe,be.width,be.height,ae.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?_e&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ae.depth,Ee,Je,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Fe,be.width,be.height,ae.depth,0,Ee,Je,be.data)}else{F&&ue&&t.texStorage2D(n.TEXTURE_2D,Pe,Fe,it[0].width,it[0].height);for(let ce=0,ee=it.length;ce<ee;ce++)be=it[ce],M.format!==Wn?Ee!==null?F?_e&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?_e&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,be.width,be.height,Ee,Je,be.data):t.texImage2D(n.TEXTURE_2D,ce,Fe,be.width,be.height,0,Ee,Je,be.data)}else if(M.isDataArrayTexture)if(F){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Fe,ae.width,ae.height,ae.depth),_e)if(M.layerUpdates.size>0){const ce=rd(ae.width,ae.height,M.format,M.type);for(const ee of M.layerUpdates){const ke=ae.data.subarray(ee*ce/ae.data.BYTES_PER_ELEMENT,(ee+1)*ce/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,Ee,Je,ke)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Je,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,Ee,Je,ae.data);else if(M.isData3DTexture)F?(ue&&t.texStorage3D(n.TEXTURE_3D,Pe,Fe,ae.width,ae.height,ae.depth),_e&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Je,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,Ee,Je,ae.data);else if(M.isFramebufferTexture){if(ue)if(F)t.texStorage2D(n.TEXTURE_2D,Pe,Fe,ae.width,ae.height);else{let ce=ae.width,ee=ae.height;for(let ke=0;ke<Pe;ke++)t.texImage2D(n.TEXTURE_2D,ke,Fe,ce,ee,0,Ee,Je,null),ce>>=1,ee>>=1}}else if(it.length>0){if(F&&ue){const ce=Qe(it[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Fe,ce.width,ce.height)}for(let ce=0,ee=it.length;ce<ee;ce++)be=it[ce],F?_e&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ee,Je,be):t.texImage2D(n.TEXTURE_2D,ce,Fe,Ee,Je,be);M.generateMipmaps=!1}else if(F){if(ue){const ce=Qe(ae);t.texStorage2D(n.TEXTURE_2D,Pe,Fe,ce.width,ce.height)}_e&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Je,ae)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Ee,Je,ae);v(M)&&m(Y),Oe.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function de(T,M,V){if(M.image.length!==6)return;const Y=ht(T,M),re=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);const J=i.get(re);if(re.version!==J.__version||Y===!0){t.activeTexture(n.TEXTURE0+V);const Oe=gt.getPrimaries(gt.workingColorSpace),pe=M.colorSpace===ji?null:gt.getPrimaries(M.colorSpace),Ue=M.colorSpace===ji||Oe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ee=0;ee<6;ee++)!Ne&&!ae?Ee[ee]=_(M.image[ee],!0,r.maxCubemapSize):Ee[ee]=ae?M.image[ee].image:M.image[ee],Ee[ee]=tt(M,Ee[ee]);const Je=Ee[0],Fe=s.convert(M.format,M.colorSpace),be=s.convert(M.type),it=y(M.internalFormat,Fe,be,M.colorSpace),F=M.isVideoTexture!==!0,ue=J.__version===void 0||Y===!0,_e=re.dataReady;let Pe=P(M,Je);Ke(n.TEXTURE_CUBE_MAP,M);let ce;if(Ne){F&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,it,Je.width,Je.height);for(let ee=0;ee<6;ee++){ce=Ee[ee].mipmaps;for(let ke=0;ke<ce.length;ke++){const nt=ce[ke];M.format!==Wn?Fe!==null?F?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,0,0,nt.width,nt.height,Fe,nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,it,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,0,0,nt.width,nt.height,Fe,be,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke,it,nt.width,nt.height,0,Fe,be,nt.data)}}}else{if(ce=M.mipmaps,F&&ue){ce.length>0&&Pe++;const ee=Qe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,it,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee[ee].width,Ee[ee].height,Fe,be,Ee[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,it,Ee[ee].width,Ee[ee].height,0,Fe,be,Ee[ee].data);for(let ke=0;ke<ce.length;ke++){const Ct=ce[ke].image[ee].image;F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,0,0,Ct.width,Ct.height,Fe,be,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,it,Ct.width,Ct.height,0,Fe,be,Ct.data)}}else{F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,be,Ee[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,it,Fe,be,Ee[ee]);for(let ke=0;ke<ce.length;ke++){const nt=ce[ke];F?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,0,0,Fe,be,nt.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ke+1,it,Fe,be,nt.image[ee])}}}v(M)&&m(n.TEXTURE_CUBE_MAP),J.__version=re.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function He(T,M,V,Y,re,J){const Oe=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),Ue=y(V.internalFormat,Oe,pe,V.colorSpace),Ne=i.get(M),ae=i.get(V);if(ae.__renderTarget=M,!Ne.__hasExternalTextures){const Ee=Math.max(1,M.width>>J),Je=Math.max(1,M.height>>J);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,J,Ue,Ee,Je,M.depth,0,Oe,pe,null):t.texImage2D(re,J,Ue,Ee,Je,0,Oe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,re,ae.__webglTexture,0,ge(M)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,re,ae.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(T,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const Y=M.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,J=x(M.stencilBuffer,re),Oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=ge(M);se(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,J,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,T)}else{const Y=M.textures;for(let re=0;re<Y.length;re++){const J=Y[re],Oe=s.convert(J.format,J.colorSpace),pe=s.convert(J.type),Ue=y(J.internalFormat,Oe,pe,J.colorSpace),Ne=ge(M);V&&se(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ue,M.width,M.height):se(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Ue,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const re=Y.__webglTexture,J=ge(M);if(M.depthTexture.format===qs)se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(M.depthTexture.format===Xs)se(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Me(T){const M=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=Y}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?Z(M.__webglFramebuffer[0],T):Z(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),Le(M.__webglDepthbuffer[Y],T,!1);else{const re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,J)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Le(M.__webglDepthbuffer,T,!1);else{const re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(T,M,V){const Y=i.get(T);M!==void 0&&He(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Me(T)}function D(T){const M=T.texture,V=i.get(T),Y=i.get(M);T.addEventListener("dispose",L);const re=T.textures,J=T.isWebGLCubeRenderTarget===!0,Oe=re.length>1;if(Oe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)V.__webglFramebuffer[pe][Ue]=n.createFramebuffer()}else V.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)V.__webglFramebuffer[pe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let pe=0,Ue=re.length;pe<Ue;pe++){const Ne=i.get(re[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&se(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const Ue=re[pe];V.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const Ne=s.convert(Ue.format,Ue.colorSpace),ae=s.convert(Ue.type),Ee=y(Ue.internalFormat,Ne,ae,Ue.colorSpace,T.isXRRenderTarget===!0),Je=ge(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Ee,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)He(V.__webglFramebuffer[pe][Ue],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue);else He(V.__webglFramebuffer[pe],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let pe=0,Ue=re.length;pe<Ue;pe++){const Ne=re[pe],ae=i.get(Ne);let Ee=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ae.__webglTexture),Ke(Ee,Ne),He(V.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+pe,Ee,0),v(Ne)&&m(Ee)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Y.__webglTexture),Ke(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)He(V.__webglFramebuffer[Ue],T,M,n.COLOR_ATTACHMENT0,pe,Ue);else He(V.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,pe,0);v(M)&&m(pe),t.unbindTexture()}T.depthBuffer&&Me(T)}function K(T){const M=T.textures;for(let V=0,Y=M.length;V<Y;V++){const re=M[V];if(v(re)){const J=S(T),Oe=i.get(re).__webglTexture;t.bindTexture(J,Oe),m(J),t.unbindTexture()}}}const j=[],ne=[];function Q(T){if(T.samples>0){if(se(T)===!1){const M=T.textures,V=T.width,Y=T.height;let re=n.COLOR_BUFFER_BIT;const J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(T),pe=M.length>1;if(pe)for(let Ne=0;Ne<M.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ue=T.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const ae=i.get(M[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,V,Y,0,0,V,Y,re,n.NEAREST),c===!0&&(j.length=0,ne.length=0,j.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(J),ne.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<M.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const ae=i.get(M[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ge(T){return Math.min(r.maxSamples,T.samples)}function se(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function tt(T,M){const V=T.colorSpace,Y=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==as&&V!==ji&&(gt.getTransfer(V)===wt?(Y!==Wn||re!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Qe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=C,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=D,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=He,this.useMultisampledRTT=se}function Lx(n,e){function t(i,r=ji){let s;const o=gt.getTransfer(r);if(i===ui)return n.UNSIGNED_BYTE;if(i===Cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$d)return n.BYTE;if(i===qd)return n.SHORT;if(i===Ws)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===Mr)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===co)return n.HALF_FLOAT;if(i===Yd)return n.ALPHA;if(i===jd)return n.RGB;if(i===Wn)return n.RGBA;if(i===qs)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===Pl)return n.RED;if(i===Ll)return n.RED_INTEGER;if(i===Jd)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Il)return n.RGBA_INTEGER;if(i===Zo||i===Qo||i===ea||i===ta)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hc||i===Vc||i===Gc||i===Wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$c||i===qc||i===Xc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$c||i===qc)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yc||i===jc||i===Jc||i===Kc||i===Zc||i===Qc||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sl)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===al)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===cl||i===ll)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===na)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kd||i===ul||i===dl||i===hl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===na)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Ah extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
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

}`;class Ux{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ah(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nr({vertexShader:Dx,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fe(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nx extends ps{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,p=null,f=null,g=null;const _=new Ux,v={},m=t.getContextAttributes();let S=null,y=null;const x=[],P=[],A=new he;let L=null;const I=new gn;I.viewport=new zt;const b=new gn;b.viewport=new zt;const w=[I,b],R=new ng;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let xe=x[X];return xe===void 0&&(xe=new lc,x[X]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(X){let xe=x[X];return xe===void 0&&(xe=new lc,x[X]=xe),xe.getGripSpace()},this.getHand=function(X){let xe=x[X];return xe===void 0&&(xe=new lc,x[X]=xe),xe.getHandSpace()};function N(X){const xe=P.indexOf(X.inputSource);if(xe===-1)return;const de=x[xe];de!==void 0&&(de.update(X.inputSource,X.frame,l||o),de.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",B);for(let X=0;X<x.length;X++){const xe=P[X];xe!==null&&(P[X]=null,x[X].disconnect(xe))}C=null,k=null,_.reset();for(const X in v)delete v[X];e.setRenderTarget(S),f=null,p=null,d=null,r=null,y=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",O),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,He=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Xs:qs,He=m.stencil?$s:Mr);const Z={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};p=d.createProjectionLayer(Z),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Ui(p.textureWidth,p.textureHeight,{format:Wn,type:ui,depthTexture:new lh(p.textureWidth,p.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ui(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ft.setContext(r),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(X){for(let xe=0;xe<X.removed.length;xe++){const de=X.removed[xe],He=P.indexOf(de);He>=0&&(P[He]=null,x[He].disconnect(de))}for(let xe=0;xe<X.added.length;xe++){const de=X.added[xe];let He=P.indexOf(de);if(He===-1){for(let Z=0;Z<x.length;Z++)if(Z>=P.length){P.push(de),He=Z;break}else if(P[Z]===null){P[Z]=de,He=Z;break}if(He===-1)break}const Le=x[He];Le&&Le.connect(de)}}const q=new U,G=new U;function oe(X,xe,de){q.setFromMatrixPosition(xe.matrixWorld),G.setFromMatrixPosition(de.matrixWorld);const He=q.distanceTo(G),Le=xe.projectionMatrix.elements,Z=de.projectionMatrix.elements,Me=Le[14]/(Le[10]-1),Ce=Le[14]/(Le[10]+1),D=(Le[9]+1)/Le[5],K=(Le[9]-1)/Le[5],j=(Le[8]-1)/Le[0],ne=(Z[8]+1)/Z[0],Q=Me*j,ge=Me*ne,se=He/(-j+ne),ve=se*-j;if(xe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ve),X.translateZ(se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Le[10]===-1)X.projectionMatrix.copy(xe.projectionMatrix),X.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const tt=Me+se,Qe=Ce+se,T=Q-ve,M=ge+(He-ve),V=D*Ce/Qe*tt,Y=K*Ce/Qe*tt;X.projectionMatrix.makePerspective(T,M,V,Y,tt,Qe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function me(X,xe){xe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(xe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let xe=X.near,de=X.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(de=_.depthFar)),R.near=b.near=I.near=xe,R.far=b.far=I.far=de,(C!==R.near||k!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,k=R.far),R.layers.mask=X.layers.mask|6,I.layers.mask=R.layers.mask&3,b.layers.mask=R.layers.mask&5;const He=X.parent,Le=R.cameras;me(R,He);for(let Z=0;Z<Le.length;Z++)me(Le[Z],He);Le.length===2?oe(R,I,b):R.projectionMatrix.copy(I.projectionMatrix),Ae(X,R,He)};function Ae(X,xe,de){de===null?X.matrix.copy(xe.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(xe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(xe.projectionMatrix),X.projectionMatrixInverse.copy(xe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ys*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(X){return v[X]};let Ke=null;function ht(X,xe){if(u=xe.getViewerPose(l||o),g=xe,u!==null){const de=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let He=!1;de.length!==R.cameras.length&&(R.cameras.length=0,He=!0);for(let Ce=0;Ce<de.length;Ce++){const D=de[Ce];let K=null;if(f!==null)K=f.getViewport(D);else{const ne=d.getViewSubImage(p,D);K=ne.viewport,Ce===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let j=w[Ce];j===void 0&&(j=new gn,j.layers.enable(Ce),j.viewport=new zt,w[Ce]=j),j.matrix.fromArray(D.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(D.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(K.x,K.y,K.width,K.height),Ce===0&&(R.matrix.copy(j.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),He===!0&&R.cameras.push(j)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ce=d.getDepthInformation(de[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(Ce,r.renderState)}if(Le&&Le.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Ce=0;Ce<de.length;Ce++){const D=de[Ce].camera;if(D){let K=v[D];K||(K=new Ah,v[D]=K);const j=d.getCameraImage(D);K.sourceTexture=j}}}for(let de=0;de<x.length;de++){const He=P[de],Le=x[de];He!==null&&Le!==void 0&&Le.update(He,xe,l||o)}Ke&&Ke(X,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const ft=new bh;ft.setAnimationLoop(ht),this.setAnimationLoop=function(X){Ke=X},this.dispose=function(){}}}const hr=new di,kx=new Mt;function Ox(n,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,sh(n)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,S,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),d(v,m)):m.isMeshPhongMaterial?(s(v,m),u(v,m)):m.isMeshStandardMaterial?(s(v,m),p(v,m),m.isMeshPhysicalMaterial&&f(v,m,x)):m.isMeshMatcapMaterial?(s(v,m),g(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),_(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?c(v,m,S,y):m.isSpriteMaterial?l(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===pn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===pn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,x=S.envMapRotation;y&&(v.envMap.value=y,hr.copy(x),hr.x*=-1,hr.y*=-1,hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),v.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(hr)),v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,S,y){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*S,v.scale.value=y*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function l(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function p(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function f(v,m,S){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=S.texture,v.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,m){m.matcap&&(v.matcap.value=m.matcap)}function _(v,m){const S=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(S.matrixWorld),v.nearDistance.value=S.shadow.camera.near,v.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fx(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function l(S,y){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",v));const P=y.program;i.updateUBOMapping(S,P);const A=e.render.frame;s[S.id]!==A&&(p(S),s[S.id]=A)}function u(S){const y=d();S.__bindingPointIndex=y;const x=n.createBuffer(),P=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const y=r[S.id],x=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,L=x.length;A<L;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,w=I.length;b<w;b++){const R=I[b];if(f(R,A,b,P)===!0){const C=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let O=0;O<k.length;O++){const B=k[O],q=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,C+N,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,y,x,P){const A=S.value,L=y+"_"+x;if(P[L]===void 0)return typeof A=="number"||typeof A=="boolean"?P[L]=A:P[L]=A.clone(),!0;{const I=P[L];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return P[L]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(S){const y=S.uniforms;let x=0;const P=16;for(let L=0,I=y.length;L<I;L++){const b=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,R=b.length;w<R;w++){const C=b[w],k=Array.isArray(C.value)?C.value:[C.value];for(let N=0,O=k.length;N<O;N++){const B=k[N],q=_(B),G=x%P,oe=G%q.boundary,me=G+oe;x+=oe,me!==0&&P-me<q.storage&&(x+=P-me),C.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=q.storage}}}const A=x%P;return A>0&&(x+=P-A),S.__size=x,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function v(S){const y=S.target;y.removeEventListener("dispose",v);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class Bx{constructor(e={}){const{canvas:t=Gp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=Qt;let A=0,L=0,I=null,b=-1,w=null;const R=new zt,C=new zt;let k=null;const N=new ct(0);let O=0,B=t.width,q=t.height,G=1,oe=null,me=null;const Ae=new zt(0,0,B,q),Ke=new zt(0,0,B,q);let ht=!1;const ft=new zl;let X=!1,xe=!1;const de=new Mt,He=new U,Le=new zt,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Ce(){return I===null?G:1}let D=i;function K(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){const z="webgl2";if(D=K(z,E),D===null)throw K(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let j,ne,Q,ge,se,ve,tt,Qe,T,M,V,Y,re,J,Oe,pe,Ue,Ne,ae,Ee,Je,Fe,be,it;function F(){j=new jv(D),j.init(),Fe=new Lx(D,j),ne=new Vv(D,j,e,Fe),Q=new Rx(D,j),ne.reversedDepthBuffer&&p&&Q.buffers.depth.setReversed(!0),ge=new Zv(D),se=new gx,ve=new Px(D,j,Q,se,ne,Fe,ge),tt=new Wv(x),Qe=new Yv(x),T=new rg(D),be=new zv(D,T),M=new Jv(D,T,ge,be),V=new e_(D,M,T,ge),ae=new Qv(D,ne,ve),pe=new Gv(se),Y=new mx(x,tt,Qe,j,ne,be,pe),re=new Ox(x,se),J=new _x,Oe=new Sx(j),Ne=new Bv(x,tt,Qe,Q,V,f,c),Ue=new Ax(x,V,ne),it=new Fx(D,ge,ne,Q),Ee=new Hv(D,j,ge),Je=new Kv(D,j,ge),ge.programs=Y.programs,x.capabilities=ne,x.extensions=j,x.properties=se,x.renderLists=J,x.shadowMap=Ue,x.state=Q,x.info=ge}F();const ue=new Nx(x,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(B,q,!1))},this.getSize=function(E){return E.set(B,q)},this.setSize=function(E,z,W=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,q=z,t.width=Math.floor(E*G),t.height=Math.floor(z*G),W===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(B*G,q*G).floor()},this.setDrawingBufferSize=function(E,z,W){B=E,q=z,G=W,t.width=Math.floor(E*W),t.height=Math.floor(z*W),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Ae)},this.setViewport=function(E,z,W,$){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,z,W,$),Q.viewport(R.copy(Ae).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ke)},this.setScissor=function(E,z,W,$){E.isVector4?Ke.set(E.x,E.y,E.z,E.w):Ke.set(E,z,W,$),Q.scissor(C.copy(Ke).multiplyScalar(G).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){Q.setScissorTest(ht=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,W=!0){let $=0;if(E){let H=!1;if(I!==null){const le=I.texture.format;H=le===Il||le===Dl||le===Ll}if(H){const le=I.texture.type,we=le===ui||le===Mr||le===Ws||le===$s||le===Cl||le===Rl,Ie=Ne.getClearColor(),Re=Ne.getClearAlpha(),je=Ie.r,Ze=Ie.g,Ve=Ie.b;we?(g[0]=je,g[1]=Ze,g[2]=Ve,g[3]=Re,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=je,_[1]=Ze,_[2]=Ve,_[3]=Re,D.clearBufferiv(D.COLOR,0,_))}else $|=D.COLOR_BUFFER_BIT}z&&($|=D.DEPTH_BUFFER_BIT),W&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ne.dispose(),J.dispose(),Oe.dispose(),se.dispose(),tt.dispose(),Qe.dispose(),V.dispose(),be.dispose(),it.dispose(),Y.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ni),ue.removeEventListener("sessionend",mu),sr.stop()};function _e(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=ge.autoReset,z=Ue.enabled,W=Ue.autoUpdate,$=Ue.needsUpdate,H=Ue.type;F(),ge.autoReset=E,Ue.enabled=z,Ue.autoUpdate=W,Ue.needsUpdate=$,Ue.type=H}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const z=E.target;z.removeEventListener("dispose",ee),ke(z)}function ke(E){nt(E),se.remove(E)}function nt(E){const z=se.get(E).programs;z!==void 0&&(z.forEach(function(W){Y.releaseProgram(W)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,W,$,H,le){z===null&&(z=Z);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ie=kf(E,z,W,$,H);Q.setMaterial($,we);let Re=W.index,je=1;if($.wireframe===!0){if(Re=M.getWireframeAttribute(W),Re===void 0)return;je=2}const Ze=W.drawRange,Ve=W.attributes.position;let ut=Ze.start*je,bt=(Ze.start+Ze.count)*je;le!==null&&(ut=Math.max(ut,le.start*je),bt=Math.min(bt,(le.start+le.count)*je)),Re!==null?(ut=Math.max(ut,0),bt=Math.min(bt,Re.count)):Ve!=null&&(ut=Math.max(ut,0),bt=Math.min(bt,Ve.count));const Ft=bt-ut;if(Ft<0||Ft===1/0)return;be.setup(H,$,Ie,W,Re);let Pt,Et=Ee;if(Re!==null&&(Pt=T.get(Re),Et=Je,Et.setIndex(Pt)),H.isMesh)$.wireframe===!0?(Q.setLineWidth($.wireframeLinewidth*Ce()),Et.setMode(D.LINES)):Et.setMode(D.TRIANGLES);else if(H.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),Q.setLineWidth(qe*Ce()),H.isLineSegments?Et.setMode(D.LINES):H.isLineLoop?Et.setMode(D.LINE_LOOP):Et.setMode(D.LINE_STRIP)}else H.isPoints?Et.setMode(D.POINTS):H.isSprite&&Et.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qe=H._multiDrawStarts,Lt=H._multiDrawCounts,mt=H._multiDrawCount,bn=Re?T.get(Re).bytesPerElement:1,Dr=se.get($).currentProgram.getUniforms();for(let wn=0;wn<mt;wn++)Dr.setValue(D,"_gl_DrawID",wn),Et.render(qe[wn]/bn,Lt[wn])}else if(H.isInstancedMesh)Et.renderInstances(ut,Ft,H.count);else if(W.isInstancedBufferGeometry){const qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Lt=Math.min(W.instanceCount,qe);Et.renderInstances(ut,Ft,Lt)}else Et.render(ut,Ft)};function Ct(E,z,W){E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,So(E,z,W),E.side=tr,E.needsUpdate=!0,So(E,z,W),E.side=vn):So(E,z,W)}this.compile=function(E,z,W=null){W===null&&(W=E),m=Oe.get(W),m.init(z),y.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const $=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let we=0;we<le.length;we++){const Ie=le[we];Ct(Ie,W,H),$.add(Ie)}else Ct(le,W,H),$.add(le)}),m=y.pop(),$},this.compileAsync=function(E,z,W=null){const $=this.compile(E,z,W);return new Promise(H=>{function le(){if($.forEach(function(we){se.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){H(E);return}setTimeout(le,10)}j.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let xt=null;function Mi(E){xt&&xt(E)}function ni(){sr.stop()}function mu(){sr.start()}const sr=new bh;sr.setAnimationLoop(Mi),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(E){xt=E,ue.setAnimationLoop(E),E===null?sr.stop():sr.start()},ue.addEventListener("sessionstart",ni),ue.addEventListener("sessionend",mu),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(z),z=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,z,I),m=Oe.get(E,y.length),m.init(z),y.push(m),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ft.setFromProjectionMatrix(de,oi,z.reversedDepth),xe=this.localClippingEnabled,X=pe.init(this.clippingPlanes,xe),v=J.get(E,S.length),v.init(),S.push(v),ue.enabled===!0&&ue.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&za(le,z,-1/0,x.sortObjects)}za(E,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(oe,me),Me=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Me&&Ne.addToRenderList(v,E),this.info.render.frame++,X===!0&&pe.beginShadows();const W=m.state.shadowsArray;Ue.render(W,E,z),X===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,H=v.transmissive;if(m.setupLights(),z.isArrayCamera){const le=z.cameras;if(H.length>0)for(let we=0,Ie=le.length;we<Ie;we++){const Re=le[we];vu($,H,E,Re)}Me&&Ne.render(E);for(let we=0,Ie=le.length;we<Ie;we++){const Re=le[we];gu(v,E,Re,Re.viewport)}}else H.length>0&&vu($,H,E,z),Me&&Ne.render(E),gu(v,E,z);I!==null&&L===0&&(ve.updateMultisampleRenderTarget(I),ve.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,z),be.resetDefaultState(),b=-1,w=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&pe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function za(E,z,W,$){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ft.intersectsSprite(E)){$&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const we=V.update(E),Ie=E.material;Ie.visible&&v.push(E,we,Ie,W,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ft.intersectsObject(E))){const we=V.update(E),Ie=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Le.copy(we.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(Ie)){const Re=we.groups;for(let je=0,Ze=Re.length;je<Ze;je++){const Ve=Re[je],ut=Ie[Ve.materialIndex];ut&&ut.visible&&v.push(E,we,ut,W,Le.z,Ve)}}else Ie.visible&&v.push(E,we,Ie,W,Le.z,null)}}const le=E.children;for(let we=0,Ie=le.length;we<Ie;we++)za(le[we],z,W,$)}function gu(E,z,W,$){const H=E.opaque,le=E.transmissive,we=E.transparent;m.setupLightsView(W),X===!0&&pe.setGlobalState(x.clippingPlanes,W),$&&Q.viewport(R.copy($)),H.length>0&&wo(H,z,W),le.length>0&&wo(le,z,W),we.length>0&&wo(we,z,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function vu(E,z,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Ui(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?co:ui,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const le=m.state.transmissionRenderTarget[$.id],we=$.viewport||R;le.setSize(we.z*x.transmissionResolutionScale,we.w*x.transmissionResolutionScale);const Ie=x.getRenderTarget(),Re=x.getActiveCubeFace(),je=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(N),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Me&&Ne.render(W);const Ze=x.toneMapping;x.toneMapping=Qi;const Ve=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),X===!0&&pe.setGlobalState(x.clippingPlanes,$),wo(E,W,$),ve.updateMultisampleRenderTarget(le),ve.updateRenderTargetMipmap(le),j.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let bt=0,Ft=z.length;bt<Ft;bt++){const Pt=z[bt],Et=Pt.object,qe=Pt.geometry,Lt=Pt.material,mt=Pt.group;if(Lt.side===vn&&Et.layers.test($.layers)){const bn=Lt.side;Lt.side=pn,Lt.needsUpdate=!0,_u(Et,W,$,qe,Lt,mt),Lt.side=bn,Lt.needsUpdate=!0,ut=!0}}ut===!0&&(ve.updateMultisampleRenderTarget(le),ve.updateRenderTargetMipmap(le))}x.setRenderTarget(Ie,Re,je),x.setClearColor(N,O),Ve!==void 0&&($.viewport=Ve),x.toneMapping=Ze}function wo(E,z,W){const $=z.isScene===!0?z.overrideMaterial:null;for(let H=0,le=E.length;H<le;H++){const we=E[H],Ie=we.object,Re=we.geometry,je=we.group;let Ze=we.material;Ze.allowOverride===!0&&$!==null&&(Ze=$),Ie.layers.test(W.layers)&&_u(Ie,z,W,Re,Ze,je)}}function _u(E,z,W,$,H,le){E.onBeforeRender(x,z,W,$,H,le),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,z,W,$,E,le),H.transparent===!0&&H.side===vn&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,x.renderBufferDirect(W,z,$,H,E,le),H.side=tr,H.needsUpdate=!0,x.renderBufferDirect(W,z,$,H,E,le),H.side=vn):x.renderBufferDirect(W,z,$,H,E,le),E.onAfterRender(x,z,W,$,H,le)}function So(E,z,W){z.isScene!==!0&&(z=Z);const $=se.get(E),H=m.state.lights,le=m.state.shadowsArray,we=H.state.version,Ie=Y.getParameters(E,H.state,le,z,W),Re=Y.getProgramCacheKey(Ie);let je=$.programs;$.environment=E.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(E.isMeshStandardMaterial?Qe:tt).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",ee),je=new Map,$.programs=je);let Ze=je.get(Re);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===we)return yu(E,Ie),Ze}else Ie.uniforms=Y.getUniforms(E),E.onBeforeCompile(Ie,x),Ze=Y.acquireProgram(Ie,Re),je.set(Re,Ze),$.uniforms=Ie.uniforms;const Ve=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=pe.uniform),yu(E,Ie),$.needsLights=Ff(E),$.lightsStateVersion=we,$.needsLights&&(Ve.ambientLightColor.value=H.state.ambient,Ve.lightProbe.value=H.state.probe,Ve.directionalLights.value=H.state.directional,Ve.directionalLightShadows.value=H.state.directionalShadow,Ve.spotLights.value=H.state.spot,Ve.spotLightShadows.value=H.state.spotShadow,Ve.rectAreaLights.value=H.state.rectArea,Ve.ltc_1.value=H.state.rectAreaLTC1,Ve.ltc_2.value=H.state.rectAreaLTC2,Ve.pointLights.value=H.state.point,Ve.pointLightShadows.value=H.state.pointShadow,Ve.hemisphereLights.value=H.state.hemi,Ve.directionalShadowMap.value=H.state.directionalShadowMap,Ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ve.spotShadowMap.value=H.state.spotShadowMap,Ve.spotLightMatrix.value=H.state.spotLightMatrix,Ve.spotLightMap.value=H.state.spotLightMap,Ve.pointShadowMap.value=H.state.pointShadowMap,Ve.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function xu(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=ia.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function yu(E,z){const W=se.get(E);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function kf(E,z,W,$,H){z.isScene!==!0&&(z=Z),ve.resetTextureUnits();const le=z.fog,we=$.isMeshStandardMaterial?z.environment:null,Ie=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:as,Re=($.isMeshStandardMaterial?Qe:tt).get($.envMap||we),je=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ze=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,bt=!!W.morphAttributes.color;let Ft=Qi;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const Pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=Pt!==void 0?Pt.length:0,qe=se.get($),Lt=m.state.lights;if(X===!0&&(xe===!0||E!==w)){const ln=E===w&&$.id===b;pe.setState($,E,ln)}let mt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Lt.state.version||qe.outputColorSpace!==Ie||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isBatchedMesh&&qe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&qe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qe.instancingMorph===!1&&H.morphTexture!==null||qe.envMap!==Re||$.fog===!0&&qe.fog!==le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==pe.numPlanes||qe.numIntersection!==pe.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Ze||qe.morphTargets!==Ve||qe.morphNormals!==ut||qe.morphColors!==bt||qe.toneMapping!==Ft||qe.morphTargetsCount!==Et)&&(mt=!0):(mt=!0,qe.__version=$.version);let bn=qe.currentProgram;mt===!0&&(bn=So($,z,H));let Dr=!1,wn=!1,Es=!1;const Dt=bn.getUniforms(),Pn=qe.uniforms;if(Q.useProgram(bn.program)&&(Dr=!0,wn=!0,Es=!0),$.id!==b&&(b=$.id,wn=!0),Dr||w!==E){Q.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Dt.setValue(D,"projectionMatrix",E.projectionMatrix),Dt.setValue(D,"viewMatrix",E.matrixWorldInverse);const mn=Dt.map.cameraPosition;mn!==void 0&&mn.setValue(D,He.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&Dt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Dt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,wn=!0,Es=!0)}if(H.isSkinnedMesh){Dt.setOptional(D,H,"bindMatrix"),Dt.setOptional(D,H,"bindMatrixInverse");const ln=H.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(D,"boneTexture",ln.boneTexture,ve))}H.isBatchedMesh&&(Dt.setOptional(D,H,"batchingTexture"),Dt.setValue(D,"batchingTexture",H._matricesTexture,ve),Dt.setOptional(D,H,"batchingIdTexture"),Dt.setValue(D,"batchingIdTexture",H._indirectTexture,ve),Dt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Dt.setValue(D,"batchingColorTexture",H._colorsTexture,ve));const Ln=W.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ae.update(H,W,bn),(wn||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Dt.setValue(D,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Pn.envMap.value=Re,Pn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Pn.envMapIntensity.value=z.environmentIntensity),wn&&(Dt.setValue(D,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Of(Pn,Es),le&&$.fog===!0&&re.refreshFogUniforms(Pn,le),re.refreshMaterialUniforms(Pn,$,G,q,m.state.transmissionRenderTarget[E.id]),ia.upload(D,xu(qe),Pn,ve)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ia.upload(D,xu(qe),Pn,ve),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Dt.setValue(D,"center",H.center),Dt.setValue(D,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(D,"normalMatrix",H.normalMatrix),Dt.setValue(D,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ln=$.uniformsGroups;for(let mn=0,Ha=ln.length;mn<Ha;mn++){const or=ln[mn];it.update(or,bn),it.bind(or,bn)}}return bn}function Of(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Ff(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,z,W){const $=se.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),se.get(E.texture).__webglTexture=z,se.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const W=se.get(E);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Bf=D.createFramebuffer();this.setRenderTarget=function(E,z=0,W=0){I=E,A=z,L=W;let $=!0,H=null,le=!1,we=!1;if(E){const Re=se.get(E);if(Re.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)ve.setupRenderTarget(E);else if(Re.__hasExternalTextures)ve.rebindTextures(E,se.get(E.texture).__webglTexture,se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(Re.__boundDepthTexture!==Ve){if(Ve!==null&&se.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(E)}}const je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(we=!0);const Ze=se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ze[z])?H=Ze[z][W]:H=Ze[z],le=!0):E.samples>0&&ve.useMultisampledRTT(E)===!1?H=se.get(E).__webglMultisampledFramebuffer:Array.isArray(Ze)?H=Ze[W]:H=Ze,R.copy(E.viewport),C.copy(E.scissor),k=E.scissorTest}else R.copy(Ae).multiplyScalar(G).floor(),C.copy(Ke).multiplyScalar(G).floor(),k=ht;if(W!==0&&(H=Bf),Q.bindFramebuffer(D.FRAMEBUFFER,H)&&$&&Q.drawBuffers(E,H),Q.viewport(R),Q.scissor(C),Q.setScissorTest(k),le){const Re=se.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,W)}else if(we){const Re=z;for(let je=0;je<E.textures.length;je++){const Ze=se.get(E.textures[je]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+je,Ze.__webglTexture,W,Re)}}else if(E!==null&&W!==0){const Re=se.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(E,z,W,$,H,le,we,Ie=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){Q.bindFramebuffer(D.FRAMEBUFFER,Re);try{const je=E.textures[Ie],Ze=je.format,Ve=je.type;if(!ne.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-$&&W>=0&&W<=E.height-H&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(z,W,$,H,Fe.convert(Ze),Fe.convert(Ve),le))}finally{const je=I!==null?se.get(I).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(E,z,W,$,H,le,we,Ie=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(z>=0&&z<=E.width-$&&W>=0&&W<=E.height-H){Q.bindFramebuffer(D.FRAMEBUFFER,Re);const je=E.textures[Ie],Ze=je.format,Ve=je.type;if(!ne.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(z,W,$,H,Fe.convert(Ze),Fe.convert(Ve),0);const bt=I!==null?se.get(I).__webglFramebuffer:null;Q.bindFramebuffer(D.FRAMEBUFFER,bt);const Ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wp(D,Ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(ut),D.deleteSync(Ft),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,W=0){const $=Math.pow(2,-W),H=Math.floor(E.image.width*$),le=Math.floor(E.image.height*$),we=z!==null?z.x:0,Ie=z!==null?z.y:0;ve.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,we,Ie,H,le),Q.unbindTexture()};const zf=D.createFramebuffer(),Hf=D.createFramebuffer();this.copyTextureToTexture=function(E,z,W=null,$=null,H=0,le=null){le===null&&(H!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let we,Ie,Re,je,Ze,Ve,ut,bt,Ft;const Pt=E.isCompressedTexture?E.mipmaps[le]:E.image;if(W!==null)we=W.max.x-W.min.x,Ie=W.max.y-W.min.y,Re=W.isBox3?W.max.z-W.min.z:1,je=W.min.x,Ze=W.min.y,Ve=W.isBox3?W.min.z:0;else{const Ln=Math.pow(2,-H);we=Math.floor(Pt.width*Ln),Ie=Math.floor(Pt.height*Ln),E.isDataArrayTexture?Re=Pt.depth:E.isData3DTexture?Re=Math.floor(Pt.depth*Ln):Re=1,je=0,Ze=0,Ve=0}$!==null?(ut=$.x,bt=$.y,Ft=$.z):(ut=0,bt=0,Ft=0);const Et=Fe.convert(z.format),qe=Fe.convert(z.type);let Lt;z.isData3DTexture?(ve.setTexture3D(z,0),Lt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ve.setTexture2DArray(z,0),Lt=D.TEXTURE_2D_ARRAY):(ve.setTexture2D(z,0),Lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const mt=D.getParameter(D.UNPACK_ROW_LENGTH),bn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Dr=D.getParameter(D.UNPACK_SKIP_PIXELS),wn=D.getParameter(D.UNPACK_SKIP_ROWS),Es=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);const Dt=E.isDataArrayTexture||E.isData3DTexture,Pn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Ln=se.get(E),ln=se.get(z),mn=se.get(Ln.__renderTarget),Ha=se.get(ln.__renderTarget);Q.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let or=0;or<Re;or++)Dt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,se.get(E).__webglTexture,H,Ve+or),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,se.get(z).__webglTexture,le,Ft+or)),D.blitFramebuffer(je,Ze,we,Ie,ut,bt,we,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||se.has(E)){const Ln=se.get(E),ln=se.get(z);Q.bindFramebuffer(D.READ_FRAMEBUFFER,zf),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hf);for(let mn=0;mn<Re;mn++)Dt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ln.__webglTexture,H,Ve+mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ln.__webglTexture,H),Pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,le,Ft+mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,le),H!==0?D.blitFramebuffer(je,Ze,we,Ie,ut,bt,we,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):Pn?D.copyTexSubImage3D(Lt,le,ut,bt,Ft+mn,je,Ze,we,Ie):D.copyTexSubImage2D(Lt,le,ut,bt,je,Ze,we,Ie);Q.bindFramebuffer(D.READ_FRAMEBUFFER,null),Q.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Lt,le,ut,bt,Ft,we,Ie,Re,Et,qe,Pt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,le,ut,bt,Ft,we,Ie,Re,Et,Pt.data):D.texSubImage3D(Lt,le,ut,bt,Ft,we,Ie,Re,Et,qe,Pt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,ut,bt,we,Ie,Et,qe,Pt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,ut,bt,Pt.width,Pt.height,Et,Pt.data):D.texSubImage2D(D.TEXTURE_2D,le,ut,bt,we,Ie,Et,qe,Pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dr),D.pixelStorei(D.UNPACK_SKIP_ROWS,wn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Es),le===0&&z.generateMipmaps&&D.generateMipmap(Lt),Q.unbindTexture()},this.copyTextureToTexture3D=function(E,z,W=null,$=null,H=0){return ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,W,$,H)},this.initRenderTarget=function(E){se.get(E).__webglFramebuffer===void 0&&ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),Q.unbindTexture()},this.resetState=function(){A=0,L=0,I=null,Q.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}function zx(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Kt;let l=0;for(let u=0;u<n.length;++u){const d=n[u];let p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let p=0;p<n.length;++p){const f=n[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[p].attributes.position.count}c.setIndex(d)}for(const u in s){const d=Rd(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<d;++p){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][p]);const g=Rd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Rd(n){let e,t,i,r=-1,s=0;for(let l=0;l<n.length;++l){const u=n[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new In(o,t,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let p=0,f=u.count;p<f;p++)for(let g=0;g<t;g++){const _=u.getComponent(p,g);a.setComponent(p+d,g,_)}}else o.set(u.array,c);c+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Yl(n,e=0){const t=new Ge,i=Object.fromEntries(Object.entries({skin:n.skin,hair:n.hair,shirt:n.color,pants:e%2?"#384b58":"#405646",boots:"#3f3431",white:"#fff6e6",eye:"#17222a",leather:"#965e48",straw:"#e7cb82"}).map(([f,g])=>[f,new Sr({color:g})])),r=new xn(1,16,12),s=new Bt(1,1,1);function o(f,g,_,v,m){const S=new fe(g==="box"?s:r,i[_]);return S.scale.set(...v),S.position.set(...m),S.castShadow=!0,f.add(S),S}const a=new Ge;t.add(a),o(a,"sphere","shirt",[.34,.43,.24],[0,1.03,0]),o(a,"box","pants",[.48,.23,.33],[0,.66,0]),o(a,"sphere","skin",[.115,.17,.115],[0,1.39,0]);const c=new Ge;c.position.y=1.65,a.add(c),o(c,"sphere","skin",[.31,.33,.28],[0,0,0]);for(const f of[-1,1]){o(c,"sphere","skin",[.064,.1,.052],[f*.3,-.01,0]),o(c,"sphere","white",[.079,.092,.035],[f*.115,.035,.253]),o(c,"sphere","eye",[.036,.052,.019],[f*.106,.025,.286]),o(c,"sphere","white",[.014,.018,.008],[f*.106-.01,.044,.305]);const g=o(c,"sphere","hair",[.081,.018,.019],[f*.116,.145,.25]);g.rotation.z=f*-.1;const _=o(a,"box","white",[.13,.07,.08],[f*.095,1.35,.18]);_.rotation.z=f*.35}o(c,"sphere","skin",[.057,.065,.065],[0,-.04,.282]);const l=new Wl([new U(-.085,-.13,.25),new U(0,-.162,.264),new U(.085,-.13,.25)]);c.add(new fe(new Ta(l,8,.012,5,!1),i.eye)),o(c,"sphere","hair",[.32,.15,.28],[0,.23,-.028]);const u=o(c,"sphere","hair",[.19,.065,.06],[-.11,.18,.235]);if(u.rotation.z=-.2,n.accessory==="bun"&&(o(c,"sphere","hair",[.23,.23,.17],[0,.03,-.2]),o(c,"sphere","hair",[.17,.17,.17],[.18,.3,-.15])),n.accessory==="curls")for(let f=0;f<8;f++){const g=f*Math.PI/4;o(c,"sphere","hair",[.12,.13,.12],[Math.cos(g)*.26,.17+Math.sin(g)*.1,-.06+Math.sin(g)*.15])}if(n.accessory==="glasses"){for(const f of[-1,1]){const g=new fe(new ci(.092,.013,6,16),i.eye);g.position.set(f*.115,.035,.295),c.add(g)}o(c,"box","eye",[.065,.018,.025],[0,.045,.29])}if(["sunhat","cap"].includes(n.accessory)){const f=n.accessory==="sunhat"?i.straw:i.shirt,g=new fe(new pt(.4,.4,.035,24),f);g.position.set(0,.285,.04),c.add(g);const _=new fe(new pt(.235,.27,.18,20),f);_.position.y=.39,c.add(_);const v=new fe(new pt(.264,.272,.05,20),i.leather);v.position.y=.32,c.add(v)}for(let f=0;f<3;f++)o(a,"sphere","white",[.019,.019,.014],[0,1.2-f*.12,.24]);const d=[],p=[];for(const f of[-1,1]){const g=new Ge;g.position.set(f*.32,1.24,0),a.add(g),o(g,"sphere","shirt",[.12,.19,.125],[f*.03,-.1,0]),o(g,"sphere","skin",[.076,.2,.076],[f*.04,-.34,.02]),o(g,"sphere","skin",[.09,.095,.08],[f*.04,-.52,.025]),o(g,"sphere","skin",[.035,.055,.035],[f*-.02,-.5,.075]),g.rotation.z=f*.06,d.push(g);const _=new Ge;_.position.set(f*.15,.64,0),t.add(_),o(_,"sphere","pants",[.12,.25,.12],[0,-.21,0]),o(_,"sphere","boots",[.14,.1,.21],[0,-.52,.07]),o(_,"box","boots",[.25,.035,.34],[0,-.59,.055]),p.push(_)}if(["bun","glasses"].includes(n.accessory)){const f=o(a,"box","leather",[.07,.77,.045],[.03,1.05,.245]);f.rotation.z=-.65,o(a,"box","leather",[.25,.29,.15],[.3,.73,.13]),o(a,"box","straw",[.07,.045,.018],[.3,.76,.215])}return t.userData.rig={body:a,head:c,arms:d,legs:p},Wt(t),t}function Wt(n){const e=new Set;n.traverse(t=>{if(!t.isGroup)return;const i=new Map;t.children.filter(r=>r.isMesh).forEach(r=>{i.has(r.material)||i.set(r.material,[]),i.get(r.material).push(r)});for(const[r,s]of i){const o=s.map(d=>(d.updateMatrix(),d.geometry.clone().applyMatrix4(d.matrix))),a=o.some(d=>!d.index),c=o.map(d=>a&&d.index?d.toNonIndexed():d),l=zx(c);if(new Set([...o,...c]).forEach(d=>d.dispose()),!l)continue;s.forEach(d=>{t.remove(d),e.add(d.geometry)});const u=new fe(l,r);u.castShadow=!0,u.receiveShadow=!0,t.add(u)}}),e.forEach(t=>t.dispose())}function Hx(n,e,t){const i=-n/2,r=-e/2,s=new ls;return s.moveTo(i+t,r),s.lineTo(i+n-t,r),s.quadraticCurveTo(i+n,r,i+n,r+t),s.lineTo(i+n,r+e-t),s.quadraticCurveTo(i+n,r+e,i+n-t,r+e),s.lineTo(i+t,r+e),s.quadraticCurveTo(i,r+e,i,r+e-t),s.lineTo(i,r+t),s.quadraticCurveTo(i,r,i+t,r),s}function Ch(n=!1){const e=new Ge;e.name="Pip 3D character";const t=new Ge;e.add(t);const i=Z=>new Sr({color:Z}),r={green:i(8435256),darkGreen:i(2706464),leaf:i(10082368),seam:i(3430947),shirt:i(8632381),trim:i(11786593),hat:i(14660444),weave:i(12225340),leather:i(11039543),leatherDark:i(7358501),metal:i(12898502),orange:i(15439412),cream:new $t({color:16774620}),visor:new $t({color:2702392}),black:new $t({color:859160}),white:new $t({color:16776432}),tongue:new $t({color:15173186})},s=(Z,Me,Ce,D=[0,0,0])=>{const K=new fe(Me,Ce);return K.position.set(...D),K.castShadow=!0,Z.add(K),K},o=(Z,Me,Ce,D)=>{const K=s(Z,new xn(1,16,12),Me,D);return K.scale.set(...Ce),K},a=(Z,Me,Ce,D,K=.09,j=.018)=>{const ne=new Zs(Hx(Ce[0],Ce[1],K),{depth:Ce[2],bevelEnabled:!0,bevelSize:j,bevelThickness:j,bevelSegments:j>.02?4:2,steps:1,curveSegments:6});return ne.translate(0,0,-Ce[2]/2),s(Z,ne,Me,D)},c=(Z,Me,Ce,D,K,j)=>s(Z,new pt(Ce,D,K,20),Me,j),l=(Z,Me,Ce,D=.01)=>s(Z,new Ta(new Wl(Ce.map(K=>new U(...K))),8,D,5,!1),Me),u=(Z,Me,Ce=[0,0,0])=>{const D=new Ge;return D.name=Me,D.position.set(...Ce),Z.add(D),D},d=s(e,new Ni(.48,24),new $t({color:1059099,transparent:!0,opacity:.25,depthWrite:!1}),[0,.025,0]);d.rotation.x=-Math.PI/2,d.castShadow=!1;const p=o(t,r.shirt,[.38,.37,.275],[0,.86,0]),f=c(t,r.darkGreen,.32,.3,.08,[0,.59,0]);f.scale.z=.81,c(t,r.darkGreen,.145,.17,.12,[0,1.16,0]);const g=u(t,"farmer growing suit");a(g,r.green,[.49,.39,.025],[0,.86,.263]);for(const Z of[-1,1])l(g,r.darkGreen,[[Z*.26,1.11,.12],[Z*.29,1.02,.19],[Z*.29,.75,.2]],.021);const _=u(t,"Pip back suit panel");a(_,r.shirt,[.43,.36,.035],[0,.88,-.26]);for(const Z of[-1,1])l(_,r.darkGreen,[[Z*.26,1.08,-.17],[Z*.26,.84,-.215],[Z*.18,.66,-.21]],.014);const v=u(t,"Pro Pip polo collar");for(const Z of[-1,1]){const Me=a(v,r.shirt,[.15,.12,.03],[Z*.1,1.11,.21],.02);Me.rotation.z=Z*.45,l(v,r.trim,[[Z*.045,1.16,.247],[Z*.115,1.065,.25],[Z*.18,1.12,.24]],.008)}const m=u(t,"HydroPip shirt emblem");for(const Z of[-1,1]){const Me=o(m,r.darkGreen,[.038,.088,.013],[Z*.053,.91,.307]);Me.rotation.z=Z*-.58}l(m,r.darkGreen,[[0,.9,.31],[0,.78,.31]],.012),o(m,r.darkGreen,[.08,.022,.012],[0,.77,.31]);const S=u(t,"Pro HydroPip chest logo",[.16,.91,.27]),y=document.createElement("canvas");y.width=256,y.height=128;const x=y.getContext("2d");x.fillStyle="#aad94c",x.beginPath(),x.ellipse(107,35,24,12,.7,0,Math.PI*2),x.ellipse(148,35,24,12,-.7,0,Math.PI*2),x.fill(),x.fillRect(124,35,7,33),x.fillStyle="#fff7df",x.font="bold 34px sans-serif",x.textAlign="center",x.fillText("HYDROPIP",128,108);const P=new ch(y);P.colorSpace=Qt,s(S,new Un(.29,.145),new $t({map:P,transparent:!0,depthWrite:!1}));const A=u(t,"Pip head",[0,1.51,0]);A.rotation.x=-.1,a(A,r.darkGreen,[.93,.75,.34],[0,0,-.025],.23,.065),a(A,r.green,[.9,.72,.34],[0,.005,0],.22,.065);const L=a(A,r.cream,[.87,.71,.035],[0,-.015,.275],.23),I=a(A,r.black,[.76,.52,.02],[0,.047,.315],.17);a(A,r.visor,[.71,.475,.016],[0,.05,.345],.155);const b=[];for(const Z of[-1,1]){const Me=u(A,`${Z<0?"left":"right"} expressive eye`,[Z*.17,.054,.379]);o(Me,r.white,[.083,.112,.012],[0,0,0]),o(Me,r.black,[.062,.09,.012],[.004,-.004,.015]),o(Me,r.white,[.025,.032,.008],[.027,.046,.029]),b.push(Me)}const w=new ls;w.moveTo(-.115,.036),w.quadraticCurveTo(0,.005,.115,.036),w.bezierCurveTo(.135,-.045,.065,-.116,0,-.115),w.bezierCurveTo(-.065,-.116,-.135,-.045,-.115,.036);const R=u(A,"Pip open smile",[0,-.178,.387]);s(R,new $l(w,12),r.black),o(R,r.tongue,[.055,.025,.004],[0,-.077,.005]);const C=[];for(const Z of[-1,1]){const Me=u(A,"green ear piece",[Z*.51,-.012,-.005]);Me.rotation.z=Math.PI/2,c(Me,r.darkGreen,.174,.174,.09,[0,0,0]),c(Me,r.leaf,.145,.145,.115,[0,-Z*.025,0]),c(Me,r.green,.11,.11,.13,[0,-Z*.035,0]),C.push(Me)}const k=u(t,"Pip brimmed hat",[0,1.93,-.005]),N=c(k,r.hat,.63,.61,.06,[0,0,0]);N.scale.z=.83,c(k,r.hat,.32,.405,.26,[0,.145,-.025]),c(k,r.darkGreen,.39,.408,.059,[0,.06,-.025]);const O=u(k,"straw hat weave");for(const Z of[.44,.51,.58]){const Me=s(O,new ci(Z,.006,4,32),r.weave,[0,.034,0]);Me.rotation.x=Math.PI/2,Me.scale.y=.83}for(const Z of[.12,.18,.24]){const Me=s(O,new ci(.405-(Z-.015)*.327,.005,4,32),r.weave,[0,Z,-.025]);Me.rotation.x=Math.PI/2}const B=[],q=new ls;q.moveTo(0,0),q.bezierCurveTo(.04,.23,.29,.34,.52,.26),q.bezierCurveTo(.45,.025,.18,-.1,0,0);for(const Z of[-1,1]){const Me=u(t,"veined leaf ear",[Z*.31,2.08,-.055]);Me.scale.x=Z,s(Me,new Zs(q,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:1,curveSegments:6}),r.leaf),l(Me,r.darkGreen,[[.015,.008,.05],[.21,.105,.05],[.46,.245,.05]],.012);for(const[Ce,D]of[[.13,.066],[.26,.136]])l(Me,r.green,[[Ce,D,.05],[Ce+.012,D+.085,.05]],.006),l(Me,r.green,[[Ce,D,.05],[Ce+.105,D-.018,.05]],.006);B.push(Me)}const G=[],oe=[],me=[],Ae=[],Ke=[],ht=[],ft=[];for(const Z of[-1,1]){const Me=u(t,"Pip shoulder",[Z*.38,1.045,0]);Me.rotation.z=Z*.08,o(Me,r.darkGreen,[.132,.13,.13],[0,-.065,0]);const Ce=s(Me,new Jr(.117,.1,4,12),r.shirt,[0,-.105,0]);c(Me,r.trim,.119,.119,.03,[0,-.18,0]);const D=u(Me,"Pip elbow",[0,-.24,0]);o(D,r.darkGreen,[.085,.08,.085],[0,.005,0]),s(D,new Jr(.089,.1,4,10),r.green,[0,-.105,0]),c(D,r.darkGreen,.088,.088,.035,[0,-.18,0]);const K=u(D,"Pip rounded glove",[0,-.235,.025]);o(K,r.green,[.104,.111,.094],[0,0,0]),o(K,r.leaf,[.041,.063,.047],[-Z*.078,.012,.06]);const j=u(t,"Pip hip",[Z*.17,.52,0]);s(j,new Jr(.115,.1,4,10),r.green,[0,-.095,0]);const ne=u(j,"Pip knee",[0,-.22,0]);o(ne,r.darkGreen,[.108,.075,.1],[0,0,0]),s(ne,new Jr(.1,.085,4,10),r.green,[0,-.072,0]);const Q=u(ne,"Pip work boot",[0,-.19,0]);o(Q,r.darkGreen,[.15,.055,.207],[0,-.021,.061]),o(Q,r.green,[.139,.1,.189],[0,.025,.059]),o(Q,r.leaf,[.1,.038,.089],[0,.092,.104]),G.push(Me),me.push(D),Ke.push(K),ft.push(Ce),oe.push(j),Ae.push(ne),ht.push(Q)}const X=u(t,"Pro Pip tool belt"),xe=c(X,r.leatherDark,.357,.35,.1,[0,.62,0]);xe.scale.z=.83,a(X,r.metal,[.115,.105,.025],[0,.62,.31],.025),a(X,r.leather,[.074,.067,.028],[0,.62,.33],.01);for(const Z of[-1,1])a(X,r.leatherDark,[.19,.23,.105],[Z*.255,.52,.245],.025),a(X,r.leather,[.16,.17,.035],[Z*.255,.49,.307],.025),o(X,r.metal,[.016,.016,.012],[Z*.255,.55,.33]);a(X,r.metal,[.038,.24,.025],[.28,.73,.255],.01);const de=s(X,new ci(.058,.018,6,16,Math.PI*1.55),r.metal,[.28,.855,.255]);de.rotation.z=Math.PI*.73,a(X,r.orange,[.043,.14,.035],[-.27,.76,.24],.018),a(X,r.metal,[.018,.085,.018],[-.27,.66,.24],.007),A.updateMatrixWorld(!0);const He=A.matrixWorld.clone().invert(),Le=[];A.traverse(Z=>{Z.isMesh&&Le.push(Z)});for(const Z of Le){const Me=He.clone().multiply(Z.matrixWorld);A.add(Z),Me.decompose(Z.position,Z.quaternion,Z.scale)}return t.traverse(Z=>{if(!Z.geometry?.index)return;const Me=Z.geometry;Z.geometry=Me.toNonIndexed(),Me.dispose()}),Wt(t),e.userData.parts={body:t,torso:p,head:A,faceShell:L,visor:I,arms:G,legs:oe,elbows:me,knees:Ae,hands:Ke,boots:ht,eyes:b,mouth:R,leafEars:B,headsetCups:C,belt:X,hat:k,farmerSuit:g,proCollar:v,proLogo:S,emblem:m,backPanel:_,strawWeave:O,materials:r,sleeves:ft,waistBand:f,shadow:d},e.userData.actionId="pip",e.scale.setScalar(1.04),Vx(e,n),e}function Vx(n,e){const t=n.userData.parts;t.materials.shirt.color.setHex(e?2503212:8632381),t.materials.hat.color.setHex(e?2503212:14660444),t.farmerSuit.visible=!e,t.emblem.visible=!e,t.strawWeave.visible=!e,t.proCollar.visible=e,t.proLogo.visible=e,t.belt.visible=e,n.userData.pro=e}const Pd=["post","produce","tractor","pond-birds","duck-crossing"];function Gx(n=Math.random){let e=null,t=0,i=8+n()*8,r=null;const s={post:26,produce:19,tractor:27,"pond-birds":22,"duck-crossing":30},o=()=>({active:e,elapsed:t,wait:i,duration:s[e]||0});function a(c){return Pd.includes(c)?(e=c,r=c,t=0,!0):!1}return{snapshot:o,start:a,update(c,{marketBuilt:l=!1,reducedMotion:u=!1}={}){if(u)return o();const d=Math.max(0,Math.min(.1,c));if(e)t+=d,t>=s[e]&&(e=null,t=0,i=14+n()*22);else if(i-=d,i<=0){const p=Pd.filter(f=>f!==r&&(f!=="produce"||l));a(p[Math.min(p.length-1,Math.floor(n()*p.length))])}return o()}}}function Wx(){const n=new Ge;n.name="living neighborhood";const e=new Ge,t=new Ge;n.add(e,t);const r=Object.fromEntries(Object.entries({wood:8808268,dark:3427653,stone:10070429,grass:7443032,leaf:4489565,cream:15919049,white:15463391,water:6469573,red:13921888,gold:15713102,blue:6530482}).map(([C,k])=>[C,new Sr({color:k})])),s=(C,k,N,O)=>{const B=new fe(new Bt(...N),k);return B.position.set(...O),C.add(B),B},o=(C,k,N,O)=>{const B=new fe(new ho(1,1),k);return B.scale.set(...N),B.position.set(...O),C.add(B),B},a=(C,k,N)=>{const O=new fe(new Ni(1,40),N);return O.rotation.x=-Math.PI/2,O.scale.set(...C),O.position.set(...k),e.add(O),O};a([3.5,2.6,1],[-20,-.02,4.8],r.stone),a([3.15,2.24,1],[-20,.01,4.8],r.water);for(let C=0;C<8;C++){const k=C*2.4,N=-20+Math.cos(k)*2.8,O=4.8+Math.sin(k)*2;C<4&&(a([.26,.21,1],[N,.025,O],r.leaf),o(e,r.cream,[.08,.04,.08],[N,.05,O]));for(let B=0;B<3;B++)s(e,r.grass,[.035,.5+B*.12,.035],[N+B*.12,.25+B*.06,O]),o(e,r.wood,[.065,.13,.065],[N+B*.12,.56+B*.12,O])}for(let C=0;C<5;C++){const k=19+C%2*3,N=-4+Math.floor(C/2)*4;s(e,r.wood,[.19,1.65,.19],[k,.65,N]),o(e,r.leaf,[1.2,1.05,1.15],[k,1.85,N]);for(let O=0;O<5;O++)o(e,r.red,[.14,.14,.14],[k+Math.sin(O*2)*.91,1.9+Math.cos(O)*.42,N+Math.cos(O*2)*.91]);s(e,r.wood,[.7,.3,.55],[k+.75,.15,N+.8])}const c=C=>{const k=Math.sin(C*127.1+48.7)*43758.5453;return k-Math.floor(k)};for(let C=0;C<110;C++){const k=C%3,N=k===0?-25+c(C)*7:k===1?17+c(C)*8:-15+c(C)*22,O=k===2?11+c(C+8)*4:-7+c(C+8)*17;if(((N+20)/3.8)**2+((O-4.8)/3)**2<1)continue;const B=.12+c(C+4)*.2;if(o(e,C%5?r.grass:r.stone,[.22,B,.26],[N,B/2,O]),C%3)for(let q=0;q<3;q++)o(e,C%2?r.gold:r.white,[.055,.05,.055],[N+(q-1)*.13,B+.08,O+Math.sin(q)*.1])}for(let C=0;C<14;C++){const k=-25+C*3.8;o(e,r.leaf,[.9,.45,.55],[k,.22,-15.6]),C%3===0&&s(e,r.wood,[.11,.8,.11],[k,.3,-14.4])}s(e,r.stone,[1.1,.04,3],[-19,-.08,-15]),s(e,r.wood,[.14,1.25,.14],[8,.58,-10.1]),s(e,r.blue,[.65,.43,.43],[8,1.2,-10.1]),s(e,r.cream,[.04,.25,.29],[8.34,1.18,-10.1]);const l=new Ge;l.position.set(8,1.2,-9.85),n.add(l),s(l,r.red,[.08,.38,.035],[0,.16,0]),s(l,r.red,[.22,.14,.035],[.07,.32,0]),s(e,r.wood,[1.5,.12,.5],[-17.2,.42,8.2]);for(const C of[-17.7,-16.7])s(e,r.dark,[.12,.42,.4],[C,.17,8.2]);s(e,r.wood,[1.5,.32,.08],[-17.2,.72,8.4]),e.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0)}),Wt(e),Wt(l);function u(C,k=!1){const N=new Ge;t.add(N),s(N,r[C],[k?1.5:2.6,.6,1.1],[0,.61,0]),s(N,r[C],[1.1,.55,1],[-.2,1.13,0]),s(N,r.blue,[.8,.32,1.03],[-.2,1.16,0]),s(N,r.dark,[.025,.37,1.04],[-.19,1.16,0]),s(N,r.cream,[.1,.16,.85],[k?.78:1.33,.62,0]);const O=[];for(const q of[-.85,.85])for(const G of[-.58,.58]){const oe=k&&q<0?.45:.3,me=new fe(new pt(oe,oe,.19,12),r.dark);me.rotation.x=Math.PI/2,me.position.set(q,oe-.1,G),N.add(me);const Ae=new fe(new pt(oe*.48,oe*.48,.2,8),r.cream);me.add(Ae),O.push(me)}const B=new Ge;return N.children.filter(q=>!O.includes(q)).forEach(q=>B.add(q)),N.add(B),Wt(B),N.visible=!1,{group:N,wheels:O}}const d=u("blue"),p=u("red"),f=u("gold"),g=u("leaf",!0);s(d.group,r.cream,[.75,.32,.03],[-.76,.7,.565]);const _=new Ge;g.group.add(_),s(_,r.wood,[1.65,.2,1.15],[-2.5,.37,0]),s(_,r.dark,[1.3,.1,.1],[-1.5,.32,0]);for(const C of[-.55,.55])o(_,r.dark,[.3,.3,.15],[-2.55,.2,C]);const v=new Ge;g.group.add(v);for(let C=0;C<3;C++)s(v,r.gold,[.7,.45,.83],[-2.9+C%2*.75,.7+(C===2?.46:0),0]),s(v,r.wood,[.07,.46,.85],[-2.9+C%2*.75,.7+(C===2?.46:0),0]);Wt(_),Wt(v);const m=new Ge;p.group.add(m),s(m,r.wood,[.8,.35,.9],[-.9,.95,0]);for(let C=0;C<5;C++)o(m,r.leaf,[.16,.18,.16],[-1.1+C%2*.3,1.17,-.3+Math.floor(C/2)*.28]);Wt(m);function S(C=!1){const k=new Ge;t.add(k),o(k,C?r.cream:r.blue,[.21,.18,.32],[0,.25,0]),o(k,C?r.leaf:r.dark,[.13,.14,.14],[0,.43,.21]),s(k,r.gold,[.12,.045,.18],[0,.4,.36]);for(const O of[-1,1])o(k,r.dark,[.019,.025,.024],[O*.11,.47,.28]),s(k,r.gold,[.08,.04,.17],[O*.1,.04,.02]);Wt(k);const N=[];for(const O of[-1,1]){const B=new Ge;B.position.set(O*.15,.3,0),k.add(B),o(B,C?r.cream:r.blue,[.28,.035,.13],[O*.2,0,0]),N.push(B)}return k.visible=!1,{group:k,wings:N}}const y=Array.from({length:3},()=>S()),x=Array.from({length:4},(C,k)=>{const N=S(!0);return N.group.scale.setScalar(k?.58:1),N});t.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0)});const P=Gx(),A={post:d,produce:p,tractor:g,"duck-crossing":f},L=It.lerp,I=It.clamp;let b=P.snapshot(),w=!1;function R(){for(const O of Object.values(A))O.group.visible=!1;if([...y,...x].forEach(O=>{O.group.visible=!1}),l.rotation.z=-.9,w||!b.active)return;const C=b.elapsed,k=b.active,N=A[k];if(N){N.group.visible=!0,N.group.rotation.y=k==="produce"?Math.PI:0;let O;k==="post"?O=C<11?L(-38,8,C/11):C<15?8:L(8,38,(C-15)/11):k==="duck-crossing"?O=C<6?L(-38,-20.5,C/6):C<17?-20.5:L(-20.5,38,(C-17)/13):O=L(k==="produce"?38:-38,k==="produce"?-38:38,C/b.duration),N.group.position.set(O,.08,-12.2);const B=k==="post"&&C>=11&&C<15||k==="duck-crossing"&&C>=6&&C<17;N.wheels.forEach(q=>{q.rotation.y=B?0:-O*3}),k==="post"&&C>12&&C<16&&(l.rotation.z=0),v.rotation.x=k==="tractor"?Math.sin(C*2.6)*.04:0}k==="pond-birds"&&y.forEach((O,B)=>{O.group.visible=!0;const q=I((C-B*.4)/5,0,1),G=I((C-15-B*.4)/5,0,1);O.group.position.set(L(-29,-20+B*.65,q)+G*-10,L(4.5,.13,q)+G*5,L(-5,3.2,q)+G*4),O.group.rotation.set(q===1&&G===0?Math.max(0,Math.sin(C*2+B))*.38:0,G?-1.5:.7,0),O.wings.forEach((oe,me)=>{oe.rotation.z=(me?1:-1)*(q<1||G>0?Math.sin(C*13+B)*.7:1.1)})}),k==="duck-crossing"&&x.forEach((O,B)=>{const q=I((C-4-B*(B===3?1.5:.6))/(B===3?6.5:9),0,1);O.group.visible=C>4+B*(B===3?1.5:.6)&&q<1,O.group.position.set(-17.8+Math.sin(q*Math.PI)*.2,.07+Math.abs(Math.sin(C*(B===3?15:9)))*.035,L(-15.5,-8.4,q)),O.wings.forEach((G,oe)=>{G.rotation.z=oe?1.2:-1.2})})}return{root:n,update(C,k){w=k.reducedMotion,b=P.update(C,k),R()},snapshot(){return{...b,sceneryMeshes:e.children.length,visibleActors:t.children.filter(C=>C.visible).map(C=>C.position.toArray()),totalActors:t.children.length,reducedMotion:w}},start(C){const k=P.start(C);return b=P.snapshot(),R(),k}}}const fo=["lettuce","basil","tomato","kale","strawberry"],Rh=[6,18,40],Ph=["Grower","Living Soil","Neighborhood"],Xe=(n,e,t,i=null)=>({kind:n,target:e,label:t,crop:i}),jt=(n,e,t,i,r,s)=>({id:n,path:e,chapter:t,title:i,focus:r,goals:s,coins:18,xp:15}),er=[jt("roots",0,0,"Rooted in the garden","tower-0",[Xe("transplant",6,"Transplant tower starters"),Xe("harvest",4,"Harvest soil-finished crops")]),jt("layer-craft",0,1,"A tower of many colors","tower-0",[Xe("mixed",1,"Fill one tower with four different crops"),Xe("variety",4,"Harvest different crop varieties")]),jt("right-flow",0,1,"One batch, every tower","reservoir",[Xe("matched",8,"Plant starts after checking shared delivery"),Xe("harvest",6,"Harvest garden crops")]),jt("fruit-garden",0,2,"The fruit garden","bed-0",[Xe("harvest",8,"Harvest tomatoes","tomato"),Xe("harvest",8,"Harvest strawberries","strawberry")]),jt("succession",0,2,"Succession without a gap","tower-0",[Xe("transplant",18,"Start the next garden succession"),Xe("variety",5,"Harvest all five crops")]),jt("grower-showcase",0,2,"The HydroPip showcase","bed-0",[Xe("matched",16,"Plant starts with shared delivery checked"),Xe("harvest",24,"Finish crops in soil"),Xe("variety",5,"Include every crop")]),jt("scraps",1,0,"Nothing goes to waste","workshop",[Xe("compost",2,"Start compost batches"),Xe("enrich",1,"Enrich a garden bed")]),jt("happy-hens",1,1,"Hens at home","workshop",[Xe("feed",3,"Feed the hens stored vegetables"),Xe("eggs",3,"Collect egg batches")]),jt("gentle-water",1,1,"Make every drop count","reservoir",[Xe("saving",10,"Plant after checking the timed feed"),Xe("enrich",2,"Enrich garden beds")]),jt("living-soil",1,1,"Living soil","composter",[Xe("compost",4,"Start compost batches"),Xe("enriched",12,"Transplant into enriched soil")]),jt("closed-loop",1,2,"From harvest to compost","coop",[Xe("feed",5,"Feed the hens"),Xe("enrich",4,"Return compost to garden beds"),Xe("harvest",18,"Harvest fresh crops")]),jt("soil-showcase",1,2,"Sustainable homestead","composter",[Xe("saving",18,"Plant starts with the timed feed checked"),Xe("enriched",20,"Grow in enriched soil"),Xe("eggs",5,"Collect egg batches")]),jt("neighbors",2,0,"Your neighborhood regulars","market",[Xe("order",5,"Complete market orders"),Xe("variety",2,"Harvest different crops")]),jt("salad-club",2,1,"The neighborhood salad club","market",[Xe("order",4,"Serve lettuce orders","lettuce"),Xe("order",4,"Serve basil orders","basil")]),jt("request-route",2,1,"Pip's request route","market",[Xe("request",3,"Complete chosen requests"),Xe("order",6,"Serve market customers")]),jt("weekend-market",2,2,"The weekend market","market",[Xe("order",5,"Serve tomato orders","tomato"),Xe("order",5,"Serve kale orders","kale"),Xe("egg-sale",2,"Sell packed eggs at the stand")]),jt("community-table",2,2,"A table for everyone","market",[Xe("request",5,"Complete chosen requests"),Xe("variety",5,"Harvest every crop"),Xe("order",10,"Serve market orders")]),jt("harvest-festival",2,2,"The homestead harvest festival","market",[Xe("order",18,"Welcome market customers"),Xe("request",5,"Complete community requests"),Xe("egg-sale",4,"Bring fresh eggs to market")])],Ra=[{id:"greens",title:"Mara's fresh greens",detail:"Harvest 6 lettuce for this growing request.",focus:"bed-0",goals:[Xe("harvest",6,"Lettuce harvested","lettuce")],crops:["lettuce"]},{id:"herbs",title:"June's herb patch",detail:"Raise 5 basil through the towers and garden.",focus:"bed-0",goals:[Xe("harvest",5,"Basil harvested","basil")],crops:["basil"]},{id:"mixed",title:"Theo's mixed harvest",detail:"Harvest three different crops from the garden.",focus:"bed-0",goals:[Xe("variety",3,"Different crops harvested")],crops:["tomato","basil"]},{id:"flow",title:"Pip's water-wise trial",detail:"Check shared tower delivery, then plant 8 starts.",focus:"reservoir",goals:[Xe("saving",8,"Starts with delivery checked")],chapter:1,crops:[]},{id:"market",title:"Luis's market morning",detail:"Complete 5 customer orders at the stand.",focus:"market",goals:[Xe("order",5,"Market orders served")],crops:[]},{id:"soil",title:"June's soil trial",detail:"Transplant 6 tower starters into compost-enriched beds.",focus:"composter",goals:[Xe("enriched",6,"Enriched transplants")],equipment:"composter",crops:[]},{id:"berries",title:"Mara's berry harvest",detail:"Harvest 6 strawberries from finished garden plants.",focus:"bed-0",goals:[Xe("harvest",6,"Strawberries harvested","strawberry")],crops:["strawberry"]},{id:"hens",title:"Theo's happy hens",detail:"Feed and collect two batches of eggs.",focus:"coop",goals:[Xe("feed",2,"Hen feedings"),Xe("eggs",2,"Egg batches collected")],equipment:"coop",crops:[]}],ra=(n,e=99999)=>Number.isFinite(Number(n))?Math.max(0,Math.min(e,Math.floor(Number(n)))):0;function Lh(){return{claimed:[],progress:{},mastery:{},request:null,requestSerial:0,requestsCompleted:0,pinned:"roots"}}const Ld=(n,e)=>e.map((t,i)=>t.kind==="variety"?[...new Set((Array.isArray(n?.[i])?n[i]:[]).filter(r=>fo.includes(r)))]:ra(n?.[i],t.target));function $x(n){const e=Lh();e.claimed=[...new Set((Array.isArray(n?.claimed)?n.claimed:[]).filter(i=>er.some(r=>r.id===i)))];for(const i of er)e.progress[i.id]=Ld(n?.progress?.[i.id],i.goals);for(const i of fo)e.mastery[i]=ra(n?.mastery?.[i],3);e.requestSerial=ra(n?.requestSerial,999999),e.requestsCompleted=ra(n?.requestsCompleted),e.pinned=er.some(i=>i.id===n?.pinned)?n.pinned:"roots";const t=Ra.find(i=>i.id===n?.request?.id);return t&&(e.request={id:t.id,progress:Ld(n.request.progress,t.goals)}),e}function Xn(n){return Ph.map((e,t)=>er.find(i=>i.path===t&&!n.homestead.claimed.includes(i.id))).filter(Boolean)}function jl(n,e){return n.market.built&&n.chapter>=e.chapter&&Xn(n).includes(e)}function Jl(n,e=[]){return n.map((t,i)=>({...t,current:Math.min(t.target,t.kind==="variety"?(e[i]||[]).length:e[i]||0)}))}function po(n,e){return Jl(e.goals,n.homestead.progress[e.id])}function Pa(n,e){return jl(n,e)&&po(n,e).every(t=>t.current>=t.target)}function Dd(n,e,t,i){n.forEach((r,s)=>{r.kind==="variety"&&t==="harvest"&&fo.includes(i)?e[s]=[...new Set([...e[s]||[],i])]:r.kind===t&&(!r.crop||r.crop===i)&&(e[s]=Math.min(r.target,(e[s]||0)+1))})}function Pi(n,e,t=null){if(!n.market.built)return;for(const r of Xn(n))if(jl(n,r)){const s=n.homestead.progress[r.id]||=[];Dd(r.goals,s,e,t)}const i=Ra.find(r=>r.id===n.homestead.request?.id);i&&Dd(i.goals,n.homestead.request.progress,e,t)}function qx(n,e){const t=er.find(i=>i.id===e);return!t||!Pa(n,t)?!1:(n.homestead.claimed.push(e),n.coins+=t.coins,n.xp+=t.xp,n.homestead.pinned=Xn(n).find(i=>i.path===t.path)?.id||Xn(n)[0]?.id||null,!0)}function Ht(n){const e=n.homestead?.claimed.length||0;return{basket:e>=3?7:5,seedBatch:e>=6?6:4,water:e>=12?.9:1,festival:e>=18}}function La(n,e){return n.homestead?.mastery?.[e]||0}function Xx(n,e){if(!fo.includes(e)||!n.market.built)return!1;const t=La(n,e);return t>=3||n.stats.byCropHarvested[e]<Rh[t]?!1:(n.homestead.mastery[e]=t+1,n.coins+=[8,12,20][t],n.xp+=10,n.seeds[e]=Math.min(999,n.seeds[e]+2),!0)}function Dh(n){const e=Ra.filter(i=>n.market.built&&n.chapter>=(i.chapter||0)&&i.crops.every(r=>n.unlockedCrops.includes(r))&&(!i.equipment||n.farm.owned.includes(i.equipment))),t=n.homestead.requestSerial%(e.length||1);return Array.from({length:Math.min(3,e.length)},(i,r)=>e[(t+r)%e.length])}function Ih(n){return Ra.find(e=>e.id===n.homestead.request?.id)||null}function Yx(n,e){return n.homestead.request||!Dh(n).some(t=>t.id===e)?!1:(n.homestead.request={id:e,progress:[]},!0)}function jx(n){const e=Ih(n);return!e||!Jl(e.goals,n.homestead.request.progress).every(t=>t.current>=t.target)?!1:(n.homestead.request=null,n.homestead.requestSerial++,n.homestead.requestsCompleted++,n.coins+=12,n.xp+=8,Pi(n,"request"),!0)}function Jx(n){return n.homestead.request?!1:(n.homestead.requestSerial++,!0)}function xr(n){return n.campaignComplete&&n.homestead.claimed.length===18&&fo.every(e=>La(n,e)===3)}const Uh=[{label:"Produce table",cost:40,towers:1,detail:"A small roadside table for your first garden harvests."},{label:"Shade canopy",cost:30,towers:2,detail:"Add shade and a second produce crate."},{label:"Neighborhood stand",cost:45,towers:3,detail:"Build a wider counter, shelves, and space for two visitors."},{label:"Farm market",cost:65,towers:4,detail:"Finish the striped awning and family-basket display. Up to three visitors."}],Da=n=>n.towers.filter(e=>e.built&&e.repaired).length;function vs(n){return n.market.built?n.market.level>=2?4:Math.max(1,Math.min(4,n.market.stage||3)):0}function Bi(n){const e=vs(n),t=Uh[e];if(!t)return null;const i=!e&&n.taskIndex<3?"Finish the first garden harvests":Da(n)<t.towers?`Requires ${t.towers} working towers`:"";return{...t,stage:e+1,reason:i,available:!i&&n.coins>=t.cost}}function Nh(n){const e=Bi(n);return e?.available?(n.coins-=e.cost,n.market.built=!0,n.market.stage=e.stage,n.market.level=e.stage===4?2:1,!0):!1}function Tn(n,e,t=0){const i=e==="bed"?Math.max(2,n.beds[t].capacity):2;return Da(n)<i?`Requires ${i} working towers`:""}const Kl=n=>Math.max(1,vs(n)-1),sa=(n,e,t)=>n+Math.floor(t()*(e-n+1));function Kx(n,e=Math.random){const t=n.unlockedCrops;let i=(n.market.cropBag||[]).filter(s=>t.includes(s));if(!i.length){i=[...t];for(let s=i.length-1;s>0;s--){const o=sa(0,s,e);[i[s],i[o]]=[i[o],i[s]]}}const r=i.shift();return n.market.cropBag=i,r}function Zx(n,e,t,i=Math.random){if(!n.market.built)return!1;const r=Kl(n),s=n.market;return n.orders.length>=r||n.orders.length&&!s.visitRemaining||(s.nextVisitIn=Math.max(0,(s.nextVisitIn??8)-e),s.nextVisitIn>0)?!1:(s.visitRemaining||(s.visitRemaining=sa(1,r,i)),n.orders.push(t(n.orders.length)),s.visitRemaining--,s.nextVisitIn=s.visitRemaining?sa(5,10,i):sa(12,28,i),!0)}const Qx=[{name:"Mara",color:"#df695c",skin:"#d9a47d",hair:"#453027",accessory:"sunhat",line:"Fresh greens for the block."},{name:"Theo",color:"#4398b1",skin:"#8c5d43",hair:"#242c30",accessory:"glasses",line:"A quick stop on the way home."},{name:"June",color:"#e5b84c",skin:"#e6b58b",hair:"#745239",accessory:"bun",line:"Produce for the neighborhood table."},{name:"Nia",color:"#78a967",skin:"#6f4937",hair:"#211e24",accessory:"curls",line:"The garden finish makes the difference."},{name:"Sam",color:"#ba7198",skin:"#c78968",hair:"#b9b7af",accessory:"glasses",line:"Looking for today's best crop."},{name:"Luis",color:"#6a87bf",skin:"#a46e4d",hair:"#39322a",accessory:"cap",line:"A market basket for dinner."}];function Nn(n){return n.orders.find(e=>e.id===n.selectedOrderId&&e.status==="waiting")||null}function kn(n,e,t=Date.now()){const i=n.carry?.kind==="produce"?n.carry.items:[],r=i.filter(d=>d===e.crop).length,s=n.rack[e.crop]||0,o=n.beds.flatMap(d=>d.plants).filter(d=>d.crop===e.crop),a=o.filter(d=>d.readyAt<=t).length,c=o.length-a+n.towers.flatMap(d=>d.queue).filter(d=>d.crop===e.crop).length+(n.carry?.kind==="starter"&&n.carry.crop===e.crop?1:0),l=Math.max(0,e.amount-r),u=n.carry?.kind==="starter"?0:Ht(n).basket-i.length;return{carried:r,stored:s,ready:a,growing:c,needed:l,room:u,load:Math.min(l,s,u),missing:Math.max(0,l-s-a-c)}}function kh(n,e){const t=kn(n,e);return n.carry?.kind==="starter"?{kind:"starter",label:"Plant starter",stock:t}:t.needed?t.room?t.load?{kind:"collect",label:`Collect ${t.load}`,stock:t}:t.ready?{kind:"harvest",label:"Harvest needed",stock:t}:{kind:"grow",label:t.missing?"Grow needed":"View growing",stock:t}:{kind:"store",label:"Make room",stock:t}:{kind:"deliver",label:"Deliver",stock:t}}function sn(n,e){if(n._markup===e)return;n._markup=e;const t=document.createElement("template");t.innerHTML=e;const i=s=>s.nodeType===1&&(s.getAttribute("data-key")||s.id||s.getAttribute("data-command"))||"";function r(s,o){const a=[...s.childNodes],c=new Set;[...o.childNodes].forEach((l,u)=>{const d=i(l),p=a.find(g=>!c.has(g)&&g.nodeType===l.nodeType&&g.nodeName===l.nodeName&&(d?i(g)===d:!i(g))),f=p||l.cloneNode(!0);if(c.add(f),s.childNodes[u]!==f&&s.insertBefore(f,s.childNodes[u]||null),!!p){if(f.nodeType===3){f.nodeValue!==l.nodeValue&&(f.nodeValue=l.nodeValue);return}if(f.nodeType===1){for(const g of[...f.attributes])l.hasAttribute(g.name)||f.removeAttribute(g.name);for(const g of[...l.attributes])f.getAttribute(g.name)!==g.value&&f.setAttribute(g.name,g.value);r(f,l)}}});for(const l of a)c.has(l)||l.remove()}r(n,t.content)}function ey(n,e,t){let i="projects";const r=o=>`<ul class="homestead-goals">${o.map(a=>`<li><span>${a.label}</span><strong>${a.current}/${a.target}</strong><progress max="${a.target}" value="${a.current}"></progress></li>`).join("")}</ul>`;function s(o){const a=o.homestead,c=xr(o),l=a.claimed.length;let u;if(i==="projects")u=`<p class="homestead-summary">${l}/18 projects / ${Object.values(a.mastery).reduce((d,p)=>d+p,0)}/15 crop badges</p><p>${c?"Master Grower homestead complete. Community requests continue.":"A growing homestead, one useful project at a time."}</p>`,u+=Xn(o).map(d=>{const p=jl(o,d),f=Pa(o,d);return`<article class="homestead-project ${f?"is-ready":""}"><small>${Ph[d.path]} / ${er.filter(g=>g.path===d.path).indexOf(d)+1} of 6</small><h3>${d.title}</h3>${r(po(o,d))}<p>${p?"18 coins + 15 XP":`Opens in Chapter ${d.chapter+1}${o.market.built?"":" after the market opens"}`}</p><div class="homestead-actions"><button data-home-action="project" data-value="${d.id}" ${f?"":"disabled"}>Claim reward</button><button data-home-action="pin" data-value="${d.id}" ${p?"":"disabled"}>${a.pinned===d.id?"Pinned":"Pin goal"}</button><button data-home-action="focus" data-value="${d.focus}" ${p?"":"disabled"}>Visit</button></div></article>`}).join(""),u+=`<h3>Homestead rewards</h3><ul class="homestead-perks">${[[3,"7-slot harvest basket"],[6,"6 seeds per packet at the same price"],[12,"10% less tower water use"],[18,"Harvest festival garden display"]].map(([d,p])=>`<li>${l>=d?"Earned":`${d} projects`}: ${p}</li>`).join("")}</ul><details><summary>All 18 projects</summary>${er.map(d=>`<p>${a.claimed.includes(d.id)?"Complete: ":""}${d.title}</p>`).join("")}</details>`;else if(i==="mastery")u="<p>Garden harvests earn crop badges. Each badge makes that crop finish in soil 3% sooner. Previous harvests count.</p>",u+=Object.entries(e).map(([d,p])=>{const f=La(o,d),g=Rh[f],_=o.stats.byCropHarvested[d];return`<article class="homestead-project"><h3><span class="crop-swatch" style="background:${p.color}">${p.code}</span> ${p.label}</h3><p>${f}/3 badges / ${f*3}% shorter garden growth</p>${f<3?`${r([{label:"Garden harvests",current:Math.min(g,_),target:g}])}<p>${[8,12,20][f]} coins + 10 XP + 2 seeds</p><button data-home-action="mastery" data-value="${d}" ${_>=g&&o.market.built?"":"disabled"}>Claim ${["Bronze","Silver","Gold"][f]} badge</button>`:"<strong>Gold mastery earned</strong>"}</article>`}).join("");else{const d=Ih(o);if(u=`<p>${a.requestsCompleted} requests completed. No deadlines. Requests reward your farm work; they do not take crops out of storage.</p>`,d){const p=Jl(d.goals,a.request.progress),f=p.every(g=>g.current>=g.target);u+=`<article class="homestead-project ${f?"is-ready":""}"><h3>${d.title}</h3><p>${d.detail}</p>${r(p)}<p>12 coins + 8 XP</p><div class="homestead-actions"><button data-home-action="request-claim" ${f?"":"disabled"}>Claim reward</button><button data-home-action="focus" data-value="${d.focus}">Visit</button><button data-home-action="request-abandon">Abandon</button></div></article>`}else u+=Dh(o).map(p=>`<article class="homestead-project"><h3>${p.title}</h3><p>${p.detail}</p><p>12 coins + 8 XP</p><button data-home-action="request-accept" data-value="${p.id}">Choose request</button></article>`).join(""),u+='<button data-home-action="request-refresh">Other requests</button>'}sn(n,`<header><div><small>HydroPip homestead</small><h2>${c?"Master Grower":"Growing Together"}</h2></div><button class="close-button" data-home-action="close" aria-label="Close homestead goals">&#215;</button></header><div class="homestead-tabs" role="tablist" aria-label="Homestead views">${[["projects","Projects"],["mastery","Crop book"],["requests","Requests"]].map(([d,p])=>`<button role="tab" aria-selected="${i===d}" data-home-tab="${d}">${p}</button>`).join("")}</div><div role="tabpanel" class="homestead-content">${u}</div>`)}return n.onclick=o=>{const a=o.target.closest("button");!a||a.disabled||(a.dataset.homeTab?(i=a.dataset.homeTab,t("render")):a.dataset.homeAction&&t(a.dataset.homeAction,a.dataset.value))},{render:s}}const ty=4;function mo(n,e=null,t=-1){const i=new Set(n.queue.map(r=>r.layer));return e?.kind==="starter"&&e.sourceTower===t&&i.add(e.sourceLayer),[0,1,2,3].filter(r=>!i.has(r))}function Er(n,e,t=null){return n?.queue.find(i=>i.readyAt!==null&&i.readyAt<=e&&(!t||i.crop===t))}function Oh(n){n.towers.forEach((e,t)=>{const i=new Set;for(const s of e.queue)(!Number.isInteger(s.layer)||s.layer<0||s.layer>=ty||i.has(s.layer))&&(s.layer=[0,1,2,3].find(o=>!i.has(o))),i.add(s.layer);const r=n.carry;r?.kind==="starter"&&r.sourceTower===t&&((!Number.isInteger(r.sourceLayer)||i.has(r.sourceLayer))&&(r.sourceLayer=[0,1,2,3].find(s=>!i.has(s))),r.job&&(r.job.layer=r.sourceLayer))})}const Oi={composter:{label:"Composter",cost:90,chapter:0,towers:1,stages:["Open compost bin","Covered compost station"],detail:"Two scraps make one compost bag. Add a cover at 2 towers to shorten batches from 60 to 40 seconds."},rainTank:{label:"Rainwater storage",cost:120,chapter:1,towers:2,stages:["Rain barrel","Twin-barrel storage"],detail:"Save 10% reservoir water. Add the second barrel at 3 towers to save 20%."},coop:{label:"Chicken coop",cost:180,chapter:1,towers:3,stages:["Starter coop","Expanded chicken run"],detail:"One vegetable feeds one hen for one egg in 2 minutes. At 4 towers, expand the run for two hens and two eggs."}};function $n(n,e){return n.owned.includes(e)?n.levels?.[e]||2:0}function Zl(n,e){if(!Object.hasOwn(Oi,e))return null;const t=Oi[e],i=$n(n.farm,e);if(i>=2)return null;const r=t.towers+i,s=n.market.built?n.chapter<t.chapter?"Requires Chapter 2":Da(n)<r?`Requires ${r} working towers`:"":"Open the produce table first";return{label:t.stages[i],level:i+1,cost:t.cost/2,reason:s}}function ny(n,e){const t=Zl(n,e);return!t||t.reason||n.coins<t.cost?!1:(n.coins-=t.cost,n.farm.levels||={},n.farm.levels[e]=t.level,n.farm.owned.includes(e)||n.farm.owned.push(e),!0)}function iy(){return{owned:[],levels:{},scraps:0,compost:0,compostReadyAt:null,coopReadyAt:null,eggsReady:0,eggs:0,eggsSold:0}}function ry(n){const e=(t,i=999)=>Math.max(0,Math.min(i,Math.floor(Number(t)||0)));return{owned:[...new Set((Array.isArray(n?.owned)?n.owned:[]).filter(t=>Object.hasOwn(Oi,t)))],levels:Object.fromEntries(Object.keys(Oi).map(t=>[t,n?.levels?.[t]===1?1:2])),scraps:e(n?.scraps,24),compost:e(n?.compost,12),compostReadyAt:Number.isFinite(n?.compostReadyAt)&&n.compostReadyAt>0?n.compostReadyAt:null,coopReadyAt:Number.isFinite(n?.coopReadyAt)&&n.coopReadyAt>0?n.coopReadyAt:null,eggsReady:e(n?.eggsReady,2),eggs:e(n?.eggs,12),eggsSold:e(n?.eggsSold,99999)}}function sy(n,e){const t=n.farm;t.owned.includes("composter")&&t.compostReadyAt&&t.compostReadyAt<=e&&(t.compost=Math.min(12,t.compost+1),t.compostReadyAt=null),t.owned.includes("coop")&&t.coopReadyAt&&t.coopReadyAt<=e&&(t.eggsReady=$n(t,"coop"),t.coopReadyAt=null)}function oy(n,e,t=1){const i=n.farm;return!i.owned.includes("composter")||i.compostReadyAt||i.scraps<2||i.compost>=12?!1:(i.scraps-=2,i.compostReadyAt=e+($n(i,"composter")===2?4e4:6e4)*t,!0)}function ay(n,e,t,i=1){const r=n.farm;return!r.owned.includes("coop")||r.coopReadyAt||r.eggsReady||!Object.hasOwn(n.rack,e)||!(n.rack[e]>0)?!1:(n.rack[e]-=1,n.stats.byCropFed[e]+=1,r.coopReadyAt=t+12e4*i,!0)}function cy(n){const e=n.farm;return!e.owned.includes("coop")||!e.eggsReady||e.eggs+e.eggsReady>12?!1:(e.eggs+=e.eggsReady,e.eggsReady=0,e.scraps=Math.min(24,e.scraps+1),!0)}function ly(n){if(!n.market.built||!n.farm.eggs)return 0;const e=n.farm.eggs;return n.farm.eggs=0,n.farm.eggsSold+=e,n.coins+=e*8,e}function uy(n,e){const t=n.beds[e];return!t?.built||t.soilCharges||n.farm.compost<1?!1:(n.farm.compost-=1,t.soilCharges=4,!0)}function dy(n,e){const t=new Ge;t.name=`farm ${n}`;const i=$n(e,n);t.userData.constructionLevel=i;const r=Object.fromEntries(Object.entries({wood:10056519,dark:4215880,soil:6573618,cream:15787717,roof:12936278,leaf:8169539,orange:15311682,water:6269879}).map(([a,c])=>[a,new Sr({color:c})])),s=(a,c,l,u)=>{const d=new fe(new Bt(...l),c);return d.position.set(...u),a.add(d),d},o=(a,c,l,u)=>{const d=new fe(new xn(1,12,8),c);return d.scale.set(...l),d.position.set(...u),a.add(d),d};if(n==="composter"){s(t,r.soil,[1.55,.42,1.1],[0,.24,0]);for(const a of[-.8,.8])for(const c of[-.6,.6])s(t,r.dark,[.11,1.1,.11],[a,.55,c]);for(const a of[.2,.44,.68,.92]){for(const c of[-.62,.62])s(t,r.wood,[1.7,.17,.08],[0,a,c]);for(const c of[-.82,.82])s(t,r.wood,[.08,.17,1.3],[c,a,0])}o(t,r.soil,[.73,.2+e.scraps*.012,.53],[0,.51,0]);for(let a=0;a<Math.min(6,e.scraps);a++)o(t,r.leaf,[.15,.03,.075],[Math.sin(a*2)*.45,.66+e.scraps*.008,Math.cos(a*2)*.35]);for(let a=0;a<Math.min(3,e.compost);a++)s(t,r.cream,[.3,.38,.24],[1.12,.2,-.36+a*.29]);if(i>1){const a=s(t,r.dark,[1.85,.09,1.36],[0,1.23,-.22]);a.rotation.x=-.3,s(t,r.wood,[.2,.85,.08],[.7,1.2,-.6])}}else if(n==="rainTank"){const a=new fe(new pt(.66,.72,1.45,20),r.water);a.position.y=.75,t.add(a);for(const c of[.15,.72,1.44]){const l=new fe(new ci(.68,.045,6,24),r.dark);l.rotation.x=Math.PI/2,l.position.y=c,t.add(l)}if(s(t,r.cream,[.2,.9,.08],[0,.83,.66]),s(t,r.dark,[.12,.15,.48],[.35,.22,.71]),i>1){const c=new fe(new pt(.54,.58,1.25,20),r.water);c.position.set(1.2,.65,0),t.add(c),s(t,r.dark,[.6,.1,.1],[.65,.3,0]),s(t,r.cream,[1.2,.08,1.2],[1.2,1.3,0])}}else{s(t,r.soil,[4,.06,2],[0,.03,0]),s(t,r.wood,[1.25,.9,1.2],[-1.1,.85,0]),s(t,r.dark,[.33,.47,.035],[-1.04,.64,.62]);for(const l of[-1,1]){const u=s(t,r.roof,[.85,.09,1.5],[-1.1+l*.34,1.49,0]);u.rotation.z=-l*.33}for(const l of[-1.58,-.63])for(const u of[-.48,.48])s(t,r.dark,[.1,.55,.1],[l,.28,u]);const a=s(t,r.wood,[.48,.06,.9],[-1.04,.26,.96]);a.rotation.x=-.4;for(const l of[-2,-1,0,1,2])for(const u of[-1,1])s(t,r.wood,[.055,.56,.055],[l,.3,u]);for(const l of[-1,1])for(const u of[.19,.45])s(t,r.wood,[4.05,.035,.035],[0,u,l]);for(const l of[-2,2])for(const u of[.19,.45])s(t,r.wood,[.035,.035,2],[l,u,0]);o(t,r.cream,[.22,.04,.19],[1.5,.08,-.5]);for(let l=0;l<e.eggsReady;l++)o(t,r.cream,[.09,.12,.08],[-.69+l*.2,.53,.64]);const c=[];for(let l=0;l<i;l++){const u=new Ge;u.position.set(.2+l*.85,0,l?-.4:.35),t.add(u),o(u,r.cream,[.25,.25,.34],[0,.36,0]),o(u,r.wood,[.05,.14,.21],[-.23,.38,-.03]),o(u,r.cream,[.13,.2,.13],[0,.63,.2]);for(let f=0;f<3;f++)o(u,r.roof,[.045,.065,.055],[0,.82,.15+f*.045]);o(u,r.roof,[.04,.08,.04],[0,.53,.31]);for(const f of[-1,1])o(u,r.dark,[.018,.024,.018],[f*.116,.68,.25]),s(u,r.orange,[.028,.19,.03],[f*.1,.1,0]),s(u,r.orange,[.08,.025,.13],[f*.1,.025,.04]);const d=new fe(new mi(.057,.16,4),r.orange);d.rotation.x=Math.PI/2,d.position.set(0,.63,.35),u.add(d);const p=o(u,r.cream,[.11,.24,.1],[0,.54,-.28]);p.rotation.x=-.65,u.userData.home=u.position.clone(),c.push(u)}if(t.userData.hens=c,i>1){s(t,r.wood,[.85,.45,.6],[-1.1,.6,-.8]),s(t,r.roof,[1,.08,.72],[-1.1,.88,-.8]);for(const l of[.2,1.1])s(t,r.dark,[.07,1.15,.07],[l,.6,-.9]);s(t,r.wood,[1.15,.08,.1],[.65,1.15,-.9])}}return t.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),Wt(t),t}function hy(n){const e=new Map;n.traverse(i=>{!i.userData.growthTiming||!i.userData.plantingPlacements||i.children.filter(r=>r.isInstancedMesh).forEach((r,s)=>{const o=`${i.userData.crop}:${s}:${r.material.opacity}`;e.has(o)||e.set(o,[]),e.get(o).push(r),r.layers.set(1),r.castShadow=!1})});const t=[];for(const i of e.values()){const r=i.reduce((o,a)=>o+a.count,0),s=new br(i[0].geometry.clone(),i[0].material.clone(),r);s.castShadow=!0,s.receiveShadow=!0,s.userData.instanceTargets=i.flatMap(o=>Array(o.count).fill(o.userData.interactiveId)),s.userData.cropBatch=!0,n.add(s),t.push({mesh:s,parts:i})}n.userData.cropBatches=t,Fh(n)}function Fh(n){n.updateMatrixWorld(!0);const e=n.matrixWorld.clone().invert(),t=new Mt,i=new Mt,r=new Mt().makeScale(0,0,0);for(const{mesh:s,parts:o}of n.userData.cropBatches||[]){let a=0;for(const c of o){i.multiplyMatrices(e,c.matrixWorld);for(let l=0;l<c.count;l++)c.getMatrixAt(l,t),t.premultiply(i),c.visible||t.multiply(r),s.setMatrixAt(a++,t)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere()}}const vl=.24,Mc=1.12;function fy(n){const e=new Ge;e.name="water reservoir";const t=new Ge;e.add(t);const i=new Sr({color:14476762}),r=new Sr({color:4151378}),s=new ki({color:4636114,roughness:.25,metalness:.05}),o=new $t({color:6935773});function a(v,m,S,y){const x=new fe(m,S);return x.position.set(...y),v.add(x),x}a(t,new Bt(1.7,.2,1.7),r,[0,.13,0]);for(const v of[.26,.84,1.43])for(const m of[-.78,.78])a(t,new Bt(1.6,.045,.045),i,[0,v,m]),a(t,new Bt(.045,.045,1.6),i,[m,v,0]);for(const v of[-.78,0,.78])for(const m of[-.78,.78])a(t,new Bt(.045,1.2,.045),i,[v,.845,m]);const c=a(e,new Bt(1.5,1.17,1.5),new ki({color:14152429,transparent:!0,opacity:.14,roughness:.25,depthWrite:!1,side:vn}),[0,.845,0]);c.renderOrder=2;const l=a(e,new Bt(1.37,1,1.37),s,[0,vl,0]);l.name="reservoir water volume";const u=new Ge;u.position.set(.42,0,.8),e.add(u),a(u,new Bt(.22,1.1,.06),r,[0,.86,0]);for(let v=0;v<=4;v++)a(u,new Bt(.045,.014,.015),i,[.065,.39+v*.225,.04]);Wt(u);const d=a(u,new Bt(.08,.9,.025),o,[-.025,.39,.048]),p=a(u,new xn(.065,10,8),o,[0,1.39,.018]);for(const v of[-.35,.35])a(t,new Bt(.24,.2,.3),r,[v,.34,-.2]),a(t,new pt(.045,.045,1.2,8),r,[v,.95,-.2]);const f=a(t,new pt(.045,.045,.42,8),r,[-.35,1.55,.01]);f.rotation.x=Math.PI/2,a(t,new pt(.045,.045,.18,8),r,[-.35,1.48,.22]);const g=a(t,new pt(.045,.045,.66,8),r,[.35,1.55,-.53]);g.rotation.x=Math.PI/2,a(t,new pt(.045,.045,1.3,8),r,[.35,.9,-.86]);const _=a(e,new pt(.027,.037,.2,8),s,[-.35,1.3,.22]);return _.name="IBC top mixing discharge",Wt(t),e.userData.reservoir={liquid:l,fill:d,lamp:p,shell:c,mixingStream:_,ratio:null,status:null},Bh(e,n),e}function Bh(n,e){const t=n?.userData.reservoir;if(!t)return;const i=Math.max(0,Math.min(1,Number.isFinite(e)?e/100:0));if(t.ratio===i)return;t.ratio=i,t.status=i===0?"empty":i<.3?"low":"ready",t.liquid.visible=t.fill.visible=i>0,t.liquid.scale.y=Math.max(1e-4,i*Mc),t.liquid.position.y=vl+i*Mc/2,t.mixingStream.visible=i>0;const r=Math.max(.02,1.4-(vl+i*Mc));t.mixingStream.scale.y=r/.2,t.mixingStream.position.y=1.4-r/2,t.fill.scale.y=Math.max(1e-4,i),t.fill.position.y=.39+i*.9/2,t.lamp.material.color.setHex(i<.3?16102724:6935773)}function py(n){const e=n?.userData.reservoir;return e?{ratio:e.ratio,status:e.status,waterVisible:e.liquid.visible,surfaceHeight:e.liquid.position.y+e.liquid.scale.y/2,bottomHeight:e.liquid.position.y-e.liquid.scale.y/2,gaugeVisible:e.fill.visible,gaugeScale:e.fill.scale.y,modelId:n.uuid}:null}const Bs="2026.09.06-preview.6",my="https://hydropip-pip-api.onrender.com/track-start.html",Id="info@hydropip.com",gy=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;let zh=window.HYDROPIP_ANALYTICS_CONSENT===!0;window.addEventListener("hydropip:analytics-consent",n=>{zh=n.detail?.granted===!0});function jn(n,e={}){if(!zh)return;const t={event:`hydropip_game_${n}`,game:"growing_adventure",version:Bs,sessionId:gy,...e};window.dataLayer=window.dataLayer||[],window.dataLayer.push(t),window.dispatchEvent(new CustomEvent("hydropip:game-event",{detail:t}))}const _l={lettuce:4,basil:6,tomato:8,kale:6,strawberry:10},ha=80;function vy(){return{tutorialClaimed:[],expanded:!1,purchases:0,rescues:0}}function _y(n){const e=t=>Number.isFinite(t)?Math.max(0,Math.min(99999,Math.floor(t))):0;return{tutorialClaimed:[...new Set((Array.isArray(n?.tutorialClaimed)?n.tutorialClaimed:[]).filter(t=>["lettuce","basil"].includes(t)))],expanded:!!n?.expanded,purchases:e(n?.purchases),rescues:e(n?.rescues)}}function xl(n){return n.seedShop.expanded?48:24}function Ql(n,e){if(!Object.hasOwn(_l,e)||!n.unlockedCrops.includes(e))return{available:!1,reason:"Crop locked"};const t=!n.market.built&&["lettuce","basil"].includes(e)&&!n.seedShop.tutorialClaimed.includes(e),i=t?4:Ht(n).seedBatch,r=t?0:_l[e],s=n.market.built?n.coins:Math.max(0,n.coins-40),o=n.seeds[e]+i>xl(n)?"Vault full":s<r?n.market.built?"Not enough coins":"Keep the market reserve":"";return{available:!o,reason:o,amount:i,price:r,tutorial:t}}function xy(n,e){const t=Ql(n,e);return t.available?(n.coins-=t.price,n.seeds[e]+=t.amount,n.stats.seedsCollected+=t.amount,t.tutorial?n.seedShop.tutorialClaimed.push(e):n.seedShop.purchases++,!0):!1}function Hh(n){if((n.market.built?n.coins:Math.max(0,n.coins-40))>=_l.lettuce||Object.values(n.seeds).some(r=>r>0)||n.carry?.kind==="starter")return!1;const t=n.chapter>=2?2:1,i=n.carry?.kind==="produce"?n.carry.items:[];return!(Object.entries(n.rack).some(([r,s])=>s+i.filter(o=>o===r).length>=t)||n.towers.some(r=>r.queue.length)||n.beds.some(r=>r.plants.length)||n.farm.eggs||n.farm.eggsReady||n.farm.coopReadyAt)}function yy(n){return Hh(n)?(n.seeds.lettuce+=2,n.stats.seedsCollected+=2,n.seedShop.rescues++,!0):!1}function My(n){return!n.market.built||Tn(n,"vault")||n.seedShop.expanded||n.coins<ha?!1:(n.coins-=ha,n.seedShop.expanded=!0,!0)}const go="hydropipCampaignSave",by="hydropipTowerRunCampaign",eu=6,Jn=["lettuce","basil","tomato","kale","strawberry"],De={lettuce:{code:"L",label:"Lettuce",color:"#79bd53",accent:"#d6f47a",towerSeconds:9,bedSeconds:6,coinValue:9,xp:3,family:"greens"},basil:{code:"B",label:"Basil",color:"#319856",accent:"#8de28f",towerSeconds:11,bedSeconds:7,coinValue:11,xp:4,family:"greens"},tomato:{code:"T",label:"Tomato",color:"#df5e48",accent:"#ffb06b",towerSeconds:15,bedSeconds:10,coinValue:15,xp:5,family:"fruit"},kale:{code:"K",label:"Kale",color:"#47765c",accent:"#a8d276",towerSeconds:13,bedSeconds:9,coinValue:14,xp:5,family:"greens"},strawberry:{code:"S",label:"Strawberry",color:"#d94f68",accent:"#ffd06c",towerSeconds:17,bedSeconds:11,coinValue:19,xp:7,family:"fruit"}},Zr=[0,35,85,145,220,310,420,650,950,1350,1850,2450,3150,3950,4850],At={market:40,tower:[0,70,110,160],bedUpgrade:[45,65,90,120],queueUpgrade:55,cosmetics:{"sunny-planters":30,"blue-path":45,"festival-bunting":60}},Qs={"sunny-planters":{label:"Sunny planters",color:"#f4c451"},"blue-path":{label:"Blue garden pots",color:"#66c7d0"},"festival-bunting":{label:"Market bunting",color:"#e86c54"}},vo=[{id:"restore",number:1,name:"Restore the Homestead",shortName:"Homestead",description:"Repair the first tower and reopen Pip's Veg Stand.",completionTask:"first-market-day"},{id:"balance",number:2,name:"Balance Split Flow",shortName:"Split Flow",description:"Check the shared reservoir and supply a neighborhood rush.",completionTask:"neighborhood-rush"},{id:"pro-yard",number:3,name:"Build the Pro Yard",shortName:"Pro Yard",description:"Complete the five-crop launch showcase with Pro Pip.",completionTask:"launch-showcase"}],An=[{id:"repair-first-tower",chapter:0,title:"Bring the tower online",detail:"Repair the first HydroPip tower.",focus:"tower-0",reward:{coins:15,xp:15,unlockCrop:"basil"},story:"Pip: One good tower is enough to bring this garden back."},{id:"first-tower-plan",chapter:0,title:"Plan the first greens",detail:"Collect seeds and plant 2 lettuce layers.",focus:"vault",reward:{coins:10,xp:20},story:"Mara: Lettuce first. The neighborhood has missed fresh greens."},{id:"first-grow-out",chapter:0,title:"Finish crops in soil",detail:"Transplant and harvest 4 garden crops before opening the produce table.",focus:"bed-0",reward:{coins:20,xp:25},story:"Pip: Tower roots are ready. The bed gives them their final finish."},{id:"reopen-market",chapter:0,title:"Open Pip's produce table",detail:"Build a small produce table for 40 coins. More towers unlock a bigger stand.",focus:"market",reward:{coins:20,xp:25},story:"Theo: A few crates today. An awning when the farm grows."},{id:"first-market-day",chapter:0,title:"Serve the first greens",detail:"Sell 2 lettuce and 2 basil across 4 market orders.",goals:{sold:{lettuce:2,basil:2},orders:4},focus:"market",reward:{coins:40,xp:35,chapterComplete:!0},story:"June: The stand is open again. Split Flow is ready when you are."},{id:"build-second-tower",chapter:1,title:"Open the second lane",detail:"Build Tower 2 for 70 coins.",focus:"tower-1",reward:{coins:25,xp:35,unlockCrop:"tomato"},story:"Pip: Two towers, one tank. Both receive the same nutrient batch."},{id:"specialize-flow",chapter:1,title:"Check the shared system",detail:"Confirm tank circulation, then check delivery to every tower.",focus:"reservoir",reward:{coins:25,xp:35,unlockCrop:"kale"},story:"Mara: One pump mixes the tank. A second pump feeds every tower from that same batch."},{id:"split-crop-plan",chapter:1,title:"Run a mixed crop plan",detail:"Plant tomato and kale in separate tower layers.",focus:"vault",reward:{coins:40,xp:40},story:"Theo: Different crops can share the towers. Their nutrient supply is still one batch."},{id:"build-third-tower",chapter:1,title:"Complete Split Flow",detail:"Build Tower 3 for 110 coins.",focus:"tower-2",reward:{coins:55,xp:45},story:"Pip: Three towers. Now the farm can keep several orders moving."},{id:"neighborhood-rush",chapter:1,title:"Serve the neighborhood rush",detail:"Sell 3 tomato and 3 kale, reach 10 total orders, and upgrade tower drippers or a garden bed.",goals:{sold:{tomato:3,kale:3},orders:10,capacityUpgrade:!0},focus:"market",reward:{coins:90,xp:55,chapterComplete:!0},story:"June: Every order made the Pro Yard possible."},{id:"build-pro-yard",chapter:2,title:"Build the fourth tower",detail:"Build Tower 4 for 160 coins.",focus:"tower-3",reward:{coins:45,xp:55,unlockCrop:"strawberry",unlockPro:!0},story:"Pip: Pro Yard online. Time for the black shirt and tool belt."},{id:"launch-showcase",chapter:2,title:"Host the launch showcase",detail:"Upgrade the market, sell 5 of every crop plus 3 extra strawberries, and reach 20 total orders.",goals:{sold:{lettuce:5,basil:5,tomato:5,kale:5,strawberry:8},orders:20,marketLevel:2},focus:"market",reward:{coins:140,xp:75,chapterComplete:!0,campaignComplete:!0},story:"Mara: The homestead is growing, the stand is busy, and Pip is a pro."}];function pr(){return Object.fromEntries(Jn.map(n=>[n,0]))}function Ia(n){const e=Math.max(0,Number(n)||0);let t=1;return Zr.forEach((i,r)=>{e>=i&&(t=r+1)}),Math.min(Zr.length,t)}function Vh(n){const e=Ia(n),t=Zr[e-1],i=Zr[e]??t;return{level:e,current:Math.max(0,n-t),needed:e>=Zr.length?0:i-t,ratio:e>=Zr.length?1:(n-t)/(i-t)}}function Gh(n){return{id:`tower-${n}`,built:n===0,repaired:!1,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!1,queue:[]}}function Wh(n){return{id:`bed-${n}`,built:n===0,capacity:2,soilCharges:0,plants:[]}}function Ua(n=Date.now()){return{version:eu,createdAt:n,savedAt:n,chapter:0,taskIndex:0,completedTasks:[],coins:45,xp:0,level:1,challengeUnlocked:!1,campaignComplete:!1,proPip:!1,unlockedCrops:["lettuce"],towers:[0,1,2,3].map(Gh),beds:[0,1,2,3].map(Wh),market:{built:!1,level:0,stage:0,nextVisitIn:8,visitRemaining:0,cropBag:[]},farm:iy(),homestead:Lh(),seeds:pr(),seedShop:vy(),rack:pr(),carry:null,orders:[],selectedOrderId:null,orderSequence:0,lastCustomer:"",stats:{seedsCollected:0,planted:0,transplanted:0,harvested:0,sold:0,orders:0,rejectedOrders:0,serviceActions:0,byCropQueued:pr(),byCropHarvested:pr(),byCropSold:pr(),byCropFed:pr()},hydro:{water:100,nutrients:100,ph:6.2,strategy:"balanced",batchMixed:!0,mixChecked:!1,flowChecked:!1,flowCalibrated:!1,systemLessonDone:!1,batchNumber:1,feedPhase:0,lineClogged:!1,lineRunSeconds:0,lineClogAfter:300,servicedAt:n},cosmetics:{owned:[],active:[]},tutorial:{welcomeSeen:!1,taskDrawerSeen:!1,marketSeen:!1},settings:{soundEnabled:!0,highContrast:!1,reducedMotion:!1,musicVolume:.22,effectsVolume:.68}}}function $e(n,e,t=-1/0,i=1/0){const r=Number(n);return Number.isFinite(r)?Math.min(i,Math.max(t,r)):e}function Yr(n){const e=pr();return Jn.forEach(t=>{e[t]=Math.floor($e(n?.[t],0,0,999))}),e}function Ud(n){return!n||!De[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,layer:Number.isInteger(n.layer)&&n.layer>=0&&n.layer<4?n.layer:null,queuedAt:$e(n.queuedAt,Date.now(),0),startedAt:n.startedAt===null?null:$e(n.startedAt,Date.now(),0),readyAt:n.readyAt===null?null:$e(n.readyAt,Date.now(),0),quality:$e(n.quality,1,.5,1.25)}}function wy(n){return!n||!De[n.crop]?null:{id:String(n.id||crypto.randomUUID()),crop:n.crop,plantedAt:$e(n.plantedAt,Date.now(),0),readyAt:$e(n.readyAt,Date.now(),0),quality:$e(n.quality,1,.5,1.25)}}function Sy(n){return!n||!De[n.crop]?null:{id:String(n.id||crypto.randomUUID()),customer:String(n.customer||"Mara").slice(0,24),slot:Number.isInteger(n.slot)&&n.slot>=0&&n.slot<3?n.slot:null,crop:n.crop,amount:Math.floor($e(n.amount,1,1,3)),reward:Math.floor($e(n.reward,10,1,200)),xp:Math.floor($e(n.xp,5,1,50)),createdAt:$e(n.createdAt,Date.now(),0),expiresAt:$e(n.expiresAt,Date.now()+12e4,0),status:["waiting","cooldown"].includes(n.status)?n.status:"waiting"}}function Ey(n,e,t){n.towers.forEach(i=>{i.queue.forEach(r=>{if(!r||r.startedAt===null||r.readyAt===null||r.readyAt<=e)return;const s=t?ds(r.crop,"tower",n,i):De[r.crop].towerSeconds*4,o=e+s*1e3;r.readyAt=Math.min(r.readyAt,o)})}),n.beds.forEach(i=>{i.plants.forEach(r=>{if(r.readyAt<=e)return;const s=e+ds(r.crop,"bed",n)*1e3;r.readyAt=Math.min(r.readyAt,s)})})}function fa(n,e=Date.now()){const t=Ua(e);if(!n||typeof n!="object")return t;const i=n.hydro?.systemLessonDone===void 0&&($e(n.taskIndex,0)>6||Array.isArray(n.towers)&&n.towers.some(a=>["greens","fruit"].includes(a?.specialization))),r={...t,...n,version:eu,createdAt:$e(n.createdAt,e,0),savedAt:$e(n.savedAt,e,0),chapter:Math.floor($e(n.chapter,0,0,vo.length-1)),taskIndex:Math.floor($e(n.taskIndex,0,0,An.length)),completedTasks:Array.isArray(n.completedTasks)?[...new Set(n.completedTasks.filter(a=>An.some(c=>c.id===a)))]:[],coins:Math.floor($e(n.coins,t.coins,0,99999)),xp:Math.floor($e(n.xp,0,0,99999)),challengeUnlocked:!!n.challengeUnlocked,campaignComplete:!!n.campaignComplete,proPip:!!n.proPip,unlockedCrops:Array.isArray(n.unlockedCrops)?Jn.filter(a=>n.unlockedCrops.includes(a)):["lettuce"],seeds:Yr(n.seeds),seedShop:_y(n.seedShop),rack:Yr(n.rack),farm:ry(n.farm),homestead:$x(n.homestead),carry:null,orders:Array.isArray(n.orders)?n.orders.map(Sy).filter(Boolean).slice(0,3):[],selectedOrderId:typeof n.selectedOrderId=="string"?n.selectedOrderId.slice(0,80):null,orderSequence:Math.floor($e(n.orderSequence,0,0,999999)),lastCustomer:String(n.lastCustomer||"").slice(0,24),market:{built:!!n.market?.built,level:Math.floor($e(n.market?.level,0,0,2)),stage:n.market?.built?Math.floor($e(n.market?.stage,n.market?.level>=2?4:3,1,4)):0,nextVisitIn:$e(n.market?.nextVisitIn,8,0,35),visitRemaining:Math.floor($e(n.market?.visitRemaining,0,0,3)),cropBag:[...new Set((Array.isArray(n.market?.cropBag)?n.market.cropBag:[]).filter(a=>Jn.includes(a)))],openingGrant:Math.floor($e(n.market?.openingGrant,0,0,At.market))},hydro:{water:$e(n.hydro?.water,100,0,100),nutrients:$e(n.hydro?.nutrients,100,0,100),ph:$e(n.hydro?.ph,6.2,4.5,8),strategy:"balanced",batchMixed:n.hydro?.batchMixed!==!1,mixChecked:n.hydro?.batchMixed===!1?!1:!!n.hydro?.mixChecked,flowChecked:!!n.hydro?.flowChecked,flowCalibrated:!!n.hydro?.flowCalibrated||n.hydro?.strategy==="water-save"||i,systemLessonDone:!!n.hydro?.systemLessonDone||i,batchNumber:Math.floor($e(n.hydro?.batchNumber,1,1,999999)),feedPhase:$e(n.hydro?.feedPhase,0,0,24)%24,lineClogged:!!n.hydro?.lineClogged&&$e(n.chapter,0)>=1,lineRunSeconds:$e(n.hydro?.lineRunSeconds,0,0,360),lineClogAfter:$e(n.hydro?.lineClogAfter,300,240,360),servicedAt:$e(n.hydro?.servicedAt,e,0)},cosmetics:{owned:Array.isArray(n.cosmetics?.owned)?n.cosmetics.owned.filter(a=>Qs[a]):[],active:Array.isArray(n.cosmetics?.active)?n.cosmetics.active.filter(a=>Qs[a]):[]},tutorial:{...t.tutorial,...n.tutorial||{}},settings:{soundEnabled:n.settings?.soundEnabled!==!1,highContrast:!!n.settings?.highContrast,reducedMotion:!!n.settings?.reducedMotion,musicVolume:$e(n.settings?.musicVolume,t.settings.musicVolume,0,1),effectsVolume:$e(n.settings?.effectsVolume,t.settings.effectsVolume,0,1)},stats:{...t.stats,...n.stats||{},seedsCollected:Math.floor($e(n.stats?.seedsCollected,0,0)),planted:Math.floor($e(n.stats?.planted,0,0)),transplanted:Math.floor($e(n.stats?.transplanted,0,0)),harvested:Math.floor($e(n.stats?.harvested,0,0)),sold:Math.floor($e(n.stats?.sold,0,0)),orders:Math.floor($e(n.stats?.orders,0,0)),rejectedOrders:Math.floor($e(n.stats?.rejectedOrders,0,0)),serviceActions:Math.floor($e(n.stats?.serviceActions,0,0)),byCropQueued:Yr(n.stats?.byCropQueued),byCropHarvested:Yr(n.stats?.byCropHarvested),byCropSold:Yr(n.stats?.byCropSold),byCropFed:Yr(n.stats?.byCropFed)}};if(r.level=Ia(r.xp),r.unlockedCrops.includes("lettuce")||r.unlockedCrops.unshift("lettuce"),r.towers=[0,1,2,3].map(a=>{const c=n.towers?.[a]||{};return{...Gh(a),...c,id:`tower-${a}`,built:a===0||!!c.built,repaired:!!c.repaired,specialization:"balanced",queueCapacity:4,irrigationUpgraded:!!c.irrigationUpgraded||$e(n.version,0)<6&&c.queueCapacity===3,queue:Array.isArray(c.queue)?c.queue.map(Ud).filter(Boolean).slice(0,4):[]}}),r.beds=[0,1,2,3].map(a=>{const c=n.beds?.[a]||{};return{...Wh(a),...c,id:`bed-${a}`,built:a===0||!!c.built,capacity:Math.floor($e(c.capacity,2,2,4)),soilCharges:Math.floor($e(c.soilCharges,0,0,4)),plants:Array.isArray(c.plants)?c.plants.map(wy).filter(Boolean).slice(0,4):[]}}),n.carry?.kind==="starter"&&De[n.carry.crop])r.carry={kind:"starter",crop:n.carry.crop,quality:$e(n.carry.quality,1,.5,1.25),sourceTower:Math.floor($e(n.carry.sourceTower,0,0,3)),sourceLayer:Number.isInteger(n.carry.sourceLayer)&&n.carry.sourceLayer>=0&&n.carry.sourceLayer<4?n.carry.sourceLayer:null,job:Ud(n.carry.job)};else if(n.carry?.kind==="produce"&&Array.isArray(n.carry.items)){const a=n.carry.items.filter(c=>De[c]).slice(0,Ht(r).basket);a.length&&(r.carry={kind:"produce",items:a})}Oh(r);const s=new Set;r.orders.forEach(a=>{(a.slot===null||s.has(a.slot))&&(a.slot=[0,1,2].find(c=>!s.has(c))),s.add(a.slot)});const o=r.cosmetics.owned.length||r.farm.owned.length||r.towers.some(a=>a.irrigationUpgraded)||r.beds.some(a=>a.capacity>2);if(!r.market.built&&r.taskIndex>=3&&r.coins<At.market&&!r.market.openingGrant&&o&&(r.market.openingGrant=At.market-r.coins,r.coins=At.market),r.hydro.water<=0||!r.hydro.batchMixed){const a=Math.max(0,e-r.savedAt);r.towers.forEach(c=>c.queue.forEach(l=>{l.readyAt>r.savedAt&&(l.readyAt+=a,l.startedAt!==null&&(l.startedAt+=a))})),r.savedAt=e}return Ey(r,e,$e(n.version,0)<4),r}function Ty(n,e){if(!e||typeof e!="object")return n;const t=Array.isArray(e.completed)?e.completed:[],i=Math.floor($e(e.highestContract,0,0,2));return(t.includes("homestead")||i>=1)&&(n.chapter=1,n.taskIndex=5,n.completedTasks=An.slice(0,5).map(r=>r.id),n.coins=150,n.xp=130,n.challengeUnlocked=!0,n.unlockedCrops=["lettuce","basil","tomato"],n.towers[0].repaired=!0,n.market={built:!0,level:1}),(t.includes("split-flow")||i>=2)&&(n.chapter=2,n.taskIndex=10,n.completedTasks=An.slice(0,10).map(r=>r.id),n.coins=260,n.xp=330,n.unlockedCrops=["lettuce","basil","tomato","kale","strawberry"],n.towers[1].built=!0,n.towers[1].repaired=!0,n.hydro.systemLessonDone=!0,n.hydro.flowCalibrated=!0,n.towers[2].built=!0,n.towers[2].repaired=!0,n.beds[1].built=!0,n.beds[2].built=!0),t.includes("pro-yard")&&(n.taskIndex=An.length,n.completedTasks=An.map(r=>r.id),n.coins=420,n.xp=500,n.campaignComplete=!0,n.challengeUnlocked=!0,n.proPip=!0,n.towers.forEach(r=>{r.built=!0,r.repaired=!0}),n.beds.forEach(r=>{r.built=!0}),n.market={built:!0,level:2}),n.level=Ia(n.xp),n}function tu(n=window.localStorage,e=Date.now()){let t=null;try{t=JSON.parse(n.getItem(go)||"null")}catch{t=null}if(t)return fa(t,e);let i=null;try{i=JSON.parse(n.getItem(by)||"null")}catch{i=null}return fa(Ty(Ua(e),i),e)}function Ay(n,e=window.localStorage,t=Date.now(),i=()=>{}){const r=fa({...n,savedAt:t},t);try{e.setItem(go,JSON.stringify(r)),i(!0)}catch{i(!1)}return r}function Cy(n=window.localStorage,e=Date.now()){const t=Ua(e);try{n.setItem(go,JSON.stringify(t))}catch{}return t}function Zn(n){return An[n.taskIndex]||null}function ds(n,e,t,i=null){const r=De[n];if(e==="bed")return r.bedSeconds*(1-La(t,n)*.03);let s=r.towerSeconds;return i?.irrigationUpgraded&&(s*=.88),Math.max(3,s)}function Rr(n,e=Date.now()){return Oh(n),n.towers.forEach(t=>{t.queue.length&&t.queue.forEach(i=>{(i.startedAt===null||i.readyAt===null)&&(i.startedAt=e,i.readyAt=e+ds(i.crop,"tower",n,t)*1e3)})}),sy(n,e),n.level=Ia(n.xp),n}function Ry(n){const e=Object.fromEntries(Jn.map(t=>[t,{queued:0,starter:0,garden:0,basket:0,rack:n.rack[t]||0,sold:n.stats.byCropSold[t]||0,fed:n.stats.byCropFed?.[t]||0,accounted:0}]));return n.towers.forEach(t=>t.queue.forEach(i=>{e[i.crop].queued+=1})),n.carry?.kind==="starter"&&(e[n.carry.crop].starter+=1),n.beds.forEach(t=>t.plants.forEach(i=>{e[i.crop].garden+=1})),n.carry?.kind==="produce"&&n.carry.items.forEach(t=>{e[t].basket+=1}),Object.values(e).forEach(t=>{t.accounted=t.queued+t.starter+t.garden+t.basket+t.rack+t.sold+t.fed}),e}const $h=1024*1024,qh="hydropipFarmBeforeRestore";function yl(n,e=Date.now()){return JSON.stringify({format:"hydropip-farm",backupVersion:1,gameVersion:Bs,farm:{...n,savedAt:e}},null,2)}function Ml(n,e=Date.now()){if(new TextEncoder().encode(n).length>$h)throw new Error("Backup exceeds the 1 MB limit.");let t;try{t=JSON.parse(n,(r,s)=>{if(["__proto__","prototype","constructor"].includes(r))throw new Error;if(typeof s=="string"&&/[<>"'&`]/.test(s))throw new Error;if(typeof s=="number"&&!Number.isFinite(s))throw new Error;return s})}catch{throw new Error("This is not a valid HydroPip farm backup.")}if(t?.format!==void 0&&(t.format!=="hydropip-farm"||t.backupVersion!==1))throw new Error("Unsupported backup format.");const i=t?.format==="hydropip-farm"?t.farm:t;if(!i||!Number.isInteger(i.version)||i.version<1||i.version>eu)throw new Error("Unsupported farm version. Use a backup from this game version or an older one.");if(!Number.isFinite(i.coins)||i.coins<0||!Number.isFinite(i.xp)||i.xp<0||!Number.isInteger(i.taskIndex)||i.taskIndex<0||i.taskIndex>12||!Array.isArray(i.towers)||i.towers.length!==4||!Array.isArray(i.beds)||i.beds.length!==4||!i.seeds||typeof i.seeds!="object"||!i.stats||typeof i.stats!="object")throw new Error("The file is missing required farm data. Your current farm has not changed.");return fa(i,e)}function Py(n,e,t,i=Date.now()){const r=Ml(yl(e,i),i);return n.setItem(qh,yl(t,i)),n.setItem(go,JSON.stringify(r)),r}function Ly(n,e){const t=u=>document.getElementById(u);let i=null,r=0;function s(u,d,p="application/json"){const f=URL.createObjectURL(new Blob([u],{type:p})),g=document.createElement("a");g.href=f,g.download=d,g.click(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}function o(u){t("importStatus").textContent=u}function a(){r++,i=null,t("restoreConfirmation").hidden=!0,t("importFile").value=""}for(const u of document.querySelectorAll("[data-real-build]"))u.href=my,u.addEventListener("click",()=>jn("build_guide_open",{source:u.dataset.realBuild}));t("gameVersion").textContent=Bs,t("exportSave").addEventListener("click",()=>s(yl(n()),"hydropip-farm-backup.json")),t("importSave").addEventListener("click",()=>{a(),o(""),t("importFile").click()}),t("importFile").addEventListener("change",async u=>{const d=u.target.files[0];if(!d)return;const p=r;try{if(d.size>$h)throw new Error("Backup exceeds the 1 MB limit.");const f=await d.text();if(p!==r)return;const g=Ml(f);i=f,t("restoreSummary").textContent=`Replace this farm with Chapter ${g.chapter+1}, ${g.coins} coins, and ${g.homestead.claimed.length} completed projects? A recovery copy of this farm will be retained.`,t("restoreConfirmation").hidden=!1,t("cancelRestore").focus()}catch(f){a(),o(f.message)}}),t("cancelRestore").addEventListener("click",()=>{a(),o("Restore cancelled. Your farm is unchanged.")}),t("confirmRestore").addEventListener("click",()=>{if(i){try{const u=Py(localStorage,Ml(i),n());e(u)}catch{o("Restore could not be completed. Your pre-restore recovery copy is available below if it was saved. Free browser storage and try again.");return}a(),jn("farm_restored"),location.reload()}}),t("exportRecovery").addEventListener("click",()=>{try{const u=localStorage.getItem(qh);if(!u)return o("No previous restore recovery copy is available.");s(u,"hydropip-before-restore.json")}catch{o("Browser storage is unavailable.")}});function c(){const u=n();return`HydroPip game report
Version: ${Bs}
Chapter: ${u.chapter+1}; task: ${u.taskIndex}
Viewport: ${innerWidth} x ${innerHeight}
Browser: ${navigator.userAgent}

What happened:
${t("reportNotes").value.trim()||"(Please describe what happened.)"}

No saved-farm contents are attached.`}function l(){const u=c();t("reportPreview").textContent=u,t("emailReport").href=`mailto:${Id}?subject=${encodeURIComponent(`HydroPip game report ${Bs}`)}&body=${encodeURIComponent(u)}`}return t("reportProblem").addEventListener("click",()=>{t("feedbackForm").hidden=!t("feedbackForm").hidden,l()}),t("reportNotes").addEventListener("input",l),t("downloadReport").addEventListener("click",()=>s(c(),"hydropip-game-report.txt","text/plain")),t("emailReport").hidden=!Id,{cancelImport:a}}const Nd=new URL(""+new URL("pip-pro-celebration-transparent-IQLOdfWW.webp",import.meta.url).href,import.meta.url).href,kd=new URL(""+new URL("rhythm-dance-5VSp4liT.webp",import.meta.url).href,import.meta.url).href;function Dy({balance:n,reducedMotion:e,mobile:t=()=>!1}){const i=document.createElement("div");i.className="reward-effects",i.setAttribute("aria-hidden","true");const r=document.createElement("section");r.className="reward-notice",r.hidden=!0,r.setAttribute("aria-label","Goal celebration");const s=document.createElement("button");s.type="button",s.className="reward-dismiss",s.textContent="×",s.setAttribute("aria-label","Dismiss celebration");const o=document.createElement("img");o.alt="";const a=document.createElement("div");a.className="reward-copy";const c=document.createElement("span"),l=document.createElement("h3"),u=document.createElement("p");a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.append(c,l,u),r.append(s,o,a),document.body.append(i,r);let d;const p=new Set,f=()=>e()||matchMedia("(prefers-reduced-motion: reduce)").matches;function g(L,I,b,w=!1){const R=L.animate(I,b);p.add(R);const C=()=>{p.delete(R),w&&L.remove()};return R.onfinish=C,R.oncancel=C,R}function _(){clearTimeout(d),r.hidden=!0,o.getAnimations().forEach(L=>L.cancel())}s.addEventListener("click",_),document.addEventListener("keydown",L=>{L.key==="Escape"&&_()});function v(){for(const L of p)L.cancel();p.clear(),i.replaceChildren()}document.addEventListener("visibilitychange",()=>{document.hidden&&(v(),_())}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",()=>{f()&&v()});function S(L,I){if(!Number.isFinite(L)||L<=0||document.hidden)return;const b=n.getBoundingClientRect(),w={x:b.left+b.width/2,y:b.top+b.height/2},R=Math.max(70,Math.min(innerWidth-70,I?.x??innerWidth/2)),C=Math.max(110,Math.min(innerHeight-100,I?.y??innerHeight/2)),k=document.createElement("strong");if(k.className="reward-coin-label",k.textContent=`+${L.toLocaleString()} coins`,k.style.left=`${R}px`,k.style.top=`${C}px`,i.querySelectorAll(".reward-coin-label").length>=3&&i.querySelector(".reward-coin-label").remove(),i.append(k),f()){setTimeout(()=>k.remove(),1800);return}g(k,[{opacity:1,translate:"0 0"},{opacity:1,offset:.7},{opacity:0,translate:"0 -36px"}],{duration:1700},!0);const N=Math.min(8,Math.max(3,Math.ceil(L/5)),24-i.querySelectorAll(".reward-coin").length);for(let O=0;O<N;O++){const B=document.createElement("i");B.className="reward-coin",B.textContent="P",B.style.left=`${R}px`,B.style.top=`${C}px`,i.append(B);const q=w.x-R,G=w.y-C;g(B,[{transform:"translate(-50%,-50%) scale(.5)",opacity:0},{transform:`translate(${(O-N/2)*13}px,-40px) scale(1)`,opacity:1,offset:.24},{transform:`translate(${q}px,${G}px) scale(.65)`,opacity:1,offset:.9},{transform:`translate(${q}px,${G}px) scale(.2)`,opacity:0}],{duration:1050,delay:O*60,fill:"backwards",easing:"cubic-bezier(.25,.6,.4,1)"},!0)}n.getAnimations().forEach(O=>O.cancel()),g(n,[{color:"#ffe678",scale:"1"},{color:"#ffe678",scale:"1.2",offset:.55},{scale:"1"}],{duration:550,delay:850})}function y(){if(f()||document.hidden)return;i.querySelectorAll(".reward-confetti").forEach(I=>{I.getAnimations().forEach(b=>b.cancel()),I.remove()});const L=t()||innerWidth<620?22:42;for(let I=0;I<L;I++){const b=document.createElement("i");b.className="reward-confetti",b.style.left=`${8+Math.random()*84}%`,b.style.background=["#ffd454","#f4778b","#66d9db","#bde875","#fff6d9"][I%5],i.append(b),g(b,[{transform:"translateY(-30px) rotate(0deg)",opacity:0},{opacity:1,offset:.12},{opacity:1,offset:.7},{transform:`translate(${(Math.random()-.5)*180}px,${innerHeight*.8}px) rotate(${I%2?540:-540}deg)`,opacity:0}],{duration:2200+Math.random()*600,delay:Math.random()*350,fill:"backwards"},!0)}}function x(L){f()||g(L,[{transform:"rotate(-8deg) translateY(0)"},{transform:"rotate(14deg) translateY(-12px)",offset:.25},{transform:"rotate(-12deg) translateY(-4px)",offset:.5},{transform:"rotate(8deg) translateY(-10px)",offset:.75},{transform:"rotate(-8deg) translateY(0)"}],{duration:1250,iterations:3,easing:"ease-in-out"})}function P({title:L,detail:I,major:b=!1,rhythm:w=!1}){t()&&!b||document.hidden||(_(),r.classList.toggle("is-major",b),c.textContent=b?"Homestead milestone!":"Goal complete!",l.textContent=L,u.textContent=I,o.src=w?kd:Nd,r.hidden=!1,b&&y(),w?x(o):f()||g(o,[{transform:"scale(.8)"},{transform:"scale(1.06)",offset:.7},{transform:"scale(1)"}],{duration:450}),d=setTimeout(_,t()?3500:b?6500:3600))}function A(L,I){_();const b=L.querySelector(".chapter-reward-art img");b.getAnimations().forEach(w=>w.cancel()),b.src=I?kd:Nd,b.alt=I?"Rhythm Pip in his breakdance freeze with a boombox":"Pro Pip cheering with confetti",I&&x(b),y()}return{coins:S,celebrate:P,chapter:A,dismiss:_,clearMotion:v}}function Iy({urls:n,settings:e,canPlay:t,onSystemMute:i}){const r=new Map,s=new Set,o=new WeakMap;let a=document.hidden;const c=()=>!a&&!document.hidden&&t()&&e().soundEnabled!==!1;function l(m){m.muted=!0,m.pause(),o.delete(m)}function u(){r.forEach(l),s.forEach(l),s.clear(),navigator.mediaSession&&(navigator.mediaSession.playbackState="paused")}function d(m,S,y=!1){if(!c()||S<=0)return l(m);if(m.volume=S,m.muted=!1,!m.paused||o.has(m))return;const x={};o.set(m,x),Promise.resolve(m.play()).then(()=>{if(!c()||m.muted||(y?e().musicVolume:e().effectsVolume)<=0)return l(m);o.get(m)===x&&(o.delete(m),y&&navigator.mediaSession&&(navigator.mediaSession.playbackState="playing"))}).catch(()=>{o.get(m)===x&&(l(m),s.delete(m))})}function p(){if(!(!c()||e().musicVolume<=0))for(const[m,S]of[["music",1],["ambience",.56]]){if(!r.has(m)){const y=new Audio(n[m]);y.loop=!0,r.set(m,y)}d(r.get(m),e().musicVolume*S,!0)}}function f(m){if(!c()||e().effectsVolume<=0||!n[m])return;if(s.size>=12){const y=s.values().next().value;l(y),s.delete(y)}const S=new Audio(n[m]);s.add(S),S.addEventListener("ended",()=>s.delete(S),{once:!0}),S.addEventListener("error",()=>{l(S),s.delete(S)},{once:!0}),d(S,e().effectsVolume)}function g(){if(!c())return u();r.forEach((m,S)=>{e().musicVolume<=0?l(m):m.volume=e().musicVolume*(S==="music"?1:.56)}),s.forEach(m=>{e().effectsVolume<=0?(l(m),s.delete(m)):m.volume=e().effectsVolume})}function _(){a=!0,u()}function v(){a=document.hidden}window.addEventListener("blur",_),window.addEventListener("pagehide",_),document.addEventListener("freeze",_),window.addEventListener("focus",v),window.addEventListener("pageshow",v),document.addEventListener("visibilitychange",()=>document.hidden?_():v());for(const m of["pause","stop"])try{navigator.mediaSession?.setActionHandler(m,()=>{u(),i()})}catch{}return{start:p,effect:f,update:g,stop:u}}const Xh=matchMedia("(max-width: 620px), (pointer: coarse) and (max-width: 1200px), (pointer: coarse) and (max-height: 600px)"),vt=()=>Xh.matches;document.body.classList.toggle("mobile-ui",vt());function Uy({canMove:n,onStart:e,onMove:t,onLayout:i,closePanels:r}){const s=document.getElementById("thumbstick"),o=s.querySelector("i");let a=null;function c(){const d=a;a=null,d!==null&&s.hasPointerCapture(d)&&s.releasePointerCapture(d),o.style.transform="translate(0px, 0px)",s.classList.remove("is-active"),t(0,0)}function l(d){if(d.pointerId!==a)return;if(!n())return c();const p=s.getBoundingClientRect(),f=p.width*.3,g=d.clientX-p.left-p.width/2,_=d.clientY-p.top-p.height/2,v=Math.hypot(g,_),m=v>f?f/v:1;o.style.transform=`translate(${g*m}px, ${_*m}px)`;const S=Math.min(1,Math.max(0,(v/f-.12)/.88));t(v?g/v*S:0,v?_/v*S:0)}s.addEventListener("pointerdown",d=>{a!==null||!n()||!vt()||(d.preventDefault(),e(),a=d.pointerId,s.setPointerCapture(a),s.classList.add("is-active"),l(d))}),s.addEventListener("pointermove",l);for(const d of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(d,p=>{p.pointerId===a&&c()});s.addEventListener("contextmenu",d=>d.preventDefault());for(const d of document.querySelectorAll(".task-drawer,.interaction-panel,.order-drawer")){let p=null;d.addEventListener("pointerdown",f=>{!vt()||!f.target.closest("header")||f.target.closest("button")||(p={id:f.pointerId,x:f.clientX,y:f.clientY},d.setPointerCapture(f.pointerId))}),d.addEventListener("pointerup",f=>{if(!p||p.id!==f.pointerId)return;const g=f.clientX-p.x,_=f.clientY-p.y;(innerWidth>620&&innerWidth>innerHeight?g>55&&g>Math.abs(_):_>45&&_>Math.abs(g))&&r(),p=null}),d.addEventListener("pointercancel",()=>{p=null})}function u(){c(),document.body.classList.toggle("mobile-ui",vt()),i()}return Xh.addEventListener("change",u),window.addEventListener("resize",u),window.visualViewport?.addEventListener("resize",u),{reset:c}}function Ny({onOpen:n,onExit:e,onLeave:t,onResize:i}){const r=N=>document.getElementById(N),s=r("displayOverlay"),o=r("fullscreenButton"),a=r("exitFullscreen"),c=r("landscapeNotice"),l=matchMedia("(orientation: landscape)"),u=matchMedia("(display-mode: standalone), (display-mode: fullscreen)"),d=()=>navigator.standalone===!0||u.matches&&!document.fullscreenElement,p=()=>document.fullscreenEnabled===!0&&typeof document.documentElement.requestFullscreen=="function";let f=null,g=null,_=null,v=!1,m=!1,S=!1,y="",x=!1;try{x=sessionStorage.getItem("hydropipLandscapeHint")==="seen"}catch{}function P(){c.hidden=!0,clearTimeout(_)}function A(){const N=d(),O=p();r("displayTitle").textContent=N?"App view":"Landscape play",r("displayMessage").textContent=y||(N?"The game is already open without browser bars.":O?l.matches?"Landscape is ready for full screen.":"Rotate your phone to landscape for the widest farm view.":"This browser cannot put the whole game into full screen. Landscape still gives you more room."),r("displayInstructions").textContent=N?"Rotate upright to pause and save. Use the app switcher to close this app, or choose Return to HydroPip from Pause.":O?"Tap Full screen after rotating. Rotate upright to pause and exit full screen, or use the exit button at any time.":"On iPhone: open this game in Safari, tap Share, then Add to Home Screen. Turn on Open as Web App if offered, and launch the new icon. Rotate upright to pause; use the app switcher to close it.",r("enterFullscreen").hidden=N||!O,r("enterFullscreen").disabled=v||vt()&&!l.matches,r("displaySaveNote").hidden=N||O,r("displayBackup").hidden=N||O}function L(){P(),s.hidden&&(g=document.activeElement,f=n()),s.hidden=!1,A(),r("closeDisplay").focus()}function I(N=!0){s.hidden||(s.hidden=!0,f?.(),f=null,N&&g?.isConnected&&g.focus())}function b(){m=!1,I(!1),P(),e()}async function w(){if(!v){if(!p()||d()||vt()&&!l.matches){y="",L();return}v=!0;try{await document.documentElement.requestFullscreen({navigationUI:"hide"}),y="",I(),P(),C()}catch{y="Full screen was not allowed. You can keep playing here, or try again from your browser.",L()}finally{v=!1,s.hidden||A()}}}async function R(){if(b(),document.fullscreenElement)try{await document.exitFullscreen()}catch{y="Use your browser full-screen exit control to return.",L()}}function C(){const N=!!document.fullscreenElement,O=d();document.body.classList.toggle("is-app-window",N||O),o.hidden=N||O,a.hidden=!N&&!O,a.setAttribute("aria-label",N?"Exit full screen and pause":"Pause and leave game"),a.title=N?"Exit full screen and pause":"Pause and leave game",o.textContent=N||O?"×":"⛶";const B=N?"Exit full screen and pause":O?"Pause and leave game":"Full screen options";o.setAttribute("aria-label",B),o.title=B,o.setAttribute("aria-pressed",String(N));const q=document.activeElement?.matches("input,textarea,select");vt()&&!q&&(N||O)&&l.matches&&(m=!0);const G=vt()&&!q&&!l.matches&&m,oe=S&&!N;S=N,G?R():oe&&b(),s.hidden||A(),c.hidden||(r("landscapeNoticeText").textContent=l.matches?p()?"Tap for full screen. Rotate upright to pause.":"Landscape play. View full-screen options.":"Rotate for a wider farm."),requestAnimationFrame(i)}function k(){if(!(x||!vt()||document.hidden||document.querySelector(".modal-overlay:not([hidden])"))){x=!0;try{sessionStorage.setItem("hydropipLandscapeHint","seen")}catch{}d()||(c.hidden=!1,C(),_=setTimeout(P,7e3))}}o.addEventListener("click",()=>document.fullscreenElement||d()?void R():void w()),a.addEventListener("click",()=>{R()}),r("landscapeOptions").addEventListener("click",()=>{w()}),r("dismissLandscapeNotice").addEventListener("click",P),r("enterFullscreen").addEventListener("click",()=>{w()}),r("closeDisplay").addEventListener("click",()=>I()),r("keepWindowed").addEventListener("click",()=>I()),r("displayBackup").addEventListener("click",()=>{I(!1),r("settingsButton").click()}),r("leaveGame").addEventListener("click",t),r("beginCampaign").addEventListener("click",k),document.addEventListener("fullscreenchange",C),l.addEventListener("change",C),u.addEventListener("change",C),window.addEventListener("resize",C),document.addEventListener("visibilitychange",()=>{document.hidden&&P()}),document.addEventListener("keydown",N=>{if(!s.hidden&&(N.key==="Escape"&&(N.preventDefault(),N.stopImmediatePropagation(),I()),N.key==="Tab")){const O=[...s.querySelectorAll("button:not(:disabled),a[href]")].filter(G=>G.getClientRects().length),B=O[0],q=O.at(-1);N.shiftKey&&document.activeElement===B?(N.preventDefault(),q.focus()):!N.shiftKey&&document.activeElement===q&&(N.preventDefault(),B.focus())}},!0),C(),requestAnimationFrame(k)}function ky(n,e,t=Date.now()){if(n.chapter<1)return!1;const i=n.towers.filter(o=>o.built&&o.repaired).flatMap(o=>o.queue.filter(a=>a.readyAt>t));if(!i.length)return!1;const r=Math.max(0,Math.min(e,1)),s=n.hydro;return s.lineClogged?(i.forEach(o=>{o.readyAt+=r*500}),!1):(s.lineRunSeconds+=r,s.lineRunSeconds<s.lineClogAfter?!1:(s.lineClogged=!0,!0))}function Oy(n,e=Math.random){return n.hydro.lineClogged?(n.hydro.lineClogged=!1,n.hydro.lineRunSeconds=0,n.hydro.lineClogAfter=240+Math.floor(e()*121),!0):!1}const bc=24,bl=6,nu=30;function Kn(n){return n.hydro.water>0&&n.hydro.batchMixed!==!1}function Od(n){return Kn(n)&&n.hydro.flowCalibrated&&!n.hydro.lineClogged}function Yh(n,e=Date.now()){return Kn(n)&&(n.hydro.feedPhase||0)<bl&&n.towers.some(t=>t.built&&t.repaired&&t.queue.some(i=>i.readyAt>e))}function Fy(n,e){const t=n.hydro;if(e==="water"){if(t.water>nu)return!1;t.water=100,t.batchMixed=!1,t.mixChecked=!1,t.flowChecked=!1,t.feedPhase=0,t.batchNumber=(t.batchNumber||1)+1}else if(e==="mix"){if(t.water<=0||t.mixChecked)return!1;t.batchMixed=!0,t.mixChecked=!0}else if(e==="check"){if(!Kn(n)||!t.mixChecked||t.flowChecked||t.lineClogged||!n.towers.some(i=>i.built)||n.towers.some(i=>i.built&&!i.repaired))return!1;t.flowChecked=!0,t.flowCalibrated=!0,t.systemLessonDone=!0}else return!1;return!0}function By(n,e,t=Date.now(),i=1){const r=Math.max(0,Math.min(1,e)),s=n.towers.filter(u=>u.built&&u.repaired).flatMap(u=>u.queue.filter(d=>d.readyAt>t-r*1e3));if(!s.length||!r)return;if(!Kn(n)){s.forEach(u=>{u.readyAt+=r*1e3,u.startedAt!==null&&(u.startedAt+=r*1e3)});return}const o=n.hydro,a=o.feedPhase||0,c=u=>Math.floor(u/bc)*bl+Math.min(u%bc,bl),l=c(a+r)-c(a);o.feedPhase=(a+r)%bc,o.water=Math.max(0,o.water-l*.3*s.length/4*i)}const jh=["127.0.0.1","localhost"].includes(location.hostname)&&new URLSearchParams(location.search).has("test"),eo=jh&&!new URLSearchParams(location.search).has("realtime")?.012:1,_s=vt(),_o=/HeadlessChrome/i.test(navigator.userAgent),zy={"seed-pickup":new URL(""+new URL("seed-pickup-CAHmd7zc.wav",import.meta.url).href,import.meta.url).href,plant:new URL(""+new URL("plant-OZHmKUrR.wav",import.meta.url).href,import.meta.url).href,pickup:new URL(""+new URL("pickup-BP6zBWsE.wav",import.meta.url).href,import.meta.url).href,transplant:new URL(""+new URL("transplant-ByuaeTUQ.wav",import.meta.url).href,import.meta.url).href,harvest:new URL(""+new URL("harvest-BPj-n7q9.wav",import.meta.url).href,import.meta.url).href,rack:new URL(""+new URL("rack-BXIXSV4Z.wav",import.meta.url).href,import.meta.url).href,return:new URL(""+new URL("return-B7_saD0o.wav",import.meta.url).href,import.meta.url).href,sale:new URL(""+new URL("sale-DHHLIj-t.wav",import.meta.url).href,import.meta.url).href,repair:new URL(""+new URL("repair-BH8WY1JO.wav",import.meta.url).href,import.meta.url).href,build:new URL(""+new URL("build-DlE-ni3d.wav",import.meta.url).href,import.meta.url).href,"level-up":new URL(""+new URL("level-up-Cr_FX5st.wav",import.meta.url).href,import.meta.url).href,"task-complete":new URL(""+new URL("task-complete-kxblrCmv.wav",import.meta.url).href,import.meta.url).href,"chapter-complete":new URL(""+new URL("chapter-complete-B0bpPvE9.wav",import.meta.url).href,import.meta.url).href,error:new URL(""+new URL("error-BplsGajU.wav",import.meta.url).href,import.meta.url).href,"order-reject":new URL(""+new URL("order-reject-w7AxRbDQ.wav",import.meta.url).href,import.meta.url).href,service:new URL(""+new URL("service-DnymfeYl.wav",import.meta.url).href,import.meta.url).href,music:new URL(""+new URL("garden-loop-_0sf0c8-.wav",import.meta.url).href,import.meta.url).href,ambience:new URL(""+new URL("farm-ambient-BpMfQsJu.wav",import.meta.url).href,import.meta.url).href},te=n=>document.querySelector(n),en=te("#campaignScene");te("#farmStage");const Na=te("#objectiveBar"),vi=te("#taskDrawer"),Bn=te("#homesteadDrawer"),Qn=te("#interactionPanel"),on=te("#interactionContent"),yn=te("#orderDrawer"),Mn=te("#welcomeOverlay"),Hy=te("#pauseOverlay"),an=te("#chapterOverlay"),zi=te("#settingsOverlay"),xs=te("#resetOverlay"),ys=te("#actionButton"),yr=te("#marketChip"),to=te("#campaignMessage"),Jh=te("#carryChip"),Te={coins:te("#coinValue"),level:te("#levelValue"),xp:te("#xpValue"),xpFill:te("#xpFill"),chapter:te("#chapterValue"),objectiveChapter:te("#objectiveChapter"),objectiveTitle:te("#objectiveTitle"),objectiveProgress:te("#objectiveProgress"),taskChapter:te("#taskChapter"),taskTitle:te("#taskTitle"),taskStory:te("#taskStory"),primaryTaskTitle:te("#primaryTaskTitle"),primaryTaskDetail:te("#primaryTaskDetail"),primaryTaskReward:te("#primaryTaskReward"),chapterTaskList:te("#chapterTaskList"),interactionKicker:te("#interactionKicker"),interactionTitle:te("#interactionTitle"),interactionSummary:te("#interactionSummary"),orderList:te("#orderList"),rackSummary:te("#rackSummary"),carryKind:te("#carryKind"),carryContents:te("#carryContents"),chapterResultKicker:te("#chapterResultKicker"),chapterResultTitle:te("#chapterResultTitle"),chapterResultSummary:te("#chapterResultSummary"),chapterCoins:te("#chapterCoins"),chapterXp:te("#chapterXp"),chapterUnlock:te("#chapterUnlock"),musicValue:te("#musicValue"),effectsValue:te("#effectsValue"),marketChipCustomer:te("#marketChipCustomer"),marketChipDemand:te("#marketChipDemand")},et={vault:new U(-11,0,-5),reservoir:new U(-11,0,2.6),filter:new U(-9,0,4.5),market:new U(11,0,-4.4),rack:new U(8,0,-5),workshop:new U(11,0,5),composter:new U(-7,0,6.9),coop:new U(2,0,6.9),rainTank:new U(-12,0,6.5),"tower-0":new U(-7,0,2.4),"tower-1":new U(-3,0,2.4),"tower-2":new U(1,0,2.4),"tower-3":new U(5,0,2.4),"bed-0":new U(-7,0,-3.2),"bed-1":new U(-3,0,-3.2),"bed-2":new U(1,0,-3.2),"bed-3":new U(5,0,-3.2)};let h=Rr(tu());const hi=Dy({balance:Te.coins,reducedMotion:()=>h.settings.reducedMotion,mobile:vt});let Kh=null;const pa={x:0,z:0};let ma=!1;const ga=ey(Bn,De,Af);let Rt=!1,Nt=null,ai=null,On=null,li=null;const zs=[],wc=new Map,Tr=Qx;let Fd=performance.now(),Bd=0,Zh=performance.now(),oa=0,Us=null;const Li=Iy({urls:zy,settings:()=>h.settings,canPlay:()=>!Rt&&Mn.hidden&&zi.hidden&&an.hidden&&xs.hidden,onSystemMute:()=>{h.settings.soundEnabled=!1,bs(),Ye("system_mute")}});let Yn=1,Jo=new U(0,0,0),no=[],Fn=1,_n=1,wl=null,Qh="",va=_o?"software-test":_s?"mobile":"desktop",Sc=performance.now(),Ec=0;const fn={left:!1,right:!1,up:!1,down:!1},Hs=[],yt=new Bx({antialias:!_s&&!_o,powerPreference:"high-performance"});yt.setPixelRatio(Math.min(window.devicePixelRatio||1,_o?1:_s?1.25:1.55));yt.outputColorSpace=Qt;yt.toneMapping=Gd;yt.toneMappingExposure=1.08;yt.shadowMap.enabled=!_s&&!_o;yt.shadowMap.type=Hd;en.appendChild(yt.domElement);const _a=document.createElement("div");_a.className="world-labels";en.appendChild(_a);const xa=document.createElement("canvas").getContext("2d"),fi=new Bl;fi.background=new ct(10475727);fi.fog=new Fl(10475727,28,58);const Tt=new gn(35,1,.1,80),Tc=new Mh,Ac=new he,Zt=new Ge,_t=new Ge,Ar=new Ge;fi.add(Zt,_t,Ar);const Qr=Wx();Zt.add(Qr.root);function Gt(n,e={}){return new Sr({color:n,...e})}const ie={grass:Gt(16777215),grassDark:Gt(5405027),path:Gt(13223602),soil:Gt(8014385),wood:Gt(10123101),woodDark:Gt(5720899),white:Gt(15922411),shell:Gt(14411490),dark:Gt(1055253),lime:Gt(13168479),amber:Gt(16762954),water:new ki({color:6542566,roughness:.18,metalness:.02,transparent:!0,opacity:.78}),coral:Gt(15823190),metal:Gt(11453113),ink:new $t({color:729368,side:pn})},Vy=new ql(15398143,4742736,.95);fi.add(Vy);const ei=new Aa(16772559,1.45);ei.position.set(-8,16,9);ei.castShadow=yt.shadowMap.enabled;ei.shadow.mapSize.set(1024,1024);ei.shadow.camera.left=-14;ei.shadow.camera.right=14;ei.shadow.camera.top=11;ei.shadow.camera.bottom=-11;ei.shadow.bias=-7e-4;fi.add(ei);const ef=new Aa(12049640,.35);ef.position.set(11,8,-8);fi.add(ef);function ti(n,e){return n.userData.interactiveId=e,n.traverse(t=>{t.userData.interactiveId=e}),n}function We(n,e,t,i,r=!0){const s=new fe(new Bt(...e),i);return s.position.set(...t),s.castShadow=r,s.receiveShadow=r,n.add(s),s}function Pr(n,e=.045){if(_s)return n;const t=[];return n.traverse(i=>{if(!i.isMesh||i.isInstancedMesh||i.userData.inkOutline||!i.geometry||/PlaneGeometry|CircleGeometry/.test(i.geometry.type))return;i.geometry.boundingSphere||i.geometry.computeBoundingSphere();const r=i.geometry.boundingSphere?.radius||0,s=Math.max(i.scale.x,i.scale.y,i.scale.z);if(r*s<.36)return;const o=Array.isArray(i.material)?i.material[0]:i.material;o!==ie.soil&&(o?.transparent&&o.opacity<.85||t.push(i))}),t.forEach(i=>{const r=new fe(i.geometry,ie.ink);r.userData.inkOutline=!0,r.scale.setScalar(1+Math.min(e,.022)),r.castShadow=!1,r.receiveShadow=!1,i.add(r)}),n}function Gy(n,e=256){const t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");n(i,e);const r=new ch(t);return r.colorSpace=Qt,r.wrapS=r.wrapT=aa,r}function Wy(){$y();const n=Gy((c,l)=>{c.fillStyle="#78a875",c.fillRect(0,0,l,l);for(let u=0;u<90;u+=1){c.fillStyle=u%2?"rgba(206,219,147,.08)":"rgba(44,86,69,.06)";const d=u*73%l,p=u*47%l;c.fillRect(d,p,12+u%17,3+u%5)}for(let u=0;u<900;u+=1){const d=u%3?"rgba(31,93,52,.18)":"rgba(211,231,149,.12)";c.fillStyle=d,c.fillRect(Math.random()*l,Math.random()*l,1,3+Math.random()*3)}});n.repeat.set(7,5),ie.grass.map=n;const e=new fe(new Bt(30,.65,19.5),ie.grassDark);e.position.y=-.38,e.receiveShadow=!0,Zt.add(e);const t=new fe(new Un(29.5,19),ie.grass);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,Zt.add(t);const i=new fe(new Un(27.8,1.45),ie.path);i.rotation.x=-Math.PI/2,i.position.set(0,.012,-6.7),i.receiveShadow=!0,Zt.add(i);const r=new fe(new Un(1.25,12),ie.path);r.rotation.x=-Math.PI/2,r.position.set(-9.6,.014,-1),Zt.add(r);const s=[];for(let c=-14.5;c<=14.5;c+=1.5)s.push([c,.28,-9.4],[c,.28,9.4]);for(let c=-8.5;c<=8.5;c+=1.5)s.push([-14.6,.28,c],[14.6,.28,c]);const o=new br(new Bt(.14,.72,.14),ie.woodDark,s.length),a=new kt;s.forEach((c,l)=>{a.position.set(...c),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}),o.castShadow=!0,Zt.add(o),[-14.6,14.6].forEach(c=>We(Zt,[.07,.12,19],[c,.37,0],ie.wood)),[-9.4,9.4].forEach(c=>We(Zt,[29.3,.12,.07],[0,.37,c],ie.wood));for(let c=-13.7;c<=13.7;c+=1.5){const l=new fe(new Hl(.48+Math.random()*.1,1),ie.grassDark);l.position.set(c,.3,8.85+Math.sin(c)*.08),l.castShadow=!0,Zt.add(l)}for(let c=0;c<10;c+=1){const l=new fe(new xn(.07,8,6),c%2?ie.amber:ie.coral);l.position.set(-12.7+c*2.55,.13,8.1+Math.sin(c)*.25),l.castShadow=!0,Zt.add(l)}qy()}function $y(){const n=new Un(90,90,40,40);n.rotateX(-Math.PI/2);const e=n.attributes.position;for(let d=0;d<e.count;d+=1){const p=e.getX(d),f=e.getZ(d),g=Math.max(Math.abs(p)-27,Math.abs(f)-18,0),v=It.smoothstep(Math.abs(f+12.2),1.8,5)*Math.min(1,g/14)*(1.3+Math.sin(p*.15)*Math.cos(f*.12)*1.2);e.setY(d,-.16+v)}n.computeVertexNormals();const t=new fe(n,Gt(8562557));t.name="surrounding meadow",t.receiveShadow=!0,Zt.add(t);const i=new fe(new Un(80,2.8),ie.path);i.rotation.x=-Math.PI/2,i.position.set(0,-.1,-12.2),i.receiveShadow=!0,Zt.add(i);const r=new fe(new Un(1.5,7),ie.path);r.rotation.x=-Math.PI/2,r.position.set(16.2,-.09,-7.5),Zt.add(r);const s=[[-15,-4],[-17,2],[-16,8],[-13,-12],[-8,-14],[-2,-15],[4,-14],[10,-13],[16,-11],[18,-5],[18,2],[17,8],[22,-16],[-22,-18]],o=new br(new pt(.12,.19,2.3,7),ie.woodDark,s.length),a=new br(new ho(1,1),Gt(6590831),s.length*3),c=new kt;s.forEach(([d,p],f)=>{const g=.85+f%4*.14;d*=1.2,p*=1.2,c.position.set(d,1,p),c.scale.set(1,1,1),c.updateMatrix(),o.setMatrixAt(f,c.matrix);for(let _=0;_<3;_+=1)c.position.set(d+(_-1)*.75,2.6+(_===1?.7:0),p+(_===1?-.3:.2)),c.scale.set(1.15*g,g,1.05*g),c.updateMatrix(),a.setMatrixAt(f*3+_,c.matrix),a.setColorAt(f*3+_,new ct([12702093,10208683,11323019][(f+_)%3]))}),o.castShadow=a.castShadow=!0,Zt.add(o,a);const l=new Ge;l.name="neighboring farm shed",l.position.set(-19,-.05,-18),We(l,[2.6,1.8,2.3],[0,.9,0],Gt(14014670));const u=new fe(new mi(2.05,1.1,4),Gt(11428701));u.rotation.y=Math.PI/4,u.position.y=2.28,l.add(u),We(l,[.65,1.23,.06],[-.42,.62,1.18],ie.woodDark),We(l,[.62,.58,.07],[.61,1.1,1.18],ie.shell),We(l,[.48,.44,.08],[.61,1.1,1.2],Gt(6790308)),Zt.add(l)}function qy(){const n=new Ge;n.position.set(11,0,12);const e=new ki({color:12379356,transparent:!0,opacity:.42,roughness:.15,side:vn});We(n,[4.6,.12,2.5],[0,.05,0],ie.path),We(n,[4.4,2.2,.08],[0,1.1,-1.12],e,!1);for(let r=-2;r<=2;r+=1)We(n,[.05,2.4,2.3],[r*1.05,1.15,0],ie.metal);const t=We(n,[2.7,.08,2.35],[-1.05,2.35,0],e,!1);t.rotation.z=-.38;const i=We(n,[2.7,.08,2.35],[1.05,2.35,0],e,!1);i.rotation.z=.38,Zt.add(n)}function _i(n,e="#f4bd4d"){xa.font="700 15px system-ui";const t=Math.ceil(xa.measureText(n).width)+24,i=new kt,r=document.createElement("button");r.type="button",r.className="world-label",r.textContent=n,r.hidden=!0,r.style.width=`${t}px`,r.style.borderColor=e;for(const s of["pointerdown","pointerup"])r.addEventListener(s,o=>o.stopPropagation());return r.addEventListener("click",s=>{s.stopPropagation(),!(Rt||!Mn.hidden||!an.hidden)&&(Lr(),i.userData.interactiveId&&Jt(i.userData.interactiveId,vt()))}),i.labelElement=r,i.userData.worldLabel={text:n,width:t,height:30,fontSize:15},i}function tf(n,e,t){const i=new Ge;for(const s of[-.65,.65])for(const o of[-.5,.5])We(i,[.09,.48,.09],[s,.24,o],ie.woodDark),We(i,[.12,.07,.12],[s,.45,o],ie.amber);for(const s of[-.5,.5])We(i,[1.3,.025,.025],[0,.28,s],ie.straw||ie.wood);for(const s of[-.65,.65])We(i,[.025,.025,1],[s,.28,0],ie.wood);We(i,[.12,.85,.1],[0,.425,0],ie.woodDark),We(i,[.72,.32,.07],[0,.75,0],ie.wood);const r=_i(e,"#f4bd4d");return r.position.y=1.2,i.add(r),i.position.copy(t),Wt(i),Pr(i,.04),ti(i,n)}function Xy(n){const e=et[n];if(!e||Nt===n)return null;const t=new Ge;t.userData.guideMarker=!0,t.userData.baseY=e.y;const i=new fe(new Ni(1.08,36),new $t({color:16039245,transparent:!0,opacity:.16,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.012;const r=new fe(new ci(.92,.045,8,44),new ki({color:16039245,emissive:5057797,emissiveIntensity:.26,roughness:.38,transparent:!0,opacity:.92,depthWrite:!1}));r.rotation.x=Math.PI/2;const s=new fe(new mi(.18,.36,3),ie.amber);return s.rotation.z=Math.PI,s.position.y=.34,t.add(i,r,s),t.position.copy(e),t}function Yy(n,e){const t=new Ge,i=new fe(new Ni(.98,24),new $t({color:1194533,transparent:!0,opacity:.27,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.018,t.add(i);const r=new fe(new pt(.75,.85,.22,24),ie.shell);r.position.y=.14,t.add(r);const s=new fe(new pt(.13,.16,2.5,12),ie.metal);s.position.set(0,1.46,-.15),t.add(s);const o=new fe(new pt(.065,.065,2.4,8),ie.water);o.position.set(0,1.42,-.42),t.add(o);const a=[];for(let u=0;u<4;u++){const d=new Ge;d.name=`stacked planter ${u+1}`;const p=u%2?.16:-.16,f=.52+u*.61,g=.29-u*.18;d.position.set(p,f,g);const _=e.repaired?ie.white:ie.metal,v=new fe(new pt(.64,.4,.35,24,1,!0),_);d.add(v);const m=new fe(new pt(.4,.4,.05,20),ie.shell);m.position.y=-.17,d.add(m);const S=new fe(new ci(.64,.055,7,24),ie.shell);S.rotation.x=Math.PI/2,S.position.y=.18,d.add(S);const y=new fe(new Ni(.585,24),ie.soil);y.rotation.x=-Math.PI/2,y.position.y=.15,d.add(y),Wt(d),t.add(d);for(let x=0;x<3;x++){const P=x*Math.PI*2/3+.35;a.push({x:p+Math.cos(P)*.27,y:f+.19,z:g+Math.sin(P)*.27,turn:u*1.4+x})}}for(const u of t.children.filter(d=>d.name.startsWith("stacked planter"))){u.updateMatrix();for(const d of[...u.children]){const p=new fe(d.geometry.clone().applyMatrix4(u.matrix),d.material);t.add(p),u.remove(d),d.geometry.dispose()}}Wt(t);const c=e.queue.filter(u=>u.readyAt!==null&&u.readyAt<=ze()),l=_i(e.repaired?c.length?`${c.length} layer${c.length>1?"s":""} ready`:`Tower ${n+1}`:"REPAIR PLANTER",c.length?"#b9df63":"#69cbd3");l.position.set(0,3.95,0),t.add(l);for(const u of e.queue){const d=u.readyAt?It.clamp((ze()-u.startedAt)/Math.max(1,u.readyAt-u.startedAt),0,1):0,p=nf(u.crop,d,a.slice(u.layer*3,u.layer*3+3),u.crop==="tomato"?.85:1.2);p.userData.growthTiming={startedAt:u.startedAt,readyAt:u.readyAt,size:u.crop==="tomato"?.85:1.2},p.userData.towerIndex=n,p.userData.jobId=u.id,p.userData.layer=u.layer,t.add(p)}return t.position.copy(et[`tower-${n}`]),Pr(t,.036),ti(t,`tower-${n}`)}function jy(n,e=.28,t=.11,i=!1){const r=new ls;r.moveTo(0,0),i?[[.15,.65],[.28,1],[.43,.7],[.58,.96],[.75,.6],[1,0],[.75,-.6],[.58,-.96],[.43,-.7],[.28,-1],[.15,-.65]].forEach(([a,c])=>r.lineTo(a*e,c*t)):(r.bezierCurveTo(e*.2,t,e*.72,t,e,0),r.bezierCurveTo(e*.72,-t,e*.2,-t,0,0));const s=new Zs(r,{depth:.018,bevelEnabled:!1,curveSegments:5});s.rotateX(-Math.PI/2);const o=new fe(s,n);return o.castShadow=!0,o}function Ms(n,e=1){const t=De[n],i=new Ge,r=t.family==="fruit",s=Gt(r?4685648:n==="lettuce"?6399295:t.color,{side:vn}),o=Gt(r?8894309:t.accent,{side:vn}),a=["lettuce","strawberry"].includes(n),c=n==="tomato"?.8:a?.16:.52,l=new fe(new pt(.025,.05,c,7),ie.grassDark);l.position.y=c/2,i.add(l);const u=n==="lettuce"||n==="kale"?12:10;for(let p=0;p<u;p+=1){const f=p/u*Math.PI*2,g=jy(p%3?s:o,n==="lettuce"?.46:n==="tomato"?.34:.36,n==="lettuce"?.25:n==="basil"?.15:.14,["kale","tomato"].includes(n));g.rotation.set(0,-f,n==="kale"?.7:.18+p%3*.09),g.position.set(0,a?.08+p%3*.045:.16+p%3*.14,0),i.add(g)}if(n==="tomato"){const p=new fe(new pt(.018,.025,1.05,6),ie.wood);p.position.set(-.1,.52,-.05),i.add(p);for(let f=0;f<3;f+=1){const g=new fe(new xn(.085,12,8),ie.coral);g.position.set(f%2?-.2:.2,.3+f*.16,.15),g.visible=e>=.72,g.userData.ripeningFruit=!0,i.add(g)}}if(n==="strawberry")for(let p=0;p<3;p+=1){const f=new fe(new mi(.075,.14,10),ie.coral);f.rotation.z=Math.PI,f.position.set(Math.cos(p*2.1)*.21,.18,Math.sin(p*2.1)*.21),f.visible=e>=.72,f.userData.ripeningFruit=!0,i.add(f)}const d=e>=1?1:e>=.66?.78:e>=.33?.52:.28;return i.scale.setScalar(d),i.userData.crop=n,i.userData.campaignCrop=!0,i.userData.swayPhase=Jn.indexOf(n)*.8+Math.random()*.4,i.userData.growthStage=e>=1?3:e>=.66?2:e>=.33?1:0,i}function nf(n,e,t,i){const r=Ms(n,1),s=new Set(r.children.filter(c=>c.geometry?.type==="ExtrudeGeometry").map(c=>c.material)),o=r.children.filter(c=>c.userData.ripeningFruit);if(o.forEach(c=>r.remove(c)),Wt(r),o.length){const c=new Ge;o.forEach(l=>c.add(l)),Wt(c),[...c.children].forEach(l=>{l.userData.ripeningFruit=!0,l.userData.fruitPerInstance=o.length,r.add(l)})}const a=new Ge;return a.userData.crop=n,a.userData.plantingPlacements=t,a.userData.foliageMaterials=[],r.children.forEach(c=>{if(!c.isMesh)return;c.updateMatrix();const l=c.material.clone(),u=new br(c.geometry.clone(),l,t.length);u.castShadow=!0,u.receiveShadow=!0,u.userData.plantPartMatrix=c.matrix.clone(),u.userData.ripeningFruit=!!c.userData.ripeningFruit,u.userData.fruitPerInstance=c.userData.fruitPerInstance||1,s.has(c.material)&&a.userData.foliageMaterials.push(l),a.add(u)}),Di(r),rf(a,e,i),a}function rf(n,e,t){const i=e>=1?3:e>=.66?2:e>=.33?1:0,r=[.28,.52,.78,1][i]*t,s=e>=.72;if(n.userData.growthScale===r&&n.userData.ripe===s)return;n.userData.growthStage=i,n.userData.growthScale=r,n.userData.ripe=s;const o=new kt;n.children.forEach(a=>{a.isInstancedMesh&&(n.userData.plantingPlacements.forEach((c,l)=>{o.position.set(c.x,c.y,c.z),o.rotation.set(0,c.turn||0,0),o.scale.setScalar(r),o.updateMatrix(),a.setMatrixAt(l,o.matrix.clone().multiply(a.userData.plantPartMatrix))}),a.visible=!a.userData.ripeningFruit||s,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere())})}function Jy(){const n=ze();_t.traverse(e=>{const t=e.userData.growthTiming;if(!t)return;if(e.userData.towerIndex!==void 0){const s=h.towers[e.userData.towerIndex].queue.find(o=>o.id===e.userData.jobId);s&&(t.readyAt=s.readyAt,t.startedAt=s.startedAt)}const i=It.clamp((n-t.startedAt)/Math.max(1,t.readyAt-t.startedAt),0,1);if(e.userData.plantingPlacements){rf(e,i,t.size);return}const r=i>=1?3:i>=.66?2:i>=.33?1:0;e.userData.growthStage=r,e.scale.setScalar([.28,.52,.78,1][r]*t.size),e.children.forEach(s=>{s.userData.ripeningFruit&&(s.visible=i>=.72)})}),Fh(_t)}function Ky(n,e){const t=new Ge,i=new fe(new Un(2.7,1.6),new $t({color:1587492,transparent:!0,opacity:.22,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.015,t.add(i),We(t,[2.45,.38,1.35],[0,.2,0],ie.wood),We(t,[2.08,.23,1.02],[0,.42,0],ie.soil);for(let o=-1;o<=1;o+=1)We(t,[1.85,.035,.045],[0,.56,o*.27],ie.woodDark,!1);if(e.capacity>=3)for(const o of[-1.15,1.15])for(const a of[-.6,.6])We(t,[.1,.7,.1],[o,.35,a],ie.woodDark);e.capacity>=4&&We(t,[2.4,.12,.12],[0,.7,-.6],ie.wood);const r=e.capacity<=2?[[-.53,0],[.53,0]]:[[-.53,-.26],[.53,-.26],[-.53,.26],[.53,.26]];e.plants.forEach((o,a)=>{const c=It.clamp((Date.now()-o.plantedAt)/Math.max(1,o.readyAt-o.plantedAt),0,1),l=e.capacity<=2?1.08:.94,u=e.capacity<=2?[{x:-.17,y:0,z:-.2},{x:.17,y:0,z:.2,turn:1.1},{x:.15,y:0,z:-.13,turn:2.4}]:[{x:-.18,y:0,z:0},{x:.18,y:0,z:0,turn:1.4}],d=nf(o.crop,c,u,l);d.userData.growthTiming={startedAt:o.plantedAt,readyAt:o.readyAt,size:l},d.position.set(r[a][0],.54,r[a][1]),t.add(d)});const s=_i(`Bed ${n+1}: ${e.plants.length}/${e.capacity}`,"#b9df63");return s.position.set(0,e.plants.length?1.95:1.05,0),s.visible=Nt===`bed-${n}`,t.add(s),t.position.copy(et[`bed-${n}`]),Pr(t,.034),ti(t,`bed-${n}`)}function Zy(){const n=new Ge;if(We(n,[2.25,1.15,1.45],[0,.58,0],ie.white),We(n,[2.38,.18,1.58],[0,1.22,0],ie.lime),h.seedShop.expanded){We(n,[.72,1.05,1.3],[-1.52,.53,0],ie.wood);for(const a of[.25,.55,.85])We(n,[.62,.23,.06],[-1.52,a,.68],ie.lime),We(n,[.16,.04,.06],[-1.52,a,.73],ie.metal)}const e=new fe(new pt(.22,.28,.68,14),ie.metal);e.rotation.z=Math.PI/2,e.position.set(1.35,.78,0),n.add(e);const t=Yl({skin:"#c99069",hair:"#e5d8b7",color:"#b9547f",accessory:"glasses"});t.name="Bram the seed merchant",t.updateMatrixWorld(!0);const i=[];t.traverse(a=>{a.isMesh&&i.push(a)}),i.forEach(a=>t.attach(a)),t.userData.rig=null;const r=new fe(new pt(.48,.48,.06,20),ie.lime);r.position.y=2,t.add(r);const s=new fe(new mi(.27,.48,16),ie.lime);s.position.set(.06,2.22,0),s.rotation.z=-.2,t.add(s),Wt(t),t.position.set(2.2,0,.1),t.rotation.y=.35,n.add(t),We(n,[.9,.55,.62],[1.9,.38,.85],ie.wood);for(const a of[1.55,2.25]){const c=new fe(new pt(.19,.19,.08,12),ie.metal);c.rotation.z=Math.PI/2,c.position.set(a,.2,.85),n.add(c)}for(let a=0;a<3;a++)We(n,[.2,.28,.1],[1.62+a*.26,.79,.85],a%2?ie.coral:ie.lime);const o=_i("SEED VAULT","#b9df63");return o.position.set(0,1.72,0),n.add(o),n.position.copy(et.vault),Pr(n,.038),ti(n,"vault")}function Qy(){const n=fy(h.hydro.water),e=_i("RESERVOIR","#69cbd3");return e.name="reservoir label",e.position.set(0,1.95,0),n.add(e),n.position.copy(et.reservoir),ti(n,"reservoir")}function eM(){const n=_t.getObjectByName("water reservoir");Bh(n,h.hydro.water),n?.userData.reservoir&&(n.userData.reservoir.mixingStream.visible=Kn(h));const e=n?.getObjectByName("reservoir label");if(!e)return;const t=n.userData.reservoir.status,i=t==="empty"?"WATER EMPTY":t==="low"?"WATER LOW":"RESERVOIR";if(e.userData.worldLabel.text===i)return;xa.font="700 15px system-ui";const r=Math.ceil(xa.measureText(i).width)+24;Object.assign(e.userData.worldLabel,{text:i,width:r}),e.labelElement.textContent=i,e.labelElement.style.width=`${r}px`,e.labelElement.style.borderColor=t==="ready"?"#69cbd3":"#f4bd4d"}function tM(){const n=new Ge;n.name="reservoir tower feedline";const e=new ki({color:4352882,roughness:.7}),t=[],i=Math.max(0,...h.towers.map((u,d)=>u.built?d:0));function r(u,d){const p=new U(...u),f=new U(...d),g=new fe(new pt(.075,.075,p.distanceTo(f),8),e);g.position.copy(p).add(f).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new U(0,1,0),f.clone().sub(p).normalize()),n.add(g),t.push({start:p,end:f});const _=new fe(new xn(.1,8,6),ie.metal);_.position.copy(f),n.add(_)}r([-10.65,.24,1.74],[-10.3,.24,2.6]),r([-10.3,.24,2.6],[-10.3,.24,4.5]),r([-10.3,.24,4.5],[et[`tower-${i}`].x,.24,4.5]),h.towers.forEach((u,d)=>{if(!u.built)return;const p=et[`tower-${d}`];r([p.x,.24,4.5],[p.x,.24,p.z+.85]),r([p.x,.24,p.z+.85],[p.x,2.8,p.z+.85]),r([p.x,2.8,p.z+.85],[p.x,2.8,p.z])}),Wt(n);const s=new Ge;s.position.copy(et.filter);const o=new fe(new pt(.26,.26,.75,16),ie.white);o.rotation.z=Math.PI/2,o.position.y=.28,s.add(o);const a=new fe(new ci(.22,.045,6,16),h.hydro.lineClogged?ie.coral:ie.water);a.rotation.x=Math.PI/2,a.position.y=.65,s.add(a),We(s,[.055,.28,.055],[0,.48,0],ie.metal);const c=_i(h.hydro.lineClogged?"FILTER CLOGGED":"FEED FILTER",h.hydro.lineClogged?"#f4bd4d":"#69cbd3");c.position.y=1.3,s.add(c),n.add(ti(s,"filter"));const l=new br(new xn(.085,6,5),new $t({color:h.hydro.lineClogged?16039245:10347999}),t.length);return l.userData.flowSegments=t,n.add(l),n}function ka(){const n=[];return h.towers.forEach((e,t)=>{e.built&&(!e.repaired||Er(e,ze()))&&n.push(`tower-${t}`)}),h.beds.forEach((e,t)=>{e.built&&e.plants.some(i=>i.readyAt<=ze())&&n.push(`bed-${t}`)}),h.hydro.lineClogged&&n.push("filter"),(h.hydro.water<=nu||!h.hydro.batchMixed)&&n.push("reservoir"),h.farm.owned.includes("coop")&&h.farm.eggsReady&&n.push("coop"),h.farm.owned.includes("composter")&&h.farm.compost&&n.push("composter"),Bi(h)?.available&&n.push("market"),n}function nM(){const n=ka();if(!n.length)return new Ge;const e=new Ea(.92,1.02,24);e.rotateX(-Math.PI/2);const t=new $t({transparent:!0,opacity:.65,depthWrite:!1}),i=new br(e,t,n.length);i.userData.attentionMarkers=!0;const r=new kt;return n.forEach((s,o)=>{r.position.copy(et[s]),r.position.y=.035,r.scale.setScalar(s==="filter"?.6:1),r.updateMatrix(),i.setMatrixAt(o,r.matrix),i.setColorAt(o,new ct(["filter","reservoir"].includes(s)?16039245:12181347))}),i}function iM(){if(!h.market.built)return tf("market","PRODUCE TABLE",et.market);const n=new Ge,e=vs(h);n.name=`market construction stage ${e}`,n.userData.constructionStage=e;const t=e<3?1.8:3.1;We(n,[t,.15,1.15],[0,.7,.1],ie.wood);for(const r of[-t/2+.15,t/2-.15])for(const s of[-.35,.55])We(n,[.12,.7,.12],[r,.35,s],ie.woodDark);if(e>=2&&(We(n,[t+.25,.12,1.4],[0,2.15,-.15],e===4?ie.coral:ie.lime),[-t/2,t/2].forEach(r=>We(n,[.11,2.1,.11],[r,1.1,-.55],ie.woodDark))),e>=3&&(We(n,[3.1,.5,.12],[0,.35,.65],ie.wood),We(n,[3,.65,.12],[0,1.3,-.6],ie.white),We(n,[2.8,.09,.4],[0,1.35,-.4],ie.woodDark)),e===4){for(const r of[-1.25,-.42,.42,1.25])We(n,[.28,.012,1.41],[r,2.216,-.15],ie.white),We(n,[.28,.15,.035],[r,2.1,.57],ie.white);for(const r of[-1.85,1.85]){We(n,[.5,.45,.65],[r,.23,.1],ie.woodDark);const s=Ms("tomato",1);s.scale.setScalar(.4),s.position.set(r,.48,.1),n.add(s)}}const i=_i(e===1?"PIP'S PRODUCE TABLE":"PIP'S VEG STAND","#f4bd4d");return i.position.set(0,e===1?1.55:2.58,0),n.add(i),Jn.slice(0,e).forEach((r,s)=>{const o=(s-(e-1)/2)*.6,a=We(n,[.48,.28,.56],[o,.87,.2],ie.woodDark);a.rotation.y=.07*s;const c=new fe(new xn(.11,10,7),new ki({color:De[r].color,roughness:.7}));c.position.set(o,1.04,.2),n.add(c)}),n.position.copy(et.market),Pr(n,.034),ti(n,"market")}function rM(){const n=new Ge;We(n,[1.55,.18,.75],[0,.85,0],ie.wood),[-.62,.62].forEach(i=>We(n,[.12,1.4,.12],[i,.7,0],ie.woodDark));const e=Object.values(h.rack).reduce((i,r)=>i+r,0);for(let i=0;i<Math.min(e,6);i+=1){const r=Jn.find(o=>h.rack[o]>i/2)||"lettuce",s=Ms(r,1);s.scale.setScalar(.32),s.position.set(-.5+i%3*.5,1,i>2?.15:-.15),n.add(s)}const t=_i("HARVEST RACK","#b9df63");return t.position.set(0,1.65,0),t.visible=Nt==="rack"||e>0,n.add(t),n.position.copy(et.rack),Pr(n,.034),ti(n,"rack")}function sM(){const n=new Ge,e=Da(h);We(n,[2.5,.18,1.4],[0,.8,0],ie.wood);for(const i of[-1,1])for(const r of[-.5,.5])We(n,[.15,.8,.15],[i,.4,r],ie.woodDark);if(e>=2){We(n,[2.5,1.7,.13],[0,.86,-.8],ie.wood);for(const i of[-1.2,1.2])We(n,[.14,2.1,.14],[i,1.05,.65],ie.woodDark)}if(e>=3){for(const r of[-1.2,1.2])We(n,[.13,1.7,1.9],[r,.86,0],ie.wood);const i=new fe(new mi(1.8,.75,4),ie.amber);i.rotation.y=Math.PI/4,i.position.y=2.08,i.castShadow=!0,n.add(i)}else e>=2&&We(n,[2.7,.14,2],[0,2.1,0],ie.amber);We(n,[.72,.35,.5],[0,1.06,0],ie.water);const t=_i("FARM SHOP","#f4bd4d");return t.position.set(0,e<2?1.65:2.72,0),n.add(t),n.position.copy(et.workshop),Pr(n,.034),ti(n,"workshop")}function sf(n,e){const t=Math.max(0,Tr.findIndex(o=>o.name===n.customer)),i=Yl(Tr[t],t);i.position.copy(ya(e,n));const r=new fe(new Ni(.4,20),new $t({color:1586468,transparent:!0,opacity:.2,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.025,i.add(r);const s=new fe(new Ea(.43,.49,24),new $t({color:16039245,side:vn}));return s.rotation.x=-Math.PI/2,s.position.y=.035,s.visible=h.selectedOrderId===n.id,i.add(s),i.userData.customerIndex=e,i.userData.customerProfile=t,i.userData.orderId=n.id,i.userData.arrivedAt=n.createdAt,i.userData.destination=i.position.clone(),ti(i,"market")}function ya(n,e=h.orders[n]){return new U(et.market.x-1+(e?.slot??n)*1.3,0,et.market.z+2.8)}function oM(n){if(wc.has(n.name))return wc.get(n.name);const e=new Bl;e.background=new ct(n.color).multiplyScalar(.45),e.add(new ql(16775398,5469804,2.6));const t=new Aa(16773847,2);t.position.set(-2,4,4),e.add(t);const i=Yl(n,Tr.indexOf(n));e.add(i);const r=new gn(32,1,.1,12);r.position.set(.45,1.9,2.8),r.lookAt(0,1.48,0);const s=128,o=new Ui(s,s);o.texture.colorSpace=Qt;const a=yt.getRenderTarget();yt.setRenderTarget(o),yt.render(e,r);const c=new Uint8Array(s*s*4);yt.readRenderTargetPixels(o,0,0,s,s,c),yt.setRenderTarget(a);const l=document.createElement("canvas");l.width=l.height=s;const u=l.getContext("2d"),d=u.createImageData(s,s);for(let f=0;f<s;f++)d.data.set(c.subarray(f*s*4,(f+1)*s*4),(s-f-1)*s*4);u.putImageData(d,0,0);const p=l.toDataURL("image/png");return wc.set(n.name,p),o.dispose(),Di(i),p}function iu(n,e,t=!0){const i=sf(n,e);i.traverse(s=>{delete s.userData.interactiveId}),Ar.add(i);const r=t?Ms(n.crop,1):new Ge;r.scale.setScalar(.32),Ar.add(r),zs.push({customer:i,produce:r,purchased:t,age:t?0:.75,start:new U(Se.x,1.1,Se.z),end:i.position.clone().add(new U(0,1,.3))})}function of(){const n=Ch(h.proPip);return n.position.set(-5.35,0,-1.1),n}let St=of();const Se={x:St.position.x,z:St.position.z,target:null,speed:h.proPip?6.25:5.25,direction:"south",action:"idle",actionTime:0,pendingFacing:0,gaitPhase:0};fi.add(St);function aM(){if(h.cosmetics.active.includes("sunny-planters"))for(let n=0;n<5;n+=1){const e=new fe(new pt(.2,.25,.3,12),ie.coral);e.position.set(-8.6+n*.55,.15,-5.35);const t=new fe(new xn(.11,10,7),ie.amber);t.position.set(e.position.x,.48,e.position.z),_t.add(e,t)}if(h.cosmetics.active.includes("blue-path"))for(let n=0;n<3;n+=1){const e=new Ge,t=new fe(new pt(.28,.21,.38,12),ie.water);t.position.y=.2;const i=Ms("basil",1);i.scale.setScalar(.35),i.position.y=.4,e.add(t,i),e.position.set(-1.5+n*.8,0,-5.8),_t.add(e)}if(h.cosmetics.active.includes("festival-bunting")&&h.market.built)for(let n=0;n<9;n+=1){const e=new fe(new mi(.12,.28,3),n%2?ie.amber:ie.coral);e.rotation.z=Math.PI,e.position.set(et.market.x-1.35+n*.35,2.32+Math.sin(n*.8)*.1,et.market.z),_t.add(e)}}function xo(){if(_a.replaceChildren(),Di(_t),_t.clear(),_t.add(Zy(),Qy(),iM(),sM()),Ht(h).festival){const e=new Ge;e.name="harvest festival garden display",e.position.set(-5,0,11.2);for(const t of[-1.3,1.3]){We(e,[.18,2.7,.18],[t,1.25,0],ie.wood),We(e,[.7,.42,.7],[t,.12,0],ie.white);for(let i=0;i<5;i++){const r=new fe(new ho(.22,1),ie.lime);r.position.set(t+Math.sin(i*2)*.25,.4+i*.1,Math.cos(i*2)*.22),e.add(r)}}We(e,[3,.2,.3],[0,2.55,0],ie.wood);for(let t=0;t<7;t++){const i=new fe(new mi(.16,.36,3),t%2?ie.coral:ie.amber);i.rotation.z=Math.PI,i.position.set(-1.1+t*.37,2.25,0),e.add(i)}Wt(e),_t.add(e)}h.farm.owned.forEach(e=>{const t=dy(e,h.farm);t.position.copy(et[e]);{const i=_i(e==="rainTank"?"RAIN STORAGE":e==="coop"?h.farm.eggsReady?"EGGS READY":"CHICKEN COOP":h.farm.compost?"COMPOST READY":"COMPOSTER","#b9df63");i.position.y=2,t.add(i),ti(t,e)}_t.add(t)}),_t.add(rM()),_t.add(tM(),nM()),h.towers.forEach((e,t)=>{const i=e.built?Yy(t,e):tf(`tower-${t}`,`BUILD T${t+1}`,et[`tower-${t}`]);e.built&&cM(t)&&lM(i,.38),_t.add(i)}),h.beds.forEach((e,t)=>{e.built&&_t.add(Ky(t,e))}),h.market.built&&h.orders.forEach((e,t)=>{e.status==="waiting"&&_t.add(sf(e,t))}),hy(_t);const n=Xy(pi());n&&_t.add(n),aM(),no=[],_t.traverse(e=>{e.userData.worldLabel&&(no.push(e),_a.appendChild(e.labelElement))}),uM(),Qh=af()}function cM(n){if(!vt())return!1;const e=et[`tower-${n}`],t=e.x-Se.x,i=e.z-Se.z,r=Math.hypot(7.7,14.3),s=(t*7.7+i*14.3)/r,o=Math.abs(t*14.3-i*7.7)/r;return Math.hypot(t,i)<3.4&&s>0&&o<1.1}function lM(n,e){n.traverse(t=>{if(t.userData.worldLabel)return;const i=r=>{const s=r.clone();return s.transparent=!0,s.opacity=Math.min(r.opacity??1,e),s.depthWrite=!1,s};Array.isArray(t.material)?t.material=t.material.map(i):t.material&&(t.material=i(t.material))})}function Di(n){const e=new Set(Object.values(ie)),t=new Set,i=new Set,r=new Set;n.traverse(s=>{s.geometry&&!t.has(s.geometry)&&(t.add(s.geometry),s.geometry.dispose()),(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{!a||e.has(a)||r.has(a)||(r.add(a),a.map&&!i.has(a.map)&&(i.add(a.map),a.map.dispose()),a.dispose())})})}function af(){const n=ze();return JSON.stringify({towers:h.towers.map(e=>[e.built,e.repaired,e.queue.map(t=>[t.id,t.layer,t.crop,t.readyAt<=n])]),beds:h.beds.map(e=>[e.built,e.capacity,e.plants.length,e.plants.filter(t=>t.readyAt<=n).length]),market:[h.market.built,vs(h),h.orders.map(e=>`${e.id}:${e.status}`)],rack:h.rack,lineClogged:h.hydro.lineClogged,farm:h.farm,festival:Ht(h).festival,attention:ka(),carry:h.carry,cosmetics:h.cosmetics.active,pro:h.proPip,selected:Nt,guide:pi()})}function uM(){const n=St.getObjectByName("campaign carry");if(n&&(Di(n),St.remove(n)),!h.carry)return;const e=new Ge;if(e.name="campaign carry",h.carry.kind==="starter"){const t=new fe(new pt(.13,.17,.22,12),ie.soil),i=Ms(h.carry.crop,.82);i.scale.multiplyScalar(.48),i.position.y=.12,e.add(t,i)}else{const t=new fe(new pt(.28,.22,.2,12),ie.wood);e.add(t),h.carry.items.slice(0,5).forEach((i,r)=>{const s=new fe(new xn(.095,10,7),new ki({color:De[i].color,roughness:.7}));s.position.set(-.15+r%3*.15,.15+Math.floor(r/3)*.1,0),e.add(s)})}e.position.set(0,.72,.58),e.scale.setScalar(.95),St.add(e)}function ze(){return Date.now()}function Ye(n="autosave"){let e=!1;try{h=Ay(h,window.localStorage,Date.now(),t=>{e=t})}catch{}te("#saveWarning").hidden=e,te("#saveStatus").textContent=e?"Progress saved in this browser":"Progress is only in memory. Retry saving or export before closing.",Zh=performance.now(),n!=="autosave"&&jn("campaign_save",{reason:n,chapter:h.chapter+1,task:Zn(h)?.id||"complete"})}function Be(n,e=3500){to.classList.add("is-active"),vt()&&(e=Math.min(e,3200)),to.textContent=n,oa=performance.now()+e}function ir(n){Li.effect(n)}function Lr(){Li.start()}function bs(){Li.update();const n=h.settings.soundEnabled!==!1,e=te("#soundButton");e.setAttribute("aria-label",n?"Mute sound":"Enable sound"),e.setAttribute("title",n?"Mute sound":"Enable sound"),e.setAttribute("aria-pressed",String(!n)),e.classList.toggle("is-muted",!n)}function Ot(n,e=n){Se.action=n,Se.actionTime=h.settings.reducedMotion?.18:.72,ir(e)}function cf(n){const e=new Ge,t=new fe(new Bt(.34,.46,.08),ie.white),i=new fe(new Ni(.1,16),new ki({color:De[n].color,roughness:.65}));i.position.z=.046,e.add(t,i),e.position.copy(et.vault).add(new U(2.5,1.1,.35)),Ar.add(e),Hs.push({kind:"packet",mesh:e,start:e.position.clone(),end:et.vault.clone().add(new U(1.25,.95,0)),age:0,duration:h.settings.reducedMotion?.18:.72})}function Hi(n,e=16039245){const t=h.settings.reducedMotion?3:10;for(let i=0;i<t;i+=1){const r=new fe(new xn(.035,6,5),new $t({color:e}));r.position.copy(n).add(new U(0,.45,0)),Ar.add(r),Hs.push({kind:"particle",mesh:r,velocity:new U((Math.random()-.5)*1.5,.7+Math.random(),(Math.random()-.5)*1.5),age:0,duration:.65})}}function dM(n){for(let e=Hs.length-1;e>=0;e-=1){const t=Hs[e];t.age+=n;const i=t.age/t.duration;t.kind==="packet"?(t.mesh.position.lerpVectors(t.start,t.end,Math.min(1,i)),t.mesh.position.y+=Math.sin(Math.min(1,i)*Math.PI)*1.4,t.mesh.rotation.y+=n*5):(t.velocity.y-=n*2.2,t.mesh.position.addScaledVector(t.velocity,n),t.mesh.scale.setScalar(Math.max(.05,1-i))),i>=1&&(Ar.remove(t.mesh),Di(t.mesh),Hs.splice(e,1))}for(let e=zs.length-1;e>=0;e-=1){const t=zs[e];t.age+=n;const i=Math.min(1,t.age/.65);t.produce.position.lerpVectors(t.start,t.end,i),h.settings.reducedMotion||(t.produce.position.y+=Math.sin(i*Math.PI)*.6),t.customer.userData.rig.arms[0].rotation.x=t.purchased?-i*.8:0,t.age>.75&&!h.settings.reducedMotion&&(t.customer.position.x+=n*2.2,t.customer.rotation.y=Math.PI/2,t.produce.position.copy(t.customer.position).add(new U(.3,1,0)),t.customer.userData.rig.legs.forEach((r,s)=>{r.rotation.x=Math.sin(t.age*9+s*Math.PI)*.3})),t.age>=(h.settings.reducedMotion?.9:2.3)&&(Ar.remove(t.customer,t.produce),Di(t.customer),Di(t.produce),zs.splice(e,1))}}function hM(n){Qr.update(document.hidden?0:n,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});const e=performance.now()/1e3;ie.water.opacity=.76+Math.sin(e*1.8)*.08,ei.intensity=1.45+Math.sin(e*.09)*.06,_t.traverse(t=>{if(t.userData.attentionMarkers&&(t.material.opacity=h.settings.reducedMotion?.65:.55+Math.sin(e*2)*.15),t.userData.hens&&t.userData.hens.forEach((i,r)=>{const s=e*.7+r*2.5;i.position.copy(i.userData.home),h.settings.reducedMotion||(i.position.x+=Math.sin(s)*.22,i.position.z+=Math.cos(s)*.16,i.rotation.y=Math.cos(s)*.6,i.rotation.x=Math.max(0,Math.sin(s*2.3))*.22)}),t.userData.flowSegments){t.visible=Yh(h,ze());const i=new kt;t.userData.flowSegments.forEach(({start:r,end:s},o)=>{const a=h.hydro.lineClogged||h.settings.reducedMotion?.5:(e*.22+o*.31)%1;i.position.lerpVectors(r,s,a),i.updateMatrix(),t.setMatrixAt(o,i.matrix)}),t.instanceMatrix.needsUpdate=!0}if(t.userData.campaignCrop&&(t.rotation.z=Math.sin(e*1.3+t.userData.swayPhase)*.025),t.userData.customerIndex!==void 0){const i=e*1.7+t.userData.customerIndex,r=h.settings.reducedMotion?1:It.clamp((ze()-t.userData.arrivedAt)/1200,0,1);t.position.copy(t.userData.destination),t.position.x+=(1-r)*1.8,t.rotation.y=r<1?-Math.PI/2:-.18;const s=t.userData.rig;s&&!h.settings.reducedMotion&&(s.head.rotation.y=Math.sin(i*.45)*.07,s.body.scale.y=1+Math.sin(i)*.012,s.legs.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*.3:0}),s.arms.forEach((o,a)=>{o.rotation.x=r<1?Math.sin(e*9+a*Math.PI)*-.2:Math.sin(i+a)*.04}))}if(t.userData.guideMarker){const i=1+Math.sin(e*3.1)*.08;t.scale.set(i,1,i),t.position.y=t.userData.baseY+Math.sin(e*2.5)*.035}})}function Sl(n={}){const e=[];return n.coins&&e.push(`${n.coins} coins`),n.xp&&e.push(`${n.xp} XP`),n.unlockCrop&&e.push(De[n.unlockCrop].label),n.unlockPro&&e.push("Pro Pip"),e.join(" + ")}function yo(n){const e=n?.goals;return e?[...e.marketLevel?[{label:"Market upgraded",current:h.market.level>=e.marketLevel?1:0,target:1}]:[],...e.capacityUpgrade?[{label:"Queue or bed expanded",current:ru()?1:0,target:1}]:[],...Object.entries(e.sold||{}).map(([t,i])=>({crop:t,label:`${De[t].label} sold`,current:h.stats.byCropSold[t],target:i})),...e.orders?[{label:"Total orders fulfilled",current:h.stats.orders,target:e.orders}]:[]]:[]}function ru(){return h.towers.some(n=>n.built&&n.irrigationUpgraded)||h.beds.some(n=>n.built&&n.capacity>2)}function lf(){const n=h.towers.findIndex(t=>t.built&&!t.irrigationUpgraded),e=h.beds.findIndex(t=>t.built&&t.capacity<4);return[...n>=0?[{id:`tower-${n}`,label:"Precision drippers / 12% faster starts",cost:At.queueUpgrade}]:[],...e>=0?[{id:`bed-${e}`,label:"Bed +1 growing space",cost:At.bedUpgrade[e]}]:[]]}function fM(n){const e=yo(n);if(e.length)return e.every(t=>t.current>=t.target);switch(n.id){case"repair-first-tower":return h.towers[0].repaired;case"first-tower-plan":return h.stats.byCropQueued.lettuce>=2;case"first-grow-out":return h.stats.harvested>=4;case"reopen-market":return h.market.built;case"build-second-tower":return h.towers[1].built;case"specialize-flow":return h.hydro.systemLessonDone;case"split-crop-plan":return h.stats.byCropQueued.tomato>=1&&h.stats.byCropQueued.kale>=1;case"build-third-tower":return h.towers[2].built;case"build-pro-yard":return h.towers[3].built;default:return!1}}function pM(n){const e=h.level;h.coins+=n.reward.coins||0,h.xp+=n.reward.xp||0,n.reward.unlockCrop&&!h.unlockedCrops.includes(n.reward.unlockCrop)&&h.unlockedCrops.push(n.reward.unlockCrop),n.reward.unlockPro&&(h.proPip=!0),n.reward.campaignComplete&&(h.campaignComplete=!0);const t=Vh(h.xp);h.level=t.level,h.level>e&&(Be(`Level ${h.level} reached. New farm options are ready.`,4500),ir("level-up"))}function Oa(n=new U(Se.x,1.2,Se.z)){const e=n.clone().add(new U(0,1,0)).project(Tt),t=en.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function xi(){const n=Zn(h);if(!n||!fM(n))return!1;h.completedTasks.push(n.id),pM(n),h.taskIndex+=1,n.reward.chapterComplete&&(n.reward.campaignComplete||(h.chapter=Math.min(vo.length-1,h.chapter+1)),Us=n),h=Rr(h),Ye("task_complete"),Hi(et[n.focus]||new U(Se.x,0,Se.z),12181347),ir(n.reward.chapterComplete?"chapter-complete":"task-complete"),jn("campaign_task_complete",{task:n.id,chapter:n.chapter+1,coins:h.coins,xp:h.xp}),n.reward.unlockPro&&mM(),Us?Lf(Us):(Be(`Task complete: ${n.title}. ${Sl(n.reward)}.`,4800),hi.celebrate({title:n.title,detail:Sl(n.reward)})),at();const e=Te.chapterCoins.getBoundingClientRect();return hi.coins(n.reward.coins,Us?{x:e.left,y:e.bottom}:Oa(et[n.focus])),!0}function mM(){const n=St.position.clone(),e=St.rotation.y;fi.remove(St),Di(St),St=of(),St.position.copy(n),St.rotation.y=e,fi.add(St),Se.speed=h.proPip?6.25:5.25}function Ji(){return Math.max(0,h.coins-(h.market.built?0:At.market))}function su(){return h.market.built?"":`<div class="status-strip"><span>Veg Stand reserve</span><strong>${At.market} coins</strong></div>`}function yi(n,e,t=!1){if(t&&Ji()<n&&!h.market.built)return Be("Keep 40 coins for the Veg Stand. Optional upgrades can use the remaining coins."),ir("error"),!1;if(h.coins<n)return Be(`You need ${n-h.coins} more coins. Complete an order or task first.`),ir("error"),!1;const i=structuredClone(h);try{if(e(),h.coins-=n,h.coins<0)throw new Error("Invalid coin balance");return Ye("purchase"),!0}catch{return h=i,Be("That purchase was safely rolled back. Try again."),!1}}function ou(n){const e=h.towers[n];!e?.built||e.repaired||(e.repaired=!0,h.stats.serviceActions+=1,Ot("repair","repair"),Hi(et[`tower-${n}`],6933459),Be(`Tower ${n+1} is online. Its four planting layers are ready.`),Ye("repair"),xi(),at())}function au(n){const e=h.towers[n];if(!e||e.built||n===0)return;const t=[0,5,8,10][n];if(h.taskIndex<t){Be("Finish the current farm task before opening this lane.");return}const i=At.tower[n];if(!yi(i,()=>{e.built=!0,e.repaired=!0,h.beds[n].built=!0}))return;Ot("build","build"),Hi(et[`tower-${n}`],16039245);const r=Bi(h);Be(`Tower ${n+1} and Grow Bed ${n+1} are built.${r&&!r.reason?` ${r.label} unlocked at the stand.`:""}`),xi(),at()}function cu(){if(h.market.built||h.taskIndex<3)return;const n=Bi(h);if(!n?.available){Be(n?.reason||`You need ${n.cost-h.coins} more coins.`);return}yi(0,()=>{if(!Nh(h))throw new Error("Construction unavailable")})&&(Ot("build","build"),Hi(et.market,16039245),Be("Pip's produce table is open. The first neighbor will stop by soon. Tower 2 unlocks a canopy."),xi(),at())}function uf(n){const e=Ql(h,n);if(!e.available){Be(e.reason);return}yi(0,()=>{if(!xy(h,n))throw new Error("Seed purchase changed")})&&(cf(n),Ot("collect","seed-pickup"),Be(`Bram: ${e.amount} ${De[n].label} seeds in the vault. ${e.tutorial?"First packet is on the house!":"No refunds for talking to your seedlings."}`),jn("seed_purchase",{crop:n,amount:e.amount,coins:e.price,tutorial:e.tutorial}),at())}function df(){yi(0,()=>{if(!yy(h))throw new Error("Rescue unavailable")})&&(cf("lettuce"),Be("Bram: Two lettuce seeds to get you growing again. Everybody starts somewhere."),jn("seed_rescue"),at())}function hf(){yi(0,()=>{if(!My(h))throw new Error("Vault upgrade unavailable")})&&(Ot("build","build"),Be("Seed vault expanded: room for 48 seeds of each crop."),at())}function ff(n,e,t=null){const i=h.towers[n];if(!i?.built||!i.repaired||!h.unlockedCrops.includes(e))return;const r=mo(i,h.carry,n),s=t===null?r[0]:t;if(!r.includes(s)){Be(`Tower ${n+1} has no available layer. A carried starter's layer stays reserved.`);return}if(!Kn(h)){Be("The shared tank needs a fresh mixed batch before planting."),Jt("reservoir");return}if(h.seeds[e]<=0){Be(`Collect ${De[e].label} seeds from the Seed Vault first.`);return}h.seeds[e]-=1;const o=ze(),a=ds(e,"tower",h,i)*1e3*eo;i.queue.push({id:crypto.randomUUID(),crop:e,layer:s,queuedAt:o,startedAt:o,readyAt:o+a,quality:1}),h.stats.planted+=1,h.stats.byCropQueued[e]+=1,Od(h)&&Pi(h,"matched",e),Od(h)&&Pi(h,"saving",e),new Set(i.queue.map(c=>c.crop)).size===4&&Pi(h,"mixed"),h.xp+=2,Ot("plant","plant"),Hi(et[`tower-${n}`],Number.parseInt(De[e].color.slice(1),16)),Be(`${De[e].label} planted in Tower ${n+1}, layer ${s+1}.`),h=Rr(h),Ye("queue_crop"),xi(),at()}function Rn(){return h.beds.filter(n=>n.built).reduce((n,e)=>n+Math.max(0,e.capacity-e.plants.length),0)}function pf(){const n=h.beds.findIndex(e=>e.built&&e.plants.length<e.capacity);return n>=0?`bed-${n}`:null}function gM(){const n=ze(),e=h.towers.findIndex(t=>t.built&&t.repaired&&Er(t,n));return e>=0?`tower-${e}`:null}function Ko(n=null){const e=ze(),t=h.beds.findIndex(i=>i.built&&i.plants.some(r=>r.readyAt<=e&&(!n||r.crop===n)));return t>=0?`bed-${t}`:null}function Cc(){const n=h.towers.findIndex((e,t)=>e.built&&e.repaired&&mo(e,h.carry,t).length);return n>=0?`tower-${n}`:null}function vM(){const n=Nn(h);if(n)return n.crop;const e=Zn(h);if(e?.id==="first-tower-plan")return"lettuce";if(e?.id==="split-crop-plan"){if(h.stats.byCropQueued.tomato<1)return"tomato";if(h.stats.byCropQueued.kale<1)return"kale"}const t=yo(e).find(r=>r.crop&&r.current<r.target);if(t)return t.crop;if(!e){const r=Xn(h).find(o=>o.id===h.homestead.pinned),s=r&&po(h,r).find(o=>o.crop&&o.current<o.target);if(s&&h.unlockedCrops.includes(s.crop))return s.crop}return h.orders.find(r=>r.status==="waiting"&&h.unlockedCrops.includes(r.crop))?.crop||h.unlockedCrops[0]||"lettuce"}function is(){return h.carry?.kind!=="produce"||!h.market.built?!1:h.orders.some(n=>n.status!=="waiting"?!1:h.carry.items.filter(e=>e===n.crop).length>=n.amount)}function pi(){if(h.carry?.kind==="starter")return pf()||`tower-${h.carry.sourceTower}`;if(!Kn(h)&&!is())return"reservoir";if(h.hydro.lineClogged&&!is())return"filter";const n=Nn(h);if(n){const p=kn(h,n);if(!p.needed)return"market";if(!p.room||p.load)return"rack";const f=Ko(n.crop);if(f)return f;const g=h.towers.findIndex(v=>Er(v,ze(),n.crop));if(g>=0)return h.carry?.kind==="produce"?"rack":Rn()?`tower-${g}`:Ko()||`bed-${Math.max(0,h.beds.findIndex(v=>v.built&&v.plants.length))}`;if(!p.missing){const v=h.beds.findIndex(S=>S.plants.some(y=>y.crop===n.crop));if(v>=0)return`bed-${v}`;const m=h.towers.findIndex(S=>S.queue.some(y=>y.crop===n.crop));if(m>=0)return`tower-${m}`}if(h.carry?.kind==="produce")return"rack";const _=Cc(n.crop);if(_)return h.seeds[n.crop]?_:"vault"}if(h.carry?.kind==="produce"){if(is())return"market";if(h.carry.items.length<Ht(h).basket){const p=Ko();if(p)return p}return"rack"}const e=Ko();if(e)return e;const t=gM();if(t&&Rn()>0)return t;if(t&&Rn()<=0){const p=h.beds.findIndex(f=>f.built&&f.plants.length);if(p>=0)return`bed-${p}`}if(!Kn(h))return"reservoir";const i=Zn(h);if(i?.goals?.capacityUpgrade&&!ru()){const p=lf().find(f=>h.coins>=f.cost);if(p)return p.id}if(i?.id==="launch-showcase"&&Bi(h)?.available)return"market";const r={"repair-first-tower":0,"reopen-market":At.market,"build-second-tower":At.tower[1],"specialize-flow":0,"build-third-tower":At.tower[2],"build-pro-yard":At.tower[3]};if(i?.id in r&&h.coins>=r[i.id])return i.focus;const s=h.orders.filter(p=>p.status==="waiting");if(s.some(p=>h.rack[p.crop]>=p.amount))return"rack";const o=vM(),a=s.find(p=>p.crop===o),c=["first-tower-plan","split-crop-plan"].includes(i?.id),l=[];h.beds.forEach((p,f)=>p.plants.forEach(g=>{g.crop===o&&l.push({id:`bed-${f}`,readyAt:g.readyAt})})),h.towers.forEach((p,f)=>p.queue.forEach(g=>{g.crop===o&&l.push({id:`tower-${f}`,readyAt:g.readyAt??1/0})}));const u=i?.id==="first-grow-out"?Math.max(1,4-h.stats.harvested):a?.amount||1;if(!c&&l.length+h.rack[o]>=u&&l.length)return l.sort((p,f)=>p.readyAt-f.readyAt),l[0].id;if(h.market.built&&!c&&!a)return"market";const d=h.seeds[o]>0?Cc():null;if(d)return d;if(!Cc()){const p=h.towers.findIndex(f=>f.built&&f.queue.length);if(p>=0)return`tower-${p}`}return h.unlockedCrops.includes(o)?"vault":i?.focus||null}function io(n,e=null){const t=h.towers[n],i=e?t?.queue.find(r=>r.id===e):Er(t,ze(),Nn(h)?.crop)||Er(t,ze());if(!(!i||i.readyAt===null||i.readyAt>ze())){if(h.carry){Be("Pip's hands are full.");return}if(Rn()<=0){Be("Every bed is full. Harvest a finished crop before taking another starter."),ir("error");return}t.queue.splice(t.queue.indexOf(i),1),h.carry={kind:"starter",crop:i.crop,quality:i.quality,sourceTower:n,sourceLayer:i.layer,job:i},h=Rr(h),Ot("carry","pickup"),Be(`${De[i.crop].label} starter picked up. Carry it to an open bed.`),Ye("pickup_starter"),at()}}function Ki(n){if(h.carry?.kind!=="starter"||h.carry.sourceTower!==n)return;const e=h.towers[n];if(e.queue.length>=4){Be("That tower queue is full. Transplant this starter into an open bed.");return}const t=h.carry.job||{id:crypto.randomUUID(),crop:h.carry.crop,queuedAt:ze(),startedAt:ze(),readyAt:ze(),quality:h.carry.quality};t.startedAt=ze(),t.readyAt=ze(),t.layer=h.carry.sourceLayer??mo(e)[0],e.queue.unshift(t),h.carry=null,Ot("return","return"),Be(`${De[t.crop].label} returned safely to Tower ${n+1}.`),Ye("return_starter"),at()}function ro(n){const e=h.beds[n];if(h.carry?.kind!=="starter"||!e?.built)return;if(e.plants.length>=e.capacity){Be(`Grow Bed ${n+1} is full.`);return}const t=h.carry.crop,i=e.soilCharges>0,r=ze();e.plants.push({id:crypto.randomUUID(),crop:t,plantedAt:r,readyAt:r+ds(t,"bed",h)*(e.soilCharges?.8:1)*1e3*eo,quality:h.carry.quality}),h.carry=null,e.soilCharges=Math.max(0,e.soilCharges-1),h.stats.transplanted+=1,Pi(h,"transplant",t),i&&Pi(h,"enriched",t),h.xp+=3,Ot("transplant","transplant"),Hi(et[`bed-${n}`],Number.parseInt(De[t].color.slice(1),16)),Be(`${De[t].label} transplanted. It will finish in the garden.`),Ye("transplant"),at()}function so(n,e=null){const t=h.beds[n];if(!t?.built)return;if(h.carry?.kind==="starter"){Be("Transplant or return the tower starter before harvesting.");return}if((h.carry?.kind==="produce"?h.carry.items:[]).length>=Ht(h).basket){Be("The harvest basket is full. Visit the market or Harvest Rack.");return}const r=t.plants.findIndex(o=>o.readyAt<=ze()&&(!e||o.crop===e));if(r<0){Be("No finished crop is ready in this bed yet.");return}const[s]=t.plants.splice(r,1);h.carry||(h.carry={kind:"produce",items:[]}),h.carry.items.push(s.crop),h.stats.harvested+=1,h.stats.harvested===1&&jn("first_harvest",{crop:s.crop}),h.stats.byCropHarvested[s.crop]+=1,Pi(h,"harvest",s.crop),h.farm.scraps=Math.min(24,h.farm.scraps+1),h.xp+=De[s.crop].xp,Ot("harvest","harvest"),Hi(et[`bed-${n}`],Number.parseInt(De[s.crop].color.slice(1),16)),Be(`${De[s.crop].label} added to the basket: ${h.carry.items.length}/${Ht(h).basket}.`),Ye("harvest"),xi(),at()}function oo(n=null,e=Ht(h).basket){if(h.carry?.kind!=="produce")return;let t=0;h.carry.items=h.carry.items.filter(i=>(!n||i===n)&&t<e?(h.rack[i]+=1,t+=1,!1):!0),h.carry.items.length||(h.carry=null),Ot("store","rack"),Be(`${t} finished crop${t===1?"":"s"} stored on the Harvest Rack.`),Ye("rack_store"),at()}function Ma(n,e=1){if(!De[n]||(e=Math.max(0,Math.min(Ht(h).basket,Math.floor(Number(e)||0))),h.carry?.kind==="starter"))return;const t=h.carry?.kind==="produce"?h.carry.items:[],i=Ht(h).basket-t.length,r=Math.min(i,e,h.rack[n]);if(!(r<=0)){h.carry||(h.carry={kind:"produce",items:[]});for(let s=0;s<r;s+=1)h.rack[n]-=1,h.carry.items.push(n);Ot("carry","pickup"),Be(`${r} ${De[n].label} loaded from the rack.`),Ye("rack_load"),at()}}function mf(n=0){const e=new Set(h.orders.map((a,c)=>a.slot??c));n=[0,1,2].find(a=>!e.has(a))??n;const t=h.orderSequence,i=Kx(h),r=Tr.filter(a=>a.name!==h.lastCustomer&&!h.orders.some(c=>c.status==="waiting"&&c.customer===a.name)),s=r[Math.floor(Math.random()*r.length)];h.lastCustomer=s.name;const o=h.chapter===0?1:h.chapter===1?t%3===0?1:2:h.market.level>1&&t%3===2?3:2;return h.orderSequence+=1,{id:crypto.randomUUID(),slot:n,customer:s.name,crop:i,amount:o,reward:De[i].coinValue*o+8+h.market.level*2,xp:De[i].xp*o+4,createdAt:ze(),expiresAt:ze()+(90+Math.random()*60+(o-1)*30)*1e3,status:"waiting"}}function gf(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId===e.id&&(h.selectedOrderId=null),iu(e,n,!1),e.status="cooldown",e.expiresAt=ze()+2400,h.stats.rejectedOrders+=1,Be(`${e.customer} heads home. Your produce stays safe on the rack for another visit.`),ir("order-reject"),Ye("order_reject"),at())}function vf(n){const e=h.orders[n];!e||e.status!=="waiting"||(h.selectedOrderId=e.id,Be(`${e.customer}'s order is reserved while you grow.`),Ye("order_wait"),at())}function _M(n){return(h.carry?.kind==="produce"?h.carry.items.filter(t=>t===n).length:0)+h.rack[n]}function hs(){if(!h.market.built)return null;const n=Nn(h);if(n)return n;const e=h.orders.filter(t=>t.status==="waiting");return e.find(t=>_M(t.crop)>=t.amount)||e.sort((t,i)=>t.expiresAt-i.expiresAt)[0]||null}function lu(n){const e=h.orders[n];if(!e||e.status!=="waiting")return;const t=h.carry?.kind==="produce"?h.carry.items:[];if(t.filter(s=>s===e.crop).length<e.amount){h.rack[e.crop]>0?Be(`Load ${De[e.crop].label} from the Harvest Rack, then return to ${e.customer}.`):Be(`${e.customer} needs ${e.amount} ${De[e.crop].label}. Only finished garden produce can be sold.`),ir("error");return}let r=e.amount;h.carry.items=t.filter(s=>s===e.crop&&r>0?(r-=1,!1):!0),h.carry.items.length||(h.carry=null),h.coins+=e.reward,h.xp+=e.xp,h.stats.sold+=e.amount,h.stats.orders+=1,h.stats.orders===1&&jn("first_sale"),h.stats.byCropSold[e.crop]+=e.amount,Pi(h,"order",e.crop),Ot("sell","sale"),iu(e,n),Hi(ya(n),Number.parseInt(De[e.crop].color.slice(1),16)),Be(`${e.customer}: "${Tr.find(s=>s.name===e.customer)?.line}" +${e.reward} coins.`),h.selectedOrderId===e.id&&(h.selectedOrderId=null),e.status="cooldown",e.expiresAt=ze()+2400,Ye("order_complete"),hi.coins(e.reward,Oa(ya(n))),xi(),at()}function ba(n){const e=h.orders[n];if(!e||e.status!=="waiting"||h.carry?.kind!=="produce"||h.carry.items.filter(i=>i===e.crop).length<e.amount)return;h.selectedOrderId=e.id;const t=ya(n).add(new U(0,0,.8));if(Math.hypot(Se.x-t.x,Se.z-t.z)<=.5)return vt()&&cn(),lu(n);Jt("market"),Se.target={x:t.x,z:t.z},On=e.id,Ye("delivery_start"),Be(`Taking ${e.amount} ${De[e.crop].label} to ${e.customer}.`)}function xM(n){const e=h.orders.find(i=>i.id===n&&i.status==="waiting");if(!e)return;h.selectedOrderId=e.id,Ye("order_selected");const t=kh(h,e);if(t.kind==="deliver")return ba(h.orders.findIndex(i=>i.id===n));if(t.kind==="collect"){Jt("rack"),li=e.id;return}Jt(pi()||"vault")}function _f(n){const e=h.towers[n];if(!(!e?.built||e.irrigationUpgraded)){if(Tn(h,"drippers")){Be(Tn(h,"drippers"));return}yi(At.queueUpgrade,()=>{e.irrigationUpgraded=!0},!0)&&(Ot("build","build"),Be(`Tower ${n+1} has precision drippers. New starts grow 12% faster.`),xi(),at())}}function xf(n){const e=h.beds[n];if(!e?.built||e.capacity>=4)return;if(Tn(h,"bed",n)){Be(Tn(h,"bed",n));return}const t=At.bedUpgrade[n];yi(t,()=>{e.capacity+=1},!0)&&(Ot("build","build"),Be(`Grow Bed ${n+1} now holds ${e.capacity} crops.`),xi(),at())}function uu(){if(!h.market.built)return;const n=Bi(h);if(n){if(!n.available){Be(n.reason||`You need ${n.cost-h.coins} more coins.`);return}yi(0,()=>{if(!Nh(h))throw new Error("Construction unavailable")})&&(Ot("build","build"),Hi(et.market,16039245),Be(`${n.label} complete. ${n.detail}`),xi(),at())}}function yf(){Oy(h)&&(Ot("service","service"),Be("Filter cleared. Full flow restored to the towers."),Ye("feedline_cleared"),at())}function Mf(n){Fy(h,n)&&(h.hydro.servicedAt=ze(),h.stats.serviceActions+=1,Ot("service","service"),Be(n==="water"?"Fresh starter batch filled. Circulate the IBC before feeding.":n==="mix"?"One evenly mixed batch supplies every tower.":"Delivery confirmed at every top outlet. The timer handles the short feeds."),Ye("hydro_service"),xi(),at())}function bf(n){!Qs[n]||h.cosmetics.owned.includes(n)||yi(At.cosmetics[n],()=>{h.cosmetics.owned.push(n),h.cosmetics.active.push(n)},!0)&&(Ot("build","build"),Be(`${Qs[n].label} added to the homestead.`),at())}function yM(n){h.cosmetics.owned.includes(n)&&(h.cosmetics.active.includes(n)?h.cosmetics.active=h.cosmetics.active.filter(e=>e!==n):h.cosmetics.active.push(n),Ye("cosmetic_toggle"),at())}function MM(n){if(!n)return"Farm complete";const e=yo(n);if(e.length)return`${e.filter(t=>t.current>=t.target).length} / ${e.length}`;switch(n.id){case"repair-first-tower":return h.towers[0].repaired?"1 / 1":"0 / 1";case"first-tower-plan":return`${Math.min(2,h.stats.byCropQueued.lettuce)} / 2`;case"first-grow-out":return`${Math.min(4,h.stats.harvested)} / 4`;case"reopen-market":return h.market.built?"1 / 1":"0 / 1";case"build-second-tower":return h.towers[1].built?"1 / 1":"0 / 1";case"specialize-flow":return h.hydro.systemLessonDone?"1 / 1":"0 / 1";case"split-crop-plan":return`${Math.min(1,h.stats.byCropQueued.tomato)+Math.min(1,h.stats.byCropQueued.kale)} / 2`;case"build-third-tower":return h.towers[2].built?"1 / 1":"0 / 1";case"build-pro-yard":return h.towers[3].built?"1 / 1":"0 / 1";default:return""}}function du(){const n=Vh(h.xp);Te.coins.textContent=h.coins.toLocaleString(),Te.level.textContent=String(n.level),Te.xp.textContent=n.needed?`${n.current} / ${n.needed}`:"MAX",Te.xpFill.style.width=`${Math.round(n.ratio*100)}%`,Te.chapter.previousElementSibling.textContent=h.campaignComplete?"Farm":"Chapter",Te.chapter.textContent=h.campaignComplete?xr(h)?"Master":`${h.homestead.claimed.length}/18`:`${h.chapter+1} / 3`;const e=Zn(h),t=vo[h.chapter];Te.objectiveChapter.textContent=h.campaignComplete?"Homestead":`Chapter ${t.number}`;const i=Xn(h).find(s=>s.id===h.homestead.pinned)||Xn(h)[0];Te.objectiveTitle.textContent=e?.title||i?.title||(xr(h)?"Community requests continue":"Complete the crop mastery book"),Te.objectiveProgress.textContent=e?MM(e):i?`${po(h,i).filter(s=>s.current>=s.target).length}/${i.goals.length}`:`${Object.values(h.homestead.mastery).reduce((s,o)=>s+o,0)}/15 badges`,te("#homesteadButton").hidden=!h.market.built,te(".campaign-controls").classList.toggle("has-goals",h.market.built);const r=Xn(h).filter(s=>Pa(h,s)).length;te("#homesteadButton").textContent=r?`Goals (${r})`:"Goals",Bn.hidden||ga.render(h),document.body.classList.toggle("high-contrast",h.settings.highContrast),ws()}function ws(){const n=hs(),e=!Bn.hidden||!vi.hidden||!Qn.hidden||!yn.hidden||!Mn.hidden||!an.hidden;if(yr.hidden=!n||e,yr.classList.toggle("is-ready",!!(n&&kn(h,n).needed===0)),!n)return;const t=kn(h,n);Te.marketChipCustomer.textContent=`${n.customer}${n.id===h.selectedOrderId?" / Reserved":" needs"}`,Te.marketChipDemand.textContent=`${t.carried}/${n.amount} ${De[n.crop].label} in basket${t.stored?` / ${t.stored} rack`:""}`}function wf(){const n=Zn(h),e=vo[h.chapter];Te.taskChapter.textContent=h.campaignComplete?"Campaign complete":`Chapter ${e.number}`,Te.taskTitle.textContent=e.name,Te.taskStory.textContent=n?.story||"Pip: The homestead is ready for every grow that comes next.",Te.primaryTaskTitle.textContent=n?.title||"Keep the market growing",Te.primaryTaskDetail.textContent=n?.detail||"Choose crops, improve the farm, and serve neighborhood orders.",Te.primaryTaskReward.textContent=n?Sl(n.reward):"All chapter rewards earned";const t=An.slice(h.taskIndex).find(o=>o.reward.unlockCrop||o.reward.unlockPro),i=te("#nextFarmUnlock");if(i.hidden=!t||h.campaignComplete,t){const o=t.reward.unlockPro?"Pro Pip and strawberry seeds":`${De[t.reward.unlockCrop].label} seeds`;i.textContent=`Next unlock: ${o}. Milestone: ${t.title}.`}te("#taskMilestones").innerHTML=yo(n).map(o=>{const a=o.current>=o.target;return`<li class="${a?"is-complete":""}"><span>${a?"&#10003; ":""}${o.label}</span><strong>${Math.min(o.current,o.target)} / ${o.target}</strong></li>`}).join("");const r=te("#taskUpgradeOptions");r.hidden=!n?.goals?.capacityUpgrade||ru(),r.innerHTML=r.hidden?"":lf().map(o=>`<button class="choice-button" data-upgrade-target="${o.id}"><strong>${o.label}</strong><small>${o.cost} coins</small></button>`).join(""),r.querySelectorAll("[data-upgrade-target]").forEach(o=>o.addEventListener("click",()=>Jt(o.dataset.upgradeTarget)));const s=An.filter(o=>o.chapter===h.chapter);Te.chapterTaskList.innerHTML=s.map(o=>{const a=h.completedTasks.includes(o.id),c=o.id===n?.id;return`<div class="task-row ${a?"is-complete":""} ${c?"is-active":""}"><i>${a?"&#10003;":""}</i><span>${o.title}</span></div>`}).join("")}function bM(){const n=Jn.filter(e=>h.rack[e]>0).map(e=>`${De[e].code} ${h.rack[e]}`);return n.length?n.join(" / "):"Empty"}function Sf(){if(!h.carry)return"";if(h.carry.kind==="starter")return De[h.carry.crop].label;const n=h.carry.items.reduce((e,t)=>(e[t]=(e[t]||0)+1,e),{});return Object.entries(n).map(([e,t])=>`${vt()?De[e].label:De[e].code} ${t}`).join(" / ")}function Ef(){if(Jh.hidden=!h.carry&&!h.farm.eggs,!h.carry){Te.carryKind.textContent="Egg crate / market",Te.carryContents.textContent=`${h.farm.eggs} eggs`;return}Te.carryKind.textContent=h.carry.kind==="starter"?"Tower starter / one":`Harvest basket / ${h.carry.items.length} of ${Ht(h).basket}`,vt()&&(Te.carryKind.textContent=h.carry.kind==="starter"?"To garden":`Basket ${h.carry.items.length}/${Ht(h).basket}`),Te.carryContents.textContent=Sf()+(h.farm.eggs?` / ${h.farm.eggs} eggs`:"")}function ao(n){const e=Math.max(0,Math.ceil((n-ze())/1e3));return e>59?`${Math.floor(e/60)}m ${e%60}s`:`${e}s`}function Mo(){const n=te("#sellFarmEggs");n.hidden=!h.farm.eggs;const e=Math.hypot(Se.x-et.market.x,Se.z-et.market.z)<3.6;n.textContent=e?`Sell ${h.farm.eggs} eggs / ${h.farm.eggs*8} coins`:`Take ${h.farm.eggs} eggs to the stand`,Te.rackSummary.textContent=bM();const t=te("#orderMarketUpgrade"),i=Bi(h);t.hidden=!i,t.disabled=!i?.available,i&&(t.textContent=`${i.label} / ${i.cost} coins${i.reason?` / ${i.reason}`:""}`);const r=Nn(h)||hs();sn(Te.orderList,h.orders.map((s,o)=>{const a=Tr.find(d=>d.name===s.customer)||Tr[0];if(s.status==="cooldown")return"";const c=kh(h,s),l=c.stock,u=r?.id===s.id;return`<article class="order-card ${u?"is-selected":""}" data-order="${o}" data-key="${s.id}">
      <button class="order-select" data-order-action="select" data-order-id="${s.id}" aria-pressed="${s.id===h.selectedOrderId}"><img class="customer-avatar" src="${oM(a)}" alt=""><span><strong>${s.customer}</strong><span>${s.amount} ${De[s.crop].label}</span></span><span class="order-reward">${s.reward} coins<small>+${s.xp} XP</small></span></button>
      <div class="order-detail" ${u?"":"hidden"}>
        <p class="stock-breakdown">Basket <b>${l.carried}/${s.amount}</b> <span>Rack <b>${l.stored}</b></span> <span>Growing <b>${l.growing+l.ready}</b></span></p>
        <p class="order-status">${h.carry?.kind==="starter"?"Starter needs its garden finish":l.needed===0?"Packed for delivery":l.room===0?"Make room on the rack; your crops stay safe":l.load?`${l.load} needed from the rack`:l.ready?`${l.ready} ready in the garden`:l.missing?`${l.missing} still to plant`:"Your crop is growing"}</p>
        <p>${s.id===h.selectedOrderId?"Reserved: staying until you deliver or release":`Leaving in ${ao(s.expiresAt)}`}</p>
        <div class="order-actions"><button class="fulfill" data-order-action="fulfill" data-order-id="${s.id}" data-index="${o}">${c.label}</button><button data-order-action="wait" data-order-id="${s.id}">${s.id===h.selectedOrderId?"Reserved":"Reserve"}</button><button data-order-action="reject" data-order-id="${s.id}">Release</button></div>
      </div>
    </article>`}).join("")||'<p class="order-status">The stand is quiet. Another neighbor will stop by soon. Stored produce keeps until then.</p>'),Te.orderList.onclick=s=>{const o=s.target.closest("[data-order-action]");if(!o)return;const a=h.orders.findIndex(c=>c.id===o.dataset.orderId&&c.status==="waiting");a<0||(o.dataset.orderAction==="fulfill"&&xM(o.dataset.orderId),["select","wait"].includes(o.dataset.orderAction)&&(vf(a),xo()),o.dataset.orderAction==="reject"&&gf(a),Mo())},yn.hidden||(ys.textContent=hu("market"))}function qn(n,e,t,i=!1){return`<button class="economy-command" data-command="${t}" ${i?"disabled":""}><span>${n}</span><strong>${e===0?"Free":`${e} coins`}</strong></button>`}function wM(n){const e=h.towers[n];if(Te.interactionKicker.textContent="Hydro production",Te.interactionTitle.textContent=`Tower ${n+1}`,!e.built){const c=At.tower[n];Te.interactionSummary.textContent=`Four independent planting layers and Grow Bed ${n+1}.`,sn(on,qn(`Build Tower ${n+1}`,c,`build-tower-${n}`,h.coins<c));return}if(!e.repaired){Te.interactionSummary.textContent="Repair the pump and flow line before planting.",sn(on,qn("Repair tower",0,`repair-tower-${n}`));return}const t=mo(e,h.carry,n),i=[0,1,2,3].map(c=>{const l=e.queue.find(d=>d.layer===c);if(!l)return`<label class="queue-slot is-empty"><b>${c+1}</b><span>${t.includes(c)?"Empty layer":"Reserved for carried starter"}</span><input type="radio" name="towerLayer" value="${c}" aria-label="Plant layer ${c+1}" ${c===t[0]?"checked":""} ${t.includes(c)?"":"disabled"}></label>`;const u=l.readyAt!==null&&l.readyAt<=ze();return`<div class="queue-slot" data-key="${l.id}"><b style="background:${De[l.crop].accent}">${c+1}</b><span>${De[l.crop].label}<small>${u?"Ready for the garden":ao(l.readyAt)}</small></span>${u?`<button class="storage-button" data-pickup-job="${l.id}" ${h.carry||!Rn()?"disabled":""}>Pick up</button>`:"<time>Growing</time>"}</div>`}).join(""),r=h.unlockedCrops.map(c=>`<button class="crop-button" data-queue-crop="${c}" ${!t.length||h.seeds[c]<=0?"disabled":""}><i style="background:${De[c].accent}">${De[c].code}</i><span>${De[c].label}<small>${h.seeds[c]} seeds / ${Math.ceil(ds(c,"tower",h,e))}s</small></span></button>`).join(""),s=h.carry?.kind==="starter"&&h.carry.sourceTower===n?qn("Return starter to its layer",0,`return-${n}`):"",o=Tn(h,"drippers"),a=e.irrigationUpgraded?'<div class="status-strip"><span>Precision drippers</span><strong>Installed</strong></div>':qn(o||"Precision drippers / 12% faster",At.queueUpgrade,`upgrade-queue-${n}`,!!o||Ji()<At.queueUpgrade);Te.interactionSummary.textContent=`${e.queue.length}/4 layers planted. One seed per layer; each crop grows independently.`,sn(on,`<div class="queue-list"><span>Layers / bottom to top</span>${i}</div>${s}<div class="crop-actions">${r}</div>${su()}${a}`)}function SM(n){const e=h.beds[n],t=e.plants.filter(l=>l.readyAt<=ze());Te.interactionKicker.textContent="Garden grow-out",Te.interactionTitle.textContent=`Grow Bed ${n+1}`,Te.interactionSummary.textContent=`${e.plants.length} of ${e.capacity} plots used. ${t.length} crop${t.length===1?"":"s"} ready to harvest.`;const i=e.plants.length?e.plants.map(l=>`<div class="queue-slot"><b style="background:${De[l.crop].accent}">${De[l.crop].code}</b><span>${De[l.crop].label}<small>${l.readyAt<=ze()?"Garden finished":"Finishing in soil"}</small></span><time>${l.readyAt<=ze()?"Ready":ao(l.readyAt)}</time></div>`).join(""):`<div class="queue-slot is-empty"><b>1</b><span>Open garden plots<small>Tower starters finish here</small></span><time>${e.capacity}</time></div>`,r=h.carry?.kind==="starter"?qn("Transplant starter",0,`transplant-${n}`,e.plants.length>=e.capacity):"",s=[...new Set(t.map(l=>l.crop))].map(l=>`<button class="economy-command" data-harvest-crop="${l}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ht(h).basket?"disabled":""}><span>Harvest ${De[l].label}</span><strong>${t.filter(u=>u.crop===l).length} ready</strong></button>`).join(""),o=Tn(h,"bed",n),a=e.capacity<4?qn(o||"Add garden plot",At.bedUpgrade[n],`upgrade-bed-${n}`,!!o||Ji()<At.bedUpgrade[n]):"",c=h.farm.owned.includes("composter")?`<div class="status-strip"><span>Enriched plantings left</span><strong>${e.soilCharges}/4</strong></div><button class="economy-command" data-enrich-bed="${n}" ${e.soilCharges||!h.farm.compost?"disabled":""}><span>Enrich soil / 1 compost</span><strong>${h.farm.compost} bags</strong></button>`:"";sn(on,`<div class="queue-list"><span>Garden crops</span>${i}</div>${r}${s}${c}${su()}${a}`)}function EM(){Te.interactionKicker.textContent="Seed merchant and vault",Te.interactionTitle.textContent="Bram's Seeds",Te.interactionSummary.textContent=`${h.coins} coins / ${xl(h)} seeds per crop`;const n=["Quality seeds. Questionable hat.","I talk to my seedlings. They mostly ask for space.","Four layers, four seeds. The hat is extra."],e=h.unlockedCrops.map(t=>{const i=Ql(h,t);return`<button class="crop-button" data-key="${t}" data-collect-crop="${t}" ${i.available?"":"disabled"}><i style="background:${De[t].accent}">${De[t].code}</i><span>${De[t].label}<small>${h.seeds[t]}/${xl(h)} stored / ${i.amount} seeds for ${i.price} coins</small><small>${i.reason||(i.tutorial?"One free starter packet":"Buy packet")}</small></span></button>`}).join("");sn(on,`<p class="seed-merchant-quote">Bram: ${n[h.seedShop.purchases%n.length]}</p><div class="seed-stock">${e}</div>
    ${Hh(h)?'<button class="secondary-command" data-rescue-seeds>Emergency lettuce packet / free</button>':""}
    ${su()}
    <button class="economy-command" data-expand-vault ${h.seedShop.expanded||!h.market.built||Tn(h,"vault")||h.coins<ha?"disabled":""}><span>${h.seedShop.expanded?"Expanded vault / 48 per crop":h.market.built?Tn(h,"vault")||"Expand vault / 48 per crop":"Vault expansion / open table first"}</span><strong>${h.seedShop.expanded?"Owned":ha+" coins"}</strong></button>`)}function TM(){Te.interactionKicker.textContent="Neighborhood market";const n=vs(h),e=Bi(h);Te.interactionTitle.textContent=n?Uh[n-1].label:"Pip's produce table";const t=e?`<p>Stage ${e.stage}/4: ${e.detail}</p>${qn(e.reason||`Build ${e.label}`,e.cost,n?"upgrade-market":"build-market",!e.available)}`:"<p>Farm market complete. Family baskets available.</p>";if(!h.market.built){Te.interactionSummary.textContent=h.market.openingGrant?`${h.market.openingGrant} opening coins restored. Your crops and upgrades are safe.`:"Start small. Each new tower unlocks the next section of the stand.",sn(on,t);return}Te.interactionSummary.textContent=`Stage ${n}/4. ${h.stats.orders} orders complete. Up to ${Kl(h)} visiting at once, with quiet spells between groups.`;const i=qn("Open order board",0,"open-orders"),r=h.carry?.kind==="produce"?`<div class="status-strip"><span>Basket</span><strong>${Sf()}</strong></div>`:"";sn(on,`${r}${i}${t}`)}function AM(){Te.interactionKicker.textContent="Produce storage",Te.interactionTitle.textContent="Harvest Rack",Te.interactionSummary.textContent=`${h.carry?.kind==="produce"?h.carry.items.length:0}/${Ht(h).basket} basket slots filled`;const n=h.carry?.kind==="produce"?qn("Stage basket",0,"stage-produce"):"",e=Nn(h),t=e?kn(h,e).load:0,i=t?`<button class="economy-command" data-load-needed="${e.id}"><span>Load ${t} ${De[e.crop].label}</span><strong>For ${e.customer}</strong></button>`:"",r=Jn.filter(o=>h.rack[o]>0).map(o=>`<div class="rack-row" data-key="stock-${o}"><span>${De[o].label}<small>${h.rack[o]} stored</small></span><input id="rack-qty-${o}" type="number" min="1" max="${Math.min(Ht(h).basket,h.rack[o])}" value="1" aria-label="${De[o].label} quantity"><button class="storage-button" data-load-crop="${o}" ${h.carry?.kind==="starter"||h.carry?.items?.length>=Ht(h).basket?"disabled":""}>Load</button></div>`).join(""),s=h.carry?.kind==="produce"?[...new Set(h.carry.items)].map(o=>`<button class="storage-button" data-store-crop="${o}">Store ${De[o].label} (${h.carry.items.filter(a=>a===o).length})</button>`).join(""):"";sn(on,`${i}${n}<div class="storage-actions">${s}</div><div class="storage-group"><span>Stored produce</span>${r||"<span>Rack empty</span>"}</div>`)}function CM(){const n=h.hydro;Te.interactionKicker.textContent="Shared HydroPip system",Te.interactionTitle.textContent="IBC reservoir",Te.interactionSummary.textContent="One tank. One nutrient batch. No tower return line.";const e=n.water?n.batchMixed?"Mixed starter batch":"Awaiting circulation":"Empty",t=Kn(h)?n.lineClogged?"Check delivery line":Yh(h,ze())?"Short feed running":"Between timed feeds":"Waiting for mixed batch";sn(on,`<div class="hydro-readings">
    <label>Tank level <strong>${Math.round(n.water)}%</strong><meter min="0" max="100" low="30" high="70" optimum="100" value="${n.water}" aria-label="Reservoir water"></meter></label>
  </div><div class="queue-list">
    <div class="status-strip"><span>Batch ${n.batchNumber}</span><strong>${e}</strong></div>
    <div class="status-strip"><span>Mixing pump</span><strong>${n.mixChecked?"Circulation confirmed":"Check top discharge"}</strong></div>
    <div class="status-strip"><span>Feed pump</span><strong>${t}</strong></div>
    <div class="status-strip"><span>Tower delivery</span><strong>${n.flowChecked&&!n.lineClogged?"All outlets checked":"Check top outlets"}</strong></div>
  </div><div class="storage-actions">
    <button class="secondary-command" data-service="water" ${n.water>nu?"disabled":""}>Refill fresh batch</button>
    <button class="secondary-command" data-service="mix" ${n.water<=0||n.mixChecked?"disabled":""}>${n.mixChecked?"Mixing confirmed":n.batchMixed?"Check circulation":"Circulate batch"}</button>
    <button class="secondary-command" data-service="check" ${!Kn(h)||!n.mixChecked||n.flowChecked||n.lineClogged?"disabled":""}>Check tower delivery</button>
    ${n.lineClogged?'<button class="secondary-command" data-focus-object="filter">Inspect feed filter</button>':""}
  </div><details class="system-notes"><summary>HydroPip field notes</summary>
    <p>Two pumps have different jobs: one circulates within the IBC; the other sends brief feeds to the tops of the towers. Water moves through reusable 50/50 perlite and vermiculite. Excess drains away, not back to the tank.</p>
    <p>Let the tank level fall, then mix a fresh batch. Choose real nutrient strength from plant development at refill, not per tower. Check circulation, delivery and media before assuming more fertilizer is needed. pH and optional EC/TDS readings need crop and water context.</p>
    <p>This farm uses a starter batch for its tower-to-garden succession. Real HydroPip also supports tower harvests and moving suitable mature plants into raised beds. The four-layer towers, timers and refill threshold here are simplified for play, not build dimensions or a feeding prescription.</p>
    <a href="https://hydropip-pip-api.onrender.com/field-guide" target="_blank" rel="noopener noreferrer">Open the real HydroPip Field Guide</a>
  </details>`)}function RM(){Te.interactionKicker.textContent="Farm improvements",Te.interactionTitle.textContent="Homestead Shop",Te.interactionSummary.textContent=`${Ji()} spendable coins. Production, soil care, and livestock.`;const n=Object.entries(Oi).map(([i,r])=>{const s=$n(h.farm,i),o=Zl(h,i);return`<div class="shop-item"><strong>${r.label} / ${s}/2</strong><p>${r.detail}</p><button class="economy-command" data-buy-farm="${i}" ${!o||o.reason||Ji()<o.cost?"disabled":""}><span>${o?o.reason||`Build ${o.label}`:"Complete"}</span><strong>${o?`${o.cost} coins`:"Owned"}</strong></button></div>`}).join(""),e=h.beds.map((i,r)=>i.built&&i.capacity<4?qn(`Bed ${r+1}: ${Tn(h,"bed",r)||`add plot (${i.capacity}/4)`}`,At.bedUpgrade[r],`upgrade-bed-${r}`,!!Tn(h,"bed",r)||Ji()<At.bedUpgrade[r]):"").join("")+h.towers.map((i,r)=>i.built&&!i.irrigationUpgraded?qn(`Tower ${r+1}: ${Tn(h,"drippers")||"precision drippers"}`,At.queueUpgrade,`upgrade-queue-${r}`,!!Tn(h,"drippers")||Ji()<At.queueUpgrade):"").join(""),t=Object.entries(Qs).map(([i,r])=>{const s=h.cosmetics.owned.includes(i),o=h.cosmetics.active.includes(i);return`<button class="economy-command" ${s?`data-toggle-cosmetic="${i}"`:`data-buy-cosmetic="${i}"`} ${!s&&Ji()<At.cosmetics[i]?"disabled":""}><span>${s?`${o?"Hide":"Show"} ${r.label}`:r.label}</span><strong>${s?"Owned":`${At.cosmetics[i]} coins`}</strong></button>`}).join("");sn(on,`<div class="shop-list">${n}</div><div class="queue-list"><span>Production upgrades</span>${e||"<p>All production upgrades installed.</p>"}</div><div class="queue-list"><span>Decorations</span>${t}</div>`)}function Tf(n){const e=Zl(h,n);if(e){if(e.reason||h.coins<e.cost){Be(e.reason||`You need ${e.cost-h.coins} more coins.`);return}yi(0,()=>{if(!ny(h,n))throw new Error("Equipment unavailable")},!0)&&(Ot("build","build"),Be(`${e.label} added to the farm.`),Ye("farm_upgrade"),at())}}function Vs(n,e=null){const t=h.coins;let i=!1;n==="compost"&&(i=oy(h,ze(),eo)),n==="feed"&&De[e]&&(i=ay(h,e,ze(),eo)),n==="eggs"&&(i=cy(h)),n==="sell-eggs"&&Math.hypot(Se.x-et.market.x,Se.z-et.market.z)<3.6&&(i=ly(h)),n==="enrich"&&(i=uy(h,Number(e))),i&&(Pi(h,n==="sell-eggs"?"egg-sale":n,e),Ot(n==="sell-eggs"?"sell":"service",n==="sell-eggs"?"sale":"service"),Be({compost:"Compost batch started.",feed:`Fed the coop. ${$n(h.farm,"coop")} egg(s) will be ready soon.`,eggs:"Eggs collected; one coop clean-out added to compost scraps.","sell-eggs":"Fresh eggs sold at the stand.",enrich:"Bed enriched for its next four plantings."}[n]),Ye(`farm_${n}`),at(),n==="sell-eggs"&&hi.coins(h.coins-t,Oa(et.market)))}function PM(n){const e=h.farm;if(Te.interactionKicker.textContent="Farm care",Te.interactionTitle.textContent=Oi[n].label,n==="rainTank")Te.interactionSummary.textContent="Collected rainwater supplements the main reservoir.",sn(on,`<div class="status-strip"><span>Tower water consumption</span><strong>${$n(e,n)*10}% lower</strong></div><p>Active while tower layers grow. Refill the main reservoir as usual.</p>`);else if(n==="composter")Te.interactionSummary.textContent=`${e.scraps}/24 scraps / ${e.compost}/12 compost bags`,sn(on,`<div class="status-strip"><span>Compost batch</span><strong>${e.compostReadyAt?ao(e.compostReadyAt):"Ready to start"}</strong></div><button class="economy-command" data-farm-action="compost" ${e.compostReadyAt||e.scraps<2||e.compost>=12?"disabled":""}><span>Compost 2 scraps</span><strong>1 bag / ${$n(e,n)===2?40:60}s</strong></button><p>Harvest trimmings and coop clean-outs supply scraps. Apply finished compost at a garden bed.</p>`);else{Te.interactionSummary.textContent=`${e.eggs}/12 eggs packed / ${e.eggsReady} in the nest`;const t=Jn.filter(i=>h.rack[i]>0);sn(on,`<div class="status-strip"><span>${$n(e,n)} hen(s)</span><strong>${e.coopReadyAt?ao(e.coopReadyAt):e.eggsReady?"Eggs ready":"Ready for feed"}</strong></div><div class="crop-actions">${t.map(i=>`<button class="crop-button" data-feed-hens="${i}" ${e.coopReadyAt||e.eggsReady?"disabled":""}><span>Feed 1 ${De[i].label}<small>${h.rack[i]} on rack</small></span></button>`).join("")||"<p>No stored vegetables for feed.</p>"}</div><button class="economy-command" data-farm-action="eggs" ${!e.eggsReady||e.eggs+e.eggsReady>12?"disabled":""}><span>Collect ${e.eggsReady||$n(e,n)} egg(s)</span><strong>Pack for market</strong></button><p>Sell packed eggs at the Veg Stand for 8 coins each. Hens stay safe between feedings.</p>`)}}function LM(){on.onclick=n=>{const e=n.target.closest("button");if(!e||e.disabled)return;const t=Nt,i=JSON.stringify(h.carry),r=Number(t?.split("-")[1]);if(e.dataset.command){const s=e.dataset.command;if(s==="open-orders")return rr();s.startsWith("repair-tower-")&&ou(Number(s.at(-1))),s.startsWith("build-tower-")&&au(Number(s.at(-1))),s.startsWith("pickup-")&&io(Number(s.at(-1))),s.startsWith("return-")&&Ki(Number(s.at(-1))),s.startsWith("transplant-")&&ro(Number(s.at(-1))),s.startsWith("harvest-")&&so(Number(s.at(-1))),s.startsWith("upgrade-queue-")&&_f(Number(s.at(-1))),s.startsWith("upgrade-bed-")&&xf(Number(s.at(-1))),s==="build-market"&&cu(),s==="upgrade-market"&&uu(),s==="stage-produce"&&oo()}if(e.dataset.queueCrop){const s=on.querySelector('[name="towerLayer"]:checked:not(:disabled)');ff(r,e.dataset.queueCrop,s?Number(s.value):null)}if(e.dataset.pickupJob&&io(r,e.dataset.pickupJob),e.dataset.buyFarm&&Tf(e.dataset.buyFarm),e.dataset.farmAction&&Vs(e.dataset.farmAction),e.dataset.feedHens&&Vs("feed",e.dataset.feedHens),e.dataset.enrichBed!==void 0&&Vs("enrich",Number(e.dataset.enrichBed)),e.dataset.focusObject){Jt(e.dataset.focusObject);return}if(e.dataset.collectCrop&&uf(e.dataset.collectCrop),e.dataset.rescueSeeds!==void 0&&df(),e.dataset.expandVault!==void 0&&hf(),e.dataset.harvestCrop&&so(r,e.dataset.harvestCrop),e.dataset.loadCrop&&Ma(e.dataset.loadCrop,te(`#rack-qty-${e.dataset.loadCrop}`).value),e.dataset.storeCrop&&oo(e.dataset.storeCrop),e.dataset.loadNeeded){const s=Nn(h);s&&Ma(s.crop,kn(h,s).load)}e.dataset.service&&Mf(e.dataset.service),e.dataset.flushLine!==void 0&&yf(),e.dataset.buyCosmetic&&bf(e.dataset.buyCosmetic),e.dataset.toggleCosmetic&&yM(e.dataset.toggleCosmetic),vt()&&/^(tower|bed)-/.test(t)&&i!==JSON.stringify(h.carry)?cn():an.hidden&&bo(t)}}function bo(n,e=!0){if(Bn.hidden=!0,!(!n||!et[n])&&!(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))){if(n==="market"&&h.market.built){Nt="market",rr();return}Nt=n,vi.hidden=!0,yn.hidden=!0,Qn.hidden=!1,ws(),n.startsWith("tower-")?wM(Number(n.split("-")[1])):n.startsWith("bed-")?SM(Number(n.split("-")[1])):n==="vault"?EM():n==="market"?TM():n==="rack"?AM():n==="reservoir"?CM():n==="filter"?(Te.interactionKicker.textContent="Tower water supply",Te.interactionTitle.textContent="Feedline filter",Te.interactionSummary.textContent=h.hydro.lineClogged?"Restricted flow: tower growth at 50%. Garden crops are unaffected.":"Full flow to all connected towers.",sn(on,`<button class="economy-command" data-flush-line ${h.hydro.lineClogged?"":"disabled"}><span>${h.hydro.lineClogged?"Clear clog":"Filter clear"}</span><strong>No cost</strong></button>`)):n==="workshop"?RM():["coop","composter","rainTank"].includes(n)&&PM(n),LM(),e&&xo(),ys.textContent=hu(n)}}function cn(){Bn.hidden=!0,te("#homesteadButton").setAttribute("aria-expanded","false"),vi.hidden=!0,Qn.hidden=!0,yn.hidden=!0,Na.setAttribute("aria-expanded","false"),Nt=null,ws(),xo()}function Fa(){h.market.built&&(cn(),ai=null,On=null,li=null,hn(),Bn.hidden=!1,te("#homesteadButton").setAttribute("aria-expanded","true"),ga.render(h),ws())}function Af(n,e){if(n==="close")return cn();if(n==="render")return ga.render(h);if(!h.market.built)return;if(n==="focus"){const o=Object.hasOwn(Oi,e)&&!h.farm.owned.includes(e)?"workshop":e;return cn(),Jt(o)}const t=h.coins,i=h.xp,r=xr(h);let s=!1;if(n==="project"&&(s=qx(h,e)),n==="mastery"&&(s=Xx(h,e)),n==="request-accept"&&(s=Yx(h,e)),n==="request-claim"&&(s=jx(h)),n==="request-refresh"&&(s=Jx(h)),n==="request-abandon"&&h.homestead.request&&(h.homestead.request=null,h.homestead.requestSerial++,s=!0),n==="pin"&&Xn(h).some(o=>o.id===e&&o.chapter<=h.chapter)&&(h.homestead.pinned=e,s=!0),!!s){if(["project","mastery","request-claim"].includes(n)){Ot("celebrate","task-complete");const o=n==="project"&&{3:" Your basket now holds 7 crops.",6:" Seed packets now contain 6 seeds at the same price.",12:" Tower water use is now 10% lower.",18:" The harvest festival display is installed."}[h.homestead.claimed.length];Be(xr(h)?"Master Grower! Your homestead and crop book are complete. New community requests await.":`Reward earned.${o||""}`)}if(Ye(`homestead_${n}`),at(),ga.render(h),["project","mastery","request-claim"].includes(n)){const o=!r&&xr(h),a=er.find(d=>d.id===e),c=h.homestead.claimed.length,l=n==="project"&&{3:"Basket expanded to 7 crops!",6:"Six seeds in every packet!",12:"10% less tower water use!",18:"Harvest festival unlocked!"}[c],u=o?"Master Grower!":n==="project"?a.title:n==="mastery"?`${De[e].label} mastery ${h.homestead.mastery[e]}/3`:"Community request complete!";hi.celebrate({title:u,detail:`+${h.coins-t} coins / +${h.xp-i} XP${l?`. ${l}`:""}${n==="mastery"?" / +2 seeds":""}`,major:o||n==="project"||n==="mastery"&&h.homestead.mastery[e]===3,rhythm:o||n==="project"&&c%3===0}),hi.coins(h.coins-t,Oa())}}}function Cf(){if(h.campaignComplete)return Fa();Bn.hidden=!0,Qn.hidden=!0,yn.hidden=!0,vi.hidden=!1,Na.setAttribute("aria-expanded","true"),ws(),wf()}function rr(){Bn.hidden=!0,h.market.built&&(Nt="market",vi.hidden=!0,Qn.hidden=!0,yn.hidden=!1,ws(),Mo(),h.tutorial.marketSeen||(h.tutorial.marketSeen=!0,Ye("market_seen")))}function hu(n=Nt){if(vt()&&!Nt&&h.carry?.kind==="starter")return Rn()?"Transplant":"Return";if(!Nt&&is())return"Deliver";if(!n)return h.carry?.kind==="starter"&&Rn()<=0?"Return":h.carry?.kind==="produce"&&h.carry.items.length>=Ht(h).basket&&h.market.built?is()?"Deliver":"Stage":pi()?"Guide":"Inspect";const e=pi();if(n==="vault")return"Seeds";if(n==="market"){const t=Nn(h)||hs();return h.market.built&&t&&kn(h,t).needed===0?"Deliver":h.market.built?"Orders":"Build"}if(n==="rack")return h.carry?.kind==="produce"?"Stage":"Inspect";if(n==="reservoir")return"Service";if(n==="filter")return h.hydro.lineClogged?"Clear clog":"Inspect";if(n==="workshop")return"Shop";if(n.startsWith("tower-")){const t=Number(n.split("-")[1]),i=h.towers[t];return i.built?i.repaired?h.carry?.kind==="starter"&&h.carry.sourceTower===t?"Return":Er(i,ze())&&!h.carry?"Pick up":"Plan":"Repair":"Build"}if(n.startsWith("bed-")){const t=Number(n.split("-")[1]);return h.carry?.kind==="starter"&&h.beds[t].plants.length>=h.beds[t].capacity&&Rn()<=0?"Return":h.carry?.kind==="starter"?"Transplant":h.beds[t].plants.some(i=>i.readyAt<=ze())?"Harvest":!Nt&&e&&e!==n?"Guide":"Inspect"}return"Inspect"}function Rf(){if(Rt||!Mn.hidden||!an.hidden||!zi.hidden||!xs.hidden)return;Lr();const n=!!Nt,e=Nt||Pf();if(vt()&&!n&&h.carry?.kind==="starter"){const i=pf()||`tower-${h.carry.sourceTower}`;return i===e?i.startsWith("bed-")?ro(Number(i.split("-")[1])):Ki(h.carry.sourceTower):Jt(i,!0)}if(!n&&is()){const i=Nn(h),r=i&&kn(h,i).needed===0?i:h.orders.find(s=>s.status==="waiting"&&kn(h,s).needed===0);return ba(h.orders.indexOf(r))}if(!e){if(h.carry?.kind==="starter"&&Rn()<=0){Be("Beds are full, so Pip is returning this starter to its tower."),Jt(`tower-${h.carry.sourceTower}`);return}if(h.carry?.kind==="produce"&&h.carry.items.length>=Ht(h).basket&&h.market.built){Be("Basket is full, so Pip is heading to the Harvest Rack."),Jt("rack");return}const i=pi();if(i){Jt(i,vt());return}Cf();return}if(e.startsWith("tower-")){const i=Number(e.split("-")[1]),r=h.towers[i];if(!r.built)return au(i);if(!r.repaired)return ou(i);if(h.carry?.kind==="starter"&&h.carry.sourceTower===i)return Ki(i);if(Er(r,ze())&&!h.carry)return io(i)}if(e.startsWith("bed-")){const i=Number(e.split("-")[1]);if(h.carry?.kind==="starter"&&h.beds[i].plants.length>=h.beds[i].capacity&&Rn()<=0)return Ki(h.carry.sourceTower);if(h.carry?.kind==="starter")return ro(i);if(h.beds[i].plants.some(r=>r.readyAt<=ze())){const r=Nn(h)?.crop;return so(i,r&&h.beds[i].plants.some(s=>s.crop===r&&s.readyAt<=ze())?r:null)}}if(e==="market"&&h.market.built){const i=Nn(h)||hs();return i&&kn(h,i).needed===0?ba(h.orders.indexOf(i)):rr()}if(e==="market"&&!h.market.built)return cu();if(e==="rack"&&h.carry?.kind==="produce")return oo();if(e==="filter"&&h.hydro.lineClogged)return yf();if(h.carry?.kind==="starter"&&Rn()<=0)return Ki(h.carry.sourceTower);const t=pi();if(!n&&t&&t!==e)return Jt(t,vt());bo(e)}function Pf(n=1.8){let e=null,t=n;return Object.entries(et).forEach(([i,r])=>{if(["coop","composter","rainTank"].includes(i)&&!h.farm.owned.includes(i)||i.startsWith("bed-")&&!h.beds[Number(i.split("-")[1])].built)return;const s=Math.hypot(Se.x-r.x,Se.z-r.z);s<t&&(e=i,t=s)}),e}function Jt(n,e=!1){if(["coop","composter","rainTank"].includes(n)&&!h.farm.owned.includes(n))return;const t=et[n];t&&(On=null,li=null,ai=n,ma=e,Se.target={x:t.x,z:t.z+(n==="market"?1.3:1.15)},cn(),!vt()&&Be(`Pip is heading to ${n.startsWith("tower")?`Tower ${Number(n.at(-1))+1}`:n.startsWith("bed")?`Grow Bed ${Number(n.at(-1))+1}`:n==="vault"?"the Seed Vault":n==="market"?"the Veg Stand":n==="rack"?"the Harvest Rack":n==="reservoir"?"the reservoir":n==="filter"?"the feed filter":Object.hasOwn(Oi,n)?`the ${Oi[n].label}`:"the farm shop"}.`))}function DM(n){const e=Number(n.split("-")[1]);if(n.startsWith("tower-")){if(h.carry?.kind==="starter"&&h.carry.sourceTower===e)return Ki(e),!0;const t=h.towers[e].queue.filter(i=>i.readyAt!==null&&i.readyAt<=ze());if(!h.carry&&t.length&&new Set(t.map(i=>i.crop)).size===1)return io(e),!0}if(n.startsWith("bed-")){if(h.carry?.kind==="starter")return ro(e),!0;const t=h.beds[e].plants.filter(r=>r.readyAt<=ze()),i=Nn(h)?.crop;if(t.length&&(new Set(t.map(r=>r.crop)).size===1||t.some(r=>r.crop===i)))return so(e,t.some(r=>r.crop===i)?i:t[0].crop),!0}return n==="rack"&&h.carry?.kind==="produce"?(oo(),!0):!1}function IM(n){if(Rt)return;let e=(fn.right?1:0)-(fn.left?1:0)+pa.x,t=(fn.down?1:0)-(fn.up?1:0)+pa.z;if(Se.target&&!e&&!t){const o=Se.target.x-Se.x,a=Se.target.z-Se.z,c=Math.hypot(o,a);if(c<.16){if(Se.target=null,ai){const l=ai;ai=null;const u=ma;ma=!1;const d=On;On=null;const p=li;if(li=null,l==="market"&&d){const f=h.orders.findIndex(g=>g.id===d&&g.status==="waiting");f>=0?lu(f):Be("That customer has left. Your produce is still in the basket."),an.hidden&&!vt()&&rr()}else if(l==="rack"&&p){const f=h.orders.find(g=>g.id===p&&g.status==="waiting");f&&Ma(f.crop,kn(h,f).load),rr()}else{const f=l.startsWith("tower-")&&h.carry?.kind==="starter"&&h.carry.sourceTower===Number(l.split("-")[1])&&Rn()<=0;f&&Ki(h.carry.sourceTower),vt()&&(f||u&&DM(l))||bo(l)}}}else e=o/c,t=a/c}else(e||t)&&(Se.target=null,ai=null,On=null,li=null);const i=!!(e||t);if(i){const o=Math.hypot(e,t);e/=Math.max(1,o),t/=Math.max(1,o),Se.x=It.clamp(Se.x+e*Se.speed*n,-13.8,13.8),Se.z=It.clamp(Se.z+t*Se.speed*n,-8.5,8.5),Se.pendingFacing=Math.atan2(e,t),Se.direction=Math.abs(e)>Math.abs(t)?e>0?"east":"west":t>0?"south":"north",St.rotation.y=It.lerp(St.rotation.y,Se.pendingFacing,Math.min(1,n*12))}St.position.x=Se.x,St.position.z=Se.z;const r=St.userData.parts;if(r){i&&(Se.gaitPhase+=Se.speed*n*1.65);const o=Math.sin(Se.gaitPhase),a=Math.min(1,n*14);if(r.body.position.y=i?Math.abs(o)*.014:Math.sin(performance.now()*.0018)*.005,r.body.rotation.x=0,r.legs.forEach((c,l)=>{const u=l?-o:o;c.rotation.x=It.lerp(c.rotation.x,i?-u*.4:0,a),r.knees[l].rotation.x=It.lerp(r.knees[l].rotation.x,i?Math.max(0,-u)*.38:0,a),r.boots[l].rotation.x=-c.rotation.x-r.knees[l].rotation.x*.7;const d=r.arms[l];d.rotation.x=It.lerp(d.rotation.x,h.carry?-.75:i?u*.28:0,a),d.rotation.z=(l?1:-1)*(h.carry?-.08:.08),r.elbows[l].rotation.x=It.lerp(r.elbows[l].rotation.x,h.carry?-.65:-.08,a)}),Se.actionTime>0){Se.actionTime-=n;const c=Math.sin((1-Se.actionTime/.72)*Math.PI);["plant","transplant","harvest"].includes(Se.action)&&(r.body.rotation.x=c*.22),["repair","service","build"].includes(Se.action)&&(r.arms[0].rotation.x=-1.2*c),Se.action==="sell"&&(r.arms[1].rotation.x=-1.25*c),Se.action==="celebrate"&&(r.arms[0].rotation.x=-1.5*c,r.arms[1].rotation.x=-1.5*c,r.body.position.y+=c*.13)}else r.body.rotation.x=0,Se.action=i?"run":"idle"}const s=Pf();Nt||(ys.textContent=hu(s))}function Ba(n,e=!1){const t=vt(),i=new U(Se.x*(t?.95:.55),.45,Se.z*(t?.9:.45));t&&!yn.hidden&&i.set(et.market.x+.3,.45,et.market.z+2.8),e||h.settings.reducedMotion?Jo.copy(i):Jo.lerp(i,1-Math.exp(-n*5));const s=t?It.clamp(_n/520,.45,1):1;Tt.position.copy(Jo).add(new U(7.7,13,14.3).multiplyScalar(s)),Tt.lookAt(Jo),Tt.zoom=e||h.settings.reducedMotion?Yn:It.lerp(Tt.zoom,Yn,1-Math.exp(-n*12));const o=t&&[Qn,yn,vi,Bn].find(f=>!f.hidden),a=t&&Fn>620&&innerWidth>innerHeight,c=o&&a?o.getBoundingClientRect().width*.5:0,l=o&&!a?o.getBoundingClientRect().height*.4:0,u=e||h.settings.reducedMotion?1:1-Math.exp(-n*6),d=It.lerp(Tt.view?.enabled?Tt.view.offsetX:0,c,u),p=It.lerp(Tt.view?.enabled?Tt.view.offsetY:0,l,u);d>.1||p>.1?Tt.setViewOffset(Fn,_n,d,p,Fn,_n):Tt.clearViewOffset(),Tt.updateProjectionMatrix(),Tt.updateMatrixWorld()}function Ss(n){Yn=It.clamp(n,.7,vt()?1.3:1.55),te("#zoomOut").disabled=Yn<=.7001,te("#zoomIn").disabled=Yn>=(vt()?1.3:1.55)-1e-4}function UM(){_t.updateMatrixWorld(!0);const n=en.getBoundingClientRect(),e=[Na,to,Jh,yr,te(".camera-tools"),te("#landscapeNotice"),Qn,yn,vi,Bn,...vt()?[te("#thumbstick"),ys,te("#homesteadButton")]:[]].filter(u=>!u.hidden&&u.getClientRects().length&&getComputedStyle(u).visibility!=="hidden").map(u=>{const d=u.getBoundingClientRect();return{left:d.left-n.left,top:d.top-n.top,right:d.right-n.left,bottom:d.bottom-n.top}}),t=pi(),i=new Set(ka()),r=new U;function s(u,d,p,f,g){const _={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(const v of[-p,p])for(const m of[0,f])for(const S of[-g,g]){r.set(u+v,m,d+S).project(Tt);const y=(r.x+1)*Fn/2,x=(1-r.y)*_n/2;_.left=Math.min(_.left,y),_.right=Math.max(_.right,y),_.top=Math.min(_.top,x),_.bottom=Math.max(_.bottom,x)}return _}wl=s(Se.x,Se.z,.65,2.15,.45),e.push(wl);for(const u of _t.children)u.userData.customerIndex!==void 0&&e.push(s(u.position.x,u.position.z,.45,2.2,.3));const o=[];for(const u of no){const d=u.userData.worldLabel;u.getWorldPosition(r);const p=Math.hypot(r.x-Se.x,r.z-Se.z),f=-r.clone().applyMatrix4(Tt.matrixWorldInverse).z;if(r.project(Tt),u.visible=!1,u.labelElement.hidden=!0,p>(vt()?4.8:5.4)||f<=0||r.z<-1||r.z>1)continue;const g=(r.x+1)*Fn/2,_=(1-r.y)*_n/2,v={left:g-d.width/2,right:g+d.width/2,top:_-d.height/2,bottom:_+d.height/2};if(v.left<6||v.right>Fn-6||v.top<6||v.bottom>_n-6)continue;const m=u.userData.interactiveId;if(u.labelElement.classList.toggle("needs-attention",i.has(m)),!yn.hidden&&m!=="market"&&m!=="rack")continue;const S=(m===Nt?200:m===t?100:0)+(/ready/i.test(d.text)?20:0)-p;o.push({label:u,data:d,box:v,depth:f,priority:S})}o.sort((u,d)=>d.priority-u.priority);const a=(u,d)=>u.left<d.right+5&&u.right>d.left-5&&u.top<d.bottom+5&&u.bottom>d.top-5;let c=0;const l=new Set;for(const{label:u,data:d,box:p,depth:f}of o){const g=u.userData.interactiveId;if(c>=(vt()?3:5)||l.has(g))continue;const _=[0,-32,32].find(v=>{const m={...p,top:p.top+v,bottom:p.bottom+v};return m.top>=6&&m.bottom<=_n-6&&!e.some(S=>a(m,S))});_!==void 0&&(p.top+=_,p.bottom+=_,u.visible=!0,u.labelElement.hidden=!1,u.labelElement.style.transform=`translate(${Math.round(p.left)}px, ${Math.round(p.top)}px)`,d.bounds=p,e.push(p),l.add(g),c+=1)}}function NM(n){const e=Kn(h);By(h,n,ze(),(1-$n(h.farm,"rainTank")*.1)*Ht(h).water),e&&ky(h,n,ze())&&(Be("Feed filter clogged. Check the delivery line before changing the nutrient batch.",6500),Ye("feedline_clogged"))}function kM(n=.5){if(!h.market.built)return;const e=h.orders.length;h.orders.forEach((r,s)=>{r.status==="waiting"&&r.expiresAt<=ze()&&r.id!==h.selectedOrderId&&r.id!==On&&iu(r,s,!1)}),h.orders=h.orders.filter(r=>r.id===h.selectedOrderId||r.id===On||r.expiresAt>ze());const t=Zx(h,n/eo,mf);e!==h.orders.length||t?(Ye(),at()):yn.hidden||Mo()}function Lf(n){const e=vo[n.chapter];Te.chapterResultKicker.textContent=n.reward.campaignComplete?"Homestead foundations complete":`Chapter ${e.number} complete`,Te.chapterResultTitle.textContent=n.reward.campaignComplete?"The Pro Yard is thriving.":n.chapter===0?"The Homestead is growing.":"Split Flow is balanced.",Te.chapterResultSummary.textContent=n.reward.campaignComplete?"Your four-tower farm is open. Complete 18 homestead projects and earn 15 crop mastery badges to become a Master Grower.":n.chapter===0?"The first tower and Veg Stand are back in business.":"Three production lanes are ready for the Pro Yard build.",Te.chapterCoins.textContent=`+${n.reward.coins||0}`,Te.chapterXp.textContent=`+${n.reward.xp||0}`,Te.chapterUnlock.textContent=n.reward.campaignComplete?"Homestead projects":n.chapter===0?"Split Flow":"Pro Yard",te("#continueChapter").textContent=n.reward.campaignComplete?"Grow the homestead":"Continue",an.hidden=!1,Rt=!0,hn(),Li.stop(),hi.chapter(an,!!n.reward.campaignComplete),te("#continueChapter").focus(),Ye("chapter_complete"),jn(n.reward.campaignComplete?"campaign_complete":"campaign_chapter_complete",{chapter:n.chapter+1,coins:h.coins,xp:h.xp})}function at(){du(),wf(),Ef(),!Qn.hidden&&Nt&&bo(Nt,!1),yn.hidden||Mo(),xo()}function fs(){Fn=Math.max(1,en.clientWidth),_n=Math.max(1,en.clientHeight);const n=_o?1:va==="desktop"?1.55:_s?1.25:1.15;yt.setPixelRatio(Math.max(1,Math.min(window.devicePixelRatio||1,n))),yt.setSize(Fn,_n,!1),Tt.aspect=Fn/_n,Tt.updateProjectionMatrix(),Ss(Yn),Ba(1,!0)}function hn(){Kh?.reset(),Object.keys(fn).forEach(n=>{fn[n]=!1}),te(".campaign-controls").querySelectorAll("[data-move]").forEach(n=>n.classList.remove("is-active"))}function fu(n){if(Rt=n,document.body.classList.toggle("is-paused",Rt),Hy.hidden=!Rt,Rt){hn(),Li.stop(),Ye("pause");return}Lr()}function Df(n){const e=Math.min(.05,(n-Fd)/1e3||0);Fd=n,en.clientWidth>0&&en.clientHeight>0&&(en.clientWidth!==Fn||en.clientHeight!==_n)&&fs(),!Rt&&Mn.hidden&&an.hidden&&(IM(e),NM(e),dM(e),hM(e),Ba(e),n-Bd>500&&(Bd=n,h=Rr(h),kM(),du(),Ef(),af()!==Qh&&xo(),Jy(),!Qn.hidden&&Nt&&bo(Nt,!1)),n-Zh>5e3&&Ye(),oa&&n>oa&&(to.textContent=Zn(h)?.detail||"The homestead is ready for its next grow.",oa=0,to.classList.remove("is-active"))),eM(),UM(),yt.render(fi,Tt),Ec+=1,n-Sc>=3e3&&(Ec/(n-Sc)*1e3<32&&va==="desktop"&&(va="adaptive",yt.shadowMap.enabled=!1,ei.castShadow=!1,yt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.15)),fs()),Sc=n,Ec=0),requestAnimationFrame(Df)}function OM(n){const e=yt.domElement.getBoundingClientRect();Ac.x=(n.clientX-e.left)/e.width*2-1,Ac.y=-((n.clientY-e.top)/e.height)*2+1,Tc.setFromCamera(Ac,Tt);const i=Tc.intersectObjects(_t.children,!0).find(o=>o.object.visible&&(o.object.userData.interactiveId||o.object.userData.instanceTargets?.[o.instanceId]));if(i){let o=i.object;for(;o&&!o.userData.orderId;)o=o.parent;return{id:i.object.userData.interactiveId||i.object.userData.instanceTargets[i.instanceId],orderId:o?.userData.orderId}}const r=new Yi(new U(0,1,0),0),s=new U;return Tc.ray.intersectPlane(r,s)?{point:s}:null}function st(){const n=Zn(h),e=Ry(h);return{version:h.version,chapter:h.chapter,taskIndex:h.taskIndex,taskId:n?.id||null,coins:h.coins,xp:h.xp,level:h.level,challengeUnlocked:h.challengeUnlocked,campaignComplete:h.campaignComplete,proPip:h.proPip,unlockedCrops:[...h.unlockedCrops],towersBuilt:h.towers.filter(t=>t.built).length,bedsBuilt:h.beds.filter(t=>t.built).length,marketBuilt:h.market.built,marketLevel:h.market.level,marketStage:vs(h),marketOffer:Bi(h),visitorCapacity:Kl(h),milestones:yo(n),selectedObject:Nt,selectedOrderId:h.selectedOrderId,saleAnimations:zs.length,pendingDeliveryId:On,pendingRackOrderId:li,pipTarget:Se.target,queueCapacities:h.towers.map(t=>t.queueCapacity),irrigationUpgrades:h.towers.map(t=>t.irrigationUpgraded),specializations:h.towers.map(t=>t.specialization),queueCount:h.towers.reduce((t,i)=>t+i.queue.length,0),gardenCount:h.beds.reduce((t,i)=>t+i.plants.length,0),seeds:{...h.seeds},rack:{...h.rack},carry:h.carry?JSON.parse(JSON.stringify(h.carry)):null,orders:h.orders.map(t=>({...t})),featuredOrder:hs()?{...hs()}:null,stats:JSON.parse(JSON.stringify(h.stats)),ledger:e,openBedCount:Rn(),taskDrawerOpen:!vi.hidden,interactionOpen:!Qn.hidden,orderDrawerOpen:!yn.hidden,welcomeVisible:!Mn.hidden,chapterResultVisible:!an.hidden,guideTarget:pi(),actionLabel:ys.textContent,marketChipVisible:!yr.hidden,marketChipText:yr.hidden?"":yr.textContent.trim().replace(/\s+/g," "),paused:Rt,pipPosition:{x:Number(Se.x.toFixed(2)),z:Number(Se.z.toFixed(2))},pipDirection:Se.direction,pipHeight:Number(new Fi().setFromObject(St).getSize(new U).y.toFixed(3)),leafEarCount:St.userData.parts?.leafEars?.length||0,activeHudCoverage:FM(),coreTextMinimum:BM(),savePresent:!!localStorage.getItem(go),performanceTier:va,renderCalls:yt.info.render.calls,renderTriangles:yt.info.render.triangles}}function FM(){const n=en.getBoundingClientRect(),t=["#objectiveBar","#campaignMessage","#carryChip","#marketChip"].map(i=>te(i)).filter(i=>i&&!i.hidden&&i.getClientRects().length).reduce((i,r)=>{const s=r.getBoundingClientRect(),o=Math.max(0,Math.min(s.right,n.right)-Math.max(s.left,n.left)),a=Math.max(0,Math.min(s.bottom,n.bottom)-Math.max(s.top,n.top));return i+o*a},0);return Number((t/Math.max(1,n.width*n.height)).toFixed(3))}function BM(){const n=[...document.querySelectorAll("#objectiveTitle,#campaignMessage,#actionButton,#marketChip strong,#carryContents,#coinValue,#levelValue,#xpValue,#chapterValue,#interactionPanel>p,.crop-button span,.crop-button small,.queue-slot time,.status-strip,.economy-command span,.order-card h3,.order-reward,.order-actions button,.task-row,.primary-task p")].filter(e=>e.getClientRects().length);return Math.min(...n.map(e=>Number.parseFloat(getComputedStyle(e).fontSize)))}function zM(){h.towers.forEach(n=>n.queue.forEach((e,t)=>{e.startedAt=ze()-1e3,e.readyAt=ze()-1})),Ye(),at()}function HM(){h.beds.forEach(n=>n.plants.forEach(e=>{e.plantedAt=ze()-1e3,e.readyAt=ze()-1})),Ye(),at()}function VM(n=500){h.coins+=n,Ye(),at()}Wy();at();fs();Mn.hidden=h.tutorial.welcomeSeen;h.tutorial.welcomeSeen?jn("campaign_resume",{chapter:h.chapter+1,task:Zn(h)?.id||"complete"}):Rt=!0;Na.addEventListener("click",()=>h.campaignComplete?Fa():vi.hidden?Cf():cn());te("#homesteadButton").addEventListener("click",()=>Bn.hidden?Fa():cn());yr.addEventListener("click",()=>h.market.built?rr():Jt("market"));te("#orderMarketUpgrade").addEventListener("click",()=>{uu(),Mo()});te("#sellFarmEggs").addEventListener("click",()=>{Math.hypot(Se.x-et.market.x,Se.z-et.market.z)>=3.6?Jt("market"):Vs("sell-eggs")});te("#closeTasks").addEventListener("click",cn);te("#closeInteraction").addEventListener("click",cn);te("#closeOrders").addEventListener("click",cn);te("#focusTaskButton").addEventListener("click",()=>Jt(pi()));ys.addEventListener("click",Rf);te("#beginCampaign").addEventListener("click",()=>{h.tutorial.welcomeSeen=!0,Mn.hidden=!0,Rt=!1,Lr(),Ye("campaign_start"),jn("campaign_start",{chapter:h.chapter+1,task:Zn(h)?.id}),Be("Repair Tower 1 to make the first permanent improvement.")});te("#pauseButton").addEventListener("click",()=>fu(!0));te("#resumeButton").addEventListener("click",()=>fu(!1));let If=!1;te("#settingsButton").addEventListener("click",()=>{If=Rt,Rt=!0,Li.stop(),hn(),Ye("settings_open"),zi.hidden=!1,te("#highContrastSetting").checked=h.settings.highContrast,te("#reducedMotionSetting").checked=h.settings.reducedMotion,te("#musicSetting").value=String(Math.round(h.settings.musicVolume*100)),te("#effectsSetting").value=String(Math.round(h.settings.effectsVolume*100)),Te.musicValue.textContent=`${Math.round(h.settings.musicVolume*100)}%`,Te.effectsValue.textContent=`${Math.round(h.settings.effectsVolume*100)}%`});function pu(){GM.cancelImport(),zi.hidden=!0,Rt=If,hn(),Ye("settings")}te("#closeSettings").addEventListener("click",pu);te("#settingsDone").addEventListener("click",pu);te("#retrySave").addEventListener("click",()=>Ye("retry"));const GM=Ly(()=>h,n=>{h=n});te("#saveWarning").addEventListener("click",()=>te("#settingsButton").click());te("#highContrastSetting").addEventListener("change",n=>{h.settings.highContrast=n.target.checked,du()});te("#reducedMotionSetting").addEventListener("change",n=>{h.settings.reducedMotion=n.target.checked,n.target.checked&&hi.clearMotion()});te("#musicSetting").addEventListener("input",n=>{h.settings.musicVolume=Number(n.target.value)/100,Te.musicValue.textContent=`${n.target.value}%`,bs()});te("#effectsSetting").addEventListener("input",n=>{h.settings.effectsVolume=Number(n.target.value)/100,Te.effectsValue.textContent=`${n.target.value}%`,bs()});te("#soundButton").addEventListener("click",()=>{h.settings.soundEnabled=h.settings.soundEnabled===!1,bs(),Ye("sound_toggle"),h.settings.soundEnabled&&Lr()});bs();te("#resetFarm").addEventListener("click",()=>{zi.hidden=!0,xs.hidden=!1});te("#cancelReset").addEventListener("click",()=>{xs.hidden=!0,zi.hidden=!1});te("#confirmReset").addEventListener("click",()=>{h=Cy(),location.reload()});te("#continueChapter").addEventListener("click",()=>{an.hidden=!0,hi.clearMotion(),Us=null,Rt=!1,Ot("celebrate","task-complete"),Ye("chapter_continue"),Be(Zn(h)?.story||"The homestead is ready for its next grow."),h.campaignComplete&&Fa()});te("#zoomOut").addEventListener("click",()=>Ss(Yn/1.15));te("#zoomIn").addEventListener("click",()=>Ss(Yn*1.15));te("#recenter").addEventListener("click",()=>{Ss(1),Ba(1,!0)});en.addEventListener("wheel",n=>{if(Rt||!Mn.hidden||!an.hidden)return;n.preventDefault();const e=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?_n:1);Ss(Yn*Math.exp(-It.clamp(e,-160,160)*.0015))},{passive:!1});function Uf(n){if(Rt||!Mn.hidden||!an.hidden)return;Lr();const e=OM(n);if(e)if(e.orderId){const t=h.orders.findIndex(i=>i.id===e.orderId&&i.status==="waiting");t>=0&&(vf(t),kn(h,h.orders[t]).needed===0?ba(t):rr())}else e.id?Jt(e.id,vt()):e.point&&(cn(),ai=null,On=null,li=null,Se.target={x:It.clamp(e.point.x,-13.8,13.8),z:It.clamp(e.point.z,-8.5,8.5)})}Kh=Uy({canMove:()=>!Rt&&Mn.hidden&&an.hidden&&zi.hidden&&xs.hidden,onStart:()=>{(Nt||[Qn,yn,vi,Bn].some(n=>!n.hidden))&&cn(),hi.dismiss(),hn(),Lr(),Se.target=null,ai=null,On=null,li=null,ma=!1},onMove:(n,e)=>{pa.x=n*.88+e*.47,pa.z=e*.88-n*.47},onLayout:()=>{hn(),fs()},closePanels:cn});Ny({onOpen:()=>{const n=Rt;return Rt=!0,hn(),Li.stop(),Ye("display_options"),()=>{Rt=n,hn()}},onExit:()=>{hn(),Li.stop(),Ye("display_exit"),Mn.hidden&&an.hidden&&zi.hidden&&xs.hidden&&(fu(!0),te("#pauseReason").textContent="Your farm is saved. Resume when ready, or return to HydroPip.",te("#resumeButton").focus())},onLeave:()=>{hn(),Li.stop(),Ye("leave_game")},onResize:()=>{hn(),fs()}});const Ii=new Map;let Gs=null,El=!1;en.addEventListener("pointerdown",n=>{if(n.pointerType!=="touch")return Uf(n);if(en.setPointerCapture(n.pointerId),Ii.set(n.pointerId,{x:n.clientX,y:n.clientY,startX:n.clientX,startY:n.clientY}),Ii.size===2){const[e,t]=[...Ii.values()];Gs={distance:Math.max(1,Math.hypot(e.x-t.x,e.y-t.y)),zoom:Yn},El=!0,Se.target=null,ai=null,On=null,li=null}});en.addEventListener("pointermove",n=>{const e=Ii.get(n.pointerId);if(e&&(e.x=n.clientX,e.y=n.clientY,Ii.size===2&&Gs&&!Rt&&Mn.hidden&&an.hidden)){const[t,i]=[...Ii.values()];Ss(Gs.zoom*Math.hypot(t.x-i.x,t.y-i.y)/Gs.distance)}});function Nf(n){const e=Ii.get(n.pointerId);e&&!El&&n.type==="pointerup"&&Math.hypot(n.clientX-e.startX,n.clientY-e.startY)<10&&Uf(n),Ii.delete(n.pointerId),Ii.size||(El=!1,Gs=null)}en.addEventListener("pointerup",Nf);en.addEventListener("pointercancel",Nf);document.addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(e==="escape"){if(n.preventDefault(),!zi.hidden){pu();return}cn();return}n.target instanceof HTMLElement&&n.target.matches("button,input,a,textarea,select")||(["arrowleft","arrowright","arrowup","arrowdown"," "].includes(e)&&n.preventDefault(),(e==="arrowleft"||e==="a")&&(fn.left=!0),(e==="arrowright"||e==="d")&&(fn.right=!0),(e==="arrowup"||e==="w")&&(fn.up=!0),(e==="arrowdown"||e==="s")&&(fn.down=!0),n.code==="Space"&&!n.repeat&&Rf())});document.addEventListener("keyup",n=>{const e=n.key.toLowerCase();(e==="arrowleft"||e==="a")&&(fn.left=!1),(e==="arrowright"||e==="d")&&(fn.right=!1),(e==="arrowup"||e==="w")&&(fn.up=!1),(e==="arrowdown"||e==="s")&&(fn.down=!1)});document.querySelectorAll("[data-move]").forEach(n=>{const e=n.dataset.move,t=i=>{fn[e]=i,n.classList.toggle("is-active",i)};n.addEventListener("pointerdown",i=>{i.preventDefault(),n.setPointerCapture(i.pointerId),t(!0)}),n.addEventListener("pointerup",()=>t(!1)),n.addEventListener("pointercancel",()=>t(!1)),n.addEventListener("pointerleave",()=>t(!1))});window.addEventListener("blur",hn);window.addEventListener("resize",fs);window.addEventListener("pagehide",()=>{hn(),Ye("pagehide")});document.addEventListener("visibilitychange",()=>{document.hidden?(hn(),Ye("visibility")):(h=Rr(tu()),bs(),at())});jh&&(window.__HYDROPIP_CAMPAIGN_TEST__={homesteadAction:Af,homesteadView(){return{...h.homestead,complete:xr(h),perks:Ht(h),active:Xn(h).map(n=>({id:n.id,ready:Pa(h,n),goals:po(h,n)}))}},neighborhoodView(){return Qr.snapshot()},neighborhoodEvent(n,e=0){Qr.start(n);for(let t=0;t<e;t+=.05)Qr.update(.05,{marketBuilt:h.market.built,reducedMotion:h.settings.reducedMotion});return Qr.snapshot()},farmEquipmentView(){const n=_t.getObjectByName("farm coop");return{owned:h.farm.owned,hens:(n?.userData.hens||[]).map(e=>({position:e.position.toArray(),turn:e.rotation.y}))}},layerScreenPoint(n,e){const t=et[`tower-${n}`].clone();t.y=.52+e*.61+.4,t.x+=e%2?.16:-.16,t.z+=.29-e*.18,t.project(Tt);const i=yt.domElement.getBoundingClientRect();return{x:i.left+(t.x+1)*i.width/2,y:i.top+(1-t.y)*i.height/2}},farmLayout(){return{positions:Object.fromEntries(Object.entries(et).map(([n,e])=>[n,{x:e.x,z:e.z}])),attention:ka(),labels:no.filter(n=>n.visible).map(n=>({id:n.userData.interactiveId,text:n.userData.worldLabel.text,distance:Math.hypot(n.getWorldPosition(new U).x-Se.x,n.getWorldPosition(new U).z-Se.z)})),feedline:!!_t.getObjectByName("reservoir tower feedline"),lineClogged:h.hydro.lineClogged}},snapshot:st,reservoirView(){return py(_t.getObjectByName("water reservoir"))},setWater(n){return h.hydro.water=It.clamp(n,0,100),Ye("test-water"),st()},viewState(){const n=yt.domElement.getBoundingClientRect(),e=Tt.projectionMatrix.elements;return{aspect:Tt.aspect,width:Fn,height:_n,canvasWidth:n.width,canvasHeight:n.height,bufferWidth:yt.domElement.width,bufferHeight:yt.domElement.height,squareRatio:e[0]*n.width/(e[5]*n.height),zoom:Tt.zoom,targetZoom:Yn,pipBounds:wl,direction:Tt.getWorldDirection(new U).toArray(),labels:no.filter(t=>t.visible).map(t=>({...t.userData.worldLabel,opacity:1}))}},customerView(){const n=new Mh;return _t.children.filter(e=>e.userData.customerIndex!==void 0).map(e=>{const t=e.localToWorld(new U(0,1.65,0)).project(Tt);n.setFromCamera(new he(t.x,t.y),Tt);let i=n.intersectObjects(_t.children,!0).find(r=>r.object.visible)?.object;for(;i&&i.parent!==_t;)i=i.parent;return{index:e.userData.customerIndex,x:(t.x+1)*Fn/2,y:(1-t.y)*_n/2,unoccluded:i===e}})},focusObject:Jt,characterPortrait(n=.22){const e=new Bl;e.background=new ct(8894381),e.add(new ql(16775142,6585696,1.3));const t=new Aa(16773330,1.5);t.position.set(-3,5,5),e.add(t);const i=Ch(h.proPip);i.rotation.y=n,e.add(i);const r=new gn(30,.8,.1,20);r.position.set(0,1.8,6),r.lookAt(0,1.23,0);const s=480,o=600,a=new Ui(s,o);a.texture.colorSpace=Qt;const c=yt.getRenderTarget();try{yt.setRenderTarget(a),yt.render(e,r);const l=new Uint8Array(s*o*4);yt.readRenderTargetPixels(a,0,0,s,o,l);const u=document.createElement("canvas");u.width=s,u.height=o;const d=u.getContext("2d"),p=d.createImageData(s,o);for(let f=0;f<o;f++)p.data.set(l.subarray(f*s*4,(f+1)*s*4),(o-f-1)*s*4);return d.putImageData(p,0,0),u.toDataURL("image/png")}finally{yt.setRenderTarget(c),a.dispose(),Di(i)}},characterRig(){St.updateMatrixWorld(!0);const n=St.userData.parts,e=t=>t.getWorldPosition(new U).toArray();return{handsAttached:n.hands.every((t,i)=>t.parent===n.elbows[i]&&n.elbows[i].parent===n.arms[i]),bootsAttached:n.boots.every((t,i)=>t.parent===n.knees[i]&&n.knees[i].parent===n.legs[i]),overalls:!!St.getObjectByName("farmer overalls"),growingSuit:n.farmerSuit.visible,faceFrame:!!St.getObjectByName("Pip head"),earPieces:n.headsetCups.length,eyeHighlights:n.eyes.length,emblem:!!St.getObjectByName("HydroPip shirt emblem"),belt:n.belt.visible,hands:n.hands.map(e),feet:n.boots.map(e),elbows:n.elbows.map(e),shoulders:n.arms.map(t=>t.rotation.toArray().slice(0,3)),bodyLift:n.body.position.y,leaves:n.leafEars.length,height:new Fi().setFromObject(St).getSize(new U).y}},renderedCrops(){const n=[];return _t.traverse(e=>{if(!e.userData.growthTiming)return;const t=e.children.filter(i=>i.geometry?.type==="ExtrudeGeometry");n.push({crop:e.userData.crop,location:e.userData.interactiveId,stage:e.userData.growthStage,scale:e.userData.growthScale??e.scale.x,visibleFruit:e.children.filter(i=>i.userData.ripeningFruit&&i.visible).reduce((i,r)=>i+(r.isInstancedMesh?r.count*r.userData.fruitPerInstance:1),0),instances:e.userData.plantingPlacements?.length||1,layer:e.userData.layer??null,jobId:e.userData.jobId??null,leaves:(e.userData.foliageMaterials||t.map(i=>i.material)).map(i=>({r:i.color.r,g:i.color.g,b:i.color.b}))})}),n},dismissWelcome(){return h.tutorial.welcomeSeen=!0,Mn.hidden=!0,Rt=!1,Ye(),st()},reset(){return h=Ua(),h.tutorial.welcomeSeen=!0,Rt=!1,Ye(),at(),st()},reloadState(){return h=Rr(tu()),at(),st()},grantCoins:VM,repairTower(n=0){return ou(n),st()},buildTower(n){return au(n),st()},buildMarket(){return cu(),st()},collectSeeds(n){return uf(n),st()},rescueSeeds(){return df(),st()},expandVault(){return hf(),st()},queueCrop(n,e,t=null){return ff(n,e,t),st()},matureTowers(){return zM(),st()},pickupStarter(n,e=null){return io(n,e),st()},returnStarter(n){return Ki(n),st()},transplant(n){return ro(n),st()},matureBeds(){return HM(),st()},harvest(n,e=null){return so(n,e),st()},stageProduce(){return oo(),st()},loadRack(n,e=5){return Ma(n,e),st()},upgradeQueue(n){return _f(n),st()},upgradeBed(n){return xf(n),st()},upgradeMarket(){return uu(),st()},buyCosmetic(n){return bf(n),st()},buyFarmUpgrade(n){return Tf(n),st()},farmAction(n,e){return Vs(n,e),st()},serviceHydro(n){return Mf(n),st()},forceOrders(n=["lettuce","basil","lettuce"]){return h.orders=n.slice(0,3).map((e,t)=>({...mf(t),slot:t,crop:e,amount:1,reward:De[e].coinValue+10})),Ye(),at(),st()},grantProduce(n,e=1){if(!De[n])return st();h.carry?.kind==="starter"&&(h.carry=null),h.carry||(h.carry={kind:"produce",items:[]});let t=0;for(let i=0;i<e&&h.carry.items.length<Ht(h).basket;i+=1)h.carry.items.push(n),t+=1;return h.stats.planted+=t,h.stats.transplanted+=t,h.stats.harvested+=t,h.stats.byCropQueued[n]+=t,h.stats.byCropHarvested[n]+=t,Ye(),at(),st()},grantStarter(n="lettuce",e=0){return De[n]&&(h.carry={kind:"starter",crop:n,quality:1,sourceTower:e,sourceLayer:mo(h.towers[e])[0],job:{id:crypto.randomUUID(),crop:n,queuedAt:ze(),startedAt:ze(),readyAt:ze(),quality:1}},h.stats.planted+=1,h.stats.byCropQueued[n]+=1,Ye(),at()),st()},fillBeds(){return h.beds.filter(n=>n.built).forEach(n=>{for(;n.plants.length<n.capacity;)n.plants.push({id:crypto.randomUUID(),crop:"lettuce",plantedAt:ze(),readyAt:ze()+9999999,quality:1}),h.stats.planted+=1,h.stats.transplanted+=1,h.stats.byCropQueued.lettuce+=1}),Ye(),at(),st()},deliver(n){return lu(n),st()},reject(n){return gf(n),st()},openOrders(){return rr(),st()},showResult(n=11){return Lf(An[Math.max(0,Math.min(An.length-1,n))]),st()},showcasePip(n="south"){const e={south:0,east:Math.PI/2,north:Math.PI,west:-Math.PI/2};return n in e&&(Se.direction=n,Se.pendingFacing=e[n],St.rotation.y=e[n],Se.x=0,Se.z=-.25,Se.target=null,ai=null,cn(),Ba(1,!0)),st()},setTask(n){return h.taskIndex=Math.max(0,Math.min(An.length,n)),h.chapter=An[h.taskIndex]?.chapter??2,Ye(),at(),st()},save(){return Ye("test"),st()},rawState(){return JSON.parse(JSON.stringify(h))}});window.__HYDROPIP_CAMPAIGN_READY__=!0;requestAnimationFrame(Df);
