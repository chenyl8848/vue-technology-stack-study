import Vue from 'vue'

import App from './App.vue'
// 引入 vue-resource
import VueResource from 'vue-resource'
// 引入 store
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
})