<template>
  <section>
    <div class="question-number">
      Question 1 of 10
    </div>
    <div class="question-text">
      This is question text?
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuestionnaireContentAnswer'
}
</script>

<style lang="scss" scoped>
section {
  font-family: Verdana, Geneva, sans-serif;
  display: flex;
  flex-flow: column;
}

section .question-number {
  margin-bottom: 16px;
  font-size: 14px;
}

section .question-text {
  font-size: 20px;
}
</style>
