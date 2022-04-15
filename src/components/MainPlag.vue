<template>
  <div class="download">
    <header>
      <nav class="header">
        <h1 class="cloud_title">Asosiy fayllar</h1>
      </nav>
    </header>
    <div class="uplod">
      <div class="upload_inner">
        <h3 class="Uploaded_title">Uploaded files</h3>
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
                <img
                  class="downloader"
                  :src="require('@/assets/Download.png')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPlag",
  components: {},
};
</script>
<style lang="scss" scoped>
.download {
  height: 100vh;
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
  .Uploaded_title{
    font-family: "Inter";
    font-size: 24px;
  }
  .uploder_present {
    width: 925px;
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
  .uplod {
    display: flex;
    justify-content: center;
  }
  .present_inner {
    display: flex;
    margin-top: 7px;
  }
  .doc_text {
    font-family: "Inter";
    font-size: 16px;
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
</style>