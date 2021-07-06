<template>
  <div class="release-comment">
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="写评论"
      show-word-limit
    />
    <van-button class="release" size="mini" round @click="onRelease"
      >发布</van-button
    >
  </div>
</template>

<script>
import { releaseComment } from 'api/comment'

export default {
  name: 'ReleaseComment',
  components: {},
  props: {
    // 如果是发布文章评论，则传递文章 ID
    // 如果是发布评论回复，则传递评论 ID
    target: {
      type: [String, Number, Object],
      required: true,
    },
    articleId: {
      type: [String, Number, Object],
      default: null,
    },
  },
  data() {
    return {
      message: '', // 输入内容
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onRelease() {
      const { data } = await releaseComment({
        target: this.target.toString(), // 评论的目标id（评论文章即为文章id，对评论进行回复则为评论id）
        content: this.message, // 评论内容
        art_id: this.articleId ? this.articleId.toString() : null, // 文章id，对评论内容发表回复时，需要传递此参数，表明所属文章id。对文章进行评论，不要传此参数。
      })
      console.log(data)
    },
  },
}
</script>

<style scoped lang="less">
.release-comment {
  background-color: #f5f7f9;
  // padding: 15px;
  display: flex;
  align-items: center;
  .release {
    width: 20%;
    margin: 0 15px;
    padding: 0 15px;
  }
}
</style>