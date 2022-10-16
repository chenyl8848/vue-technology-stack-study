// 引入的不再是 Vue 构造函数了，引入的是一个名为 createApp 的工厂函数
import {
    createApp
} from 'vue'
import App from './App.vue'

// 创建应用实例对象——app（类似于之前 Vue2 中的 vm，但 app 比 vm 比较“轻”）
// createApp(App).mount('#app')

const app = createApp(App)
console.log("app", app);

// 挂载 注意 vue2 中的挂载是 $mount
app.mount("#app")

// 两秒后取消挂载
// setTimeout(() => {
//     // 取消挂载
//     app.unmount("#app")
// }, 2000);