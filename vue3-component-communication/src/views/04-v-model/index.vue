<template>
  <div class="box">
    <h1>我是父组件:v-model</h1>
    <input v-model="info" type="text" />

    <!-- 使用 props 向子组件传递数据 -->
    <!-- <Children1 :modelValue="info" @update:modelValue="handler"></Children1> -->

    <!-- 使用 v-model 向子组件传递数据 -->
    <!-- 
       在组件上使用 v-model
        第一:相当有给子组件传递 props[modelValue]
        第二:相当于给子组件绑定自定义事件update:modelValue
     -->

    <div class="container">
      <Children1 v-model="info"></Children1>

      <Children2
        v-model:pageNo="pageNo"
        v-model:pageSize="pageSize"
      ></Children2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Children1 from "./Children1.vue";
import Children2 from "./Children2.vue";

let info = ref("");
const handler = (params) => {
  info.value = params;
};

let pageNo = ref(0);
let pageSize = ref(10);
</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>