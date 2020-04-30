/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base/typography.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base/typography.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".font-size-xxxx-large {\\n  font-size: 10rem;\\n}\\n\\n.font-size-xxx-large {\\n  font-size: 7.5rem;\\n  line-height: 7.2rem;\\n}\\n\\n.font-size-xx-large {\\n  font-size: 5rem;\\n}\\n\\n.font-size-x-large {\\n  font-size: 2.5rem;\\n}\\n\\n.font-size-large {\\n  font-size: 1rem;\\n}\\n\\n.font-size-regular {\\n  font-size: 0.75rem;\\n}\\n\\n.font-size-small {\\n  font-size: 0.5rem;\\n}\\n\\n.font-weight-lightest {\\n  font-weight: 100;\\n}\\n\\n.font-weight-light {\\n  font-weight: 300;\\n}\\n\\n.font-weight-regular {\\n  font-weight: 500;\\n}\\n\\n.font-weight-bold {\\n  font-weight: 700;\\n}\\n\\n.font-text-inline {\\n  display: inline;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/base/typography.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/grid.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/grid.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".flex-container {\\n  display: flex;\\n}\\n\\n.flex-center-sort {\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center;\\n}\\n\\n.flex-space-between-sort {\\n  justify-content: space-between;\\n  align-items: center;\\n  align-content: center;\\n}\\n\\n.flex-left {\\n  justify-content: left;\\n}\\n\\n.flex-right {\\n  justify-content: right;\\n}\\n\\n.flex-row {\\n  flex-direction: row;\\n}\\n\\n.flex-column {\\n  flex-direction: column;\\n}\\n\\n.flex-item-start {\\n  align-self: flex-start;\\n}\\n\\n.flex-item-end {\\n  align-self: flex-end;\\n}\\n\\n.ul-text-align-center {\\n  text-align: center;\\n}\\n\\n.on-center-text {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/grid.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#header {\\n  width: 100%;\\n  height: 50px;\\n  border-bottom: 1px solid #dbdbdb;\\n  background-color: #fff;\\n}\\n\\n.header {\\n  width: 960px;\\n}\\n\\n.main-header-logo-image {\\n  height: 30px;\\n}\\n\\n.main-header-search-input {\\n  width: 180px;\\n  height: 25px;\\n  border-radius: 4px;\\n  border: 1px solid #dbdbdb;\\n  background-color: #fafafa;\\n  padding-left: 10px;\\n}\\n\\n.main-header-icon-item {\\n  font-size: 28px;\\n  margin-left: 14px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/header.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./grid.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/grid.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base/typography.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/base/typography.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/header.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./story.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/story.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./post.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/post.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);\"]);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);\n// Module\nexports.push([module.i, \"\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/post.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/post.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#post {\\n  width: 100%;\\n}\\n\\n.main-post {\\n  width: 960px;\\n}\\n\\n.main-post-item {\\n  margin-top: 30px;\\n  border: 1px solid #dbdbdb;\\n  border-radius: 5px;\\n  background-color: #fff;\\n}\\n\\n.main-post-header {\\n  width: 100%;\\n  height: 60px;\\n  border-bottom: 1px solid #dbdbdb;\\n  padding: 0 20px;\\n  box-sizing: border-box;\\n}\\n\\n.main-post-header-profile {\\n  height: 35px;\\n  width: 35px;\\n  overflow: hidden;\\n  border-radius: 50%;\\n}\\n\\n.main-post-header-profile-image {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.main-post-image {\\n  width: 100%;\\n}\\n\\n.main-post-image-image {\\n  height: 400px;\\n  background-size: cover;\\n  background-position: center center;\\n  background-repeat: no-repeat;\\n}\\n\\n.main-post-iconlists {\\n  width: 100%;\\n  height: 50px;\\n  padding: 0 20px;\\n  box-sizing: border-box;\\n}\\n\\n.main-post-iconlsits-left .main-post-iconlists-icon {\\n  margin-right: 16px;\\n}\\n\\n.main-post-iconlists-icon {\\n  font-size: 24px;\\n}\\n\\n.main-post-like {\\n  width: 100%;\\n  height: 20px;\\n  padding: 0 20px;\\n  box-sizing: border-box;\\n}\\n\\n.main-post-content {\\n  width: 100%;\\n  padding: 0 20px;\\n  box-sizing: border-box;\\n}\\n\\n.main-post-commentlists {\\n  width: 100%;\\n  padding: 0 20px;\\n  box-sizing: border-box;\\n  border-bottom: 1px solid #dbdbdb;\\n}\\n\\n.main-post-comment-more {\\n  color: #666;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/post.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@charset \\\"utf-8\\\";\\n\\n/* 여백 초기화 */\\nbody,\\ndiv,\\nul,\\nli,\\ndl,\\ndd,\\ndt,\\nol,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\ninput,\\nfieldset,\\nlegend,\\np,\\nselect,\\ntable,\\nth,\\ntd,\\ntr,\\ntextarea,\\nbutton,\\nform,\\nfigure,\\nfigcaption {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/* a 링크 초기화 */\\na {\\n  color: #222;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\np {\\n  display: inline-block;\\n}\\n\\n/* 폰트 초기화 */\\nbody,\\ninput,\\ntextarea,\\nselect,\\nbutton,\\ntable {\\n  font-family: \\\"Noto Sans KR\\\", AppleSDGothicNeo-Regular, \\\"Malgun Gothic\\\",\\n    \\\"맑은 고딕\\\", dotum, \\\"돋움\\\", sans-serif;\\n  color: #222;\\n  font-size: 14px;\\n  line-height: 1.5;\\n}\\n\\n/* 폰트 스타일 초기화 */\\nem,\\naddress {\\n  font-style: normal;\\n}\\n\\n/* 블릿기호 초기화 */\\nul,\\nli,\\nol {\\n  list-style: none;\\n}\\n\\n/* 제목 태그 초기화 */\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: 14px;\\n  font-weight: normal;\\n}\\n\\n/* 테두리 초기화 */\\nimg,\\nfieldset {\\n  border: 0 none;\\n  display: block;\\n}\\n\\n/* 버튼 초기화 */\\nbutton {\\n  border: 0;\\n}\\n\\n/* 반응형 */\\nvideo,\\nimg {\\n  max-width: 100%;\\n}\\n\\n/* clearfix */\\n.clearfix {\\n  *zoom: 1;\\n}\\n.clearfix:before,\\n.clearfix:after {\\n  display: block;\\n  content: \\\"\\\";\\n  line-height: 0;\\n}\\n.clearfix:after {\\n  clear: both;\\n}\\n\\n/* IR 효과 */\\n.ir_pm {\\n  display: block;\\n  overflow: hidden;\\n  font-size: 0;\\n  line-height: 0;\\n  text-indent: -9999px;\\n} /* 의미있는 이미지의 대체 텍스트를 제공하는 경우(Phark Method) */\\n.ir_wa {\\n  display: block;\\n  overflow: hidden;\\n  position: relative;\\n  z-index: -1;\\n  width: 100%;\\n  height: 100%;\\n} /* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때(WA IR) */\\n.ir_so {\\n  overflow: hidden;\\n  position: absolute;\\n  width: 0;\\n  height: 0;\\n  line-height: 0;\\n  text-indent: -9999px;\\n} /* 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때 */\\n\\n.mt20 {\\n  margin-top: 20px !important;\\n}\\n\\n#app {\\n  width: 100%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/story.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/story.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#story {\\n  width: 100%;\\n}\\n\\n.main-story {\\n  background-color: #fafafa;\\n  border: 1px solid #dbdbdb;\\n  border-top: 0;\\n  width: 960px;\\n  height: 80px;\\n  white-space: nowrap;\\n  overflow-x: scroll;\\n}\\n\\n.main-story-item {\\n  margin-left: 20px;\\n}\\n\\n.main-story-item-profile {\\n  width: 60px;\\n  height: 60px;\\n  border-radius: 50%;\\n  overflow: hidden;\\n}\\n\\n.main-story-item-profile-image {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.main-story-item-profile-name {\\n  width: 60px;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/story.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/assets/Assets.js":
/*!*****************************************!*\
  !*** ./src/components/assets/Assets.js ***!
  \*****************************************/
/*! exports provided: storyData, postData, etc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storyData\", function() { return storyData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postData\", function() { return postData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"etc\", function() { return etc; });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/components/assets/logo.png\");\n/* harmony import */ var _profile_profile_pic01_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile_pic01.jpg */ \"./src/components/assets/profile/profile_pic01.jpg\");\n/* harmony import */ var _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile_pic02.jpg */ \"./src/components/assets/profile/profile_pic02.jpg\");\n/* harmony import */ var _post_post_pic01_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/post_pic01.jpg */ \"./src/components/assets/post/post_pic01.jpg\");\n/* harmony import */ var _post_post_pic02_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post_pic02.jpg */ \"./src/components/assets/post/post_pic02.jpg\");\n\n\n\n\n\n\n\n\n\n\nconst storyData = [\n  {\n    id: 0,\n    name: \"developer.frontend\",\n    src: _profile_profile_pic01_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n  {\n    id: 1,\n    name: \"JK Cho\",\n    src: _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  },\n  {\n    id: 0,\n    name: \"developer.frontend\",\n    src: _profile_profile_pic01_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n  {\n    id: 1,\n    name: \"JK Cho\",\n    src: _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  },\n  {\n    id: 0,\n    name: \"developer.frontend\",\n    src: _profile_profile_pic01_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n  {\n    id: 1,\n    name: \"JK Cho\",\n    src: _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  },\n  {\n    id: 0,\n    name: \"developer.frontend\",\n    src: _profile_profile_pic01_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n  {\n    id: 1,\n    name: \"JK Cho\",\n    src: _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  },\n  {\n    id: 0,\n    name: \"developer.frontend\",\n    src: _profile_profile_pic01_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n  {\n    id: 1,\n    name: \"JK Cho\",\n    src: _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  },\n  {\n    id: 0,\n    name: \"developer.frontend\",\n    src: _profile_profile_pic01_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  },\n  {\n    id: 1,\n    name: \"JK Cho\",\n    src: _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  },\n  {\n    id: 1,\n    name: \"JK Cho\",\n    src: _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  },\n];\n\nconst postData = [\n  {\n    user: {\n      name: \"developer.frontend\",\n      src: _profile_profile_pic01_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    },\n    likes: 2225,\n    image: _post_post_pic01_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    content:\n      \"미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다.. 시노는 말이많아진거같다 좋은선생이고..그리고 보루토왜욕하냐 귀여운데 나루토를보는것같다 성격도 닮았어 그리고버루토에 나루토사스케 둘이싸워도 이기는 신같은존재 나온다는게 사실임?? 그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임..\",\n    comments: [\n      {\n        name: \"JKCho\",\n        content: \"와 정말 멋져요\",\n      },\n      {\n        name: \"Song\",\n        content: \"Wln\",\n      },\n    ],\n  },\n  {\n    user: {\n      name: \"JKCho\",\n      src: _profile_profile_pic02_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    },\n    likes: 123,\n    image: _post_post_pic02_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    content: \"어이, 그 앞은 지옥이다.\",\n    comments: [\n      {\n        name: \"Song\",\n        content: \"Wln\",\n      },\n    ],\n  },\n];\n\nconst etc = [{ src: _logo_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"] }];\n\n\n//# sourceURL=webpack:///./src/components/assets/Assets.js?");

/***/ }),

/***/ "./src/components/assets/logo.png":
/*!****************************************!*\
  !*** ./src/components/assets/logo.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/b78ce3464ac304086ef27ed32bbc8d43.png\");\n\n//# sourceURL=webpack:///./src/components/assets/logo.png?");

/***/ }),

/***/ "./src/components/assets/post/post_pic01.jpg":
/*!***************************************************!*\
  !*** ./src/components/assets/post/post_pic01.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/cafd0af03ba08811a3e3e325a629f7ff.jpg\");\n\n//# sourceURL=webpack:///./src/components/assets/post/post_pic01.jpg?");

/***/ }),

/***/ "./src/components/assets/post/post_pic02.jpg":
/*!***************************************************!*\
  !*** ./src/components/assets/post/post_pic02.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/ca233a6b1e199f496f3702a1e8962900.jpg\");\n\n//# sourceURL=webpack:///./src/components/assets/post/post_pic02.jpg?");

/***/ }),

/***/ "./src/components/assets/profile/profile_pic01.jpg":
/*!*********************************************************!*\
  !*** ./src/components/assets/profile/profile_pic01.jpg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/65aad67c6e670cab437371c6fe0d79a5.jpg\");\n\n//# sourceURL=webpack:///./src/components/assets/profile/profile_pic01.jpg?");

/***/ }),

/***/ "./src/components/assets/profile/profile_pic02.jpg":
/*!*********************************************************!*\
  !*** ./src/components/assets/profile/profile_pic02.jpg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/923b27f6e3d5e41b3bd483e399f13a3e.jpg\");\n\n//# sourceURL=webpack:///./src/components/assets/profile/profile_pic02.jpg?");

/***/ }),

/***/ "./src/components/atoms/BackgroundImage.js":
/*!*************************************************!*\
  !*** ./src/components/atoms/BackgroundImage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n\n\n\nclass BackgroundImage extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ src, style }) {\n    super();\n    this.style = style;\n    this.src = src;\n  }\n\n  render() {\n    return `\n        <div \n          class=\"${this.style}\" \n          style=\"background-image: url('${this.src}')\">\n        </div>\n      `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundImage);\n\n\n//# sourceURL=webpack:///./src/components/atoms/BackgroundImage.js?");

/***/ }),

/***/ "./src/components/atoms/Icon.js":
/*!**************************************!*\
  !*** ./src/components/atoms/Icon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n\n\n\nclass Icon extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ style }) {\n    super();\n    this.style = style;\n  }\n\n  render() {\n    return `\n        <i class=\"fa ${this.style}\" aria-hidden=\"true\"></i>\n      `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icon);\n\n\n//# sourceURL=webpack:///./src/components/atoms/Icon.js?");

/***/ }),

/***/ "./src/components/atoms/IconButton.js":
/*!********************************************!*\
  !*** ./src/components/atoms/IconButton.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ \"./src/components/atoms/Icon.js\");\n\n\n\n\nclass IconButton extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ style, link = \"/\" }) {\n    super();\n    this.icon = new _Icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ style: style });\n    this.link = link;\n  }\n\n  render() {\n    return `\n        <a href=\"${this.link}\">${this.icon.render()}</a>\n      `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconButton);\n\n\n//# sourceURL=webpack:///./src/components/atoms/IconButton.js?");

/***/ }),

/***/ "./src/components/atoms/Image.js":
/*!***************************************!*\
  !*** ./src/components/atoms/Image.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n\n\n\nclass Image extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ style, src }) {\n    super();\n    this.style = style;\n    this.src = src;\n  }\n\n  render() {\n    return `\n            <img class=\"${this.style}\" src=\"${this.src}\" alt=\"${this.style}\" />\n        `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n\n//# sourceURL=webpack:///./src/components/atoms/Image.js?");

/***/ }),

/***/ "./src/components/atoms/Input.js":
/*!***************************************!*\
  !*** ./src/components/atoms/Input.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n\n\n\nclass Input extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ style, placeholder, type }) {\n    super();\n    this.style = style;\n    this.placeholder = placeholder;\n    this.type = type;\n  }\n\n  render() {\n    return `\n            <input class=\"common__input ${this.style}\" type=\"${this.type}\" placeholder=\"${this.placeholder}\"></input>\n        `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n\n//# sourceURL=webpack:///./src/components/atoms/Input.js?");

/***/ }),

/***/ "./src/components/atoms/Typography.js":
/*!********************************************!*\
  !*** ./src/components/atoms/Typography.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n\n\n\nclass Typography extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ style, content }) {\n    super();\n    this.style = style;\n    this.content = content;\n  }\n\n  render() {\n    return `\n            <p class=\"common__p ${this.style}\">${this.content}</p>\n        `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typography);\n\n\n//# sourceURL=webpack:///./src/components/atoms/Typography.js?");

/***/ }),

/***/ "./src/components/molecules/Post/PostComment.js":
/*!******************************************************!*\
  !*** ./src/components/molecules/Post/PostComment.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Typography */ \"./src/components/atoms/Typography.js\");\n\n\n\n\nclass PostComment extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ name, content }) {\n    super();\n    this.userName = name;\n    this.content = content;\n    this.nameText = new _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"font-size-regular font-weight-bold\",\n      content: this.userName,\n    });\n    this.contentText = new _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"font-size-regular font-weight-regular\",\n      content: this.content,\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <div class=\"main-post-commentlists-comment flex-container flex-row\">\n            ${this.nameText.render()}\n            ${this.contentText.render()}\n        </div>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostComment);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Post/PostComment.js?");

/***/ }),

/***/ "./src/components/molecules/Post/PostCommentLists.js":
/*!***********************************************************!*\
  !*** ./src/components/molecules/Post/PostCommentLists.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _PostComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostComment */ \"./src/components/molecules/Post/PostComment.js\");\n\n\n\n\nclass PostCommentLists extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ commentData }) {\n    super();\n    this.commentData = commentData;\n    this.comments = [];\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <div class=\"main-post-commentlists flex-container flex-column\">\n            <a href=\"/\" class=\"main-post-comment-more\">댓글 더 보기</a>\n            ${this.renderComment()}\n        </div>\n    `;\n  }\n\n  renderComment() {\n    let commentString = \"\";\n    this.commentData.map((data) => {\n      const comment = new _PostComment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        name: data.name,\n        content: data.content,\n      });\n      this.comments.push(comment);\n      commentString = commentString.concat(comment.render());\n    });\n    return commentString;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCommentLists);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Post/PostCommentLists.js?");

/***/ }),

/***/ "./src/components/molecules/Post/PostContent.js":
/*!******************************************************!*\
  !*** ./src/components/molecules/Post/PostContent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Typography */ \"./src/components/atoms/Typography.js\");\n\n\n\n\nclass PostContent extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ name, content }) {\n    super();\n    this.userName = name;\n    this.content = content;\n    this.nameText = new _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"font-size-regular font-weight-bold font-text-inline\",\n      content: `${this.userName}`,\n    });\n    this.contentText = new _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"font-size-regular font-weight-regular font-text-inline\",\n      content: `${this.content}`,\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <div class=\"main-post-content\">\n            ${this.nameText.render()}\n            ${this.contentText.render()}\n        </div>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostContent);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Post/PostContent.js?");

/***/ }),

/***/ "./src/components/molecules/Post/PostHeader.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/Post/PostHeader.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Image */ \"./src/components/atoms/Image.js\");\n/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Typography */ \"./src/components/atoms/Typography.js\");\n/* harmony import */ var _atoms_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/IconButton */ \"./src/components/atoms/IconButton.js\");\n\n\n\n\n\n\nclass PostHeader extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ userData }) {\n    super();\n    this.name = userData.name;\n    this.src = userData.src;\n    this.profileImage = new _atoms_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"main-post-header-profile-image\",\n      src: this.src,\n    });\n    this.userName = new _atoms_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      style: \"main-post-header-profile-name font-size-regular font-weight-bold\",\n      content: this.name,\n    });\n    this.iconButton = new _atoms_IconButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      style: \"main-post-header-icon fa-ellipsis-h\",\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <div class=\"main-post-header flex-container flex-row flex-space-between-sort\">\n            <div class=\"main-post-header-profile-wrapper flex-container flex-row flex-center-sort\">\n                <div class=\"main-post-header-profile\">\n                    ${this.profileImage.render()}\n                </div>\n                ${this.userName.render()}\n            </div>\n            ${this.iconButton.render()}\n        </div>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostHeader);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Post/PostHeader.js?");

/***/ }),

/***/ "./src/components/molecules/Post/PostIconLists.js":
/*!********************************************************!*\
  !*** ./src/components/molecules/Post/PostIconLists.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/IconButton */ \"./src/components/atoms/IconButton.js\");\n\n\n\n\nclass PostIconLists extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.heartIcon = new _atoms_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"main-post-iconlists-icon fa-heart-o\",\n    });\n    this.commentIcon = new _atoms_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"main-post-iconlists-icon fa-comment-o\",\n    });\n    this.shareIcon = new _atoms_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"main-post-iconlists-icon fa-paper-plane-o\",\n    });\n    this.bookmarkIcon = new _atoms_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"main-post-iconlists-icon fa-bookmark-o\",\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n      <div class=\"main-post-iconlists flex-container flex-space-between-sort flex-row\">\n        <div class=\"main-post-iconlsits-left flex-container flex-row\">\n          ${this.heartIcon.render()}\n          ${this.commentIcon.render()}\n          ${this.shareIcon.render()}\n        </div>\n        ${this.bookmarkIcon.render()}\n      </div>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostIconLists);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Post/PostIconLists.js?");

/***/ }),

/***/ "./src/components/molecules/Post/PostImage.js":
/*!****************************************************!*\
  !*** ./src/components/molecules/Post/PostImage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_BackgroundImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/BackgroundImage */ \"./src/components/atoms/BackgroundImage.js\");\n\n\n\n\nclass PostImage extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ src }) {\n    super();\n    this.src = src;\n    this.image = new _atoms_BackgroundImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      src: this.src,\n      style: \"main-post-image-image\",\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <div class=\"main-post-image\">\n            ${this.image.render()}\n        </div>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImage);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Post/PostImage.js?");

/***/ }),

/***/ "./src/components/molecules/Post/PostInputComment.js":
/*!***********************************************************!*\
  !*** ./src/components/molecules/Post/PostInputComment.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n\n\n\nclass PostInputComment extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n\n  onMount(event) {}\n\n  render() {\n    return ``;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostInputComment);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Post/PostInputComment.js?");

/***/ }),

/***/ "./src/components/molecules/Post/PostLikes.js":
/*!****************************************************!*\
  !*** ./src/components/molecules/Post/PostLikes.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Typography */ \"./src/components/atoms/Typography.js\");\n\n\n\n\nclass PostLikes extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ like }) {\n    super();\n    this.like = like;\n    this.text1 = new _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"font-size-regular font-weight-bold\",\n      content: `${this.like}명`,\n    });\n    this.text2 = new _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"font-size-regular font-weight-regular\",\n      content: \"이 좋아합니다\",\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <div class=\"main-post-like flex-container flex-row\">\n            ${this.text1.render()}\n            ${this.text2.render()}\n        </div>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostLikes);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Post/PostLikes.js?");

/***/ }),

/***/ "./src/components/molecules/Story/StoryItem.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/Story/StoryItem.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Image */ \"./src/components/atoms/Image.js\");\n/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Typography */ \"./src/components/atoms/Typography.js\");\n\n\n\n\nclass StoryItem extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ name, src }) {\n    super();\n    this.src = src;\n    this.name = name;\n    this.profileImage = new _atoms_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"main-story-item-profile-image\",\n      src: this.src,\n    });\n    this.userName = new _atoms_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      style:\n        \"main-story-item-profile-name font-size-regular font-weight-regular\",\n      content: this.name,\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <div class=\"main-story-item flex-container flex-column ul-text-align-center\">\n            <a href=\"/\">\n                <div class=\"main-story-item-profile\">\n                    ${this.profileImage.render()}\n                </div>\n                ${this.userName.render()}\n            </a>\n        </div>\n      `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoryItem);\n\n\n//# sourceURL=webpack:///./src/components/molecules/Story/StoryItem.js?");

/***/ }),

/***/ "./src/components/molecules/header/HeaderIconLists.js":
/*!************************************************************!*\
  !*** ./src/components/molecules/header/HeaderIconLists.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/IconButton */ \"./src/components/atoms/IconButton.js\");\n\n\n\n\nconst iconLists = [\n  { style: \"fa-home\" },\n  { style: \"fa-paper-plane-o\" },\n  { style: \"fa-compass\" },\n  { style: \"fa-heart-o\" },\n  { style: \"fa-user-circle-o\" },\n];\n\nclass HeaderIconList extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.icons = [];\n    iconLists.map((icon) => {\n      this.icons.push(\n        new _atoms_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          style: icon.style + \" main-header-icon-item\",\n        })\n      );\n    });\n  }\n  onMount(event) {}\n\n  render() {\n    return `\n        <div>\n        ${this.icons.map((icon) => icon.render())}\n        </div>\n      `;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderIconList);\n\n\n//# sourceURL=webpack:///./src/components/molecules/header/HeaderIconLists.js?");

/***/ }),

/***/ "./src/components/molecules/header/HeaderLogo.js":
/*!*******************************************************!*\
  !*** ./src/components/molecules/header/HeaderLogo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Image */ \"./src/components/atoms/Image.js\");\n/* harmony import */ var _assets_Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/Assets */ \"./src/components/assets/Assets.js\");\n\n\n\n\n\nclass HeaderLogo extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.logoImage = new _atoms_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"main-header-logo-image\",\n      src: _assets_Assets__WEBPACK_IMPORTED_MODULE_2__[\"etc\"][0].src,\n    });\n  }\n\n  render() {\n    return `\n        <div class=\"main-header-logo\">\n        ${this.logoImage.render()}\n        </div>\n      `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderLogo);\n\n\n//# sourceURL=webpack:///./src/components/molecules/header/HeaderLogo.js?");

/***/ }),

/***/ "./src/components/molecules/header/HeaderSearch.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/header/HeaderSearch.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _atoms_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Input */ \"./src/components/atoms/Input.js\");\n\n\n\n\nclass HeaderSearch extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.searchBar = new _atoms_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      style: \"main-header-search-input\",\n      placeholder: \"검색\",\n      type: \"text\",\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <div class=\"main-header-search\">\n        ${this.searchBar.render()}\n        </div>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderSearch);\n\n\n//# sourceURL=webpack:///./src/components/molecules/header/HeaderSearch.js?");

/***/ }),

/***/ "./src/components/organisms/Header.js":
/*!********************************************!*\
  !*** ./src/components/organisms/Header.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _molecules_header_HeaderLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../molecules/header/HeaderLogo */ \"./src/components/molecules/header/HeaderLogo.js\");\n/* harmony import */ var _molecules_header_HeaderSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/header/HeaderSearch */ \"./src/components/molecules/header/HeaderSearch.js\");\n/* harmony import */ var _molecules_header_HeaderIconLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/header/HeaderIconLists */ \"./src/components/molecules/header/HeaderIconLists.js\");\n\n\n\n\n\n\nclass Header extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.headerLogo = new _molecules_header_HeaderLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.headerSearch = new _molecules_header_HeaderSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.headerIconLists = new _molecules_header_HeaderIconLists__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <header id=\"header\" class=\"flex-container flex-center-sort\">\n            <div class=\"header flex-container flex-row flex-space-between-sort\">\n                ${this.headerLogo.render()}\n                ${this.headerSearch.render()}\n                ${this.headerIconLists.render()}\n            </div>\n        </header>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n\n//# sourceURL=webpack:///./src/components/organisms/Header.js?");

/***/ }),

/***/ "./src/components/organisms/Post.js":
/*!******************************************!*\
  !*** ./src/components/organisms/Post.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _assets_Assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Assets */ \"./src/components/assets/Assets.js\");\n/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostItem */ \"./src/components/organisms/PostItem.js\");\n\n\n\n\nclass Post extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.posts = [];\n    _assets_Assets__WEBPACK_IMPORTED_MODULE_1__[\"postData\"].map((data) => {\n      this.posts.push(new _PostItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ postData: data }));\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <article id=\"post\" class=\"flex-container flex-center-sort\">\n            <div class=\"main-post\">\n              ${this.posts.map((post) => post.render())}\n            </div>\n        </article>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\n\n//# sourceURL=webpack:///./src/components/organisms/Post.js?");

/***/ }),

/***/ "./src/components/organisms/PostItem.js":
/*!**********************************************!*\
  !*** ./src/components/organisms/PostItem.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _molecules_Post_PostHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../molecules/Post/PostHeader */ \"./src/components/molecules/Post/PostHeader.js\");\n/* harmony import */ var _molecules_Post_PostImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/Post/PostImage */ \"./src/components/molecules/Post/PostImage.js\");\n/* harmony import */ var _molecules_Post_PostIconLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/Post/PostIconLists */ \"./src/components/molecules/Post/PostIconLists.js\");\n/* harmony import */ var _molecules_Post_PostLikes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/Post/PostLikes */ \"./src/components/molecules/Post/PostLikes.js\");\n/* harmony import */ var _molecules_Post_PostContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../molecules/Post/PostContent */ \"./src/components/molecules/Post/PostContent.js\");\n/* harmony import */ var _molecules_Post_PostCommentLists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../molecules/Post/PostCommentLists */ \"./src/components/molecules/Post/PostCommentLists.js\");\n/* harmony import */ var _molecules_Post_PostInputComment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../molecules/Post/PostInputComment */ \"./src/components/molecules/Post/PostInputComment.js\");\n\n\n\n\n\n\n\n\n\nclass PostItem extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor({ postData }) {\n    super();\n    this.postHeader = new _molecules_Post_PostHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ userData: postData.user });\n    this.postImage = new _molecules_Post_PostImage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ src: postData.image });\n    this.postIconLists = new _molecules_Post_PostIconLists__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.postLike = new _molecules_Post_PostLikes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ like: postData.likes });\n    this.postContent = new _molecules_Post_PostContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n      name: postData.user.name,\n      content: postData.content,\n    });\n    this.postCommentLists = new _molecules_Post_PostCommentLists__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      commentData: postData.comments,\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n            <div class=\"main-post-item flex-container flex-column flex-space-between-sort\">\n                ${this.postHeader.render()}\n                ${this.postImage.render()}\n                ${this.postIconLists.render()}\n                ${this.postLike.render()}\n                ${this.postContent.render()}\n                ${this.postCommentLists.render()}\n            </div>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostItem);\n\n\n//# sourceURL=webpack:///./src/components/organisms/PostItem.js?");

/***/ }),

/***/ "./src/components/organisms/Story.js":
/*!*******************************************!*\
  !*** ./src/components/organisms/Story.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _molecules_Story_StoryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../molecules/Story/StoryItem */ \"./src/components/molecules/Story/StoryItem.js\");\n/* harmony import */ var _assets_Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Assets */ \"./src/components/assets/Assets.js\");\n\n\n\n\n\nclass Story extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.storyItems = [];\n    _assets_Assets__WEBPACK_IMPORTED_MODULE_2__[\"storyData\"].map((data) => {\n      this.storyItems.push(new _molecules_Story_StoryItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ name: data.name, src: data.src }));\n    });\n  }\n\n  onMount(event) {}\n\n  render() {\n    return `\n        <section id=\"story\" class=\"flex-container flex-center-sort\">\n            <div class=\"main-story flex-container flex-row\">\n                ${this.storyItems.map((story) => story.render())}\n            </div>\n        </section>\n    `;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Story);\n\n\n//# sourceURL=webpack:///./src/components/organisms/Story.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_organisms_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/organisms/Header */ \"./src/components/organisms/Header.js\");\n/* harmony import */ var _components_organisms_Story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/organisms/Story */ \"./src/components/organisms/Story.js\");\n/* harmony import */ var _components_organisms_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/organisms/Post */ \"./src/components/organisms/Post.js\");\n\n\n\n\n\nconst initiate = () => {\n  const header = new _components_organisms_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const story = new _components_organisms_Story__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  const post = new _components_organisms_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  const app = document.getElementById(\"app\");\n\n  app.innerHTML += header.render();\n  app.innerHTML += story.render();\n  app.innerHTML += post.render();\n};\n\ninitiate();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/Component.js":
/*!******************************!*\
  !*** ./src/lib/Component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Component {\n  constructor() {}\n\n  onMount(event) {}\n\n  render() {}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n\n//# sourceURL=webpack:///./src/lib/Component.js?");

/***/ })

/******/ });