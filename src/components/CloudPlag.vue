<template>
  <div class="clouder">
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
          <div class="input_file">
            <input
              type="file"
              class="input_upload"
              style="cursor: poninter"
              @change="Fileroute"
            />
            <button @click="() => $router.push('')" class="cloud_btn">
              Browse files
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CloudPlag",
  components: {},
  data() {
    return {
      fayl: "",
      draf: "",
    };
  },
  methods: {
    Fileroute(e) {
      const formData = new FormData();
      formData.append("draf", false);
      formData.append("file", e.target.files[0]);
      axios
        .post("https://plag.m1.uz/detect/", formData, {
          headers: {
            Authorization: "Bearer" + ` ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          console.log("res", res.data.id);
          this.$router.push(`/main-plag/${res.data.id}`);
        })
        .catch((error) => {
          console.error(error);
        });
      axios.get("https://plag.m1.uz/detect/", {
        headers: {
          Authorization: "Bearer" + ` ${localStorage.getItem("accessToken")}`,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.clouder {
  height: 100vh;
  background: #f9fafb;
  .header {
    height: 95px;
    background: #6941c6;
    padding: 0 5px;
    position: relative;
    .cloud_title {
      font-family: "Inter";
      font-size: 32px;
      line-height: 36px;
      color: #ffffff;
      position: absolute;
      top: 25px;
      left: 125px;
    }
  }
  .cloud_main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
    .cloud {
      width: 800px;
      height: 290px;
      background: #ffffff;
      box-shadow: 0px 0px 130px 30px rgba(16, 24, 40, 0.03);
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;

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
        .cloud_text {
          font-family: "Inter";
          font-style: normal;
          font-size: 20px;
          line-height: 44px;
          font-weight: 400;
        }
        .cloud_btn {
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
      }
    }
  }
  .input_file {
    position: relative;
    input {
      position: absolute;
      top: 16px;
      left: 94px;
      width: 85px;
      opacity: 0;
      cursor: pointer;
    }
  }
}
</style>