<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <top-search />
    <!-- /搜索栏 -->

    <!-- 联想建议 -->
    <suggestion-search />
    <!-- /联想建议 -->

    <!-- 历史记录 -->
    <history-search />
    <!-- /历史记录 -->

    <!-- 搜索结果 -->
    <result-search />
    <!-- /搜索结果 -->
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
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>