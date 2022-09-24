<template>
  <div>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="showName">点我提示信息</button>
  </div>
</template>

<script>
// 引入混入
import { mixin1, mixin2 } from "../mixin";
export default {
  name: "Student",
  mixins: [mixin1, mixin2],

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
      x: 1000,
    };
  },
  methods: {
    showName() {
      console.log("student... ");
      alert(this.name + "hello world");
    },
  },
  mounted() {
    console.log("student 中的 mounted... ");
  },
};
</script>