<template>
  <!-- 弹出层默认挂载到组件所在位置，可以通过 get-container 属性指定挂载位置。 -->
  <van-popup
    v-model="isShow"
    closeable
    close-icon-position="top-left"
    position="bottom"
    :style="{ height: '100%' }"
    get-container="body"
    @click="popup"
  >
    <!-- 自己使用插槽首页哪里使用频道编辑组件 -->
    <slot></slot>

    <!-- 频道编辑 -->
    <!-- <channel-edit></channel-edit> -->
    <!-- !频道编辑 -->
  </van-popup>
</template>

<script>
// import ChannelEdit from './ChannelEdit'

export default {
  name: 'Popup',
  components: {
    // ChannelEdit,
  },
  props: {
    isChannelEditShow: {
      type: Boolean,
    },
  },
  data() {
    return {
      isShow: false, // 弹出层 显示频道列表
    }
  },
  computed: {},
  // 不能直接修改 props 里面的数据 通过 watch 可以监听属性
  watch: {
    isChannelEditShow(value) {
      this.isShow = value
    },
  },
  created() {},
  mounted() {},
  methods: {
    popup() {
      this.$emit('popup', this.isShow)
    },
  },
}
</script>

<style scoped lang="less">
.van-popup {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
/deep/ .van-icon {
  color: #222;
}
</style>