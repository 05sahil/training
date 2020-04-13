<template>
  <div id="">
  	<h3>Create quotes</h3>
  	<textarea name="message" rows="10" cols="50" v-model:value="value">
    </textarea>
    <div>
      <button @click="createquote">Create quote</button>	
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    quoteData: Object
  },
  
  data () {
  	return {
  	  value: ''
  	}
  },

  methods: {
  	createquote () {
      if (this.quoteData.count >= 100)
      {
        alert("Too many quotes!! Delete some.")
      }
      else {
      this.quoteData.quotes.push(this.value)  
      this.quoteData.count += 10
      this.value = '' 
      }
  	}
  }
}
</script>

<style>

</style>