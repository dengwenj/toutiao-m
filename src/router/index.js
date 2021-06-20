import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Login = () =>
  import ('views/login/Login')
const Layout = () =>
  import ('views/layout/Layout')
const Home = () =>
  import ('views/home/Home')
const Qa = () =>
  import ('views/qa/Qa')
const Video = () =>
  import ('views/video/Video')
const My = () =>
  import ('views/my/My')


Vue.use(VueRouter)

// 路由表
const routes = [{
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/',
  component: Layout,
  // 子路由
  children: [{
    path: '', // 默认子路由
    name: 'home',
    component: Home
  }, {
    path: '/qa',
    name: 'qa',
    component: Qa
  }, {
    path: '/video',
    name: 'video',
    component: Video
  }, {
    path: '/my',
    name: 'my',
    component: My
  }]
}]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

export default router