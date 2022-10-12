<template>
  <div>
    <h1>我是 Home 组件中的内容</h1>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 缓存一个路由组件 include 中的值必须是组件名-->
      <!-- <keep-alive include="News">
        <router-view></router-view>
      </keep-alive> -->

      <!-- 缓存多个组件 -->
      <keep-alive :include="['News', 'Message']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>