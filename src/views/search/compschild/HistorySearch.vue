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
        v-for="(item, index) in liShi"
        :key="index"
        @click="onDetele(item, index)"
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
      liShi: [],
    }
  },
  computed: {},
  watch: {
    searchLishi(value) {
      this.liShi = value
    },
  },
  created() {},
  mounted() {},
  methods: {
    onDetele(item, index) {
      // 如果删除状态，则执行删除操作
      if (this.isDeleteShow) {
        this.liShi.splice(index, 1)
        return
      }

      // 非删除状态，展示搜索结果
      this.$bus.$emit('history', item)
    },
  },
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