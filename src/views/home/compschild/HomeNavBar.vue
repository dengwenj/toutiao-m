<template>
  <div class="home-nav-bar">
    <van-nav-bar class="app-nav-bar">
      <van-button
        class="sreach-btn"
        icon="search"
        round
        slot="title"
        to="/search"
        >搜索</van-button
      >
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'HomeNavBar',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 这里也可以用点击事件让他跳转 但是 vant 中 button 有个 to 可以直接跳转
    // search() {
    //   this.$router.push('/search')
    // },
  },
}
</script>

<style scoped lang="less">
.home-nav-bar {
  /deep/ .van-nav-bar__title {
    max-width: none;
    .sreach-btn {
      width: 277px;
      height: 32px;
      background-color: #5babfb;
      color: #fff;
      border: 0;
      font-size: 14px;
      .van-icon {
        font-size: 16px;
      }
    }
  }
}
</style>