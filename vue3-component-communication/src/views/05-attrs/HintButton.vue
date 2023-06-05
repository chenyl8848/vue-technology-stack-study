<template>
  <div :title="title">
    <el-button :="$attrs"></el-button>
  </div>
</template>

<script lang='ts' setup>
//引入useAttrs方法:获取组件标签身上属性与事件
import { useAttrs } from "vue";
//此方法执行会返回一个对象
let $attrs = useAttrs();

// 万一用 props 接受 title
let props = defineProps(['title'])
// props 与 useAttrs 方法都可以获取父组件传递过来的属性与属性值
//但是 props 接收了 useAttrs 方法就获取不到了
console.log($attrs)


</script>
<style scoped>
</style>