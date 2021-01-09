<template>
  <div class="login">
    <!-- 内容 -->
    <div class="own">
      <img src="/static/images/logo_maincolor@3x.png" alt class="log" />
      <div class="center">
        <van-field
          clearable
          left-icon="/static/images/phone2x.png"
          placeholder="请输入用户名"
          :maxlength="14"
          @change="phoneChange"
        />
        <van-field
          @change="codeChange"
          clearable
          left-icon="/static/images/passWord2x.png"
          placeholder="密码"
          :border="false"
          :maxlength="14"
        >
        </van-field>
      </div>
      <van-button
        :loading="loading"
        :color="btnColor"
        block
        class="login-btn"
        @click="loginIn"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
import Notify from "../../../static/vant/notify/notify";
import { request } from "@/request/request";

export default {
  name: "login",
  data() {
    return {
      loading: false,
      loginDisabled: true,
      btnColor: "#FFD161",
      disabled: false,
      userPhone: "",
      code: "",
      codeTime: "发送验证码",
      timeChange: "",
    };
  },
  components: {},

  onLoad() {},

  methods: {
    // 非受控组件动态改变值
    codeChange(e) {
      this.code = e.mp.detail;
    },
    // 非受控组件动态改变值
    phoneChange(e) {
      this.userPhone = e.mp.detail;
    },
    // 登录
    async loginIn() {
      this.loading = true;
      wx.request({
        url: `https://jieruimi.top/login/oauth/token?grant_type=password&username=${this.userPhone}&password=${this.code}`, //仅为示例，并非真实的接口地址
        header: {
          "content-type": "application/json", // 默认值
          Authorization: "Basic Y2xpZW50OnN1bi4xMzE0",
        },
        method: "POST",
        success: (res) => {
          if (res.statusCode === 200) {
            this.loading = false;
            wx.setStorage({
              key: "token",
              data: res.data.access_token,
              success: async () => {
                let res = await request("user-info", {}, "GET");
                if (res) {
                  wx.setStorageSync("data", res);
                  wx.reLaunch({ url: "/pages/mine/main" });
                }
              },
            });
          } else {
            wx.showToast({
              title: `登陆失败:${res.error_description}`,
              icon: "none",
              duration: 2000,
            });
            this.loading = false;
          }
        },
        fail: (res) => {
          wx.showToast({
            title: `登陆失败:${res.errMsg}`,
            icon: "none",
            duration: 2000,
          });
          this.loading = false;
        },
      });
    },
  },
  onUnload() {
    console.log("xx");
    this.codeTime = "获取验证码";
    this.disabled = false;
    clearInterval(this.timeChange);
  },
};
</script>
<style lang="less">
.login {
  .own {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .log {
      margin-top: 200rpx;
      width: 234rpx;
      height: 54rpx;
    }
    .center {
      background-color: #ffffff;
      width: 690rpx;
      height: 242rpx;
      margin-top: 200rpx;
      box-shadow: 0px 10rpx 20rpx 0rpx #d2d6f9;
      border-radius: 20rpx;
      .van-cell {
        padding: 28rpx !important;
      }
      .van-cell__left-icon-wrap {
        margin-right: 30rpx !important;
      }
      .van-icon__image {
        position: absolute;
      }
    }
    .login-btn {
      margin-top: 60rpx;
      width: 690rpx;
      height: 88rpx;
    }
  }
}
</style>
