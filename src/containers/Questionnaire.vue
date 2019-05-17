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
        <QuestionnaireProgressTitle
          :current="currentQuestionIndex + 1"
          :total="totalQuestion"
        />
      </template>

      <template v-slot:question>
        <QuestionnaireContentQuestion :question="question.text" />
      </template>

      <template v-slot:questionStepButton>
        <QuestionnaireStepButton
          :isShowPrevious="isShowPrevious()"
          :isShowNext="isShowNext()"
          :onPreviousQuestion="previousQuestionHandler"
          :onNextQuestion="nextQuestionHandler"
        />
      </template>

      <template v-slot:answers>
        <QuestionnaireContentAnswer
          :answers="question.answers"
          :onAnswer="answerHandler"
          :currentAnswer="responses[currentQuestionIndex]"
        />
      </template>
    </QuestionnaireContent>
  </section>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

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
        currentQuestionIndex: 'currentQuestionIndex',
        responses: 'responses'
      }),
      ...mapGetters('questionnaire', {
        question: 'getCurrentQuestion',
        totalQuestion: 'getQuestionsLength',
        isLastQuestion: 'isLastQuestion',
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
        this.$store.dispatch('questionnaire/nextQuestion');
      },
      previousQuestionHandler() {
        this.$store.dispatch('questionnaire/previousQuestion');
      },
      submitHandler() {
        window.console.log('DISPATCH: ', this.responses);
      },
      answerHandler(answerId) {
        this.$store.dispatch('questionnaire/answerQuestion', {
          currentQuestionIndex: this.currentQuestionIndex,
          questionId: this.question.id,
          answerId
        });

        this.$store.dispatch('questionnaire/nextQuestion');
      },
      isShowNext() {
        return this.responses[this.currentQuestionIndex] && !this.isLastQuestion;
      },
      isShowPrevious() {
        return this.currentQuestionIndex !== 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .questionnaire {
    width: 100%;
  }
</style>
