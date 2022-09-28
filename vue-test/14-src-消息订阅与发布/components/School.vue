<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "北大大学",
      address: "北京",
    };
  },
  methods: {},
  mounted() {
    // 订阅消息
    const pubId = pubsub.subscribe("sendStudentName", (messageName, data) => {
      // 箭头函数写法 此时 this 是 VueComponent 实例 School
      console.log(this);
      console.log(messageName, data);
    })
    // pubsub.subscribe("sendStudentName", function (messageName, data) {
    //   // 普通函数写法，此时 this undefined
    //   console.log(this);
    //   console.log(messageName, data);
    // });
  },
  beforeDestroy() {
    // 取消订阅消息
    // 取消订阅消息时要用 pubId 去取消订阅
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
.demo {
  background-color: skyblue;
}
</style>