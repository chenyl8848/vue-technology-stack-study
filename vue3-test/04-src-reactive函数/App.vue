<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪资：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试 c 的数据：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",

  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ["抽烟", "喝酒", "烫头"]
    })

    function changeInfo() {
      console.log("@@@", name);
      person.name = "李四";
      person.age = 98;

      person.job.type = "UI设计师";
      person.job.salary = "6k"
      person.job.a.b.c = 999

      // 此处数组修改注意与 Vue2 的区别
      person.hobby[0] = "篮球"

    }

    // 返回一个对象——常用
    return {
      person,
      changeInfo
    };

  },
};
</script>


