<template>
  <p class="questionnaire-progress-title">
    Question {{ current }} of {{ total }}
  </p>
</template>

<script>
  export default {
    name: 'QuestionnaireProgressTitle',
    props: {
      current: Number,
      total: Number
    }
  }
</script>

<style lang="scss" scoped>
  .questionnaire-progress-title {
    display: block;

    margin-bottom: 6px;

    font-size: 16px;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: normal;
    line-height: (28px / 16px);
  }
</style>
