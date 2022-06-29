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
            <span class="span">0{{ counter }}</span> <span class="span">/</span
            ><span class="span_num">3</span>
          </div>
        </div>
      </div>
    </header>

    <div v-if="step === 1">
      <div v-if="!fileUploded" class="danger_sad">
        <img class="danger_imgs-sad" :src="require('@/assets/Sad.svg')" />
        <h3 class="danger_sad-text">Hali fayl yuklangani yo’q...</h3>
      </div>
      <div v-else class="file">
        <div class="upload_inner">
          <div class="uploder_present_inner">
            <div class="upload_inner-text">
              <div class="logo">
                <img class="logo-img" :src="require('@/assets/doc.svg')" />
              </div>
              <div v-if="dokment" class="doc">
                <p class="doc_text">
                  {{ dokment.file_name }}
                  <span class="logo-text">{{ created_at() }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="present_inner">
            <p class="mb_text">3.4 MB</p>
            <div class="present"><p class="present_text">53%</p></div>
            <div class="pass">
              <div class="pass_inner">
                <button class="show_btn">
                  <img class="show-img" :src="require('@/assets/Show.png')" />
                </button>
              </div>
            </div>
            <div class="download-img">
              <img class="downloader" :src="require('@/assets/Download.png')" />
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
            <div class="input_file">
              <input
                ref="fileInput"
                type="file"
                class="input_upload"
                style="cursor: poninter;"
                @change="uploadFile"
              />
              <button @click="onClick" class="danger_btn">Browse files</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="step === 2">
      <custom-progressbar v-if="percentage < 100" :percentage="percentage" />
      <div v-else-if="percentage === 100 && isSuccessfully"></div>
      <div v-else-if="percentage === 100 && !isSuccessfully"></div>
    </div>
    <div v-else-if="step === 3"></div>
  </div>
</template>

<script>
import axios from "axios";
import CustomProgressbar from "@/components/CustomProgressbar.vue";

export default {
  name: "BaseDraft",
  components: { CustomProgressbar },
  data() {
    return {
      step: 1,
      percentage: 0,
      fileUploded: false,
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    onClick() {
      this.$refs.fileInput.click();
    },
    uploadFile(event) {
      this.step = 2;
      const vm = this;
      const formData = new FormData();
      formData.append("draft", false);
      formData.append("file", event.target.files[0]);
      console.log(event);

      axios
        .post("https://plag.m1.uz/detect/", formData, {
          headers: {
            Authorization: "Bearer" + ` ${localStorage.getItem("accessToken")}`,
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            vm.percentage = percentCompleted;
            // vm.$store.commit('progress/CHANGE_PERCENTAGE', percentCompleted)
          },
        })
        .then((res) => {
          console.log("salom aka", res.data.id);
          this.$router.push("achievement-circle");
          this.isSuccessfully = true;
          this.fileUploded = true;
        })
        .catch((error) => {
          this.fileUploded = false;
          console.error(error);
        });
      // axios
      //   .get("https://plag.m1.uz/detect/", {
      //     headers: {
      //       Authorization: "Bearer" + ` ${localStorage.getItem("accessToken")}`,
      //     },
      //   })
      //   .then((response) => {
      //     this.dataFile = response.data;
      //     this.$router.push("progress-plag");
      //     console.log("salom111", this.dataFile);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    },
  },
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
    margin: 0 auto;
    margin-bottom: 80px;

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

  .danger_sad {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin-top: 103px;
  }

  .danger_sad-text {
    font-family: "Inter";
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }

  .input_file {
    position: relative;
    input {
      opacity: 0;
      visibility: hidden;
      position: absolute;
    }
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
    .logo-img {
      margin-top: 10px;
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

    .present_inner {
      display: flex;
      margin-top: 7px;
    }
  }
}
</style>
