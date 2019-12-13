<template>
  <div id="app">
    <router-view />
    <Footer v-show="$router.currentRoute.meta.isShowFooter" />
  </div>
</template>

<script>
import Footer from '@/components/footer/footer'
export default {
  name: 'App',
  components: { Footer }
  // async mounted  () {
  //   this.$store.dispatch('actionGetMemberRights')
  // }
}
</script>

<style lang='stylus'>
#app
  height 100%
</style>
