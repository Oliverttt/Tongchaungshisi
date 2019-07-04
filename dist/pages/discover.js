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
            currentTab: 1,
            foodList: ["如果你不尝试，你永远不会知道南京大学一食堂麻辣香锅", "麻辣香锅", "如果你不尝试，你永远不会知道南京大学一食堂麻辣香锅", "麻辣香锅", "麻辣香锅", "麻辣香锅", "如果你不尝试，你永远不会知道南京大学一食堂麻辣香锅", "麻辣香锅", "麻辣香锅"],
            placeholder: "麻辣香锅",
            winHeight: '3000rpx'
        }, _this.methods = {
            bindPicker1Change: function bindPicker1Change(e) {
                this.index1 = e.detail.value;
                this.$apply();
            },
            bindPicker2Change: function bindPicker2Change(e) {
                this.index2 = e.detail.value;
                this.$apply();
            },
            bindChange: function bindChange(e) {
                this.currentTab = e.detail.current;
                if (e.detail.current == 0) {
                    this.winHeight = '770rpx';
                } else {
                    this.winHeight = '3000rpx';
                }
                this.$apply();
            },
            swichNav: function swichNav(e) {
                if (this.data.currentTab === e.target.dataset.current) {
                    return false;
                } else {
                    this.currentTab = e.target.dataset.current;
                    if (e.detail.current == 0) {
                        this.winHeight = '770rpx';
                    } else {
                        this.winHeight = '3000rpx';
                    }
                    this.$apply();
                }
            },
            goDetail: function goDetail() {
                _wepy2.default.navigateTo({
                    url: "../discover-page/pages/detail"
                });
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
        value: function onLoad() {
            if (this.currentTab == 0) {
                this.winHeight = '770rpx';
            } else {
                this.winHeight = '3000rpx';
            }
            this.$apply();
        }
    }]);

    return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/discover'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJjb21wb25lbnRzIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJmb29kTGlzdCIsInBsYWNlaG9sZGVyIiwid2luSGVpZ2h0IiwibWV0aG9kcyIsImJpbmRQaWNrZXIxQ2hhbmdlIiwiZSIsImluZGV4MSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5IiwiYmluZFBpY2tlcjJDaGFuZ2UiLCJpbmRleDIiLCJiaW5kQ2hhbmdlIiwiY3VycmVudCIsInN3aWNoTmF2IiwidGFyZ2V0IiwiZGF0YXNldCIsImdvRGV0YWlsIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpbnB1dFNlYXJjaCIsInRvUHVibGlzaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4TEFFSUEsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyxtQ0FBdUI7QUFGbEIsUyxRQUlUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDSEMsd0JBQVksQ0FEVDtBQUVIQyxzQkFBVSxDQUNOLDJCQURNLEVBRU4sTUFGTSxFQUdOLDJCQUhNLEVBSU4sTUFKTSxFQUtOLE1BTE0sRUFNTixNQU5NLEVBT04sMkJBUE0sRUFRTixNQVJNLEVBU04sTUFUTSxDQUZQO0FBYUhDLHlCQUFhLE1BYlY7QUFjSEMsdUJBQVc7QUFkUixTLFFBZ0JQQyxPLEdBQVU7QUFDTkMsNkJBRE0sNkJBQ1lDLENBRFosRUFDZTtBQUNqQixxQkFBS0MsTUFBTCxHQUFjRCxFQUFFRSxNQUFGLENBQVNDLEtBQXZCO0FBQ0EscUJBQUtDLE1BQUw7QUFDSCxhQUpLO0FBS05DLDZCQUxNLDZCQUtZTCxDQUxaLEVBS2U7QUFDakIscUJBQUtNLE1BQUwsR0FBY04sRUFBRUUsTUFBRixDQUFTQyxLQUF2QjtBQUNBLHFCQUFLQyxNQUFMO0FBQ0gsYUFSSztBQVNORyxzQkFUTSxzQkFTS1AsQ0FUTCxFQVNRO0FBQ1YscUJBQUtOLFVBQUwsR0FBa0JNLEVBQUVFLE1BQUYsQ0FBU00sT0FBM0I7QUFDQSxvQkFBSVIsRUFBRUUsTUFBRixDQUFTTSxPQUFULElBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLHlCQUFLWCxTQUFMLEdBQWlCLFFBQWpCO0FBQ0gsaUJBRkQsTUFFTztBQUNILHlCQUFLQSxTQUFMLEdBQWlCLFNBQWpCO0FBQ0g7QUFDRCxxQkFBS08sTUFBTDtBQUNILGFBakJLO0FBa0JOSyxvQkFsQk0sb0JBa0JHVCxDQWxCSCxFQWtCTTtBQUNSLG9CQUFJLEtBQUtQLElBQUwsQ0FBVUMsVUFBVixLQUF5Qk0sRUFBRVUsTUFBRixDQUFTQyxPQUFULENBQWlCSCxPQUE5QyxFQUF1RDtBQUNuRCwyQkFBTyxLQUFQO0FBQ0gsaUJBRkQsTUFFTztBQUNILHlCQUFLZCxVQUFMLEdBQWtCTSxFQUFFVSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJILE9BQW5DO0FBQ0Esd0JBQUlSLEVBQUVFLE1BQUYsQ0FBU00sT0FBVCxJQUFvQixDQUF4QixFQUEyQjtBQUN2Qiw2QkFBS1gsU0FBTCxHQUFpQixRQUFqQjtBQUNILHFCQUZELE1BRU87QUFDSCw2QkFBS0EsU0FBTCxHQUFpQixTQUFqQjtBQUNIO0FBQ0QseUJBQUtPLE1BQUw7QUFDSDtBQUNKLGFBOUJLO0FBK0JOUSxvQkEvQk0sc0JBK0JLO0FBQ1BDLCtCQUFLQyxVQUFMLENBQWdCO0FBQ1pDO0FBRFksaUJBQWhCO0FBR0gsYUFuQ0s7QUFvQ05DLHVCQXBDTSx1QkFvQ01oQixDQXBDTixFQW9DUyxDQUFFLENBcENYO0FBcUNOaUIscUJBckNNLHVCQXFDTTtBQUNSSiwrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5QkFBSztBQURPLGlCQUFoQjtBQUdIO0FBekNLLFM7Ozs7O2lDQTJDRDtBQUNMLGdCQUFJLEtBQUtyQixVQUFMLElBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLHFCQUFLRyxTQUFMLEdBQWlCLFFBQWpCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUtBLFNBQUwsR0FBaUIsU0FBakI7QUFDSDtBQUNELGlCQUFLTyxNQUFMO0FBQ0g7Ozs7RUF4RXdCUyxlQUFLSyxJIiwiZmlsZSI6ImRpc2NvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5ZCM56qX6aOf6IKGXCIsXG4gICAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50cyA9IHt9O1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY3VycmVudFRhYjogMSxcbiAgICAgICAgICAgIGZvb2RMaXN0OiBbXG4gICAgICAgICAgICAgICAgXCLlpoLmnpzkvaDkuI3lsJ3or5XvvIzkvaDmsLjov5zkuI3kvJrnn6XpgZPljZfkuqzlpKflrabkuIDpo5/loILpurvovqPpppnplIVcIixcbiAgICAgICAgICAgICAgICBcIum6u+i+o+mmmemUhVwiLFxuICAgICAgICAgICAgICAgIFwi5aaC5p6c5L2g5LiN5bCd6K+V77yM5L2g5rC46L+c5LiN5Lya55+l6YGT5Y2X5Lqs5aSn5a2m5LiA6aOf5aCC6bq76L6j6aaZ6ZSFXCIsXG4gICAgICAgICAgICAgICAgXCLpurvovqPpppnplIVcIixcbiAgICAgICAgICAgICAgICBcIum6u+i+o+mmmemUhVwiLFxuICAgICAgICAgICAgICAgIFwi6bq76L6j6aaZ6ZSFXCIsXG4gICAgICAgICAgICAgICAgXCLlpoLmnpzkvaDkuI3lsJ3or5XvvIzkvaDmsLjov5zkuI3kvJrnn6XpgZPljZfkuqzlpKflrabkuIDpo5/loILpurvovqPpppnplIVcIixcbiAgICAgICAgICAgICAgICBcIum6u+i+o+mmmemUhVwiLFxuICAgICAgICAgICAgICAgIFwi6bq76L6j6aaZ6ZSFXCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6bq76L6j6aaZ6ZSFXCIsXG4gICAgICAgICAgICB3aW5IZWlnaHQ6ICczMDAwcnB4J1xuICAgICAgICB9O1xuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmluZFBpY2tlcjFDaGFuZ2UoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgxID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRQaWNrZXIyQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4MiA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBlLmRldGFpbC5jdXJyZW50XG4gICAgICAgICAgICAgICAgaWYgKGUuZGV0YWlsLmN1cnJlbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndpbkhlaWdodCA9ICc3NzBycHgnXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5IZWlnaHQgPSAnMzAwMHJweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzd2ljaE5hdihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jdXJyZW50VGFiID09PSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudFxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kZXRhaWwuY3VycmVudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbkhlaWdodCA9ICc3NzBycHgnXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbkhlaWdodCA9ICczMDAwcnB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdvRGV0YWlsKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4uL2Rpc2NvdmVyLXBhZ2UvcGFnZXMvZGV0YWlsYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0U2VhcmNoKGUpIHt9LFxuICAgICAgICAgICAgdG9QdWJsaXNoKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy4uL3B1Ymxpc2gtcGFnZS9wYWdlcy9wdWJsaXNoJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFiID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbkhlaWdodCA9ICc3NzBycHgnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMud2luSGVpZ2h0ID0gJzMwMDBycHgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgfVxuIl19