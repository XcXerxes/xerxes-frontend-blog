<template>
  <section class="home-wrapper">
    <div class="home-wrapper__content">
      <home-tabs :tabs="tabs" :activeId='acriveId' v-on:active-handle="tabsChange" :article-list="articleList"/>
    </div>
  </section>
</template>
<script>
import homeTabs from '@/components/tabs'
import api from '@/api'
export default {
  data () {
    return {
      tabs: [
        {id: '001', cate_name: 'CSS设计模式', cate_sort: 1},
        {id: '002', cate_name: 'NodeJs', cate_sort: 3},
        {id: '003', cate_name: 'vue全面讲解', cate_sort: 4},
        {id: '004', cate_name: 'react精髓', cate_sort: 5},
        {id: '005', cate_name: 'web无线端', cate_sort: 2}
      ],
      acriveId: '001',
      articleList: [
      ]
    }
  },
  methods: {
    tabsChange (tab) {
      this.acriveId = tab.name
    },
    async fetchCateData () {
      try {
        const data = await api.getCateList()
        if (data.code === 200) {
          this.tabs = data.data
        }
      } catch (e) {
        this.$message.error(e.des)
      }
    }
  },
  created () {
    for (let i = 0; i < 12; i++) {
      this.articleList.push({
        title: 'CSS技巧： 如何实现完美底部',
        thumb: 'http://img.hb.aicdn.com/29dbd6516738907cf0e35a95757e25fab4d0b29f396df-f7nthN_fw580',
        caption: '移动侦测，英文翻译为“Motion detection technology”，按照一定算法进行计算和比较'
      })
    }
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
        padding: 1rem 2rem;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  }
</style>


