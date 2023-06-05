<template>
  <div class="children1">
    <h2>我是子组件1</h2>
  </div>
</template>

<script lang="ts" setup>
import $bus from "../../bus";

// console.log($bus)

// 使用组合式 API 函数
import { onMounted } from "vue";

// 组件挂载完毕的时候，当前组件绑定一个事件，接收将来兄弟组件传递的数据
onMounted(() => {
  // 第一个参数即为事件类型 第二个参数即为事件回调
  $bus.on("car", (params) => {
    console.log("接收兄弟组件传值", params);
  });
});
</script>

<style scoped>
.children1 {
  width: 300px;
  height: 150px;
  background-color: yellow;
}
</style>