<template>
  <van-cell class="cell">
    <van-image
      class="img"
      slot="icon"
      round
      fit="cover"
      :src="comment.aut_photo"
    />
    <div slot="title" class="title">
      <div>
        <div class="name">{{ comment.aut_name }}</div>
        <div @click="onCommentLike">
          <van-icon
            class="good-job"
            :class="{ islike: comment.is_liking }"
            :name="comment.is_liking ? 'good-job' : 'good-job-o'"
          />
          <span class="shuliang">{{ comment.like_count }}</span>
        </div>
      </div>
      <div class="content">
        {{ comment.content }}
      </div>
    </div>
    <div slot="label" class="label">
      <span class="pubdate">{{ comment.pubdate | formatComment }}</span>
      <van-button class="btn" round size="mini" @click="reply(comment)"
        >{{ comment.reply_count }} 回复</van-button
      >
    </div>
  </van-cell>
</template>

<script>
import { commentLike, deleteCommentLike } from 'api/comment'

export default {
  name: 'CommentItem',
  components: {},
  props: {
    comment: {
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
    async onCommentLike() {
      this.$toast.loading({
        message: '操作中...',
        forbidClick: true,
      })
      const com_id = this.comment.com_id.toString()
      if (this.comment.is_liking) {
        // 已点赞，取消点赞
        await commentLike(com_id)
        this.comment.like_count--
      } else {
        // 未点赞，点赞
        await deleteCommentLike(com_id)
        this.comment.like_count++
      }
      // 更新视图
      this.comment.is_liking = !this.comment.is_liking

      this.$toast.success(`${this.comment.is_liking ? '' : '取消'}点赞成功`)
    },

    reply(comment) {
      // 事件总线
      this.$bus.$emit('replyClick', comment)
    },
  },
}
</script>

<style scoped lang="less">
.cell {
  .van-cell__value {
    flex-shrink: unset;
  }
  .img {
    width: 35px;
    height: 35px;
    margin: 5px 15px 0 0;
  }
  .title {
    .name {
      font-size: 14px;
      color: #7892b7;
    }
    .content {
      font-size: 14px;
      color: #292929;
    }
  }
  .label {
    display: flex;
    align-items: center;
    .pubdate {
      font-size: 10px;
      color: #292929;
      margin-right: 15px;
    }
    .btn {
      font-size: 12px;
      height: 20px;
      padding: 0 20px;
      background-color: #f4f5f6;
      color: #222222;
    }
  }
  .good-job {
    position: absolute;
    top: 11px;
    right: 30px;
    font-size: 18px;
    color: #000;
    margin-right: 5px;
  }
  .shuliang {
    position: absolute;
    top: 8px;
    right: 20px;
    color: #000;
    font-size: 14px;
  }
  .islike {
    color: #3296fa;
  }
}
</style>