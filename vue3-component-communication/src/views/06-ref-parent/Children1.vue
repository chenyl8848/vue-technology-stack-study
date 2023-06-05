<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <h3>子组件1拥有财产:{{ money }}</h3>
  </div>
</template>


<script lang='ts' setup>
import { ref } from "vue";

let money = ref(9999);

defineExpose({
    money
})
</script>

<style scoped>
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
</style>