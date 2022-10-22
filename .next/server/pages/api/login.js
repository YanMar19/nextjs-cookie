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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
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

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/index */ \"(api)/./config/index.js\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    // checking if is a post request\n    if (req.method === \"POST\") {\n        // destructure email, and password\n        const { email , password  } = req.body;\n        // Making a post request to hit our backend api-endpoint\n        const apiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__.API_URL}/login`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                password\n            })\n        });\n        const resData = await apiRes.json();\n        //console.log(resData);\n        if (apiRes.ok) {\n            //Set Cookie\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize(\"token\", String(resData.data.token), {\n                httpOnly: true,\n                secure: \"development\" !== \"development\",\n                maxAge: 60 * 60 * 24 * 7,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            res.status(200).json({\n                user: resData.user\n            });\n        } else {\n            res.status(data.statusCode).json({\n                message: resData.message\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).json({\n            message: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNoQjtBQUU1QixpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUVqQyxnQ0FBZ0M7SUFDaEMsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3hCLGtDQUFrQztRQUNsQyxNQUFNLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtRQUVwQyx3REFBd0Q7UUFDeEQsTUFBTUMsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVULGtEQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0NJLE1BQU0sRUFBRSxNQUFNO1lBQ2RNLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RILElBQUksRUFBRUksSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0JBQ25CUCxLQUFLO2dCQUNMQyxRQUFRO2FBQ1QsQ0FBQztTQUNILENBQUM7UUFFRixNQUFNTyxPQUFPLEdBQUcsTUFBTUwsTUFBTSxDQUFDTSxJQUFJLEVBQUU7UUFFbkMsdUJBQXVCO1FBRXZCLElBQUdOLE1BQU0sQ0FBQ08sRUFBRSxFQUFHO1lBQ2IsWUFBWTtZQUNaWixHQUFHLENBQUNhLFNBQVMsQ0FDWCxZQUFZLEVBQ1pmLHVEQUFnQixDQUFDLE9BQU8sRUFBRWlCLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDTSxJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUFFO2dCQUNwREMsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLE1BQU0sRUFBRUMsYUFoQ0wsS0FnQzhCLGFBQWE7Z0JBQzlDQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDeEJDLFFBQVEsRUFBRSxRQUFRO2dCQUNsQkMsSUFBSSxFQUFFLEdBQUc7YUFDVixDQUFDLENBQ0g7WUFFRHZCLEdBQUcsQ0FBQ3dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ2IsSUFBSSxDQUFDO2dCQUFDYyxJQUFJLEVBQUVmLE9BQU8sQ0FBQ2UsSUFBSTthQUFDLENBQUM7UUFDNUMsT0FBTztZQUNMekIsR0FBRyxDQUFDd0IsTUFBTSxDQUFDUixJQUFJLENBQUNVLFVBQVUsQ0FBQyxDQUFDZixJQUFJLENBQUM7Z0JBQUNnQixPQUFPLEVBQUVqQixPQUFPLENBQUNpQixPQUFPO2FBQUMsQ0FBQztRQUM5RCxDQUFDO0lBRUgsT0FBTztRQUNMM0IsR0FBRyxDQUFDYSxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQUMsTUFBTTtTQUFDLENBQUM7UUFDaENiLEdBQUcsQ0FBQ3dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ2IsSUFBSSxDQUFDO1lBQUNnQixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUU1QixHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FBQyxDQUFDO0lBQ3JFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvb2tpZS1zcnYvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfVVJMfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAvLyBjaGVja2luZyBpZiBpcyBhIHBvc3QgcmVxdWVzdFxuICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAvLyBkZXN0cnVjdHVyZSBlbWFpbCwgYW5kIHBhc3N3b3JkXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG5cbiAgICAvLyBNYWtpbmcgYSBwb3N0IHJlcXVlc3QgdG8gaGl0IG91ciBiYWNrZW5kIGFwaS1lbmRwb2ludFxuICAgIGNvbnN0IGFwaVJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2xvZ2luYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgcmVzRGF0YSA9IGF3YWl0IGFwaVJlcy5qc29uKClcblxuICAgIC8vY29uc29sZS5sb2cocmVzRGF0YSk7XG5cbiAgICBpZihhcGlSZXMub2sgKSB7XG4gICAgICAvL1NldCBDb29raWVcbiAgICAgIHJlcy5zZXRIZWFkZXIoXG4gICAgICAgICdTZXQtQ29va2llJyxcbiAgICAgICAgY29va2llLnNlcmlhbGl6ZSgndG9rZW4nLCBTdHJpbmcocmVzRGF0YS5kYXRhLnRva2VuKSwge1xuICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LCAvLyAxIHdlZWtcbiAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgICAgICAgcGF0aDogJy8nXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt1c2VyOiByZXNEYXRhLnVzZXJ9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKGRhdGEuc3RhdHVzQ29kZSkuanNvbih7bWVzc2FnZTogcmVzRGF0YS5tZXNzYWdlfSlcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKVxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHttZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgfSlcbiAgfVxufSJdLCJuYW1lcyI6WyJBUElfVVJMIiwiY29va2llIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJhcGlSZXMiLCJmZXRjaCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzRGF0YSIsImpzb24iLCJvayIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsIlN0cmluZyIsImRhdGEiLCJ0b2tlbiIsImh0dHBPbmx5Iiwic2VjdXJlIiwicHJvY2VzcyIsIm1heEFnZSIsInNhbWVTaXRlIiwicGF0aCIsInN0YXR1cyIsInVzZXIiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();