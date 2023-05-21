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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendgrid = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\nsendgrid.setApiKey(process.env.SENDGRID_API_KEY);\nasync function sendEmail(req, res) {\n    try {\n        await sendgrid.send({\n            to: \"tristanonfroy@gmail.com\",\n            from: \"tristanonfroy@gmail.com\",\n            subject: `${req.body.subject}`,\n            html: `<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n      \n        <title>The HTML5 Herald</title>\n        <meta name=\"description\" content=\"The HTML5 Herald\">\n        <meta name=\"author\" content=\"SitePoint\">\n      <meta http-equiv=\"Content-Type\" content=\"text/html charset=UTF-8\" />\n      \n        <link rel=\"stylesheet\" href=\"css/styles.css?v=1.0\">\n      \n      </head>\n      \n      <body>\n        <div class=\"img-container\" style=\"display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';\">              \n              </div>\n              <div class=\"container\" style=\"margin-left: 20px;margin-right: 20px;\">\n              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>\n              <div style=\"font-size: 16px;\">\n              <p>Message:</p>\n              <p>${req.body.message}</p>\n              <br>\n              </div>                \n              </div>\n              </div>\n      </body>\n      </html>`\n        });\n    } catch (error) {\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZGdyaWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDLHNDQUFnQjtBQUV6Q0QsU0FBU0UsU0FBUyxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtBQUUvQyxlQUFlQyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNqQyxJQUFJO1FBQ0YsTUFBTVIsU0FBU1MsSUFBSSxDQUFDO1lBQ2xCQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsU0FBUyxDQUFDLEVBQUVMLElBQUlNLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7WUFDOUJFLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQWtCZ0MsRUFBRVAsSUFBSU0sSUFBSSxDQUFDRSxRQUFRLENBQUMsb0JBQW9CLEVBQUVSLElBQUlNLElBQUksQ0FBQ0csS0FBSyxDQUFDOzs7aUJBR3JGLEVBQUVULElBQUlNLElBQUksQ0FBQ0ksT0FBTyxDQUFDOzs7Ozs7YUFNdkIsQ0FBQztRQUNWO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT1YsSUFBSVcsTUFBTSxDQUFDRCxNQUFNRSxVQUFVLElBQUksS0FBS0MsSUFBSSxDQUFDO1lBQUVILE9BQU9BLE1BQU1ELE9BQU87UUFBQztJQUN6RTtJQUVBLE9BQU9ULElBQUlXLE1BQU0sQ0FBQyxLQUFLRSxJQUFJLENBQUM7UUFBRUgsT0FBTztJQUFHO0FBQzFDO0FBRUEsaUVBQWVaLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VuZGdyaWQuanM/NTAyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZW5kZ3JpZCA9IHJlcXVpcmUoXCJAc2VuZGdyaWQvbWFpbFwiKTtcblxuc2VuZGdyaWQuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVkpO1xuXG5hc3luYyBmdW5jdGlvbiBzZW5kRW1haWwocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzZW5kZ3JpZC5zZW5kKHtcbiAgICAgIHRvOiBcInRyaXN0YW5vbmZyb3lAZ21haWwuY29tXCIsXG4gICAgICBmcm9tOiBcInRyaXN0YW5vbmZyb3lAZ21haWwuY29tXCIsXG4gICAgICBzdWJqZWN0OiBgJHtyZXEuYm9keS5zdWJqZWN0fWAsXG4gICAgICBodG1sOiBgPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFRyYW5zaXRpb25hbC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXRyYW5zaXRpb25hbC5kdGRcIj5cbiAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgICAgXG4gICAgICAgIDx0aXRsZT5UaGUgSFRNTDUgSGVyYWxkPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoZSBIVE1MNSBIZXJhbGRcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJTaXRlUG9pbnRcIj5cbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sIGNoYXJzZXQ9VVRGLThcIiAvPlxuICAgICAgXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL3N0eWxlcy5jc3M/dj0xLjBcIj5cbiAgICAgIFxuICAgICAgPC9oZWFkPlxuICAgICAgXG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtib3JkZXItcmFkaXVzOiA1cHg7b3ZlcmZsb3c6IGhpZGRlbjsgZm9udC1mYW1pbHk6ICdoZWx2ZXRpY2EnLCAndWktc2Fucyc7XCI+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAyMHB4O21hcmdpbi1yaWdodDogMjBweDtcIj5cbiAgICAgICAgICAgICAgPGgzPllvdSd2ZSBnb3QgYSBuZXcgbWFpbCBmcm9tICR7cmVxLmJvZHkuZnVsbG5hbWV9LCB0aGVpciBlbWFpbCBpczog4pyJ77iPJHtyZXEuYm9keS5lbWFpbH0gPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj5cbiAgICAgICAgICAgICAgPHA+TWVzc2FnZTo8L3A+XG4gICAgICAgICAgICAgIDxwPiR7cmVxLmJvZHkubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+YCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyhlcnJvci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXJyb3I6IFwiXCIgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlbmRFbWFpbDtcbiJdLCJuYW1lcyI6WyJzZW5kZ3JpZCIsInJlcXVpcmUiLCJzZXRBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiU0VOREdSSURfQVBJX0tFWSIsInNlbmRFbWFpbCIsInJlcSIsInJlcyIsInNlbmQiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwiYm9keSIsImh0bWwiLCJmdWxsbmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImVycm9yIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendgrid.js\n");

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