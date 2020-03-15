webpackHotUpdate("static/development/pages/campaigns/show.js",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
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
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var ContributeForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ContributeForm, _Component);

  function ContributeForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContributeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ContributeForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      value: '',
      errorMessage: '',
      loading: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee(event) {
      var campaign, accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              _this.setState({
                loading: true,
                errorMessage: ''
              });

              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.props.address);
              _context.prev = 3;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].eth.getAccounts());

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.contribute().send({
                from: accounts[0],
                value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["default"].utils.toWei(_this.state.value, 'ether')
              }));

            case 9:
              window.location.reload();
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 15:
              _this.setState({
                loading: false,
                value: ''
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 12]], Promise);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ContributeForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, null, __jsx("label", {
        htmlFor: ""
      }, "Amount to Contribute"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        value: this.state.value,
        label: "ether",
        labelPosition: "right",
        onChange: function onChange(event) {
          return _this2.setState({
            value: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        loading: this.state.loading,
        primary: true
      }, "Contribute!"));
    }
  }]);

  return ContributeForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContributeForm);

/***/ })

})
//# sourceMappingURL=show.js.7f95c0ee09ac7c3cf030.hot-update.js.map