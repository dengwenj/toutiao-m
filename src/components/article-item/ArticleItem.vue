<template>
  <van-cell
    class="aticle-item"
    :to="{ name: 'article', params: { articleId: article.art_id } }"
  >
    <div slot="title" class="title van-multi-ellipsis--l3">
      {{ article.title }}
    </div>
    <div slot="label" class="label">
      <div class="img-wrap" v-if="article.cover.type === 3">
        <div
          class="img-item"
          v-for="(item, index) in article.cover.images"
          :key="index"
        >
          <van-image class="item" fit="cover" :src="item" />
        </div>
      </div>
      <div class="bottom-wrap">
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }}评论</span>
        <span>{{ article.pubdate | relativeTime }}</span>
      </div>
    </div>
    <van-image
      class="image"
      v-if="article.cover.type === 1"
      fit="cover"
      :src="article.cover.images[0]"
    />
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
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
    // articleId(id) { 可以点击跳转文章详情  也可以用 :to="" Vant中写好了
    //   @click="articleId(article.art_id)"
    //   this.$router.push(`/article/${id}`)
    // },
  },
}
</script>

<style scoped lang="less">
.aticle-item {
  .title {
    font-size: 16px;
    color: #333;
    margin-bottom: 15px;
  }
  .van-cell__value {
    flex: unset;
    width: 116px;
    height: 73px;
    margin-left: 12px;
    .image {
      width: 116px;
      height: 73px;
    }
  }
  .label {
    .img-wrap {
      padding: 0 0 15px 0;
      display: flex;
      .img-item {
        flex: 1;
        &:not(:last-child) {
          padding-right: 4px;
        }
        .item {
          width: 100%;
          height: 73px;
        }
      }
    }
    .bottom-wrap {
      font-size: 11px;
      color: #b4b4b4;
      span {
        margin-right: 12px;
      }
    }
  }
}
</style>