/* 
  文章评论相关的请求模块
*/
import request from "utils/request"

// 获取评论
export const getComment = params => {
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    params
  })
}

// 评论点赞
export const commentLike = target => {
  return request({
    method: 'POST',
    url: '/app/v1_0/comment/likings',
    data: {
      target
    }
  })
}

// 取消点赞
export const deleteCommentLike = commentId => {
  return request({
    url: `/app/v1_0/comment/likings/${commentId}`,
    method: 'DELETE'
  })
}

// 添加评论或评论回复
export const releaseComment = data => {
  return request({
    url: '/app/v1_0/comments',
    method: 'POST',
    data
  })
}