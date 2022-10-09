<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: { Count, Person },
  methods: {},
  mounted() {
    console.log(this, "App");
  },
};
</script>

