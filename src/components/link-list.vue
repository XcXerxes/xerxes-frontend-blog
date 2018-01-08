<template>
  <v-list dense class="xcxerxes-aside__link">
      <v-subheader class="pa-1">友情链接</v-subheader>
      <v-list-tile v-for="(item, index) in data" :key="index">
        <v-list-tile-title>
          <a :href="item.url" style="font-size: 12px">{{item.title}}</a>
        </v-list-tile-title>
      </v-list-tile>
  </v-list>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .link-list__item {
    line-height: 22px;
    a {
      color: rgba(233, 233, 233, 0.9);
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

</style>


