// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { PaginationControl, PaginationPage } from 'vue-smart-pagination'

Vue.component('PaginationControl', PaginationControl)
Vue.component('PaginationPage', PaginationPage)

Vue.config.productionTip = false

export const vueTest = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
