<template>
  <div class="container">
    <Questionnaire />
  </div>
</template>

<script>
import Questionnaire from './containers/Questionnaire.vue';

export default {
  name: 'app',
  components: {
    Questionnaire
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: calc(100% - 188px);

  margin-right: 94px;
  margin-left: 94px;
}
</style>
