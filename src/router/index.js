import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "store/"
import { Dialog } from 'vant'

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
const UserProfile = () =>
  import ('views/user-profile/UserProfile')


Vue.use(VueRouter)

// 路由表
const routes = [{
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false }

  },
  { // 一级路由渲染到根组件中的 router-view
    path: '/',
    component: Layout,
    // 子路由
    children: [{ // 子路由渲染到父路由的 router-view 中
      path: '/', // 默认子路由
      name: 'home',
      component: Home,
      meta: { requiresAuth: false }
    }, {
      path: '/qa',
      name: 'qa',
      component: Qa,
      meta: { requiresAuth: true }
    }, {
      path: '/video',
      name: 'video',
      component: Video,
      meta: { requiresAuth: false }
    }, {
      path: '/my',
      name: 'my',
      component: My,
      meta: { requiresAuth: false }
    }]
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: { requiresAuth: false }
  },
  { // 动态路由
    path: '/article/:articleId',
    name: 'article',
    component: Article,
    props: true,
    meta: { requiresAuth: false }
  },
  {
    path: '/user/profile',
    name: 'user-profile',
    component: UserProfile,
    meta: { requiresAuth: false }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// to 要去的那个路由
// from 从哪里来的那个路由
// next 放行
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 页面需要登录才可以访问的
    if (store.state.user) {
      // 说明登录了 就直接放行 阻止代码向下执行
      return next()
    }
    // 没有登录
    Dialog.confirm({
        title: '访问提示',
        message: '该页面需要登录才能访问，确定登录吗?',
      })
      .then(() => {
        console.log(1);
        // 点击确认  跳转到登录页
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      })
      .catch(() => {
        // 点击取消
        next(false) // 中断当前的导航 就是 就停留在这个页面
      });
  } else {
    // 页面不需要登录就可以访问的
    next()
  }
})

export default router