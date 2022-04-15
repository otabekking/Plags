<template>
  <div>
    <Login />
    <Black />
    <Cloud />
    <Main />
  </div>
</template>

<script>
import Login from "./components/LoginPlag.vue";
import Black from "./components/BlackPlag.vue";
import Cloud from "./components/CloudPlag.vue";
import Main from "./components/MainPlag.vue";
export default {
  name: "app",
  components: {
    Black,
    Login,
    Cloud,
    Main,
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
