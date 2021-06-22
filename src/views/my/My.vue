<template>
  <div class="my-container">
    <!-- 顶部 -->
    <top-cell :userToken="user" :currentUser="currentUser"></top-cell>

    <!-- 中部 -->
    <central-grid></central-grid>

    <!-- 底部 -->
    <bottom-cell :userToken="user"></bottom-cell>
  </div>
</template>

<script>
import TopCell from './compschild/TopCell'
import CentralGrid from './compschild/CentralGrid'
import BottomCell from './compschild/BottomCell'

// vuex
import { mapState } from 'vuex'

// 网络请求
import { getOneselfUser } from 'api/user'

export default {
  name: 'My',
  components: {
    TopCell,
    CentralGrid,
    BottomCell,
  },
  props: {},
  data() {
    return {
      currentUser: null, // 当前登录用户信息 获取用户自己的信息
    }
  },
  computed: {
    ...mapState(['user']),
  },
  watch: {},
  created() {
    // 网络请求
    this.getOneselfUser()

    // 可以这样写 也可以像 computed 里面的那样写
    // this.userToken = this.$store.state.user
  },
  mounted() {},
  methods: {
    // 网络请求
    async getOneselfUser() {
      const { data } = await getOneselfUser()
      // console.log(data)
      this.currentUser = data.data
    },
  },
}
</script>

<style scoped lang="less"></style>