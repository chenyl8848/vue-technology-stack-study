<template>
  <div>
    <button @click="getStudentInfo">获取学生信息</button>
    <button @click="getCarInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    // 获取学生信息
    getStudentInfo() {
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },

    // 获取汽车信息
    getCarInfo() {
      axios.get("http://localhost:8080/hello/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>