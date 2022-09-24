<template>
  <div id="app">
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
// 如果样式的 id 一样时，谁先引入就会渲染谁的样式
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  components: { School, Student },
  data() {
    return {};
  },
  methods: {},
};
</script>