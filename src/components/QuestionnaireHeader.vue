<template>
  <header class="questionnaire-header">
    <h1 class="questionnaire-header__title">
      {{ title }}
    </h1>
    <Button
      type="button"
      :text="submitButtonText"
      :onClick="onSubmit"
      :disabled="!enableSubmitButton"
    />
  </header>
</template>

<script>
  import Button from './Button';

  export default {
    name: 'QuestionnaireHeader',
    props: {
      enableSubmitButton: Boolean,
      onSubmit: Function,
      submitButtonText: String,
      title: String,
    },
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
  .questionnaire-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      margin-top: 0;
      margin-bottom: 0;

      font-size: 26px;
      font-family: Verdana, Geneva, sans-serif;
      font-weight: normal;
      line-height: (51px / 26px);
    }
  }
</style>
