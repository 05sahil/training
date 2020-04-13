<template>
  <div>
    <div class="outerbar">
      <div id="innerBar"></div>
      </div>
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
  .outerbar {
    background: lightgrey;
    height: 20px;
  }
</style>