<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 使用第三方动画库 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="isShow" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
// Animate.css 使用步骤
// 0.官网地址：https://animate.style/
// 1.安装：npm install animate.css --save
// 2.引入： import "animate.css";

import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>