<template>
  <v-layout wrap>
    <v-card style="width: 100%">
        <v-toolbar color="black" dark dense>
         <v-toolbar-title>用户登录</v-toolbar-title>
         <v-spacer></v-spacer>
          <v-btn icon @click.native="closeModal">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
      <v-card-title>
      </v-card-title>
      <v-card-text>
        <v-form style="width: 100%" v-model="valid" ref="form">
          <v-flex xs12>
            <v-text-field label="用户名" prepend-icon="account_box"
            required :rules="usernameRule"
             v-model="username"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="密码" prepend-icon="lock_outline"
            required :rules="passwordRule"
            :append-icon="eye ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => eye = !eye"
            :type="eye ? 'text' : 'password'"
             v-model="password"></v-text-field>
          </v-flex>
          <v-layout justify-center align-center>
            <v-btn color="info" @click="reset">重置</v-btn>
            <v-btn color="primary" :loading="loading" :disabled="!valid" @click="submitForm">确定</v-btn>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
</v-layout>
</template>
<script>
import _ from 'lodash'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      username: '',
      password: '',
      valid: true,
      eye: false,
      usernameRule: [
        v => !!v || '用户名不能为空',
        v => v && v.length >= 3 && v.length <= 15 || '位数必须在3～15位'
      ],
      passwordRule: [
        v => !!v || '密码不能为空',
        v => v && v.length >= 6 && v.length <= 15 || '密码不能为空'
      ]
    }
  },
  computed: {
    loginForm () {
      const {username, password} = this
      return {
        username,
        password
      }
    }
  },
  methods: {
    checkStatus () {
      if (_.size(_.omitBy(this.loginForm, item => !item)) > 0) {
        return true
      }
      return false
    },
    reset () {
      this.$refs.form.reset()
    },
    closeModal () {
      this.reset()
      this.$emit('close-handle')
    },
    submitForm () {
      if (this.$refs.form.validate()) {
        this.$emit('login-change', this.loginForm, this.$refs.form)
      }
    }
  }
}
</script>

