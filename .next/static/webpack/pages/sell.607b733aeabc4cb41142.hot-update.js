self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\HPHamsa\\SickFit\\Advanced-React\\sick-fits\\frontend\\components\\CreateProduct.js",
    _s = $RefreshSig$();


function CreateProduct() {
  _s();

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_1__.default)({
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!'
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(F, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: "name",
      children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "Name",
        value: inputs.name,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: "price",
      children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "number",
        id: "price",
        name: "price",
        placeholder: "price",
        value: inputs.price,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: clearForm,
      children: "Clear Form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: resetForm,
      children: "Reset Form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(CreateProduct, "LOtO0lHDV2LjftIddtYNHy++Tqs=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = CreateProduct;

var _c;

$RefreshReg$(_c, "CreateProduct");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVByb2R1Y3QiLCJ1c2VGb3JtIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxpQkFDaUJDLHFEQUFPLENBQUM7QUFDN0RDLFFBQUksRUFBRSxZQUR1RDtBQUU3REMsU0FBSyxFQUFFLEtBRnNEO0FBRzdEQyxlQUFXLEVBQUU7QUFIZ0QsR0FBRCxDQUR4QjtBQUFBLE1BQzlCQyxNQUQ4QixZQUM5QkEsTUFEOEI7QUFBQSxNQUN0QkMsWUFEc0IsWUFDdEJBLFlBRHNCO0FBQUEsTUFDUkMsU0FEUSxZQUNSQSxTQURRO0FBQUEsTUFDR0MsU0FESCxZQUNHQSxTQURIOztBQU10QyxzQkFDRSw4REFBQyxDQUFEO0FBQUEsNEJBQ0U7QUFBTyxhQUFPLEVBQUMsTUFBZjtBQUFBLHNDQUVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFFLEVBQUMsTUFGTDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsbUJBQVcsRUFBQyxNQUpkO0FBS0UsYUFBSyxFQUFFSCxNQUFNLENBQUNILElBTGhCO0FBTUUsZ0JBQVEsRUFBRUk7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFZRTtBQUFPLGFBQU8sRUFBQyxPQUFmO0FBQUEsdUNBRUU7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLFVBQUUsRUFBQyxPQUZMO0FBR0UsWUFBSSxFQUFDLE9BSFA7QUFJRSxtQkFBVyxFQUFDLE9BSmQ7QUFLRSxhQUFLLEVBQUVELE1BQU0sQ0FBQ0YsS0FMaEI7QUFNRSxnQkFBUSxFQUFFRztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQXdCRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkYsZUEyQkU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVDLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQXZDdUJSLGE7VUFDaUNDLGlEOzs7S0FEakNELGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC42MDdiNzMzYWVhYmM0Y2I0MTE0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBuYW1lOiAnTmljZSBTaG9lcycsXHJcbiAgICBwcmljZTogMzQyMzQsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoZXNlIGFyZSB0aGUgYmVzdCBzaG9lcyEnLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgTmFtZVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cclxuICAgICAgICBQcmljZVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaWNlXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbGVhckZvcm19PlxyXG4gICAgICAgIENsZWFyIEZvcm1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Jlc2V0Rm9ybX0+XHJcbiAgICAgICAgUmVzZXQgRm9ybVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvRj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==