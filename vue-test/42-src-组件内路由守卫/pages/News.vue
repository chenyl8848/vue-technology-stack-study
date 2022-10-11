<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢饮学习 Vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  mounted() {
    console.log("News 组件即将挂载...");
    // this.timer = setInterval(() => {
    //   console.log("@");
    //   this.opacity -= 0.01;
    //   if (this.opacity <= 0) {
    //     this.opacity = 1;
    //   }
    // }, 16);
  },
  beforeDestroy() {
    console.log("News 组件即将被销毁...");
    // clearInterval(this.timer);
  },
  activated() {
    console.log("News 组件被激活了...");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    console.log("News 组件失活了...");
    clearInterval(this.timer);
  },
};
</script>