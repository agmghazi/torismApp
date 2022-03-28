(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~loadGLTFMesh-js~views-3d-layers-GraphicsLayerView3D-js~views-3d-layers-graphics-objectResour~4cb7fdae"],{

/***/ "3Fbu":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec22.js ***!
  \***************************************************/
/*! exports provided: c, f, n, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return o; });
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/types.js */ "xqxP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(e,t,n){const f=e.typedBuffer,r=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*r,s=(n&&n.srcIndex?n.srcIndex:0)*o;for(let c=0;c<u;++c)f[l]=d[s],f[l+1]=d[s+1],l+=r,s+=o}function r(r,d,o){const u=r.typedBuffer,l=r.typedBufferStride,s=d.typedBuffer,c=d.typedBufferStride,p=o?o.count:d.count;let y=(o&&o.dstIndex?o.dstIndex:0)*l,i=(o&&o.srcIndex?o.srcIndex:0)*c;if(Object(_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["isInteger"])(d.elementType)){const e=Object(_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["maximumValue"])(d.elementType);if(Object(_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["isSigned"])(d.elementType))for(let t=0;t<p;++t)u[y]=Math.max(s[i]/e,-1),u[y+1]=Math.max(s[i+1]/e,-1),y+=l,i+=c;else for(let t=0;t<p;++t)u[y]=s[i]/e,u[y+1]=s[i+1]/e,y+=l,i+=c}else f(r,d,o);return r}function d(e,t,n,f){var r,d;const o=e.typedBuffer,u=e.typedBufferStride,l=null!=(r=null==f?void 0:f.count)?r:e.count;let s=(null!=(d=null==f?void 0:f.dstIndex)?d:0)*u;for(let c=0;c<l;++c)o[s]=t,o[s+1]=n,s+=u}const o=Object.freeze({__proto__:null,copy:f,normalizeIntegerBuffer:r,fill:d});


/***/ }),

/***/ "3RTz":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js ***!
  \********************************************************************************/
/*! exports provided: BinaryStreamReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryStreamReader", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const s=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,s,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}


/***/ }),

/***/ "5MHk":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec42.js ***!
  \***************************************************/
/*! exports provided: a, b, s, t, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return n; });
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/math/common.js */ "ZBV1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=f[9],B=f[10],h=f[11],l=f[12],S=f[13],b=f[14],v=f[15],M=t.typedBuffer,_=t.typedBufferStride,g=r.typedBuffer,j=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*j,f=g[r],o=g[r+1],x=g[r+2],z=g[r+3];M[t]=n*f+c*o+y*x+l*z,M[t+1]=u*f+i*o+m*x+S*z,M[t+2]=d*f+a*o+B*x+b*z,M[t+3]=s*f+p*o+h*x+v*z}}function r(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=t.typedBuffer,B=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*B,r=e*l,f=h[r],o=h[r+1],S=h[r+2],b=h[r+3];m[t]=n*f+s*o+a*S,m[t+1]=u*f+c*o+p*S,m[t+2]=d*f+i*o+y*S,m[t+3]=b}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2],o[e+3]=r*u[t+3]}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r,o[e+3]=u[t+3]>>r}}const n=Object.freeze({__proto__:null,transformMat4:t,transformMat3:r,scale:f,shiftRight:o});


/***/ }),

/***/ "BhNz":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js ***!
  \**************************************************************************************************/
/*! exports provided: COLOR_GAMMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_GAMMA", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=2.1;


/***/ }),

/***/ "CHx4":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js ***!
  \************************************************************************/
/*! exports provided: triangleFanToTriangles, triangleStripToTriangles, trianglesToTriangles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleFanToTriangles", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleStripToTriangles", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trianglesToTriangles", function() { return n; });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webgl-engine/lib/geometryDataUtils.js */ "EDiM");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,o=_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["generateDefaultIndexArray"]){return"number"==typeof n?o(n):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint16Array"])(n)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint8Array"])(n)?new Uint32Array(n):n}function o(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2)}else{let e=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=t[o],i=t[o+1],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f}else{const r=t[o+1],i=t[o],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f}}return n}function i(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}{const e=t[0];let o=t[1],i=0;for(let f=0;f<r;++f){const r=t[f+2];n[i++]=e,n[i++]=o,n[i++]=r,o=r}return n}}


/***/ }),

/***/ "Gze9":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js ***!
  \**********************************************************************/
/*! exports provided: Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return G; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/MapUtils.js */ "KOts");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Version.js */ "VJrH");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "gZDz");
/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/scalar.js */ "fPvx");
/* harmony import */ var _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BinaryStreamReader.js */ "3RTz");
/* harmony import */ var _fillDefaults_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fillDefaults.js */ "cqrX");
/* harmony import */ var _pathUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pathUtils.js */ "aBUN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class G{constructor(e,t,r,n,s){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=s,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=Object(_pathUtils_js__WEBPACK_IMPORTED_MODULE_12__["splitURI"])(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,o,a){if(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["isDataProtocol"])(o)){const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["dataComponents"])(o);if("model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new G(e,t,o,n)}catch{}const a=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["dataToArrayBuffer"])(o);if(G.isGLBData(a))return this.fromGLBData(e,t,o,a)}if(o.endsWith(".gltf")){const r=await e.loadJSON(o,a);return new G(e,t,o,r)}const i=await e.loadBinary(o,a);if(G.isGLBData(i))return this.fromGLBData(e,t,o,i);const u=await e.loadJSON(o,a);return new G(e,t,o,u)}static isGLBData(e){const t=new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_10__["BinaryStreamReader"](e);return t.remainingBytes()>=4&&t.readUint32()===D.MAGIC}static async fromGLBData(e,t,r,n){const s=await G.parseGLBData(t,n);return new G(e,t,r,s.json,s.binaryData)}static async parseGLBData(e,t){const r=new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_10__["BinaryStreamReader"](t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),s=r.readUint32(),o=r.readUint32();e.assert(n===D.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===D.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await q(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==D.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),i=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const s=await this.getBufferLoader(e,t);return n.assert(s.byteLength===r.byteLength,"Buffer byte lengths should match."),s}async getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e],s=this.context.loadBinary(this.resolveUri(n.uri),t).then((e=>new Uint8Array(e)));return this.bufferLoaders.set(e,s),s}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const n=this.json.accessors[e];r.errorUnsupportedIf(null==(null==n?void 0:n.bufferView),"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(n.type in["MAT2","MAT3","MAT4"],`AttributeType ${n.type} is not supported`);const s=this.json.bufferViews[n.bufferView],o=await this.getBuffer(s.buffer,t),a=k[n.type],i=V[n.componentType],u=a*i,c=s.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(s.byteOffset||0)+(n.byteOffset||0),entryCount:n.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:n.componentType,min:n.min,max:n.max,normalized:!!n.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_9__["m"])(this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewUint8"],r));case 5123:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_9__["m"])(this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewUint16"],r));case 5125:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_9__["m"])(this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewUint32"],r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+X[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4f"](n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2f"],n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),J(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4f"],n);if(5121===n.componentType)return this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u8"],n);if(5123===n.componentType)return this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u16"],n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],n);if(5121===n.componentType)return this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u8"],n);if(5123===n.componentType)return this.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u16"],n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+X[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=this.materialCache.get(e.material);if(!n){const s=null!=e.material?Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_11__["material"])(this.json.materials[e.material]):Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_11__["material"])(),o=s.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(o.baseColorTexture,t),u=this.getTexture(s.normalTexture,t),c=r?this.getTexture(s.occlusionTexture,t):null,p=r?this.getTexture(s.emissiveTexture,t):null,f=r?this.getTexture(o.metallicRoughnessTexture,t):null,d=null!=e.material?e.material:-1;n={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:o.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:await i,normalTexture:await u,name:s.name,id:d,occlusionTexture:await c,emissiveTexture:await p,emissiveFactor:s.emissiveFactor,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor,metallicRoughnessTexture:await f,vertexColors:a,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,r){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const n=e.index,s=this.errorContext,o=this.json.textures[n],a=Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_11__["textureSampler"])(null!=o.sampler?this.json.samplers[o.sampler]:{});s.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source],u=await this.loadTextureImageData(n,o,r);return Object(_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreateMapValue"])(this.textureCache,n,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(s.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:u,wrapS:e(a.wrapS)?a.wrapS:t(a.wrapS),wrapT:e(a.wrapT)?a.wrapT:t(a.wrapT),minFilter:a.minFilter,name:i.name,id:n}}))}getNodeTransform(e){if(void 0===e)return P;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),r,n.matrix):n.translation||n.rotation||n.scale?(t=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["b"])(r),n.translation&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["a"])(t,t,n.translation),n.rotation&&(F[3]=Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_6__["g"])(F,n.rotation),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["e"])(t,t,F[3],F)),n.scale&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["f"])(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["makeAbsolute"])(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=_core_Version_js__WEBPACK_IMPORTED_MODULE_3__["Version"].parse(this.json.asset.version,"glTF");_.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}async loadTextureImageData(e,t,r){const n=this.textureLoaders.get(e);if(n)return n;const s=this.createTextureLoader(t,r);return this.textureLoaders.set(e,s),s}async createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this.resolveUri(r.uri),t);const n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),n.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,t);return n.errorUnsupportedIf(null!=s.byteStride,"byteStride not supported for image buffer"),H(new Uint8Array(o.buffer,o.byteOffset+(s.byteOffset||0),s.byteLength),r.mimeType)}}const _=new _core_Version_js__WEBPACK_IMPORTED_MODULE_3__["Version"](2,0,"glTF"),P=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["u"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),Math.PI/2),F=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),k={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},V={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function J(t){switch(t.componentType){case 5120:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2i8"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2u8"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2i16"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2u16"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2u32"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2f"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(t.componentType)}}async function q(e){return new Promise(((t,r)=>{const n=new Blob([e]),s=new FileReader;s.onload=()=>{const e=s.result;t(JSON.parse(e))},s.onerror=e=>{r(e)},s.readAsText(n)}))}async function H(e,t){return new Promise(((r,n)=>{const s=new Blob([e],{type:t}),o=URL.createObjectURL(s),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(o),n(e)})),a.src=o}))}const X={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};


/***/ }),

/***/ "HCB5":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec43.js ***!
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
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],d[l+3]=o[c+3],l+=f,c+=r}function t(e,t,n,d,f,o){var r,u;const l=e.typedBuffer,c=e.typedBufferStride,s=null!=(r=null==o?void 0:o.count)?r:e.count;let p=(null!=(u=null==o?void 0:o.dstIndex)?u:0)*c;for(let i=0;i<s;++i)l[p]=t,l[p+1]=n,l[p+2]=d,l[p+3]=f,p+=c}const n=Object.freeze({__proto__:null,copy:e,fill:t});


/***/ }),

/***/ "K2Cv":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js ***!
  \**************************************************************************/
/*! exports provided: DefaultLoadingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLoadingContext", function() { return n; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "Lqtk");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/asyncUtils.js */ "eSsm");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(r){this.streamDataRequester=r}async loadJSON(r,e){return this.load("json",r,e)}async loadBinary(r,e){return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["isDataProtocol"])(r)?(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAborted"])(e),Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__["dataToArrayBuffer"])(r)):this.load("binary",r,e)}async loadImage(r,e){return this.load("image",r,e)}async load(t,i,m){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isNone"])(this.streamDataRequester))return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i,{responseType:c[t]})).data;const n=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__["result"])(this.streamDataRequester.request(i,t,m));if(!0===n.ok)return n.value;throw Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAbortError"])(n.error),new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("",`Request for resource failed: ${n.error}`)}}const c={image:"image",binary:"array-buffer",json:"json"};


/***/ }),

/***/ "PDsV":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/loader.js ***!
  \***********************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultErrorContext.js */ "QgcX");
/* harmony import */ var _LoaderResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoaderResult.js */ "exm0");
/* harmony import */ var _internal_Resource_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Resource.js */ "Gze9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=0;async function l(s,r,a={},l=!0){const m=await _internal_Resource_js__WEBPACK_IMPORTED_MODULE_4__["Resource"].load(s,p,r,a),x="gltf_"+i++,h={lods:[],materials:new Map,textures:new Map,meta:u(m)},T=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type),g=new Map;await c(m,(async(s,r,n,i)=>{var u;const c=null!=(u=g.get(n))?u:0;g.set(n,c+1);const T=void 0!==s.mode?s.mode:4,S=4===T||5===T||6===T?T:null;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(S))return void p.warnUnsupported("Unsupported primitive mode ("+f[T]+"). Skipping primitive.");if(!m.hasPositions(s))return void p.warn("Skipping primitive without POSITION vertex attribute.");const v=m.getPositionData(s,a),w=m.getMaterial(s,a,l),_=m.hasNormals(s)?m.getNormalData(s,a):null,I=m.hasTangents(s)?m.getTangentData(s,a):null,R=m.hasTextureCoordinates(s)?m.getTextureCoordinates(s,a):null,E=m.hasVertexColors(s)?m.getVertexColors(s,a):null,M=m.getIndexData(s,a),F={transform:Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(r),attributes:{position:await v,normal:_?await _:null,texCoord0:R?await R:null,color:E?await E:null,tangent:I?await I:null},indices:await M,primitiveType:S,material:d(h,await w,x)};let y=null;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(h.meta)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(h.meta.ESRI_lod)&&"screenSpaceRadius"===h.meta.ESRI_lod.metric&&(y=h.meta.ESRI_lod.thresholds[n]),h.lods[n]=h.lods[n]||{parts:[],name:i,lodThreshold:y},h.lods[n].parts[c]=F}));for(const e of h.lods)e.parts=e.parts.filter((e=>!!e));return{model:h,meta:{isEsriSymbolResource:T,uri:m.uri},customMeta:{}}}function u(t){const o=t.json;let s=null;return o.nodes.forEach((t=>{const o=t.extras;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(s=o)})),s}async function c(e,t){const o=e.json,s=o.scenes[o.scene||0].nodes,r=s.length>1,a=[];for(const i of s){const e=o.nodes[i];if(a.push(n(i,0)),m(e)&&!r){e.extensions.MSFT_lod.ids.forEach(((e,t)=>n(e,t+1)))}}async function n(s,r){const i=o.nodes[s],l=e.getNodeTransform(s);if(p.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=o.meshes[i.mesh];for(const o of e.primitives)a.push(t(o,l,r,e.name))}for(const e of i.children||[])a.push(n(e,r))}await Promise.all(a)}function m(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e,t,o){const s=t=>{const s=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(s)){const o=Object(_LoaderResult_js__WEBPACK_IMPORTED_MODULE_3__["makeTextureSource"])(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:x.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(s,o)}return s},n=`${o}_mat_${t.id}_${t.name}`;if(!e.materials.has(n)){const o=Object(_LoaderResult_js__WEBPACK_IMPORTED_MODULE_3__["makeMaterialParameters"])({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?s(t.colorTexture):void 0,textureNormal:t.normalTexture?s(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?s(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?s(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?s(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(n,o)}return n}const p=new _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_2__["DefaultErrorContext"],x=[9987,9985],f=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];


/***/ }),

/***/ "QgcX":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultErrorContext.js ***!
  \************************************************************************/
/*! exports provided: DefaultErrorContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultErrorContext", function() { return t; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.glTF");class t{error(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error",e)}errorUnsupported(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e)}assert(r,e){r||this.error(e)}warn(r){o.warn(r)}warnUnsupported(r){this.warn("[Unsupported Feature] "+r)}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e)}}


/***/ }),

/***/ "VJrH":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/core/Version.js ***!
  \***************************************************/
/*! exports provided: Version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return r; });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s=this._context&&this._context+" ";throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](o+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e||!e.match||!e.match(n)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o})}if(!i||!i.match||!i.match(n)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o})}const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s)}}


/***/ }),

/***/ "aBUN":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js ***!
  \***********************************************************************/
/*! exports provided: splitURI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitURI", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}


/***/ }),

/***/ "cqrX":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js ***!
  \**************************************************************************/
/*! exports provided: material, textureSampler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "material", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textureSampler", function() { return s; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},r={pbrMetallicRoughness:o,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},t={ESRI_externalColorMixMode:"tint"},a=(e={})=>{const a={...o,...e.pbrMetallicRoughness},i=l({...t,...e.extras});return{...r,...e,pbrMetallicRoughness:a,extras:i}};function l(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const i={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},s=e=>({...i,...e});


/***/ }),

/***/ "exm0":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js ***!
  \*****************************************************************/
/*! exports provided: makeMaterialParameters, makeTextureSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMaterialParameters", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTextureSource", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function t(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}


/***/ }),

/***/ "fPvx":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/scalar.js ***!
  \****************************************************/
/*! exports provided: c, m, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=n?n.count:t.count;let s=(n&&n.dstIndex?n.dstIndex:0)*o,u=(n&&n.srcIndex?n.srcIndex:0)*d;for(let p=0;p<f;++p)r[s]=c[u],s+=o,u+=d}function t(e,t){const n=e.count;t||(t=new e.TypedArrayConstructor(n));for(let r=0;r<n;r++)t[r]=e.get(r);return t}const n=Object.freeze({__proto__:null,copy:e,makeDense:t});


/***/ }),

/***/ "fi3m":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/utils.js ***!
  \********************************************************************/
/*! exports provided: mat3, mat4, scalar, vec2, vec3, vec4, createBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBuffer", function() { return r; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "xqxP");
/* harmony import */ var _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat32.js */ "wMH/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony import */ var _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat42.js */ "g84+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__["m"]; });

/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/scalar.js */ "fPvx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalar", function() { return _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__["s"]; });

/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec22.js */ "3Fbu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__["v"]; });

/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/vec33.js */ "TJZZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__["v"]; });

/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec43.js */ "HCB5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__["v"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*Object(_types_js__WEBPACK_IMPORTED_MODULE_0__["elementTypeSize"])(s.ElementType)))}


/***/ }),

/***/ "g84+":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat42.js ***!
  \***************************************************/
/*! exports provided: c, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<16;++e)d[s+e]=n[u+e];s+=f,u+=o}}const t=Object.freeze({__proto__:null,copy:e});


/***/ }),

/***/ "wMH/":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat32.js ***!
  \***************************************************/
/*! exports provided: c, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<9;++e)d[s+e]=n[u+e];s+=f,u+=o}}const t=Object.freeze({__proto__:null,copy:e});


/***/ })

}]);
//# sourceMappingURL=default~loadGLTFMesh-js~views-3d-layers-GraphicsLayerView3D-js~views-3d-layers-graphics-objectResour~4cb7fdae.js.map