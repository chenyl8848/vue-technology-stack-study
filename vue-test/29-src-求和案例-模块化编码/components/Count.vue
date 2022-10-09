<template>
  <div>
    <h1>当前求和值为：{{ sum }}</h1>
    <h3>对求和值放大10倍：{{ bigSum }}</h3>
    <h3>我在 {{ school }} 学习 {{ subject }}</h3>
    <h3 style="color: red">Person 组件的总人数是：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button> -->

    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 借助 mapState 生成计算属性，从 state 中读取数据 （数组写法）
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),

    // 借助 mapGetters 生成计算属性，从 getters 中获取数据 （数组写法）
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    // 借助 mapMutations 生成对应的方法，方法会调用 commit 去联系 mutations （数组写法）
    ...mapMutations("countAbout", ["increment", "decrement"]),

    // 借助 mapActions 生成对应的方法，方法会调用 dispatch 去联系 actions （数组写法）
    ...mapActions("countAbout", ["incrementOdd", "incrementWait"]),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>

