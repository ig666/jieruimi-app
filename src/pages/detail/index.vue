<template>
  <div class="detail">
    <van-cell-group>
      <van-cell-group>
        <van-field
          :value="name"
          clearable
          label="地点位置"
          placeholder="请输入地点位置"
        />
        <van-field
          :value="name"
          clearable
          label="情况描述"
          placeholder="请输入情况描述"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="name"
          clearable
          label="情况照片"
          placeholder="请选择情况照片"
        />
        <van-field
          :value="name"
          clearable
          label="风险隐患"
          placeholder="请输入风险隐患"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="name"
          clearable
          label="建议措施"
          placeholder="请输入建议措施"
          type="textarea"
          :autosize="autosize"
        />
        <van-field
          :value="name"
          clearable
          label="备注"
          placeholder="请输入备注"
          type="textarea"
          :autosize="autosize"
        />
      </van-cell-group>
    </van-cell-group>
    <div class="okbtn">
      <van-button type="primary" size="large">确定</van-button>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";
export default {
  data() {
    return {
      autosize: { maxHeight: 100, minHeight: 50 },
      name: "",
      index: "",
      situation: {},
    };
  },
  onLoad(option) {
    if (option.type === "update") {
      const eventChannel = this.$mp.page.getOpenerEventChannel();
      eventChannel.on("detailNew", (data) => {
        this.situation = data.item;
        this.index = data.index;
      });
    }
  },
  methods: {
    //非受控组件值绑定
    modelChange(val, key) {
      for (let item in this.form) {
        if (item === key) {
          this.form[item] = val.mp.detail;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  padding-top: 30rpx;
  .okbtn {
    margin-top: 150rpx;
  }
}
</style>
