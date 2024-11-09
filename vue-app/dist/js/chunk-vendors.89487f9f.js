"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[504],{4046:function(e,t,n){n.d(t,{Am:function(){return F},FA:function(){return N},Fy:function(){return w},I9:function(){return B},Im:function(){return j},Ku:function(){return K},T9:function(){return v},Tj:function(){return g},Uj:function(){return c},XA:function(){return y},ZQ:function(){return _},bD:function(){return M},c1:function(){return T},cY:function(){return b},eX:function(){return k},g:function(){return x},hp:function(){return V},jZ:function(){return E},lT:function(){return A},lV:function(){return O},nr:function(){return R},sr:function(){return I},tD:function(){return $},u:function(){return l},yU:function(){return m},zW:function(){return C}});n(4114),n(4979);
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[l],n[u],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;const c=i<e.length,l=c?n[e.charAt(i)]:64;++i;const u=i<e.length,h=u?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==l||null==h)throw new s;const f=t<<2|a>>4;if(r.push(f),64!==l){const e=a<<4&240|l>>2;if(r.push(e),64!==h){const e=l<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return o.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const h=()=>u().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},d=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||f()||d()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
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
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function S(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function I(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function O(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function R(){return!S()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function C(){try{return"object"===typeof indexedDB}catch(e){return!1}}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
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
 */
const P="FirebaseError";class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=P,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?L(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new x(r,s,n);return a}}function L(e,t){return e.replace(D,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
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
 */function j(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(U(n)&&U(o)){if(!M(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function F(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function V(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function $(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=W),void 0===r.error&&(r.error=W),void 0===r.complete&&(r.complete=W);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function W(){}
/**
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
 */
/**
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
 */
function K(e){return e&&e._delegate?e._delegate:e}},1614:function(e,t,n){n.d(t,{Do:function(){return Pe},a:function(){return st},li:function(){return Fe},nA:function(){return Qe}});n(4114);var r=n(6768),i=n(144),o=n(5130);const s=(e,t)=>{for(const n of Object.keys(t))e.on(n,t[n])},a=e=>{for(const t of Object.keys(e)){const n=e[t];n&&l(n.cancel)&&n.cancel()}},c=e=>e&&"function"==typeof e.charAt?e.charAt(0).toUpperCase()+e.slice(1):e,l=e=>"function"==typeof e,u=(e,t,n)=>{for(const i in n){const o="set"+c(i);e[o]?(0,r.wB)((()=>n[i]),((t,n)=>{e[o](t,n)})):t[o]&&(0,r.wB)((()=>n[i]),(e=>{t[o](e)}))}},h=(e,t,n={})=>{const r={...n};for(const i in e){const n=t[i],o=e[i];n&&(n&&!0===n.custom||void 0!==o&&(r[i]=o))}return r},f=e=>{const t={},n={};for(const r in e)if(r.startsWith("on")&&!r.startsWith("onUpdate")&&"onReady"!==r){const n=r.slice(2).toLocaleLowerCase();t[n]=e[r]}else n[r]=e[r];return{listeners:t,attrs:n}},d=async e=>{const t=await Promise.all([n.e(249).then(n.t.bind(n,8249,17)),n.e(24).then(n.t.bind(n,7024,17)),n.e(71).then(n.t.bind(n,1071,17))]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},p=e=>{const t=(0,i.KR)(((...t)=>console.warn(`Method ${e} has been invoked without being replaced`))),n=(...e)=>t.value(...e);return n.wrapped=t,(0,r.Gt)(e,n),n},g=(e,t)=>e.wrapped.value=t,m="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g||globalThis,v=e=>{const t=(0,r.WQ)(e);if(void 0===t)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},y=(Symbol.toStringTag,Symbol("useGlobalLeaflet")),b=Symbol("addLayer"),w=Symbol("removeLayer"),_=Symbol("registerControl"),E=Symbol("registerLayerControl"),S=Symbol("canSetParentHtml"),T=Symbol("setParentHtml"),I=Symbol("setIcon"),O=Symbol("bindPopup"),A=Symbol("bindTooltip"),R=Symbol("unbindPopup"),C=Symbol("unbindTooltip"),k=(Symbol.toStringTag,{options:{type:Object,default:()=>({}),custom:!0}}),P=e=>({options:e.options,methods:{}}),x=Object.freeze(Object.defineProperty({__proto__:null,componentProps:k,setupComponent:P},Symbol.toStringTag,{value:"Module"})),N={...k,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},L=(e,t,n)=>{const i=v(b),o=v(w),{options:s,methods:a}=P(e),c=h(e,N,s),u=()=>i({leafletObject:t.value}),f=()=>o({leafletObject:t.value}),d={...a,setAttribution(n){f(),t.value.options.attribution=n,e.visible&&u()},setName(){f(),e.visible&&u()},setLayerType(){f(),e.visible&&u()},setVisible(e){t.value&&(e?u():f())},bindPopup(e){t.value&&l(t.value.bindPopup)?t.value.bindPopup(e):console.warn("Attempt to bind popup before bindPopup method available on layer.")},bindTooltip(e){t.value&&l(t.value.bindTooltip)?t.value.bindTooltip(e):console.warn("Attempt to bind tooltip before bindTooltip method available on layer.")},unbindTooltip(){t.value&&(l(t.value.closeTooltip)&&t.value.closeTooltip(),l(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(l(t.value.closePopup)&&t.value.closePopup(),l(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(e){n.emit("update:visible",e)}};return(0,r.Gt)(O,d.bindPopup),(0,r.Gt)(A,d.bindTooltip),(0,r.Gt)(R,d.unbindPopup),(0,r.Gt)(C,d.unbindTooltip),(0,r.hi)((()=>{d.unbindPopup(),d.unbindTooltip(),f()})),{options:c,methods:d}},D=(e,t)=>{if(e&&t.default)return(0,r.h)("div",{style:{display:"none"}},t.default())},j=Object.freeze(Object.defineProperty({__proto__:null,layerProps:N,render:D,setupLayer:L},Symbol.toStringTag,{value:"Module"})),M={...N,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},U=(e,t,n)=>{const{options:r,methods:i}=L(e,t,n);return{options:h(e,M,r),methods:i}},F=Object.freeze(Object.defineProperty({__proto__:null,interactiveLayerProps:M,setupInteractiveLayer:U},Symbol.toStringTag,{value:"Module"})),B={...M,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},V=(e,t,n)=>{const{options:i,methods:o}=U(e,t,n),s=h(e,B,i),a=v(w),c={...o,setStroke(e){t.value.setStyle({stroke:e})},setColor(e){t.value.setStyle({color:e})},setWeight(e){t.value.setStyle({weight:e})},setOpacity(e){t.value.setStyle({opacity:e})},setLineCap(e){t.value.setStyle({lineCap:e})},setLineJoin(e){t.value.setStyle({lineJoin:e})},setDashArray(e){t.value.setStyle({dashArray:e})},setDashOffset(e){t.value.setStyle({dashOffset:e})},setFill(e){t.value.setStyle({fill:e})},setFillColor(e){t.value.setStyle({fillColor:e})},setFillOpacity(e){t.value.setStyle({fillOpacity:e})},setFillRule(e){t.value.setStyle({fillRule:e})},setClassName(e){t.value.setStyle({className:e})}};return(0,r.xo)((()=>{a({leafletObject:t.value})})),{options:s,methods:c}},$=Object.freeze(Object.defineProperty({__proto__:null,pathProps:B,setupPath:V},Symbol.toStringTag,{value:"Module"})),z={...B,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}},H=(e,t,n)=>{const{options:r,methods:i}=V(e,t,n),o=h(e,z,r),s={...i,setRadius(e){t.value.setRadius(e)},setLatLng(e){t.value.setLatLng(e)}};return{options:o,methods:s}},W=Object.freeze(Object.defineProperty({__proto__:null,circleMarkerProps:z,setupCircleMarker:H},Symbol.toStringTag,{value:"Module"})),K={...z,radius:{type:Number}},G=(e,t,n)=>{const{options:r,methods:i}=H(e,t,n),o=h(e,K,r),s={...i};return{options:o,methods:s}},q=Object.freeze(Object.defineProperty({__proto__:null,circleProps:K,setupCircle:G},Symbol.toStringTag,{value:"Module"})),X=((0,r.pM)({name:"LCircle",props:K,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{options:l,methods:h}=G(e,o,t);return(0,r.sV)((async()=>{const{circle:d}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(d(e.latLng,l));const{listeners:p}=f(t.attrs);o.value.on(p),u(h,o.value,e),c({...e,...h,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),(0,r.pM)({name:"LCircleMarker",props:z,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{options:l,methods:h}=H(e,o,t);return(0,r.sV)((async()=>{const{circleMarker:d}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(d(e.latLng,l));const{listeners:p}=f(t.attrs);o.value.on(p),u(h,o.value,e),c({...e,...h,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),{...k,position:{type:String}}),J=(e,t)=>{const{options:n,methods:i}=P(e),o=h(e,X,n),s={...i,setPosition(e){t.value&&t.value.setPosition(e)}};return(0,r.hi)((()=>{t.value&&t.value.remove()})),{options:o,methods:s}},Y=e=>e.default?(0,r.h)("div",{ref:"root"},e.default()):null,Z=Object.freeze(Object.defineProperty({__proto__:null,controlProps:X,renderLControl:Y,setupControl:J},Symbol.toStringTag,{value:"Module"})),Q=((0,r.pM)({name:"LControl",props:{...X,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(),a=(0,r.WQ)(y),c=v(_),{options:l,methods:h}=J(e,o);return(0,r.sV)((async()=>{const{Control:f,DomEvent:d}=a?m.L:await n.e(791).then(n.bind(n,4791)),p=f.extend({onAdd(){return s.value}});o.value=(0,i.IG)(new p(l)),u(h,o.value,e),c({leafletObject:o.value}),e.disableClickPropagation&&s.value&&d.disableClickPropagation(s.value),e.disableScrollPropagation&&s.value&&d.disableScrollPropagation(s.value),(0,r.dY)((()=>t.emit("ready",o.value)))})),{root:s,leafletObject:o}},render(){return Y(this.$slots)}}),{...X,prefix:{type:String}}),ee=(e,t)=>{const{options:n,methods:r}=J(e,t),i=h(e,Q,n),o={...r,setPrefix(e){t.value.setPrefix(e)}};return{options:i,methods:o}},te=Object.freeze(Object.defineProperty({__proto__:null,controlAttributionProps:Q,setupControlAttribution:ee},Symbol.toStringTag,{value:"Module"})),ne=((0,r.pM)({name:"LControlAttribution",props:Q,setup(e,t){const o=(0,i.KR)(),s=(0,r.WQ)(y),a=v(_),{options:c,methods:l}=ee(e,o);return(0,r.sV)((async()=>{const{control:h}=s?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(h.attribution(c)),u(l,o.value,e),a({leafletObject:o.value}),(0,r.dY)((()=>t.emit("ready",o.value)))})),{leafletObject:o}},render(){return null}}),{...X,collapsed:{type:Boolean,default:void 0},autoZIndex:{type:Boolean,default:void 0},hideSingleBase:{type:Boolean,default:void 0},sortLayers:{type:Boolean,default:void 0},sortFunction:{type:Function}}),re=(e,t)=>{const{options:n}=J(e,t);return{options:h(e,ne,n),methods:{addLayer(e){"base"===e.layerType?t.value.addBaseLayer(e.leafletObject,e.name):"overlay"===e.layerType&&t.value.addOverlay(e.leafletObject,e.name)},removeLayer(e){t.value.removeLayer(e.leafletObject)}}}},ie=Object.freeze(Object.defineProperty({__proto__:null,controlLayersProps:ne,setupControlLayers:re},Symbol.toStringTag,{value:"Module"})),oe=((0,r.pM)({name:"LControlLayers",props:ne,setup(e,t){const o=(0,i.KR)(),s=(0,r.WQ)(y),a=v(E),{options:c,methods:l}=re(e,o);return(0,r.sV)((async()=>{const{control:h}=s?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(h.layers(void 0,void 0,c)),u(l,o.value,e),a({...e,...l,leafletObject:o.value}),(0,r.dY)((()=>t.emit("ready",o.value)))})),{leafletObject:o}},render(){return null}}),{...X,maxWidth:{type:Number},metric:{type:Boolean,default:void 0},imperial:{type:Boolean,default:void 0},updateWhenIdle:{type:Boolean,default:void 0}}),se=(e,t)=>{const{options:n,methods:r}=J(e,t);return{options:h(e,oe,n),methods:r}},ae=Object.freeze(Object.defineProperty({__proto__:null,controlScaleProps:oe,setupControlScale:se},Symbol.toStringTag,{value:"Module"})),ce=((0,r.pM)({name:"LControlScale",props:oe,setup(e,t){const o=(0,i.KR)(),s=(0,r.WQ)(y),a=v(_),{options:c,methods:l}=se(e,o);return(0,r.sV)((async()=>{const{control:h}=s?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(h.scale(c)),u(l,o.value,e),a({leafletObject:o.value}),(0,r.dY)((()=>t.emit("ready",o.value)))})),{leafletObject:o}},render(){return null}}),{...X,zoomInText:{type:String},zoomInTitle:{type:String},zoomOutText:{type:String},zoomOutTitle:{type:String}}),le=(e,t)=>{const{options:n,methods:r}=J(e,t);return{options:h(e,ce,n),methods:r}},ue=Object.freeze(Object.defineProperty({__proto__:null,controlZoomProps:ce,setupControlZoom:le},Symbol.toStringTag,{value:"Module"})),he=((0,r.pM)({name:"LControlZoom",props:ce,setup(e,t){const o=(0,i.KR)(),s=(0,r.WQ)(y),a=v(_),{options:c,methods:l}=le(e,o);return(0,r.sV)((async()=>{const{control:h}=s?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(h.zoom(c)),u(l,o.value,e),a({leafletObject:o.value}),(0,r.dY)((()=>t.emit("ready",o.value)))})),{leafletObject:o}},render(){return null}}),{...N}),fe=(e,t,n)=>{const{options:i,methods:o}=L(e,t,n),s=h(e,he,i),a={...o,addLayer(e){t.value.addLayer(e.leafletObject)},removeLayer(e){t.value.removeLayer(e.leafletObject)}};return(0,r.Gt)(b,a.addLayer),(0,r.Gt)(w,a.removeLayer),{options:s,methods:a}},de=Object.freeze(Object.defineProperty({__proto__:null,layerGroupProps:he,setupLayerGroup:fe},Symbol.toStringTag,{value:"Module"})),pe={...he},ge=(e,t,n)=>{const{options:r,methods:i}=fe(e,t,n),o=h(e,pe,r),s={...i};return{options:o,methods:s}},me=Object.freeze(Object.defineProperty({__proto__:null,featureGroupProps:pe,setupFeatureGroup:ge},Symbol.toStringTag,{value:"Module"})),ve=((0,r.pM)({props:pe,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{methods:l,options:h}=ge(e,o,t);return(0,r.sV)((async()=>{const{featureGroup:d}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(d(void 0,h));const{listeners:p}=f(t.attrs);o.value.on(p),u(l,o.value,e),c({...e,...l,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),{...he,geojson:{type:[Object,Array],custom:!0},optionsStyle:{type:Function,custom:!0}}),ye=(e,t,n)=>{const{options:r,methods:i}=fe(e,t,n),o=h(e,ve,r);Object.prototype.hasOwnProperty.call(e,"optionsStyle")&&(o.style=e.optionsStyle);const s={...i,setGeojson(e){t.value.clearLayers(),t.value.addData(e)},setOptionsStyle(e){t.value.setStyle(e)},getGeoJSONData(){return t.value.toGeoJSON()},getBounds(){return t.value.getBounds()}};return{options:o,methods:s}},be=Object.freeze(Object.defineProperty({__proto__:null,geoJSONProps:ve,setupGeoJSON:ye},Symbol.toStringTag,{value:"Module"})),we=((0,r.pM)({props:ve,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{methods:l,options:h}=ye(e,o,t);return(0,r.sV)((async()=>{const{geoJSON:d}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(d(e.geojson,h));const{listeners:p}=f(t.attrs);o.value.on(p),u(l,o.value,e),c({...e,...l,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),{...N,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}}),_e=(e,t,n)=>{const{options:i,methods:o}=L(e,t,n),s=h(e,we,i),a={...o,setTileComponent(){var e;null==(e=t.value)||e.redraw()}};return(0,r.hi)((()=>{t.value.off()})),{options:s,methods:a}},Ee=(e,t,n,i)=>e.extend({initialize(e){this.tileComponents={},this.on("tileunload",this._unloadTile),n.setOptions(this,e)},createTile(e){const n=this._tileCoordsToKey(e);this.tileComponents[n]=t.create("div");const s=(0,r.h)({setup:i,props:["coords"]},{coords:e});return(0,o.XX)(s,this.tileComponents[n]),this.tileComponents[n]},_unloadTile(e){const t=this._tileCoordsToKey(e.coords);this.tileComponents[t]&&(this.tileComponents[t].innerHTML="",this.tileComponents[t]=void 0)}}),Se=Object.freeze(Object.defineProperty({__proto__:null,CreateVueGridLayer:Ee,gridLayerProps:we,setupGridLayer:_e},Symbol.toStringTag,{value:"Module"})),Te=((0,r.pM)({props:{...we,childRender:{type:Function,required:!0}},setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(null),a=(0,i.KR)(!1),c=(0,r.WQ)(y),l=v(b),{options:h,methods:d}=_e(e,o,t);return(0,r.sV)((async()=>{const{GridLayer:s,DomUtil:p,Util:g}=c?m.L:await n.e(791).then(n.bind(n,4791)),v=Ee(s,p,g,e.childRender);o.value=(0,i.IG)(new v(h));const{listeners:y}=f(t.attrs);o.value.on(y),u(d,o.value,e),l({...e,...d,leafletObject:o.value}),a.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{root:s,ready:a,leafletObject:o}},render(){return this.ready?(0,r.h)("div",{style:{display:"none"},ref:"root"}):null}}),{iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}}),Ie=Object.freeze(Object.defineProperty({__proto__:null,iconProps:Te},Symbol.toStringTag,{value:"Module"})),Oe=((0,r.pM)({name:"LIcon",props:{...Te,...k},setup(e,t){const o=(0,i.KR)(),s=(0,r.WQ)(y),a=v(S),c=v(T),l=v(I);let d,p,g,b,w;const _=(n,r,i)=>{const o=n&&n.innerHTML;if(!r)return void(i&&w&&a()&&c(o));const{listeners:s}=f(t.attrs);w&&p(w,s);const{options:u}=P(e),m=h(e,Te,u);o&&(m.html=o),w=m.html?g(m):b(m),d(w,s),l(w)},E=()=>{(0,r.dY)((()=>_(o.value,!0,!1)))},O=()=>{(0,r.dY)((()=>_(o.value,!1,!0)))},A={setIconUrl:E,setIconRetinaUrl:E,setIconSize:E,setIconAnchor:E,setPopupAnchor:E,setTooltipAnchor:E,setShadowUrl:E,setShadowRetinaUrl:E,setShadowAnchor:E,setBgPos:E,setClassName:E,setHtml:E};return(0,r.sV)((async()=>{const{DomEvent:t,divIcon:r,icon:i}=s?m.L:await n.e(791).then(n.bind(n,4791));d=t.on,p=t.off,g=r,b=i,u(A,{},e),new MutationObserver(O).observe(o.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),E()})),{root:o}},render(){const e=this.$slots.default?this.$slots.default():void 0;return(0,r.h)("div",{ref:"root"},e)}}),{...N,opacity:{type:Number},alt:{type:String},interactive:{type:Boolean,default:void 0},crossOrigin:{type:Boolean,default:void 0},errorOverlayUrl:{type:String},zIndex:{type:Number},className:{type:String},url:{type:String,required:!0,custom:!0},bounds:{type:[Array,Object],required:!0,custom:!0}}),Ae=(e,t,n)=>{const{options:r,methods:i}=L(e,t,n),o=h(e,Oe,r),s={...i,setOpacity(e){return t.value.setOpacity(e)},setUrl(e){return t.value.setUrl(e)},setBounds(e){return t.value.setBounds(e)},getBounds(){return t.value.getBounds()},getElement(){return t.value.getElement()},bringToFront(){return t.value.bringToFront()},bringToBack(){return t.value.bringToBack()},setZIndex(e){return t.value.setZIndex(e)}};return{options:o,methods:s}},Re=Object.freeze(Object.defineProperty({__proto__:null,imageOverlayProps:Oe,setupImageOverlay:Ae},Symbol.toStringTag,{value:"Module"}));(0,r.pM)({name:"LImageOverlay",props:Oe,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{options:l,methods:h}=Ae(e,o,t);return(0,r.sV)((async()=>{const{imageOverlay:d}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(d(e.url,e.bounds,l));const{listeners:p}=f(t.attrs);o.value.on(p),u(h,o.value,e),c({...e,...h,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),(0,r.pM)({props:he,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{methods:l}=fe(e,o,t);return(0,r.sV)((async()=>{const{layerGroup:h}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(h(void 0,e.options));const{listeners:d}=f(t.attrs);o.value.on(d),u(l,o.value,e),c({...e,...l,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}});function Ce(e,t,n){var r,i,o;void 0===t&&(t=50),void 0===n&&(n={});var s=null!=(r=n.isImmediate)&&r,a=null!=(i=n.callback)&&i,c=n.maxWait,l=Date.now(),u=[];function h(){if(void 0!==c){var e=Date.now()-l;if(e+t>=c)return c-e}return t}var f=function(){var t=[].slice.call(arguments),n=this;return new Promise((function(r,i){var c=s&&void 0===o;if(void 0!==o&&clearTimeout(o),o=setTimeout((function(){if(o=void 0,l=Date.now(),!s){var r=e.apply(n,t);a&&a(r),u.forEach((function(e){return(0,e.resolve)(r)})),u=[]}}),h()),c){var f=e.apply(n,t);return a&&a(f),r(f)}u.push({resolve:r,reject:i})}))};return f.cancel=function(e){void 0!==o&&clearTimeout(o),u.forEach((function(t){return(0,t.reject)(e)})),u=[]},f}const ke={...k,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},Pe=(0,r.pM)({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:ke,setup(e,t){const o=(0,i.KR)(),c=(0,i.Kh)({ready:!1,layersToAdd:[],layersInControl:[]}),{options:l}=P(e),v=h(e,ke,l),{listeners:S,attrs:T}=f(t.attrs),I=p(b),O=p(w),A=p(_),R=p(E);(0,r.Gt)(y,e.useGlobalLeaflet);const C=(0,r.EW)((()=>{const t={};return e.noBlockingAnimations&&(t.animate=!1),t})),k=(0,r.EW)((()=>{const t=C.value;return e.padding&&(t.padding=e.padding),e.paddingTopLeft&&(t.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(t.paddingBottomRight=e.paddingBottomRight),t})),x={moveend:Ce((e=>{c.leafletRef&&(t.emit("update:zoom",c.leafletRef.getZoom()),t.emit("update:center",c.leafletRef.getCenter()),t.emit("update:bounds",c.leafletRef.getBounds()))})),overlayadd(e){const t=c.layersInControl.find((t=>t.name===e.name));t&&t.updateVisibleProp(!0)},overlayremove(e){const t=c.layersInControl.find((t=>t.name===e.name));t&&t.updateVisibleProp(!1)}};(0,r.sV)((async()=>{e.useGlobalLeaflet&&(m.L=m.L||await n.e(886).then(n.t.bind(n,6886,23)));const{map:a,CRS:l,Icon:h,latLngBounds:f,latLng:p,stamp:y}=e.useGlobalLeaflet?m.L:await n.e(791).then(n.bind(n,4791));try{v.beforeMapMount&&await v.beforeMapMount()}catch(_){console.error(`The following error occurred running the provided beforeMapMount hook ${_.message}`)}await d(h);const b="string"==typeof v.crs?l[v.crs]:v.crs;v.crs=b||l.EPSG3857;const w={addLayer(e){void 0!==e.layerType&&(void 0===c.layerControl?c.layersToAdd.push(e):c.layersInControl.find((t=>y(t.leafletObject)===y(e.leafletObject)))||(c.layerControl.addLayer(e),c.layersInControl.push(e))),!1!==e.visible&&c.leafletRef.addLayer(e.leafletObject)},removeLayer(e){void 0!==e.layerType&&(void 0===c.layerControl?c.layersToAdd=c.layersToAdd.filter((t=>t.name!==e.name)):(c.layerControl.removeLayer(e.leafletObject),c.layersInControl=c.layersInControl.filter((t=>y(t.leafletObject)!==y(e.leafletObject))))),c.leafletRef.removeLayer(e.leafletObject)},registerLayerControl(e){c.layerControl=e,c.layersToAdd.forEach((e=>{c.layerControl.addLayer(e)})),c.layersToAdd=[],A(e)},registerControl(e){c.leafletRef.addControl(e.leafletObject)},setZoom(e){const t=c.leafletRef.getZoom();e!==t&&c.leafletRef.setZoom(e,C.value)},setCrs(e){const t=c.leafletRef.getBounds();c.leafletRef.options.crs=e,c.leafletRef.fitBounds(t,{animate:!1,padding:[0,0]})},fitBounds(e){c.leafletRef.fitBounds(e,k.value)},setBounds(e){if(!e)return;const t=f(e);t.isValid()&&!(c.lastSetBounds||c.leafletRef.getBounds()).equals(t,0)&&(c.lastSetBounds=t,c.leafletRef.fitBounds(t))},setCenter(e){if(null==e)return;const t=p(e),n=c.lastSetCenter||c.leafletRef.getCenter();(n.lat!==t.lat||n.lng!==t.lng)&&(c.lastSetCenter=t,c.leafletRef.panTo(t,C.value))}};g(I,w.addLayer),g(O,w.removeLayer),g(A,w.registerControl),g(R,w.registerLayerControl),c.leafletRef=(0,i.IG)(a(o.value,v)),u(w,c.leafletRef,e),s(c.leafletRef,x),s(c.leafletRef,S),c.ready=!0,(0,r.dY)((()=>t.emit("ready",c.leafletRef)))})),(0,r.xo)((()=>{a(x),c.leafletRef&&(c.leafletRef.off(),c.leafletRef.remove())}));const N=(0,r.EW)((()=>c.leafletRef)),L=(0,r.EW)((()=>c.ready));return{root:o,ready:L,leafletObject:N,attrs:T}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),(0,r.h)("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),xe=["Symbol(Comment)","Symbol(Text)"],Ne=["LTooltip","LPopup"],Le={...N,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},De=(e,t,n)=>{const{options:r,methods:i}=L(e,t,n),o=h(e,Le,r),s={...i,setDraggable(e){t.value.dragging&&(e?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(e){n.emit("update:latLng",e.latlng),n.emit("update:lat-lng",e.latlng)},setLatLng(e){if(null!=e&&t.value){const n=t.value.getLatLng();(!n||!n.equals(e))&&t.value.setLatLng(e)}}};return{options:o,methods:s}},je=(e,t)=>{const n=t.slots.default&&t.slots.default();return n&&n.length&&n.some(Me)};function Me(e){return!(xe.includes(e.type.toString())||Ne.includes(e.type.name))}const Ue=Object.freeze(Object.defineProperty({__proto__:null,markerProps:Le,setupMarker:De,shouldBlankIcon:je},Symbol.toStringTag,{value:"Module"})),Fe=(0,r.pM)({name:"LMarker",props:Le,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),c=(0,r.WQ)(y),h=v(b);(0,r.Gt)(S,(()=>{var e;return!(null==(e=o.value)||!e.getElement())})),(0,r.Gt)(T,(e=>{var t,n;const r=l(null==(t=o.value)?void 0:t.getElement)&&(null==(n=o.value)?void 0:n.getElement());r&&(r.innerHTML=e)})),(0,r.Gt)(I,(e=>{var t;return(null==(t=o.value)?void 0:t.setIcon)&&o.value.setIcon(e)}));const{options:d,methods:p}=De(e,o,t),g={moveHandler:Ce(p.latLngSync)};return(0,r.sV)((async()=>{const{marker:a,divIcon:l}=c?m.L:await n.e(791).then(n.bind(n,4791));je(d,t)&&(d.icon=l({className:""})),o.value=(0,i.IG)(a(e.latLng,d));const{listeners:v}=f(t.attrs);o.value.on(v),o.value.on("move",g.moveHandler),u(p,o.value,e),h({...e,...p,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),(0,r.xo)((()=>a(g))),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),Be={...B,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}},Ve=(e,t,n)=>{const{options:r,methods:i}=V(e,t,n),o=h(e,Be,r),s={...i,setSmoothFactor(e){t.value.setStyle({smoothFactor:e})},setNoClip(e){t.value.setStyle({noClip:e})},addLatLng(e){t.value.addLatLng(e)}};return{options:o,methods:s}},$e=Object.freeze(Object.defineProperty({__proto__:null,polylineProps:Be,setupPolyline:Ve},Symbol.toStringTag,{value:"Module"})),ze={...Be},He=(e,t,n)=>{const{options:r,methods:i}=Ve(e,t,n),o=h(e,ze,r),s={...i,toGeoJSON(e){return t.value.toGeoJSON(e)}};return{options:o,methods:s}},We=Object.freeze(Object.defineProperty({__proto__:null,polygonProps:ze,setupPolygon:He},Symbol.toStringTag,{value:"Module"})),Ke=((0,r.pM)({name:"LPolygon",props:ze,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{options:l,methods:h}=He(e,o,t);return(0,r.sV)((async()=>{const{polygon:d}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(d(e.latLngs,l));const{listeners:p}=f(t.attrs);o.value.on(p),u(h,o.value,e),c({...e,...h,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),(0,r.pM)({name:"LPolyline",props:Be,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{options:l,methods:h}=Ve(e,o,t);return(0,r.sV)((async()=>{const{polyline:d}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(d(e.latLngs,l));const{listeners:p}=f(t.attrs);o.value.on(p),u(h,o.value,e),c({...e,...h,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),{...k,content:{type:String,default:null}}),Ge=(e,t)=>{const{options:n,methods:r}=P(e),i={...r,setContent(e){t.value&&null!==e&&void 0!==e&&t.value.setContent(e)}};return{options:n,methods:i}},qe=e=>e.default?(0,r.h)("div",{ref:"root"},e.default()):null,Xe=Object.freeze(Object.defineProperty({__proto__:null,popperProps:Ke,render:qe,setupPopper:Ge},Symbol.toStringTag,{value:"Module"})),Je={...Ke,latLng:{type:[Object,Array],default:()=>[]}},Ye=(e,t)=>{const{options:n,methods:r}=Ge(e,t);return{options:n,methods:r}},Ze=Object.freeze(Object.defineProperty({__proto__:null,popupProps:Je,setupPopup:Ye},Symbol.toStringTag,{value:"Module"})),Qe=(0,r.pM)({name:"LPopup",props:Je,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(null),a=(0,r.WQ)(y),c=v(O),l=v(R),{options:h,methods:d}=Ye(e,o);return(0,r.sV)((async()=>{const{popup:l}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(l(h)),void 0!==e.latLng&&o.value.setLatLng(e.latLng),u(d,o.value,e);const{listeners:p}=f(t.attrs);o.value.on(p),o.value.setContent(e.content||s.value||""),c(o.value),(0,r.dY)((()=>t.emit("ready",o.value)))})),(0,r.xo)((()=>{l()})),{root:s,leafletObject:o}},render(){return qe(this.$slots)}}),et={...ze,latLngs:{...ze.latLngs,required:!1},bounds:{type:Object,custom:!0}},tt=(e,t,n)=>{const{options:r,methods:i}=He(e,t,n),o=h(e,et,r),s={...i,setBounds(e){t.value.setBounds(e)},setLatLngs(e){t.value.setBounds(e)}};return{options:o,methods:s}},nt=Object.freeze(Object.defineProperty({__proto__:null,rectangleProps:et,setupRectangle:tt},Symbol.toStringTag,{value:"Module"})),rt=((0,r.pM)({name:"LRectangle",props:et,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(!1),a=(0,r.WQ)(y),c=v(b),{options:l,methods:h}=tt(e,o,t);return(0,r.sV)((async()=>{const{rectangle:d,latLngBounds:p}=a?m.L:await n.e(791).then(n.bind(n,4791)),g=e.bounds?p(e.bounds):p(e.latLngs||[]);o.value=(0,i.IG)(d(g,l));const{listeners:v}=f(t.attrs);o.value.on(v),u(h,o.value,e),c({...e,...h,leafletObject:o.value}),s.value=!0,(0,r.dY)((()=>t.emit("ready",o.value)))})),{ready:s,leafletObject:o}},render(){return D(this.ready,this.$slots)}}),{...we,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>"string"==typeof e||!!Array.isArray(e)&&e.every((e=>"string"==typeof e))},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}}),it=(e,t,n)=>{const{options:r,methods:i}=_e(e,t,n),o=h(e,rt,r),s={...i};return{options:o,methods:s}},ot=Object.freeze(Object.defineProperty({__proto__:null,setupTileLayer:it,tileLayerProps:rt},Symbol.toStringTag,{value:"Module"})),st=(0,r.pM)({props:rt,setup(e,t){const o=(0,i.KR)(),s=(0,r.WQ)(y),a=v(b),{options:c,methods:l}=it(e,o,t);return(0,r.sV)((async()=>{const{tileLayer:h}=s?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(h(e.url,c));const{listeners:d}=f(t.attrs);o.value.on(d),u(l,o.value,e),a({...e,...l,leafletObject:o.value}),(0,r.dY)((()=>t.emit("ready",o.value)))})),{leafletObject:o}},render(){return null}}),at={...Ke},ct=(e,t)=>{const{options:n,methods:i}=Ge(e,t),o=v(C);return(0,r.xo)((()=>{o()})),{options:n,methods:i}},lt=Object.freeze(Object.defineProperty({__proto__:null,setupTooltip:ct,tooltipProps:at},Symbol.toStringTag,{value:"Module"})),ut=((0,r.pM)({name:"LTooltip",props:at,setup(e,t){const o=(0,i.KR)(),s=(0,i.KR)(null),a=(0,r.WQ)(y),c=v(A),{options:l,methods:h}=ct(e,o);return(0,r.sV)((async()=>{const{tooltip:d}=a?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(d(l)),u(h,o.value,e);const{listeners:p}=f(t.attrs);o.value.on(p),o.value.setContent(e.content||s.value||""),c(o.value),(0,r.dY)((()=>t.emit("ready",o.value)))})),{root:s,leafletObject:o}},render(){return qe(this.$slots)}}),{...rt,layers:{type:String,required:!0},styles:{type:String},format:{type:String},transparent:{type:Boolean,default:void 0},version:{type:String},crs:{type:Object},uppercase:{type:Boolean,default:void 0}}),ht=(e,t,n)=>{const{options:r,methods:i}=it(e,t,n);return{options:h(e,ut,r),methods:{...i}}},ft=Object.freeze(Object.defineProperty({__proto__:null,setupWMSTileLayer:ht,wmsTileLayerProps:ut},Symbol.toStringTag,{value:"Module"}));(0,r.pM)({props:ut,setup(e,t){const o=(0,i.KR)(),s=(0,r.WQ)(y),a=v(b),{options:c,methods:l}=ht(e,o,t);return(0,r.sV)((async()=>{const{tileLayer:h}=s?m.L:await n.e(791).then(n.bind(n,4791));o.value=(0,i.IG)(h.wms(e.url,c));const{listeners:d}=f(t.attrs);o.value.on(d),u(l,o.value,e),a({...e,...l,leafletObject:o.value}),(0,r.dY)((()=>t.emit("ready",o.value)))})),{leafletObject:o}},render(){return null}}),Symbol.toStringTag},144:function(e,t,n){n.d(t,{C4:function(){return S},EW:function(){return qe},Gc:function(){return Re},IG:function(){return je},IJ:function(){return Ve},KR:function(){return Be},Kh:function(){return Ae},Pr:function(){return Ke},R1:function(){return He},X2:function(){return l},bl:function(){return T},fE:function(){return Ne},g8:function(){return Pe},hV:function(){return et},hZ:function(){return D},i9:function(){return Fe},ju:function(){return Le},lJ:function(){return Me},qA:function(){return M},u4:function(){return L},ux:function(){return De},wB:function(){return Qe},yC:function(){return s}});n(4114),n(9678),n(7145),n(1658),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(4232);let i,o;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(){return i}const c=new WeakSet;class l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,I(this),g(this);const e=o,t=_;o=this,_=!0;try{return this.fn()}finally{0,m(this),o=e,_=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)b(e);this.deps=this.depsTail=void 0,I(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let u,h=0;function f(e){e.flags|=8,e.next=u,u=e}function d(){h++}function p(){if(--h>0)return;let e;while(u){let n=u;u=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function g(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function m(e,t=!1){let n,r=e.depsTail,i=r;while(i){const e=i.prevDep;-1===i.version?(i===r&&(r=e),b(i,t),w(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=e}e.deps=n,e.depsTail=r}function v(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(y(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function y(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===O)return;e.globalVersion=O;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!v(e))return void(e.flags&=-3);const n=o,i=_;o=e,_=!0;try{g(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(s){throw t.version++,s}finally{o=n,_=i,m(e,!0),e.flags&=-3}}function b(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r),!n.subs)if(n.computed){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)b(e,!0)}else n.map&&!t&&(n.map.delete(n.key),n.map.size||k.delete(n.target))}function w(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let _=!0;const E=[];function S(){E.push(_),_=!1}function T(){const e=E.pop();_=void 0===e||e}function I(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=o;o=void 0;try{t()}finally{o=e}}}let O=0;class A{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class R{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(e){if(!o||!_||o===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==o)t=this.activeLink=new A(o,this),o.deps?(t.prevDep=o.depsTail,o.depsTail.nextDep=t,o.depsTail=t):o.deps=o.depsTail=t,4&o.flags&&C(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=o.depsTail,t.nextDep=void 0,o.depsTail.nextDep=t,o.depsTail=t,o.deps===t&&(o.deps=e)}return t}trigger(e){this.version++,O++,this.notify(e)}notify(e){d();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{p()}}}function C(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)C(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const k=new WeakMap,P=Symbol(""),x=Symbol(""),N=Symbol("");function L(e,t,n){if(_&&o){let t=k.get(e);t||k.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new R),r.target=e,r.map=t,r.key=n),r.track()}}function D(e,t,n,i,o,s){const a=k.get(e);if(!a)return void O++;const c=e=>{e&&e.trigger()};if(d(),"clear"===t)a.forEach(c);else{const o=(0,r.cy)(e),s=o&&(0,r.yI)(n);if(o&&"length"===n){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n===N||!(0,r.Bm)(n)&&n>=e)&&c(t)}))}else switch(void 0!==n&&c(a.get(n)),s&&c(a.get(N)),t){case"add":o?s&&c(a.get("length")):(c(a.get(P)),(0,r.CE)(e)&&c(a.get(x)));break;case"delete":o||(c(a.get(P)),(0,r.CE)(e)&&c(a.get(x)));break;case"set":(0,r.CE)(e)&&c(a.get(P));break}}p()}function j(e){const t=De(e);return t===e?t:(L(t,"iterate",N),Ne(e)?t:t.map(Me))}function M(e){return L(e=De(e),"iterate",N),e}const U={__proto__:null,[Symbol.iterator](){return F(this,Symbol.iterator,Me)},concat(...e){return j(this).concat(...e.map((e=>(0,r.cy)(e)?j(e):e)))},entries(){return F(this,"entries",(e=>(e[1]=Me(e[1]),e)))},every(e,t){return V(this,"every",e,t,void 0,arguments)},filter(e,t){return V(this,"filter",e,t,(e=>e.map(Me)),arguments)},find(e,t){return V(this,"find",e,t,Me,arguments)},findIndex(e,t){return V(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return V(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return V(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return V(this,"forEach",e,t,void 0,arguments)},includes(...e){return z(this,"includes",e)},indexOf(...e){return z(this,"indexOf",e)},join(e){return j(this).join(e)},lastIndexOf(...e){return z(this,"lastIndexOf",e)},map(e,t){return V(this,"map",e,t,void 0,arguments)},pop(){return H(this,"pop")},push(...e){return H(this,"push",e)},reduce(e,...t){return $(this,"reduce",e,t)},reduceRight(e,...t){return $(this,"reduceRight",e,t)},shift(){return H(this,"shift")},some(e,t){return V(this,"some",e,t,void 0,arguments)},splice(...e){return H(this,"splice",e)},toReversed(){return j(this).toReversed()},toSorted(e){return j(this).toSorted(e)},toSpliced(...e){return j(this).toSpliced(...e)},unshift(...e){return H(this,"unshift",e)},values(){return F(this,"values",Me)}};function F(e,t,n){const r=M(e),i=r[t]();return r===e||Ne(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const B=Array.prototype;function V(e,t,n,r,i,o){const s=M(e),a=s!==e&&!Ne(e),c=s[t];if(c!==B[t]){const t=c.apply(e,o);return a?Me(t):t}let l=n;s!==e&&(a?l=function(t,r){return n.call(this,Me(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));const u=c.call(s,l,r);return a&&i?i(u):u}function $(e,t,n,r){const i=M(e);let o=n;return i!==e&&(Ne(e)?n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}):o=function(t,r,i){return n.call(this,t,Me(r),i,e)}),i[t](o,...r)}function z(e,t,n){const r=De(e);L(r,"iterate",N);const i=r[t](...n);return-1!==i&&!1!==i||!Le(n[0])?i:(n[0]=De(n[0]),r[t](...n))}function H(e,t,n=[]){S(),d();const r=De(e)[t].apply(e,n);return p(),T(),r}const W=(0,r.pD)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function G(e){(0,r.Bm)(e)||(e=String(e));const t=De(this);return L(t,"has",e),t.hasOwnProperty(e)}class q{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,o=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return o;if("__v_raw"===t)return n===(i?o?Te:Se:o?Ee:_e).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const s=(0,r.cy)(e);if(!i){let e;if(s&&(e=U[t]))return e;if("hasOwnProperty"===t)return G}const a=Reflect.get(e,t,Fe(e)?e:n);return((0,r.Bm)(t)?K.has(t):W(t))?a:(i||L(e,"get",t),o?a:Fe(a)?s&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?Ce(a):Ae(a):a)}}class X extends q{constructor(e=!1){super(!1,e)}set(e,t,n,i){let o=e[t];if(!this._isShallow){const t=xe(o);if(Ne(n)||xe(n)||(o=De(o),n=De(n)),!(0,r.cy)(e)&&Fe(o)&&!Fe(n))return!t&&(o.value=n,!0)}const s=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,Fe(e)?e:i);return e===De(i)&&(s?(0,r.$H)(n,o)&&D(e,"set",t,n,o):D(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&D(e,"delete",t,void 0,i),o}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&K.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,r.cy)(e)?"length":P),Reflect.ownKeys(e)}}class J extends q{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Y=new X,Z=new J,Q=new X(!0),ee=e=>e,te=e=>Reflect.getPrototypeOf(e);function ne(e,t,n=!1,i=!1){e=e["__v_raw"];const o=De(e),s=De(t);n||((0,r.$H)(t,s)&&L(o,"get",t),L(o,"get",s));const{has:a}=te(o),c=i?ee:n?Ue:Me;return a.call(o,t)?c(e.get(t)):a.call(o,s)?c(e.get(s)):void(e!==o&&e.get(t))}function re(e,t=!1){const n=this["__v_raw"],i=De(n),o=De(e);return t||((0,r.$H)(e,o)&&L(i,"has",e),L(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function ie(e,t=!1){return e=e["__v_raw"],!t&&L(De(e),"iterate",P),Reflect.get(e,"size",e)}function oe(e,t=!1){t||Ne(e)||xe(e)||(e=De(e));const n=De(this),r=te(n),i=r.has.call(n,e);return i||(n.add(e),D(n,"add",e,e)),this}function se(e,t,n=!1){n||Ne(t)||xe(t)||(t=De(t));const i=De(this),{has:o,get:s}=te(i);let a=o.call(i,e);a||(e=De(e),a=o.call(i,e));const c=s.call(i,e);return i.set(e,t),a?(0,r.$H)(t,c)&&D(i,"set",e,t,c):D(i,"add",e,t),this}function ae(e){const t=De(this),{has:n,get:r}=te(t);let i=n.call(t,e);i||(e=De(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&D(t,"delete",e,void 0,o),s}function ce(){const e=De(this),t=0!==e.size,n=void 0,r=e.clear();return t&&D(e,"clear",void 0,void 0,n),r}function le(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=De(o),a=t?ee:e?Ue:Me;return!e&&L(s,"iterate",P),o.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ue(e,t,n){return function(...i){const o=this["__v_raw"],s=De(o),a=(0,r.CE)(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),h=n?ee:t?Ue:Me;return!t&&L(s,"iterate",l?x:P),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function he(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function fe(){const e={get(e){return ne(this,e)},get size(){return ie(this)},has:re,add:oe,set:se,delete:ae,clear:ce,forEach:le(!1,!1)},t={get(e){return ne(this,e,!1,!0)},get size(){return ie(this)},has:re,add(e){return oe.call(this,e,!0)},set(e,t){return se.call(this,e,t,!0)},delete:ae,clear:ce,forEach:le(!1,!0)},n={get(e){return ne(this,e,!0)},get size(){return ie(this,!0)},has(e){return re.call(this,e,!0)},add:he("add"),set:he("set"),delete:he("delete"),clear:he("clear"),forEach:le(!0,!1)},r={get(e){return ne(this,e,!0,!0)},get size(){return ie(this,!0)},has(e){return re.call(this,e,!0)},add:he("add"),set:he("set"),delete:he("delete"),clear:he("clear"),forEach:le(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ue(i,!1,!1),n[i]=ue(i,!0,!1),t[i]=ue(i,!1,!0),r[i]=ue(i,!0,!0)})),[e,n,t,r]}const[de,pe,ge,me]=fe();function ve(e,t){const n=t?e?me:ge:e?pe:de;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,o)}const ye={get:ve(!1,!1)},be={get:ve(!1,!0)},we={get:ve(!0,!1)};const _e=new WeakMap,Ee=new WeakMap,Se=new WeakMap,Te=new WeakMap;function Ie(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:Ie((0,r.Zf)(e))}function Ae(e){return xe(e)?e:ke(e,!1,Y,ye,_e)}function Re(e){return ke(e,!1,Q,be,Ee)}function Ce(e){return ke(e,!0,Z,we,Se)}function ke(e,t,n,i,o){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Pe(e){return xe(e)?Pe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function xe(e){return!(!e||!e["__v_isReadonly"])}function Ne(e){return!(!e||!e["__v_isShallow"])}function Le(e){return!!e&&!!e["__v_raw"]}function De(e){const t=e&&e["__v_raw"];return t?De(t):e}function je(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Me=e=>(0,r.Gv)(e)?Ae(e):e,Ue=e=>(0,r.Gv)(e)?Ce(e):e;function Fe(e){return!!e&&!0===e["__v_isRef"]}function Be(e){return $e(e,!1)}function Ve(e){return $e(e,!0)}function $e(e,t){return Fe(e)?e:new ze(e,t)}class ze{constructor(e,t){this.dep=new R,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:De(e),this._value=t?e:Me(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ne(e)||xe(e);e=n?e:De(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Me(e),this.dep.trigger())}}function He(e){return Fe(e)?e.value:e}const We={get:(e,t,n)=>"__v_raw"===t?e:He(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ke(e){return Pe(e)?e:new Proxy(e,We)}class Ge{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new R(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=O-1,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||o===this))return f(this),!0}get value(){const e=this.dep.track();return y(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qe(e,t,n=!1){let i,o;(0,r.Tn)(e)?i=e:(i=e.get,o=e.set);const s=new Ge(i,o,n);return s}const Xe={},Je=new WeakMap;let Ye;function Ze(e,t=!1,n=Ye){if(n){let t=Je.get(n);t||Je.set(n,t=[]),t.push(e)}else 0}function Qe(e,t,n=r.MZ){const{immediate:i,deep:o,once:s,scheduler:c,augmentJob:u,call:h}=n,f=e=>o?e:Ne(e)||!1===o||0===o?et(e,1):et(e);let d,p,g,m,v=!1,y=!1;if(Fe(e)?(p=()=>e.value,v=Ne(e)):Pe(e)?(p=()=>f(e),v=!0):(0,r.cy)(e)?(y=!0,v=e.some((e=>Pe(e)||Ne(e))),p=()=>e.map((e=>Fe(e)?e.value:Pe(e)?f(e):(0,r.Tn)(e)?h?h(e,2):e():void 0))):p=(0,r.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(g){S();try{g()}finally{T()}}const t=Ye;Ye=d;try{return h?h(e,3,[m]):e(m)}finally{Ye=t}}:r.tE,t&&o){const e=p,t=!0===o?1/0:o;p=()=>et(e(),t)}const b=a(),w=()=>{d.stop(),b&&(0,r.TF)(b.effects,d)};if(s&&t){const e=t;t=(...t)=>{e(...t),w()}}let _=y?new Array(e.length).fill(Xe):Xe;const E=e=>{if(1&d.flags&&(d.dirty||e))if(t){const e=d.run();if(o||v||(y?e.some(((e,t)=>(0,r.$H)(e,_[t]))):(0,r.$H)(e,_))){g&&g();const n=Ye;Ye=d;try{const n=[e,_===Xe?void 0:y&&_[0]===Xe?[]:_,m];h?h(t,3,n):t(...n),_=e}finally{Ye=n}}}else d.run()};return u&&u(E),d=new l(p),d.scheduler=c?()=>c(E,!1):E,m=e=>Ze(e,!1,d),g=d.onStop=()=>{const e=Je.get(d);if(e){if(h)h(e,4);else for(const t of e)t();Je.delete(d)}},t?i?E(!0):_=d.run():c?c(E.bind(null,!0),!0):d.run(),w.pause=d.pause.bind(d),w.resume=d.resume.bind(d),w.stop=w,w}function et(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Fe(e))et(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)et(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{et(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)et(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&et(e[r],t,n)}return e}},6768:function(e,t,n){n.d(t,{$u:function(){return ae},CE:function(){return Jt},Df:function(){return z},EW:function(){return Un},FK:function(){return Ft},Fv:function(){return ln},Gt:function(){return He},Gy:function(){return M},K9:function(){return ft},Lk:function(){return nn},MZ:function(){return $},OW:function(){return V},Q3:function(){return un},QP:function(){return F},WQ:function(){return We},Wv:function(){return Yt},bF:function(){return rn},bo:function(){return P},dY:function(){return y},eW:function(){return cn},g2:function(){return ge},h:function(){return Fn},hi:function(){return le},k6:function(){return k},nI:function(){return wn},pI:function(){return be},pM:function(){return H},qL:function(){return s},sV:function(){return oe},uX:function(){return Wt},wB:function(){return St},xo:function(){return ce}});n(4114),n(9479),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(144),i=n(4232);function o(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function s(e,t,n,r){if((0,i.Tn)(e)){const s=o(e,t,n,r);return s&&(0,i.yL)(s)&&s.catch((e=>{a(e,t,n)})),s}if((0,i.cy)(e)){const i=[];for(let o=0;o<e.length;o++)i.push(s(e[o],t,n,r));return i}}function a(e,t,n,s=!0){const a=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const s=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,a))return;i=i.parent}if(l)return(0,r.C4)(),o(l,null,10,[e,s,a]),void(0,r.bl)()}c(e,n,a,s,u)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}let l=!1,u=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(e){const t=v||m;return e?t.then(this?e.bind(this):e):t}function b(e){let t=l?f+1:0,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],o=I(i);o<e||o===e&&2&i.flags?t=r+1:n=r}return t}function w(e){if(!(1&e.flags)){const t=I(e),n=h[h.length-1];!n||!(2&e.flags)&&t>=I(n)?h.push(e):h.splice(b(t),0,e),e.flags|=1,_()}}function _(){l||u||(u=!0,v=m.then(O))}function E(e){(0,i.cy)(e)?d.push(...e):p&&-1===e.id?p.splice(g+1,0,e):1&e.flags||(d.push(e),e.flags|=1),_()}function S(e,t,n=(l?f+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function T(e){if(d.length){const e=[...new Set(d)].sort(((e,t)=>I(e)-I(t)));if(d.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++){const e=p[g];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}p=null,g=0}}const I=e=>null==e.id?2&e.flags?-1:1/0:e.id;function O(e){u=!1,l=!0;i.tE;try{for(f=0;f<h.length;f++){const e=h[f];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),o(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;f<h.length;f++){const e=h[f];e&&(e.flags&=-2)}f=0,h.length=0,T(e),l=!1,v=null,(h.length||d.length)&&O(e)}}let A=null,R=null;function C(e){const t=A;return A=e,R=e&&e.type.__scopeId||null,t}function k(e,t=A,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&qt(-1);const i=C(t);let o;try{o=e(...n)}finally{C(i),r._d&&qt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function P(e,t){if(null===A)return e;const n=Dn(A),o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,a,c,l=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),o.push({dir:e,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function x(e,t,n,i){const o=e.dirs,a=t&&t.dirs;for(let c=0;c<o.length;c++){const l=o[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),s(u,n,8,[e.el,l,e,t]),(0,r.bl)())}}const N=Symbol("_vte"),L=e=>e.__isTeleport;const D=Symbol("_leaveCb"),j=Symbol("_enterCb");function M(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oe((()=>{e.isMounted=!0})),ce((()=>{e.isUnmounting=!0})),e}const U=[Function,Array],F={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:U,onEnter:U,onAfterEnter:U,onEnterCancelled:U,onBeforeLeave:U,onLeave:U,onAfterLeave:U,onLeaveCancelled:U,onBeforeAppear:U,onAppear:U,onAfterAppear:U,onAppearCancelled:U};function B(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function V(e,t,n,r,o){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:b,onAfterAppear:w,onAppearCancelled:_}=t,E=String(e.key),S=B(n,e),T=(e,t)=>{e&&s(e,r,9,t)},I=(e,t)=>{const n=t[1];T(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},O={mode:c,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!a)return;r=y||u}t[D]&&t[D](!0);const i=S[E];i&&Qt(e,i)&&i.el[D]&&i.el[D](),T(r,[t])},enter(e){let t=h,r=f,i=d;if(!n.isMounted){if(!a)return;t=b||h,r=w||f,i=_||d}let o=!1;const s=e[j]=t=>{o||(o=!0,T(t?i:r,[e]),O.delayedLeave&&O.delayedLeave(),e[j]=void 0)};t?I(t,[e,s]):s()},leave(t,r){const i=String(e.key);if(t[j]&&t[j](!0),n.isUnmounting)return r();T(p,[t]);let o=!1;const s=t[D]=n=>{o||(o=!0,r(),T(n?v:m,[t]),t[D]=void 0,S[i]===e&&delete S[i])};S[i]=e,g?I(g,[t,s]):s()},clone(e){const i=V(e,t,n,r,o);return o&&o(i),i}};return O}function $(e,t){6&e.shapeFlag&&e.component?(e.transition=t,$(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function z(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===Ft?(128&s.patchFlag&&i++,r=r.concat(z(s.children,t,a))):(t||s.type!==Vt)&&r.push(null!=a?an(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function H(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}function W(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function K(e,t,n,s,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>K(e,t&&((0,i.cy)(t)?t[r]:t),n,s,a)));if(G(s)&&!a)return;const c=4&s.shapeFlag?Dn(s.component):s.el,l=a?null:c,{i:u,r:h}=e;const f=t&&t.r,d=u.refs===i.MZ?u.refs={}:u.refs,p=u.setupState,g=(0,r.ux)(p),m=p===i.MZ?()=>!1:e=>(0,i.$3)(g,e);if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,m(f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))o(h,u,12,[l,d]);else{const t=(0,i.Kg)(h),o=(0,r.i9)(h);if(t||o){const r=()=>{if(e.f){const n=t?m(h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(d[h]=[c],m(h)&&(p[h]=d[h])):(h.value=[c],e.k&&(d[e.k]=h.value))}else t?(d[h]=l,m(h)&&(p[h]=l)):o&&(h.value=l,e.k&&(d[e.k]=l))};l?(r.id=-1,ht(r,n)):r()}else 0}}const G=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const q=e=>e.type.__isKeepAlive;RegExp,RegExp;function X(e,t){return(0,i.cy)(e)?e.some((e=>X(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&(e.lastIndex=0,e.test(t))}function J(e,t){Z(e,"a",t)}function Y(e,t){Z(e,"da",t)}function Z(e,t,n=bn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ne(t,r,n),n){let e=n.parent;while(e&&e.parent)q(e.parent.vnode)&&Q(r,t,n,e),e=e.parent}}function Q(e,t,n,r){const o=ne(t,e,r,!0);le((()=>{(0,i.TF)(r[t],o)}),n)}function ee(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function te(e){return 128&e.shapeFlag?e.ssContent:e}function ne(e,t,n=bn,i=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const o=Sn(n),a=s(t,n,e,i);return o(),(0,r.bl)(),a});return i?o.unshift(a):o.push(a),a}}const re=e=>(t,n=bn)=>{Rn&&"sp"!==e||ne(e,((...e)=>t(...e)),n)},ie=re("bm"),oe=re("m"),se=re("bu"),ae=re("u"),ce=re("bum"),le=re("um"),ue=re("sp"),he=re("rtg"),fe=re("rtc");function de(e,t=bn){ne("ec",e,t)}const pe="components";function ge(e,t){return ve(pe,e,!0,t)||e}const me=Symbol.for("v-ndc");function ve(e,t,n=!0,r=!1){const o=A||bn;if(o){const n=o.type;if(e===pe){const e=jn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const s=ye(o[e]||n[e],t)||ye(o.appContext[e],t);return!s&&r?n:s}}function ye(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function be(e,t,n,o){let s;const a=n&&n[o],c=(0,i.cy)(e);if(c||(0,i.Kg)(e)){const n=c&&(0,r.g8)(e);let i=!1;n&&(i=!(0,r.fE)(e),e=(0,r.qA)(e)),s=new Array(e.length);for(let o=0,c=e.length;o<c;o++)s[o]=t(i?(0,r.lJ)(e[o]):e[o],o,void 0,a&&a[o])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,a&&a[r])}}else s=[];return n&&(n[o]=s),s}const we=e=>e?In(e)?Dn(e):we(e.parent):null,_e=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>we(e.parent),$root:e=>we(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ke(e),$forceUpdate:e=>e.f||(e.f=()=>{w(e.update)}),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>It.bind(e)}),Ee=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),Se={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:o,data:s,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return a[t]}else{if(Ee(o,t))return c[t]=1,o[t];if(s!==i.MZ&&(0,i.$3)(s,t))return c[t]=2,s[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ie&&(c[t]=0)}}const f=_e[t];let d,p;return f?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),f(e)):(d=l.__cssModules)&&(d=d[t])?d:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Ee(o,t)?(o[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||Ee(t,a)||(c=s[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(_e,a)||(0,i.$3)(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Te(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ie=!0;function Oe(e){const t=ke(e),n=e.proxy,o=e.ctx;Ie=!1,t.beforeCreate&&Re(t.beforeCreate,e,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:S,renderTracked:T,renderTriggered:I,errorCaptured:O,serverPrefetch:A,expose:R,inheritAttrs:C,components:k,directives:P,filters:x}=t,N=null;if(h&&Ae(h,o,N),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(o[r]=e.bind(n))}if(s){0;const t=s.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ie=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const s=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=Un({get:t,set:s});Object.defineProperty(o,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)Ce(l[r],o,n,r);if(u){const e=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{He(t,e[t])}))}function L(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(f&&Re(f,e,"c"),L(ie,d),L(oe,p),L(se,g),L(ae,m),L(J,v),L(Y,y),L(de,O),L(fe,T),L(he,I),L(ce,w),L(le,E),L(ue,A),(0,i.cy)(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===i.tE&&(e.render=S),null!=C&&(e.inheritAttrs=C),k&&(e.components=k),P&&(e.directives=P),A&&W(e)}function Ae(e,t,n=i.tE){(0,i.cy)(e)&&(e=De(e));for(const o in e){const n=e[o];let s;s=(0,i.Gv)(n)?"default"in n?We(n.from||o,n.default,!0):We(n.from||o):We(n),(0,r.i9)(s)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Re(e,t,n){s((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ce(e,t,n,r){let o=r.includes(".")?Ot(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&St(o,n)}else if((0,i.Tn)(e))St(o,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>Ce(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&St(o,r,e)}else 0}function ke(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let l;return c?l=c:o.length||n||r?(l={},o.length&&o.forEach((e=>Pe(l,e,a,!0))),Pe(l,t,a)):l=t,(0,i.Gv)(t)&&s.set(t,l),l}function Pe(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Pe(e,o,n,!0),i&&i.forEach((t=>Pe(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=xe[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const xe={data:Ne,props:Ue,emits:Ue,methods:Me,computed:Me,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:Me,directives:Me,watch:Fe,provide:Ne,inject:Le};function Ne(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Le(e,t){return Me(De(e),De(t))}function De(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function je(e,t){return e?[...new Set([].concat(e,t))]:t}function Me(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function Ue(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Te(e),Te(null!=t?t:{})):t}function Fe(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=je(e[r],t[r]);return n}function Be(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ve=0;function $e(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const o=Be(),a=new WeakSet,c=[];let l=!1;const u=o.app={_uid:Ve++,_component:n,_props:r,_container:null,_context:o,_instance:null,version:Bn,get config(){return o.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,i.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),u},component(e,t){return t?(o.components[e]=t,u):o.components[e]},directive(e,t){return t?(o.directives[e]=t,u):o.directives[e]},mount(i,s,a){if(!l){0;const c=u._ceVNode||rn(n,r);return c.appContext=o,!0===a?a="svg":!1===a&&(a=void 0),s&&t?t(c,i):e(c,i,a),l=!0,u._container=i,i.__vue_app__=u,Dn(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(s(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return o.provides[e]=t,u},runWithContext(e){const t=ze;ze=u;try{return e()}finally{ze=t}}};return u}}let ze=null;function He(e,t){if(bn){let n=bn.provides;const r=bn.parent&&bn.parent.provides;r===n&&(n=bn.provides=Object.create(r)),n[e]=t}else 0}function We(e,t,n=!1){const r=bn||A;if(r||ze){const o=ze?ze._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const Ke={},Ge=()=>Object.create(Ke),qe=e=>Object.getPrototypeOf(e)===Ke;function Xe(e,t,n,i=!1){const o={},s=Ge();e.propsDefaults=Object.create(null),Ye(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Gc)(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Je(e,t,n,o){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.ux)(s),[u]=e.propsOptions;let h=!1;if(!(o||c>0)||16&c){let r;Ye(e,t,s,a)&&(h=!0);for(const o in l)t&&((0,i.$3)(t,o)||(r=(0,i.Tg)(o))!==o&&(0,i.$3)(t,r))||(u?!n||void 0===n[o]&&void 0===n[r]||(s[o]=Ze(u,l,o,void 0,e,!0)):delete s[o]);if(a!==l)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(kt(e.emitsOptions,o))continue;const c=t[o];if(u)if((0,i.$3)(a,o))c!==a[o]&&(a[o]=c,h=!0);else{const t=(0,i.PT)(o);s[t]=Ze(u,l,t,c,e,!1)}else c!==a[o]&&(a[o]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function Ye(e,t,n,o){const[s,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const u=t[r];let h;s&&(0,i.$3)(s,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:kt(e.emitsOptions,r)||r in o&&u===o[r]||(o[r]=u,l=!0)}if(a){const t=(0,r.ux)(n),o=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Ze(s,t,c,o[c],e,!(0,i.$3)(o,c))}}return l}function Ze(e,t,n,r,o,s){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=o;if(n in i)r=i[n];else{const s=Sn(o);r=i[n]=e.call(null,t),s()}}else r=e;o.ce&&o.ce._setProp(n,r)}a[0]&&(s&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Qe=new WeakMap;function et(e,t,n=!1){const r=n?Qe:t.propsCache,o=r.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!(0,i.Tn)(e)){const r=e=>{l=!0;const[n,r]=et(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(s))for(let h=0;h<s.length;h++){0;const e=(0,i.PT)(s[h]);tt(e)&&(a[e]=i.MZ)}else if(s){0;for(const e in s){const t=(0,i.PT)(e);if(tt(t)){const n=s[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),o=r.type;let l=!1,u=!0;if((0,i.cy)(o))for(let e=0;e<o.length;++e){const t=o[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,i.Tn)(o)&&"Boolean"===o.name;r[0]=l,r[1]=u,(l||(0,i.$3)(r,"default"))&&c.push(t)}}}const u=[a,c];return(0,i.Gv)(e)&&r.set(e,u),u}function tt(e){return"$"!==e[0]&&!(0,i.SU)(e)}const nt=e=>"_"===e[0]||"$stable"===e,rt=e=>(0,i.cy)(e)?e.map(hn):[hn(e)],it=(e,t,n)=>{if(t._n)return t;const r=k(((...e)=>rt(t(...e))),n);return r._c=!1,r},ot=(e,t,n)=>{const r=e._ctx;for(const o in e){if(nt(o))continue;const n=e[o];if((0,i.Tn)(n))t[o]=it(o,n,r);else if(null!=n){0;const e=rt(n);t[o]=()=>e}}},st=(e,t)=>{const n=rt(t);e.slots.default=()=>n},at=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},ct=(e,t,n)=>{const r=e.slots=Ge();if(32&e.vnode.shapeFlag){const e=t._;e?(at(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):ot(t,r)}else t&&st(e,t)},lt=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:at(o,t,n):(s=!t.$stable,ot(t,o)),a=t}else t&&(st(e,t),a={default:1});if(s)for(const i in o)nt(i)||null!=a[i]||delete o[i]};function ut(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ht=Ut;function ft(e){return dt(e)}function dt(e,t){ut();const n=(0,i.We)();n.__VUE__=!0;const{insert:o,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,o=null,s=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Qt(e,t)&&(r=Q(e),W(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Bt:y(e,t,n,r);break;case Vt:b(e,t,n,r);break;case $t:null==e&&_(t,n,r,s);break;case Ft:D(e,t,n,r,i,o,s,a,c);break;default:1&h?O(e,t,n,r,i,o,s,a,c):6&h?j(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,o,s,a,c,ne)}null!=u&&i&&K(u,e&&e.ref,o,t||e,!t)},y=(e,t,n,r)=>{if(null==e)o(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),o(e,n,r),e=i;o(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),s(e),e=n;s(t)},O=(e,t,n,r,i,o,s,a,c)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?A(t,n,r,i,o,s,a,c):k(e,t,i,o,s,a,c)},A=(e,t,n,r,s,l,u,h)=>{let d,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=e;if(d=e.el=c(e.type,l,g&&g.is,g),8&m?f(d,e.children):16&m&&C(e.children,d,null,r,s,pt(e,l),u,h),y&&x(e,null,r,"created"),R(d,e,e.scopeId,u,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(d,e,null,g[e],l,r);"value"in g&&a(d,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&gn(p,r,e)}y&&x(e,null,r,"beforeMount");const b=mt(s,v);b&&v.beforeEnter(d),o(d,t,n),((p=g&&g.onVnodeMounted)||b||y)&&ht((()=>{p&&gn(p,r,e),b&&v.enter(d),y&&x(e,null,r,"mounted")}),s)},R=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let o=0;o<r.length;o++)g(e,r[o]);if(i){let n=i.subTree;if(t===n||Mt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?fn(e[l]):hn(e[l]);v(null,c,t,n,r,i,o,s,a)}},k=(e,t,n,r,o,s,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=t;u|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&gt(n,!1),(m=g.onVnodeBeforeUpdate)&&gn(m,n,t,e),d&&x(t,e,n,"beforeUpdate"),n&&gt(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(l,""),h?P(e.dynamicChildren,h,l,n,r,pt(t,o),s):c||V(e,t,l,null,n,r,pt(t,o),s,!1),u>0){if(16&u)L(l,p,g,n,o);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,o),4&u&&a(l,"style",p.style,g.style,o),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],s=g[r];s===i&&"value"!==r||a(l,r,i,s,o,n)}}1&u&&e.children!==t.children&&f(l,t.children)}else c||null!=h||L(l,p,g,n,o);((m=g.onVnodeUpdated)||d)&&ht((()=>{m&&gn(m,n,t,e),d&&x(t,e,n,"updated")}),r)},P=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Ft||!Qt(c,l)||70&c.shapeFlag)?d(c.el):n;v(c,l,u,null,r,i,o,s,!0)}},L=(e,t,n,r,o)=>{if(t!==n){if(t!==i.MZ)for(const s in t)(0,i.SU)(s)||s in n||a(e,s,t[s],null,o,r);for(const s in n){if((0,i.SU)(s))continue;const c=n[s],l=t[s];c!==l&&"value"!==s&&a(e,s,l,c,o,r)}"value"in n&&a(e,"value",t.value,n.value,o)}},D=(e,t,n,r,i,s,a,c,u)=>{const h=t.el=e?e.el:l(""),f=t.anchor=e?e.anchor:l("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(o(h,n,r),o(f,n,r),C(t.children||[],n,f,i,s,a,c,u)):d>0&&64&d&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&vt(e,t,!0)):V(e,t,n,f,i,s,a,c,u)},j=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):M(t,n,r,i,o,s,c):U(e,t,c)},M=(e,t,n,r,i,o,s)=>{const a=e.component=yn(e,r,i);if(q(e)&&(a.ctx.renderer=ne),Cn(a,!1,s),a.asyncDep){if(i&&i.registerDep(a,F,s),!e.el){const e=a.subTree=rn(Vt);b(null,e,t,n)}}else F(a,e,t,n,i,o,s)},U=(e,t,n)=>{const r=t.component=e.component;if(Lt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,o,s,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:o,vnode:u}=e;{const n=bt(e);if(n)return t&&(t.el=u.el,B(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let h,f=t;0,gt(e,!1),t?(t.el=u.el,B(e,t,c)):t=u,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&gn(h,o,t,u),gt(e,!0);const p=Pt(e);0;const g=e.subTree;e.subTree=p,v(g,p,d(g.el),Q(g),e,s,a),t.el=p.el,null===f&&jt(e,p.el),r&&ht(r,s),(h=t.props&&t.props.onVnodeUpdated)&&ht((()=>gn(h,o,t,u)),s)}else{let r;const{el:c,props:l}=t,{bm:u,m:h,parent:f,root:d,type:p}=e,g=G(t);if(gt(e,!1),u&&(0,i.DY)(u),!g&&(r=l&&l.onVnodeBeforeMount)&&gn(r,f,t),gt(e,!0),c&&ie){const t=()=>{e.subTree=Pt(e),ie(c,e.subTree,e,s,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{d.ce&&d.ce._injectChildStyle(p);const r=e.subTree=Pt(e);0,v(null,r,n,o,e,s,a),t.el=r.el}if(h&&ht(h,s),!g&&(r=l&&l.onVnodeMounted)){const e=t;ht((()=>gn(r,f,e)),s)}(256&t.shapeFlag||f&&G(f.vnode)&&256&f.vnode.shapeFlag)&&e.a&&ht(e.a,s),e.isMounted=!0,t=n=o=null}};e.scope.on();const u=e.effect=new r.X2(l);e.scope.off();const h=e.update=u.run.bind(u),f=e.job=u.runIfDirty.bind(u);f.i=e,f.id=e.uid,u.scheduler=()=>w(f),gt(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Je(e,t.props,i,n),lt(e,t.children,n),(0,r.C4)(),S(e),(0,r.bl)()},V=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void z(l,h,n,r,i,o,s,a,c);if(256&d)return void $(l,h,n,r,i,o,s,a,c)}8&p?(16&u&&Z(l,i,o),h!==l&&f(n,h)):16&u?16&p?z(l,h,n,r,i,o,s,a,c):Z(l,i,o,!0):(8&u&&f(n,""),16&p&&C(h,n,r,i,o,s,a,c))},$=(e,t,n,r,o,s,a,c,l)=>{e=e||i.Oj,t=t||i.Oj;const u=e.length,h=t.length,f=Math.min(u,h);let d;for(d=0;d<f;d++){const r=t[d]=l?fn(t[d]):hn(t[d]);v(e[d],r,n,null,o,s,a,c,l)}u>h?Z(e,o,s,!0,!1,f):C(t,n,r,o,s,a,c,l,f)},z=(e,t,n,r,o,s,a,c,l)=>{let u=0;const h=t.length;let f=e.length-1,d=h-1;while(u<=f&&u<=d){const r=e[u],i=t[u]=l?fn(t[u]):hn(t[u]);if(!Qt(r,i))break;v(r,i,n,null,o,s,a,c,l),u++}while(u<=f&&u<=d){const r=e[f],i=t[d]=l?fn(t[d]):hn(t[d]);if(!Qt(r,i))break;v(r,i,n,null,o,s,a,c,l),f--,d--}if(u>f){if(u<=d){const e=d+1,i=e<h?t[e].el:r;while(u<=d)v(null,t[u]=l?fn(t[u]):hn(t[u]),n,i,o,s,a,c,l),u++}}else if(u>d)while(u<=f)W(e[u],o,s,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=d;u++){const e=t[u]=l?fn(t[u]):hn(t[u]);null!=e.key&&m.set(e.key,u)}let y,b=0;const w=d-g+1;let _=!1,E=0;const S=new Array(w);for(u=0;u<w;u++)S[u]=0;for(u=p;u<=f;u++){const r=e[u];if(b>=w){W(r,o,s,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===S[y-g]&&Qt(r,t[y])){i=y;break}void 0===i?W(r,o,s,!0):(S[i-g]=u+1,i>=E?E=i:_=!0,v(r,t[i],n,null,o,s,a,c,l),b++)}const T=_?yt(S):i.Oj;for(y=T.length-1,u=w-1;u>=0;u--){const e=g+u,i=t[e],f=e+1<h?t[e+1].el:r;0===S[u]?v(null,i,n,f,o,s,a,c,l):_&&(y<0||u!==T[y]?H(i,n,f,2):y--)}}},H=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void H(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===Ft){o(s,t,n);for(let e=0;e<l.length;e++)H(l[e],t,n,r);return void o(e.anchor,t,n)}if(a===$t)return void E(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(s),o(s,t,n),ht((()=>c.enter(s)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),l=()=>{e(s,(()=>{a(),i&&i()}))};r?r(s,a,l):l()}else o(s,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:f,cacheIndex:d}=e;if(-2===h&&(i=!1),null!=a&&K(a,null,n,e,!0),null!=d&&(t.renderCache[d]=void 0),256&u)return void t.ctx.deactivate(e);const p=1&u&&f,g=!G(e);let m;if(g&&(m=s&&s.onVnodeBeforeUnmount)&&gn(m,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&x(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,ne,r):l&&!l.hasOnce&&(o!==Ft||h>0&&64&h)?Z(l,t,n,!1,!0):(o===Ft&&384&h||!i&&16&u)&&Z(c,t,n),r&&X(e)}(g&&(m=s&&s.onVnodeUnmounted)||p)&&ht((()=>{m&&gn(m,t,e),p&&x(e,null,t,"unmounted")}),n)},X=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ft)return void J(n,r);if(t===$t)return void I(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},J=(e,t)=>{let n;while(e!==t)n=p(e),s(e),e=n;s(t)},Y=(e,t,n)=>{const{bum:r,scope:o,job:s,subTree:a,um:c,m:l,a:u}=e;wt(l),wt(u),r&&(0,i.DY)(r),o.stop(),s&&(s.flags|=8,W(a,e,t,n)),c&&ht(c,t),ht((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)W(e[s],t,n,r,i)},Q=e=>{if(6&e.shapeFlag)return Q(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[N];return n?p(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,S(),T(),ee=!1)},ne={p:v,um:W,m:H,r:X,mt:M,mc:C,pc:V,pbc:P,n:Q,o:e};let re,ie;return t&&([re,ie]=t(ne)),{render:te,hydrate:re,createApp:$e(te,re)}}function pt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function mt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vt(e,t,n=!1){const r=e.children,o=t.children;if((0,i.cy)(r)&&(0,i.cy)(o))for(let i=0;i<r.length;i++){const e=r[i];let t=o[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[i]=fn(o[i]),t.el=e.el),n||-2===t.patchFlag||vt(e,t)),t.type===Bt&&(t.el=e.el)}}function yt(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}function bt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bt(t)}function wt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const _t=Symbol.for("v-scx"),Et=()=>{{const e=We(_t);return e}};function St(e,t,n){return Tt(e,t,n)}function Tt(e,t,n=i.MZ){const{immediate:o,deep:a,flush:c,once:l}=n;const u=(0,i.X$)({},n);let h;if(Rn)if("sync"===c){const e=Et();h=e.__watcherHandles||(e.__watcherHandles=[])}else{if(t&&!o){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}u.once=!0}const f=bn;u.call=(e,t,n)=>s(e,f,t,n);let d=!1;"post"===c?u.scheduler=e=>{ht(e,f&&f.suspense)}:"sync"!==c&&(d=!0,u.scheduler=(e,t)=>{t?e():w(e)}),u.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const p=(0,r.wB)(e,t,u);return h&&h.push(p),p}function It(e,t,n){const r=this.proxy,o=(0,i.Kg)(e)?e.includes(".")?Ot(r,e):()=>r[e]:e.bind(r,r);let s;(0,i.Tn)(t)?s=t:(s=t.handler,n=t);const a=Sn(this),c=Tt(o,s.bind(r),n);return a(),c}function Ot(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const At=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function Rt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let o=n;const a=t.startsWith("update:"),c=a&&At(r,t.slice(7));let l;c&&(c.trim&&(o=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(o=n.map(i.bB)));let u=r[l=(0,i.rU)(t)]||r[l=(0,i.rU)((0,i.PT)(t))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(t))]),u&&s(u,e,6,o);const h=r[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,s(h,e,6,o)}}function Ct(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=Ct(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||c?((0,i.cy)(s)?s.forEach((e=>a[e]=null)):(0,i.X$)(a,s),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function kt(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function Pt(e){const{type:t,vnode:n,proxy:r,withProxy:o,propsOptions:[s],slots:c,attrs:l,emit:u,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:v}=e,y=C(e);let b,w;try{if(4&n.shapeFlag){const e=o||r,t=e;b=hn(h.call(t,e,f,d,g,p,m)),w=l}else{const e=t;0,b=hn(e.length>1?e(d,{attrs:l,slots:c,emit:u}):e(d,null)),w=t.props?l:xt(l)}}catch(E){zt.length=0,a(E,e,1),b=rn(Vt)}let _=b;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(s&&e.some(i.CP)&&(w=Nt(w,s)),_=an(_,w,!1,!0))}return n.dirs&&(_=an(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&$(_,n.transition),b=_,C(y),b}const xt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Nt=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Lt(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||Dt(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?Dt(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!kt(l,n))return!0}}return!1}function Dt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!kt(n,o))return!0}return!1}function jt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const Mt=e=>e.__isSuspense;function Ut(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const Ft=Symbol.for("v-fgt"),Bt=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),$t=Symbol.for("v-stc"),zt=[];let Ht=null;function Wt(e=!1){zt.push(Ht=e?null:[])}function Kt(){zt.pop(),Ht=zt[zt.length-1]||null}let Gt=1;function qt(e){Gt+=e,e<0&&Ht&&(Ht.hasOnce=!0)}function Xt(e){return e.dynamicChildren=Gt>0?Ht||i.Oj:null,Kt(),Gt>0&&Ht&&Ht.push(e),e}function Jt(e,t,n,r,i,o){return Xt(nn(e,t,n,r,i,o,!0))}function Yt(e,t,n,r,i){return Xt(rn(e,t,n,r,i,!0))}function Zt(e){return!!e&&!0===e.__v_isVNode}function Qt(e,t){return e.type===t.type&&e.key===t.key}const en=({key:e})=>null!=e?e:null,tn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:A,r:e,k:t,f:!!n}:e:null);function nn(e,t=null,n=null,r=0,o=null,s=(e===Ft?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&en(t),ref:t&&tn(t),scopeId:R,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:A};return c?(dn(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),Gt>0&&!a&&Ht&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Ht.push(l),l}const rn=on;function on(e,t=null,n=null,o=0,s=null,a=!1){if(e&&e!==me||(e=Vt),Zt(e)){const r=an(e,t,!0);return n&&dn(r,n),Gt>0&&!a&&Ht&&(6&r.shapeFlag?Ht[Ht.indexOf(e)]=r:Ht.push(r)),r.patchFlag=-2,r}if(Mn(e)&&(e=e.__vccOpts),t){t=sn(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Mt(e)?128:L(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return nn(e,t,n,o,s,c,a,!0)}function sn(e){return e?(0,r.ju)(e)||qe(e)?(0,i.X$)({},e):e:null}function an(e,t,n=!1,r=!1){const{props:o,ref:s,patchFlag:a,children:c,transition:l}=e,u=t?pn(o||{},t):o,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&en(u),ref:t&&t.ref?n&&s?(0,i.cy)(s)?s.concat(tn(t)):[s,tn(t)]:tn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ft?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&$(h,l.clone(h)),h}function cn(e=" ",t=0){return rn(Bt,null,e,t)}function ln(e,t){const n=rn($t,null,e);return n.staticCount=t,n}function un(e="",t=!1){return t?(Wt(),Yt(Vt,null,e)):rn(Vt,null,e)}function hn(e){return null==e||"boolean"===typeof e?rn(Vt):(0,i.cy)(e)?rn(Ft,null,e.slice()):"object"===typeof e?fn(e):rn(Bt,null,String(e))}function fn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:an(e)}function dn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),dn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||qe(t)?3===r&&A&&(1===A.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=A}}else(0,i.Tn)(t)?(t={default:t,_ctx:A},n=32):(t=String(t),64&r?(n=16,t=[cn(t)]):n=8);e.children=t,e.shapeFlag|=n}function pn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],o=r[e];!o||n===o||(0,i.cy)(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function gn(e,t,n,r=null){s(e,t,7,[n,r])}const mn=Be();let vn=0;function yn(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||mn,a={uid:vn++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:et(o,s),emitsOptions:Ct(o,s),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:o.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Rt.bind(null,a),e.ce&&e.ce(a),a}let bn=null;const wn=()=>bn||A;let _n,En;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};_n=t("__VUE_INSTANCE_SETTERS__",(e=>bn=e)),En=t("__VUE_SSR_SETTERS__",(e=>Rn=e))}const Sn=e=>{const t=bn;return _n(e),e.scope.on(),()=>{e.scope.off(),_n(t)}},Tn=()=>{bn&&bn.scope.off(),_n(null)};function In(e){return 4&e.vnode.shapeFlag}let On,An,Rn=!1;function Cn(e,t=!1,n=!1){t&&En(t);const{props:r,children:i}=e.vnode,o=In(e);Xe(e,r,o,t),ct(e,i,n);const s=o?kn(e,t):void 0;return t&&En(!1),s}function kn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Se);const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Ln(e):null,c=Sn(e);(0,r.C4)();const l=o(s,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,i.yL)(l)){if(G(e)||W(e),l.then(Tn,Tn),t)return l.then((n=>{Pn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Pn(e,l,t)}else xn(e,t)}function Pn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),xn(e,n)}function xn(e,t,n){const o=e.type;if(!e.render){if(!t&&On&&!o.render){const t=o.template||ke(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:s},r),a);o.render=On(t,c)}}e.render=o.render||i.tE,An&&An(e)}{const t=Sn(e);(0,r.C4)();try{Oe(e)}finally{(0,r.bl)(),t()}}}const Nn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Ln(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Nn),slots:e.slots,emit:e.emit,expose:t}}function Dn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in _e?_e[n](e):void 0},has(e,t){return t in e||t in _e}})):e.proxy}function jn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Mn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const Un=(e,t)=>{const n=(0,r.EW)(e,t,Rn);return n};function Fn(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?Zt(t)?rn(e,null,[t]):rn(e,t):rn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Zt(n)&&(n=[n]),rn(e,t,n))}const Bn="3.5.8"},5130:function(e,t,n){n.d(t,{D$:function(){return Q},Ef:function(){return ie},Jo:function(){return G},XX:function(){return re},u1:function(){return q}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),i=n(4232);n(144);
/**
* @vue/runtime-dom v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let o;const s="undefined"!==typeof window&&window.trustedTypes;if(s)try{o=s.createPolicy("vue",{createHTML:e=>e})}catch(ae){}const a=o?e=>o.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),f={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?u.createElementNS(c,e):"mathml"===t?u.createElementNS(l,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=h.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},d=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function g(e,t,n){const r=e[d];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const m=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const b=/(^|;)\s*display\s*:/;function w(e,t,n){const r=e.style,o=(0,i.Kg)(n);let s=!1;if(n&&!o){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&E(r,t,"")}else for(const e in t)null==n[e]&&E(r,e,"");for(const e in n)"display"===e&&(s=!0),E(r,e,n[e])}else if(o){if(t!==n){const e=r[y];e&&(n+=";"+e),r.cssText=n,s=b.test(n)}}else t&&e.removeAttribute("style");m in e&&(e[m]=s?r.display:"",e[v]&&(r.display="none"))}const _=/\s*!important$/;function E(e,t,n){if((0,i.cy)(n))n.forEach((n=>E(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=I(e,t);_.test(n)?e.setProperty((0,i.Tg)(r),n.replace(_,""),"important"):e[r]=n}}const S=["Webkit","Moz","ms"],T={};function I(e,t){const n=T[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return T[t]=r;r=(0,i.ZH)(r);for(let i=0;i<S.length;i++){const n=S[i]+r;if(n in e)return T[t]=n}return t}const O="http://www.w3.org/1999/xlink";function A(e,t,n,r,o,s=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(O,t.slice(6,t.length)):e.setAttributeNS(O,t,n):null==n||s&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":(0,i.Bm)(n)?String(n):n)}function R(e,t,n,r){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let s=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",s=!0):"number"===r&&(n=0,s=!0)}try{e[t]=n}catch(ae){0}s&&e.removeAttribute(t)}function C(e,t,n,r){e.addEventListener(t,n,r)}function k(e,t,n,r){e.removeEventListener(t,n,r)}const P=Symbol("_vei");function x(e,t,n,r,i=null){const o=e[P]||(e[P]={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=L(t);if(r){const s=o[t]=U(r,i);C(e,n,s,a)}else s&&(k(e,n,s,a),o[t]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function L(e){let t;if(N.test(e)){let n;t={};while(n=e.match(N))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let D=0;const j=Promise.resolve(),M=()=>D||(j.then((()=>D=0)),D=Date.now());function U(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(F(e,n.value),t,5,[e])};return n.value=e,n.attached=M(),n}function F(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const B=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,V=(e,t,n,r,o,s)=>{const a="svg"===o;"class"===t?g(e,r,a):"style"===t?w(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||x(e,t,n,r,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):$(e,t,r,a))?(R(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||A(e,t,r,a,s,"value"!==t)):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),A(e,t,r,a))};function $(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&B(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!B(t)||!(0,i.Kg)(n))&&(t in e||!(!e._isVueCE||!/[A-Z]/.test(t)&&(0,i.Kg)(n)))}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const z=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function H(e){e.target.composing=!0}function W(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const K=Symbol("_assign"),G={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e[K]=z(o);const s=r||o.props&&"number"===o.props.type;C(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=(0,i.bB)(r)),e[K](r)})),n&&C(e,"change",(()=>{e.value=e.value.trim()})),t||(C(e,"compositionstart",H),C(e,"compositionend",W),C(e,"change",W))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:o,number:s}},a){if(e[K]=z(a),e.composing)return;const c=!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),l=null==t?"":t;if(c!==l){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(o&&e.value.trim()===l)return}e.value=l}}};const q={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const s=(0,i.vM)(t);C(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.bB)(J(e)):J(e)));e[K](e.multiple?s?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)((()=>{e._assigning=!1}))})),e[K]=z(o)},mounted(e,{value:t,modifiers:{number:n}}){X(e,t)},beforeUpdate(e,t,n){e[K]=z(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||X(e,t)}};function X(e,t,n){const r=e.multiple,o=(0,i.cy)(t);if(!r||o||(0,i.vM)(t)){for(let n=0,s=e.options.length;n<s;n++){const s=e.options[n],a=J(s);if(r)if(o){const e=typeof a;s.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):(0,i.u3)(t,a)>-1}else s.selected=t.has(a);else if((0,i.BX)(J(s),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}r||-1===e.selectedIndex||(e.selectedIndex=-1)}}function J(e){return"_value"in e?e._value:e.value}const Y=["ctrl","shift","alt","meta"],Z={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Y.some((n=>e[`${n}Key`]&&!t.includes(n)))},Q=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=Z[t[e]];if(r&&r(n,t))return}return e(n,...r)})},ee=(0,i.X$)({patchProp:V},f);let te;function ne(){return te||(te=(0,r.K9)(ee))}const re=(...e)=>{ne().render(...e)},ie=(...e)=>{const t=ne().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=se(e);if(!r)return;const o=t._component;(0,i.Tn)(o)||o.render||o.template||(o.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const s=n(r,!1,oe(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function oe(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function se(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return d},$H:function(){return M},BH:function(){return W},BX:function(){return ne},Bm:function(){return _},C4:function(){return Y},CE:function(){return g},CP:function(){return l},DY:function(){return U},Gv:function(){return E},J$:function(){return Q},Kg:function(){return w},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return o},PT:function(){return x},Qd:function(){return A},Ro:function(){return V},SU:function(){return C},TF:function(){return h},Tg:function(){return L},Tn:function(){return b},Tr:function(){return K},We:function(){return z},X$:function(){return u},Y2:function(){return ee},ZH:function(){return D},Zf:function(){return O},bB:function(){return B},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return j},tE:function(){return s},u3:function(){return re},vM:function(){return m},v_:function(){return oe},yI:function(){return R},yL:function(){return S},yQ:function(){return F}});n(4114);
/**
* @vue/shared v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const i={},o=[],s=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(e,t)=>f.call(e,t),p=Array.isArray,g=e=>"[object Map]"===I(e),m=e=>"[object Set]"===I(e),v=e=>"[object Date]"===I(e),y=e=>"[object RegExp]"===I(e),b=e=>"function"===typeof e,w=e=>"string"===typeof e,_=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,S=e=>(E(e)||b(e))&&b(e.then)&&b(e.catch),T=Object.prototype.toString,I=e=>T.call(e),O=e=>I(e).slice(8,-1),A=e=>"[object Object]"===I(e),R=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,C=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},P=/-(\w)/g,x=k((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),N=/\B([A-Z])/g,L=k((e=>e.replace(N,"-$1").toLowerCase())),D=k((e=>e.charAt(0).toUpperCase()+e.slice(1))),j=k((e=>{const t=e?`on${D(e)}`:"";return t})),M=(e,t)=>!Object.is(e,t),U=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},F=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let $;const z=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",W=r(H);function K(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=w(r)?J(r):K(r);if(i)for(const e in i)t[e]=i[e]}return t}if(w(e)||E(e))return e}const G=/;(?![^(]*\))/g,q=/:([^]+)/,X=/\/\*[^]*?\*\//g;function J(e){const t={};return e.replace(X,"").split(G).forEach((e=>{if(e){const n=e.split(q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Y(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Y(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q=r(Z);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=_(e),r=_(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e["__v_isRef"]),oe=e=>w(e)?e:null==e?"":p(e)||E(e)&&(e.toString===T||!b(e.toString))?ie(e)?oe(e.value):JSON.stringify(e,se,2):String(e),se=(e,t)=>ie(t)?se(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:_(t)?ae(t):!E(t)||p(t)||A(t)?t:String(t),ae=(e,t="")=>{var n;return _(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){var r=n(4901),i=n(6823),o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},6469:function(e,t,n){var r=n(8227),i=n(2360),o=n(4913).f,s=r("unscopables"),a=Array.prototype;void 0===a[s]&&o(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},679:function(e,t,n){var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not an object")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(4576),i=n(6706),o=n(2195),s=r.ArrayBuffer,a=r.TypeError;e.exports=s&&i(s.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==o(e))throw new a("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(4576),i=n(7476),o=n(7394),s=r.ArrayBuffer,a=s&&s.prototype,c=a&&i(a.slice);e.exports=function(e){if(0!==o(e))return!1;if(!c)return!1;try{return c(e,0,0),!1}catch(t){return!0}}},5169:function(e,t,n){var r=n(3238),i=TypeError;e.exports=function(e){if(r(e))throw new i("ArrayBuffer is detached");return e}},5636:function(e,t,n){var r=n(4576),i=n(9504),o=n(6706),s=n(7696),a=n(5169),c=n(7394),l=n(4483),u=n(1548),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=Math.min,g=f.prototype,m=d.prototype,v=i(g.slice),y=o(g,"resizable","get"),b=o(g,"maxByteLength","get"),w=i(m.getInt8),_=i(m.setInt8);e.exports=(u||l)&&function(e,t,n){var r,i=c(e),o=void 0===t?i:s(t),g=!y||!y(e);if(a(e),u&&(e=h(e,{transfer:[e]}),i===o&&(n||g)))return e;if(i>=o&&(!n||g))r=v(e,0,o);else{var m=n&&!g&&b?{maxByteLength:b(e)}:void 0;r=new f(o,m);for(var E=new d(e),S=new d(r),T=p(o,i),I=0;I<T;I++)_(S,I,w(E,I))}return u||l(e),r}},4644:function(e,t,n){var r,i,o,s=n(7811),a=n(3724),c=n(4576),l=n(4901),u=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),b=n(2967),w=n(8227),_=n(3392),E=n(1181),S=E.enforce,T=E.get,I=c.Int8Array,O=I&&I.prototype,A=c.Uint8ClampedArray,R=A&&A.prototype,C=I&&y(I),k=O&&y(O),P=Object.prototype,x=c.TypeError,N=w("toStringTag"),L=_("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",j=s&&!!b&&"Opera"!==f(c.opera),M=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!u(e))return!1;var t=f(e);return"DataView"===t||h(U,t)||h(F,t)},V=function(e){var t=y(e);if(u(t)){var n=T(t);return n&&h(n,D)?n[D]:V(t)}},$=function(e){if(!u(e))return!1;var t=f(e);return h(U,t)||h(F,t)},z=function(e){if($(e))return e;throw new x("Target is not a typed array")},H=function(e){if(l(e)&&(!b||v(C,e)))return e;throw new x(d(e)+" is not a typed array constructor")},W=function(e,t,n,r){if(a){if(n)for(var i in U){var o=c[i];if(o&&h(o.prototype,e))try{delete o.prototype[e]}catch(s){try{o.prototype[e]=t}catch(l){}}}k[e]&&!n||g(k,e,n?t:j&&O[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(b){if(n)for(r in U)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(o){}if(C[e]&&!n)return;try{return g(C,e,n?t:j&&C[e]||t)}catch(o){}}for(r in U)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in U)i=c[r],o=i&&i.prototype,o?S(o)[D]=i:j=!1;for(r in F)i=c[r],o=i&&i.prototype,o&&(S(o)[D]=i);if((!j||!l(C)||C===Function.prototype)&&(C=function(){throw new x("Incorrect invocation")},j))for(r in U)c[r]&&b(c[r],C);if((!j||!k||k===P)&&(k=C.prototype,j))for(r in U)c[r]&&b(c[r].prototype,k);if(j&&y(R)!==k&&b(R,k),a&&!h(k,N))for(r in M=!0,m(k,N,{configurable:!0,get:function(){return u(this)?this[L]:void 0}}),U)c[r]&&p(c[r],L,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:j,TYPED_ARRAY_TAG:M&&L,aTypedArray:z,aTypedArrayConstructor:H,exportTypedArrayMethod:W,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:V,isView:B,isTypedArray:$,TypedArray:C,TypedArrayPrototype:k}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var i=0,o=arguments.length>2?n:r(t),s=new e(o);while(o>i)s[i]=t[i++];return s}},9617:function(e,t,n){var r=n(5397),i=n(5610),o=n(6198),s=function(e){return function(t,n,s){var a=r(t),c=o(a);if(0===c)return!e&&-1;var l,u=i(s,c);if(e&&n!==n){while(c>u)if(l=a[u++],l!==l)return!0}else for(;c>u;u++)if((e||u in a)&&a[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7680:function(e,t,n){var r=n(9504);e.exports=r([].slice)},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),i=new t(n),o=0;o<n;o++)i[o]=e[n-o-1];return i}},9928:function(e,t,n){var r=n(6198),i=n(1291),o=RangeError;e.exports=function(e,t,n,s){var a=r(e),c=i(n),l=c<0?a+c:c;if(l>=a||l<0)throw new o("Incorrect index");for(var u=new t(a),h=0;h<a;h++)u[h]=h===l?s:e[h];return u}},2195:function(e,t,n){var r=n(9504),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},6955:function(e,t,n){var r=n(2140),i=n(4901),o=n(2195),s=n(8227),a=s("toStringTag"),c=Object,l="Arguments"===o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?o(t):"Object"===(r=o(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),i=n(5031),o=n(7347),s=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=s.f,l=o.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||c(e,h,l(t,h))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){var r=n(3724),i=n(4913),o=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),i=n(4913),o=n(283),s=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&o(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){var r=n(4576),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){var r,i,o,s,a=n(4576),c=n(9429),l=n(1548),u=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(l)d=function(e){u(e,{transfer:[e]})};else if(h)try{f||(r=c("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,o=new h(2),s=function(e){i.port1.postMessage(null,[e])},2===o.byteLength&&(s(o),0===o.byteLength&&(d=s)))}catch(p){}e.exports=d},4055:function(e,t,n){var r=n(4576),i=n(34),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9544:function(e,t,n){var r=n(2839);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},8574:function(e,t,n){var r=n(4215);e.exports="NODE"===r},2839:function(e,t,n){var r=n(4576),i=r.navigator,o=i&&i.userAgent;e.exports=o?String(o):""},9519:function(e,t,n){var r,i,o=n(4576),s=n(2839),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},4215:function(e,t,n){var r=n(4576),i=n(2839),o=n(2195),s=function(e){return i.slice(0,e.length)===e};e.exports=function(){return s("Bun/")?"BUN":s("Cloudflare-Workers")?"CLOUDFLARE":s("Deno/")?"DENO":s("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===o(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},6193:function(e,t,n){var r=n(9504),i=Error,o=r("".replace),s=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},6518:function(e,t,n){var r=n(4576),i=n(7347).f,o=n(6699),s=n(6840),a=n(9433),c=n(7740),l=n(2796);e.exports=function(e,t){var n,u,h,f,d,p,g=e.target,m=e.global,v=e.stat;if(u=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,u)for(h in t){if(d=t[h],e.dontCallGetSet?(p=i(u,h),f=p&&p.value):f=u[h],n=l(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(e.sham||f&&f.sham)&&o(d,"sham",!0),s(u,h,d,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},8745:function(e,t,n){var r=n(616),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},6080:function(e,t,n){var r=n(7476),i=n(9306),o=n(616),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},6706:function(e,t,n){var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},7476:function(e,t,n){var r=n(2195),i=n(9504);e.exports=function(e){if("Function"===r(e))return i(e)}},9504:function(e,t,n){var r=n(616),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},9429:function(e,t,n){var r=n(4576),i=n(8574);e.exports=function(e){if(i){try{return r.process.getBuiltinModule(e)}catch(t){}try{return Function('return require("'+e+'")')()}catch(t){}}}},4124:function(e,t,n){var r=n(4576);e.exports=function(e,t){var n=r[e],i=n&&n.prototype;return i&&i[t]}},7751:function(e,t,n){var r=n(4576),i=n(4901),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),i=n(8551),o=n(9565),s=n(1291),a=n(1767),c="Invalid size",l=RangeError,u=TypeError,h=Math.max,f=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};f.prototype={getIterator:function(){return a(i(o(this.keys,this.set)))},includes:function(e){return o(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new u(c);var n=s(t);if(n<0)throw new l(c);return new f(e,n)}},4576:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},421:function(e){e.exports={}},397:function(e,t,n){var r=n(7751);e.exports=r("document","documentElement")},5917:function(e,t,n){var r=n(3724),i=n(9039),o=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),i=n(9039),o=n(2195),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?a(e,""):s(e)}:s},3167:function(e,t,n){var r=n(4901),i=n(34),o=n(2967);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},3706:function(e,t,n){var r=n(9504),i=n(4901),o=n(7629),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},1181:function(e,t,n){var r,i,o,s=n(8622),a=n(4576),c=n(34),l=n(6699),u=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var b=h.state||(h.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw new g(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},o=function(e){return b.has(e)}}else{var w=f("state");d[w]=!0,r=function(e,t){if(u(e,w))throw new g(p);return t.facade=e,l(e,w,t),t},i=function(e){return u(e,w)?e[w]:{}},o=function(e){return u(e,w)}}e.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},4376:function(e,t,n){var r=n(2195);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n===u||n!==l&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),i=n(4901),o=n(1625),s=n(7040),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var i,o,s=n?e:e.iterator,a=e.next;while(!(i=r(a,s)).done)if(o=t(i.value),void 0!==o)return o}},9539:function(e,t,n){var r=n(9565),i=n(8551),o=n(5966);e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),o=n(4901),s=n(9297),a=n(3724),c=n(350).CONFIGURABLE,l=n(3706),u=n(1181),h=u.enforce,f=u.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===g(d(t),0,7)&&(t="["+m(d(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return s(r,"source")||(r.source=v(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return o(this)&&f(this).source||l(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},2360:function(e,t,n){var r,i=n(8551),o=n(6801),s=n(8727),a=n(421),c=n(397),l=n(4055),u=n(6119),h=">",f="<",d="prototype",p="script",g=u("IE_PROTO"),m=function(){},v=function(e){return f+p+h+e+f+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=s.length;while(e--)delete w[d][s[e]];return w()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[d]=i(e),n=new m,m[d]=null,n[g]=e):n=w(),void 0===t?n:o.f(n,t)}},6801:function(e,t,n){var r=n(3724),i=n(8686),o=n(4913),s=n(8551),a=n(5397),c=n(1072);t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),l=i.length,u=0;while(l>u)o.f(e,n=i[u++],r[n]);return e}},4913:function(e,t,n){var r=n(3724),i=n(5917),o=n(8686),s=n(8551),a=n(6969),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=u(e,t);r&&r[d]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),o=n(8773),s=n(6980),a=n(5397),c=n(6969),l=n(9297),u=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),i=n(4901),o=n(8981),s=n(6119),a=n(2211),c=s("IE_PROTO"),l=Object,u=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?u:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),o=n(5397),s=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=o(e),l=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&c(u,n);while(t.length>l)i(r,n=t[l++])&&(~s(u,n)||c(u,n));return u}},1072:function(e,t,n){var r=n(1828),i=n(8727);e.exports=Object.keys||function(e){return r(e,i)}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),i=n(34),o=n(7750),s=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return o(n),s(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),i=n(4901),o=n(34),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw new s("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),o=n(8480),s=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},7979:function(e,t,n){var r=n(8551);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9472:function(e,t,n){var r=n(4576),i=n(8745),o=n(4901),s=n(4215),a=n(2839),c=n(7680),l=n(2812),u=r.Function,h=/MSIE .\./.test(a)||"BUN"===s&&function(){var e=r.Bun.version.split(".");return e.length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2])}();e.exports=function(e,t){var n=t?2:1;return h?function(r,s){var a=l(arguments.length,1)>n,h=o(r)?r:u(r),f=a?c(arguments,n):[],d=a?function(){i(h,this,f)}:h;return t?e(d,s):e(d)}:e}},9286:function(e,t,n){var r=n(4402),i=n(8469),o=r.Set,s=r.add;e.exports=function(e){var t=new o;return i(e,(function(e){s(t,e)})),t}},3440:function(e,t,n){var r=n(7080),i=n(4402),o=n(9286),s=n(5170),a=n(3789),c=n(8469),l=n(507),u=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=o(t);return s(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):l(n.getIterator(),(function(e){u(t,e)&&h(i,e)})),i}},4402:function(e,t,n){var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){var r=n(7080),i=n(4402),o=n(5170),s=n(3789),a=n(8469),c=n(507),l=i.Set,u=i.add,h=i.has;e.exports=function(e){var t=r(this),n=s(e),i=new l;return o(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&u(i,e)})):a(t,(function(e){n.includes(e)&&u(i,e)})),i}},4449:function(e,t,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(8469),c=n(507),l=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var u=n.getIterator();return!1!==c(u,(function(e){if(i(t,e))return l(u,"normal",!1)}))}},3838:function(e,t,n){var r=n(7080),i=n(5170),o=n(8469),s=n(3789);e.exports=function(e){var t=r(this),n=s(e);return!(i(t)>n.size)&&!1!==o(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){var r=n(7080),i=n(4402).has,o=n(5170),s=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=s(e);if(o(t)<n.size)return!1;var l=n.getIterator();return!1!==a(l,(function(e){if(!i(t,e))return c(l,"normal",!1)}))}},8469:function(e,t,n){var r=n(9504),i=n(507),o=n(4402),s=o.Set,a=o.proto,c=r(a.forEach),l=r(a.keys),u=l(new s).next;e.exports=function(e,t,n){return n?i({iterator:l(e),next:u},t):c(e,t)}},4916:function(e,t,n){var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](i(0));try{return(new t)[e](i(-1)),!1}catch(n){return!0}}catch(o){return!1}}},5170:function(e,t,n){var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),i=n(4402),o=n(9286),s=n(3789),a=n(507),c=i.add,l=i.has,u=i.remove;e.exports=function(e){var t=r(this),n=s(e).getIterator(),i=o(t);return a(n,(function(e){l(t,e)?u(i,e):c(i,e)})),i}},4204:function(e,t,n){var r=n(7080),i=n(4402).add,o=n(9286),s=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=s(e).getIterator(),c=o(t);return a(n,(function(e){i(c,e)})),c}},6119:function(e,t,n){var r=n(5745),i=n(3392),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4576),o=n(9433),s="__core-js_shared__",a=e.exports=i[s]||o(s,{});(a.versions||(a.versions=[])).push({version:"3.38.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4576),i=n(9039),o=n(9519),s=n(4215),a=r.structuredClone;e.exports=!!a&&!i((function(){if("DENO"===s&&o>92||"NODE"===s&&o>94||"BROWSER"===s&&o>97)return!1;var e=new ArrayBuffer(8),t=a(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){var r=n(9519),i=n(9039),o=n(4576),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9225:function(e,t,n){var r,i,o,s,a=n(4576),c=n(8745),l=n(6080),u=n(4901),h=n(9297),f=n(9039),d=n(397),p=n(7680),g=n(4055),m=n(2812),v=n(9544),y=n(8574),b=a.setImmediate,w=a.clearImmediate,_=a.process,E=a.Dispatch,S=a.Function,T=a.MessageChannel,I=a.String,O=0,A={},R="onreadystatechange";f((function(){r=a.location}));var C=function(e){if(h(A,e)){var t=A[e];delete A[e],t()}},k=function(e){return function(){C(e)}},P=function(e){C(e.data)},x=function(e){a.postMessage(I(e),r.protocol+"//"+r.host)};b&&w||(b=function(e){m(arguments.length,1);var t=u(e)?e:S(e),n=p(arguments,1);return A[++O]=function(){c(t,void 0,n)},i(O),O},w=function(e){delete A[e]},y?i=function(e){_.nextTick(k(e))}:E&&E.now?i=function(e){E.now(k(e))}:T&&!v?(o=new T,s=o.port2,o.port1.onmessage=P,i=l(s.postMessage,s)):a.addEventListener&&u(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(x)?(i=x,a.addEventListener("message",P,!1)):i=R in g("script")?function(e){d.appendChild(g("script"))[R]=function(){d.removeChild(this),C(e)}}:function(e){setTimeout(k(e),0)}),e.exports={set:b,clear:w}},5610:function(e,t,n){var r=n(1291),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5854:function(e,t,n){var r=n(2777),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),i=n(8014),o=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new o("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),o=n(757),s=n(5966),a=n(4270),c=n(8227),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,u);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw new l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},655:function(e,t,n){var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4576),i=n(4901),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},8227:function(e,t,n){var r=n(4576),i=n(5745),o=n(9297),s=n(3392),a=n(4495),c=n(7040),l=r.Symbol,u=i("wks"),h=c?l["for"]||l:l&&l.withoutSetter||s;e.exports=function(e){return o(u,e)||(u[e]=a&&o(l,e)?l[e]:h("Symbol."+e)),u[e]}},6573:function(e,t,n){var r=n(3724),i=n(2106),o=n(3238),s=ArrayBuffer.prototype;r&&!("detached"in s)&&i(s,"detached",{configurable:!0,get:function(){return o(this)}})},7936:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){var r=n(6518),i=n(8981),o=n(6198),s=n(4527),a=n(6837),c=n(9039),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},9678:function(e,t,n){var r=n(6518),i=n(7628),o=n(5397),s=n(6469),a=Array;r({target:"Array",proto:!0},{toReversed:function(){return i(o(this),a)}}),s("toReversed")},7145:function(e,t,n){var r=n(6518),i=n(9504),o=n(9306),s=n(5397),a=n(5370),c=n(4124),l=n(6469),u=Array,h=i(c("Array","sort"));r({target:"Array",proto:!0},{toSorted:function(e){void 0!==e&&o(e);var t=s(this),n=a(u,t);return h(n,e)}}),l("toSorted")},1658:function(e,t,n){var r=n(6518),i=n(6469),o=n(6837),s=n(6198),a=n(5610),c=n(5397),l=n(1291),u=Array,h=Math.max,f=Math.min;r({target:"Array",proto:!0},{toSpliced:function(e,t){var n,r,i,d,p=c(this),g=s(p),m=a(e,g),v=arguments.length,y=0;for(0===v?n=r=0:1===v?(n=0,r=g-m):(n=v-2,r=f(h(l(t),0),g-m)),i=o(g+n-r),d=u(i);y<m;y++)d[y]=p[y];for(;y<m+n;y++)d[y]=arguments[y-m+2];for(;y<i;y++)d[y]=p[y+r-n];return d}}),i("toSpliced")},9479:function(e,t,n){var r=n(4576),i=n(3724),o=n(2106),s=n(7979),a=n(9039),c=r.RegExp,l=c.prototype,u=i&&a((function(){var e=!0;try{c(".","d")}catch(u){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in e&&(o.hasIndices="d"),o)i(s,o[s]);var a=Object.getOwnPropertyDescriptor(l,"flags").get.call(t);return a!==r||n!==r}));u&&o(l,"flags",{configurable:!0,get:s})},7642:function(e,t,n){var r=n(6518),i=n(3440),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:i})},8004:function(e,t,n){var r=n(6518),i=n(9039),o=n(8750),s=n(4916),a=!s("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:o})},3853:function(e,t,n){var r=n(6518),i=n(4449),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:i})},5876:function(e,t,n){var r=n(6518),i=n(3838),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:i})},2475:function(e,t,n){var r=n(6518),i=n(8527),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:i})},5024:function(e,t,n){var r=n(6518),i=n(3650),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:i})},1698:function(e,t,n){var r=n(6518),i=n(4204),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:i})},7467:function(e,t,n){var r=n(7628),i=n(4644),o=i.aTypedArray,s=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;s("toReversed",(function(){return r(o(this),a(this))}))},4732:function(e,t,n){var r=n(4644),i=n(9504),o=n(9306),s=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,u=i(r.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&o(e);var t=a(this),n=s(c(t),t);return u(n,e)}))},9577:function(e,t,n){var r=n(9928),i=n(4644),o=n(1108),s=n(1291),a=n(5854),c=i.aTypedArray,l=i.getTypedArrayConstructor,u=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,t){var n=c(this),i=s(e),u=o(n)?a(t):+t;return r(n,l(n),i,u)}}["with"],!h)},6368:function(e,t,n){var r=n(6518),i=n(4576),o=n(9225).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},4979:function(e,t,n){var r=n(6518),i=n(4576),o=n(7751),s=n(6980),a=n(4913).f,c=n(9297),l=n(679),u=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",v=o("Error"),y=o(m),b=function(){l(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=new v(t);return i.name=m,a(r,"stack",s(1,d(i.stack,1))),u(r,this,b),r},w=b.prototype=y.prototype,_="stack"in new v(m),E="stack"in new y(1,2),S=y&&p&&Object.getOwnPropertyDescriptor(i,m),T=!!S&&!(S.writable&&S.configurable),I=_&&!T&&!E;r({global:!0,constructor:!0,forced:g||I},{DOMException:I?b:y});var O=o(m),A=O.prototype;if(A.constructor!==O)for(var R in g||a(A,"constructor",s(1,O)),f)if(c(f,R)){var C=f[R],k=C.s;c(O,k)||a(O,k,s(6,C.c))}},9848:function(e,t,n){n(6368),n(9309)},9309:function(e,t,n){var r=n(6518),i=n(4576),o=n(9225).set,s=n(9472),a=i.setImmediate?s(o,!1):o;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},4603:function(e,t,n){var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,l=i(c.append),u=i(c["delete"]),h=i(c.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=[];h(this,(function(e,t){f(r,{key:t,value:e})})),s(t,1);var i,a=o(e),c=o(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,u(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||l(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),i=n(9504),o=n(655),s=n(2812),a=URLSearchParams,c=a.prototype,l=i(c.getAll),u=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var r=l(this,e);s(t,1);var i=o(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),i=n(9504),o=n(2106),s=URLSearchParams.prototype,a=i(s.forEach);r&&!("size"in s)&&o(s,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return ye},j6:function(){return de},xZ:function(){return pe},om:function(){return fe},Sx:function(){return we},Wp:function(){return be},KO:function(){return _e}});n(4114);var r=n(852),i=n(1363),o=n(4046);n(4979);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(E(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));f.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(S(this),t),E(h.get(this))}:function(...t){return E(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return d.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),s(e,l())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const S=e=>g.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=E(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(E(s.result),e.oldVersion,e.newVersion,E(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],A=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return A.set(t,o),o}b((e=>({...e,get:(t,n,r)=>R(t,n)||e.get(t,n,r),has:(t,n)=>!!R(t,n)||e.has(t,n)})));
/**
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
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(k(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function k(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",x="0.10.11",N=new i.Vy("@firebase/app"),L="@firebase/app-compat",D="@firebase/analytics-compat",j="@firebase/analytics",M="@firebase/app-check-compat",U="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",V="@firebase/database",$="@firebase/database-compat",z="@firebase/functions",H="@firebase/functions-compat",W="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",q="@firebase/messaging-compat",X="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",Z="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/vertexai-preview",re="@firebase/firestore-compat",ie="firebase",oe="10.13.2",se="[DEFAULT]",ae={[P]:"fire-core",[L]:"fire-core-compat",[j]:"fire-analytics",[D]:"fire-analytics-compat",[U]:"fire-app-check",[M]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[V]:"fire-rtdb",[$]:"fire-rtdb-compat",[z]:"fire-fn",[H]:"fire-fn-compat",[W]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[q]:"fire-fcm-compat",[X]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[Z]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[re]:"fire-fst-compat",[ne]:"fire-vertex","fire-js":"fire-js",[ie]:"fire-js-all"},ce=new Map,le=new Map,ue=new Map;function he(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fe(e){const t=e.name;if(ue.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const n of ce.values())he(n,e);for(const n of le.values())he(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pe(e){return void 0!==e.settings}
/**
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
 */
const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},me=new o.FA("app","Firebase",ge);
/**
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
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
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
 */
/**
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
 */
const ye=oe;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw me.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.T9)()),!n)throw me.create("no-options");const a=ce.get(s);if(a){if((0,o.bD)(n,a.options)&&(0,o.bD)(i,a.config))return a;throw me.create("duplicate-app",{appName:s})}const c=new r.h1(s);for(const r of ue.values())c.addComponent(r);const l=new ve(n,i,c);return ce.set(s,l),l}function we(e=se){const t=ce.get(e);if(!t&&e===se&&(0,o.T9)())return be();if(!t)throw me.create("no-app",{appName:e});return t}function _e(e,t,n){var i;let o=null!==(i=ae[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}fe(new r.uA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
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
 */
const Ee="firebase-heartbeat-database",Se=1,Te="firebase-heartbeat-store";let Ie=null;function Oe(){return Ie||(Ie=T(Ee,Se,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Te)}catch(n){console.warn(n)}}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function Ae(e){try{const t=await Oe(),n=t.transaction(Te),r=await n.objectStore(Te).get(Ce(e));return await n.done,r}catch(t){if(t instanceof o.g)N.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Re(e,t){try{const n=await Oe(),r=n.transaction(Te,"readwrite"),i=r.objectStore(Te);await i.put(t,Ce(e)),await r.done}catch(n){if(n instanceof o.g)N.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(e.message)}}}function Ce(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const ke=1024,Pe=2592e6;class xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Ne();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Pe})),this._storage.overwrite(this._heartbeatsCache)}catch(n){N.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ne(),{heartbeatsToSend:n,unsentEntries:r}=Le(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return N.warn(t),""}}}function Ne(){const e=new Date;return e.toISOString().substring(0,10)}function Le(e,t=ke){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ae(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Me(e){fe(new r.uA("platform-logger",(e=>new C(e)),"PRIVATE")),fe(new r.uA("heartbeat",(e=>new xe(e)),"PRIVATE")),_e(P,x,e),_e(P,x,"esm2017"),_e("fire-js","")}Me("")},852:function(e,t,n){n.d(t,{h1:function(){return l},uA:function(){return i}});n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return l}});n(4114);
/**
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
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},4373:function(e,t,n){n.d(t,{A:function(){return bn}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return Ue},hasStandardBrowserEnv:function(){return Be},hasStandardBrowserWebWorkerEnv:function(){return Ve},navigator:function(){return Fe},origin:function(){return $e}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(9848);function i(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,a=(e=>t=>{const n=o.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=e=>(e=e.toLowerCase(),t=>a(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,h=l("undefined");function f(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const d=c("ArrayBuffer");function p(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t}const g=l("string"),m=l("function"),v=l("number"),y=e=>null!==e&&"object"===typeof e,b=e=>!0===e||!1===e,w=e=>{if("object"!==a(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},_=c("Date"),E=c("File"),S=c("Blob"),T=c("FileList"),I=e=>y(e)&&m(e.pipe),O=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=a(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},A=c("URLSearchParams"),[R,C,k,P]=["ReadableStream","Request","Response","Headers"].map(c),x=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function N(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,i;if("object"!==typeof e&&(e=[e]),u(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function L(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;while(i-- >0)if(r=n[i],t===r.toLowerCase())return r;return null}const D=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),j=e=>!h(e)&&e!==D;function M(){const{caseless:e}=j(this)&&this||{},t={},n=(n,r)=>{const i=e&&L(t,r)||r;w(t[i])&&w(n)?t[i]=M(t[i],n):w(n)?t[i]=M({},n):u(n)?t[i]=n.slice():t[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&N(arguments[r],n);return t}const U=(e,t,n,{allOwnKeys:r}={})=>(N(t,((t,r)=>{n&&m(t)?e[r]=i(t,n):e[r]=t}),{allOwnKeys:r}),e),F=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),B=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},V=(e,t,n,r)=>{let i,o,a;const c={};if(t=t||{},null==e)return t;do{i=Object.getOwnPropertyNames(e),o=i.length;while(o-- >0)a=i[o],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},z=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},H=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),W=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let i;while((i=r.next())&&!i.done){const n=i.value;t.call(e,n[0],n[1])}},K=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},G=c("HTMLFormElement"),q=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),X=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),J=c("RegExp"),Y=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};N(n,((n,i)=>{let o;!1!==(o=t(n,i,e))&&(r[i]=o||n)})),Object.defineProperties(e,r)},Z=e=>{Y(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Q=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},ee=()=>{},te=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",re="0123456789",ie={DIGIT:re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+re},oe=(e=16,t=ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function se(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ae=e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=u(e)?[]:{};return N(e,((e,t)=>{const o=n(e,r+1);!h(o)&&(i[t]=o)})),t[r]=void 0,i}}return e};return n(e,0)},ce=c("AsyncFunction"),le=e=>e&&(y(e)||m(e))&&m(e.then)&&m(e.catch),ue=((e,t)=>e?setImmediate:t?((e,t)=>(D.addEventListener("message",(({source:n,data:r})=>{n===D&&r===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),D.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))("function"===typeof setImmediate,m(D.postMessage)),he="undefined"!==typeof queueMicrotask?queueMicrotask.bind(D):"undefined"!==typeof process&&process.nextTick||ue;var fe={isArray:u,isArrayBuffer:d,isBuffer:f,isFormData:O,isArrayBufferView:p,isString:g,isNumber:v,isBoolean:b,isObject:y,isPlainObject:w,isReadableStream:R,isRequest:C,isResponse:k,isHeaders:P,isUndefined:h,isDate:_,isFile:E,isBlob:S,isRegExp:J,isFunction:m,isStream:I,isURLSearchParams:A,isTypedArray:H,isFileList:T,forEach:N,merge:M,extend:U,trim:x,stripBOM:F,inherits:B,toFlatObject:V,kindOf:a,kindOfTest:c,endsWith:$,toArray:z,forEachEntry:W,matchAll:K,isHTMLForm:G,hasOwnProperty:X,hasOwnProp:X,reduceDescriptors:Y,freezeMethods:Z,toObjectSet:Q,toCamelCase:q,noop:ee,toFiniteNumber:te,findKey:L,global:D,isContextDefined:j,ALPHABET:ie,generateString:oe,isSpecCompliantForm:se,toJSONObject:ae,isAsyncFn:ce,isThenable:le,setImmediate:ue,asap:he};function de(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}fe.inherits(de,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:fe.toJSONObject(this.config),code:this.code,status:this.status}}});const pe=de.prototype,ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ge[e]={value:e}})),Object.defineProperties(de,ge),Object.defineProperty(pe,"isAxiosError",{value:!0}),de.from=(e,t,n,r,i,o)=>{const s=Object.create(pe);return fe.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),de.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var me=de,ve=null;function ye(e){return fe.isPlainObject(e)||fe.isArray(e)}function be(e){return fe.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map((function(e,t){return e=be(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function _e(e){return fe.isArray(e)&&!e.some(ye)}const Ee=fe.toFlatObject(fe,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Se(e,t,n){if(!fe.isObject(e))throw new TypeError("target must be an object");t=t||new(ve||FormData),n=fe.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!fe.isUndefined(t[e])}));const r=n.metaTokens,i=n.visitor||u,o=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&fe.isSpecCompliantForm(t);if(!fe.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(fe.isDate(e))return e.toISOString();if(!c&&fe.isBlob(e))throw new me("Blob is not supported. Use a Buffer instead.");return fe.isArrayBuffer(e)||fe.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,i){let a=e;if(e&&!i&&"object"===typeof e)if(fe.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(fe.isArray(e)&&_e(e)||(fe.isFileList(e)||fe.endsWith(n,"[]"))&&(a=fe.toArray(e)))return n=be(n),a.forEach((function(e,r){!fe.isUndefined(e)&&null!==e&&t.append(!0===s?we([n],r,o):null===s?n:n+"[]",l(e))})),!1;return!!ye(e)||(t.append(we(i,n,o),l(e)),!1)}const h=[],f=Object.assign(Ee,{defaultVisitor:u,convertValue:l,isVisitable:ye});function d(e,n){if(!fe.isUndefined(e)){if(-1!==h.indexOf(e))throw Error("Circular reference detected in "+n.join("."));h.push(e),fe.forEach(e,(function(e,r){const o=!(fe.isUndefined(e)||null===e)&&i.call(t,e,fe.isString(r)?r.trim():r,n,f);!0===o&&d(e,n?n.concat(r):[r])})),h.pop()}}if(!fe.isObject(e))throw new TypeError("data must be an object");return d(e),t}var Te=Se;function Ie(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Oe(e,t){this._pairs=[],e&&Te(e,this,t)}const Ae=Oe.prototype;Ae.append=function(e,t){this._pairs.push([e,t])},Ae.toString=function(e){const t=e?function(t){return e.call(this,t,Ie)}:Ie;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Re=Oe;function Ce(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ke(e,t,n){if(!t)return e;const r=n&&n.encode||Ce,i=n&&n.serialize;let o;if(o=i?i(t,n):fe.isURLSearchParams(t)?t.toString():new Re(t,n).toString(r),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}class Pe{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){fe.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var xe=Pe,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Le=(n(4603),n(7566),n(8721),"undefined"!==typeof URLSearchParams?URLSearchParams:Re),De="undefined"!==typeof FormData?FormData:null,je="undefined"!==typeof Blob?Blob:null,Me={isBrowser:!0,classes:{URLSearchParams:Le,FormData:De,Blob:je},protocols:["http","https","file","blob","url","data"]};const Ue="undefined"!==typeof window&&"undefined"!==typeof document,Fe="object"===typeof navigator&&navigator||void 0,Be=Ue&&(!Fe||["ReactNative","NativeScript","NS"].indexOf(Fe.product)<0),Ve=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),$e=Ue&&window.location.href||"http://localhost";var ze={...r,...Me};function He(e,t){return Te(e,new ze.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ze.isNode&&fe.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function We(e){return fe.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ke(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Ge(e){function t(e,n,r,i){let o=e[i++];if("__proto__"===o)return!0;const s=Number.isFinite(+o),a=i>=e.length;if(o=!o&&fe.isArray(r)?r.length:o,a)return fe.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!s;r[o]&&fe.isObject(r[o])||(r[o]=[]);const c=t(e,n,r[o],i);return c&&fe.isArray(r[o])&&(r[o]=Ke(r[o])),!s}if(fe.isFormData(e)&&fe.isFunction(e.entries)){const n={};return fe.forEachEntry(e,((e,r)=>{t(We(e),r,n,0)})),n}return null}var qe=Ge;function Xe(e,t,n){if(fe.isString(e))try{return(t||JSON.parse)(e),fe.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Je={transitional:Ne,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=fe.isObject(e);i&&fe.isHTMLForm(e)&&(e=new FormData(e));const o=fe.isFormData(e);if(o)return r?JSON.stringify(qe(e)):e;if(fe.isArrayBuffer(e)||fe.isBuffer(e)||fe.isStream(e)||fe.isFile(e)||fe.isBlob(e)||fe.isReadableStream(e))return e;if(fe.isArrayBufferView(e))return e.buffer;if(fe.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return He(e,this.formSerializer).toString();if((s=fe.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Te(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),Xe(e)):e}],transformResponse:[function(e){const t=this.transitional||Je.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(fe.isResponse(e)||fe.isReadableStream(e))return e;if(e&&fe.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,o=!n&&r;try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw me.from(i,me.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};fe.forEach(["delete","get","head","post","put","patch"],(e=>{Je.headers[e]={}}));var Ye=Je;const Ze=fe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Qe=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Ze[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const et=Symbol("internals");function tt(e){return e&&String(e).trim().toLowerCase()}function nt(e){return!1===e||null==e?e:fe.isArray(e)?e.map(nt):String(e)}function rt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const it=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ot(e,t,n,r,i){return fe.isFunction(r)?r.call(this,t,n):(i&&(t=n),fe.isString(t)?fe.isString(r)?-1!==t.indexOf(r):fe.isRegExp(r)?r.test(t):void 0:void 0)}function st(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function at(e,t){const n=fe.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}class ct{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=tt(t);if(!i)throw new Error("header name must be a non-empty string");const o=fe.findKey(r,i);(!o||void 0===r[o]||!0===n||void 0===n&&!1!==r[o])&&(r[o||t]=nt(e))}const o=(e,t)=>fe.forEach(e,((e,n)=>i(e,n,t)));if(fe.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(fe.isString(e)&&(e=e.trim())&&!it(e))o(Qe(e),t);else if(fe.isHeaders(e))for(const[s,a]of e.entries())i(a,s,n);else null!=e&&i(t,e,n);return this}get(e,t){if(e=tt(e),e){const n=fe.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return rt(e);if(fe.isFunction(t))return t.call(this,e,n);if(fe.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=tt(e),e){const n=fe.findKey(this,e);return!(!n||void 0===this[n]||t&&!ot(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=tt(e),e){const i=fe.findKey(n,e);!i||t&&!ot(n,n[i],i,t)||(delete n[i],r=!0)}}return fe.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const i=t[n];e&&!ot(this,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return fe.forEach(this,((r,i)=>{const o=fe.findKey(n,i);if(o)return t[o]=nt(r),void delete t[i];const s=e?st(i):String(i).trim();s!==i&&delete t[i],t[s]=nt(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return fe.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&fe.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[et]=this[et]={accessors:{}},n=t.accessors,r=this.prototype;function i(e){const t=tt(e);n[t]||(at(r,e),n[t]=!0)}return fe.isArray(e)?e.forEach(i):i(e),this}}ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),fe.reduceDescriptors(ct.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),fe.freezeMethods(ct);var lt=ct;function ut(e,t){const n=this||Ye,r=t||n,i=lt.from(r.headers);let o=r.data;return fe.forEach(e,(function(e){o=e.call(n,o,i.normalize(),t?t.status:void 0)})),i.normalize(),o}function ht(e){return!(!e||!e.__CANCEL__)}function ft(e,t,n){me.call(this,null==e?"canceled":e,me.ERR_CANCELED,t,n),this.name="CanceledError"}fe.inherits(ft,me,{__CANCEL__:!0});var dt=ft;function pt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new me("Request failed with status code "+n.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}function gt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[s];i||(i=c),n[o]=a,r[o]=c;let u=s,h=0;while(u!==o)h+=n[u++],u%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const f=l&&c-l;return f?Math.round(1e3*h/f):void 0}}var vt=mt;function yt(e,t){let n,r,i=0,o=1e3/t;const s=(t,o=Date.now())=>{i=o,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)},a=(...e)=>{const t=Date.now(),a=t-i;a>=o?s(e,t):(n=e,r||(r=setTimeout((()=>{r=null,s(n)}),o-a)))},c=()=>n&&s(n);return[a,c]}var bt=yt;const wt=(e,t,n=3)=>{let r=0;const i=vt(50,250);return bt((n=>{const o=n.loaded,s=n.lengthComputable?n.total:void 0,a=o-r,c=i(a),l=o<=s;r=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&l?(s-o)/c:void 0,event:n,lengthComputable:null!=s,[t?"download":"upload"]:!0};e(u)}),n)},_t=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Et=e=>(...t)=>fe.asap((()=>e(...t)));n(4979);var St=ze.hasStandardBrowserEnv?function(){const e=ze.navigator&&/(msie|trident)/i.test(ze.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=fe.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}(),Tt=ze.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];fe.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),fe.isString(r)&&s.push("path="+r),fe.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function It(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ot(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function At(e,t){return e&&!It(t)?Ot(e,t):t}const Rt=e=>e instanceof lt?{...e}:e;function Ct(e,t){t=t||{};const n={};function r(e,t,n){return fe.isPlainObject(e)&&fe.isPlainObject(t)?fe.merge.call({caseless:n},e,t):fe.isPlainObject(t)?fe.merge({},t):fe.isArray(t)?t.slice():t}function i(e,t,n){return fe.isUndefined(t)?fe.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function o(e,t){if(!fe.isUndefined(t))return r(void 0,t)}function s(e,t){return fe.isUndefined(t)?fe.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,o){return o in t?r(n,i):o in e?r(void 0,n):void 0}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>i(Rt(e),Rt(t),!0)};return fe.forEach(Object.keys(Object.assign({},e,t)),(function(r){const o=c[r]||i,s=o(e[r],t[r],r);fe.isUndefined(s)&&o!==a||(n[r]=s)})),n}var kt=e=>{const t=Ct({},e);let n,{data:r,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:s,headers:a,auth:c}=t;if(t.headers=a=lt.from(a),t.url=ke(At(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),fe.isFormData(r))if(ze.hasStandardBrowserEnv||ze.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(ze.hasStandardBrowserEnv&&(i&&fe.isFunction(i)&&(i=i(t)),i||!1!==i&&St(t.url))){const e=o&&s&&Tt.read(s);e&&a.set(o,e)}return t};const Pt="undefined"!==typeof XMLHttpRequest;var xt=Pt&&function(e){return new Promise((function(t,n){const r=kt(e);let i=r.data;const o=lt.from(r.headers).normalize();let s,a,c,l,u,{responseType:h,onUploadProgress:f,onDownloadProgress:d}=r;function p(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(s),r.signal&&r.signal.removeEventListener("abort",s)}let g=new XMLHttpRequest;function m(){if(!g)return;const r=lt.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),i=h&&"text"!==h&&"json"!==h?g.response:g.responseText,o={data:i,status:g.status,statusText:g.statusText,headers:r,config:e,request:g};pt((function(e){t(e),p()}),(function(e){n(e),p()}),o),g=null}g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout,"onloadend"in g?g.onloadend=m:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(m)},g.onabort=function(){g&&(n(new me("Request aborted",me.ECONNABORTED,e,g)),g=null)},g.onerror=function(){n(new me("Network Error",me.ERR_NETWORK,e,g)),g=null},g.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||Ne;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new me(t,i.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,e,g)),g=null},void 0===i&&o.setContentType(null),"setRequestHeader"in g&&fe.forEach(o.toJSON(),(function(e,t){g.setRequestHeader(t,e)})),fe.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),h&&"json"!==h&&(g.responseType=r.responseType),d&&([c,u]=wt(d,!0),g.addEventListener("progress",c)),f&&g.upload&&([a,l]=wt(f),g.upload.addEventListener("progress",a),g.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(s=t=>{g&&(n(!t||t.type?new dt(null,e,g):t),g.abort(),g=null)},r.cancelToken&&r.cancelToken.subscribe(s),r.signal&&(r.signal.aborted?s():r.signal.addEventListener("abort",s)));const v=gt(r.url);v&&-1===ze.protocols.indexOf(v)?n(new me("Unsupported protocol "+v+":",me.ERR_BAD_REQUEST,e)):g.send(i||null)}))};const Nt=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const i=function(e){if(!n){n=!0,s();const t=e instanceof Error?e:this.reason;r.abort(t instanceof me?t:new dt(t instanceof Error?t.message:t))}};let o=t&&setTimeout((()=>{o=null,i(new me(`timeout ${t} of ms exceeded`,me.ETIMEDOUT))}),t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:a}=r;return a.unsubscribe=()=>fe.asap(s),a}};var Lt=Nt;const Dt=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;while(i<n)r=i+t,yield e.slice(i,r),i=r},jt=async function*(e,t){for await(const n of Mt(e))yield*Dt(n,t)},Mt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ut=(e,t,n,r)=>{const i=jt(e,t);let o,s=0,a=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return a(),void e.close();let o=r.byteLength;if(n){let e=s+=o;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel(e){return a(e),i.return()}},{highWaterMark:2})},Ft="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Bt=Ft&&"function"===typeof ReadableStream,Vt=Ft&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),$t=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},zt=Bt&&$t((()=>{let e=!1;const t=new Request(ze.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Ht=65536,Wt=Bt&&$t((()=>fe.isReadableStream(new Response("").body))),Kt={stream:Wt&&(e=>e.body)};Ft&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach((t=>{!Kt[t]&&(Kt[t]=fe.isFunction(e[t])?e=>e[t]():(e,n)=>{throw new me(`Response type '${t}' is not supported`,me.ERR_NOT_SUPPORT,n)})}))})(new Response);const Gt=async e=>{if(null==e)return 0;if(fe.isBlob(e))return e.size;if(fe.isSpecCompliantForm(e)){const t=new Request(ze.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return fe.isArrayBufferView(e)||fe.isArrayBuffer(e)?e.byteLength:(fe.isURLSearchParams(e)&&(e+=""),fe.isString(e)?(await Vt(e)).byteLength:void 0)},qt=async(e,t)=>{const n=fe.toFiniteNumber(e.getContentLength());return null==n?Gt(t):n};var Xt=Ft&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:f}=kt(e);l=l?(l+"").toLowerCase():"text";let d,p=Lt([i,o&&o.toAbortSignal()],s);const g=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(c&&zt&&"get"!==n&&"head"!==n&&0!==(m=await qt(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(fe.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=_t(m,wt(Et(c)));r=Ut(n.body,Ht,e,t)}}fe.isString(h)||(h=h?"include":"omit");const i="credentials"in Request.prototype;d=new Request(t,{...f,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:i?h:void 0});let o=await fetch(d);const s=Wt&&("stream"===l||"response"===l);if(Wt&&(a||s&&g)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=fe.toFiniteNumber(o.headers.get("content-length")),[n,r]=a&&_t(t,wt(Et(a),!0))||[];o=new Response(Ut(o.body,Ht,n,(()=>{r&&r(),g&&g()})),e)}l=l||"text";let v=await Kt[fe.findKey(Kt,l)||"text"](o,e);return!s&&g&&g(),await new Promise(((t,n)=>{pt(t,n,{data:v,headers:lt.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:d})}))}catch(v){if(g&&g(),v&&"TypeError"===v.name&&/fetch/i.test(v.message))throw Object.assign(new me("Network Error",me.ERR_NETWORK,e,d),{cause:v.cause||v});throw me.from(v,v&&v.code,e,d)}});const Jt={http:ve,xhr:xt,fetch:Xt};fe.forEach(Jt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Yt=e=>`- ${e}`,Zt=e=>fe.isFunction(e)||null===e||!1===e;var Qt={getAdapter:e=>{e=fe.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){let t;if(n=e[o],r=n,!Zt(n)&&(r=Jt[(t=String(n)).toLowerCase()],void 0===r))throw new me(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+o]=r}if(!r){const e=Object.entries(i).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Yt).join("\n"):" "+Yt(e[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:Jt};function en(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new dt(null,e)}function tn(e){en(e),e.headers=lt.from(e.headers),e.data=ut.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Qt.getAdapter(e.adapter||Ye.adapter);return t(e).then((function(t){return en(e),t.data=ut.call(e,e.transformResponse,t),t.headers=lt.from(t.headers),t}),(function(t){return ht(t)||(en(e),t&&t.response&&(t.response.data=ut.call(e,e.transformResponse,t.response),t.response.headers=lt.from(t.response.headers))),Promise.reject(t)}))}const nn="1.7.7",rn={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{rn[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const on={};function sn(e,t,n){if("object"!==typeof e)throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;while(i-- >0){const o=r[i],s=t[o];if(s){const t=e[o],n=void 0===t||s(t,o,e);if(!0!==n)throw new me("option "+o+" must be "+n,me.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new me("Unknown option "+o,me.ERR_BAD_OPTION)}}rn.transitional=function(e,t,n){function r(e,t){return"[Axios v"+nn+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,o)=>{if(!1===e)throw new me(r(i," has been removed"+(t?" in "+t:"")),me.ERR_DEPRECATED);return t&&!on[i]&&(on[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}};var an={assertOptions:sn,validators:rn};const cn=an.validators;class ln{constructor(e){this.defaults=e,this.interceptors={request:new xe,response:new xe}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=Ct(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&an.assertOptions(n,{silentJSONParsing:cn.transitional(cn.boolean),forcedJSONParsing:cn.transitional(cn.boolean),clarifyTimeoutError:cn.transitional(cn.boolean)},!1),null!=r&&(fe.isFunction(r)?t.paramsSerializer={serialize:r}:an.assertOptions(r,{encode:cn.function,serialize:cn.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&fe.merge(i.common,i[t.method]);i&&fe.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=lt.concat(o,i);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[tn.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);while(h<u)l=l.then(e[h++],e[h++]);return l}u=s.length;let f=t;h=0;while(h<u){const e=s[h++],t=s[h++];try{f=e(f)}catch(d){t.call(this,d);break}}try{l=tn.call(this,f)}catch(d){return Promise.reject(d)}h=0,u=c.length;while(h<u)l=l.then(c[h++],c[h++]);return l}getUri(e){e=Ct(this.defaults,e);const t=At(e.baseURL,e.url);return ke(t,e.params,e.paramsSerializer)}}fe.forEach(["delete","get","head","options"],(function(e){ln.prototype[e]=function(t,n){return this.request(Ct(n||{},{method:e,url:t,data:(n||{}).data}))}})),fe.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Ct(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ln.prototype[e]=t(),ln.prototype[e+"Form"]=t(!0)}));var un=ln;class hn{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new dt(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new hn((function(t){e=t}));return{token:t,cancel:e}}}var fn=hn;function dn(e){return function(t){return e.apply(null,t)}}function pn(e){return fe.isObject(e)&&!0===e.isAxiosError}const gn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gn).forEach((([e,t])=>{gn[t]=e}));var mn=gn;function vn(e){const t=new un(e),n=i(un.prototype.request,t);return fe.extend(n,un.prototype,t,{allOwnKeys:!0}),fe.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return vn(Ct(e,t))},n}const yn=vn(Ye);yn.Axios=un,yn.CanceledError=dt,yn.CancelToken=fn,yn.isCancel=ht,yn.VERSION=nn,yn.toFormData=Te,yn.AxiosError=me,yn.Cancel=yn.CanceledError,yn.all=function(e){return Promise.all(e)},yn.spread=dn,yn.isAxiosError=pn,yn.mergeConfig=Ct,yn.AxiosHeaders=lt,yn.formToJSON=e=>qe(fe.isHTMLForm(e)?new FormData(e):e),yn.getAdapter=Qt.getAdapter,yn.HttpStatusCode=mn,yn.default=yn;var bn=yn},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",o="10.13.2";
/**
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
 */
/**
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
 */
(0,r.KO)(i,o,"app")},6971:function(e,t,n){n.d(t,{eJ:function(){return Lt},xI:function(){return qr},hg:function(){return Bt},x9:function(){return Dt},CI:function(){return Vt},r7:function(){return Mt}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),o=n(1363);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function f(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function d(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
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
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),o=new i.FA("auth","Firebase",r);return o.create(t,{appName:e.name})}function v(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function b(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function _(e,t){e||w(t)}
/**
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
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function R(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const k={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},P=new A(3e4,6e4);
/**
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
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,r,o={}){return L(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},o);return(0,i.c1)()||(l.referrerPolicy="no-referrer"),C.fetch()(j(e,e.config.apiHost,n,a),l)}))}async function L(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},k),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw F(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw F(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);p(e,a)}}catch(o){if(o instanceof i.g)throw o;p(e,"network-request-failed",{message:String(o)})}}async function D(e,t,n,r,i={}){const o=await N(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function j(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}function M(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */function B(e){return void 0!==e&&void 0!==e.enterprise}class V{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return M(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
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
 */async function $(e,t){return N(e,"GET","/v2/recaptchaConfig",x(e,t))}
/**
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
 */async function z(e,t){return N(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return N(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function K(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),o=q(r);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:W(G(o.auth_time)),issuedAtTime:W(G(o.iat)),expirationTime:W(G(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function q(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function X(e){const t=q(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,H(n,{idToken:r}));b(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?re(o.providerUserInfo):[],a=ne(e.providerData,s),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function te(e){const t=(0,i.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function re(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function ie(e,t){const n=await L(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=j(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oe(e,t){return N(e,"POST","/v2/accounts:revokeToken",x(e,t))}
/**
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
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ie(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new se;return n&&(b("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(b("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
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
 */function ae(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K(this,e)}reload(){return te(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await J(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:_,providerData:E,stsTokenManager:S}=t;b(y&&S,e,"internal-error");const T=se.fromJSON(this.name,S);b("string"===typeof y,e,"internal-error"),ae(u,e.name),ae(h,e.name),b("boolean"===typeof w,e,"internal-error"),b("boolean"===typeof _,e,"internal-error"),ae(f,e.name),ae(d,e.name),ae(p,e.name),ae(g,e.name),ae(m,e.name),ae(v,e.name);const I=new ce({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new se;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];b(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),s=new se;s.updateFromIdToken(n);const a=new ce({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Q(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
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
 */const le=new Map;function ue(e){_(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
/**
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
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const fe=he;
/**
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
 */function de(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=de(this.userKey,r.apiKey,i),this.fullPersistenceKey=de("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(ue(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ue(fe);const o=de(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){const n=ce._fromJSON(e,t);l!==i&&(s=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new pe(i,e,n)):new pe(i,e,n)}}
/**
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
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Ee(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ve(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,i.ZQ)()){return/crios\//i.test(e)}function be(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,i.ZQ)()){return/android/i.test(e)}function _e(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,i.ZQ)()){return/webos/i.test(e)}function Se(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(e=(0,i.ZQ)()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ie(){return(0,i.lT)()&&10===document.documentMode}function Oe(e=(0,i.ZQ)()){return Se(e)||we(e)||Ee(e)||_e(e)||/windows phone/i.test(e)||be(e)}
/**
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
 */function Ae(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.ZQ)());break;case"Worker":n=`${ge((0,i.ZQ)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
/**
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
 */class Re{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */async function Ce(e,t={}){return N(e,"GET","/v2/passwordPolicy",x(e,t))}
/**
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
 */const ke=6;class Pe{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:ke,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNumericCharacter)||void 0===o||o),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
 */class xe{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.beforeStateQueue=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ue(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await H(this,{idToken:e}),n=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,i.Ku)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ue(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ce(this),t=new Pe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await oe(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ue(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(s,this,"internal-error"),s.then((()=>{o||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&f(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Ne(e){return(0,i.Ku)(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let De={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function je(e){De=e}function Me(e){return De.loadJS(e)}function Ue(){return De.recaptchaEnterpriseScript}function Fe(){return De.gapiScript}function Be(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ve="recaptcha-enterprise",$e="NO_RECAPTCHA";class ze{constructor(e){this.type=Ve,this.auth=Ne(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{$(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new V(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;B(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n($e)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&B(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Ue();0!==t.length&&(t+=n),Me(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function He(e,t,n,r=!1){const i=new ze(e);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function We(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await He(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await He(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
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
 */
function Ke(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const o=n.initialize({options:t});return o}function Ge(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ue);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function qe(e,t,n){const r=Ne(e);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Xe(t),{host:s,port:a}=Je(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Xe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Je(e){const t=Xe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ye(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ye(t)}}}function Ye(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class Qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
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
 */async function et(e,t){return N(e,"POST","/v1/accounts:signUp",t)}
/**
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
 */
async function tt(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
/**
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
 */
async function nt(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function rt(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
/**
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
 */class it extends Qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new it(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new it(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return We(e,t,"signInWithPassword",tt);case"emailLink":return nt(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return We(e,n,"signUpPassword",et);case"emailLink":return rt(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function ot(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
/**
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
 */const st="http://localhost";class at extends Qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new at(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new at(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ot(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:st,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
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
 */async function ct(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function lt(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function ut(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const ht={["USER_NOT_FOUND"]:"user-not-found"};async function ft(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,n),ht)}
/**
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
 */class dt extends Qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new dt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new dt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return lt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ut(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ft(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new dt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function pt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||t||e}class mt{constructor(e){var t,n,r,o,s,a;const c=(0,i.I9)((0,i.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=pt(null!==(r=c["mode"])&&void 0!==r?r:null);b(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=gt(e);try{return new mt(t)}catch(n){return null}}}
/**
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
 */
class vt{constructor(){this.providerId=vt.PROVIDER_ID}static credential(e,t){return it._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=mt.parseLink(t);return b(n,"argument-error"),it._fromEmailAndCode(e,n.code,n.tenantId)}}vt.PROVIDER_ID="password",vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class yt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class bt extends yt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class wt extends bt{constructor(){super("facebook.com")}static credential(e){return at._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch(t){return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",wt.PROVIDER_ID="facebook.com";
/**
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
 */
class _t extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return at._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _t.credential(t,n)}catch(r){return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com",_t.PROVIDER_ID="google.com";
/**
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
 */
class Et extends bt{constructor(){super("github.com")}static credential(e){return at._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch(t){return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com",Et.PROVIDER_ID="github.com";
/**
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
 */
class St extends bt{constructor(){super("twitter.com")}static credential(e,t){return at._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return St.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function Tt(e,t){return D(e,"POST","/v1/accounts:signUp",x(e,t))}
/**
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
 */St.TWITTER_SIGN_IN_METHOD="twitter.com",St.PROVIDER_ID="twitter.com";class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),o=Ot(n),s=new It({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ot(n);return new It({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class At extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new At(e,t,n,r)}}function Rt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw At._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function Ct(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return It._forOperation(e,"link",r)}
/**
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
 */
async function kt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(v(i));const o="reauthenticate";try{const r=await J(e,Rt(i,o,t,e),n);b(r.idToken,i,"internal-error");const s=q(r.idToken);b(s,i,"internal-error");const{sub:a}=s;return b(e.uid===a,i,"user-mismatch"),It._forOperation(e,o,r)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
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
 */async function Pt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i="signIn",o=await Rt(e,i,t),s=await It._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(s.user),s}async function xt(e,t){return Pt(Ne(e),t)}
/**
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
 */
async function Nt(e){const t=Ne(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Lt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Ne(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=We(i,o,"signUpPassword",Tt),a=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Nt(e),t})),c=await It._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Dt(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(v(e)):xt((0,i.Ku)(e),vt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Nt(e),t}))}
/**
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
 */
/**
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
 */
async function jt(e,t){return N(e,"POST","/v1/accounts:update",t)}
/**
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
 */async function Mt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.Ku)(e),o=await r.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await J(r,jt(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Ut(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function Ft(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function Bt(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function Vt(e){return(0,i.Ku)(e).signOut()}
/**
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
 */
function $t(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function zt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}function Ht(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Wt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}new WeakMap;const Kt="__sak";
/**
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
 */class Gt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kt,"1"),this.storage.removeItem(Kt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */const qt=1e3,Xt=10;class Jt extends Gt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ie()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Xt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jt.type="LOCAL";const Yt=Jt;
/**
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
 */class Zt extends Gt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zt.type="SESSION";const Qt=Zt;
/**
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
 */function en(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await en(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function nn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */tn.receivers=[];class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=nn("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
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
 */function on(){return window}function sn(e){on().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function an(){return"undefined"!==typeof on()["WorkerGlobalScope"]&&"function"===typeof on()["importScripts"]}async function cn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ln(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function un(){return an()?self:null}
/**
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
 */const hn="firebaseLocalStorageDb",fn=1,dn="firebaseLocalStorage",pn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mn(e,t){return e.transaction([dn],t?"readwrite":"readonly").objectStore(dn)}function vn(){const e=indexedDB.deleteDatabase(hn);return new gn(e).toPromise()}function yn(){const e=indexedDB.open(hn,fn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(dn,{keyPath:pn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(dn)?t(n):(n.close(),await vn(),t(await yn()))}))}))}async function bn(e,t,n){const r=mn(e,!0).put({[pn]:t,value:n});return new gn(r).toPromise()}async function wn(e,t){const n=mn(e,!1).get(t),r=await new gn(n).toPromise();return void 0===r?null:r.value}function _n(e,t){const n=mn(e,!0).delete(t);return new gn(n).toPromise()}const En=800,Sn=3;class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Sn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(un()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await cn(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ln()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yn();return await bn(e,Kt,"1"),await _n(e,Kt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>bn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>wn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_n(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mn(e,!1).getAll();return new gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const In=Tn;
/**
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
 */function On(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function An(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}function Rn(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
/**
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
 */
/**
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
 */
Be("rcb"),new A(3e4,6e4);
/**
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
 */
const Cn="recaptcha";async function kn(e,t,n){var r;const i=await n.verify();try{let o;if(b("string"===typeof i,e,"argument-error"),b(n.type===Cn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){b("enroll"===t.type,e,"internal-error");const n=await $t(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;b(n,e,"missing-multi-factor-info");const s=await On(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ct(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class Pn{constructor(e){this.providerId=Pn.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return kn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return dt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pn.credentialFromTaggedObject(t)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?dt._fromTokenResponse(t,n):null}}
/**
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
 */
function xn(e,t){return t?ue(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Pn.PROVIDER_ID="phone",Pn.PHONE_SIGN_IN_METHOD="phone";class Nn extends Qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(e){return Pt(e.auth,new Nn(e),e.bypassAuthState)}function Dn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),kt(n,new Nn(e),e.bypassAuthState)}async function jn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Ct(n,new Nn(e),e.bypassAuthState)}
/**
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
 */class Mn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return jn;case"reauthViaPopup":case"reauthViaRedirect":return Dn;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Un=new A(2e3,1e4);class Fn extends Mn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Un.get())};e()}}Fn.currentPopupAction=null;
/**
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
 */
const Bn="pendingRedirect",Vn=new Map;class $n extends Mn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Vn.get(this.auth._key());if(!e){try{const t=await zn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Vn.set(this.auth._key(),e)}return this.bypassAuthState||Vn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function zn(e,t){const n=Kn(t),r=Wn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Hn(e,t){Vn.set(e._key(),t)}function Wn(e){return ue(e._redirectPersistence)}function Kn(e){return de(Bn,e.config.apiKey,e.name)}
/**
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
 */async function Gn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Ne(e),o=xn(i,t),s=new $n(i,o,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
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
 */
const qn=6e5;class Xn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Zn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jn(e))}saveEventToCache(e){this.cachedEventUids.add(Jn(e)),this.lastProcessedEventTime=Date.now()}}function Jn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Zn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yn(e);default:return!1}}
/**
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
 */async function Qn(e,t={}){return N(e,"GET","/v1/projects",t)}
/**
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
 */const er=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tr=/^https?/;async function nr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qn(e);for(const r of t)try{if(rr(r))return}catch(n){}p(e,"unauthorized-domain")}function rr(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tr.test(n))return!1;if(er.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ir=new A(3e4,6e4);function or(){const e=on().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function sr(e){return new Promise(((t,n)=>{var r,i,o;function s(){or(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{or(),n(g(e,"network-request-failed"))},timeout:ir.get()})}if(null===(i=null===(r=on().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=on().gapi)||void 0===o?void 0:o.load)){const t=Be("iframefcb");return on()[t]=()=>{gapi.load?s():n(g(e,"network-request-failed"))},Me(`${Fe()}?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw ar=null,e}))}let ar=null;function cr(e){return ar=ar||sr(e),ar}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const lr=new A(5e3,15e3),ur="__/auth/iframe",hr="emulator/auth/iframe",fr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pr(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,hr):`https://${e.config.authDomain}/${ur}`,o={apiKey:t.apiKey,appName:e.name,v:r.MF},s=dr.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${(0,i.Am)(o).slice(1)}`}async function gr(e){const t=await cr(e),n=on().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:pr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),o=on().setTimeout((()=>{r(i)}),lr.get());function s(){on().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vr=500,yr=600,br="_blank",wr="http://localhost";class _r{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Er(e,t,n,r=vr,o=yr){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},mr),{width:r.toString(),height:o.toString(),top:s,left:a}),u=(0,i.ZQ)().toLowerCase();n&&(c=ye(u)?br:n),me(u)&&(t=t||wr,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Te(u)&&"_self"!==c)return Sr(t||"",c),new _r(null);const f=window.open(t||"",c,h);b(f,e,"popup-blocked");try{f.focus()}catch(d){}return new _r(f)}function Sr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const Tr="__/auth/handler",Ir="emulator/auth/handler",Or=encodeURIComponent("fac");async function Ar(e,t,n,o,s,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:r.MF,eventId:s};if(t instanceof yt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof bt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];const u=await e._getAppCheckToken(),h=u?`#${Or}=${encodeURIComponent(u)}`:"";return`${Rr(e)}?${(0,i.Am)(l).slice(1)}${h}`}function Rr({config:e}){return e.emulator?R(e,Ir):`https://${e.authDomain}/${Tr}`}
/**
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
 */const Cr="webStorageSupport";class kr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qt,this._completeRedirectFn=Gn,this._overrideRedirectResult=Hn}async _openPopup(e,t,n,r){var i;_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ar(e,t,n,E(),r);return Er(e,o,nn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Ar(e,t,n,E(),r);return sn(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await gr(e),n=new Xn(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Cr,{type:Cr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Cr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ve()||Se()}}const Pr=kr;class xr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Nr extends xr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Nr(e)}_finalizeEnroll(e,t,n){return zt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return An(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Lr{constructor(){}static assertion(e){return Nr._fromCredential(e)}}Lr.FACTOR_ID="phone";class Dr{static assertionForEnrollment(e,t){return jr._fromSecret(e,t)}static assertionForSignIn(e,t){return jr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;b("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Ht(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Mr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Dr.FACTOR_ID="totp";class jr extends xr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new jr(t,void 0,e)}static _fromEnrollmentId(e,t){return new jr(t,e)}async _finalizeEnroll(e,t,n){return b("undefined"!==typeof this.secret,e,"argument-error"),Wt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Rn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Mr{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Mr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Ur(e)||Ur(t))&&(r=!0),r&&(Ur(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ur(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ur(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Fr="@firebase/auth",Br="1.7.9";
/**
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
 */
class Vr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function $r(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;b(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},l=new xe(r,i,o,c);return Ge(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new Vr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Fr,Br,$r(e)),(0,r.KO)(Fr,Br,"esm2017")}
/**
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
 */const Hr=300,Wr=(0,i.XA)("authIdTokenMaxAge")||Hr;let Kr=null;const Gr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wr)return;const i=null===n||void 0===n?void 0:n.token;Kr!==i&&(Kr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ke(e,{popupRedirectResolver:Pr,persistence:[In,Yt,Qt]}),o=(0,i.XA)("authTokenSyncURL");if(o&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(o,location.origin);if(location.origin===e.origin){const t=Gr(e.toString());Ft(n,t,(()=>t(n.currentUser))),Ut(n,(e=>t(e)))}}const s=(0,i.Tj)("auth");return s&&qe(n,`http://${s}`),n}function Xr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}je({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Xr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),zr("Browser")},7617:function(e,t,n){n.d(t,{aU:function(){return Ce}});n(4114),n(6573),n(8100),n(7936),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(7467),n(4732),n(9577),n(4979);var r,i=n(3405),o=n(852),s=n(1363),a=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var e;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var o=e.g[3],s=t+(o^n&(i^o))+r[0]+3614090360&4294967295;t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[1]+3905402710&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[4]+4118548399&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[5]+1200080426&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[8]+1770035416&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[9]+2336552879&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(o^n&(i^o))+r[12]+1804603682&4294967295,t=n+(s<<7&4294967295|s>>>25),s=o+(i^t&(n^i))+r[13]+4254626195&4294967295,o=t+(s<<12&4294967295|s>>>20),s=i+(n^o&(t^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(t^i&(o^t))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=t+(i^o&(n^i))+r[1]+4129170786&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[6]+3225465664&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[5]+3593408605&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[10]+38016083&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[9]+568446438&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[14]+3275163606&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(i^o&(n^i))+r[13]+2850285829&4294967295,t=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(t^n))+r[2]+4243563512&4294967295,o=t+(s<<9&4294967295|s>>>23),s=i+(t^n&(o^t))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^t&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=t+(n^i^o)+r[5]+4294588738&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[8]+2272392833&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[1]+2763975236&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[4]+1272893353&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[13]+681279174&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[0]+3936430074&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(n^i^o)+r[9]+3654602809&4294967295,t=n+(s<<4&4294967295|s>>>28),s=o+(t^n^i)+r[12]+3873151461&4294967295,o=t+(s<<11&4294967295|s>>>21),s=i+(o^t^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^t)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=t+(i^(n|~o))+r[0]+4096336452&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[7]+1126891415&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[12]+1700485571&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[3]+2399980690&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[8]+1873313359&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[15]+4264355552&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=t+(i^(n|~o))+r[4]+4149444226&4294967295,t=n+(s<<6&4294967295|s>>>26),s=o+(n^(t|~i))+r[11]+3174756917&4294967295,o=t+(s<<10&4294967295|s>>>22),s=i+(t^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+o&4294967295}function s(e,t){var n=c;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function a(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var o=0|e[i];r&&o==t||(n[i]=o,r=!1)}this.g=n}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.B,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)o(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=t},i.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var c={};function u(e){return-128<=e&&128>e?s(e,(function(e){return new a([0|e],0>e?-1:0)})):new a([0|e],0>e?-1:0)}function h(e){if(isNaN(e)||!isFinite(e))return d;if(0>e)return y(h(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new a(t,0)}function f(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return y(f(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(t,8)),r=d,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),s=parseInt(e.substring(i,i+o),t);8>o?(o=h(Math.pow(t,o)),r=r.j(o).add(h(s))):(r=r.j(n),r=r.add(h(s)))}return r}var d=u(0),p=u(1),g=u(16777216);function m(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function v(e){return-1==e.h}function y(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new a(n,~e.h).add(p)}function b(e,t){return e.add(y(t))}function w(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _(e,t){this.g=e,this.h=t}function E(e,t){if(m(t))throw Error("division by zero");if(m(e))return new _(d,d);if(v(e))return t=E(y(e),t),new _(y(t.g),y(t.h));if(v(t))return t=E(e,y(t)),new _(y(t.g),t.h);if(30<e.g.length){if(v(e)||v(t))throw Error("slowDivide_ only works with positive integers.");for(var n=p,r=t;0>=r.l(e);)n=S(n),r=S(r);var i=T(n,1),o=T(r,1);for(r=T(r,2),n=T(n,2);!m(r);){var s=o.add(r);0>=s.l(e)&&(i=i.add(n),o=s),r=T(r,1),n=T(n,1)}return t=b(e,i.j(t)),new _(i,t)}for(i=d;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=h(n),s=o.j(t);v(s)||0<s.l(e);)n-=r,o=h(n),s=o.j(t);m(o)&&(o=p),i=i.add(o),e=b(e,s)}return new _(i,e)}function S(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new a(n,e.h)}function T(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],o=0;o<r;o++)i[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new a(i,e.h)}e=a.prototype,e.m=function(){if(v(this))return-y(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(m(this))return"0";if(v(this))return"-"+y(this).toString(e);for(var t=h(Math.pow(e,6)),n=this,r="";;){var i=E(n,t).g;n=b(n,i.j(t));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,m(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=b(this,e),v(e)?-1:m(e)?0:1},e.abs=function(){return v(this)?y(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var o=r+(65535&this.i(i))+(65535&e.i(i)),s=(o>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new a(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(m(this)||m(e))return d;if(v(this))return v(e)?y(this).j(y(e)):y(y(this).j(e));if(v(e))return y(this.j(y(e)));if(0>this.l(g)&&0>e.l(g))return h(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var o=this.i(r)>>>16,s=65535&this.i(r),c=e.i(i)>>>16,l=65535&e.i(i);n[2*r+2*i]+=s*l,w(n,2*r+2*i),n[2*r+2*i+1]+=o*l,w(n,2*r+2*i+1),n[2*r+2*i+1]+=s*c,w(n,2*r+2*i+1),n[2*r+2*i+2]+=o*c,w(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new a(n,0)},e.A=function(e){return E(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new a(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new a(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new a(n,this.h^e.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.Md5=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,r=l.Integer=a}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},h={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof u&&u];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(e,n){if(n)e:{var i=r;e=e.split(".");for(var o=0;o<e.length-1;o++){var s=e[o];if(!(s in i))break e;i=i[s]}e=e[e.length-1],o=i[e],n=n(o),n!=o&&null!=n&&t(i,e,{configurable:!0,writable:!0,value:n})}}function o(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(e){return e||function(){return o(this,(function(e,t){return t}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},a=this||self;function c(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function f(e,t,n){return e.call.apply(e.bind,arguments)}function d(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:d,g.apply(null,arguments)}function m(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function y(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function b(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(c(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}class w{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function _(e){return/^[\s\xa0]*$/.test(e)}function E(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function S(e){return S[" "](e),e}S[" "]=function(){};var T=-1!=E().indexOf("Gecko")&&!(-1!=E().toLowerCase().indexOf("webkit")&&-1==E().indexOf("Edge"))&&!(-1!=E().indexOf("Trident")||-1!=E().indexOf("MSIE"))&&-1==E().indexOf("Edge");function I(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function O(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function A(e){const t={};for(const n in e)t[n]=e[n];return t}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<R.length;t++)n=R[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function k(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function P(e){a.setTimeout((()=>{throw e}),0)}function x(){var e=U;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class N{constructor(){this.h=this.g=null}add(e,t){const n=L.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var L=new w((()=>new D),(e=>e.reset()));class D{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let j,M=!1,U=new N,F=()=>{const e=a.Promise.resolve(void 0);j=()=>{e.then(B)}};var B=()=>{for(var e;e=x();){try{e.h.call(e.g)}catch(n){P(n)}var t=L;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}M=!1};function V(){this.s=this.s,this.C=this.C}function $(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}V.prototype.s=!1,V.prototype.ma=function(){this.s||(this.s=!0,this.N())},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},$.prototype.h=function(){this.defaultPrevented=!0};var z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(n){}return e}();function H(e,t){if($.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(T){e:{try{S(t.nodeName);var i=!0;break e}catch(o){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:W[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&H.aa.h.call(this)}}v(H,$);var W={2:"touch",3:"pen",4:"mouse"};H.prototype.h=function(){H.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),G=0;function q(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++G,this.da=this.fa=!1}function X(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function J(e){this.src=e,this.g={},this.h=0}function Y(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=Array.prototype.indexOf.call(i,t,void 0);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(X(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Z(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.da&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}J.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=Z(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):(t=new q(t,this.src,o,!!r,i),t.fa=n,e.push(t)),t};var Q="closure_lm_"+(1e6*Math.random()|0),ee={};function te(e,t,n,r,i){if(r&&r.once)return ie(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)te(e,t[o],n,r,i);return null}return n=he(n),e&&e[K]?e.K(t,n,l(r)?!!r.capture:!!r,i):ne(e,t,n,!1,r,i)}function ne(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=l(i)?!!i.capture:!!i,a=le(e);if(a||(e[Q]=a=new J(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=re(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)z||(i=s),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ae(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function re(){function e(n){return t.call(e.src,e.listener,n)}const t=ce;return e}function ie(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)ie(e,t[o],n,r,i);return null}return n=he(n),e&&e[K]?e.L(t,n,l(r)?!!r.capture:!!r,i):ne(e,t,n,!0,r,i)}function oe(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)oe(e,t[o],n,r,i);else r=l(r)?!!r.capture:!!r,n=he(n),e&&e[K]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=Z(o,n,r,i),-1<n&&(X(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=le(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Z(t,n,r,i)),(n=-1<e?t[e]:null)&&se(n))}function se(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[K])Y(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ae(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=le(t))?(Y(n,e),0==n.h&&(n.src=null,t[Q]=null)):X(e)}}}function ae(e){return e in ee?ee[e]:ee[e]="on"+e}function ce(e,t){if(e.da)e=!0;else{t=new H(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&se(e),e=n.call(r,t)}return e}function le(e){return e=e[Q],e instanceof J?e:null}var ue="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(e){return"function"===typeof e?e:(e[ue]||(e[ue]=function(t){return e.handleEvent(t)}),e[ue])}function fe(){V.call(this),this.i=new J(this),this.M=this,this.F=null}function de(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new $(t,e);else if(t instanceof $)t.target=t.target||e;else{var i=t;t=new $(r,e),C(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=pe(s,r,!0,t)&&i}if(s=t.g=e,i=pe(s,r,!0,t)&&i,i=pe(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=pe(s,r,!1,t)&&i}function pe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.da&&s.capture==n){var a=s.listener,c=s.ha||s.src;s.fa&&Y(e.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function ge(e,t,n){if("function"===typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function me(e){e.g=ge((()=>{e.g=null,e.i&&(e.i=!1,me(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}v(fe,V),fe.prototype[K]=!0,fe.prototype.removeEventListener=function(e,t,n,r){oe(this,e,t,n,r)},fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)X(n[r]);delete t.g[e],t.h--}}this.F=null},fe.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},fe.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class ve extends V{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:me(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ye(e){V.call(this),this.h=e,this.g={}}v(ye,V);var be=[];function we(e){I(e.g,(function(e,t){this.g.hasOwnProperty(t)&&se(e)}),e),e.g={}}ye.prototype.N=function(){ye.aa.N.call(this),we(this)},ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _e=a.JSON.stringify,Ee=a.JSON.parse,Se=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function Te(){}function Ie(e){return e.h||(e.h=e.i())}function Oe(){}Te.prototype.h=null;var Ae={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Re(){$.call(this,"d")}function Ce(){$.call(this,"c")}v(Re,$),v(Ce,$);var ke={},Pe=null;function xe(){return Pe=Pe||new fe}function Ne(e){$.call(this,ke.La,e)}function Le(e){const t=xe();de(t,new Ne(t))}function De(e,t){$.call(this,ke.STAT_EVENT,e),this.stat=t}function je(e){const t=xe();de(t,new De(t,e))}function Me(e,t){$.call(this,ke.Ma,e),this.size=t}function Ue(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}function Fe(){this.g=!0}function Be(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");s=2<=h.length&&"type"==h[1]?s+(u+"=")+l+"&":s+(u+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s}))}function Ve(e,t,n,r,i,o,s){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+s}))}function $e(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+He(e,n)+(r?" "+r:"")}))}function ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function He(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return _e(n)}catch(a){return t}}ke.La="serverreachability",v(Ne,$),ke.STAT_EVENT="statevent",v(De,$),ke.Ma="timingevent",v(Me,$),Fe.prototype.xa=function(){this.g=!1},Fe.prototype.info=function(){};var We,Ke={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ge={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function qe(){}function Xe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Je}function Je(){this.i=null,this.g="",this.h=!1}v(qe,Te),qe.prototype.g=function(){return new XMLHttpRequest},qe.prototype.i=function(){return{}},We=new qe;var Ye={},Ze={};function Qe(e,t,n){e.L=1,e.v=Rt(St(t)),e.m=n,e.P=!0,et(e,null)}function et(e,t){e.F=Date.now(),rt(e),e.A=St(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Vt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Je,e.g=Ln(e.j,n?t:null,!e.m),0<e.O&&(e.M=new ve(g(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(be[0]=i.toString()),i=be);for(var o=0;o<i.length;o++){var s=te(n,i[o],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}t=e.H?A(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Le(),Be(e.i,e.u,e.A,e.l,e.R,e.m)}function tt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function nt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ze:(n=Number(t.substring(n,r)),isNaN(n)?Ye:(r+=1,r+n>t.length?Ze:(t=t.slice(r,r+n),e.C=r+n,t)))}function rt(e){e.S=Date.now()+e.I,it(e,e.I)}function it(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ue(g(e.ba,e),t)}function ot(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function st(e){0==e.j.G||e.J||Cn(e.j,e)}function at(e){ot(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,we(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function ct(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||dt(n.h,e)))if(!e.K&&dt(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Rn(n),vn(n)}In(n),je(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ue(g(n.Za,n),6e3));if(1>=ft(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else Pn(n,11)}else if((e.K||n.g==e)&&Rn(n),!_(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.K=l[1],n.ia=l[2];const t=l[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=l[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(pt(o,o.h),o.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,At(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var s=e;if(r.qa=Nn(r,r.J?r.ia:null,r.W),s.K){gt(r.h,s);var a=s,c=r.L;c&&(a.I=c),a.B&&(ot(a),rt(a)),r.g=s}else Tn(r);0<n.i.length&&bn(n)}else"stop"!=l[0]&&"close"!=l[0]||Pn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Pn(n,7):mn(n):"noop"!=l[0]&&n.l&&n.l.ta(l),n.v=0)}Le(4)}catch(l){}}Xe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==hn(e)?t.j():this.Y(e)},Xe.prototype.Y=function(e){try{if(e==this.g)e:{const f=hn(this.g);var t=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||fn(this.g)))){this.J||4!=f||7==t||Le(8==t||0>=d?3:2),ot(this);var n=this.g.Z();this.X=n;t:if(tt(this)){var r=fn(this.g);e="";var i=r.length,o=4==hn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){at(this),st(this);var s="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.oa();if(this.o=200==n,Ve(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(c)){var u=c;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,je(12),at(this),st(this);break e}$e(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ct(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<s.length;){if(e=nt(this,s),e==Ze){4==f&&(this.s=4,je(14),n=!1),$e(this.i,this.l,null,"[Incomplete Response]");break}if(e==Ye){this.s=4,je(15),$e(this.i,this.l,s,"[Invalid Chunk]"),n=!1;break}$e(this.i,this.l,e,null),ct(this,e)}if(tt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=s.length||this.h.h||(this.s=1,je(16),n=!1),this.o=this.o&&n,n){if(0<s.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+s.length),On(h),h.M=!0,je(11))}}else $e(this.i,this.l,s,"[Invalid Chunked Response]"),at(this),st(this)}else $e(this.i,this.l,s,null),ct(this,s);4==f&&at(this),this.o&&!this.J&&(4==f?Cn(this.j,this):(this.o=!1,rt(this)))}else dn(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,je(12)):(this.s=0,je(13)),at(this),st(this)}}}catch(f){}},Xe.prototype.cancel=function(){this.J=!0,at(this)},Xe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(ze(this.i,this.A),2!=this.L&&(Le(),je(17)),at(this),this.s=2,st(this)):it(this,this.S-e)};var lt=class{constructor(e,t){this.g=e,this.map=t}};function ut(e){this.l=e||10,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ht(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ft(e){return e.h?1:e.g?e.g.size:0}function dt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function pt(e,t){e.g?e.g.add(t):e.h=t}function gt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function mt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return y(e.i)}function vt(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function yt(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(c(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=yt(e),r=vt(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}ut.prototype.cancel=function(){if(this.i=mt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var wt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _t(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Et(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Et){this.h=e.h,Tt(this,e.j),this.o=e.o,this.g=e.g,It(this,e.s),this.l=e.l;var t=e.i,n=new Mt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ot(this,n),this.m=e.m}else e&&(t=String(e).match(wt))?(this.h=!1,Tt(this,t[1]||"",!0),this.o=Ct(t[2]||""),this.g=Ct(t[3]||"",!0),It(this,t[4]),this.l=Ct(t[5]||"",!0),Ot(this,t[6]||"",!0),this.m=Ct(t[7]||"")):(this.h=!1,this.i=new Mt(null,this.h))}function St(e){return new Et(e)}function Tt(e,t,n){e.j=n?Ct(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function It(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Ot(e,t,n){t instanceof Mt?(e.i=t,zt(e.i,e.h)):(n||(t=kt(t,Dt)),e.i=new Mt(t,e.h))}function At(e,t,n){e.i.set(t,n)}function Rt(e){return At(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ct(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function kt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Pt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Pt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Et.prototype.toString=function(){var e=[],t=this.j;t&&e.push(kt(t,xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(kt(t,xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(kt(n,"/"==n.charAt(0)?Lt:Nt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",kt(n,jt)),e.join("")};var xt=/[#\/\?@]/g,Nt=/[#\?:]/g,Lt=/[#\?]/g,Dt=/[#\?@]/g,jt=/#/g;function Mt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ut(e){e.g||(e.g=new Map,e.h=0,e.i&&_t(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ft(e,t){Ut(e),t=$t(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Bt(e,t){return Ut(e),t=$t(e,t),e.g.has(t)}function Vt(e,t,n){Ft(e,t),0<n.length&&(e.i=null,e.g.set($t(e,t),y(n)),e.h+=n.length)}function $t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function zt(e,t){t&&!e.j&&(Ut(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ft(this,t),Vt(this,n,e))}),e)),e.j=t}function Ht(e,t){const n=new Fe;if(a.Image){const r=new Image;r.onload=m(Kt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=m(Kt,n,"TestLoadImage: error",!1,t,r),r.onabort=m(Kt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=m(Kt,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Wt(e,t){const n=new Fe,r=new AbortController,i=setTimeout((()=>{r.abort(),Kt(n,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:r.signal}).then((e=>{clearTimeout(i),e.ok?Kt(n,"TestPingServer: ok",!0,t):Kt(n,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(i),Kt(n,"TestPingServer: error",!1,t)}))}function Kt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(o){}}function Gt(){this.g=new Se}function qt(e,t,n){const r=n||"";try{bt(e,(function(e,n){let i=e;l(e)&&(i=_e(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Xt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Jt(e,t){fe.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Yt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Zt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Qt(e)}function Qt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function en(e){let t="";return I(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function tn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=en(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):At(e,t,n))}function nn(e){fe.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=Mt.prototype,e.add=function(e,t){Ut(this),this.i=null,e=$t(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Ut(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){Ut(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){Ut(this);let t=[];if("string"===typeof e)Bt(this,e)&&(t=t.concat(this.g.get($t(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Ut(this),this.i=null,e=$t(this,e),Bt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.V(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")},v(Xt,Te),Xt.prototype.g=function(){return new Jt(this.l,this.j)},Xt.prototype.i=function(e){return function(){return e}}({}),v(Jt,fe),e=Jt.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Qt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Zt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Qt(this)),this.g&&(this.readyState=3,Qt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Zt(this):Qt(this),3==this.readyState&&Yt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Zt(this))},e.Qa=function(e){this.g&&(this.response=e,Zt(this))},e.ga=function(){this.g&&Zt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),v(nn,fe);var rn=/^https?$/i,on=["POST","PUT"];function sn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,an(e),ln(e)}function an(e){e.A||(e.A=!0,de(e,"complete"),de(e,"error"))}function cn(e){if(e.h&&"undefined"!=typeof s&&(!e.v[1]||4!=hn(e)||2!=e.Z()))if(e.u&&4==hn(e))ge(e.Ea,0,e);else if(de(e,"readystatechange"),4==hn(e)){e.h=!1;try{const s=e.Z();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){var i=String(e.D).match(wt)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!rn.test(i?i.toLowerCase():"")}n=r}if(n)de(e,"complete"),de(e,"success");else{e.m=6;try{var o=2<hn(e)?e.g.statusText:""}catch(c){o=""}e.l=o+" ["+e.Z()+"]",an(e)}}finally{ln(e)}}}function ln(e,t){if(e.g){un(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||de(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function un(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function hn(e){return e.g?e.g.readyState:0}function fn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(p){return null}}function dn(e){const t={};e=(e.g&&2<=hn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(_(e[r]))continue;var n=k(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const o=t[i]||[];t[i]=o,o.push(n)}O(t,(function(e){return e.join(", ")}))}function pn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function gn(e){this.Aa=0,this.i=[],this.j=new Fe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pn("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pn("baseRetryDelayMs",5e3,e),this.cb=pn("retryDelaySeedMs",1e4,e),this.Wa=pn("forwardChannelMaxRetries",2,e),this.wa=pn("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new ut(e&&e.concurrentRequestLimit),this.Da=new Gt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function mn(e){if(yn(e),3==e.G){var t=e.U++,n=St(e.I);if(At(n,"SID",e.K),At(n,"RID",t),At(n,"TYPE","terminate"),En(e,n),t=new Xe(e,e.j,t),t.L=2,t.v=Rt(St(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ln(t.j,null),t.g.ea(t.v)),t.F=Date.now(),rt(t)}xn(e)}function vn(e){e.g&&(On(e),e.g.cancel(),e.g=null)}function yn(e){vn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Rn(e),e.h.cancel(),e.s&&("number"===typeof e.s&&a.clearTimeout(e.s),e.s=null)}function bn(e){if(!ht(e.h)&&!e.s){e.s=!0;var t=e.Ga;j||F(),M||(j(),M=!0),U.add(t,e),e.B=0}}function wn(e,t){return!(ft(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=Ue(g(e.Ga,e,t),kn(e,e.B)),e.B++,!0))}function _n(e,t){var n;n=t?t.l:e.U++;const r=St(e.I);At(r,"SID",e.K),At(r,"RID",n),At(r,"AID",e.T),En(e,r),e.m&&e.o&&tn(r,e.m,e.o),n=new Xe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Sn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),pt(e.h,n),Qe(n,r,t)}function En(e,t){e.H&&I(e.H,(function(e,n){At(t,n,e)})),e.l&&bt({},(function(e,n){At(t,n,e)}))}function Sn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?g(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),s=!1;else try{qt(c,e,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Tn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;j||F(),M||(j(),M=!0),U.add(t,e),e.v=0}}function In(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ue(g(e.Fa,e),kn(e,e.v)),e.v++,!0)}function On(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function An(e){e.g=new Xe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=St(e.qa);At(t,"RID","rpc"),At(t,"SID",e.K),At(t,"AID",e.T),At(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&At(t,"TO",e.ja),At(t,"TYPE","xmlhttp"),En(e,t),e.m&&e.o&&tn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=Rt(St(t)),n.m=null,n.P=!0,et(n,e)}function Rn(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function Cn(e,t){var n=null;if(e.g==t){Rn(e),On(e),e.g=null;var r=2}else{if(!dt(e.h,t))return;n=t.D,gt(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;r=xe(),de(r,new Me(r,n)),bn(e)}else Tn(e);else if(i=t.s,3==i||0==i&&0<t.X||!(1==r&&wn(e,t)||2==r&&In(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Pn(e,5);break;case 4:Pn(e,10);break;case 3:Pn(e,6);break;default:Pn(e,2)}}function kn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function Pn(e,t){if(e.j.info("Error code "+t),2==t){var n=g(e.fb,e),r=e.Xa;const t=!r;r=new Et(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Tt(r,"https"),Rt(r),t?Ht(r.toString(),n):Wt(r.toString(),n)}else je(2);e.G=0,e.l&&e.l.sa(t),xn(e),yn(e)}function xn(e){if(e.G=0,e.ka=[],e.l){const t=mt(e.h);0==t.length&&0==e.i.length||(b(e.ka,t),b(e.ka,e.i),e.h.i.length=0,y(e.i),e.i.length=0),e.l.ra()}}function Nn(e,t,n){var r=n instanceof Et?St(n):new Et(n);if(""!=r.g)t&&(r.g=t+"."+r.g),It(r,r.s);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Et(null);r&&Tt(o,r),t&&(o.g=t),i&&It(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&At(r,n,t),At(r,"VER",e.la),En(e,r),r}function Ln(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new nn(new Xt({eb:n})):new nn(e.pa),t.Ha(e.J),t}function Dn(){}function jn(){}function Mn(e,t){fe.call(this),this.g=new gn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!_(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Bn(this)}function Un(e){Re.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Fn(){Ce.call(this),this.status=1}function Bn(e){this.g=e}e=nn.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():We.g(),this.v=this.o?Ie(this.o):Ie(We),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void sn(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(on,t,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{un(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){sn(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,de(this,"complete"),de(this,"abort"),ln(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),nn.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?cn(this):this.bb())},e.bb=function(){cn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ee(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=gn.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,r){je(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=Nn(this,null,this.W),bn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Xe(this,this.j,e);let o=this.o;if(this.S&&(o?(o=A(o),C(o,this.S)):o=this.S),null!==this.m||this.O||(i.H=o,o=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Sn(this,i,t),n=St(this.I),At(n,"RID",e),At(n,"CVER",22),this.D&&At(n,"X-HTTP-Session-Id",this.D),En(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(en(o)))+"&"+t:this.m&&tn(n,this.m,o)),pt(this.h,i),this.Ua&&At(n,"TYPE","init"),this.P?(At(n,"$req",t),At(n,"SID","null"),i.T=!0,Qe(i,n,null)):Qe(i,n,t),this.G=2}}else 3==this.G&&(e?_n(this,e):0==this.i.length||ht(this.h)||_n(this))},e.Fa=function(){if(this.u=null,An(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ue(g(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,je(10),vn(this),An(this))},e.Za=function(){null!=this.C&&(this.C=null,vn(this),In(this),je(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=Dn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},jn.prototype.g=function(e,t){return new Mn(e,t)},v(Mn,fe),Mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mn.prototype.close=function(){mn(this.g)},Mn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=_e(e),e=n);t.i.push(new lt(t.Ya++,e)),3==t.G&&bn(t)},Mn.prototype.N=function(){this.g.l=null,delete this.j,mn(this.g),delete this.g,Mn.aa.N.call(this)},v(Un,Re),v(Fn,Ce),v(Bn,Dn),Bn.prototype.ua=function(){de(this.g,"a")},Bn.prototype.ta=function(e){de(this.g,new Un(e))},Bn.prototype.sa=function(e){de(this.g,new Fn)},Bn.prototype.ra=function(){de(this.g,"b")},jn.prototype.createWebChannel=jn.prototype.g,Mn.prototype.send=Mn.prototype.o,Mn.prototype.open=Mn.prototype.m,Mn.prototype.close=Mn.prototype.close,h.createWebChannelTransport=function(){return new jn},h.getStatEventTarget=function(){return xe()},h.Event=ke,h.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ke.NO_ERROR=0,Ke.TIMEOUT=8,Ke.HTTP_ERROR=6,h.ErrorCode=Ke,Ge.COMPLETE="complete",h.EventType=Ge,Oe.EventType=Ae,Ae.OPEN="a",Ae.CLOSE="b",Ae.ERROR="c",Ae.MESSAGE="d",fe.prototype.listen=fe.prototype.K,h.WebChannel=Oe,h.FetchXmlHttpFactory=Xt,nn.prototype.listenOnce=nn.prototype.L,nn.prototype.getLastError=nn.prototype.Ka,nn.prototype.getLastErrorCode=nn.prototype.Ba,nn.prototype.getStatus=nn.prototype.Z,nn.prototype.getResponseJson=nn.prototype.Oa,nn.prototype.getResponseText=nn.prototype.oa,nn.prototype.send=nn.prototype.ea,nn.prototype.setWithCredentials=nn.prototype.Ha,h.XhrIo=nn}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const f="@firebase/firestore";
/**
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
 */class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");
/**
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
 */
let p="10.13.2";
/**
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
 */const g=new s.Vy("@firebase/firestore");function m(e,...t){if(g.logLevel<=s.$b.DEBUG){const n=t.map(b);g.debug(`Firestore (${p}): ${e}`,...n)}}function v(e,...t){if(g.logLevel<=s.$b.ERROR){const n=t.map(b);g.error(`Firestore (${p}): ${e}`,...n)}}function y(e,...t){if(g.logLevel<=s.$b.WARN){const n=t.map(b);g.warn(`Firestore (${p}): ${e}`,...n)}}function b(e){if("string"==typeof e)return e;try{
/**
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
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
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
 */function w(e="Unexpected state"){const t=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+e;throw v(t),new Error(t)}function _(e,t){e||w()}
/**
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
 */
const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends a.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class T{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(d.UNAUTHENTICATED)))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class R{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},s=e=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>s(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(_("string"==typeof t.accessToken),new I(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _(null===e||"string"==typeof e),new d(e)}}class C{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new C(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(d.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class P{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,m("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(_("string"==typeof e.token),this.R=e.token,new P(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function N(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class L{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function D(e,t){return e<t?-1:e>t?1:0}
/**
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
 */
class j{constructor(e,t,n){void 0===t?t=0:t>e.length&&w(),void 0===n?n=e.length-t:n>e.length-t&&w(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===j.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof j?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends j{construct(e,t,n){return new M(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new S(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new M(t)}static emptyPath(){return new M([])}}
/**
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
 */
class U{constructor(e){this.path=e}static fromPath(e){return new U(M.fromString(e))}static fromName(e){return new U(M.fromString(e).popFirst(5))}static empty(){return new U(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===M.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new M(e.slice()))}}
/**
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
 */class F{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}F.UNKNOWN_ID=-1;function B(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */
class V{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function $(e){return 0===e&&1/e==-1/0}V.oe=-1;const z=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],H=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],W=H,K=[...W,"indexConfiguration","indexState","indexEntries"];
/**
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
 */
/**
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
 */
class G{constructor(e,t){this.comparator=e,this.root=t||X.EMPTY}insert(e,t){return new G(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,X.BLACK,null,null))}remove(e){return new G(this.comparator,this.root.remove(e,this.comparator).copy(null,null,X.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new q(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new q(this.root,e,this.comparator,!1)}getReverseIterator(){return new q(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new q(this.root,e,this.comparator,!0)}}class q{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class X{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:X.RED,this.left=null!=r?r:X.EMPTY,this.right=null!=i?i:X.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new X(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return X.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw w();if(this.right.isRed())throw w();const e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1,X.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,n,r,i){return this}insert(e,t,n){return new X(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class J{constructor(e){this.comparator=e,this.data=new G(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Y(this.data.getIterator())}getIteratorFrom(e){return new Y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof J))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new J(this.comparator);return t.data=e,t}}class Y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Z extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class Q{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Z("Invalid base64 string: "+e):e}}(e);return new Q(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Q(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const ee=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(e){if(_(!!e),"string"==typeof e){let t=0;const n=ee.exec(e);if(_(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ne(e.seconds),nanos:ne(e.nanos)}}function ne(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function re(e){return"string"==typeof e?Q.fromBase64String(e):Q.fromUint8Array(e)}
/**
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
 */
/**
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
 */
class ie{constructor(e,t,n,r,i,o,s,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class oe{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new oe("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof oe&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */function se(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ae(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
new G(U.comparator);new G(U.comparator);new G(U.comparator),new J(U.comparator);new J(D);
/**
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
 */
var ce,le;(le=ce||(ce={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new r([4294967295,4294967295],0);Error;
/**
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
 */(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const e={and:"AND",or:"OR"}})();
/**
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
 */class ue{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ne(e.integerValue));else if("doubleValue"in e){const n=ne(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),$(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=te(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(re(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?ae(e)?this.dt(t,Number.MAX_SAFE_INTEGER):se(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):w()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const r of Object.keys(n))this.Vt(r,t),this.Tt(n[r],t)}wt(e,t){var n,r;const i=e.fields||{};this.dt(t,53);const o="value",s=(null===(r=null===(n=i[o].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.dt(t,15),t.At(ne(s)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const r of n)this.Tt(r,t)}yt(e,t){this.dt(t,37),U.fromName(e).path.forEach((e=>{this.dt(t,60),this.Dt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}ue.vt=new ue;
/**
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
 */
new Uint8Array(0);class he{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new he(e,he.DEFAULT_COLLECTION_PERCENTILE,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */he.DEFAULT_COLLECTION_PERCENTILE=10,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,he.DEFAULT=new he(41943040,he.DEFAULT_COLLECTION_PERCENTILE,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),he.DISABLED=new he(-1,0,0);function fe(){return"undefined"!=typeof document?document:null}
/**
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
 */
/**
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
 */
class de{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&m("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
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
 */
/**
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
 */
class pe{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,s=new pe(e,t,o,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ge(e,t){if(v("AsyncQueue",`${t}: ${e}`),B(e))return new S(E.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */var me,ve;(ve=me||(me={})).ea="default",ve.Cache="cache";
/**
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
 */
class ye{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=L.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{m("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(m("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ge(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}
/**
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
 */
function be(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const we=new Map;
/**
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
 */function _e(e,t,n,r){if(!0===t&&!0===r)throw new S(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ee(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":w()}function Se(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ee(e);throw new S(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */
class Te{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new S(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_e("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=be(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new S(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new S(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new S(E.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ie{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Te({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Te(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new O;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=we.get(e);t&&(m("ComponentProvider","Removing Datastore"),we.delete(e),t.terminate())}(this),Promise.resolve()}}function Oe(e,t,n,r={}){var i;const o=(e=Se(e,Ie))._getSettings(),s=`${t}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==s&&y("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,a.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new S(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(o)}e._authCredentials=new A(new I(t,n))}}
/**
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
 */
/**
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
 */
class Ae{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new de(this,"async_queue_retry"),this.Eu=()=>{const e=fe();e&&m("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const e=fe();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=fe();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise((()=>{}));const t=new T;return this.Au((()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.uu.push(e),this.Ru())))}async Ru(){if(0!==this.uu.length){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!B(e))throw e;m("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go((()=>this.Ru()))}}Au(e){const t=this.au.then((()=>(this.Pu=!0,e().catch((e=>{this.hu=e,this.Pu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw v("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Pu=!1,e))))));return this.au=t,t}enqueueAfterDelay(e,t,n){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const r=pe.createAndSchedule(this,e,t,n,(e=>this.Vu(e)));return this.lu.push(r),r}du(){this.hu&&w()}verifyOperationInProgress(){}async mu(){let e;do{e=this.au,await e}while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then((()=>{this.lu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.lu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.mu()}))}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class Re extends Ie{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new Ae}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ke(this),this._firestoreClient.terminate()}}function Ce(e,t){const n="object"==typeof e?e:(0,i.Sx)(),r="string"==typeof e?e:t||"(default)",o=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const e=(0,a.yU)("firestore");e&&Oe(o,...e)}return o}function ke(e){var t,n,r;const i=e._freezeSettings(),o=function(e,t,n,r){return new ie(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,be(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new ye(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");new WeakMap;
/**
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
 */!function(e,t=!0){!function(e){p=e}(i.MF),(0,i.om)(new o.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new Re(new R(e.getProvider("auth-internal")),new x(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oe(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(f,"4.7.2",e),(0,i.KO)(f,"4.7.2","esm2017")}()},1387:function(e,t,n){n.d(t,{LA:function(){return ce},aE:function(){return rt}});n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(6768),i=n(144);
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const o="undefined"!==typeof document;function s(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&s(e.default)}const c=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=h(i)?i.map(e):e(i)}return n}const u=()=>{},h=Array.isArray;const f=/#/g,d=/&/g,p=/\//g,g=/=/g,m=/\?/g,v=/\+/g,y=/%5B/g,b=/%5D/g,w=/%5E/g,_=/%60/g,E=/%7B/g,S=/%7C/g,T=/%7D/g,I=/%20/g;function O(e){return encodeURI(""+e).replace(S,"|").replace(y,"[").replace(b,"]")}function A(e){return O(e).replace(E,"{").replace(T,"}").replace(w,"^")}function R(e){return O(e).replace(v,"%2B").replace(I,"+").replace(f,"%23").replace(d,"%26").replace(_,"`").replace(E,"{").replace(T,"}").replace(w,"^")}function C(e){return R(e).replace(g,"%3D")}function k(e){return O(e).replace(f,"%23").replace(m,"%3F")}function P(e){return null==e?"":k(e).replace(p,"%2F")}function x(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const N=/\/$/,L=e=>e.replace(N,"");function D(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=z(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:x(s)}}function j(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function U(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&F(t.matched[r],n.matched[i])&&B(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function F(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function B(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!V(e[n],t[n]))return!1;return!0}function V(e,t){return h(e)?$(e,t):h(t)?$(t,e):e===t}function $(e,t){return h(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function z(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let o,s,a=n.length-1;for(o=0;o<r.length;o++)if(s=r[o],"."!==s){if(".."!==s)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var W,K;(function(e){e["pop"]="pop",e["push"]="push"})(W||(W={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(K||(K={}));function G(e){if(!e)if(o){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),L(e)}const q=/^[^#]+#/;function X(e,t){return e.replace(q,"#")+t}function J(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Y=()=>({left:window.scrollX,top:window.scrollY});function Z(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=J(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Q(e,t){const n=history.state?history.state.position-t:-1;return n+e}const ee=new Map;function te(e,t){ee.set(e,t)}function ne(e){const t=ee.get(e);return ee.delete(e),t}let re=()=>location.protocol+"//"+location.host;function ie(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const s=M(n,e);return s+r+i}function oe(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=ie(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);u=l?o.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:W.pop,direction:u?u>0?K.forward:K.back:K.unknown})}))};function l(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:Y()}),"")}function f(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function se(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Y():null}}function ae(e){const{history:t,location:n}=window,r={value:ie(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:re()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(e,n){const s=c({},t.state,se(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=c({},i.value,t.state,{forward:e,scroll:Y()});o(s.current,s,!0);const a=c({},se(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function ce(e){e=G(e);const t=ae(e),n=oe(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=c({location:"",base:e,go:r,createHref:X.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function le(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const he=Symbol("");var fe;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(fe||(fe={}));function de(e,t){return c(new Error,{type:e,[he]:!0},t)}function pe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const ge="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},ve=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=c({},me,t),r=[];let i=n.start?"^":"";const o=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ve,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:l}=r;o.push({name:e,repeatable:n,optional:a});const h=l||ge;if(h!==ge){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(f=a&&c.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(h(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=h(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function be(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function we(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=be(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(_e(r))return 1;if(_e(i))return-1}return i.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ee={type:0,value:""},Se=/[a-zA-Z0-9_]/;function Te(e){if(!e)return[[]];if("/"===e)return[[Ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function h(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function f(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),s()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:Se.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),s(),i}function Ie(e,t,n){const r=ye(Te(e.path),n);const i=c(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Oe(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=Re(e);a.aliasOf=r&&r.record;const h=xe(t,e),f=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(Re(c({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a})))}let d,p;for(const t of f){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(d=Ie(t,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&e.name&&!ke(d)&&s(e.name)),De(d)&&l(d),a.children){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],d,r&&r.children[t])}r=r||d}return p?()=>{s(p)}:u}function s(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function l(e){const t=Ne(e,n);n.splice(t,0,e),e.record.name&&!ke(e)&&r.set(e.record.name,e)}function h(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw de(1,{location:e});0,s=i.record.name,a=c(Ae(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ae(e.params,i.keys.map((e=>e.name)))),o=i.stringify(a)}else if(null!=e.path)o=e.path,i=n.find((e=>e.re.test(o))),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw de(1,{location:e,currentLocation:t});s=i.record.name,a=c({},t.params,e.params),o=i.stringify(a)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:l,meta:Pe(l)}}function f(){n.length=0,r.clear()}return t=xe({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:h,removeRoute:s,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function Ae(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Re(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function ke(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pe(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function xe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ne(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1,o=we(e,t[i]);o<0?r=i:n=i+1}const i=Le(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Le(e){let t=e;while(t=t.parent)if(De(t)&&0===we(e,t))return t}function De({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function je(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(v," "),n=e.indexOf("="),o=x(n<0?e:e.slice(0,n)),s=n<0?null:x(e.slice(n+1));if(o in t){let e=t[o];h(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=C(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=h(r)?r.map((e=>e&&R(e))):[r&&R(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=h(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Be=Symbol(""),Ve=Symbol(""),$e=Symbol(""),ze=Symbol("");function He(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function We(e,t,n,r,i,o=e=>e()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(de(4,{from:n,to:t})):e instanceof Error?c(e):le(e)?c(de(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),a())},u=o((()=>e.call(r&&r.instances[i],t,n,l)));let h=Promise.resolve(u);e.length<3&&(h=h.then(l)),h.catch((e=>c(e)))}))}function Ke(e,t,n,r,i=e=>e()){const o=[];for(const c of e){0;for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(s(l)){const s=l.__vccOpts||l,a=s[t];a&&o.push(We(a,n,r,c,e,i))}else{let s=l();0,o.push((()=>s.then((o=>{if(!o)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const s=a(o)?o.default:o;c.mods[e]=o,c.components[e]=s;const l=s.__vccOpts||s,u=l[t];return u&&We(u,n,r,c,e,i)()}))))}}}return o}function Ge(e){const t=(0,r.WQ)(Ve),n=(0,r.WQ)($e);const o=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),s=(0,r.EW)((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(F.bind(null,r));if(s>-1)return s;const a=Ze(e[t-2]);return t>1&&Ze(r)===a&&i[i.length-1].path!==a?i.findIndex(F.bind(null,e[t-2])):s})),a=(0,r.EW)((()=>s.value>-1&&Ye(n.params,o.value.params))),c=(0,r.EW)((()=>s.value>-1&&s.value===n.matched.length-1&&B(n.params,o.value.params)));function l(n={}){return Je(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u):Promise.resolve()}return{route:o,href:(0,r.EW)((()=>o.value.href)),isActive:a,isExactActive:c,navigate:l}}const qe=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.Kh)(Ge(e)),{options:o}=(0,r.WQ)(Ve),s=(0,r.EW)((()=>({[Qe(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xe=qe;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!h(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ze(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,et=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=(0,r.WQ)(ze),s=(0,r.EW)((()=>e.route||o.value)),a=(0,r.WQ)(Be,0),l=(0,r.EW)((()=>{let e=(0,i.R1)(a);const{matched:t}=s.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.EW)((()=>s.value.matched[l.value]));(0,r.Gt)(Be,(0,r.EW)((()=>l.value+1))),(0,r.Gt)(Fe,u),(0,r.Gt)(ze,s);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&F(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=s.value,o=e.name,a=u.value,l=a&&a.components[o];if(!l)return tt(n.default,{Component:l,route:i});const f=a.props[o],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=e=>{e.component.isUnmounted&&(a.instances[o]=null)},g=(0,r.h)(l,c({},d,t,{onVnodeUnmounted:p,ref:h}));return tt(n.default,{Component:g,route:i})||g}}});function tt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const nt=et;function rt(e){const t=Oe(e.routes,e),n=e.parseQuery||je,s=e.stringifyQuery||Me,a=e.history;const f=He(),d=He(),p=He(),g=(0,i.IJ)(H);let m=H;o&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=l.bind(null,(e=>""+e)),y=l.bind(null,P),b=l.bind(null,x);function w(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function _(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function S(e){return!!t.getRecordMatcher(e)}function T(e,r){if(r=c({},r||g.value),"string"===typeof e){const i=D(n,e,r.path),o=t.resolve({path:i.path},r),s=a.createHref(i.fullPath);return c(i,o,{params:b(o.params),hash:x(i.hash),redirectedFrom:void 0,href:s})}let i;if(null!=e.path)i=c({},e,{path:D(n,e.path,r.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];i=c({},e,{params:y(t)}),r.params=y(r.params)}const o=t.resolve(i,r),l=e.hash||"";o.params=v(b(o.params));const u=j(s,c({},e,{hash:A(l),path:o.path})),h=a.createHref(u);return c({fullPath:u,hash:l,query:s===Me?Ue(e.query):e.query||{}},o,{redirectedFrom:void 0,href:h})}function I(e){return"string"===typeof e?D(n,e,g.value.path):c({},e)}function O(e,t){if(m!==e)return de(8,{from:t,to:e})}function R(e){return N(e)}function C(e){return R(c(I(e),{replace:!0}))}function k(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=I(r):{path:r},r.params={}),c({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function N(e,t){const n=m=T(e),r=g.value,i=e.state,o=e.force,a=!0===e.replace,l=k(n);if(l)return N(c(I(l),{state:"object"===typeof l?c({},i,l.state):i,force:o,replace:a}),t||n);const u=n;let h;return u.redirectedFrom=t,!o&&U(s,r,n)&&(h=de(16,{to:u,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):F(u,r)).catch((e=>pe(e)?pe(e,2)?e:ee(e):X(e,u,r))).then((e=>{if(e){if(pe(e,2))return N(c({replace:a},I(e.to),{state:"object"===typeof e.to?c({},i,e.to.state):i,force:o}),t||u)}else e=V(u,r,!0,a,i);return B(u,r,e),e}))}function L(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function M(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function F(e,t){let n;const[r,i,o]=it(e,t);n=Ke(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(We(r,e,t))}));const s=L.bind(null,e,t);return n.push(s),ce(n).then((()=>{n=[];for(const r of f.list())n.push(We(r,e,t));return n.push(s),ce(n)})).then((()=>{n=Ke(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(We(r,e,t))}));return n.push(s),ce(n)})).then((()=>{n=[];for(const r of o)if(r.beforeEnter)if(h(r.beforeEnter))for(const i of r.beforeEnter)n.push(We(i,e,t));else n.push(We(r.beforeEnter,e,t));return n.push(s),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ke(o,"beforeRouteEnter",e,t,M),n.push(s),ce(n)))).then((()=>{n=[];for(const r of d.list())n.push(We(r,e,t));return n.push(s),ce(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function B(e,t,n){p.list().forEach((r=>M((()=>r(e,t,n)))))}function V(e,t,n,r,i){const s=O(e,t);if(s)return s;const l=t===H,u=o?history.state:{};n&&(r||l?a.replace(e.fullPath,c({scroll:l&&u&&u.scroll},i)):a.push(e.fullPath,i)),g.value=e,re(e,t,n,l),ee()}let $;function z(){$||($=a.listen(((e,t,n)=>{if(!ae.listening)return;const r=T(e),i=k(r);if(i)return void N(c(i,{replace:!0}),r).catch(u);m=r;const s=g.value;o&&te(Q(s.fullPath,n.delta),Y()),F(r,s).catch((e=>pe(e,12)?e:pe(e,2)?(N(e.to,r).then((e=>{pe(e,20)&&!n.delta&&n.type===W.pop&&a.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&a.go(-n.delta,!1),X(e,r,s)))).then((e=>{e=e||V(r,s,!1),e&&(n.delta&&!pe(e,8)?a.go(-n.delta,!1):n.type===W.pop&&pe(e,20)&&a.go(-1,!1)),B(r,s,e)})).catch(u)})))}let K,G=He(),q=He();function X(e,t,n){ee(e);const r=q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function J(){return K&&g.value!==H?Promise.resolve():new Promise(((e,t)=>{G.add([e,t])}))}function ee(e){return K||(K=!e,z(),G.list().forEach((([t,n])=>e?n(e):t())),G.reset()),e}function re(t,n,i,s){const{scrollBehavior:a}=e;if(!o||!a)return Promise.resolve();const c=!i&&ne(Q(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Z(e))).catch((e=>X(e,t,n)))}const ie=e=>a.go(e);let oe;const se=new Set,ae={currentRoute:g,listening:!0,addRoute:w,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:E,resolve:T,options:e,push:R,replace:C,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:f.add,beforeResolve:d.add,afterEach:p.add,onError:q.add,isReady:J,install(e){const t=this;e.component("RouterLink",Xe),e.component("RouterView",nt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),o&&!oe&&g.value===H&&(oe=!0,R(a.location).catch((e=>{0})));const n={};for(const i in H)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});e.provide(Ve,t),e.provide($e,(0,i.Gc)(n)),e.provide(ze,g);const r=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=H,$&&$(),$=null,g.value=H,oe=!1,K=!1),r()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>M(t)))),Promise.resolve())}return ae}function it(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find((e=>F(e,o)))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find((e=>F(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.89487f9f.js.map