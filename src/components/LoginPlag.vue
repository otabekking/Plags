<template>
  <div class="container">
    <div class="header"></div>

    <div class="login">
      <form>
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
          <button class="plag_login">Kirish</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPlag",
  components: {},
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
  height: 100vh;
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
}
</style>