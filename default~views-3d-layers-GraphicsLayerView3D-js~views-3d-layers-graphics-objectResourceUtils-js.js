(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-3d-layers-GraphicsLayerView3D-js~views-3d-layers-graphics-objectResourceUtils-js"],{

/***/ "1TnO":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js ***!
  \************************************************************************************************************************/
/*! exports provided: InstancedDoublePrecision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstancedDoublePrecision", function() { return o; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/doublePrecisionUtils.js */ "nMRV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,n){n.instanced&&n.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),n.instancedDoublePrecision&&(e.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_1__["DoublePrecision"],n),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    vec3 calculateVPos() {
      ${n.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    vec3 subtractOrigin(vec3 _pos) {
      ${n.instancedDoublePrecision?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    vec3 dpNormal(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    vec3 dpNormalView(vec4 _normal) {
      ${n.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,n.vertexTangents?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===n.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}!function(e){class i{}function r(e,i){Object(_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__["encodeDoubleArraySplit"])(i,t,a,3),e.setUniform3fv("viewOriginHi",t),e.setUniform3fv("viewOriginLo",a)}e.Uniforms=i,e.bindCustomOrigin=r}(o||(o={}));const t=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),a=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();


/***/ }),

/***/ "1W42":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: HeaderComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComment", function() { return u; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ "GVa1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(u,o){const r=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
  /*
  *  ${o.name}
  *  ${0===o.output?"RenderOutput: Color":1===o.output?"RenderOutput: Depth":3===o.output?"RenderOutput: Shadow":2===o.output?"RenderOutput: Normal":4===o.output?"RenderOutput: Highlight":""}
  */
  `;Object(_webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__["webglValidateShadersEnabled"])()&&(u.fragment.code.add(r),u.vertex.code.add(r))}


/***/ }),

/***/ "262w":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js ***!
  \**************************************************************************************/
/*! exports provided: DefaultMaterial, getInstanceBufferLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterial", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstanceBufferLayout", function() { return E; });
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/buffer/InterleavedLayout.js */ "/ADo");
/* harmony import */ var _core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/GLMaterialTexture.js */ "aK8v");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/Material.js */ "NbNv");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/verticalOffsetUtils.js */ "ib+T");
/* harmony import */ var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/bufferWriterUtils.js */ "WVfK");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shaders/DefaultMaterialTechnique.js */ "4csu");
/* harmony import */ var _shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shaders/RealisticTreeTechnique.js */ "b5HO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class y extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_6__["Material"]{constructor(e){super(e,P),this.supportsEdges=!0,this.techniqueConfig=new _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__["DefaultMaterialTechniqueConfiguration"],this.vertexBufferLayout=w(this.parameters),this.instanceBufferLayout=e.instanced?E(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,r=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(r||a||s)?!!n||o:i?n?l:o:r||a||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_7__["OITPolygonOffsetLimit"]),this.techniqueConfig}intersect(e,c,u,h,d,p,m){if(null!==this.parameters.verticalOffset){const e=h.camera;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(j,u[12],u[13],u[14]);let c=null;switch(h.viewingMode){case 1:c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(D,j);break;case 2:c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(D,A)}let m=0;if(null!==this.parameters.verticalOffset){const t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(L,j,e.eye),i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(t),s=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(t,t,1/i);let l=null;this.parameters.screenSizePerspective&&(l=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(c,s)),m+=Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_10__["verticalOffsetAtDistance"])(e,i,this.parameters.verticalOffset,l,this.parameters.screenSizePerspective)}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(c,c,m),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["t"])(z,c,h.transform.inverseRotation),d=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(I,d,z),p=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(B,p,z)}Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_10__["intersectTriangleGeometry"])(e,c,h,d,p,Object(_lib_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_8__["getVerticalOffsetObject3D"])(h.verticalOffset),m)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new O(e):null}createBufferWriter(){return new M(this.vertexBufferLayout,this.instanceBufferLayout)}}class O extends _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?_shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_12__["RealisticTreeTechnique"]:_shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__["DefaultMaterialTechnique"],e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const P={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_4__["defaultMaskAlphaCutoff"],textureAlphaPremultiplied:!1,sceneHasOcludees:!1,..._lib_Material_js__WEBPACK_IMPORTED_MODULE_6__["materialParametersDefaults"]};class M{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,i,s){Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_9__["writeDefaultAttributes"])(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s)}}function w(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__["newLayout"])().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}function E(e){let t=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__["newLayout"])();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const I=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),B=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),A=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(0,0,1),D=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),z=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),j=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),L=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();


/***/ }),

/***/ "368d":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js ***!
  \**************************************************************************************************************************/
/*! exports provided: TextureCoordinateAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureCoordinateAttribute", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===d.attributeTextureCoordinates&&t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardTextureCoordinates() {}`)}


/***/ }),

/***/ "3qN5":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: EvaluateMainLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateMainLighting", function() { return n; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){const t=n.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}


/***/ }),

/***/ "4csu":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js ***!
  \*********************************************************************************************/
/*! exports provided: DefaultMaterialTechnique, DefaultMaterialTechniqueConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialTechnique", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialTechniqueConfiguration", function() { return H; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shaderLibrary/util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "jpeq");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/StencilUtils.js */ "h7dw");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../materials/internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../chunks/DefaultMaterial.glsl.js */ "AxBq");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class R extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_13__["ShaderTechnique"]{initializeProgram(e){const t=R.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_10__["doublePrecisionRequiresObfuscation"])(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_17__["Program"](e.rctx,i,_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_15__["Default3D"])}bindPass(e,t){var r,i;Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_11__["bindProjectionMatrix"])(this.program,t.camera.projectionMatrix);const l=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===l)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_6__["bindMultipassTerrainTexture"])(this.program,t)),7===l&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_19__["colorMixModes"][e.colorMixMode])),0===l?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_19__["colorMixModes"][e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_7__["bindPBRUniforms"])(this.program,e,this.configuration.isSchematic)):4===l&&Object(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_5__["bindOutputHighlight"])(this.program,t),Object(_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_9__["bindVisualVariablesUniformsForSymbols"])(this.program,e),Object(_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_4__["bindVerticalOffsetUniforms"])(this.program,e,t),Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_19__["bindScreenSizePerspective"])(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const o=this.configuration.instancedDoublePrecision?Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_11__["bindViewCustomOrigin"])(this.program,o,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Object(_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_11__["bindCameraPosition"])(this.program,o,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__["InstancedDoublePrecision"].bindCustomOrigin(this.program,o),Object(_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["bindSliceUniforms"])(this.program,this.configuration,e.slicePlane,o),0===this.configuration.output&&Object(_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__["bindReadShadowMapViewCustomOrigin"])(this.program,e,o)}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_21__["makePipelineState"])({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_16__["blendingDefault"]:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_16__["OITBlending"])(e),culling:L(r)&&Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_21__["cullingParams"])(r.cullFace),depthTest:{func:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_16__["OITDepthTest"])(e)},depthWrite:i||o?r.writeDepth&&_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_21__["defaultDepthWriteParams"]:null,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_21__["defaultColorWriteParams"],stencilWrite:r.sceneHasOcludees?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_18__["stencilWriteMaskOn"]:null,stencilTest:r.sceneHasOcludees?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_18__["stencilToolMaskBaseParams"]:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_18__["stencilBaseAllZerosParams"]:null,polygonOffset:i||o?null:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_16__["getOITPolygonOffset"])(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function L(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}R.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_12__["ReloadableShaderModule"](_chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_20__["D"],(()=>__webpack_require__.e(/*! import() | DefaultMaterial-glsl-js */ "DefaultMaterial-glsl-js").then(__webpack_require__.bind(null, /*! ./DefaultMaterial.glsl.js */ "SjXz"))));class H extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])({count:8})],H.prototype,"output",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])({count:4})],H.prototype,"alphaDiscardMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])({count:3})],H.prototype,"doubleSidedMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"isSchematic",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"vertexColors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"offsetBackfaces",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"symbolColors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"vvSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"vvColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"verticalOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"receiveShadows",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"slicePlaneEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"sliceHighlightDisabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"receiveAmbientOcclusion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"screenSizePerspective",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"textureAlphaPremultiplied",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"hasColorTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"usePBR",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"hasEmissionTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"hasOcclusionTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"hasNormalTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"instanced",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"instancedColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"instancedDoublePrecision",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"vertexTangents",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"normalsTypeDerivate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"writeDepth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"sceneHasOcludees",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"transparent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"enableOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])({count:3})],H.prototype,"cullFace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])({count:4})],H.prototype,"transparencyPassType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"multipassTerrainEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_14__["parameter"])()],H.prototype,"cullAboveGround",void 0);


/***/ }),

/***/ "6kvK":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js ***!
  \******************************************************************************************************************/
/*! exports provided: EvaluateSceneLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateSceneLighting", function() { return l; });
/* harmony import */ var _EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvaluateAmbientLighting.glsl.js */ "KQYO");
/* harmony import */ var _EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _EvaluateMainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EvaluateMainLighting.glsl.js */ "3qN5");
/* harmony import */ var _PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "xRv2");
/* harmony import */ var _ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l,d){const c=l.fragment;l.include(_EvaluateMainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_2__["EvaluateMainLighting"]),l.include(_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_1__["EvaluateAmbientOcclusion"],d),0!==d.pbrMode&&l.include(_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_3__["PhysicallyBasedRendering"],d),l.include(_EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_0__["EvaluateAmbientLighting"],d),d.receiveShadows&&l.include(_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_5__["ReadShadowMap"],d),c.uniforms.add("lightingGlobalFactor","float"),c.uniforms.add("ambientBoostFactor","float"),l.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_4__["PiUtils"]),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===d.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===d.viewingMode?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`normalize(vPosWorld)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===d.pbrMode||4===d.pbrMode?c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==d.pbrMode&&2!==d.pbrMode||(c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===d.pbrMode?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__["glsl"]`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}


/***/ }),

/***/ "AxBq":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js ***!
  \******************************************************************/
/*! exports provided: D, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return P; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "vXUg");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "F8o4");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "bLIi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js */ "fRF2");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "fiGu");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js */ "DXpj");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "6kvK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js */ "qrV2");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js */ "1W42");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "NiZE");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function P(P){const _=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_27__["ShaderBuilder"],S=_.vertex.code,$=_.fragment.code;return _.include(_views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__["HeaderComment"],{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__["PositionAttribute"]),_.varyings.add("vpos","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_22__["VisualVariables"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__["InstancedDoublePrecision"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__["VerticalOffset"],P),0!==P.output&&7!==P.output||(_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__["NormalAttribute"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Transform"],{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Offset"]),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__["ComputeNormalTexture"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_10__["VertexNormal"],P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__["TextureCoordinateAttribute"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ForwardLinearDepth"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__["SymbolColor"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__["VertexColor"],P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),P.multipassTerrainEnabled&&_.varyings.add("depth","float"),S.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_23__["symbolAlphaCutoff"])}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===P.normalType&&P.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${P.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===P.output&&(_.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_23__["DiscardOrAdjustAlpha"],P),P.multipassTerrainEnabled&&(_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_13__["ReadLinearDepth"]),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__["multipassTerrainTest"],P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__["MixExternalColor"]),$.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__["EvaluateSceneLighting"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__["EvaluateAmbientOcclusion"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_23__["DiscardOrAdjustAlpha"],P),P.receiveShadows&&_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__["ReadShadowMap"],P),P.multipassTerrainEnabled&&(_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_13__["ReadLinearDepth"]),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_17__["multipassTerrainTest"],P)),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__["PhysicallyBasedRenderingParameters"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PhysicallyBasedRendering"],P),_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__["MixExternalColor"]),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__["Normals"],P),$.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${P.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${P.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
        vec3 normal = screenDerivativeNormal(localvpos);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
              mat3 tangentSpace = ${P.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]``}
        ${1===P.pbrMode||2===P.pbrMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_26__["glsl"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),_.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__["DefaultMaterialAuxiliaryPasses"],P),_}const _=Object.freeze({__proto__:null,build:P});


/***/ }),

/***/ "DXpj":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: ComputeNormalTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputeNormalTexture", function() { return n; });
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "fLTx");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,a){const r=n.fragment;a.vertexTangents?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(n.extensions.add("GL_OES_standard_derivatives"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==a.attributeTextureCoordinates&&(n.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__["VertexTextureCoordinates"],a),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}


/***/ }),

/***/ "F8o4":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js ***!
  \*******************************************************************************************/
/*! exports provided: Offset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offset", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}


/***/ }),

/***/ "IvV4":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js ***!
  \**************************************************************************/
/*! exports provided: createTextureResources, load, processLoadResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureResources", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processLoadResult", function() { return b; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/asyncUtils.js */ "eSsm");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/Version.js */ "VJrH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "LbAs");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "Ango");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "Hizz");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "262w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function x(e,t){const r=await g(e,t);return{resource:r,textures:await A(r.textureDefinitions,t)}}async function g(r,n){const i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(n)&&n.streamDataRequester;if(i)return h(r,i,n);const u=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__["result"])(Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(n)));if(!0===u.ok)return u.value.data;Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAbortError"])(u.error),w(u.error)}async function h(e,r,n){const a=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__["result"])(r.request(e,"json",n));if(!0===a.ok)return a.value;Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["throwIfAbortError"])(a.error),w(a.error.details.url)}function w(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("",`Request for object resource failed: ${e}`)}function v(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(y.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(y.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(y.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(y.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else y.warn("Indexed geometries must specify faces"),n=!1;break}default:y.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(y.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const s in a){a[s].values||(y.warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function b(e,t){const r=[],n=[],s=[],o=[],l=e.resource,c=_core_Version_js__WEBPACK_IMPORTED_MODULE_6__["Version"].parse(l.version||"1.0","wosr");I.validate(c);const p=l.model.name,y=l.model.geometries,x=l.materialDefinitions,g=e.textures;let h=0;const w=new Map;for(let i=0;i<y.length;i++){const e=y[i];if(!v(e))continue;const l=M(e),c=e.params.vertexAttributes,p=[];for(const t in c){const e=c[t],r=e.values;p.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const j=g&&g[l.texture];if(j&&!w.has(l.texture)){const{image:e,params:t}=j,r=new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_11__["Texture"](e,t);o.push(r),w.set(l.texture,r)}const A=w.get(l.texture),I=A?A.id:void 0;let P=s[l.material]?s[l.material][l.texture]:null;if(!P){const e=x[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=j&&j.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=j?U(j.alphaChannelUsage):void 0,i={ambient:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["d"])(e.diffuse),diffuse:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["d"])(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:I,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!j&&!!j.params.preMultiplyAlpha};Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),P=new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_12__["DefaultMaterial"](i),s[l.material]||(s[l.material]={}),s[l.material][l.texture]=P}n.push(P);const T=new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_10__["Geometry"](p,b);h+=b.position?b.position.length:0,r.push(T)}return{name:p,stageResources:{textures:o,materials:n,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:j(r),numberOfVertices:h,lodThreshold:null}}function j(e){const t=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["empty"])();return e.forEach((e=>{const r=e.boundingInfo;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(r)&&(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["expandWithVec3"])(t,r.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["expandWithVec3"])(t,r.getBBMax()))})),t}async function A(e,t){const r=[];for(const o in e){const n=e[o],s=n.images[0].data;if(!s){y.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==U(l)},m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(t)&&t.disableTextures?Promise.resolve(null):Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_9__["requestImage"])(i,t);r.push(m.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))))}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function U(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function M(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const I=new _core_Version_js__WEBPACK_IMPORTED_MODULE_6__["Version"](1,2,"wosr");


/***/ }),

/***/ "KQYO":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js ***!
  \********************************************************************************************************************/
/*! exports provided: EvaluateAmbientLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateAmbientLighting", function() { return n; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}


/***/ }),

/***/ "NiZE":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js ***!
  \**********************************************************************************************************/
/*! exports provided: MixExternalColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixExternalColor", function() { return i; });
/* harmony import */ var _ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorConversion.glsl.js */ "Q3fD");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(i){i.include(_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ColorConversion"]),i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(1)}) {
        return allMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"].int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}


/***/ }),

/***/ "SbiP":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/*! exports provided: adjustStaticAGOUrl, isDevEnvironment, isTelemetryDevEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustStaticAGOUrl", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevEnvironment", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTelemetryDevEnvironment", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ "TJZZ":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec33.js ***!
  \***************************************************/
/*! exports provided: c, f, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],l+=f,c+=r}function t(e,t,n,d,f){var o,r;const u=e.typedBuffer,l=e.typedBufferStride,c=null!=(o=null==f?void 0:f.count)?o:e.count;let s=(null!=(r=null==f?void 0:f.dstIndex)?r:0)*l;for(let p=0;p<c;++p)u[s]=t,u[s+1]=n,u[s+2]=d,s+=l}const n=Object.freeze({__proto__:null,copy:e,fill:t});


/***/ }),

/***/ "UhFW":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: TextureAtlasLookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureAtlasLookup", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}


/***/ }),

/***/ "WHaQ":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js ***!
  \*************************************************************************************************************************/
/*! exports provided: DecodeSymbolColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeSymbolColor", function() { return l; });
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l){l.vertex.code.add(_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}


/***/ }),

/***/ "ZBV1":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/math/common.js ***!
  \**************************************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return e; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.support.buffer.math");


/***/ }),

/***/ "ZS5L":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DecodeNormal.glsl.js ***!
  \******************************************************************************************************/
/*! exports provided: DecodeNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeNormal", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){const d=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.fragment.code.add(d),o.vertex.code.add(d)}


/***/ }),

/***/ "ZotJ":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec32.js ***!
  \***************************************************/
/*! exports provided: a, b, n, s, t, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return u; });
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/math/common.js */ "ZBV1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,f,r){if(e.count!==f.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[4],c=r[5],i=r[6],a=r[8],p=r[9],y=r[10],B=r[12],m=r[13],h=r[14],l=e.typedBuffer,S=e.typedBufferStride,b=f.typedBuffer,M=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*S,f=t*M,r=b[f],o=b[f+1],v=b[f+2];l[e]=n*r+s*o+a*v+B,l[e+1]=u*r+c*o+p*v+m,l[e+2]=d*r+i*o+y*v+h}}function f(e,f,r){if(e.count!==f.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[3],c=r[4],i=r[5],a=r[6],p=r[7],y=r[8],B=e.typedBuffer,m=e.typedBufferStride,h=f.typedBuffer,l=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*m,f=t*l,r=h[f],o=h[f+1],S=h[f+2];B[e]=n*r+s*o+a*S,B[e+1]=u*r+c*o+p*S,B[e+2]=d*r+i*o+y*S}}function r(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=f*u[e],o[t+1]=f*u[e+1],o[t+2]=f*u[e+2]}}function o(t,e){const f=Math.min(t.count,e.count),r=t.typedBuffer,o=t.typedBufferStride,n=e.typedBuffer,u=e.typedBufferStride;for(let d=0;d<f;d++){const t=d*o,e=d*u,f=n[e],s=n[e+1],c=n[e+2],i=Math.sqrt(f*f+s*s+c*c);if(i>0){const e=1/i;r[t]=e*f,r[t+1]=e*s,r[t+2]=e*c}}}function n(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=u[e]>>f,o[t+1]=u[e+1]>>f,o[t+2]=u[e+2]>>f}}const u=Object.freeze({__proto__:null,transformMat4:e,transformMat3:f,scale:r,normalize:o,shiftRight:n});


/***/ }),

/***/ "aiF/":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js ***!
  \*********************************************************************************************************/
/*! exports provided: DoublePrecision, doublePrecisionRequiresObfuscation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoublePrecision", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doublePrecisionRequiresObfuscation", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function r(c){return!!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("force-double-precision-obfuscation")||c.driverTest.doublePrecisionRequiresObfuscation}


/***/ }),

/***/ "b5HO":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js ***!
  \*******************************************************************************************/
/*! exports provided: RealisticTreeTechnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealisticTreeTechnique", function() { return a; });
/* harmony import */ var _chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/RealisticTree.glsl.js */ "sKsC");
/* harmony import */ var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/Program.js */ "yCmR");
/* harmony import */ var _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefaultMaterialTechnique.js */ "4csu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a extends _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_5__["DefaultMaterialTechnique"]{initializeProgram(e){const s=a.shader.get(),t=this.configuration,l=s.build({OITEnabled:0===t.transparencyPassType,output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,pbrMode:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_1__["doublePrecisionRequiresObfuscation"])(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new _lib_Program_js__WEBPACK_IMPORTED_MODULE_4__["Program"](e.rctx,l,_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_3__["Default3D"])}}a.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__["ReloadableShaderModule"](_chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_0__["R"],(()=>__webpack_require__.e(/*! import() | core-shaderLibrary-default-RealisticTree-glsl-js */ "core-shaderLibrary-default-RealisticTree-glsl-js").then(__webpack_require__.bind(null, /*! ../core/shaderLibrary/default/RealisticTree.glsl.js */ "FmK6"))));


/***/ }),

/***/ "bLIi":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: SymbolColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolColor", function() { return r; });
/* harmony import */ var _collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../collections/Component/Material/shader/DecodeSymbolColor.glsl.js */ "WHaQ");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,l){l.symbolColor?(r.include(_collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__["DecodeSymbolColor"]),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}


/***/ }),

/***/ "cIib":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: EvaluateAmbientOcclusion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateAmbientOcclusion", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}


/***/ }),

/***/ "fLTx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js ***!
  \************************************************************************************************************************/
/*! exports provided: VertexTextureCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexTextureCoordinates", function() { return u; });
/* harmony import */ var _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/TextureAtlasLookup.glsl.js */ "UhFW");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(u,a){u.include(_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__["TextureCoordinateAttribute"],a),u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===a.attributeTextureCoordinates&&(u.include(_util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_1__["TextureAtlasLookup"]),u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}


/***/ }),

/***/ "fRF2":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: VertexNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexNormal", function() { return l; });
/* harmony import */ var _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VertexPosition.glsl.js */ "vEBI");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(l,e){0===e.normalType||1===e.normalType?(l.include(_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__["NormalAttribute"],e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===e.normalType?(l.include(_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__["VertexPosition"],e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`normalize(vPositionWorldCameraRelative);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void forwardNormal() {}`)}!function(o){function r(o,r){o.setUniformMatrix4fv("viewNormal",r)}o.bindUniforms=r}(l||(l={}));


/***/ }),

/***/ "fiGu":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js ***!
  \***************************************************************************************************************************/
/*! exports provided: DefaultMaterialAuxiliaryPasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialAuxiliaryPasses", function() { return u; });
/* harmony import */ var _Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Slice.glsl.js */ "0nJL");
/* harmony import */ var _Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Transform.glsl.js */ "Tbkp");
/* harmony import */ var _attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attributes/VertexNormal.glsl.js */ "fRF2");
/* harmony import */ var _output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../output/OutputDepth.glsl.js */ "wtEh");
/* harmony import */ var _output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(u,c){const p=u.vertex.code,v=u.fragment.code;1!==c.output&&3!==c.output||(u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!0}),u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__["TextureCoordinateAttribute"],c),u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_7__["VisualVariables"],c),u.include(_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_5__["OutputDepth"],c),u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__["Slice"],c),u.vertex.uniforms.add("cameraNearFar","vec2"),u.varyings.add("depth","float"),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_8__["DiscardOrAdjustAlpha"],c),v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
      void main(void) {
        discardBySlice(vpos);
        ${c.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===c.output&&(u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!1}),u.include(_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__["NormalAttribute"],c),u.include(_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VertexNormal"],c),u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__["TextureCoordinateAttribute"],c),u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_7__["VisualVariables"],c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),p.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===c.normalType?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__["Slice"],c),u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_8__["DiscardOrAdjustAlpha"],c),v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===c.normalType?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
            vec3 normal = screenDerivativeNormal(vPositionView);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===c.output&&(u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!1}),u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__["TextureCoordinateAttribute"],c),u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_7__["VisualVariables"],c),c.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),p.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__["Slice"],c),u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_8__["DiscardOrAdjustAlpha"],c),u.include(_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_6__["OutputHighlight"]),v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${c.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}


/***/ }),

/***/ "lKY1":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js ***!
  \***********************************************************************************/
/*! exports provided: fetch, gltfToEngineResources, parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gltfToEngineResources", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return q; });
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/devEnvironmentUtils.js */ "SbiP");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "ZotJ");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "5MHk");
/* harmony import */ var _geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/support/buffer/utils.js */ "fi3m");
/* harmony import */ var _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../glTF/DefaultLoadingContext.js */ "K2Cv");
/* harmony import */ var _glTF_loader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../glTF/loader.js */ "PDsV");
/* harmony import */ var _glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../glTF/internal/indexUtils.js */ "CHx4");
/* harmony import */ var _wosrLoader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wosrLoader.js */ "IvV4");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "Ango");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "Hizz");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "262w");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js */ "BhNz");
/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../chunks/vec22.js */ "3Fbu");
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../chunks/vec43.js */ "HCB5");
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../chunks/vec33.js */ "TJZZ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function $(s,o){const i=q(Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__["adjustStaticAGOUrl"])(s));if("wosr"===i.fileType){const e=await(o.cache?o.cache.loadWOSR(i.url,o):Object(_wosrLoader_js__WEBPACK_IMPORTED_MODULE_16__["load"])(i.url,o)),t=Object(_wosrLoader_js__WEBPACK_IMPORTED_MODULE_16__["processLoadResult"])(e,o);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(o.cache?o.cache.loadGLTF(i.url,o,o.usePBR):Object(_glTF_loader_js__WEBPACK_IMPORTED_MODULE_14__["load"])(new _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_13__["DefaultLoadingContext"](o.streamDataRequester),i.url,o,o.usePBR)),u=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["get"])(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(u)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&J(a,u);const n=a.meta.isEsriSymbolResource?{usePBR:o.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:o.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...o.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=K(a,n,l,i.specifiedLodIndex);let t=e[0].boundingBox;if(0!==i.specifiedLodIndex){t=K(a,n,l,0)[0].boundingBox}return{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const c=K(a,n,l);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function K(e,t,s,a){const u=e.model,n=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),l=new Array,c=new Map,m=new Map;return u.lods.forEach(((e,i)=>{if(void 0!==a&&i!==a)return;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["empty"])()};l.push(d),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=u.materials.get(e.material),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.texCoord0),f=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.normal),p=Q(a.alphaMode);if(!c.has(i)){if(l){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureColor)&&!m.has(a.textureColor)){const e=u.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:1!==p};m.set(a.textureColor,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__["Texture"](e.data,t))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureNormal)&&!m.has(a.textureNormal)){const e=u.textures.get(a.textureNormal);m.set(a.textureNormal,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__["Texture"](e.data,e.parameters))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureOcclusion)&&!m.has(a.textureOcclusion)){const e=u.textures.get(a.textureOcclusion);m.set(a.textureOcclusion,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__["Texture"](e.data,e.parameters))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureEmissive)&&!m.has(a.textureEmissive)){const e=u.textures.get(a.textureEmissive);m.set(a.textureEmissive,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__["Texture"](e.data,e.parameters))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureMetallicRoughness)&&!m.has(a.textureMetallicRoughness)){const e=u.textures.get(a.textureMetallicRoughness);m.set(a.textureMetallicRoughness,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__["Texture"](e.data,e.parameters))}}const o=a.color[0]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_20__["COLOR_GAMMA"]),n=a.color[1]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_20__["COLOR_GAMMA"]),d=a.color[2]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_20__["COLOR_GAMMA"]),x=a.emissiveFactor[0]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_20__["COLOR_GAMMA"]),g=a.emissiveFactor[1]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_20__["COLOR_GAMMA"]),h=a.emissiveFactor[2]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_20__["COLOR_GAMMA"]),b=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureColor)&&l?m.get(a.textureColor):null;c.set(i,new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_19__["DefaultMaterial"]({...t,transparent:0===p,textureAlphaMode:p,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,n,d],ambient:[o,n,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(b)?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureNormal)&&l?m.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureOcclusion)&&l?m.get(a.textureOcclusion).id:void 0,emissiveTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureEmissive)&&l?m.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureMetallicRoughness)&&l?m.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[x,g,h],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...s}))}const x=H(e.indices||e.attributes.position.count,e.primitiveType),O=e.attributes.position.count,F=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3f"],O);Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__["t"])(F,e.attributes.position,e.transform);const A=[["position",{data:F.typedBuffer,size:F.elementCount,exclusive:!0}]],I=[["position",x]];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.normal)){const t=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3f"],O);Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(n,e.transform),Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__["a"])(t,e.attributes.normal,n),A.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["normal",x])}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.tangent)){const t=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4f"],O);Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(n,e.transform),Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__["t"])(t,e.attributes.tangent,n),A.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["tangent",x])}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.texCoord0)){const t=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec2f"],O);Object(_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_21__["n"])(t,e.attributes.texCoord0),A.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["uv0",x])}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.attributes.color)){const t=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4u8"],O);if(4===e.attributes.color.elementCount)e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4f"]?Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__["s"])(t,e.attributes.color,255):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4u8"]?Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_22__["c"])(t,e.attributes.color):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4u16"]&&Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_11__["s"])(t,e.attributes.color,1/256);else{Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_22__["f"])(t,255,255,255,255);const r=new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3u8"](t.buffer,0,4);e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3f"]?Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__["s"])(r,e.attributes.color,255):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3u8"]?Object(_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_23__["c"])(r,e.attributes.color):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3u16"]&&Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__["s"])(r,e.attributes.color,1/256)}A.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),I.push(["color",x])}const k=new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_17__["Geometry"](A,I);d.stageResources.geometries.push(k),d.stageResources.materials.push(c.get(i)),l&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureColor)&&d.stageResources.textures.push(m.get(a.textureColor)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureNormal)&&d.stageResources.textures.push(m.get(a.textureNormal)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureOcclusion)&&d.stageResources.textures.push(m.get(a.textureOcclusion)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureEmissive)&&d.stageResources.textures.push(m.get(a.textureEmissive)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a.textureMetallicRoughness)&&d.stageResources.textures.push(m.get(a.textureMetallicRoughness))),d.numberOfVertices+=O;const L=k.boundingInfo;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(L)&&(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["expandWithVec3"])(d.boundingBox,L.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["expandWithVec3"])(d.boundingBox,L.getBBMax()))}))})),l}function Q(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function H(e,t){switch(t){case 4:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_15__["trianglesToTriangles"])(e);case 5:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_15__["triangleStripToTriangles"])(e);case 6:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_15__["triangleFanToTriangles"])(e)}}function J(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of o.parts){const o=i.attributes.normal;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o))return;const x=i.attributes.position,g=x.count,b=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),v=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),y=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),B=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec4u8"],g),M=Object(_geometry_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_12__["createBuffer"])(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__["BufferViewVec3f"],g),w=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["b"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),i.transform);for(let s=0;s<g;s++){x.getVec(s,v),o.getVec(s,b),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(v,v,i.transform),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["f"])(y,v,t.center),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["E"])(y,y,t.radius);const a=y[2],u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["l"])(y),p=Math.min(.45+.55*u*u,1);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["E"])(y,y,t.radius),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["m"])(y,y,w),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["n"])(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__["e"])(y,y,b,a>-1?.2:Math.min(-4*a-3.8,1)),M.setVec(s,y),B.set(s,0,255*p),B.set(s,1,255*p),B.set(s,2,255*p),B.set(s,3,255)}i.attributes.normal=M,i.attributes.color=B}}}


/***/ }),

/***/ "p9cc":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: PBRSchematicMRRValues, PhysicallyBasedRenderingParameters, bindPBRUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBRSchematicMRRValues", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicallyBasedRenderingParameters", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindPBRUniforms", function() { return a; });
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "fLTx");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_0__["f"])(0,.6,.2);function r(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__["VertexTextureCoordinates"],t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float getBakedOcclusion() { return 1.0; }`),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function a(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor))}


/***/ }),

/***/ "qrV2":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js ***!
  \****************************************************************************************************/
/*! exports provided: Normals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Normals", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){const m=r.fragment;m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===e.doubleSidedMode?m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===e.doubleSidedMode?m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}


/***/ }),

/***/ "sJp1":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: PositionAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionAttribute", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){o.attributes.add("position","vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 positionModel() { return position; }`)}


/***/ }),

/***/ "sKsC":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js ***!
  \****************************************************************/
/*! exports provided: R, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return j; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "vXUg");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "F8o4");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "bLIi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "fiGu");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js */ "0Ect");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "6kvK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js */ "xtdb");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "NiZE");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j(j){const E=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_23__["ShaderBuilder"],O=E.vertex.code,_=E.fragment.code;return E.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__["PositionAttribute"]),E.varyings.add("vpos","vec3"),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_19__["VisualVariables"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__["InstancedDoublePrecision"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_10__["VerticalOffset"],j),0!==j.output&&7!==j.output||(E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__["NormalAttribute"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Transform"],{linearDepth:!1}),j.offsetBackfaces&&E.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Offset"]),j.instancedColor&&E.attributes.add("instanceColor","vec4"),E.varyings.add("vNormalWorld","vec3"),E.varyings.add("localvpos","vec3"),j.multipassTerrainEnabled&&E.varyings.add("depth","float"),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__["TextureCoordinateAttribute"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ForwardLinearDepth"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__["SymbolColor"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__["VertexColor"],j),E.vertex.uniforms.add("externalColor","vec4"),E.varyings.add("vcolorExt","vec4"),O.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${j.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_20__["symbolAlphaCutoff"])}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${j.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${j.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===j.output&&(E.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_20__["DiscardOrAdjustAlpha"],j),j.multipassTerrainEnabled&&(E.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_12__["ReadLinearDepth"]),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_15__["multipassTerrainTest"],j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__["MixExternalColor"]),_.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`vec4 texColor = vec4(1.0);`}
        ${j.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===j.output&&(E.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__["EvaluateSceneLighting"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__["EvaluateAmbientOcclusion"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_20__["DiscardOrAdjustAlpha"],j),j.receiveShadows&&E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_18__["ReadShadowMap"],j),j.multipassTerrainEnabled&&(E.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_12__["ReadLinearDepth"]),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_15__["multipassTerrainTest"],j)),E.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),E.fragment.uniforms.add("view","mat4"),j.hasColorTexture&&E.fragment.uniforms.add("tex","sampler2D"),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_17__["PhysicallyBasedRenderingParameters"],j),E.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_16__["PhysicallyBasedRendering"],j),E.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__["MixExternalColor"]),_.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${j.multipassTerrainEnabled?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${j.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${j.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===j.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${j.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===j.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${j.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===j.pbrMode||2===j.pbrMode?1===j.viewingMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]``}
        ${1===j.pbrMode||2===j.pbrMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__["glsl"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${j.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),E.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_11__["DefaultMaterialAuxiliaryPasses"],j),E}const E=Object.freeze({__proto__:null,build:j});


/***/ }),

/***/ "vEBI":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js ***!
  \**************************************************************************************************************/
/*! exports provided: VertexPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexPosition", function() { return d; });
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(o,r){o.include(_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__["PositionAttribute"]),o.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__["DoublePrecision"],r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__["glsl"]`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}!function(i){class m{constructor(){this.worldFromModel_RS=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),this.worldFromModel_TH=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.worldFromModel_TL=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])()}}i.ModelTransform=m;class a{constructor(){this.worldFromView_TH=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.worldFromView_TL=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.viewFromCameraRelative_RS=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),this.projFromView=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}}function d(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL)}function s(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS)}i.ViewProjectionTransform=a,i.bindModelTransform=d,i.bindViewProjTransform=s}(d||(d={}));


/***/ }),

/***/ "wzLF":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: NormalAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalAttribute", function() { return o; });
/* harmony import */ var _util_DecodeNormal_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/DecodeNormal.glsl.js */ "ZS5L");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 normalModel() {
return normal;
}`)),1===d.normalType&&(o.include(_util_DecodeNormal_glsl_js__WEBPACK_IMPORTED_MODULE_0__["DecodeNormal"]),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}


/***/ })

}]);
//# sourceMappingURL=default~views-3d-layers-GraphicsLayerView3D-js~views-3d-layers-graphics-objectResourceUtils-js.js.map