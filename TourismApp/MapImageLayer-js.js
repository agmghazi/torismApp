(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MapImageLayer-js"],{

/***/ "U/i9":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/MapImageLayer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return A; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TimeExtent.js */ "ZYtI");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/loadAll.js */ "GFPt");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/PropertyOrigin.js */ "ku/q");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../geometry/support/scaleUtils.js */ "SaAm");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ "9G54");
/* harmony import */ var _mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/ArcGISMapService.js */ "MD9Z");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ "iyhF");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/SublayersOwner.js */ "1Ana");
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ "YBpl");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/ExportImageParameters.js */ "cM4j");
/* harmony import */ var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./support/Sublayer.js */ "6dDx");
/* harmony import */ var _support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./support/sublayerUtils.js */ "Ilhi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_23__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_30__["TemporalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_28__["ScaleRangeLayer"])(Object(_mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_29__["SublayersOwner"])(Object(_mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_21__["ArcGISMapService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_22__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_25__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_26__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_7__["MultiOriginJSONMixin"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_27__["RefreshableLayer"])(Object(_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_20__["APIKeyMixin"])(Object(_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_24__["CustomParametersMixin"])(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_4__["HandleOwnerMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_19__["default"])))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__["throwIfAbortError"]).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_16__["nameToId"])(o.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;s=Object(_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_34__["shouldWriteSublayerStructure"])(i,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");s=Object(_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_34__["shouldWriteSublayerStructure"])(i,e.sublayers,Object(_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_16__["nameToId"])(e.origin))}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible")}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new _support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_32__["ExportImageParameters"]({layer:this,floors:null==o?void 0:o.floors,scale:Object(_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_18__["getScale"])({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(n,p).then((e=>e.data)).catch((e=>{if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__["isAbortError"])(e))throw e;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return{fullExtent:n&&_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(n),timeExtent:p&&_TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON({start:p[0],end:p[1]})}}loadAll(){return Object(_core_loadAll_js__WEBPACK_IMPORTED_MODULE_5__["loadAll"])(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()],q.prototype,"dpi",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()],q.prototype,"gdbVersion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()],q.prototype,"imageFormat",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__["reader"])("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()],q.prototype,"imageTransparency",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])()],q.prototype,"sourceJSON",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__["writer"])("sublayers",{layers:{type:[_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_33__["default"]]},visibleLayers:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__["Integer"]]}})],q.prototype,"writeSublayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_31__["url"])],q.prototype,"url",void 0),q=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__["subclass"])("esri.layers.MapImageLayer")],q);const A=q;


/***/ })

}]);
//# sourceMappingURL=MapImageLayer-js.js.map