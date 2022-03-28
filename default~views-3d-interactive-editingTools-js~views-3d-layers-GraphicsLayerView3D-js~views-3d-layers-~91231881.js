(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-3d-interactive-editingTools-js~views-3d-layers-GraphicsLayerView3D-js~views-3d-layers-~91231881"],{

/***/ "+h6m":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js ***!
  \************************************************************************************************/
/*! exports provided: Default3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Default3D", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]);


/***/ }),

/***/ "/ADo":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js ***!
  \********************************************************************************/
/*! exports provided: InterleavedBuffer, InterleavedLayout, newLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterleavedBuffer", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterleavedLayout", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newLayout", function() { return A; });
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/buffer/types.js */ "xqxP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class N{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fieldNames){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new N(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,s){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n)}}}class T{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,i){return this.appendField(t,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"],i),this}vec2f64(e,i){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f64"],i),this}vec3f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"],t),this}vec3f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f64"],t),this}vec4f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"],t),this}vec4f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f64"],t),this}mat3f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f"],t),this}mat3f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f64"],t),this}mat4f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f"],t),this}mat4f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f64"],t),this}vec4u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"],t),this}f32(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat"],t),this}f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat64"],t),this}u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint8"],t),this}u16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint16"],t),this}i8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt8"],t),this}vec2i8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i8"],t),this}vec2i16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i16"],t),this}vec2u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u8"],t),this}vec4u16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u16"],t),this}u32(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint32"],t),this}appendField(e,t,i){const s=t.ElementCount*Object(_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__["elementTypeSize"])(t.ElementType),r=this.stride;this.fields.set(e,{size:s,constructor:t,offset:r,optional:i}),this.stride+=s,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new N(this,e)}createView(e){return new N(this,e)}clone(){const e=new T;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function A(){return new T}


/***/ }),

/***/ "0BfS":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js ***!
  \**********************************************************************************************************/
/*! exports provided: ReadShadowMap, bindReadShadowMapUniforms, bindReadShadowMapView, bindReadShadowMapViewCustomOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadShadowMap", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindReadShadowMapUniforms", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindReadShadowMapView", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindReadShadowMapViewCustomOrigin", function() { return i; });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){t.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__["RgbaFloatEncoding"]),t.fragment.uniforms.add("uShadowMapTex","sampler2D"),t.fragment.uniforms.add("uShadowMapNum","int"),t.fragment.uniforms.add("uShadowMapDistance","vec4"),t.fragment.uniforms.add("uShadowMapMatrix","mat4",4),t.fragment.uniforms.add("uDepthHalfPixelSz","float"),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function o(a,e){e.shadowMappingEnabled&&(e.shadowMap.bind(a),e.shadowMap.bindView(a,e.origin))}function i(a,e,t){e.shadowMappingEnabled&&e.shadowMap.bindView(a,t)}function l(a,e){e.shadowMappingEnabled&&e.shadowMap.bindView(a,e.origin)}


/***/ }),

/***/ "0Ect":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: ReadLinearDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadLinearDepth", function() { return a; });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a){a.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__["RgbaFloatEncoding"]),a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}


/***/ }),

/***/ "0X3F":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/enums.js ***!
  \********************************************************/
/*! exports provided: BASE_TEXTURE_UNIT, DepthStencilAttachment, ResourceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_TEXTURE_UNIT", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepthStencilAttachment", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceType", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=33984;var r;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(r||(r={}));const f=33306;


/***/ }),

/***/ "0nJL":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js ***!
  \******************************************************************************************/
/*! exports provided: Slice, bindSliceUniforms, bindSliceUniformsWithOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSliceUniforms", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindSliceUniformsWithOrigin", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(e,s){if(s.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),s.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.sliceHighlightDisabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`#define highlightSlice(_color_, _pos_) (_color_)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(c)}else{const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i)}}function l(e,s,i){r(e,s,i.slicePlane,i.origin)}function r(a,o,c,l){o.slicePlaneEnabled&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c)?(l?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(t,c.origin,l),a.setUniform3fv("slicePlaneOrigin",t)):a.setUniform3fv("slicePlaneOrigin",c.origin),a.setUniform3fv("slicePlaneBasis1",c.basis1),a.setUniform3fv("slicePlaneBasis2",c.basis2)):(a.setUniform3fv("slicePlaneBasis1",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["Z"]),a.setUniform3fv("slicePlaneBasis2",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["Z"]),a.setUniform3fv("slicePlaneOrigin",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["Z"])))}const t=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();


/***/ }),

/***/ "1/dN":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,t),this._technique),this._technique}ensureResources(e){return 2}}


/***/ }),

/***/ "1ff1":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js ***!
  \*************************************************************************/
/*! exports provided: createColorTexture, createEmptyDepthTexture, createEmptyTexture, createQuadVAO, createScreenSizeTriangleVAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColorTexture", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyDepthTexture", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyTexture", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuadVAO", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScreenSizeTriangleVAO", function() { return l; });
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultVertexBufferLayouts.js */ "fDPZ");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(o,i=_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["Pos2"],l=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__["Default3D"],m=-1,f=1){let u=null;if(i===_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["Pos2Tex"])u=new Float32Array([m,m,0,0,f,m,1,0,m,f,0,1,f,f,1,1]);else u=new Float32Array([m,m,f,m,m,f,f,f]);return new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](o,l,{geometry:i},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"].createVertex(o,35044,u)})}function l(r,o=_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["Pos2"],i=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__["Default3D"]){const l=new Float32Array([-1,-1,3,-1,-1,3]);return new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](r,i,{geometry:o},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"].createVertex(r,35044,l)})}const m=4;function f(e,t=m){return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:t,height:t})}function u(e,t,r=m){const n=new Uint8Array(r*r*4);for(let o=0;o<n.length;o+=4)n[o+0]=255*t[0],n[o+1]=255*t[1],n[o+2]=255*t[2],n[o+3]=255*t[3];return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:r,height:r},n)}function g(e){return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}


/***/ }),

/***/ "2hxh":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js ***!
  \*******************************************************************************************/
/*! exports provided: applyPrecomputedScaleFactor, applyScaleFactor, applyScaleFactorVec2, getLabelSettings, getSettings, precomputeScaleFactor, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPrecomputedScaleFactor", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScaleFactor", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScaleFactorVec2", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelSettings", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precomputeScaleFactor", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return m; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(e,t){return new p(e,h,t)}function r(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=h;return new p(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:v.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:v.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:v.minPixelSize},t)}function n(e){return Math.abs(e*e*e)}function l(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x.scale=Math.min(i.divisor/(t-i.offset),1),x.factor=n(e),x.minPixelSize=i.minPixelSize,x.paddingPixels=r,x}function s(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function c(t,a){return Math.max(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t*a.scale,t,a.factor),s(t,a))}function o(t,a,i=[0,0]){const r=Math.min(Math.max(a.scale,s(t[1],a)/t[1]),1);return i[0]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t[0]*r,t[0],a.factor),i[1]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t[1]*r,t[1],a.factor),i}function u(e,t,a){const i=l(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,c(1,i)}function d(e,t,a,i){i.scale=u(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride}function f(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,s(e[1],t)/e[1]),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function m(e,t,a,i){return c(e,l(t,a,i))}class p{constructor(e,t,a,i=g(),r){this.viewingMode=e,this.description=t,this.ellipsoidRadius=a,this.parameters=i,this._paddingPixelsOverride=r,2===this.viewingMode?(this.coverageCompensation=this.surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this.surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersGlobal)}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this.calculateParameters(e,this.ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new p(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,e):this}calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this.description,{fovY:l,distance:s}=e,c=this.calculateCurvatureDependentParameters(e,t),o=this.coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}calculateCurvatureDependentParametersLocal(e,t,a=P){return a.tiltAngle=this.description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,a}calculateCurvatureDependentParametersGlobal(t,i,r=P){const n=this.description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}surfaceCoverageCompensationLocal(e,t,a){return(e.fovY-a.tiltAngle)/e.fovY}surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return(Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const h={curvatureDependent:{min:{curvature:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(10),tiltAngle:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(12),scaleFallOffFactor:.5},max:{curvature:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(70),tiltAngle:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},v={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function g(){return{camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const x={scale:0,factor:0,minPixelSize:0,paddingPixels:0},P={tiltAngle:0,scaleFallOffFactor:0};


/***/ }),

/***/ "2jVe":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js ***!
  \**************************************************************************************************************/
/*! exports provided: ShaderTechniqueConfiguration, parameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderTechniqueConfiguration", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameter", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function e(t={}){return(e,r)=>{var a,s;e._parameterNames=null!=(a=e._parameterNames)?a:[],e._parameterNames.push(r);const i=e._parameterNames.length-1,h=t.count||2,o=Math.ceil(Math.log2(h)),m=null!=(s=e._parameterBits)?s:[0];let n=0;for(;m[n]+o>16;)n++,n>=m.length&&m.push(0);e._parameterBits=m;const p=m[n],_=(1<<o)-1<<p;m[n]+=o,Object.defineProperty(e,r,{get(){return this[i]},set(t){if(this[i]!==t&&(this[i]=t,this._keyDirty=!0,this._parameterBits[n]=this._parameterBits[n]&~_|+t<<p&_,"number"!=typeof t&&"boolean"!=typeof t))throw"Configuration value for "+r+" must be boolean or number, got "+typeof t}})}}


/***/ }),

/***/ "69UF":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js ***!
  \******************************************************************************************************/
/*! exports provided: DiscardOrAdjustAlpha, defaultMaskAlphaCutoff, symbolAlphaCutoff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscardOrAdjustAlpha", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMaskAlphaCutoff", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolAlphaCutoff", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=.1,o=.001;function r(d,r){const e=d.fragment;switch(r.alphaDiscardMode){case 0:e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        #define discardOrAdjustAlpha(color) { if (color.a < ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].float(o)}) { discard; } }
      `);break;case 1:e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:e.uniforms.add("textureAlphaCutoff","float"),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:d.fragment.uniforms.add("textureAlphaCutoff","float"),d.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}


/***/ }),

/***/ "AD+e":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js ***!
  \******************************************************************************/
/*! exports provided: ContentObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObject", function() { return r; });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/uid.js */ "8uAX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this.id=Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_0__["generateUID"])()}unload(){}}


/***/ }),

/***/ "Ango":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js ***!
  \*************************************************************************/
/*! exports provided: Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return u; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundingInfo.js */ "thYK");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentObject.js */ "AD+e");
/* harmony import */ var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geometryDataUtils.js */ "EDiM");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class u extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_2__["ContentObject"]{constructor(t,e=[],i=0,s=-1){super(),this._primitiveType=i,this.edgeIndicesLength=s,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,r]of t)r&&this._vertexAttributes.set(n,{...r});if(null==e||0===e.length){const t=h(this._vertexAttributes),e=Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_3__["generateDefaultIndexArray"])(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e)}else for(const[n,r]of e)r&&(this._indices.set(n,g(r)),"position"===n&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){const e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e.data=Array.from(e.data),e.exclusive=!0),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_3__["computeAttachmentOriginTriangles"])(i,e,t)}computeAttachmentOriginPoints(t){const e=this.indices.get("position"),i=this.vertexAttributes.get("position");return Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_3__["computeAttachmentOriginPoints"])(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.indices.get("position");if(0===t.length)return null;const i=0===this.primitiveType?3:1;Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["assert"])(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const s=Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_3__["generateDefaultIndexArray"])(t.length/i),r=this.vertexAttributes.get("position");return new _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_1__["BoundingInfo"](s,i,t,r)}}function h(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function g(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}


/***/ }),

/***/ "BPBZ":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quat.js ***!
  \**************************************************/
/*! exports provided: A, B, C, D, E, F, G, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return T; });
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat3f64.js */ "2uVf");
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quatf64.js */ "sTkM");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ "QhKk");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec4.js */ "dXfX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function A(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function I(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function P(t,s){const a=2*Math.acos(s[3]),n=Math.sin(a/2);return n>_common_js__WEBPACK_IMPORTED_MODULE_3__["E"]?(t[0]=s[0]/n,t[1]=s[1]/n,t[2]=s[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function v(t,s,a){const n=s[0],o=s[1],r=s[2],c=s[3],e=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+c*e+o*i-r*u,t[1]=o*h+c*u+r*e-n*i,t[2]=r*h+c*i+n*u-o*e,t[3]=c*h-n*e-o*u-r*i,t}function b(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+c*e,t[1]=o*u+r*e,t[2]=r*u-o*e,t[3]=c*u-n*e,t}function y(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*e,t[1]=o*u+c*e,t[2]=r*u+n*e,t[3]=c*u-o*e,t}function E(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*e,t[1]=o*u-n*e,t[2]=r*u+c*e,t[3]=c*u-r*e,t}function _(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function z(t,s,a,n){const r=s[0],c=s[1],e=s[2],u=s[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],d=a[3];return h=r*m+c*p+e*q+u*d,h<0&&(h=-h,m=-m,p=-p,q=-q,d=-d),1-h>_common_js__WEBPACK_IMPORTED_MODULE_3__["E"]?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-n)*i)/M,l=Math.sin(n*i)/M):(f=1-n,l=n),t[0]=f*r+l*m,t[1]=f*c+l*p,t[2]=f*e+l*q,t[3]=f*u+l*d,t}function L(t){const s=Object(_common_js__WEBPACK_IMPORTED_MODULE_3__["R"])(),a=Object(_common_js__WEBPACK_IMPORTED_MODULE_3__["R"])(),n=Object(_common_js__WEBPACK_IMPORTED_MODULE_3__["R"])(),o=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=o*Math.sin(2*Math.PI*a),t[1]=o*Math.cos(2*Math.PI*a),t[2]=c*Math.sin(2*Math.PI*n),t[3]=c*Math.cos(2*Math.PI*n),t}function k(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],c=a*a+n*n+o*o+r*r,e=c?1/c:0;return t[0]=-a*e,t[1]=-n*e,t[2]=-o*e,t[3]=r*e,t}function w(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function B(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function C(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),c=Math.cos(s),e=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-c*e*i,t[1]=c*e*h+r*u*i,t[2]=c*u*i-r*e*h,t[3]=c*u*h+r*e*i,t}function D(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const F=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["c"],G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["s"],O=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["a"],R=v,T=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["b"],W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["d"],X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["l"],Y=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["e"],Z=Y,H=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["f"],J=H,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["n"],N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["g"],Q=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["h"];function S(t,s,a){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s,a);return n<-.999999?(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(U,V,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["u"])(U)<1e-6&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(U,$,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(U,U),I(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,K(t,t))}const U=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),V=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(1,0,0),$=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(0,1,0);function tt(t,s,a,n,o,r){return z(st,s,o,r),z(at,a,n,r),z(t,st,at,2*r*(1-r)),t}const st=Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(),at=Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_1__["a"])();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],K(t,B(t,o))}const ot=Object(_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),rt=Object.freeze({__proto__:null,identity:A,setAxisAngle:I,getAxisAngle:P,multiply:v,rotateX:b,rotateY:y,rotateZ:E,calculateW:_,slerp:z,random:L,invert:k,conjugate:w,fromMat3:B,fromEuler:C,str:D,copy:F,set:G,add:O,mul:R,scale:T,dot:W,lerp:X,length:Y,len:Z,squaredLength:H,sqrLen:J,normalize:K,exactEquals:N,equals:Q,rotationTo:S,sqlerp:tt,setAxes:nt});


/***/ }),

/***/ "EDiM":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js ***!
  \**********************************************************************************/
/*! exports provided: computeAttachmentOriginLines, computeAttachmentOriginPoints, computeAttachmentOriginTriangles, generateDefaultIndexArray, generateIndexArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginLines", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginPoints", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginTriangles", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDefaultIndexArray", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateIndexArray", function() { return a; });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/triangle.js */ "V59N");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const f=new Uint16Array([0]),c=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function l(t){if(1===t)return f;if(t<c.length)return new Uint16Array(c.buffer,0,t);if(t>s.length){const n=Math.max(2*s.length,t);s=new Uint32Array(n);for(let t=0;t<s.length;t++)s[t]=t}return new Uint32Array(s.buffer,0,t)}function a(t){if(1===t)return new Uint16Array(f);if(t<c.length)return new Uint16Array(c.slice(0,t));if(t>s.length){const n=new Uint32Array(t);for(let t=0;t<n.length;t++)n[t]=t;return n}return new Uint32Array(s.slice(0,t))}function u(e,o,s){if(!e)return!1;const{size:f,data:c}=e;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(s,0,0,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(U,0,0,0);let l=0,a=0;for(let u=0;u<o.length-2;u+=3){const e=o[u+0]*f,h=o[u+1]*f,g=o[u+2]*f;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(y,c[e+0],c[e+1],c[e+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(w,c[h+0],c[h+1],c[h+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(A,c[g+0],c[g+1],c[g+2]);const m=Object(_geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__["areaPoints3d"])(y,w,A);m?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(y,y,w),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(y,y,A),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(y,y,1/3*m),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(s,s,y),l+=m):(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(U,U,y),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(U,U,w),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(U,U,A),a+=3)}return(0!==a||0!==l)&&(0!==l?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(s,s,1/l),!0):0!==a&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(s,U,1/a),!0))}function h(n,e,o){if(!n||!e)return!1;const{size:i,data:s}=n;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(o,0,0,0);let f=-1,c=0;for(let t=0;t<e.length;t++){const n=e[t]*i;f!==n&&(o[0]+=s[n+0],o[1]+=s[n+1],o[2]+=s[n+2],c++),f=n}return c>1&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(o,o,1/c),c>0}function g(o,i,s,f){if(!o)return!1;const{size:c,data:l}=o;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(f,0,0,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(U,0,0,0);let a=0,u=0;const h=i?i.length-1:l.length/c-1,g=h+(s?2:0);for(let t=0;t<g;t+=2){const o=t<h?t:h,s=t<h?t+1:0,g=(i?i[o]:o)*c,A=(i?i[s]:s)*c;y[0]=l[g+0],y[1]=l[g+1],y[2]=l[g+2],w[0]=l[A+0],w[1]=l[A+1],w[2]=l[A+2],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(y,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(y,y,w),.5);const m=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["j"])(y,w);m>0?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(f,f,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(y,y,m)),a+=m):(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(U,U,y),u++)}return 0!==a?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(f,f,1/a),!0):0!==u&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(f,U,1/u),!0)}const y=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),w=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),A=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),U=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();


/***/ }),

/***/ "EVMh":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js ***!
  \*********************************************************************/
/*! exports provided: AssertException, assert, createTranslationMatrix, dec2hex, encodeInt16, encodeNormal, fallbackIfUndefined, fovd2fovx, fovd2fovy, fovx2fovd, fovx2fovy, fovy2fovd, fovy2fovx, getFirstObjectKey, getMatrixTranslation, hex2rgb, inverseProjectionInfo, isTranslationMatrix, logWithBase, objectEmpty, project, rayBoxTest, rayRay2D, rayTriangle3D, rgb2hex, setMatrixTranslation, setMatrixTranslation3, verify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertException", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationMatrix", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dec2hex", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeInt16", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeNormal", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackIfUndefined", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovd2fovx", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovd2fovy", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovx2fovd", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovx2fovy", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovy2fovd", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovy2fovx", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstObjectKey", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatrixTranslation", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2rgb", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverseProjectionInfo", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTranslationMatrix", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logWithBase", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectEmpty", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayBoxTest", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayRay2D", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayTriangle3D", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hex", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixTranslation", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixTranslation3", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return f; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec4.js */ "dXfX");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__["c"])();class e{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function i(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e(n)}}function f(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function h(n){return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(32767*n),-32767,32767)}function M(t,n){const r=Math.abs(t[0]),o=Math.abs(t[1]),a=1/(r+o+Math.abs(t[2])),u=r*a,c=o*a,s=Math.min(t[2]*a,0);n[0]=(t[0]<0?-1:1)*(u-s),n[1]=(t[1]<0?-1:1)*(c-s)}function m(t,n){return void 0===t?n:t}function l(t){return[((t=Math.floor(t))>>16&255)/255,(t>>8&255)/255,(255&t)/255]}function g(n){return"0x"+((Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255*n[0]),0,255)<<16)+(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255*n[1]),0,255)<<8)+Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255*n[2]),0,255)).toString(16)}function k(t){const n=t.toString(16);return"00000000".substr(0,8-n.length)+n}function p(t,n,r,o,u,c,s,e,i=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])()){const f=1e-5,h=o[s]-r[c],M=o[s+1]-r[c+1],m=o[s+2]-r[c+2],l=u[e]-r[c],g=u[e+1]-r[c+1],k=u[e+2]-r[c+2],p=n[1]*k-g*n[2],j=n[2]*l-k*n[0],v=n[0]*g-l*n[1],d=h*p+M*j+m*v;if(d>-f&&d<f)return!1;const w=1/d,b=t[0]-r[c],q=t[1]-r[c+1],x=t[2]-r[c+2];if(i[1]=w*(b*p+q*j+x*v),i[1]<0||i[1]>1)return!1;const E=q*m-M*x,S=x*h-m*b,y=b*M-h*q;return i[2]=w*(n[0]*E+n[1]*S+n[2]*y),!(i[2]<0||i[1]+i[2]>1)&&(i[0]=w*(l*E+g*S+k*y),!0)}function j(t,n,r,o){let a,u=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];u>c&&(a=u,u=c,c=a);let s=(r[1]-t[1])/n[1],e=(o[1]-t[1])/n[1];if(s>e&&(a=s,s=e,e=a),u>e||s>c)return!1;s>u&&(u=s),e<c&&(c=e);let i=(r[2]-t[2])/n[2],f=(o[2]-t[2])/n[2];return i>f&&(a=i,i=f,f=a),!(u>f||i>c)&&(f<c&&(c=f),!(c<0))}function v(t,n,r,a,u,c=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])()){const s=(a[u]-r[u])*(n[0]-t[0])-(a[0]-r[0])*(n[u]-t[u]),e=(a[0]-r[0])*(t[u]-r[u])-(a[u]-r[u])*(t[0]-r[0]);if(0===s)return!1;const i=e/s;return c[0]=t[0]+i*(n[0]-t[0]),c[1]=t[u]+i*(n[u]-t[u]),!0}function d(t,n,r,o,a){a||(a=t),s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=1,Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_5__["t"])(s,s,n),a.length>2&&(a[2]=-s[2]),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_5__["t"])(s,s,r),i(0!==s[3]),a[0]=s[0]/s[3],a[1]=s[1]/s[3],a[2]=s[2]/s[3],a[0]=(.5*a[0]+.5)*o[2]+o[0],a[1]=(.5*a[1]+.5)*o[3]+o[1]}function w(t){for(const n in t)return n}function b(t){for(const n in t)return!1;return!0}function q(t,n){return Math.log(t)/Math.log(n)}function x(t,n){t[12]=n[0],t[13]=n[1],t[14]=n[2]}function E(t,n,r,o){t[12]=n,t[13]=r,t[14]=o}function S(t,n=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])()){return n[0]=t[12],n[1]=t[13],n[2]=t[14],n}function y(t,r){return x(t=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["i"])(t),r),t}function A(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function U(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/n)}function V(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/r)}function $(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function z(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function B(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function C(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function D(t,n,o,a,u){const c=t;0===t[11]?(a[0]=2/(n*c[0]),a[1]=2/(o*c[5]),a[2]=(1+c[12])/c[0],a[3]=(1+c[13])/c[5],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__["s"])(u,0,1)):(a[0]=-2/(n*c[0]),a[1]=-2/(o*c[5]),a[2]=(1-c[8])/c[0],a[3]=(1-c[9])/c[5],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__["s"])(u,1,0))}


/***/ }),

/***/ "F7CJ":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js ***!
  \**************************************************************************************************************/
/*! exports provided: VerticalOffset, bindVerticalOffsetUniforms, calculateVerticalOffsetFactors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalOffset", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVerticalOffsetUniforms", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateVerticalOffsetFactors", function() { return c; });
/* harmony import */ var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ScreenSizePerspective.glsl.js */ "L5gG");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,l){const c=t.vertex.code;l.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(t.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_0__["ScreenSizePerspective"]),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 worldNormal = normalize(worldPos + localOrigin);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function l(e,r,t){if(!r.verticalOffset)return;const l=c(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",l.screenLength*i,l.perDistance,l.minWorldLength,l.maxWorldLength)}function c(e,r,t,l=i){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}const i={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};


/***/ }),

/***/ "GJyJ":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/renderState.js ***!
  \**************************************************************/
/*! exports provided: StateTracker, backFaceCullingParams, cullingParams, defaultColorWriteParams, defaultDepthWriteParams, frontFaceCullingParams, makeBlending, makeColorWrite, makeCulling, makeDepthTest, makeDepthWrite, makePipelineState, makePolygonOffset, makeStencilTest, makeStencilWrite, separateBlendingParams, simpleBlendingParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTracker", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backFaceCullingParams", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cullingParams", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColorWriteParams", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDepthWriteParams", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontFaceCullingParams", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeBlending", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeColorWrite", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCulling", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDepthTest", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDepthWrite", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePipelineState", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePolygonOffset", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStencilTest", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStencilWrite", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateBlendingParams", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleBlendingParams", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e,i=32774,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function e(t,e,i,n,s=32774,l=32774,r=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:s,opAlpha:l,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}const i={face:1029,mode:2305},n={face:1028,mode:2305},s=t=>2===t?i:1===t?n:null,l={zNear:0,zFar:1},r={r:!0,g:!0,b:!0,a:!0};function h(t){return I.intern(t)}function o(t){return S.intern(t)}function a(t){return T.intern(t)}function c(t){return O.intern(t)}function d(t){return w.intern(t)}function p(t){return D.intern(t)}function u(t){return A.intern(t)}function _(t){return k.intern(t)}function g(t){return B.intern(t)}class f{constructor(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map}intern(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)}}function v(t){return"["+t.join(",")+"]"}const I=new f(W,(t=>({__tag:"Blending",...t})));function W(t){return t?v([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const S=new f(b,(t=>({__tag:"Culling",...t})));function b(t){return t?v([t.face,t.mode]):null}const T=new f(y,(t=>({__tag:"PolygonOffset",...t})));function y(t){return t?v([t.factor,t.units]):null}const O=new f(R,(t=>({__tag:"DepthTest",...t})));function R(t){return t?v([t.func]):null}const w=new f(C,(t=>({__tag:"StencilTest",...t})));function C(t){return t?v([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const D=new f(m,(t=>({__tag:"DepthWrite",...t})));function m(t){return t?v([t.zNear,t.zFar]):null}const A=new f(P,(t=>({__tag:"ColorWrite",...t})));function P(t){return t?v([t.r,t.g,t.b,t.a]):null}const k=new f(z,(t=>({__tag:"StencilWrite",...t})));function z(t){return t?v([t.mask]):null}const B=new f(F,(t=>({blending:h(t.blending),culling:o(t.culling),polygonOffset:a(t.polygonOffset),depthTest:c(t.depthTest),stencilTest:d(t.stencilTest),depthWrite:p(t.depthWrite),colorWrite:u(t.colorWrite),stencilWrite:_(t.stencilWrite)})));function F(t){return t?v([W(t.blending),b(t.culling),y(t.polygonOffset),R(t.depthTest),C(t.stencilTest),m(t.depthWrite),P(t.colorWrite),z(t.stencilWrite)]):null}class K{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this.setBlending(t.blending),this.setCulling(t.culling),this.setPolygonOffset(t.polygonOffset),this.setDepthTest(t.depthTest),this.setStencilTest(t.stencilTest),this.setDepthWrite(t.depthWrite),this.setColorWrite(t.colorWrite),this.setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(t){this._blending=this.setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(t){this._culling=this.setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(t){this._polygonOffset=this.setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(t){this._depthTest=this.setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(t){this._stencilTest=this.setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(t){this._depthWrite=this.setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(t){this._colorWrite=this.setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(t){this._stencilWrite=this.setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ }),

/***/ "GVa1":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/checkWebGLError.js ***!
  \******************************************************************/
/*! exports provided: checkWebGLError, hasFeatureFlagWebGLDebug, webglDebugEnabled, webglValidateShadersEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWebGLError", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasFeatureFlagWebGLDebug", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webglDebugEnabled", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webglValidateShadersEnabled", function() { return c; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri/views/webgl");function o(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const a=!!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("enable-feature:webgl-debug");function u(){return a}function c(){return a}function s(r){if(u()){const t=r.getError();if(t){const a=o(r,t),u=(new Error).stack;n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-error","WebGL error occured",{message:a,stack:u}))}}}


/***/ }),

/***/ "Hizz":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js ***!
  \************************************************************************/
/*! exports provided: Texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return b; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "LbAs");
/* harmony import */ var _support_requestUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../support/requestUtils.js */ "Ioo4");
/* harmony import */ var _BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BasisUtil.js */ "wV01");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContentObject.js */ "AD+e");
/* harmony import */ var _DDSUtil_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DDSUtil.js */ "ekr9");
/* harmony import */ var _glUtil3D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glUtil3D.js */ "1ff1");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webgl/Util.js */ "hTmG");
/* harmony import */ var _webgl_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../webgl/capabilities/isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class b extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_11__["ContentObject"]{constructor(t,e){super(),this.data=t,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"],this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=b.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const t=this.data;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t)||(t instanceof HTMLVideoElement?this.startPreloadVideoElement(t):t instanceof HTMLImageElement&&this.startPreloadImageElement(t))}startPreloadVideoElement(t){Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["isBlobProtocol"])(t.src)||"auto"===t.preload&&t.crossOrigin||(t.preload="auto",t.crossOrigin="anonymous",t.src=t.src)}startPreloadImageElement(t){Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["isDataProtocol"])(t.src)||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["isBlobProtocol"])(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}static getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static estimateTexMemRequired(t,e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(t))return 0;if(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(t)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(t))return e.encoding===b.KTX2_ENCODING?Object(_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__["estimateMemoryKTX2"])(t,e.mipmap):e.encoding===b.BASIS_ENCODING?Object(_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__["estimateMemoryBasis"])(t,e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?b.getDataDimensions(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(t){var e;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(e=this.params.maxAnisotropy)?e:this.params.mipmap?t.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(t,e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._glTexture))return this._glTexture;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._loadingPromise))return this._loadingPromise;const r=this.data;return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(r)?(this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__["default"](t,this.createDescriptor(t),null),this._glTexture):"string"==typeof r?this.loadFromURL(t,e,r):r instanceof Image?this.loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(t,r,e):(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(r)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(r))&&this.params.encoding===b.DDS_ENCODING?this.loadFromDDSData(t,r):(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(r)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(r))&&this.params.encoding===b.KTX2_ENCODING?this.loadFromKTX2(t,r):(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(r)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(r))&&this.params.encoding===b.BASIS_ENCODING?this.loadFromBasis(t,r):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isUint8Array"])(r)?this.loadFromPixelData(t,r):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_6__["isArrayBuffer"])(r)?this.loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this.data instanceof HTMLVideoElement)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isNone"])(this._glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this.data),this.drawStretchedTexture(t,e,r,i,s,this._glTexture)}else{const{width:t,height:e}=this.data,{width:r,height:i}=this._glTexture.descriptor;t!==r||e!==i?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(t,e){return this._glTexture=Object(_DDSUtil_js__WEBPACK_IMPORTED_MODULE_12__["createDDSTexture"])(t,this.createDescriptor(t),e),this._glTexture}loadFromKTX2(t,e){return this.loadAsync((()=>Object(_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__["createTextureKTX2"])(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromBasis(t,e){return this.loadAsync((()=>Object(_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__["createTextureBasis"])(t,this.createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}loadFromPixelData(t,e){Object(_Util_js__WEBPACK_IMPORTED_MODULE_14__["assert"])(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(t);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__["default"](t,r,e),this._glTexture}loadFromURL(t,e,r){return this.loadAsync((async i=>{const s=await Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_8__["requestImage"])(r,{signal:i});return this.loadFromImage(t,s,e)}))}loadFromImageElement(t,e,r){return r.complete?this.loadFromImage(t,r,e):this.loadAsync((async i=>{const s=await Object(_support_requestUtils_js__WEBPACK_IMPORTED_MODULE_9__["loadImageAsync"])(r,r.src,!1,i);return this.loadFromImage(t,s,e)}))}loadFromVideoElement(t,e,r){return r.readyState>=2?this.loadFromImage(t,r,e):this.loadFromVideoElementAsync(t,e,r)}loadFromVideoElementAsync(t,r,i){return this.loadAsync((s=>new Promise(((a,o)=>{const l=()=>{i.removeEventListener("loadeddata",p),i.removeEventListener("error",d),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["removeMaybe"])(c)},p=()=>{i.readyState>=2&&(l(),a(this.loadFromImage(t,i,r)))},d=t=>{l(),o(t||new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Failed to load video"))};i.addEventListener("loadeddata",p),i.addEventListener("error",d);const c=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["onAbort"])(s,(()=>d(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createAbortError"])())))}))))}loadFromImage(t,e,r){const s=b.getDataDimensions(e);this.params.width=s.width,this.params.height=s.height;const a=this.createDescriptor(t);return a.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(t,a)||Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(s.width)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(s.height)?(a.width=s.width,a.height=s.height,this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__["default"](t,a,e),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(t,e,s,a,r),this._glTexture)}loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const i=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}requiresPowerOfTwo(t,e){const r=33071,i="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return!Object(_webgl_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_18__["default"])(t.gl)&&(e.hasMipmap||!i)}makePowerOfTwoTexture(e,r,i,a,o){const{width:n,height:h}=i,m=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["nextHighestPowerOfTwo"])(n),l=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["nextHighestPowerOfTwo"])(h);let p;switch(a.width=m,a.height=l,this.params.powerOfTwoResizeMode){case 2:a.textureCoordinateScaleFactor=[n/m,h/l],p=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__["default"](e,a),p.updateData(0,0,0,n,h,r);break;case 1:case null:case void 0:p=this.stretchToPowerOfTwo(e,r,a,o());break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&p.generateMipmap(),p}stretchToPowerOfTwo(t,e,r,i){const s=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__["default"](t,r),a=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"](t,{colorTarget:0,depthStencilTarget:0},s),o=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_16__["default"](t,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=Object(_glUtil3D_js__WEBPACK_IMPORTED_MODULE_13__["createQuadVAO"])(t),h=t.getBoundFramebufferObject();return this.drawStretchedTexture(t,i,a,n,o,s),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(h),s}drawStretchedTexture(t,e,r,i,s,a){t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=e.program;t.useProgram(n),n.setUniform4f("color",1,1,1,1),n.bindTexture(s,"tex"),t.bindVAO(i),e.bindPipelineState(t),t.drawArrays(5,0,Object(_webgl_Util_js__WEBPACK_IMPORTED_MODULE_17__["vertexCount"])(i,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height)}unload(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}}b.DDS_ENCODING="image/vnd-ms.dds",b.KTX2_ENCODING="image/ktx2",b.BASIS_ENCODING="image/x.basis";


/***/ }),

/***/ "J1lp":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: AnalyticalSkyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticalSkyModel", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){const a=t.fragment.code;a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}


/***/ }),

/***/ "L5gG":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: ScreenSizePerspective, bindScreenSizePerspectiveUniforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSizePerspective", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindScreenSizePerspectiveUniforms", function() { return c; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../materials/internal/MaterialUtil.js */ "fFEv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(a){a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function c(e,r){if(r.screenSizePerspective){Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__["bindScreenSizePerspective"])(r.screenSizePerspective,e,"screenSizePerspective");const c=r.screenSizePerspectiveAlignment||r.screenSizePerspective;Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__["bindScreenSizePerspective"])(c,e,"screenSizePerspectiveAlignment")}}


/***/ }),

/***/ "LbAs":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestImageUtils.js ***!
  \****************************************************************/
/*! exports provided: requestImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestImage", function() { return t; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",...r});return a}


/***/ }),

/***/ "NbNv":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js ***!
  \*************************************************************************/
/*! exports provided: Material, materialParametersDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialParametersDefaults", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentObject.js */ "AD+e");
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../materials/internal/MaterialUtil.js */ "fFEv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_1__["ContentObject"]{constructor(e,r){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_2__["Default3D"],this._parameters=Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__["copyParameters"])(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__["updateParameters"])(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.repository)&&this.repository.materialChanged(this)}}const n={renderOccluded:1};


/***/ }),

/***/ "OIYi":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js ***!
  \******************************************************************************************/
/*! exports provided: glsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glsl", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o}(t||(t={}));


/***/ }),

/***/ "Q3fD":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js ***!
  \*********************************************************************************************************/
/*! exports provided: ColorConversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorConversion", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}


/***/ }),

/***/ "R/jG":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec3f32.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function r(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t(n,r,t){const e=new Float32Array(3);return e[0]=n,e[1]=r,e[2]=t,e}function e(n,r){return new Float32Array(n,r,3)}function a(){return n()}function o(){return t(1,1,1)}function u(){return t(1,0,0)}function s(){return t(0,1,0)}function c(){return t(0,0,1)}const i=a(),f=o(),l=u(),_=s(),w=c(),y=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:e,zeros:a,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:w});


/***/ }),

/***/ "Tbkp":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js ***!
  \**********************************************************************************************/
/*! exports provided: Transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,o){o.linearDepth?r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}


/***/ }),

/***/ "UBvB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: RgbaFloatEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RgbaFloatEncoding", function() { return a; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a){a.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}


/***/ }),

/***/ "V59N":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/triangle.js ***!
  \****************************************************************/
/*! exports provided: area2d, areaPoints2d, areaPoints3d, copy, create, distance2, fromValues, intersectRay, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "area2d", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaPoints2d", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaPoints3d", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance2", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRay", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return h; });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _lineSegment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lineSegment.js */ "vX5d");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j(t){return t?{p0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.p0),p1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.p1),p2:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.p2)}:{p0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),p1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),p2:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}function h(t,n,r){const e=x.get();return e.p0=t,e.p1=n,e.p2=r,e}function k(t,n=j()){return v(t.p0,t.p1,t.p2,n)}function v(t,n,e,p=j()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(p.p0,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(p.p1,n),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(p.p2,e),p}function b(t,n){const r=t.p0,s=t.p1,c=t.p2,u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),s,r),i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),c,s),f=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),r,c),a=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),n,r),j=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),n,s),h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),n,c),k=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(u,u,f),v=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),u,k),a),b=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),i,k),j),d=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),f,k),h);if(v>0&&b>0&&d>0){const t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(k,a);return t*t/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(k,k)}const S=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["distance2"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["fromValues"])(r,u,q.get()),n),w=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["distance2"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["fromValues"])(s,i,q.get()),n),M=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["distance2"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["fromValues"])(c,f,q.get()),n);return Math.min(S,w,M)}function d(t,n,r){const e=1e-5,{direction:p,origin:o}=n,{p0:u,p1:i,p2:f}=t,a=i[0]-u[0],g=i[1]-u[1],m=i[2]-u[2],l=f[0]-u[0],j=f[1]-u[1],h=f[2]-u[2],k=p[1]*h-j*p[2],v=p[2]*l-h*p[0],b=p[0]*j-l*p[1],d=a*k+g*v+m*b;if(d>-e&&d<e)return!1;const S=1/d,w=o[0]-u[0],M=o[1]-u[1],q=o[2]-u[2],x=S*(w*k+M*v+q*b);if(x<0||x>1)return!1;const O=M*m-g*q,V=q*a-m*w,y=w*g-a*M,z=S*(p[0]*O+p[1]*V+p[2]*y);if(z<0||x+z>1)return!1;if(r){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(r,p,S*(l*O+j*V+h*y)),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r,o,r)}return!0}function S(t,r,e){const p=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__["b"])(t,r),o=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__["b"])(r,e),s=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__["b"])(e,t),c=(p+o+s)/2,u=c*(c-p)*(c-o)*(c-s);return u<=0?0:Math.sqrt(u)}function w(t){return S(t.p0,t.p1,t.p2)}function M(t,n,r){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(O,n,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(V,r,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(O,O,V))/2}const q=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__["ObjectStack"](_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__["create"]),x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__["ObjectStack"]((()=>({p0:null,p1:null,p2:null}))),O=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),V=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();


/***/ }),

/***/ "WVfK":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js ***!
  \*************************************************************************************************/
/*! exports provided: writeBufferMat3f, writeBufferMat4f, writeBufferVec2, writeBufferVec3, writeBufferVec4, writeColor, writeDefaultAttributes, writeNormal, writePosition, writeTangent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferMat3f", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferMat4f", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec2", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec3", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec4", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeColor", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeDefaultAttributes", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeNormal", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writePosition", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeTangent", function() { return p; });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=2*t[i];r[o]=e[f],r[o+1]=e[f+1],o+=s}}function i(t,e,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n}else for(let c=0;c<i;++c){const f=3*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],o+=n}}function c(t,e,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=t.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*t[c];s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n}else for(let c=0;c<i;++c){const f=4*t[c];for(let t=0;t<r;++t)s[o]=e[f],s[o+1]=e[f+1],s[o+2]=e[f+2],s[o+3]=e[f+3],o+=n}}function l(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=9*t[i];for(let t=0;t<9;++t)r[o+t]=e[f+t];o+=s}}function d(t,e,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=t.length;o*=s;for(let i=0;i<n;++i){const f=16*t[i];for(let t=0;t<16;++t)r[o+t]=e[f+t];o+=s}}function u(t,e,f,o,r,s=1){if(!f)return void i(t,e,o,r,s);const n=o.typedBuffer,c=o.typedBufferStride,l=t.length,d=f[0],u=f[1],a=f[2],p=f[4],y=f[5],g=f[6],B=f[8],h=f[9],m=f[10],b=f[12],z=f[13],S=f[14];if(r*=c,1===s)for(let i=0;i<l;++i){const f=3*t[i],o=e[f],s=e[f+1],l=e[f+2];n[r]=d*o+p*s+B*l+b,n[r+1]=u*o+y*s+h*l+z,n[r+2]=a*o+g*s+m*l+S,r+=c}else for(let i=0;i<l;++i){const f=3*t[i],o=e[f],l=e[f+1],k=e[f+2],F=d*o+p*l+B*k+b,v=u*o+y*l+h*k+z,q=a*o+g*l+m*k+S;for(let t=0;t<s;++t)n[r]=F,n[r+1]=v,n[r+2]=q,r+=c}}function a(e,f,o,r,s,n=1){if(!o)return void i(e,f,r,s,n);const c=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=c[0],p=c[1],y=c[2],g=c[4],B=c[5],h=c[6],m=c[8],b=c[9],z=c[10],S=!Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["k"])(c),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=3*e[t],r=f[o],n=f[o+1],i=f[o+2];let c=a*r+g*n+m*i,u=p*r+B*n+b*i,v=y*r+h*n+z*i;if(S){const t=c*c+u*u+v*v;if(t<F&&t>k){const e=1/Math.sqrt(t);c*=e,u*=e,v*=e}}l[s+0]=c,l[s+1]=u,l[s+2]=v,s+=d}else for(let t=0;t<u;++t){const o=3*e[t],r=f[o],i=f[o+1],c=f[o+2];let u=a*r+g*i+m*c,v=p*r+B*i+b*c,q=y*r+h*i+z*c;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e}}for(let t=0;t<n;++t)l[s+0]=u,l[s+1]=v,l[s+2]=q,s+=d}}function p(e,f,o,r,s,n=1){if(!o)return void c(e,f,r,s,n);const i=o,l=r.typedBuffer,d=r.typedBufferStride,u=e.length,a=i[0],p=i[1],y=i[2],g=i[4],B=i[5],h=i[6],m=i[8],b=i[9],z=i[10],S=!Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["k"])(i),k=1e-6,F=1-k;if(s*=d,1===n)for(let t=0;t<u;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],c=f[o+3];let u=a*r+g*n+m*i,v=p*r+B*n+b*i,q=y*r+h*n+z*i;if(S){const t=u*u+v*v+q*q;if(t<F&&t>k){const e=1/Math.sqrt(t);u*=e,v*=e,q*=e}}l[s+0]=u,l[s+1]=v,l[s+2]=q,l[s+3]=c,s+=d}else for(let t=0;t<u;++t){const o=4*e[t],r=f[o],i=f[o+1],c=f[o+2],u=f[o+3];let v=a*r+g*i+m*c,q=p*r+B*i+b*c,M=y*r+h*i+z*c;if(S){const t=v*v+q*q+M*M;if(t<F&&t>k){const e=1/Math.sqrt(t);v*=e,q*=e,M*=e}}for(let t=0;t<n;++t)l[s+0]=v,l[s+1]=q,l[s+2]=M,l[s+3]=u,s+=d}}function y(t,e,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=t.length;if(r*=i,1===s){if(4===f)for(let l=0;l<c;++l){const f=4*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i}}else if(4===f)for(let l=0;l<c;++l){const f=4*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=e[f+3],r+=i}else if(3===f)for(let l=0;l<c;++l){const f=3*t[l];for(let t=0;t<s;++t)n[r]=e[f],n[r+1]=e[f+1],n[r+2]=e[f+2],n[r+3]=255,r+=i}}function g(t,i,c,l,d,g){for(const B of i.fieldNames){const i=t.vertexAttributes.get(B),h=t.indices.get(B);if(i&&h)switch(B){case"position":{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(3===i.size);const t=d.getField(B,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec3f"]);t&&u(h,i.data,c,t,g);break}case"normal":{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(3===i.size);const t=d.getField(B,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec3f"]);t&&a(h,i.data,l,t,g);break}case"uv0":{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(2===i.size);const t=d.getField(B,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec2f"]);t&&n(h,i.data,t,g);break}case"color":{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(3===i.size||4===i.size);const t=d.getField(B,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec4u8"]);t&&y(h,i.data,i.size,t,g);break}case"symbolColor":{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(3===i.size||4===i.size);const t=d.getField(B,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec4u8"]);t&&y(h,i.data,i.size,t,g);break}case"tangent":{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(4===i.size);const t=d.getField(B,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewVec4f"]);t&&p(h,i.data,l,t,g);break}}}}


/***/ }),

/***/ "XV/G":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: PhysicallyBasedRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicallyBasedRendering", function() { return a; });
/* harmony import */ var _AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticalSkyModel.glsl.js */ "J1lp");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "xRv2");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a,n){const r=a.fragment.code;a.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PiUtils"]),3===n.pbrMode||4===n.pbrMode?(r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${n.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==n.pbrMode&&2!==n.pbrMode||(a.include(_AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_0__["AnalyticalSkyModel"]),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__["glsl"]`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}


/***/ }),

/***/ "aK8v":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialTexture.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _GLMaterial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GLMaterial.js */ "1/dN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _GLMaterial_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId).then((e=>this._texture=e)),this._acquire(e.normalTextureId).then((e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId).then((e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId).then((e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId).then((e=>this._textureMetallicRoughness=e))}dispose(){this._texture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._texture),this._textureNormal=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._textureNormal),this._textureEmissive=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._textureEmissive),this._textureOcclusion=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._textureOcclusion),this._textureMetallicRoughness=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?2:1}updateTexture(i){(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._texture)||i!==this._texture.id)&&(this._texture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(this._texture),this._textureId=i,this._acquire(this._textureId).then((e=>this._texture=e)))}bindTextures(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._texture)?this._texture.glTexture:null;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(i){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(i)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(i).then((t=>this._disposed?(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["releaseMaybe"])(t),null):t)).finally((()=>--this._numLoading)))}}


/***/ }),

/***/ "aQrP":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js ***!
  \*********************************************************************************************/
/*! exports provided: Code, Includes, ShaderBuilder, Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Includes", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderBuilder", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return o; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class r{constructor(){this.includedModules=new Map}include(e,r){this.includedModules.has(e)?this.includedModules.get(e)!==r&&t.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,r),e(this.builder,r))}}class n extends r{constructor(){super(...arguments),this.vertex=new o,this.fragment=new o,this.attributes=new a,this.varyings=new c,this.extensions=new u,this.constants=new h}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?l:m,c=this.constants.generateSource().concat(s.constants.generateSource());return`\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}}class s{constructor(){this._entries=new Map}add(e,t,r){const n=`${e}_${t}_${r}`;return this._entries.set(n,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class i{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class o extends r{constructor(){super(...arguments),this.uniforms=new s,this.code=new i,this.constants=new h}get builder(){return this}}class a{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h.numberToFloatStr(r);break;case"int":n=h.numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h.numberToFloatStr(r[0])},                            ${h.numberToFloatStr(r[1])},                            ${h.numberToFloatStr(r[2])},                            ${h.numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h.numberToIntStr(r[0])},                             ${h.numberToIntStr(r[1])},                             ${h.numberToIntStr(r[2])},                             ${h.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${n};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",l="precision highp float;\nprecision highp sampler2D;";


/***/ }),

/***/ "agdK":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: OutputHighlight, bindOutputHighlight, occludedHighlightFlag, unoccludedHighlightFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputHighlight", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindOutputHighlight", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "occludedHighlightFlag", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unoccludedHighlightFlag", function() { return o; });
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(1,1,0,1),o=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(1,0,1,1);function r(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",t).add("unoccludedHighlightFlag","vec4",o),e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function g(e,i){e.bindTexture(i.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1])}


/***/ }),

/***/ "bVvB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: VertexColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexColor", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){e.attributeColor?(r.attributes.add("color","vec4"),r.varyings.add("vColor","vec4"),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardVertexColor() { vColor = color; }`),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}


/***/ }),

/***/ "dDjh":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js ***!
  \*********************************************************************************************/
/*! exports provided: OITBlending, OITDepthTest, OITDepthWrite, OITPolygonOffset, OITPolygonOffsetLimit, blendingAlpha, blendingColor, blendingDefault, getOITPolygonOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITBlending", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITDepthTest", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITDepthWrite", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITPolygonOffset", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITPolygonOffsetLimit", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingAlpha", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingColor", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingDefault", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOITPolygonOffset", function() { return s; });
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["separateBlendingParams"])(770,1,771,771),e=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["simpleBlendingParams"])(1,1),o=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["simpleBlendingParams"])(0,771);function c(n){return 2===n?null:1===n?o:e}function l(n){return 2===n?_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["defaultDepthWriteParams"]:null}const f=5e5,i={factor:-1,units:-2};function s(n){return n?i:null}function a(n){return 3===n||2===n?513:515}


/***/ }),

/***/ "ekr9":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js ***!
  \************************************************************************/
/*! exports provided: createDDSTexture, createDDSTextureData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDDSTexture", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDDSTextureData", function() { return A; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),o=542327876,a=131072,i=4;function s(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function l(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const u=s("DXT1"),c=s("DXT3"),m=s("DXT5"),h=31,p=0,d=1,g=2,f=3,w=4,C=7,x=20,D=21;function b(e,t,n){const{textureData:o,internalFormat:a,width:i,height:s}=A(n,t.hasMipmap);return t.samplingMode=o.levels.length>1?9987:9729,t.hasMipmap=o.levels.length>1,t.internalFormat=a,t.width=i,t.height=s,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e,t,o)}function A(e,r){const s=new Int32Array(e,0,h);if(s[p]!==o)return n.error("Invalid magic number in DDS header"),null;if(!(s[x]&i))return n.error("Unsupported format, must contain a FourCC code"),null;const b=s[D];let A,M;switch(b){case u:A=8,M=33776;break;case c:A=16,M=33778;break;case m:A=16,M=33779;break;default:return n.error("Unsupported FourCC code:",l(b)),null}let v=1,F=s[w],U=s[f];0==(3&F)&&0==(3&U)||(n.warn("Rounding up compressed texture size to nearest multiple of 4."),F=F+3&-4,U=U+3&-4);const T=F,j=U;let k,y;s[g]&a&&!1!==r&&(v=Math.max(1,s[C])),1===v||Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(F)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(U)||(n.warn("Ignoring mipmaps of non power of two sized compressed texture."),v=1);let I=s[d]+4;const S=[];for(let t=0;t<v;++t)y=(F+3>>2)*(U+3>>2)*A,k=new Uint8Array(e,I,y),S.push(k),I+=y,F=Math.max(1,F>>1),U=Math.max(1,U>>1);return{textureData:{type:"compressed",levels:S},internalFormat:M,width:T,height:j}}


/***/ }),

/***/ "fDPZ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js ***!
  \*******************************************************************************************/
/*! exports provided: Pos2, Pos2Tex, Pos3, Pos3Col, Pos3NormalTex, Pos3Tex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos2", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos2Tex", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3Col", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3NormalTex", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3Tex", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=[{name:"position",count:3,type:5126,offset:0,stride:12,normalized:!1}],t=[{name:"position",count:3,type:5126,offset:0,stride:20,normalized:!1},{name:"uv0",count:2,type:5126,offset:12,stride:20,normalized:!1}],o=[{name:"position",count:3,type:5126,offset:0,stride:32,normalized:!1},{name:"normal",count:3,type:5126,offset:12,stride:32,normalized:!1},{name:"uv0",count:2,type:5126,offset:24,stride:32,normalized:!1}],n=[{name:"position",count:3,type:5126,offset:0,stride:16,normalized:!1},{name:"color",count:4,type:5121,offset:12,stride:16,normalized:!1}],i=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],s=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];


/***/ }),

/***/ "fFEv":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js ***!
  \********************************************************************************************/
/*! exports provided: bindScreenSizePerspective, colorMixModes, computeInvDir, computeNormal, copyParameters, intersectAabbInvDir, intersectAabbInvDirBefore, intersectDrapedRenderLineGeometry, intersectTriangleGeometry, intersectTriangles, updateParameters, verticalOffsetAtDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindScreenSizePerspective", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorMixModes", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeInvDir", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeNormal", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyParameters", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectAabbInvDir", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectAabbInvDirBefore", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectDrapedRenderLineGeometry", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectTriangleGeometry", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectTriangles", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateParameters", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalOffsetAtDistance", function() { return V; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/screenSizePerspectiveUtils.js */ "2hxh");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/* harmony import */ var _renderers_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderers/utils.js */ "tiP8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["create"])();function h(t,n,e,i,o,r,s){if(!Object(_renderers_utils_js__WEBPACK_IMPORTED_MODULE_7__["isInstanceHidden"])(n))if(t.boundingInfo){Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(0===t.primitiveType);const n=e.tolerance;g(t.boundingInfo,i,o,n,r,s)}else{const n=t.indices.get("position"),e=t.vertexAttributes.get("position");M(i,o,0,n.length/3,n,e,void 0,r,s)}}const d=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();function g(t,i,o,r,s,c){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))return;const l=j(i,o,d);if(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["setMin"])(p,t.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["setMax"])(p,t.getBBMax()),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)&&s.applyToAabb(p),A(p,i,l,r)){const{primitiveIndices:n,indices:e,position:f}=t,a=n?n.length:e.length/3;if(a>U){const n=t.getChildren();if(void 0!==n){for(let t=0;t<8;++t)void 0!==n[t]&&g(n[t],i,o,r,s,c);return}}M(i,o,0,a,e,f,n,s,c)}}const x=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();function M(t,n,i,o,r,s,c,f,a){if(c)return b(t,n,i,o,r,s,c,f,a);const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i,v=3*i;b<o;++b){let t=u*r[v++],n=l[t++],i=l[t++],o=l[t];t=u*r[v++];let s=l[t++],c=l[t++],y=l[t];t=u*r[v++];let j=l[t++],A=l[t++],L=l[t];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(f)&&([n,i,o]=f.applyToVertex(n,i,o,b),[s,c,y]=f.applyToVertex(s,c,y,b),[j,A,L]=f.applyToVertex(j,A,L,b));const V=s-n,B=c-i,z=y-o,E=j-n,I=A-i,N=L-o,P=g*N-I*M,U=M*E-N*d,S=d*I-E*g,W=V*P+B*U+z*S;if(Math.abs(W)<=Number.EPSILON)continue;const O=m-n,k=p-i,R=h-o,C=O*P+k*U+R*S;if(W>0){if(C<0||C>W)continue}else if(C>0||C<W)continue;const H=k*z-B*R,X=R*V-z*O,Y=O*B-V*k,_=d*H+g*X+M*Y;if(W>0){if(_<0||C+_>W)continue}else if(_>0||C+_<W)continue;const q=(E*H+I*X+N*Y)/W;if(q>=0){a(q,T(V,B,z,E,I,N,x),b,!1)}}}function b(t,n,i,o,r,s,c,f,a){const l=s.data,u=s.stride||s.size,m=t[0],p=t[1],h=t[2],d=n[0]-m,g=n[1]-p,M=n[2]-h;for(let b=i;b<o;++b){const t=c[b];let n=3*t,i=u*r[n++],o=l[i++],s=l[i++],v=l[i];i=u*r[n++];let y=l[i++],j=l[i++],A=l[i];i=u*r[n];let L=l[i++],V=l[i++],B=l[i];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(f)&&([o,s,v]=f.applyToVertex(o,s,v,b),[y,j,A]=f.applyToVertex(y,j,A,b),[L,V,B]=f.applyToVertex(L,V,B,b));const z=y-o,E=j-s,I=A-v,N=L-o,P=V-s,U=B-v,S=g*U-P*M,W=M*N-U*d,O=d*P-N*g,k=z*S+E*W+I*O;if(Math.abs(k)<=Number.EPSILON)continue;const R=m-o,C=p-s,H=h-v,X=R*S+C*W+H*O;if(k>0){if(X<0||X>k)continue}else if(X>0||X<k)continue;const Y=C*I-E*H,_=H*z-I*R,q=R*E-z*C,w=d*Y+g*_+M*q;if(k>0){if(w<0||X+w>k)continue}else if(w>0||X+w<k)continue;const D=(N*Y+P*_+U*q)/k;if(D>=0){a(D,T(z,E,I,N,P,U,x),t,!1)}}}const v=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),y=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();function T(t,n,e,s,c,f,a){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(v,t,n,e),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(y,s,c,f),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(a,v,y),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(a,a),a}function j(t,n,e){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function A(t,n,e,i){return L(t,n,e,i,1/0)}function L(t,n,e,i,o){const r=(t[0]-i-n[0])*e[0],s=(t[3]+i-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-i-n[1])*e[1],l=(t[4]+i-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return!1;if(c=Math.max(c,Math.min(a,l)),c>f)return!1;const u=(t[2]-i-n[2])*e[2],m=(t[5]+i-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<o)}function V(n,e,i,o,r){let s=(i.screenLength||0)*n.pixelRatio;r&&(s=Object(_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__["scale"])(s,o,e,r));const c=s*Math.tan(.5*n.fovY)/(.5*n.fullHeight);return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(c*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function B(t,n,e){if(!t)return;const i=t.parameters,o=t.paddingPixelsOverride;n.setUniform4f(e,i.divisor,i.offset,i.minPixelSize,o)}function z(t,n){const e=n?z(n):{};for(const i in t){let n=t[i];n&&n.forEach&&(n=N(n)),null==n&&i in e||(e[i]=n)}return e}function E(t,n){let e=!1;for(const i in n){const o=n[i];void 0!==o&&(e=!0,Array.isArray(o)?t[i]=o.slice():t[i]=o)}return e}function I(n,e,i,o,r,s){if(!e.options.selectionMode)return;const c=n.vertexAttributes.get("position").data,f=n.vertexAttributes.get("size"),a=f&&f.data[0],l=o[0],u=o[1],m=((a+r)/2+4)*n.screenToWorldRatio;let p=Number.MAX_VALUE,h=0;for(let d=0;d<c.length-5;d+=3){const n=c[d],e=c[d+1],i=l-n,o=u-e,r=c[d+3]-n,s=c[d+4]-e,f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])((r*i+s*o)/(r*r+s*s),0,1),a=r*f-i,m=s*f-o,g=a*a+m*m;g<p&&(p=g,h=d/3)}p<m*m&&s(i.dist,i.normal,h,!1)}function N(t){const n=[];return t.forEach((t=>n.push(t))),n}const P={multiply:1,ignore:2,replace:3,tint:4},U=1e3;


/***/ }),

/***/ "h7dw":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js ***!
  \*****************************************************************************/
/*! exports provided: depthCompareAlways, depthCompareLess, renderWhenBitIsNotSet, replaceBitWhenDepthTestPasses, stencilBaseAllZerosParams, stencilToolMaskBaseParams, stencilToolMaskOccluderParams, stencilToolTransparentOccluderParams, stencilWriteMaskOff, stencilWriteMaskOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthCompareAlways", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthCompareLess", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWhenBitIsNotSet", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceBitWhenDepthTestPasses", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilBaseAllZerosParams", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolMaskBaseParams", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolMaskOccluderParams", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolTransparentOccluderParams", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilWriteMaskOff", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilWriteMaskOn", function() { return f; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={func:513},n={func:519},f={mask:255},i={mask:0},s=a=>({function:{func:517,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7680}}),o=a=>({function:{func:519,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7681}}),c={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},t={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},u={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},e={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}};


/***/ }),

/***/ "ib+T":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js ***!
  \************************************************************************************/
/*! exports provided: I3SVerticalOffsetGlobalViewingMode, IntersectorTransform, Object3DVerticalOffsetGlobalViewingMode, TERRAIN_ID, TerrainVerticalOffsetGlobalViewingMode, getVerticalOffsetI3S, getVerticalOffsetObject3D, getVerticalOffsetTerrain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SVerticalOffsetGlobalViewingMode", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectorTransform", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3DVerticalOffsetGlobalViewingMode", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERRAIN_ID", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainVerticalOffsetGlobalViewingMode", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetI3S", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetObject3D", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetTerrain", function() { return d; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "+JUG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class z{constructor(){this._transform=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),this._transformInverse=new g({value:this._transform},_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["b"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"]),this._transformInverseTranspose=new g(this._transformInverse,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["t"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"]),this._transformTranspose=new g({value:this._transform},_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["t"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"]),this._transformInverseRotation=new g({value:this._transform},_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["n"],_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this._transform,t)}multiplyTransform(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["m"])(this._transform,this._transform,t)}set(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this._transform,t),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this.invalidateLazyTransforms()}}class g{constructor(t,s,i){this.original=t,this.update=s,this.dirty=!0,this.transform=i()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class S{constructor(t=0){this.offset=t,this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])()}applyToVertex(t,s,i){const r=t+this.localOrigin[0],e=s+this.localOrigin[1],o=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0]+this.localOrigin[0],i=t[1]+this.localOrigin[1],r=t[2]+this.localOrigin[2],e=t[3]+this.localOrigin[0],o=t[4]+this.localOrigin[1],n=t[5]+this.localOrigin[2],h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}}class T{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),this.mbs=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_10__["c"])(),this.obb={center:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),halfSize:Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_8__["c"])(),quaternion:null}}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}applyToVertex(t,s,i){const r=t,e=s,o=i+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+e*e+o*o);return this.tmpVertex[0]=t+r*n,this.tmpVertex[1]=s+e*n,this.tmpVertex[2]=i+o*n,this.tmpVertex}applyToAabb(t){const s=t[0],i=t[1],r=t[2]+this.componentLocalOriginLength,e=t[3],o=t[4],n=t[5]+this.componentLocalOriginLength,h=this.offset/Math.sqrt(s*s+i*i+r*r);t[0]+=s*h,t[1]+=i*h,t[2]+=r*h;const a=this.offset/Math.sqrt(e*e+o*o+n*n);return t[3]+=e*a,t[4]+=o*a,t[5]+=n*a,t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.mbs[0]=t[0]+t[0]*i,this.mbs[1]=t[1]+t[1]*i,this.mbs[2]=t[2]+t[2]*i,this.mbs[3]=t[3]+t[3]*this.offset/s,this.mbs}applyToObb(t){const s=t.center,i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.obb.center[0]=s[0]+s[0]*i,this.obb.center[1]=s[1]+s[1]*i,this.obb.center[2]=s[2]+s[2]*i,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__["q"])(this.obb.halfSize,t.halfSize,t.quaternion),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__["b"])(this.obb.halfSize,this.obb.halfSize,t.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__["f"])(this.obb.halfSize,this.obb.halfSize,t.center),Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_5__["c"])(j,t.quaternion),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__["q"])(this.obb.halfSize,this.obb.halfSize,j),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}}class q{constructor(t=0){this.offset=t,this.sphere=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__["c"])()}applyToVertex(t,s,i){const r=this.objectTransform.transform;let e=r[0]*t+r[4]*s+r[8]*i+r[12],o=r[1]*t+r[5]*s+r[9]*i+r[13],n=r[2]*t+r[6]*s+r[10]*i+r[14];const h=this.offset/Math.sqrt(e*e+o*o+n*n);e+=e*h,o+=o*h,n+=n*h;const a=this.objectTransform.inverse;return this.tmpVertex[0]=a[0]*e+a[4]*o+a[8]*n+a[12],this.tmpVertex[1]=a[1]*e+a[5]*o+a[9]*n+a[13],this.tmpVertex[2]=a[2]*e+a[6]*o+a[10]*n+a[14],this.tmpVertex}applyToMinMax(t,s){const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i;const r=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*r,s[1]+=s[1]*r,s[2]+=s[2]*r}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const i=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*i,t[4]+=t[4]*i,t[5]+=t[5]*i,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),i=this.offset/s;return this.sphere[0]=t[0]+t[0]*i,this.sphere[1]=t[1]+t[1]*i,this.sphere[2]=t[2]+t[2]*i,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const x=new q;function _(s){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)?(x.offset=s,x):null}const y=new T;function M(s){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)?(y.offset=s,y):null}const V=new S;function d(s){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)?(V.offset=s,V):null}const O="terrain",j=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__["a"])();


/***/ }),

/***/ "jpeq":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js ***!
  \**********************************************************************************************/
/*! exports provided: bindCameraPosition, bindNearFar, bindProjectionMatrix, bindView, bindViewCustomOrigin, bindViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCameraPosition", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNearFar", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindProjectionMatrix", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindView", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindViewCustomOrigin", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindViewport", function() { return m; });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat4f32.js */ "lwwL");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(i,n,o){i.setUniform3f("camPos",o[3]-n[0],o[7]-n[1],o[11]-n[2])}function r(i,n){i.setUniformMatrix4fv("proj",n)}function t(i,n){i.setUniform2fv("nearFar",n)}function f(n,o,r){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["a"])(c,r,o),n.setUniform3fv("localOrigin",o),n.setUniformMatrix4fv("view",c)}function a(i,n){f(i,n.origin,n.camera.viewMatrix)}function m(i,n){i.setUniform4fv("viewport",n.camera.fullViewport)}const c=Object(_chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();


/***/ }),

/***/ "nMRV":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js ***!
  \***********************************************************************/
/*! exports provided: decodeDoubleArray, encodeDouble, encodeDoubleArray, encodeDoubleArraySplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeDoubleArray", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDouble", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleArray", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleArraySplit", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,o){e[0]=n,e[1]=n-e[0],o[0]=e[0],o[1]=e[1]}function o(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r]}function t(n,o,t){for(let r=0;r<t;++r)o[r]=n[2*r]+n[2*r+1]}function r(n,t,r,c){for(let l=0;l<c;++l)f[0]=n[l],o(f,e,1),t[l]=e[0],r[l]=e[1]}const f=new Float64Array(1),e=new Float32Array(2);


/***/ }),

/***/ "of9L":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Texture.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkWebGLError.js */ "GVa1");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums.js */ "0X3F");
/* harmony import */ var _capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capabilities/isWebGL2Context.js */ "xRQN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=4;class o{constructor(t,e,i=null){this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_3__["ResourceType"].Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},34067===this._descriptor.target?this.setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_3__["ResourceType"].Texture,this))}release(){this.dispose()}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(t=null){for(let e=34069;e<=34074;e++)this.setData(t,e)}setData(t,a=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||s,this._descriptor.height=this._descriptor.height||s);const p=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES),h=this._descriptor;o._validateTexture(this._context,h),r.pixelStorei(r.UNPACK_ALIGNMENT,h.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0);const l=h.pixelFormat;let d=h.internalFormat?h.internalFormat:this._deriveInternalFormat(l,h.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let e=t.width,s=t.height;t instanceof HTMLVideoElement&&(e=t.videoWidth,s=t.videoHeight),h.width&&h.height,r.texImage2D(a,0,d,l,h.dataType,t),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["checkWebGLError"])(r),h.hasMipmap&&this.generateMipmap(),void 0===h.width&&(h.width=e),void 0===h.height&&(h.height=s)}else{null!=h.width&&null!=h.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&d===r.DEPTH_STENCIL&&(d=r.DEPTH24_STENCIL8);let s=h.width,o=h.height;if(n(t)){const e=Math.round(Math.log(Math.max(s,o))/Math.LN2)+1;h.hasMipmap=h.hasMipmap&&e===t.levels.length;for(let i=0;;++i){const e=t.levels[Math.min(i,t.levels.length-1)];if(r.compressedTexImage2D(a,i,d,s,o,0,e),1===s&&1===o||!h.hasMipmap)break;s=Math.max(1,s>>1),o=Math.max(1,o>>1)}}else if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t))r.texImage2D(a,0,d,s,o,0,l,h.dataType,t),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["checkWebGLError"])(r),h.hasMipmap&&this.generateMipmap();else for(let t=0;r.texImage2D(a,t,d,s,o,0,l,h.dataType,null),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["checkWebGLError"])(r),(1!==s||1!==o)&&h.hasMipmap;++t)s=Math.max(1,s>>1),o=Math.max(1,o>>1)}o._applySamplingMode(r,this._descriptor),o._applyWrapMode(r,this._descriptor),o._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["checkWebGLError"])(r),this._context.bindTexture(p,o.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,i,a,r,s,n=3553){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._context.gl,h=this._descriptor,l=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);(e<0||i<0||a>h.width||r>h.height||e+a>h.width||i+r>h.height)&&console.error("An attempt to update out of bounds of the texture!"),p.pixelStorei(p.UNPACK_ALIGNMENT,h.unpackAlignment),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0),s instanceof ImageData||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement||s instanceof HTMLVideoElement?p.texSubImage2D(n,t,e,i,h.pixelFormat,h.dataType,s):p.texSubImage2D(n,t,e,i,a,r,h.pixelFormat,h.dataType,s),this._context.bindTexture(l,o.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,o._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,o.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,o._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(o._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(o._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if("webgl"===this._context.webglVersion)return t;if(5126===e)switch(t){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return t}static _validateTexture(e,i){(i.width<0||i.height<0)&&console.error("Negative dimension parameters are not allowed!");const a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPowerOfTwo"])(i.width)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPowerOfTwo"])(i.height);Object(_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_4__["default"])(e.gl)||a||("number"==typeof i.wrapMode?33071!==i.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===i.wrapMode.s&&33071===i.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,a=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(a=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(a=9728)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,a)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){var i;const a=t.capabilities.textureFilterAnisotropic;if(!a)return;t.gl.texParameterf(e.target,a.TEXTURE_MAX_ANISOTROPY,null!=(i=e.maxAnisotropy)?i:1)}}function n(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)&&"type"in t&&"compressed"===t.type}o.TEXTURE_UNIT_FOR_UPDATES=0;


/***/ }),

/***/ "thYK":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js ***!
  \*****************************************************************************/
/*! exports provided: BoundingInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingInfo", function() { return a; });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a{constructor(i,s,a,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=a,this.position=c,this.center=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(i.length>=1),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(a.length%this._numIndexPerPrimitive==0),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(a.length>=i.length*this._numIndexPerPrimitive),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(3===c.size||4===c.size);const{data:o,size:M}=c,d=i.length;let l=M*a[this._numIndexPerPrimitive*i[0]];b.clear(),b.push(l),this.bbMin=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(o[l],o[l+1],o[l+2]),this.bbMax=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.bbMin);for(let t=0;t<d;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){l=M*a[s+i],b.push(l);let t=o[l];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[l+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[l+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let m=this.radius*this.radius;for(let t=0;t<b.length;++t){l=b.getItemAt(t);const i=o[l]-this.center[0],s=o[l+1]-this.center[1],e=o[l+2]-this.center[2],n=i*i+s*s+e*e;if(n<=m)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,m=this.radius*this.radius;const a=h/r;this.center[0]+=i*a,this.center[1]+=s*a,this.center[2]+=e*a}b.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["h"])(this.bbMin,this.bbMax)>1){const i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["e"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),r=new Array(8);for(let t=0;t<8;++t)r[t]=0;const{data:h,size:b}=this.position;for(let t=0;t<s;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let a=b*this.indices[e],c=h[a],o=h[a+1],M=h[a+2];for(let i=1;i<this._numIndexPerPrimitive;++i){a=b*this.indices[e+i];const t=h[a],s=h[a+1],n=h[a+2];t<c&&(c=t),s<o&&(o=s),n<M&&(M=n)}c<i[0]&&(s|=1),o<i[1]&&(s|=2),M<i[2]&&(s|=4),n[t]=s,++r[s]}let c=0;for(let t=0;t<8;++t)r[t]>0&&++c;if(c<2)return;const o=new Array(8);for(let t=0;t<8;++t)o[t]=r[t]>0?new Uint32Array(r[t]):void 0;for(let t=0;t<8;++t)r[t]=0;for(let t=0;t<s;++t){const i=n[t];o[i][r[i]++]=this.primitiveIndices[t]}this._children=new Array(8);for(let t=0;t<8;++t)void 0!==o[t]&&(this._children[t]=new a(o[t],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){b.prune()}}const b=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({deallocator:null});


/***/ }),

/***/ "tiP8":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js ***!
  \**************************************************************************************/
/*! exports provided: addObject3DStateID, calculateTransformRelativeToOrigin, encodeDoubleVec3, isInstanceHidden, removeObject3DStateID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addObject3DStateID", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTransformRelativeToOrigin", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleVec3", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceHidden", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeObject3DStateID", function() { return f; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/doublePrecisionUtils.js */ "nMRV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(r,n){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)&&(r=[]),r.push(n),r}function f(r,n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r))return null;const o=r.filter((t=>t!==n));return 0===o.length?null:o}function u(t){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)&&!t.visible}function l(t,i,m){const c=t.origin.vec3;Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_3__["setMatrixTranslation3"])(j,-c[0],-c[1],-c[2]),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t.transformation)?Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["m"])(i,j,t.transformation):Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["c"])(i,j),m&&(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["b"])(m,i),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["t"])(m,m))}function p(t,r,n,o,s){b[0]=t.get(r,0),b[1]=t.get(r,1),b[2]=t.get(r,2),Object(_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_4__["encodeDoubleArray"])(b,g,3),n.set(s,0,g[0]),o.set(s,0,g[1]),n.set(s,1,g[2]),o.set(s,1,g[3]),n.set(s,2,g[4]),o.set(s,2,g[5])}const b=new Float64Array(3),g=new Float32Array(6),j=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();


/***/ }),

/***/ "vX5d":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/lineSegment.js ***!
  \*******************************************************************/
/*! exports provided: closestLineSegmentDistance2, closestLineSegmentPoint, closestRayDistance2, copy, create, distance, distance2, fromPoints, fromValues, pointAt, projectPoint, projectPointClamp, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestLineSegmentDistance2", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestLineSegmentPoint", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestRayDistance2", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance2", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPoints", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointAt", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPoint", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPointClamp", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return p; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function v(t){return t?{origin:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.origin),vector:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(t.vector)}:{origin:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),vector:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}function p(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function h(t,r=v()){return m(t.origin,t.vector,r)}function m(t,r,o=v()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o.origin,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o.vector,r),o}function l(t,r,i=v()){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(i.origin,t),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(i.vector,r,t),i}function b(r,n){const c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,r.origin),u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r.vector,c),s=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r.vector,r.vector),a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(u/s,0,1),g=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),r.vector,a),c);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(g,g)}function M(t,r){return Math.sqrt(b(t,r))}function d(t,r,n){return A(t,r,0,1,n)}function j(t,r,n){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(n,t.origin,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(n,t.vector,r))}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,p),m=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(v,h)/Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["p"])(v);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(g,v,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(m,s,a)),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(g,g,r.origin)}function B(t,r){if(q(t,p(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(t.origin,n);if(r>1)return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e=1e-6,u=r.origin,a=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),u,r.vector),g=n.origin,v=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),g,n.vector),p=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),h=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();if(p[0]=u[0]-g[0],p[1]=u[1]-g[1],p[2]=u[2]-g[2],h[0]=v[0]-g[0],h[1]=v[1]-g[1],h[2]=v[2]-g[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return!1;const m=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();if(m[0]=a[0]-u[0],m[1]=a[1]-u[1],m[2]=a[2]-u[2],Math.abs(m[0])<e&&Math.abs(m[1])<e&&Math.abs(m[2])<e)return!1;const l=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],b=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],M=p[0]*m[0]+p[1]*m[1]+p[2]*m[2],d=h[0]*h[0]+h[1]*h[1]+h[2]*h[2],j=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*d-b*b;if(Math.abs(j)<e)return!1;let A=(l*b-M*d)/j,B=(l+b*A)/d;o&&(A=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(A,0,1),B=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(B,0,1));const k=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),S=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();return k[0]=u[0]+A*m[0],k[1]=u[1]+A*m[1],k[2]=u[2]+A*m[2],S[0]=g[0]+B*h[0],S[1]=g[1]+B*h[1],S[2]=g[2]+B*h[2],i.tA=A,i.tB=B,i.pA=k,i.pB=S,i.distance2=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(k,S),!0}const w={tA:0,tB:0,pA:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),pB:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),distance2:0},x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__["ObjectStack"]((()=>({origin:null,vector:null})));


/***/ }),

/***/ "vXUg":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: ForwardLinearDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardLinearDepth", function() { return a; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(a,r){0===r.output&&r.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===r.output||3===r.output?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("cameraNearFar","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`void forwardLinearDepth() {}`)}


/***/ }),

/***/ "viRi":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: VisualVariables, bindVisualVariablesUniforms, bindVisualVariablesUniformsForSymbols, bindVisualVariablesUniformsWithOpacity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualVariables", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVisualVariablesUniforms", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVisualVariablesUniformsForSymbols", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindVisualVariablesUniformsWithOpacity", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),o.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${o.vvInstancingEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 vvColor() { return vec4(1.0); }`)}function o(v,e){e.vvSizeEnabled&&(v.setUniform3fv("vvSizeMinSize",e.vvSizeMinSize),v.setUniform3fv("vvSizeMaxSize",e.vvSizeMaxSize),v.setUniform3fv("vvSizeOffset",e.vvSizeOffset),v.setUniform3fv("vvSizeFactor",e.vvSizeFactor)),e.vvColorEnabled&&(v.setUniform1fv("vvColorValues",e.vvColorValues),v.setUniform4fv("vvColorColors",e.vvColorColors))}function r(v,e){o(v,e),e.vvOpacityEnabled&&(v.setUniform1fv("vvOpacityValues",e.vvOpacityValues),v.setUniform1fv("vvOpacityOpacities",e.vvOpacityOpacities))}function t(v,e){o(v,e),e.vvSizeEnabled&&(v.setUniform3fv("vvSymbolAnchor",e.vvSymbolAnchor),v.setUniformMatrix3fv("vvSymbolRotationMatrix",e.vvSymbolRotationMatrix))}


/***/ }),

/***/ "w6Td":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js ***!
  \********************************************************************************************************/
/*! exports provided: ReloadableShaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadableShaderModule", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,o){this._module=t,this._loadModule=o}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}


/***/ }),

/***/ "wV01":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js ***!
  \**************************************************************************/
/*! exports provided: createTextureBasis, createTextureKTX2, estimateMemoryBasis, estimateMemoryKTX2, loadBasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureBasis", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureKTX2", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateMemoryBasis", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateMemoryKTX2", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBasis", function() { return a; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _libs_basisu_BasisU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/basisu/BasisU.js */ "yqQq");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Util.js */ "hTmG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=null,i=null;async function a(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(i)&&(i=Object(_libs_basisu_BasisU_js__WEBPACK_IMPORTED_MODULE_1__["getBasisTranscoder"])(),s=await i),i}function o(t,n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s))return t.byteLength;const r=new s.BasisFile(new Uint8Array(t)),i=c(r)?l(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),i}function g(t,n){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s))return t.byteLength;const r=new s.KTX2File(new Uint8Array(t)),i=u(r)?l(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),i}function l(e,t,n,s,i){const a=Object(_webgl_Util_js__WEBPACK_IMPORTED_MODULE_3__["getBytesPerElementFormat"])(t?37496:37492),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*o)}function c(e){return e.getNumImages()>=1&&!e.isUASTC()}function u(e){return e.getFaces()>=1&&e.isETC1S()}async function m(t,n,r){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s)&&(s=await a());const i=new s.BasisFile(new Uint8Array(r));if(!c(i))return null;i.startTranscoding();const o=d(t,n,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>i.transcodeImage(n,0,e,t,0,0)));return i.close(),i.delete(),o}async function h(t,n,r){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s)&&(s=await a());const i=new s.KTX2File(new Uint8Array(r));if(!u(i))return null;i.startTranscoding();const o=d(t,n,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>i.transcodeImage(n,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function d(e,t,r,s,i,a,o,g){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,m]=l?s?[1,37496]:[0,37492]:c?s?[3,33779]:[2,33776]:[13,6408],h=t.hasMipmap?r:Math.min(1,r),d=[];for(let n=0;n<h;n++)d.push(new Uint8Array(o(n,u))),g(n,u,d[n]);const p=d.length>1,f=p?9987:9729,w={...t,samplingMode:f,hasMipmap:p,internalFormat:m,width:i,height:a};return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e,w,{type:"compressed",levels:d})}


/***/ }),

/***/ "wtEh":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: OutputDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputDepth", function() { return e; });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,o){e.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__["RgbaFloatEncoding"]),3===o.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===o.output&&e.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}


/***/ }),

/***/ "xRQN":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/isWebGL2Context.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}


/***/ }),

/***/ "xRv2":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js ***!
  \****************************************************************************************************/
/*! exports provided: PiUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiUtils", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`const float PI = 3.141592653589793;`),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}


/***/ }),

/***/ "xqxP":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/types.js ***!
  \********************************************************************/
/*! exports provided: elementTypeSize, isInteger, isSigned, maximumValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementTypeSize", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSigned", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumValue", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function r(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function c(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function u(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}


/***/ }),

/***/ "xtdb":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: bindMultipassTerrainTexture, multipassTerrainTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindMultipassTerrainTexture", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multipassTerrainTest", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,t){r.fragment.uniforms.add("terrainDepthTexture","sampler2D"),r.fragment.uniforms.add("cameraNearFar","vec2"),r.fragment.uniforms.add("inverseViewport","vec2"),r.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function t(e,r){r.multipassTerrainEnabled&&r.terrainLinearDepthTexture&&e.bindTexture(r.terrainLinearDepthTexture,"terrainDepthTexture")}


/***/ }),

/***/ "yCmR":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js ***!
  \************************************************************************/
/*! exports provided: Program */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Program.js */ "jjdI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__["Program"]{constructor(e,t,i){super(e,t.generateSource("vertex"),t.generateSource("fragment"),i),this._textures=new Map,this._freeTextureUnits=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({deallocator:null}),this._fragmentUniforms=Object(_webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__["webglDebugEnabled"])()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)||null==t.glName){const e=this._textures.get(r);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(r)),null}let s=this._textures.get(r);return null==s?(s=this._allocTextureUnit(t),this._textures.set(r,s)):s.texture=t,this._context.useProgram(this),this.setUniform1i(r,s.unit),this._context.bindTexture(t,s.unit),s.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}


/***/ }),

/***/ "ypgp":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js ***!
  \*************************************************************************************************/
/*! exports provided: ShaderTechnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderTechnique", function() { return t; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(i,t,e=(()=>this.dispose())){this.release=e,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i)}dispose(){this._program=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["disposeMaybe"])(this._program),this._pipeline=this._config=null}reload(t){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["disposeMaybe"])(this._program),this._program=this.initializeProgram(t)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,t){}bindMaterial(i,t){}bindDraw(i){}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e))}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i)}get primitiveType(){return 4}getPipelineState(i,t){return this._pipeline}}


/***/ }),

/***/ "yqQq":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/basisu/BasisU.js ***!
  \*********************************************************/
/*! exports provided: getBasisTranscoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasisTranscoder", function() { return s; });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "ss0y");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)){const t=t=>Object(_assets_js__WEBPACK_IMPORTED_MODULE_0__["getAssetUrl"])(`esri/libs/basisu/${t}`);i=Promise.all(/*! import() | chunks-basis_transcoder-js */[__webpack_require__.e("common"), __webpack_require__.e("chunks-basis_transcoder-js")]).then(__webpack_require__.bind(null, /*! ../../chunks/basis_transcoder.js */ "pY8p")).then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return i}let i;


/***/ })

}]);
//# sourceMappingURL=default~views-3d-interactive-editingTools-js~views-3d-layers-GraphicsLayerView3D-js~views-3d-layers-~91231881.js.map