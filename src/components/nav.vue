<template>
    <div class="xcxerxes-aside">
        <div class="xcxerxes-aside__search">
            <input class="xcxerxes-input aside-search__input" placeholder="关键字" />
            <i class="ion-ios-search"></i>
        </div>
        <div class="xcxerxes-aside__user" v-if="!isLogin">
            <el-button class="aside-user__regist" type="text" @click="registHandle">注册</el-button>
            <el-dialog title="注册信息" :visible.sync="dialogRegistVisible">
                <register-form v-on:regist-change="registChange"></register-form>
            </el-dialog>
            <el-button class="aside-user__login" type="text" @click="dialogLoginVisible = true">登录</el-button>
            <el-dialog title="登录信息" :visible.sync="dialogLoginVisible">
                <login-form v-on:login-change="loginChange"></login-form>
            </el-dialog>
        </div>
        <div class="xcxerxes-aside__login" v-else>
            <span style="color: #fff;">{{username}}</span>
        </div>
        <div class="xcxerxes-aside__nav">
            <p>博客导航</p>
            <ul class="xcxerxes-aside__ul">
                <li>
                    <router-link :to="{name: 'HomeArticle', query: {cate: 'all_001'}}">首页</router-link>
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
import api from '@/api'
import registerForm from './register-form'
import loginForm from './login-form'
import store2 from 'store2'
export default {
  data () {
    return {
      dialogRegistVisible: false,
      dialogLoginVisible: false,
      linkList: [
        { title: '百度FEX', url: 'http://fex.baidu.com/' },
        { title: '淘宝FED', url: 'http://taobaofed.org/' },
        { title: '奇舞团', url: 'https://75team.com/' },
        { title: '腾讯 AlloyTeam', url: 'http://www.alloyteam.com/' },
        { title: '凹凸实验室', url: 'https://aotu.io/' },
        { title: 'ISUX', url: 'http://isux.tencent.com/' },
        { title: '携程UED', url: 'https://aotu.io/' }
      ],
      username: '',
      isLogin: false
    }
  },
  methods: {
    registHandle () {
      this.dialogRegistVisible = true
    },
    loginChange (loginForm) {
      console.log(loginForm)
      api.login(loginForm).then(data => {
        console.log(data)
        if (data.code === 200) {
          this.dialogLoginVisible = false
          this.isLogin = true
          this.username = loginForm.username
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          store2.set('user_name', this.username)
        }
        console.log(document.cookie)
      }).catch(err => {
        debugger
        console.log(err)
      })
    },
    registChange (registForm) {
      console.log(registForm)
      api.register(registForm).then(data => {

      }).catch(err => {
        console.error(err)
      })
    }
  },
  created () {
    if (store2.get('user_name')) {
      this.username = store2.get('user_name')
      this.isLogin = true
    }
  },
  components: {
    xcxerxesLinkList,
    registerForm,
    loginForm
  }
}
</script>
<style lang="scss" scoped>
.xcxerxes-aside {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 1rem 0.25rem;
    width: 140px;
    box-sizing: border-box;
    background: #020202;
    text-align: center;
    @at-root {
        .xcxerxes-aside__user {
            margin-top: 15px;
            @at-root {
                .aside-user__regist,
                .aside-user__login
                 {
                     color: rgba(233, 233, 233, 0.9);
                }
                &:hover {
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
        .xcxerxes-aside__search {
            margin-top: 40px;
            position: relative;
            display: flex;
            align-items: center;
            i {
                position: absolute;
                right: 2px;
                color: #fff;
                top: 0;
                cursor: pointer;
            }
            @at-root {
                .aside-search__input {
                    padding-left: 5px;
                    box-sizing: border-box;
                    color: #fff;
                }
            }
        }
        .xcxerxes-aside__nav {
            margin-top: 60px;
            p {
                color: #e43256;
                text-align: left;
                margin-bottom: 10px;
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
                margin: 0 0 15px 5px;
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
                margin: 0 0 15px 5px;
                text-align: left;
            }
            a {
                font-size: 0.8rem;
            }
        }
    }
}
</style>
