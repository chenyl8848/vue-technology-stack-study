<template>
    <div>
        <h2>自定义事件:我是子组件1</h2>
        <button @click.stop = "handler">点击我也执行</button>
    </div>
</template>

<script lang="ts" setup>
let handler = () => {
    console.log('点击我也执行')
}
</script>

<style scoped>

</style>