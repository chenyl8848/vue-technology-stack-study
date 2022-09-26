<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <MyFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: [
        { id: "001", title: "唱歌", done: true },
        { id: "002", title: "跳舞", done: false },
        { id: "003", title: "Rap", done: true },
        { id: "004", title: "篮球", done: true },
      ],
    };
  },
  methods: {
    // 添加一个 todo
    addTodo(todoObj) {
      // console.log("App 组件收到 MyHeader 组件传来的数据", todoObj);
      // 将 todoObj 加入到 todos
      this.todos.unshift(todoObj);
    },
    // 处理 todo 勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          // console.log(id, "iddddddddd");
          todo.done = !todo.done;
        }
      });
    },
    // 处理 todo 删除
    deleteTodo(id) {
      if (confirm("确定要删除吗?")) {
        this.todos = this.todos.filter((item) => item.id !== id);
      }
    },
    // 全选所有 或 取消全选
    checkAllTodo(done) {
      this.todos.forEach((item) => {
        item.done = done;
      });
    },
    // 清除已完成
    clearAllTodo() {
      this.todos = this.todos.filter((item) => !item.done);
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>