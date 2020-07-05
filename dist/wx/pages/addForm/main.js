require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(53);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_982d601a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(96);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-982d601a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_982d601a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addForm\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-982d601a", Component.options)
  } else {
    hotAPI.reload("data-v-982d601a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_store__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_request__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__ = __webpack_require__(47);





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




var situations = __WEBPACK_IMPORTED_MODULE_5__store_store__["a" /* default */].state.situations;
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      situations: situations,
      show: false,
      form: {
        name: "",
        checkDate: "",
        reportDate: "",
        checkPerson: "",
        accompanyPerson: "",
        checkArea: "",
        inspectionItem: "",
        overallDescription: "",
        serviceProvider: "",
        server: "",
        phone: "",
        checkMethod: "",
        remark: "",
        discoverItemList: situations
      },
      autosize: { maxHeight: 100, minHeight: 50 }
    };
  },

  methods: {
    checkData: function checkData() {
      var phone = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
      if (!this.form.name) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请填写客户名称" });
        return false;
      } else if (!this.form.checkDate) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请选择检查日期" });
        return false;
      } else if (!this.form.reportDate) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请选择报告日期" });
        return false;
      } else if (!this.form.checkPerson) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请填写检查人员" });
        return false;
      } else if (!this.form.checkArea) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请填写检查区域" });
        return false;
      } else if (!this.form.overallDescription) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请填写整体虫鼠患情况描述" });
        return false;
      } else if (!this.form.serviceProvider) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请填写服务商名称" });
        return false;
      } else if (!this.form.server) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请填写服务人员" });
        return false;
      } else if (!phone.test(this.form.phone)) {
        Object(__WEBPACK_IMPORTED_MODULE_7__static_vant_notify_notify__["a" /* default */])({ type: "warning", message: "请填写正确手机号" });
        return false;
      } else {
        return true;
      }
    },

    //非受控组件值绑定
    modelChange: function modelChange(val, key) {
      for (var item in this.form) {
        if (item === key) {
          this.form[item] = val.mp.detail;
        }
      }
    },
    ok: function ok() {
      var _this = this;

      if (!this.checkData()) {
        return;
      }
      var arr = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.form.discoverItemList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          arr.push(item.pictureUrl);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.syncLoad(this.uploadFile, arr).then(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_6__request_request__["a" /* request */])("ReportData", _this.form, "POST");

              case 2:
                res = _context.sent;

                if (res.code === 0) {
                  __WEBPACK_IMPORTED_MODULE_5__store_store__["a" /* default */].commit('clerament');
                  wx.switchTab({
                    url: "/pages/orders/main"
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))).catch(function (res) {
        wx.showToast({
          title: "失败图片数组" + __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(res),
          duration: 3000,
          icon: "none"
        });
      });
    },
    uploadFile: function uploadFile(url) {
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        wx.uploadFile({
          url: "http://120.26.187.170/files", //开发者服务器 url
          filePath: url, //要上传文件资源的路径
          name: "file", //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(res) {
            reject(res);
          }
        });
      });
    },

    //多张图片顺序同步上传
    syncLoad: function syncLoad(fn, arr, handler) {
      var _this2 = this;

      if (typeof fn !== "function") throw TypeError("第一个参数必须是function");
      if (!Array.isArray(arr)) throw TypeError("第二个参数必须是数组");
      handler = function handler(url, index) {
        _this2.form.discoverItemList[index].pictureUrl = url;
      };
      var errors = [];
      return load(0);
      function load(index) {
        if (index >= arr.length) {
          return errors.length > 0 ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(errors) : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();
        }
        return fn(arr[index]).then(function (res) {
          handler(res.data, index);
        }).catch(function (err) {
          console.log(err);
          errors.push(arr[index]);
          return load(index + 1);
        }).then(function () {
          return load(index + 1);
        });
      }
    },
    checkDateChange: function checkDateChange(val) {
      this.form.checkDate = val.mp.detail.value;
    },
    reportDateChange: function reportDateChange(val) {
      this.form.reportDate = val.mp.detail.value;
    },
    onClose: function onClose() {
      this.show = false;
    },
    checkDetails: function checkDetails(item, index) {
      if (item === "add") {
        wx.navigateTo({
          url: "/pages/detail/main?type=add"
        });
      } else {
        wx.navigateTo({
          url: "/pages/detail/main?type=update",
          success: function success(res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit("detailNew", { data: { item: item, index: index } });
          }
        });
      }
    },

    //重置
    reset: function reset() {
      for (var key in this.form) {
        console.log(key);
        if (key !== "discoverItemList") {
          this.form[key] = "";
        }
      }
    }
  },
  onLoad: function onLoad() {
    this.reset();
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form"
  }, [_c('van-notify', {
    attrs: {
      "id": "van-notify",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.show,
      "position": "top",
      "custom-style": "height: 40%;width:100%",
      "eventid": '2',
      "mpcomid": '4'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('van-grid', {
    attrs: {
      "column-num": "3",
      "mpcomid": '3'
    }
  }, [_vm._l((_vm.form.discoverItemList), function(item, index) {
    return _c('van-grid-item', {
      key: index,
      attrs: {
        "icon": "todo-list",
        "text": item.location,
        "eventid": '0_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.checkDetails(item, index)
        }
      }
    })
  }), _vm._v(" "), _c('van-grid-item', {
    attrs: {
      "text": "添加现场情况",
      "icon": "plus",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": function($event) {
        _vm.checkDetails('add')
      }
    }
  })], 2)], 1), _vm._v(" "), _c('van-sticky', {
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('van-button', {
    attrs: {
      "type": "info",
      "eventid": '3',
      "mpcomid": '5'
    },
    on: {
      "click": function () {
        _vm.show = true;
      }
    }
  }, [_vm._v("添加发现情况")])], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("现场有害生物防治服务报告")]), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "mpcomid": '21'
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '20'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.form.name,
      "required": "",
      "clearable": "",
      "label": "客户名称",
      "placeholder": "请输入客户名称",
      "eventid": '4',
      "mpcomid": '7'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'name')
      }
    }
  }), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "eventid": '5'
    },
    on: {
      "change": _vm.checkDateChange
    }
  }, [_c('van-field', {
    attrs: {
      "readonly": "",
      "value": _vm.form.checkDate,
      "required": "",
      "label": "检查日期",
      "placeholder": "请选择检查日期",
      "mpcomid": '8'
    }
  })], 1), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "eventid": '6'
    },
    on: {
      "change": _vm.reportDateChange
    }
  }, [_c('van-field', {
    attrs: {
      "readonly": "",
      "value": _vm.form.reportDate,
      "required": "",
      "label": "报告日期",
      "placeholder": "请选择报告日期",
      "mpcomid": '9'
    }
  })], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.checkPerson,
      "required": "",
      "clearable": "",
      "label": "检查人员",
      "placeholder": "请输入检查人员",
      "eventid": '7',
      "mpcomid": '10'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'checkPerson')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.checkArea,
      "required": "",
      "clearable": "",
      "label": "检查区域",
      "placeholder": "请输入检查区域",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '8',
      "mpcomid": '11'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'checkArea')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.overallDescription,
      "required": "",
      "clearable": "",
      "label": "整体虫鼠患情况描述",
      "placeholder": "请输入整体虫鼠患情况描述",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '9',
      "mpcomid": '12'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'overallDescription')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.serviceProvider,
      "required": "",
      "clearable": "",
      "label": "服务商名称",
      "placeholder": "请输入服务商名称",
      "eventid": '10',
      "mpcomid": '13'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'serviceProvider')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.server,
      "required": "",
      "clearable": "",
      "label": "服务人员",
      "placeholder": "请输入服务人员",
      "eventid": '11',
      "mpcomid": '14'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'server')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.phone,
      "required": "",
      "clearable": "",
      "label": "联系电话",
      "placeholder": "请输入联系电话",
      "eventid": '12',
      "mpcomid": '15'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'phone')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.accompanyPerson,
      "clearable": "",
      "label": "随行人员",
      "placeholder": "请输入随行人员",
      "eventid": '13',
      "mpcomid": '16'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'accompanyPerson')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.inspectionItem,
      "clearable": "",
      "label": "检查项目",
      "placeholder": "请输入检查项目",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '14',
      "mpcomid": '17'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'inspectionItem')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.checkMethod,
      "clearable": "",
      "label": "检查方法",
      "placeholder": "请输入检查方法",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '15',
      "mpcomid": '18'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'checkMethod')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.form.remark,
      "clearable": "",
      "label": "备注",
      "placeholder": "请输入备注",
      "type": "textarea",
      "autosize": _vm.autosize,
      "eventid": '16',
      "mpcomid": '19'
    },
    on: {
      "change": function($event) {
        _vm.modelChange($event, 'remark')
      }
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "okbtn"
  }, [_c('van-button', {
    attrs: {
      "color": "#FFD161",
      "size": "large",
      "eventid": '17',
      "mpcomid": '22'
    },
    on: {
      "click": _vm.ok
    }
  }, [_vm._v("生成报告")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-982d601a", esExports)
  }
}

/***/ })

},[52]);