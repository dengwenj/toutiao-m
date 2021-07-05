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

    <div class="fixed">
      <!-- 文章详情标题 -->
      <h1 class="title">{{ articleDetails.title }}</h1>
      <!-- /文章详情标题 -->

      <!-- 文章详情用户信息 -->
      <user-info-article :articleDetails="articleDetails" />
      <!-- /文章详情用户信息 -->

      <!-- 文章详情正文 -->
      <text-article :articleDetails="articleDetails" />
      <!-- /文章详情正文 -->
    </div>
  </div>
</template>

<script>
import UserInfoArticle from './compschild/UserInfoArticle'
import TextArticle from './compschild/TextArticle'

// 网络请求
import { getArticleById } from 'api/article'

export default {
  name: 'Article',
  components: {
    UserInfoArticle,
    TextArticle,
  },

  // 在组件中获取动态路由参数
  //     方式一：this.$route.params.articleId
  //     方式二: props 传参   在路由里面 props:true
  props: {
    articleId: {
      // 动态路由传递过来的
      type: [String, Number, Object],
      required: true,
    },
  },
  data() {
    return {
      articleDetails: {}, // 文章详情
    }
  },
  computed: {},
  watch: {},
  created() {
    // 发送请求
    this._getArticleById()
  },
  mounted() {},
  methods: {
    async _getArticleById() {
      const { data } = await getArticleById(this.articleId)
      this.articleDetails = data.data
    },
  },
}
</script>

<style scoped lang="less">
.article-container {
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 46px;
    overflow: auto;
    .title {
      font-size: 20px;
      padding: 15px;
      color: #333;
      background-color: #fff;
    }
  }
}
</style>