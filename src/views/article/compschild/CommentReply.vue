<template>
  <div class="comment-reply">
    <!-- 评论回复头部信息 -->
    <van-nav-bar :title="`${c.reply_count} 条回复`">
      <van-icon slot="left" name="cross" @click="$emit('cross')" />
    </van-nav-bar>
    <!-- /评论回复头部信息 -->

    <!-- 评论项 140964  135997-->
    <comment-item :comment="c" />
    <!-- /评论项 -->

    <van-cell>所有回复</van-cell>

    <!-- 评论回复列表 -->
    <comment-list :articleId="c.com_id" type="c" />
    <!-- /评论回复列表 -->

    <!-- 底部写评论 -->
    <bottom-article
      :articleDetails="articleDetails"
      @writeComment="isReleaseCommentshow = $event"
      :bottomShow="false"
    />
    <!-- /底部写评论 -->

    <van-popup v-model="isReleaseCommentshow" position="bottom">
      <release-comment
        :target="commentId"
        @releaseComment="releaseComment"
        :articleId="wenzhangId"
      />
    </van-popup>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
import CommentList from './CommentList'
import BottomArticle from './BottomArticle'
import ReleaseComment from './ReleaseComment'

export default {
  name: 'CommentReply',
  components: {
    CommentItem,
    CommentList,
    BottomArticle,
    ReleaseComment,
  },
  props: {
    c: {
      type: Object,
      required: true,
    },
    wenzhangId: {
      type: [String, Number, Object],
      required: true,
    },
  },
  data() {
    return {
      articleDetails: {}, // 文章详情
      isReleaseCommentshow: false, // 发布评论
      // totalComment: 0, // 总评论
      commentId: this.c.com_id, // 传的评论的 id
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 点击发布评论了
    releaseComment(replyComment) {
      // 关闭弹出层
      this.isReleaseCommentshow = false

      // 事件总线
      this.$bus.$emit('replyComment', replyComment)

      // 提示用户评论发布成功
      this.$toast.success('发布成功')

      // 评论回了就让回复加一
      this.c.reply_count++

      // 点击了发布就让总评论加1
      this.$emit('totalComment', 1)
    },
  },
}
</script>

<style scoped lang="less"></style>