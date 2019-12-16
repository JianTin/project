<template>
  <div id="outer"
       @click="goTo(course.courseIcon)">
    <div class="courseAvatar">
      <img :src="course.courseIcon"
           alt="">
    </div>
    <div class="courseDescribes">
      <div class="describesTop">
        <p class='title'>{{course.courseTitle}}</p>
        <p class="describes">{{course.courseSubhead}}</p>
      </div>
      <div class="describesBottom">
        <p>试听</p>
        <div class="price">
          <div>￥{{course.coursePrice}}</div>
          <div>会员￥{{course.memberPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    course: Object
  },
  methods: {
    goTo (src) {
      this.$router.push({ path: '/home/entryCourse', query: { imgSrc: src } })
      if (this.id) {
        this.$store.commit('addCourse', this.course)
      }
    }
  },
  computed: {
    ...mapState({
      id: state => state.user._id
    })
  }
}
</script>

<style lang="stylus" scoped>
#outer
  display flex
  padding 20px
  box-sizing border-box
  .courseAvatar
    flex-shrink 0
    width 180px
    height 180px
    border-radius 10px
    overflow hidden
  .courseDescribes
    display flex
    flex-direction column
    justify-content space-between
    margin-left 20px
    height 180px
    .describesTop
      .title
        color black
        font-size 13px
        font-weight 600
      .describes
        margin-top 10px
        color #808080
        font-size 11px
        font-weight 200
    .describesBottom
      display flex
      justify-content space-between
      align-items center
      p
        width 60px
        height 30px
        background #5EAFED
        font-size 8px
        color white
        text-align center
        line-height 30px
      .price
        display flex
        align-items center
        div
          &:nth-child(1)
            color #5EAFED
            font-size 12px
            margin-right 10px
          &:nth-child(2)
            color white
            background linear-gradient(90deg, #A9A9A9, black)
            width 110px
            height 35px
            font-size 11px
            text-align center
            line-height 40px
            border-radius 5px
</style>
