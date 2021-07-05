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
import { setItem, getItem } from 'utils/storage'
import { getSearchHistory } from 'api/search'

import { mapState } from 'vuex'

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
  computed: {
    ...mapState(['user']),
  },
  watch: {
    isResultShow: {
      handler(value) {
        this.resultShow = value
      },
      // 立即执行
      immediate: true,
    },
  },
  created() {
    // 发送请求
    this._getSearchHistory()
  },
  mounted() {
    // 事件总线
    this.$bus.$on('search', (item) => {
      this.searchText = item
      // 点击联想建议进入搜索
      this.onSearch()
      // 这样才能把搜索关键字发出去请求搜索结果
      this.onInput()
    })

    this.$bus.$on('history', (item) => {
      this.searchText = item
      // 点击历史记录进入搜索
      this.onSearch()
      // 这样才能把搜索关键字发出去请求搜索结果
      this.onInput()
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

        // 数据持久化
        // 如果用户已登录，则把搜索历史记录存储到线上
        // 只要我们调用获取搜索结果的数据接口，后端会给我们自动存储用户的搜索历史记录
        // 如果没有登录，则把搜索历史记录存储到本地
        setItem('search-history', this.searchHistory)

        // 展示历史记录 传递过去
        this.$emit('searchHistory', this.searchHistory)
      }
    },

    async _getSearchHistory() {
      // 因为后端帮我们存储的用户搜索历史记录太少了
      // 所以这里让后端返回的历史记录和本地的历史记录合并到一起
      let searchHistory = getItem('search-history') || []
      if (this.user) {
        const { data } = await getSearchHistory()
        searchHistory = [...new Set([...searchHistory, ...data.data.keywords])]
        this.searchHistory = searchHistory
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