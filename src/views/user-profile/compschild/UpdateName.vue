<template>
  <div class="update-name">
    <van-popup v-model="name" position="bottom" :style="{ height: '100%' }">
      <van-nav-bar
        title="修改昵称"
        left-text="取消"
        right-text="完成"
        @click-left="$emit('cross')"
      />
      <div class="field">
        <van-field
          v-model="message"
          rows="2"
          autosize
          type="textarea"
          maxlength="7"
          placeholder="请输入昵称"
          show-word-limit
        />
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    name: {
      type: Boolean,
      required: true,
    },
    nicheng: {
      type: String,
      // required: true,
    },
  },
  data() {
    return {
      message: '',
    }
  },
  computed: {},
  watch: {
    // 这里这样做 props里面的数据是异步获得的 可能这个数据还没有获取到 这时候 prop 就把值赋值给了 data 了，所有 data 里面拿的值是空
    // 所以这样做 监视 prop 里面的变化
    nicheng(value) {
      this.message = value
    },
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
.van-popup {
  background-color: #f5f7f9;
  .field {
    margin: 10px;
  }
}
</style>