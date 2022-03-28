(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js~VoxelLayer-js"],{

/***/ "+bym":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/webdoc/support/saveUtils.js ***!
  \***************************************************************/
/*! exports provided: saveResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveResources", function() { return a; });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/asyncUtils.js */ "eSsm");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/support/resourceUtils.js */ "5qYV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function a(r,a,u){if(!a||!a.resources)return;const h=a.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=a.portalItem;const i=new Set(a.resources.toKeep.map((r=>r.resource.path))),f=new Set,m=[];i.forEach((e=>{h.delete(e),r.paths.push(e)}));for(const e of a.resources.toUpdate)if(h.delete(e.resource.path),i.has(e.resource.path)||f.has(e.resource.path)){const{resource:o,content:t,finish:a,error:p}=e,h=Object(_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__["getSiblingOfSameTypeI"])(o,Object(_core_uuid_js__WEBPACK_IMPORTED_MODULE_3__["generateUUID"])());r.paths.push(h.path),m.push(n({resource:h,content:t,finish:a,error:p},u))}else r.paths.push(e.resource.path),m.push(p(e,u)),f.add(e.resource.path);for(const e of a.resources.toAdd)m.push(n(e,u)),r.paths.push(e.resource.path);if(h.forEach((r=>{const e=a.portalItem.resourceFromPath(r);m.push(e.portalItem.removeResource(e).catch((()=>{})))})),0===m.length)return;const l=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(m);Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(u);const d=l.filter((r=>"error"in r)).map((r=>r.error));if(d.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("save:resources","Failed to save one or more resources",{errors:d})}async function n(e,o){const t=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__["result"])(e.resource.portalItem.addResource(e.resource,e.content,o));if(!0!==t.ok)throw e.error&&e.error(t.error),t.error;e.finish&&e.finish(e.resource)}async function p(e,o){const t=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__["result"])(e.resource.update(e.content,o));if(!0!==t.ok)throw e.error(t.error),t.error;e.finish(e.resource)}


/***/ }),

/***/ "5qYV":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceUtils.js ***!
  \*******************************************************************/
/*! exports provided: addOrUpdateResource, contentToBlob, fetchResources, getSiblingOfSameType, getSiblingOfSameTypeI, removeAllResources, removeResource, splitPrefixFileNameAndExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrUpdateResource", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentToBlob", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResources", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblingOfSameType", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblingOfSameTypeI", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllResources", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeResource", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitPrefixFileNameAndExtension", function() { return d; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function c(e,t={},a){await e.load(a);const o=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["join"])(e.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:u="asc",sortField:i="created"}=t,l={query:{start:n,num:c,sortOrder:u,sortField:i,token:e.apiKey},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(a,"signal")},p=await e.portal._request(o,l);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function u(e,o,n,c){if(!e.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const u=e.portalItem;await u.load(c);const i=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["join"])(u.userItemUrl,"add"===o?"addResources":"updateResources"),[l,d]=p(e.path),m=await h(n),f=new FormData;return l&&"."!==l&&f.append("resourcesPrefix",l),f.append("fileName",d),f.append("file",m,d),f.append("f","json"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(c)&&c.access&&f.append("access",c.access),await u.portal._request(i,{method:"post",body:f,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(c,"signal")}),e}async function i(e,a,o){if(!a.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const n=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["join"])(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:a.path},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(o,"signal")}),a.portalItem=null}async function l(e,t){await e.load(t);const a=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["join"])(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=m(e),[a,o]=p(t);return[a,o,r]}function m(e){const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["getPathExtension"])(e);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function h(t){if(t instanceof Blob)return t;return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["join"])(r,t+a))}function w(e,t){if(!e.hasPath())return null;const[r,,a]=d(e.path);return e.portalItem.resourceFromPath(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["join"])(r,t+a))}


/***/ }),

/***/ "Jpjp":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js ***!
  \***********************************************************************/
/*! exports provided: isMultiOriginJSONMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiOriginJSONMixin", function() { return i; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ "bjZF":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js ***!
  \******************************************************************/
/*! exports provided: fetchIndexInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIndexInfo", function() { return n; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function n(n,t,s,a,i,d){let l=null;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s)){const o=`${n}/nodepages/`,t=o+Math.floor(s.rootIndex/s.nodesPerPage);try{return{type:"page",rootPage:(await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{query:{f:"json",token:a},responseType:"json",signal:d})).data,rootIndex:s.rootIndex,pageSize:s.nodesPerPage,lodMetric:s.lodSelectionMetricType,urlPrefix:o}}catch(f){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(i)&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",t,f),l=f}}if(!t)return null;const p=`${n}/nodes/`,c=p+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(c,{query:{f:"json",token:a},responseType:"json",signal:d})).data,urlPrefix:p}}catch(f){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:f,url:c})}}


/***/ }),

/***/ "lq5k":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/SceneService.js ***!
  \*****************************************************************/
/*! exports provided: SCENE_SERVICE_ITEM_TYPE, SceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_SERVICE_ITEM_TYPE", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneService", function() { return N; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/accessorSupport/originUtils.js */ "yoHx");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../geometry/HeightModelInfo.js */ "5k2a");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ "VLTf");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../support/commonProperties.js */ "IvSi");
/* harmony import */ var _support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../support/I3SIndexInfo.js */ "bjZF");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "p+Gi");
/* harmony import */ var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../webdoc/support/saveUtils.js */ "+bym");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const R=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.mixins.SceneService"),N=i=>{let N=class extends i{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["debounce"])((async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,i=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=i?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"](i):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const i=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(i,r)}const i=t.store,o=this._readSpatialReference(t);return null==o||null==i||null==i.extent||!Array.isArray(i.extent)||i.extent.some((e=>e<U))?null:new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]({xmin:i.extent[0],ymin:i.extent[1],xmax:i.extent[2],ymax:i.extent[3],spatialReference:o})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,i=null!=r.version?r.version.toString():"";return this.parseVersionString(i)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_18__["titleFromUrlAndName"])(this.url,t.name);let i=t.name;if(!i&&this.url){const e=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_18__["parse"])(this.url);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isSome"])(e)&&(i=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(i=r+" - "+i),Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_18__["cleanTitle"])(i)}set url(e){const t=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_18__["sanitizeUrlWithLayerId"])({layer:this,url:e,nonStandardUrlAllowed:!1,logger:R});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_18__["writeUrlWithLayerId"])(this,e,"layers",t,i)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["urlToObject"])(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(_support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_20__["fetchIndexInfo"])(this.parsedUrl.path,this.rootNode,e,this.apiKey,R,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,i;const o=e.rootIndex%e.pageSize,s=null==(t=e.rootPage)||null==(i=t.nodes)?void 0:i[o];if(null==s||null==s.obb||null==s.obb.center||null==s.obb.halfSize)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:invalid-node-page","Invalid node page.");if(s.obb.center[0]<U||null==this.fullExtent||this.fullExtent.hasZ)return;const a=s.obb.halfSize,n=s.obb.center[2],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<U)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i}}async _fetchService(e){if(null==this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(i=!0),i)return this.read(r.data,{origin:"service",url:this.parsedUrl}),this._fetchVoxelServiceLayer();const o=r.data;this.read(o,{origin:"service",url:this.parsedUrl}),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const r=(await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const i=t.getTypeKeywords();for(const o of i)e.typeKeywords.push(o);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),1===r&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const i={...E,...t};let o=_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_22__["default"].from(e);o||(R.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const s=o.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_21__["default"].getDefault();await this._ensureLoadBeforeSave(),o.type=O,o.portal=s;const a={origin:"portal-item",url:null,messages:[],portal:s,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations),await this._validateAgainstJSONSchema(n,a,i),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,i,1),await s._signIn(),await s.user.addItem({item:o,folder:i&&i.folder,data:n}),await Object(_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_23__["saveResources"])(this.resourceReferences,a,null),this.portalItem=o,Object(_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_14__["updateOrigins"])(a),a.portalItem=o,o}async _save(e){const t={...E,...e};this.portalItem||(R.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==O&&(R.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+O),await Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${O}"`))),await this._ensureLoadBeforeSave();const i={origin:"portal-item",url:this.portalItem.itemUrl&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["urlToObject"])(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_21__["default"].getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(o,i,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await Object(_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_23__["saveResources"])(this.resourceReferences,i,null),Object(_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_14__["updateOrigins"])(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){let o=t.messages.filter((e=>"error"===e.type)).map((e=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](e.name,e.message,e.details)));if(i&&i.validationOptions.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name))),i.validationOptions.enabled||T){const t=(await __webpack_require__.e(/*! import() | support-schemaValidator-js */ "support-schemaValidator-js").then(__webpack_require__.bind(null, /*! ../support/schemaValidator.js */ "p+sB"))).validate(e,i.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(R.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===i.validationOptions.failPolicy){const e=t.map((e=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:schema-validation",e))).concat(o);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__["id"])],N.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"]})],N.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readSpatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]})],N.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readFullExtent",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0,type:_geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]})],N.prototype,"heightModelInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],N.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],N.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],N.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("version",["store.version"])],N.prototype,"readVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:String,json:{read:{source:"copyrightText"}}})],N.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:String,json:{read:!1}})],N.prototype,"sublayerTitleMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:String})],N.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("portal-item","title")],N.prototype,"readTitlePortalItem",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__["reader"])("service","title",["name"])],N.prototype,"readTitleService",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],N.prototype,"layerId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__["url"])],N.prototype,"url",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__["writer"])("url")],N.prototype,"writeUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],N.prototype,"parsedUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({readOnly:!0})],N.prototype,"store",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],N.prototype,"rootNode",void 0),N=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__["subclass"])("esri.layers.mixins.SceneService")],N),N},U=-1e38,T=!1,O="Scene Service",E={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};


/***/ }),

/***/ "yoHx":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/originUtils.js ***!
  \***********************************************************************/
/*! exports provided: updateOrigins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrigins", function() { return r; });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiOriginJSONSupportUtils.js */ "Jpjp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){r&&r.writtenProperties&&r.writtenProperties.forEach((r=>{const t=r.target;r.newOrigin&&r.oldOrigin!==r.newOrigin&&Object(_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultiOriginJSONMixin"])(t)&&t.updateOrigin(r.propName,r.newOrigin)}))}


/***/ })

}]);
//# sourceMappingURL=default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js~VoxelLayer-js.js.map