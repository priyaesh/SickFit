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
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");

var _jsxFileName = "C:\\Users\\HPHamsa\\SickFit\\Advanced-React\\sick-fits\\frontend\\components\\Product.js";




function Product({
  product
}) {
  var _product$photo, _product$photo$image;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/product/${product.id}`,
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: product.price
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
    children: data === null || data === void 0 ? void 0 : data.allProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {
      product: product
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

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ItemStlyes = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ItemStyles__ItemStlyes",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ItemStlyes);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "PriceTag",
  componentId: "sc-nwbk6t-0"
})(["background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"]);
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Title);

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9JdGVtU3R5bGVzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1ByaWNlVGFnLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1RpdGxlLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3BhZ2VzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9pZ25vcmVkfEM6XFxVc2Vyc1xcSFBIYW1zYVxcU2lja0ZpdFxcQWR2YW5jZWQtUmVhY3RcXHNpY2stZml0c1xcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJpZCIsInByaWNlIiwiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiUHJvZHVjdHNMaXN0U3R5bGVzIiwic3R5bGVkIiwiUHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImFsbFByb2R1Y3RzIiwibWFwIiwiSXRlbVN0bHllcyIsIlByaWNlVGFnIiwiVGl0bGUiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULENBQWlCO0FBQUNDO0FBQUQsQ0FBakIsRUFBMkI7QUFBQTs7QUFDdEMsc0JBQU8sOERBQUMsdURBQUQ7QUFBQSw0QkFDSDtBQUFLLFNBQUcsRUFBRUEsT0FBRixhQUFFQSxPQUFGLHlDQUFFQSxPQUFPLENBQUVDLEtBQVgsMkVBQUUsZUFBZ0JDLEtBQWxCLHlEQUFFLHFCQUF1QkMsb0JBQWpDO0FBQ0EsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLGVBR0gsOERBQUMsa0RBQUQ7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRyxZQUFXSixPQUFPLENBQUNLLEVBQUcsRUFBbkM7QUFBQSxrQkFBdUNMLE9BQU8sQ0FBQ0k7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRyxlQU1ILDhEQUFDLHFEQUFEO0FBQUEsZ0JBQVdKLE9BQU8sQ0FBQ007QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBUUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBR0Msb0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZkE7QUFnQkEsTUFBTUMsa0JBQWtCLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGlFQUF4QjtBQU1lLFNBQVNDLFFBQVQsR0FBbUI7QUFDOUIsUUFBTTtBQUFDQyxRQUFEO0FBQU1DLFNBQU47QUFBWUM7QUFBWixNQUFxQkMsd0RBQVEsQ0FBQ1Isa0JBQUQsQ0FBbkM7QUFDQVMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVosRUFBaUJDLEtBQWpCLEVBQXVCQyxPQUF2QjtBQUNBLE1BQUdBLE9BQUgsRUFBWSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1osTUFBR0QsS0FBSCxFQUFVLG9CQUFPO0FBQUEseUJBQVVBLEtBQUssQ0FBQ0ssT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDVixzQkFDSSw4REFBQyxrQkFBRDtBQUFBLGNBQ0tOLElBREwsYUFDS0EsSUFETCx1QkFDS0EsSUFBSSxDQUFFTyxXQUFOLENBQWtCQyxHQUFsQixDQUF1QnBCLE9BQUQsaUJBQVksOERBQUMsNkNBQUQ7QUFBMEIsYUFBTyxFQUFFQTtBQUFuQyxPQUFjQSxPQUFPLENBQUNLLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBbEM7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosQ0FJSTtBQUNBO0FBQ0E7QUFOSjtBQVFILEM7Ozs7Ozs7Ozs7Ozs7O0FDekNEO0FBRUEsTUFBTWdCLFVBQVUsR0FBR1gsdUVBQUg7QUFBQTtBQUFBO0FBQUEseWVBQWhCO0FBbUNBLCtEQUFlVyxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBRUEsTUFBTUMsUUFBUSxHQUFHWix3RUFBSDtBQUFBO0FBQUE7QUFBQSxxTEFBZDtBQWNBLCtEQUFlWSxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUEsTUFBTUMsS0FBSyxHQUFHYixzRUFBSDtBQUFBO0FBQUE7QUFBQSx1UEFBWDtBQWlCQSwrREFBZWEsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFDL0Isc0JBQU87QUFBQSwyQkFDTCw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0QsQzs7Ozs7Ozs7OztBQ05ILGUiLCJmaWxlIjoicGFnZXNfcHJvZHVjdHNfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbVN0bHllcyBmcm9tIFwiLi9zdHlsZXMvSXRlbVN0eWxlc1wiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9zdHlsZXMvVGl0bGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi9zdHlsZXMvUHJpY2VUYWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7cHJvZHVjdH0pe1xyXG4gICAgcmV0dXJuIDxJdGVtU3RseWVzPlxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfS8+XHJcbiAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgPFByaWNlVGFnPntwcm9kdWN0LnByaWNlfTwvUHJpY2VUYWc+XHJcbiAgICA8L0l0ZW1TdGx5ZXM+XHJcbn0iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xyXG4vLyBpbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUlkge1xyXG4gICAgYWxsUHJvZHVjdHMge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBQcm9kdWN0c0xpc3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiA2MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKXtcclxuICAgIGNvbnN0IHtkYXRhLGVycm9yLGxvYWRpbmd9PXVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLGVycm9yLGxvYWRpbmcpOyAgXHJcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cclxuICAgIGlmKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6e2Vycm9yLm1lc3NhZ2V9PC9wPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgICAgICAgICB7ZGF0YT8uYWxsUHJvZHVjdHMubWFwKChwcm9kdWN0KT0+KDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0vPikpfVxyXG4gICAgICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpPT4oPHAga2V5PXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvcD4pKX1cclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgSXRlbVN0bHllcyA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb2ZmV2hpdGUpO1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWJzKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nOiAwIDNyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgLmJ1dHRvbkxpc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuICAgIGdyaWQtZ2FwOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyYXkpO1xyXG4gICAgJiA+ICoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbVN0bHllcztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBQcmljZVRhZyA9IHN0eWxlZC5zcGFuYFxyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTNweDtcclxuICByaWdodDogLTNweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlVGFnO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcpIHJvdGF0ZSgtMWRlZyk7XHJcbiAgbWFyZ2luLXRvcDogLTNyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcclxuIiwiaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdHMoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPFByb2R1Y3RzLz5cclxuICAgIDwvZGl2PlxyXG4gIH0iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9