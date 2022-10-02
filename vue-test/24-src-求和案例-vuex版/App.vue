<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
  methods: {},
  mounted() {
    console.log(this, "App");
  },
};
</script>

