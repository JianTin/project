<template>
  <div id="outer">
    <p class="title">会员专享免费专区</p>
    <!--年卡会员-->
    <transition name="fade">
      <div class="swiper-container"
           id="Free-swiper-black"
           v-show="level">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="blackBook"
                 alt="">
          </div>
          <div class="swiper-slide">
            <img :src="blackRead"
                 alt="">
          </div>
          <div class="swiper-slide">
            <img :src="blackList"
                 alt="">
          </div>

        </div>
      </div>
    </transition>
    <!--月卡会员-->
    <transition name="fade">
      <div class="swiper-container"
           id="Free-swiper-beige"
           v-show="!level">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="beigeBook"
                 alt="">
          </div>
          <div class="swiper-slide">
            <img :src="beigeRead"
                 alt="">
          </div>
          <div class="swiper-slide">
            <img :src="beigeList"
                 alt="">
          </div>

        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Swiper from 'swiper'
// 轮播图的样式
import 'swiper/css/swiper.css'
// 引入 权益组件
// 引入 黑色系列的 图片
import blackBook from './image/5.jpg'
import blackRead from './image/3.jpg'
import blackList from './image/4.jpg'
// 米黄系列 的 图片
import beigeBook from './image/8.jpg'
import beigeRead from './image/7.jpg'
import beigeList from './image/6.jpg'
export default {
  props: {
    level: Boolean
  },
  data () {
    return {
      blackBook,
      blackRead,
      blackList,
      beigeBook,
      beigeRead,
      beigeList
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('#Free-swiper-black', {
      centeredSlides: true, // active slide会居中，而不是默认状态下的居左。
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      observer: true
    })
    // eslint-disable-next-line no-new
    new Swiper('#Free-swiper-beige', {
      centeredSlides: true, // active slide会居中，而不是默认状态下的居左。
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      observer: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../comm/maxi.styl'
.fade-enter-active, .fade-leave-active
  transition opacity 0.5s
.fade-enter, .fade-leave-to
  opacity 0
.title
  member-font()
#outer
  position relative
  // 父级设置 min-height 高度
  min-height 300px
.swiper-container
  // 绝对定位后没有高度
  position absolute
  left 0
  top 50px
  height 200px
  margin-top 30px
  .swiper-slide
    width 75%
    height 88%
    display flex
    justify-content center
    align-items center
    img
      width 100%
      height 100%
</style>
