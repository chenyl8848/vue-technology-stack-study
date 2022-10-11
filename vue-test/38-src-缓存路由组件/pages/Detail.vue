<template>
  <div>
    <ul>
      <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
      <li>消息标题：{{ a }}</li>
      <li>消息标题：{{ b }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  // props: ["a", "b"],
  // props: ["id", "title"],
  props: ["id", "title", "a", "b"],
  data() {
    return {};
  },
  computed: {
    // id() {
    //   return this.$route.query.id;
    // },
    // title() {
    //   return this.$route.query.title;
    // },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>