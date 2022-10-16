<template>
  <div class="son">
    <h1>我是 Son 组件（孙）</h1>
    <Dialog />
  </div>
</template>

<script>
import {} from "vue";
import Dialog from "./Dialog.vue";

export default {
  name: "Son",
  setup() {},
  components: { Dialog },
};
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>