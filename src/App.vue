<template>
  <div id="app">
    <h3>头条</h3>
    <!-- 路由的出口 就是被匹配到的路由，那个页面就会渲染到这里 -->
    <router-view />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <div class="hhh">hhh</div>
    <i class="toutiao toutiao-shanchu"></i>
    <i class="toutiao toutiao-shoucang"></i>
    <div>
      <van-icon name="chat-o" />
      <van-icon name="phone-o" dot />
      <van-icon name="phone-o" badge="99+" />
    </div>
    <div>
      <van-button icon="plus" type="primary" />
      <van-button icon-prefix="toutiao" icon="shanchu"></van-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.hhh {
  width: 200px;
  height: 200px;
  background: skyblue;
}
</style>
