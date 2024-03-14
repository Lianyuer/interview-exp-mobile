<template>
  <div class="FOF-page">
    <img src="../assets/pageNotFound.png" alt="" />
    <p>糟糕啦！页面被劫持了</p>
  </div>
</template>

<script>
export default {
  name: 'h5-404'
}
</script>

<style lang="less" scoped>
.FOF-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
}
</style>
