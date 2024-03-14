import request from '@/utils/request'

export const loginFn = (data) => {
  return request.post('/user/login', data)
}

export const registerFn = (data) => {
  return request.post('/user/register', data)
}
