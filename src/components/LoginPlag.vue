<template>
  <div class="logins">
    <nav class="header"></nav>
    <div class="login">
      <form @submit.prevent>
        <h1 class="plag_title">PlagSyS kirish</h1>
        <div class="form">
          <div style="display: flex" class="login-form__wrapper">
            <img class="logo-img" :src="require('@/assets/loginUser.png')" />
            <input
              class="login_name"
              type="text"
              v-model="name"
              placeholder="Login"
            />
          </div>
          <div class="login-password__wrapper">
            <img
              class="logo-img"
              :src="require('@/assets/loginPassword.png')"
            />
            <input
              class="password_login"
              type="password"
              v-model="password"
              placeholder="Parol"
            />
          </div>
          <!-- <button @click="goToBlack" class="plag_login">Kirish</button> -->
          <button @click="signUp">Kirish</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPlag",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    goToBlack() {},
    async signUp() {
      try {
        const {
          data: { access_token, refresh_token, user },
        } = await axios.post("https://plag.m1.uz/login/", {
          username: this.name,
          password: this.password,
        });
        console.log("helloo ");

        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(access_token);
        this.$router.push({ name: "BlackPlag" });
      } catch (error) {
        console.log("xato", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");

.header {
  height: 8px;
  background: #6941c6;
}
.plag_title {
  text-align: center;
  font-family: "Inter";
  font-size: 40px;
  line-height: 54px;
  font-weight: bold;
  padding-bottom: 29px;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(60%);
}
.form {
  display: flex;
  flex-direction: column;
}
input {
  height: 56px;
  border: 1px solid rgba(143, 144, 166, 0.25);
  border-radius: 8px;
  margin-bottom: 20px;
  outline: none;

  background: #f9fafb;
}

.login-form__wrapper {
  position: relative;
  display: flex;
}

.login-form__wrapper img {
  position: absolute;
  top: 37%;
  transform: translateY(-50%);
  left: 20px;
  z-index: 2;
}

.login-form__wrapper input {
  padding-left: 80px;
  width: 407px;
}
.login-password__wrapper input {
  padding-left: 80px;
  width: 407px;
}

.login-form__wrapper::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 55px;
  left: 56px;
  background: #e2e2e7;
  z-index: 2;
}
.login-password__wrapper::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 55px;
  left: 56px;
  background: #e2e2e7;
  z-index: 2;
}
.login-password__wrapper {
  display: flex;
  position: relative;
}
.login-password__wrapper img {
  position: absolute;
  top: 37%;
  transform: translateY(-50%);
  left: 20px;
  z-index: 2;
}
.password_login {
  padding: 8px;
  position: relative;
}
.login_name {
  padding: 8px;
  position: relative;
}
button {
  width: 407px;
  height: 56px;
  background: #7f56d9;
  color: #ffff;
  margin-bottom: 34px;
  box-shadow: 0px 14px 30px rgba(127, 86, 217, 0.15);
  border-radius: 8px;
  font-family: "Inter";
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background: #bfaaec;
    transition: 0.3s ease all;
    border: none;
  }
}
</style>