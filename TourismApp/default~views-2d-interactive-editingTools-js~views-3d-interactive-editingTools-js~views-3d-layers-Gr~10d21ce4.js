(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-2d-interactive-editingTools-js~views-3d-interactive-editingTools-js~views-3d-layers-Gr~10d21ce4"],{

/***/ "8Lmx":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/byteSizeEstimations.js ***!
  \***************************************************************/
/*! exports provided: estimateAttributesObjectSize, estimateFixedArraySize, estimateNumberByteSize, estimateStringByteSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateAttributesObjectSize", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateFixedArraySize", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateNumberByteSize", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateStringByteSize", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t(){return 16}function e(e){if(!e)return 0;let r=32;for(const o in e)if(e.hasOwnProperty(o)){const c=e[o];switch(typeof c){case"string":r+=n(c);break;case"number":r+=t();break;case"boolean":r+=4}}return r}function r(n,t){return 32+n.length*t}


/***/ }),

/***/ "AIxD":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*************************************************************************/
/*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeBounds", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeExtent", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePaths", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoint", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoints", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolygon", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolyline", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeRings", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeX", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeY", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePaths", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoint", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoints", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeRings", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeX", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeY", function() { return T; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n){return n&&"upperLeft"===n.originPosition}const a=(n,t,e)=>[t,e],m=(n,t,e)=>[t,e,n[2]],c=(n,t,e)=>[t,e,n[2],n[3]];function s(t){if(!t)return null;return{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}}function f(t,e){if(t===e||null==t&&null==e)return!0;if(null==t||null==e)return!1;let r,u,i,o,a,m;return l(t)?(r=t.translate[0],u=t.translate[1],i=t.scale[0]):(r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?t.extent.xmin:0,u=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.extent)?t.extent.ymax:0,i=t.tolerance),l(e)?(o=e.translate[0],a=e.translate[1],m=e.scale[0]):(o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.extent)?e.extent.xmin:0,a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.extent)?e.extent.ymax:0,m=e.tolerance),r===o&&u===a&&i===m}function x({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function h({scale:n,translate:t},e){return Math.round((t[1]-e)/n[1])}function I(n,t,e){const r=[];let u,i,o,l;for(let a=0;a<e.length;a++){const m=e[a];a>0?(o=x(n,m[0]),l=h(n,m[1]),o===u&&l===i||(r.push(t(m,o-u,l-i)),u=o,i=l)):(u=x(n,m[0]),i=h(n,m[1]),r.push(t(m,u,i)))}return r.length>0?r:null}function g(n,t,e){return t[0]=x(n,e[0]),t[3]=h(n,e[1]),t[2]=x(n,e[2]),t[1]=h(n,e[3]),t}function p(n,t,e,r){return I(n,e?r?c:m:r?m:a,t)}function N(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function y(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function z({scale:n,translate:t},e){return e*n[0]+t[0]}function T({scale:n,translate:t},e){return t[1]-e*n[1]}function M(n,t,e){const r=new Array(e.length);if(!e.length)return r;const[u,i]=n.scale;let o=z(n,e[0][0]),l=T(n,e[0][1]);r[0]=t(e[0],o,l);for(let a=1;a<e.length;a++){const n=e[a];o+=n[0]*u,l-=n[1]*i,r[a]=t(n,o,l)}return r}function E(n,t,e){const r=new Array(e.length);for(let u=0;u<e.length;u++)r[u]=M(n,t,e[u]);return r}function P(n,t,e){return e?(t[0]=z(n,e[0]),t[1]=T(n,e[3]),t[2]=z(n,e[2]),t[3]=T(n,e[1]),t):[z(n,t[0]),T(n,t[3]),z(n,t[2]),T(n,t[1])]}function b(n,t,e,r){return M(n,e?r?c:m:r?m:a,t)}function F(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function V(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function Y(n,t,e){let[r,u]=e[0],i=Math.min(r,t[0]),o=Math.min(u,t[1]),l=Math.max(r,t[2]),a=Math.max(u,t[3]);for(let m=1;m<e.length;m++){const[n,t]=e[m];r+=n,u+=t,n<0&&(i=Math.min(i,r)),n>0&&(l=Math.max(l,r)),t<0?o=Math.min(o,u):t>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function _(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)Y(n,n,t[e]);return n}function A(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return Y(t,t,n)}function w(n){return _([0,0,0,0],n)}function j(n){return _([0,0,0,0],n)}function G(n,t,e,r,u){return t.xmin=x(n,e.xmin),t.ymin=h(n,e.ymin),t.xmax=x(n,e.xmax),t.ymax=h(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function L(n,t,e,r,u){return t.points=p(n,e.points,r,u),t}function O(n,t,e,r,u){return t.x=x(n,e.x),t.y=h(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m)),t}function S(n,t,e,r,u){const i=N(n,e.rings,r,u);return i?(t.rings=i,t):null}function d(n,t,e,r,u){const i=y(n,e.paths,r,u);return i?(t.paths=i,t):null}function U(n,t){return n&&t?Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPoint"])(t)?O(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolyline"])(t)?d(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPolygon"])(t)?S(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isMultipoint"])(t)?L(n,{},t,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__["isExtent"])(t)?G(n,{},t,!1,!1):null:null}function k(n,t,e,r,u){return t.xmin=z(n,e.xmin),t.ymin=T(n,e.ymin),t.xmax=z(n,e.xmax),t.ymax=T(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function q(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.points=b(t,r.points,u,i)),e}function v(n,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)||(e.x=z(n,r.x),e.y=T(n,r.y),e!==r&&(u&&(e.z=r.z),i&&(e.m=r.m))),e}function B(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.rings=V(t,r.rings,u,i)),e}function C(t,e,r,u,i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(e.paths=F(t,r.paths,u,i)),e}


/***/ }),

/***/ "GlSV":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js ***!
  \*************************************************************************/
/*! exports provided: equals, DehydratedFeatureClass, DehydratedFeatureSetClass, computeAABB, computeAABR, estimateGeometryObjectSize, estimateSize, expandAABB, expandAABR, fromFeatureSetJSON, fromJSONGeometry, getObjectId, hasGeometry, hasVertices, isFeatureGeometry, makeDehydratedPoint, numVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureClass", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureSetClass", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAABB", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAABR", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateGeometryObjectSize", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateSize", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAABB", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAABR", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromFeatureSetJSON", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSONGeometry", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectId", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasGeometry", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVertices", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFeatureGeometry", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDehydratedPoint", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numVertices", function() { return w; });
/* harmony import */ var _core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/byteSizeEstimations.js */ "8Lmx");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/uid.js */ "8uAX");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/quantizationUtils.js */ "AIxD");
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/typeUtils.js */ "dOLD");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/Field.js */ "ofM5");
/* harmony import */ var _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dehydratedFeatureComparison.js */ "NWPx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_11__["equals"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class j{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function M(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.geometry)}function k(e){return Object(_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_9__["isFeatureGeometryType"])(e.type)}class N{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function z(e){const s=_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_9__["featureGeometryTypeKebabDictionary"].fromJSON(e.geometryType),r=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(e.spatialReference),n=e.transform,a=e.features.map((o=>{const a=F(o,s,r,e.objectIdFieldName),i=a.geometry;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(i)&&n)switch(i.type){case"point":a.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__["unquantizePoint"])(n,i,i,i.hasZ,i.hasM);break;case"multipoint":a.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__["unquantizeMultipoint"])(n,i,i,i.hasZ,i.hasM);break;case"polygon":a.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__["unquantizePolygon"])(n,i,i,i.hasZ,i.hasM);break;case"polyline":a.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_8__["unquantizePolyline"])(n,i,i,i.hasZ,i.hasM);break;case"extent":case"mesh":a.geometry=i}return a}));return{geometryType:s,features:a,spatialReference:r,fields:e.fields?e.fields.map((e=>_support_Field_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(e))):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function F(e,t,s,r){return{uid:Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_4__["generateUID"])(),objectId:r&&e.attributes?e.attributes[r]:null,attributes:e.attributes,geometry:I(e.geometry,t,s),visible:!0}}function I(e,t,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return null;switch(t){case"point":{const t=e;return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:r}}case"polyline":{const t=e;return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:r}}case"polygon":{const t=e;return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:r}}case"multipoint":{const t=e;return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:r}}}}function v(e,t,s,r){return{x:e,y:t,z:s,hasZ:null!=s,hasM:!1,spatialReference:r,type:"point"}}function R(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return 0;let t=32;switch(e.type){case"point":t+=42;break;case"polyline":case"polygon":{let s=0;const r=2+(e.hasZ?1:0)+(e.hasM?1:0),n="polyline"===e.type?e.paths:e.rings;for(const e of n)s+=e.length;t+=8*s*r+64,t+=128*s,t+=34,t+=32*(n.length+1);break}case"multipoint":{const s=2+(e.hasZ?1:0)+(e.hasM?1:0),r=e.points.length;t+=8*r*s+64,t+=128*r,t+=34,t+=32;break}case"extent":t+=98,e.hasM&&(t+=32),e.hasZ&&(t+=32);break;case"mesh":t+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["estimateSize"])(e.vertexAttributes.position),t+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["estimateSize"])(e.vertexAttributes.normal),t+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["estimateSize"])(e.vertexAttributes.uv),t+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["estimateSize"])(e.vertexAttributes.tangent)}return t}function A(t){let s=32;return s+=Object(_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_0__["estimateAttributesObjectSize"])(t.attributes),s+=3,s+=8+R(t.geometry),s}function w(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function S(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(const t of e.paths)if(t.length>0)return!0;return!1;case"polygon":for(const t of e.rings)if(t.length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return!e.loaded||e.vertexAttributes.position.length>0}}function T(e,t){switch(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["empty"])(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.paths[s],e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.rings[s],e.hasZ);break;case"multipoint":Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function B(e,t){T(e,P),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["expandWithAABB"])(t,P)}function J(e,t){switch(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["empty"])(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["expandWithNestedArray"])(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["expandWithNestedArray"])(t,e.rings[s]);break;case"multipoint":Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["expandWithNestedArray"])(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function L(e,s){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&(J(e,U),Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["expand"])(s,U,s))}function O(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}const P=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["create"])(),U=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["create"])();


/***/ }),

/***/ "NWPx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js ***!
  \**********************************************************************************/
/*! exports provided: equals, pointEquals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointEquals", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return!1}return!0}function t(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function r(e,n){return!!f(e.spatialReference,n.spatialReference)&&(e.x===n.x&&e.y===n.y&&e.z===n.z&&e.m===n.m)}function a(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&t(e.paths,n.paths))}function i(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&t(e.rings,n.rings))}function u(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!f(e.spatialReference,t.spatialReference)&&n(e.points,t.points))}function s(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&(!!f(e.spatialReference,n.spatialReference)&&(e.xmin===n.xmin&&e.ymin===n.ymin&&e.zmin===n.zmin&&e.xmax===n.xmax&&e.ymax===n.ymax&&e.zmax===n.zmax))}function f(e,n){return e===n||e&&n&&e.equals(n)}function l(n,t){if(n===t)return!0;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))return!1;if(n.type!==t.type)return!1;switch(n.type){case"point":return r(n,t);case"extent":return s(n,t);case"polyline":return a(n,t);case"polygon":return i(n,t);case"multipoint":return u(n,t);case"mesh":return!1;default:return}}function c(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const a of t)if(e[a]!==n[a])return!1;return!0}function o(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!l(e.geometry,n.geometry)&&!!c(e.attributes,n.attributes))}


/***/ })

}]);
//# sourceMappingURL=default~views-2d-interactive-editingTools-js~views-3d-interactive-editingTools-js~views-3d-layers-Gr~10d21ce4.js.map