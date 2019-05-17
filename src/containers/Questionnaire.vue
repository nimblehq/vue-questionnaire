<template>
  <section class="questionnaire">
    <Header
      title="K10"
      submitButtonText="Continue"
      :enableSubmitButton="true"
      :onSubmit="submitHandler"
    />

    <Content>
      <template v-slot:progressTitle>
        <ProgressTitle
          :current="currentQuestionIndex + 1"
          :total="totalQuestion"
        />
      </template>

      <template v-slot:question>
        <ContentQuestion :question="question.text" />
      </template>

      <template v-slot:questionStepButton>
        <StepButton
          :isShowPrevious="isShowPrevious()"
          :isShowNext="isShowNext()"
          :onPreviousQuestion="previousQuestionHandler"
          :onNextQuestion="nextQuestionHandler"
        />
      </template>

      <template v-slot:answers>
        <ContentAnswer
          :answers="question.answers"
          :onAnswer="answerHandler"
          :currentAnswer="responses[currentQuestionIndex]"
        />
      </template>
    </Content>
  </section>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';

  import Content from '../components/Content';
  import ContentAnswer from '../components/ContentAnswer';
  import ContentQuestion from '../components/ContentQuestion';
  import Header from '../components/Header';
  import ProgressTitle from '../components/ProgressTitle';
  import StepButton from '../components/StepButton';

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
      Content,
      ContentAnswer,
      ContentQuestion,
      Header,
      ProgressTitle,
      StepButton
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

        setTimeout(() => {
          this.$store.dispatch('questionnaire/nextQuestion');
        }, 400);
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
