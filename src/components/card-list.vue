<template>
  <el-row :gutter="20">
    <el-col :sm="24" :md="6" v-for="(item, index) in articleList" :key="index">
      <div class="card-item" @click="openToItem(item)">
        <div class="card-item__body">
          <img :src="formatImg(item.thumb)" alt="" />
        </div>
        <div class="card-item__footer">
          <h3>{{item.title}}</h3>
          <p>{{item.caption}}</p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import config from '@/config'
export default {
  props: {
    articleList: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatImg (img) {
      return `${config.imgUrl}${img}`
    },
    openToItem (item) {
      this.$emit('item-change', item)
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
      height: 222px;
      padding-bottom: 5px;
      overflow: hidden;
      margin-bottom: 20px;
      border: 2px solid transparent;
      cursor: pointer;
      &:hover {
        border: 2px solid #ddd;
      }
      @at-root {
        .card-item__body {
          height: 150px;
          img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
        }
        .card-item__footer {
          box-sizing: border-box;
          padding: 5px;
          h3 {
            font-size: 0.75rem;
            line-height: 1.2;
            margin-bottom: 6px;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
          }
          p {
            font-size: 0.6rem;
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .card-item {
    height: auto;
    @at-root {
      .card-item__body {
        height: auto;
      }
    }
  }
}
</style>

