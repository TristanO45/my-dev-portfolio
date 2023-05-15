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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\n\n\n\nfunction Projects(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"h-[1400px] pt-[10vh]\",\n        id: props.id,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl text-[#57e0c3] font-serifFont\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center pt-[150px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 gap-2\",\n                    children: _data_data__WEBPACK_IMPORTED_MODULE_3__.projectCards.map((items, index)=>{\n                        const { title , desc , stack , gitHubUrl , imgUrl  } = items;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: imgUrl,\n                                        alt: \"screenshots\",\n                                        width: \"500\",\n                                        height: \"500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                        lineNumber: 16,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-2xl text-[#57e0c3] font-bold tracking-wider\",\n                                            children: title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100\",\n                                            children: desc\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100\",\n                                            children: [\n                                                \" \",\n                                                \"Built with: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 33\n                                                }, this),\n                                                \" \",\n                                                stack\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, \"index\", true, {\n                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNhO0FBRTVDLFNBQVNHLFNBQVNDLEtBQUssRUFBRTtJQUN2QixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTtRQUF1QkMsSUFBSUgsTUFBTUcsRUFBRTs7MEJBQ3BELDhEQUFDQztnQkFBR0YsV0FBVTswQkFBeUM7Ozs7OzswQkFDdkQsOERBQUNHO2dCQUFJSCxXQUFVOzBCQUNiLDRFQUFDRztvQkFBSUgsV0FBVTs4QkFDWkosd0RBQWdCLENBQUMsQ0FBQ1MsT0FBT0MsUUFBVTt3QkFDbEMsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLE9BQU0sRUFBRSxHQUFHTjt3QkFDbEQscUJBQ0UsOERBQUNGOzRCQUFlSCxXQUFVOzs4Q0FDeEIsOERBQUNHO29DQUFJSCxXQUFVOzhDQUNiLDRFQUFDTCxtREFBS0E7d0NBQ0ppQixLQUFLRDt3Q0FDTEUsS0FBSTt3Q0FDSkMsT0FBTTt3Q0FDTkMsUUFBTzs7Ozs7Ozs7Ozs7OENBR1gsOERBQUNaO29DQUFJSCxXQUFVOzs7Ozs7OENBQ2YsOERBQUNHO29DQUFJSCxXQUFVOztzREFDYiw4REFBQ0U7NENBQUdGLFdBQVU7c0RBQ1hPOzs7Ozs7c0RBRUgsOERBQUNTOzRDQUFFaEIsV0FBVTtzREFDVlE7Ozs7OztzREFFSCw4REFBQ1E7NENBQUVoQixXQUFVOztnREFDVjtnREFBSTs4REFDTyw4REFBQ2lCOzs7OztnREFBSztnREFBRVI7Ozs7Ozs7Ozs7Ozs7OzJCQW5CakI7Ozs7O29CQXdCYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtLQXRDU1o7QUF3Q1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/MjVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHByb2plY3RDYXJkcyB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcblxuZnVuY3Rpb24gUHJvamVjdHMocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoLVsxNDAwcHhdIHB0LVsxMHZoXVwiIGlkPXtwcm9wcy5pZH0+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgdGV4dC1bIzU3ZTBjM10gZm9udC1zZXJpZkZvbnRcIj5Qcm9qZWN0czwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LVsxNTBweF1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAge3Byb2plY3RDYXJkcy5tYXAoKGl0ZW1zLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB0aXRsZSwgZGVzYywgc3RhY2ssIGdpdEh1YlVybCwgaW1nVXJsIH0gPSBpdGVtcztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PVwiaW5kZXhcImNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1zaGFkb3cgaG92ZXI6c2hhZG93LXhsIGhvdmVyOnNoYWRvdy1ibGFjay8zMCBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZ3JvdXAtaG92ZXI6cm90YXRlLTEgZ3JvdXAtaG92ZXI6c2NhbGUtMTI1XCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWdVcmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInNjcmVlbnNob3RzXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXRyYW5zcGFyZW50IHZpYS10cmFuc3BhcmVudCB0by1ibGFjayBncm91cC1ob3Zlcjpmcm9tLWJsYWNrLzcwIGdyb3VwLWhvdmVyOnZpYS1ibGFjay82MCBncm91cC1ob3Zlcjp0by1ibGFjay83MFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IHRyYW5zbGF0ZS15LVsxMDAlXSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtOSB0ZXh0LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktMFwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtWyM1N2UwYzNdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyB0ZXh0LWxnIGl0YWxpYyB0ZXh0LXdoaXRlIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkZXNjfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtbGcgaXRhbGljIHRleHQtd2hpdGUgb3BhY2l0eS0wIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBCdWlsdCB3aXRoOiA8YnIgLz4ge3N0YWNrfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwicHJvamVjdENhcmRzIiwiUHJvamVjdHMiLCJwcm9wcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpZCIsImgxIiwiZGl2IiwibWFwIiwiaXRlbXMiLCJpbmRleCIsInRpdGxlIiwiZGVzYyIsInN0YWNrIiwiZ2l0SHViVXJsIiwiaW1nVXJsIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n"));

/***/ })

});