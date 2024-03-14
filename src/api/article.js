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

// 点赞和收藏，取消点赞和取消收藏
export const changeArticleOpt = (data) => {
  return request.post('/interview/opt', {
    id: data.id,
    optType: data.optType
  })
}

// 收藏、点赞题目列表查询接口
export const getArticleOptList = (data) => {
  return request.get('/interview/opt/list', {
    params: {
      optType: data.optType,
      pageSize: data.pageSize,
      page: data.page
    }
  })
}
