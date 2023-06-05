<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <h2>父组件info信息:{{ props.modelValue }}</h2>
    <button @click="handler">同步更新父组件info信息</button>
  </div>
</template>

<script lang="ts" setup>
// 使用defineProps 接收父组件传值
let props = defineProps(["modelValue"]);
console.log(props);

let $emits = defineEmits(['update:modelValue'])

const handler = () => {
  $emits('update:modelValue', 'hello world')
}

</script>

<style scoped>
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
</style>