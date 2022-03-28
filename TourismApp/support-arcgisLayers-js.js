(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-arcgisLayers-js"],{

/***/ "TPT3":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/arcgisLayers.js ***!
  \******************************************************************/
/*! exports provided: fromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUrl", function() { return i; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arcgisLayerUrl.js */ "VLTf");
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lazyLayerLoader.js */ "oLSx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(e){var r;const a=null==(r=e.properties)?void 0:r.customParameters,t=await d(e.url,a),l={...e.properties,url:e.url};if(!t.sublayerIds)return null!=t.layerOrTableId&&(l.layerId=t.layerOrTableId,l.sourceJSON=t.sourceJSON),new t.Constructor(l);const n=new(0,(await __webpack_require__.e(/*! import() | GroupLayer-js */ "GroupLayer-js").then(__webpack_require__.bind(null, /*! ../GroupLayer.js */ "VPx4"))).default)({title:t.parsedUrl.title});return c(n,t,l),n}function y(e,r){return e?e.find((e=>e.id===r)):null}function c(e,r,a){function l(e,l){const n={...a,layerId:e,sublayerTitleMode:"service-name"};return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(l)&&(n.sourceJSON=l),new r.Constructor(n)}r.sublayerIds.forEach((a=>{const t=l(a,y(r.sublayerInfos,a));e.add(t)})),r.tableIds.forEach((a=>{const t=l(a,y(r.tableInfos,a));e.tables.add(t)}))}async function d(e,t){let l=Object(_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__["parse"])(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(l)&&(l=await f(e,t)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(l))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:n,sublayer:o}=l;let u;const i={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(n){case"MapServer":u=null!=o?"FeatureLayer":S(e,t).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=w(e,t).then((e=>{const r=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!r||"LERC"!==r.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=w(l.url.path,t).then((e=>{if(e){if("Voxel"===(null==e?void 0:e.layerType))return"VoxelLayer";if(null!=e&&e.layers&&Array.isArray(e.layers)&&e.layers.length>0){var r;const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},t=null==(r=e.layers[0])?void 0:r.layerType;if(null!=a[t])return a[t]}}return"SceneLayer"}));break;default:u=i[n]}const y={FeatureLayer:!0,SceneLayer:!0},c="FeatureServer"===n,d={parsedUrl:l,Constructor:null,layerOrTableId:c?o:null,sublayerIds:null,tableIds:null},p=await u;if(y[p]&&null==o){const r=await v(e,n,t);c&&(d.sublayerInfos=r.layerInfos,d.tableInfos=r.tableInfos);if(1!==r.layerIds.length+r.tableIds.length)d.sublayerIds=r.layerIds,d.tableIds=r.tableIds;else if(c){var I,b;d.layerOrTableId=null!=(I=r.layerIds[0])?I:r.tableIds[0],d.sourceJSON=null!=(b=r.layerInfos[0])?b:r.tableInfos[0]}}return d.Constructor=await m(p),d}async function f(e,r){var a;const s=await w(e,r);let u=null,i=null;const y=s.type;if("Feature Layer"===y||"Table"===y?(u="FeatureServer",i=s.id):"indexedVector"===y?u="VectorTileServer":s.hasOwnProperty("mapName")?u="MapServer":s.hasOwnProperty("bandCount")&&s.hasOwnProperty("pixelSizeX")?u="ImageServer":s.hasOwnProperty("maxRecordCount")&&s.hasOwnProperty("allowGeometryUpdates")?u="FeatureServer":s.hasOwnProperty("streamUrls")?u="StreamServer":p(s)?(u="SceneServer",i=s.id):s.hasOwnProperty("layers")&&p(null==(a=s.layers)?void 0:a[0])&&(u="SceneServer"),!u)return null;const c=null!=i?Object(_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__["parseNonStandardSublayerUrl"])(e):null;return{title:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(c)&&s.name||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["getFilename"])(e),serverType:u,sublayer:i,url:{path:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(c)?c.serviceUrl:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["urlToObject"])(e).path}}}function p(e){return(null==e?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function v(e,r,a){var t,l;let n,s=!1;if("FeatureServer"===r){const r=await b(e,a);s=!!r.layersJSON,n=r.layersJSON||r.serviceJSON}else n=await w(e,a);const o=null==(t=n)?void 0:t.layers,u=null==(l=n)?void 0:l.tables;return{layerIds:(null==o?void 0:o.map((e=>e.id)).reverse())||[],tableIds:(null==u?void 0:u.map((e=>e.id)).reverse())||[],layerInfos:s?o:[],tableInfos:s?u:[]}}function I(e){return!e.type||"Feature Layer"===e.type}async function b(e,r){var a,t;let l=await w(e,r);l=l||{},l.layers=(null==(a=l.layers)?void 0:a.filter(I))||[];const n={serviceJSON:l};if(l.currentVersion<10.5)return n;const s=await w(e+"/layers",r);return n.layersJSON={layers:(null==s||null==(t=s.layers)?void 0:t.filter(I))||[],tables:(null==s?void 0:s.tables)||[]},n}async function m(e){return(0,_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__["layerLookupMap"][e])()}async function S(e,r){return(await w(e,r)).tileInfo}async function w(r,a){return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,{responseType:"json",query:{f:"json",...a}})).data}


/***/ }),

/***/ "oLSx":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js ***!
  \*********************************************************************/
/*! exports provided: layerLookupMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerLookupMap", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await __webpack_require__.e(/*! import() | BingMapsLayer-js */ "BingMapsLayer-js").then(__webpack_require__.bind(null, /*! ../BingMapsLayer.js */ "CR/Q"))).default,BuildingSceneLayer:async()=>(await Promise.all(/*! import() | BuildingSceneLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js~VoxelLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("BuildingSceneLayer-js")]).then(__webpack_require__.bind(null, /*! ../BuildingSceneLayer.js */ "TWTt"))).default,CSVLayer:async()=>(await __webpack_require__.e(/*! import() | CSVLayer-js */ "CSVLayer-js").then(__webpack_require__.bind(null, /*! ../CSVLayer.js */ "Kn0e"))).default,ElevationLayer:async()=>(await Promise.all(/*! import() | ElevationLayer-js */[__webpack_require__.e("default~ElevationLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("ElevationLayer-js")]).then(__webpack_require__.bind(null, /*! ../ElevationLayer.js */ "8g7C"))).default,FeatureLayer:async()=>(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../FeatureLayer.js */ "W9Wu"))).default,GroupLayer:async()=>(await __webpack_require__.e(/*! import() | GroupLayer-js */ "GroupLayer-js").then(__webpack_require__.bind(null, /*! ../GroupLayer.js */ "VPx4"))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(/*! import() | GeoRSSLayer-js */ "GeoRSSLayer-js").then(__webpack_require__.bind(null, /*! ../GeoRSSLayer.js */ "AP+b"))).default,GeoJSONLayer:async()=>(await __webpack_require__.e(/*! import() | GeoJSONLayer-js */ "GeoJSONLayer-js").then(__webpack_require__.bind(null, /*! ../GeoJSONLayer.js */ "eFyd"))).default,ImageryLayer:async()=>(await Promise.all(/*! import() | ImageryLayer-js */[__webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2~d03e9ec2"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js"), __webpack_require__.e("ImageryLayer-js")]).then(__webpack_require__.bind(null, /*! ../ImageryLayer.js */ "/GVf"))).default,ImageryTileLayer:async()=>(await Promise.all(/*! import() | ImageryTileLayer-js */[__webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2~d03e9ec2"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js"), __webpack_require__.e("default~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("common"), __webpack_require__.e("ImageryTileLayer-js")]).then(__webpack_require__.bind(null, /*! ../ImageryTileLayer.js */ "mRf7"))).default,IntegratedMeshLayer:async()=>(await Promise.all(/*! import() | IntegratedMeshLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js~VoxelLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("IntegratedMeshLayer-js")]).then(__webpack_require__.bind(null, /*! ../IntegratedMeshLayer.js */ "yvy3"))).default,KMLLayer:async()=>(await Promise.all(/*! import() | KMLLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("KMLLayer-js")]).then(__webpack_require__.bind(null, /*! ../KMLLayer.js */ "9fxc"))).default,MapImageLayer:async()=>(await Promise.all(/*! import() | MapImageLayer-js */[__webpack_require__.e("default~MapImageLayer-js~TileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("MapImageLayer-js")]).then(__webpack_require__.bind(null, /*! ../MapImageLayer.js */ "U/i9"))).default,MapNotesLayer:async()=>(await Promise.all(/*! import() | MapNotesLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("MapNotesLayer-js")]).then(__webpack_require__.bind(null, /*! ../MapNotesLayer.js */ "Wvof"))).default,OGCFeatureLayer:async()=>(await Promise.all(/*! import() | OGCFeatureLayer-js */[__webpack_require__.e("default~OGCFeatureLayer-js~views-2d-layers-features-Pipeline-js"), __webpack_require__.e("OGCFeatureLayer-js")]).then(__webpack_require__.bind(null, /*! ../OGCFeatureLayer.js */ "H2ne"))).default,OpenStreetMapLayer:async()=>(await Promise.all(/*! import() | OpenStreetMapLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("OpenStreetMapLayer-js")]).then(__webpack_require__.bind(null, /*! ../OpenStreetMapLayer.js */ "jFi3"))).default,PointCloudLayer:async()=>(await Promise.all(/*! import() | PointCloudLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js~VoxelLayer-js"), __webpack_require__.e("default~PointCloudLayer-js~views-3d-layers-PointCloudWorker-js"), __webpack_require__.e("PointCloudLayer-js")]).then(__webpack_require__.bind(null, /*! ../PointCloudLayer.js */ "RLtZ"))).default,RouteLayer:async()=>(await __webpack_require__.e(/*! import() | RouteLayer-js */ "RouteLayer-js").then(__webpack_require__.bind(null, /*! ../RouteLayer.js */ "soW6"))).default,SceneLayer:async()=>(await Promise.all(/*! import() | SceneLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js~VoxelLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("SceneLayer-js")]).then(__webpack_require__.bind(null, /*! ../SceneLayer.js */ "0yFX"))).default,StreamLayer:async()=>(await __webpack_require__.e(/*! import() | StreamLayer-js */ "StreamLayer-js").then(__webpack_require__.bind(null, /*! ../StreamLayer.js */ "u6iX"))).default,TileLayer:async()=>(await Promise.all(/*! import() | TileLayer-js */[__webpack_require__.e("default~ElevationLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("default~MapImageLayer-js~TileLayer-js"), __webpack_require__.e("TileLayer-js")]).then(__webpack_require__.bind(null, /*! ../TileLayer.js */ "JlDE"))).default,UnknownLayer:async()=>(await __webpack_require__.e(/*! import() | UnknownLayer-js */ "UnknownLayer-js").then(__webpack_require__.bind(null, /*! ../UnknownLayer.js */ "qcqe"))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/*! import() | UnsupportedLayer-js */ "UnsupportedLayer-js").then(__webpack_require__.bind(null, /*! ../UnsupportedLayer.js */ "GN2T"))).default,VectorTileLayer:async()=>(await Promise.all(/*! import() | VectorTileLayer-js */[__webpack_require__.e("default~VectorTileLayer-js~layers-VectorTileLayerView2D-js~views-2d-engine-vectorTiles-WorkerTileHandler-js"), __webpack_require__.e("default~ElevationLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("VectorTileLayer-js")]).then(__webpack_require__.bind(null, /*! ../VectorTileLayer.js */ "FzwJ"))).default,VoxelLayer:async()=>(await Promise.all(/*! import() | VoxelLayer-js */[__webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js~VoxelLayer-js"), __webpack_require__.e("VoxelLayer-js")]).then(__webpack_require__.bind(null, /*! ../VoxelLayer.js */ "o0d7"))).default,WebTileLayer:async()=>(await __webpack_require__.e(/*! import() | WebTileLayer-js */ "common").then(__webpack_require__.bind(null, /*! ../WebTileLayer.js */ "ncPp"))).default,WFSLayer:async()=>(await Promise.all(/*! import() | WFSLayer-js */[__webpack_require__.e("default~WFSLayer-js~layers-graphics-sources-WFSSourceWorker-js"), __webpack_require__.e("WFSLayer-js")]).then(__webpack_require__.bind(null, /*! ../WFSLayer.js */ "+k5Q"))).default,WMSLayer:async()=>(await Promise.all(/*! import() | WMSLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("WMSLayer-js")]).then(__webpack_require__.bind(null, /*! ../WMSLayer.js */ "h2Da"))).default,WMTSLayer:async()=>(await Promise.all(/*! import() | WMTSLayer-js */[__webpack_require__.e("common"), __webpack_require__.e("WMTSLayer-js")]).then(__webpack_require__.bind(null, /*! ../WMTSLayer.js */ "sDlQ"))).default};


/***/ })

}]);
//# sourceMappingURL=support-arcgisLayers-js.js.map