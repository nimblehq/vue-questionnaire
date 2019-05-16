<template>
  <main class="container">
    <Questionnaire/>
  </main>
</template>

<script>
  import Questionnaire from './containers/Questionnaire';

  export default {
    name: 'app',
    components: {
      Questionnaire
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;

    width: 1000px;
    height: 100vh;

    margin-right: auto;
    margin-left: auto;
  }
</style>
