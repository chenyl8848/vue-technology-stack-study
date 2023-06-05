<template>
  <div class="com">
    <h1>
      各种Vue组件间通信/传值
      <span style="color: red;">非常重要, 面试必备</span>
    </h1>

    <div>
      <h2 style="display: inline">演示:</h2>&nbsp;&nbsp;
      <router-link to="/01-props">props</router-link>&nbsp;&nbsp;
      <router-link to="/02-custom-event">custom event</router-link>&nbsp;&nbsp;
      <router-link to="/03-bus-event">bus event</router-link>&nbsp;&nbsp;
      <router-link to="/04-v-model">v-model</router-link>&nbsp;&nbsp;
      <router-link to="/05-attrs">useAttrs</router-link>&nbsp;&nbsp;
      <router-link to="/06-ref-parent">ref$parent</router-link>&nbsp;&nbsp;
      <router-link to="/07-provide-inject">provide-inject</router-link>&nbsp;&nbsp;
      <router-link to="/08-pinia">pinia</router-link>&nbsp;&nbsp;
      <router-link to="/09-slot">slot</router-link>&nbsp;&nbsp;
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'App',
  }
</script>
<script lang="ts" setup>
  
</script>
<style lang="less" scoped>
  .com {
    margin: 10px;
    a {
      font-size: 16px;
      margin-right: 5px;
      &.router-link-active {
        color: red;
      }
    }
  }
</style>
<style>
  .box {
    border: solid 1px #aaa;
    margin: 5px;
    padding: 5px;
  }
</style>