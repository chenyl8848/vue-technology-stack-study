<template>
  <div class="demo">
    <h2 class="title">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
  </div>
</template>

<script>
// 引入混入
export default {
  name: "Student",

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
    };
  },
  methods: {},
};
</script>

<!-- <style>
  .demo {
    background-color: orange;
  }
</style> -->
<!-- 不指定，默认使用 css -->
<!--  scoped: 表示样式只对指定的组件起作用-->
<!-- <style scoped>
  .demo {
    background-color: orange;
  }
</style> -->

<!-- lang: 指定用什么样式  -->
<!-- less 需要引入 less-loader:npm install less-loader 指定版本：npm install less-loader@7 -->
<!-- npm view webpack versions 查看 webpack 版本命令，同理： -->
<style lang="less" scoped>
  .demo {
    background-color: orange;
    // less 与 css 的一个区别就是 less 可以叠加写，css 不可以
    .title {
      font-size: 40px;
    }
  }
</style>