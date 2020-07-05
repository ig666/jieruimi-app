<template>
  <div class="detail">
    <!-- 弹出层 -->
    <van-popup
      :show="show"
      round
      position="bottom"
      custom-style="height: 20%"
      @close="onClose"
      custom-class="chooseimg"
    >
      <div
        style="border-bottom: 1px solid #F5F5F5;"
        @click="choosePhoto('camera')"
      >拍照</div>
      <div @click="choosePhoto('album')">从手机相册选择</div>
      <div
        style="border-top:20rpx solid #F8F8FA;"
        @click="onClose"
      >取消</div>
    </van-popup>
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
      <div class="photo">
        <van-button
          v-if="!imgUrl"
          custom-style='height:200rpx'
          block
          plain
          @click="chooseImg"
          icon="photograph"
          type="info"
        />
        <img
          class="custom-image"
          @click="previewImage"
          v-else
          :src="imgUrl"
          alt=""
        >
        <van-icon
        @click="deleteImg"
          v-if='imgUrl'
          color="#F4778E"
          name="clear"
        />
      </div>
    </div>
    <div class="okbtn">
      <div class="btn">
        <van-button
          size="large"
          type="primary"
          @click="ok"
        >确定</van-button>
      </div>
      <div
        class="btn"
        style="margin-left: 40rpx;"
        v-if="type === 'update'"
      >
        <van-button
          size="large"
          type="danger"
          @click="deleteSituation"
        >删除</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";
export default {
  data() {
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
        pictureUrl: "",
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
        this.imgUrl=this.situation.pictureUrl
      });
    } else {
      this.imgUrl=''
      this.situation = {
        location: "",
        description: "",
        potentialRisks: "",
        suggest: "",
        pictureUrl: "",
      };
    }
  },
  methods: {
    deleteImg(){
      this.imgUrl=''
    },
    //选取照片方式
    choosePhoto(type) {
      this.show = false
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: [type],
        success: (res) => {
          this.imgUrl = res.tempFilePaths[0]
          this.show = false
        }
      })
    },
    chooseImg() {
      this.show = true
    },
    onClose() {
      this.show = false
    },
    previewImage() {
      wx.previewImage({
        current: this.imgUrl,
        urls: [this.imgUrl] // 需要预览的图片http链接列表
      })
    },
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
    ok() {
      this.situation.pictureUrl=this.imgUrl
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
  .chooseimg {
    div {
      text-align: center;
      padding: 20rpx;
      font-size: 28rpx;
      background-color: #ffffff;
    }
  }
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
    .photo {
      min-width: 200rpx;
      min-height: 200rpx;
      position: relative;
      ._van-icon {
        position: absolute;
        top: -10rpx;
        right: -12rpx;
        z-index: 10;
      }
      .custom-image {
        width: 200rpx;
        height: 200rpx;
      }
    }
    .label {
      min-width: 180rpx;
      max-width: 180rpx;
      font-size: 28rpx;
    }
  }
}
</style>
