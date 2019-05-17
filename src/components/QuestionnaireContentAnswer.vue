<template>
  <ul class="questionnaire-content-answer">
    <li v-for="(answer, index) in answers" v-bind:key="answer.id">
      <label>
        <input type='radio' name="answer" :value="answer.id" @click="onAnswer(answer.id)" hidden />
        <div class="indicator">{{ String.fromCharCode(97 + index) }}</div>
        <div class="description">{{ answer.text }}</div>
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'QuestionnaireContentAnswer',
    props: {
      answers: Array,
      onAnswer: Function
    }
  }
</script>

<style lang="scss" scoped>
  .questionnaire-content-answer {
    font-family: Verdana, Geneva, sans-serif;
    padding-left: 26px;
  }

  .questionnaire-content-answer label {
    cursor: pointer;

    .indicator {
      display: inline-flex;
      justify-content: center;
      align-items: center;

      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: solid 1px #d3dfe0;

      font-size: 12px;
    }

    .description {
      display: inline;
    }

    input:checked + .indicator {
      background-color: #ff1966;
      border-color: #ff1966;
      color: #fff;
    }
  }
</style>
