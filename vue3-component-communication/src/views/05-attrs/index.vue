<template>
  <div class="box">
    <h1>我是父组件:attrs</h1>
    <el-button type="primary" size="large" :icon="Edit"></el-button>
    <!-- 自定义组件 -->
    <!-- 实现将光标放在按钮上，会有文字提示 -->
    <HintButton type="primary" size="large" :icon="Edit" @click="handler" @xxx="handler" :title="title"></HintButton>
  </div>
</template>

<script lang='ts' setup>
import { Edit } from "@element-plus/icons-vue";
import { ref } from "vue";
import HintButton from "./HintButton.vue";

const handler = () => {
  alert(12306)
}

let title = ref('编辑')

</script>
<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}
</style>