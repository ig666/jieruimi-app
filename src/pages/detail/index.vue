<template>
  <div class="detail">
    <van-cell-group>
      <van-field
        :value="situation.location"
        @change="modelChange($event, 'location')"
        clearable
        label="地点位置"
        placeholder="请输入地点位置"
      />
      <van-field
        :value="situation.description"
        @change="modelChange($event, 'description')"
        clearable
        label="情况描述"
        placeholder="请输入情况描述"
        type="textarea"
        :autosize="autosize"
      />
      <van-field
        :value="situation.potentialRisks"
        @change="modelChange($event, 'potentialRisks')"
        clearable
        label="风险隐患"
        placeholder="请输入风险隐患"
        type="textarea"
        :autosize="autosize"
      />
      <van-field
        :value="situation.suggest"
        @change="modelChange($event, 'suggest')"
        clearable
        label="建议措施"
        placeholder="请输入建议措施"
        type="textarea"
        :autosize="autosize"
      />
      <van-field
        :value="situation.remark"
        @change="modelChange($event, 'remark')"
        clearable
        label="备注"
        placeholder="请输入备注"
        type="textarea"
        :autosize="autosize"
      />
    </van-cell-group>
    <div class="choose-img">
      <div class="label">选择图片</div>
      <van-uploader
        max-count="1"
        :file-list="situation.pictureUrl"
        @afterRead="afterRead"
        @delete="deleteImg"
      />
    </div>
    <div class="okbtn">
      <div class="btn">
        <van-button size="large" type="primary" @click="ok">确定</van-button>
      </div>
      <div class="btn" style="margin-left: 40rpx;" v-if="type === 'update'">
        <van-button size="large" type="danger" @click="deleteSituation"
          >删除</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";
export default {
  data() {
    return {
      index: "",
      type: "",
      autosize: { maxHeight: 100, minHeight: 50 },
      situation: {
        location: "",
        description: "",
        potentialRisks: "",
        suggest: "",
        pictureUrl: [],
      },
    };
  },
  onLoad(option) {
    this.type = option.type;
    if (option.type === "update") {
      const eventChannel = this.$mp.page.getOpenerEventChannel();
      eventChannel.on("detailNew", ({ data }) => {
        this.situation = data.item;
        this.index = data.index;
      });
    } else {
      this.situation = {
        location: "",
        description: "",
        potentialRisks: "",
        suggest: "",
        pictureUrl: [],
      };
    }
  },
  methods: {
    deleteSituation() {
      store.commit("decrement", this.index);
      wx.navigateBack();
    },
    //非受控组件值绑定
    modelChange(val, key) {
      for (let item in this.situation) {
        if (item === key) {
          this.situation[item] = val.mp.detail;
        }
      }
    },
    deleteImg({ target }) {
      this.situation.pictureUrl.splice(target.index, 1);
    },
    afterRead({ target }) {
      wx.compressImage({
        src: target.file.path,
        success: (res) => {
          console.log(res)
          this.situation.pictureUrl.push({
            url: res.tempFilePath,
            isImage: true,
          });
        },
      });
    },
    ok() {
      if (this.type === "update") {
        wx.navigateBack();
      } else {
        store.commit("increment", this.situation);
        wx.navigateBack();
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
    display: flex;
    justify-content: center;
    .btn {
      width: 200rpx;
    }
  }
  .choose-img {
    display: flex;
    align-items: center;
    padding: 20rpx;
    background: #ffffff;
    .label {
      min-width: 180rpx;
      max-width: 180rpx;
      font-size: 28rpx;
    }
  }
}
</style>
