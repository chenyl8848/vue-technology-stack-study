<template>
  <div>
    <ul v-for="message in messageList" :key="message.id">
      <!-- 跳转路由并携带 params 参数，to 的字符串写法 -->
      <!-- <router-link
        :to="`/home/message/detail/${message.id}/${message.title}`"
        >{{ message.title }}</router-link
      > -->

      <!-- 跳转路由并携带 params 参数，to 的对象写法 -->
      <router-link
        :to="{
          name: 'xiangqing',
          query: {
            id: message.id,
            title: message.title,
          },
        }"
        >{{ message.title }}</router-link
      >
      <button @click="pushShow(message)">push 查看</button>
      <button @click="replaceShow(message)">replace 查看</button>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(message) {
      this.$router.push({
        name: "xiangqing",
        query: {
          id: message.id,
          title: message.title,
        },
      });
    },
    replaceShow(message) {
      this.$router.replace({
        name: "xiangqing",
        query: {
          id: message.id,
          title: message.title,
        },
      });
    },
  },
  beforeDestroy() {
    console.log("Message 组件即将被销毁...");
  },
};
</script>