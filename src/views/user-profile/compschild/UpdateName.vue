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
          maxlength="50"
          placeholder="请输入留言"
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
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
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