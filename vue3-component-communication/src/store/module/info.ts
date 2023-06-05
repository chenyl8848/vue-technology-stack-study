import { defineStore } from 'pinia'

//第一个参数:小仓库名字  第二个参数:小仓库配置对象
//defineStore 方法执行会返回一个函数,函数作用就是让组件可以获取到仓库数据
let useInfoStore = defineStore("info", {
    // 注意写法与 vue2 中 的 vuex 写法不同

    // state 存储数据
    state: () => {
        return {
            count: 999,
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    // 对数据进行操作
    actions: {
        //注意:函数没有context上下文对象
        //没有commit、没有mutations去修改数据
        updateCount(param1: number, param2: number) {
            this.count = param1 + param2
        }
    },
    // 获取数据
    getters: {
        total() {
            let result:number = this.arr.reduce((prev, next) => {
                return prev + next
            }, 0)
            return result
        }
    }
})

export default useInfoStore;