<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生姓名给 App 组件</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">销毁当前组件实例</button>
  </div>
</template>

<script>
// 引入混入
export default {
  name: "Student",

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
    };
  },
  methods: {
    sendStudentName() {
      // 触发 student 组件实例的 getStudentName 事件
      this.$emit("getStudentName", this.name);
      this.$emit("getDemo", 1, 2, 3, 4);
    },
    // 解绑自定义事件
    unbind() {
      // 解绑一个自定义事件
      // this.$off("getStudentName");

      // 解绑多个自定义事件
      this.$off(["getStudentName", "getDemo"]);
    },
    // 销毁当前组件实例
    death() {
      // 销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
      this.$destroy()
    }
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>