<template>
  <div class="collect-page">
    <van-nav-bar title="我的收藏" />
    <ArticleItem></ArticleItem>
  </div>
</template>

<script>
export default {
  name: 'h5-collect',
  data() {
    return {
      list: []
    }
  },
  async created() {}
}
</script>

<style lang="less" scoped></style>
