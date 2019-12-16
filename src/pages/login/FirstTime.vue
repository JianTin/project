<template>
  <div id="outer">
    <div class="xxx"
         @click="$router.back()">❌</div>
    <h1>欢迎回来<img src="./images/xinzhoukan-logo.png"
           alt=""></h1>
    <form>
      <input type="phone"
             name="phone"
             placeholder="请输入手机号"
             v-model="phone">
      <input type="password"
             name="pwd"
             placeholder="请输入密码"
             v-model="pwd">
      <!-- <span class="iconfont icon-open-eye"></span> -->
      <div>忘记了?找回密码</div>
      <i disabled
         class="forstTime-login"
         @click="login">登录</i>
    </form>
    <div class="login-third">——————— 使用第三方账号登录 ———————</div>
    <div class="login-wx"><img src="./images/wx-logo.png"
           alt=""></div>
  </div>
</template>
<script>
import { createUser } from '../../api'
export default {
  data () {
    return {
      phone: '',
      pwd: ''
    }
  },
  methods: {
    async login () {
      const { phone, pwd } = this
      // 保存用户信息到vuex
      // 创建用户请求
      await createUser(phone, pwd)
      this.$store.dispatch('gotoLogin', { phone, pwd })
      // 登录请求
      // const result = await getLogin(phone, pwd)
      // 登录成功进行跳转
      this.$router.push('/personal')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#outer
  width 100%
  height 100%
  background-color #fff
  position absolute
  top 0
  display flex
  flex-direction column
  padding 40px 50px
  .xxx
    color #000
    margin 40px 0
  h1
    font-size 28px
    img
      vertical-align middle
      margin-bottom 8px
  form
    width 100%
    input
      width 100%
      height 80px
      margin 50px 0
      border none
      border-bottom 1px solid #D6E0F9
    div
      font-size 12px
      position absolute
      right 50px
      bottom 53%
    .forstTime-login
      display block
      width 100%
      height 80px
      line-height 80px
      background-color #D6E0F9
      color #3d3d3d
      text-align center
      border-radius 30px
      margin 40px 0 380px 0
  .login-third
    font-size 12px
    color #D6E0F9
  .login-wx
    margin 30px auto
</style>
