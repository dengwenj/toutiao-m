/* 
  文章相关请求模块
*/

import request from "utils/request"

// 获取文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}

// 获取文章详情
export const getArticleById = articleId => {
  return request({
    method: 'get',
    url: `/app/v1_0/articles/${articleId}`
  })
}

// 收藏文章
export const addArticle = articleId => {
  return request({
    method: 'POST',
    url: '/app/v1_0/article/collections',
    data: {
      target: articleId
    }
  })
}

// 取消收藏文章
export const deleteArticle = articleId => {
  return request({
    url: `/app/v1_0/article/collections/${articleId}`,
    method: 'DELETE'
  })
}

// 添加点赞
export const addLike = articleId => {
  return request({
    method: 'POSt',
    url: '/app/v1_0/article/likings',
    data: {
      target: articleId
    }
  })
}

// 取消点赞
export const deleteLike = articleId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/article/likings/${articleId}`
  })
}