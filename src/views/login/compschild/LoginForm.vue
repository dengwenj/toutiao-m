<template>
  <div class="login-form">
    <!-- 
      基于 Vant 的表单验证：
      1 使用 van-form 组件包裹所有的表单项 van-field
      2 给 van-form 绑定 submit 事件
        当表单提交的时候会触发 submit 事件
        只有表单验证通过，才会调用 submit ！！！！！！
      3 使用 Field 的 rules 属性定义校验规则

      @failed="onFailed" 提交表单且验证不通过后触发
     -->
    <van-form
      :show-error-message="false"
      :show-error="false"
      validate-first
      @submit="onLogin"
      @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
        name="手机号"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        name="验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-button class="yanzhengma" size="small" round
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login">
        <van-button class="denglu" type="info" block>登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 网络请求
import { login } from 'api/user'

export default {
  name: 'LoginForm',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810', // 短信验证码
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|6|7|8|9]\d{9}$/, message: '手机号格式错误' },
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' },
        ],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 1 找到数据接口
    // 2 封装请求方法
    // 3 请求调用登录
    async onLogin() {
      // 登录状态的提示
      // 在组件内可以用 this.$toast 把放在vue的原型上了  Vant组件库里面的
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 是否禁止背景点击
        duration: 0, // 展示时长(ms)，值为 0 时，toast 不会消失
      })
      // try-catch来捕获异常
      try {
        const res = await login(this.user)
        // 4 处理响应结果
        this.$toast.success('登录成功')
        console.log(res)
      } catch (error) {
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    },

    // 提交表单且验证不通过后触发
    onFailed(err) {
      console.log(err)
      if (err.errors[0]) {
        this.$toast({
          message: err.errors[0].message,
          position: top,
        })
      }
    },
  },
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