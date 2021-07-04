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
    }
  },
  computed: {},
  watch: {
    isResultShow: {
      handler(value) {
        console.log(value)
        this.resultShow = value
      },
      immediate: true,
    },
  },
  created() {},
  mounted() {},
  methods: {
    onSearch() {
      if (this.searchText) {
        this.resultShow = true
        this.$emit('resultShow', this.resultShow)
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