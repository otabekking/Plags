<template>
  <div class="finsih">
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
  </div>
</template>

<script>
export default {
  name: "FinishPlag",
};
</script>

<style lang="scss" scoped>
</style>