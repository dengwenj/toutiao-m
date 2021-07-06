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