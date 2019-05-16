<template>
  <section class="questionnaire">
    <QuestionnaireHeader title="K10" submitButtonText="Continue" :enableSubmitButton="true" :onSubmit="submitHandler" />
    <QuestionnaireContent>
      <template v-slot:header>
        <QuestionnaireContentHeader />
      </template>
      <template v-slot:question>
        <QuestionnaireContentQuestion />
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
import QuestionnaireContentHeader from '../components/QuestionnaireContentHeader.vue';
import QuestionnaireContentQuestion from '../components/QuestionnaireContentQuestion.vue';
import QuestionnaireContentAnswer from '../components/QuestionnaireContentAnswer.vue';
import questions from '../data/questions.json';

export default {
  name: 'Questionnaire',
  components: {
    QuestionnaireHeader,
    QuestionnaireContent,
    QuestionnaireContentHeader,
    QuestionnaireContentQuestion,
    QuestionnaireContentAnswer
  },
  methods: {
    submitHandler() {
      console.log('DISPATCH: SAVE_QUESTIONNAIRE');
    }
  }
}
</script>
