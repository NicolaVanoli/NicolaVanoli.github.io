var L0=Object.defineProperty;var D0=(e,t,n)=>t in e?L0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Xt=(e,t,n)=>D0(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="183",nr={ROTATE:0,DOLLY:1,PAN:2},tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},I0=0,Ru=1,U0=2,so=1,N0=2,qr=3,ts=0,fn=1,Ai=2,Ci=0,ir=1,Cu=2,Pu=3,Lu=4,F0=5,ms=100,O0=101,B0=102,k0=103,z0=104,G0=200,V0=201,H0=202,W0=203,jl=204,Kl=205,X0=206,Y0=207,q0=208,j0=209,K0=210,Z0=211,$0=212,J0=213,Q0=214,Zl=0,$l=1,Jl=2,or=3,Ql=4,tc=5,ec=6,nc=7,zf=0,tg=1,eg=2,li=0,Gf=1,Vf=2,Hf=3,lh=4,Wf=5,Xf=6,Yf=7,qf=300,As=301,lr=302,nl=303,il=304,To=306,ic=1e3,Ri=1001,sc=1002,Je=1003,ng=1004,wa=1005,rn=1006,sl=1007,_s=1008,yn=1009,jf=1010,Kf=1011,ea=1012,ch=1013,ui=1014,ri=1015,Li=1016,hh=1017,uh=1018,na=1020,Zf=35902,$f=35899,Jf=1021,Qf=1022,qn=1023,Di=1026,vs=1027,tp=1028,dh=1029,cr=1030,fh=1031,ph=1033,ro=33776,ao=33777,oo=33778,lo=33779,rc=35840,ac=35841,oc=35842,lc=35843,cc=36196,hc=37492,uc=37496,dc=37488,fc=37489,pc=37490,mc=37491,gc=37808,_c=37809,vc=37810,xc=37811,Mc=37812,Sc=37813,Ec=37814,yc=37815,bc=37816,Tc=37817,Ac=37818,wc=37819,Rc=37820,Cc=37821,Pc=36492,Lc=36494,Dc=36495,Ic=36283,Uc=36284,Nc=36285,Fc=36286,ig=3200,ep=0,sg=1,Zi="",En="srgb",hr="srgb-linear",po="linear",re="srgb",Os=7680,Du=519,rg=512,ag=513,og=514,mh=515,lg=516,cg=517,gh=518,hg=519,Iu=35044,Uu="300 es",ai=2e3,ia=2001;function ug(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function sa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function dg(){const e=sa("canvas");return e.style.display="block",e}const Nu={};function Fu(...e){const t="THREE."+e.shift();console.log(t,...e)}function np(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function It(...e){e=np(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Zt(...e){e=np(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function mo(...e){const t=e.join(" ");t in Nu||(Nu[t]=!0,It(...e))}function fg(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const pg={[Zl]:$l,[Jl]:ec,[Ql]:nc,[or]:tc,[$l]:Zl,[ec]:Jl,[nc]:Ql,[tc]:or};class Ps{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],co=Math.PI/180,Oc=180/Math.PI;function ua(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[e&255]+en[e>>8&255]+en[e>>16&255]+en[e>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function mg(e,t){return(e%t+t)%t}function rl(e,t,n){return(1-n)*e+n*t}function Or(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function cn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const gg={DEG2RAD:co};class Ft{constructor(t=0,n=0){Ft.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class es{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==p||h!==_){let m=l*u+c*p+h*_+d*M;m<0&&(u=-u,p=-p,_=-_,M=-M,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),T=Math.sin(S);f=Math.sin(f*S)/T,o=Math.sin(o*S)/T,l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+M*o;const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[n]=o*_+h*d+l*p-c*u,t[n+1]=l*_+h*u+c*d-o*p,t[n+2]=c*_+h*p+o*u-l*d,t[n+3]=h*_-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"YZX":this._x=u*h*d+c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d-u*p*_;break;case"XZY":this._x=u*h*d-c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d+u*p*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,n=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ou.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ou.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new U,Ou=new es;class kt{constructor(t,n,i,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c)}set(t,n,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],_=i[8],M=s[0],m=s[3],f=s[6],S=s[1],T=s[4],b=s[7],C=s[2],A=s[5],L=s[8];return r[0]=a*M+o*S+l*C,r[3]=a*m+o*T+l*A,r[6]=a*f+o*b+l*L,r[1]=c*M+h*S+d*C,r[4]=c*m+h*T+d*A,r[7]=c*f+h*b+d*L,r[2]=u*M+p*S+_*C,r[5]=u*m+p*T+_*A,r[8]=u*f+p*b+_*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=n*d+i*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*a)*M,t[3]=u*M,t[4]=(h*n-s*l)*M,t[5]=(s*r-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(a*n-i*r)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(ol.makeScale(t,n)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,n){return this.premultiply(ol.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new kt,Bu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _g(){const e={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zi?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[hr]:{primaries:t,whitePoint:i,transfer:po,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:i,transfer:re,toXYZ:Bu,fromXYZ:ku,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),e}const $t=_g();function Pi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function sr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Bs;class vg{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bs===void 0&&(Bs=sa("canvas")),Bs.width=t.width,Bs.height=t.height;const s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Bs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=sa("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xg=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=ua(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ll(s[a].image)):r.push(ll(s[a]))}else r=ll(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function ll(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?vg.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let Mg=0;const cl=new U;class an extends Ps{constructor(t=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Ri,s=Ri,r=rn,a=_s,o=qn,l=yn,c=an.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=ua(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){It(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){It(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ic:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ic:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=qf;an.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,n=0,i=0,s=1){Te.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],_=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,b=(p+1)/2,C=(f+1)/2,A=(h+u)/4,L=(d+M)/4,v=(_+m)/4;return T>b&&T>C?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=A/i,r=L/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=A/s,r=v/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=v/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this.w=Yt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this.w=Yt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sg extends Ps{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Te(0,0,t,n),this.scissorTest=!1,this.viewport=new Te(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:i.depth},r=new an(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new _h(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Sg{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class ip extends an{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eg extends an{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ge{constructor(t,n,i,s,r,a,o,l,c,h,d,u,p,_,M,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c,h,d,u,p,_,M,m)}set(t,n,i,s,r,a,o,l,c,h,d,u,p,_,M,m){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),a=1/ks.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,_=o*h,M=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+p*c,n[10]=a*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,_=c*h,M=c*d;n[0]=u+M*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=p*o-_,n[6]=M+u*o,n[10]=a*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,_=c*h,M=c*d;n[0]=u-M*o,n[4]=-a*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*h,n[9]=M-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(t.order==="ZYX"){const u=a*h,p=a*d,_=o*h,M=o*d;n[0]=l*h,n[4]=_*c-p,n[8]=u*c+M,n[1]=l*d,n[5]=M*c+u,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,_=o*l,M=o*c;n[0]=l*h,n[4]=M-u*d,n[8]=_*d+p,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+_,n[10]=u-M*d}else if(t.order==="XZY"){const u=a*l,p=a*c,_=o*l,M=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+M,n[5]=a*h,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*h,n[10]=M*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yg,t,bg)}lookAt(t,n,i){const s=this.elements;return _n.subVectors(t,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),zi.crossVectors(i,_n),zi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),zi.crossVectors(i,_n)),zi.normalize(),Ra.crossVectors(_n,zi),s[0]=zi.x,s[4]=Ra.x,s[8]=_n.x,s[1]=zi.y,s[5]=Ra.y,s[9]=_n.y,s[2]=zi.z,s[6]=Ra.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],_=i[2],M=i[6],m=i[10],f=i[14],S=i[3],T=i[7],b=i[11],C=i[15],A=s[0],L=s[4],v=s[8],y=s[12],j=s[1],R=s[5],k=s[9],z=s[13],X=s[2],B=s[6],V=s[10],N=s[14],Q=s[3],Z=s[7],ct=s[11],mt=s[15];return r[0]=a*A+o*j+l*X+c*Q,r[4]=a*L+o*R+l*B+c*Z,r[8]=a*v+o*k+l*V+c*ct,r[12]=a*y+o*z+l*N+c*mt,r[1]=h*A+d*j+u*X+p*Q,r[5]=h*L+d*R+u*B+p*Z,r[9]=h*v+d*k+u*V+p*ct,r[13]=h*y+d*z+u*N+p*mt,r[2]=_*A+M*j+m*X+f*Q,r[6]=_*L+M*R+m*B+f*Z,r[10]=_*v+M*k+m*V+f*ct,r[14]=_*y+M*z+m*N+f*mt,r[3]=S*A+T*j+b*X+C*Q,r[7]=S*L+T*R+b*B+C*Z,r[11]=S*v+T*k+b*V+C*ct,r[15]=S*y+T*z+b*N+C*mt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],_=t[3],M=t[7],m=t[11],f=t[15],S=l*p-c*u,T=o*p-c*d,b=o*u-l*d,C=a*p-c*h,A=a*u-l*h,L=a*d-o*h;return n*(M*S-m*T+f*b)-i*(_*S-m*C+f*A)+s*(_*T-M*C+f*L)-r*(_*b-M*A+m*L)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],_=t[12],M=t[13],m=t[14],f=t[15],S=n*o-i*a,T=n*l-s*a,b=n*c-r*a,C=i*l-s*o,A=i*c-r*o,L=s*c-r*l,v=h*M-d*_,y=h*m-u*_,j=h*f-p*_,R=d*m-u*M,k=d*f-p*M,z=u*f-p*m,X=S*z-T*k+b*R+C*j-A*y+L*v;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return t[0]=(o*z-l*k+c*R)*B,t[1]=(s*k-i*z-r*R)*B,t[2]=(M*L-m*A+f*C)*B,t[3]=(u*A-d*L-p*C)*B,t[4]=(l*j-a*z-c*y)*B,t[5]=(n*z-s*j+r*y)*B,t[6]=(m*b-_*L-f*T)*B,t[7]=(h*L-u*b+p*T)*B,t[8]=(a*k-o*j+c*v)*B,t[9]=(i*j-n*k-r*v)*B,t[10]=(_*A-M*b+f*S)*B,t[11]=(d*b-h*A-p*S)*B,t[12]=(o*y-a*R-l*v)*B,t[13]=(n*R-i*y+s*v)*B,t[14]=(M*T-_*C-m*S)*B,t[15]=(h*C-d*T+u*S)*B,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,_=r*d,M=a*h,m=a*d,f=o*d,S=l*c,T=l*h,b=l*d,C=i.x,A=i.y,L=i.z;return s[0]=(1-(M+f))*C,s[1]=(p+b)*C,s[2]=(_-T)*C,s[3]=0,s[4]=(p-b)*A,s[5]=(1-(u+f))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(_+T)*L,s[9]=(m-S)*L,s[10]=(1-(u+M))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let a=ks.set(s[0],s[1],s[2]).length();const o=ks.set(s[4],s[5],s[6]).length(),l=ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);const c=1/a,h=1/o,d=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,n.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,n,i,s,r,a,o=ai,l=!1){const c=this.elements,h=2*r/(n-t),d=2*r/(i-s),u=(n+t)/(n-t),p=(i+s)/(i-s);let _,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===ai)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===ia)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=ai,l=!1){const c=this.elements,h=2/(n-t),d=2/(i-s),u=-(n+t)/(n-t),p=-(i+s)/(i-s);let _,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===ai)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===ia)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const ks=new U,Hn=new ge,yg=new U(0,0,0),bg=new U(1,1,1),zi=new U,Ra=new U,_n=new U,zu=new ge,Gu=new es;class di{constructor(t=0,n=0,i=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zu,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tg=0;const Vu=new U,zs=new es,Si=new ge,Ca=new U,Br=new U,Ag=new U,wg=new es,Hu=new U(1,0,0),Wu=new U(0,1,0),Xu=new U(0,0,1),Yu={type:"added"},Rg={type:"removed"},Gs={type:"childadded",child:null},hl={type:"childremoved",child:null};class Ke extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new U,n=new di,i=new es,s=new U(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new kt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return zs.setFromAxisAngle(t,n),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,n){return zs.setFromAxisAngle(t,n),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,n){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ca.copy(t):Ca.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Br,Ca,this.up):Si.lookAt(Ca,Br,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(Si),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Rg),hl.child=t,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,Ag),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(n){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new U(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jr extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function dl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=$t.workingColorSpace){return this.r=t,this.g=n,this.b=i,$t.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=$t.workingColorSpace){if(t=mg(t,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=dl(a,r,t+1/3),this.g=dl(a,r,t),this.b=dl(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,n=En){function i(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=En){const i=sp[t.toLowerCase()];return i!==void 0?this.setHex(i,n):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return $t.workingToColorSpace(nn.copy(this),t),Math.round(Yt(nn.r*255,0,255))*65536+Math.round(Yt(nn.g*255,0,255))*256+Math.round(Yt(nn.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=$t.workingColorSpace){$t.workingToColorSpace(nn.copy(this),n);const i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=$t.workingColorSpace){return $t.workingToColorSpace(nn.copy(this),n),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=En){$t.workingToColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,s=nn.b;return t!==En?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+n,Gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Gi),t.getHSL(Pa);const i=rl(Gi.h,Pa.h,n),s=rl(Gi.s,Pa.s,n),r=rl(Gi.l,Pa.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new jt;jt.NAMES=sp;class Pg extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wn=new U,Ei=new U,fl=new U,yi=new U,Vs=new U,Hs=new U,qu=new U,pl=new U,ml=new U,gl=new U,_l=new Te,vl=new Te,xl=new Te;class Yn{constructor(t=new U,n=new U,i=new U){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Wn.subVectors(t,n),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Wn.subVectors(s,n),Ei.subVectors(i,n),fl.subVectors(t,n);const a=Wn.dot(Wn),o=Wn.dot(Ei),l=Wn.dot(fl),c=Ei.dot(Ei),h=Ei.dot(fl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,n,i,s,r,a,o,l){return this.getBarycoord(t,n,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(t,n,i,s,r,a){return _l.setScalar(0),vl.setScalar(0),xl.setScalar(0),_l.fromBufferAttribute(t,n),vl.fromBufferAttribute(t,i),xl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_l,r.x),a.addScaledVector(vl,r.y),a.addScaledVector(xl,r.z),a}static isFrontFacing(t,n,i,s){return Wn.subVectors(i,n),Ei.subVectors(t,n),Wn.cross(Ei).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Wn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Yn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return Yn.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let a,o;Vs.subVectors(s,i),Hs.subVectors(r,i),pl.subVectors(t,i);const l=Vs.dot(pl),c=Hs.dot(pl);if(l<=0&&c<=0)return n.copy(i);ml.subVectors(t,s);const h=Vs.dot(ml),d=Hs.dot(ml);if(h>=0&&d<=h)return n.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Vs,a);gl.subVectors(t,r);const p=Vs.dot(gl),_=Hs.dot(gl);if(_>=0&&p<=_)return n.copy(r);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Hs,o);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return qu.subVectors(r,s),o=(d-h)/(d-h+(p-_)),n.copy(s).addScaledVector(qu,o);const f=1/(m+M+u);return a=M*f,o=u*f,n.copy(i).addScaledVector(Vs,a).addScaledVector(Hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class da{constructor(t=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),La.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(t.matrixWorld),this.union(La)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),Da.subVectors(this.max,kr),Ws.subVectors(t.a,kr),Xs.subVectors(t.b,kr),Ys.subVectors(t.c,kr),Vi.subVectors(Xs,Ws),Hi.subVectors(Ys,Xs),os.subVectors(Ws,Ys);let n=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-os.z,os.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,os.z,0,-os.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-os.y,os.x,0];return!Ml(n,Ws,Xs,Ys,Da)||(n=[1,0,0,0,1,0,0,0,1],!Ml(n,Ws,Xs,Ys,Da))?!1:(Ia.crossVectors(Vi,Hi),n=[Ia.x,Ia.y,Ia.z],Ml(n,Ws,Xs,Ys,Da))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bi=[new U,new U,new U,new U,new U,new U,new U,new U],Xn=new U,La=new da,Ws=new U,Xs=new U,Ys=new U,Vi=new U,Hi=new U,os=new U,kr=new U,Da=new U,Ia=new U,ls=new U;function Ml(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){ls.fromArray(e,r);const o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),c=n.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ie=new U,Ua=new Ft;let Lg=0;class jn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lg++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Iu,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ua.fromBufferAttribute(this,n),Ua.applyMatrix3(t),this.setXY(n,Ua.x,Ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ie.fromBufferAttribute(this,n),Ie.applyMatrix3(t),this.setXYZ(n,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ie.fromBufferAttribute(this,n),Ie.applyMatrix4(t),this.setXYZ(n,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ie.fromBufferAttribute(this,n),Ie.applyNormalMatrix(t),this.setXYZ(n,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ie.fromBufferAttribute(this,n),Ie.transformDirection(t),this.setXYZ(n,Ie.x,Ie.y,Ie.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Or(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Or(n,this.array)),n}setX(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Or(n,this.array)),n}setY(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Or(n,this.array)),n}setZ(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Or(n,this.array)),n}setW(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Iu&&(t.usage=this.usage),t}}class rp extends jn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class ap extends jn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class bn extends jn{constructor(t,n,i){super(new Float32Array(t),n,i)}}const Dg=new da,zr=new U,Sl=new U;class fa{constructor(t=new U,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Dg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const n=zr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(zr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Sl)),this.expandByPoint(zr.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ig=0;const Un=new ge,El=new Ke,qs=new U,vn=new da,Gr=new da,Xe=new U;class pn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ug(t)?ap:rp)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,n,i){return Un.makeTranslation(t,n,i),this.applyMatrix4(Un),this}scale(t,n,i){return Un.makeScale(t,n,i),this.applyMatrix4(Un),this}lookAt(t){return El.lookAt(t),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(t.length,n.count);for(let s=0;s<i;s++){const r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(vn.min,Gr.min),vn.expandByPoint(Xe),Xe.addVectors(vn.max,Gr.max),vn.expandByPoint(Xe)):(vn.expandByPoint(Gr.min),vn.expandByPoint(Gr.max))}vn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(qs.fromBufferAttribute(t,c),Xe.add(qs)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new U,l[v]=new U;const c=new U,h=new U,d=new U,u=new Ft,p=new Ft,_=new Ft,M=new U,m=new U;function f(v,y,j){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,j),u.fromBufferAttribute(r,v),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,j),h.sub(c),d.sub(c),p.sub(u),_.sub(u);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(R),o[v].add(M),o[y].add(M),o[j].add(M),l[v].add(m),l[y].add(m),l[j].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,y=S.length;v<y;++v){const j=S[v],R=j.start,k=j.count;for(let z=R,X=R+k;z<X;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const T=new U,b=new U,C=new U,A=new U;function L(v){C.fromBufferAttribute(s,v),A.copy(C);const y=o[v];T.copy(y),T.sub(C.multiplyScalar(C.dot(y))).normalize(),b.crossVectors(A,y);const R=b.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,R)}for(let v=0,y=S.length;v<y;++v){const j=S[v],R=j.start,k=j.count;for(let z=R,X=R+k;z<X;z+=3)L(t.getX(z+0)),L(t.getX(z+1)),L(t.getX(z+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Xe.fromBufferAttribute(t,n),Xe.normalize(),t.setXYZ(n,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[_++]=c[p++]}return new jn(u,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ug=0;class Ls extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=ir,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Kl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){It(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){It(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Kl&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ti=new U,yl=new U,Na=new U,Wi=new U,bl=new U,Fa=new U,Tl=new U;class pa{constructor(t=new U,n=new U(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ti.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){yl.copy(t).add(n).multiplyScalar(.5),Na.copy(n).sub(t).normalize(),Wi.copy(this.origin).sub(yl);const r=t.distanceTo(n)*.5,a=-this.direction.dot(Na),o=Wi.dot(this.direction),l=-Wi.dot(Na),c=Wi.lengthSq(),h=Math.abs(1-a*a);let d,u,p,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yl).addScaledVector(Na,u),p}intersectSphere(t,n){Ti.subVectors(t.center,this.origin);const i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,n,i,s,r){bl.subVectors(n,t),Fa.subVectors(i,t),Tl.crossVectors(bl,Fa);let a=this.direction.dot(Tl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,t);const l=o*this.direction.dot(Fa.crossVectors(Wi,Fa));if(l<0)return null;const c=o*this.direction.dot(bl.cross(Wi));if(c<0||l+c>a)return null;const h=-o*Wi.dot(Tl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ao extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ju=new ge,cs=new pa,Oa=new fa,Ku=new U,Ba=new U,ka=new U,za=new U,Al=new U,Ga=new U,Zu=new U,Va=new U;class wn extends Ke{constructor(t=new pn,n=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Al.fromBufferAttribute(d,t),a?Ga.addScaledVector(Al,h):Ga.addScaledVector(Al.sub(n),h))}n.add(Ga)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(Oa.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Oa,Ku)===null||cs.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&(ju.copy(r).invert(),cs.copy(t.ray).applyMatrix4(ju),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,cs)))}_computeIntersections(t,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,C=T;b<C;b+=3){const A=o.getX(b),L=o.getX(b+1),v=o.getX(b+2);s=Ha(this,f,t,i,c,h,d,A,L,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const S=o.getX(m),T=o.getX(m+1),b=o.getX(m+2);s=Ha(this,a,t,i,c,h,d,S,T,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,C=T;b<C;b+=3){const A=b,L=b+1,v=b+2;s=Ha(this,f,t,i,c,h,d,A,L,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const S=m,T=m+1,b=m+2;s=Ha(this,a,t,i,c,h,d,S,T,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Ng(e,t,n,i,s,r,a,o){let l;if(t.side===fn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ts,o),l===null)return null;Va.copy(o),Va.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Va);return c<n.near||c>n.far?null:{distance:c,point:Va.clone(),object:e}}function Ha(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,Ba),e.getVertexPosition(l,ka),e.getVertexPosition(c,za);const h=Ng(e,t,n,i,Ba,ka,za,Zu);if(h){const d=new U;Yn.getBarycoord(Zu,Ba,ka,za,d),s&&(h.uv=Yn.getInterpolatedAttribute(s,o,l,c,d,new Ft)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,o,l,c,d,new Ft)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Yn.getNormal(Ba,ka,za,u.normal),h.face=u,h.barycoord=d}return h}class Fg extends an{constructor(t=null,n=1,i=1,s,r,a,o,l,c=Je,h=Je,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wl=new U,Og=new U,Bg=new kt;class ji{constructor(t=new U(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=wl.subVectors(i,n).cross(Og.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Bg.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new fa,kg=new Ft(.5,.5),Wa=new U;class xh{constructor(t=new ji,n=new ji,i=new ji,s=new ji,r=new ji,a=new ji){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ai,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],_=r[8],M=r[9],m=r[10],f=r[11],S=r[12],T=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-a,p-h,f-_,C-S).normalize(),s[1].setComponents(c+a,p+h,f+_,C+S).normalize(),s[2].setComponents(c+o,p+d,f+M,C+T).normalize(),s[3].setComponents(c-o,p-d,f-M,C-T).normalize(),i)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,p-u,f-m,C-b).normalize();else if(s[4].setComponents(c-l,p-u,f-m,C-b).normalize(),n===ai)s[5].setComponents(c+l,p+u,f+m,C+b).normalize();else if(n===ia)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);const n=kg.distanceTo(t.center);return hs.radius=.7071067811865476+n,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class op extends Ls{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const go=new U,_o=new U,$u=new ge,Vr=new pa,Xa=new fa,Rl=new U,Ju=new U;class zg extends Ke{constructor(t=new pn,n=new op){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)go.fromBufferAttribute(n,s-1),_o.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=go.distanceTo(_o);t.setAttribute("lineDistance",new bn(i,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;$u.copy(s).invert(),Vr.copy(t.ray).applyMatrix4($u);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){const f=h.getX(M),S=h.getX(M+1),T=Ya(this,t,Vr,l,f,S,M);T&&n.push(T)}if(this.isLineLoop){const M=h.getX(_-1),m=h.getX(p),f=Ya(this,t,Vr,l,M,m,_-1);f&&n.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){const f=Ya(this,t,Vr,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){const M=Ya(this,t,Vr,l,_-1,p,_-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ya(e,t,n,i,s,r,a){const o=e.geometry.attributes.position;if(go.fromBufferAttribute(o,s),_o.fromBufferAttribute(o,r),n.distanceSqToSegment(go,_o,Rl,Ju)>i)return;Rl.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Rl);if(!(c<t.near||c>t.far))return{distance:c,point:Ju.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}class lp extends Ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qu=new ge,Bc=new pa,qa=new fa,ja=new U;class Gg extends Ke{constructor(t=new pn,n=new lp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,t.ray.intersectsSphere(qa)===!1)return;Qu.copy(s).invert(),Bc.copy(t.ray).applyMatrix4(Qu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,M=p;_<M;_++){const m=c.getX(_);ja.fromBufferAttribute(d,m),td(ja,m,l,s,t,n,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=u,M=p;_<M;_++)ja.fromBufferAttribute(d,_),td(ja,_,l,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function td(e,t,n,i,s,r,a){const o=Bc.distanceSqToPoint(e);if(o<n){const l=new U;Bc.closestPointToPoint(e,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class cp extends an{constructor(t=[],n=As,i,s,r,a,o,l,c,h){super(t,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ra extends an{constructor(t,n,i=ui,s,r,a,o=Je,l=Je,c,h=Di,d=1){if(h!==Di&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _h(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Vg extends ra{constructor(t,n=ui,i=As,s,r,a=Je,o=Je,l,c=Di){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hp extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ma extends pn{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,i,n,t,a,r,0),_("z","y","x",1,-1,i,n,-t,a,r,1),_("x","z","y",1,1,t,i,n,s,a,2),_("x","z","y",1,-1,t,i,-n,s,a,3),_("x","y","z",1,-1,t,n,i,s,r,4),_("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(h,3)),this.setAttribute("uv",new bn(d,2));function _(M,m,f,S,T,b,C,A,L,v,y){const j=b/L,R=C/v,k=b/2,z=C/2,X=A/2,B=L+1,V=v+1;let N=0,Q=0;const Z=new U;for(let ct=0;ct<V;ct++){const mt=ct*R-z;for(let ut=0;ut<B;ut++){const zt=ut*j-k;Z[M]=zt*S,Z[m]=mt*T,Z[f]=X,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[m]=0,Z[f]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(ut/L),d.push(1-ct/v),N+=1}}for(let ct=0;ct<v;ct++)for(let mt=0;mt<L;mt++){const ut=u+mt+B*ct,zt=u+mt+B*(ct+1),_e=u+(mt+1)+B*(ct+1),me=u+(mt+1)+B*ct;l.push(ut,zt,me),l.push(zt,_e,me),Q+=6}o.addGroup(p,Q,y),p+=Q,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wo extends pn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=n/l,p=[],_=[],M=[],m=[];for(let f=0;f<h;f++){const S=f*u-a;for(let T=0;T<c;T++){const b=T*d-r;_.push(b,-S,0),M.push(0,0,1),m.push(T/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const T=S+c*f,b=S+c*(f+1),C=S+1+c*(f+1),A=S+1+c*f;p.push(T,b,A),p.push(b,C,A)}this.setIndex(p),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(M,3)),this.setAttribute("uv",new bn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.width,t.height,t.widthSegments,t.heightSegments)}}class ga extends pn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new U,u=new U,p=[],_=[],M=[],m=[];for(let f=0;f<=i;f++){const S=[],T=f/i;let b=0;f===0&&a===0?b=.5/n:f===i&&l===Math.PI&&(b=-.5/n);for(let C=0;C<=n;C++){const A=C/n;d.x=-t*Math.cos(s+A*r)*Math.sin(a+T*o),d.y=t*Math.cos(a+T*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+T*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(A+b,1-T),S.push(c++)}h.push(S)}for(let f=0;f<i;f++)for(let S=0;S<n;S++){const T=h[f][S+1],b=h[f][S],C=h[f+1][S],A=h[f+1][S+1];(f!==0||a>0)&&p.push(T,b,A),(f!==i-1||l<Math.PI)&&p.push(b,C,A)}this.setIndex(p),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(M,3)),this.setAttribute("uv",new bn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ur(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function on(e){const t={};for(let n=0;n<e.length;n++){const i=ur(e[n]);for(const s in i)t[s]=i[s]}return t}function Hg(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function up(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Wg={clone:ur,merge:on};var Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Hg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class qg extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jg extends Ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kg extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zg extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cl={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ed(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ed(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ed(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class $g{constructor(t,n,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Jg=new $g;class Mh{constructor(t){this.manager=t!==void 0?t:Jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Mh.DEFAULT_MATERIAL_NAME="__DEFAULT";const js=new WeakMap;class Qg extends Mh{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Cl.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(a),r.manager.itemEnd(t)},0);else{let d=js.get(a);d===void 0&&(d=[],js.set(a,d)),d.push({onLoad:n,onError:s})}return a}const o=sa("img");function l(){h(),n&&n(this);const d=js.get(this)||[];for(let u=0;u<d.length;u++){const p=d[u];p.onLoad&&p.onLoad(this)}js.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Cl.remove(`image:${t}`);const u=js.get(this)||[];for(let p=0;p<u.length;p++){const _=u[p];_.onError&&_.onError(d)}js.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Cl.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class t_ extends Mh{constructor(t){super(t)}load(t,n,i,s){const r=new an,a=new Qg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class dp extends Ke{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Pl=new ge,nd=new U,id=new U;class e_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;nd.setFromMatrixPosition(t.matrixWorld),n.position.copy(nd),id.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(id),n.updateMatrixWorld(),Pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ia||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ka=new U,Za=new es,ti=new U;class fp extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ka,Za,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Za,ti.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Ka,Za,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Za,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new U,sd=new Ft,rd=new Ft;class Bn extends fp{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Oc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,n){return this.getViewBounds(t,sd,rd),n.subVectors(rd,sd)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(co*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Sh extends fp{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class n_ extends e_{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ad extends dp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new n_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class i_ extends dp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ks=-90,Zs=1;class s_ extends Ke{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bn(Ks,Zs,t,n);s.layers=this.layers,this.add(s);const r=new Bn(Ks,Zs,t,n);r.layers=this.layers,this.add(r);const a=new Bn(Ks,Zs,t,n);a.layers=this.layers,this.add(a);const o=new Bn(Ks,Zs,t,n);o.layers=this.layers,this.add(o);const l=new Bn(Ks,Zs,t,n);l.layers=this.layers,this.add(l);const c=new Bn(Ks,Zs,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const c of n)this.remove(c);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class r_ extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const od=new ge;class a_{constructor(t,n,i=0,s=1/0){this.ray=new pa(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Zt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return od.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(od),this}intersectObject(t,n=!0,i=[]){return kc(t,this,i,n),i.sort(ld),i}intersectObjects(t,n=!0,i=[]){for(let s=0,r=t.length;s<r;s++)kc(t[s],this,i,n);return i.sort(ld),i}}function ld(e,t){return e.distance-t.distance}function kc(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){const r=e.children;for(let a=0,o=r.length;a<o;a++)kc(r[a],t,n,!0)}}class o_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,It("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class cd{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class l_ extends Ps{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){It("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function hd(e,t,n,i){const s=c_(i);switch(n){case Jf:return e*t;case tp:return e*t/s.components*s.byteLength;case dh:return e*t/s.components*s.byteLength;case cr:return e*t*2/s.components*s.byteLength;case fh:return e*t*2/s.components*s.byteLength;case Qf:return e*t*3/s.components*s.byteLength;case qn:return e*t*4/s.components*s.byteLength;case ph:return e*t*4/s.components*s.byteLength;case ro:case ao:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oo:case lo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ac:case lc:return Math.max(e,16)*Math.max(t,8)/4;case rc:case oc:return Math.max(e,8)*Math.max(t,8)/2;case cc:case hc:case dc:case fc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case uc:case pc:case mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case vc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case yc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case bc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pc:case Lc:case Dc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ic:case Uc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Nc:case Fc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function c_(e){switch(e){case yn:case jf:return{byteLength:1,components:1};case ea:case Kf:case Li:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case ui:case ch:case ri:return{byteLength:4,components:1};case Zf:case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pp(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function h_(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){const _=d[u],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){const M=d[p];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d_=`#ifdef USE_ALPHAHASH
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
#endif`,f_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
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
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b_=`#ifdef USE_IRIDESCENCE
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
#endif`,T_=`#ifdef USE_BUMPMAP
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,U_=`#define PI 3.141592653589793
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
} // validated`,N_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F_=`vec3 transformedNormal = objectNormal;
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
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H_=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
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
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
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
#endif`,i1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,c1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M1=`#if defined( USE_POINTS_UV )
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
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
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
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`uniform sampler2D t2D;
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
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
}`,_v=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,vv=`#define DISTANCE
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
}`,xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
}`,yv=`uniform vec3 diffuse;
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
}`,bv=`#include <common>
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Av=`#define LAMBERT
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
}`,wv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Rv=`#define MATCAP
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
}`,Cv=`#define MATCAP
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
}`,Pv=`#define NORMAL
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
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dv=`#define PHONG
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
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Uv=`#define STANDARD
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
}`,Nv=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Fv=`#define TOON
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
}`,Ov=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Bv=`uniform float size;
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
}`,kv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Gv=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Vv=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:u_,alphahash_pars_fragment:d_,alphamap_fragment:f_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:g_,aomap_fragment:__,aomap_pars_fragment:v_,batching_pars_vertex:x_,batching_vertex:M_,begin_vertex:S_,beginnormal_vertex:E_,bsdfs:y_,iridescence_fragment:b_,bumpmap_pars_fragment:T_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:w_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:C_,color_fragment:P_,color_pars_fragment:L_,color_pars_vertex:D_,color_vertex:I_,common:U_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:F_,displacementmap_pars_vertex:O_,displacementmap_vertex:B_,emissivemap_fragment:k_,emissivemap_pars_fragment:z_,colorspace_fragment:G_,colorspace_pars_fragment:V_,envmap_fragment:H_,envmap_common_pars_fragment:W_,envmap_pars_fragment:X_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:i1,envmap_vertex:q_,fog_vertex:j_,fog_pars_vertex:K_,fog_fragment:Z_,fog_pars_fragment:$_,gradientmap_pars_fragment:J_,lightmap_pars_fragment:Q_,lights_lambert_fragment:t1,lights_lambert_pars_fragment:e1,lights_pars_begin:n1,lights_toon_fragment:s1,lights_toon_pars_fragment:r1,lights_phong_fragment:a1,lights_phong_pars_fragment:o1,lights_physical_fragment:l1,lights_physical_pars_fragment:c1,lights_fragment_begin:h1,lights_fragment_maps:u1,lights_fragment_end:d1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:_1,map_pars_fragment:v1,map_particle_fragment:x1,map_particle_pars_fragment:M1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:E1,morphinstance_vertex:y1,morphcolor_vertex:b1,morphnormal_vertex:T1,morphtarget_pars_vertex:A1,morphtarget_vertex:w1,normal_fragment_begin:R1,normal_fragment_maps:C1,normal_pars_fragment:P1,normal_pars_vertex:L1,normal_vertex:D1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:O1,opaque_fragment:B1,packing:k1,premultiplied_alpha_fragment:z1,project_vertex:G1,dithering_fragment:V1,dithering_pars_fragment:H1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:q1,shadowmap_vertex:j1,shadowmask_pars_fragment:K1,skinbase_vertex:Z1,skinning_pars_vertex:$1,skinning_vertex:J1,skinnormal_vertex:Q1,specularmap_fragment:tv,specularmap_pars_fragment:ev,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:sv,transmission_pars_fragment:rv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:cv,background_vert:hv,background_frag:uv,backgroundCube_vert:dv,backgroundCube_frag:fv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:_v,distance_vert:vv,distance_frag:xv,equirect_vert:Mv,equirect_frag:Sv,linedashed_vert:Ev,linedashed_frag:yv,meshbasic_vert:bv,meshbasic_frag:Tv,meshlambert_vert:Av,meshlambert_frag:wv,meshmatcap_vert:Rv,meshmatcap_frag:Cv,meshnormal_vert:Pv,meshnormal_frag:Lv,meshphong_vert:Dv,meshphong_frag:Iv,meshphysical_vert:Uv,meshphysical_frag:Nv,meshtoon_vert:Fv,meshtoon_frag:Ov,points_vert:Bv,points_frag:kv,shadow_vert:zv,shadow_frag:Gv,sprite_vert:Vv,sprite_frag:Hv},at={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},si={basic:{uniforms:on([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:on([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:on([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:on([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:on([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new jt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:on([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:on([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:on([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:on([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:on([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:on([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:on([at.common,at.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:on([at.lights,at.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};si.physical={uniforms:on([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const $a={r:0,b:0,g:0},us=new di,Wv=new ge;function Xv(e,t,n,i,s,r){const a=new jt(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const b=S.backgroundBlurriness>0;T=t.get(T,b)}return T}function _(S){let T=!1;const b=p(S);b===null?m(a,o):b&&b.isColor&&(m(b,1),T=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(S,T){const b=p(T);b&&(b.isCubeTexture||b.mapping===To)?(c===void 0&&(c=new wn(new ma(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:ur(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),us.copy(T.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(us)),c.material.toneMapped=$t.getTransfer(b.colorSpace)!==re,(h!==b||d!==b.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=e.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new wn(new wo(2,2),new fi({name:"BackgroundMaterial",uniforms:ur(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$t.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB($a,up(e)),n.buffers.color.setClear($a.r,$a.g,$a.b,T,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:M,dispose:f}}function Yv(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(R,k,z,X,B){let V=!1;const N=d(R,X,z,k);r!==N&&(r=N,c(r.object)),V=p(R,X,z,B),V&&_(R,X,z,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(R,k,z,X),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(R){return e.bindVertexArray(R)}function h(R){return e.deleteVertexArray(R)}function d(R,k,z,X){const B=X.wireframe===!0;let V=i[k.id];V===void 0&&(V={},i[k.id]=V);const N=R.isInstancedMesh===!0?R.id:0;let Q=V[N];Q===void 0&&(Q={},V[N]=Q);let Z=Q[z.id];Z===void 0&&(Z={},Q[z.id]=Z);let ct=Z[B];return ct===void 0&&(ct=u(l()),Z[B]=ct),ct}function u(R){const k=[],z=[],X=[];for(let B=0;B<n;B++)k[B]=0,z[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:X,object:R,attributes:{},index:null}}function p(R,k,z,X){const B=r.attributes,V=k.attributes;let N=0;const Q=z.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const mt=B[Z];let ut=V[Z];if(ut===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ut=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ut=R.instanceColor)),mt===void 0||mt.attribute!==ut||ut&&mt.data!==ut.data)return!0;N++}return r.attributesNum!==N||r.index!==X}function _(R,k,z,X){const B={},V=k.attributes;let N=0;const Q=z.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let mt=V[Z];mt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor));const ut={};ut.attribute=mt,mt&&mt.data&&(ut.data=mt.data),B[Z]=ut,N++}r.attributes=B,r.attributesNum=N,r.index=X}function M(){const R=r.newAttributes;for(let k=0,z=R.length;k<z;k++)R[k]=0}function m(R){f(R,0)}function f(R,k){const z=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;z[R]=1,X[R]===0&&(e.enableVertexAttribArray(R),X[R]=1),B[R]!==k&&(e.vertexAttribDivisor(R,k),B[R]=k)}function S(){const R=r.newAttributes,k=r.enabledAttributes;for(let z=0,X=k.length;z<X;z++)k[z]!==R[z]&&(e.disableVertexAttribArray(z),k[z]=0)}function T(R,k,z,X,B,V,N){N===!0?e.vertexAttribIPointer(R,k,z,B,V):e.vertexAttribPointer(R,k,z,X,B,V)}function b(R,k,z,X){M();const B=X.attributes,V=z.getAttributes(),N=k.defaultAttributeValues;for(const Q in V){const Z=V[Q];if(Z.location>=0){let ct=B[Q];if(ct===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ct=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ct=R.instanceColor)),ct!==void 0){const mt=ct.normalized,ut=ct.itemSize,zt=t.get(ct);if(zt===void 0)continue;const _e=zt.buffer,me=zt.type,q=zt.bytesPerElement,nt=me===e.INT||me===e.UNSIGNED_INT||ct.gpuType===ch;if(ct.isInterleavedBufferAttribute){const rt=ct.data,Bt=rt.stride,Lt=ct.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Z.locationSize;Ut++)f(Z.location+Ut,rt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<Z.locationSize;Ut++)m(Z.location+Ut);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let Ut=0;Ut<Z.locationSize;Ut++)T(Z.location+Ut,ut/Z.locationSize,me,mt,Bt*q,(Lt+ut/Z.locationSize*Ut)*q,nt)}else{if(ct.isInstancedBufferAttribute){for(let rt=0;rt<Z.locationSize;rt++)f(Z.location+rt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let rt=0;rt<Z.locationSize;rt++)m(Z.location+rt);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let rt=0;rt<Z.locationSize;rt++)T(Z.location+rt,ut/Z.locationSize,me,mt,ut*q,ut/Z.locationSize*rt*q,nt)}}else if(N!==void 0){const mt=N[Q];if(mt!==void 0)switch(mt.length){case 2:e.vertexAttrib2fv(Z.location,mt);break;case 3:e.vertexAttrib3fv(Z.location,mt);break;case 4:e.vertexAttrib4fv(Z.location,mt);break;default:e.vertexAttrib1fv(Z.location,mt)}}}}S()}function C(){y();for(const R in i){const k=i[R];for(const z in k){const X=k[z];for(const B in X){const V=X[B];for(const N in V)h(V[N].object),delete V[N];delete X[B]}}delete i[R]}}function A(R){if(i[R.id]===void 0)return;const k=i[R.id];for(const z in k){const X=k[z];for(const B in X){const V=X[B];for(const N in V)h(V[N].object),delete V[N];delete X[B]}}delete i[R.id]}function L(R){for(const k in i){const z=i[k];for(const X in z){const B=z[X];if(B[R.id]===void 0)continue;const V=B[R.id];for(const N in V)h(V[N].object),delete V[N];delete B[R.id]}}}function v(R){for(const k in i){const z=i[k],X=R.isInstancedMesh===!0?R.id:0,B=z[X];if(B!==void 0){for(const V in B){const N=B[V];for(const Q in N)h(N[Q].object),delete N[Q];delete B[V]}delete z[X],Object.keys(z).length===0&&delete i[k]}}}function y(){j(),a=!0,r!==s&&(r=s,c(r.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:j,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function qv(e,t,n){let i;function s(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];n.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let _=0;for(let M=0;M<d;M++)_+=h[M]*u[M];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jv(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==qn&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const v=L===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==yn&&i.convert(L)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ri&&!v)}function l(L){if(L==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:b,maxSamples:C,samples:A}}function Kv(e){const t=this;let n=null,i=0,s=!1,r=!1;const a=new ji,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,T=S*4;let b=f.clippingState||null;l.value=b,b=h(_,u,T,p);for(let C=0;C!==T;++C)b[C]=n[C];f.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const f=p+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,b=p;T!==M;++T,b+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const Ji=4,ud=[.125,.215,.35,.446,.526,.582],gs=20,Zv=256,Hr=new Sh,dd=new jt;let Ll=null,Dl=0,Il=0,Ul=!1;const $v=new U;class fd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=$v}=r;Ll=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ll,Dl,Il),this._renderer.xr.enabled=Ul,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===As||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ll=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Li,format:qn,colorSpace:hr,depthBuffer:!1},s=pd(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(t,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jv(r)),this._blurMaterial=t2(r,t,n),this._ggxMaterial=Qv(r,t,n)}return s}_compileMaterial(t){const n=new wn(new pn,t);this._renderer.compile(n,Hr)}_sceneToCubeUV(t,n,i,s,r){const l=new Bn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(dd),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new ma,new Ao({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let f=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,f=!0):(m.color.copy(dd),f=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const C=this._cubeSize;$s(s,b*C,T>2?C:0,C,C),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=S}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===As||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;$s(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Hr)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-Ji?i-_+Ji:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-n,$s(r,m,f,3*M,2*M),s.setRenderTarget(r),s.render(o,Hr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,$s(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,Hr)}_blur(t,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Zt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gs-1),M=r/_,m=isFinite(r)?1+Math.floor(h*M):gs;m>gs&&It(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const f=[];let S=0;for(let L=0;L<gs;++L){const v=L/M,y=Math.exp(-v*v/2);f.push(y),L===0?S+=y:L<m&&(S+=2*y)}for(let L=0;L<f.length;L++)f[L]=f[L]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=_,u.mipInt.value=T-i;const b=this._sizeLods[s],C=3*b*(s>T-Ji?s-T+Ji:0),A=4*(this._cubeSize-b);$s(n,C,A,3*b,2*b),l.setRenderTarget(n),l.render(d,Hr)}}function Jv(e){const t=[],n=[],i=[];let s=e;const r=e-Ji+1+ud.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>e-Ji?l=ud[a-e+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,M=3,m=2,f=1,S=new Float32Array(M*_*p),T=new Float32Array(m*_*p),b=new Float32Array(f*_*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,v=A>2?0:-1,y=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];S.set(y,M*_*A),T.set(u,m*_*A);const j=[A,A,A,A,A,A];b.set(j,f*_*A)}const C=new pn;C.setAttribute("position",new jn(S,M)),C.setAttribute("uv",new jn(T,m)),C.setAttribute("faceIndex",new jn(b,f)),i.push(new wn(C,null)),s>Ji&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function pd(e,t,n){const i=new ci(e,t,n);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Qv(e,t,n){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function t2(e,t,n){const i=new Float32Array(gs),s=new U(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function md(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function gd(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}class mp extends ci{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new cp(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ma(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Ci});r.uniforms.tEquirect.value=n;const a=new wn(s,r),o=n.minFilter;return n.minFilter===_s&&(n.minFilter=rn),new s_(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}}function e2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===nl||p===il)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new mp(_.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,_=p===nl||p===il,M=p===As||p===lr;if(_||M){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new fd(e)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return _&&S&&S.height>0||M&&S&&l(S)?(i===null&&(i=new fd(e)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===nl?u.mapping=As:p===il&&(u.mapping=lr),u}function l(u){let p=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function n2(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&mo("WebGLRenderer: "+i+" extension not supported."),s}}}function i2(e,t,n,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,_=d.attributes.position;let M=0;if(_===void 0)return;if(p!==null){const S=p.array;M=p.version;for(let T=0,b=S.length;T<b;T+=3){const C=S[T+0],A=S[T+1],L=S[T+2];u.push(C,A,A,L,L,C)}}else{const S=_.array;M=_.version;for(let T=0,b=S.length/3-1;T<b;T+=3){const C=T+0,A=T+1,L=T+2;u.push(C,A,A,L,L,C)}}const m=new(_.count>=65535?ap:rp)(u,1);m.version=M;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function s2(e,t,n){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){e.drawElements(i,p,r,u*a),n.update(p,i,1)}function c(u,p,_){_!==0&&(e.drawElementsInstanced(i,p,r,u*a,_),n.update(p,i,_))}function h(u,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];n.update(m,i,1)}function d(u,p,_,M){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,M,0,_);let f=0;for(let S=0;S<_;S++)f+=p[S]*M[S];n.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function r2(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function a2(e,t,n){const i=new WeakMap,s=new Te;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let j=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",j)};var p=j;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),M===!0&&(b=2),m===!0&&(b=3);let C=o.attributes.position.count*b,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const L=new Float32Array(C*A*4*d),v=new ip(L,C,A,d);v.type=ri,v.needsUpdate=!0;const y=b*4;for(let R=0;R<d;R++){const k=f[R],z=S[R],X=T[R],B=C*A*4*R;for(let V=0;V<k.count;V++){const N=V*y;_===!0&&(s.fromBufferAttribute(k,V),L[B+N+0]=s.x,L[B+N+1]=s.y,L[B+N+2]=s.z,L[B+N+3]=0),M===!0&&(s.fromBufferAttribute(z,V),L[B+N+4]=s.x,L[B+N+5]=s.y,L[B+N+6]=s.z,L[B+N+7]=0),m===!0&&(s.fromBufferAttribute(X,V),L[B+N+8]=s.x,L[B+N+9]=s.y,L[B+N+10]=s.z,L[B+N+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new Ft(C,A)},i.set(o,u),o.addEventListener("dispose",j)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function o2(e,t,n,i,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const l2={[Gf]:"LINEAR_TONE_MAPPING",[Vf]:"REINHARD_TONE_MAPPING",[Hf]:"CINEON_TONE_MAPPING",[lh]:"ACES_FILMIC_TONE_MAPPING",[Xf]:"AGX_TONE_MAPPING",[Yf]:"NEUTRAL_TONE_MAPPING",[Wf]:"CUSTOM_TONE_MAPPING"};function c2(e,t,n,i,s){const r=new ci(t,n,{type:e,depthBuffer:i,stencilBuffer:s}),a=new ci(t,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),o=new pn;o.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new bn([0,2,0,0,2,0],2));const l=new qg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new wn(o,l),h=new Sh(-1,1,1,-1,0,1);let d=null,u=null,p=!1,_,M=null,m=[],f=!1;this.setSize=function(S,T){r.setSize(S,T),a.setSize(S,T);for(let b=0;b<m.length;b++){const C=m[b];C.setSize&&C.setSize(S,T)}},this.setEffects=function(S){m=S,f=m.length>0&&m[0].isRenderPass===!0;const T=r.width,b=r.height;for(let C=0;C<m.length;C++){const A=m[C];A.setSize&&A.setSize(T,b)}},this.begin=function(S,T){if(p||S.toneMapping===li&&m.length===0)return!1;if(M=T,T!==null){const b=T.width,C=T.height;(r.width!==b||r.height!==C)&&this.setSize(b,C)}return f===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=li,!0},this.hasRenderPass=function(){return f},this.end=function(S,T){S.toneMapping=_,p=!0;let b=r,C=a;for(let A=0;A<m.length;A++){const L=m[A];if(L.enabled!==!1&&(L.render(S,C,b,T),L.needsSwap!==!1)){const v=b;b=C,C=v}}if(d!==S.outputColorSpace||u!==S.toneMapping){d=S.outputColorSpace,u=S.toneMapping,l.defines={},$t.getTransfer(d)===re&&(l.defines.SRGB_TRANSFER="");const A=l2[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(M),S.render(c,h),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const gp=new an,zc=new ra(1,1),_p=new ip,vp=new Eg,xp=new cp,_d=[],vd=[],xd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function br(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ge(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Co(e,t){let n=vd[t];n===void 0&&(n=new Int32Array(t),vd[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function h2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function u2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ze(n,t))return;e.uniform2fv(this.addr,t),Ge(n,t)}}function d2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ze(n,t))return;e.uniform3fv(this.addr,t),Ge(n,t)}}function f2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ze(n,t))return;e.uniform4fv(this.addr,t),Ge(n,t)}}function p2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ge(n,t)}else{if(ze(n,i))return;Sd.set(i),e.uniformMatrix2fv(this.addr,!1,Sd),Ge(n,i)}}function m2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ge(n,t)}else{if(ze(n,i))return;Md.set(i),e.uniformMatrix3fv(this.addr,!1,Md),Ge(n,i)}}function g2(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ge(n,t)}else{if(ze(n,i))return;xd.set(i),e.uniformMatrix4fv(this.addr,!1,xd),Ge(n,i)}}function _2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function v2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ze(n,t))return;e.uniform2iv(this.addr,t),Ge(n,t)}}function x2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ze(n,t))return;e.uniform3iv(this.addr,t),Ge(n,t)}}function M2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ze(n,t))return;e.uniform4iv(this.addr,t),Ge(n,t)}}function S2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function E2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ze(n,t))return;e.uniform2uiv(this.addr,t),Ge(n,t)}}function y2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ze(n,t))return;e.uniform3uiv(this.addr,t),Ge(n,t)}}function b2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ze(n,t))return;e.uniform4uiv(this.addr,t),Ge(n,t)}}function T2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(zc.compareFunction=n.isReversedDepthBuffer()?gh:mh,r=zc):r=gp,n.setTexture2D(t||r,s)}function A2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||vp,s)}function w2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||xp,s)}function R2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||_p,s)}function C2(e){switch(e){case 5126:return h2;case 35664:return u2;case 35665:return d2;case 35666:return f2;case 35674:return p2;case 35675:return m2;case 35676:return g2;case 5124:case 35670:return _2;case 35667:case 35671:return v2;case 35668:case 35672:return x2;case 35669:case 35673:return M2;case 5125:return S2;case 36294:return E2;case 36295:return y2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return w2;case 36289:case 36303:case 36311:case 36292:return R2}}function P2(e,t){e.uniform1fv(this.addr,t)}function L2(e,t){const n=br(t,this.size,2);e.uniform2fv(this.addr,n)}function D2(e,t){const n=br(t,this.size,3);e.uniform3fv(this.addr,n)}function I2(e,t){const n=br(t,this.size,4);e.uniform4fv(this.addr,n)}function U2(e,t){const n=br(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function N2(e,t){const n=br(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function F2(e,t){const n=br(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function O2(e,t){e.uniform1iv(this.addr,t)}function B2(e,t){e.uniform2iv(this.addr,t)}function k2(e,t){e.uniform3iv(this.addr,t)}function z2(e,t){e.uniform4iv(this.addr,t)}function G2(e,t){e.uniform1uiv(this.addr,t)}function V2(e,t){e.uniform2uiv(this.addr,t)}function H2(e,t){e.uniform3uiv(this.addr,t)}function W2(e,t){e.uniform4uiv(this.addr,t)}function X2(e,t,n){const i=this.cache,s=t.length,r=Co(n,s);ze(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=zc:a=gp;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function Y2(e,t,n){const i=this.cache,s=t.length,r=Co(n,s);ze(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||vp,r[a])}function q2(e,t,n){const i=this.cache,s=t.length,r=Co(n,s);ze(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||xp,r[a])}function j2(e,t,n){const i=this.cache,s=t.length,r=Co(n,s);ze(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||_p,r[a])}function K2(e){switch(e){case 5126:return P2;case 35664:return L2;case 35665:return D2;case 35666:return I2;case 35674:return U2;case 35675:return N2;case 35676:return F2;case 5124:case 35670:return O2;case 35667:case 35671:return B2;case 35668:case 35672:return k2;case 35669:case 35673:return z2;case 5125:return G2;case 36294:return V2;case 36295:return H2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return j2}}class Z2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=C2(n.type)}}class $2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=K2(n.type)}}class J2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,n[o.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Ed(e,t){e.seq.push(t),e.map[t.id]=t}function Q2(e,t,n){const i=e.name,s=i.length;for(Nl.lastIndex=0;;){const r=Nl.exec(i),a=Nl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ed(n,c===void 0?new Z2(o,e,t):new $2(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new J2(o),Ed(n,d)),n=d}}}class ho{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(n,a),l=t.getUniformLocation(n,o.name);Q2(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in n&&i.push(a)}return i}}function yd(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const tx=37297;let ex=0;function nx(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const bd=new kt;function ix(e){$t._getMatrix(bd,$t.workingColorSpace,e);const t=`mat3( ${bd.elements.map(n=>n.toFixed(4))} )`;switch($t.getTransfer(e)){case po:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Td(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+nx(e.getShaderSource(t),o)}else return r}function sx(e,t){const n=ix(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const rx={[Gf]:"Linear",[Vf]:"Reinhard",[Hf]:"Cineon",[lh]:"ACESFilmic",[Xf]:"AgX",[Yf]:"Neutral",[Wf]:"Custom"};function ax(e,t){const n=rx[t];return n===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ja=new U;function ox(){$t.getLuminanceCoefficients(Ja);const e=Ja.x.toFixed(4),t=Ja.y.toFixed(4),n=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function cx(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function hx(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),a=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Kr(e){return e!==""}function Ad(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(e){return e.replace(ux,fx)}const dx=new Map;function fx(e,t){let n=Gt[t];if(n===void 0){const i=dx.get(t);if(i!==void 0)n=Gt[i],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Gc(n)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(e){return e.replace(px,mx)}function mx(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gx={[so]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function _x(e){return gx[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vx={[As]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function xx(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":vx[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mx={[lr]:"ENVMAP_MODE_REFRACTION"};function Sx(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ex={[zf]:"ENVMAP_BLENDING_MULTIPLY",[tg]:"ENVMAP_BLENDING_MIX",[eg]:"ENVMAP_BLENDING_ADD"};function yx(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Ex[e.combine]||"ENVMAP_BLENDING_NONE"}function bx(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Tx(e,t,n,i){const s=e.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=_x(n),c=xx(n),h=Sx(n),d=yx(n),u=bx(n),p=lx(n),_=cx(r),M=s.createProgram();let m,f,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Kr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Kr).join(`
`),f.length>0&&(f+=`
`)):(m=[Cd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),f=[Cd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==li?"#define TONE_MAPPING":"",n.toneMapping!==li?Gt.tonemapping_pars_fragment:"",n.toneMapping!==li?ax("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,sx("linearToOutputTexel",n.outputColorSpace),ox(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Gc(a),a=Ad(a,n),a=wd(a,n),o=Gc(o),o=Ad(o,n),o=wd(o,n),a=Rd(a),o=Rd(o),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=S+m+a,b=S+f+o,C=yd(s,s.VERTEX_SHADER,T),A=yd(s,s.FRAGMENT_SHADER,b);s.attachShader(M,C),s.attachShader(M,A),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function L(R){if(e.debug.checkShaderErrors){const k=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(A)||"",B=k.trim(),V=z.trim(),N=X.trim();let Q=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,C,A);else{const ct=Td(s,C,"vertex"),mt=Td(s,A,"fragment");Zt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ct+`
`+mt)}else B!==""?It("WebGLProgram: Program Info Log:",B):(V===""||N==="")&&(Z=!1);Z&&(R.diagnostics={runnable:Q,programLog:B,vertexShader:{log:V,prefix:m},fragmentShader:{log:N,prefix:f}})}s.deleteShader(C),s.deleteShader(A),v=new ho(s,M),y=hx(s,M)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=s.getProgramParameter(M,tx)),j},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ex++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=A,this}let Ax=0;class wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new Rx(t),n.set(t,i)),i}}class Rx{constructor(t){this.id=Ax++,this.code=t,this.usedTimes=0}}function Cx(e,t,n,i,s,r){const a=new vh,o=new wx,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,y,j,R,k){const z=R.fog,X=k.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,N=t.get(v.envMap||B,V),Q=N&&N.mapping===To?N.image.height:null,Z=p[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&It("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=ct!==void 0?ct.length:0;let ut=0;X.morphAttributes.position!==void 0&&(ut=1),X.morphAttributes.normal!==void 0&&(ut=2),X.morphAttributes.color!==void 0&&(ut=3);let zt,_e,me,q;if(Z){const se=si[Z];zt=se.vertexShader,_e=se.fragmentShader}else zt=v.vertexShader,_e=v.fragmentShader,o.update(v),me=o.getVertexShaderID(v),q=o.getFragmentShaderID(v);const nt=e.getRenderTarget(),rt=e.state.buffers.depth.getReversed(),Bt=k.isInstancedMesh===!0,Lt=k.isBatchedMesh===!0,Ut=!!v.map,He=!!v.matcap,Kt=!!N,ie=!!v.aoMap,he=!!v.lightMap,Vt=!!v.bumpMap,we=!!v.normalMap,w=!!v.displacementMap,De=!!v.emissiveMap,ne=!!v.metalnessMap,de=!!v.roughnessMap,St=v.anisotropy>0,E=v.clearcoat>0,g=v.dispersion>0,D=v.iridescence>0,Y=v.sheen>0,K=v.transmission>0,W=St&&!!v.anisotropyMap,gt=E&&!!v.clearcoatMap,it=E&&!!v.clearcoatNormalMap,Ct=E&&!!v.clearcoatRoughnessMap,Dt=D&&!!v.iridescenceMap,$=D&&!!v.iridescenceThicknessMap,tt=Y&&!!v.sheenColorMap,_t=Y&&!!v.sheenRoughnessMap,xt=!!v.specularMap,ht=!!v.specularColorMap,Ht=!!v.specularIntensityMap,P=K&&!!v.transmissionMap,st=K&&!!v.thicknessMap,et=!!v.gradientMap,ft=!!v.alphaMap,J=v.alphaTest>0,H=!!v.alphaHash,vt=!!v.extensions;let Nt=li;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Nt=e.toneMapping);const fe={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:zt,fragmentShader:_e,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Lt,batchingColor:Lt&&k._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&k.instanceColor!==null,instancingMorph:Bt&&k.morphTexture!==null,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:hr,alphaToCoverage:!!v.alphaToCoverage,map:Ut,matcap:He,envMap:Kt,envMapMode:Kt&&N.mapping,envMapCubeUVHeight:Q,aoMap:ie,lightMap:he,bumpMap:Vt,normalMap:we,displacementMap:w,emissiveMap:De,normalMapObjectSpace:we&&v.normalMapType===sg,normalMapTangentSpace:we&&v.normalMapType===ep,metalnessMap:ne,roughnessMap:de,anisotropy:St,anisotropyMap:W,clearcoat:E,clearcoatMap:gt,clearcoatNormalMap:it,clearcoatRoughnessMap:Ct,dispersion:g,iridescence:D,iridescenceMap:Dt,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:tt,sheenRoughnessMap:_t,specularMap:xt,specularColorMap:ht,specularIntensityMap:Ht,transmission:K,transmissionMap:P,thicknessMap:st,gradientMap:et,opaque:v.transparent===!1&&v.blending===ir&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:H,combine:v.combine,mapUv:Ut&&_(v.map.channel),aoMapUv:ie&&_(v.aoMap.channel),lightMapUv:he&&_(v.lightMap.channel),bumpMapUv:Vt&&_(v.bumpMap.channel),normalMapUv:we&&_(v.normalMap.channel),displacementMapUv:w&&_(v.displacementMap.channel),emissiveMapUv:De&&_(v.emissiveMap.channel),metalnessMapUv:ne&&_(v.metalnessMap.channel),roughnessMapUv:de&&_(v.roughnessMap.channel),anisotropyMapUv:W&&_(v.anisotropyMap.channel),clearcoatMapUv:gt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(v.sheenRoughnessMap.channel),specularMapUv:xt&&_(v.specularMap.channel),specularColorMapUv:ht&&_(v.specularColorMap.channel),specularIntensityMapUv:Ht&&_(v.specularIntensityMap.channel),transmissionMapUv:P&&_(v.transmissionMap.channel),thicknessMapUv:st&&_(v.thicknessMap.channel),alphaMapUv:ft&&_(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(we||St),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Ut||ft),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&we===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:rt,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:ut,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&j.length>0,shadowMapType:e.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&$t.getTransfer(v.map.colorSpace)===re,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&$t.getTransfer(v.emissiveMap.colorSpace)===re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ai,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function m(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const j in v.defines)y.push(j),y.push(v.defines[j]);return v.isRawShaderMaterial===!1&&(f(y,v),S(y,v),y.push(e.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function f(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function S(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const y=p[v.type];let j;if(y){const R=si[y];j=Wg.clone(R.uniforms)}else j=v.uniforms;return j}function b(v,y){let j=h.get(y);return j!==void 0?++j.usedTimes:(j=new Tx(e,y,v,s),c.push(j),h.set(y,j)),j}function C(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function L(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:T,acquireProgram:b,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:L}}function Px(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function Lx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Pd(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ld(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,m,f){let S=e[t];return S===void 0?(S={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},e[t]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=_,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=m,S.group=f),t++,S}function l(u,p,_,M,m,f){const S=o(u,p,_,M,m,f);_.transmission>0?i.push(S):_.transparent===!0?s.push(S):n.push(S)}function c(u,p,_,M,m,f){const S=o(u,p,_,M,m,f);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):n.unshift(S)}function h(u,p){n.length>1&&n.sort(u||Lx),i.length>1&&i.sort(p||Pd),s.length>1&&s.sort(p||Pd)}function d(){for(let u=t,p=e.length;u<p;u++){const _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Dx(){let e=new WeakMap;function t(i,s){const r=e.get(i);let a;return r===void 0?(a=new Ld,e.set(i,[a])):s>=r.length?(a=new Ld,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ix(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new U,color:new jt};break;case"SpotLight":n={position:new U,direction:new U,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function Ux(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Nx=0;function Fx(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Ox(e){const t=new Ix,n=Ux(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new ge,a=new ge;function o(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,S=0,T=0,b=0,C=0,A=0,L=0;c.sort(Fx);for(let y=0,j=c.length;y<j;y++){const R=c[y],k=R.color,z=R.intensity,X=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cr?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=k.r*z,d+=k.g*z,u+=k.b*z;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],z);L++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const N=R.shadow,Q=n.get(R);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=R.shadow.matrix,S++}i.directional[p]=V,p++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(k).multiplyScalar(z),V.distance=X,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[M]=V;const N=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,N.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[M]=N.matrix,R.castShadow){const Q=n.get(R);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,i.spotShadow[M]=Q,i.spotShadowMap[M]=B,b++}M++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(k).multiplyScalar(z),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const N=R.shadow,Q=n.get(R);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,Q.shadowCameraNear=N.camera.near,Q.shadowCameraFar=N.camera.far,i.pointShadow[_]=Q,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=R.shadow.matrix,T++}i.point[_]=V,_++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(z),V.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[f]=V,f++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==p||v.pointLength!==_||v.spotLength!==M||v.rectAreaLength!==m||v.hemiLength!==f||v.numDirectionalShadows!==S||v.numPointShadows!==T||v.numSpotShadows!==b||v.numSpotMaps!==C||v.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,v.directionalLength=p,v.pointLength=_,v.spotLength=M,v.rectAreaLength=m,v.hemiLength=f,v.numDirectionalShadows=S,v.numPointShadows=T,v.numSpotShadows=b,v.numSpotMaps=C,v.numLightProbes=L,i.version=Nx++)}function l(c,h){let d=0,u=0,p=0,_=0,M=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const T=c[f];if(T.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(T.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){const b=i.hemi[M];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Dd(e){const t=new Ox(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Bx(e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Dd(e),t.set(s,[o])):r>=a.length?(o=new Dd(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Vx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Id=new ge,Wr=new U,Fl=new U;function Hx(e,t,n){let i=new xh;const s=new Ft,r=new Ft,a=new Te,o=new Kg,l=new Zg,c={},h=n.maxTextureSize,d={[ts]:fn,[fn]:ts,[Ai]:Ai},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:kx,fragmentShader:zx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new wn(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let f=this.type;this.render=function(A,L,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===N0&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=so);const y=e.getRenderTarget(),j=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Ci),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=f!==this.type;z&&L.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=A.length;X<B;X++){const V=A[X],N=V.shadow;if(N===void 0){It("WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Q=N.getFrameExtents();s.multiply(Q),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,N.mapSize.y=r.y));const Z=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=Z,N.map===null||z===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===qr){if(V.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ci(s.x,s.y,{format:cr,type:Li,minFilter:rn,magFilter:rn,generateMipmaps:!1}),N.map.texture.name=V.name+".shadowMap",N.map.depthTexture=new ra(s.x,s.y,ri),N.map.depthTexture.name=V.name+".shadowMapDepth",N.map.depthTexture.format=Di,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Je,N.map.depthTexture.magFilter=Je}else V.isPointLight?(N.map=new mp(s.x),N.map.depthTexture=new Vg(s.x,ui)):(N.map=new ci(s.x,s.y),N.map.depthTexture=new ra(s.x,s.y,ui)),N.map.depthTexture.name=V.name+".shadowMap",N.map.depthTexture.format=Di,this.type===so?(N.map.depthTexture.compareFunction=Z?gh:mh,N.map.depthTexture.minFilter=rn,N.map.depthTexture.magFilter=rn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Je,N.map.depthTexture.magFilter=Je);N.camera.updateProjectionMatrix()}const ct=N.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<ct;mt++){if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,mt),e.clear();else{mt===0&&(e.setRenderTarget(N.map),e.clear());const ut=N.getViewport(mt);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),k.viewport(a)}if(V.isPointLight){const ut=N.camera,zt=N.matrix,_e=V.distance||ut.far;_e!==ut.far&&(ut.far=_e,ut.updateProjectionMatrix()),Wr.setFromMatrixPosition(V.matrixWorld),ut.position.copy(Wr),Fl.copy(ut.position),Fl.add(Gx[mt]),ut.up.copy(Vx[mt]),ut.lookAt(Fl),ut.updateMatrixWorld(),zt.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Id.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Id,ut.coordinateSystem,ut.reversedDepth)}else N.updateMatrices(V);i=N.getFrustum(),b(L,v,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===qr&&S(N,v),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(y,j,R)};function S(A,L){const v=t.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ci(s.x,s.y,{format:cr,type:Li})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(L,null,v,u,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(L,null,v,p,M,null)}function T(A,L,v,y){let j=null;const R=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)j=R;else if(j=v.isPointLight===!0?l:o,e.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const k=j.uuid,z=L.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let B=X[z];B===void 0&&(B=j.clone(),X[z]=B,L.addEventListener("dispose",C)),j=B}if(j.visible=L.visible,j.wireframe=L.wireframe,y===qr?j.side=L.shadowSide!==null?L.shadowSide:L.side:j.side=L.shadowSide!==null?L.shadowSide:d[L.side],j.alphaMap=L.alphaMap,j.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,j.map=L.map,j.clipShadows=L.clipShadows,j.clippingPlanes=L.clippingPlanes,j.clipIntersection=L.clipIntersection,j.displacementMap=L.displacementMap,j.displacementScale=L.displacementScale,j.displacementBias=L.displacementBias,j.wireframeLinewidth=L.wireframeLinewidth,j.linewidth=L.linewidth,v.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const k=e.properties.get(j);k.light=v}return j}function b(A,L,v,y,j){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&j===qr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const z=t.update(A),X=A.material;if(Array.isArray(X)){const B=z.groups;for(let V=0,N=B.length;V<N;V++){const Q=B[V],Z=X[Q.materialIndex];if(Z&&Z.visible){const ct=T(A,Z,y,j);A.onBeforeShadow(e,A,L,v,z,ct,Q),e.renderBufferDirect(v,null,z,ct,A,Q),A.onAfterShadow(e,A,L,v,z,ct,Q)}}}else if(X.visible){const B=T(A,X,y,j);A.onBeforeShadow(e,A,L,v,z,B,null),e.renderBufferDirect(v,null,z,B,A,null),A.onAfterShadow(e,A,L,v,z,B,null)}}const k=A.children;for(let z=0,X=k.length;z<X;z++)b(k[z],L,v,y,j)}function C(A){A.target.removeEventListener("dispose",C);for(const v in c){const y=c[v],j=A.target.uuid;j in y&&(y[j].dispose(),delete y[j])}}}function Wx(e,t){function n(){let P=!1;const st=new Te;let et=null;const ft=new Te(0,0,0,0);return{setMask:function(J){et!==J&&!P&&(e.colorMask(J,J,J,J),et=J)},setLocked:function(J){P=J},setClear:function(J,H,vt,Nt,fe){fe===!0&&(J*=Nt,H*=Nt,vt*=Nt),st.set(J,H,vt,Nt),ft.equals(st)===!1&&(e.clearColor(J,H,vt,Nt),ft.copy(st))},reset:function(){P=!1,et=null,ft.set(-1,0,0,0)}}}function i(){let P=!1,st=!1,et=null,ft=null,J=null;return{setReversed:function(H){if(st!==H){const vt=t.get("EXT_clip_control");H?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),st=H;const Nt=J;J=null,this.setClear(Nt)}},getReversed:function(){return st},setTest:function(H){H?nt(e.DEPTH_TEST):rt(e.DEPTH_TEST)},setMask:function(H){et!==H&&!P&&(e.depthMask(H),et=H)},setFunc:function(H){if(st&&(H=pg[H]),ft!==H){switch(H){case Zl:e.depthFunc(e.NEVER);break;case $l:e.depthFunc(e.ALWAYS);break;case Jl:e.depthFunc(e.LESS);break;case or:e.depthFunc(e.LEQUAL);break;case Ql:e.depthFunc(e.EQUAL);break;case tc:e.depthFunc(e.GEQUAL);break;case ec:e.depthFunc(e.GREATER);break;case nc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ft=H}},setLocked:function(H){P=H},setClear:function(H){J!==H&&(J=H,st&&(H=1-H),e.clearDepth(H))},reset:function(){P=!1,et=null,ft=null,J=null,st=!1}}}function s(){let P=!1,st=null,et=null,ft=null,J=null,H=null,vt=null,Nt=null,fe=null;return{setTest:function(se){P||(se?nt(e.STENCIL_TEST):rt(e.STENCIL_TEST))},setMask:function(se){st!==se&&!P&&(e.stencilMask(se),st=se)},setFunc:function(se,xi,Mi){(et!==se||ft!==xi||J!==Mi)&&(e.stencilFunc(se,xi,Mi),et=se,ft=xi,J=Mi)},setOp:function(se,xi,Mi){(H!==se||vt!==xi||Nt!==Mi)&&(e.stencilOp(se,xi,Mi),H=se,vt=xi,Nt=Mi)},setLocked:function(se){P=se},setClear:function(se){fe!==se&&(e.clearStencil(se),fe=se)},reset:function(){P=!1,st=null,et=null,ft=null,J=null,H=null,vt=null,Nt=null,fe=null}}}const r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],_=null,M=!1,m=null,f=null,S=null,T=null,b=null,C=null,A=null,L=new jt(0,0,0),v=0,y=!1,j=null,R=null,k=null,z=null,X=null;const B=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=N>=1):Q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=N>=2);let Z=null,ct={};const mt=e.getParameter(e.SCISSOR_BOX),ut=e.getParameter(e.VIEWPORT),zt=new Te().fromArray(mt),_e=new Te().fromArray(ut);function me(P,st,et,ft){const J=new Uint8Array(4),H=e.createTexture();e.bindTexture(P,H),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let vt=0;vt<et;vt++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,ft,0,e.RGBA,e.UNSIGNED_BYTE,J):e.texImage2D(st+vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,J);return H}const q={};q[e.TEXTURE_2D]=me(e.TEXTURE_2D,e.TEXTURE_2D,1),q[e.TEXTURE_CUBE_MAP]=me(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[e.TEXTURE_2D_ARRAY]=me(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),q[e.TEXTURE_3D]=me(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),a.setFunc(or),Vt(!1),we(Ru),nt(e.CULL_FACE),ie(Ci);function nt(P){h[P]!==!0&&(e.enable(P),h[P]=!0)}function rt(P){h[P]!==!1&&(e.disable(P),h[P]=!1)}function Bt(P,st){return d[P]!==st?(e.bindFramebuffer(P,st),d[P]=st,P===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=st),P===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=st),!0):!1}function Lt(P,st){let et=p,ft=!1;if(P){et=u.get(st),et===void 0&&(et=[],u.set(st,et));const J=P.textures;if(et.length!==J.length||et[0]!==e.COLOR_ATTACHMENT0){for(let H=0,vt=J.length;H<vt;H++)et[H]=e.COLOR_ATTACHMENT0+H;et.length=J.length,ft=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,ft=!0);ft&&e.drawBuffers(et)}function Ut(P){return _!==P?(e.useProgram(P),_=P,!0):!1}const He={[ms]:e.FUNC_ADD,[O0]:e.FUNC_SUBTRACT,[B0]:e.FUNC_REVERSE_SUBTRACT};He[k0]=e.MIN,He[z0]=e.MAX;const Kt={[G0]:e.ZERO,[V0]:e.ONE,[H0]:e.SRC_COLOR,[jl]:e.SRC_ALPHA,[K0]:e.SRC_ALPHA_SATURATE,[q0]:e.DST_COLOR,[X0]:e.DST_ALPHA,[W0]:e.ONE_MINUS_SRC_COLOR,[Kl]:e.ONE_MINUS_SRC_ALPHA,[j0]:e.ONE_MINUS_DST_COLOR,[Y0]:e.ONE_MINUS_DST_ALPHA,[Z0]:e.CONSTANT_COLOR,[$0]:e.ONE_MINUS_CONSTANT_COLOR,[J0]:e.CONSTANT_ALPHA,[Q0]:e.ONE_MINUS_CONSTANT_ALPHA};function ie(P,st,et,ft,J,H,vt,Nt,fe,se){if(P===Ci){M===!0&&(rt(e.BLEND),M=!1);return}if(M===!1&&(nt(e.BLEND),M=!0),P!==F0){if(P!==m||se!==y){if((f!==ms||b!==ms)&&(e.blendEquation(e.FUNC_ADD),f=ms,b=ms),se)switch(P){case ir:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Cu:e.blendFunc(e.ONE,e.ONE);break;case Pu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Lu:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Zt("WebGLState: Invalid blending: ",P);break}else switch(P){case ir:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Cu:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Pu:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",P);break}S=null,T=null,C=null,A=null,L.set(0,0,0),v=0,m=P,y=se}return}J=J||st,H=H||et,vt=vt||ft,(st!==f||J!==b)&&(e.blendEquationSeparate(He[st],He[J]),f=st,b=J),(et!==S||ft!==T||H!==C||vt!==A)&&(e.blendFuncSeparate(Kt[et],Kt[ft],Kt[H],Kt[vt]),S=et,T=ft,C=H,A=vt),(Nt.equals(L)===!1||fe!==v)&&(e.blendColor(Nt.r,Nt.g,Nt.b,fe),L.copy(Nt),v=fe),m=P,y=!1}function he(P,st){P.side===Ai?rt(e.CULL_FACE):nt(e.CULL_FACE);let et=P.side===fn;st&&(et=!et),Vt(et),P.blending===ir&&P.transparent===!1?ie(Ci):ie(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const ft=P.stencilWrite;o.setTest(ft),ft&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(P){j!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),j=P)}function we(P){P!==I0?(nt(e.CULL_FACE),P!==R&&(P===Ru?e.cullFace(e.BACK):P===U0?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):rt(e.CULL_FACE),R=P}function w(P){P!==k&&(V&&e.lineWidth(P),k=P)}function De(P,st,et){P?(nt(e.POLYGON_OFFSET_FILL),(z!==st||X!==et)&&(z=st,X=et,a.getReversed()&&(st=-st),e.polygonOffset(st,et))):rt(e.POLYGON_OFFSET_FILL)}function ne(P){P?nt(e.SCISSOR_TEST):rt(e.SCISSOR_TEST)}function de(P){P===void 0&&(P=e.TEXTURE0+B-1),Z!==P&&(e.activeTexture(P),Z=P)}function St(P,st,et){et===void 0&&(Z===null?et=e.TEXTURE0+B-1:et=Z);let ft=ct[et];ft===void 0&&(ft={type:void 0,texture:void 0},ct[et]=ft),(ft.type!==P||ft.texture!==st)&&(Z!==et&&(e.activeTexture(et),Z=et),e.bindTexture(P,st||q[P]),ft.type=P,ft.texture=st)}function E(){const P=ct[Z];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{e.compressedTexImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function D(){try{e.compressedTexImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function Y(){try{e.texSubImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function K(){try{e.texSubImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function gt(){try{e.compressedTexSubImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function it(){try{e.texStorage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function Ct(){try{e.texStorage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function Dt(){try{e.texImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function $(){try{e.texImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function tt(P){zt.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),zt.copy(P))}function _t(P){_e.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function xt(P,st){let et=c.get(st);et===void 0&&(et=new WeakMap,c.set(st,et));let ft=et.get(P);ft===void 0&&(ft=e.getUniformBlockIndex(st,P.name),et.set(P,ft))}function ht(P,st){const ft=c.get(st).get(P);l.get(st)!==ft&&(e.uniformBlockBinding(st,ft,P.__bindingPointIndex),l.set(st,ft))}function Ht(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},Z=null,ct={},d={},u=new WeakMap,p=[],_=null,M=!1,m=null,f=null,S=null,T=null,b=null,C=null,A=null,L=new jt(0,0,0),v=0,y=!1,j=null,R=null,k=null,z=null,X=null,zt.set(0,0,e.canvas.width,e.canvas.height),_e.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:rt,bindFramebuffer:Bt,drawBuffers:Lt,useProgram:Ut,setBlending:ie,setMaterial:he,setFlipSided:Vt,setCullFace:we,setLineWidth:w,setPolygonOffset:De,setScissorTest:ne,activeTexture:de,bindTexture:St,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Dt,texImage3D:$,updateUBOMapping:xt,uniformBlockBinding:ht,texStorage2D:it,texStorage3D:Ct,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:gt,scissor:tt,viewport:_t,reset:Ht}}function Xx(e,t,n,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return p?new OffscreenCanvas(E,g):sa("canvas")}function M(E,g,D){let Y=1;const K=St(E);if((K.width>D||K.height>D)&&(Y=D/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(Y*K.width),gt=Math.floor(Y*K.height);d===void 0&&(d=_(W,gt));const it=g?_(W,gt):d;return it.width=W,it.height=gt,it.getContext("2d").drawImage(E,0,0,W,gt),It("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+gt+")."),it}else return"data"in E&&It("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){e.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(E,g,D,Y,K=!1){if(E!==null){if(e[E]!==void 0)return e[E];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=g;if(g===e.RED&&(D===e.FLOAT&&(W=e.R32F),D===e.HALF_FLOAT&&(W=e.R16F),D===e.UNSIGNED_BYTE&&(W=e.R8)),g===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.R8UI),D===e.UNSIGNED_SHORT&&(W=e.R16UI),D===e.UNSIGNED_INT&&(W=e.R32UI),D===e.BYTE&&(W=e.R8I),D===e.SHORT&&(W=e.R16I),D===e.INT&&(W=e.R32I)),g===e.RG&&(D===e.FLOAT&&(W=e.RG32F),D===e.HALF_FLOAT&&(W=e.RG16F),D===e.UNSIGNED_BYTE&&(W=e.RG8)),g===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RG8UI),D===e.UNSIGNED_SHORT&&(W=e.RG16UI),D===e.UNSIGNED_INT&&(W=e.RG32UI),D===e.BYTE&&(W=e.RG8I),D===e.SHORT&&(W=e.RG16I),D===e.INT&&(W=e.RG32I)),g===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RGB8UI),D===e.UNSIGNED_SHORT&&(W=e.RGB16UI),D===e.UNSIGNED_INT&&(W=e.RGB32UI),D===e.BYTE&&(W=e.RGB8I),D===e.SHORT&&(W=e.RGB16I),D===e.INT&&(W=e.RGB32I)),g===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),D===e.UNSIGNED_INT&&(W=e.RGBA32UI),D===e.BYTE&&(W=e.RGBA8I),D===e.SHORT&&(W=e.RGBA16I),D===e.INT&&(W=e.RGBA32I)),g===e.RGB&&(D===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),D===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),g===e.RGBA){const gt=K?po:$t.getTransfer(Y);D===e.FLOAT&&(W=e.RGBA32F),D===e.HALF_FLOAT&&(W=e.RGBA16F),D===e.UNSIGNED_BYTE&&(W=gt===re?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function b(E,g){let D;return E?g===null||g===ui||g===na?D=e.DEPTH24_STENCIL8:g===ri?D=e.DEPTH32F_STENCIL8:g===ea&&(D=e.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ui||g===na?D=e.DEPTH_COMPONENT24:g===ri?D=e.DEPTH_COMPONENT32F:g===ea&&(D=e.DEPTH_COMPONENT16),D}function C(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Je&&E.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){const g=E.target;g.removeEventListener("dispose",A),v(g),g.isVideoTexture&&h.delete(g)}function L(E){const g=E.target;g.removeEventListener("dispose",L),j(g)}function v(E){const g=i.get(E);if(g.__webglInit===void 0)return;const D=E.source,Y=u.get(D);if(Y){const K=Y[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(E),Object.keys(Y).length===0&&u.delete(D)}i.remove(E)}function y(E){const g=i.get(E);e.deleteTexture(g.__webglTexture);const D=E.source,Y=u.get(D);delete Y[g.__cacheKey],a.memory.textures--}function j(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let K=0;K<g.__webglFramebuffer[Y].length;K++)e.deleteFramebuffer(g.__webglFramebuffer[Y][K]);else e.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)e.deleteFramebuffer(g.__webglFramebuffer[Y]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=E.textures;for(let Y=0,K=D.length;Y<K;Y++){const W=i.get(D[Y]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(D[Y])}i.remove(E)}let R=0;function k(){R=0}function z(){const E=R;return E>=s.maxTextures&&It("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function X(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function B(E,g){const D=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&D.__version!==E.version){const Y=E.image;if(Y===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{q(D,E,g);return}}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+g)}function V(E,g){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){q(D,E,g);return}else E.isExternalTexture&&(D.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+g)}function N(E,g){const D=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){q(D,E,g);return}n.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+g)}function Q(E,g){const D=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&D.__version!==E.version){nt(D,E,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+g)}const Z={[ic]:e.REPEAT,[Ri]:e.CLAMP_TO_EDGE,[sc]:e.MIRRORED_REPEAT},ct={[Je]:e.NEAREST,[ng]:e.NEAREST_MIPMAP_NEAREST,[wa]:e.NEAREST_MIPMAP_LINEAR,[rn]:e.LINEAR,[sl]:e.LINEAR_MIPMAP_NEAREST,[_s]:e.LINEAR_MIPMAP_LINEAR},mt={[rg]:e.NEVER,[hg]:e.ALWAYS,[ag]:e.LESS,[mh]:e.LEQUAL,[og]:e.EQUAL,[gh]:e.GEQUAL,[lg]:e.GREATER,[cg]:e.NOTEQUAL};function ut(E,g){if(g.type===ri&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===rn||g.magFilter===sl||g.magFilter===wa||g.magFilter===_s||g.minFilter===rn||g.minFilter===sl||g.minFilter===wa||g.minFilter===_s)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Z[g.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Z[g.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Z[g.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,ct[g.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,ct[g.minFilter]),g.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,mt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Je||g.minFilter!==wa&&g.minFilter!==_s||g.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function zt(E,g){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",A));const Y=g.source;let K=u.get(Y);K===void 0&&(K={},u.set(Y,K));const W=X(g);if(W!==E.__cacheKey){K[W]===void 0&&(K[W]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[W].usedTimes++;const gt=K[E.__cacheKey];gt!==void 0&&(K[E.__cacheKey].usedTimes--,gt.usedTimes===0&&y(g)),E.__cacheKey=W,E.__webglTexture=K[W].texture}return D}function _e(E,g,D){return Math.floor(Math.floor(E/D)/g)}function me(E,g,D,Y){const W=E.updateRanges;if(W.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,D,Y,g.data);else{W.sort(($,tt)=>$.start-tt.start);let gt=0;for(let $=1;$<W.length;$++){const tt=W[gt],_t=W[$],xt=tt.start+tt.count,ht=_e(_t.start,g.width,4),Ht=_e(tt.start,g.width,4);_t.start<=xt+1&&ht===Ht&&_e(_t.start+_t.count-1,g.width,4)===ht?tt.count=Math.max(tt.count,_t.start+_t.count-tt.start):(++gt,W[gt]=_t)}W.length=gt+1;const it=e.getParameter(e.UNPACK_ROW_LENGTH),Ct=e.getParameter(e.UNPACK_SKIP_PIXELS),Dt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let $=0,tt=W.length;$<tt;$++){const _t=W[$],xt=Math.floor(_t.start/4),ht=Math.ceil(_t.count/4),Ht=xt%g.width,P=Math.floor(xt/g.width),st=ht,et=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(e.UNPACK_SKIP_ROWS,P),n.texSubImage2D(e.TEXTURE_2D,0,Ht,P,st,et,D,Y,g.data)}E.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,it),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(e.UNPACK_SKIP_ROWS,Dt)}}function q(E,g,D){let Y=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=e.TEXTURE_3D);const K=zt(E,g),W=g.source;n.bindTexture(Y,E.__webglTexture,e.TEXTURE0+D);const gt=i.get(W);if(W.version!==gt.__version||K===!0){n.activeTexture(e.TEXTURE0+D);const it=$t.getPrimaries($t.workingColorSpace),Ct=g.colorSpace===Zi?null:$t.getPrimaries(g.colorSpace),Dt=g.colorSpace===Zi||it===Ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let $=M(g.image,!1,s.maxTextureSize);$=de(g,$);const tt=r.convert(g.format,g.colorSpace),_t=r.convert(g.type);let xt=T(g.internalFormat,tt,_t,g.colorSpace,g.isVideoTexture);ut(Y,g);let ht;const Ht=g.mipmaps,P=g.isVideoTexture!==!0,st=gt.__version===void 0||K===!0,et=W.dataReady,ft=C(g,$);if(g.isDepthTexture)xt=b(g.format===vs,g.type),st&&(P?n.texStorage2D(e.TEXTURE_2D,1,xt,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,xt,$.width,$.height,0,tt,_t,null));else if(g.isDataTexture)if(Ht.length>0){P&&st&&n.texStorage2D(e.TEXTURE_2D,ft,xt,Ht[0].width,Ht[0].height);for(let J=0,H=Ht.length;J<H;J++)ht=Ht[J],P?et&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ht.width,ht.height,tt,_t,ht.data):n.texImage2D(e.TEXTURE_2D,J,xt,ht.width,ht.height,0,tt,_t,ht.data);g.generateMipmaps=!1}else P?(st&&n.texStorage2D(e.TEXTURE_2D,ft,xt,$.width,$.height),et&&me(g,$,tt,_t)):n.texImage2D(e.TEXTURE_2D,0,xt,$.width,$.height,0,tt,_t,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&st&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,xt,Ht[0].width,Ht[0].height,$.depth);for(let J=0,H=Ht.length;J<H;J++)if(ht=Ht[J],g.format!==qn)if(tt!==null)if(P){if(et)if(g.layerUpdates.size>0){const vt=hd(ht.width,ht.height,g.format,g.type);for(const Nt of g.layerUpdates){const fe=ht.data.subarray(Nt*vt/ht.data.BYTES_PER_ELEMENT,(Nt+1)*vt/ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,Nt,ht.width,ht.height,1,tt,fe)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,$.depth,tt,ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,xt,ht.width,ht.height,$.depth,0,ht.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?et&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,$.depth,tt,_t,ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,xt,ht.width,ht.height,$.depth,0,tt,_t,ht.data)}else{P&&st&&n.texStorage2D(e.TEXTURE_2D,ft,xt,Ht[0].width,Ht[0].height);for(let J=0,H=Ht.length;J<H;J++)ht=Ht[J],g.format!==qn?tt!==null?P?et&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,ht.width,ht.height,tt,ht.data):n.compressedTexImage2D(e.TEXTURE_2D,J,xt,ht.width,ht.height,0,ht.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?et&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ht.width,ht.height,tt,_t,ht.data):n.texImage2D(e.TEXTURE_2D,J,xt,ht.width,ht.height,0,tt,_t,ht.data)}else if(g.isDataArrayTexture)if(P){if(st&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ft,xt,$.width,$.height,$.depth),et)if(g.layerUpdates.size>0){const J=hd($.width,$.height,g.format,g.type);for(const H of g.layerUpdates){const vt=$.data.subarray(H*J/$.data.BYTES_PER_ELEMENT,(H+1)*J/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,H,$.width,$.height,1,tt,_t,vt)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,tt,_t,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,xt,$.width,$.height,$.depth,0,tt,_t,$.data);else if(g.isData3DTexture)P?(st&&n.texStorage3D(e.TEXTURE_3D,ft,xt,$.width,$.height,$.depth),et&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,tt,_t,$.data)):n.texImage3D(e.TEXTURE_3D,0,xt,$.width,$.height,$.depth,0,tt,_t,$.data);else if(g.isFramebufferTexture){if(st)if(P)n.texStorage2D(e.TEXTURE_2D,ft,xt,$.width,$.height);else{let J=$.width,H=$.height;for(let vt=0;vt<ft;vt++)n.texImage2D(e.TEXTURE_2D,vt,xt,J,H,0,tt,_t,null),J>>=1,H>>=1}}else if(Ht.length>0){if(P&&st){const J=St(Ht[0]);n.texStorage2D(e.TEXTURE_2D,ft,xt,J.width,J.height)}for(let J=0,H=Ht.length;J<H;J++)ht=Ht[J],P?et&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,tt,_t,ht):n.texImage2D(e.TEXTURE_2D,J,xt,tt,_t,ht);g.generateMipmaps=!1}else if(P){if(st){const J=St($);n.texStorage2D(e.TEXTURE_2D,ft,xt,J.width,J.height)}et&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,tt,_t,$)}else n.texImage2D(e.TEXTURE_2D,0,xt,tt,_t,$);m(g)&&f(Y),gt.__version=W.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function nt(E,g,D){if(g.image.length!==6)return;const Y=zt(E,g),K=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+D);const W=i.get(K);if(K.version!==W.__version||Y===!0){n.activeTexture(e.TEXTURE0+D);const gt=$t.getPrimaries($t.workingColorSpace),it=g.colorSpace===Zi?null:$t.getPrimaries(g.colorSpace),Ct=g.colorSpace===Zi||gt===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Dt=g.isCompressedTexture||g.image[0].isCompressedTexture,$=g.image[0]&&g.image[0].isDataTexture,tt=[];for(let H=0;H<6;H++)!Dt&&!$?tt[H]=M(g.image[H],!0,s.maxCubemapSize):tt[H]=$?g.image[H].image:g.image[H],tt[H]=de(g,tt[H]);const _t=tt[0],xt=r.convert(g.format,g.colorSpace),ht=r.convert(g.type),Ht=T(g.internalFormat,xt,ht,g.colorSpace),P=g.isVideoTexture!==!0,st=W.__version===void 0||Y===!0,et=K.dataReady;let ft=C(g,_t);ut(e.TEXTURE_CUBE_MAP,g);let J;if(Dt){P&&st&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ft,Ht,_t.width,_t.height);for(let H=0;H<6;H++){J=tt[H].mipmaps;for(let vt=0;vt<J.length;vt++){const Nt=J[vt];g.format!==qn?xt!==null?P?et&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt,0,0,Nt.width,Nt.height,xt,Nt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt,Ht,Nt.width,Nt.height,0,Nt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt,0,0,Nt.width,Nt.height,xt,ht,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt,Ht,Nt.width,Nt.height,0,xt,ht,Nt.data)}}}else{if(J=g.mipmaps,P&&st){J.length>0&&ft++;const H=St(tt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ft,Ht,H.width,H.height)}for(let H=0;H<6;H++)if($){P?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,tt[H].width,tt[H].height,xt,ht,tt[H].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ht,tt[H].width,tt[H].height,0,xt,ht,tt[H].data);for(let vt=0;vt<J.length;vt++){const fe=J[vt].image[H].image;P?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt+1,0,0,fe.width,fe.height,xt,ht,fe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt+1,Ht,fe.width,fe.height,0,xt,ht,fe.data)}}else{P?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,xt,ht,tt[H]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ht,xt,ht,tt[H]);for(let vt=0;vt<J.length;vt++){const Nt=J[vt];P?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt+1,0,0,xt,ht,Nt.image[H]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt+1,Ht,xt,ht,Nt.image[H])}}}m(g)&&f(e.TEXTURE_CUBE_MAP),W.__version=K.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function rt(E,g,D,Y,K,W){const gt=r.convert(D.format,D.colorSpace),it=r.convert(D.type),Ct=T(D.internalFormat,gt,it,D.colorSpace),Dt=i.get(g),$=i.get(D);if($.__renderTarget=g,!Dt.__hasExternalTextures){const tt=Math.max(1,g.width>>W),_t=Math.max(1,g.height>>W);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?n.texImage3D(K,W,Ct,tt,_t,g.depth,0,gt,it,null):n.texImage2D(K,W,Ct,tt,_t,0,gt,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,E),De(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,K,$.__webglTexture,0,w(g)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,K,$.__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Bt(E,g,D){if(e.bindRenderbuffer(e.RENDERBUFFER,E),g.depthBuffer){const Y=g.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=b(g.stencilBuffer,K),gt=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;De(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,w(g),W,g.width,g.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,w(g),W,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,W,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,gt,e.RENDERBUFFER,E)}else{const Y=g.textures;for(let K=0;K<Y.length;K++){const W=Y[K],gt=r.convert(W.format,W.colorSpace),it=r.convert(W.type),Ct=T(W.internalFormat,gt,it,W.colorSpace);De(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,w(g),Ct,g.width,g.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,w(g),Ct,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,Ct,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Lt(E,g,D){const Y=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),ut(e.TEXTURE_CUBE_MAP,g.depthTexture);const Dt=r.convert(g.depthTexture.format),$=r.convert(g.depthTexture.type);let tt;g.depthTexture.format===Di?tt=e.DEPTH_COMPONENT24:g.depthTexture.format===vs&&(tt=e.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,tt,g.width,g.height,0,Dt,$,null)}}else B(g.depthTexture,0);const W=K.__webglTexture,gt=w(g),it=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+D:e.TEXTURE_2D,Ct=g.depthTexture.format===vs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===Di)De(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Ct,it,W,0,gt):e.framebufferTexture2D(e.FRAMEBUFFER,Ct,it,W,0);else if(g.depthTexture.format===vs)De(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Ct,it,W,0,gt):e.framebufferTexture2D(e.FRAMEBUFFER,Ct,it,W,0);else throw new Error("Unknown depthTexture format")}function Ut(E){const g=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=Y}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let Y=0;Y<6;Y++)Lt(g.__webglFramebuffer[Y],E,Y);else{const Y=E.texture.mipmaps;Y&&Y.length>0?Lt(g.__webglFramebuffer[0],E,0):Lt(g.__webglFramebuffer,E,0)}else if(D){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=e.createRenderbuffer(),Bt(g.__webglDepthbuffer[Y],E,!1);else{const K=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,W)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),Bt(g.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,W)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function He(E,g,D){const Y=i.get(E);g!==void 0&&rt(Y.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&Ut(E)}function Kt(E){const g=E.texture,D=i.get(E),Y=i.get(g);E.addEventListener("dispose",L);const K=E.textures,W=E.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=g.version,a.memory.textures++),W){D.__webglFramebuffer=[];for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[it]=[];for(let Ct=0;Ct<g.mipmaps.length;Ct++)D.__webglFramebuffer[it][Ct]=e.createFramebuffer()}else D.__webglFramebuffer[it]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let it=0;it<g.mipmaps.length;it++)D.__webglFramebuffer[it]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(gt)for(let it=0,Ct=K.length;it<Ct;it++){const Dt=i.get(K[it]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=e.createTexture(),a.memory.textures++)}if(E.samples>0&&De(E)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){const Ct=K[it];D.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[it]);const Dt=r.convert(Ct.format,Ct.colorSpace),$=r.convert(Ct.type),tt=T(Ct.internalFormat,Dt,$,Ct.colorSpace,E.isXRRenderTarget===!0),_t=w(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,_t,tt,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,D.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),Bt(D.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),ut(e.TEXTURE_CUBE_MAP,g);for(let it=0;it<6;it++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ct=0;Ct<g.mipmaps.length;Ct++)rt(D.__webglFramebuffer[it][Ct],E,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct);else rt(D.__webglFramebuffer[it],E,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(g)&&f(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(gt){for(let it=0,Ct=K.length;it<Ct;it++){const Dt=K[it],$=i.get(Dt);let tt=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(tt=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(tt,$.__webglTexture),ut(tt,Dt),rt(D.__webglFramebuffer,E,Dt,e.COLOR_ATTACHMENT0+it,tt,0),m(Dt)&&f(tt)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(it=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,Y.__webglTexture),ut(it,g),g.mipmaps&&g.mipmaps.length>0)for(let Ct=0;Ct<g.mipmaps.length;Ct++)rt(D.__webglFramebuffer[Ct],E,g,e.COLOR_ATTACHMENT0,it,Ct);else rt(D.__webglFramebuffer,E,g,e.COLOR_ATTACHMENT0,it,0);m(g)&&f(it),n.unbindTexture()}E.depthBuffer&&Ut(E)}function ie(E){const g=E.textures;for(let D=0,Y=g.length;D<Y;D++){const K=g[D];if(m(K)){const W=S(E),gt=i.get(K).__webglTexture;n.bindTexture(W,gt),f(W),n.unbindTexture()}}}const he=[],Vt=[];function we(E){if(E.samples>0){if(De(E)===!1){const g=E.textures,D=E.width,Y=E.height;let K=e.COLOR_BUFFER_BIT;const W=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,gt=i.get(E),it=g.length>1;if(it)for(let Dt=0;Dt<g.length;Dt++)n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const Ct=E.texture.mipmaps;Ct&&Ct.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Dt=0;Dt<g.length;Dt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),it){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,gt.__webglColorRenderbuffer[Dt]);const $=i.get(g[Dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,$,0)}e.blitFramebuffer(0,0,D,Y,0,0,D,Y,K,e.NEAREST),l===!0&&(he.length=0,Vt.length=0,he.push(e.COLOR_ATTACHMENT0+Dt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(he.push(W),Vt.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Vt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),it)for(let Dt=0;Dt<g.length;Dt++){n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.RENDERBUFFER,gt.__webglColorRenderbuffer[Dt]);const $=i.get(g[Dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Dt,e.TEXTURE_2D,$,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function w(E){return Math.min(s.maxSamples,E.samples)}function De(E){const g=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ne(E){const g=a.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function de(E,g){const D=E.colorSpace,Y=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||D!==hr&&D!==Zi&&($t.getTransfer(D)===re?(Y!==qn||K!==yn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",D)),g}function St(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=Q,this.rebindTextures=He,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Yx(e,t){function n(i,s=Zi){let r;const a=$t.getTransfer(s);if(i===yn)return e.UNSIGNED_BYTE;if(i===hh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Zf)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===$f)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===jf)return e.BYTE;if(i===Kf)return e.SHORT;if(i===ea)return e.UNSIGNED_SHORT;if(i===ch)return e.INT;if(i===ui)return e.UNSIGNED_INT;if(i===ri)return e.FLOAT;if(i===Li)return e.HALF_FLOAT;if(i===Jf)return e.ALPHA;if(i===Qf)return e.RGB;if(i===qn)return e.RGBA;if(i===Di)return e.DEPTH_COMPONENT;if(i===vs)return e.DEPTH_STENCIL;if(i===tp)return e.RED;if(i===dh)return e.RED_INTEGER;if(i===cr)return e.RG;if(i===fh)return e.RG_INTEGER;if(i===ph)return e.RGBA_INTEGER;if(i===ro||i===ao||i===oo||i===lo)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===ac||i===oc||i===lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cc||i===hc)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===dc)return r.COMPRESSED_R11_EAC;if(i===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pc)return r.COMPRESSED_RG11_EAC;if(i===mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gc||i===_c||i===vc||i===xc||i===Mc||i===Sc||i===Ec||i===yc||i===bc||i===Tc||i===Ac||i===wc||i===Rc||i===Cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ac)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===Lc||i===Dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Pc)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ic||i===Uc||i===Nc||i===Fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ic)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jx=`
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

}`;class Kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new hp(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new fi({vertexShader:qx,fragmentShader:jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wn(new wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zx extends Ps{constructor(t,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",m=new Kx,f={},S=n.getContextAttributes();let T=null,b=null;const C=[],A=[],L=new Ft;let v=null;const y=new Bn;y.viewport=new Te;const j=new Bn;j.viewport=new Te;const R=[y,j],k=new r_;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=C[q];return nt===void 0&&(nt=new ul,C[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=C[q];return nt===void 0&&(nt=new ul,C[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=C[q];return nt===void 0&&(nt=new ul,C[q]=nt),nt.getHandSpace()};function B(q){const nt=A.indexOf(q.inputSource);if(nt===-1)return;const rt=C[nt];rt!==void 0&&(rt.update(q.inputSource,q.frame,c||a),rt.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",N);for(let q=0;q<C.length;q++){const nt=A[q];nt!==null&&(A[q]=null,C[q].disconnect(nt))}z=null,X=null,m.reset();for(const q in f)delete f[q];t.setRenderTarget(T),p=null,u=null,d=null,s=null,b=null,me.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",N),S.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(L),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Bt=null,Lt=null;S.depth&&(Lt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,rt=S.stencil?vs:Di,Bt=S.stencil?na:ui);const Ut={colorFormat:n.RGBA8,depthFormat:Lt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ci(u.textureWidth,u.textureHeight,{format:qn,type:yn,depthTexture:new ra(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ci(p.framebufferWidth,p.framebufferHeight,{format:qn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(q){for(let nt=0;nt<q.removed.length;nt++){const rt=q.removed[nt],Bt=A.indexOf(rt);Bt>=0&&(A[Bt]=null,C[Bt].disconnect(rt))}for(let nt=0;nt<q.added.length;nt++){const rt=q.added[nt];let Bt=A.indexOf(rt);if(Bt===-1){for(let Ut=0;Ut<C.length;Ut++)if(Ut>=A.length){A.push(rt),Bt=Ut;break}else if(A[Ut]===null){A[Ut]=rt,Bt=Ut;break}if(Bt===-1)break}const Lt=C[Bt];Lt&&Lt.connect(rt)}}const Q=new U,Z=new U;function ct(q,nt,rt){Q.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(rt.matrixWorld);const Bt=Q.distanceTo(Z),Lt=nt.projectionMatrix.elements,Ut=rt.projectionMatrix.elements,He=Lt[14]/(Lt[10]-1),Kt=Lt[14]/(Lt[10]+1),ie=(Lt[9]+1)/Lt[5],he=(Lt[9]-1)/Lt[5],Vt=(Lt[8]-1)/Lt[0],we=(Ut[8]+1)/Ut[0],w=He*Vt,De=He*we,ne=Bt/(-Vt+we),de=ne*-Vt;if(nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(ne),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Lt[10]===-1)q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const St=He+ne,E=Kt+ne,g=w-de,D=De+(Bt-de),Y=ie*Kt/E*St,K=he*Kt/E*St;q.projectionMatrix.makePerspective(g,D,Y,K,St,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function mt(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let nt=q.near,rt=q.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),k.near=j.near=y.near=nt,k.far=j.far=y.far=rt,(z!==k.near||X!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,X=k.far),k.layers.mask=q.layers.mask|6,y.layers.mask=k.layers.mask&-5,j.layers.mask=k.layers.mask&-3;const Bt=q.parent,Lt=k.cameras;mt(k,Bt);for(let Ut=0;Ut<Lt.length;Ut++)mt(Lt[Ut],Bt);Lt.length===2?ct(k,y,j):k.projectionMatrix.copy(y.projectionMatrix),ut(q,k,Bt)};function ut(q,nt,rt){rt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Oc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(q){return f[q]};let zt=null;function _e(q,nt){if(h=nt.getViewerPose(c||a),_=nt,h!==null){const rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let Bt=!1;rt.length!==k.cameras.length&&(k.cameras.length=0,Bt=!0);for(let Kt=0;Kt<rt.length;Kt++){const ie=rt[Kt];let he=null;if(p!==null)he=p.getViewport(ie);else{const we=d.getViewSubImage(u,ie);he=we.viewport,Kt===0&&(t.setRenderTargetTextures(b,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(b))}let Vt=R[Kt];Vt===void 0&&(Vt=new Bn,Vt.layers.enable(Kt),Vt.viewport=new Te,R[Kt]=Vt),Vt.matrix.fromArray(ie.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(ie.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(he.x,he.y,he.width,he.height),Kt===0&&(k.matrix.copy(Vt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Bt===!0&&k.cameras.push(Vt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const Kt=d.getDepthInformation(rt[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,s.renderState)}if(Lt&&Lt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Kt=0;Kt<rt.length;Kt++){const ie=rt[Kt].camera;if(ie){let he=f[ie];he||(he=new hp,f[ie]=he);const Vt=d.getCameraImage(ie);he.sourceTexture=Vt}}}}for(let rt=0;rt<C.length;rt++){const Bt=A[rt],Lt=C[rt];Bt!==null&&Lt!==void 0&&Lt.update(Bt,nt,c||a)}zt&&zt(q,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),_=null}const me=new pp;me.setAnimationLoop(_e),this.setAnimationLoop=function(q){zt=q},this.dispose=function(){}}}const ds=new di,$x=new ge;function Jx(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,up(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,T,b){f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),T=S.envMap,b=S.envMapRotation;T&&(m.envMap.value=T,ds.copy(b),ds.x*=-1,ds.y*=-1,ds.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(ds)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=T*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Qx(e,t,n,i){let s={},r={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const b=T.program;i.uniformBlockBinding(S,b)}function c(S,T){let b=s[S.id];b===void 0&&(_(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",m));const C=T.program;i.updateUBOMapping(S,C);const A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function h(S){const T=d();S.__bindingPointIndex=T;const b=e.createBuffer(),C=S.__size,A=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,C,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,b),b}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const T=s[S.id],b=S.uniforms,C=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let A=0,L=b.length;A<L;A++){const v=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,j=v.length;y<j;y++){const R=v[y];if(p(R,A,y,C)===!0){const k=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let B=0;B<z.length;B++){const V=z[B],N=M(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,e.bufferSubData(e.UNIFORM_BUFFER,k+X,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,X),X+=N.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(S,T,b,C){const A=S.value,L=T+"_"+b;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{const v=C[L];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return C[L]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function _(S){const T=S.uniforms;let b=0;const C=16;for(let L=0,v=T.length;L<v;L++){const y=Array.isArray(T[L])?T[L]:[T[L]];for(let j=0,R=y.length;j<R;j++){const k=y[j],z=Array.isArray(k.value)?k.value:[k.value];for(let X=0,B=z.length;X<B;X++){const V=z[X],N=M(V),Q=b%C,Z=Q%N.boundary,ct=Q+Z;b+=Z,ct!==0&&C-ct<N.storage&&(b+=C-ct),k.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=N.storage}}}const A=b%C;return A>0&&(b+=C-A),S.__size=b,S.__cache={},this}function M(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):It("WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){const T=S.target;T.removeEventListener("dispose",m);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(const S in s)e.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}const t3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function e3(){return ei===null&&(ei=new Fg(t3,16,16,cr,Li),ei.name="DFG_LUT",ei.minFilter=rn,ei.magFilter=rn,ei.wrapS=Ri,ei.wrapT=Ri,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class n3{constructor(t={}){const{canvas:n=dg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=yn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=p,m=new Set([ph,fh,dh]),f=new Set([yn,ui,ea,na,hh,uh]),S=new Uint32Array(4),T=new Int32Array(4);let b=null,C=null;const A=[],L=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let j=!1;this._outputColorSpace=En;let R=0,k=0,z=null,X=-1,B=null;const V=new Te,N=new Te;let Q=null;const Z=new jt(0);let ct=0,mt=n.width,ut=n.height,zt=1,_e=null,me=null;const q=new Te(0,0,mt,ut),nt=new Te(0,0,mt,ut);let rt=!1;const Bt=new xh;let Lt=!1,Ut=!1;const He=new ge,Kt=new U,ie=new Te,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function we(){return z===null?zt:1}let w=i;function De(x,I){return n.getContext(x,I)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oh}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",Nt,!1),n.addEventListener("webglcontextcreationerror",fe,!1),w===null){const I="webgl2";if(w=De(I,x),w===null)throw De(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Zt("WebGLRenderer: "+x.message),x}let ne,de,St,E,g,D,Y,K,W,gt,it,Ct,Dt,$,tt,_t,xt,ht,Ht,P,st,et,ft;function J(){ne=new n2(w),ne.init(),st=new Yx(w,ne),de=new jv(w,ne,t,st),St=new Wx(w,ne),de.reversedDepthBuffer&&u&&St.buffers.depth.setReversed(!0),E=new r2(w),g=new Px,D=new Xx(w,ne,St,g,de,st,E),Y=new e2(y),K=new h_(w),et=new Yv(w,K),W=new i2(w,K,E,et),gt=new o2(w,W,K,et,E),ht=new a2(w,de,D),tt=new Kv(g),it=new Cx(y,Y,ne,de,et,tt),Ct=new Jx(y,g),Dt=new Dx,$=new Bx(ne),xt=new Xv(y,Y,St,gt,_,l),_t=new Hx(y,gt,de),ft=new Qx(w,E,de,St),Ht=new qv(w,ne,E),P=new s2(w,ne,E),E.programs=it.programs,y.capabilities=de,y.extensions=ne,y.properties=g,y.renderLists=Dt,y.shadowMap=_t,y.state=St,y.info=E}J(),M!==yn&&(v=new c2(M,n.width,n.height,s,r));const H=new Zx(y,w);this.xr=H,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=ne.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ne.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return zt},this.setPixelRatio=function(x){x!==void 0&&(zt=x,this.setSize(mt,ut,!1))},this.getSize=function(x){return x.set(mt,ut)},this.setSize=function(x,I,G=!0){if(H.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=x,ut=I,n.width=Math.floor(x*zt),n.height=Math.floor(I*zt),G===!0&&(n.style.width=x+"px",n.style.height=I+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(mt*zt,ut*zt).floor()},this.setDrawingBufferSize=function(x,I,G){mt=x,ut=I,zt=G,n.width=Math.floor(x*G),n.height=Math.floor(I*G),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(M===yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(V)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,I,G,O){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,I,G,O),St.viewport(V.copy(q).multiplyScalar(zt).round())},this.getScissor=function(x){return x.copy(nt)},this.setScissor=function(x,I,G,O){x.isVector4?nt.set(x.x,x.y,x.z,x.w):nt.set(x,I,G,O),St.scissor(N.copy(nt).multiplyScalar(zt).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(x){St.setScissorTest(rt=x)},this.setOpaqueSort=function(x){_e=x},this.setTransparentSort=function(x){me=x},this.getClearColor=function(x){return x.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,G=!0){let O=0;if(x){let F=!1;if(z!==null){const ot=z.texture.format;F=m.has(ot)}if(F){const ot=z.texture.type,dt=f.has(ot),lt=xt.getClearColor(),Mt=xt.getClearAlpha(),Tt=lt.r,Ot=lt.g,Wt=lt.b;dt?(S[0]=Tt,S[1]=Ot,S[2]=Wt,S[3]=Mt,w.clearBufferuiv(w.COLOR,0,S)):(T[0]=Tt,T[1]=Ot,T[2]=Wt,T[3]=Mt,w.clearBufferiv(w.COLOR,0,T))}else O|=w.COLOR_BUFFER_BIT}I&&(O|=w.DEPTH_BUFFER_BIT),G&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),xt.dispose(),Dt.dispose(),$.dispose(),g.dispose(),Y.dispose(),gt.dispose(),et.dispose(),ft.dispose(),it.dispose(),H.dispose(),H.removeEventListener("sessionstart",Mu),H.removeEventListener("sessionend",Su),rs.stop()};function vt(x){x.preventDefault(),Fu("WebGLRenderer: Context Lost."),j=!0}function Nt(){Fu("WebGLRenderer: Context Restored."),j=!1;const x=E.autoReset,I=_t.enabled,G=_t.autoUpdate,O=_t.needsUpdate,F=_t.type;J(),E.autoReset=x,_t.enabled=I,_t.autoUpdate=G,_t.needsUpdate=O,_t.type=F}function fe(x){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function se(x){const I=x.target;I.removeEventListener("dispose",se),xi(I)}function xi(x){Mi(x),g.remove(x)}function Mi(x){const I=g.get(x).programs;I!==void 0&&(I.forEach(function(G){it.releaseProgram(G)}),x.isShaderMaterial&&it.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,G,O,F,ot){I===null&&(I=he);const dt=F.isMesh&&F.matrixWorld.determinant()<0,lt=T0(x,I,G,O,F);St.setMaterial(O,dt);let Mt=G.index,Tt=1;if(O.wireframe===!0){if(Mt=W.getWireframeAttribute(G),Mt===void 0)return;Tt=2}const Ot=G.drawRange,Wt=G.attributes.position;let wt=Ot.start*Tt,ae=(Ot.start+Ot.count)*Tt;ot!==null&&(wt=Math.max(wt,ot.start*Tt),ae=Math.min(ae,(ot.start+ot.count)*Tt)),Mt!==null?(wt=Math.max(wt,0),ae=Math.min(ae,Mt.count)):Wt!=null&&(wt=Math.max(wt,0),ae=Math.min(ae,Wt.count));const Re=ae-wt;if(Re<0||Re===1/0)return;et.setup(F,O,lt,G,Mt);let ye,oe=Ht;if(Mt!==null&&(ye=K.get(Mt),oe=P,oe.setIndex(ye)),F.isMesh)O.wireframe===!0?(St.setLineWidth(O.wireframeLinewidth*we()),oe.setMode(w.LINES)):oe.setMode(w.TRIANGLES);else if(F.isLine){let tn=O.linewidth;tn===void 0&&(tn=1),St.setLineWidth(tn*we()),F.isLineSegments?oe.setMode(w.LINES):F.isLineLoop?oe.setMode(w.LINE_LOOP):oe.setMode(w.LINE_STRIP)}else F.isPoints?oe.setMode(w.POINTS):F.isSprite&&oe.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)mo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))oe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const tn=F._multiDrawStarts,Et=F._multiDrawCounts,gn=F._multiDrawCount,Qt=Mt?K.get(Mt).bytesPerElement:1,Vn=g.get(O).currentProgram.getUniforms();for(let Qn=0;Qn<gn;Qn++)Vn.setValue(w,"_gl_DrawID",Qn),oe.render(tn[Qn]/Qt,Et[Qn])}else if(F.isInstancedMesh)oe.renderInstances(wt,Re,F.count);else if(G.isInstancedBufferGeometry){const tn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Et=Math.min(G.instanceCount,tn);oe.renderInstances(wt,Re,Et)}else oe.render(wt,Re)};function xu(x,I,G){x.transparent===!0&&x.side===Ai&&x.forceSinglePass===!1?(x.side=fn,x.needsUpdate=!0,Aa(x,I,G),x.side=ts,x.needsUpdate=!0,Aa(x,I,G),x.side=Ai):Aa(x,I,G)}this.compile=function(x,I,G=null){G===null&&(G=x),C=$.get(G),C.init(I),L.push(C),G.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(C.pushLight(F),F.castShadow&&C.pushShadow(F))}),x!==G&&x.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(C.pushLight(F),F.castShadow&&C.pushShadow(F))}),C.setupLights();const O=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let dt=0;dt<ot.length;dt++){const lt=ot[dt];xu(lt,G,F),O.add(lt)}else xu(ot,G,F),O.add(ot)}),C=L.pop(),O},this.compileAsync=function(x,I,G=null){const O=this.compile(x,I,G);return new Promise(F=>{function ot(){if(O.forEach(function(dt){g.get(dt).currentProgram.isReady()&&O.delete(dt)}),O.size===0){F(x);return}setTimeout(ot,10)}ne.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let tl=null;function b0(x){tl&&tl(x)}function Mu(){rs.stop()}function Su(){rs.start()}const rs=new pp;rs.setAnimationLoop(b0),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(x){tl=x,H.setAnimationLoop(x),x===null?rs.stop():rs.start()},H.addEventListener("sessionstart",Mu),H.addEventListener("sessionend",Su),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;const G=H.enabled===!0&&H.isPresenting===!0,O=v!==null&&(z===null||G)&&v.begin(y,z);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,I,z),C=$.get(x,L.length),C.init(I),L.push(C),He.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Bt.setFromProjectionMatrix(He,ai,I.reversedDepth),Ut=this.localClippingEnabled,Lt=tt.init(this.clippingPlanes,Ut),b=Dt.get(x,A.length),b.init(),A.push(b),H.enabled===!0&&H.isPresenting===!0){const dt=y.xr.getDepthSensingMesh();dt!==null&&el(dt,I,-1/0,y.sortObjects)}el(x,I,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(_e,me),Vt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Vt&&xt.addToRenderList(b,x),this.info.render.frame++,Lt===!0&&tt.beginShadows();const F=C.state.shadowsArray;if(_t.render(F,x,I),Lt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&v.hasRenderPass())===!1){const dt=b.opaque,lt=b.transmissive;if(C.setupLights(),I.isArrayCamera){const Mt=I.cameras;if(lt.length>0)for(let Tt=0,Ot=Mt.length;Tt<Ot;Tt++){const Wt=Mt[Tt];yu(dt,lt,x,Wt)}Vt&&xt.render(x);for(let Tt=0,Ot=Mt.length;Tt<Ot;Tt++){const Wt=Mt[Tt];Eu(b,x,Wt,Wt.viewport)}}else lt.length>0&&yu(dt,lt,x,I),Vt&&xt.render(x),Eu(b,x,I)}z!==null&&k===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),O&&v.end(y),x.isScene===!0&&x.onAfterRender(y,x,I),et.resetDefaultState(),X=-1,B=null,L.pop(),L.length>0?(C=L[L.length-1],Lt===!0&&tt.setGlobalState(y.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function el(x,I,G,O){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)C.pushLight(x),x.castShadow&&C.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Bt.intersectsSprite(x)){O&&ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(He);const dt=gt.update(x),lt=x.material;lt.visible&&b.push(x,dt,lt,G,ie.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Bt.intersectsObject(x))){const dt=gt.update(x),lt=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ie.copy(x.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),ie.copy(dt.boundingSphere.center)),ie.applyMatrix4(x.matrixWorld).applyMatrix4(He)),Array.isArray(lt)){const Mt=dt.groups;for(let Tt=0,Ot=Mt.length;Tt<Ot;Tt++){const Wt=Mt[Tt],wt=lt[Wt.materialIndex];wt&&wt.visible&&b.push(x,dt,wt,G,ie.z,Wt)}}else lt.visible&&b.push(x,dt,lt,G,ie.z,null)}}const ot=x.children;for(let dt=0,lt=ot.length;dt<lt;dt++)el(ot[dt],I,G,O)}function Eu(x,I,G,O){const{opaque:F,transmissive:ot,transparent:dt}=x;C.setupLightsView(G),Lt===!0&&tt.setGlobalState(y.clippingPlanes,G),O&&St.viewport(V.copy(O)),F.length>0&&Ta(F,I,G),ot.length>0&&Ta(ot,I,G),dt.length>0&&Ta(dt,I,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function yu(x,I,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[O.id]===void 0){const wt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[O.id]=new ci(1,1,{generateMipmaps:!0,type:wt?Li:yn,minFilter:_s,samples:de.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace})}const ot=C.state.transmissionRenderTarget[O.id],dt=O.viewport||V;ot.setSize(dt.z*y.transmissionResolutionScale,dt.w*y.transmissionResolutionScale);const lt=y.getRenderTarget(),Mt=y.getActiveCubeFace(),Tt=y.getActiveMipmapLevel();y.setRenderTarget(ot),y.getClearColor(Z),ct=y.getClearAlpha(),ct<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&xt.render(G);const Ot=y.toneMapping;y.toneMapping=li;const Wt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),C.setupLightsView(O),Lt===!0&&tt.setGlobalState(y.clippingPlanes,O),Ta(x,G,O),D.updateMultisampleRenderTarget(ot),D.updateRenderTargetMipmap(ot),ne.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ae=0,Re=I.length;ae<Re;ae++){const ye=I[ae],{object:oe,geometry:tn,material:Et,group:gn}=ye;if(Et.side===Ai&&oe.layers.test(O.layers)){const Qt=Et.side;Et.side=fn,Et.needsUpdate=!0,bu(oe,G,O,tn,Et,gn),Et.side=Qt,Et.needsUpdate=!0,wt=!0}}wt===!0&&(D.updateMultisampleRenderTarget(ot),D.updateRenderTargetMipmap(ot))}y.setRenderTarget(lt,Mt,Tt),y.setClearColor(Z,ct),Wt!==void 0&&(O.viewport=Wt),y.toneMapping=Ot}function Ta(x,I,G){const O=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ot=x.length;F<ot;F++){const dt=x[F],{object:lt,geometry:Mt,group:Tt}=dt;let Ot=dt.material;Ot.allowOverride===!0&&O!==null&&(Ot=O),lt.layers.test(G.layers)&&bu(lt,I,G,Mt,Ot,Tt)}}function bu(x,I,G,O,F,ot){x.onBeforeRender(y,I,G,O,F,ot),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(y,I,G,O,x,ot),F.transparent===!0&&F.side===Ai&&F.forceSinglePass===!1?(F.side=fn,F.needsUpdate=!0,y.renderBufferDirect(G,I,O,F,x,ot),F.side=ts,F.needsUpdate=!0,y.renderBufferDirect(G,I,O,F,x,ot),F.side=Ai):y.renderBufferDirect(G,I,O,F,x,ot),x.onAfterRender(y,I,G,O,F,ot)}function Aa(x,I,G){I.isScene!==!0&&(I=he);const O=g.get(x),F=C.state.lights,ot=C.state.shadowsArray,dt=F.state.version,lt=it.getParameters(x,F.state,ot,I,G),Mt=it.getProgramCacheKey(lt);let Tt=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Ot=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=Y.get(x.envMap||O.environment,Ot),O.envMapRotation=O.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Tt===void 0&&(x.addEventListener("dispose",se),Tt=new Map,O.programs=Tt);let Wt=Tt.get(Mt);if(Wt!==void 0){if(O.currentProgram===Wt&&O.lightsStateVersion===dt)return Au(x,lt),Wt}else lt.uniforms=it.getUniforms(x),x.onBeforeCompile(lt,y),Wt=it.acquireProgram(lt,Mt),Tt.set(Mt,Wt),O.uniforms=lt.uniforms;const wt=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=tt.uniform),Au(x,lt),O.needsLights=w0(x),O.lightsStateVersion=dt,O.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),O.currentProgram=Wt,O.uniformsList=null,Wt}function Tu(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ho.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Au(x,I){const G=g.get(x);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function T0(x,I,G,O,F){I.isScene!==!0&&(I=he),D.resetTextureUnits();const ot=I.fog,dt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,lt=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:hr,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Tt=Y.get(O.envMap||dt,Mt),Ot=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),wt=!!G.morphAttributes.position,ae=!!G.morphAttributes.normal,Re=!!G.morphAttributes.color;let ye=li;O.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ye=y.toneMapping);const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,tn=oe!==void 0?oe.length:0,Et=g.get(O),gn=C.state.lights;if(Lt===!0&&(Ut===!0||x!==B)){const We=x===B&&O.id===X;tt.setState(O,x,We)}let Qt=!1;O.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==gn.state.version||Et.outputColorSpace!==lt||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==Tt||O.fog===!0&&Et.fog!==ot||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Ot||Et.vertexTangents!==Wt||Et.morphTargets!==wt||Et.morphNormals!==ae||Et.morphColors!==Re||Et.toneMapping!==ye||Et.morphTargetsCount!==tn)&&(Qt=!0):(Qt=!0,Et.__version=O.version);let Vn=Et.currentProgram;Qt===!0&&(Vn=Aa(O,I,F));let Qn=!1,as=!1,Ns=!1;const ue=Vn.getUniforms(),$e=Et.uniforms;if(St.useProgram(Vn.program)&&(Qn=!0,as=!0,Ns=!0),O.id!==X&&(X=O.id,as=!0),Qn||B!==x){St.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ue.setValue(w,"projectionMatrix",x.projectionMatrix),ue.setValue(w,"viewMatrix",x.matrixWorldInverse);const ki=ue.map.cameraPosition;ki!==void 0&&ki.setValue(w,Kt.setFromMatrixPosition(x.matrixWorld)),de.logarithmicDepthBuffer&&ue.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ue.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),B!==x&&(B=x,as=!0,Ns=!0)}if(Et.needsLights&&(gn.state.directionalShadowMap.length>0&&ue.setValue(w,"directionalShadowMap",gn.state.directionalShadowMap,D),gn.state.spotShadowMap.length>0&&ue.setValue(w,"spotShadowMap",gn.state.spotShadowMap,D),gn.state.pointShadowMap.length>0&&ue.setValue(w,"pointShadowMap",gn.state.pointShadowMap,D)),F.isSkinnedMesh){ue.setOptional(w,F,"bindMatrix"),ue.setOptional(w,F,"bindMatrixInverse");const We=F.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),ue.setValue(w,"boneTexture",We.boneTexture,D))}F.isBatchedMesh&&(ue.setOptional(w,F,"batchingTexture"),ue.setValue(w,"batchingTexture",F._matricesTexture,D),ue.setOptional(w,F,"batchingIdTexture"),ue.setValue(w,"batchingIdTexture",F._indirectTexture,D),ue.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(w,"batchingColorTexture",F._colorsTexture,D));const Bi=G.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&ht.update(F,G,Vn),(as||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,ue.setValue(w,"receiveShadow",F.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&($e.envMapIntensity.value=I.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=e3()),as&&(ue.setValue(w,"toneMappingExposure",y.toneMappingExposure),Et.needsLights&&A0($e,Ns),ot&&O.fog===!0&&Ct.refreshFogUniforms($e,ot),Ct.refreshMaterialUniforms($e,O,zt,ut,C.state.transmissionRenderTarget[x.id]),ho.upload(w,Tu(Et),$e,D)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ho.upload(w,Tu(Et),$e,D),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ue.setValue(w,"center",F.center),ue.setValue(w,"modelViewMatrix",F.modelViewMatrix),ue.setValue(w,"normalMatrix",F.normalMatrix),ue.setValue(w,"modelMatrix",F.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const We=O.uniformsGroups;for(let ki=0,Fs=We.length;ki<Fs;ki++){const wu=We[ki];ft.update(wu,Vn),ft.bind(wu,Vn)}}return Vn}function A0(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function w0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(x,I,G){const O=g.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=I,g.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const G=g.get(x);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const R0=w.createFramebuffer();this.setRenderTarget=function(x,I=0,G=0){z=x,R=I,k=G;let O=null,F=!1,ot=!1;if(x){const lt=g.get(x);if(lt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(w.FRAMEBUFFER,lt.__webglFramebuffer),V.copy(x.viewport),N.copy(x.scissor),Q=x.scissorTest,St.viewport(V),St.scissor(N),St.setScissorTest(Q),X=-1;return}else if(lt.__webglFramebuffer===void 0)D.setupRenderTarget(x);else if(lt.__hasExternalTextures)D.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ot=x.depthTexture;if(lt.__boundDepthTexture!==Ot){if(Ot!==null&&g.has(Ot)&&(x.width!==Ot.image.width||x.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(x)}}const Mt=x.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ot=!0);const Tt=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?O=Tt[I][G]:O=Tt[I],F=!0):x.samples>0&&D.useMultisampledRTT(x)===!1?O=g.get(x).__webglMultisampledFramebuffer:Array.isArray(Tt)?O=Tt[G]:O=Tt,V.copy(x.viewport),N.copy(x.scissor),Q=x.scissorTest}else V.copy(q).multiplyScalar(zt).floor(),N.copy(nt).multiplyScalar(zt).floor(),Q=rt;if(G!==0&&(O=R0),St.bindFramebuffer(w.FRAMEBUFFER,O)&&St.drawBuffers(x,O),St.viewport(V),St.scissor(N),St.setScissorTest(Q),F){const lt=g.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,lt.__webglTexture,G)}else if(ot){const lt=I;for(let Mt=0;Mt<x.textures.length;Mt++){const Tt=g.get(x.textures[Mt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Mt,Tt.__webglTexture,G,lt)}}else if(x!==null&&G!==0){const lt=g.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,lt.__webglTexture,G)}X=-1},this.readRenderTargetPixels=function(x,I,G,O,F,ot,dt,lt=0){if(!(x&&x.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){St.bindFramebuffer(w.FRAMEBUFFER,Mt);try{const Tt=x.textures[lt],Ot=Tt.format,Wt=Tt.type;if(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+lt),!de.textureFormatReadable(Ot)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Wt)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-O&&G>=0&&G<=x.height-F&&w.readPixels(I,G,O,F,st.convert(Ot),st.convert(Wt),ot)}finally{const Tt=z!==null?g.get(z).__webglFramebuffer:null;St.bindFramebuffer(w.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(x,I,G,O,F,ot,dt,lt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt)if(I>=0&&I<=x.width-O&&G>=0&&G<=x.height-F){St.bindFramebuffer(w.FRAMEBUFFER,Mt);const Tt=x.textures[lt],Ot=Tt.format,Wt=Tt.type;if(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+lt),!de.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,wt),w.bufferData(w.PIXEL_PACK_BUFFER,ot.byteLength,w.STREAM_READ),w.readPixels(I,G,O,F,st.convert(Ot),st.convert(Wt),0);const ae=z!==null?g.get(z).__webglFramebuffer:null;St.bindFramebuffer(w.FRAMEBUFFER,ae);const Re=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await fg(w,Re,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,wt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ot),w.deleteBuffer(wt),w.deleteSync(Re),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,G=0){const O=Math.pow(2,-G),F=Math.floor(x.image.width*O),ot=Math.floor(x.image.height*O),dt=I!==null?I.x:0,lt=I!==null?I.y:0;D.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,dt,lt,F,ot),St.unbindTexture()};const C0=w.createFramebuffer(),P0=w.createFramebuffer();this.copyTextureToTexture=function(x,I,G=null,O=null,F=0,ot=0){let dt,lt,Mt,Tt,Ot,Wt,wt,ae,Re;const ye=x.isCompressedTexture?x.mipmaps[ot]:x.image;if(G!==null)dt=G.max.x-G.min.x,lt=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Ot=G.min.y,Wt=G.isBox3?G.min.z:0;else{const $e=Math.pow(2,-F);dt=Math.floor(ye.width*$e),lt=Math.floor(ye.height*$e),x.isDataArrayTexture?Mt=ye.depth:x.isData3DTexture?Mt=Math.floor(ye.depth*$e):Mt=1,Tt=0,Ot=0,Wt=0}O!==null?(wt=O.x,ae=O.y,Re=O.z):(wt=0,ae=0,Re=0);const oe=st.convert(I.format),tn=st.convert(I.type);let Et;I.isData3DTexture?(D.setTexture3D(I,0),Et=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),Et=w.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),Et=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const gn=w.getParameter(w.UNPACK_ROW_LENGTH),Qt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Vn=w.getParameter(w.UNPACK_SKIP_PIXELS),Qn=w.getParameter(w.UNPACK_SKIP_ROWS),as=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ye.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ye.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ot),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Wt);const Ns=x.isDataArrayTexture||x.isData3DTexture,ue=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const $e=g.get(x),Bi=g.get(I),We=g.get($e.__renderTarget),ki=g.get(Bi.__renderTarget);St.bindFramebuffer(w.READ_FRAMEBUFFER,We.__webglFramebuffer),St.bindFramebuffer(w.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Fs=0;Fs<Mt;Fs++)Ns&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,g.get(x).__webglTexture,F,Wt+Fs),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,g.get(I).__webglTexture,ot,Re+Fs)),w.blitFramebuffer(Tt,Ot,dt,lt,wt,ae,dt,lt,w.DEPTH_BUFFER_BIT,w.NEAREST);St.bindFramebuffer(w.READ_FRAMEBUFFER,null),St.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||g.has(x)){const $e=g.get(x),Bi=g.get(I);St.bindFramebuffer(w.READ_FRAMEBUFFER,C0),St.bindFramebuffer(w.DRAW_FRAMEBUFFER,P0);for(let We=0;We<Mt;We++)Ns?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,$e.__webglTexture,F,Wt+We):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,$e.__webglTexture,F),ue?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Bi.__webglTexture,ot,Re+We):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Bi.__webglTexture,ot),F!==0?w.blitFramebuffer(Tt,Ot,dt,lt,wt,ae,dt,lt,w.COLOR_BUFFER_BIT,w.NEAREST):ue?w.copyTexSubImage3D(Et,ot,wt,ae,Re+We,Tt,Ot,dt,lt):w.copyTexSubImage2D(Et,ot,wt,ae,Tt,Ot,dt,lt);St.bindFramebuffer(w.READ_FRAMEBUFFER,null),St.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ue?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(Et,ot,wt,ae,Re,dt,lt,Mt,oe,tn,ye.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Et,ot,wt,ae,Re,dt,lt,Mt,oe,ye.data):w.texSubImage3D(Et,ot,wt,ae,Re,dt,lt,Mt,oe,tn,ye):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ot,wt,ae,dt,lt,oe,tn,ye.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ot,wt,ae,ye.width,ye.height,oe,ye.data):w.texSubImage2D(w.TEXTURE_2D,ot,wt,ae,dt,lt,oe,tn,ye);w.pixelStorei(w.UNPACK_ROW_LENGTH,gn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Vn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Qn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,as),ot===0&&I.generateMipmaps&&w.generateMipmap(Et),St.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&D.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?D.setTextureCube(x,0):x.isData3DTexture?D.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?D.setTexture2DArray(x,0):D.setTexture2D(x,0),St.unbindTexture()},this.resetState=function(){R=0,k=0,z=null,St.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),n.unpackColorSpace=$t._getUnpackColorSpace()}}class i3{constructor(){Xt(this,"scene");Xt(this,"camera");Xt(this,"renderer");Xt(this,"earthMesh");Xt(this,"earthGroup");Xt(this,"clock");this.scene=new Pg,this.clock=new o_,this.camera=new Bn(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,3),this.renderer=new n3({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=lh,this.renderer.toneMappingExposure=1.2,document.body.appendChild(this.renderer.domElement),this.scene.background=new jt(139824),this.createStarField(),this.earthGroup=new jr,this.scene.add(this.earthGroup);const t=new ga(1,64,64),i=new t_().load("https://unpkg.com/three-globe@2.41.12/example/img/earth-blue-marble.jpg");i.colorSpace=En;const s=new jg({map:i,roughness:.8,metalness:.1});this.earthMesh=new wn(t,s),this.earthGroup.add(this.earthMesh);const r=new i_(16777215,.6);this.scene.add(r);const a=new ad(16777215,1.5);a.position.set(5,3,5),this.scene.add(a);const o=new ad(4482815,.3);o.position.set(-5,-2,-5),this.scene.add(o),window.addEventListener("resize",this.onResize.bind(this))}createStarField(){const n=new Float32Array(6e3);for(let a=0;a<2e3;a++){const o=40+Math.random()*60,l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1);n[a*3]=o*Math.sin(c)*Math.cos(l),n[a*3+1]=o*Math.sin(c)*Math.sin(l),n[a*3+2]=o*Math.cos(c)}const i=new pn;i.setAttribute("position",new jn(n,3));const s=new lp({color:15658751,size:.2,sizeAttenuation:!0}),r=new Gg(i,s);this.scene.add(r)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.clock.getDelta(),this.renderer.render(this.scene,this.camera)}get canvas(){return this.renderer.domElement}}function s3(e){const t=e.clone().normalize(),n=Math.asin(t.y)*(180/Math.PI),i=Math.atan2(t.z,-t.x)*(180/Math.PI)+180,s=i>180?i-360:i;return{lat:n,lon:s}}function Mp(e,t,n){const i=(90-e)*(Math.PI/180),s=(t+180)*(Math.PI/180),r=-(n*Math.sin(i)*Math.cos(s)),a=n*Math.cos(i),o=n*Math.sin(i)*Math.sin(s);return new U(r,a,o)}function r3(e,t){const n=-e,i=t>0?t-180:t+180;return{lat:n,lon:i}}function a3(e,t){const n=t>0?t-180:t+180;return{lat:e,lon:n}}class o3{constructor(t){Xt(this,"equatorLine");Xt(this,"northPole");Xt(this,"southPole");const s=[];for(let c=0;c<=128;c++){const h=c/128*360-180;s.push(Mp(0,h,1.003))}const r=new pn().setFromPoints(s),a=new op({color:16711680,linewidth:2});this.equatorLine=new zg(r,a),t.add(this.equatorLine);const o=new ga(.018,16,16),l=new Ao({color:16768256});this.northPole=new wn(o,l),this.northPole.position.set(0,1.005,0),t.add(this.northPole),this.southPole=new wn(o,l.clone()),this.southPole.position.set(0,-1.005,0),t.add(this.southPole)}dispose(){this.equatorLine.geometry.dispose(),this.equatorLine.material.dispose(),this.northPole.geometry.dispose(),this.northPole.material.dispose(),this.southPole.geometry.dispose(),this.southPole.material.dispose()}}const Ud={type:"change"},Eh={type:"start"},Sp={type:"end"},Qa=new pa,Nd=new ji,l3=Math.cos(70*gg.DEG2RAD),Oe=new U,hn=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ol=1e-6;class c3 extends l_{constructor(t,n=null){super(t,n),this.state=le.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:tr.ROTATE,TWO:tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new es,this._lastTargetPosition=new U,this._quat=new es().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cd,this._sphericalDelta=new cd,this._scale=1,this._panOffset=new U,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new U,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=u3.bind(this),this._onPointerDown=h3.bind(this),this._onPointerUp=d3.bind(this),this._onContextMenu=x3.bind(this),this._onMouseWheel=m3.bind(this),this._onKeyDown=g3.bind(this),this._onTouchStart=_3.bind(this),this._onTouchMove=v3.bind(this),this._onMouseDown=f3.bind(this),this._onMouseMove=p3.bind(this),this._interceptControlDown=M3.bind(this),this._interceptControlUp=S3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ud),this.update(),this.state=le.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;Oe.copy(n).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),n.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Oe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qa.origin.copy(this.object.position),Qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qa.direction))<l3?this.object.lookAt(this.target):(Nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qa.intersectPlane(Nd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ol||this._lastTargetPosition.distanceToSquared(this.target)>Ol?(this.dispatchEvent(Ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Oe.setFromMatrixColumn(n,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,n){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(n,1):(Oe.setFromMatrixColumn(n,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=n-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ft,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function h3(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function u3(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function d3(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sp),this.state=le.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function f3(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=le.DOLLY;break;case nr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=le.ROTATE}break;case nr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Eh)}function p3(e){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function m3(e){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(e.preventDefault(),this.dispatchEvent(Eh),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Sp))}function g3(e){this.enabled!==!1&&this._handleKeyDown(e)}function _3(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=le.TOUCH_ROTATE;break;case tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=le.TOUCH_DOLLY_PAN;break;case tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Eh)}function v3(e){switch(this._trackPointer(e),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=le.NONE}}function x3(e){this.enabled!==!1&&e.preventDefault()}function M3(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function S3(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class E3{constructor(t){Xt(this,"controls");Xt(this,"globe");Xt(this,"raycaster");Xt(this,"mouse");Xt(this,"markers",[]);Xt(this,"coordsLabel");this.globe=t,this.raycaster=new a_,this.mouse=new Ft,this.coordsLabel=document.getElementById("coords-label"),this.controls=new c3(t.camera,t.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=1.3,this.controls.maxDistance=5,this.controls.enablePan=!1,this.controls.rotateSpeed=.5,this.controls.minPolarAngle=.15,this.controls.maxPolarAngle=Math.PI-.15,t.canvas.addEventListener("click",this.onClick.bind(this));const n=document.getElementById("reset-btn");n&&n.addEventListener("click",()=>this.removeAllMarkers())}onClick(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.globe.camera);const n=this.raycaster.intersectObject(this.globe.earthMesh);if(n.length===0||this.markers.length>0)return;const i=n[0].point,s=this.globe.earthGroup.worldToLocal(i.clone()),{lat:r,lon:a}=s3(s),o=r3(r,a),l=1.015,c=this.createMarker(r,a,l,16720418),h=this.createMarker(o.lat,o.lon,l,16720418),d=a3(r,a),u=this.createMarker(d.lat,d.lon,l,2280516);this.globe.earthGroup.add(c),this.globe.earthGroup.add(h),this.globe.earthGroup.add(u),this.markers.push(c,h,u);const p=document.getElementById("reset-btn");p&&p.classList.add("visible"),this.showCoords(r,a,o.lat,o.lon)}createMarker(t,n,i,s){const r=new ga(.015,16,16),a=new Ao({color:s}),o=new wn(r,a),l=Mp(t,n,i);return o.position.copy(l),o}removeAllMarkers(){for(const n of this.markers)this.globe.earthGroup.remove(n),n.geometry.dispose(),n.material.dispose();this.markers=[],this.coordsLabel&&this.coordsLabel.classList.remove("visible");const t=document.getElementById("reset-btn");t&&t.classList.remove("visible")}showCoords(t,n,i,s){if(!this.coordsLabel)return;const r=(a,o,l)=>{const c=a>=0?o:l;return`${Math.abs(a).toFixed(2)}° ${c}`};this.coordsLabel.innerHTML=`� Point: ${r(t,"N","S")}, ${r(n,"E","W")}<br>🔴 Antipode: ${r(i,"N","S")}, ${r(s,"E","W")}<br>🟢 Same-lat opposite: ${r(t,"N","S")}, ${r(s,"E","W")}`,this.coordsLabel.classList.add("visible")}update(){this.controls.update()}}var dr=typeof self<"u"?self:{};function aa(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=dr,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function fs(){throw Error("Invalid UTF8")}function Fd(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let to,Bl;const y3=typeof TextDecoder<"u";let b3;const T3=typeof TextEncoder<"u";function Ep(e){if(T3)e=(b3||(b3=new TextEncoder)).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){const r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function yp(e){dr.setTimeout(()=>{throw e},0)}var Vc,A3=aa(610401301,!1),Od=aa(748402147,!0),yh=aa(824648567,!0),bh=aa(824656860,aa(1,!0));function Bd(){var e=dr.navigator;return e&&(e=e.userAgent)?e:""}const kd=dr.navigator;function Po(e){return Po[" "](e),e}Vc=kd&&kd.userAgentData||null,Po[" "]=function(){};const bp={};let Zr=null;function w3(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return function(r,a){function o(c){for(;l<r.length;){const h=r.charAt(l++),d=Zr[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}Tp();let l=0;for(;;){const c=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&c===-1)break;a(c<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}}(e,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function Tp(){if(!Zr){Zr={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));bp[n]=i;for(let s=0;s<i.length;s++){const r=i[s];Zr[r]===void 0&&(Zr[r]=s)}}}}var R3=typeof Uint8Array<"u",Ap=!(!(A3&&Vc&&Vc.brands.length>0)&&(Bd().indexOf("Trident")!=-1||Bd().indexOf("MSIE")!=-1))&&typeof btoa=="function";const zd=/[-_.]/g,C3={"-":"+",_:"/",".":"="};function P3(e){return C3[e]||""}function wp(e){if(!Ap)return w3(e);e=zd.test(e)?e.replace(zd,P3):e,e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Th(e){return R3&&e!=null&&e instanceof Uint8Array}var fr={};function ws(){return L3||(L3=new hi(null,fr))}function Ah(e){Rp(fr);var t=e.g;return(t=t==null||Th(t)?t:typeof t=="string"?wp(t):null)==null?t:e.g=t}var hi=class{h(){return new Uint8Array(Ah(this)||0)}constructor(e,t){if(Rp(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let L3,D3;function Rp(e){if(e!==fr)throw Error("illegal external caller")}function Cp(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Hc(e){return Cp(e=Error(e),"warning"),e}function pr(e,t){if(e!=null){var n=D3??(D3={}),i=n[e]||0;i>=t||(n[e]=i+1,Cp(e=Error(),"incident"),yp(e))}}function Tr(){return typeof BigInt=="function"}var Ar=typeof Symbol=="function"&&typeof Symbol()=="symbol";function pi(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var I3=pi("jas",void 0,!0),Gd=pi(void 0,"0di"),Xr=pi(void 0,"1oa"),Tn=pi(void 0,Symbol()),U3=pi(void 0,"0ub"),N3=pi(void 0,"0ubs"),Wc=pi(void 0,"0ubsb"),F3=pi(void 0,"0actk"),mr=pi("m_m","Pa",!0),Vd=pi();const Pp={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Lp=Object.defineProperties,yt=Ar?I3:"Ga";var Ds;const Hd=[];function _a(e,t){Ar||yt in e||Lp(e,Pp),e[yt]|=t}function Ve(e,t){Ar||yt in e||Lp(e,Pp),e[yt]=t}function va(e){return _a(e,34),e}function oa(e){return _a(e,8192),e}Ve(Hd,7),Ds=Object.freeze(Hd);var gr={};function Rn(e,t){return t===void 0?e.h!==Rs&&!!(2&(0|e.v[yt])):!!(2&t)&&e.h!==Rs}const Rs={};function wh(e,t){if(e!=null){if(typeof e=="string")e=e?new hi(e,fr):ws();else if(e.constructor!==hi)if(Th(e))e=e.length?new hi(new Uint8Array(e),fr):ws();else{if(!t)throw Error();e=void 0}}return e}class Wd{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var O3=Object.freeze({});function Dp(e,t,n){const i=128&t?0:-1,s=e.length;var r;(r=!!s)&&(r=(r=e[s-1])!=null&&typeof r=="object"&&r.constructor===Object);const a=s+(r?-1:0);for(t=128&t?1:0;t<a;t++)n(t-i,e[t]);if(r){e=e[s-1];for(const o in e)!isNaN(o)&&n(+o,e[o])}}var Ip={};function wr(e){return 128&e?Ip:void 0}function Lo(e){return e.Na=!0,e}var B3=Lo(e=>typeof e=="number"),Xd=Lo(e=>typeof e=="string"),k3=Lo(e=>typeof e=="boolean"),Do=typeof dr.BigInt=="function"&&typeof dr.BigInt(0)=="bigint";function An(e){var t=e;if(Xd(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(B3(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Do?BigInt(e):e=k3(e)?e?"1":"0":Xd(e)?e.trim()||"0":String(e)}var Xc=Lo(e=>Do?e>=G3&&e<=H3:e[0]==="-"?Yd(e,z3):Yd(e,V3));const z3=Number.MIN_SAFE_INTEGER.toString(),G3=Do?BigInt(Number.MIN_SAFE_INTEGER):void 0,V3=Number.MAX_SAFE_INTEGER.toString(),H3=Do?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Yd(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}const W3=typeof Uint8Array.prototype.slice=="function";let X3,Se=0,Ue=0;function qd(e){const t=e>>>0;Se=t,Ue=(e-t)/4294967296>>>0}function _r(e){if(e<0){qd(-e);const[t,n]=Lh(Se,Ue);Se=t>>>0,Ue=n>>>0}else qd(e)}function Rh(e){const t=X3||(X3=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Ue=0,Se=t.getUint32(0,!0)}function Yc(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:la(e,t)}function Y3(e,t){return An(Tr()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):la(e,t))}function Ch(e,t){const n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=Yc(e,t))=="number"?n?-e:e:n?"-"+e:e}function Up(e,t){return Tr()?An(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):An(Ph(e,t))}function la(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Tr()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+jd(n)+jd(e));return n}function jd(e){return e=String(e),"0000000".slice(e.length)+e}function Ph(e,t){if(2147483648&t)if(Tr())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=Lh(e,t);e="-"+la(n,i)}else e=la(e,t);return e}function Io(e){if(e.length<16)_r(Number(e));else if(Tr())e=BigInt(e),Se=Number(e&BigInt(4294967295))>>>0,Ue=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Ue=Se=0;const n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){const r=Number(e.slice(i,s));Ue*=1e6,Se=1e6*Se+r,Se>=4294967296&&(Ue+=Math.trunc(Se/4294967296),Ue>>>=0,Se>>>=0)}if(t){const[i,s]=Lh(Se,Ue);Se=i,Ue=s}}}function Lh(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Kn(e){return Array.prototype.slice.call(e)}const xa=typeof BigInt=="function"?BigInt.asIntN:void 0,q3=typeof BigInt=="function"?BigInt.asUintN:void 0,Cs=Number.isSafeInteger,Uo=Number.isFinite,vr=Math.trunc,j3=An(0);function $r(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function oi(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function ca(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function Np(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const K3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ma(e){switch(typeof e){case"bigint":return!0;case"number":return Uo(e);case"string":return K3.test(e);default:return!1}}function Rr(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Uo(e)?0|e:void 0}function Fp(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Uo(e)?e>>>0:void 0}function Op(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(Io(e),Ph(Se,Ue))}function Dh(e){return e=vr(e),Cs(e)||(_r(e),e=Ch(Se,Ue)),e}function Bp(e){var t=vr(Number(e));return Cs(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Op(e))}function kp(e){var t=vr(Number(e));return Cs(t)?An(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Tr()?An(xa(64,BigInt(e))):An(Op(e)))}function zp(e){return Cs(e)?e=An(Dh(e)):(e=vr(e),Cs(e)?e=String(e):(_r(e),e=Ph(Se,Ue)),e=An(e)),e}function Z3(e){return e==null?e:typeof e=="bigint"?(Xc(e)?e=Number(e):(e=xa(64,e),e=Xc(e)?Number(e):String(e)),e):Ma(e)?typeof e=="number"?Dh(e):Bp(e):void 0}function vo(e){const t=typeof e;return e==null?e:t==="bigint"?An(xa(64,e)):Ma(e)?t==="string"?kp(e):zp(e):void 0}function Gp(e){if(typeof e!="string")throw Error();return e}function Sa(e){if(e!=null&&typeof e!="string")throw Error();return e}function Qe(e){return e==null||typeof e=="string"?e:void 0}function Ih(e,t,n,i){return e!=null&&e[mr]===gr?e:Array.isArray(e)?((i=(n=0|e[yt])|32&i|2&i)!==n&&Ve(e,i),new t(e)):(n?2&i?((e=t[Gd])||(va((e=new t).v),e=t[Gd]=e),t=e):t=new t:t=void 0,t)}function $3(e,t,n){if(t)t:{if(!Ma(t=e))throw Hc("int64");switch(typeof t){case"string":t=kp(t);break t;case"bigint":t=An(xa(64,t));break t;default:t=zp(t)}}else t=vo(e);return(e=t)==null?n?j3:void 0:e}const J3={};let Q3=function(){try{return Po(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class kl{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const tM=Q3?(Object.setPrototypeOf(kl.prototype,Map.prototype),Object.defineProperties(kl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),kl):class extends Map{constructor(){super()}};function Kd(e){return e}function zl(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var Ii=class extends tM{constructor(e,t,n=Kd,i=Kd){super(),this.J=0|e[yt],this.K=t,this.S=n,this.fa=this.K?eM:i;for(let s=0;s<e.length;s++){const r=e[s],a=n(r[0],!1,!0);let o=r[1];t?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(e){return oa(Array.from(super.entries(),e))}clear(){zl(this),super.clear()}delete(e){return zl(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new Wd(e,nM,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new Wd(e,Ii.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach((n,i,s)=>{e.call(t,s.get(i),i,s)}):super.forEach(e,t)}set(e,t){return zl(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function eM(e,t,n,i,s,r){return e=Ih(e,i,n,r),s&&(e=Nh(e)),e}function nM(e){return[e,this.get(e)]}let iM;function Zd(){return iM||(iM=new Ii(va([]),void 0,void 0,void 0,J3))}function No(e){return Tn?e[Tn]:void 0}function xo(e,t){for(const n in e)!isNaN(n)&&t(e,+n,e[n])}Ii.prototype.toJSON=void 0;var qc=class{};const sM={Ka:!0};function rM(e,t){t<100||pr(N3,1)}function Fo(e,t,n,i){const s=i!==void 0;i=!!i;var r,a=Tn;!s&&Ar&&a&&(r=e[a])&&xo(r,rM),a=[];var o=e.length;let l;r=4294967295;let c=!1;const h=!!(64&t),d=h?128&t?0:-1:void 0;1&t||(l=o&&e[o-1],l!=null&&typeof l=="object"&&l.constructor===Object?r=--o:l=void 0,!h||128&t||s||(c=!0,r=r-d+d)),t=void 0;for(var u=0;u<o;u++){let p=e[u];if(p!=null&&(p=n(p,i))!=null)if(h&&u>=r){const _=u-d;(t??(t={}))[_]=p}else a[u]=p}if(l)for(let p in l){if((o=l[p])==null||(o=n(o,i))==null)continue;let _;u=+p,h&&!Number.isNaN(u)&&(_=u+d)<r?a[_]=o:(t??(t={}))[p]=o}return t&&(c?a.push(t):a[r]=t),s&&Tn&&(e=No(e))&&e instanceof qc&&(a[Tn]=function(p){const _=new qc;return xo(p,(M,m,f)=>{_[m]=Kn(f)}),_.da=p.da,_}(e)),a}function aM(e){return e[0]=ha(e[0]),e[1]=ha(e[1]),e}function ha(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return Xc(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[yt];return e.length===0&&1&t?void 0:Fo(e,t,ha)}if(e!=null&&e[mr]===gr)return Vp(e);if(e instanceof hi){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Ap){for(var n="",i=0,s=t.length-10240;i<s;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Tp(),n=bp[n],i=Array(Math.floor(t.length/3)),s=n[64]||"";let c=0,h=0;for(;c<t.length-2;c+=3){var r=t[c],a=t[c+1],o=t[c+2],l=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=l+r+a+o}switch(l=0,o=s,t.length-c){case 2:o=n[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],i[h]=n[t>>2]+n[(3&t)<<4|l>>4]+o+s}t=i.join("")}e=e.g=t}return e}return e instanceof Ii?e=e.size!==0?e.V(aM):void 0:void 0}return e}function Vp(e){return Fo(e=e.v,0|e[yt],ha)}let oM,lM;function Ss(e,t){return Hp(e,t[0],t[1])}function Hp(e,t,n,i=0){if(e==null){var s=32;n?(e=[n],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[yt],Od&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&function(){if(Od)throw Error("carr");pr(F3,5)}(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&Ve(e,s|i),e;if(n&&(s|=128,n!==e[0]))throw Error("mid");t:{s|=64;var r=(n=e).length;if(r){var a=r-1;const l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(n[r+t]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Ve(e,64|s|i),e}function cM(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[yt];return e.length===0&&1&n?void 0:$d(e,n,t)}if(e!=null&&e[mr]===gr)return Jd(e);if(e instanceof Ii){if(2&(t=e.J))return e;if(!e.size)return;if(n=va(e.V()),e.K)for(e=0;e<n.length;e++){const i=n[e];let s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[mr]===gr?Jd(s):Array.isArray(s)?$d(s,0|s[yt],!!(32&t)):void 0,i[1]=s}return n}return e instanceof hi?e:void 0}function $d(e,t,n){return 2&t||(!n||4096&t||16&t?e=Cr(e,t,!1,n&&!(16&t)):(_a(e,34),4&t&&Object.freeze(e))),e}function Uh(e,t,n){return e=new e.constructor(t),n&&(e.h=Rs),e.m=Rs,e}function Jd(e){const t=e.v,n=0|t[yt];return Rn(e,n)?e:Fh(e,t,n)?Uh(e,t):Cr(t,n)}function Cr(e,t,n,i){return i??(i=!!(34&t)),e=Fo(e,t,cM,i),i=32,n&&(i|=2),Ve(e,t=16769217&t|i),e}function Nh(e){const t=e.v,n=0|t[yt];return Rn(e,n)?Fh(e,t,n)?Uh(e,t,!0):new e.constructor(Cr(t,n,!1)):e}function Pr(e){if(e.h!==Rs)return!1;var t=e.v;return _a(t=Cr(t,0|t[yt]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function Lr(e){if(!Pr(e)&&Rn(e,0|e.v[yt]))throw Error()}function Is(e,t){t===void 0&&(t=0|e[yt]),32&t&&!(4096&t)&&Ve(e,4096|t)}function Fh(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Ve(t,2|n),e.h=Rs,!0)}const hM=An(0),Yi={};function xe(e,t,n,i,s){if((t=Ui(e.v,t,n,s))!==null||i&&e.m!==Rs)return t}function Ui(e,t,n,i){if(t===-1)return null;const s=t+(n?0:-1),r=e.length-1;let a,o;if(!(r<1+(n?0:-1))){if(s>=r)if(a=e[r],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[t],o=!0;else{if(s!==r)return;n=a}else n=e[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[t]=i:e[s]=i,i}return n}}function ce(e,t,n,i){Lr(e),Be(e=e.v,0|e[yt],t,n,i)}function Be(e,t,n,i,s){const r=n+(s?0:-1);var a=e.length-1;if(a>=1+(s?0:-1)&&r>=a){const o=e[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,t}return r<=a?(e[r]=i,t):(i!==void 0&&(n>=(a=(t??(t=0|e[yt]))>>14&1023||536870912)?i!=null&&(e[a+(s?0:-1)]={[n]:i}):e[r]=i),t)}function xs(){return O3===void 0?2:4}function Ms(e,t,n,i,s){let r=e.v,a=0|r[yt];i=Rn(e,a)?1:i,s=!!s||i===3,i===2&&Pr(e)&&(r=e.v,a=0|r[yt]);let o=(e=Oh(r,t))===Ds?7:0|e[yt],l=Bh(o,a);var c=!(4&l);if(c){4&l&&(e=Kn(e),o=0,l=ys(l,a),a=Be(r,a,t,e));let h=0,d=0;for(;h<e.length;h++){const u=n(e[h]);u!=null&&(e[d++]=u)}d<h&&(e.length=d),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==o&&(Ve(e,l),2&l&&Object.freeze(e)),Wp(e,l,r,a,t,i,c,s)}function Wp(e,t,n,i,s,r,a,o){let l=t;return r===1||r===4&&(2&t||!(16&t)&&32&i)?Es(t)||((t|=!e.length||a&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==l&&Ve(e,t),Object.freeze(e)):(r===2&&Es(t)&&(e=Kn(e),l=0,t=ys(t,i),i=Be(n,i,s,e)),Es(t)||(o||(t|=16),t!==l&&Ve(e,t))),2&t||!(4096&t||16&t)||Is(n,i),e}function Oh(e,t,n){return e=Ui(e,t,n),Array.isArray(e)?e:Ds}function Bh(e,t){return 2&t&&(e|=2),1|e}function Es(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function Xp(e){return wh(e,!0)}function Yp(e){e=Kn(e);for(let t=0;t<e.length;t++){const n=e[t]=Kn(e[t]);Array.isArray(n[1])&&(n[1]=va(n[1]))}return oa(e)}function Ki(e,t,n,i){Lr(e),Be(e=e.v,0|e[yt],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Dr(e,t,n){if(2&t)throw Error();const i=wr(t);let s=Oh(e,n,i),r=s===Ds?7:0|s[yt],a=Bh(r,t);return(2&a||Es(a)||16&a)&&(a===r||Es(a)||Ve(s,a),s=Kn(s),r=0,a=ys(a,t),Be(e,t,n,s,i)),a&=-13,a!==r&&Ve(s,a),s}function Gl(e,t){var n=Bm;return zh(kh(e=e.v),e,void 0,n)===t?t:-1}function kh(e){if(Ar)return e[Xr]??(e[Xr]=new Map);if(Xr in e)return e[Xr];const t=new Map;return Object.defineProperty(e,Xr,{value:t}),t}function qp(e,t,n,i,s){const r=kh(e),a=zh(r,e,t,n,s);return a!==i&&(a&&(t=Be(e,t,a,void 0,s)),r.set(n,i)),t}function zh(e,t,n,i,s){let r=e.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){const o=i[a];Ui(t,o,s)!=null&&(r!==0&&(n=Be(t,n,r,void 0,s)),r=o)}return e.set(i,r),r}function Gh(e,t,n){let i=0|e[yt];const s=wr(i),r=Ui(e,n,s);let a;if(r!=null&&r[mr]===gr){if(!Rn(r))return Pr(r),r.v;a=r.v}else Array.isArray(r)&&(a=r);if(a){const o=0|a[yt];2&o&&(a=Cr(a,o))}return a=Ss(a,t),a!==r&&Be(e,i,n,a,s),a}function jp(e,t,n,i,s){let r=!1;if((i=Ui(e,i,s,a=>{const o=Ih(a,n,!1,t);return r=o!==a&&o!=null,o}))!=null)return r&&!Rn(i)&&Is(e,t),i}function te(e,t,n,i){let s=e.v,r=0|s[yt];if((t=jp(s,r,t,n,i))==null)return t;if(r=0|s[yt],!Rn(e,r)){const a=Nh(t);a!==t&&(Pr(e)&&(s=e.v,r=0|s[yt]),r=Be(s,r,n,t=a,i),Is(s,r))}return t}function Kp(e,t,n,i,s,r,a,o){var l=Rn(e,n);r=l?1:r,a=!!a||r===3,l=o&&!l,(r===2||l)&&Pr(e)&&(n=0|(t=e.v)[yt]);var c=(e=Oh(t,s))===Ds?7:0|e[yt],h=Bh(c,n);if(o=!(4&h)){var d=e,u=n;const p=!!(2&h);p&&(u|=2);let _=!p,M=!0,m=0,f=0;for(;m<d.length;m++){const S=Ih(d[m],i,!1,u);if(S instanceof i){if(!p){const T=Rn(S);_&&(_=!T),M&&(M=T)}d[f++]=S}}f<m&&(d.length=f),h|=4,h=M?-4097&h:4096|h,h=_?8|h:-9&h}if(h!==c&&(Ve(e,h),2&h&&Object.freeze(e)),l&&!(8&h||!e.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(Es(h)&&(e=Kn(e),h=ys(h,n),n=Be(t,n,s,e)),i=e,l=h,c=0;c<i.length;c++)(d=i[c])!==(h=Nh(d))&&(i[c]=h);l|=8,Ve(e,h=l=i.length?4096|l:-4097&l)}return Wp(e,h,t,n,s,r,o,a)}function Ni(e,t,n){const i=e.v;return Kp(e,i,0|i[yt],t,n,xs(),!1,!0)}function Zp(e){return e==null&&(e=void 0),e}function Pt(e,t,n,i,s){return ce(e,n,i=Zp(i),s),i&&!Rn(i)&&Is(e.v),e}function Jr(e,t,n,i){t:{var s=i=Zp(i);Lr(e);const r=e.v;let a=0|r[yt];if(s==null){const o=kh(r);if(zh(o,r,a,n)!==t)break t;o.set(n,0)}else a=qp(r,a,n,t);Be(r,a,t,s)}i&&!Rn(i)&&Is(e.v)}function ys(e,t){return-273&(2&t?2|e:-3&e)}function Vh(e,t,n,i){var s=i;Lr(e),e=Kp(e,i=e.v,0|i[yt],n,t,2,!0),s=s??new n,e.push(s),t=n=e===Ds?7:0|e[yt],(s=Rn(s))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&Ve(e,n),s||Is(i)}function kn(e,t,n){return Rr(xe(e,t,void 0,n))}function $p(e){return(bh?xe(e,2,void 0,void 0,vo):vo(xe(e,2)))??hM}function Pe(e,t){return xe(e,t,void 0,void 0,oi)??0}function Fi(e,t,n){if(n!=null){if(typeof n!="number"||!Uo(n))throw Hc("int32");n|=0}ce(e,t,n)}function Rt(e,t,n){ce(e,t,$r(n))}function Cn(e,t,n){Ki(e,t,Sa(n),"")}function Mo(e,t,n){{Lr(e);const a=e.v;let o=0|a[yt];if(n==null)Be(a,o,t);else{var i=e=n===Ds?7:0|n[yt],s=Es(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=Kn(n),i=0,e=ys(e,o),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??(bh?1024:0),s=0;s<n.length;s++){const l=n[s],c=Gp(l);Object.is(l,c)||(r&&(n=Kn(n),i=0,e=ys(e,o),r=!1),n[s]=c)}e!==i&&(r&&(n=Kn(n),e=ys(e,o)),Ve(n,e)),Be(a,o,t,n)}}}function Oo(e,t,n){Lr(e),Ms(e,t,Qe,2,!0).push(Gp(n))}var Js=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function Hh(e,t){if(typeof e=="string")return new Js(wp(e),t);if(Array.isArray(e))return new Js(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Js(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Js(e,!1);if(e.constructor===hi)return t=Ah(e)||new Uint8Array(0),new Js(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Js(e,!1);throw Error()}function xr(e,t){let n,i=0,s=0,r=0;const a=e.h;let o=e.g;do n=a[o++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);if(r>32)for(s|=(127&n)>>4,r=3;r<32&&128&n;r+=7)n=a[o++],s|=(127&n)<<r;if(bs(e,o),!(128&n))return t(i>>>0,s>>>0);throw Error()}function Wh(e){let t=0,n=e.g;const i=n+10,s=e.h;for(;n<i;){const r=s[n++];if(t|=r,(128&r)==0)return bs(e,n),!!(127&t)}throw Error()}function ns(e){const t=e.h;let n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return bs(e,n),s}function Oi(e){return ns(e)>>>0}function So(e){var t=e.h;const n=e.g;var i=t[n],s=t[n+1];const r=t[n+2];return t=t[n+3],bs(e,e.g+4),e=2*((s=(i<<0|s<<8|r<<16|t<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:e*(1/0):i==0?1401298464324817e-60*e*s:e*Math.pow(2,i-150)*(s+8388608)}function uM(e){return ns(e)}function bs(e,t){if(e.g=t,t>e.l)throw Error()}function Jp(e,t){if(t<0)throw Error();const n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function Qp(e,t){if(t==0)return ws();var n=Jp(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):W3?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?ws():new hi(n,fr)}var Qd=[];function tm(e,t,n,i){if(Eo.length){const s=Eo.pop();return s.o(i),s.g.init(e,t,n,i),s}return new dM(e,t,n,i)}function em(e){e.g.clear(),e.l=-1,e.h=-1,Eo.length<100&&Eo.push(e)}function nm(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=Oi(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function uo(e){switch(e.h){case 0:e.h!=0?uo(e):Wh(e.g);break;case 1:bs(e=e.g,e.g+8);break;case 2:if(e.h!=2)uo(e);else{var t=Oi(e.g);bs(e=e.g,e.g+t)}break;case 5:bs(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!nm(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}uo(e)}break;default:throw Error()}}function Ea(e,t,n){const i=e.g.l;var s=Oi(e.g);let r=(s=e.g.g+s)-i;if(r<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.l=i,t}function Xh(e){var t=Oi(e.g),n=Jp(e=e.g,t);if(e=e.h,y3){var i,s=e;(i=Bl)||(i=Bl=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(o){if(to===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),to=!0}catch{to=!1}}throw!to&&(Bl=void 0),o}}else{t=(r=n)+t,n=[];let o,l=null;for(;r<t;){var a=e[r++];a<128?n.push(a):a<224?r>=t?fs():(o=e[r++],a<194||(192&o)!=128?(r--,fs()):n.push((31&a)<<6|63&o)):a<240?r>=t-1?fs():(o=e[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=e[r++]))!=128?(r--,fs()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=t-2?fs():(o=e[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,fs()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):fs(),n.length>=8192&&(l=Fd(l,n),n.length=0)}r=Fd(l,n)}return r}function im(e){const t=Oi(e.g);return Qp(e.g,t)}function Bo(e,t,n){var i=Oi(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var dM=class{constructor(e,t,n,i){if(Qd.length){const s=Qd.pop();s.init(e,t,n,i),e=s}else e=new class{constructor(s,r,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,a,o)}init(s,r,a,{Y:o=!1,ea:l=!1}={}){this.Y=o,this.ea=l,s&&(s=Hh(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},Eo=[];function tf(e){return e?/^\d+$/.test(e)?(Io(e),new jc(Se,Ue)):null:fM||(fM=new jc(0,0))}var jc=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let fM;function ef(e){return e?/^-?\d+$/.test(e)?(Io(e),new Kc(Se,Ue)):null:pM||(pM=new Kc(0,0))}var Kc=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let pM;function rr(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Ir(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function ko(e,t){if(t>=0)Ir(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Yh(e){var t=Se;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Mr(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function zn(e,t,n){Ir(e.g,8*t+n)}function qh(e,t){return zn(e,t,2),t=e.g.end(),Mr(e,t),t.push(e.h),t}function jh(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function zo(e,t,n){zn(e,t,2),Ir(e.g,n.length),Mr(e,e.g.end()),Mr(e,n)}function yo(e,t,n,i){n!=null&&(t=qh(e,t),i(n,e),jh(e,t))}function mi(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Kh=mi(),sm=mi(),Zh=mi(),$h=mi(),rm=mi(),am=mi(),mM=mi(),Go=mi(),om=mi(),lm=mi();function gi(e,t,n){var i=e.v;Tn&&Tn in i&&(i=i[Tn])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var bt=class{constructor(e,t){this.v=Hp(e,t,void 0,2048)}toJSON(){return Vp(this)}j(){var s;var e=$M,t=this.v,n=e.g,i=Tn;if(Ar&&i&&((s=t[i])==null?void 0:s[n])!=null&&pr(U3,3),t=e.g,Vd&&Tn&&Vd===void 0&&(i=(n=this.v)[Tn])&&(i=i.da))try{i(n,t,sM)}catch(r){yp(r)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[yt];return Fh(this,e,t)?Uh(this,e,!0):new this.constructor(Cr(e,t,!1))}};bt.prototype[mr]=gr,bt.prototype.toString=function(){return this.v.toString()};var Ur=class{constructor(e,t,n){this.g=e,this.h=t,e=Kh,this.l=!!e&&n===e||!1}};function Vo(e,t){return new Ur(e,t,Kh)}function cm(e,t,n,i,s){yo(e,n,fm(t,i),s)}const gM=Vo(function(e,t,n,i,s){return e.h===2&&(Ea(e,Gh(t,i,n),s),!0)},cm),_M=Vo(function(e,t,n,i,s){return e.h===2&&(Ea(e,Gh(t,i,n),s),!0)},cm);var Ho=Symbol(),Wo=Symbol(),Zc=Symbol(),nf=Symbol(),sf=Symbol();let hm,um;function Us(e,t,n,i){var s=i[e];if(s)return s;(s={}).qa=i,s.T=function(d){switch(typeof d){case"boolean":return oM||(oM=[0,void 0,!0]);case"number":return d>0?void 0:d===0?lM||(lM=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}}(i[0]);var r=i[1];let a=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++a])=="function"&&(s.ma=!0,hm??(hm=r),um??(um=i[a+1]),r=i[a+=2]));const o={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=i[++a]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=i[++a]);var c=void 0;if(r instanceof Ur?d=r:(d=gM,a--),d==null?void 0:d.l){r=i[++a],c=i;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);l<h;l++){const u=o[l];c?n(s,l,d,c,u):t(s,l,d,u)}}return i[e]=s}function dm(e){return Array.isArray(e)?e[0]instanceof Ur?e:[_M,e]:[e,void 0]}function fm(e,t){return e instanceof bt?e.v:Array.isArray(e)?Ss(e,t):void 0}function Jh(e,t,n,i){const s=n.g;e[t]=i?(r,a,o)=>s(r,a,o,i):s}function Qh(e,t,n,i,s){const r=n.g;let a,o;e[t]=(l,c,h)=>r(l,c,h,o||(o=Us(Wo,Jh,Qh,i).T),a||(a=tu(i)),s)}function tu(e){let t=e[Zc];if(t!=null)return t;const n=Us(Wo,Jh,Qh,e);return t=n.ma?(i,s)=>hm(i,s,n):(i,s)=>{for(;nm(s)&&s.h!=4;){var r=s.l,a=n[r];if(a==null){var o=n.ba;o&&(o=o[r])&&(o=xM(o))!=null&&(a=n[r]=o)}if(a==null||!a(s,i,r)){if(a=(o=s).m,uo(o),o.ha)var l=void 0;else l=o.g.g-a,o.g.g=a,l=Qp(o.g,l);a=void 0,o=i,l&&((a=o[Tn]??(o[Tn]=new qc))[r]??(a[r]=[])).push(l)}}return(i=No(i))&&(i.da=n.qa[sf]),!0},e[Zc]=t,e[sf]=vM.bind(e),t}function vM(e,t,n,i){var s=this[Wo];const r=this[Zc],a=Ss(void 0,s.T),o=No(e);if(o){var l=!1,c=s.ba;if(c){if(s=(h,d,u)=>{if(u.length!==0)if(c[d])for(const p of u){h=tm(p);try{l=!0,r(a,h)}finally{em(h)}}else i==null||i(e,d,u)},t==null)xo(o,s);else if(o!=null){const h=o[t];h&&s(o,t,h)}if(l){let h=0|e[yt];if(2&h&&2048&h&&!(n!=null&&n.Ka))throw Error();const d=wr(h),u=(p,_)=>{if(Ui(e,p,d)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}_!=null&&(h=Be(e,h,p,_,d)),delete o[p]};t==null?Dp(a,0|a[yt],(p,_)=>{u(p,_)}):u(t,Ui(a,t,d))}}}}function xM(e){const t=(e=dm(e))[0].g;if(e=e[1]){const n=tu(e),i=Us(Wo,Jh,Qh,e).T;return(s,r,a)=>t(s,r,a,i,n)}return t}function Xo(e,t,n){e[t]=n.h}function Yo(e,t,n,i){let s,r;const a=n.h;e[t]=(o,l,c)=>a(o,l,c,r||(r=Us(Ho,Xo,Yo,i).T),s||(s=pm(i)))}function pm(e){let t=e[nf];if(!t){const n=Us(Ho,Xo,Yo,e);t=(i,s)=>mm(i,s,n),e[nf]=t}return t}function mm(e,t,n){Dp(e,0|e[yt],(i,s)=>{if(s!=null){var r=function(a,o){var l=a[o];if(l)return l;if((l=a.ba)&&(l=l[o])){var c=(l=dm(l))[0].h;if(l=l[1]){const h=pm(l),d=Us(Ho,Xo,Yo,l).T;l=a.ma?um(d,h):(u,p,_)=>c(u,p,_,d,h)}else l=c;return a[o]=l}}(n,i);r?r(t,s,i):i<500||pr(Wc,3)}}),(e=No(e))&&xo(e,(i,s,r)=>{for(Mr(t,t.g.end()),i=0;i<r.length;i++)Mr(t,Ah(r[i])||new Uint8Array(0))})}const MM=An(0);function Nr(e,t){if(Array.isArray(t)){var n=0|t[yt];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){const r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),(e=-1537&(5|n))!==n&&Ve(t,e),2&e&&Object.freeze(t),t}}function ln(e,t,n){return new Ur(e,t,n)}function Fr(e,t,n){return new Ur(e,t,n)}function Ze(e,t,n){Be(e,0|e[yt],t,n,wr(0|e[yt]))}var SM=Vo(function(e,t,n,i,s){if(e.h!==2)return!1;if(e=Kn(e=Ea(e,Ss([void 0,void 0],i),s)),s=wr(i=0|t[yt]),2&i)throw Error();let r=Ui(t,n,s);if(r instanceof Ii)2&r.J?(r=r.V(),r.push(e),Be(t,i,n,r,s)):r.Ma(e);else if(Array.isArray(r)){var a=0|r[yt];8192&a||Ve(r,a|=8192),2&a&&(r=Yp(r),Be(t,i,n,r,s)),r.push(e)}else Be(t,i,n,oa([e]),s);return!0},function(e,t,n,i,s){if(t instanceof Ii)t.forEach((r,a)=>{yo(e,n,Ss([a,r],i),s)});else if(Array.isArray(t)){for(let r=0;r<t.length;r++){const a=t[r];Array.isArray(a)&&yo(e,n,Ss(a,i),s)}oa(t)}});function gm(e,t,n){(t=oi(t))!=null&&(zn(e,n,5),e=e.g,Rh(t),Yh(e))}function _m(e,t,n){if(t=function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(xa(64,i));if(Ma(i)){if(s==="string")return Bp(i);if(s==="number")return Dh(i)}}(t),t!=null&&(typeof t=="string"&&ef(t),t!=null))switch(zn(e,n,0),typeof t){case"number":e=e.g,_r(t),rr(e,Se,Ue);break;case"bigint":n=BigInt.asUintN(64,t),n=new Kc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),rr(e.g,n.h,n.g);break;default:n=ef(t),rr(e.g,n.h,n.g)}}function vm(e,t,n){(t=Rr(t))!=null&&t!=null&&(zn(e,n,0),ko(e.g,t))}function xm(e,t,n){(t=Np(t))!=null&&(zn(e,n,0),e.g.g.push(t?1:0))}function Mm(e,t,n){(t=Qe(t))!=null&&zo(e,n,Ep(t))}function Sm(e,t,n,i,s){yo(e,n,fm(t,i),s)}function Em(e,t,n){(t=t==null||typeof t=="string"||t instanceof hi?t:void 0)!=null&&zo(e,n,Hh(t,!0).buffer)}function ym(e,t,n){return(e.h===5||e.h===2)&&(t=Dr(t,0|t[yt],n),e.h==2?Bo(e,So,t):t.push(So(e.g)),!0)}var Ne=ln(function(e,t,n){return e.h===5&&(Ze(t,n,So(e.g)),!0)},gm,Go),EM=Fr(ym,function(e,t,n){if((t=Nr(oi,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(zn(i,s,5),i=i.g,Rh(r),Yh(i))}},Go),eu=Fr(ym,function(e,t,n){if((t=Nr(oi,t))!=null&&t.length){zn(e,n,2),Ir(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Rh(t[i]),Yh(n)}},Go),yM=ln(function(e,t,n){return e.h===5&&(Ze(t,n,(e=So(e.g))===0?void 0:e),!0)},gm,Go),is=ln(function(e,t,n){return yh?(e.h!==0?e=!1:(Ze(t,n,xr(e.g,Up)),e=!0),e):e.h===0&&(Ze(t,n,xr(e.g,Ch)),!0)},_m,am),Vl=ln(function(e,t,n){return yh?(e.h!==0?t=!1:(Ze(t,n,(e=xr(e.g,Up))===MM?void 0:e),t=!0),t):e.h===0&&(Ze(t,n,(e=xr(e.g,Ch))===0?void 0:e),!0)},_m,am),bM=ln(function(e,t,n){return yh?(e.h!==0?e=!1:(Ze(t,n,xr(e.g,Y3)),e=!0),e):e.h===0&&(Ze(t,n,xr(e.g,Yc)),!0)},function(e,t,n){if(t=function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(q3(64,i));if(Ma(i)){if(s==="string")return s=vr(Number(i)),Cs(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(Io(i),i=la(Se,Ue))),i;if(s==="number")return(i=vr(i))>=0&&Cs(i)||(_r(i),i=Yc(Se,Ue)),i}}(t),t!=null&&(typeof t=="string"&&tf(t),t!=null))switch(zn(e,n,0),typeof t){case"number":e=e.g,_r(t),rr(e,Se,Ue);break;case"bigint":n=BigInt.asUintN(64,t),n=new jc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),rr(e.g,n.h,n.g);break;default:n=tf(t),rr(e.g,n.h,n.g)}},mM),je=ln(function(e,t,n){return e.h===0&&(Ze(t,n,ns(e.g)),!0)},vm,$h),ya=Fr(function(e,t,n){return(e.h===0||e.h===2)&&(t=Dr(t,0|t[yt],n),e.h==2?Bo(e,ns,t):t.push(ns(e.g)),!0)},function(e,t,n){if((t=Nr(Rr,t))!=null&&t.length){n=qh(e,n);for(let i=0;i<t.length;i++)ko(e.g,t[i]);jh(e,n)}},$h),er=ln(function(e,t,n){return e.h===0&&(Ze(t,n,(e=ns(e.g))===0?void 0:e),!0)},vm,$h),Le=ln(function(e,t,n){return e.h===0&&(Ze(t,n,Wh(e.g)),!0)},xm,sm),Ts=ln(function(e,t,n){return e.h===0&&(Ze(t,n,(e=Wh(e.g))===!1?void 0:e),!0)},xm,sm),sn=Fr(function(e,t,n){return e.h===2&&(e=Xh(e),Dr(t,0|t[yt],n).push(e),!0)},function(e,t,n){if((t=Nr(Qe,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&zo(i,s,Ep(r))}},Zh),$i=ln(function(e,t,n){return e.h===2&&(Ze(t,n,(e=Xh(e))===""?void 0:e),!0)},Mm,Zh),pe=ln(function(e,t,n){return e.h===2&&(Ze(t,n,Xh(e)),!0)},Mm,Zh),qe=function(e,t,n=Kh){return new Ur(e,t,n)}(function(e,t,n,i,s){return e.h===2&&(i=Ss(void 0,i),Dr(t,0|t[yt],n).push(i),Ea(e,i,s),!0)},function(e,t,n,i,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)Sm(e,t[r],n,i,s);1&(e=0|t[yt])||Ve(t,1|e)}}),Ce=Vo(function(e,t,n,i,s,r){if(e.h!==2)return!1;let a=0|t[yt];return qp(t,a,r,n,wr(a)),Ea(e,t=Gh(t,i,n),s),!0},Sm),bm=ln(function(e,t,n){return e.h===2&&(Ze(t,n,im(e)),!0)},Em,om),TM=Fr(function(e,t,n){return(e.h===0||e.h===2)&&(t=Dr(t,0|t[yt],n),e.h==2?Bo(e,Oi,t):t.push(Oi(e.g)),!0)},function(e,t,n){if((t=Nr(Fp,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(zn(i,s,0),Ir(i.g,r))}},rm),AM=ln(function(e,t,n){return e.h===0&&(Ze(t,n,(e=Oi(e.g))===0?void 0:e),!0)},function(e,t,n){(t=Fp(t))!=null&&t!=null&&(zn(e,n,0),Ir(e.g,t))},rm),Pn=ln(function(e,t,n){return e.h===0&&(Ze(t,n,ns(e.g)),!0)},function(e,t,n){(t=Rr(t))!=null&&(t=parseInt(t,10),zn(e,n,0),ko(e.g,t))},lm);class wM{constructor(t,n){var i=Dn;this.g=t,this.h=n,this.m=te,this.j=Pt,this.defaultValue=void 0,this.l=i.Oa!=null?Ip:void 0}register(){Po(this)}}function _i(e,t){return new wM(e,t)}function ss(e,t){return(n,i)=>{{const r={ea:!0};i&&Object.assign(r,i),n=tm(n,void 0,void 0,r);try{const a=new e,o=a.v;tu(t)(o,n);var s=a}finally{em(n)}}return s}}function qo(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};mm(this.v,t,Us(Ho,Xo,Yo,e)),Mr(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,s=i.length;let r=0;for(let a=0;a<s;a++){const o=i[a];n.set(o,r),r+=o.length}return t.l=[n],n}}var rf=class extends bt{constructor(e){super(e)}},af=[0,$i,ln(function(e,t,n){return e.h===2&&(Ze(t,n,(e=im(e))===ws()?void 0:e),!0)},function(e,t,n){if(t!=null){if(t instanceof bt){const i=t.Ra;return void(i?(t=i(t),t!=null&&zo(e,n,Hh(t,!0).buffer)):pr(Wc,3))}if(Array.isArray(t))return void pr(Wc,3)}Em(e,t,n)},om)];let Hl,of=globalThis.trustedTypes;function lf(e){var t;return Hl===void 0&&(Hl=function(){let n=null;if(!of)return n;try{const i=s=>s;n=of.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}()),e=(t=Hl)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function RM(e,...t){if(t.length===0)return lf(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return lf(n)}var Tm=[0,je,Pn,Le,-1,ya,Pn,-1,Le],CM=class extends bt{constructor(e){super(e)}},Am=[0,Le,pe,Le,Pn,-1,Fr(function(e,t,n){return(e.h===0||e.h===2)&&(t=Dr(t,0|t[yt],n),e.h==2?Bo(e,uM,t):t.push(ns(e.g)),!0)},function(e,t,n){if((t=Nr(Rr,t))!=null&&t.length){n=qh(e,n);for(let i=0;i<t.length;i++)ko(e.g,t[i]);jh(e,n)}},lm),pe,-1,[0,Le,-1],Pn,Le,-1],wm=[0,3,Le,-1,2,[0,je],[0,Pn,Le],[0,pe,-1],[0]],Rm=[0,pe,-2],cf=class extends bt{constructor(e){super(e)}},Cm=[0],Pm=[0,je,Le,1,Le,-4],Dn=class extends bt{constructor(e){super(e,2)}},ke={};ke[336783863]=[0,pe,Le,-1,je,[0,[1,2,3,4,5,6,7,8,9],Ce,Cm,Ce,Am,Ce,Rm,Ce,Pm,Ce,Tm,Ce,[0,pe,-2],Ce,[0,pe,Pn],Ce,wm,Ce,[0,Pn,-1,Le]],[0,pe],Le,[0,[1,3],[2,4],Ce,[0,ya],-1,Ce,[0,sn],-1,qe,[0,pe,-1]],pe];var hf=[0,Vl,-1,Ts,-3,Vl,ya,$i,er,Vl,-1,Ts,er,Ts,-2,$i];function Me(e,t){Oo(e,3,t)}function qt(e,t){Oo(e,4,t)}var mn=class extends bt{constructor(e){super(e,500)}o(e){return Pt(this,0,7,e)}},Qr=[-1,{}],uf=[0,pe,1,Qr],df=[0,pe,sn,Qr];function Gn(e,t){Vh(e,1,mn,t)}function Ee(e,t){Oo(e,10,t)}function ee(e,t){Oo(e,15,t)}var In=class extends bt{constructor(e){super(e,500)}o(e){return Pt(this,0,1001,e)}},Lm=[-500,qe,[-500,$i,-1,sn,-3,[-2,ke,Le],qe,af,er,-1,uf,df,qe,[0,$i,Ts],$i,hf,er,sn,987,sn],4,qe,[-500,pe,-1,[-1,{}],998,pe],qe,[-500,pe,sn,-1,[-2,{},Le],997,sn,-1],er,qe,[-500,pe,sn,Qr,998,sn],sn,er,uf,df,qe,[0,$i,-1,Qr],sn,-2,hf,$i,-1,Ts,[0,Ts,AM],978,Qr,qe,af];In.prototype.g=qo(Lm);var PM=ss(In,Lm),LM=class extends bt{constructor(e){super(e)}},Dm=class extends bt{constructor(e){super(e)}g(){return Ni(this,LM,1)}},Im=[0,qe,[0,je,Ne,pe,-1]],jo=ss(Dm,Im),DM=class extends bt{constructor(e){super(e)}},IM=class extends bt{constructor(e){super(e)}},Wl=class extends bt{constructor(e){super(e)}l(){return te(this,DM,2)}g(){return Ni(this,IM,5)}},Um=ss(class extends bt{constructor(e){super(e)}},[0,sn,ya,eu,[0,Pn,[0,je,-3],[0,Ne,-3],[0,je,-1,[0,qe,[0,je,-2]]],qe,[0,Ne,-1,pe,Ne]],pe,-1,is,qe,[0,je,Ne],sn,is]),Nm=class extends bt{constructor(e){super(e)}},ar=ss(class extends bt{constructor(e){super(e)}},[0,qe,[0,Ne,-4]]),Fm=class extends bt{constructor(e){super(e)}},ba=ss(class extends bt{constructor(e){super(e)}},[0,qe,[0,Ne,-4]]),UM=class extends bt{constructor(e){super(e)}},NM=[0,je,-1,eu,Pn],Om=class extends bt{constructor(e){super(e)}};Om.prototype.g=qo([0,Ne,-4,is]);var FM=class extends bt{constructor(e){super(e)}},OM=ss(class extends bt{constructor(e){super(e)}},[0,qe,[0,1,je,pe,Im],is]),ff=class extends bt{constructor(e){super(e)}},BM=class extends bt{constructor(e){super(e)}na(){const e=xe(this,1,void 0,void 0,Xp);return e??ws()}},kM=class extends bt{constructor(e){super(e)}},Bm=[1,2],zM=ss(class extends bt{constructor(e){super(e)}},[0,qe,[0,Bm,Ce,[0,eu],Ce,[0,bm],je,pe],is]),nu=class extends bt{constructor(e){super(e)}},km=[0,pe,je,Ne,sn,-1],pf=class extends bt{constructor(e){super(e)}},GM=[0,Le,-1],mf=class extends bt{constructor(e){super(e)}},fo=[1,2,3,4,5,6],bo=class extends bt{constructor(e){super(e)}g(){return xe(this,1,void 0,void 0,Xp)!=null}l(){return Qe(xe(this,2))!=null}},Ae=class extends bt{constructor(e){super(e)}g(){return Np(xe(this,2))??!1}},zm=[0,bm,pe,[0,je,is,-1],[0,bM,is]],Fe=[0,zm,Le,[0,fo,Ce,Pm,Ce,Am,Ce,Tm,Ce,Cm,Ce,Rm,Ce,wm],Pn],Ko=class extends bt{constructor(e){super(e)}},iu=[0,Fe,Ne,-1,je],VM=_i(502141897,Ko);ke[502141897]=iu;var HM=ss(class extends bt{constructor(e){super(e)}},[0,[0,Pn,-1,EM,TM],NM]),Gm=class extends bt{constructor(e){super(e)}},Vm=class extends bt{constructor(e){super(e)}},$c=[0,Fe,Ne,[0,Fe],Le],WM=_i(508968150,Vm);ke[508968150]=[0,Fe,iu,$c,Ne,[0,[0,zm]]],ke[508968149]=$c;var Qs=class extends bt{constructor(e){super(e)}l(){return te(this,nu,2)}g(){ce(this,2)}},Hm=[0,Fe,km];ke[478825465]=Hm;var XM=class extends bt{constructor(e){super(e)}},Wm=class extends bt{constructor(e){super(e)}},su=class extends bt{constructor(e){super(e)}},ru=class extends bt{constructor(e){super(e)}},Xm=class extends bt{constructor(e){super(e)}},gf=[0,Fe,[0,Fe],Hm,-1],Ym=[0,Fe,Ne,je],au=[0,Fe,Ne],qm=[0,Fe,Ym,au,Ne],YM=_i(479097054,Xm);ke[479097054]=[0,Fe,qm,gf],ke[463370452]=gf,ke[464864288]=Ym;var qM=_i(462713202,ru);ke[462713202]=qm,ke[474472470]=au;var jM=class extends bt{constructor(e){super(e)}},jm=class extends bt{constructor(e){super(e)}},Km=class extends bt{constructor(e){super(e)}},Zm=class extends bt{constructor(e){super(e)}},ou=[0,Fe,Ne,-1,je],Jc=[0,Fe,Ne,Le];Zm.prototype.g=qo([0,Fe,au,[0,Fe],iu,$c,ou,Jc]);var $m=class extends bt{constructor(e){super(e)}},KM=_i(456383383,$m);ke[456383383]=[0,Fe,km];var Jm=class extends bt{constructor(e){super(e)}},ZM=_i(476348187,Jm);ke[476348187]=[0,Fe,GM];var Qm=class extends bt{constructor(e){super(e)}},_f=class extends bt{constructor(e){super(e)}},t0=[0,Pn,-1],$M=_i(458105876,class extends bt{constructor(e){super(e)}g(){let e;var t=this.v;const n=0|t[yt];return e=Rn(this,n),t=function(i,s,r,a){var o=_f;!a&&Pr(i)&&(r=0|(s=i.v)[yt]);var l=Ui(s,2);if(i=!1,l==null){if(a)return Zd();l=[]}else if(l.constructor===Ii){if(!(2&l.J)||a)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[yt])):l=[];if(a){if(!l.length)return Zd();i||(i=!0,va(l))}else i&&(i=!1,oa(l),l=Yp(l));return!i&&32&r&&_a(l,32),r=Be(s,r,2,a=new Ii(l,o,$3,void 0)),i||Is(s,r),a}(this,t,n,e),!e&&_f&&(t.ra=!0),t}});ke[458105876]=[0,t0,SM,[!0,is,[0,pe,-1,sn]],[0,ya,Le,Pn]];var lu=class extends bt{constructor(e){super(e)}},e0=_i(458105758,lu);ke[458105758]=[0,Fe,pe,t0];var Xl=class extends bt{constructor(e){super(e)}},vf=[0,yM,-1,Ts],JM=class extends bt{constructor(e){super(e)}},n0=class extends bt{constructor(e){super(e)}},Qc=[1,2];n0.prototype.g=qo([0,Qc,Ce,vf,Ce,[0,qe,vf]]);var i0=class extends bt{constructor(e){super(e)}},QM=_i(443442058,i0);ke[443442058]=[0,Fe,pe,je,Ne,sn,-1,Le,Ne],ke[514774813]=ou;var s0=class extends bt{constructor(e){super(e)}},tS=_i(516587230,s0);function th(e,t){return t=t?t.clone():new nu,e.displayNamesLocale!==void 0?ce(t,1,Sa(e.displayNamesLocale)):e.displayNamesLocale===void 0&&ce(t,1),e.maxResults!==void 0?Fi(t,2,e.maxResults):"maxResults"in e&&ce(t,2),e.scoreThreshold!==void 0?Rt(t,3,e.scoreThreshold):"scoreThreshold"in e&&ce(t,3),e.categoryAllowlist!==void 0?Mo(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&ce(t,4),e.categoryDenylist!==void 0?Mo(t,5,e.categoryDenylist):"categoryDenylist"in e&&ce(t,5),t}function r0(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function cu(e,t=-1,n=""){return{categories:e.map(i=>({index:kn(i,1)??0??-1,score:Pe(i,2)??0,categoryName:Qe(xe(i,3))??""??"",displayName:Qe(xe(i,4))??""??""})),headIndex:t,headName:n}}function eS(e){const t={classifications:Ni(e,FM,1).map(n=>{var i;return cu(((i=te(n,Dm,4))==null?void 0:i.g())??[],kn(n,2)??0,Qe(xe(n,3))??"")})};return function(n){return Z3(bh?xe(n,2,void 0,void 0,vo):xe(n,2))}(e)!=null&&(t.timestampMs=r0($p(e))),t}function a0(e){var a,o;var t=Ms(e,3,oi,xs()),n=Ms(e,2,Rr,xs()),i=Ms(e,1,Qe,xs()),s=Ms(e,9,Qe,xs());const r={categories:[],keypoints:[]};for(let l=0;l<t.length;l++)r.categories.push({score:t[l],index:n[l]??-1,categoryName:i[l]??"",displayName:s[l]??""});if((t=(a=te(e,Wl,4))==null?void 0:a.l())&&(r.boundingBox={originX:kn(t,1,Yi)??0,originY:kn(t,2,Yi)??0,width:kn(t,3,Yi)??0,height:kn(t,4,Yi)??0,angle:0}),(o=te(e,Wl,4))==null?void 0:o.g().length)for(const l of te(e,Wl,4).g())r.keypoints.push({x:xe(l,1,void 0,Yi,oi)??0,y:xe(l,2,void 0,Yi,oi)??0,score:xe(l,4,void 0,Yi,oi)??0,label:Qe(xe(l,3,void 0,Yi))??""});return r}function Zo(e){const t=[];for(const n of Ni(e,Fm,1))t.push({x:Pe(n,1)??0,y:Pe(n,2)??0,z:Pe(n,3)??0,visibility:Pe(n,4)??0});return t}function ta(e){const t=[];for(const n of Ni(e,Nm,1))t.push({x:Pe(n,1)??0,y:Pe(n,2)??0,z:Pe(n,3)??0,visibility:Pe(n,4)??0});return t}function xf(e){return Array.from(e,t=>t>127?t-256:t)}function Mf(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let eo;ke[516587230]=[0,Fe,ou,Jc,Ne],ke[518928384]=Jc;const nS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function o0(){if(eo===void 0)try{await WebAssembly.instantiate(nS),eo=!0}catch{eo=!1}return eo}async function Yr(e,t=RM``){const n=await o0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var ps=class{};function l0(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Sf(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(t)})}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;await self.import(e.toString())}}function c0(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function At(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Ef(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=c0(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function yf(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const s of i)e.i._free(s);e.i._free(t)}function ni(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function qi(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}ps.forVisionTasks=function(e){return Yr("vision",e)},ps.forTextTasks=function(e){return Yr("text",e)},ps.forGenAiExperimentalTasks=function(e){return Yr("genai_experimental",e)},ps.forGenAiTasks=function(e){return Yr("genai",e)},ps.forAudioTasks=function(e){return Yr("audio",e)},ps.isSimdSupported=function(){return o0()};async function iS(e,t,n,i){return e=await(async(s,r,a,o,l)=>{if(r&&await Sf(r),!self.ModuleFactory||a&&(await Sf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function Yl(e,t){const n=te(e.baseOptions,bo,1)||new bo;typeof t=="string"?(ce(n,2,Sa(t)),ce(n,1)):t instanceof Uint8Array&&(ce(n,1,wh(t,!1)),ce(n,2)),Pt(e.baseOptions,0,1,n)}function bf(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map(n=>n.message).join(", "))}finally{e.H=[]}}function pt(e,t){e.C=Math.max(e.C,t)}function $o(e,t){e.B=new mn,Cn(e.B,2,"PassThroughCalculator"),Me(e.B,"free_memory"),qt(e.B,"free_memory_unused_out"),Ee(t,"free_memory"),Gn(t,e.B)}function Sr(e,t){Me(e.B,t),qt(e.B,t+"_unused_out")}function Jo(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var eh=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,s,r,a,o;if(t){const l=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=te(this.baseOptions,bo,1))!=null&&s.g()||(r=te(this.baseOptions,bo,1))!=null&&r.l()||(a=e.baseOptions)!=null&&a.modelAssetBuffer||(o=e.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,h){let d=te(c.baseOptions,mf,3);if(!d){var u=d=new mf,p=new cf;Jr(u,4,fo,p)}"delegate"in h&&(h.delegate==="GPU"?(h=d,u=new CM,Jr(h,2,fo,u)):(h=d,u=new cf,Jr(h,4,fo,u))),Pt(c.baseOptions,0,3,d)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),Yl(this,"/model.dat"),this.m(),this.L()});if(l.modelAssetBuffer instanceof Uint8Array)Yl(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){const h=[];for(var d=0;;){const{done:u,value:p}=await c.read();if(u)break;h.push(p),d+=p.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];c=new Uint8Array(d),d=0;for(const u of h)c.set(u,d),d+=u.length;return c}(l.modelAssetBuffer).then(c=>{Yl(this,c),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca(t=>{e=PM(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener((n,i)=>{this.H.push(Error(i))}),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,bf(this)}finishProcessing(){this.g.finishProcessing(),bf(this)}close(){this.B=void 0,this.g.closeGraph()}};function Qi(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}eh.prototype.close=eh.prototype.close;class sS{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Tf(e,t,n){const i=e.g;if(n=Qi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function Af(e,t){const n=e.g,i=Qi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=Qi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=Qi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new sS(n,i,s,r)}function hu(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function rS(e,t,n,i){return hu(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=Af(e,!0)),n=e.u):(e.A||(e.A=Af(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function h0(e,t,n){return hu(e,t),e=Qi(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function u0(e,t,n){hu(e,t),e.B||(e.B=Qi(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function aS(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var d0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=Qi(e.createProgram(),"Failed to create WebGL program"),this.X=Tf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=Tf(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function wi(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function nh(e){var t=wi(e,1);if(!t){if(t=wi(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);const i=Er(e);var n=uu(e);if(u0(n,i,f0(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function f0(e){let t=wi(e,2);if(!t){const n=Er(e);t=m0(e);const i=nh(e),s=p0(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),ih(e)}return t}function Er(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Qi(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function p0(e){if(e=Er(e),!no)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))no=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");no=e.R16F}return no}function uu(e){return e.l||(e.l=new d0),e.l}function m0(e){const t=Er(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=wi(e,2);return n||(n=h0(uu(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function ih(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var no,Ye=class{constructor(e,t,n,i,s,r,a){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=a,this.j&&--wf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!wi(this,0)}ka(){return!!wi(this,1)}R(){return!!wi(this,2)}ja(){return(t=wi(e=this,0))||(t=nh(e),t=new Uint8Array(t.map(n=>Math.round(255*n))),e.g.push(t)),t;var e,t}ia(){return nh(this)}N(){return f0(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=Er(this),s=uu(this);i.activeTexture(i.TEXTURE1),n=h0(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=p0(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),u0(s,i,n),rS(s,i,!1,()=>{m0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ih(this)}),aS(s),ih(this)}}e.push(n)}return new Ye(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Er(this).deleteTexture(wi(this,2)),wf=-1}};Ye.prototype.close=Ye.prototype.close,Ye.prototype.clone=Ye.prototype.clone,Ye.prototype.getAsWebGLTexture=Ye.prototype.N,Ye.prototype.getAsFloat32Array=Ye.prototype.ia,Ye.prototype.getAsUint8Array=Ye.prototype.ja,Ye.prototype.hasWebGLTexture=Ye.prototype.R,Ye.prototype.hasFloat32Array=Ye.prototype.ka,Ye.prototype.hasUint8Array=Ye.prototype.Fa;var wf=250;function Zn(...e){return e.map(([t,n])=>({start:t,end:n}))}const oS=function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}}((Rf=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:l0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),At(this,i||"input_audio",r=>{At(this,s=s||"audio_header",a=>{this.i._configureAudio(r,a,e,t??0,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){ni(this,"__graph_config__",t=>{e(t)}),At(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){const r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),At(this,i,a=>{this.i._addAudioToInputStream(this.g,t,n,a,s)})}addGpuBufferToStream(e,t,n){At(this,t,i=>{const[s,r]=Ef(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(e,t,n){At(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){At(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){At(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){At(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){At(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){At(this,t,i=>{At(this,e,s=>{this.i._addStringToInputStream(s,i,n)})})}addStringRecordToStream(e,t,n){At(this,t,i=>{yf(this,Object.keys(e),s=>{yf(this,Object.values(e),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){At(this,n,s=>{At(this,t,r=>{const a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,r,s,i),this.i._free(a)})})}addEmptyPacketToStream(e,t){At(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of e)At(this,r,a=>{this.i._addStringVectorEntry(s,a)});this.i._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(e,t){At(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){At(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){At(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){At(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){At(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){At(this,t,n=>{At(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){At(this,n,i=>{At(this,t,s=>{const r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of e)At(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){ni(this,e,t),At(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){qi(this,e,t),At(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){ni(this,e,t),At(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){qi(this,e,t),At(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){ni(this,e,t),At(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){qi(this,e,t),At(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){ni(this,e,t),At(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){qi(this,e,t),At(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){ni(this,e,t),At(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){qi(this,e,t),At(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){ni(this,e,t),At(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){qi(this,e,t),At(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){ni(this,e,t),At(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){qi(this,e,t),At(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ni(this,e,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)}),At(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Rf{get ga(){return this.i}pa(e,t,n){At(this,t,i=>{const[s,r]=Ef(this,e,i);this.ga._addBoundTextureAsImageToStream(i,s,r,n)})}Z(e,t){ni(this,e,t),At(this,e,n=>{this.ga._attachImageListener(n)})}aa(e,t){qi(this,e,t),At(this,e,n=>{this.ga._attachImageVectorListener(n)})}}));var Rf,$n=class extends oS{};async function Jt(e,t,n){return async function(i,s,r,a){return iS(i,s,r,a)}(e,n.canvas??(l0()?void 0:document.createElement("canvas")),t,n)}function g0(e,t,n,i){if(e.U){const r=new Om;if(n!=null&&n.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Rt(r,1,(s.left+s.right)/2),Rt(r,2,(s.top+s.bottom)/2),Rt(r,4,s.right-s.left),Rt(r,3,s.bottom-s.top)}else Rt(r,1,.5),Rt(r,2,.5),Rt(r,4,1),Rt(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Rt(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[a,o]=c0(t);n=Pe(r,3)*o/a,s=Pe(r,4)*a/o,Rt(r,4,n),Rt(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function Jn(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");g0(e,t,n,e.C+1)}function vi(e,t,n,i){var s;if(!((s=e.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");g0(e,t,n,i)}function yr(e,t,n,i){var s=t.data;const r=t.width,a=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return e=new Ye([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var Ln=class extends eh{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new d0}l(e,t=!0){if("runningMode"in e&&ce(this.baseOptions,2,ca(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Ln.prototype.close=Ln.prototype.close;var Nn=class extends Ln{constructor(e,t){super(new $n(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Pt(e=this.h=new Ko,0,1,t=new Ae),Rt(this.h,2,.5),Rt(this.h,3,.3)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Rt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Rt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},Jn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},vi(this,e,n,t),this.j}m(){var e=new In;Ee(e,"image_in"),Ee(e,"norm_rect_in"),ee(e,"detections");const t=new Dn;gi(t,VM,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Me(n,"IMAGE:image_in"),Me(n,"NORM_RECT:norm_rect_in"),qt(n,"DETECTIONS:detections"),n.o(t),Gn(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=Um(r),this.j.detections.push(a0(i));pt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{pt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Nn.prototype.detectForVideo=Nn.prototype.G,Nn.prototype.detect=Nn.prototype.F,Nn.prototype.setOptions=Nn.prototype.o,Nn.createFromModelPath=async function(e,t){return Jt(Nn,e,{baseOptions:{modelAssetPath:t}})},Nn.createFromModelBuffer=function(e,t){return Jt(Nn,e,{baseOptions:{modelAssetBuffer:t}})},Nn.createFromOptions=function(e,t){return Jt(Nn,e,t)};var du=Zn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),fu=Zn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),pu=Zn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),_0=Zn([474,475],[475,476],[476,477],[477,474]),mu=Zn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),gu=Zn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),v0=Zn([469,470],[470,471],[471,472],[472,469]),_u=Zn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),x0=[...du,...fu,...pu,...mu,...gu,..._u],M0=Zn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Cf(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var be=class extends Ln{constructor(e,t){super(new $n(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Pt(e=this.h=new Vm,0,1,t=new Ae),this.A=new Gm,Pt(this.h,0,3,this.A),this.u=new Ko,Pt(this.h,0,2,this.u),Fi(this.u,4,1),Rt(this.u,2,.5),Rt(this.A,2,.5),Rt(this.h,4,.5)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"numFaces"in e&&Fi(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Rt(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Rt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Rt(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return Cf(this),Jn(this,e,t),this.j}G(e,t,n){return Cf(this),vi(this,e,n,t),this.j}m(){var e=new In;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"face_landmarks");const t=new Dn;gi(t,WM,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Me(n,"IMAGE:image_in"),Me(n,"NORM_RECT:norm_rect"),qt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),Gn(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(const r of i)i=ba(r),this.j.faceLandmarks.push(Zo(i));pt(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{pt(this,i)}),this.outputFaceBlendshapes&&(ee(e,"blendshapes"),qt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=jo(r),this.j.faceBlendshapes.push(cu(i.g()??[]));pt(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{pt(this,i)})),this.outputFacialTransformationMatrixes&&(ee(e,"face_geometry"),qt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=te(i=HM(r),UM,2))&&this.j.facialTransformationMatrixes.push({rows:kn(i,1)??0??0,columns:kn(i,2)??0??0,data:Ms(i,3,oi,xs()).slice()??[]});pt(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{pt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};be.prototype.detectForVideo=be.prototype.G,be.prototype.detect=be.prototype.F,be.prototype.setOptions=be.prototype.o,be.createFromModelPath=function(e,t){return Jt(be,e,{baseOptions:{modelAssetPath:t}})},be.createFromModelBuffer=function(e,t){return Jt(be,e,{baseOptions:{modelAssetBuffer:t}})},be.createFromOptions=function(e,t){return Jt(be,e,t)},be.FACE_LANDMARKS_LIPS=du,be.FACE_LANDMARKS_LEFT_EYE=fu,be.FACE_LANDMARKS_LEFT_EYEBROW=pu,be.FACE_LANDMARKS_LEFT_IRIS=_0,be.FACE_LANDMARKS_RIGHT_EYE=mu,be.FACE_LANDMARKS_RIGHT_EYEBROW=gu,be.FACE_LANDMARKS_RIGHT_IRIS=v0,be.FACE_LANDMARKS_FACE_OVAL=_u,be.FACE_LANDMARKS_CONTOURS=x0,be.FACE_LANDMARKS_TESSELATION=M0;var vu=Zn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Pf(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Lf(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Df(e,t=!0){const n=[];for(const s of e){var i=jo(s);e=[];for(const r of i.g())i=t&&kn(r,1)!=null?kn(r,1)??0:-1,e.push({score:Pe(r,2)??0,index:i,categoryName:Qe(xe(r,3))??""??"",displayName:Qe(xe(r,4))??""??""});n.push(e)}return n}var xn=class extends Ln{constructor(e,t){super(new $n(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pt(e=this.j=new Xm,0,1,t=new Ae),this.u=new ru,Pt(this.j,0,2,this.u),this.D=new su,Pt(this.u,0,3,this.D),this.A=new Wm,Pt(this.u,0,2,this.A),this.h=new XM,Pt(this.j,0,3,this.h),Rt(this.A,2,.5),Rt(this.u,4,.5),Rt(this.D,2,.5)}get baseOptions(){return te(this.j,Ae,1)}set baseOptions(e){Pt(this.j,0,1,e)}o(e){var s,r,a,o;if(Fi(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&Rt(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Rt(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Rt(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Qs,n=t,i=th(e.cannedGesturesClassifierOptions,(s=te(this.h,Qs,3))==null?void 0:s.l());Pt(n,0,2,i),Pt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((r=te(this.h,Qs,3))==null||r.g());return e.customGesturesClassifierOptions?(Pt(n=t=new Qs,0,2,i=th(e.customGesturesClassifierOptions,(a=te(this.h,Qs,4))==null?void 0:a.l())),Pt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((o=te(this.h,Qs,4))==null||o.g()),this.l(e)}Ha(e,t){return Pf(this),Jn(this,e,t),Lf(this)}Ia(e,t,n){return Pf(this),vi(this,e,n,t),Lf(this)}m(){var e=new In;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"hand_gestures"),ee(e,"hand_landmarks"),ee(e,"world_hand_landmarks"),ee(e,"handedness");const t=new Dn;gi(t,YM,this.j);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Me(n,"IMAGE:image_in"),Me(n,"NORM_RECT:norm_rect"),qt(n,"HAND_GESTURES:hand_gestures"),qt(n,"LANDMARKS:hand_landmarks"),qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),qt(n,"HANDEDNESS:handedness"),n.o(t),Gn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i){i=ba(r);const a=[];for(const o of Ni(i,Fm,1))a.push({x:Pe(o,1)??0,y:Pe(o,2)??0,z:Pe(o,3)??0,visibility:Pe(o,4)??0});this.landmarks.push(a)}pt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{pt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i){i=ar(r);const a=[];for(const o of Ni(i,Nm,1))a.push({x:Pe(o,1)??0,y:Pe(o,2)??0,z:Pe(o,3)??0,visibility:Pe(o,4)??0});this.worldLandmarks.push(a)}pt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{pt(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...Df(i,!1)),pt(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{pt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...Df(i)),pt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{pt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function If(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}xn.prototype.recognizeForVideo=xn.prototype.Ia,xn.prototype.recognize=xn.prototype.Ha,xn.prototype.setOptions=xn.prototype.o,xn.createFromModelPath=function(e,t){return Jt(xn,e,{baseOptions:{modelAssetPath:t}})},xn.createFromModelBuffer=function(e,t){return Jt(xn,e,{baseOptions:{modelAssetBuffer:t}})},xn.createFromOptions=function(e,t){return Jt(xn,e,t)},xn.HAND_CONNECTIONS=vu;var dn=class extends Ln{constructor(e,t){super(new $n(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pt(e=this.h=new ru,0,1,t=new Ae),this.u=new su,Pt(this.h,0,3,this.u),this.j=new Wm,Pt(this.h,0,2,this.j),Fi(this.j,3,1),Rt(this.j,2,.5),Rt(this.u,2,.5),Rt(this.h,4,.5)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"numHands"in e&&Fi(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Rt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Rt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Rt(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Jn(this,e,t),If(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],vi(this,e,n,t),If(this)}m(){var e=new In;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"hand_landmarks"),ee(e,"world_hand_landmarks"),ee(e,"handedness");const t=new Dn;gi(t,qM,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Me(n,"IMAGE:image_in"),Me(n,"NORM_RECT:norm_rect"),qt(n,"LANDMARKS:hand_landmarks"),qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),qt(n,"HANDEDNESS:handedness"),n.o(t),Gn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i)i=ba(r),this.landmarks.push(Zo(i));pt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{pt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i)i=ar(r),this.worldLandmarks.push(ta(i));pt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{pt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push;const o=[];for(const l of i){i=jo(l);const c=[];for(const h of i.g())c.push({score:Pe(h,2)??0,index:kn(h,1)??0??-1,categoryName:Qe(xe(h,3))??""??"",displayName:Qe(xe(h,4))??""??""});o.push(c)}a.call(r,...o),pt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{pt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};dn.prototype.detectForVideo=dn.prototype.G,dn.prototype.detect=dn.prototype.F,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(e,t){return Jt(dn,e,{baseOptions:{modelAssetPath:t}})},dn.createFromModelBuffer=function(e,t){return Jt(dn,e,{baseOptions:{modelAssetBuffer:t}})},dn.createFromOptions=function(e,t){return Jt(dn,e,t)},dn.HAND_CONNECTIONS=vu;var S0=Zn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Uf(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Nf(e){try{if(!e.D)return e.h;e.D(e.h)}finally{Jo(e)}}function io(e,t){e=ba(e),t.push(Zo(e))}var ve=class extends Ln{constructor(e,t){super(new $n(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Pt(e=this.j=new Zm,0,1,t=new Ae),this.I=new su,Pt(this.j,0,2,this.I),this.W=new jM,Pt(this.j,0,3,this.W),this.u=new Ko,Pt(this.j,0,4,this.u),this.O=new Gm,Pt(this.j,0,5,this.O),this.A=new jm,Pt(this.j,0,6,this.A),this.M=new Km,Pt(this.j,0,7,this.M),Rt(this.u,2,.5),Rt(this.u,3,.3),Rt(this.O,2,.5),Rt(this.A,2,.5),Rt(this.A,3,.3),Rt(this.M,2,.5),Rt(this.I,2,.5)}get baseOptions(){return te(this.j,Ae,1)}set baseOptions(e){Pt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Rt(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Rt(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Rt(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Rt(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Rt(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Rt(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Rt(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,Uf(this),Jn(this,e,i),Nf(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Uf(this),vi(this,e,s,t),Nf(this)}m(){var e=new In;Ee(e,"input_frames_image"),ee(e,"pose_landmarks"),ee(e,"pose_world_landmarks"),ee(e,"face_landmarks"),ee(e,"left_hand_landmarks"),ee(e,"left_hand_world_landmarks"),ee(e,"right_hand_landmarks"),ee(e,"right_hand_world_landmarks");const t=new Dn,n=new rf;Cn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(s,r){if(r!=null)if(Array.isArray(r))ce(s,2,Fo(r,0,ha));else{if(!(typeof r=="string"||r instanceof hi||Th(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Ki(s,2,wh(r,!1),ws())}}(n,this.j.g());const i=new mn;Cn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Vh(i,8,rf,n),Me(i,"IMAGE:input_frames_image"),qt(i,"POSE_LANDMARKS:pose_landmarks"),qt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),qt(i,"FACE_LANDMARKS:face_landmarks"),qt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),qt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),qt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),qt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Gn(e,i),$o(this,e),this.g.attachProtoListener("pose_landmarks",(s,r)=>{io(s,this.h.poseLandmarks),pt(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{pt(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.h.poseWorldLandmarks;s=ar(s),a.push(ta(s)),pt(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{pt(this,s)}),this.outputPoseSegmentationMasks&&(qt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Sr(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[yr(this,s,!0,!this.D)],pt(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],pt(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{io(s,this.h.faceLandmarks),pt(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{pt(this,s)}),this.outputFaceBlendshapes&&(ee(e,"extra_blendshapes"),qt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=jo(s),a.push(cu(s.g()??[]))),pt(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{pt(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{io(s,this.h.leftHandLandmarks),pt(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{pt(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.h.leftHandWorldLandmarks;s=ar(s),a.push(ta(s)),pt(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{pt(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{io(s,this.h.rightHandLandmarks),pt(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{pt(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.h.rightHandWorldLandmarks;s=ar(s),a.push(ta(s)),pt(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{pt(this,s)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ve.prototype.detectForVideo=ve.prototype.G,ve.prototype.detect=ve.prototype.F,ve.prototype.setOptions=ve.prototype.o,ve.createFromModelPath=function(e,t){return Jt(ve,e,{baseOptions:{modelAssetPath:t}})},ve.createFromModelBuffer=function(e,t){return Jt(ve,e,{baseOptions:{modelAssetBuffer:t}})},ve.createFromOptions=function(e,t){return Jt(ve,e,t)},ve.HAND_CONNECTIONS=vu,ve.POSE_CONNECTIONS=S0,ve.FACE_LANDMARKS_LIPS=du,ve.FACE_LANDMARKS_LEFT_EYE=fu,ve.FACE_LANDMARKS_LEFT_EYEBROW=pu,ve.FACE_LANDMARKS_LEFT_IRIS=_0,ve.FACE_LANDMARKS_RIGHT_EYE=mu,ve.FACE_LANDMARKS_RIGHT_EYEBROW=gu,ve.FACE_LANDMARKS_RIGHT_IRIS=v0,ve.FACE_LANDMARKS_FACE_OVAL=_u,ve.FACE_LANDMARKS_CONTOURS=x0,ve.FACE_LANDMARKS_TESSELATION=M0;var Fn=class extends Ln{constructor(e,t){super(new $n(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Pt(e=this.h=new $m,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return Pt(this.h,0,2,th(e,te(this.h,nu,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},Jn(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},vi(this,e,n,t),this.j}m(){var e=new In;Ee(e,"input_image"),Ee(e,"norm_rect"),ee(e,"classifications");const t=new Dn;gi(t,KM,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Me(n,"IMAGE:input_image"),Me(n,"NORM_RECT:norm_rect"),qt(n,"CLASSIFICATIONS:classifications"),n.o(t),Gn(e,n),this.g.attachProtoListener("classifications",(i,s)=>{this.j=eS(OM(i)),pt(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{pt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Fn.prototype.classifyForVideo=Fn.prototype.ta,Fn.prototype.classify=Fn.prototype.sa,Fn.prototype.setOptions=Fn.prototype.o,Fn.createFromModelPath=function(e,t){return Jt(Fn,e,{baseOptions:{modelAssetPath:t}})},Fn.createFromModelBuffer=function(e,t){return Jt(Fn,e,{baseOptions:{modelAssetBuffer:t}})},Fn.createFromOptions=function(e,t){return Jt(Fn,e,t)};var Mn=class extends Ln{constructor(e,t){super(new $n(e,t),"image_in","norm_rect",!0),this.h=new Jm,this.embeddings={embeddings:[]},Pt(e=this.h,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){var t=this.h,n=te(this.h,pf,2);return n=n?n.clone():new pf,e.l2Normalize!==void 0?ce(n,1,ca(e.l2Normalize)):"l2Normalize"in e&&ce(n,1),e.quantize!==void 0?ce(n,2,ca(e.quantize)):"quantize"in e&&ce(n,2),Pt(t,0,2,n),this.l(e)}za(e,t){return Jn(this,e,t),this.embeddings}Aa(e,t,n){return vi(this,e,n,t),this.embeddings}m(){var e=new In;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"embeddings_out");const t=new Dn;gi(t,ZM,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Me(n,"IMAGE:image_in"),Me(n,"NORM_RECT:norm_rect"),qt(n,"EMBEDDINGS:embeddings_out"),n.o(t),Gn(e,n),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=zM(i),this.embeddings=function(r){return{embeddings:Ni(r,kM,1).map(a=>{var c,h;const o={headIndex:kn(a,3)??0??-1,headName:Qe(xe(a,4))??""??""};var l=a.v;return jp(l,0|l[yt],ff,Gl(a,1))!==void 0?(a=Ms(a=te(a,ff,Gl(a,1),void 0),1,oi,xs()),o.floatEmbedding=a.slice()):(l=new Uint8Array(0),o.quantizedEmbedding=((h=(c=te(a,BM,Gl(a,2),void 0))==null?void 0:c.na())==null?void 0:h.h())??l),o}),timestampMs:r0($p(r))}}(i),pt(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{pt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Mn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=Mf(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=Mf(xf(e.quantizedEmbedding),xf(t.quantizedEmbedding))}return e},Mn.prototype.embedForVideo=Mn.prototype.Aa,Mn.prototype.embed=Mn.prototype.za,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(e,t){return Jt(Mn,e,{baseOptions:{modelAssetPath:t}})},Mn.createFromModelBuffer=function(e,t){return Jt(Mn,e,{baseOptions:{modelAssetBuffer:t}})},Mn.createFromOptions=function(e,t){return Jt(Mn,e,t)};var sh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};function lS(e){var n,i;const t=function(s){return Ni(s,mn,1)}(e.ca()).filter(s=>(Qe(xe(s,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(n=te(t[0],Dn,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach((s,r)=>{e.u[Number(r)]=Qe(xe(s,1))??""})}function Ff(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Of(e){try{const t=new sh(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Jo(e)}}sh.prototype.close=sh.prototype.close;var un=class extends Ln{constructor(e,t){super(new $n(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new lu,this.A=new Qm,Pt(this.h,0,3,this.A),Pt(e=this.h,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ce(this.h,2,Sa(e.displayNamesLocale)):"displayNamesLocale"in e&&ce(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){lS(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,Ff(this),Jn(this,e,i),Of(this)}La(e,t,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Ff(this),vi(this,e,s,t),Of(this)}Da(){return this.u}m(){var e=new In;Ee(e,"image_in"),Ee(e,"norm_rect");const t=new Dn;gi(t,e0,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Me(n,"IMAGE:image_in"),Me(n,"NORM_RECT:norm_rect"),n.o(t),Gn(e,n),$o(this,e),this.outputConfidenceMasks&&(ee(e,"confidence_masks"),qt(n,"CONFIDENCE_MASKS:confidence_masks"),Sr(this,"confidence_masks"),this.g.aa("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>yr(this,r,!0,!this.j)),pt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],pt(this,i)})),this.outputCategoryMask&&(ee(e,"category_mask"),qt(n,"CATEGORY_MASK:category_mask"),Sr(this,"category_mask"),this.g.Z("category_mask",(i,s)=>{this.categoryMask=yr(this,i,!1,!this.j),pt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,pt(this,i)})),ee(e,"quality_scores"),qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,pt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,pt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};un.prototype.getLabels=un.prototype.Da,un.prototype.segmentForVideo=un.prototype.La,un.prototype.segment=un.prototype.segment,un.prototype.setOptions=un.prototype.o,un.createFromModelPath=function(e,t){return Jt(un,e,{baseOptions:{modelAssetPath:t}})},un.createFromModelBuffer=function(e,t){return Jt(un,e,{baseOptions:{modelAssetBuffer:t}})},un.createFromOptions=function(e,t){return Jt(un,e,t)};var rh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};rh.prototype.close=rh.prototype.close;var ii=class extends Ln{constructor(e,t){super(new $n(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new lu,this.u=new Qm,Pt(this.h,0,3,this.u),Pt(e=this.h,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const s=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new n0,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new Xl;Ki(r,3,ca(!0),!1),Ki(r,1,$r(t.keypoint.x),0),Ki(r,2,$r(t.keypoint.y),0),Jr(i,1,Qc,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new JM;for(r of t.scribble)Ki(t=new Xl,3,ca(!0),!1),Ki(t,1,$r(r.x),0),Ki(t,2,$r(r.y),0),Vh(o,1,Xl,t);Jr(i,2,Qc,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Jn(this,e,s);t:{try{const o=new rh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break t}this.j(o)}finally{Jo(this)}a=void 0}return a}m(){var e=new In;Ee(e,"image_in"),Ee(e,"roi_in"),Ee(e,"norm_rect_in");const t=new Dn;gi(t,e0,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Me(n,"IMAGE:image_in"),Me(n,"ROI:roi_in"),Me(n,"NORM_RECT:norm_rect_in"),n.o(t),Gn(e,n),$o(this,e),this.outputConfidenceMasks&&(ee(e,"confidence_masks"),qt(n,"CONFIDENCE_MASKS:confidence_masks"),Sr(this,"confidence_masks"),this.g.aa("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>yr(this,r,!0,!this.j)),pt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],pt(this,i)})),this.outputCategoryMask&&(ee(e,"category_mask"),qt(n,"CATEGORY_MASK:category_mask"),Sr(this,"category_mask"),this.g.Z("category_mask",(i,s)=>{this.categoryMask=yr(this,i,!1,!this.j),pt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,pt(this,i)})),ee(e,"quality_scores"),qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,pt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,pt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ii.prototype.segment=ii.prototype.segment,ii.prototype.setOptions=ii.prototype.o,ii.createFromModelPath=function(e,t){return Jt(ii,e,{baseOptions:{modelAssetPath:t}})},ii.createFromModelBuffer=function(e,t){return Jt(ii,e,{baseOptions:{modelAssetBuffer:t}})},ii.createFromOptions=function(e,t){return Jt(ii,e,t)};var On=class extends Ln{constructor(e,t){super(new $n(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Pt(e=this.h=new i0,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?ce(this.h,2,Sa(e.displayNamesLocale)):"displayNamesLocale"in e&&ce(this.h,2),e.maxResults!==void 0?Fi(this.h,3,e.maxResults):"maxResults"in e&&ce(this.h,3),e.scoreThreshold!==void 0?Rt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&ce(this.h,4),e.categoryAllowlist!==void 0?Mo(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&ce(this.h,5),e.categoryDenylist!==void 0?Mo(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&ce(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},Jn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},vi(this,e,n,t),this.j}m(){var e=new In;Ee(e,"input_frame_gpu"),Ee(e,"norm_rect"),ee(e,"detections");const t=new Dn;gi(t,QM,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Me(n,"IMAGE:input_frame_gpu"),Me(n,"NORM_RECT:norm_rect"),qt(n,"DETECTIONS:detections"),n.o(t),Gn(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=Um(r),this.j.detections.push(a0(i));pt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{pt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};On.prototype.detectForVideo=On.prototype.G,On.prototype.detect=On.prototype.F,On.prototype.setOptions=On.prototype.o,On.createFromModelPath=async function(e,t){return Jt(On,e,{baseOptions:{modelAssetPath:t}})},On.createFromModelBuffer=function(e,t){return Jt(On,e,{baseOptions:{modelAssetBuffer:t}})},On.createFromOptions=function(e,t){return Jt(On,e,t)};var ah=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach(t=>{t.close()})}};function Bf(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function kf(e){try{const t=new ah(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{Jo(e)}}ah.prototype.close=ah.prototype.close;var Sn=class extends Ln{constructor(e,t){super(new $n(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Pt(e=this.h=new s0,0,1,t=new Ae),this.A=new Km,Pt(this.h,0,3,this.A),this.j=new jm,Pt(this.h,0,2,this.j),Fi(this.j,4,1),Rt(this.j,2,.5),Rt(this.A,2,.5),Rt(this.h,4,.5)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"numPoses"in e&&Fi(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Rt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Rt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Rt(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,Bf(this),Jn(this,e,i),kf(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Bf(this),vi(this,e,s,t),kf(this)}m(){var e=new In;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"normalized_landmarks"),ee(e,"world_landmarks"),ee(e,"segmentation_masks");const t=new Dn;gi(t,tS,this.h);const n=new mn;Cn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Me(n,"IMAGE:image_in"),Me(n,"NORM_RECT:norm_rect"),qt(n,"NORM_LANDMARKS:normalized_landmarks"),qt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),Gn(e,n),$o(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(const r of i)i=ba(r),this.landmarks.push(Zo(i));pt(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],pt(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(const r of i)i=ar(r),this.worldLandmarks.push(ta(i));pt(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],pt(this,i)}),this.outputSegmentationMasks&&(qt(n,"SEGMENTATION_MASK:segmentation_masks"),Sr(this,"segmentation_masks"),this.g.aa("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>yr(this,r,!0,!this.u)),pt(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],pt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Sn.prototype.detectForVideo=Sn.prototype.G,Sn.prototype.detect=Sn.prototype.F,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(e,t){return Jt(Sn,e,{baseOptions:{modelAssetPath:t}})},Sn.createFromModelBuffer=function(e,t){return Jt(Sn,e,{baseOptions:{modelAssetBuffer:t}})},Sn.createFromOptions=function(e,t){return Jt(Sn,e,t)},Sn.POSE_CONNECTIONS=S0;function ql(e){const t=[8,12,16,20],n=[6,10,14,18];for(let s=0;s<t.length;s++)if(e[t[s]].y>=e[n[s]].y)return!1;return!(Math.abs(e[4].x-e[5].x)<.04)}class cS{constructor(t,n){Xt(this,"globe");Xt(this,"controls");Xt(this,"video");Xt(this,"container");Xt(this,"button");Xt(this,"handLandmarker",null);Xt(this,"stream",null);Xt(this,"animationFrameId",null);Xt(this,"_active",!1);Xt(this,"smoothX",0);Xt(this,"smoothY",0);Xt(this,"prevSmoothX",0);Xt(this,"prevSmoothY",0);Xt(this,"hasSmooth",!1);Xt(this,"smoothingFactor",.35);Xt(this,"targetRotY",0);Xt(this,"targetPolarAngle",Math.PI/2);Xt(this,"cameraDistance",3);Xt(this,"globeLerpFactor",.12);Xt(this,"sensitivity",4);Xt(this,"deadzone",.003);Xt(this,"tracking",!1);this.globe=t,this.controls=n,this.video=document.getElementById("webcam-video"),this.container=document.getElementById("webcam-container"),this.button=document.getElementById("gesture-btn"),this.button.addEventListener("click",()=>this.toggle())}get active(){return this._active}async toggle(){this._active?this.deactivate():await this.activate()}async activate(){this.button.textContent="⏳ Loading...",this.button.disabled=!0;try{if(this.stream=await navigator.mediaDevices.getUserMedia({video:{width:320,height:240,facingMode:"user"}}),this.video.srcObject=this.stream,await this.video.play(),!this.handLandmarker){const t=await ps.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");this.handLandmarker=await dn.createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2})}this.container.classList.add("visible"),this.controls.enabled=!1,this._active=!0,this.tracking=!1,this.hasSmooth=!1,this.targetRotY=this.globe.earthGroup.rotation.y,this.cameraDistance=this.globe.camera.position.length(),this.targetPolarAngle=Math.acos(this.globe.camera.position.y/this.cameraDistance),this.button.textContent="🖐 Gesture Mode (ON)",this.button.classList.add("active"),this.button.disabled=!1,this.detectLoop()}catch(t){console.error("Gesture activation failed:",t),this.button.textContent="🖐 Gesture Mode",this.button.disabled=!1,this.deactivate()}}deactivate(){this._active=!1,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.stream&&(this.stream.getTracks().forEach(t=>t.stop()),this.stream=null),this.video.srcObject=null,this.container.classList.remove("visible"),this.controls.enabled=!0,this.button.textContent="🖐 Gesture Mode",this.button.classList.remove("active"),this.tracking=!1,this.hasSmooth=!1}detectLoop(){if(!this._active||!this.handLandmarker)return;const t=performance.now();let n=null;try{n=this.handLandmarker.detectForVideo(this.video,t)}catch{}if(n&&n.landmarks){const o=n.landmarks.length;if(o>=2&&ql(n.landmarks[0])&&ql(n.landmarks[1])){this.tracking=!1,this.hasSmooth=!1,this.animationFrameId=requestAnimationFrame(()=>this.detectLoop());return}if(o>=1){const l=n.landmarks[0];if(ql(l)){this.tracking||(this.tracking=!0,this.hasSmooth=!1);const h=l[0],d=h.x,u=h.y;if(!this.hasSmooth)this.smoothX=d,this.smoothY=u,this.prevSmoothX=d,this.prevSmoothY=u,this.hasSmooth=!0;else{this.prevSmoothX=this.smoothX,this.prevSmoothY=this.smoothY,this.smoothX+=this.smoothingFactor*(d-this.smoothX),this.smoothY+=this.smoothingFactor*(u-this.smoothY);const p=this.smoothX-this.prevSmoothX,_=this.smoothY-this.prevSmoothY;if(Math.abs(p)>this.deadzone&&(this.targetRotY+=p*this.sensitivity),Math.abs(_)>this.deadzone){const M=this.targetPolarAngle+_*this.sensitivity;this.targetPolarAngle=Math.max(.15,Math.min(Math.PI-.15,M))}}}else this.tracking=!1,this.hasSmooth=!1}else this.tracking=!1,this.hasSmooth=!1}this.globe.earthGroup.rotation.y+=(this.targetRotY-this.globe.earthGroup.rotation.y)*this.globeLerpFactor;const i=Math.acos(this.globe.camera.position.y/this.cameraDistance),s=i+(this.targetPolarAngle-i)*this.globeLerpFactor;this.globe.camera.position.y=this.cameraDistance*Math.cos(s);const r=this.cameraDistance*Math.sin(s),a=Math.atan2(this.globe.camera.position.z,this.globe.camera.position.x);this.globe.camera.position.x=r*Math.cos(a),this.globe.camera.position.z=r*Math.sin(a),this.globe.camera.lookAt(0,0,0),this.animationFrameId=requestAnimationFrame(()=>this.detectLoop())}dispose(){this.deactivate(),this.handLandmarker&&(this.handLandmarker.close(),this.handLandmarker=null)}}const Qo=new i3;new o3(Qo.earthGroup);const E0=new E3(Qo);new cS(Qo,E0.controls);function y0(){requestAnimationFrame(y0),E0.update(),Qo.render()}y0();
