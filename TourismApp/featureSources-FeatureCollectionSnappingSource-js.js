(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["featureSources-FeatureCollectionSnappingSource-js"],{

/***/ "LcrR":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js ***!
  \****************************************************************************************************************/
/*! exports provided: FeatureCollectionSnappingSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCollectionSnappingSource", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./queryEngineUtils.js */ "Wf2p");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(r){super(r)}get availability(){return 1}refresh(){}async fetchCandidates(r,e){const t=this.layerSource.layer.source;return t.querySnapping?(await t.querySnapping({distance:r.distance,point:r.coordinateHelper.vectorToPoint(r.point).toJSON(),types:r.types,query:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r.filter)?r.filter.createQuery().toJSON():{where:"1=1"}},{signal:e})).candidates.map((e=>Object(_queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_8__["convertSnappingCandidate"])(e,r.coordinateHelper))):[]}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({constructOnly:!0})],i.prototype,"layerSource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0})],i.prototype,"availability",null),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],i);


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
//# sourceMappingURL=featureSources-FeatureCollectionSnappingSource-js.js.map