<template>
  <div class="bottom-article">
    <van-button class="comment-btn" round>写评论</van-button>
    <van-icon class="comment" color="#777" name="comment-o" badge="99+" />
    <van-icon
      class="star"
      :color="articleDetails.is_collected ? '#3296fa' : '#777'"
      :name="articleDetails.is_collected ? 'star' : 'star-o'"
      @click="onCollected"
    />
    <van-icon class="good-job" color="#777" name="good-job-o" />
    <van-icon class="share" name="share" />
  </div>
</template>

<script>
import { addArticle, deleteArticle } from 'api/article'

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
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
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