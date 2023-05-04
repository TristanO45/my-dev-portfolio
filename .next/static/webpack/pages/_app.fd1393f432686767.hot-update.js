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

/***/ "./components/SideNavbar.js":
/*!**********************************!*\
  !*** ./components/SideNavbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Sidebar component\nfunction SideNavbar() {\n    _s();\n    // useRouter hook will be used for navigating each page\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"px-4 w-[175px] h-screen fixed flex flex-col justify-between bg-[#141515]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: \"/PortfolioHS.jpg\",\n                    alt: \"Headshot\",\n                    width: \"150\",\n                    height: \"150\"\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-block\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-3 ml-2\",\n                        children: _data_data__WEBPACK_IMPORTED_MODULE_5__.sidebarMenu.map((link, index)=>{\n                            const { text , url , icon  } = link;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-[#5fefd0]\".concat(active === text ? \" active\" : \"\"),\n                                    onClick: (e)=>{\n                                        const target = document.querySelector(\"#\".concat(text.toLowerCase()));\n                                        console.log(target);\n                                        target.scrollIntoView();\n                                    },\n                                    children: [\n                                        icon,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"inline-block ml-4\",\n                                            children: text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 19\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                lineNumber: 27,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-row space-x-4 mb-14 ml-4\",\n                    children: _data_data__WEBPACK_IMPORTED_MODULE_5__.socialIcons.map((icons, index)=>{\n                        const { icon , url  } = icons;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: url,\n                            target: \"_blank\",\n                            children: icon\n                        }, index, false, {\n                            fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNavbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SideNavbar;\nvar _c;\n$RefreshReg$(_c, \"SideNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVOYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNXO0FBQ1Q7QUFDeUI7QUFFeEQsb0JBQW9CO0FBQ0wsU0FBU00sYUFBYTs7SUFDbkMsdURBQXVEO0lBQ3ZELE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixxQkFDRSw4REFBQ007UUFBTUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDTixtREFBS0E7b0JBQ0pRLEtBQUs7b0JBQ0xDLEtBQUk7b0JBQ0pDLE9BQU07b0JBQ05DLFFBQU87Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDQzswQkFDQyw0RUFBQ0w7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNPO3dCQUFHUCxXQUFVO2tDQUNYTCx1REFBZSxDQUFDLENBQUNjLE1BQU1DLFFBQVU7NEJBQ2hDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxJQUFHLEVBQUVDLEtBQUksRUFBRSxHQUFHSjs0QkFDNUIscUJBQ0UsOERBQUNLOzBDQUNDLDRFQUFDQztvQ0FBTWYsV0FBVyxpQkFBa0QsT0FBakNnQixXQUFXTCxPQUFPLFlBQVksRUFBRTtvQ0FDakVNLFNBQVMsQ0FBQ0MsSUFBTTt3Q0FDZCxNQUFNQyxTQUFTQyxTQUFTQyxhQUFhLENBQ25DLElBQXVCLE9BQW5CVixLQUFLVyxXQUFXO3dDQUV0QkMsUUFBUUMsR0FBRyxDQUFDTDt3Q0FDWkEsT0FBT00sY0FBYztvQ0FDdkI7O3dDQVNDWjtzREFDRCw4REFBQ2E7NENBQUUxQixXQUFVO3NEQUFxQlc7Ozs7Ozs7Ozs7OzsrQkFsQjdCRDs7Ozs7d0JBc0JiOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDVDswQkFDQyw0RUFBQ007b0JBQUdQLFdBQVU7OEJBQ1hKLHVEQUFlLENBQUMsQ0FBQytCLE9BQU9qQixRQUFVO3dCQUNqQyxNQUFNLEVBQUVHLEtBQUksRUFBRUQsSUFBRyxFQUFFLEdBQUdlO3dCQUN0QixxQkFDRSw4REFBQ0M7NEJBQUVDLE1BQU1qQjs0QkFBS08sUUFBTztzQ0FDbEJOOzJCQURnQ0g7Ozs7O29CQUl2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0dBM0R1QmI7O1FBRVBKLGtEQUFTQTs7O0tBRkZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZU5hdmJhci5qcz84ZDA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBzaWRlYmFyTWVudSwgc29jaWFsSWNvbnMgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5cbi8vIFNpZGViYXIgY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlTmF2YmFyKCkge1xuICAvLyB1c2VSb3V0ZXIgaG9vayB3aWxsIGJlIHVzZWQgZm9yIG5hdmlnYXRpbmcgZWFjaCBwYWdlXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJweC00IHctWzE3NXB4XSBoLXNjcmVlbiBmaXhlZCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy1bIzE0MTUxNV1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17XCIvUG9ydGZvbGlvSFMuanBnXCJ9XG4gICAgICAgICAgYWx0PVwiSGVhZHNob3RcIlxuICAgICAgICAgIHdpZHRoPVwiMTUwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNTBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTMgbWwtMlwiPlxuICAgICAgICAgICAge3NpZGViYXJNZW51Lm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB0ZXh0LCB1cmwsIGljb24gfSA9IGxpbms7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YHRleHQtWyM1ZmVmZDBdJHthY3RpdmUgPT09IHRleHQgPyBcIiBhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCMke3RleHQudG9Mb3dlckNhc2UoKX1gXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvLyBocmVmPXt1cmx9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgZFxuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vIHJvdXRlci5hc1BhdGggPT09IHVybFxuICAgICAgICAgICAgICAgICAgICAvLyAgIC8vICAgPyBcInRleHQtWyM1ZmVmZDBdXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAvLyAgIDogXCJ0ZXh0LVsjOWQ5ZDlkXVwiXG4gICAgICAgICAgICAgICAgICAgIC8vIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1sLTRcIj57dGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IG1iLTE0IG1sLTRcIj5cbiAgICAgICAgICB7c29jaWFsSWNvbnMubWFwKChpY29ucywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWNvbiwgdXJsIH0gPSBpY29ucztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FzaWRlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVJvdXRlciIsIkltYWdlIiwic2lkZWJhck1lbnUiLCJzb2NpYWxJY29ucyIsIlNpZGVOYXZiYXIiLCJyb3V0ZXIiLCJhc2lkZSIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibmF2IiwidWwiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJ0ZXh0IiwidXJsIiwiaWNvbiIsImxpIiwibGFiZWwiLCJhY3RpdmUiLCJvbkNsaWNrIiwiZSIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvTG93ZXJDYXNlIiwiY29uc29sZSIsImxvZyIsInNjcm9sbEludG9WaWV3IiwicCIsImljb25zIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SideNavbar.js\n"));

/***/ })

});