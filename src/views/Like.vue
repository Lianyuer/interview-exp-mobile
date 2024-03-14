<template>
  <div class="like-page">
    <van-nav-bar title="我的喜欢" />
    <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
  </div>
</template>

<script>
import { getArticleOptList } from '@/api/article'
export default {
  name: 'h5-like',
  data() {
    return {
      list: [],
      optType: 1,
      pageSize: 10,
      page: 1
    }
  },
  async created() {
    const { data } = await getArticleOptList({
      optType: this.optType,
      pageSize: this.pageSize,
      page: this.page
    })
    this.list.push(...data.rows)
    console.log(this.list)
  }
}
</script>

<style lang="less" scoped></style>
