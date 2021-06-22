<template>
  <div class="home-tab">
    <van-tabs v-model="active">
      <van-tab :title="item.name" v-for="item in channels" :key="item.id">
        <!-- 标签页组件有一个功能，只要第一次查看标签页的时候才会渲染里面的内容 -->
        <!-- 文章列表  -->
        <article-list :channel="item"></article-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ArticleList from './ArticleList'

export default {
  name: 'HomeTab',
  components: {
    ArticleList,
  },
  props: {
    // 频道列表
    channels: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      active: 0, // 控制被激活的标题
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>