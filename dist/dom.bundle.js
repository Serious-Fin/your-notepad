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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNoteObject: () => (/* binding */ createNoteObject)\n/* harmony export */ });\nfunction createNoteObject(noteObj) {\n    const baseElement = document.createElement('div');\n    baseElement.classList.add('main-note');\n\n    const upper = document.createElement('div');\n    upper.classList.add('upper-note');\n    upper.classList.add('active');\n\n    const checkbox = document.createElement('input');\n    checkbox.setAttribute('type', 'checkbox');\n\n    const title = document.createElement('div');\n    title.innerHTML = noteObj.title;\n    title.classList.add('bolded');\n\n    const lowerNode = document.createElement('div');\n    lowerNode.classList.add('lower-note');\n    lowerNode.classList.add('hide');\n\n    const description = document.createElement('div');\n    description.innerHTML = noteObj.description;\n\n    const attributes = document.createElement('div');\n    attributes.classList.add('note-attributes');\n\n    const dateDiv = document.createElement('div');\n\n    const priorityDiv = document.createElement('div');\n\n    const date = document.createElement('div');\n    date.innerHTML = 'Due Date:';\n    date.classList.add('bolded');\n\n    const dateVal = document.createElement('div');\n    dateVal.innerHTML = noteObj.date;\n\n    const priority = document.createElement('div');\n    priority.innerHTML = 'Priority:';\n    priority.classList.add('bolded');\n\n    const priorityVal = document.createElement('div');\n    priorityVal.innerHTML = noteObj.priority;\n\n    dateDiv.appendChild(date);\n    dateDiv.appendChild(dateVal);\n\n    priorityDiv.appendChild(priority);\n    priorityDiv.appendChild(priorityVal);\n\n    attributes.appendChild(dateDiv);\n    attributes.appendChild(priorityDiv);\n\n    lowerNode.appendChild(description);\n    lowerNode.append(attributes);\n\n    title.addEventListener(\"click\", function() {\n        if (lowerNode.classList.contains('hide')) {\n            // Unhide note\n            lowerNode.classList.remove('hide');\n            baseElement.classList.add('active');\n            upper.classList.remove('active');\n        }\n        else {\n            // Hide note\n            lowerNode.classList.add('hide');\n            baseElement.classList.remove('active');\n            upper.classList.add('active');\n        }\n    });\n\n    upper.appendChild(checkbox);\n    upper.appendChild(title);\n\n    baseElement.appendChild(upper);\n    baseElement.appendChild(lowerNode);\n\n\n    return baseElement;\n}\n\n//# sourceURL=webpack://your-notepad/./src/dom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/dom.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;