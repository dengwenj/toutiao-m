import Vue from 'vue'
import Vuex from 'vuex'

// 引入本地存储封装模块
import { getItem, setItem } from "utils/storage";

Vue.use(Vuex)

const USER_KEY = 'toutiao-user'

// Vuex 里面的数据不是持久化的 用了本地存储就是持久化了
export default new Vuex.Store({
  state: {
    // user: JSON.parse(window.localStorage.getItem('user')) // 当前登录用户的登录状态（token等数据）
    user: getItem(USER_KEY) // 封装了本地存储
  },
  mutations: {
    setUser(state, data) {
      state.user = data

      // 为了防止页面刷新数据丢失，还需要把数据放到本地存储中，这里仅仅是为了持久化数据
      // window.localStorage.setItem('user', JSON.stringify(data))
      setItem(USER_KEY, data) // 封装了本地存储
    }
  },
  actions: {},
  modules: {}
})