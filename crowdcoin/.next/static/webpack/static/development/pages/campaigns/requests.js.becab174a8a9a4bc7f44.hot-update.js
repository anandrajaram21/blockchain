webpackHotUpdate("static/development/pages/campaigns/requests.js",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../components/RequestRow */ "./components/RequestRow.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var RequestIndex = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RequestIndex, _Component);

  function RequestIndex() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RequestIndex);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestIndex).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RequestIndex, [{
    key: "renderRow",
    value: function renderRow() {
      var _this = this;

      return this.props.requests.map(function (request, index) {
        return __jsx(_components_RequestRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
          id: index,
          key: index,
          request: request,
          address: _this.props.address,
          approversCount: _this.props.approversCount
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Body;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("h3", null, "Requests"), __jsx(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        route: "/campaigns/".concat(this.props.address, "/requests/new")
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        primary: true
      }, "Add Request"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"], null, __jsx(Header, null, __jsx(Row, null, __jsx(HeaderCell, null, "ID"), __jsx(HeaderCell, null, "Description"), __jsx(HeaderCell, null, "Amount"), __jsx(HeaderCell, null, "Recipient"), __jsx(HeaderCell, null, "Approval Count"), __jsx(HeaderCell, null, "Approve"), __jsx(HeaderCell, null, "Finalize"))), __jsx(Body, null, this.renderRow())));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var address, campaign, requestsCount, approversCount, requests;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              address = props.query.address;
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__["default"])(address);
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.getRequestsCount().call());

            case 4:
              requestsCount = _context.sent;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.approversCount().call());

            case 7:
              approversCount = _context.sent;
              _context.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(Array(parseInt(requestsCount)).fill().map(function (element, index) {
                return campaign.methods.requests(index).call();
              })));

            case 10:
              requests = _context.sent;
              return _context.abrupt("return", {
                address: address,
                requests: requests,
                requestsCount: requestsCount,
                approversCount: approversCount
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return RequestIndex;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

/***/ })

})
//# sourceMappingURL=requests.js.becab174a8a9a4bc7f44.hot-update.js.map