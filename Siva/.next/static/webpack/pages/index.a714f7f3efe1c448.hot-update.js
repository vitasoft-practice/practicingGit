"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), dashboardData = ref1[0], setDashboardData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetchDashboardData() {\n            return _fetchDashboardData.apply(this, arguments);\n        }\n        function _fetchDashboardData() {\n            _fetchDashboardData = _asyncToGenerator(_home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"http://localhost:3001/dashboard\");\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setDashboardData(data);\n                            setIsLoading(false);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetchDashboardData.apply(this, arguments);\n        }\n        fetchDashboardData();\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/dashboard.tsx\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/dashboard.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Posts - \",\n                    dashboardData.posts\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/dashboard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Likes - \",\n                    dashboardData.likes\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/dashboard.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Followers - \",\n                    dashboardData.followers\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/dashboard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Following - \",\n                    dashboardData.following\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/dashboard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/dashboard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"sLTXYAAYhGrQ2P9NR4RD88pmiWY=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQzs7QUFHM0MsU0FBU0UsU0FBUyxHQUFHOztJQUNuQixJQUFrQ0YsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUpsRCxTQUlrQixHQUFrQkEsR0FBYyxHQUFoQyxFQUpsQixZQUlnQyxHQUFJQSxHQUFjLEdBQWxCO0lBQzlCLElBQTBDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBTDFELGFBS3NCLEdBQXNCQSxJQUFjLEdBQXBDLEVBTHRCLGdCQUt3QyxHQUFJQSxJQUFjLEdBQWxCO0lBQ3RDQyxnREFBUyxDQUFDLFdBQU07aUJBQ0NNLGtCQUFrQjttQkFBbEJBLG1CQUFrQjs7aUJBQWxCQSxtQkFBa0I7WUFBbEJBLG1CQUFrQixHQUFqQyxxTUFBb0M7b0JBQzVCQyxRQUFRLEVBQ1JDLElBQUk7Ozs7O21DQURhQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7OzRCQUF6REYsUUFBUSxZQUFpRDs7bUNBQzVDQSxRQUFRLENBQUNHLElBQUksRUFBRTs7NEJBQTVCRixJQUFJLFlBQXdCOzRCQUNsQ0gsZ0JBQWdCLENBQUNHLElBQUksQ0FBQzs0QkFDdEJMLFlBQVksQ0FBQyxLQUFLLENBQUM7Ozs7OzthQUNwQjttQkFMY0csbUJBQWtCOztRQU1qQ0Esa0JBQWtCLEVBQUU7S0FDckIsRUFBRSxFQUFFLENBQUM7SUFFTixJQUFJSixTQUFTLEVBQUU7UUFDYixxQkFBTyw4REFBQ1MsSUFBRTtzQkFBQyxZQUFVOzs7OztnQkFBSztLQUMzQjtJQUVELHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0QsSUFBRTswQkFBQyxXQUFTOzs7OztvQkFBSzswQkFDbEIsOERBQUNBLElBQUU7O29CQUFDLFVBQVE7b0JBQUNQLGFBQWEsQ0FBQ1MsS0FBSzs7Ozs7O29CQUFNOzBCQUN0Qyw4REFBQ0YsSUFBRTs7b0JBQUMsVUFBUTtvQkFBQ1AsYUFBYSxDQUFDVSxLQUFLOzs7Ozs7b0JBQU07MEJBQ3RDLDhEQUFDSCxJQUFFOztvQkFBQyxjQUFZO29CQUFDUCxhQUFhLENBQUNXLFNBQVM7Ozs7OztvQkFBTTswQkFDOUMsOERBQUNKLElBQUU7O29CQUFDLGNBQVk7b0JBQUNQLGFBQWEsQ0FBQ1ksU0FBUzs7Ozs7O29CQUFNOzs7Ozs7WUFDMUMsQ0FDUDtDQUNGO0dBMUJRZixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUE0QmxCLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC50c3g/ZDdmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2Rhc2hib2FyZERhdGEsIHNldERhc2hib2FyZERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhc2hib2FyZERhdGEoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvZGFzaGJvYXJkJylcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIHNldERhc2hib2FyZERhdGEoZGF0YSlcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9XG4gICAgZmV0Y2hEYXNoYm9hcmREYXRhKClcbiAgfSwgW10pXG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8aDI+TG9hZGluZy4uLjwvaDI+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+RGFzaGJvYXJkPC9oMj5cbiAgICAgIDxoMj5Qb3N0cyAtIHtkYXNoYm9hcmREYXRhLnBvc3RzfTwvaDI+XG4gICAgICA8aDI+TGlrZXMgLSB7ZGFzaGJvYXJkRGF0YS5saWtlc308L2gyPlxuICAgICAgPGgyPkZvbGxvd2VycyAtIHtkYXNoYm9hcmREYXRhLmZvbGxvd2Vyc308L2gyPlxuICAgICAgPGgyPkZvbGxvd2luZyAtIHtkYXNoYm9hcmREYXRhLmZvbGxvd2luZ308L2gyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhc2hib2FyZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRhc2hib2FyZERhdGEiLCJzZXREYXNoYm9hcmREYXRhIiwiZmV0Y2hEYXNoYm9hcmREYXRhIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiaDIiLCJkaXYiLCJwb3N0cyIsImxpa2VzIiwiZm9sbG93ZXJzIiwiZm9sbG93aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n");

/***/ })

});