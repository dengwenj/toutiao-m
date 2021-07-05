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

// 获取搜索结果
export const getSearchResult = params => {
  return request({
    url: '/app/v1_0/search',
    method: 'get',
    params
  })
}

// 获取用户搜索历史
export const getSearchHistory = () => {
  return request({
    url: '/app/v1_0/search/histories',
    method: 'get'
  })
}