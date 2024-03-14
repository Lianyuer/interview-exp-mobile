import request from '@/utils/request'

export const loginFn = (data) => {
  return request.post('/user/login', data)
}

export const registerFn = (data) => {
  return request.post('/user/register', data)
}

// 获取用户数据
export const getUserInfo = () => {
  return request.get('/user/currentUser')
}
