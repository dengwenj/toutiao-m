<template>
  <div class="comment-reply">
    <!-- 评论回复头部信息 -->
    <van-nav-bar :title="`${c.reply_count} 条回复`">
      <van-icon slot="left" name="cross" @click="$emit('cross')" />
    </van-nav-bar>
    <!-- /评论回复头部信息 -->

    <!-- 评论项 140964-->
    <comment-item :comment="c" />
    <!-- /评论项 -->

    <van-cell>所有回复</van-cell>

    <!-- 评论回复列表 -->
    <comment-list :articleId="c.com_id" type="c" />
    <!-- /评论回复列表 -->
  </div>
</template>

<script>
import CommentItem from './CommentItem'
import CommentList from './CommentList'

export default {
  name: 'CommentReply',
  components: {
    CommentItem,
    CommentList,
  },
  props: {
    c: {
      type: Object,
      required: true,
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