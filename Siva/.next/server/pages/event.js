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
exports.id = "pages/event";
exports.ids = ["pages/event"];
exports.modules = {

/***/ "./pages/event.tsx":
/*!*************************!*\
  !*** ./pages/event.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction EventList({ eventList  }) {\n    const { 0: events , 1: setEvents  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(eventList);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchSportsEvents = async ()=>{\n        const response = await fetch(\"http://localhost:3002/events?category=sports\");\n        const data = await response.json();\n        setEvents(data);\n        router.push(\"/events?category=sports\", undefined, {\n            shallow: true\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: fetchSportsEvents,\n                children: \"Sports Events\"\n            }, void 0, false, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List of events\"\n            }, void 0, false, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            events.map((event)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                event.id,\n                                \" \",\n                                event.title,\n                                \" \",\n                                event.date,\n                                \" | \",\n                                event.category\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: event.description\n                        }, void 0, false, {\n                            fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, event.id, true, {\n                    fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this);\n            })\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventList);\nasync function getServerSideProps(context) {\n    const { query  } = context;\n    const { category  } = query;\n    const queryString = category ? \"category=sports\" : \"\";\n    const response = await fetch(`http://localhost:3002/events?${queryString}`);\n    const data = await response.json();\n    return {\n        props: {\n            eventList: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFnQztBQUNPO0FBT3ZDLFNBQVNFLFNBQVMsQ0FBQyxFQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNoQyxNQUFNLEVBVFIsR0FTU0MsTUFBTSxHQVRmLEdBU2lCQyxTQUFTLE1BQUlMLCtDQUFRLENBQUNHLFNBQVMsQ0FBQztJQUMvQyxNQUFNRyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFFMUIsTUFBTU0saUJBQWlCLEdBQUcsVUFBWTtRQUNwQyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO1FBQzVFLE1BQU1DLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksRUFBRTtRQUNsQ04sU0FBUyxDQUFDSyxJQUFJLENBQUM7UUFDZkosTUFBTSxDQUFDTSxJQUFJLENBQUMseUJBQXlCLEVBQUVDLFNBQVMsRUFBRTtZQUFFQyxPQUFPLEVBQUUsSUFBSTtTQUFFLENBQUM7S0FDckU7SUFDRCxxQkFDRTs7MEJBQ0UsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRVQsaUJBQWlCOzBCQUFFLGVBQWE7Ozs7O29CQUFTOzBCQUMxRCw4REFBQ1UsSUFBRTswQkFBQyxnQkFBYzs7Ozs7b0JBQUs7WUFDdEJiLE1BQU0sQ0FBQ2MsR0FBRyxDQUFDQyxDQUFBQSxLQUFLLEdBQUk7Z0JBQ25CLHFCQUNFLDhEQUFDQyxLQUFHOztzQ0FDRiw4REFBQ0MsSUFBRTs7Z0NBQ0FGLEtBQUssQ0FBQ0csRUFBRTtnQ0FBQyxHQUFDO2dDQUFDSCxLQUFLLENBQUNJLEtBQUs7Z0NBQUMsR0FBQztnQ0FBQ0osS0FBSyxDQUFDSyxJQUFJO2dDQUFDLEtBQUc7Z0NBQUNMLEtBQUssQ0FBQ00sUUFBUTs7Ozs7O2dDQUNwRDtzQ0FDTCw4REFBQ0MsR0FBQztzQ0FBRVAsS0FBSyxDQUFDUSxXQUFXOzs7OztnQ0FBSztzQ0FDMUIsOERBQUNDLElBQUU7Ozs7Z0NBQUc7O21CQUxFVCxLQUFLLENBQUNHLEVBQUU7Ozs7d0JBTVosQ0FDUDthQUNGLENBQUM7O29CQUNELENBQ0o7Q0FDRjtBQUVELGlFQUFlcEIsU0FBUztBQUVqQixlQUFlMkIsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHRCxPQUFPO0lBQ3pCLE1BQU0sRUFBRUwsUUFBUSxHQUFFLEdBQUdNLEtBQUs7SUFDMUIsTUFBTUMsV0FBVyxHQUFHUCxRQUFRLEdBQUcsaUJBQWlCLEdBQUcsRUFBRTtJQUNyRCxNQUFNakIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLDZCQUE2QixFQUFFdUIsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzRSxNQUFNdEIsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBRWxDLE9BQU87UUFDTHNCLEtBQUssRUFBRTtZQUNMOUIsU0FBUyxFQUFFTyxJQUFJO1NBQ2hCO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL1NpdmEvLi9wYWdlcy9ldmVudC50c3g/ZDEwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnb3MnO1xuXG50eXBlIGV2ZW50cHJvcHM9e1xuICAgIGV2ZW50bGlzdCA6IGFueTtcbn1cblxuZnVuY3Rpb24gRXZlbnRMaXN0KHsgZXZlbnRMaXN0IH0pIHtcbiAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlKGV2ZW50TGlzdClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBmZXRjaFNwb3J0c0V2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDIvZXZlbnRzP2NhdGVnb3J5PXNwb3J0cycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHNldEV2ZW50cyhkYXRhKVxuICAgIHJvdXRlci5wdXNoKCcvZXZlbnRzP2NhdGVnb3J5PXNwb3J0cycsIHVuZGVmaW5lZCwgeyBzaGFsbG93OiB0cnVlIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaFNwb3J0c0V2ZW50c30+U3BvcnRzIEV2ZW50czwvYnV0dG9uPlxuICAgICAgPGgxPkxpc3Qgb2YgZXZlbnRzPC9oMT5cbiAgICAgIHtldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17ZXZlbnQuaWR9PlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICB7ZXZlbnQuaWR9IHtldmVudC50aXRsZX0ge2V2ZW50LmRhdGV9IHwge2V2ZW50LmNhdGVnb3J5fVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPntldmVudC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRMaXN0XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSBjb250ZXh0XG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHF1ZXJ5XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gY2F0ZWdvcnkgPyAnY2F0ZWdvcnk9c3BvcnRzJyA6ICcnXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9ldmVudHM/JHtxdWVyeVN0cmluZ31gKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZXZlbnRMaXN0OiBkYXRhXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRXZlbnRMaXN0IiwiZXZlbnRMaXN0IiwiZXZlbnRzIiwic2V0RXZlbnRzIiwicm91dGVyIiwiZmV0Y2hTcG9ydHNFdmVudHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwdXNoIiwidW5kZWZpbmVkIiwic2hhbGxvdyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsIm1hcCIsImV2ZW50IiwiZGl2IiwiaDIiLCJpZCIsInRpdGxlIiwiZGF0ZSIsImNhdGVnb3J5IiwicCIsImRlc2NyaXB0aW9uIiwiaHIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJxdWVyeVN0cmluZyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/event.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/event.tsx"));
module.exports = __webpack_exports__;

})();