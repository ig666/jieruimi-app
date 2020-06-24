<template>
  <div class="home">
    <h1>待开发区域</h1>
    <txv-video
      class="video"
      vid="e0354z3cqjp"
      playerid="txv1"
    ></txv-video>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},

  created() {
    // let app = getApp()
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #2bc977;
  }

  .video {
    margin-top: 20rpx;
    width: 100%;
  }
}
</style>
