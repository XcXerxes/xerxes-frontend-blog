// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './vuetify'
import 'babel-polyfill'
import 'es6-promise/auto'
import router from './router'
import './assets/scss/normalize.scss'
import './assets/scss/public.scss'
import './assets/css/ionicons.min.css'
import './element-config'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

window._ = require('lodash')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
registerServiceWorker()
