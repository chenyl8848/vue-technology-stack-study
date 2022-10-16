<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->

  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { customRef, ref } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个 ref，命名为 myRef
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从 myRef 这个容器中读取了数据，把 ${value} 给他`);
            // 通知 Vue 追踪 value 的变化（提前和 get 商量一下，让他认为这个 value 是有用的）
            track();
            return value;
          },
          set(newValue) {
            console.log(
              `有人把 myRef 这个容器中的数据修改了，新值是：${newValue} `
            );
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              // 通知 Vue 去重新解析模板
              trigger();
            }, delay);
          },
        };
      });
    }

    // 使用 Vue 提供的 ref
    // let keyWord = ref("hello");

    // 使用自定义的 ref
    let keyWord = myRef("hello", 500);

    return {
      keyWord,
    };
  },
};
</script>


