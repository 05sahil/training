<template>
  <div id="app">
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
