(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esri-calcite-components-dist-components-calcite-label-js"],{

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

/***/ "ByqI":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-label2.js ***!
  \*********************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "14CA");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */



const CSS = {
  container: "container"
};

const calciteLabelCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([alignment=start]),:host([alignment=end]) .calcite--rtl{text-align:left}:host([alignment=end]),:host([alignment=start]) .calcite--rtl{text-align:right}:host([alignment=center]){text-align:center}:host([scale=s]) .container{font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.5rem}:host([scale=m]) .container{font-size:var(--calcite-font-size--1);line-height:1rem;margin-bottom:0.75rem}:host([scale=l]) .container{font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-bottom:1rem}:host .container{color:var(--calcite-ui-text-1);cursor:pointer;width:100%;margin-top:0;margin-right:0;margin-left:0;line-height:1.375}:host([layout=default]) .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;grid-gap:0.25rem;gap:0.25rem}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;grid-gap:0.5rem;gap:0.5rem}:host([layout=inline][scale=l]) .container{grid-gap:0.75rem;gap:0.75rem}:host([layout=inline-space-between]) .container{-ms-flex-pack:justify;justify-content:space-between}:host([disabled])>.container{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--bg-opacity:0}:host([disable-spacing]) .container{grid-gap:0;gap:0;margin:0}";

let CalciteLabel = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalLabelClick = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteInternalLabelClick", 3);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the text alignment of the label */
    this.alignment = "start";
    /** specify the status of the label and any child input / input messages */
    this.status = "idle";
    /** specify the scale of the label, defaults to m */
    this.scale = "m";
    /** is the wrapped element positioned inline with the label slotted text */
    this.layout = "default";
    /** eliminates any space around the label */
    this.disableSpacing = false;
    /** is the label disabled  */
    this.disabled = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.labelClickHandler = (event) => {
      this.calciteInternalLabelClick.emit({
        sourceEvent: event
      });
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const dir = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.el);
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Host"], { onClick: this.labelClickHandler }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { [CSS.container]: true, [_dom_js__WEBPACK_IMPORTED_MODULE_1__["C"].rtl]: dir === "rtl" } }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return this; }
  static get style() { return calciteLabelCss; }
};
CalciteLabel = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteLabel, [1, "calcite-label", {
    "alignment": [513],
    "status": [513],
    "for": [513],
    "scale": [513],
    "layout": [513],
    "disableSpacing": [4, "disable-spacing"],
    "disabled": [516]
  }]);
function defineCustomElement() {
  const components = ["calcite-label"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteLabel);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "MJcw":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-label.js ***!
  \********************************************************************************/
/*! exports provided: CalciteLabel, defineCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalciteLabel", function() { return CalciteLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony import */ var _calcite_label2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcite-label2.js */ "ByqI");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


const CalciteLabel = _calcite_label2_js__WEBPACK_IMPORTED_MODULE_0__["C"];
const defineCustomElement = _calcite_label2_js__WEBPACK_IMPORTED_MODULE_0__["d"];




/***/ })

}]);
//# sourceMappingURL=esri-calcite-components-dist-components-calcite-label-js.js.map