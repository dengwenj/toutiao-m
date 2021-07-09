<template>
  <div id="app">
    <!-- 路由的出口 就是被匹配到的路由，那个页面就会渲染到这里 
        一级路由的出口，路由表中所有的顶层路由都是一级路由
        keep-alive 仅对该路由出口渲染的组件有效
    -->
    <keep-alive :include="cachePage">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['cachePage']),
  },
}
</script>

<style lang="less">
.hhh {
  width: 200px;
  height: 200px;
  background: skyblue;
}
</style>
