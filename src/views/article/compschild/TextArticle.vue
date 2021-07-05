<template>
  <div class="markdown-body" v-html="articleDetails.content"></div>
</template>

<script>
import './github-markdown.css'

export default {
  name: '',
  components: {},
  props: {
    articleDetails: {
      type: Object,
      default() {
        return {}
      },
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
.markdown-body {
  margin-top: 1px;
  padding: 15px;
  background: #fff;
}
</style>
