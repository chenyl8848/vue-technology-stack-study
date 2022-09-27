<template>
  <div id="app" class="app">
    <h1>学校名称是：{{ schoolName }}</h1>
    <h1>学生姓名是：{{ studentName }}</h1>

    <!-- 通过 props 来实现子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 第一种写法：通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据 使用 @ 或者 v-on -->
    <!-- <Student @getStudentName="getStudentName" /> -->
    
    <!-- 第二种写法：通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据 使用 ref-->
    <Student ref="student" />
    
    <!-- 通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据，只触发一次 -->
    <!-- <Student @getStudentName.once="getStudentName"/> -->
    <!-- <Student ref="student" /> -->
    
    <!-- 使用组件原生的方法 -->
    <!-- <Student @click.native="show" /> -->
    
    <!-- <Student @getStudentName="getStudentName" @getDemo="getDemo" /> -->
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  components: { School, Student },
  data() {
    return {
      schoolName: "",
      studentName: "",
    };
  },

  methods: {
    // 接收 School 子组件传递来的数据
    getSchoolName(name) {
      console.log("App 组件收到了学校名称", name);
      this.schoolName = name;
    },

    // 接收 Student 子组件传递来的数据
    getStudentName(name) {
      console.log("App 组件收到了学生姓名", name);
      this.studentName = name;
    },

    // 接收多个数据
    getDemo(...params) {
      console.log(...params);
    },

    show() {
      alert(123)
    }
  },

  mounted() {
    // 写法一
    this.$refs.student.$on("getStudentName", (name) => {
      // 普通函数写法 此时 this 是 VueComponent 实例 Student
      // 箭头函数写法 此时 this 是 vm 
      console.log(this,"@@@", name);
       this.studentName = name
    })
    // 写法二
    // this.$refs.student.$on("getStudentName", this.getStudentName)
    // this.$refs.student.$once("getStudentName", this.getStudentName)
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
