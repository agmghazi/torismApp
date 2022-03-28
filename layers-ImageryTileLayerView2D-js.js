(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-ImageryTileLayerView2D-js"],{

/***/ "3LLL":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/VectorFieldTileView2D.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/vectorFieldUtils.js */ "Gdt4");
/* harmony import */ var _engine_RasterVFTileContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../engine/RasterVFTileContainer.js */ "wadd");
/* harmony import */ var _BaseImageryTileSubView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BaseImageryTileSubView2D.js */ "Cl2c");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends _BaseImageryTileSubView2D_js__WEBPACK_IMPORTED_MODULE_9__["BaseImageryTileSubView2D"]{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.type="rasterVF"}canUseWebGLForProcessing(){return!1}async fetchTile(e,t){const i=await this.layer.fetchTile(e.level,e.row,e.col,t);return"vector-magdir"===this.layer.rasterInfo.dataType&&null!=i&&i.pixelBlock&&(i.pixelBlock=await this.layer.convertVectorFieldData(i.pixelBlock,t)),i}updateTileSource(e,i){const r=i.symbolizerParams,{tileData:s}=e;s.key=e.key,s.width=this._tileInfoView.tileInfo.size[0],s.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:o}=r,{source:l}=i;if(s.offset=this._getTileSymbolOffset(s.key,o),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};s.rawPixelData=e,s.source=this._sampleVectorFieldData(l.pixelBlock,r,s.offset),s.symbolizerParameters=r}else{const e=[Math.round((this._tileInfoView.tileInfo[0]-s.offset[0])/o),Math.round((this._tileInfoView.tileInfo[1]-s.offset[1])/o)],t=this.createEmptyTilePixelBlock(e);s.source=t,s.symbolizerParameters=r}return s.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,i){var r;const s=i.local,{symbolTileSize:o}=s,{tileData:l}=e;l.offset=this._getTileSymbolOffset(l.key,o);const a=l.symbolizerParameters.symbolTileSize;return l.symbolizerParameters=s,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(null==(r=l.rawPixelData)?void 0:r.pixelBlock)&&a!==o&&(l.source=this._sampleVectorFieldData(l.rawPixelData.pixelBlock,l.symbolizerParameters,l.offset)),Promise.resolve(null)}install(e){this.container=new _engine_RasterVFTileContainer_js__WEBPACK_IMPORTED_MODULE_8__["RasterVFTileContainer"](this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=this.layer.watch("renderer",(e=>this._updateSymbolType(e))),e.addChild(this.container)}uninstall(){this.container.removeAllChildren(),this._handle.remove(),this._handle=null,this.container.remove(),super.uninstall()}_getTileSymbolOffset(e,t){const i=e.col*this._tileInfoView.tileInfo.size[0]%t,r=e.row*this._tileInfoView.tileInfo.size[1]%t;return[i>t/2?t-i:-i,r>t/2?t-r:-r]}_sampleVectorFieldData(e,t,i){const{symbolTileSize:r}=t;return Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_7__["sampleVectorField"])(e,"vector-uv",r,i)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"])}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],a.prototype,"type",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.imagery.VectorFieldTileView2D")],a);const n=a;


/***/ }),

/***/ "5LEI":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
  \*******************************************************************************/
/*! exports provided: TiledDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function() { return r; });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DisplayObject.js */ "fEsP");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__["DisplayObject"]{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,n]=i.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(h,a,0,0,0,l,0,o,n,1),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["m"])(this.transforms.dvs,i.displayViewMat3,h)}}


/***/ }),

/***/ "AljX":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/RasterVFTile.js ***!
  \*******************************************************************/
/*! exports provided: RasterVFTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterVFTile", function() { return r; });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _RasterVFDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RasterVFDisplayObject.js */ "FF+/");
/* harmony import */ var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/TiledDisplayObject.js */ "5LEI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_3__["TiledDisplayObject"]{constructor(t,s,e,i,r,o=null){super(t,s,e,i,r),this.tileData=new _RasterVFDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__["RasterVFDisplayObject"](o),this.tileData.coordScale=[i,r],this.tileData.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null}set stencilRef(t){this.tileData.stencilRef=t}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),tileMat3:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}}setTransform(e,a){super.setTransform(e,a);const i=a/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[o,l]=this.tileData.offset,h=[this.x+o*a,this.y-l*a],[n,f]=e.toScreenNoRotation([0,0],h),{symbolTileSize:m}=this.tileData.symbolizerParameters,c=Math.round((this.width-this.tileData.offset[0])/m)*m,D=Math.round((this.height-this.tileData.offset[1])/m)*m,d=c/this.rangeX*i,u=D/this.rangeY*i;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(r,d,0,0,0,u,0,n,f,1),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["m"])(this.transforms.dvs,e.displayViewMat3,r),this.tileData.transforms.dvs=this.transforms.dvs}onAttach(){this.tileData.stage=this.stage}onDetach(){this.tileData.stage=null}}


/***/ }),

/***/ "Cl2c":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/BaseImageryTileSubView2D.js ***!
  \***************************************************************************************/
/*! exports provided: BaseImageryTileSubView2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseImageryTileSubView2D", function() { return T; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _layers_support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../layers/support/PixelBlock.js */ "Piei");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "3/ME");
/* harmony import */ var _layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layers/support/rasterDatasets/RawBlockCache.js */ "IYxN");
/* harmony import */ var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/pixelUtils.js */ "ne7T");
/* harmony import */ var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/rasterProjectionHelper.js */ "tODX");
/* harmony import */ var _tiling_PagedTileQueue_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../tiling/PagedTileQueue.js */ "Pns9");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../tiling/TileInfoView.js */ "AY31");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../tiling/TileQueue.js */ "B81a");
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../tiling/TileStrategy.js */ "0wLv");
/* harmony import */ var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../webgl/capabilities.js */ "sq/B");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v=[0,0],R=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let T=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__["HandleOwner"]{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this.previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._isCustomTilingScheme=!1,this._globalUpdateRequested=!1,this.container=null,this.layer=null,this.redrawOrRefetch=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["debounce"])(((e,t)=>!this.previousLOD||this.layerView.suspended?Promise.resolve():e?this.doRefresh():this._redrawImage(t)))}get useWebGLForProcessing(){var e;return null==(e=this._get("useWebGLForProcessing"))||e}set useWebGLForProcessing(e){this._set("useWebGLForProcessing",e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this.container.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_21__["default"]({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.layerView.requestUpdate()}}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var l;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__["default"].fromJSON(t);Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_14__["update"])(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,(null==(l=this.previousLOD)?void 0:l.level)!==r.level&&(this.previousLOD=r,null==this._symbolizerParams||this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0))}}moveEnd(){!this.layerView.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=new AbortController,0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.layerView.requestUpdate()})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.layerView.requestUpdate()}get updating(){return this._fetchQueue.length>0||this._globalUpdateRequested||!(!this.updatingHandles||!this.updatingHandles.updating)}attach(){Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_22__["default"])().supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_18__["default"](this.layerView.tileInfo,this.layerView.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_20__["default"]({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this._fetchTile1(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_21__["default"]({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._updateBlockCacheRegistry()}acquireTile(e){const t=this.container.createTile(e);return this._enqueueTileFetch(t),this.layerView.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this.container.removeChild(e),e.once("detach",(()=>{e.destroy(),this.layerView.requestUpdate()})),this.layerView.requestUpdate()}uninstall(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,this.notifyChange("updating"),Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_14__["unregister"])(this._blockCacheRegistryUrl,this._blockCacheRegistryId)}createEmptyTilePixelBlock(e=null){const t=null==e||e.join(",")===this._tileInfoView.tileInfo.size.join(",");if(t&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this._tileInfoView.tileInfo.size;const[i,r]=e,l=new _layers_support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_12__["default"]({width:i,height:r,pixels:[new Uint8Array(i*r)],mask:new Uint8Array(i*r),pixelType:"u8"});return t&&(this._emptyTilePixelBlock=l),l}_fetchTile1(e,t){const i=!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t)&&t.signal,s=this.canUseWebGLForProcessing(),a={allowPartialFill:!0,datumTransformation:this.layerView.datumTransformation,interpolation:s?"nearest":this.layer.interpolation,registryId:this._blockCacheRegistryId,requestRawData:s,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(i),srcResolution:this._srcResolutions[e.level],timeExtent:this.layerView.timeExtent,tileInfo:this.layerView.tileInfo};return this.fetchTile(e,a)}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.layerView.view.spatialReference,t=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:this.layerView.fullExtent.xmin,y:this.layerView.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s,isCustomTilingScheme:r}=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_16__["computeProjectedScales"])(this.layer.rasterInfo,e),l=_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"].create({spatialReference:e,size:512,scales:i});(0===l.origin.x||l.origin.x>t.x)&&(l.origin=t),this._isCustomTilingScheme=r,this.layerView.set("tileInfo",l),this._srcResolutions=null!=s?s:[]}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return(t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);this.notifyChange("updating");const{bandIds:s}=this.layer;let r=!this.useProgressiveUpdate||this.layerView.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.layerView.moving&&0===this._fetchQueue.length){r=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(i){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["isAbortError"])(i)&&R.error(i)}this._globalUpdateRequested=!1}!this.canUseWebGLForProcessing()&&"rasterVF"!==this.type||this.layerView.hasTilingEffects||null!=this._symbolizerParams||this._updateSymbolizerParams();const l=this._tileInfoView.getTileCoords(v,e.key),a=this._tileInfoView.getTileResolution(e.key);await this.updateTileSource(e,{source:t,symbolizerParams:this._symbolizerParams,globalSymbolizerParams:this._globalSymbolizerParams,suspended:r,bandIds:s,coords:l,resolution:a}),e.once("attach",(()=>this.layerView.requestUpdate())),this.container.addChild(e)}catch(i){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["isAbortError"])(i)||R.error(i)}this.layerView.requestUpdate()}}async _redrawImage(e){if(0===this.container.children.length)return;await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const t=this.container.children.map((async e=>this.updateTileSymbolizerParameters(e,{local:this._symbolizerParams,global:this._globalSymbolizerParams})));await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["eachAlways"])(t),this.container.requestRender()}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this.previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},i=await this.layer.fetchPixels(this.layerView.view.extent,this.layerView.view.width,this.layerView.view.height,t);if(!i||!i.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_15__["extractBands"])(i.pixelBlock,this.layer.bandIds),isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});!this.canUseWebGLForProcessing()&&s&&"stretch"===s.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(s.factor=s.factor.map((e=>255*e)),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:i,raster:s}=this.layer,{multidimensionalDefinition:r}=this.layer.normalizeRasterFetchOptions({multidimensionalDefinition:this.layer.multidimensionalDefinition,timeExtent:this.layerView.timeExtent}),l=null!=i&&i.multidimensionalInfo?s.getSliceIndex(r):null,a=Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_14__["getRasterId"])(t,l);if(a!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_14__["unregister"])(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_14__["register"])(a,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale),t=this._srcResolutions[e.level];Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_14__["update"])(a,this._blockCacheRegistryId,this.layerView.view.extent,this.layerView.view.resolution,t,this.layer.raster.ioConfig.sampling)}this._blockCacheRegistryUrl=a}}async doRefresh(){await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset(),this.notifyChange("updating");const e=[];this._tileStrategy.tiles.forEach((t=>e.push(this._enqueueTileFetch(t)))),await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["eachAlways"])(e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],T.prototype,"_globalUpdateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],T.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],T.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],T.prototype,"layerView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],T.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],T.prototype,"useWebGLForProcessing",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],T.prototype,"useProgressiveUpdate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],T.prototype,"updating",null),T=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],T);


/***/ }),

/***/ "FF+/":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/RasterVFDisplayObject.js ***!
  \****************************************************************************/
/*! exports provided: RasterVFDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterVFDisplayObject", function() { return c; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layers/support/rasterFunctions/vectorFieldUtils.js */ "Gdt4");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webgl/enums.js */ "0X3F");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DisplayObject.js */ "fEsP");
/* harmony import */ var _webgl_Utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./webgl/Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_11__["DisplayObject"]{constructor(e=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.rawPixelData=null,this.width=null,this.source=e}destroy(){var t,a;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.vaoData)&&(null==(t=this.vaoData.magdir)||t.vao.dispose(),null==(a=this.vaoData.scalar)||a.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO())}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO()}invalidateVAO(){var t,a;!this._vaoInvalidated&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.vaoData)&&(null==(t=this.vaoData.magdir)||t.vao.dispose(),null==(a=this.vaoData.scalar)||a.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.source)&&!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const e=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["createVFMesh"])(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,e);this.vaoData={magdir:s}}break;case"simple_scalar":{const e=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["createVFMeshScalar"])(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={scalar:a}}break;case"wind_speed":{const e=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["createVFMesh"])(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(t.context,e),i=Object(_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["createVFMeshScalar"])(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,i);this.vaoData={magdir:r,scalar:o}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])()}}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(e,t){const{vertexData:a,indexData:s}=t,o=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createVertex(e,35044,new Float32Array(a)),c=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIndex(e,35044,new Uint32Array(s)),n=Object(_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_12__["createProgramDescriptor"])("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:5126,normalized:!1},{location:1,name:"a_offset",count:2,type:5126,normalized:!1},{location:2,name:"a_vv",count:2,type:5126,normalized:!1}]});return{vao:new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__["default"](e,n.attributes,n.bufferLayouts,{geometry:o},c),elementCount:s.length}}}


/***/ }),

/***/ "Jl6v":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/RasterTile.js ***!
  \*****************************************************************/
/*! exports provided: RasterTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterTile", function() { return i; });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _RasterBitmap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RasterBitmap.js */ "N8mD");
/* harmony import */ var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/TiledDisplayObject.js */ "5LEI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__["TiledDisplayObject"]{constructor(t,e,i,r,a,n=null){super(t,e,i,r,a),this.bitmap=new _RasterBitmap_js__WEBPACK_IMPORTED_MODULE_1__["RasterBitmap"](n,null,null),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(t){this.bitmap.stencilRef=t}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,s){super.setTransform(t,s),this.bitmap.transforms.dvs=this.transforms.dvs}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),tileMat3:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}


/***/ }),

/***/ "M+QG":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryTileView2D.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _engine_RasterTileContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/RasterTileContainer.js */ "Witc");
/* harmony import */ var _BaseImageryTileSubView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseImageryTileSubView2D.js */ "Cl2c");
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/util.js */ "RaXU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends _BaseImageryTileSubView2D_js__WEBPACK_IMPORTED_MODULE_8__["BaseImageryTileSubView2D"]{constructor(){super(...arguments),this.container=null,this.layer=null,this.type="raster"}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&Object(_support_util_js__WEBPACK_IMPORTED_MODULE_9__["canUseMajorityInterpolationOnDataSource"])(this.layer))}fetchTile(e,r){return this.layer.fetchTile(e.level,e.row,e.col,r)}async updateTileSource(e,t){const{bandIds:s}=this.layer,i=this._getLayerInterpolation(),o=this.canUseWebGLForProcessing(),{source:l,symbolizerParams:n,globalSymbolizerParams:a,suspended:c,coords:p,resolution:u}=t,{bitmap:d}=e;if([d.x,d.y]=p,d.resolution=u,l&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};if(d.rawPixelData=e,o)d.source=l.pixelBlock,d.isRendereredSource=!1;else{const r=await this.layer.applyRenderer(e,"stretch"===(null==a?void 0:a.type)?a:null);d.source=r,d.isRendereredSource=!0}d.symbolizerParameters=o?n:null,o?d.transformGrid||(d.transformGrid=l.transformGrid):d.transformGrid=null}else{const e=this.createEmptyTilePixelBlock();d.source=e,d.symbolizerParameters=o?n:null,d.transformGrid=null}d.bandIds=o?s:null,d.width=this._tileInfoView.tileInfo.size[0],d.height=this._tileInfoView.tileInfo.size[1],d.interpolation=i,d.suspended=c,d.invalidateTexture()}async updateTileSymbolizerParameters(e,t){const{local:s,global:i}=t,{bandIds:o}=this.layer,l=this._getLayerInterpolation(),n=this.canUseWebGLForProcessing(),{bitmap:a}=e,{rawPixelData:c}=a;!n&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(c)?(a.source=await this.layer.applyRenderer(c,"stretch"===(null==i?void 0:i.type)?i:null),a.isRendereredSource=!0):(a.isRendereredSource&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(c)&&(a.source=c.pixelBlock),a.isRendereredSource=!1),a.symbolizerParameters=n?i||s:null,a.bandIds=n?o:null,a.interpolation=l,a.suspended=!1}install(e){this.container=new _engine_RasterTileContainer_js__WEBPACK_IMPORTED_MODULE_7__["RasterTileContainer"](this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,e.addChild(this.container)}uninstall(){this.container.removeAllChildren(),this.container.remove(),super.uninstall()}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return"nearest";const{interpolation:r}=this.layer,{renderer:t}=this.layer;return"raster-stretch"===t.type&&null!=t.colorRamp?"bilinear"===r||"cubic"===r?"bilinear":"nearest":r}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],n.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],n.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],n.prototype,"type",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.imagery.ImageryTileView2D")],n);const a=n;


/***/ }),

/***/ "RaXU":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/util.js ***!
  \*******************************************************************/
/*! exports provided: analyzeRings, canUseMajorityInterpolationOnDataSource, toJSONGeometryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyzeRings", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseMajorityInterpolationOnDataSource", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSONGeometryType", function() { return e; });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/jsonMap.js */ "+opI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__["JSONMap"]({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function n(t,o,e){const n=[],r=[];let l=0,i=0;for(const s of t){const t=i;let u=s[0][0],c=s[0][1];n[i++]=u,n[i++]=c;let p=0;for(let o=1;o<s.length;++o){const t=u,e=c;u=s[o][0],c=s[o][1],p+=c*t-u*e,n[i++]=u,n[i++]=c}o(p/2),p>0?(t-l>0&&(e(l,t,n,r),l=t),r.length=0):p<0&&t-l>0?r.push(.5*(t-l)):i=t}i-l>0&&e(l,i,n,r)}function r(t){const{bandCount:o,attributeTable:e,colormap:n,pixelType:r}=t.rasterInfo;return 1===o&&(null!=e||null!=n||"u8"===r||"s8"===r)}


/***/ }),

/***/ "Witc":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/RasterTileContainer.js ***!
  \**************************************************************************/
/*! exports provided: RasterTileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterTileContainer", function() { return n; });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewpointUtils.js */ "qYtE");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushes.js */ "Oxob");
/* harmony import */ var _RasterTile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RasterTile.js */ "Jl6v");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl/TileContainer.js */ "ZyIX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(){super(...arguments),this.isCustomTilingScheme=!1}createTile(e){const s=this._getTileBounds(e),[r,t]=this._tileInfoView.tileInfo.size;return new _RasterTile_js__WEBPACK_IMPORTED_MODULE_3__["RasterTile"](e,s[0],s[3],r,t)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (tile)",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].MAP&&super.doRender(e)}_getTileBounds(r){const i=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__["create"])(),r);if(this.isCustomTilingScheme&&r.world){const{tileInfo:e}=this._tileInfoView,t=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_1__["getWorldWidth"])(e.spatialReference);if(t){const{resolution:s}=e.lodAt(r.level),o=t/s%e.size[0],n=o?(e.size[0]-o)*s:0;i[0]-=n*r.world,i[2]-=n*r.world}}return i}}


/***/ }),

/***/ "ZyIX":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
  \**************************************************************************/
/*! exports provided: default, sortByLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByLevel", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLContainer.js */ "mgI5");
/* harmony import */ var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brushes/WGLBrushInfo.js */ "b3VY");
/* harmony import */ var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brushes/WGLBrushStencil.js */ "7F7D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(i),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s){const i=super.prepareRenderPasses(s);return i.push(s.registerRenderPass({name:"stencil",brushes:[_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].DEBUG|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug")&&i.push(s.registerRenderPass({name:"tileInfo",brushes:[_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].DEBUG,target:()=>this.children})),i}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++}}


/***/ }),

/***/ "bHqs":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js ***!
  \************************************************************************/
/*! exports provided: RefreshableLayerView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshableLayerView", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__["on"])(this,"layer","refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"layer",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.mixins.RefreshableLayerView")],c),c};


/***/ }),

/***/ "cthj":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/ImageryTileLayerView.js ***!
  \************************************************************************/
/*! exports provided: ImageryTileLayerView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageryTileLayerView", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return m; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ "IvSi");
/* harmony import */ var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/rasterFunctions/rasterProjectionHelper.js */ "tODX");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/popupUtils.js */ "rXMu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=m=>{let f=class extends m{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const{popupEnabled:a}=s,n=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__["getFetchPopupTemplate"])(s,o);if(!a||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(n))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const l=[],{value:u,magdirValue:m}=await s.identify(e,{timeExtent:this.timeExtent});let f="";if(u&&u.length){var c,h;f="imagery-tile"===s.type&&s.hasStandardTime()&&null!=u[0]?u.map((e=>s.getStandardTimeValue(e))).join(", "):u.join(", ");const e={ObjectId:0},r="Raster.ServicePixelValue";e[r]=this._formatAttributeValue(f,r);const i=null==(c=s.rasterInfo)||null==(h=c.attributeTable)?void 0:h.features;if(i&&i.length>0){const t=i.filter((e=>{const t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===f}));if(t.length>0){const r=t[0];if(r)for(const t in r.attributes)if(r.attributes.hasOwnProperty(t)){const i=this._rasterFieldPrefix+t;e[i]=this._formatAttributeValue(r.attributes[t],i)}}}const o=s.rasterInfo.dataType;"vector-magdir"!==o&&"vector-uv"!==o||(e["Raster.Magnitude"]=null==m?void 0:m[0],e["Raster.Direction"]=null==m?void 0:m[1]);const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.fullExtent.clone(),null,e);a.layer=s,a.sourceLayer=a.layer,l.push(a)}return l}updateFullExtent(){const e=this.layer.tileInfo;if(!(e&&e.spatialReference))return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this.layer.fullExtent))return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("layerview:extent-missing","The layer doesn't provide a full extent.",{layer:this.layer}));const t=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__["getDefaultDatumTransformationForDataset"])(this.layer.fullExtent,this.view.spatialReference,!1),i=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__["projectExtent"])(this.layer.fullExtent,this.view.spatialReference,t);return null==i?Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})):(this._set("fullExtent",i),this.datumTransformation||(this.datumTransformation=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__["getDefaultDatumTransformationForDataset"])(this.layer.fullExtent,this.view.spatialReference,!0)),Promise.resolve())}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=e,!0))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],f.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__["combinedViewLayerTimeExtentProperty"])],f.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],f.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],f.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],f.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],f.prototype,"hasTilingEffects",null),f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.layers.ImageryTileLayerView")],f),f};


/***/ }),

/***/ "rrwe":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/ImageryTileLayerView2D.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _engine_flow_AnimatedFlowView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../engine/flow/AnimatedFlowView2D.js */ "0jy/");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _imagery_ImageryTileView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./imagery/ImageryTileView2D.js */ "M+QG");
/* harmony import */ var _imagery_VectorFieldTileView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./imagery/VectorFieldTileView2D.js */ "3LLL");
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/util.js */ "RaXU");
/* harmony import */ var _layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/ImageryTileLayerView.js */ "cthj");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let b=class extends(Object(_layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_15__["ImageryTileLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_17__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_16__["default"])))){constructor(){super(...arguments),this._useWebGLForProcessing=!0,this._useProgressiveUpdate=!0,this.subview=null}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e)}get useWebGLForProcessing(){return this._useWebGLForProcessing}set useWebGLForProcessing(e){this._useWebGLForProcessing=e,this.subview&&"useWebGLForProcessing"in this.subview&&(this.subview.useWebGLForProcessing=e)}get useProgressiveUpdate(){return this._useWebGLForProcessing}set useProgressiveUpdate(e){this._useProgressiveUpdate=e,this.subview&&"useProgressiveUpdate"in this.subview&&(this.subview.useProgressiveUpdate=e)}update(e){this.subview.update(e),this.notifyChange("updating")}isUpdating(){return!this.subview||this.subview.updating}attach(){this.layer.increaseRasterJobHandlerUsage(),this._updateSubview(),this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["watch"])(this.layer,["bandIds","renderer","interpolation","multidimensionalDefinition"],((e,s,r)=>{const t="multidimensionalDefinition"===r,o="interpolation"===r&&("majority"===e||"majority"===s)&&Object(_support_util_js__WEBPACK_IMPORTED_MODULE_14__["canUseMajorityInterpolationOnDataSource"])(this.layer),a="renderer"===r&&s.type!==e.type;a&&this._updateSubview();const n=t||o||a;this.subview.redrawOrRefetch(n).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["isAbortError"])(e)||v.error(e)})),this.notifyChange("updating")})),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["init"])(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e)}),!0),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["init"])(this,["layer.effect"],(e=>{this.subview&&(this.subview.container.effect=e)}),!0),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__["init"])(this,"timeExtent",(()=>{this.subview.redrawOrRefetch(!0).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["isAbortError"])(e)||v.error(e)}))}))],"attach")}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this.subview.uninstall()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.subview.moveEnd()}async hitTest(e,r){return[new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({attributes:{},geometry:e.clone()})]}doRefresh(){return this.subview.doRefresh()}_updateSubview(){const e="vector-field"===this.layer.renderer.type?"rasterVF":"animated-flow"===this.layer.renderer.type?"rasterAnimatedFlow":"raster";if(this.subview){if(this.subview.type===e)return;this.subview.uninstall()}const{layer:s}=this;let r;r="rasterVF"===e?new _imagery_VectorFieldTileView2D_js__WEBPACK_IMPORTED_MODULE_13__["default"]({layer:s,layerView:this}):"rasterAnimatedFlow"===e?new _engine_flow_AnimatedFlowView2D_js__WEBPACK_IMPORTED_MODULE_10__["default"]({layer:s,layerView:this}):new _imagery_ImageryTileView2D_js__WEBPACK_IMPORTED_MODULE_12__["default"]({layer:s,layerView:this}),"useWebGLForProcessing"in r&&(r.useWebGLForProcessing=this._useWebGLForProcessing),"useProgressiveUpdate"in r&&(r.useProgressiveUpdate=this._useProgressiveUpdate),"previousLOD"in r&&(r.previousLOD=this.subview&&"previousLOD"in this.subview&&this.subview.previousLOD),r.attach(),r.install(this.container),r.container.blendMode=s.blendMode,r.container.effect=s.effect,this.subview=r,this.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],b.prototype,"subview",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],b.prototype,"useWebGLForProcessing",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],b.prototype,"useProgressiveUpdate",null),b=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.views.2d.layers.ImageryTileLayerView2D")],b);const y=b;


/***/ }),

/***/ "wadd":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/RasterVFTileContainer.js ***!
  \****************************************************************************/
/*! exports provided: RasterVFTileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterVFTileContainer", function() { return o; });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _RasterVFTile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RasterVFTile.js */ "AljX");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/TileContainer.js */ "ZyIX");
/* harmony import */ var _webgl_brushes_raster_BrushVectorField_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/brushes/raster/BrushVectorField.js */ "we8k");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"]}createTile(r){const t=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__["create"])(),r),[i,o]=this._tileInfoView.tileInfo.size;return new _RasterVFTile_js__WEBPACK_IMPORTED_MODULE_1__["RasterVFTile"](r,t[0],t[3],i,o)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (vf tile)",brushes:[_webgl_brushes_raster_BrushVectorField_js__WEBPACK_IMPORTED_MODULE_4__["default"]],target:()=>this.children.map((e=>e.tileData)),drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].MAP&&this.symbolTypes.forEach((s=>{e.renderPass=s,super.doRender(e)}))}}


/***/ })

}]);
//# sourceMappingURL=layers-ImageryTileLayerView2D-js.js.map