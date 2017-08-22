<template>
  <aside class="xcxerxes-aside">
      <div class="xcxerxes-aside__search">
          <el-input placeholder="关键字" />
      </div>
      <ul class="xcxerxes-aside__nav">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/book">图书推荐</router-link></li>
        <li><router-link to="about">关于我</router-link></li>
      </ul>
      <div class="xcxerxes-aside__link"></div>
  </aside>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
    .xcxerxes-aside {
        width: 120px;
        height: 100vh;
        background: #020202;
        @at-root {
            .xcxerxes-aside__nav {
                text-align: center;
                padding: 0;
                li {
                    margin: 10px 0;
                }
            }
        }
    }

</style>
