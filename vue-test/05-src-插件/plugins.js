export default {
    install(Vue) {
        console.log(Vue, "@@@@@");

        // 全局定义过滤器
        Vue.filter("strSlice", function (value) {
            return value.slice(0, 4)
        })

        // 全局定义指令
        Vue.directive("fbind", {
            // 指令与元素成功绑定时 一上来
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在模板被重新解析时
            updated(element, binding) {
                element.value = binding.value
            },
        })
        // 给 Vue 原型上添加一个方法 vm、vc 都能使用
        Vue.prototype.hello = () => {
            console.log("hello world ");
        }
    },

}