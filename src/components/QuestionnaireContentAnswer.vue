<template>
  <ul class="questionnaire-content-answer">
    <li v-for="(answer, index) in answers" :key="answer.id" class="questionnaire-content-answer__choice">
      <label class="questionnaire-content-answer__label">
        <input
          type="radio"
          class="questionnaire-content-answer__control"
          name="answer"
          :value="answer.id"
          :checked="isChecked(answer.id)"
          @click="onAnswer(answer.id)"
          hidden
        />
        <span class="questionnaire-content-answer__indicator">
          {{ indicator(index) }}
        </span>
        <span class="questionnaire-content-answer__text">
          {{ answer.text }}
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'QuestionnaireContentAnswer',
    props: {
      answers: Array,
      onAnswer: Function,
      currentAnswer: Object
    },
    methods: {
      indicator(index) {
        return String.fromCharCode(97 + index);
      },
      isChecked(answerId) {
        if (this.currentAnswer) {
          return this.currentAnswer.answerId === answerId;
        }

        return false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .questionnaire-content-answer {
    padding-left: 26px;
    font-family: Verdana, Geneva, sans-serif;

    &__choice {
      border-bottom: 1px solid #d3dfe0;

      padding-top: 12px;
      padding-bottom: 12px;

      &:last-child {
        border-bottom: 0;
      }
    }

    &__label {
      display: flex;
      align-items: center;

      cursor: pointer;
    }

    &__indicator {
      display: inline-flex;
      justify-content: center;
      align-items: center;

      width: 32px;
      height: 32px;

      border-radius: 50%;
      border: solid 1px #d3dfe0;

      font-size: 12px;

      input:checked + & {
        border-color: #ff1966;
        color: #fff;
        background-color: #ff1966;
      }
    }

    &__text {
      display: inline-flex;
      margin-left: 20px;
    }
  }
</style>
