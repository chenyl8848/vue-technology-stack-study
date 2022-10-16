<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我 ++</button>
  <h2>{{ person }}</h2>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, readonly, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");
    let sum = ref(0);

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 数据不修改，页面也不更新
    // person = readonly(person);

    // 数据不修改，页面也不更新，只作用第一层属性，可以作用于第二层以上的属性，如可以修改薪资
    // person = shallowReadonly(person);

    // sum = readonly(sum);

    sum = shallowReadonly(sum);

    return {
      sum,
      person,
    };
  },
};
</script>