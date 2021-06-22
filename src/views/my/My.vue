<template>
  <div class="my-container">
    <!-- 顶部 -->
    <top-cell :userToken="user"></top-cell>

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

export default {
  name: 'My',
  components: {
    TopCell,
    CentralGrid,
    BottomCell,
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['user']),
  },
  watch: {},
  created() {
    // 可以这样写 也可以像 computed 里面的那样写
    // this.userToken = this.$store.state.user
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>