<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成 {{ doneTotal }}</span> / 全部 {{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "clearAllTodo"],
  data() {
    return {};
  },
  computed: {
    // 统计全部已完成的数量
    doneTotal() {
      //   return this.todos.reduce((pre, current) => {
      //     return pre + (current.done ? 1 : 0);
      //   }, 0);

      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    // 统计是否已经全部完成
    isAll: {
      get() {
        return this.doneTotal === this.todos.length && this.doneTotal > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    // 勾选所有
    checkAll(e) {
      this.checkAllTodo(e.target.checked);
    },
    // 清除已完成
    clearAll() {
      this.clearAllTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>