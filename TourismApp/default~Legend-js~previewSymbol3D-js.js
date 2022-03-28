(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Legend-js~previewSymbol3D-js"],{

/***/ "IAPW":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewUtils.js ***!
  \*******************************************************************/
/*! exports provided: adjustColorBrightness, adjustColorComponentBrightness, getConeShapes, getCubeShapes, getCylinderShapes, getDiamondShapes, getExtrudeSymbolShapes, getInvertedConeShapes, getPathSymbolShapes, getTetrahedronShapes, getWaterSymbolShapes, shapes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColorBrightness", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColorComponentBrightness", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConeShapes", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCubeShapes", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCylinderShapes", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiamondShapes", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtrudeSymbolShapes", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvertedConeShapes", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathSymbolShapes", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTetrahedronShapes", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWaterSymbolShapes", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shapes", function() { return t; });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function e(a,t,e){const m=22;let c=m,p=m;a<1?c*=.75:a>1&&(p*=1.25);const L=0,n=0;let o=m,s=m;t&&e&&(c=p=o=s=0);return[{type:"path",path:[{command:"M",values:[o,L]},{command:"L",values:[e?o:.875*o,L]},{command:"L",values:[e?c-.5*o:n,p-.5*s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[o,L]},{command:"L",values:[o,t?L:.125*s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c-.5*o,p-.5*s]},{command:"L",values:[e?c-.5*o:n,p-.5*s]},{command:"L",values:[e?c-.5*o:n,t?p-.5*s:s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"Z",values:[]}]}]}function m(a){const t=22,e=.5*a,m=0,c=0;return[{type:"path",path:[{command:"M",values:[c,.7*t*.5]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+e]},{command:"L",values:[c,.7*t+e-.7*t*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+e]},{command:"L",values:[t,e]},{command:"L",values:[t,m]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,m]},{command:"L",values:[t,m]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[c,.7*t*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function p(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=0,p=0,L=t?.35*e:.5*e;return[{type:"path",path:[{command:"M",values:[.5*e,c]},{command:"L",values:[e,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[p,.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[p,a-.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[e,a-.5*L]},{command:"L",values:[e,.5*L]},{command:"Z",values:[]}]}]}function L(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.5*e,p=.15*e,L=0,n=a-p;return[{type:"ellipse",cx:.5*e,cy:n,rx:c,ry:p},{type:"path",path:[{command:"M",values:[L,p]},{command:"L",values:[L,n]},{command:"L",values:[e,n]},{command:"L",values:[e,p]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*e,cy:p,rx:c,ry:p}]}function n(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.15*e,p=a-c;return[{type:"ellipse",cx:.5*e,cy:p,rx:.5*e,ry:c},{type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,p]},{command:"L",values:[0,p]},{command:"Z",values:[]}]}]}function o(a){let t=a;const e=6;t-=t<22?.5*e:e;const m=.15*t,c=0;return[{type:"path",path:[{command:"M",values:[0,c]},{command:"L",values:[t,c]},{command:"L",values:[.5*t,a-m]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:c,rx:.5*t,ry:m}]}function s(a){let t=a;const e=a,m=4;t-=t<22?.5*m:m;const c=0,p=0,L=t,n=e,o=Math.floor(a/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*L,c]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,c]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[p,.5*n-o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[p,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[.45*L,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,e]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]}]}function l(a){const t=2;let e=a;e-=e<22?.5*t:t;const m=0,c=0;return[{type:"path",path:[{command:"M",values:[.45*a,m]},{command:"L",values:[a,e]},{command:"L",values:[.45*a,.6*e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,m]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[c,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,e]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[a,e]},{command:"Z",values:[]}]}]}function u(a,t){const e=.75;return Math.round(Math.min(Math.max(a+255*t*e,0),255))}function h(t,e){if("type"in t&&("linear"===t.type||"pattern"===t.type))return t;const m=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](t);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([u(m.r,e),u(m.g,e),u(m.b,e),m.a])}


/***/ }),

/***/ "PjW/":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/webStyleSymbolUtils.js ***!
  \**************************************************************************/
/*! exports provided: fetchSymbolFromStyle, resolveWebStyleSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSymbolFromStyle", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveWebStyleSymbol", function() { return g; });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ "H9eC");
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/devEnvironmentUtils.js */ "SbiP");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "/PL2");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jsonUtils.js */ "YXST");
/* harmony import */ var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StyleOrigin.js */ "tyRe");
/* harmony import */ var _styleUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styleUtils.js */ "NDpP");
/* harmony import */ var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Thumbnail.js */ "UFqC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["fetchStyle"])(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c,g,h,j){const d=y.data,U={portal:g&&g.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__["default"].getDefault(),url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c));if(!N){const t=`The symbol name '${c}' could not be found`;return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("symbolstyleutils:symbol-name-not-found",t,{symbolName:c}))}let w=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__["f"])(Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["symbolUrlFromStyleItem"])(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["isDevEnvironment"])()&&(w=Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["adjustStaticAGOUrl"])(w),P=Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__["adjustStaticAGOUrl"])(P));const D={portal:g.portal,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeFile"])(w)),origin:"portal-item"};return Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["requestJSON"])(w,j).then((e=>{const r="cimRef"===h?Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["makeCIMSymbolRef"])(e.data):e.data,o=Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["fromJSON"])(r,D);if(o&&Object(_symbols_js__WEBPACK_IMPORTED_MODULE_0__["isSymbol3D"])(o)){if(P){const t=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__["f"])(P,U);o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__["default"]({url:t})}else S&&(o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__["default"]({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({portal:g.portal,styleUrl:y.styleUrl,name:c}):y.styleName&&(o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({portal:g.portal,styleName:y.styleName,name:c}))}return o}))}function j(t,e,r){const o=_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["Style2DUrlTemplate"].replace(/\{SymbolName\}/gi,t.name);return Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["requestJSON"])(o,r).then((t=>{const r=Object(_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__["makeCIMSymbolRef"])(t.data);return Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__["fromJSON"])(r,{portal:e.portal,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeFile"])(o)),origin:"portal-item"})}))}


/***/ }),

/***/ "SbiP":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/*! exports provided: adjustStaticAGOUrl, isDevEnvironment, isTelemetryDevEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustStaticAGOUrl", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevEnvironment", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTelemetryDevEnvironment", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ "cg+0":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewSymbol3D.js ***!
  \**********************************************************************/
/*! exports provided: getPatternDescriptor, getSymbolLayerFill, previewSymbol3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPatternDescriptor", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolLayerFill", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewSymbol3D", function() { return Y; });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "ss0y");
/* harmony import */ var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/colorUtils.js */ "0ynT");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gfxUtils.js */ "zdBc");
/* harmony import */ var _IconSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IconSymbol3DLayerResource.js */ "PcLj");
/* harmony import */ var _ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ObjectSymbol3DLayerResource.js */ "jBHT");
/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./previewUtils.js */ "IAPW");
/* harmony import */ var _renderUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./renderUtils.js */ "S60b");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils.js */ "rI4C");
/* harmony import */ var _webStyleSymbolUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./webStyleSymbolUtils.js */ "PjW/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D=22,O=120,C=80,I=40,R=20,E=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.symbols.support.previewSymbol3D");function Z(e){const t=e.outline,s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e.material)?e.material.color:null,r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(s)?s.toHex():null;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(t)||"pattern"in t&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===r?{color:"#bdc3c7",width:.75}:null;const o=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.size)||0;return{color:"rgba("+(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(o,C),style:"pattern"in t&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(t.pattern)&&"style"===t.pattern.type?Object(_gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__["dekebabifyLineStyle"])(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function q(t,s){const r=s&&s.resource,o=r&&r.href;if(t.thumbnail&&t.thumbnail.url)return Promise.resolve(t.thumbnail.url);if(o&&"object"!==s.type)return Promise.resolve(Object(_utils_js__WEBPACK_IMPORTED_MODULE_13__["getIconHref"])(t,s));const a=Object(_assets_js__WEBPACK_IMPORTED_MODULE_0__["getAssetUrl"])("esri/images/Legend/legend3dsymboldefault.png");return t.styleOrigin&&(t.styleOrigin.styleName||t.styleOrigin.styleUrl)?Object(_webStyleSymbolUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolveWebStyleSymbol"])(t.styleOrigin,{portal:t.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>{var t;return(null==e||null==(t=e.thumbnail)?void 0:t.url)||a})):Promise.resolve(a)}function A(e,r=1){const o=e.a,a=Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["toHSV"])(e),n=a.h,l=a.s/r,i=100-(100-a.v)/r,{r:c,g:p,b:u}=Object(_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__["toRGB"])({h:n,s:l,v:i});return[c,p,u,o]}function H(e){return"water"===e.type?Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(e.color)?null:e.color:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(e.material)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(e.material.color)?null:e.material.color}function N(e,t=0){const s=H(e);if(!s){if("fill"===e.type)return null;const s=_gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__["defaultThematicColor"].r,r=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["adjustColorComponentBrightness"])(s,t);return[r,r,r,100]}const r=s.toRgba();for(let o=0;o<3;o++)r[o]=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["adjustColorComponentBrightness"])(r[o],t);return r}async function T(t,s){const r=t.style;if("none"===r)return null;return{type:"pattern",x:0,y:0,src:await Object(_gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPatternUrlWithColor"])(Object(_assets_js__WEBPACK_IMPORTED_MODULE_0__["getAssetUrl"])(`esri/symbols/patterns/${r}.png`),s.toCss(!0)),width:5,height:5}}function $(e){return e.outline?Z(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function B(e,t){const s=H(e);if(!s)return null;let r="rgba(";return r+=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["adjustColorComponentBrightness"])(s.r,t)+",",r+=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["adjustColorComponentBrightness"])(s.g,t)+",",r+=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["adjustColorComponentBrightness"])(s.b,t)+",",r+s.a+");"}function F(e,t){const s=B(e,t);if(!s)return{};if("pattern"in e&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style)return null;return{color:s,width:Math.min(e.size?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(e.size):.75,C),style:"pattern"in e&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e.pattern)&&"style"===e.pattern.type?Object(_gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__["dekebabifyLineStyle"])(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(2):e.join:null}}function G(e,t,s){const r=.75*s;return{type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function J(e){const t=e.depth,s=e.height,r=e.width;return r&&t&&s&&r===t&&r<s}function K(e,t,s){const r=[];if(!e)return r;switch(e.type){case"icon":{const s=0,o=0,a=t,n=t;switch(e.resource&&e.resource.primitive||_IconSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_9__["defaultPrimitive"]){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:N(e,0),stroke:Z(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[s,o]},{command:"L",values:[a,o]},{command:"L",values:[a,n]},{command:"Z",values:[]}]},fill:N(e,0),stroke:Z(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[.5*a,o]},{command:"L",values:[a,n]},{command:"Z",values:[]}]},fill:N(e,0),stroke:Z(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*a,o]},{command:"L",values:[.5*a,n]},{command:"M",values:[s,.5*n]},{command:"L",values:[a,.5*n]}]},stroke:$(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[s,o]},{command:"L",values:[a,n]},{command:"M",values:[a,o]},{command:"L",values:[s,n]}]},stroke:$(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[s,.5*n]},{command:"L",values:[.5*a,o]},{command:"L",values:[a,.5*n]},{command:"L",values:[.5*a,n]},{command:"Z",values:[]}]},fill:N(e,0),stroke:Z(e)})}break}case"object":switch(e.resource&&e.resource.primitive||_ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_10__["defaultPrimitive"]){case"cone":{const o=G(N(e,0),N(e,-.6),s?R:t),a=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getConeShapes"])(t,s);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:o});break}case"inverted-cone":{const s=N(e,0),o=G(s,N(e,-.6),t),a=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getInvertedConeShapes"])(t);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:s});break}case"cube":{const o=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getCubeShapes"])(t,s);r.push({shape:o[0],fill:N(e,0)}),r.push({shape:o[1],fill:N(e,-.3)}),r.push({shape:o[2],fill:N(e,-.5)});break}case"cylinder":{const o=G(N(e,0),N(e,-.6),s?R:t),a=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getCylinderShapes"])(t,s);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:o}),r.push({shape:a[2],fill:N(e,0)});break}case"diamond":{const s=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getDiamondShapes"])(t);r.push({shape:s[0],fill:N(e,-.3)}),r.push({shape:s[1],fill:N(e,0)}),r.push({shape:s[2],fill:N(e,-.3)}),r.push({shape:s[3],fill:N(e,-.7)});break}case"sphere":{const s=G(N(e,0),N(e,-.6));s.x1=0,s.y1=0,s.x2=.25*t,s.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:s});break}case"tetrahedron":{const s=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getTetrahedronShapes"])(t);r.push({shape:s[0],fill:N(e,-.3)}),r.push({shape:s[1],fill:N(e,0)}),r.push({shape:s[2],fill:N(e,-.6)});break}}break}return r}function Q(e){return"icon"===e.type?"multiply":"tint"}function V(e,t){const s=t&&t.size?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.size):null,r=t&&t.maxSize?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.maxSize):null,o=t&&t.disableUpsampling,a=e.symbolLayers,n=[];let c=0,p=0;const u=a.getItemAt(a.length-1);let h;return u&&"icon"===u.type&&(h=u.size&&Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(u.size)),a.forEach((a=>{if("icon"!==a.type&&"object"!==a.type)return;const l="icon"===a.type?a.size&&Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(a.size):0,u=s||l?Math.ceil(Math.min(s||l,r||O)):D;if(a&&a.resource&&a.resource.href){const t=q(e,a).then((function(e){const t=a.get("material.color"),s=Q(a);return Object(_renderUtils_js__WEBPACK_IMPORTED_MODULE_12__["tintImageWithColor"])(e,u,t,s,o)})).then((function(e){const t=e.width,s=e.height;return c=Math.max(c,t),p=Math.max(p,s),[{shape:{type:"image",x:0,y:0,width:t,height:s,src:e.url},fill:null,stroke:null}]}));n.push(t)}else{var m;let e=u;"icon"===a.type&&h&&s&&(e=u*(l/h));const r="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(m=t.symbolConfig)?void 0:m.isTall)||"object"===a.type&&J(a);c=Math.max(c,r?R:e),p=Math.max(p,e),n.push(Promise.resolve(K(a,e,r)))}})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["eachAlways"])(n).then((function(e){const s=[];return e.forEach((function(e){e.value?s.push(e.value):e.error&&E.warn("error while building swatchInfo!",e.error)})),Object(_renderUtils_js__WEBPACK_IMPORTED_MODULE_12__["renderSymbol"])(s,[c,p],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function W(e,t){const s=e.symbolLayers,r=[],o=Object(_utils_js__WEBPACK_IMPORTED_MODULE_13__["isVolumetricSymbol"])(e),n=t&&t.size?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.size):null,l=(t&&t.maxSize?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.maxSize):null)||C;let c,p=0,u=0;return s.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const s=[];switch(e.type){case"line":{const r=F(e,0);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(r))break;const o=r&&r.width||0;0===t&&(c=o);const i=Math.min(n||o,l),h=0===t?i:n?i*(o/c):i,m=h>I/2?2*h:I;u=Math.max(u,h),p=Math.max(p,m),r.width=h,s.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u]},{command:"L",values:[p,.5*u]}]},stroke:r});break}case"path":{const t=Math.min(n||D,l),r=N(e,0),o=N(e,-.2),a=B(e,-.4),i=a?{color:a,width:1}:{};if("quad"===e.profile){const t=e.width,a=e.height,n=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getPathSymbolShapes"])(t&&a?t/a:1,0===a,0===t),l={...i,join:"bevel"};s.push({shape:n[0],fill:o,stroke:l}),s.push({shape:n[1],fill:o,stroke:l}),s.push({shape:n[2],fill:r,stroke:l})}else s.push({shape:_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["shapes"].pathSymbol3DLayer[0],fill:o,stroke:i}),s.push({shape:_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["shapes"].pathSymbol3DLayer[1],fill:r,stroke:i});u=Math.max(u,t),p=u}}r.push(s)})),Promise.resolve(Object(_renderUtils_js__WEBPACK_IMPORTED_MODULE_12__["renderSymbol"])(r,[p,u],{node:t&&t.node,scale:o,opacity:t&&t.opacity}))}async function X(e,t){const s="mesh-3d"===e.type,r=e.symbolLayers,o=t&&t.size?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.size):null,l=t&&t.maxSize?Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__["pt2px"])(t.maxSize):null,c=o||D,p=[];let u=0,h=0,m=!1;for(let i=0;i<r.length;i++){const e=r.getItemAt(i),t=[];if(s&&"fill"!==e.type)continue;const o=_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["shapes"].fill[0];switch(e.type){case"fill":{const r=Z(e),a=Math.min(c,l||O);u=Math.max(u,a),h=Math.max(h,a),m=!0;let i=N(e,0);const p="pattern"in e&&e.pattern,f=H(e);!s&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(p)&&"style"===p.type&&"solid"!==p.style&&f&&(i=await T(p,f)),t.push({shape:o,fill:i,stroke:r});break}case"line":{const s=F(e,0);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(s))break;const r={stroke:s,shape:o};u=Math.max(u,D),h=Math.max(h,D),t.push(r);break}case"extrude":{const s={join:"round",width:1,...F(e,-.4)},r=N(e,0),o=N(e,-.2),a=Math.min(c,l||O),n=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getExtrudeSymbolShapes"])(a);s.width=1,t.push({shape:n[0],fill:o,stroke:s}),t.push({shape:n[1],fill:o,stroke:s}),t.push({shape:n[2],fill:r,stroke:s});const i=D,p=.7*D+.5*a;u=Math.max(u,i),h=Math.max(h,p);break}case"water":{const s=H(e),r=A(s),o=A(s,2),a=A(s,3),n=Object(_previewUtils_js__WEBPACK_IMPORTED_MODULE_11__["getWaterSymbolShapes"])();m=!0,t.push({shape:n[0],fill:r}),t.push({shape:n[1],fill:o}),t.push({shape:n[2],fill:a});const i=Math.min(c,l||O);u=Math.max(u,i),h=Math.max(h,i);break}}p.push(t)}return Promise.resolve(Object(_renderUtils_js__WEBPACK_IMPORTED_MODULE_12__["renderSymbol"])(p,[u,h],{node:t&&t.node,scale:m,opacity:t&&t.opacity}))}function Y(e,t){if(0===e.symbolLayers.length)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return V(e,t);case"line-3d":return W(e,t);case"polygon-3d":case"mesh-3d":return X(e,t)}return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("symbolPreview: swatchInfo3D","symbol not supported."))}


/***/ })

}]);
//# sourceMappingURL=default~Legend-js~previewSymbol3D-js.js.map