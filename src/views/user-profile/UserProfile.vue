<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->

    <van-cell title="头像" is-link center>
      <van-image width="35" height="35" fit="cover" round :src="user.photo" />
    </van-cell>
    <van-cell title="昵称" is-link :value="user.name" />
    <van-cell title="性别" is-link :value="user.gender === 0 ? '男' : '女'" />
    <van-cell title="生日" is-link :value="user.birthday" />
  </div>
</template>

<script>
// 网络请求
import { userProfile } from 'api/user'

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      user: {}, // 用户资料
    }
  },
  computed: {},
  watch: {},
  created() {
    // 发送请求
    this._userProfile()
  },
  mounted() {},
  methods: {
    async _userProfile() {
      const { data } = await userProfile()
      this.user = data.data
    },
  },
}
</script>

<style scoped lang="less"></style>