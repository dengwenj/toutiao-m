/* 
  封装 axios 请求模块
*/

// 导入 axios
import axios from "axios"

import { Toast } from "vant"

// 引入json-bigint 把后端返回的长的数字 js一样返回回来 默认是返回不一样的数字太长的话
import jsonBig from 'json-bigint'

// 在非组件模块中获取 store 必须通过这种方式，这里单独加载 store 和在组件中 this.$store 是一个东西
import store from "store/"

import router from "router/"

// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/', // 基础的路径 以后就可以不用写一大坨了

  // 定义后端返回的原始数据的处理
  // 参数 data 就是后端返回的原始数据  json-bigint
  transformResponse: [function(data) {
    try {
      // 如果转换成功，则直接把结果返回
      return jsonBig.parse(data)
    } catch (error) {
      // 转换失败就进入这里
      return data
    }
  }]
})

const refreshTokenReq = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 添加请求拦截器
request.interceptors.request.use(function(config) {
  const { user } = store.state

  // 如果用户已登录，统一给接口设置 token 信息
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }

  // 处理完之后一定要把 config 返回，否则请求就会停在这里
  return config;
}, function(error) {

  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function(response) {
  // 状态码是 2xx 的进入这里面
  return response
}, async function(error) {
  // 状态码不是 2xx 的进入这里面
  if (error && error.response && error.response.status === 400) {
    //  客服端请求参数错误
    Toast.fail('请求参数错误请重试')
  } else if (error && error.response && error.response.status === 401) {
    // token 失效
    const { user } = store.state

    // 如果没有 user 或者 user.token，直接登录进去
    if (!user || !user.token) {
      // 跳转到登录页 
      return redirectLogin()
    }
    // 使用 refresh_token 请求获取新的 token
    try {
      const { data } = await refreshTokenReq({
        method: 'PUT',
        url: '/app/v1_0/authorizations',
        headers: {
          Authorization: `Bearer ${user.refresh_token}`
        }
      });
      // 拿到新的 token 之后把他更新到容器中
      user.token = data.data.token
      store.commit('setUser', user)

      // 把失败的请求重新发出去
      // error.config 是本次请求的相关配置信息对象
      // 这里使用 request 发请求，他会走自己的拦截器
      // 它的请求拦截器中通过 store 容器访问 token 数据
      return request(error.config)
    } catch (error) {
      // 刷新 token 都失败了，直接跳转到登录页
      redirectLogin()
    }
  } else if (error && error.response && error.response.status === 403) {
    // 权限问题
    Toast.fail('没有权限')
  } else if (error && error.response && error.response.status >= 500) {
    // 服务端异常
    Toast.fail('服务端异常，请稍后重试')
  }
  return Promise.reject(error)
})

function redirectLogin() {
  router.replace('/login')
}

// 导出
export default request