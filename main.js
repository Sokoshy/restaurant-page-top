/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ============================================================\n   LA TAVOLA — editorial trattoria\n   Paper, ink, terracotta. The type does the heavy lifting.\n   ============================================================ */\n\n:root {\n  --paper: #f4eee2;\n  --paper-card: #fbf7ef;\n  --ink: #241a11;\n  --ink-soft: #5f5142;\n  --accent: #a23921;\n  --hairline: rgba(36, 26, 17, 0.16);\n  --shadow: 0 30px 60px -30px rgba(60, 36, 20, 0.35);\n  --font-display: \"Fraunces\", Georgia, \"Times New Roman\", serif;\n  --font-body: \"Karla\", system-ui, sans-serif;\n}\n\n/* ---------- base ---------- */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: var(--paper);\n  color: var(--ink-soft);\n  font-family: var(--font-body);\n  font-size: 1.0625rem;\n  line-height: 1.65;\n  -webkit-font-smoothing: antialiased;\n}\n\n::selection {\n  background: var(--accent);\n  color: var(--paper);\n}\n\n/* ---------- header ---------- */\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1.5rem clamp(1.25rem, 4vw, 3.5rem);\n  border-bottom: 1px solid var(--hairline);\n}\n\n.brand {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n\n.brand-name {\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: 1.65rem;\n  letter-spacing: 0.01em;\n  color: var(--ink);\n}\n\n.brand-tag {\n  margin-top: 0.4rem;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.32em;\n  text-transform: uppercase;\n  color: var(--accent);\n}\n\nnav {\n  display: flex;\n  flex-wrap: wrap;\n  gap: clamp(1.25rem, 3vw, 2.25rem);\n}\n\nnav button {\n  position: relative;\n  padding: 0.45rem 0;\n  border: 0;\n  background: none;\n  font-family: var(--font-body);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--ink-soft);\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n\n/* sliding underline, shared by hover and active */\nnav button::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1.5px;\n  background: var(--accent);\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);\n}\n\nnav button:hover,\nnav button.active {\n  color: var(--accent);\n}\n\nnav button:hover::after,\nnav button.active::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\nnav button:focus-visible {\n  outline: 2px solid var(--accent);\n  outline-offset: 4px;\n}\n\n/* ---------- content shell ---------- */\n\n#content {\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: clamp(2.75rem, 6vw, 5.5rem) clamp(1.25rem, 4vw, 2.5rem)\n    clamp(4rem, 8vw, 7rem);\n}\n\n#title {\n  margin: 0 0 1.5rem;\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: clamp(2.75rem, 6.5vw, 5.25rem);\n  line-height: 0.98;\n  letter-spacing: -0.022em;\n  color: var(--ink);\n  text-wrap: balance;\n}\n\n/* eyebrow label above each title, pure CSS */\n#title::before {\n  display: block;\n  margin-bottom: 1.15rem;\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--accent);\n}\n\n.homePage #title::before {\n  content: \"Trattoria · Firenze\";\n}\n\n.menuPage #title::before {\n  content: \"La carta · menu del giorno\";\n}\n\n.aboutPage #title::before {\n  content: \"La nostra storia\";\n}\n\n.menuPage #title,\n.aboutPage #title {\n  text-align: center;\n}\n\n/* pages fade in on every tab switch */\n@keyframes fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fade-up-photo {\n  from {\n    opacity: 0;\n    transform: translateY(14px) rotate(-1.25deg);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) rotate(-1.25deg);\n  }\n}\n\n/* fill 'backwards' so the hover transform below still wins after the run */\n.homePage > *,\n.menuPage > *,\n.aboutPage > * {\n  animation: fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) backwards;\n}\n\n.homePage > *:nth-child(2),\n.menuPage > *:nth-child(2),\n.aboutPage > *:nth-child(2) {\n  animation-delay: 0.08s;\n}\n\n.homePage > *:nth-child(3),\n.menuPage > *:nth-child(3),\n.aboutPage > *:nth-child(3) {\n  animation-delay: 0.16s;\n}\n\n.homePage > *:nth-child(4),\n.menuPage > *:nth-child(4) {\n  animation-delay: 0.24s;\n}\n\n/* ---------- home : editorial hero ---------- */\n\n.homePage {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: clamp(2rem, 5vw, 4.5rem);\n  align-items: center;\n}\n\n.homePage .img {\n  grid-column: 2;\n  grid-row: 1 / 4;\n  width: 100%;\n  aspect-ratio: 4 / 5;\n  object-fit: cover;\n  border: 10px solid var(--paper-card);\n  box-shadow: var(--shadow);\n  transform: rotate(-1.25deg);\n  animation-name: fade-up-photo;\n  transition: transform 0.6s ease;\n}\n\n.homePage .img:hover {\n  transform: rotate(0deg) scale(1.01);\n}\n\n.tagline {\n  margin: 0 0 1.75rem;\n  font-family: var(--font-display);\n  font-style: italic;\n  font-size: clamp(1.15rem, 2vw, 1.4rem);\n  line-height: 1.45;\n  color: var(--accent);\n}\n\n.welcome-text {\n  max-width: 34em;\n  margin: 0;\n}\n\n/* drop cap on the lead paragraph */\n.welcome-text::first-letter {\n  float: left;\n  margin: 0.08em 0.12em 0 0;\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: 3.25em;\n  line-height: 0.78;\n  color: var(--accent);\n}\n\n/* ---------- menu : the carta ---------- */\n\n.menuPage {\n  counter-reset: dish;\n  max-width: 760px;\n  margin-inline: auto;\n}\n\n.menuPage h2 {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  margin: 3.25rem 0 1.25rem;\n  font-family: var(--font-body);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: var(--ink-soft);\n}\n\n.menuPage h2::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: var(--hairline);\n}\n\n.menuPage p {\n  display: flex;\n  align-items: baseline;\n  gap: 1.25rem;\n  margin: 0;\n  padding: 0.75rem 0.25rem;\n  border-bottom: 1px dotted var(--hairline);\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  color: var(--ink);\n  transition: color 0.3s ease, padding-left 0.3s ease;\n}\n\n/* numbered like a real menu card */\n.menuPage p::before {\n  content: counter(dish, decimal-leading-zero);\n  counter-increment: dish;\n  font-family: var(--font-body);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  color: var(--accent);\n}\n\n.menuPage p:hover {\n  padding-left: 0.75rem;\n  color: var(--accent);\n}\n\n/* ---------- about ---------- */\n\n.aboutPage {\n  max-width: 42rem;\n  margin-inline: auto;\n}\n\n.aboutPage .paragraphe:first-of-type {\n  font-family: var(--font-display);\n  font-style: italic;\n  font-size: clamp(1.35rem, 2.4vw, 1.75rem);\n  line-height: 1.5;\n  color: var(--ink);\n}\n\n.aboutPage .paragraphe {\n  margin: 0 0 1.5rem;\n}\n\n/* ---------- footer ---------- */\n\nfooter {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 1rem 2.5rem;\n  padding: 2.25rem clamp(1.25rem, 4vw, 3.5rem) 2.75rem;\n  border-top: 1px solid var(--hairline);\n  font-size: 0.72rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n\n/* ---------- responsive ---------- */\n\n@media (max-width: 820px) {\n  header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1.25rem;\n  }\n\n  .homePage {\n    grid-template-columns: 1fr;\n  }\n\n  .homePage .img {\n    grid-column: 1;\n    grid-row: auto;\n    aspect-ratio: 16 / 11;\n    transform: rotate(0deg);\n    animation-name: fade-up;\n  }\n\n  .homePage .img:hover {\n    transform: none;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .homePage > *,\n  .menuPage > *,\n  .aboutPage > * {\n    animation: none;\n  }\n\n  nav button::after,\n  .menuPage p,\n  .homePage .img {\n    transition: none;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-top/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/img/spaghetti-meatballs.jpg"
/*!*****************************************!*\
  !*** ./src/img/spaghetti-meatballs.jpg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f441855d7072094db6e4.jpg\";\n\n//# sourceURL=webpack://restaurant-page-top/./src/img/spaghetti-meatballs.jpg?\n}");

/***/ },

/***/ "./src/aboutpage.js"
/*!**************************!*\
  !*** ./src/aboutpage.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutpage: () => (/* binding */ loadAboutpage)\n/* harmony export */ });\nfunction loadAboutpage() {\n  const content = document.querySelector(\"#content\");\n  const page = document.createElement(\"div\");\n\n  page.classList.add(\"aboutPage\");\n\n  const title = document.createElement(\"h1\");\n  title.id = \"title\";\n  title.textContent = \"About La Tavola\";\n\n  const paragraphe1 = document.createElement(\"p\");\n  paragraphe1.classList.add(\"paragraphe\");\n  paragraphe1.textContent = \"At Tavola, we believe that great food brings people together. Our kitchen is inspired by traditional Italian recipes, using fresh ingredients and simple, authentic flavors.\";\n\n  const paragraphe2 = document.createElement(\"p\");\n  paragraphe2.classList.add(\"paragraphe\");\n  paragraphe2.textContent = \"From homemade pasta to classic Italian desserts, every dish is prepared with care and served with the warmth of a traditional Italian table.\";\n\n  page.appendChild(title);\n  page.appendChild(paragraphe1);\n  page.appendChild(paragraphe2);\n  content.appendChild(page);\n}\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/aboutpage.js?\n}");

/***/ },

/***/ "./src/homepage.js"
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomepage: () => (/* binding */ loadHomepage)\n/* harmony export */ });\n/* harmony import */ var _img_spaghetti_meatballs_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/spaghetti-meatballs.jpg */ \"./src/img/spaghetti-meatballs.jpg\");\n\nfunction loadHomepage() {\n  const content = document.querySelector(\"#content\");\n  const page = document.createElement(\"div\");\n\n  page.classList.add(\"homePage\");\n\n  const title = document.createElement(\"h1\");\n  title.id = \"title\";\n  title.textContent = \"La Tavola the best restaurant in the world\";\n\n  const tagline = document.createElement(\"p\");\n  tagline.classList.add(\"tagline\");\n  tagline.textContent = \"Authentic Italian cuisine, made with love.\";\n\n  const img = document.createElement(\"img\");\n  img.classList.add(\"img\");\n  img.src = _img_spaghetti_meatballs_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  img.alt = \"spaghetti meatballs\";\n\n  const welcomeTxt = document.createElement(\"p\");\n  welcomeTxt.classList.add(\"welcome-text\");\n  welcomeTxt.textContent = \"Welcome to Tavola, where traditional Italian recipes meet fresh ingredients and a warm, welcoming atmosphere. Enjoy homemade pasta, delicious meatballs, and the authentic flavors of Italy.\";\n\n  page.appendChild(title);\n  page.appendChild(tagline);\n  page.appendChild(img);\n  page.appendChild(welcomeTxt);\n  content.appendChild(page);\n}\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/homepage.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _aboutpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutpage.js */ \"./src/aboutpage.js\");\n/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menupage.js */ \"./src/menupage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst home = document.querySelector(\"#home\");\nconst menu = document.querySelector(\"#menu\");\nconst about = document.querySelector(\"#about\");\nconst content = document.querySelector(\"#content\");\n\nconst tabs = [\n  { button: home,  load: _homepage_js__WEBPACK_IMPORTED_MODULE_0__.loadHomepage },   // la fonction SANS les ()\n  { button: menu,  load: _menupage_js__WEBPACK_IMPORTED_MODULE_2__.loadMenupage },\n  { button: about, load: _aboutpage_js__WEBPACK_IMPORTED_MODULE_1__.loadAboutpage },\n];\n\ntabs.forEach((tab) => {\n  tab.button.addEventListener(\"click\", () => {\n    tabs.forEach((t) => t.button.classList.remove(\"active\"));\n    tab.button.classList.add(\"active\");\n    content.textContent = \"\";\n    tab.load();\n  });\n});\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/index.js?\n}");

/***/ },

/***/ "./src/menupage.js"
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenupage: () => (/* binding */ loadMenupage)\n/* harmony export */ });\nfunction loadMenupage() {\n  const content = document.querySelector(\"#content\");\n  const page = document.createElement(\"div\");\n\n  page.classList.add(\"menuPage\");\n\n  const title = document.createElement(\"h1\");\n  title.id = \"title\";\n  title.textContent = \"Our Menu\";\n  page.appendChild(title);\n\n  const menu = {\n    Pasta: [\n      \"Spaghetti & Meatballs\",\n      \"Fettuccine Alfredo\",\n      \"Penne Arrabbiata\"\n    ],\n    \"Main Courses\": [\n      \"Chicken Parmigiana\",\n      \"Lasagna della Casa\",\n      \"Eggplant Parmigiana\"\n    ],\n    Desserts: [\n      \"Classic Tiramisu\",\n      \"Panna Cotta\",\n      \"Cannoli\"\n    ]\n  };\n\n  for (const category in menu) {\n    const dishTitle = document.createElement(\"h2\");\n    dishTitle.textContent = category;\n    page.appendChild(dishTitle);\n\n    menu[category].forEach((dish) => {\n      const item = document.createElement(\"p\");\n      item.textContent = dish;\n      page.appendChild(item);\n    });\n  }\n\n  content.appendChild(page);\n}\n\n\n//# sourceURL=webpack://restaurant-page-top/./src/menupage.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;