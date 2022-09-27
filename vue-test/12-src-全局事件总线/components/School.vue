<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "北大大学",
      address: "北京",
    };
  },
  methods: {},
  // 在组件挂载时绑定一个事件
  mounted() {
    this.$bus.$on("getStudentName", (data) => {
      // 此时 this 是 VueComponent 的实例 School
      console.log(this);
      console.log("School 组件收到了数据:", data);
    });
  },
  // 在组件销毁前解绑事件
  beforeDestroy() {
    this.$bus.$off("getStudentName")
  }
};
</script>

<style>
.demo {
  background-color: skyblue;
}
</style>