import * as types from '../mutation-types'
import Cookies from 'js-cookie'
const state = {
  userInfo: {},
  drawerIsOpen: true
}
const getters = {
  userInfo: state => state.userInfo,
  drawerIsOpen: state => state.drawerIsOpen
}

const mutations = {
  // 用户信息
  [types.USER_INFO_RECEIVE] (state) {
    if (Cookies.get('login_userid')) {
      /* eslint-disable */
      const login_userid = Cookies.get('login_userid')
      const login_username = Cookies.get('login_username')
      const login_avatar = Cookies.get('login_avatar')
      state.userInfo = {
        login_userid,
        login_username,
        login_avatar
      }
    } else {
      state.userInfo = {}
    }
  },
  // 切换导航
  [types.SWITCH_DRAWER_OPEN] (state) {
    state.drawerIsOpen = !state.drawerIsOpen
  },
  // 关闭导航
  [types.SWITCH_DRAWER_CLOSE] (state) {
    state.drawerIsOpen = false
  },
  // 清楚cookie
  [types.CLEAR_USER_INFO] (state) {
    Cookies.remove('login_userid')
    Cookies.remove('login_username')
    Cookies.remove('login_avatar')
    Cookies.remove('token')
  }
}

export default {
  state,
  getters,
  mutations
}
