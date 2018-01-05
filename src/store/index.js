import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Home from './modules/home'
import Article from './modules/article'
import Global from './modules/global'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Home,
    Article,
    Global
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
