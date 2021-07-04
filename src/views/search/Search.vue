<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <top-search
      :isResultShow="isResultShow"
      @onInput="onInput"
      @resultShow="resultShow"
    />
    <!-- /搜索栏 -->

    <!-- 搜索结果 -->
    <result-search v-if="isResultShow" />
    <!-- /搜索结果 -->

    <!-- 联想建议 -->
    <suggestion-search v-else-if="topSearchText" />
    <!-- /联想建议 -->

    <!-- 历史记录 -->
    <history-search v-else />
    <!-- /历史记录 -->
  </div>
</template>

<script>
import TopSearch from './compschild/TopSearch'
import SuggestionSearch from './compschild/SuggestionSearch'
import HistorySearch from './compschild/HistorySearch'
import ResultSearch from './compschild/ResultSearch'

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
      topSearchText: '', // 搜索栏传递过来的
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
  },
}
</script>

<style scoped lang="less"></style>