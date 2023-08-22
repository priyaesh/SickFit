self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HPHamsa_SickFit_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\HPHamsa\\SickFit\\Advanced-React\\sick-fits\\frontend\\components\\Products.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_HPHamsa_SickFit_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  query ALL_PRODUCTS_QUERY {\n    allProducts {\n      id\n      name\n      price\n      description\n      photo {\n        id\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import Products from './Product';

var ALL_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject());
var ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "Products__ProductsListStyles",
  componentId: "sc-1uv5x8m-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);
function Products() {
  _s();

  var _this = this;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(ALL_PRODUCTS_QUERY),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data, error, loading);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 24
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error:", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 22
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: data === null || data === void 0 ? void 0 : data.allProducts.map(function (product) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: product.name
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 48
      }, _this);
    })
  }, void 0, false) // <div>
  //   {data.allProducts.map((product)=>(<p key={product.id}>{product.name}</p>))}
  // </div>
  ;
}

_s(Products, "ssi9LISu9lyQI5GwqWYaQTaK1M0=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];
});

_c = Products;

var _c;

$RefreshReg$(_c, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0c0xpc3RTdHlsZXMiLCJzdHlsZWQiLCJQcm9kdWN0cyIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiYWxsUHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHQyxvREFBSCxtQkFBeEI7QUFnQkEsSUFBTUMsa0JBQWtCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlFQUF4QjtBQU1lLFNBQVNDLFFBQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsd0RBQVEsQ0FBQ0wsa0JBQUQsQ0FETDtBQUFBLE1BQ3ZCTSxJQUR1QixhQUN2QkEsSUFEdUI7QUFBQSxNQUNsQkMsS0FEa0IsYUFDbEJBLEtBRGtCO0FBQUEsTUFDWkMsT0FEWSxhQUNaQSxPQURZOztBQUU5QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVosRUFBaUJDLEtBQWpCLEVBQXVCQyxPQUF2QjtBQUNBLE1BQUdBLE9BQUgsRUFBWSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1osTUFBR0QsS0FBSCxFQUFVLG9CQUFPO0FBQUEseUJBQVVBLEtBQUssQ0FBQ0ksT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDVixzQkFDSTtBQUFBLGNBQ0tMLElBREwsYUFDS0EsSUFETCx1QkFDS0EsSUFBSSxDQUFFTSxXQUFOLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxPQUFEO0FBQUEsMEJBQVk7QUFBQSxrQkFBcUJBLE9BQU8sQ0FBQ0M7QUFBN0IsU0FBUUQsT0FBTyxDQUFDRSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVo7QUFBQSxLQUF0QjtBQURMLG1CQURKLENBSUk7QUFDQTtBQUNBO0FBTko7QUFRSDs7R0FidUJaLFE7VUFDT0Msb0Q7OztLQURQRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyMTA4MTk5OTNlM2U5OTZlMDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG4vLyBpbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUlkge1xyXG4gICAgYWxsUHJvZHVjdHMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBQcm9kdWN0c0xpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiA2MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKXtcclxuICAgIGNvbnN0IHtkYXRhLGVycm9yLGxvYWRpbmd9PXVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLGVycm9yLGxvYWRpbmcpOyAgXHJcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cclxuICAgIGlmKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6e2Vycm9yLm1lc3NhZ2V9PC9wPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZGF0YT8uYWxsUHJvZHVjdHMubWFwKChwcm9kdWN0KT0+KDxwIGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L3A+KSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgLy8gPGRpdj5cclxuICAgICAgICAvLyAgIHtkYXRhLmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCk9Pig8cCBrZXk9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9wPikpfVxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==