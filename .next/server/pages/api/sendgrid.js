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
exports.id = "pages/api/sendgrid";
exports.ids = ["pages/api/sendgrid"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./pages/api/sendgrid.js":
/*!*******************************!*\
  !*** ./pages/api/sendgrid.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendgrid = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\nsendgrid.setApiKey(process.env.SENDGRID_API_KEY);\nasync function sendEmail(req, res) {\n    try {\n        await sendgrid.send({\n            to: `${req.body.email}`,\n            from: \"tristanonfroy@gmail.com\",\n            subject: `${req.body.subject}`,\n            html: `${req.body.message}`\n        });\n    } catch (error) {\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZGdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDLHNDQUFnQjtBQUV6Q0QsU0FBU0UsU0FBUyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtBQUUvQyxlQUFlQyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqQyxJQUFJO1FBQ0YsTUFBTVIsU0FBU1MsSUFBSSxDQUFDO1lBQ2xCQyxJQUFJLENBQUMsRUFBRUgsSUFBSUksSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQztZQUN2QkMsTUFBTTtZQUNOQyxTQUFTLENBQUMsRUFBRVAsSUFBSUksSUFBSSxDQUFDRyxPQUFPLENBQUMsQ0FBQztZQUM5QkMsTUFBTSxDQUFDLEVBQUVSLElBQUlJLElBQUksQ0FBQ0ssT0FBTyxDQUFDLENBQUM7UUFDN0I7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZCxPQUFPVCxJQUFJVSxNQUFNLENBQUNELE1BQU1FLFVBQVUsSUFBSSxLQUFLQyxJQUFJLENBQUM7WUFBRUgsT0FBT0EsTUFBTUQsT0FBTztRQUFDO0lBQ3pFO0lBQ0EsT0FBT1IsSUFBSVUsTUFBTSxDQUFDLEtBQUtFLElBQUksQ0FBQztRQUFFSCxPQUFPO0lBQUc7QUFDMUM7QUFFQSxpRUFBZVgsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9zZW5kZ3JpZC5qcz81MDIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbmRncmlkID0gcmVxdWlyZShcIkBzZW5kZ3JpZC9tYWlsXCIpO1xuXG5zZW5kZ3JpZC5zZXRBcGlLZXkocHJvY2Vzcy5lbnYuU0VOREdSSURfQVBJX0tFWSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbChyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGF3YWl0IHNlbmRncmlkLnNlbmQoe1xuICAgICAgdG86IGAke3JlcS5ib2R5LmVtYWlsfWAsXG4gICAgICBmcm9tOiBcInRyaXN0YW5vbmZyb3lAZ21haWwuY29tXCIsXG4gICAgICBzdWJqZWN0OiBgJHtyZXEuYm9keS5zdWJqZWN0fWAsXG4gICAgICBodG1sOiBgJHtyZXEuYm9keS5tZXNzYWdlfWAsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBlcnJvcjogXCJcIiB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VuZEVtYWlsO1xuIl0sIm5hbWVzIjpbInNlbmRncmlkIiwicmVxdWlyZSIsInNldEFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJTRU5ER1JJRF9BUElfS0VZIiwic2VuZEVtYWlsIiwicmVxIiwicmVzIiwic2VuZCIsInRvIiwiYm9keSIsImVtYWlsIiwiZnJvbSIsInN1YmplY3QiLCJodG1sIiwibWVzc2FnZSIsImVycm9yIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendgrid.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendgrid.js"));
module.exports = __webpack_exports__;

})();