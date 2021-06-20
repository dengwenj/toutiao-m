<template>
  <div class="login-container">
    <!-- navbar 导航栏 -->
    <login-nav-bar></login-nav-bar>

    <!-- 登录表单 -->
    <login-form></login-form>
  </div>
</template>

<script>
import LoginNavBar from './compschild/LoginNavBar'
import LoginForm from './compschild/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginNavBar,
    LoginForm,
  },
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

<style scoped lang="less"></style>