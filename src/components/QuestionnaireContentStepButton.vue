<template>
  <div>
    <Button v-show="isShowPrevious"
            type="button"
            text="Back"
            :disabled="false"
            :onClick="onPreviousQuestion" />
    <Button v-show="isShowNext"
            type="button"
            text="Next Question"
            :disabled="false"
            :onClick="onNextQuestion" />
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'QuestionnaireStepButton',
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
