// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './vuetify'
import router from './router'
import Noty from 'noty'
import 'noty/lib/noty.css'
import 'noty/lib/themes/nest.css'
import './assets/css/ionicons.min.css'
import store from './store'
import _ from 'lodash'

Vue.config.productionTip = false

Vue.prototype.$noty = function (options) {
  const params = {
    layout: 'topCenter',
    theme: 'nest',
    timeout: 1500
  }
  return new Noty(_.merge(params, options))
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
