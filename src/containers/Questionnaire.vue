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
        <QuestionnaireProgressTitle :current="currentQuestionIndex + 1" :total="totalQuestion" />
      </template>

      <template v-slot:question>
        <QuestionnaireContentQuestion :question="question.text" />
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
        <QuestionnaireContentAnswer :answers="question.answers" :onAnswer="answerHandler" />
      </template>
    </QuestionnaireContent>
  </section>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  import QuestionnaireContent from '../components/QuestionnaireContent';
  import QuestionnaireContentAnswer from '../components/QuestionnaireContentAnswer';
  import QuestionnaireContentQuestion from '../components/QuestionnaireContentQuestion';
  import QuestionnaireHeader from '../components/QuestionnaireHeader';
  import QuestionnaireProgressTitle from '../components/QuestionnaireProgressTitle';
  import QuestionnaireStepButton from '../components/QuestionnaireStepButton';

  export default {
    name: 'Questionnaire',
    computed: {
      ...mapState('questionnaire', {
        currentQuestionIndex: 'currentQuestionIndex'
      }),
      ...mapGetters('questionnaire', {
        question: 'getCurrentQuestion',
        totalQuestion: 'getQuestionsLength'
      })
    },
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
        this.$store.dispatch('questionnaire/nextQuestion')
      },
      previousQuestionHandler() {
        this.$store.dispatch('questionnaire/previousQuestion')
      },
      submitHandler() {
        window.console.log('DISPATCH: SAVE_QUESTIONNAIRE');
      },
      answerHandler(answerId) {
        this.$store.dispatch('questionnaire/nextQuestion')
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
