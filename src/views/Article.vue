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
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getArticleList } from '@/api/article'
export default {
  name: 'h5-article',
  data() {
    return {
      current: 0,
      pageSize: 10,
      sorter: 'weight_desc',
      list: [],
      refreshing: false,
      loading: false,
      finished: false
    }
  },
  /**
   *  一开始加载数据：list 中有起始页的数据
   * 需求：支持list列表滑动加载数据；支持下拉刷新重置第一页的数据
   * 情景一：不下拉刷新，一直向上滑动，每次请求数据前 this.current++，请求到数据后，把数据push进list
   * 情景二：每次下拉刷新，去请求第一页的数据，
   * 所以数据请求到后，refreshing若为true则直接把请求到的第一页数据赋值给list，
   * 而不是先清空数组再push进去
   * 情景三：下拉刷新，然后再上滑加载数据加载数据
   * 情景四：上滑加载数据，再返回去下拉刷新
   *
   */
  methods: {
    onRefresh() {
      // this.refreshing = true
      this.onLoad()
      setTimeout(() => {
        this.refreshing = false
      }, 600)
    },
    async onLoad() {
      if (this.refreshing) {
        this.current = 1
        this.list = []
      } else {
        this.current++
      }
      console.log(this.current, '请求数据前current')
      // 请求数据
      const { data } = await getArticleList({
        current: this.current,
        pageSize: this.pageSize,
        sorter: this.sorter
      })
      // 添加数据
      if (this.refreshing) {
        this.list.push(...data.rows)
      }
      if (this.loading) {
        this.list.push(...data.rows)
        this.loading = false
      }
      if (this.current > data.pageTotal) {
        this.finished = true
      }
      console.log(this.list, 'list')
    }
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
