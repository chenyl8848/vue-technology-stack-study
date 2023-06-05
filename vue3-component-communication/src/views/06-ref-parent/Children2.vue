<template>
  <div class="children2">
    <h2>我是子组件2</h2>
    <h3>子组件2拥有财产:{{ money }}</h3>
    <button @click="handler($parent)">向父组件拿300元</button>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue'

let money = ref(1000)

const handler = ($parent) => {
  money.value += 300
  console.log($parent)
  $parent.money -= 300
}
</script>

<style scoped>
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
</style>