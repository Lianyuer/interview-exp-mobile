import request from '@/utils/request'

// 获取面经列表
export const getArticleList = (data) => {
  return request.get('/interview/query', {
    params: {
      current: data.current,
      pageSize: data.pageSize,
      sorter: data.sorter
    }
  })
}

// 获取单个面经详情
export const getArticleDetail = (id) => {
  return request.get('/interview/show', {
    params: {
      id
    }
  })
}
