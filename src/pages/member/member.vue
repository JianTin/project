<template>
  <div style="height: 100%">
    <router-view />
    <header class="member-Header-font">会员</header>
    <div class="scrollOuter"
         ref="scrollOuter"
         style="height: 100%">
      <div id='outer'>
        <!--轮播图-->
        <div class="swiper-container"
             id="member-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div id="swiper-left">
                <img src="./image/1.jpg"
                     alt="">
              </div>
            </div>
            <div class="swiper-slide">
              <div id="swiper-right">
                <img src="./image/2.jpg"
                     alt="">
              </div>
            </div>
          </div>
        </div>
        <!--外围的分页器-->
        <div class="swiper-pagination"
             id="member-swiper-pagination"></div>
        <!--会员的权益-->
        <Rights :level='level' />
        <Free :level='level' />
        <!--会员折扣课程-->
        <div id="Discount">
          <p class="title">会员专享折扣专区</p>
          <Course v-for="(item,index) in course"
                  :key="index"
                  :course='item' />
        </div>
        <!--会员活动区域-->
        <div id="activities">
          <p class="title">会员活动</p>
          <div class="swiper-container"
               id="swiper-activities">
            <div class="swiper-wrapper">
              <div class="swiper-slide"
                   v-for="(img,index) in activities"
                   :key="index">
                <img :src="img.imageUrl"
                     :alt="img.title"></div>
            </div>
          </div>
        </div>
        <div id="preferential">
          <p class="title">会员可享优惠</p>
          <ul>
            <li v-for="(item,index) in preList"
                :key="index">
              <div class="preLeft">
                <h3>{{item.title}}</h3>
                <p>{{item.describe}}</p>
              </div>
              <div class="preRight">{{item.price}}</div>
            </li>
          </ul>
        </div>
        <div id="illustrate">
          <p>会员使用说明</p>
          <ul>
            <li v-for="(item,index) in illustrateList"
                :key="index">
              <p>{{index+1}}.</p>
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
        <div class="bck"></div>
      </div>
    </div>
  </div>
</template>

<script>
// vuex 的 mapState
import { mapState } from 'vuex'
// scroll
import BScroll from 'better-scroll'
// 轮播图
import Swiper from 'swiper'
// 轮播图的样式
import 'swiper/css/swiper.css'
// 引入 权益组件
import Rights from '../../components/Rights/Rights'
// 引入 免费的组件
import Free from '../../components/Free/Free'
// 引入 课程组件
import Course from '../../components/Course/course'
export default {
  // eslint-disable-next-line standard/object-curly-even-spacing
  components: { Rights, Free, Course },
  data () {
    return {
      // 用来显示 为 年卡 还是 月卡
      level: true,
      // 显示 会员可享受的优惠
      preList: [
        { title: '全年24期电子杂志免费订阅', describe: '订阅过杂志可享6折优惠', price: '240元' },
        { title: '一门线上课程免费收听', describe: '订阅其他课程可享优惠', price: '300元' },
        { title: '全年24期有声读物免费收听', describe: '订阅其他有声读物可享6折优惠', price: '244元' },
        { title: '新周刊旗下繁象文创', describe: '会员专享9折活动', price: '500+' },
        { title: '线下活动', describe: '每年2场线下读书会，新周刊大型平拍活动优先报名', price: '1000+' },
        { title: '非定期抽奖', describe: '专属会员福利', price: '200+' }
      ],
      illustrateList: [
        '订阅成功后，请用支付前填写的手机号码为账号，前往“新周刊”APP注册登录并兑现会员权益。（绑定的手机号码需与支付前填写的手机号码一直）',
        '根据苹果公司规定，IOS系统会员需通过苹果支付购买',
        '年卡会员为虚拟产品，一经订阅成功概不退款，感谢谅解',
        '如有疑问，可在“我的”->“咨询反馈”中留言询问，或添加客户人员维修（guguji2016）咨询。'
      ]
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('#member-swiper', {
      slidesPerView: 'auto', // 表示一个 slides 的宽度来设定数量。
      centeredSlides: true, // active slide会居中，而不是默认状态下的居左。
      spaceBetween: 30,
      pagination: {
        el: '#member-swiper-pagination',
        clickable: true,
        bulletClass: 'my-bullet', // 设置单个 分页器的样式
        bulletActiveClass: 'my-bullet-active' // 选中时的样式
      },
      uniqueNavElements: false, // 表示标签外的分页器也会生效
      // 事件回调
      on: {
        // 当滑屏时会触发
        slideChangeTransitionStart: () => {
          // 花屏显示不同的权限
          this.level = !this.level
        }
      }
    })
    this.$nextTick(() => {
      // eslint-disable-next-line no-new
      new BScroll('.scrollOuter', {
        click: true
      })
      // 判断 请求的 活动数据 回来了么 长度 > 0  则表示回来了
      if (this.activities.length > 0) {
        // eslint-disable-next-line no-new
        this.swiperActivitie = new Swiper('#swiper-activities', {
          loop: true,
          slidesPerView: 'auto', // 表示一个 slides 的宽度来设定数量。
          centeredSlides: true, // active slide会居中，而不是默认状态下的居左。
          spaceBetween: 15
        })
      }
    })
  },
  computed: {
    ...mapState({
      course: state => state.member.course,
      activities: state => state.member.activities
    })
  },
  // 下次 数据更新，如果 轮播图没渲染出来， 那么进行一个渲染
  beforeUpdate () {
    if (!this.swiperActivitie) {
      this.$nextTick(() => {
        this.swiperActivitie = new Swiper('#swiper-activities', {
          loop: true,
          slidesPerView: 'auto', // 表示一个 slides 的宽度来设定数量。
          centeredSlides: true, // active slide会居中，而不是默认状态下的居左。
          spaceBetween: 15
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
// 导入 公共样式
@import '../../comm/maxi.styl'
// 设置 title的样式
header
  font-weight 600
  font-size 16px
  position fixed
  top 0
  left 0
  width 100%
  height 70px
  background white
  text-align center
  line-height 70px
  z-index 100
.title
  member-font()
// 外部的scroll
.scrollOuter
  margin-top 60px
  height 100%
  #member-swiper
    width 100%
    height 250px
    background #F3DEC8
    .swiper-slide
      text-align center
      font-size 18px
      /* Center slide text vertically */
      display flex
      justify-content center
      align-items center
      width 60%
      position relative
      &>div
        position absolute
        bottom 0
        height 80%
        width 100%
        img
          position absolute
          bottom 0
          left 0
  .swiper-pagination
    margin-top 20px
    display flex
    justify-content center
    width 100%
    height 40px
    /deep/ .my-bullet
      width 22px
      height 5px
      margin 0 5px
      background #cccc
    /deep/ .my-bullet-active
      background black
#activities
  margin-top 60px
  #swiper-activities
    margin-top 40px
    height 200px
    width 100%
    .swiper-slide
      border-radius 10px
      overflow hidden
      text-align center
      font-size 18px
      width 75%
      display flex
      justify-content center
      align-items center
#preferential
  margin-top 40px
  width 100%
  ul
    padding 30px
    width 100%
    li
      margin-top 25px
      display flex
      justify-content space-between
      .preLeft
        h3
          letter-spacing 2px
          font-size 15px
          color black
        p
          margin-top 5px
          font-size 12px
          color #696969
          font-weight 200
      .preRight
        font-size 15px
        font-weight 400
#illustrate
  background #EDEDED
  padding 30px
  padding-bottom 130px
  p
    font-size 14px
    font-weight 400
    color black
  li
    display flex
    p
      margin-top 15px
      font-size 13px
      color #A9A9A9
.bck
  height 50px
</style>
