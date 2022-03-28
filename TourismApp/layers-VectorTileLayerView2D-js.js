(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-VectorTileLayerView2D-js"],{

/***/ "1eRR":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolRepository.js ***!
  \************************************************************************************************/
/*! exports provided: SymbolRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolRepository", function() { return r; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "vAXJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=32,i=8,n=64;class r{constructor(e,s,o){this.tileCoordRange=e,this._visibleTiles=s,this._createUnique=o,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,s){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);t||(t={symbols:new Map},this._tiles.set(e.id,t));const r=new Map;if(s)for(const o of s)t.symbols.has(o)&&(r.set(o,t.symbols.get(o)),t.symbols.delete(o));else for(const[o,l]of e.layerData)t.symbols.has(o)&&(r.set(o,t.symbols.get(o)),t.symbols.delete(o));this._removeSymbols(r);const y=e.symbols,a=new Map;for(const[f,c]of y){let e=c.length;if(e>=l){let s=this.tileCoordRange;do{s/=2,e/=4}while(e>i&&s>n);const l=new _util_js__WEBPACK_IMPORTED_MODULE_1__["GridIndex"](this.tileCoordRange,this.tileCoordRange,s);a.set(f,{flat:c,index:l}),t.symbols.set(f,{flat:c,index:l});for(const e of c)l.getCell(e.xTile,e.yTile).push(e)}else a.set(f,{flat:c}),t.symbols.set(f,{flat:c})}this._addSymbols(e.key,y)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[s,o]of this._tiles){const t=new Map;for(const s of e)o.symbols.has(s)&&(t.set(s,o.symbols.get(s)),o.symbols.delete(s));this._removeSymbols(t),0===o.symbols.size&&this._tiles.delete(s)}}removeTile(e){this._uniqueSymbolLayerArray=null;const s=this._tiles.get(e.id);if(!s)return;const o=new Map;for(const[t,l]of e.symbols)s.symbols.has(t)&&(o.set(t,s.symbols.get(t)),s.symbols.delete(t));this._removeSymbols(o),0===s.symbols.size&&this._tiles.delete(e.id)}_removeSymbols(e){for(const[s,{flat:o}]of e)for(const e of o){const o=e.unique,t=o.tileSymbols,l=t.length-1;for(let s=0;s<l;s++)if(t[s]===e){t[s]=t[l];break}if(t.length=l,0===l){const e=this._uniqueSymbolsReferences.get(s);e.delete(o),0===e.size&&this._uniqueSymbolsReferences.delete(s)}e.unique=null}}_addSymbols(s,o){if(0===o.size)return;const t=this._visibleTiles;for(const e of t)e.parentTile||e.key.world!==s.world||e.key.level===s.level&&!e.key.equals(s)||this._matchSymbols(e,s,o);for(const[l,i]of o)for(const s of i)if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s.unique)){const e=this._createUnique();s.unique=e,e.tileSymbols.push(s);let o=this._uniqueSymbolsReferences.get(l);o||(o=new Set,this._uniqueSymbolsReferences.set(l,o)),o.add(e)}}_matchSymbols(e,o,l){if(e.key.level>o.level){const s=e.key.level-o.level;if(e.key.row>>s!==o.row||e.key.col>>s!==o.col)return}if(o.level>e.key.level){const s=o.level-e.key.level;if(o.row>>s!==e.key.row||o.col>>s!==e.key.col)return}if(o.equals(e.key)){for(const s of e.childrenTiles)this._matchSymbols(s,o,l);return}const i=new Map;for(const[n,r]of l){const l=[];for(const s of r){const i=Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["tileCoordChange"])(this.tileCoordRange,s.xTile,o.level,o.col,e.key.level,e.key.col),n=Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["tileCoordChange"])(this.tileCoordRange,s.yTile,o.level,o.row,e.key.level,e.key.row);i>=0&&i<this.tileCoordRange&&n>=0&&n<this.tileCoordRange&&l.push({symbol:s,xTransformed:i,yTransformed:n})}const y=[],a=e.key.level<o.level?1:1<<e.key.level-o.level,f=this._tiles.get(e.id).symbols.get(n);if(f){const e=f.flat;for(const o of l){let t,l=!1;const i=o.xTransformed,n=o.yTransformed;t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.index)?f.index.getCell(i,n):e;const r=o.symbol,c=r.hash;for(const e of t)if(c===e.hash&&Math.abs(i-e.xTile)<=a&&Math.abs(n-e.yTile)<=a){const s=e.unique;r.unique=s,s.tileSymbols.push(r),l=!0;break}l||y.push(r)}}y.length>0&&i.set(n,y)}for(const s of e.childrenTiles)this._matchSymbols(s,o,i)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,s=new Array(e.size);let o,t=0;for(const[l,i]of e){const e=new Array(i.size);o=0;for(const s of i)e[o++]=s;s[t]={styleLayerUID:l,uniqueSymbols:e},t++}return s}}


/***/ }),

/***/ "5LEI":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
  \*******************************************************************************/
/*! exports provided: TiledDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function() { return r; });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DisplayObject.js */ "fEsP");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__["DisplayObject"]{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,n]=i.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(h,a,0,0,0,l,0,o,n,1),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__["m"])(this.transforms.dvs,i.displayViewMat3,h)}}


/***/ }),

/***/ "89j9":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GlyphMosaic.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RectangleBinPack.js */ "PDbr");
/* harmony import */ var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../webgl/Rect.js */ "qcDN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t,i,s){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=i,this._glyphSource=s,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_8__["default"](t-4,i-4),this._glyphData.push(new Uint8Array(t*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(t,s){const h=[],r=this._glyphSource,n=new Set,o=1/256;for(const e of s){const t=Math.floor(e*o);n.add(t)}const a=[];return n.forEach((e=>{if(e<=256){const i=t+e;if(this._rangePromises.has(i))a.push(this._rangePromises.get(i));else{const s=r.getRange(t,e).then((()=>{this._rangePromises.delete(i)}),(()=>{this._rangePromises.delete(i)}));this._rangePromises.set(i,s),a.push(s)}}})),Promise.all(a).then((()=>{let n=this._glyphIndex[t];n||(n={},this._glyphIndex[t]=n);for(const o of s){const s=n[o];if(s){h[o]={sdf:!0,rect:s.rect,metrics:s.metrics,page:s.page,code:o};continue}const a=r.getGlyph(t,o);if(!a||!a.metrics)continue;const c=a.metrics;let l;if(0===c.width)l=new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_9__["default"](0,0,0,0);else{const t=3,i=c.width+2*t,s=c.height+2*t;let h=i%4?4-i%4:4,r=s%4?4-s%4:4;1===h&&(h=5),1===r&&(r=5),l=this._binPack.allocate(i+h,s+r),l.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.width-4,this.height-4),l=this._binPack.allocate(i+h,s+r));const n=this._glyphData[this._currentPage],o=a.bitmap;let g,p;if(o)for(let e=0;e<s;e++){g=i*e,p=this.width*(l.y+e+1)+l.x;for(let t=0;t<i;t++)n[p+t+1]=o[g+t]}}n[o]={rect:l,metrics:c,tileIDs:null,page:this._currentPage},h[o]={sdf:!0,rect:l,metrics:c,page:this._currentPage,code:o},this._dirties[this._currentPage]=!0}return h}))}removeGlyphs(t){for(const e in this._glyphIndex){const i=this._glyphIndex[e];if(!i)continue;let s;for(const e in i)if(s=i[e],s.tileIDs.delete(t),0===s.tileIDs.size){const t=this._glyphData[s.page],h=s.rect;let r,n;for(let e=0;e<h.height;e++)for(r=this.width*(h.y+e)+h.x,n=0;n<h.width;n++)t[r+n]=0;delete i[e],this._dirties[s.page]=!0}}}bind(e,i,s,h=0){this._textures[s]||(this._textures[s]=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));const r=this._textures[s];r.setSamplingMode(i),this._dirties[s]&&r.setData(this._glyphData[s]),e.bindTexture(r,h),this._dirties[s]=!1}dispose(){this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0}}


/***/ }),

/***/ "E6Oc":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SpriteMosaic.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
/* harmony import */ var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../symbols/cim/CIMSymbolHelper.js */ "eT81");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RectangleBinPack.js */ "PDbr");
/* harmony import */ var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../webgl/Rect.js */ "qcDN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h="dasharray-";class r{constructor(t,i,s=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(t<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=t,this._pageHeight=i,s>0&&(this._maxItemSize=s),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_9__["default"](t-4,i-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const t of this._textures)t&&t.dispose();this._textures.length=0}getWidth(t){return t>=this._size.length?-1:this._size[t][0]}getHeight(t){return t>=this._size.length?-1:this._size[t][1]}getPageSize(t){return t>=this._size.length?null:this._size[t]}setSpriteSource(t){if(this.dispose(),this.pixelRatio=t.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_9__["default"](this._pageWidth-4,this._pageHeight-4);const t=Math.floor(this._pageWidth),i=Math.floor(this._pageHeight),s=new Uint32Array(t*i);this._mosaicsData[0]=s,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=t}getSpriteItem(t,i=!1){let e,s,r=this._mosaicRects[t];if(r)return r;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;if(t&&t.startsWith(h)?([e,s]=this._rasterizeDash(t),i=!0):e=this._sprites.getSpriteInfo(t),!e||!e.width||!e.height||e.width<0||e.height<0)return null;const a=e.width,o=e.height,[n,_,g]=this._allocateImage(a,o);return n.width<=0?null:(this._copy(n,e,_,g,i,s),r={rect:n,width:a,height:o,sdf:e.sdf,simplePattern:!1,pixelRatio:e.pixelRatio,page:_},this._mosaicRects[t]=r,r)}getSpriteItems(t){const i={};for(const e of t)i[e.name]=this.getSpriteItem(e.name,e.repeat);return i}getMosaicItemPosition(t,i){const e=this.getSpriteItem(t,i),s=e&&e.rect;if(!s)return null;s.width=e.width,s.height=e.height;const h=e.width,r=e.height,a=2;return{tl:[s.x+a,s.y+a],br:[s.x+a+h,s.y+a+r],page:e.page}}bind(t,e,s=0,h=0){this._textures[s]||(this._textures[s]=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"](t,{pixelFormat:6408,dataType:5121,wrapMode:33071,width:this._size[s][0],height:this._size[s][1]},new Uint8Array(this._mosaicsData[s].buffer)));const r=this._textures[s];r.setSamplingMode(e),this._dirties[s]&&r.setData(new Uint8Array(this._mosaicsData[s].buffer)),t.bindTexture(r,h),this._dirties[s]=!1}static _copyBits(t,i,e,s,h,r,a,o,n,_,g){let c=s*i+e,p=o*r+a;if(g){p-=r;for(let a=-1;a<=_;a++,c=((a+_)%_+s)*i+e,p+=r)for(let i=-1;i<=n;i++)h[p+i]=t[c+(i+n)%n]}else for(let l=0;l<_;l++){for(let i=0;i<n;i++)h[p+i]=t[c+i];c+=i,p+=r}}_copy(t,i,e,s,h,a){if(!this._sprites||"loaded"!==this._sprites.loadStatus||e>=this._mosaicsData.length)return;const o=new Uint32Array(a?a.buffer:this._sprites.image.buffer),n=this._mosaicsData[e];n&&o||console.error("Source or target images are uninitialized!");const _=2,g=a?i.width:this._sprites.width;r._copyBits(o,g,i.x,i.y,n,s[0],t.x+_,t.y+_,i.width,i.height,h),this._dirties[e]=!0}_allocateImage(t,i){t+=2,i+=2;const h=Math.max(t,i);if(this._maxItemSize&&this._maxItemSize<h){const e=new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_10__["default"](0,0,t,i);return this._mosaicsData.push(new Uint32Array(t*i)),this._dirties.push(!0),this._size.push([t,i]),this._textures.push(void 0),[e,this._mosaicsData.length-1,[t,i]]}let r=t%4?4-t%4:4,a=i%4?4-i%4:4;1===r&&(r=5),1===a&&(a=5);const o=this._binPack.allocate(t+r,i+a);return o.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_9__["default"](this._pageWidth-4,this._pageHeight-4),this._allocateImage(t,i)):[o,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(i){const e=/\[(.*?)\]/,s=i.match(e);if(!s)return null;const h=s[1].split(",").map(Number),r=i.slice(i.lastIndexOf("-")+1),[a,o,n]=_symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__["SymbolHelper"].rasterizeDash(h,r);return[{x:0,y:0,width:o,height:n,sdf:!0,pixelRatio:1},new Uint8Array(a.buffer)]}}


/***/ }),

/***/ "Ki9T":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolFader.js ***!
  \*******************************************************************************************/
/*! exports provided: SymbolFader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolFader", function() { return _; });
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ "2yHJ");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core.js */ "y6Hv");
/* harmony import */ var _jobs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs.js */ "UbKN");
/* harmony import */ var _SymbolDeclutterer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SymbolDeclutterer.js */ "rEH/");
/* harmony import */ var _SymbolRepository_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SymbolRepository.js */ "1eRR");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util.js */ "vAXJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=.5,n=1e-6;class _ extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(t,e){super(),this.styleRepository=t,this._tileToHandle=new Map,this._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._completed=!1,this._symbolRepository=new _SymbolRepository_js__WEBPACK_IMPORTED_MODULE_6__["SymbolRepository"](4096,e,(()=>new _core_js__WEBPACK_IMPORTED_MODULE_3__["VTLUniqueSymbol"])),this._symbolDeclutterer=new _SymbolDeclutterer_js__WEBPACK_IMPORTED_MODULE_5__["SymbolDeclutterer"](e,this._symbolRepository,((t,e,i)=>new _jobs_js__WEBPACK_IMPORTED_MODULE_4__["CollisionJob"](t,e,i,this.styleRepository,this._zoom,this._viewState.rotation)),((t,e)=>{t.allSymbolsFadingOut=!0,t.lastOpacityUpdate=e,Object(_util_js__WEBPACK_IMPORTED_MODULE_7__["writeOpacityToBuffers"])(t,e,!0),t.decluttered=!0,t.requestRender()}),((t,e)=>this.styleRepository.getStyleLayerByUID(t.styleLayerUID).z-this.styleRepository.getStyleLayerByUID(e.styleLayerUID).z),(t=>{const e=this.styleRepository.getStyleLayerByUID(t);if(this._zoom+n<e.minzoom||this._zoom-n>=e.maxzoom)return!1;const i=e.getLayoutProperty("visibility");return!i||1!==i.getValue()}))}addTile(t){t.decluttered=!1,this._tileToHandle.set(t,t.on("symbols-changed",(()=>{this._symbolRepository.add(t),this.restartDeclutter()}))),this._symbolRepository.add(t),this.restartDeclutter()}removeTile(t){const e=this._tileToHandle.get(t);e&&(this._symbolRepository.removeTile(t),this.restartDeclutter(),e.remove(),this._tileToHandle.delete(t))}update(t,e){return this._zoom=t,this._viewState={scale:e.scale,rotation:e.rotation,center:[e.center[0],e.center[1]],size:[e.size[0],e.size[1]]},this._continueDeclutter(),this._completed}restartDeclutter(){this._completed=!1,this._symbolDeclutterer.restart(),this._notifyUnstable()}clear(){this._completed=!1,this._symbolRepository=null,this._symbolDeclutterer.restart(),this._tileToHandle.forEach((t=>t.remove())),this._tileToHandle.clear()}get stale(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation}deleteStyleLayers(t){this._symbolRepository.deleteStyleLayers(t)}_continueDeclutter(){this._completed&&!this.stale||(this._symbolDeclutterer.running||(this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=this._viewState.size[1],this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),this._completed=this._symbolDeclutterer.continue(_config_js__WEBPACK_IMPORTED_MODULE_2__["DECLUTTER_BUDGET"]),this._completed&&this._scheduleNotifyStable())}_scheduleNotifyStable(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._stableNotificationHandle)&&clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=setTimeout((()=>{this._stableNotificationHandle=null,this.emit("fade-complete")}),(1+c)*_config_js__WEBPACK_IMPORTED_MODULE_2__["FADE_DURATION"])}_notifyUnstable(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._stableNotificationHandle)&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null),this.emit("fade-start")}}


/***/ }),

/***/ "LTnl":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js ***!
  \**********************************************************************/
/*! exports provided: BitmapContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapContainer", function() { return t; });
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brushes.js */ "Oxob");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/WGLContainer.js */ "mgI5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_0__["brushes"].bitmap],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ "Lp6Q":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/tiling/TileInfoViewPOT.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layers/support/TileInfo.js */ "3/ME");
/* harmony import */ var _TileInfoView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileInfoView.js */ "AY31");
/* harmony import */ var _TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _TileInfoView_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const l=_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"].pool.acquire(e),t=0===l.level?null:_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"].getId(l.level-1,l.row>>1,l.col>>1,l.world);return _TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"].pool.release(l),t}getTileCoverage(e,l,s){const t=super.getTileCoverage(e,l,s);if(!t)return t;const o=1<<t.lodInfo.level;return t.spans=t.spans.filter((e=>e.row>=0&&e.row<o)),t}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const l=this._fullCacheLodInfos;if(e>l[0].scale)return l[0].level;let s,t;for(let o=0;o<l.length-1;o++)if(t=l[o+1],e>t.scale)return s=l[o],s.level+(s.scale-e)/(s.scale-t.scale);return l[l.length-1].level}}_initializeFullCacheLODs(l){let s;if(0===l[0].level)s=l.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})));else{const l=this.tileInfo.size[0],t=this.tileInfo.spatialReference;s=_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].create({size:l,spatialReference:t}).lods.map((e=>({level:e.level,resolution:e.resolution,scale:e.scale})))}for(let e=0;e<s.length;e++)this._levelByScale[s[e].scale]=s[e].level;this._fullCacheLodInfos=s}}


/***/ }),

/***/ "PDbr":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/RectangleBinPack.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/* harmony import */ var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/Rect.js */ "qcDN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](0,0,e,t))}get width(){return this._width}get height(){return this._height}allocate(e,t){if(e>this._width||t>this._height)return new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"];let i=null,s=-1;for(let h=0;h<this._free.length;++h){const w=this._free[h];e<=w.width&&t<=w.height&&(null===i||w.y<=i.y&&w.x<=i.x)&&(i=w,s=h)}return null===i?new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]:(this._free.splice(s,1),i.width<i.height?(i.width>e&&this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+e,i.y,i.width-e,t)),i.height>t&&this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+t,i.width,i.height-t))):(i.width>e&&this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+e,i.y,i.width-e,i.height)),i.height>t&&this._free.push(new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+t,e,i.height-t))),new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y,e,t))}release(h){for(let e=0;e<this._free.length;++e){const t=this._free[e];if(t.y===h.y&&t.height===h.height&&t.x+t.width===h.x)t.width+=h.width;else if(t.x===h.x&&t.width===h.width&&t.y+t.height===h.y)t.height+=h.height;else if(h.y===t.y&&h.height===t.height&&h.x+h.width===t.x)t.x=h.x,t.width+=h.width;else{if(h.x!==t.x||h.width!==t.width||h.y+h.height!==t.y)continue;t.y=h.y,t.height+=h.height}this._free.splice(e,1),this.release(h)}this._free.push(h)}}


/***/ }),

/***/ "Pl/d":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/VectorTileContainer.js ***!
  \**************************************************************************************/
/*! exports provided: VectorTileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorTileContainer", function() { return p; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _decluttering_SymbolFader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decluttering/SymbolFader.js */ "Ki9T");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webgl/enums.js */ "yE7X");
/* harmony import */ var _webgl_RenderableTile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/RenderableTile.js */ "X4n7");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl/TileContainer.js */ "ZyIX");
/* harmony import */ var _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tiling/TileCoverage.js */ "umoc");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=1e-6;function y(e,t){if(e){const s=e.getLayoutProperty("visibility");if(!s||1!==s.getValue()&&(void 0===e.minzoom||e.minzoom<t+c)&&(void 0===e.maxzoom||e.maxzoom>=t-c))return!0}return!1}class p extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(e){super(e),this._backgroundTiles=[],this._pointToCallbacks=new Map}destroy(){this.removeAllChildren(),this._spriteMosaic&&(this._spriteMosaic.dispose(),this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic.dispose(),this._glyphMosaic=null),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader)&&(this._symbolFader.clear(),this._symbolFader=null),this._styleRepository=null,this._backgroundTiles=[],this._pointToCallbacks.clear()}setStyleResources(e,r,i){if(this._spriteMosaic=e,this._glyphMosaic=r,this._styleRepository=i,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._symbolFader)){const e=new _decluttering_SymbolFader_js__WEBPACK_IMPORTED_MODULE_3__["SymbolFader"](this._styleRepository,this.children);e.on("fade-start",(()=>{this.emit("fade-start"),this.requestRender()})),e.on("fade-complete",(()=>{this.emit("fade-complete"),this.requestRender()})),this._symbolFader=e}Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this._symbolFader).styleRepository=i}deleteStyleLayers(t){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader)&&this._symbolFader.deleteStyleLayers(t)}async hitTest(e){const t=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createResolver"])();return this._pointToCallbacks.set(e,t),this.requestRender(),t.promise}enterTileInvalidation(){for(const e of this.children)e.invalidating=!0}createRenderParams(e){return{...super.createRenderParams(e),renderPass:null,styleLayer:null,styleLayerUID:-1,glyphMosaic:this._glyphMosaic,spriteMosaic:this._spriteMosaic,hasClipping:!!this._clippingInfos}}doRender(e){!this.visible||e.drawPhase!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].MAP&&e.drawPhase!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].DEBUG||void 0===this._spriteMosaic||super.doRender(e)}addChild(t){return super.addChild(t),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader)?this._symbolFader.addTile(t):t.decluttered=!0,this.requestRender(),t}removeChild(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader)&&this._symbolFader.removeTile(t),this.requestRender(),super.removeChild(t)}renderChildren(e){const{drawPhase:t}=e;if(t!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].DEBUG){if(this._doRender(e),this._pointToCallbacks.size>0){e.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].HITTEST;const s=e.painter.effects.hittest;s.bind(e),this._doRender(e),s.draw(e,this._pointToCallbacks),s.unbind(e),e.drawPhase=t}}else super.renderChildren(e)}removeAllChildren(){for(let t=0;t<this.children.length;t++){const s=this.children[t];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader)&&this._symbolFader.removeTile(s),s.dispose()}super.removeAllChildren()}getStencilTarget(){return this.children.filter((e=>e.neededForCoverage&&e.hasData()))}restartDeclutter(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader)&&this._symbolFader.restartDeclutter()}_doRender(e){const{context:t}=e,s=this._styleRepository;if(!s)return;const r=s.layers;let i=!0;e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].HITTEST&&(i=!1),s.backgroundBucketIds.length>0&&(e.renderPass="background",this._renderBackgroundLayers(e,s.backgroundBucketIds)),super.renderChildren(e),e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].MAP&&this._fade(e.displayLevel,e.state);const o=this.children.filter((e=>e.visible&&e.hasData()));if(!o||0===o.length)return t.bindVAO(),t.setStencilTestEnabled(!0),void t.setBlendingEnabled(!0);for(const l of o)l.triangleCount=0;t.setStencilWriteMask(0),t.setColorMask(!0,!0,!0,!0),t.setStencilOp(7680,7680,7681),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!0),t.setDepthFunction(515),t.setClearDepth(1),t.clear(t.gl.DEPTH_BUFFER_BIT),e.renderPass="opaque";for(let l=r.length-1;l>=0;l--)this._renderStyleLayer(r[l],e,o);t.setDepthWriteEnabled(!1),t.setBlendingEnabled(i),t.setBlendFunctionSeparate(1,771,1,771),e.renderPass="translucent";for(let l=0;l<r.length;l++)this._renderStyleLayer(r[l],e,o);t.setDepthTestEnabled(!1),e.renderPass="symbol";for(let l=0;l<r.length;l++)this._renderStyleLayer(r[l],e,o);t.bindVAO(),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0)}_fade(t,s){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._symbolFader)&&(this._symbolFader.update(t,s)||this.requestRender())}_renderStyleLayer(e,t,s){const{painter:r,renderPass:i}=t;if(void 0===e)return;const o=e.getLayoutProperty("visibility");if(o&&1===o.getValue())return;let l;switch(e.type){case 0:return;case 1:if("opaque"!==i&&"translucent"!==t.renderPass)return;l="vtlFill";break;case 2:if("translucent"!==i)return;l="vtlLine";break;case 4:if("symbol"!==i)return;l="vtlCircle";break;case 3:if("symbol"!==i)return;l="vtlSymbol"}if(s=3===e.type?s.filter((e=>e.decluttered)):s.filter((e=>e.neededForCoverage)),"vtlSymbol"!==l){const r=t.displayLevel;if(0===s.length||void 0!==e.minzoom&&e.minzoom>=r+c||void 0!==e.maxzoom&&e.maxzoom<r-c)return}const n=e.uid;t.styleLayerUID=n,t.styleLayer=e;for(const a of s)if(a.layerData.has(n)){r.renderObjects(t,s,l);break}}_renderBackgroundLayers(t,s){const{context:r,displayLevel:o,painter:a,state:c}=t,p=this._styleRepository;let u=!1;for(const e of s){if(0===p.getLayerById(e).type&&y(p.getLayerById(e),o)){u=!0;break}}if(!u)return;const m=this._tileInfoView.getTileCoverage(t.state,0,"smallest"),{spans:b,lodInfo:f}=m,{level:_}=f,g=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])(),T=[];if(this._renderPasses){const s=this._renderPasses[0];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._clippingInfos)&&(s.brushes[0].prepareState(t,this._clippingInfos[0]),s.brushes[0].drawMany(t,this._clippingInfos))}const v=this._backgroundTiles;let C,F=0;for(const{row:e,colFrom:l,colTo:d}of b)for(let t=l;t<=d;t++){if(F<v.length)C=v[F],C.key.set(_,e,f.normalizeCol(t),f.getWorldForColumn(t)),this._tileInfoView.getTileBounds(g,C.key,!1),C.x=g[0],C.y=g[3];else{const s=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_8__["default"](_,e,f.normalizeCol(t),f.getWorldForColumn(t)),r=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])(),s);C=new _webgl_RenderableTile_js__WEBPACK_IMPORTED_MODULE_5__["RenderableTile"](s,r[0],r[3],512,512,4096,4096),v.push(C)}C.setTransform(c,this._tileInfoView.getTileResolution(C.key)),T.push(C),F++}r.setStencilWriteMask(0),r.setColorMask(!0,!0,!0,!0),r.setStencilOp(7680,7680,7681),r.setStencilFunction(514,0,255);let k=!0;t.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__["WGLDrawPhase"].HITTEST&&(k=!1),r.setStencilTestEnabled(k);for(const e of s){const s=p.getLayerById(e);0===s.type&&y(s,o)&&(t.styleLayerUID=s.uid,t.styleLayer=s,a.renderObjects(t,T,"vtlBackground"))}_tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_7__["default"].pool.release(m)}}


/***/ }),

/***/ "Rr/1":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/VectorTileLayerView2D.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return j; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/accessorSupport/diffUtils.js */ "DxxZ");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _engine_vectorTiles_TileHandler_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../engine/vectorTiles/TileHandler.js */ "ga/j");
/* harmony import */ var _engine_vectorTiles_TileManager_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../engine/vectorTiles/TileManager.js */ "RtzU");
/* harmony import */ var _engine_vectorTiles_VectorTile_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../engine/vectorTiles/VectorTile.js */ "Zrl8");
/* harmony import */ var _engine_vectorTiles_VectorTileContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../engine/vectorTiles/VectorTileContainer.js */ "Pl/d");
/* harmony import */ var _engine_vectorTiles_decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../engine/vectorTiles/decluttering/debugging.js */ "v3/X");
/* harmony import */ var _engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../engine/vectorTiles/style/StyleRepository.js */ "kB7V");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _support_Display_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/Display.js */ "doP5");
/* harmony import */ var _tiling_TileInfoViewPOT_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../tiling/TileInfoViewPOT.js */ "Lp6Q");
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../tiling/TileQueue.js */ "B81a");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const H=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.2d.layers.VectorTileLayerView2D");let R=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_19__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_23__["default"])){constructor(){super(...arguments),this._styleChanges=[],this._fetchQueue=null,this._parseQueue=null,this._isTileHandlerReady=!1,this.fading=!1}initialize(){const e=this.layer.tileInfo;if(!(e&&e.spatialReference).equals(this.view.spatialReference))return void this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})));const{style:t}=this.layer.currentStyleInfo;this._styleRepository=new _engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_18__["default"](t),this._tileInfoView=new _tiling_TileInfoViewPOT_js__WEBPACK_IMPORTED_MODULE_21__["default"](this.layer.tileInfo,this.layer.fullExtent),this._vectorTileContainer=new _engine_vectorTiles_VectorTileContainer_js__WEBPACK_IMPORTED_MODULE_16__["VectorTileContainer"](this._tileInfoView),this._tileHandler=new _engine_vectorTiles_TileHandler_js__WEBPACK_IMPORTED_MODULE_13__["TileHandler"](this.layer,this._styleRepository,window.devicePixelRatio||1),this.container.addChild(this._vectorTileContainer),this.handles.add([this._vectorTileContainer.on("fade-start",(()=>{this.fading=!0,this.notifyChange("updating"),this.requestUpdate()})),this._vectorTileContainer.on("fade-complete",(()=>{this._collisionBoxesDisplay&&this._collisionBoxesDisplay.requestRender(),this.fading=!1,this.notifyChange("updating"),this.requestUpdate()})),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__["init"])(this.layer,"symbolCollisionBoxesVisible",(e=>{e?(this._collisionBoxesDisplay=new _support_Display_js__WEBPACK_IMPORTED_MODULE_20__["Display"]({render:e=>this._renderCollisionBoxes(e.context)}),this.container.addChild(this._collisionBoxesDisplay)):(this.container.removeChild(this._collisionBoxesDisplay),this._collisionBoxesDisplay=null)}))])}destroy(){var e;this._stop(),this.container.removeAllChildren(),this._vectorTileContainer&&(this._vectorTileContainer.destroy(),this._vectorTileContainer=null),null==(e=this._tileHandler)||e.destroy(),this._tileHandler=null}async hitTest(e,i){if(!this._tileHandlerPromise)return null;await this._tileHandlerPromise;const s=await this._vectorTileContainer.hitTest(i);if(!s||0===s.length)return null;const r=s[0]-1,a=this._styleRepository,l=a.getStyleLayerByUID(r);if(!l)return null;const o=a.getStyleLayerIndex(l.id),n=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]({attributes:{layerId:o,layerName:l.id,layerUID:r}});return n.layer=this.layer,n.sourceLayer=this.layer,[n]}update(e){if(this._tileHandlerPromise&&this._isTileHandlerReady)return e.pixelRatio!==this._tileHandler.devicePixelRatio?(this._start(),void(this._tileHandler.devicePixelRatio=e.pixelRatio)):void(this._styleChanges.length>0?this._tileHandlerPromise=this._applyStyleChanges():(this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.state=e.state,this._parseQueue.state=e.state,this._tileManager.update(e)||this.requestUpdate(),this._parseQueue.resume(),this._fetchQueue.resume()))}attach(){this._start(),this.handles.add([this.layer.on("paint-change",(e=>{if(e.isDataDriven)this._styleChanges.push({type:0,data:e}),this.notifyChange("updating"),this.requestUpdate();else{const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=3===i.type;t.setPaintProperties(e.layer,e.paint),s&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender()}})),this.layer.on("layout-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);if(!i)return;const s=Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_11__["diff"])(i.layout,e.layout);if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(s)){if(Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasDiff"])(s,"visibility")&&1===b(s))return t.setLayoutProperties(e.layer,e.layout),3===i.type&&this._vectorTileContainer.restartDeclutter(),void this._vectorTileContainer.requestRender();this._styleChanges.push({type:1,data:e}),this.notifyChange("updating"),this.requestUpdate()}})),this.layer.on("style-layer-visibility-change",(e=>{const t=this._styleRepository,i=t.getLayerById(e.layer);i&&(t.setStyleLayerVisibility(e.layer,e.visibility),3===i.type&&this._vectorTileContainer.restartDeclutter(),this._vectorTileContainer.requestRender())})),this.layer.on("style-layer-change",(e=>{this._styleChanges.push({type:2,data:e}),this.notifyChange("updating"),this.requestUpdate()})),this.layer.on("delete-style-layer",(e=>{this._styleChanges.push({type:3,data:e}),this.notifyChange("updating"),this.requestUpdate()})),this.layer.on("load-style",(()=>this._loadStyle()))],this.declaredClass)}detach(){this._stop(),this.handles.remove(this.declaredClass)}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this._collisionBoxesDisplay&&this._vectorTileContainer.restartDeclutter(),this.requestUpdate()}canResume(){let e=super.canResume();const t=this.layer;if(e&&t.currentStyleInfo){const i=this.view.scale,s=t.currentStyleInfo;if(s&&s.layerDefinition){const t=s.layerDefinition;t.minScale&&t.minScale<i&&(e=!1),t.maxScale&&t.maxScale>i&&(e=!1)}}return e}isUpdating(){const e=this._vectorTileContainer.children;return!this._isTileHandlerReady||!this._fetchQueue||!this._parseQueue||this._fetchQueue.updating||this._parseQueue.updating||e.length>0&&e.filter((e=>e.invalidating)).length>0||this.fading}acquireTile(e){const t=this._createVectorTile(e);return this._tileHandlerPromise.then((()=>{this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e}))).then((e=>{t.once("attach",(()=>this.requestUpdate())),e&&(t.setData(e),this.requestUpdate(),this.notifyChange("updating"))})).catch((e=>{this.notifyChange("updating"),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(e)||H.error(e)}))})),t}releaseTile(e){const t=e.key.id;this._fetchQueue.abort(t),this._parseQueue.abort(t),this.requestUpdate()}_start(){if(this._stop(),this._tileManager=new _engine_vectorTiles_TileManager_js__WEBPACK_IMPORTED_MODULE_14__["TileManager"]({acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView},this._vectorTileContainer),!this.layer.currentStyleInfo)return;const e=new AbortController,t=this._tileHandler.start({signal:e.signal}).then((()=>{this._fetchQueue=new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_22__["default"]({tileInfoView:this._tileInfoView,process:(e,t)=>this._getTileData(e,t),concurrency:15}),this._parseQueue=new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_22__["default"]({tileInfoView:this._tileInfoView,process:(e,t)=>this._parseTileData(e,t),concurrency:8}),this.requestUpdate(),this._isTileHandlerReady=!0}));this._tileHandler.spriteMosaic.then((e=>{this._vectorTileContainer.setStyleResources(e,this._tileHandler.glyphMosaic,this._styleRepository),this.requestUpdate()})),this._tileHandlerAbortController=e,this._tileHandlerPromise=t}_stop(){if(!this._tileHandlerAbortController||!this._vectorTileContainer)return;const e=this._tileHandlerAbortController;e&&e.abort(),this._tileHandlerPromise=null,this._isTileHandlerReady=!1,this._fetchQueue&&(this._fetchQueue.destroy(),this._fetchQueue=null),this._parseQueue&&(this._parseQueue.destroy(),this._parseQueue=null),this._tileManager&&(this._tileManager.destroy(),this._tileManager=null),this._vectorTileContainer.removeAllChildren()}async _getTileData(e,t){const i=await this._tileHandler.fetchTileData(e,t);return this.notifyChange("updating"),i}async _parseTileData(e,t){return this._tileHandler.parseTileData(e,t)}async _applyStyleChanges(){this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._tileManager.clearCache();const e=this._styleChanges;try{await this._tileHandler.updateStyle(e)}catch(l){H.error("error applying vector-tiles style update",l.message),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0}const t=this._styleRepository,i=[];e.forEach((e=>{if(3!==e.type)return;const s=e.data,r=t.getLayerById(s.layer);r&&i.push(r.uid)}));const s=[];let r;e.forEach((e=>{const i=e.type,a=e.data;switch(i){case 0:t.setPaintProperties(a.layer,a.paint),r=a.layer;break;case 1:t.setLayoutProperties(a.layer,a.layout),r=a.layer;break;case 3:return void t.deleteStyleLayer(a.layer);case 2:t.setStyleLayer(a.layer,a.index),r=a.layer.id}const l=t.getLayerById(r);l&&s.push(l.uid)}));const a=this._vectorTileContainer.children;if(i.length>0){this._vectorTileContainer.deleteStyleLayers(i);for(const e of a)e.deleteLayerData(i)}if(this._fetchQueue.resume(),this._parseQueue.resume(),s.length>0){const e=[];for(const t of a){const i=this._fetchQueue.push(t.key).then((e=>this._parseQueue.push({key:t.key,data:e,styleLayerUIDs:s}))).then((e=>t.setData(e)));e.push(i)}await Promise.all(e)}this._styleChanges=[],this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate()}async _loadStyle(){const{style:e}=this.layer.currentStyleInfo,t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(e);this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this.notifyChange("updating"),this._styleRepository=new _engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_18__["default"](t),this._vectorTileContainer.destroy(),this._tileManager.clear(),this._tileHandlerAbortController.abort(),this._tileHandlerAbortController=new AbortController;const{signal:i}=this._tileHandlerAbortController;try{this._tileHandlerPromise=this._tileHandler.setStyle(this._styleRepository,t),await this._tileHandlerPromise}catch(a){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__["isAbortError"])(a))throw a}if(i.aborted)return this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),void this.requestUpdate();const r=await this._tileHandler.spriteMosaic;this._vectorTileContainer.setStyleResources(r,this._tileHandler.glyphMosaic,this._styleRepository),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.notifyChange("updating"),this.requestUpdate()}_createVectorTile(e){const t=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__["create"])(),e);return new _engine_vectorTiles_VectorTile_js__WEBPACK_IMPORTED_MODULE_15__["VectorTile"](e,t[0],t[3],512,512,this._styleRepository)}_renderCollisionBoxes(e){for(const t of this._vectorTileContainer.children)if(t.symbols){const i=[];for(const[e,s]of t.symbols)i.push(...s);Object(_engine_vectorTiles_decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_17__["drawColliders"])(e,i)}}};function b(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__["isNone"])(e))return 0;switch(e.type){case"partial":return Object.keys(e.diff).length;case"complete":return Math.max(Object.keys(e.oldValue).length,Object.keys(e.newValue).length);case"collection":return Object.keys(e.added).length+Object.keys(e.changed).length+Object.keys(e.removed).length}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],R.prototype,"_fetchQueue",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],R.prototype,"_parseQueue",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],R.prototype,"_isTileHandlerReady",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__["property"])()],R.prototype,"fading",void 0),R=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.views.2d.layers.VectorTileLayerView2D")],R);const j=R;


/***/ }),

/***/ "RtzU":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileManager.js ***!
  \******************************************************************************/
/*! exports provided: TileManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileManager", function() { return a; });
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/LRUCache.js */ "wk6I");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileCoverage.js */ "umoc");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=512,o=1e-6,n=(e,i)=>e+1/(1<<2*i);class a{constructor(i,t){this._tiles=new Map,this._tileCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](40,(e=>e.dispose())),this._viewSize=[0,0],this._visibleTiles=new Map,this.acquireTile=i.acquireTile,this.releaseTile=i.releaseTile,this.tileInfoView=i.tileInfoView,this._container=t}destroy(){for(const[e,i]of this._tiles)i.dispose();this._tiles=null,this._tileCache.clear(),this._tileCache=null}update(e){this._updateCacheSize(e);const i=this.tileInfoView,t=i.getTileCoverage(e.state,0,"smallest"),{spans:r,lodInfo:o}=t,{level:n}=o,a=this._tiles,c=new Set,h=new Set;for(const{row:s,colFrom:_,colTo:f}of r)for(let e=_;e<=f;e++){const i=_tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__["default"].getId(n,s,o.normalizeCol(e),o.getWorldForColumn(e)),t=this._getOrAcquireTile(i);c.add(i),t.processed()?this._addToContainer(t):h.add(new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__["default"](i))}for(const[s,l]of a)l.isCoverage=c.has(s);for(const s of h)this._findPlaceholdersForMissingTiles(s,c);let d=!1;for(const[s,l]of a)l.neededForCoverage=c.has(s),l.neededForCoverage||l.isHoldingForFade&&i.intersects(t,l.key)&&c.add(s),l.isFading&&(d=!0);for(const[s,l]of this._tiles)c.has(s)||this._releaseTile(s);return _tiling_TileCoverage_js__WEBPACK_IMPORTED_MODULE_2__["default"].pool.release(t),!d}clear(){this._tiles.clear(),this._tileCache.clear(),this._visibleTiles.clear()}clearCache(){this._tileCache.clear()}_findPlaceholdersForMissingTiles(e,i){const t=[];for(const[l,r]of this._tiles)this._addPlaceholderChild(t,r,e,i);const s=t.reduce(n,0);Math.abs(1-s)<o||this._addPlaceholderParent(e.id,i)}_addPlaceholderChild(e,i,t,s){i.key.level<=t.level||!i.hasData()||h(t,i.key)&&(this._addToContainer(i),s.add(i.id),e.push(i.key.level-t.level))}_addPlaceholderParent(e,i){const t=this._tiles;let s=e;for(;;){if(s=c(s),!s||i.has(s))return;const e=t.get(s);if(e&&e.hasData())return this._addToContainer(e),void i.add(e.id)}}_getOrAcquireTile(e){let i=this._tiles.get(e);return i||(i=this._tileCache.pop(e),i||(i=this.acquireTile(new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__["default"](e))),this._tiles.set(e,i),i)}_releaseTile(e){const i=this._tiles.get(e);this.releaseTile(i),this._removeFromContainer(i),this._tiles.delete(e),i.hasData()?this._tileCache.put(e,i,1):i.dispose()}_addToContainer(e){let s;const l=[],r=this._container;if(r.contains(e))return;const o=this._visibleTiles;for(const[t,n]of o)this._canConnectDirectly(e,n)&&l.push(n),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s)&&this._canConnectDirectly(n,e)&&(s=n);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)){for(const i of l)s.childrenTiles.delete(i),e.childrenTiles.add(i),i.parentTile=e;s.childrenTiles.add(e),e.parentTile=s}else for(const i of l)e.childrenTiles.add(i),i.parentTile=e;o.set(e.id,e),r.addChild(e)}_removeFromContainer(e){if(this._visibleTiles.delete(e.id),this._container.removeChild(e),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.parentTile)){e.parentTile.childrenTiles.delete(e);for(const i of e.childrenTiles)Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.parentTile)&&e.parentTile.childrenTiles.add(i)}for(const i of e.childrenTiles)i.parentTile=e.parentTile;e.parentTile=null,e.childrenTiles.clear()}_canConnectDirectly(e,i){const t=e.key;let{level:s,row:l,col:r,world:o}=i.key;const n=this._visibleTiles;for(;s>0;){if(s--,l>>=1,r>>=1,t.level===s&&t.row===l&&t.col===r&&t.world===o)return!0;if(n.has(`${s}/${l}/${r}/${o}`))return!1}return!1}_updateCacheSize(e){const i=e.state.size;if(i[0]===this._viewSize[0]&&i[1]===this._viewSize[1])return;const t=Math.ceil(i[0]/r)+1,s=Math.ceil(i[1]/r)+1;this._viewSize[0]=i[0],this._viewSize[1]=i[1],this._tileCache.maxSize=5*t*s}}function c(e){const[i,t,s,l]=e.split("/"),r=parseInt(i,10);return 0===r?null:`${r-1}/${parseInt(t,10)>>1}/${parseInt(s,10)>>1}/${parseInt(l,10)}`}function h(e,i){const t=i.level-e.level;return e.row===i.row>>t&&e.col===i.col>>t&&e.world===i.world}


/***/ }),

/***/ "UbKN":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/jobs.js ***!
  \************************************************************************************/
/*! exports provided: CollisionJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionJob", function() { return r; });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "2yHJ");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "vAXJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,t,n,o,r,s){const{iconRotationAlignment:i,textRotationAlignment:l,iconTranslate:a,iconTranslateAnchor:c,textTranslate:h,textTranslateAnchor:u}=o;let d=0;for(const y of e.colliders){const[e,o]=0===y.partIndex?a:h,x=0===y.partIndex?c:u,g=y.minLod<=s&&s<=y.maxLod;d+=g?0:1,y.enabled=g,y.xScreen=y.xTile*r[0]+y.yTile*r[3]+r[6],y.yScreen=y.xTile*r[1]+y.yTile*r[4]+r[7],0===x?(y.xScreen+=n*e-t*o,y.yScreen+=t*e+n*o):(y.xScreen+=e,y.yScreen+=o),1===(0===y.partIndex?i:l)?(y.dxScreen=y.dxPixels,y.dyScreen=y.dyPixels):(y.dxScreen=n*(y.dxPixels+y.width/2)-t*(y.dyPixels+y.height/2)-y.width/2,y.dyScreen=t*(y.dxPixels+y.width/2)+n*(y.dyPixels+y.height/2)-y.height/2)}e.colliders.length>0&&d===e.colliders.length&&(e.unique.show=!1)}class r{constructor(o,r,s,i,l,a){this._symbols=o,this._styleRepository=i,this._zoom=l,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new _util_js__WEBPACK_IMPORTED_MODULE_2__["GridIndex"](r,s,_config_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_GRID_CELL_SIZE"]),this._si=Math.sin(Math.PI*a/180),this._co=Math.cos(Math.PI*a/180);for(const t of o)for(const n of t.symbols)this._allNeededMatrices.has(n.tile)||this._allNeededMatrices.set(n.tile,Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__["a"])(n.tile.transforms.tileUnitsToPixels))}work(e){const t=this._gridIndex;function n(e){const n=e.xScreen+e.dxScreen,o=e.yScreen+e.dyScreen,r=n+e.width,s=o+e.height,[i,l,a,c]=t.getCellSpan(n,o,r,s);for(let h=l;h<=c;h++)for(let e=i;e<=a;e++){const i=t.cells[h][e];for(const e of i){const t=e.xScreen+e.dxScreen,i=e.yScreen+e.dyScreen,l=t+e.width,a=i+e.height;if(!(r<t||n>l||s<i||o>a))return!0}}return!1}const r=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const t=this._symbols[this._currentLayerCursor],s=this._getProperties(t.styleLayerUID);for(;this._currentSymbolCursor<t.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-r>e)return!1;const i=t.symbols[this._currentSymbolCursor];if(!i.unique.show)continue;o(i,this._si,this._co,s,this._allNeededMatrices.get(i.tile),this._zoom);const l=i.unique;if(!l.show)continue;const{iconAllowOverlap:a,iconIgnorePlacement:c,textAllowOverlap:h,textIgnorePlacement:u}=s;for(const e of i.colliders){if(!e.enabled)continue;const t=l.parts[e.partIndex];if(!t.show)continue;!(e.partIndex?h:a)&&n(e)&&(e.hard?l.show=!1:t.show=!1)}if(l.show)for(const e of i.colliders){if(!e.enabled)continue;if(e.partIndex?u:c)continue;if(!l.parts[e.partIndex].show)continue;const t=e.xScreen+e.dxScreen,n=e.yScreen+e.dyScreen,o=t+e.width,r=n+e.height,[s,i,a,h]=this._gridIndex.getCellSpan(t,n,o,r);for(let l=i;l<=h;l++)for(let t=s;t<=a;t++){this._gridIndex.cells[l][t].push(e)}}}}return!0}_getProperties(e){const t=this._styleProps.get(e);if(t)return t;const n=this._zoom,o=this._styleRepository.getStyleLayerByUID(e),r=0!==o.getLayoutValue("symbol-placement",n);let s=o.getLayoutValue("icon-rotation-alignment",n);2===s&&(s=r?0:1);let i=o.getLayoutValue("text-rotation-alignment",n);2===i&&(i=r?0:1);const l=o.getPaintValue("icon-translate",n),a=o.getPaintValue("icon-translate-anchor",n),c=o.getPaintValue("text-translate",n),h=o.getPaintValue("text-translate-anchor",n),u={iconAllowOverlap:o.getLayoutValue("icon-allow-overlap",n),iconIgnorePlacement:o.getLayoutValue("icon-ignore-placement",n),textAllowOverlap:o.getLayoutValue("text-allow-overlap",n),textIgnorePlacement:o.getLayoutValue("text-ignore-placement",n),iconRotationAlignment:s,textRotationAlignment:i,iconTranslateAnchor:a,iconTranslate:l,textTranslateAnchor:h,textTranslate:c};return this._styleProps.set(e,u),u}}


/***/ }),

/***/ "WDSG":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/RenderBucket.js ***!
  \*******************************************************************************/
/*! exports provided: CircleRenderBucket, FillRenderBucket, LineRenderBucket, RenderBucketBase, SymbolRenderBucket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleRenderBucket", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillRenderBucket", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineRenderBucket", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderBucketBase", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolRenderBucket", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "GVa1");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/enums.js */ "0X3F");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _decluttering_util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./decluttering/util.js */ "vAXJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class f{constructor(e,t){this.layerUIDs=[],this.isDestroyed=!1,this.data=e,this.memoryUsed=e.byteLength;let r=1;const i=new Uint32Array(e);this.layerUIDs=[];const s=i[r++];for(let n=0;n<s;n++)this.layerUIDs[n]=i[r++];this.bufferDataOffset=r,t&&(this.layer=t.getStyleLayerByUID(this.layerUIDs[0]))}get isPreparedForRendering(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.data)}get offset(){return this.bufferDataOffset}destroy(){this.isDestroyed||(this.doDestroy(),this.isDestroyed=!0)}prepareForRendering(t){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.data)||(this.doPrepareForRendering(t,this.data,this.bufferDataOffset),this.data=null)}}class o extends f{constructor(e,t){super(e,t),this.type=2,this.lineIndexStart=0,this.lineIndexCount=0;const r=new Uint32Array(e);let i=this.bufferDataOffset;this.lineIndexStart=r[i++],this.lineIndexCount=r[i++];const s=r[i++];if(s>0){const e=new Map;for(let t=0;t<s;t++){const t=r[i++],s=r[i++],n=r[i++];e.set(t,[s,n])}this.patternMap=e}this.bufferDataOffset=i}hasData(){return this.lineIndexCount>0}triangleCount(){return this.lineIndexCount/3}doDestroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.lineVertexArrayObject)&&this.lineVertexArrayObject.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.lineVertexBuffer)&&this.lineVertexBuffer.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.lineIndexBuffer)&&this.lineIndexBuffer.dispose(),this.lineVertexArrayObject=null,this.lineVertexBuffer=null,this.lineIndexBuffer=null,this.memoryUsed=0}doPrepareForRendering(e,t,r){const n=new Uint32Array(t),f=new Int32Array(n.buffer),o=n[r++];this.lineVertexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(e,35044,new Int32Array(f.buffer,4*r,o)),r+=o;const a=n[r++];this.lineIndexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createIndex(e,35044,new Uint32Array(n.buffer,4*r,a)),r+=a;const l=this.layer.lineMaterial;this.lineVertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,l.getAttributeLocations(),l.getLayoutInfo(),{geometry:this.lineVertexBuffer},this.lineIndexBuffer)}}class a extends f{constructor(e,t){super(e,t),this.type=1,this.fillIndexStart=0,this.fillIndexCount=0,this.outlineIndexStart=0,this.outlineIndexCount=0;const r=new Uint32Array(e);let i=this.bufferDataOffset;this.fillIndexStart=r[i++],this.fillIndexCount=r[i++],this.outlineIndexStart=r[i++],this.outlineIndexCount=r[i++];const s=r[i++];if(s>0){const e=new Map;for(let t=0;t<s;t++){const t=r[i++],s=r[i++],n=r[i++];e.set(t,[s,n])}this.patternMap=e}this.bufferDataOffset=i}hasData(){return this.fillIndexCount>0||this.outlineIndexCount>0}triangleCount(){return(this.fillIndexCount+this.outlineIndexCount)/3}doDestroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.fillVertexArrayObject)&&this.fillVertexArrayObject.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.fillVertexBuffer)&&this.fillVertexBuffer.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.fillIndexBuffer)&&this.fillIndexBuffer.dispose(),this.fillVertexArrayObject=null,this.fillVertexBuffer=null,this.fillIndexBuffer=null,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.outlineVertexArrayObject)&&this.outlineVertexArrayObject.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.outlineVertexBuffer)&&this.outlineVertexBuffer.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.outlineIndexBuffer)&&this.outlineIndexBuffer.dispose(),this.outlineVertexArrayObject=null,this.outlineVertexBuffer=null,this.outlineIndexBuffer=null,this.memoryUsed=0}doPrepareForRendering(e,t,r){const n=new Uint32Array(t),f=new Int32Array(n.buffer),o=n[r++];this.fillVertexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(e,35044,new Int32Array(f.buffer,4*r,o)),r+=o;const a=n[r++];this.fillIndexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createIndex(e,35044,new Uint32Array(n.buffer,4*r,a)),r+=a;const l=n[r++];this.outlineVertexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(e,35044,new Int32Array(f.buffer,4*r,l)),r+=l;const u=n[r++];this.outlineIndexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createIndex(e,35044,new Uint32Array(n.buffer,4*r,u)),r+=u;const c=this.layer,h=c.fillMaterial,x=c.outlineMaterial;this.fillVertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,h.getAttributeLocations(),h.getLayoutInfo(),{geometry:this.fillVertexBuffer},this.fillIndexBuffer),this.outlineVertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,x.getAttributeLocations(),x.getLayoutInfo(),{geometry:this.outlineVertexBuffer},this.outlineIndexBuffer)}}class l extends f{constructor(e,t,r){super(e,t),this.type=3,this.iconPerPageElementsMap=new Map,this.glyphPerPageElementsMap=new Map,this.symbolInstances=[],this.isIconSDF=!1,this.opacityChanged=!1,this.lastOpacityUpdate=0,this.symbols=[];const i=new Uint32Array(e),s=new Int32Array(e),f=new Float32Array(e);let o=this.bufferDataOffset;this.isIconSDF=!!i[o++];const a=i[o++];for(let n=0;n<a;n++){const e=i[o++],t=i[o++],r=i[o++];this.iconPerPageElementsMap.set(e,[t,r])}const l=i[o++];for(let n=0;n<l;n++){const e=i[o++],t=i[o++],r=i[o++];this.glyphPerPageElementsMap.set(e,[t,r])}const u=i[o++],c=i[o++];this.iconOpacity=new Int32Array(u),this.textOpacity=new Int32Array(c),o=Object(_decluttering_util_js__WEBPACK_IMPORTED_MODULE_9__["deserializeSymbols"])(i,s,f,o,this.symbols,r),this.bufferDataOffset=o}hasData(){return this.iconPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0}triangleCount(){let e=0;for(const[t,r]of this.iconPerPageElementsMap)e+=r[1];for(const[t,r]of this.glyphPerPageElementsMap)e+=r[1];return e/3}doDestroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.iconVertexArrayObject)&&this.iconVertexArrayObject.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.iconVertexBuffer)&&this.iconVertexBuffer.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.iconOpacityBuffer)&&this.iconOpacityBuffer.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.iconIndexBuffer)&&this.iconIndexBuffer.dispose(),this.iconVertexArrayObject=null,this.iconVertexBuffer=null,this.iconOpacityBuffer=null,this.iconIndexBuffer=null,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.textVertexArrayObject)&&this.textVertexArrayObject.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.textVertexBuffer)&&this.textVertexBuffer.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.textOpacityBuffer)&&this.textOpacityBuffer.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.textIndexBuffer)&&this.textIndexBuffer.dispose(),this.textVertexArrayObject=null,this.textVertexBuffer=null,this.textOpacityBuffer=null,this.textIndexBuffer=null,this.memoryUsed=0}updateOpacityInfo(){if(!this.opacityChanged)return;this.opacityChanged=!1;const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this.iconOpacity),t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this.iconOpacityBuffer);e.length>0&&e.byteLength===t.size&&t.setSubData(e);const i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this.textOpacity),s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this.textOpacityBuffer);i.length>0&&i.byteLength===s.size&&s.setSubData(i)}doPrepareForRendering(e,t,n){const f=new Uint32Array(t),o=new Int32Array(f.buffer),a=f[n++];this.iconVertexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(e,35044,new Int32Array(o.buffer,4*n,a)),n+=a;const l=f[n++];this.iconIndexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createIndex(e,35044,new Uint32Array(f.buffer,4*n,l)),n+=l;const u=f[n++];this.textVertexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(e,35044,new Int32Array(o.buffer,4*n,u)),n+=u;const c=f[n++];this.textIndexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createIndex(e,35044,new Uint32Array(f.buffer,4*n,c)),n+=c,this.iconOpacityBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(e,35044,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this.iconOpacity).buffer),this.textOpacityBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(e,35044,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this.textOpacity).buffer);const h=this.layer,x=h.iconMaterial,y=h.textMaterial;this.iconVertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,x.getAttributeLocations(),x.getLayoutInfo(),{geometry:this.iconVertexBuffer,opacity:this.iconOpacityBuffer},this.iconIndexBuffer),this.textVertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,y.getAttributeLocations(),y.getLayoutInfo(),{geometry:this.textVertexBuffer,opacity:this.textOpacityBuffer},this.textIndexBuffer)}}class u extends f{constructor(e,t){super(e,t),this.type=4,this.circleIndexStart=0,this.circleIndexCount=0;const r=new Uint32Array(e);let i=this.bufferDataOffset;this.circleIndexStart=r[i++],this.circleIndexCount=r[i++],this.bufferDataOffset=i}hasData(){return this.circleIndexCount>0}triangleCount(){return this.circleIndexCount/3}doDestroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.circleVertexArrayObject)&&this.circleVertexArrayObject.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.circleVertexBuffer)&&this.circleVertexBuffer.dispose(),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.circleIndexBuffer)&&this.circleIndexBuffer.dispose(),this.circleVertexArrayObject=null,this.circleVertexBuffer=null,this.circleIndexBuffer=null,this.memoryUsed=0}doPrepareForRendering(e,t,r){const n=new Uint32Array(t),f=new Int32Array(n.buffer),o=n[r++];this.circleVertexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(e,35044,new Int32Array(f.buffer,4*r,o)),r+=o;const a=n[r++];this.circleIndexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createIndex(e,35044,new Uint32Array(n.buffer,4*r,a)),r+=a;const l=this.layer.circleMaterial;this.circleVertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,l.getAttributeLocations(),l.getLayoutInfo(),{geometry:this.circleVertexBuffer},this.circleIndexBuffer)}}


/***/ }),

/***/ "X4n7":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/RenderableTile.js ***!
  \***************************************************************************/
/*! exports provided: RenderableTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderableTile", function() { return t; });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TiledDisplayObject.js */ "5LEI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_1__["TiledDisplayObject"]{_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),tileMat3:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}}}


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

/***/ "Zrl8":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/VectorTile.js ***!
  \*****************************************************************************/
/*! exports provided: VectorTile, printAllocations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorTile", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printAllocations", function() { return u; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderBucket.js */ "WDSG");
/* harmony import */ var _decluttering_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decluttering/config.js */ "2yHJ");
/* harmony import */ var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/TiledDisplayObject.js */ "5LEI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d extends _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_5__["TiledDisplayObject"]{constructor(e,t,s,a,r,i,o=null){super(e,t,s,a,r,4096,4096),this._memCache=o,this.type="vector-tile",this._referenced=0,this._hasSymbolBuckets=!1,this._memoryUsedByLayerData=0,this.layerData=new Map,this.layerCount=0,this.status="loading",this.allSymbolsFadingOut=!1,this.lastOpacityUpdate=0,this.symbols=new Map,this.isCoverage=!1,this.neededForCoverage=!1,this.decluttered=!1,this.invalidating=!1,this.parentTile=null,this.childrenTiles=new Set,this._processed=!1,this._referenced=1,this.styleRepository=i,this.id=e.id}get hasSymbolBuckets(){return this._hasSymbolBuckets}get isFading(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<_decluttering_config_js__WEBPACK_IMPORTED_MODULE_4__["FADE_DURATION"]}get isHoldingForFade(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<_decluttering_config_js__WEBPACK_IMPORTED_MODULE_4__["FADE_DURATION"])}get wasRequested(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status}setData(e){this.changeDataImpl(e),this.requestRender(),this.ready(),this.invalidating=!1,this._processed=!0}deleteLayerData(t){let s=!1;for(const e of t)if(this.layerData.has(e)){const t=this.layerData.get(e);this._memoryUsedByLayerData-=t.memoryUsed,3===t.type&&this.symbols.has(e)&&(this.symbols.delete(e),s=!0),t.destroy(),this.layerData.delete(e),this.layerCount--}Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData),s&&this.emit("symbols-changed"),this.requestRender()}processed(){return this._processed}hasData(){return this.layerCount>0}dispose(){"unloaded"!==this.status&&(m.delete(this),d._destroyRenderBuckets(this.layerData),this.layerData=null,this.layerCount=0,this._memoryUsedByLayerData=0,this.destroy(),this.status="unloaded")}release(){return 0==--this._referenced&&(this.dispose(),this.stage=null,!0)}retain(){++this._referenced}get referenced(){return this._referenced}get memoryUsage(){return(this._memoryUsedByLayerData+256)/(this._referenced||1)}changeDataImpl(t){let s=!1;if(t){const a=this._createRenderBuckets(t);for(const[e,t]of a){if(this.layerData.has(e)){const s=this.layerData.get(e);this._memoryUsedByLayerData-=t.memoryUsed,s.destroy(),this.layerData.delete(e),this.layerCount--}3===t.type&&(this.symbols.set(e,t.symbols),s=!0),this._memoryUsedByLayerData+=t.memoryUsed,this.layerData.set(e,t),this.layerCount++}Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._memCache)&&this._memCache.updateSize(this.key.id,this,this._memoryUsedByLayerData)}this._hasSymbolBuckets=!1;for(const[e,a]of this.layerData)3===a.type&&(this._hasSymbolBuckets=!0);s&&this.emit("symbols-changed")}attachWithContext(e){this.stage={context:e,trashDisplayObject(e){e.processDetach()},untrashDisplayObject:()=>!1}}setTransform(e,i){super.setTransform(e,i);const o=i/(e.resolution*e.pixelRatio),h=this.width/this.rangeX*o,n=this.height/this.rangeY*o,l=[0,0];e.toScreen(l,[this.x,this.y]);const y=this.transforms.tileUnitsToPixels;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(y),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(y,y,l),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(y,y,Math.PI*e.rotation/180),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(y,y,[h,n,1])}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),tileMat3:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),tileUnitsToPixels:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])()}}static _destroyRenderBuckets(e){if(!e)return;const t=new Set;e.forEach((e=>{t.has(e)||(e.destroy(),t.add(e))})),e.clear()}_createRenderBuckets(e){const t=new Map,s=new Map;for(const a of e){const e=this._deserializeBucket(a,s);for(const s of e.layerUIDs)t.set(s,e)}return t}_deserializeBucket(e,t){let s=t.get(e);if(s)return s;switch(new Uint32Array(e)[0]){case 1:s=new _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__["FillRenderBucket"](e,this.styleRepository);break;case 2:s=new _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__["LineRenderBucket"](e,this.styleRepository);break;case 3:s=new _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__["SymbolRenderBucket"](e,this.styleRepository,this);break;case 4:s=new _RenderBucket_js__WEBPACK_IMPORTED_MODULE_3__["CircleRenderBucket"](e,this.styleRepository)}return t.set(e,s),s}}const m=new Map;function u(){m.forEach(((e,t)=>{console.log(`\n${t.key}:`),e[0].forEach((e=>console.log(e))),console.log("========"),e[1].forEach((e=>console.log(e)))}))}


/***/ }),

/***/ "ZyIX":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
  \**************************************************************************/
/*! exports provided: default, sortByLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByLevel", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLContainer.js */ "mgI5");
/* harmony import */ var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brushes/WGLBrushInfo.js */ "b3VY");
/* harmony import */ var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brushes/WGLBrushStencil.js */ "7F7D");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(i),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s){const i=super.prepareRenderPasses(s);return i.push(s.registerRenderPass({name:"stencil",brushes:[_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].DEBUG|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug")&&i.push(s.registerRenderPass({name:"tileInfo",brushes:[_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].DEBUG,target:()=>this.children})),i}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++}}


/***/ }),

/***/ "dcV5":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GlyphSource.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/pbf.js */ "ATu9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){if(this._metrics=[],this._bitmaps=[],t)for(;t.next();)switch(t.tag()){case 1:{const e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{const t=e.getMessage();let s,a,r,n,i,c,g;for(;t.next();)switch(t.tag()){case 1:s=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:r=t.getUInt32();break;case 4:n=t.getUInt32();break;case 5:i=t.getSInt32();break;case 6:c=t.getSInt32();break;case 7:g=t.getUInt32();break;default:t.skip()}t.release(),s&&(this._metrics[s]={width:r,height:n,left:i,top:c,advance:g},this._bitmaps[s]=a);break}default:e.skip()}e.release();break}default:t.skip()}}getMetrics(t){return this._metrics[t]}getBitmap(t){return this._bitmaps[t]}}class a{constructor(){this._ranges=[]}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e}}class r{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(a,r){const n=this._getFontStack(a);if(n.getRange(r))return Promise.resolve();const i=256*r,c=i+255,g=this._baseURL.replace("{fontstack}",a).replace("{range}",i+"-"+c);return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(g,{responseType:"array-buffer"}).then((t=>{n.addRange(r,new s(new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(t.data),new DataView(t.data))))})).catch((()=>{n.addRange(r,new s)}))}getGlyph(t,e){const s=this._getFontStack(t);if(!s)return;const a=Math.floor(e/256);if(a>256)return;const r=s.getRange(a);return r?{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new a),e}}


/***/ }),

/***/ "doP5":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/Display.js ***!
  \**********************************************************************/
/*! exports provided: Display, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/Bitmap.js */ "xzrc");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/BitmapContainer.js */ "LTnl");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_1__["BitmapContainer"]{constructor(e){super(),this.requestRender=this.requestRender.bind(this),this._layerView=e,this._canvas=document.createElement("canvas"),this._context=this._canvas.getContext("2d"),this._bitmap=new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_0__["Bitmap"](null,"standard",!1),this.addChild(this._bitmap)}doRender(t){const e=t.state,i=this._createCustomRenderParams(t),a=this._canvas,s=this._bitmap,n=window.devicePixelRatio;a.width=e.size[0]*n,a.height=e.size[1]*n,s.resolution=e.resolution;const o=e.clone();o.pixelRatio=n,s.pixelRatio=n,i.state=o,s.x=e.viewpoint.targetGeometry.x-Math.abs(e.extent.xmax-e.extent.xmin)/2,s.y=e.viewpoint.targetGeometry.y+Math.abs(e.extent.ymax-e.extent.ymin)/2,this._layerView.render(i),s.source=a,s.rotation=e.rotation,super.doRender({...t,state:o})}_createCustomRenderParams(t){return{globalOpacity:t.globalOpacity,state:t.state,stationary:t.stationary,pixelRatio:window.devicePixelRatio,context:this._context}}}


/***/ }),

/***/ "ga/j":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileHandler.js ***!
  \******************************************************************************/
/*! exports provided: TileHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileHandler", function() { return u; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/workers/workers.js */ "36Co");
/* harmony import */ var _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GlyphMosaic.js */ "89j9");
/* harmony import */ var _GlyphSource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GlyphSource.js */ "dcV5");
/* harmony import */ var _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpriteMosaic.js */ "E6Oc");
/* harmony import */ var _decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decluttering/debugging.js */ "v3/X");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class u{constructor(e,t,s){this._layer=e,this._styleRepository=t,this.devicePixelRatio=s,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null}destroy(){this._connection&&(this._connection.close(),this._connection=null),this._styleRepository=null,this._layer=null,this._spriteMosaic&&(this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic=null)}get spriteMosaic(){return this._spriteSourcePromise.then((()=>this._spriteMosaic))}get glyphMosaic(){return this._glyphMosaic}async start(e){this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,e),this._spriteSourcePromise.then((e=>{this._spriteMosaic=new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_7__["default"](1024,1024,250),this._spriteMosaic.setSpriteSource(e)}));const s=new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._layer.currentStyleInfo.glyphsUrl?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["addQueryParameters"])(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_5__["default"](1024,1024,s),this._broadcastPromise=Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_4__["open"])("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then((s=>(this._connection=s,Promise.all(this._connection.broadcast("setStyle",{style:this._layer.currentStyleInfo.style,vectorTileLayerMaxBuffers:Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("vectortilelayer-max-buffers")},e)))))}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}async setStyle(e,s){await this._broadcastPromise,this._styleRepository=e,this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,null),this._spriteSourcePromise.then((e=>{this._spriteMosaic=new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_7__["default"](1024,1024,250),this._spriteMosaic.setSpriteSource(e)}));const r=new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._layer.currentStyleInfo.glyphsUrl?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__["addQueryParameters"])(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_5__["default"](1024,1024,r),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",{style:s,vectorTileLayerMaxBuffers:Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("vectortilelayer-max-buffers")})),this._broadcastPromise}fetchTileData(e,t){return this._getRefKeys(e,t).then((e=>{const s=this._layer.sourceNameToSource,r=[];for(const t in s)r.push(t);return this._getSourcesData(r,e,t)}))}parseTileData(e,t){const s=e&&e.data;if(!s)return Promise.resolve(null);const{sourceName2DataAndRefKey:r,transferList:i}=s;return 0===Object.keys(r).length?Promise.resolve(null):this._broadcastPromise.then((()=>this._connection.getAvailableClient().then((s=>s.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:r,styleLayerUIDs:e.styleLayerUIDs},{...t,transferList:i})))))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}perfReport({key:e,milliseconds:t}){Object(_decluttering_debugging_js__WEBPACK_IMPORTED_MODULE_8__["perfAdd"])(e,t,"ms")}async _getTilePayload(e,t,r){const i=_tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_9__["default"].pool.acquire(e.id),o=this._layer.sourceNameToSource[t].getSourceTileUrl(i.level,i.row,i.col);_tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_9__["default"].pool.release(i);try{return{protobuff:await this.request(o,r),sourceName:t}}catch(a){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(a))throw a;return{protobuff:null,sourceName:t}}}request(t,s){return Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"array-buffer",...s}).then((({data:e})=>e))}_getRefKeys(e,t){const s=this._layer.sourceNameToSource,i=new Array;for(const r in s){const o=s[r].getRefKey(e,t);i.push(o)}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(i)}_getSourcesData(e,t,s){const i=[];for(let r=0;r<t.length;r++)if(null==t[r].value||null==e[r])i.push(null);else{const o=this._getTilePayload(t[r].value,e[r],s);i.push(o)}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["eachAlways"])(i).then((e=>{const s={},r=[];for(let i=0;i<e.length;i++)if(e[i].value&&e[i].value&&e[i].value.protobuff&&e[i].value.protobuff.byteLength>0){const o=t[i].value.id;s[e[i].value.sourceName]={refKey:o,protobuff:e[i].value.protobuff},r.push(e[i].value.protobuff)}return{sourceName2DataAndRefKey:s,transferList:r}}))}}


/***/ }),

/***/ "iUxC":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.pixelBlock)?this.pixelBlock.width:0}get height(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.pixelBlock)?this.pixelBlock.height:0}render(e){const i=this.pixelBlock;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(i))return;const l=this.filter({pixelBlock:i});if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(l.pixelBlock))return;const r=l.pixelBlock.getAsRGBA(),o=e.createImageData(l.pixelBlock.width,l.pixelBlock.height);o.data.set(r),e.putImageData(o,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}


/***/ }),

/***/ "rEH/":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolDeclutterer.js ***!
  \*************************************************************************************************/
/*! exports provided: SymbolDeclutterer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolDeclutterer", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "2yHJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(o,e){if(o.priority-e.priority)return o.priority-e.priority;const t=o.tile.key,i=e.tile.key;return t.world-i.world?t.world-i.world:t.level-i.level?t.level-i.level:t.row-i.row?t.row-i.row:t.col-i.col?t.col-i.col:o.xTile-e.xTile?o.xTile-e.xTile:o.yTile-e.yTile}class i{constructor(o,e,t,i,s,r){this._visibleTiles=o,this._symbolRepository=e,this._createCollisionJob=t,this._assignTileSymbolsOpacity=i,this._symbolLayerSorter=s,this._isLayerVisible=r,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}get running(){return this._running}setScreenSize(o,e){this._screenWidth===o&&this._screenHeight===e||this.restart(),this._screenWidth=o,this._screenHeight=e}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(o){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const e=performance.now();if(!this._selectionJob.work(o))return!1;if(this._selectionJobCompleted=!0,0===(o=Math.max(0,o-(performance.now()-e))))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const e=performance.now();if(!this._collisionJob.work(o))return!1;if(this._collisionJobCompleted=!0,0===(o=Math.max(0,o-(performance.now()-e))))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const e=performance.now();if(!this._opacityJob.work(o))return!1;if(this._opacityJobCompleted=!0,0===(o=Math.max(0,o-(performance.now()-e))))return!1}return this._running=!1,!0}_createSelectionJob(){const o=this._symbolRepository.uniqueSymbols;for(let t=0;t<o.length;t++){const e=o[t];for(let o=0;o<e.uniqueSymbols.length;o++){const t=e.uniqueSymbols[o];for(const o of t.tileSymbols)o.selectedForRendering=!1}}const e=[];let i=0,s=0;const r=this._isLayerVisible;function n(n){let l;const c=performance.now();for(;s<o.length;s++,i=0){const t=o[s],h=t.styleLayerUID;if(!r(h)){e[s]||(e[s]={styleLayerUID:h,symbols:[]});continue}e[s]=e[s]||{styleLayerUID:h,symbols:[]};const a=e[s];for(;i<t.uniqueSymbols.length;i++){if(l=t.uniqueSymbols[i],i%100==99&&performance.now()-c>n)return!1;let o=null,e=!1,s=!1;for(const t of l.tileSymbols)if(!s||!e){const i=t.tile;(!o||i.isCoverage||i.neededForCoverage&&!e)&&(o=t,(i.neededForCoverage||i.isCoverage)&&(s=!0),i.isCoverage&&(e=!0))}if(o.selectedForRendering=!0,s){a.symbols.push(o),l.show=!0;for(const o of l.parts)o.show=!0}else l.show=!1}}for(const o of e)o.symbols.sort(t);return!0}const l=this._symbolLayerSorter;return{work:n,get sortedSymbols(){return e.sort(l)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,t=this._visibleTiles;let i=0;function r(o,t){const i=o.symbols;for(const[e,r]of i)s(r,t);e(o,t);for(const e of o.childrenTiles)r(e,t)}return{work(e){const s=performance.now();for(;i<t.length;i++){if(performance.now()-s>e)return!1;const n=t[i];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n.parentTile))continue;r(n,performance.now())}return!0}}}}function s(o,t){for(const i of o){const o=i.unique;for(const i of o.parts){const s=i.targetOpacity>.5?1:-1;i.startOpacity+=s*((t-i.startTime)/_config_js__WEBPACK_IMPORTED_MODULE_1__["FADE_DURATION"]),i.startOpacity=Math.min(Math.max(i.startOpacity,0),1),i.startTime=t,i.targetOpacity=o.show&&i.show?1:0}}}


/***/ }),

/***/ "v3/X":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/debugging.js ***!
  \*****************************************************************************************/
/*! exports provided: drawColliders, drawGridIndex, perfAdd, perfClear, perfElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawColliders", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGridIndex", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perfAdd", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perfClear", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perfElement", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e,n,o,l,i){t.fillStyle=e,t.fillRect(n,o,l,i)}function e(t,e,n,o,l,i){t.strokeStyle=e,t.strokeRect(n,o,l,i)}function n(t,e){t.strokeStyle="black";const n=e.cellSize,o=e.rows,l=e.columns;for(let i=0;i<o;i++){const o=e.cells[i],r=i*n,s=(i+1)*n;for(let e=0;e<l;e++){const l=o[e],i=e*n,d=(e+1)*n;t.strokeRect(i,r,d-i,s-r),t.fillText(`cells:${l.length}`,i+4,r+12)}}}function o(n,o){const l=window.COLLISION_XRAY;for(let i=0;i<o.length;++i){const r=!o[i].unique.show;if(l||!r)for(const s of o[i].colliders){if(!s.enabled)continue;const d=!o[i].unique.parts[s.partIndex].show;if(!l&&d)continue;const a=s.xScreen,c=s.yScreen,m=s.dxScreen,h=s.dyScreen;n.globalAlpha=r||d?.2:1,t(n,"green",a-1,c-1,3,3),e(n,"red",a+m,c+h,s.width,s.height),t(n,"blue",a+m-1,c+h-1,3,3),n.globalAlpha=1}}}function l(t,e,n){if(!window.PERFORMANCE_RECORDING_STORAGE)return;const o=window.PERFORMANCE_RECORDING_STORAGE;o.perf=o.perf||{};const l=o.perf;l[t]=l[t]||{start:null,time:0,min:void 0,max:void 0,samples:[],unit:n},l[t].time+=e,l[t].samples.push(e),(null==l[t].min||e<l[t].min)&&(l[t].min=e),(null==l[t].max||e>l[t].max)&&(l[t].max=e)}function i(){if(!window.PERFORMANCE_RECORDING_STORAGE)return;window.PERFORMANCE_RECORDING_STORAGE.perf={}}function r(t,e){return`${Math.round(10*t)/10}${e}`}function s(t){if(!window.PERFORMANCE_RECORDING_STORAGE){const t=document.createElement("div");return t.innerHTML="No recorded data is present because performance recording is disabled.",t}const e=document.createElement("div");let n="";const o=window.PERFORMANCE_RECORDING_STORAGE.perf,l=50;n+='<table style="border-collapse: collapse;">',n+=`<tr style="text-weight: bold; border-bottom: 1px solid "${t}";"><td>Name</td><td>Total</td><td>Runs</td><td>Average</td><td>Min</td><td>Distribution</td><td>Max</td><td>Histogram (${l} bins)</td></tr>`;const i=[];for(const r in o)i.push({name:r,value:o[r].time/o[r].samples.length,sortkey:o[r].max});i.sort(((t,e)=>-(t.sortkey-e.sortkey)));const s=i.map((t=>t.name));for(const m of s)n+="<tr>",n+=`<td>${m}</td>`,n+=`<td>${r(o[m].time,o[m].unit)}</td>`,n+=`<td>${o[m].samples.length}</td>`,n+=`<td>${r(o[m].time/o[m].samples.length,o[m].unit)}</td>`,n+=`<td style="text-align: right;">${r(o[m].min,o[m].unit)}</td>`,n+="<td data-distribution='1'></td>",n+=`<td>${r(o[m].max,o[m].unit)}</td>`,n+="<td data-histogram='1'></td>",n+="</tr>";n+="<table>",e.innerHTML=n;const d=e.querySelectorAll("td[data-distribution='1']"),a=e.querySelectorAll("td[data-histogram='1']");for(let r=0;r<d.length;r++){let e=d[r];{const n=document.createElement("canvas");n.height=10,n.width=100;const l=n.getContext("2d");if(l.strokeStyle=t,l.beginPath(),l.moveTo(0,5),l.lineTo(100,5),o[s[r]].max>o[s[r]].min+.001)for(const t of o[s[r]].samples){const e=(t-o[s[r]].min)/(o[s[r]].max-o[s[r]].min);l.moveTo(100*e,3),l.lineTo(100*e,7)}l.stroke(),l.strokeRect((i[r].value-o[s[r]].min)/(o[s[r]].max-o[s[r]].min)*100-2,0,4,9),e.appendChild(n)}e=a[r];{const n=new Array(l);for(let t=0;t<n.length;t++)n[t]=0;for(const t of o[s[r]].samples){const e=(t-o[s[r]].min)/(o[s[r]].max-o[s[r]].min);n[1===e?n.length-1:Math.floor(e*n.length)]++}const i=document.createElement("canvas");i.height=30,i.width=120;const d=i.getContext("2d");d.strokeStyle=t,d.fillStyle=t;let a=0;for(let t=0;t<n.length;t++){const e=n[t];a=Math.max(a,e)}for(let t=0;t<n.length;t++){const e=n[t];d.fillRect(t*i.width/n.length,i.height*(1-e/a),i.width/n.length,i.height*(e/a))}d.beginPath(),d.moveTo(0,i.height),d.lineTo(i.width,i.height),d.stroke(),e.appendChild(i)}}const c=e.querySelectorAll("td");for(let r=0;r<c.length;r++)c[r].style.padding="5px";return e}


/***/ }),

/***/ "vAXJ":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/util.js ***!
  \************************************************************************************/
/*! exports provided: GridIndex, TileForest, TileGraph, TileNode, deserializeSymbols, tileCoordChange, writeOpacityToBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridIndex", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileForest", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileGraph", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileNode", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeSymbols", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileCoordChange", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeOpacityToBuffers", function() { return h; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "y6Hv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(t){this.tile=t,this.parent=null,this.children=new Set}}class s{constructor(){this.nodes=new Map,this.roots=new Set}create(t){const e=new r(t);let s;const i=[];if(this.nodes.forEach((t=>{this._canConnectDirectly(e,t)&&i.push(t),!s&&this._canConnectDirectly(t,e)&&(s=t)})),s){for(const t of i)s.children.delete(t),e.children.add(t),t.parent=e;s.children.add(e),e.parent=s}else{this.roots.add(e);for(const t of i)e.children.add(t),t.parent=e,this.roots.delete(t)}return this.nodes.set(t.key.id,e),e}destroy(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.parent)?(e.parent.children.delete(e),e.children.forEach((r=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.parent)&&e.parent.children.add(r)}))):this.roots.delete(e),e.children.forEach((t=>{t.parent=e.parent,e.parent||this.roots.add(t)})),this.nodes.delete(e.tile.key.id)}clear(){this.roots.clear(),this.nodes.clear()}_canConnectDirectly(t,e){let{level:r,row:s,col:i}=e.tile.key;const{world:l}=e.tile.key;for(;r>0;){if(r--,s>>=1,i>>=1,t.tile.key.level===r&&t.tile.key.row===s&&t.tile.key.col===i&&t.tile.key.world===l)return!0;if(this.nodes.has(`${r}/${s}/${i}/${l}`))return!1}return!1}}class i{constructor(){this._tileGraph=new s,this._tileArray=null}has(t){return"string"==typeof t?this._tileGraph.nodes.has(t):this._tileGraph.nodes.has(t.key.id)}getAll(){return this._tileArray||(this._tileArray=[],this._tileGraph.nodes.forEach((t=>{this._tileArray.push(t.tile)}))),this._tileArray}getRoots(){const t=[];return this._tileGraph.roots.forEach((e=>{t.push(e.tile)})),t}getParent(e){const r=this._tileGraph.nodes.get("string"==typeof e?e:e.key.id);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r.parent)&&r.parent.tile}getChildren(t){const e=[];return this._tileGraph.nodes.get("string"==typeof t?t:t.key.id).children.forEach((t=>{e.push(t.tile)})),e}get(t){return this._tileGraph.nodes.get(t).tile}removeKey(t){const e=this._tileGraph.nodes.get(t);this._tileGraph.destroy(e),this._tileArray=null}forEach(t){this._tileGraph.nodes.forEach(((e,r)=>t(e.tile,r)))}add(t){this._tileGraph.create(t),this._tileArray=null}remove(t){const e=this._tileGraph.nodes.get(t.key.id);this._tileGraph.destroy(e),this._tileArray=null}clear(){this._tileGraph.clear(),this._tileArray=[]}}function l(t,e,r,s,i,l){const o=r-i;if(o>=0)return(e>>o)+(s-(l<<o))*(t>>o);const n=-o;return e-(l-(s<<n))*(t>>n)<<n}class o{constructor(t,e,r){this._rows=Math.ceil(e/r),this._columns=Math.ceil(t/r),this._cellSize=r,this.cells=new Array(this._rows);for(let s=0;s<this._rows;s++){this.cells[s]=new Array(this._columns);for(let t=0;t<this._columns;t++)this.cells[s][t]=[]}}getCell(t,e){const r=Math.min(Math.max(Math.floor(e/this._cellSize),0),this._rows-1),s=Math.min(Math.max(Math.floor(t/this._cellSize),0),this._columns-1);return this.cells[r]&&this.cells[r][s]||null}getCellSpan(t,e,r,s){return[Math.min(Math.max(Math.floor(t/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(e/this._cellSize),0),this.rows-1),Math.min(Math.max(Math.floor(r/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(s/this._cellSize),0),this.rows-1)]}get cellSize(){return this._cellSize}get columns(){return this._columns}get rows(){return this._rows}}function n(t,r,s,i,l,o){const n=r[i++];for(let h=0;h<n;h++){const n=new _core_js__WEBPACK_IMPORTED_MODULE_1__["VTLSymbol"](o);n.xTile=r[i++],n.yTile=r[i++],n.hash=r[i++],n.priority=r[i++];const h=r[i++];for(let t=0;t<h;t++){const t=r[i++],e=r[i++],l=r[i++],o=r[i++],h=!!r[i++],a=r[i++],c=s[i++],d=s[i++],p=r[i++],u=r[i++];n.colliders.push({xTile:t,yTile:e,dxPixels:l,dyPixels:o,hard:h,partIndex:a,width:p,height:u,minLod:c,maxLod:d})}const a=t[i++];for(let e=0;e<a;e++)n.textVertexRanges.push([t[i++],t[i++]]);const c=t[i++];for(let e=0;e<c;e++)n.iconVertexRanges.push([t[i++],t[i++]]);l.push(n)}return i}function h(t,e,r){for(const[s,i]of t.symbols)a(t,e,r,i,s)}function a(t,e,r,s,i){const l=t.layerData.get(i);if(3===l.type){for(const e of s){const s=e.unique;let i;if(e.selectedForRendering){const e=s.parts[0],l=e.startOpacity,o=e.targetOpacity;t.allSymbolsFadingOut=t.allSymbolsFadingOut&&0===o;const n=r?Math.floor(127*l)|o<<7:o?255:0;i=n<<24|n<<16|n<<8|n}else i=0;for(const[t,r]of e.iconVertexRanges)for(let e=t;e<t+r;e+=4)l.iconOpacity[e/4]=i;if(e.selectedForRendering){const e=s.parts[1],l=e.startOpacity,o=e.targetOpacity;t.allSymbolsFadingOut=t.allSymbolsFadingOut&&0===o;const n=r?Math.floor(127*l)|o<<7:o?255:0;i=n<<24|n<<16|n<<8|n}else i=0;for(const[t,r]of e.textVertexRanges)for(let e=t;e<t+r;e+=4)l.textOpacity[e/4]=i}l.lastOpacityUpdate=e,l.opacityChanged=!0}}


/***/ }),

/***/ "xzrc":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js ***!
  \*************************************************************/
/*! exports provided: Bitmap, isImageSource, rasterize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bitmap", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageSource", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rasterize", function() { return x; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayObject.js */ "fEsP");
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageryBitmapSource.js */ "iUxC");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(t){return t&&"render"in t}function l(t){return t&&!("render"in t)}function x(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function _(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](t,s)}class g extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])()}}setTransform(t){const n=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.transforms.dvs),[o,a]=t.toScreenNoRotation([0,0],[this.x,this.y]),d=this.resolution/this.pixelRatio/t.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(n,n,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(o,a)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(n,n,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c/2,l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(n,n,-x),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(n,n,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(-c/2,-l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["j"])(n,n,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c,l)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs,t.displayViewMat3,n)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(e){var i;if(!this.stage)return null==(i=this._texture)||i.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=_(e,this.sourceWidth,this.sourceHeight):this._texture=_(e));const s=this.source;if(s){if(this._texture.resize(this.sourceWidth,this.sourceHeight),c(s))if(s instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__["default"]){const e=s.getRenderedRasterPixels();this._texture.setData(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)?e.renderedRasterPixels:null)}else this._texture.setData(x(s));else l(s)&&this._texture.setData(s);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ }),

/***/ "y6Hv":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/core.js ***!
  \************************************************************************************/
/*! exports provided: VTLSymbol, VTLUniqueSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTLSymbol", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTLUniqueSymbol", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t){this.xTile=0,this.yTile=0,this.hash=0,this.priority=1,this.colliders=[],this.textVertexRanges=[],this.iconVertexRanges=[],this.tile=t}}class s{constructor(){this.tileSymbols=[],this.parts=[{startTime:0,startOpacity:0,targetOpacity:0,show:!1},{startTime:0,startOpacity:0,targetOpacity:0,show:!1}],this.show=!1}}


/***/ })

}]);
//# sourceMappingURL=layers-VectorTileLayerView2D-js.js.map