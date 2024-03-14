<template>
  <div class="register-page">
    <van-nav-bar title="注册" />
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
      <router-link to="/login" class="toPage">返回登录</router-link>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { registerFn } from '@/api/user'
export default {
  name: 'h5-register',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit(values) {
      await registerFn(values)
      this.$toast.success('注册成功')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.register-page {
  .toPage {
    float: right;
    color: #000;
    font-size: 14px;
    margin: 10px 20px;
  }
}
</style>
