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
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TopSearch',
  components: {},
  props: {},
  data() {
    return {
      searchText: '', // 搜索栏输入的值
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSearch() {
      console.log('onsearch')
    },
  },
}
</script>

<style scoped lang="less"></style>