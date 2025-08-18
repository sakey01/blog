var Wr={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi;function rc(){if(Zi)return q;Zi=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),A=Symbol.iterator;function R(E){return E===null||typeof E!="object"?null:(E=A&&E[A]||E["@@iterator"],typeof E=="function"?E:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,U={};function k(E,P,L){this.props=E,this.context=P,this.refs=U,this.updater=L||V}k.prototype.isReactComponent={},k.prototype.setState=function(E,P){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,P,"setState")},k.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function tt(){}tt.prototype=k.prototype;function X(E,P,L){this.props=E,this.context=P,this.refs=U,this.updater=L||V}var G=X.prototype=new tt;G.constructor=X,O(G,k.prototype),G.isPureReactComponent=!0;var lt=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},pt=Object.prototype.hasOwnProperty;function v(E,P,L,x,K,et){return L=et.ref,{$$typeof:r,type:E,key:P,ref:L!==void 0?L:null,props:et}}function p(E,P){return v(E.type,P,void 0,void 0,void 0,E.props)}function g(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function y(E){var P={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(L){return P[L]})}var T=/\/+/g;function w(E,P){return typeof E=="object"&&E!==null&&E.key!=null?y(""+E.key):P.toString(36)}function m(){}function xt(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(m,m):(E.status="pending",E.then(function(P){E.status==="pending"&&(E.status="fulfilled",E.value=P)},function(P){E.status==="pending"&&(E.status="rejected",E.reason=P)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function kt(E,P,L,x,K){var et=typeof E;(et==="undefined"||et==="boolean")&&(E=null);var $=!1;if(E===null)$=!0;else switch(et){case"bigint":case"string":case"number":$=!0;break;case"object":switch(E.$$typeof){case r:case t:$=!0;break;case _:return $=E._init,kt($(E._payload),P,L,x,K)}}if($)return K=K(E),$=x===""?"."+w(E,0):x,lt(K)?(L="",$!=null&&(L=$.replace(T,"$&/")+"/"),kt(K,P,L,"",function(Rr){return Rr})):K!=null&&(g(K)&&(K=p(K,L+(K.key==null||E&&E.key===K.key?"":(""+K.key).replace(T,"$&/")+"/")+$)),P.push(K)),1;$=0;var Dt=x===""?".":x+":";if(lt(E))for(var at=0;at<E.length;at++)x=E[at],et=Dt+w(x,at),$+=kt(x,P,L,et,K);else if(at=R(E),typeof at=="function")for(E=at.call(E),at=0;!(x=E.next()).done;)x=x.value,et=Dt+w(x,at++),$+=kt(x,P,L,et,K);else if(et==="object"){if(typeof E.then=="function")return kt(xt(E),P,L,x,K);throw P=String(E),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return $}function ve(E,P,L){if(E==null)return E;var x=[],K=0;return kt(E,x,"","",function(et){return P.call(L,et,K++)}),x}function le(E){if(E._status===-1){var P=E._result;P=P(),P.then(function(L){(E._status===0||E._status===-1)&&(E._status=1,E._result=L)},function(L){(E._status===0||E._status===-1)&&(E._status=2,E._result=L)}),E._status===-1&&(E._status=0,E._result=P)}if(E._status===1)return E._result.default;throw E._result}var Kt=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function Ke(){}return q.Children={map:ve,forEach:function(E,P,L){ve(E,function(){P.apply(this,arguments)},L)},count:function(E){var P=0;return ve(E,function(){P++}),P},toArray:function(E){return ve(E,function(P){return P})||[]},only:function(E){if(!g(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},q.Component=k,q.Fragment=e,q.Profiler=i,q.PureComponent=X,q.StrictMode=n,q.Suspense=f,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,q.__COMPILER_RUNTIME={__proto__:null,c:function(E){return z.H.useMemoCache(E)}},q.cache=function(E){return function(){return E.apply(null,arguments)}},q.cloneElement=function(E,P,L){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var x=O({},E.props),K=E.key,et=void 0;if(P!=null)for($ in P.ref!==void 0&&(et=void 0),P.key!==void 0&&(K=""+P.key),P)!pt.call(P,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&P.ref===void 0||(x[$]=P[$]);var $=arguments.length-2;if($===1)x.children=L;else if(1<$){for(var Dt=Array($),at=0;at<$;at++)Dt[at]=arguments[at+2];x.children=Dt}return v(E.type,K,void 0,void 0,et,x)},q.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:o,_context:E},E},q.createElement=function(E,P,L){var x,K={},et=null;if(P!=null)for(x in P.key!==void 0&&(et=""+P.key),P)pt.call(P,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(K[x]=P[x]);var $=arguments.length-2;if($===1)K.children=L;else if(1<$){for(var Dt=Array($),at=0;at<$;at++)Dt[at]=arguments[at+2];K.children=Dt}if(E&&E.defaultProps)for(x in $=E.defaultProps,$)K[x]===void 0&&(K[x]=$[x]);return v(E,et,void 0,void 0,null,K)},q.createRef=function(){return{current:null}},q.forwardRef=function(E){return{$$typeof:l,render:E}},q.isValidElement=g,q.lazy=function(E){return{$$typeof:_,_payload:{_status:-1,_result:E},_init:le}},q.memo=function(E,P){return{$$typeof:d,type:E,compare:P===void 0?null:P}},q.startTransition=function(E){var P=z.T,L={};z.T=L;try{var x=E(),K=z.S;K!==null&&K(L,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(Ke,Kt)}catch(et){Kt(et)}finally{z.T=P}},q.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},q.use=function(E){return z.H.use(E)},q.useActionState=function(E,P,L){return z.H.useActionState(E,P,L)},q.useCallback=function(E,P){return z.H.useCallback(E,P)},q.useContext=function(E){return z.H.useContext(E)},q.useDebugValue=function(){},q.useDeferredValue=function(E,P){return z.H.useDeferredValue(E,P)},q.useEffect=function(E,P,L){var x=z.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return x.useEffect(E,P)},q.useId=function(){return z.H.useId()},q.useImperativeHandle=function(E,P,L){return z.H.useImperativeHandle(E,P,L)},q.useInsertionEffect=function(E,P){return z.H.useInsertionEffect(E,P)},q.useLayoutEffect=function(E,P){return z.H.useLayoutEffect(E,P)},q.useMemo=function(E,P){return z.H.useMemo(E,P)},q.useOptimistic=function(E,P){return z.H.useOptimistic(E,P)},q.useReducer=function(E,P,L){return z.H.useReducer(E,P,L)},q.useRef=function(E){return z.H.useRef(E)},q.useState=function(E){return z.H.useState(E)},q.useSyncExternalStore=function(E,P,L){return z.H.useSyncExternalStore(E,P,L)},q.useTransition=function(){return z.H.useTransition()},q.version="19.1.1",q}var to;function Kd(){return to||(to=1,Wr.exports=rc()),Wr.exports}const sc=()=>{};var eo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},ic=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const i=r[e++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=r[e++];t[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=r[e++],u=r[e++],l=r[e++],f=((i&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(f>>10)),t[n++]=String.fromCharCode(56320+(f&1023))}else{const o=r[e++],u=r[e++];t[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const o=r[i],u=i+1<r.length,l=u?r[i+1]:0,f=i+2<r.length,d=f?r[i+2]:0,_=o>>2,A=(o&3)<<4|l>>4;let R=(l&15)<<2|d>>6,V=d&63;f||(V=64,u||(R=64)),n.push(e[_],e[A],e[R],e[V])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(la(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):ic(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const o=e[r.charAt(i++)],l=i<r.length?e[r.charAt(i)]:0;++i;const d=i<r.length?e[r.charAt(i)]:64;++i;const A=i<r.length?e[r.charAt(i)]:64;if(++i,o==null||l==null||d==null||A==null)throw new oc;const R=o<<2|l>>4;if(n.push(R),d!==64){const V=l<<4&240|d>>2;if(n.push(V),A!==64){const O=d<<6&192|A;n.push(O)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class oc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ac=function(r){const t=la(r);return ha.encodeByteArray(t,!0)},nr=function(r){return ac(r).replace(/\./g,"")},uc=function(r){try{return ha.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=()=>cc().__FIREBASE_DEFAULTS__,hc=()=>{if(typeof process>"u"||typeof eo>"u")return;const r=eo.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},fc=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&uc(r[1]);return t&&JSON.parse(t)},bs=()=>{try{return sc()||lc()||hc()||fc()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},dc=r=>bs()?.emulatorHosts?.[r],pc=r=>{const t=dc(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},fa=()=>bs()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gc(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",i=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[nr(JSON.stringify(e)),nr(JSON.stringify(u)),""].join(".")}const hn={};function yc(){const r={prod:[],emulator:[]};for(const t of Object.keys(hn))hn[t]?r.emulator.push(t):r.prod.push(t);return r}function Ec(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let no=!1;function Tc(r,t){if(typeof window>"u"||typeof document>"u"||!Ds(window.location.host)||hn[r]===t||hn[r]||no)return;hn[r]=t;function e(R){return`__firebase__banner__${R}`}const n="__firebase__banner",o=yc().prod.length>0;function u(){const R=document.getElementById(n);R&&R.remove()}function l(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,V){R.setAttribute("width","24"),R.setAttribute("id",V),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function d(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{no=!0,u()},R}function _(R,V){R.setAttribute("id",V),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=Ec(n),V=e("text"),O=document.getElementById(V)||document.createElement("span"),U=e("learnmore"),k=document.getElementById(U)||document.createElement("a"),tt=e("preprendIcon"),X=document.getElementById(tt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const G=R.element;l(G),_(k,U);const lt=d();f(X,tt),G.append(X,O,k,lt),document.body.appendChild(G)}o?(O.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",V)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ic(){const r=bs()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wc(){return!Ic()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ac(){try{return typeof indexedDB=="object"}catch{return!1}}function Rc(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="FirebaseError";class $e extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Cc,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?Sc(o,n):"Error",l=`${this.serviceName}: ${u} (${i}).`;return new $e(i,l,n)}}function Sc(r,t){return r.replace(Pc,(e,n)=>{const i=t[n];return i!=null?String(i):`<${n}?>`})}const Pc=/\{\$([^}]+)}/g;function rr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const i of e){if(!n.includes(i))return!1;const o=r[i],u=t[i];if(ro(o)&&ro(u)){if(!rr(o,u))return!1}else if(o!==u)return!1}for(const i of n)if(!e.includes(i))return!1;return!0}function ro(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(r){return r&&r._delegate?r._delegate:r}class gn{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new mc;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nc(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&u.resolve(i)}return i}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(n)??new Set;i.add(t),this.onInitCallbacks.set(n,i);const o=this.instances.get(n);return o&&t(o,n),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Dc(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dc(r){return r===me?void 0:r}function Nc(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new bc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(W||(W={}));const Oc={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},xc=W.INFO,Mc={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Lc=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),i=Mc[t];if(i)console[i](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pa{constructor(t){this.name=t,this._logLevel=xc,this._logHandler=Lc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Oc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const Fc=(r,t)=>t.some(e=>r instanceof e);let so,io;function Uc(){return so||(so=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bc(){return io||(io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ma=new WeakMap,os=new WeakMap,ga=new WeakMap,Yr=new WeakMap,Ns=new WeakMap;function jc(r){const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("success",o),r.removeEventListener("error",u)},o=()=>{e(Zt(r.result)),i()},u=()=>{n(r.error),i()};r.addEventListener("success",o),r.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&ma.set(e,r)}).catch(()=>{}),Ns.set(t,r),t}function qc(r){if(os.has(r))return;const t=new Promise((e,n)=>{const i=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",u),r.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",o),r.addEventListener("error",u),r.addEventListener("abort",u)});os.set(r,t)}let as={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return os.get(r);if(t==="objectStoreNames")return r.objectStoreNames||ga.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Zt(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function $c(r){as=r(as)}function zc(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Xr(this),t,...e);return ga.set(n,t.sort?t.sort():[t]),Zt(n)}:Bc().includes(r)?function(...t){return r.apply(Xr(this),t),Zt(ma.get(this))}:function(...t){return Zt(r.apply(Xr(this),t))}}function Hc(r){return typeof r=="function"?zc(r):(r instanceof IDBTransaction&&qc(r),Fc(r,Uc())?new Proxy(r,as):r)}function Zt(r){if(r instanceof IDBRequest)return jc(r);if(Yr.has(r))return Yr.get(r);const t=Hc(r);return t!==r&&(Yr.set(r,t),Ns.set(t,r)),t}const Xr=r=>Ns.get(r);function Gc(r,t,{blocked:e,upgrade:n,blocking:i,terminated:o}={}){const u=indexedDB.open(r,t),l=Zt(u);return n&&u.addEventListener("upgradeneeded",f=>{n(Zt(u.result),f.oldVersion,f.newVersion,Zt(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),l.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Kc=["get","getKey","getAll","getAllKeys","count"],Qc=["put","add","delete","clear"],Jr=new Map;function oo(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Jr.get(t))return Jr.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,i=Qc.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Kc.includes(e)))return;const o=async function(u,...l){const f=this.transaction(u,i?"readwrite":"readonly");let d=f.store;return n&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&f.done]))[0]};return Jr.set(t,o),o}$c(r=>({...r,get:(t,e,n)=>oo(t,e)||r.get(t,e,n),has:(t,e)=>!!oo(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Yc(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Yc(r){return r.getComponent()?.type==="VERSION"}const us="@firebase/app",ao="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new pa("@firebase/app"),Xc="@firebase/app-compat",Jc="@firebase/analytics-compat",Zc="@firebase/analytics",tl="@firebase/app-check-compat",el="@firebase/app-check",nl="@firebase/auth",rl="@firebase/auth-compat",sl="@firebase/database",il="@firebase/data-connect",ol="@firebase/database-compat",al="@firebase/functions",ul="@firebase/functions-compat",cl="@firebase/installations",ll="@firebase/installations-compat",hl="@firebase/messaging",fl="@firebase/messaging-compat",dl="@firebase/performance",pl="@firebase/performance-compat",ml="@firebase/remote-config",gl="@firebase/remote-config-compat",_l="@firebase/storage",yl="@firebase/storage-compat",El="@firebase/firestore",Tl="@firebase/ai",vl="@firebase/firestore-compat",Il="firebase",wl="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="[DEFAULT]",Al={[us]:"fire-core",[Xc]:"fire-core-compat",[Zc]:"fire-analytics",[Jc]:"fire-analytics-compat",[el]:"fire-app-check",[tl]:"fire-app-check-compat",[nl]:"fire-auth",[rl]:"fire-auth-compat",[sl]:"fire-rtdb",[il]:"fire-data-connect",[ol]:"fire-rtdb-compat",[al]:"fire-fn",[ul]:"fire-fn-compat",[cl]:"fire-iid",[ll]:"fire-iid-compat",[hl]:"fire-fcm",[fl]:"fire-fcm-compat",[dl]:"fire-perf",[pl]:"fire-perf-compat",[ml]:"fire-rc",[gl]:"fire-rc-compat",[_l]:"fire-gcs",[yl]:"fire-gcs-compat",[El]:"fire-fst",[vl]:"fire-fst-compat",[Tl]:"fire-vertex","fire-js":"fire-js",[Il]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Map,Rl=new Map,ls=new Map;function uo(r,t){try{r.container.addComponent(t)}catch(e){Ht.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function ir(r){const t=r.name;if(ls.has(t))return Ht.debug(`There were multiple attempts to register component ${t}.`),!1;ls.set(t,r);for(const e of sr.values())uo(e,r);for(const e of Rl.values())uo(e,r);return!0}function Cl(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Sl(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new da("app","Firebase",Pl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=wl;function Dl(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n={name:cs,automaticDataCollectionEnabled:!0,...t},i=n.name;if(typeof i!="string"||!i)throw te.create("bad-app-name",{appName:String(i)});if(e||(e=fa()),!e)throw te.create("no-options");const o=sr.get(i);if(o){if(rr(e,o.options)&&rr(n,o.config))return o;throw te.create("duplicate-app",{appName:i})}const u=new kc(i);for(const f of ls.values())u.addComponent(f);const l=new Vl(e,n,u);return sr.set(i,l),l}function Nl(r=cs){const t=sr.get(r);if(!t&&r===cs&&fa())return Dl();if(!t)throw te.create("no-app",{appName:r});return t}function be(r,t,e){let n=Al[r]??r;e&&(n+=`-${e}`);const i=n.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const u=[`Unable to register library "${n}" with version "${t}":`];i&&u.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ht.warn(u.join(" "));return}ir(new gn(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="firebase-heartbeat-database",Ol=1,_n="firebase-heartbeat-store";let Zr=null;function _a(){return Zr||(Zr=Gc(kl,Ol,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(_n)}catch(e){console.warn(e)}}}}).catch(r=>{throw te.create("idb-open",{originalErrorMessage:r.message})})),Zr}async function xl(r){try{const e=(await _a()).transaction(_n),n=await e.objectStore(_n).get(ya(r));return await e.done,n}catch(t){if(t instanceof $e)Ht.warn(t.message);else{const e=te.create("idb-get",{originalErrorMessage:t?.message});Ht.warn(e.message)}}}async function co(r,t){try{const n=(await _a()).transaction(_n,"readwrite");await n.objectStore(_n).put(t,ya(r)),await n.done}catch(e){if(e instanceof $e)Ht.warn(e.message);else{const n=te.create("idb-set",{originalErrorMessage:e?.message});Ht.warn(n.message)}}}function ya(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=1024,Ll=30;class Fl{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bl(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=lo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>Ll){const i=jl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Ht.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lo(),{heartbeatsToSend:e,unsentEntries:n}=Ul(this._heartbeatsCache.heartbeats),i=nr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ht.warn(t),""}}}function lo(){return new Date().toISOString().substring(0,10)}function Ul(r,t=Ml){const e=[];let n=r.slice();for(const i of r){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),ho(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ho(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Bl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ac()?Rc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xl(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return co(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const n=await this.read();return co(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}}function ho(r){return nr(JSON.stringify({version:2,heartbeats:r})).length}function jl(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(r){ir(new gn("platform-logger",t=>new Wc(t),"PRIVATE")),ir(new gn("heartbeat",t=>new Fl(t),"PRIVATE")),be(us,ao,r),be(us,ao,"esm2020"),be("fire-js","")}ql("");var fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ee,Ea;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,T,w){for(var m=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)m[xt-2]=arguments[xt];return p.prototype[T].apply(y,m)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)y[T]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(T=0;16>T;++T)y[T]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],T=v.g[2];var w=v.g[3],m=p+(w^g&(T^w))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=w+(T^p&(g^T))+y[1]+3905402710&4294967295,w=p+(m<<12&4294967295|m>>>20),m=T+(g^w&(p^g))+y[2]+606105819&4294967295,T=w+(m<<17&4294967295|m>>>15),m=g+(p^T&(w^p))+y[3]+3250441966&4294967295,g=T+(m<<22&4294967295|m>>>10),m=p+(w^g&(T^w))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=w+(T^p&(g^T))+y[5]+1200080426&4294967295,w=p+(m<<12&4294967295|m>>>20),m=T+(g^w&(p^g))+y[6]+2821735955&4294967295,T=w+(m<<17&4294967295|m>>>15),m=g+(p^T&(w^p))+y[7]+4249261313&4294967295,g=T+(m<<22&4294967295|m>>>10),m=p+(w^g&(T^w))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=w+(T^p&(g^T))+y[9]+2336552879&4294967295,w=p+(m<<12&4294967295|m>>>20),m=T+(g^w&(p^g))+y[10]+4294925233&4294967295,T=w+(m<<17&4294967295|m>>>15),m=g+(p^T&(w^p))+y[11]+2304563134&4294967295,g=T+(m<<22&4294967295|m>>>10),m=p+(w^g&(T^w))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=w+(T^p&(g^T))+y[13]+4254626195&4294967295,w=p+(m<<12&4294967295|m>>>20),m=T+(g^w&(p^g))+y[14]+2792965006&4294967295,T=w+(m<<17&4294967295|m>>>15),m=g+(p^T&(w^p))+y[15]+1236535329&4294967295,g=T+(m<<22&4294967295|m>>>10),m=p+(T^w&(g^T))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=w+(g^T&(p^g))+y[6]+3225465664&4294967295,w=p+(m<<9&4294967295|m>>>23),m=T+(p^g&(w^p))+y[11]+643717713&4294967295,T=w+(m<<14&4294967295|m>>>18),m=g+(w^p&(T^w))+y[0]+3921069994&4294967295,g=T+(m<<20&4294967295|m>>>12),m=p+(T^w&(g^T))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=w+(g^T&(p^g))+y[10]+38016083&4294967295,w=p+(m<<9&4294967295|m>>>23),m=T+(p^g&(w^p))+y[15]+3634488961&4294967295,T=w+(m<<14&4294967295|m>>>18),m=g+(w^p&(T^w))+y[4]+3889429448&4294967295,g=T+(m<<20&4294967295|m>>>12),m=p+(T^w&(g^T))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=w+(g^T&(p^g))+y[14]+3275163606&4294967295,w=p+(m<<9&4294967295|m>>>23),m=T+(p^g&(w^p))+y[3]+4107603335&4294967295,T=w+(m<<14&4294967295|m>>>18),m=g+(w^p&(T^w))+y[8]+1163531501&4294967295,g=T+(m<<20&4294967295|m>>>12),m=p+(T^w&(g^T))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=w+(g^T&(p^g))+y[2]+4243563512&4294967295,w=p+(m<<9&4294967295|m>>>23),m=T+(p^g&(w^p))+y[7]+1735328473&4294967295,T=w+(m<<14&4294967295|m>>>18),m=g+(w^p&(T^w))+y[12]+2368359562&4294967295,g=T+(m<<20&4294967295|m>>>12),m=p+(g^T^w)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=w+(p^g^T)+y[8]+2272392833&4294967295,w=p+(m<<11&4294967295|m>>>21),m=T+(w^p^g)+y[11]+1839030562&4294967295,T=w+(m<<16&4294967295|m>>>16),m=g+(T^w^p)+y[14]+4259657740&4294967295,g=T+(m<<23&4294967295|m>>>9),m=p+(g^T^w)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=w+(p^g^T)+y[4]+1272893353&4294967295,w=p+(m<<11&4294967295|m>>>21),m=T+(w^p^g)+y[7]+4139469664&4294967295,T=w+(m<<16&4294967295|m>>>16),m=g+(T^w^p)+y[10]+3200236656&4294967295,g=T+(m<<23&4294967295|m>>>9),m=p+(g^T^w)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=w+(p^g^T)+y[0]+3936430074&4294967295,w=p+(m<<11&4294967295|m>>>21),m=T+(w^p^g)+y[3]+3572445317&4294967295,T=w+(m<<16&4294967295|m>>>16),m=g+(T^w^p)+y[6]+76029189&4294967295,g=T+(m<<23&4294967295|m>>>9),m=p+(g^T^w)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=w+(p^g^T)+y[12]+3873151461&4294967295,w=p+(m<<11&4294967295|m>>>21),m=T+(w^p^g)+y[15]+530742520&4294967295,T=w+(m<<16&4294967295|m>>>16),m=g+(T^w^p)+y[2]+3299628645&4294967295,g=T+(m<<23&4294967295|m>>>9),m=p+(T^(g|~w))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=w+(g^(p|~T))+y[7]+1126891415&4294967295,w=p+(m<<10&4294967295|m>>>22),m=T+(p^(w|~g))+y[14]+2878612391&4294967295,T=w+(m<<15&4294967295|m>>>17),m=g+(w^(T|~p))+y[5]+4237533241&4294967295,g=T+(m<<21&4294967295|m>>>11),m=p+(T^(g|~w))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=w+(g^(p|~T))+y[3]+2399980690&4294967295,w=p+(m<<10&4294967295|m>>>22),m=T+(p^(w|~g))+y[10]+4293915773&4294967295,T=w+(m<<15&4294967295|m>>>17),m=g+(w^(T|~p))+y[1]+2240044497&4294967295,g=T+(m<<21&4294967295|m>>>11),m=p+(T^(g|~w))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=w+(g^(p|~T))+y[15]+4264355552&4294967295,w=p+(m<<10&4294967295|m>>>22),m=T+(p^(w|~g))+y[6]+2734768916&4294967295,T=w+(m<<15&4294967295|m>>>17),m=g+(w^(T|~p))+y[13]+1309151649&4294967295,g=T+(m<<21&4294967295|m>>>11),m=p+(T^(g|~w))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=w+(g^(p|~T))+y[11]+3174756917&4294967295,w=p+(m<<10&4294967295|m>>>22),m=T+(p^(w|~g))+y[2]+718787259&4294967295,T=w+(m<<15&4294967295|m>>>17),m=g+(w^(T|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(T+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+w&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,y=this.B,T=this.h,w=0;w<p;){if(T==0)for(;w<=g;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<p;)if(y[T++]=v.charCodeAt(w++),T==this.blockSize){i(this,y),T=0;break}}else for(;w<p;)if(y[T++]=v[w++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)v[g++]=this.g[p]>>>y&255;return v};function o(v,p){var g=l;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function u(v,p){this.h=p;for(var g=[],y=!0,T=v.length-1;0<=T;T--){var w=v[T]|0;y&&w==p||(g[T]=w,y=!1)}this.g=g}var l={};function f(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return k(d(-v));for(var p=[],g=1,y=0;v>=g;y++)p[y]=v/g|0,g*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return k(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(p,8)),y=A,T=0;T<v.length;T+=8){var w=Math.min(8,v.length-T),m=parseInt(v.substring(T,T+w),p);8>w?(w=d(Math.pow(p,w)),y=y.j(w).add(d(m))):(y=y.j(g),y=y.add(d(m)))}return y}var A=f(0),R=f(1),V=f(16777216);r=u.prototype,r.m=function(){if(U(this))return-k(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(O(this))return"0";if(U(this))return"-"+k(this).toString(v);for(var p=d(Math.pow(v,6)),g=this,y="";;){var T=lt(g,p).g;g=tt(g,T.j(p));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=T,O(g))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function O(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function U(v){return v.h==-1}r.l=function(v){return v=tt(this,v),U(v)?-1:O(v)?0:1};function k(v){for(var p=v.g.length,g=[],y=0;y<p;y++)g[y]=~v.g[y];return new u(g,~v.h).add(R)}r.abs=function(){return U(this)?k(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0,T=0;T<=p;T++){var w=y+(this.i(T)&65535)+(v.i(T)&65535),m=(w>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=m>>>16,w&=65535,m&=65535,g[T]=m<<16|w}return new u(g,g[g.length-1]&-2147483648?-1:0)};function tt(v,p){return v.add(k(p))}r.j=function(v){if(O(this)||O(v))return A;if(U(this))return U(v)?k(this).j(k(v)):k(k(this).j(v));if(U(v))return k(this.j(k(v)));if(0>this.l(V)&&0>v.l(V))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var w=this.i(y)>>>16,m=this.i(y)&65535,xt=v.i(T)>>>16,kt=v.i(T)&65535;g[2*y+2*T]+=m*kt,X(g,2*y+2*T),g[2*y+2*T+1]+=w*kt,X(g,2*y+2*T+1),g[2*y+2*T+1]+=m*xt,X(g,2*y+2*T+1),g[2*y+2*T+2]+=w*xt,X(g,2*y+2*T+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new u(g,0)};function X(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function G(v,p){this.g=v,this.h=p}function lt(v,p){if(O(p))throw Error("division by zero");if(O(v))return new G(A,A);if(U(v))return p=lt(k(v),p),new G(k(p.g),k(p.h));if(U(p))return p=lt(v,k(p)),new G(k(p.g),p.h);if(30<v.g.length){if(U(v)||U(p))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=p;0>=y.l(v);)g=z(g),y=z(y);var T=pt(g,1),w=pt(y,1);for(y=pt(y,2),g=pt(g,2);!O(y);){var m=w.add(y);0>=m.l(v)&&(T=T.add(g),w=m),y=pt(y,1),g=pt(g,1)}return p=tt(v,T.j(p)),new G(T,p)}for(T=A;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(g),m=w.j(p);U(m)||0<m.l(v);)g-=y,w=d(g),m=w.j(p);O(w)&&(w=R),T=T.add(w),v=tt(v,m)}return new G(T,v)}r.A=function(v){return lt(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function z(v){for(var p=v.g.length+1,g=[],y=0;y<p;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function pt(v,p){var g=p>>5;p%=32;for(var y=v.g.length-g,T=[],w=0;w<y;w++)T[w]=0<p?v.i(w+g)>>>p|v.i(w+g+1)<<32-p:v.i(w+g);return new u(T,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ea=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=_,ee=u}).apply(typeof fo<"u"?fo:typeof self<"u"?self:typeof window<"u"?window:{});var Hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ta,un,va,Xn,hs,Ia,wa,Aa;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hn=="object"&&Hn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var c=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var I=s[h];if(!(I in c))break t;c=c[I]}s=s[s.length-1],h=c[s],a=a(h),a!=h&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,h=!1,I={next:function(){if(!h&&c<s.length){var C=c++;return{value:a(C,s[C]),done:!1}}return h=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function f(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,h),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function R(s,a,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function V(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function O(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(h,I,C){for(var b=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)b[nt-2]=arguments[nt];return a.prototype[I].apply(h,b)}}function U(s){const a=s.length;if(0<a){const c=Array(a);for(let h=0;h<a;h++)c[h]=s[h];return c}return[]}function k(s,a){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(f(h)){const I=s.length||0,C=h.length||0;s.length=I+C;for(let b=0;b<C;b++)s[I+b]=h[b]}else s.push(h)}}class tt{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function X(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function lt(s){return lt[" "](s),s}lt[" "]=function(){};var z=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function pt(s,a,c){for(const h in s)a.call(c,s[h],h,s)}function v(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,h;for(let I=1;I<arguments.length;I++){h=arguments[I];for(c in h)s[c]=h[c];for(let C=0;C<g.length;C++)c=g[C],Object.prototype.hasOwnProperty.call(h,c)&&(s[c]=h[c])}}function T(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function w(s){l.setTimeout(()=>{throw s},0)}function m(){var s=Ke;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,c){const h=kt.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var kt=new tt(()=>new ve,s=>s.reset());class ve{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let le,Kt=!1,Ke=new xt,E=()=>{const s=l.Promise.resolve(void 0);le=()=>{s.then(P)}};var P=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(c){w(c)}var a=kt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Kt=!1};function L(){this.s=this.s,this.C=this.C}L.prototype.s=!1,L.prototype.ma=function(){this.s||(this.s=!0,this.N())},L.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s}();function et(s,a){if(x.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(z){t:{try{lt(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:$[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&et.aa.h.call(this)}}O(et,x);var $={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),at=0;function Rr(s,a,c,h,I){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=I,this.key=++at,this.da=this.fa=!1}function Sn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Pn(s){this.src=s,this.g={},this.h=0}Pn.prototype.add=function(s,a,c,h,I){var C=s.toString();s=this.g[C],s||(s=this.g[C]=[],this.h++);var b=Sr(s,a,h,I);return-1<b?(a=s[b],c||(a.fa=!1)):(a=new Rr(a,this.src,C,!!h,I),a.fa=c,s.push(a)),a};function Cr(s,a){var c=a.type;if(c in s.g){var h=s.g[c],I=Array.prototype.indexOf.call(h,a,void 0),C;(C=0<=I)&&Array.prototype.splice.call(h,I,1),C&&(Sn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Sr(s,a,c,h){for(var I=0;I<s.length;++I){var C=s[I];if(!C.da&&C.listener==a&&C.capture==!!c&&C.ha==h)return I}return-1}var Pr="closure_lm_"+(1e6*Math.random()|0),Vr={};function ti(s,a,c,h,I){if(Array.isArray(a)){for(var C=0;C<a.length;C++)ti(s,a[C],c,h,I);return null}return c=ri(c),s&&s[Dt]?s.K(a,c,d(h)?!!h.capture:!1,I):Pu(s,a,c,!1,h,I)}function Pu(s,a,c,h,I,C){if(!a)throw Error("Invalid event type");var b=d(I)?!!I.capture:!!I,nt=Dr(s);if(nt||(s[Pr]=nt=new Pn(s)),c=nt.add(a,c,h,b,C),c.proxy)return c;if(h=Vu(),c.proxy=h,h.src=s,h.listener=c,s.addEventListener)K||(I=b),I===void 0&&(I=!1),s.addEventListener(a.toString(),h,I);else if(s.attachEvent)s.attachEvent(ni(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Vu(){function s(c){return a.call(s.src,s.listener,c)}const a=bu;return s}function ei(s,a,c,h,I){if(Array.isArray(a))for(var C=0;C<a.length;C++)ei(s,a[C],c,h,I);else h=d(h)?!!h.capture:!!h,c=ri(c),s&&s[Dt]?(s=s.i,a=String(a).toString(),a in s.g&&(C=s.g[a],c=Sr(C,c,h,I),-1<c&&(Sn(C[c]),Array.prototype.splice.call(C,c,1),C.length==0&&(delete s.g[a],s.h--)))):s&&(s=Dr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Sr(a,c,h,I)),(c=-1<s?a[s]:null)&&br(c))}function br(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Dt])Cr(a.i,s);else{var c=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(c,h,s.capture):a.detachEvent?a.detachEvent(ni(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=Dr(a))?(Cr(c,s),c.h==0&&(c.src=null,a[Pr]=null)):Sn(s)}}}function ni(s){return s in Vr?Vr[s]:Vr[s]="on"+s}function bu(s,a){if(s.da)s=!0;else{a=new et(a,this);var c=s.listener,h=s.ha||s.src;s.fa&&br(s),s=c.call(h,a)}return s}function Dr(s){return s=s[Pr],s instanceof Pn?s:null}var Nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ri(s){return typeof s=="function"?s:(s[Nr]||(s[Nr]=function(a){return s.handleEvent(a)}),s[Nr])}function vt(){L.call(this),this.i=new Pn(this),this.M=this,this.F=null}O(vt,L),vt.prototype[Dt]=!0,vt.prototype.removeEventListener=function(s,a,c,h){ei(this,s,a,c,h)};function St(s,a){var c,h=s.F;if(h)for(c=[];h;h=h.F)c.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new x(a,s);else if(a instanceof x)a.target=a.target||s;else{var I=a;a=new x(h,s),y(a,I)}if(I=!0,c)for(var C=c.length-1;0<=C;C--){var b=a.g=c[C];I=Vn(b,h,!0,a)&&I}if(b=a.g=s,I=Vn(b,h,!0,a)&&I,I=Vn(b,h,!1,a)&&I,c)for(C=0;C<c.length;C++)b=a.g=c[C],I=Vn(b,h,!1,a)&&I}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],h=0;h<c.length;h++)Sn(c[h]);delete s.g[a],s.h--}}this.F=null},vt.prototype.K=function(s,a,c,h){return this.i.add(String(s),a,!1,c,h)},vt.prototype.L=function(s,a,c,h){return this.i.add(String(s),a,!0,c,h)};function Vn(s,a,c,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,C=0;C<a.length;++C){var b=a[C];if(b&&!b.da&&b.capture==c){var nt=b.listener,yt=b.ha||b.src;b.fa&&Cr(s.i,b),I=nt.call(yt,h)!==!1&&I}}return I&&!h.defaultPrevented}function si(s,a,c){if(typeof s=="function")c&&(s=R(s,c));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function ii(s){s.g=si(()=>{s.g=null,s.i&&(s.i=!1,ii(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Du extends L{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ii(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(s){L.call(this),this.h=s,this.g={}}O(Qe,L);var oi=[];function ai(s){pt(s.g,function(a,c){this.g.hasOwnProperty(c)&&br(a)},s),s.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),ai(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kr=l.JSON.stringify,Nu=l.JSON.parse,ku=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Or(){}Or.prototype.h=null;function ui(s){return s.h||(s.h=s.i())}function ci(){}var We={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xr(){x.call(this,"d")}O(xr,x);function Mr(){x.call(this,"c")}O(Mr,x);var he={},li=null;function bn(){return li=li||new vt}he.La="serverreachability";function hi(s){x.call(this,he.La,s)}O(hi,x);function Ye(s){const a=bn();St(a,new hi(a))}he.STAT_EVENT="statevent";function fi(s,a){x.call(this,he.STAT_EVENT,s),this.stat=a}O(fi,x);function Pt(s){const a=bn();St(a,new fi(a,s))}he.Ma="timingevent";function di(s,a){x.call(this,he.Ma,s),this.size=a}O(di,x);function Xe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Je(){this.g=!0}Je.prototype.xa=function(){this.g=!1};function Ou(s,a,c,h,I,C){s.info(function(){if(s.g)if(C)for(var b="",nt=C.split("&"),yt=0;yt<nt.length;yt++){var Z=nt[yt].split("=");if(1<Z.length){var It=Z[0];Z=Z[1];var wt=It.split("_");b=2<=wt.length&&wt[1]=="type"?b+(It+"="+Z+"&"):b+(It+"=redacted&")}}else b=null;else b=C;return"XMLHTTP REQ ("+h+") [attempt "+I+"]: "+a+`
`+c+`
`+b})}function xu(s,a,c,h,I,C,b){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+I+"]: "+a+`
`+c+`
`+C+" "+b})}function Ie(s,a,c,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Lu(s,c)+(h?" "+h:"")})}function Mu(s,a){s.info(function(){return"TIMEOUT: "+a})}Je.prototype.info=function(){};function Lu(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var h=c[s];if(!(2>h.length)){var I=h[1];if(Array.isArray(I)&&!(1>I.length)){var C=I[0];if(C!="noop"&&C!="stop"&&C!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return kr(c)}catch{return a}}var Dn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lr;function Nn(){}O(Nn,Or),Nn.prototype.g=function(){return new XMLHttpRequest},Nn.prototype.i=function(){return{}},Lr=new Nn;function Qt(s,a,c,h){this.j=s,this.i=a,this.l=c,this.R=h||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mi}function mi(){this.i=null,this.g="",this.h=!1}var gi={},Fr={};function Ur(s,a,c){s.L=1,s.v=Mn($t(a)),s.m=c,s.P=!0,_i(s,null)}function _i(s,a){s.F=Date.now(),kn(s),s.A=$t(s.v);var c=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),Di(c.i,"t",h),s.C=0,c=s.j.J,s.h=new mi,s.g=Wi(s.j,c?a:null,!s.m),0<s.O&&(s.M=new Du(R(s.Y,s,s.g),s.O)),a=s.U,c=s.g,h=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(oi[0]=I.toString()),I=oi);for(var C=0;C<I.length;C++){var b=ti(c,I[C],h||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ye(),Ou(s.i,s.u,s.A,s.l,s.R,s.m)}Qt.prototype.ca=function(s){s=s.target;const a=this.M;a&&zt(s)==3?a.j():this.Y(s)},Qt.prototype.Y=function(s){try{if(s==this.g)t:{const wt=zt(this.g);var a=this.g.Ba();const Re=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Fi(this.g)))){this.J||wt!=4||a==7||(a==8||0>=Re?Ye(3):Ye(2)),Br(this);var c=this.g.Z();this.X=c;e:if(yi(this)){var h=Fi(this.g);s="";var I=h.length,C=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fe(this),Ze(this);var b="";break e}this.h.i=new l.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(C&&a==I-1)});h.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,xu(this.i,this.u,this.A,this.l,this.R,wt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var nt,yt=this.g;if((nt=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(nt)){var Z=nt;break e}}Z=null}if(c=Z)Ie(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jr(this,c);else{this.o=!1,this.s=3,Pt(12),fe(this),Ze(this);break t}}if(this.P){c=!0;let Mt;for(;!this.J&&this.C<b.length;)if(Mt=Fu(this,b),Mt==Fr){wt==4&&(this.s=4,Pt(14),c=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==gi){this.s=4,Pt(15),Ie(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else Ie(this.i,this.l,Mt,null),jr(this,Mt);if(yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||b.length!=0||this.h.h||(this.s=1,Pt(16),c=!1),this.o=this.o&&c,!c)Ie(this.i,this.l,b,"[Invalid Chunked Response]"),fe(this),Ze(this);else if(0<b.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Kr(It),It.M=!0,Pt(11))}}else Ie(this.i,this.l,b,null),jr(this,b);wt==4&&fe(this),this.o&&!this.J&&(wt==4?Hi(this.j,this):(this.o=!1,kn(this)))}else ec(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),fe(this),Ze(this)}}}catch{}finally{}};function yi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Fu(s,a){var c=s.C,h=a.indexOf(`
`,c);return h==-1?Fr:(c=Number(a.substring(c,h)),isNaN(c)?gi:(h+=1,h+c>a.length?Fr:(a=a.slice(h,h+c),s.C=h+c,a)))}Qt.prototype.cancel=function(){this.J=!0,fe(this)};function kn(s){s.S=Date.now()+s.I,Ei(s,s.I)}function Ei(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Xe(R(s.ba,s),a)}function Br(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Mu(this.i,this.A),this.L!=2&&(Ye(),Pt(17)),fe(this),this.s=2,Ze(this)):Ei(this,this.S-s)};function Ze(s){s.j.G==0||s.J||Hi(s.j,s)}function fe(s){Br(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ai(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function jr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||qr(c.h,s))){if(!s.K&&qr(c.h,s)&&c.G==3){try{var h=c.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var I=h;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)qn(c),Bn(c);else break t;Gr(c),Pt(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=Xe(R(c.Za,c),6e3));if(1>=Ii(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else pe(c,11)}else if((s.K||c.g==s)&&qn(c),!X(a))for(I=c.Da.g.parse(a),a=0;a<I.length;a++){let Z=I[a];if(c.T=Z[0],Z=Z[1],c.G==2)if(Z[0]=="c"){c.K=Z[1],c.ia=Z[2];const It=Z[3];It!=null&&(c.la=It,c.j.info("VER="+c.la));const wt=Z[4];wt!=null&&(c.Aa=wt,c.j.info("SVER="+c.Aa));const Re=Z[5];Re!=null&&typeof Re=="number"&&0<Re&&(h=1.5*Re,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const Mt=s.g;if(Mt){const zn=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zn){var C=h.h;C.g||zn.indexOf("spdy")==-1&&zn.indexOf("quic")==-1&&zn.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&($r(C,C.h),C.h=null))}if(h.D){const Qr=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qr&&(h.ya=Qr,rt(h.I,h.D,Qr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var b=s;if(h.qa=Qi(h,h.J?h.ia:null,h.W),b.K){wi(h.h,b);var nt=b,yt=h.L;yt&&(nt.I=yt),nt.B&&(Br(nt),kn(nt)),h.g=b}else $i(h);0<c.i.length&&jn(c)}else Z[0]!="stop"&&Z[0]!="close"||pe(c,7);else c.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?pe(c,7):Hr(c):Z[0]!="noop"&&c.l&&c.l.ta(Z),c.v=0)}}Ye(4)}catch{}}var Uu=class{constructor(s,a){this.g=s,this.map=a}};function Ti(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ii(s){return s.h?1:s.g?s.g.size:0}function qr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function $r(s,a){s.g?s.g.add(a):s.h=a}function wi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Ti.prototype.cancel=function(){if(this.i=Ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ai(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return U(s.i)}function Bu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var a=[],c=s.length,h=0;h<c;h++)a.push(s[h]);return a}a=[],c=0;for(h in s)a[c++]=s[h];return a}function ju(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const h in s)a[c++]=h;return a}}}function Ri(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=ju(s),h=Bu(s),I=h.length,C=0;C<I;C++)a.call(void 0,h[C],c&&c[C],s)}var Ci=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qu(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var h=s[c].indexOf("="),I=null;if(0<=h){var C=s[c].substring(0,h);I=s[c].substring(h+1)}else C=s[c];a(C,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function de(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof de){this.h=s.h,On(this,s.j),this.o=s.o,this.g=s.g,xn(this,s.s),this.l=s.l;var a=s.i,c=new nn;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Si(this,c),this.m=s.m}else s&&(a=String(s).match(Ci))?(this.h=!1,On(this,a[1]||"",!0),this.o=tn(a[2]||""),this.g=tn(a[3]||"",!0),xn(this,a[4]),this.l=tn(a[5]||"",!0),Si(this,a[6]||"",!0),this.m=tn(a[7]||"")):(this.h=!1,this.i=new nn(null,this.h))}de.prototype.toString=function(){var s=[],a=this.j;a&&s.push(en(a,Pi,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(en(a,Pi,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(en(c,c.charAt(0)=="/"?Hu:zu,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",en(c,Ku)),s.join("")};function $t(s){return new de(s)}function On(s,a,c){s.j=c?tn(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function xn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Si(s,a,c){a instanceof nn?(s.i=a,Qu(s.i,s.h)):(c||(a=en(a,Gu)),s.i=new nn(a,s.h))}function rt(s,a,c){s.i.set(a,c)}function Mn(s){return rt(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function tn(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function en(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,$u),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function $u(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Pi=/[#\/\?@]/g,zu=/[#\?:]/g,Hu=/[#\?]/g,Gu=/[#\?@]/g,Ku=/#/g;function nn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Wt(s){s.g||(s.g=new Map,s.h=0,s.i&&qu(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}r=nn.prototype,r.add=function(s,a){Wt(this),this.i=null,s=we(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function Vi(s,a){Wt(s),a=we(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function bi(s,a){return Wt(s),a=we(s,a),s.g.has(a)}r.forEach=function(s,a){Wt(this),this.g.forEach(function(c,h){c.forEach(function(I){s.call(a,I,h,this)},this)},this)},r.na=function(){Wt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let h=0;h<a.length;h++){const I=s[h];for(let C=0;C<I.length;C++)c.push(a[h])}return c},r.V=function(s){Wt(this);let a=[];if(typeof s=="string")bi(this,s)&&(a=a.concat(this.g.get(we(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},r.set=function(s,a){return Wt(this),this.i=null,s=we(this,s),bi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Di(s,a,c){Vi(s,a),0<c.length&&(s.i=null,s.g.set(we(s,a),U(c)),s.h+=c.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var h=a[c];const C=encodeURIComponent(String(h)),b=this.V(h);for(h=0;h<b.length;h++){var I=C;b[h]!==""&&(I+="="+encodeURIComponent(String(b[h]))),s.push(I)}}return this.i=s.join("&")};function we(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Qu(s,a){a&&!s.j&&(Wt(s),s.i=null,s.g.forEach(function(c,h){var I=h.toLowerCase();h!=I&&(Vi(this,h),Di(this,I,c))},s)),s.j=a}function Wu(s,a){const c=new Je;if(l.Image){const h=new Image;h.onload=V(Yt,c,"TestLoadImage: loaded",!0,a,h),h.onerror=V(Yt,c,"TestLoadImage: error",!1,a,h),h.onabort=V(Yt,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=V(Yt,c,"TestLoadImage: timeout",!1,a,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Yu(s,a){const c=new Je,h=new AbortController,I=setTimeout(()=>{h.abort(),Yt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(C=>{clearTimeout(I),C.ok?Yt(c,"TestPingServer: ok",!0,a):Yt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Yt(c,"TestPingServer: error",!1,a)})}function Yt(s,a,c,h,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),h(c)}catch{}}function Xu(){this.g=new ku}function Ju(s,a,c){const h=c||"";try{Ri(s,function(I,C){let b=I;d(I)&&(b=kr(I)),a.push(h+C+"="+encodeURIComponent(b))})}catch(I){throw a.push(h+"type="+encodeURIComponent("_badmap")),I}}function Ln(s){this.l=s.Ub||null,this.j=s.eb||!1}O(Ln,Or),Ln.prototype.g=function(){return new Fn(this.l,this.j)},Ln.prototype.i=function(s){return function(){return s}}({});function Fn(s,a){vt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Fn,vt),r=Fn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,sn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ni(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ni(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?rn(this):sn(this),this.readyState==3&&Ni(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,rn(this))},r.Qa=function(s){this.g&&(this.response=s,rn(this))},r.ga=function(){this.g&&rn(this)};function rn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,sn(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function sn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Fn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ki(s){let a="";return pt(s,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function zr(s,a,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=ki(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):rt(s,a,c))}function ot(s){vt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(ot,vt);var Zu=/^https?$/i,tc=["POST","PUT"];r=ot.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lr.g(),this.v=this.o?ui(this.o):ui(Lr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(C){Oi(this,C);return}if(s=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var I in h)c.set(I,h[I]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const C of h.keys())c.set(C,h.get(C));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(C=>C.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tc,a,void 0))||h||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,b]of c)this.g.setRequestHeader(C,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Li(this),this.u=!0,this.g.send(s),this.u=!1}catch(C){Oi(this,C)}};function Oi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,xi(s),Un(s)}function xi(s){s.A||(s.A=!0,St(s,"complete"),St(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,St(this,"complete"),St(this,"abort"),Un(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Un(this,!0)),ot.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Mi(this):this.bb())},r.bb=function(){Mi(this)};function Mi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||zt(s)!=4||s.Z()!=2)){if(s.u&&zt(s)==4)si(s.Ea,0,s);else if(St(s,"readystatechange"),zt(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var h;if(h=b===0){var I=String(s.D).match(Ci)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),h=!Zu.test(I?I.toLowerCase():"")}c=h}if(c)St(s,"complete"),St(s,"success");else{s.m=6;try{var C=2<zt(s)?s.g.statusText:""}catch{C=""}s.l=C+" ["+s.Z()+"]",xi(s)}}finally{Un(s)}}}}function Un(s,a){if(s.g){Li(s);const c=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||St(s,"ready");try{c.onreadystatechange=h}catch{}}}function Li(s){s.I&&(l.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function zt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Nu(a)}};function Fi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ec(s){const a={};s=(s.g&&2<=zt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(X(s[h]))continue;var c=T(s[h]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const C=a[I]||[];a[I]=C,C.push(c)}v(a,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function on(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Ui(s){this.Aa=0,this.i=[],this.j=new Je,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=on("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=on("baseRetryDelayMs",5e3,s),this.cb=on("retryDelaySeedMs",1e4,s),this.Wa=on("forwardChannelMaxRetries",2,s),this.wa=on("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ti(s&&s.concurrentRequestLimit),this.Da=new Xu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ui.prototype,r.la=8,r.G=1,r.connect=function(s,a,c,h){Pt(0),this.W=s,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=Qi(this,null,this.W),jn(this)};function Hr(s){if(Bi(s),s.G==3){var a=s.U++,c=$t(s.I);if(rt(c,"SID",s.K),rt(c,"RID",a),rt(c,"TYPE","terminate"),an(s,c),a=new Qt(s,s.j,a),a.L=2,a.v=Mn($t(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.v,c=!0),c||(a.g=Wi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),kn(a)}Ki(s)}function Bn(s){s.g&&(Kr(s),s.g.cancel(),s.g=null)}function Bi(s){Bn(s),s.u&&(l.clearTimeout(s.u),s.u=null),qn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function jn(s){if(!vi(s.h)&&!s.s){s.s=!0;var a=s.Ga;le||E(),Kt||(le(),Kt=!0),Ke.add(a,s),s.B=0}}function nc(s,a){return Ii(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Xe(R(s.Ga,s,a),Gi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Qt(this,this.j,s);let C=this.o;if(this.S&&(C?(C=p(C),y(C,this.S)):C=this.S),this.m!==null||this.O||(I.H=C,C=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=qi(this,I,a),c=$t(this.I),rt(c,"RID",s),rt(c,"CVER",22),this.D&&rt(c,"X-HTTP-Session-Id",this.D),an(this,c),C&&(this.O?a="headers="+encodeURIComponent(String(ki(C)))+"&"+a:this.m&&zr(c,this.m,C)),$r(this.h,I),this.Ua&&rt(c,"TYPE","init"),this.P?(rt(c,"$req",a),rt(c,"SID","null"),I.T=!0,Ur(I,c,null)):Ur(I,c,a),this.G=2}}else this.G==3&&(s?ji(this,s):this.i.length==0||vi(this.h)||ji(this))};function ji(s,a){var c;a?c=a.l:c=s.U++;const h=$t(s.I);rt(h,"SID",s.K),rt(h,"RID",c),rt(h,"AID",s.T),an(s,h),s.m&&s.o&&zr(h,s.m,s.o),c=new Qt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=qi(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),$r(s.h,c),Ur(c,h,a)}function an(s,a){s.H&&pt(s.H,function(c,h){rt(a,h,c)}),s.l&&Ri({},function(c,h){rt(a,h,c)})}function qi(s,a,c){c=Math.min(s.i.length,c);var h=s.l?R(s.l.Na,s.l,s):null;t:{var I=s.i;let C=-1;for(;;){const b=["count="+c];C==-1?0<c?(C=I[0].g,b.push("ofs="+C)):C=0:b.push("ofs="+C);let nt=!0;for(let yt=0;yt<c;yt++){let Z=I[yt].g;const It=I[yt].map;if(Z-=C,0>Z)C=Math.max(0,I[yt].g-100),nt=!1;else try{Ju(It,b,"req"+Z+"_")}catch{h&&h(It)}}if(nt){h=b.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,h}function $i(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;le||E(),Kt||(le(),Kt=!0),Ke.add(a,s),s.v=0}}function Gr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Xe(R(s.Fa,s),Gi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,zi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Xe(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Bn(this),zi(this))};function Kr(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function zi(s){s.g=new Qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=$t(s.qa);rt(a,"RID","rpc"),rt(a,"SID",s.K),rt(a,"AID",s.T),rt(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&rt(a,"TO",s.ja),rt(a,"TYPE","xmlhttp"),an(s,a),s.m&&s.o&&zr(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Mn($t(a)),c.m=null,c.P=!0,_i(c,s)}r.Za=function(){this.C!=null&&(this.C=null,Bn(this),Gr(this),Pt(19))};function qn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Hi(s,a){var c=null;if(s.g==a){qn(s),Kr(s),s.g=null;var h=2}else if(qr(s.h,a))c=a.D,wi(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;h=bn(),St(h,new di(h,c)),jn(s)}else $i(s);else if(I=a.s,I==3||I==0&&0<a.X||!(h==1&&nc(s,a)||h==2&&Gr(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),I){case 1:pe(s,5);break;case 4:pe(s,10);break;case 3:pe(s,6);break;default:pe(s,2)}}}function Gi(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function pe(s,a){if(s.j.info("Error code "+a),a==2){var c=R(s.fb,s),h=s.Xa;const I=!h;h=new de(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||On(h,"https"),Mn(h),I?Wu(h.toString(),c):Yu(h.toString(),c)}else Pt(2);s.G=0,s.l&&s.l.sa(a),Ki(s),Bi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Ki(s){if(s.G=0,s.ka=[],s.l){const a=Ai(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ka,a),k(s.ka,s.i),s.h.i.length=0,U(s.i),s.i.length=0),s.l.ra()}}function Qi(s,a,c){var h=c instanceof de?$t(c):new de(c);if(h.g!="")a&&(h.g=a+"."+h.g),xn(h,h.s);else{var I=l.location;h=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var C=new de(null);h&&On(C,h),a&&(C.g=a),I&&xn(C,I),c&&(C.l=c),h=C}return c=s.D,a=s.ya,c&&a&&rt(h,c,a),rt(h,"VER",s.la),an(s,h),h}function Wi(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new ot(new Ln({eb:c})):new ot(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yi(){}r=Yi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function $n(){}$n.prototype.g=function(s,a){return new Nt(s,a)};function Nt(s,a){vt.call(this),this.g=new Ui(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!X(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!X(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Ae(this)}O(Nt,vt),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Hr(this.g)},Nt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=kr(s),s=c);a.i.push(new Uu(a.Ya++,s)),a.G==3&&jn(a)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Hr(this.g),delete this.g,Nt.aa.N.call(this)};function Xi(s){xr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}O(Xi,xr);function Ji(){Mr.call(this),this.status=1}O(Ji,Mr);function Ae(s){this.g=s}O(Ae,Yi),Ae.prototype.ua=function(){St(this.g,"a")},Ae.prototype.ta=function(s){St(this.g,new Xi(s))},Ae.prototype.sa=function(s){St(this.g,new Ji)},Ae.prototype.ra=function(){St(this.g,"b")},$n.prototype.createWebChannel=$n.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Aa=function(){return new $n},wa=function(){return bn()},Ia=he,hs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Dn.NO_ERROR=0,Dn.TIMEOUT=8,Dn.HTTP_ERROR=6,Xn=Dn,pi.COMPLETE="complete",va=pi,ci.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",vt.prototype.listen=vt.prototype.K,un=ci,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,Ta=ot}).apply(typeof Hn<"u"?Hn:typeof self<"u"?self:typeof window<"u"?window:{});const po="@firebase/firestore",mo="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ze="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new pa("@firebase/firestore");function Ce(){return Ee.logLevel}function N(r,...t){if(Ee.logLevel<=W.DEBUG){const e=t.map(ks);Ee.debug(`Firestore (${ze}): ${r}`,...e)}}function Gt(r,...t){if(Ee.logLevel<=W.ERROR){const e=t.map(ks);Ee.error(`Firestore (${ze}): ${r}`,...e)}}function Me(r,...t){if(Ee.logLevel<=W.WARN){const e=t.map(ks);Ee.warn(`Firestore (${ze}): ${r}`,...e)}}function ks(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Ra(r,n,e)}function Ra(r,t,e){let n=`FIRESTORE (${ze}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Gt(n),new Error(n)}function it(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Ra(t,i,n)}function Y(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends $e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $l{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Rt.UNAUTHENTICATED))}shutdown(){}}class zl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Hl{constructor(t){this.t=t,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){it(this.o===void 0,42304);let n=this.i;const i=f=>this.i!==n?(n=this.i,e(f)):Promise.resolve();let o=new _e;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _e,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},l=f=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>l(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?l(f):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _e)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(it(typeof n.accessToken=="string",31837,{l:n}),new Ca(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return it(t===null||typeof t=="string",2055,{h:t}),new Rt(t)}}class Gl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Kl{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Gl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class go{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ql{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){it(this.o===void 0,3512);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new go(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(it(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new go(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Wl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function H(r,t){return r<t?-1:r>t?1:0}function fs(r,t){const e=Math.min(r.length,t.length);for(let n=0;n<e;n++){const i=r.charAt(n),o=t.charAt(n);if(i!==o)return ts(i)===ts(o)?H(i,o):ts(i)?1:-1}return H(r.length,t.length)}const Yl=55296,Xl=57343;function ts(r){const t=r.charCodeAt(0);return t>=Yl&&t<=Xl}function Le(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="__name__";class Lt{constructor(t,e,n){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&j(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Lt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Lt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return H(t.length,e.length)}static compareSegments(t,e){const n=Lt.isNumericId(t),i=Lt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Lt.extractNumericId(t).compare(Lt.extractNumericId(e)):fs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ee.fromString(t.substring(4,t.length-2))}}class st extends Lt{construct(t,e,n){return new st(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new M(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new st(e)}static emptyPath(){return new st([])}}const Jl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends Lt{construct(t,e,n){return new Vt(t,e,n)}static isValidIdentifier(t){return Jl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_o}static keyField(){return new Vt([_o])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new M(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new M(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new M(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=f,i+=2}else l==="`"?(u=!u,i++):l!=="."||u?(n+=l,i++):(o(),i++)}if(o(),u)throw new M(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Vt(e)}static emptyPath(){return new Vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(st.fromString(t))}static fromName(t){return new F(st.fromString(t).popFirst(5))}static empty(){return new F(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&st.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return st.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new st(t.slice()))}}function Zl(r,t,e,n){if(t===!0&&n===!0)throw new M(D.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function yo(r){if(F.isDocumentKey(r))throw new M(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function th(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function eh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":j(12329,{type:typeof r})}function ds(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new M(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=eh(r);throw new M(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(r,t){const e={typeString:r};return t&&(e.value=t),e}function In(r,t){if(!th(r))throw new M(D.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const u=r[n];if(i&&typeof u!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new M(D.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=-62135596800,To=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(t){return ft.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*To);return new ft(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Eo)throw new M(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/To}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(In(t,ft._jsonSchema))return new ft(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Eo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:dt("string",ft._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(t){return new B(t)}static min(){return new B(new ft(0,0))}static max(){return new B(new ft(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=-1;function nh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(n===1e9?new ft(e+1,0):new ft(e,n));return new se(i,F.empty(),t)}function rh(r){return new se(r.readTime,r.key,yn)}class se{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new se(B.min(),F.empty(),yn)}static max(){return new se(B.max(),F.empty(),yn)}}function sh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(r.documentKey,t.documentKey),e!==0?e:H(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(r){if(r.code!==D.FAILED_PRECONDITION||r.message!==ih)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,n)=>{e(t)})}static reject(t){return new S((e,n)=>{n(t)})}static waitFor(t){return new S((e,n)=>{let i=0,o=0,u=!1;t.forEach(l=>{++i,l.next(()=>{++o,u&&o===i&&e()},f=>n(f))}),u=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const n of t)e=e.next(i=>i?S.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new S((n,i)=>{const o=t.length,u=new Array(o);let l=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next(_=>{u[d]=_,++l,l===o&&n(u)},_=>i(_))}})}static doWhile(t,e){return new S((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function ah(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function He(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>e.writeSequenceNumber(n))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}pr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=-1;function mr(r){return r==null}function ps(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="";function ch(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=vo(t)),t=lh(r.get(e),t);return vo(t)}function lh(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Pa:e+="";break;default:e+=o}}return e}function vo(r){return r+Pa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function wn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function hh(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,e){this.comparator=t,this.root=e||Et.EMPTY}insert(t,e){return new ct(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gn(this.root,t,this.comparator,!0)}}class Gn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??Et.RED,this.left=i??Et.EMPTY,this.right=o??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new Et(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw j(27949);return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wo(this.data.getIterator())}getIteratorFrom(t){return new wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof gt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new gt(this.comparator);return e.data=t,e}}class wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.fields=t,t.sort(Vt.comparator)}static empty(){return new Xt([])}unionWith(t){let e=new gt(Vt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Le(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Va("Invalid base64 string: "+o):o}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const fh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(r){if(it(!!r,39018),typeof r=="string"){let t=0;const e=fh.exec(r);if(it(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ut(r.seconds),nanos:ut(r.nanos)}}function ut(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function oe(r){return typeof r=="string"?Tt.fromBase64String(r):Tt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="server_timestamp",Da="__type__",Na="__previous_value__",ka="__local_write_time__";function Os(r){return(r?.mapValue?.fields||{})[Da]?.stringValue===ba}function gr(r){const t=r.mapValue.fields[Na];return Os(t)?gr(t):t}function En(r){const t=ie(r.mapValue.fields[ka].timestampValue);return new ft(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e,n,i,o,u,l,f,d,_){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=_}}const or="(default)";class Tn{constructor(t,e){this.projectId=t,this.database=e||or}static empty(){return new Tn("","")}get isDefaultDatabase(){return this.database===or}isEqual(t){return t instanceof Tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="__type__",mh="__max__",Kn={mapValue:{}},gh="__vector__",ms="value";function ae(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Os(r)?4:yh(r)?9007199254740991:_h(r)?10:11:j(28295,{value:r})}function jt(r,t){if(r===t)return!0;const e=ae(r);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return En(r).isEqual(En(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=ie(i.timestampValue),l=ie(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return oe(i.bytesValue).isEqual(oe(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return ut(i.geoPointValue.latitude)===ut(o.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ut(i.integerValue)===ut(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=ut(i.doubleValue),l=ut(o.doubleValue);return u===l?ps(u)===ps(l):isNaN(u)&&isNaN(l)}return!1}(r,t);case 9:return Le(r.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Io(u)!==Io(l))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(l[f]===void 0||!jt(u[f],l[f])))return!1;return!0}(r,t);default:return j(52216,{left:r})}}function vn(r,t){return(r.values||[]).find(e=>jt(e,t))!==void 0}function Fe(r,t){if(r===t)return 0;const e=ae(r),n=ae(t);if(e!==n)return H(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(r.booleanValue,t.booleanValue);case 2:return function(o,u){const l=ut(o.integerValue||o.doubleValue),f=ut(u.integerValue||u.doubleValue);return l<f?-1:l>f?1:l===f?0:isNaN(l)?isNaN(f)?0:-1:1}(r,t);case 3:return Ao(r.timestampValue,t.timestampValue);case 4:return Ao(En(r),En(t));case 5:return fs(r.stringValue,t.stringValue);case 6:return function(o,u){const l=oe(o),f=oe(u);return l.compareTo(f)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const l=o.split("/"),f=u.split("/");for(let d=0;d<l.length&&d<f.length;d++){const _=H(l[d],f[d]);if(_!==0)return _}return H(l.length,f.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const l=H(ut(o.latitude),ut(u.latitude));return l!==0?l:H(ut(o.longitude),ut(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ro(r.arrayValue,t.arrayValue);case 10:return function(o,u){const l=o.fields||{},f=u.fields||{},d=l[ms]?.arrayValue,_=f[ms]?.arrayValue,A=H(d?.values?.length||0,_?.values?.length||0);return A!==0?A:Ro(d,_)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===Kn.mapValue&&u===Kn.mapValue)return 0;if(o===Kn.mapValue)return 1;if(u===Kn.mapValue)return-1;const l=o.fields||{},f=Object.keys(l),d=u.fields||{},_=Object.keys(d);f.sort(),_.sort();for(let A=0;A<f.length&&A<_.length;++A){const R=fs(f[A],_[A]);if(R!==0)return R;const V=Fe(l[f[A]],d[_[A]]);if(V!==0)return V}return H(f.length,_.length)}(r.mapValue,t.mapValue);default:throw j(23264,{he:e})}}function Ao(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return H(r,t);const e=ie(r),n=ie(t),i=H(e.seconds,n.seconds);return i!==0?i:H(e.nanos,n.nanos)}function Ro(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Fe(e[i],n[i]);if(o)return o}return H(e.length,n.length)}function Ue(r){return gs(r)}function gs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ie(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return oe(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return F.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=gs(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${gs(e.fields[u])}`;return i+"}"}(r.mapValue):j(61005,{value:r})}function Jn(r){switch(ae(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=gr(r);return t?16+Jn(t):16;case 5:return 2*r.stringValue.length;case 6:return oe(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Jn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return wn(n.fields,(o,u)=>{i+=o.length+Jn(u)}),i}(r.mapValue);default:throw j(13486,{value:r})}}function _s(r){return!!r&&"integerValue"in r}function xs(r){return!!r&&"arrayValue"in r}function Co(r){return!!r&&"nullValue"in r}function So(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function es(r){return!!r&&"mapValue"in r}function _h(r){return(r?.mapValue?.fields||{})[ph]?.stringValue===gh}function fn(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return wn(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=fn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=fn(r.arrayValue.values[e]);return t}return{...r}}function yh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===mh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.value=t}static empty(){return new Ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!es(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fn(e)}setAll(t){let e=Vt.emptyPath(),n={},i=[];t.forEach((u,l)=>{if(!e.isImmediateParentOf(l)){const f=this.getFieldsMap(e);this.applyChanges(f,n,i),n={},i=[],e=l.popLast()}u?n[l.lastSegment()]=fn(u):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());es(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];es(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){wn(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Ft(fn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,n,i,o,u,l){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new Ct(t,0,B.min(),B.min(),B.min(),Ft.empty(),0)}static newFoundDocument(t,e,n,i){return new Ct(t,1,e,B.min(),n,i,0)}static newNoDocument(t,e){return new Ct(t,2,e,B.min(),B.min(),Ft.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,B.min(),B.min(),Ft.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e){this.position=t,this.inclusive=e}}function Po(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=F.comparator(F.fromName(u.referenceValue),e.key):n=Fe(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Vo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!jt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function Eh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{}class mt extends Oa{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new vh(t,e,n):e==="array-contains"?new Ah(t,n):e==="in"?new Rh(t,n):e==="not-in"?new Ch(t,n):e==="array-contains-any"?new Sh(t,n):new mt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ih(t,n):new wh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Fe(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends Oa{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new qt(t,e)}matches(t){return xa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xa(r){return r.op==="and"}function Ma(r){return Th(r)&&xa(r)}function Th(r){for(const t of r.filters)if(t instanceof qt)return!1;return!0}function ys(r){if(r instanceof mt)return r.field.canonicalString()+r.op.toString()+Ue(r.value);if(Ma(r))return r.filters.map(t=>ys(t)).join(",");{const t=r.filters.map(e=>ys(e)).join(",");return`${r.op}(${t})`}}function La(r,t){return r instanceof mt?function(n,i){return i instanceof mt&&n.op===i.op&&n.field.isEqual(i.field)&&jt(n.value,i.value)}(r,t):r instanceof qt?function(n,i){return i instanceof qt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,l)=>o&&La(u,i.filters[l]),!0):!1}(r,t):void j(19439)}function Fa(r){return r instanceof mt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ue(e.value)}`}(r):r instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(Fa).join(" ,")+"}"}(r):"Filter"}class vh extends mt{constructor(t,e,n){super(t,e,n),this.key=F.fromName(n.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ih extends mt{constructor(t,e){super(t,"in",e),this.keys=Ua("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wh extends mt{constructor(t,e){super(t,"not-in",e),this.keys=Ua("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ua(r,t){return(t.arrayValue?.values||[]).map(e=>F.fromName(e.referenceValue))}class Ah extends mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xs(e)&&vn(e.arrayValue,this.value)}}class Rh extends mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vn(this.value.arrayValue,e)}}class Ch extends mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!vn(this.value.arrayValue,e)}}class Sh extends mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>vn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e=null,n=[],i=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=l,this.Te=null}}function bo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Ph(r,t,e,n,i,o,u)}function Ms(r){const t=Y(r);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ys(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),mr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ue(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ue(n)).join(",")),t.Te=e}return t.Te}function Ls(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Eh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!La(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Vo(r.startAt,t.startAt)&&Vo(r.endAt,t.endAt)}function Es(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e=null,n=[],i=[],o=null,u="F",l=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Vh(r,t,e,n,i,o,u,l){return new _r(r,t,e,n,i,o,u,l)}function Ba(r){return new _r(r)}function Do(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function bh(r){return r.collectionGroup!==null}function dn(r){const t=Y(r);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new gt(Vt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new ur(o,n))}),e.has(Vt.keyField().canonicalString())||t.Ie.push(new ur(Vt.keyField(),n))}return t.Ie}function Bt(r){const t=Y(r);return t.Ee||(t.Ee=Dh(t,dn(r))),t.Ee}function Dh(r,t){if(r.limitType==="F")return bo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ur(i.field,o)});const e=r.endAt?new ar(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new ar(r.startAt.position,r.startAt.inclusive):null;return bo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Ts(r,t,e){return new _r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function yr(r,t){return Ls(Bt(r),Bt(t))&&r.limitType===t.limitType}function ja(r){return`${Ms(Bt(r))}|lt:${r.limitType}`}function Se(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Fa(i)).join(", ")}]`),mr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ue(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ue(i)).join(",")),`Target(${n})`}(Bt(r))}; limitType=${r.limitType})`}function Er(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):F.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of dn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,l,f){const d=Po(u,l,f);return u.inclusive?d<=0:d<0}(n.startAt,dn(n),i)||n.endAt&&!function(u,l,f){const d=Po(u,l,f);return u.inclusive?d>=0:d>0}(n.endAt,dn(n),i))}(r,t)}function Nh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qa(r){return(t,e)=>{let n=!1;for(const i of dn(r)){const o=kh(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function kh(r,t,e){const n=r.field.isKeyField()?F.comparator(t.key,e.key):function(o,u,l){const f=u.data.field(o),d=l.data.field(o);return f!==null&&d!==null?Fe(f,d):j(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return j(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){wn(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return hh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new ct(F.comparator);function ue(){return Oh}const $a=new ct(F.comparator);function cn(...r){let t=$a;for(const e of r)t=t.insert(e.key,e);return t}function xh(r){let t=$a;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ge(){return pn()}function za(){return pn()}function pn(){return new Te(r=>r.toString(),(r,t)=>r.isEqual(t))}const Mh=new gt(F.comparator);function J(...r){let t=Mh;for(const e of r)t=t.add(e);return t}const Lh=new gt(H);function Fh(){return Lh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ps(t)?"-0":t}}function Bh(r){return{integerValue:""+r}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this._=void 0}}function jh(r,t,e){return r instanceof vs?function(i,o){const u={fields:{[Da]:{stringValue:ba},[ka]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Os(o)&&(o=gr(o)),o&&(u.fields[Na]=o),{mapValue:u}}(e,t):r instanceof cr?Ha(r,t):r instanceof lr?Ga(r,t):function(i,o){const u=$h(i,o),l=No(u)+No(i.Ae);return _s(u)&&_s(i.Ae)?Bh(l):Uh(i.serializer,l)}(r,t)}function qh(r,t,e){return r instanceof cr?Ha(r,t):r instanceof lr?Ga(r,t):e}function $h(r,t){return r instanceof Is?function(n){return _s(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class vs extends Tr{}class cr extends Tr{constructor(t){super(),this.elements=t}}function Ha(r,t){const e=Ka(t);for(const n of r.elements)e.some(i=>jt(i,n))||e.push(n);return{arrayValue:{values:e}}}class lr extends Tr{constructor(t){super(),this.elements=t}}function Ga(r,t){let e=Ka(t);for(const n of r.elements)e=e.filter(i=>!jt(i,n));return{arrayValue:{values:e}}}class Is extends Tr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function No(r){return ut(r.integerValue||r.doubleValue)}function Ka(r){return xs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function zh(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof cr&&i instanceof cr||n instanceof lr&&i instanceof lr?Le(n.elements,i.elements,jt):n instanceof Is&&i instanceof Is?jt(n.Ae,i.Ae):n instanceof vs&&i instanceof vs}(r.transform,t.transform)}class ye{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ye}static exists(t){return new ye(void 0,t)}static updateTime(t){return new ye(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Fs{}function Qa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Gh(r.key,ye.none()):new Us(r.key,r.data,ye.none());{const e=r.data,n=Ft.empty();let i=new gt(Vt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new vr(r.key,n,new Xt(i.toArray()),ye.none())}}function Hh(r,t,e){r instanceof Us?function(i,o,u){const l=i.value.clone(),f=Oo(i.fieldTransforms,o,u.transformResults);l.setAll(f),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(r,t,e):r instanceof vr?function(i,o,u){if(!Zn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const l=Oo(i.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Wa(i)),f.setAll(l),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function mn(r,t,e,n){return r instanceof Us?function(o,u,l,f){if(!Zn(o.precondition,u))return l;const d=o.value.clone(),_=xo(o.fieldTransforms,f,u);return d.setAll(_),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof vr?function(o,u,l,f){if(!Zn(o.precondition,u))return l;const d=xo(o.fieldTransforms,f,u),_=u.data;return _.setAll(Wa(o)),_.setAll(d),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,l){return Zn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(r,t,e)}function ko(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Le(n,i,(o,u)=>zh(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Us extends Fs{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vr extends Fs{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Oo(r,t,e){const n=new Map;it(r.length===e.length,32656,{Re:e.length,Ve:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,l=t.data.field(o.field);n.set(o.field,qh(u,l,e[i]))}return n}function xo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,jh(o,u,t))}return n}class Gh extends Fs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Hh(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=za();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(i.key)?null:l;const f=Qa(u,l);f!==null&&n.set(i.key,f),u.isValidDocument()||u.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),J())}isEqual(t){return this.batchId===t.batchId&&Le(this.mutations,t.mutations,(e,n)=>ko(e,n))&&Le(this.baseMutations,t.baseMutations,(e,n)=>ko(e,n))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Q;function Ya(r){if(r===void 0)return Gt("GRPC error has no .code"),D.UNKNOWN;switch(r){case ht.OK:return D.OK;case ht.CANCELLED:return D.CANCELLED;case ht.UNKNOWN:return D.UNKNOWN;case ht.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ht.INTERNAL:return D.INTERNAL;case ht.UNAVAILABLE:return D.UNAVAILABLE;case ht.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ht.NOT_FOUND:return D.NOT_FOUND;case ht.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ht.ABORTED:return D.ABORTED;case ht.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ht.DATA_LOSS:return D.DATA_LOSS;default:return j(39323,{code:r})}}(Q=ht||(ht={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new ee([4294967295,4294967295],0);function Mo(r){const t=Yh().encode(r),e=new Ea;return e.update(t),new Uint8Array(e.digest())}function Lo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ee([e,n],0),new ee([i,o],0)]}class Bs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ln(`Invalid padding: ${e}`);if(n<0)throw new ln(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new ln(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ee.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(ee.fromNumber(n)));return i.compare(Xh)===1&&(i=new ee([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Mo(t),[n,i]=Lo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(n,i,o);if(!this.we(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Bs(o,i,e);return n.forEach(l=>u.insert(l)),u}insert(t){if(this.ge===0)return;const e=Mo(t),[n,i]=Lo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(n,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ir(B.min(),i,new ct(H),ue(),J())}}class An{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new An(n,e,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n,i){this.be=t,this.removedTargetIds=e,this.key=n,this.De=i}}class Xa{constructor(t,e){this.targetId=t,this.Ce=e}}class Ja{constructor(t,e,n=Tt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Fo{constructor(){this.ve=0,this.Fe=Uo(),this.Me=Tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=J(),e=J(),n=J();return this.Fe.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:j(38017,{changeType:o})}}),new An(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Uo()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,it(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Jh{constructor(t){this.Ge=t,this.ze=new Map,this.je=ue(),this.Je=Qn(),this.He=Qn(),this.Ye=new ct(H)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:j(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((n,i)=>{this.rt(i)&&e(i)})}st(t){const e=t.targetId,n=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(Es(o))if(n===0){const u=new F(o.path);this.et(e,u,Ct.newNoDocument(u,B.min()))}else it(n===1,20013,{expectedCount:n});else{const u=this._t(e);if(u!==n){const l=this.ut(t),f=l?this.ct(l,t,u):1;if(f!==0){this.it(e);const d=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,l;try{u=oe(n).toUint8Array()}catch(f){if(f instanceof Va)return Me("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{l=new Bs(u,i,o)}catch(f){return Me(f instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return l.ge===0?null:l}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.Ge.ht(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)}),i}Tt(t){const e=new Map;this.ze.forEach((o,u)=>{const l=this.ot(u);if(l){if(o.current&&Es(l.target)){const f=new F(l.target.path);this.It(f).has(u)||this.Et(u,f)||this.et(u,f,Ct.newNoDocument(f,t))}o.Be&&(e.set(u,o.ke()),o.qe())}});let n=J();this.He.forEach((o,u)=>{let l=!0;u.forEachWhile(f=>{const d=this.ot(f);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.je.forEach((o,u)=>u.setReadTime(t));const i=new Ir(t,e,this.Ye,this.je,n);return this.je=ue(),this.Je=Qn(),this.He=Qn(),this.Ye=new ct(H),i}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Fo,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new gt(H),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new gt(H),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Fo),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Qn(){return new ct(F.comparator)}function Uo(){return new ct(F.comparator)}const Zh={asc:"ASCENDING",desc:"DESCENDING"},tf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ef={and:"AND",or:"OR"};class nf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ws(r,t){return r.useProto3Json||mr(t)?t:{value:t}}function rf(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sf(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function De(r){return it(!!r,49232),B.fromTimestamp(function(e){const n=ie(e);return new ft(n.seconds,n.nanos)}(r))}function of(r,t){return As(r,t).canonicalString()}function As(r,t){const e=function(i){return new st(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Za(r){const t=st.fromString(r);return it(su(t),10190,{key:t.toString()}),t}function ns(r,t){const e=Za(t);if(e.get(1)!==r.databaseId.projectId)throw new M(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new M(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new F(eu(e))}function tu(r,t){return of(r.databaseId,t)}function af(r){const t=Za(r);return t.length===4?st.emptyPath():eu(t)}function Bo(r){return new st(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function eu(r){return it(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function uf(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,_){return d.useProto3Json?(it(_===void 0||typeof _=="string",58123),Tt.fromBase64String(_||"")):(it(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Tt.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&function(d){const _=d.code===void 0?D.UNKNOWN:Ya(d.code);return new M(_,d.message||"")}(u);e=new Ja(n,i,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=ns(r,n.document.name),o=De(n.document.updateTime),u=n.document.createTime?De(n.document.createTime):B.min(),l=new Ft({mapValue:{fields:n.document.fields}}),f=Ct.newFoundDocument(i,o,u,l),d=n.targetIds||[],_=n.removedTargetIds||[];e=new tr(d,_,f.key,f)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=ns(r,n.document),o=n.readTime?De(n.readTime):B.min(),u=Ct.newNoDocument(i,o),l=n.removedTargetIds||[];e=new tr([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=ns(r,n.document),o=n.removedTargetIds||[];e=new tr([],o,i,null)}else{if(!("filter"in t))return j(11601,{Rt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Wh(i,o),l=n.targetId;e=new Xa(l,u)}}return e}function cf(r,t){return{documents:[tu(r,t.path)]}}function lf(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=tu(r,i);const o=function(d){if(d.length!==0)return ru(qt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(_=>function(R){return{field:Pe(R.field),direction:df(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=ws(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:i}}function hf(r){let t=af(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){it(n===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=nu(A);return R instanceof qt&&Ma(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(O){return new ur(Ve(O.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(A){let R;return R=typeof A=="object"?A.value:A,mr(R)?null:R}(e.limit));let f=null;e.startAt&&(f=function(A){const R=!!A.before,V=A.values||[];return new ar(V,R)}(e.startAt));let d=null;return e.endAt&&(d=function(A){const R=!A.before,V=A.values||[];return new ar(V,R)}(e.endAt)),Vh(t,i,u,o,l,"F",f,d)}function ff(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function nu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ve(e.unaryFilter.field);return mt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ve(e.unaryFilter.field);return mt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ve(e.unaryFilter.field);return mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ve(e.unaryFilter.field);return mt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(r):r.fieldFilter!==void 0?function(e){return mt.create(Ve(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(n=>nu(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(e.compositeFilter.op))}(r):j(30097,{filter:r})}function df(r){return Zh[r]}function pf(r){return tf[r]}function mf(r){return ef[r]}function Pe(r){return{fieldPath:r.canonicalString()}}function Ve(r){return Vt.fromServerFormat(r.fieldPath)}function ru(r){return r instanceof mt?function(e){if(e.op==="=="){if(So(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NAN"}};if(Co(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(So(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NAN"}};if(Co(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pe(e.field),op:pf(e.op),value:e.value}}}(r):r instanceof qt?function(e){const n=e.getFilters().map(i=>ru(i));return n.length===1?n[0]:{compositeFilter:{op:mf(e.op),filters:n}}}(r):j(54877,{filter:r})}function su(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e,n,i,o=B.min(),u=B.min(),l=Tt.EMPTY_BYTE_STRING,f=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=f}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.yt=t}}function _f(r){const t=hf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ts(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.Cn=new Ef}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(se.min())}updateCollectionGroup(t,e,n){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Ef{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new gt(st.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new gt(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iu=41943040;class bt{static withCacheSize(t){return new bt(t,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(iu,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Be(0)}static cr(){return new Be(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="LruGarbageCollector",Tf=1048576;function $o([r,t],[e,n]){const i=H(r,e);return i===0?H(t,n):i}class vf{constructor(t){this.Ir=t,this.buffer=new gt($o),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();$o(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class If{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(qo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){He(e)?N(qo,"Ignoring IndexedDB error during garbage collection: ",e):await dr(e)}await this.Vr(3e5)})}}class wf{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return S.resolve(pr.ce);const n=new vf(e);return this.mr.forEachTarget(t,i=>n.Ar(i.sequenceNumber)).next(()=>this.mr.pr(t,i=>n.Ar(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(jo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jo):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,i,o,u,l,f,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(n=A,l=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(d=Date.now(),Ce()<=W.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(l-u)+`ms
	Removed ${o} targets in `+(f-l)+`ms
	Removed ${A} documents in `+(d-f)+`ms
Total Duration: ${d-_}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function Af(r,t){return new wf(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.changes=new Te(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?S.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&mn(n.mutation,i,Xt.empty(),ft.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,J()).next(()=>n))}getLocalViewOfDocuments(t,e,n=J()){const i=ge();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=cn();return o.forEach((l,f)=>{u=u.insert(l,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ge();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,J()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,l)=>{e.set(u,l)})})}computeViews(t,e,n,i){let o=ue();const u=pn(),l=function(){return pn()}();return e.forEach((f,d)=>{const _=n.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof vr)?o=o.insert(d.key,d):_!==void 0?(u.set(d.key,_.mutation.getFieldMask()),mn(_.mutation,d,_.mutation.getFieldMask(),ft.now())):u.set(d.key,Xt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((d,_)=>u.set(d,_)),e.forEach((d,_)=>l.set(d,new Cf(_,u.get(d)??null))),l))}recalculateAndSaveOverlays(t,e){const n=pn();let i=new ct((u,l)=>u-l),o=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const l of u)l.keys().forEach(f=>{const d=e.get(f);if(d===null)return;let _=n.get(f)||Xt.empty();_=l.applyToLocalView(d,_),n.set(f,_);const A=(i.get(l.batchId)||J()).add(f);i=i.insert(l.batchId,A)})}).next(()=>{const u=[],l=i.getReverseIterator();for(;l.hasNext();){const f=l.getNext(),d=f.key,_=f.value,A=za();_.forEach(R=>{if(!o.has(R)){const V=Qa(e.get(R),n.get(R));V!==null&&A.set(R,V),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,A))}return S.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return F.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):S.resolve(ge());let l=yn,f=o;return u.next(d=>S.forEach(d,(_,A)=>(l<A.largestBatchId&&(l=A.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{f=f.insert(_,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,f,d,J())).next(_=>({batchId:l,changes:xh(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(n=>{let i=cn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=cn();return this.indexManager.getCollectionParents(t,o).next(l=>S.forEach(l,f=>{const d=function(A,R){return new _r(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(_=>{_.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((f,d)=>{const _=d.getKey();u.get(_)===null&&(u=u.insert(_,Ct.newInvalidDocument(_)))});let l=cn();return u.forEach((f,d)=>{const _=o.get(f);_!==void 0&&mn(_.mutation,d,Xt.empty(),ft.now()),Er(e,d)&&(l=l.insert(f,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:De(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(i){return{name:i.name,query:_f(i.bundledQuery),readTime:De(i.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.overlays=new ct(F.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ge();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.St(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(n)),S.resolve()}getOverlaysForCollection(t,e,n){const i=ge(),o=e.length+1,u=new F(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const f=l.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>n&&i.set(f.getKey(),f)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new ct((d,_)=>d-_);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let _=o.get(d.largestBatchId);_===null&&(_=ge(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const l=ge(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((d,_)=>l.set(d,_)),!(l.size()>=i)););return S.resolve(l)}St(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Qh(e,n));let o=this.qr.get(e);o===void 0&&(o=J(),this.qr.set(e,o)),this.qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.Qr=new gt(_t.$r),this.Ur=new gt(_t.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new _t(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Gr(new _t(t,e))}zr(t,e){t.forEach(n=>this.removeReference(n,e))}jr(t){const e=new F(new st([])),n=new _t(e,t),i=new _t(e,t+1),o=[];return this.Ur.forEachInRange([n,i],u=>{this.Gr(u),o.push(u.key)}),o}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new st([])),n=new _t(e,t),i=new _t(e,t+1);let o=J();return this.Ur.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new _t(t,0),n=this.Qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class _t{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||H(t.Yr,e.Yr)}static Kr(t,e){return H(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new gt(_t.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Kh(o,e,n,i);this.mutationQueue.push(u);for(const l of i)this.Zr=this.Zr.add(new _t(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ei(n),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?uh:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _t(e,0),i=new _t(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],u=>{const l=this.Xr(u.Yr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new gt(H);return e.forEach(i=>{const o=new _t(i,0),u=new _t(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,u],l=>{n=n.add(l.Yr)})}),S.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;F.isDocumentKey(o)||(o=o.child(""));const u=new _t(new F(o),0);let l=new gt(H);return this.Zr.forEachWhile(f=>{const d=f.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(l=l.add(f.Yr)),!0)},u),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach(n=>{const i=this.Xr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){it(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return S.forEach(e.mutations,i=>{const o=new _t(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new _t(e,0),i=this.Zr.firstAfterOrEqual(n);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){this.ri=t,this.docs=function(){return new ct(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return S.resolve(n?n.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let n=ue();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():Ct.newInvalidDocument(i))}),S.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=ue();const u=e.path,l=new F(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(l);for(;f.hasNext();){const{key:d,value:{document:_}}=f.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||sh(rh(_),n)<=0||(i.has(_.key)||Er(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,n,i){j(9500)}ii(t,e){return S.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new kf(this)}getSize(t){return S.resolve(this.size)}}class kf extends Rf{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(n)}),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.persistence=t,this.si=new Te(e=>Ms(e),Ls),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.oi=0,this._i=new js,this.targetCount=0,this.ai=Be.ur()}forEachTarget(t,e){return this.si.forEach((n,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Be(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.si.forEach((u,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.si.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return S.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),S.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return S.resolve(n)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e){this.ui={},this.overlays={},this.ci=new pr(0),this.li=!1,this.li=!0,this.hi=new bf,this.referenceDelegate=t(this),this.Pi=new Of(this),this.indexManager=new yf,this.remoteDocumentCache=function(i){return new Nf(i)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new gf(e),this.Ii=new Pf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Vf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new Df(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new xf(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(t,e){return S.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class xf extends oh{constructor(t){super(),this.currentSequenceNumber=t}}class qs{constructor(t){this.persistence=t,this.Ri=new js,this.Vi=null}static mi(t){return new qs(t)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),S.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(i=>this.fi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,n=>{const i=F.fromPath(n);return this.gi(t,i).next(o=>{o||e.removeEntry(i,B.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(n=>{n?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class hr{constructor(t,e){this.persistence=t,this.pi=new Te(n=>ch(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Af(this,e)}static mi(t,e){return new hr(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}wr(t){let e=0;return this.pr(t,n=>{e++}).next(()=>e)}pr(t,e){return S.forEach(this.pi,(n,i)=>this.br(t,n,i).next(o=>o?S.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,u=>this.br(t,u,e).next(l=>{l||(n++,o.removeEntry(u,B.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),S.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Jn(t.data.value)),e}br(t,e,n){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return S.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=i}static As(t,e){let n=J(),i=J();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new $s(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return wc()?8:ah(vc())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ys(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ws(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Mf;return this.Ss(t,e,u).next(l=>{if(o.result=l,this.Vs)return this.bs(t,e,u,l.size)})}).next(()=>o.result)}bs(t,e,n,i){return n.documentReadCount<this.fs?(Ce()<=W.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Se(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(Ce()<=W.DEBUG&&N("QueryEngine","Query:",Se(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(Ce()<=W.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Se(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bt(e))):S.resolve())}ys(t,e){if(Do(e))return S.resolve(null);let n=Bt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ts(e,null,"F"),n=Bt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=J(...o);return this.ps.getDocuments(t,u).next(l=>this.indexManager.getMinOffset(t,n).next(f=>{const d=this.Ds(e,l);return this.Cs(e,d,u,f.readTime)?this.ys(t,Ts(e,null,"F")):this.vs(t,d,e,f)}))})))}ws(t,e,n,i){return Do(e)||i.isEqual(B.min())?S.resolve(null):this.ps.getDocuments(t,n).next(o=>{const u=this.Ds(e,o);return this.Cs(e,u,n,i)?S.resolve(null):(Ce()<=W.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Se(e)),this.vs(t,u,e,nh(i,yn)).next(l=>l))})}Ds(t,e){let n=new gt(qa(t));return e.forEach((i,o)=>{Er(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,n){return Ce()<=W.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Se(e)),this.ps.getDocumentsMatchingQuery(t,e,se.min(),n)}vs(t,e,n,i){return this.ps.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="LocalStore",Ff=3e8;class Uf{constructor(t,e,n,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new ct(H),this.xs=new Te(o=>Ms(o),Ls),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function Bf(r,t,e,n){return new Uf(r,t,e,n)}async function au(r,t){const e=Y(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],l=[];let f=J();for(const d of i){u.push(d.batchId);for(const _ of d.mutations)f=f.add(_.key)}for(const d of o){l.push(d.batchId);for(const _ of d.mutations)f=f.add(_.key)}return e.localDocuments.getDocuments(n,f).next(d=>({Ls:d,removedBatchIds:u,addedBatchIds:l}))})})}function uu(r){const t=Y(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function jf(r,t){const e=Y(r),n=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const l=[];t.targetChanges.forEach((_,A)=>{const R=i.get(A);if(!R)return;l.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Pi.addMatchingKeys(o,_.addedDocuments,A)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?V=V.withResumeToken(Tt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):_.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(_.resumeToken,n)),i=i.insert(A,V),function(U,k,tt){return U.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=Ff?!0:tt.addedDocuments.size+tt.modifiedDocuments.size+tt.removedDocuments.size>0}(R,V,_)&&l.push(e.Pi.updateTargetData(o,V))});let f=ue(),d=J();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),l.push(qf(o,u,t.documentUpdates).next(_=>{f=_.ks,d=_.qs})),!n.isEqual(B.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next(A=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(_)}return S.waitFor(l).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,f,d)).next(()=>f)}).then(o=>(e.Ms=i,o))}function qf(r,t,e){let n=J(),i=J();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=ue();return e.forEach((l,f)=>{const d=o.get(l);f.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),f.isNoDocument()&&f.version.isEqual(B.min())?(t.removeEntry(l,f.readTime),u=u.insert(l,f)):!d.isValidDocument()||f.version.compareTo(d.version)>0||f.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(f),u=u.insert(l,f)):N(zs,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",f.version)}),{ks:u,qs:i}})}function $f(r,t){const e=Y(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Pi.getTargetData(n,t).next(o=>o?(i=o,S.resolve(i)):e.Pi.allocateTargetId(n).next(u=>(i=new Jt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Pi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(n.targetId,n),e.xs.set(t,n.targetId)),n})}async function Rs(r,t,e){const n=Y(r),i=n.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!He(u))throw u;N(zs,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ms=n.Ms.remove(t),n.xs.delete(i.target)}function zo(r,t,e){const n=Y(r);let i=B.min(),o=J();return n.persistence.runTransaction("Execute query","readwrite",u=>function(f,d,_){const A=Y(f),R=A.xs.get(_);return R!==void 0?S.resolve(A.Ms.get(R)):A.Pi.getTargetData(d,_)}(n,u,Bt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(u,l.targetId).next(f=>{o=f})}).next(()=>n.Fs.getDocumentsMatchingQuery(u,t,e?i:B.min(),e?o:J())).next(l=>(zf(n,Nh(t),l),{documents:l,Qs:o})))}function zf(r,t,e){let n=r.Os.get(t)||B.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Os.set(t,n)}class Ho{constructor(){this.activeTargetIds=Fh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hf{constructor(){this.Mo=new Ho,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Ho,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="ConnectivityMonitor";class Ko{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(Go,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(Go,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn=null;function Cs(){return Wn===null?Wn=function(){return 268435456+Math.round(2147483648*Math.random())}():Wn++,"0x"+Wn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="RestConnection",Kf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Qf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===or?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(t,e,n,i,o){const u=Cs(),l=this.zo(t,e.toUriEncodedString());N(rs,`Sending RPC '${t}' ${u}:`,l,n);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:d}=new URL(l),_=Ds(d);return this.Jo(t,l,f,n,_).then(A=>(N(rs,`Received RPC '${t}' ${u}: `,A),A),A=>{throw Me(rs,`RPC '${t}' ${u} failed with error: `,A,"url: ",l,"request:",n),A})}Ho(t,e,n,i,o,u){return this.Go(t,e,n,i,o)}jo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ze}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}zo(t,e){const n=Kf[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class Yf extends Qf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const u=Cs();return new Promise((l,f)=>{const d=new Ta;d.setWithCredentials(!0),d.listenOnce(va.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Xn.NO_ERROR:const A=d.getResponseJson();N(At,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),l(A);break;case Xn.TIMEOUT:N(At,`RPC '${t}' ${u} timed out`),f(new M(D.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const R=d.getStatus();if(N(At,`RPC '${t}' ${u} failed with status:`,R,"response text:",d.getResponseText()),R>0){let V=d.getResponseJson();Array.isArray(V)&&(V=V[0]);const O=V?.error;if(O&&O.status&&O.message){const U=function(tt){const X=tt.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(X)>=0?X:D.UNKNOWN}(O.status);f(new M(U,O.message))}else f(new M(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new M(D.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:t,streamId:u,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(At,`RPC '${t}' ${u} completed.`)}});const _=JSON.stringify(i);N(At,`RPC '${t}' ${u} sending request:`,i),d.send(e,"POST",_,n,15)})}T_(t,e,n){const i=Cs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Aa(),l=wa(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,n),f.encodeInitMessageHeaders=!0;const _=o.join("");N(At,`Creating RPC '${t}' stream ${i}: ${_}`,f);const A=u.createWebChannel(_,f);this.I_(A);let R=!1,V=!1;const O=new Wf({Yo:k=>{V?N(At,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(R||(N(At,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),N(At,`RPC '${t}' stream ${i} sending:`,k),A.send(k))},Zo:()=>A.close()}),U=(k,tt,X)=>{k.listen(tt,G=>{try{X(G)}catch(lt){setTimeout(()=>{throw lt},0)}})};return U(A,un.EventType.OPEN,()=>{V||(N(At,`RPC '${t}' stream ${i} transport opened.`),O.o_())}),U(A,un.EventType.CLOSE,()=>{V||(V=!0,N(At,`RPC '${t}' stream ${i} transport closed`),O.a_(),this.E_(A))}),U(A,un.EventType.ERROR,k=>{V||(V=!0,Me(At,`RPC '${t}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),O.a_(new M(D.UNAVAILABLE,"The operation could not be completed")))}),U(A,un.EventType.MESSAGE,k=>{if(!V){const tt=k.data[0];it(!!tt,16349);const X=tt,G=X?.error||X[0]?.error;if(G){N(At,`RPC '${t}' stream ${i} received error:`,G);const lt=G.status;let z=function(p){const g=ht[p];if(g!==void 0)return Ya(g)}(lt),pt=G.message;z===void 0&&(z=D.INTERNAL,pt="Unknown error status: "+lt+" with message "+G.message),V=!0,O.a_(new M(z,pt)),A.close()}else N(At,`RPC '${t}' stream ${i} received:`,tt),O.u_(tt)}}),U(l,Ia.STAT_EVENT,k=>{k.stat===hs.PROXY?N(At,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===hs.NOPROXY&&N(At,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.__()},0),O}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(r){return new nf(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="PersistentStream";class Xf{constructor(t,e,n,i,o,u,l,f){this.Mi=t,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Gt(e.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.D_===e&&this.G_(n,i)},n=>{t(()=>{const i=new M(D.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{n(()=>this.z_(i))}),this.stream.onMessage(i=>{n(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return N(Qo,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(N(Qo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jf extends Xf{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=uf(this.serializer,t),n=function(o){if(!("targetChange"in o))return B.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?B.min():u.readTime?De(u.readTime):B.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=Bo(this.serializer),e.addTarget=function(o,u){let l;const f=u.target;if(l=Es(f)?{documents:cf(o,f)}:{query:lf(o,f).ft},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=sf(o,u.resumeToken);const d=ws(o,u.expectedCount);d!==null&&(l.expectedCount=d)}else if(u.snapshotVersion.compareTo(B.min())>0){l.readTime=rf(o,u.snapshotVersion.toTimestamp());const d=ws(o,u.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const n=ff(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=Bo(this.serializer),e.removeTarget=t,this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{}class td extends Zf{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new M(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Go(t,As(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(D.UNKNOWN,o.toString())})}Ho(t,e,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.Ho(t,As(e,n),i,u,l,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new M(D.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ed{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gt(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="RemoteStore";class nd{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(u=>{n.enqueueAndForget(async()=>{Cn(this)&&(N(je,"Restarting streams for network reachability change."),await async function(f){const d=Y(f);d.Ea.add(4),await Rn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await wr(d)}(this))})}),this.Ra=new ed(n,i)}}async function wr(r){if(Cn(r))for(const t of r.da)await t(!0)}async function Rn(r){for(const t of r.da)await t(!1)}function hu(r,t){const e=Y(r);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Qs(e)?Ks(e):Ge(e).O_()&&Gs(e,t))}function Hs(r,t){const e=Y(r),n=Ge(e);e.Ia.delete(t),n.O_()&&fu(e,t),e.Ia.size===0&&(n.O_()?n.L_():Cn(e)&&e.Ra.set("Unknown"))}function Gs(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ge(r).Y_(t)}function fu(r,t){r.Va.Ue(t),Ge(r).Z_(t)}function Ks(r){r.Va=new Jh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),Ge(r).start(),r.Ra.ua()}function Qs(r){return Cn(r)&&!Ge(r).x_()&&r.Ia.size>0}function Cn(r){return Y(r).Ea.size===0}function du(r){r.Va=void 0}async function rd(r){r.Ra.set("Online")}async function sd(r){r.Ia.forEach((t,e)=>{Gs(r,t)})}async function id(r,t){du(r),Qs(r)?(r.Ra.ha(t),Ks(r)):r.Ra.set("Unknown")}async function od(r,t,e){if(r.Ra.set("Online"),t instanceof Ja&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const l of o.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,u),i.Ia.delete(l),i.Va.removeTarget(l))}(r,t)}catch(n){N(je,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Wo(r,n)}else if(t instanceof tr?r.Va.Ze(t):t instanceof Xa?r.Va.st(t):r.Va.tt(t),!e.isEqual(B.min()))try{const n=await uu(r.localStore);e.compareTo(n)>=0&&await function(o,u){const l=o.Va.Tt(u);return l.targetChanges.forEach((f,d)=>{if(f.resumeToken.approximateByteSize()>0){const _=o.Ia.get(d);_&&o.Ia.set(d,_.withResumeToken(f.resumeToken,u))}}),l.targetMismatches.forEach((f,d)=>{const _=o.Ia.get(f);if(!_)return;o.Ia.set(f,_.withResumeToken(Tt.EMPTY_BYTE_STRING,_.snapshotVersion)),fu(o,f);const A=new Jt(_.target,f,d,_.sequenceNumber);Gs(o,A)}),o.remoteSyncer.applyRemoteEvent(l)}(r,e)}catch(n){N(je,"Failed to raise snapshot:",n),await Wo(r,n)}}async function Wo(r,t,e){if(!He(t))throw t;r.Ea.add(1),await Rn(r),r.Ra.set("Offline"),e||(e=()=>uu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(je,"Retrying IndexedDB access"),await e(),r.Ea.delete(1),await wr(r)})}async function Yo(r,t){const e=Y(r);e.asyncQueue.verifyOperationInProgress(),N(je,"RemoteStore received new credentials");const n=Cn(e);e.Ea.add(3),await Rn(e),n&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await wr(e)}async function ad(r,t){const e=Y(r);t?(e.Ea.delete(2),await wr(e)):t||(e.Ea.add(2),await Rn(e),e.Ra.set("Unknown"))}function Ge(r){return r.ma||(r.ma=function(e,n,i){const o=Y(e);return o.sa(),new Jf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Xo:rd.bind(null,r),t_:sd.bind(null,r),r_:id.bind(null,r),H_:od.bind(null,r)}),r.da.push(async t=>{t?(r.ma.B_(),Qs(r)?Ks(r):r.Ra.set("Unknown")):(await r.ma.stop(),du(r))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new _e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,l=new Ws(t,e,u,i,o);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pu(r,t){if(Gt("AsyncQueue",`${t}: ${r}`),He(r))return new M(D.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static emptySet(t){return new Ne(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||F.comparator(e.key,n.key):(e,n)=>F.comparator(e.key,n.key),this.keyedMap=cn(),this.sortedSet=new ct(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ne;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.ga=new ct(F.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?t.type!==0&&n.type===3?this.ga=this.ga.insert(e,t):t.type===3&&n.type!==1?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ga=this.ga.remove(e):t.type===1&&n.type===2?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):j(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class qe{constructor(t,e,n,i,o,u,l,f,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=f,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(l=>{u.push({type:0,doc:l})}),new qe(t,e,Ne.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class cd{constructor(){this.queries=Jo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const i=Y(e),o=i.queries;i.queries=Jo(),o.forEach((u,l)=>{for(const f of l.Sa)f.onError(n)})})(this,new M(D.ABORTED,"Firestore shutting down"))}}function Jo(){return new Te(r=>ja(r),yr)}async function ld(r,t){const e=Y(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(n=2):(o=new ud,n=t.Da()?0:1);try{switch(n){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const l=pu(u,`Initialization of query '${Se(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Ys(e)}async function hd(r,t){const e=Y(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.Sa.indexOf(t);u>=0&&(o.Sa.splice(u,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function fd(r,t){const e=Y(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const l of u.Sa)l.Fa(i)&&(n=!0);u.wa=i}}n&&Ys(e)}function dd(r,t,e){const n=Y(r),i=n.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);n.queries.delete(t)}function Ys(r){r.Ca.forEach(t=>{t.next()})}var Ss,Zo;(Zo=Ss||(Ss={})).Ma="default",Zo.Cache="cache";class pd{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new qe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const n=e!=="Offline";return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ss.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.key=t}}class gu{constructor(t){this.key=t}}class md{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=J(),this.mutatedKeys=J(),this.eu=qa(t),this.tu=new Ne(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Xo,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,l=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const R=i.get(_),V=Er(this.query,A)?A:null,O=!!R&&this.mutatedKeys.has(R.key),U=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let k=!1;R&&V?R.data.isEqual(V.data)?O!==U&&(n.track({type:3,doc:V}),k=!0):this.su(R,V)||(n.track({type:2,doc:V}),k=!0,(f&&this.eu(V,f)>0||d&&this.eu(V,d)<0)&&(l=!0)):!R&&V?(n.track({type:0,doc:V}),k=!0):R&&!V&&(n.track({type:1,doc:R}),k=!0,(f||d)&&(l=!0)),k&&(V?(u=u.add(V),o=U?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{tu:u,iu:n,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const u=t.iu.ya();u.sort((_,A)=>function(V,O){const U=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:k})}};return U(V)-U(O)}(_.type,A.type)||this.eu(_.doc,A.doc)),this.ou(n),i=i??!1;const l=e&&!i?this._u():[],f=this.Xa.size===0&&this.current&&!i?1:0,d=f!==this.Za;return this.Za=f,u.length!==0||d?{snapshot:new qe(this.query,t.tu,o,u,t.mutatedKeys,f===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Xo,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=J(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const e=[];return t.forEach(n=>{this.Xa.has(n)||e.push(new gu(n))}),this.Xa.forEach(n=>{t.has(n)||e.push(new mu(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=J();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return qe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Xs="SyncEngine";class gd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _d{constructor(t){this.key=t,this.hu=!1}}class yd{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Te(l=>ja(l),yr),this.Iu=new Map,this.Eu=new Set,this.du=new ct(F.comparator),this.Au=new Map,this.Ru=new js,this.Vu={},this.mu=new Map,this.fu=Be.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ed(r,t,e=!0){const n=vu(r);let i;const o=n.Tu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await _u(n,t,e,!0),i}async function Td(r,t){const e=vu(r);await _u(e,t,!0,!1)}async function _u(r,t,e,n){const i=await $f(r.localStore,Bt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await vd(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&hu(r.remoteStore,i),l}async function vd(r,t,e,n,i){r.pu=(A,R,V)=>async function(U,k,tt,X){let G=k.view.ru(tt);G.Cs&&(G=await zo(U.localStore,k.query,!1).then(({documents:v})=>k.view.ru(v,G)));const lt=X&&X.targetChanges.get(k.targetId),z=X&&X.targetMismatches.get(k.targetId)!=null,pt=k.view.applyChanges(G,U.isPrimaryClient,lt,z);return ea(U,k.targetId,pt.au),pt.snapshot}(r,A,R,V);const o=await zo(r.localStore,t,!0),u=new md(t,o.Qs),l=u.ru(o.documents),f=An.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(l,r.isPrimaryClient,f);ea(r,e,d.au);const _=new gd(t,e,u);return r.Tu.set(t,_),r.Iu.has(e)?r.Iu.get(e).push(t):r.Iu.set(e,[t]),d.snapshot}async function Id(r,t,e){const n=Y(r),i=n.Tu.get(t),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter(u=>!yr(u,t))),void n.Tu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Rs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Hs(n.remoteStore,i.targetId),Ps(n,i.targetId)}).catch(dr)):(Ps(n,i.targetId),await Rs(n.localStore,i.targetId,!0))}async function wd(r,t){const e=Y(r),n=e.Tu.get(t),i=e.Iu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Hs(e.remoteStore,n.targetId))}async function yu(r,t){const e=Y(r);try{const n=await jf(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Au.get(o);u&&(it(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?it(u.hu,14607):i.removedDocuments.size>0&&(it(u.hu,42227),u.hu=!1))}),await Tu(e,n,t)}catch(n){await dr(n)}}function ta(r,t,e){const n=Y(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Tu.forEach((o,u)=>{const l=u.view.va(t);l.snapshot&&i.push(l.snapshot)}),function(u,l){const f=Y(u);f.onlineState=l;let d=!1;f.queries.forEach((_,A)=>{for(const R of A.Sa)R.va(l)&&(d=!0)}),d&&Ys(f)}(n.eventManager,t),i.length&&n.Pu.H_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Ad(r,t,e){const n=Y(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Au.get(t),o=i&&i.key;if(o){let u=new ct(F.comparator);u=u.insert(o,Ct.newNoDocument(o,B.min()));const l=J().add(o),f=new Ir(B.min(),new Map,new ct(H),u,l);await yu(n,f),n.du=n.du.remove(o),n.Au.delete(t),Js(n)}else await Rs(n.localStore,t,!1).then(()=>Ps(n,t,e)).catch(dr)}function Ps(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Iu.get(t))r.Tu.delete(n),e&&r.Pu.yu(n,e);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach(n=>{r.Ru.containsKey(n)||Eu(r,n)})}function Eu(r,t){r.Eu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Hs(r.remoteStore,e),r.du=r.du.remove(t),r.Au.delete(e),Js(r))}function ea(r,t,e){for(const n of e)n instanceof mu?(r.Ru.addReference(n.key,t),Rd(r,n)):n instanceof gu?(N(Xs,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,t),r.Ru.containsKey(n.key)||Eu(r,n.key)):j(19791,{wu:n})}function Rd(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Eu.has(n)||(N(Xs,"New document in limbo: "+e),r.Eu.add(n),Js(r))}function Js(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const e=new F(st.fromString(t)),n=r.fu.next();r.Au.set(n,new _d(e)),r.du=r.du.insert(e,n),hu(r.remoteStore,new Jt(Bt(Ba(e.path)),n,"TargetPurposeLimboResolution",pr.ce))}}async function Tu(r,t,e){const n=Y(r),i=[],o=[],u=[];n.Tu.isEmpty()||(n.Tu.forEach((l,f)=>{u.push(n.pu(f,t,e).then(d=>{if((d||e)&&n.isPrimaryClient){const _=d?!d.fromCache:e?.targetChanges.get(f.targetId)?.current;n.sharedClientState.updateQueryState(f.targetId,_?"current":"not-current")}if(d){i.push(d);const _=$s.As(f.targetId,d);o.push(_)}}))}),await Promise.all(u),n.Pu.H_(i),await async function(f,d){const _=Y(f);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>S.forEach(d,R=>S.forEach(R.Es,V=>_.persistence.referenceDelegate.addReference(A,R.targetId,V)).next(()=>S.forEach(R.ds,V=>_.persistence.referenceDelegate.removeReference(A,R.targetId,V)))))}catch(A){if(!He(A))throw A;N(zs,"Failed to update sequence numbers: "+A)}for(const A of d){const R=A.targetId;if(!A.fromCache){const V=_.Ms.get(R),O=V.snapshotVersion,U=V.withLastLimboFreeSnapshotVersion(O);_.Ms=_.Ms.insert(R,U)}}}(n.localStore,o))}async function Cd(r,t){const e=Y(r);if(!e.currentUser.isEqual(t)){N(Xs,"User change. New user:",t.toKey());const n=await au(e.localStore,t);e.currentUser=t,function(o,u){o.mu.forEach(l=>{l.forEach(f=>{f.reject(new M(D.CANCELLED,u))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Tu(e,n.Ls)}}function Sd(r,t){const e=Y(r),n=e.Au.get(t);if(n&&n.hu)return J().add(n.key);{let i=J();const o=e.Iu.get(t);if(!o)return i;for(const u of o){const l=e.Tu.get(u);i=i.unionWith(l.view.nu)}return i}}function vu(r){const t=Y(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=yu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ad.bind(null,t),t.Pu.H_=fd.bind(null,t.eventManager),t.Pu.yu=dd.bind(null,t.eventManager),t}class fr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=cu(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Bf(this.persistence,new Lf,t.initialUser,this.serializer)}Cu(t){return new ou(qs.mi,this.serializer)}Du(t){return new Hf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fr.provider={build:()=>new fr};class Pd extends fr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){it(this.persistence.referenceDelegate instanceof hr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new If(n,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new ou(n=>hr.mi(n,e),this.serializer)}}class Vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ta(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cd.bind(null,this.syncEngine),await ad(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new cd}()}createDatastore(t){const e=cu(t.databaseInfo.databaseId),n=function(o){return new Yf(o)}(t.databaseInfo);return function(o,u,l,f){return new td(o,u,l,f)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,l){return new nd(n,i,o,u,l)}(this.localStore,this.datastore,t.asyncQueue,e=>ta(this.syncEngine,e,0),function(){return Ko.v()?new Ko:new Gf}())}createSyncEngine(t,e){return function(i,o,u,l,f,d,_){const A=new yd(i,o,u,l,f,d);return _&&(A.gu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(e){const n=Y(e);N(je,"RemoteStore shutting down."),n.Ea.add(5),await Rn(n),n.Aa.shutdown(),n.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Vs.provider={build:()=>new Vs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Gt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="FirestoreClient";class bd{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=Sa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{N(ce,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(N(ce,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=pu(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function is(r,t){r.asyncQueue.verifyOperationInProgress(),N(ce,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await au(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function na(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Dd(r);N(ce,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Yo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Yo(t.remoteStore,i)),r._onlineComponents=t}async function Dd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(ce,"Using user provided OfflineComponentProvider");try{await is(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Me("Error using user provided cache. Falling back to memory cache: "+e),await is(r,new fr)}}else N(ce,"Using default OfflineComponentProvider"),await is(r,new Pd(void 0));return r._offlineComponents}async function Nd(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(ce,"Using user provided OnlineComponentProvider"),await na(r,r._uninitializedComponentsProvider._online)):(N(ce,"Using default OnlineComponentProvider"),await na(r,new Vs))),r._onlineComponents}async function kd(r){const t=await Nd(r),e=t.eventManager;return e.onListen=Ed.bind(null,t.syncEngine),e.onUnlisten=Id.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Td.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=wd.bind(null,t.syncEngine),e}function Od(r,t,e={}){const n=new _e;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,l,f,d){const _=new Vd({next:R=>{_.Nu(),u.enqueueAndForget(()=>hd(o,A)),R.fromCache&&f.source==="server"?d.reject(new M(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),A=new pd(l,_,{includeMetadataChanges:!0,qa:!0});return ld(o,A)}(await kd(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="firestore.googleapis.com",sa=!0;class ia{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new M(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wu,this.ssl=sa}else this.host=t.host,this.ssl=t.ssl??sa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=iu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Tf)throw new M(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iu(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zs{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ia({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ia(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new $l;switch(n.type){case"firstParty":return new Kl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ra.get(e);n&&(N("ComponentProvider","Removing Datastore"),ra.delete(e),n.terminate())}(this),Promise.resolve()}}function xd(r,t,e,n={}){r=ds(r,Zs);const i=Ds(t),o=r._getSettings(),u={...o,emulatorOptions:r._getEmulatorOptions()},l=`${t}:${e}`;i&&(gc(`https://${l}`),Tc("Firestore",!0)),o.host!==wu&&o.host!==l&&Me("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:l,ssl:i,emulatorOptions:n};if(!rr(f,u)&&(r._setSettings(f),n.mockUserToken)){let d,_;if(typeof n.mockUserToken=="string")d=n.mockUserToken,_=Rt.MOCK_USER;else{d=_c(n.mockUserToken,r._app?.options.projectId);const A=n.mockUserToken.sub||n.mockUserToken.user_id;if(!A)throw new M(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Rt(A)}r._authCredentials=new zl(new Ca(d,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ar(this.firestore,t,this._query)}}class Ot{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ke(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ot(this.firestore,t,this._key)}toJSON(){return{type:Ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(In(e,Ot._jsonSchema))return new Ot(t,n||null,new F(st.fromString(e.referencePath)))}}Ot._jsonSchemaVersion="firestore/documentReference/1.0",Ot._jsonSchema={type:dt("string",Ot._jsonSchemaVersion),referencePath:dt("string")};class ke extends Ar{constructor(t,e,n){super(t,e,Ba(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ot(this.firestore,null,new F(t))}withConverter(t){return new ke(this.firestore,t,this._path)}}function Wd(r,t,...e){if(r=Vc(r),r instanceof Zs){const n=st.fromString(t,...e);return yo(n),new ke(r,null,n)}{if(!(r instanceof Ot||r instanceof ke))throw new M(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(st.fromString(t,...e));return yo(n),new ke(r.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="AsyncQueue";class aa{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lu(this,"async_queue_retry"),this._c=()=>{const n=ss();n&&N(oa,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=t;const e=ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ss();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new _e;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!He(t))throw t;N(oa,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(n=>{throw this.nc=n,this.rc=!1,Gt("INTERNAL UNHANDLED ERROR: ",ua(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Ws.createAndSchedule(this,t,e,n,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&j(47125,{Pc:ua(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ua(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Au extends Zs{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new aa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new aa(t),this._firestoreClient=void 0,await t}}}function Yd(r,t){const e=typeof r=="object"?r:Nl(),n=typeof r=="string"?r:or,i=Cl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=pc("firestore");o&&xd(i,...o)}return i}function Md(r){if(r._terminated)throw new M(D.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ld(r),r._firestoreClient}function Ld(r){const t=r._freezeSettings(),e=function(i,o,u,l){return new dh(i,o,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Iu(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)}(r._databaseId,r._app?.options.appId||"",r._persistenceKey,t);r._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new bd(r._authCredentials,r._appCheckCredentials,r._queue,e,r._componentsProvider&&function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ut(Tt.fromBase64String(t))}catch(e){throw new M(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ut(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(In(t,Ut._jsonSchema))return Ut.fromBase64String(t.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:dt("string",Ut._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ne._jsonSchemaVersion}}static fromJSON(t){if(In(t,ne._jsonSchema))return new ne(t.latitude,t.longitude)}}ne._jsonSchemaVersion="firestore/geoPoint/1.0",ne._jsonSchema={type:dt("string",ne._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:re._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(In(t,re._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new re(t.vectorValues);throw new M(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}re._jsonSchemaVersion="firestore/vectorValue/1.0",re._jsonSchema={type:dt("string",re._jsonSchemaVersion),vectorValues:dt("object")};const Fd=new RegExp("[~\\*/\\[\\]]");function Ud(r,t,e){if(t.search(Fd)>=0)throw ca(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new Ru(...t.split("."))._internalPath}catch{throw ca(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function ca(r,t,e,n,i){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new M(D.INVALID_ARGUMENT,o+r+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Bd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Su("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Bd extends Cu{data(){return super.data()}}function Su(r,t){return typeof t=="string"?Ud(r,t):t instanceof Ru?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qd{convertValue(t,e="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return wn(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){const e=t.fields?.[ms].arrayValue?.values?.map(n=>ut(n.doubleValue));return new re(e)}convertGeoPoint(t){return new ne(ut(t.latitude),ut(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(En(t));default:return null}}convertTimestamp(t){const e=ie(t);return new ft(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=st.fromString(t);it(su(n),9688,{name:t});const i=new Tn(n.get(1),n.get(3)),o=new F(n.popFirst(5));return i.isEqual(e)||Gt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class Yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Oe extends Cu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new er(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Su("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Oe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Oe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Oe._jsonSchema={type:dt("string",Oe._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class er extends Oe{data(t={}){return super.data(t)}}class xe{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Yn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new er(this._firestore,this._userDataWriter,n.key,n,new Yn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(l=>{const f=new er(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Yn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const f=new er(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Yn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return l.type!==0&&(d=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),_=u.indexOf(l.doc.key)),{type:$d(l.type),doc:f,oldIndex:d,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=xe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Sa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function $d(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:r})}}xe._jsonSchemaVersion="firestore/querySnapshot/1.0",xe._jsonSchema={type:dt("string",xe._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class zd extends qd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ut(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ot(this.firestore,null,e)}}function Xd(r){r=ds(r,Ar);const t=ds(r.firestore,Au),e=Md(t),n=new zd(t);return jd(r._query),Od(e,r._query).then(i=>new xe(t,n,r,i))}(function(t,e=!0){(function(i){ze=i})(bl),ir(new gn("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),l=new Au(new Hl(n.getProvider("auth-internal")),new Ql(u,n.getProvider("app-check-internal")),function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tn(d.options.projectId,_)}(u,i),u);return o={useFetchStreams:e,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),be(po,mo,t),be(po,mo,"esm2020")})();var Hd="firebase",Gd="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be(Hd,Gd,"app");export{Xd as a,Wd as c,Yd as g,Dl as i,Kd as r};
