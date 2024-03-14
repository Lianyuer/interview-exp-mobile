<template>
  <div class="user-page">
    <div class="header" v-if="userInfo">
      <img :src="userInfo.avatar" alt="" />
      <div class="username">{{ userInfo.username }}</div>
    </div>
    <van-skeleton avatar :row="1" v-else />
    <van-grid :column-num="3">
      <van-grid-item icon="notes-o" text="历史记录" />
      <van-grid-item icon="thumb-circle-o" text="点赞" to="/like" name="like" />
      <van-grid-item icon="star-o" text="收藏" to="/collect" name="collect" />
    </van-grid>
    <van-cell title="推荐分享" is-link to="index" />
    <van-cell title="意见反馈" is-link to="index" />
    <van-cell title="关于我们" is-link to="index" />
    <van-cell title="退出登录" is-link @click="logout" />
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { delToken } from '@/utils/storage'
export default {
  name: 'h5-user',
  data() {
    return {
      userInfo: null
    }
  },
  async created() {
    const { data } = await getUserInfo()
    this.userInfo = data
    console.log(this.userInfo)
  },
  methods: {
    logout() {
      delToken()
      this.$router.push('/login')
      this.$toast.success('退出成功')
    }
  }
}
</script>

<style lang="less" scoped>
.user-page {
  padding: 20px 10px;
  .van-skeleton {
    .van-skeleton__avatar {
      width: 50px;
      height: 50px;
    }
    .van-skeleton__content {
      display: flex;
      align-items: center;
      padding: 0;
    }
  }
  .header {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin: 0 15px;
    }
  }
  .van-grid {
    margin-top: 20px;
  }
}
</style>
