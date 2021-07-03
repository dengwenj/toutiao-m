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

// 添加频道
export const addUserChannels = data => {
  return request({
    url: '/app/v1_0/user/channels',
    method: 'PATCH',
    data
  })
}

// 删除我的频道
export const deleteUserChannels = (channelId) => {
  return request({
    url: `/app/v1_0/user/channels/${channelId}`,
    method: 'DELETE'
  })
}