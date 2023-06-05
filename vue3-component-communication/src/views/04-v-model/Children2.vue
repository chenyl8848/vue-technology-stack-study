<template>
  <div class="children2">
    <h2>我是子组件2</h2>
    <h3>同时绑定多个v-model</h3>
    <button @click="handler">pageNo: {{ pageNo }}</button>
    <br />
    <br />
    <button @click="$emit('update:pageSize', pageSize + 10)">pageSize: {{ pageSize }}</button>
  </div>
</template>

<script lang="ts" setup>

let props = defineProps(['pageNo', 'pageSize'])
let $emit = defineEmits(['update:pageNo', 'update:pageSize'])

const handler = () => {
  $emit('update:pageNo', props.pageNo + 1)
}

</script>

<style scoped>
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
</style>