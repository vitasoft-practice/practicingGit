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

/***/ "./pages/event.tsx":
/*!*************************!*\
  !*** ./pages/event.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction EventList(param) {\n    var eventList = param.eventList;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(eventList), events = ref[0], setEvents = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var fetchSportsEvents = function() {\n        var _ref = _asyncToGenerator(_home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _home_vita_ubuntu_dev_01_Projects_practicingGit_Siva_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"http://localhost:4000/events?category=sports\");\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        setEvents(data);\n                        router.push(\"/events?category=sports\", undefined, {\n                            shallow: true\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchSportsEvents() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: fetchSportsEvents,\n                children: \"Sports Events\"\n            }, void 0, false, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"List of events\"\n            }, void 0, false, {\n                fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            events.map(function(event) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: [\n                                event.id,\n                                \" \",\n                                event.title,\n                                \" \",\n                                event.date,\n                                \" | \",\n                                event.category\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: event.description\n                        }, void 0, false, {\n                            fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, event.id, true, {\n                    fileName: \"/home/vita-ubuntu-dev-01/Projects/practicingGit/Siva/pages/event.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true);\n}\n_s(EventList, \"o5lPhI5J+V17ZT+kIwfAacHOPZ0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = EventList;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventList);\nvar _c;\n$RefreshReg$(_c, \"EventList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTzs7QUFNdkMsU0FBU0UsU0FBUyxDQUFDLEtBQWEsRUFBRTtRQUFmLFNBQVcsR0FBWCxLQUFhLENBQVhDLFNBQVM7OztJQUM1QixJQUE0QkgsR0FBbUIsR0FBbkJBLCtDQUFRLENBQUNHLFNBQVMsQ0FBQyxFQVJqRCxNQVFlLEdBQWVILEdBQW1CLEdBQWxDLEVBUmYsU0FRMEIsR0FBSUEsR0FBbUIsR0FBdkI7SUFDeEIsSUFBTU0sTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBRTFCLElBQU1NLGlCQUFpQjttQkFBRyxxTUFBWTtnQkFDOUJDLFFBQVEsRUFDUkMsSUFBSTs7Ozs7K0JBRGFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQzs7d0JBQXRFRixRQUFRLFlBQThEOzsrQkFDekRBLFFBQVEsQ0FBQ0csSUFBSSxFQUFFOzt3QkFBNUJGLElBQUksWUFBd0I7d0JBQ2xDSixTQUFTLENBQUNJLElBQUksQ0FBQzt3QkFDZkgsTUFBTSxDQUFDTSxJQUFJLENBQUMseUJBQXlCLEVBQUVDLFNBQVMsRUFBRTs0QkFBRUMsT0FBTyxFQUFFLElBQUk7eUJBQUUsQ0FBQzs7Ozs7O1NBQ3JFO3dCQUxLUCxpQkFBaUI7OztPQUt0QjtJQUNELHFCQUNFOzswQkFDRSw4REFBQ1EsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFVCxpQkFBaUI7MEJBQUUsZUFBYTs7Ozs7b0JBQVM7MEJBQzFELDhEQUFDVSxJQUFFOzBCQUFDLGdCQUFjOzs7OztvQkFBSztZQUN0QmIsTUFBTSxDQUFDYyxHQUFHLENBQUNDLFNBQUFBLEtBQUssRUFBSTtnQkFDbkIscUJBQ0UsOERBQUNDLEtBQUc7O3NDQUNGLDhEQUFDQyxJQUFFOztnQ0FDQUYsS0FBSyxDQUFDRyxFQUFFO2dDQUFDLEdBQUM7Z0NBQUNILEtBQUssQ0FBQ0ksS0FBSztnQ0FBQyxHQUFDO2dDQUFDSixLQUFLLENBQUNLLElBQUk7Z0NBQUMsS0FBRztnQ0FBQ0wsS0FBSyxDQUFDTSxRQUFROzs7Ozs7aUNBQ3BEO3NDQUNMLDhEQUFDQyxHQUFDO3NDQUFFUCxLQUFLLENBQUNRLFdBQVc7Ozs7O2lDQUFLO3NDQUMxQiw4REFBQ0MsSUFBRTs7OztpQ0FBRzs7bUJBTEVULEtBQUssQ0FBQ0csRUFBRTs7Ozt5QkFNWixDQUNQO2FBQ0YsQ0FBQzs7b0JBQ0QsQ0FDSjtDQUNGO0dBM0JRcEIsU0FBUzs7UUFFREQsa0RBQVM7OztBQUZqQkMsS0FBQUEsU0FBUzs7QUE2QmxCLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50LnRzeD9kMTAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW50ZXJmYWNlIGV2ZW50cHJvcHN7XG4gICAgZXZlbnRsaXN0IDogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEV2ZW50TGlzdCh7IGV2ZW50TGlzdCB9KSB7XG4gIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShldmVudExpc3QpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgZmV0Y2hTcG9ydHNFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2V2ZW50cz9jYXRlZ29yeT1zcG9ydHMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBzZXRFdmVudHMoZGF0YSlcbiAgICByb3V0ZXIucHVzaCgnL2V2ZW50cz9jYXRlZ29yeT1zcG9ydHMnLCB1bmRlZmluZWQsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17ZmV0Y2hTcG9ydHNFdmVudHN9PlNwb3J0cyBFdmVudHM8L2J1dHRvbj5cbiAgICAgIDxoMT5MaXN0IG9mIGV2ZW50czwvaDE+XG4gICAgICB7ZXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2V2ZW50LmlkfT5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAge2V2ZW50LmlkfSB7ZXZlbnQudGl0bGV9IHtldmVudC5kYXRlfSB8IHtldmVudC5jYXRlZ29yeX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TGlzdFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gY29udGV4dFxuICBjb25zdCB7IGNhdGVnb3J5IH0gPSBxdWVyeVxuICBjb25zdCBxdWVyeVN0cmluZyA9IGNhdGVnb3J5ID8gJ2NhdGVnb3J5PXNwb3J0cycgOiAnJ1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvZXZlbnRzPyR7cXVlcnlTdHJpbmd9YClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGV2ZW50TGlzdDogZGF0YVxuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkV2ZW50TGlzdCIsImV2ZW50TGlzdCIsImV2ZW50cyIsInNldEV2ZW50cyIsInJvdXRlciIsImZldGNoU3BvcnRzRXZlbnRzIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwicHVzaCIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJtYXAiLCJldmVudCIsImRpdiIsImgyIiwiaWQiLCJ0aXRsZSIsImRhdGUiLCJjYXRlZ29yeSIsInAiLCJkZXNjcmlwdGlvbiIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/event.tsx\n");

/***/ })

});