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
            navigationBarTitleText: "发现"
        }, _this.components = {}, _this.data = {
            bnrUrl: ["../../assets/0005.gif", "../../assets/032.png", "../../assets/001.jpg"],
            placeholder: "我对此深有研究...",
            commentList: [0, 1, 2, 3, 4]
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: "onLoad",
        value: function onLoad() {}
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'discover-page/pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJibnJVcmwiLCJwbGFjZWhvbGRlciIsImNvbW1lbnRMaXN0IiwibWV0aG9kcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBRUlBLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDSEMsb0JBQVEsQ0FDSix1QkFESSxFQUVKLHNCQUZJLEVBR0osc0JBSEksQ0FETDtBQU1IQyx5QkFBYSxZQU5WO0FBT0hDLHlCQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQ7QUFQVCxTLFFBU1BDLE8sR0FBVSxFOzs7OztpQ0FDRCxDQUFFOzs7O0VBZmNDLGVBQUtDLEkiLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5Y+R546wXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgYm5yVXJsOiBbXG4gICAgICAgICAgICAgICAgXCIuLi8uLi9hc3NldHMvMDAwNS5naWZcIixcbiAgICAgICAgICAgICAgICBcIi4uLy4uL2Fzc2V0cy8wMzIucG5nXCIsXG4gICAgICAgICAgICAgICAgXCIuLi8uLi9hc3NldHMvMDAxLmpwZ1wiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi5oiR5a+55q2k5rex5pyJ56CU56m2Li4uXCIsXG4gICAgICAgICAgICBjb21tZW50TGlzdDpbMCwxLDIsMyw0XVxuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge307XG4gICAgICAgIG9uTG9hZCgpIHt9XG4gICAgfVxuIl19