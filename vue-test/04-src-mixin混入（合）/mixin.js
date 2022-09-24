// 定义一个混入配置信息
// 说明：如果混入中配置的数据、方法，在组件中有同样的数据定义、方法名称，会加载组件中的数据和方法，混入中的数据和方法就不起作用
const mixin1 = {
    data() {
        return {
            x: 200,
            y: 100
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
}
// 说明：生命周期中的函数，如果混入、组件中都有配置的话，二者都会执行
const mixin2 = {
    mounted() {
        console.log("mixin 中的 mounted... ")
    },
}

export {
    mixin1,
    mixin2
}