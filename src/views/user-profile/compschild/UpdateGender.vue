<template>
  <div class="update-gender">
    <van-popup
      v-model="isGenderShow"
      position="bottom"
      @click-overlay="clickOverlay"
    >
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        :default-index="genders"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script>
// 网络请求
import { updateUserProfile } from 'api/user'

export default {
  name: '',
  components: {},
  props: {
    isGender: {
      type: Boolean,
      required: true,
    },
    value: {
      type: Number,
      // required: true,
    },
  },
  data() {
    return {
      columns: ['男', '女'],
      isGenderShow: false,
      genders: null,
    }
  },
  computed: {},
  watch: {
    isGender(value) {
      this.isGenderShow = value
    },
    // value(value) {
    //   this.genders = value
    // },
    value: {
      handler(value) {
        this.genders = value
      },
      immediate: true,
    },
  },
  created() {},
  mounted() {},
  methods: {
    async onConfirm(value, index) {
      this.$toast({
        message: '保存中',
        forbidclick: true, // 禁止背景点击
      })
      await updateUserProfile(this.genders)
      this.$emit('input', this.genders)
      this.$emit('cancel', false)
      this.$toast.success('保存成功')
    },
    onChange(picker, value, index) {
      this.genders = index
    },
    onCancel() {
      this.$emit('cancel', false)
    },

    clickOverlay() {
      this.$emit('cancel', false)
    },
  },
}
</script>

<style scoped lang="less"></style>