<template>
<div>
<v-toolbar color="black" dark tabs>
  <v-toolbar-side-icon @click.native="switchDrawers"></v-toolbar-side-icon>
  <v-text-field
      solo
      light
      label="Search"
      append-icon="keyboard_voice"
      prepend-icon="search"
    ></v-text-field>
  <v-tabs v-model="setIndx" grow slider-color="pink" slot="extension">
    <v-tab v-for="(item, index) in tabs" :key="index"  @click="handleClick(item, index)">
      <span style="color: white">{{item.cate_name}}</span>
    </v-tab>
  </v-tabs>
  </v-toolbar>
    <v-tabs-items>
      <card-list :article-list="articleList" v-on:item-change="cardChange" />
      <v-tab-item>
      </v-tab-item>  
    </v-tabs-items>
    </div> 
</template>
<script>
import _ from 'lodash'
import cardList from '@/components/card-list'
export default {
  isOpen: {
    type: Boolean,
    default: false
  },
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
      idx: this.tabs.findIndex(item => item.id === this.activeId)
    }
  },
  computed: {
    setIndx: {
      get () {
        return this.tabs.findIndex(item => item.id === this.activeId)
      },
      set (val) {
        this.idx = val
      }
    },
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
      this.idx = this.tabs.findIndex(item => item.id === val)
    }
  },
  methods: {
    switchDrawers () {
      this.$emit('drawer-handle')
    },
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
