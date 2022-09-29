<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear 表示页面一进来就进行动画效果 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">Hello World</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test1",
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

.hello-enter-active {
  animation: helloWorld 0.5s linear;
}

.hello-leave-active {
  animation: helloWorld 0.5s linear reverse;
}

@keyframes helloWorld {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>