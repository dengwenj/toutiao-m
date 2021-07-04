<template>
  <div class="suggestion-search">
    <van-cell
      icon="search"
      v-for="(item, index) in suggestions"
      :key="index"
      @click="search(item)"
    >
      <div slot="title" v-html="highlight(item)"></div>
    </van-cell>
  </div>
</template>

<script>
// 网络请求
import { getSearchSuggestions } from 'api/search'

// 函数防抖
import { debounce } from 'lodash'

export default {
  name: 'SuggestionSearch',
  components: {},
  props: {
    topSearchText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      suggestions: [], // 联想建议数据列表
    }
  },
  computed: {},
  // watch 可以实现对数据的监视，一旦数据发生改变就会触发执行函数
  watch: {
    // 数据发生改变才会触发执行函数 当一次输入值的时候页面还没渲染
    // topSearchText(value) {
    //   console.log(value)
    // },

    // 完整写法
    topSearchText: {
      // 这里用了防抖 就可以不连续发请求了
      handler: debounce(async function (newValue) {
        const { data } = await getSearchSuggestions(newValue)
        this.suggestions = data.data.options
      }, 250),
      // 当数据发生变化则会执行 handler 处理函数
      // async handler(newValue, oldValue) {
      //   // console.log(newValue) // 新的数据
      //   // console.log(oldValue) // 旧的数据 就是新的数据前一次的数据
      //   // 找到数据接口
      //   // 请求获取数据
      //   // 模板绑定展示
      //   const { data } = await getSearchSuggestions(newValue)
      //   this.suggestions = data.data.options
      // },
      immediate: true,
    },
  },
  created() {},
  mounted() {},
  methods: {
    highlight(item) {
      // a /a/gi
      // 正则表达式 /中间的内容/ 都会当做正则匹配模式字符来对待
      // 错误写法：/this.topSearchText/gi
      // RegExp 是正则表达式的构造函数
      // 参数1:字符串
      // 参数2:匹配模式
      // 返回值:正则对象  /hh/
      const reg = new RegExp(this.topSearchText, 'gi')
      // console.log(r)
      return item.replace(
        reg,
        `<span style="color:#3296fa">${this.topSearchText}</span>`
      )
    },

    search(item) {
      // 事件总线
      this.$bus.$emit('search', item)
    },
  },
}
</script>

<style scoped lang="less"></style>