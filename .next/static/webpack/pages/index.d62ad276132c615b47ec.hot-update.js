self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\HPHamsa\\SickFit\\Advanced-React\\sick-fits\\frontend\\components\\Product.js";





function Product(_ref) {
  var _product$photo, _product$photo$image;

  var product = _ref.product;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/product/".concat(product.id),
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(product.price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, this);
}
_c = Product;

var _c;

$RefreshReg$(_c, "Product");

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


/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMoney; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function formatMoney() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  };
  var formatter = Intl.NumberFormat('en-US', options);
  return formatter.format(amount);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9saWIvZm9ybWF0TW9uZXkuanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiaWQiLCJmb3JtYXRNb25leSIsInByaWNlIiwiYW1vdW50Iiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVRDLE9BQVMsUUFBVEEsT0FBUztBQUN0QyxzQkFBTyw4REFBQyx1REFBRDtBQUFBLDRCQUNIO0FBQUssU0FBRyxFQUFFQSxPQUFGLGFBQUVBLE9BQUYseUNBQUVBLE9BQU8sQ0FBRUMsS0FBWCwyRUFBRSxlQUFnQkMsS0FBbEIseURBQUUscUJBQXVCQyxvQkFBakM7QUFDQSxTQUFHLEVBQUVILE9BQU8sQ0FBQ0k7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsZUFHSCw4REFBQyxrREFBRDtBQUFBLDZCQUNJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxxQkFBY0osT0FBTyxDQUFDSyxFQUF0QixDQUFWO0FBQUEsa0JBQXVDTCxPQUFPLENBQUNJO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEcsZUFNSCw4REFBQyxxREFBRDtBQUFBLGdCQUFXRSx5REFBVyxDQUFDTixPQUFPLENBQUNPLEtBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBUUg7S0FUdUJSLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVCxTQUFTTyxXQUFULEdBQThCO0FBQUEsTUFBVEUsTUFBUyx1RUFBRixDQUFFO0FBQ3pDLE1BQU1DLE9BQU8sR0FBQztBQUNWQyxTQUFLLEVBQUMsVUFESTtBQUVWQyxZQUFRLEVBQUMsS0FGQztBQUdWQyx5QkFBcUIsRUFBQztBQUhaLEdBQWQ7QUFNQSxNQUFNQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsWUFBTCxDQUFrQixPQUFsQixFQUEwQk4sT0FBMUIsQ0FBbEI7QUFDQSxTQUFPSSxTQUFTLENBQUNHLE1BQVYsQ0FBaUJSLE1BQWpCLENBQVA7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNjJhZDI3NjEzMmM2MTViNDdlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW1TdGx5ZXMgZnJvbSBcIi4vc3R5bGVzL0l0ZW1TdHlsZXNcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vc3R5bGVzL1RpdGxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByaWNlVGFnIGZyb20gJy4vc3R5bGVzL1ByaWNlVGFnJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gXCIuLi9saWIvZm9ybWF0TW9uZXlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3Qoe3Byb2R1Y3R9KXtcclxuICAgIHJldHVybiA8SXRlbVN0bHllcz5cclxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdD8ucGhvdG8/LmltYWdlPy5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX0vPlxyXG4gICAgICAgIDxUaXRsZT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cclxuICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgIDxQcmljZVRhZz57Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9PC9QcmljZVRhZz5cclxuICAgIDwvSXRlbVN0bHllcz5cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudD0wKXtcclxuICAgIGNvbnN0IG9wdGlvbnM9e1xyXG4gICAgICAgIHN0eWxlOidjdXJyZW5jeScsXHJcbiAgICAgICAgY3VycmVuY3k6J1VTRCcsXHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOjIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==