<template>
  <div class="qa-container">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar" title="小邓同学" />
    <!-- /导航栏 -->

    <!-- 消息列表 -->
    <van-cell-group class="cell" ref="message">
      <van-cell
        :title="item.msg"
        v-for="(item, index) in messages"
        :key="index"
      />
    </van-cell-group>
    <!-- /消息列表 -->

    <!-- 发送消息 -->
    <van-cell-group class="message">
      <van-field v-model="message" placeholder="请输入消息" />
      <van-button class="btn" size="small" type="primary" @click="onSend"
        >发送</van-button
      >
    </van-cell-group>
    <!-- /发送消息 -->
  </div>
</template>

<script>
import io from 'socket.io-client'
import { getItem, setItem } from 'utils/storage'

export default {
  name: 'Qa',
  components: {},
  props: {},
  data() {
    return {
      message: '', // 输入的内容
      socket: null,
      messages: getItem('chat-messages') || [], // 消息列表
    }
  },
  computed: {},
  watch: {
    messages(val) {
      setItem('chat-messages', val)
      // 滑到底部
      // 数据改变影响视图更新不是立即的，如果要在操作数据之后立即操作数据影响的视图 DOM，那么最好把代码放在 this.$nextTick函数中
      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },
  },
  created() {
    // 建立连接
    // const socket = io('http://ttapi.research.itcast.cn')
    // this.socket = socket
    // socket.on('connect', () => {
    //   console.log('连接建立成功了')
    // })
    // socket.on('disconnect', () => {
    //   console.log('断开连接了')
    // })
    // // 监听 message 事件，接收服务端消息
    // socket.on('message', (data) => {
    //   this.message.push(data)
    // })
  },
  mounted() {
    this.scrollToBottom()
  },
  methods: {
    onSend() {
      // 请求发送消息
      const data = {
        msg: this.message,
        timestamp: Date.now(),
      }
      this.socket.emit('message', data)

      //  把用户发出去的消息存储到数组中
      this.messages.push(data)

      // 清空输入框
      this.message = ''
    },

    scrollToBottom() {
      const list = this.$refs.message
      // list.scrollTop 距离顶部的距离
      //  list.scrollHeight 最大可滚动的高度
      list.scrollTop = list.scrollHeight
    },
  },
}
</script>

<style scoped lang="less">
.cell {
  position: fixed;
  right: 0;
  left: 0;
  top: 46px;
  bottom: 94px;
  overflow: auto;
}
.message {
  display: flex;
  padding: 0 15px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 50px;
  .btn {
    padding: 0 20px;
    .van-button__text {
      width: 30px;
    }
  }
}
</style>