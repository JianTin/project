<template>
  <section class="totality">
    <!--头部-->
    <div class="header">
      <div class="header">
        <svg @click="go"
             class="icond"
             aria-hidden="true">
          <use xlink:href="#icon-right-copy
"></use>
        </svg>
        <p @click="goceshi"
           class="p"><span style="margin-bottom: 8px ">资讯</span><span style="width: 30px;height: 3px;background-color: #222222;margin-left:-30px;"></span>
        </p>
        <p class="p"><span style="margin-bottom: 8px ">测试</span><span style="width: 30px;height: 3px;background-color: #222222;margin-left:-30px;"></span></p>

        <svg class="icond"
             aria-hidden="true">
          <use xlink:href="#icon-ceshi
"></use>
        </svg>
      </div>
    </div>

    <!--中间内容部分-->
    <div class="line"></div>
    <div class="center">
      <!--左边部分-->
      <div class="center_left">
        <ul class="center_left_ul"
            ref="list">
          <li class="active"
              @click="showActive($event)"
              v-for="(item,index) in name"
              :key="index">{{item}}</li>
        </ul>
      </div>
      <!--右边部分-->
      <div class="center_right">
        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/08.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700;padding-top: 12px">人格阴影测试</p>
            <p style="font-size: 12px">那些阴影消耗着你的人生</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/01.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">观感—黑暗人格测试</p>
            <p style="font-size: 12px">测测你内心的光与暗</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/02.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">深沉虚拟测试</p>
            <p style="font-size: 12px">你内心深处最想要的是什么</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/03.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">人格原型测试</p>
            <p style="font-size: 12px">测试藏在你内心深处部位人知的那一面</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/04.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">心里囚徒测试</p>
            <p style="font-size: 12px">你内心囚禁那一方面的自己</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/05.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">性魅力评估</p>
            <p style="font-size: 12px">测测你有多撩人</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/06.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">多面人格挖掘机</p>
            <p style="font-size: 12px">测测你的人格有多少面</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/07.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">潜意思画像测试</p>
            <p style="font-size: 12px">测测你内心最真实的一面</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/09.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">人格魅力评估</p>
            <p style="font-size: 12px">什么才是你最吸引人的地方</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/10.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">气质类型测评</p>
            <p style="font-size: 12px">在别人眼里你拥有那种独特的气质</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/11.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">性别内隐偏见测试</p>
            <p style="font-size: 12px">你是否背上了性别的枷锁</p>
          </div>
        </div>

        <div @click="gotextzu"
             class="center_right_t">
          <div>
            <img style="width: 100px;height: 100px"
                 src="./image/12.jpg"
                 alt="">
          </div>
          <div style="margin-left: 16px">
            <p style="font-weight: 700">异性魅力评估</p>
            <p style="font-size: 12px">你的魅力值有多高</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
TreeSelect
<script>
import iconfont3 from '../../../iconfont3/iconfont.js'
import index from '../../../store'

export default {
  data () {
    return {
      name: ['性格', '情感', '健康', '人际', '能力'],
      color: 'cls',
      isFlag: false // 定义点默认事件为false
    }
  },
  components: {
    iconfont3
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$refs.list.children[0].style.backgroundColor = 'white'
    },
    goceshi (university) {
      this.$router.push('university')
    },
    showActive (event) {
      Array.from(this.$refs.list.children).forEach((ele) => {
        ele.style.backgroundColor = '#dfe6e9'
      })
      event.target.style.backgroundColor = 'white'
    },
    go (home) {
      this.$router.push('home')
    },
    gotextzu (textChildren) {
      this.$router.push('textChildren')
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
    p
      display flex
      align-items flex-end
    .icond
      width 2em
      height 2em
      vertical-align -0.15em
      fill currentColor
      overflow hidden
      margin 1em 2em 0 2em
  .line
    width 100%
    height 20px
    margin-top 300px
    background-color #dfe6e9
    position fixed
    top -28.57143vw
  .center
    width 100%
    margin-top 100px
    .center_left
      width 20%
      height 100%
      background-color #dfe6e9
      position fixed
      left 0
      top 120px
      .center_left_ul
        width 100%
        text-align center
        font-size 14px
        &.active
          background-color #fffdef
        li
          height 80px
          line-height 80px
    .center_right
      .center_right_t
        width 550px
        margin-left 150px
        margin-top 18px
        display flex
        justify-content left
.cls
  background-color #fffdef
</style>
