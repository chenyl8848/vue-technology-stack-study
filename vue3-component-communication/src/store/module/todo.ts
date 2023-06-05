import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

let useTodoStore = defineStore('todo', () => {
    let todoList = ref([
        { id: 1, title: '吃饭', done: true },
        { id: 2, title: '睡觉', done: false },
        { id: 3, title: '打游戏', done: true }
    ])

    let arr = ref([1, 2, 3, 4, 5])

    const total:any = computed(() => {
        return arr.value.reduce((prev, next) => {
            return prev + next
        }, 0)
    })

    const updateTodo = (params: any) => {
        todoList.value.unshift(params)
    }

    // 务必要返回一个对象:属性与方法可以提供给组件使用
    return {
        todoList,
        total,
        updateTodo
    }
})

export default useTodoStore;