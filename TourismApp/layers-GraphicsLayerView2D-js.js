(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-GraphicsLayerView2D-js"],{

/***/ "xw90":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GraphicsLayerView2D.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return l; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ "q03O");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c={remove(){},pause(){},resume(){}};let n=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__["default"])){initialize(){this.graphicsView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_10__["default"]({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e):null}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){var s;let t;return"number"==typeof e?t=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"]?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].isCollection(e)&&e.length>0&&(t=e.map((e=>e&&e.uid)).toArray()),t=null==(s=t)?void 0:s.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])()],n.prototype,"graphicsView",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.views.2d.layers.GraphicsLayerView2D")],n);const l=n;


/***/ })

}]);
//# sourceMappingURL=layers-GraphicsLayerView2D-js.js.map