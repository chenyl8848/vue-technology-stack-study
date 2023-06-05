<template>
  <div class="box">
    <h1>我是父组件:ref parent</h1>
    <h2>父组件拥有财产:{{ money }}</h2>
    <button @click="handler">向子组件1拿100元</button>
    <div class="container">
        <Children1 ref="children1"></Children1>
        <Children2 ref="children2"></Children2>
    </div>
  </div>
</template>


<script lang='ts' setup>
//ref:可以获取真实的DOM节点,可以获取到子组件实例VC
//$parent:可以在子组件内部获取到父组件的实例
import Children1 from './Children1.vue'
import Children2 from './Children2.vue'

import {ref} from 'vue'

let money = ref(10000)

// 获取子组件的实例
let children1 = ref()
let children2 = ref()
console.log(children1, children2)

//父组件内部按钮点击回调
const handler = () => {
    money.value += 100
    children1.value.money -= 100
}

defineExpose({
    money
})

</script>

<style scoped>

.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
    display: flex;
    justify-content: space-between;
}
</style>