webpackHotUpdate("static/development/pages/campaigns/show.js",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ContributeForm */ "./components/ContributeForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var CampaignShow = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CampaignShow, _Component);

  function CampaignShow() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CampaignShow);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(CampaignShow).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          minimumContribution = _this$props.minimumContribution,
          balance = _this$props.balance,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount,
          manager = _this$props.manager;
      var items = [{
        header: manager,
        meta: 'Address of the manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become a contributor.'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign.'
      }, {
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__["default"].utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend'
      }];
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx("h3", null, "Campaign Details"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        width: 10
      }, this.renderCards()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        width: 6
      }, __jsx(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        address: this.props.address
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        route: "/campaigns/".concat(this.props.address, "/requests")
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true
      }, "View Requests")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var campaign, summary;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = Object(_ethereum_campaign__WEBPACK_IMPORTED_MODULE_9__["default"])(props.query.address);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(campaign.methods.getSummary().call());

            case 3:
              summary = _context.sent;
              return _context.abrupt("return", {
                address: props.query.address,
                minimumContribution: summary['0'],
                balance: summary['1'],
                requestsCount: summary['2'],
                approversCount: summary['3'],
                manager: summary['4']
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return CampaignShow;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

/***/ })

})
//# sourceMappingURL=show.js.9f1baf64b18fe9f32e90.hot-update.js.map