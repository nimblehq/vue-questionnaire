import actions from './actions';
import mutations from './mutations';
import questions from '../../../data/questions';

const state = {
  currentQuestionIndex: 0,
  questions: questions.questions,
  responses: {}
};

const getters = {
  getCurrentQuestion: (state) => state.questions[state.currentQuestionIndex],
  getQuestionsLength: (state) => state.questions.length,
  isLastQuestion: (state) => (state.currentQuestionIndex + 1) === state.questions.length
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
