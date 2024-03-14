<template>
  <div class="detail-item">
    <div class="top">
      <img src="https://picsum.photos/30" alt="" />
      <div class="right">
        <h4 class="headline">标题标题</h4>
        <div class="creator">作者 | 时间</div>
      </div>
    </div>
    <div class="main">
      <p class="content">
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx得劲氪金xxxxxxxxxxxxxxxxxxxxx
      </p>
      <p class="data">点赞数 xx | 阅读数 xx</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-item'
}
</script>

<style lang="less" scoped>
.detail-item {
  height: 100px;
  padding: 10px;
  .top {
    display: flex;
    align-items: center;
    img {
      margin-right: 8px;
    }
    .right {
      .headline {
        margin: 0;
        line-height: 16px;
        margin-bottom: 3px;
      }
      .creator {
        line-height: 16px;
      }
    }
  }
  .main {
    color: #ccc;

    .content {
      margin: 6px 0;
      font-size: 16px;
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
      font-size: 14px;
      margin: 6px 0;
    }
  }
}
</style>
