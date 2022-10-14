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
import { ref, reactive, watch } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    let sum = ref(0);

    let message = ref("hello");

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 情况一：监听 ref 所定义的一个响应式数据
    // watch(
    //   sum,
    //   (newValue, oldValue) => {
    //     console.log("sum 的值变化了", newValue, oldValue);
    //   },
    //   {
    //     immediate: true,
    //   }
    // );

    // 情况二：监听 ref 所定义的多个响应式数据
    // watch([sum, message], (newValue, oldValue) => {
    //   console.log("sum 或 message 的值变化了", newValue, oldValue);
    // });

    // 情况三：监听 reactive 所定义的一个响应式数据的全部属性
    // 1.注意：此处无法活得 oldValue
    // 2,注意：强制开启了深度监视（deep: false 配置无效）
    // watch(
    //   person,
    //   (newValue, oldValue) => {
    //     console.log("person 的值变化了", newValue, oldValue);
    //   },
    //   // 此时 deep 配置无效
    //   {
    //     deep: true,
    //   }
    // );

    // 情况四：监听 reactive 所定义的一个响应式数据中的某个属性
    // watch(
    //   () => person.name,
    //   (newValue, oldValue) => {
    //     console.log("person 中的 name 属性的值变化了", newValue, oldValue);
    //   }
    // );

    // 情况五:监听 reactive 所定义的一个响应式数据中的某些属性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log("person 的 name 或 age 属性的值变化了", newValue, oldValue);
    // });

    // 特殊情况:
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("person 的 job 属性的值发生变化了", newValue, oldValue);
      },
      // 此处由于监视的是 reactive 所定义的对象中的某个属性,所哟 deep 配置有效
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