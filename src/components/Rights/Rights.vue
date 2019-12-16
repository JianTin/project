<template>
  <div id="outer">
    <p id="title">会员权益</p>
    <ul>
      <li v-for="(yearRights,index) in yearOrMonth" :key='index'
         @click.stop="goTo"
      >
        <img :src="yearRights.iconUrl"
             alt="年度电子杂志"
             >
        <p>{{yearRights.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { Search } from 'vant'
export default {
  props: {
    level: Boolean
  },
  components: { Search },
  computed: {
    ...mapState({
      year: state => state.member.year,
      month: state => state.member.month
    }),
    // 根据 true 和 false ，显示对应的权益
    yearOrMonth () {
      const {level, year, month} = this
      // console.log(level)
      return level ? year : month
    }
  },
  methods: {
    goTo () {
      console.dir(this.$router.replace)
      this.$router.replace('/member/test')
    }
  }
}
</script>

<style lang="stylus" scoped>
#outer
  margin-top 50px
#title
  font-weight 600
  font-size 17px
  margin-left 30px
ul
  width 100%
  box-sizing border-box
  padding 50px
  padding-top 30px
  display flex
  justify-content space-between
  flex-wrap wrap
  li
    width 150px
    height 150px
    margin 5px
    p
      text-align center
      font-size 13px
      color #ccc
</style>
