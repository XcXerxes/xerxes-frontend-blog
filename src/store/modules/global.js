import * as types from '../mutation-types'
import Cookies from 'js-cookie'
const state = {
  userInfo: {}
}
const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  [types.USER_INFO_RECEIVE] (state) {
    if (Cookies.get('login_userid')) {
      /* eslint-disable */
      const login_userid = Cookies.get('login_userid')
      const login_username = Cookies.get('login_username')
      state.userInfo = {
        login_userid,
        login_username
      }
    }
  }
}

export default {
  state,
  getters,
  mutations
}
