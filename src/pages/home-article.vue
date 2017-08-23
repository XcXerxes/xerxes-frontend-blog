<template>
  <section class="home-wrapper">
    <home-tabs :tabs="tabs" :activeId='acriveId' v-on:active-handle="tabsChange" :article-list="articleList"/>
  </section>
</template>
<script>
import homeTabs from '@/components/tabs'
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
    }
  },
  created () {
    for (let i = 0; i < 12; i++) {
      this.articleList.push({
        thumb: 'http://pic48.nipic.com/file/20140912/7487939_223919315000_2.jpg',
        caption: '移动侦测，英文翻译为“Motion detection technology”，按照一定算法进行计算和比较'
      })
    }
  },
  components: {
    homeTabs
  }
}
</script>
<style lang="scss" scoped>
  .home-wrapper {
    position: absolute;
    left: 140px;
    right: 0;
    bottom: 0;
    top: 0;
    box-sizing: border-box;
    padding: 2rem;
    background: #f2f2f2;
  }
</style>


