require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(22);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26ffd48e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(25);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(1)
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

/***/ 23:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store__ = __webpack_require__(3);
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
      autosize: { maxHeight: 100, minHeight: 50 },
      situation: {
        location: "",
        description: "",
        potentialRisks: "",
        suggest: "",
        fileList: []
      }
    };
  },
  onLoad: function onLoad(option) {
    var _this = this;

    if (option.type === "update") {
      var eventChannel = this.$mp.page.getOpenerEventChannel();
      eventChannel.on("detailNew", function (data) {
        _this.situation = data.item;
      });
    }
  },

  methods: {
    //非受控组件值绑定
    modelChange: function modelChange(val, key) {
      for (var item in this.situation) {
        if (item === key) {
          this.situation[item] = val.mp.detail;
        }
      }
    },
    deleteImg: function deleteImg(_ref) {
      var target = _ref.target;

      this.situation.fileList.splice(0, 1);
    },
    afterRead: function afterRead(_ref2) {
      var _this2 = this;

      var target = _ref2.target;

      wx.compressImage({
        src: target.file.path,
        success: function success(res) {
          _this2.situation.fileList.push({ url: res.tempFilePath, isImage: true });
        }
      });
    },
    ok: function ok() {
      __WEBPACK_IMPORTED_MODULE_0__store_store__["a" /* default */].commit('increment', this.situation);
      wx.navigateBack();
    }
  }
});

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.situation.location,
      "clearable": "",
      "label": "地点位置",
      "placeholder": "请输入地点位置",
      "eventid": '0',
      "mpcomid": '0'
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
      "eventid": '1',
      "mpcomid": '1'
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
      "eventid": '2',
      "mpcomid": '2'
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
      "eventid": '3',
      "mpcomid": '3'
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
      "eventid": '4',
      "mpcomid": '4'
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
  }, [_vm._v("选择图片")]), _vm._v(" "), _c('van-uploader', {
    attrs: {
      "max-count": "1",
      "fileList": _vm.situation.fileList,
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "afterRead": _vm.afterRead,
      "delete": _vm.deleteImg
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "okbtn"
  }, [_c('van-button', {
    attrs: {
      "type": "primary",
      "size": "large",
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.ok
    }
  }, [_vm._v("确定")])], 1)], 1)
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

},[21]);