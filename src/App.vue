<template>
  <div id="app">
    <Login v-if="$route.path == '/'" />

    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./components/LoginPlag.vue";
export default {
  name: "app",
  components: {
    Login,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
</style>
