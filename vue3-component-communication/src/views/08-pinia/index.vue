<template>
  <div class="box">
    <h1>我是父组件:pinia</h1>
    <div class="container">
        <Children1></Children1>
        <Children2></Children2>
    </div>
  </div>
</template>


<script lang='ts' setup>
import Children1 from './Children1.vue'
import Children2 from './Children2.vue'

//vuex:集中式管理状态容器,可以实现任意组件之间通信！！！
//核心概念:state、mutations、actions、getters、modules

//pinia:集中式管理状态容器,可以实现任意组件之间通信！！！
//核心概念:state、actions、getters
//pinia写法:选择器API、组合式API


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