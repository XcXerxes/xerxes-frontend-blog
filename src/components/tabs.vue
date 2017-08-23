<template>
  <el-tabs :active-name="activeId" @tab-click="handleClick">
    <el-tab-pane v-for="(item, index) in computedTabs" 
     :key="index" :label="item.cate_name" :name="item.id">
      <card-list :article-list="articleList" />
     </el-tab-pane>
  </el-tabs>
</template>
<script>
import cardList from '@/components/card-list'
export default {
  props: ['tabs', 'activeId', 'articleList'],
  computed: {
    computedTabs () {
      return this.tabs.sort((a, b) => {
        return a.cate_sort - b.cate_sort
      })
    }
  },
  methods: {
    handleClick (tab, event) {
      this.$emit('active-handle', tab)
    }
  },
  components: {
    cardList
  }
}
</script>
