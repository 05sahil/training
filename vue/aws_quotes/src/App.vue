<template>
  <div id="app">
    <prog-bar></prog-bar>
    <create-quote :quoteData="quoteData"></create-quote>
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
