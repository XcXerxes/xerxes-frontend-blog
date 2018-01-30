<template>
  <v-form class="comment" ref="commentForm" @submit.prevent="submitForm">
    <v-layout column>
      <v-flex xs12 sm6 lg4>
        <v-text-field multi-line solo placeholder="请输入评论" v-model="content" @keyup.native.13="submitForm"></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 lg1 offset-lg3>
        <v-btn color="success" style="width: 100%; margin-left: 0" type="submit">提交</v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      content: '',
      isHint: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    checkStatus () {
      if (!this.userInfo.login_userid) {
        return {text: '请先登录'}
      }
      if (!this.content) {
        return {text: '请输入内容'}
      }
      return false
    },
    submitForm (formName) {
      const self = this
      if (!this.checkStatus()) {
        this.$emit('comment-submit', this.commentForm)
      } else {
        if (!this.isHint) {
          this.isHint = true
          this.$noty({
            text: this.checkStatus().text,
            type: 'error',
            callbacks: {
              onClose: function () {
                self.isHint = false
              }
            }
          }).show()
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .comment-item {
    @media screen and (min-width: 992px) {
      margin-left: 48%;
    }
  }
</style>


