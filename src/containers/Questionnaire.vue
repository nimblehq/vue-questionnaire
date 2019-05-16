<template>
  <section class="questionnaire">
    <QuestionnaireHeader title="K10" submitButtonText="Continue" :enableSubmitButton="true" :onSubmit="submitHandler" />
    <QuestionnaireContent>
      <template v-slot:question>
        <QuestionnaireContentQuestion />
      </template>
      <template v-slot:nextQuestionButton>
        <QuestionnaireContentStepButton :isShowNext="true" :isShowPrevious="true" :onNextQuestion="nextQuestionHandler" :onPreviousQuestion="backQuestionHandler" />
      </template>
      <template v-slot:answer>
        <QuestionnaireContentAnswer />
      </template>
    </QuestionnaireContent>
  </section>
</template>

<script>
import QuestionnaireHeader from '../components/QuestionnaireHeader.vue';
import QuestionnaireContent from '../components/QuestionnaireContent.vue';
import QuestionnaireContentQuestion from '../components/QuestionnaireContentQuestion.vue';
import QuestionnaireContentStepButton from '../components/QuestionnaireContentStepButton.vue';
import QuestionnaireContentAnswer from '../components/QuestionnaireContentAnswer.vue';
import questions from '../data/questions.json';

export default {
  name: 'Questionnaire',
  components: {
    QuestionnaireHeader,
    QuestionnaireContent,
    QuestionnaireContentQuestion,
    QuestionnaireContentStepButton,
    QuestionnaireContentAnswer
  },
  methods: {
    submitHandler() {
      console.log('DISPATCH: SAVE_QUESTIONNAIRE');
    },
    nextQuestionHandler() {
      console.log('DISPATCH: NEXT_QUESTION')
    },
    backQuestionHandler() {
      console.log('DISPATCH: BACK_QUESTION')
    }
  }
}
</script>
