(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esri-calcite-components-dist-components-calcite-pick-list-item-js"],{

/***/ "8Cin":
/*!******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-pick-list-item2.js ***!
  \******************************************************************************************/
/*! exports provided: C, S, a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalcitePickListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SLOTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources3.js */ "/SUY");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _calcite_action2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcite-action2.js */ "eU/K");
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcite-icon2.js */ "sVTk");
/* harmony import */ var _calcite_loader2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calcite-loader2.js */ "M9lk");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */







const CSS = {
  actions: "actions",
  actionsEnd: "actions--end",
  actionsStart: "actions--start",
  description: "description",
  handle: "handle",
  handleActivated: "handle--activated",
  highlight: "highlight",
  icon: "icon",
  iconDot: "icon-dot",
  label: "label",
  remove: "remove",
  title: "title",
  textContainer: "text-container"
};
const ICONS = {
  checked: "check",
  remove: "x"
};
const SLOTS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start"
};
const TEXT = {
  remove: "Remove"
};

const calcitePickListItemCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-1);-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);margin:0;margin-bottom:1px;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;-webkit-transition:background-color 150ms ease-in-out;transition:background-color 150ms ease-in-out;-webkit-animation:calcite-fade-in 150ms ease-in-out;animation:calcite-fade-in 150ms ease-in-out}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}.label{background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;cursor:pointer;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.label:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover{background-color:var(--calcite-ui-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-ui-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin-top:0;margin-bottom:0;padding:0.25rem;cursor:pointer;color:var(--calcite-ui-brand);-ms-flex:0 0 auto;flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-ui-foreground-2)}.icon-dot{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;width:1.5rem;padding:0.5rem}.icon-dot:before{opacity:0;content:\"•\"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot:before,:host([selected]) .icon calcite-icon{-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1}.text-container{display:-ms-flexbox;display:flex;overflow:hidden;pointer-events:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.title{color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-normal)}.description{margin-top:0.125rem;color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;margin:0;-ms-flex:0 1 auto;flex:0 1 auto}.actions--start~.label{padding-left:0.25rem}.calcite--rtl .actions--start~.label{padding-left:unset;padding-right:0.25rem}";

let CalcitePickListItem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListItemChange = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteListItemChange", 7);
    this.calciteListItemRemove = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteListItemRemove", 7);
    this.calciteListItemPropsChange = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteListItemPropsChange", 7);
    this.calciteListItemValueChange = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteListItemValueChange", 7);
    /**
     * When true, the item cannot be clicked and is visually muted.
     */
    this.disabled = false;
    /**
     * When false, the item cannot be deselected by user interaction.
     */
    this.disableDeselect = false;
    /**
     * @internal When true, the item cannot be selected by user interaction.
     */
    this.nonInteractive = false;
    /**
     * Determines the icon SVG symbol that will be shown. Options are circle, square, grip or null.
     * @see [ICON_TYPES](https://github.com/Esri/calcite-components/blob/master/src/components/calcite-pick-list/resources.ts#L5)
     */
    this.icon = null;
    /**
     * Set this to true to display a remove action that removes the item from the list.
     */
    this.removable = false;
    /**
     * Set this to true to pre-select an item. Toggles when an item is checked/unchecked.
     */
    this.selected = false;
    /**
     * Used as an accessible label (aria-label) for the "remove item" action. Only applicable if removable is true.
     * @default "Remove"
     */
    this.intlRemove = TEXT.remove;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.pickListClickHandler = (event) => {
      if (this.disabled || (this.disableDeselect && this.selected) || this.nonInteractive) {
        return;
      }
      this.shiftPressed = event.shiftKey;
      this.selected = !this.selected;
    };
    this.pickListKeyDownHandler = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        if ((this.disableDeselect && this.selected) || this.nonInteractive) {
          return;
        }
        this.selected = !this.selected;
      }
    };
    this.removeClickHandler = () => {
      this.calciteListItemRemove.emit();
    };
  }
  descriptionWatchHandler() {
    this.calciteListItemPropsChange.emit();
  }
  labelWatchHandler() {
    this.calciteListItemPropsChange.emit();
  }
  metadataWatchHandler() {
    this.calciteListItemPropsChange.emit();
  }
  selectedWatchHandler() {
    this.calciteListItemChange.emit({
      item: this.el,
      value: this.value,
      selected: this.selected,
      shiftPressed: this.shiftPressed
    });
    this.shiftPressed = false;
  }
  valueWatchHandler(newValue, oldValue) {
    this.calciteListItemValueChange.emit({ oldValue, newValue });
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   */
  async toggleSelected(coerce) {
    if (this.disabled) {
      return;
    }
    this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
  }
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = this.focusEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon() {
    const { icon } = this;
    if (!icon) {
      return null;
    }
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: {
        [CSS.icon]: true,
        [CSS.iconDot]: icon === _resources3_js__WEBPACK_IMPORTED_MODULE_1__["I"].circle
      }, onClick: this.pickListClickHandler }, icon === _resources3_js__WEBPACK_IMPORTED_MODULE_1__["I"].square ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: ICONS.checked, scale: "s" }) : null));
  }
  renderRemoveAction() {
    return this.removable ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-action", { class: CSS.remove, icon: ICONS.remove, onCalciteActionClick: this.removeClickHandler, slot: SLOTS.actionsEnd, text: this.intlRemove })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = Object(_dom_js__WEBPACK_IMPORTED_MODULE_2__["b"])(el, SLOTS.actionsStart);
    return hasActionsStart ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { [CSS.actions]: true, [CSS.actionsStart]: true } }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el, removable } = this;
    const hasActionsEnd = Object(_dom_js__WEBPACK_IMPORTED_MODULE_2__["b"])(el, SLOTS.actionsEnd);
    return hasActionsEnd || removable ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { [CSS.actions]: true, [CSS.actionsEnd]: true } }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.actionsEnd }), this.renderRemoveAction())) : null;
  }
  render() {
    const { description, label } = this;
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.renderIcon(), this.renderActionsStart(), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { "aria-label": label, class: CSS.label, onClick: this.pickListClickHandler, onKeyDown: this.pickListKeyDownHandler, ref: (focusEl) => (this.focusEl = focusEl), tabIndex: 0 }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-checked": this.selected.toString(), class: CSS.textContainer, role: "menuitemcheckbox" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: CSS.title }, label), description ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: CSS.description }, description) : null)), this.renderActionsEnd()));
  }
  get el() { return this; }
  static get watchers() { return {
    "description": ["descriptionWatchHandler"],
    "label": ["labelWatchHandler"],
    "metadata": ["metadataWatchHandler"],
    "selected": ["selectedWatchHandler"],
    "value": ["valueWatchHandler"]
  }; }
  static get style() { return calcitePickListItemCss; }
};
CalcitePickListItem = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalcitePickListItem, [1, "calcite-pick-list-item", {
    "description": [513],
    "disabled": [516],
    "disableDeselect": [4, "disable-deselect"],
    "nonInteractive": [516, "non-interactive"],
    "icon": [513],
    "label": [513],
    "metadata": [16],
    "removable": [516],
    "selected": [1540],
    "intlRemove": [513, "intl-remove"],
    "value": [8],
    "toggleSelected": [64],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  const components = ["calcite-pick-list-item", "calcite-action", "calcite-icon", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-pick-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalcitePickListItem);
      }
      break;
    case "calcite-action":
      if (!customElements.get(tagName)) {
        Object(_calcite_action2_js__WEBPACK_IMPORTED_MODULE_3__["d"])();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        Object(_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_4__["d"])();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        Object(_calcite_loader2_js__WEBPACK_IMPORTED_MODULE_5__["d"])();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "9fIH":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-pick-list-item.js ***!
  \*****************************************************************************************/
/*! exports provided: CalcitePickListItem, defineCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcitePickListItem", function() { return CalcitePickListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony import */ var _calcite_pick_list_item2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcite-pick-list-item2.js */ "8Cin");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


const CalcitePickListItem = _calcite_pick_list_item2_js__WEBPACK_IMPORTED_MODULE_0__["C"];
const defineCustomElement = _calcite_pick_list_item2_js__WEBPACK_IMPORTED_MODULE_0__["d"];




/***/ })

}]);
//# sourceMappingURL=esri-calcite-components-dist-components-calcite-pick-list-item-js.js.map