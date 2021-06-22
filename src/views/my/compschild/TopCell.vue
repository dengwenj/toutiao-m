<template>
  <div class="topcell">
    <!-- 登录 -->
    <van-cell-group v-if="userToken" class="my-info">
      <van-cell class="banner-info" center :border="false">
        <van-image
          class="avatar"
          slot="icon"
          round
          fit="cover"
          :src="currentUser.photo"
        />
        <div class="name" slot="title">{{ currentUser.name }}</div>
        <van-button class="update-btn" size="small" round>编辑资料</van-button>
      </van-cell>
      <van-grid class="data-info" :border="false">
        <van-grid-item class="data-info-item">
          <div class="data-warp" slot="text">
            <div class="count">{{ currentUser.art_count }}</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="data-warp" slot="text">
            <div class="count">{{ currentUser.follow_count }}</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="data-warp" slot="text">
            <div class="count">{{ currentUser.fans_count }}</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="data-warp" slot="text">
            <div class="count">{{ currentUser.like_count }}</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <!-- 未登录 -->
    <div v-else class="not-login">
      <div>
        <img
          class="mobileImg"
          src="./mobileImg.png"
          @click="$router.push('/login')"
        />
      </div>
      <div class="text" @click="$router.push('/login')">登录 / 注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTop',
  components: {},
  props: {
    // 登录过后才有的 token
    userToken: {
      type: Object,
      default() {
        return {}
      },
    },
    // 用户自己的信息
    currentUser: {
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
.topcell {
  .my-info {
    background: url('./banner.png') no-repeat;
    background-size: cover;
    .banner-info {
      padding-top: 38px;
      padding-bottom: 11px;
      box-sizing: border-box;
      background: unset;
      height: 115px;
      .avatar {
        box-sizing: border-box;
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
      }
      .name {
        color: #fff;
        font-size: 15px;
        margin-left: 11px;
      }
      .update-btn {
        height: 20px;
        color: #666;
        font-size: 10px;
      }
    }
    .data-info {
      .data-info-item {
        height: 65px;
        color: #fff;
        .data-warp {
          display: flex;
          flex-direction: column;
          align-items: center;
          .count {
            font-size: 18px;
          }
          .text {
            font-size: 12px;
          }
        }
      }
    }
    /deep/ .van-grid-item__content {
      background: unset;
    }
  }
  .not-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 180px;
    background: url(./banner.png) no-repeat;
    background-size: cover;
    .mobileImg {
      height: 66px;
      width: 66px;
    }
    .text {
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>