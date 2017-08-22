<template>
  <ul class="link-list">
    <li v-for="(item, index) in data" class="link-list__item"><a :href="item.url">{{item.title}}</a></li>
  </ul>
</template>\
<script>
export default {
  props: ['data']
}
</script>
<style lang="scss" scoped>
  .link-list__item {
    font-size: 0;
    line-height: 22px;
    a {
      color: rgba(233, 233, 233, 0.9);
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

</style>


