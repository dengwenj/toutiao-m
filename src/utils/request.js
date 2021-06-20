/* 
  封装 axios 请求模块
*/

// 导入 axios
import axios from "axios"

// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础的路径 以后就可以不用写一大坨了
})

// 导出
export default request