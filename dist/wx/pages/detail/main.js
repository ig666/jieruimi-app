require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(81);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26ffd48e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(84);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26ffd48e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26ffd48e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26ffd48e", Component.options)
  } else {
    hotAPI.reload("data-v-26ffd48e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store__ = __webpack_require__(37);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      show: false,
      imgUrl: "",
      index: "",
      type: "",
      autosize: { maxHeight: 100, minHeight: 50 },
      situation: {
        location: "",
        description: "",
        potentialRisks: "",
        suggest: "",
        pictureUrl: ""
      }
    };
  },
  onLoad: function onLoad(option) {
    var _this = this;

    this.type = option.type;
    if (option.type === "update") {
      var eventChannel = this.$mp.page.getOpenerEventChannel();
      eventChannel.on("detailNew", function (_ref) {
        var data = _ref.data;

        _this.situation = data.item;
        _this.index = data.index;
        _this.imgUrl = _this.situation.pictureUrl;
      });
    } else {
      this.imgUrl = '';
      this.situation = {
        location: "",
        description: "",
        potentialRisks: "",
        suggest: "",
        pictureUrl: ""
      };
    }
  },

  methods: {
    deleteImg: function deleteImg() {
      this.imgUrl = '';
    },

    //选取照片方式
    choosePhoto: function choosePhoto(type) {
      var _this2 = this;

      this.show = false;
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: type === 'paly' ? ['camera'] : ['album'],
        success: function success(res) {
          _this2.imgUrl = res.tempFilePaths[0];
          _this2.show = false;
        }
      });
    },
    chooseImg: function chooseImg() {
      this.show = true;
    },
    onClose: function onClose() {
      this.show = false;
    },
    previewImage: function previewImage() {
      wx.previewImage({
        current: this.imgUrl,
        urls: [this.imgUrl] // 需要预览的图片http链接列表
      });
    },
    deleteSituation: function deleteSituation() {
      __WEBPACK_IMPORTED_MODULE_0__store_store__["a" /* default */].commit("decrement", this.index);
      wx.navigateBack();
    },

    //非受控组件值绑定
    modelChange: function modelChange(val, key) {
      for (var item in this.situation) {
        if (item === key) {
          this.situation[item] = val.mp.detail;
        }
      }
    },
    ok: function ok() {
      this.situation.pictureUrl = this.imgUrl;
      if (this.type === "update") {
        wx.navigateBack();
      } else {
        __WEBPACK_IMPORTED_MODULE_0__store_store__["a" /* default */].commit("increment", this.situation);
        wx.navigateBack();
      }
    }
  }
});

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('van-popup', {
    attrs: {
      "show": _vm.show,
      "round": "",
      "position": "bottom",
      "custom-style": "height: 20%",
      "custom-class": "chooseimg",
      "eventid": '3',
      "mpcomid": '0'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('div', {
    staticStyle: {
      "border-bottom": "1px solid #F5F5F5"
    },
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.choosePhoto('play')
      }
    }
  }, [_vm._v("拍照")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.choosePhoto('choose')
      }
    }
  }, [_vm._v("从手机相册选择")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border-top": "20rpx solid #F8F8FA"
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.onClose
    }
  }, [_vm._v("取消")])]), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.situation.location,
      "clearable": "",
      "label": "地点位置",
      "placeholder": "请输入地点位置",
      "eventid": '4',
      "mpcomid": '1'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'location')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.situation.description,
      "clearable": "",
      "label": "情况描述",
      "placeholder": "请输入情况描述",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '5',
      "mpcomid": '2'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'description')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.situation.potentialRisks,
      "clearable": "",
      "label": "风险隐患",
      "placeholder": "请输入风险隐患",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '6',
      "mpcomid": '3'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'potentialRisks')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.situation.suggest,
      "clearable": "",
      "label": "建议措施",
      "placeholder": "请输入建议措施",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '7',
      "mpcomid": '4'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'suggest')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.situation.remark,
      "clearable": "",
      "label": "备注",
      "placeholder": "请输入备注",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '8',
      "mpcomid": '5'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'remark')
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "choose-img"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("选择图片")]), _vm._v(" "), _c('div', {
    staticClass: "photo"
  }, [(!_vm.imgUrl) ? _c('van-button', {
    attrs: {
      "custom-style": "height:200rpx",
      "block": "",
      "plain": "",
      "icon": "photograph",
      "type": "info",
      "eventid": '10',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.chooseImg
    }
  }) : _c('img', {
    staticClass: "custom-image",
    attrs: {
      "src": _vm.imgUrl,
      "alt": "",
      "eventid": '9'
    },
    on: {
      "click": _vm.previewImage
    }
  }), _vm._v(" "), (_vm.imgUrl) ? _c('van-icon', {
    attrs: {
      "color": "#F4778E",
      "name": "clear",
      "eventid": '11',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.deleteImg
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "okbtn"
  }, [_c('div', {
    staticClass: "btn"
  }, [_c('van-button', {
    attrs: {
      "size": "large",
      "type": "primary",
      "eventid": '12',
      "mpcomid": '9'
    },
    on: {
      "click": _vm.ok
    }
  }, [_vm._v("确定")])], 1), _vm._v(" "), (_vm.type === 'update') ? _c('div', {
    staticClass: "btn",
    staticStyle: {
      "margin-left": "40rpx"
    }
  }, [_c('van-button', {
    attrs: {
      "size": "large",
      "type": "danger",
      "eventid": '13',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.deleteSituation
    }
  }, [_vm._v("删除")])], 1) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26ffd48e", esExports)
  }
}

/***/ })

},[80]);