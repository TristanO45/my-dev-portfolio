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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Sidebar component\nfunction SideNavbar() {\n    _s();\n    // useRouter hook will be used for navigating each page\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [colorChange, setColorChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Home\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"px-4 w-[175px] h-screen fixed flex flex-col justify-between bg-[#141515]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: \"/PortfolioHS.jpg\",\n                    alt: \"Headshot\",\n                    width: \"150\",\n                    height: \"150\"\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-block\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-3 ml-2 \",\n                        children: _data_data__WEBPACK_IMPORTED_MODULE_5__.sidebarMenu.map((link, index)=>{\n                            const { text , url , icon  } = link;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"cursor-pointer \".concat(colorChange === text ? \"text-[#5fefd0]\" : \"text-[#9d9d9d]\"),\n                                    onClick: (e)=>{\n                                        const target = document.querySelector(\"#\".concat(text.toLowerCase()));\n                                        if (target) {\n                                            setColorChange(text);\n                                            target && target.scrollIntoView();\n                                        } else {}\n                                        console.log(target);\n                                    },\n                                    children: [\n                                        icon,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"inline-block ml-4\",\n                                            children: text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 19\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-row space-x-4 mb-14 ml-4\",\n                    children: _data_data__WEBPACK_IMPORTED_MODULE_5__.socialIcons.map((icons, index)=>{\n                        const { icon , url  } = icons;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: url,\n                            target: \"_blank\",\n                            children: icon\n                        }, index, false, {\n                            fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNavbar, \"OgCfkvys0r7O8A0waW6NfnLptgw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SideNavbar;\nvar _c;\n$RefreshReg$(_c, \"SideNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVOYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNKO0FBQ1c7QUFDVDtBQUN5QjtBQUV4RCxvQkFBb0I7QUFDTCxTQUFTTyxhQUFhOztJQUNuQyx1REFBdUQ7SUFDdkQsTUFBTUMsU0FBU0wsc0RBQVNBO0lBRXhCLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMvQyxxQkFDRSw4REFBQ1U7UUFBTUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDUixtREFBS0E7b0JBQ0pVLEtBQUs7b0JBQ0xDLEtBQUk7b0JBQ0pDLE9BQU07b0JBQ05DLFFBQU87Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDQzswQkFDQyw0RUFBQ0w7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNPO3dCQUFHUCxXQUFVO2tDQUNYUCx1REFBZSxDQUFDLENBQUNnQixNQUFNQyxRQUFVOzRCQUNoQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsSUFBRyxFQUFFQyxLQUFJLEVBQUUsR0FBR0o7NEJBQzVCLHFCQUNFLDhEQUFDSzswQ0FDQyw0RUFBQ0M7b0NBQ0NmLFdBQVcsa0JBRVYsT0FEQ0gsZ0JBQWdCYyxPQUFPLG1CQUFtQixnQkFBZ0I7b0NBRTVESyxTQUFTLENBQUNDLElBQU07d0NBRWQsTUFBTUMsU0FBU0MsU0FBU0MsYUFBYSxDQUNuQyxJQUF1QixPQUFuQlQsS0FBS1UsV0FBVzt3Q0FFdEIsSUFBSUgsUUFBUTs0Q0FDVnBCLGVBQWVhOzRDQUNmTyxVQUFVQSxPQUFPSSxjQUFjO3dDQUNqQyxPQUFPLENBQUMsQ0FBQzt3Q0FDVEMsUUFBUUMsR0FBRyxDQUFDTjtvQ0FDZDs7d0NBR0NMO3NEQUNELDhEQUFDWTs0Q0FBRXpCLFdBQVU7c0RBQXFCVzs7Ozs7Ozs7Ozs7OytCQW5CN0JEOzs7Ozt3QkF1QmI7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSU4sOERBQUNUOzBCQUNDLDRFQUFDTTtvQkFBR1AsV0FBVTs4QkFDWE4sdURBQWUsQ0FBQyxDQUFDZ0MsT0FBT2hCLFFBQVU7d0JBQ2pDLE1BQU0sRUFBRUcsS0FBSSxFQUFFRCxJQUFHLEVBQUUsR0FBR2M7d0JBQ3RCLHFCQUNFLDhEQUFDQzs0QkFBRUMsTUFBTWhCOzRCQUFLTSxRQUFPO3NDQUNsQkw7MkJBRGdDSDs7Ozs7b0JBSXZDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWLENBQUM7R0E5RHVCZjs7UUFFUEosa0RBQVNBOzs7S0FGRkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlTmF2YmFyLmpzPzhkMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBzaWRlYmFyTWVudSwgc29jaWFsSWNvbnMgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5cbi8vIFNpZGViYXIgY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlTmF2YmFyKCkge1xuICAvLyB1c2VSb3V0ZXIgaG9vayB3aWxsIGJlIHVzZWQgZm9yIG5hdmlnYXRpbmcgZWFjaCBwYWdlXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtjb2xvckNoYW5nZSwgc2V0Q29sb3JDaGFuZ2VdID0gdXNlU3RhdGUoXCJIb21lXCIpO1xuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJweC00IHctWzE3NXB4XSBoLXNjcmVlbiBmaXhlZCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy1bIzE0MTUxNV1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17XCIvUG9ydGZvbGlvSFMuanBnXCJ9XG4gICAgICAgICAgYWx0PVwiSGVhZHNob3RcIlxuICAgICAgICAgIHdpZHRoPVwiMTUwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNTBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTMgbWwtMiBcIj5cbiAgICAgICAgICAgIHtzaWRlYmFyTWVudS5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdGV4dCwgdXJsLCBpY29uIH0gPSBsaW5rO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yQ2hhbmdlID09PSB0ZXh0ID8gXCJ0ZXh0LVsjNWZlZmQwXVwiIDogXCJ0ZXh0LVsjOWQ5ZDlkXVwiXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgIyR7dGV4dC50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbG9yQ2hhbmdlKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ICYmIHRhcmdldC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1sLTRcIj57dGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IG1iLTE0IG1sLTRcIj5cbiAgICAgICAgICB7c29jaWFsSWNvbnMubWFwKChpY29ucywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWNvbiwgdXJsIH0gPSBpY29ucztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FzaWRlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJzaWRlYmFyTWVudSIsInNvY2lhbEljb25zIiwiU2lkZU5hdmJhciIsInJvdXRlciIsImNvbG9yQ2hhbmdlIiwic2V0Q29sb3JDaGFuZ2UiLCJhc2lkZSIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibmF2IiwidWwiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJ0ZXh0IiwidXJsIiwiaWNvbiIsImxpIiwibGFiZWwiLCJvbkNsaWNrIiwiZSIsInRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvTG93ZXJDYXNlIiwic2Nyb2xsSW50b1ZpZXciLCJjb25zb2xlIiwibG9nIiwicCIsImljb25zIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SideNavbar.js\n"));

/***/ })

});