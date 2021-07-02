<template>
  <div class="home-tab">
    <van-tabs v-model="active">
      <van-tab :title="item.name" v-for="item in channels" :key="item.id">
        <!-- 标签页组件有一个功能，只要第一次查看标签页的时候才会渲染里面的内容 -->
        <!-- 文章列表  -->
        <article-list :channel="item"></article-list>
      </van-tab>
      <!-- 汉堡按钮定位把列表最后的位置给挡住了，解决办法就是在这里添加一个占位元素 -->
      <div slot="nav-right" class="zuihou"></div>
      <div slot="nav-right" class="popup" @click="isPopup">
        <van-icon name="wap-nav" />
      </div>
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
  methods: {
    isPopup() {
      this.$emit('isPopup')
    },
  },
}
</script>

<style scoped lang="less">
/deep/ .van-tab {
  border-right: 1px solid #edeff3;
  // border-bottom: 1px solid #edeff3;
}
/deep/ .van-tabs__line {
  width: 20px;
  background: #3296fa;
}
.zuihou {
  width: 33px;
  flex-shrink: 0;
}
.popup {
  position: fixed;
  /* top: 0; */
  right: 0;
  height: 43px;
  width: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  opacity: 0.9;
  font-size: 26px;
  // &::before {
  //   margin-right: 5px;
  //   content: '';
  //   width: 1px;
  //   height: 43px;
  //   background: linear-gradient(#e2e2e2, #cacaca, #e2e2e2);
  // }
}
</style>