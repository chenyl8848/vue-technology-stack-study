<template>
    <div class="box">
        <h1>自定义事件:我是父组件</h1>
        <!-- 原生 DOM 事件 -->
        <pre @click="handler1">大江东去，浪淘尽</pre>
        <pre @click="handler2(1,2,3,$event)">千古风流人物</pre>

        <!-- 
            vue2 框架当中:这种写法自定义事件,可以通过 .native 修饰符变为原生 DOM 事件
            vue3 框架下面写法其实即为原生 DOM 事件
            vue3:原生的 DOM 事件不管是放在标签身上、组件标签身上都是原生 DOM 事件
         -->
        <Children1 @click="handler3"></Children1>

        <!-- 绑定自定义事件 xxx:实现子组件给父组件传递数据 -->
        <Children2 @xxx="handler4" @click="handler5"></Children2>
    </div>
</template>

<script lang="ts" setup>
import Children1 from './Children1.vue'
import Children2 from './Children2.vue'

let handler1 = (event) => {
    console.log(event)
}

let handler2 = (x, y, z, $event) => {
    console.log(x, y, z, $event)
}

let handler3 = () => {
    console.log('原生 DOM 事件')
}

let handler4 = (params1, params2) => {
    console.log(params1, params2)
}

let handler5 = (params1, params2) => {
    console.log(params1, params2)
}
</script>

<style scoped>
.box {
    width: 1000px;
    height: 500px;
    background: hotpink;
}
</style>