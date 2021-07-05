<template>
  <div class="">
    <van-cell title="历史记录">
      <div v-if="isDeleteShow">
        <span>全部删除</span>&nbsp;&nbsp;
        <span @click="isDeleteShow = false">完成</span>
      </div>
      <van-icon v-else name="delete-o" @click="isDeleteShow = true" />
    </van-cell>
    <van-grid :gutter="20">
      <van-grid-item
        :icon="isDeleteShow ? 'close' : ''"
        :text="item"
        v-for="(item, index) in searchLishi"
        :key="index"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    searchLishi: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      isDeleteShow: false, // 删除的显示状态
    }
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
  margin-top: 15px;
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