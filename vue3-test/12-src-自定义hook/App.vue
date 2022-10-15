<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->

  <button @click="isShowDemo = !isShowDemo">切换显示/隐藏</button>
  <Demo v-if="isShowDemo" />
  <hr />
  <Test v-if="isShowDemo" />
</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo";
import Test from "./components/Test";

export default {
  name: "App",
  components: { Demo, Test },
  setup() {
    let isShowDemo = ref(true);

    return {
      isShowDemo,
    };
  },
};
</script>


