<template>
    <div>
        <h2>自定义事件:我是子组件2</h2>
        <button @click="handler">向父组件传值,自定义事件xxx</button>
        <br>
        <br>
        <button @click="$emit('click', '321', 'world hello')">向父组件传值,自定义事件click</button>
    </div>
</template>

<script lang="ts" setup>
// 可以使用 defineEmits 返回函数触发自定义事件
// defineEmits 方法不需要引入直接使用

let $emit = defineEmits(['xxx', 'click']) 

let handler = () => {
    $emit('xxx', 123, 'hello world')
}
</script>

<style scoped>

</style>