<template>
  <div class="update-image">
    <img class="image" :src="image" ref="image" />
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

// 头像裁切
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

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
      cropper: null, // 头像裁切
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const image = this.$refs.image
    this.cropper = new Cropper(image, {
      viewMode: 1,
      dragMode: 'move',
      aspectRatio: 1,
      cropBoxMovable: true,
      cropBoxResizable: false,
      background: false,
      movable: false,
    })
  },
  methods: {
    getCroppedCanvas() {
      // 这个本身没有返回 Promise 封装了一个
      return new Promise((resolve) => {
        this.cropper.getCroppedCanvas().toBlob((file) => {
          resolve(file)
        })
      })
    },

    async onClickRight() {
      this.$toast.loading({
        message: '保存中',
        forbidclick: true,
        duration: 0,
      })

      const file = await this.getCroppedCanvas()
      const fd = new FormData()
      fd.append('photo', file)

      // 如果要求 Content-Type 是 multipart/form-data，则一定要提交 FormData 数据对象，专门用于文件上传的，不能提交{}没用
      // const fd = new FormData()
      // fd.append('photo', this.file)
      const { data } = await updateUserPhoto(fd)
      console.log(data)
      const photo = data.data.photo
      this.$emit('close')
      this.$emit('photo', photo)

      this.$toast.success('保存成功')
    },
  },
}
</script>

<style scoped lang="less">
/* Ensure the size of the image fit the container perfectly */
.image {
  display: block;

  /* This rule is very important, please don't ignore this */
  max-width: 100%;
}
.nav-bar {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>