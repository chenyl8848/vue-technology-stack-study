// 该文件专门用于创建整个应用的路由器

// 引入 vue
import Vue from 'vue'

// 引入路由器 vue-router
import Router from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'

// 使用插件
Vue.use(Router)

// 创建并暴露一个路由器
export default new Router({
    // 配置路由
    routes: [{
        path: '/about',
        component: About
    }, {
        path: '/home',
        component: Home,
        children: [{
            path: 'news',
            component: News
        }, {
            path: 'message',
            component: Message
        }]
    }]
})