const KEY = 'vant-exp-token'

export const setToken = (token) => {
  return localStorage.setItem(KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const delToken = () => {
  return localStorage.removeItem(KEY)
}
