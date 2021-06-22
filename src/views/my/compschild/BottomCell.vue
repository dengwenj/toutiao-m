<template>
  <div class="">
    <van-cell class="cell" title="消息通知" is-link url="/" />
    <van-cell class="cell" title="小邓同学" is-link to="/qa" />
    <van-cell class="drop-out" title="退出登录" />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
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
.cell {
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 50px;
  font-size: 15px;
  color: #333333;
}
.drop-out {
  margin-top: 4px;
  text-align: center;
  font-size: 15px;
  color: #d86262;
}
</style>