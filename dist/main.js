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

/***/ "./src/components/slideshow.js":
/*!*************************************!*\
  !*** ./src/components/slideshow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slideshow = (images) => {\n  //get container ready to build in\n  const container = document.querySelector(\".container\");\n\n  const imagesArray = images;\n\n  let currPic = 0;\n\n  const quicknavContents = () => {\n    let quicknav = imagesArray\n      .map(\n        (img, i) =>\n          `<div class=\"quicknav__disc ${\n            i == currPic ? \"quicknav__disc--active\" : \"\"\n          }\" data-id=\"${i}\"> </div>`\n      )\n      .join(\"\");\n\n    return quicknav;\n  };\n\n  //create slideshow\n  const slideshow = document.createElement(\"div\");\n\n  slideshow.innerHTML = `<div class=\"slideshow\">\n  <div class=\"slideshow__control slideshow__control--prev\">Previous</div>\n  <div class=\"slideshow__frame\">\n    <img\n      class=\"slideshow__img\"\n      src=\"${imagesArray[currPic]}\"\n    />\n  </div>\n  <div class=\"slideshow__control slideshow__control--next\">Next</div>\n</div>\n<div class=\"quicknav\">\n    ${quicknavContents()}\n</div>`;\n\n  ///CONSTRUCT PAGE\n\n  container.appendChild(slideshow);\n\n  ///\n  /// IMAGE SLIDESHOW CONTROLS\n  ///\n\n  const image = document.querySelector(\".slideshow__img\");\n\n  setInterval(() => {\n    currPic == imagesArray.length - 1 ? (currPic = 0) : (currPic += 1);\n    image.src = imagesArray[currPic];\n    document.querySelector(\".quicknav\").innerHTML = quicknavContents();\n    addQuicknavEvents();\n  }, 5000);\n\n  //add event listener to change picture based on quicknav\n\n  const addQuicknavEvents = () => {\n    const quicknavButtons = document.querySelectorAll(\".quicknav__disc\");\n    quicknavButtons.forEach((btn) =>\n      btn.addEventListener(\"click\", (e) => {\n        currPic = parseInt(e.target.dataset.id);\n        image.src = imagesArray[currPic];\n        document.querySelector(\".quicknav\").innerHTML = quicknavContents();\n        addQuicknavEvents();\n      })\n    );\n  };\n\n  const addControls = () => {\n    const prev = document.querySelector(\".slideshow__control--prev\");\n    const next = document.querySelector(\".slideshow__control--next\");\n\n    next.addEventListener(\"click\", () => {\n      currPic == imagesArray.length - 1 ? (currPic = 0) : (currPic += 1);\n      image.src = imagesArray[currPic];\n      document.querySelector(\".quicknav\").innerHTML = quicknavContents();\n      addQuicknavEvents();\n    });\n\n    prev.addEventListener(\"click\", () => {\n      currPic == 0 ? (currPic = imagesArray.length - 1) : (currPic -= 1);\n      image.src = imagesArray[currPic];\n      -+0;\n      document.querySelector(\".quicknav\").innerHTML = quicknavContents();\n      addQuicknavEvents();\n    });\n  };\n\n  addQuicknavEvents();\n  addControls();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideshow);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/slideshow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoad */ \"./src/onLoad.js\");\n/* harmony import */ var _components_slideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slideshow */ \"./src/components/slideshow.js\");\n\n\n\nlet images = [\n  \"https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png\",\n  \"https://cdn.images.express.co.uk/img/dynamic/143/590x/Pokemon-Sword-and-Shield-celebration-1230942.jpg?r=1579540256528\",\n  \"https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/pikachu-08-169.jpg\",\n  \"https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2Ft_lP6tcQ0CJbJTeV8mrV2g--%7EB%2FaD00OTA7dz05ODA7YXBwaWQ9eXRhY2h5b24-%2Fhttps%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=174e15e69478ef59a7371b8f5adf5727a4c321e6\",\n];\n\n(0,_onLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_components_slideshow__WEBPACK_IMPORTED_MODULE_1__.default)(images);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/onLoad.js":
/*!***********************!*\
  !*** ./src/onLoad.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst onLoad = () => {};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/onLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;