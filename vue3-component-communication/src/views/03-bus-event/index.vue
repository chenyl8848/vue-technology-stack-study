<template>
    <div class="box">
        <h1>我是父组件:全局事件总线</h1>
        <div class="container">
            <Children1></Children1>
            <Children2></Children2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Children1 from './Children1.vue'
import Children2 from './Children2.vue'
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