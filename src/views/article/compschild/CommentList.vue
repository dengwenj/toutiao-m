<template>
  <div class="">
    <!-- 
      List 组件通过 loading 和 finished 两个变量控制加载状态，当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。若数据已全部加载完毕，则直接将 finished 设置成 true 即可。
     -->
    <van-cell>全部评论</van-cell>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <comment-item
        v-for="(comment, index) in list"
        :key="index"
        :comment="comment"
      />
    </van-list>
  </div>
</template>

<script>
// 网络请求
import { getComment } from 'api/comment'

import CommentItem from './CommentItem'

export default {
  name: 'CommentList',
  components: {
    CommentItem,
  },
  props: {
    articleId: {
      type: [Number, String, Object],
      required: true,
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: null, // 页码  相当于前面的时间戳
      limit: 10, // 每页大小
    }
  },
  computed: {},
  watch: {},
  created() {
    // console.log(this.$route.params.articleId)  130178  130054 127849
  },
  mounted() {
    // 接收事件总线
    this.$bus.$on('newComment', (newComment) => {
      // 把新的文章评论添加在列表中
      this.list.unshift(newComment)
    })
  },
  methods: {
    async onLoad() {
      // 1 请求获取数据
      const { data } = await getComment({
        type: 'a', // 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
        source: this.articleId, // 源id，文章id或评论id
        offset: this.offset, //获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
        limit: this.limit, // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
      })
      console.log(data)
      // 2 把数据放到列表中
      const { results } = data.data
      this.list.push(...results)

      // 3 将本次的 loading 关闭
      this.loading = false

      // 4 判断是否还有数据
      if (results.length) {
        //   如果有，更新获取下一页数据的页码
        this.offset = data.data.last_id
      } else {
        //   如果没有，则将 finished 设置为 true，不再触发加载更多
        this.finished = true
      }
    },
  },
}
</script>

<style scoped lang="less"></style>