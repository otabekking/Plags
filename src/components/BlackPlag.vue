<template>
  <div class="black_main">
    <nav class="header"></nav>
    <div class="blacks">
      <div class="black">
        <h1 class="black_title">Antiplagiat tizimi</h1>
        <div class="qoralama">
          <div class="black_btn">
            <button @click="() => $router.push('black-file')">Qoralama</button>
          </div>
          <div class="black_btn">
            <button @click="() => $router.push('cloud-plag')">Asosiy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackPlag",
  components: {},
  methods: {
    goToBlack() {
      this.$router.push({ name: "BlackFile" }),
        this.$router.push({ name: "MainPlag" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap");
.black_main {
  height: 100vh;
  background: #f9fafb;
  .blacks {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(60%);
  }

  .black_title {
    font-family: "Inter";
    font-weight: bolder;
    font-size: 40px;
    line-height: 54px;
    text-align: center;
    margin-top: 20px;
  }

  .header {
    height: 8px;
    background: #6941c6;
  }

  .black {
    width: 682px;
    height: 333px;
    background: #ffffff;
    border: 1px solid rgba(16, 24, 40, 0.1);
    box-shadow: 0px 0px 130px 30px rgba(16, 24, 40, 0.03);
    border-radius: 16px;
    padding: 20px;
    // margin-top: 200px;
    background: red($color: #000000);

    .qoralama {
      display: flex;
      justify-content: space-evenly;
      align-self: flex-end;
      margin-top: 100px;
    }
    button {
      width: 264px;
      height: 56px;
      background: rgba(127, 86, 217, 0.1);
      color: #7f56d9;
      border: none;
      border-radius: 8px;
      font-family: "Inter";
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      cursor: pointer;

      &:hover{
        background: #D9C7FF;
         transition: 0.3s ease all;
      }
    }
  }
}
</style>