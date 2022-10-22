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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL)\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || \"https://09bz5vivg7.execute-api.eu-central-1.amazonaws.com\";\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUIsSUFBSSwyREFBMkQ7QUFFOUcsTUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csd0JBQXdCLElBQUksdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvb2tpZS1zcnYvLi9jb25maWcvaW5kZXguanM/YTFiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHBzOi8vMDliejV2aXZnNy5leGVjdXRlLWFwaS5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbSdcblxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIk5FWFRfVVJMIiwiTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/index */ \"(api)/./config/index.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst user = async (req, res)=>{\n    if (req.method === \"GET\") {\n        if (!req.headers.cookie) {\n            res.status(403).json({\n                message: \"Not Authorized\"\n            });\n            return;\n        }\n        const { token  } = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(req.headers.cookie);\n        const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__.API_URL}/user`, {\n            method: \"GET\",\n            headers: {\n                Authorization: `Bearer ${token}`\n            }\n        });\n        const user = await apiRes.json();\n        if (apiRes.ok) {\n            res.status(200).json({\n                user\n            });\n        } else {\n            res.status(403).json({\n                message: \"User forbidden\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).json({\n            message: `Method ${req.method} not allowed`\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ2pCO0FBRTNCLE1BQU1FLElBQUksR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsSUFBSSxDQUFDRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0wsTUFBTSxFQUFFO1lBQ3ZCRyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsZ0JBQWdCO2FBQUMsQ0FBQztZQUNqRCxPQUFNO1FBQ1IsQ0FBQztRQUVELE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdULG1EQUFZLENBQUNFLEdBQUcsQ0FBQ0csT0FBTyxDQUFDTCxNQUFNLENBQUM7UUFFbEQsTUFBTVcsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUViLGtEQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUNLLE1BQU0sRUFBRSxLQUFLO1lBQ2JDLE9BQU8sRUFBRTtnQkFDUFEsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFSixLQUFLLENBQUMsQ0FBQzthQUNqQztTQUNGLENBQUM7UUFFRixNQUFNUixJQUFJLEdBQUcsTUFBTVUsTUFBTSxDQUFDSixJQUFJLEVBQUU7UUFFaEMsSUFBR0ksTUFBTSxDQUFDRyxFQUFFLEVBQUU7WUFDWlgsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ04sSUFBSTthQUFDLENBQUM7UUFDOUIsT0FBTztZQUNMRSxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsZ0JBQWdCO2FBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0gsT0FBTztRQUNMTCxHQUFHLENBQUNZLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFBQyxNQUFNO1NBQUMsQ0FBQztRQUNoQ1osR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUVOLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUFFLENBQUM7SUFDdkUsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUgsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb29raWUtc3J2Ly4vcGFnZXMvYXBpL3VzZXIuanM/OGE2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4J1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXG5cbmNvbnN0IHVzZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZXNzYWdlOiAnTm90IEF1dGhvcml6ZWQnfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpXG5cbiAgICBjb25zdCBhcGlSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS91c2VyYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGFwaVJlcy5qc29uKClcblxuICAgIGlmKGFwaVJlcy5vaykge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3VzZXJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVzc2FnZTogJ1VzZXIgZm9yYmlkZGVuJ30pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlclxuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJjb29raWUiLCJ1c2VyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidG9rZW4iLCJwYXJzZSIsImFwaVJlcyIsImZldGNoIiwiQXV0aG9yaXphdGlvbiIsIm9rIiwic2V0SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user.js"));
module.exports = __webpack_exports__;

})();