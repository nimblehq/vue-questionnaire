import actions from './actions'
import mutations from './mutations'
import questions from '../../../data/questions'

const state = {
  currentQuestionIndex: 0,
  questions: questions.questions
}

const getters = {
  getCurrentQuestion: (state) => state.questions[state.currentQuestionIndex]
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
