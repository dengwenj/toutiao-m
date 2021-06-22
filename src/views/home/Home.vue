<template>
  <div class="home-container">
    <!-- navbar 导航栏 -->
    <home-nav-bar></home-nav-bar>

    <!-- 文章频道列表 -->
    <home-tab :channels="channels"></home-tab>
  </div>
</template>

<script>
import HomeNavBar from './compschild/HomeNavBar'
import HomeTab from './compschild/HomeTab'

// 网络请求
import { getUserChannels } from 'api/user'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeTab,
  },
  props: {},
  data() {
    return {
      channels: [], // 频道列表
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
  },
}
</script>

<style scoped lang="less"></style>