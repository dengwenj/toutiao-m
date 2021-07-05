<template>
  <div class="user-info">
    <van-cell center class="user-cell">
      <van-image
        class="user-img"
        slot="icon"
        fit="cover"
        round
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div slot="title" class="user-name">天涯小型客</div>
      <div slot="label" class="user-time">14小时前</div>
      <van-button class="attention" round type="info" size="small" icon="plus"
        >关注</van-button
      >
    </van-cell>
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