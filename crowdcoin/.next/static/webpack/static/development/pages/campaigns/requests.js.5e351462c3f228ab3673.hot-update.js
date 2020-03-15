webpackHotUpdate("static/development/pages/campaigns/requests.js",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../ethereum/web3 */ "./ethereum/web3.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var RequestRow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestRow, _Component);

  function RequestRow() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RequestRow);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RequestRow).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      return __jsx(Row, null, __jsx(Cell, null, id), __jsx(Cell, null, request.description), __jsx(Cell, null, _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__["default"].utils.fromWei(request.value, 'ether')), __jsx(Cell, null, request.recipient), __jsx(Cell, null, request.approvalCount, "/", approversCount));
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

/***/ })

})
//# sourceMappingURL=requests.js.5e351462c3f228ab3673.hot-update.js.map