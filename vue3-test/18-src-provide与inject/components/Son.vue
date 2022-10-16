<template>
  <div class="son">
    <h1>我是 Son 组件（孙） {{ car.name }} - {{ car.price }}W</h1>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Son",
  setup() {
    // 注入上代传来的数据
    let car = inject("car");

    return {
      car,
    };
  },
};
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>