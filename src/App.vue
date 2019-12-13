<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- <router-view /> -->

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer/footer'
export default {
  name: 'App',
  components: {Footer}
}
</script>

<style>
</style>
