(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~aa301cde"],{

/***/ "0RS7":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/number.js ***!
  \*******************************************************************/
/*! exports provided: i16, i1616to32, i32, i8, i8816to32, i8888to32, numTo32, toFloat32, toUint32, u16, u32, u32to4Xu8, u4u4to8, u8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i16", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i1616to32", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i32", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8816to32", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8888to32", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numTo32", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat32", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u16", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u32", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u32to4Xu8", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u4u4to8", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u8", function() { return f; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new Float32Array(1),r=new Uint32Array(n.buffer);function t(n,r,t){return Math.round(Math.max(Math.min(n,t),r))}function u(n){return t(n,-128,127)}function e(n){return t(n,-32768,32767)}function o(n){return t(n,-2147483648,2147483647)}function f(n){return t(n,0,255)}function i(n){return t(n,0,65535)}function c(n){return t(n,0,4294967295)}function a(t){return n[0]=t,r[0]}function h(t){return r[0]=t,n[0]}function M(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function m(n,r){return 15&n|(15&r)<<4}function w(n,r){return 65535&n|r<<16}function x(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}function y(n,r,t){return 255&n|(255&r)<<8|t<<16}function A(n){return 0|n}


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

/***/ "4SEz":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SymbolProperties.js ***!
  \*****************************************************************************/
/*! exports provided: TextProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProperties", function() { return h; });
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ObjectPool.js */ "7Nfj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(o,h,s,t,i,l,r,e,c){this.color=o,this.haloColor=h,this.haloSize=s,this.size=t,this.angle=i,this.offsetX=l,this.offsetY=r,this.hAnchor=e,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}h.pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](h);


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

/***/ "jIHu":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, BITSET_GENERIC_LOCK_COLOR, BITSET_LINE_SCALE_DASH, BITSET_MARKER_ALIGNMENT_MAP, BITSET_MARKER_ALIGNMENT_SCREEN, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY, BITSET_TYPE_FILL_OUTLINE, BUFFER_DATA_MINIMUM_SIZE, BUFFER_DATA_POOL_SIZE, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DISPLAY_RECORD_INT_PER_ELEMENT, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, ENABLE_EARLY_LABEL_DISCARD, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, MIN_MAX_ZOOM_PRECISION_FACTOR, NAN_MAGIC_NUMBER, PATCH_PIXEL_BUFFER_ALLOC_SIZE, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_HALF_WIDTH_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_GENERIC_LOCK_COLOR", function() { return ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_LINE_SCALE_DASH", function() { return dt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_MARKER_ALIGNMENT_MAP", function() { return it; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_MARKER_ALIGNMENT_SCREEN", function() { return ht; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE", function() { return ot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY", function() { return at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITSET_TYPE_FILL_OUTLINE", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_DATA_MINIMUM_SIZE", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUFFER_DATA_POOL_SIZE", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISPLAY_RECORD_INT_PER_ELEMENT", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_EARLY_LABEL_DISCARD", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_MAX_ZOOM_PRECISION_FACTOR", function() { return et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATCH_PIXEL_BUFFER_ALLOC_SIZE", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THIN_LINE_HALF_WIDTH_THRESHOLD", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=256/360,n=!1,p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=!1,S=1.05,T=6,U=5,V=6,W=1.15,X=2,Y=2,Z=8,$=500,_=4,tt=128,et=10,ct=2,ht=0,it=1,ot=4,at=8,dt=4,nt=1;


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

/***/ "qaIE":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/color.js ***!
  \******************************************************************/
/*! exports provided: copyAndPremultiply, premultiplyAlpha, premultiplyAlphaRGBA, premultiplyAlphaRGBAArray, premultiplyAlphaUint32, white */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAndPremultiply", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlpha", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBA", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBAArray", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaUint32", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return n; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "0RS7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=[255,255,255,1],t=[0,0,0,0];function u(r,n){return Array.isArray(n)?(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3]):(r[0]=n.r,r[1]=n.g,r[2]=n.b,r[3]=n.a),r}function o(r,n=0,t=!1){const u=r[n+3];return r[n+0]*=u,r[n+1]*=u,r[n+2]*=u,t||(r[n+3]*=255),r}function c(r){return o(u([],r))}function e(n){return o(u(t,n)),Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t[0],t[1],t[2],t[3])}function i(n){if(!n)return 0;const{r:t,g:u,b:o,a:c}=n;return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t*c,u*c,o*c,255*c)}function f(n){if(!n)return 0;const[t,u,o,c]=n;return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t*(c/255),u*(c/255),o*(c/255),c)}


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

/***/ "yE7X":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js ***!
  \******************************************************************/
/*! exports provided: MosaicType, VVType, WGLDrawPhase, WGLGeometryTransactionStatus, WGLGeometryType, WGLVVFlag, WGLVVTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MosaicType", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VVType", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLDrawPhase", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLGeometryTransactionStatus", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLGeometryType", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLVVFlag", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLVVTarget", function() { return _; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var E,T,I,L,A,_,O;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL"}(E||(E={})),function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(T||(T={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(I||(I={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION"}(L||(L={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(A||(A={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(_||(_={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH"}(O||(O={}));


/***/ }),

/***/ "yN2G":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js ***!
  \******************************************************************/
/*! exports provided: C_FILL_STRIDE_SPEC, C_FILL_STRIDE_SPEC_DD, C_FILL_STRIDE_SPEC_SIMPLE, C_FILL_VERTEX_DEF, C_FILL_VERTEX_DEF_DD, C_FILL_VERTEX_DEF_SIMPLE, C_ICON_STRIDE_SPEC, C_ICON_VERTEX_DEF, C_LABEL_STRIDE_SPEC, C_LABEL_VERTEX_DEF, C_LINE_STRIDE_SPEC, C_LINE_VERTEX_DEF, C_TEXT_STRIDE_SPEC, C_TEXT_VERTEX_DEF, C_VBO_GEOMETRY, C_VBO_INFO, C_VBO_PERINSTANCE, C_VBO_PERINSTANCE_VV, allocateTypedArrayBuffer, allocateTypedArrayBufferwithData, charCodes, copyMeshData, createGeometryData, createProgramDescriptor, createTextureFromTexelData, forEachGeometryType, geometryToMappedGeometry, getBytes, getCapType, getJoinType, getNamedBuffers, getPMSResourceSize, getPixelArrayCtor, getPixelBytes, getStrides, getTextProperties, getTransformParams, getUrl, getVVType, is3D, isDefined, isGIF, isImageResource, isNumber, isPNG, isSVGImage, isSVGResource, isSimple, isValidSVG, shouldRepeat, strideToPackingFactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC_DD", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC_SIMPLE", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF_DD", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF_SIMPLE", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_ICON_STRIDE_SPEC", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_ICON_VERTEX_DEF", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LABEL_STRIDE_SPEC", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LABEL_VERTEX_DEF", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LINE_STRIDE_SPEC", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LINE_VERTEX_DEF", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_TEXT_STRIDE_SPEC", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_TEXT_VERTEX_DEF", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_GEOMETRY", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_INFO", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE_VV", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBuffer", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBufferwithData", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charCodes", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyMeshData", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryData", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramDescriptor", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureFromTexelData", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachGeometryType", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometryToMappedGeometry", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBytes", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCapType", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJoinType", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedBuffers", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPMSResourceSize", function() { return pe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelArrayCtor", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelBytes", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrides", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextProperties", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformParams", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrl", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVVType", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is3D", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGIF", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageResource", function() { return se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPNG", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVGImage", function() { return de; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVGResource", function() { return oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSimple", function() { return fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidSVG", function() { return ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldRepeat", function() { return me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strideToPackingFactor", function() { return j; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.js */ "qaIE");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SymbolProperties.js */ "4SEz");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.Utils"),l="geometry",f="per_instance",d="per_instance_vv",m=[{name:l,strideInBytes:36,divisor:0}],p=[{name:l,strideInBytes:32,divisor:0}],y=[{name:l,strideInBytes:20,divisor:0}],g=[{name:l,strideInBytes:12,divisor:0}],h=[{name:l,strideInBytes:40,divisor:0}],w=[{name:l,strideInBytes:36,divisor:0}],v=[{name:l,strideInBytes:36,divisor:0}];function S(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const I=S(m),L=S(p),M=S(y),A=S(g),T=S(h),C=S(w),b=S(v);function z(e,{fill:t}){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].MARKER:return I;case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].FILL:return"dot-density"===t?A:"simple"===t?M:L;case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].LINE:return T;case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].TEXT:return C;case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].LABEL:return b}}const x=[l],E=[l],F=[l],B=[l],D=[l];function U(e){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].MARKER:return x;case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].FILL:return E;case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].LINE:return F;case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].TEXT:return B;case _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].LABEL:return D}}function j(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function R(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function $(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function N(e){return _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_6__["TextProperties"].pool.acquire(e.color?Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["copyAndPremultiply"])(e.color):[255,255,255,255],e.haloColor?Object(_color_js__WEBPACK_IMPORTED_MODULE_4__["copyAndPremultiply"])(e.haloColor):[255,255,255,255],Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.haloSize),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__["pt2px"])(e.font.size),e.angle*Math.PI/180,e.xoffset/e.font.size,e.yoffset/e.font.size,"left"===e.horizontalAlignment?0:"right"===e.horizontalAlignment?1:.5,"top"===e.verticalAlignment?0:"bottom"===e.verticalAlignment?1:.5)}function O(e){return null!=e}function P(e){return"number"==typeof e}function k(t){switch(t){case"butt":return 0;case"round":return 1;case"square":return 2;default:return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function V(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function q(e){switch(e){case"opacity":return _enums_js__WEBPACK_IMPORTED_MODULE_5__["VVType"].OPACITY;case"color":return _enums_js__WEBPACK_IMPORTED_MODULE_5__["VVType"].COLOR;case"rotation":return _enums_js__WEBPACK_IMPORTED_MODULE_5__["VVType"].ROTATION;case"size":return _enums_js__WEBPACK_IMPORTED_MODULE_5__["VVType"].SIZE;default:return u.error(`Cannot interpret unknown vv: ${e}`),null}}function K(e){const{transform:t,hasZ:r,hasM:n}=e;return{transform:t,hasZ:r,hasM:n}}function X(e,t,r,n,i,o,s){for(const c in o){const t=o[c].stride,n=j(t),s=o[c].data,a=r[c].data,u=t*i.vertexCount/n,l=t*e/n,f=t*i.vertexFrom/n;for(let e=0;e<u;++e)a[e+l]=s[e+f]}const a=i.indexCount;for(let c=0;c<a;++c)n[c+t]=s[c+i.indexFrom]-i.vertexFrom+e}const Z={[l]:35044};function _(e,t){const r=[];for(let n=0;n<5;++n){const i=U(n),o={};for(const e of i)o[e]={data:t(n,e)};r.push({data:e(n),buffers:o})}return r}function J(e,t){let n,i;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPowerOfTwo"])(t.width)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["isPowerOfTwo"])(t.height)?(n=!0,i=9987):(n=!1,i=9729),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"](e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,hasMipmap:n,samplingMode:i,wrapMode:33071,flipped:!0},t)}function Y(e){return{vertexFrom:void 0,vertexTo:void 0,geometry:e}}function G(e){switch(e){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function H(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-utils",`Unable to handle type ${t}`))}}function Q(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-utils",`Unable to handle type ${t}`))}}function W(e){const t={};for(const r in e){const n=e[r];let i=0;t[r]=n.map((e=>{const t={...e,normalized:e.normalized||!1,divisor:e.divisor||0,offset:i,stride:0};return i+=e.count*G(e.type),t})),t[r].forEach((e=>e.stride=i))}return t}const ee=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},te=e=>{const t={};for(const r in e){const n=e[r];t[r]=n.length?n[0].stride:0}return t},re=new Map,ne=(e,t)=>{if(!re.has(e)){const r=W(t),n={strides:te(r),bufferLayouts:r,attributes:ee(t)};re.set(e,n)}return re.get(e)};function ie(e){e(_enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].FILL),e(_enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].LINE),e(_enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].MARKER),e(_enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].TEXT),e(_enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLGeometryType"].LABEL)}const oe=e=>"path"in e&&ge(e.path),se=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,ae=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,ce=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),ue=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),le=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function fe(e){switch(e.type){case"line":{const t=e;return"CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return"CIMSolidFill"===e.cim.type;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const de=e=>e.includes("data:image/svg+xml");function me(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function pe(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function ye(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const ge=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4));


/***/ })

}]);
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~aa301cde.js.map