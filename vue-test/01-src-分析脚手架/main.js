// 整个项目的入口文件

// 引入 Vue 
import Vue from 'vue'
// 引入 App 组件。它是所有组件的父组件
import App from './App.vue'

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 创建 Vue 实例对象 -- vm
new Vue({
  el: "#app",

  /**
    关于不同版本的Vue：
      1.vue.js与 vue.runtime.xxx.js 的区别：
        (1).vue.js 是完整版的 Vue，包含：核心功能 + 模板解析器。
        (2).vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能；没有模板解析器。

        2.因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容。
  */
  render: h => h(App),

  // 完整写法
  // render: (createElement) => {
  //   return createElement("h1", "hello world");
  // }

  // render: (createElement) => createElement("h1", "hello world2")
})

// new Vue({
//   render: h => h(App),
// }).$mount('#app')