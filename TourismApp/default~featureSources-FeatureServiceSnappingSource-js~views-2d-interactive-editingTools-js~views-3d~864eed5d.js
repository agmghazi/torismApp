(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~featureSources-FeatureServiceSnappingSource-js~views-2d-interactive-editingTools-js~views-3d~864eed5d"],{

/***/ "+JUG":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/sphere.js ***!
  \****************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return w; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "15Hh");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec4.js */ "dXfX");
/* harmony import */ var _vec4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec4f64.js */ "D8Ta");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/support/ray.js */ "0Y+r");
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/support/vector.js */ "obHo");
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/support/vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.geometry.support.sphere");function P(){return Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__["c"])()}function _(t,r=P()){return Object(_vec4_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r,t)}function q(t,r){return Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__["f"])(t[0],t[1],t[2],r)}function w(t){return t}function C(t){t[0]=t[1]=t[2]=t[3]=0}function k(t){return t}function E(t){return Array.isArray(t)?t[3]:t}function L(t){return Array.isArray(t)?t:X}function O(t,r,n,s){return Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__["f"])(t,r,n,s)}function T(t,r,n){return t!==n&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(n,t),n[3]=t[3]+r,n}function z(t,r,n){return x.error("sphere.setExtent is not yet supported"),t===n?n:_(t,n)}function U(t,r,n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(r))return!1;const{origin:e,direction:o}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*i[0]+o[1]*i[1]+o[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return(m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+o[0]*m,n[1]=e[1]+o[1]*m,n[2]=e[2]+o[2]*m),!0)}const V=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])();function B(t,r){return U(t,r,null)}function D(t,r,n){if(U(t,r,n))return n;const s=F(t,r,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__["sv3d"].get());return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(n,r.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__["sv3d"].get(),r.direction,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["i"])(r.origin,s)/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(r.direction))),n}function F(t,r,n){const s=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__["sv3d"].get(),i=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__["sm4d"].get();Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["c"])(s,r.origin,r.direction);const a=E(t);Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["c"])(n,s,r.origin),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(n,n,1/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(n)*a);const u=J(t,r.origin),g=Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_10__["angle"])(r.origin,n);return Object(_mat4_js__WEBPACK_IMPORTED_MODULE_4__["i"])(i),Object(_mat4_js__WEBPACK_IMPORTED_MODULE_4__["e"])(i,i,g+u,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["m"])(n,n,i),n}function G(t,r,n){return U(t,r,n)?n:(Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_9__["closestPoint"])(r,L(t),n),H(t,n,n))}function H(t,r,n){const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__["sv3d"].get(),r,L(t)),e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__["sv3d"].get(),s,t[3]/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(s));return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(n,e,L(t))}function I(t,r){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__["sv3d"].get(),r,L(t)),s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["p"])(n),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function J(t,n){const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_11__["sv3d"].get(),n,L(t)),e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(s),o=E(t),i=o+Math.abs(o-e);return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["acosClamped"])(o/i)}const K=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])();function N(t,r,s,e){const o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(K,r,L(t));switch(s){case 0:{const t=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["cartesianToSpherical"])(o,K)[2];return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(e,-Math.sin(t),Math.cos(t),0)}case 1:{const t=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["cartesianToSpherical"])(o,K),r=t[1],s=t[2],i=Math.sin(r);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(e,-i*Math.cos(s),-i*Math.sin(s),Math.cos(r))}case 2:return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["n"])(e,o);default:return}}function Q(t,r){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(Y,r,L(t));return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(n)-t[3]}function W(t,r,n,s){const e=Q(t,r),o=N(t,r,2,Y),i=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(Y,o,n-e);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(s,r,i)}const X=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),Y=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),Z=Object.freeze({__proto__:null,create:P,copy:_,fromCenterAndRadius:q,wrap:w,clear:C,fromRadius:k,getRadius:E,getCenter:L,fromValues:O,elevate:T,setExtent:z,intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:D,closestPointOnSilhouette:F,closestPoint:G,projectPoint:H,distanceToSilhouette:I,angleToSilhouette:J,axisAt:N,altitudeAt:Q,setAltitudeAt:W});


/***/ }),

/***/ "0Y+r":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/ray.js ***!
  \***********************************************************/
/*! exports provided: closestPoint, copy, create, distance, distance2, equals, fromPoints, fromValues, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestPoint", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance2", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPoints", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return j; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(i){return i?{origin:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(i.origin),direction:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(i.direction)}:{origin:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),direction:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}function m(n,r){return Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["equals"])(n.origin,r.origin)&&Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["equals"])(n.direction,r.direction)}function j(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function l(i,n=d()){return k(i.origin,i.direction,n)}function p(i,n,t=d()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(t.origin,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(t.direction,n,i),t}function k(i,n,o=d()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o.origin,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o.direction,n),o}function h(i,n){const r=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),i.direction),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,i.origin));return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r,r)}function v(i,n){return Math.sqrt(h(i,n))}function b(i,n,r){const t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(i.direction,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(r,n,i.origin));return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r,i.origin,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(r,i.direction,t)),r}function q(){return{origin:null,direction:null}}const S=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__["ObjectStack"](q);


/***/ }),

/***/ "2uVf":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat3f64.js ***!
  \*****************************************************/
/*! exports provided: a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function r(e,n,r,t,a,o,c,u,f){return[e,n,r,t,a,o,c,u,f]}function t(e,n){return new Float64Array(e,n,9)}const a=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t});


/***/ }),

/***/ "3O/s":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/VectorStack.js ***!
  \*******************************************************/
/*! exports provided: VectorStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorStack", function() { return m; });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextTick.js */ "KrcW");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chunks/vec4f64.js */ "D8Ta");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize)}get(){0===this._itemsPtr&&Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_0__["nextTick"])((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=a){return new m(16,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__["c"],t)}static createVec3f64(t=a){return new m(24,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["b"],t)}static createVec4f64(t=a){return new m(32,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__["a"],t)}static createMat3f64(t=a){return new m(72,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__["a"],t)}static createMat4f64(t=a){return new m(128,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["a"],t)}static createQuatf64(t=a){return new m(32,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__["c"],t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a=4096;


/***/ }),

/***/ "D8Ta":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4f64.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, i, j, k, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function c(){return r(0,1,0,0)}function i(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const _=a(),l=o(),N=s(),U=c(),I=i(),O=f(),T=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,unitZ:i,unitW:f,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});


/***/ }),

/***/ "IRkY":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ObjectStack.js ***!
  \*******************************************************/
/*! exports provided: ObjectStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectStack", function() { return s; });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextTick.js */ "KrcW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow()}get(){return 0===this._itemsPtr&&Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_0__["nextTick"])((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator())}}const i=1024;


/***/ }),

/***/ "c2GT":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/vectorStacks.js ***!
  \********************************************************************/
/*! exports provided: sm3d, sm4d, sq4d, sv2d, sv3d, sv4d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm3d", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm4d", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sq4d", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv2d", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv3d", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv4d", function() { return r; });
/* harmony import */ var _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/VectorStack.js */ "3O/s");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec2f64(),c=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec3f64(),r=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec4f64(),a=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat3f64(),f=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat4f64(),o=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createQuatf64();


/***/ }),

/***/ "obHo":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/vector.js ***!
  \**************************************************************/
/*! exports provided: angle, angleAroundAxis, projectPoint, projectPointSignedLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angleAroundAxis", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPoint", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPointSignedLength", function() { return e; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n,o,s){const c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(n,o)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(n,n);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(s,n,c)}function e(n,r){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(n,r)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(n)}function f(r,s){const c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(r,s)/(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(r)*Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(s));return-Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["acosClamped"])(c)}function i(o,r,u){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(m,o),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(h,r);const a=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(m,h),e=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["acosClamped"])(a),f=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(m,m,h);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(f,u)<0?2*Math.PI-e:e}const m=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),h=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();


/***/ }),

/***/ "r+FG":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat4f64.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function r(e,n,r,t,a,o,c,u,s,f,i,l,_,I,b,m){return[e,n,r,t,a,o,c,u,s,f,i,l,_,I,b,m]}function t(e,n){return new Float64Array(e,n,16)}const a=e(),o=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t,IDENTITY:a});


/***/ }),

/***/ "sTkM":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quatf64.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function r(e,n,r,t){return[e,n,r,t]}function t(e,n){return new Float64Array(e,n,4)}const a=e(),o=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t,IDENTITY:a});


/***/ })

}]);
//# sourceMappingURL=default~featureSources-FeatureServiceSnappingSource-js~views-2d-interactive-editingTools-js~views-3d~864eed5d.js.map