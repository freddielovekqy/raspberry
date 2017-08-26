// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/framework/jquery-2.1.4.min'
import './assets/framework/bootstrap/css/bootstrap.min.css'  
import './assets/framework/bootstrap/js/bootstrap.min'  

import './assets/framework/font-awesome/4.7.0/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
