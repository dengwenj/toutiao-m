<template>
  <div class="home-container">
    <!-- navbar 导航栏 -->
    <home-nav-bar></home-nav-bar>

    <!-- 文章频道列表 -->
    <home-tab :channels="channels" @isPopup="isPopup"></home-tab>

    <!-- 弹出层 显示频道列表 -->
    <popup :isChannelEditShow="isChannelEditShow" @popup="popup"></popup>
  </div>
</template>

<script>
import HomeNavBar from './compschild/HomeNavBar'
import HomeTab from './compschild/HomeTab'
import Popup from './compschild/Popup'

// 网络请求
import { getUserChannels } from 'api/user'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeTab,
    Popup,
  },
  props: {},
  data() {
    return {
      channels: [], // 频道列表
      isChannelEditShow: false, // 弹出层 显示频道列表
    }
  },
  computed: {},
  watch: {},
  created() {
    // 网络请求
    this._getUserChannels()
  },
  mounted() {},
  methods: {
    // 网络请求
    async _getUserChannels() {
      const { data } = await getUserChannels()
      this.channels = data.data.channels
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