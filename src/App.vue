<template>
  <div id="app"
       style="height:100%">
    <router-view :key="key" />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer/footer'
export default {
  name: 'App',
  components: { Footer },
  computed: {
    key () {
      return this.$route.path + Math.random();
    }
  }
}
</script>

<style>
</style>
