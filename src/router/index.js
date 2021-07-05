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
const Search = () =>
  import ('views/search/Search')
const Article = () =>
  import ('views/article/Article')


Vue.use(VueRouter)

// 路由表
const routes = [{
    path: '/login',
    name: 'login',
    component: Login
  },
  { // 一级路由渲染到根组件中的 router-view
    path: '/',
    component: Layout,
    // 子路由
    children: [{ // 子路由渲染到父路由的 router-view 中
      path: '/', // 默认子路由
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
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  { // 动态路由
    path: '/article/:articleId',
    name: 'article',
    component: Article,
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router