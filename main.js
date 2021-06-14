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

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateToDo\": () => (/* binding */ CreateToDo)\n/* harmony export */ });\n//Factory Function => To do items\n\nconst CreateToDo = (\n  title = \"Add title here\",\n  description = \"Add details here\",\n  dueDate = `${new Date().getFullYear()}-${\n    new Date().getMonth() + 1\n  }-${new Date().getDate()}`,\n  priority = \"low\",\n  isComplete = \"false\"\n) => {\n  return { title, description, dueDate, priority, isComplete };\n};\n\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/create.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodo\": () => (/* binding */ displayTodo)\n/* harmony export */ });\nconst displayTodo = (array) => {\n  array.forEach((item) => {\n    const todoContainer = document.querySelector(\"#todos-container\");\n\n    const itemDetailElements = createDetailElements(item);\n    const itemSumElements = createSummaryElements(item);\n\n    itemSumElements.itemSummaryLeft.append(\n      itemSumElements.itemCheckbox,\n      itemSumElements.itemTitle\n    );\n    itemSumElements.itemSummaryRight.append(\n      itemSumElements.itemDueDate,\n      itemSumElements.itemDetailBtn\n    );\n    itemSumElements.itemSummaryContainer.append(\n      itemSumElements.itemSummaryLeft,\n      itemSumElements.itemSummaryRight\n    );\n\n    itemSumElements.itemContainer.appendChild(\n      itemSumElements.itemSummaryContainer\n    );\n\n    todoContainer.appendChild(itemSumElements.itemContainer);\n\n    itemDetailElements.itemDetailLeft.append(\n      itemDetailElements.itemDetailDesc,\n      itemDetailElements.itemPriority\n    );\n\n    itemDetailElements.itemDetailRight.append(\n      itemDetailElements.itemDate,\n      itemDetailElements.deleteBtn\n    );\n    itemDetailElements.itemDetailContainer.append(\n      itemDetailElements.itemDetailLeft,\n      itemDetailElements.itemDetailRight\n    );\n    itemSumElements.itemContainer.appendChild(\n      itemDetailElements.itemDetailContainer\n    );\n\n    itemSumElements.itemDetailBtn.addEventListener(\"click\", () => {\n      itemDetailElements.itemDetailContainer.classList.toggle(\"hidden\");\n    });\n\n    itemDetailElements.itemDate.addEventListener(\"change\", () => {\n      console.log(\"date changed\");\n      itemSumElements.itemDueDate.innerText = `Due Date: ${itemDetailElements.itemDate.value}`;\n    });\n  });\n};\n\nconst createSummaryElements = (item) => {\n  const itemContainer = document.createElement(\"div\");\n\n  const itemSummaryContainer = document.createElement(\"div\");\n  const itemSummaryLeft = document.createElement(\"div\");\n  const itemSummaryRight = document.createElement(\"div\");\n\n  const itemTitle = document.createElement(\"h3\");\n  const itemCheckbox = document.createElement(\"input\");\n  const itemDueDate = document.createElement(\"span\");\n  const itemDetailBtn = document.createElement(\"button\");\n\n  itemTitle.setAttribute(\"contenteditable\", true);\n\n  itemDetailBtn.classList.add(\"detail-btn\");\n\n  itemCheckbox.setAttribute(\"type\", \"checkbox\");\n\n  if (item.isCompleted === true) {\n    itemCheckbox.checked = true;\n  }\n  if (item.isCompleted === false) {\n    itemCheckbox.checked = false;\n  }\n\n  itemContainer.classList.add(\"todo-items\");\n  itemSummaryContainer.classList.add(\"todo-items-summary\");\n  itemSummaryLeft.classList.add(\"summary-left-side\");\n  itemSummaryRight.classList.add(\"summary-right-side\");\n\n  itemTitle.innerText = `${item.title}`;\n\n  itemDueDate.innerText = `Due Date: ${item.dueDate}`;\n  itemDetailBtn.innerText = \"Details\";\n\n  return {\n    itemContainer,\n    itemSummaryContainer,\n    itemSummaryLeft,\n    itemSummaryRight,\n    itemTitle,\n    itemCheckbox,\n    itemDueDate,\n    itemDetailBtn,\n  };\n};\n\nconst createDetailElements = (item) => {\n  const itemDetailContainer = document.createElement(\"div\");\n  const itemDetailLeft = document.createElement(\"div\");\n  const itemDetailRight = document.createElement(\"div\");\n  const itemDate = document.createElement(\"input\");\n  const deleteBtn = document.createElement(\"button\");\n  const itemDetailDesc = document.createElement(\"p\");\n  const itemPriority = document.createElement(\"select\");\n\n  const priorityArray = [\"low\", \"medium\", \"high\"];\n\n  priorityArray.forEach((selection) => {\n    const option = document.createElement(\"option\");\n    option.setAttribute(\"value\", selection);\n    option.innerText = selection;\n    itemPriority.appendChild(option);\n  });\n\n  itemDate.setAttribute(\"type\", \"date\");\n  itemDate.setAttribute(\"value\", item.dueDate);\n  itemDetailDesc.setAttribute(\"contenteditable\", true);\n\n  itemDetailContainer.classList.add(\"todo-items-info\", \"hidden\");\n  itemDetailLeft.classList.add(\"info-left-side\");\n  itemDetailRight.classList.add(\"info-right-side\");\n  itemPriority.classList.add(\"priority-select\");\n\n  if (item.priority === \"low\") {\n    itemPriority.value = \"low\";\n  } else if (item.priority === \"medium\") {\n    itemPriority.value = \"medium\";\n  } else {\n    itemPriority.value = \"high\";\n  }\n\n  itemDetailDesc.innerText = item.description;\n  deleteBtn.innerText = \"Delete Item\";\n\n  return {\n    itemDetailContainer,\n    itemDetailLeft,\n    itemDetailRight,\n    itemDate,\n    deleteBtn,\n    itemDetailDesc,\n    itemPriority,\n  };\n};\n\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://project-todo-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ \"./src/create.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\n\n\n// const item1 = CreateToDo(\n//   \"Groceries\",\n//   \"Buy item 1, item 2, item 3\",\n//   \"11/22/21\",\n//   \"high\",\n//   true\n// );\n\nconst defaultList = [\n  {\n    title: \"Groceries\",\n    description: \"Buy item 1, item 2, item 3\",\n    dueDate: \"2021-07-21\",\n    priority: \"high\",\n    isCompleted: false,\n  },\n  {\n    title: \"Workout\",\n    description: \"3 sets of bicep, 3 sets of tricep\",\n    dueDate: \"2021-06-30\",\n    priority: \"medium\",\n    isCompleted: true,\n  },\n];\n\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(defaultList);\n\nconst addItemBtn = document.querySelector(\"#add-todo-btn\");\n\naddItemBtn.addEventListener(\"click\", () => {\n  const newItem = (0,_create_js__WEBPACK_IMPORTED_MODULE_0__.CreateToDo)();\n  defaultList.push(newItem);\n  removeAllChildNodes(document.querySelector(\"#todos-container\"));\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo)(defaultList);\n});\n\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\n// let itemsArray = [];\n\n// localStorage.setItem(\"items\", JSON.stringify(itemsArray));\n// const data = JSON.parse(localStorage.getItem(\"items\"));\n\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;