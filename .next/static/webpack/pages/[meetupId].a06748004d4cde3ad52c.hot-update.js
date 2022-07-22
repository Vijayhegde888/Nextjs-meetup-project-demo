webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");

var _jsxFileName = "D:\\vijay\\react-learning\\NEXT JS\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId]\\index.js";




function MeetupDetails(props) {
  console.log('props', props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Nextjs Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        value: "Add your Own Meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_c = MeetupDetails;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibWVldHVwRGF0YSIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0FBRUE7QUFFQTs7QUFDQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE2QjtBQUN6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFvQkYsS0FBcEI7QUFDQSxzQkFDSSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdJO0FBQ0EsWUFBSSxFQUFDLGFBREw7QUFFQSxhQUFLLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSSxxRUFBQyx3RUFBRDtBQUNDLFdBQUssRUFBRUEsS0FBSyxDQUFDRyxVQUFOLENBQWlCQyxLQUR6QjtBQUVBLFdBQUssRUFBRUosS0FBSyxDQUFDRyxVQUFOLENBQWlCRSxLQUZ4QjtBQUdBLGFBQU8sRUFBRUwsS0FBSyxDQUFDRyxVQUFOLENBQWlCRyxPQUgxQjtBQUlBLGlCQUFXLEVBQUVOLEtBQUssQ0FBQ0csVUFBTixDQUFpQkk7QUFKOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJDOztLQXJCSVIsYTs7QUFnRVVBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBJZF0uYTA2NzQ4MDA0ZDRjZGUzYWQ1MmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkJylcbiIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW9uZ29DbGllbnQsT2JqZWN0SWR9IGZyb20gJ21vbmdvZGInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscyhwcm9wcyl7XHJcbiAgICBjb25zb2xlLmxvZygncHJvcHMnLHByb3BzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG5cclxuICAgICAgICAgICAgPHRpdGxlPk5leHRqcyBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiQWRkIHlvdXIgT3duIE1lZXR1cFwiXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNZWV0dXBEZXRhaWxcclxuICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxyXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cclxuICAgICAgICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsaWVudD1hd2FpdCAgTW9uZ29DbGllbnQuY29ubmVjdCggXCJtb25nb2RiK3NydjovL3ZpamF5aGVnZGU4ODg6MTIzNEBjbHVzdGVyMC5nenk3eC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpXHJcbiAgICAgICAgY29uc3QgZGI9IGNsaWVudC5kYigpO1xyXG4gICAgICAgIGNvbnN0IG1lZXRVcHNjb2xsZWN0aW9uID1kYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICAgICAgY29uc3QgbWVldHVwcz1hd2FpdCBtZWV0VXBzY29sbGVjdGlvbi5maW5kKHt9LHtfaWQ6MX0pLnRvQXJyYXkoKTtcclxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmYWxsYmFjazpmYWxzZSxcclxuICAgICAgICAgICAgcGF0aHM6bWVldHVwcy5tYXAobWVhdHVwPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZXR1cElkOm1lYXR1cC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xyXG5cclxuICAgICAgICBjb25zdCBtZWV0dXBJZD0gY29udGV4dC5wYXJhbXMubWVldHVwSWRcclxuICAgICAgICBjb25zdCBjbGllbnQ9YXdhaXQgIE1vbmdvQ2xpZW50LmNvbm5lY3QoIFwibW9uZ29kYitzcnY6Ly92aWpheWhlZ2RlODg4OjEyMzRAY2x1c3RlcjAuZ3p5N3gubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiKVxyXG4gICAgICAgIGNvbnN0IGRiPSBjbGllbnQuZGIoKTtcclxuICAgICAgICBjb25zdCBtZWV0VXBzY29sbGVjdGlvbiA9ZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTWVldHVwPWF3YWl0IG1lZXRVcHNjb2xsZWN0aW9uLmZpbmRPbmUoe19pZDpPYmplY3RJZChtZWV0dXBJZCl9KVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gZmV0Y2ggZGF0YSBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICAgICBtZWV0dXBEYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBpZDpzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTpzZWxlY3RlZE1lZXR1cC5kYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6c2VsZWN0ZWRNZWV0dXAuZGF0YS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOnNlbGVjdGVkTWVldHVwLmRhdGEuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246c2VsZWN0ZWRNZWV0dXAuZGF0YS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsczsiXSwic291cmNlUm9vdCI6IiJ9