<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->

  <button @click="isShowDemo = !isShowDemo">切换显示/隐藏</button>
  <Demo v-if="isShowDemo" />

</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo";

export default {
  name: "App",
  components: { Demo },
  setup() {
    let isShowDemo = ref(true);

    return {
      isShowDemo,
    };
  },
};
</script>


