<template>
  <section class="questionnaire">
    <QuestionnaireHeader title="K10" submitButtonText="Continue" :enableSubmitButton="true" :onSubmit="submitHandler" />
  </section>
</template>

<script>
import QuestionnaireHeader from '../components/QuestionnaireHeader.vue';
import questions from '../data/questions.json';

export default {
  name: 'Questionnaire',
  components: {
    QuestionnaireHeader
  },
  methods: {
    submitHandler() {
      console.log('DISPATCH: SAVE_QUESTIONNAIRE');
    }
  }
}
</script>
