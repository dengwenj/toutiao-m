/* 
  搜索相关模块
*/

import request from "utils/request"

// 获取搜索联想建议
export const getSearchSuggestions = q => {
  return request({
    url: '/app/v1_0/suggestion',
    method: 'get',
    params: {
      q // 联想建议关键词
    }
  })
}