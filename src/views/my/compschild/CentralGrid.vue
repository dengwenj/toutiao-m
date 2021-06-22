<template>
  <div class="">
    <van-grid class="nav-grid" :column-num="2">
      <van-grid-item
        class="nav-grid-item"
        icon-prefix="toutiao"
        icon="shoucang"
        text="收藏"
      />
      <van-grid-item
        class="nav-grid-item"
        icon-prefix="toutiao"
        icon="lishi"
        text="历史"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'MyCentral',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
/deep/ .nav-grid {
  .nav-grid-item {
    height: 70px;
    margin-bottom: 4px;
    .toutiao {
      font-size: 22px;
    }
    .toutiao-shoucang {
      color: #eb5253;
    }
    .toutiao-lishi {
      color: #ff9d1d;
    }
    .van-grid-item__text {
      color: #333;
      font-size: 14px;
    }
  }
}
</style>