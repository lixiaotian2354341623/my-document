// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFeedback from 'vue-feedback'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/fonts/element-icons.woff'
// import express from 'express'
Vue.use(VueAxios, axios)
Vue.use(VueFeedback)
Vue.use(Element)
Vue.prototype.$axios=axios;
Vue.config.productionTip = false



Vue.prototype.HOST='/api'  //映射

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
