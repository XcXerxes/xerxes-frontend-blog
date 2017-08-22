<template>
  <section class="xcxerxes-wrapper">
    <div class="xcxerxes-video">
      <div class="xcxerxes-video__mask"></div>
      <video id="VidageVideo" class="Vidage__video" preload="metadata" loop autoplay muted>
        <source src="http://ui.specbee.com/sample/bird.mp4" type="video/mp4">
      </video>
    </div>
    <div class="xcxerxes-content" id="xcxerxes-content">
      <h2 class="el" style="transform: translateY(-500px)">每天一点点， 进步多一点 !</h2>
      <h3 class="el" style="transform: translateY(-500px)">一个人最大的幸福， 莫过于他喜欢的事物赐予他的快乐</h3>
      <div class="xcxerxes-content__btn el" style="transform: translateY(-500px)">
        <router-link to="/home" class="content-btn__home">进入主页</router-link>
        <el-button class="content-btn__github" @click.native="openGithub">
          <i class="ion-social-github index"></i> github
        </el-button>
      </div>
    </div>
  </section>
</template>
<script>
import Vidage from 'vidage'
import anime from 'animejs'
export default {
  methods: {
    openGithub () {
      window.open('https://github.com/XcXerxes')
    }
  },
  mounted () {
    debugger
    const videos = new Vidage('#VidageVideo', ['', '.Vidage__video'])
    console.log(videos)
    console.log(anime)
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
  }
}
</script>
<style lang="scss">
.xcxerxes-wrapper {}

.xcxerxes-video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}

.xcxerxes-content {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  h2 {
    color: rgba(243, 255, 255, .95);
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 2px;
  }
  h3 {
    color: rgba(233, 255, 255, .95);
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 2px;
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
      background: rgba(239, 98, 73, 0.7);
      padding: 13px 30px;
      margin-right: 10%;
      border-radius: 4px;
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


