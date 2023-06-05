<template>
  <div class="children2">
    <h2>我是子组件2</h2>
    <button @click="handler">给兄弟组件传递值</button>
  </div>
</template>

<script lang="ts" setup>
import $bus from '../../bus'

const handler = () => {
    $bus.emit('car', {car: '兰博基尼'})
}
</script>

<style scoped>
.children2 {
  width: 300px;
  height: 150px;
  background-color: yellowgreen;
}
</style>