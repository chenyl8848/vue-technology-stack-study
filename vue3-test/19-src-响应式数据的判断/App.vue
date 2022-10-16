<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>我是 App 组件</h1>
</template>

<script>
import {
  reactive,
  ref,
  isReactive,
  isRef,
  readonly,
  isReadonly,
  isProxy,
} from "vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 40,
    });

    let sum = ref(0);

    let car2 = readonly(car);

    // true
    console.log(isReactive(car));
    // true
    console.log(isRef(sum));
    // true
    console.log(isReadonly(car2));
    // true
    console.log(isProxy(car));
    // false
    console.log(isProxy(sum));
  },
};
</script>




