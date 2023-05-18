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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\n\n\n\nfunction Projects(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"h-[75rem] pt-[10vh]\",\n        id: props.id,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"absolute opacity-40 mix-blend-overlay right-0 -my-40 \",\n                src: \"/Project.png\",\n                alt: \"logo\",\n                width: 1000,\n                height: 1000\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl text-[#57e0c3] font-serifFont\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center pt-[150px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 gap-6\",\n                    children: _data_data__WEBPACK_IMPORTED_MODULE_3__.projectCards.map((items, index)=>{\n                        const { title , desc , stack , gitHubUrl , imgUrl  } = items;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: imgUrl,\n                                        alt: \"screenshots\",\n                                        width: \"500\",\n                                        height: \"500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-2xl text-[#57e0c3] font-bold tracking-wider\",\n                                            children: title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100\",\n                                            children: desc\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100\",\n                                            children: [\n                                                \" \",\n                                                \"Built with: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 33\n                                                }, this),\n                                                \" \",\n                                                stack\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                            lineNumber: 21,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tristamon/Coding/myPortfolio/pages/projects.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNhO0FBRTVDLFNBQVNHLFNBQVNDLEtBQUssRUFBRTtJQUN2QixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTtRQUFzQkMsSUFBSUgsTUFBTUcsRUFBRTs7MEJBQ25ELDhEQUFDQztnQkFDR0YsV0FBVTtnQkFDVkcsS0FBSztnQkFDTEMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7OzBCQUVaLDhEQUFDQztnQkFBR1AsV0FBVTswQkFBeUM7Ozs7OzswQkFDdkQsOERBQUNRO2dCQUFJUixXQUFVOzBCQUNiLDRFQUFDUTtvQkFBSVIsV0FBVTs4QkFDWkosd0RBQWdCLENBQUMsQ0FBQ2MsT0FBT0MsUUFBVTt3QkFDbEMsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLE9BQU0sRUFBRSxHQUFHTjt3QkFDbEQscUJBQ0UsOERBQUNGOzRCQUVDUixXQUFVOzs4Q0FFViw4REFBQ1E7b0NBQUlSLFdBQVU7OENBQ2IsNEVBQUNMLG1EQUFLQTt3Q0FDSlEsS0FBS2E7d0NBQ0xaLEtBQUk7d0NBQ0pDLE9BQU07d0NBQ05DLFFBQU87Ozs7Ozs7Ozs7OzhDQUdYLDhEQUFDRTtvQ0FBSVIsV0FBVTs7Ozs7OzhDQUNmLDhEQUFDUTtvQ0FBSVIsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUFHUCxXQUFVO3NEQUNYWTs7Ozs7O3NEQUVILDhEQUFDSzs0Q0FBRWpCLFdBQVU7c0RBQ1ZhOzs7Ozs7c0RBRUgsOERBQUNJOzRDQUFFakIsV0FBVTs7Z0RBQ1Y7Z0RBQUk7OERBQ08sOERBQUNrQjs7Ozs7Z0RBQUs7Z0RBQUVKOzs7Ozs7Ozs7Ozs7OzsyQkFyQm5CSDs7Ozs7b0JBMEJYOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0tBaERTZDtBQWtEVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy5qcz8yNWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgcHJvamVjdENhcmRzIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuXG5mdW5jdGlvbiBQcm9qZWN0cyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImgtWzc1cmVtXSBwdC1bMTB2aF1cIiBpZD17cHJvcHMuaWR9PlxuICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIG9wYWNpdHktNDAgbWl4LWJsZW5kLW92ZXJsYXkgcmlnaHQtMCAtbXktNDAgXCJcbiAgICAgICAgICBzcmM9e1wiL1Byb2plY3QucG5nXCJ9XG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICAgICAgaGVpZ2h0PXsxMDAwfVxuICAgICAgICAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIHRleHQtWyM1N2UwYzNdIGZvbnQtc2VyaWZGb250XCI+UHJvamVjdHM8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwdC1bMTUwcHhdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgIHtwcm9qZWN0Q2FyZHMubWFwKChpdGVtcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2MsIHN0YWNrLCBnaXRIdWJVcmwsIGltZ1VybCB9ID0gaXRlbXM7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tc2hhZG93IGhvdmVyOnNoYWRvdy14bCBob3ZlcjpzaGFkb3ctYmxhY2svMzAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3Zlcjpyb3RhdGUtMSBncm91cC1ob3ZlcjpzY2FsZS0xMjVcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ1VybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwic2NyZWVuc2hvdHNcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iIGZyb20tdHJhbnNwYXJlbnQgdmlhLXRyYW5zcGFyZW50IHRvLWJsYWNrLzIwIGdyb3VwLWhvdmVyOmZyb20tYmxhY2svNzAgZ3JvdXAtaG92ZXI6dmlhLWJsYWNrLzYwIGdyb3VwLWhvdmVyOnRvLWJsYWNrLzcwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggdHJhbnNsYXRlLXktWzEwMCVdIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC05IHRleHQtY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1bIzU3ZTBjM10gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zIHRleHQtbGcgaXRhbGljIHRleHQtd2hpdGUgb3BhY2l0eS0wIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2Rlc2N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1sZyBpdGFsaWMgdGV4dC13aGl0ZSBvcGFjaXR5LTAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIEJ1aWx0IHdpdGg6IDxiciAvPiB7c3RhY2t9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJwcm9qZWN0Q2FyZHMiLCJQcm9qZWN0cyIsInByb3BzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsImRpdiIsIm1hcCIsIml0ZW1zIiwiaW5kZXgiLCJ0aXRsZSIsImRlc2MiLCJzdGFjayIsImdpdEh1YlVybCIsImltZ1VybCIsInAiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.js\n"));

/***/ })

});