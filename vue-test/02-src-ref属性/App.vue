<template>
  <div id="app">
    <h1 v-text="msg" id="msg"></h1>
    <h1 v-text="msg" ref="msg"></h1>
    <School ref="sch"/>
    <button @click="showDOM" ref="btn">点我输出上方的 DOM 元素</button>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  components: { School },
  data() {
    return {
      msg: "欢迎学习 Vue!"
    };
  },
  methods: {
    showDOM() {
      // 常规的 DOM 操作
      // console.log(document.getElementById("msg"));
      
      // 真是 DOM 元素
      console.log(this.$refs.msg); 
      console.log(this.$refs.btn); 

      // School 组件的实例对象 Vue Components
      console.log(this, this.$refs.sch);
    }
  }
};
</script>