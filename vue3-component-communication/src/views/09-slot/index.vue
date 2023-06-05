<template>
  <div class="box">
    <h1>我是父组件:slot</h1>
    <div class="container">
      <Children1>
        <span>默认插槽</span>
      </Children1>
      <Children1>
        <template v-slot:a>
          <span>具名插槽a</span>
        </template>
      </Children1>
      <Children1>
        <template #b>
          <span>具名插槽b</span>
        </template>
      </Children1>
      <Children2 :todos="todos">
        <template v-slot="{ $row, $index }">
          <p :style="{ color: $row.done ? 'green' : 'red' }">
            {{ $row.title }}
          </p>
        </template>
      </Children2>
    </div>
  </div>
</template>


<script lang='ts' setup>
import Children1 from "./Children1.vue";
import Children2 from "./Children2.vue";

//插槽:默认插槽、具名插槽、作用域插槽
//作用域插槽:就是可以传递数据的插槽,子组件可以将数据回传给父组件,父组件可以决定这些回传的数据是以何种结构或者外观在子组件内部去展示！！！

import { ref } from "vue";
//todos数据
let todos = ref([
  { id: 1, title: "吃饭", done: true },
  { id: 2, title: "睡觉", done: false },
  { id: 3, title: "打游戏", done: true },
  { id: 4, title: "学习", done: false },
]);
</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>