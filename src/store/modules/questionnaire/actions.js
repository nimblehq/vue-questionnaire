export default {
  nextQuestion ({ commit, getters }) {
    commit('questionIndexIncrement', getters.getQuestionsLength)
  },
  previousQuestion ({ commit }) {
    commit('questionIndexDecrement')
  },
  answerQuestion ({ commit }, { currentQuestionIndex, questionId, answerId }) {
    commit('addUserResponse', { currentQuestionIndex, questionId, answerId })
  }
}
