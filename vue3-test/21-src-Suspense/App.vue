<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <div class="app">
    <h1>我是 App 组件（祖）</h1>
    <Suspense>
      <template v-slot:default>
        <Children />
      </template>
      <template v-slot:fallback>
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import Children from "./components/Children.vue";
import { defineAsyncComponent } from "vue";
// 异步引入
const Children = defineAsyncComponent(() =>
  import("./components/Children.vue")
);
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


