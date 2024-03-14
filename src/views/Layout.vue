<template>
  <div class="layout-page">
    <div class="main">
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item name="article" icon="notes-o" to="/article">首页</van-tabbar-item>
      <van-tabbar-item name="collect" icon="star-o" to="/collect">收藏</van-tabbar-item>
      <van-tabbar-item name="like" icon="like-o" to="/like">喜欢</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'h5-layout',
  data() {
    return {
      active: 'article'
    }
  }
}
</script>

<style lang="less" scoped>
.layout-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: scroll;
  }
  .van-tabbar {
    position: relative;
  }
}
</style>
