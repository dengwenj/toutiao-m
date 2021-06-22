/* 
   用户相关请求模块
*/

import request from "utils/request"

// 在非组件模块中获取 store 必须通过这种方式，这里单独加载 store 和在组件中 this.$store 是一个东西
// import store from "store/"

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

// 获取用户自己信息
export const getOneselfUser = () => {
  return request({
    url: '/app/v1_0/user',
    method: 'GET',
    // headers: {
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
  })
}