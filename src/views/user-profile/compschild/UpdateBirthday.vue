<template>
  <div class="update-birthday">
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="修改生日"
      :min-date="minDate"
      :max-date="maxDate"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
import { updateUserProfile } from 'api/user'
import dayjs from 'dayjs'

export default {
  name: '',
  components: {},
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(this.value),
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onCancel() {
      this.$emit('close', false)
    },

    async onConfirm() {
      this.$toast({
        message: '保存中',
        forbidclick: true,
      })
      const birthday = dayjs(this.currentDate).format('YYYY-MM-DD')
      const { data } = await updateUserProfile({
        birthday,
      })
      console.log(data)
      this.$emit('close', false)
      this.$emit('input', birthday)
      this.$toast.success('保存成功')
    },
  },
}
</script>

<style scoped lang="less"></style>