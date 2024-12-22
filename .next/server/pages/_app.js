"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ScrollToTopButton.js":
/*!*****************************************!*\
  !*** ./components/ScrollToTopButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ScrollToTopButton = ()=>{\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 300) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    const scrollToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: scrollToTop,\n        className: \"btn rounded-circle p-3 position-fixed bottom-0 end-0 m-4 shadow-lg\",\n        style: {\n            backgroundColor: \"#ffc107\",\n            borderColor: \"#ff9800\",\n            transition: \"transform 0.3s ease, box-shadow 0.3s ease\"\n        },\n        onMouseEnter: (e)=>{\n            e.target.style.transform = \"scale(1.1)\";\n            e.target.style.boxShadow = \"0 8px 20px rgba(0, 0, 0, 0.3)\";\n        },\n        onMouseLeave: (e)=>{\n            e.target.style.transform = \"scale(1)\";\n            e.target.style.boxShadow = \"0 4px 10px rgba(0, 0, 0, 0.2)\";\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"h3 text-dark\",\n            children: \"↑\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools\\\\components\\\\ScrollToTopButton.js\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools\\\\components\\\\ScrollToTopButton.js\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTopButton);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njcm9sbFRvVG9wQnV0dG9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUU1QyxNQUFNRSxvQkFBb0I7SUFDeEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1JLGVBQWU7WUFDbkIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLEtBQUs7Z0JBQ3hCSCxhQUFhO1lBQ2YsT0FBTztnQkFDTEEsYUFBYTtZQUNmO1FBQ0Y7UUFFQUUsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUNwRCxHQUFHLEVBQUU7SUFFTCxNQUFNSyxjQUFjO1FBQ2xCSixPQUFPSyxRQUFRLENBQUM7WUFDZEMsS0FBSztZQUNMQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE9BQ0VWLDJCQUNFLDhEQUFDVztRQUNDQyxTQUFTTDtRQUNUTSxXQUFVO1FBQ1ZDLE9BQU87WUFDTEMsaUJBQWlCO1lBQ2pCQyxhQUFhO1lBQ2JDLFlBQVk7UUFDZDtRQUNBQyxjQUFjLENBQUNDO1lBQ2JBLEVBQUVDLE1BQU0sQ0FBQ04sS0FBSyxDQUFDTyxTQUFTLEdBQUc7WUFDM0JGLEVBQUVDLE1BQU0sQ0FBQ04sS0FBSyxDQUFDUSxTQUFTLEdBQUc7UUFDN0I7UUFDQUMsY0FBYyxDQUFDSjtZQUNiQSxFQUFFQyxNQUFNLENBQUNOLEtBQUssQ0FBQ08sU0FBUyxHQUFHO1lBQzNCRixFQUFFQyxNQUFNLENBQUNOLEtBQUssQ0FBQ1EsU0FBUyxHQUFHO1FBQzdCO2tCQUVBLDRFQUFDRTtZQUFLWCxXQUFVO3NCQUFlOzs7Ozs7Ozs7OztBQUl2QztBQUVBLGlFQUFlZCxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVrdHJvbnRvb2xzLy4vY29tcG9uZW50cy9TY3JvbGxUb1RvcEJ1dHRvbi5qcz8yYTY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTY3JvbGxUb1RvcEJ1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAzMDApIHtcclxuICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGlzVmlzaWJsZSAmJiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cclxuICAgICAgICBjbGFzc05hbWU9XCJidG4gcm91bmRlZC1jaXJjbGUgcC0zIHBvc2l0aW9uLWZpeGVkIGJvdHRvbS0wIGVuZC0wIG0tNCBzaGFkb3ctbGdcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZjMTA3JywgLy8gQW1hcmlsbG8gcXVlIGNvbWJpbmEgYmllbiBjb24gZWwgdGVtYVxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZmY5ODAwJywgICAgIC8vIFVuIHRvbm8gbcOhcyBvc2N1cm8gcGFyYSBlbCBib3JkZVxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcclxuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICcwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSc7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xyXG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJzAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpJztcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDMgdGV4dC1kYXJrXCI+4oaRPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIClcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9Ub3BCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNjcm9sbFRvVG9wQnV0dG9uIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJ0cmFuc2l0aW9uIiwib25Nb3VzZUVudGVyIiwiZSIsInRhcmdldCIsInRyYW5zZm9ybSIsImJveFNoYWRvdyIsIm9uTW91c2VMZWF2ZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ScrollToTopButton.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootswatch_dist_solar_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootswatch/dist/solar/bootstrap.min.css */ \"./node_modules/bootswatch/dist/solar/bootstrap.min.css\");\n/* harmony import */ var bootswatch_dist_solar_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_solar_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ScrollToTopButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ScrollToTopButton */ \"./components/ScrollToTopButton.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools\\\\pages\\\\_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollToTopButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luala\\\\Desktop\\\\ElektronTools\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDZTtBQUVoRCxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3BELHFCQUNFOzswQkFDRSw4REFBQ0Q7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0gscUVBQWlCQTs7Ozs7OztBQUd4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWt0cm9udG9vbHMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3dhdGNoL2Rpc3Qvc29sYXIvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBTY3JvbGxUb1RvcEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1Njcm9sbFRvVG9wQnV0dG9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPFNjcm9sbFRvVG9wQnV0dG9uIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlNjcm9sbFRvVG9wQnV0dG9uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootswatch"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();