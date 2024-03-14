<template>
  <div class="login-page">
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <router-link to="/register" class="toPage">前往注册</router-link>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginFn } from '@/api/user'
import { setToken } from '@/utils/storage'
export default {
  name: 'h5-login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit(values) {
      const { data } = await loginFn(values)
      setToken(data.token)
      this.$toast.success('登录成功')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.login-page {
  .toPage {
    float: right;
    color: #000;
    font-size: 14px;
    margin: 10px 20px;
  }
}
</style>
