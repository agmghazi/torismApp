(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esri-calcite-components-dist-components-calcite-notice-js"],{

/***/ "RTjX":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-notice.js ***!
  \*********************************************************************************/
/*! exports provided: CalciteNotice, defineCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalciteNotice", function() { return CalciteNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces.js */ "dT+A");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcite-icon2.js */ "sVTk");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */





const TEXT = {
  close: "Close"
};
const SLOTS = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end"
};
const CSS = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon"
};

const calciteNoticeCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) ::slotted(calcite-link){font-size:var(--calcite-font-size--2);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=m]) ::slotted(calcite-link){font-size:var(--calcite-font-size--1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){font-size:var(--calcite-font-size-1);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([scale=l]) ::slotted(calcite-link){font-size:var(--calcite-font-size-0);line-height:1.375;margin-top:0.125rem;margin-bottom:0.125rem}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{display:none;margin-left:auto;margin-right:auto;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{display:none;text-align:left;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;opacity:0;pointer-events:none;background-color:var(--calcite-ui-foreground-1);max-height:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;border-left:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{display:-ms-flexbox;display:flex;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);-ms-flex-align:center;align-items:center;opacity:1;max-height:100%;border-width:2px;pointer-events:auto}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){display:inline;margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-right:var(--calcite-notice-spacing-token-small)}.calcite--rtl slot[name=message]::slotted(*),.calcite--rtl *::slotted([slot=message]){margin-right:0;margin-left:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}.notice-content:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.notice-close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;border-style:none;outline:2px solid transparent;outline-offset:2px;cursor:pointer;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}.calcite--rtl{text-align:right;border-left:none;border-right:0px solid}.calcite--rtl .notice-content{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}.calcite--rtl .notice-content:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}.calcite--rtl .notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}";

let CalciteNotice$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteNoticeClose = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteNoticeClose", 7);
    this.calciteNoticeOpen = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteNoticeOpen", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //---------------------------------------------------------------------------
    /** Is the notice currently active or not */
    this.active = false;
    /** Color for the notice (will apply to top border and icon) */
    this.color = "blue";
    /** Optionally show a button the user can click to dismiss the notice */
    this.dismissible = false;
    /** String for the close button.
     * @default "Close"
     */
    this.intlClose = TEXT.close;
    /** specify the scale of the notice, defaults to m */
    this.scale = "m";
    /** specify the width of the notice, defaults to auto */
    this.width = "auto";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.close = () => {
      this.active = false;
      this.calciteNoticeClose.emit();
    };
  }
  updateRequestedIcon() {
    this.requestedIcon = Object(_dom_js__WEBPACK_IMPORTED_MODULE_2__["s"])(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["S"], this.icon, this.color);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.requestedIcon = Object(_dom_js__WEBPACK_IMPORTED_MODULE_2__["s"])(_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["S"], this.icon, this.color);
  }
  componentDidLoad() {
    this.noticeLinkEl = this.el.querySelector("calcite-link");
  }
  render() {
    const { el } = this;
    const dir = Object(_dom_js__WEBPACK_IMPORTED_MODULE_2__["a"])(el);
    const closeButton = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-label": this.intlClose, class: CSS.close, onClick: this.close, ref: (el) => (this.closeButton = el) }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const hasActionEnd = Object(_dom_js__WEBPACK_IMPORTED_MODULE_2__["b"])(el, SLOTS.actionsEnd);
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { [CSS.container]: true, [_dom_js__WEBPACK_IMPORTED_MODULE_2__["C"].rtl]: dir === "rtl" } }, this.requestedIcon ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.icon }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }))) : null, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.content }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.title }), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.message }), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.link })), hasActionEnd ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.actionsEnd }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.actionsEnd }))) : null, this.dismissible ? closeButton : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    if (!this.closeButton && !this.noticeLinkEl) {
      return;
    }
    if (this.noticeLinkEl) {
      this.noticeLinkEl.setFocus();
    }
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["updateRequestedIcon"],
    "color": ["updateRequestedIcon"]
  }; }
  static get style() { return calciteNoticeCss; }
};
CalciteNotice$1 = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteNotice$1, [1, "calcite-notice", {
    "active": [1540],
    "color": [513],
    "dismissible": [516],
    "icon": [520],
    "intlClose": [1, "intl-close"],
    "scale": [513],
    "width": [513],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  const components = ["calcite-notice", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-notice":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteNotice$1);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        Object(_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_3__["d"])();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteNotice = CalciteNotice$1;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "dT+A":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/interfaces.js ***!
  \*****************************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return StatusIcons; });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
var StatusIcons;
(function (StatusIcons) {
  StatusIcons["green"] = "checkCircle";
  StatusIcons["yellow"] = "exclamationMarkTriangle";
  StatusIcons["red"] = "exclamationMarkTriangle";
  StatusIcons["blue"] = "lightbulb";
})(StatusIcons || (StatusIcons = {}));




/***/ })

}]);
//# sourceMappingURL=esri-calcite-components-dist-components-calcite-notice-js.js.map