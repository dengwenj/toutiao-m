<template>
  <div class="login-form">
    <van-cell-group class="form">
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="     请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="     请输入验证码"
      >
        <template #button>
          <van-button class="yanzhengma" size="small" round
            >发送验证码</van-button
          >
        </template>
      </van-field>
    </van-cell-group>
    <div class="login">
      <van-button class="denglu" type="info" block>登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '', // 手机号
        code: '', // 短信验证码
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
.login-form {
  .yanzhengma {
    height: 23px;
    background: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666;
    }
  }
  .login {
    padding: 26px 16px;
    .denglu {
      border-radius: 5px;
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>