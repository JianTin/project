<template>
  <div class="home">
    <!-- <span @click="($router.push('/home/cutural'))">跳转
    </span> -->
    <router-link to="/home/cultural">调转</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Cultural from '../cultural/cultural'
export default {
  components: {
    Cultural
  }
}
</script>

<style lang="stylus" scoped></style>
