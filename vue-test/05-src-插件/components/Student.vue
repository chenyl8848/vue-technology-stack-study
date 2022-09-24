<template>
  <div>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <input v-fbind:value="hello"></input>
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
      hello: ""
    };
  },
  methods: {},
};
</script>