(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-webStyleSymbolUtils-js"],{

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


/***/ })

}]);
//# sourceMappingURL=support-webStyleSymbolUtils-js.js.map