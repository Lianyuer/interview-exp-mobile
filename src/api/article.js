import request from '@/utils/request'

export const getArticleList = (data) => {
  return request.get('/interview/query', {
    params: {
      current: data.current,
      pageSize: data.pageSize,
      sorter: data.sorter
    }
  })
}
