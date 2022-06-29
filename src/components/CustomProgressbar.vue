<template>
  <div class="progress_box">
    <div class="progress_box-inner">
      <div class="progress">
        <svg
          class="progress-circle"
          width="200px"
          height="200px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle class="progress-circle-back" cx="80" cy="80" r="74"></circle>
          <circle class="progress-circle-prog" cx="80" cy="80" r="74"></circle>
        </svg>
        <div class="progress-text" data-progress="0">{{ percentage }}%</div>

        <div class="cancel">
          <button @click="() => $router.push('again-plag')" class="cancel_img">
            <img class="cancel_imger" :src="require('@/assets/Cancel.svg')" />
          </button>
          <p>{{input_upload }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomProgressbar",
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
    },
  },
  watch: {
    percentage: {
      handler(newValue) {
        console.log(newValue);
        this.progressBar(newValue, 100);
      },
      immediate: true,
    },
  },
  mounted() {
    this.progressBar(this.percentage, 100);
  },
  methods: {
    progressBar(progressVal, totalPercentageVal = 100) {
      let strokeVal = (4.64 * 100) / totalPercentageVal;
      const x = document.querySelector(".progress-circle-prog");
      if (x) {
        x.style.strokeDasharray = progressVal * strokeVal + " 999";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.progress_box {
  display: flex;
  justify-content: center;
  align-items: center;
  .progress_box-inner {
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

  .cancel {
    position: relative;
    .cancel_img {
      position: absolute;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      right: -44px;
      top: -98px;
      padding: 4px 0 0 0;

      cursor: pointer;
      &:hover {
        background: #d9c7ff;
        transition: 0.7 ease all;
      }
    }
  }
}

.progress {
  position: relative;
}

.progress-circle {
  transform: rotate(-90deg);
  margin-left: 39px;
}

.progress-circle-back {
  fill: none;
  stroke: #d2d2d2;
  stroke-width: 10px;
}

.progress-circle-prog {
  fill: none;
  stroke: #7f56d9;
  stroke-width: 10px;
  stroke-dasharray: 0 999;
  stroke-dashoffset: 0px;
  transition: stroke-dasharray 0.7s linear 0s;
}

.progress-text {
  font-family: "Inter";
  font-size: 22px;
  line-height: 24px;
  position: absolute;
  left: 104px;
  bottom: 70px;
  color: #7f56d9;
}
</style>
