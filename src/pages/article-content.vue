<template>
  <section class="home-wrapper article-wrapper" id="article-wrapper">
    <div class="article-wrapper__content" ref="el" style="transform: translateX(1920px)">
      <div class="article-wrapper__title">
        <h2>{{articleItem.title}}</h2>
        <p>In <span :style="{color: '#e43256'}">{{formatCate}}</span> on <span :style="{color: '#e43256'}">{{formatTime}}</span> By <span :style="{color: '#e43256'}">xcxerxes</span></p>
      </div>
      <div class="article-wrapper__html markdown-body" v-html="articleItem.html">
      </div>
      <div class="article-comment">
        <comment-form @comment-submit="submitComment"/>
      </div>
    </div>
  </section>
</template>
<script>
import Cookies from 'js-cookie'
import commentForm from '@/components/comment-form'
import {mapGetters} from 'vuex'
import moment from 'moment'
import anime from 'animejs'
import 'github-markdown-css/github-markdown.css'
export default {
  computed: {
    ...mapGetters([
      'articleItem',
      'articleLoading'
    ]),
    formatTime () {
      return moment(this.articleItem.updatedAt).format('YYYY-MM-DD HH:mm:ss')
    },
    formatCate () {
      if (this.articleItem.category) {
        return this.articleItem.category.cate_name
      }
    }
  },
  methods: {
    submitComment (form) {
      console.log('success')
    }
  },
  created () {
    console.log(Cookies.get())
    const id = this.$route.params.id
    this.$store.dispatch('fetchArticleItem', {id})
  },
  mounted () {
    console.log(anime)
    anime({
      targets: this.$refs.el,
      translateX: 0,
      duration: 600,
      easing: 'easeInOutQuart'
    })
  },
  components: {
    commentForm
  }
}
</script>
<style lang="scss" scoped>
  .article-wrapper {
    overflow: hidden;
    @at-root {
      .article-wrapper__content {
        height: 100%;
        padding: 1rem 3rem;
        box-sizing: border-box;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        @at-root {
          .article-wrapper__html {
            margin-bottom: 30px;
          }
          .article-wrapper__title {
            h2 {
              font-weight: 300;
            }
            text-align: center;
            margin: 1.5rem auto;
            p {
              margin-top: 1rem;
              font-size: 0.6rem;
              span {
                font-size: inherit;
              }
            }
          }
        }
      }
    }
  }
</style>
