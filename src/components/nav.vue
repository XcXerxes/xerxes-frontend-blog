<template>
   <!--  <div class="xcxerxes-aside"> -->
        <v-navigation-drawer dark app width="140" disable-resize-watcher :value="drawerIsOpen">
          <v-list class="xcxerxes-aside__link transparent">
            <v-list-tile v-if="!isLogin" class="ml-1">
              <v-list-tile-action>
                  <a href="#" @click.prevent="registHandle">注册</a>
              </v-list-tile-action>    
              <v-list-tile-action>
                  <a href="#"   @click.prevent="dialogLoginVisible = true">登录</a>
              </v-list-tile-action>    
            </v-list-tile>
            <v-list-tile avatar v-else>
                <v-list-tile-avatar :class="userInfo.login_avatar">
                    {{userInfo.login_username | parseUserName}}
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>
                        <v-tooltip bottom>
                        <span slot="activator">{{userInfo.login_username}}</span> 
                        <span>{{userInfo.login_username}}</span>
                        </v-tooltip>
                    </v-list-tile-title>   
                </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider dark></v-divider>
          
          <v-list dense class="xcxerxes-aside__nav">
            <v-subheader class="pa-1">博客导航</v-subheader>
            <v-list-tile>
                <v-list-tile-title>
                    <router-link :to="{name: 'HomeArticle', query: {cate: 'all_001'}}">首页</router-link>
                </v-list-tile-title>
            </v-list-tile>
            <v-list-tile >
                <v-list-tile-title>
                    <router-link to="/book">图书推荐</router-link>
                </v-list-tile-title>
            </v-list-tile>
            <v-list-tile >
                <v-list-tile-title>
                    <router-link to="about">关于我</router-link>
                </v-list-tile-title>
            </v-list-tile>
          </v-list>
          <v-divider dark></v-divider>
          <v-list class="xcxerxes-aside__wx  pb-3">
              <v-subheader class="pa-1">官方微信</v-subheader>
              <v-list-tile>
                <v-list-tile-content>
                    <img src="../assets/images/qrcode.jpg"/>
                </v-list-tile-content>
              </v-list-tile>
          </v-list>
          <v-divider dark></v-divider>
          <xcxerxes-link-list :data="linkList" />
          <v-divider dark></v-divider>
          <v-menu v-model="menuShow" position offset-x :open-on-click="false">
              <v-list dense slot="activator">
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>设置</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-btn flat icon @contextmenu="menuShow" @click.native="isLogin && (menuShow = true)">
                        <v-icon>settings</v-icon>
                    </v-btn>
                </v-list-tile-action>
              </v-list-tile>
          </v-list>
              <v-list dense>
              <v-list-tile>
                <v-list-tile-action>
                    <v-btn flat>
                        修改密码
                    </v-btn>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile>
                  <v-list-tile-action>
                    <v-btn flat>
                        退出登录
                    </v-btn>
                </v-list-tile-action>
              </v-list-tile>
          </v-list>
          </v-menu>
          
            <v-dialog persistent transition="dialog-bottom-transition" title="注册信息" max-width="440px" v-model="dialogRegistVisible"
            >
                <register-form v-on:regist-change="registChange" @close-handle="registClose" :loading="registLoading"></register-form>
            </v-dialog>
            <v-dialog title="登录信息" v-model="dialogLoginVisible" max-width="440px">
                <login-form v-on:login-change="loginChange" @close-handle="loginClose" :loading="loginLoading"></login-form>
            </v-dialog>
        </v-navigation-drawer>
        <!-- <div class="xcxerxes-aside__search">
            <input class="xcxerxes-input aside-search__input" placeholder="关键字" />
            <i class="ion-ios-search"></i>
        </div> -->
        <!-- <div class="xcxerxes-aside__user" v-if="!isLogin">
            <v-btn flat dark @click="registHandle">注册</v-btn>
            <v-dialog persistent transition="dialog-bottom-transition" title="注册信息" max-width="440px" v-model="dialogRegistVisible"
             >
                <register-form v-on:regist-change="registChange" @close-handle="registClose" :loading="registLoading"></register-form>
            </v-dialog>
            <v-btn dark flat @click="dialogLoginVisible = true">登录</v-btn>
            <v-dialog title="登录信息" v-model="dialogLoginVisible" max-width="440px">
                <login-form v-on:login-change="loginChange" @close-handle="loginClose" :loading="loginLoading"></login-form>
            </v-dialog>
        </div>
        <div class="xcxerxes-aside__login" v-else>
            <v-list dark @click="" class="transparent">
              <v-list-tile avatar >
                <v-list-tile-avatar :class="userInfo.login_avatar">
                    {{userInfo.login_username | parseUserName}}
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{userInfo.login_username}}</v-list-tile-title>   
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider dark></v-divider>
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
        </div> -->
    <!-- </div> -->
</template>
<script>
import mixins from '@/mixins'
import xcxerxesLinkList from './link-list'
import api from '@/api'
import registerForm from './register-form'
import loginForm from './login-form'
import {mapGetters} from 'vuex'
export default {
  mixins: [mixins],
  data () {
    return {
      registLoading: false,
      loginLoading: false,
      dialogRegistVisible: false,
      dialogLoginVisible: false,
      menuShow: false,
      linkList: [
        { title: '百度FEX', url: 'http://fex.baidu.com/' },
        { title: '淘宝FED', url: 'http://taobaofed.org/' },
        { title: '奇舞团', url: 'https://75team.com/' },
        { title: '腾讯 AlloyTeam', url: 'http://www.alloyteam.com/' },
        { title: '凹凸实验室', url: 'https://aotu.io/' },
        { title: 'ISUX', url: 'http://isux.tencent.com/' },
        { title: '携程UED', url: 'https://aotu.io/' }
      ],
      isLogin: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'drawerIsOpen'
    ])
  },
  methods: {
    loginClose () {
      this.dialogLoginVisible = false
    },
    registClose () {
      console.log('close')
      this.dialogRegistVisible = false
    },
    registHandle () {
      this.dialogRegistVisible = true
    },
    loginChange (loginForm) {
      this.loginLoading = true
      api.login(loginForm).then(data => {
        this.loginLoading = false
        if (data.code === 200) {
          this.dialogLoginVisible = false
          this.isLogin = true
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          this.$store.commit('user_info_receive')
        }
      }).catch(err => {
        this.loginLoading = false
        console.log(err)
      })
    },
    registChange (registForm, el) {
      this.registLoading = true
      api.register(registForm).then(data => {
        this.registLoading = false
        if (data.code === 200) {
          this.dialogRegistVisible = false
          el.reset()
        }
      }).catch(err => {
        this.registLoading = false
        console.error(err)
      })
    }
  },
  created () {
    this.$store.commit('user_info_receive')
    if (this.$store.getters.userInfo.login_username) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  components: {
    xcxerxesLinkList,
    registerForm,
    loginForm
  }
}
</script>
<style lang="scss">
.xcxerxes-aside__wx {
    .list__tile {
        height: 80px;
    }
    .subheader {
        color: #e43256;
    }
    img {
        width: 80px;
    }
}
.xcxerxes-aside__nav {
    .subheader {
        color: #e43256;
    }
    li {
        a {
            font-size: 12px;
            color: rgba(233, 233, 233, .9);
            &:hover {
                color: rgba(255, 255, 255, 1);
            }
        }
    }
}
        
.xcxerxes-aside__link {
    .subheader {
        color: #e43256;
    }
    a {
        font-size: 12px;
        color: rgba(233, 233, 233, .9);
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
}
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
                // color: #fff;
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
        
    }
}
</style>
