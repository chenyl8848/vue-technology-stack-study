<template>
  <div class="grandson">
    <h3>我是孙子组件</h3>
    <p>祖先传下来的汽车:{{ car }}</p>
    <button @click="handler">更换汽车</button>
  </div>
</template>


<script lang='ts' setup>
import { inject } from "vue";

//注入祖先组件提供数据
//需要参数:即为祖先提供数据的 key
let car = inject('CAR')

// 使用 provide-inject 通信可以修改数据
const handler = () => {
  car.value = '自行车'
}


</script>

<style scoped>
.grandson {
  width: 200px;
  height: 200px;
  background: hotpink;
}
</style>