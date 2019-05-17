<template>
  <div class="questionnaire-step-button">
    <Button
      type="button"
      text="Back"
      class="questionnaire-step-button__back"
      v-show="isShowPrevious"
      :disabled="false"
      :onClick="onPreviousQuestion"
    />

    <Button
      type="button"
      text="Next Question"
      class="questionnaire-step-button__next"
      v-show="isShowNext"
      :disabled="false"
      :onClick="onNextQuestion"
    />
  </div>
</template>

<script>
  import Button from './Button'

  export default {
    name: 'StepButton',
    props: {
      isShowNext: Boolean,
      isShowPrevious: Boolean,
      onNextQuestion: Function,
      onPreviousQuestion: Function,
    },
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
  .questionnaire-step-button {
    display: flex;
    justify-content: flex-end;

    width: 320px;
    height: 65px;

    &__back {
      border: 0;
      border-radius: 0;

      color: #11cbd9;

      background-color: transparent;

      &:hover,
      &:focus {
        border-color: transparent;
        background-color: transparent;
      }
    }

    &__next {
      box-shadow: 0 25px 20px -19px rgba(17, 203, 217, 0.3);
    }
  }
</style>
