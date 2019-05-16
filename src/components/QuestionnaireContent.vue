<template>
  <div>
    <slot name="header"></slot>
    <slot name="question"></slot>
    <slot name="answer"></slot>
  </div>
</template>

<script>
export default {
  name: 'QuestionnaireContent'
}
</script>
