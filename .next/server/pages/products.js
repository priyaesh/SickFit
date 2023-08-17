(function() {
var exports = {};
exports.id = "pages/products";
exports.ids = ["pages/products"];
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "PRoducts!!!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), data.allProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: product.name
    }, product.id, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 47
    }, this))]
  }, void 0, true, {
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

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/products.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3BhZ2VzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkFMTF9QUk9EVUNUU19RVUVSWSIsImdxbCIsIlByb2R1Y3RzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImFsbFByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsIm5hbWUiLCJpZCIsInByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBRUEsTUFBTUEsa0JBQWtCLEdBQUdDLG9EQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYQTtBQWNlLFNBQVNDLFFBQVQsR0FBbUI7QUFDOUIsUUFBTTtBQUFDQyxRQUFEO0FBQU1DLFNBQU47QUFBWUM7QUFBWixNQUFxQkMsd0RBQVEsQ0FBQ04sa0JBQUQsQ0FBbkM7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVosRUFBaUJDLEtBQWpCLEVBQXVCQyxPQUF2QjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVLRixJQUFJLENBQUNNLFdBQUwsQ0FBaUJDLEdBQWpCLENBQXNCQyxPQUFELGlCQUFZO0FBQUEsZ0JBQXFCQSxPQUFPLENBQUNDO0FBQTdCLE9BQVFELE9BQU8sQ0FBQ0UsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFqQyxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBS0k7QUFDQTtBQUNBO0FBUEo7QUFTSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CRDtBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFDL0Isc0JBQU87QUFBQSwyQkFDTCw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0QsQzs7Ozs7Ozs7Ozs7QUNOSCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCBQcm9kdWN0cyBmcm9tICcuL1Byb2R1Y3QnO1xyXG5cclxuY29uc3QgQUxMX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUU19RVUVSWSB7XHJcbiAgICBhbGxQcm9kdWN0c3tcclxuICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIHByaWNlXHJcbiAgICBkZXNjcmlwdGlvblxyXG4gIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCl7XHJcbiAgICBjb25zdCB7ZGF0YSxlcnJvcixsb2FkaW5nfT11c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlkpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSxlcnJvcixsb2FkaW5nKTsgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPlBSb2R1Y3RzISEhPC9wPlxyXG4gICAgICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT4oPHAga2V5PXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvcD4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyA8ZGl2PlxyXG4gICAgICAgIC8vICAge2RhdGEuYWxsUHJvZHVjdHMubWFwKChwcm9kdWN0KT0+KDxwIGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L3A+KSl9XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdWN0cygpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8UHJvZHVjdHMvPlxyXG4gICAgPC9kaXY+XHJcbiAgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==