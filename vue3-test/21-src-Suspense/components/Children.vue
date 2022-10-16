<template>
  <div class="children">
    <h1>我是 Children 组件（子）</h1>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Children",
  async setup() {
    let sum = ref(0);
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum });
      }, 3000);
    });

    return await p;
  },
};
</script>
<style scoped>
.children {
  background-color: skyblue;
  padding: 10px;
}
</style>