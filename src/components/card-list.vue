<template>
  <el-row :gutter="8">
  <el-col :sm="24" :md="6" v-for="(item, index) in articleList" :key="index">
      <div class="card-item" >
          <div class="card-item__body">
            <img :src="formatImg(item.thumb)" alt="" />
          </div>
          <div class="card-item__footer">
            <span>{{item.caption}}</span>
          </div>
      </div>
  </el-col>
  </el-row>
</template>
<script>
export default {
  props: ['articleList'],
  methods: {
    formatImg (img) {
      return img
    }
  }
}
</script>
<style lang="scss" scoped>
  .card-list {
    /* display: flex;
    justify-content: flex-start;
    flex-wrap: wrap; */
    overflow: hidden;
    @at-root {
      .card-item {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid salmon;
        height: 225px;
        overflow: hidden;
        margin-bottom: 20px;
        @at-root {
          .card-item__body {
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    .card-item {
      height: auto;
    }
  }
</style>

