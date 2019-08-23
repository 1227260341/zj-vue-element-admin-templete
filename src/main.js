// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
// import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import './icons' // icon
import './permission' // permission control
// import './utils/error-log' // error log

import * as filters from './filters' // global filters

// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }


Vue.use(ElementUI);

Vue.config.productionTip = false

import http from '@/utils/http.js'
import loginApi from '@/api/login.js'
 Vue.prototype.http = http
 Vue.prototype.loginApi = loginApi

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     sessionStorage.removeItem('user')
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'))
//   if (!user && to.path !== '/login') {
//     next({
//       path: '/login'
//     })
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
