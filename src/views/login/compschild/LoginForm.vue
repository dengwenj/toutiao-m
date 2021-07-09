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
      validate-first  是否在某一项校验不通过时停止校验
     -->
    <van-form
      :show-error-message="false"
      :show-error="false"
      validate-first
      ref="login-form"
      @submit="onLogin"
      @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
        name="mobile"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        name="code"
        :rules="formRules.code"
      >
        <!--
           .prevent 是 vue 中的修饰符阻止默认行为 
           @finish 倒计时结束时触发
        -->
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            class="yanzhengma"
            :time="1000 * 60"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            class="yanzhengma"
            size="small"
            round
            :loading="isSendSmsLoading"
            loading-type="spinner"
            @click.prevent="onSendSms"
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
import { login, sendsms } from 'api/user'

// vuex
import { mapMutations } from 'vuex'

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
      isCountDownShow: false, // 显示隐藏倒计时
      isSendSmsLoading: false, // 发送验证码按钮的 loading 状态
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
        const { data } = await login(this.user)
        // 4 处理响应结果
        this.$toast.success('登录成功')

        // 将后端返回的用户登录状态（token等数据）放到 Vuex 容器中
        this.$store.commit('setUser', data.data)

        // 清除 layout 的缓存，让他重新渲染
        this.$store.commit('removeCachePage', 'Layout')

        // 登录成功 跳转到原来的页面
        this.$router.push(this.$route.query.redirect || '/')
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

    // 验证码
    async onSendSms() {
      // 展示按钮的 loading 状态， 防止网络慢用户多次点击触发发送行为
      this.isSendSmsLoading = true

      // 校验手机号码
      try {
        // 手机号输入正确
        // validate 验证表单，支持传入 name 来验证单个或部分表单项 是 form 表单方法通过 ref 来获取 form 表单
        await this.$refs['login-form'].validate('mobile') // 这里错误的话进入 catch 里面 返回的是 Promise

        // 验证通过 获取验证码
        await sendsms(this.user.mobile)

        // 短信发出去了，隐藏发送按钮，显示倒计时
        this.isCountDownShow = true
        // 倒计时结束 -> 隐藏倒计时，显示发送按钮（监听倒计时的 finish 事件处理）
      } catch (error) {
        // console.dir(error)
        // try 里面任何代码的错误都会进入 catch
        // 不同的错误需要有不同的提示，那就要判断了
        let message = ''
        if (error && error.response && error.response.status === 429) {
          // 发送短信失败的提示
          message = '验证码发送频繁，请一分钟后发送'
        } else if (error && error.name === 'mobile') {
          // 表单验证失败的错误提示
          message = error.message
        } else {
          // 未知错误
          message = '发送失败，请稍后重试'
        }

        // 提示用户信息
        this.$toast({
          message,
          position: top,
        })
      }

      // 无论验证码成功还是失败，最后都要关闭发送按钮的 loading 状态
      this.isSendSmsLoading = false
    },
  },
}
</script>

<style scoped lang="less">
.login-form {
  .yanzhengma {
    padding: 0 10px;
    border-radius: 10px;
    height: 23px;
    background: #ededed;
    color: #aaa;
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