<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <div class="app">
    <h1>我是 App 组件（祖），{{ name }} - {{ price }}W</h1>
    <button @click="price++">修改车的价格</button>
    <Children />
  </div>
</template>

<script>
import { provide, reactive, toRefs } from "vue";
import Children from "./components/Children.vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 40,
    });

    // 给自己的后代传递数据
    provide("car", car);

    return {
      ...toRefs(car),
    };
  },
  components: { Children },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>


