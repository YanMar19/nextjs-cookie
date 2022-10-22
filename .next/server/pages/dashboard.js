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
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction parseCookies(req) {\n    return cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req ? req.headers.cookie || \"\" : document.cookie);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUVyQixTQUFTQyxZQUFZLENBQUNDLEdBQUcsRUFBRTtJQUNoQyxPQUFPRixtREFBWSxDQUFDRSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDSixNQUFNLElBQUksRUFBRSxHQUFHSyxRQUFRLENBQUNMLE1BQU0sQ0FBQztBQUN2RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvb2tpZS1zcnYvLi9oZWxwZXJzL2luZGV4LmpzPzhhZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xuICByZXR1cm4gY29va2llLnBhcnNlKHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZSB8fCBcIlwiIDogZG9jdW1lbnQuY29va2llKVxufSJdLCJuYW1lcyI6WyJjb29raWUiLCJwYXJzZUNvb2tpZXMiLCJyZXEiLCJwYXJzZSIsImhlYWRlcnMiLCJkb2N1bWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/index.js\n");

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../helpers/index */ \"./helpers/index.js\");\n\n\nfunction Page({ token  }) {\n    //  We now have access to the token\n    console.log(token);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"dashboard\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"User Dashboard\"\n        }, void 0, false, {\n            fileName: \"/Users/giannesmarianos/Documents/GitHub/nextjs-cookie-srv-nikos/pages/dashboard.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/giannesmarianos/Documents/GitHub/nextjs-cookie-srv-nikos/pages/dashboard.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps({ req  }) {\n    const { token  } = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(req);\n    // Redirecting the user if the token is not found\n    if (!token) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            token\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE4QztBQUcvQixTQUFTQyxJQUFJLENBQUMsRUFBRUMsS0FBSyxHQUFFLEVBQUU7SUFFdEMsbUNBQW1DO0lBQ25DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBRWxCLHFCQUNFLDhEQUFDRyxNQUFJO1FBQUNDLFNBQVMsRUFBQyxXQUFXO2tCQUN6Qiw0RUFBQ0MsSUFBRTtzQkFBQyxnQkFBYzs7Ozs7Z0JBQUs7Ozs7O1lBQ2xCLENBQ1I7QUFDSCxDQUFDO0FBR00sZUFBZUMsa0JBQWtCLENBQUMsRUFBRUMsR0FBRyxHQUFFLEVBQUU7SUFFaEQsTUFBTSxFQUFFUCxLQUFLLEdBQUUsR0FBR0YsNERBQVksQ0FBQ1MsR0FBRyxDQUFDO0lBRW5DLGlEQUFpRDtJQUNqRCxJQUFJLENBQUNQLEtBQUssRUFBRTtRQUNWLE9BQU87WUFDTFEsUUFBUSxFQUFFO2dCQUNSQyxXQUFXLEVBQUUsR0FBRztnQkFDaEJDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFHRCxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMWCxLQUFLO1NBQ047S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb29raWUtc3J2Ly4vcGFnZXMvZGFzaGJvYXJkLmpzPzBlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnL2hlbHBlcnMvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyB0b2tlbiB9KSB7XG5cbiAgLy8gIFdlIG5vdyBoYXZlIGFjY2VzcyB0byB0aGUgdG9rZW5cbiAgY29uc29sZS5sb2codG9rZW4pXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj5cbiAgICAgIDxoMT5Vc2VyIERhc2hib2FyZDwvaDE+ICBcbiAgICA8L21haW4+XG4gIClcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxIH0pIHtcblxuICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMocmVxKTtcblxuICAvLyBSZWRpcmVjdGluZyB0aGUgdXNlciBpZiB0aGUgdG9rZW4gaXMgbm90IGZvdW5kXG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246ICcvJyxcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdG9rZW5cbiAgICB9LFxuICB9O1xufSJdLCJuYW1lcyI6WyJwYXJzZUNvb2tpZXMiLCJQYWdlIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

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
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.js"));
module.exports = __webpack_exports__;

})();