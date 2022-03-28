(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esri-calcite-components-dist-components-calcite-panel-js"],{

/***/ "u6kK":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-panel.js ***!
  \********************************************************************************/
/*! exports provided: CalcitePanel, defineCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcitePanel", function() { return CalcitePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _CalciteHeading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalciteHeading.js */ "I8xl");
/* harmony import */ var _calcite_action_menu2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcite-action-menu2.js */ "LjYL");
/* harmony import */ var _calcite_action2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcite-action2.js */ "eU/K");
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calcite-icon2.js */ "sVTk");
/* harmony import */ var _calcite_loader2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calcite-loader2.js */ "M9lk");
/* harmony import */ var _calcite_popover2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calcite-popover2.js */ "wDZZ");
/* harmony import */ var _calcite_scrim2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calcite-scrim2.js */ "i7vG");
/* harmony import */ var _calcite_tooltip_manager2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calcite-tooltip-manager2.js */ "27Q8");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */











const CSS = {
  backButton: "back-button",
  container: "container",
  header: "header",
  heading: "heading",
  summary: "summary",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentContainer: "content-container",
  fabContainer: "fab-container",
  footer: "footer",
  menuContainer: "menu-container",
  menuButton: "menu-button",
  menu: "menu",
  menuOpen: "menu--open"
};
const ICONS = {
  close: "x",
  menu: "ellipsis",
  backLeft: "chevron-left",
  backRight: "chevron-right"
};
const SLOTS = {
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
};
const TEXT = {
  back: "Back",
  close: "Close",
  open: "Open",
  options: "Options"
};
const HEADING_LEVEL = 3;

const calcitePanelCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden;position:relative;width:100%;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:justify;align-content:space-between;color:var(--calcite-ui-text-2);}.heading{font-weight:var(--calcite-font-weight-medium);margin:0;padding:0}.header .heading{-ms-flex:1 1 auto;flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.container{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);width:100%;padding:0;margin:0;max-height:var(--calcite-panel-max-height);width:var(--calcite-panel-width);max-width:var(--calcite-panel-max-width);min-width:var(--calcite-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, width 150ms ease-in-out;transition:max-height 150ms ease-in-out, width 150ms ease-in-out}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 12vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 300px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 150px)}:host([width-scale=m]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 20vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 420px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 240px)}:host([width-scale=l]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 45vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 680px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 340px)}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative;z-index:1}.header{border-bottom:1px solid;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);-ms-flex-pack:start;justify-content:flex-start;position:-webkit-sticky;position:sticky;top:0;border-bottom-color:var(--calcite-ui-border-2);width:100%;-ms-flex:0 0 auto;flex:0 0 auto;min-height:3rem;z-index:2}.header-content{overflow:hidden;margin-right:auto;padding-left:0.75rem;padding-right:0.75rem;padding-top:1rem;padding-bottom:1rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.header-content .heading,.header-content .summary{padding:0;display:block;overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis}.header-content .heading{font-weight:var(--calcite-font-weight-medium);margin-top:0;margin-left:0;margin-right:0;margin-bottom:0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.header-content .heading:only-child{margin-bottom:0}.header-content .summary{color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);line-height:1rem}.back-button{border-color:var(--calcite-ui-border-2);border-style:solid;border-width:0;border-right-width:1px}.calcite--rtl .back-button{border-right-width:0;border-left-width:1px}.header-actions{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.header-actions--end{margin-left:auto}.menu-container:only-child{margin-left:auto}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:10rem;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content-container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-direction:column;flex-direction:column}.footer{border-top:1px solid;background-color:var(--calcite-ui-foreground-1);border-top-color:var(--calcite-ui-border-3);display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:-webkit-sticky;position:sticky;bottom:0;width:100%;-ms-flex:0 0 auto;flex:0 0 auto;min-height:3rem;padding:0.5rem}.calcite--rtl .header-content{margin-left:auto;margin-right:unset}.calcite--rtl .header-actions--end{margin-right:auto;margin-left:unset}.calcite--rtl .menu-container:only-child{margin-right:auto;margin-left:unset}.fab-container{display:inline-block;position:-webkit-sticky;position:sticky;margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;padding:0.5rem;bottom:0;left:0;right:0;z-index:1}";

let CalcitePanel$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calcitePanelDismissedChange = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calcitePanelDismissedChange", 7);
    this.calcitePanelScroll = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calcitePanelScroll", 7);
    this.calcitePanelBackClick = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calcitePanelBackClick", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Hides the panel.
     */
    this.dismissed = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * Displays a close button in the trailing side of the header.
     */
    this.dismissible = false;
    /**
     * Shows a back button in the header.
     */
    this.showBackButton = false;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * Opens the action menu.
     */
    this.menuOpen = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.setDismissRef = (node) => {
      this.dismissButtonEl = node;
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.panelKeyUpHandler = (event) => {
      if (event.key === "Escape") {
        this.dismiss();
      }
    };
    this.dismiss = () => {
      this.dismissed = true;
    };
    this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    };
    this.backButtonClick = () => {
      this.calcitePanelBackClick.emit();
    };
  }
  dismissedHandler() {
    this.calcitePanelDismissedChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus(focusId) {
    var _a, _b, _c;
    if (focusId === "dismiss-button") {
      (_a = this.dismissButtonEl) === null || _a === void 0 ? void 0 : _a.setFocus();
      return;
    }
    if (focusId === "back-button") {
      (_b = this.backButtonEl) === null || _b === void 0 ? void 0 : _b.setFocus();
      return;
    }
    (_c = this.containerEl) === null || _c === void 0 ? void 0 : _c.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el } = this;
    const rtl = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["a"])(el) === "rtl";
    const { showBackButton, intlBack, backButtonClick } = this;
    const label = intlBack || TEXT.back;
    const icon = rtl ? ICONS.backRight : ICONS.backLeft;
    return showBackButton ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-action", { "aria-label": label, class: CSS.backButton, icon: icon, key: "back-button", onClick: backButtonClick, ref: this.setBackRef, scale: "s", slot: SLOTS.headerActionsStart, text: label })) : null;
  }
  renderHeaderContent() {
    const { heading, headingLevel, summary } = this;
    const headingNode = heading ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_CalciteHeading_js__WEBPACK_IMPORTED_MODULE_2__["C"], { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, heading)) : null;
    const summaryNode = summary ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: CSS.summary }, summary) : null;
    return headingNode || summaryNode ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.headerContent, key: "header-content" }, headingNode, summaryNode)) : null;
  }
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent() {
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.headerContent, key: "header-content" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.headerContent })));
  }
  renderHeaderStartActions() {
    const { el } = this;
    const hasStartActions = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.headerActionsStart);
    return hasStartActions ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { [CSS.headerActionsStart]: true, [CSS.headerActions]: true }, key: "header-actions-start" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.headerActionsStart }))) : null;
  }
  renderHeaderActionsEnd() {
    const { dismiss, dismissible, el, intlClose } = this;
    const text = intlClose || TEXT.close;
    const dismissibleNode = dismissible ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-action", { "aria-label": text, icon: ICONS.close, onClick: dismiss, ref: this.setDismissRef, text: text })) : null;
    const slotNode = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.headerActionsEnd });
    const hasEndActions = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.headerActionsEnd);
    return hasEndActions || dismissibleNode ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { [CSS.headerActionsEnd]: true, [CSS.headerActions]: true }, key: "header-actions-end" }, slotNode, dismissibleNode)) : null;
  }
  renderMenu() {
    const { el, intlOptions, menuOpen } = this;
    const hasMenuItems = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.headerMenuActions);
    return hasMenuItems ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-action-menu", { flipPlacements: ["top", "bottom"], label: intlOptions || TEXT.options, open: menuOpen, placement: "bottom-end" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-action", { icon: ICONS.menu, slot: _calcite_action_menu2_js__WEBPACK_IMPORTED_MODULE_3__["S"].trigger, text: intlOptions || TEXT.options }), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.headerMenuActions }))) : null;
  }
  renderHeaderNode() {
    const { el, showBackButton } = this;
    const backButtonNode = this.renderBackButton();
    const hasHeaderSlottedContent = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.headerContent);
    const headerContentNode = hasHeaderSlottedContent
      ? this.renderHeaderSlottedContent()
      : this.renderHeaderContent();
    const actionsNodeStart = this.renderHeaderStartActions();
    const actionsNodeEnd = this.renderHeaderActionsEnd();
    const headerMenuNode = this.renderMenu();
    return actionsNodeStart ||
      headerContentNode ||
      actionsNodeEnd ||
      headerMenuNode ||
      showBackButton ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("header", { class: CSS.header }, backButtonNode, actionsNodeStart, headerContentNode, actionsNodeEnd, headerMenuNode)) : null;
  }
  /**
   * Allows user to override the entire footer node.
   */
  renderFooterSlottedContent() {
    const { el } = this;
    const hasFooterSlottedContent = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.footer);
    return hasFooterSlottedContent ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", { class: CSS.footer }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.footer }))) : null;
  }
  renderFooterActions() {
    const { el } = this;
    const hasFooterActions = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.footerActions);
    return hasFooterActions ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("footer", { class: CSS.footer }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.footerActions }))) : null;
  }
  renderContent() {
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: CSS.contentContainer, onScroll: this.panelScrollHandler, tabIndex: 0 }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), this.renderFab()));
  }
  renderFab() {
    const { el } = this;
    const hasFab = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["b"])(el, SLOTS.fab);
    return hasFab ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.fabContainer }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.fab }))) : null;
  }
  render() {
    const { dismissed, disabled, dismissible, el, loading, panelKeyUpHandler } = this;
    const rtl = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["a"])(el) === "rtl";
    const panelNode = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("article", { "aria-busy": loading.toString(), class: {
        [CSS.container]: true,
        [_dom_js__WEBPACK_IMPORTED_MODULE_1__["C"].rtl]: rtl
      }, hidden: dismissible && dismissed, onKeyUp: panelKeyUpHandler, ref: this.setContainerRef, tabIndex: dismissible ? 0 : -1 }, this.renderHeaderNode(), this.renderContent(), this.renderFooterSlottedContent() || this.renderFooterActions()));
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loading || disabled ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-scrim", { loading: loading }) : null, panelNode));
  }
  get el() { return this; }
  static get watchers() { return {
    "dismissed": ["dismissedHandler"]
  }; }
  static get style() { return calcitePanelCss; }
};
CalcitePanel$1 = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalcitePanel$1, [1, "calcite-panel", {
    "dismissed": [1540],
    "beforeBack": [16],
    "disabled": [516],
    "dismissible": [516],
    "headingLevel": [2, "heading-level"],
    "showBackButton": [516, "show-back-button"],
    "intlBack": [1, "intl-back"],
    "heightScale": [513, "height-scale"],
    "widthScale": [513, "width-scale"],
    "loading": [516],
    "intlClose": [1, "intl-close"],
    "intlOptions": [1, "intl-options"],
    "heading": [1],
    "summary": [1],
    "menuOpen": [516, "menu-open"],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  const components = ["calcite-panel", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim", "calcite-tooltip-manager"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalcitePanel$1);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        Object(_calcite_action2_js__WEBPACK_IMPORTED_MODULE_4__["d"])();
      }
      break;
    case "calcite-action-menu":
      if (!customElements.get(tagName)) {
        Object(_calcite_action_menu2_js__WEBPACK_IMPORTED_MODULE_3__["d"])();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        Object(_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_5__["d"])();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        Object(_calcite_loader2_js__WEBPACK_IMPORTED_MODULE_6__["d"])();
      }
      break;
    case "calcite-popover":
      if (!customElements.get(tagName)) {
        Object(_calcite_popover2_js__WEBPACK_IMPORTED_MODULE_7__["d"])();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        Object(_calcite_scrim2_js__WEBPACK_IMPORTED_MODULE_8__["d"])();
      }
      break;
    case "calcite-tooltip-manager":
      if (!customElements.get(tagName)) {
        Object(_calcite_tooltip_manager2_js__WEBPACK_IMPORTED_MODULE_9__["d"])();
      }
      break;
  } });
}
defineCustomElement$1();

const CalcitePanel = CalcitePanel$1;
const defineCustomElement = defineCustomElement$1;




/***/ })

}]);
//# sourceMappingURL=esri-calcite-components-dist-components-calcite-panel-js.js.map