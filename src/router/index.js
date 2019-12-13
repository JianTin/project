import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

import home from './../pages/home/home'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes
  // [
  //   {
  //     path: '/',
  //     redirect: '/home'
  //   },
  //   {
  //     path: '/home',
  //     name: 'home',
  //     component: home
  //   }
  // ]


})
export default router
