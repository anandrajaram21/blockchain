webpackHotUpdate("static/development/pages/campaigns/requests.js",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var RequestRow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RequestRow, _Component);

  function RequestRow() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onApprove", function _callee() {
      var campaign, accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.props.address);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_10__["default"].eth.getAccounts());

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              }));

            case 6:
              window.location.reload();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onFinalize", function _callee2() {
      var campaign, accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.props.address);
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_10__["default"].eth.getAccounts());

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              }));

            case 6:
              window.location.reload();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      return __jsx(Row, null, __jsx(Cell, null, id), __jsx(Cell, null, request.description), __jsx(Cell, null, _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__["default"].utils.fromWei(request.value, 'ether')), __jsx(Cell, null, request.recipient), __jsx(Cell, null, request.approvalCount, "/", approversCount), request.complete ? null : __jsx(Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        color: "green",
        basic: true,
        onClick: this.onApprove
      }, "Approve")), request.complete ? null : __jsx(Cell, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        color: "teal",
        basic: true,
        onClick: this.onFinalize
      }, "Finalize")));
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

/***/ })

})
//# sourceMappingURL=requests.js.aea943267c3a474719df.hot-update.js.map