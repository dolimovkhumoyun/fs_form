"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

require("antd/dist/antd.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CustomForm =
/*#__PURE__*/
function (_Component) {
  _inherits(CustomForm, _Component);

  function CustomForm() {
    _classCallCheck(this, CustomForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomForm).apply(this, arguments));
  }

  _createClass(CustomForm, [{
    key: "renderForm",
    value: function renderForm(input) {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      switch (input.type) {
        case "input":
          {
            return _react.default.createElement(_antd.Form.Item, {
              key: input.name
            }, getFieldDecorator(input.name, {
              rules: [{
                required: true,
                message: "Please input your username!"
              }],
              initialValue: input.initialValue || ""
            })(_react.default.createElement(_antd.Input, {
              prefix: _react.default.createElement(_antd.Icon, {
                type: "user",
                style: {
                  color: "rgba(0,0,0,.25)"
                }
              }),
              placeholder: input.placeholder
            })));
          }

        case "button":
          {
            return _react.default.createElement(_antd.Form.Item, {
              key: input.name
            }, _react.default.createElement(_antd.Button, {
              type: "primary",
              htmlType: "submit",
              className: "login-form-button"
            }, input.placeholder));
          }

        default:
          {
            console.error("Invalid input type");
            break;
          }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var data = this.props.data;
      return _react.default.createElement(_antd.Form, {
        onSubmit: function onSubmit(e) {
          return _this.props.handleSubmit(e, _this.props.form);
        },
        className: "login-form"
      }, data.map(function (d) {
        return _this.renderForm(d);
      }));
    }
  }]);

  return CustomForm;
}(_react.Component);

var WrappedNormalLoginForm = _antd.Form.create({
  name: "normal_login"
})(CustomForm);

var _default = WrappedNormalLoginForm;
exports.default = _default;

//# sourceMappingURL=Form.jsx.map