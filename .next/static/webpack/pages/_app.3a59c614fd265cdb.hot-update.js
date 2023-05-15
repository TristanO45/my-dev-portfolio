"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\n\n\n\nfunction Projects(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"h-[1400px] pt-[10vh]\",\n        id: props.id,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl text-[#57e0c3] font-serifFont\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center pt-[150px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 gap-2\",\n                    children: _data_data__WEBPACK_IMPORTED_MODULE_3__.projectCards.map((items, index)=>{\n                        const { title , desc , stack , gitHubUrl , imgUrl  } = items;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: imgUrl,\n                                        alt: \"screenshots\",\n                                        width: \"500\",\n                                        height: \"500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                        lineNumber: 16,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-2xl text-[#57e0c3] font-bold tracking-wider\",\n                                            children: title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100\",\n                                            children: desc\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100\",\n                                            children: [\n                                                \" \",\n                                                \"Built with: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 33\n                                                }, this),\n                                                \" \",\n                                                stack\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, \"index\", true, {\n                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNhO0FBRTVDLFNBQVNHLFNBQVNDLEtBQUssRUFBRTtJQUN2QixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTtRQUF1QkMsSUFBSUgsTUFBTUcsRUFBRTs7MEJBQ3BELDhEQUFDQztnQkFBR0YsV0FBVTswQkFBeUM7Ozs7OzswQkFDdkQsOERBQUNHO2dCQUFJSCxXQUFVOzBCQUNiLDRFQUFDRztvQkFBSUgsV0FBVTs4QkFDWkosd0RBQWdCLENBQUMsQ0FBQ1MsT0FBT0MsUUFBVTt3QkFDbEMsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLE9BQU0sRUFBRSxHQUFHTjt3QkFDbEQscUJBQ0UsOERBQUNGOzRCQUFnQkgsV0FBVTs7OENBQ3pCLDhEQUFDRztvQ0FBSUgsV0FBVTs4Q0FDYiw0RUFBQ0wsbURBQUtBO3dDQUNKaUIsS0FBS0Q7d0NBQ0xFLEtBQUk7d0NBQ0pDLE9BQU07d0NBQ05DLFFBQU87Ozs7Ozs7Ozs7OzhDQUdYLDhEQUFDWjtvQ0FBSUgsV0FBVTs7Ozs7OzhDQUNmLDhEQUFDRztvQ0FBSUgsV0FBVTs7c0RBQ2IsOERBQUNFOzRDQUFHRixXQUFVO3NEQUNYTzs7Ozs7O3NEQUVILDhEQUFDUzs0Q0FBRWhCLFdBQVU7c0RBQ1ZROzs7Ozs7c0RBRUgsOERBQUNROzRDQUFFaEIsV0FBVTs7Z0RBQ1Y7Z0RBQUk7OERBQ08sOERBQUNpQjs7Ozs7Z0RBQUs7Z0RBQUVSOzs7Ozs7Ozs7Ozs7OzsyQkFuQmpCOzs7OztvQkF3QmI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7S0F0Q1NaO0FBd0NULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzLmpzPzI1Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBwcm9qZWN0Q2FyZHMgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5cbmZ1bmN0aW9uIFByb2plY3RzKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC1bMTQwMHB4XSBwdC1bMTB2aF1cIiBpZD17cHJvcHMuaWR9PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIHRleHQtWyM1N2UwYzNdIGZvbnQtc2VyaWZGb250XCI+UHJvamVjdHM8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwdC1bMTUwcHhdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMlwiPlxuICAgICAgICAgIHtwcm9qZWN0Q2FyZHMubWFwKChpdGVtcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2MsIHN0YWNrLCBnaXRIdWJVcmwsIGltZ1VybCB9ID0gaXRlbXM7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT1cImluZGV4XCIgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLXNoYWRvdyBob3ZlcjpzaGFkb3cteGwgaG92ZXI6c2hhZG93LWJsYWNrLzMwIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3Zlcjpyb3RhdGUtMSBncm91cC1ob3ZlcjpzY2FsZS0xMjVcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ1VybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwic2NyZWVuc2hvdHNcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iIGZyb20tdHJhbnNwYXJlbnQgdmlhLXRyYW5zcGFyZW50IHRvLWJsYWNrIGdyb3VwLWhvdmVyOmZyb20tYmxhY2svNzAgZ3JvdXAtaG92ZXI6dmlhLWJsYWNrLzYwIGdyb3VwLWhvdmVyOnRvLWJsYWNrLzcwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggdHJhbnNsYXRlLXktWzEwMCVdIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC05IHRleHQtY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1bIzU3ZTBjM10gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zIHRleHQtbGcgaXRhbGljIHRleHQtd2hpdGUgb3BhY2l0eS0wIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2Rlc2N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1sZyBpdGFsaWMgdGV4dC13aGl0ZSBvcGFjaXR5LTAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIEJ1aWx0IHdpdGg6IDxiciAvPiB7c3RhY2t9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJwcm9qZWN0Q2FyZHMiLCJQcm9qZWN0cyIsInByb3BzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiaDEiLCJkaXYiLCJtYXAiLCJpdGVtcyIsImluZGV4IiwidGl0bGUiLCJkZXNjIiwic3RhY2siLCJnaXRIdWJVcmwiLCJpbWdVcmwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.js\n"));

/***/ })

});