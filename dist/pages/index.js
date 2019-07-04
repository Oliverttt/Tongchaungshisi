"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

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
            navigationBarTitleText: "同窗食肆",
            enablePullDownRefresh: true
        }, _this.components = {}, _this.data = {
            storeyList: ["一楼", "二楼", "三楼"],
            shopList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            location: "南京大学一食堂",
            array1: ["早餐", "午餐", "晚餐"],
            array2: ["1楼", "2楼", "3楼"],
            index1: 0,
            index2: 0,
            placeholder: "麻辣香锅",
            storeyNum: "1楼"
        }, _this.methods = {
            bindPicker1Change: function bindPicker1Change(e) {
                this.index1 = e.detail.value;
                this.$apply();
            },
            bindPicker2Change: function bindPicker2Change(e) {
                this.index2 = e.detail.value;
                this.$apply();
            },
            inputSearch: function inputSearch(e) {},
            toPublish: function toPublish() {
                _wepy2.default.navigateTo({
                    url: '../publish-page/pages/publish'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: "onLoad",
        value: function onLoad() {}
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJjb21wb25lbnRzIiwiZGF0YSIsInN0b3JleUxpc3QiLCJzaG9wTGlzdCIsImxvY2F0aW9uIiwiYXJyYXkxIiwiYXJyYXkyIiwiaW5kZXgxIiwiaW5kZXgyIiwicGxhY2Vob2xkZXIiLCJzdG9yZXlOdW0iLCJtZXRob2RzIiwiYmluZFBpY2tlcjFDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJiaW5kUGlja2VyMkNoYW5nZSIsImlucHV0U2VhcmNoIiwidG9QdWJsaXNoIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OExBRUlBLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsbUNBQXVCO0FBRmxCLFMsUUFJVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0hDLHdCQUFZLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBRFQ7QUFFSEMsc0JBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixFQUEvQixDQUZQO0FBR0hDLHNCQUFVLFNBSFA7QUFJSEMsb0JBQVEsQ0FDSixJQURJLEVBRUosSUFGSSxFQUdKLElBSEksQ0FKTDtBQVNIQyxvQkFBUSxDQUNKLElBREksRUFFSixJQUZJLEVBR0osSUFISSxDQVRMO0FBY0hDLG9CQUFRLENBZEw7QUFlSEMsb0JBQVEsQ0FmTDtBQWdCSEMseUJBQWEsTUFoQlY7QUFpQkhDLHVCQUFXO0FBakJSLFMsUUFtQlBDLE8sR0FBVTtBQUNOQyw2QkFETSw2QkFDWUMsQ0FEWixFQUNlO0FBQ2pCLHFCQUFLTixNQUFMLEdBQWNNLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdkI7QUFDQSxxQkFBS0MsTUFBTDtBQUNILGFBSks7QUFLTkMsNkJBTE0sNkJBS1lKLENBTFosRUFLZTtBQUNqQixxQkFBS0wsTUFBTCxHQUFjSyxFQUFFQyxNQUFGLENBQVNDLEtBQXZCO0FBQ0EscUJBQUtDLE1BQUw7QUFDSCxhQVJLO0FBU05FLHVCQVRNLHVCQVNNTCxDQVROLEVBU1MsQ0FBRSxDQVRYO0FBVU5NLHFCQVZNLHVCQVVNO0FBQ1JDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDLHlCQUFLO0FBRE8saUJBQWhCO0FBR0g7QUFkSyxTOzs7OztpQ0FnQkQsQ0FBRTs7OztFQXpDY0YsZUFBS0csSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWQjOeql+mjn+iChlwiLFxuICAgICAgICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN0b3JleUxpc3Q6IFtcIuS4gOalvFwiLCBcIuS6jOalvFwiLCBcIuS4iealvFwiXSxcbiAgICAgICAgICAgIHNob3BMaXN0OiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdLFxuICAgICAgICAgICAgbG9jYXRpb246IFwi5Y2X5Lqs5aSn5a2m5LiA6aOf5aCCXCIsXG4gICAgICAgICAgICBhcnJheTE6IFtcbiAgICAgICAgICAgICAgICBcIuaXqemkkFwiLFxuICAgICAgICAgICAgICAgIFwi5Y2I6aSQXCIsXG4gICAgICAgICAgICAgICAgXCLmmZrppJBcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFycmF5MjogW1xuICAgICAgICAgICAgICAgIFwiMealvFwiLFxuICAgICAgICAgICAgICAgIFwiMualvFwiLFxuICAgICAgICAgICAgICAgIFwiM+alvFwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW5kZXgxOiAwLFxuICAgICAgICAgICAgaW5kZXgyOiAwLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6bq76L6j6aaZ6ZSFXCIsXG4gICAgICAgICAgICBzdG9yZXlOdW06IFwiMealvFwiXG4gICAgICAgIH07XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiaW5kUGlja2VyMUNoYW5nZShlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleDEgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFBpY2tlcjJDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgyID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0U2VhcmNoKGUpIHt9LFxuICAgICAgICAgICAgdG9QdWJsaXNoKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL3B1Ymxpc2gtcGFnZS9wYWdlcy9wdWJsaXNoJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQoKSB7fVxuICAgIH1cbiJdfQ==