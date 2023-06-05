<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <!-- 默认插槽-->
    <slot></slot>
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
</template>


<script lang='ts' setup>


</script>

<style scoped>
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
</style>