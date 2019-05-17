export default {
  questionIndexIncrement (state, length) {
    if (state.currentQuestionIndex < length - 1 ) {
      ++state.currentQuestionIndex
    }

  },
  questionIndexDecrement (state) {
    if (state.currentQuestionIndex > 0 ) {
      --state.currentQuestionIndex
    }
  },
  addUserResponse (state, { currentQuestionIndex, questionId, answerId }) {
    state.responses[currentQuestionIndex] = { questionId, answerId }
  }
}
