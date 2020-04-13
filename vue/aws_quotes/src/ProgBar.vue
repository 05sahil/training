<template>
  <div>
    <div class="outerbar">
      <div id="innerBar" :style="{width: quoteData.count + '%', background: 'dodgerblue'}">{{ quoteData.count/10 }}/10</div>
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