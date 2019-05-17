<template>
  <section class="questionnaire">
    <QuestionnaireHeader
      title="K10"
      submitButtonText="Continue"
      :enableSubmitButton="true"
      :onSubmit="submitHandler"
    />

    <QuestionnaireContent>
      <template v-slot:progressTitle>
        <QuestionnaireProgressTitle :current="1" :total="10" />
      </template>

      <template v-slot:question>
        <QuestionnaireContentQuestion question="About how often did you feel tired out for no good reason?" />
      </template>

      <template v-slot:questionStepButton>
        <QuestionnaireStepButton
          :isShowPrevious="true"
          :isShowNext="true"
          :onPreviousQuestion="previousQuestionHandler"
          :onNextQuestion="nextQuestionHandler"
        />
      </template>

      <template v-slot:answers>
        <QuestionnaireContentAnswer :answers="answers" :onAnswer="answerHandler" />
      </template>
    </QuestionnaireContent>
  </section>
</template>

<script>
  import QuestionnaireContent from '../components/QuestionnaireContent';
  import QuestionnaireContentAnswer from '../components/QuestionnaireContentAnswer';
  import QuestionnaireContentQuestion from '../components/QuestionnaireContentQuestion';
  import QuestionnaireHeader from '../components/QuestionnaireHeader';
  import QuestionnaireProgressTitle from '../components/QuestionnaireProgressTitle';
  import QuestionnaireStepButton from '../components/QuestionnaireStepButton';

  export default {
    name: 'Questionnaire',
    data: () => ({
      answers: [
        {
          id: 1,
          text: 'None of the time'
        },
        {
          id: 2,
          text: 'A little of time'
        },
        {
          id: 3,
          text: 'Same of the time'
        },
        {
          id: 4,
          text: 'Most of the time'
        },
        {
          id: 5,
          text: 'All of the time'
        }
      ]
    }),
    components: {
      QuestionnaireContent,
      QuestionnaireContentAnswer,
      QuestionnaireContentQuestion,
      QuestionnaireHeader,
      QuestionnaireProgressTitle,
      QuestionnaireStepButton
    },
    methods: {
      nextQuestionHandler() {
        window.console.log('DISPATCH: GO_TO_NEXT_QUESTION');
      },
      previousQuestionHandler() {
        window.console.log('DISPATCH: GO_BACK_TO_PREVIOUS_QUESTION');
      },
      submitHandler() {
        window.console.log('DISPATCH: SAVE_QUESTIONNAIRE');
      },
      answerHandler(answerId) {
        window.console.log(`DISPATCH: ANSWER_ID_${answerId}_QUESTIONNAIRE`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .questionnaire {
    width: 100%;
  }
</style>
