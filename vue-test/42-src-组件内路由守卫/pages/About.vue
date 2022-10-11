<template>
  <div>
    <h1>我是 About 组件中的内容</h1>
  </div>
</template>
  
<script>
export default {
  name: "About",
  // beforeDestroy() {
  //   console.log("About 组件即将被销毁...");
  // },
  // mounted() {
  //   console.log("About 组件挂载完毕了", this);
  //   window.aboutRoute = this.$route
  //   window.aboutRouter = this.$router
  // },

  mounted() {
    console.log("%%%%", this.$route);
  },

  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About - beforeRouteEnter", to, from);
    if (to.meta.isAuth) {
      if (localStorage.getItem("token") === "admin") {
        next();
      } else {
        alert("No Auth");
      }
    } else {
      next();
    }
  },

  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About - beforeRouteLeave", to, from);
    next();
  },
};
</script>