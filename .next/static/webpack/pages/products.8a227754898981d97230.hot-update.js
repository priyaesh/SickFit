self["webpackHotUpdate_N_E"]("pages/products",{

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
_c = ProductsListStyles;
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {
    children: data === null || data === void 0 ? void 0 : data.allProducts.map(function (product) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 48
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this) // <div>
  //   {data.allProducts.map((product)=>(<p key={product.id}>{product.name}</p>))}
  // </div>
  ;
}

_s(Products, "ssi9LISu9lyQI5GwqWYaQTaK1M0=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];
});

_c2 = Products;

var _c, _c2;

$RefreshReg$(_c, "ProductsListStyles");
$RefreshReg$(_c2, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0c0xpc3RTdHlsZXMiLCJzdHlsZWQiLCJQcm9kdWN0cyIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiYWxsUHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLG9EQUFILG1CQUF4QjtBQWdCQSxJQUFNQyxrQkFBa0IsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsaUVBQXhCO0tBQU1ELGtCO0FBTVMsU0FBU0UsUUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyx3REFBUSxDQUFDTCxrQkFBRCxDQURMO0FBQUEsTUFDdkJNLElBRHVCLGFBQ3ZCQSxJQUR1QjtBQUFBLE1BQ2xCQyxLQURrQixhQUNsQkEsS0FEa0I7QUFBQSxNQUNaQyxPQURZLGFBQ1pBLE9BRFk7O0FBRTlCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWixFQUFpQkMsS0FBakIsRUFBdUJDLE9BQXZCO0FBQ0EsTUFBR0EsT0FBSCxFQUFZLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWixNQUFHRCxLQUFILEVBQVUsb0JBQU87QUFBQSx5QkFBVUEsS0FBSyxDQUFDSSxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNWLHNCQUNJLDhEQUFDLGtCQUFEO0FBQUEsY0FDS0wsSUFETCxhQUNLQSxJQURMLHVCQUNLQSxJQUFJLENBQUVNLFdBQU4sQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLE9BQUQ7QUFBQSwwQkFBWSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVo7QUFBQSxLQUF0QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixDQUlJO0FBQ0E7QUFDQTtBQU5KO0FBUUg7O0dBYnVCVixRO1VBQ09DLG9EOzs7TUFEUEQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy44YTIyNzc1NDg5ODk4MWQ5NzIzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuLy8gaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUHJvZHVjdCc7XHJcblxyXG5jb25zdCBBTExfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZIHtcclxuICAgIGFsbFByb2R1Y3RzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogNjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCl7XHJcbiAgICBjb25zdCB7ZGF0YSxlcnJvcixsb2FkaW5nfT11c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlkpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSxlcnJvcixsb2FkaW5nKTsgIFxyXG4gICAgaWYobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICBpZihlcnJvcikgcmV0dXJuIDxwPkVycm9yOntlcnJvci5tZXNzYWdlfTwvcD5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICAgICAge2RhdGE/LmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCk9Pig8UHJvZHVjdCAvPikpfVxyXG4gICAgICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT4oPHAga2V5PXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvcD4pKX1cclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=