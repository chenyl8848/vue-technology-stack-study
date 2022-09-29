<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todoObj.done"
          @change="handleCheck(todoObj.id)"
        />
        <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      </label>
      <input
        type="text"
        :value="todoObj.title"
        v-show="todoObj.isEdit"
        @blur="handleBlur(todoObj, $event)"
        ref="inputTitle"
      />
      <button class="btn btn-danger" @click="handleDelete(todoObj.id)">
        删除
      </button>
      <button
        v-show="!todoObj.isEdit"
        class="btn btn-edit"
        @click="handleEdit(todoObj)"
      >
        编辑
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
    // 编辑
    handleEdit(todoObj) {
      // if (todoObj.hasOwnProperty("isEdit")) {
      if (Object.prototype.hasOwnProperty.call(todoObj, "isEdit")) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 焦点移开时保存修改数据
    handleBlur(todoObj, event) {
      todoObj.isEdit = false;
      if (!event.target.value.trim()) return alert("输入不能为空!");
      this.$bus.$emit("updateTodo", todoObj.id, event.target.value);
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