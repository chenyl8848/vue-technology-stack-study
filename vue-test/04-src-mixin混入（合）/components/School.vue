<template>
  <div>
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button @click="showName">点我提示信息</button>
  </div>
</template>

<script>
// 引入混入
import { mixin1 } from "@/mixin";

export default {
  name: "School",
  // 混入配置项
  mixins: [mixin1],
  data() {
    return {
      name: "北京大学",
      address: "北京",
    };
  },
  methods: {
    // showName() {
    //   alert(this.name);
    // },
  },
};
</script>