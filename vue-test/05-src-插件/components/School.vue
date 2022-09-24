<template>
  <div>
    <h2>学校名称： {{ name | strSlice}}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button @click="test">点我提示信息</button>
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "北大是中国最好的大学",
      address: "北京",
    };
  },
  methods: {
    test() {
      this.hello()
    }
  },
};
</script>