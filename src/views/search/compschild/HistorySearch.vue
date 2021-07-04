<template>
  <div class="">
    <van-cell title="历史记录">
      <div>
        <span>全部删除</span>&nbsp;&nbsp;
        <span>完成</span>
      </div>
      <!-- <van-icon name="delete-o" /> -->
    </van-cell>
    <van-grid :gutter="20">
      <van-grid-item icon="close" text="文字" />
      <van-grid-item icon="close" text="文字" />
      <van-grid-item icon="close" text="文字" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: '',
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
.van-grid-item {
  margin-top: 10px;
  width: 50px;

  /deep/ .van-grid-item__content {
    height: 20px;
    border-radius: 20px;
    background-color: #eee;
    .van-grid-item__icon {
      position: absolute;
      top: -5px;
      right: -5px;
      font-size: 16px;
      color: #ccc;
    }
    .van-grid-item__text {
      margin-top: 0;
    }
  }
  /deep/ .van-hairline {
    &::after {
      border: none;
    }
  }
}
</style>