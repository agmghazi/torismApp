(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-2d-interactive-editingTools-js"],{

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

/***/ "EgM1":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/interactive/editingTools/draw/DrawGraphicTool2D.js ***!
  \***********************************************************************************************/
/*! exports provided: DrawGraphicTool2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawGraphicTool2D", function() { return E; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../geometry.js */ "4GrV");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/handleUtils.js */ "xkkJ");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _SnappingVisualizer2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../SnappingVisualizer2D.js */ "E4HC");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbols.js */ "rkdq");
/* harmony import */ var _draw_DrawGraphicTool_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../draw/DrawGraphicTool.js */ "rjwa");
/* harmony import */ var _draw_DrawOperation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../draw/DrawOperation.js */ "5+Ow");
/* harmony import */ var _draw_drawSurfaces_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../draw/drawSurfaces.js */ "W6tc");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../geometry/Multipoint.js */ "V9wi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let E=class extends _draw_DrawGraphicTool_js__WEBPACK_IMPORTED_MODULE_12__["DrawGraphicTool"]{constructor(e){super(e),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrapOr"])(e.activeLineSymbol,_symbols_js__WEBPACK_IMPORTED_MODULE_11__["outline"]),regularVertices:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrapOr"])(e.regularVerticesSymbol,_symbols_js__WEBPACK_IMPORTED_MODULE_11__["regularVertices"]),activeVertex:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrapOr"])(e.activeVertexSymbol,_symbols_js__WEBPACK_IMPORTED_MODULE_11__["activeVertex"]),fill:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["unwrap"])(e.activeFillSymbol)}}initializeGraphic(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._visualElementSymbols.fill)&&(e.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const e=this.view;return new _draw_DrawOperation_js__WEBPACK_IMPORTED_MODULE_13__["DrawOperation"]({view:e,manipulators:this.manipulators,geometryType:Object(_draw_DrawGraphicTool_js__WEBPACK_IMPORTED_MODULE_12__["geometryTypeToDrawOperationGeometryType"])(this.geometryType),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new _draw_drawSurfaces_js__WEBPACK_IMPORTED_MODULE_14__["MapDrawSurface"](e),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new _SnappingVisualizer2D_js__WEBPACK_IMPORTED_MODULE_10__["SnappingVisualizer2D"](this.internalGraphicsLayer)})}onActiveVertexChanged(e){if("point"===this.geometryType)return null;const[r,s]=e,n=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__["default"]({x:r,y:s,spatialReference:this.drawOperation.spatialReference});return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=n,null):(this._visualElementGraphics.activeVertex=new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({geometry:n,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(_),Object(_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeHandle"])((()=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["destroyMaybe"])(this._visualElementGraphics.activeVertex))})))}onOutlineChanged(e){const r=e.clone();if("polyline"===r.type){const e=r.paths[r.paths.length-1];e.splice(0,e.length-2)}return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=r,null):(this._visualElementGraphics.outline=new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({geometry:r,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(_),Object(_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeHandle"])((()=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["destroyMaybe"])(this._visualElementGraphics.outline))})))}onRegularVerticesChanged(e){const r=new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_16__["default"]({points:e,spatialReference:this.drawOperation.spatialReference});return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=r,null):(this._visualElementGraphics.regularVertices=new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({geometry:r,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(_),Object(_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__["makeHandle"])((()=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["isSome"])(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__["destroyMaybe"])(this._visualElementGraphics.regularVertices))})))}};function _(e,i){var t,r,s,a;return(null!=(t=null==(r=e.attributes)?void 0:r.displayOrder)?t:-1/0)-(null!=(s=null==(a=i.attributes)?void 0:a.displayOrder)?s:-1/0)}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],E.prototype,"activeFillSymbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],E.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0,nonNullable:!0})],E.prototype,"view",void 0),E=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__["subclass"])("esri.views.2d.interactive.draw.DrawGraphicTool2D")],E);


/***/ }),

/***/ "GAN7":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/interactive/editingTools.js ***!
  \************************************************************************/
/*! exports provided: DrawGraphicTool2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editingTools_draw_DrawGraphicTool2D_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editingTools/draw/DrawGraphicTool2D.js */ "EgM1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawGraphicTool2D", function() { return _editingTools_draw_DrawGraphicTool2D_js__WEBPACK_IMPORTED_MODULE_0__["DrawGraphicTool2D"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



/***/ }),

/***/ "rkdq":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/interactive/editingTools/draw/symbols.js ***!
  \*************************************************************************************/
/*! exports provided: activeVertex, outline, regularVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeVertex", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outline", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regularVertices", function() { return l; });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../symbols.js */ "H9eC");
/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../symbols/CIMSymbol.js */ "TKwc");
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../symbols/SimpleMarkerSymbol.js */ "Tcmu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"]({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),l=new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"]({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),i=new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"]({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});


/***/ }),

/***/ "zcE2":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/draw/support/drawUtils.js ***!
  \*******************************************************************/
/*! exports provided: cloneMove, getRotationAngle, getScaleRatio, move, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneMove", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotationAngle", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleRatio", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return i; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/coordsUtils.js */ "Mu3I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,n,e,r){if(null==r||t.hasZ||(r=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=r&&(t.z+=r),t;if("multipoint"===t.type){const o=t.points;for(let t=0;t<o.length;t++)o[t]=l(o[t],n,e,r);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=r&&(t.zmin+=r,t.zmax+=r),t;const s=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__["geometryToCoordinates"])(t),i="polyline"===t.type?t.paths:t.rings;for(let o=0;o<s.length;o++){const t=s[o];for(let o=0;o<t.length;o++)t[o]=l(t[o],n,e,r)}return"paths"in t?t.paths=i:t.rings=i,t}function s(t,n,e,s,i){const a=t.clone(),m=s.resolution;if("point"===a.type){if(i)r(a,n*m,-e*m);else{const t=s.state.transform,o=s.state.inverseTransform,r=t[0]*a.x+t[2]*a.y+t[4],i=t[1]*a.x+t[3]*a.y+t[5];a.x=o[0]*(r+n)+o[2]*(i+e)+o[4],a.y=o[1]*(r+n)+o[3]*(i+e)+o[5]}return a}if("multipoint"===a.type){if(i)r(a,n*m,-e*m);else{const t=a.points,o=s.state.transform,r=s.state.inverseTransform;for(let s=0;s<t.length;s++){const i=t[s],a=o[0]*i[0]+o[2]*i[1]+o[4],m=o[1]*i[0]+o[3]*i[1]+o[5],l=r[0]*(a+n)+r[2]*(m+e)+r[4],p=r[1]*(a+n)+r[3]*(m+e)+r[5];t[s]=x(i,l,p,void 0)}}return a}if("extent"===a.type){if(i)r(a,n*m,-e*m);else{const t=s.state.transform,o=s.state.inverseTransform,r=t[0]*a.xmin+t[2]*a.ymin+t[4],i=t[1]*a.xmin+t[3]*a.ymin+t[5],m=t[0]*a.xmax+t[2]*a.ymax+t[4],l=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=o[0]*(r+n)+o[2]*(i+e)+o[4],a.ymin=o[1]*(r+n)+o[3]*(i+e)+o[5],a.xmax=o[0]*(m+n)+o[2]*(l+e)+o[4],a.ymax=o[1]*(m+n)+o[3]*(l+e)+o[5]}return a}if(i)r(a,n*m,-e*m);else{const t=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__["geometryToCoordinates"])(a),r="polyline"===a.type?a.paths:a.rings,i=s.state.transform,m=s.state.inverseTransform;for(let o=0;o<t.length;o++){const r=t[o];for(let t=0;t<r.length;t++){const o=r[t],s=i[0]*o[0]+i[2]*o[1]+i[4],a=i[1]*o[0]+i[3]*o[1]+i[5],l=m[0]*(s+n)+m[2]*(a+e)+m[4],p=m[1]*(s+n)+m[3]*(a+e)+m[5];r[t]=x(o,l,p,void 0)}}"paths"in a?a.paths=r:a.rings=r}return a}function i(t,r,s,i){if("point"===t.type){const{x:n,y:e}=t,o=i?i[0]:n,a=i?i[1]:e,m=t.clone(),l=(n-o)*r+o,x=(e-a)*s+a;return m.x=l,m.y=x,m}if("multipoint"===t.type){const a=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__["geometryToCoordinates"])(t),m=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(),[l,p,y,f]=Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__["getRingsOrPathsBounds"])(m,[a]),u=i?i[0]:(l+y)/2,c=i?i[1]:(f+p)/2,h=t.clone(),g=h.points;for(let t=0;t<g.length;t++){const n=g[t],[e,o]=n,i=(e-u)*r+u,a=(o-c)*s+c;g[t]=x(n,i,a,void 0)}return h}if("extent"===t.type){const{xmin:n,xmax:e,ymin:o,ymax:a}=t,m=i?i[0]:(n+e)/2,l=i?i[1]:(a+o)/2,x=t.clone();if(x.xmin=(n-m)*r+m,x.ymax=(a-l)*s+l,x.xmax=(e-m)*r+m,x.ymin=(o-l)*s+l,x.xmin>x.xmax){const t=x.xmin,n=x.xmax;x.xmin=n,x.xmax=t}if(x.ymin>x.ymax){const t=x.ymin,n=x.ymax;x.ymin=n,x.ymax=t}return x}const a=Object(_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__["geometryToCoordinates"])(t),m=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(),[l,p,y,f]=Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__["getRingsOrPathsBounds"])(m,a),u=i?i[0]:(l+y)/2,c=i?i[1]:(f+p)/2,h=t.clone(),g="polyline"===h.type?h.paths:h.rings;for(let n=0;n<a.length;n++){const t=a[n];for(let e=0;e<t.length;e++){const o=t[e],[i,a]=o,m=(i-u)*r+u,l=(a-c)*s+c;g[n][e]=x(o,m,l,void 0)}}return"paths"in h?h.paths=g:h.rings=g,h}function a(t,n,e,o,r,s){const i=Math.sqrt((e-t)*(e-t)+(o-n)*(o-n));return Math.sqrt((r-t)*(r-t)+(s-n)*(s-n))/i}function m(n,e,o){const r=Math.atan2(e.y-o.y,e.x-o.x)-Math.atan2(n.y-o.y,n.x-o.x),s=Math.atan2(Math.sin(r),Math.cos(r));return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["rad2deg"])(s)}function l(t,n,e,o){return x(t,t[0]+n,t[1]+e,null!=t[2]&&null!=o?t[2]+o:void 0)}function x(t,n,e,o){const r=[n,e];return t.length>2&&r.push(null!=o?o:t[2]),t.length>3&&r.push(t[3]),r}


/***/ })

}]);
//# sourceMappingURL=views-2d-interactive-editingTools-js.js.map