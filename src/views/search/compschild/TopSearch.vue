<template>
  <div class="top-search">
    <!-- Tips: 在 van-search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。 -->
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        shape="round"
        background="#3296fa"
        @search="onSearch"
        @cancel="$router.back()"
        @input="onInput"
        @focus="onFocus"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TopSearch',
  components: {},
  props: {
    isResultShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchText: '', // 搜索栏输入的内容
      resultShow: false, // 传递过去 展示的搜索结果
      searchHistory: [], // 搜索历史
    }
  },
  computed: {},
  watch: {
    isResultShow: {
      handler(value) {
        this.resultShow = value
      },
      // 立即执行
      immediate: true,
    },
  },
  created() {},
  mounted() {
    // 事件总线
    this.$bus.$on('search', (item) => {
      this.searchText = item
      // 点击联想建议进入搜索
      this.onSearch()
    })
  },
  methods: {
    onSearch() {
      if (this.searchText) {
        this.resultShow = true
        this.$emit('resultShow', this.resultShow)

        // indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
        const index = this.searchHistory.indexOf(this.searchText)
        // console.log(index)
        if (this.searchHistory.indexOf(this.searchText) !== -1) {
          // 不等于 -1 说明存在
          // 存才的话 就删除
          this.searchHistory.splice(index, 1)
        }
        // 把最新的搜索历史记录放到顶部
        this.searchHistory.unshift(this.searchText)

        // 展示历史记录 传递过去
        this.$emit('searchHistory', this.searchHistory)
      }
    },

    onInput() {
      this.$emit('onInput', this.searchText)
    },

    onFocus() {
      this.resultShow = false
      this.$emit('resultShow', this.resultShow)
    },
  },
}
</script>

<style scoped lang="less"></style>