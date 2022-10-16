<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <div class="app">
    <h1>我是 App 组件（祖）</h1>
    <Children />
  </div>
</template>

<script>
import {} from "vue";
import Children from "./components/Children.vue";
export default {
  name: "App",
  setup() {},
  components: { Children },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>


