export const teacherTexter = {
  state: {
    teacherName: []
  },
  getters: {
    teacherNames: state => state.teacherName
  },
  mutations: {
    TEACHERLINES: (state, payload) => {
      state.teacherName = payload
    }
  },
  actions: {
    teacherLine({
      commit
    }, payolad) {
      commit('TEACHERLINES', payolad)
    }
  }
}
