<template>
  <div class="children">
    <h1>我是 Children 组件（子）</h1>
    <Son />
  </div>
</template>

<script>
import Son from "./Son";
export default {
  name: "Children",
  components: { Son },
  setup() {},
};
</script>
<style scoped>
.children {
  background-color: skyblue;
  padding: 10px;
}
</style>