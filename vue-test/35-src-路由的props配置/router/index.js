// 该文件专门用于创建整个应用的路由器

// 引入 vue
import Vue from 'vue'

// 引入路由器 vue-router
import Router from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 使用插件
Vue.use(Router)

// 创建并暴露一个路由器
export default new Router({
    // 配置路由
    routes: [{
        name: 'guanyu',
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
            component: Message,
            children: [{
                name: 'xiangqing',
                // path: 'detail/:id/:title',
                path: 'detail',
                component: Detail,

                // props 的第一种写法，值为对象，该对象中的所有 key-value 都会以 props 的形式传给 Detail 组件
                // props: {
                //     a: "hello",
                //     b: "world"
                // }

                // props 的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 的形式传递给 Detail 组件
                // props: true

                // props 的第三种写法，值为函数
                props($route) {
                    return {
                        id: $route.query.id,
                        title: $route.query.title,
                        a: 'hello',
                        b: 'world'
                    }
                }
            }]
        }]
    }]
})