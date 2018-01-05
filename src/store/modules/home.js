import * as types from '../mutation-types'
import api from '@/api'
const state = {
  cateList: [],
  activeCateId: '',
  loading: false,
  total: 0,
  articleList: []
}

const getters = {
  tabs: state => state.cateList,
  activeCateId: state => state.activeCateId,
  homeLoading: state => state.loading,
  articleTotal: state => state.total,
  articleList: state => state.articleList
}

const actions = {
  // 获取所有的 分类名称
  async fetchCateList ({commit}) {
    try {
      console.table(arguments)
      commit(types.CATE_REQUEST)
      const data = await api.getCateList()
      if (data.code === 200) {
        commit(types.CATE_RECEIVE, {list: data.data})
      } else {
        commit(types.CATE_FAIL)
      }
    } catch (error) {
      commit(types.CATE_FAIL)
    }
  },
  async fetchArticleList ({commit}, params) {
    try {
      commit(types.ARTICLE_REQUEST)
      const data = await api.getArticleList(params)
      if (data.code === 200) {
        commit(types.ARTICLE_RECEIVE, {data})
      } else {
        commit(types.ARTICLE_FAIL)
      }
    } catch (error) {
      console.log(error)
      commit(types.ARTICLE_FAIL)
    }
  }
}

const mutations = {
  [types.CATE_REQUEST] (state) {
    console.group('commit' + arguments)
    state.loading = true
  },
  [types.CATE_RECEIVE] (state, {list}) {
    state.loading = false
    if (list.length > 0) {
      state.cateList = list.sort((a, b) => {
        return a.cate_sort - b.cate_sort
      })
      state.cateList = [{id: 'all_001', cate_name: '全部'}].concat(state.cateList)
      state.activeCateId = state.cateList[0].id
    } else {
      state.cateList = list
    }
  },
  [types.CATE_FAIL] (state) {
    state.cateList = []
    state.loading = false
  },
  [types.SELECTED_CATE] (state, {name}) {
    state.activeCateId = name
  },
  [types.ARTICLE_REQUEST] (state) {
    state.loading = true
  },
  [types.ARTICLE_RECEIVE] (state, {data}) {
    state.loading = false
    state.articleList = data.data
    state.total = data.total
  },
  [types.ARTICLE_FAIL] (state) {
    state.loading = false
    state.total = 0
    state.articleList = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
