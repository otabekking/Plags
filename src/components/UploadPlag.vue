<template>
  <div class="upload">
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
            <span class="span">1</span> <span class="span">/</span
            ><span class="span_num">3</span>
          </div>
        </div>
      </div>
    </header>

    <div class="upload_inner">
      <div class="upload_texter">
        <h3 class="Uploaded_title">Uploaded files</h3>
      </div>
      <div class="uploder_present">
        <div class="uploder_present_inner">
          <div class="upload_inner-text">
            <div class="logo">
              <img class="logo-img" :src="require('@/assets/doc.svg')" />
            </div>
            <p class="doc_text">
              Sarvardiplomishi.doc
              <span class="logo-text">14:03 10.03.2022 </span>
            </p>
          </div>
          <div class="present_inner">
            <p class="mb_text">3.4 MB</p>
            <div class="present"><p class="present_text">53%</p></div>
            <div class="pass">
              <div class="pass_inner">
                <img class="show-img" :src="require('@/assets/Show.png')" />
              </div>
            </div>
            <div class="download-img">
              <img class="downloader" :src="require('@/assets/Download.png')" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cloud_main">
      <div class="cloud">
        <div class="cloud_inner">
          <img class="danger_img" :src="require('@/assets/Cloud.png')" />
          <h3 class="danger_text">Drag Drop your files here</h3>
          <h3 class="danger_text">OR</h3>
          <button
            @click="() => $router.push('progress-plag')"
            class="danger_btn"
          >
            Browse files
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadPlag",
};
</script>

<style lang="scss" scoped>
.upload {
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
  .upload_inner {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .Uploaded_title {
      font-family: "Inter";
      font-size: 19px;
      line-height: 24px;
      color: #8f90a6;
      font-weight: 400;
      padding-bottom: 20px;
    }
    .upload_texter {
      margin-right: 50%;
    }
    .uploder_present {
      width: 900px;
      height: 64px;
      background: #ffffff;
      border: 1px solid rgba(16, 24, 40, 0.07);
      box-sizing: border-box;
      border-radius: 12px;
      padding: 0 15px;
      .uploder_present_inner {
        display: flex;
        justify-content: space-between;
      }
    }
    .doc_text {
      font-family: "Inter";
      font-size: 15px;
      line-height: 24px;
      margin-left: 37px;
      margin-top: -39px;

      .logo-text {
        display: block;
        font-family: "Inter";
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      }
    }
    .uplod {
      display: flex;
      justify-content: center;
      margin-top: 60px;
    }
    .present_inner {
      display: flex;
      margin-top: 7px;
    }
    .doc_text {
      font-family: "Inter";
      font-size: 15px;
      line-height: 24px;
      margin-left: 37px;
      margin-top: -39px;

      .logo-text {
        display: block;
        font-family: "Inter";
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      }
    }
    .logo-img {
      margin-top: 10px;
    }
    .mb_text {
      font-family: "Inter";
      font-size: 15px;
      line-height: 24px;
      margin-right: 178px;
      margin-top: 18px;
    }
    .present {
      width: 48px;
      height: 48px;
      border-radius: 37px;
      background-color: #ffebeb;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 14px;
      .present_text {
        font-family: "Inter";
        font-size: 14px;
        color: red;
      }
    }
    .pass {
      width: 48px;
      height: 48px;
      background: #f2eefb;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 14px;
    }
    .download-img {
      width: 48px;
      height: 48px;
      background: #f2eefb;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .cloud_main {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .cloud {
      width: 900px;
      height: 290px;
      background: #ffffff;
      box-shadow: 0px 0px 130px 30px rgba(16, 24, 40, 0.03);
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px;

      .cloud_inner {
        width: 850px;
        height: 250px;
        background: #ffffff;
        border: 1px dashed rgba(143, 144, 166, 0.5);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
          transition: 0.7s ease all;
          border: none;
        }
      }
      .danger_img {
        opacity: 0.1;
      }
    }
  }
}
</style>