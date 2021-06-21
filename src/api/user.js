/* 
   用户相关请求模块
*/

import request from "utils/request";

// 注册/登录
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}

// 短信验证码
export const sendsms = (mobile) => {
  return request({
    url: `/app/v1_0/sms/codes/${mobile}`,
    method: 'GET'
  })
}