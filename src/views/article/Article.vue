<template>
  <div class="article-container">文章详情</div>
</template>

<script>
export default {
  name: 'Article',
  components: {},

  // 在组件中获取动态路由参数
  //     方式一：this.$route.params.articleId
  //     方式二: props 传参   在路由里面 props:true
  props: {
    articleId: {
      // 动态路由传递过来的
      type: String,
      default: '',
    },
  },
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