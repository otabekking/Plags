<template>
  <header>
    <nav class="header">
      <h1 class="cloud_title">Asosiy fayllar</h1>
    </nav>
  </header>
  <div class="cloud_main">
    <div class="cloud">
      <div class="cloud_inner">
        <img class="cloud_img" :src="require('@/assets/Cloud.png')" />
        <h3 class="cloud_text">Drag Drop your files here</h3>
        <h3 class="cloud_text">OR</h3>
        <button class="cloud_btn">Browse files</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CloudPlag",
  components: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Poppins:wght@200&family=Roboto&display=swap");
header {
  background: #6941c6;
  height: 128px;
  padding: 0 5px;
}
.header {
  position: relative;
  .cloud_title {
    font-family: "Inter";
    font-size: 36px;
    line-height: 54px;
    color: #ffffff;
    position: absolute;
    top: 35px;
    left: 125px;
  }
}
.cloud_main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
  .cloud {
    width: 925px;
    height: 372px;
    background: #ffffff;
    box-shadow: 0px 0px 130px 30px rgba(16, 24, 40, 0.03);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    .cloud_inner {
      width: 877px;
      height: 324px;
      background: #ffffff;
      border: 1px dashed rgba(143, 144, 166, 0.5);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .cloud_text {
        font-family: "Inter";
        font-style: normal;
        font-size: 24px;
        line-height: 54px;
        font-weight: 400;
      }
      .cloud_btn {
        width: 265px;
        height: 56px;
        border: none;
        background: #7f56d9;
        box-shadow: 0px 14px 30px rgba(127, 86, 217, 0.15);
        border-radius: 8px;
        color: #ffffff;
        font-size: 16px;
        line-height: 22px;
        cursor: pointer;
      }
    }
  }
}
</style>