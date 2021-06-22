<template>
  <div class="my-container">
    <!-- 顶部 -->
    <top-cell></top-cell>

    <!-- 中部 -->
    <central-grid></central-grid>

    <!-- 底部 -->
    <bottom-cell></bottom-cell>
  </div>
</template>

<script>
import TopCell from './compschild/TopCell'
import CentralGrid from './compschild/CentralGrid'
import BottomCell from './compschild/BottomCell'

export default {
  name: 'My',
  components: {
    TopCell,
    CentralGrid,
    BottomCell,
  },
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

<style scoped lang="less"></style>