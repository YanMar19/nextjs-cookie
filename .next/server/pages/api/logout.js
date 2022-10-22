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
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        // DESTROY COOKIE\n        res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", \"\", {\n            httpOnly: true,\n            secure: \"development\" !== \"development\",\n            expires: new Date(0),\n            sameSite: \"strict\",\n            path: \"/\"\n        }));\n        res.status(200).json({\n            message: \"Success\"\n        });\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).json({\n            message: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUUzQixpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsaUJBQWlCO1FBQ2pCRCxHQUFHLENBQUNFLFNBQVMsQ0FDWCxZQUFZLEVBQ1pKLHVEQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDNUJNLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLE1BQU0sRUFBRUMsYUFUSCxLQVM0QixhQUFhO1lBQzlDQyxPQUFPLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQkMsUUFBUSxFQUFFLFFBQVE7WUFDbEJDLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FBQyxDQUNIO1FBRURWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLFNBQVM7U0FBQyxDQUFDO0lBRTdDLE9BQU87UUFDTGIsR0FBRyxDQUFDRSxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQUMsTUFBTTtTQUFDLENBQUM7UUFDaENGLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFZCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FBRSxDQUFDO0lBQ3ZFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvb2tpZS1zcnYvLi9wYWdlcy9hcGkvbG9nb3V0LmpzPzM2NDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgLy8gREVTVFJPWSBDT09LSUVcbiAgICByZXMuc2V0SGVhZGVyKFxuICAgICAgJ1NldC1Db29raWUnLFxuICAgICAgY29va2llLnNlcmlhbGl6ZSgndG9rZW4nLCAnJywge1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcbiAgICAgICAgZXhwaXJlczogbmV3IERhdGUoMCksXG4gICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KVxuICAgIClcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJTdWNjZXNzXCJ9KVxuXG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSlcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGAgfSlcbiAgfVxufSJdLCJuYW1lcyI6WyJjb29raWUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXRIZWFkZXIiLCJzZXJpYWxpemUiLCJodHRwT25seSIsInNlY3VyZSIsInByb2Nlc3MiLCJleHBpcmVzIiwiRGF0ZSIsInNhbWVTaXRlIiwicGF0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();