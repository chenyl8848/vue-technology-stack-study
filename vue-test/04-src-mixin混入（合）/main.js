import Vue from 'vue'

import App from './App.vue'
import {mixin1, mixin2} from './mixin'

Vue.config.productionTip = false

// 注册全局的混入
Vue.mixin(mixin1)
Vue.mixin(mixin2)

new Vue({
  el: "#app",
  render: h => h(App)
})