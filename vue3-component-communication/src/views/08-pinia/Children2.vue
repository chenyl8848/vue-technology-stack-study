<template>
  <div class="children2">
    <h2>我是子组件2</h2>
    <ul>
      <li v-for="(item, index) in todoStore.todoList" :key="item.id">{{ item.title }}</li>
    </ul>
    <button @click="handler">修改todo</button>
    <h3>totalCount:{{ todoStore.total }}</h3>
  </div>
</template>

<script lang='ts' setup>
import useTodoStore from '../../store/module/todo'

let todoStore = useTodoStore()

const handler = () => {
  let params = { id: 4, title: '学习', done: true }
  todoStore.updateTodo(params)
}
</script>

<style scoped>
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
</style>