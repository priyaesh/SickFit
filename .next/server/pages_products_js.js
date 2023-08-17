exports.id = "pages_products_js";
exports.ids = ["pages_products_js"];
exports.modules = {

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

var _jsxFileName = "C:\\Users\\HPHamsa\\SickFit\\Advanced-React\\sick-fits\\frontend\\components\\Products.js";


 // import Products from './Product';

const ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY {
    allProducts{
    id
      name
    price
    description
  
    
    }
  }
`;
function Products() {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "PRoducts!!!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3BhZ2VzL3Byb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIkFMTF9QUk9EVUNUU19RVUVSWSIsImdxbCIsIlByb2R1Y3RzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLE1BQU1BLGtCQUFrQixHQUFHQyxvREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWEE7QUFjZSxTQUFTQyxRQUFULEdBQW1CO0FBQzlCLFFBQU07QUFBQ0MsUUFBRDtBQUFNQyxTQUFOO0FBQVlDO0FBQVosTUFBcUJDLHdEQUFRLENBQUNOLGtCQUFELENBQW5DO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLEVBQWlCQyxLQUFqQixFQUF1QkMsT0FBdkI7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBSUk7QUFDQTtBQUNBO0FBTko7QUFRSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUVlLFNBQVNJLFFBQVQsR0FBb0I7QUFDL0Isc0JBQU87QUFBQSwyQkFDTCw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0QsQyIsImZpbGUiOiJwYWdlc19wcm9kdWN0c19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Byb2R1Y3QnO1xyXG5cclxuY29uc3QgQUxMX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWSB7XHJcbiAgICBhbGxQcm9kdWN0c3tcclxuICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIHByaWNlXHJcbiAgICBkZXNjcmlwdGlvblxyXG4gIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCl7XHJcbiAgICBjb25zdCB7ZGF0YSxlcnJvcixsb2FkaW5nfT11c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlkpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSxlcnJvcixsb2FkaW5nKTsgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPlBSb2R1Y3RzISEhPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT4oPHAga2V5PXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvcD4pKX1cclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RzKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxQcm9kdWN0cy8+XHJcbiAgICA8L2Rpdj5cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==