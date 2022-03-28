(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/SUY":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources3.js ***!
  \*****************************************************************************/
/*! exports provided: C, I, S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return ICON_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SLOTS; });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  sticky: "sticky"
};
var ICON_TYPES;
(function (ICON_TYPES) {
  ICON_TYPES["circle"] = "circle";
  ICON_TYPES["square"] = "square";
  ICON_TYPES["grip"] = "grip";
})(ICON_TYPES || (ICON_TYPES = {}));
const SLOTS = {
  menuActions: "menu-actions"
};




/***/ }),

/***/ 4:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4ugL":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \**************************************************************************/
/*! exports provided: getGeometryServiceURL, projectGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeometryServiceURL", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectGeometry", function() { return l; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "AiS/");
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/geometryService/project.js */ "rJHQ");
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/support/ProjectParameters.js */ "fms8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(o=null,n){var i,l;if(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl)return _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");let a;a="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault():o,await a.load({signal:n});const c=null==(i=a.helperServices)||null==(l=i.geometry)?void 0:l.url;if(!c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");return c}async function l(r,t,l=null,a){const c=await i(l,a),s=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"];s.geometries=[r],s.outSpatialReference=t;const m=await Object(_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__["project"])(c,s,{signal:a});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-projection-failed")}


/***/ }),

/***/ "4xTw":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/BaseTileRenderer.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__["HandleOwner"]{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"layerView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"tileInfoView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],i.prototype,"updating",null),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);const o=i;


/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "9AIY":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceExtension.js ***!
  \***********************************************************************/
/*! exports provided: getResourceContentExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceContentExtension", function() { return p; });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(i){return o[n(i)]||e}function n(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["getPathExtension"])(p);return g[n]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g)o[g[l]]=l;


/***/ }),

/***/ "AfLA":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js ***!
  \*********************************************************************/
/*! exports provided: calculateHeatmapIntensityInfo, calculateHeatmapIntensityInfoReaders, createHeatmapImageData, createKernel, createValueFunction, createValueFunctionCursor, drawHeatmap, generateGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfo", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfoReaders", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeatmapImageData", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKernel", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFunction", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFunctionCursor", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawHeatmap", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGradient", function() { return e; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d"),n=512;return t.height=n,t.width=1,n=>{e.clearRect(0,0,1,t.height);const r=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n.colorStops)r.addColorStop(Math.max(t,.001),`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`);return e.fillStyle=r,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function n(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:c}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=f(c,a);for(const{geometry:i,attributes:f}of t){const t=i.x-h,e=i.y-h,o=Math.max(0,t),a=Math.max(0,e),c=Math.min(r,i.y+h),g=Math.min(n,i.x+h),y=+m(f);for(let r=a;r<c;r++){const a=l[r-e];for(let e=o;e<g;e++){const o=l[e-t];s=u[r*n+e]+=a*o*y,s>d&&(d=s)}}}return{matrix:u.buffer,max:d}}function r(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:f}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=c(f,a),g=new Set;for(const i of t){const t=i.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=128;if(o.x<-a||o.x>=n+a||o.y<-a||o.y>r+a)continue;const i=+m(t),f=Math.round(o.x)-h,c=Math.round(o.y)-h,y=Math.max(0,f),M=Math.max(0,c),x=Math.min(r,Math.round(o.y)+h),b=Math.min(n,Math.round(o.x)+h);for(let t=M;t<x;t++){const e=l[t-c];for(let r=y;r<b;r++){const o=l[r-f];s=u[t*n+r]+=e*o*i,s>d&&(d=s)}}}}return{matrix:u.buffer,max:d}}function o(t,e,n,r,o,i){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const f=t.getImageData(0,0,e,e);n&&r&&f.data.set(new Uint8ClampedArray(a(e,n,r,o,i))),t.putImageData(f,0,0)}function a(e,n,r,o,a){const i=new Uint32Array(e*e),f="buffer"in n?n:new Float64Array(n),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(a-o);for(let l=0;l<f.length;l++){const e=f[l],n=Math.floor((e-o)*u);i[l]=c[Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(n,0,c.length-1)]}return i.buffer}function i(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let o=0;o<=r.length;o++)r[o]=Math.exp(-((o-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}function f(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}function c(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}


/***/ }),

/***/ "BGvB":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/kmlUtils.js ***!
  \**************************************************************/
/*! exports provided: computeExtent, fetchService, getGraphics, parseKML, sublayersFromJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchService", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphics", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKML", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sublayersFromJSON", function() { return S; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../kernel.js */ "975N");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PopupTemplate.js */ "SFah");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../rest/support/FeatureSet.js */ "Ltyc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const o=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?G(n,a,e.featureSet.features):"esriGeometryPolyline"===t?G(i,a,e.featureSet.features):"esriGeometryPolygon"===t&&G(f,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s)}))})),t.forEach((e=>{if(e.featureInfos){e.points=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(r.get("esriGeometryPoint")),e.polylines=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(r.get("esriGeometryPolyline")),e.polygons=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_4__["clone"])(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[o.type].get(o.id);t&&e[c[o.type]].featureSet.features.push(t);break}case"GroundOverlay":{const t=a.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e])}}));const u=j(t);return{folders:o,sublayers:t,extent:u}}function g(t,s,i,f){const a=_kernel_js__WEBPACK_IMPORTED_MODULE_1__["id"]&&_kernel_js__WEBPACK_IMPORTED_MODULE_1__["id"].findCredential(t);t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["addQueryParameters"])(t,{token:a&&a.token});const l=_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].kmlServiceUrl;return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(l,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else s.unshift(i)})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t)}))}function h(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=h(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=_rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(e.featureSet).features,r=e.layerDefinition,s=Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__["fromJSON"])(r.drawingInfo.renderer),n=_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t)}return i}function j(e){const o=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["create"])(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["NEGATIVE_INFINITY"]),t=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["create"])(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["NEGATIVE_INFINITY"]);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["expandWithAABB"])(t,o);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["expandWithAABB"])(t,o);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["expandWithAABB"])(t,o);if(r.mapImages)for(const e of r.mapImages)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__["getBoundsXYZ"])(o,e.extent),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["expandWithAABB"])(t,o)}return Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["equals"])(t,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__["NEGATIVE_INFINITY"])?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__["default"].WGS84}}


/***/ }),

/***/ "DVsc":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js ***!
  \****************************************************************************************************/
/*! exports provided: VertexSnappingCandidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexSnappingCandidate", function() { return i; });
/* harmony import */ var _SnappingConstraint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SnappingConstraint.js */ "Q+DB");
/* harmony import */ var _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureSnappingCandidate.js */ "kq/K");
/* harmony import */ var _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hints/PointSnappingHint.js */ "tjz2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__["FeatureSnappingCandidate"]{constructor(n){super({...n,constraint:new _SnappingConstraint_js__WEBPACK_IMPORTED_MODULE_0__["PointConstraint"](n.coordinateHelper,n.targetPoint)})}get hints(){return[new _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__["PointSnappingHint"](this.targetPoint)]}}


/***/ }),

/***/ "E4HC":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/interactive/SnappingVisualizer2D.js ***!
  \********************************************************************************/
/*! exports provided: SnappingVisualizer2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnappingVisualizer2D", function() { return h; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "4GrV");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../symbols.js */ "H9eC");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/handleUtils.js */ "xkkJ");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _draw_support_settings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../draw/support/settings.js */ "d3n7");
/* harmony import */ var _interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../interactive/snapping/Settings.js */ "yftL");
/* harmony import */ var _interactive_snapping_SnappingVisualizer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../interactive/snapping/SnappingVisualizer.js */ "ZadS");
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../symbols/SimpleMarkerSymbol.js */ "Tcmu");
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../symbols/SimpleLineSymbol.js */ "21Ip");
/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../symbols/CIMSymbol.js */ "TKwc");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../geometry/Polyline.js */ "UhwK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h extends _interactive_snapping_SnappingVisualizer_js__WEBPACK_IMPORTED_MODULE_10__["SnappingVisualizer"]{constructor(e){super(),this.graphicsLayer=e}visualizeIntersectionPoint(e,r){return this._visualizeSnappingIndicator(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:r.coordinateHelper.spatialReference}),u)}visualizePoint(e,r){return this._visualizeSnappingIndicator(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]({x:e.point[0],y:e.point[1],spatialReference:r.coordinateHelper.spatialReference}),M)}visualizeLine(e,r){return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_15__["default"]({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.coordinateHelper.spatialReference}),f)}visualizeParallelSign(e,r){return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_15__["default"]({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.coordinateHelper.spatialReference}),I)}visualizeRightAngleQuad(e,r){return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_15__["default"]({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:r.coordinateHelper.spatialReference}),C(e))}_visualizeSnappingIndicator(i,t){const n=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({geometry:i,symbol:t});return this.graphicsLayer.add(n),Object(_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeHandle"])((()=>{this.graphicsLayer.remove(n)}))}}const d=_draw_support_settings_js__WEBPACK_IMPORTED_MODULE_8__["colors"].main.toArray(),g=[..._draw_support_settings_js__WEBPACK_IMPORTED_MODULE_8__["colors"].main.toRgb(),100],u=new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_11__["default"]({outline:new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_12__["default"]({width:1.5,color:d}),size:15,color:[0,0,0,0]}),M=new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_11__["default"]({outline:{width:.5,color:[0,0,0,1]},size:10,color:d}),f=new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_13__["default"]({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["px2pt"])(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_9__["defaults"].lineHintWidthTarget),color:d}]}}}),I=new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_13__["default"]({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:d}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:d}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),P=e=>new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_13__["default"]({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["px2pt"])(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_9__["defaults"].rightAngleHintSize),rotation:e,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["px2pt"])(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_9__["defaults"].rightAngleHintOutlineSize),color:d},{type:"CIMSolidFill",enable:!0,color:g}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),x=P(45),v=P(225),C=(()=>{const e=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__["a"])(),r=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__["a"])(),i=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])();return o=>(Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__["f"])(e,o.centerVertex,o.previousVertex),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__["f"])(r,o.nextVertex,o.previousVertex),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__["j"])(i,e,r),i[2]<0?x:v)})();


/***/ }),

/***/ "IYxN":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js ***!
  \**********************************************************************************/
/*! exports provided: decreaseRefCount, deleteBlock, deleteRaster, getBlock, getRasterId, putBlock, register, unregister, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseRefCount", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBlock", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRaster", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlock", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRasterId", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putBlock", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return g; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "4GrV");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EphemeralBlockCache.js */ "vbno");
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rasterFunctions/rasterProjectionHelper.js */ "tODX");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=new Map,a=new _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_2__["default"];function i(e,t){return null==t?e:`${e}?sliceId=${t}`}function s(e,t){const n={extent:null,rasterInfo:t,cache:new Map};if(c.has(e)){const t=c.get(e);return t.push(n),t.length-1}return c.set(e,[n]),0}function u(e,t){if(c.has(e)){const n=c.get(e);n[t]=null,n.some((e=>null!=e))||c.delete(e)}}function f(e){c.delete(e)}function h(e,t,n){if(!c.has(e))return null==t?a.decreaseRefCount(e,n):0;const o=c.get(e);if(null==o[t])return a.decreaseRefCount(e,n);const r=o[t].cache;if(r.has(n)){const e=r.get(n);if(e.refCount--,0===e.refCount){r.delete(n);for(let e=0;e<o.length;e++)o[e]&&o[e].cache.has(n)&&o[e].cache.delete(n);e.controller&&e.controller.abort()}return e.refCount}return 0}function m(e,t,n){if(!c.has(e))return null==t?a.getBlock(e,n):null;const o=c.get(e);if(null==o[t]){for(let e=0;e<o.length;e++)if(o[e]&&o[e].cache.has(n)){const t=o[e].cache.get(n);return t.refCount++,t.block}return a.getBlock(e,n)}const r=o[t].cache;if(r.has(n)){const e=r.get(n);return e.refCount++,e.block}for(let l=0;l<o.length;l++)if(l!==t&&o[l]&&o[l]&&o[l].cache.has(n)){const e=o[l].cache.get(n);return e.refCount++,r.set(n,e),e.block}return null}function x(e,t,n,o,r=null){if(!c.has(e))return void(null==t&&a.putBlock(e,n,o,r));const l=c.get(e);if(null==l[t])return void a.putBlock(e,n,o,r);const i={refCount:1,block:o,isResolved:!1,isRejected:!1,controller:r};o.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),l[t].cache.set(n,i)}function d(e,t,n){if(!c.has(e))return void(null==t&&a.deleteBlock(e,n));const o=c.get(e);null!=o[t]?o[t].cache.delete(n):a.deleteBlock(e,n)}function y(e,t){if(!c.has(e))return null;const n=c.get(e);return null==n[t]?null:n[t]}function g(t,c,a,i,s,u,f=null){const h=y(t,c),m=h.extent,{cache:x,rasterInfo:d}=h;if(m&&m.xmin===a.xmin&&m.xmax===a.xmax&&m.ymin===a.ymin&&m.ymax===a.ymax)return;const g=a.clone().normalize(),{spatialReference:p,transform:k}=d,M=new Set;for(let y=0;y<g.length;y++){const t=g[y];if(t.xmax-t.xmin<=i||t.ymax-t.ymin<=i)continue;let c=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["projectExtent"])(t,p,f);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(k)&&(c=k.inverseTransform(c));const a=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__["default"]({x:i,y:i,spatialReference:t.spatialReference});if(null==s&&!(s=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["projectResolution"])(a,p,t,f)))return;const{pyramidLevel:h,pyramidResolution:m,excessiveReading:x}=Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__["snapPyramid"])(s,d,u||"closest");if(x)return;const{storageInfo:R}=d,{origin:C}=R,j={x:Math.max(0,Math.floor((c.xmin-C.x)/m.x)),y:Math.max(0,Math.floor((C.y-c.ymax)/m.y))},v=Math.ceil((c.xmax-c.xmin)/m.x-.1),B=Math.ceil((c.ymax-c.ymin)/m.y-.1),b=h>0?R.pyramidBlockWidth:R.blockWidth,w=h>0?R.pyramidBlockHeight:R.blockHeight,$=1,I=Math.max(0,Math.floor(j.x/b)-$),H=Math.max(0,Math.floor(j.y/w)-$),E=Math.floor((j.x+v-1)/b)+$,P=Math.floor((j.y+B-1)/w)+$;for(let e=H;e<=P;e++)for(let t=I;t<=E;t++)M.add(`${h}/${e}/${t}`)}x.forEach(((e,t)=>{if(!M.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t)}})),h.extent={xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax}}


/***/ }),

/***/ "IcpP":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js ***!
  \**********************************************************************************/
/*! exports provided: createFeatureEditErrorResult, createFeatureEditSuccessResult, loadGeometryEngine, loadGeometryEngineForSimplify, mixAttributes, simplify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureEditErrorResult", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureEditSuccessResult", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeometryEngine", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeometryEngineForSimplify", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixAttributes", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return h; });
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new l(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new a(e)}const f=new Set;function d(e,t,r,s=!1,o){f.clear();for(const l in r){const a=e.get(l);if(!a)continue;const c=r[l],d=m(a,c);if(d!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(s||a.editable)){const e=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validateFieldValue"])(a,d);if(e)return u(Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validationErrorToString"])(e,a,d));t[a.name]=d}}for(const n of e.requiredFields)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(e,n){let i=n;return"string"==typeof n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNumericField"])(e)?i=parseFloat(n):null!=n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isStringField"])(e)&&"string"!=typeof n&&(i=String(n)),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["sanitizeNullFieldValue"])(i)}let p;function h(t,n){if(!t||!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(n))return t;if("rings"in t||"paths"in t){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,t)}return t}async function g(){return p||(p=await Promise.all(/*! import() | geometry-geometryEngineJSON-js */[__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~344001e2"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null, /*! ../../../../geometry/geometryEngineJSON.js */ "AKzY")),p)}async function y(t,n){!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g()}


/***/ }),

/***/ "KRpH":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/label.js ***!
  \************************************************************************/
/*! exports provided: c, d, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return connectLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return disconnectLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getLabelText; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "14CA");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


/**
 * Exported for testing purposes only
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelTagName = "calcite-label";
const onLabelClickMap = new WeakMap();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["q"])(componentEl, `${labelTagName}[for="${id}"]`);
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["d"])(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => { var _a; return (_a = el.tagName) === null || _a === void 0 ? void 0 : _a.includes("-"); });
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if (!labelEl || onLabelClickMap.has(labelEl)) {
    return;
  }
  component.labelEl = labelEl;
  const boundOnLabelClick = onLabelClick.bind(component);
  onLabelClickMap.set(component.labelEl, boundOnLabelClick);
  component.labelEl.addEventListener(labelClickEvent, boundOnLabelClick);
}
/**
 * Helper to tear down label interactions on disconnectedCallback.
 */
function disconnectLabel(component) {
  if (!component.labelEl) {
    return;
  }
  const boundOnLabelClick = onLabelClickMap.get(component.labelEl);
  component.labelEl.removeEventListener(labelClickEvent, boundOnLabelClick);
  onLabelClickMap.delete(component.labelEl);
}
/**
 * Helper to get the label text from a component.
 */
function getLabelText(component) {
  var _a, _b;
  return component.label || ((_b = (_a = component.labelEl) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "";
}
function onLabelClick(event) {
  const containedLabelableChildClicked = this.el.contains(event.detail.sourceEvent.target);
  if (containedLabelableChildClicked) {
    return;
  }
  this.onLabelClick(event);
}




/***/ }),

/***/ "OYGz":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js ***!
  \*******************************************************************/
/*! exports provided: WMTSLayerInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WMTSLayerInfo", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let p=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(r){super(r)}clone(){return new i({customLayerParameters:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.customLayerParameters),customParameters:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layer.support.WMTSLayerInfo")],p);const a=p;


/***/ }),

/***/ "Vv97":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/rendererConversion.js ***!
  \***************************************************************************/
/*! exports provided: isSupportedRenderer3D, validateTo3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupportedRenderer3D", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTo3D", function() { return s; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _symbols_support_symbolConversion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../symbols/support/symbolConversion.js */ "z0kn");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(r){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r)||"simple"===r.type||"unique-value"===r.type||"class-breaks"===r.type||"dictionary"===r.type}function s(n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(n))return null;if(!o(n))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${n.type||n.declaredClass}'`,{renderer:n});switch(n.type){case"simple":return u(n);case"unique-value":return l(n);case"class-breaks":return i(n);case"dictionary":return null}return null}function t(e,n){if(!n)return null;let o;if(o=Array.isArray(n)?n:[n],o.length>0){const n=o.map((r=>r.details.symbol.type||r.details.symbol.declaredClass)).filter((r=>!!r));n.sort();const s=[];return n.forEach(((r,e)=>{0!==e&&r===n[e-1]||s.push(r)})),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${s.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:o})}return null}function u(r){return t(r,Object(_symbols_support_symbolConversion_js__WEBPACK_IMPORTED_MODULE_3__["to3D"])(r.symbol).error)}function l(r){const e=r.uniqueValueInfos.map((r=>Object(_symbols_support_symbolConversion_js__WEBPACK_IMPORTED_MODULE_3__["to3D"])(r.symbol).error)).filter((r=>!!r)),o=Object(_symbols_support_symbolConversion_js__WEBPACK_IMPORTED_MODULE_3__["to3D"])(r.defaultSymbol);return o.error&&e.unshift(o.error),t(r,e)}function i(r){const e=r.classBreakInfos.map((r=>Object(_symbols_support_symbolConversion_js__WEBPACK_IMPORTED_MODULE_3__["to3D"])(r.symbol).error)).filter((r=>!!r)),o=Object(_symbols_support_symbolConversion_js__WEBPACK_IMPORTED_MODULE_3__["to3D"])(r.defaultSymbol);return o.error&&e.unshift(o.error),t(r,e)}


/***/ }),

/***/ "Wf2p":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js ***!
  \*************************************************************************************************/
/*! exports provided: convertSnappingCandidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSnappingCandidate", function() { return o; });
/* harmony import */ var _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../candidates/EdgeSnappingCandidate.js */ "2sNF");
/* harmony import */ var _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidates/VertexSnappingCandidate.js */ "DVsc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,r){switch(o.type){case"edge":return new _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_0__["EdgeSnappingCandidate"]({coordinateHelper:r,edgeStart:r.pointToVector(o.start),edgeEnd:r.pointToVector(o.end),targetPoint:r.pointToVector(o.target),objectId:o.objectId});case"vertex":return new _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__["VertexSnappingCandidate"]({coordinateHelper:r,targetPoint:r.pointToVector(o.target),objectId:o.objectId})}}


/***/ }),

/***/ "XTTP":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js ***!
  \*************************************************************************/
/*! exports provided: I3SGeometryAttribute, I3SGeometryBuffer, I3SGeometryCompressedAttributes, I3SGeometryDefinition, I3SMaterialDefinition, I3SMaterialPBRMetallicRoughness, I3SMaterialTexture, I3SNodePageDefinition, I3STextureFormat, I3STextureSetDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SGeometryAttribute", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SGeometryBuffer", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SGeometryCompressedAttributes", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SGeometryDefinition", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SMaterialDefinition", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SMaterialPBRMetallicRoughness", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SMaterialTexture", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SNodePageDefinition", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3STextureFormat", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3STextureSetDefinition", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number})],s.prototype,"nodesPerPage",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number})],s.prototype,"rootIndex",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String})],s.prototype,"lodSelectionMetricType",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3SNodePageDefinition")],s);let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.factor=1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],i.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number})],i.prototype,"factor",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3SMaterialTexture")],i);let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number]})],a.prototype,"baseColorFactor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:i})],a.prototype,"baseColorTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:i})],a.prototype,"metallicRoughnessTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number})],a.prototype,"metallicFactor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number})],a.prototype,"roughnessFactor",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a);let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({opaque:"opaque",mask:"mask",blend:"blend"})],l.prototype,"alphaMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number})],l.prototype,"alphaCutoff",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean})],l.prototype,"doubleSided",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({none:"none",back:"back",front:"front"})],l.prototype,"cullFace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:i})],l.prototype,"normalTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:i})],l.prototype,"occlusionTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:i})],l.prototype,"emissiveTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[Number]})],l.prototype,"emissiveFactor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:a})],l.prototype,"pbrMetallicRoughness",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3SMaterialDefinition")],l);let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],n.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],n.prototype,"format",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3STextureFormat")],n);let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.atlas=!1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[n]})],u.prototype,"formats",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Boolean})],u.prototype,"atlas",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3STextureSetDefinition")],u);let y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number})],y.prototype,"component",void 0),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3SGeometryAttribute")],y);let d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({draco:"draco"})],d.prototype,"encoding",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:[String]})],d.prototype,"attributes",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3SGeometryCompressedAttributes")],d);let c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(){super(...arguments),this.offset=0}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:Number})],c.prototype,"offset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:y})],c.prototype,"position",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:y})],c.prototype,"normal",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:y})],c.prototype,"uv0",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:y})],c.prototype,"color",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:y})],c.prototype,"uvRegion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:y})],c.prototype,"featureId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:y})],c.prototype,"faceRange",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({type:d})],c.prototype,"compressedAttributes",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3SGeometryBuffer")],c);let m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({triangle:"triangle"})],m.prototype,"topology",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],m.prototype,"geometryBuffers",void 0),m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layer.support.I3SGeometryDefinition")],m);


/***/ }),

/***/ "bT3h":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/form.js ***!
  \***********************************************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hiddenInputStyle; });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const hiddenInputStyle = `
  bottom: 0 !important;
  left: 0 !important;
  margin: 0 !important;
  opacity: 0 !important;
  outline: none !important;
  padding: 0 !important;
  position: absolute !important;
  right: 0 !important;
  top: 0 !important;
  transform: none !important;
  -webkit-appearance: none !important;
  z-index: -1 !important;
`;




/***/ }),

/***/ "cM4j":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js ***!
  \***************************************************************************/
/*! exports provided: ExportImageParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImageParameters", function() { return c; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commonProperties.js */ "IvSi");
/* harmony import */ var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sublayerUtils.js */ "Ilhi");
/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/support/floorFilterUtils.js */ "81Mc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=Object(_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__["getLayerFloorFilterClause"])(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_10__["isExportDynamic"])(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),s=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return s.length?JSON.stringify(s.reduce(((e,r)=>{const s=Object(_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__["getLayerFloorFilterClause"])(this.floors,r),i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(s)?Object(_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__["combineFloorsDefinitionExpression"])(s,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r))};r&&r.forEach(s);const t=this._get("visibleSublayers");return!t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"dynamicLayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"floors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"hasDynamicLayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"layer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"layers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"layerDefs",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number})],c.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__["combinedViewLayerTimeExtentProperty"])],c.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"version",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],c.prototype,"visibleSublayers",null),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.mixins.ExportImageParameters")],c);


/***/ }),

/***/ "d3n7":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/draw/support/settings.js ***!
  \******************************************************************/
/*! exports provided: colors, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return h; });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Color.js */ "nvBr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o={main:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255,127,0]),selected:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255,255,255]),outline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0,0,0,.5]),selectedOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255,255,255]),hoverOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255,255,255]),secondary:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255,255,255]),secondaryOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([100,100,100]),transparent:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0,0,0,0])};function t(e,o){if(o)for(const t in o)e[t]=o[t]}class s{constructor(e){this.size=8,this.hoverSize=10,this.color=o.main,this.hoverColor=o.main,this.outlineColor=o.outline,this.hoverOutlineColor=o.hoverOutline,t(this,e)}}class n{constructor(e){this.color=o.secondary,this.hoverColor=o.main,t(this,e)}}class r{constructor(e){this.color=o.transparent,this.hoverColor=o.transparent,this.outlineColor=o.main,this.hoverOutlineColor=o.main,this.stagedColor=o.transparent,this.stagedOutlineColor=o.secondary,t(this,e)}}class i{constructor(e){this.vertex=new s,this.midpoint=new s({color:o.secondary,outlineColor:o.secondaryOutline,size:6}),this.selected=new s({color:o.selected,hoverColor:o.selected,hoverOutlineColor:o.hoverOutline}),t(this,e)}}class l{constructor(e){this.center=new s({color:o.secondaryOutline}),this.fill=new r,this.line=new n,this.vertex=new s({color:o.selected,outlineColor:o.main,hoverColor:o.selected,hoverOutlineColor:o.secondaryOutline}),t(this,e)}}class c{constructor(e){this.reshapeGraphics=new i,this.transformGraphics=new l,t(this,e)}}const h=new c;


/***/ }),

/***/ "eLqb":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerHandle.js ***!
  \****************************************************************/
/*! exports provided: WorkerHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerHandle", function() { return n; });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arrayUtils.js */ "tQ+6");
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handleUtils.js */ "xkkJ");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logger.js */ "6S2I");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maybe.js */ "srIe");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../promiseUtils.js */ "9MzC");
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workers.js */ "36Co");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.core.workers.WorkerHandle");class n{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=Object(_workers_js__WEBPACK_IMPORTED_MODULE_5__["open"])(e,{...s,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)))}on(r,i){const o={removed:!1,eventName:r,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),Object(_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeHandle"])((()=>{o.removed=!0,Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(this._listeners,o),this._thread&&Object(_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(o.threadHandle)&&o.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>(Object(_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAborted"])(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ }),

/***/ "fqtG":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/capabilities.js ***!
  \******************************************************************/
/*! exports provided: zeroCapabilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroCapabilities", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,tileMaxRecordCount:0}};


/***/ }),

/***/ "kGdt":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _programUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programUtils.js */ "1F90");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach((r=>r.programs.forEach((r=>r.dispose())))),this._programCacheByTemplate=null}getProgram(t,a){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(a=>Object(_programUtils_js__WEBPACK_IMPORTED_MODULE_0__["createProgram"])(this._rctx,t,a))),this.getProgramTemplateInstance(t,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e)}return a.programs.get(r)}return null}}


/***/ }),

/***/ "l5Tg":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/geometryEngineJSON.js ***!
  \****************************************************************/
/*! exports provided: A, B, C, D, E, F, G, H, I, J, K, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return v; });
/* harmony import */ var _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometryEngineBase.js */ "9gar");
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/geometryAdapters/json.js */ "1kEK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(n){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].extendedSpatialReferenceInfo(n)}function t(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].clip(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function i(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].cut(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function s(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].contains(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function u(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].crosses(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function o(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].distance(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function a(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].equals(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function c(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].intersects(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function f(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].touches(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function l(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].within(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function p(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].disjoint(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function g(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].overlaps(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function d(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].relate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function m(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].isSimple(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t)}function h(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].simplify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t)}function y(r,t,i=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].convexHull(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function x(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].difference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function w(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].symmetricDifference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function A(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].intersect(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function E(r,t,i=null){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].union(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function j(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].offset(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u,o,a)}function z(r,t,i,s,u=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].buffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function I(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].geodesicBuffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u,o,a)}function V(r,t,i,s=!0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].nearestCoordinate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function v(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].nearestVertex(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function D(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].nearestVertices(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function H(n,r,t,i){if(null==r||null==i)throw new Error("Illegal Argument Exception");const s=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].rotate(r,t,i);return s.spatialReference=n,s}function R(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].flipHorizontal(r,t);return i.spatialReference=n,i}function b(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].flipVertical(r,t);return i.spatialReference=n,i}function B(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].generalize(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function L(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].densify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function S(r,t,i,s,u=0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].geodesicDensify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function _(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].planarArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function q(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].planarLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function C(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].geodesicArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function G(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["G"].geodesicLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}const k=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:t,cut:i,contains:s,crosses:u,distance:o,equals:a,intersects:c,touches:f,within:l,disjoint:p,overlaps:g,relate:d,isSimple:m,simplify:h,convexHull:y,difference:x,symmetricDifference:w,intersect:A,union:E,offset:j,buffer:z,geodesicBuffer:I,nearestCoordinate:V,nearestVertex:v,nearestVertices:D,rotate:H,flipHorizontal:R,flipVertical:b,generalize:B,densify:L,geodesicDensify:S,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:G});


/***/ }),

/***/ "mYC1":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FetchAssociatedFeatureLayer.js ***!
  \*********************************************************************************/
/*! exports provided: FetchAssociatedFeatureLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchAssociatedFeatureLayer", function() { return l; });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../kernel.js */ "975N");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FeatureLayer.js */ "W9Wu");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "p+Gi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(t,r,e,a){this.parsedUrl=t,this.portalItem=r,this.apiKey=e,this.signal=a,this.rootDocument=null;const i=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);i&&(this.urlParts={root:i[1],layerId:parseInt(i[2],10)})}async fetch(){var t;if(!this.urlParts)return null;const r=null!=(t=this.portalItem)?t:await this.portalItemFromServiceItemId();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r))return this.loadFromUrl();const a=await this.findAndLoadRelatedPortalItem(r);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(a)?null:this.loadFeatureLayerFromPortalItem(a)}async fetchPortalItem(){var t;if(!this.urlParts)return null;const r=null!=(t=this.portalItem)?t:await this.portalItemFromServiceItemId();return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r)?null:this.findAndLoadRelatedPortalItem(r)}async fetchRootDocument(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.rootDocument))return this.rootDocument;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.urlParts))return this.rootDocument={},{};const t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},i=`${this.urlParts.root}/SceneServer`;try{const e=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i,t);this.rootDocument=e.data}catch{this.rootDocument={}}return this.rootDocument}async fetchServiceOwningPortalUrl(){var e;const a=null==(e=_kernel_js__WEBPACK_IMPORTED_MODULE_0__["id"])?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=a&&a.owningSystemUrl)return a.owningSystemUrl;const s=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(n){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAbortError"])(n)}return null}async findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(r){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAbortError"])(r),null}}async loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this.findMatchingAssociatedSublayerUrl(t.url);return new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_4__["default"]({url:r,portalItem:t}).load({signal:this.signal})}async loadFromUrl(){const t=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_4__["default"]({url:t}).load({signal:this.signal})}async findMatchingAssociatedSublayerUrl(t){const e=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},i=this.urlParts.layerId,s=this.fetchRootDocument(),n=Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e,a),[o,l]=await Promise.all([n,s]),c=l&&l.layers,h=o.data&&o.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(c))for(let r=0;r<Math.min(c.length,h.length);r++){if(c[r].id===i)return`${e}/${h[r].id}`}else if(i<h.length)return`${e}/${h[i].id}`;throw new Error("could not find matching associated sublayer")}async portalItemFromServiceItemId(){const t=(await this.fetchRootDocument()).serviceItemId;if(!t)return null;const r=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]({id:t,apiKey:this.apiKey}),e=await this.fetchServiceOwningPortalUrl();Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&(r.portal=new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__["default"]({url:e}));try{return r.load({signal:this.signal})}catch(s){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAbortError"])(s),null}}}


/***/ }),

/***/ "ncPp":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/WebTileLayer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return x; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/string.js */ "s7YA");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/LOD.js */ "UOZ4");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/TileInfo.js */ "3/ME");
/* harmony import */ var _support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/WMTSLayerInfo.js */ "OYGz");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let R=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__["RefreshableLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"]))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__["default"](-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WebMercator,this.subDomains=null,this.tileInfo=new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"]({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__["default"]({x:-20037508.342787,y:20037508.342787,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WebMercator}),spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WebMercator,lods:[new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:0,scale:591657527.591555,resolution:156543.033928}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:1,scale:295828763.795777,resolution:78271.5169639999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:2,scale:147914381.897889,resolution:39135.7584820001}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:3,scale:73957190.948944,resolution:19567.8792409999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:4,scale:36978595.474472,resolution:9783.93962049996}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:5,scale:18489297.737236,resolution:4891.96981024998}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:6,scale:9244648.868618,resolution:2445.98490512499}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:7,scale:4622324.434309,resolution:1222.99245256249}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:8,scale:2311162.217155,resolution:611.49622628138}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:9,scale:1155581.108577,resolution:305.748113140558}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:10,scale:577790.554289,resolution:152.874056570411}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:11,scale:288895.277144,resolution:76.4370282850732}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:12,scale:144447.638572,resolution:38.2185141425366}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:13,scale:72223.819286,resolution:19.1092570712683}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:14,scale:36111.909643,resolution:9.55462853563415}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:15,scale:18055.954822,resolution:4.77731426794937}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:16,scale:9027.977411,resolution:2.38865713397468}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:17,scale:4513.988705,resolution:1.19432856685505}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:18,scale:2256.994353,resolution:.597164283559817}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:19,scale:1128.497176,resolution:.298582141647617}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:20,scale:564.248588,resolution:.14929107082380833}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:21,scale:282.124294,resolution:.07464553541190416}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:22,scale:141.062147,resolution:.03732276770595208}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__["default"]({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["Url"](this.urlTemplate);!!this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["Url"](t),o=l.scheme?l.scheme+"://":"//",i=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(i);else if(r&&r.length>0&&l.authority.split(".").length>1)for(const s of r)e.push(o+l.authority.replace(/\{subDomain\}/gi,s)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["Url"](e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["isProtocolRelative"])(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["normalize"])(e)),t.templateUrl=e}fetchTile(e,r,l,o={}){const{signal:s}=o,i=this.getTileUrl(e,r,l),n={responseType:"image",signal:s,query:{...this.refreshParameters}};return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(i,n).then((e=>e.data))}getTileUrl(e,t,r){const l=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(_core_string_js__WEBPACK_IMPORTED_MODULE_5__["replace"])(this.urlPath,{level:l,z:l,col:r,x:r,row:t,y:t})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__["default"],json:{write:!0},nonNullable:!0})],R.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],R.prototype,"levelValues",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"]})],R.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"],json:{write:!0}})],R.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],R.prototype,"tileServers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{read:!1}})],R.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],R.prototype,"urlPath",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__["writer"])("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_22__["default"],json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__["subclass"])("esri.layers.WebTileLayer")],R);const x=R;


/***/ }),

/***/ "p0UO":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/objectIdUtils.js ***!
  \********************************************************************/
/*! exports provided: findLastObjectIdFromFeatures, initialObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastObjectIdFromFeatures", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialObjectId", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=1;function n(t,n){let o=0;for(const r of n){var e;const n=null==(e=r.attributes)?void 0:e[t];"number"==typeof n&&isFinite(n)&&(o=Math.max(o,n))}return o}


/***/ }),

/***/ "q03O":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ "kvL/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}


/***/ }),

/***/ "uAeW":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportWMSImageParameters.js ***!
  \******************************************************************************/
/*! exports provided: ExportWMSImageParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportWMSImageParameters", function() { return l; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={visible:"visibleSublayers"};let l=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,s=null==e?void 0:e.sublayers,t=[],o=e=>{const{minScale:s,maxScale:a,sublayers:l,visible:i}=e;i&&(0===r||(0===s||r<=s)&&(0===a||r>=a))&&(l?l.forEach(o):t.unshift(e))};return null==s||s.forEach(o),t}toJSON(){const{layer:e,layers:r}=this,{imageFormat:s,imageTransparency:t,version:o}=e;return{format:s,request:"GetMap",service:"WMS",styles:"",transparent:t,version:o,layers:r}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],l.prototype,"layer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],l.prototype,"layers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({type:Number})],l.prototype,"scale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],l.prototype,"version",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],l.prototype,"visibleSublayers",null),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.ExportWMSImageParameters")],l);


/***/ }),

/***/ "ukaK":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__["HandleOwner"]{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],s.prototype,"supportsTileUpdates",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({constructOnly:!0})],s.prototype,"remoteClient",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({constructOnly:!0})],s.prototype,"service",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],s.prototype,"spatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({constructOnly:!0})],s.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({constructOnly:!0})],s.prototype,"tileStore",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;


/***/ }),

/***/ "vbno":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=t,this._interval=Math.min(t,e)}decreaseRefCount(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.refCount--,t.refCount<=0&&(r.delete(s),t.controller&&t.controller.abort()),t.refCount}return 0}getBlock(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.ts=Date.now(),t.refCount++,r.delete(s),r.set(s,t),t.block}return null}putBlock(t,e,s,r=null){const i=this._cachedBlocks,c=t+"/"+e;if(i.has(c)){const t=i.get(c);t.ts=Date.now(),t.refCount++}else i.set(c,{block:s,ts:Date.now(),refCount:1,controller:r});this.trim(),this.updateTimer()}deleteBlock(t,e){const s=this._cachedBlocks,r=t+"/"+e;s.has(r)&&s.delete(r)}updateMaxSize(t){this._size=t,this.trim()}empty(){this._cachedBlocks.clear(),this.clearTimer()}getCurrentSize(){return this._cachedBlocks.size}updateTimer(){if(null!=this._timer)return;const t=this._cachedBlocks;this._timer=setInterval((()=>{const e=Array.from(t),s=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=s-this._duration;r++)t.delete(e[r][0]);0===t.size&&this.clearTimer()}),this._interval)}trim(){const t=this._cachedBlocks;if(-1===this._size||this._size>=t.size)return;const e=Array.from(t);for(let s=0;s<e.length-this._size;s++)t.delete(e[s][0])}clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}}


/***/ }),

/***/ "xvdR":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js ***!
  \**********************************************************************************/
/*! exports provided: persistable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistable", function() { return g; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../maybe.js */ "srIe");
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../multiOriginJSONSupportUtils.js */ "Jpjp");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../urlUtils.js */ "4EHJ");
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../uuid.js */ "ju1D");
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata.js */ "evjZ");
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PropertyOrigin.js */ "ku/q");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property.js */ "WbKI");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/persistableUrlUtils.js */ "/PL2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(r){const e=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.origins?r.origins:[void 0];return(t,o)=>{const i=w(r,t,o);for(const r of e){const e=Object(_property_js__WEBPACK_IMPORTED_MODULE_6__["propertyJSONMeta"])(t,r,o);for(const t in i)e[t]=i[t]}}}function w(r,e,o){if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&"resource"===r.type)return v(r,e,o);switch(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.type?r.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:r}=_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["p"];return{read:t,write:r}}}}function v(e,s,u){const p=Object(_metadata_js__WEBPACK_IMPORTED_MODULE_4__["getOwnPropertyMetadata"])(s,u);return{type:String,read:(t,r,e)=>{const o=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["r"])(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,a,l,f){if(!f||!f.resources)return"string"==typeof s?void(a[l]=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["t"])(s,f)):void(a[l]=s.write({},f));const m=P(s),d=m?Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["t"])(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,g=p.type!==String&&(!Object(_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultiOriginJSONMixin"])(this)||f&&f.origin&&this.originIdOf(u)>Object(_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_5__["nameToId"])(f.origin));f&&f.portalItem&&Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d)&&!Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbsolute"])(d)?g?j(this,u,s,d,a,l,f,e):I(d,a,l,f):f&&f.portalItem&&(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(d)||Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_8__["i"])(d))||Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["isBlobProtocol"])(d)||g)?U(this,u,s,d,a,l,f,e):a[l]=d}}}}function U(t,r,o,i,u,a,c,l){const m=Object(_uuid_js__WEBPACK_IMPORTED_MODULE_3__["generateUUID"])(),y=S(o,i,c),h=Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(l,"prefix"),m),d=`${h}.${Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(y)}`,g=c.portalItem.resourceFromPath(d);Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["isBlobProtocol"])(i)&&c.resources.pendingOperations.push(b(i).then((t=>{g.path=`${h}.${Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(t)}`,u[a]=g.itemRelativeUrl})).catch((()=>{}))),O(t,r,g,y,c.resources.toAdd),u[a]=g.itemRelativeUrl}function j(t,r,e,o,i,n,s,p){const a=s.portalItem.resourceFromPath(o),c=S(e,o,s);Object(_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_7__["getResourceContentExtension"])(c)===Object(_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["getPathExtension"])(a.path)?(O(t,r,a,c,s.resources.toUpdate),i[n]=o):U(t,r,e,o,i,n,s,p)}function I(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t}function O(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{R(t,r,e)}})}function S(t,r,e){return"string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function b(t){const r=(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../request.js */ "Lqtk"))).default,{data:e}=await r(t,{responseType:"blob"});return e}function P(t){return Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)?null:"string"==typeof t?t:t.url}function R(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url}


/***/ })

}]);
//# sourceMappingURL=common.js.map