<template>
  <div>
    <ul class="todo-main">
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" />
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  components: { MyItem },
  props: ["todos"],
  data() {
    return {};
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>