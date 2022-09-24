<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "北大大学",
      address: "北京",
    };
  },
  methods: {

  },
};
</script>

<style>
  .demo {
    background-color: skyblue;
  }
</style>