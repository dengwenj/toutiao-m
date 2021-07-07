<template>
  <div class="comment-reply">
    <van-nav-bar title="1条回复">
      <van-icon slot="left" name="cross" @click="$emit('cross')" />
    </van-nav-bar>
    <!-- 评论项 -->
    <comment-item :comment="c" />
    <!-- /评论项 -->
  </div>
</template>

<script>
import CommentItem from './CommentItem'

export default {
  name: 'CommentReply',
  components: {
    CommentItem,
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