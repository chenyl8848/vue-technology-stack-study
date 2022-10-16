<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我 ++</button>
  <h2>{{ person }}</h2>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <h2 v-show="person.car">车辆：{{ person.car }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的 person</button>
  <button @click="addCar">添加一台车</button>
  <button @click="person.car.name += '@'">修改车的名字</button>
  <button @click="changeCarPrice">修改车的价格</button>
</template>

<script>
import { ref, reactive, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");
    let sum = ref(0);

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function showRawPerson() {
      const p = toRaw(person);
      p.age++;
      console.log(p);
    }

    function addCar() {
      let car = {
        name: "奔驰",
        price: 40,
      };
      // 添加的 car 是响应式数据
      // person.car = car;

      // 添加的 car 不是响应式数据，但是数据可以修改
      person.car = markRaw(car);
    }

    function changeCarPrice() {
      person.car.price++;
      console.log(person.car);
    }

    return {
      sum,
      person,
      showRawPerson,
      addCar,
      changeCarPrice,
    };
  },
};
</script>