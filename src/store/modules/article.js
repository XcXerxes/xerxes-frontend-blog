import api from '@/api'
import * as types from '../mutation-types'

const state = {
  item: {},
  loading: false
}

const getters = {
  articleItem: state => state.item,
  articleLoading: state => state.loading
}

const actions = {
  async fetchArticleItem ({commit}, {id}) {
    try {
      commit(types.ARTICLE_ITEM_REQUEST)
      const data = await api.getArticleItem({id})
      if (data.code === 200) {
        commit(types.ARTICLE_ITEM_RECEIVE, {data: data.data})
      } else {
        commit(types.ARTICLE_ITEM_FAIL)
      }
    } catch (error) {
      commit(types.ARTICLE_ITEM_FAIL)
    }
  }
}

const mutations = {
  [types.ARTICLE_ITEM_REQUEST] (state) {
    state.loading = true
  },
  [types.ARTICLE_ITEM_RECEIVE] (state, {data}) {
    state.loading = false
    state.item = data
  },
  [types.ARTICLE_ITEM_FAIL] (state) {
    state.loading = false
    state.item = {}
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
