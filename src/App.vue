<template>
  <div>
    <QuestionnaireHeader title="K9" :onSubmit="submitHandler" submitButtonText="Continue" :enableSubmitButton="true" />
  </div>
</template>

<script>
import QuestionnaireHeader from './components/QuestionnaireHeader.vue'
// import QuestionnaireContent from './components/QuestionnaireContent.vue'
// import Question from './components/Questionnaire.vue'
// import Answer from './components/Answer.vue'
import questions from './data/questions.json'

export default {
  name: 'app',
  components: {
    QuestionnaireHeader
  },
  methods: {
    submitHandler() {
      alert('DISPATCH SUBMIT')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
