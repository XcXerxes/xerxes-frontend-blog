<template>
  <el-form class="comment" ref="commentForm" :model="commentForm" :rules="rules">
    <el-form-item prop="content"> 
      <el-col :md="18" :sm="22">
        <el-input type="textarea" placeholder="请输入内容" :rows="3" v-model="commentForm.content" />
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-col :md="6" :sm="22"  class="comment-item">
        <el-button type="primary" :style="{width: '100%'}" @click="submitForm('commentForm')">提交</el-button>
      </el-col>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      commentForm: {
        content: ''
      },
      rules: {
        content: [
          {required: true, message: '请输入内容', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!!!!')
          this.$emit('comment-submit', this.commentForm)
        }
      })
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


