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
    }
  },
  // 关闭导航
  [types.SWITCH_DRAWER_OPEN] (state) {
    state.drawerIsOpen = !state.drawerIsOpen
  }
}

export default {
  state,
  getters,
  mutations
}
