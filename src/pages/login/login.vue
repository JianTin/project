<template>
  <div>
    <div class="login">
      <div class="login-bj"><img src="./images/xinzhoukan-bj.png" alt=""></div>
      <div class="login-text">立即登录,享受更多有趣功能</div>
      <div class="login-login" @click="$router.push('/login/firsttime')">登录</div>
      <div class="login-register">注册</div>
      <div class="login-tourist">游客模式</div>
      <div class="login-third">———————— 使用第三方账号登录 ————————</div>
      <div class="login-wx"><img src="./images/wx-logo.png" alt=""></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  /*  beforeRouteEnter (to, form, next) {
    console.log(to)
    console.log(form)
  } */
}
</script>

<style lang="stylus" scoped>
.login
  width 100%
  height 100%
  display flex
  flex-direction column
  align-items center
  .login-bj
    width 100%
  .login-text
    color #5D9DFE
    font-size 14px
    margin 25px 0
  .login-login
    height 80px
    line-height 80px
    width 70%
    border-radius 30px
    background-color #5D9DFE
    color #fff
    text-align center
    margin 30px 0
  .login-register
    height 80px
    line-height 80px
    width 70%
    border-radius 30px
    background-color #D6E0F9
    color #5D9DFE
    text-align center
    margin 30px 0
  .login-tourist
    color #D6E0F9
    font-size 12px
    margin 50px 0
  .login-third
    color #D6E0F9
    font-size 12px
    margin 80px 0 50px 0
</style>
