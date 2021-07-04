<template>
  <div class="home-container">
    <!-- navbar 导航栏 -->
    <home-nav-bar></home-nav-bar>

    <!-- 文章频道列表 -->
    <home-tab :channels="channels" @isPopup="isPopup"></home-tab>

    <!-- 弹出层 显示频道列表 -->
    <popup :isChannelEditShow="isChannelEditShow" @popup="popup">
      <!-- 频道编辑 使用的插槽-->
      <channel-edit
        :channelsEdit="channels"
        @close="isChannelEditShow = false"
      ></channel-edit>
      <!-- !频道编辑 -->
    </popup>
  </div>
</template>

<script>
import HomeNavBar from './compschild/HomeNavBar'
import HomeTab from './compschild/HomeTab'
import Popup from './compschild/Popup'
import ChannelEdit from './compschild/ChannelEdit'

import { getItem } from 'utils/storage'

// vuex
import { mapState } from 'vuex'

// 网络请求
import { getUserChannels } from 'api/user'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeTab,
    Popup,
    ChannelEdit,
  },
  props: {},
  data() {
    return {
      channels: [], // 频道列表
      isChannelEditShow: false, // 弹出层 显示频道列表
    }
  },
  computed: {
    ...mapState(['user']),
  },
  watch: {},
  created() {
    // 网络请求
    this._getUserChannels()
  },
  mounted() {},
  methods: {
    async _getUserChannels() {
      let userchannels = []
      if (this.user) {
        // 已登录，存储到线上的接口文档
        const { data } = await getUserChannels()
        userchannels = data.data.channels
      } else {
        // 未登录，判断是否有本地存储的频道列表数据
        // 有本地存储的频道列表则使用
        if (window.localStorage.getItem('user-channels')) {
          userchannels = getItem('user-channels')
        } else {
          // 用户没有登录，也没有本地存储的频道，那就请求获取默认推荐的频道列表
          const { data } = await getUserChannels()
          userchannels = data.data.channels
        }
      }
      this.channels = userchannels
      // const { data } = await getUserChannels()
      // this.channels = data.data.channels
    },

    // 子传父 HomeTab 组件
    isPopup() {
      this.isChannelEditShow = true
    },

    //子传父 Popup 组件
    popup(tf) {
      this.isChannelEditShow = tf
    },
  },
}
</script>

<style scoped lang="less"></style>