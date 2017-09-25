<template>
  <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-col :md="20" :xs="22">
        <el-input placeholder="请输入用户名" v-model="ruleForm.username"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-col :md="20" :xs="22">
        <el-input placeholder="密码" type="password" v-model="ruleForm.password"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="邮箱" prop="xc_email">
      <el-col :md="20" :xs="22">
        <el-input placeholder="邮箱" v-model="ruleForm.xc_email"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="验证码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button :style="{width: '100%'}" type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
    </el-form-item>
  </el-form>
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
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit success')
          this.$emit('regist-change', this.ruleForm)
        }
      })
    }
  }
}
</script>

