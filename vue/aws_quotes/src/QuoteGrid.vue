<template>
  <div id="grid">
    <v-quote v-for="(quote, index) in quoteData.quotes" @click.native="deleteQuote(index)">{{ quote }}</v-quote>
  </div>
</template>

<script>
export default {
  props: {
    quoteData: Object
  },
  data () {
    return {
    }
  },
  methods: {
    deleteQuote (index) {
      this.quoteData.quotes.splice(index, 1)
    }
  }
}
</script>

<style>
#grid {
    display: flex;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
  }

</style>
