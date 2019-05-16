<template>
  <button class="btn" :type="type" @click="onClick" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      disabled: Boolean,
      onClick: Function,
      text: String,
      type: String
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    border-radius: 80px;
    border-color: #11cbd9;
    padding: 16px 37px;

    color: #fff;
    font-size: 14px;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: bold;
    line-height: (17px / 14px);
    letter-spacing: 1px;

    background-color: #11cbd9;
    cursor: pointer;
    outline: 0;

    &:hover {
      border-color: #0fb5c1;
      background-color: #0fb5c1;
    }

    &:focus {
      border-color: darken( #0fb5c1, 5%);
      background-color: darken( #0fb5c1, 5%);
    }

    &:disabled {
      border-color: #d3dfe0;
      background-color: #d3dfe0;
    }
  }
</style>
