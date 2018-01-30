<template>
  <section class="home-wrapper" :class="!drawerIsOpen ? 'is-not-open' : ''">
    <div class="home-wrapper__content">
      <home-tabs :tabs="tabs" :activeId='activeCateId' v-on:active-handle="tabsChange" @drawer-handle="drawerHandle"
       :article-list="articleList" v-on:card-change="openToArticleItem" />
    </div>
  </section>
</template>
<script>
import homeTabs from '@/components/tabs'
import api from '@/api'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      page: 1,
      limit: 12,
      isOpen: true
      /* tabs: [
        {id: '001', cate_name: 'CSS设计模式', cate_sort: 1},
        {id: '002', cate_name: 'NodeJs', cate_sort: 3},
        {id: '003', cate_name: 'vue全面讲解', cate_sort: 4},
        {id: '004', cate_name: 'react精髓', cate_sort: 5},
        {id: '005', cate_name: 'web无线端', cate_sort: 2}
      ],
      activeCateId: '001', */
    }
  },
  computed: {
    ...mapGetters([
      'tabs',
      'activeCateId',
      'articleList',
      'drawerIsOpen'
    ])
  },
  methods: {
    // 切换导航抽屉
    drawerHandle () {
      this.$store.commit('switch_drawer_open')
    },
    // 打开详情页
    openToArticleItem (item) {
      this.$router.push({name: 'articleDetail', params: {id: item.id}})
    },
    tabsChange (tab) {
      this.$router.replace({name: 'HomeArticle', query: {cate: tab.id}})
      if (this.activeCateId !== tab.name) {
        /*
        this.$store.commit('selected_cate', {name: tab.name})
        this.$store.dispatch('fetchArticleList', {
          limit: this.limit,
          page: this.page,
          categoryId: tab.name
        })
        */
      }
    },
    async fetchCateData () {
      try {
        const data = await api.getCateList()
      // console.log(data)
        if (data.code === 200) {
          if (data.data.length > 1) {
            this.tabs = data.data.sort((a, b) => {
              return a.cate_sort - b.cate_sort
            })
            console.log(this.tabs)
          } else {
            this.tabs = data.data
          }
          if (data.data.length > 0) {
            this.acriveId = data.data[0].id
          }
        } else {
          this.$message.error(data.message)
        }
      } catch (error) {
        this.$message.error(error)
      }
    }
  },
  watch: {
    $route (route) {
      console.log('route')
      const name = route.query.cate
      this.$store.commit('selected_cate', {name})
      this.$store.dispatch('fetchArticleList', {
        limit: this.limit,
        page: this.page,
        categoryId: name
      })
    }
  },
  created () {
    const name = this.$route.query.cate || ''
    this.$store.dispatch('fetchCateList').then(() => {
      this.$store.commit('selected_cate', {name})
    })
    this.$store.dispatch('fetchArticleList', {
      page: this.page,
      limit: this.limit,
      categoryId: name
    })
    /* for (let i = 0; i < 12; i++) {
      this.articleList.push({
        title: 'CSS技巧： 如何实现完美底部',
        thumb: 'http://img.hb.aicdn.com/29dbd6516738907cf0e35a95757e25fab4d0b29f396df-f7nthN_fw580',
        caption: '移动侦测，英文翻译为“Motion detection technology”，按照一定算法进行计算和比较'
      })
    } */
  },
  components: {
    homeTabs
  }
}
</script>
<style lang="scss">
  .home-wrapper {
    @at-root {
      .home-wrapper__content {
        box-sizing: border-box;
        padding: 0 10px;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  }
</style>


