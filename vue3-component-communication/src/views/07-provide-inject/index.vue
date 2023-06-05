<template>
  <div class="box">
    <h1>我是父组件:provdide-inject</h1>
    <h1>父组件拥有汽车:{{ car }}</h1>
    <Children></Children>
  </div>
</template>


<script lang='ts' setup>
import Children from "./Children.vue";

//vue3 提供 provide(提供)与 inject(注入),可以实现隔辈组件传递数据
import { provide, ref } from "vue";
let car = ref("保时捷911");

//祖先组件给后代组件提供数据
//两个参数:第一个参数就是提供的数据key
//第二个参数:祖先组件提供数据
provide("CAR", car);


</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}
</style>