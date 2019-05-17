export default {
  questionIndexIncrement (state, isLastQuestion) {
    if (!isLastQuestion) {
      ++state.currentQuestionIndex;
    }
  },
  questionIndexDecrement (state) {
    if (state.currentQuestionIndex > 0) {
      --state.currentQuestionIndex;
    }
  },
  addUserResponse (state, { currentQuestionIndex, questionId, answerId }) {
    state.responses[currentQuestionIndex] = { questionId, answerId };
  }
}
