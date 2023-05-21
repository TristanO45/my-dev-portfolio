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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Sidebar component\nfunction SideNavbar() {\n    _s();\n    // useRouter hook will be used for navigating each page\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // Using this to update the state of the sidebar link color state\n    const [colorChange, setColorChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Home\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"px-4 w-[175px] h-screen fixed flex flex-col justify-between bg-[#141515]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-auto \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: \"/PortfolioHS.jpg\",\n                    alt: \"Headshot\",\n                    width: \"150\",\n                    height: \"150\"\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-block\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-3 ml-2 \",\n                        children: _data_data__WEBPACK_IMPORTED_MODULE_5__.sidebarMenu.map((link, index)=>{\n                            const { text , url , icon  } = link;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    // This is where we're updating the state of the link color based on clicks\n                                    className: \"cursor-pointer \".concat(colorChange === text ? \"text-[#5fefd0]\" : \"text-[#9d9d9d]\"),\n                                    // this on click is checking if one of the sidebar links has been clicked.\n                                    onClick: (e)=>{\n                                        const target = document.querySelector(\"#\".concat(text.toLowerCase()));\n                                        if (target) {\n                                            setColorChange(text);\n                                            target.scrollIntoView();\n                                        }\n                                    },\n                                    children: [\n                                        icon,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"inline-block ml-4\",\n                                            children: text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 19\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-row space-x-4 mb-14 ml-4\",\n                    children: _data_data__WEBPACK_IMPORTED_MODULE_5__.socialIcons.map((icons, index)=>{\n                        const { icon , url  } = icons;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: url,\n                            target: \"_blank\",\n                            children: icon\n                        }, index, false, {\n                            fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tristamon/Coding/myPortfolio/components/SideNavbar.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNavbar, \"OgCfkvys0r7O8A0waW6NfnLptgw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SideNavbar;\nvar _c;\n$RefreshReg$(_c, \"SideNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVOYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNKO0FBQ1c7QUFDVDtBQUN5QjtBQUV4RCxvQkFBb0I7QUFDTCxTQUFTTyxhQUFhOztJQUNuQyx1REFBdUQ7SUFDdkQsTUFBTUMsU0FBU0wsc0RBQVNBO0lBRXhCLGlFQUFpRTtJQUNqRSxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MscUJBQ0UsOERBQUNVO1FBQU1DLFdBQVU7OzBCQUNmLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ1IsbURBQUtBO29CQUNKVSxLQUFLO29CQUNMQyxLQUFJO29CQUNKQyxPQUFNO29CQUNOQyxRQUFPOzs7Ozs7Ozs7OzswQkFHWCw4REFBQ0M7MEJBQ0MsNEVBQUNMO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDTzt3QkFBR1AsV0FBVTtrQ0FDWFAsdURBQWUsQ0FBQyxDQUFDZ0IsTUFBTUMsUUFBVTs0QkFDaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLElBQUcsRUFBRUMsS0FBSSxFQUFFLEdBQUdKOzRCQUM1QixxQkFDRSw4REFBQ0s7MENBQ0MsNEVBQUNDO29DQUNDLDJFQUEyRTtvQ0FDM0VmLFdBQVcsa0JBRVYsT0FEQ0gsZ0JBQWdCYyxPQUFPLG1CQUFtQixnQkFBZ0I7b0NBRTVELDBFQUEwRTtvQ0FDMUVLLFNBQVMsQ0FBQ0MsSUFBTTt3Q0FDZCxNQUFNQyxTQUFTQyxTQUFTQyxhQUFhLENBQ25DLElBQXVCLE9BQW5CVCxLQUFLVSxXQUFXO3dDQUV0QixJQUFJSCxRQUFROzRDQUNWcEIsZUFBZWE7NENBQ2ZPLE9BQU9JLGNBQWM7d0NBQ3ZCLENBQUM7b0NBQ0g7O3dDQUVDVDtzREFDRCw4REFBQ1U7NENBQUV2QixXQUFVO3NEQUFxQlc7Ozs7Ozs7Ozs7OzsrQkFsQjdCRDs7Ozs7d0JBc0JiOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDVDswQkFDQyw0RUFBQ007b0JBQUdQLFdBQVU7OEJBQ1hOLHVEQUFlLENBQUMsQ0FBQzhCLE9BQU9kLFFBQVU7d0JBQ2pDLE1BQU0sRUFBRUcsS0FBSSxFQUFFRCxJQUFHLEVBQUUsR0FBR1k7d0JBQ3RCLHFCQUNFLDhEQUFDQzs0QkFBRUMsTUFBTWQ7NEJBQUtNLFFBQU87c0NBQ2xCTDsyQkFEZ0NIOzs7OztvQkFJdkM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQTlEdUJmOztRQUVQSixrREFBU0E7OztLQUZGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGVOYXZiYXIuanM/OGQwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHNpZGViYXJNZW51LCBzb2NpYWxJY29ucyB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcblxuLy8gU2lkZWJhciBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXZiYXIoKSB7XG4gIC8vIHVzZVJvdXRlciBob29rIHdpbGwgYmUgdXNlZCBmb3IgbmF2aWdhdGluZyBlYWNoIHBhZ2VcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gVXNpbmcgdGhpcyB0byB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBzaWRlYmFyIGxpbmsgY29sb3Igc3RhdGVcbiAgY29uc3QgW2NvbG9yQ2hhbmdlLCBzZXRDb2xvckNoYW5nZV0gPSB1c2VTdGF0ZShcIkhvbWVcIik7XG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cInB4LTQgdy1bMTc1cHhdIGgtc2NyZWVuIGZpeGVkIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGJnLVsjMTQxNTE1XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17XCIvUG9ydGZvbGlvSFMuanBnXCJ9XG4gICAgICAgICAgYWx0PVwiSGVhZHNob3RcIlxuICAgICAgICAgIHdpZHRoPVwiMTUwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxNTBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTMgbWwtMiBcIj5cbiAgICAgICAgICAgIHtzaWRlYmFyTWVudS5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdGV4dCwgdXJsLCBpY29uIH0gPSBsaW5rO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHdoZXJlIHdlJ3JlIHVwZGF0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgbGluayBjb2xvciBiYXNlZCBvbiBjbGlja3NcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvckNoYW5nZSA9PT0gdGV4dCA/IFwidGV4dC1bIzVmZWZkMF1cIiA6IFwidGV4dC1bIzlkOWQ5ZF1cIlxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBvbiBjbGljayBpcyBjaGVja2luZyBpZiBvbmUgb2YgdGhlIHNpZGViYXIgbGlua3MgaGFzIGJlZW4gY2xpY2tlZC5cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCMke3RleHQudG9Mb3dlckNhc2UoKX1gXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xvckNoYW5nZSh0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtbC00XCI+e3RleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtNCBtYi0xNCBtbC00XCI+XG4gICAgICAgICAge3NvY2lhbEljb25zLm1hcCgoaWNvbnMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGljb24sIHVybCB9ID0gaWNvbnM7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVJvdXRlciIsIkltYWdlIiwic2lkZWJhck1lbnUiLCJzb2NpYWxJY29ucyIsIlNpZGVOYXZiYXIiLCJyb3V0ZXIiLCJjb2xvckNoYW5nZSIsInNldENvbG9yQ2hhbmdlIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hdiIsInVsIiwibWFwIiwibGluayIsImluZGV4IiwidGV4dCIsInVybCIsImljb24iLCJsaSIsImxhYmVsIiwib25DbGljayIsImUiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b0xvd2VyQ2FzZSIsInNjcm9sbEludG9WaWV3IiwicCIsImljb25zIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SideNavbar.js\n"));

/***/ })

});