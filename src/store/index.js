import axios from "axios";
import { createStore } from "vuex";
import { teacherTexter } from "./teacherText";
import {progressPage} from "./progress"
import {counterPage} from "./counter"

const store = createStore({
  modules: {
    teacherTexter,
  progressPage,
  counterPage
  },
  state: {
    
    fileData: {
      teacherName: "",
      subject: "",
    },
  },
  getters: {
    teacherName(state) {
      return state.fileData.teacherName;
    },
  },
  mutations: {
    setFileData(state, payload) {
      state.fileData.teacherName = payload.selecteder;
      state.fileData.subject = payload;
    },
  },
  actions: {
    sendData({
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `https://plag.m1.uz/detect/${payload.id}`, {
            receiver: payload.option,
            science: payload.subjects,
          }, {
            headers: {
              Authorization: "Bearer" + `${payload.token}`,
            },
          }
          )
          .then((response) => {
            console.log(payload);
            commit("setFileData", payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
})

export default store;
