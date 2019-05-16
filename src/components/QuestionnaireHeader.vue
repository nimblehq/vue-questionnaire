<template>
  <header>
    <h1>{{ title }}</h1>
    <button type="button"
            @click="onSubmit"
            :disabled="!enableSubmitButton"
    >
      {{ submitButtonText }}
    </button>
  </header>
</template>

<script>
export default {
  name: 'QuestionnaireHeader',
  props: {
    enableSubmitButton: Boolean,
    onSubmit: Function,
    submitButtonText: String,
    title: String,
  }
}
</script>
