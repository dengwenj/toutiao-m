<template>
  <div class="topcell">
    <van-cell-group class="my-info">
      <van-cell class="banner-info" title="单元格" center :border="false">
        <van-image
          class="avatar"
          slot="icon"
          round
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="name" slot="title">dengwenjie</div>
        <van-button class="update-btn" size="small" round>编辑资料</van-button>
      </van-cell>
      <van-grid class="data-info" :border="false">
        <van-grid-item class="data-info-item">
          <div class="data-warp" slot="text">
            <div class="count">112</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="data-warp" slot="text">
            <div class="count">112</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="data-warp" slot="text">
            <div class="count">112</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="data-warp" slot="text">
            <div class="count">112</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
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
}
</style>