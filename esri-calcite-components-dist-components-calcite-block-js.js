(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esri-calcite-components-dist-components-calcite-block-js"],{

/***/ "RxwD":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-block.js ***!
  \********************************************************************************/
/*! exports provided: CalciteBlock, defineCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalciteBlock", function() { return CalciteBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _CalciteHeading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalciteHeading.js */ "I8xl");
/* harmony import */ var _calcite_action2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcite-action2.js */ "eU/K");
/* harmony import */ var _calcite_action_menu2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcite-action-menu2.js */ "LjYL");
/* harmony import */ var _calcite_handle2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calcite-handle2.js */ "TceS");
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calcite-icon2.js */ "sVTk");
/* harmony import */ var _calcite_loader2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calcite-loader2.js */ "M9lk");
/* harmony import */ var _calcite_popover2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calcite-popover2.js */ "wDZZ");
/* harmony import */ var _calcite_scrim2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calcite-scrim2.js */ "i7vG");
/* harmony import */ var _calcite_tooltip_manager2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calcite-tooltip-manager2.js */ "27Q8");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */












const CSS = {
  article: "article",
  content: "content",
  headerContainer: "header-container",
  icon: "icon",
  statusIcon: "status-icon",
  toggle: "toggle",
  toggleIcon: "toggle-icon",
  title: "title",
  heading: "heading",
  header: "header",
  button: "button",
  summary: "summary",
  controlContainer: "control-container",
  valid: "valid",
  invalid: "invalid",
  loading: "loading"
};
const TEXT = {
  collapse: "Collapse",
  expand: "Expand",
  loading: "Loading",
  options: "Options"
};
const SLOTS = {
  icon: "icon",
  control: "control",
  headerMenuActions: "header-menu-actions"
};
const ICONS = {
  opened: "chevron-up",
  closed: "chevron-down",
  valid: "check-circle",
  invalid: "exclamation-mark-triangle",
  refresh: "refresh"
};
const HEADING_LEVEL = 4;

const calciteBlockCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:column;flex-direction:column;padding:0;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;-ms-flex-preferred-size:auto;flex-basis:auto}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:justify;align-content:space-between;color:var(--calcite-ui-text-2);}.heading{font-weight:var(--calcite-font-weight-medium);margin:0;padding:0}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:\"handle header control menu\";grid-column:header-start/menu-end;grid-row:1/2}.header-container>.header{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0}.toggle{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;font-family:inherit;-ms-flex-align:center;align-items:center;margin:0;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0;border-style:none;cursor:pointer;text-align:left;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0;padding-left:0.75rem;padding-right:0.75rem;padding-top:0;padding-bottom:0}.header .title .heading{padding:0;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;line-height:1.25;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.summary{padding:0;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);margin-top:0.125rem;word-wrap:break-word;word-break:break-word}.icon{margin-left:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.toggle-icon{margin-right:1rem;-ms-flex-item-align:center;align-self:center;color:var(--calcite-ui-text-3);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.content{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;position:relative;-webkit-animation:in var(--calcite-animation-timing) ease-in-out;animation:in var(--calcite-animation-timing) ease-in-out}.control-container{display:-ms-flexbox;display:flex;margin:0;grid-area:control}calcite-action-menu{grid-area:menu}.calcite--rtl .toggle-icon{margin-right:0;margin-left:1rem}.calcite--rtl .icon{margin-left:0;margin-right:0.75rem}:host([open]){margin-top:0.5rem;margin-bottom:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}:host([drag-handle]) .calcite--rtl .title{padding-left:0;padding-right:0.25rem}";

let CalciteBlock$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteBlockToggle = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteBlockToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, this block will be collapsible.
     */
    this.collapsible = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * When true, displays a drag handle in the header.
     */
    this.dragHandle = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** Text string used for the actions menu
     * @default "Options"
     */
    this.intlOptions = TEXT.options;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * When true, the block's content will be displayed.
     */
    this.open = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.onHeaderClick = () => {
      this.open = !this.open;
      this.calciteBlockToggle.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderScrim() {
    const { disabled, loading } = this;
    const defaultSlot = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    return [loading || disabled ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-scrim", { loading: loading }) : null, defaultSlot];
  }
  renderIcon() {
    const { el, status } = this;
    const showingLoadingStatus = this.loading && !this.open;
    const statusIcon = showingLoadingStatus ? ICONS.refresh : ICONS[status];
    const hasIcon = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.icon) || statusIcon;
    const iconEl = !statusIcon ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.icon })) : (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { class: {
        [CSS.statusIcon]: true,
        [CSS.valid]: status == "valid",
        [CSS.invalid]: status == "invalid",
        [CSS.loading]: showingLoadingStatus
      }, icon: statusIcon, scale: "m" }));
    return hasIcon ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.icon }, iconEl) : null;
  }
  render() {
    const { collapsible, disabled, el, heading, intlCollapse, intlExpand, loading, open, summary, intlLoading, headingLevel } = this;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const headerContent = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("header", { class: CSS.header }, this.renderIcon(), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.title }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_CalciteHeading_js__WEBPACK_IMPORTED_MODULE_2__["C"], { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, heading), summary ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.summary }, summary) : null)));
    const hasControl = !!Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.control);
    const hasMenuActions = !!Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.headerMenuActions);
    const collapseIcon = open ? ICONS.opened : ICONS.closed;
    const headerNode = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.headerContainer }, this.dragHandle ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-handle", null) : null, collapsible ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-expanded": collapsible ? open.toString() : null, "aria-label": toggleLabel, class: CSS.toggle, onClick: this.onHeaderClick, title: toggleLabel }, headerContent, !hasControl && !hasMenuActions ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { "aria-hidden": "true", class: CSS.toggleIcon, icon: collapseIcon, scale: "s" })) : null)) : (headerContent), loading ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-loader", { inline: true, "is-active": true, label: intlLoading })) : hasControl ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.controlContainer }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.control }))) : null, hasMenuActions ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-action-menu", { label: this.intlOptions || TEXT.options }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.headerMenuActions }))) : null));
    const rtl = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["a"])(el) === "rtl";
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Host"], { tabIndex: disabled ? -1 : null }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("article", { "aria-busy": loading.toString(), class: {
        [CSS.article]: true,
        [_dom_js__WEBPACK_IMPORTED_MODULE_1__["C"].rtl]: rtl
      } }, headerNode, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.content, hidden: !open }, this.renderScrim()))));
  }
  get el() { return this; }
  static get style() { return calciteBlockCss; }
};
CalciteBlock$1 = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteBlock$1, [1, "calcite-block", {
    "collapsible": [4],
    "disabled": [516],
    "dragHandle": [516, "drag-handle"],
    "heading": [1],
    "headingLevel": [2, "heading-level"],
    "intlCollapse": [1, "intl-collapse"],
    "intlExpand": [1, "intl-expand"],
    "intlLoading": [1, "intl-loading"],
    "intlOptions": [1, "intl-options"],
    "loading": [516],
    "open": [1540],
    "status": [513],
    "summary": [1]
  }]);
function defineCustomElement$1() {
  const components = ["calcite-block", "calcite-action", "calcite-action-menu", "calcite-handle", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim", "calcite-tooltip-manager"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-block":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteBlock$1);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        Object(_calcite_action2_js__WEBPACK_IMPORTED_MODULE_3__["d"])();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        Object(_calcite_action_menu2_js__WEBPACK_IMPORTED_MODULE_4__["d"])();
      }
      break;
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        Object(_calcite_handle2_js__WEBPACK_IMPORTED_MODULE_5__["d"])();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        Object(_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_6__["d"])();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        Object(_calcite_loader2_js__WEBPACK_IMPORTED_MODULE_7__["d"])();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        Object(_calcite_popover2_js__WEBPACK_IMPORTED_MODULE_8__["d"])();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        Object(_calcite_scrim2_js__WEBPACK_IMPORTED_MODULE_9__["d"])();
      }
      break;
    case "calcite-tooltip-manager":
      if (!customElements.get(tagName)) {
        Object(_calcite_tooltip_manager2_js__WEBPACK_IMPORTED_MODULE_10__["d"])();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteBlock = CalciteBlock$1;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "TceS":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-handle2.js ***!
  \**********************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcite-icon2.js */ "sVTk");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */



const CSS = {
  handle: "handle",
  handleActivated: "handle--activated"
};
const ICONS = {
  drag: "drag"
};

const calciteHandleCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex}.handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-pack:center;justify-content:center;background-color:transparent;border-style:none;cursor:move;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-border-3);padding:0.75rem 0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}";

let CalciteHandle = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteHandleNudge = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteHandleNudge", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * @internal - stores the activated state of the drag handle.
     */
    this.activated = false;
    /**
     * Value for the button title attribute
     */
    this.textTitle = "handle";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleKeyDown = (event) => {
      switch (event.key) {
        case " ":
          this.activated = !this.activated;
          break;
        case "ArrowUp":
        case "ArrowDown":
          if (!this.activated) {
            return;
          }
          const direction = event.key.toLowerCase().replace("arrow", "");
          this.calciteHandleNudge.emit({ handle: this.el, direction });
          break;
      }
    };
    this.handleBlur = () => {
      this.activated = false;
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.handleButton.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (
    // Needs to be a span because of https://github.com/SortableJS/Sortable/issues/1486
    Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "aria-pressed": this.activated.toString(), class: { [CSS.handle]: true, [CSS.handleActivated]: this.activated }, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, ref: (el) => {
        this.handleButton = el;
      }, role: "button", tabindex: "0", title: this.textTitle }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: ICONS.drag, scale: "s" })));
  }
  get el() { return this; }
  static get style() { return calciteHandleCss; }
};
CalciteHandle = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteHandle, [1, "calcite-handle", {
    "activated": [1540],
    "textTitle": [513, "text-title"],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  const components = ["calcite-handle", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-handle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteHandle);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        Object(_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_1__["d"])();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=esri-calcite-components-dist-components-calcite-block-js.js.map