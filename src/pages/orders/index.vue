<template>
  <div class="orders">
    <scroll-view
      @scrolltolower="scrolltolower"
      scroll-y
      style="height: 100%; margin-top: 20rpx;"
    >
      <i-swipeout
        @change="change($event, item.id)"
        i-class="i-swipeout-demo-item"
        :actions="actions"
        v-for="(item, index) of list"
        :key="index"
      >
        <view slot="content">
          <i-cell
            i-class="i-cell-padding"
            :title="item.name + '-' + item.inspectionItem"
            :label="item.serviceProvider"
            :value="item.server"
          >
          </i-cell>
        </view>
      </i-swipeout>
      <div class="more" v-show="unNextPage">没有更多啦~</div>
    </scroll-view>
  </div>
</template>

<script>
import { request } from "@/request/request";
export default {
  data() {
    return {
      unNextPage: false,
      page: {
        size: 10,
        page: 0,
      },
      actions: [
        {
          name: "下载",
          color: "#fff",
          fontsize: "20",
          width: 100,
          icon: "share",
          background: "#2C8CEC",
        },
        {
          name: "删除",
          width: 100,
          color: "#80848f",
          fontsize: "20",
          icon: "close",
        },
      ],
      list: [],
    };
  },

  components: {},

  methods: {
    scrolltolower(res) {
      if (this.unNextPage) {
        return;
      }
      this.page.page += 1;
      this.getList();
    },
    change({ target }, id) {
      let userName = wx.getStorageSync("data").userName;
      if (target.index === 0) {
        wx.showLoading({
          title: "文件下载中",
        });
        wx.downloadFile({
          // 示例 url，并非真实存在
          url: `https://jieruimi.top/api/pdf/${id}?userName=${userName}`,
          success: function (res) {
            const filePath = res.tempFilePath;
            console.log(res, "res");
            wx.openDocument({
              showMenu: true,
              fileType: "pdf",
              filePath: filePath,
              success: function (res) {
                wx.hideLoading();
                console.log("打开文档成功", res);
              },
              fail: (res) => {
                console.log("fail", res);
              },
            });
          },
        });
      } else {
        this.deleteRport(id);
      }
    },
    async deleteRport(id) {
      this.reset();
      let res = await request(`ReportData/${id}`, {}, "DELETE");
      if (res.code === 200) {
        this.getList();
      }
    },
    async getList() {
      let res = await request("ReportData/page", this.page);
      this.list = this.list.concat(res.content);
      if (res.empty) {
        this.unNextPage = true;
      }
    },
    //重置
    reset() {
      this.page = {
        size: 10,
        page: 0,
      };
      this.list = [];
      this.unNextPage=false
    },
  },
  async onShow() {
    this.reset();
    this.getList();
  },
};
</script>

<style lang="less" scoped>
.orders {
  height: 100%;
  .more {
    text-align: center;
    margin-top: 30rpx;
    font-size: 28rpx;
  }
}
</style>
