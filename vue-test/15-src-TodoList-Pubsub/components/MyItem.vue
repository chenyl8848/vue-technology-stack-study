<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todoObj.done"
          @change="handleCheck(todoObj.id)"
        />
        <span>{{ todoObj.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todoObj.id)">
        删除
      </button>
    </li>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todoObj"],
  data() {
    return {};
  },
  methods: {
    // 勾选 或者 取消勾选
    handleCheck(id) {
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      // this.deleteTodo(id);
      // this.$bus.$emit("deleteTodo", id);

      // 发布消息
      pubsub.publish("deleteTodo", id);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>