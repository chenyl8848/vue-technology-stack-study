<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我 +1</button>
  <hr />
  <h2>当前的信息为：{{ message }}</h2>
  <button @click="message += '~'">点我修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    let sum = ref(0);

    let message = ref("hello");

    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    watch(
      sum,
      (newValue, oldValue) => {
        console.log("sum 的值变化了", newValue, oldValue);
      },
      {
        immediate: true,
      }
    );

    watch(
      person.value,
      (newValue, oldValue) => {
        console.log("person 的值变化了", newValue, oldValue);
      },
      // 此时 deep 配置无效
      {
        deep: true,
      }
    );

    return {
      sum,
      message,
      person,
    };
  },
  beforeCreate() {
    console.log("-----beforeCreate-----");
  },
};
</script>