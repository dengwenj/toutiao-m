<template>
  <div class="article-container">
    <!-- 文章详情导航 -->
    <van-nav-bar
      class="app-nav-bar"
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /文章详情导航 -->

    <!-- 文章详情标题 -->
    <h1 class="title">牛逼程序员都用的开源工具，你用了 几个？</h1>
    <!-- /文章详情标题 -->

    <!-- 文章详情用户信息 -->
    <user-info-article />
    <!-- /文章详情用户信息 -->
  </div>
</template>

<script>
import UserInfoArticle from './compschild/UserInfoArticle'

export default {
  name: 'Article',
  components: {
    UserInfoArticle,
  },

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

<style scoped lang="less">
.article-container {
  .title {
    font-size: 20px;
    padding: 15px;
    color: #333;
    background-color: #fff;
  }
}
</style>