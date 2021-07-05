/* 
  封装 axios 请求模块
*/

// 导入 axios
import axios from "axios"

// 引入json-bigint 把后端返回的长的数字 js一样返回回来 默认是返回不一样的数字太长的话
import jsonBig from 'json-bigint'

// 在非组件模块中获取 store 必须通过这种方式，这里单独加载 store 和在组件中 this.$store 是一个东西
import store from "store/"

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

  return Promise.reject(error);
})

// 导出
export default request