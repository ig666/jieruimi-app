<template>
  <div class="orders">
    <scroll-view style="height: 100%;"> </scroll-view>
  </div>
</template>

<script>
import { request } from "@/request/request";
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},
  async onShow() {
    // let res = await request("api");
  },
};
</script>

<style lang="less" scoped>
.orders {
  height: 100%;
}
</style>
