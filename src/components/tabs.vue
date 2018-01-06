<template>
<v-tabs v-model="activeId" grow>
  <v-toolbar color="black">
    <v-text-field
        solo
        label="Search"
        append-icon="keyboard_voice"
        prepend-icon="search"
      ></v-text-field>
    <v-tabs-bar color="transparent" dark slot="extension" >
      <v-tabs-slider color="pink"></v-tabs-slider>
      <v-tabs-item v-for="(item, index) in tabs" :key="index" :href="'#' + item.id" @click="handleClick(item, $event)">
        <span style="color: white">{{item.cate_name}}</span>
      </v-tabs-item>
    </v-tabs-bar>
  </v-toolbar>
  <v-tabs-items>
    <v-tabs-content :id="activeId">
      <card-list :article-list="articleList" v-on:item-change="cardChange" />
    </v-tabs-content>  
  </v-tabs-items>
</v-tabs>
  <!-- <el-tabs :active-name="activeId" @tab-click="handleClick">
    <el-tab-pane v-for="(item, index) in tabs"
     :key="index" :label="item.cate_name" :name="item.id">
      <card-list :article-list="articleList" v-on:item-change="cardChange" />
     </el-tab-pane>
  </el-tabs> -->
</template>
<script>
import _ from 'lodash'
import cardList from '@/components/card-list'
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeId: {
      type: String,
      required: true
    },
    articleList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      index: this.activeId
    }
  },
  computed: {
    computedTabs () {
      // is array
      if (!_.isArray(this.tabs)) {
        return []
      }
      // tabs length one
      if (this.tabs.length <= 1) {
        return this.tabs
      }
      return this.tabs.sort((a, b) => {
        return a.cate_sort - b.cate_sort
      })
    }
  },
  watch: {
    activeId (val) {
      this.index = val
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
      this.$emit('active-handle', tab)
    },
    cardChange (item) {
      this.$emit('card-change', item)
    }
  },
  components: {
    cardList
  }
}
</script>
