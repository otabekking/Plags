<template>
  <div class="sending">
    <header>
      <nav class="header">
        <h1 class="cloud_title">Asosiy fayllar</h1>
      </nav>
    </header>
    <div class="sending_inner">
      <div class="success">
        <div class="success_inner">
          <div class="success_img">
            <img class="success_imgs" :src="require('@/assets/tick.svg')" />
          </div>
          <h1 class="success_title">Muvaffaqqiyatli joylandi</h1>
          <p class="success_text">
            Sizning faylingiz quyidagi fanga muvofaqiyatli joylandi
          </p>
          <div class="texter">
            <p class="success_texter">
              Talaba: <span class="success_student">Sarvar Erkinjonov</span>
            </p>
            <p class="success_texter">
              O'qtuvchi:
              <span class="success_item_name">
                {{ teacherName }}
              </span>
            </p>
          </div>

          <button @click="() => $router.push('black-plag')" class="success_btn">
            Bosh menyuga qaytish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SuccessPlag",
  components: {},
  data() {
    return {};
  },

  created() {
    this.teacherName;
    console.log("teacherName", this.teacherName);
  },

  computed: {
    ...mapGetters(["teacherName"]),
  },

  methods: {
    teacherList() {
      return this.teacherName;
    },
  },
};
</script>

<style lang="scss" scoped>
.sending {
  background: #f9fafb;
  height: 100vh;

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
      top: 30px;
      left: 125px;
    }
  }
  .sending_inner {
    display: flex;
    justify-content: center;
    align-items: center;

    .success {
      width: 800px;
      height: 500px;
      background: #ffffff;
      box-shadow: 0px 0px 130px 30px rgba(16, 24, 40, 0.03);
      border-radius: 16px;
      margin-top: 90px;
    }
  }
  .success_inner {
    padding: 40px;
    position: relative;
    .success_title {
      text-align: center;
      font-family: "Inter";
      font-weight: 600;
      font-size: 32px;
      line-height: 36px;
      margin-top: 100px;
      color: #101828;
    }
    .success_text {
      font-family: "Inter";
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      margin-top: 30px;
      color: #555770;
    }
    .success_texter {
      font-family: "Inter";
      font-size: 17px;
      line-height: 22px;
      margin-top: 20px;
    }
    .success_img {
      position: absolute;
      left: 41%;
      top: -50px;
    }
    .texter {
      margin-top: 50px;
      margin-left: 102px;
      .success_student {
        margin-left: 40px;
      }
      .success_teacher {
        margin-left: 20px;
      }
    }
    .success_btn {
      width: 380px;
      height: 50px;
      background: #7f56d9;
      box-shadow: 0px 14px 30px rgba(127, 86, 217, 0.15);
      border-radius: 8px;
      color: #ffffff;
      font-family: "Inter";
      font-size: 15px;
      line-height: 22px;
      margin-left: 26%;
      margin-top: 11%;
      cursor: pointer;
      border: none;
      &:hover {
        background: #a894d3;
        transition: 0.7s ease all;
      }
    }
  }
  .success_imgs {
    width: 100px;
    height: 100px;
  }
  .success_item_name {
    margin-left: 17px;
  }
}
</style>