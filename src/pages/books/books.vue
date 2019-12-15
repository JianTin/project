<template>
  <div id="outer">
    <header>
      <ul id="tabs"
          ref='tabs'>
        <li v-for="(item,index) in tabsList"
            :key="index"
            @click="goTo($event,index)">{{item}}</li>
      </ul>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <bookTab :text='swiperTab[0]' />
          <div class="back">
            <Magazine />
          </div>
        </div>
        <div class="swiper-slide">
          <bookTab :text='swiperTab[1]' />
          <div class="back">
          </div>
        </div>
        <div class="swiper-slide">
          <bookTab :text='swiperTab[2]' />
          <div class="back">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 轮播图
import Swiper from 'swiper'
// 轮播图的样式
import 'swiper/css/swiper.css'
// 引入 book的最近 / 已购 的切换tab
import bookTab from '../../components/bookTab/bookTab'
// 引入 杂志
import Magazine from '../../components/Magazine/Magazine'
// 引入课程
import Course from '../../components/Course/course'
export default {
  components: { bookTab, Magazine, Course },
  data () {
    return {
      tabsList: ['杂志', '读物', '课程'],
      swiperTab: [
        ['在读', '杂志'],
        ['在听', '读物'],
        ['在听', '课程']
      ]
    }
  },
  mounted () {
    this.initSelectTab()
    // eslint-disable-next-line no-new
    this.bookSwiper = new Swiper('.swiper-container', {
      on: {
        slideChangeTransitionStart: () => {
          let index = this.bookSwiper.activeIndex
          let node = this.$refs.tabs.children[index]
          this.goTo(node, this.bookSwiper.activeIndex)
        }
      }
    })
  },
  methods: {
    // 初始化选中
    initSelectTab () {
      this.$refs.tabs.children[0].classList.add('active')
    },
    goTo (event, index) {
      // 判断传入的 是 event对象 还是 一个标签
      let eventNode = event.nodeName === 'LI' ? event : event.target
      // 去除选中样式
      Array.from(this.$refs.tabs.children).forEach((item) => {
        item.classList.remove('active')
      })
      eventNode.classList.add('active')
      // 滚动
      this.bookSwiper.slideTo(index, 300)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../comm/maxi.styl'
#outer
  width 100%
  height 100%
  header
    height 80px
    display flex
    justify-content center
    #tabs
      width 50%
      display flex
      justify-content space-between
      li
        height 100%
        text-align center
        height 80px
        line-height 80px
        box-sizing border-box
        &.active
          font-weight 600
          border-bottom 4px solid black
          line-height 70px
  .swiper-container
    width 100%
    height 100%
    .swiper-slide
      background $white
      .back
        height 100%
        background white
</style>
