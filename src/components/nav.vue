<template>
    <div class="xcxerxes-aside">
        <div class="xcxerxes-aside__search">
            <el-input placeholder="关键字" />
        </div>
        <div class="xcxerxes-aside__nav">
            <p>博客导航</p>
            <ul class="xcxerxes-aside__ul">
                <li>
                    <router-link to="/home">首页</router-link>
                </li>
                <li>
                    <router-link to="/book">图书推荐</router-link>
                </li>
                <li>
                    <router-link to="about">关于我</router-link>
                </li>
            </ul>
        </div>
        <div class="xcxerxes-aside__wx">
            <p>官方微信</p>
            <img src="../assets/images/qrcode.jpg" />
        </div>
        <div class="xcxerxes-aside__link">
            <p>友情链接</p>
            <xcxerxes-link-list :data="linkList" />
        </div>
    </div>
</template>
<script>
import xcxerxesLinkList from './link-list'
export default {
  data () {
    return {
      linkList: [
        { title: '百度FEX', url: 'http://fex.baidu.com/' },
        { title: '淘宝FED', url: 'http://taobaofed.org/' },
        { title: '奇舞团', url: 'https://75team.com/' },
        { title: '腾讯 AlloyTeam', url: 'http://www.alloyteam.com/' },
        { title: '凹凸实验室', url: 'https://aotu.io/' },
        { title: 'ISUX', url: 'http://isux.tencent.com/' },
        { title: '携程UED', url: 'https://aotu.io/' }
      ]
    }
  },
  components: {
    xcxerxesLinkList
  }
}
</script>
<style lang="scss" scoped>
.xcxerxes-aside {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 120px;
    background: #020202;
    text-align: center;
    @at-root {
        .xcxerxes-aside__search {
            margin-top: 40px;
        }
        .xcxerxes-aside__nav {
            margin-top: 20px;
            p {
                color: #e43256;
                text-align: left;
            }
            li {
                line-height: 36px;
                a {
                    color: rgba(233, 233, 233, 0.9);
                    &:hover {
                        color: rgba(255, 255, 255, 1);
                    }
                }
            }
        }
        .xcxerxes-aside__wx {
            position: absolute;
            bottom: 275px;
            left: 0;
            right: 0;
            p {
                color: #e43256;
                margin-bottom: 15px;
                text-align: left;
            }
            img {
                width: 80px;
            }
        }
        .xcxerxes-aside__link {
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;
            p {
                color: #e43256;
                margin-bottom: 15px;
                text-align: left;
            }
            a {
                font-size: 0.8rem;
            }
        }
    }
}
</style>
