(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esri-calcite-components-dist-components-calcite-pick-list-js"],{

/***/ "3UD+":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "56Tk":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-filter2.js ***!
  \**********************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calcite-icon2.js */ "sVTk");
/* harmony import */ var _calcite_input2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcite-input2.js */ "vZDh");
/* harmony import */ var _calcite_loader2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcite-loader2.js */ "M9lk");
/* harmony import */ var _calcite_progress2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calcite-progress2.js */ "OM0F");
/* harmony import */ var _calcite_scrim2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calcite-scrim2.js */ "i7vG");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debounce.js */ "UIwo");
/* harmony import */ var _forIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forIn.js */ "TJUU");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */










const CSS = {
  container: "container",
  searchIcon: "search-icon",
  clearButton: "clear-button"
};
const TEXT = {
  filterLabel: "Filter",
  clear: "Clear filter"
};
const ICONS = {
  search: "search",
  close: "x"
};

const calciteFilterCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;width:100%}.container{display:-ms-flexbox;display:flex;width:100%;padding:0.5rem}label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative;width:100%;margin-left:0.25rem;margin-right:0.25rem;margin-top:0;margin-bottom:0}input[type=text]{background-color:transparent;border-style:none;font-family:inherit;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.25rem;width:100%;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;-webkit-transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}input[type=text]::-ms-clear{display:none}calcite-input{width:100%}.search-icon{display:-ms-flexbox;display:flex;left:0;position:absolute;color:var(--calcite-ui-text-2);-webkit-transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out;transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out}.calcite--rtl .search-icon{right:0}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-left:0.25rem;padding-right:0.25rem}input[type=text]:focus~.search-icon{left:calc(1rem * -1);opacity:0}.calcite--rtl input[type=text]{padding-left:0.25rem;padding-right:1.5rem}.calcite--rtl input[type=text]:focus{padding-right:1.25rem}.calcite--rtl input[type=text]:focus~.search-icon{right:calc(1rem * -1)}.clear-button{color:var(--calcite-ui-text-2);background-color:transparent;border-width:0;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";

const filterDebounceInMs = 250;
let CalciteFilter = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteFilterChange = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteFilterChange", 7);
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * The resulting items after filtering.
     *
     * @readonly
     */
    this.filteredItems = [];
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filter = Object(_debounce_js__WEBPACK_IMPORTED_MODULE_7__["d"])((value) => {
      const regex = new RegExp(value, "i");
      if (this.items.length === 0) {
        this.updateFiltered([]);
        return;
      }
      const find = (input, RE) => {
        let found = false;
        Object(_forIn_js__WEBPACK_IMPORTED_MODULE_8__["f"])(input, (val) => {
          if (typeof val === "function") {
            return;
          }
          if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
            if (find(val, RE)) {
              found = true;
            }
          }
          else if (RE.test(val)) {
            found = true;
          }
        });
        return found;
      };
      const result = this.items.filter((item) => {
        return find(item, regex);
      });
      this.updateFiltered(result);
    }, filterDebounceInMs);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
    };
    this.keyDownHandler = ({ key }) => {
      if (key === "Escape") {
        this.clear();
      }
    };
    this.clear = () => {
      this.value = "";
      this.setFocus();
    };
  }
  watchDataHandler(value) {
    this.items = value;
  }
  watchItemsHandler() {
    this.filter(this.value);
  }
  valueHandler(value) {
    this.filter(value);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    if (this.data && !this.items) {
      this.items = this.data;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.textInput);
  }
  updateFiltered(filtered) {
    this.filteredItems.length = 0;
    this.filteredItems = this.filteredItems.concat(filtered);
    this.calciteFilterChange.emit(filtered);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const rtl = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.el) === "rtl";
    const { disabled } = this;
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, disabled ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-scrim", null) : null, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.container }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: rtl ? _dom_js__WEBPACK_IMPORTED_MODULE_1__["C"].rtl : null }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-input", { "aria-label": this.intlLabel || TEXT.filterLabel, class: rtl ? _dom_js__WEBPACK_IMPORTED_MODULE_1__["C"].rtl : null, disabled: this.disabled, icon: ICONS.search, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, ref: (el) => {
        this.textInput = el;
      }, type: "text", value: this.value })), this.value ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { "aria-label": this.intlClear || TEXT.clear, class: CSS.clearButton, onClick: this.clear }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: ICONS.close }))) : null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "data": ["watchDataHandler"],
    "items": ["watchItemsHandler"],
    "value": ["valueHandler"]
  }; }
  static get style() { return calciteFilterCss; }
};
CalciteFilter = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteFilter, [1, "calcite-filter", {
    "data": [16],
    "items": [1040],
    "disabled": [516],
    "filteredItems": [1040],
    "intlClear": [1, "intl-clear"],
    "intlLabel": [1, "intl-label"],
    "placeholder": [1],
    "value": [1025],
    "setFocus": [64]
  }]);
function defineCustomElement() {
  const components = ["calcite-filter", "calcite-icon", "calcite-input", "calcite-loader", "calcite-progress", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteFilter);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        Object(_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_2__["d"])();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        Object(_calcite_input2_js__WEBPACK_IMPORTED_MODULE_3__["d"])();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        Object(_calcite_loader2_js__WEBPACK_IMPORTED_MODULE_4__["d"])();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        Object(_calcite_progress2_js__WEBPACK_IMPORTED_MODULE_5__["d"])();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        Object(_calcite_scrim2_js__WEBPACK_IMPORTED_MODULE_6__["d"])();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "BPhx":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/locale.js ***!
  \*************************************************************************/
/*! exports provided: a, d, g, l */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delocalizeNumberString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getDecimalSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return localizeNumberString; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "Y49D");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


const locales = [
  "ar",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-CH",
  "el",
  "en",
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "nb",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
function createLocaleNumberFormatter(locale) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 20
  });
}
function delocalizeNumberString(numberString, locale) {
  if (numberString) {
    const groupSeparator = getGroupSeparator(locale);
    const decimalSeparator = getDecimalSeparator(locale);
    const splitNumberString = numberString.split("");
    const decimalIndex = splitNumberString.lastIndexOf(decimalSeparator);
    const delocalizedNumberString = splitNumberString
      .map((value, index) => {
      if (value === groupSeparator || (value === decimalSeparator && index !== decimalIndex)) {
        return "";
      }
      return value;
    })
      .reduce((string, part) => string + part)
      .replace(decimalSeparator, ".");
    return isNaN(Number(delocalizedNumberString)) ? numberString : delocalizedNumberString;
  }
  return numberString;
}
function getGroupSeparator(locale) {
  const formatter = createLocaleNumberFormatter(locale);
  const parts = formatter.formatToParts(1234567.8);
  const value = parts.find((part) => part.type === "group").value;
  return value.trim().length === 0 ? " " : value;
}
function getDecimalSeparator(locale) {
  const formatter = createLocaleNumberFormatter(locale);
  const parts = formatter.formatToParts(1234567.8);
  const value = parts.find((part) => part.type === "decimal").value;
  return value.trim().length === 0 ? " " : value;
}
function localizeNumberString(numberString, locale, displayGroupSeparator = false) {
  if (numberString) {
    const number = Number(Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["a"])(numberString));
    if (!isNaN(number)) {
      const formatter = createLocaleNumberFormatter(locale);
      const parts = formatter.formatToParts(number);
      const localizedNumberString = parts
        .map(({ type, value }) => {
        switch (type) {
          case "group":
            return displayGroupSeparator ? getGroupSeparator(locale) : "";
          case "decimal":
            return getDecimalSeparator(locale);
          default:
            return value;
        }
      })
        .reduce((string, part) => string + part);
      return localizedNumberString;
    }
  }
  return numberString;
}




/***/ }),

/***/ "GTm4":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/shared-list-render.js ***!
  \*************************************************************************************/
/*! exports provided: L, a, b, c, d, e, f, g, h, i, j, k, l, m, r, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calciteListItemChangeHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cleanUpObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deselectSiblingItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return calciteListItemValueChangeHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return calciteListFocusOutHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getItemData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setUpItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return keyDownHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mutationObserverCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return selectSiblings; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "NJVA");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce.js */ "UIwo");
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources3.js */ "/SUY");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */






function mutationObserverCallback() {
  this.setUpItems();
  this.setUpFilter();
}
const SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];
// --------------------------------------------------------------------------
//
//  Lifecycle
//
// --------------------------------------------------------------------------
function initialize() {
  this.setUpItems();
  this.setUpFilter();
  this.emitCalciteListChange = Object(_debounce_js__WEBPACK_IMPORTED_MODULE_2__["d"])(internalCalciteListChangeEvent.bind(this), 0);
}
function initializeObserver() {
  var _a;
  (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
}
function cleanUpObserver() {
  var _a;
  (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
}
// --------------------------------------------------------------------------
//
//  Listeners
//
// --------------------------------------------------------------------------
function calciteListItemChangeHandler(event) {
  const { selectedValues } = this;
  const { item, value, selected, shiftPressed } = event.detail;
  if (selected) {
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item);
    }
    if (!this.multiple) {
      this.deselectSiblingItems(item);
    }
    selectedValues.set(value, item);
  }
  else {
    selectedValues.delete(value);
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item, true);
    }
  }
  if (!this.multiple) {
    toggleSingleSelectItemTabbing(item, selected);
    if (selected) {
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["f"])(item);
    }
  }
  this.lastSelectedItem = item;
  this.emitCalciteListChange();
}
function calciteListItemValueChangeHandler(event) {
  event.stopPropagation();
  const oldValue = event.detail.oldValue;
  const selectedValues = this.selectedValues;
  if (selectedValues.has(oldValue)) {
    const item = selectedValues.get(oldValue);
    selectedValues.delete(oldValue);
    selectedValues.set(event.detail.newValue, item);
  }
}
// --------------------------------------------------------------------------
//
//  Private Methods
//
// --------------------------------------------------------------------------
function isValidNavigationKey(key) {
  return !!SUPPORTED_ARROW_KEYS.find((k) => k === key);
}
function calciteListFocusOutHandler(event) {
  const { el, items, multiple, selectedValues } = this;
  if (multiple) {
    return;
  }
  const focusedInside = !!el.contains(event.relatedTarget);
  if (focusedInside) {
    toggleSingleSelectItemTabbing(event.target, false);
    return;
  }
  items.forEach((item) => toggleSingleSelectItemTabbing(item, selectedValues.size === 0 ? event.target === item : item.selected));
}
function keyDownHandler(event) {
  const { key, target } = event;
  if (!isValidNavigationKey(key)) {
    return;
  }
  const { items, multiple, selectionFollowsFocus } = this;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(target);
  if (!totalItems || currentIndex === -1) {
    return;
  }
  event.preventDefault();
  const index = Object(_array_js__WEBPACK_IMPORTED_MODULE_1__["g"])(currentIndex + (key === "ArrowUp" ? -1 : 1), totalItems);
  const item = items[index];
  items.forEach((i) => toggleSingleSelectItemTabbing(i, i === item));
  if (!multiple && selectionFollowsFocus) {
    item.selected = true;
  }
  Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["f"])(item);
}
function internalCalciteListChangeEvent() {
  this.calciteListChange.emit(this.selectedValues);
}
function removeItem(event) {
  if (event.defaultPrevented) {
    return;
  }
  const item = event.target;
  const selectedValues = this.selectedValues;
  if (item.parentElement.tagName === "CALCITE-PICK-LIST-GROUP") {
    item.parentElement.remove();
    Array.from(item.parentElement.children).forEach((item) => selectedValues.delete(item.value));
  }
  else {
    item.remove();
    selectedValues.delete(item.value);
  }
  this.emitCalciteListChange();
}
function toggleSingleSelectItemTabbing(item, selectable) {
  // using attribute intentionally
  if (selectable) {
    item.removeAttribute("tabindex");
  }
  else {
    item.setAttribute("tabindex", "-1");
  }
}
async function setFocus(focusId) {
  if (this.filterEnabled && focusId === "filter") {
    await Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.filterEl);
    return;
  }
  const { items, multiple, selectionFollowsFocus } = this;
  if (items.length === 0) {
    return;
  }
  if (multiple) {
    return items[0].setFocus();
  }
  const focusTarget = items.find((item) => item.selected) || items[0];
  if (selectionFollowsFocus) {
    focusTarget.selected = true;
  }
  return focusTarget.setFocus();
}
function setUpItems(tagName) {
  this.items = Array.from(this.el.querySelectorAll(tagName));
  let hasSelected = false;
  const { items } = this;
  items.forEach((item) => {
    item.icon = this.getIconType();
    if (!this.multiple) {
      item.disableDeselect = true;
      toggleSingleSelectItemTabbing(item, false);
    }
    if (item.selected) {
      hasSelected = true;
      toggleSingleSelectItemTabbing(item, true);
      this.selectedValues.set(item.value, item);
    }
  });
  const [first] = items;
  if (!hasSelected && first) {
    toggleSingleSelectItemTabbing(first, true);
  }
}
function deselectSiblingItems(item) {
  this.items.forEach((currentItem) => {
    if (currentItem.value !== item.value) {
      currentItem.toggleSelected(false);
      if (this.selectedValues.has(currentItem.value)) {
        this.selectedValues.delete(currentItem.value);
      }
    }
  });
}
function selectSiblings(item, deselect = false) {
  if (!this.lastSelectedItem) {
    return;
  }
  const { items } = this;
  const start = items.findIndex((currentItem) => {
    return currentItem.value === this.lastSelectedItem.value;
  });
  const end = items.findIndex((currentItem) => {
    return currentItem.value === item.value;
  });
  items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
    currentItem.toggleSelected(!deselect);
    if (!deselect) {
      this.selectedValues.set(currentItem.value, currentItem);
    }
    else {
      this.selectedValues.delete(currentItem.value);
    }
  });
}
let groups;
function handleFilter(event) {
  const filteredData = event.detail;
  const values = filteredData.map((item) => item.value);
  let hasSelectedMatch = false;
  if (!groups) {
    groups = new Set();
  }
  const matchedItems = this.items.filter((item) => {
    const parent = item.parentElement;
    const grouped = parent.matches("calcite-pick-list-group");
    if (grouped) {
      groups.add(parent);
    }
    const matches = values.includes(item.value);
    item.hidden = !matches;
    if (!hasSelectedMatch) {
      hasSelectedMatch = matches && item.selected;
    }
    return matches;
  });
  groups.forEach((group) => {
    const hasAtLeastOneMatch = matchedItems.some((item) => group.contains(item));
    group.hidden = !hasAtLeastOneMatch;
    if (!hasAtLeastOneMatch) {
      return;
    }
    const parentItem = Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["b"])(group, "parent-item");
    if (parentItem) {
      parentItem.hidden = false;
      if (matchedItems.includes(parentItem)) {
        Array.from(group.children).forEach((child) => (child.hidden = false));
      }
    }
  });
  groups.clear();
  if (matchedItems.length > 0 && !hasSelectedMatch && !this.multiple) {
    toggleSingleSelectItemTabbing(matchedItems[0], true);
  }
}
function getItemData() {
  return this.items.map((item) => ({
    label: item.label,
    description: item.description,
    metadata: item.metadata,
    value: item.value
  }));
}

var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const List = (_a) => {
  var { props: { disabled, loading, filterEnabled, dataForFilter, handleFilter, filterPlaceholder, el, setFilterEl } } = _a, rest = __rest(_a, ["props"]);
  const defaultSlot = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null);
  return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__["Host"], Object.assign({ "aria-busy": loading.toString(), "aria-disabled": disabled.toString(), role: "menu" }, rest),
    Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__["h"])("section", null,
      Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__["h"])("header", { class: { [_resources3_js__WEBPACK_IMPORTED_MODULE_4__["C"].sticky]: true } },
        filterEnabled ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__["h"])("calcite-filter", { "aria-label": filterPlaceholder, data: dataForFilter, dir: Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["a"])(el), disabled: loading || disabled, onCalciteFilterChange: handleFilter, placeholder: filterPlaceholder, ref: setFilterEl })) : null,
        Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", { name: _resources3_js__WEBPACK_IMPORTED_MODULE_4__["S"].menuActions })),
      loading || disabled ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__["h"])("calcite-scrim", { loading: loading }) : null,
      defaultSlot)));
};




/***/ }),

/***/ "NJVA":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/array.js ***!
  \************************************************************************/
/*! exports provided: g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRoundRobinIndex; });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "OM0F":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-progress2.js ***!
  \************************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


const calciteProgressCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:relative;display:block;width:100%}.track,.bar{position:absolute;top:0;height:2px}.track{z-index:0;width:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{background-color:var(--calcite-ui-brand);z-index:0}.indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 2200ms linear infinite;animation:looping-progress-bar-ani 2200ms linear infinite}.reversed{animation-direction:reverse}.text{padding-top:1rem;padding-bottom:0;padding-left:0;padding-right:0;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium)}@-webkit-keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}";

let CalciteProgress = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** Use indeterminate if finding actual progress value is impossible */
    this.type = "determinate";
    /** Fraction completed, in the range of 0 - 1.0 */
    this.value = 0;
    /** For indeterminate progress bars, reverse the animation direction */
    this.reversed = false;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "track" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        bar: true,
        indeterminate: this.type === "indeterminate",
        reversed: this.reversed
      }, style: barStyles })), this.text ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text" }, this.text) : null));
  }
  get el() { return this; }
  static get style() { return calciteProgressCss; }
};
CalciteProgress = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteProgress, [1, "calcite-progress", {
    "type": [1],
    "value": [2],
    "label": [1],
    "text": [1],
    "reversed": [4]
  }]);
function defineCustomElement() {
  const components = ["calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteProgress);
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "TJUU":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/forIn.js ***!
  \************************************************************************/
/*! exports provided: f, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return forIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isArray; });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ "UIwo");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__["i"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__["b"])(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

  return value === proto;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__["c"])(value) && Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__["b"])(value) == argsTag$1;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__["c"])(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Built-in value references. */
var Buffer = moduleExports$1 ? _debounce_js__WEBPACK_IMPORTED_MODULE_0__["r"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__["c"])(value) &&
    isLength(value.length) && !!typedArrayTags[Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__["b"])(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _debounce_js__WEBPACK_IMPORTED_MODULE_0__["f"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__["i"])(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "UIwo":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/debounce.js ***!
  \***************************************************************************/
/*! exports provided: S, a, b, c, d, f, i, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseGetTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return freeGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return root; });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}




/***/ }),

/***/ "Y49D":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/number.js ***!
  \*************************************************************************/
/*! exports provided: a, i, p, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeDecimalString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isValidNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return parseNumberString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeNumberString; });
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key.js */ "g4L+");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */


function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return null;
  }
  let containsDecimal = false;
  const result = numberString
    .split("")
    .filter((value, i) => {
    if (value.match(/\./g) && !containsDecimal) {
      containsDecimal = true;
      return true;
    }
    if (value.match(/\-/g) && i === 0) {
      return true;
    }
    return _key_js__WEBPACK_IMPORTED_MODULE_0__["n"].includes(value);
  })
    .reduce((string, part) => string + part);
  return isValidNumber(result) ? Number(result).toString() : null;
}
function sanitizeDecimalString(decimalString) {
  return (decimalString === null || decimalString === void 0 ? void 0 : decimalString.endsWith(".")) ? decimalString.replace(".", "") : decimalString;
}
function sanitizeNumberString(value) {
  return value ? Number(sanitizeDecimalString(value)).toString() : value;
}
function stringContainsNumbers(string) {
  return _key_js__WEBPACK_IMPORTED_MODULE_0__["n"].some((number) => string.includes(number));
}




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

/***/ "hFe1":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-pick-list.js ***!
  \************************************************************************************/
/*! exports provided: CalcitePickList, defineCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcitePickList", function() { return CalcitePickList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources3.js */ "/SUY");
/* harmony import */ var _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-list-render.js */ "GTm4");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ "QY3C");
/* harmony import */ var _calcite_filter2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcite-filter2.js */ "56Tk");
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calcite-icon2.js */ "sVTk");
/* harmony import */ var _calcite_input2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calcite-input2.js */ "vZDh");
/* harmony import */ var _calcite_loader2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calcite-loader2.js */ "M9lk");
/* harmony import */ var _calcite_progress2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calcite-progress2.js */ "OM0F");
/* harmony import */ var _calcite_scrim2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calcite-scrim2.js */ "i7vG");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */











const calcitePickListCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);line-height:1rem}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host([filter-enabled]) header{background-color:var(--calcite-ui-foreground-1);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:stretch;align-items:stretch;margin-bottom:0.25rem;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3)}:host([filter-enabled]) header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:0}:host([loading][disabled]){min-height:2rem}";

let CalcitePickList$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteListChange = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteListChange", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * When true, an input appears at the top of the list that can be used by end users to filter items in the list.
     */
    this.filterEnabled = false;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * Multiple works similar to standard radio buttons and checkboxes.
     * When true, a user can select multiple items at a time.
     * When false, only a single item can be selected at a time
     * and selecting a new item will deselect any other selected items.
     */
    this.multiple = false;
    /**
     * When true and single-selection is enabled, the selection will change when navigating items via the keyboard.
     */
    this.selectionFollowsFocus = false;
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.selectedValues = new Map();
    this.dataForFilter = [];
    this.lastSelectedItem = null;
    this.mutationObserver = Object(_observers_js__WEBPACK_IMPORTED_MODULE_3__["c"])("mutation", _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["m"].bind(this));
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.deselectSiblingItems = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["d"].bind(this);
    this.selectSiblings = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["s"].bind(this);
    this.handleFilter = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["h"].bind(this);
    this.getItemData = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["g"].bind(this);
    this.keyDownHandler = _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["k"].bind(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["i"].call(this);
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["a"].call(this);
  }
  disconnectedCallback() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["c"].call(this);
  }
  calciteListItemRemoveHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["r"].call(this, event);
  }
  calciteListItemChangeHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["b"].call(this, event);
  }
  calciteListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteListItemValueChangeHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["e"].call(this, event);
  }
  calciteListFocusOutHandler(event) {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["f"].call(this, event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpItems() {
    _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["j"].call(this, "calcite-pick-list-item");
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Returns the currently selected items */
  async getSelectedItems() {
    return this.selectedValues;
  }
  /** Sets focus on the component. */
  async setFocus(focusId) {
    return _shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["l"].call(this, focusId);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  getIconType() {
    return this.multiple ? _resources3_js__WEBPACK_IMPORTED_MODULE_1__["I"].square : _resources3_js__WEBPACK_IMPORTED_MODULE_1__["I"].circle;
  }
  render() {
    return Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_shared_list_render_js__WEBPACK_IMPORTED_MODULE_2__["L"], { onKeyDown: this.keyDownHandler, props: this });
  }
  get el() { return this; }
  static get style() { return calcitePickListCss; }
};
CalcitePickList$1 = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalcitePickList$1, [1, "calcite-pick-list", {
    "disabled": [516],
    "filterEnabled": [516, "filter-enabled"],
    "filterPlaceholder": [513, "filter-placeholder"],
    "headingLevel": [2, "heading-level"],
    "loading": [516],
    "multiple": [516],
    "selectionFollowsFocus": [4, "selection-follows-focus"],
    "selectedValues": [32],
    "dataForFilter": [32],
    "getSelectedItems": [64],
    "setFocus": [64]
  }, [[0, "calciteListItemRemove", "calciteListItemRemoveHandler"], [0, "calciteListItemChange", "calciteListItemChangeHandler"], [0, "calciteListItemPropsChange", "calciteListItemPropsChangeHandler"], [0, "calciteListItemValueChange", "calciteListItemValueChangeHandler"], [0, "focusout", "calciteListFocusOutHandler"]]]);
function defineCustomElement$1() {
  const components = ["calcite-pick-list", "calcite-filter", "calcite-icon", "calcite-input", "calcite-loader", "calcite-progress", "calcite-scrim"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-pick-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalcitePickList$1);
      }
      break;
    case "calcite-filter":
      if (!customElements.get(tagName)) {
        Object(_calcite_filter2_js__WEBPACK_IMPORTED_MODULE_4__["d"])();
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        Object(_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_5__["d"])();
      }
      break;
    case "calcite-input":
      if (!customElements.get(tagName)) {
        Object(_calcite_input2_js__WEBPACK_IMPORTED_MODULE_6__["d"])();
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        Object(_calcite_loader2_js__WEBPACK_IMPORTED_MODULE_7__["d"])();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        Object(_calcite_progress2_js__WEBPACK_IMPORTED_MODULE_8__["d"])();
      }
      break;
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        Object(_calcite_scrim2_js__WEBPACK_IMPORTED_MODULE_9__["d"])();
      }
      break;
  } });
}
defineCustomElement$1();

const CalcitePickList = CalcitePickList$1;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "i7vG":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-scrim2.js ***!
  \*********************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteScrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _calcite_loader2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcite-loader2.js */ "M9lk");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */



const CSS = {
  scrim: "scrim",
  content: "content"
};
const TEXT = {
  loading: "Loading"
};

const calciteScrimCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;position:absolute;z-index:50;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;width:100%;height:100%;top:0;right:0;bottom:0;left:0}@-webkit-keyframes calcite-scrim-fade-in{0%{--bg-opacity:0}100%{--text-opacity:1}}@keyframes calcite-scrim-fade-in{0%{--bg-opacity:0}100%{--text-opacity:1}}.scrim{display:-ms-flexbox;display:flex;position:absolute;overflow:hidden;top:0;right:0;bottom:0;left:0;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-webkit-animation:calcite-scrim-fade-in 250ms ease-in-out;animation:calcite-scrim-fade-in 250ms ease-in-out;background-color:var(--calcite-scrim-background)}.content{padding:1rem}";

let CalciteScrim = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /**
     * Determines if the component will have the loader overlay.
     * Otherwise, will render opaque disabled state.
     */
    this.loading = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, loading, intlLoading } = this;
    const hasContent = el.innerHTML.trim().length > 0;
    const loaderNode = loading ? Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-loader", { active: true, label: intlLoading }) : null;
    const contentNode = hasContent ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.content }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))) : null;
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.scrim }, loaderNode, contentNode));
  }
  get el() { return this; }
  static get style() { return calciteScrimCss; }
};
CalciteScrim = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteScrim, [1, "calcite-scrim", {
    "intlLoading": [1, "intl-loading"],
    "loading": [516]
  }]);
function defineCustomElement() {
  const components = ["calcite-scrim", "calcite-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-scrim":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteScrim);
      }
      break;
    case "calcite-loader":
      if (!customElements.get(tagName)) {
        Object(_calcite_loader2_js__WEBPACK_IMPORTED_MODULE_1__["d"])();
      }
      break;
  } });
}
defineCustomElement();




/***/ }),

/***/ "vZDh":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-input2.js ***!
  \*********************************************************************************/
/*! exports provided: C, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CalciteInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineCustomElement; });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "MQUK");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "14CA");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key.js */ "g4L+");
/* harmony import */ var _label_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label.js */ "KRpH");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "BPhx");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form.js */ "bT3h");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number.js */ "Y49D");
/* harmony import */ var _calcite_icon2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calcite-icon2.js */ "sVTk");
/* harmony import */ var _calcite_progress2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calcite-progress2.js */ "OM0F");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */










const CSS = {
  loader: "calcite-input__loader",
  clearButton: "calcite-input__clear-button",
  inputIcon: "calcite-input__icon",
  prefix: "calcite-input__prefix",
  suffix: "calcite-input__suffix",
  numberButtonWrapper: "calcite-input__number-button-wrapper",
  buttonItemHorizontal: "calcite-input__number-button-item--horizontal",
  wrapper: "calcite-input__element-wrapper",
  inputWrapper: "calcite-input__wrapper",
  actionWrapper: "calcite-input__action-wrapper",
  resizeIconWrapper: "calcite-input__resize-icon-wrapper",
  numberButtonItem: "calcite-input__number-button-item"
};
const INPUT_TYPE_ICONS = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
};
const SLOTS = {
  action: "action"
};

const calciteInputCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-input:root{--calcite-animation-timing:300ms}.calcite-animate.sc-calcite-input{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in.sc-calcite-input{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down.sc-calcite-input{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up.sc-calcite-input{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale.sc-calcite-input{-webkit-animation-name:in-scale;animation-name:in-scale}.sc-calcite-input:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-input-h{display:none}[scale=s].sc-calcite-input-h input.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size--2);line-height:1rem;padding:0.5rem;height:1.5rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input{height:1.5rem;min-height:1.5rem}[scale=s].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=s].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:1.5rem}[scale=s].sc-calcite-input-h input[type=file].sc-calcite-input{height:1.5rem}[scale=s].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:1.5rem;min-width:1.5rem}[scale=s].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;height:auto}[scale=m].sc-calcite-input-h input.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size--1);line-height:1rem;padding:0.75rem;height:2rem}[scale=m].sc-calcite-input-h textarea.sc-calcite-input{min-height:2rem}[scale=m].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=m].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:2rem}[scale=m].sc-calcite-input-h input[type=file].sc-calcite-input{height:2rem}[scale=m].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:2rem;min-width:2rem}[scale=m].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;height:auto}[scale=l].sc-calcite-input-h input.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__prefix.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__suffix.sc-calcite-input{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding:1rem;height:2.75rem}[scale=l].sc-calcite-input-h textarea.sc-calcite-input{min-height:2.75rem}[scale=l].sc-calcite-input-h .calcite-input__number-button-wrapper.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input,[scale=l].sc-calcite-input-h .calcite-input__action-wrapper.sc-calcite-input calcite-button.sc-calcite-input button.sc-calcite-input{height:2.75rem}[scale=l].sc-calcite-input-h input[type=file].sc-calcite-input{height:2.75rem}[scale=l].sc-calcite-input-h .calcite-input__clear-button.sc-calcite-input{min-height:2.75rem;min-width:2.75rem}[scale=l].sc-calcite-input-h textarea.sc-calcite-input{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;height:auto}[disabled].sc-calcite-input-h{pointer-events:none}[disabled].sc-calcite-input-h .calcite-input__wrapper.sc-calcite-input{pointer-events:none;--text-opacity:var(--calcite-ui-opacity-disabled)}[disabled].sc-calcite-input-h button.sc-calcite-input,[disabled].sc-calcite-input-h textarea.sc-calcite-input,[disabled].sc-calcite-input-h input.sc-calcite-input{pointer-events:none}[disabled].sc-calcite-input-h textarea.sc-calcite-input{resize:none}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{-webkit-transition:150ms ease-in-out, height 0s;transition:150ms ease-in-out, height 0s;-webkit-appearance:none;width:100%;border-radius:0;position:relative;max-height:100%;max-width:100%;margin:0;font-weight:var(--calcite-font-weight-normal);font-family:inherit;-ms-flex:1 1 0%;flex:1 1 0%;display:-ms-flexbox;display:flex;color:var(--calcite-ui-text-1);-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1)}.sc-calcite-input-h input[type=search].sc-calcite-input::-webkit-search-decoration{-webkit-appearance:none}.sc-calcite-input-h input.sc-calcite-input,.sc-calcite-input-h textarea.sc-calcite-input{color:var(--calcite-ui-text-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input)}.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input::placeholder,.sc-calcite-input-h input.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h input.sc-calcite-input::-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::placeholder,.sc-calcite-input-h textarea.sc-calcite-input:-ms-input-placeholder,.sc-calcite-input-h textarea.sc-calcite-input::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.sc-calcite-input-h input.sc-calcite-input:focus,.sc-calcite-input-h textarea.sc-calcite-input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}.sc-calcite-input-h input[readonly].sc-calcite-input,.sc-calcite-input-h textarea[readonly].sc-calcite-input{background-color:var(--calcite-ui-background)}.sc-calcite-input-h input[readonly].sc-calcite-input:focus,.sc-calcite-input-h textarea[readonly].sc-calcite-input:focus{color:var(--calcite-ui-text-1)}.sc-calcite-input-h calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-3)}.sc-calcite-input-h textarea.sc-calcite-input,.sc-calcite-input-h input.sc-calcite-input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.sc-calcite-input-h textarea.sc-calcite-input:focus,.sc-calcite-input-h input.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}[status=invalid].sc-calcite-input-h input.sc-calcite-input,[status=invalid].sc-calcite-input-h textarea.sc-calcite-input{border-color:var(--calcite-ui-danger)}[status=invalid].sc-calcite-input-h input.sc-calcite-input:focus,[status=invalid].sc-calcite-input-h textarea.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}[scale=s].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:0.5rem}[scale=s].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:0.5rem}[scale=m].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:0.75rem}[scale=m].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:0.75rem}[scale=l].sc-calcite-input-h .calcite-input__icon.sc-calcite-input{left:1rem}[scale=l].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__icon.sc-calcite-input{left:unset;right:1rem}[icon][scale=s].sc-calcite-input-h input.sc-calcite-input{padding-left:2rem}[icon][scale=s].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:2rem;padding-left:0.5rem}[icon][scale=m].sc-calcite-input-h input.sc-calcite-input{padding-left:2.5rem}[icon][scale=m].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:2.5rem;padding-left:0.5rem}[icon][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-left:3rem}[icon][scale=l].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{padding-right:3rem;padding-left:0.5rem}.calcite-input__element-wrapper.sc-calcite-input{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 0%;flex:1 1 0%;position:relative;-ms-flex-order:3;order:3}.calcite-input__icon.sc-calcite-input{display:block;position:absolute;pointer-events:none;z-index:10;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}input[type=text].sc-calcite-input::-ms-clear,input[type=text].sc-calcite-input::-ms-reveal{display:none;width:0;height:0}input[type=search].sc-calcite-input::-webkit-search-decoration,input[type=search].sc-calcite-input::-webkit-search-cancel-button,input[type=search].sc-calcite-input::-webkit-search-results-button,input[type=search].sc-calcite-input::-webkit-search-results-decoration,input[type=date].sc-calcite-input::-webkit-clear-button,input[type=time].sc-calcite-input::-webkit-clear-button{display:none}.calcite-input__clear-button.sc-calcite-input{pointer-events:initial;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;min-height:100%;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;-ms-flex-order:4;order:4;margin:0}.calcite-input__clear-button.sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__clear-button.sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__clear-button.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}.calcite-input__clear-button.sc-calcite-input:active calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__clear-button.sc-calcite-input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.calcite-input__clear-button.sc-calcite-input:disabled{opacity:var(--calcite-ui-opacity-disabled)}.calcite--rtl.sc-calcite-input .calcite-input__clear-button.sc-calcite-input{border-left-color:var(--calcite-ui-border-input);border-width:1px;border-right-width:0}.calcite-input__loader.sc-calcite-input{top:1px;left:1px;right:1px;display:block;pointer-events:none;position:absolute}.calcite-input__action-wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-order:7;order:7}.calcite-input__prefix.sc-calcite-input,.calcite-input__suffix.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:auto;min-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:var(--calcite-font-weight-medium);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1;word-wrap:break-word;overflow-wrap:break-word}.calcite-input__prefix.sc-calcite-input{-ms-flex-order:2;order:2;border-right-width:0}.calcite-input__suffix.sc-calcite-input{-ms-flex-order:5;order:5;border-left-width:0}.calcite--rtl.sc-calcite-input .calcite-input__prefix.sc-calcite-input{border-right-width:1px;border-left-width:0}.calcite--rtl.sc-calcite-input .calcite-input__suffix.sc-calcite-input{border-left-width:1px;border-right-width:0}[alignment=start].sc-calcite-input-h textarea.sc-calcite-input,[alignment=start].sc-calcite-input-h input.sc-calcite-input{text-align:left}[alignment=start].sc-calcite-input-h .calcite--rtl.sc-calcite-input textarea.sc-calcite-input,[alignment=start].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{text-align:right}[alignment=end].sc-calcite-input-h textarea.sc-calcite-input,[alignment=end].sc-calcite-input-h input.sc-calcite-input{text-align:right}[alignment=end].sc-calcite-input-h .calcite--rtl.sc-calcite-input textarea.sc-calcite-input,[alignment=end].sc-calcite-input-h .calcite--rtl.sc-calcite-input input.sc-calcite-input{text-align:left}.sc-calcite-input-h input[type=number].sc-calcite-input{-moz-appearance:textfield}.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-inner-spin-button,.sc-calcite-input-h input[type=number].sc-calcite-input::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.calcite-input__number-button-wrapper.sc-calcite-input{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;pointer-events:none;-ms-flex-order:6;order:6;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}[number-button-type=vertical].sc-calcite-input-h .calcite-input__wrapper.sc-calcite-input{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex}[number-button-type=vertical].sc-calcite-input-h input.sc-calcite-input,[number-button-type=vertical].sc-calcite-input-h textarea.sc-calcite-input{-ms-flex-order:2;order:2}[number-button-type=horizontal].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}[number-button-type=horizontal].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input,.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{min-height:100%;max-height:100%;-ms-flex-order:1;order:1;-ms-flex-item-align:stretch;align-self:stretch}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input calcite-icon.sc-calcite-input,.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input calcite-icon.sc-calcite-input{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{-ms-flex-order:5;order:5}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input:hover{background-color:var(--calcite-ui-foreground-2)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=up].sc-calcite-input:hover calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite--rtl.sc-calcite-input .calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=down].sc-calcite-input{border-width:1px;border-left-width:0;border-color:var(--calcite-ui-border-input)}.calcite--rtl.sc-calcite-input .calcite-input__number-button-item.calcite-input__number-button-item--horizontal[data-adjustment=up].sc-calcite-input{border-width:1px;border-right-width:0;border-color:var(--calcite-ui-border-input)}[number-button-type=vertical].sc-calcite-input-h .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input,[number-button-type=vertical].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item[data-adjustment=down].sc-calcite-input{border-top-width:0}.calcite-input__number-button-item.sc-calcite-input{max-height:50%;min-height:50%;pointer-events:initial;display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;padding-top:0;padding-bottom:0;padding-left:0.5rem;padding-right:0.5rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;margin:0}.calcite-input__number-button-item.sc-calcite-input calcite-icon.sc-calcite-input{pointer-events:none;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input__number-button-item.sc-calcite-input:focus{background-color:var(--calcite-ui-foreground-2)}.calcite-input__number-button-item.sc-calcite-input:focus calcite-icon.sc-calcite-input{color:var(--calcite-ui-text-1)}.calcite-input__number-button-item.sc-calcite-input:active{background-color:var(--calcite-ui-foreground-3)}[number-button-type=vertical].sc-calcite-input-h .calcite--rtl.sc-calcite-input .calcite-input__number-button-item.sc-calcite-input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.calcite-input__wrapper.sc-calcite-input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;position:relative}.sc-calcite-input-h input.sc-calcite-input::-webkit-calendar-picker-indicator{display:none}.sc-calcite-input-h input[type=date].sc-calcite-input::-webkit-input-placeholder{visibility:hidden !important}.sc-calcite-input-h textarea.sc-calcite-input::-webkit-resizer{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;right:0;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.calcite-input__resize-icon-wrapper.sc-calcite-input{display:none}}.calcite-input__resize-icon-wrapper.sc-calcite-input{bottom:2px;right:2px;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:10;pointer-events:none;width:0.75rem;height:0.75rem}.calcite-input__resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:0.25rem;right:0.25rem;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.calcite--rtl.sc-calcite-input textarea.sc-calcite-input::-webkit-resizer{right:unset;left:0}.calcite--rtl.sc-calcite-input .calcite-input__resize-icon-wrapper.sc-calcite-input{left:2px;right:unset}.calcite--rtl.sc-calcite-input .calcite-input__resize-icon-wrapper.sc-calcite-input calcite-icon.sc-calcite-input{bottom:0.25rem;right:0.25rem;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[type=color].sc-calcite-input-h input.sc-calcite-input{padding:0.25rem}[type=file].sc-calcite-input-h input.sc-calcite-input{background-color:var(--calcite-ui-foreground-1);cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);text-align:center}[type=file][scale=s].sc-calcite-input-h input.sc-calcite-input{padding-top:1px;padding-bottom:1px;padding-left:0.5rem;padding-right:0.5rem}[type=file][scale=m].sc-calcite-input-h input.sc-calcite-input{padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem}[type=file][scale=l].sc-calcite-input-h input.sc-calcite-input{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}.no-bottom-border.sc-calcite-input-h input.sc-calcite-input.sc-calcite-input{border-bottom-width:0}.border-t-color-1.sc-calcite-input-h input.sc-calcite-input.sc-calcite-input{border-top-color:var(--calcite-ui-border-1)}";

let CalciteInput = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.calciteInputFocus = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteInputFocus", 7);
    this.calciteInputBlur = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteInputBlur", 7);
    this.calciteInputInput = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteInputInput", 7);
    this.calciteInputChange = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["createEvent"])(this, "calciteInputChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the alignment of the value of the input */
    this.alignment = "start";
    /** should the input autofocus */
    this.autofocus = false;
    /** optionally display a clear button that displays when field has a value
     * shows by default for search, time, date
     * will not display for type="textarea" */
    this.clearable = false;
    /** is the input disabled  */
    this.disabled = false;
    /** for number values, displays the locale's group separator */
    this.groupSeparator = false;
    /**
     * string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = _dom_js__WEBPACK_IMPORTED_MODULE_1__["T"].loading;
    /** flip the icon in rtl */
    this.iconFlipRtl = false;
    /** specify if the input is in loading state */
    this.loading = false;
    /** BCP 47 language tag for desired language and country format */
    this.locale = document.documentElement.lang || "en";
    /**
     * Toggles locale formatting for numbers.
     * @internal
     */
    this.localeFormat = false;
    /** specify the placement of the number buttons */
    this.numberButtonType = "vertical";
    /** When true, a field cannot be modified. */
    this.readOnly = false;
    /** is the input required */
    this.required = false;
    /** specify the scale of the input, defaults to m */
    this.scale = "m";
    /** specify the status of the input field, determines message and icons */
    this.status = "idle";
    /**
     * specify the input type
     *
     * Note that the following types add type-specific icons by default: `date`, `email`, `password`, `search`, `tel`, `time`
     */
    this.type = "text";
    /** keep track of the rendered child type */
    this.childElType = "input";
    this.clearInputValue = (nativeEvent) => {
      this.setValue(null, nativeEvent, true);
    };
    this.inputBlurHandler = () => {
      if (this.type === "number") {
        this.setLocalizedValue(this.value);
      }
      this.calciteInputBlur.emit({
        element: this.childEl,
        value: this.value
      });
      if (this.preFocusValue !== this.value) {
        this.calciteInputChange.emit();
      }
    };
    this.inputFocusHandler = (event) => {
      if (event.target !== this.slottedActionEl) {
        this.setFocus();
      }
      this.calciteInputFocus.emit({
        element: this.childEl,
        value: this.value
      });
      this.preFocusValue = this.value;
    };
    this.inputInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue(nativeEvent.target.value, nativeEvent);
    };
    this.inputKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.calciteInputChange.emit();
      }
    };
    this.inputNumberInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      const value = nativeEvent.target.value;
      const delocalizedValue = Object(_locale_js__WEBPACK_IMPORTED_MODULE_4__["d"])(value, this.locale);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!Object(_number_js__WEBPACK_IMPORTED_MODULE_6__["i"])(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setValue(Object(_number_js__WEBPACK_IMPORTED_MODULE_6__["p"])(delocalizedValue), nativeEvent);
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setValue(Object(_locale_js__WEBPACK_IMPORTED_MODULE_4__["d"])(value, this.locale), nativeEvent);
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.type !== "number" || this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "ArrowUp") {
        this.nudgeNumberValue("up", event);
        return;
      }
      if (event.key === "ArrowDown") {
        this.nudgeNumberValue("down", event);
        return;
      }
      const supportedKeys = [
        ..._key_js__WEBPACK_IMPORTED_MODULE_2__["n"],
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab",
        "-"
      ];
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      const isShiftTabEvent = event.shiftKey && event.key === "Tab";
      if (supportedKeys.includes(event.key) && (!event.shiftKey || isShiftTabEvent)) {
        if (event.key === "Enter") {
          this.calciteInputChange.emit();
        }
        return;
      }
      const decimalSeparator = Object(_locale_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.locale);
      if (event.key === decimalSeparator) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(decimalSeparator) === -1) {
          return;
        }
      }
      event.preventDefault();
    };
    this.nudgeNumberValue = (direction, nativeEvent) => {
      if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
        return;
      }
      const inputMax = this.maxString ? parseFloat(this.maxString) : null;
      const inputMin = this.minString ? parseFloat(this.minString) : null;
      const valueNudgeDelayInMs = 500;
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      this.nudgeNumberValueIntervalId = setInterval(() => {
        this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      }, valueNudgeDelayInMs);
    };
    this.numberButtonMouseUpAndMouseOutHandler = () => {
      clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.numberButtonMouseDownHandler = (event) => {
      // todo, when dropping ie11 support, refactor to use stepup/stepdown
      // prevent blur and re-focus of input on mousedown
      event.preventDefault();
      const direction = event.target.dataset.adjustment;
      this.nudgeNumberValue(direction, event);
    };
    this.reset = (nativeEvent) => {
      if (this.type === "number") {
        nativeEvent.preventDefault();
      }
      this.setValue(this.defaultValue, nativeEvent);
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setLocalizedValue = (value) => {
      this.localizedValue = Object(_locale_js__WEBPACK_IMPORTED_MODULE_4__["l"])(value, this.locale, this.groupSeparator);
    };
    this.setValue = (value, nativeEvent, committing = false) => {
      const previousValue = this.value;
      this.value = this.type === "number" ? Object(_number_js__WEBPACK_IMPORTED_MODULE_6__["s"])(value) : value;
      if (this.type === "number") {
        this.setLocalizedValue(this.value);
      }
      if (nativeEvent) {
        if (this.type === "number" && (value === null || value === void 0 ? void 0 : value.endsWith("."))) {
          return;
        }
        const calciteInputInputEvent = this.calciteInputInput.emit({
          element: this.childEl,
          nativeEvent,
          value
        });
        if (calciteInputInputEvent.defaultPrevented) {
          this.value = previousValue;
          this.setLocalizedValue(previousValue);
        }
        else if (committing) {
          this.calciteInputChange.emit();
        }
      }
    };
    this.inputKeyUpHandler = () => {
      clearInterval(this.nudgeNumberValueIntervalId);
    };
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    var _a;
    this.maxString = ((_a = this.max) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    var _a;
    this.minString = ((_a = this.min) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  valueWatcher(newValue) {
    if (this.type === "number" &&
      this.localizedValue !== Object(_locale_js__WEBPACK_IMPORTED_MODULE_4__["l"])(newValue, this.locale)) {
      this.setLocalizedValue(newValue);
    }
    else if (this.childEl && this.childEl.value !== newValue) {
      this.childEl.value = newValue;
    }
  }
  updateRequestedIcon() {
    this.requestedIcon = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["s"])(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  get isClearable() {
    var _a;
    return !this.isTextarea && (this.clearable || this.type === "search") && ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.form = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.el, "form");
    (_a = this.form) === null || _a === void 0 ? void 0 : _a.addEventListener("reset", this.reset);
    this.scale = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el, "scale", this.scale);
    this.status = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el, "status", this.status);
    if (this.type === "number" && this.value) {
      if (Object(_number_js__WEBPACK_IMPORTED_MODULE_6__["i"])(this.value)) {
        this.localizedValue = Object(_locale_js__WEBPACK_IMPORTED_MODULE_4__["l"])(this.value, this.locale, this.groupSeparator);
      }
      else {
        this.value = undefined;
      }
    }
    Object(_label_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.form) === null || _a === void 0 ? void 0 : _a.removeEventListener("reset", this.reset);
    Object(_label_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this);
  }
  componentWillLoad() {
    var _a, _b;
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.defaultValue = this.value;
    this.maxString = (_a = this.max) === null || _a === void 0 ? void 0 : _a.toString();
    this.minString = (_b = this.min) === null || _b === void 0 ? void 0 : _b.toString();
    this.requestedIcon = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["s"])(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  componentDidLoad() {
    this.slottedActionEl = this.el.querySelector("[slot=action]");
    this.setDisabledAction();
    if (this.type === "number" && this.childEl) {
      this.childEl.style.cssText = _form_js__WEBPACK_IMPORTED_MODULE_5__["h"];
    }
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (this.type === "number" && property === "value" && newValue && !Object(_number_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newValue)) {
      this.value = oldValue;
      return false;
    }
    return true;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    if (this.readOnly || this.disabled) {
      return;
    }
    if (this.isClearable && Object(_key_js__WEBPACK_IMPORTED_MODULE_2__["g"])(event.key) === "Escape") {
      this.clearInputValue(event);
      event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a, _b;
    if (this.type === "number") {
      (_a = this.childNumberEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    else {
      (_b = this.childEl) === null || _b === void 0 ? void 0 : _b.focus();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const value = this.value;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
    const inputVal = value && value !== "" ? parseFloat(value) : 0;
    let newValue = value;
    if (direction === "up" && ((!inputMax && inputMax !== 0) || inputVal < inputMax)) {
      newValue = (inputVal + inputStep).toString();
    }
    if (direction === "down" && ((!inputMin && inputMin !== 0) || inputVal > inputMin)) {
      newValue = (inputVal - inputStep).toString();
    }
    this.setValue(newValue, nativeEvent, true);
  }
  setDisabledAction() {
    if (!this.slottedActionEl) {
      return;
    }
    const slottedActionEl = this.slottedActionEl;
    this.disabled
      ? slottedActionEl.setAttribute("disabled", "")
      : slottedActionEl.removeAttribute("disabled");
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.el);
    const loader = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.loader }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-progress", { label: this.intlLoading, type: "indeterminate" })));
    const inputClearButton = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: this.disabled ? -1 : 0, type: "button" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: "x", scale: "s" })));
    const iconEl = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { class: CSS.inputIcon, dir: dir, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: "s" }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onMouseDown: this.numberButtonMouseDownHandler, onMouseOut: this.numberButtonMouseUpAndMouseOutHandler, onMouseUp: this.numberButtonMouseUpAndMouseOutHandler, tabIndex: -1, type: "button" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: "chevron-up", scale: "s" })));
    const numberButtonsHorizontalDown = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onMouseDown: this.numberButtonMouseDownHandler, onMouseOut: this.numberButtonMouseUpAndMouseOutHandler, onMouseUp: this.numberButtonMouseUpAndMouseOutHandler, tabIndex: -1, type: "button" }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: "chevron-down", scale: "s" })));
    const numberButtonsVertical = (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.suffix }, this.suffixText);
    const localeNumberInput = this.type === "number" ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { "aria-label": Object(_label_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this), autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.el.enterKeyHint, inputMode: this.el.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildNumberElRef, tabIndex: this.disabled ? -1 : 0, type: "text", value: this.localizedValue })) : null;
    const childEl = [
      Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(this.childElType, { "aria-label": Object(_label_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this), autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.el.enterKeyHint, inputMode: this.el.inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, name: this.name, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildElRef, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || this.type === "number" ? -1 : null, type: this.type, value: this.value }),
      this.isTextarea ? (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.resizeIconWrapper }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("calcite-icon", { icon: "chevron-down", scale: "s" }))) : null
    ];
    return (Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["Host"], { onClick: this.inputFocusHandler }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { [CSS.inputWrapper]: true, [_dom_js__WEBPACK_IMPORTED_MODULE_1__["C"].rtl]: dir === "rtl" }, dir: dir }, this.type === "number" && this.numberButtonType === "horizontal"
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: CSS.actionWrapper }, Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical"
      ? numberButtonsVertical
      : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal"
      ? numberButtonsHorizontalUp
      : null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "max": ["maxWatcher"],
    "min": ["minWatcher"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "type": ["updateRequestedIcon"]
  }; }
  static get style() { return calciteInputCss; }
};
CalciteInput = /*@__PURE__*/ Object(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__["proxyCustomElement"])(CalciteInput, [6, "calcite-input", {
    "alignment": [513],
    "autofocus": [4],
    "clearable": [516],
    "disabled": [516],
    "groupSeparator": [4, "group-separator"],
    "icon": [520],
    "intlLoading": [1, "intl-loading"],
    "iconFlipRtl": [516, "icon-flip-rtl"],
    "label": [1],
    "loading": [516],
    "locale": [1],
    "localeFormat": [4, "locale-format"],
    "max": [514],
    "min": [514],
    "maxlength": [514],
    "maxLength": [514, "max-length"],
    "minLength": [514, "min-length"],
    "name": [513],
    "numberButtonType": [513, "number-button-type"],
    "placeholder": [1],
    "prefixText": [1, "prefix-text"],
    "readOnly": [4, "read-only"],
    "required": [4],
    "scale": [1537],
    "status": [1537],
    "step": [520],
    "suffixText": [1, "suffix-text"],
    "type": [513],
    "value": [1025],
    "localizedValue": [32],
    "setFocus": [64]
  }, [[0, "keydown", "keyDownHandler"]]]);
function defineCustomElement() {
  const components = ["calcite-input", "calcite-icon", "calcite-progress"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalciteInput);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        Object(_calcite_icon2_js__WEBPACK_IMPORTED_MODULE_7__["d"])();
      }
      break;
    case "calcite-progress":
      if (!customElements.get(tagName)) {
        Object(_calcite_progress2_js__WEBPACK_IMPORTED_MODULE_8__["d"])();
      }
      break;
  } });
}
defineCustomElement();




/***/ })

}]);
//# sourceMappingURL=esri-calcite-components-dist-components-calcite-pick-list-js.js.map