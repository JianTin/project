<template>
  <div class="container">
    <header class="header">
      <div class="header-item">
        <span class="iconfont icon-right-copy"></span>
        <p>确认订单</p>
      </div>
      <div class="confirm">
        <p>请先添加收货地址</p>
        <span class="iconfont icon-icon1"></span>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  nam: 'order'
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  width 100%
  height 100%
  .header
    width 100%
    .header-item
      text-align center
      display flex
      span
        margin-top 5px
      p
        margin-left 260px
</style>