function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

var styles = function styles() {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '8px'
    },
    wrapper: {
      margin: 'auto',
      position: 'relative'
    },
    wrapperFullWidth: {
      margin: 'auto',
      position: 'relative',
      width: '100%'
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700]
      },
      backgroundImage: 'url(https://static.financebuddha.com/assets/images/gradient-bg.png)',
      backgroundSize: 'contain'
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    }
  };
};

var CircularIntegration =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CircularIntegration, _React$Component);

  function CircularIntegration() {
    _classCallCheck(this, CircularIntegration);

    return _possibleConstructorReturn(this, _getPrototypeOf(CircularIntegration).apply(this, arguments));
  }

  _createClass(CircularIntegration, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          fab = _this$props.fab,
          processing = _this$props.processing,
          success = _this$props.success,
          _this$props$color = _this$props.color,
          color = _this$props$color === void 0 ? 'primary' : _this$props$color,
          _this$props$variant = _this$props.variant,
          variant = _this$props$variant === void 0 ? 'contained' : _this$props$variant,
          _this$props$children = _this$props.children,
          children = _this$props$children === void 0 ? 'Submit' : _this$props$children,
          fullWidth = _this$props.fullWidth,
          rest = _objectWithoutProperties(_this$props, ["classes", "fab", "processing", "success", "color", "variant", "children", "fullWidth"]);

      var buttonClassname = classNames(_defineProperty({}, classes.buttonSuccess, success));
      return React.createElement("div", {
        className: classes.root,
        style: {
          width: fullWidth ? '100%' : 'auto'
        }
      }, fab ? React.createElement("div", {
        className: classes.wrapper
      }, React.createElement(Fab, _extends({
        color: color,
        className: buttonClassname
      }, rest), success ? React.createElement(CheckIcon, null) : React.createElement(SaveIcon, null)), processing && React.createElement(CircularProgress, {
        size: 68,
        className: classes.fabProgress
      })) : React.createElement("div", {
        className: fullWidth ? classes.wrapperFullWidth : classes.wrapper
      }, React.createElement(Button, _extends({
        fullWidth: fullWidth,
        variant: variant,
        color: color,
        className: buttonClassname,
        disabled: processing
      }, rest), children), processing && React.createElement(CircularProgress, {
        size: 24,
        className: classes.buttonProgress
      })));
    }
  }]);

  return CircularIntegration;
}(React.Component);

CircularIntegration.displayName = 'FButton';
export default withStyles(styles)(CircularIntegration);