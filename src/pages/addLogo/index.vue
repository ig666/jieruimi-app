<template>
  <div style="height: 100%;">
    <div class="logo">
      <div>
        <img src="/static/images/22d4f422141cb9c0d0a1ef92b0a6dd4.png" alt="" />
        <switch :checked="!selectImg" @change="switch1Change" />
      </div>
      <div>
        <img src="/static/images/bdd2ad6beff0f37c2b0288403b673e3.jpg" alt="" />
        <switch :checked="selectImg" @change="switch2Change" />
      </div>
    </div>
    <van-button
      :loading="loading"
      color="#FFD161"
      block
      class="login-btn"
      @click="ok"
      >确认</van-button
    >
  </div>
</template>

<script>
import { request } from "@/request/request";
export default {
  name: "logo",
  data() {
    return {
      loading: false,
      selectImg: false,
    };
  },
  components: {},

  onLoad() {},
  methods: {
    switch1Change(e) {
      this.selectImg = !this.selectImg;
    },
    switch2Change(e) {
      this.selectImg = !this.selectImg;
    },
    async ok() {
      this.loading = true;
      let res = await request(
        `user-info/logo?defaultLogo=${this.selectImg ? "1" : "2"}`,
        {},
        "POST"
      );
      this.loading = false;
      wx.navigateBack();
    },
  },
  async onShow() {
    let res = await request("user-info", {}, "GET");
    if (res.logo !== "1") {
      this.selectImg = false;
    } else {
      this.selectImg = true;
    }
  },
};
</script>
<style lang="less" scoped>
.logo {
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .login-btn {
    margin-top: 60rpx;
    width: 690rpx;
    height: 88rpx;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 200rpx;
      height: 100rpx;
    }
  }
}
</style>
