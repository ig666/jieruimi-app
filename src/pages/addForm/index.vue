<template>
  <div class="form">
    <!-- 弹出层 -->
    <van-notify id="van-notify" />
    <van-popup
      :show="show"
      position="top"
      custom-style="height: 40%;width:100%"
      @close="onClose"
    >
      <van-grid column-num="3">
        <van-grid-item
          icon="todo-list"
          v-for="(item, index) of form.discoverItemList"
          :text="item.location"
          :key="index"
          @click="checkDetails(item, index)"
        >
        </van-grid-item>
        <van-grid-item
          text="添加现场情况"
          icon="plus"
          @click="checkDetails('add')"
        />
      </van-grid>
    </van-popup>
    <!-- 吸顶 -->
    <van-sticky>
      <van-button
        @click="
          () => {
            show = true;
          }
        "
        type="info"
        >添加发现情况</van-button
      >
    </van-sticky>
    <!-- 内容 -->
    <div class="title">现场有害生物防治服务报告</div>
    <van-cell-group>
      <van-cell-group>
        <van-field
          @change="modelChange($event, 'name')"
          :value="form.name"
          required
          clearable
          label="客户名称"
          placeholder="请输入客户名称"
        />
        <picker mode="date" @change="checkDateChange">
          <van-field
            readonly
            :value="form.checkDate"
            required
            label="检查日期"
            placeholder="请选择检查日期"
          />
        </picker>
        <picker mode="date" @change="reportDateChange">
          <van-field
            readonly
            :value="form.reportDate"
            required
            label="报告日期"
            placeholder="请选择报告日期"
          />
        </picker>
        <van-field
          :value="form.checkPerson"
          required
          @change="modelChange($event, 'checkPerson')"
          clearable
          label="检查人员"
          placeholder="请输入检查人员"
        />
        <van-field
          :value="form.checkArea"
          required
          @change="modelChange($event, 'checkArea')"
          clearable
          label="检查区域"
          placeholder="请输入检查区域"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="form.accompanyPerson"
          @change="modelChange($event, 'accompanyPerson')"
          clearable
          label="随行人员"
          placeholder="请输入随行人员"
        />
        <van-field
          :value="form.inspectionItem"
          @change="modelChange($event, 'inspectionItem')"
          clearable
          label="检查项目"
          placeholder="请输入检查项目"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="form.overallDescription"
          required
          @change="modelChange($event, 'overallDescription')"
          clearable
          label="整体虫鼠患情况描述"
          placeholder="请输入整体虫鼠患情况描述"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="form.serviceProvider"
          required
          @change="modelChange($event, 'serviceProvider')"
          clearable
          label="服务商名称"
          placeholder="请输入服务商名称"
        />
        <van-field
          :value="form.server"
          required
          @change="modelChange($event, 'server')"
          clearable
          label="服务人员"
          placeholder="请输入服务人员"
        />
        <van-field
          :value="form.phone"
          required
          @change="modelChange($event, 'phone')"
          clearable
          label="联系电话"
          placeholder="请输入联系电话"
        />
      </van-cell-group>
    </van-cell-group>
    <div class="okbtn">
      <van-button @click="ok" color="#FFD161" size="large">生成报告</van-button>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";
import { request } from "@/request/request";
import Notify from "../../../static/vant/notify/notify";
const situations = store.state.situations;
export default {
  data() {
    return {
      situations,
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
        discoverItemList: situations,
      },
      autosize: { maxHeight: 100, minHeight: 50 },
    };
  },
  methods: {
    checkData() {
      let phone = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
      if (!this.form.name) {
        Notify({ type: "warning", message: "请填写客户名称" });
        return false;
      } else if (!this.form.checkDate) {
        Notify({ type: "warning", message: "请选择检查日期" });
        return false;
      } else if (!this.form.reportDate) {
        Notify({ type: "warning", message: "请选择报告日期" });
        return false;
      } else if (!this.form.checkPerson) {
        Notify({ type: "warning", message: "请填写检查人员" });
        return false;
      } else if (!this.form.checkArea) {
        Notify({ type: "warning", message: "请填写检查区域" });
        return false;
      } else if (!this.form.overallDescription) {
        Notify({ type: "warning", message: "请填写整体虫鼠患情况描述" });
        return false;
      } else if (!this.form.serviceProvider) {
        Notify({ type: "warning", message: "请填写服务商名称" });
        return false;
      } else if (!this.form.server) {
        Notify({ type: "warning", message: "请填写服务人员" });
        return false;
      } else if (!phone.test(this.form.phone)) {
        Notify({ type: "warning", message: "请填写正确手机号" });
        return false;
      } else {
        return true;
      }
    },
    //非受控组件值绑定
    modelChange(val, key) {
      this.form[key] = val.mp.detail;
    },
    ok() {
      if (!this.checkData()) {
        return;
      }
      let arr = [];
      for (let item of this.form.discoverItemList) {
        arr.push(item.pictureUrl);
      }
      this.syncLoad(this.uploadFile, arr)
        .then(async () => {
          let res = await request("ReportData", this.form, "POST");
          this.reset()
          if (res.code === 0) {
            store.commit("clerament");
            wx.switchTab({
              url: "/pages/orders/main",
            });
          }
        })
        .catch((res) => {
          wx.showToast({
            title: "失败图片数组" + JSON.stringify(res),
            duration: 3000,
            icon: "none",
          });
        });
    },
    uploadFile(url) {
      return new Promise((resolve, reject) => {
        wx.uploadFile({
          url: "https://jieruimi.top/api/files", //开发者服务器 url
          filePath: url, //要上传文件资源的路径
          name: "file", //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
          success: (res) => {
            resolve(res);
          },
          fail: (res) => {
            reject(res);
          },
        });
      });
    },
    //多张图片顺序同步上传
    syncLoad(fn, arr, handler) {
      if (typeof fn !== "function") throw TypeError("第一个参数必须是function");
      if (!Array.isArray(arr)) throw TypeError("第二个参数必须是数组");
      handler = (url, index) => {
        this.form.discoverItemList[index].pictureUrl = url;
      };
      const errors = [];
      return load(0);
      function load(index) {
        if (index >= arr.length) {
          return errors.length > 0 ? Promise.reject(errors) : Promise.resolve();
        }
        return fn(arr[index])
          .then((res) => {
            handler(res.data, index);
          })
          .catch((err) => {
            console.log(err);
            errors.push(arr[index]);
            return load(index + 1);
          })
          .then(() => {
            return load(index + 1);
          });
      }
    },
    checkDateChange(val) {
      this.form.checkDate = val.mp.detail.value;
    },
    reportDateChange(val) {
      this.form.reportDate = val.mp.detail.value;
    },
    onClose() {
      this.show = false;
    },
    checkDetails(item, index) {
      if (item === "add") {
        wx.navigateTo({
          url: "/pages/detail/main?type=add",
        });
      } else {
        wx.navigateTo({
          url: "/pages/detail/main?type=update",
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit("detailNew", { data: { item, index } });
          },
        });
      }
    },
    //重置
    reset() {
      for (let key in this.form) {
        if (key !== "discoverItemList") {
          this.form[key] = "";
        }
      }
    },
  },
  onLoad() {
  },
};
</script>

<style lang="less" scoped>
.form {
  padding-bottom: 60rpx;
  .title {
    padding: 30rpx 0rpx;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    background-color: #ffffff;
    margin-top: 20rpx;
    margin-bottom: 20rpx;
  }
  .okbtn {
    margin-top: 30rpx;
  }
}
</style>
