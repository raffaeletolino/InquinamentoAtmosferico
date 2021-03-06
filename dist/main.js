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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n\r\nif (navigator.geolocation) {\r\n  navigator.geolocation.getCurrentPosition(show_map);\r\n}else{\r\n  alert('La geo-localizzazione NON è possibile');\r\n}\r\n\r\nfunction show_map(positions) {\r\n  // identifico il punto in cui è stato individuato l'utente\r\n  var dot = new google.maps.LatLng(positions.coords.latitude, positions.coords.longitude),\r\n  // definisco una serie di opzioni\r\n  option = {\r\n    zoomControl: true,\r\n    zoom: 12,\r\n    center: dot,\r\n    mapTypeId: google.maps.MapTypeId.ROADMAP\r\n  },\r\n  // definisco l'elemento della pagina che ospiterà la mappa\r\n  container = document.getElementById(\"map\"),\r\n  // creo la mappa\r\n  map = new google.maps.Map(container, option),\r\n  // imposto un marker\r\n  marker = new google.maps.Marker({\r\n    position: dot,\r\n    map: map,\r\n    title: \"Tu sei qui!\"\r\n  });\r\n}\r\n\r\nwindow.verify = function(){\r\n  let city = document.getElementById(\"idname\").value;\r\n  const air_key = \"12ad5b2b9362b763ca59255e4a15ae41a15107d9\";;\r\n  const air = {};\r\n  getData();\r\n\r\n  function getData() {\r\n    let api = 'https://api.waqi.info/feed/'+city+'/?token='+air_key;\r\n    fetch(api)\r\n      .then(function(response) {\r\n        let data = response.json();\r\n        return data;\r\n      })\r\n      .then(function(data) {\r\n        air.index = data.data.aqi;\r\n        if(air.index == undefined){\r\n          document.getElementById(\"city\").innerHTML = city + ' AQI:';\r\n          document.getElementById(\"indexAir\").innerHTML = \"-\";\r\n          document.getElementById(\"Risk\").innerHTML = '';\r\n          document.getElementById(\"color\").style.backgroundColor = \"grey\";\r\n          document.getElementById(\"information\").innerHTML = \"Non è stato possibile rilevare l'inquinamento dell'aria.Possibile inserimento Città sbagliata. Possibile mancato valore dell'inquinamento\";\r\n        }\r\n        air.city = data.data.city.name;\r\n\r\n      })\r\n      .then(function() {\r\n        showData();\r\n      })\r\n  }\r\n\r\n  // DISPLAY INFORMATIONS\r\n  function showData() {\r\n    document.getElementById(\"city\").innerHTML = air.city + ' AQI:';\r\n    document.getElementById(\"indexAir\").innerHTML = air.index;\r\n    if(air.index>0 && air.index<50){\r\n        document.getElementById(\"Risk\").innerHTML = 'Buono';\r\n        document.getElementById(\"color\").style.backgroundColor = \"#009966\";\r\n        document.getElementById(\"information\").innerHTML = \"La qualità dell'aria è considerata soddisfacente e l'inquinamento atmosferico presenta pochi o nessun rischio\";\r\n      }\r\n    if(air.index>50 && air.index<100){\r\n      document.getElementById(\"Risk\").innerHTML = 'Moderato';\r\n      document.getElementById(\"color\").style.backgroundColor = \"#ffde33\";\r\n      document.getElementById(\"information\").innerHTML = \"La qualità dell'aria è accettabile; Potrebbe esserci un moderato problema di salute per un numero molto limitato di persone che sono insolitamente sensibili all'inquinamento atmosferico. \";\r\n    }\r\n    if(air.index>100 && air.index<150){\r\n      document.getElementById(\"Risk\").innerHTML = 'Malsano per i gruppi sensibili';\r\n      document.getElementById(\"color\").style.backgroundColor = \"#ff9933\";\r\n      document.getElementById(\"information\").innerHTML = \"I membri di gruppi sensibili possono subire effetti sulla salute. È improbabile che il pubblico in generale ne risenta\";\r\n    }\r\n    if(air.index>150 && air.index<200){\r\n      document.getElementById(\"Risk\").innerHTML = 'Malsano';\r\n      document.getElementById(\"color\").style.backgroundColor = \"#cc0033\";\r\n      document.getElementById(\"information\").innerHTML = \"Tutti possono iniziare ad avere effetti sulla salute; i membri di gruppi sensibili possono subire effetti sulla salute più gravi\";\r\n    }\r\n    if(air.index>200 && air.index<300){\r\n      document.getElementById(\"Risk\").innerHTML = 'Molto malsano';\r\n      document.getElementById(\"color\").style.backgroundColor = \"#660099\";\r\n      document.getElementById(\"information\").innerHTML = \"Avvertenze per la salute delle condizioni di emergenza. L'intera popolazione ha maggiori probabilità di essere colpita\";\r\n    }\r\n    if(air.index>300){\r\n      document.getElementById(\"Risk\").innerHTML = 'Rischioso';\r\n      document.getElementById(\"color\").style.backgroundColor = \"#7e0023\";\r\n      document.getElementById(\"information\").innerHTML = \"Allerta per la salute: tutti possono avere effetti sulla salute più gravi\";\r\n    }\r\n  }\r\n  }\r\n\n\n//# sourceURL=webpack://webpack/./js/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n  margin: 0 auto;\\r\\n  font-size: 16px;\\r\\n  max-width: 1350px;\\r\\n  background: linear-gradient(0deg, rgba(0,0,0,.6), rgba(0,0,0, 0.3));\\r\\n\\r\\n  }\\r\\n.column {\\r\\n float: left;\\r\\n width: 70%;\\r\\n}\\r\\n.columns img{\\r\\n  margin-top: 20px;\\r\\n  width: 364px;\\r\\n\\r\\n}\\r\\n.Air{\\r\\n  margin-left: 30px;\\r\\n}\\r\\n#city{\\r\\n  font-size: 20px;\\r\\n}\\r\\n#indexAir{\\r\\n  font-size: 50px;\\r\\n}\\r\\n#Risk{\\r\\n  font-size: 25px;\\r\\n}\\r\\n.header{\\r\\n  background: #4D4D4D;\\r\\n  padding: 5px 2px;\\r\\n}\\r\\n@media (max-width: 768px) {\\r\\n  .header{\\r\\n    margin: 0 30px;\\r\\n  }\\r\\n}\\r\\nh2 {color:white;}\\r\\n\\r\\n.insert{\\r\\n  margin-top: 30px;\\r\\n  margin-left: 30px;\\r\\n  }\\r\\n\\r\\n.aqi{\\r\\n  display:block;\\r\\n  width:300px;\\r\\n  height:250px;\\r\\n  margin-left: 30%;\\r\\n  margin-top: 70px;\\r\\n}\\r\\n@media (max-width: 768px) {\\r\\n  .aqi{\\r\\n    display:block;\\r\\n    width:200px;\\r\\n    height:150px;\\r\\n    margin-left: 10%;\\r\\n    margin-top: 70px;\\r\\n  }\\r\\n  #city{\\r\\n    font-size: 18px;\\r\\n  }\\r\\n  #indexAir{\\r\\n    font-size: 20px;\\r\\n  }\\r\\n  #Risk{\\r\\n    font-size: 19px;\\r\\n  }\\r\\n}\\r\\n\\r\\n .info{\\r\\n   display:block;\\r\\n   width:250px;\\r\\n   height:150px;\\r\\n   margin-left: 30%;\\r\\n\\r\\n }\\r\\n @media (max-width: 768px) {\\r\\n   .info{\\r\\n     margin-left: 10%;\\r\\n   }\\r\\n }\\r\\n #map {\\r\\n   width: 364px;\\r\\n   height: 250px;\\r\\n   color:white;\\r\\n }\\r\\n @media (max-width: 768px) {\\r\\n   #map {\\r\\n     width: 300px;\\r\\n     height: 200px;\\r\\n     margin: 30px 20px;\\r\\n     margin-bottom: 100px;\\r\\n   }\\r\\n }\\r\\n\\r\\n .footer{\\r\\n   margin-top: 100px;\\r\\n   background: #4D4D4D;\\r\\n   padding: 5px 0;\\r\\n   color:white;\\r\\n }\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://webpack/./css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;