<template>
  <div class="detail-page">
    <van-nav-bar title="面经详情" left-text="返回" left-arrow @click-left="$router.back()" />
    <div class="article" v-if="articleInfo">
      <div class="header">
        <h3 class="headline">{{ articleInfo.stem }}</h3>
        <div class="info">
          <img :src="articleInfo.avatar" alt="" />
          <div class="right">
            <div class="create">{{ articleInfo.creator }} | {{ articleInfo.createdAt }}</div>
            <div class="data">
              点赞数 {{ articleInfo.likeCount }} | 阅读数 {{ articleInfo.views }}
            </div>
          </div>
        </div>
      </div>
      <div class="content" v-html="articleInfo.content"></div>
    </div>
    <div class="skeleton" v-else>
      <van-skeleton class="skeleton1" :row="1" />
      <van-skeleton avatar :row="2" />
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from '@/api/article'
export default {
  name: 'article-detail',
  data() {
    return {
      articleInfo: null
    }
  },
  async created() {
    const { data } = await getArticleDetail(this.$route.params.id)
    this.articleInfo = data
    console.log(this.articleInfo)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.detail-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  .van-skeleton {
    align-items: center;
  }
  .skeleton1 {
    margin: 18px 0;
  }
  .van-nav-bar {
    position: relative;
    top: 0;
  }
  .article {
    flex: 1;
    overflow: scroll;
    padding: 0 15px;
    .headline {
      margin: 18px 0;
    }
    .info {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 16px;
      }
      .right {
        font-size: 14px;
        color: gray;
      }
    }
  }
}
</style>
