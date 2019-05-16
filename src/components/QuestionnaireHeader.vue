<template>
  <header>
    <h1>{{ title }}</h1>
    <Button type="button" :text="submitButtonText" :onClick="onSubmit" :disabled="!enableSubmitButton" />
  </header>
</template>

<script>
import Button from './Button.vue';

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
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;

  font-size: 26px;
  font-family: Verdana, Geneva, sans-serif;
  font-weight: normal;
  line-height: (32px / 26px);
}
</style>
