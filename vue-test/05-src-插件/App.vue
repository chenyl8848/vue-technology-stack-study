<template>
  <div id="app">
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  components: { School, Student },
  data() {
    return {};
  },
  methods: {},
};
</script>