<template>
  <div>
    login: 登录
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, form, next) {
    console.log(to)
    console.log(form)
  }
}
</script>

<style lang="stylus" scoped>

</style>
