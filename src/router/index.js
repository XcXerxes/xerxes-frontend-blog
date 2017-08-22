import Vue from 'vue'
import Router from 'vue-router'

const Index = (resolve) => require(['@/pages/index'], resolve)
const Home = (resolve) => require(['@/pages/home'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
