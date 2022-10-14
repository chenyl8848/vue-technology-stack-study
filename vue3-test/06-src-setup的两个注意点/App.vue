<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <Demo @hello="showHelloMessage" message="hello" school="北京大学">
    <template v-slot:qwe>
      <span>Hello World</span>
    </template>
    <template v-slot:abc>
      <span>Hello World</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: "App",
  components: { Demo },

  setup() {
    function showHelloMessage(name) {
      alert(`你好啊，我收到的姓名是 ${name}`);
    }

    // 返回一个对象——常用
    return {
      showHelloMessage,
    };
  },
};
</script>


