<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <h3>count:{{ infoStore.count }}</h3>
    <button @click="handler">修改infoStore中的数据</button>
    <h3>total:{{ infoStore.total }}</h3>
  </div>
</template>


<script lang='ts' setup>
import useInfoStore from "../../store/module/info";

// 获取小仓库对象
let infoStore = useInfoStore()

const handler = () => {
  //仓库调用自身的方法去修改仓库的数据
  infoStore.updateCount(99, 100)
}

</script>

<style scoped>
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
</style>