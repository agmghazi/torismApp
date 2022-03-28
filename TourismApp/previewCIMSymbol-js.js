(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["previewCIMSymbol-js"],{

/***/ "/Lnp":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewCIMSymbol.js ***!
  \***********************************************************************/
/*! exports provided: previewCIMSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewCIMSymbol", function() { return s; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _cim_CIMSymbolRasterizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cim/CIMSymbolRasterizer.js */ "a0kx");
/* harmony import */ var _cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cimSymbolUtils.js */ "1EXT");
/* harmony import */ var _renderUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderUtils.js */ "S60b");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new _cim_CIMSymbolRasterizer_js__WEBPACK_IMPORTED_MODULE_1__["CIMSymbolRasterizer"](null,!0),n=120;async function s(t,s={}){const{size:c,maxSize:r,node:m,opacity:f}=s,h=s.cimOptions||s,{feature:y,fieldMap:d,geometryType:p,style:u}=h,g=Object(_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_2__["getCIMSymbolSize"])(t),w=Math.min(null!=c?c:g,null!=r?r:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["px2pt"])(n));w!==g&&(t=t.clone(),Object(_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_2__["scaleCIMSymbolTo"])(t,w,{preserveOutlineWidth:!0}));let M=3;t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(M=1);const b=await o.rasterizeCIMSymbolAsync(t,y,d,p,{scaleFactor:M,style:u}),C=document.createElement("canvas");C.width=b.imageData.width,C.height=b.imageData.height;C.getContext("2d").putImageData(b.imageData,0,0);let D=C.width/M,I=C.height/M;if(null!=c&&(null==(null==s?void 0:s.scale)||(null==s?void 0:s.scale))){const e=D/I;D=e<=1?Math.ceil(w*e):w,I=e<=1?w:Math.ceil(w/e)}const S=new Image(D,I);S.src=C.toDataURL(),null!=f&&(S.style.opacity=`${f}`);let j=S;if(null!=s.effectView){const e={shape:{type:"image",x:0,y:0,width:D,height:I,src:S.src},fill:null,stroke:null,offset:[0,0]};j=Object(_renderUtils_js__WEBPACK_IMPORTED_MODULE_3__["renderSymbol"])([[e]],[D,I],{effectView:s.effectView})}return m&&m.appendChild(j),j}


/***/ }),

/***/ "AIxD":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*************************************************************************/
/*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeBounds", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeExtent", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePaths", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoint", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoints", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolygon", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolyline", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeRings", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeX", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeY", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePaths", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoint", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoints", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeRings", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeX", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeY", function() { return T; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n){return n&&"upperLeft"===n.originPosition}const a=(n,t,e)=>[t,e],m=(n,t,e)=>[t,e,n[2]],c=(n,t,e)=>[t,e,n[2],n[3]];function s(t){if(!t)return null;return{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}}function f(t,e){if(t===e||null==t&&null==e)return!0;if(null==t||null==e)return!1;let r,u,i,o,a,m;return l(t)?(r=t.translate[0],u=t.translate[1],i=t.scale[0]):(r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?t.extent.xmin:0,u=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?t.extent.ymax:0,i=t.tolerance),l(e)?(o=e.translate[0],a=e.translate[1],m=e.scale[0]):(o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.extent)?e.extent.xmin:0,a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.extent)?e.extent.ymax:0,m=e.tolerance),r===o&&u===a&&i===m}function x({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function h({scale:n,translate:t},e){return Math.round((t[1]-e)/n[1])}function I(n,t,e){const r=[];let u,i,o,l;for(let a=0;a<e.length;a++){const m=e[a];a>0?(o=x(n,m[0]),l=h(n,m[1]),o===u&&l===i||(r.push(t(m,o-u,l-i)),u=o,i=l)):(u=x(n,m[0]),i=h(n,m[1]),r.push(t(m,u,i)))}return r.length>0?r:null}function g(n,t,e){return t[0]=x(n,e[0]),t[3]=h(n,e[1]),t[2]=x(n,e[2]),t[1]=h(n,e[3]),t}function p(n,t,e,r){return I(n,e?r?c:m:r?m:a,t)}function N(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function y(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function z({scale:n,translate:t},e){return e*n[0]+t[0]}function T({scale:n,translate:t},e){return t[1]-e*n[1]}function M(n,t,e){const r=new Array(e.length);if(!e.length)return r;const[u,i]=n.scale;let o=z(n,e[0][0]),l=T(n,e[0][1]);r[0]=t(e[0],o,l);for(let a=1;a<e.length;a++){const n=e[a];o+=n[0]*u,l-=n[1]*i,r[a]=t(n,o,l)}return r}function E(n,t,e){const r=new Array(e.length);for(let u=0;u<e.length;u++)r[u]=M(n,t,e[u]);return r}function P(n,t,e){return e?(t[0]=z(n,e[0]),t[1]=T(n,e[3]),t[2]=z(n,e[2]),t[3]=T(n,e[1]),t):[z(n,t[0]),T(n,t[3]),z(n,t[2]),T(n,t[1])]}function b(n,t,e,r){return M(n,e?r?c:m:r?m:a,t)}function F(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function V(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function Y(n,t,e){let[r,u]=e[0],i=Math.min(r,t[0]),o=Math.min(u,t[1]),l=Math.max(r,t[2]),a=Math.max(u,t[3]);for(let m=1;m<e.length;m++){const[n,t]=e[m];r+=n,u+=t,n<0&&(i=Math.min(i,r)),n>0&&(l=Math.max(l,r)),t<0?o=Math.min(o,u):t>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function _(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)Y(n,n,t[e]);return n}function A(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return Y(t,t,n)}function w(n){return _([0,0,0,0],n)}function j(n){return _([0,0,0,0],n)}function G(n,t,e,r,u){return t.xmin=x(n,e.xmin),t.ymin=h(n,e.ymin),t.xmax=x(n,e.xmax),t.ymax=h(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function L(n,t,e,r,u){return t.points=p(n,e.points,r,u),t}function O(n,t,e,r,u){return t.x=x(n,e.x),t.y=h(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m)),t}function S(n,t,e,r,u){const i=N(n,e.rings,r,u);return i?(t.rings=i,t):null}function d(n,t,e,r,u){const i=y(n,e.paths,r,u);return i?(t.paths=i,t):null}function U(n,t){return n&&t?Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPoint"])(t)?O(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?d(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?S(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t)?L(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t)?G(n,{},t,!1,!1):null:null}function k(n,t,e,r,u){return t.xmin=z(n,e.xmin),t.ymin=T(n,e.ymin),t.xmax=z(n,e.xmax),t.ymax=T(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function q(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.points=b(t,r.points,u,i)),e}function v(n,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)||(e.x=z(n,r.x),e.y=T(n,r.y),e!==r&&(u&&(e.z=r.z),i&&(e.m=r.m))),e}function B(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.rings=V(t,r.rings,u,i)),e}function C(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.paths=F(t,r.paths,u,i)),e}


/***/ }),

/***/ "Zhw2":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/floatRGBA.js ***!
  \*****************************************************/
/*! exports provided: packFloatRGBA, unpackFloatRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackFloatRGBA", function() { return r; });
/* harmony import */ var _mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,r,e=0){const i=Object(_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(o,0,f);for(let t=0;t<4;t++)r[e+t]=Math.floor(256*l(i*n[t]))}function r(t,o=0){let r=0;for(let n=0;n<4;n++)r+=t[o+n]*e[n];return r}const n=[1,256,65536,16777216],e=[1/256,1/65536,1/16777216,1/4294967296],f=r(new Uint8ClampedArray([255,255,255,255]));function l(t){return t-Math.floor(t)}


/***/ }),

/***/ "ictz":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/quantizationUtils.js */ "AIxD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,t,o,n,a){const s=e.referencesGeometry()&&a?u(t,n,a):t,i=e.repurposeFeature(s);try{return e.evaluate({...o,$feature:i})}catch(c){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const i=new Map;function u(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;i.has(r)||i.set(r,c(r));const s=i.get(r)(e.geometry,o,n,a);return{...e,geometry:s}}function c(s){const i={};switch(s){case"esriGeometryPoint":return(e,r,t,o)=>Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__["unquantizePoint"])(r,i,e,t,o);case"esriGeometryPolygon":return(e,r,t,o)=>Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__["unquantizePolygon"])(r,i,e,t,o);case"esriGeometryPolyline":return(e,r,t,n)=>Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__["unquantizePolyline"])(r,i,e,t,n);case"esriGeometryMultipoint":return(e,r,o,n)=>Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__["unquantizeMultipoint"])(r,i,e,o,n);default:return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}


/***/ })

}]);
//# sourceMappingURL=previewCIMSymbol-js.js.map