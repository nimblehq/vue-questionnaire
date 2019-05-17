<template>
  <div class="questionnaire-content">
    <header class="questionnaire-content__header">
      <div class="questionnaire-content__wrapper">
        <slot name="progressTitle"></slot>
        <slot name="question"></slot>
      </div>
      <slot name="questionStepButton"></slot>
    </header>

    <slot name="answers"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Content'
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
      justify-content: space-between;
      align-items: center;

      padding: 26px 26px 16px 26px;
    }

    &__wrapper {
      flex: 0 1 calc(100% - 320px);
    }
  }
</style>
