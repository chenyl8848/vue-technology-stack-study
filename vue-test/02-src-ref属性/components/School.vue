<template>
  <div>
    <h2>学校名称: {{ schoolName }}</h2>
    <h2>学校地址: {{ schoolAddress }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "北京大学",
      schoolAddress: "北京",
    };
  },
};
</script>