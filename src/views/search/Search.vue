<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <top-search
      :isResultShow="isResultShow"
      @onInput="onInput"
      @resultShow="resultShow"
      @searchHistory="searchHistory"
    />
    <!-- /搜索栏 -->

    <!-- 搜索结果 -->
    <result-search v-if="isResultShow" :topSearchText="topSearchText" />
    <!-- /搜索结果 -->

    <!-- 联想建议 -->
    <suggestion-search
      v-else-if="topSearchText"
      :topSearchText="topSearchText"
    />
    <!-- /联想建议 -->

    <!-- 历史记录 -->
    <history-search v-else :searchLishi="searchLishi" />
    <!-- /历史记录 -->
  </div>
</template>

<script>
import TopSearch from './compschild/TopSearch'
import SuggestionSearch from './compschild/SuggestionSearch'
import HistorySearch from './compschild/HistorySearch'
import ResultSearch from './compschild/ResultSearch'

import { setItem, getItem } from 'utils/storage'

export default {
  name: 'Search',
  components: {
    TopSearch,
    SuggestionSearch,
    HistorySearch,
    ResultSearch,
  },
  props: {},
  data() {
    return {
      isResultShow: false, // 控制搜索结果的显示状态
      topSearchText: '', // 搜索栏传递过来的内容
      searchLishi: getItem('searchLishi') || [], // 历史记录
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onInput(searchText) {
      this.topSearchText = searchText
    },

    resultShow(resultShow) {
      this.isResultShow = resultShow
    },

    searchHistory(searchHistory) {
      // 数据持久化
      // 如果用户已登录，则把搜索历史记录存储到线上
      // 只要我们调用获取搜索结果的数据接口，后端会给我们自动存储用户的搜索历史记录
      // 如果没有登录，则把搜索历史记录存储到本地
      // console.log(searchHistory)
      this.searchLishi = searchHistory
      setItem('searchLishi', this.searchLishi)
    },
  },
}
</script>

<style scoped lang="less"></style>