<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
        @keyup.enter="searchUsers"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("getUserInfo", {
        isLoading: true,
        userList: [],
        isFirst: false,
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功", response, response.data);
          this.$bus.$emit("getUserInfo", {
            isLoading: false,
            userList: response.data.items,
            isFirst: false,
          });
        },
        (error) => {
          console.log("请求失败", error, error.message);
          this.$bus.$emit("getUserInfo", {
            isLoading: false,
            errorMessage: error.message,
          });
        }
      );
    },
  },
};
</script>

<style scoped>
</style>>
