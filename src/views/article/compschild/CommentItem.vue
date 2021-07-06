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
        <div>
          <van-icon class="good-job" name="good-job-o" />
          <span class="shuliang">{{ comment.like_count }}</span>
        </div>
      </div>
      <div class="content">
        {{
          comment.content
        }}反馈来看待科拉深孔sad卡沙丁卢卡斯可付款个空格看得开的看法国际经济基督教的接口仅仅是靠阿卡丽放好久结束啦了防火墙
      </div>
    </div>
    <div slot="label" class="label">
      <span class="pubdate">{{ comment.pubdate | formatComment }}</span>
      <van-button class="btn" round size="mini"
        >{{ comment.reply_count }} 回复</van-button
      >
    </div>
  </van-cell>
</template>

<script>
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
  methods: {},
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
}
</style>