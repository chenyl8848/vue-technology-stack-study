<template>
  <div class="container">
    <Category title="美食">
      <template scope="data">
        <ul>
          <li v-for="(game, index) in data.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="data">
        <ol>
          <li v-for="(game, index) in data.games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="电影">
      <template slot-scope="data">
        <h4 v-for="(game, index) in data.games" :key="index">{{ game }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  methods: {},
};
</script>

<style scoped>
.container,
.footer {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>