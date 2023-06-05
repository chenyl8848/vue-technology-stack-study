<template>
  <div class="children">
    <h2>我是子组件</h2>

    <Grandson></Grandson>
  </div>
</template>


<script lang='ts' setup>
import Grandson from './Grandson.vue';

</script>

<style scoped>
.children {
  width: 500px;
  height: 250px;
  background: pink;
}
</style>