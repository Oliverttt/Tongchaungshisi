"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$page) {
  _inherits(_default, _wepy$page);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "发布",
      enablePullDownRefresh: true
    }, _this.components = {}, _this.data = {
      pics: ["../../assets/032.png", "../../assets/001.jpg", "../../assets/032.png", "../../assets/032.png", "../../assets/032.png"],
      placeholder1: "加个标题会更多赞哦~",
      placeholder2: "说说此刻的心情..."
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'publish-page/pages/publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImNvbXBvbmVudHMiLCJkYXRhIiwicGljcyIsInBsYWNlaG9sZGVyMSIsInBsYWNlaG9sZGVyMiIsIm1ldGhvZHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUVFQSxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxZQUFNLENBQ0osc0JBREksRUFFSixzQkFGSSxFQUdKLHNCQUhJLEVBSUosc0JBSkksRUFLSixzQkFMSSxDQUREO0FBUUxDLG9CQUFjLFlBUlQ7QUFTTEMsb0JBQWM7QUFUVCxLLFFBV1BDLE8sR0FBVSxFOzs7Ozs2QkFDRCxDQUFFOzs7O0VBbEJnQkMsZUFBS0MsSSIsImZpbGUiOiJwdWJsaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWPkeW4g1wiLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gICAgfTtcbiAgICBjb21wb25lbnRzID0ge307XG4gICAgZGF0YSA9IHtcbiAgICAgIHBpY3M6IFtcbiAgICAgICAgXCIuLi8uLi9hc3NldHMvMDMyLnBuZ1wiLFxuICAgICAgICBcIi4uLy4uL2Fzc2V0cy8wMDEuanBnXCIsXG4gICAgICAgIFwiLi4vLi4vYXNzZXRzLzAzMi5wbmdcIixcbiAgICAgICAgXCIuLi8uLi9hc3NldHMvMDMyLnBuZ1wiLFxuICAgICAgICBcIi4uLy4uL2Fzc2V0cy8wMzIucG5nXCJcbiAgICAgIF0sXG4gICAgICBwbGFjZWhvbGRlcjE6IFwi5Yqg5Liq5qCH6aKY5Lya5pu05aSa6LWe5ZOmflwiLFxuICAgICAgcGxhY2Vob2xkZXIyOiBcIuivtOivtOatpOWIu+eahOW/g+aDhS4uLlwiXG4gICAgfTtcbiAgICBtZXRob2RzID0ge307XG4gICAgb25Mb2FkKCkge31cbiAgfVxuIl19