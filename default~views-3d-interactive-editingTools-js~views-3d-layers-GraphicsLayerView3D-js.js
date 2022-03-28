(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-3d-interactive-editingTools-js~views-3d-layers-GraphicsLayerView3D-js"],{

/***/ "+NEi":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/Instance.js ***!
  \*****************************************************************************************/
/*! exports provided: BufferRange, DrawCommand, Instance, addOrMerge, sortInstancesByRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferRange", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawCommand", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instance", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrMerge", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortInstancesByRange", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t){this.first=t.from,this.count=t.to-t.from}}class s{constructor(t=0,s=0){this.from=t,this.to=s}}class o extends s{constructor(t,s,o,r,n,i){super(s,o),this.id=t,this.isVisible=r,this.hasHighlights=n,this.hasOccludees=i}}function r(t){return Array.from(t.values()).sort(n)}function n(t,s){return t.from===s.from?t.to-s.to:t.from-s.from}function i(s,o){if(0===s.length)return void s.push(new t(o));const r=s[s.length-1];if(c(r,o)){const t=o.from-r.first+o.to-o.from;r.count=t}else s.push(new t(o))}function c(t,s){return t.first+t.count>=s.from}


/***/ }),

/***/ "+dDh":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/NestedMap.js ***!
  \*****************************************************/
/*! exports provided: NestedMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedMap", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(t,e){var r;return null==(r=this._outer.get(t))?void 0:r.get(e)}set(t,e,r){const s=this._outer.get(t);s?s.set(e,r):this._outer.set(t,new Map([[e,r]]))}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t))}forEach(t){this._outer.forEach(((e,r)=>t(e,r)))}}


/***/ }),

/***/ "/cm8":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ChangeSet.js ***!
  \**************************************************************************/
/*! exports provided: ChangeSet, MaterialChangeSet, RenderGeometryUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSet", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialChangeSet", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderGeometryUpdate", function() { return s; });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.adds=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"],this.removes=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"],this.updates=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({allocator:e=>e||new s,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class s{}class t{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}


/***/ }),

/***/ "01mo":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/frustum.js ***!
  \***************************************************************/
/*! exports provided: computePlanes, copy, create, createPoints, fromMatrix, intersectClipRay, intersectsAABB, intersectsLineSegment, intersectsPoint, intersectsRay, intersectsSphere, planePointIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computePlanes", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPoints", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMatrix", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectClipRay", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsAABB", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsLineSegment", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsPoint", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsRay", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsSphere", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planePointIndices", function() { return C; });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chunks/vec4.js */ "dXfX");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _clipRay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clipRay.js */ "T4vJ");
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plane.js */ "colF");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function b(t){return t?[Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(t[0]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(t[1]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(t[2]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(t[3]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(t[4]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(t[5])]:[Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])()]}function y(){return[Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()]}function S(t,r=b()){for(let n=0;n<6;n++)Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["copy"])(t[n],r[n])}function w(t,e,c,u=F){const s=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["m"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_8__["sm4d"].get(),e,t);Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["b"])(s,s);for(let r=0;r<8;++r){const t=Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_4__["t"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_8__["sv4d"].get(),D[r],s);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(u[r],t[0]/t[3],t[1]/t[3],t[2]/t[3])}x(c,u)}function x(t,r){Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(r[4],r[0],r[3],t[0]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(r[1],r[5],r[6],t[1]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(r[4],r[5],r[1],t[2]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(r[3],r[2],r[6],t[3]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(r[0],r[1],r[2],t[4]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(r[5],r[4],r[7],t[5])}function O(t,r){for(let n=0;n<6;n++){const o=t[n];if(o[0]*r[0]+o[1]*r[1]+o[2]*r[2]+o[3]>=r[3])return!1}return!0}function R(t,r){return B(t,Object(_clipRay_js__WEBPACK_IMPORTED_MODULE_6__["fromRay"])(r,E.get()))}function d(t,r){for(let n=0;n<6;n++){const o=t[n];if(!Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["clipInfinite"])(o,r))return!1}return!0}function q(t,r,n){return B(t,Object(_clipRay_js__WEBPACK_IMPORTED_MODULE_6__["fromLineSegmentAndDirection"])(r,n,E.get()))}function z(t,r){for(let n=0;n<6;n++){if(Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(t[n],r)>0)return!1}return!0}function A(t,r){for(let n=0;n<6;n++)if(Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["isAABBFullyInside"])(t[n],r))return!1;return!0}function B(t,r){for(let n=0;n<6;n++)if(!Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["clip"])(t[n],r))return!1;return!0}const C={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]},D=[Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(-1,-1,-1,1),Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(1,-1,-1,1),Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(1,1,-1,1),Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(-1,1,-1,1),Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(-1,-1,1,1),Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(1,-1,1,1),Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(1,1,1,1),Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(-1,1,1,1)],E=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__["ObjectStack"](_clipRay_js__WEBPACK_IMPORTED_MODULE_6__["create"]),F=y();


/***/ }),

/***/ "024p":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/ColorMaterial.js ***!
  \************************************************************************************/
/*! exports provided: ColorMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMaterial", function() { return h; });
/* harmony import */ var _lib_GLMaterial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/GLMaterial.js */ "1/dN");
/* harmony import */ var _lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/GLMaterials.js */ "sGEu");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Material.js */ "NbNv");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/DefaultBufferWriter.js */ "hnWO");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _shaders_ColorMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders/ColorMaterialTechnique.js */ "vjhW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_2__["Material"]{constructor(e){super(e,p),this.supportsEdges=!0,this.techniqueConfig=new _shaders_ColorMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_6__["ColorMaterialTechniqueConfiguration"]}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_3__["OITPolygonOffsetLimit"],this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}getPassParameters(){return this.parameters}intersect(e,t,r,s,i,a,n){Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_5__["intersectTriangleGeometry"])(e,t,s,i,a,void 0,n)}requiresSlot(e,r){if(20===e)return!0;if(4===Object(_lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_1__["outputFromPass"])(r))return 2===e;return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output||1===e.output&&this.parameters.writeLinearDepth?new c(e):null}createBufferWriter(){return new _internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_4__["DefaultBufferWriter"](_internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_4__["PositionColorLayout"])}}class c extends _lib_GLMaterial_js__WEBPACK_IMPORTED_MODULE_0__["default"]{updateParameters(e){return this.ensureTechnique(_shaders_ColorMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_6__["ColorMaterialTechnique"],e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.getPassParameters(),e)}}const p={color:[1,1,1,1],transparent:!1,writeDepth:!0,writeLinearDepth:!1,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,..._lib_Material_js__WEBPACK_IMPORTED_MODULE_2__["materialParametersDefaults"]};


/***/ }),

/***/ "08/N":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/hydratedFeatures.js ***!
  \***********************************************************************/
/*! exports provided: clonePoint, hydrateGeometry, hydrateGraphic, isHydratedGeometry, isHydratedGraphic, isHydratedPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clonePoint", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateGeometry", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateGraphic", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHydratedGeometry", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHydratedGraphic", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHydratedPoint", function() { return u; });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dehydratedFeatures.js */ "GlSV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e){return"declaredClass"in e}function u(e){return"declaredClass"in e}function l(e){return"declaredClass"in e}function c(r,t){if(!r)return null;if(l(r))return r;const s=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]({layer:t,sourceLayer:t});return s.visible=r.visible,s.symbol=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(r.symbol),s.attributes=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(r.attributes),s.geometry=f(r.geometry),s}function f(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(e)?null:m(e)?e:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__["fromJSON"])(h(e))}function h(e){const n=e.spatialReference.toJSON();switch(e.type){case"point":{const{x:r,y:t,z:s,m:a}=e;return{x:r,y:t,z:s,m:a,spatialReference:n}}case"polygon":{const{rings:r,hasZ:t,hasM:s}=e;return{rings:p(r),hasZ:t,hasM:s,spatialReference:n}}case"polyline":{const{paths:r,hasZ:t,hasM:s}=e;return{paths:p(r),hasZ:t,hasM:s,spatialReference:n}}case"extent":{const{xmin:r,xmax:t,ymin:s,ymax:a,zmin:i,zmax:o,mmin:m,mmax:u,hasZ:l,hasM:c}=e;return{xmin:r,xmax:t,ymin:s,ymax:a,zmin:i,zmax:o,mmin:m,mmax:u,hasZ:l,hasM:c,spatialReference:n}}case"multipoint":{const{points:r,hasZ:t,hasM:s}=e;return{points:M(r)?y(r):r,hasZ:t,hasM:s,spatialReference:n}}default:return}}function p(e){return x(e)?e.map((e=>y(e))):e}function y(e){return e.map((e=>Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_4__["toArray"])(e)))}function x(e){for(const n of e)if(0!==n.length)return M(n);return!1}function M(e){return e.length&&(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_4__["isFloat32Array"])(e[0])||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_4__["isFloat64Array"])(e[0]))}function Z(e,n){if(!e)return null;let r;if(u(e)){if(null==n)return e.clone();if(u(n))return n.copy(e)}return null!=n?(r=n,r.x=e.x,r.y=e.y,r.spatialReference=e.spatialReference,e.hasZ?(r.z=e.z,r.hasZ=e.hasZ):(r.z=null,r.hasZ=!1),e.hasM?(r.m=e.m,r.hasM=!0):(r.m=null,r.hasM=!1)):(r=Object(_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__["makeDehydratedPoint"])(e.x,e.y,e.z,e.spatialReference),e.hasM&&(r.m=e.m,r.hasM=!0)),r}


/***/ }),

/***/ "0MsP":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl.js ***!
  \********************************************************************************************/
/*! exports provided: HUD, bindHUDUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUD", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindHUDUniforms", function() { return a; });
/* harmony import */ var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ScreenSizePerspective.glsl.js */ "L5gG");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,a){const i=o;i.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ScreenSizePerspective"]),i.attributes.add("position","vec3"),i.attributes.add("normal","vec3"),i.attributes.add("auxpos1","vec4"),i.vertex.uniforms.add("proj","mat4"),i.vertex.uniforms.add("view","mat4"),i.vertex.uniforms.add("viewNormal","mat4"),i.vertex.uniforms.add("viewport","vec4"),i.vertex.uniforms.add("camPos","vec3"),i.vertex.uniforms.add("polygonOffset","float"),i.vertex.uniforms.add("cameraGroundRelative","float"),i.vertex.uniforms.add("pixelRatio","float"),i.vertex.uniforms.add("perDistancePixelRatio","float"),i.vertex.uniforms.add("uRenderTransparentlyOccludedHUD","float"),a.verticalOffsetEnabled&&i.vertex.uniforms.add("verticalOffset","vec4"),a.screenSizePerspectiveEnabled&&i.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),i.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),i.vertex.constants.add("smallOffsetAngle","float",.984807753012208),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),a.isDraped||i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${a.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(camPos - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${a.screenSizePerspectiveEnabled&&(a.verticalOffsetEnabled||1===a.screenCenterOffsetUnitsEnabled)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${a.verticalOffsetEnabled?a.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${a.verticalOffsetEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${1!==a.screenCenterOffsetUnitsEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${1===a.screenCenterOffsetUnitsEnabled?a.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${1===a.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (uRenderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * uRenderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function a(e,t){e.setUniform1f("uRenderTransparentlyOccludedHUD",0===t.renderTransparentlyOccludedHUD?1:1===t.renderTransparentlyOccludedHUD?0:.75)}


/***/ }),

/***/ "0W97":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BufferVectorMath.js ***!
  \*********************************************************************************/
/*! exports provided: Vec3Compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3Compact", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n;!function(n){function t(n,t){const c=n[t],o=n[t+1],r=n[t+2];return Math.sqrt(c*c+o*o+r*r)}function c(n,t){const c=n[t],o=n[t+1],r=n[t+2],u=1/Math.sqrt(c*c+o*o+r*r);n[t]*=u,n[t+1]*=u,n[t+2]*=u}function o(n,t,c){n[t]*=c,n[t+1]*=c,n[t+2]*=c}function r(n,t,c,o,r,u=t){(r=r||n)[u]=n[t]+c[o],r[u+1]=n[t+1]+c[o+1],r[u+2]=n[t+2]+c[o+2]}function u(n,t,c,o,r,u=t){(r=r||n)[u]=n[t]-c[o],r[u+1]=n[t+1]-c[o+1],r[u+2]=n[t+2]-c[o+2]}n.length=t,n.normalize=c,n.scale=o,n.add=r,n.subtract=u}(n||(n={}));


/***/ }),

/***/ "1AhW":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/lineUtils.js ***!
  \*************************************************************************/
/*! exports provided: createGeometry, geometryToRenderInfo, geometryToRenderInfoDraped, parseCapType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometry", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometryToRenderInfo", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometryToRenderInfoDraped", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCapType", function() { return q; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/projectionEllipsoid.js */ "9pTf");
/* harmony import */ var _geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/triangulationUtils.js */ "FmYZ");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants.js */ "7XBC");
/* harmony import */ var _elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elevationAlignmentUtils.js */ "Lg+x");
/* harmony import */ var _terrain_OverlayRenderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../terrain/OverlayRenderer.js */ "dYU4");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "Ango");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j(t){const e=[],o=[];v(t,o,e);const r=o[0][1].data,n=e[0][1].length,a=new Uint16Array(n);return w(t,o,e),D(t,o,e,a),P(t,o,e,a),I(t,o,e,a),S(t,o,e,a),U(t,o,e,a),M(t,o,e,r),R(t,o,e,r),new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_13__["Geometry"](o,e,2)}function z(t,e,o,r){const n="polygon"===t.type?1:0,a="polygon"===t.type?t.rings:t.paths,{position:i,outlines:s}=Object(_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_9__["pathsToTriangulationInfo"])(a,t.hasZ,n),u=new Float64Array(i.length),c=Object(_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_11__["applyPerVertexElevationAlignment"])(i,t.spatialReference,0,u,0,i,0,i.length/3,e,o,r),p=null!=c;return{lines:p?A(s,i,u):[],projectionSuccess:p,sampledElevation:c}}function A(t,e,o){const r=new Array;for(const{index:n,count:a}of t){if(a<=1)continue;const t=3*n,i=t+3*a;r.push({position:e.subarray(t,i),mapPosition:o?o.subarray(t,i):void 0})}return r}function F(t,e){const o="polygon"===t.type?1:0,r="polygon"===t.type?t.rings:t.paths,{position:n,outlines:a}=Object(_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_9__["pathsToTriangulationInfo"])(r,!1,o),i=Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["projectBuffer"])(n,t.spatialReference,0,n,e,0,n.length/3);for(let s=2;s<n.length;s+=3)n[s]=_terrain_OverlayRenderer_js__WEBPACK_IMPORTED_MODULE_12__["DRAPED_Z"];return{lines:i?A(a,n):[],projectionSuccess:i}}function v(t,e,o){const{attributeData:{position:r},removeDuplicateStartEnd:a}=t,i=k(r)&&1===a,s=r.length/3-(i?1:0),u=new Uint32Array(2*(s-1)),c=i?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__["slice"])(r,0,r.length-3):r;let p=0;for(let n=0;n<s-1;n++)u[p++]=n,u[p++]=n+1;e.push(["position",{size:3,data:c,exclusive:i}]),o.push(["position",u])}function w(t,o,r){const n=t.attributeData.mapPosition;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(n)||(r.push(["mapPos",r[0][1]]),o.push(["mapPos",{size:3,data:n}]))}function D(t,e,n,a){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t.attributeData.colorFeature))return;const i=t.attributeData.color;e.push(["color",{size:4,data:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(i,_constants_js__WEBPACK_IMPORTED_MODULE_10__["WHITE_UNIT"])}]),n.push(["color",a])}function I(t,o,r,n){const a=t.attributeData.colorFeature;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(a)||(o.push(["colorFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["color",n]))}function P(t,e,n,a){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t.attributeData.sizeFeature))return;const i=t.attributeData.size;e.push(["size",{size:1,data:[Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(i,1)]}]),n.push(["size",a])}function S(t,o,r,n){const a=t.attributeData.sizeFeature;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(a)||(o.push(["sizeFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["sizeFeatureAttribute",n]))}function U(t,o,r,n){const a=t.attributeData.opacityFeature;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(a)||(o.push(["opacityFeatureAttribute",{size:1,data:new Float32Array([a])}]),r.push(["opacityFeatureAttribute",n]))}function M(e,o,n,a){if("round"!==e.join)return;const p=a.length/3,l=new Float32Array(p),f=E,h=G;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(f,0,0,0);const m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(e.uniformSize,1);for(let r=-1;r<p;++r){const e=r<0?p+r:r,o=(r+1)%p;if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(h,a[3*o+0]-a[3*e+0],a[3*o+1]-a[3*e+1],a[3*o+2]-a[3*e+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["n"])(h,h),r>=0){const e=1*((Math.PI-Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["acosClamped"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(f,h)))*T)*x(m);l[r]=Math.max(Math.floor(e),0)}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(f,h,-1)}o.push(["subdivisions",{size:1,data:l}]),n.push(["subdivisions",n[0][1]])}function R(t,o,r,n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t.overlayInfo)||1!==t.overlayInfo.renderCoordsHelper.viewingMode||!t.overlayInfo.spatialReference.isGeographic)return;const s=new Float64Array(n.length),u=Object(_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__["getReferenceEllipsoid"])(t.overlayInfo.spatialReference);for(let e=0;e<s.length;e+=3)Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["lonLatToWebMercatorComparable"])(n,e,s,e,u);const c=n.length/3,p=new Float32Array(c+1);let l=E,m=G,y=0,d=0;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(l,s[d++],s[d++],s[d++]),p[0]=0;for(let e=1;e<c+1;++e)e===c&&(d=0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(m,s[d++],s[d++],s[d++]),y+=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__["d"])(l,m),p[e]=y,[l,m]=[m,l];o.push(["distanceToStart",{size:1,data:p}]),r.push(["distanceToStart",r[0][1]])}function x(t){return 1.863798+-2.0062872/(1+t/18.2313)**.8856294}function k(t){const e=t.length;return t[0]===t[e-3]&&t[1]===t[e-2]&&t[2]===t[e-1]}const E=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),G=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),T=4/Math.PI;function q(t){switch(t){case"butt":return 0;case"square":return 1;case"round":return 2;default:return null}}


/***/ }),

/***/ "1R3H":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js ***!
  \****************************************************************************************/
/*! exports provided: combineLights, computeCoefficients, initSHCoefficients, numberOfCoefficients, orderFromNumberOfCoefficients, projectAmbientLights, projectFillLights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLights", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeCoefficients", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSHCoefficients", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfCoefficients", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderFromNumberOfCoefficients", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectAmbientLights", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectFillLights", function() { return p; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/LongVectorMath.js */ "snuX");
/* harmony import */ var _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lightsources.js */ "K8k0");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t){return(t+1)*(t+1)}function l(n){return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.floor(Math.sqrt(n)-1),0,2)}function y(t,n,o){const i=t[0],s=t[1],r=t[2],e=o||[];return e.length=g(n),n>=0&&(e[0]=.28209479177),n>=1&&(e[1]=.4886025119*i,e[2]=.4886025119*r,e[3]=.4886025119*s),n>=2&&(e[4]=1.09254843059*i*s,e[5]=1.09254843059*s*r,e[6]=.31539156525*(3*r*r-1),e[7]=1.09254843059*i*r,e[8]=.54627421529*(i*i-s*s)),e}function m(t,n){const o=g(t),i=n||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=o;for(let s=0;s<o;s++)i.r[s]=i.g[s]=i.b[s]=0;return i}function p(t,o){const i=l(o.r.length);for(const s of t)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["o"])(v,s.direction),y(v,i,P),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["elementwiseProduct"])(P,w),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["scalarProduct"])(P,s.intensity[0],k),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["add"])(o.r,k),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["scalarProduct"])(P,s.intensity[1],k),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["add"])(o.g,k),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["scalarProduct"])(P,s.intensity[2],k),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["add"])(o.b,k);return o}function b(t,n){y(v,0,P);for(const o of t)n.r[0]+=P[0]*w[0]*o.intensity[0]*4*Math.PI,n.g[0]+=P[0]*w[0]*o.intensity[1]*4*Math.PI,n.b[0]+=P[0]*w[0]*o.intensity[2]*4*Math.PI;return n}function M(t,n,s,r){m(n,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(s.intensity,0,0,0);let e=!1;const g=d,l=j,y=I;g.length=0,l.length=0,y.length=0;for(const o of t)o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__["MainLight"]&&!e?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(s.direction,o.direction),s.intensity[0]=o.intensity[0],s.intensity[1]=o.intensity[1],s.intensity[2]=o.intensity[2],s.castShadows=o.castShadows,e=!0):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__["MainLight"]||o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__["FillLight"]?g.push(o):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__["AmbientLight"]?l.push(o):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__["SphericalHarmonicsAmbientLight"]&&y.push(o);p(g,r),b(l,r);for(const o of y)Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["add"])(r.r,o.r),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["add"])(r.g,o.g),Object(_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__["add"])(r.b,o.b)}const d=[],j=[],I=[],P=[0],k=[0],v=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),w=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];


/***/ }),

/***/ "1uVU":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderContext.js ***!
  \******************************************************************************/
/*! exports provided: OverlayRenderContext, RenderContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRenderContext", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderContext", function() { return t; });
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera.js */ "FxzD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e){this.rctx=e,this.camera=null,this.lastFrameCamera=new _Camera_js__WEBPACK_IMPORTED_MODULE_0__["default"],this.pass=0,this.slot=2,this.highlightDepthTexture=null,this.renderOccludedMask=r,this.hasOccludees=!1}resetRenderOccludedMask(){this.renderOccludedMask=r}get isHighlightPass(){return 5===this.pass}}class t extends e{constructor(s,e,t,r,i,h){super(s),this.offscreenRenderingHelper=e,this.scenelightingData=t,this.shadowMap=r,this.ssaoHelper=i,this.sliceHelper=h}}const r=13;


/***/ }),

/***/ "2YHA":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/FoamRendering.glsl.js ***!
  \**********************************************************************************************************/
/*! exports provided: FoamColor, FoamIntensity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoamColor", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoamIntensity", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function n(o){o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}


/***/ }),

/***/ "33ep":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceReflections.glsl.js ***!
  \*******************************************************************************************************************/
/*! exports provided: ScreenSpaceReflections, bindSSRUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSpaceReflections", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSSRUniforms", function() { return i; });
/* harmony import */ var _output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _Reprojection_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reprojection.glsl.js */ "gnSc");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(o,a){o.fragment.uniforms.add("nearFar","vec2"),o.fragment.uniforms.add("depthMapView","sampler2D"),o.fragment.uniforms.add("ssrViewMat","mat4"),o.fragment.uniforms.add("invResolutionHeight","float"),o.fragment.include(_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ReadLinearDepth"]),o.include(_Reprojection_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Reprojection"]),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
  const int maxSteps = ${a.highStepCount?"150;":"75;"}

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(rpProjectionMat, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMapView, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
          return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}function i(e,t){t.ssrEnabled&&(e.bindTexture(t.linearDepthTexture,"depthMapView"),e.setUniform2fv("nearFar",t.camera.nearFar),e.setUniformMatrix4fv("ssrViewMat",t.camera.viewMatrix),e.setUniform1f("invResolutionHeight",1/t.camera.height),Object(_Reprojection_glsl_js__WEBPACK_IMPORTED_MODULE_1__["bindReprojectionUniforms"])(e,t))}


/***/ }),

/***/ "3ohZ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterialTechnique.js ***!
  \*****************************************************************************************/
/*! exports provided: HUDMaterialTechnique, HUDMaterialTechniqueConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUDMaterialTechnique", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUDMaterialTechniqueConfiguration", function() { return U; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/hud/HUD.glsl.js */ "0MsP");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _core_shaderLibrary_shading_MultipassGeometryTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/shading/MultipassGeometryTest.glsl.js */ "lhfp");
/* harmony import */ var _core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/util/ScreenSizePerspective.glsl.js */ "L5gG");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "jpeq");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../chunks/HUDMaterial.glsl.js */ "DZYy");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class j extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_11__["ShaderTechnique"]{initializeProgram(e){const r=j.shader.get(),t=this.configuration,i=r.build({output:t.output,FrontFacePass:2===t.transparencyPassType,viewingMode:e.viewingMode,occlusionTestEnabled:t.occlusionTestEnabled,signedDistanceFieldEnabled:t.sdf,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,debugDrawBorder:t.debugDrawBorder,binaryHighlightOcclusionEnabled:t.binaryHighlightOcclusion,screenCenterOffsetUnitsEnabled:t.screenCenterOffsetUnitsEnabled,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,pixelSnappingEnabled:t.pixelSnappingEnabled,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!1,isDraped:t.isDraped,multipassGeometryEnabled:t.multipassGeometryEnabled,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_15__["Program"](e.rctx,i,_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_13__["Default3D"])}bindPass(e,r){Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_9__["bindProjectionMatrix"])(this.program,r.camera.projectionMatrix),this.program.setUniform1f("cameraGroundRelative",r.camera.aboveGround?1:-1),this.program.setUniform1f("perDistancePixelRatio",Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",r.camera.viewInverseTransposeMatrix),this.program.setUniform1f("polygonOffset",e.shaderPolygonOffset),Object(_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_2__["bindVerticalOffsetUniforms"])(this.program,e,r),Object(_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_8__["bindScreenSizePerspectiveUniforms"])(this.program,e),this.program.setUniform1f("pixelRatio",r.camera.pixelRatio||1),Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_9__["bindViewport"])(this.program,r),6===this.configuration.output?(this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),this.program.setUniform2fv("inverseViewport",r.inverseViewport),Object(_core_shaderLibrary_shading_MultipassGeometryTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__["bindMultipassGeometryTexture"])(this.program,r),Object(_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_6__["bindMultipassTerrainTexture"])(this.program,r)):(Object(_core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_3__["bindHUDUniforms"])(this.program,r),Object(_chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_16__["b"])(this.program,e,r.camera.pixelRatio||1),Object(_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_7__["bindVisualVariablesUniforms"])(this.program,e),this.configuration.occlusionTestEnabled&&this.program.bindTexture(r.hudVisibilityTexture,"hudVisibilityTexture")),4===this.configuration.output&&Object(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindOutputHighlight"])(this.program,r)}bindDraw(e){Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_9__["bindView"])(this.program,e),Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_9__["bindCameraPosition"])(this.program,e.origin,e.camera.viewInverseTransposeMatrix),Object(_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["bindSliceUniformsWithOrigin"])(this.program,this.configuration,e),this.program.rebindTextures()}setPipelineState(e){const r=this.configuration,t=3===e,i=2===e,o=515,s=this.configuration.polygonOffsetEnabled&&w,a=(t||i)&&4!==r.output?(r.depthEnabled||6===r.output)&&_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_17__["defaultDepthWriteParams"]:null;return Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_17__["makePipelineState"])({blending:0===r.output||7===r.output||4===r.output?t?D:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["OITBlending"])(e):null,depthTest:{func:o},depthWrite:a,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_17__["defaultColorWriteParams"],polygonOffset:s})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return 6===this.configuration.output?0:4}}j.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_10__["ReloadableShaderModule"](_chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_16__["H"],(()=>__webpack_require__.e(/*! import() | HUDMaterial-glsl-js */ "HUDMaterial-glsl-js").then(__webpack_require__.bind(null, /*! ./HUDMaterial.glsl.js */ "b6MZ"))));const w={factor:0,units:-4},D=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_17__["simpleBlendingParams"])(1,771);class U extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.output=0,this.occlusionTestEnabled=!0,this.sdf=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.screenSizePerspective=!1,this.screenCenterOffsetUnitsEnabled=0,this.debugDrawBorder=!1,this.binaryHighlightOcclusion=!0,this.slicePlaneEnabled=!1,this.polygonOffsetEnabled=!1,this.depthEnabled=!0,this.transparencyPassType=3,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.multipassGeometryEnabled=!1,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])({count:8})],U.prototype,"output",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"occlusionTestEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"sdf",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"vvSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"vvColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"verticalOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"screenSizePerspective",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])({count:2})],U.prototype,"screenCenterOffsetUnitsEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"debugDrawBorder",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"binaryHighlightOcclusion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"slicePlaneEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"polygonOffsetEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"depthEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])({count:4})],U.prototype,"transparencyPassType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"pixelSnappingEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"isDraped",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"multipassGeometryEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"multipassTerrainEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_12__["parameter"])()],U.prototype,"cullAboveGround",void 0);


/***/ }),

/***/ "3zY3":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/MergedGeometryBufferPool.js ***!
  \*********************************************************************************************************/
/*! exports provided: MergedGeometryBufferPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergedGeometryBufferPool", function() { return s; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_MemCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/MemCache.js */ "rvq7");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/uid.js */ "8uAX");
/* harmony import */ var _lib_StaticFloat32ArrayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/StaticFloat32ArrayObject.js */ "c2z5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=_core_MemCache_js__WEBPACK_IMPORTED_MODULE_1__["MIN_PRIORITY"]+1;class s{constructor(t,e,o){this._rctx=t,this._locations=e,this._layout=o,this._cache=t.newCache(`MergedRenderer pool ${Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_2__["generateUID"])()}`,h)}dispose(){this._cache.destroy()}newBuffer(e){const r=e.toString(),s=this._cache.pop(r);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)){const t=s.pop();return s.length>0&&this._cache.put(r,s,t.array.byteLength*s.length,c),t}return new _lib_StaticFloat32ArrayObject_js__WEBPACK_IMPORTED_MODULE_3__["StaticFloat32ArrayObject"](this._rctx,this._locations,this._layout,e)}deleteBuffer(e){const r=e.array.byteLength,o=e.array.length.toString(),c=this._cache.pop(o);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c)?(c.push(e),this._cache.put(o,c,r*c.length,-1)):this._cache.put(o,[e],r,-1),null}}function h(t,e){if(0===e)return void t.forEach((t=>t.dispose()));const r=t.pop(),o=t.length*r.array.byteLength;return r.dispose(),o}


/***/ }),

/***/ "5VCU":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl.js ***!
  \**************************************************************************************************/
/*! exports provided: Water */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Water", function() { return a; });
/* harmony import */ var _FoamRendering_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoamRendering.glsl.js */ "2YHA");
/* harmony import */ var _Gamma_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gamma.glsl.js */ "8Vmw");
/* harmony import */ var _PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _ScreenSpaceReflections_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScreenSpaceReflections.glsl.js */ "33ep");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a,n){a.include(_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_2__["PhysicallyBasedRendering"],n),a.include(_Gamma_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Gamma"]),a.include(_FoamRendering_glsl_js__WEBPACK_IMPORTED_MODULE_0__["FoamColor"]),n.ssrEnabled&&a.include(_ScreenSpaceReflections_glsl_js__WEBPACK_IMPORTED_MODULE_3__["ScreenSpaceReflections"],n),a.fragment.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.775).add("waterSeeColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]),a.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__["glsl"]`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),a.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__["glsl"]`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 positionView) {
float reflectionHit = 0.;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}`),n.ssrEnabled?a.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__["glsl"]`vec4 viewPosition = vec4(positionView.xyz, 1.0);
vec3 viewDir = normalize(viewPosition.xyz);
vec4 viewNormalVectorCoordinate = ssrViewMat *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = ssrViewMat *vec4(localUp, 0.0);
float correctionViewingFactor = pow(max(dot(-viewDir, viewUp.xyz), 0.0), correctionViewingPowerFactor);
vec3 viewNormalCorrected = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrected));
vec3 hitCoordinate = screenSpaceIntersection( normalize(reflected), viewPosition.xyz, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -positionView.z);
reflectionHit = waterDiffusion * clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHit * fresnelModifier.y * ssrIntensity;
}
float seeColorMod =  mix(waterSeeColorMod, waterSeeColorMod*0.5, reflectionHit);
return tonemapACES((1. - reflectionHit) * reflSky + reflectedColor + reflSea * seeColorMod + specular + foam);
}`):a.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__["glsl"]`return tonemapACES(reflSky + reflSea * waterSeeColorMod + specular + foam);
}`)}


/***/ }),

/***/ "5qpZ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl.js ***!
  \********************************************************************************************************************/
/*! exports provided: RibbonVertexPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RibbonVertexPosition", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,i){t.vertex.uniforms.add("intrinsicWidth","float"),i.vvSize?(t.attributes.add("sizeFeatureAttribute","float"),t.vertex.uniforms.add("vvSizeMinSize","vec3"),t.vertex.uniforms.add("vvSizeMaxSize","vec3"),t.vertex.uniforms.add("vvSizeOffset","vec3"),t.vertex.uniforms.add("vvSizeFactor","vec3"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add("size","float"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float getSize(){
return intrinsicWidth * size;
}`)),i.vvOpacity?(t.attributes.add("opacityFeatureAttribute","float"),t.vertex.constants.add("vvOpacityNumber","int",8),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 applyOpacity( vec4 color ){
return color;
}`),i.vvColor?(t.attributes.add("colorFeatureAttribute","float"),t.vertex.constants.add("vvColorNumber","int",8),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(t.attributes.add("color","vec4"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 getColor(){
return applyOpacity(color);
}`))}


/***/ }),

/***/ "6dbX":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/featureExpressionInfoUtils.js ***!
  \******************************************************************************************/
/*! exports provided: clone, createContext, createContextWithoutExpressionSupport, createFeature, execute, extractExpressionInfo, setContextFeature, zeroContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContextWithoutExpressionSupport", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeature", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractExpressionInfo", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContextFeature", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroContext", function() { return d; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/graphics/hydratedFeatures.js */ "08/N");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../support/arcadeOnDemand.js */ "gvqN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function c(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}function o(e){const t=e&&e.expression;if("string"==typeof t){const e=p(t);if(null!=e)return{cachedResult:e}}return null}async function a(e,t,n){const c=e&&e.expression;if("string"!=typeof c)return null;const o=p(c);if(null!=o)return{cachedResult:o};const a=await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__["loadArcade"])(),u=a.arcadeUtils,s=u.createSyntaxTree(c);return u.dependsOnView(s)?(null!=n&&n.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:u.createFunction(s),context:u.createExecContext(null,{sr:t}),modules:a}}}function u(e,t,r){return e.arcadeUtils.createFeature(t.attributes,t.geometry,r)}function s(e,r){if(null!=e&&!f(e)){if(!r||!e.arcade)return void n.errorOncePerTick("Arcade support required but not provided");const c=r;c._geometry&&(c._geometry=Object(_layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_1__["hydrateGeometry"])(c._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,r)}}function l(e){if(null!=e){if(f(e))return e.cachedResult;const t=e.arcade;let r=e.arcade.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0}function i(e,t=!1){let r=e&&e.featureExpressionInfo;const n=r&&r.expression;return t||"0"===n||(r=null),r}const d={cachedResult:0};function f(e){return null!=e.cachedResult}function p(e){return"0"===e?0:null}


/***/ }),

/***/ "6kRo":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/WaterSurface.glsl.js ***!
  \***************************************************************/
/*! exports provided: W, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return p; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "vXUg");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl.js */ "BAva");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Water_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl.js */ "5VCU");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_WaterDistortion_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl.js */ "M+I8");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js */ "Q3fD");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(p){const u=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_13__["ShaderBuilder"];return u.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Transform"],{linearDepth:!1}),u.attributes.add("position","vec3"),u.attributes.add("uv0","vec2"),u.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),u.vertex.uniforms.add("waterColor","vec4"),0!==p.output&&7!==p.output||(u.include(_views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__["NormalUtils"],p),u.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ForwardLinearDepth"],p),u.varyings.add("vuv","vec2"),u.varyings.add("vpos","vec3"),u.varyings.add("vnormal","vec3"),u.varyings.add("vtbnMatrix","mat3"),p.multipassTerrainEnabled&&u.varyings.add("depth","float"),u.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`
      void main(void) {
        if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_10__["symbolAlphaCutoff"])}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${p.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${0===p.output?"forwardLinearDepth();":""}
      }
    `)),p.multipassTerrainEnabled&&(u.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_4__["ReadLinearDepth"]),u.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__["multipassTerrainTest"],p)),7===p.output&&(u.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Slice"],p),u.fragment.uniforms.add("waterColor","vec4"),u.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`
        void main() {
          discardBySlice(vpos);
          ${p.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),0===p.output&&(u.include(_views_3d_webgl_engine_core_shaderLibrary_shading_WaterDistortion_glsl_js__WEBPACK_IMPORTED_MODULE_9__["WaterDistortion"],p),u.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Slice"],p),p.receiveShadows&&u.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_7__["ReadShadowMap"],p),u.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Water_glsl_js__WEBPACK_IMPORTED_MODULE_8__["Water"],p),u.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),u.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_11__["ColorConversion"]),u.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${p.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - camPos);
        float shadow = ${p.receiveShadows?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${p.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),2===p.output&&(u.include(_views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__["NormalUtils"],p),u.include(_views_3d_webgl_engine_core_shaderLibrary_shading_WaterDistortion_glsl_js__WEBPACK_IMPORTED_MODULE_9__["WaterDistortion"],p),u.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Slice"],p),u.varyings.add("vpos","vec3"),u.varyings.add("vuv","vec2"),u.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`
        void main(void) {
          if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_10__["symbolAlphaCutoff"])}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),u.fragment.uniforms.add("timeElapsed","float"),u.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`)),5===p.output&&(u.varyings.add("vpos","vec3"),u.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`
        void main(void) {
          if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_10__["symbolAlphaCutoff"])}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),u.fragment.uniforms.add("waterColor","vec4"),u.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`void main() {
gl_FragColor = waterColor;
}`)),4===p.output&&(u.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__["OutputHighlight"]),u.varyings.add("vpos","vec3"),u.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`
      void main(void) {
        if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_10__["symbolAlphaCutoff"])}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),u.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Slice"],p),u.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_12__["glsl"]`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),u}const u=Object.freeze({__proto__:null,build:p});


/***/ }),

/***/ "7XBC":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/constants.js ***!
  \*************************************************************************/
/*! exports provided: SUSPEND_RESUME_EXTENT_OPTIMISM, TRANSPARENT_UNIT, WHITE_UNIT, defaultIconElevationOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUSPEND_RESUME_EXTENT_OPTIMISM", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSPARENT_UNIT", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE_UNIT", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIconElevationOffset", function() { return c; });
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=1,r=1.2,t=_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__["Z"],a=_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__["O"];


/***/ }),

/***/ "8AY/":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/SortedRenderGeometryRenderer.js ***!
  \*********************************************************************************************/
/*! exports provided: SortedRenderGeometryRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortedRenderGeometryRenderer", function() { return o; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/MapUtils.js */ "KOts");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _ChangeSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChangeSet.js */ "/cm8");
/* harmony import */ var _rendererUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rendererUtils.js */ "ne8S");
/* harmony import */ var _materials_renderers_MergedRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../materials/renderers/MergedRenderer.js */ "GRr4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this._pending=new l,this._changes=new _ChangeSet_js__WEBPACK_IMPORTED_MODULE_9__["ChangeSet"],this._materialRenderers=new Map,this._sortedMaterialRenderers=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_3__["default"],this._hasHighlights=!1,this._hasWater=!1}dispose(){this._changes.prune(),this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__["someMap"])(this._materialRenderers,(e=>e.rendersOccluded))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=Object(_rendererUtils_js__WEBPACK_IMPORTED_MODULE_10__["splitRenderGeometryChangeSetByMaterial"])(this._changes);let r=!1,s=!1,i=!1;return e.forEach(((e,t)=>{let a=this._materialRenderers.get(t);if(!a&&e.adds.length>0&&(a=new _materials_renderers_MergedRenderer_js__WEBPACK_IMPORTED_MODULE_11__["MergedRenderer"](this.rctx,this.materialRepository,t),this._materialRenderers.set(t,a),r=!0,s=!0,i=!0),!a)return;const n=s||a.hasHighlights,d=i||a.hasWater;a.modify(e),s=s||n!==a.hasHighlights,i=i||d!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(t),a.dispose(),r=!0)})),this._changes.clear(),r&&this.updateSortedMaterialRenderers(),s&&(this._hasHighlights=Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__["someMap"])(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__["someMap"])(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}add(e){if(0===e.length)return;const r=this._pending.empty;for(const t of e)this._pending.adds.add(t);r&&this.notifyChange("updating")}remove(e){const r=this._pending.empty;for(const t of e)this._pending.adds.has(t)?(this._pending.removed.add(t),this._pending.adds.delete(t)):this._pending.removed.has(t)||this._pending.removes.add(t);r&&!this._pending.empty&&this.notifyChange("updating")}modify(e,r){const t=0===this._changes.updates.length;for(const s of e){const e=this._changes.updates.pushNew();e.renderGeometry=s,e.updateType=r}t&&this._changes.updates.length>0&&this.notifyChange("updating")}updateLogic(e){let r=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:t})=>r=t.updateLogic(e)||r)),r}render(e,r){for(let t=0;t<this._sortedMaterialRenderers.length;t++){const s=this._sortedMaterialRenderers.data[t];s.material.shouldRender(e)&&s.materialRenderer.render(r.slot,e.pass,r)}}updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((r,t)=>{t.insertOrder=e++,this._sortedMaterialRenderers.push({material:t,materialRenderer:r})})),this._sortedMaterialRenderers.sort(((e,r)=>{const t=r.material.renderPriority-e.material.renderPriority;return 0!==t?t:e.material.insertOrder-r.material.insertOrder}))}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let e=0;e<this._changes.updates.length;){const r=this._changes.updates.data[e];this._pending.has(r.renderGeometry)?this._changes.updates.removeUnorderedIndex(e):e++}this._pending.clear()}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],o.prototype,"rctx",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],o.prototype,"materialRepository",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],o.prototype,"updating",null),o=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],o);class l{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}


/***/ }),

/***/ "8Vmw":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl.js ***!
  \**************************************************************************************************/
/*! exports provided: Gamma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gamma", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}


/***/ }),

/***/ "9JiU":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/WaterTechnique.js ***!
  \*************************************************************************************/
/*! exports provided: WaterTechnique, WaterTechniqueConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterTechnique", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterTechniqueConfiguration", function() { return E; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _core_shaderLibrary_shading_ScreenSpaceReflections_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ScreenSpaceReflections.glsl.js */ "33ep");
/* harmony import */ var _core_shaderLibrary_shading_WaterDistortion_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/shading/WaterDistortion.glsl.js */ "M+I8");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "jpeq");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _chunks_WaterSurface_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/WaterSurface.glsl.js */ "6kRo");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class x extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_9__["ShaderTechnique"]{constructor(r,t,e){super(r,t,e),this._textureRepository=r.waterTextureRepository}initializeProgram(r){const t=x.shader.get(),e=this.configuration,i=t.build({OITEnabled:0===e.transparencyPassType,output:e.output,viewingMode:r.viewingMode,slicePlaneEnabled:e.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:e.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:e.useSSR,highStepCount:!0,multipassTerrainEnabled:e.multipassTerrainEnabled,cullAboveGround:e.cullAboveGround});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_13__["Program"](r.rctx,i,_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_11__["Default3D"])}bindPass(r,t){Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__["bindProjectionMatrix"])(this.program,t.camera.projectionMatrix),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_3__["bindMultipassTerrainTexture"])(this.program,t)),0===this.configuration.output&&(t.lighting.setUniforms(this.program,!1),Object(_core_shaderLibrary_shading_ScreenSpaceReflections_glsl_js__WEBPACK_IMPORTED_MODULE_5__["bindSSRUniforms"])(this.program,t)),0!==this.configuration.output&&2!==this.configuration.output||(Object(_core_shaderLibrary_shading_WaterDistortion_glsl_js__WEBPACK_IMPORTED_MODULE_6__["bindWaterDistortionUniforms"])(this.program,r),this._textureRepository.bind(this.program)),this.program.setUniform4fv("waterColor",r.color),4===this.configuration.output&&Object(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_2__["bindOutputHighlight"])(this.program,t)}bindDraw(r){Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__["bindView"])(this.program,r),this.program.rebindTextures(),0!==this.configuration.output&&7!==this.configuration.output||Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__["bindCameraPosition"])(this.program,r.origin,r.camera.viewInverseTransposeMatrix),0===this.configuration.output&&Object(_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindReadShadowMapUniforms"])(this.program,r),0!==this.configuration.output&&7!==this.configuration.output&&4!==this.configuration.output||Object(_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["bindSliceUniformsWithOrigin"])(this.program,this.configuration,r)}setPipelineState(r){const t=this.configuration,e=3===r,i=2===r;return Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_15__["makePipelineState"])({blending:2!==t.output&&4!==t.output&&t.transparent?e?_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__["blendingDefault"]:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__["OITBlending"])(r):null,depthTest:{func:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__["OITDepthTest"])(r)},depthWrite:e?t.writeDepth&&_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_15__["defaultDepthWriteParams"]:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__["OITDepthWrite"])(r),colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_15__["defaultColorWriteParams"],polygonOffset:e||i?null:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_12__["getOITPolygonOffset"])(t.enableOffset)})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}}x.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_8__["ReloadableShaderModule"](_chunks_WaterSurface_glsl_js__WEBPACK_IMPORTED_MODULE_14__["W"],(()=>__webpack_require__.e(/*! import() | shaders-WaterSurface-glsl-js */ "shaders-WaterSurface-glsl-js").then(__webpack_require__.bind(null, /*! ../shaders/WaterSurface.glsl.js */ "CODL"))));class E extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.output=0,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.useSSR=!1,this.isDraped=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])({count:8})],E.prototype,"output",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"receiveShadows",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"slicePlaneEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"transparent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"enableOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"writeDepth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"useSSR",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"isDraped",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])({count:4})],E.prototype,"transparencyPassType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"multipassTerrainEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_10__["parameter"])()],E.prototype,"cullAboveGround",void 0);


/***/ }),

/***/ "ACoZ":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DirtyEvents.js ***!
  \****************************************************************************/
/*! exports provided: DirtyEventNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirtyEventNames", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","shaderTransformationChanged","objectTransformation","visibilityChanged","occlusionChanged","highlightChanged","objectGeometryAdded","objectGeometryRemoved","vertexAttrsUpdated"];


/***/ }),

/***/ "Aw3R":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RibbonLineTechnique.js ***!
  \****************************************************************************************/
/*! exports provided: RibbonLineTechnique, RibbonLineTechniqueConfiguration, ribbonVertexAttributeLocations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RibbonLineTechnique", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RibbonLineTechniqueConfiguration", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ribbonVertexAttributeLocations", function() { return L; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "jpeq");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/StencilUtils.js */ "h7dw");
/* harmony import */ var _chunks_RibbonLine_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/RibbonLine.glsl.js */ "mmha");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const L=new Map([["position",0],["subdivisionFactor",1],["uv0",2],["auxpos1",3],["auxpos2",4],["size",6],["sizeFeatureAttribute",6],["color",5],["colorFeatureAttribute",5],["opacityFeatureAttribute",7]]);class _ extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_8__["ShaderTechnique"]{constructor(e,t,i){super(e,t,i),this.stippleTextureRepository=e.stippleTextureRepository}get stippleEnabled(){return this.configuration.stippleEnabled&&4!==this.configuration.output}initializeProgram(e){const t=_.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,draped:i.draped,stippleEnabled:this.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleRequiresClamp:!0,stippleScaleWithLineWidth:i.stippleScaleWithLineWidth,stipplePreferContinuous:i.stipplePreferContinuous,roundCaps:i.roundCaps,roundJoins:i.roundJoins,vvColor:i.vvColor,vvSize:i.vvSize,vvInstancingEnabled:!0,vvOpacity:i.vvOpacity,falloffEnabled:i.falloffEnabled,innerColorEnabled:i.innerColorEnabled,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_11__["Program"](e.rctx,r,L)}dispose(){super.dispose(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,o){if(Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_6__["bindProjectionMatrix"])(this.program,o.camera.projectionMatrix),4===this.configuration.output&&Object(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__["bindOutputHighlight"])(this.program,o),o.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",o.inverseViewport),Object(_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindMultipassTerrainTexture"])(this.program,o)),this.program.setUniform1f("intrinsicWidth",e.width),this.program.setUniform4fv("intrinsicColor",e.color),this.program.setUniform1f("miterLimit","miter"!==e.join?0:e.miterLimit),this.program.setUniform2fv("cameraNearFar",o.camera.nearFar),this.program.setUniform1f("pixelRatio",o.camera.pixelRatio),this.program.setUniform2f("screenSize",o.camera.fullViewport[2],o.camera.fullViewport[3]),Object(_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_5__["bindVisualVariablesUniformsWithOpacity"])(this.program,e),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t}if(this.stippleEnabled){const{pixelSize:r,sdfNormalizer:s,pixels:n}=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};if(this.program.setUniform1f("stipplePatternSDFNormalizer",s),this.program.setUniform1f("stipplePatternTextureSize",n),this.program.setUniform1f("stipplePatternPixelSize",r),this.program.setUniform1f("stipplePatternPixelSizeInv",1/r),this.configuration.draped?this.program.setUniform1f("worldToScreenRatio",1/o.screenToPCSRatio):this.program.setUniform1f("worldToScreenPerDistanceRatio",1/o.camera.perScreenPixelRatio),this.configuration.stippleOffColorEnabled){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(e.stippleOffColor);this.program.setUniform4f("stippleOffColor",t[0],t[1],t[2],t.length>3?t[3]:1)}}this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",e.falloff),this.configuration.innerColorEnabled&&(this.program.setUniform4fv("innerColor",Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(e.innerColor,e.color)),this.program.setUniform1f("innerWidth",e.innerWidth*o.camera.pixelRatio))}bindDraw(e){Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_6__["bindView"])(this.program,e),this.stippleEnabled&&!this.configuration.draped&&Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_6__["bindCameraPosition"])(this.program,e.origin,e.camera.viewInverseTransposeMatrix),Object(_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["bindSliceUniformsWithOrigin"])(this.program,this.configuration,e),this.program.rebindTextures()}makePipelineState(e,t){const i=this.configuration,r=3===e,o=2===e;return Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__["makePipelineState"])({blending:0===i.output||7===i.output?r?_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["blendingDefault"]:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["OITBlending"])(e):null,depthTest:{func:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["OITDepthTest"])(e)},depthWrite:r?!i.transparent&&i.writeDepth&&_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__["defaultDepthWriteParams"]:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["OITDepthWrite"])(e),colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__["defaultColorWriteParams"],stencilWrite:i.sceneHasOcludees?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["stencilWriteMaskOn"]:null,stencilTest:i.sceneHasOcludees?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["stencilToolMaskBaseParams"]:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["stencilBaseAllZerosParams"]:null,polygonOffset:r||o?i.polygonOffset&&q:_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["OITPolygonOffset"]})}initializePipeline(){const e=this.configuration,t=e.polygonOffset&&q;return e.occluder&&(this._occluderPipelineTransparent=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__["makePipelineState"])({blending:_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["blendingDefault"],polygonOffset:t,depthTest:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["depthCompareAlways"],depthWrite:null,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__["defaultColorWriteParams"],stencilWrite:null,stencilTest:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["stencilToolTransparentOccluderParams"]}),this._occluderPipelineOpaque=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__["makePipelineState"])({blending:_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["blendingDefault"],polygonOffset:t,depthTest:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["depthCompareAlways"],depthWrite:null,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__["defaultColorWriteParams"],stencilWrite:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["stencilWriteMaskOff"],stencilTest:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["stencilToolMaskOccluderParams"]}),this._occluderPipelineMaskWrite=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__["makePipelineState"])({blending:null,polygonOffset:t,depthTest:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["depthCompareLess"],depthWrite:null,colorWrite:null,stencilWrite:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["stencilWriteMaskOn"],stencilTest:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__["stencilToolMaskBaseParams"]})),this._occludeePipelineState=this.makePipelineState(this.configuration.transparencyPassType,!0),this.makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return 5}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?10===e?this._occluderPipelineTransparent:9===e?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,t)}}_.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_7__["ReloadableShaderModule"](_chunks_RibbonLine_glsl_js__WEBPACK_IMPORTED_MODULE_13__["R"],(()=>__webpack_require__.e(/*! import() | RibbonLine-glsl-js */ "RibbonLine-glsl-js").then(__webpack_require__.bind(null, /*! ./RibbonLine.glsl.js */ "rG3d"))));const q={factor:0,units:-4};class F extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.output=0,this.occluder=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.polygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.roundCaps=!1,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])({count:8})],F.prototype,"output",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"occluder",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"slicePlaneEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"transparent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"polygonOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"writeDepth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"draped",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"stippleEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"stippleOffColorEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"stippleScaleWithLineWidth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"stipplePreferContinuous",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"roundCaps",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"roundJoins",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"vvSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"vvColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"vvOpacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"falloffEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"innerColorEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"sceneHasOcludees",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])({count:4})],F.prototype,"transparencyPassType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"multipassTerrainEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_9__["parameter"])()],F.prototype,"cullAboveGround",void 0);


/***/ }),

/***/ "BAva":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl.js ***!
  \********************************************************************************************************/
/*! exports provided: NormalUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalUtils", function() { return n; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,r){1===r.viewingMode?n.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):n.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),1===r.viewingMode?n.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):n.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}


/***/ }),

/***/ "C97X":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/ObjectPool.js */ "7Nfj");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/support/frustum.js */ "01mo");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../geometry/support/ray.js */ "0Y+r");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "+JUG");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p{constructor(e,t){this._objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new b,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),b.clearPool(),v[0]=null,B.prune(),C.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const n=b.acquire();for(let i=0;i<t;i++){const t=e[i];this._isDegenerate(t)?this._degenerateObjects.add(t):(n.init(this._root),this._add(t,n))}b.release(n)}remove(t,n=null){this._objectCount-=t.length;const i=b.acquire();for(const o of t){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n)?n:Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["b"])(this._objectToBoundingSphere(o),I);z(t[3])?(i.init(this._root),this._remove(o,t,i)):this._degenerateObjects.delete(o)}b.release(i),this._shrink()}update(e,t){if(!z(t[3])&&this._isDegenerate(e))return;const n=A(e);this.remove(n,t),this.add(n)}forEachAlongRay(e,t,n){const i=Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__["wrap"])(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(i,e))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(i,e)&&n(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(i,e)&&n(e)})),!0}))}forEachAlongRayWithVerticalOffset(e,t,n,i){const o=Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__["wrap"])(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(o,e,i))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(o,e,i)&&n(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(o,e,i)&&n(e)})),!0}))}forEach(e){this._forEachNode(this._root,(t=>{const n=t.node;return n.terminals.forAll(e),null!==n.residents&&n.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,n,s=(()=>!0),r=1/0){let h=1/0,a=1/0,d=null;const c=N(e,t),u=i=>{if(--r,!s(i))return;const o=this._objectToBoundingSphere(i);if(!Object(_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_5__["intersectsSphere"])(n,o))return;const c=M(e,t,Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["g"])(o)),u=c-o[3],f=c+o[3];u<h&&(h=u,a=f,d=i)};return this._forEachNodeDepthOrdered(this._root,(s=>{if(r<=0||!Object(_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_5__["intersectsSphere"])(n,s.bounds))return!1;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(k,c,s.halfSize),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(k,k,s.bounds);if(M(e,t,k)>a)return!1;const h=s.node;return h.terminals.forAll((e=>u(e))),null!==h.residents&&h.residents.forAll((e=>u(e))),!0}),e,t),d}forEachInDepthRange(e,t,n,s,r,h,a){let d=-1/0,c=1/0;const u={setRange:e=>{1===n?(d=Math.max(d,e.near),c=Math.min(c,e.far)):(d=Math.max(d,-e.far),c=Math.min(c,-e.near))}};u.setRange(s);const f=M(t,n,e),_=N(t,n),p=N(t,-n),b=e=>{if(!a(e))return;const i=this._objectToBoundingSphere(e),o=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["g"])(i),s=M(t,n,o)-f,_=s-i[3],p=s+i[3];_>c||p<d||!Object(_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_5__["intersectsSphere"])(h,i)||r(e,u)};this._forEachNodeDepthOrdered(this._root,(e=>{if(!Object(_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_5__["intersectsSphere"])(h,e.bounds))return!1;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(k,_,e.halfSize),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(k,k,e.bounds);if(M(t,n,k)-f>c)return!1;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(k,p,e.halfSize),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(k,k,e.bounds);if(M(t,n,k)-f<d)return!1;const s=e.node;return s.terminals.forAll((e=>b(e))),null!==s.residents&&s.residents.forAll((e=>b(e))),!0}),t,n)}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize)))}_intersectsNode(e,t){return S(t.bounds,2*-t.halfSize,q),S(t.bounds,2*t.halfSize,w),Object(_Util_js__WEBPACK_IMPORTED_MODULE_8__["rayBoxTest"])(e.origin,e.direction,q,w)}_intersectsNodeWithOffset(e,t,n){return S(t.bounds,2*-t.halfSize,q),S(t.bounds,2*t.halfSize,w),n.applyToMinMax(q,w),Object(_Util_js__WEBPACK_IMPORTED_MODULE_8__["rayBoxTest"])(e.origin,e.direction,q,w)}_intersectsObject(e,t){const n=this._objectToBoundingSphere(t);return!(n[3]>0)||Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["i"])(n,e)}_intersectsObjectWithOffset(e,t,n){const i=this._objectToBoundingSphere(t);return!(i[3]>0)||Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["i"])(n.applyToBoundingSphere(i),e)}_forEachNode(e,t){let n=b.acquire().init(e);const i=[n];for(;0!==i.length;){if(n=i.pop(),t(n)&&!n.isLeaf())for(let e=0;e<n.node.children.length;e++){n.node.children[e]&&i.push(b.acquire().init(n).advance(e))}b.release(n)}}_forEachNodeDepthOrdered(e,t,n,i=1){let o=b.acquire().init(e);const s=[o];for(O(n,i,W);0!==s.length;){if(o=s.pop(),t(o)&&!o.isLeaf())for(let e=7;e>=0;--e){const t=W[e];o.node.children[t]&&s.push(b.acquire().init(o).advance(t))}b.release(o)}}_remove(e,t,n){B.clear();const i=n.advanceTo(t,((e,t)=>{B.push(e.node),B.push(t)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(e),0===i.length)for(let o=B.length-2;o>=0;o-=2){const e=B.data[o],t=B.data[o+1];if(!this._purge(e,t))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}_purge(e,t){return t>=0&&(e.children[t]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({shrink:!0})),!0)}_add(e,t){t.advanceTo(this._objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let n=0;n<t.length;n++){const i=b.acquire().init(e);this._add(t.getItemAt(n),i),b.release(i)}}_grow(e,t){if(0!==t&&(x(e,t,(e=>this._objectToBoundingSphere(e)),P),z(P[3])&&!this._fitsInsideTree(P)))if(this._nodeIsEmpty(this._root.node))Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["b"])(P,this._root.bounds),this._root.halfSize=1.25*P[3];else{const e=this._rootBoundsForRootAsSubNode(P);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(P,e):this._growRootAsSubNode(e),b.release(e)}}_rebuildTree(e,t){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(R,t.bounds),R[3]=t.halfSize,x([e,R],2,(e=>e),F);const n=b.acquire().init(this._root);this._root.initFrom(null,F,1.25*F[3]),this._forEachNode(n,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),b.release(n)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(e=>(n=Math.max(n,e.depth),n+t<=this._maximumDepth))),n+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],n=e;let i=-1/0;const o=this._root.bounds,s=this._root.halfSize;for(let r=0;r<3;r++){const e=o[r]-s-(n[r]-t),h=n[r]+t-(o[r]+s),a=Math.max(0,Math.ceil(e/(2*s))),l=Math.max(0,Math.ceil(h/(2*s)))+1,d=2**Math.ceil(Math.log(a+l)*Math.LOG2E);i=Math.max(i,d),L[r].min=a,L[r].max=l}for(let r=0;r<3;r++){let e=L[r].min,t=L[r].max;const n=(i-(e+t))/2;e+=Math.ceil(n),t+=Math.floor(n);const h=o[r]-s-e*s*2;y[r]=h+(t+e)*s}return y[3]=i*s*D,b.acquire().initFrom(null,y,i*s,0)}_growRootAsSubNode(e){const t=this._root.node;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(P,this._root.bounds),P[3]=this._root.halfSize,this._root.init(e),e.advanceTo(P,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let n=0,i=0;for(;i<t.length&&null==e;)n=i++,e=t[n];for(;i<t.length;)if(t[i++])return-1;return n}_isDegenerate(e){return!z(this._objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}}class b{constructor(){this.bounds=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(t,n,i,o=this.depth){return this.node=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)?t:b.createEmptyNode(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n)&&Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["b"])(n,this.bounds),this.halfSize=i,this.depth=o,this}advance(e){let t=this.node.children[e];t||(t=b.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const n=E[e];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*D,this}advanceTo(e,t,n=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}const i=this._childIndex(e);t&&t(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({shrink:!0}),residents:new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({shrink:!0})}}static acquire(){return b._pool.acquire()}static release(e){b._pool.release(e)}static clearPool(){b._pool.prune()}}function g(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function j(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function S(e,t,n){n[0]=e[0]+t,n[1]=e[1]+t,n[2]=e[2]+t}function x(e,t,n,i){if(1===t){const t=n(e[0]);Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["b"])(t,i)}else{q[0]=1/0,q[1]=1/0,q[2]=1/0,w[0]=-1/0,w[1]=-1/0,w[2]=-1/0;for(let i=0;i<t;i++){const t=n(e[i]);z(t[3])&&(g(q,t),j(w,t))}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["e"])(i,q,w,.5),i[3]=Math.max(w[0]-q[0],w[1]-q[1],w[2]-q[2])/2}}function O(e,t,n){if(!C.length)for(let i=0;i<8;++i)C.push({index:0,distance:0});for(let i=0;i<8;++i){const n=E[i];C.data[i].index=i,C.data[i].distance=M(e,t,n)}C.sort(((e,t)=>e.distance-t.distance));for(let i=0;i<8;++i)n[i]=C.data[i].index}function N(e,t){let n=1/0,i=null;for(let o=0;o<8;++o){const s=M(e,t,T[o]);s<n&&(n=s,i=T[o])}return i}function M(e,t,n){return t*(e[0]*n[0]+e[1]*n[1]+e[2]*n[2])}function z(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}b._pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__["default"](b);const E=[Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-1,-1,-1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(1,-1,-1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-1,1,-1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(1,1,-1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-1,-1,1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(1,-1,1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-1,1,1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(1,1,1)],T=[Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-1,-1,-1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-1,-1,1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-1,1,-1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-1,1,1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(1,-1,-1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(1,-1,1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(1,1,-1),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(1,1,1)],D=Math.sqrt(3),v=[null];function A(e){return v[0]=e,v}const y=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),k=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),q=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),w=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),B=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],I=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),P=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),R=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),F=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),L=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],C=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],W=[0,0,0,0,0,0,0,0];


/***/ }),

/***/ "DLk3":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/ElevationProvider.js ***!
  \*************************************************************************/
/*! exports provided: SamplePosition, getElevationAtPoint, isSamplePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePosition", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElevationAtPoint", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamplePosition", function() { return a; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _layers_graphics_dehydratedFeatureUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/graphics/dehydratedFeatureUtils.js */ "hPSC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e,r=null,t=0){this.array=e,this.spatialReference=r,this.offset=t}}function a(e){return"array"in e}function i(t,i,n="ground"){if(Object(_layers_graphics_dehydratedFeatureUtils_js__WEBPACK_IMPORTED_MODULE_1__["isDehydratedPoint"])(i))return t.getElevation(i.x,i.y,i.z||0,i.spatialReference,n);if(a(i)){let r=i.offset;return t.getElevation(i.array[r++],i.array[r++],i.array[r]||0,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(i.spatialReference,t.spatialReference),n)}return t.getElevation(i[0],i[1],i[2]||0,t.spatialReference,n)}


/***/ }),

/***/ "DZ/s":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/boundedPlane.js ***!
  \**********************************************************/
/*! exports provided: A, B, U, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return fs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return Ns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return rs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return as; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return os; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return es; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return us; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return gs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return bs; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "15Hh");
/* harmony import */ var _mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mat4f64.js */ "r+FG");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geometry/support/lineSegment.js */ "vX5d");
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/support/plane.js */ "colF");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/support/ray.js */ "0Y+r");
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/support/vector.js */ "obHo");
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/support/vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const L=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class z{constructor(){this.plane=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["create"])(),this.origin=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),this.basis1=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),this.basis2=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])()}}function G(s=Ns){return{plane:Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["create"])(s.plane),origin:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(s.origin),basis1:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(s.basis1),basis2:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(s.basis2)}}function W(s,i,n){const t=Ss.get();return t.origin=s,t.basis1=i,t.basis2=n,t.plane=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["wrap"])(0,0,0,0),K(t),t}function D(s,i=G()){return J(s.origin,s.basis1,s.basis2,i)}function H(s,i){Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(i.origin,s.origin),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(i.basis1,s.basis1),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(i.basis2,s.basis2),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["copy"])(s.plane,i.plane)}function J(s,i,n,t=G()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(t.origin,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(t.basis1,i),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(t.basis2,n),K(t),ys(t,"fromValues()"),t}function K(s){Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["fromVectorsAndPoint"])(s.basis2,s.basis1,s.origin,s.plane)}function Q(s,i,n){s!==n&&D(s,n);const t=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),ms(s),i);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(n.origin,n.origin,t),n.plane[3]-=i,n}function X(s,i,n){return Z(i,n),Q(n,gs(s,s.origin),n),n}function Z(s,i=G()){const n=(s[2]-s[0])/2,t=(s[3]-s[1])/2;return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["s"])(i.origin,s[0]+n,s[1]+t,0),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["s"])(i.basis1,n,0,0),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["s"])(i.basis2,0,t,0),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["fromValues"])(0,0,1,0,i.plane),i}function $(s,i,n){return!!Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["intersectRay"])(s.plane,i,n)&&hs(s,n)}function ss(s,i,n){if($(s,i,n))return n;const t=is(s,i,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get());return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(n,i.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),i.direction,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["i"])(i.origin,t)/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["l"])(i.direction))),n}function is(s,n,t){const a=vs.get();Ps(s,n,a,vs.get());let o=Number.POSITIVE_INFINITY;for(const r of Ts){const e=Is(s,r,ws.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get();if(Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["intersectLineSegment"])(a,e,u)){const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["r"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),n.origin,u),a=Math.abs(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["acosClamped"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["d"])(n.direction,s)));a<o&&(o=a,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(t,u))}}return o===Number.POSITIVE_INFINITY?ns(s,n,t):t}function ns(s,i,n){if($(s,i,n))return n;const t=vs.get(),a=vs.get();Ps(s,i,t,a);let o=Number.POSITIVE_INFINITY;for(const r of Ts){const e=Is(s,r,ws.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get();if(Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["intersectLineSegmentClamp"])(t,e,u)){const s=Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__["distance2"])(i,u);if(!Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["isPointInside"])(a,u))continue;s<o&&(o=s,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(n,u))}}return os(s,i.origin)<o&&ts(s,i.origin,n),n}function ts(s,i,n){const t=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["projectPoint"])(s.plane,i,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get()),a=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__["projectPointClamp"])(js(s,s.basis1),t,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get()),o=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__["projectPointClamp"])(js(s,s.basis2),t,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get());return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["f"])(n,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),a,o),s.origin),n}function as(s,i,n){const{origin:t,basis1:a,basis2:o}=s,r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["f"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),i,t),e=Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__["projectPointSignedLength"])(a,r),c=Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__["projectPointSignedLength"])(o,r),u=Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__["projectPointSignedLength"])(ms(s),r);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["s"])(n,e,c,u)}function os(s,i){const n=as(s,i,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get()),{basis1:t,basis2:a}=s,o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["l"])(t),r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["l"])(a),e=Math.max(Math.abs(n[0])-o,0),c=Math.max(Math.abs(n[1])-r,0),u=n[2];return e*e+c*c+u*u}function rs(s,i){return Math.sqrt(os(s,i))}function es(s,i){let n=Number.NEGATIVE_INFINITY;for(const t of Ts){const a=Is(s,t,ws.get()),o=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__["distance2"])(a,i);o>n&&(n=o)}return Math.sqrt(n)}function cs(s,i){return Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["isPointInside"])(s.plane,i)&&hs(s,i)}function us(s,i,n,t){return ds(s,n,t)}function gs(s,i){const n=-s.plane[3];return Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__["projectPointSignedLength"])(ms(s),i)-n}function bs(s,i,n,t){const a=gs(s,i),o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["a"])(Ms,ms(s),n-a);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(t,i,o),t}function fs(s,i){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["k"])(s.basis1,i.basis1)&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["k"])(s.basis2,i.basis2)&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["k"])(s.origin,i.origin)}function ls(s,i,n){return s!==n&&D(s,n),Object(_mat4_js__WEBPACK_IMPORTED_MODULE_4__["b"])(As,i),Object(_mat4_js__WEBPACK_IMPORTED_MODULE_4__["t"])(As,As),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(n.basis1,s.basis1,As),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(n.basis2,s.basis2,As),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["normal"])(n.plane),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["normal"])(s.plane),As),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(n.origin,s.origin,i),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["setOffsetFromPoint"])(n.plane,n.origin,n.plane),n}function ps(s,i,n,t){return s!==t&&D(s,t),Object(_mat4_js__WEBPACK_IMPORTED_MODULE_4__["e"])(Vs,Object(_mat4_js__WEBPACK_IMPORTED_MODULE_4__["i"])(Vs),i,n),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(t.basis1,s.basis1,Vs),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(t.basis2,s.basis2,Vs),K(t),t}function ms(s){return Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["normal"])(s.plane)}function ds(s,i,n){switch(i){case 0:Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(n,s.basis1),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["n"])(n,n);break;case 1:Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(n,s.basis2),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["n"])(n,n);break;case 2:Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(n,ms(s))}return n}function hs(s,i){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["f"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),i,s.origin),t=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["p"])(s.basis1),a=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["p"])(s.basis2),o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["d"])(s.basis1,n),r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["d"])(s.basis2,n);return-o-t<0&&o-t<0&&-r-a<0&&r-a<0}function js(s,i){const n=ws.get();return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(n.origin,s.origin),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["g"])(n.vector,i),n}function Is(s,i,n){const{basis1:t,basis2:a,origin:o}=s,r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),t,i.origin[0]),e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),a,i.origin[1]);Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(n.origin,r,e),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(n.origin,n.origin,o);const c=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),t,i.direction[0]),b=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["a"])(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__["sv3d"].get(),a,i.direction[1]);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["a"])(n.vector,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["b"])(c,c,b),2),n}function ys(s,i){Math.abs(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["d"])(s.basis1,s.basis2)/(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["l"])(s.basis1)*Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["l"])(s.basis2)))>1e-6&&L.warn(i,"Provided basis vectors are not perpendicular"),Math.abs(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["d"])(s.basis1,ms(s)))>1e-6&&L.warn(i,"Basis vectors and plane normal are not perpendicular"),Math.abs(-Object(_vec3_js__WEBPACK_IMPORTED_MODULE_6__["d"])(ms(s),s.origin)-s.plane[3])>1e-6&&L.warn(i,"Plane offset is not consistent with plane origin")}function Ps(s,i,n,t){const a=ms(s);Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["fromVectorsAndPoint"])(a,i.direction,i.origin,n),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["fromVectorsAndPoint"])(Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["normal"])(n),a,i.origin,t)}const Ns={plane:Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["create"])(),origin:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["f"])(0,0,0),basis1:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["f"])(1,0,0),basis2:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["f"])(0,1,0)},vs=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__["ObjectStack"](_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_9__["create"]),ws=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__["ObjectStack"](_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_8__["create"]),Ms=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),Ss=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__["ObjectStack"]((()=>({origin:null,basis1:null,basis2:null,plane:null}))),Ts=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],As=Object(_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Vs=Object(_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),_s=Object.freeze({__proto__:null,BoundedPlaneClass:z,create:G,wrap:W,copy:D,copyWithoutVerify:H,fromValues:J,updateUnboundedPlane:K,elevate:Q,setExtent:X,fromAABoundingRect:Z,intersectRay:$,intersectRayClosestSilhouette:ss,closestPointOnSilhouette:is,closestPoint:ns,projectPoint:ts,projectPointLocal:as,distance2:os,distance:rs,distanceToSilhouette:es,extrusionContainsPoint:cs,axisAt:us,altitudeAt:gs,setAltitudeAt:bs,equals:fs,transform:ls,rotate:ps,normal:ms,UP:Ns});


/***/ }),

/***/ "DZYy":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/HUDMaterial.glsl.js ***!
  \**************************************************************/
/*! exports provided: H, a, b, c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return x; });
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec2.js */ "M0lq");
/* harmony import */ var _vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec2f64.js */ "AvGH");
/* harmony import */ var _vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec4f64.js */ "D8Ta");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl.js */ "fB0p");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl.js */ "0MsP");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_HUDOcclusionPass_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl.js */ "cHlT");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js */ "Q3fD");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js */ "L5gG");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e){const o=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_14__["ShaderBuilder"],i=e.signedDistanceFieldEnabled;if(o.include(_views_3d_webgl_engine_core_shaderLibrary_hud_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_4__["AlignPixel"]),o.include(_views_3d_webgl_engine_core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_5__["HUD"],e),o.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"],e),6===e.output)return o.include(_views_3d_webgl_engine_core_shaderLibrary_hud_HUDOcclusionPass_glsl_js__WEBPACK_IMPORTED_MODULE_6__["HUDOcclusionPass"],e),o;o.include(_views_3d_webgl_engine_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_12__["ScreenSizePerspective"]),o.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_11__["RgbaFloatEncoding"]),o.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_10__["ColorConversion"]),o.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_8__["VisualVariables"],e),o.varyings.add("vcolor","vec4"),o.varyings.add("vtc","vec2"),o.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&o.varyings.add("voccluded","float"),o.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),i&&o.vertex.uniforms.add("outlineColor","vec4"),e.screenSizePerspectiveEnabled&&o.vertex.uniforms.add("screenSizePerspective","vec4"),(e.debugDrawBorder||e.binaryHighlightOcclusionEnabled)&&o.varyings.add("debugBorderCoords","vec4"),o.attributes.add("uv0","vec2"),o.attributes.add("color","vec4"),o.attributes.add("size","vec2"),o.attributes.add("auxpos2","vec4"),o.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.screenSizePerspectiveEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const m=_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,b=e.pixelSnappingEnabled?i?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`posProj += quadOffset;`;o.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
      ${e.occlusionTestEnabled?"if (visible) {":""}
      ${m}
      ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["symbolAlphaCutoff"])};
      ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["symbolAlphaCutoff"])};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${b}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${e.debugDrawBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${e.occlusionTestEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`} else { vtc = vec2(0.0);
        ${e.debugDrawBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),o.fragment.uniforms.add("tex","sampler2D"),i&&(o.fragment.uniforms.add("outlineColor","vec4"),o.fragment.uniforms.add("outlineSize","float"));const x=e.debugDrawBorder?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`(isBorder > 0.0 ? 0.0 : ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["defaultMaskAlphaCutoff"])})`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["defaultMaskAlphaCutoff"]),h=_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
    ${e.debugDrawBorder?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${x} ||
          fillPixelColor.a + outlinePixelColor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["symbolAlphaCutoff"])}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${x}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${x}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${e.debugDrawBorder?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;return 7===e.output&&o.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
      void main() {
        ${h}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),0===e.output&&o.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
    void main() {
      ${h}
      ${e.FrontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),4===e.output&&(o.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_7__["OutputHighlight"]),o.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
    void main() {
      ${h}
      ${e.binaryHighlightOcclusionEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__["glsl"]`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),o}function b(e,o,r){e.setUniform4fv("materialColor",o.color),o.textureIsSignedDistanceField&&(o.outlineColor[3]<=0||o.outlineSize<=0?(e.setUniform4fv("outlineColor",_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__["Z"]),e.setUniform1f("outlineSize",0)):(e.setUniform4fv("outlineColor",o.outlineColor),e.setUniform1f("outlineSize",o.outlineSize))),e.setUniform2f("screenOffset",2*o.screenOffset[0]*r,2*o.screenOffset[1]*r),e.setUniform2fv("anchorPos",x(o))}function x(o,i=C){return o.textureIsSignedDistanceField?h(o.anchorPos,o.distanceFieldBoundingBox,i):Object(_vec2_js__WEBPACK_IMPORTED_MODULE_0__["c"])(i,o.anchorPos),i}function h(e,o,i){i[0]=e[0]*(o[2]-o[0])+o[0],i[1]=e[1]*(o[3]-o[1])+o[1]}const C=Object(_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(),z=Object.freeze({__proto__:null,build:m,bindHUDMaterialUniforms:b,calculateAnchorPosForRendering:x});


/***/ }),

/***/ "Doh9":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueRepository.js ***!
  \***********************************************************************************************************/
/*! exports provided: ShaderTechniqueRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderTechniqueRepository", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/NestedMap.js */ "+dDh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}class n{constructor(e){this._context=e,this._perConstructorInstances=new _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_1__["NestedMap"],this._frameCounter=0,this._keepAliveFrameCount=o}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.dispose())))),this._perConstructorInstances.clear()}acquire(t,r){const n=r.key;let o=this._perConstructorInstances.get(t,n);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o)){const e=new t(this._context,r,(()=>this.release(e)));o=new s(e),this._perConstructorInstances.set(t,n,o)}return++o.refCount,o.technique}releaseAndAcquire(e,r,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)){if(r.key===s.key)return s;s.release()}return this.acquire(e,r)}release(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)||this._perConstructorInstances.empty)return;const r=this._perConstructorInstances.get(t.constructor,t.key);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)||(--r.refCount,0===r.refCount&&(r.refZeroFrame=this._frameCounter))}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==o&&this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((e,r)=>{0===e.refCount&&e.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(e.technique.dispose(),this._perConstructorInstances.delete(t,r))}))}))}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{const s=async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context)})))};e.push(s(t,r))})),await Promise.all(e)}}const o=-1;


/***/ }),

/***/ "Drlb":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/ElevationContext.js ***!
  \********************************************************************************/
/*! exports provided: ElevationContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevationContext", function() { return h; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../symbols/support/unitConversionUtils.js */ "gHbr");
/* harmony import */ var _featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featureExpressionInfoUtils.js */ "6dbX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(t){this._unit=t,this._metersPerElevationInfoUnit=Object(_symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["getMetersPerUnit"])(t)}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(t){this._meterUnitOffset=t,this._renderUnitOffset=0}set offsetElevationInfoUnits(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(t){this._renderUnitOffset+=t}geometryZWithOffset(t,e){const n=this.calculateOffsetRenderUnits(e);return null!=this.featureExpressionInfoContext?n:t+n}calculateOffsetRenderUnits(t){let e=this._meterUnitOffset;const n=this.featureExpressionInfoContext;return null!=n&&(e+=Object(_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_2__["execute"])(n)*this._metersPerElevationInfoUnit),e/t.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=Object(_symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["supportsUnit"])(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(e.offset,0)}updateFeatureExpressionInfoContext(t,s,i){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return void(this._featureExpressionInfoContext=null);const r=t&&t.arcade;r&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i)?(this._featureExpressionInfoContext=Object(_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(t),Object(_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_2__["setContextFeature"])(this._featureExpressionInfoContext,Object(_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_2__["createFeature"])(r.modules,s,i))):this._featureExpressionInfoContext=t}static fromElevationInfo(t){const e=new h;return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)&&e.setFromElevationInfo(t),e}}


/***/ }),

/***/ "FxzD":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Camera.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return J; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec4.js */ "dXfX");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/support/frustum.js */ "01mo");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../geometry/support/ray.js */ "0Y+r");
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/support/vector.js */ "obHo");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const B=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.lib.Camera");class J{constructor(t=null,i=null,r=null){this._viewUp=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),this._viewForward=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),this._viewRight=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),this._ray=Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_13__["create"])(),this._viewport=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_11__["f"])(0,0,1,1),this._padding=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_11__["f"])(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["f"])(1,1e3),this._viewDirty=!0,this._viewMatrix=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._projectionDirty=!0,this._projectionMatrix=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._frustumDirty=!0,this._frustum=Object(_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_12__["create"])(),this._fullViewport=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),this.pixelRatio=1,this.relativeElevation=0,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this._ray.origin,t),this._center=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(i)?Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["a"])(i):Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),this._up=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r)?Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["a"])(r):Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["f"])(0,0,1)}get eye(){return this._ray.origin}set eye(t){this._compareAndSetView(t,this._ray.origin)}get center(){return this._center}set center(t){this._compareAndSetView(t,this._center)}get ray(){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["f"])(this._ray.direction,this.center,this.eye),this._ray}get up(){return this._up}set up(t){this._compareAndSetView(t,this._up)}get viewMatrix(){return this._ensureViewClean(),this._viewMatrix}set viewMatrix(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this._viewMatrix,t),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get viewForward(){return this._ensureViewClean(),this._viewForward}get viewUp(){return this._ensureViewClean(),this._viewUp}get viewRight(){return this._ensureViewClean(),this._viewRight}get nearFar(){return this._nearFar}get near(){return this._nearFar[0]}set near(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get far(){return this._nearFar[1]}set far(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get viewport(){return this._viewport}set viewport(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]}get x(){return this._viewport[0]}set x(t){t+=this._padding[3],this._viewport[0]!==t&&(this._viewport[0]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get y(){return this._viewport[1]}set y(t){t+=this._padding[2],this._viewport[1]!==t&&(this._viewport[1]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get width(){return this._viewport[2]}set width(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get height(){return this._viewport[3]}set height(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get fullWidth(){return this._viewport[2]+this._padding[1]+this._padding[3]}set fullWidth(t){this.width=t-(this._padding[1]+this._padding[3])}get fullHeight(){return this._viewport[3]+this._padding[0]+this._padding[2]}set fullHeight(t){this.height=t-(this._padding[0]+this._padding[2])}get fullViewport(){return this._fullViewport[0]=this._viewport[0]-this._padding[3],this._fullViewport[1]=this._viewport[1]-this._padding[2],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}get aspect(){return this.width/this.height}get padding(){return this._padding}set padding(t){this._padding[0]===t[0]&&this._padding[1]===t[1]&&this._padding[2]===t[2]&&this._padding[3]===t[3]||(this._viewport[0]+=t[3]-this._padding[3],this._viewport[1]+=t[2]-this._padding[2],this._viewport[2]-=t[1]+t[3]-(this._padding[1]+this._padding[3]),this._viewport[3]-=t[0]+t[2]-(this._padding[0]+this._padding[2]),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["c"])(this._padding,t),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0)}get viewProjectionMatrix(){return this._viewProjectionDirty&&(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}get projectionMatrix(){if(this._projectionDirty){const t=this.width,i=this.height,e=this.near*Math.tan(this.fovY/2),r=e*this.aspect;Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["h"])(this._projectionMatrix,-r*(1+2*this._padding[3]/t),r*(1+2*this._padding[1]/t),-e*(1+2*this._padding[2]/i),e*(1+2*this._padding[0]/i),this.near,this.far),this._projectionDirty=!1}return this._projectionMatrix}set projectionMatrix(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this._projectionMatrix,t),this._projectionDirty=!1,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fov(){return this._fov}set fov(t){this._fov=t,this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovX(){return Object(_Util_js__WEBPACK_IMPORTED_MODULE_15__["fovd2fovx"])(this._fov,this.width,this.height)}set fovX(t){this._fov=Object(_Util_js__WEBPACK_IMPORTED_MODULE_15__["fovx2fovd"])(t,this.width,this.height),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovY(){return Object(_Util_js__WEBPACK_IMPORTED_MODULE_15__["fovd2fovy"])(this._fov,this.width,this.height)}set fovY(t){this._fov=Object(_Util_js__WEBPACK_IMPORTED_MODULE_15__["fovy2fovd"])(t,this.width,this.height),this._projectionDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get distance(){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["i"])(this._center,this.eye)}get frustum(){return this._recomputeFrustum(),this._frustum}get viewInverseTransposeMatrix(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["b"])(this._viewInverseTransposeMatrix,this.viewMatrix),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["t"])(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}depthNDCToWorld(t){const i=2*t-1;return 2*this.near*this.far/(this.far+this.near-i*(this.far-this.near))}get perRenderPixelRatio(){return Math.tan(this.fovX/2)/(this.width/2)}get perScreenPixelRatio(){return this.perRenderPixelRatio*this.pixelRatio}get aboveGround(){return this.relativeElevation&&this.relativeElevation>=0}copyFrom(t){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this._ray.origin,t.eye),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this._center,t.center),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this._up,t.up),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["c"])(this._viewport,t.viewport),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["c"])(this._padding,t.padding),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this._nearFar,t.nearFar),this._fov=t.fov,this.relativeElevation=t.relativeElevation;const i=t;return this._viewDirty=i._viewDirty,this._viewDirty||(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this._viewMatrix,t.viewMatrix),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this._viewRight,t.viewRight),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this._viewUp,t.viewUp),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this._viewForward,t.viewForward)),i._projectionDirty?this._projectionDirty=!0:(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this._projectionMatrix,t.projectionMatrix),this._projectionDirty=!1),this._viewProjectionDirty=!0,this._frustumDirty=i._frustumDirty,this._frustumDirty||(Object(_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_12__["copy"])(t.frustum,this._frustum),this._frustumDirty=!1),i._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["c"])(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this}copyViewFrom(t){this.eye=t.eye,this.center=t.center,this.up=t.up}clone(){return(new J).copyFrom(this)}equals(t){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["k"])(this.eye,t.eye)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["k"])(this._center,t.center)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["k"])(this._up,t.up)&&Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["g"])(this._viewport,t.viewport)&&Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["g"])(this._padding,t.padding)&&Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_6__["e"])(this._nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation}almostEquals(t){if(this.pixelRatio!==t.pixelRatio||Math.abs(t.fov-this._fov)>=.001)return!1;const i=5e-4,e=1-1e-10;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["v"])(Q,t.eye,t.center),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["v"])(Z,this.eye,this._center);const r=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["d"])(Q,Z),s=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["w"])(Q),h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["w"])(Z);return r*r>=e*s*h&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["x"])(t.eye,this.eye)<Math.max(s,h)*i*i&&Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["i"])(t.padding,this._padding)<.5&&Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["i"])(t.viewport,this._viewport)<.5}computeRenderPixelSizeAt(t){return this.computeRenderPixelSizeAtDist(this.viewDirectionDistance(t))}computeRenderPixelSizeAtDist(t){return t*this.perRenderPixelRatio}computeScreenPixelSizeAt(t){return this.computeScreenPixelSizeAtDist(this.viewDirectionDistance(t))}viewDirectionDistance(t){return Math.abs(Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_14__["projectPointSignedLength"])(this.viewForward,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["f"])(Q,t,this.eye)))}computeScreenPixelSizeAtDist(t){return t*this.perScreenPixelRatio}computeDistanceFromRadius(t,i){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(i||1)))}getScreenCenter(t=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["createScreenPointArray"])()){return t[0]=(this.padding[3]+this.width/2)/this.pixelRatio,t[1]=(this.padding[0]+this.height/2)/this.pixelRatio,t}getRenderCenter(t,i=.5,e=.5){return t[0]=this.padding[3]+this.width*i,t[1]=this.padding[2]+this.height*e,t[2]=.5,t}setGLViewport(t){const i=this.viewport,e=this.padding;t.setViewport(i[0]-e[3],i[1]-e[2],i[2]+e[1]+e[3],i[3]+e[0]+e[2])}applyProjection(t,e,r=!1){t!==K&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(K,t),K[3]=1,r&&(e[2]=-K[2]),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["t"])(K,K,this.projectionMatrix),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["a"])(K,K,1/Math.abs(K[3]));const s=this.fullViewport;return e[0]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["lerp"])(0,s[0]+s[2],.5+.5*K[0]),e[1]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["lerp"])(0,s[1]+s[3],.5+.5*K[1]),r||(e[2]=.5*(K[2]+1)),e}projectToScreen(t,i){this.projectToRenderScreen(t,$),this.renderToScreen($,i)}projectToRenderScreen(t,e){if(K[0]=t[0],K[1]=t[1],K[2]=t[2],K[3]=1,Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["t"])(K,K,this.viewProjectionMatrix),0===K[3])return null;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["a"])(K,K,1/Math.abs(K[3]));const r=this.fullViewport;return"x"in e?(e.x=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["lerp"])(0,r[0]+r[2],.5+.5*K[0]),e.y=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["lerp"])(0,r[1]+r[3],.5+.5*K[1])):(e[0]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["lerp"])(0,r[0]+r[2],.5+.5*K[0]),e[1]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["lerp"])(0,r[1]+r[3],.5+.5*K[1]),e.length>2&&(e[2]=.5*(K[2]+1))),e}unprojectFromScreen(t,i){return this.unprojectFromRenderScreen(this.screenToRender(t,$),i)}unprojectFromRenderScreen(t,i){if(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(O,this.projectionMatrix,this.viewMatrix),!Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["b"])(O,O))return null;const e=this.fullViewport;return K[0]=2*(t[0]-e[0])/e[2]-1,K[1]=2*(t[1]-e[1])/e[3]-1,K[2]=2*t[2]-1,K[3]=1,Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_10__["t"])(K,K,O),0===K[3]?null:(i[0]=K[0]/K[3],i[1]=K[1]/K[3],i[2]=K[2]/K[3],i)}constrainWindowSize(t,i,e,r=e){const s=t*this.pixelRatio,h=i*this.pixelRatio,n=Math.max(s-e/2,0),o=Math.max(this.fullHeight-h-r/2,0),a=-Math.min(s-e/2,0),_=-Math.min(this.fullHeight-h-r/2,0);return[n,o,e-a- -Math.min(this.fullWidth-s-e/2,0),r-_- -Math.min(h-r/2,0)]}computeUp(t){1===t?this.computeUpGlobal():this.computeUpLocal()}screenToRender(t,i){const e=t[0]*this.pixelRatio,r=this.fullHeight-t[1]*this.pixelRatio;return i[0]=e,i[1]=r,i}renderToScreen(t,i){const e=t[0]/this.pixelRatio,r=(this.fullHeight-t[1])/this.pixelRatio;i[0]=e,i[1]=r}computeUpGlobal(){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["f"])(Q,this.center,this.eye);const t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["l"])(this.center);t<1?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["s"])(this._up,0,0,1),this._markViewDirty()):Math.abs(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["d"])(Q,this.center))>.9999*Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["l"])(Q)*t||(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["c"])(this._up,Q,this.center),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["c"])(this._up,this._up,Q),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["n"])(this._up,this._up),this._markViewDirty())}computeUpLocal(){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["r"])(Q,this.eye,this.center),Math.abs(Q[2])<=.9999&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["a"])(Q,Q,Q[2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["s"])(this._up,-Q[0],-Q[1],1-Q[2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["n"])(this._up,this._up),this._markViewDirty())}_compareAndSetView(t,i){"number"==typeof t[0]&&isFinite(t[0])&&"number"==typeof t[1]&&isFinite(t[1])&&"number"==typeof t[2]&&isFinite(t[2])?Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["k"])(t,i)||(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["g"])(i,t),this._markViewDirty()):B.warn("Camera vector contains invalid number, ignoring value")}_markViewDirty(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0}_recomputeFrustum(){this._frustumDirty&&(Object(_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_12__["fromMatrix"])(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)}_ensureViewClean(){this._viewDirty&&(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["l"])(this._viewMatrix,this.eye,this._center,this._up),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["s"])(this._viewForward,-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["s"])(this._viewUp,this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_8__["s"])(this._viewRight,this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8]),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)}}const K=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),O=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Q=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),Z=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),$=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["createRenderScreenPointArray3"])();


/***/ }),

/***/ "GRr4":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/MergedRenderer.js ***!
  \***********************************************************************************************/
/*! exports provided: MergedRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergedRenderer", function() { return _; });
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/MapUtils.js */ "KOts");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "Lrt+");
/* harmony import */ var _lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/GLMaterials.js */ "sGEu");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/* harmony import */ var _WaterMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../WaterMaterial.js */ "H5PB");
/* harmony import */ var _Instance_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Instance.js */ "+NEi");
/* harmony import */ var _MergedGeometryBuffer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MergedGeometryBuffer.js */ "nlNz");
/* harmony import */ var _MergedGeometryBufferPool_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MergedGeometryBufferPool.js */ "3zY3");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils.js */ "tiP8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class _{constructor(e,t,s){this._rctx=e,this._materialRepository=t,this._material=s,this.type="MergedRenderer",this._dataByOrigin=new Map,this._renderCommandData=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],this._hasHighlights=!1,this._hasOccludees=!1,this._glMaterials=new _lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_6__["GLMaterials"](this._material,this._materialRepository),this._bufferWriter=s.createBufferWriter(),this._bufferPool=new _MergedGeometryBufferPool_js__WEBPACK_IMPORTED_MODULE_11__["MergedGeometryBufferPool"](e,s.vertexAttributeLocations,Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_5__["glLayout"])(this._bufferWriter.vertexBufferLayout))}dispose(){this._glMaterials.destroy(),this._dataByOrigin.forEach((e=>e.buffer.dispose())),this._dataByOrigin.clear(),this._bufferPool.dispose()}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&this._material instanceof _WaterMaterial_js__WEBPACK_IMPORTED_MODULE_8__["WaterMaterial"]}get rendersOccluded(){return!this.isEmpty&&1!==this._material.renderOccluded}modify(e){this.updateGeometries(e.updates),this.addAndRemoveGeometries(e.adds,e.removes),this.updateRenderCommands()}addAndRemoveGeometries(e,t){const s=this._bufferWriter,r=s.vertexBufferLayout.stride/4,i=this._dataByOrigin,a=v(e,t);a.forEach(((e,t)=>{a.delete(t);const o=e.toAdd.reduce(((e,t)=>e+s.elementCount(t.data)),0);let n=i.get(t);if(null==n)Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_7__["assert"])(0===e.toRemove.length),n=new A(e.origin,new _MergedGeometryBuffer_js__WEBPACK_IMPORTED_MODULE_10__["MergedGeometryBuffer"](this._bufferPool,o*r)),i.set(t,n);else if(0===e.toAdd.length&&n.instances.size===e.toRemove.length)return n.buffer.dispose(),void i.delete(t);let d=0;n.instances.forEach((e=>d+=e.to-e.from));const h=e.toRemove.reduce(((e,t)=>e+s.elementCount(t.data)),0),m=n.buffer.size,c=(d+o-h)*r,u=P;if(c<m/2?this.removeAndRebuild(n,e.toRemove,r,c,u):e.toRemove.length>0&&this.remove(n,e.toRemove,r,u),e.toAdd.length>0){const t=M;Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_7__["setMatrixTranslation3"])(t,-e.origin[0],-e.origin[1],-e.origin[2]),this.add(n,e.toAdd,r,t,u)}const g=n.buffer.vao.vertexBuffers.geometry;R(u),u.forAll((({from:e,to:t})=>{if(e<t){const s=n.buffer.array,r=4,i=e*r,a=t*r;g.setSubData(s,i,i,a)}})),u.clear(),n.drawCommandsDirty=!0}))}updateGeometries(e){const t=this._bufferWriter,s=t.vertexBufferLayout.stride/4;for(const r of e){const e=r.renderGeometry,i=this._dataByOrigin.get(e.origin.id),a=i&&i.instances.get(e.id);if(!a)return;const o=r.updateType;if(1&o&&(a.isVisible=e.instanceParameters.visible),9&o){const t=e.instanceParameters.visible;a.hasHighlights=!!e.instanceParameters.highlights&&t}if(16&o&&(a.hasOccludees=!!e.instanceParameters.occludees),6&o){const{array:r,vao:o}=i.buffer;Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["calculateTransformRelativeToOrigin"])(e,j,x),t.write({transformation:j,invTranspTransformation:x},e.data,t.vertexBufferLayout.createView(r.buffer),a.from),Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_7__["assert"])(a.from+t.elementCount(e.data)===a.to,"material VBO layout has changed"),o.vertexBuffers.geometry.setSubData(r,a.from*s*4,a.from*s*4,a.to*s*4)}i.drawCommandsDirty=!0}}updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((t=>{t.hasHiddenInstances=!1,t.hasHighlights=!1,t.hasOccludees=!1,Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_0__["someMap"])(t.instances,(e=>(e.isVisible?(e.hasHighlights&&(this._hasHighlights=!0,t.hasHighlights=!0),e.hasOccludees&&(this._hasOccludees=!0,t.hasOccludees=!0)):t.hasHiddenInstances=!0,t.hasHiddenInstances&&t.hasHighlights&&t.hasOccludees)))}));const t=e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.drawCommandsShadowHighlightRest=null,0===e.instances.size)return;if(!H(e)){const t=this._bufferWriter.vertexBufferLayout.stride,s=4*e.buffer.size/t;return void(e.drawCommandsDefault=[{first:0,count:s}])}const t=Object(_Instance_js__WEBPACK_IMPORTED_MODULE_9__["sortInstancesByRange"])(e.instances);e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[],e.drawCommandsShadowHighlightRest=[];for(const s of t)s.isVisible&&(s.hasOccludees?Object(_Instance_js__WEBPACK_IMPORTED_MODULE_9__["addOrMerge"])(e.drawCommandsOccludees,s):Object(_Instance_js__WEBPACK_IMPORTED_MODULE_9__["addOrMerge"])(e.drawCommandsDefault,s),s.hasHighlights?Object(_Instance_js__WEBPACK_IMPORTED_MODULE_9__["addOrMerge"])(e.drawCommandsHighlight,s):Object(_Instance_js__WEBPACK_IMPORTED_MODULE_9__["addOrMerge"])(e.drawCommandsShadowHighlightRest,s))};this._dataByOrigin.forEach((e=>{e.drawCommandsDirty&&(t(e),e.drawCommandsDirty=!1)}))}updateLogic(e){return this._material.update(e)}render(e,r,i){if(null!=e&&!this._material.requiresSlot(e,r))return!1;const a=5===r||7===r;if(a&&!this._hasHighlights)return!1;const o=6===r,n=!(a||o);if(this._dataByOrigin.forEach((e=>{if(a&&!e.hasHighlights)return;const s=(a?e.drawCommandsHighlight:o&&H(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault)||null,r=n&&e.drawCommandsOccludees||null;(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r))&&this._renderCommandData.push(new D(e.origin,e.buffer,s,r))})),0===this._renderCommandData.length)return!1;const d=this._rctx,h=this._glMaterials.load(d,r);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(h))return this._renderCommandData.clear(),!1;const f=h.beginSlot(i);return f.bindPipelineState(d,e,!1),d.useProgram(f.program),h.bind(i,f),this._renderCommandData.forAll((({origin:s,buffer:r,renderCommands:a,occludeeCommands:o})=>{i.origin=s,f.bindDraw(i),f.ensureAttributeLocations(r.vao),d.bindVAO(r.vao);const n=f.primitiveType;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a)&&this.renderCommands(d,n,a),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o)&&(f.bindPipelineState(d,e,!0),this.renderCommands(d,n,o),f.bindPipelineState(d,e,!1))})),this._renderCommandData.clear(),!0}renderCommands(e,t,s){for(let r=0;r<s.length;r++)e.drawArrays(t,s[r].first,s[r].count)}removeAndRebuild(e,t,s,r,i){for(const h of t)e.instances.delete(h.id);const a=Object(_Instance_js__WEBPACK_IMPORTED_MODULE_9__["sortInstancesByRange"])(e.instances);e.instances.clear();const o=e.buffer.size,n=e.buffer.alloc(r);let d=0;for(const h of a){const t=h.from*s,r=h.to*s;n.copy(d,t,r),h.from=d/s,d+=r-t,h.to=d/s,e.instances.set(h.id,h)}i.push(new _Instance_js__WEBPACK_IMPORTED_MODULE_9__["BufferRange"](0,n.hasNewBuffer?e.buffer.array.length:o)),n.dispose(),e.buffer.erase(d,i.back().to),e.holes.clear()}remove(e,t,s,r){for(const i of t){const t=i.id,a=e.instances.get(t),o=a.from*s,n=a.to*s;e.buffer.erase(o,n),e.holes.push(new _Instance_js__WEBPACK_IMPORTED_MODULE_9__["BufferRange"](a.from,a.to)),e.instances.delete(t),r.push(new _Instance_js__WEBPACK_IMPORTED_MODULE_9__["BufferRange"](o,n))}R(e.holes)}add(e,r,n,d,h){const l=this._bufferWriter;let m=l.vertexBufferLayout.createView(e.buffer.array.buffer);for(const c of r){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(c.transformation)?Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["m"])(j,d,c.transformation):d;Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["b"])(x,r);const b=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["t"])(x,x),p=l.elementCount(c.data),w=p*n;let y=B(e.holes,p);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(y)&&(y=e.buffer.size/n,e.buffer.grow(w),m=l.vertexBufferLayout.createView(e.buffer.array.buffer)),l.write({transformation:r,invTranspTransformation:b},c.data,m,y);const _=c.instanceParameters.visible,C=!!c.instanceParameters.highlights&&_,v=!!c.instanceParameters.occludees,O=new _Instance_js__WEBPACK_IMPORTED_MODULE_9__["Instance"](c.id,y,y+p,_,C,v);Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_7__["assert"])(null==e.instances.get(c.id)),e.instances.set(c.id,O),h.push(new _Instance_js__WEBPACK_IMPORTED_MODULE_9__["BufferRange"](O.from*n,O.to*n))}}get test(){return{material:this._material,glMaterials:this._glMaterials}}}class C{constructor(e){this.origin=e,this.toAdd=new Array,this.toRemove=new Array}}function v(e,t){const s=new Map;for(const r of e)O(s,r,!0);for(const r of t)O(s,r,!1);return s}function O(e,t,r){const i=t.origin;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i))return;let a=e.get(i.id);null==a&&(a=new C(i.vec3),e.set(i.id,a)),r?a.toAdd.push(t):a.toRemove.push(t)}function H(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}function B(e,t){let s;if(!e.some((e=>!(e.to-e.from<t)&&(s=e,!0))))return null;const r=s.from;return s.from+=t,s.from>=s.to&&e.removeUnordered(s),r}function R(e){const t=new Map;e.forAll((e=>t.set(e.from,e)));let s=!0;for(;s;)s=!1,e.forEach((r=>{const i=t.get(r.to);i&&(r.to=i.to,t.delete(i.from),e.removeUnordered(i),s=!0)}))}class A{constructor(e,t){this.origin=e,this.buffer=t,this.instances=new Map,this.holes=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!1}}class D{constructor(e,t,s,r){this.origin=e,this.buffer=t,this.renderCommands=s,this.occludeeCommands=r}}const P=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({deallocator:null}),M=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),j=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),x=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])();


/***/ }),

/***/ "GUL+":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js ***!
  \**************************************************************************************/
/*! exports provided: IntersectorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectorOptions", function() { return i; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=2}}


/***/ }),

/***/ "GWL5":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/ColorMaterial.glsl.js ***!
  \****************************************************************/
/*! exports provided: C, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return g; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js */ "wtEh");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js */ "Q3fD");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(g){const u=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_10__["ShaderBuilder"],c=1===g.output;return u.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:c}),u.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__["VertexColor"],g),u.vertex.uniforms.add("proj","mat4").add("view","mat4"),u.attributes.add("position","vec3"),u.varyings.add("vpos","vec3"),g.multipassTerrainEnabled&&u.varyings.add("depth","float"),c&&(u.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__["OutputDepth"],g),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("linearDepth","float")),u.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${g.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${c?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`transformPosition(proj, view, vpos);`}
    }
  `),u.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__["Slice"],g),u.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_8__["ColorConversion"]),g.multipassTerrainEnabled&&(u.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_5__["ReadLinearDepth"]),u.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_6__["multipassTerrainTest"],g)),u.fragment.uniforms.add("eColor","vec4"),4===g.output&&u.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_4__["OutputHighlight"]),u.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
  void main() {
    discardBySlice(vpos);
    ${g.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 color = ${g.attributeColor?"vColor * eColor;":"eColor;"}

    if (color.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_7__["symbolAlphaCutoff"])}) {
      discard;
    }

    ${7===g.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`gl_FragColor = vec4(color.a);`:""}

    ${0===g.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`gl_FragColor = highlightSlice(color, vpos); ${g.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${4===g.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`outputHighlight();`:""};
    ${1===g.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`outputDepth(linearDepth);`:""};
  }
  `),u}const u=Object.freeze({__proto__:null,build:g});


/***/ }),

/***/ "H5PB":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/WaterMaterial.js ***!
  \************************************************************************************/
/*! exports provided: WaterMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterMaterial", function() { return c; });
/* harmony import */ var _lib_AnimationTimer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/AnimationTimer.js */ "xFpo");
/* harmony import */ var _lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/GLMaterials.js */ "sGEu");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/Material.js */ "NbNv");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _WaterGLMaterial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WaterGLMaterial.js */ "pEW0");
/* harmony import */ var _WaterTechnique_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WaterTechnique.js */ "9JiU");
/* harmony import */ var _internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/DefaultBufferWriter.js */ "hnWO");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _internal_waterMaterialUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/waterMaterialUtils.js */ "uFVM");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_2__["Material"]{constructor(t){super(t,_internal_waterMaterialUtils_js__WEBPACK_IMPORTED_MODULE_8__["defaultWaterMaterialParameters"]),this._techniqueConfig=new _WaterTechnique_js__WEBPACK_IMPORTED_MODULE_5__["WaterTechniqueConfiguration"],this.animation=new _lib_AnimationTimer_js__WEBPACK_IMPORTED_MODULE_0__["AnimationTimer"]}getTechniqueConfig(e,t){return this._techniqueConfig.output=e,this._techniqueConfig.writeDepth=this.parameters.writeDepth,this._techniqueConfig.receiveShadows=this.parameters.receiveShadows,this._techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this._techniqueConfig.transparent=this.parameters.transparent,this._techniqueConfig.useSSR=this.parameters.ssrEnabled,this._techniqueConfig.isDraped=this.parameters.isDraped,this._techniqueConfig.transparencyPassType=t.transparencyPassType,this._techniqueConfig.enableOffset=t.camera.relativeElevation<_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_3__["OITPolygonOffsetLimit"],this._techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this._techniqueConfig.cullAboveGround=t.cullAboveGround,this._techniqueConfig}update(e){const t=Math.min(e.camera.relativeElevation,e.camera.distance);this.animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*t<p;const r=this.animation.advance(e);return this.animation.enabled&&r}intersect(e,t,r,i,a,n,s){Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_7__["intersectTriangleGeometry"])(e,t,i,a,n,void 0,s)}requiresSlot(e,r){switch(Object(_lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_1__["outputFromPass"])(r)){case 2:return 21===e;case 0:if(this.parameters.isDraped)return 20===e;break;case 4:return 2===e||20===e}let i=2;return this.parameters.transparent&&(i=this.parameters.writeDepth?4:7),e===i}createGLMaterial(e){if(0===e.output&&this.parameters.isDraped)return e.output=5,new _WaterGLMaterial_js__WEBPACK_IMPORTED_MODULE_4__["WaterGLMaterial"](e);switch(e.output){case 0:case 2:case 4:case 7:return new _WaterGLMaterial_js__WEBPACK_IMPORTED_MODULE_4__["WaterGLMaterial"](e)}return null}createBufferWriter(){return new _internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_6__["DefaultBufferWriter"](_internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_6__["PositionUVLayout"])}}const p=35e3;


/***/ }),

/***/ "IkXq":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js ***!
  \***********************************************************************************/
/*! exports provided: SceneLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneLighting", function() { return e; });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _Lightsources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lightsources.js */ "K8k0");
/* harmony import */ var _SphericalHarmonics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SphericalHarmonics.js */ "1R3H");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(){this._shOrder=2,this._ambientBoost=.4,this._oldSunlight={direction:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),ambient:{color:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),intensity:1},diffuse:{color:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),intensity:1}},this.globalFactor=.5,this.groundLightingFactor=.5,this._sphericalHarmonics=new _Lightsources_js__WEBPACK_IMPORTED_MODULE_2__["SphericalHarmonicsAmbientLight"],this._mainLight={intensity:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),direction:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(1,0,0),castShadows:!1}}get lightingMainDirection(){return this._mainLight.direction}setLightDirectionUniform(i){i.setUniform3fv("lightingMainDirection",this._mainLight.direction)}setUniforms(i,t=!1){const n=t?(1-this.groundLightingFactor)*(1-this.globalFactor):0;i.setUniform1f("lightingFixedFactor",n),i.setUniform1f("lightingGlobalFactor",this.globalFactor),this.setLightDirectionUniform(i),i.setUniform3fv("lightingMainIntensity",this._mainLight.intensity),i.setUniform1f("ambientBoostFactor",this._ambientBoost);const s=this._sphericalHarmonics;0===this._shOrder?i.setUniform3f("lightingAmbientSH0",s.r[0],s.g[0],s.b[0]):1===this._shOrder?(i.setUniform4f("lightingAmbientSH_R",s.r[0],s.r[1],s.r[2],s.r[3]),i.setUniform4f("lightingAmbientSH_G",s.g[0],s.g[1],s.g[2],s.g[3]),i.setUniform4f("lightingAmbientSH_B",s.b[0],s.b[1],s.b[2],s.b[3])):2===this._shOrder&&(i.setUniform3f("lightingAmbientSH0",s.r[0],s.g[0],s.b[0]),i.setUniform4f("lightingAmbientSH_R1",s.r[1],s.r[2],s.r[3],s.r[4]),i.setUniform4f("lightingAmbientSH_G1",s.g[1],s.g[2],s.g[3],s.g[4]),i.setUniform4f("lightingAmbientSH_B1",s.b[1],s.b[2],s.b[3],s.b[4]),i.setUniform4f("lightingAmbientSH_R2",s.r[5],s.r[6],s.r[7],s.r[8]),i.setUniform4f("lightingAmbientSH_G2",s.g[5],s.g[6],s.g[7],s.g[8]),i.setUniform4f("lightingAmbientSH_B2",s.b[5],s.b[6],s.b[7],s.b[8]))}set(s){Object(_SphericalHarmonics_js__WEBPACK_IMPORTED_MODULE_3__["combineLights"])(s,this._shOrder,this._mainLight,this._sphericalHarmonics),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this._oldSunlight.direction,this._mainLight.direction);const o=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*o,this._oldSunlight.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*o,this._oldSunlight.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*o,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this._oldSunlight.diffuse.color,this._mainLight.intensity,o),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(g,this._oldSunlight.diffuse.color),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(g,g,this._ambientBoost*this.globalFactor),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,g)}get old(){return this._oldSunlight}}const g=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();


/***/ }),

/***/ "K8k0":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js ***!
  \**********************************************************************************/
/*! exports provided: AmbientLight, FillLight, MainLight, SphericalHarmonicsAmbientLight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbientLight", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillLight", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLight", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SphericalHarmonicsAmbientLight", function() { return r; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(t=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()){this.intensity=t}}class c{constructor(i=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),c=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(.57735,.57735,.57735)){this.intensity=i,this.direction=c}}class o{constructor(i=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),c=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(.57735,.57735,.57735),o=!0){this.intensity=i,this.direction=c,this.castShadows=o}}class r{constructor(){this.r=[0],this.g=[0],this.b=[0]}}


/***/ }),

/***/ "Kq27":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js ***!
  \***********************************************************************************************/
/*! exports provided: ScreenSpacePass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSpacePass", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){o.attributes.add("position","vec2"),o.varyings.add("uv","vec2"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      uv = position * 0.5 + vec2(0.5);
    }
  `)}


/***/ }),

/***/ "LfEk":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/HUDMaterial.js ***!
  \**********************************************************************************/
/*! exports provided: HUDMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUDMaterial", function() { return W; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _core_libs_gl_matrix_2_types_mat4_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/types/mat4.js */ "nhCg");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../support/buffer/InterleavedLayout.js */ "/ADo");
/* harmony import */ var _lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/geometryDataUtils.js */ "EDiM");
/* harmony import */ var _lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/GLMaterials.js */ "sGEu");
/* harmony import */ var _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/GLMaterialTexture.js */ "aK8v");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/Material.js */ "NbNv");
/* harmony import */ var _lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/screenSizePerspectiveUtils.js */ "2hxh");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/Util.js */ "EVMh");
/* harmony import */ var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/bufferWriterUtils.js */ "WVfK");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _renderers_utils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./renderers/utils.js */ "tiP8");
/* harmony import */ var _chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../chunks/HUDMaterial.glsl.js */ "DZYy");
/* harmony import */ var _shaders_HUDMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shaders/HUDMaterialTechnique.js */ "3ohZ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class W extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_17__["Material"]{constructor(e){super(e,me),this.techniqueConfig=new _shaders_HUDMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_24__["HUDMaterialTechniqueConfiguration"]}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.verticalOffset=!!this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=!!this.parameters.screenSizePerspective,this.techniqueConfig.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits?1:0,this.techniqueConfig.polygonOffsetEnabled=this.parameters.polygonOffset,this.techniqueConfig.isDraped=this.parameters.isDraped,this.techniqueConfig.occlusionTestEnabled=this.parameters.occlusionTest,this.techniqueConfig.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this.techniqueConfig.sdf=this.parameters.textureIsSignedDistanceField,this.techniqueConfig.vvSize=!!this.parameters.vvSizeEnabled,this.techniqueConfig.vvColor=!!this.parameters.vvColorEnabled,0===e&&(this.techniqueConfig.debugDrawBorder=!!this.parameters.debugDrawBorder),4===e&&(this.techniqueConfig.binaryHighlightOcclusion=this.parameters.binaryHighlightOcclusion),this.techniqueConfig.depthEnabled=this.parameters.depthEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.multipassGeometryEnabled=t.multipassGeometryEnabled,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,s,r,i,n,a,o,c,l){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l)?this.intersectDrapedHudGeometry(e,a,o,c,l):this.intersectHudGeometry(e,s,r,i,o,c)}intersectDrapedHudGeometry(e,s,r,i,n){const a=e.vertexAttributes.get("position"),o=e.vertexAttributes.get("size"),c=this.parameters,l=Object(_chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_23__["c"])(c);let f=1,u=1;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i)){const e=i(ce);f=e[0],u=e[5]}f*=e.screenToWorldRatio,u*=e.screenToWorldRatio;const p=fe*e.screenToWorldRatio;for(let t=0;t<a.data.length/a.size;t++){const i=t*a.size,m=a.data[i],d=a.data[i+1],h=t*o.size;let g;ue[0]=o.data[h]*f,ue[1]=o.data[h+1]*u,c.textureIsSignedDistanceField&&(g=c.outlineSize*e.screenToWorldRatio/2),Q(s,m,d,ue,p,g,c,l)&&r(n.dist,n.normal,-1,!0)}}intersectHudGeometry(e,s,i,a,o,c){if(!a.options.selectionMode||!a.options.hud||Object(_renderers_utils_js__WEBPACK_IMPORTED_MODULE_22__["isInstanceHidden"])(s))return;const l=this.parameters;let x=1,b=1;if(Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(re,i),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(c)){const e=c(ce);x=e[0],b=e[5],K(re)}const S=e.vertexAttributes.get("position"),z=e.vertexAttributes.get("size"),O=e.vertexAttributes.get("normal"),P=e.vertexAttributes.get("auxpos1");Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_19__["assert"])(S.size>=3);const A=a.point,C=a.camera,q=Object(_chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_23__["c"])(l);x*=C.pixelRatio,b*=C.pixelRatio;const w="screen"===this.parameters.centerOffsetUnits;for(let t=0;t<S.data.length/S.size;t++){const e=t*S.size;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["s"])(Z,S.data[e],S.data[e+1],S.data[e+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["m"])(Z,Z,i);const s=t*z.size;ue[0]=z.data[s]*x,ue[1]=z.data[s+1]*b,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["m"])(Z,Z,C.viewMatrix);const r=t*P.size;if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["s"])(ae,P.data[r+0],P.data[r+1],P.data[r+2]),!w&&(Z[0]+=ae[0],Z[1]+=ae[1],0!==ae[2])){const e=ae[2];Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["n"])(ae,Z),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["f"])(Z,Z,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["a"])(ae,ae,e))}const c=t*O.size;if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["s"])($,O.data[c],O.data[c+1],O.data[c+2]),this.normalAndViewAngle($,re,C,oe),this.applyVerticalOffsetTransformationView(Z,oe,C,X),C.applyProjection(Z,ee),ee[0]>-1){let e=Math.floor(ee[0])+this.parameters.screenOffset[0],t=Math.floor(ee[1])+this.parameters.screenOffset[1];w&&(e+=ae[0],0!==ae[1]&&(t+=Object(_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_18__["applyScaleFactor"])(ae[1],X.factorAlignment))),Object(_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_18__["applyPrecomputedScaleFactor"])(ue,X.factor,ue);const s=le*C.pixelRatio;let r;if(l.textureIsSignedDistanceField&&(r=l.outlineSize*C.pixelRatio/2),Q(A,e,t,ue,s,r,l,q)){const e=a.ray;if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["m"])(se,Z,Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_5__["b"])(ne,C.viewMatrix)),ee[0]=A[0],ee[1]=A[1],C.unprojectFromRenderScreen(ee,Z)){const t=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_10__["c"])();Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["g"])(t,e.direction);const s=1/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["l"])(t);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["a"])(t,t,s);o(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["i"])(e.origin,Z)*s,t,-1,!0,1,se)}}}}}computeAttachmentOrigin(e,t){const s=e.vertexAttributes;if(!s)return!1;const r=s.get("position"),i=e.indices.get("position");return Object(_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_14__["computeAttachmentOriginPoints"])(r,i,t)}createBufferWriter(){return new he(this)}normalAndViewAngle(e,t,s,i){return Object(_core_libs_gl_matrix_2_types_mat4_js__WEBPACK_IMPORTED_MODULE_11__["isMat4"])(t)&&(t=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(ie,t)),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["t"])(i.normal,e,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["m"])(i.normal,i.normal,s.viewInverseTransposeMatrix),i.cosAngle=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["d"])(te,pe),i}updateScaleInfo(e,t,s){const r=this.parameters;r.screenSizePerspective?Object(_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_18__["precomputeScaleFactor"])(s,t,r.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),r.screenSizePerspectiveAlignment?Object(_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_18__["precomputeScaleFactor"])(s,t,r.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,s,r,i,n,a){const o=this.normalAndViewAngle(t,s,i,oe);return this.applyVerticalGroundOffsetView(e,o,i,a),this.applyVerticalOffsetTransformationView(a,o,i,n),this.applyPolygonOffsetView(a,o,r[3],i,a),this.applyCenterOffsetView(a,r,a),a}applyShaderOffsetsNDC(e,s,r,i,n){return this.applyCenterOffsetNDC(e,s,r,i),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["g"])(n,i),this.applyPolygonOffsetNDC(i,s,r,i),i}applyPolygonOffsetView(t,s,r,i,n){const a=i.aboveGround?1:-1;let o=Math.sign(r);0===o&&(o=a);const c=a*o;if(this.parameters.shaderPolygonOffset<=0)return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["g"])(n,t);const l=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.abs(s.cosAngle),.01,1),f=1-Math.sqrt(1-l*l)/l/i.viewport[2];return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["a"])(n,t,c>0?f:1/f),n}applyVerticalGroundOffsetView(e,t,s,r){const i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["l"])(e),n=s.aboveGround?1:-1,a=.5*s.computeRenderPixelSizeAtDist(i),o=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["a"])(Z,t.normal,n*a);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["b"])(r,e,o),r}applyVerticalOffsetTransformationView(e,t,s,r){const i=this.parameters;if(!i.verticalOffset||!i.verticalOffset.screenLength){if(i.screenSizePerspective||i.screenSizePerspectiveAlignment){const s=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["l"])(e);this.updateScaleInfo(r,s,t.cosAngle)}else r.factor.scale=1,r.factorAlignment.scale=1;return e}const n=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["l"])(e),a=i.screenSizePerspectiveAlignment||i.screenSizePerspective,o=Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_21__["verticalOffsetAtDistance"])(s,n,i.verticalOffset,t.cosAngle,a);return this.updateScaleInfo(r,n,t.cosAngle),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["a"])(t.normal,t.normal,o),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["b"])(e,e,t.normal)}applyCenterOffsetView(e,t,s){const r="screen"!==this.parameters.centerOffsetUnits;return s!==e&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["g"])(s,e),r&&(s[0]+=t[0],s[1]+=t[1],t[2]&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["n"])($,s),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["b"])(s,s,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["a"])($,$,t[2])))),s}applyCenterOffsetNDC(e,t,s,r){const i="screen"!==this.parameters.centerOffsetUnits;return r!==e&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["g"])(r,e),i||(r[0]+=t[0]/s.fullWidth*2,r[1]+=t[1]/s.fullHeight*2),r}applyPolygonOffsetNDC(e,t,s,r){const i=this.parameters.shaderPolygonOffset;if(e!==r&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__["g"])(r,e),i){const e=s.aboveGround?1:-1,n=e*Math.sign(t[3]);r[2]-=(n||e)*i}return r}requiresSlot(e,t){const s=Object(_lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_15__["outputFromPass"])(t);if(0===s||7===s){if(20===e)return!0;const t=this.parameters.drawInSecondSlot?17:16;return this.parameters.occlusionTest&&11===e||e===t}return e===(this.parameters.drawInSecondSlot?17:16)||20===e}createGLMaterial(e){return 0===e.output||7===e.output?new N(e):4===e.output?new _(e):null}calculateRelativeScreenBounds(e,t,s=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__["create"])()){return J(this.parameters,e,t,s),s[2]=s[0]+e[0],s[3]=s[1]+e[1],s}}class _ extends _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_16__["default"]{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this.selectProgram(e)}selectProgram(e){return this.ensureTechnique(_shaders_HUDMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_24__["HUDMaterialTechnique"],e)}beginSlot(e){return this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e)}}class N extends _{isOcclusionSlot(e){return 11===e.slot&&this._material.parameters.occlusionTest&&(0===this._output||7===this._output)}selectProgram(e){return this.ensureTechnique(_shaders_HUDMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_24__["HUDMaterialTechnique"],e,this.isOcclusionSlot(e)?6:this._output)}bind(e,t){this.isOcclusionSlot(e)||(this.bindTextures(t.program),this.bindTextureScale(t.program)),t.bindPass(this._material.parameters,e)}}function J(e,t,s,r=Y){return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r,e.anchorPos),r[0]*=-t[0],r[1]*=-t[1],r[0]+=e.screenOffset[0]*s,r[1]+=e.screenOffset[1]*s,r}function K(e){const t=e[0],s=e[1],r=e[2],i=e[3],n=e[4],a=e[5],o=e[6],c=e[7],l=e[8],f=1/Math.sqrt(t*t+s*s+r*r),u=1/Math.sqrt(i*i+n*n+a*a),p=1/Math.sqrt(o*o+c*c+l*l);return e[0]=t*f,e[1]=s*f,e[2]=r*f,e[3]=i*u,e[4]=n*u,e[5]=a*u,e[6]=o*p,e[7]=c*p,e[8]=l*p,e}function Q(e,t,s,r,i,n,a,o){let c=t-i-(o[0]>0?r[0]*o[0]:0),l=c+r[0]+2*i,f=s-i-(o[1]>0?r[1]*o[1]:0),u=f+r[1]+2*i;if(a.textureIsSignedDistanceField){const e=a.distanceFieldBoundingBox;c+=r[0]*e[0],f+=r[1]*e[1],l-=r[0]*(1-e[2]),u-=r[1]*(1-e[3]),c-=n,l+=n,f-=n,u+=n}return e[0]>c&&e[0]<l&&e[1]>f&&e[1]<u}const X={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},Y=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_8__["a"])(),Z=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_10__["c"])(),$=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_10__["c"])(),ee=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createRenderScreenPointArray3"])(),te=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_10__["c"])(),se=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_10__["c"])(),re=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),ie=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),ne=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),ae=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_10__["c"])(),oe={normal:te,cosAngle:0},ce=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),le=1,fe=2,ue=[0,0],pe=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_10__["f"])(0,0,1),me={texCoordScale:[1,1],occlusionTest:!0,binaryHighlightOcclusion:!0,drawInSecondSlot:!1,color:[1,1,1,1],outlineColor:[1,1,1,1],outlineSize:0,textureIsSignedDistanceField:!1,distanceFieldBoundingBox:null,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],screenOffset:[0,0],verticalOffset:null,screenSizePerspective:null,screenSizePerspectiveAlignment:null,slicePlaneEnabled:!1,anchorPos:Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_8__["f"])(.5,.5),shaderPolygonOffset:1e-5,polygonOffset:!1,textureId:null,centerOffsetUnits:"world",depthEnabled:!0,pixelSnappingEnabled:!0,debugDrawBorder:!1,isDraped:!1,..._lib_Material_js__WEBPACK_IMPORTED_MODULE_17__["materialParametersDefaults"]},de=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_13__["newLayout"])().vec3f("position").vec3f("normal").vec2f("uv0").vec4u8("color").vec2f("size").vec4f("auxpos1").vec4f("auxpos2");class he{constructor(e){this.material=e,this.vertexBufferLayout=de}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get("position").length}write(e,t,s,r){Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_20__["writePosition"])(t.indices.get("position"),t.vertexAttributes.get("position").data,e.transformation,s.position,r,6),Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_20__["writeNormal"])(t.indices.get("normal"),t.vertexAttributes.get("normal").data,e.invTranspTransformation,s.normal,r,6);{const e=t.vertexAttributes.get("uv0").data;let i,n,a,o;if(null==e||e.length<4){const e=this.material.parameters;i=0,n=0,a=e.texCoordScale[0],o=e.texCoordScale[1]}else i=e[0],n=e[1],a=e[2],o=e[3];a=Math.min(1.99999,a+1),o=Math.min(1.99999,o+1);const c=t.indices.get("position").length,l=s.uv0;let f=r;for(let t=0;t<c;++t)l.set(f,0,i),l.set(f,1,n),f+=1,l.set(f,0,a),l.set(f,1,n),f+=1,l.set(f,0,a),l.set(f,1,o),f+=1,l.set(f,0,a),l.set(f,1,o),f+=1,l.set(f,0,i),l.set(f,1,o),f+=1,l.set(f,0,i),l.set(f,1,n),f+=1}Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_20__["writeColor"])(t.indices.get("color"),t.vertexAttributes.get("color").data,4,s.color,r,6);{const e=t.indices.get("size"),i=t.vertexAttributes.get("size").data,n=e.length,a=s.size;let o=r;for(let t=0;t<n;++t){const s=i[2*e[t]],r=i[2*e[t]+1];for(let e=0;e<6;++e)a.set(o,0,s),a.set(o,1,r),o+=1}}t.indices.get("auxpos1")&&t.vertexAttributes.get("auxpos1")&&Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_20__["writeBufferVec4"])(t.indices.get("auxpos1"),t.vertexAttributes.get("auxpos1").data,s.auxpos1,r,6),t.indices.get("auxpos2")&&t.vertexAttributes.get("auxpos2")&&Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_20__["writeBufferVec4"])(t.indices.get("auxpos2"),t.vertexAttributes.get("auxpos2").data,s.auxpos2,r,6)}}


/***/ }),

/***/ "Lg+x":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/elevationAlignmentUtils.js ***!
  \***************************************************************************************/
/*! exports provided: SampleElevationInfo, SymbolUpdateType, applyElevationAlignmentForHUD, applyPerVertexElevationAlignment, elevationModeChangeUpdateType, evaluateElevationAlignmentAtPoint, evaluateElevationInfoAtPoint, needsElevationUpdates2D, needsElevationUpdates3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleElevationInfo", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolUpdateType", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyElevationAlignmentForHUD", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPerVertexElevationAlignment", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elevationModeChangeUpdateType", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateElevationAlignmentAtPoint", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateElevationInfoAtPoint", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needsElevationUpdates2D", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needsElevationUpdates3D", function() { return v; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _layers_graphics_dehydratedFeatureUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layers/graphics/dehydratedFeatureUtils.js */ "hPSC");
/* harmony import */ var _graphicUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphicUtils.js */ "uljd");
/* harmony import */ var _support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../support/ElevationProvider.js */ "DLk3");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(e,t,n,o,r,s,a,l,c,u,f){const d=O[f.mode];let m,p,g=0;if(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__["projectBuffer"])(e,t,n,o,c.spatialReference,r,l))return d.requiresAlignment(f)?(g=d.applyElevationAlignmentBuffer(o,r,s,a,l,c,u,f),m=s,p=a):(m=o,p=r),Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__["projectBuffer"])(m,c.spatialReference,p,s,u.spatialReference,a,l)?g:void 0}function d(n,o,r,i,s){const l=(Object(_layers_graphics_dehydratedFeatureUtils_js__WEBPACK_IMPORTED_MODULE_6__["isDehydratedPoint"])(n)?n.z:Object(_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_8__["isSamplePosition"])(n)?n.array[n.offset+2]:n[2])||0;switch(r.mode){case"on-the-ground":{const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(Object(_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_8__["getElevationAtPoint"])(o,n,"ground"),0);return s.verticalDistanceToGround=0,s.sampledElevation=e,void(s.z=e)}case"relative-to-ground":{const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(Object(_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_8__["getElevationAtPoint"])(o,n,"ground"),0),a=r.geometryZWithOffset(l,i);return s.verticalDistanceToGround=a,s.sampledElevation=e,void(s.z=a+e)}case"relative-to-scene":{const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(Object(_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_8__["getElevationAtPoint"])(o,n,"scene"),0),a=r.geometryZWithOffset(l,i);return s.verticalDistanceToGround=a,s.sampledElevation=e,void(s.z=a+e)}case"absolute-height":{const e=r.geometryZWithOffset(l,i),a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(Object(_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_8__["getElevationAtPoint"])(o,n,"ground"),0);return s.verticalDistanceToGround=e-a,s.sampledElevation=a,void(s.z=e)}default:return Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(r.mode),void(s.z=0)}}function m(e,t,n,o){return d(e,t,n,o,z),z.z}function p(e,t,n){return null==t||null==n?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===n?e.staysOnTheGround:t===n||"on-the-ground"!==t&&"on-the-ground"!==n?x.UPDATE:e.onTheGroundChanged}function g(e){return"relative-to-ground"===e||"relative-to-scene"===e}function v(e){return"absolute-height"!==e}function h(e,t,o,r,i){d(t,o,i,r,z),Object(_graphicUtils_js__WEBPACK_IMPORTED_MODULE_7__["updateVertexAttributeAuxpos1w"])(e,z.verticalDistanceToGround);const a=z.sampledElevation,c=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U,e.transformation);C[0]=t.x,C[1]=t.y,C[2]=z.z;return Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__["computeTranslationToOriginAndRotation"])(t.spatialReference,C,c,r.spatialReference)?e.transformation=c:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function E(e,n,o,r,i,s){let a=0;const l=s.spatialReference;n*=3,r*=3;for(let c=0;c<i;++c){const i=e[n+0],c=e[n+1],u=e[n+2],f=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(s.getElevation(i,c,u,l,"ground"),0);a+=f,o[r+0]=i,o[r+1]=c,o[r+2]=f,n+=3,r+=3}return a/i}function y(e,n,o,r,i,s,a,l){let c=0;const u=l.calculateOffsetRenderUnits(a),f=l.featureExpressionInfoContext,d=s.spatialReference;n*=3,r*=3;for(let m=0;m<i;++m){const i=e[n+0],a=e[n+1],l=e[n+2],m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(s.getElevation(i,a,l,d,"ground"),0);c+=m,o[r+0]=i,o[r+1]=a,o[r+2]=null==f?l+m+u:m+u,n+=3,r+=3}return c/i}function A(e,n,o,r,i,s,a,l){let c=0;const u=l.calculateOffsetRenderUnits(a),f=l.featureExpressionInfoContext,d=s.spatialReference;n*=3,r*=3;for(let m=0;m<i;++m){const i=e[n+0],a=e[n+1],l=e[n+2],m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(s.getElevation(i,a,l,d,"scene"),0);c+=m,o[r+0]=i,o[r+1]=a,o[r+2]=null==f?l+m+u:m+u,n+=3,r+=3}return c/i}function R(e){const t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return 0!==t||null!=n}function T(e,t,n,o,r,i,s,a){const l=a.calculateOffsetRenderUnits(s),c=a.featureExpressionInfoContext;t*=3,o*=3;for(let u=0;u<r;++u){const r=e[t+0],i=e[t+1],s=e[t+2];n[o+0]=r,n[o+1]=i,n[o+2]=null==c?s+l:l,t+=3,o+=3}return 0}class j{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var x;!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(x||(x={}));const O={"absolute-height":{applyElevationAlignmentBuffer:T,requiresAlignment:R},"on-the-ground":{applyElevationAlignmentBuffer:E,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:y,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:A,requiresAlignment:()=>!0}},U=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),z=new j,C=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])();


/***/ }),

/***/ "Lrt+":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js ***!
  \*********************************************************************/
/*! exports provided: glLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glLayout", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,o=0){const n=t.stride;return t.fieldNames.filter((e=>{const o=t.fields.get(e).optional;return!(o&&o.glPadding)})).map((r=>{const i=t.fields.get(r),s=i.constructor.ElementCount,u=e(i.constructor.ElementType),f=i.offset,l=!(!i.optional||!i.optional.glNormalized);return{name:r,stride:n,count:s,type:u,offset:f,normalized:l,divisor:o}}))}function e(t){const e=o[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const o={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};


/***/ }),

/***/ "M+I8":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: WaterDistortion, bindWaterDistortionUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterDistortion", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindWaterDistortionUniforms", function() { return a; });
/* harmony import */ var _FoamRendering_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoamRendering.glsl.js */ "2YHA");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){r.fragment.uniforms.add("texWaveNormal","sampler2D"),r.fragment.uniforms.add("texWavePerturbation","sampler2D"),r.fragment.uniforms.add("waveParams","vec4"),r.fragment.uniforms.add("waveDirection","vec2"),r.include(_FoamRendering_glsl_js__WEBPACK_IMPORTED_MODULE_0__["FoamIntensity"]),r.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture2D(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}function a(e,t){e.setUniform4f("waveParams",t.waveStrength,t.waveTextureRepeat,t.flowStrength,t.flowOffset),e.setUniform2f("waveDirection",t.waveDirection[0]*t.waveVelocity,t.waveDirection[1]*t.waveVelocity)}


/***/ }),

/***/ "N0ja":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/NativeLineMaterial.js ***!
  \*****************************************************************************************/
/*! exports provided: NativeLineMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeLineMaterial", function() { return G; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../geometry/support/lineSegment.js */ "vX5d");
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/plane.js */ "colF");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/geometryDataUtils.js */ "EDiM");
/* harmony import */ var _lib_GLMaterial_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/GLMaterial.js */ "1/dN");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/Material.js */ "NbNv");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/Util.js */ "EVMh");
/* harmony import */ var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/bufferWriterUtils.js */ "WVfK");
/* harmony import */ var _internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/DefaultBufferWriter.js */ "hnWO");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _renderers_utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./renderers/utils.js */ "tiP8");
/* harmony import */ var _shaders_NativeLineTechnique_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shaders/NativeLineTechnique.js */ "uyPU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const V=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial");class G extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_11__["Material"]{constructor(e){super(e,F),this._techniqueConfig=new _shaders_NativeLineTechnique_js__WEBPACK_IMPORTED_MODULE_17__["NativeLineTechniqueConfiguration"]}getTechniqueConfig(e,r){this._techniqueConfig.output=e,this._techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this._techniqueConfig.vertexColors=this.parameters.vertexColors,this._techniqueConfig.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._techniqueConfig.draped=20===r.slot;const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.parameters.stipplePattern);return this._techniqueConfig.stippleEnabled=s,this._techniqueConfig.stippleOffColorEnabled=s&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.parameters.stippleOffColor),this._techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this._techniqueConfig.stipplePreferContinuous=this.parameters.stipplePreferContinuous,this._techniqueConfig}getPassParameters(){return this.parameters}intersect(e,r,s,i,o,n,a,u,c){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(c)?Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_15__["intersectDrapedRenderLineGeometry"])(e,i,c,n,1,a):this.intersectLineGeometry(e,r,s,i,a)}intersectLineGeometry(e,t,r,s,m){if(!s.options.selectionMode||Object(_renderers_utils_js__WEBPACK_IMPORTED_MODULE_16__["isInstanceHidden"])(t))return;if(!Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_12__["isTranslationMatrix"])(r))return void V.error("intersection assumes a translation-only matrix");const h=e.vertexAttributes.get("position").data,d=s.camera,j=$;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["c"])(j,s.point);const _=2;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(ee[0],j[0]-_,j[1]+_,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(ee[1],j[0]+_,j[1]+_,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(ee[2],j[0]+_,j[1]-_,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(ee[3],j[0]-_,j[1]-_,0);for(let i=0;i<4;i++)if(!d.unprojectFromRenderScreen(ee[i],te[i]))return;Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(d.eye,te[0],te[1],re),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(d.eye,te[1],te[2],se),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(d.eye,te[2],te[3],ie),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(d.eye,te[3],te[0],oe);let P=Number.MAX_VALUE,q=0;for(let i=0;i<h.length-5;i+=3){if(W[0]=h[i]+r[12],W[1]=h[i+1]+r[13],W[2]=h[i+2]+r[14],D[0]=h[i+3]+r[12],D[1]=h[i+4]+r[13],D[2]=h[i+5]+r[14],Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(re,W)<0&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(re,D)<0||Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(se,W)<0&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(se,D)<0||Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(ie,W)<0&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(ie,D)<0||Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(oe,W)<0&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(oe,D)<0)continue;if(d.projectToRenderScreen(W,I),d.projectToRenderScreen(D,J),I[2]<0&&J[2]>0){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(X,W,D);const e=d.frustum,t=-Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(e[4],W)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(X,Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["normal"])(e[4]));Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(X,X,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(W,W,X),d.projectToRenderScreen(W,I)}else if(I[2]>0&&J[2]<0){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(X,D,W);const e=d.frustum,t=-Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["signedDistance"])(e[4],D)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(X,Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["normal"])(e[4]));Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(X,X,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(D,D,X),d.projectToRenderScreen(D,J)}else if(I[2]<0&&J[2]<0)continue;I[2]=0,J[2]=0;const e=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_6__["distance2"])(Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_6__["fromPoints"])(I,J,Y),j);e<P&&(P=e,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(K,W),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(Q,D),q=i/3)}const w=s.rayBegin,L=s.rayEnd;if(P<_*_){let e=Number.MAX_VALUE;if(Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_6__["closestLineSegmentPoint"])(Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_6__["fromPoints"])(K,Q,Y),Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_6__["fromPoints"])(w,L,Z),z)){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(z,z,w);const t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(z);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(z,z,1/t),e=t/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(w,L)}m(e,z,q,!1)}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return!1;const s=r.get("position");return Object(_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_9__["computeAttachmentOriginLines"])(s,null,!1,t)}requiresSlot(e){return 2===e||20===e}createGLMaterial(e){return 0===e.output||4===e.output?new N(e):null}createBufferWriter(){const e=this.parameters.vertexColors?_internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_14__["PositionColorLayout"]:_internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_14__["PositionLayout"];return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.parameters.stipplePattern)?new _internal_DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_14__["DefaultBufferWriter"](e):new k(e.clone().vec3f("auxpos1").vec2f("uv0"))}}class N extends _lib_GLMaterial_js__WEBPACK_IMPORTED_MODULE_10__["default"]{updateParameters(e){return this.ensureTechnique(_shaders_NativeLineTechnique_js__WEBPACK_IMPORTED_MODULE_17__["NativeLineTechnique"],e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0===this._output&&this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.getPassParameters(),e)}}class k{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,s){Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_13__["writeDefaultAttributes"])(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,s),this.writeAuxpos1(e,t,r,s),this.writeUV0(e,t,r,s)}writeAuxpos1(e,t,r,s){const i=r.getField("auxpos1",_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"]),o=t.indices.get("position"),n=t.vertexAttributes.get("position").data,a=e.transformation,u=i.typedBufferStride,c=i.typedBuffer;s*=u;for(let l=0;l<o.length-1;l+=2)for(const e of[1,0]){const t=3*o[l+e],r=n[t],i=n[t+1],f=n[t+2],p=a[0]*r+a[4]*i+a[8]*f+a[12],m=a[1]*r+a[5]*i+a[9]*f+a[13],h=a[2]*r+a[6]*i+a[10]*f+a[14];c[s]=p,c[s+1]=m,c[s+2]=h,s+=u}}writeUV0(e,t,r,s){var i;const n=r.getField("uv0",_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2f"]),a=t.indices.get("position"),u=t.vertexAttributes.get("position").data,c=null==(i=t.vertexAttributes.get("distanceToStart"))?void 0:i.data,f=e.transformation,h=n.typedBufferStride,d=n.typedBuffer;let g=0;d[s*=h]=0,d[s+1]=g,s+=h;const v=3*a[0],b=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(W,u[v],u[v+1],u[v+2]);f&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(b,b,f);const j=D,C=a.length-1;let y=1;const x=c?(e,t,r)=>g=c[r]:(e,t,r)=>g+=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(e,t);for(let p=1;p<C;p+=2){const e=3*a[p];Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(j,u[e],u[e+1],u[e+2]),f&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(j,j,f),x(b,j,y++);for(let t=0;t<2;++t)d[s]=1-t,d[s+1]=g,s+=h;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(b,j)}const _=3*a[C];Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(j,u[_],u[_+1],u[_+2]),f&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(j,j,f),x(b,j,y),d[s]=1,d[s+1]=g}}const F={color:[1,1,1,1],vertexColors:!1,slicePlaneEnabled:!1,width:1,stipplePattern:null,stippleOffColor:null,stipplePreferContinuous:!0,sceneHasOcludees:!1,..._lib_Material_js__WEBPACK_IMPORTED_MODULE_11__["materialParametersDefaults"]},W=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),D=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),X=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),z=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),I=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createRenderScreenPointArray3"])(),J=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createRenderScreenPointArray3"])(),K=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Q=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Y=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_6__["create"])(),Z=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_6__["create"])(),$=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),ee=[Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createRenderScreenPointArray3"])(),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createRenderScreenPointArray3"])(),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createRenderScreenPointArray3"])(),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["createRenderScreenPointArray3"])()],te=[Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])()],re=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),se=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),ie=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),oe=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__["create"])();


/***/ }),

/***/ "NUQ5":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/lineStippleUtils.js ***!
  \***************************************************************************************/
/*! exports provided: createStipplePattern, createStipplePatternSimple, getStipplePatternForLinePattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStipplePattern", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStipplePatternSimple", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStipplePatternForLinePattern", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},s={dash:d.dash,"dash-dot":[...d.dash,...d.dot],dot:d.dot,"long-dash":d["long-dash"],"long-dash-dot":[...d["long-dash"],...d.dot],"long-dash-dot-dot":[...d["long-dash"],...d.dot,...d.dot],none:null,"short-dash":d["short-dash"],"short-dash-dot":[...d["short-dash"],...d["short-dot"]],"short-dash-dot-dot":[...d["short-dash"],...d["short-dot"],...d["short-dot"]],"short-dot":d["short-dot"],solid:null},h=8;function r(t,d=2){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)?t:{pattern:t.slice(),pixelRatio:d}}function a(o,t=2){return{pattern:[o,o],pixelRatio:t}}function n(o){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)&&"style"===o.type?r(s[o.style],h):null}


/***/ }),

/***/ "PkRl":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/TextureOnly.glsl.js ***!
  \**************************************************************/
/*! exports provided: T, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js */ "Kq27");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){const n=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__["ShaderBuilder"];return n.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_js__WEBPACK_IMPORTED_MODULE_0__["ScreenSpacePass"]),n.fragment.uniforms.add("tex","sampler2D"),n.fragment.uniforms.add("color","vec4"),n.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * color;
}`),n}const s=Object.freeze({__proto__:null,build:n});


/***/ }),

/***/ "Q5Uc":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialRepository.js ***!
  \*************************************************************************************/
/*! exports provided: GLMaterialRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLMaterialRepository", function() { return n; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/NestedMap.js */ "+dDh");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository");class l{constructor(e){this._glMaterial=e,this.refCnt=0,this._glMaterial=e}incRefCnt(){++this.refCnt}decRefCnt(){--this.refCnt,Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(this.refCnt>=0)}getRefCnt(){return this.refCnt}get glMaterial(){return this._glMaterial}}class n{constructor(e,t,i,r){this._textureRepository=e,this._techniqueRepository=t,this.materialChanged=i,this.requestRender=r,this._id2glMaterialRef=new _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_2__["NestedMap"]}dispose(){this._textureRepository.dispose()}acquire(e,i){this._ownMaterial(e);let r=this._id2glMaterialRef.get(i,e.id);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(r)){const t=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:i});r=new l(t),this._id2glMaterialRef.set(i,e.id,r)}return r.incRefCnt(),r.glMaterial}release(e,t){const s=this._id2glMaterialRef.get(t,e.id);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)&&(s.decRefCnt(),0===s.getRefCnt()&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(s.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.repository)&&e.repository!==this&&o.error("Material is already owned by a different material repository"),e.repository=this}}


/***/ }),

/***/ "QpRZ":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/terrain/Overlay.js ***!
  \***************************************************************/
/*! exports provided: Overlay, computeOverlayResolution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeOverlayResolution", function() { return n; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _webgl_engine_lib_localOrigin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-engine/lib/localOrigin.js */ "erxE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a{constructor(e,r){this.index=e,this.renderTargets=r,this.extent=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(),this.resolution=0,this.renderLocalOrigin=Object(_webgl_engine_lib_localOrigin_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"])(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries={extents:[Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(),Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(),Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])()],numViews:0},this.validTargets=null,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(r.renderTargets.length).fill(!1)}getValidTarget(e){return this.validTargets[e]?this.renderTargets.getTarget(e):null}get needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=1===e?this.renderTargets.getTarget(0):2===e?this.renderTargets.getTarget(2):this.renderTargets.getTarget(4);return t?t.getTexture():null}getNormalTexture(e){const t=1===e?this.renderTargets.getTarget(3):null;return t?t.getTexture():null}draw(e,t){const r=this.computeRenderTargetValidityBitfield(),s=this.needsColorWithoutRasterImage;for(const i of this.renderTargets.renderTargets)1===i.type&&!1===s?this.validTargets[i.type]=!1:this.validTargets[i.type]=e.drawTarget(this,i,t);return r^this.computeRenderTargetValidityBitfield()?0:1}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[0]|+e[1]<<1|+e[2]<<2|+e[3]<<3|+e[4]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const t=.001*e.range;if(this.extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["offset"])(this.extent,e.range,0,t)}if(this.extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["offset"])(this.extent,-e.range,0,t)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(this.canvasGeometries.extents[0],this.extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}applyViewport(e){e.setViewport(0===this.index?0:this.resolution,0,this.resolution,this.resolution)}}function n(t,r,s){return Math.min(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(Math.max(t,r)+256),s)}


/***/ }),

/***/ "T4vJ":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/clipRay.js ***!
  \***************************************************************/
/*! exports provided: copy, create, fromLineSegment, fromLineSegmentAndDirection, fromRay, fromValues, getAt, getEnd, getStart, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromLineSegment", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromLineSegmentAndDirection", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRay", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAt", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnd", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStart", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return f; });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _ray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ray.js */ "0Y+r");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(r){return r?{ray:Object(_ray_js__WEBPACK_IMPORTED_MODULE_2__["create"])(r.ray),c0:r.c0,c1:r.c1}:{ray:Object(_ray_js__WEBPACK_IMPORTED_MODULE_2__["create"])(),c0:0,c1:Number.MAX_VALUE}}function f(r,c,n){const t=A.get();return t.ray=r,t.c0=c,t.c1=n,t}function y(r,c=s()){return m(r.ray,r.c0,r.c1,c)}function m(r,c,n,t=s()){return Object(_ray_js__WEBPACK_IMPORTED_MODULE_2__["copy"])(r,t.ray),t.c0=c,t.c1=n,t}function p(r,c=s()){return Object(_ray_js__WEBPACK_IMPORTED_MODULE_2__["copy"])(r,c.ray),c.c0=0,c.c1=Number.MAX_VALUE,c}function j(r,n=s()){return b(r,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__["sv3d"].get(),r.vector),n)}function b(r,c,t=s()){const o=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(r.vector);return Object(_ray_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"])(r.origin,c,t.ray),t.c0=0,t.c1=o,t}function g(r,c){return v(r,r.c0,c)}function l(r,c){return v(r,r.c1,c)}function v(r,c,n){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(n,r.ray.origin,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(n,r.ray.direction,c))}const A=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__["ObjectStack"]((()=>({c0:0,c1:0,ray:null})));


/***/ }),

/***/ "UkHK":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/pointUtils.js ***!
  \**************************************************************************/
/*! exports provided: createStageObjectForHUD, extendPointGraphicElevationContext, geometryToRenderInfo, placePointOnGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStageObjectForHUD", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendPointGraphicElevationContext", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometryToRenderInfo", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placePointOnGeometry", function() { return d; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/support/coordsUtils.js */ "Mu3I");
/* harmony import */ var _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layers/graphics/dehydratedFeatures.js */ "GlSV");
/* harmony import */ var _elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elevationAlignmentUtils.js */ "Lg+x");
/* harmony import */ var _graphicUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graphicUtils.js */ "uljd");
/* harmony import */ var _webgl_engine_lib_Object3D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../webgl-engine/lib/Object3D.js */ "WiJz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();function f(r,i,s,a,l,p,f,g){const d=s?s.length:0,h=r.clippingExtent;if(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["projectPointToVector"])(i,u,r.elevationProvider.spatialReference),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(h)&&!Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["containsPoint"])(h,u))return null;const j=r.renderCoordsHelper.spatialReference;Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["projectPointToVector"])(i,u,j);const y=r.localOriginFactory.getOrigin(u),v=new _webgl_engine_lib_Object3D_js__WEBPACK_IMPORTED_MODULE_9__["Object3D"]({castShadow:!1,metadata:{layerUid:p,graphicUid:f,usesVerticalDistanceToGround:!0}});for(let e=0;e<d;e++){const r=_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__["I"];v.addGeometry(s[e],a[e],r,y,g)}return{object:v,sampledElevation:Object(_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_7__["applyElevationAlignmentForHUD"])(v,i,r.elevationProvider,r.renderCoordsHelper,l)}}function g(e,t,r){const n=e.elevationContext,i=r.spatialReference;Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["projectPointToVector"])(t,u,i),n.centerPointInElevationSR=Object(_layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__["makeDehydratedPoint"])(u[0],u[1],t.hasZ?u[2]:0,i)}function d(e){switch(e.type){case"point":return e;case"polygon":case"extent":return Object(_graphicUtils_js__WEBPACK_IMPORTED_MODULE_8__["computeCentroid"])(e);case"polyline":{const t=e.paths[0];if(!t||0===t.length)return null;const r=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_5__["getPointOnPath"])(t,Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_5__["getPathLength"])(t)/2);return Object(_layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__["makeDehydratedPoint"])(r[0],r[1],r[2],e.spatialReference)}case"mesh":return e.origin}return null}function h(e,t,r,o,n){const i=new Float64Array(3*e.length),s=new Float64Array(i.length);e.forEach(((e,t)=>{i[3*t+0]=e[0],i[3*t+1]=e[1],i[3*t+2]=e.length>2?e[2]:0}));const a=Object(_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_7__["applyPerVertexElevationAlignment"])(i,t,0,s,0,i,0,i.length/3,r,o,n),c=null!=a;return{numVertices:e.length,position:i,mapPosition:s,projectionSuccess:c,sampledElevation:a}}


/***/ }),

/***/ "W9fM":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/terrain/OverlayRenderTarget.js ***!
  \***************************************************************************/
/*! exports provided: OverlayRenderTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRenderTarget", function() { return r; });
/* harmony import */ var _OverlayFramebufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverlayFramebufferObject.js */ "hZFS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(r){const s=(s,t,o=!0)=>({type:t,fbo:new _OverlayFramebufferObject_js__WEBPACK_IMPORTED_MODULE_0__["OverlayFramebufferObject"](r,o),renderPass:s,valid:!1,lastUsed:1/0});this.renderTargets=[s(0,0),s(0,1),s(5,2,!1),s(3,3),s(0,4)]}getTarget(e){return this.renderTargets[e].fbo}dispose(){for(const e of this.renderTargets)e.fbo.dispose()}disposeRenderTargetMemory(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()}validateUsageForTarget(e,r,t){if(e)r.lastUsed=t;else if(t-r.lastUsed>s)r.fbo.disposeRenderTargetMemory(),r.lastUsed=1/0;else if(r.lastUsed<1/0)return!0;return!1}get gpuMemoryUsage(){return this.renderTargets.reduce(((e,r)=>e+r.fbo.gpuMemoryUsage),0)}}const s=1e3;


/***/ }),

/***/ "WiJz":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3D.js ***!
  \*************************************************************************/
/*! exports provided: Object3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3D", function() { return T; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "+JUG");
/* harmony import */ var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../support/mathUtils.js */ "aAs6");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentObject.js */ "AD+e");
/* harmony import */ var _GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GeometryRecord.js */ "aX5l");
/* harmony import */ var _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Object3DStateID.js */ "vqnv");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/* harmony import */ var _materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../materials/renderers/utils.js */ "tiP8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class T extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_7__["ContentObject"]{constructor(t={}){super(),this.type=1,this._geometryRecords=new Array,this._geometries=new Array,this._objectTransformation=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this._bvObjectSpace=new L,this._bvWorldSpace=new L,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.castShadow=null==t.castShadow||t.castShadow,this.metadata=t.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new x),this.transformation=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();const{geometries:e,materials:s,transformations:i,origins:r}=t;if(Array.isArray(e)){Object(_Util_js__WEBPACK_IMPORTED_MODULE_10__["assert"])(s.length===e.length,"Object3D: materials don't match geometries"),Object(_Util_js__WEBPACK_IMPORTED_MODULE_10__["assert"])(i.length===e.length,"Object3D: transformations don't match geometries"),this._geometryRecords.length=e.length,this._geometries.length=e.length;for(let t=0;t<e.length;t++)this._geometries[t]=e[t],this._geometryRecords[t]=_GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["GeometryRecord"].pool.acquire(e[t],s[t],Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["b"])(i[t]),{highlights:null,occludees:null,visible:this._visible},r&&r[t])}}get geometryRecords(){return this._geometryRecords}get geometries(){return this._geometries}get transformation(){return this._objectTransformation}set transformation(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this._objectTransformation,t),this._invalidateBoundingVolume(),this._emit("objectTransformation",this)}dispose(){this._geometryRecords.length=0,this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(t){Object(_Util_js__WEBPACK_IMPORTED_MODULE_10__["assert"])(null==this._parentLayer||null==t,"Object3D can only be added to a single Layer"),this._parentLayer=t}addGeometry(e,s,i,r,o){i=i||_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["I"],this._geometries.push(e);const a=_GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["GeometryRecord"].pool.acquire(e,s,i,{highlights:null,occludees:null,visible:this._visible},r,o);return this._geometryRecords.push(a),this._hasVolatileTransformation=this._hasVolatileTransformation||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a.shaderTransformation),this._emit("objectGeometryAdded",{object:this,record:a}),this._invalidateBoundingVolume(),a}removeGeometry(e){const s=this._geometryRecords.splice(e,1)[0];return this._hasVolatileTransformation=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.shaderTransformation)?this._geometryRecords.some((e=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.shaderTransformation))):this._hasVolatileTransformation,s.dispose(),this._geometries.splice(e,1),this._emit("objectGeometryRemoved",{object:this,record:s}),this._invalidateBoundingVolume(),s}removeAllGeometries(){for(;this.geometryRecords.length>0;)this.removeGeometry(0)}geometryVertexAttrsUpdated(t){this._emit("vertexAttrsUpdated",{object:this,record:t}),this._invalidateBoundingVolume()}get isVisible(){return this._visible}setVisible(t){if(this._visible!==t){this._visible=t;for(const t of this._geometryRecords)t.instanceParameters.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const t=new _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_9__["Object3DStateID"](1);for(const e of this._geometryRecords)e.instanceParameters.occludees=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__["addObject3DStateID"])(e.instanceParameters.occludees,t);return this._emit("occlusionChanged",this),t}removeOcclude(t){for(const e of this._geometryRecords)e.instanceParameters.occludees=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__["removeObject3DStateID"])(e.instanceParameters.occludees,t);this._emit("occlusionChanged",this)}highlight(){const t=new _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_9__["Object3DStateID"](0);for(const e of this._geometryRecords)e.instanceParameters.highlights=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__["addObject3DStateID"])(e.instanceParameters.highlights,t);return this._emit("highlightChanged",this),t}removeHighlight(t){for(const e of this._geometryRecords)e.instanceParameters.highlights=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__["removeObject3DStateID"])(e.instanceParameters.highlights,t);this._emit("highlightChanged",this)}getCombinedStaticTransformation(t,s){return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["m"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(s,Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])()),this.transformation,t.getStaticTransformation())}getCombinedShaderTransformation(t,e){return e=e||Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["m"])(e,this.transformation,t.getShaderTransformation()),e}hasVolativeTransformation(){return this._hasVolatileTransformation}get boundingVolumeWorldSpace(){return this._validateBoundingVolume(),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._validateBoundingVolume(),this._bvObjectSpace}_validateBoundingVolume(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let s=0;s<this._geometryRecords.length;++s){const e=this._geometries[s],i=this._geometryRecords[s],r=e.boundingInfo;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&(this._calculateTransformedBoundingVolume(r,this._bvObjectSpace,i.getShaderTransformation()),this._calculateTransformedBoundingVolume(r,this._bvWorldSpace,this.getCombinedShaderTransformation(i)))}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this._bvObjectSpace.bounds,this._bvObjectSpace.min,this._bvObjectSpace.max,.5),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this._bvWorldSpace.bounds,this._bvWorldSpace.min,this._bvWorldSpace.max,.5);const e=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),i=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),r=Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__["maxScale"])(this.transformation);for(let t=0;t<this._geometryRecords.length;++t){const o=this._geometries[t].boundingInfo;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o))continue;const a=this._geometryRecords[t].getShaderTransformation(),n=Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__["maxScale"])(a);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(e,o.getCenter(),a);const h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["i"])(e,this._bvObjectSpace.bounds),l=o.getBSRadius()*n;this._bvObjectSpace.bounds[3]=Math.max(this._bvObjectSpace.bounds[3],h+l),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(i,e,this.transformation);const d=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["i"])(i,this._bvWorldSpace.bounds),g=l*r;this._bvWorldSpace.bounds[3]=Math.max(this._bvWorldSpace.bounds[3],d+g)}this._bvDirty=!1}_calculateTransformedBoundingVolume(t,e,s){const i=t.getBBMin(),r=t.getBBMax(),o=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["a"])(i),a=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["a"])(r);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(o,o,s),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(a,a,s);for(let n=0;n<3;++n)e.min[n]=Math.min(e.min[n],o[n],a[n]),e.max[n]=Math.max(e.max[n],o[n],a[n]);for(let n=0;n<3;++n){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(o,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(a,r),o[n]=r[n],a[n]=i[n],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(o,o,s),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(a,a,s);for(let t=0;t<3;++t)e.min[t]=Math.min(e.min[t],o[t],a[t]),e.max[t]=Math.max(e.max[t],o[t],a[t])}}_invalidateBoundingVolume(){this._bvDirty=!0,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._parentLayer)&&this._parentLayer.notifyObjectBBChanged(this,this._bvWorldSpace.bounds)}_emit(e,s){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._parentLayer)&&this._parentLayer.events.emit(e,s)}get test(){const t=this;return{hasGeometry:e=>t._geometries.indexOf(e)>-1,getGeometryIndex:e=>t._geometries.indexOf(e)}}}class x{constructor(){this.min=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class L extends x{constructor(){super(...arguments),this.bounds=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_5__["c"])()}init(){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(this.min,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(this.max,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.bounds)}}


/***/ }),

/***/ "YGGH":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderGeometry.js ***!
  \*******************************************************************************/
/*! exports provided: RenderGeometry, ValidatedRenderGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderGeometry", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatedRenderGeometry", function() { return g; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/uid.js */ "8uAX");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../support/mathUtils.js */ "aAs6");
/* harmony import */ var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geometryDataUtils.js */ "EDiM");
/* harmony import */ var _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Object3DStateID.js */ "vqnv");
/* harmony import */ var _materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../materials/renderers/utils.js */ "tiP8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(t,i,r=null,a=null,e=Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_1__["generateUID"])(),o=null,m=null,u=!1){this.data=t,this.material=i,this.layerUid=r,this.graphicUid=a,this.id=e,this.boundingInfo=o,this.calculateShaderTransformation=m,this.castShadow=u,this.boundingSphere=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this.instanceParameters={highlights:null,occludees:null,visible:!0},this._transformation=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),this._shaderTransformationDirty=!0}get transformation(){return this._transformation}updateTransformation(t){t(this._transformation),this._shaderTransformationDirty=!0,this.computeBoundingSphere(this._transformation,this.boundingSphere)}shaderTransformationChanged(){this._shaderTransformationDirty=!0}computeBoundingSphere(i,r,s=Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__["maxScale"])(i)){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.boundingInfo)||(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(r,this.boundingInfo.getCenter(),i),r[3]=this.boundingInfo.getBSRadius()*s)}get hasShaderTransformation(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.calculateShaderTransformation)}get primitiveType(){return this.data.primitiveType}getShaderTransformation(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.calculateShaderTransformation)?Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(this.transformation,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__["I"]):(this._shaderTransformationDirty&&(this._shaderTransformation||(this._shaderTransformation=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this._shaderTransformation,this.calculateShaderTransformation(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(this.transformation,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__["I"]))),this._shaderTransformationDirty=!1),this._shaderTransformation)}computeAttachmentOrigin(t){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,t)&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._transformation)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(t,t,this._transformation),!0);const r=this.indices.get("position"),s=this.vertexAttributes.get("position");return!!Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_7__["computeAttachmentOriginTriangles"])(s,r,t)&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._transformation)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(t,t,this._transformation),!0)}get indices(){return this.data.indices}get vertexAttributes(){return this.data.vertexAttributes}addHighlight(){const t=new _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_8__["Object3DStateID"](0),i=this.instanceParameters;return i.highlights=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_9__["addObject3DStateID"])(i.highlights,t),t}removeHighlight(t){const i=this.instanceParameters;i.highlights=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_9__["removeObject3DStateID"])(i.highlights,t)}}class g extends l{}


/***/ }),

/***/ "Z1Ae":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl.js ***!
  \********************************************************************************************************/
/*! exports provided: LineStipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineStipple", function() { return i; });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?r(e,t):a(e)}function r(i,r){const a=!(r.draped&&r.stipplePreferContinuous);i.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__["RgbaFloatEncoding"]),i.vertex.uniforms.add("stipplePatternPixelSize","float"),i.vertex.uniforms.add("pixelRatio","float"),r.draped?i.vertex.uniforms.add("worldToScreenRatio","float"):(i.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),i.vertex.uniforms.add("camPos","vec3"),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - camPos);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),i.varyings.add("vStippleDistance","float"),r.stippleRequiresClamp&&i.varyings.add("vStippleDistanceLimits","vec2"),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${l};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
  ${r.stippleRequiresStretchMeasure?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec2`} computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {
  `),a&&i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
      if (segmentLengthPseudoScreen >= patternLength) {

        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${r.stippleRequiresStretchMeasure?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`return vec3(0.0, segmentLengthScreenRounded, repetitions / flooredRepetitions);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`return vec2(0.0, segmentLengthScreenRounded);`}
      }
    `),i.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
      ${r.stippleRequiresStretchMeasure?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`return vec3(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen, 1.0)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen)`};
    }
  `),i.fragment.uniforms.add("stipplePatternTexture","sampler2D"),i.fragment.uniforms.add("stipplePatternSDFNormalizer","float"),i.fragment.uniforms.add("stipplePatternTextureSize","float"),i.fragment.uniforms.add("stipplePatternPixelSizeInv","float"),r.stippleOffColorEnabled&&i.fragment.uniforms.add("stippleOffColor","vec4"),i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`),i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    float getStippleSDF(out bool isClamped) {
      ${r.stippleRequiresClamp?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${r.stippleScaleWithLineWidth?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      return (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${r.stippleScaleWithLineWidth?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),r.stippleOffColorEnabled?i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`):i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function a(e){e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}const l=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].float(.4);


/***/ }),

/***/ "ZhF8":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/debugFlags.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return T; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let I=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.SCENEVIEW_LOCKING_LOG=!1,this.HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED=!0,this.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"SCENEVIEW_LOCKING_LOG",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"DECONFLICTOR_SHOW_GRID",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"LABELS_SHOW_BORDER",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"OVERLAY_SHOW_CENTER",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"SHOW_POI",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"I3S_TREE_SHOW_TILES",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"I3S_SHOW_MODIFICATIONS",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],I.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),I=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.3d.support.DebugFlags")],I);const T=new I;


/***/ }),

/***/ "Zhw2":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/floatRGBA.js ***!
  \*****************************************************/
/*! exports provided: packFloatRGBA, unpackFloatRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackFloatRGBA", function() { return r; });
/* harmony import */ var _mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,r,e=0){const i=Object(_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(o,0,f);for(let t=0;t<4;t++)r[e+t]=Math.floor(256*l(i*n[t]))}function r(t,o=0){let r=0;for(let n=0;n<4;n++)r+=t[o+n]*e[n];return r}const n=[1,256,65536,16777216],e=[1/256,1/65536,1/16777216,1/4294967296],f=r(new Uint8ClampedArray([255,255,255,255]));function l(t){return t-Math.floor(t)}


/***/ }),

/***/ "aX5l":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryRecord.js ***!
  \*******************************************************************************/
/*! exports provided: GeometryRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryRecord", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/ObjectPool.js */ "7Nfj");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/uid.js */ "8uAX");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(){this._disposed=!1}get disposed(){return this._disposed}get shaderTransformation(){return this._shaderTransformation}acquire(t,r,i,o,e,a){this.id=Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_2__["generateUID"])(),this.geometry=t,this.material=r,this.transformation=i,this.instanceParameters=o,this.origin=e,this._shaderTransformation=a,this._disposed=!1}release(){this._disposed=!1}dispose(){this._disposed=!0}getStaticTransformation(){return this.transformation}getShaderTransformation(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._shaderTransformation)?this._shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(t){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(t,t,this.getStaticTransformation()),!0)}}o.pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__["default"](o);


/***/ }),

/***/ "c2z5":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StaticFloat32ArrayObject.js ***!
  \*****************************************************************************************/
/*! exports provided: StaticFloat32ArrayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticFloat32ArrayObject", function() { return t; });
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
class t{constructor(t,s,o,a){this.vao=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__["default"](t,s,{geometry:o},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__["default"].createVertex(t,35044)}),this.array=new Float32Array(a),this.vao.vertexBuffers.geometry.setData(this.array)}dispose(){this.vao.dispose(!0)}get length(){return this.array.length}}


/***/ }),

/***/ "cHlT":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl.js ***!
  \*********************************************************************************************************/
/*! exports provided: HUDOcclusionPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUDOcclusionPass", function() { return a; });
/* harmony import */ var _output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _shading_MultipassGeometryTest_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shading/MultipassGeometryTest.glsl.js */ "lhfp");
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a,i){i.multipassGeometryEnabled&&a.vertex.include(_shading_MultipassGeometryTest_glsl_js__WEBPACK_IMPORTED_MODULE_1__["multipassGeometryTest"]),i.multipassTerrainEnabled&&a.varyings.add("depth","float"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${i.multipassGeometryEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${i.multipassTerrainEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),i.multipassTerrainEnabled&&a.fragment.include(_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ReadLinearDepth"]),a.fragment.uniforms.add("terrainDepthTexture","sampler2D"),a.fragment.uniforms.add("cameraNearFar","vec2"),a.fragment.uniforms.add("inverseViewport","vec2"),a.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_2__["RgbaFloatEncoding"]),a.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${i.multipassTerrainEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`

          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), cameraNearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}


/***/ }),

/***/ "cKKt":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AutoDisposable.js ***!
  \*******************************************************************************/
/*! exports provided: AutoDisposable, AutoDisposableMixin, autoDispose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDisposable", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDisposableMixin", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoDispose", function() { return i; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s=>{class e extends s{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const e of null!=(s=this._managedDisposables)?s:[]){var s;const i=this[e];this[e]=null,i&&"function"==typeof i.dispose&&i.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}}return e};class e extends(s(class{})){}function i(){return(s,e)=>{var i,o;s.hasOwnProperty("_managedDisposables")||(s._managedDisposables=null!=(i=null==(o=s._managedDisposables)?void 0:o.slice())?i:[]);s._managedDisposables.unshift(e)}}


/***/ }),

/***/ "cTsy":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/NativeLine.glsl.js ***!
  \*************************************************************/
/*! exports provided: N, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return d; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_LineStipple_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl.js */ "Z1Ae");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(d){const n=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__["ShaderBuilder"];return n.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!1}),n.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__["VertexColor"],d),n.include(_views_3d_webgl_engine_core_shaderLibrary_shading_LineStipple_glsl_js__WEBPACK_IMPORTED_MODULE_4__["LineStipple"],{...d,stippleRequiresStretchMeasure:!1}),n.vertex.uniforms.add("proj","mat4").add("view","mat4"),d.stippleEnabled&&(n.vertex.uniforms.add("ndcToPixel","vec2"),n.attributes.add("uv0","vec2"),n.attributes.add("auxpos1","vec3")),n.attributes.add("position","vec3"),n.varyings.add("vpos","vec3"),n.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),d.stippleEnabled&&(n.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec4 vpos2 = transformPosition(proj, view, auxpos1);
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),d.draped||n.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),d.draped?n.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):n.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),n.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`}`),4===d.output&&n.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__["OutputHighlight"]),n.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__["Slice"],d),n.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float"),n.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${d.attributeColor?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["symbolAlphaCutoff"])}) {
      discard;
    }

    ${0===d.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${4===d.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`outputHighlight();`:""}
  }
  `),n}const n=Object.freeze({__proto__:null,build:d});


/***/ }),

/***/ "dI/Q":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/WebGLLayer.js ***!
  \***************************************************************************/
/*! exports provided: WebGLLayer, isWebGLLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLLayer", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGLLayer", function() { return l; });
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Handles.js */ "r0DZ");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentObject.js */ "AD+e");
/* harmony import */ var _DirtyEvents_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DirtyEvents.js */ "ACoZ");
/* harmony import */ var _Octree_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Octree.js */ "C97X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_4__["ContentObject"]{constructor(s,i=""){var r,a,h;super(),this.apiLayerUid=i,this.type=0,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__["default"],this.isSliceable=!1,this._objects=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_3__["default"],this._stageHandles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.apiLayerUid=i,this.isVisible=null==(r=null==s?void 0:s.isVisible)||r,this.isPickable=null==(a=null==s?void 0:s.isPickable)||a,this.updatePolicy=null!=(h=null==s?void 0:s.updatePolicy)?h:0}get objects(){return this._objects}destroy(){this.detachStage(),this._stage=null}attachStage(e){this.detachStage(),this._stage=e;for(const t of _DirtyEvents_js__WEBPACK_IMPORTED_MODULE_5__["DirtyEventNames"])this._stageHandles.add(this.events.on(t,(s=>e.handleEvent(t,s))))}detachStage(){this._stageHandles.removeAll(),this.invalidateSpatialQueryAccelerator()}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._octree)&&this._octree.add([e])}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._octree)&&this._octree.remove([e]))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._octree)&&this._octree.add(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._octree)&&this._octree.remove(t)}}sync(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._stage)&&1!==this.updatePolicy&&this._stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._octree)&&this._octree.update(e,t)}getSpatialQueryAccelerator(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this._octree)&&this._objects.length>50&&this._createOctree(),this._octree}shaderTransformationChanged(){this.invalidateSpatialQueryAccelerator(),this.events.emit("shaderTransformationChanged",this)}invalidateSpatialQueryAccelerator(){this._octree=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["destroyMaybe"])(this._octree)}_createOctree(){this._octree=new _Octree_js__WEBPACK_IMPORTED_MODULE_6__["default"]((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)}}function l(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&0===e.type}


/***/ }),

/***/ "dYU4":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/terrain/OverlayRenderer.js ***!
  \***********************************************************************/
/*! exports provided: DRAPED_Z, OverlayRenderer, overlayRenderOccludedFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAPED_Z", function() { return se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRenderer", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlayRenderOccludedFlag", function() { return ie; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Handles.js */ "r0DZ");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/MapUtils.js */ "KOts");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _core_SetUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/SetUtils.js */ "xHps");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _support_debugFlags_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../support/debugFlags.js */ "ZhF8");
/* harmony import */ var _Overlay_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Overlay.js */ "QpRZ");
/* harmony import */ var _OverlayFramebufferObject_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./OverlayFramebufferObject.js */ "hZFS");
/* harmony import */ var _OverlayRenderTarget_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./OverlayRenderTarget.js */ "W9fM");
/* harmony import */ var _webgl_engine_core_shaderTechnique_ShaderTechniqueRepository_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../webgl-engine/core/shaderTechnique/ShaderTechniqueRepository.js */ "Doh9");
/* harmony import */ var _webgl_engine_lib_AutoDisposable_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../webgl-engine/lib/AutoDisposable.js */ "cKKt");
/* harmony import */ var _webgl_engine_lib_Camera_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../webgl-engine/lib/Camera.js */ "FxzD");
/* harmony import */ var _webgl_engine_lib_GLMaterialRepository_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../webgl-engine/lib/GLMaterialRepository.js */ "Q5Uc");
/* harmony import */ var _webgl_engine_lib_glUtil3D_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../webgl-engine/lib/glUtil3D.js */ "1ff1");
/* harmony import */ var _webgl_engine_lib_GridLocalOriginFactory_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../webgl-engine/lib/GridLocalOriginFactory.js */ "rfFI");
/* harmony import */ var _webgl_engine_lib_Intersector_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../webgl-engine/lib/Intersector.js */ "klA5");
/* harmony import */ var _webgl_engine_lib_RenderContext_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../webgl-engine/lib/RenderContext.js */ "1uVU");
/* harmony import */ var _webgl_engine_lib_SortedRenderGeometryRenderer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../webgl-engine/lib/SortedRenderGeometryRenderer.js */ "8AY/");
/* harmony import */ var _webgl_engine_lib_TextureTechnique_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../webgl-engine/lib/TextureTechnique.js */ "eu1Z");
/* harmony import */ var _webgl_engine_lighting_Lightsources_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../webgl-engine/lighting/Lightsources.js */ "K8k0");
/* harmony import */ var _webgl_engine_lighting_SceneLighting_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../webgl-engine/lighting/SceneLighting.js */ "IkXq");
/* harmony import */ var _webgl_engine_materials_StippleTextureRepository_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../webgl-engine/materials/StippleTextureRepository.js */ "wcB2");
/* harmony import */ var _support_Scheduler_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../support/Scheduler.js */ "kwW8");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../webgl/Util.js */ "hTmG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const Q=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.3d.webgl-engine.lib.OverlayRenderer");let J=class extends(Object(_webgl_engine_lib_AutoDisposable_js__WEBPACK_IMPORTED_MODULE_24__["AutoDisposableMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){constructor(e){super(e),this._overlays=null,this._overlayRenderTarget=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._lighting=new _webgl_engine_lighting_SceneLighting_js__WEBPACK_IMPORTED_MODULE_34__["SceneLighting"],this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__["default"],this._frameTask=_support_Scheduler_js__WEBPACK_IMPORTED_MODULE_36__["ImmediateTask"],this._layerRenderers=new Map,this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_7__["default"],this._geometries=new Map,this.worldToPCSRatio=1,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"],this.longitudeCyclical=null}initialize(){const e=this.view._stage.renderView;this._rctx=e.renderingContext,this._renderContext=new _webgl_engine_lib_RenderContext_js__WEBPACK_IMPORTED_MODULE_30__["OverlayRenderContext"](this._rctx);const r=e.waterTextureRepository;this._stippleTextureRepository=new _webgl_engine_materials_StippleTextureRepository_js__WEBPACK_IMPORTED_MODULE_35__["StippleTextureRepository"](e.renderingContext),this._shaderTechniqueRepository=new _webgl_engine_core_shaderTechnique_ShaderTechniqueRepository_js__WEBPACK_IMPORTED_MODULE_23__["ShaderTechniqueRepository"]({rctx:this._rctx,viewingMode:2,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:r}),this._handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_9__["init"])(r,"loadingState",(()=>this.events.emit("content-changed"))),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_9__["init"])(this,"spatialReference",(e=>this._localOrigins=new _webgl_engine_lib_GridLocalOriginFactory_js__WEBPACK_IMPORTED_MODULE_28__["GridLocalOriginFactory"](e)))]),this._materialRepository=new _webgl_engine_lib_GLMaterialRepository_js__WEBPACK_IMPORTED_MODULE_26__["GLMaterialRepository"](e.textureRepository,this._shaderTechniqueRepository,(e=>{(e.renderOccluded&ie)>0!==this._rendersOccluded&&this.updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating")}),(()=>this.events.emit("content-changed"))),this._lighting.groundLightingFactor=1,this._lighting.globalFactor=0,this._lighting.set([new _webgl_engine_lighting_Lightsources_js__WEBPACK_IMPORTED_MODULE_33__["AmbientLight"](Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_17__["f"])(1,1,1))]),this._bindParameters={slot:20,highlightDepthTexture:Object(_webgl_engine_lib_glUtil3D_js__WEBPACK_IMPORTED_MODULE_27__["createEmptyDepthTexture"])(this._rctx),camera:ee,inverseViewport:Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__["a"])(),origin:null,screenToWorldRatio:null,screenToPCSRatio:null,shadowMappingEnabled:!1,slicePlane:null,ssaoEnabled:!1,hasOccludees:!1,linearDepthTexture:null,lastFrameColorTexture:null,reprojectionMatrix:_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_18__["I"],ssrEnabled:!1,lighting:this._lighting,transparencyPassType:3,terrainLinearDepthTexture:null,geometryLinearDepthTexture:null,multipassTerrainEnabled:!1,cullAboveGround:!1,multipassGeometryEnabled:!1,highlightColorTexture:null},this._frameTask=this.view.resourceController.scheduler.registerTask(_support_Scheduler_js__WEBPACK_IMPORTED_MODULE_36__["TaskPriority"].STAGE,this),this._handles.add(this._frameTask)}dispose(){this._handles.destroy(),this._layerRenderers.forEach((e=>e.dispose())),this._layerRenderers.clear(),this._debugTextureTechnique=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["releaseMaybe"])(this._debugTextureTechnique),this._debugPatternTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["disposeMaybe"])(this._debugPatternTexture),this._bindParameters.highlightDepthTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["disposeMaybe"])(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["disposeMaybe"])(this._shaderTechniqueRepository),this._temporaryFBO=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["disposeMaybe"])(this._temporaryFBO),this._quadVAO=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["disposeMaybe"])(this._quadVAO),this.disposeOverlays()}get updating(){return this._sortedLayerRenderersDirty||this._frameTask.updating||Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__["someMap"])(this._layerRenderers,(e=>e.updating))}get hasOverlays(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(this._overlays)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(this._overlayRenderTarget)}get gpuMemoryUsage(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(this._overlayRenderTarget)?this._overlayRenderTarget.gpuMemoryUsage:0}collectUnusedRenderTargetMemory(e){let r=!1;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(this._overlayRenderTarget))for(const t of this._overlayRenderTarget.renderTargets){const s=this.overlays[0].validTargets[t.type]||!this.overlays[1].validTargets[t.type];r=this._overlayRenderTarget.validateUsageForTarget(s,t,e)||r}return r}get overlays(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["unwrapOr"])(this._overlays,[])}ensureDrapeTargets(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(this._overlays)&&this._overlays.forEach((r=>{r.hasTargetWithoutRasterImage=Object(_core_SetUtils_js__WEBPACK_IMPORTED_MODULE_8__["someSet"])(e,(e=>1===e.drapeTargetType))}))}ensureDrapeSources(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(this._overlays)&&this._overlays.forEach((r=>{r.hasDrapedFeatureSource=Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__["someMap"])(e,((e,r)=>1===r.drapeSourceType)),r.hasDrapedRasterSource=Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__["someMap"])(e,((e,r)=>0===r.drapeSourceType))}))}ensureOverlays(e,r){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isNone"])(this._overlays)&&(this._overlayRenderTarget=new _OverlayRenderTarget_js__WEBPACK_IMPORTED_MODULE_22__["OverlayRenderTarget"](this._rctx),this._overlays=[new _Overlay_js__WEBPACK_IMPORTED_MODULE_20__["Overlay"](0,this._overlayRenderTarget),new _Overlay_js__WEBPACK_IMPORTED_MODULE_20__["Overlay"](1,this._overlayRenderTarget)]),this.ensureDrapeTargets(e),this.ensureDrapeSources(r)}disposeOverlays(){this._overlays=null,this._overlayRenderTarget=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["disposeMaybe"])(this._overlayRenderTarget),this.events.emit("textures-disposed")}get running(){return this.updating}runTask(e,r=(()=>!0)){this._frameTask.processQueue(e),e.done||this._processLayers(e,r)}_processLayers(e,r){let t=!1;for(const[s,i]of this._layerRenderers){if(e.done)break;(s.destroyed||r(s))&&(i.commitChanges()&&(t=!0,e.madeProgress()),i.isEmpty&&(t=!0,this._sortedLayerRenderersDirty=!0,this._layerRenderers.delete(s),this._handles.remove(s)))}this.updateSortedLayerRenderers(),t&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(this._overlays)&&0===this._layerRenderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.events.emit("content-changed"),this.updateHasHighlights(),this.updateRendersOccluded(),this.updateHasWater())}processSyncLayers(){this._processLayers(_support_Scheduler_js__WEBPACK_IMPORTED_MODULE_36__["noBudget"],(e=>1===e.updatePolicy))}addGeometries(e,r,t){for(const s of e)Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isNone"])(s.origin)&&(s.origin=this._localOrigins.getOrigin(s.boundingSphere)),this._geometries.set(s.id,s);this.ensureLayerRenderer(r).add(e),2===t&&this.notifyGraphicGeometryChanged(e,r)}removeGeometries(e,r,t){for(const i of e)this._geometries.delete(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["unwrap"])(i.id));const s=this._layerRenderers.get(r);s&&(s.remove(e),2===t&&this.notifyGraphicGeometryChanged(e,r))}updateGeometries(e,r,t){const s=this._layerRenderers.get(r);if(s)switch(s.modify(e,t),t){case 4:case 2:return this.notifyGraphicGeometryChanged(e,r);case 1:return this.notifyGraphicVisibilityChanged(e,r)}else Q.warn("Attempted to update geometry for nonexistent layer")}notifyGraphicGeometryChanged(e,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isNone"])(r.notifyGraphicGeometryChanged))return;let t;for(const s of e){const e=s.graphicUid;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(e)&&e!==t&&(r.notifyGraphicGeometryChanged(e),t=e)}}notifyGraphicVisibilityChanged(e,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isNone"])(r.notifyGraphicVisibilityChanged))return;let t;for(const s of e){const e=s.graphicUid;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(e)&&e!==t&&(r.notifyGraphicVisibilityChanged(e),t=e)}}updateHighlights(e,r){const t=this._layerRenderers.get(r);t?t.modify(e,8):Q.warn("Attempted to update highlights for nonexistent layer")}isEmpty(){return 0===this._geometries.size&&!_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_19__["default"].OVERLAY_DRAW_DEBUG_TEXTURE}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateLogic(e){let r=!1;return this._layerRenderers.forEach((t=>r=t.updateLogic(e)||r)),r}updateLayerOrder(){this._sortedLayerRenderersDirty=!0}drawTarget(e,r,t){const s=e.canvasGeometries;if(0===s.numViews)return!1;this._screenToWorldRatio=t*e.mapUnitsPerPixel;const i=r.renderPass;if(this.isEmpty()||5===i&&!this.hasHighlights||3===i&&!this.hasWater||!e.hasSomeSizedView())return!1;const a=r.fbo;if(!a.isValid())return!1;const o=2*e.resolution,n=e.resolution;a.resize(o,n);const d=this._rctx;ee.pixelRatio=e.pixelRatio*t,this._renderContext.pass=i,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=3===i?21:20,e.applyViewport(this._rctx),a.bind(d),0===e.index&&(d.setClearColor(0,0,0,0),d.clearSafe(16384));const l=1===r.type?2:4===r.type?1:0;if(1===l&&(this._renderContext.renderOccludedMask=ie),_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_19__["default"].OVERLAY_DRAW_DEBUG_TEXTURE&&1!==l)for(let h=0;h<s.numViews;h++)this.setViewParameters(s.extents[h],e,ee),this.drawDebugTexture(e.resolution,Z[e.index]);return this._layerRenderers.size>0&&this._sortedLayerRenderers.forAll((({layerView:r,renderer:t})=>{if(2===l&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(r)&&0===r.drapeSourceType)return;const c=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(r)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(r.fullOpacity)&&r.fullOpacity<1&&0===i;c&&(this.bindTemporaryFramebuffer(this._rctx,o,n),d.clearSafe(16384));for(let i=0;i<s.numViews;i++)this.setViewParameters(s.extents[i],e,ee),t.render(this._renderContext,this._bindParameters);c&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(this._temporaryFBO)&&(a.bind(d),this.view._stage.renderView.compositingHelper.composite(this._temporaryFBO.getTexture(),2,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["unwrap"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["unwrap"])(r).fullOpacity),3,e.index))})),d.bindFramebuffer(null),a.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,r,t){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isNone"])(this._temporaryFBO)&&(this._temporaryFBO=new _OverlayFramebufferObject_js__WEBPACK_IMPORTED_MODULE_21__["OverlayFramebufferObject"](e,!1)),this._temporaryFBO.resize(r,t),this._temporaryFBO.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll()}intersect(e,r,t,s){let i=0;this._geometries.forEach((a=>{if(s&&!s(a))return;this._intersectRenderGeometry(a,t,r,0,e,i);const o=this.longitudeCyclical;o&&(a.boundingSphere[0]-a.boundingSphere[3]<o.min&&this._intersectRenderGeometry(a,t,r,o.range,e,i),a.boundingSphere[0]+a.boundingSphere[3]>o.max&&this._intersectRenderGeometry(a,t,r,-o.range,e,i)),i++}))}_intersectRenderGeometry(e,r,t,s,i,a){if(!e.instanceParameters.visible)return;let o=0;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__["isSome"])(e.transformation)&&(s+=e.transformation[12],o=e.transformation[13]),re[0]=t[0]-s,re[1]=t[1]-o,re[2]=1,te[0]=t[0]-s,te[1]=t[1]-o,te[2]=0,e.screenToWorldRatio=this._screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),i,re,te,((t,s,o)=>{$(r,o,e.material.renderPriority,a,i,e.layerUid,e.graphicUid)}),e.calculateShaderTransformation,r)}ensureLayerRenderer(e){let r=this._layerRenderers.get(e);return r||(r=new _webgl_engine_lib_SortedRenderGeometryRenderer_js__WEBPACK_IMPORTED_MODULE_31__["SortedRenderGeometryRenderer"]({rctx:this._rctx,materialRepository:this._materialRepository}),this._layerRenderers.set(e,r),this._sortedLayerRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(e.watch("fullOpacity",(()=>this.events.emit("content-changed"))),e),this._handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_9__["init"])(r,"updating",(()=>this.notifyChange("updating"))),e)),r}updateSortedLayerRenderers(){if(!this._sortedLayerRenderersDirty)return;if(this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers.clear(),0===this._layerRenderers.size)return;const e=new Set(this._layerRenderers.values());this.view.allLayerViews.forEach((r=>{const t=r,s=this._layerRenderers.get(t);s&&(this._sortedLayerRenderers.push(new K(t,s)),e.delete(s))})),e.forEach((e=>this._sortedLayerRenderers.push(new K(null,e))))}setViewParameters(e,r,t){t.viewport[0]=t.viewport[1]=0,t.viewport[2]=t.viewport[3]=r.resolution,Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_15__["o"])(t.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],t.near,t.far),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_15__["i"])(t.viewMatrix),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_15__["a"])(t.viewMatrix,t.viewMatrix,[-e[0],-e[1],0]),this._renderContext.camera=t,this._bindParameters.camera=t,this._bindParameters.inverseViewport[0]=1/t.fullViewport[2],this._bindParameters.inverseViewport[1]=1/t.fullViewport[3]}updateHasWater(){const e=Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__["someMap"])(this._layerRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water",e))}updateHasHighlights(){const e=Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__["someMap"])(this._layerRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.events.emit("has-highlights",e))}updateRendersOccluded(){const e=Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__["someMap"])(this._layerRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.events.emit("renders-occluded",e))}drawDebugTexture(e,r){const t=this._rctx;this.ensureDebugPatternResources(e,e);const s=this._debugTextureTechnique.program;t.useProgram(s),this._debugTextureTechnique.bindPipelineState(t),s.setUniform4f("color",r[0],r[1],r[2],1),s.bindTexture(this._debugPatternTexture,"tex"),t.bindVAO(this._quadVAO),t.drawArrays(5,0,Object(_webgl_Util_js__WEBPACK_IMPORTED_MODULE_38__["vertexCount"])(this._quadVAO,"geometry"))}ensureDebugPatternResources(e,r){if(this._debugPatternTexture)return;const t=new Uint8Array(e*r*4);let s=0;for(let a=0;a<r;a++)for(let i=0;i<e;i++){const o=Math.floor(i/10),n=Math.floor(a/10);o<2||n<2||10*o>e-20||10*n>r-20?(t[s++]=255,t[s++]=255,t[s++]=255,t[s++]=255):(t[s++]=255,t[s++]=255,t[s++]=255,t[s++]=1&o&&1&n?1&i^1&a?0:255:1&o^1&n?0:128)}this._debugPatternTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_37__["default"](this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:e,height:r},t);const i=new _webgl_engine_lib_TextureTechnique_js__WEBPACK_IMPORTED_MODULE_32__["TextureTechniqueConfiguration"];i.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire(_webgl_engine_lib_TextureTechnique_js__WEBPACK_IMPORTED_MODULE_32__["TextureTechnique"],i),this._quadVAO=Object(_webgl_engine_lib_glUtil3D_js__WEBPACK_IMPORTED_MODULE_27__["createQuadVAO"])(this._rctx)}get test(){return{layerRenderers:this._layerRenderers}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__["property"])()],J.prototype,"_frameTask",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__["property"])()],J.prototype,"_sortedLayerRenderersDirty",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_webgl_engine_lib_AutoDisposable_js__WEBPACK_IMPORTED_MODULE_24__["autoDispose"])()],J.prototype,"_shaderTechniqueRepository",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_webgl_engine_lib_AutoDisposable_js__WEBPACK_IMPORTED_MODULE_24__["autoDispose"])()],J.prototype,"_stippleTextureRepository",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__["property"])({constructOnly:!0})],J.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__["property"])()],J.prototype,"worldToPCSRatio",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__["property"])()],J.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__["property"])({type:Boolean,readOnly:!0})],J.prototype,"updating",null),J=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__["subclass"])("esri.views.3d.terrain.OverlayRenderer")],J);class K{constructor(e,r){this.layerView=e,this.renderer=r}}const Z=[[1,.5,.5],[.5,.5,1]];function $(e,r,t,s,i,a,o){const n={layerUid:a,graphicUid:o,triangleNr:r},h=r=>{r.set(3,n,e.dist,e.normal,e.transformation,t,s)};if((null==i.results.min.drapedLayerOrder||t>=i.results.min.drapedLayerOrder)&&(null==i.results.min.dist||i.results.ground.dist<=i.results.min.dist)&&h(i.results.min),0!==i.options.store&&(null==i.results.max.drapedLayerOrder||t<i.results.max.drapedLayerOrder)&&(null==i.results.max.dist||i.results.ground.dist>i.results.max.dist)&&h(i.results.max),2===i.options.store){const e=Object(_webgl_engine_lib_Intersector_js__WEBPACK_IMPORTED_MODULE_29__["newIntersectorResult"])(i.ray);h(e),i.results.all.push(e)}}const ee=new _webgl_engine_lib_Camera_js__WEBPACK_IMPORTED_MODULE_25__["default"];ee.near=1,ee.far=1e4,ee.relativeElevation=null;const re=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_17__["c"])(),te=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_17__["c"])(),se=-2,ie=4;


/***/ }),

/***/ "erxE":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/localOrigin.js ***!
  \****************************************************************************/
/*! exports provided: LocalOrigin, fromValues, fromVector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalOrigin", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromVector", function() { return s; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(n,t){this.vec3=n,this.id=t}}function s(t,s){return new r(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["a"])(t),s)}function c(n,s,c,e){return new r(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(n,s,c),e)}


/***/ }),

/***/ "eu1Z":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureTechnique.js ***!
  \*********************************************************************************/
/*! exports provided: TextureTechnique, TextureTechniqueConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureTechnique", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureTechniqueConfiguration", function() { return m; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _chunks_TextureOnly_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/TextureOnly.glsl.js */ "PkRl");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Program.js */ "yCmR");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class u extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_3__["ShaderTechnique"]{initializeProgram(e){const r=u.shader.get().build();return new _Program_js__WEBPACK_IMPORTED_MODULE_6__["Program"](e.rctx,r,_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_5__["Default3D"])}initializePipeline(){return this.configuration.hasAlpha?Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["makePipelineState"])({blending:Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["separateBlendingParams"])(770,1,771,771),colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["defaultColorWriteParams"]}):Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["makePipelineState"])({colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["defaultColorWriteParams"]})}}u.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__["ReloadableShaderModule"](_chunks_TextureOnly_glsl_js__WEBPACK_IMPORTED_MODULE_1__["T"],(()=>__webpack_require__.e(/*! import() | core-shaderLibrary-util-TextureOnly-glsl-js */ "core-shaderLibrary-util-TextureOnly-glsl-js").then(__webpack_require__.bind(null, /*! ../core/shaderLibrary/util/TextureOnly.glsl.js */ "J5od"))));class m extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.hasAlpha=!1}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],m.prototype,"hasAlpha",void 0);


/***/ }),

/***/ "fB0p":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl.js ***!
  \***************************************************************************************************/
/*! exports provided: AlignPixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignPixel", function() { return c; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,o=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;c.vertex.code.add(i),c.vertex.code.add(o),c.fragment.code.add(i),c.fragment.code.add(o)}


/***/ }),

/***/ "gnSc":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Reprojection.glsl.js ***!
  \*********************************************************************************************************/
/*! exports provided: Reprojection, bindReprojectionUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reprojection", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindReprojectionUniforms", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){o.fragment.uniforms.add("lastFrameColorMap","sampler2D"),o.fragment.uniforms.add("reprojectionMat","mat4"),o.fragment.uniforms.add("rpProjectionMat","mat4"),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec2 reprojectionCoordinate(vec3 projectionCoordinate)
{
vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
reprojectedCoord.xy /= reprojectedCoord.w;
return reprojectedCoord.xy * 0.5 + 0.5;
}`)}function e(r,o){r.bindTexture(o.lastFrameColorTexture,"lastFrameColorMap"),r.setUniformMatrix4fv("reprojectionMat",o.reprojectionMatrix),r.setUniformMatrix4fv("rpProjectionMat",o.camera.projectionMatrix)}


/***/ }),

/***/ "hPSC":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatureUtils.js ***!
  \*****************************************************************************/
/*! exports provided: isDehydratedPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDehydratedPoint", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){return"point"===t.type}


/***/ }),

/***/ "hZFS":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/terrain/OverlayFramebufferObject.js ***!
  \********************************************************************************/
/*! exports provided: OverlayFramebufferObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayFramebufferObject", function() { return s; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/enums.js */ "0X3F");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(e,s){this.size=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),this._fbo=null,this._fbo=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,hasMipmap:s,maxAnisotropy:8,width:0,height:0})}dispose(){this._fbo=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["disposeMaybe"])(this._fbo)}getTexture(){return this._fbo?this._fbo.colorTexture:null}isValid(){return null!==this._fbo}resize(e,r){this.size[0]=e,this.size[1]=r,this._fbo.resize(this.size[0],this.size[1])}bind(e){e.bindFramebuffer(this._fbo)}generateMipMap(){this._fbo.colorTexture.descriptor.hasMipmap&&this._fbo.colorTexture.generateMipmap()}disposeRenderTargetMemory(){var e;null==(e=this._fbo)||e.resize(0,0)}get gpuMemoryUsage(){var e,r;return null!=(e=null==(r=this._fbo)?void 0:r.gpuMemoryUsage)?e:0}}


/***/ }),

/***/ "hnWO":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/DefaultBufferWriter.js ***!
  \***************************************************************************************************/
/*! exports provided: DefaultBufferWriter, PositionColorLayout, PositionLayout, PositionUVLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBufferWriter", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionColorLayout", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionLayout", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionUVLayout", function() { return o; });
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/buffer/InterleavedLayout.js */ "/ADo");
/* harmony import */ var _bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bufferWriterUtils.js */ "WVfK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__["newLayout"])().vec3f("position"),o=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__["newLayout"])().vec3f("position").vec2f("uv0"),i=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__["newLayout"])().vec3f("position").vec4u8("color");class f{constructor(t){this.vertexBufferLayout=t}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return t.indices.get("position").length}write(t,r,o,i){Object(_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_1__["writeDefaultAttributes"])(r,this.vertexBufferLayout,t.transformation,t.invTranspTransformation,o,i)}}


/***/ }),

/***/ "hrr/":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/RibbonLineMaterial.js ***!
  \*****************************************************************************************/
/*! exports provided: RibbonLineMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RibbonLineMaterial", function() { return _; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/lineSegment.js */ "vX5d");
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/plane.js */ "colF");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/buffer/InterleavedLayout.js */ "/ADo");
/* harmony import */ var _lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/geometryDataUtils.js */ "EDiM");
/* harmony import */ var _lib_GLMaterial_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/GLMaterial.js */ "1/dN");
/* harmony import */ var _lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/GLMaterials.js */ "sGEu");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/Material.js */ "NbNv");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/Util.js */ "EVMh");
/* harmony import */ var _VisualVariableMaterialParameters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./VisualVariableMaterialParameters.js */ "tMjI");
/* harmony import */ var _renderers_utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./renderers/utils.js */ "tiP8");
/* harmony import */ var _chunks_RibbonLine_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../chunks/RibbonLine.glsl.js */ "mmha");
/* harmony import */ var _shaders_RibbonLineTechnique_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shaders/RibbonLineTechnique.js */ "Aw3R");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const W=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");class _ extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_13__["Material"]{constructor(e){super(e,D),this._vertexAttributeLocations=_shaders_RibbonLineTechnique_js__WEBPACK_IMPORTED_MODULE_18__["ribbonVertexAttributeLocations"],this.techniqueConfig=new _shaders_RibbonLineTechnique_js__WEBPACK_IMPORTED_MODULE_18__["RibbonLineTechniqueConfiguration"],this.layout=this.createLayout()}isClosed(e,t){return k(this.parameters,e,t)}dispose(){}getPassParameters(){return this.parameters}getTechniqueConfig(e,t){this.techniqueConfig.output=e,this.techniqueConfig.draped=20===t.slot;const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.parameters.stipplePattern);return this.techniqueConfig.stippleEnabled=r,this.techniqueConfig.stippleOffColorEnabled=r&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.parameters.stippleOffColor),this.techniqueConfig.stippleScaleWithLineWidth=r&&this.parameters.stippleScaleWithLineWidth,this.techniqueConfig.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.roundJoins="round"===this.parameters.join,this.techniqueConfig.roundCaps=2===this.parameters.cap,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.vvOpacity=this.parameters.vvOpacityEnabled,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.parameters.innerWidth>0&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.parameters.innerColor),this.techniqueConfig.falloffEnabled=this.parameters.falloff>0,this.techniqueConfig.occluder=8===this.parameters.renderOccluded,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,r,s,n,a,o,u,l){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(l)?this.intersectDrapedLineGeometry(e,s,l,a,o):this.intersectLineGeometry(e,t,r,s,o)}intersectDrapedLineGeometry(e,i,r,s,n){if(!i.options.selectionMode)return;const a=e.vertexAttributes.get("position").data,o=e.vertexAttributes.get("size");let u=this.parameters.width;if(this.parameters.vvSizeEnabled){const i=e.vertexAttributes.get("sizeFeatureAttribute").data[0];u*=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(this.parameters.vvSizeOffset[0]+i*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else o&&(u*=o.data[0]);const l=s[0],c=s[1],p=(u/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE,m=0;for(let f=0;f<a.length-5;f+=3){const e=a[f],i=a[f+1],r=l-e,s=c-i,n=a[f+3]-e,o=a[f+4]-i,u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])((n*r+o*s)/(n*n+o*o),0,1),p=n*u-r,d=o*u-s,v=p*p+d*d;v<h&&(h=v,m=f/3)}h<p*p&&n(r.dist,r.normal,m,!1)}intersectLineGeometry(e,i,r,m,f){if(!m.options.selectionMode||Object(_renderers_utils_js__WEBPACK_IMPORTED_MODULE_16__["isInstanceHidden"])(i))return;if(!Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_14__["isTranslationMatrix"])(r))return void W.error("intersection assumes a translation-only matrix");const d=e.vertexAttributes,C=d.get("position").data;let q=this.parameters.width;if(this.parameters.vvSizeEnabled){const e=d.get("sizeFeatureAttribute").data[0];q*=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(this.parameters.vvSizeOffset[0]+e*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else d.has("size")&&(q*=d.get("size").data[0]);const x=m.camera,z=I;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__["c"])(z,m.point);const j=q*x.pixelRatio/2+4*x.pixelRatio;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(se[0],z[0]-j,z[1]+j,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(se[1],z[0]+j,z[1]+j,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(se[2],z[0]+j,z[1]-j,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(se[3],z[0]-j,z[1]-j,0);for(let t=0;t<4;t++)if(!x.unprojectFromRenderScreen(se[t],ne[t]))return;Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["fromPoints"])(x.eye,ne[0],ne[1],ae),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["fromPoints"])(x.eye,ne[1],ne[2],oe),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["fromPoints"])(x.eye,ne[2],ne[3],ue),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["fromPoints"])(x.eye,ne[3],ne[0],le);let L=Number.MAX_VALUE,E=0;const P=J(this.parameters,d,e.indices)?C.length-2:C.length-5;for(let t=0;t<P;t+=3){H[0]=C[t]+r[12],H[1]=C[t+1]+r[13],H[2]=C[t+2]+r[14];const e=(t+3)%C.length;if(V[0]=C[e]+r[12],V[1]=C[e+1]+r[13],V[2]=C[e+2]+r[14],Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(ae,H)<0&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(ae,V)<0||Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(oe,H)<0&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(oe,V)<0||Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(ue,H)<0&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(ue,V)<0||Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(le,H)<0&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(le,V)<0)continue;if(x.projectToRenderScreen(H,K),x.projectToRenderScreen(V,Q),K[2]<0&&Q[2]>0){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(N,H,V);const e=x.frustum,t=-Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(e[4],H)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(N,Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["normal"])(e[4]));Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(N,N,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(H,H,N),x.projectToRenderScreen(H,K)}else if(K[2]>0&&Q[2]<0){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(N,V,H);const e=x.frustum,t=-Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["signedDistance"])(e[4],V)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(N,Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["normal"])(e[4]));Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(N,N,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(V,V,N),x.projectToRenderScreen(V,Q)}else if(K[2]<0&&Q[2]<0)continue;K[2]=0,Q[2]=0;const i=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_7__["distance2"])(Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(K,Q,$),z);i<L&&(L=i,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(Y,H),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(Z,V),E=t/3)}const w=m.rayBegin,M=m.rayEnd;if(L<j*j){let e=Number.MAX_VALUE;if(Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_7__["closestLineSegmentPoint"])(Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(Y,Z,$),Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(w,M,ee),X)){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(X,X,w);const t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(X);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(X,X,1/t),e=t/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["i"])(w,M)}f(e,X,E,!1)}}computeAttachmentOrigin(e,t){const i=e.vertexAttributes;if(!i)return null;const r=e.indices,s=i.get("position");return Object(_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_10__["computeAttachmentOriginLines"])(s,r?r.get("position"):null,r&&J(this.parameters,i,r),t)}createLayout(){const e=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_9__["newLayout"])().vec3f("position").f32("subdivisionFactor").vec2f("uv0").vec3f("auxpos1").vec3f("auxpos2");return this.parameters.vvSizeEnabled?e.f32("sizeFeatureAttribute"):e.f32("size"),this.parameters.vvColorEnabled?e.f32("colorFeatureAttribute"):e.vec4f("color"),this.parameters.vvOpacityEnabled&&e.f32("opacityFeatureAttribute"),e}createBufferWriter(){return new U(this.layout,this.parameters)}requiresSlot(e,t){if(20===e)return!0;if(8===this.parameters.renderOccluded)return 2===e||9===e||10===e;const i=Object(_lib_GLMaterials_js__WEBPACK_IMPORTED_MODULE_12__["outputFromPass"])(t);if(0===i||7===i){return e===(this.parameters.writeDepth?4:7)}return 2===e}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output||1===e.output?new G(e):null}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),this.requiresTransparent(e)&&(e.transparent=!0)}requiresTransparent(e){return!!((e.color&&e.color[3])<1||e.innerWidth>0&&this.colorRequiresTransparent(e.innerColor)||e.stipplePattern&&this.colorRequiresTransparent(e.stippleOffColor)||e.falloff>0)}colorRequiresTransparent(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)&&e[3]<1&&e[3]>0}}class G extends _lib_GLMaterial_js__WEBPACK_IMPORTED_MODULE_11__["default"]{updateParameters(e){return this.ensureTechnique(_shaders_RibbonLineTechnique_js__WEBPACK_IMPORTED_MODULE_18__["RibbonLineTechnique"],e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.getPassParameters(),e)}}const D={width:0,color:[1,1,1,1],join:"miter",cap:0,miterLimit:5,writeDepth:!0,polygonOffset:!1,stipplePattern:null,stippleOffColor:null,stippleScaleWithLineWidth:!1,stipplePreferContinuous:!0,slicePlaneEnabled:!1,vvFastUpdate:!1,transparent:!1,isClosed:!1,falloff:0,innerWidth:0,innerColor:null,sceneHasOcludees:!1,..._lib_Material_js__WEBPACK_IMPORTED_MODULE_13__["materialParametersDefaults"],..._VisualVariableMaterialParameters_js__WEBPACK_IMPORTED_MODULE_15__["default"].Default};class U{constructor(e,t){this.parameters=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e;const i=t.stipplePattern?1:0;switch(this.parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=_chunks_RibbonLine_glsl_js__WEBPACK_IMPORTED_MODULE_17__["N"]+i}}isClosed(e){return J(this.parameters,e.vertexAttributes,e.indices)}numCapSubdivisions(e){if(this.isClosed(e))return 0;switch(this.parameters.cap){case 1:case 2:return 1;default:return 0}}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=2*this.numCapSubdivisions(e)+2,i=e.indices.get("position").length/2+1,r=this.isClosed(e);let s=r?2:2*t;const n=r?0:1,a=r?i:i-1;if(e.vertexAttributes.has("subdivisions")){const t=e.vertexAttributes.get("subdivisions").data;for(let e=n;e<a;++e){s+=4+2*t[e]}}else{s+=(a-n)*(2*this.numJoinSubdivisions+4)}return s+=2,s}write(e,t,i,r){var s;const a=te,o=ie,u=re,l=t.vertexAttributes.get("position").data,p=t.indices&&t.indices.get("position"),f=null==(s=t.vertexAttributes.get("distanceToStart"))?void 0:s.data,d=this.numCapSubdivisions(t);p&&p.length!==2*(l.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let v=null;t.vertexAttributes.has("subdivisions")&&(v=t.vertexAttributes.get("subdivisions").data);let b=1,g=0;this.parameters.vvSizeEnabled?g=t.vertexAttributes.get("sizeFeatureAttribute").data[0]:t.vertexAttributes.has("size")&&(b=t.vertexAttributes.get("size").data[0]);let C=[1,1,1,1],S=0;this.parameters.vvColorEnabled?S=t.vertexAttributes.get("colorFeatureAttribute").data[0]:t.vertexAttributes.has("color")&&(C=t.vertexAttributes.get("color").data);let y=0;this.parameters.vvOpacityEnabled&&(y=t.vertexAttributes.get("opacityFeatureAttribute").data[0]);const A=l.length/3,q=e.transformation,x=new Float32Array(i.buffer),z=this.vertexBufferLayout.stride/4;let j=r*z;const L=j;let E=0;const O=(e,t,i,r,s,n,a)=>{if(x[j++]=t[0],x[j++]=t[1],x[j++]=t[2],x[j++]=r,x[j++]=a,x[j++]=s,x[j++]=e[0],x[j++]=e[1],x[j++]=e[2],x[j++]=i[0],x[j++]=i[1],x[j++]=i[2],this.parameters.vvSizeEnabled?x[j++]=g:x[j++]=b,this.parameters.vvColorEnabled)x[j++]=S;else{const e=Math.min(4*n,C.length-4);x[j++]=C[e+0],x[j++]=C[e+1],x[j++]=C[e+2],x[j++]=C[e+3]}this.parameters.vvOpacityEnabled&&(x[j++]=y)};j+=z,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(o,l[0],l[1],l[2]),q&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["m"])(o,o,q);const P=this.isClosed(t);if(P){const e=l.length-3;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(a,l[e],l[e+1],l[e+2]),q&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["m"])(a,a,q)}else{Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(a,o),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(u,l[3],l[4],l[5]),q&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["m"])(u,u,q);for(let e=0;e<d;++e){const t=1-e/d;O(a,o,u,t,-4,0,E),O(a,o,u,t,4,0,E)}O(a,o,u,0,-4,0,E),O(a,o,u,0,4,0,E),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(a,o),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(o,u)}const T=P?0:1,w=P?A:A-1,M=f?(e,t,i)=>E=f[i]:(e,t,i)=>E+=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["i"])(e,t);for(let h=T;h<w;h++){const e=(h+1)%A*3;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(u,l[e+0],l[e+1],l[e+2]),q&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["m"])(u,u,q),M(a,o,h),O(a,o,u,0,-1,h,E),O(a,o,u,0,1,h,E);const t=v?v[h]:this.numJoinSubdivisions;for(let i=0;i<t;++i){const e=(i+1)/(t+1);O(a,o,u,e,-1,h,E),O(a,o,u,e,1,h,E)}O(a,o,u,1,-2,h,E),O(a,o,u,1,2,h,E),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(a,o),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(o,u)}if(P)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(u,l[3],l[4],l[5]),q&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__["m"])(u,u,q),E=M(a,o,w),O(a,o,u,0,-1,T,E),O(a,o,u,0,1,T,E);else{E=M(a,o,w),O(a,o,u,0,-5,w,E),O(a,o,u,0,5,w,E);for(let e=0;e<d;++e){const t=(e+1)/d;O(a,o,u,t,-5,w,E),O(a,o,u,t,5,w,E)}}B(x,L+z,x,L,z);j=B(x,j-z,x,j,z)}}function B(e,t,i,r,s){for(let n=0;n<s;n++)i[r++]=e[t++];return r}function J(e,t,i){return k(e,t.get("position").data,i?i.get("position"):null)}function k(e,t,i){return!!e.isClosed&&(i?i.length>2:t.length>6)}const H=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),V=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),N=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),X=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),I=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),K=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["createRenderScreenPointArray3"])(),Q=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["createRenderScreenPointArray3"])(),Y=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),Z=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),$=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),ee=Object(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),te=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),ie=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),re=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),se=[Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["createRenderScreenPointArray3"])(),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["createRenderScreenPointArray3"])(),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["createRenderScreenPointArray3"])(),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["createRenderScreenPointArray3"])()],ne=[Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])()],ae=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["create"])(),oe=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["create"])(),ue=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["create"])(),le=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_8__["create"])();


/***/ }),

/***/ "klA5":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Intersector.js ***!
  \****************************************************************************/
/*! exports provided: DEFAULT_TOLERANCE, newIntersector, newIntersectorResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TOLERANCE", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newIntersector", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newIntersectorResult", function() { return T; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec4.js */ "dXfX");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/ray.js */ "0Y+r");
/* harmony import */ var _IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IntersectorInterfaces.js */ "GUL+");
/* harmony import */ var _intersectorUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./intersectorUtils.js */ "qXiY");
/* harmony import */ var _verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verticalOffsetUtils.js */ "ib+T");
/* harmony import */ var _materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../materials/renderers/utils.js */ "tiP8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const E=1e-5;class b{constructor(t){this.options=new _IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_8__["IntersectorOptions"],this._results=new w,this.transform=new _verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_10__["IntersectorTransform"],this.tolerance=E,this.verticalOffset=null,this._ray=Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),this._rayEnd=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),this._rayBeginTransformed=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),this._rayEndTransformed=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),this.viewingMode=null==t?1:t}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(t,r,s){this.resetWithRay(Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["fromPoints"])(t,r,this._ray),s)}resetWithRay(t,r){this.camera=r,t!==this._ray&&Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["copy"])(t,this._ray),0!==this.options.verticalOffset?2===this.viewingMode?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(r=null,s,i,e,a){this.point=s,this.filterPredicate=e,this.tolerance=null==i?E:i;const n=Object(_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_10__["getVerticalOffsetObject3D"])(this.verticalOffset);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.length>0){const s=a?t=>{a(t)&&this.intersectObject(t)}:t=>{this.intersectObject(t)};for(const i of r){const r=i.getSpatialQueryAccelerator&&i.getSpatialQueryAccelerator();Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)?(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n)?r.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,s,n):r.forEachAlongRay(this._ray.origin,this._ray.direction,s),this.options.selectionMode&&this.options.hud&&r.forEachDegenerateObject(s)):i.objects.forAll((t=>s(t)))}}this.sortResults()}intersectObject(r){const s=r.geometryRecords;if(!s)return;const e=r.transformation,a=Object(_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_10__["getVerticalOffsetObject3D"])(this.verticalOffset);for(const o of s){const{geometry:s,material:h,instanceParameters:d}=o;if(Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__["isInstanceHidden"])(d))continue;const c=s.id;this.transform.setAndInvalidateLazyTransforms(e,o.getShaderTransformation()),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const l=this.transform.transform;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a)&&(a.objectTransform=this.transform),h.intersect(s,d,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,((s,e,a,n,o,h)=>{if(s>=0){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.filterPredicate)&&!this.filterPredicate(this._ray.origin,this._rayEnd,s))return;if(n){if(null==this._results.hud.dist||s<this._results.hud.dist){const t={object:r,geometryId:c,triangleNr:a,center:h};this._results.hud.set(1,t,s,e,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["I"],o)}return}const d=t=>t.set(0,{object:r,geometryId:c,triangleNr:a},s,e,l,o);if((null==this._results.min.drapedLayerOrder||o>=this._results.min.drapedLayerOrder)&&(null==this._results.min.dist||s<this._results.min.dist)&&d(this._results.min),0!==this.options.store&&(null==this._results.max.drapedLayerOrder||o<this._results.max.drapedLayerOrder)&&(null==this._results.max.dist||s>this._results.max.dist)&&d(this._results.max),2===this.options.store){const t=T(this._ray);t.set(0,{object:r,geometryId:c,triangleNr:a},s,e,l),this._results.all.push(t)}}}),o.shaderTransformation)}}sortResults(){this._results.all.sort(((t,s)=>t.dist!==s.dist?Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(t.dist,0)-Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(s.dist,0):t.drapedLayerOrder!==s.drapedLayerOrder?Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(t.drapedLayerOrder,Number.MAX_VALUE)-Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(s.drapedLayerOrder,Number.MAX_VALUE):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(s.drapedLayerGraphicOrder,Number.MIN_VALUE)-Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(t.drapedLayerGraphicOrder,Number.MIN_VALUE)))}}function A(t){return new b(t)}class w{constructor(){this._min=new I(Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["create"])()),this._max=new I(Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["create"])()),this._hud=new I(Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["create"])()),this._ground=new I(Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["create"])())}get min(){return this._min}get max(){return this._max}get hud(){return this._hud}get ground(){return this._ground}init(t){this._min.init(t),this._max.init(t),this._hud.init(t),this._ground.init(t),this.all=[]}}class I{constructor(t){this.intersector=0,this.normal=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),this.transformation=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this._ray=Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["create"])(),this.init(t)}get ray(){return this._ray}get distanceInRenderSpace(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.dist)?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(x,this.ray.direction,this.dist),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["l"])(x)):null}getIntersectionPoint(t){return!!Object(_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_9__["isValidIntersectorResult"])(this)&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(x,this.ray.direction,this.dist),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(t,this.ray.origin,x),!0)}getTransformedNormal(t){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(N,this.normal),N[3]=0,Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_5__["t"])(N,N,this.transformation),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(t,N),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(t,t)}init(t){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=0,Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["copy"])(t,this._ray)}set(t,e,a,n,o,h,c){this.intersector=t,this.dist=a,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.normal,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(n,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["U"])),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.transformation,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(o,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["I"])),this.target=e,this.drapedLayerOrder=h,this.drapedLayerGraphicOrder=c}copy(t){Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_7__["copy"])(t.ray,this._ray),this.intersector=t.intersector,this.dist=t.dist,this.target=t.target,this.drapedLayerOrder=t.drapedLayerOrder,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.normal,t.normal),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.transformation,t.transformation)}}function T(t){return new I(t)}const x=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),N=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])();


/***/ }),

/***/ "lhfp":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassGeometryTest.glsl.js ***!
  \******************************************************************************************************************/
/*! exports provided: bindMultipassGeometryTexture, multipassGeometryTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindMultipassGeometryTexture", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipassGeometryTest", function() { return r; });
/* harmony import */ var _output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){r.include(_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ReadLinearDepth"]),r.uniforms.add("geometryDepthTexture","sampler2D"),r.uniforms.add("cameraNearFar","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, cameraNearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}function o(e,t){t.multipassGeometryEnabled&&t.geometryLinearDepthTexture&&e.bindTexture(t.geometryLinearDepthTexture,"geometryDepthTexture")}


/***/ }),

/***/ "mmha":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/RibbonLine.glsl.js ***!
  \*************************************************************/
/*! exports provided: N, R, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return v; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_RibbonVertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl.js */ "5qpZ");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js */ "wtEh");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_LineStipple_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl.js */ "Z1Ae");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js */ "xRv2");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js */ "Q3fD");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=1;function v(v){const g=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_10__["ShaderBuilder"],m=v.stippleEnabled&&v.roundCaps,f=v.falloffEnabled||m,h=v.innerColorEnabled,u=v.stippleEnabled&&v.stippleScaleWithLineWidth||v.roundCaps,D=v.stippleEnabled&&v.stippleScaleWithLineWidth;return g.extensions.add("GL_OES_standard_derivatives"),g.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__["PiUtils"]),g.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_RibbonVertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__["RibbonVertexPosition"],v),g.include(_views_3d_webgl_engine_core_shaderLibrary_shading_LineStipple_glsl_js__WEBPACK_IMPORTED_MODULE_4__["LineStipple"],{...v,stippleRequiresStretchMeasure:m}),1===v.output&&g.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_2__["OutputDepth"],v),g.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),g.attributes.add("position","vec3"),g.attributes.add("subdivisionFactor","float"),g.attributes.add("uv0","vec2"),g.attributes.add("auxpos1","vec3"),g.attributes.add("auxpos2","vec3"),g.varyings.add("vColor","vec4"),g.varyings.add("vpos","vec3"),g.varyings.add("linearDepth","float"),v.multipassTerrainEnabled&&g.varyings.add("depth","float"),u&&g.varyings.add("vLineWidth","float"),D&&g.varyings.add("vLineSizeInv","float"),h&&g.varyings.add("vLineDistance","float"),f&&g.varyings.add("vLineDistanceNorm","float"),v.falloffEnabled&&g.fragment.uniforms.add("falloff","float"),v.innerColorEnabled&&(g.fragment.uniforms.add("innerColor","vec4"),g.fragment.uniforms.add("innerWidth","float")),v.roundCaps&&g.varyings.add("vCapPosition","vec2"),m&&g.varyings.add("vStipplePatternStretch","float"),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${v.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;
    vpos = position;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${u?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`vLineWidth = lineWidth;`:""}
      ${D?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),v.stippleEnabled&&g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`float isEndVertex = float(!isStartVertex);
vec4 segmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), isEndVertex);
vec2 segmentOrigin = segmentInfo.xy;
vec2 segment = segmentInfo.zw;`),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),v.roundJoins?g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
        vec2 startDir;
        vec2 endDir;

        if (leftLen < 0.001) {
          startDir = right;
        }
        else{
          startDir = left;
        }
        startDir = normalize(startDir);
        startDir = PERPENDICULAR(startDir);

        if (rightLen < 0.001) {
          endDir = left;
        }
        else{
          endDir = right;
        }
        endDir = normalize(endDir);
        endDir = PERPENDICULAR(endDir);

        float factor = ${v.stippleEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`min(1.0, subdivisionFactor * ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"].float((c+2)/(c+1))})`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`displacementLen = lineWidth;
}
} else {
if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
displacementLen = lineWidth;
capDisplacementDir = isStartVertex ? -right : left;
capDisplacementDir *= subdivisionFactor;
}`),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${f||h?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${h?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${f?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`vLineDistanceNorm = lineDistNorm;`:""}

    ${v.roundCaps?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`vCapPosition = isJoin ? vec2(0.0) : dpos;`:""}

    pos.xy += dpos;
  `),v.stippleEnabled&&(v.draped||g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));`),v.draped?g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
      float patternLength = ${v.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      // The 0.5 factor on the screen length is to correct for pixel ratio (it is calculated at double resolution)
      ${m?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
            vec3 stippleSegmentInfo = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
            vStippleDistanceLimits = stippleSegmentInfo.xy;
            vStipplePatternStretch = stippleSegmentInfo.z;`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
            vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);`}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;
    `)),g.vertex.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`pos.xy = pos.xy / screenSize * pos.w;
vColor = getColor();
vColor.a *= coverage;
gl_Position = pos;
}
}`),v.multipassTerrainEnabled&&(g.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__["ReadLinearDepth"]),g.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__["multipassTerrainTest"],v)),g.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__["Slice"],v),g.fragment.uniforms.add("intrinsicColor","vec4"),g.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_8__["ColorConversion"]),g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
  void main() {
    discardBySlice(vpos);
    ${v.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),v.roundCaps&&g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
    float fragmentRadius = length(vCapPosition);
    float fragmentSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
    float capCoverage = clamp(0.5 - fragmentSDF, 0.0, 1.0);
    if (capCoverage < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_7__["symbolAlphaCutoff"])}) {
      discard;
    }
  `),m?g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
      vec2 stipplePosition = vec2(
        max(1.0 - getStippleSDF() * 2.0 * vStipplePatternStretch, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_7__["symbolAlphaCutoff"])}, stippleCoverage);
    `):g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`float stippleAlpha = getStippleAlpha();`),g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),g.fragment.uniforms.add("pixelRatio","float"),v.innerColorEnabled&&g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`vec4 finalColor = blendStipple(color, stippleAlpha);`),v.falloffEnabled&&g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`),g.fragment.code.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
    if (finalColor.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_7__["symbolAlphaCutoff"])}) {
      discard;
    }

    ${7===v.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===v.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===v.output&&v.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===v.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`gl_FragColor = vec4(1.0);`:""}
    ${1===v.output?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`outputDepth(linearDepth);`:""}
  }
  `),g}const g=Object.freeze({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:c,build:v});


/***/ }),

/***/ "ne8S":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/rendererUtils.js ***!
  \******************************************************************************/
/*! exports provided: splitRenderGeometryChangeSetByMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitRenderGeometryChangeSetByMaterial", function() { return r; });
/* harmony import */ var _ChangeSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeSet.js */ "/cm8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){const n=new Map,a=r=>{let t=n.get(r);return t||(t=new _ChangeSet_js__WEBPACK_IMPORTED_MODULE_0__["MaterialChangeSet"],n.set(r,t)),t};return r.adds.forAll((e=>{t(e)&&a(e.material).adds.push(e)})),r.removes.forAll((e=>{t(e)&&a(e.material).removes.push(e)})),r.updates.forAll((e=>{t(e.renderGeometry)&&a(e.renderGeometry.material).updates.push(e)})),n}function t(e){return e.data.indexCount>=1}


/***/ }),

/***/ "nhCg":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/gl-matrix-2/types/mat4.js ***!
  \***********************************************************************/
/*! exports provided: isMat4, isMat4f32, isMat4f64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMat4", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMat4f32", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMat4f64", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return n instanceof Float32Array&&n.length>=16}function r(n){return Array.isArray(n)&&n.length>=16}function t(t){return n(t)||r(t)}


/***/ }),

/***/ "nlNz":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/MergedGeometryBuffer.js ***!
  \*****************************************************************************************************/
/*! exports provided: MergedGeometryBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergedGeometryBuffer", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e,r){this._pool=e,this._size=0,this._buffer=e.newBuffer(s(r))}dispose(){this._buffer=this._pool.deleteBuffer(this._buffer),this._size=0}release(){this.erase(0,this._size),this.dispose()}get vao(){return this._buffer.vao}get array(){return this._buffer.array}get size(){return this._size}grow(e){this._resize(this._size+e,!0).dispose()}alloc(e){return this._resize(e,!1)}_resize(e,r){let s;const i=t(this._buffer.length,this._size,e);if(this._buffer.length!==i){const e=this._pool.newBuffer(i);r&&(e.array.set(this._buffer.array.subarray(0,Math.min(this._size,i))),e.vao.vertexBuffers.geometry.setSubData(e.array,0,0,e.array.byteLength)),s=this._buffer,this._buffer=e}const f=this._size;return this._size=e,s?{dispose:()=>{s.array.fill(0,0,f),this._pool.deleteBuffer(s)},copy:(e,r,t)=>this._buffer.array.set(s.array.subarray(r,t),e),hasNewBuffer:!0}:{dispose:()=>{},copy:(e,r,s)=>{e!==r&&this._buffer.array.copyWithin(e,r,s)},hasNewBuffer:!1}}erase(e,r){this._buffer.array.fill(0,e,r)}}const r=65536;function s(e){return Math.ceil(e/r)*r}function t(e,r,t){return r<=t?e>=t?e:s(Math.max(2*e,t)):e<=2*t?e:s(t)}


/***/ }),

/***/ "pEW0":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/WaterGLMaterial.js ***!
  \**************************************************************************************/
/*! exports provided: WaterGLMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterGLMaterial", function() { return a; });
/* harmony import */ var _lib_GLMaterial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/GLMaterial.js */ "1/dN");
/* harmony import */ var _WaterTechnique_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaterTechnique.js */ "9JiU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a extends _lib_GLMaterial_js__WEBPACK_IMPORTED_MODULE_0__["default"]{updateParameters(e){return this.ensureTechnique(_WaterTechnique_js__WEBPACK_IMPORTED_MODULE_1__["WaterTechnique"],e)}setElapsedTimeUniform(e){const t=.001*this._material.animation.time;e.setUniform1f("timeElapsed",t*this._material.parameters.animationSpeed)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMappingEnabled})}_updateSSRState(e){e.ssrEnabled!==this._material.parameters.ssrEnabled&&this._material.setParameters({ssrEnabled:e.ssrEnabled})}ensureResources(e){const t=this._techniqueRep.constructionContext.waterTextureRepository;return t.ready||t.updating||t.loadTextures(e),t.ready?2:1}beginSlot(e){return 0===this._output&&(this._updateShadowState(e),this._updateSSRState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),2!==this._output&&0!==this._output||this.setElapsedTimeUniform(t.program)}}


/***/ }),

/***/ "psnS":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/sdfPrimitives.js ***!
  \*****************************************************************************/
/*! exports provided: createCircle, createCross, createKite, createSquare, createTriangle, createType, createX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCircle", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCross", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKite", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSquare", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTriangle", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createType", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createX", function() { return c; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/floatRGBA.js */ "Zhw2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,r,u){switch(t){case"circle":default:return n(r,u);case"square":return e(r,u);case"cross":return o(r,u);case"x":return c(r,u);case"kite":return a(r,u);case"triangle":return s(r,u)}}function n(r,n){const e=r,a=new Uint8Array(4*e*e),o=e/2-.5,c=n/2;for(let s=0;s<e;s++)for(let n=0;n<e;n++){const u=n+e*s,f=n-o,i=s-o;let h=Math.sqrt(f*f+i*i)-c;h=h/r+.5,Object(_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__["packFloatRGBA"])(h,a,4*u)}return a}function e(t,r){return u(t,r,!1)}function a(t,r){return u(t,r,!0)}function o(t,r){return f(t,r,!1)}function c(t,r){return f(t,r,!0)}function s(r,n){const e=new Uint8Array(4*r*r),a=1,o=-.5,c=Math.sqrt(a*a+o*o),s=(r-n)/2;for(let u=0;u<r;u++)for(let f=0;f<r;f++){const i=u*r+f,h=(f-s)/n,l=(u-s+.75)/n,M=-(a*h+o*l)/c,R=(a*(h-1)+o*-l)/c,Q=-l,S=Math.max(M,R,Q);Object(_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__["packFloatRGBA"])(S*n/r+.5,e,4*i)}return e}function u(r,n,e){e&&(n/=Math.SQRT2);const a=new Uint8Array(4*r*r);for(let o=0;o<r;o++)for(let c=0;c<r;c++){let s=c-.5*r+.25,u=.5*r-o-.75;const f=o*r+c;if(e){const t=(s+u)/Math.SQRT2;u=(u-s)/Math.SQRT2,s=t}let i=Math.max(Math.abs(s),Math.abs(u))-.5*n;i=i/r+.5,Object(_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__["packFloatRGBA"])(i,a,4*f)}return a}function f(r,n,e){e&&(n*=Math.SQRT2);const a=.5*n,o=new Uint8Array(4*r*r);for(let c=0;c<r;c++)for(let n=0;n<r;n++){let s=n-.5*r,u=.5*r-c-1;const f=c*r+n;if(e){const t=(s+u)/Math.SQRT2;u=(u-s)/Math.SQRT2,s=t}let i;s=Math.abs(s),u=Math.abs(u),i=s>u?s>a?Math.sqrt((s-a)*(s-a)+u*u):u:u>a?Math.sqrt(s*s+(u-a)*(u-a)):s,i=i/r+.5,Object(_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__["packFloatRGBA"])(i,o,4*f)}return o}


/***/ }),

/***/ "qXiY":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js ***!
  \*********************************************************************************/
/*! exports provided: isHudIntersectorResult, isObjectIntersectorResult, isValidIntersectorResult, sliceFilterPredicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHudIntersectorResult", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectIntersectorResult", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIntersectorResult", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceFilterPredicate", function() { return c; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/boundedPlane.js */ "DZ/s");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.dist)}function c(r){return(e,o,c)=>(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["e"])(i,e,o,c),!Object(_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_3__["e"])(r,i))}function s(r){return o(r)&&0===r.intersector&&!!r.target}function u(t){return o(t)&&1===t.intersector&&!!t.target&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.target.center)}const i=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();


/***/ }),

/***/ "rfFI":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GridLocalOriginFactory.js ***!
  \***************************************************************************************/
/*! exports provided: GridLocalOriginFactory, default, setTestRootOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLocalOriginFactory", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTestRootOrigin", function() { return _; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/uid.js */ "8uAX");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Geometry.js */ "Ango");
/* harmony import */ var _localOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localOrigin.js */ "erxE");
/* harmony import */ var _Object3D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Object3D.js */ "WiJz");
/* harmony import */ var _WebGLLayer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebGLLayer.js */ "dI/Q");
/* harmony import */ var _materials_RibbonLineMaterial_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../materials/RibbonLineMaterial.js */ "hrr/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d{constructor(t,r=125e4){this._originSR=t,this._gridSize=r,this._origins=new Map,this._objects=new Map,this._rootOriginId="root/"+Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_1__["generateUID"])()}getOrigin(i){const r=this._origins.get(this._rootOriginId);if(null==r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(g))return this._origins.set(this._rootOriginId,Object(_localOrigin_js__WEBPACK_IMPORTED_MODULE_7__["fromValues"])(g[0],g[1],g[2],this._rootOriginId)),this.getOrigin(i);const r=Object(_localOrigin_js__WEBPACK_IMPORTED_MODULE_7__["fromValues"])(i[0]+Math.random()-.5,i[1]+Math.random()-.5,i[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,r),r}const s=this._gridSize,e=Math.round(i[0]/s),n=Math.round(i[1]/s),h=Math.round(i[2]/s),c=`${e}/${n}/${h}`;let m=this._origins.get(c);const d=.5*s;if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(f,i,r.vec3),f[0]=Math.abs(f[0]),f[1]=Math.abs(f[1]),f[2]=Math.abs(f[2]),f[0]<d&&f[1]<d&&f[2]<d){if(m){const t=Math.max(...f);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(f,i,m.vec3),f[0]=Math.abs(f[0]),f[1]=Math.abs(f[1]),f[2]=Math.abs(f[2]);if(Math.max(...f)<t)return m}return r}return m||(m=Object(_localOrigin_js__WEBPACK_IMPORTED_MODULE_7__["fromValues"])(e*s,n*s,h*s,c),this._origins.set(c,m)),m}_drawOriginBox(t,i=[1,1,0,1]){const o=window.view,s=o._stage,a=i.toString();if(!this._objects.has(a)){this._material=new _materials_RibbonLineMaterial_js__WEBPACK_IMPORTED_MODULE_10__["RibbonLineMaterial"]({width:2,color:i}),s.add(this._material);const t=new _WebGLLayer_js__WEBPACK_IMPORTED_MODULE_9__["WebGLLayer"]({isPickable:!1}),r=new _Object3D_js__WEBPACK_IMPORTED_MODULE_8__["Object3D"]({castShadow:!1});s.add(r),t.add(r),s.add(t),this._objects.set(a,r)}const d=this._objects.get(a),g=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],_=g.length,f=new Array(3*_),l=new Uint16Array(2*(_-1)),p=.5*this._gridSize;for(let r=0;r<_;r++)f[3*r+0]=t[0]+(1&g[r]?p:-p),f[3*r+1]=t[1]+(2&g[r]?p:-p),f[3*r+2]=t[2]+(4&g[r]?p:-p),r>0&&(l[2*r+0]=r-1,l[2*r+1]=r);Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__["projectBuffer"])(f,this._originSR,0,f,o.renderSpatialReference,0,_);const u=new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:f,exclusive:!0}]],[["position",l]],2);s.add(u),d.addGeometry(u,this._material,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["I"])}}let g=null;function _(t){g=t}const f=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])();


/***/ }),

/***/ "sGEu":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterials.js ***!
  \****************************************************************************/
/*! exports provided: GLMaterials, outputFromPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLMaterials", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputFromPass", function() { return t; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,r){this._material=e,this._repository=r,this._map=new Map}destroy(){this._map.forEach(((r,s)=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&this._repository.release(this._material,t(s))}))}load(r,s){this._map.has(s)||this._map.set(s,this._repository.acquire(this._material,t(s)));const a=this._map.get(s);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a)){if(2===a.ensureResources(r))return a;this._repository.requestRender()}return null}}function t(e){switch(e){default:case 0:return 0;case 1:return 7;case 4:case 7:case 6:return 3;case 3:return 2;case 2:return 1;case 5:return 4}}


/***/ }),

/***/ "snuX":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js ***!
  \*******************************************************************************/
/*! exports provided: add, dotProduct, elementwiseProduct, scalarProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotProduct", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementwiseProduct", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalarProduct", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,n){let e=0;for(let l=0;l<t.length;l++)e+=t[l]*n[l];return e}function n(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n[l];return e}function e(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n;return e}function l(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]+n[l];return e}


/***/ }),

/***/ "tMjI":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariableMaterialParameters.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f32.js */ "R/jG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var o;!function(o){o.Default={vvSizeEnabled:!1,vvSizeMinSize:Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(1,1,1),vvSizeMaxSize:Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(100,100,100),vvSizeOffset:Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,0,0),vvSizeFactor:Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(1,1,1),vvSizeValue:Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(1,1,1),vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvOpacityEnabled:!1,vvOpacityValues:[0,0,0,0,0,0,0,0],vvOpacityOpacities:[1,1,1,1,1,1,1,1],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}}(o||(o={}));const e=o;


/***/ }),

/***/ "uFVM":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/waterMaterialUtils.js ***!
  \**************************************************************************************************/
/*! exports provided: defaultWaterMaterialParameters, wavePresets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultWaterMaterialParameters", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wavePresets", function() { return a; });
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/Material.js */ "NbNv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={waveStrength:.06,waveTextureRepeat:32,waveDirection:Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(1,0),waveVelocity:.05,flowStrength:.015,flowOffset:-.5,animationSpeed:.35,color:[0,0,0,0],transparent:!0,writeDepth:!0,slicePlaneEnabled:!1,isDraped:!1,receiveShadows:!0,ssrEnabled:!1,..._lib_Material_js__WEBPACK_IMPORTED_MODULE_1__["materialParametersDefaults"]},a={"calm-small":{waveStrength:.005,perturbationStrength:.02,textureRepeat:12,waveVelocity:.01},"rippled-small":{waveStrength:.02,perturbationStrength:.09,textureRepeat:32,waveVelocity:.07},"slight-small":{waveStrength:.05,perturbationStrength:.07,textureRepeat:28,waveVelocity:.1},"moderate-small":{waveStrength:.075,perturbationStrength:.07,textureRepeat:24,waveVelocity:.1},"calm-medium":{waveStrength:.003125,perturbationStrength:.01,textureRepeat:8,waveVelocity:.02},"rippled-medium":{waveStrength:.035,perturbationStrength:.015,textureRepeat:12,waveVelocity:.07},"slight-medium":{waveStrength:.06,perturbationStrength:.015,textureRepeat:8,waveVelocity:.12},"moderate-medium":{waveStrength:.09,perturbationStrength:.03,textureRepeat:4,waveVelocity:.12},"calm-large":{waveStrength:.01,perturbationStrength:0,textureRepeat:4,waveVelocity:.05},"rippled-large":{waveStrength:.025,perturbationStrength:.01,textureRepeat:8,waveVelocity:.11},"slight-large":{waveStrength:.06,perturbationStrength:.02,textureRepeat:3,waveVelocity:.13},"moderate-large":{waveStrength:.14,perturbationStrength:.03,textureRepeat:2,waveVelocity:.15}};


/***/ }),

/***/ "uljd":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/graphicUtils.js ***!
  \****************************************************************************/
/*! exports provided: computeCentroid, computeObjectRotation, computeObjectScale, demResolutionForBoundingBox, enlargeExtent, isValidSize, mixinColorAndOpacity, namedAnchorToHUDMaterialAnchorPos, overrideColor, updateVertexAttributeAuxpos1w, validateSymbolLayerSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeCentroid", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectRotation", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectScale", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demResolutionForBoundingBox", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enlargeExtent", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidSize", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinColorAndOpacity", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namedAnchorToHUDMaterialAnchorPos", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideColor", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVertexAttributeAuxpos1w", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSymbolLayerSize", function() { return O; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec4.js */ "dXfX");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/centroid.js */ "V+VG");
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/support/coordsUtils.js */ "Mu3I");
/* harmony import */ var _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../layers/graphics/dehydratedFeatures.js */ "GlSV");
/* harmony import */ var _layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../layers/graphics/hydratedFeatures.js */ "08/N");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function R(t,e){if("point"===t.type)return A(t,e,!1);if(Object(_layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_13__["isHydratedGeometry"])(t))switch(t.type){case"extent":return A(t.center,e,!1);case"polygon":return A(t.centroid,e,!1);case"polyline":return A(w(t),e,!0);case"mesh":return A(t.origin,e,!1)}else switch(t.type){case"extent":return A(k(t),e,!0);case"polygon":return A(M(t),e,!0);case"polyline":return A(w(t),e,!0)}}function w(t){const e=t.paths[0];if(!e||0===e.length)return null;const r=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_11__["getPointOnPath"])(e,Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_11__["getPathLength"])(e)/2);return Object(_layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_12__["makeDehydratedPoint"])(r[0],r[1],r[2],t.spatialReference)}function k(t){const e=isFinite(t.zmin);return Object(_layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_12__["makeDehydratedPoint"])(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),e?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function M(t){const e=t.rings[0];if(!e||0===e.length)return null;const r=Object(_geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_10__["ringsCentroid"])(t.rings,t.hasZ);return Object(_layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_12__["makeDehydratedPoint"])(r[0],r[1],r[2],t.spatialReference)}function A(t,e,r){const n=r?t:Object(_layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_13__["clonePoint"])(t);return e&&t?Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["projectPoint"])(t,n,e)?n:null:n}function F(t,e,r,n=0){if(t){e||(e=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__["create"])());const o=t;let i=.5*o.width*(r-1),s=.5*o.height*(r-1);return o.width<1e-7*o.height?i+=s/20:o.height<1e-7*o.width&&(s+=i/20),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_5__["s"])(e,o.xmin-i-n,o.ymin-s-n,o.xmax+i+n,o.ymax+s+n),e}return null}function P(t,e){for(let r=0;r<t.geometries.length;++r){const n=t.geometries[r].getMutableAttribute("auxpos1");n&&n.data[3]!==e&&(n.data[3]=e,t.geometryVertexAttrsUpdated(t.geometryRecords[r]))}}function z(e,r){const n=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__["b"])(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__["O"]);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&(n[0]=e[0],n[1]=e[1],n[2]=e[2]),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)?n[3]=r:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&e.length>3&&(n[3]=e[3]),n}function B(e,r,n,o,i,s=[0,0,0,0]){for(let u=0;u<3;++u)Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&null!=e[u]?s[u]=e[u]:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n)&&null!=n[u]?s[u]=n[u]:s[u]=i[u];return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)?s[3]=r:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)?s[3]=o:s[3]=i[3],s}function D(t=_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["O"],r,n,o=1){const i=new Array(3);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(n))i[0]=1,i[1]=1,i[2]=1;else{let e,o=0;for(let s=2;s>=0;s--){const u=t[s];let a;const m=null!=u,c=0===s&&!e&&!m,l=n[s];"symbol-value"===u||c?a=0!==l?r[s]/l:1:m&&"proportional"!==u&&isFinite(u)&&(a=0!==l?u/l:1),null!=a&&(i[s]=a,e=a,o=Math.max(o,Math.abs(a)))}for(let t=2;t>=0;t--)null==i[t]?i[t]=e:0===i[t]&&(i[t]=.001*o)}for(let e=2;e>=0;e--)i[e]/=o;return Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["d"])(i)}function I(t){return null!=t.isPrimitive}function O(t){return I(t)&&(t=[t.width,t.depth,t.height]),U(t)?null:"Symbol sizes may not be negative values"}function U(t){if(Array.isArray(t)){for(const e of t)if(!U(e))return!1;return!0}return null==t||t>=0}function S(t,e,s,u=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])()){const a=t||0,m=e||0,c=s||0;return 0!==a&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["r"])(u,u,-a/180*Math.PI),0!==m&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["d"])(u,u,m/180*Math.PI),0!==c&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["j"])(u,u,c/180*Math.PI),u}function V(t,e){return null!=e.minDemResolution?e.minDemResolution:Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["isPoint"])(t)?e.minDemResolutionForPoints:.01*Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["maximumDimension"])(t)}const Z={"bottom-left":Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(0,0),bottom:Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(.5,0),"bottom-right":Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(1,0),left:Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(0,.5),center:Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(.5,.5),right:Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(1,.5),"top-left":Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(0,1),top:Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(.5,1),"top-right":Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(1,1)};


/***/ }),

/***/ "uyPU":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/NativeLineTechnique.js ***!
  \****************************************************************************************/
/*! exports provided: NativeLineTechnique, NativeLineTechniqueConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeLineTechnique", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeLineTechniqueConfiguration", function() { return E; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "jpeq");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/StencilUtils.js */ "h7dw");
/* harmony import */ var _chunks_NativeLine_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/NativeLine.glsl.js */ "cTsy");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class C extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_6__["ShaderTechnique"]{constructor(e,t,i){super(e,t,i),this.stipplePattern=null,this.stippleTextureBind=null,this.stippleTextureRepository=e.stippleTextureRepository}get stippleEnabled(){return this.configuration.stippleEnabled&&4!==this.configuration.output}initializeProgram(e){const t=C.shader.get(),i=this.configuration,r=t.build({output:i.output,attributeColor:i.vertexColors,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,draped:i.draped,stippleEnabled:this.stippleEnabled,stippleOffColorEnabled:i.stippleOffColorEnabled,stippleRequiresClamp:!1,stippleScaleWithLineWidth:!1,stipplePreferContinuous:i.stipplePreferContinuous});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_9__["Program"](e.rctx,r,_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_8__["Default3D"])}dispose(){super.dispose(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,r){if(Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindProjectionMatrix"])(this.program,r.camera.projectionMatrix),this.stipplePattern!==e.stipplePattern){const t=e.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,t),this.stipplePattern=t}if(this.stippleEnabled){const{pixelSize:e,sdfNormalizer:i,pixels:s}=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};this.program.setUniform1f("stipplePatternSDFNormalizer",i),this.program.setUniform1f("stipplePatternTextureSize",s),this.program.setUniform1f("stipplePatternPixelSize",e),this.program.setUniform1f("stipplePatternPixelSizeInv",1/e),this.program.setUniform1f("pixelRatio",r.camera.pixelRatio),this.configuration.draped?this.program.setUniform1f("worldToScreenRatio",1/r.screenToPCSRatio):this.program.setUniform1f("worldToScreenPerDistanceRatio",1/r.camera.perScreenPixelRatio),this.program.setUniform2f("ndcToPixel",r.camera.fullViewport[2]/2,r.camera.fullViewport[3]/2)}if(this.program.setUniform4fv("constantColor",e.color),this.program.setUniform1f("alphaCoverage",Math.min(1,e.width*r.camera.pixelRatio)),this.configuration.stippleOffColorEnabled){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(e.stippleOffColor);this.program.setUniform4f("stippleOffColor",t[0],t[1],t[2],t.length>3?t[3]:1)}4===this.configuration.output&&Object(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__["bindOutputHighlight"])(this.program,r)}bindDraw(e){Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindView"])(this.program,e),this.stippleEnabled&&!this.configuration.draped&&Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindCameraPosition"])(this.program,e.origin,e.camera.viewInverseTransposeMatrix),Object(_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["bindSliceUniformsWithOrigin"])(this.program,this.configuration,e),this.program.rebindTextures()}initializePipeline(){const e=this.configuration,t=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_12__["separateBlendingParams"])(770,1,771,771),i=(t,i=null,r=null)=>Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_12__["makePipelineState"])({blending:i,depthTest:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__["depthCompareLess"],depthWrite:r,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_12__["defaultColorWriteParams"],stencilWrite:e.sceneHasOcludees?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__["stencilWriteMaskOn"]:null,stencilTest:e.sceneHasOcludees?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__["stencilToolMaskBaseParams"]:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__["stencilBaseAllZerosParams"]:null});return 0===e.output?(this._occludeePipelineState=i(!0,e.transparent||this.stippleEnabled?t:null,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_12__["defaultDepthWriteParams"]),i(!1,e.transparent||this.stippleEnabled?t:null,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_12__["defaultDepthWriteParams"])):i(!1)}get primitiveType(){return 1}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}C.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_5__["ReloadableShaderModule"](_chunks_NativeLine_glsl_js__WEBPACK_IMPORTED_MODULE_11__["N"],(()=>__webpack_require__.e(/*! import() | NativeLine-glsl-js */ "NativeLine-glsl-js").then(__webpack_require__.bind(null, /*! ./NativeLine.glsl.js */ "seFa"))));class E extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.output=0,this.slicePlaneEnabled=!1,this.vertexColors=!1,this.transparent=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.sceneHasOcludees=!1}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])({count:8})],E.prototype,"output",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],E.prototype,"slicePlaneEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],E.prototype,"vertexColors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],E.prototype,"transparent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],E.prototype,"draped",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],E.prototype,"stippleEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],E.prototype,"stippleOffColorEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],E.prototype,"stipplePreferContinuous",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],E.prototype,"sceneHasOcludees",void 0);


/***/ }),

/***/ "vjhW":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ColorMaterialTechnique.js ***!
  \*******************************************************************************************/
/*! exports provided: ColorMaterialTechnique, ColorMaterialTechniqueConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMaterialTechnique", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorMaterialTechniqueConfiguration", function() { return w; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "jpeq");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/StencilUtils.js */ "h7dw");
/* harmony import */ var _chunks_ColorMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../chunks/ColorMaterial.glsl.js */ "GWL5");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_6__["ShaderTechnique"]{initializeProgram(e){const t=E.shader.get(),r=this.configuration,i=t.build({output:r.output,OITEnabled:0===r.transparencyPassType,attributeColor:r.vertexColors,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_10__["Program"](e.rctx,i,_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_8__["Default3D"])}bindPass(e,t){Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindProjectionMatrix"])(this.program,t.camera.projectionMatrix),this.program.setUniform4fv("eColor",e.color),4===this.configuration.output&&Object(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_2__["bindOutputHighlight"])(this.program,t),(1===this.configuration.output||t.multipassTerrainEnabled)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_3__["bindMultipassTerrainTexture"])(this.program,t))}bindDraw(e){Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindView"])(this.program,e),this.program.rebindTextures(),Object(_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__["bindSliceUniformsWithOrigin"])(this.program,this.configuration,e)}createPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_13__["makePipelineState"])({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__["blendingDefault"]:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__["OITBlending"])(e),culling:Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_13__["cullingParams"])(r.cullFace),depthTest:{func:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__["OITDepthTest"])(e)},depthWrite:i||o?r.writeDepth&&_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_13__["defaultDepthWriteParams"]:null,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_13__["defaultColorWriteParams"],stencilWrite:r.sceneHasOcludees?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_11__["stencilWriteMaskOn"]:null,stencilTest:r.sceneHasOcludees?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_11__["stencilToolMaskBaseParams"]:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_11__["stencilBaseAllZerosParams"]:null,polygonOffset:i||o?r.polygonOffset&&x:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__["getOITPolygonOffset"])(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.createPipeline(this.configuration.transparencyPassType,!0),this.createPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}E.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_5__["ReloadableShaderModule"](_chunks_ColorMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_12__["C"],(()=>__webpack_require__.e(/*! import() | ColorMaterial-glsl-js */ "ColorMaterial-glsl-js").then(__webpack_require__.bind(null, /*! ./ColorMaterial.glsl.js */ "hk8n"))));const x={factor:1,units:1};class w extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.vertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])({count:8})],w.prototype,"output",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])({count:3})],w.prototype,"cullFace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"slicePlaneEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"vertexColors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"transparent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"polygonOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"enableOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"writeDepth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"sceneHasOcludees",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])({count:4})],w.prototype,"transparencyPassType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"multipassTerrainEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_7__["parameter"])()],w.prototype,"cullAboveGround",void 0);


/***/ }),

/***/ "vqnv":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js ***!
  \********************************************************************************/
/*! exports provided: Object3DStateID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3DStateID", function() { return r; });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/uid.js */ "8uAX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(r){this.channel=r,this.id=Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_0__["generateUID"])()}}


/***/ }),

/***/ "wcB2":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/StippleTextureRepository.js ***!
  \***********************************************************************************************/
/*! exports provided: StippleTextureRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StippleTextureRepository", function() { return s; });
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/floatRGBA.js */ "Zhw2");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(e){this._rctx=e,this.cache=new Map}dispose(){this.cache.forEach((e=>e.texture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(e.texture))),this.cache.clear()}acquire(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e))return null;const t=this.patternId(e),i=this.cache.get(t);if(i)return i.refCount++,i.bind;const s=e.pixelRatio,{encodedData:n,sdfNormalizer:c,pixels:l,paddedPixels:u}=a(e.pattern,s),p=l/s,h={refCount:1,texture:null,bind:e=>(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(h.texture)&&(h.texture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__["default"](this._rctx,{width:u,height:1,internalFormat:6408,pixelFormat:6408,dataType:5121,wrapMode:33071},n)),e.bindTexture(h.texture,"stipplePatternTexture"),{pixelSize:p,sdfNormalizer:c,pixels:l})};return this.cache.set(t,h),h.bind}release(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e))return;const t=this.patternId(e),o=this.cache.get(t);o&&(o.refCount--,0===o.refCount&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o.texture)&&o.texture.dispose(),this.cache.delete(t)))}swap(e,t){const r=this.acquire(t);return this.release(e),r}patternId(e){return`${e.pattern.join(",")}-r${e.pixelRatio}`}}function a(t,r){const i=t.map((e=>Math.round(e*r))),o=1/r,s=Math.floor(i.reduce(((e,t)=>e+t))),a=i.reduce(((e,t)=>Math.max(e,t))),n=(Math.floor(.5*(a-1))+.5)*o,c=[];let l=1;for(const e of i){for(let t=0;t<e;t++){const r=l*(Math.min(t,e-1-t)+.5)*o/n*.5+.5;c.push(r)}l=-l}const u=Math.round(i[0]/2),p=[...c.slice(u),...c.slice(0,u)],h=s+2,d=new Uint8Array(4*h);let f=4;for(const x of p)Object(_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__["packFloatRGBA"])(x,d,f),f+=4;return d.copyWithin(0,f-4,f),d.copyWithin(f,4,8),{encodedData:d,sdfNormalizer:n,paddedPixels:h,pixels:s}}


/***/ }),

/***/ "xFpo":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AnimationTimer.js ***!
  \*******************************************************************************/
/*! exports provided: AnimationTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationTimer", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/time.js */ "sOpp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(){this.enabled=!0,this._time=0}get time(){return Object(_core_time_js__WEBPACK_IMPORTED_MODULE_1__["Milliseconds"])(this._time)}advance(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.forcedTime)?this._time!==t.forcedTime&&(this._time=t.forcedTime,!0):!(!this.enabled||0===t.dt)&&(this._time+=t.dt,!0)}}


/***/ }),

/***/ "yvcr":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryUtil.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return P; });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/plane.js */ "colF");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/ray.js */ "0Y+r");
/* harmony import */ var _BufferVectorMath_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BufferVectorMath.js */ "0W97");
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Geometry.js */ "Ango");
/* harmony import */ var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geometryDataUtils.js */ "EDiM");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=_BufferVectorMath_js__WEBPACK_IMPORTED_MODULE_5__["Vec3Compact"];var z,M,U,b;!function(t){const e=.5,n=[[-e,-e,e],[e,-e,e],[e,e,e],[-e,e,e],[-e,-e,-e],[e,-e,-e],[e,e,-e],[-e,e,-e]],o=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],r=[0,0,1,0,1,1,0,1],a=new Uint16Array([0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5]),s=new Uint16Array(36);for(let c=0;c<6;c++)for(let t=0;t<6;t++)s[6*c+t]=c;const i=new Uint16Array(36);for(let c=0;c<6;c++)i[6*c+0]=0,i[6*c+1]=1,i[6*c+2]=2,i[6*c+3]=2,i[6*c+4]=3,i[6*c+5]=0;function l(t){Array.isArray(t)||(t=[t,t,t]);const e=new Array(24);for(let o=0;o<8;o++)e[3*o]=n[o][0]*t[0],e[3*o+1]=n[o][1]*t[1],e[3*o+2]=n[o][2]*t[2];return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:e,exclusive:!0}],["normal",{size:3,data:o}],["uv0",{size:2,data:r}]],[["position",a],["normal",s],["uv0",i]])}t.createGeometry=l}(z||(z={})),function(t){const e=.5,n=[[-e,0,-e],[e,0,-e],[e,0,e],[-e,0,e],[0,-e,0],[0,e,0]],o=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],r=new Uint16Array([5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0]),a=new Uint16Array([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]);function s(t){Array.isArray(t)||(t=[t,t,t]);const e=new Array(18);for(let o=0;o<6;o++)e[3*o]=n[o][0]*t[0],e[3*o+1]=n[o][1]*t[1],e[3*o+2]=n[o][2]*t[2];return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:e,exclusive:!0}],["normal",{size:3,data:o}]],[["position",r],["normal",a]])}t.createGeometry=s}(M||(M={})),function(o){const r=.5,a=0,s=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(-r,a,-r),i=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(r,a,-r),l=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,a,r),f=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,a+r,0),h=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),y=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),m=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),p=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),g=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(h,s,f),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(y,s,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(m,h,y),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(m,m),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(h,i,f),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(y,i,l),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(p,h,y),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(p,p),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(h,l,f),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(y,l,s),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(g,h,y),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(g,g);const A=[s,i,l,f],w=[0,-1,0,m[0],m[1],m[2],p[0],p[1],p[2],g[0],g[1],g[2]],v=[0,1,2,3,1,0,3,2,1,3,0,2],x=[0,0,0,1,1,1,2,2,2,3,3,3];function z(t){Array.isArray(t)||(t=[t,t,t]);const e=new Array(12);for(let n=0;n<4;n++)e[3*n]=A[n][0]*t[0],e[3*n+1]=A[n][1]*t[1],e[3*n+2]=A[n][2]*t[2];return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:e,exclusive:!0}],["normal",{size:3,data:w}]],[["position",new Uint16Array(v)],["normal",new Uint16Array(x)]])}o.createGeometry=z}(U||(U={})),function(A){function b(t,e,n,o={uv:!0}){const r=-Math.PI,a=2*Math.PI,s=-Math.PI/2,i=Math.PI,l=Math.max(3,Math.floor(e)),c=Math.max(2,Math.floor(n)),u=(l+1)*(c+1),f=new Float32Array(3*u),h=new Float32Array(3*u),y=new Float32Array(2*u),m=[];let p=0;for(let d=0;d<=c;d++){const e=[],n=d/c,o=s+n*i,u=Math.cos(o);for(let s=0;s<=l;s++){const i=s/l,c=r+i*a,m=Math.cos(c)*u,g=Math.sin(o),A=-Math.sin(c)*u;f[3*p]=m*t,f[3*p+1]=g*t,f[3*p+2]=A*t,h[3*p]=m,h[3*p+1]=g,h[3*p+2]=A,y[2*p]=i,y[2*p+1]=n,e.push(p),++p}m.push(e)}const g=new Uint32Array(2*l*(c-1)*3);p=0;for(let d=0;d<c;d++)for(let t=0;t<l;t++){const e=m[d][t],n=m[d][t+1],o=m[d+1][t+1],r=m[d+1][t];0===d?(g[p++]=e,g[p++]=o,g[p++]=r):d===c-1?(g[p++]=e,g[p++]=n,g[p++]=o):(g[p++]=e,g[p++]=n,g[p++]=o,g[p++]=o,g[p++]=r,g[p++]=e)}const A=[["position",g],["normal",g]],w=[["position",{size:3,data:f,exclusive:!0}],["normal",{size:3,data:h,exclusive:!0}]];return o.uv&&(w.push(["uv0",{size:2,data:y,exclusive:!0}]),A.push(["uv0",g])),o.offset&&(A[0][0]="offset",w[0][0]="offset",A.push(["position",new Uint32Array(g.length)]),w.push(["position",{size:3,data:Float64Array.from(o.offset),exclusive:!0}])),new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"](w,A)}function P(t,e,n){const o=t;let r,a;if(n)r=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=new Uint32Array([0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1]);else{const t=o*(1+Math.sqrt(5))/2;r=[-o,t,0,o,t,0,-o,-t,0,o,-t,0,0,-o,t,0,o,t,0,-o,-t,0,o,-t,t,0,-o,t,0,o,-t,0,-o,-t,0,o],a=new Uint32Array([0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1])}for(let f=0;f<r.length;f+=3)x.scale(r,f,t/x.length(r,f));let s={};function i(e,n){e>n&&([e,n]=[n,e]);const o=e.toString()+"."+n.toString();if(s[o])return s[o];let a=r.length;return r.length+=3,x.add(r,3*e,r,3*n,r,a),x.scale(r,a,t/x.length(r,a)),a/=3,s[o]=a,a}for(let f=0;f<e;f++){const t=a.length,e=new Uint32Array(4*t);for(let n=0;n<t;n+=3){const t=a[n],o=a[n+1],r=a[n+2],s=i(t,o),l=i(o,r),c=i(r,t),u=4*n;e[u]=t,e[u+1]=s,e[u+2]=c,e[u+3]=o,e[u+4]=l,e[u+5]=s,e[u+6]=r,e[u+7]=c,e[u+8]=l,e[u+9]=s,e[u+10]=l,e[u+11]=c}a=e,s={}}const l=new Float32Array(r);for(let f=0;f<l.length;f+=3)x.normalize(l,f);const c=[["position",a],["normal",a]],u=[["position",{size:3,data:new Float32Array(r),exclusive:!0}],["normal",{size:3,data:l,exclusive:!0}]];return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"](u,c)}function I(t,e,n,o,r,a,s){const i=e?[e[0],e[1],e[2]]:[0,0,0],l=t?[t[0],t[1],t[2]]:[0,0,1];a=a||[0,0];const c=n?[255*n[0],255*n[1],255*n[2],n.length>3?255*n[3]:255]:[255,255,255,255],u=null!=o&&2===o.length?o:[1,1],f=[["position",{size:3,data:i,exclusive:!0}],["normal",{size:3,data:l,exclusive:!0}],["uv0",{size:a.length,data:a}],["color",{size:4,data:c,exclusive:!0}],["size",{size:2,data:u}]];if(null!=r){const t=new Float32Array([r[0],r[1],r[2],r[3]]);f.push(["auxpos1",{size:4,data:t}])}if(null!=s){const t=new Float32Array([s[0],s[1],s[2],s[3]]);f.push(["auxpos2",{size:4,data:t}])}return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"](f,null,1)}function j(t,e,n,o,r,a,s,i){if(null!=t){const{data:e}=i.getMutableAttribute("normal");e[0]=t[0],e[1]=t[1],e[2]=t[2]}if(null!=e){const{data:t}=i.getMutableAttribute("position");t[0]=e[0],t[1]=e[1],t[2]=e[2]}if(null!=n){const{data:t}=i.getMutableAttribute("color");t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3]}if(null!=o){const{data:t}=i.getMutableAttribute("size");t[0]=o[0],t[1]=o[1]}if(null!=r){const{data:t}=i.getMutableAttribute("auxpos1");t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3]}if(null!=a){const{data:t}=i.getMutableAttribute("uv0");t[0]=a[0],t[1]=a[1]}if(null!=s){const{data:t}=i.getMutableAttribute("auxpos2");t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3]}}function k(t,e){const n=new Float32Array(3*t.length),o=new Float32Array(e?3*t.length:3),r=new Uint32Array(t.length),a=new Uint32Array(t.length);for(let s=0;s<t.length;s++)n[3*s]=t[s][0],n[3*s+1]=t[s][1],n[3*s+2]=t[s][2],e&&(o[3*s]=e[s][0],o[3*s+1]=e[s][1],o[3*s+2]=e[s][2]),r[s]=s,a[s]=0;e||(o[0]=0,o[1]=1,o[2]=0);return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:n,exclusive:!0}],["normal",{size:3,data:o,exclusive:!0}],["uv0",{size:2,data:[0,0],exclusive:!0}]],[["position",r],["normal",e?r:a],["uv0",a]],1)}function S(){const t=[0,0,0,0,0,100,100,0,0],e=new Uint16Array([0,1,2]),n=[0,1,0],o=new Uint16Array([0,0,0]),r=[0,0],a=new Uint16Array([0,0,0]);return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:t,exclusive:!0}],["normal",{size:3,data:n,exclusive:!0}],["uv0",{size:2,data:r,exclusive:!0}]],[["position",e],["normal",o],["uv0",a]])}A.createBoxGeometry=z.createGeometry,A.createDiamondGeometry=M.createGeometry,A.createTetrahedronGeometry=U.createGeometry,A.createSphereGeometry=b,A.createPolySphereGeometry=P,A.createPointGeometry=I,A.updatePointGeometry=j,A.createPointArrayGeometry=k,A.createTriangleGeometry=S;const T=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function B(t=T){const e=new Array(12);for(let a=0;a<4;a++)for(let n=0;n<3;n++)e[3*a+n]=t[a][n];const n=new Uint32Array([0,1,2,2,3,0]),o=[0,0,1],r=new Uint32Array([0,0,0,0,0,0]);return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:e,exclusive:!0}],["normal",{size:3,data:o,exclusive:!0}],["uv0",{size:2,data:[0,0,1,0,1,1,0,1],exclusive:!0}],["color",{size:4,data:[255,255,255,255],exclusive:!0}]],[["position",n],["normal",r],["uv0",n],["color",r]])}function D(t,e,n,o,r=!0,a=!0){let s=0;const i=e,l=t;let u=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,s,0),f=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,s+l,0),h=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,-1,0),y=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,1,0);o&&(s=l,f=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,0,0),u=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,s,0),h=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,1,0),y=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,-1,0));const m=[f,u],p=[h,y],g=n+2,A=Math.sqrt(l*l+i*i);if(o)for(let d=n-1;d>=0;d--){const t=d*(2*Math.PI/n),e=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(Math.cos(t)*i,s,Math.sin(t)*i);m.push(e);const o=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(l*Math.cos(t)/A,-i/A,l*Math.sin(t)/A);p.push(o)}else for(let d=0;d<n;d++){const t=d*(2*Math.PI/n),e=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(Math.cos(t)*i,s,Math.sin(t)*i);m.push(e);const o=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(l*Math.cos(t)/A,i/A,l*Math.sin(t)/A);p.push(o)}const w=new Uint32Array(2*(n+2)*3),v=new Uint32Array(2*(n+2)*3);let x=0,z=0;if(r){for(let t=3;t<m.length;t++)w[x++]=1,w[x++]=t-1,w[x++]=t,v[z++]=0,v[z++]=0,v[z++]=0;w[x++]=m.length-1,w[x++]=2,w[x++]=1,v[z++]=0,v[z++]=0,v[z++]=0}if(a){for(let t=3;t<m.length;t++)w[x++]=t,w[x++]=t-1,w[x++]=0,v[z++]=t,v[z++]=t-1,v[z++]=1;w[x++]=0,w[x++]=2,w[x++]=m.length-1,v[z++]=1,v[z++]=2,v[z++]=p.length-1}const M=new Float32Array(3*g);for(let c=0;c<g;c++)M[3*c]=m[c][0],M[3*c+1]=m[c][1],M[3*c+2]=m[c][2];const U=new Float32Array(3*g);for(let c=0;c<g;c++)U[3*c]=p[c][0],U[3*c+1]=p[c][1],U[3*c+2]=p[c][2];return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:M,exclusive:!0}],["normal",{size:3,data:U,exclusive:!0}]],[["position",w],["normal",v]])}function q(t,i,l,h,y,m){const p=h?Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["a"])(h):Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(1,0,0),g=y?Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["a"])(y):Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,0,0);m=null==m||m;const A=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(A,p);const w=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(w,A,Math.abs(t));const v=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(v,w,-.5),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(v,v,g);const x=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,1,0);Math.abs(1-Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(A,x))<.2&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(x,0,0,1);const z=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(z,A,x),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(z,z),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(x,z,A);const M=2*l+(m?2:0),U=l+(m?2:0),b=new Float32Array(3*M),G=new Float32Array(3*U),F=new Float32Array(2*M),P=new Uint32Array(3*l*(m?4:2)),I=new Uint32Array(3*l*(m?4:2));m&&(b[3*(M-2)+0]=v[0],b[3*(M-2)+1]=v[1],b[3*(M-2)+2]=v[2],F[2*(M-2)]=0,F[2*(M-2)+1]=0,b[3*(M-1)+0]=b[3*(M-2)+0]+w[0],b[3*(M-1)+1]=b[3*(M-2)+1]+w[1],b[3*(M-1)+2]=b[3*(M-2)+2]+w[2],F[2*(M-1)]=1,F[2*(M-1)+1]=1,G[3*(U-2)+0]=-A[0],G[3*(U-2)+1]=-A[1],G[3*(U-2)+2]=-A[2],G[3*(U-1)+0]=A[0],G[3*(U-1)+1]=A[1],G[3*(U-1)+2]=A[2]);const j=function(t,e,n){P[t]=e,I[t]=n};let k=0;const S=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),T=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();for(let e=0;e<l;e++){const t=e*(2*Math.PI/l);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(S,x,Math.sin(t)),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(T,z,Math.cos(t)),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(S,S,T),G[3*e+0]=S[0],G[3*e+1]=S[1],G[3*e+2]=S[2],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(S,S,i),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(S,S,v),b[3*e+0]=S[0],b[3*e+1]=S[1],b[3*e+2]=S[2],F[2*e+0]=e/l,F[2*e+1]=0,b[3*(e+l)+0]=b[3*e+0]+w[0],b[3*(e+l)+1]=b[3*e+1]+w[1],b[3*(e+l)+2]=b[3*e+2]+w[2],F[2*(e+l)+0]=e/l,F[2*e+1]=1;const n=(e+1)%l;j(k++,e,e),j(k++,e+l,e),j(k++,n,n),j(k++,n,n),j(k++,e+l,e),j(k++,n+l,n)}if(m){for(let t=0;t<l;t++){const e=(t+1)%l;j(k++,M-2,U-2),j(k++,t,U-2),j(k++,e,U-2)}for(let t=0;t<l;t++){const e=(t+1)%l;j(k++,t+l,U-1),j(k++,M-1,U-1),j(k++,e+l,U-1)}}return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:b,exclusive:!0}],["normal",{size:3,data:G,exclusive:!0}],["uv0",{size:2,data:F,exclusive:!0}]],[["position",P],["normal",I],["uv0",P]])}function E(t,e,n,o,r){n=n||10,o=null==o||o,Object(_Util_js__WEBPACK_IMPORTED_MODULE_8__["assert"])(t.length>1);const a=[[0,0,0]],s=[],i=[];for(let l=0;l<n;l++){s.push([0,-l-1,-(l+1)%n-1]);const t=l/n*2*Math.PI;i.push([Math.cos(t)*e,Math.sin(t)*e])}return A.createPathExtrusionGeometry(i,t,a,s,o,r)}function C(a,l,f,A,w,v=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,0,0)){const x=a.length,z=new Float32Array(l.length*x*3+(6*f.length||0)),M=new Float32Array(l.length*x*3+(f?6:0)),U=(l.length-1)*x*6+3*A.length*2,b=new Uint32Array(U),F=new Uint32Array(U);let P=0,I=0,j=0,k=0;const S=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),T=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),B=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),D=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),q=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),E=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),C=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),O=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),V=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),H=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),J=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),K=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),N=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),Q=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_3__["create"])();Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(V,0,1,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(T,l[1],l[0]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(T,T),w?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(O,l[0],v),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(B,O)):Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(B,0,0,1),L(T,B,V,V,q,B,G),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(D,B),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(K,q);for(let t=0;t<f.length;t++)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(E,q,f[t][0]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(O,B,f[t][2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(E,E,O),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(E,E,l[0]),z[P++]=E[0],z[P++]=E[1],z[P++]=E[2];M[I++]=-T[0],M[I++]=-T[1],M[I++]=-T[2];for(let t=0;t<A.length;t++)b[j++]=A[t][0]>0?A[t][0]:-A[t][0]-1+f.length,b[j++]=A[t][1]>0?A[t][1]:-A[t][1]-1+f.length,b[j++]=A[t][2]>0?A[t][2]:-A[t][2]-1+f.length,F[k++]=0,F[k++]=0,F[k++]=0;let R=f.length;const W=f.length-1;for(let s=0;s<l.length;s++){let c=!1;if(s>0){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(S,T),s<l.length-1?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(T,l[s+1],l[s]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(T,T)):c=!0,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(H,S,T),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(H,H),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(J,l[s-1],D),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_3__["fromPositionAndNormal"])(l[s],H,Q);Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_3__["intersectRay"])(Q,Object(_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_4__["wrap"])(J,S),O)?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["f"])(O,O,l[s]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(B,O),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(q,H,B),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(q,q)):L(H,D,K,V,q,B,G),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(D,B),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(K,q)}w&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(O,l[s],v),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(N,O));for(let t=0;t<x;t++)if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(E,q,a[t][0]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(O,B,a[t][1]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(E,E,O),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(C,E),M[I++]=C[0],M[I++]=C[1],M[I++]=C[2],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(E,E,l[s]),z[P++]=E[0],z[P++]=E[1],z[P++]=E[2],!c){const e=(t+1)%x;b[j++]=R+t,b[j++]=R+x+t,b[j++]=R+e,b[j++]=R+e,b[j++]=R+x+t,b[j++]=R+x+e;for(let t=0;t<6;t++)F[k++]=b[j-6+t]-W}R+=x}const X=l[l.length-1];for(let t=0;t<f.length;t++)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(E,q,f[t][0]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(O,B,f[t][1]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(E,E,O),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(E,E,X),z[P++]=E[0],z[P++]=E[1],z[P++]=E[2];const Y=I/3;M[I++]=T[0],M[I++]=T[1],M[I++]=T[2];const Z=R-x;for(let t=0;t<A.length;t++)b[j++]=A[t][0]>=0?R+A[t][0]:-A[t][0]-1+Z,b[j++]=A[t][2]>=0?R+A[t][2]:-A[t][2]-1+Z,b[j++]=A[t][1]>=0?R+A[t][1]:-A[t][1]-1+Z,F[k++]=Y,F[k++]=Y,F[k++]=Y;return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:z,exclusive:!0}],["normal",{size:3,data:M,exclusive:!0}]],[["position",b],["normal",F]])}function O(t,e,n){Object(_Util_js__WEBPACK_IMPORTED_MODULE_8__["assert"])(t.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),Object(_Util_js__WEBPACK_IMPORTED_MODULE_8__["assert"])(3===t[0].length,"createPolylineGeometry(): malformed vertex"),Object(_Util_js__WEBPACK_IMPORTED_MODULE_8__["assert"])(null==e||e.length===t.length,"createPolylineGeometry: need same number of points and normals"),Object(_Util_js__WEBPACK_IMPORTED_MODULE_8__["assert"])(null==e||3===e[0].length,"createPolylineGeometry(): malformed normal");const o=new Float64Array(3*t.length),r=new Uint32Array(2*(t.length-1));let a=0,s=0;for(let c=0;c<t.length;c++){for(let e=0;e<3;e++)o[a++]=t[c][e];c>0&&(r[s++]=c-1,r[s++]=c)}const i=[],l=[];if(i.push(["position",r]),l.push(["position",{size:3,data:o,exclusive:!0}]),e){const n=new Float32Array(3*e.length);let o=0;for(let r=0;r<t.length;r++)for(let t=0;t<3;t++)n[o++]=e[r][t];i.push(["normal",r]),l.push(["normal",{size:3,data:n,exclusive:!0}])}return n&&(l.push(["color",{size:4,data:n}]),i.push(["color",Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_7__["generateDefaultIndexArray"])(n.length/4)])),new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"](l,i,2)}function V(t,e,n,o,r=0){const a=new Array(18),s=[[-e,r,o/2],[n,r,o/2],[0,t+r,o/2],[-e,r,-o/2],[n,r,-o/2],[0,t+r,-o/2]],i=new Uint16Array([0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]);for(let l=0;l<6;l++)a[3*l]=s[l][0],a[3*l+1]=s[l][1],a[3*l+2]=s[l][2];return new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__["Geometry"]([["position",{size:3,data:a,exclusive:!0}]],[["position",i]])}function H(t,e){const n=t.getMutableAttribute("position").data;for(let o=0;o<n.length;o+=3){const t=n[o],r=n[o+1],a=n[o+2];Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(F,t,r,a),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["m"])(F,F,e),n[o]=F[0],n[o+1]=F[1],n[o+2]=F[2]}}function J(t,e=t){const n=t.vertexAttributes,o=n.get("position").data,r=n.get("normal").data;if(r){const t=e.getMutableAttribute("normal").data;for(let e=0;e<r.length;e+=3){const n=r[e+1];t[e+1]=-r[e+2],t[e+2]=n}}if(o){const t=e.getMutableAttribute("position").data;for(let e=0;e<o.length;e+=3){const n=o[e+1];t[e+1]=-o[e+2],t[e+2]=n}}return e}function K(t,o,r,s,i){return!(Math.abs(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["d"])(o,t))>i)&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(r,t,o),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(r,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(s,r,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(s,s),!0)}function L(t,e,n,o,r,a,s){return K(t,e,r,a,s)||K(t,n,r,a,s)||K(t,o,r,a,s)}A.createSquareGeometry=B,A.createConeGeometry=D,A.createCylinderGeometry=q,A.createTubeGeometry=E,A.createPathExtrusionGeometry=C,A.createPolylineGeometry=O,A.createExtrudedTriangle=V,A.transformInPlace=H,A.cgToGIS=J,A.makeOrthoBasisDirUp=K,A.makeOrthoBasisDirUpFallback=L}(b||(b={}));const G=.99619469809,F=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),P=b;


/***/ })

}]);
//# sourceMappingURL=default~views-3d-interactive-editingTools-js~views-3d-layers-GraphicsLayerView3D-js.js.map