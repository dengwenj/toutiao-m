<template>
  <div class="update-image">
    <img :src="image" />
    <van-nav-bar
      class="nav-bar"
      left-text="取消"
      right-text="完成"
      @click-left="$emit('close')"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
// 网络请求
import { updateUserPhoto } from 'api/user'

export default {
  name: 'UpdateImage',
  components: {},
  props: {
    file: {
      type: File,
      required: true,
    },
  },
  data() {
    return {
      image: window.URL.createObjectURL(this.file),
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onClickRight() {
      this.$toast.loading({
        message: '保存中',
        forbidclick: true,
      })

      // 如果要求 Content-Type 是 multipart/form-data，则一定要提交 FormData 数据对象，专门用于文件上传的，不能提交{}没用
      const fd = new FormData()
      fd.append('photo', this.file)
      const { data } = await updateUserPhoto(fd)
      const photo = data.data.photo
      this.$emit('close')
      this.$emit('photo', photo)

      this.$toast.success('保存成功')
    },
  },
}
</script>

<style scoped lang="less">
.nav-bar {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>