<template>
  <div class="like-page">
    <van-nav-bar title="我的喜欢" />
    <ArticleItem></ArticleItem>
  </div>
</template>

<script>
export default {
  name: 'h5-like',
  data() {
    return {
      list: []
    }
  },
  async created() {}
}
</script>

<style lang="less" scoped></style>
