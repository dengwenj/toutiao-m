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
      <text-article ref="text-article" :articleDetails="articleDetails" />
      <!-- /文章详情正文 -->

      <!-- 评论列表 -->
      <comment-list
        :articleId="articleId"
        @totalCommentCount="totalCommentCount"
      />
      <!-- /评论列表 -->
    </div>

    <!-- 底部区域 -->
    <bottom-article
      :articleDetails="articleDetails"
      @writeComment="isReleaseCommentshow = $event"
      :totalComment="totalComment"
    />
    <!-- /底部区域 -->

    <!-- 发布评论 -->
    <van-popup v-model="isReleaseCommentshow" position="bottom">
      <release-comment :target="articleId" @releaseComment="releaseComment" />
    </van-popup>
    <!-- /发布评论 -->
  </div>
</template>

<script>
import UserInfoArticle from './compschild/UserInfoArticle'
import TextArticle from './compschild/TextArticle'
import BottomArticle from './compschild/BottomArticle'
import CommentList from './compschild/CommentList'
import ReleaseComment from './compschild/ReleaseComment'

// 网络请求
import { getArticleById } from 'api/article'

//  图片预览
import { ImagePreview } from 'vant'

export default {
  name: 'Article',
  components: {
    UserInfoArticle,
    TextArticle,
    BottomArticle,
    CommentList,
    ReleaseComment,
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
      isReleaseCommentshow: false, // 发布评论
      totalComment: 0, // 总评论
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

      // 数据改变影响视图更新（dom数据）不是立即的
      // 所以如果需要在修改数据之后马上操作被数据影响的视图 dom 需要把这个代码放在 $nextTick 中
      // this.$nextTick 是 vue 中的方法
      this.$nextTick(() => {
        this.handlePerviewImage()
      })
    },

    // 图片预览 操作 DOM
    handlePerviewImage() {
      // 1 获取文章内容 DOM 容器
      const textArticle = this.$refs['text-article'].$el

      // 2 得到所有的 img 标签
      const imgs = textArticle.querySelectorAll('img')

      // 3 循环 img 列表，给 img 注册点击事件
      const imgPaths = [] // 收集所有的图片路径
      imgs.forEach((item, index) => {
        imgPaths.push(item.src)
        // item.onclick = function () {
        //   // 4 在事件处理函数中调用 ImagePreview() 预览
        //   ImagePreview({
        //     images: imgPaths, // 预览图片路径列表
        //     startPosition: index, // 起始位置
        //   })
        // }
        item.addEventListener('click', function () {
          // 4 在事件处理函数中调用 ImagePreview() 预览
          ImagePreview({
            images: imgPaths, // 预览图片路径列表
            startPosition: index, // 起始位置
          })
        })
      })
    },

    // 点击发布评论了
    releaseComment(newComment) {
      // 关闭弹出层
      this.isReleaseCommentshow = false

      // 事件总线
      this.$bus.$emit('newComment', newComment)

      // 提示用户评论发布成功
      this.$toast.success('发布成功')

      // 点击了发布就让总评论加1
      this.totalComment++
    },

    // 总评论
    totalCommentCount(totalCommentCount) {
      console.log(totalCommentCount)
      this.totalComment = totalCommentCount
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
    bottom: 50px;
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