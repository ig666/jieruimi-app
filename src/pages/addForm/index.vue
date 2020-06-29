<template>
  <div class="form">
    <!-- 弹出层 -->
    <van-popup
      :show="show"
      position="top"
      custom-style="height: 40%;width:100%"
      @close="onClose"
    >
      <van-grid column-num="3">
        <van-grid-item
          icon="todo-list"
          :text="item.location"
          v-for="(item, index) of form.discoverItemList"
          :key="index"
          @click="checkDetails(item)"
          use-slot
        >
        <slot>
          我干
        </slot>
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
      >添加发现情况</van-button>
    </van-sticky>
    <!-- 内容 -->
    <div class="title">现场有害生物防治服务报告</div>
    <van-cell-group>
      <van-cell-group>
        <van-field
          @change="modelChange($event,'name')"
          :value="form.name"
          required
          clearable
          label="客户名称"
          placeholder="请输入客户名称"
        />
        <picker
          mode="date"
          @change="checkDateChange"
        >
          <van-field
            :value="form.checkDate"
            required
            label="检查日期"
            placeholder="请选择检查日期"
          />
        </picker>
        <picker
          mode="date"
          @change="reportDateChange"
        >
          <van-field
            :value="form.reportDate"
            required
            label="报告日期"
            placeholder="请选择报告日期"
          />
        </picker>
        <van-field
          :value="form.checkPerson"
          required
          @change="modelChange($event,'checkPerson')"
          clearable
          label="检查人员"
          placeholder="请输入检查人员"
        />
        <van-field
          :value="form.checkArea"
          required
          @change="modelChange($event,'checkArea')"
          clearable
          label="检查区域"
          placeholder="请输入检查区域"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="form.overallDescription"
          required
          @change="modelChange($event,'overallDescription')"
          clearable
          label="整体虫鼠患情况描述"
          placeholder="请输入整体虫鼠患情况描述"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="form.serviceProvider"
          required
          @change="modelChange($event,'serviceProvider')"
          clearable
          label="服务商名称"
          placeholder="请输入服务商名称"
        />
        <van-field
          :value="form.server"
          required
          @change="modelChange($event,'server')"
          clearable
          label="服务人员"
          placeholder="请输入服务人员"
        />
        <van-field
          :value="form.phone"
          required
          @change="modelChange($event,'phone')"
          clearable
          label="联系电话"
          placeholder="请输入联系电话"
        />
        <van-field
          :value="form.accompanyPerson"
          @change="modelChange($event,'accompanyPerson')"
          clearable
          label="随行人员"
          placeholder="请输入随行人员"
        />
        <van-field
          :value="form.inspectionItem"
          @change="modelChange($event,'inspectionItem')"
          clearable
          label="检查项目"
          placeholder="请输入检查项目"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="form.checkMethod"
          @change="modelChange($event,'checkMethod')"
          clearable
          label="检查方法"
          placeholder="请输入检查方法"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="form.remark"
          @change="modelChange($event,'remark')"
          clearable
          label="备注"
          placeholder="请输入备注"
          type="textarea"
          :autosize="autosize"
        />
      </van-cell-group>
    </van-cell-group>
    <div class="okbtn">
      <van-button
        @click="ok"
        type="primary"
        size="large"
      >生成报告</van-button>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";
const situations = store.state.situations;
export default {
  data() {
    return {
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
        serviceProvider:"",
        server:"",
        phone:"",
        checkMethod:"",
        remark:"",
        discoverItemList:situations
      },
      autosize: { maxHeight: 100, minHeight: 50 },
    };
  },
  methods: {
    //非受控组件值绑定
    modelChange(val, key) {
      for (let item in this.form) {
        if (item === key) {
          this.form[item] = val.mp.detail
        }
      }
    },
    ok() {
      console.log(this.form);
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
    checkDetails(item) {
      if (item === "add") {
        wx.navigateTo({
          url: "/pages/detail/main?type=add",
        });
      } else {
        wx.navigateTo({
          url: "/pages/detail/main?type=update",
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit("detailNew", { data: { item } });
          },
        });
      }
    },
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
