<template>
  <h2 class="questionnaire-content-question">
    {{ question }}
  </h2>
</template>

<script>
  export default {
    name: 'QuestionnaireContentQuestion',
    props: {
      question: String
    }
  }
</script>

<style lang="scss" scoped>
  .questionnaire-content-question {
    font-size: 18px;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: normal;
    line-height: (31px / 18px);
  }
</style>
