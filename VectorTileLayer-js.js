(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VectorTileLayer-js"],{

/***/ "7qO2":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapIndex.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return l; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(e){this.url=e}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.url).then((e=>e.data.index))),this._tileIndexPromise}async dataKey(e,r){const l=await this.fetchTileIndex();return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(r),this._getIndexedDataKey(l,e)}_getIndexedDataKey(e,t){const l=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let i=t;for(;0!==i.level;)i=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](i.level-1,i.row>>1,i.col>>1,i.world),l.push(i);let o,s,n=e,a=l.pop();if(1===n)return a;for(;l.length;)if(o=l.pop(),s=(1&o.col)+((1&o.row)<<1),n){if(0===n[s]){a=null;break}if(1===n[s]){a=o;break}a=o,n=n[s]}return a}}


/***/ }),

/***/ "F5/N":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/imageUtils.js ***!
  \****************************************************************/
/*! exports provided: checkWebPSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWebPSupport", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let A=null;function o(o){if(A)return A;const l={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return A=new Promise((A=>{const n=new Image;n.onload=()=>{n.onload=n.onerror=null,A(n.width>0&&n.height>0)},n.onerror=()=>{n.onload=n.onerror=null,A(!1)},n.src="data:image/webp;base64,"+l[o]})),A}


/***/ }),

/***/ "FYFM":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapRequest.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._tileIndexUrl,{query:{...null==t?void 0:t.query}}).then((e=>e.data.index))),this._tileIndexPromise}dataKey(e,r){const{level:l,row:s,col:o}=e,n=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](e);return this._tilemap.fetchAvailabilityUpsample(l,s,o,n,r).then((()=>(n.world=e.world,n))).catch((e=>{if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(e))throw e;return null}))}}


/***/ }),

/***/ "Fewv":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*****************************************************************/
/*! exports provided: createForItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForItem", function() { return o; });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ "AiS/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){return{origin:"portal-item",url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),portalItem:o,readResourcePaths:[]}}


/***/ }),

/***/ "FzwJ":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VectorTileLayer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return B; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ "9G54");
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ "tIWS");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ "iyhF");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/imageUtils.js */ "F5/N");
/* harmony import */ var _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/SpriteSource.js */ "i7Gb");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/TileInfo.js */ "3/ME");
/* harmony import */ var _support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/vectorTileLayerLoader.js */ "tR3v");
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../portal/support/jsonContext.js */ "Fewv");
/* harmony import */ var _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/SchemaHelper.js */ "HLQf");
/* harmony import */ var _views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/tileInfoUtils.js */ "HZhB");
/* harmony import */ var _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/style/StyleRepository.js */ "kB7V");
/* harmony import */ var _views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../views/webgl/capabilities.js */ "sq/B");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let k=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_18__["BlendLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__["ScaleRangeLayer"])(Object(_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_16__["ArcGISCachedService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_17__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__["PortalLayer"])(Object(_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_19__["CustomParametersMixin"])(Object(_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_15__["APIKeyMixin"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"])))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.symbolCollisionBoxesVisible=!1,this.path=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAbortError"]).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Object(_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_27__["createForItem"])(this.portalItem))})).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAbortError"]).then((()=>this._loadStyle(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["urlToObject"])(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["addQueryParameters"])(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return(null==(e=this.primarySource)?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["urlToObject"])(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["isProtocolRelative"])(e)&&(e=`https:${e}`),t.styleUrl=e}get tileInfo(){var e;const t=[];for(const o in this.sourceNameToSource)t.push(this.sourceNameToSource[o]);let r=(null==(e=this.primarySource)?void 0:e.tileInfo)||new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"];if(t.length>1)for(let o=0;o<t.length;o++)Object(_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_29__["areSchemasOverlapping"])(r,t[o].tileInfo)&&(r=Object(_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_29__["unionTileInfos"])(r,t[o].tileInfo));return r}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_28__["default"].create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_28__["default"].create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){var r;const o=Object(_views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_31__["default"])(),i=null!=(r=this.currentStyleInfo)&&r.spriteUrl?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["addQueryParameters"])(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,s=new _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_24__["default"](i,e,o.maxTextureSize,this.currentStyleInfo.spriteFormat);await s.load(t),this._spriteSourceMap.set(e,s)}return Promise.resolve(this._spriteSourceMap.get(e))}async loadStyle(e,t){var r;const o=e||this.style||this.url;return this._loadingTask&&"string"==typeof o&&this.url===o||(null==(r=this._loadingTask)||r.abort(),this._loadingTask=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createTask"])((e=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(o,{signal:e}))),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const o=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||o})}getStyleLayer(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Object(_support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_26__["loadMetadata"])(e,{...t,query:{...this.customParameters,token:this.apiKey}});if("webp"===r.spriteFormat){await Object(_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_23__["checkWebPSupport"])("lossy")||(r.spriteFormat="png")}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_30__["default"](r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const o=t[2]&&t[2].toLowerCase();if(!o)return;const i=t[1]||"";for(const s of r)if(s.toLowerCase().includes(o))return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__["normalize"])(`//static.arcgis.com/attribution/Vector${i}/${s}`)}async _loadStyle(e){var t,r;return null!=(t=null==(r=this._loadingTask)?void 0:r.promise)?t:this.loadStyle(null,e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"attributionDataUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:["show","hide"]})],k.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0,json:{read:!1}})],k.prototype,"capabilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"currentStyleInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{read:!1},readOnly:!0,type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"]})],k.prototype,"fullExtent",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],k.prototype,"style",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],k.prototype,"isReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:["VectorTileLayer"]})],k.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"parsedUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"serviceUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"],readOnly:!0})],k.prototype,"spatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"styleRepository",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"sourceNameToSource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"primarySource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],k.prototype,"styleUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])(["portal-item","web-document"],"styleUrl")],k.prototype,"writeStyleUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"]})],k.prototype,"tileInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{read:!1},readOnly:!0,value:"vector-tile"})],k.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],k.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__["reader"])("version",["version","currentVersion"])],k.prototype,"readVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"compatibleTileInfo256",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({readOnly:!0})],k.prototype,"compatibleTileInfo512",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:Boolean})],k.prototype,"symbolCollisionBoxesVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),k=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.layers.VectorTileLayer")],k);const B=k;


/***/ }),

/***/ "HLQf":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SchemaHelper.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/LOD.js */ "UOZ4");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "3/ME");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let s=0,t=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(s=i),e[1]%2&&(t=i)),[s,t]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(s){if(!s)return null;if(256===s.size[0]&&256===s.size[1])return s;const t=256,l=s.spatialReference.isGeographic,r=[],o=s.lods.length;for(let i=0;i<o;i++){const t=s.lods[i],o=l?t.resolution:2*t.resolution;r.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__["default"]({level:t.level,scale:t.scale,resolution:o}))}return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]({size:[t,t],dpi:s.dpi,format:s.format,compressionQuality:s.compressionQuality,origin:s.origin,spatialReference:s.spatialReference,lods:r})}static create512x512CompatibleTileInfo(s){if(!s)return null;if(256===s.size[0]||256===s.size[1])return null;const t=512,l=[],r=s.lods.length;for(let i=0;i<r;i++){const t=s.lods[i],r=.5*t.resolution;l.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__["default"]({level:t.level,scale:t.scale,resolution:r}))}return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]({size:[t,t],dpi:s.dpi,format:s.format,compressionQuality:s.compressionQuality,origin:s.origin,spatialReference:s.spatialReference,lods:l})}}


/***/ }),

/***/ "HZhB":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js ***!
  \********************************************************************************/
/*! exports provided: areSchemasOverlapping, unionTileInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areSchemasOverlapping", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionTileInfos", function() { return o; });
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "3/ME");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=1e-6;function s(e,s){if(e===s)return!0;if(!e&&null!=s)return!1;if(null!=e&&!s)return!1;if(!e.spatialReference.equals(s.spatialReference)||e.dpi!==s.dpi)return!1;const o=e.origin,r=s.origin;if(Math.abs(o.x-r.x)>=l||Math.abs(o.y-r.y)>=l)return!1;let n,t;e.lods[0].scale>s.lods[0].scale?(n=e,t=s):(t=e,n=s);for(let i=n.lods[0].scale;i>=t.lods[t.lods.length-1].scale-l;i/=2)if(Math.abs(i-t.lods[0].scale)<l)return!0;return!1}function o(l,s){if(l===s)return l;if(!l&&null!=s)return s;if(null!=l&&!s)return l;const o=l.size[0],r=l.format,n=l.dpi,t={x:l.origin.x,y:l.origin.y},i=l.spatialReference.toJSON(),a=l.lods[0].scale>s.lods[0].scale?l.lods[0]:s.lods[0],d=l.lods[l.lods.length-1].scale<=s.lods[s.lods.length-1].scale?l.lods[l.lods.length-1]:s.lods[s.lods.length-1],f=a.scale,u=a.resolution,c=d.scale,p=[];let g=f,h=u,x=0;for(;g>c;)p.push({level:x,resolution:h,scale:g}),x++,g/=2,h/=2;return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"]({size:[o,o],dpi:n,format:r||"pbf",origin:t,lods:p,spatialReference:i})}


/***/ }),

/***/ "JNis":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return u; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../layers/support/serviceTileInfoProperty.js */ "q2iW");
/* harmony import */ var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layers/support/TilemapCache.js */ "llFo");
/* harmony import */ var _TilemapIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TilemapIndex.js */ "7qO2");
/* harmony import */ var _TilemapRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TilemapRequest.js */ "FYFM");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class u{constructor(u,h,c){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=u,this.sourceUrl=h;const m=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(this.sourceUrl),f=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(c),d=f.tiles;if(m)for(let t=0;t<d.length;t++){const s=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(d[t]);s&&(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbsolute"])(s.path)||(s.path=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(m.path,s.path)),d[t]=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["addQueryParameters"])(s.path,{...m.query,...s.query}))}this.tileServers=d;const g=c.capabilities&&c.capabilities.split(",").map((t=>t.toLowerCase().trim())),x=!0===(null==c?void 0:c.exportTilesAllowed),y=!0===(null==g?void 0:g.includes("tilemap")),v=x&&c.hasOwnProperty("maxExportTilesCount")?c.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:x,supportsTileMap:y},exportTiles:x?{maxExportTilesCount:+v}:null},this.tileInfo=Object(_layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_3__["readServiceTileInfo"])(f.tileInfo,f,null,{ignoreMinMaxLOD:!0});const T=c.tileMap?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["addQueryParameters"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(m.path,c.tileMap),m.query):null;y?(this.type="vector-tile",this.tilemap=new _TilemapRequest_js__WEBPACK_IMPORTED_MODULE_6__["default"](new _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_4__["TilemapCache"]({layer:{parsedUrl:m,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),T)):T&&(this.tilemap=new _TilemapIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"](T)),this.fullExtent=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(c.fullExtent)}async getRefKey(t,e){var i,l;return null!=(i=null==(l=this.tilemap)?void 0:l.dataKey(t,e))?i:t}getSourceTileUrl(t,e,i){return this.tileServers[e%this.tileServers.length].replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,e.toString()).replace(/\{x\}/gi,i.toString())}isCompatibleWith(t){const e=this.tileInfo,i=t.tileInfo;if(!e.spatialReference.equals(i.spatialReference))return!1;if(!e.origin.equals(i.origin))return!1;if(Math.round(e.dpi)!==Math.round(i.dpi))return!1;const l=e.lods,r=i.lods,s=Math.min(l.length,r.length);for(let o=0;o<s;o++){const t=l[o],e=r[o];if(t.level!==e.level||Math.round(t.scale)!==Math.round(e.scale))return!1}return!0}}


/***/ }),

/***/ "OxmL":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js ***!
  \********************************************************************************/
/*! exports provided: C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, interpolate, log2, positiveMod, radToByte, sqr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_256_TO_RAD", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_2PI", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_256", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_INFINITY", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI_BY_2", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_RAD_TO_256", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2_INV", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degToByte", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log2", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveMod", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radToByte", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqr", function() { return T; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=256/360,f=t/180,i=1.414213562,I=1/i,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(n*c,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}


/***/ }),

/***/ "i7Gb":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/SpriteSource.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.support.SpriteSource"),h=1.15;class o{constructor(t,e,i,s){this.baseURL=t,this.devicePixelRatio=e,this.maxTextureSize=i,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(i){this._isRetina=this.devicePixelRatio>h;const o=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(this.baseURL),l=o.query?"?"+Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["objectToQuery"])(o.query):"",n=this._isRetina?"@2x":"",d=`${o.path}${n}.${this._spriteImageFormat}${l}`,g=`${o.path}${n}.json${l}`;return Promise.all([Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(g,i),Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d,{responseType:"image",...i})]).then((([t,i])=>{const s=Object.keys(t.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,Promise.resolve(null);this._spritesData=t.data;const a=i.data,h=Math.max(this.maxTextureSize,4096);if(a.width>h||a.height>h){const t=`Sprite resource for style ${o.path} is bigger than the maximum allowed of ${h} pixels}`;throw r.error(t),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("SpriteSource",t)}this.width=a.width,this.height=a.height;const l=document.createElement("canvas"),n=l.getContext("2d");l.width=a.width,l.height=a.height,n.drawImage(a,0,0,a.width,a.height);const d=n.getImageData(0,0,a.width,a.height),g=new Uint8Array(d.data);let m;for(let e=0;e<g.length;e+=4)m=g[e+3]/255,g[e]=g[e]*m,g[e+1]=g[e+1]*m,g[e+2]=g[e+2]*m;this.image=g}))}}


/***/ }),

/***/ "jIHu":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, BITSET_GENERIC_LOCK_COLOR, BITSET_LINE_SCALE_DASH, BITSET_MARKER_ALIGNMENT_MAP, BITSET_MARKER_ALIGNMENT_SCREEN, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY, BITSET_TYPE_FILL_OUTLINE, BUFFER_DATA_MINIMUM_SIZE, BUFFER_DATA_POOL_SIZE, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DISPLAY_RECORD_INT_PER_ELEMENT, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, ENABLE_EARLY_LABEL_DISCARD, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, MIN_MAX_ZOOM_PRECISION_FACTOR, NAN_MAGIC_NUMBER, PATCH_PIXEL_BUFFER_ALLOC_SIZE, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_HALF_WIDTH_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_GENERIC_LOCK_COLOR", function() { return ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_LINE_SCALE_DASH", function() { return dt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_MARKER_ALIGNMENT_MAP", function() { return it; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_MARKER_ALIGNMENT_SCREEN", function() { return ht; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE", function() { return ot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY", function() { return at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_TYPE_FILL_OUTLINE", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_DATA_MINIMUM_SIZE", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_DATA_POOL_SIZE", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_RECORD_INT_PER_ELEMENT", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_EARLY_LABEL_DISCARD", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_MAX_ZOOM_PRECISION_FACTOR", function() { return et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATCH_PIXEL_BUFFER_ALLOC_SIZE", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THIN_LINE_HALF_WIDTH_THRESHOLD", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=256/360,n=!1,p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=!1,S=1.05,T=6,U=5,V=6,W=1.15,X=2,Y=2,Z=8,$=500,_=4,tt=128,et=10,ct=2,ht=0,it=1,ot=4,at=8,dt=4,nt=1;


/***/ }),

/***/ "tR3v":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js ***!
  \***************************************************************************/
/*! exports provided: loadMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMetadata", function() { return y; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/2d/engine/vectorTiles/style/VectorTileSource.js */ "JNis");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults&&_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.io.corsEnabledServers;async function y(e,r){const s={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[t,o]="string"==typeof e?[e,null]:[null,e.jsonUrl];await h(s,"esri",e,o,r);const l={layerDefinition:s.validatedSource,url:t,serviceUrl:s.sourceUrl,style:s.style,styleUrl:s.styleUrl,spriteUrl:s.style.sprite&&S(s.styleBase,s.style.sprite),spriteFormat:s.spriteFormat,glyphsUrl:s.style.glyphs&&S(s.styleBase,s.style.glyphs),sourceNameToSource:s.sourceNameToSource,primarySourceName:s.primarySourceName};return d(l.spriteUrl),d(l.glyphsUrl),l}function d(e){if(!e)return;const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["getOrigin"])(e);m&&!m.includes(r)&&m.push(r)}function S(...e){let r;for(let s=0;s<e.length;++s)if(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["isProtocolRelative"])(e[s])){if(r){const t=r.split("://")[0];r=t+":"+e[s].trim()}}else r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["isAbsolute"])(e[s])?e[s]:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["join"])(r,e[s]);return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeTrailingSlash"])(r)}async function h(e,t,o,l,i){let n,c,a;if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(i),"string"==typeof o){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["normalize"])(o);d(e),a=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e,{...i,responseType:"json",query:{f:"json",...null==i?void 0:i.query}}),a.ssl&&(n&&(n=n.replace(/^http:/i,"https:")),c&&(c=c.replace(/^http:/i,"https:"))),n=e,c=e}else a={data:o},n=o.jsonUrl||null,c=l;const f=a.data;return U(f)?(e.styleUrl=n||null,v(e,f,c,i)):x(f)?e.sourceUrl?w(e,f,c,!1,t,i):(e.sourceUrl=n||null,w(e,f,c,!0,t,i)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")}function U(e){return!!e.sources}function x(e){return!U(e)}async function v(e,r,s,t){const o=s?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeFile"])(s):_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["appBaseUrl"];e.styleBase=o,e.style=r,e.styleUrl&&d(e.styleUrl),r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(r.sources&&r.sources.esri){const s=r.sources.esri;s.url?await h(e,"esri",S(o,s.url),void 0,t):l.push(h(e,"esri",s,o,t))}for(const i of Object.keys(r.sources))"esri"!==i&&"vector"===r.sources[i].type&&(r.sources[i].url?l.push(h(e,i,S(o,r.sources[i].url),void 0,t)):r.sources[i].tiles&&l.push(h(e,i,r.sources[i],o,t)));await Promise.all(l)}async function w(e,r,s,o,l,i){const n=s?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["removeTrailingSlash"])(s)+"/":_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["appBaseUrl"],u=g(r,n),c=new _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_4__["default"](l,Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["addQueryParameters"])(n,null==i?void 0:i.query),u);if(!o&&e.primarySourceName in e.sourceNameToSource){const r=e.sourceNameToSource[e.primarySourceName];if(!r.isCompatibleWith(c))return Promise.resolve();null!=c.fullExtent&&(null!=r.fullExtent?r.fullExtent.union(c.fullExtent):r.fullExtent=c.fullExtent.clone()),r.tileInfo.lods.length<c.tileInfo.lods.length&&(r.tileInfo=c.tileInfo)}if(o?(e.sourceBase=n,e.source=r,e.validatedSource=u,e.primarySourceName=l,e.sourceUrl&&d(e.sourceUrl)):d(n),e.sourceNameToSource[l]=c,!e.style)return null==r.defaultStyles?Promise.reject():"string"==typeof r.defaultStyles?h(e,"",S(n,r.defaultStyles,"root.json"),void 0,i):h(e,"",r.defaultStyles,S(n,"root.json"),i)}function g(e,r){if(e.hasOwnProperty("tileInfo"))return e;const s={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},t=512;let o=78271.51696400007,l=295828763.7957775;const i=[],n=e.hasOwnProperty("minzoom")?+e.minzoom:0,u=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let c=0;c<=u;c++)c>=n&&i.push({level:c,scale:l,resolution:o}),o/=2,l/=2;for(const c of e.tiles)d(S(r,c));return{capabilities:"TilesOnly",initialExtent:s,fullExtent:s,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:t,cols:t,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:i,spatialReference:{wkid:102100}}}}


/***/ })

}]);
//# sourceMappingURL=VectorTileLayer-js.js.map