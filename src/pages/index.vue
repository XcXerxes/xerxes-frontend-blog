<template>
  <section class="xcxerxes-wrapper" ref="wrapper">
    <div class="xcxerxes-mask">
    </div>
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="xcxerxes-content" id="xcxerxes-content">
      <h2 class="el" style="transform: translateY(-500px)">每天一点点， 进步多一点 !</h2>
      <h3 class="el" style="transform: translateY(-500px)">一个人最大的幸福， 莫过于他喜欢的事物赐予他的快乐</h3>
      <div class="xcxerxes-content__btn el" style="transform: translateY(-500px)">
        <router-link :to="{name: 'HomeArticle', query: {cate: 'all_001'}}" class="content-btn__home">进入主页</router-link>
        <v-btn round color="info" class="content-btn__github" @click.native="openGithub">
          <i class="ion-social-github index"></i> github
        </v-btn>
       <!--  <el-button >
        </el-button> -->
      </div>
    </div>
  </section>
</template>
<script>
import anime from 'animejs'
import {initHeader, initAnimation, addListeners} from '@/utils/canvas'
export default {
  methods: {
    openGithub () {
      window.open('https://github.com/XcXerxes')
    }
  },
  mounted () {
    setTimeout(() => {
      anime({
        targets: '#xcxerxes-content .el',
        translateY: 0,
        // easing: 'easeInOutQuart',
        loop: false,
        delay: function (el, i, l) {
          return i * 250
        }
      })
    })
    initHeader(this.$refs.wrapper, this.$refs.canvas)
    initAnimation()
    addListeners()
  }
}
</script>
<style lang="scss">
.xcxerxes-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: url('../assets/images/starsky.jpg') no-repeat;
  background-size: cover;
  canvas {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 30;
  }
}
.xcxerxes-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
}

.xcxerxes-content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  padding: 0 2rem;
  z-index: 50;
  box-sizing: border-box;
  h2 {
    color: rgba(243, 255, 255, .95);
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
  h3 {
    color: rgba(233, 255, 255, .95);
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 50px;
  }
  @at-root {
    .xcxerxes-content__btn {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content-btn__home {
      text-decoration: none;
      color: #fff;
      display: flex;
      height: 36px;
      line-height: 36px;
      font-weight: 700;
      background: rgba(239, 98, 73, 0.7);
      padding: 0 60px;
      margin-right: 10px;
      border-radius: 28px;
      &:hover {
        background: rgba(239, 98, 73, 0.9);
      }
    }
  }
  .content-btn__github {
    span {
      display: flex;
      align-items: center;
    }
  }
  .ion-social-github.index {
    font-size: 1.2rem;
    margin-right: 6px;
  }
  .el {
    transform: translateY(-500px);
    
  }
}
</style>


