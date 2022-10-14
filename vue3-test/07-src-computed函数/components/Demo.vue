<template>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "@vue/reactivity";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    // 计算属性-简写
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // 计算属性-完整写法（考虑读和写）
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const arr = value.split("-");
        person.firstName = arr[0];
        person.lastName = arr[1];
      },
    });

    return {
      person,
      // fullName,
    };
  },
  beforeCreate() {
    console.log("-----beforeCreate-----");
  },
};
</script>