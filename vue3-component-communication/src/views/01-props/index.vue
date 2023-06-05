<template>
  <div class="box">
    <h1>props:我是父组件</h1>
    <Children :money = "money" :info = "info"></Children>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// 引入子组件
import Children from "./Children.vue";
// 使用 props 实现父子组件通信
let money = ref(1000);
let info = ref('发零花钱了')

</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background-color: pink;
}
</style>