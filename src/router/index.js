import Vue from 'vue'
import Router from 'vue-router'

const Index = (resolve) => require(['@/pages/index'], resolve)
const Home = (resolve) => require(['@/pages/home'], resolve)
const HomeArticle = (resolve) => require(['@/pages/home-article'], resolve)
const ArticleContent = (resolve) => require(['@/pages/article-content'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          name: 'HomeArticle',
          component: HomeArticle
        },
        {
          path: 'article/:id',
          name: 'articleDetail',
          component: ArticleContent
        }
      ]
    }
  ]
})
