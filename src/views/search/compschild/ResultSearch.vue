<template>
  <div class="result-search">
    <!-- 
      List 组件通过 loading 和 finished 两个变量控制加载状态，
     当组件初始化或滚动到到底部时，会触发 load 事件并将 loading 设置成 true，此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。
    若数据已全部加载完毕，则直接将 finished 设置成 true 即可。***********************

     load 事件： 
       List 初始化后会触发一次 load 事件，用于加载第一屏的数据。
       如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。
 
    loading 属性：控制加载中的 loading 状态 
      非加载中，loading 为 false，此时会根据列表滚动位置判断是否触发 load 事件（列表内容不足一屏幕时，会直接触发）
      加载中，loading 为 true，表示正在发送异步请求，此时不会触发 load 事件
 
    finished 属性：控制加载结束的状态 
     在每次请求完毕后，需要手动将 loading 设置为 false，表示本次加载结束
     所有数据加载结束，finished 为 true，此时不会触发 load 事件
     -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
      />
    </van-list>
  </div>
</template>

<script>
// 网络请求
import { getSearchResult } from 'api/search'

export default {
  name: 'ResultSearch',
  components: {},
  props: {
    topSearchText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1, // 页码
      perPage: 10, // 每页多少
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onLoad() {
      // 1 请求获取数据
      const { data } = await getSearchResult({
        page: this.page, //页码
        per_page: this.perPage, // 每页多少
        q: this.topSearchText, // 搜索关键字
      })

      // 2 将数据放到数据列表中
      const results = data.data.results
      this.list.push(...results)

      // 3 关闭本次的 loading
      this.loading = false

      // 4 判断是否还有数据
      if (results.length) {
        //   如果有，则更新获取下一页数据的页码
        this.page++
      } else {
        //   如果没有，则把 finished 设置为 true，关闭加载更多
        this.finished = true
      }
    },
  },
}
</script>

<style scoped lang="less">
.result-search {
  position: fixed;
  left: 0;
  right: 0;
  top: 54px;
  bottom: 0;
  overflow: auto;
}
</style>