import { createStore } from 'vuex'
// 引入持久化
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  // 存储数据
  state: {
    // 用户信息
    userInfo: {},
  },
  // 存储复杂数据
  getters: {
  },
  // 存储函数方法
  mutations: {
    // 存储用户信息
    loginSuccess(state, userInfo) {
      state.userInfo = userInfo
    },
    //退出登录清除用户信息
    loginOut(state) {
      state.userInfo = {}
    },
  },
  // 异步调用函数
  actions: {
  },
  // 模块
  modules: {
  },

  // //持久化数据
  // plugins: [
  //   createPersistedState({
  //     // 存储方式：localStorage、sessionStorage、cookies
  //     storage: window.sessionStorage,
  //     // 存储的 key 的key值
  //     key: "store",
  //     render(state) {
  //       // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
  //       return { ...state };
  //     }
  //   })
  // ]
})
