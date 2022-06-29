<template>
  <div class="download">
    <header>
      <nav class="header">
        <h1 class="cloud_title">Asosiy fayllar</h1>
      </nav>
    </header>
    <div class="main">
      <div class="uplod">
        <div class="upload_inner">
          <h3 class="Uploaded_title">Uploaded files</h3>
          <div class="uploder_present">
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
              <div class="present_inner">
                <p class="mb_text">3.4 MB</p>
                <div class="present"><p class="present_text">53%</p></div>
                <div class="pass">
                  <div class="pass_inner">
                    <button class="show_btn">
                      <img
                        class="show-img"
                        :src="require('@/assets/Show.png')"
                      />
                    </button>
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

      <div class="selector">
        <div class="selection">
          <div class="slectors">
            <h3 class="send_text">Send file</h3>
            <div class="selection_inner">
              <div class="selection_title">
                <ul>
                  <li v-for="item in items" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div class="selection_form">
                <h3 class="selection-text">Abulayev Abdulla</h3>
                <div class="slectet_wrapper">
                  <select class="selectioner" @click="select">
                    <option value="" disabled selected hidden>
                      O'qtuvchni tanlang
                    </option>
                    <option
                      v-for="option in options"
                      :value="option.name"
                      :key="option.id"
                    >
                      {{ option.name }}
                    </option>
                  </select>
                </div>

                <div class="slectet_wrapper">
                  <select class="selectioner_2" @click="subjectSelection">
                    <option value="" disabled selected hidden>
                      Fanni tanlang
                    </option>
                    <option
                      v-for="subject in subjects"
                      :value="subject.value"
                      :key="subject"
                    >
                      {{ subject }}
                    </option>
                  </select>
                </div>
                <div class="btn">
                  <button @click="sendSucessData" class="selection_btn">
                    Jo‘natish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "MainPlag",
  components: {},
  data() {
    return {
      items: ["Talaba:", "O‘qituvchi:", "Fan:"],
      options: [
        { id: 1, name: "Anvarov Anvar" },
        { id: 2, name: "Abdulazizov Otabek" },
        { id: 3, name: "Abdullayev Abdulla" },
      ],
      subjects: ["Kriptografiya 1", "Dasturlash 2", "Tizim xavfsizlgi 3"],
      dokment: "",
      params: this.$route.params.id,
      response: "",
      selected: "",
    };
  },
  created() {
    this.getText();
  },

  methods: {
    ...mapActions(["teacherLine"]),
    select(event) {
      console.log(event.target.value);
      this.selecteder = event.target.value;
    },
    subjectSelection(event) {
      console.log(event.target.value);
      this.selected = event.target.value;
    },
    created_at() {
      const current = new Date();
      const date = `${current.getDate()}.${
        current.getMonth() + 1
      }.${current.getFullYear()}`;
      return date;
    },

    getText() {
      axios
        .get(`https://plag.m1.uz/detect/${this.params}`, {
          headers: {
            Authorization: "Bearer" + ` ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          this.dokment = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sendSucessData() {
      const data = {
        id: this.$route.params.id,
        selected: this.selected,
        selecteder: this.selecteder,
        token: localStorage.getItem("access_token"),
      };
      console.log("salom");
      this.$store.dispatch("sendData", data).then(() => {
        this.$router.push({ name: "SuccessPlag" });
        this.teacherLine(this.selecteder);
      });
    },
  },
  watch: {
    selecteder: function (newAge) {
      console.log(newAge);
    },
  },
};
</script>
<style lang="scss" scoped>
.download {
  height: 100vh;
  background: #f9fafb;

  header {
    background: #6941c6;
    height: 95px;
    padding: 0 5px;
  }
  .header {
    position: relative;
    .cloud_title {
      font-family: "Inter";
      font-size: 32px;
      line-height: 36px;
      color: #ffffff;
      position: absolute;
      top: 30px;
      left: 125px;
    }
  }
  .Uploaded_title {
    font-family: "Inter";
    font-size: 19px;
    line-height: 24px;
    color: #8f90a6;
    font-weight: 400;
    padding-bottom: 20px;
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
  .selection {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .selection-text {
      font-family: "Inter";
      font-weight: 300;
      font-size: 17px;
      line-height: 22px;
      margin-left: -60%;
    }

    .selection_inner {
      background: #ffffff;
      box-shadow: 0px 0px 130px 30px rgba(16, 24, 40, 0.03);
      border-radius: 16px;
      width: 900px;
      height: 350px;
      display: flex;
      justify-content: space-between;
      padding: 20px;

      .selection_btn {
        width: 250px;
        height: 50px;
        display: block;
        background: #7f56d9;
        box-shadow: 0px 14px 30px rgba(127, 86, 217, 0.15);
        border-radius: 8px;
        color: #ffffff;
        font-size: 15px;
        line-height: 22px;
        border: none;
        cursor: pointer;

        &:hover {
          background: #bfaaec;
          transition: 0.3s ease all;
          border: none;
        }
      }
    }
    .selectioner {
      width: 282px;
      height: 42px;
      display: block;
      background: #f9fafb;
      border: 1px solid rgba(143, 144, 166, 0.25);
      border-radius: 8px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      line-height: 22px;
      padding: 6px;
      margin-top: 42px;
      margin-left: -60%;
      outline: none;
      appearance: none;
    }

    .selectioner_2 {
      width: 282px;
      height: 42px;
      display: block;
      background: #f9fafb;
      border: 1px solid rgba(143, 144, 166, 0.25);
      border-radius: 8px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      line-height: 22px;
      padding: 6px;
      margin-top: 30px;
      margin-left: -60%;
      outline: none;
      appearance: none;
    }
  }
  .btn {
    margin-top: 28%;
  }
  ul {
    list-style: none;
    font-family: "Inter";
    font-size: 17px;
    line-height: 22px;
    font-weight: 400;
    :nth-child(2) {
      margin-top: 50px;
    }
    :nth-child(3) {
      margin-top: 50px;
    }
  }
  .send_text {
    font-family: "Inter";
    font-size: 19px;
    line-height: 24px;
    font-weight: 500;
    color: #8f90a6;
    line-height: 54px;
  }
  .slectet_wrapper {
    position: relative;

    &::after {
      content: url(../assets/dropDawn.svg);
      position: absolute;
      top: 14px;
      left: 85px;
      z-index: 2;
    }
  }
  .show_btn {
    cursor: pointer;
    border: none;
  }
}
</style>