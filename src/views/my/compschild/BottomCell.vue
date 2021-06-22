<template>
  <div class="">
    <van-cell class="cell" title="消息通知" is-link url="/" />
    <van-cell class="cell" title="小邓同学" is-link to="/qa" />
    <van-cell
      v-if="userToken"
      class="drop-out"
      title="退出登录"
      @click="onLogOut"
    />
  </div>
</template>

<script>
export default {
  name: 'MyBottom',
  components: {},
  props: {
    userToken: {
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
    onLogOut() {
      this.$dialog
        .confirm({
          title: '退出提示',
          message: '是否确定退出？',
        })
        .then(() => {
          // 确定退出  清除用户登录状态
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // 取消退出
        })
    },
  },
}
</script>

<style scoped lang="less">
.cell {
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 50px;
  font-size: 15px;
  color: #333333;
}
.drop-out {
  margin-top: 4px;
  text-align: center;
  font-size: 15px;
  color: #d86262;
}
</style>