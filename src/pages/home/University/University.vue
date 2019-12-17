<template>
  <section class="totality">
    <!--头部-->
    <div class="header">
      <svg @click="go"
           class="icond"
           aria-hidden="true">
        <use xlink:href="#icon-right-copy
"></use>
      </svg>

      <p class="p"><span style="margin-bottom: 8px ">资讯</span><span style="width: 30px;height: 3px;background-color: #222222;margin-left:-30px;"></span></p>
      <p @click="gozixun"
         class="p"><span style="margin-bottom: 8px ">测试</span><span style="width: 30px;height: 3px;background-color: #222222;margin-left:-30px;"></span> </p>

      <svg class="icond"
           aria-hidden="true">
        <use xlink:href="#icon-ceshi
"></use>
      </svg>
    </div>

    <!--轮播图-->
    <Swipe style="margin-top: 60px"
           indicator-color="white">
      <SwipeItem><img style="width: 100%;height: 250px"
             src="./image/05.jpg"
             alt=""></SwipeItem>
      <SwipeItem><img style="width: 100%;height: 250px"
             src="./image/06.jpg"
             alt=""></SwipeItem>
    </Swipe>

    <!--咨询区-->
    <div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">武志红：中国人的情感模式找妈</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/02.jpg"
               alt="">
        </div>

      </div>

      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">选择利益，还是选择“古老的敌意”</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/06.jpg"
               alt="">
        </div>

      </div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">中国男人不服输</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/11.jpg"
               alt="">
        </div>

      </div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">心里专家也会见鬼。这世道奇奇怪怪</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/12.jpg"
               alt="">
        </div>

      </div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">总是彷徨，总是遗忘，爱情还不都这样</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/13.jpg"
               alt="">
        </div>

      </div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">李子璇：我们需要重新定义撒谎</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/14.jpg"
               alt="">
        </div>

      </div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">中上大学教授周心悦访问：为什么钱能够鸭舌</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/15.jpg"
               alt="">
        </div>

      </div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">心理咨询师：没有敌意的专家</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/16.jpg"
               alt="">
        </div>

      </div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">清华大学里的狼狈不堪，你想看看嘛</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/17.jpg"
               alt="">
        </div>

      </div>
      <div @click="gouniversity"
           class="zixun">
        <div class="zixun_tab">
          <h2 style="font-size: 18px;font-weight: 700">妈妈：我已近无能无力了</h2>
          <div>
            <svg class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-xiaoxi
 "></use>
            </svg> <span style="font-size: 12px">2</span>
            <svg style="margin-left: 20px"
                 class="icon"
                 aria-hidden="true">
              <use xlink:href="#icon-dianzan1
"></use>
            </svg><span style="font-size: 12px">24</span>
          </div>

        </div>
        <div>
          <img style="width: 200px;height: 110px"
               src="./image/18.jpg"
               alt="">
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import iconfont3 from '../../../iconfont3/iconfont.js'
import { Swipe, SwipeItem } from 'vant'
export default {
  components: {
    iconfont3,
    Swipe,
    SwipeItem
  },
  methods: {
    gozixun (text) {
      this.$router.push('/text')
    },
    go (home) {
      this.$router.push('home')
    },
    gouniversity () {
      this.$router.push('/home/homepag')
    }
  }
}
</script>
<style lang="stylus" scoped>
.totality
  width 100%
  height 100%
/* 头部 */
.header
  width 100%
  height 100px
  overflow hidden
  position fixed
  top 0
  display flex
  justify-content space-between
  background-color #FFFFFF
  z-index 99
  .p
    display flex
    align-items flex-end
  .icond
    width 2em
    height 2em
    vertical-align -0.15em
    fill currentColor
    overflow hidden
    margin 1em 2em 0 2em
/* 轮播图 */
/* 咨询区 */
.zixun
  width 100%
  display flex
  justify-content space-around
  width 94%
  margin 0 auto
  margin-top 50px
  .zixun_tab
    width 100%
    margin-right 20px
    display flex
    flex-direction column
    justify-content space-between
    .icon
      width 1em
      height 1em
      vertical-align -0.15em
      fill currentColor
      overflow hidden
</style>
