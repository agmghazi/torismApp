(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-support-PBFDecoderWorker-js"],{

/***/ "Ab+v":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _rest_query_operations_pbfDehydratedFeatureSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../rest/query/operations/pbfDehydratedFeatureSet.js */ "jVMl");
/* harmony import */ var _rest_query_operations_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rest/query/operations/pbfQueryUtils.js */ "By9p");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{_parseFeatureQuery(t){const s=Object(_rest_query_operations_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_1__["parsePBFFeatureQuery"])(t.buffer,new _rest_query_operations_pbfDehydratedFeatureSet_js__WEBPACK_IMPORTED_MODULE_0__["DehydratedFeatureSetParserContext"](t.options)),o={...s,spatialReference:s.spatialReference.toJSON(),fields:s.fields?s.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(o)}}function s(){return new t}


/***/ }),

/***/ "jVMl":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js ***!
  \************************************************************************************/
/*! exports provided: DehydratedFeatureSetParserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureSetParserContext", function() { return g; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/uid.js */ "8uAX");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/zscale.js */ "sPVA");
/* harmony import */ var _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layers/graphics/dehydratedFeatures.js */ "GlSV");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layers/support/Field.js */ "ofM5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t,e){return e}function p(t,e,r,o){switch(r){case 0:return m(t,e+o,0);case 1:return"lowerLeft"===t.originPosition?m(t,e+o,1):y(t,e+o,1)}}function c(t,e,r,o){return 2===r?m(t,e,2):p(t,e,r,o)}function d(t,e,r,o){return 2===r?m(t,e,3):p(t,e,r,o)}function f(t,e,r,o){return 3===r?m(t,e,3):c(t,e,r,o)}function m({translate:t,scale:e},r,o){return t[o]+r*e[o]}function y({translate:t,scale:e},r,o){return t[o]-r*e[o]}class g{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=u,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_5__["DehydratedFeatureSetClass"]}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const r=Object(_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_4__["getGeometryZScaler"])(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(r))for(const e of t.features)r(e.geometry)}createSpatialReference(){return new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"]}addField(t,e){t.fields.push(_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON(e));const r=t.fields.map((t=>t.name));this.AttributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const o in e.attributes){const t=e.attributes[o];"string"==typeof t&&t.length>r&&(e.attributes[o]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:o}=e,s=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["unquantizeOptimizedGeometry"])(r.clone(),r,!1,!1,this.transform),i=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__["convertToGeometry"])(s,o,!1,!1);let n=null;switch(o){case"esriGeometryPoint":n="point";break;case"esriGeometryPolygon":n="polygon";break;case"esriGeometryPolyline":n="polyline";break;case"esriGeometryMultipoint":n="multipoint"}i.type=n,t.queryGeometryType=o,t.queryGeometry=i}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this.addCoordinatePolygon(t,e,r),this.createGeometry=t=>this.createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this.addCoordinatePolyline(t,e,r),this.createGeometry=t=>this.createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this.addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this.createMultipointGeometry(t);break;case"mesh":case"extent":break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_5__["DehydratedFeatureClass"](Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_2__["generateUID"])(),null,new this.AttributesConstructor)}allocateCoordinates(){const t=this.lengths.reduce(((t,e)=>t+e),0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension),this.coordinateBufferPtr=0}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}addCoordinatePolyline(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r)}addCoordinatePolygon(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r)}addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const o=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(o)}createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const o=this.transformPathLikeValue(e,r),s=t[t.length-1];0===r&&s.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=o}deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?f:e?c:r?d:p}}


/***/ })

}]);
//# sourceMappingURL=views-3d-support-PBFDecoderWorker-js.js.map