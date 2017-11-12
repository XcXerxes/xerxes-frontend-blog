<template>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-col :md="20" :xs="22">
        <el-input placeholder="用户名/邮箱" v-model="loginForm.username"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-col :md="20" :xs="22">
        <el-input type="password" placeholder="用户名/邮箱" v-model="loginForm.password"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-col :md="16" :xs="22" :offset="4">
        <el-button type="primary" :style="{width: '100%'}" @click="loginSubmit('loginForm')">登录</el-button>
      </el-col>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名/邮箱', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    loginSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit success')
          this.$emit('login-change', this.loginForm)
        }
      })
    }
  }
}
</script>

