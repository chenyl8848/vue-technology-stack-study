<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发一下 Demo 组件的 hello 事件</button>
</template>

<script>
export default {
  name: "Demo",
  props: ["message"],
  emits: ["hello"],
  setup(props, context) {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----", this);

    // 数据
    let person = {
      name: "张三",
      age: 18,
    };

    console.log(props, context);
    // props
    // console.log("props", props);
    // 相当于 Vue2 中的 $attrs
    // console.log("attrs", context.attrs);
    // 触发自定义事件
    // console.log("emit", context.emit);
    // 插槽
    console.log("slots", context.slots);

    function test() {
      context.emit("hello", person.name);
    }

    return {
      person,
      test,
    };
  },
  beforeCreate() {
    console.log("-----beforeCreate-----");
  },
};
</script>