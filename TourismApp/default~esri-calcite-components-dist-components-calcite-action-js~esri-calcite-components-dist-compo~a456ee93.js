(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~esri-calcite-components-dist-components-calcite-action-js~esri-calcite-components-dist-compo~a456ee93"],{

/***/ "M9lk":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-loader2.js ***!
  \**********************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid.js */ "Ahi8");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */



const calciteLoaderCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:center;align-items:center;position:relative;-ms-flex-pack:center;justify-content:center;display:none;margin-left:auto;margin-right:auto;opacity:1;padding-top:4rem;padding-bottom:4rem;min-height:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;-webkit-transform:scale(1, 1);transform:scale(1, 1);animation:loader-color-shift 6s alternate-reverse infinite linear}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.25rem}:host([no-padding]){padding-top:0;padding-bottom:0}:host([active]){display:-ms-flexbox;display:flex}.loader__text{display:block;font-size:var(--calcite-font-size--2);line-height:1rem;text-align:center;color:var(--calcite-ui-text-1);margin-top:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{display:block;position:absolute;color:var(--calcite-ui-text-1);text-align:center;font-size:var(--calcite-loader-font-size);width:var(--calcite-loader-size);left:50%;margin-left:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;width:var(--calcite-loader-size);height:var(--calcite-loader-size);left:50%;margin-left:calc(var(--calcite-loader-size) / 2 * -1);-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svg{position:absolute;overflow:visible;top:0;left:0;-webkit-transform-origin:center;transform-origin:center;width:var(--calcite-loader-size);height:var(--calcite-loader-size);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:loader-clockwise;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{-webkit-animation-name:loader-offset-1;animation-name:loader-offset-1}.loader__svg--2{-webkit-animation-name:loader-offset-2;animation-name:loader-offset-2}.loader__svg--3{-webkit-animation-name:loader-offset-3;animation-name:loader-offset-3}}:host([type=determinate]){-webkit-animation:none;animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svg--3{-webkit-animation:none;animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:all 100ms linear;transition:all 100ms linear}:host([inline]){position:relative;margin:0;padding-top:0;padding-bottom:0;-webkit-animation:none;animation:none;stroke:currentColor;stroke-width:2;height:var(--calcite-loader-size-inline);min-height:var(--calcite-loader-size-inline);width:var(--calcite-loader-size-inline);margin-right:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline][dir=rtl]){margin-right:0;margin-left:calc(var(--calcite-loader-size-inline) * 0.5)}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0;left:0;margin:0;width:var(--calcite-loader-size-inline);height:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{width:var(--calcite-loader-size-inline);height:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms}:host([complete]) .loader__svgs{opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms, -webkit-transform 180ms linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, transform 200ms linear;transition:color 200ms linear, transform 200ms linear, -webkit-transform 200ms linear}.loader__svg--1{stroke-dasharray:27.9252444444% 139.6262222222%;-webkit-animation-duration:0.72s;animation-duration:0.72s}@-webkit-keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}.loader__svg--2{stroke-dasharray:55.8504888889% 139.6262222222%;-webkit-animation-duration:0.96s;animation-duration:0.96s}@-webkit-keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}.loader__svg--3{stroke-dasharray:13.9626222222% 139.6262222222%;-webkit-animation-duration:1.16s;animation-duration:1.16s}@-webkit-keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@-webkit-keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

let CalciteLoader = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Show the loader */
    this.active = false;
    /** Inline loaders are smaller and will appear to the left of the text */
    this.inline = false;
    /** Speficy the scale of the loader. Defaults to "m" */
    this.scale = "m";
    /** Percent complete of 100, only valid for determinate indicators */
    this.value = 0;
    /** Text which should appear under the loading indicator (optional) */
    this.text = "";
    /** Turn off spacing around the loader */
    this.noPadding = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { el, inline, label, scale, text, type, value } = this;
    const id = el.id || Object(_guid_js__WEBPACK_IMPORTED_MODULE_1__["g"])();
    const radiusRatio = 0.45;
    const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
    const radius = size * radiusRatio;
    const viewbox = `0 0 ${size} ${size}`;
    const isDeterminate = type === "determinate";
    const circumference = 2 * radius * Math.PI;
    const progress = (value / 100) * circumference;
    const remaining = circumference - progress;
    const valueNow = Math.floor(value);
    const hostAttributes = {
      "aria-valuenow": valueNow,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      complete: valueNow === 100
    };
    const svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
    const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Host"], Object.assign({ "aria-label": label, id: id, role: "progressbar" }, (isDeterminate ? hostAttributes : {})), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loader__svgs" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "loader__svg loader__svg--1", viewBox: viewbox }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", Object.assign({}, svgAttributes))), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: "loader__svg loader__svg--2", viewBox: viewbox }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", Object.assign({}, svgAttributes))), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", Object.assign({ class: "loader__svg loader__svg--3", viewBox: viewbox }, (isDeterminate ? { style: determinateStyle } : {})), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", Object.assign({}, svgAttributes)))), text && Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loader__text" }, text), isDeterminate && Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "loader__percentage" }, value)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the proper sizes based on the scale property
   */
  getSize(scale) {
    return {
      s: 32,
      m: 56,
      l: 80
    }[scale];
  }
  getInlineSize(scale) {
    return {
      s: 12,
      m: 16,
      l: 20
    }[scale];
  }
  get el() { return this; }
  static get style() { return calciteLoaderCss; }
};
CalciteLoader = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteLoader, [1, "calcite-loader", {
    "active": [516],
    "inline": [516],
    "label": [1],
    "scale": [513],
    "type": [513],
    "value": [2],
    "text": [1],
    "noPadding": [4, "no-padding"]
  }]);
function defineCustomElement() {
  const components = ["calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteLoader);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=default~esri-calcite-components-dist-components-calcite-action-js~esri-calcite-components-dist-compo~a456ee93.js.map