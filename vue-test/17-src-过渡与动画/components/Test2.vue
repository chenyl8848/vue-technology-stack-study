<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear 表示页面一进来就进行动画效果 -->
    <!-- transition-group 包裹一组标签，需要指定 key -->
    <transition-group name="hello" appear="">
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="isShow" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
}

/* 进入的起点，离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 离开的起点，进入的重点 */
.hello-leave,
.hello-enter-to {
  transform: translateX(0);
}
</style>