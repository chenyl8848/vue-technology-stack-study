<template>
  <h2>信息：{{ person }}</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <!-- <h2>薪资：{{ salary }}</h2> -->
  <h2>薪资：{{ job.j1.salary }}</h2>
  <button @click="name += '@'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <!-- <button @click="salary++">涨薪</button> -->
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // salary: toRef(person.job.j1, "salary"),
      ...toRefs(person),
    };
  },
};
</script>