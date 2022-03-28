(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-3d-interactive-editingTools-js~views-draw-support-Box-js~views-draw-support-GraphicMov~45d9dbef"],{

/***/ "6UvW":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/drapedUtils.js ***!
  \****************************************************************/
/*! exports provided: createQueryGeometry, intersectsDrapedGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryGeometry", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsDrapedGeometry", function() { return o; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/unitUtils.js */ "gEht");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,n,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"]){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o)&&!o.equals(a.spatialReference)?Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__["getMetersPerUnitForSR"])(o)/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__["getMetersPerUnitForSR"])(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,i){const o=i.toMap(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o))return!1;return a(o,Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_3__["calculateTolerance"])(),i,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"];


/***/ }),

/***/ "PN7H":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/GraphicManipulator.js ***!
  \***************************************************************************/
/*! exports provided: GraphicManipulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicManipulator", function() { return v; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/projection.js */ "gYg2");
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../support/elevationInfoUtils.js */ "9AiD");
/* harmony import */ var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../symbols/support/defaults.js */ "psH3");
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../symbols/support/ElevationInfo.js */ "/RTN");
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../support/drapedUtils.js */ "6UvW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let v=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e){super(e),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"].EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(e){this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()}get elevationInfo(){const e="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,t=Object(_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_14__["getGraphicEffectiveElevationMode"])(this.graphic),i=e?e.offset:0;return new _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]({mode:t,offset:i})}set focusedSymbol(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())}set hovering(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())}set selected(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(e){const t=this.graphic;if(!1===t.visible)return null;const i=t.geometry;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(i))return null;const r=this._get("focusedSymbol"),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(r)?r:t.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,e,i,l):this._intersectDistance3D(this.view,e,t)}attach(){this.attachSymbolChanged(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(e=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)&&e!==this.focusedSymbol&&e!==this._originalSymbol&&(this._originalSymbol=e,this._focused&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))}),!0)}detachSymbolChanged(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(e,t,i,a){if(a=a||Object(_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_15__["getDefaultSymbol2D"])(i),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(a))return null;const n=1;let c=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==a.type)return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_17__["intersectsDrapedGeometry"])(t,i,e)?n:null;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(c)||!c.originalPoint.equals(i)){const t=i,o=e.spatialReference;if(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__["canProjectWithoutEngine"])(t.spatialReference,o)){const e=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__["project"])(t,o);c={originalPoint:t.clone(),mapPoint:e,radiusPx:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(a.size)},this._circleCollisionCache=c}}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(c)){const i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["screenPointObjectToArray"])(t,C),o=e.toScreen(c.mapPoint),s=c.radiusPx,p=o.x+Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(a.xoffset),m=o.y-Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(a.yoffset);return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_10__["a"])(i,[p,m])<s*s?n:null}return null}_intersectDistance3D(e,t,i){const o=e.toMap(t,{include:[i]});return o&&Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__["projectPointToVector"])(o,S,e.renderSpatialReference)?Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__["i"])(S,e.state.camera.eye):null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0,nonNullable:!0})],v.prototype,"graphic",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],v.prototype,"elevationInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0,nonNullable:!0})],v.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({value:null})],v.prototype,"focusedSymbol",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0})],v.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],v.prototype,"interactive",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],v.prototype,"selectable",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],v.prototype,"grabbable",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({value:!1})],v.prototype,"grabbing",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],v.prototype,"dragging",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],v.prototype,"hovering",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({value:!1})],v.prototype,"selected",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],v.prototype,"cursor",void 0),v=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.views.interactive.GraphicManipulator")],v);const S=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),C=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["createScreenPointArray"])();


/***/ }),

/***/ "U282":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js ***!
  \****************************************************************************/
/*! exports provided: calculateTolerance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTolerance", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}


/***/ }),

/***/ "zcE2":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/draw/support/drawUtils.js ***!
  \*******************************************************************/
/*! exports provided: cloneMove, getRotationAngle, getScaleRatio, move, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneMove", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotationAngle", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleRatio", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return i; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/coordsUtils.js */ "Mu3I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,n,e,r){if(null==r||t.hasZ||(r=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=r&&(t.z+=r),t;if("multipoint"===t.type){const o=t.points;for(let t=0;t<o.length;t++)o[t]=l(o[t],n,e,r);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=r&&(t.zmin+=r,t.zmax+=r),t;const s=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__["geometryToCoordinates"])(t),i="polyline"===t.type?t.paths:t.rings;for(let o=0;o<s.length;o++){const t=s[o];for(let o=0;o<t.length;o++)t[o]=l(t[o],n,e,r)}return"paths"in t?t.paths=i:t.rings=i,t}function s(t,n,e,s,i){const a=t.clone(),m=s.resolution;if("point"===a.type){if(i)r(a,n*m,-e*m);else{const t=s.state.transform,o=s.state.inverseTransform,r=t[0]*a.x+t[2]*a.y+t[4],i=t[1]*a.x+t[3]*a.y+t[5];a.x=o[0]*(r+n)+o[2]*(i+e)+o[4],a.y=o[1]*(r+n)+o[3]*(i+e)+o[5]}return a}if("multipoint"===a.type){if(i)r(a,n*m,-e*m);else{const t=a.points,o=s.state.transform,r=s.state.inverseTransform;for(let s=0;s<t.length;s++){const i=t[s],a=o[0]*i[0]+o[2]*i[1]+o[4],m=o[1]*i[0]+o[3]*i[1]+o[5],l=r[0]*(a+n)+r[2]*(m+e)+r[4],p=r[1]*(a+n)+r[3]*(m+e)+r[5];t[s]=x(i,l,p,void 0)}}return a}if("extent"===a.type){if(i)r(a,n*m,-e*m);else{const t=s.state.transform,o=s.state.inverseTransform,r=t[0]*a.xmin+t[2]*a.ymin+t[4],i=t[1]*a.xmin+t[3]*a.ymin+t[5],m=t[0]*a.xmax+t[2]*a.ymax+t[4],l=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=o[0]*(r+n)+o[2]*(i+e)+o[4],a.ymin=o[1]*(r+n)+o[3]*(i+e)+o[5],a.xmax=o[0]*(m+n)+o[2]*(l+e)+o[4],a.ymax=o[1]*(m+n)+o[3]*(l+e)+o[5]}return a}if(i)r(a,n*m,-e*m);else{const t=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__["geometryToCoordinates"])(a),r="polyline"===a.type?a.paths:a.rings,i=s.state.transform,m=s.state.inverseTransform;for(let o=0;o<t.length;o++){const r=t[o];for(let t=0;t<r.length;t++){const o=r[t],s=i[0]*o[0]+i[2]*o[1]+i[4],a=i[1]*o[0]+i[3]*o[1]+i[5],l=m[0]*(s+n)+m[2]*(a+e)+m[4],p=m[1]*(s+n)+m[3]*(a+e)+m[5];r[t]=x(o,l,p,void 0)}}"paths"in a?a.paths=r:a.rings=r}return a}function i(t,r,s,i){if("point"===t.type){const{x:n,y:e}=t,o=i?i[0]:n,a=i?i[1]:e,m=t.clone(),l=(n-o)*r+o,x=(e-a)*s+a;return m.x=l,m.y=x,m}if("multipoint"===t.type){const a=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__["geometryToCoordinates"])(t),m=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(),[l,p,y,f]=Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__["getRingsOrPathsBounds"])(m,[a]),u=i?i[0]:(l+y)/2,c=i?i[1]:(f+p)/2,h=t.clone(),g=h.points;for(let t=0;t<g.length;t++){const n=g[t],[e,o]=n,i=(e-u)*r+u,a=(o-c)*s+c;g[t]=x(n,i,a,void 0)}return h}if("extent"===t.type){const{xmin:n,xmax:e,ymin:o,ymax:a}=t,m=i?i[0]:(n+e)/2,l=i?i[1]:(a+o)/2,x=t.clone();if(x.xmin=(n-m)*r+m,x.ymax=(a-l)*s+l,x.xmax=(e-m)*r+m,x.ymin=(o-l)*s+l,x.xmin>x.xmax){const t=x.xmin,n=x.xmax;x.xmin=n,x.xmax=t}if(x.ymin>x.ymax){const t=x.ymin,n=x.ymax;x.ymin=n,x.ymax=t}return x}const a=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__["geometryToCoordinates"])(t),m=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(),[l,p,y,f]=Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__["getRingsOrPathsBounds"])(m,a),u=i?i[0]:(l+y)/2,c=i?i[1]:(f+p)/2,h=t.clone(),g="polyline"===h.type?h.paths:h.rings;for(let n=0;n<a.length;n++){const t=a[n];for(let e=0;e<t.length;e++){const o=t[e],[i,a]=o,m=(i-u)*r+u,l=(a-c)*s+c;g[n][e]=x(o,m,l,void 0)}}return"paths"in h?h.paths=g:h.rings=g,h}function a(t,n,e,o,r,s){const i=Math.sqrt((e-t)*(e-t)+(o-n)*(o-n));return Math.sqrt((r-t)*(r-t)+(s-n)*(s-n))/i}function m(n,e,o){const r=Math.atan2(e.y-o.y,e.x-o.x)-Math.atan2(n.y-o.y,n.x-o.x),s=Math.atan2(Math.sin(r),Math.cos(r));return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(s)}function l(t,n,e,o){return x(t,t[0]+n,t[1]+e,null!=t[2]&&null!=o?t[2]+o:void 0)}function x(t,n,e,o){const r=[n,e];return t.length>2&&r.push(null!=o?o:t[2]),t.length>3&&r.push(t[3]),r}


/***/ })

}]);
//# sourceMappingURL=default~views-3d-interactive-editingTools-js~views-draw-support-Box-js~views-draw-support-GraphicMov~45d9dbef.js.map