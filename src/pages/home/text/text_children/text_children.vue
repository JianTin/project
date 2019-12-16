<template>
  <section class="totality">
    <!--头部-->
      <div class="header">
        <svg @click="go" class="icond" aria-hidden="true">
          <use xlink:href="#icon-right-copy
"></use>
        </svg>
        <p class="p"><span style="margin-bottom: 8px ">人格阴影测试</span>
        </p>
        <span class="p"><span style="margin-bottom: 8px "></span></span>
      </div>
<!--测试须知-->
    <div class="text">
      <div class="text_wen">
        <h2 style="padding-top: 40px; font-weight: 900;">测试须知</h2>
        <div>
          <p>在做题过程中，请注意以下几点：</p>
          <p>1.测试一共37题，请尽量在20分钟内完成，否则数据可能无法保存（右上方有时间进度）</p>
          <p>2.答案没有对错之分，如实作答即可，若遇到难以抉择的问题，请根据敌意感觉作答，你的答案将得到严格保密;</p>
          <p>3.入遇电环，死机等导致测试中断，可到公众号找回，系统将保留你的答题记录</p>
          <button class="text_GO" style="margin-top: 80px">好的，GO!</button>
        </div>
      </div>
    </div>
    <div class="hint">
      <p style="text-align: center">温馨提示</p>
      <p style="text-align: center;margin-top: 10px">可到，“我的测评”查看所有付费测试的订单状态</p>
    </div>
  </section>
</template>
<script>
  export default {
  name: "textChildren",
  methods:{
    go(){
    this.$router.go(-1)
    }
  }
  }
</script>
<style lang="stylus" scoped>
  .totality
    width 100%
    height 100%
    /*头部*/
    .header
      width 100%
      height 100px
      overflow hidden
      position fixed
      top 0
      display flex
      justify-content space-between
      background-color #FFFFFF
      p
        margin-top 30px
        margin-right: 22.28571vw;
      .icond
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin 1em 2em 0 2em
    .text
      width 80%
      height 900px
      margin 0 auto
      margin-top 140px
      border-radius 10px
      border 1px solid #c5c4c2
      .text_wen
        width 80%
        text-align center
        margin 0 auto
        p
          margin-top 40px
          font-size 14px
        .text_GO
          height 60px
          width 70%
          background-color yellow
          border-radius 10px
    .hint
      width 80%
      margin 0 auto
      margin-top 60px
      p
        font-size 12px
</style>
