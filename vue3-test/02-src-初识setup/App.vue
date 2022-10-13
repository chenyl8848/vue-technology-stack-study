<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">说话(Vue3 所配置的——sayHello)</button>
  <br />
  <br />
  <button @click="sayWelcome">说话(Vue2
    所配置的——sayHello)</button>
  <br />
  <br />
  <button @click="test1">
    测试一下在 Vue2 的配置中去读取 Vue3 中的数据、方法
  </button>
  <br />
  <br />
  <button @click="test2">
    测试一下在 Vue3 的配置中去读取 Vue2 中的数据、方法
  </button>
</template>

<script>
import { h } from "vue";

export default {
  name: "App",
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎学习 vue");
    },
    test1() {
      console.log(this.sex);
      // 可以正确取到
      console.log(this.name);
      // 可以正确取到
      console.log(this.age);
      // 可以正确取到
      console.log(this.sayHello);
    },
  },

  // 此处只是暂时测试一下 setup，暂时不考虑响应式的问题
  setup() {
    let name = "张三";
    let age = 18;

    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊!`);
    }

    function test2() {
      console.log(name);
      console.log(age);
      // undefined
      console.log(this.sex);
      // undefined
      console.log(this.sayWelcome);
    }

    // 返回一个对象——常用
    // return {
    //   name,
    //   age,
    //   sayHello,
    //   test2,
    // };

    // 返回一个渲染函数
    return () => h("h1", "欢迎学习 Vue");
  },
};
</script>


