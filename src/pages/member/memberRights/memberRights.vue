<template>
  <div id="outer">
    <header>
      <span class="iconfont  icon-right-copy"
            @click="$router.back()"></span>
      <p>会员权益</p>
    </header>
    <!--tab切换-->
    <div class="tabs-outer">
      <div id="tabs"
           ref='list'>
        <!-- <li v-for="(item,index) in mooth" :key="index">
          {{}}
        </li> -->
        <div v-for="(item,index) in month"
             :key="index"
             @click="goTo(index,$event)"
             class="tab">
          <p>{{item.title}}</p>
        </div>
        <p id="active-bottom"
           ref='activeBottom'></p>
      </div>
    </div>
    <!--会员详情-->
    <!--月费会员-->
    <div class="swiper-container"
         id="swiper-month">
      <div class="swiper-wrapper">
        <!--根据路由传递的 true / false ， 渲染不同的 数据-->
        <div class="swiper-slide"
             v-for="(item,index) in  this.$route.query.lever? year : month"
             :key="index">
          <div class="Img">
            <img :src="item.imageUrl"
                 :alt="item.title">
            <div class="Img-title">
              <h3 :class="item.isInvalid === 0 ? 'active' : '' ">{{item.title}}</h3>
              <p :class="item.isInvalid === 0 ? 'active' : '' ">{{item.subtitle}}</p>
            </div>
          </div>
          <div class="text">
            <h3 class="text-title">权益详情</h3>
            <p>{{item.content}}</p>
            <p>{{item.isInvalid}}</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <!--轮播图-->
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  mounted () {
    // 下次 DOM 更新在渲染
    this.$nextTick(() => {
      this.scroll = new BScroll('.tabs-outer', {
        scrollX: true,
        click: true
      })
      //
      // eslint-disable-next-line no-new
      //  mounth
      this.detailsswiper = new Swiper('#swiper-month', {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'bullet',
          bulletActiveClass: 'bullet-active'
        },
        observer: true,
        on: {
          slideChangeTransitionStart: () => {
            let node = this.$refs.list.children[this.detailsswiper.activeIndex].children[0]
            this.scroll.scrollToElement(node, 300, true)
            this.goTo(this.detailsswiper.activeIndex, node)
          }
        }
      })
      // 初始化
      this.init(this.$route.query.index)
    })
  },
  computed: {
    ...mapState({
      month: state => state.member.month,
      year: state => state.member.year
    })
  },
  methods: {
    goTo (index, event) {
      let eventNode = event.nodeName === 'P' ? event : event.target
      // 去除所有 li的 target
      Array.from(this.$refs.list.children).forEach((item) => {
        if (item.nodeName === 'DIV') {
          item.children[0].classList.remove('active')
        }
      })
      // 添加 active
      eventNode.classList.add('active')
      // 让下标进行走动
      this.$refs.activeBottom.style.left = eventNode.offsetLeft + 9 + 'px'
      // 滚动到指定的 元素位置 并且把他呈现到中心
      this.scroll.scrollToElement(eventNode, 300, true)

      //  滚动轮播图
      // 判断如果传递进来的 index  不等于 轮播图的 index
      // 那么 轮播图移动
      if (this.detailsswiper.activeIndex !== index) {
        this.detailsswiper.slideToLoop(index, 1000, true)
      }
    },
    // 初始化
    init (index) {
      let nodeName = this.$refs.list.children[index].children[0]
      this.$refs.activeBottom.style.left = nodeName.offsetLeft + 9 + 'px'
      this.scroll.scrollToElement(nodeName.children[0], 300, true)
      this.detailsswiper.slideToLoop(index, 1000, true)
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '../../../comm/maxi.styl'
#outer
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  background white
  z-index 110
  header
    display flex
    height 70px
    width 100%
    background white
    span
      text-align center
      line-height 70px
      width 10%
      color #C0C0C0
    p
      text-align center
      line-height 70px
      width 90%
      margin-left -20px
      font-weight 600
      font-size 16px
  .tabs-outer
    margin-top 20px
    width 100%
    height 60px
    overflow hidden
    position relative
    #tabs
      display flex
      width 1400px
      height 100%
      .tab
        width 115px
        height 100%
        text-align center
        line-height 60px
        margin 0 20px
        transition all 0.3s
        p
          font-size 10px
          font-font-weight 200
          &.active
            font-size 11px
            font-weight 600
      #active-bottom
        transition all 0.3s
        position absolute
        left 35px
        bottom 0
        width 80px
        border-radius 20px
        height 6px
        background linear-gradient(90deg, #ffe0b2, #bcaaa4)
.swiper-container
  width 100%
  height 80%
  background #eeee
  .swiper-wrapper
    margin-top 50px
  .swiper-slide
    border-radius 20px
    background #fff
    height 600px
    transition 300ms
    transform scale(0.7)
    overflow hidden
    .Img
      position relative
      img
        height 150px
      .Img-title
        position absolute
        top 0
        left 20px
        color #F9996E
        font-weight 200
        margin-top 20px
        h3
          font-size 14px
          line-height 50px
          &.active
            color #757575
        p
          font-size 8px
          &.active
            color #757575
    .text
      padding 20px
      h3
        letter-spacing 3px
        color black
        font-size 11px
        font-weight 600
        color black
      p
        line-height 30px
        margin-top 10px
        font-size 6px
  .swiper-slide-active, .swiper-slide-duplicate-active
    transform scaleX(1.3) scaleY(1)
/deep/ .bullet
  width 22px
  height 8px
  margin 0 8px
  display inline-block
  background #d2dae2
/deep/ .bullet-active
  background #ffe0b2
</style>
