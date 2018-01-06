<template>
  <v-layout wrap>
    <v-card style="width: 100%">
      <v-card-title>
        <span class="headline">注册用户</span>
      </v-card-title>
      <v-card-text>
        <v-form style="width: 100%">
          <v-flex xs12>
            <v-text-field label="用户名" prepend-icon="account_box" v-model="username"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="密码" prepend-icon="lock_outline" v-model="password"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="邮箱" prepend-icon="email" v-model="xc_email"></v-text-field>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs5 offset-xs1>
              <v-btn color="info">重置</v-btn>
            </v-flex>
            <v-flex xs5>
              <v-btn color="primary" @click="submitForm">确定</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
</v-layout>
  <!-- <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-col :md="20" :xs="22">
        <el-input size="small" placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-col :md="20" :xs="22">
        <el-input size="small" placeholder="密码" type="password" v-model="ruleForm.password"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="邮箱" prop="xc_email">
      <el-col :md="20" :xs="22">
        <el-input size="small" placeholder="邮箱" v-model="ruleForm.xc_email"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="验证码" required>
      <div class="ln">
			  <div id="dom_id"></div>
		  </div>
      <input type='hidden' :value='csessionid' name='csessionid'/>
      <input type='hidden' :value='sig' name='sig'/>
      <input type='hidden' :value='token' name='token'/>
      <input type='hidden' :value='scene' name='scene'/>
    </el-form-item>
    <el-form-item>
      <el-button :style="{width: '100%'}" type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
    </el-form-item>
  </el-form> -->
</template>
<script>
import api from '@/api'
export default {
  data () {
    var checkUserName = (rule, value, callback) => {
      if (value) {
        api.checkUserName({username: value}).then(data => {
          if (data.code === 200) {
            callback(new Error('用户名已存在'))
          }
        }).catch(err => {
          callback(new Error(err))
        })
      }
    }
    return {
      username: '',
      password: '',
      xc_email: '',
      vis: true,
      ruleForm: {
        username: '',
        password: '',
        xc_email: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {validator: checkUserName, trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 8, max: 16, message: '最少要8位', trigger: 'blur'}
        ],
        xc_email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'},
          {type: 'email', message: '请输入正确格式', trigger: 'blur'}
        ]
      },
      csessionid: '',
      sig: '',
      token: '',
      scene: ''
    }
  },
  computed: {
    registerForm () {
      const {username, password, xc_email} = this
      return {
        username,
        password,
        xc_email
      }
    }
  },
  mounted () {
    /* eslint-disable no-undef */
    /* eslint-disable new-cap */
    // const nc = new noCaptcha()
    // // 应用标识,不可更改
    // const ncAppkey = 'CF_APP_1'
    // const ncScene = 'register'
    // const ncToken = [ncAppkey, (new Date()).getTime(), Math.random()].join(':')
    // const ncOption = {
    //   // 渲染到该DOM ID指定的Div位置
    //   renderTo: '#dom_id',
    //   appkey: ncAppkey,
    //   scene: ncScene,
    //   token: ncToken,
    //   // 测试用，特殊nc_appkey时才生效，正式上线时请务必要删除；code0:通过;code100:点击验证码;code200:图形验证码;code300:恶意请求拦截处理
    //   trans: '{"name1":"code100"}',
    //   callback: (data) => {
    //     console.log(data.csessionid)
    //     console.log(data.sig)
    //     console.log(ncToken)
    //     this.csessionid = data.csessionid
    //     this.sig = data.sig
    //     this.token = ncToken
    //     this.scene = ncScene
    //   }
    // }
    // nc.init(ncOption)
  },
  methods: {
    submitForm () {
      this.$emit('regist-change', this.registerForm)
    }
  }
}
</script>

