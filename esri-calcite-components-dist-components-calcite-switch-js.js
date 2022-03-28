(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esri-calcite-components-dist-components-calcite-switch-js"],{

/***/ "14CA":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/dom.js ***!
  \**********************************************************************/
/*! exports provided: C, T, a, b, c, d, e, f, g, h, i, j, k, n, q, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CSS_UTILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getElementDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSlotted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getThemeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return closestElementCrossShadowBoundary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return filterDirectChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return focusElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElementProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ensureId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isCalciteFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return queryElementsRoots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return intersects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return nodeListToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return queryElementRoots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setRequestedIcon; });
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "Ahi8");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


const autoTheme = "calcite-theme-auto";
const darkTheme = "calcite-theme-dark";
const lightTheme = "calcite-theme-light";
const CSS_UTILITY = {
  autoTheme,
  darkTheme,
  lightTheme,
  rtl: "calcite--rtl"
};
const TEXT = {
  loading: "Loading"
};

/**
 * This helper will guarantee an ID on the provided element.
 *
 * If it already has an ID, it will be preserved, otherwise a unique one will be generated and assigned.
 *
 * @returns {string} The element's ID.
 */
function ensureId(el) {
  if (!el) {
    return "";
  }
  return (el.id = el.id || `${el.tagName.toLowerCase()}-${Object(_guid_js__WEBPACK_IMPORTED_MODULE_0__["g"])()}`);
}
function nodeListToArray(nodeList) {
  return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}
function getThemeName(el) {
  return closestElementCrossShadowBoundary(el, `.${CSS_UTILITY.darkTheme}`) ? "dark" : "light";
}
function getElementDir(el) {
  const prop = "dir";
  const selector = `[${prop}]`;
  const closest = closestElementCrossShadowBoundary(el, selector);
  return closest ? closest.getAttribute(prop) : "ltr";
}
function getElementProp(el, prop, fallbackValue) {
  const selector = `[${prop}]`;
  const closest = el.closest(selector);
  return closest ? closest.getAttribute(prop) : fallbackValue;
}
function getRootNode(el) {
  return el.getRootNode();
}
function getHost(root) {
  return root.host || null;
}
// Queries an element's rootNode and any ancestor rootNodes.
// based on https://stackoverflow.com/q/54520554/194216
function queryElementsRoots(element, selector) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  function queryFromAll(el, allResults) {
    if (!el) {
      return allResults;
    }
    if (el.assignedSlot) {
      el = el.assignedSlot;
    }
    const rootNode = getRootNode(el);
    const results = Array.from(rootNode.querySelectorAll(selector));
    const uniqueResults = results.filter((result) => !allResults.includes(result));
    allResults = [...allResults, ...uniqueResults];
    const host = getHost(rootNode);
    return host ? queryFromAll(host, allResults) : allResults;
  }
  return queryFromAll(element, []);
}
// Queries an element's rootNode and any ancestor rootNodes.
// based on https://stackoverflow.com/q/54520554/194216
function queryElementRoots(element, selector) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  function queryFrom(el) {
    if (!el) {
      return null;
    }
    if (el.assignedSlot) {
      el = el.assignedSlot;
    }
    const rootNode = getRootNode(el);
    const found = rootNode.querySelector(selector);
    const host = getHost(rootNode);
    return found ? found : host ? queryFrom(host) : null;
  }
  return queryFrom(element);
}
function closestElementCrossShadowBoundary(element, selector) {
  // based on https://stackoverflow.com/q/54520554/194216
  function closestFrom(el) {
    return el ? el.closest(selector) || closestFrom(getHost(getRootNode(el))) : null;
  }
  return closestFrom(element);
}
function isCalciteFocusable(el) {
  return typeof (el === null || el === void 0 ? void 0 : el.setFocus) === "function";
}
async function focusElement(el) {
  if (!el) {
    return;
  }
  return isCalciteFocusable(el) ? el.setFocus() : el.focus();
}
function getSlotted(element, slotName, options) {
  const slotSelector = `[slot="${slotName}"]`;
  if (options === null || options === void 0 ? void 0 : options.all) {
    return queryMultiple(element, slotSelector, options);
  }
  return querySingle(element, slotSelector, options);
}
function queryMultiple(element, slotSelector, options) {
  let matches = Array.from(element.querySelectorAll(slotSelector));
  matches = options && options.direct === false ? matches : matches.filter((el) => el.parentElement === element);
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector
    ? matches
      .map((item) => Array.from(item.querySelectorAll(selector)))
      .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
      .filter((match) => !!match)
    : matches;
}
function querySingle(element, slotSelector, options) {
  let match = element.querySelector(slotSelector);
  match = options && options.direct === false ? match : (match === null || match === void 0 ? void 0 : match.parentElement) === element ? match : null;
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector ? match.querySelector(selector) : match;
}
function filterDirectChildren(el, selector) {
  return Array.from(el.children).filter((child) => child.matches(selector));
}
// set a default icon from a defined set or allow an override with an icon name string
function setRequestedIcon(iconObject, iconValue, matchedValue) {
  if (typeof iconValue === "string" && iconValue !== "") {
    return iconValue;
  }
  else if (iconValue === "") {
    return iconObject[matchedValue];
  }
}
function intersects(rect1, rect2) {
  return !(rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top);
}




/***/ }),

/***/ "9ITz":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-switch.js ***!
  \*********************************************************************************/
/*! exports provided: CalciteSwitch, defineCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalciteSwitch", function() { return CalciteSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony import */ var _calcite_switch2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcite-switch2.js */ "mq1w");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


const CalciteSwitch = _calcite_switch2_js__WEBPACK_IMPORTED_MODULE_0__["C"];
const defineCustomElement = _calcite_switch2_js__WEBPACK_IMPORTED_MODULE_0__["d"];




/***/ }),

/***/ "Ahi8":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/guid.js ***!
  \***********************************************************************/
/*! exports provided: g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return guid; });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function gen(counts) {
  return counts
    .map((count) => {
    let out = "";
    for (let i = 0; i < count; i++) {
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return out;
  })
    .join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);




/***/ }),

/***/ "g4L+":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/key.js ***!
  \**********************************************************************/
/*! exports provided: g, i, n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isActivationKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return numberKeys; });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
/**
 * Standardize key property of keyboard event (mostly for ie11)
 */
function getKey(key, dir) {
  const lookup = {
    Up: "ArrowUp",
    Down: "ArrowDown",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Spacebar: " ",
    Esc: "Escape"
  };
  const adjustedKey = lookup[key] || key;
  const isRTL = dir === "rtl";
  if (isRTL && adjustedKey === "ArrowLeft") {
    return "ArrowRight";
  }
  if (isRTL && adjustedKey === "ArrowRight") {
    return "ArrowLeft";
  }
  return adjustedKey;
}
function isActivationKey(key) {
  key = getKey(key);
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




/***/ }),

/***/ "mq1w":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-switch2.js ***!
  \**********************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "bT3h");
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid.js */ "Ahi8");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key.js */ "g4L+");
/* harmony import */ var _label_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label.js */ "KRpH");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */







const calciteSwitchCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{width:1.5rem;height:0.75rem}:host([scale=s]) .handle{width:0.5rem;height:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{width:2rem;height:1rem}:host([scale=m]) .handle{width:0.75rem;height:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{width:3rem;height:1.5rem}:host([scale=l]) .handle{width:1.25rem;height:1.25rem}:host{display:inline-block;position:relative;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none;cursor:default}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:auto}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.track{position:relative;display:inline-block;vertical-align:top;background-color:var(--calcite-ui-foreground-2);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px}.handle{position:absolute;display:block;right:auto;background-color:var(--calcite-ui-foreground-1);border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:9999px;pointer-events:none;top:-1px;left:-1px}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]) .handle{left:auto;border-color:var(--calcite-ui-brand);right:-1px}:host([checked]:hover) .track{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand-hover)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}.calcite--rtl .handle{left:auto;right:-1px}:host([checked]) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:active) .calcite--rtl .handle{right:auto;left:-1px}:host([checked]:focus) .calcite--rtl .handle{right:auto;left:-1px}";

let CalciteSwitch = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteSwitchChange = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteSwitchChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** True if the switch is disabled */
    this.disabled = false;
    /** The scale of the switch */
    this.scale = "m";
    /** True if the switch is initially on
     * @deprecated use 'checked' instead.
     */
    this.switched = false;
    /** True if the switch is initially on */
    this.checked = false;
    this.inputEl = document.createElement("input");
    this.clickHandler = () => {
      this.toggle();
    };
  }
  disabledWatcher(newDisabled) {
    this.inputEl.disabled = newDisabled;
    this.tabindex = newDisabled ? -1 : 0;
  }
  nameChanged(newName) {
    this.inputEl.name = newName;
  }
  switchedWatcher(switched) {
    this.checked = switched;
  }
  checkedWatcher(checked) {
    this.inputEl.checked = checked;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    if (!this.disabled) {
      this.toggle();
      this.setFocus();
    }
  }
  setupInput() {
    this.checked && this.inputEl.setAttribute("checked", "");
    this.inputEl.disabled = this.disabled;
    this.inputEl.id = `${this.guid}-input`;
    this.inputEl.name = this.name;
    this.inputEl.style.cssText = _form_js__WEBPACK_IMPORTED_MODULE_2__["h"];
    this.inputEl.type = "checkbox";
    if (this.value) {
      this.inputEl.value = this.value != null ? this.value.toString() : "";
    }
    this.el.appendChild(this.inputEl);
  }
  toggle() {
    this.checked = !this.checked;
    this.calciteSwitchChange.emit({
      // todo: We should remove emmitting redudant props in event payload.
      // https://github.com/Esri/calcite-components/issues/3163
      switched: this.checked
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(e) {
    const key = Object(_key_js__WEBPACK_IMPORTED_MODULE_4__["g"])(e.key);
    if (!this.disabled && (key === " " || key === "Enter")) {
      this.toggle();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    Object(_label_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this);
    const initiallyChecked = this.checked || this.switched;
    if (initiallyChecked) {
      // if either prop is set, we ensure both are synced initially
      this.switched = this.checked = initiallyChecked;
    }
  }
  disconnectedCallback() {
    Object(_label_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this);
  }
  componentWillLoad() {
    this.guid = this.el.id || `calcite-switch-${Object(_guid_js__WEBPACK_IMPORTED_MODULE_3__["g"])()}`;
    this.tabindex = this.el.getAttribute("tabindex") || this.disabled ? -1 : 0;
    this.setupInput();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.el);
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Host"], { "aria-checked": this.checked.toString(), "aria-label": Object(_label_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this), onClick: this.clickHandler, role: "switch", tabindex: this.tabindex }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { container: true, [_dom_js__WEBPACK_IMPORTED_MODULE_1__["C"].rtl]: dir === "rtl" } }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "track" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "handle" })))));
  }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "name": ["nameChanged"],
    "switched": ["switchedWatcher"],
    "checked": ["checkedWatcher"]
  }; }
  static get style() { return calciteSwitchCss; }
};
CalciteSwitch = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteSwitch, [1, "calcite-switch", {
    "disabled": [516],
    "label": [1],
    "name": [513],
    "scale": [513],
    "switched": [1028],
    "checked": [1540],
    "value": [520],
    "guid": [32],
    "tabindex": [32],
    "setFocus": [64]
  }, [[0, "keydown", "keyDownHandler"]]]);
function defineCustomElement() {
  const components = ["calcite-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-switch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteSwitch);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=esri-calcite-components-dist-components-calcite-switch-js.js.map