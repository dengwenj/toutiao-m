<template>
  <div class="user-info">
    <van-cell center class="user-cell">
      <van-image
        class="user-img"
        slot="icon"
        fit="cover"
        round
        :src="articleDetails.aut_photo"
      />
      <div slot="title" class="user-name">{{ articleDetails.aut_name }}</div>
      <div slot="label" class="user-time">
        {{ articleDetails.pubdate | relativeTime }}
      </div>
      <van-button
        class="attention"
        round
        :type="articleDetails.is_followed ? 'default' : 'info'"
        size="small"
        :icon="articleDetails.is_followed ? '' : 'plus'"
        :loading="isloading"
        @click="onFollow"
        >{{ articleDetails.is_followed ? '已关注' : '关注' }}</van-button
      >
    </van-cell>
  </div>
</template>

<script>
import { addFollow, deleteFollow } from 'api/user'

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
    return {
      isloading: false,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 点击是否关注
    async onFollow() {
      this.isloading = true
      if (this.articleDetails.is_followed) {
        // 已关注，取消关注
        await deleteFollow(this.articleDetails.aut_id)
      } else {
        // 未关注，添加关注
        await addFollow(this.articleDetails.aut_id)
      }
      this.articleDetails.is_followed = !this.articleDetails.is_followed
      this.isloading = false
    },
  },
}
</script>

<style scoped lang="less">
.user-cell {
  .user-img {
    width: 35px;
    height: 35px;
    margin-right: 8px;
  }
  .user-name {
    font-size: 12px;
    color: #333;
  }
  .user-tiem {
    font-size: 12px;
    color: #b4b4b4;
  }
  .van-cell__label {
    margin-top: 0;
  }
  .attention {
    width: 85px;
    height: 30px;
  }
}
</style>