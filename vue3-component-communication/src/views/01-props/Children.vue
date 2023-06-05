<template>
  <div>
    <h2>props:我是子组件</h2>
    <p>接收父组件传值:{{ props.money }}</p>
    <p>接收父组件传值:{{ props.info }}</p>
    <!-- 无法修改 -->
    <!-- Set operation on key "money" failed: target is readonly. -->
    <!-- <button @click="updateProps">修改 props 的值</button> -->
  </div>
</template>

<script lang="ts" setup>
// 需要使用到 defineProps 方法去接受父组件传递过来的数据
// defineProps是 Vue3 提供方法,不需要引入直接使用
//数组|对象写法都可以
// let props = defineProps(["money", "info"]);
let props = defineProps({
  money: {
    // 接收数据的类型
    type: Number,
    default: 0,
  },
  info: {
    type: String,
    required: true,
  },
});

// props 是只读的，不能修改
// let updateProps = () => {
//   props.money = 3000;
// };
</script>

<style scoped>
</style>