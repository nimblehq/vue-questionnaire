<template>
  <div>
    <header>
      <slot name="question"></slot>
      <slot name="nextQuestionButton"></slot>
    </header>
    <slot name="answer"></slot>
  </div>
</template>

<script>
export default {
  name: 'QuestionnaireContent'
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
