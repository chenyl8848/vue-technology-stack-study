<template>
  <div class="children2">
    <h2>我是子组件2:作用域插槽</h2>
    <ul>
      <li v-for="(item, index) in todos" :key="item.id">
        <!--作用域插槽:可以讲数据回传给父组件-->
        <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script lang='ts' setup>
//通过props接受父组件传递数据
defineProps(["todos"]);
</script>

<style scoped>
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
</style>