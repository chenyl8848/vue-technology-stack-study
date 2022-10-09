<template>
  <div>
    <h1>当前求和值为：{{ sum }}</h1>
    <h3>对求和值放大10倍：{{ bigSum }}</h3>
    <h3>我在 {{ school }} 学习 {{ subject }}</h3>
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
    // 靠程序员自己去写计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    // bigSum() {
    //   return this.$store.getters.bigSum
    // }

    // 借助 mapState 生成计算属性，从 state 中读取数据 （对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),

    // 借助 mapState 生成计算属性，从 state 中读取数据 （数组写法）
    ...mapState(["sum", "school", "subject"]),

    // 借助 mapGetters 生成计算属性，从 getters 中获取数据 （对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),

    // 借助 mapGetters 生成计算属性，从 getters 中获取数据 （数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 程序员亲自写方法
    // increment() {
    //   this.$store.commit("increment", this.n);
    // },

    // decrement() {
    //   this.$store.commit("decrement", this.n);
    // },

    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", this.n);
    // },

    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n);
    // },

    // 借助 mapMutations 生成对应的方法，方法会调用 commit 去联系 mutations （对象写法）
    // ...mapMutations({ increment: "increment", decrement: "decrement" }),

    // 借助 mapMutations 生成对应的方法，方法会调用 commit 去联系 mutations （数组写法）
    ...mapMutations(["increment", "decrement"]),

    // 借助 mapActions 生成对应的方法，方法会调用 dispatch 去联系 actions （对象写法）
    // ...mapActions({
    //   incrementOdd: "incrementOdd",
    //   incrementWait: "incrementWait",
    // }),

    // 借助 mapActions 生成对应的方法，方法会调用 dispatch 去联系 actions （数组写法）
    ...mapActions(["incrementOdd", "incrementWait"]),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>

