<template>
  <div class="mine">
    <div class="mine-news">
      <img src="/static/images/boy.png" alt="" />
      <div>
        <div class="name">{{ name }}</div>
        <div class="phone">{{ phone }}</div>
      </div>
    </div>
    <div class="cells">
      <van-cell @click="addForm" title="添加报告" icon="notes-o" is-link />
      <van-cell @click="addLogo" title="更换LOGO" icon="like-o" is-link />
    </div>
  </div>
</template>

<script>
import store from "../../store/store";
export default {
  data() {
    return {
      name: "陈琦大哥哥",
      phone: "18308417585",
    };
  },
  methods: {
    addForm() {
      wx.navigateTo({ url: "/pages/addForm/main" });
    },
    addLogo(){
      wx.navigateTo({ url: "/pages/addLogo/main" });
    }
  },
  onShow(){
    store.commit('clerament')
  },
  onLoad() {
    let token = wx.getStorageSync("token");
    if (!token) {
      wx.redirectTo({
        url: "/pages/login/main",
      });
    }
  },
};
</script>

<style lang="less" scoped>
.mine {
  .mine-news {
    background-color: #ffd161;
    padding: 40rpx;
    display: flex;
    align-items: center;
    img {
      height: 110rpx;
      width: 110rpx;
      border-radius: 110rpx;
    }
    div {
      margin-left: 20rpx;
      .phone {
        margin-top: 15rpx;
        font-size: 14px;
        color: #666666;
      }
    }
  }
  .cells {
    margin-top: 15rpx;
  }
}
</style>
