// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入 路由对象
import router from './router'
// 引入 vuex
import store from './store'
// 去除默认样式
import 'minireset.css'
// 引入 vant的 css库
import 'vant/lib/index.css'
// 引入mock
import './mock/mock'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
