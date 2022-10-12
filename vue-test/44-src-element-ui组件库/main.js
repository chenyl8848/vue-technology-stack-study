import Vue from 'vue'

import App from './App.vue'

// // 引入 element ui
// import ElementUI from 'element-ui';
// // 引入 element ui 样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入 element ui
import {
  Button,
  Row
} from 'element-ui';


Vue.config.productionTip = false

// 使用 element ui
// Vue.use(ElementUI)

// 按需使用 element ui
Vue.component('hello-button', Button)
Vue.component('hello-row', Row)

new Vue({
  el: "#app",
  render: h => h(App)
})