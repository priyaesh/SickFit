exports.id = "pages_products_js";
exports.ids = ["pages_products_js"];
exports.modules = {

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\HPHamsa\\SickFit\\Advanced-React\\sick-fits\\frontend\\components\\Product.js";
function Product({
  product
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: product.name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ "./components/Product.js");

var _jsxFileName = "C:\\Users\\HPHamsa\\SickFit\\Advanced-React\\sick-fits\\frontend\\components\\Products.js";



 // import Products from './Product';

const ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
const ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Products__ProductsListStyles",
  componentId: "sc-1uv5x8m-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);
function Products() {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY);
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
    children: data === null || data === void 0 ? void 0 : data.allProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: product.name
    }, product.id, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 48
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, this) // <div>
  //   {data.allProducts.map((product)=>(<p key={product.id}>{product.name}</p>))}
  // </div>
  ;
}

/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Products */ "./components/Products.js");

var _jsxFileName = "C:\\Users\\HPHamsa\\SickFit\\Advanced-React\\sick-fits\\frontend\\pages\\products.js";

function products() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdCIsIm5hbWUiLCJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0c0xpc3RTdHlsZXMiLCJzdHlsZWQiLCJQcm9kdWN0cyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiYWxsUHJvZHVjdHMiLCJtYXAiLCJpZCIsInByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsT0FBVCxDQUFpQjtBQUFDQztBQUFELENBQWpCLEVBQTJCO0FBQ3RDLHNCQUFPO0FBQUEsY0FBSUEsT0FBTyxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkQ7QUFDQTtBQUNBO0NBRUE7O0FBRUEsTUFBTUMsa0JBQWtCLEdBQUdDLG9EQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZBO0FBZ0JBLE1BQU1DLGtCQUFrQixHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxpRUFBeEI7QUFNZSxTQUFTQyxRQUFULEdBQW1CO0FBQzlCLFFBQU07QUFBQ0MsUUFBRDtBQUFNQyxTQUFOO0FBQVlDO0FBQVosTUFBcUJDLHdEQUFRLENBQUNSLGtCQUFELENBQW5DO0FBQ0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLEVBQWlCQyxLQUFqQixFQUF1QkMsT0FBdkI7QUFDQSxNQUFHQSxPQUFILEVBQVksb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNaLE1BQUdELEtBQUgsRUFBVSxvQkFBTztBQUFBLHlCQUFVQSxLQUFLLENBQUNLLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1Ysc0JBQ0ksOERBQUMsa0JBQUQ7QUFBQSxjQUNLTixJQURMLGFBQ0tBLElBREwsdUJBQ0tBLElBQUksQ0FBRU8sV0FBTixDQUFrQkMsR0FBbEIsQ0FBdUJmLE9BQUQsaUJBQVk7QUFBQSxnQkFBcUJBLE9BQU8sQ0FBQ0M7QUFBN0IsT0FBUUQsT0FBTyxDQUFDZ0IsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFsQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixDQUlJO0FBQ0E7QUFDQTtBQU5KO0FBUUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQy9CLHNCQUFPO0FBQUEsMkJBQ0wsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdELEMiLCJmaWxlIjoicGFnZXNfcHJvZHVjdHNfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHtwcm9kdWN0fSl7XHJcbiAgICByZXR1cm4gPHA+e3Byb2R1Y3QubmFtZX08L3A+XHJcbn0iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG4vLyBpbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUlkge1xyXG4gICAgYWxsUHJvZHVjdHMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBQcm9kdWN0c0xpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiA2MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKXtcclxuICAgIGNvbnN0IHtkYXRhLGVycm9yLGxvYWRpbmd9PXVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLGVycm9yLGxvYWRpbmcpOyAgXHJcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cclxuICAgIGlmKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6e2Vycm9yLm1lc3NhZ2V9PC9wPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgICAgICAgICB7ZGF0YT8uYWxsUHJvZHVjdHMubWFwKChwcm9kdWN0KT0+KDxwIGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L3A+KSl9XHJcbiAgICAgICAgPC9Qcm9kdWN0c0xpc3RTdHlsZXM+XHJcbiAgICAgICAgLy8gPGRpdj5cclxuICAgICAgICAvLyAgIHtkYXRhLmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCk9Pig8cCBrZXk9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9wPikpfVxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdHMoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPFByb2R1Y3RzLz5cclxuICAgIDwvZGl2PlxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9