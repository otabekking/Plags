<template>
  <div class="again">
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
    <div class="progress_main">
      <div class="progress_inner">
        <div class="again_inner">
          <div class="again_install">
            <button @click="() => $router.push('')" class="again_instaler">
              <img
                class="install_imgs"
                :src="require('@/assets/Install.svg')"
              />
            </button>
          </div>
          <div class="again_circle">
            <img class="install_imgs" :src="require('@/assets/Group.svg')" />
          </div>
          <div class="again_cancel">
            <button
              @click="() => $router.push('black-file')"
              class="again_canceler"
            >
              <img class="cancel_imger" :src="require('@/assets/Cancel.svg')" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AgainPlag",
};
</script>
<style lang="scss" scoped>
.again {
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
  }

  .progress_main {
    display: flex;
    justify-content: center;
    align-items: center;
    .progress_inner {
      width: 590px;
      height: 329px;
      background: #ffffff;
      border: 1px solid rgba(16, 24, 40, 0.1);
      box-shadow: 0px 0px 130px 30px rgba(16, 24, 40, 0.03);
      border-radius: 16px;
      margin-top: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .again_inner {
    display: flex;
    justify-content: center;
    align-items: center;

    .again_instaler {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      margin-right: 15px;
      padding-top: 5px;
      cursor: pointer;

      &:hover {
        background: #d9c7ff;
        transition: 0.7 ease all;
      }
    }
    .again_canceler {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      margin-left: 15px;
      padding-top: 5px;
      cursor: pointer;

      &:hover {
        background: #d9c7ff;
        transition: 0.3 ease all;
      }
    }
  }
}
</style>