<template>
  <div class="bottom-article">
    <van-button class="comment-btn" round @click="writeComment"
      >写评论</van-button
    >
    <div v-if="bottomShow">
      <van-icon
        class="comment"
        color="#777"
        name="comment-o"
        :badge="totalComment"
      />
      <van-icon
        class="star"
        :color="articleDetails.is_collected ? '#3296fa' : '#777'"
        :name="articleDetails.is_collected ? 'star' : 'star-o'"
        @click="onCollected"
      />
      <van-icon
        class="good-job"
        :color="articleDetails.attitude === 1 ? '#3296fa' : '#777'"
        :name="articleDetails.attitude === 1 ? 'good-job' : 'good-job-o'"
        @click="onLike"
      />
      <van-icon class="share" name="share" />
    </div>
  </div>
</template>

<script>
import { addArticle, deleteArticle, addLike, deleteLike } from 'api/article'

export default {
  name: '',
  components: {},
  props: {
    articleDetails: {
      type: Object,
      default() {
        return {}
      },
    },
    totalComment: {
      type: Number,
      default: 0,
    },
    bottomShow: {
      type: Boolean,
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
  methods: {
    // 文章收藏
    async onCollected() {
      this.$toast.loading({
        message: '操作中...',
        forbidClick: true,
      })
      if (this.articleDetails.is_collected) {
        // 已收藏，取消收藏
        console.log(await deleteArticle(this.articleDetails.art_id))
      } else {
        // 未收藏,添加收藏
        console.log(await addArticle(this.articleDetails.art_id))
      }
      //  更新视图
      this.articleDetails.is_collected = !this.articleDetails.is_collected
      this.$toast.success(
        `${this.articleDetails.is_collected ? '' : '取消'}收藏成功`
      )
    },

    // 文章点赞
    async onLike() {
      this.$toast.loading({
        message: '操作中...',
        forbidClick: true,
      })
      if (this.articleDetails.attitude === 1) {
        //  已点赞，取消点赞
        await deleteLike(this.articleDetails.art_id)
        this.articleDetails.attitude = -1
      } else {
        // 未点赞，添加点赞
        await addLike(this.articleDetails.art_id)
        this.articleDetails.attitude = 1
      }
      this.$toast.success(
        `${this.articleDetails.attitude === 1 ? '' : '取消'}点赞成功`
      )
    },

    // 点击写评论
    writeComment() {
      this.$emit('writeComment', true)
    },
  },
}
</script>

<style scoped lang="less">
.bottom-article {
  height: 49px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  border-top: 1px solid rgb(245, 235, 235);
  .comment-btn {
    margin: 10px 0 0 30px;
    padding: 0 50px;
    height: 30px;
    color: #b9b8b8;
    font-size: 12px;
    color: #9b9b9d;
  }
  .comment {
    position: absolute;
    top: 17px;
    left: 195px;
    font-size: 20px;
    .van-info {
      font-size: 10px;
    }
  }
  .star {
    position: absolute;
    top: 15px;
    left: 245px;
    font-size: 20px;
  }
  .good-job {
    position: absolute;
    top: 15px;
    left: 285px;
    font-size: 20px;
  }
  .share {
    position: absolute;
    top: 15px;
    left: 325px;
    font-size: 20px;
    color: #7b7773;
  }
}
</style>