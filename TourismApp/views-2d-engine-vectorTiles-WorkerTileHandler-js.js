(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-2d-engine-vectorTiles-WorkerTileHandler-js"],{

/***/ "2yHJ":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/config.js ***!
  \**************************************************************************************/
/*! exports provided: COLLISION_GRID_CELL_SIZE, DECLUTTER_BUDGET, DECLUTTER_TILES, FADE_DURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_GRID_CELL_SIZE", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLUTTER_BUDGET", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLUTTER_TILES", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_DURATION", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=!0,t=32,c=1.5,e=200;


/***/ }),

/***/ "4FHc":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/IndexMemoryBuffer.js ***!
  \************************************************************************************/
/*! exports provided: PointElementMemoryBuffer, TriangleIndexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointElementMemoryBuffer", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleIndexBuffer", function() { return r; });
/* harmony import */ var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryBuffer.js */ "rgtN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(12)}add(s,r,t){const e=this.array;e.push(s),e.push(r),e.push(t)}}class t extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(4)}add(s){this.array.push(s)}}


/***/ }),

/***/ "8NBV":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SourceLayerData.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(t){for(this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=t.clone();t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(t.processMessage(e._parseValue));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}getData(){return this._pbfLayer}static _parseValue(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null}}


/***/ }),

/***/ "9dpd":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/SymbolBucket.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return m; });
/* harmony import */ var _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/BidiEngine.js */ "179/");
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/string.js */ "s7YA");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GeometryUtils.js */ "OxmL");
/* harmony import */ var _Placement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Placement.js */ "ixhk");
/* harmony import */ var _TextShaping_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TextShaping.js */ "ynYs");
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseBucket.js */ "vgmk");
/* harmony import */ var _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/StyleLayer.js */ "Ip4x");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webgl/Geometry.js */ "OXZQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=10;function y(e,t){return e.iconMosaicItem&&t.iconMosaicItem?e.iconMosaicItem.page===t.iconMosaicItem.page?0:e.iconMosaicItem.page-t.iconMosaicItem.page:e.iconMosaicItem&&!t.iconMosaicItem?1:!e.iconMosaicItem&&t.iconMosaicItem?-1:0}class m extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(e,t,n,i,s,a,o,r){super(e,t,r.getSpriteItems()),this.type=3,this._markerMap=new Map,this._glyphMap=new Map,this._glyphBufferDataStorage=new Map,this._isIconSDF=!1,this._iconVertexBuffer=n,this._iconIndexBuffer=i,this._textVertexBuffer=s,this._textIndexBuffer=a,this._placementEngine=o,this._workerTileHandler=r}get markerPageMap(){return this._markerMap}get glyphsPageMap(){return this._glyphMap}get symbolInstances(){return this._symbolInstances}getResources(e,n,i){const s=this.layer,a=this.zoom;e&&e.setExtent(this.layerExtent);const o=s.getLayoutProperty("icon-image"),r=s.getLayoutProperty("text-field");let l=s.getLayoutProperty("text-transform"),h=s.getLayoutProperty("text-font");const x=[];let c,d,g,f;o&&!o.isDataDriven&&(c=o.getValue(a)),r&&!r.isDataDriven&&(d=r.getValue(a)),l&&l.isDataDriven||(g=s.getLayoutValue("text-transform",a),l=null),h&&h.isDataDriven||(f=s.getLayoutValue("text-font",a),h=null);for(const y of this._features){const u=y.getGeometry(e);if(!u||0===u.length)continue;let p,_;o&&(p=o.isDataDriven?o.getValue(a,y):this._replaceKeys(c,y.values),p&&n(p));let M=!1;if(r&&(_=r.isDataDriven?r.getValue(a,y):this._replaceKeys(d,y.values),_)){switch(_=_.replace(/\\n/g,"\n"),l&&(g=l.getValue(a,y)),g){case 2:_=_.toLowerCase();break;case 1:_=_.toUpperCase()}if(m._bidiEngine.hasBidiChar(_)){let e;e="rtl"===m._bidiEngine.checkContextual(_)?"IDNNN":"ICNNN",_=m._bidiEngine.bidiTransform(_,e,"VLYSN"),M=!0}const e=_.length;if(e>0){h&&(f=h.getValue(a,y));for(const t of f){let n=i[t];n||(n=i[t]=new Set);for(let t=0;t<e;t++){const e=_.charCodeAt(t);n.add(e)}}}}if(!p&&!_)continue;const b=s.getLayoutValue("symbol-sort-key",a,y),P={feature:y,sprite:p,label:_,rtl:M,geometry:u,hash:(_?Object(_core_string_js__WEBPACK_IMPORTED_MODULE_1__["numericHash"])(_):0)^(p?Object(_core_string_js__WEBPACK_IMPORTED_MODULE_1__["numericHash"])(p):0),priority:b,textFont:f};x.push(P)}this._symbolFeatures=x}processFeatures(e){e&&e.setExtent(this.layerExtent);const t=this.layer,i=this.zoom,s=t.getLayoutValue("symbol-placement",i),x=0!==s,g=t.getLayoutValue("symbol-spacing",i)*_Placement_js__WEBPACK_IMPORTED_MODULE_3__["TILE_PIXEL_RATIO"],f=t.getLayoutProperty("icon-image"),u=t.getLayoutProperty("text-field"),p=f?new _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_6__["IconLayout"](t,i,x):null,_=u?new _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_6__["TextLayout"](t,i,x):null,M=this._workerTileHandler;let b;f&&(b=M.getSpriteItems()),this._iconIndexStart=3*this._iconIndexBuffer.index,this._textIndexStart=3*this._textIndexBuffer.index,this._iconIndexCount=0,this._textIndexCount=0,this._markerMap.clear(),this._glyphMap.clear();const P=[];let I=1;_&&_.size&&(I=_.size/_TextShaping_js__WEBPACK_IMPORTED_MODULE_4__["SDF_GLYPH_SIZE"]);const A=_?_.maxAngle*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["C_DEG_TO_RAD"]:0,V=_?_.size*_Placement_js__WEBPACK_IMPORTED_MODULE_3__["TILE_PIXEL_RATIO"]:0;for(const n of this._symbolFeatures){let e;p&&b&&n.sprite&&(e=b[n.sprite],e&&e.sdf&&(this._isIconSDF=!0));let t;!!e&&p.update(i,n.feature);let c=0;const d=n.label;if(d){_.update(i,n.feature);const e=x?_.keepUpright:_.writingMode&&_.writingMode.indexOf(1)>=0;let s=.5;switch(_.anchor){case 5:case 1:case 7:s=0;break;case 6:case 2:case 8:s=1}let o=.5;switch(_.anchor){case 5:case 3:case 6:o=0;break;case 7:case 4:case 8:o=1}let r=.5;switch(_.justify){case 0:r=s;break;case 1:r=0;break;case 3:r=1}const g=_.letterSpacing*_TextShaping_js__WEBPACK_IMPORTED_MODULE_4__["SDF_GLYPH_SIZE"],f=x?0:_.maxWidth*_TextShaping_js__WEBPACK_IMPORTED_MODULE_4__["SDF_GLYPH_SIZE"],y=_.lineHeight*_TextShaping_js__WEBPACK_IMPORTED_MODULE_4__["SDF_GLYPH_SIZE"],m=n.textFont.map((e=>M.getGlyphItems(e)));if(t=new _TextShaping_js__WEBPACK_IMPORTED_MODULE_4__["TextShaping"](m,f,y,g,s,o,r).getShaping(d,n.rtl,e),t&&t.length>0){let e=1e30,n=-1e30;for(const i of t)e=Math.min(e,i.x),n=Math.max(n,i.x);c=(n-e+2*_TextShaping_js__WEBPACK_IMPORTED_MODULE_4__["SDF_GLYPH_SIZE"])*I*_Placement_js__WEBPACK_IMPORTED_MODULE_3__["TILE_PIXEL_RATIO"]}}for(let i of n.geometry){const l=[];if(1===s){if(t&&t.length>0&&_&&_.size){const e=_.size*_Placement_js__WEBPACK_IMPORTED_MODULE_3__["TILE_PIXEL_RATIO"]*(2+Math.min(2,4*Math.abs(_.offset[1])));i=m._smoothVertices(i,e)}m._pushAnchors(l,i,g,c)}else 2===s?m._pushCenterAnchor(l,i):3===n.feature.type?m._pushCentroid(l,i):l.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_3__["Anchor"](i[0].x,i[0].y));for(const s of l){if(s.x<0||s.x>_Placement_js__WEBPACK_IMPORTED_MODULE_3__["TILE_COORD_SIZE"]||s.y<0||s.y>_Placement_js__WEBPACK_IMPORTED_MODULE_3__["TILE_COORD_SIZE"])continue;if(x&&c>0&&0===_.rotationAlignment&&!m._honorsTextMaxAngle(i,s,c,A,V))continue;const a={shaping:t,line:i,iconMosaicItem:e,anchor:s,symbolFeature:n,textColliders:[],iconColliders:[],textVertexRanges:[],iconVertexRanges:[]};P.push(a),this._processFeature(a,p,_)}}}P.sort(y),this._addPlacedGlyphs(),this._symbolInstances=P}serialize(){let e=11;e+=this.layerUIDs.length,e+=3*this.markerPageMap.size,e+=3*this.glyphsPageMap.size,e+=m.symbolsSerializationLength(this._symbolInstances),e+=this._iconVertexBuffer.array.length,e+=this._iconIndexBuffer.array.length,e+=this._textVertexBuffer.array.length,e+=this._textIndexBuffer.array.length;const t=new Uint32Array(e),n=new Int32Array(t.buffer),i=new Float32Array(t.buffer);let s=0;t[s++]=this.type,t[s++]=this.layerUIDs.length;for(let a=0;a<this.layerUIDs.length;a++)t[s++]=this.layerUIDs[a];t[s++]=this._isIconSDF?1:0,t[s++]=this.markerPageMap.size;for(const[a,[o,r]]of this.markerPageMap)t[s++]=a,t[s++]=o,t[s++]=r;t[s++]=this.glyphsPageMap.size;for(const[a,[o,r]]of this.glyphsPageMap)t[s++]=a,t[s++]=o,t[s++]=r;t[s++]=this._iconVertexBuffer.index/4,t[s++]=this._textVertexBuffer.index/4,s=m.serializeSymbols(t,n,i,s,this._symbolInstances),t[s++]=this._iconVertexBuffer.array.length;for(let a=0;a<this._iconVertexBuffer.array.length;a++)n[s++]=this._iconVertexBuffer.array[a];t[s++]=this._iconIndexBuffer.array.length;for(let a=0;a<this._iconIndexBuffer.array.length;a++)t[s++]=this._iconIndexBuffer.array[a];t[s++]=this._textVertexBuffer.array.length;for(let a=0;a<this._textVertexBuffer.array.length;a++)n[s++]=this._textVertexBuffer.array[a];t[s++]=this._textIndexBuffer.array.length;for(let a=0;a<this._textIndexBuffer.array.length;a++)t[s++]=this._textIndexBuffer.array[a];return t.buffer}static symbolsSerializationLength(e){let t=0;t+=1;for(const n of e||[]){t+=4,t+=1;for(const e of n.textColliders)t+=f;for(const e of n.iconColliders)t+=f;t+=1,t+=2*n.textVertexRanges.length,t+=1,t+=2*n.iconVertexRanges.length}return t}static serializeSymbols(e,t,n,i,s){s=s||[],t[i++]=s.length;for(const a of s){t[i++]=a.anchor.x,t[i++]=a.anchor.y,t[i++]=a.symbolFeature.hash,t[i++]=a.symbolFeature.priority,t[i++]=a.textColliders.length+a.iconColliders.length;for(const e of a.textColliders)t[i++]=e.xTile,t[i++]=e.yTile,t[i++]=e.dxPixels,t[i++]=e.dyPixels,t[i++]=e.hard?1:0,t[i++]=e.partIndex,n[i++]=e.minLod,n[i++]=e.maxLod,t[i++]=e.width,t[i++]=e.height;for(const e of a.iconColliders)t[i++]=e.xTile,t[i++]=e.yTile,t[i++]=e.dxPixels,t[i++]=e.dyPixels,t[i++]=e.hard?1:0,t[i++]=e.partIndex,n[i++]=e.minLod,n[i++]=e.maxLod,t[i++]=e.width,t[i++]=e.height;t[i++]=a.textVertexRanges.length;for(const[e,n]of a.textVertexRanges)t[i++]=e,t[i++]=n;t[i++]=a.iconVertexRanges.length;for(const[e,n]of a.iconVertexRanges)t[i++]=e,t[i++]=n}return i}_replaceKeys(e,t){return e.replace(/{([^{}]+)}/g,(function(e,n){return n in t?t[n]:""}))}_processFeature(e,t,n){const{line:s,iconMosaicItem:a,shaping:o,anchor:r}=e,l=this.zoom,h=this.layer,x=!!a;let c=!0;x&&(c=t.optional||!a);const d=o&&o.length>0;let g,f,y=!0;if(d&&(y=n.optional),x&&(g=this._placementEngine.getIconPlacement(r,a,t)),(g||c)&&(d&&(f=this._placementEngine.getTextPlacement(r,o,s,n)),f||y)){if(g&&f||(y||c?y||f?c||g||(f=null):g=null:(g=null,f=null)),f){const t=h.hasDataDrivenText?h.textMaterial.encodeAttributes(e.symbolFeature.feature,l,h):null;if(this._storePlacedGlyphs(e,f.shapes,l,n.rotationAlignment,t),f.textColliders){e.textColliders=f.textColliders;for(const e of f.textColliders){e.minLod=Math.max(l+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.minLod),0),e.maxLod=Math.min(l+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.maxLod),25);const t=e.angle;if(t){const n=Math.cos(t),i=Math.sin(t),s=e.dxPixels*n-e.dyPixels*i,a=e.dxPixels*i+e.dyPixels*n,o=(e.dxPixels+e.width)*n-e.dyPixels*i,r=(e.dxPixels+e.width)*i+e.dyPixels*n,l=e.dxPixels*n-(e.dyPixels+e.height)*i,h=e.dxPixels*i+(e.dyPixels+e.height)*n,x=(e.dxPixels+e.width)*n-(e.dyPixels+e.height)*i,c=(e.dxPixels+e.width)*i+(e.dyPixels+e.height)*n,d=Math.min(s,o,l,x),g=Math.max(s,o,l,x),f=Math.min(a,r,h,c),y=Math.max(a,r,h,c);e.dxPixels=d,e.dyPixels=f,e.width=g-d,e.height=y-f}}}}if(g){const n=h.hasDataDrivenIcon?h.iconMaterial.encodeAttributes(e.symbolFeature.feature,l,h):null;if(this._addPlacedIcons(e,g.shapes,l,a.page,1===t.rotationAlignment,n),g.iconColliders){e.iconColliders=g.iconColliders;for(const e of g.iconColliders){e.minLod=Math.max(l+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.minLod),0),e.maxLod=Math.min(l+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.maxLod),25);const t=e.angle;if(t){const n=Math.cos(t),i=Math.sin(t),s=e.dxPixels*n-e.dyPixels*i,a=e.dxPixels*i+e.dyPixels*n,o=(e.dxPixels+e.width)*n-e.dyPixels*i,r=(e.dxPixels+e.width)*i+e.dyPixels*n,l=e.dxPixels*n-(e.dyPixels+e.height)*i,h=e.dxPixels*i+(e.dyPixels+e.height)*n,x=(e.dxPixels+e.width)*n-(e.dyPixels+e.height)*i,c=(e.dxPixels+e.width)*i+(e.dyPixels+e.height)*n,d=Math.min(s,o,l,x),g=Math.max(s,o,l,x),f=Math.min(a,r,h,c),y=Math.max(a,r,h,c);e.dxPixels=d,e.dyPixels=f,e.width=g-d,e.height=y-f}}}}}}_addPlacedIcons(e,t,n,s,a,o){const r=Math.max(n-1,0),l=this._iconVertexBuffer,h=this._iconIndexBuffer,x=this._markerMap;for(const c of t){const t=a?0:Math.max(n+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(c.minzoom),r),d=a?25:Math.min(n+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(c.maxzoom),25);if(d<=t)continue;const g=c.tl,f=c.tr,y=c.bl,m=c.br,u=c.mosaicRect,p=c.labelAngle,_=c.minAngle,M=c.maxAngle,b=c.anchor,P=l.index,I=u.x,A=u.y,V=I+u.width,w=A+u.height,L=l.index;l.add(b.x,b.y,g.x,g.y,I,A,p,_,M,t,d,o),l.add(b.x,b.y,f.x,f.y,V,A,p,_,M,t,d,o),l.add(b.x,b.y,y.x,y.y,I,w,p,_,M,t,d,o),l.add(b.x,b.y,m.x,m.y,V,w,p,_,M,t,d,o),e.iconVertexRanges.length>0&&e.iconVertexRanges[0][0]+e.iconVertexRanges[0][1]===L?e.iconVertexRanges[0][1]+=4:e.iconVertexRanges.push([L,4]),h.add(P+0,P+1,P+2),h.add(P+1,P+2,P+3),x.has(s)?x.get(s)[1]+=6:x.set(s,[this._iconIndexStart+this._iconIndexCount,6]),this._iconIndexCount+=6}}_addPlacedGlyphs(){const e=this._textVertexBuffer,t=this._textIndexBuffer,n=this._glyphMap;for(const[i,s]of this._glyphBufferDataStorage)for(const a of s){const s=e.index,o=a.symbolInstance,r=a.ddAttributes,l=e.index;e.add(a.glyphAnchor[0],a.glyphAnchor[1],a.tl[0],a.tl[1],a.xmin,a.ymin,a.labelAngle,a.minAngle,a.maxAngle,a.minLod,a.maxLod,r),e.add(a.glyphAnchor[0],a.glyphAnchor[1],a.tr[0],a.tr[1],a.xmax,a.ymin,a.labelAngle,a.minAngle,a.maxAngle,a.minLod,a.maxLod,r),e.add(a.glyphAnchor[0],a.glyphAnchor[1],a.bl[0],a.bl[1],a.xmin,a.ymax,a.labelAngle,a.minAngle,a.maxAngle,a.minLod,a.maxLod,r),e.add(a.glyphAnchor[0],a.glyphAnchor[1],a.br[0],a.br[1],a.xmax,a.ymax,a.labelAngle,a.minAngle,a.maxAngle,a.minLod,a.maxLod,r),o.textVertexRanges.length>0&&o.textVertexRanges[0][0]+o.textVertexRanges[0][1]===l?o.textVertexRanges[0][1]+=4:o.textVertexRanges.push([l,4]),t.add(s+0,s+1,s+2),t.add(s+1,s+2,s+3),n.has(i)?n.get(i)[1]+=6:n.set(i,[this._textIndexStart+this._textIndexCount,6]),this._textIndexCount+=6}this._glyphBufferDataStorage.clear()}_storePlacedGlyphs(e,t,n,s,a){const o=Math.max(n-1,0),r=1===s;let l,h,x,c,d,g,f,y,m,u,p;for(const _ of t){if(l=r?0:Math.max(n+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_.minzoom),o),h=r?25:Math.min(n+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(_.maxzoom),25),h<=l)continue;x=_.tl,c=_.tr,d=_.bl,g=_.br,f=_.labelAngle,y=_.minAngle,m=_.maxAngle,u=_.anchor,p=_.mosaicRect,this._glyphBufferDataStorage.has(_.page)||this._glyphBufferDataStorage.set(_.page,[]);this._glyphBufferDataStorage.get(_.page).push({glyphAnchor:[u.x,u.y],tl:[x.x,x.y],tr:[c.x,c.y],bl:[d.x,d.y],br:[g.x,g.y],xmin:p.x,ymin:p.y,xmax:p.x+p.width,ymax:p.y+p.height,labelAngle:f,minAngle:y,maxAngle:m,minLod:l,maxLod:h,placementLod:o,symbolInstance:e,ddAttributes:a})}}static _pushAnchors(e,t,n,i){n+=i;let a=0;const r=t.length-1;for(let s=0;s<r;s++)a+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"].distance(t[s],t[s+1]);let l=i||n;if(l*=.5,a<=l)return;const h=l/a;let x=0,c=-(n=a/Math.max(Math.round(a/n),1))/2;const d=t.length-1;for(let g=0;g<d;g++){const i=t[g],a=t[g+1],r=a.x-i.x,l=a.y-i.y,d=Math.sqrt(r*r+l*l);let f;for(;c+n<x+d;){c+=n;const t=(c-x)/d,y=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(i.x,a.x,t),m=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(i.y,a.y,t);void 0===f&&(f=Math.atan2(l,r)),e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_3__["Anchor"](y,m,f,g,h))}x+=d}}static _pushCenterAnchor(e,t){let n=0;const i=t.length-1;for(let s=0;s<i;s++)n+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"].distance(t[s],t[s+1]);const a=n/2;let r=0;const l=t.length-1;for(let h=0;h<l;h++){const n=t[h],i=t[h+1],l=i.x-n.x,x=i.y-n.y,c=Math.sqrt(l*l+x*x);if(a<r+c){const t=(a-r)/c,d=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(n.x,i.x,t),g=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(n.y,i.y,t),f=Math.atan2(x,l);return void e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_3__["Anchor"](d,g,f,h,0))}r+=c}}static _deviation(e,t,n){const i=(t.x-e.x)*(n.x-t.x)+(t.y-e.y)*(n.y-t.y),s=(t.x-e.x)*(n.y-t.y)-(t.y-e.y)*(n.x-t.x);return Math.atan2(s,i)}static _honorsTextMaxAngle(e,t,n,i,s){let a=0;const o=n/2;let r=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"](t.x,t.y),l=t.segment+1;for(;a>-o;){if(--l,l<0)return!1;a-=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"].distance(e[l],r),r=e[l]}a+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"].distance(e[l],e[l+1]);const h=[];let x=0;const c=e.length;for(;a<o;){const t=e[l];let n,o=l;do{if(++o,o===c)return!1;n=e[o]}while(n.isEqual(t));let r,d=o;do{if(++d,d===c)return!1;r=e[d]}while(r.isEqual(n));const f=this._deviation(t,n,r);for(h.push({deviation:f,distToAnchor:a}),x+=f;a-h[0].distToAnchor>s;)x-=h.shift().deviation;if(Math.abs(x)>i)return!1;a+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"].distance(n,r),l=o}return!0}static _smoothVertices(e,t){if(t<=0)return e;let n=e.length;if(n<3)return e;const i=[];let s=0,a=0;i.push(0);for(let y=1;y<n;y++){const t=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"].distance(e[y],e[y-1]);t>0&&(s+=t,i.push(s),a++,a!==y&&(e[a]=e[y]))}if(n=a+1,n<3)return e;t=Math.min(t,.2*s);const o=e[0].x,r=e[0].y,l=e[n-1].x,h=e[n-1].y,x=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"].sub(e[0],e[1]);x.normalize(),e[0].x+=t*x.x,e[0].y+=t*x.y,x.assignSub(e[n-1],e[n-2]),x.normalize(),e[n-1].x+=t*x.x,e[n-1].y+=t*x.y,i[0]-=t,i[n-1]+=t;const c=[];c.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"](o,r));const d=1e-6,f=.5*t;for(let y=1;y<n-1;y++){let s=0,a=0,o=0;for(let n=y-1;n>=0;n--){const r=f+i[n+1]-i[y];if(r<0)break;const l=i[n+1]-i[n],h=i[y]-i[n]<f?1:r/l;if(h<d)break;const x=h*h,c=h*r-.5*x*l,g=h*l/t,m=e[n+1],u=e[n].x-m.x,p=e[n].y-m.y;s+=g/c*(m.x*h*r+.5*x*(r*u-l*m.x)-x*h*l*u/3),a+=g/c*(m.y*h*r+.5*x*(r*p-l*m.y)-x*h*l*p/3),o+=g}for(let r=y+1;r<n;r++){const n=f-i[r-1]+i[y];if(n<0)break;const l=i[r]-i[r-1],h=i[r]-i[y]<f?1:n/l;if(h<d)break;const x=h*h,c=h*n-.5*x*l,g=h*l/t,m=e[r-1],u=e[r].x-m.x,p=e[r].y-m.y;s+=g/c*(m.x*h*n+.5*x*(n*u-l*m.x)-x*h*l*u/3),a+=g/c*(m.y*h*n+.5*x*(n*p-l*m.y)-x*h*l*p/3),o+=g}c.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"](s/o,a/o))}return c.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["Point"](l,h)),e[0].x=o,e[0].y=r,e[n-1].x=l,e[n-1].y=h,c}static _pushCentroid(e,t){const n=0,i=0,s=4096,a=4096,r=t.length-1;let l=0,h=0,x=0,c=t[0].x,d=t[0].y;c>s&&(c=s),c<n&&(c=n),d>a&&(d=a),d<i&&(d=i);for(let o=1;o<r;o++){let e=t[o].x,r=t[o].y,g=t[o+1].x,f=t[o+1].y;e>s&&(e=s),e<n&&(e=n),r>a&&(r=a),r<i&&(r=i),g>s&&(g=s),g<n&&(g=n),f>a&&(f=a),f<i&&(f=i);const y=(e-c)*(f-d)-(g-c)*(r-d);l+=y*(c+e+g),h+=y*(d+r+f),x+=y}l/=3*x,h/=3*x,isNaN(l)||isNaN(h)||e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_3__["Anchor"](l,h))}}m._bidiEngine=new _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "DtuG":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/LineBucket.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseBucket.js */ "vgmk");
/* harmony import */ var _webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webgl/TurboLine.js */ "Jimw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=65535;class n extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(e,i,n,r,a){super(e,i,n),this.type=2,this._tessellationOptions={pixelCoordRatio:8,halfWidth:0,offset:0},this._patternMap=new Map,this.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_ddValues:null},this.tessellationProperties._lineVertexBuffer=r,this.tessellationProperties._lineIndexBuffer=a,this._lineTessellator=new _webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_1__["LineTessellation"](s(this.tessellationProperties),l(this.tessellationProperties),e.canUseThinTessellation)}get lineIndexStart(){return this._lineIndexStart}get lineIndexCount(){return this._lineIndexCount}getResources(e,t,i){const n=this.layer,s=this.zoom,l=n.hasDataDrivenLine,r=n.getPaintProperty("line-pattern"),a=n.getPaintProperty("line-dasharray"),o=n.getLayoutProperty("line-cap");if(!r&&!a)return;const u=(null==o?void 0:o.getValue(s))||0,f=null==o?void 0:o.isDataDriven;if(l){const e=null==r?void 0:r.isDataDriven,i=null==a?void 0:a.isDataDriven;if(!e&&!i)return;for(const l of this._features)t(e?r.getValue(s,l):this._getDashArrayKey(l,s,n,a,f,o,u))}else if(r)t(r.getValue(s));else if(a){const e=a.getValue(s);t(n.getDashKey(e,u))}}processFeatures(e){var t,i,n,s,l,r;this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index,this._lineIndexCount=0;const a=this.layer,o=this.zoom,u=this._features,f=this._tessellationOptions,{hasDataDrivenLine:h,lineMaterial:p}=a;e&&e.setExtent(this.layerExtent);const d=a.getPaintProperty("line-pattern"),g=a.getPaintProperty("line-dasharray"),y=null==d?void 0:d.isDataDriven,c=null==g?void 0:g.isDataDriven;let _;_=a.getLayoutProperty("line-cap");const x=null!=(t=_)&&t.isDataDriven?_:null,D=x?null:a.getLayoutValue("line-cap",o),V=D||0,P=!!x;_=a.getLayoutProperty("line-join");const m=null!=(i=_)&&i.isDataDriven?_:null,I=m?null:a.getLayoutValue("line-join",o);_=a.getLayoutProperty("line-miter-limit");const L=null!=(n=_)&&n.isDataDriven?_:null,v=L?null:a.getLayoutValue("line-miter-limit",o);_=a.getLayoutProperty("line-round-limit");const B=null!=(s=_)&&s.isDataDriven?_:null,T=B?null:a.getLayoutValue("line-round-limit",o);_=a.getPaintProperty("line-width");const j=null!=(l=_)&&l.isDataDriven?_:null,A=j?null:a.getPaintValue("line-width",o);_=a.getPaintProperty("line-offset");const b=null!=(r=_)&&r.isDataDriven?_:null,w=b?null:a.getPaintValue("line-offset",o);if(y||c){const t=[];for(const i of u){const n=y?d.getValue(o,i):this._getDashArrayKey(i,o,a,g,P,x,V),s=this._spriteInfo[n];if(!s||!s.rect)continue;const l=p.encodeAttributes(i,o,a,s),r=i.getGeometry(e);t.push({ddAttributes:l,page:s.page,cap:x?x.getValue(o,i):D,join:m?m.getValue(o,i):I,miterLimit:L?L.getValue(o,i):v,roundLimit:B?B.getValue(o,i):T,halfWidth:.5*(j?j.getValue(o,i):A),offset:b?b.getValue(o,i):w,geometry:r})}t.sort(((e,t)=>e.page-t.page)),f.textured=!0;for(const{ddAttributes:e,page:i,cap:n,join:s,miterLimit:l,roundLimit:r,halfWidth:a,offset:o,geometry:u}of t)f.capType=n,f.joinType=s,f.miterLimit=l,f.roundLimit=r,f.halfWidth=a,f.offset=o,this._processFeature(u,e,i)}else{f.textured=!(!d&&!g),f.capType=D,f.joinType=I,f.miterLimit=v,f.roundLimit=T,f.halfWidth=.5*A,f.offset=w;for(const t of u){const i=h?p.encodeAttributes(t,o,a):null;x&&(f.capType=x.getValue(o,t)),m&&(f.joinType=m.getValue(o,t)),L&&(f.miterLimit=L.getValue(o,t)),B&&(f.roundLimit=B.getValue(o,t)),j&&(f.halfWidth=.5*j.getValue(o,t)),b&&(f.offset=b.getValue(o,t));const n=t.getGeometry(e);this._processFeature(n,i)}}}serialize(){let e=6;e+=this.layerUIDs.length,e+=this.tessellationProperties._lineVertexBuffer.array.length,e+=this.tessellationProperties._lineIndexBuffer.array.length,e+=3*this._patternMap.size+1;const t=new Uint32Array(e),i=new Int32Array(t.buffer);let n=0;t[n++]=this.type,t[n++]=this.layerUIDs.length;for(let r=0;r<this.layerUIDs.length;r++)t[n++]=this.layerUIDs[r];t[n++]=this._lineIndexStart,t[n++]=this._lineIndexCount;const s=this._patternMap,l=s.size;if(t[n++]=l,l>0)for(const[r,[a,o]]of s)t[n++]=r,t[n++]=a,t[n++]=o;t[n++]=this.tessellationProperties._lineVertexBuffer.array.length;for(let r=0;r<this.tessellationProperties._lineVertexBuffer.array.length;r++)i[n++]=this.tessellationProperties._lineVertexBuffer.array[r];t[n++]=this.tessellationProperties._lineIndexBuffer.array.length;for(let r=0;r<this.tessellationProperties._lineIndexBuffer.array.length;r++)t[n++]=this.tessellationProperties._lineIndexBuffer.array[r];return t.buffer}_processFeature(e,t,i){if(!e)return;const n=e.length;for(let s=0;s<n;s++)this._processGeometry(e[s],t,i)}_processGeometry(e,t,n){if(e.length<2)return;const s=.001;let l,r,a=e[0],o=1;for(;o<e.length;)l=e[o].x-a.x,r=e[o].y-a.y,l*l+r*r<s*s?e.splice(o,1):(a=e[o],++o);if(e.length<2)return;const u=this.tessellationProperties._lineIndexBuffer,f=3*u.index;this._tessellationOptions.initialDistance=0,this._tessellationOptions.wrapDistance=i,this.tessellationProperties._ddValues=t,this._lineTessellator.tessellate(e,this._tessellationOptions);const h=3*u.index-f;if(void 0!==n){const e=this._patternMap,t=e.get(n);t?t[1]+=h:e.set(n,[f+this._lineIndexCount,h])}this._lineIndexCount+=h}_getDashArrayKey(e,t,i,n,s,l,r){const a=s?l.getValue(t,e):r,o=n.getValue(t,e);return i.getDashKey(o,a)}}const s=e=>(t,i,n,s,l,r,a,o,u,f,h)=>(e._lineVertexBuffer.add(t,i,a,o,n,s,l,r,u,f,h,e._ddValues),e._lineVertexBuffer.index-1),l=e=>(t,i,n)=>{e._lineIndexBuffer.add(t,i,n)};


/***/ }),

/***/ "HQFP":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js ***!
  \**************************************************************************/
/*! exports provided: C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, interpolate, log2, positiveMod, radToByte, sqr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_256_TO_RAD", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_2PI", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_256", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_INFINITY", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI_BY_2", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_RAD_TO_256", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2_INV", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degToByte", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log2", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveMod", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radToByte", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqr", function() { return T; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=256/360,f=t/180,i=1.414213562,I=1/i,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(n*c,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}


/***/ }),

/***/ "IMID":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTile.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _Placement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Placement.js */ "ixhk");
/* harmony import */ var _TileParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TileParser.js */ "mKU8");
/* harmony import */ var _tiling_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tiling/enums.js */ "zJVD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a{constructor(e,t,r,a){this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_4__["TileStatus"].INITIALIZED,this.placementEngine=new _Placement_js__WEBPACK_IMPORTED_MODULE_2__["PlacementEngine"],this.tileKey=e,this.refKeys=t,this._workerTileHandler=r,this._styleRepository=a}release(){this.tileKey="",this.refKeys=null,this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_4__["TileStatus"].INITIALIZED,this._workerTileHandler=null}async parse(s,r,a){const n=a&&a.signal;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n)){const e=()=>{n.removeEventListener("abort",e),this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_4__["TileStatus"].INVALID};n.addEventListener("abort",e)}let o;try{o=await this._parse(s,a)}catch(h){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(h))throw h;return{result:[],transferList:[]}}this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_4__["TileStatus"].READY;const l=[];for(const e of o){const t=e.serialize();l.push(t)}return{result:l,transferList:l.length<=r&&l}}setObsolete(){this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_4__["TileStatus"].INVALID}getLayers(){return this._workerTileHandler.getLayers()}getWorkerTileHandler(){return this._workerTileHandler}async _parse(e,t){const s=e.sourceName2DataAndRefKey;if(0===Object.keys(s).length)return[];this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_4__["TileStatus"].MODIFIED;return new _TileParser_js__WEBPACK_IMPORTED_MODULE_3__["default"](s,this,t.client,this._styleRepository,e.styleLayerUIDs).parse(t)}}


/***/ }),

/***/ "KFs1":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/FillBucket.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
/* harmony import */ var _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/ArrayPool.js */ "VW+2");
/* harmony import */ var _chunks_earcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/earcut.js */ "mBKw");
/* harmony import */ var _geometry_libtess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../geometry/libtess.js */ "DFOt");
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseBucket.js */ "vgmk");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webgl/Geometry.js */ "OXZQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(t,e,i,r,l,n,s){super(t,e,i),this.type=1,this._patternMap=new Map,this._fillVertexBuffer=r,this._fillIndexBuffer=l,this._outlineVertexBuffer=n,this._outlineIndexBuffer=s}get fillIndexStart(){return this._fillIndexStart}get fillIndexCount(){return this._fillIndexCount}get outlineIndexStart(){return this._outlineIndexStart}get outlineIndexCount(){return this._outlineIndexCount}getResources(t,e,i){const r=this.layer,l=this.zoom,n=r.getPaintProperty("fill-pattern");if(n)if(n.isDataDriven)for(const s of this._features)e(n.getValue(l,s),!0);else e(n.getValue(l),!0)}processFeatures(t){this._fillIndexStart=3*this._fillIndexBuffer.index,this._fillIndexCount=0,this._outlineIndexStart=3*this._outlineIndexBuffer.index,this._outlineIndexCount=0;const e=this.layer,i=this.zoom,{fillMaterial:r,outlineMaterial:l,hasDataDrivenFill:n,hasDataDrivenOutline:s}=e;t&&t.setExtent(this.layerExtent);const o=e.getPaintProperty("fill-pattern"),a=null==o?void 0:o.isDataDriven;let f=!o&&e.getPaintValue("fill-antialias",i);if(e.outlineUsesFillColor){if(f&&!e.hasDataDrivenOpacity){const t=e.getPaintValue("fill-opacity",i),r=e.getPaintValue("fill-opacity",i+1);t<1&&r<1&&(f=!1)}if(f&&!e.hasDataDrivenColor){const t=e.getPaintValue("fill-color",i),r=e.getPaintValue("fill-color",i+1);t[3]<1&&r[3]<1&&(f=!1)}}const u=this._features,d=null==t?void 0:t.validateTessellation;if(a){const n=[];for(const a of u){const u=o.getValue(i,a),h=this._spriteInfo[u];if(!h||!h.rect)continue;const x=r.encodeAttributes(a,i,e,h),c=f&&s?l.encodeAttributes(a,i,e):[],_=a.getGeometry(t);n.push({ddFillAttributes:x,ddOutlineAttributes:c,page:h.page,geometry:_}),n.sort(((t,e)=>t.page-e.page));for(const{ddFillAttributes:t,ddOutlineAttributes:i,page:r,geometry:l}of n)this._processFeature(l,f,e.outlineUsesFillColor,t,i,d,r)}}else for(const h of u){const o=n?r.encodeAttributes(h,i,e):null,a=f&&s?l.encodeAttributes(h,i,e):null,u=h.getGeometry(t);this._processFeature(u,f,e.outlineUsesFillColor,o,a,d)}}serialize(){let t=10;t+=this.layerUIDs.length,t+=this._fillVertexBuffer.array.length,t+=this._fillIndexBuffer.array.length,t+=this._outlineVertexBuffer.array.length,t+=this._outlineIndexBuffer.array.length,t+=3*this._patternMap.size+1;const e=new Uint32Array(t),i=new Int32Array(e.buffer);let r=0;e[r++]=this.type,e[r++]=this.layerUIDs.length;for(let s=0;s<this.layerUIDs.length;s++)e[r++]=this.layerUIDs[s];e[r++]=this._fillIndexStart,e[r++]=this._fillIndexCount,e[r++]=this._outlineIndexStart,e[r++]=this._outlineIndexCount;const l=this._patternMap,n=l.size;if(e[r++]=n,n>0)for(const[s,[o,a]]of l)e[r++]=s,e[r++]=o,e[r++]=a;e[r++]=this._fillVertexBuffer.array.length;for(let s=0;s<this._fillVertexBuffer.array.length;s++)i[r++]=this._fillVertexBuffer.array[s];e[r++]=this._fillIndexBuffer.array.length;for(let s=0;s<this._fillIndexBuffer.array.length;s++)e[r++]=this._fillIndexBuffer.array[s];e[r++]=this._outlineVertexBuffer.array.length;for(let s=0;s<this._outlineVertexBuffer.array.length;s++)i[r++]=this._outlineVertexBuffer.array[s];e[r++]=this._outlineIndexBuffer.array.length;for(let s=0;s<this._outlineIndexBuffer.array.length;s++)e[r++]=this._outlineIndexBuffer.array[s];return e.buffer}_processFeature(t,e,i,r,l,s,o){if(!t)return;const a=t.length,f=!l||0===l.length;if(e&&(!i||f))for(let n=0;n<a;n++)this._processOutline(t[n],l);const u=32;let d;for(let h=0;h<a;h++){const e=n._area(t[h]);e>u?(void 0!==d&&this._processFill(t,d,r,s,o),d=[h]):e<-u&&void 0!==d&&d.push(h)}void 0!==d&&this._processFill(t,d,r,s,o)}_processOutline(t,e){const i=this._outlineVertexBuffer,r=this._outlineIndexBuffer,n=r.index;let s,o,a;const f=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](0,0),u=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](0,0),d=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](0,0);let h=-1,x=-1,c=-1,_=-1,y=-1,g=!1;const p=0;let I=t.length;if(I<2)return;const B=t[p];let V=t[I-1];for(;I&&V.isEqual(B);)--I,V=t[I-1];if(!(I-p<2)){for(let l=p;l<I;++l){l===p?(s=t[I-1],o=t[p],a=t[p+1],f.assignSub(o,s),f.normalize(),f.rightPerpendicular()):(s=o,o=a,a=l!==I-1?t[l+1]:t[p],f.assign(u));const n=this._isClipEdge(s,o);-1===_&&(g=n),u.assignSub(a,o),u.normalize(),u.rightPerpendicular();const B=f.x*u.y-f.y*u.x;d.assignAdd(f,u),d.normalize();const V=-d.x*-f.x+-d.y*-f.y;let m=Math.abs(0!==V?1/V:1);m>8&&(m=8),B>=0?(c=i.add(o.x,o.y,f.x,f.y,0,1,e),-1===_&&(_=c),h>=0&&x>=0&&c>=0&&!n&&r.add(h,x,c),x=i.add(o.x,o.y,m*-d.x,m*-d.y,0,-1,e),-1===y&&(y=x),h>=0&&x>=0&&c>=0&&!n&&r.add(h,x,c),h=x,x=c,c=i.add(o.x,o.y,d.x,d.y,0,1,e),h>=0&&x>=0&&c>=0&&!n&&r.add(h,x,c),x=i.add(o.x,o.y,u.x,u.y,0,1,e),h>=0&&x>=0&&c>=0&&!n&&r.add(h,x,c)):(c=i.add(o.x,o.y,m*d.x,m*d.y,0,1,e),-1===_&&(_=c),h>=0&&x>=0&&c>=0&&!n&&r.add(h,x,c),x=i.add(o.x,o.y,-f.x,-f.y,0,-1,e),-1===y&&(y=x),h>=0&&x>=0&&c>=0&&!n&&r.add(h,x,c),h=x,x=c,c=i.add(o.x,o.y,-d.x,-d.y,0,-1,e),h>=0&&x>=0&&c>=0&&!n&&r.add(h,x,c),h=i.add(o.x,o.y,-u.x,-u.y,0,-1,e),h>=0&&x>=0&&c>=0&&!n&&r.add(h,x,c))}h>=0&&x>=0&&_>=0&&!g&&r.add(h,x,_),h>=0&&_>=0&&y>=0&&!g&&r.add(h,y,_),this._outlineIndexCount+=3*(r.index-n)}}_processFill(r,l,n,s,o){s=!0;let a;l.length>1&&(a=[]);let f=0;for(const t of l)0!==f&&a.push(f),f+=r[t].length;const u=2*f,d=_core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].acquire();for(const t of l){const e=r[t],i=e.length;for(let t=0;t<i;++t)d.push(e[t].x,e[t].y)}const h=Object(_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_1__["e"])(d,a,2);if(s&&_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_1__["e"].deviation(d,a,2,h)>0){const t=l.map((t=>r[t].length)),{buffer:e,vertexCount:s}=Object(_geometry_libtess_js__WEBPACK_IMPORTED_MODULE_2__["triangulate"])(d,t);if(s>0){const t=this._fillVertexBuffer.index;for(let i=0;i<s;i++)this._fillVertexBuffer.add(e[2*i],e[2*i+1],n);for(let e=0;e<s;e+=3){const i=t+e;this._fillIndexBuffer.add(i,i+1,i+2)}if(void 0!==o){const t=this._patternMap,e=t.get(o);e?e[1]+=s:t.set(o,[this._fillIndexStart+this._fillIndexCount,s])}this._fillIndexCount+=s}}else{const t=h.length;if(t>0){const e=this._fillVertexBuffer.index;let i=0;for(;i<u;)this._fillVertexBuffer.add(d[i++],d[i++],n);let r=0;for(;r<t;)this._fillIndexBuffer.add(e+h[r++],e+h[r++],e+h[r++]);if(void 0!==o){const e=this._patternMap,i=e.get(o);i?i[1]+=t:e.set(o,[this._fillIndexStart+this._fillIndexCount,t])}this._fillIndexCount+=t}}_core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].release(d)}_isClipEdge(t,e){return t.x===e.x?t.x<=-64||t.x>=4160:t.y===e.y&&(t.y<=-64||t.y>=4160)}static _area(t){let e=0;const i=t.length-1;for(let r=0;r<i;r++)e+=(t[r].x-t[r+1].x)*(t[r].y+t[r+1].y);return e+=(t[i].x-t[0].x)*(t[i].y+t[0].y),.5*e}}


/***/ }),

/***/ "VLY0":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTileHandler.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _WorkerTile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkerTile.js */ "IMID");
/* harmony import */ var _style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/StyleRepository.js */ "kB7V");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this._spriteInfo={},this._glyphInfo={}}reset(){return this._spriteInfo={},this._glyphInfo={},Promise.resolve()}getLayers(){var e;return null==(e=this._styleRepository)?void 0:e.layers}async createTileAndParse(s,r){const{key:o}=s,i={};for(const e of Object.keys(s.sourceName2DataAndRefKey)){const t=s.sourceName2DataAndRefKey[e];i[e]=t.refKey}const n=new _WorkerTile_js__WEBPACK_IMPORTED_MODULE_1__["default"](o,i,this,this._styleRepository);try{return await n.parse(s,this._vectorTileLayerMaxBuffers,r)}catch(l){if(n.setObsolete(),n.release(),!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(l))throw l;return null}}updateStyle(e){if(!e||0===e.length||!this._styleRepository)return;const t=this._styleRepository;for(const s of e){const e=s.type,r=s.data;switch(e){case 0:t.setPaintProperties(r.layer,r.paint);break;case 1:t.setLayoutProperties(r.layer,r.layout);break;case 3:t.deleteStyleLayer(r.layer);break;case 2:t.setStyleLayer(r.layer,r.index)}}}setStyle(e){this._styleRepository=new _style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_2__["default"](e.style),this._spriteInfo={},this._glyphInfo={},this._vectorTileLayerMaxBuffers=e.vectorTileLayerMaxBuffers}fetchSprites(e,t,s){const r=[],o=this._spriteInfo;for(const i of e){void 0===o[i.name]&&r.push(i)}return 0===r.length?Promise.resolve():t.invoke("getSprites",r,{signal:s&&s.signal}).then((e=>{for(const t in e){const s=e[t];o[t]=s}}))}getSpriteItems(){return this._spriteInfo}fetchGlyphs(e,t,s,r,o){const i=[];let n=this._glyphInfo[t];return n?s.forEach((e=>{n[e]||i.push(e)})):(n=this._glyphInfo[t]=[],s.forEach((e=>i.push(e)))),0===i.length?Promise.resolve():r.invoke("getGlyphs",{tileID:e,font:t,codePoints:i},o).then((e=>{for(let t=0;t<e.length;t++)e[t]&&(n[t]=e[t])}))}getGlyphItems(e){return this._glyphInfo[e]}}


/***/ }),

/***/ "Zcxi":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/Feature.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/Geometry.js */ "OXZQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e,t){this.values={};const s=t.keys,r=t.values;for(;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:{const t=e.getMessage(),a=this.values;for(;!t.empty();){const e=t.getUInt32(),o=t.getUInt32();a[s[e]]=r[o]}t.release();break}case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}getGeometry(t){if(void 0!==this._geometry)return this._geometry;if(!this._pbfGeometry)return null;const s=this._pbfGeometry;let r,a;this._pbfGeometry=null,t?t.reset(this.type):r=[];let o,n=1,i=0,l=0,h=0;for(;!s.empty();){if(0===i){const e=s.getUInt32();n=7&e,i=e>>3}switch(i--,n){case 1:l+=s.getSInt32(),h+=s.getSInt32(),t?t.moveTo(l,h):(a&&r.push(a),a=[],a.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Point"](l,h)));break;case 2:l+=s.getSInt32(),h+=s.getSInt32(),t?t.lineTo(l,h):a.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Point"](l,h));break;case 7:t?t.close():a&&!a[0].equals(l,h)&&a.push(a[0].clone());break;default:throw s.release(),new Error("Invalid path operation")}}return t?o=t.result():(a&&r.push(a),o=r),s.release(),this._geometry=o,o}}


/***/ }),

/***/ "ixhk":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/Placement.js ***!
  \****************************************************************************/
/*! exports provided: Anchor, PlacedSymbol, Placement, PlacementEngine, TILE_COORD_SIZE, TILE_PIXEL_RATIO, TILE_PIXEL_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacedSymbol", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementEngine", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_COORD_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_PIXEL_RATIO", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_PIXEL_SIZE", function() { return m; });
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeometryUtils.js */ "OxmL");
/* harmony import */ var _TextShaping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextShaping.js */ "ynYs");
/* harmony import */ var _decluttering_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decluttering/config.js */ "2yHJ");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/Geometry.js */ "OXZQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const g=4096,m=512,x=8,d=.5,w=2;class p{constructor(e,t,i=0,n=-1,s=d){this.x=e,this.y=t,this.angle=i,this.segment=n,this.minzoom=s}}class y{constructor(e,t,n,s,a,o=d,l=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]){this.anchor=e,this.labelAngle=t,this.glyphAngle=n,this.page=s,this.alternateVerticalGlyph=a,this.minzoom=o,this.maxzoom=l}}class f{constructor(e,t,i,n,s,a,o,l,h,r,c,g){this.tl=e,this.tr=t,this.bl=i,this.br=n,this.mosaicRect=s,this.labelAngle=a,this.minAngle=o,this.maxAngle=l,this.anchor=h,this.minzoom=r,this.maxzoom=c,this.page=g}}class b{constructor(e){this.shapes=e}}class u{getIconPlacement(i,n,s){const a=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](i.x,i.y),o=0===s.rotationAlignment,l=s.keepUpright;let h=s.rotate*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_DEG_TO_RAD"];o&&(h+=i.angle);const g=new b([]);return s.allowOverlap&&s.ignorePlacement||!_decluttering_config_js__WEBPACK_IMPORTED_MODULE_2__["DECLUTTER_TILES"]||(g.iconColliders=[]),this._addIconPlacement(g,a,n,s,h),o&&l&&this._addIconPlacement(g,a,n,s,h+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"]),g}_addIconPlacement(e,t,n,s,a){const o=n.pixelRatio,l=n.width/o,h=n.height/o,g=s.offset;let m=g[0],x=g[1];switch(s.anchor){case 0:m-=l/2,x-=h/2;break;case 1:x-=h/2;break;case 2:m-=l,x-=h/2;break;case 3:m-=l/2;break;case 4:m-=l/2,x-=h;break;case 5:break;case 7:x-=h;break;case 6:m-=l;break;case 8:m-=l,x-=h}const w=n.rect,p=2/o,y=m-p,b=x-p,u=y+w.width/o,I=b+w.height/o,k=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](y,b),T=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](u,I),P=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](y,I),N=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](u,b);if(0!==a){const e=Math.cos(a),t=Math.sin(a);k.rotate(e,t),T.rotate(e,t),P.rotate(e,t),N.rotate(e,t)}const z=new f(k,N,P,T,w,a,0,256,t,d,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"],0);if(e.shapes.push(z),(!s.allowOverlap||!s.ignorePlacement)&&_decluttering_config_js__WEBPACK_IMPORTED_MODULE_2__["DECLUTTER_TILES"]){const n=s.size,o=s.padding,r={xTile:t.x,yTile:t.y,dxPixels:m*n-o,dyPixels:x*n-o,hard:!s.optional,partIndex:0,width:l*n+2*o,height:h*n+2*o,angle:a,minLod:d,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};e.iconColliders.push(r)}}getTextPlacement(n,s,a,r){const g=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](n.x,n.y),m=r.rotate*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_DEG_TO_RAD"],p=0===r.rotationAlignment,u=r.keepUpright,I=r.padding;let k=d;const T=!p?0:n.angle,P=n.segment>=0&&p,N=r.allowOverlap&&r.ignorePlacement?null:[],z=[],A=4,_=!P;let G=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY,M=G,E=v;const L=(P||p)&&u,V=r.size/_TextShaping_js__WEBPACK_IMPORTED_MODULE_1__["SDF_GLYPH_SIZE"];let O=!1;for(const e of s)if(e.vertical){O=!0;break}let j,F=0,Y=0;if(!P&&O){const e=_TextShaping_js__WEBPACK_IMPORTED_MODULE_1__["TextShaping"].getTextBox(s,r.lineHeight*_TextShaping_js__WEBPACK_IMPORTED_MODULE_1__["SDF_GLYPH_SIZE"]);switch(r.anchor){case 1:F=e.height/2,Y=-e.width/2;break;case 2:F=-e.height/2,Y=e.width/2;break;case 3:F=e.height/2,Y=e.width/2;break;case 4:F=-e.height/2,Y=-e.width/2;break;case 5:F=e.height;break;case 7:Y=-e.width;break;case 6:Y=e.width;break;case 8:F=-e.height}}F+=r.offset[0]*_TextShaping_js__WEBPACK_IMPORTED_MODULE_1__["SDF_GLYPH_SIZE"],Y+=r.offset[1]*_TextShaping_js__WEBPACK_IMPORTED_MODULE_1__["SDF_GLYPH_SIZE"];for(const e of s){const s=e.glyphMosaicItem;if(!s||s.rect.isEmpty)continue;const o=s.rect,l=s.metrics,b=s.page;if(N&&_){if(void 0!==j&&j!==e.y){let e,t,s,a;O?(e=-E+F,t=G+Y,s=E-M,a=v-G):(e=G+F,t=M+Y,s=v-G,a=E-M);const o={xTile:n.x,yTile:n.y,dxPixels:e*V-I,dyPixels:t*V-I,hard:!r.optional,partIndex:1,width:s*V+2*I,height:a*V+2*I,angle:m,minLod:d,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};N.push(o),G=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY,M=G,E=v}j=e.y}const q=[];if(P){const t=.5*s.metrics.width,i=(e.x+l.left-A+t)*V*x;if(k=this._placeGlyph(n,k,i,a,n.segment,1,e.vertical,b,q),u&&(k=this._placeGlyph(n,k,i,a,n.segment,-1,e.vertical,b,q)),k>=w)break}else q.push(new y(g,T,T,b,!1)),p&&u&&q.push(new y(g,T+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],T+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],b,!1));const C=e.x+l.left,S=e.y-_TextShaping_js__WEBPACK_IMPORTED_MODULE_1__["SDF_GLYPH_BASELINE"]-l.top,U=C+l.width,R=S+l.height;let B,H,D,J,K,Q,W,X;if(!P&&O)if(e.vertical){const e=(C+U)/2-l.height/2,t=(S+R)/2+l.width/2;B=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](-t-A+F,e-A+Y),H=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](B.x+o.width,B.y+o.height),D=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](B.x,H.y),J=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](H.x,B.y)}else B=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](-S+A+F,C-A+Y),H=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](B.x-o.height,B.y+o.width),D=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](H.x,B.y),J=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](B.x,H.y);else B=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](C-A+F,S-A+Y),H=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](B.x+o.width,B.y+o.height),D=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](B.x,H.y),J=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](H.x,B.y);for(const t of q){let i,s,a,h;if(t.alternateVerticalGlyph){if(!K){const e=(S+R)/2+Y;K=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"]((C+U)/2+F-l.height/2-A,e+l.width/2+A),Q=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](K.x+o.height,K.y-o.width),W=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](Q.x,K.y),X=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](K.x,Q.y)}i=K,s=W,a=X,h=Q}else i=B,s=D,a=J,h=H;const g=S,x=R,d=t.glyphAngle+m;if(0!==d){const e=Math.cos(d),t=Math.sin(d);i=i.clone(),s=s.clone(),a=a.clone(),h=h.clone(),i.rotate(e,t),h.rotate(e,t),s.rotate(e,t),a.rotate(e,t)}let p=0,y=256;if(P&&O?e.vertical?t.alternateVerticalGlyph?(p=32,y=96):(p=224,y=32):(p=224,y=96):(p=192,y=64),z.push(new f(i,a,s,h,o,t.labelAngle,p,y,t.anchor,t.minzoom,t.maxzoom,t.page)),N&&(!L||this._legible(t.labelAngle)))if(_)C<G&&(G=C),g<M&&(M=g),U>v&&(v=U),x>E&&(E=x);else if(t.minzoom<w){const e={xTile:n.x,yTile:n.y,dxPixels:(C+F)*V-I,dyPixels:(g+F)*V-I,hard:!r.optional,partIndex:1,width:(U-C)*V+2*I,height:(x-g)*V+2*I,angle:d,minLod:t.minzoom,maxLod:t.maxzoom};N.push(e)}}}if(k>=w)return null;if(N&&_){let e,t,s,a;O?(e=-E+F,t=G+Y,s=E-M,a=v-G):(e=G+F,t=M+Y,s=v-G,a=E-M);const o={xTile:n.x,yTile:n.y,dxPixels:e*V-I,dyPixels:t*V-I,hard:!r.optional,partIndex:1,width:s*V+2*I,height:a*V+2*I,angle:m,minLod:d,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};N.push(o)}const q=new b(z);return N&&N.length>0&&(q.textColliders=N),q}_legible(e){const t=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["radToByte"])(e);return t<65||t>=193}_placeGlyph(e,n,o,l,h,r,g,m,x){let d=r;const w=d<0?Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["positiveMod"])(e.angle+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_2PI"]):e.angle;let p=0;o<0&&(d*=-1,o*=-1,p=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"]),d>0&&++h;let f=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_3__["Point"](e.x,e.y),b=l[h],u=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"];if(l.length<=h)return u;for(;;){const e=b.x-f.x,t=b.y-f.y,i=Math.sqrt(e*e+t*t),r=Math.max(o/i,n),c=e/i,I=t/i,k=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["positiveMod"])(Math.atan2(I,c)+p,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_2PI"]);if(x.push(new y(f,w,k,m,!1,r,u)),g&&x.push(new y(f,w,k,m,!0,r,u)),r<=n)return r;f=b.clone();do{if(h+=d,l.length<=h||h<0)return r;b=l[h]}while(f.isEqual(b));let T=b.x-f.x,P=b.y-f.y;const N=Math.sqrt(T*T+P*P);T*=i/N,P*=i/N,f.x-=T,f.y-=P,u=r}}}


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

/***/ "mBKw":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/earcut.js ***!
  \****************************************************/
/*! exports provided: e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return x; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e,n,t,r={exports:{}};e=r,n=function(){function e(e,t,x){x=x||2;var i,u,v,o,y,p,a,l=t&&t.length,h=l?t[0]*x:e.length,s=n(e,0,h,x,!0),c=[];if(!s||s.next===s.prev)return c;if(l&&(s=f(e,t,s,x)),e.length>80*x){i=v=e[0],u=o=e[1];for(var Z=x;Z<h;Z+=x)(y=e[Z])<i&&(i=y),(p=e[Z+1])<u&&(u=p),y>v&&(v=y),p>o&&(o=p);a=0!==(a=Math.max(v-i,o-u))?1/a:0}return r(s,c,x,i,u,a),c}function n(e,n,t,r,x){var i,u;if(x===E(e,n,t,r)>0)for(i=n;i<t;i+=r)u=B(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=B(i,e[i],e[i+1],u);if(u&&M(u,u.next)){var v=u.next;C(u),u=v}return u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!M(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{var x=r.prev;if(C(r),(r=n=x)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,o,y,p,a){if(e){!a&&p&&h(e,o,y,p);for(var l,s,c=e;e.prev!==e.next;)if(l=e.prev,s=e.next,p?i(e,o,y,p):x(e))n.push(l.i/f),n.push(e.i/f),n.push(s.i/f),C(e),e=s.next,c=s.next;else if((e=s)===c){a?1===a?r(e=u(t(e),n,f),n,f,o,y,p,2):2===a&&v(e,n,f,o,y,p):r(t(e),n,f,o,y,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(w(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&w(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,o=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,y=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=c(v,f,n,t,r),a=c(o,y,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=p&&h&&h.z<=a;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;h&&h.z<=a;){if(h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,r){var x=e;do{var i=x.prev,u=x.next.next;!M(i,u)&&z(i,x,x.next,u)&&j(i,u)&&j(u,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(u.i/r),C(x),C(x.next),x=e=u),x=x.next}while(x!==e);return t(x)}function v(e,n,x,i,u,v){var f=e;do{for(var o=f.next.next;o!==f.prev;){if(f.i!==o.i&&d(f,o)){var y=A(f,o);return f=t(f,f.next),y=t(y,y.next),r(f,n,x,i,u,v),void r(y,n,x,i,u,v)}o=o.next}f=f.next}while(f!==e)}function f(e,r,x,i){var u,v,f,y=[];for(u=0,v=r.length;u<v;u++)(f=n(e,r[u]*i,u<v-1?r[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),y.push(Z(f));for(y.sort(o),u=0;u<y.length;u++)x=t(x=p(y[u],x),x.next);return x}function o(e,n){return e.x-n.x}function y(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function p(e,n){var r=a(e,n);if(!r)return n;var x=A(r,e),i=t(r,r.next);let u=y(x);return t(u,u.next),i=y(i),y(n===r?i:n)}function a(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,o=t,y=t.x,p=t.y,a=1/0;r=t;do{x>=r.x&&r.x>=y&&x!==r.x&&g(i<p?x:u,i,y,p,i<p?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),j(r,e)&&(f<a||f===a&&(r.x>t.x||r.x===t.x&&l(t,r)))&&(t=r,a=f)),r=r.next}while(r!==o);return t}function l(e,n){return w(e.prev,e,n.prev)<0&&w(n.next,e,e.next)<0}function h(e,n,t,r){var x=e;do{if(null===x.z&&(x.z=c(x.x,x.y,n,t,r)),x.prev.next!==x||x.next.prev!==x)return x.prev.next=x,x.next.prev=x,h(e,n,t,r);x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,s(x)}function s(e){var n,t,r,x,i,u,v,f,o=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<o&&(v++,r=r.nextZ);n++);for(f=o;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,o*=2}while(u>1);return e}function c(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function Z(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function g(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function d(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(j(e,n)&&j(n,e)&&q(e,n)&&(w(e.prev,e,n.prev)||w(e,n.prev,n))||M(e,n)&&w(e.prev,e,e.next)>0&&w(n.prev,n,n.next)>0)}function w(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function z(e,n,t,r){var x=m(w(e,n,t)),i=m(w(e,n,r)),u=m(w(t,r,e)),v=m(w(t,r,n));return x!==i&&u!==v||!(0!==x||!b(e,t,n))||!(0!==i||!b(e,r,n))||!(0!==u||!b(t,e,r))||!(0!==v||!b(t,n,r))}function b(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&z(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function j(e,n){return w(e.prev,e,e.next)<0?w(e,n,e.next)>=0&&w(e,e.prev,n)>=0:w(e,n,e.prev)<0||w(e,e.next,n)<0}function q(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function A(e,n){var t=new D(e.i,e.x,e.y),r=new D(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function B(e,n,t,r){var x=new D(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function C(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function D(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}return e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(E(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var o=n[v]*t,y=v<f-1?n[v+1]*t:e.length;u-=Math.abs(E(e,o,y,t))}var p=0;for(v=0;v<r.length;v+=3){var a=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[a]-e[h])*(e[l+1]-e[a+1])-(e[a]-e[l])*(e[h+1]-e[a+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},e},void 0!==(t=n())&&(e.exports=t);const x=r.exports;


/***/ }),

/***/ "mKU8":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileParser.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return w; });
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/pbf.js */ "ATu9");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_libtess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/libtess.js */ "DFOt");
/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Feature.js */ "Zcxi");
/* harmony import */ var _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IndexMemoryBuffer.js */ "4FHc");
/* harmony import */ var _SourceLayerData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourceLayerData.js */ "8NBV");
/* harmony import */ var _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VertexMemoryBuffer.js */ "yQzY");
/* harmony import */ var _buckets_CircleBucket_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buckets/CircleBucket.js */ "nHTO");
/* harmony import */ var _buckets_FillBucket_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buckets/FillBucket.js */ "KFs1");
/* harmony import */ var _buckets_LineBucket_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buckets/LineBucket.js */ "DtuG");
/* harmony import */ var _buckets_SymbolBucket_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buckets/SymbolBucket.js */ "9dpd");
/* harmony import */ var _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../webgl/TileClipper.js */ "LaVW");
/* harmony import */ var _tiling_enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../tiling/enums.js */ "zJVD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const k=8,T=14,g=5;class w{constructor(t,r,s,i,o){if(this._pbfTiles={},this._tileClippers={},this._client=s,this._tile=r,o){this._styleLayerUIDs=new Set;for(const e of o)this._styleLayerUIDs.add(e)}this._styleRepository=i,this._layers=this._styleRepository.layers;const[c,n,l]=r.tileKey.split("/").map(parseFloat);this._level=c;const a=k+Math.max((this._level-T)*g,0);for(const u of Object.keys(t)){const r=t[u];this._pbfTiles[u]=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_0__["default"](new Uint8Array(r.protobuff),new DataView(r.protobuff));if(r.refKey){const[e]=r.refKey.split("/").map(parseFloat),t=c-e;if(t>0){const e=(1<<t)-1,r=n&e,s=l&e;this._tileClippers[u]=new _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_11__["TileClipper"](t,r,s,8,a)}}this._tileClippers[u]||(this._tileClippers[u]=new _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_11__["SimpleBuilder"])}}_canParseStyleLayer(e){return!this._styleLayerUIDs||this._styleLayerUIDs.has(e)}async parse(e){const t=Object(_geometry_libtess_js__WEBPACK_IMPORTED_MODULE_2__["loadLibtess"])(),s=this._initialize(e),{returnedBuckets:i}=s;this._processLayers(s),this._linkReferences(s),this._filterFeatures(s);const o=[],c=new Set,n=(e,t)=>{c.has(e)||(o.push({name:e,repeat:t}),c.add(e))},l={};for(const r of i)r.getResources(r.tileClipper,n,l);if(this._tile.status===_tiling_enums_js__WEBPACK_IMPORTED_MODULE_12__["TileStatus"].INVALID)return Promise.resolve([]);const a=this._fetchResources(o,l,e);return Promise.all([...a,t]).then((()=>this._processFeatures(s.returnedBuckets)))}_initialize(e){return{signal:e&&e.signal,sourceNameToTileData:this._parseTileData(this._pbfTiles),layers:this._layers,zoom:this._level,sourceNameToTileClipper:this._tileClippers,sourceNameToUniqueSourceLayerBuckets:{},sourceNameToUniqueSourceLayers:{},returnedBuckets:[],layerIdToBucket:{},referencerUIDToReferencedId:new Map}}_processLayers(e){const{sourceNameToTileData:t,layers:r,zoom:s,sourceNameToTileClipper:i,sourceNameToUniqueSourceLayerBuckets:o,sourceNameToUniqueSourceLayers:c,returnedBuckets:n,layerIdToBucket:l,referencerUIDToReferencedId:a}=e;for(let u=r.length-1;u>=0;u--){const e=r[u];if(!this._canParseStyleLayer(e.uid)||e.minzoom&&s<Math.floor(e.minzoom)||e.maxzoom&&s>=e.maxzoom||0===e.type)continue;if(!t[e.source]||!i[e.source])continue;const f=t[e.source],p=i[e.source],h=e.sourceLayer,m=f[h];if(m){let t=c[e.source];if(t||(t=c[e.source]=new Set),t.add(e.sourceLayer),e.refLayerId)a.set(e.uid,e.refLayerId);else{const t=this._createBucket(e);if(t){t.layerUIDs=[e.uid],t.layerExtent=m.extent,t.tileClipper=p;let r=o[e.source];r||(r=o[e.source]={});let s=r[h];s||(s=r[h]=[]),s.push(t),n.push(t),l[e.id]=t}}}}}_linkReferences(e){const{layerIdToBucket:t,referencerUIDToReferencedId:r}=e;r.forEach(((e,r)=>{t[e=e]&&t[e].layerUIDs.push(r)}))}_filterFeatures(e){const{signal:r,sourceNameToTileData:i,sourceNameToUniqueSourceLayerBuckets:o,sourceNameToUniqueSourceLayers:c}=e,n=10*this._level,l=10*(this._level+1),a=[],u=[];for(const t of Object.keys(c)){c[t].forEach((e=>{a.push(e),u.push(t)}))}for(let f=0;f<a.length;f++){const e=u[f],c=a[f];if(!i[e]||!o[e])continue;const p=i[e][c],h=o[e][c];if(!h||0===h.length)continue;if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAborted"])(r))return;const m=p.getData();for(;m.nextTag(2);){const e=m.getMessage(),t=new _Feature_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,p);e.release();const r=t.values;if(r){const e=r._minzoom;if(e&&e>=l)continue;const t=r._maxzoom;if(t&&t<=n)continue}for(const s of h)s.pushFeature(t)}}}_fetchResources(e,t,r){const s=[],i=this._tile.getWorkerTileHandler();let o,c;e.length>0&&(o=i.fetchSprites(e,this._client,r),s.push(o));for(const n in t){const e=t[n];e.size>0&&(c=i.fetchGlyphs(this._tile.tileKey,n,e,this._client,r),s.push(c))}return s}_processFeatures(e){const t=e.filter((e=>e.hasFeatures()||this._canParseStyleLayer(e.layer.uid)));for(const r of t)r.processFeatures(r.tileClipper);return t}_parseTileData(e){const t={};for(const r of Object.keys(e)){const s=e[r],i={};for(;s.next();)switch(s.tag()){case 3:{const e=s.getMessage(),t=new _SourceLayerData_js__WEBPACK_IMPORTED_MODULE_5__["default"](e);e.release(),i[t.name]=t;break}default:s.skip()}t[r]=i}return t}_createBucket(e){switch(e.type){case 0:return null;case 1:return this._createFillBucket(e);case 2:return this._createLineBucket(e);case 4:return this._createCircleBucket(e);case 3:return this._createSymbolBucket(e)}}_createFillBucket(e){return new _buckets_FillBucket_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_6__["FillVertexBuffer"](e.fillMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_4__["TriangleIndexBuffer"],new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_6__["OutlineVertexBuffer"](e.outlineMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_4__["TriangleIndexBuffer"])}_createLineBucket(e){return new _buckets_LineBucket_js__WEBPACK_IMPORTED_MODULE_9__["default"](e,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_6__["LineVertexBuffer"](e.lineMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_4__["TriangleIndexBuffer"])}_createCircleBucket(e){return new _buckets_CircleBucket_js__WEBPACK_IMPORTED_MODULE_7__["default"](e,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_6__["CircleVertexBuffer"](e.circleMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_4__["TriangleIndexBuffer"])}_createSymbolBucket(e){const t=this._tile;return new _buckets_SymbolBucket_js__WEBPACK_IMPORTED_MODULE_10__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_6__["SymbolVertexBuffer"](e.iconMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_4__["TriangleIndexBuffer"],new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_6__["SymbolVertexBuffer"](e.textMaterial.getStride()),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_4__["TriangleIndexBuffer"],t.placementEngine,t.getWorkerTileHandler())}}


/***/ }),

/***/ "nHTO":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/CircleBucket.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseBucket.js */ "vgmk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(e,t,r,i,c){super(e,t,r),this.type=4,this._circleVertexBuffer=i,this._circleIndexBuffer=c}get circleIndexStart(){return this._circleIndexStart}get circleIndexCount(){return this._circleIndexCount}processFeatures(e){const t=this._circleVertexBuffer,r=this._circleIndexBuffer;this._circleIndexStart=3*r.index,this._circleIndexCount=0;const i=this.layer,c=this.zoom;e&&e.setExtent(this.layerExtent);for(const s of this._features){const n=s.getGeometry(e);if(!n)continue;const l=i.circleMaterial.encodeAttributes(s,c,i);for(const e of n)if(e)for(const i of e){const e=t.index;t.add(i.x,i.y,0,0,l),t.add(i.x,i.y,0,1,l),t.add(i.x,i.y,1,0,l),t.add(i.x,i.y,1,1,l),r.add(e+0,e+1,e+2),r.add(e+1,e+2,e+3),this._circleIndexCount+=6}}}serialize(){let e=6;e+=this.layerUIDs.length,e+=this._circleVertexBuffer.array.length,e+=this._circleIndexBuffer.array.length;const t=new Uint32Array(e),r=new Int32Array(t.buffer);let i=0;t[i++]=this.type,t[i++]=this.layerUIDs.length;for(let c=0;c<this.layerUIDs.length;c++)t[i++]=this.layerUIDs[c];t[i++]=this._circleIndexStart,t[i++]=this._circleIndexCount,t[i++]=this._circleVertexBuffer.array.length;for(let c=0;c<this._circleVertexBuffer.array.length;c++)r[i++]=this._circleVertexBuffer.array[c];t[i++]=this._circleIndexBuffer.array.length;for(let c=0;c<this._circleIndexBuffer.array.length;c++)t[i++]=this._circleIndexBuffer.array[c];return t.buffer}}


/***/ }),

/***/ "u8Fm":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/ScriptUtils.js ***!
  \******************************************************************************/
/*! exports provided: allowsIdeographicBreak, hasVerticalOrientation, isLineBreak, isWhiteSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowsIdeographicBreak", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOrientation", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLineBreak", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWhiteSpace", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){return 746===e||747===e||!(e<4352)&&(e>=12704&&e<=12735||(e>=12544&&e<=12591||(e>=65072&&e<=65103&&!(e>=65097&&e<=65103)||(e>=63744&&e<=64255||(e>=13056&&e<=13311||(e>=11904&&e<=12031||(e>=12736&&e<=12783||(e>=12288&&e<=12351&&!(e>=12296&&e<=12305||e>=12308&&e<=12319||12336===e)||(e>=13312&&e<=19903||(e>=19968&&e<=40959||(e>=12800&&e<=13055||(e>=12592&&e<=12687||(e>=43360&&e<=43391||(e>=55216&&e<=55295||(e>=4352&&e<=4607||(e>=44032&&e<=55215||(e>=12352&&e<=12447||(e>=12272&&e<=12287||(e>=12688&&e<=12703||(e>=12032&&e<=12255||(e>=12784&&e<=12799||(e>=12448&&e<=12543&&12540!==e||(e>=65280&&e<=65519&&!(65288===e||65289===e||65293===e||e>=65306&&e<=65310||65339===e||65341===e||65343===e||e>=65371&&e<=65503||65507===e||e>=65512&&e<=65519)||(e>=65104&&e<=65135&&!(e>=65112&&e<=65118||e>=65123&&e<=65126)||(e>=5120&&e<=5759||(e>=6320&&e<=6399||(e>=65040&&e<=65055||(e>=19904&&e<=19967||(e>=40960&&e<=42127||e>=42128&&e<=42191)))))))))))))))))))))))))))))}function c(e){return!(e<11904)&&(e>=12704&&e<=12735||(e>=12544&&e<=12591||(e>=65072&&e<=65103||(e>=63744&&e<=64255||(e>=13056&&e<=13311||(e>=11904&&e<=12031||(e>=12736&&e<=12783||(e>=12288&&e<=12351||(e>=13312&&e<=19903||(e>=19968&&e<=40959||(e>=12800&&e<=13055||(e>=65280&&e<=65519||(e>=12352&&e<=12447||(e>=12272&&e<=12287||(e>=12032&&e<=12255||(e>=12784&&e<=12799||(e>=12448&&e<=12543||(e>=65040&&e<=65055||(e>=42128&&e<=42191||e>=40960&&e<=42127)))))))))))))))))))}function s(e){switch(e){case 10:case 32:case 38:case 40:case 41:case 43:case 45:case 47:case 173:case 183:case 8203:case 8208:case 8211:case 8231:return!0}return!1}function a(e){switch(e){case 9:case 10:case 11:case 12:case 13:case 32:return!0}return!1}


/***/ }),

/***/ "vgmk":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/buckets/BaseBucket.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,e,s){this.layerExtent=4096,this._features=[],this.layer=t,this.zoom=e,this._spriteInfo=s,this._filter=t.getFeatureFilter()}pushFeature(t){this._filter&&!this._filter.filter(t,this.zoom)||this._features.push(t)}hasFeatures(){return this._features.length>0}getResources(t,e,s){}}


/***/ }),

/***/ "yQzY":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/VertexMemoryBuffer.js ***!
  \*************************************************************************************/
/*! exports provided: CircleVertexBuffer, FillVertexBuffer, LineVertexBuffer, OutlineVertexBuffer, SymbolVertexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleVertexBuffer", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillVertexBuffer", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineVertexBuffer", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineVertexBuffer", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolVertexBuffer", function() { return h; });
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeometryUtils.js */ "OxmL");
/* harmony import */ var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemoryBuffer.js */ "rgtN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t)}add(t,o,r,u,h,a,n,d,e,p,i,c){const M=this.array;let l=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t,o);M.push(l);const m=31;l=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.round(m*r),Math.round(m*u),Math.round(m*h),Math.round(m*a)),M.push(l),l=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.round(m*n),Math.round(m*d),Math.round(m*e),Math.round(m*p)),M.push(l),l=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(i,0),M.push(l),c&&M.push(...c)}}class r extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t)}add(t,o,r){const u=this.array;u.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t,o)),r&&u.push(...r)}}class u extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t)}add(t,o,r,u,h,a,n){const d=this.array,e=this.index;let p=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t,o);d.push(p);const i=15;return p=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.round(i*r),Math.round(i*u),h,a),d.push(p),n&&d.push(...n),e}}class h extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t)}add(o,r,u,h,a,n,d,e,p,i,c,M){const l=this.array;let m=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(o,r);l.push(m),m=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(Math.round(8*u),Math.round(8*h)),l.push(m),m=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(a/4,n/4,e,p),l.push(m),m=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(0,Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["radToByte"])(d),10*i,Math.min(10*c,255)),l.push(m),M&&l.push(...M)}}class a extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t)}add(t,o,r,u,h){const a=this.array,n=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(2*t+r,2*o+u);a.push(n),h&&a.push(...h)}}


/***/ }),

/***/ "ynYs":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TextShaping.js ***!
  \******************************************************************************/
/*! exports provided: SDF_GLYPH_BASELINE, SDF_GLYPH_SIZE, TextShaping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDF_GLYPH_BASELINE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDF_GLYPH_SIZE", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextShaping", function() { return a; });
/* harmony import */ var _ScriptUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScriptUtils.js */ "u8Fm");
/* harmony import */ var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/Rect.js */ "qcDN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=24,h=17;class a{constructor(t,e,i,s,o,c,h){this._glyphItems=t,this._maxWidth=e,this._lineHeight=i,this._letterSpacing=s,this._hAnchor=o,this._vAnchor=c,this._justify=h}getShaping(o,c,h){const a=this._letterSpacing,l=this._lineHeight,r=this._justify,n=this._maxWidth,m=[];let f=0,p=0;const g=o.length;for(let t=0;t<g;t++){const e=o.charCodeAt(t),i=h&&Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_0__["hasVerticalOrientation"])(e);let c;for(const t of this._glyphItems)if(c=t[e],c)break;m.push({codePoint:e,x:f,y:p,vertical:i,glyphMosaicItem:c}),c&&(f+=c.metrics.advance+a)}let y=f;if(n>0){y=f/Math.max(1,Math.ceil(f/n))}const d=o.indexOf("​")>=0,x=[];for(let e=0;e<g-1;e++){const s=m[e].codePoint,o=Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_0__["allowsIdeographicBreak"])(s);if(Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_0__["isLineBreak"])(s)||o){let t=0;if(10===s)t-=1e4;else if(o&&d)t+=150;else{40!==s&&65288!==s||(t+=50);const i=m[e+1].codePoint;41!==i&&65289!==i||(t+=50)}x.push(this._buildBreak(e+1,m[e].x,y,x,t,!1))}}const M=this._optimalBreaks(this._buildBreak(g,f,y,x,0,!0));let u=0;const _=c?-l:l;let I=0;for(let t=0;t<M.length;t++){const i=M[t];let s=I;for(;s<i&&Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_0__["isWhiteSpace"])(m[s].codePoint);)m[s].glyphMosaicItem=null,++s;let o=i-1;for(;o>s&&Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_0__["isWhiteSpace"])(m[o].codePoint);)m[o].glyphMosaicItem=null,--o;if(s<=o){const t=m[s].x;for(let i=s;i<=o;i++)m[i].x-=t,m[i].y=p;let e=m[o].x;m[o].glyphMosaicItem&&(e+=m[o].glyphMosaicItem.metrics.advance),u=Math.max(e,u),r&&this._applyJustification(m,s,o)}I=i,p+=_}if(m.length>0){const t=M.length-1,e=(r-this._hAnchor)*u;let i=(-this._vAnchor*(t+1)+.5)*l;c&&t&&(i+=t*l);for(const s of m)s.x+=e,s.y+=i}return m.filter((t=>t.glyphMosaicItem))}static getTextBox(t,e){if(!t.length)return null;let i=1/0,s=1/0,o=0,c=0;for(const a of t){const t=a.glyphMosaicItem.metrics.advance,l=a.x,r=a.y-h,n=l+t,m=r+e;i=Math.min(i,l),o=Math.max(o,n),s=Math.min(s,r),c=Math.max(c,m)}return{x:i,y:s,width:o-i,height:c-s}}static getBox(t){if(!t.length)return null;let e=1/0,i=1/0,s=0,o=0;for(const c of t){const{height:t,left:h,top:a,width:l}=c.glyphMosaicItem.metrics,r=c.x,n=c.y-(t-Math.abs(a)),m=r+l+h,f=n+t;e=Math.min(e,r),s=Math.max(s,m),i=Math.min(i,n),o=Math.max(o,f)}return{x:e,y:i,width:s-e,height:o-i}}static addDecoration(t,e){const i=t.length;if(0===i)return;const s=3;let c=t[0].x+t[0].glyphMosaicItem.metrics.left,h=t[0].y;for(let l=1;l<i;l++){const i=t[l];if(i.y!==h){const a=t[l-1].x+t[l-1].glyphMosaicItem.metrics.left+t[l-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:c,y:h+e-s,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](4,0,4,8),metrics:{width:a-c,height:2+2*s,left:0,top:0,advance:0},page:0,code:0}}),h=i.y,c=i.x+i.glyphMosaicItem.metrics.left}}const a=t[i-1].x+t[i-1].glyphMosaicItem.metrics.left+t[i-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:c,y:h+e-s,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](4,0,4,8),metrics:{width:a-c,height:2+2*s,left:0,top:0,advance:0},page:0,code:0}})}_breakScore(t,e,i,s){const o=(t-e)*(t-e);return s?t<e?o/2:2*o:o+Math.abs(i)*i}_buildBreak(t,e,i,s,o,c){let h=null,a=this._breakScore(e,i,o,c);for(const l of s){const t=e-l.x,s=this._breakScore(t,i,o,c)+l.score;s<=a&&(h=l,a=s)}return{index:t,x:e,score:a,previousBreak:h}}_optimalBreaks(t){return t?this._optimalBreaks(t.previousBreak).concat(t.index):[]}_applyJustification(t,e,i){const s=t[i],o=s.vertical?c:s.glyphMosaicItem?s.glyphMosaicItem.metrics.advance:0,h=(s.x+o)*this._justify;for(let c=e;c<=i;c++)t[c].x-=h}}


/***/ }),

/***/ "zJVD":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/tiling/enums.js ***!
  \************************************************************/
/*! exports provided: TileStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileStatus", function() { return I; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var I;!function(I){I[I.INITIALIZED=0]="INITIALIZED",I[I.NO_DATA=1]="NO_DATA",I[I.READY=2]="READY",I[I.MODIFIED=3]="MODIFIED",I[I.INVALID=4]="INVALID"}(I||(I={}));


/***/ })

}]);
//# sourceMappingURL=views-2d-engine-vectorTiles-WorkerTileHandler-js.js.map