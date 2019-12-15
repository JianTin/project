<template>
  <div id="outer">
    <header>
      <span class="iconfont  icon-right-copy"
            @click="$router.back()"></span>
      <div id="tabs"
           ref='tabs'>
        <p class="active"
           @click="goTo(0,$event)">课程</p>
        <p @click="goTo(1,$event)">读物</p>
      </div>
    </header>
    <div class="swiper-container"
         id="outer-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             id="swiper-scroll-left"
             style="background:#f5f5f5">
          <CourseList />
        </div>
        <div class="swiper-slide"
             style="background:#f5f5f5 "
             id="swiper-scroll-right">
          <ReadList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 滚动
import BScroll from 'better-scroll'
// 轮播图
import Swiper from 'swiper'
// 轮播图的样式
import 'swiper/css/swiper.css'
import CourseList from '../../../components/CourseList/CourseList'
import ReadList from '../../../components/readList/readList'
export default {
  components: { CourseList, ReadList },
  created () {
    this.$store.dispatch('actionGetCourse')
    this.$store.dispatch('actionGetReads')
  },
  mounted () {
    // eslint-disable-next-line no-new
    this.swiper = new Swiper('#outer-swiper', {
      resistanceRatio: 0.6,
      on: {
        slideChangeTransitionStart: () => {
          this.goTo(this.swiper.activeIndex, this.$refs.tabs.children[this.swiper.activeIndex])
        }
      }
    })
    // 等待子级渲染完毕 再进行 new Scroll
    this.$nextTick(() => {
      // eslint-disable-next-line no-new
      this.scrollLeft = new BScroll('#swiper-scroll-left')
      this.scrollRight = new BScroll('#swiper-scroll-right')
      console.log(this.scrollRight)
    })
  },
  updated () {
    // 每次页面渲染完毕 那么对 scroll 进行一个重新的更新
    this.scrollLeft.refresh()
    this.scrollRight.refresh()
  },
  methods: {
    goTo (index, event) {
      let node = event.nodeName === 'P' ? event : event.target
      Array.from(this.$refs.tabs.children).forEach((item) => {
        item.classList.remove('active')
      })
      node.classList.add('active')
      this.swiper.slideTo(index, 300)
    }
  },
  computed: {
    ...mapState({
      special: state => state.course.special
    })
  }
}
</script>

<style lang="stylus" scoped>
#outer
  width 100%
  height 100%
  header
    display flex
    flex-shrink 0
    height 70px
    width 100%
    background white
    height 7%
    span
      text-align center
      display flex
      align-items center
      justify-content center
      width 10%
      color #C0C0C0
    #tabs
      text-align center
      line-height 70px
      width 90%
      margin-left -20px
      font-size 16px
      display flex
      flex-shrink 1
      justify-content space-around
      p
        text-align center
        display flex
        align-items center
        &:nth-child(1)
          margin-left 80px
        &:nth-child(2)
          margin-right 80px
        &.active
          font-weight 600
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      .swiper-slide
        overflow hidden
        font-size 18px
        background #fff
</style>
