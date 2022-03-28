(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-2d-interactive-editingTools-js~views-3d-interactive-editingTools-js~views-draw-support~57a0ed4a"],{

/***/ "+9DA":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/ScaleVertex.js ***!
  \********************************************************************************************/
/*! exports provided: ScaleVertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleVertex", function() { return i; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(t,a,i,c,o=0){this.origin=t,this.axis1=a,this.factor1=i,this.factor2=c,this.accumulationType=o,this.axis2=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(a[1],-a[0])}scale(t,s,i){Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__["q"])(t.pos,t.pos,this.origin,this.axis1,s),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__["q"])(t.pos,t.pos,this.origin,this.axis2,i)}apply(t){this.scale(t,this.factor1,this.factor2)}undo(t){this.scale(t,1/this.factor1,1/this.factor2)}canAccumulate(s){return s instanceof i&&Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["equals"])(this.origin,s.origin)&&Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["equals"])(this.axis1,s.axis1)}accumulate(t,s){1===s.accumulationType?this.scale(t,s.factor1/this.factor1,s.factor2/this.factor2):this.scale(t,s.factor1,s.factor2)}accumulateParams(t){const s=1===t.accumulationType;this.factor1=s?t.factor1:this.factor1*t.factor1,this.factor2=s?t.factor2:this.factor2*t.factor2}}


/***/ }),

/***/ "4eAd":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/RotateVertex.js ***!
  \*********************************************************************************************/
/*! exports provided: RotateVertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateVertex", function() { return i; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(t,a,i=0){this.origin=t,this.angle=a,this.accumulationType=i}rotate(t,i){Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__["r"])(t.pos,t.pos,this.origin,i)}apply(t){this.rotate(t,this.angle)}undo(t){this.rotate(t,-this.angle)}canAccumulate(a){return a instanceof i&&Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["equals"])(this.origin,a.origin)}accumulate(t,a){const i=1===a.accumulationType;this.rotate(t,i?a.angle-this.angle:a.angle)}accumulateParams(t){const a=1===t.accumulationType;this.angle=a?t.angle:this.angle+t.angle}}


/***/ }),

/***/ "BfFg":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetVertexPosition.js ***!
  \**************************************************************************************************/
/*! exports provided: SetVertexPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetVertexPosition", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(t,e,i){this.editGeometry=t,this.vertex=e,this.pos=i}apply(){const e=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.originalPosition);e&&(this.originalPosition=this.vertex.pos),this._apply(e?"apply":"redo")}undo(){this.vertex.pos=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this.originalPosition),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]})}accumulate(t){return t instanceof i&&t.vertex===this.vertex&&(this.pos=t.pos,this._apply("apply"),!0)}_apply(t){this.vertex.pos=this.pos,this.editGeometry.components.forEach((t=>t.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:t,updatedVertices:[this.vertex]})}}


/***/ }),

/***/ "ELJL":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/UndoGroup.js ***!
  \******************************************************************************************/
/*! exports provided: UndoGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoGroup", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this.operations=[],this.closed=!1}close(){this.closed=!0}apply(){for(const t of this.operations)t.apply()}undo(){for(let t=this.operations.length-1;t>=0;t--)this.operations[t].undo()}accumulate(t){if(this.closed)return!1;const o=this.operations.length?this.operations[this.operations.length-1]:null;return o&&o.accumulate(t)||(this.operations.push(t),t.apply()),!0}}


/***/ }),

/***/ "F9W7":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/unnormalizationHelper.js ***!
  \*******************************************************************************************/
/*! exports provided: getUnnormalizationInfo, unnormalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnnormalizationInfo", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unnormalize", function() { return r; });
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(o,r){if(!r.supported)return;let p=1/0,e=-1/0;const u=r.upperBoundX-r.lowerBoundX;o.forEach((o=>{let n=o.pos[0];for(;n<r.lowerBoundX;)n+=u;for(;n>r.upperBoundX;)n-=u;p=Math.min(p,n),e=Math.max(e,n),o.pos[0]=n}));const n=e-p;u-n<n&&o.forEach((o=>{o.pos[0]<0&&(o.pos[0]+=u)}))}function p(r,p){const e=Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["getInfo"])(r);return 1===p&&e?{supported:!0,lowerBoundX:e.valid[0],upperBoundX:e.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}


/***/ }),

/***/ "FXzB":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveVertex.js ***!
  \*******************************************************************************************/
/*! exports provided: MoveVertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveVertex", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,s,d,h){this.helper=t,this.dx=s,this.dy=d,this.dz=h}move(t,s,d,h){this.helper.addDelta(t.pos,s,d,h)}apply(t){this.move(t,this.dx,this.dy,this.dz)}undo(t){this.move(t,-this.dx,-this.dy,-this.dz)}canAccumulate(s){return s instanceof t}accumulate(t,s){this.move(t,s.dx,s.dy,s.dz)}accumulateParams(t){this.dx+=t.dx,this.dy+=t.dy,this.dz+=t.dz}}


/***/ }),

/***/ "Hxwb":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/SnappingContext.js ***!
  \*********************************************************************************/
/*! exports provided: SnappingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnappingContext", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.visualizer=e.visualizer}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}}


/***/ }),

/***/ "LI85":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometryOperations.js ***!
  \********************************************************************************************/
/*! exports provided: EditGeometryOperations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGeometryOperations", function() { return l; });
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _EditGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditGeometry.js */ "aunz");
/* harmony import */ var _operations_AppendVertex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations/AppendVertex.js */ "Z35e");
/* harmony import */ var _operations_UpdateVertices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operations/UpdateVertices.js */ "NPIS");
/* harmony import */ var _operations_RemoveVertices_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations/RemoveVertices.js */ "S/EL");
/* harmony import */ var _operations_SplitEdge_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operations/SplitEdge.js */ "gjEw");
/* harmony import */ var _operations_SetVertexPosition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./operations/SetVertexPosition.js */ "BfFg");
/* harmony import */ var _operations_CloseComponent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./operations/CloseComponent.js */ "LcKP");
/* harmony import */ var _operations_MoveVertex_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operations/MoveVertex.js */ "FXzB");
/* harmony import */ var _operations_OffsetEdgeVertex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operations/OffsetEdgeVertex.js */ "VBSu");
/* harmony import */ var _operations_RotateVertex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./operations/RotateVertex.js */ "4eAd");
/* harmony import */ var _operations_ScaleVertex_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operations/ScaleVertex.js */ "+9DA");
/* harmony import */ var _operations_UndoGroup_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operations/UndoGroup.js */ "ELJL");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(e){super(),this.data=e,this.undoStack=[],this.redoStack=[],this.listener=this.data.on("change",(e=>{e.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation})}))}destroy(){this.listener.remove()}splitEdge(e,t){return this.apply(new _operations_SplitEdge_js__WEBPACK_IMPORTED_MODULE_6__["SplitEdge"](this.data,e,t))}updateVertices(e,t,r=1){return this.apply(new _operations_UpdateVertices_js__WEBPACK_IMPORTED_MODULE_4__["UpdateVertices"](this.data,e,t),r)}moveVertices(e,t,r,o,s=1){return this.updateVertices(e,new _operations_MoveVertex_js__WEBPACK_IMPORTED_MODULE_9__["MoveVertex"](this.data.coordinateHelper,t,r,o),s)}scaleVertices(e,t,r,o,s,i=1,n=0){return this.updateVertices(e,new _operations_ScaleVertex_js__WEBPACK_IMPORTED_MODULE_12__["ScaleVertex"](t,r,o,s,n),i)}rotateVertices(e,t,r,o=1,s=0){return this.updateVertices(e,new _operations_RotateVertex_js__WEBPACK_IMPORTED_MODULE_11__["RotateVertex"](t,r,s),o)}removeVertices(e){return this.apply(new _operations_RemoveVertices_js__WEBPACK_IMPORTED_MODULE_5__["RemoveVertices"](this.data,e,this._minNumVerticesPerType))}appendVertex(e){return 0===this.data.components.length?null:this.apply(new _operations_AppendVertex_js__WEBPACK_IMPORTED_MODULE_3__["AppendVertex"](this.data,this.data.components[0],e))}setVertexPosition(e,t){return this.apply(new _operations_SetVertexPosition_js__WEBPACK_IMPORTED_MODULE_7__["SetVertexPosition"](this.data,e,t))}offsetEdge(e,t,r,o=1){return this.updateVertices([t.leftVertex,t.rightVertex],new _operations_OffsetEdgeVertex_js__WEBPACK_IMPORTED_MODULE_10__["OffsetEdgeVertex"](this.data.coordinateHelper,e,t,r),o)}closeComponent(e){return this.data.components.includes(e)?this.apply(new _operations_CloseComponent_js__WEBPACK_IMPORTED_MODULE_8__["CloseComponent"](this.data,e)):null}canRemoveVertex(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new _operations_UndoGroup_js__WEBPACK_IMPORTED_MODULE_13__["UndoGroup"];return this.apply(e),{remove:()=>e.close()}}undo(){if(this.undoStack.length>0){const e=this.undoStack.pop();return e.undo(),this.redoStack.push(e),e}return null}redo(){if(this.redoStack.length>0){const e=this.redoStack.pop();return e.apply(),this.undoStack.push(e),e}return null}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}get lastOperation(){return this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}apply(e,r=1){return 0!==r&&!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this.undoStack.push(e),this.redoStack=[]),e}static fromGeometry(e,t){return new l(_EditGeometry_js__WEBPACK_IMPORTED_MODULE_2__["EditGeometry"].fromGeometry(e,t))}}


/***/ }),

/***/ "LcKP":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/CloseComponent.js ***!
  \***********************************************************************************************/
/*! exports provided: CloseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseComponent", function() { return i; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _EditGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EditGeometry.js */ "aunz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(e,t){this.editGeometry=e,this.component=t,this.createdEdge=null}apply(){let e="redo";if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.createdEdge)){e="apply";const i=this.component.getFirstVertex(),o=this.component.getLastVertex();if(this.component.isClosed()||this.component.vertices.length<3||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o))return;this.createdEdge=new _EditGeometry_js__WEBPACK_IMPORTED_MODULE_2__["Edge"](this.component,o,i)}this.createdEdge.leftVertex.rightEdge=this.createdEdge,this.createdEdge.rightVertex.leftEdge=this.createdEdge,this.component.edges.push(this.createdEdge),this.editGeometry.notifyChanges({operation:e})}undo(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.createdEdge)||(Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["remove"])(this.component.edges,this.createdEdge),this.createdEdge.leftVertex.rightEdge=null,this.createdEdge.rightVertex.leftEdge=null,this.editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}


/***/ }),

/***/ "NPIS":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/UpdateVertices.js ***!
  \***********************************************************************************************/
/*! exports provided: UpdateVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVertices", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e,t,i){this.editGeometry=e,this.vertices=t,this.operation=i,this.undone=!1}apply(){this.vertices.forEach((e=>this.operation.apply(e))),this.editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:this.undone?"redo":"apply",updatedVertices:this.vertices})}undo(){this.vertices.forEach((e=>this.operation.undo(e))),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:this.vertices}),this.undone=!0}canAccumulate(e){if(this.undone||e.vertices.length!==this.vertices.length)return!1;for(let t=0;t<e.vertices.length;++t)if(e.vertices[t]!==this.vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(t){return!!(t instanceof e&&this.canAccumulate(t))&&(this.vertices.forEach((e=>this.operation.accumulate(e,t.operation))),this.operation.accumulateParams(t.operation),this.editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:"apply",updatedVertices:this.vertices}),!0)}}


/***/ }),

/***/ "S/EL":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/RemoveVertices.js ***!
  \***********************************************************************************************/
/*! exports provided: RemoveVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveVertices", function() { return r; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EditGeometry.js */ "aunz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,t,r=0){this.editGeometry=e,this.vertices=t,this.minNumberOfVertices=r,this.removedVertices=null}apply(){let t="redo";null==this.removedVertices?(this.removedVertices=[],this.vertices.forEach((t=>{const r=this._removeVertex(t);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&this.removedVertices.push(r)})),t="apply"):this.removedVertices.forEach((e=>{this._removeVertex(e.removedVertex)})),this.editGeometry.notifyChanges({operation:t,removedVertices:this.vertices})}undo(){this.removedVertices.forEach((e=>{this._undoRemoveVertex(e)})),this.editGeometry.notifyChanges({operation:"undo",addedVertices:this.vertices})}accumulate(){return!1}_removeVertex(e){const r=e.component;if(r.vertices.length<=this.minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,d=e.rightEdge;return r.vertices.splice(r.vertices.indexOf(e),1),s&&(r.edges.splice(r.edges.indexOf(s),1),s.leftVertex.rightEdge=null),d&&(r.edges.splice(r.edges.indexOf(d),1),d.rightVertex.leftEdge=null),0===e.index&&d&&this.vertices.length>0&&r.swapVertices(r.vertices.indexOf(d.rightVertex),0),s&&d&&(i.createdEdge=new _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__["Edge"](r,s.leftVertex,d.rightVertex),r.edges.push(i.createdEdge)),d&&r.updateVertexIndex(d.rightVertex,d.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,r=e.removedVertex.component,i=t.leftEdge,s=t.rightEdge;e.createdEdge&&r.edges.splice(r.edges.indexOf(e.createdEdge),1),r.vertices.push(t),i&&(r.edges.push(i),i.leftVertex.rightEdge=i),s&&(r.edges.push(s),s.rightVertex.leftEdge=s),r.updateVertexIndex(t,t.index)}}


/***/ }),

/***/ "VBSu":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/OffsetEdgeVertex.js ***!
  \*************************************************************************************************/
/*! exports provided: OffsetEdgeVertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffsetEdgeVertex", function() { return z; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../geometry/support/plane.js */ "colF");
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/vector.js */ "obHo");
/* harmony import */ var _support_geometry2dUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../support/geometry2dUtils.js */ "D5Sn");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class z{constructor(t,i,e,s=0,n=0){this.helper=t,this.planeType=i,this.edge=e,this.distance=s,this._plane=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["create"])(),this._offsetPlane=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["create"])(),this._minDistance=-1/0,this._maxDistance=1/0,0===n&&this._initialize()}get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var t,i,e,s;const n=this._toXYZ(this.edge.leftVertex.pos),r=this._toXYZ(null==(t=this.edge.leftVertex.leftEdge)||null==(i=t.leftVertex)?void 0:i.pos),h=this._toXYZ(this.edge.rightVertex.pos),o=this._toXYZ(null==(e=this.edge.rightVertex.rightEdge)||null==(s=e.rightVertex)?void 0:s.pos);this._edgeDirection=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),n,h),this._left=this._computeNeighbor(n,r,this._edgeDirection),this._right=this._computeNeighbor(h,o,this._edgeDirection)}_toXYZ(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)?this.helper.toXYZ(t):null}_computeNeighbor(t,i,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i))return{start:t,end:i,direction:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(-s[1],s[0],0),isOriginalDirection:!0};const n=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["r"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),t,i),r=!this._passesBisectingAngleThreshold(n,s);return{start:t,end:i,direction:r?this._bisectVectorsPerpendicular(s,n):n,isOriginalDirection:!r}}_passesBisectingAngleThreshold(t,i){const e=Math.abs(Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_7__["angle"])(i,t));return e>=E&&e<=Math.PI-E}_bisectVectorsPerpendicular(t,i){const e=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(t,i)<0?t:Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),t),s=Math.abs(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(e,i));if(!(s<.001||s>.999))return this._bisectDirection(e,i);const n=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),e,[0,0,1]);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(n,n)}_bisectDirection(t,i){const e=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),t,i);return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(e,e)}_initializePlane(){const t=this._computeNormalDirection(this._left),i=this._computeNormalDirection(this._right);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(t,i)<0&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(i,i),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["fromPositionAndNormal"])(this._left.start,this._bisectDirection(t,i),this._plane)}_computeNormalDirection(t){const i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),t.direction,this._edgeDirection);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(i,i);const e=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._edgeDirection,i);return 1===this.planeType&&(e[2]=0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(e,e)}_initializeDistanceConstraints(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint(Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["signedDistance"])(this._plane,this._left.end)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint(Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["signedDistance"])(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(t){t<=0&&(this._minDistance=Math.max(this._minDistance,t)),t>=0&&(this._maxDistance=Math.min(this._maxDistance,t))}_updateIntersectDistanceConstraint(t){const i=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["normal"])(t),e=this._edgeDirection,a=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._left.start,this._left.direction),o=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._right.start,this._right.direction),c=this._pointInBasis2D(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(),i,e,this._left.start),_=this._pointInBasis2D(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(),i,e,a),l=this._pointInBasis2D(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(),i,e,this._right.start),g=this._pointInBasis2D(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(),i,e,o),[f]=Object(_support_geometry2dUtils_js__WEBPACK_IMPORTED_MODULE_8__["intersectLineAndRay"])({start:_,end:c,type:1},{start:g,end:l,type:1});if(!f)return;const m=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__["f"])(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(),c,_);Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__["i"])(m,m);const D=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__["f"])(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])(),f,_),x=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__["k"])(m,D),V=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),a,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._left.direction,-x)),y=Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["signedDistance"])(t,V);this._updateDistanceConstraint(y)}_pointInBasis2D(t,i,e,s){return t[0]=Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_7__["projectPointSignedLength"])(i,s),t[1]=Object(_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_7__["projectPointSignedLength"])(e,s),t}_offset(t,e){Number.isFinite(this._minDistance)&&(e=Math.max(this._minDistance,e)),Number.isFinite(this._maxDistance)&&(e=Math.min(this._maxDistance,e)),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["copy"])(this._plane,this._offsetPlane),this._offsetPlane[3]-=e;const s=(t,e,s)=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)&&Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["intersectLine"])(this._offsetPlane,t,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),t,e),s),n=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])();(t===this.edge.leftVertex?s(this._left.start,this._left.direction,n):s(this._right.start,this._right.direction,n))&&this.helper.copy(this.helper.fromXYZ(n,void 0,this.helper.getM(t.pos)),t.pos)}signedDistanceToPoint(t){return Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["signedDistance"])(this.plane,this.helper.toXYZ(this.helper.pointToVector(t)))}apply(t){this._offset(t,this.distance)}undo(t){this._offset(t,0)}canAccumulate(t){return t instanceof z&&this.edge.leftVertex.index===t.edge.leftVertex.index&&this.edge.rightVertex.index===t.edge.rightVertex.index&&this.edge.component===t.edge.component&&this._maybeEqualsVec3(this._left.direction,t._left.direction)&&this._maybeEqualsVec3(this._right.direction,t._right.direction)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["z"])(Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["normal"])(this._plane),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["normal"])(t._plane))}accumulate(t,i){const e=this._plane[3]-i._plane[3]+i.distance;this._offset(t,e)}accumulateParams(t){const i=t.distance-t._plane[3];this.distance=i+this._plane[3]}clone(){const t=new z(this.helper,this.planeType,this.edge,this.distance,1);return Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["copy"])(this._plane,t._plane),Object(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_6__["copy"])(this._offsetPlane,t._offsetPlane),t._maxDistance=this._maxDistance,t._minDistance=this._minDistance,t._left=this._cloneNeighbor(this._left),t._right=this._cloneNeighbor(this._right),t._edgeDirection=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),this._edgeDirection),t}_maybeEqualsVec3(t,s){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["z"])(t,s)}_cloneNeighbor({start:t,end:e,direction:s,isOriginalDirection:n}){return{start:Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),t),end:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)?Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),e):null,direction:Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])(),s),isOriginalDirection:n}}}const E=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(15);


/***/ }),

/***/ "Z35e":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/AppendVertex.js ***!
  \*********************************************************************************************/
/*! exports provided: AppendVertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppendVertex", function() { return d; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EditGeometry.js */ "aunz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class d{constructor(e,t,i){this.editGeometry=e,this.component=t,this.pos=i,this.addedVertex=null,this.originalEdge=null,this.left=null,this.right=null}apply(){let d="redo";Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.addedVertex)&&(d="apply",this.addedVertex=new _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__["Vertex"](this.component));const h=this.component.getLastVertex();if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(h))this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=0;else{let i=null;h.rightEdge&&(this.originalEdge=h.rightEdge,i=this.originalEdge.rightVertex,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1)),this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.left)&&(this.left=new _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__["Edge"](this.component,h,this.addedVertex)),this.component.edges.push(this.left),h.rightEdge=this.left,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.originalEdge)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i)&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.right)&&(this.right=new _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__["Edge"](this.component,this.addedVertex,i)),this.component.edges.push(this.right),i.leftEdge=this.right),this.component.updateVertexIndex(this.addedVertex,h.index+1)}this.editGeometry.notifyChanges({operation:d,addedVertices:[this.addedVertex]})}undo(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.leftVertex.rightEdge=null),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),1),this.right.rightVertex.leftEdge=null),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.leftVertex.rightEdge=this.originalEdge,this.originalEdge.rightVertex.leftEdge=this.originalEdge),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.left)?this.component.updateVertexIndex(this.left.leftVertex,this.left.leftVertex.index):this.component.updateVertexIndex(this.addedVertex,0),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.addedVertex]})}accumulate(){return!1}}


/***/ }),

/***/ "ZadS":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/SnappingVisualizer.js ***!
  \************************************************************************************/
/*! exports provided: SnappingVisualizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnappingVisualizer", function() { return r; });
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/handleUtils.js */ "xkkJ");
/* harmony import */ var _hints_IntersectionSnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hints/IntersectionSnappingHint.js */ "51PB");
/* harmony import */ var _hints_LineSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hints/LineSnappingHint.js */ "5rU3");
/* harmony import */ var _hints_ParallelSnappingHint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hints/ParallelSnappingHint.js */ "0jIh");
/* harmony import */ var _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hints/PointSnappingHint.js */ "tjz2");
/* harmony import */ var _hints_RightAngleSnappingHint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hints/RightAngleSnappingHint.js */ "VxUT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{draw(r,a){const p=this.getUniqueHints(r),h=[];for(const i of p)i instanceof _hints_IntersectionSnappingHint_js__WEBPACK_IMPORTED_MODULE_1__["IntersectionSnappingHint"]&&h.push(this.visualizeIntersectionPoint(i,a)),i instanceof _hints_LineSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__["LineSnappingHint"]&&h.push(this.visualizeLine(i,a)),i instanceof _hints_ParallelSnappingHint_js__WEBPACK_IMPORTED_MODULE_3__["ParallelSnappingHint"]&&h.push(this.visualizeParallelSign(i,a)),i instanceof _hints_RightAngleSnappingHint_js__WEBPACK_IMPORTED_MODULE_5__["RightAngleSnappingHint"]&&h.push(this.visualizeRightAngleQuad(i,a)),i instanceof _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_4__["PointSnappingHint"]&&h.push(this.visualizePoint(i,a));return Object(_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__["handlesGroup"])(h)}getUniqueHints(i){const n=[];for(const t of i){let i=!0;for(const s of n)if(t.equals(s)){i=!1;break}i&&n.push(t)}return n}}


/***/ }),

/***/ "aunz":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometry.js ***!
  \**********************************************************************************/
/*! exports provided: Component, Edge, EditGeometry, Vertex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edge", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGeometry", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vertex", function() { return c; });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/Polyline.js */ "UhwK");
/* harmony import */ var _coordinateHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../coordinateHelper.js */ "ixpo");
/* harmony import */ var _unnormalizationHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unnormalizationHelper.js */ "F9W7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}class l{constructor(e,t,s){this.component=e,this.leftVertex=t,this.rightVertex=s,this.type="edge",t.rightEdge=this,s.leftEdge=this}}class p{constructor(e,t){this.spatialReference=e,this.viewingMode=t,this.vertices=[],this.edges=[]}unnormalizeVertexPositions(){this.vertices.length<=1||Object(_unnormalizationHelper_js__WEBPACK_IMPORTED_MODULE_6__["unnormalize"])(this.vertices,Object(_unnormalizationHelper_js__WEBPACK_IMPORTED_MODULE_6__["getUnnormalizationInfo"])(this.spatialReference,this.viewingMode))}updateVertexIndex(e,t){if(0===this.vertices.length)return;const s=this.vertices[0];let i=null,r=e,o=t;do{i=r,i.index=o++,r=i.rightEdge?i.rightEdge.rightVertex:null}while(null!=r&&r!==s);i.leftEdge&&i!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(i),this.vertices.length-1)}getFirstVertex(){return 0===this.vertices.length?null:this.vertices[0]}getLastVertex(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}swapVertices(e,t){const s=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=s}iterateVertices(e){if(0===this.vertices.length)return;const t=this.vertices[0];let i=t;do{e(i,i.index),i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(i.rightEdge)?i.rightEdge.rightVertex:null}while(i!==t&&null!=i)}}class g extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e,t,s){super(),this.type=e,this.coordinateHelper=t,this.viewingMode=s,this._geometry=null,this.dirty=!0,this.components=[]}get geometry(){if(this.dirty){switch(this.type){case"point":this._geometry=this.toPoint();break;case"polyline":this._geometry=this.toPolyline();break;case"polygon":this._geometry=this.toPolygon()}this.dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this.dirty=!0,this.emit("change",e)}toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;return this.components.forEach(((s,i)=>{const r=[];let o=s.vertices.find((e=>null==e.leftEdge));const n=o;do{r.push(t(o.pos)),o=o.rightEdge?o.rightEdge.rightVertex:null}while(o&&o!==n);e.push(r)})),new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;return this.components.forEach(((i,r)=>{const o=[],n=i.vertices[0];let h=n;const c=h;do{o.push(t(h.pos)),h=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(h.rightEdge)?h.rightEdge.rightVertex:null}while(h&&h!==c);i.isClosed()&&o.push(t(n.pos)),e.push(o)})),new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(t,s){const i=t.spatialReference,r=Object(_coordinateHelper_js__WEBPACK_IMPORTED_MODULE_5__["createCoordinateHelper"])(t.hasZ,t.hasM,i),n=new g(t.type,r,s);switch(t.type){case"polygon":{const o=t.rings;for(let t=0;t<o.length;++t){const h=o[t],g=new p(i,s),a=h.length>2&&Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__["equals"])(h[0],h[h.length-1]),d=a?h.length-1:h.length;for(let e=0;e<d;++e){const t=r.arrayToVector(h[e]),s=new c(g);g.vertices.push(s),s.pos=t,s.index=e}const u=g.vertices.length-1;for(let e=0;e<u;++e){const t=g.vertices[e],s=g.vertices[e+1],i=new l(g,t,s);g.edges.push(i)}if(a){const e=new l(g,g.vertices[g.vertices.length-1],g.vertices[0]);g.edges.push(e)}n.components.push(g)}break}case"polyline":for(const e of t.paths){const t=new p(i,s),o=e.length;for(let s=0;s<o;++s){const i=r.arrayToVector(e[s]),o=new c(t);t.vertices.push(o),o.pos=i,o.index=s}const h=t.vertices.length-1;for(let e=0;e<h;++e){const s=t.vertices[e],i=t.vertices[e+1],r=new l(t,s,i);t.edges.push(r)}n.components.push(t)}break;case"point":{const e=new p(i,s),o=new c(e);o.index=0,o.pos=r.pointToVector(t),e.vertices.push(o),n.components.push(e);break}}return n}}


/***/ }),

/***/ "colF":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/plane.js ***!
  \*************************************************************/
/*! exports provided: UP, clip, clipInfinite, copy, create, distance, fromManyPoints, fromManyPointsSampleAt, fromNormalAndOffset, fromPoints, fromPositionAndNormal, fromValues, fromVectorsAndPoint, intersectLine, intersectLineSegment, intersectLineSegmentClamp, intersectRay, isAABBFullyInside, isPointInside, isPointOutside, isSphereFullyInside, isSphereFullyOutside, negate, normal, projectPoint, projectVector, setOffsetFromPoint, signedDistance, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clip", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipInfinite", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromManyPoints", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromManyPointsSampleAt", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNormalAndOffset", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPoints", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPositionAndNormal", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromVectorsAndPoint", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectLine", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectLineSegment", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectLineSegmentClamp", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRay", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAABBFullyInside", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInside", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointOutside", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSphereFullyInside", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSphereFullyOutside", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normal", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectPoint", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectVector", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetFromPoint", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signedDistance", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return M; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chunks/sphere.js */ "+JUG");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vectorStacks.js */ "c2GT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(n=X){return[n[0],n[1],n[2],n[3]]}function M(n,t,r,c){return j(n,t,r,c,_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv4d"].get())}function b(n,t=p()){return j(n[0],n[1],n[2],n[3],t)}function j(n,t,r,c,o=p()){return o[0]=n,o[1]=t,o[2]=r,o[3]=c,o}function k(n,t,c){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(c,n),c[3]=t,c}function v(n,t,r){const c=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],o=Math.abs(c-1)>1e-5&&c>1e-12?1/Math.sqrt(c):1;return r[0]=t[0]*o,r[1]=t[1]*o,r[2]=t[2]*o,r[3]=-(r[0]*n[0]+r[1]*n[1]+r[2]*n[2]),r}function y(n,t,r,c=p()){const o=r[0]-t[0],e=r[1]-t[1],u=r[2]-t[2],i=n[0]-t[0],f=n[1]-t[1],s=n[2]-t[2],a=e*s-u*f,g=u*i-o*s,m=o*f-e*i,h=a*a+g*g+m*m,M=Math.abs(h-1)>1e-5&&h>1e-12?1/Math.sqrt(h):1;c[0]=a*M,c[1]=g*M,c[2]=m*M,c[3]=-(c[0]*n[0]+c[1]*n[1]+c[2]*n[2])}function d(n,t){return l(n,t,0,1,2)}function l(n,t,r,i,f){if(n.count<3)return!1;n.getVec(r,q);let s=i,a=!1;for(;s<n.count-1&&!a;)n.getVec(s,x),s++,a=!Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["k"])(q,x);if(!a)return!1;for(s=Math.max(s,f),a=!1;s<n.count&&!a;)n.getVec(s,S),s++,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(U,q,x),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(U,U),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(w,x,S),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(w,w),a=!Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["k"])(q,S)&&!Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["k"])(x,S)&&Math.abs(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(U,w))<V;return a?(y(q,x,S,t),!0):(0!==r||1!==i||2!==f)&&l(n,t,0,1,2)}const V=.99619469809,q=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),x=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),S=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),U=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),w=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])();function z(n,t,r){return n!==r&&b(n,r),r[3]=-Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(W(r),t),r}function A(n,t){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function B(n,t,r,c){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(S,t,n),v(r,S,c)}function C(n,t,r,c){return T(n,t,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),r,t),Y,c)}function D(n,r,c){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r)&&T(n,r.origin,r.direction,Z,c)}function E(n,t,r){return T(n,t.origin,t.vector,0,r)}function F(n,t,r){return T(n,t.origin,t.vector,1,r)}function G(n,t){return R(n,Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t))-t[3]>=0}function H(n,t){return R(n,Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t))+t[3]<0}function I(n,t){return R(n,t)>=0}function J(n,t){return R(n,t)<0}function K(n,t){const r=t[0],c=t[1],o=t[2],e=t[3],u=t[4],i=t[5];return n[0]*(n[0]>0?r:e)+n[1]*(n[1]>0?c:u)+n[2]*(n[2]>0?o:i)+n[3]>=0}function L(n,t){const r=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(W(n),t.ray.direction),c=-R(n,t.ray.origin);if(c<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return c>0;if((c<0||r<0)&&!(c<0&&r<0))return!0;const o=c/r;return r>0?o<t.c1&&(t.c1=o):o>t.c0&&(t.c0=o),t.c0<=t.c1}function N(n,t){const r=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(W(n),t.ray.direction),c=-R(n,t.ray.origin);if(r>-1e-6&&r<1e-6)return c>0;const o=c/r;return r>0?o<t.c1&&(t.c1=o):o>t.c0&&(t.c0=o),t.c0<=t.c1}function O(n,t,r){const c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),W(n),-n[3]),e=P(n,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),t,c),_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get());return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r,e,c),r}function P(n,t,r){const c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__["sv3d"].get(),W(n),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(W(n),t));return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(r,t,c),r}function Q(n,t){return Math.abs(R(n,t))}function R(n,t){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(W(n),t)+n[3]}function T(t,r,c,o,e){const i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(W(t),c);if(0===i)return!1;let a=-(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(W(t),r)+t[3])/i;return 1&o&&(a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(a,0,1)),!(!(4&o)&&a<0||!(8&o)&&a>1)&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(e,r,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(e,c,a)),!0)}function W(n){return n}const X=[0,0,1,0],Y=12,Z=8;


/***/ }),

/***/ "gjEw":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/editGeometry/operations/SplitEdge.js ***!
  \******************************************************************************************/
/*! exports provided: SplitEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitEdge", function() { return r; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EditGeometry.js */ "aunz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,t,i){this.editGeometry=e,this.edge=t,this.t=i,this.createdVertex=null,this.left=null,this.right=null}apply(){let r="redo";const s=this.edge,d=s.component,h=s.leftVertex,g=s.rightVertex;d.edges.splice(d.edges.indexOf(s),1),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.createdVertex)&&(r="apply",this.createdVertex=new _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__["Vertex"](s.component)),d.vertices.push(this.createdVertex),this.createdVertex.pos=this.editGeometry.coordinateHelper.lerp(s.leftVertex.pos,s.rightVertex.pos,this.t,this.editGeometry.coordinateHelper.createVector()),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.left)&&(this.left=new _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__["Edge"](d,h,this.createdVertex)),this.left.leftVertex.leftEdge?d.edges.push(this.left):d.edges.unshift(this.left),h.rightEdge=this.left,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.right)&&(this.right=new _EditGeometry_js__WEBPACK_IMPORTED_MODULE_1__["Edge"](d,this.createdVertex,g)),d.edges.push(this.right),g.leftEdge=this.right,d.updateVertexIndex(this.createdVertex,h.index+1),this.editGeometry.notifyChanges({operation:r,addedVertices:[this.createdVertex]})}undo(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.createdVertex)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.left)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.right))return null;const t=this.edge,i=t.component,r=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,d=r.leftVertex,h=s.rightVertex;i.vertices.splice(i.vertices.indexOf(this.createdVertex),1),i.edges.splice(i.edges.indexOf(this.left),1),i.edges.splice(i.edges.indexOf(this.right),1),this.edge.leftVertex.leftEdge?i.edges.push(this.edge):i.edges.unshift(this.edge),d.rightEdge=t,h.leftEdge=t,i.updateVertexIndex(d,d.index),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}


/***/ }),

/***/ "ixpo":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/coordinateHelper.js ***!
  \*************************************************************************/
/*! exports provided: CoordinateHelper2D, CoordinateHelper3D, CoordinateHelper4D, createCoordinateHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateHelper2D", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateHelper3D", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateHelper4D", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCoordinateHelper", function() { return x; });
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chunks/vec4.js */ "dXfX");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/Point.js */ "SuVq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(e){this.spatialReference=e}createVector(){return this.tag(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__["a"])())}pointToVector(e){return this.tag(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(e.x,e.y))}arrayToVector(e){return this.tag(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e,t=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(t,r,a,i){return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["o"])(i,t,r,a)}addDelta(e,t,r){e[0]+=t,e[1]+=r}distance(e,r){return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e,r)}getZ(e,t){return t}hasZ(){return!1}getM(e,t){return t}hasM(){return!1}clone(e){return this.tag(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__["d"])(e))}copy(e,t){return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["c"])(t,e)}fromXYZ(e){return this.tag(Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(e[0],e[1]))}toXYZ(e,t=0){return Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e[0],e[1],t)}tag(e){return e}}class g{constructor(e,t){this.valueType=e,this.spatialReference=t}createVector(){return this.tag(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])())}pointToVector(e){return this.tag(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e.x,e.y,0===this.valueType?e.z:e.m))}arrayToVector(e){return this.tag(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return 0===this.valueType?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,t=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]){return t.x=e[0],t.y=e[1],t.z=0===this.valueType?e[2]:void 0,t.m=1===this.valueType?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]){return t.x=e[0],t.y=e[1],t.z=0===this.valueType?e[2]:void 0,t.m=1===this.valueType?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){const r=0===this.valueType,a=1===this.valueType;return t.x=e[0],t.y=e[1],t.z=r?e[2]:void 0,t.m=a?e[2]:void 0,t.hasZ=r,t.hasM=a,t.spatialReference=this.spatialReference,t}lerp(e,t,r,a){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(a,e,t,r)}addDelta(e,t,r,a){e[0]+=t,e[1]+=r,0===this.valueType&&(e[2]+=a)}distance(e,r){return 0===this.valueType?Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(e,r):Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e,r)}getZ(e,t){return 0===this.valueType?e[2]:t}hasZ(){return 0===this.valueType}getM(e,t){return 1===this.valueType?e[2]:t}hasM(){return 1===this.valueType}clone(e){return this.tag(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["d"])(e))}copy(e,t){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(t,e)}fromXYZ(e,t=0,r=0){return this.tag(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e[0],e[1],0===this.valueType?e.length>2?e[2]:t:r))}toXYZ(e,t=0){return this.tag(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e[0],e[1],0===this.valueType?e[2]:t))}tag(e){return e}}class R{constructor(e){this.spatialReference=e}createVector(){return this.tag(Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["c"])())}pointToVector(e){return this.tag(Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(e.x,e.y,e.z,e.m))}arrayToVector(e){return this.tag(Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e,t=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,r,a){return Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_4__["l"])(a,e,t,r)}addDelta(e,t,r,a){e[0]+=t,e[1]+=r,e[2]+=a}distance(e,t){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this.tag(Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["d"])(e))}copy(e,t){return Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_4__["c"])(t,e)}fromXYZ(e,t=0,r=0){return this.tag(Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__["f"])(e[0],e[1],e.length>2?e[2]:t,r))}toXYZ(e){return Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e[0],e[1],e[2])}tag(e){return e}}function x(e,t,r){return e&&t?new R(r):t?new g(1,r):e?new g(0,r):new m(r)}


/***/ }),

/***/ "tjz2":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/hints/PointSnappingHint.js ***!
  \*****************************************************************************************/
/*! exports provided: PointSnappingHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointSnappingHint", function() { return s; });
/* harmony import */ var _snappingUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snappingUtils.js */ "ZwYu");
/* harmony import */ var _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SnappingHint.js */ "fctI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__["SnappingHint"]{constructor(t){super(),this.point=t}equals(n){return n instanceof s&&Object(_snappingUtils_js__WEBPACK_IMPORTED_MODULE_0__["objectEqual"])(this.point,n.point)}}


/***/ })

}]);
//# sourceMappingURL=default~views-2d-interactive-editingTools-js~views-3d-interactive-editingTools-js~views-draw-support~57a0ed4a.js.map