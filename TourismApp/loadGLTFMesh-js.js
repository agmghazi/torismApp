(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loadGLTFMesh-js"],{

/***/ "3Hpj":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js ***!
  \******************************************************************************/
/*! exports provided: loadGLTFMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGLTFMesh", function() { return K; });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Color.js */ "nvBr");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../request.js */ "Lqtk");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/MapUtils.js */ "KOts");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _MeshComponent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MeshComponent.js */ "8LoH");
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MeshMaterialMetallicRoughness.js */ "g/q1");
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MeshTexture.js */ "iNrq");
/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../MeshVertexAttributes.js */ "9eec");
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../buffer/BufferView.js */ "gZDz");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "ZotJ");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/vec42.js */ "5MHk");
/* harmony import */ var _buffer_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../buffer/utils.js */ "fi3m");
/* harmony import */ var _georeference_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./georeference.js */ "6bpU");
/* harmony import */ var _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../views/3d/glTF/DefaultLoadingContext.js */ "K2Cv");
/* harmony import */ var _views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../views/3d/glTF/loader.js */ "PDsV");
/* harmony import */ var _views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../views/3d/glTF/internal/indexUtils.js */ "CHx4");
/* harmony import */ var _views_3d_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../views/3d/webgl-engine/lib/geometryDataUtils.js */ "EDiM");
/* harmony import */ var _views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js */ "BhNz");
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../chunks/vec33.js */ "TJZZ");
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../chunks/vec43.js */ "HCB5");
/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../chunks/vec22.js */ "3Fbu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function K(t,e,r){const o=new _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_17__["DefaultLoadingContext"](P(r)),n=(await Object(_views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_18__["load"])(o,e,r,!0)).model,i=n.lods.shift(),a=new Map,c=new Map;n.textures.forEach(((t,e)=>a.set(e,W(t)))),n.materials.forEach(((t,e)=>c.set(e,X(t,a))));const l=J(i);for(const s of l.parts)Y(l,s,c);const{position:u,normal:f,tangent:m,color:p,texCoord0:g}=l.vertexAttributes,x={position:u.typedBuffer,normal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(f)?f.typedBuffer:null,tangent:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(m)?m.typedBuffer:null,uv:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(g)?g.typedBuffer:null,color:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(p)?p.typedBuffer:null},h=Object(_georeference_js__WEBPACK_IMPORTED_MODULE_16__["georeferenceByTransform"])(x,t,r);return{transform:h.transform,components:l.components,spatialReference:t.spatialReference,vertexAttributes:new _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_11__["default"]({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function P(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r,o,n)=>{const i=t.resolveFile(r),a="image"===o?"image":"binary"===o?"array-buffer":"json";return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i,{responseType:a,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(n)?n.signal:null})).data}}:null}function Q(t,e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(t))return"-";const o=t.typedBuffer;return`${Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__["getOrCreateMapValue"])(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function H(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(t)?t.toString():"-"}function J(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Q(t,n)}/\n      ${Q(c,n)}/\n      ${Q(l,n)}/\n      ${Q(u,n)}/\n      ${Q(f,n)}/\n      ${H(a.transform)}\n    `;let p=!1;const d=Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__["getOrCreateMapValue"])(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i.push({gltf:a,writeVertices:p,region:d})}return{vertexAttributes:{position:Object(_buffer_utils_js__WEBPACK_IMPORTED_MODULE_15__["createBuffer"])(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec3f64"],e),normal:o.normal?Object(_buffer_utils_js__WEBPACK_IMPORTED_MODULE_15__["createBuffer"])(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec3f"],e):null,tangent:o.tangent?Object(_buffer_utils_js__WEBPACK_IMPORTED_MODULE_15__["createBuffer"])(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec4f"],e):null,color:o.color?Object(_buffer_utils_js__WEBPACK_IMPORTED_MODULE_15__["createBuffer"])(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec4u8"],e):null,texCoord0:o.texCoord0?Object(_buffer_utils_js__WEBPACK_IMPORTED_MODULE_15__["createBuffer"])(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec2f"],e):null},parts:i,components:[]}}function W(t){return new _MeshTexture_js__WEBPACK_IMPORTED_MODULE_10__["default"]({data:t.data,wrap:rt(t.parameters.wrap)})}function X(e,r){const s=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](st(e.color,e.opacity)),i=e.emissiveFactor?new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](it(e.emissiveFactor)):null;return new _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__["default"]({color:s,colorTexture:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["applySome"])(e.textureColor,(t=>r.get(t)))),normalTexture:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["applySome"])(e.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["applySome"])(e.textureEmissive,(t=>r.get(t)))),occlusionTexture:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["applySome"])(e.textureOcclusion,(t=>r.get(t)))),alphaMode:et(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["unwrap"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["applySome"])(e.textureMetallicRoughness,(t=>r.get(t))))})}function Y(t,e,r){e.writeVertices&&Z(t,e);const o=e.gltf,n=tt(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_8__["default"]({faces:n,material:r.get(o.material),trustSourceNormals:!0}))}function Z(t,e){const{position:r,normal:o,tangent:n,color:i,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:f,transform:m}=e.gltf,p=f.position.count;if(Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_13__["t"])(r.slice(u,p),f.position,m),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(f.normal)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(o)){const t=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),m);Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_13__["a"])(o.slice(u,p),f.normal,t)}else Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(o)&&Object(_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_22__["f"])(o,0,0,1,{dstIndex:u,count:p});if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(f.tangent)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(n)){const t=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),m);Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_14__["t"])(n.slice(u,p),f.tangent,t)}else Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(n)&&Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_23__["f"])(n,0,0,1,1,{dstIndex:u,count:p});if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(f.texCoord0)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(l)?Object(_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_24__["n"])(l.slice(u,p),f.texCoord0):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(l)&&Object(_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_24__["f"])(l,0,0,{dstIndex:u,count:p}),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(f.color)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(i)){const t=f.color,e=i.slice(u,p);if(4===t.elementCount)t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec4f"]?Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_14__["s"])(e,t,255):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec4u8"]?Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_23__["c"])(e,t):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec4u16"]&&Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_14__["a"])(e,t,8);else{Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_23__["f"])(e,255,255,255,255);const r=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec3u8"].fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec3f"]?Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_13__["s"])(r,t,255):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec3u8"]?Object(_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_22__["c"])(r,t):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__["BufferViewVec3u16"]&&Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_13__["b"])(r,t,8)}}else Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(i)&&Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_23__["f"])(i.slice(u,p),255,255,255,255)}function tt(t,e){switch(e){case 4:return Object(_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_19__["trianglesToTriangles"])(t,_views_3d_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_20__["generateIndexArray"]);case 5:return Object(_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_19__["triangleStripToTriangles"])(t);case 6:return Object(_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_19__["triangleFanToTriangles"])(t)}}function et(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function rt(t){return{horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function nt(t){return t**(1/_views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_21__["COLOR_GAMMA"])*255}function st(t,e){return Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__["f"])(nt(t[0]),nt(t[1]),nt(t[2]),e)}function it(t){return Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__["f"])(nt(t[0]),nt(t[1]),nt(t[2]))}


/***/ }),

/***/ "3O/s":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/VectorStack.js ***!
  \*******************************************************/
/*! exports provided: VectorStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorStack", function() { return m; });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextTick.js */ "KrcW");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chunks/vec4f64.js */ "D8Ta");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize)}get(){0===this._itemsPtr&&Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_0__["nextTick"])((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=a){return new m(16,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__["c"],t)}static createVec3f64(t=a){return new m(24,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["b"],t)}static createVec4f64(t=a){return new m(32,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__["a"],t)}static createMat3f64(t=a){return new m(72,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__["a"],t)}static createMat4f64(t=a){return new m(128,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["a"],t)}static createQuatf64(t=a){return new m(32,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__["c"],t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a=4096;


/***/ }),

/***/ "D8Ta":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4f64.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, i, j, k, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function c(){return r(0,1,0,0)}function i(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const _=a(),l=o(),N=s(),U=c(),I=i(),O=f(),T=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,unitZ:i,unitW:f,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});


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

/***/ "IRkY":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ObjectStack.js ***!
  \*******************************************************/
/*! exports provided: ObjectStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectStack", function() { return s; });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextTick.js */ "KrcW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow()}get(){return 0===this._itemsPtr&&Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_0__["nextTick"])((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator())}}const i=1024;


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

/***/ "c2GT":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/vectorStacks.js ***!
  \********************************************************************/
/*! exports provided: sm3d, sm4d, sq4d, sv2d, sv3d, sv4d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm3d", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm4d", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sq4d", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv2d", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv3d", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv4d", function() { return r; });
/* harmony import */ var _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/VectorStack.js */ "3O/s");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec2f64(),c=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec3f64(),r=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec4f64(),a=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat3f64(),f=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat4f64(),o=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createQuatf64();


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


/***/ })

}]);
//# sourceMappingURL=loadGLTFMesh-js.js.map