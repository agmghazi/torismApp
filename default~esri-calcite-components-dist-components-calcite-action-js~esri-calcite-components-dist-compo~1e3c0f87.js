(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~esri-calcite-components-dist-components-calcite-action-js~esri-calcite-components-dist-compo~1e3c0f87"],{

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

/***/ "QY3C":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createObserver; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Build"].isBrowser ? new Observer(callback, options) : undefined;
}
function getObserver(type) {
  return (type === "intersection" ? IntersectionObserver : type === "mutation" ? MutationObserver : ResizeObserver);
}




/***/ }),

/***/ "sVTk":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-icon2.js ***!
  \********************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "QY3C");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */




const CSS = {
  icon: "icon",
  flipRtl: "flip-rtl"
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch(Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["getAssetPath"])(`./assets/calcite-icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  if (parts.length === 1) {
    return numberLeadingName ? `i${name}` : name;
  }
  return parts
    .map((part, index) => {
    if (index === 0) {
      return numberLeadingName ? `i${part.toUpperCase()}` : part;
    }
    return part.charAt(0).toUpperCase() + part.slice(1);
  })
    .join("");
}

const calciteIconCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";

let CalciteIcon = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
     */
    this.icon = null;
    /**
     * When true, the icon will be flipped when the element direction is 'rtl'.
     */
    this.flipRtl = false;
    /**
     * Icon scale.
     */
    this.scale = "m";
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.intersectionObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["a"])(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Host"], { "aria-hidden": (!semantic).toString(), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: {
        [CSS.flipRtl]: dir === "rtl" && flipRtl,
        svg: true
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: path })) : (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Build"].isBrowser || !icon || !visible) {
      return;
    }
    this.pathData = await fetchIcon({ icon, scale });
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = Object(_observers_js__WEBPACK_IMPORTED_MODULE_2__["c"])("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return calciteIconCss; }
};
CalciteIcon = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteIcon, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement() {
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteIcon);
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=default~esri-calcite-components-dist-components-calcite-action-js~esri-calcite-components-dist-compo~1e3c0f87.js.map