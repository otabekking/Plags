<template>
  <div class="progress">
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
        {{ percentage }}
        <custom-progressbar v-bind="{ percentage }" />

        

       x`1`

        <div v-if="fileText" class="pdf">
          <p class="pdf_text">{{ fileText.file_name }}  </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CustomProgressbar from "@/components/CustomProgressbar.vue";

export default {
  name: "ProgressPlag",
  components: { CustomProgressbar },
  data() {
    return {
      fill: 0,
      fileText: "",
    };
  },

  methods: {
    getText() {
      axios
        .get(`https://plag.m1.uz/detect/`, {
          headers: {
            Authorization: "Bearer" + ` ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          this.fileText = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getText();
    var intval = setInterval(() => {
      if (this.fill < 100) {
        this.fill += 0.1;
      } else {
        clearInterval(intval);
        this.$router.push("");
      }
    }, 2);
  },
};
</script>

<style lang="scss" scoped>
.progress {
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

  .circle-wrap {
    margin: 160px auto;
    width: 160px;
    height: 160px;
    background: #fefcff;
    border-radius: 50%;
  }
  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 50%;
  }
  .mask .fill {
    clip: rect(0px, 75px, 150px, 0px);
    background-color: #7f56d9;
  }
  .circle-wrap .circle .mask {
    clip: rect(0px, 150px, 150px, 70px);
  }

  .mask.full,
  .circle .fill {
    animation: fill ease-in-out 2s;
    // transform: rotate(180deg);
  }

  @keyframes fill {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .circle-wrap .inside-circle {
    width: 135px;
    height: 135px;
    border-radius: 50%;
    background: #ffffff;
    line-height: 130px;
    text-align: center;
    margin-top: 8px;
    margin-left: 8px;
    color: #7f56d9;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 2em;
  }
  .cancel {
    position: relative;
    .cancel_img {
      position: absolute;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      right: -44px;
      top: -4px;
      padding: 4px 0 0 0;

      cursor: pointer;
      &:hover {
        background: #d9c7ff;
        transition: 0.7 ease all;
      }
    }
  }
  .pdf {
    position: relative;
    .pdf_text {
      position: absolute;
      right: 108px;
      top: 107px;
    }
  }
}
</style>
