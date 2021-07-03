/* 
  频道相关的请求模块
*/

import request from "utils/request";

// 获取所有的频道列表
export const getAllChannels = () => {
  return request({
    method: 'get',
    url: '/app/v1_0/channels'
  })
}