(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView2D-js"],{

/***/ "0jy/":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/AnimatedFlowView2D.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _dataUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dataUtils.js */ "Jha9");
/* harmony import */ var _FlowContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FlowContainer.js */ "AorF");
/* harmony import */ var _FlowStrategy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FlowStrategy.js */ "eD1f");
/* harmony import */ var _FlowStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FlowStyle.js */ "qSvj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this._loadImagery=(e,t,r,s)=>Object(_dataUtils_js__WEBPACK_IMPORTED_MODULE_7__["loadImagery"])(this.layer,e,t,r,s),this._createStreamlinesMesh=(e,t,r)=>this.layer.createStreamlinesMesh({flowData:t,rendererSettings:e},{signal:r}),this.container=null,this.layer=null,this.type="rasterAnimatedFlow",this.redrawOrRefetch=async()=>{this._rendererChanged()}}get updating(){return!this._strategy||this._strategy.updating}update(e){e.stationary?this._strategy.update(e):this.layerView.requestUpdate()}install(e){this.container=new _FlowContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"],e.addChild(this.container),this._strategy=new _FlowStrategy_js__WEBPACK_IMPORTED_MODULE_9__["default"]({flowContainer:this.container}),this._rendererChanged()}uninstall(){this._strategy.destroy(),this.container.removeAllChildren(),this.container.remove()}moveEnd(){}async doRefresh(){}attach(){}_rendererChanged(){if("animated-flow"!==this.layer.renderer.type)return;const e=new _FlowStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"](this._loadImagery,this._createStreamlinesMesh,this.layer.renderer);this.container.flowStyle=e,this.layerView.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"_strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"layerView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"updating",null),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.engine.flow.AnimatedFlowView2D")],l);const p=l;


/***/ }),

/***/ "3BYb":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayObject.js ***!
  \*****************************************************************************/
/*! exports provided: FlowDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDisplayObject", function() { return m; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DisplayObject.js */ "fEsP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(s){const{displayData:n}=this;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n))return;const l=n.extent.xmin,m=n.extent.ymax,p=[0,0];s.toScreen(p,[l,m]);const c=(n.extent.xmax-n.extent.xmin)/n.size[0]/s.resolution,d=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(s.rotation),{dvs:x}=this.transforms;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(x),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(x,x,[-1,1,0]),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(x,x,[2/(s.size[0]*s.pixelRatio),-2/(s.size[1]*s.pixelRatio),1]),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(x,x,[p[0],p[1],0]),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["r"])(x,x,d),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(x,x,[c*s.pixelRatio,c*s.pixelRatio,1])}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}}


/***/ }),

/***/ "AorF":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowContainer.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _BrushFlow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrushFlow.js */ "ye41");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WGLContainer.js */ "mgI5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(s){const t=s.registerRenderPass({name:"flow",brushes:[_BrushFlow_js__WEBPACK_IMPORTED_MODULE_0__["default"]],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ "STpg":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/animatedFlowRendererUtils.js ***!
  \*************************************************************************************/
/*! exports provided: createAnimatedFlowRendererSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimatedFlowRendererSettings", function() { return n; });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){const i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(n.lineWidth),o=2*i,t=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(n.lineLength)/o)+1,l=i,r=10,d=n.lineColor.toRgba(),s=[d[0]/255,d[1]/255,d[2]/255,d[3]],{lineSpeed:h,fadeDuration:a,density:g}=n;return{lineRenderWidth:i,segmentLength:o,verticesPerLine:t,lineCollisionWidth:l,lineSpacing:r,lineColor:s,lineSpeed:h,fadeDuration:a,density:g,smoothing:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__["pt2px"])(n.smoothing),velocityScale:1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}


/***/ }),

/***/ "eD1f":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowStrategy.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return u; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _FlowDisplayData_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FlowDisplayData.js */ "gO5q");
/* harmony import */ var _FlowDisplayObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FlowDisplayObject.js */ "3BYb");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "OvF4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=1.15,h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.engine.flow.FlowStrategy");let f=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(t){super(t),this._flowDisplayObject=new _FlowDisplayObject_js__WEBPACK_IMPORTED_MODULE_14__["FlowDisplayObject"],this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(t){const{flowStyle:o}=this.flowContainer;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(o))return void this._clear();const{extent:e,rotation:i,resolution:l,pixelRatio:n}=t.state,p=g(e,i);p.expand(y);const m=[Math.round((p.xmax-p.xmin)/l),Math.round((p.ymax-p.ymin)/l)],d=new _FlowDisplayData_js__WEBPACK_IMPORTED_MODULE_13__["default"](o,p,m,n);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(this._loading)){if(this._loading.update(d))return;this._loading.destroy(),this._loading=null}!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(d)||(d.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(t=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(t)||(h.error("A resource failed to load.",t),this._loading=null)})),this._loading=d)}_clear(){this._flowDisplayObject.clear(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(this._loading)&&(this._loading.destroy(),this._loading=null)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],f.prototype,"_loading",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],f.prototype,"flowContainer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])()],f.prototype,"updating",null),f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__["subclass"])("esri.views.2d.engine.flow.FlowStrategy")],f);const u=f;function g(t,o){const e=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"]({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),r=t.xmax-t.xmin,s=t.ymax-t.ymin,a=Math.abs(Math.cos(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__["deg2rad"])(o))),l=Math.abs(Math.sin(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__["deg2rad"])(o))),n=a*r+l*s,c=l*r+a*s,m=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]({xmin:e.x-n/2,ymin:e.y-c/2,xmax:e.x+n/2,ymax:e.y+c/2,spatialReference:t.spatialReference});return m.centerAt(e),m}


/***/ }),

/***/ "gO5q":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayData.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.flow.FlowDisplayData");class s{constructor(e,t,s,a){this.state={name:"created"},this.flowStyle=e,this.extent=t,this.size=s,this.pixelRatio=a}async load(){const e=new AbortController;this.state={name:"loading",abortController:e};const t=await this.flowStyle.loadResources({extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},e.signal);this.state={name:"loaded",resources:t}}prepareForRendering(e,s,a){if("loaded"!==this.state.name)return void t.error("Only loaded resources can be attached.");const i=this.state.resources;i.prepareForRendering(e,s,a),this.state={name:"attached",resources:i}}destroy(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(e){if(!this.flowStyle.areResourcesCompatible(e.flowStyle))return!1;return!(!this.extent.equals(e.extent)||this.size[0]!==e.size[0]||this.size[1]!==e.size[1]||this.pixelRatio!==e.pixelRatio)&&(this.flowStyle=e.flowStyle,!0)}}


/***/ }),

/***/ "qSvj":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowStyle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _animatedFlowRendererUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animatedFlowRendererUtils.js */ "STpg");
/* harmony import */ var _FlowGLResources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlowGLResources.js */ "vnhx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(e,t,n){this._loadImagery=e,this._createStreamlinesMesh=t,this._rendererSettings=Object(_animatedFlowRendererUtils_js__WEBPACK_IMPORTED_MODULE_1__["createAnimatedFlowRendererSettings"])(n)}get animated(){return this._rendererSettings.lineSpeed>0}get renderSettings(){return this._rendererSettings}areResourcesCompatible(e){let r=!0;return r=r&&e._loadImagery===this._loadImagery,r=r&&e._createStreamlinesMesh===this._createStreamlinesMesh,r=r&&e._rendererSettings.verticesPerLine===this._rendererSettings.verticesPerLine,r=r&&e._rendererSettings.segmentLength===this._rendererSettings.segmentLength,r=r&&e._rendererSettings.lineSpacing===this._rendererSettings.lineSpacing,r=r&&e._rendererSettings.density===this._rendererSettings.density,r=r&&e._rendererSettings.smoothing===this._rendererSettings.smoothing,r=r&&e._rendererSettings.velocityScale===this._rendererSettings.velocityScale,r=r&&e._rendererSettings.minWeightThreshold===this._rendererSettings.minWeightThreshold,r=r&&e._rendererSettings.minSpeedThreshold===this._rendererSettings.minSpeedThreshold,r=r&&e._rendererSettings.mergeLines===this._rendererSettings.mergeLines,r=r&&e._rendererSettings.interpolate===this._rendererSettings.interpolate,r&&this._rendererSettings.mergeLines&&(r=e._rendererSettings.lineCollisionWidth===this._rendererSettings.lineCollisionWidth),!!r}async loadResources(r,n){const{extent:i,size:s}=r;Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["throwIfAborted"])(n);const d=await this._loadImagery(i,s[0],s[1],n),{vertexData:g,indexData:h}=await this._createStreamlinesMesh(this._rendererSettings,d,n);return new _FlowGLResources_js__WEBPACK_IMPORTED_MODULE_2__["default"](g,h)}}


/***/ }),

/***/ "rXMu":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
  \**********************************************************************/
/*! exports provided: getFetchPopupTemplate, getRequiredFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetchPopupTemplate", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequiredFields", function() { return t; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,d=t.popupTemplate){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d))return[];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return["*"];const f=n?await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(t):[],r=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p)})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)&&l.defaultPopupTemplateEnabled&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}


/***/ }),

/***/ "tODX":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js ***!
  \********************************************************************************************/
/*! exports provided: computeProjectedScales, defaultGridSpacing, defaultProjectionToleranceInPixels, getDefaultDatumTransformationForDataset, getProjectionOffsetGrid, getRasterDatasetAlignmentInfo, getWorldWidth, getWorldWrapCount, load, minimumGridSpacing, projectExtent, projectPoint, projectResolution, requirePE, snapExtent, snapPyramid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeProjectedScales", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridSpacing", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProjectionToleranceInPixels", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultDatumTransformationForDataset", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectionOffsetGrid", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRasterDatasetAlignmentInfo", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorldWidth", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorldWrapCount", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimumGridSpacing", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPoint", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectResolution", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requirePE", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapExtent", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapPyramid", function() { return A; });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "4GrV");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "gEht");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=5e-4;function x(e,n,t){return!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["canProjectWithoutEngine"])(e,n,t)}function m(n,t,o){const i=x(n,t,o);if(i&&!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rasterprojectionhelper-project","projection engine is not loaded");return i}const p=function(e,n,t){const o=(e[0]+e[4]+e[4*n.cols]+e[4*n.cols+4])/4,i=(e[1]+e[5]+e[4*n.rows+1]+e[4*n.rows+5])/4,a=(e[4*n.cols]-e[0]+e[4*n.cols+4]-e[4])/t[0]*.5,r=(e[4*n.cols+1]-e[1]+e[4*n.cols+5]-e[5])/t[1]*.5;return[0===a||isNaN(a)?0:Math.abs(o-e[2*n.rows+2])/Math.abs(a),0===r||isNaN(r)?0:Math.abs(i-e[2*n.rows+3])/Math.abs(r)]},h={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},y=32,M=4,g=M;async function d(){if(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["isLoaded"])())return null;await Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["load"])()}function w(e,n,t){if(!m(e.spatialReference,n))return null;return t?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["getTransformation"])(n,e.spatialReference,e):Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["getTransformation"])(e.spatialReference,n,e)}function R(e,t,o,i=null){if(e.spatialReference.equals(t))return e;m(e.spatialReference,t,i);const a=o.center,r=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__["default"]({xmin:a.x-e.x/2,xmax:a.x+e.x/2,ymin:a.y-e.y/2,ymax:a.y+e.y/2,spatialReference:e.spatialReference}),s=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(r,t,i);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(s))return null;return{x:s.xmax-s.xmin,y:s.ymax-s.ymin}}function b(e,n=.01){return Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(e)?n/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(e):0}function v(e,n,t=null,o=!0){const i=e.spatialReference;if(i.equals(n))return e;m(i,n,t);const a=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(e,n,t);if(o&&n.isGeographic){const[n,t]=C(i,!0),o=b(i);o&&null!=n&&null!=t&&(Math.abs(e.x-n)<o&&Math.abs(180-a.x)<f?a.x-=360:Math.abs(e.x-t)<o&&Math.abs(180+a.x)<f&&(a.x+=360))}return a}function N(e,n,t=null){const o=e[0].spatialReference;return o.equals(n)?e:(m(o,n,t),Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(e,n,t))}function z(e){const n=P(e[0].spatialReference);if(e.length<2||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(n))return e[0];let{xmin:o,xmax:i,ymin:a,ymax:r}=e[0];for(let t=1;t<e.length;t++){const o=e[t];i=o.xmax+n*t,a=Math.min(a,o.ymin),r=Math.max(r,o.ymax)}return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__["default"]({xmin:o,xmax:i,ymin:a,ymax:r,spatialReference:e[0].spatialReference})}function j(e,n,o=null,i=!0){if(e.spatialReference.equals(n))return e;const a=G(e),r=P(e.spatialReference,!0);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r)||0===a)return S(e,n,o,i);return z(e.clone().normalize().map((e=>S(e,n,o,i))))}function S(e,n,t=null,o=!0){const i=e.spatialReference;if(i.equals(n))return e;m(i,n,t);const a=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_4__["project"])(e,n,t);let[r,s]=C(i,!0);if(a&&o&&i.isWebMercator&&n.isGeographic&&null!=r&&null!=s){const o=.001,l=1e3;if(Math.abs(e.xmin-r)<o&&Math.abs(s-e.xmax)>l&&Math.abs(180-a.xmax)<f){a.xmin=-180;const o=[];o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](e.xmax,e.ymin,i)),o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](e.xmax,(e.ymin+e.ymax)/2,i)),o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](e.xmax,e.ymax,i));const r=o.map((e=>v(e,n,t))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));a.xmax=Math.max.apply(null,r)}if(Math.abs(e.xmax-s)<o&&Math.abs(r-e.xmin)>l&&Math.abs(180+a.xmin)<f){a.xmax=180;const o=[];o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](e.xmin,e.ymin,i)),o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](e.xmin,(e.ymin+e.ymax)/2,i)),o.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](e.xmin,e.ymax,i));const r=o.map((e=>v(e,n,t))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));a.xmin=Math.min.apply(null,r)}}[r,s]=C(n,!0);const c=b(n);return c&&null!=r&&null!=s&&a&&(Math.abs(a.xmin-r)<c&&(a.xmin=r),Math.abs(a.xmax-s)<c&&(a.xmax=s)),a}function P(e,n=!1){const t=n?20037508.342787:20037508.342788905;return e.isWebMercator?2*t:e.wkid&&e.isGeographic?360:2*h[e.wkid]||null}function C(e,n=!1){const o=[],i=P(e,n);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(i)&&(o.push(-i/2),o.push(i/2)),o}function W(e,n,t,o){let i=(e-n)/t;return i-Math.floor(i)!=0?i=Math.floor(i):o&&(i-=1),i}function G(e,n=!1){const o=P(e.spatialReference);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o))return 0;const i=n?0:-(o/2);return W(e.xmax,i,o,!0)-W(e.xmin,i,o,!1)}function T(e){const n=e.storageInfo.origin.x,o=P(e.spatialReference,!0);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const i=o/2,{nativePixelSize:a,storageInfo:r,extent:s}=e,{maximumPyramidLevel:l,blockWidth:c,pyramidScalingFactor:u}=r;let f=a.x;const x=[],m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.transform)&&"gcs-shift"===e.transform.type,p=n+(m?0:i),h=m?o-n:i-n;for(let t=0;t<=l;t++){const e=(s.xmax-n)/f/c,t=e-Math.floor(e)==0?e:Math.ceil(e),o=h/f/c,i=o-Math.floor(o)==0?o:Math.ceil(o),a=Math.floor(p/f/c),r=Math.round(p/f)%c,l=(c-Math.round(h/f)%c)%c;x.push({resolutionX:f,blockWidth:c,datsetColumnCount:t,worldColumnCountFromOrigin:i,leftMargin:r,rightPadding:l,originColumnOffset:a}),f*=u}return{originX:n,halfWorldWidth:i,pyramidsInfo:x,hasGCSSShiftTransform:m}}function L(e){const n=e.isAdaptive&&null==e.spacing,t=e.spacing||[y,y];let o=k(e),i={cols:o.size[0]+1,rows:o.size[1]+1},a=p(o.offsets,i,t);const r=(a[0]+a[1])/2,s=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;return n&&(s||r>g)&&(o=k({...e,spacing:[M,M]}),i={cols:o.size[0]+1,rows:o.size[1]+1},a=p(o.offsets,i,t)),o.error=a,o.coefficients=I(o.offsets,i,s),o}function k(e){const{projectedExtent:n,srcBufferExtent:o,pixelSize:i,datumTransformation:a,rasterTransform:r}=e,s=n.spatialReference,l=o.spatialReference;m(s,l);const{xmin:c,ymin:f,xmax:x,ymax:p}=n,h=P(l),M=e.hasWrapAround||"gcs-shift"===(null==r?void 0:r.type),g=e.spacing||[y,y],d={x:g[0]*i.x,y:g[1]*i.y},w={cols:Math.ceil((x-c)/d.x-.1/g[0])+1,rows:Math.ceil((p-f)/d.y-.1/g[1])+1},R=d.x,b=d.y,v=[];let z,j=0;const S=[];for(let t=0;t<w.cols;t++)for(let e=0;e<w.rows;e++)S.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]({x:c+R*t,y:p-b*e,spatialReference:s}));const C=N(S,l,a);for(let u=0;u<w.cols;u++){const e=[];for(let n=0;n<w.rows;n++){let i=C[u*w.rows+n];r&&(i=r.inverseTransform(i)),e.push(i),u>0&&M&&i&&z[n]&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(h)&&i.x<z[n].x&&(i.x+=h),i?(v.push((i.x-o.xmin)/(o.xmax-o.xmin)),v.push((o.ymax-i.y)/(o.ymax-o.ymin))):(v.push(NaN),v.push(NaN),j++)}z=e}return{offsets:v,error:null,coefficients:null,outofBoundPointCount:j,spacing:g,size:[w.cols-1,w.rows-1]}}function I(e,n,t){const{cols:o,rows:i}=n,a=new Float32Array((o-1)*(i-1)*2*6),r=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),s=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<o-1;l++){for(let n=0;n<i-1;n++){let t=l*i*2+2*n;const c=e[t],u=e[t+1],f=e[t+2],x=e[t+3];t+=2*i;const m=e[t],p=e[t+1],h=e[t+2],y=e[t+3];let M=0,g=12*(n*(o-1)+l);for(let e=0;e<3;e++)a[g++]=r[M++]*c+r[M++]*f+r[M++]*h;M=0;for(let e=0;e<3;e++)a[g++]=r[M++]*u+r[M++]*x+r[M++]*y;M=0;for(let e=0;e<3;e++)a[g++]=s[M++]*c+s[M++]*m+s[M++]*h;M=0;for(let e=0;e<3;e++)a[g++]=s[M++]*u+s[M++]*p+s[M++]*y}if(t)for(let e=0;e<a.length;e++)isNaN(a[e])&&(a[e]=-1)}return a}function q(e){const n=e.clone().normalize();return 1===n.length?n[0]:z(n)}function A(e,n,o){const{storageInfo:i,pixelSize:a}=n;let r,s=!1;const{pyramidResolutions:l}=i;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(l)&&l.length){const t=(e.x+e.y)/2,i=l[l.length-1],c=(i.x+i.y)/2,f=(a.x+a.y)/2;if(t<=f)r=0;else if(t>=c)r=l.length,s=t/c>8;else{let e,n=f;for(let i=1;i<=l.length;i++){if(e=(l[i-1].x+l[i-1].y)/2,t<=e){t===e?r=i:"down"===o?(r=i-1,s=t/n>8):r="up"===o||t-n>e-t||t/n>2?i:i-1;break}n=e}}const x=0===r?a:l[r-1];return{pyramidLevel:r,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]({x:x.x,y:x.y,spatialReference:n.spatialReference}),excessiveReading:s}}const c=Math.log(e.x/a.x)/Math.LN2,f=Math.log(e.y/a.y)/Math.LN2,x=n.storageInfo.maximumPyramidLevel||0;r="down"===o?Math.floor(Math.min(c,f)):"up"===o?Math.ceil(Math.max(c,f)):Math.round((c+f)/2),r<0?r=0:r>x&&(s=r>x+3,r=x);const m=2**r;return{pyramidLevel:r,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]({x:m*n.nativePixelSize.x,y:m*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:s}}function F(e,n,t=512,i=!0){const{extent:a,spatialReference:r,pixelSize:s}=e,l=R(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]({x:s.x,y:s.y,spatialReference:r}),n,a);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(l.x+l.y)/2,f=Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(n),x=c*f*96*39.37,m=n.isGeographic?256/t*295828763.7958547:256/t*591657527.591555;let p="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const h=j(a,n);p||i&&(n.isGeographic||n.isWebMercator)&&(p=h.xmin*h.xmax<0);let y,M=x;const g=1.001;if(p){M=m;const e=n.isGeographic?1341104507446289e-21:.29858214164761665,t=e*(96*f*39.37),o=n.isGeographic?4326:3857;y=R(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]({x:e,y:e,spatialReference:{wkid:o}}),r,h),y.x*=M/t,y.y*=M/t}else{y={x:s.x,y:s.y};const n=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let t=0;for(;M<m*(g/2)&&t<n;)t++,M*=2,y.x*=2,y.y*=2;Math.max(M,m)/Math.min(M,m)<=g&&(M=m)}const d=[M],w=[{x:y.x,y:y.y}],b=70.5310735,v=Math.min(b,x)/g;for(;M>=v;)M/=2,y.x/=2,y.y/=2,d.push(M),w.push({x:y.x,y:y.y});return{projectedPixelSize:l,scales:d,srcResolutions:w,isCustomTilingScheme:!p}}


/***/ }),

/***/ "vnhx":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowGLResources.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,t){this._vertexData=e,this._indexData=t}prepareForRendering(r,s,i){const a=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["default"].createVertex(r,35044,this._vertexData),o=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["default"].createIndex(r,35044,this._indexData),x=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__["default"](r,s,i,{geometry:a},o);this.vertexBuffer=a,this.indexBuffer=o,this.vertexArray=x,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}}


/***/ })

}]);
//# sourceMappingURL=default~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView2D-js.js.map