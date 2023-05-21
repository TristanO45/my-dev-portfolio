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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Sidebar component\nfunction SideNavbar() {\n    _s();\n    // useRouter hook will be used for navigating each page\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // Using this to update the state of the sidebar link color state\n    const [colorChange, setColorChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Home\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"px-4 w-[175px] h-screen fixed flex flex-col justify-between bg-[#141515]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hidden md:block\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: \"/PortfolioHS.jpg\",\n                        alt: \"Headshot\",\n                        width: \"150\",\n                        height: \"150\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inline-block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"space-y-3 ml-2 \",\n                            children: _data_data__WEBPACK_IMPORTED_MODULE_5__.sidebarMenu.map((link, index)=>{\n                                const { text , url , icon  } = link;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        // This is where we're updating the state of the link color based on clicks\n                                        className: \"cursor-pointer \".concat(colorChange === text ? \"text-[#5fefd0]\" : \"text-[#9d9d9d]\"),\n                                        // this on click is checking if one of the sidebar links has been clicked.\n                                        onClick: (e)=>{\n                                            const target = document.querySelector(\"#\".concat(text.toLowerCase()));\n                                            if (target) {\n                                                setColorChange(text);\n                                                target.scrollIntoView();\n                                            }\n                                        },\n                                        children: [\n                                            icon,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"inline-block ml-4\",\n                                                children: text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 19\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-row space-x-4 mb-14 ml-4\",\n                        children: _data_data__WEBPACK_IMPORTED_MODULE_5__.socialIcons.map((icons, index)=>{\n                            const { icon , url  } = icons;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: url,\n                                target: \"_blank\",\n                                children: icon\n                            }, index, false, {\n                                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNavbar, \"OgCfkvys0r7O8A0waW6NfnLptgw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SideNavbar;\nvar _c;\n$RefreshReg$(_c, \"SideNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVOYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNKO0FBQ1c7QUFDVDtBQUN5QjtBQUV4RCxvQkFBb0I7QUFDTCxTQUFTTyxhQUFhOztJQUNuQyx1REFBdUQ7SUFDdkQsTUFBTUMsU0FBU0wsc0RBQVNBO0lBRXhCLGlFQUFpRTtJQUNqRSxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MscUJBQ0UsOERBQUNVO1FBQU1DLFdBQVU7a0JBQ2YsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNmLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ1IsbURBQUtBO3dCQUNKVSxLQUFLO3dCQUNMQyxLQUFJO3dCQUNKQyxPQUFNO3dCQUNOQyxRQUFPOzs7Ozs7Ozs7Ozs4QkFHWCw4REFBQ0M7OEJBQ0MsNEVBQUNMO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDTzs0QkFBR1AsV0FBVTtzQ0FDWFAsdURBQWUsQ0FBQyxDQUFDZ0IsTUFBTUMsUUFBVTtnQ0FDaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLElBQUcsRUFBRUMsS0FBSSxFQUFFLEdBQUdKO2dDQUM1QixxQkFDRSw4REFBQ0s7OENBQ0MsNEVBQUNDO3dDQUNDLDJFQUEyRTt3Q0FDM0VmLFdBQVcsa0JBRVYsT0FEQ0gsZ0JBQWdCYyxPQUFPLG1CQUFtQixnQkFBZ0I7d0NBRTVELDBFQUEwRTt3Q0FDMUVLLFNBQVMsQ0FBQ0MsSUFBTTs0Q0FDZCxNQUFNQyxTQUFTQyxTQUFTQyxhQUFhLENBQ25DLElBQXVCLE9BQW5CVCxLQUFLVSxXQUFXOzRDQUV0QixJQUFJSCxRQUFRO2dEQUNWcEIsZUFBZWE7Z0RBQ2ZPLE9BQU9JLGNBQWM7NENBQ3ZCLENBQUM7d0NBQ0g7OzRDQUVDVDswREFDRCw4REFBQ1U7Z0RBQUV2QixXQUFVOzBEQUFxQlc7Ozs7Ozs7Ozs7OzttQ0FsQjdCRDs7Ozs7NEJBc0JiOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUlOLDhEQUFDVDs4QkFDQyw0RUFBQ007d0JBQUdQLFdBQVU7a0NBQ1hOLHVEQUFlLENBQUMsQ0FBQzhCLE9BQU9kLFFBQVU7NEJBQ2pDLE1BQU0sRUFBRUcsS0FBSSxFQUFFRCxJQUFHLEVBQUUsR0FBR1k7NEJBQ3RCLHFCQUNFLDhEQUFDQztnQ0FBRUMsTUFBTWQ7Z0NBQUtNLFFBQU87MENBQ2xCTDsrQkFEZ0NIOzs7Ozt3QkFJdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVixDQUFDO0dBaEV1QmY7O1FBRVBKLGtEQUFTQTs7O0tBRkZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZU5hdmJhci5qcz84ZDA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgc2lkZWJhck1lbnUsIHNvY2lhbEljb25zIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuXG4vLyBTaWRlYmFyIGNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZU5hdmJhcigpIHtcbiAgLy8gdXNlUm91dGVyIGhvb2sgd2lsbCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nIGVhY2ggcGFnZVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBVc2luZyB0aGlzIHRvIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHNpZGViYXIgbGluayBjb2xvciBzdGF0ZVxuICBjb25zdCBbY29sb3JDaGFuZ2UsIHNldENvbG9yQ2hhbmdlXSA9IHVzZVN0YXRlKFwiSG9tZVwiKTtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwicHgtNCB3LVsxNzVweF0gaC1zY3JlZW4gZml4ZWQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gYmctWyMxNDE1MTVdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG9cIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtcIi9Qb3J0Zm9saW9IUy5qcGdcIn1cbiAgICAgICAgICBhbHQ9XCJIZWFkc2hvdFwiXG4gICAgICAgICAgd2lkdGg9XCIxNTBcIlxuICAgICAgICAgIGhlaWdodD1cIjE1MFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMyBtbC0yIFwiPlxuICAgICAgICAgICAge3NpZGViYXJNZW51Lm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB0ZXh0LCB1cmwsIGljb24gfSA9IGxpbms7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgd2hlcmUgd2UncmUgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIHRoZSBsaW5rIGNvbG9yIGJhc2VkIG9uIGNsaWNrc1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yQ2hhbmdlID09PSB0ZXh0ID8gXCJ0ZXh0LVsjNWZlZmQwXVwiIDogXCJ0ZXh0LVsjOWQ5ZDlkXVwiXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG9uIGNsaWNrIGlzIGNoZWNraW5nIGlmIG9uZSBvZiB0aGUgc2lkZWJhciBsaW5rcyBoYXMgYmVlbiBjbGlja2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgIyR7dGV4dC50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbG9yQ2hhbmdlKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1sLTRcIj57dGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgc3BhY2UteC00IG1iLTE0IG1sLTRcIj5cbiAgICAgICAgICB7c29jaWFsSWNvbnMubWFwKChpY29ucywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWNvbiwgdXJsIH0gPSBpY29ucztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsInNpZGViYXJNZW51Iiwic29jaWFsSWNvbnMiLCJTaWRlTmF2YmFyIiwicm91dGVyIiwiY29sb3JDaGFuZ2UiLCJzZXRDb2xvckNoYW5nZSIsImFzaWRlIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYXYiLCJ1bCIsIm1hcCIsImxpbmsiLCJpbmRleCIsInRleHQiLCJ1cmwiLCJpY29uIiwibGkiLCJsYWJlbCIsIm9uQ2xpY2siLCJlIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9Mb3dlckNhc2UiLCJzY3JvbGxJbnRvVmlldyIsInAiLCJpY29ucyIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SideNavbar.js\n"));

/***/ })

});