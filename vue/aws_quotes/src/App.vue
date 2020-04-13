<template>
  <div id="app">
    <prog-bar :quoteData="quoteData"></prog-bar>
    <create-quote :quoteData="quoteData"></create-quote>
    <quote-grid :quoteData="quoteData"></quote-grid>
    <v-info></v-info>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quoteData: {
        quotes: [],
        count: 0
      }
    }
  }
}
</script>

<style>

</style>
