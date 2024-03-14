<template>
  <div class="detail-item" @click="$router.push(`/detail/${item.id}`)">
    <div class="top">
      <img :src="item.avatar" alt="" />
      <div class="right">
        <h4 class="headline">{{ item.stem }}</h4>
        <div class="creator">{{ item.creator }} | {{ item.createdAt }}</div>
      </div>
    </div>
    <div class="main">
      <p class="content">
        {{ clearHtml(item.content) }}
      </p>
      <p class="data">点赞数 {{ item.likeCount }} | 阅读数 {{ item.views }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-item',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    clearHtml(str) {
      return str.replace(/<[^>]+>/g, '')
    }
  }
}
</script>

<style lang="less" scoped>
.detail-item {
  padding: 10px;
  font-family: '等线';
  .top {
    display: flex;
    align-items: center;
    img {
      margin-right: 8px;
      width: 40px;
      height: 40px;
    }
    .right {
      .headline {
        margin: 0;
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 3px;
      }
      .creator {
        line-height: 16px;
        font-size: 12px;
        color: #ccc;
      }
    }
  }
  .main {
    color: #ccc;

    .content {
      margin: 6px 0;
      font-size: 14px;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      /* 弹性伸缩盒子模型显示 */
      display: -webkit-box;
      /* 限制在一个块元素显示的文本的行数 */
      -webkit-line-clamp: 3;
      /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-box-orient: vertical;
    }
    .data {
      font-size: 12px;
      margin: 6px 0;
    }
  }
}
</style>
