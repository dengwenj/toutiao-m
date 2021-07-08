<template>
  <div class="update-name">
    <van-popup v-model="name" position="bottom" :style="{ height: '100%' }">
      <van-nav-bar
        title="修改昵称"
        left-text="取消"
        right-text="完成"
        @click-left="leftclick"
        @click-right="onUpdate"
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
import { updateUserProfile } from 'api/user'

export default {
  name: '',
  components: {},
  props: {
    name: {
      type: Boolean,
      required: true,
    },
    // 声明接收父组件 v-model 传递的 value 数据
    value: {
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
    // nicheng(value) {
    //   this.message = value
    // },
    value: {
      handler(val) {
        this.message = val
      },
      immediate: true,
    },
  },
  created() {},
  mounted() {},
  methods: {
    async onUpdate() {
      try {
        this.$toast({
          message: '保存中',
          forbidclick: true, // 禁止背景点击
        })
        // 请求提交更新昵称
        // 更新成功 -> 修改父组件的 name -> 关闭弹出层
        await updateUserProfile({
          name: this.message,
        })

        // this.$emit('update-name', this.message)
        // 发布 input 事件，更新父组件 v-model 绑定的数据
        this.$emit('input', this.message)

        this.$emit('cross')

        this.$toast.success('保存成功')
      } catch (error) {
        if (error && error.response && error.response.status === 409) {
          this.$toast.fail('昵称已存在')
        }
      }
    },

    leftclick() {
      this.$emit('cross')
      this.message = this.value
    },
  },
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