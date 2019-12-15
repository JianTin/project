<template>
  <div>
    <!--课程内部 的 第一个轮播图-->
    <div class="swiper-container"
         id="swiper-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item,index) in bannerList"
             :key="index">
          <img :src="item.imageUrl"
               alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--最新的课程-->
    <div id="newCourse">
      <p class="title">{{newCourse.moduleName}}</p>
      <Course v-for="(course,index) in newCourse.courseList"
              :key="index"
              :course='course' />
    </div>
    <!--名师专题系列-->
    <div id='special'>
      <p class="title">{{special.moduleName}}</p>
      <div class="swiper-container"
           id="swiper-bottom">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(item,index) in special.subjectList"
               :key="index">
            <img :src="item.subjectImg"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <!--本周热门-->
    <div id="hotCourse">
      <p class="title">{{hotCouse.moduleName}}</p>
      <Course v-for="(item,index) in hotCouse.courseList"
              :key="index"
              :course='item'></Course>
    </div>
    <div class="bck"></div>
  </div>
</template>

<script>
// 引入 better-scroll
import { mapState } from 'vuex'
// 轮播图
import Swiper from 'swiper'
// 轮播图的样式
import 'swiper/css/swiper.css'
// 引入课程组件
import Course from '../Course/course'
export default {
  components: { Course },
  mounted () {
    // 判断有没有这个 this.special.moduleName 这个属性如果有就是请求回来了
    // 但是不一定更新到了页面上，所以可以等 下次页面更新完毕再渲染出来
    if (this.special.moduleName) {
      this.$nextTick(() => {
        this.swiperInit()
      })
      // eslint-disable-next-line no-new
    }
  },
  beforeUpdate () {
    // 判断有没有轮播图 ， 没有轮播图 创建一个新的轮播图
    // 并且 this.special.moduleName 这个元素有
    if (!this.swiperBottom && this.special.moduleName) {
      this.$nextTick(() => {
        this.swiperInit()
      })
    }
  },
  methods: {
    // 初始化 swiper
    swiperInit () {
      // 进行赋值 用于 之后的判断
      this.swiperBottom = new Swiper('#swiper-bottom', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        loop: true,
        centeredSlides: true
      })

      this.swiperTop = new Swiper('#swiper-top', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          bulletElement: 'li',
          bulletClass: 'course-bullet',
          bulletActiveClass: 'course-bullet-active'
        }
      })
    }
  },
  computed: {
    ...mapState({
      bannerList: state => state.course.bannerList,
      newCourse: state => state.course.newCourse,
      special: state => state.course.special,
      hotCouse: state => state.course.hotCouse
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../comm/maxi.styl'
.title
  member-font()
#swiper-top
  width 100%
  height 250px
  .swiper-slide
    height 250px
    text-align center
    font-size 18px
    background #fff
    border-radius 10px
    overflow hidden
    display flex
    justify-content center
    align-items center
    img
      width 100%
      height 100%
  .swiper-pagination
    display flex
    justify-content center
    /deep/ .course-bullet
      margin 0 15px
      width 20px
      height 5px
      background #616161
    /deep/ .course-bullet-active
      background white
#newCourse
  margin-top 20px
  background white
  overflow hidden
  p
    margin-top 15px
#special
  margin-top 20px
  overflow hidden
  background white
  .title
    member-font()
    margin-top 20px
  #swiper-bottom
    margin-top 20px
    width 100%
    height 200px
    .swiper-slide
      text-align center
      font-size 18px
      background #fff
      width 80%
      display flex
      justify-content center
      align-items center
      overflow hidden
      img
        width 100%
        height 100%
#hotCourse
  margin-top 20px
  background #fff
  overflow hidden
  .title
    margin-top 20px
.bck
  height 80px
  background white
</style>
