<template>
  <div id="quote">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    quoteData: Object
  },
}
</script>

<style scoped>
  #quote {
    padding: 20px;
    width: 15%;
    border: 2px solid dodgerblue;
    margin-bottom: 20px;
    text-align: center;
    font-size: 16px;
  }

</style>