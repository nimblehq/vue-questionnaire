<template>
  <div class="questionnaire-content">
    <header class="questionnaire-content__header">
      <slot name="progressTitle"></slot>
      <slot name="question"></slot>
      <slot name="questionStepButton"></slot>
    </header>

    <slot name="answers"></slot>
  </div>
</template>

<script>
  export default {
    name: 'QuestionnaireContent'
  }
</script>

<style lang="scss" scoped>
  .questionnaire-content {
    margin-top: 32px;

    border: 1px solid #d3dfe0;
    border-radius: 4px;

    padding-bottom: 48px;

    background-color: #fff;

    &__header {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-content: space-between;

      height: 65px;
      padding: 26px 26px 16px 26px;
    }
  }
</style>
