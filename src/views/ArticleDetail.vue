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
      <div class="behavior">
        <van-icon
          :class="{ active: articleInfo.likeFlag == true }"
          name="thumb-circle"
          size="2em"
          @click="changeOpt(1)"
        />
        <van-icon
          :class="{ active: articleInfo.collectFlag == true }"
          name="star"
          size="2em"
          @click="changeOpt(2)"
        />
      </div>
    </div>
    <div class="skeleton" v-else>
      <van-skeleton class="skeleton1" :row="1" />
      <van-skeleton avatar :row="2" />
    </div>
  </div>
</template>

<script>
import { getArticleDetail, changeArticleOpt } from '@/api/article'
export default {
  name: 'article-detail',
  data() {
    return {
      articleInfo: null,
      optType: 0
    }
  },
  async created() {
    this.getDetail()
  },
  methods: {
    async getDetail() {
      const { data } = await getArticleDetail(this.$route.params.id)
      this.articleInfo = data
    },
    async changeOpt(value) {
      await changeArticleOpt({
        id: this.$route.params.id,
        optType: value
      })
      // this.getDetail()
      // 点赞
      if (value === 1) {
        this.articleInfo.likeFlag = !this.articleInfo.likeFlag
        if (this.articleInfo.likeFlag) {
          this.$toast.success('点赞成功')
          this.articleInfo.likeCount++
        } else {
          this.$toast.success('取消点赞')
          this.articleInfo.likeCount--
        }
      }
      // 收藏
      if (value === 2) {
        this.articleInfo.collectFlag = !this.articleInfo.collectFlag
        if (this.articleInfo.collectFlag) {
          this.$toast.success('收藏成功')
          this.articleInfo.collectCount++
        } else {
          this.$toast.success('取消收藏')
          this.articleInfo.collectCount--
        }
      }
    }
  }
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
    position: relative;
    .header {
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
    .behavior {
      display: flex;
      justify-content: center;
      justify-content: space-between;
      align-items: center;
      padding: 0 8px;
      position: fixed;
      right: 0;
      bottom: 230px;
      width: 70px;
      height: 40px;
      border-radius: 10px 0 0 10px;
      background-color: rgba(rgb(136, 135, 135), 0.4);
      .van-icon {
        color: #fff;
        &.active {
          color: orange;
          animation: shake 0.5s forwards;
        }
      }
      @keyframes shake {
        10% {
          transform: scale(0.7);
        }
        20% {
          transform: scale(0.8);
        }
        30% {
          transform: scale(0.9);
        }
        40% {
          transform: scale(1);
        }
        50% {
          transform: scale(0.9);
        }
        60% {
          transform: scale(0.8);
        }
        70% {
          transform: scale(0.7);
        }
      }
      .van-icon.shake {
        animation: shake 0.82s linear infinite;
      }
    }
  }
}
</style>
