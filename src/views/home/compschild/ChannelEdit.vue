<template>
  <div class="channel-edit">
    <van-cell class="cell" center :border="false">
      <div slot="title" class="channel-title">我的频道</div>
      <van-button type="warning" plain round size="mini">编辑</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <!-- 这里的频道列表和首页的 HomeTab 的频道列表是一样的 -->
      <van-grid-item
        class="grid-item"
        v-for="(channels, index) in channelsEdit"
        :key="index"
        :text="channels.name"
      />
    </van-grid>
    <van-cell class="cell cell-bottom" center :border="false">
      <div slot="title" class="channel-title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="(recommend, index) in recommendChannels"
        :key="index"
        :text="recommend.name"
      />
    </van-grid>
  </div>
</template>

<script>
// 网络请求
import { getAllChannels } from 'api/channels'

export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    channelsEdit: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      allChannels: [], // 所有的频道列表
    }
  },
  computed: {
    // 思路：所有频道列表 - 我的频道 = 推荐的频道
    recommendChannels() {
      // filter 方法：过滤数据，根据方法返回的布尔值 true 来收集数据
      // filter 方法查找满足条件的所有元素
      return this.allChannels.filter((channel) => {
        // 判断 channel 是否属于用户频道
        // find 方法查找满足条件的单个元素
        return !this.channelsEdit.find((channelsEdit) => {
          // 找到满足该条件的元素
          return channelsEdit.id === channel.id
        })
      })
    },

    //   用的 for 循环
    //   let arr = []
    //   for (let i = 0; i < this.allChannels.length; i++) {
    //     let flag = false
    //     for (let j = 0; j < this.channelsEdit.length; j++) {
    //       if (this.allChannels[i].id === this.channelsEdit[j].id) {
    //         flag = true
    //       }
    //     }
    //     if (!flag) {
    //       arr.push(this.allChannels[i])
    //     }
    //   }
    //   return arr
    // },
  },
  watch: {},
  created() {
    // 发送请求
    this._getAllChannels()
  },
  mounted() {},
  methods: {
    // 发送请求
    async _getAllChannels() {
      const { data } = await getAllChannels()
      this.allChannels = data.data.channels
    },
  },
}
</script>

<style scoped lang="less">
.channel-edit {
  position: fixed;
  top: 54px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  .cell {
    margin-bottom: 20px;
    .channel-title {
      font-size: 16px;
      color: #333;
    }
    .van-button {
      height: 23px;
      padding: 0 12px;
    }
  }
  .van-grid-item {
    height: 43px;
    /deep/ .van-grid-item__content {
      background-color: #f4f5f6;
      border-radius: 8px;
      .van-grid-item__text {
        font-size: 14px;
        color: #222;
      }
    }
    /deep/ .van-hairline {
      &::after {
        border: none;
      }
    }
  }

  .cell-bottom {
    margin-top: 33px;
  }
}
</style>