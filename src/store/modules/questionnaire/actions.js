export default {
  nextQuestion ({commit}) {
    commit('questionIndexIncrement')
  },
  previousQuestion ({commit}) {
    commit('questionIndexDecrement')
  }
}
