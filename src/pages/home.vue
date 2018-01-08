<template>
    <div>
        <xerxes-nav />
        <keep-alive>

        <router-view />
        </keep-alive>
    </div>
</template>
<script>
import xerxesNav from '@/components/nav'
export default {
  components: {
    xerxesNav
  }
}
</script>
<style lang="scss" scoped>
    
</style>
