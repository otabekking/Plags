<template>
  <div class="danger">
    <header>
      <div class="header">
        <div class="text">
          <h1 class="header_text">Qoralama fayllar</h1>
        </div>
        <div class="header_warn">
          <p class="header_warn-text">
            <img class="danger_imgs" :src="require('@/assets/Danger.svg')" />
            24 soat ichida 3 marta fayl yuklash mumkin!
          </p>
          <div class="sricle">
            <span class="span">0</span> <span class="span">/</span
            ><span class="span_num">3</span>
          </div>
        </div>
      </div>
    </header>
    <div class="danger_inner">
      <div class="danger_sad">
        <img class="danger_imgs-sad" :src="require('@/assets/Sad.svg')" />

        <h3 class="danger_sad-text">Hali fayl yuklangani yo’q...</h3>
      </div>
      <div class="cloud_main">
        <div class="cloud">
          <div class="cloud_inner">
            <img class="danger_img" :src="require('@/assets/Cloud.png')" />
            <h3 class="danger_text">Drag Drop your files here</h3>
            <h3 class="danger_text">OR</h3>
            <button
              @click="() => $router.push('progress-plag')"
              class="danger_btn">
              Browse files
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackFile",
  data() {},
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
.danger {
  height: 100vh;
  background: #f9fafb;

  header {
    background: #6941c6;
    height: 95px;
    padding: 0 5px;

    .header {
      display: flex;
      justify-content: space-between;
      transform: translateY(30px);
      .header_text {
        font-family: "Inter";
        font-size: 32px;
        line-height: 36px;
        color: #ffffff;
        margin-left: 100px;
      }
    }
    .header_warn {
      display: flex;
      transform: translateX(-100px);

      .sricle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        margin-top: -16px;
        .span {
          font-family: "Inter";
          font-size: 20px;
          line-height: 24px;
          color: #ffffff;
          padding: 2px;
        }

        .span_num {
          font-family: "Inter";
          font-size: 20px;
          line-height: 24px;
          color: #b8aed1;
          padding: 2px;
        }
      }
      .header_warn-text {
        font-family: "Inter";
        font-size: 16px;
        font-weight: 500;
        line-height: 18px;
        color: #ffffff;
        margin-right: 50px;
        margin-top: 12px;
        position: relative;
        .danger_imgs {
          position: absolute;
          left: -35px;
          top: -6px;
        }
      }
    }
  }
  .cloud_main {
    margin-top: 80px;
  }
  .cloud {
    width: 800px;
    height: 290px;
    background: #ffffff;
    box-shadow: 0px 0px 130px 30px rgba(16, 24, 40, 0.03);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;

    .cloud_inner {
      width: 750px;
      height: 250px;
      background: #ffffff;
      border: 1px dashed rgba(143, 144, 166, 0.5);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .danger_inner {
    background: #f9fafb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
  }
  .danger_text {
    font-family: "Inter";
    font-style: normal;
    font-size: 20px;
    line-height: 44px;
    font-weight: 400;
  }
  .danger_btn {
    width: 250px;
    height: 50px;
    border: none;
    background: #7f56d9;
    box-shadow: 0px 14px 30px rgba(127, 86, 217, 0.15);
    border-radius: 8px;
    color: #ffffff;
    font-size: 15px;
    line-height: 18px;
    cursor: pointer;
    &:hover {
      background: #bfaaec;
      transition: 0.3s ease all;
      border: none;
    }
  }
  .danger_img {
    opacity: 0.1;
  }
  .danger_sad-text {
    font-family: "Inter";
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  .danger_imgs-sad {
    margin-left: 75px;
  }
}
</style>