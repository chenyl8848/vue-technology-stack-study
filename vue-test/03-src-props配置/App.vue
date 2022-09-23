<template>
  <div id="app">
    <!-- 注意：属性前面有没有加 : 的区别，没加就是表示传的参数是字符串，加了就是表示具体的类型值 -->
    <!-- <Student studentName="张三" studentSex="男" studentAge="18"/> -->
    <hr />
    <Student studentName="张三" studentSex="男" :studentAge="18"/>
    <hr />
    <Student  studentSex="男" :studentAge="20"/>

  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  components: { Student },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>