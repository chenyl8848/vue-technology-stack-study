<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>学生姓名: {{ studentName }}</h2>
    <h2>学生性别: {{ studentSex }}</h2>
    <!-- <h2>学生年龄: {{ studentAge + 1 }}</h2> -->
    <h2>学生年龄: {{ age + 1 }}</h2>
    <button @click="addAge">点我年龄 +10 </button>
  </div>
</template>

<script>
export default {
  name: "Student",
  // 接收参数的简要写法
  // props: ['studentName', 'studentSex', 'studentAge'],

  // 接受参数 + 指定类型的写法
  // props: {
  //   studentName: String,
  //   studentSex: String,
  //   // 指令类型为数值类型，当传入的类型不是数值类型时就会报错
  //   // Expected Number with value 18, got String with value "18".
  //   studentAge: Number, 
  // },

  // 接收参数 + 指定类型 + 指定是否必传 + 指定默认值
  props: {
    studentName: {
      // 指定类型是字符串
      type: String,
      // 指定默认值
      default: "李四"
    },
    studentSex: {
      type: String,
      // 指定必传
      required: true
    },
    studentAge: {
      type: Number
    }
  },
  
  data() {
    return {
      msg: "我是一名学生",
      age: this.studentAge
    };
  },

  methods: {
    addAge() {
      // props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据。
      // 警告 
      // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
      // this.studentAge += 10;
      this.age += 10
    }
  }
};
</script>