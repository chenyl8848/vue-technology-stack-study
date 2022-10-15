<template>
  <h2>当前 x.y 的值是：{{ x.y }}</h2>
  <button @click="x = { y: 888 }">点我替换 x</button>
  <button @click="x.y++">点我 x.y + 1</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");

    // let person = reactive({
    //   name: "张三",
    //   age: 18,
    //   job: {
    //     j1: {
    //       salary: 20,
    //     },
    //   },
    // });
    // 只考虑第一层数据的响应式。此种情况下，修改薪资就不起作用了
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    let x = shallowRef({
      y: 0,
    });
    console.log("*****", x);

    return {
      person,
      x,
    };
  },
};
</script>