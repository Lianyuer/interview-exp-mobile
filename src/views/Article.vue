<template>
  <div class="article-page">
    <div class="header">
      <div class="left">
        <a href="#">推荐</a>
        <a href="#">最新</a>
      </div>
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="content">
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </div>
  </div>
</template>

<script>
import { getArticleList } from '@/api/article'
export default {
  name: 'h5-article',
  data() {
    return {
      current: 1,
      pageSize: 10,
      sorter: 'weight_desc',
      list: []
    }
  },
  async created() {
    const { data } = await getArticleList({
      current: this.current,
      pageSize: this.pageSize,
      sorter: this.sorter
    })
    this.list = data.rows
    console.log(this.list)
  }
}
</script>

<style lang="less" scoped>
.article-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 5px 0 10px;
    .left {
      font-size: 14px;
      a {
        color: gray;
        margin-right: 5px;
      }
    }
    img {
      width: 60px;
    }
  }
  .content {
    flex: 1;
    overflow: scroll;
  }
}
</style>
