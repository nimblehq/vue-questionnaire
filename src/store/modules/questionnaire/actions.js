export default {
  nextQuestion ({commit, getters}) {
    commit('questionIndexIncrement', getters.getQuestionsLength)
  },
  previousQuestion ({commit}) {
    commit('questionIndexDecrement')
  }
}
